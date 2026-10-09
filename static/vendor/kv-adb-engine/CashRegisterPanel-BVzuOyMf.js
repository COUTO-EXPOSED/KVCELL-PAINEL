import {
  W as ea,
  fu as $a,
  fv as Aa,
  fw as Ta,
  cD as Je,
  r as i,
  bj as E,
  j as e,
  D as dt,
  c as ct,
  a_ as mt,
  d as xt,
  dX as Pa,
  dN as Oa,
  dO as Ha,
  B as C,
  a3 as La,
  dP as za,
  dS as Lt,
  bl as jt,
  cy as qa,
  b3 as de,
  el as Fe,
  bk as zt,
  K as Ze,
  O as Ne,
  h as ut,
  c2 as Va,
  ae as ta,
  dh as ce,
  a$ as $,
  ct as aa,
  df as sa,
  b2 as Ra,
  I as ve,
  w as L,
  bU as Ve,
  bi as yt,
  fx as ie,
  dg as _e,
  bZ as Ba,
  k as Re,
  S as Ia,
  z as Ua,
  cf as Ya,
  i as ra,
  d9 as X,
  G as ae,
  dd as Qa,
  bL as na,
  ad as Wa,
  bB as Xa,
  bC as Ga,
  bD as qt,
  b4 as Be,
  d1 as Za,
  bE as Vt,
  d7 as rt,
  d8 as nt,
  da as ot,
  b5 as Ie,
  b6 as Ue,
  b7 as Ye,
  b8 as Qe,
  b9 as te,
  ew as Rt,
  dz as Bt,
  dU as oa,
  aa as Ja,
  cY as It,
  n as We,
  dy as pt,
  T as Ut,
  c7 as Yt,
  by as De,
  C as ht,
  bn as Ka,
  bo as es,
  bp as ts,
  bq as as,
  br as ss,
  bs as rs,
  bt as ns,
  bu as os,
  cu as ls,
  a8 as Qt,
  de as is,
} from "./index-V8ZHCWL2.js";
import { C as lt } from "./calendar-D5yT29JG.js";
import { A as Wt } from "./arrow-up-right-BQKFXF8e.js";
import { F as Xt } from "./filter-zlxD6zAv.js";
import { M as Gt } from "./minus-BvnD96RC.js";
import { C as Zt } from "./coins-BAvQgDWQ.js";
import { A as ds } from "./arrow-up-down-Bp1BbkwY.js";
import { A as cs, a as ms } from "./arrow-up-BO8-gqvp.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jt = ea("ArrowDownLeft", [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xs = ea("FileChartColumnIncreasing", [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7",
      },
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M8 18v-2", key: "qcmpov" }],
    ["path", { d: "M12 18v-4", key: "q1q25u" }],
    ["path", { d: "M16 18v-6", key: "15y0np" }],
  ]),
  bt = $a,
  gt = Aa,
  ft = Ta,
  us = {
    cash: {
      label: "Dinheiro",
      icon: _e,
      color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
    },
    dinheiro: {
      label: "Dinheiro",
      icon: _e,
      color: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
    },
    pix: {
      label: "PIX",
      icon: Ba,
      color: "text-violet-600 bg-violet-500/10 border-violet-500/20",
    },
    credit: {
      label: "Crédito",
      icon: Re,
      color: "text-blue-600 bg-blue-500/10 border-blue-500/20",
    },
    credit_card: {
      label: "Crédito",
      icon: Re,
      color: "text-blue-600 bg-blue-500/10 border-blue-500/20",
    },
    debit: {
      label: "Débito",
      icon: Re,
      color: "text-cyan-600 bg-cyan-500/10 border-cyan-500/20",
    },
    debit_card: {
      label: "Débito",
      icon: Re,
      color: "text-cyan-600 bg-cyan-500/10 border-cyan-500/20",
    },
    transfer: {
      label: "Transferência",
      icon: Ia,
      color: "text-amber-600 bg-amber-500/10 border-amber-500/20",
    },
    boleto: {
      label: "Boleto",
      icon: sa,
      color: "text-orange-600 bg-orange-500/10 border-orange-500/20",
    },
  };
function Xe(y) {
  if (!y)
    return {
      label: "Outros",
      icon: ce,
      color: "text-muted-foreground bg-muted/30 border-border",
    };
  const M = y.toLowerCase().replace(/\s+/g, "_");
  return (
    us[M] || {
      label: y,
      icon: ce,
      color: "text-muted-foreground bg-muted/30 border-border",
    }
  );
}
function ps({
  open: y,
  onOpenChange: M,
  register: n,
  userId: T,
  employeesMap: P = {},
}) {
  const { format: l } = Je(),
    [A, x] = i.useState([]),
    [b, w] = i.useState(!1),
    [f, se] = i.useState(""),
    [R, re] = i.useState("all");
  i.useEffect(() => {
    if (!y || !n) return;
    (async () => {
      w(!0);
      try {
        const p = n.opened_at,
          S = n.closed_at || new Date().toISOString(),
          { data: N } = await L.from("transactions")
            .select(
              "id, description, amount, type, category, payment_method, created_at, created_by_employee_id"
            )
            .eq("user_id", T)
            .gte("created_at", p)
            .lte("created_at", S)
            .order("created_at", { ascending: !1 }),
          v = (N || []).map((q) => ({
            ...q,
            created_by_name: q.created_by_employee_id
              ? P[q.created_by_employee_id] || "Funcionário"
              : "Proprietário",
          }));
        x(v);
      } finally {
        w(!1);
      }
    })();
  }, [y, n, T, P]);
  const Y = i.useMemo(() => {
      const s = f.trim().toLowerCase();
      return A.filter((p) =>
        R !== "all" && p.type !== R
          ? !1
          : s
          ? (p.description || "").toLowerCase().includes(s) ||
            (p.category || "").toLowerCase().includes(s) ||
            (p.payment_method || "").toLowerCase().includes(s) ||
            (p.created_by_name || "").toLowerCase().includes(s)
          : !0
      );
    }, [A, f, R]),
    a = i.useMemo(() => {
      const s = A.filter((N) => N.type === "income").reduce(
          (N, v) => N + Number(v.amount || 0),
          0
        ),
        p = A.filter((N) => N.type === "expense").reduce(
          (N, v) => N + Number(v.amount || 0),
          0
        ),
        S = new Map();
      return (
        A.forEach((N) => {
          const v = (N.payment_method || "outros")
              .toLowerCase()
              .replace(/\s+/g, "_"),
            q = S.get(v) || { total: 0, count: 0 },
            B = N.type === "income" ? 1 : -1;
          S.set(v, {
            total: q.total + B * Number(N.amount || 0),
            count: q.count + 1,
          });
        }),
        { income: s, expense: p, net: s - p, byMethod: S }
      );
    }, [A]);
  if (!n) return null;
  const r =
      (n.closed_at ? new Date(n.closed_at).getTime() : Date.now()) -
      new Date(n.opened_at).getTime(),
    o = Math.floor(r / 36e5),
    _ = Math.floor((r % 36e5) / 6e4),
    z = `caixa_${E(new Date(n.opened_at), "yyyy-MM-dd_HHmm")}`,
    c = () => {
      try {
        const s = [];
        s.push("Relatorio detalhado do caixa"),
          s.push(
            `Aberto em;${E(new Date(n.opened_at), "dd/MM/yyyy HH:mm")};por;${
              n.opened_by_name || "Proprietario"
            }`
          ),
          s.push(
            `Fechado em;${
              n.closed_at
                ? E(new Date(n.closed_at), "dd/MM/yyyy HH:mm")
                : "Em aberto"
            };por;${n.closed_by_name || "-"}`
          ),
          s.push(`Valor inicial;${Number(n.opening_amount || 0).toFixed(2)}`),
          n.closing_amount != null &&
            s.push(`Valor final;${Number(n.closing_amount).toFixed(2)}`),
          n.expected_amount != null &&
            s.push(`Valor esperado;${Number(n.expected_amount).toFixed(2)}`),
          n.difference != null &&
            s.push(`Diferenca;${Number(n.difference).toFixed(2)}`),
          s.push(`Entradas;${a.income.toFixed(2)}`),
          s.push(`Saidas;${a.expense.toFixed(2)}`),
          s.push(`Saldo do periodo;${a.net.toFixed(2)}`),
          s.push(""),
          s.push(
            "Data/Hora;Tipo;Descricao;Categoria;Forma de pagamento;Responsavel;Valor"
          );
        const p = (B) => `"${String(B ?? "").replace(/"/g, '""')}"`;
        Y.forEach((B) => {
          s.push(
            [
              E(new Date(B.created_at), "dd/MM/yyyy HH:mm"),
              B.type === "income" ? "Entrada" : "Saida",
              p(B.description || ""),
              p(B.category || ""),
              p(Xe(B.payment_method).label),
              p(B.created_by_name || ""),
              (B.type === "income" ? "" : "-") +
                Number(B.amount || 0).toFixed(2),
            ].join(";")
          );
        });
        const S =
            "\uFEFF" +
            s.join(`
`),
          N = new Blob([S], { type: "text/csv;charset=utf-8" }),
          v = URL.createObjectURL(N),
          q = document.createElement("a");
        (q.href = v),
          (q.download = `${z}.csv`),
          q.click(),
          URL.revokeObjectURL(v),
          Ve.success("CSV exportado");
      } catch {
        Ve.error("Falha ao exportar CSV");
      }
    },
    g = () => {
      try {
        const s = new yt({ orientation: "portrait", unit: "mm", format: "a4" }),
          p = s.internal.pageSize.getWidth();
        s.setFillColor(51, 133, 50),
          s.rect(0, 0, p, 22, "F"),
          s.setTextColor(255, 255, 255),
          s.setFont("helvetica", "bold"),
          s.setFontSize(14),
          s.text("Relatório detalhado do caixa", 14, 14),
          s.setFont("helvetica", "normal"),
          s.setFontSize(9),
          s.text(E(new Date(), "dd/MM/yyyy HH:mm"), p - 14, 14, {
            align: "right",
          }),
          s.setTextColor(30, 30, 30);
        let S = 30;
        s.setFontSize(10),
          s.setFont("helvetica", "bold"),
          s.text("Sessão do caixa", 14, S),
          (S += 5),
          s.setFont("helvetica", "normal"),
          s.setFontSize(9),
          [
            [
              "Aberto em",
              `${E(new Date(n.opened_at), "dd/MM/yyyy HH:mm")} — ${
                n.opened_by_name || "Proprietário"
              }`,
            ],
            [
              "Fechado em",
              n.closed_at
                ? `${E(new Date(n.closed_at), "dd/MM/yyyy HH:mm")} — ${
                    n.closed_by_name || "-"
                  }`
                : "Em aberto",
            ],
            ["Duração", `${o}h ${_}m`],
            ["Valor inicial", l(n.opening_amount)],
            ...(n.closing_amount != null
              ? [["Valor final", l(n.closing_amount)]]
              : []),
            ...(n.expected_amount != null
              ? [["Valor esperado", l(n.expected_amount)]]
              : []),
            ...(n.difference != null
              ? [["Diferença", l(Number(n.difference))]]
              : []),
            ["Entradas", l(a.income)],
            ["Saídas", l(a.expense)],
            ["Saldo do período", l(a.net)],
          ].forEach(([v, q]) => {
            s.text(`${v}:`, 14, S), s.text(String(q), 60, S), (S += 4.5);
          }),
          ie(s, {
            startY: S + 4,
            head: [
              [
                "Data/Hora",
                "Tipo",
                "Descrição",
                "Categoria",
                "Pagamento",
                "Responsável",
                "Valor",
              ],
            ],
            body: Y.map((v) => [
              E(new Date(v.created_at), "dd/MM HH:mm"),
              v.type === "income" ? "Entrada" : "Saída",
              v.description || "-",
              v.category || "-",
              Xe(v.payment_method).label,
              v.created_by_name || "-",
              `${v.type === "income" ? "+" : "−"}${l(Number(v.amount || 0))}`,
            ]),
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [51, 133, 50], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 247, 245] },
            columnStyles: { 6: { halign: "right", fontStyle: "bold" } },
            margin: { left: 10, right: 10 },
          }),
          s.save(`${z}.pdf`),
          Ve.success("PDF exportado");
      } catch {
        Ve.error("Falha ao exportar PDF");
      }
    };
  return e.jsx(dt, {
    open: y,
    onOpenChange: M,
    children: e.jsxs(ct, {
      className:
        "w-[calc(100vw-1rem)] max-w-4xl max-h-[92vh] overflow-hidden p-0 gap-0 rounded-2xl",
      children: [
        e.jsx("div", {
          className:
            "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-5 sm:p-6 border-b",
          children: e.jsxs(mt, {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between gap-3 flex-wrap",
                children: [
                  e.jsxs(xt, {
                    className: "flex items-center gap-2 text-base sm:text-lg",
                    children: [
                      e.jsx("div", {
                        className:
                          "h-10 w-10 rounded-xl bg-primary/15 flex items-center justify-center",
                        children: e.jsx(Pa, {
                          className: "h-5 w-5 text-primary",
                        }),
                      }),
                      "Detalhes do caixa",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsxs(Oa, {
                        children: [
                          e.jsx(Ha, {
                            asChild: !0,
                            children: e.jsxs(C, {
                              variant: "outline",
                              size: "sm",
                              className: "h-8 gap-1.5",
                              children: [
                                e.jsx(La, { className: "h-3.5 w-3.5" }),
                                "Exportar",
                              ],
                            }),
                          }),
                          e.jsxs(za, {
                            align: "end",
                            children: [
                              e.jsxs(Lt, {
                                onClick: g,
                                children: [
                                  e.jsx(jt, {
                                    className: "h-4 w-4 mr-2 text-rose-600",
                                  }),
                                  " PDF detalhado",
                                ],
                              }),
                              e.jsxs(Lt, {
                                onClick: c,
                                children: [
                                  e.jsx(qa, {
                                    className: "h-4 w-4 mr-2 text-emerald-600",
                                  }),
                                  " CSV (planilha)",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(de, {
                        className:
                          n.status === "open"
                            ? "bg-emerald-500 hover:bg-emerald-500"
                            : "bg-muted-foreground hover:bg-muted-foreground",
                        children:
                          n.status === "open" ? "Aberto agora" : "Fechado",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 rounded-xl bg-card/60 backdrop-blur px-3 py-2 border border-border/40",
                    children: [
                      e.jsx(Fe, {
                        className: "h-4 w-4 text-emerald-600 shrink-0",
                      }),
                      e.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[10px] uppercase tracking-wider text-muted-foreground",
                            children: "Aberto",
                          }),
                          e.jsx("div", {
                            className: "font-medium truncate",
                            children: E(
                              new Date(n.opened_at),
                              "dd 'de' MMM, HH:mm",
                              { locale: zt }
                            ),
                          }),
                          e.jsxs("div", {
                            className:
                              "text-[11px] text-muted-foreground truncate",
                            children: [
                              e.jsx(Ze, { className: "h-3 w-3 inline mr-0.5" }),
                              " ",
                              n.opened_by_name || "Proprietário",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 rounded-xl bg-card/60 backdrop-blur px-3 py-2 border border-border/40",
                    children: [
                      e.jsx(Ne, {
                        className: "h-4 w-4 text-muted-foreground shrink-0",
                      }),
                      e.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[10px] uppercase tracking-wider text-muted-foreground",
                            children: "Fechado",
                          }),
                          e.jsx("div", {
                            className: "font-medium truncate",
                            children: n.closed_at
                              ? E(new Date(n.closed_at), "dd 'de' MMM, HH:mm", {
                                  locale: zt,
                                })
                              : "Ainda aberto",
                          }),
                          e.jsxs("div", {
                            className:
                              "text-[11px] text-muted-foreground truncate",
                            children: [
                              e.jsx(ut, { className: "h-3 w-3 inline mr-0.5" }),
                              " Duração: ",
                              o,
                              "h ",
                              _,
                              "m",
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
        e.jsx(Va, {
          className: "max-h-[calc(92vh-180px)]",
          children: e.jsxs("div", {
            className: "p-5 sm:p-6 space-y-5",
            children: [
              e.jsxs("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
                children: [
                  e.jsx(Ge, {
                    label: "Entradas",
                    value: l(a.income),
                    icon: Jt,
                    accent: "emerald",
                    sub: `${A.filter((s) => s.type === "income").length} mov.`,
                  }),
                  e.jsx(Ge, {
                    label: "Saídas",
                    value: l(a.expense),
                    icon: Wt,
                    accent: "rose",
                    sub: `${A.filter((s) => s.type === "expense").length} mov.`,
                  }),
                  e.jsx(Ge, {
                    label: "Saldo do período",
                    value: l(a.net),
                    icon: ta,
                    accent: a.net >= 0 ? "primary" : "rose",
                    sub: a.net >= 0 ? "Positivo" : "Negativo",
                  }),
                  e.jsx(Ge, {
                    label: "Valor inicial",
                    value: l(n.opening_amount),
                    icon: ce,
                    accent: "amber",
                    sub:
                      n.closing_amount != null
                        ? `Final: ${l(n.closing_amount)}`
                        : "Caixa aberto",
                  }),
                ],
              }),
              n.difference !== null &&
                e.jsxs("div", {
                  className: $(
                    "rounded-2xl border p-4 flex items-center justify-between gap-3",
                    Number(n.difference) === 0
                      ? "bg-emerald-500/5 border-emerald-500/20"
                      : Number(n.difference) > 0
                      ? "bg-blue-500/5 border-blue-500/20"
                      : "bg-rose-500/5 border-rose-500/20"
                  ),
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("div", {
                          className:
                            "text-xs uppercase tracking-wider text-muted-foreground",
                          children: "Diferença no fechamento",
                        }),
                        e.jsx("div", {
                          className: "text-lg font-bold tabular-nums",
                          children:
                            Number(n.difference) === 0
                              ? "Caixa exato"
                              : Number(n.difference) > 0
                              ? `+${l(Number(n.difference))} (sobra)`
                              : `−${l(Math.abs(Number(n.difference)))} (falta)`,
                        }),
                      ],
                    }),
                    n.closed_by_name &&
                      e.jsxs("div", {
                        className: "text-right text-xs text-muted-foreground",
                        children: [
                          "Fechado por",
                          e.jsx("br", {}),
                          e.jsx("span", {
                            className: "font-medium text-foreground",
                            children: n.closed_by_name,
                          }),
                        ],
                      }),
                  ],
                }),
              a.byMethod.size > 0 &&
                e.jsxs("div", {
                  children: [
                    e.jsxs("h4", {
                      className:
                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2",
                      children: [
                        e.jsx(ce, { className: "h-3.5 w-3.5" }),
                        " Por forma de pagamento",
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2",
                      children: Array.from(a.byMethod.entries()).map(
                        ([s, p]) => {
                          const S = Xe(s),
                            N = S.icon;
                          return e.jsxs(
                            "div",
                            {
                              className: $(
                                "rounded-xl border px-3 py-2.5",
                                S.color
                              ),
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(N, { className: "h-4 w-4" }),
                                    e.jsx("span", {
                                      className: "text-xs font-semibold",
                                      children: S.label,
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "text-base font-bold tabular-nums mt-1",
                                  children: l(p.total),
                                }),
                                e.jsxs("div", {
                                  className: "text-[11px] opacity-80",
                                  children: [
                                    p.count,
                                    " movimento",
                                    p.count > 1 ? "s" : "",
                                  ],
                                }),
                              ],
                            },
                            s
                          );
                        }
                      ),
                    }),
                  ],
                }),
              e.jsx(aa, {}),
              e.jsxs("div", {
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-wrap items-center justify-between gap-2 mb-3",
                    children: [
                      e.jsxs("h4", {
                        className: "text-sm font-bold flex items-center gap-2",
                        children: [
                          e.jsx(sa, { className: "h-4 w-4 text-primary" }),
                          "Movimentações (",
                          Y.length,
                          ")",
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex items-center gap-1",
                        children: ["all", "income", "expense"].map((s) =>
                          e.jsx(
                            "button",
                            {
                              onClick: () => re(s),
                              className: $(
                                "px-3 py-1 rounded-lg text-xs font-medium transition-colors",
                                R === s
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
                              ),
                              children:
                                s === "all"
                                  ? "Todas"
                                  : s === "income"
                                  ? "Entradas"
                                  : "Saídas",
                            },
                            s
                          )
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "relative mb-3",
                    children: [
                      e.jsx(Ra, {
                        className:
                          "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                      }),
                      e.jsx(ve, {
                        placeholder:
                          "Buscar descrição, categoria, pagamento...",
                        value: f,
                        onChange: (s) => se(s.target.value),
                        className: "pl-9 h-9",
                      }),
                    ],
                  }),
                  b
                    ? e.jsx("div", {
                        className:
                          "text-center text-sm text-muted-foreground py-12",
                        children: "Carregando movimentações...",
                      })
                    : Y.length === 0
                    ? e.jsx("div", {
                        className:
                          "text-center text-sm text-muted-foreground py-12 border border-dashed rounded-xl",
                        children:
                          "Nenhuma movimentação no período deste caixa.",
                      })
                    : e.jsx("div", {
                        className:
                          "rounded-xl border border-border/40 divide-y divide-border/40 overflow-hidden",
                        children: Y.map((s) => {
                          const p = Xe(s.payment_method),
                            S = p.icon,
                            N = s.type === "income";
                          return e.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center gap-3 p-3 hover:bg-muted/30 transition-colors",
                              children: [
                                e.jsx("div", {
                                  className: $(
                                    "h-10 w-10 rounded-xl flex items-center justify-center shrink-0",
                                    N
                                      ? "bg-emerald-500/10 text-emerald-600"
                                      : "bg-rose-500/10 text-rose-600"
                                  ),
                                  children: N
                                    ? e.jsx(Jt, { className: "h-5 w-5" })
                                    : e.jsx(Wt, { className: "h-5 w-5" }),
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    e.jsx("div", {
                                      className: "font-medium text-sm truncate",
                                      children:
                                        s.description || "Sem descrição",
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 mt-0.5 flex-wrap",
                                      children: [
                                        e.jsxs("span", {
                                          className:
                                            "text-[11px] text-muted-foreground flex items-center gap-1",
                                          children: [
                                            e.jsx(ut, { className: "h-3 w-3" }),
                                            E(new Date(s.created_at), "HH:mm"),
                                          ],
                                        }),
                                        s.category &&
                                          e.jsxs("span", {
                                            className:
                                              "text-[11px] text-muted-foreground",
                                            children: ["• ", s.category],
                                          }),
                                        e.jsxs("span", {
                                          className:
                                            "text-[11px] text-muted-foreground flex items-center gap-1",
                                          children: [
                                            "• ",
                                            e.jsx(Ze, { className: "h-3 w-3" }),
                                            " ",
                                            s.created_by_name,
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: $(
                                    "hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-medium shrink-0",
                                    p.color
                                  ),
                                  children: [
                                    e.jsx(S, { className: "h-3 w-3" }),
                                    p.label,
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: $(
                                    "text-right font-bold tabular-nums shrink-0",
                                    N ? "text-emerald-600" : "text-rose-600"
                                  ),
                                  children: [
                                    N ? "+" : "−",
                                    l(Number(s.amount || 0)),
                                  ],
                                }),
                              ],
                            },
                            s.id
                          );
                        }),
                      }),
                ],
              }),
              (n.opening_notes || n.closing_notes) &&
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                  children: [
                    n.opening_notes &&
                      e.jsxs("div", {
                        className:
                          "rounded-xl border border-border/40 bg-muted/20 p-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[10px] uppercase tracking-wider text-muted-foreground mb-1",
                            children: "Observação de abertura",
                          }),
                          e.jsx("p", {
                            className: "text-xs",
                            children: n.opening_notes,
                          }),
                        ],
                      }),
                    n.closing_notes &&
                      e.jsxs("div", {
                        className:
                          "rounded-xl border border-border/40 bg-muted/20 p-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-[10px] uppercase tracking-wider text-muted-foreground mb-1",
                            children: "Observação de fechamento",
                          }),
                          e.jsx("p", {
                            className: "text-xs",
                            children: n.closing_notes,
                          }),
                        ],
                      }),
                  ],
                }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Ge({ label: y, value: M, icon: n, accent: T, sub: P }) {
  const l = {
    emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    rose: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    primary: "bg-primary/10 text-primary border-primary/20",
    amber: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  };
  return e.jsxs("div", {
    className: "rounded-2xl border border-border/40 bg-card p-3 sm:p-4",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between gap-2",
        children: [
          e.jsx("span", {
            className:
              "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold",
            children: y,
          }),
          e.jsx("div", {
            className: $(
              "h-7 w-7 rounded-lg border flex items-center justify-center",
              l[T]
            ),
            children: e.jsx(n, { className: "h-3.5 w-3.5" }),
          }),
        ],
      }),
      e.jsx("div", {
        className: "text-lg sm:text-xl font-bold tabular-nums mt-1.5 truncate",
        children: M,
      }),
      P &&
        e.jsx("div", {
          className: "text-[11px] text-muted-foreground mt-0.5 truncate",
          children: P,
        }),
    ],
  });
}
const it = (y) =>
    parseFloat((y || "0").replace(/\./g, "").replace(",", ".")) || 0,
  oe = (y) => {
    try {
      return E(new Date(y), "HH:mm");
    } catch {
      return "";
    }
  },
  Q = (y) => {
    try {
      return E(new Date(y), "dd/MM/yyyy HH:mm");
    } catch {
      return "";
    }
  },
  hs = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01],
  bs = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
  gs = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
function fs(y) {
  return y === "EUR" ? bs : y === "USD" ? gs : hs;
}
function Kt({ value: y, onChange: M, total: n }) {
  const { currency: T } = ls(),
    { format: P } = Je(),
    l = fs(T),
    A = new Map(y.map((a) => [a.value, a.qty])),
    x = (a, r) => {
      const o = l
        .map((_) => ({
          value: _,
          qty: _ === a ? Math.max(0, r) : A.get(_) || 0,
        }))
        .filter((_) => _.qty > 0);
      M(o);
    },
    b = (a) => x(a, (A.get(a) || 0) + 1),
    w = (a) => x(a, Math.max(0, (A.get(a) || 0) - 1)),
    f = () => M([]),
    se = l.filter((a) => a >= 1),
    R = l.filter((a) => a < 1),
    re = y.reduce((a, r) => a + r.qty, 0),
    Y = (a) => {
      const r = A.get(a) || 0,
        o = r * a,
        _ = a >= 1;
      return e.jsxs(
        "div",
        {
          className: $(
            "flex items-center gap-2 rounded-xl border p-2 transition-all",
            r > 0
              ? "border-primary/50 bg-primary/5 shadow-sm"
              : "border-border/40 bg-card hover:border-border"
          ),
          children: [
            e.jsxs("div", {
              className: $(
                "h-9 px-2 min-w-[64px] shrink-0 rounded-lg flex items-center justify-center gap-1 text-xs font-bold tabular-nums",
                _
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
                  : "bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
              ),
              title: _ ? "Cédula" : "Moeda",
              children: [
                _
                  ? e.jsx(_e, { className: "h-3 w-3" })
                  : e.jsx(Zt, { className: "h-3 w-3" }),
                P(a),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                e.jsx(C, {
                  type: "button",
                  size: "icon",
                  variant: "outline",
                  className: "h-7 w-7 shrink-0",
                  onClick: () => w(a),
                  disabled: r === 0,
                  "aria-label": `Diminuir ${P(a)}`,
                  children: e.jsx(Gt, { className: "h-3.5 w-3.5" }),
                }),
                e.jsx(ve, {
                  type: "number",
                  inputMode: "numeric",
                  min: 0,
                  value: r || "",
                  placeholder: "0",
                  onChange: (z) =>
                    x(a, Math.max(0, parseInt(z.target.value || "0") || 0)),
                  className:
                    "h-7 w-14 px-1.5 text-xs text-center font-semibold",
                }),
                e.jsx(C, {
                  type: "button",
                  size: "icon",
                  variant: "outline",
                  className: "h-7 w-7 shrink-0",
                  onClick: () => b(a),
                  "aria-label": `Aumentar ${P(a)}`,
                  children: e.jsx(Qt, { className: "h-3.5 w-3.5" }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "ml-auto text-right",
              children: [
                e.jsx("p", {
                  className: "text-[10px] text-muted-foreground leading-none",
                  children: "Subtotal",
                }),
                e.jsx("p", {
                  className: $(
                    "text-xs font-bold tabular-nums leading-tight",
                    r > 0 ? "text-primary" : "text-muted-foreground"
                  ),
                  children: P(o),
                }),
              ],
            }),
          ],
        },
        a
      );
    };
  return e.jsxs("div", {
    className:
      "rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 to-card p-3 space-y-3",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between gap-2",
        children: [
          e.jsxs("p", {
            className: "text-[11px] text-muted-foreground",
            children: [
              "Use ",
              e.jsx(Qt, { className: "inline h-3 w-3" }),
              "/",
              e.jsx(Gt, { className: "inline h-3 w-3" }),
              " ou digite a quantidade de cada cédula/moeda.",
            ],
          }),
          re > 0 &&
            e.jsxs(C, {
              type: "button",
              variant: "ghost",
              size: "sm",
              className:
                "h-6 px-2 text-[11px] text-muted-foreground hover:text-destructive gap-1",
              onClick: f,
              children: [e.jsx(is, { className: "h-3 w-3" }), " Limpar"],
            }),
        ],
      }),
      se.length > 0 &&
        e.jsxs("div", {
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-1.5 mb-1.5",
              children: [
                e.jsx(_e, { className: "h-3.5 w-3.5 text-emerald-600" }),
                e.jsx("span", {
                  className:
                    "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                  children: "Cédulas",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 gap-2",
              children: se.map(Y),
            }),
          ],
        }),
      R.length > 0 &&
        e.jsxs("div", {
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-1.5 mb-1.5",
              children: [
                e.jsx(Zt, { className: "h-3.5 w-3.5 text-amber-600" }),
                e.jsx("span", {
                  className:
                    "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                  children: "Moedas",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid grid-cols-1 gap-2",
              children: R.map(Y),
            }),
          ],
        }),
      e.jsxs("div", {
        className:
          "flex items-center justify-between pt-2 border-t border-border/40",
        children: [
          e.jsxs("span", {
            className: "text-xs text-muted-foreground",
            children: [re, " ", re === 1 ? "peça" : "peças", " contadas"],
          }),
          e.jsxs("div", {
            className: "text-right",
            children: [
              e.jsx("p", {
                className: "text-[10px] text-muted-foreground leading-none",
                children: "Total contado",
              }),
              e.jsx("p", {
                className: "text-base font-bold text-primary tabular-nums",
                children: P(n),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function js({
  registers: y,
  transactions: M,
  viewDate: n,
  employeesMap: T = {},
  filterLabel: P = "Todos os usuários",
}) {
  const { format: l } = Je(),
    { toast: A } = ra(),
    x = M.filter((a) => a.type === "income").reduce(
      (a, r) => a + Number(r.amount || 0),
      0
    ),
    b = M.filter((a) => a.type === "expense").reduce(
      (a, r) => a + Number(r.amount || 0),
      0
    ),
    w = x - b,
    f = i.useMemo(() => {
      const a = {};
      return (
        M.forEach((r) => {
          const o = r.payment_method || "Não informado";
          a[o] || (a[o] = { income: 0, expense: 0, count: 0 });
          const _ = Number(r.amount || 0);
          r.type === "income" ? (a[o].income += _) : (a[o].expense += _),
            (a[o].count += 1);
        }),
        Object.entries(a).sort(
          (r, o) => o[1].income - o[1].expense - (r[1].income - r[1].expense)
        )
      );
    }, [M]),
    se = E(n, "dd-MM-yyyy"),
    R = y.length > 0 || M.length > 0,
    re = () => {
      if (!R) {
        A({ title: "Sem dados para exportar", variant: "destructive" });
        return;
      }
      const a = [],
        r = (c) => `"${String(c ?? "").replace(/"/g, '""')}"`;
      a.push(`Relatório do Caixa - ${E(n, "dd/MM/yyyy")}`),
        a.push(`Filtro: ${P}`),
        a.push(""),
        a.push("CAIXAS"),
        a.push(
          [
            "Status",
            "Aberto em",
            "Fechado em",
            "Aberto por",
            "Fechado por",
            "Saldo inicial",
            "Esperado",
            "Saldo físico",
            "Diferença",
            "Obs abertura",
            "Obs fechamento",
          ]
            .map(r)
            .join(",")
        ),
        y.forEach((c) => {
          const g =
              c.opened_by_name ||
              (c.opened_by_employee_id ? T[c.opened_by_employee_id] : "") ||
              "Proprietário",
            s = c.closed_by_name || "";
          a.push(
            [
              c.status,
              Q(c.opened_at),
              c.closed_at ? Q(c.closed_at) : "",
              g,
              s,
              Number(c.opening_amount || 0).toFixed(2),
              c.expected_amount !== null
                ? Number(c.expected_amount).toFixed(2)
                : "",
              c.closing_amount !== null
                ? Number(c.closing_amount).toFixed(2)
                : "",
              c.difference !== null ? Number(c.difference).toFixed(2) : "",
              c.opening_notes || "",
              c.closing_notes || "",
            ]
              .map(r)
              .join(",")
          );
        }),
        a.push(""),
        a.push("DETALHAMENTO DE CÉDULAS/MOEDAS"),
        y.forEach((c, g) => {
          const s = c.opened_by_name || "Proprietário";
          a.push(`Caixa ${g + 1} (${Q(c.opened_at)}) - por ${s}`);
          const p = (S, N) => {
            N?.length &&
              (a.push(S),
              a.push(
                ["Valor unitário", "Quantidade", "Subtotal"].map(r).join(",")
              ),
              N.forEach((v) =>
                a.push(
                  [v.value.toFixed(2), v.qty, (v.value * v.qty).toFixed(2)]
                    .map(r)
                    .join(",")
                )
              ));
          };
          p("Abertura", c.opening_breakdown),
            p("Fechamento", c.closing_breakdown);
        }),
        a.push(""),
        a.push("MOVIMENTAÇÕES"),
        a.push(
          [
            "Hora",
            "Tipo",
            "Descrição",
            "Categoria",
            "Pagamento",
            "Por",
            "Valor",
          ]
            .map(r)
            .join(",")
        ),
        M.forEach((c) => {
          const g =
            c.created_by_name ||
            (c.created_by_employee_id
              ? T[c.created_by_employee_id]
              : "Proprietário") ||
            "Proprietário";
          a.push(
            [
              oe(c.created_at),
              c.type === "income" ? "Entrada" : "Saída",
              c.description,
              c.category || "",
              c.payment_method || "",
              g,
              Number(c.amount || 0).toFixed(2),
            ]
              .map(r)
              .join(",")
          );
        }),
        a.push(""),
        a.push("TOTAIS POR FORMA DE PAGAMENTO"),
        a.push(
          ["Forma", "Entradas", "Saídas", "Líquido", "Qtd"].map(r).join(",")
        ),
        f.forEach(([c, g]) => {
          a.push(
            [
              c,
              g.income.toFixed(2),
              g.expense.toFixed(2),
              (g.income - g.expense).toFixed(2),
              g.count,
            ]
              .map(r)
              .join(",")
          );
        }),
        a.push(
          ["TOTAL", x.toFixed(2), b.toFixed(2), w.toFixed(2), M.length]
            .map(r)
            .join(",")
        );
      const o = new Blob(
          [
            "\uFEFF" +
              a.join(`
`),
          ],
          { type: "text/csv;charset=utf-8" }
        ),
        _ = URL.createObjectURL(o),
        z = document.createElement("a");
      (z.href = _),
        (z.download = `caixa_${se}.csv`),
        z.click(),
        URL.revokeObjectURL(_),
        A({ title: "✅ CSV exportado!" });
    },
    Y = () => {
      if (!R) {
        A({ title: "Sem dados para exportar", variant: "destructive" });
        return;
      }
      const a = new yt();
      let r = 14;
      a.setFontSize(16),
        a.setFont("helvetica", "bold"),
        a.text("Relatório do Caixa", 14, r),
        a.setFontSize(10),
        a.setFont("helvetica", "normal"),
        (r += 6),
        a.text(`${E(n, "dd/MM/yyyy")}  ·  Filtro: ${P}`, 14, r),
        ie(a, {
          startY: r + 4,
          head: [["Entradas", "Saídas", "Saldo do dia", "Movimentações"]],
          body: [[l(x), l(b), l(w), String(M.length)]],
          headStyles: { fillColor: [51, 133, 50] },
          styles: { fontSize: 9 },
        }),
        (r = a.lastAutoTable.finalY + 6),
        y.length &&
          (a.setFont("helvetica", "bold"),
          a.setFontSize(11),
          a.text("Caixas do dia", 14, r),
          ie(a, {
            startY: r + 2,
            head: [
              [
                "Status",
                "Aberto",
                "Fechado",
                "Por",
                "Inicial",
                "Esperado",
                "Físico",
                "Dif.",
              ],
            ],
            body: y.map((o) => [
              o.status === "open" ? "Aberto" : "Fechado",
              oe(o.opened_at),
              o.closed_at ? oe(o.closed_at) : "—",
              o.opened_by_name || "—",
              l(o.opening_amount),
              o.expected_amount !== null ? l(o.expected_amount) : "—",
              o.closing_amount !== null ? l(o.closing_amount) : "—",
              o.difference !== null ? l(Number(o.difference)) : "—",
            ]),
            styles: { fontSize: 8 },
            headStyles: { fillColor: [16, 185, 129] },
          }),
          (r = a.lastAutoTable.finalY + 4),
          y.forEach((o, _) => {
            const z = (c, g) => {
              g?.length &&
                (r > 250 && (a.addPage(), (r = 14)),
                a.setFont("helvetica", "bold"),
                a.setFontSize(9),
                a.text(`Caixa ${_ + 1} - ${c}`, 14, r),
                ie(a, {
                  startY: r + 2,
                  head: [["Valor", "Qtd", "Subtotal"]],
                  body: g.map((s) => [
                    l(s.value),
                    String(s.qty),
                    l(s.value * s.qty),
                  ]),
                  styles: { fontSize: 8 },
                  headStyles: { fillColor: [100, 116, 139] },
                  margin: { left: 14 },
                  tableWidth: 90,
                }),
                (r = a.lastAutoTable.finalY + 4));
            };
            z("Abertura", o.opening_breakdown),
              z("Fechamento", o.closing_breakdown);
          })),
        f.length &&
          (r > 240 && (a.addPage(), (r = 14)),
          a.setFont("helvetica", "bold"),
          a.setFontSize(11),
          a.text("Totais por forma de pagamento", 14, r),
          ie(a, {
            startY: r + 2,
            head: [["Forma", "Entradas", "Saídas", "Líquido", "Qtd"]],
            body: [
              ...f.map(([o, _]) => [
                o,
                l(_.income),
                l(_.expense),
                l(_.income - _.expense),
                String(_.count),
              ]),
              ["TOTAL", l(x), l(b), l(w), String(M.length)],
            ],
            styles: { fontSize: 9 },
            headStyles: { fillColor: [51, 133, 50] },
          }),
          (r = a.lastAutoTable.finalY + 4)),
        M.length &&
          (r > 230 && (a.addPage(), (r = 14)),
          a.setFont("helvetica", "bold"),
          a.setFontSize(11),
          a.text("Movimentações", 14, r),
          ie(a, {
            startY: r + 2,
            head: [
              [
                "Hora",
                "Tipo",
                "Descrição",
                "Por",
                "Categoria",
                "Pagamento",
                "Valor",
              ],
            ],
            body: M.map((o) => [
              oe(o.created_at),
              o.type === "income" ? "Entrada" : "Saída",
              o.description,
              o.created_by_name ||
                (o.created_by_employee_id
                  ? T[o.created_by_employee_id] || "Funcionário"
                  : "Proprietário"),
              o.category || "—",
              o.payment_method || "—",
              (o.type === "income" ? "+" : "-") + l(Number(o.amount || 0)),
            ]),
            styles: { fontSize: 8 },
            headStyles: { fillColor: [51, 133, 50] },
          })),
        a.save(`caixa_${se}.pdf`),
        A({ title: "✅ PDF exportado!" });
    };
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap gap-2 justify-end",
        children: [
          e.jsxs(C, {
            variant: "outline",
            size: "sm",
            onClick: re,
            disabled: !R,
            className: "gap-2",
            children: [e.jsx(oa, { className: "h-4 w-4" }), " Exportar CSV"],
          }),
          e.jsxs(C, {
            variant: "outline",
            size: "sm",
            onClick: Y,
            disabled: !R,
            className: "gap-2",
            children: [e.jsx(jt, { className: "h-4 w-4" }), " Exportar PDF"],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
        children: [
          e.jsxs(ae, {
            className:
              "p-3 bg-gradient-to-br from-green-500/10 to-green-500/0 border-green-500/30",
            children: [
              e.jsx("p", {
                className: "text-[10px] uppercase text-green-700/80",
                children: "Entradas",
              }),
              e.jsx("p", {
                className: "text-lg font-bold text-green-600",
                children: l(x),
              }),
            ],
          }),
          e.jsxs(ae, {
            className:
              "p-3 bg-gradient-to-br from-red-500/10 to-red-500/0 border-red-500/30",
            children: [
              e.jsx("p", {
                className: "text-[10px] uppercase text-red-700/80",
                children: "Saídas",
              }),
              e.jsx("p", {
                className: "text-lg font-bold text-red-600",
                children: l(b),
              }),
            ],
          }),
          e.jsxs(ae, {
            className:
              "p-3 bg-gradient-to-br from-primary/10 to-primary/0 border-primary/30",
            children: [
              e.jsx("p", {
                className: "text-[10px] uppercase text-primary/80",
                children: "Saldo do dia",
              }),
              e.jsx("p", {
                className: $(
                  "text-lg font-bold",
                  w >= 0 ? "text-primary" : "text-destructive"
                ),
                children: l(w),
              }),
            ],
          }),
          e.jsxs(ae, {
            className:
              "p-3 bg-gradient-to-br from-blue-500/10 to-blue-500/0 border-blue-500/30",
            children: [
              e.jsx("p", {
                className: "text-[10px] uppercase text-blue-700/80",
                children: "Movimentações",
              }),
              e.jsx("p", {
                className: "text-lg font-bold text-blue-600",
                children: M.length,
              }),
            ],
          }),
        ],
      }),
      y.length > 0 &&
        (() => {
          const a = [...y].sort(
              (p, S) =>
                new Date(p.opened_at).getTime() -
                new Date(S.opened_at).getTime()
            ),
            r = a[0],
            o = [...a]
              .reverse()
              .find((p) => p.status === "closed" && p.closing_amount !== null),
            _ = Number(r?.opening_amount || 0),
            z = o ? Number(o.closing_amount || 0) : null,
            c = o ? Number(o.expected_amount || 0) : null,
            g = o && o.difference !== null ? Number(o.difference) : null,
            s = !o && a.some((p) => p.status === "open");
          return e.jsxs(ae, {
            className:
              "p-4 border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card shadow-md",
            children: [
              e.jsxs("h4", {
                className: "font-semibold text-sm mb-3 flex items-center gap-2",
                children: [
                  e.jsx(ce, { className: "h-4 w-4 text-primary" }),
                  " Abertura, fechamento e diferença do dia",
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-4 gap-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3",
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-[10px] uppercase text-emerald-700/80 tracking-wide flex items-center gap-1",
                        children: [
                          e.jsx(Fe, { className: "h-3 w-3" }),
                          " Início do dia",
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-xl font-bold text-emerald-600 tabular-nums",
                        children: l(_),
                      }),
                      e.jsxs("p", {
                        className: "text-[10px] text-muted-foreground mt-1",
                        children: [
                          "Aberto às ",
                          oe(r.opened_at),
                          " por ",
                          r.opened_by_name || "Proprietário",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "rounded-xl border border-blue-500/30 bg-blue-500/10 p-3",
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-[10px] uppercase text-blue-700/80 tracking-wide flex items-center gap-1",
                        children: [
                          e.jsx(na, { className: "h-3 w-3" }),
                          " Esperado no fim",
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-xl font-bold text-blue-600 tabular-nums",
                        children: c !== null ? l(c) : "—",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-muted-foreground mt-1",
                        children:
                          "Saldo inicial + entradas em dinheiro − saídas",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "rounded-xl border border-primary/30 bg-primary/10 p-3",
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-[10px] uppercase text-primary/80 tracking-wide flex items-center gap-1",
                        children: [
                          e.jsx(Ne, { className: "h-3 w-3" }),
                          " Fim do dia",
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-xl font-bold text-primary tabular-nums",
                        children: z !== null ? l(z) : s ? "Em andamento" : "—",
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-muted-foreground mt-1",
                        children: o
                          ? e.jsxs(e.Fragment, {
                              children: [
                                "Fechado às ",
                                oe(o.closed_at),
                                " por ",
                                o.closed_by_name || "—",
                              ],
                            })
                          : "Caixa ainda não foi fechado",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: $(
                      "rounded-xl border p-3",
                      g === null
                        ? "border-border/40 bg-muted/30"
                        : g === 0
                        ? "border-emerald-500/40 bg-emerald-500/10"
                        : g > 0
                        ? "border-amber-500/40 bg-amber-500/10"
                        : "border-destructive/40 bg-destructive/10"
                    ),
                    children: [
                      e.jsxs("p", {
                        className:
                          "text-[10px] uppercase tracking-wide flex items-center gap-1",
                        children: [
                          g === null
                            ? e.jsx(ce, { className: "h-3 w-3" })
                            : g === 0
                            ? e.jsx(ht, {
                                className: "h-3 w-3 text-emerald-600",
                              })
                            : e.jsx(De, {
                                className: $(
                                  "h-3 w-3",
                                  g > 0 ? "text-amber-600" : "text-destructive"
                                ),
                              }),
                          "Diferença",
                        ],
                      }),
                      e.jsx("p", {
                        className: $(
                          "text-xl font-bold tabular-nums",
                          g === null
                            ? "text-muted-foreground"
                            : g === 0
                            ? "text-emerald-600"
                            : g > 0
                            ? "text-amber-600"
                            : "text-destructive"
                        ),
                        children:
                          g === null
                            ? "—"
                            : g === 0
                            ? "Exato"
                            : g > 0
                            ? `+${l(g)}`
                            : `−${l(Math.abs(g))}`,
                      }),
                      e.jsx("p", {
                        className: "text-[10px] text-muted-foreground mt-1",
                        children:
                          g === null
                            ? "Disponível após o fechamento"
                            : g === 0
                            ? "Caixa bate com o esperado"
                            : g > 0
                            ? "Sobra no caixa (entrou a mais)"
                            : "Falta no caixa (está faltando)",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        })(),
      y.length > 0 &&
        e.jsxs(ae, {
          className: "p-4 border-l-4 border-l-emerald-500",
          children: [
            e.jsxs("h4", {
              className: "font-semibold text-sm mb-3 flex items-center gap-2",
              children: [
                e.jsx(ce, { className: "h-4 w-4 text-emerald-600" }),
                " Resumo do(s) caixa(s) do dia",
              ],
            }),
            e.jsx("div", {
              className: "space-y-3",
              children: y.map((a) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "rounded-xl border border-border/50 bg-muted/20 p-3",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-center justify-between gap-2 mb-2",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(de, {
                                className:
                                  a.status === "open"
                                    ? "bg-emerald-500"
                                    : "bg-muted-foreground",
                                children:
                                  a.status === "open" ? "Aberto" : "Fechado",
                              }),
                              e.jsxs("span", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                  oe(a.opened_at),
                                  " ",
                                  a.closed_at
                                    ? `→ ${oe(a.closed_at)}`
                                    : "→ em andamento",
                                ],
                              }),
                            ],
                          }),
                          a.status === "closed" &&
                            a.difference !== null &&
                            e.jsxs(de, {
                              variant:
                                Number(a.difference) === 0
                                  ? "outline"
                                  : Number(a.difference) > 0
                                  ? "default"
                                  : "destructive",
                              className: "gap-1",
                              children: [
                                Number(a.difference) === 0
                                  ? e.jsx(ht, { className: "h-3 w-3" })
                                  : e.jsx(De, { className: "h-3 w-3" }),
                                Number(a.difference) === 0
                                  ? "Exato"
                                  : Number(a.difference) > 0
                                  ? `Sobra ${l(Number(a.difference))}`
                                  : `Falta ${l(
                                      Math.abs(Number(a.difference))
                                    )}`,
                              ],
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs",
                        children: [
                          e.jsxs("div", {
                            className:
                              "rounded-lg bg-card p-2 border border-border/40",
                            children: [
                              e.jsx("p", {
                                className: "text-[10px] text-muted-foreground",
                                children: "Saldo inicial",
                              }),
                              e.jsx("p", {
                                className: "font-semibold",
                                children: l(a.opening_amount),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "rounded-lg bg-card p-2 border border-border/40",
                            children: [
                              e.jsx("p", {
                                className: "text-[10px] text-muted-foreground",
                                children: "Esperado",
                              }),
                              e.jsx("p", {
                                className: "font-semibold",
                                children:
                                  a.expected_amount !== null
                                    ? l(a.expected_amount || 0)
                                    : "—",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "rounded-lg bg-card p-2 border border-border/40",
                            children: [
                              e.jsx("p", {
                                className: "text-[10px] text-muted-foreground",
                                children: "Saldo físico",
                              }),
                              e.jsx("p", {
                                className: "font-semibold",
                                children:
                                  a.closing_amount !== null
                                    ? l(a.closing_amount || 0)
                                    : "—",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "rounded-lg bg-card p-2 border border-border/40",
                            children: [
                              e.jsx("p", {
                                className: "text-[10px] text-muted-foreground",
                                children: "Diferença",
                              }),
                              e.jsx("p", {
                                className: $(
                                  "font-semibold",
                                  a.difference === null ||
                                    Number(a.difference) === 0
                                    ? ""
                                    : Number(a.difference) > 0
                                    ? "text-green-600"
                                    : "text-destructive"
                                ),
                                children:
                                  a.difference !== null
                                    ? l(Number(a.difference))
                                    : "—",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-2 gap-3 mt-2 text-[11px] text-muted-foreground",
                        children: [
                          e.jsxs("div", {
                            children: [
                              "👤 Aberto por: ",
                              e.jsx("strong", {
                                className: "text-foreground",
                                children: a.opened_by_name || "—",
                              }),
                            ],
                          }),
                          a.closed_by_name &&
                            e.jsxs("div", {
                              children: [
                                "🔒 Fechado por: ",
                                e.jsx("strong", {
                                  className: "text-foreground",
                                  children: a.closed_by_name,
                                }),
                              ],
                            }),
                        ],
                      }),
                      a.opening_breakdown?.length || a.closing_breakdown?.length
                        ? e.jsxs(bt, {
                            className: "mt-2",
                            children: [
                              e.jsx(gt, {
                                asChild: !0,
                                children: e.jsxs("button", {
                                  className:
                                    "text-xs text-primary hover:underline flex items-center gap-1",
                                  children: [
                                    e.jsx(pt, { className: "h-3 w-3" }),
                                    " Ver detalhamento de cédulas/moedas",
                                  ],
                                }),
                              }),
                              e.jsxs(ft, {
                                className:
                                  "mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2",
                                children: [
                                  a.opening_breakdown?.length
                                    ? e.jsxs("div", {
                                        className:
                                          "rounded-lg bg-card p-2 border border-border/40",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-[10px] font-semibold mb-1",
                                            children: "Abertura",
                                          }),
                                          a.opening_breakdown.map((r, o) =>
                                            e.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "flex justify-between text-[11px]",
                                                children: [
                                                  e.jsxs("span", {
                                                    children: [
                                                      r.qty,
                                                      "× ",
                                                      l(r.value),
                                                    ],
                                                  }),
                                                  e.jsx("span", {
                                                    className: "font-medium",
                                                    children: l(
                                                      r.qty * r.value
                                                    ),
                                                  }),
                                                ],
                                              },
                                              o
                                            )
                                          ),
                                        ],
                                      })
                                    : null,
                                  a.closing_breakdown?.length
                                    ? e.jsxs("div", {
                                        className:
                                          "rounded-lg bg-card p-2 border border-border/40",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-[10px] font-semibold mb-1",
                                            children: "Fechamento",
                                          }),
                                          a.closing_breakdown.map((r, o) =>
                                            e.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "flex justify-between text-[11px]",
                                                children: [
                                                  e.jsxs("span", {
                                                    children: [
                                                      r.qty,
                                                      "× ",
                                                      l(r.value),
                                                    ],
                                                  }),
                                                  e.jsx("span", {
                                                    className: "font-medium",
                                                    children: l(
                                                      r.qty * r.value
                                                    ),
                                                  }),
                                                ],
                                              },
                                              o
                                            )
                                          ),
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          })
                        : null,
                      (a.opening_notes || a.closing_notes) &&
                        e.jsxs("div", {
                          className:
                            "mt-2 text-[11px] text-muted-foreground space-y-0.5",
                          children: [
                            a.opening_notes &&
                              e.jsxs("p", {
                                children: ["📝 Abertura: ", a.opening_notes],
                              }),
                            a.closing_notes &&
                              e.jsxs("p", {
                                children: ["📝 Fechamento: ", a.closing_notes],
                              }),
                          ],
                        }),
                    ],
                  },
                  a.id
                )
              ),
            }),
          ],
        }),
      f.length > 0 &&
        e.jsxs(ae, {
          className: "p-4 border-l-4 border-l-primary",
          children: [
            e.jsxs("h4", {
              className: "font-semibold text-sm mb-3 flex items-center gap-2",
              children: [
                e.jsx(xs, { className: "h-4 w-4 text-primary" }),
                " Totalizador por forma de pagamento",
              ],
            }),
            e.jsx("div", {
              className: "overflow-x-auto rounded-xl border border-border/40",
              children: e.jsxs("table", {
                className: "w-full text-xs sm:text-sm",
                children: [
                  e.jsx("thead", {
                    className: "bg-muted/40",
                    children: e.jsxs("tr", {
                      children: [
                        e.jsx("th", {
                          className: "text-left py-2 px-3",
                          children: "Forma",
                        }),
                        e.jsx("th", {
                          className: "text-right py-2 px-3",
                          children: "Entradas",
                        }),
                        e.jsx("th", {
                          className: "text-right py-2 px-3",
                          children: "Saídas",
                        }),
                        e.jsx("th", {
                          className: "text-right py-2 px-3",
                          children: "Líquido",
                        }),
                        e.jsx("th", {
                          className: "text-right py-2 px-3",
                          children: "Qtd",
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("tbody", {
                    children: [
                      f.map(([a, r]) => {
                        const o = r.income - r.expense;
                        return e.jsxs(
                          "tr",
                          {
                            className:
                              "border-t border-border/40 hover:bg-muted/20",
                            children: [
                              e.jsx("td", {
                                className: "py-2 px-3",
                                children: e.jsx(de, {
                                  variant: "outline",
                                  children: a,
                                }),
                              }),
                              e.jsx("td", {
                                className:
                                  "py-2 px-3 text-right text-green-600 font-medium",
                                children: l(r.income),
                              }),
                              e.jsx("td", {
                                className:
                                  "py-2 px-3 text-right text-red-600 font-medium",
                                children: l(r.expense),
                              }),
                              e.jsx("td", {
                                className: $(
                                  "py-2 px-3 text-right font-bold",
                                  o >= 0 ? "text-primary" : "text-destructive"
                                ),
                                children: l(o),
                              }),
                              e.jsx("td", {
                                className:
                                  "py-2 px-3 text-right text-muted-foreground",
                                children: r.count,
                              }),
                            ],
                          },
                          a
                        );
                      }),
                      e.jsxs("tr", {
                        className:
                          "border-t-2 border-border bg-muted/30 font-bold",
                        children: [
                          e.jsx("td", {
                            className: "py-2 px-3",
                            children: "Total",
                          }),
                          e.jsx("td", {
                            className: "py-2 px-3 text-right text-green-600",
                            children: l(x),
                          }),
                          e.jsx("td", {
                            className: "py-2 px-3 text-right text-red-600",
                            children: l(b),
                          }),
                          e.jsx("td", {
                            className: $(
                              "py-2 px-3 text-right",
                              w >= 0 ? "text-primary" : "text-destructive"
                            ),
                            children: l(w),
                          }),
                          e.jsx("td", {
                            className:
                              "py-2 px-3 text-right text-muted-foreground",
                            children: M.length,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
function Ds() {
  const { user: y } = Ua(),
    {
      effectiveUserId: M,
      isEmployee: n,
      employeeId: T,
      employeeName: P,
      permissions: l,
    } = Ya(),
    A = n && l?.caixa_bloqueado === !0,
    x = M || y?.id || "",
    { format: b } = Je(),
    { toast: w } = ra(),
    [f, se] = i.useState(null),
    [R, re] = i.useState([]),
    [Y, a] = i.useState(!1),
    [r, o] = i.useState(""),
    [_, z] = i.useState(""),
    [c, g] = i.useState([]),
    [s, p] = i.useState(!1),
    [S, N] = i.useState(!1),
    [v, q] = i.useState(""),
    [B, Nt] = i.useState(""),
    [G, vt] = i.useState([]),
    [_t, wt] = i.useState(!1),
    [la, Ke] = i.useState(!1),
    [Me, ke] = i.useState(null),
    [le, we] = i.useState(new Date()),
    [Ct, ia] = i.useState([]),
    [St, da] = i.useState([]),
    [I, Ft] = i.useState(n && T ? T : "all"),
    [he, ca] = i.useState({}),
    [Dt, ma] = i.useState([]),
    [V, xa] = i.useState({ key: "time", dir: "desc" }),
    [ua, et] = i.useState(1),
    [be, pa] = i.useState(25),
    [Ee, ha] = i.useState(""),
    [$e, ba] = i.useState(""),
    tt = new Date(),
    ga = new Date(tt.getFullYear(), tt.getMonth(), 1),
    [Z, fa] = i.useState(ga),
    [J, ja] = i.useState(tt),
    [O, ya] = i.useState({ key: "opened_at", dir: "desc" }),
    [Na, Ae] = i.useState(1),
    [ge, va] = i.useState(20),
    [Mt, kt] = i.useState(null),
    at = i.useMemo(() => c.reduce((t, d) => t + d.qty * d.value, 0), [c]),
    Te = i.useMemo(() => G.reduce((t, d) => t + d.qty * d.value, 0), [G]),
    Pe = async () => {
      if (!x) return;
      const { data: t } = await L.from("cash_registers")
        .select("*")
        .eq("user_id", x)
        .eq("status", "open")
        .order("opened_at", { ascending: !1 })
        .limit(1)
        .maybeSingle();
      se(t || null);
    },
    Ce = async () => {
      if (!x) return;
      const t = `${X(Z)}T00:00:00`,
        d = `${X(J)}T23:59:59.999`,
        { data: j } = await L.from("cash_registers")
          .select("*")
          .eq("user_id", x)
          .or(
            `and(opened_at.gte.${t},opened_at.lte.${d}),and(closed_at.gte.${t},closed_at.lte.${d})`
          )
          .order("opened_at", { ascending: !1 })
          .limit(1e3);
      re(j || []);
    };
  i.useEffect(() => {
    if (!x) return;
    Pe(), Ce();
    const t = L.channel(`cash_registers_rt_${x}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "cash_registers",
          filter: `user_id=eq.${x}`,
        },
        () => {
          Pe(), Ce();
        }
      )
      .subscribe();
    return () => {
      L.removeChannel(t);
    };
  }, [x]),
    i.useEffect(() => {
      Ce(), Ae(1);
    }, [Z, J, x]);
  const [K, Et] = i.useState({ income: 0, expense: 0, byMethod: {}, count: 0 });
  i.useEffect(() => {
    if (!f || !x) {
      Et({ income: 0, expense: 0, byMethod: {}, count: 0 });
      return;
    }
    const t = async () => {
      const { data: j } = await L.from("transactions")
          .select("amount, type, payment_method, created_at")
          .eq("user_id", x)
          .gte("created_at", f.opened_at),
        k = j || [];
      let u = 0,
        F = 0;
      const m = {};
      k.forEach((D) => {
        const ee = Number(D.amount) || 0;
        if (D.type === "income") {
          u += ee;
          const h = D.payment_method || "Não informado";
          m[h] = (m[h] || 0) + ee;
        } else D.type === "expense" && (F += ee);
      }),
        Et({ income: u, expense: F, byMethod: m, count: k.length });
    };
    t();
    const d = L.channel(`tx_for_caixa_${x}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "transactions",
          filter: `user_id=eq.${x}`,
        },
        t
      )
      .subscribe();
    return () => {
      L.removeChannel(d);
    };
  }, [f, x]);
  const ne = i.useMemo(() => {
    if (!f) return 0;
    const t = K.byMethod.Dinheiro || K.byMethod.dinheiro || 0;
    return Number(f.opening_amount || 0) + t - K.expense;
  }, [f, K]);
  i.useEffect(() => {
    const t = (d) => {
      const j = d.detail;
      if (j) {
        if (j.action === "register-open") {
          Le();
          const k = typeof j.args?.amount == "number" ? j.args.amount : void 0;
          k !== void 0 && o(String(k).replace(".", ",")), a(!0);
        }
        j.action === "register-close" &&
          (ze(), q(String(ne.toFixed(2)).replace(".", ",")), N(!0));
      }
    };
    return (
      window.addEventListener("bench-copilot:command", t),
      () => window.removeEventListener("bench-copilot:command", t)
    );
  }, [ne]),
    i.useEffect(() => {
      if (!x) return;
      const t = X(le),
        d = `${t}T00:00:00`,
        j = `${t}T23:59:59.999`,
        k = async () => {
          const [F, m, D, ee] = await Promise.all([
              L.from("cash_registers")
                .select("*")
                .eq("user_id", x)
                .or(
                  `and(opened_at.gte.${d},opened_at.lte.${j}),and(closed_at.gte.${d},closed_at.lte.${j})`
                )
                .order("opened_at", { ascending: !1 }),
              L.from("transactions")
                .select(
                  "id, description, amount, type, category, payment_method, date, created_at, created_by_employee_id"
                )
                .eq("user_id", x)
                .eq("date", t)
                .order("created_at", { ascending: !1 }),
              L.from("transactions")
                .select(
                  "id, description, amount, type, category, payment_method, date, created_at, created_by_employee_id"
                )
                .eq("user_id", x)
                .gte("created_at", d)
                .lte("created_at", j)
                .order("created_at", { ascending: !1 }),
              L.from("employees").select("id, name").eq("owner_id", x),
            ]),
            h = {};
          (ee.data || []).forEach((H) => {
            h[H.id] = H.name;
          }),
            ca(h),
            ma((ee.data || []).map((H) => ({ id: H.id, name: H.name }))),
            ia(F.data || []);
          const qe = new Map(),
            Ht = (H) => ({
              ...H,
              created_by_name: H.created_by_employee_id
                ? h[H.created_by_employee_id] || "Funcionário"
                : "Proprietário",
            });
          (m.data || []).forEach((H) => qe.set(H.id, Ht(H))),
            (D.data || []).forEach((H) => {
              qe.has(H.id) || qe.set(H.id, Ht(H));
            });
          const ka = Array.from(qe.values()).sort(
            (H, Ea) =>
              new Date(Ea.created_at).getTime() -
              new Date(H.created_at).getTime()
          );
          da(ka);
        };
      k();
      const u = L.channel(`day_explorer_${x}_${t}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "transactions",
            filter: `user_id=eq.${x}`,
          },
          k
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "cash_registers",
            filter: `user_id=eq.${x}`,
          },
          k
        )
        .subscribe();
      return () => {
        L.removeChannel(u);
      };
    }, [le, x]);
  const Se = (t) => (I === "all" ? !0 : I === "owner" ? !t : t === I),
    me = i.useMemo(
      () => St.filter((t) => Se(t.created_by_employee_id)),
      [St, I]
    ),
    _a = i.useMemo(
      () => Ct.filter((t) => Se(t.opened_by_employee_id)),
      [Ct, I]
    ),
    $t = i.useMemo(() => R.filter((t) => Se(t.opened_by_employee_id)), [R, I]),
    st = i.useMemo(
      () =>
        I === "all"
          ? "Todos os usuários"
          : I === "owner"
          ? "Proprietário"
          : he[I] || "Funcionário",
      [I, he]
    ),
    At = i.useMemo(() => {
      const t = Ee.trim().toLowerCase(),
        d = $e.trim().toLowerCase();
      return !t && !d
        ? me
        : me.filter(
            (j) =>
              !(
                (t &&
                  !`${j.description || ""} ${j.category || ""} ${
                    j.payment_method || ""
                  }`
                    .toLowerCase()
                    .includes(t)) ||
                (d && !(j.created_by_name || "").toLowerCase().includes(d))
              )
          );
    }, [me, Ee, $e]),
    xe = i.useMemo(() => {
      const t = [...At],
        d = V.dir === "asc" ? 1 : -1;
      return (
        t.sort((j, k) => {
          const u = (D) => {
              switch (V.key) {
                case "time":
                  return new Date(D.created_at).getTime();
                case "description":
                  return (D.description || "").toLowerCase();
                case "by":
                  return (D.created_by_name || "").toLowerCase();
                case "category":
                  return (D.category || "").toLowerCase();
                case "payment_method":
                  return (D.payment_method || "").toLowerCase();
                case "amount":
                  return (D.type === "income" ? 1 : -1) * Number(D.amount || 0);
              }
            },
            F = u(j),
            m = u(k);
          return F < m ? -1 * d : F > m ? 1 * d : 0;
        }),
        t
      );
    }, [At, V]),
    Oe = Math.max(1, Math.ceil(xe.length / be)),
    fe = Math.min(ua, Oe),
    wa = i.useMemo(() => xe.slice((fe - 1) * be, fe * be), [xe, fe, be]);
  i.useEffect(() => {
    et(1);
  }, [I, le, be, V, Ee, $e]);
  const W = i.useMemo(() => {
      const t = [...$t],
        d = O.dir === "asc" ? 1 : -1;
      return (
        t.sort((j, k) => {
          const u = (D) => {
              switch (O.key) {
                case "opened_at":
                  return new Date(D.opened_at).getTime();
                case "closed_at":
                  return D.closed_at ? new Date(D.closed_at).getTime() : 0;
                case "status":
                  return D.status;
                case "opening_amount":
                  return Number(D.opening_amount || 0);
                case "closing_amount":
                  return Number(D.closing_amount || 0);
                case "difference":
                  return Number(D.difference || 0);
                case "opened_by":
                  return (D.opened_by_name || "").toLowerCase();
              }
            },
            F = u(j),
            m = u(k);
          return F < m ? -1 * d : F > m ? 1 * d : 0;
        }),
        t
      );
    }, [$t, O]),
    He = Math.max(1, Math.ceil(W.length / ge)),
    je = Math.min(Na, He),
    Ca = i.useMemo(() => W.slice((je - 1) * ge, je * ge), [W, je, ge]);
  i.useEffect(() => {
    Ae(1);
  }, [I, ge, O]);
  const ye = (t) =>
      xa((d) => ({
        key: t,
        dir: d.key === t && d.dir === "desc" ? "asc" : "desc",
      })),
    ue = (t) =>
      ya((d) => ({
        key: t,
        dir: d.key === t && d.dir === "desc" ? "asc" : "desc",
      })),
    U = ({ active: t, dir: d }) =>
      t
        ? d === "asc"
          ? e.jsx(cs, { className: "h-3 w-3 inline ml-1" })
          : e.jsx(ms, { className: "h-3 w-3 inline ml-1" })
        : e.jsx(ds, { className: "h-3 w-3 inline ml-1 opacity-50" }),
    Sa = async () => {
      if (W.length === 0) {
        w({ title: "Nenhum caixa para exportar", variant: "destructive" });
        return;
      }
      const t = `${X(Z)}T00:00:00`,
        d = `${X(J)}T23:59:59.999`,
        { data: j } = await L.from("transactions")
          .select(
            "id, description, amount, type, category, payment_method, date, created_at, created_by_employee_id"
          )
          .eq("user_id", x)
          .gte("created_at", t)
          .lte("created_at", d)
          .order("created_at", { ascending: !1 }),
        k = (j || [])
          .map((h) => ({
            ...h,
            created_by_name: h.created_by_employee_id
              ? he[h.created_by_employee_id] || "Funcionário"
              : "Proprietário",
          }))
          .filter((h) => Se(h.created_by_employee_id)),
        u = [],
        F = (h) => `"${String(h ?? "").replace(/"/g, '""')}"`;
      u.push("Histórico de Caixas"),
        u.push(`Período: ${E(Z, "dd/MM/yyyy")} a ${E(J, "dd/MM/yyyy")}`),
        u.push(`Filtro: ${st}`),
        u.push(""),
        u.push("SESSÕES"),
        u.push(
          [
            "Status",
            "Aberto em",
            "Fechado em",
            "Aberto por",
            "Fechado por",
            "Saldo inicial",
            "Esperado",
            "Saldo físico",
            "Diferença",
            "Obs abertura",
            "Obs fechamento",
          ]
            .map(F)
            .join(",")
        ),
        W.forEach((h) => {
          u.push(
            [
              h.status,
              Q(h.opened_at),
              h.closed_at ? Q(h.closed_at) : "",
              h.opened_by_name || "Proprietário",
              h.closed_by_name || "",
              Number(h.opening_amount || 0).toFixed(2),
              h.expected_amount !== null
                ? Number(h.expected_amount).toFixed(2)
                : "",
              h.closing_amount !== null
                ? Number(h.closing_amount).toFixed(2)
                : "",
              h.difference !== null ? Number(h.difference).toFixed(2) : "",
              h.opening_notes || "",
              h.closing_notes || "",
            ]
              .map(F)
              .join(",")
          );
        }),
        u.push(""),
        u.push("MOVIMENTAÇÕES"),
        u.push(
          [
            "Data/Hora",
            "Tipo",
            "Descrição",
            "Categoria",
            "Pagamento",
            "Por",
            "Valor",
          ]
            .map(F)
            .join(",")
        ),
        k.forEach((h) => {
          u.push(
            [
              Q(h.created_at),
              h.type === "income" ? "Entrada" : "Saída",
              h.description,
              h.category || "",
              h.payment_method || "",
              h.created_by_name,
              Number(h.amount || 0).toFixed(2),
            ]
              .map(F)
              .join(",")
          );
        });
      const m = new Blob(
          [
            "\uFEFF" +
              u.join(`
`),
          ],
          { type: "text/csv;charset=utf-8" }
        ),
        D = URL.createObjectURL(m),
        ee = document.createElement("a");
      (ee.href = D),
        (ee.download = `historico_caixas_${X(Z)}_${X(J)}.csv`),
        ee.click(),
        URL.revokeObjectURL(D),
        w({ title: "✅ CSV exportado!" });
    },
    Fa = async () => {
      if (W.length === 0) {
        w({ title: "Nenhum caixa para exportar", variant: "destructive" });
        return;
      }
      const t = `${X(Z)}T00:00:00`,
        d = `${X(J)}T23:59:59.999`,
        { data: j } = await L.from("transactions")
          .select(
            "id, description, amount, type, category, payment_method, date, created_at, created_by_employee_id"
          )
          .eq("user_id", x)
          .gte("created_at", t)
          .lte("created_at", d)
          .order("created_at", { ascending: !1 }),
        k = (j || [])
          .map((m) => ({
            ...m,
            created_by_name: m.created_by_employee_id
              ? he[m.created_by_employee_id] || "Funcionário"
              : "Proprietário",
          }))
          .filter((m) => Se(m.created_by_employee_id)),
        u = new yt();
      let F = 14;
      u.setFontSize(16),
        u.setFont("helvetica", "bold"),
        u.text("Histórico de Caixas", 14, F),
        u.setFontSize(10),
        u.setFont("helvetica", "normal"),
        (F += 6),
        u.text(
          `${E(Z, "dd/MM/yyyy")} → ${E(J, "dd/MM/yyyy")}  ·  Filtro: ${st}`,
          14,
          F
        ),
        (F += 4),
        ie(u, {
          startY: F + 2,
          head: [
            [
              "Status",
              "Aberto",
              "Fechado",
              "Aberto por",
              "Fechado por",
              "Inicial",
              "Esperado",
              "Físico",
              "Dif.",
            ],
          ],
          body: W.map((m) => [
            m.status === "open" ? "Aberto" : "Fechado",
            Q(m.opened_at),
            m.closed_at ? Q(m.closed_at) : "—",
            m.opened_by_name || "Proprietário",
            m.closed_by_name || "—",
            b(m.opening_amount),
            m.expected_amount !== null ? b(m.expected_amount) : "—",
            m.closing_amount !== null ? b(m.closing_amount) : "—",
            m.difference !== null ? b(Number(m.difference)) : "—",
          ]),
          styles: { fontSize: 7 },
          headStyles: { fillColor: [16, 185, 129] },
        }),
        (F = u.lastAutoTable.finalY + 6),
        k.length &&
          (F > 230 && (u.addPage(), (F = 14)),
          u.setFont("helvetica", "bold"),
          u.setFontSize(11),
          u.text("Movimentações no período", 14, F),
          ie(u, {
            startY: F + 2,
            head: [
              [
                "Data/Hora",
                "Tipo",
                "Descrição",
                "Por",
                "Categoria",
                "Pagamento",
                "Valor",
              ],
            ],
            body: k.map((m) => [
              Q(m.created_at),
              m.type === "income" ? "Entrada" : "Saída",
              m.description,
              m.created_by_name,
              m.category || "—",
              m.payment_method || "—",
              (m.type === "income" ? "+" : "-") + b(Number(m.amount || 0)),
            ]),
            styles: { fontSize: 7 },
            headStyles: { fillColor: [51, 133, 50] },
          })),
        u.save(`historico_caixas_${X(Z)}_${X(J)}.pdf`),
        w({ title: "✅ PDF exportado!" });
    },
    Le = () => {
      o(""), z(""), g([]), p(!1);
    },
    ze = () => {
      q(""), Nt(""), vt([]), wt(!1), ke(null);
    },
    Da = async () => {
      if (A) {
        w({
          title: "Acesso bloqueado",
          description:
            "O proprietário desativou a abertura/fechamento de caixa para este funcionário.",
          variant: "destructive",
        }),
          a(!1);
        return;
      }
      if (f) {
        w({ title: "Já existe um caixa aberto", variant: "destructive" });
        return;
      }
      const t = c.length > 0 ? at : it(r);
      if (r.trim() === "" && c.length === 0) {
        w({ title: "Informe o saldo inicial", variant: "destructive" });
        return;
      }
      if (t < 0 || !Number.isFinite(t)) {
        w({ title: "Valor inválido", variant: "destructive" });
        return;
      }
      if (t > 1e6) {
        w({ title: "Valor acima do limite permitido", variant: "destructive" });
        return;
      }
      const { error: d } = await L.from("cash_registers").insert({
        user_id: x,
        opened_by_employee_id: n ? T : null,
        opened_by_name: n ? P || "Funcionário" : "Proprietário",
        opening_amount: t,
        opening_notes: _.trim() || null,
        opening_breakdown: c.length > 0 ? c : null,
        status: "open",
      });
      if (d) {
        w({
          title: "Erro ao abrir caixa",
          description: d.message,
          variant: "destructive",
        });
        return;
      }
      w({ title: "✅ Caixa aberto!", description: `Saldo inicial: ${b(t)}` }),
        a(!1),
        Le(),
        await Promise.all([Pe(), Ce()]);
    },
    Tt = () => {
      const t = G.length > 0;
      if (!t && v.trim() === "")
        return { error: "Informe o valor contado em dinheiro." };
      const d = t ? Te : it(v);
      if (!Number.isFinite(d) || d < 0)
        return { error: "Valor contado inválido." };
      if (d > 1e7) return { error: "Valor contado acima do limite permitido." };
      const j = d - ne,
        k = Math.max(Math.abs(ne), 100),
        u = Math.abs(j) >= k * 0.3 && Math.abs(j) >= 50;
      return { counted: d, diff: j, severeVariance: u };
    },
    Pt = () => {
      const t = Tt();
      return "error" in t ? (ke(t.error), null) : (ke(null), t);
    },
    Ot = async () => {
      if (!f) return;
      const t = Pt();
      if (!t) return;
      const { counted: d, diff: j } = t,
        { error: k } = await L.from("cash_registers")
          .update({
            closed_at: new Date().toISOString(),
            closing_amount: d,
            expected_amount: ne,
            difference: j,
            closing_notes: B.trim() || null,
            closing_breakdown: G.length > 0 ? G : null,
            closed_by_employee_id: n ? T : null,
            closed_by_name: n ? P || "Funcionário" : "Proprietário",
            status: "closed",
          })
          .eq("id", f.id);
      if (k) {
        w({
          title: "Erro ao fechar caixa",
          description: k.message,
          variant: "destructive",
        });
        return;
      }
      w({
        title: "🔒 Caixa fechado!",
        description:
          j === 0
            ? "Caixa fechou exato!"
            : j > 0
            ? `Sobra de ${b(j)}`
            : `Falta de ${b(Math.abs(j))}`,
      }),
        N(!1),
        Ke(!1),
        ze(),
        await Promise.all([Pe(), Ce()]);
    },
    Ma = () => {
      if (A) {
        w({
          title: "Acesso bloqueado",
          description:
            "O proprietário desativou a abertura/fechamento de caixa para este funcionário.",
          variant: "destructive",
        }),
          N(!1);
        return;
      }
      const t = Pt();
      if (t) {
        if (t.severeVariance) {
          Ke(!0);
          return;
        }
        Ot();
      }
    },
    pe = v || G.length > 0 ? (G.length > 0 ? Te : it(v)) - ne : null;
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsxs(ae, {
        className: $(
          "relative overflow-hidden p-4 sm:p-6 border-2 shadow-xl",
          f
            ? "bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-card border-emerald-500/40"
            : "bg-gradient-to-br from-muted/40 via-card to-card border-border"
        ),
        children: [
          f &&
            e.jsx("div", {
              className:
                "absolute -top-12 -right-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none",
            }),
          e.jsxs("div", {
            className:
              "relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className: $(
                      "h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center shadow-lg",
                      f
                        ? "bg-emerald-500/20 text-emerald-600 ring-2 ring-emerald-500/30"
                        : "bg-muted text-muted-foreground"
                    ),
                    children: e.jsx(ce, { className: "h-6 w-6 sm:h-7 sm:w-7" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("h3", {
                            className:
                              "text-lg sm:text-xl font-bold tracking-tight",
                            children: "Controle de Caixa",
                          }),
                          e.jsx(de, {
                            variant: f ? "default" : "secondary",
                            className: f
                              ? "bg-emerald-500 hover:bg-emerald-600 animate-pulse"
                              : "",
                            children: f ? "ABERTO" : "FECHADO",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children: f
                          ? e.jsxs(e.Fragment, {
                              children: [
                                "Aberto às ",
                                e.jsx("span", {
                                  className: "font-medium text-foreground",
                                  children: Q(f.opened_at),
                                }),
                                " por ",
                                e.jsx("span", {
                                  className: "font-medium text-foreground",
                                  children: f.opened_by_name || "—",
                                }),
                              ],
                            })
                          : "Abra o caixa para iniciar o registro de movimentações do dia",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex gap-2 w-full sm:w-auto",
                children: A
                  ? e.jsxs("div", {
                      className:
                        "w-full sm:w-auto inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-amber-700 text-sm font-medium",
                      children: [
                        e.jsx(Ne, { className: "h-4 w-4" }),
                        " Acesso ao caixa bloqueado pelo proprietário",
                      ],
                    })
                  : f
                  ? e.jsxs(C, {
                      onClick: () => {
                        ze(), N(!0);
                      },
                      variant: "destructive",
                      className: "w-full sm:w-auto gap-2 shadow-md",
                      children: [
                        e.jsx(Ne, { className: "h-4 w-4" }),
                        " Fechar caixa",
                      ],
                    })
                  : e.jsxs(C, {
                      onClick: () => {
                        Le(), a(!0);
                      },
                      className:
                        "w-full sm:w-auto gap-2 bg-emerald-600 hover:bg-emerald-700 shadow-md",
                      children: [
                        e.jsx(Fe, { className: "h-4 w-4" }),
                        " Abrir caixa",
                      ],
                    }),
              }),
            ],
          }),
          f &&
            e.jsxs("div", {
              className: "relative grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5",
              children: [
                e.jsxs("div", {
                  className:
                    "rounded-xl bg-card/80 backdrop-blur border border-border/50 p-3 hover:shadow-md transition-shadow",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-[10px] uppercase text-muted-foreground tracking-wide",
                      children: "Saldo inicial",
                    }),
                    e.jsx("p", {
                      className: "text-lg font-bold tabular-nums",
                      children: b(f.opening_amount),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "rounded-xl bg-green-500/10 border border-green-500/30 p-3 hover:shadow-md transition-shadow",
                  children: [
                    e.jsxs("p", {
                      className:
                        "text-[10px] uppercase text-green-700/80 tracking-wide flex items-center gap-1",
                      children: [
                        e.jsx(ta, { className: "h-3 w-3" }),
                        " Entradas",
                      ],
                    }),
                    e.jsx("p", {
                      className:
                        "text-lg font-bold text-green-600 tabular-nums",
                      children: b(K.income),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "rounded-xl bg-red-500/10 border border-red-500/30 p-3 hover:shadow-md transition-shadow",
                  children: [
                    e.jsxs("p", {
                      className:
                        "text-[10px] uppercase text-red-700/80 tracking-wide flex items-center gap-1",
                      children: [
                        e.jsx(Qa, { className: "h-3 w-3" }),
                        " Saídas",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-lg font-bold text-red-600 tabular-nums",
                      children: b(K.expense),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "rounded-xl bg-primary/10 border border-primary/30 p-3 hover:shadow-md transition-shadow",
                  children: [
                    e.jsxs("p", {
                      className:
                        "text-[10px] uppercase text-primary/80 tracking-wide flex items-center gap-1",
                      children: [
                        e.jsx(na, { className: "h-3 w-3" }),
                        " Esperado em dinheiro",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-lg font-bold text-primary tabular-nums",
                      children: b(ne),
                    }),
                  ],
                }),
              ],
            }),
          f &&
            Object.keys(K.byMethod).length > 0 &&
            e.jsxs("div", {
              className:
                "relative mt-4 rounded-xl border border-border/50 bg-card/60 backdrop-blur p-3",
              children: [
                e.jsxs("p", {
                  className:
                    "text-xs font-semibold mb-2 flex items-center gap-1",
                  children: [
                    e.jsx(Wa, { className: "h-3 w-3" }),
                    " Recebimentos por forma de pagamento",
                  ],
                }),
                e.jsx("div", {
                  className:
                    "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2",
                  children: Object.entries(K.byMethod).map(([t, d]) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center justify-between bg-card rounded-lg px-2 py-1.5 border border-border/40",
                        children: [
                          e.jsx("span", { className: "text-xs", children: t }),
                          e.jsx("span", {
                            className: "text-xs font-semibold tabular-nums",
                            children: b(d),
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
        ],
      }),
      e.jsx(ae, {
        className: "p-3 sm:p-5 border border-border/60 shadow-lg",
        children: e.jsxs(Xa, {
          defaultValue: "day",
          className: "w-full",
          children: [
            e.jsxs(Ga, {
              className: "grid grid-cols-2 w-full sm:w-auto",
              children: [
                e.jsxs(qt, {
                  value: "day",
                  className: "gap-2",
                  children: [
                    e.jsx(Be, { className: "h-3.5 w-3.5" }),
                    " Consultar por dia",
                  ],
                }),
                e.jsxs(qt, {
                  value: "history",
                  className: "gap-2",
                  children: [
                    e.jsx(Za, { className: "h-3.5 w-3.5" }),
                    " Caixas anteriores",
                  ],
                }),
              ],
            }),
            e.jsxs(Vt, {
              value: "day",
              className: "space-y-4 mt-4",
              children: [
                e.jsxs("div", {
                  className: "flex flex-wrap items-center gap-2",
                  children: [
                    e.jsxs(rt, {
                      children: [
                        e.jsx(nt, {
                          asChild: !0,
                          children: e.jsxs(C, {
                            variant: "outline",
                            className: "gap-2 shadow-sm",
                            children: [
                              e.jsx(Be, { className: "h-4 w-4" }),
                              E(le, "dd/MM/yyyy"),
                            ],
                          }),
                        }),
                        e.jsx(ot, {
                          className: "p-0 w-auto",
                          align: "start",
                          children: e.jsx(lt, {
                            mode: "single",
                            selected: le,
                            onSelect: (t) => t && we(t),
                            initialFocus: !0,
                            className: "p-3 pointer-events-auto",
                          }),
                        }),
                      ],
                    }),
                    e.jsx(C, {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => we(new Date()),
                      children: "Hoje",
                    }),
                    e.jsx(C, {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => {
                        const t = new Date(le);
                        t.setDate(t.getDate() - 1), we(t);
                      },
                      children: "← Anterior",
                    }),
                    e.jsx(C, {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => {
                        const t = new Date(le);
                        t.setDate(t.getDate() + 1), we(t);
                      },
                      children: "Próximo →",
                    }),
                    e.jsxs("div", {
                      className: "ml-auto flex items-center gap-2",
                      children: [
                        e.jsx(Xt, {
                          className: "h-3.5 w-3.5 text-muted-foreground",
                        }),
                        e.jsxs(Ie, {
                          value: I,
                          onValueChange: Ft,
                          children: [
                            e.jsx(Ue, {
                              className: "h-9 w-[200px]",
                              children: e.jsx(Ye, {
                                placeholder: "Filtrar por usuário",
                              }),
                            }),
                            e.jsxs(Qe, {
                              children: [
                                e.jsx(te, {
                                  value: "all",
                                  children: "Todos os usuários",
                                }),
                                e.jsx(te, {
                                  value: "owner",
                                  children: "Apenas Proprietário",
                                }),
                                n &&
                                  T &&
                                  e.jsxs(te, {
                                    value: T,
                                    children: [
                                      "Apenas eu (",
                                      P || "Funcionário",
                                      ")",
                                    ],
                                  }),
                                Dt.filter((t) => !(n && t.id === T)).map((t) =>
                                  e.jsx(
                                    te,
                                    { value: t.id, children: t.name },
                                    t.id
                                  )
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(js, {
                  registers: _a,
                  transactions: me,
                  viewDate: le,
                  employeesMap: he,
                  filterLabel: st,
                }),
                e.jsxs(ae, {
                  className: "p-3 sm:p-4",
                  children: [
                    e.jsxs("h4", {
                      className:
                        "text-sm font-semibold mb-3 flex items-center gap-2",
                      children: [
                        e.jsx(ut, {
                          className: "h-4 w-4 text-muted-foreground",
                        }),
                        " Movimentações detalhadas (",
                        xe.length,
                        xe.length !== me.length ? ` de ${me.length}` : "",
                        ")",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3",
                      children: [
                        e.jsx(ve, {
                          placeholder:
                            "Buscar por descrição, categoria ou pagamento…",
                          value: Ee,
                          onChange: (t) => ha(t.target.value),
                          className: "h-9",
                        }),
                        e.jsx(ve, {
                          placeholder: "Buscar por funcionário…",
                          value: $e,
                          onChange: (t) => ba(t.target.value),
                          className: "h-9",
                        }),
                      ],
                    }),
                    me.length === 0
                      ? e.jsxs("div", {
                          className:
                            "text-center text-sm text-muted-foreground py-6 border border-dashed rounded-xl",
                          children: [
                            "Sem movimentações nesta data",
                            I !== "all" ? " para este filtro." : ".",
                          ],
                        })
                      : xe.length === 0
                      ? e.jsx("div", {
                          className:
                            "text-center text-sm text-muted-foreground py-6 border border-dashed rounded-xl",
                          children: "Nenhuma movimentação corresponde à busca.",
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("div", {
                              className:
                                "overflow-x-auto rounded-xl border border-border/40",
                              children: e.jsxs("table", {
                                className:
                                  "w-full min-w-[720px] text-xs sm:text-sm",
                                children: [
                                  e.jsx("thead", {
                                    className: "bg-muted/40",
                                    children: e.jsxs("tr", {
                                      children: [
                                        e.jsxs("th", {
                                          className:
                                            "text-left py-2 px-3 cursor-pointer select-none",
                                          onClick: () => ye("time"),
                                          children: [
                                            "Hora ",
                                            e.jsx(U, {
                                              active: V.key === "time",
                                              dir: V.dir,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("th", {
                                          className:
                                            "text-left py-2 px-3 cursor-pointer select-none",
                                          onClick: () => ye("description"),
                                          children: [
                                            "Descrição ",
                                            e.jsx(U, {
                                              active: V.key === "description",
                                              dir: V.dir,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("th", {
                                          className:
                                            "text-left py-2 px-3 hidden lg:table-cell cursor-pointer select-none",
                                          onClick: () => ye("by"),
                                          children: [
                                            "Por ",
                                            e.jsx(U, {
                                              active: V.key === "by",
                                              dir: V.dir,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("th", {
                                          className:
                                            "text-left py-2 px-3 hidden md:table-cell cursor-pointer select-none",
                                          onClick: () => ye("category"),
                                          children: [
                                            "Categoria ",
                                            e.jsx(U, {
                                              active: V.key === "category",
                                              dir: V.dir,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("th", {
                                          className:
                                            "text-left py-2 px-3 hidden sm:table-cell cursor-pointer select-none",
                                          onClick: () => ye("payment_method"),
                                          children: [
                                            "Pagamento ",
                                            e.jsx(U, {
                                              active:
                                                V.key === "payment_method",
                                              dir: V.dir,
                                            }),
                                          ],
                                        }),
                                        e.jsxs("th", {
                                          className:
                                            "text-right py-2 px-3 cursor-pointer select-none",
                                          onClick: () => ye("amount"),
                                          children: [
                                            "Valor ",
                                            e.jsx(U, {
                                              active: V.key === "amount",
                                              dir: V.dir,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx("tbody", {
                                    children: wa.map((t) =>
                                      e.jsxs(
                                        "tr",
                                        {
                                          className:
                                            "border-t border-border/40 hover:bg-muted/20",
                                          children: [
                                            e.jsx("td", {
                                              className:
                                                "py-2 px-3 whitespace-nowrap font-mono text-muted-foreground",
                                              children: oe(t.created_at),
                                            }),
                                            e.jsx("td", {
                                              className: "py-2 px-3",
                                              children: t.description,
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "py-2 px-3 hidden lg:table-cell",
                                              children: e.jsxs("span", {
                                                className:
                                                  "inline-flex items-center gap-1 text-xs",
                                                children: [
                                                  e.jsx(Ze, {
                                                    className:
                                                      "h-3 w-3 text-muted-foreground",
                                                  }),
                                                  t.created_by_name ||
                                                    "Proprietário",
                                                ],
                                              }),
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "py-2 px-3 hidden md:table-cell text-muted-foreground",
                                              children: t.category || "—",
                                            }),
                                            e.jsx("td", {
                                              className:
                                                "py-2 px-3 hidden sm:table-cell",
                                              children: e.jsx(de, {
                                                variant: "outline",
                                                className: "text-[10px]",
                                                children:
                                                  t.payment_method || "—",
                                              }),
                                            }),
                                            e.jsxs("td", {
                                              className: $(
                                                "py-2 px-3 text-right font-semibold whitespace-nowrap tabular-nums",
                                                t.type === "income"
                                                  ? "text-green-600"
                                                  : "text-red-600"
                                              ),
                                              children: [
                                                t.type === "income" ? "+" : "-",
                                                b(Number(t.amount || 0)),
                                              ],
                                            }),
                                          ],
                                        },
                                        t.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className:
                                "flex flex-wrap items-center justify-between gap-2 mt-3 text-xs",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-muted-foreground",
                                      children: "Mostrar",
                                    }),
                                    e.jsxs(Ie, {
                                      value: String(be),
                                      onValueChange: (t) => pa(Number(t)),
                                      children: [
                                        e.jsx(Ue, {
                                          className: "h-8 w-[80px]",
                                          children: e.jsx(Ye, {}),
                                        }),
                                        e.jsx(Qe, {
                                          children: [10, 25, 50, 100].map((t) =>
                                            e.jsx(
                                              te,
                                              { value: String(t), children: t },
                                              t
                                            )
                                          ),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("span", {
                                      className: "text-muted-foreground",
                                      children: [
                                        "por página · ",
                                        xe.length,
                                        " no total",
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx(C, {
                                      variant: "outline",
                                      size: "sm",
                                      className: "h-8 w-8 p-0",
                                      disabled: fe <= 1,
                                      onClick: () =>
                                        et((t) => Math.max(1, t - 1)),
                                      children: e.jsx(Rt, {
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                    e.jsxs("span", {
                                      className: "px-2 tabular-nums",
                                      children: ["Página ", fe, " / ", Oe],
                                    }),
                                    e.jsx(C, {
                                      variant: "outline",
                                      size: "sm",
                                      className: "h-8 w-8 p-0",
                                      disabled: fe >= Oe,
                                      onClick: () =>
                                        et((t) => Math.min(Oe, t + 1)),
                                      children: e.jsx(Bt, {
                                        className: "h-4 w-4",
                                      }),
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
            e.jsxs(Vt, {
              value: "history",
              className: "space-y-3 mt-4",
              children: [
                e.jsxs("div", {
                  className: "flex flex-wrap items-center gap-2 pb-1",
                  children: [
                    e.jsxs(rt, {
                      children: [
                        e.jsx(nt, {
                          asChild: !0,
                          children: e.jsxs(C, {
                            variant: "outline",
                            size: "sm",
                            className: "gap-2",
                            children: [
                              e.jsx(Be, { className: "h-4 w-4" }),
                              " De: ",
                              E(Z, "dd/MM/yyyy"),
                            ],
                          }),
                        }),
                        e.jsx(ot, {
                          className: "p-0 w-auto",
                          align: "start",
                          children: e.jsx(lt, {
                            mode: "single",
                            selected: Z,
                            onSelect: (t) => t && fa(t),
                            initialFocus: !0,
                            className: "p-3 pointer-events-auto",
                          }),
                        }),
                      ],
                    }),
                    e.jsxs(rt, {
                      children: [
                        e.jsx(nt, {
                          asChild: !0,
                          children: e.jsxs(C, {
                            variant: "outline",
                            size: "sm",
                            className: "gap-2",
                            children: [
                              e.jsx(Be, { className: "h-4 w-4" }),
                              " Até: ",
                              E(J, "dd/MM/yyyy"),
                            ],
                          }),
                        }),
                        e.jsx(ot, {
                          className: "p-0 w-auto",
                          align: "start",
                          children: e.jsx(lt, {
                            mode: "single",
                            selected: J,
                            onSelect: (t) => t && ja(t),
                            initialFocus: !0,
                            className: "p-3 pointer-events-auto",
                          }),
                        }),
                      ],
                    }),
                    e.jsx(Xt, {
                      className: "h-3.5 w-3.5 text-muted-foreground ml-2",
                    }),
                    e.jsxs(Ie, {
                      value: I,
                      onValueChange: Ft,
                      children: [
                        e.jsx(Ue, {
                          className: "h-9 w-[200px]",
                          children: e.jsx(Ye, {
                            placeholder: "Filtrar por usuário",
                          }),
                        }),
                        e.jsxs(Qe, {
                          children: [
                            e.jsx(te, {
                              value: "all",
                              children: "Todos os usuários",
                            }),
                            e.jsx(te, {
                              value: "owner",
                              children: "Apenas Proprietário",
                            }),
                            n &&
                              T &&
                              e.jsxs(te, {
                                value: T,
                                children: [
                                  "Apenas eu (",
                                  P || "Funcionário",
                                  ")",
                                ],
                              }),
                            Dt.filter((t) => !(n && t.id === T)).map((t) =>
                              e.jsx(te, { value: t.id, children: t.name }, t.id)
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("span", {
                      className: "text-xs text-muted-foreground ml-1",
                      children: [W.length, " caixa(s)"],
                    }),
                    e.jsxs("div", {
                      className: "ml-auto flex gap-2",
                      children: [
                        e.jsxs(C, {
                          variant: "outline",
                          size: "sm",
                          onClick: Sa,
                          disabled: W.length === 0,
                          className: "gap-2",
                          children: [
                            e.jsx(oa, { className: "h-4 w-4" }),
                            " CSV",
                          ],
                        }),
                        e.jsxs(C, {
                          variant: "outline",
                          size: "sm",
                          onClick: Fa,
                          disabled: W.length === 0,
                          className: "gap-2",
                          children: [
                            e.jsx(jt, { className: "h-4 w-4" }),
                            " PDF",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                W.length === 0
                  ? e.jsx("div", {
                      className:
                        "text-center text-sm text-muted-foreground py-6 border border-dashed rounded-xl",
                      children: "Nenhum caixa registrado neste período/filtro.",
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          className:
                            "overflow-x-auto rounded-xl border border-border/40",
                          children: e.jsxs("table", {
                            className:
                              "w-full min-w-[860px] text-xs sm:text-sm",
                            children: [
                              e.jsx("thead", {
                                className: "bg-muted/40",
                                children: e.jsxs("tr", {
                                  children: [
                                    e.jsxs("th", {
                                      className:
                                        "text-left py-2 px-3 cursor-pointer select-none",
                                      onClick: () => ue("status"),
                                      children: [
                                        "Status ",
                                        e.jsx(U, {
                                          active: O.key === "status",
                                          dir: O.dir,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("th", {
                                      className:
                                        "text-left py-2 px-3 cursor-pointer select-none",
                                      onClick: () => ue("opened_at"),
                                      children: [
                                        "Aberto em ",
                                        e.jsx(U, {
                                          active: O.key === "opened_at",
                                          dir: O.dir,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("th", {
                                      className:
                                        "text-left py-2 px-3 cursor-pointer select-none hidden md:table-cell",
                                      onClick: () => ue("closed_at"),
                                      children: [
                                        "Fechado em ",
                                        e.jsx(U, {
                                          active: O.key === "closed_at",
                                          dir: O.dir,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("th", {
                                      className:
                                        "text-left py-2 px-3 cursor-pointer select-none",
                                      onClick: () => ue("opened_by"),
                                      children: [
                                        "Por ",
                                        e.jsx(U, {
                                          active: O.key === "opened_by",
                                          dir: O.dir,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("th", {
                                      className:
                                        "text-right py-2 px-3 cursor-pointer select-none hidden sm:table-cell",
                                      onClick: () => ue("opening_amount"),
                                      children: [
                                        "Inicial ",
                                        e.jsx(U, {
                                          active: O.key === "opening_amount",
                                          dir: O.dir,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("th", {
                                      className:
                                        "text-right py-2 px-3 cursor-pointer select-none hidden lg:table-cell",
                                      onClick: () => ue("closing_amount"),
                                      children: [
                                        "Fechado ",
                                        e.jsx(U, {
                                          active: O.key === "closing_amount",
                                          dir: O.dir,
                                        }),
                                      ],
                                    }),
                                    e.jsxs("th", {
                                      className:
                                        "text-right py-2 px-3 cursor-pointer select-none",
                                      onClick: () => ue("difference"),
                                      children: [
                                        "Diferença ",
                                        e.jsx(U, {
                                          active: O.key === "difference",
                                          dir: O.dir,
                                        }),
                                      ],
                                    }),
                                    e.jsx("th", {
                                      className:
                                        "text-center py-2 px-3 w-[60px]",
                                      children: "Ver",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("tbody", {
                                children: Ca.map((t) =>
                                  e.jsxs(
                                    "tr",
                                    {
                                      className:
                                        "border-t border-border/40 hover:bg-muted/20 cursor-pointer",
                                      onClick: () => we(new Date(t.opened_at)),
                                      children: [
                                        e.jsx("td", {
                                          className: "py-2 px-3",
                                          children: e.jsx(de, {
                                            className:
                                              t.status === "open"
                                                ? "bg-emerald-500"
                                                : "bg-muted-foreground",
                                            children:
                                              t.status === "open"
                                                ? "Aberto"
                                                : "Fechado",
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className:
                                            "py-2 px-3 whitespace-nowrap",
                                          children: Q(t.opened_at),
                                        }),
                                        e.jsx("td", {
                                          className:
                                            "py-2 px-3 whitespace-nowrap hidden md:table-cell",
                                          children: t.closed_at
                                            ? Q(t.closed_at)
                                            : "—",
                                        }),
                                        e.jsx("td", {
                                          className: "py-2 px-3",
                                          children: e.jsxs("span", {
                                            className:
                                              "inline-flex items-center gap-1",
                                            children: [
                                              e.jsx(Ze, {
                                                className:
                                                  "h-3 w-3 text-muted-foreground",
                                              }),
                                              t.opened_by_name ||
                                                "Proprietário",
                                              t.closed_by_name &&
                                                t.closed_by_name !==
                                                  t.opened_by_name &&
                                                e.jsxs(e.Fragment, {
                                                  children: [
                                                    " → ",
                                                    e.jsx("span", {
                                                      className:
                                                        "text-muted-foreground",
                                                      children:
                                                        t.closed_by_name,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        }),
                                        e.jsx("td", {
                                          className:
                                            "py-2 px-3 text-right tabular-nums hidden sm:table-cell",
                                          children: b(t.opening_amount),
                                        }),
                                        e.jsx("td", {
                                          className:
                                            "py-2 px-3 text-right tabular-nums hidden lg:table-cell",
                                          children:
                                            t.closing_amount !== null
                                              ? b(t.closing_amount || 0)
                                              : "—",
                                        }),
                                        e.jsx("td", {
                                          className: "py-2 px-3 text-right",
                                          children:
                                            t.difference !== null
                                              ? e.jsx(de, {
                                                  variant:
                                                    Number(t.difference) === 0
                                                      ? "outline"
                                                      : Number(t.difference) > 0
                                                      ? "default"
                                                      : "destructive",
                                                  children:
                                                    Number(t.difference) === 0
                                                      ? "Exato"
                                                      : Number(t.difference) > 0
                                                      ? `+${b(
                                                          Number(t.difference)
                                                        )}`
                                                      : `−${b(
                                                          Math.abs(
                                                            Number(t.difference)
                                                          )
                                                        )}`,
                                                })
                                              : "—",
                                        }),
                                        e.jsx("td", {
                                          className: "py-2 px-3 text-center",
                                          onClick: (d) => d.stopPropagation(),
                                          children: e.jsx(C, {
                                            variant: "ghost",
                                            size: "icon",
                                            className:
                                              "h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary",
                                            onClick: () => kt(t),
                                            title:
                                              "Ver movimentações deste caixa",
                                            children: e.jsx(Ja, {
                                              className: "h-4 w-4",
                                            }),
                                          }),
                                        }),
                                      ],
                                    },
                                    t.id
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "flex flex-wrap items-center justify-between gap-2 text-xs",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx("span", {
                                  className: "text-muted-foreground",
                                  children: "Mostrar",
                                }),
                                e.jsxs(Ie, {
                                  value: String(ge),
                                  onValueChange: (t) => va(Number(t)),
                                  children: [
                                    e.jsx(Ue, {
                                      className: "h-8 w-[80px]",
                                      children: e.jsx(Ye, {}),
                                    }),
                                    e.jsx(Qe, {
                                      children: [10, 20, 50, 100].map((t) =>
                                        e.jsx(
                                          te,
                                          { value: String(t), children: t },
                                          t
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsx("span", {
                                  className: "text-muted-foreground",
                                  children: "por página",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx(C, {
                                  variant: "outline",
                                  size: "sm",
                                  className: "h-8 w-8 p-0",
                                  disabled: je <= 1,
                                  onClick: () => Ae((t) => Math.max(1, t - 1)),
                                  children: e.jsx(Rt, { className: "h-4 w-4" }),
                                }),
                                e.jsxs("span", {
                                  className: "px-2 tabular-nums",
                                  children: ["Página ", je, " / ", He],
                                }),
                                e.jsx(C, {
                                  variant: "outline",
                                  size: "sm",
                                  className: "h-8 w-8 p-0",
                                  disabled: je >= He,
                                  onClick: () => Ae((t) => Math.min(He, t + 1)),
                                  children: e.jsx(Bt, { className: "h-4 w-4" }),
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
      e.jsx(dt, {
        open: Y,
        onOpenChange: (t) => {
          a(t), t || Le();
        },
        children: e.jsxs(ct, {
          className:
            "w-[calc(100vw-1rem)] max-w-lg max-h-[92vh] overflow-y-auto p-4 sm:p-6 gap-3 sm:gap-4 rounded-2xl",
          children: [
            e.jsxs(mt, {
              className: "space-y-1",
              children: [
                e.jsxs(xt, {
                  className: "flex items-center gap-2 text-base sm:text-lg",
                  children: [
                    e.jsx(Fe, {
                      className: "h-5 w-5 text-emerald-600 shrink-0",
                    }),
                    " Abrir caixa",
                  ],
                }),
                e.jsx(It, {
                  className: "text-xs sm:text-sm",
                  children:
                    "Informe o valor em dinheiro existente no caixa neste momento.",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsxs(We, {
                      className: "text-sm",
                      children: [
                        "Valor inicial em dinheiro ",
                        e.jsx("span", {
                          className: "text-destructive",
                          children: "*",
                        }),
                      ],
                    }),
                    e.jsx(ve, {
                      placeholder: "0,00",
                      value: c.length > 0 ? at.toFixed(2).replace(".", ",") : r,
                      onChange: (t) => {
                        o(t.target.value.replace(/[^\d,]/g, ""));
                      },
                      disabled: c.length > 0,
                      inputMode: "decimal",
                      className: "text-base font-semibold tabular-nums",
                    }),
                    c.length > 0 &&
                      e.jsx("p", {
                        className: "text-[11px] text-muted-foreground",
                        children: "Calculado a partir do detalhamento abaixo.",
                      }),
                  ],
                }),
                e.jsxs(bt, {
                  open: s,
                  onOpenChange: p,
                  children: [
                    e.jsx(gt, {
                      asChild: !0,
                      children: e.jsxs(C, {
                        variant: "outline",
                        size: "sm",
                        className:
                          "w-full justify-between h-auto py-2 text-left",
                        children: [
                          e.jsxs("span", {
                            className:
                              "flex items-center gap-2 text-xs sm:text-sm",
                            children: [
                              e.jsx(_e, { className: "h-4 w-4 shrink-0" }),
                              " Detalhar cédulas e moedas ",
                              e.jsx("span", {
                                className:
                                  "text-muted-foreground hidden sm:inline",
                                children: "(opcional)",
                              }),
                            ],
                          }),
                          e.jsx(pt, {
                            className: $(
                              "h-4 w-4 transition-transform shrink-0",
                              s && "rotate-180"
                            ),
                          }),
                        ],
                      }),
                    }),
                    e.jsx(ft, {
                      className: "mt-2",
                      children: e.jsx(Kt, { value: c, onChange: g, total: at }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsx(We, {
                      className: "text-sm",
                      children: "Observação (opcional)",
                    }),
                    e.jsx(Ut, {
                      placeholder: "Ex: troco do dia anterior...",
                      value: _,
                      onChange: (t) => z(t.target.value.slice(0, 500)),
                      rows: 2,
                      maxLength: 500,
                      className: "resize-none",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(Yt, {
              className:
                "flex-col-reverse sm:flex-row gap-2 sm:gap-2 pt-2 border-t",
              children: [
                e.jsx(C, {
                  variant: "outline",
                  onClick: () => a(!1),
                  className: "w-full sm:w-auto",
                  children: "Cancelar",
                }),
                e.jsxs(C, {
                  onClick: Da,
                  className:
                    "w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 gap-2",
                  children: [
                    e.jsx(Fe, { className: "h-4 w-4" }),
                    " Abrir caixa",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(dt, {
        open: S,
        onOpenChange: (t) => {
          N(t), t || ze();
        },
        children: e.jsxs(ct, {
          className:
            "w-[calc(100vw-1rem)] max-w-lg max-h-[92vh] overflow-y-auto p-4 sm:p-6 gap-3 sm:gap-4 rounded-2xl",
          children: [
            e.jsxs(mt, {
              className: "space-y-1",
              children: [
                e.jsxs(xt, {
                  className: "flex items-center gap-2 text-base sm:text-lg",
                  children: [
                    e.jsx(Ne, {
                      className: "h-5 w-5 text-destructive shrink-0",
                    }),
                    " Fechar caixa",
                  ],
                }),
                e.jsx(It, {
                  className: "text-xs sm:text-sm",
                  children:
                    "Conte o dinheiro físico no caixa e informe o valor para conferência.",
                }),
              ],
            }),
            f &&
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-2 mb-2 text-sm",
                children: [
                  e.jsxs("div", {
                    className: "rounded-lg bg-muted/40 p-2",
                    children: [
                      e.jsx("p", {
                        className: "text-[10px] text-muted-foreground",
                        children: "Inicial",
                      }),
                      e.jsx("p", {
                        className: "font-bold tabular-nums",
                        children: b(f.opening_amount),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "rounded-lg bg-primary/10 p-2",
                    children: [
                      e.jsx("p", {
                        className: "text-[10px] text-primary/80",
                        children: "Esperado em dinheiro",
                      }),
                      e.jsx("p", {
                        className: "font-bold text-primary tabular-nums",
                        children: b(ne),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "rounded-lg bg-green-500/10 p-2",
                    children: [
                      e.jsx("p", {
                        className: "text-[10px] text-green-700/80",
                        children: "Entradas",
                      }),
                      e.jsx("p", {
                        className: "font-bold text-green-600 tabular-nums",
                        children: b(K.income),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "rounded-lg bg-red-500/10 p-2",
                    children: [
                      e.jsx("p", {
                        className: "text-[10px] text-red-700/80",
                        children: "Saídas",
                      }),
                      e.jsx("p", {
                        className: "font-bold text-red-600 tabular-nums",
                        children: b(K.expense),
                      }),
                    ],
                  }),
                ],
              }),
            e.jsx(aa, { className: "my-2" }),
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs(We, {
                      children: [
                        "Valor contado em dinheiro ",
                        e.jsx("span", {
                          className: "text-destructive",
                          children: "*",
                        }),
                      ],
                    }),
                    e.jsx(ve, {
                      placeholder: "0,00",
                      value: G.length > 0 ? Te.toFixed(2).replace(".", ",") : v,
                      onChange: (t) => {
                        q(t.target.value.replace(/[^\d,]/g, "")), ke(null);
                      },
                      disabled: G.length > 0,
                      inputMode: "decimal",
                      "aria-invalid": !!Me,
                    }),
                    Me &&
                      e.jsxs("p", {
                        className:
                          "text-xs text-destructive mt-1 flex items-center gap-1",
                        children: [
                          e.jsx(De, { className: "h-3 w-3" }),
                          " ",
                          Me,
                        ],
                      }),
                    pe !== null &&
                      !Me &&
                      e.jsxs("p", {
                        className: $(
                          "text-xs mt-1 flex items-center gap-1",
                          pe === 0
                            ? "text-muted-foreground"
                            : pe > 0
                            ? "text-green-600"
                            : "text-destructive"
                        ),
                        children: [
                          pe === 0
                            ? e.jsx(ht, { className: "h-3 w-3" })
                            : e.jsx(De, { className: "h-3 w-3" }),
                          "Diferença: ",
                          b(pe),
                          " ",
                          pe > 0 ? "(sobra)" : pe < 0 ? "(falta)" : "(exato)",
                        ],
                      }),
                  ],
                }),
                e.jsxs(bt, {
                  open: _t,
                  onOpenChange: wt,
                  children: [
                    e.jsx(gt, {
                      asChild: !0,
                      children: e.jsxs(C, {
                        variant: "outline",
                        size: "sm",
                        className: "w-full justify-between",
                        children: [
                          e.jsxs("span", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(_e, { className: "h-4 w-4" }),
                              " Detalhar cédulas e moedas ",
                              e.jsx("span", {
                                className: "text-muted-foreground",
                                children: "(opcional)",
                              }),
                            ],
                          }),
                          e.jsx(pt, {
                            className: $(
                              "h-4 w-4 transition-transform",
                              _t && "rotate-180"
                            ),
                          }),
                        ],
                      }),
                    }),
                    e.jsx(ft, {
                      className: "mt-2",
                      children: e.jsx(Kt, {
                        value: G,
                        onChange: vt,
                        total: Te,
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(We, { children: "Observação (opcional)" }),
                    e.jsx(Ut, {
                      placeholder: "Ex: sangria, retiradas...",
                      value: B,
                      onChange: (t) => Nt(t.target.value.slice(0, 500)),
                      rows: 2,
                      maxLength: 500,
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(Yt, {
              className: "flex-col-reverse sm:flex-row gap-2 pt-2 border-t",
              children: [
                e.jsx(C, {
                  variant: "outline",
                  onClick: () => N(!1),
                  className: "w-full sm:w-auto",
                  children: "Cancelar",
                }),
                e.jsxs(C, {
                  onClick: Ma,
                  variant: "destructive",
                  className: "w-full sm:w-auto gap-2",
                  children: [
                    e.jsx(Ne, { className: "h-4 w-4" }),
                    " Confirmar fechamento",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(Ka, {
        open: la,
        onOpenChange: Ke,
        children: e.jsxs(es, {
          children: [
            e.jsxs(ts, {
              children: [
                e.jsxs(as, {
                  className: "flex items-center gap-2 text-amber-600",
                  children: [
                    e.jsx(De, { className: "h-5 w-5" }),
                    " Diferença muito alta detectada",
                  ],
                }),
                e.jsx(ss, {
                  children: (() => {
                    const t = Tt();
                    if ("error" in t) return null;
                    const d = t.diff > 0 ? "sobra" : "falta";
                    return e.jsxs(e.Fragment, {
                      children: [
                        "O valor contado é ",
                        e.jsx("strong", { children: b(t.counted) }),
                        " e o esperado em dinheiro é ",
                        e.jsx("strong", { children: b(ne) }),
                        ".",
                        e.jsx("br", {}),
                        "Diferença: ",
                        e.jsxs("strong", {
                          className:
                            t.diff > 0 ? "text-green-600" : "text-destructive",
                          children: [b(Math.abs(t.diff)), " (", d, ")"],
                        }),
                        ".",
                        e.jsx("br", {}),
                        e.jsx("br", {}),
                        "Confirma que recontou e deseja fechar o caixa mesmo assim?",
                      ],
                    });
                  })(),
                }),
              ],
            }),
            e.jsxs(rs, {
              children: [
                e.jsx(ns, { children: "Voltar e revisar" }),
                e.jsx(os, {
                  onClick: Ot,
                  className: "bg-destructive hover:bg-destructive/90",
                  children: "Confirmar mesmo assim",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(ps, {
        open: !!Mt,
        onOpenChange: (t) => {
          t || kt(null);
        },
        register: Mt,
        userId: x,
        employeesMap: he,
      }),
    ],
  });
}
export { Ds as C };
