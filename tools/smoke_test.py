import os, sys, time, json, subprocess, urllib.request, urllib.error
from http.cookiejar import CookieJar
from urllib.parse import urlencode

ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
port='18111'
env=os.environ.copy(); env['PORT']=port; env.setdefault('ADMIN_PASSWORD','kvcell123'); env['KVCELL_DATA_DIR']=os.path.join(ROOT,'_smoke_data')
p=subprocess.Popen([sys.executable,os.path.join(ROOT,'app.py')],cwd=ROOT,env=env,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)
jar=CookieJar(); opener=urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))

def req(path, method='GET', data=None):
    body=None
    headers={}
    if data is not None:
        body=json.dumps(data).encode(); headers['Content-Type']='application/json'
    r=opener.open('http://127.0.0.1:'+port+path, data=body, timeout=4)
    return json.loads(r.read().decode()) if 'json' in r.headers.get('Content-Type','') else r.read()

try:
    for _ in range(60):
        try:
            if req('/api/health')['ok']: break
        except Exception: time.sleep(.1)
    assert req('/api/health')['ok']
    req('/api/login','POST',{'email':os.environ.get('ADMIN_EMAIL','admin@kvcell.local'),'password':os.environ.get('ADMIN_PASSWORD','kvcell123')})
    c=req('/api/customers','POST',{'name':'Smoke Cliente','phone':'(21) 99999-1234','type':'PF'})
    cid=c['id']
    found=req('/api/customer-search?q=99999')
    assert any(x['id']==cid for x in found)
    mdm=req('/api/mdm/create','POST',{'unit':'LAGOS','customer_id':cid,'brand':'Samsung','model':'A55','device_name':'Smoke MDM','installment_total':500,'installment_paid':100,'installment_count':4,'installment_value':100,'paid_installments':1,'next_due':'2099-01-01','payment_url':'https://example.com/pagar','pix_copy_paste':'pix-smoke'})
    portal=opener.open('http://127.0.0.1:'+port+'/public/mdm/portal/'+mdm['token']).read().decode()
    assert 'Portal do aparelho' in portal and 'Samsung' in portal and 'PIX copia e cola' in portal
    hb=req('/public/mdm/heartbeat/'+mdm['token'],'POST',{'battery':88,'app_version':'810.0','brand':'Samsung','model':'A55','device_name':'Smoke MDM','android_version':'15'})
    assert hb['ok'] and hb['portal_url'].endswith('/public/mdm/portal/'+mdm['token'])
    u=req('/api/users','POST',{'name':'Smoke Técnico','email':'smoke-tech@kvcell.local','password':'123456','role':'tecnico','unit':'LAGOS','permissions':{'services':True}})
    s=req('/api/services','POST',{'unit':'LAGOS','customer_id':cid,'kind':'conserto','description':'Troca de tela','price':100,'checklist':{'Tela':True}})
    q=req('/api/quotes','POST',{'unit':'LAGOS','customer_id':cid,'quote_type':'desbloqueio','items':[{'description':'FRP','qty':1,'total':150}],'subtotal':150,'total':175,'travel_enabled':True,'travel_fee':25,'warranty_days':30})
    f=req('/api/forgotten','POST',{'unit':'LAGOS','brand':'Samsung','model':'A32','checklist':{'Tela':True}})
    raw=opener.open('http://127.0.0.1:'+port+q['public_url']).read().decode()
    assert 'KV CELL' in raw and '30 dias' in raw
    print('KV CELL SMOKE TEST: PASS')
finally:
    p.terminate(); p.wait(timeout=3)
