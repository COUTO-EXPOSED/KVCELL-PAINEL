import {
  W as ye,
  i as ae,
  r as o,
  bH as Ie,
  j as e,
  D as B,
  c as F,
  a_ as U,
  d as V,
  bZ as Z,
  B as i,
  a3 as Se,
  m as z,
  b3 as R,
  bM as S,
  dM as De,
  n as c,
  I as m,
  G as _,
  a1 as w,
  by as ee,
  O as E,
  fE as Oe,
  S as W,
  fK as Ae,
  cf as qe,
  cD as Pe,
  w as g,
  bR as Ee,
  a8 as de,
  bB as Re,
  bC as Me,
  bD as ce,
  bE as me,
  b2 as Te,
  bV as Le,
  fM as Be,
  g1 as Fe,
  el as Ue,
  bm as Ve,
  T as xe,
  c7 as ue,
  b1 as ze,
  C as We,
  p as Ge,
  bn as $e,
  bo as Qe,
  bp as He,
  bq as Ke,
  br as Je,
  bs as Ye,
  bt as Xe,
  bu as Ze,
} from "./index-V8ZHCWL2.js";
import { B as ea } from "./battery-DmY1rSze.js";
import { C as aa } from "./calendar-clock-CIO_7BUd.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sa = ye("BookOpen", [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ]),
  he = {
    apkUrl: "",
    packageName: "com.techospro.mdm",
    adminReceiver: "com.techospro.mdm/.DeviceAdminReceiver",
    checksum: "",
    wifiSsid: "",
    wifiPassword: "",
  };
function la() {
  try {
    const t = localStorage.getItem("mdm_agent_config");
    if (t) return { ...he, ...JSON.parse(t) };
  } catch {}
  return { ...he };
}
function ta(t) {
  localStorage.setItem("mdm_agent_config", JSON.stringify(t));
}
function ra(t, C, v) {
  const n = {
    "android.app.extra.PROVISIONING_DEVICE_ADMIN_COMPONENT_NAME":
      t.adminReceiver,
    "android.app.extra.PROVISIONING_DEVICE_ADMIN_PACKAGE_DOWNLOAD_LOCATION":
      t.apkUrl,
    "android.app.extra.PROVISIONING_LEAVE_ALL_SYSTEM_APPS_ENABLED": !0,
    "android.app.extra.PROVISIONING_SKIP_ENCRYPTION": !1,
    "android.app.extra.PROVISIONING_ADMIN_EXTRAS_BUNDLE": {
      enroll_token: C,
      api_url: v,
    },
  };
  return (
    t.checksum &&
      (n["android.app.extra.PROVISIONING_DEVICE_ADMIN_SIGNATURE_CHECKSUM"] =
        t.checksum),
    t.wifiSsid &&
      ((n["android.app.extra.PROVISIONING_WIFI_SSID"] = t.wifiSsid),
      t.wifiPassword &&
        ((n["android.app.extra.PROVISIONING_WIFI_PASSWORD"] = t.wifiPassword),
        (n["android.app.extra.PROVISIONING_WIFI_SECURITY_TYPE"] = "WPA"))),
    n
  );
}
function oa({ open: t, onOpenChange: C, token: v, deviceLabel: n, apiUrl: d }) {
  const { toast: D } = ae(),
    [x, M] = o.useState(la()),
    [h, T] = o.useState(""),
    I = ra(x, v, d),
    O = JSON.stringify(I);
  o.useEffect(() => {
    t &&
      Ie.toDataURL(O, { width: 640, margin: 1, errorCorrectionLevel: "M" })
        .then(T)
        .catch(() => T(""));
  }, [t, O]);
  const k = (r, $) => {
      navigator.clipboard.writeText(r), D({ title: `${$} copiado!` });
    },
    G = () => {
      if (!h) return;
      const r = document.createElement("a");
      (r.href = h),
        (r.download = `mdm-qr-${n.replace(/\s+/g, "-").toLowerCase()}.png`),
        r.click();
    },
    j = (r) => {
      M(r), ta(r);
    };
  return e.jsx(B, {
    open: t,
    onOpenChange: C,
    children: e.jsxs(F, {
      className: "max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl",
      children: [
        e.jsx(U, {
          children: e.jsxs(V, {
            className: "flex items-center gap-2",
            children: [
              e.jsx(Z, { className: "h-5 w-5 text-primary" }),
              " Vincular aparelho — ",
              n,
            ],
          }),
        }),
        e.jsxs("div", {
          className: "grid gap-6 md:grid-cols-2",
          children: [
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsxs("div", {
                  className:
                    "rounded-2xl border bg-card p-4 flex flex-col items-center gap-3",
                  children: [
                    h
                      ? e.jsx("img", {
                          src: h,
                          alt: "QR de provisionamento MDM",
                          className:
                            "w-full max-w-[260px] rounded-xl bg-white p-2",
                        })
                      : e.jsx("div", {
                          className:
                            "h-[260px] w-full rounded-xl bg-muted animate-pulse",
                        }),
                    e.jsxs("div", {
                      className: "flex gap-2 w-full",
                      children: [
                        e.jsxs(i, {
                          variant: "outline",
                          className: "flex-1 rounded-xl",
                          onClick: G,
                          disabled: !h,
                          children: [
                            e.jsx(Se, { className: "h-4 w-4 mr-1" }),
                            " Baixar QR",
                          ],
                        }),
                        e.jsxs(i, {
                          variant: "outline",
                          className: "flex-1 rounded-xl",
                          onClick: () => k(O, "JSON"),
                          children: [
                            e.jsx(z, { className: "h-4 w-4 mr-1" }),
                            " JSON",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "rounded-2xl border bg-muted/40 p-4 space-y-2 text-sm",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between gap-2",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Token do aparelho",
                        }),
                        e.jsxs(R, {
                          variant: "outline",
                          className: "font-mono",
                          children: [v.slice(0, 12), "…"],
                        }),
                      ],
                    }),
                    e.jsxs(i, {
                      variant: "ghost",
                      size: "sm",
                      className: "w-full rounded-xl",
                      onClick: () => k(v, "Token"),
                      children: [
                        e.jsx(z, { className: "h-4 w-4 mr-1" }),
                        " Copiar token completo",
                      ],
                    }),
                    e.jsxs(i, {
                      variant: "ghost",
                      size: "sm",
                      className: "w-full rounded-xl",
                      onClick: () => k(d, "Endereço da API"),
                      children: [
                        e.jsx(z, { className: "h-4 w-4 mr-1" }),
                        " Copiar endereço da API",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className:
                    "rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm space-y-2",
                  children: [
                    e.jsxs("p", {
                      className: "font-semibold flex items-center gap-2",
                      children: [
                        e.jsx(S, { className: "h-4 w-4 text-primary" }),
                        " Como aplicar (5 passos)",
                      ],
                    }),
                    e.jsxs("ol", {
                      className:
                        "list-decimal ml-4 space-y-1 text-muted-foreground",
                      children: [
                        e.jsx("li", {
                          children:
                            "Formate o aparelho (ou use um novo) e ligue na tela inicial “Olá”.",
                        }),
                        e.jsxs("li", {
                          children: [
                            "Toque ",
                            e.jsx("b", { children: "6 vezes" }),
                            " na tela de boas-vindas — abre o leitor de QR.",
                          ],
                        }),
                        e.jsx("li", {
                          children:
                            "Conecte no Wi-Fi e aponte para o QR ao lado.",
                        }),
                        e.jsxs("li", {
                          children: [
                            "O app de gestão instala como ",
                            e.jsx("b", {
                              children: "Proprietário do dispositivo",
                            }),
                            " (Device Owner).",
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            "Pronto: o aparelho aparece como ",
                            e.jsx("b", { children: "Ativo" }),
                            " e aceita bloqueio remoto.",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("p", {
                      className: "text-xs flex gap-1 pt-1",
                      children: [
                        e.jsx(De, { className: "h-3.5 w-3.5 shrink-0 mt-0.5" }),
                        "Como Device Owner, o app impede a remoção e o Factory Reset (restrição no_factory_reset), trava a tela com sua mensagem e só o lojista libera.",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsx("p", {
                      className: "text-sm font-semibold",
                      children: "Configuração do app de gestão",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(c, {
                          className: "text-xs",
                          children: "URL do APK (link direto https)",
                        }),
                        e.jsx(m, {
                          className: "rounded-xl",
                          value: x.apkUrl,
                          onChange: (r) => j({ ...x, apkUrl: r.target.value }),
                          placeholder: "https://sualoja.com/mdm-agent.apk",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx(c, {
                              className: "text-xs",
                              children: "Pacote",
                            }),
                            e.jsx(m, {
                              className: "rounded-xl",
                              value: x.packageName,
                              onChange: (r) =>
                                j({ ...x, packageName: r.target.value }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(c, {
                              className: "text-xs",
                              children: "Receiver admin",
                            }),
                            e.jsx(m, {
                              className: "rounded-xl",
                              value: x.adminReceiver,
                              onChange: (r) =>
                                j({ ...x, adminReceiver: r.target.value }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(c, {
                          className: "text-xs",
                          children:
                            "Checksum da assinatura (SHA-256 base64url)",
                        }),
                        e.jsx(m, {
                          className: "rounded-xl",
                          value: x.checksum,
                          onChange: (r) =>
                            j({ ...x, checksum: r.target.value }),
                          placeholder: "opcional, recomendado",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx(c, {
                              className: "text-xs",
                              children: "Wi-Fi (SSID)",
                            }),
                            e.jsx(m, {
                              className: "rounded-xl",
                              value: x.wifiSsid,
                              onChange: (r) =>
                                j({ ...x, wifiSsid: r.target.value }),
                              placeholder: "opcional",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx(c, {
                              className: "text-xs",
                              children: "Senha do Wi-Fi",
                            }),
                            e.jsx(m, {
                              className: "rounded-xl",
                              value: x.wifiPassword,
                              onChange: (r) =>
                                j({ ...x, wifiPassword: r.target.value }),
                              placeholder: "opcional",
                            }),
                          ],
                        }),
                      ],
                    }),
                    !x.apkUrl &&
                      e.jsx("p", {
                        className: "text-xs text-destructive",
                        children:
                          "Informe a URL do APK para o QR provisionar o aparelho.",
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const na = [
    {
      title: "1. Publique o app de gestão (agente MDM)",
      text: "Hospede o APK do agente em um link https direto (site da loja, storage ou GitHub Releases). Ele é o Device Policy Controller: recebe as ordens do painel e aplica no aparelho.",
    },
    {
      title: "2. Cadastre a venda no painel",
      text: "Aba Aparelhos → Novo aparelho. Informe cliente, modelo, IMEI, valor e parcelas. O sistema gera um token exclusivo e o QR de provisionamento.",
    },
    {
      title: "3. Provisione o celular como Device Owner",
      text: "Com o aparelho zerado (novo ou formatado), toque 6 vezes na tela de boas-vindas, conecte no Wi-Fi e leia o QR. O agente instala com poderes de proprietário do dispositivo.",
    },
    {
      title: "4. Entregue o aparelho já protegido",
      text: "O agente ativa DISALLOW_FACTORY_RESET, DISALLOW_ADD_USER, DISALLOW_SAFE_BOOT e bloqueia a desinstalação. O cliente usa normalmente enquanto estiver em dia.",
    },
    {
      title: "5. Bloqueie/desbloqueie em 1 clique",
      text: "Atrasou? Clique em Bloquear e escreva a mensagem. O aparelho trava a tela em modo kiosk em até 60 segundos. Pagou? Desbloquear devolve o uso imediatamente.",
    },
  ],
  ia = [
    { icon: E, label: "Travar a tela (kiosk) com mensagem da loja" },
    { icon: Oe, label: "Impedir Factory Reset / formatação" },
    { icon: S, label: "Impedir desinstalação do agente e safe boot" },
    { icon: W, label: "Ver bateria, versão do Android e último acesso" },
    { icon: Ae, label: "Fila de comandos com confirmação de execução" },
  ];
function da({ apiUrl: t }) {
  const { toast: C } = ae(),
    v = (d, D) => {
      navigator.clipboard.writeText(d), C({ title: `${D} copiado!` });
    },
    n = `POST ${t}
{
  "action": "checkin",
  "token": "<enroll_token do aparelho>",
  "device_owner": true,
  "device": { "device_name": "Galaxy A15", "android_version": "14", "battery": 82, "imei": "35..." }
}

// resposta
{ "device": { "locked": true, "lock_message": "..." }, "commands": [ { "id": "...", "action": "lock" } ] }

POST ${t}
{ "action": "ack", "token": "...", "command_id": "...", "success": true, "result": "locked" }`;
  return e.jsxs("div", {
    className: "space-y-5",
    children: [
      e.jsx(_, {
        className: "rounded-2xl border-primary/30 bg-primary/5",
        children: e.jsxs(w, {
          className: "p-5 space-y-2",
          children: [
            e.jsxs("p", {
              className: "font-semibold flex items-center gap-2",
              children: [
                e.jsx(S, { className: "h-5 w-5 text-primary" }),
                "Como funciona",
              ],
            }),
            e.jsxs("p", {
              className: "text-sm text-muted-foreground",
              children: [
                "O painel é o cérebro: guarda os aparelhos, as parcelas e a fila de comandos. No celular fica um app agente instalado como ",
                e.jsx("b", { children: "Proprietário do dispositivo" }),
                " (Android Enterprise), que consulta o painel a cada 60 segundos e aplica bloqueio, mensagem ou liberação. É o mesmo método usado pelas grandes financeiras de venda parcelada.",
              ],
            }),
          ],
        }),
      }),
      e.jsx("div", {
        className: "grid gap-3 md:grid-cols-2",
        children: na.map((d) =>
          e.jsx(
            _,
            {
              className: "rounded-2xl hover:shadow-lg transition-shadow",
              children: e.jsxs(w, {
                className: "p-5 space-y-1",
                children: [
                  e.jsx("p", { className: "font-semibold", children: d.title }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: d.text,
                  }),
                ],
              }),
            },
            d.title
          )
        ),
      }),
      e.jsx(_, {
        className: "rounded-2xl",
        children: e.jsxs(w, {
          className: "p-5 space-y-3",
          children: [
            e.jsx("p", {
              className: "font-semibold",
              children: "O que o MDM faz no aparelho",
            }),
            e.jsx("div", {
              className: "grid gap-2 sm:grid-cols-2",
              children: ia.map((d) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "flex items-center gap-2 rounded-xl border p-3 text-sm",
                    children: [
                      e.jsx(d.icon, {
                        className: "h-4 w-4 text-primary shrink-0",
                      }),
                      " ",
                      d.label,
                    ],
                  },
                  d.label
                )
              ),
            }),
          ],
        }),
      }),
      e.jsx(_, {
        className: "rounded-2xl border-amber-500/30 bg-amber-500/5",
        children: e.jsxs(w, {
          className: "p-5 space-y-2 text-sm",
          children: [
            e.jsxs("p", {
              className: "font-semibold flex items-center gap-2 text-amber-600",
              children: [e.jsx(ee, { className: "h-4 w-4" }), "Importante"],
            }),
            e.jsxs("ul", {
              className: "list-disc ml-5 text-muted-foreground space-y-1",
              children: [
                e.jsxs("li", {
                  children: [
                    "Só funciona em ",
                    e.jsx("b", { children: "Android" }),
                    ". iPhone exige Apple Business Manager (não suportado nesta versão).",
                  ],
                }),
                e.jsxs("li", {
                  children: [
                    "O aparelho precisa ser provisionado ",
                    e.jsx("b", { children: "zerado" }),
                    " — não dá para virar Device Owner com o celular já configurado.",
                  ],
                }),
                e.jsx("li", {
                  children:
                    "Informe o cliente no contrato de venda que o aparelho possui bloqueio remoto por inadimplência.",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(_, {
        className: "rounded-2xl",
        children: e.jsxs(w, {
          className: "p-5 space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between gap-2",
              children: [
                e.jsxs("p", {
                  className: "font-semibold",
                  children: [
                    "API do agente ",
                    e.jsx(R, {
                      variant: "outline",
                      className: "ml-2",
                      children: "pronta",
                    }),
                  ],
                }),
                e.jsxs(i, {
                  size: "sm",
                  variant: "outline",
                  className: "rounded-xl",
                  onClick: () => v(t, "Endpoint"),
                  children: [
                    e.jsx(z, { className: "h-4 w-4 mr-1" }),
                    " Copiar endpoint",
                  ],
                }),
              ],
            }),
            e.jsx("pre", {
              className:
                "text-xs bg-muted/50 rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-all",
              children: n,
            }),
            e.jsx("p", {
              className: "text-xs text-muted-foreground",
              children:
                "Entregue esse endpoint e o token ao desenvolvedor do agente (ou use o agente oficial Tech OS PRO). Nenhuma chave secreta é necessária: o token do aparelho autentica a comunicação.",
            }),
          ],
        }),
      }),
    ],
  });
}
const pe = "https://tqyiayvqsbrzxjyrbijq.supabase.co/functions/v1/mdm-agent",
  je = {
    client_name: "",
    client_phone: "",
    client_doc: "",
    brand: "",
    model: "",
    imei: "",
    serial: "",
    sale_price: "",
    notes: "",
    installments: "0",
    first_due: "",
    installment_amount: "",
  };
function ha() {
  const { effectiveUserId: t, authUserId: C, loading: v } = qe(),
    n = t || C || "",
    { toast: d } = ae(),
    { format: D } = Pe(),
    [x, M] = o.useState(!0),
    [h, T] = o.useState([]),
    [I, O] = o.useState([]),
    [k, G] = o.useState(""),
    [j, r] = o.useState("all"),
    [$, A] = o.useState(!1),
    [s, u] = o.useState({ ...je }),
    [se, Q] = o.useState(!1),
    [q, H] = o.useState(null),
    [y, P] = o.useState(null),
    [le, te] = o.useState(""),
    [K, J] = o.useState(null),
    [f, re] = o.useState(null),
    b = o.useCallback(async () => {
      if (!n) return;
      M(!0);
      const [{ data: a }, { data: l }] = await Promise.all([
        g
          .from("mdm_devices")
          .select("*")
          .eq("user_id", n)
          .order("created_at", { ascending: !1 })
          .limit(400),
        g
          .from("mdm_installments")
          .select("id,device_id,number,amount,due_date,paid_at")
          .eq("user_id", n)
          .order("due_date"),
      ]);
      T(a || []), O(l || []), M(!1);
    }, [n]);
  o.useEffect(() => {
    v || !n || b();
  }, [v, n, b]);
  const Y = o.useMemo(() => {
      const a = new Date().toISOString().slice(0, 10),
        l = {};
      return (
        I.forEach((p) => {
          var N;
          !p.paid_at &&
            p.due_date < a &&
            (l[(N = p.device_id)] || (l[N] = [])).push(p);
        }),
        l
      );
    }, [I]),
    oe = o.useMemo(() => {
      const a = k.trim().toLowerCase();
      return h.filter((l) =>
        j !== "all" && l.status !== j
          ? !1
          : a
          ? [
              l.client_name,
              l.model,
              l.brand,
              l.imei,
              l.serial,
              l.client_phone,
            ].some((p) => (p || "").toLowerCase().includes(a))
          : !0
      );
    }, [h, k, j]),
    L = o.useMemo(
      () => ({
        total: h.length,
        ativos: h.filter((a) => a.status === "ativo").length,
        bloqueados: h.filter((a) => a.status === "bloqueado").length,
        inadimplentes: Object.keys(Y).length,
      }),
      [h, Y]
    ),
    ve = () =>
      (crypto.randomUUID() + crypto.randomUUID())
        .replace(/-/g, "")
        .slice(0, 40),
    ge = async () => {
      if (!s.model.trim()) {
        d({ title: "Informe o modelo do aparelho", variant: "destructive" });
        return;
      }
      Q(!0);
      const a = ve(),
        { data: l, error: p } = await g
          .from("mdm_devices")
          .insert({
            user_id: n,
            client_name: s.client_name || null,
            client_phone: s.client_phone || null,
            client_doc: s.client_doc || null,
            brand: s.brand || null,
            model: s.model,
            imei: s.imei || null,
            serial: s.serial || null,
            sale_price: s.sale_price ? Number(s.sale_price) : 0,
            notes: s.notes || null,
            enroll_token: a,
          })
          .select()
          .single();
      if (p || !l) {
        Q(!1),
          d({
            title: "Erro ao cadastrar",
            description: p?.message,
            variant: "destructive",
          });
        return;
      }
      const N = Number(s.installments || 0);
      if (N > 0 && s.first_due) {
        const Ce = s.installment_amount
            ? Number(s.installment_amount)
            : Number(s.sale_price || 0) / N,
          ke = Array.from({ length: N }, (ca, ie) => {
            const X = new Date(s.first_due + "T12:00:00");
            return (
              X.setMonth(X.getMonth() + ie),
              {
                device_id: l.id,
                user_id: n,
                number: ie + 1,
                amount: Ce,
                due_date: X.toISOString().slice(0, 10),
              }
            );
          });
        await g.from("mdm_installments").insert(ke);
      }
      Q(!1), A(!1), u({ ...je }), await b();
      const we = { ...l };
      H(we),
        d({
          title: "Aparelho cadastrado!",
          description: "Escaneie o QR no celular para vincular.",
        });
    },
    ne = async (a, l, p = {}) => {
      const { error: N } = await g
        .from("mdm_commands")
        .insert({ device_id: a.id, user_id: n, action: l, payload: p });
      if (N) {
        d({
          title: "Erro ao enviar comando",
          description: N.message,
          variant: "destructive",
        });
        return;
      }
      l === "lock" &&
        (await g
          .from("mdm_devices")
          .update({
            status: "bloqueado",
            lock_message: p.message || a.lock_message,
          })
          .eq("id", a.id)),
        l === "unlock" &&
          (await g
            .from("mdm_devices")
            .update({ status: "ativo" })
            .eq("id", a.id)),
        await b(),
        d({
          title:
            l === "lock"
              ? "Bloqueio enviado"
              : l === "unlock"
              ? "Desbloqueio enviado"
              : "Mensagem enviada",
          description: "O aparelho aplica na próxima verificação (até 60s).",
        });
    },
    Ne = async (a) => {
      await g
        .from("mdm_installments")
        .update({ paid_at: a.paid_at ? null : new Date().toISOString() })
        .eq("id", a.id),
        await b();
    },
    fe = async () => {
      K &&
        (await g.from("mdm_devices").delete().eq("id", K.id),
        J(null),
        await b(),
        d({ title: "Aparelho removido" }));
    },
    be = (a) =>
      a.status === "bloqueado"
        ? e.jsxs(R, {
            className:
              "bg-destructive/15 text-destructive border-destructive/30",
            children: [e.jsx(E, { className: "h-3 w-3 mr-1" }), "Bloqueado"],
          })
        : a.status === "ativo"
        ? e.jsxs(R, {
            className: "bg-primary/15 text-primary border-primary/30",
            children: [e.jsx(S, { className: "h-3 w-3 mr-1" }), "Ativo"],
          })
        : e.jsxs(R, {
            variant: "outline",
            children: [
              e.jsx(Z, { className: "h-3 w-3 mr-1" }),
              "Aguardando vínculo",
            ],
          }),
    _e = (a) =>
      a.last_seen_at
        ? Date.now() - new Date(a.last_seen_at).getTime() < 5 * 60 * 1e3
        : !1;
  return e.jsxs("div", {
    className: "p-4 md:p-6 space-y-6 max-w-[1400px] mx-auto",
    children: [
      e.jsxs("div", {
        className:
          "flex flex-col md:flex-row md:items-center justify-between gap-3",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("h1", {
                className:
                  "text-2xl md:text-3xl font-bold flex items-center gap-2",
                children: [
                  e.jsx(S, { className: "h-7 w-7 text-primary" }),
                  " MDM — Bloqueio de Aparelhos",
                ],
              }),
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children:
                  "Venda parcelada com segurança: bloqueie o Android à distância e impeça a formatação.",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsxs(i, {
                variant: "outline",
                className: "rounded-xl",
                onClick: b,
                children: [
                  e.jsx(Ee, { className: "h-4 w-4 mr-1" }),
                  " Atualizar",
                ],
              }),
              e.jsxs(i, {
                className: "rounded-xl",
                onClick: () => A(!0),
                children: [
                  e.jsx(de, { className: "h-4 w-4 mr-1" }),
                  " Novo aparelho",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(Re, {
        defaultValue: "devices",
        children: [
          e.jsxs(Me, {
            className: "rounded-2xl",
            children: [
              e.jsxs(ce, {
                value: "devices",
                className: "rounded-xl",
                children: [
                  e.jsx(W, { className: "h-4 w-4 mr-1" }),
                  "Aparelhos",
                ],
              }),
              e.jsxs(ce, {
                value: "guide",
                className: "rounded-xl",
                children: [
                  e.jsx(sa, { className: "h-4 w-4 mr-1" }),
                  "Passo a passo",
                ],
              }),
            ],
          }),
          e.jsxs(me, {
            value: "devices",
            className: "space-y-5 mt-5",
            children: [
              e.jsx("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
                children: [
                  {
                    label: "Aparelhos",
                    value: L.total,
                    icon: W,
                    tone: "text-primary",
                  },
                  {
                    label: "Ativos",
                    value: L.ativos,
                    icon: S,
                    tone: "text-emerald-500",
                  },
                  {
                    label: "Bloqueados",
                    value: L.bloqueados,
                    icon: E,
                    tone: "text-destructive",
                  },
                  {
                    label: "Em atraso",
                    value: L.inadimplentes,
                    icon: ee,
                    tone: "text-amber-500",
                  },
                ].map((a) =>
                  e.jsx(
                    _,
                    {
                      className:
                        "rounded-2xl border bg-card/70 backdrop-blur hover:shadow-lg transition-shadow",
                      children: e.jsxs(w, {
                        className: "p-4 flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: a.label,
                              }),
                              e.jsx("p", {
                                className: "text-2xl font-bold",
                                children: a.value,
                              }),
                            ],
                          }),
                          e.jsx(a.icon, { className: `h-8 w-8 ${a.tone}` }),
                        ],
                      }),
                    },
                    a.label
                  )
                ),
              }),
              e.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-2",
                children: [
                  e.jsxs("div", {
                    className: "relative flex-1",
                    children: [
                      e.jsx(Te, {
                        className:
                          "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                      }),
                      e.jsx(m, {
                        className: "pl-9 rounded-xl",
                        placeholder: "Buscar por cliente, modelo, IMEI…",
                        value: k,
                        onChange: (a) => G(a.target.value),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "flex gap-2 overflow-x-auto",
                    children: ["all", "ativo", "bloqueado", "pendente"].map(
                      (a) =>
                        e.jsx(
                          i,
                          {
                            size: "sm",
                            variant: j === a ? "default" : "outline",
                            className: "rounded-xl whitespace-nowrap",
                            onClick: () => r(a),
                            children:
                              a === "all"
                                ? "Todos"
                                : a === "ativo"
                                ? "Ativos"
                                : a === "bloqueado"
                                ? "Bloqueados"
                                : "Pendentes",
                          },
                          a
                        )
                    ),
                  }),
                ],
              }),
              x
                ? e.jsx("div", {
                    className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3",
                    children: [1, 2, 3].map((a) =>
                      e.jsx(Le, { className: "h-44 rounded-2xl" }, a)
                    ),
                  })
                : oe.length === 0
                ? e.jsx(_, {
                    className: "rounded-2xl",
                    children: e.jsxs(w, {
                      className: "p-10 text-center space-y-2",
                      children: [
                        e.jsx(W, {
                          className: "h-10 w-10 mx-auto text-muted-foreground",
                        }),
                        e.jsx("p", {
                          className: "font-semibold",
                          children: "Nenhum aparelho cadastrado",
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children:
                            "Cadastre a venda e gere o QR de vínculo em segundos.",
                        }),
                        e.jsxs(i, {
                          className: "rounded-xl mt-2",
                          onClick: () => A(!0),
                          children: [
                            e.jsx(de, { className: "h-4 w-4 mr-1" }),
                            "Cadastrar",
                          ],
                        }),
                      ],
                    }),
                  })
                : e.jsx("div", {
                    className: "grid gap-3 md:grid-cols-2 xl:grid-cols-3",
                    children: oe.map((a) => {
                      const l = Y[a.id]?.length || 0;
                      return e.jsx(
                        _,
                        {
                          className:
                            "rounded-2xl border bg-card/70 backdrop-blur hover:shadow-xl hover:-translate-y-0.5 transition-all",
                          children: e.jsxs(w, {
                            className: "p-4 space-y-3",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-start justify-between gap-2",
                                children: [
                                  e.jsxs("div", {
                                    className: "min-w-0",
                                    children: [
                                      e.jsxs("p", {
                                        className: "font-semibold truncate",
                                        children: [
                                          a.brand ? `${a.brand} ` : "",
                                          a.model,
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground truncate",
                                        children:
                                          a.client_name || "Sem cliente",
                                      }),
                                    ],
                                  }),
                                  be(a),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex flex-wrap gap-2 text-xs text-muted-foreground",
                                children: [
                                  e.jsxs("span", {
                                    className: "inline-flex items-center gap-1",
                                    children: [
                                      _e(a)
                                        ? e.jsx(Be, {
                                            className:
                                              "h-3.5 w-3.5 text-emerald-500",
                                          })
                                        : e.jsx(Fe, {
                                            className: "h-3.5 w-3.5",
                                          }),
                                      a.last_seen_at
                                        ? new Date(
                                            a.last_seen_at
                                          ).toLocaleString("pt-BR")
                                        : "nunca conectou",
                                    ],
                                  }),
                                  a.battery != null &&
                                    e.jsxs("span", {
                                      className:
                                        "inline-flex items-center gap-1",
                                      children: [
                                        e.jsx(ea, { className: "h-3.5 w-3.5" }),
                                        a.battery,
                                        "%",
                                      ],
                                    }),
                                  a.android_version &&
                                    e.jsxs("span", {
                                      children: ["Android ", a.android_version],
                                    }),
                                ],
                              }),
                              a.imei &&
                                e.jsxs("p", {
                                  className:
                                    "text-xs font-mono text-muted-foreground break-all",
                                  children: ["IMEI ", a.imei],
                                }),
                              l > 0 &&
                                e.jsxs("div", {
                                  className:
                                    "rounded-xl bg-amber-500/10 border border-amber-500/30 px-3 py-2 text-xs text-amber-600 flex items-center gap-2",
                                  children: [
                                    e.jsx(ee, { className: "h-3.5 w-3.5" }),
                                    " ",
                                    l,
                                    " parcela(s) em atraso",
                                  ],
                                }),
                              e.jsxs("div", {
                                className: "grid grid-cols-2 gap-2 pt-1",
                                children: [
                                  a.status === "bloqueado"
                                    ? e.jsxs(i, {
                                        size: "sm",
                                        variant: "outline",
                                        className: "rounded-xl",
                                        onClick: () => ne(a, "unlock"),
                                        children: [
                                          e.jsx(Ue, {
                                            className: "h-4 w-4 mr-1",
                                          }),
                                          " Desbloquear",
                                        ],
                                      })
                                    : e.jsxs(i, {
                                        size: "sm",
                                        variant: "destructive",
                                        className: "rounded-xl",
                                        onClick: () => {
                                          P(a),
                                            te(
                                              a.lock_message ||
                                                "Aparelho bloqueado por falta de pagamento. Fale com a loja para liberar."
                                            );
                                        },
                                        children: [
                                          e.jsx(E, {
                                            className: "h-4 w-4 mr-1",
                                          }),
                                          " Bloquear",
                                        ],
                                      }),
                                  e.jsxs(i, {
                                    size: "sm",
                                    variant: "outline",
                                    className: "rounded-xl",
                                    onClick: () => H(a),
                                    children: [
                                      e.jsx(Z, { className: "h-4 w-4 mr-1" }),
                                      " QR",
                                    ],
                                  }),
                                  e.jsxs(i, {
                                    size: "sm",
                                    variant: "ghost",
                                    className: "rounded-xl",
                                    onClick: () => re(a),
                                    children: [
                                      e.jsx(aa, { className: "h-4 w-4 mr-1" }),
                                      " Parcelas",
                                    ],
                                  }),
                                  e.jsxs(i, {
                                    size: "sm",
                                    variant: "ghost",
                                    className: "rounded-xl text-destructive",
                                    onClick: () => J(a),
                                    children: [
                                      e.jsx(Ve, { className: "h-4 w-4 mr-1" }),
                                      " Excluir",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        a.id
                      );
                    }),
                  }),
            ],
          }),
          e.jsx(me, {
            value: "guide",
            className: "mt-5",
            children: e.jsx(da, { apiUrl: pe }),
          }),
        ],
      }),
      e.jsx(B, {
        open: $,
        onOpenChange: A,
        children: e.jsxs(F, {
          className: "max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl",
          children: [
            e.jsx(U, {
              children: e.jsx(V, { children: "Cadastrar aparelho vendido" }),
            }),
            e.jsxs("div", {
              className: "grid gap-3 sm:grid-cols-2",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx(c, { className: "text-xs", children: "Cliente" }),
                    e.jsx(m, {
                      className: "rounded-xl",
                      value: s.client_name,
                      onChange: (a) => u({ ...s, client_name: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, { className: "text-xs", children: "WhatsApp" }),
                    e.jsx(m, {
                      className: "rounded-xl",
                      value: s.client_phone,
                      onChange: (a) =>
                        u({ ...s, client_phone: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, { className: "text-xs", children: "CPF/NIF" }),
                    e.jsx(m, {
                      className: "rounded-xl",
                      value: s.client_doc,
                      onChange: (a) => u({ ...s, client_doc: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, { className: "text-xs", children: "Marca" }),
                    e.jsx(m, {
                      className: "rounded-xl",
                      value: s.brand,
                      onChange: (a) => u({ ...s, brand: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, { className: "text-xs", children: "Modelo *" }),
                    e.jsx(m, {
                      className: "rounded-xl",
                      value: s.model,
                      onChange: (a) => u({ ...s, model: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, { className: "text-xs", children: "IMEI" }),
                    e.jsx(m, {
                      className: "rounded-xl",
                      value: s.imei,
                      onChange: (a) => u({ ...s, imei: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, { className: "text-xs", children: "Nº de série" }),
                    e.jsx(m, {
                      className: "rounded-xl",
                      value: s.serial,
                      onChange: (a) => u({ ...s, serial: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, {
                      className: "text-xs",
                      children: "Valor da venda",
                    }),
                    e.jsx(m, {
                      type: "number",
                      className: "rounded-xl",
                      value: s.sale_price,
                      onChange: (a) => u({ ...s, sale_price: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, { className: "text-xs", children: "Parcelas" }),
                    e.jsx(m, {
                      type: "number",
                      className: "rounded-xl",
                      value: s.installments,
                      onChange: (a) =>
                        u({ ...s, installments: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, {
                      className: "text-xs",
                      children: "1º vencimento",
                    }),
                    e.jsx(m, {
                      type: "date",
                      className: "rounded-xl",
                      value: s.first_due,
                      onChange: (a) => u({ ...s, first_due: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(c, {
                      className: "text-xs",
                      children: "Valor da parcela (opcional)",
                    }),
                    e.jsx(m, {
                      type: "number",
                      className: "rounded-xl",
                      value: s.installment_amount,
                      onChange: (a) =>
                        u({ ...s, installment_amount: a.target.value }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "sm:col-span-2",
                  children: [
                    e.jsx(c, { className: "text-xs", children: "Observações" }),
                    e.jsx(xe, {
                      className: "rounded-xl",
                      value: s.notes,
                      onChange: (a) => u({ ...s, notes: a.target.value }),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(ue, {
              children: [
                e.jsx(i, {
                  variant: "outline",
                  className: "rounded-xl",
                  onClick: () => A(!1),
                  children: "Cancelar",
                }),
                e.jsx(i, {
                  className: "rounded-xl",
                  onClick: ge,
                  disabled: se,
                  children: se ? "Salvando…" : "Cadastrar e gerar QR",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(B, {
        open: !!y,
        onOpenChange: (a) => !a && P(null),
        children: e.jsxs(F, {
          className: "rounded-3xl",
          children: [
            e.jsx(U, {
              children: e.jsxs(V, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(E, { className: "h-5 w-5 text-destructive" }),
                  "Bloquear aparelho",
                ],
              }),
            }),
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children:
                    "A tela do aparelho será travada com a mensagem abaixo. O cliente não consegue usar o celular nem formatá-lo.",
                }),
                e.jsx(c, {
                  className: "text-xs",
                  children: "Mensagem exibida na tela",
                }),
                e.jsx(xe, {
                  className: "rounded-xl",
                  rows: 3,
                  value: le,
                  onChange: (a) => te(a.target.value),
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between rounded-xl border p-3",
                  children: [
                    e.jsxs("div", {
                      className: "text-sm",
                      children: [
                        e.jsx("p", {
                          className: "font-medium",
                          children: "Bloqueio automático por atraso",
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            "Sugerir bloqueio quando houver parcela vencida",
                        }),
                      ],
                    }),
                    e.jsx(ze, {
                      checked: y?.auto_lock ?? !0,
                      onCheckedChange: async (a) => {
                        y &&
                          (await g
                            .from("mdm_devices")
                            .update({ auto_lock: a })
                            .eq("id", y.id),
                          P({ ...y, auto_lock: a }),
                          b());
                      },
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(ue, {
              children: [
                e.jsx(i, {
                  variant: "outline",
                  className: "rounded-xl",
                  onClick: () => P(null),
                  children: "Cancelar",
                }),
                e.jsx(i, {
                  variant: "destructive",
                  className: "rounded-xl",
                  onClick: () => {
                    y && (ne(y, "lock", { message: le }), P(null));
                  },
                  children: "Bloquear agora",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(B, {
        open: !!f,
        onOpenChange: (a) => !a && re(null),
        children: e.jsxs(F, {
          className: "max-w-lg rounded-3xl max-h-[85vh] overflow-y-auto",
          children: [
            e.jsx(U, {
              children: e.jsxs(V, { children: ["Parcelas — ", f?.model] }),
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                I.filter((a) => a.device_id === f?.id).length === 0 &&
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Nenhuma parcela cadastrada para este aparelho.",
                  }),
                I.filter((a) => a.device_id === f?.id).map((a) => {
                  const l =
                    !a.paid_at &&
                    a.due_date < new Date().toISOString().slice(0, 10);
                  return e.jsxs(
                    "div",
                    {
                      className: `flex items-center justify-between rounded-xl border p-3 ${
                        l ? "border-amber-500/40 bg-amber-500/5" : ""
                      }`,
                      children: [
                        e.jsxs("div", {
                          className: "text-sm",
                          children: [
                            e.jsxs("p", {
                              className: "font-medium",
                              children: [
                                "Parcela ",
                                a.number,
                                " — ",
                                D(Number(a.amount)),
                              ],
                            }),
                            e.jsxs("p", {
                              className: "text-xs text-muted-foreground",
                              children: [
                                "Vence ",
                                new Date(
                                  a.due_date + "T12:00:00"
                                ).toLocaleDateString("pt-BR"),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(i, {
                          size: "sm",
                          variant: a.paid_at ? "default" : "outline",
                          className: "rounded-xl",
                          onClick: () => Ne(a),
                          children: [
                            e.jsx(We, { className: "h-4 w-4 mr-1" }),
                            " ",
                            a.paid_at ? "Paga" : "Marcar paga",
                          ],
                        }),
                      ],
                    },
                    a.id
                  );
                }),
                f?.client_phone &&
                  e.jsxs(i, {
                    variant: "outline",
                    className: "w-full rounded-xl mt-2",
                    onClick: () =>
                      window.open(
                        `https://wa.me/${f.client_phone.replace(
                          /\D/g,
                          ""
                        )}?text=${encodeURIComponent(
                          `Olá ${f.client_name || ""}, sobre o aparelho ${
                            f.model
                          }: identificamos parcela(s) em aberto. Podemos regularizar hoje?`
                        )}`,
                        "_blank"
                      ),
                    children: [
                      e.jsx(Ge, { className: "h-4 w-4 mr-1" }),
                      " Cobrar no WhatsApp",
                    ],
                  }),
              ],
            }),
          ],
        }),
      }),
      q &&
        e.jsx(oa, {
          open: !!q,
          onOpenChange: (a) => !a && H(null),
          token: q.enroll_token,
          deviceLabel: `${q.brand || ""} ${q.model}`.trim(),
          apiUrl: pe,
        }),
      e.jsx($e, {
        open: !!K,
        onOpenChange: (a) => !a && J(null),
        children: e.jsxs(Qe, {
          className: "rounded-3xl",
          children: [
            e.jsxs(He, {
              children: [
                e.jsx(Ke, { children: "Remover aparelho?" }),
                e.jsx(Je, {
                  children:
                    "O aparelho perde o vínculo com o MDM. Se estiver bloqueado, desbloqueie antes de excluir.",
                }),
              ],
            }),
            e.jsxs(Ye, {
              children: [
                e.jsx(Xe, { className: "rounded-xl", children: "Cancelar" }),
                e.jsx(Ze, {
                  className: "rounded-xl",
                  onClick: fe,
                  children: "Remover",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { ha as default };
