import {
  bG as z,
  r as c,
  bH as V,
  j as e,
  bV as D,
  G as v,
  a1 as w,
  K as q,
  bl as U,
  bW as F,
  S as $,
  bX as Q,
  bO as y,
  b4 as W,
  C as T,
  bM as R,
  bY as X,
  by as L,
  b3 as E,
  bJ as H,
  bz as J,
  bQ as Y,
  Y as K,
  $ as Z,
  bx as ee,
  bZ as ae,
  B as M,
  bR as re,
  a7 as se,
  w as _,
} from "./index-V8ZHCWL2.js";
import { S as I } from "./shield-x-CjH_UR8i.js";
import { S as te } from "./scale-_P6jyxG7.js";
const ie = (r) =>
    r
      ? r.replace(/\D/g, "").length >= 8
        ? r.slice(0, 3) + "***" + r.slice(-2)
        : r
      : "",
  B = (r) =>
    r
      ? r.length <= 6
        ? "***" + r.slice(-2)
        : r.slice(0, 4) + "****" + r.slice(-4)
      : "",
  ne = (r) => {
    if (!r) return "";
    const d = {
        smartphone: "Smartphone",
        celular: "Celular",
        tablet: "Tablet",
        notebook: "Notebook",
        laptop: "Notebook",
        computador: "Computador",
        desktop: "Desktop",
        console: "Console / Videogame",
        relogio: "Smartwatch",
        smartwatch: "Smartwatch",
        fone: "Fone / Áudio",
        tv: "TV",
        outro: "Outro",
      },
      o = r.toLowerCase();
    return d[o] || r.charAt(0).toUpperCase() + r.slice(1);
  },
  de = (r) =>
    ({
      pending: "Pendente",
      in_progress: "Em andamento",
      waiting_parts: "Aguardando peças",
      waiting_approval: "Aguardando aprovação",
      completed: "Concluída",
      delivered: "Entregue",
      cancelled: "Cancelada",
      canceled: "Cancelada",
    }[r] || r),
  oe = (r, d) => {
    if (!r || isNaN(r.getTime()))
      return {
        variant: "missing",
        label: "Garantia Não Definida",
        detail: "Prazo de garantia ainda não foi registrado para esta OS.",
        badge: "Indefinida",
        daysLeft: 0,
      };
    const o = new Date(),
      a = 1e3 * 60 * 60 * 24,
      g = r.getTime() - o.getTime(),
      s = Math.ceil(g / a);
    if (g <= 0) {
      const b = Math.abs(s);
      return {
        variant: "expired",
        label: "Garantia EXPIRADA",
        detail: `Expirou há ${b} ${
          b === 1 ? "dia" : "dias"
        } (${r.toLocaleDateString("pt-BR")})`,
        badge: "Expirada",
        daysLeft: s,
      };
    }
    return s <= 7
      ? {
          variant: "expiring",
          label: "Garantia Expirando",
          detail: `Faltam apenas ${s} ${
            s === 1 ? "dia" : "dias"
          } • vence em ${r.toLocaleDateString("pt-BR")}`,
          badge: "Expira em breve",
          daysLeft: s,
        }
      : {
          variant: "active",
          label: "Garantia ATIVA",
          detail: `${s} ${
            s === 1 ? "dia restante" : "dias restantes"
          } • vence em ${r.toLocaleDateString("pt-BR")}`,
          badge: "Vigente",
          daysLeft: s,
        };
  },
  le = (r) => {
    switch (r) {
      case "active":
        return {
          border: "border-emerald-400 dark:border-emerald-700",
          bg: "bg-gradient-to-r from-emerald-500 to-emerald-600",
          soft: "border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-800",
          icon: "text-emerald-600",
        };
      case "expiring":
        return {
          border: "border-amber-400 dark:border-amber-700",
          bg: "bg-gradient-to-r from-amber-500 to-orange-500",
          soft: "border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800",
          icon: "text-amber-600",
        };
      case "expired":
        return {
          border: "border-rose-400 dark:border-rose-700",
          bg: "bg-gradient-to-r from-rose-500 to-red-600",
          soft: "border-rose-300 bg-rose-50 dark:bg-rose-950/30 dark:border-rose-800",
          icon: "text-rose-600",
        };
      case "none":
        return {
          border: "border-slate-400 dark:border-slate-700",
          bg: "bg-gradient-to-r from-slate-500 to-slate-700",
          soft: "border-slate-300 bg-slate-50 dark:bg-slate-900/40 dark:border-slate-800",
          icon: "text-slate-600",
        };
      default:
        return {
          border: "border-blue-400 dark:border-blue-700",
          bg: "bg-gradient-to-r from-blue-500 to-indigo-600",
          soft: "border-blue-300 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-800",
          icon: "text-blue-600",
        };
    }
  };
function ue() {
  const { token: r } = z(),
    [d, o] = c.useState(!0),
    [a, g] = c.useState(null),
    [s, b] = c.useState(null),
    [k, j] = c.useState(""),
    m = c.useMemo(() => {
      const p = typeof window < "u" ? window.location.origin : "",
        l = a?.access_token || r || "";
      return l ? `${p}/garantia/${l}` : "";
    }, [a?.access_token, r]);
  if (
    (c.useEffect(() => {
      if (!m) {
        j("");
        return;
      }
      V.toDataURL(m, {
        errorCorrectionLevel: "M",
        margin: 1,
        width: 320,
        color: { dark: "#0a0a0a", light: "#ffffff" },
      })
        .then(j)
        .catch(() => j(""));
    }, [m]),
    c.useEffect(() => {
      (async () => {
        if (!r) {
          o(!1);
          return;
        }
        const l =
          "id, order_number, client_name, client_cpf, device_model, imei, serial, reported_problem, status, entry_date, estimated_delivery_date, technician, warranty_expires_at, is_warranty, warranty_reason, service_value, created_at, type, user_id, access_token";
        let { data: h } = await _.from("service_orders")
          .select(l)
          .eq("access_token", r)
          .maybeSingle();
        if (
          (!h &&
            r.length <= 12 &&
            (h = (
              await _.from("service_orders")
                .select(l)
                .ilike("access_token", `${r}%`)
                .limit(1)
                .maybeSingle()
            ).data),
          h)
        ) {
          g(h);
          const { data: N } = await _.from("user_settings")
            .select(
              "company_name, company_phone, company_cnpj, company_address, company_logo, warranty_days"
            )
            .eq("user_id", h.user_id)
            .maybeSingle();
          N && b(N);
        }
        o(!1);
      })();
    }, [r]),
    d)
  )
    return e.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4 flex items-center justify-center",
      children: e.jsxs("div", {
        className: "w-full max-w-2xl space-y-4",
        children: [
          e.jsx(D, { className: "h-32 w-full rounded-2xl" }),
          e.jsx(D, { className: "h-64 w-full rounded-2xl" }),
        ],
      }),
    });
  if (!a)
    return e.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-red-50 to-slate-100 dark:from-red-950 dark:to-slate-900 p-4 flex items-center justify-center",
      children: e.jsx(v, {
        className:
          "w-full max-w-md border-2 border-red-300 dark:border-red-800",
        children: e.jsxs(w, {
          className: "pt-8 pb-8 text-center space-y-4",
          children: [
            e.jsx("div", {
              className:
                "mx-auto w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center",
              children: e.jsx(I, {
                className: "w-12 h-12 text-red-600 dark:text-red-400",
              }),
            }),
            e.jsx("h1", {
              className: "text-2xl font-bold text-red-700 dark:text-red-300",
              children: "Garantia Não Encontrada",
            }),
            e.jsxs("p", {
              className: "text-muted-foreground",
              children: [
                "Este código de verificação ",
                e.jsx("strong", { children: "NÃO corresponde" }),
                " a nenhuma Ordem de Serviço registrada em nosso sistema.",
              ],
            }),
            e.jsxs("div", {
              className:
                "bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-lg p-4 text-sm text-red-700 dark:text-red-300",
              children: [
                "⚠️ Atenção: o documento apresentado pode ser ",
                e.jsx("strong", { children: "fraudulento" }),
                " ou ter sido emitido por outra empresa.",
              ],
            }),
          ],
        }),
      }),
    });
  const n = a.warranty_expires_at ? new Date(a.warranty_expires_at) : null,
    t = oe(n, a.is_warranty),
    x = le(t.variant),
    O = ["delivered", "completed"].includes(a.status),
    u = ne(a.type),
    C = a.imei ? "IMEI" : a.serial ? "Nº de Série" : "",
    f = a.imei || a.serial || "",
    i = [];
  a.client_name &&
    i.push({
      icon: e.jsx(q, { className: "w-4 h-4" }),
      label: "Cliente",
      value: a.client_name,
    }),
    a.client_cpf &&
      i.push({
        icon: e.jsx(U, { className: "w-4 h-4" }),
        label: "Documento",
        value: ie(a.client_cpf),
      }),
    u &&
      i.push({
        icon: e.jsx(F, { className: "w-4 h-4" }),
        label: "Tipo do Aparelho",
        value: u,
      }),
    a.device_model &&
      i.push({
        icon: e.jsx($, { className: "w-4 h-4" }),
        label: "Modelo",
        value: a.device_model,
      }),
    f &&
      i.push({
        icon: e.jsx(Q, { className: "w-4 h-4" }),
        label: C,
        value: B(f),
      }),
    a.technician &&
      i.push({
        icon: e.jsx(y, { className: "w-4 h-4" }),
        label: "Técnico Responsável",
        value: a.technician,
      }),
    a.entry_date &&
      i.push({
        icon: e.jsx(W, { className: "w-4 h-4" }),
        label: "Data de Entrada",
        value: new Date(a.entry_date + "T12:00:00").toLocaleDateString("pt-BR"),
      }),
    O &&
      i.push({
        icon: e.jsx(T, { className: "w-4 h-4" }),
        label: "Situação",
        value: de(a.status),
      });
  const P = async () => {
      try {
        navigator.share
          ? await navigator.share({
              title: "Verificação de Garantia",
              text: `Termo de garantia da OS ${a.order_number || ""}`,
              url: m,
            })
          : await navigator.clipboard.writeText(m);
      } catch {}
    },
    S = s?.warranty_days || 90,
    A = n
      ? Math.max(
          1,
          Math.round(
            (n.getTime() - new Date(a.created_at).getTime()) /
              (1e3 * 60 * 60 * 24)
          )
        )
      : S,
    G = n
      ? Math.min(
          100,
          Math.max(
            0,
            ((new Date().getTime() - new Date(a.created_at).getTime()) /
              (n.getTime() - new Date(a.created_at).getTime())) *
              100
          )
        )
      : 0;
  return e.jsx("div", {
    className:
      "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-900 p-4 sm:p-6",
    children: e.jsxs("div", {
      className: "max-w-2xl mx-auto space-y-4",
      children: [
        e.jsx(v, {
          className: `border-2 overflow-hidden ${x.border}`,
          children: e.jsx("div", {
            className: `px-6 py-5 ${x.bg} text-white`,
            children: e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                e.jsx("div", {
                  className:
                    "w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shrink-0",
                  children:
                    t.variant === "active"
                      ? e.jsx(R, { className: "w-10 h-10" })
                      : t.variant === "expired"
                      ? e.jsx(I, { className: "w-10 h-10" })
                      : t.variant === "none"
                      ? e.jsx(X, { className: "w-10 h-10" })
                      : e.jsx(L, { className: "w-10 h-10" }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx(E, {
                      className:
                        "bg-white/25 hover:bg-white/30 text-white border-0 mb-1",
                      children: "✓ DOCUMENTO AUTÊNTICO",
                    }),
                    e.jsx("h1", {
                      className: "text-xl sm:text-2xl font-bold",
                      children: t.label,
                    }),
                    e.jsx("p", {
                      className: "text-sm text-white/90",
                      children: t.detail,
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        s?.company_name &&
          e.jsx(v, {
            children: e.jsx(w, {
              className: "pt-6 pb-5",
              children: e.jsxs("div", {
                className: "flex items-start gap-4",
                children: [
                  s.company_logo &&
                    e.jsx("img", {
                      src: s.company_logo,
                      alt: "logo",
                      className:
                        "w-14 h-14 rounded-lg object-contain border bg-white p-1",
                    }),
                  e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      e.jsxs("div", {
                        className:
                          "text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-1",
                        children: [
                          e.jsx(H, { className: "w-3.5 h-3.5" }),
                          " Assistência Técnica Responsável",
                        ],
                      }),
                      e.jsx("h2", {
                        className: "text-lg font-bold",
                        children: s.company_name,
                      }),
                      s.company_cnpj &&
                        e.jsxs("p", {
                          className: "text-xs text-muted-foreground",
                          children: ["CNPJ/NIF: ", s.company_cnpj],
                        }),
                      s.company_phone &&
                        e.jsxs("p", {
                          className:
                            "text-xs text-muted-foreground flex items-center gap-1 mt-0.5",
                          children: [
                            e.jsx(J, { className: "w-3 h-3" }),
                            " ",
                            s.company_phone,
                          ],
                        }),
                      s.company_address &&
                        e.jsxs("p", {
                          className:
                            "text-xs text-muted-foreground flex items-center gap-1 mt-0.5",
                          children: [
                            e.jsx(Y, { className: "w-3 h-3" }),
                            " ",
                            s.company_address,
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        e.jsxs(v, {
          children: [
            e.jsx(K, {
              className: "pb-3",
              children: e.jsxs(Z, {
                className: "flex items-center justify-between text-base",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(y, { className: "w-4 h-4 text-primary" }),
                      "Ordem de Serviço",
                    ],
                  }),
                  e.jsx(E, {
                    variant: "outline",
                    className: "font-mono text-sm",
                    children: a.order_number || `#${a.id.slice(0, 8)}`,
                  }),
                ],
              }),
            }),
            e.jsxs(w, {
              className: "space-y-4",
              children: [
                (a.device_model || u) &&
                  e.jsxs("div", {
                    className:
                      "rounded-xl border bg-gradient-to-br from-primary/5 to-transparent p-4 flex items-start gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0",
                        children: e.jsx($, {
                          className: "w-6 h-6 text-primary",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          u &&
                            e.jsx("div", {
                              className:
                                "text-[11px] uppercase tracking-wider text-muted-foreground",
                              children: u,
                            }),
                          a.device_model &&
                            e.jsx("div", {
                              className:
                                "text-base sm:text-lg font-bold truncate",
                              children: a.device_model,
                            }),
                          f &&
                            e.jsxs("div", {
                              className: "text-xs text-muted-foreground mt-0.5",
                              children: [
                                C,
                                ": ",
                                e.jsx("span", {
                                  className: "font-mono",
                                  children: B(f),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                i.length > 0 &&
                  e.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                    children: i.map((p, l) =>
                      e.jsx(
                        ce,
                        { icon: p.icon, label: p.label, value: p.value },
                        l
                      )
                    ),
                  }),
                a.reported_problem &&
                  e.jsxs("div", {
                    className: "border-t pt-3",
                    children: [
                      e.jsxs("div", {
                        className:
                          "text-xs uppercase tracking-wider text-muted-foreground mb-1.5 flex items-center gap-1.5",
                        children: [
                          e.jsx(y, { className: "w-3.5 h-3.5" }),
                          " Serviço Realizado",
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm bg-muted/50 rounded-lg p-3 whitespace-pre-wrap",
                        children: a.reported_problem,
                      }),
                    ],
                  }),
                e.jsxs("div", {
                  className: `border-2 rounded-xl p-4 ${x.soft}`,
                  children: [
                    e.jsxs("div", {
                      className:
                        "text-xs uppercase tracking-wider font-bold mb-3 flex items-center gap-1.5",
                      children: [
                        e.jsx(R, { className: "w-4 h-4" }),
                        " Detalhes da Garantia",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-3 text-sm",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "Prazo",
                            }),
                            e.jsxs("div", {
                              className: "font-bold",
                              children: [s?.warranty_days || 90, " dias"],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "Expira em",
                            }),
                            e.jsx("div", {
                              className: "font-bold",
                              children: n ? n.toLocaleDateString("pt-BR") : "—",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "Status",
                            }),
                            e.jsxs("div", {
                              className: "font-bold flex items-center gap-1",
                              children: [
                                t.variant === "active"
                                  ? e.jsx(T, { className: `w-4 h-4 ${x.icon}` })
                                  : t.variant === "expiring"
                                  ? e.jsx(L, { className: `w-4 h-4 ${x.icon}` })
                                  : e.jsx(ee, {
                                      className: `w-4 h-4 ${x.icon}`,
                                    }),
                                t.badge,
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children:
                                t.variant === "active" ||
                                t.variant === "expiring"
                                  ? "Dias Restantes"
                                  : t.variant === "expired"
                                  ? "Expirada há"
                                  : "Cobertura",
                            }),
                            e.jsx("div", {
                              className: "font-bold",
                              children:
                                t.variant === "active" ||
                                t.variant === "expiring"
                                  ? `${t.daysLeft} ${
                                      t.daysLeft === 1 ? "dia" : "dias"
                                    }`
                                  : t.variant === "expired"
                                  ? `${Math.abs(t.daysLeft)} ${
                                      Math.abs(t.daysLeft) === 1
                                        ? "dia"
                                        : "dias"
                                    }`
                                  : t.variant === "none"
                                  ? "Não incluída"
                                  : "—",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.warranty_reason &&
                      e.jsxs("div", {
                        className:
                          "mt-3 pt-3 border-t border-current/10 text-xs",
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Observação: ",
                          }),
                          a.warranty_reason,
                        ],
                      }),
                  ],
                }),
                n &&
                  (t.variant === "active" ||
                    t.variant === "expiring" ||
                    t.variant === "expired") &&
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex justify-between text-[11px] text-muted-foreground",
                        children: [
                          e.jsxs("span", {
                            children: [
                              "Início: ",
                              new Date(a.created_at).toLocaleDateString(
                                "pt-BR"
                              ),
                            ],
                          }),
                          e.jsxs("span", {
                            children: ["Fim: ", n.toLocaleDateString("pt-BR")],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "h-2 rounded-full bg-muted overflow-hidden",
                        children: e.jsx("div", {
                          className: `h-full transition-all ${
                            t.variant === "expired"
                              ? "bg-rose-500"
                              : t.variant === "expiring"
                              ? "bg-amber-500"
                              : "bg-emerald-500"
                          }`,
                          style: { width: `${G}%` },
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "text-[10px] text-muted-foreground text-center",
                        children: [
                          "Cobertura total contratada: ",
                          e.jsxs("strong", { children: [A, " dias"] }),
                        ],
                      }),
                    ],
                  }),
                e.jsx("div", {
                  className:
                    "border-2 border-dashed rounded-xl p-4 bg-muted/30",
                  children: e.jsxs("div", {
                    className: "flex flex-col sm:flex-row items-center gap-4",
                    children: [
                      e.jsx("div", {
                        className: "bg-white p-2 rounded-lg shadow-sm shrink-0",
                        children: k
                          ? e.jsx("img", {
                              src: k,
                              alt: "QR de verificação",
                              className: "w-32 h-32",
                            })
                          : e.jsx("div", {
                              className:
                                "w-32 h-32 bg-muted animate-pulse rounded",
                            }),
                      }),
                      e.jsxs("div", {
                        className:
                          "flex-1 min-w-0 text-center sm:text-left space-y-2",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-1.5 justify-center sm:justify-start text-xs uppercase tracking-wider font-bold",
                            children: [
                              e.jsx(ae, { className: "w-4 h-4" }),
                              " Revalide a qualquer momento",
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children:
                              "Aponte a câmera do celular para este QR Code para reabrir esta página de verificação e conferir novamente a vigência da garantia.",
                          }),
                          e.jsxs("div", {
                            className:
                              "flex gap-2 justify-center sm:justify-start flex-wrap",
                            children: [
                              e.jsxs(M, {
                                size: "sm",
                                variant: "outline",
                                onClick: () => window.location.reload(),
                                children: [
                                  e.jsx(re, { className: "w-3.5 h-3.5 mr-1" }),
                                  " Revalidar agora",
                                ],
                              }),
                              e.jsxs(M, {
                                size: "sm",
                                variant: "outline",
                                onClick: P,
                                children: [
                                  e.jsx(se, { className: "w-3.5 h-3.5 mr-1" }),
                                  " Compartilhar",
                                ],
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-[10px] text-muted-foreground break-all font-mono",
                            children: m,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "border rounded-xl p-4 bg-card text-xs space-y-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5 font-bold text-sm",
                      children: [
                        e.jsx(te, { className: "w-4 h-4 text-primary" }),
                        " Comprovante de Garantia — Base Legal",
                      ],
                    }),
                    e.jsxs("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: [
                        "Este documento constitui ",
                        e.jsx("strong", {
                          children: "comprovação eletrônica de garantia",
                        }),
                        " do serviço técnico descrito acima, prestado por",
                        " ",
                        e.jsx("strong", {
                          children:
                            s?.company_name ||
                            "a assistência técnica responsável",
                        }),
                        s?.company_cnpj ? ` (CNPJ/NIF ${s.company_cnpj})` : "",
                        ".",
                      ],
                    }),
                    e.jsxs("ul", {
                      className:
                        "list-disc pl-4 space-y-1 text-muted-foreground leading-relaxed",
                      children: [
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: "Cobertura contratada:",
                            }),
                            " ",
                            S,
                            " dias contados a partir da data de conclusão/entrega do serviço, conforme política do prestador e em conformidade com o art. 26, II, do Código de Defesa do Consumidor (Lei nº 8.078/1990), que assegura prazo mínimo de 90 dias para produtos e serviços duráveis.",
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: "Escopo da garantia:",
                            }),
                            " abrange exclusivamente o defeito reparado e as peças efetivamente substituídas nesta OS. Não cobre danos por mau uso, queda, oxidação, contato com líquidos, sobrecarga elétrica, violação de lacres ou intervenção de terceiros após a entrega.",
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", {
                              children: "Procedimento para acionamento:",
                            }),
                            " o cliente deverá apresentar este comprovante (ou o nº da OS",
                            " ",
                            e.jsx("span", {
                              className: "font-mono",
                              children: a.order_number || a.id.slice(0, 8),
                            }),
                            ") diretamente ao prestador dentro do prazo de vigência.",
                          ],
                        }),
                        e.jsxs("li", {
                          children: [
                            e.jsx("strong", { children: "Autenticidade:" }),
                            " a integridade desta página é validada em tempo real contra o registro original no sistema. Qualquer divergência caracteriza documento adulterado.",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-[10px] text-muted-foreground pt-1 border-t",
                      children:
                        "Documento gerado eletronicamente — possui validade nos termos do art. 10, §2º, da MP 2.200-2/2001 (ICP-Brasil) e legislação correlata.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "text-[11px] text-muted-foreground text-center border-t pt-3",
                  children: [
                    "Verificação realizada em ",
                    new Date().toLocaleString("pt-BR"),
                    e.jsx("br", {}),
                    "ID de Verificação:",
                    " ",
                    e.jsx("span", {
                      className: "font-mono",
                      children: a.id.slice(0, 8).toUpperCase(),
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
const ce = ({ icon: r, label: d, value: o }) =>
  e.jsxs("div", {
    className: "flex items-start gap-2 rounded-lg border bg-card/50 p-2.5",
    children: [
      e.jsx("div", { className: "text-muted-foreground mt-0.5", children: r }),
      e.jsxs("div", {
        className: "flex-1 min-w-0",
        children: [
          e.jsx("div", {
            className:
              "text-[10px] uppercase tracking-wider text-muted-foreground",
            children: d,
          }),
          e.jsx("div", {
            className: "text-sm font-medium truncate",
            children: o,
          }),
        ],
      }),
    ],
  });
export { ue as default };
