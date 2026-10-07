package br.com.kvcell.mdmd;

import android.app.admin.DevicePolicyManager;
import android.content.ComponentName;
import android.content.Context;
import androidx.annotation.NonNull;
import androidx.work.Worker;
import androidx.work.WorkerParameters;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MDMSyncWorker extends Worker {
    public MDMSyncWorker(@NonNull Context c,@NonNull WorkerParameters p){super(c,p);}
    @NonNull @Override public Result doWork(){
        try{
            String token=getApplicationContext().getSharedPreferences("mdm",0).getString("token",null); if(token==null)return Result.success();
            URL u=new URL("https://kvcell.squareweb.app/api/mdm/device?token="+token); HttpURLConnection c=(HttpURLConnection)u.openConnection();
            BufferedReader r=new BufferedReader(new InputStreamReader(c.getInputStream())); StringBuilder s=new StringBuilder(); String l; while((l=r.readLine())!=null)s.append(l);
            JSONObject o=new JSONObject(s.toString()); String policy=o.getJSONObject("device").optString("policy_state","normal");
            DevicePolicyManager dpm=(DevicePolicyManager)getApplicationContext().getSystemService(Context.DEVICE_POLICY_SERVICE);
            ComponentName admin=new ComponentName(getApplicationContext(),KVCellDeviceAdminReceiver.class);
            if(dpm.isDeviceOwnerApp(getApplicationContext().getPackageName())){
                if("bloqueado".equals(policy)){ dpm.setUninstallBlocked(admin,getApplicationContext().getPackageName(),true); dpm.lockNow(); }
                if("normal".equals(policy)){ dpm.setUninstallBlocked(admin,getApplicationContext().getPackageName(),false); }
            }
            return Result.success();
        }catch(Exception e){return Result.retry();}
    }
}
