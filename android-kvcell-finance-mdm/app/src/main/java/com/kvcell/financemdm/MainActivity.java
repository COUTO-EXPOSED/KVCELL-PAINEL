package com.kvcell.financemdm;

import android.app.Activity;
import android.app.admin.DevicePolicyManager;
import android.content.*;
import android.net.Uri;
import android.graphics.Color;
import android.os.Bundle;
import android.view.*;
import android.widget.*;
import org.json.*;
import java.io.*;
import java.net.*;

public class MainActivity extends Activity {
    static final String PREF="kvcell";
    DevicePolicyManager dpm; ComponentName admin; TextView status, contract, due, policy, remaining; Button pay, sync;
    String server="", token="", deviceToken="";
    @Override public void onCreate(Bundle b){super.onCreate(b); dpm=(DevicePolicyManager)getSystemService(DEVICE_POLICY_SERVICE); admin=new ComponentName(this,KVCellDeviceAdminReceiver.class); load(); build(); handle(getIntent()); sync();}
    void load(){android.content.SharedPreferences p=getSharedPreferences(PREF,0);server=p.getString("server","");token=p.getString("enrollment","");deviceToken=p.getString("device","");}
    void save(){getSharedPreferences(PREF,0).edit().putString("server",server).putString("enrollment",token).putString("device",deviceToken).apply();}
    void build(){LinearLayout root=new LinearLayout(this);root.setOrientation(LinearLayout.VERTICAL);root.setPadding(28,34,28,28);root.setBackgroundColor(Color.rgb(7,7,7));
        TextView title=t("KV CELL CREDIÁRIO",28,Color.rgb(255,212,0));root.addView(title);status=t("Verificando matrícula…",15,Color.LTGRAY);root.addView(status);contract=t("Contrato: —",18,Color.WHITE);root.addView(contract);due=t("Próximo vencimento: —",16,Color.WHITE);root.addView(due);policy=t("Política: —",16,Color.WHITE);root.addView(policy);remaining=t("Parcelas restantes: — • Dias até o vencimento: —",16,Color.WHITE);root.addView(remaining);
        pay=new Button(this);pay.setText("PAGAR PARCELA");pay.setOnClickListener(v->openPayment());root.addView(pay);sync=new Button(this);sync.setText("ATUALIZAR STATUS");sync.setOnClickListener(v->sync());root.addView(sync);setContentView(root);}
    TextView t(String s,int z,int c){TextView v=new TextView(this);v.setText(s);v.setTextSize(z);v.setTextColor(c);v.setPadding(0,12,0,12);return v;}
    void handle(Intent i){if(i==null)return;Uri u=i.getData();if(u!=null&&"kvcellmdm".equals(u.getScheme())){server=u.getQueryParameter("server");token=u.getQueryParameter("token");save();enroll();}}
    void enroll(){if(server.length()==0||token.length()==0){status.setText("Aguardando QR de matrícula.");return;} try{JSONObject j=new JSONObject();j.put("enrollment_token",token);j.put("brand",android.os.Build.MANUFACTURER);j.put("model",android.os.Build.MODEL);j.put("device_name",android.os.Build.MODEL);j.put("serial",Build.VERSION.SDK_INT>=29?"protegido":"indisponível");j.put("app_version","1.0.0");JSONObject r=post(server+"/public/mdm/enroll",j);deviceToken=r.optString("device_token");save();status.setText("Matrícula concluída • dispositivo gerenciado");enforce(r.optString("policy_status","normal"));}catch(Exception e){status.setText("Falha na matrícula: "+e.getMessage());}}
    void sync(){if(deviceToken.length()==0){status.setText("Aguardando matrícula por QR.");return;}new Thread(()->{try{JSONObject j=new JSONObject();j.put("device_token",deviceToken);j.put("app_version","1.0.0");JSONObject r=post(server+"/public/mdm/heartbeat",j);runOnUiThread(()->{contract.setText("Contrato: "+r.optString("contract_number","—"));JSONObject in=r.optJSONObject("installment");due.setText("Próximo vencimento: "+(in==null?"Quitado":in.optString("due_date","—")));policy.setText("Política: "+r.optString("policy_status","normal"));remaining.setText("Parcelas restantes: "+r.optInt("installments_left",0)+" • Dias até o vencimento: "+r.optInt("days_remaining",0)+" • Saldo: R$ "+String.format(java.util.Locale.US,"%.2f",r.optDouble("remaining_total",0)));});enforce(r.optString("policy_status","normal"));}catch(Exception e){runOnUiThread(()->status.setText("Sem sincronização: "+e.getMessage()));}}).start();}
    void enforce(String p){if(!dpm.isDeviceOwnerApp(getPackageName())){runOnUiThread(()->status.setText("App instalado. Para gestão MDM, matricule como Device Owner."));return;}try{dpm.setLockTaskPackages(admin,new String[]{getPackageName()});if("bloqueado".equals(p)){runOnUiThread(()->{status.setText("PAGAMENTO PENDENTE • MODO DE COBRANÇA");try{startLockTask();}catch(Exception ignored){} });dpm.lockNow();}else if("ativo".equals(p)||"normal".equals(p)){try{stopLockTask();}catch(Exception ignored){}}}catch(Exception ignored){}}
    void openPayment(){if(server.length()==0||deviceToken.length()==0)return;try{JSONObject r=post(server+"/public/mdm/payment-intent",new JSONObject().put("device_token",deviceToken));String url=r.optString("payment_url","");if(url.length()>0)startActivity(new Intent(Intent.ACTION_VIEW,Uri.parse(url)));else Toast.makeText(this,"Configure o link de pagamento no contrato KV CELL.",Toast.LENGTH_LONG).show();}catch(Exception e){Toast.makeText(this,e.getMessage(),Toast.LENGTH_LONG).show();}}
    JSONObject post(String url,JSONObject body)throws Exception{HttpURLConnection c=(HttpURLConnection)new URL(url).openConnection();c.setRequestMethod("POST");c.setConnectTimeout(15000);c.setReadTimeout(15000);c.setRequestProperty("Content-Type","application/json");c.setDoOutput(true);try(OutputStream o=c.getOutputStream()){o.write(body.toString().getBytes("UTF-8"));}InputStream is=c.getResponseCode()<400?c.getInputStream():c.getErrorStream();String s=new String(is.readAllBytes(),"UTF-8");if(c.getResponseCode()>=400)throw new IOException(s);return new JSONObject(s);}
}
