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
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class MDMSyncWorker extends Worker {
    private static final String BASE = "https://kvcell.squareweb.app";
    public MDMSyncWorker(@NonNull Context c,@NonNull WorkerParameters p){super(c,p);}
    private JSONObject request(String token, int battery) throws Exception {
        URL u=new URL(BASE+"/public/mdm/heartbeat/"+token);
        HttpURLConnection c=(HttpURLConnection)u.openConnection(); c.setRequestMethod("POST"); c.setConnectTimeout(10000); c.setReadTimeout(15000); c.setDoOutput(true); c.setRequestProperty("Content-Type","application/json");
        JSONObject body=new JSONObject().put("battery",battery).put("app_version","1.1.0");
        try(OutputStream os=c.getOutputStream()){os.write(body.toString().getBytes(StandardCharsets.UTF_8));}
        if(c.getResponseCode()<200 || c.getResponseCode()>=300) throw new IllegalStateException("HTTP "+c.getResponseCode());
        BufferedReader r=new BufferedReader(new InputStreamReader(c.getInputStream(),StandardCharsets.UTF_8)); StringBuilder s=new StringBuilder(); String l; while((l=r.readLine())!=null)s.append(l); return new JSONObject(s.toString());
    }
    private int battery(){ try{android.os.BatteryManager bm=(android.os.BatteryManager)getApplicationContext().getSystemService(Context.BATTERY_SERVICE); return bm.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);}catch(Exception e){return 0;} }
    private void apply(JSONObject o){
        try{String policy=o.optString("policy_state","normal"); DevicePolicyManager dpm=(DevicePolicyManager)getApplicationContext().getSystemService(Context.DEVICE_POLICY_SERVICE); ComponentName admin=new ComponentName(getApplicationContext(),KVCellDeviceAdminReceiver.class);
            if(!dpm.isDeviceOwnerApp(getApplicationContext().getPackageName())) return;
            if("bloqueado".equals(policy)){ dpm.setUninstallBlocked(admin,getApplicationContext().getPackageName(),true); dpm.setDeviceOwnerLockScreenInfo(admin, o.optString("message","Aparelho em atraso no crediário KV CELL")); dpm.lockNow(); }
            else if("normal".equals(policy) || "quitado".equals(policy) || "pausado".equals(policy)){ dpm.setUninstallBlocked(admin,getApplicationContext().getPackageName(),false); dpm.setDeviceOwnerLockScreenInfo(admin,null); }
        }catch(Exception ignored){}
    }
    @NonNull @Override public Result doWork(){
        try{String token=getApplicationContext().getSharedPreferences("mdm",0).getString("token",null); if(token==null || token.isEmpty()) return Result.success(); JSONObject o=request(token,battery()); apply(o); return Result.success();}
        catch(Exception e){return Result.retry();}
    }
}
