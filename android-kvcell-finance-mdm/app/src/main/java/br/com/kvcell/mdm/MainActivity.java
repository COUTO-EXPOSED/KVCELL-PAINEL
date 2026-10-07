package br.com.kvcell.mdmd;

import android.app.Activity;
import android.app.admin.DevicePolicyManager;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.ComponentName;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Button;
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
    private static final String BASE="https://kvcell.squareweb.app";
    private String token;
    private TextView status,finance,pix;
    private String paymentUrl;
    private DevicePolicyManager dpm;
    private ComponentName admin;

    @Override public void onCreate(Bundle b){
        super.onCreate(b); setContentView(br.com.kvcell.mdmd.R.layout.activity_main);
        status=findViewById(br.com.kvcell.mdmd.R.id.status); finance=findViewById(br.com.kvcell.mdmd.R.id.finance); pix=findViewById(br.com.kvcell.mdmd.R.id.pix);
        dpm=(DevicePolicyManager)getSystemService(DEVICE_POLICY_SERVICE); admin=new ComponentName(this,KVCellDeviceAdminReceiver.class);
        Intent in=getIntent();
        if(DevicePolicyManager.ACTION_GET_PROVISIONING_MODE.equals(in.getAction())){
            setResult(RESULT_OK,new Intent().putExtra(DevicePolicyManager.EXTRA_PROVISIONING_MODE,DevicePolicyManager.PROVISIONING_MODE_FULLY_MANAGED_DEVICE)); finish(); return;
        }
        if(DevicePolicyManager.ACTION_ADMIN_POLICY_COMPLIANCE.equals(in.getAction())){ setResult(RESULT_OK); finish(); return; }
        Uri data=in.getData(); token=data!=null?data.getLastPathSegment():getPreferences(0).getString("token",null);
        Button pay=findViewById(br.com.kvcell.mdmd.R.id.pay); Button copy=findViewById(br.com.kvcell.mdmd.R.id.copy);
        pay.setOnClickListener(v->{ if(paymentUrl!=null && !paymentUrl.isEmpty()){ try{ startActivity(new Intent(Intent.ACTION_VIEW,Uri.parse(paymentUrl))); }catch(Exception ignored){ syncNow(); } } else if(token!=null) syncNow(); });
        copy.setOnClickListener(v->{ String value=pix.getText().toString().replace("PIX: ","").trim(); if(!value.isEmpty()&&!value.equals("—")){ ClipboardManager cm=(ClipboardManager)getSystemService(CLIPBOARD_SERVICE); cm.setPrimaryClip(ClipData.newPlainText("PIX KV CELL",value)); pix.setText("PIX: chave copiada • "+value); } });
        if(token!=null){ getPreferences(0).edit().putString("token",token).apply(); getSharedPreferences("mdm",0).edit().putString("token",token).apply(); syncNow(); scheduleSync(); }
        else status.setText("KV CELL MDM\nAguardando matrícula autorizada.");
    }
    private void scheduleSync(){ WorkManager.getInstance(this).enqueue(new PeriodicWorkRequest.Builder(MDMSyncWorker.class,15,TimeUnit.MINUTES).build()); }
    private int battery(){ try{android.os.BatteryManager bm=(android.os.BatteryManager)getSystemService(BATTERY_SERVICE); return bm.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);}catch(Exception e){return 0;} }
    private String safeSerial(){ try{ if(android.os.Build.VERSION.SDK_INT>=26) return android.os.Build.getSerial(); }catch(Exception ignored){} return "—"; }\n    private JSONObject heartbeat() throws Exception{
        URL u=new URL(BASE+"/public/mdm/heartbeat/"+token); HttpURLConnection c=(HttpURLConnection)u.openConnection(); c.setRequestMethod("POST"); c.setConnectTimeout(10000); c.setReadTimeout(15000); c.setDoOutput(true); c.setRequestProperty("Content-Type","application/json");
        JSONObject body=new JSONObject().put("battery",battery()).put("app_version","810.0").put("brand",android.os.Build.MANUFACTURER).put("model",android.os.Build.MODEL).put("device_name",android.os.Build.DEVICE).put("android_version",android.os.Build.VERSION.RELEASE).put("serial",safeSerial()); try(OutputStream os=c.getOutputStream()){os.write(body.toString().getBytes(StandardCharsets.UTF_8));}
        if(c.getResponseCode()<200||c.getResponseCode()>=300) throw new IllegalStateException("HTTP "+c.getResponseCode());
        BufferedReader r=new BufferedReader(new InputStreamReader(c.getInputStream(),StandardCharsets.UTF_8)); StringBuilder s=new StringBuilder(); String l; while((l=r.readLine())!=null)s.append(l); return new JSONObject(s.toString());
    }
    private void syncNow(){ Executors.newSingleThreadExecutor().execute(()->{ try{ JSONObject o=heartbeat(); applyPolicy(o); runOnUiThread(()->{
        String policy=o.optString("policy_state","normal"); status.setText("KV CELL MDM\nPolítica: "+policy+(dpm.isDeviceOwnerApp(getPackageName())?" • DEVICE OWNER":" • administração não provisionada"));
        finance.setText("Saldo: R$ "+String.format(java.util.Locale.US,"%.2f",o.optDouble("balance",0))+"\nPróximo vencimento: "+o.optString("next_due","—")+"\nDias até vencimento: "+o.optInt("days_to_due",0)+"\nParcelas restantes: "+o.optInt("installments_remaining",0));
        paymentUrl=o.optString("payment_url",""); String portal=o.optString("portal_url",""); if(paymentUrl.isEmpty()) paymentUrl=portal; pix.setText("PIX: "+o.optString("pix_copy_paste","—")); pay.setText(paymentUrl.isEmpty()?"Atualizar crediário":"Abrir portal / pagar");
    }); }catch(Exception e){ runOnUiThread(()->status.setText("KV CELL MDM\nAguardando sincronização com a KV CELL.")); }}); }
    private void applyPolicy(JSONObject o){ try{ String policy=o.optString("policy_state","normal"); if(!dpm.isDeviceOwnerApp(getPackageName()))return; if("bloqueado".equals(policy)){ dpm.setUninstallBlocked(admin,getPackageName(),true); dpm.setDeviceOwnerLockScreenInfo(admin,o.optString("message","Aparelho em atraso no crediário KV CELL")); dpm.lockNow(); } else if("normal".equals(policy)||"quitado".equals(policy)||"pausado".equals(policy)){ dpm.setUninstallBlocked(admin,getPackageName(),false); dpm.setDeviceOwnerLockScreenInfo(admin,null); } }catch(Exception ignored){} }
}
