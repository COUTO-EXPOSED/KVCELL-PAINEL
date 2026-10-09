import {
  W as fe,
  r as l,
  j as e,
  G as u,
  a1 as p,
  d_ as je,
  b3 as E,
  h as ie,
  cG as q,
  bL as G,
  cH as oe,
  B as b,
  A as K,
  dd as be,
  l as Ne,
  w as h,
  bR as ce,
  s as ve,
  b1 as we,
  bU as S,
  d$ as ye,
  z as de,
  y as ke,
  bS as ee,
  e0 as se,
  e1 as ae,
  R as te,
  e2 as _e,
  e3 as Se,
  e4 as Pe,
  bj as F,
  bk as O,
  dH as re,
  b4 as me,
  e5 as ne,
  k as Ce,
  Z as Re,
  C as Ae,
  df as xe,
  bM as le,
  ae as Me,
  bx as $e,
  by as Ee,
  Y as De,
  $ as Te,
  a3 as Ve,
  ce as qe,
  e6 as Le,
} from "./index-V8ZHCWL2.js";
import { A as ze } from "./arrow-up-right-BQKFXF8e.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Be = fe("Hourglass", [
    ["path", { d: "M5 22h14", key: "ehvnwv" }],
    ["path", { d: "M5 2h14", key: "pdyrp9" }],
    [
      "path",
      {
        d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
        key: "1d314k",
      },
    ],
    [
      "path",
      {
        d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
        key: "1vvvr6",
      },
    ],
  ]),
  Ie = ({
    isLifetime: s,
    isFreeTrial: i,
    isExpired: r,
    daysRemaining: t,
    currentPlanName: g,
    onUpgradeLifetime: w,
    onRenew: f,
  }) => {
    const [m, a] = l.useState(new Date());
    if (
      (l.useEffect(() => {
        const N = setInterval(() => a(new Date()), 1e3);
        return () => clearInterval(N);
      }, []),
      s)
    )
      return null;
    const o = new Date(m);
    o.setHours(23, 59, 59, 999);
    const j = o.getTime() - m.getTime(),
      y = Math.floor(j / (1e3 * 60 * 60)),
      P = Math.floor((j % (1e3 * 60 * 60)) / (1e3 * 60)),
      C = Math.floor((j % (1e3 * 60)) / 1e3),
      R =
        ((Math.floor(
          (m.getTime() - new Date(m.getFullYear(), 0, 0).getTime()) / 864e5
        ) *
          7) %
          12) +
        3,
      k = 20,
      z = ((k - R) / k) * 100;
    return e.jsxs(u, {
      className:
        "relative overflow-hidden border-0 bg-white dark:bg-card shadow-sm ring-1 ring-border",
      children: [
        e.jsx("div", {
          className:
            "absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange-500 via-rose-500 to-orange-500",
        }),
        e.jsxs(p, {
          className: "p-5 sm:p-6 space-y-5",
          children: [
            e.jsx("div", {
              className: "flex items-start justify-between gap-3 flex-wrap",
              children: e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center",
                    children: e.jsx(je, {
                      className: "w-5 h-5 text-orange-500",
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx(E, {
                        variant: "outline",
                        className:
                          "border-orange-500/30 bg-orange-500/5 text-orange-600 text-[10px] font-bold uppercase tracking-wider mb-1",
                        children: "Oferta por tempo limitado",
                      }),
                      e.jsx("h3", {
                        className:
                          "text-base sm:text-lg font-bold text-foreground leading-tight",
                        children: r
                          ? "Reative seu acesso agora"
                          : i
                          ? "Garanta seu plano antes que o teste expire"
                          : t !== null && t <= 7
                          ? `Seu plano ${g} expira em ${t} ${
                              t === 1 ? "dia" : "dias"
                            }`
                          : "Assegure o melhor preço hoje",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className:
                "rounded-xl bg-muted/40 dark:bg-muted/20 p-4 border border-border/50",
              children: e.jsxs("div", {
                className: "flex items-center justify-between gap-3 flex-wrap",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [
                      e.jsx(ie, { className: "w-4 h-4" }),
                      e.jsx("span", { children: "Esta oferta termina em:" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx(I, { value: y, label: "h" }),
                      e.jsx("span", {
                        className: "text-2xl font-light text-muted-foreground",
                        children: ":",
                      }),
                      e.jsx(I, { value: P, label: "min" }),
                      e.jsx("span", {
                        className: "text-2xl font-light text-muted-foreground",
                        children: ":",
                      }),
                      e.jsx(I, { value: C, label: "s" }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className:
                "rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-500/5 dark:to-orange-500/5 p-4 space-y-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-sm",
                      children: e.jsx(q, { className: "w-5 h-5 text-white" }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 flex-wrap",
                          children: [
                            e.jsxs("p", {
                              className:
                                "font-bold text-amber-900 dark:text-amber-200",
                              children: [
                                "Plano Vitalício — ",
                                e.jsx("span", {
                                  className: "line-through opacity-60",
                                  children: "R$ 499",
                                }),
                                " R$ 349,90 (promo até setembro)",
                              ],
                            }),
                            e.jsxs(E, {
                              className:
                                "bg-amber-500 hover:bg-amber-500 text-white text-[10px] gap-1",
                              children: [
                                e.jsx(G, { className: "w-3 h-3" }),
                                "Lote limitado",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className:
                            "text-xs text-amber-800/80 dark:text-amber-200/70 mt-1",
                          children: [
                            "Pague ",
                            e.jsx("strong", { children: "uma vez" }),
                            " e use para sempre, sem mensalidade. Equivale a ",
                            e.jsx("strong", { children: "~24 meses" }),
                            " de plano Mensal — depois disso, é lucro puro.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between text-xs",
                      children: [
                        e.jsx("span", {
                          className:
                            "text-amber-900/80 dark:text-amber-200/80 font-medium",
                          children: "Vagas no lote atual",
                        }),
                        e.jsxs("span", {
                          className:
                            "font-bold text-amber-900 dark:text-amber-200",
                          children: [R, "/", k, " restantes"],
                        }),
                      ],
                    }),
                    e.jsx(oe, {
                      value: z,
                      className:
                        "h-2 [&>div]:bg-gradient-to-r [&>div]:from-amber-500 [&>div]:to-orange-500",
                    }),
                    e.jsx("p", {
                      className:
                        "text-[10px] text-amber-700/70 dark:text-amber-300/70",
                      children: "Após setembro, o valor volta para R$ 499,00",
                    }),
                  ],
                }),
                e.jsxs(b, {
                  onClick: w,
                  className:
                    "w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md gap-2 group",
                  children: [
                    e.jsx(q, { className: "w-4 h-4" }),
                    "Garantir minha vaga Vitalício",
                    e.jsx(K, {
                      className:
                        "w-4 h-4 transition-transform group-hover:translate-x-0.5",
                    }),
                  ],
                }),
              ],
            }),
            !i &&
              !r &&
              e.jsxs("div", {
                className:
                  "flex items-center justify-between gap-3 pt-1 flex-wrap",
                children: [
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: "Prefere continuar no plano atual?",
                  }),
                  e.jsxs(b, {
                    variant: "ghost",
                    size: "sm",
                    onClick: f,
                    className:
                      "text-primary hover:text-primary hover:bg-primary/5 gap-1",
                    children: [
                      "Renovar ",
                      g,
                      e.jsx(K, { className: "w-3 h-3" }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  I = ({ value: s, label: i }) =>
    e.jsxs("div", {
      className: "flex flex-col items-center min-w-[44px]",
      children: [
        e.jsx("div", {
          className:
            "bg-foreground text-background font-mono font-bold text-lg sm:text-xl rounded-md px-2 py-1 tabular-nums",
          children: String(s).padStart(2, "0"),
        }),
        e.jsx("span", {
          className:
            "text-[9px] text-muted-foreground uppercase tracking-wider mt-1",
          children: i,
        }),
      ],
    }),
  Ge = ({ onChoose: s }) => {
    const i = [
      {
        name: "Mensal",
        price: 25,
        period: "mês",
        total12m: 300,
        total24m: 600,
        total60m: 1500,
        isBest: !1,
        action: null,
      },
      {
        name: "Anual",
        price: 200,
        period: "ano",
        total12m: 200,
        total24m: 400,
        total60m: 1e3,
        saves12m: 100,
        saves60m: 500,
        isBest: !1,
        badge: "Economiza 33%",
        action: "Anual",
      },
      {
        name: "Vitalício",
        price: 349.9,
        period: "única vez (promo até setembro)",
        total12m: 349.9,
        total24m: 349.9,
        total60m: 349.9,
        saves12m: -49.9,
        saves60m: 1150.1,
        isBest: !0,
        badge: "Melhor a longo prazo",
        action: "Vitalício",
      },
    ];
    return e.jsx(u, {
      className: "border border-border/60",
      children: e.jsxs(p, {
        className: "p-5 sm:p-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 mb-1",
            children: [
              e.jsx(be, { className: "w-4 h-4 text-emerald-500" }),
              e.jsx("h3", {
                className: "text-base font-bold",
                children: "Quanto você economiza?",
              }),
            ],
          }),
          e.jsx("p", {
            className: "text-xs text-muted-foreground mb-5",
            children: "Veja quanto cada plano custa ao longo do tempo",
          }),
          e.jsx("div", {
            className: "overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6",
            children: e.jsxs("table", {
              className: "w-full text-sm min-w-[480px]",
              children: [
                e.jsx("thead", {
                  children: e.jsxs("tr", {
                    className: "border-b border-border",
                    children: [
                      e.jsx("th", {
                        className:
                          "text-left py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider",
                        children: "Plano",
                      }),
                      e.jsx("th", {
                        className:
                          "text-right py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider",
                        children: "1 ano",
                      }),
                      e.jsx("th", {
                        className:
                          "text-right py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider",
                        children: "2 anos",
                      }),
                      e.jsx("th", {
                        className:
                          "text-right py-2 font-medium text-muted-foreground text-xs uppercase tracking-wider",
                        children: "5 anos",
                      }),
                    ],
                  }),
                }),
                e.jsx("tbody", {
                  children: i.map((r) =>
                    e.jsxs(
                      "tr",
                      {
                        className: `border-b border-border/40 ${
                          r.isBest ? "bg-amber-50/50 dark:bg-amber-500/5" : ""
                        }`,
                        children: [
                          e.jsxs("td", {
                            className: "py-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold",
                                    children: r.name,
                                  }),
                                  r.badge &&
                                    e.jsx("span", {
                                      className: `text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                        r.isBest
                                          ? "bg-amber-500 text-white"
                                          : "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                                      }`,
                                      children: r.badge,
                                    }),
                                ],
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-[10px] text-muted-foreground mt-0.5",
                                children: [
                                  "R$ ",
                                  r.price.toFixed(0),
                                  "/",
                                  r.period,
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("td", {
                            className: "text-right py-3 font-mono",
                            children: ["R$ ", r.total12m],
                          }),
                          e.jsxs("td", {
                            className: "text-right py-3 font-mono",
                            children: ["R$ ", r.total24m],
                          }),
                          e.jsxs("td", {
                            className: "text-right py-3 font-mono font-bold",
                            children: ["R$ ", r.total60m],
                          }),
                        ],
                      },
                      r.name
                    )
                  ),
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 gap-2 mt-4",
            children: [
              e.jsx(b, {
                variant: "outline",
                onClick: () => s("Anual"),
                className: "text-xs h-9",
                children: "Migrar para Anual",
              }),
              e.jsx(b, {
                onClick: () => s("Vitalício"),
                className:
                  "text-xs h-9 bg-amber-500 hover:bg-amber-600 text-white",
                children: "Quero Vitalício",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "mt-4 flex items-start gap-2 text-[11px] text-muted-foreground bg-muted/30 rounded-lg p-3",
            children: [
              e.jsx(Ne, {
                className: "w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5",
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("strong", {
                    children: "Plano Vitalício se paga em ~24 meses.",
                  }),
                  " Depois disso, todo mês que passar é dinheiro economizado para sempre.",
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Fe = ({ subscriptionId: s }) => {
    const [i, r] = l.useState(!1),
      [t, g] = l.useState(!0),
      [w, f] = l.useState(!1);
    l.useEffect(() => {
      let a = !0;
      return (
        (async () => {
          const { data: o } = await h
            .from("user_subscriptions")
            .select("auto_renew")
            .eq("id", s)
            .maybeSingle();
          a && (r(!!o?.auto_renew), g(!1));
        })(),
        () => {
          a = !1;
        }
      );
    }, [s]);
    const m = async (a) => {
      f(!0);
      const { error: o } = await h
        .from("user_subscriptions")
        .update({ auto_renew: a })
        .eq("id", s);
      if ((f(!1), o)) {
        S.error("Não foi possível salvar. Tente novamente.");
        return;
      }
      r(a),
        S.success(
          a
            ? "Renovação automática ativada — cuidamos de tudo pra você."
            : "Renovação automática desativada."
        );
    };
    return e.jsx(u, {
      className:
        "border-primary/25 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent",
      children: e.jsxs(p, {
        className: "flex items-center gap-4 p-4 sm:p-5",
        children: [
          e.jsx("div", {
            className:
              "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/15",
            children: e.jsx(ce, { className: "h-5 w-5 text-primary" }),
          }),
          e.jsxs("div", {
            className: "min-w-0 flex-1",
            children: [
              e.jsxs("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                  e.jsx("p", {
                    className: "font-semibold",
                    children: "Renovação automática",
                  }),
                  i &&
                    e.jsx(E, {
                      variant: "outline",
                      className: "rounded-lg border-primary/40 text-primary",
                      children: "Ativa",
                    }),
                ],
              }),
              e.jsx("p", {
                className: "mt-0.5 text-xs text-muted-foreground",
                children:
                  "3 dias antes do vencimento abrimos sua renovação automaticamente e a equipe confirma o pagamento com você. Sem risco de bloqueio.",
              }),
            ],
          }),
          t
            ? e.jsx(ve, {
                className: "h-4 w-4 animate-spin text-muted-foreground",
              })
            : e.jsx(we, { checked: i, disabled: w, onCheckedChange: m }),
        ],
      }),
    });
  },
  Oe = {
    Mensal: [
      "OS, Orçamentos e Garantias ilimitados",
      "Catálogo Virtual + PDV completo",
      "Fiado, Promissórias e Financeiro",
      "Assistente IA + Relatórios",
      "Suporte via WhatsApp",
    ],
    Anual: [
      "Todos os recursos do plano Mensal",
      "Economia de até 16% no ano",
      "Backups automáticos prioritários",
      "Suporte prioritário no WhatsApp",
      "Acesso antecipado a novidades",
    ],
    Vitalício: [
      "Acesso vitalício ao Tech OS PRO",
      "Todos os módulos para sempre",
      "IA ilimitada para análises e checklists",
      "Suporte VIP exclusivo",
      "Atualizações garantidas",
    ],
    "Teste Grátis": [
      "Acesso completo por 5 dias",
      "Sem necessidade de cartão",
      "Cancele quando quiser",
    ],
  },
  He = () => {
    const { subscription: s, loading: i, isExpired: r } = ye(),
      { user: t } = de(),
      [g, w] = ke(),
      [f, m] = l.useState(!1),
      [a, o] = l.useState(!1),
      [j, y] = l.useState(!1),
      [P, C] = l.useState(null),
      [L, R] = l.useState("brasil"),
      [k, z] = l.useState([]),
      [N, ue] = l.useState(null),
      [A, H] = l.useState(null);
    l.useEffect(() => {
      t &&
        h
          .from("user_multi_plans")
          .select("*, multi_user_plans(*)")
          .eq("user_id", t.id)
          .eq("is_active", !0)
          .maybeSingle()
          .then(({ data: c }) => ue(c));
    }, [t]),
      l.useEffect(() => {
        if (!t) return;
        const c = async () => {
          const { data: x } = await h
            .from("pending_purchases")
            .select("id, status, created_at, plan_id, plans(name)")
            .eq("user_id", t.id)
            .eq("purchase_type", "renewal")
            .order("created_at", { ascending: !1 })
            .limit(1)
            .maybeSingle();
          H(
            x
              ? {
                  id: x.id,
                  status: x.status,
                  created_at: x.created_at,
                  plan_id: x.plan_id,
                  plan_name: x.plans?.name,
                }
              : null
          );
        };
        c();
        const n = h
          .channel(`pending_renewals_${t.id}`)
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "pending_purchases",
              filter: `user_id=eq.${t.id}`,
            },
            () => c()
          )
          .subscribe();
        return () => {
          h.removeChannel(n);
        };
      }, [t]),
      l.useEffect(() => {
        g.get("renew") === "1" &&
          s &&
          !i &&
          (B(), g.delete("renew"), w(g, { replace: !0 }));
      }, [s, i]);
    const pe = async () => {
        const { data: c, error: n } = await h
          .from("plans")
          .select("*")
          .eq("is_active", !0)
          .order("price", { ascending: !0 });
        if (n) throw n;
        return (c || []).filter(
          (x) => x.name !== "Teste Grátis" && x.price > 0
        );
      },
      _ = async () => {
        try {
          const c = await pe();
          z(c), m(!0);
        } catch {
          S.error("Erro ao carregar planos. Tente novamente.");
        }
      },
      B = async () => {
        if (!s) return;
        if (s.plan?.name === "Teste Grátis" || !s.plan?.price) {
          await _();
          return;
        }
        try {
          const { data: n, error: x } = await h
            .from("plans")
            .select("*")
            .eq("id", s.plan_id)
            .maybeSingle();
          if (x || !n || n.name === "Teste Grátis" || !n.price) {
            await _();
            return;
          }
          C({
            id: n.id,
            name: n.name,
            price: n.price,
            duration_days: n.duration_days,
            features: [],
          }),
            R("brasil"),
            o(!0);
        } catch {
          S.error("Erro ao iniciar renovação. Tente novamente.");
        }
      },
      U = (c, n) => {
        C(c), R(n), m(!1), o(!0);
      },
      W = async (c) => {
        try {
          const { data: n, error: x } = await h
            .from("plans")
            .select("*")
            .eq("name", c)
            .maybeSingle();
          if (x || !n) {
            await _();
            return;
          }
          C({
            id: n.id,
            name: n.name,
            price: n.price,
            duration_days: n.duration_days,
            features: [],
          }),
            R("brasil"),
            o(!0);
        } catch {
          await _();
        }
      },
      Y = () => {
        o(!1), y(!0);
      },
      Q = () => {
        y(!1), C(null);
      };
    if (i)
      return e.jsx(u, {
        className: "bg-card border-border/40",
        children: e.jsx(p, {
          className: "py-16",
          children: e.jsxs("div", {
            className: "flex flex-col items-center justify-center gap-3",
            children: [
              e.jsx("div", {
                className:
                  "w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin",
              }),
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Carregando seu plano...",
              }),
            ],
          }),
        }),
      });
    if (!s)
      return e.jsxs(e.Fragment, {
        children: [
          e.jsx(u, {
            className: "bg-card border-border/40",
            children: e.jsxs(p, {
              className: "py-16 text-center space-y-4",
              children: [
                e.jsx("div", {
                  className:
                    "w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center",
                  children: e.jsx(ee, {
                    className: "w-8 h-8 text-muted-foreground",
                  }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "Você ainda não possui um plano ativo",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mt-1",
                      children:
                        "Escolha um plano para liberar todos os recursos do Tech OS PRO.",
                    }),
                  ],
                }),
                e.jsxs(b, {
                  onClick: _,
                  className: "bg-primary hover:bg-primary/90",
                  children: [
                    e.jsx(G, { className: "w-4 h-4 mr-2" }),
                    "Escolher um Plano",
                  ],
                }),
              ],
            }),
          }),
          e.jsx(se, {
            open: f,
            plans: k,
            onSelectPlan: U,
            onClose: () => m(!1),
          }),
          P &&
            t &&
            e.jsx(ae, {
              open: a,
              plan: P,
              userId: t.id,
              userName: t.user_metadata?.name || "",
              userEmail: t.email || "",
              initialRegion: L,
              onBack: () => o(!1),
              onComplete: Y,
            }),
          e.jsx(te, { open: j, onClose: Q }),
        ],
      });
    const X = new Date(s.expiration_date),
      M = Math.max(0, _e(X, new Date())),
      v = s.plan.name === "Teste Grátis" || s.plan.price === 0,
      d = s.plan.name === "Vitalício" || s.plan.duration_days >= 3650,
      Z = s.plan.duration_days || 30,
      he = Math.max(0, Z - M),
      J = d ? 0 : Math.min(100, Math.round((he / Z) * 100));
    let D = "Ativo",
      T = "from-primary/15 via-primary/5 to-transparent",
      V = e.jsx(le, { className: "w-5 h-5 text-primary" }),
      $ = "text-primary";
    r
      ? ((D = "Expirado"),
        (T = "from-destructive/20 via-destructive/5 to-transparent"),
        (V = e.jsx($e, { className: "w-5 h-5 text-destructive" })),
        ($ = "text-destructive"))
      : d
      ? ((D = "Vitalício"),
        (T = "from-yellow-500/20 via-amber-500/10 to-transparent"),
        (V = e.jsx(ne, { className: "w-5 h-5 text-yellow-600" })),
        ($ = "text-yellow-600"))
      : v
      ? ((D = "Em Teste"),
        (T = "from-green-500/15 via-green-500/5 to-transparent"),
        (V = e.jsx(re, { className: "w-5 h-5 text-green-600" })),
        ($ = "text-green-600"))
      : M <= 5 &&
        ((D = "Expira em breve"),
        (T = "from-orange-500/20 via-orange-500/5 to-transparent"),
        (V = e.jsx(Ee, { className: "w-5 h-5 text-orange-500" })),
        ($ = "text-orange-500"));
    const ge = Oe[s.plan.name] || [
      "Acesso completo ao sistema",
      "Suporte via WhatsApp",
      "Atualizações inclusas",
    ];
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "space-y-4 sm:space-y-6",
          children: [
            e.jsx(Se, { variant: "highlight" }),
            e.jsx(Pe, {}),
            e.jsx(Ie, {
              isLifetime: d,
              isFreeTrial: v,
              isExpired: r,
              daysRemaining: M,
              currentPlanName: s.plan.name,
              onUpgradeLifetime: () => W("Vitalício"),
              onRenew: B,
            }),
            A &&
              A.status === "pending" &&
              e.jsx(u, {
                className:
                  "border-orange-500/40 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent overflow-hidden",
                children: e.jsx(p, {
                  className: "p-4 sm:p-5",
                  children: e.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0",
                        children: e.jsx(Be, {
                          className: "w-5 h-5 text-orange-500 animate-pulse",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("p", {
                            className: "font-semibold text-sm sm:text-base",
                            children: "Sua renovação está em análise",
                          }),
                          e.jsxs("p", {
                            className:
                              "text-xs sm:text-sm text-muted-foreground mt-1",
                            children: [
                              "Plano ",
                              e.jsx("strong", {
                                children: A.plan_name || "selecionado",
                              }),
                              " · Solicitado em",
                              " ",
                              F(
                                new Date(A.created_at),
                                "dd/MM/yyyy 'às' HH:mm",
                                { locale: O }
                              ),
                              ". Para agilizar a aprovação, envie o comprovante pelo WhatsApp",
                              " ",
                              e.jsx("strong", {
                                className: "text-green-600",
                                children: "(18) 99779-8619",
                              }),
                              ".",
                            ],
                          }),
                        ],
                      }),
                      e.jsx(E, {
                        variant: "secondary",
                        className:
                          "bg-orange-500/20 text-orange-600 border-orange-500/30 hidden sm:inline-flex",
                        children: "Pendente",
                      }),
                    ],
                  }),
                }),
              }),
            e.jsxs(u, {
              className: `relative overflow-hidden border-border/40 bg-gradient-to-br ${T}`,
              children: [
                e.jsx("div", {
                  className:
                    "absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none",
                }),
                e.jsx("div", {
                  className:
                    "absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none",
                }),
                e.jsxs(p, {
                  className: "relative p-5 sm:p-7 space-y-6",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-start justify-between gap-3 flex-wrap",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3 min-w-0",
                          children: [
                            e.jsx("div", {
                              className: `w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                                d
                                  ? "bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg shadow-yellow-500/30"
                                  : v
                                  ? "bg-green-500/20"
                                  : "bg-primary/20"
                              }`,
                              children: d
                                ? e.jsx(q, {
                                    className:
                                      "w-6 h-6 sm:w-7 sm:h-7 text-white",
                                  })
                                : v
                                ? e.jsx(re, {
                                    className:
                                      "w-6 h-6 sm:w-7 sm:h-7 text-green-600",
                                  })
                                : e.jsx(ee, {
                                    className:
                                      "w-6 h-6 sm:w-7 sm:h-7 text-primary",
                                  }),
                            }),
                            e.jsxs("div", {
                              className: "min-w-0",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-xs uppercase tracking-wider text-muted-foreground font-medium",
                                  children: "Plano atual",
                                }),
                                e.jsx("h2", {
                                  className:
                                    "text-xl sm:text-2xl font-bold truncate",
                                  children: s.plan.name,
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2 mt-0.5",
                                  children: [
                                    V,
                                    e.jsx("span", {
                                      className: `text-sm font-semibold ${$}`,
                                      children: D,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "text-right",
                          children: [
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: d ? "Investimento único" : "Valor",
                            }),
                            e.jsx("p", {
                              className:
                                "text-2xl sm:text-3xl font-bold text-primary leading-tight",
                              children: v
                                ? "Grátis"
                                : `R$ ${s.plan.price.toFixed(2)}`,
                            }),
                            !v &&
                              !d &&
                              e.jsxs("p", {
                                className:
                                  "text-[10px] sm:text-xs text-muted-foreground",
                                children: [
                                  "a cada ",
                                  s.plan.duration_days,
                                  " dias",
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    !d &&
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between text-xs",
                            children: [
                              e.jsxs("span", {
                                className:
                                  "text-muted-foreground flex items-center gap-1.5",
                                children: [
                                  e.jsx(ie, { className: "w-3.5 h-3.5" }),
                                  r
                                    ? "Plano expirado"
                                    : `${M} ${
                                        M === 1
                                          ? "dia restante"
                                          : "dias restantes"
                                      }`,
                                ],
                              }),
                              e.jsxs("span", {
                                className: `font-semibold ${$}`,
                                children: [J, "% utilizado"],
                              }),
                            ],
                          }),
                          e.jsx(oe, {
                            value: J,
                            className: `h-2 ${
                              r
                                ? "[&>div]:bg-destructive"
                                : M <= 5
                                ? "[&>div]:bg-orange-500"
                                : ""
                            }`,
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex items-start gap-3 p-3 rounded-xl bg-background/60 border border-border/40",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                              children: e.jsx(me, {
                                className: "w-4 h-4 text-primary",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: d ? "Ativado em" : "Vencimento",
                                }),
                                e.jsx("p", {
                                  className: "text-sm font-semibold truncate",
                                  children: d
                                    ? "Acesso permanente"
                                    : F(X, "dd 'de' MMM 'de' yyyy", {
                                        locale: O,
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-start gap-3 p-3 rounded-xl bg-background/60 border border-border/40",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                              children: d
                                ? e.jsx(ne, {
                                    className: "w-4 h-4 text-primary",
                                  })
                                : e.jsx(Ce, {
                                    className: "w-4 h-4 text-primary",
                                  }),
                            }),
                            e.jsxs("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: "Duração",
                                }),
                                e.jsx("p", {
                                  className: "text-sm font-semibold truncate",
                                  children: d
                                    ? "Para sempre"
                                    : `${s.plan.duration_days} dias`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx(Re, { className: "w-4 h-4 text-primary" }),
                            e.jsx("p", {
                              className: "text-sm font-semibold",
                              children: "O que está incluso",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                          children: ge.map((c, n) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-start gap-2 text-xs sm:text-sm",
                                children: [
                                  e.jsx(Ae, {
                                    className:
                                      "w-4 h-4 text-primary mt-0.5 flex-shrink-0",
                                  }),
                                  e.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: c,
                                  }),
                                ],
                              },
                              n
                            )
                          ),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex flex-col sm:flex-row gap-2 pt-2",
                      children: d
                        ? e.jsxs("div", {
                            className:
                              "flex-1 flex items-center gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30",
                            children: [
                              e.jsx(q, {
                                className:
                                  "w-5 h-5 text-yellow-600 flex-shrink-0",
                              }),
                              e.jsx("p", {
                                className: "text-xs sm:text-sm font-medium",
                                children:
                                  "Você possui acesso vitalício. Aproveite para sempre! 👑",
                              }),
                            ],
                          })
                        : v
                        ? e.jsxs(b, {
                            onClick: _,
                            size: "lg",
                            className:
                              "flex-1 bg-green-500 hover:bg-green-600 text-white shadow-md",
                            children: [
                              e.jsx(G, { className: "w-4 h-4 mr-2" }),
                              "Escolher um Plano Pago",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs(b, {
                                onClick: B,
                                size: "lg",
                                className:
                                  "flex-1 bg-primary hover:bg-primary/90 shadow-md",
                                disabled: A?.status === "pending",
                                children: [
                                  e.jsx(ce, { className: "w-4 h-4 mr-2" }),
                                  A?.status === "pending"
                                    ? "Renovação em análise"
                                    : "Renovar Agora",
                                ],
                              }),
                              e.jsxs(b, {
                                onClick: _,
                                variant: "outline",
                                size: "lg",
                                className: "flex-1",
                                children: [
                                  e.jsx(ze, { className: "w-4 h-4 mr-2" }),
                                  "Mudar de Plano",
                                ],
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
            !d && !v && e.jsx(Fe, { subscriptionId: s.id }),
            !d && e.jsx(Ge, { onChoose: W }),
            e.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
              children: [
                e.jsx(u, {
                  className: "border-border/40 bg-card/50",
                  children: e.jsxs(p, {
                    className: "p-4 flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center",
                        children: e.jsx(xe, {
                          className: "w-5 h-5 text-blue-500",
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] uppercase tracking-wider text-muted-foreground",
                            children: "Pagamento",
                          }),
                          e.jsx("p", {
                            className: "text-sm font-semibold",
                            children: "PIX / Revolut",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(u, {
                  className: "border-border/40 bg-card/50",
                  children: e.jsxs(p, {
                    className: "p-4 flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center",
                        children: e.jsx(le, {
                          className: "w-5 h-5 text-green-500",
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] uppercase tracking-wider text-muted-foreground",
                            children: "Ativação",
                          }),
                          e.jsx("p", {
                            className: "text-sm font-semibold",
                            children: "Em até 24h",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(u, {
                  className: "border-border/40 bg-card/50",
                  children: e.jsxs(p, {
                    className: "p-4 flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center",
                        children: e.jsx(Me, {
                          className: "w-5 h-5 text-purple-500",
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] uppercase tracking-wider text-muted-foreground",
                            children: "Suporte",
                          }),
                          e.jsx("p", {
                            className: "text-sm font-semibold",
                            children: "WhatsApp 7d/sem",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            N &&
              N.multi_user_plans &&
              e.jsx(u, {
                className:
                  "bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border-yellow-500/20",
                children: e.jsx(p, {
                  className: "p-4 sm:p-5",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3 min-w-0",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-11 h-11 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0",
                            children: e.jsx(q, {
                              className: "w-5 h-5 text-yellow-600",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[10px] uppercase tracking-wider text-yellow-700/80 font-medium",
                                children: "Plano multiusuário",
                              }),
                              e.jsx("h3", {
                                className: "font-bold truncate",
                                children: N.multi_user_plans.name,
                              }),
                              e.jsxs("p", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                  "Até ",
                                  N.multi_user_plans.max_employees,
                                  " ",
                                  "funcionário",
                                  N.multi_user_plans.max_employees > 1
                                    ? "s"
                                    : "",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs(E, {
                        className:
                          "bg-yellow-500/20 text-yellow-600 border-yellow-500/30",
                        children: [
                          "R$ ",
                          N.multi_user_plans.price.toFixed(2),
                          "/mês",
                        ],
                      }),
                    ],
                  }),
                }),
              }),
          ],
        }),
        e.jsx(se, { open: f, plans: k, onSelectPlan: U, onClose: () => m(!1) }),
        P &&
          t &&
          e.jsx(ae, {
            open: a,
            plan: P,
            userId: t.id,
            userName: t.user_metadata?.name || "",
            userEmail: t.email || "",
            initialRegion: L,
            onBack: () => {
              o(!1), k.length > 0 && m(!0);
            },
            onComplete: Y,
          }),
        e.jsx(te, { open: j, onClose: Q }),
      ],
    });
  },
  Ue = () => {
    const { user: s } = de(),
      [i, r] = l.useState([]),
      [t, g] = l.useState(!0);
    l.useEffect(() => {
      if (!s) return;
      const a = async () => {
        try {
          const { data: j, error: y } = await h
            .from("payments")
            .select("*")
            .eq("user_id", s.id)
            .order("created_at", { ascending: !1 });
          if (y) throw y;
          r(j || []);
        } catch {
          S.error("Erro ao carregar histórico de pagamentos");
        } finally {
          g(!1);
        }
      };
      a();
      const o = h
        .channel("payment_changes")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "payments",
            filter: `user_id=eq.${s.id}`,
          },
          () => {
            a();
          }
        )
        .subscribe();
      return () => {
        h.removeChannel(o);
      };
    }, [s]);
    const w = async (a) => {
        try {
          S.success("Download iniciado");
        } catch {
          S.error("Erro ao baixar comprovante");
        }
      },
      f = (a) => {
        switch (a) {
          case "approved":
            return "bg-green-500/20 text-green-500";
          case "pending":
            return "bg-yellow-500/20 text-yellow-500";
          case "rejected":
            return "bg-red-500/20 text-red-500";
          default:
            return "bg-muted text-muted-foreground";
        }
      },
      m = (a) => {
        switch (a) {
          case "approved":
            return "Aprovado";
          case "pending":
            return "Pendente";
          case "rejected":
            return "Rejeitado";
          default:
            return a;
        }
      };
    return t
      ? e.jsx(u, {
          className: "bg-card border-border/40",
          children: e.jsx(p, {
            className: "py-12",
            children: e.jsx("div", {
              className: "flex items-center justify-center",
              children: e.jsx("div", {
                className:
                  "w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin",
              }),
            }),
          }),
        })
      : e.jsxs(u, {
          className: "bg-card border-border/40",
          children: [
            e.jsx(De, {
              children: e.jsxs(Te, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(xe, { className: "w-5 h-5" }),
                  "Histórico de Pagamentos",
                ],
              }),
            }),
            e.jsx(p, {
              children:
                i.length === 0
                  ? e.jsx("div", {
                      className: "text-center py-8 text-muted-foreground",
                      children: "Nenhum pagamento registrado",
                    })
                  : e.jsx("div", {
                      className: "space-y-4",
                      children: i.map((a) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/40",
                            children: [
                              e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3 mb-2",
                                    children: [
                                      e.jsx(me, {
                                        className:
                                          "w-4 h-4 text-muted-foreground",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: F(
                                          new Date(a.created_at),
                                          "dd 'de' MMMM 'de' yyyy",
                                          { locale: O }
                                        ),
                                      }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className: "font-medium mb-1",
                                    children: a.description || "Pagamento",
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsxs("span", {
                                        className:
                                          "text-lg font-bold text-primary",
                                        children: ["R$ ", a.amount.toFixed(2)],
                                      }),
                                      e.jsx(E, {
                                        className: `${f(a.status)} border-0`,
                                        children: m(a.status),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs(b, {
                                variant: "outline",
                                size: "sm",
                                onClick: () => w(a.id),
                                className: "gap-2",
                                children: [
                                  e.jsx(Ve, { className: "w-4 h-4" }),
                                  "Comprovante",
                                ],
                              }),
                            ],
                          },
                          a.id
                        )
                      ),
                    }),
            }),
          ],
        });
  },
  Qe = () => (
    qe(),
    e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "mb-6",
          children: [
            e.jsx("h1", {
              className: "text-3xl font-bold mb-2",
              children: "Meu Plano",
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: "Gerencie sua assinatura e pagamentos",
            }),
          ],
        }),
        e.jsx(Le, {}),
        e.jsxs("div", {
          className: "space-y-6",
          children: [e.jsx(He, {}), e.jsx(Ue, {})],
        }),
      ],
    })
  );
export { Qe as default };
