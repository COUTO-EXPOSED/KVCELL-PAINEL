#!/usr/bin/env python3
"""KV CELL ADB Bridge — ponte local para o KV CELL OS PREMIUM.

Executa no computador da bancada. O painel hospedado no Square Cloud fala com
127.0.0.1:17321; o bridge conversa com o ADB Platform Tools local.
Somente aparelhos que já aparecem como autorizados em `adb devices` são usados.
"""
import base64, json, os, re, shutil, subprocess, time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

HOST='127.0.0.1'
PORT=int(os.environ.get('KVCELL_BRIDGE_PORT','17321'))
ADB=os.environ.get('KVCELL_ADB_PATH','adb')
if ADB=='adb' and not shutil.which('adb'):
    for _p in [os.path.expandvars(r'%LOCALAPPDATA%\Android\Sdk\platform-tools\adb.exe'),os.path.expandvars(r'%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools\adb.exe'),r'C:\platform-tools\adb.exe']:
        if os.path.isfile(_p): ADB=_p; break
TIMEOUT=int(os.environ.get('KVCELL_ADB_TIMEOUT','20'))
BRIDGE_DIR=os.path.dirname(os.path.abspath(__file__))
MDM_APK=os.environ.get('KVCELL_MDM_APK_PATH', os.path.join(BRIDGE_DIR,'mdm','KV_CELL_MDM.apk'))
MDM_PACKAGE='br.com.kvcell.finance.mdm'
MDM_COMPONENT='br.com.kvcell.finance.mdm/br.com.kvcell.mdmd.KVCellDeviceAdminReceiver'

SAFE_COMMANDS={
 'getprop':'shell getprop',
 'battery':'shell dumpsys battery',
 'memory':'shell dumpsys meminfo',
 'storage':'shell df -h /data',
 'packages':'shell pm list packages -3',
 'packages_installer':'shell pm list packages -3 -i',
 'security':'shell getenforce',
 'boot':'shell getprop ro.boot.verifiedbootstate',
 'serial':'shell getprop ro.serialno',
 'model':'shell getprop ro.product.model',
 'manufacturer':'shell getprop ro.product.manufacturer',
 'android':'shell getprop ro.build.version.release',
 'sdk':'shell getprop ro.build.version.sdk',
 'fingerprint':'shell getprop ro.build.fingerprint',
 'resolution':'shell wm size',
 'density':'shell wm density',
 'network':'shell ip addr show',
 'uptime':'shell uptime',
 'logcat':'shell logcat -d -t 250',
 'processes':'shell ps -A',
 'accounts':'shell dumpsys account',
 'device_policy':'shell dumpsys device_policy',
 'accessibility':'shell settings get secure enabled_accessibility_services',
 'install_sources':'shell settings get global install_non_market_apps',
 'airplane':'shell settings get global airplane_mode_on',
}
ACTIONS={
 'normal':['reboot'],
 'recovery':['reboot','recovery'],
 'bootloader':['reboot','bootloader'],
 'sideload':['reboot','sideload'],
}

class BridgeError(Exception): pass

def run(args, timeout=TIMEOUT, binary=False):
    cmd=[ADB]+args
    try:
        p=subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=timeout)
    except FileNotFoundError:
        raise BridgeError('ADB não encontrado. Instale o Android SDK Platform Tools e deixe o adb no PATH.')
    except subprocess.TimeoutExpired:
        raise BridgeError('ADB demorou demais para responder. Verifique cabo, autorização e estado do aparelho.')
    if p.returncode!=0:
        err=p.stderr.decode('utf-8','replace').strip() or p.stdout.decode('utf-8','replace').strip()
        raise BridgeError(err or f'ADB retornou código {p.returncode}')
    return p.stdout if binary else p.stdout.decode('utf-8','replace')

def devices():
    out=run(['devices','-l'])
    rows=[]
    for line in out.splitlines()[1:]:
        line=line.strip()
        if not line or line.startswith('*') or line.startswith('List of'): continue
        parts=line.split()
        if len(parts)<2: continue
        serial,state=parts[0],parts[1]
        meta={}
        for token in parts[2:]:
            if ':' in token:
                k,v=token.split(':',1); meta[k]=v
        rows.append({'serial':serial,'state':state,'model':meta.get('model','').replace('_',' '),'product':meta.get('product',''),'device':meta.get('device','')})
    return rows

def target(serial):
    ds=devices()
    if serial:
        d=next((x for x in ds if x['serial']==serial),None)
        if not d: raise BridgeError('Aparelho selecionado não está conectado ao ADB.')
    else:
        online=[x for x in ds if x['state']=='device']
        if not online: raise BridgeError('Nenhum aparelho autorizado no ADB.')
        if len(online)>1: raise BridgeError('Há mais de um aparelho. Selecione o destino no painel.')
        d=online[0]
    if d['state']!='device': raise BridgeError(f'ADB está em estado {d["state"]}. Desbloqueie e autorize o aparelho.')
    return d

def adb(serial,args,timeout=TIMEOUT,binary=False):
    d=target(serial)
    return run((['-s',d['serial']] if d else [])+args,timeout,binary)

def prop_map(text):
    r={}
    for line in text.splitlines():
        m=re.match(r'\[([^\]]+)\]: \[([^\]]*)\]',line)
        if m:r[m.group(1)]=m.group(2)
    return r

def first(text, pattern, default='—'):
    m=re.search(pattern,text,re.I|re.M)
    return m.group(1).strip() if m else default

def device_info(serial):
    d=target(serial); p=prop_map(adb(d['serial'],['shell','getprop']))
    bat=adb(d['serial'],['shell','dumpsys','battery'])
    mem=adb(d['serial'],['shell','dumpsys','meminfo'])
    storage=adb(d['serial'],['shell','df','-h','/data'])
    net=adb(d['serial'],['shell','ip','addr','show'])
    sec=adb(d['serial'],['shell','getprop','ro.boot.verifiedbootstate'])
    root=adb(d['serial'],['shell','which','su']).strip() or '—'
    return {
      'serial':d['serial'],'brand':p.get('ro.product.brand','—'),'manufacturer':p.get('ro.product.manufacturer','—'),'model':p.get('ro.product.model',d.get('model') or '—'),'device_name':p.get('ro.product.device','—'),'imei':'—',
      'android':p.get('ro.build.version.release','—')+' (SDK '+p.get('ro.build.version.sdk','—')+')','build':p.get('ro.build.display.id','—'),'build_id':p.get('ro.build.id','—'),'build_type':p.get('ro.build.type','—'),'patch':p.get('ro.build.version.security_patch','—'),'factory_android':p.get('ro.build.version.release_or_codename','—'),'fingerprint':p.get('ro.build.fingerprint','—'),'language':p.get('persist.sys.locale','—'),'timezone':p.get('persist.sys.timezone','—'),
      'cpu':p.get('ro.soc.model',p.get('ro.product.board','—')),'platform':p.get('ro.board.platform','—'),'cores':first(adb(d['serial'],['shell','grep','-c','^processor','/proc/cpuinfo']),'(\\d+)'),'arch':p.get('ro.product.cpu.abilist64',p.get('ro.product.cpu.abilist','—')),'board':p.get('ro.product.board','—'),'hardware':p.get('ro.hardware','—'),'bootloader':p.get('ro.bootloader','—'),'screen':first(adb(d['serial'],['shell','wm','size']),r'Physical size: (.+)'),'dpi':first(adb(d['serial'],['shell','wm','density']),r'Physical density: (.+)'),
      'ram':first(mem,r'Total RAM:\s+(.+)'),'ram_free':first(mem,r'Free RAM:\s+(.+)'),'storage':first(storage,r'\n.*?\s(\S+)\s+\S+\s+\S+\s+\S+\s+/data'),'used':first(storage,r'\n.*?\s\S+\s+(\S+)\s+\S+\s+\S+\s+/data'),'free':first(storage,r'\n.*?\s\S+\s+\S+\s+(\S+)\s+\S+\s+/data'),
      'battery':first(bat,r'level:\s*(\d+)','—')+'%','battery_health':first(bat,r'health:\s*(\d+)','—'),'battery_status':first(bat,r'status:\s*(\d+)','—'),'temperature':first(bat,r'temperature:\s*(\d+)','—'),'voltage':first(bat,r'voltage:\s*(\d+)','—'),'technology':first(bat,r'technology:\s*(.+)'),'carrier':p.get('gsm.operator.alpha','—'),'wifi_ip':first(net,r'inet\s+(\d+\.\d+\.\d+\.\d+)'),'wifi_mac':first(net,r'link/ether\s+([0-9a-f:]{17})'),
      'airplane': 'Ativado' if adb(d['serial'],['shell','settings','get','global','airplane_mode_on']).strip()=='1' else 'Desativado','encryption':p.get('ro.crypto.state','—'),'verified_boot':sec.strip() or '—','boot_locked':p.get('ro.boot.flash.locked','—'),'root':'Possível (su encontrado)' if root!='—' else 'Não detectado','uptime':adb(d['serial'],['shell','uptime']).strip(),
      'processes':len(adb(d['serial'],['shell','ps','-A']).splitlines()),'process_list':adb(d['serial'],['shell','ps','-A'])[:12000],'accounts':adb(d['serial'],['shell','dumpsys','account'])[:8000],'logcat':adb(d['serial'],['shell','logcat','-d','-t','250'])[:16000]
    }

def package_dump(serial,pkg):
    return adb(serial,['shell','dumpsys','package',pkg],timeout=10)

def security_scan(serial):
    d=target(serial); out=adb(d['serial'],['shell','pm','list','packages','-3'])
    pkgs=[x.split(':',1)[1].strip() for x in out.splitlines() if x.startswith('package:')]
    risky={
      'android.permission.REQUEST_INSTALL_PACKAGES':3,'android.permission.SYSTEM_ALERT_WINDOW':2,'android.permission.BIND_ACCESSIBILITY_SERVICE':3,
      'android.permission.RECORD_AUDIO':1,'android.permission.CAMERA':1,'android.permission.READ_SMS':3,'android.permission.RECEIVE_SMS':3,'android.permission.SEND_SMS':3,
      'android.permission.READ_CONTACTS':1,'android.permission.READ_CALL_LOG':2,'android.permission.WRITE_CALL_LOG':2,'android.permission.PACKAGE_USAGE_STATS':2,'android.permission.BIND_VPN_SERVICE':2,
      'android.permission.QUERY_ALL_PACKAGES':1,'android.permission.READ_PHONE_STATE':1,'android.permission.READ_EXTERNAL_STORAGE':1,'android.permission.WRITE_EXTERNAL_STORAGE':1,
    }
    findings=[]
    for pkg in pkgs:
        try: dump=package_dump(d['serial'],pkg)
        except Exception: continue
        req=[]
        in_req=False
        for line in dump.splitlines():
            if 'requested permissions:' in line: in_req=True; continue
            if in_req:
                m=re.search(r'android\.permission\.[A-Z0-9_]+',line)
                if m:req.append(m.group(0))
                if line.strip().startswith('install permissions:'): break
        score=sum(risky.get(x,0) for x in req)
        if score>=3:
            findings.append({'package':pkg,'score':min(score,10),'permissions':[x.split('.')[-1] for x in req if x in risky],'verdict':'revisar'})
    findings.sort(key=lambda x:x['score'],reverse=True)
    return {'packages_scanned':len(pkgs),'findings':findings[:100],'note':'Isto é triagem heurística de segurança; permissões isoladas não provam malware.'}

def screenshot(serial):
    return adb(serial,['exec-out','screencap','-p'],timeout=20,binary=True)


def install_mdm(serial=None):
    d=target(serial)
    if not os.path.isfile(MDM_APK):
        raise BridgeError(f'APK do KV CELL MDM não encontrado em: {MDM_APK}. Gere/coloque o APK nesse caminho ou defina KVCELL_MDM_APK_PATH.')
    out=run((['-s',d['serial']] if d else [])+['install','-r',MDM_APK],timeout=60)
    return {'serial':d['serial'],'apk':MDM_APK,'package':MDM_PACKAGE,'output':out.strip()}

def mdm_provision(serial=None, token=None):
    if not token or not re.fullmatch(r'[A-Za-z0-9]+',str(token)):
        raise BridgeError('Token MDM inválido para provisionamento.')
    d=target(serial)
    inst=install_mdm(d['serial'])
    # Do not bypass Android provisioning safeguards. Device Owner must be allowed by Android.
    owner=run((['-s',d['serial']] if d else [])+['shell','dpm','list','owners'],timeout=15)
    if MDM_PACKAGE not in owner:
        try:
            run((['-s',d['serial']] if d else [])+['shell','dpm','set-device-owner',MDM_COMPONENT],timeout=45)
        except BridgeError as e:
            raise BridgeError('APK instalado, mas o Android recusou o Device Owner. Em Android real, o aparelho normalmente precisa estar sem provisionamento/contas de usuário; não é possível contornar essa proteção. Detalhe: '+str(e))
    launch=run((['-s',d['serial']] if d else [])+['shell','am','start','-a','android.intent.action.VIEW','-d','kvcellmdm://enroll/'+str(token)],timeout=20)
    return {'ok':True,'serial':d['serial'],'installed':True,'device_owner':True,'package':MDM_PACKAGE,'component':MDM_COMPONENT,'launch':launch.strip(),'install':inst}

class H(BaseHTTPRequestHandler):
    server_version='KV-CELL-ADB-BRIDGE/1.0'
    def log_message(self,*a): pass
    def cors(self):
        self.send_header('Access-Control-Allow-Origin','*'); self.send_header('Access-Control-Allow-Headers','Content-Type, X-KV-CELL-BRIDGE'); self.send_header('Access-Control-Allow-Methods','GET,POST,OPTIONS'); self.send_header('Access-Control-Allow-Private-Network','true')
    def sendj(self,obj,status=200):
        raw=json.dumps(obj,ensure_ascii=False).encode(); self.send_response(status); self.send_header('Content-Type','application/json; charset=utf-8'); self.send_header('Content-Length',str(len(raw))); self.cors(); self.end_headers(); self.wfile.write(raw)
    def do_OPTIONS(self): self.send_response(204); self.cors(); self.send_header('Access-Control-Max-Age','600'); self.end_headers()
    def body(self):
        n=int(self.headers.get('Content-Length','0')); return json.loads(self.rfile.read(n) or b'{}')
    def do_GET(self):
        try:
            p=urlparse(self.path); q=parse_qs(p.query); serial=q.get('serial',[''])[0] or None
            if p.path=='/health':
                found=bool(shutil.which(ADB) or os.path.exists(ADB))
                devs=[]
                if found:
                    try: devs=devices()
                    except Exception: devs=[]
                return self.sendj({'ok':True,'bridge':'KV CELL ADB Bridge','adb':ADB,'adb_found':found,'devices':devs,'time':time.time()})
            if p.path=='/devices': return self.sendj({'ok':True,'devices':devices()})
            if p.path=='/device': return self.sendj({'ok':True,'device':device_info(serial)})
            if p.path=='/security-scan': return self.sendj({'ok':True,**security_scan(serial)})
            if p.path=='/mdm/status':
                d=target(serial); owner=adb(d['serial'],['shell','dpm','list','owners']); return self.sendj({'ok':True,'serial':d['serial'],'package':MDM_PACKAGE,'apk_exists':os.path.isfile(MDM_APK),'apk_path':MDM_APK,'device_owner':MDM_PACKAGE in owner,'owners':owner.strip()})
            if p.path=='/screenshot':
                b=screenshot(serial); self.send_response(200); self.send_header('Content-Type','image/png'); self.send_header('Content-Length',str(len(b))); self.cors(); self.end_headers(); self.wfile.write(b); return
            return self.sendj({'error':'Rota não encontrada'},404)
        except BridgeError as e: return self.sendj({'error':str(e)},409)
        except Exception as e: return self.sendj({'error':'Falha na ponte: '+str(e)},500)
    def do_POST(self):
        try:
            p=urlparse(self.path); d=self.body(); serial=d.get('serial') or None
            if p.path=='/command':
                key=d.get('key','')
                if key not in SAFE_COMMANDS: return self.sendj({'error':'Comando não permitido pela ponte.'},400)
                return self.sendj({'ok':True,'key':key,'output':adb(serial,SAFE_COMMANDS[key].split())[:30000]})
            if p.path=='/mdm/install':
                return self.sendj({'ok':True,**install_mdm(serial)})
            if p.path=='/mdm/install-upload':
                import base64, tempfile
                data=d.get('data',''); filename=os.path.basename(d.get('filename') or 'KV_CELL_MDM.apk')
                if not data: return self.sendj({'error':'APK vazio.'},400)
                if not filename.lower().endswith('.apk'): return self.sendj({'error':'Arquivo enviado não é APK.'},400)
                raw=base64.b64decode(data,validate=True)
                if len(raw)>30*1024*1024: return self.sendj({'error':'APK acima de 30 MB.'},413)
                tmp=os.path.join(tempfile.gettempdir(),'KV_CELL_MDM_UPLOAD.apk')
                with open(tmp,'wb') as f: f.write(raw)
                target(serial)
                out=run((['-s',target(serial)['serial']] if serial else [])+['install','-r',tmp],timeout=90)
                return self.sendj({'ok':True,'serial':target(serial)['serial'],'package':MDM_PACKAGE,'filename':filename,'output':out.strip()})
            if p.path=='/mdm/provision':
                return self.sendj(mdm_provision(serial,d.get('token')))
            if p.path=='/action':
                key=d.get('action','')
                if key not in ACTIONS: return self.sendj({'error':'Ação não permitida.'},400)
                out=adb(serial,ACTIONS[key]); return self.sendj({'ok':True,'action':key,'output':out[-4000:]})
            return self.sendj({'error':'Rota não encontrada'},404)
        except BridgeError as e: return self.sendj({'error':str(e)},409)
        except Exception as e: return self.sendj({'error':'Falha na ponte: '+str(e)},500)

if __name__=='__main__':
    print(f'KV CELL ADB Bridge em http://{HOST}:{PORT}')
    print('Verifique: adb devices')
    ThreadingHTTPServer((HOST,PORT),H).serve_forever()
