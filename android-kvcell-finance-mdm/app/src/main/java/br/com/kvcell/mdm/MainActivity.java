package br.com.kvcell.mdmd;

import android.app.Activity;
import android.app.admin.DevicePolicyManager;
import android.content.ComponentName;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.TextView;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import androidx.work.PeriodicWorkRequest;
import androidx.work.WorkManager;

public class MainActivity extends Activity {
    private static final String BASE="https://kvcell.squareweb.app"; private String token; private TextView status,finance; private DevicePolicyManager dpm; private ComponentName admin;
    @Override public void onCreate(Bundle b){super.onCreate(b);setContentView(br.com.kvcell.mdmd.R.layout.activity_main);status=findViewById(br.com.kvcell.mdmd.R.id.status);finance=findViewById(br.com.kvcell.mdmd.R.id.finance);dpm=(DevicePolicyManager)getSystemService(DEVICE_POLICY_SERVICE);admin=new ComponentName(this,KVCellDeviceAdminReceiver.class);
        token=getIntent().getData()!=null?getIntent().getData().getLastPathSegment():getPreferences(0).getString("token",null);
        findViewById(br.com.kvcell.mdmd.R.id.pay).setOnClickListener(v->{if(token!=null)startActivity(new Intent(Intent.ACTION_VIEW,Uri.parse(BASE+"/public/mdm/enroll/"+token)));});
        if(token!=null){getPreferences(0).edit().putString("token",token).apply();getSharedPreferences("mdm",0).edit().putString("token",token).apply();syncNow();scheduleSync();}else status.setText("Leia o QR de matrícula fornecido pela KV CELL.");
    }
    private void scheduleSync(){WorkManager.getInstance(this).enqueue(new PeriodicWorkRequest.Builder(MDMSyncWorker.class,15,TimeUnit.MINUTES).build());}
    private int battery(){try{android.os.BatteryManager bm=(android.os.BatteryManager)getSystemService(BATTERY_SERVICE);return bm.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);}catch(Exception e){return 0;}}
    private JSONObject heartbeat() throws Exception{URL u=new URL(BASE+"/public/mdm/heartbeat/"+token);HttpURLConnection c=(HttpURLConnection)u.openConnection();c.setRequestMethod("POST");c.setConnectTimeout(10000);c.setReadTimeout(15000);c.setDoOutput(true);c.setRequestProperty("Content-Type","application/json");JSONObject body=new JSONObject().put("battery",battery()).put("app_version","1.1.0");try(OutputStream os=c.getOutputStream()){os.write(body.toString().getBytes(StandardCharsets.UTF_8));}if(c.getResponseCode()<200||c.getResponseCode()>=300)throw new IllegalStateException("HTTP "+c.getResponseCode());BufferedReader r=new BufferedReader(new InputStreamReader(c.getInputStream(),StandardCharsets.UTF_8));StringBuilder s=new StringBuilder();String l;while((l=r.readLine())!=null)s.append(l);return new JSONObject(s.toString());}
    private void syncNow(){Executors.newSingleThreadExecutor().execute(()->{try{JSONObject o=heartbeat();applyPolicy(o);runOnUiThread(()->{status.setText("KV CELL MDM
Política: "+o.optString("policy_state","normal"));finance.setText("Saldo: R$ "+String.format(java.util.Locale.US,"%.2f",o.optDouble("balance",0))+"
Próximo vencimento: "+o.optString("next_due","—")+"
Dias até vencimento: "+o.optInt("days_to_due",0)+"
Parcelas restantes: "+o.optInt("installments_remaining",0));});}catch(Exception e){runOnUiThread(()->status.setText("Aguardando sincronização com a KV CELL."));}});}
    private void applyPolicy(JSONObject o){try{String policy=o.optString("policy_state","normal");if(!dpm.isDeviceOwnerApp(getPackageName()))return;if("bloqueado".equals(policy)){dpm.setUninstallBlocked(admin,getPackageName(),true);dpm.setDeviceOwnerLockScreenInfo(admin,o.optString("message","Aparelho em atraso no crediário KV CELL"));dpm.lockNow();}else if("normal".equals(policy)||"quitado".equals(policy)||"pausado".equals(policy)){dpm.setUninstallBlocked(admin,getPackageName(),false);dpm.setDeviceOwnerLockScreenInfo(admin,null);}}catch(Exception ignored){}}
}
