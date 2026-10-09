import {
  W as K,
  bG as Ne,
  r as m,
  w as y,
  bU as V,
  j as e,
  s as ve,
  G as u,
  a1 as p,
  ba as G,
  f as _,
  O as q,
  bY as Q,
  by as U,
  fE as we,
  ae as ye,
  dM as ke,
  df as _e,
  ct as k,
  K as Ce,
  cs as Se,
  bz as W,
  bI as C,
  b3 as S,
  dg as Pe,
  bT as Z,
  h as ee,
  cH as De,
  Y as Ie,
  dh as Te,
  b4 as Re,
  B as X,
  k as Y,
  bJ as H,
  bl as Ae,
  N as Be,
  bQ as Le,
  D as ze,
  c as Ee,
  a_ as Oe,
  d as $e,
  cw as se,
  m as Fe,
  bH as Me,
} from "./index-V8ZHCWL2.js";
import { T as Ve } from "./ThemeToggleButton-DN8EhluE.js";
import { S as J } from "./scale-_P6jyxG7.js";
import "./sun-P4wkve1z.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qe = K("BadgeAlert", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336",
    },
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P = K("Landmark", [
    ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
    ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
    ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
    ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
    ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
    ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }],
  ]),
  D = {
    pending: {
      label: "Pendente",
      color: "bg-amber-500",
      bgLight: "bg-amber-50 dark:bg-amber-950/30",
      textColor: "text-amber-700 dark:text-amber-400",
      borderColor: "border-amber-200 dark:border-amber-800",
      icon: ee,
    },
    paid: {
      label: "Paga",
      color: "bg-emerald-500",
      bgLight: "bg-emerald-50 dark:bg-emerald-950/30",
      textColor: "text-emerald-700 dark:text-emerald-400",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      icon: Z,
    },
    overdue: {
      label: "Vencida",
      color: "bg-red-500",
      bgLight: "bg-red-50 dark:bg-red-950/30",
      textColor: "text-red-700 dark:text-red-400",
      borderColor: "border-red-200 dark:border-red-800",
      icon: G,
    },
    quitado: {
      label: "Quitado",
      color: "bg-blue-500",
      bgLight: "bg-blue-50 dark:bg-blue-950/30",
      textColor: "text-blue-700 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800",
      icon: se,
    },
  };
function Ye() {
  const { accessToken: j } = Ne(),
    [a, B] = m.useState(null),
    [h, te] = m.useState([]),
    [t, ae] = m.useState({}),
    [re, I] = m.useState(!0),
    [le, L] = m.useState(!1),
    [g, de] = m.useState(null),
    [z, oe] = m.useState(""),
    [ne, T] = m.useState(!1),
    [E, ce] = m.useState(null);
  m.useEffect(() => {
    j && O();
  }, [j]),
    m.useEffect(() => {
      if (!E) return;
      const s = y
        .channel("promissory_public_changes")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "promissory_notes" },
          () => O()
        )
        .subscribe();
      return () => {
        y.removeChannel(s);
      };
    }, [E]);
  const O = async () => {
      if (j) {
        I(!0);
        try {
          const s = j.length <= 8,
            { data: r, error: i } = await y
              .from("promissory_notes")
              .select("*, clients(name, phone, cpf)")
              .is("parent_note_id", null);
          if (i) throw i;
          const l = (r || []).find((n) =>
            s
              ? n.access_token?.toLowerCase().startsWith(j.toLowerCase())
              : n.access_token === j
          );
          if (!l) {
            B(null), I(!1);
            return;
          }
          B(l), ce(l.access_token || "");
          const [d, x] = await Promise.all([
            y
              .from("promissory_notes")
              .select(
                "id, note_number, proposal_number, due_date, installment_number, installments, installment_value, status, paid_at, paid_amount"
              )
              .eq("parent_note_id", l.id)
              .order("installment_number", { ascending: !0 }),
            y
              .from("user_settings")
              .select(
                "company_name, company_phone, company_email, company_address, company_logo, company_cnpj, pix_key, receiver_name, bank, pix_qrcode, fine_rate, daily_interest_rate"
              )
              .eq("user_id", l.user_id)
              .maybeSingle(),
          ]);
          if (d.error) throw d.error;
          const o = new Date(),
            w = `${o.getFullYear()}-${String(o.getMonth() + 1).padStart(
              2,
              "0"
            )}-${String(o.getDate()).padStart(2, "0")}`,
            b = (d.data || []).map((n) => ({
              ...n,
              status:
                n.status !== "paid" && n.due_date < w ? "overdue" : n.status,
            }));
          te(b), x.data && ae(x.data);
        } catch {
          V.error("Erro ao carregar dados");
        } finally {
          I(!1);
        }
      }
    },
    R = (s) => {
      const r = s.installment_value,
        [i, l, d] = s.due_date.split("-").map(Number),
        x = new Date(i, l - 1, d),
        o = new Date(),
        b =
          new Date(o.getFullYear(), o.getMonth(), o.getDate()).getTime() -
          x.getTime(),
        n = Math.max(0, Math.floor(b / (1e3 * 60 * 60 * 24)));
      if (n === 0) return r;
      const ge = t.fine_rate || 2,
        be = t.daily_interest_rate || 0.033,
        je = r * (ge / 100),
        fe = r * (be / 100) * n;
      return r + je + fe;
    },
    ie = (s) => {
      const [r, i, l] = s.split("-").map(Number),
        d = new Date(r, i - 1, l),
        x = new Date(),
        o = new Date(x.getFullYear(), x.getMonth(), x.getDate());
      return Math.max(
        0,
        Math.floor((o.getTime() - d.getTime()) / (1e3 * 60 * 60 * 24))
      );
    },
    me = async (s) => {
      de(s), L(!0), T(!1);
      const r = t.pix_key || a?.pix_key || "";
      if (r)
        try {
          const i = await Me.toDataURL(r, {
            width: 256,
            margin: 2,
            color: { dark: "#000000", light: "#ffffff" },
          });
          oe(i);
        } catch {}
    },
    xe = async () => {
      const s = t.pix_key || a?.pix_key || "";
      s &&
        (await navigator.clipboard.writeText(s),
        T(!0),
        V.success("Chave PIX copiada!"),
        setTimeout(() => T(!1), 3e3));
    },
    c = (s) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(s),
    $ = h.filter((s) => s.status === "paid").length,
    N = h.length,
    F = N > 0 ? ($ / N) * 100 : 0,
    ue = h
      .filter((s) => s.status === "paid")
      .reduce((s, r) => s + (r.paid_amount || r.installment_value), 0),
    pe = h
      .filter((s) => s.status !== "paid")
      .reduce((s, r) => s + r.installment_value, 0),
    A = h.filter((s) => s.status === "overdue").length,
    M = h.filter((s) => s.status === "overdue").reduce((s, r) => s + R(r), 0);
  if (re)
    return e.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-neutral-900 flex items-center justify-center",
      children: e.jsxs("div", {
        className: "text-center",
        children: [
          e.jsx(ve, {
            className: "w-12 h-12 animate-spin text-blue-600 mx-auto mb-4",
          }),
          e.jsx("p", {
            className: "text-muted-foreground",
            children: "Consultando dados bancários...",
          }),
        ],
      }),
    });
  if (!a)
    return e.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-zinc-950 dark:to-neutral-900 flex items-center justify-center p-4",
      children: e.jsx(u, {
        className: "max-w-md w-full shadow-xl border-border",
        children: e.jsxs(p, {
          className: "p-8 text-center",
          children: [
            e.jsx("div", {
              className:
                "w-16 h-16 bg-red-100 dark:bg-red-950/30 rounded-full flex items-center justify-center mx-auto mb-4",
              children: e.jsx(G, { className: "w-8 h-8 text-red-500" }),
            }),
            e.jsx("h2", {
              className: "text-xl font-bold mb-2 text-foreground",
              children: "Documento não encontrado",
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children: "O link de consulta é inválido ou expirou.",
            }),
          ],
        }),
      }),
    });
  const v = D[a.status] || D.pending,
    he = v.icon,
    f = A > 0;
  return e.jsxs("div", {
    className:
      "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-zinc-950 dark:to-neutral-900",
    children: [
      e.jsx("header", {
        className:
          "bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white border-b-4 border-blue-500 sticky top-0 z-10",
        children: e.jsx("div", {
          className: "max-w-5xl mx-auto px-4 py-4",
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  t.company_logo
                    ? e.jsx("img", {
                        src: t.company_logo,
                        alt: t.company_name || "Logo",
                        className:
                          "h-12 w-auto object-contain bg-white rounded-lg p-1",
                      })
                    : e.jsx("div", {
                        className:
                          "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center",
                        children: e.jsx(P, { className: "w-6 h-6 text-white" }),
                      }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h1", {
                        className: "font-bold text-lg",
                        children: t.company_name || "Sistema Financeiro",
                      }),
                      e.jsxs("p", {
                        className:
                          "text-blue-300 text-xs flex items-center gap-1",
                        children: [
                          e.jsx(_, { className: "w-3 h-3" }),
                          "Central de Cobranças • Sincronizado com Instituições Financeiras",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  e.jsxs("div", {
                    className:
                      "hidden sm:flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5",
                    children: [
                      e.jsx(q, { className: "w-3.5 h-3.5 text-emerald-400" }),
                      e.jsx("span", {
                        className: "text-xs text-emerald-300",
                        children: "SSL Seguro",
                      }),
                    ],
                  }),
                  e.jsx(Ve, {}),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsx("div", {
        className: "bg-slate-800 dark:bg-slate-900 border-b border-slate-700",
        children: e.jsxs("div", {
          className:
            "max-w-5xl mx-auto px-4 py-2 flex items-center justify-between",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 text-xs text-slate-400",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-2 h-2 bg-emerald-500 rounded-full animate-pulse",
                    }),
                    e.jsx("span", {
                      children: "Dados sincronizados em tempo real",
                    }),
                  ],
                }),
                e.jsx("span", { className: "text-slate-600", children: "|" }),
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx(P, { className: "w-3 h-3" }),
                    e.jsx("span", {
                      children: "Integrado ao sistema bancário",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex items-center gap-4 text-xs text-slate-500",
              children: e.jsxs("span", {
                children: ["Protocolo: ", a.note_number],
              }),
            }),
          ],
        }),
      }),
      e.jsxs("main", {
        className: "max-w-5xl mx-auto px-4 py-6 space-y-6",
        children: [
          f &&
            e.jsx("div", {
              className:
                "bg-gradient-to-r from-red-600 to-red-700 dark:from-red-900 dark:to-red-950 rounded-xl p-5 text-white shadow-2xl border border-red-500/50 animate-pulse-slow",
              children: e.jsxs("div", {
                className: "flex items-start gap-4",
                children: [
                  e.jsx("div", {
                    className:
                      "w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0",
                    children: e.jsx(Q, { className: "w-8 h-8" }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1",
                    children: [
                      e.jsxs("h3", {
                        className: "font-bold text-lg flex items-center gap-2",
                        children: [
                          e.jsx(U, { className: "w-5 h-5" }),
                          "AVISO IMPORTANTE — Risco de Negativação",
                        ],
                      }),
                      e.jsxs("p", {
                        className: "text-red-100 text-sm mt-2 leading-relaxed",
                        children: [
                          "Prezado(a) ",
                          e.jsx("strong", { children: a.clients?.name }),
                          ", identificamos ",
                          e.jsxs("strong", {
                            children: [
                              A,
                              " ",
                              A === 1 ? "parcela vencida" : "parcelas vencidas",
                            ],
                          }),
                          " em seu nome, totalizando ",
                          e.jsx("strong", { children: c(M) }),
                          " (com multa e juros). Em caso de não regularização, seu nome poderá ser incluído nos órgãos de proteção ao crédito (",
                          e.jsx("strong", {
                            children: "Serasa, SPC, Boa Vista SCPC",
                          }),
                          "), resultando em:",
                        ],
                      }),
                      e.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4",
                        children: [
                          e.jsxs("div", {
                            className: "bg-white/10 rounded-lg p-3 text-center",
                            children: [
                              e.jsx(we, { className: "w-5 h-5 mx-auto mb-1" }),
                              e.jsx("p", {
                                className: "text-xs font-medium",
                                children: "Restrição de Crédito",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] text-red-200",
                                children:
                                  "Impossibilidade de obter financiamentos",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "bg-white/10 rounded-lg p-3 text-center",
                            children: [
                              e.jsx(ye, {
                                className: "w-5 h-5 mx-auto mb-1 rotate-180",
                              }),
                              e.jsx("p", {
                                className: "text-xs font-medium",
                                children: "Perda de Score",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] text-red-200",
                                children: "Pontuação de crédito reduzida",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "bg-white/10 rounded-lg p-3 text-center",
                            children: [
                              e.jsx(J, { className: "w-5 h-5 mx-auto mb-1" }),
                              e.jsx("p", {
                                className: "text-xs font-medium",
                                children: "Ação Judicial",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] text-red-200",
                                children: "Cobrança via protesto cartorário",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("p", {
                        className:
                          "text-xs text-red-200 mt-3 flex items-center gap-1",
                        children: [
                          e.jsx(ke, { className: "w-3 h-3" }),
                          "Regularize suas pendências para evitar restrições. Entre em contato conosco para negociar.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          e.jsx(u, {
            className:
              "shadow-xl border-l-4 border-l-blue-600 bg-card/95 backdrop-blur",
            children: e.jsxs(p, {
              className: "p-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-4",
                  children: [
                    e.jsx(_e, { className: "w-5 h-5 text-blue-600" }),
                    e.jsx("h3", {
                      className:
                        "font-bold text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400",
                      children: "Título de Cobrança — Nota Promissória",
                    }),
                  ],
                }),
                e.jsx(k, { className: "mb-4" }),
                e.jsxs("div", {
                  className:
                    "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6",
                  children: [
                    e.jsxs("div", {
                      className: "flex-1 space-y-4",
                      children: [
                        e.jsxs("div", {
                          className: "bg-muted/50 rounded-xl p-4 border",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2",
                              children: "Sacado / Devedor",
                            }),
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsxs("p", {
                                  className:
                                    "font-bold text-lg text-foreground flex items-center gap-2",
                                  children: [
                                    e.jsx(Ce, {
                                      className: "w-5 h-5 text-blue-500",
                                    }),
                                    a.clients?.name || "Não identificado",
                                  ],
                                }),
                                a.clients?.cpf &&
                                  e.jsxs("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                      "CPF/CNPJ: ",
                                      e.jsx("span", {
                                        className: "font-mono",
                                        children: Se(a.clients.cpf),
                                      }),
                                    ],
                                  }),
                                a.clients?.phone &&
                                  e.jsxs("p", {
                                    className:
                                      "text-sm text-muted-foreground flex items-center gap-1",
                                    children: [
                                      e.jsx(W, { className: "w-3 h-3" }),
                                      " ",
                                      a.clients.phone,
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                          children: [
                            e.jsxs("div", {
                              className: "bg-muted/30 rounded-lg p-3 border",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] uppercase tracking-wider text-muted-foreground mb-1",
                                  children: "Protocolo Nº",
                                }),
                                e.jsx("p", {
                                  className:
                                    "font-bold text-sm font-mono text-foreground",
                                  children: a.note_number,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "bg-muted/30 rounded-lg p-3 border",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] uppercase tracking-wider text-muted-foreground mb-1",
                                  children: "Proposta",
                                }),
                                e.jsx("p", {
                                  className:
                                    "font-bold text-sm font-mono text-foreground",
                                  children: a.proposal_number,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "bg-muted/30 rounded-lg p-3 border",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] uppercase tracking-wider text-muted-foreground mb-1",
                                  children: "Emissão",
                                }),
                                e.jsx("p", {
                                  className:
                                    "font-bold text-sm text-foreground",
                                  children: C(a.issue_date),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "bg-muted/30 rounded-lg p-3 border",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-[10px] uppercase tracking-wider text-muted-foreground mb-1",
                                  children: "Parcelas",
                                }),
                                e.jsxs("p", {
                                  className:
                                    "font-bold text-sm text-foreground",
                                  children: [a.installments || 1, "x"],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "lg:w-64 space-y-3",
                      children: [
                        e.jsxs("div", {
                          className:
                            "bg-gradient-to-br from-slate-900 to-blue-950 dark:from-slate-800 dark:to-blue-900 rounded-xl p-5 text-white text-center shadow-lg",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-blue-300 text-xs uppercase tracking-wider mb-1",
                              children: "Valor Total do Título",
                            }),
                            e.jsx("p", {
                              className: "text-3xl font-bold",
                              children: c(a.amount),
                            }),
                            e.jsx(k, { className: "my-3 bg-white/20" }),
                            e.jsxs(S, {
                              className: `${v.bgLight} ${v.textColor} ${v.borderColor} border px-3 py-1.5`,
                              children: [
                                e.jsx(he, { className: "w-4 h-4 mr-1.5" }),
                                v.label,
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "bg-muted/30 rounded-lg p-3 border text-center",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-[10px] uppercase tracking-wider text-muted-foreground mb-1",
                              children: "Cedente / Credor",
                            }),
                            e.jsx("p", {
                              className: "font-bold text-sm text-foreground",
                              children: t.company_name,
                            }),
                            t.company_cnpj &&
                              e.jsx("p", {
                                className:
                                  "text-xs text-muted-foreground font-mono",
                                children: t.company_cnpj,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                a.description &&
                  e.jsxs("div", {
                    className: "mt-4 pt-4 border-t border-border",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] uppercase tracking-wider text-muted-foreground mb-1",
                        children: "Descrição / Referência",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-foreground",
                        children: a.description,
                      }),
                    ],
                  }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-3",
            children: [
              e.jsx(u, {
                className:
                  "shadow-lg border-0 bg-gradient-to-br from-blue-600 to-blue-700 text-white",
                children: e.jsx(p, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-blue-200 text-[10px] uppercase tracking-wider",
                            children: "Valor Total",
                          }),
                          e.jsx("p", {
                            className: "text-xl font-bold mt-1",
                            children: c(a.amount),
                          }),
                        ],
                      }),
                      e.jsx(Pe, { className: "w-8 h-8 text-blue-300/50" }),
                    ],
                  }),
                }),
              }),
              e.jsx(u, {
                className:
                  "shadow-lg border-0 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white",
                children: e.jsx(p, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-emerald-200 text-[10px] uppercase tracking-wider",
                            children: "Total Pago",
                          }),
                          e.jsx("p", {
                            className: "text-xl font-bold mt-1",
                            children: c(ue),
                          }),
                        ],
                      }),
                      e.jsx(Z, { className: "w-8 h-8 text-emerald-300/50" }),
                    ],
                  }),
                }),
              }),
              e.jsx(u, {
                className:
                  "shadow-lg border-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white",
                children: e.jsx(p, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-amber-200 text-[10px] uppercase tracking-wider",
                            children: "Em Aberto",
                          }),
                          e.jsx("p", {
                            className: "text-xl font-bold mt-1",
                            children: c(pe),
                          }),
                        ],
                      }),
                      e.jsx(ee, { className: "w-8 h-8 text-amber-300/50" }),
                    ],
                  }),
                }),
              }),
              e.jsx(u, {
                className: `shadow-lg border-0 text-white ${
                  f
                    ? "bg-gradient-to-br from-red-600 to-red-700"
                    : "bg-gradient-to-br from-slate-600 to-slate-700"
                }`,
                children: e.jsx(p, {
                  className: "p-4",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: `text-[10px] uppercase tracking-wider ${
                              f ? "text-red-200" : "text-slate-300"
                            }`,
                            children: f ? "Em Atraso" : "Score",
                          }),
                          e.jsx("p", {
                            className: "text-xl font-bold mt-1",
                            children: f ? c(M) : "Regular",
                          }),
                        ],
                      }),
                      f
                        ? e.jsx(U, { className: "w-8 h-8 text-red-300/50" })
                        : e.jsx(_, { className: "w-8 h-8 text-slate-400/50" }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsx(u, {
            className: "shadow-lg border-border bg-card/95 backdrop-blur",
            children: e.jsxs(p, {
              className: "p-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between mb-3",
                  children: [
                    e.jsx("span", {
                      className: "text-sm font-medium text-foreground",
                      children: "Progresso do Pagamento",
                    }),
                    e.jsxs("span", {
                      className: "text-sm text-muted-foreground",
                      children: [$, " de ", N, " parcelas"],
                    }),
                  ],
                }),
                e.jsx(De, { value: F, className: "h-3" }),
                e.jsxs("p", {
                  className: "text-xs text-muted-foreground mt-2 text-center",
                  children: [F.toFixed(0), "% quitado"],
                }),
              ],
            }),
          }),
          e.jsxs(u, {
            className:
              "shadow-xl border-border bg-card/95 backdrop-blur overflow-hidden",
            children: [
              e.jsx(Ie, {
                className:
                  "bg-gradient-to-r from-slate-800 to-blue-900 dark:from-slate-900 dark:to-blue-950 text-white border-b-2 border-blue-500",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(Te, { className: "w-5 h-5" }),
                        e.jsx("h3", {
                          className:
                            "font-bold uppercase tracking-wider text-sm",
                          children: "Boletos / Parcelas Registradas",
                        }),
                      ],
                    }),
                    e.jsxs(S, {
                      variant: "outline",
                      className: "border-blue-400 text-blue-200 text-xs",
                      children: [N, " ", N === 1 ? "título" : "títulos"],
                    }),
                  ],
                }),
              }),
              e.jsx(p, {
                className: "p-0",
                children: e.jsx("div", {
                  className: "divide-y divide-border",
                  children: h.map((s) => {
                    const r = D[s.status] || D.pending,
                      i = r.icon,
                      l = s.status === "overdue",
                      d = s.status === "paid",
                      x = l ? R(s) : s.installment_value,
                      o = l ? ie(s.due_date) : 0,
                      w = a.amount / (a.installments || 1),
                      b = !d && s.installment_value > w + 0.01,
                      n = b ? s.installment_value - w : 0;
                    return e.jsx(
                      "div",
                      {
                        className: `p-4 sm:p-5 transition-colors ${
                          d
                            ? "bg-emerald-50/50 dark:bg-emerald-950/10"
                            : l
                            ? "bg-red-50/50 dark:bg-red-950/10"
                            : ""
                        }`,
                        children: e.jsxs("div", {
                          className:
                            "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-start gap-4",
                              children: [
                                e.jsx("div", {
                                  className: `w-12 h-12 rounded-xl flex items-center justify-center ${r.bgLight} border ${r.borderColor}`,
                                  children: e.jsx(i, {
                                    className: `w-6 h-6 ${r.textColor}`,
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 flex-wrap",
                                      children: [
                                        e.jsxs("span", {
                                          className:
                                            "font-bold text-foreground",
                                          children: [
                                            "Boleto ",
                                            s.installment_number,
                                            "/",
                                            s.installments,
                                          ],
                                        }),
                                        e.jsx(S, {
                                          variant: "outline",
                                          className: `${r.textColor} ${r.borderColor} text-xs`,
                                          children: r.label,
                                        }),
                                        b &&
                                          e.jsx(S, {
                                            variant: "outline",
                                            className:
                                              "text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 text-xs",
                                            children: "Valor Ajustado",
                                          }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 text-sm text-muted-foreground mt-1",
                                      children: [
                                        e.jsx(Re, { className: "w-3.5 h-3.5" }),
                                        e.jsxs("span", {
                                          children: [
                                            "Vencimento: ",
                                            C(s.due_date),
                                          ],
                                        }),
                                      ],
                                    }),
                                    b &&
                                      e.jsxs("p", {
                                        className:
                                          "text-xs text-blue-600 dark:text-blue-400 mt-1",
                                        children: [
                                          "📌 Inclui ",
                                          c(n),
                                          " de parcela anterior",
                                        ],
                                      }),
                                    l &&
                                      o > 0 &&
                                      e.jsxs("div", {
                                        className: "mt-2 space-y-1",
                                        children: [
                                          e.jsxs("p", {
                                            className:
                                              "text-xs text-red-600 dark:text-red-400 font-semibold",
                                            children: [
                                              "⚠️ ",
                                              o,
                                              " dias em atraso — Multa e juros aplicados conforme contrato",
                                            ],
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-[10px] text-red-500/80 dark:text-red-400/70",
                                            children:
                                              "⚖️ Sujeito a protesto e inclusão nos órgãos de proteção ao crédito (Serasa/SPC)",
                                          }),
                                        ],
                                      }),
                                    d &&
                                      s.paid_at &&
                                      e.jsxs("p", {
                                        className:
                                          "text-xs text-emerald-600 dark:text-emerald-400 mt-1",
                                        children: [
                                          "✓ Compensado em ",
                                          C(s.paid_at.split("T")[0]),
                                          s.paid_amount &&
                                            s.paid_amount <
                                              s.installment_value &&
                                            e.jsx("span", {
                                              className: "ml-1",
                                              children: "(pagamento parcial)",
                                            }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex flex-col sm:items-end gap-2",
                              children: [
                                e.jsxs("div", {
                                  className: "text-right",
                                  children: [
                                    l &&
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground line-through",
                                        children: c(s.installment_value),
                                      }),
                                    d &&
                                      s.paid_amount &&
                                      s.paid_amount !== s.installment_value &&
                                      e.jsxs("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: [
                                          "Valor original: ",
                                          c(s.installment_value),
                                        ],
                                      }),
                                    e.jsx("p", {
                                      className: `text-xl font-bold ${
                                        d
                                          ? "text-emerald-600 dark:text-emerald-400"
                                          : l
                                          ? "text-red-600 dark:text-red-400"
                                          : "text-foreground"
                                      }`,
                                      children: c(
                                        d
                                          ? s.paid_amount || s.installment_value
                                          : x
                                      ),
                                    }),
                                  ],
                                }),
                                !d &&
                                  e.jsxs(X, {
                                    onClick: () => me(s),
                                    className:
                                      "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg font-medium",
                                    children: [
                                      e.jsx(Y, { className: "w-4 h-4 mr-2" }),
                                      "Pagar Agora",
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      },
                      s.id
                    );
                  }),
                }),
              }),
            ],
          }),
          e.jsx(u, {
            className: "shadow-lg border-border bg-card/95 backdrop-blur",
            children: e.jsxs(p, {
              className: "p-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-4",
                  children: [
                    e.jsx(J, { className: "w-5 h-5 text-blue-600" }),
                    e.jsx("h3", {
                      className:
                        "font-bold text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400",
                      children: "Informações de Compliance e Score",
                    }),
                  ],
                }),
                e.jsx(k, { className: "mb-4" }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3 text-sm",
                          children: [
                            e.jsx(qe, {
                              className:
                                "w-4 h-4 text-amber-500 shrink-0 mt-0.5",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "font-medium text-foreground",
                                  children: "Multa por atraso",
                                }),
                                e.jsxs("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: [
                                    t.fine_rate || 2,
                                    "% sobre o valor da parcela (aplicação única) + ",
                                    t.daily_interest_rate || 0.033,
                                    "% de juros ao dia, conforme art. 52 do CDC.",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-3 text-sm",
                          children: [
                            e.jsx(Q, {
                              className: "w-4 h-4 text-red-500 shrink-0 mt-0.5",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "font-medium text-foreground",
                                  children: "Negativação",
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Após 30 dias de inadimplência, o título poderá ser protestado em cartório e o nome do devedor incluído nos cadastros do Serasa Experian, SPC Brasil e Boa Vista SCPC.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-start gap-3 text-sm",
                          children: [
                            e.jsx(_, {
                              className:
                                "w-4 h-4 text-emerald-500 shrink-0 mt-0.5",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "font-medium text-foreground",
                                  children: "Score de Crédito",
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Pagamentos em dia contribuem para manter e elevar seu score de crédito junto às instituições financeiras e bureaus de crédito parceiros.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-start gap-3 text-sm",
                          children: [
                            e.jsx(P, {
                              className:
                                "w-4 h-4 text-blue-500 shrink-0 mt-0.5",
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("p", {
                                  className: "font-medium text-foreground",
                                  children: "Integração Bancária",
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Este título está registrado e sincronizado com o sistema bancário. Pagamentos são compensados automaticamente em até 24h úteis.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(u, {
            className: "shadow-lg border-border bg-card/95 backdrop-blur",
            children: e.jsxs(p, {
              className: "p-5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-4",
                  children: [
                    e.jsx(H, { className: "w-5 h-5 text-blue-600" }),
                    e.jsx("h3", {
                      className:
                        "font-bold text-sm uppercase tracking-wider text-blue-600 dark:text-blue-400",
                      children: "Cedente / Credor",
                    }),
                  ],
                }),
                e.jsx(k, { className: "mb-4" }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm",
                  children: [
                    t.company_name &&
                      e.jsxs("div", {
                        className: "flex items-center gap-2 text-foreground",
                        children: [
                          e.jsx(H, {
                            className: "w-4 h-4 text-muted-foreground",
                          }),
                          e.jsx("strong", { children: t.company_name }),
                        ],
                      }),
                    t.company_cnpj &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-muted-foreground",
                        children: [
                          e.jsx(Ae, { className: "w-4 h-4" }),
                          "CNPJ: ",
                          e.jsx("span", {
                            className: "font-mono",
                            children: t.company_cnpj,
                          }),
                        ],
                      }),
                    t.company_phone &&
                      e.jsxs("a", {
                        href: `tel:${t.company_phone}`,
                        className:
                          "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
                        children: [
                          e.jsx(W, { className: "w-4 h-4" }),
                          t.company_phone,
                        ],
                      }),
                    t.company_email &&
                      e.jsxs("a", {
                        href: `mailto:${t.company_email}`,
                        className:
                          "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
                        children: [
                          e.jsx(Be, { className: "w-4 h-4" }),
                          t.company_email,
                        ],
                      }),
                    t.company_address &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-muted-foreground sm:col-span-2",
                        children: [
                          e.jsx(Le, { className: "w-4 h-4 shrink-0" }),
                          t.company_address,
                        ],
                      }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("footer", {
            className: "text-center py-8 space-y-3",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-center gap-6 text-xs text-muted-foreground",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(q, { className: "w-3 h-3" }),
                      e.jsx("span", { children: "Dados Criptografados" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(_, { className: "w-3 h-3" }),
                      e.jsx("span", { children: "Ambiente Seguro" }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(P, { className: "w-3 h-3" }),
                      e.jsx("span", { children: "Registro Bancário" }),
                    ],
                  }),
                ],
              }),
              e.jsxs("p", {
                className: "text-xs text-muted-foreground",
                children: [
                  "Sistema de Cobrança Digital • Atualizado em tempo real • ",
                  new Date().toLocaleDateString("pt-BR"),
                ],
              }),
              e.jsx("p", {
                className:
                  "text-[10px] text-muted-foreground/60 max-w-2xl mx-auto",
                children:
                  "Este documento constitui título de crédito nos termos do art. 585 do CPC. O não pagamento no prazo estipulado sujeita o devedor às penalidades previstas em contrato, incluindo protesto, negativação e cobrança judicial.",
              }),
            ],
          }),
        ],
      }),
      e.jsx(ze, {
        open: le,
        onOpenChange: L,
        children: e.jsxs(Ee, {
          className: "sm:max-w-md",
          children: [
            e.jsx(Oe, {
              children: e.jsxs($e, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(Y, { className: "w-5 h-5 text-blue-600" }),
                  "Pagamento via PIX",
                ],
              }),
            }),
            e.jsxs("div", {
              className: "space-y-6",
              children: [
                g &&
                  e.jsxs("div", {
                    className:
                      "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800",
                    children: [
                      e.jsxs("p", {
                        className: "text-sm text-muted-foreground",
                        children: [
                          "Boleto ",
                          g.installment_number,
                          "/",
                          g.installments,
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-3xl font-bold text-blue-700 dark:text-blue-400 mt-1",
                        children: c(
                          g.status === "overdue" ? R(g) : g.installment_value
                        ),
                      }),
                      e.jsxs("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: ["Vencimento: ", C(g.due_date)],
                      }),
                    ],
                  }),
                e.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [
                    t.pix_qrcode
                      ? e.jsx("img", {
                          src: t.pix_qrcode,
                          alt: "QR Code PIX",
                          className: "w-48 h-48 rounded-lg border shadow-sm",
                        })
                      : z
                      ? e.jsx("img", {
                          src: z,
                          alt: "QR Code PIX",
                          className: "w-48 h-48 rounded-lg border shadow-sm",
                        })
                      : e.jsx("div", {
                          className:
                            "w-48 h-48 bg-muted rounded-lg flex items-center justify-center",
                          children: e.jsx("p", {
                            className:
                              "text-muted-foreground text-sm text-center px-4",
                            children: "QR Code não disponível",
                          }),
                        }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mt-3",
                      children: "Escaneie o QR Code com seu app bancário",
                    }),
                  ],
                }),
                e.jsx(k, {}),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm font-medium mb-2 text-foreground",
                      children: "Ou copie a chave PIX:",
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("div", {
                          className:
                            "flex-1 bg-muted rounded-lg px-4 py-3 font-mono text-sm break-all text-foreground",
                          children:
                            t.pix_key || a?.pix_key || "Chave não cadastrada",
                        }),
                        e.jsx(X, {
                          variant: "outline",
                          size: "icon",
                          onClick: xe,
                          disabled: !t.pix_key && !a?.pix_key,
                          children: ne
                            ? e.jsx(se, {
                                className: "w-4 h-4 text-emerald-500",
                              })
                            : e.jsx(Fe, { className: "w-4 h-4" }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "bg-muted rounded-lg p-4 text-sm space-y-1",
                  children: [
                    e.jsxs("div", {
                      className: "flex justify-between",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Favorecido:",
                        }),
                        e.jsx("span", {
                          className: "font-medium text-foreground",
                          children: t.receiver_name || a?.receiver_name,
                        }),
                      ],
                    }),
                    (t.bank || a?.bank) &&
                      e.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Instituição:",
                          }),
                          e.jsx("span", {
                            className: "font-medium text-foreground",
                            children: t.bank || a?.bank,
                          }),
                        ],
                      }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-xs text-center text-muted-foreground",
                  children:
                    "Após o pagamento, a compensação ocorre em até 24h úteis. O status será atualizado automaticamente.",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { Ye as default };
