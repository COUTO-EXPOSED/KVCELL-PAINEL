package br.com.kvcell.mdmd;

import android.app.Activity;
import android.app.admin.DevicePolicyManager;
import android.content.ComponentName;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import org.json.JSONObject;
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import androidx.work.PeriodicWorkRequest;
import androidx.work.WorkManager;

public class MainActivity extends Activity {
    private String base="https://kvcell.squareweb.app";
    private String token;
    private TextView status, finance;
    private DevicePolicyManager dpm;
    private ComponentName admin;
    @Override public void onCreate(Bundle b){ super.onCreate(b); setContentView(br.com.kvcell.mdmd.R.layout.activity_main);
        status=findViewById(br.com.kvcell.mdmd.R.id.status); finance=findViewById(br.com.kvcell.mdmd.R.id.finance);
        dpm=(DevicePolicyManager)getSystemService(DEVICE_POLICY_SERVICE); admin=new ComponentName(this,KVCellDeviceAdminReceiver.class);
        token=getIntent().getData()!=null?getIntent().getData().getLastPathSegment():getPreferences(0).getString("token",null);
        findViewById(br.com.kvcell.mdmd.R.id.pay).setOnClickListener(v->{ if(token!=null) startActivity(new Intent(Intent.ACTION_VIEW,Uri.parse(base+"/public/mdm/enroll/"+token))); });
        if(token!=null){getPreferences(0).edit().putString("token",token).apply(); getSharedPreferences("mdm",0).edit().putString("token",token).apply(); load(); scheduleSync();} else status.setText("Leia o QR de matrícula fornecido pela KV CELL.");
    }
    private void scheduleSync(){ WorkManager.getInstance(this).enqueue(new PeriodicWorkRequest.Builder(MDMSyncWorker.class,15,TimeUnit.MINUTES).build()); }
    private void load(){ Executors.newSingleThreadExecutor().execute(()->{try{URL u=new URL(base+"/api/mdm/device?token="+token);HttpURLConnection c=(HttpURLConnection)u.openConnection();c.setRequestProperty("Accept","application/json");BufferedReader r=new BufferedReader(new InputStreamReader(c.getInputStream()));StringBuilder s=new StringBuilder();String l;while((l=r.readLine())!=null)s.append(l);JSONObject o=new JSONObject(s.toString());JSONObject d=o.getJSONObject("device");runOnUiThread(()->{status.setText("Aparelho: "+d.optString("device_name")+"\nPolítica: "+d.optString("policy_state"));finance.setText("Saldo: R$ "+o.optDouble("balance",0)+"\nPróximo vencimento: "+d.optString("next_due","—")+"\nDias até vencimento: "+o.optInt("days_to_due",0)+"\nParcelas restantes: "+o.optInt("installments_remaining",0));});}catch(Exception e){runOnUiThread(()->status.setText("Não foi possível sincronizar agora."));}});}
    public void applyRemotePolicy(String state){
        // Called by the future sync worker. Device Owner is required for hard enforcement.
        if("bloqueado".equals(state) && dpm.isDeviceOwnerApp(getPackageName())) { dpm.lockNow(); dpm.setUninstallBlocked(admin,getPackageName(),true); }
        if("normal".equals(state) && dpm.isDeviceOwnerApp(getPackageName())) { dpm.setUninstallBlocked(admin,getPackageName(),false); }
    }
}
