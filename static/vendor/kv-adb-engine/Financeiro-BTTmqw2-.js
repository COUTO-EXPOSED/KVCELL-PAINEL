import {
  r as n,
  i as Ke,
  j as e,
  D as We,
  c as Xe,
  a_ as Ge,
  d as Qe,
  n as H,
  I as de,
  B as N,
  s as Us,
  a8 as Oe,
  bm as Ue,
  c7 as vs,
  bn as Ys,
  bo as Ks,
  bp as Ws,
  bq as Xs,
  br as Gs,
  bs as Qs,
  bt as Js,
  bu as Zs,
  w as j,
  cD as Re,
  cm as nt,
  cn as lt,
  ca as He,
  d6 as ja,
  cR as ot,
  cS as xs,
  cT as us,
  cU as hs,
  cV as ps,
  cW as gs,
  d7 as ts,
  d8 as rs,
  a$ as Le,
  bI as $e,
  d9 as fa,
  b4 as Ye,
  da as ns,
  b5 as fe,
  b6 as ye,
  b7 as ve,
  b8 as be,
  b9 as _,
  db as ct,
  dc as As,
  ad as Fs,
  dd as ea,
  ae as ls,
  k as Me,
  G as z,
  bb as ss,
  bg as sa,
  bc as Es,
  bd as Ms,
  be as Rs,
  bf as as,
  bh as aa,
  cd as fs,
  cb as Da,
  cc as Pa,
  bS as os,
  b3 as Ae,
  bW as cs,
  bj as me,
  bk as qe,
  bl as ta,
  de as it,
  b0 as ka,
  bU as ys,
  b2 as dt,
  c2 as ra,
  bX as mt,
  df as na,
  X as xt,
  ct as ya,
  dg as Ta,
  h as la,
  Z as ut,
  C as ht,
  bZ as pt,
  cl as Fa,
  z as bs,
  T as Is,
  by as oa,
  bT as js,
  bB as Ea,
  bC as Ma,
  bD as ke,
  bE as Te,
  cz as Ra,
  dh as ca,
  di as Bs,
  dj as va,
  cY as Ia,
  dk as gt,
  dl as ba,
  dm as jt,
  p as ft,
  a9 as _s,
  aa as ws,
  cI as yt,
  cJ as vt,
  dn as bt,
  u as Nt,
  dp as _t,
  ce as wt,
  cf as Ct,
  dq as Na,
  dr as St,
  ds as Dt,
  dt as Pt,
  cy as kt,
  bK as Tt,
  du as Ft,
  dv as Et,
  dw as Mt,
  dx as Hs,
  cA as Rt,
} from "./index-V8ZHCWL2.js";
import { C as is } from "./calendar-D5yT29JG.js";
import { P as It, a as At, S as qt } from "./SalesHistoryDialog-a-7h4DoN.js";
import { a as Ot, b as Vt } from "./financeReportPDFGenerator-qoM5ezYg.js";
import { C as Aa } from "./CurrencyExportDialog-HmiEHQbG.js";
import { F as $t } from "./filter-zlxD6zAv.js";
import { A as Lt } from "./arrow-up-down-Bp1BbkwY.js";
import { L as zt, a as _a } from "./LineChart-B4BF0mru.js";
import { L as Bt } from "./Legend-D2w1zv2n.js";
import { M as Ht } from "./minus-BvnD96RC.js";
import { P as Ut } from "./percent-Bgqp83iA.js";
import { C as Yt } from "./coins-BAvQgDWQ.js";
import {
  T as Cs,
  a as Ss,
  b as Pe,
  c as J,
  d as Ds,
  e as Y,
} from "./table-Dmiq7g5Z.js";
import { S as wa } from "./sun-P4wkve1z.js";
import { T as Ca } from "./type-BY7-f7Mh.js";
import { T as Kt, a as Wt } from "./toggle-right-Dh1xU7WQ.js";
import { C as Xt } from "./CashRegisterPanel-BVzuOyMf.js";
import "./isSameDay-C3Dd1gMO.js";
import "./isBefore-BYSD3akg.js";
import "./layers-D35uilGq.js";
import "./getRadiusAndStrokeWidthFromDot-BVjcHO9P.js";
import "./arrow-up-right-BQKFXF8e.js";
import "./arrow-up-BO8-gqvp.js";
function Gt({ open: x, onOpenChange: S, type: p, onCategoryCreated: t }) {
  const [b, P] = n.useState(""),
    [u, r] = n.useState(!1),
    [g, V] = n.useState([]),
    [T, q] = n.useState(!1),
    [f, K] = n.useState(null),
    { toast: R } = Ke(),
    l = async () => {
      const {
        data: { user: E },
      } = await j.auth.getUser();
      if (!E) return;
      q(!0);
      const { data: C, error: D } = await j
        .from("custom_categories")
        .select("id, name")
        .eq("user_id", E.id)
        .eq("type", p)
        .order("name");
      q(!1), !D && C && V(C);
    };
  n.useEffect(() => {
    x && l();
  }, [x, p]);
  const m = async (E) => {
      if ((E.preventDefault(), !b.trim())) {
        R({ title: "Nome da categoria é obrigatório", variant: "destructive" });
        return;
      }
      r(!0);
      const {
        data: { user: C },
      } = await j.auth.getUser();
      if (!C) {
        R({ title: "Você precisa estar logado", variant: "destructive" }),
          r(!1);
        return;
      }
      const { error: D } = await j
        .from("custom_categories")
        .insert({ user_id: C.id, name: b.trim(), type: p });
      if ((r(!1), D)) {
        R({
          title: "Erro ao criar categoria",
          description: D.message,
          variant: "destructive",
        });
        return;
      }
      R({ title: "Categoria criada com sucesso!" }), P(""), await l(), t();
    },
    L = async () => {
      if (!f) return;
      const { error: E } = await j
        .from("custom_categories")
        .delete()
        .eq("id", f.id);
      if (E) {
        R({
          title: "Erro ao excluir",
          description: E.message,
          variant: "destructive",
        });
        return;
      }
      R({ title: "Categoria excluída" }), K(null), await l(), t();
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(We, {
        open: x,
        onOpenChange: S,
        children: e.jsxs(Xe, {
          className: "w-[95vw] max-w-md max-h-[90vh] overflow-y-auto",
          children: [
            e.jsx(Ge, {
              children: e.jsxs(Qe, {
                children: [
                  "Categorias ",
                  p === "income" ? "de Receita" : "de Despesa",
                ],
              }),
            }),
            e.jsx("form", {
              onSubmit: m,
              className: "space-y-4",
              children: e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(H, {
                    htmlFor: "category-name",
                    children: "Nova categoria",
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsx(de, {
                        id: "category-name",
                        value: b,
                        onChange: (E) => P(E.target.value),
                        placeholder: "Ex: Consultoria, Manutenção...",
                        maxLength: 50,
                      }),
                      e.jsx(N, {
                        type: "submit",
                        disabled: u,
                        children: u
                          ? e.jsx(Us, { className: "w-4 h-4 animate-spin" })
                          : e.jsx(Oe, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className: "space-y-2 mt-2",
              children: [
                e.jsx(H, { children: "Suas categorias personalizadas" }),
                T
                  ? e.jsx("div", {
                      className:
                        "text-center text-muted-foreground py-3 text-sm",
                      children: "Carregando...",
                    })
                  : g.length === 0
                  ? e.jsx("div", {
                      className:
                        "text-center text-muted-foreground text-sm py-4",
                      children: "Nenhuma categoria personalizada ainda.",
                    })
                  : e.jsx("div", {
                      className: "space-y-1 max-h-64 overflow-y-auto",
                      children: g.map((E) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center justify-between p-2 rounded-md border",
                            children: [
                              e.jsx("span", {
                                className: "text-sm",
                                children: E.name,
                              }),
                              e.jsx(N, {
                                type: "button",
                                variant: "ghost",
                                size: "icon",
                                className:
                                  "h-8 w-8 text-destructive hover:text-destructive",
                                onClick: () => K(E),
                                children: e.jsx(Ue, { className: "w-4 h-4" }),
                              }),
                            ],
                          },
                          E.id
                        )
                      ),
                    }),
              ],
            }),
            e.jsx(vs, {
              className: "gap-2 sm:gap-0",
              children: e.jsx(N, {
                type: "button",
                variant: "outline",
                onClick: () => S(!1),
                children: "Fechar",
              }),
            }),
          ],
        }),
      }),
      e.jsx(Ys, {
        open: !!f,
        onOpenChange: (E) => !E && K(null),
        children: e.jsxs(Ks, {
          children: [
            e.jsxs(Ws, {
              children: [
                e.jsx(Xs, { children: "Excluir categoria?" }),
                e.jsxs(Gs, {
                  children: [
                    "Tem certeza que deseja excluir a categoria ",
                    e.jsx("strong", { children: f?.name }),
                    "? As transações já registradas não serão afetadas.",
                  ],
                }),
              ],
            }),
            e.jsxs(Qs, {
              children: [
                e.jsx(Js, { children: "Cancelar" }),
                e.jsx(Zs, {
                  onClick: L,
                  className: "bg-destructive hover:bg-destructive/90",
                  children: "Excluir",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Qt({ open: x, onOpenChange: S, onSave: p, transaction: t, type: b }) {
  const { symbol: P } = Re(),
    [u, r] = n.useState([]),
    [g, V] = n.useState(!1),
    [T, q] = n.useState(void 0),
    f = nt({
      resolver: lt(ct),
      defaultValues: {
        description: "",
        value: "",
        type: b,
        category: "",
        date: He(),
        paymentMethod: "",
      },
    }),
    K = async () => {
      const {
        data: { user: C },
      } = await j.auth.getUser();
      if (!C) return;
      const { data: D, error: w } = await j
        .from("custom_categories")
        .select("id, name")
        .eq("user_id", C.id)
        .eq("type", b)
        .order("name");
      !w && D && r(D);
    };
  n.useEffect(() => {
    x && K();
  }, [x, b]),
    n.useEffect(() => {
      t
        ? (f.reset({
            description: t.description,
            value: t.value,
            type: t.type,
            category: t.category,
            date: t.date,
            paymentMethod: t.paymentMethod || "",
          }),
          q(ja(t.date)))
        : (f.reset({
            description: "",
            value: "",
            type: b,
            category: "",
            date: He(),
            paymentMethod: "",
          }),
          q(ja(He())));
    }, [t, x, b, f]);
  const R = (C) => {
      p({ ...C, id: t?.id }), f.reset();
    },
    E = [
      ...(b === "income"
        ? [
            "Serviço de Reparo",
            "Venda de Peças",
            "Venda de Acessórios",
            "Outros",
          ]
        : [
            "Compra de Peças",
            "Compra de Ferramentas",
            "Aluguel",
            "Energia",
            "Internet",
            "Salários",
            "Marketing",
            "Outros",
          ]),
      ...u.map((C) => C.name),
    ];
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(We, {
        open: x,
        onOpenChange: S,
        children: e.jsxs(Xe, {
          className: "max-w-2xl max-h-[90vh] overflow-y-auto",
          children: [
            e.jsx(Ge, {
              children: e.jsx(Qe, {
                children: t
                  ? b === "income"
                    ? "Editar Receita"
                    : "Editar Despesa"
                  : b === "income"
                  ? "Nova Receita"
                  : "Nova Despesa",
              }),
            }),
            e.jsx(ot, {
              ...f,
              children: e.jsxs("form", {
                onSubmit: f.handleSubmit(R),
                className: "space-y-4",
                children: [
                  e.jsx(xs, {
                    control: f.control,
                    name: "description",
                    render: ({ field: C }) =>
                      e.jsxs(us, {
                        children: [
                          e.jsx(hs, { children: "Descrição *" }),
                          e.jsx(ps, {
                            children: e.jsx(de, {
                              ...C,
                              placeholder: "Descreva a transação",
                            }),
                          }),
                          e.jsx(gs, {}),
                        ],
                      }),
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      e.jsx(xs, {
                        control: f.control,
                        name: "value",
                        render: ({ field: C }) =>
                          e.jsxs(us, {
                            children: [
                              e.jsxs(hs, { children: ["Valor (", P, ") *"] }),
                              e.jsx(ps, {
                                children: e.jsx(de, {
                                  ...C,
                                  placeholder: "0,00",
                                  onChange: (D) => {
                                    const w = D.target.value.replace(
                                      /[^\d,]/g,
                                      ""
                                    );
                                    C.onChange(w);
                                  },
                                }),
                              }),
                              e.jsx(gs, {}),
                            ],
                          }),
                      }),
                      e.jsx(xs, {
                        control: f.control,
                        name: "date",
                        render: ({ field: C }) =>
                          e.jsxs(us, {
                            className: "flex flex-col",
                            children: [
                              e.jsx(hs, { children: "Data *" }),
                              e.jsxs(ts, {
                                children: [
                                  e.jsx(rs, {
                                    asChild: !0,
                                    children: e.jsx(ps, {
                                      children: e.jsx(N, {
                                        variant: "outline",
                                        className: Le(
                                          "w-full justify-start text-left font-normal",
                                          !C.value && "text-muted-foreground"
                                        ),
                                        children: T
                                          ? e.jsxs(e.Fragment, {
                                              children: [
                                                $e(fa(T)),
                                                e.jsx(Ye, {
                                                  className:
                                                    "ml-auto h-4 w-4 opacity-50",
                                                }),
                                              ],
                                            })
                                          : e.jsx("span", {
                                              children: "Selecione a data",
                                            }),
                                      }),
                                    }),
                                  }),
                                  e.jsx(ns, {
                                    className: "w-auto p-0",
                                    align: "start",
                                    children: e.jsx(is, {
                                      mode: "single",
                                      selected: T,
                                      onSelect: (D) => {
                                        D && (q(D), C.onChange(fa(D)));
                                      },
                                      initialFocus: !0,
                                      className: Le("p-3 pointer-events-auto"),
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx(gs, {}),
                            ],
                          }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                      e.jsx(xs, {
                        control: f.control,
                        name: "category",
                        render: ({ field: C }) =>
                          e.jsxs(us, {
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  e.jsx(hs, { children: "Categoria *" }),
                                  e.jsxs(N, {
                                    type: "button",
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => V(!0),
                                    className: "h-8 text-xs",
                                    children: [
                                      e.jsx(Oe, { className: "w-3 h-3 mr-1" }),
                                      "Nova",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs(fe, {
                                onValueChange: C.onChange,
                                defaultValue: C.value,
                                children: [
                                  e.jsx(ps, {
                                    children: e.jsx(ye, {
                                      children: e.jsx(ve, {
                                        placeholder: "Selecione a categoria",
                                      }),
                                    }),
                                  }),
                                  e.jsx(be, {
                                    children: E.map((D) =>
                                      e.jsx(_, { value: D, children: D }, D)
                                    ),
                                  }),
                                ],
                              }),
                              e.jsx(gs, {}),
                            ],
                          }),
                      }),
                      e.jsx(xs, {
                        control: f.control,
                        name: "paymentMethod",
                        render: ({ field: C }) =>
                          e.jsxs(us, {
                            children: [
                              e.jsx(hs, { children: "Forma de Pagamento" }),
                              e.jsxs(fe, {
                                onValueChange: C.onChange,
                                defaultValue: C.value,
                                children: [
                                  e.jsx(ps, {
                                    children: e.jsx(ye, {
                                      children: e.jsx(ve, {
                                        placeholder: "Selecione a forma",
                                      }),
                                    }),
                                  }),
                                  e.jsxs(be, {
                                    children: [
                                      e.jsx(_, {
                                        value: "Dinheiro",
                                        children: "Dinheiro",
                                      }),
                                      e.jsx(_, {
                                        value: "Cartão de Crédito",
                                        children: "Cartão de Crédito",
                                      }),
                                      e.jsx(_, {
                                        value: "Cartão de Débito",
                                        children: "Cartão de Débito",
                                      }),
                                      e.jsx(_, {
                                        value: "PIX",
                                        children: "PIX",
                                      }),
                                      e.jsx(_, {
                                        value: "Transferência",
                                        children: "Transferência",
                                      }),
                                      e.jsx(_, {
                                        value: "Boleto",
                                        children: "Boleto",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(gs, {}),
                            ],
                          }),
                      }),
                    ],
                  }),
                  e.jsxs(vs, {
                    children: [
                      e.jsx(N, {
                        type: "button",
                        variant: "outline",
                        onClick: () => S(!1),
                        children: "Cancelar",
                      }),
                      e.jsx(N, {
                        type: "submit",
                        children: t
                          ? "Salvar Alterações"
                          : b === "income"
                          ? "Adicionar Receita"
                          : "Adicionar Despesa",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      e.jsx(Gt, { open: g, onOpenChange: V, type: b, onCategoryCreated: K }),
    ],
  });
}
function Jt({ open: x, onOpenChange: S, products: p, onSale: t }) {
  const { format: b } = Re(),
    [P, u] = n.useState(""),
    r = () => {
      !P || P.startsWith("temp-") || (t(P), u(""), S(!1));
    },
    g = p.find((T) => T.id === P),
    V = (T) => parseFloat(T.replace(/[^\d,]/g, "").replace(",", ".")) || 0;
  return e.jsx(We, {
    open: x,
    onOpenChange: S,
    children: e.jsxs(Xe, {
      className: "max-w-md",
      children: [
        e.jsx(Ge, {
          children: e.jsxs(Qe, {
            className: "flex items-center gap-2",
            children: [
              e.jsx(As, { className: "h-5 w-5" }),
              "Registrar Venda de Produto",
            ],
          }),
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(H, { children: "Selecione o Produto" }),
                e.jsxs(fe, {
                  value: P,
                  onValueChange: u,
                  children: [
                    e.jsx(ye, {
                      children: e.jsx(ve, {
                        placeholder: "Escolha um produto",
                      }),
                    }),
                    e.jsx(be, {
                      children: p
                        .filter((T) => !T.id.startsWith("temp-"))
                        .map((T) =>
                          e.jsxs(
                            _,
                            {
                              value: T.id,
                              children: [T.name, " - ", b(V(T.salePrice))],
                            },
                            T.id
                          )
                        ),
                    }),
                  ],
                }),
              ],
            }),
            g &&
              e.jsxs("div", {
                className: "bg-muted/50 p-4 rounded-lg space-y-2",
                children: [
                  e.jsxs("div", {
                    className: "flex justify-between text-sm",
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Preço de Venda:",
                      }),
                      e.jsx("span", {
                        className: "font-semibold",
                        children: b(V(g.salePrice)),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between text-sm",
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Custo:",
                      }),
                      e.jsx("span", { children: b(V(g.costPrice)) }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex justify-between text-sm border-t pt-2",
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Lucro:",
                      }),
                      e.jsx("span", {
                        className: "font-semibold text-green-600",
                        children: b(V(g.salePrice) - V(g.costPrice)),
                      }),
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "flex justify-end gap-2",
              children: [
                e.jsx(N, {
                  variant: "outline",
                  onClick: () => S(!1),
                  children: "Cancelar",
                }),
                e.jsx(N, {
                  onClick: r,
                  disabled: !P,
                  children: "Confirmar Venda",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Zt({ metrics: x }) {
  const { format: S } = Re(),
    p = [
      {
        title: "Receita do Mês",
        value: S(x.totalRevenue),
        icon: Fs,
        trend: x.monthlyGrowth,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
      },
      {
        title: "Receita Hoje",
        value: S(x.todayRevenue),
        icon: Fs,
        trend: 0,
        color: "text-green-500",
        bgColor: "bg-green-500/10",
      },
      {
        title: "Despesas",
        value: S(x.totalExpenses),
        icon: ea,
        trend: 0,
        color: "text-red-500",
        bgColor: "bg-red-500/10",
      },
      {
        title: "Lucro Líquido",
        value: S(x.netProfit),
        icon: ls,
        trend: x.profitMargin,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
      },
      {
        title: "Ticket Médio",
        value: S(x.avgTicket),
        icon: As,
        trend: 0,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
      },
      {
        title: "Total de Vendas",
        value: x.totalSales.toString(),
        icon: Me,
        trend: 0,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
      },
    ];
  return e.jsx("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",
    children: p.map((t, b) => {
      const P = t.icon;
      return e.jsx(
        z,
        {
          className:
            "group p-6 hover:shadow-2xl transition-all duration-300 border-border/50 bg-gradient-to-br from-card via-card to-card/50 hover:scale-[1.02] animate-fade-in",
          style: { animationDelay: `${b * 100}ms` },
          children: e.jsxs("div", {
            className: "flex items-start justify-between",
            children: [
              e.jsxs("div", {
                className: "space-y-2 flex-1",
                children: [
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground font-medium",
                    children: t.title,
                  }),
                  e.jsx("p", {
                    className:
                      "text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text",
                    children: t.value,
                  }),
                  t.trend !== 0 &&
                    e.jsxs("div", {
                      className: `flex items-center text-xs font-semibold ${
                        t.trend > 0 ? "text-emerald-600" : "text-red-600"
                      }`,
                      children: [
                        e.jsx(ls, {
                          className: `h-3 w-3 mr-1 ${
                            t.trend < 0 ? "rotate-180" : ""
                          }`,
                        }),
                        Math.abs(t.trend).toFixed(1),
                        "% vs mês anterior",
                      ],
                    }),
                ],
              }),
              e.jsx("div", {
                className: `${t.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`,
                children: e.jsx(P, { className: `h-7 w-7 ${t.color}` }),
              }),
            ],
          }),
        },
        t.title
      );
    }),
  });
}
const Ps = [
    "hsl(var(--chart-1))",
    "hsl(var(--chart-2))",
    "hsl(var(--chart-3))",
    "hsl(var(--chart-4))",
    "hsl(var(--chart-5))",
  ],
  Sa = [
    "#10b981",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#84cc16",
    "#f97316",
    "#6366f1",
    "#14b8a6",
    "#a855f7",
    "#eab308",
    "#22c55e",
    "#0ea5e9",
    "#f43f5e",
    "#8b5cf6",
    "#10b981",
    "#f59e0b",
    "#3b82f6",
  ];
function er({ salesOverTime: x, paymentMethods: S, topProducts: p }) {
  const { format: t } = Re(),
    b = ({ active: u, payload: r, label: g }) => {
      if (u && r && r.length) {
        const V = r[0].payload;
        return e.jsxs("div", {
          className:
            "bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-3",
          children: [
            e.jsx("p", {
              className: "text-sm font-semibold text-foreground mb-1",
              children: V.product,
            }),
            e.jsx("p", {
              className: "text-xs text-muted-foreground mb-1",
              children: V.date,
            }),
            e.jsx("p", {
              className: "text-sm text-primary font-bold",
              children: t(V.value),
            }),
          ],
        });
      }
      return null;
    },
    P = ({ active: u, payload: r }) =>
      u && r && r.length
        ? e.jsxs("div", {
            className:
              "bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-3",
            children: [
              e.jsx("p", {
                className: "text-sm font-semibold text-foreground mb-1",
                children: r[0].name,
              }),
              e.jsx("p", {
                className: "text-sm text-primary font-bold",
                children: t(r[0].value),
              }),
            ],
          })
        : null;
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs(z, {
        className:
          "p-6 bg-gradient-to-br from-card via-card to-card/50 border-border/50 shadow-xl animate-fade-in",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
              e.jsx("div", {
                className: "p-3 bg-primary/10 rounded-xl",
                children: e.jsx(ls, { className: "h-6 w-6 text-primary" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className: "text-lg font-bold",
                    children: "Vendas de Produtos",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Últimos 20 produtos vendidos",
                  }),
                ],
              }),
            ],
          }),
          x.length > 0
            ? e.jsx(ss, {
                width: "100%",
                height: 400,
                children: e.jsxs(sa, {
                  data: x,
                  margin: { top: 20, right: 30, left: 20, bottom: 80 },
                  children: [
                    e.jsx(Es, {
                      strokeDasharray: "3 3",
                      stroke: "hsl(var(--border))",
                      opacity: 0.3,
                    }),
                    e.jsx(Ms, {
                      dataKey: "product",
                      stroke: "hsl(var(--muted-foreground))",
                      style: { fontSize: "11px" },
                      angle: -45,
                      textAnchor: "end",
                      height: 100,
                      interval: 0,
                      tickLine: !1,
                    }),
                    e.jsx(Rs, {
                      stroke: "hsl(var(--muted-foreground))",
                      style: { fontSize: "12px" },
                      tickFormatter: (u) => t(u),
                      tickLine: !1,
                    }),
                    e.jsx(as, { content: e.jsx(b, {}) }),
                    e.jsx(aa, {
                      dataKey: "value",
                      radius: [8, 8, 0, 0],
                      animationDuration: 1200,
                      children: x.map((u, r) =>
                        e.jsx(fs, { fill: Sa[r % Sa.length] }, `cell-${r}`)
                      ),
                    }),
                  ],
                }),
              })
            : e.jsx("div", {
                className:
                  "h-[400px] flex items-center justify-center text-muted-foreground",
                children: e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx(ls, {
                      className: "h-12 w-12 mx-auto mb-3 opacity-30",
                    }),
                    e.jsx("p", {
                      children: "Nenhuma venda de produto registrada ainda",
                    }),
                  ],
                }),
              }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: [
          e.jsxs(z, {
            className:
              "p-6 bg-gradient-to-br from-card via-card to-card/50 border-border/50 shadow-xl animate-fade-in",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                  e.jsx("div", {
                    className: "p-3 bg-blue-500/10 rounded-xl",
                    children: e.jsx(Me, { className: "h-6 w-6 text-blue-500" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-bold",
                        children: "Formas de Pagamento",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Distribuição de métodos",
                      }),
                    ],
                  }),
                ],
              }),
              S.length > 0
                ? e.jsx(ss, {
                    width: "100%",
                    height: 280,
                    children: e.jsxs(Da, {
                      children: [
                        e.jsx(Pa, {
                          data: S,
                          cx: "50%",
                          cy: "50%",
                          labelLine: !1,
                          label: ({ name: u, percent: r }) =>
                            `${u} ${(r * 100).toFixed(0)}%`,
                          outerRadius: 90,
                          fill: "#8884d8",
                          dataKey: "value",
                          animationBegin: 0,
                          animationDuration: 1e3,
                          children: S.map((u, r) =>
                            e.jsx(fs, { fill: Ps[r % Ps.length] }, `cell-${r}`)
                          ),
                        }),
                        e.jsx(as, { content: e.jsx(P, {}) }),
                      ],
                    }),
                  })
                : e.jsx("div", {
                    className:
                      "h-[280px] flex items-center justify-center text-muted-foreground",
                    children: e.jsxs("div", {
                      className: "text-center",
                      children: [
                        e.jsx(Me, {
                          className: "h-12 w-12 mx-auto mb-3 opacity-30",
                        }),
                        e.jsx("p", { children: "Nenhum pagamento registrado" }),
                      ],
                    }),
                  }),
            ],
          }),
          e.jsxs(z, {
            className:
              "p-6 bg-gradient-to-br from-card via-card to-card/50 border-border/50 shadow-xl animate-fade-in",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                  e.jsx("div", {
                    className: "p-3 bg-orange-500/10 rounded-xl",
                    children: e.jsx(os, {
                      className: "h-6 w-6 text-orange-500",
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-bold",
                        children: "Top 5 Produtos",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Produtos mais vendidos",
                      }),
                    ],
                  }),
                ],
              }),
              p.length > 0
                ? e.jsx(ss, {
                    width: "100%",
                    height: 280,
                    children: e.jsxs(sa, {
                      data: p.slice(0, 5),
                      layout: "vertical",
                      children: [
                        e.jsx(Es, {
                          strokeDasharray: "3 3",
                          stroke: "hsl(var(--border))",
                          opacity: 0.3,
                        }),
                        e.jsx(Ms, {
                          type: "number",
                          stroke: "hsl(var(--muted-foreground))",
                          style: { fontSize: "12px" },
                          tickFormatter: (u) => t(u),
                          tickLine: !1,
                        }),
                        e.jsx(Rs, {
                          dataKey: "name",
                          type: "category",
                          width: 120,
                          stroke: "hsl(var(--muted-foreground))",
                          style: { fontSize: "11px" },
                          tickLine: !1,
                        }),
                        e.jsx(as, {
                          content: ({ active: u, payload: r }) =>
                            u && r && r.length
                              ? e.jsxs("div", {
                                  className:
                                    "bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-3",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-sm font-semibold text-foreground mb-1",
                                      children: r[0].payload.name,
                                    }),
                                    e.jsxs("p", {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: [
                                        "Vendas: ",
                                        r[0].payload.sales,
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-primary font-bold",
                                      children: t(r[0].value),
                                    }),
                                  ],
                                })
                              : null,
                        }),
                        e.jsx(aa, {
                          dataKey: "revenue",
                          fill: "hsl(var(--primary))",
                          radius: [0, 8, 8, 0],
                          animationDuration: 1200,
                          children: p
                            .slice(0, 5)
                            .map((u, r) =>
                              e.jsx(
                                fs,
                                { fill: Ps[r % Ps.length] },
                                `cell-${r}`
                              )
                            ),
                        }),
                      ],
                    }),
                  })
                : e.jsx("div", {
                    className:
                      "h-[280px] flex items-center justify-center text-muted-foreground",
                    children: e.jsxs("div", {
                      className: "text-center",
                      children: [
                        e.jsx(os, {
                          className: "h-12 w-12 mx-auto mb-3 opacity-30",
                        }),
                        e.jsx("p", {
                          children: "Nenhum produto vendido ainda",
                        }),
                      ],
                    }),
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
const ks = [
    "#10b981",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#84cc16",
    "#f97316",
    "#6366f1",
    "#14b8a6",
    "#a855f7",
  ],
  es = (x) =>
    parseFloat(
      String(x)
        .replace(/[^\d,.-]/g, "")
        .replace(/\.(?=\d{3})/g, "")
        .replace(",", ".")
    ) || 0,
  Ts = (x) => (x ? x.replace(/\s+\d{1,2}x$/i, "").trim() : "Não informado");
function sr({ transactions: x, companyName: S, companyLogo: p }) {
  const { format: t, currency: b } = Re(),
    { toast: P } = Ke(),
    [u, r] = n.useState("all"),
    [g, V] = n.useState("all"),
    [T, q] = n.useState("all"),
    [f, K] = n.useState("month"),
    [R, l] = n.useState(),
    [m, L] = n.useState(),
    [E, C] = n.useState(!1),
    D = n.useMemo(() => {
      const a = new Date();
      let d = new Date(a.getFullYear(), a.getMonth(), 1),
        y = a;
      if (f === "today")
        d = new Date(a.getFullYear(), a.getMonth(), a.getDate());
      else if (f === "week")
        d = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 7);
      else if (f === "month") d = new Date(a.getFullYear(), a.getMonth(), 1);
      else if (f === "year") d = new Date(a.getFullYear(), 0, 1);
      else if (f === "custom") {
        if (!R || !m) return null;
        (d = R), (y = m);
      } else if (f === "all") return { start: null, end: null };
      return { start: d, end: y };
    }, [f, R, m]),
    w = n.useMemo(
      () =>
        x.filter((a) => {
          if (
            (u !== "all" && a.type !== u) ||
            (g !== "all" && a.category !== g) ||
            (T !== "all" && Ts(a.paymentMethod) !== T)
          )
            return !1;
          if (D && D.start && D.end) {
            const d = new Date(a.date + "T12:00:00");
            if (d < D.start || d > new Date(D.end.getTime() + 864e5)) return !1;
          }
          return !0;
        }),
      [x, u, g, T, D]
    ),
    re = n.useMemo(() => {
      const a = new Set();
      return (
        x.forEach((d) => d.category && a.add(d.category)), Array.from(a).sort()
      );
    }, [x]),
    ge = n.useMemo(() => {
      const a = new Set();
      return x.forEach((d) => a.add(Ts(d.paymentMethod))), Array.from(a).sort();
    }, [x]),
    Z = n.useMemo(() => {
      let a = 0,
        d = 0;
      return (
        w.forEach((y) => {
          const ae = es(y.value);
          y.type === "income" ? (a += ae) : (d += ae);
        }),
        { income: a, expense: d, profit: a - d, count: w.length }
      );
    }, [w]),
    G = n.useMemo(() => {
      const a = new Map();
      return (
        w.forEach((d) => {
          const y = d.category || "Sem categoria";
          a.set(y, (a.get(y) || 0) + es(d.value));
        }),
        Array.from(a.entries())
          .map(([d, y]) => ({ name: d, value: y }))
          .sort((d, y) => y.value - d.value)
      );
    }, [w]),
    xe = n.useMemo(() => {
      const a = new Map();
      return (
        w
          .filter((d) => d.type === "income")
          .forEach((d) => {
            const y = Ts(d.paymentMethod);
            a.set(y, (a.get(y) || 0) + es(d.value));
          }),
        Array.from(a.entries())
          .map(([d, y]) => ({ name: d, value: y }))
          .sort((d, y) => y.value - d.value)
      );
    }, [w]),
    ce = n.useMemo(() => {
      const a = new Map();
      return (
        w.forEach((d) => {
          const y = d.date,
            ae = a.get(y) || { date: y, income: 0, expense: 0 },
            we = es(d.value);
          d.type === "income" ? (ae.income += we) : (ae.expense += we),
            a.set(y, ae);
        }),
        Array.from(a.values())
          .sort((d, y) => d.date.localeCompare(y.date))
          .map((d) => ({ ...d, dateLabel: $e(d.date) }))
      );
    }, [w]),
    ie = () => {
      r("all"), V("all"), q("all"), K("month"), l(void 0), L(void 0);
    },
    Se = () =>
      f === "all"
        ? "Todo o período"
        : f === "today"
        ? "Hoje"
        : f === "week"
        ? "Últimos 7 dias"
        : f === "month"
        ? "Este mês"
        : f === "year"
        ? "Este ano"
        : f === "custom" && R && m
        ? `${me(R, "dd/MM/yyyy")} - ${me(m, "dd/MM/yyyy")}`
        : "Personalizado",
    ne = () => {
      if (w.length === 0) {
        P({
          title: "Nenhuma transação no filtro atual",
          variant: "destructive",
        });
        return;
      }
      C(!0);
    },
    je = async (a) => {
      try {
        await Ot({
          transactions: w.map((d) => ({
            date: d.date,
            description: d.description,
            category: d.category || "Sem categoria",
            paymentMethod: Ts(d.paymentMethod),
            amount: es(d.value),
            type: d.type,
          })),
          totals: Z,
          byCategory: G,
          byMethod: xe,
          filters: {
            type:
              u === "all" ? "Todos" : u === "income" ? "Receitas" : "Despesas",
            category: g === "all" ? "Todas" : g,
            method: T === "all" ? "Todas" : T,
            period: Se(),
          },
          companyName: S || "Tech OS Pro",
          companyLogo: p || "",
          currency: a,
        }),
          P({ title: "Relatório PDF gerado!" });
      } catch {
        P({ title: "Erro ao gerar PDF", variant: "destructive" });
      }
    };
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs(z, {
        className:
          "p-4 sm:p-5 bg-gradient-to-br from-card via-card to-muted/20 border-border/60",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [
              e.jsx("div", {
                className: "p-2 rounded-xl bg-primary/10",
                children: e.jsx($t, { className: "h-4 w-4 text-primary" }),
              }),
              e.jsx("h3", {
                className: "font-semibold",
                children: "Filtros do Relatório",
              }),
              e.jsxs(Ae, {
                variant: "secondary",
                className: "ml-auto",
                children: [w.length, " transações"],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-3",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsxs("label", {
                    className:
                      "text-xs text-muted-foreground mb-1 block flex items-center gap-1",
                    children: [e.jsx(Lt, { className: "h-3 w-3" }), "Tipo"],
                  }),
                  e.jsxs(fe, {
                    value: u,
                    onValueChange: (a) => r(a),
                    children: [
                      e.jsx(ye, { children: e.jsx(ve, {}) }),
                      e.jsxs(be, {
                        children: [
                          e.jsx(_, { value: "all", children: "Todos" }),
                          e.jsx(_, { value: "income", children: "Receitas" }),
                          e.jsx(_, { value: "expense", children: "Despesas" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs("label", {
                    className:
                      "text-xs text-muted-foreground mb-1 block flex items-center gap-1",
                    children: [
                      e.jsx(cs, { className: "h-3 w-3" }),
                      "Categoria",
                    ],
                  }),
                  e.jsxs(fe, {
                    value: g,
                    onValueChange: V,
                    children: [
                      e.jsx(ye, { children: e.jsx(ve, {}) }),
                      e.jsxs(be, {
                        className: "max-h-72",
                        children: [
                          e.jsx(_, { value: "all", children: "Todas" }),
                          re.map((a) => e.jsx(_, { value: a, children: a }, a)),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs("label", {
                    className:
                      "text-xs text-muted-foreground mb-1 block flex items-center gap-1",
                    children: [
                      e.jsx(Me, { className: "h-3 w-3" }),
                      "Forma de Pgto",
                    ],
                  }),
                  e.jsxs(fe, {
                    value: T,
                    onValueChange: q,
                    children: [
                      e.jsx(ye, { children: e.jsx(ve, {}) }),
                      e.jsxs(be, {
                        className: "max-h-72",
                        children: [
                          e.jsx(_, { value: "all", children: "Todas" }),
                          ge.map((a) => e.jsx(_, { value: a, children: a }, a)),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsxs("label", {
                    className:
                      "text-xs text-muted-foreground mb-1 block flex items-center gap-1",
                    children: [e.jsx(Ye, { className: "h-3 w-3" }), "Período"],
                  }),
                  e.jsxs(fe, {
                    value: f,
                    onValueChange: K,
                    children: [
                      e.jsx(ye, { children: e.jsx(ve, {}) }),
                      e.jsxs(be, {
                        children: [
                          e.jsx(_, { value: "today", children: "Hoje" }),
                          e.jsx(_, {
                            value: "week",
                            children: "Últimos 7 dias",
                          }),
                          e.jsx(_, { value: "month", children: "Este mês" }),
                          e.jsx(_, { value: "year", children: "Este ano" }),
                          e.jsx(_, {
                            value: "all",
                            children: "Todo o período",
                          }),
                          e.jsx(_, {
                            value: "custom",
                            children: "Personalizado",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f === "custom" &&
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-3 mt-3",
              children: [
                e.jsxs(ts, {
                  children: [
                    e.jsx(rs, {
                      asChild: !0,
                      children: e.jsxs(N, {
                        variant: "outline",
                        className: "justify-start",
                        children: [
                          e.jsx(Ye, { className: "mr-2 h-4 w-4" }),
                          R ? me(R, "P", { locale: qe }) : "Data inicial",
                        ],
                      }),
                    }),
                    e.jsx(ns, {
                      className: "w-auto p-0",
                      children: e.jsx(is, {
                        mode: "single",
                        selected: R,
                        onSelect: l,
                        initialFocus: !0,
                      }),
                    }),
                  ],
                }),
                e.jsxs(ts, {
                  children: [
                    e.jsx(rs, {
                      asChild: !0,
                      children: e.jsxs(N, {
                        variant: "outline",
                        className: "justify-start",
                        children: [
                          e.jsx(Ye, { className: "mr-2 h-4 w-4" }),
                          m ? me(m, "P", { locale: qe }) : "Data final",
                        ],
                      }),
                    }),
                    e.jsx(ns, {
                      className: "w-auto p-0",
                      children: e.jsx(is, {
                        mode: "single",
                        selected: m,
                        onSelect: L,
                        initialFocus: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          e.jsxs("div", {
            className: "flex flex-col sm:flex-row gap-2 mt-4",
            children: [
              e.jsxs(N, {
                onClick: ne,
                className: "gap-2 flex-1 sm:flex-none",
                children: [
                  e.jsx(ta, { className: "h-4 w-4" }),
                  " Exportar PDF",
                ],
              }),
              e.jsxs(N, {
                variant: "outline",
                onClick: ie,
                className: "gap-2",
                children: [
                  e.jsx(it, { className: "h-4 w-4" }),
                  " Limpar filtros",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        children: [
          e.jsxs(z, {
            className:
              "p-4 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/30",
            children: [
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Receitas",
              }),
              e.jsx("p", {
                className:
                  "text-xl sm:text-2xl font-bold text-emerald-600 tabular-nums",
                children: t(Z.income),
              }),
            ],
          }),
          e.jsxs(z, {
            className:
              "p-4 bg-gradient-to-br from-red-500/10 to-transparent border-red-500/30",
            children: [
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Despesas",
              }),
              e.jsx("p", {
                className:
                  "text-xl sm:text-2xl font-bold text-red-600 tabular-nums",
                children: t(Z.expense),
              }),
            ],
          }),
          e.jsxs(z, {
            className: `p-4 bg-gradient-to-br ${
              Z.profit >= 0
                ? "from-primary/10 border-primary/30"
                : "from-orange-500/10 border-orange-500/30"
            } to-transparent border`,
            children: [
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Lucro Líquido",
              }),
              e.jsx("p", {
                className: `text-xl sm:text-2xl font-bold tabular-nums ${
                  Z.profit >= 0 ? "text-primary" : "text-orange-600"
                }`,
                children: t(Z.profit),
              }),
            ],
          }),
          e.jsxs(z, {
            className:
              "p-4 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/30",
            children: [
              e.jsx("p", {
                className: "text-xs text-muted-foreground",
                children: "Transações",
              }),
              e.jsx("p", {
                className:
                  "text-xl sm:text-2xl font-bold text-blue-600 tabular-nums",
                children: Z.count,
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
        children: [
          e.jsxs(z, {
            className: "p-5",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  e.jsx("div", {
                    className: "p-2 rounded-xl bg-blue-500/10",
                    children: e.jsx(Me, { className: "h-4 w-4 text-blue-600" }),
                  }),
                  e.jsx("h3", {
                    className: "font-semibold",
                    children: "Por Forma de Pagamento",
                  }),
                ],
              }),
              xe.length > 0
                ? e.jsx(ss, {
                    width: "100%",
                    height: 280,
                    children: e.jsxs(Da, {
                      children: [
                        e.jsx(Pa, {
                          data: xe,
                          dataKey: "value",
                          nameKey: "name",
                          cx: "50%",
                          cy: "50%",
                          outerRadius: 90,
                          label: ({ name: a, percent: d }) =>
                            `${a} ${(d * 100).toFixed(0)}%`,
                          children: xe.map((a, d) =>
                            e.jsx(fs, { fill: ks[d % ks.length] }, d)
                          ),
                        }),
                        e.jsx(as, { formatter: (a) => t(a) }),
                      ],
                    }),
                  })
                : e.jsx("div", {
                    className:
                      "h-[280px] flex items-center justify-center text-muted-foreground text-sm",
                    children: "Sem dados",
                  }),
            ],
          }),
          e.jsxs(z, {
            className: "p-5",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                  e.jsx("div", {
                    className: "p-2 rounded-xl bg-amber-500/10",
                    children: e.jsx(cs, {
                      className: "h-4 w-4 text-amber-600",
                    }),
                  }),
                  e.jsx("h3", {
                    className: "font-semibold",
                    children: "Por Categoria",
                  }),
                ],
              }),
              G.length > 0
                ? e.jsx(ss, {
                    width: "100%",
                    height: 280,
                    children: e.jsxs(sa, {
                      data: G.slice(0, 8),
                      layout: "vertical",
                      children: [
                        e.jsx(Es, {
                          strokeDasharray: "3 3",
                          stroke: "hsl(var(--border))",
                          opacity: 0.3,
                        }),
                        e.jsx(Ms, {
                          type: "number",
                          tickFormatter: (a) => t(a),
                          style: { fontSize: 11 },
                        }),
                        e.jsx(Rs, {
                          dataKey: "name",
                          type: "category",
                          width: 110,
                          style: { fontSize: 11 },
                        }),
                        e.jsx(as, { formatter: (a) => t(a) }),
                        e.jsx(aa, {
                          dataKey: "value",
                          radius: [0, 8, 8, 0],
                          children: G.slice(0, 8).map((a, d) =>
                            e.jsx(fs, { fill: ks[d % ks.length] }, d)
                          ),
                        }),
                      ],
                    }),
                  })
                : e.jsx("div", {
                    className:
                      "h-[280px] flex items-center justify-center text-muted-foreground text-sm",
                    children: "Sem dados",
                  }),
            ],
          }),
        ],
      }),
      e.jsxs(z, {
        className: "p-5",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 mb-4",
            children: [
              e.jsx("div", {
                className: "p-2 rounded-xl bg-primary/10",
                children: e.jsx(ls, { className: "h-4 w-4 text-primary" }),
              }),
              e.jsx("h3", {
                className: "font-semibold",
                children: "Evolução no Período",
              }),
            ],
          }),
          ce.length > 0
            ? e.jsx(ss, {
                width: "100%",
                height: 280,
                children: e.jsxs(zt, {
                  data: ce,
                  children: [
                    e.jsx(Es, {
                      strokeDasharray: "3 3",
                      stroke: "hsl(var(--border))",
                      opacity: 0.3,
                    }),
                    e.jsx(Ms, {
                      dataKey: "dateLabel",
                      style: { fontSize: 11 },
                    }),
                    e.jsx(Rs, {
                      tickFormatter: (a) => t(a),
                      style: { fontSize: 11 },
                    }),
                    e.jsx(as, { formatter: (a) => t(a) }),
                    e.jsx(Bt, {}),
                    e.jsx(_a, {
                      type: "monotone",
                      dataKey: "income",
                      name: "Receitas",
                      stroke: "#10b981",
                      strokeWidth: 2,
                    }),
                    e.jsx(_a, {
                      type: "monotone",
                      dataKey: "expense",
                      name: "Despesas",
                      stroke: "#ef4444",
                      strokeWidth: 2,
                    }),
                  ],
                }),
              })
            : e.jsx("div", {
                className:
                  "h-[280px] flex items-center justify-center text-muted-foreground text-sm",
                children: "Sem dados",
              }),
        ],
      }),
      e.jsxs(z, {
        className: "p-5",
        children: [
          e.jsxs("h3", {
            className: "font-semibold mb-3",
            children: ["Detalhamento (", w.length, ")"],
          }),
          e.jsxs("div", {
            className: "overflow-x-auto",
            children: [
              e.jsxs("table", {
                className: "w-full text-sm",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      className: "border-b",
                      children: [
                        e.jsx("th", {
                          className: "text-left py-2 px-2",
                          children: "Data",
                        }),
                        e.jsx("th", {
                          className: "text-left py-2 px-2",
                          children: "Descrição",
                        }),
                        e.jsx("th", {
                          className: "text-left py-2 px-2",
                          children: "Categoria",
                        }),
                        e.jsx("th", {
                          className: "text-left py-2 px-2",
                          children: "Pagamento",
                        }),
                        e.jsx("th", {
                          className: "text-right py-2 px-2",
                          children: "Valor",
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("tbody", {
                    children: [
                      w
                        .slice(0, 200)
                        .map((a) =>
                          e.jsxs(
                            "tr",
                            {
                              className:
                                "border-b border-border/50 hover:bg-muted/40",
                              children: [
                                e.jsx("td", {
                                  className: "py-2 px-2 whitespace-nowrap",
                                  children: $e(a.date),
                                }),
                                e.jsx("td", {
                                  className: "py-2 px-2 max-w-[280px] truncate",
                                  children: a.description,
                                }),
                                e.jsx("td", {
                                  className: "py-2 px-2",
                                  children: e.jsx(Ae, {
                                    variant: "outline",
                                    className: "text-[10px]",
                                    children: a.category || "-",
                                  }),
                                }),
                                e.jsx("td", {
                                  className: "py-2 px-2 text-xs",
                                  children: a.paymentMethod || "-",
                                }),
                                e.jsxs("td", {
                                  className: `py-2 px-2 text-right font-semibold tabular-nums ${
                                    a.type === "income"
                                      ? "text-emerald-600"
                                      : "text-red-600"
                                  }`,
                                  children: [
                                    a.type === "income" ? "+" : "-",
                                    t(es(a.value)),
                                  ],
                                }),
                              ],
                            },
                            a.id
                          )
                        ),
                      w.length === 0 &&
                        e.jsx("tr", {
                          children: e.jsx("td", {
                            colSpan: 5,
                            className: "py-8 text-center text-muted-foreground",
                            children: "Nenhuma transação encontrada",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              w.length > 200 &&
                e.jsx("p", {
                  className: "text-xs text-muted-foreground mt-2 text-center",
                  children: "Mostrando primeiras 200 · o PDF exporta todas",
                }),
            ],
          }),
        ],
      }),
      e.jsx(Aa, { open: E, onOpenChange: C, onConfirm: je }),
    ],
  });
}
const ar = [
    {
      id: "Dinheiro",
      label: "Dinheiro",
      icon: Ta,
      color:
        "bg-emerald-500/15 border-emerald-500/30 text-emerald-700 dark:text-emerald-400",
      activeColor: "bg-emerald-500 text-white border-emerald-500",
    },
    {
      id: "PIX",
      label: "PIX",
      icon: pt,
      color:
        "bg-cyan-500/15 border-cyan-500/30 text-cyan-700 dark:text-cyan-400",
      activeColor: "bg-cyan-500 text-white border-cyan-500",
    },
    {
      id: "Cartão de Crédito",
      label: "Crédito",
      icon: Me,
      color:
        "bg-blue-500/15 border-blue-500/30 text-blue-700 dark:text-blue-400",
      activeColor: "bg-blue-500 text-white border-blue-500",
    },
    {
      id: "Cartão de Débito",
      label: "Débito",
      icon: Me,
      color:
        "bg-purple-500/15 border-purple-500/30 text-purple-700 dark:text-purple-400",
      activeColor: "bg-purple-500 text-white border-purple-500",
    },
  ],
  tr = [5, 10, 20, 50, 100, 200];
function rr({ products: x, onSale: S, companySettings: p }) {
  const [t, b] = n.useState([]),
    [P, u] = n.useState(""),
    [r, g] = n.useState("Dinheiro"),
    [V, T] = n.useState(!1),
    [q, f] = n.useState("percentage"),
    [K, R] = n.useState(""),
    [l, m] = n.useState(""),
    [L, E] = n.useState(!1),
    [C, D] = n.useState(0),
    { format: w } = Re(),
    { toast: re } = Ke(),
    { playCashRegisterSound: ge } = ka(),
    Z = (o) => {
      const M = o.replace(/\./g, "").replace(",", ".");
      return parseFloat(M) || 0;
    },
    G = n.useMemo(
      () =>
        x.filter(
          (o) =>
            o.name.toLowerCase().includes(P.toLowerCase()) ||
            o.code?.toLowerCase().includes(P.toLowerCase())
        ),
      [x, P]
    ),
    xe = n.useCallback((o) => {
      const M = Z(o.salePrice);
      b((U) =>
        U.find((A) => A.id === o.id)
          ? U.map((A) =>
              A.id === o.id
                ? {
                    ...A,
                    quantity: A.quantity + 1,
                    subtotal: (A.quantity + 1) * M,
                  }
                : A
            )
          : [...U, { ...o, quantity: 1, subtotal: M }]
      ),
        ys.success(`${o.name} adicionado`, { duration: 1e3 });
    }, []),
    ce = n.useCallback((o, M) => {
      b((U) =>
        U.map((I) => {
          if (I.id === o) {
            const A = Math.max(0, I.quantity + M),
              B = Z(I.salePrice);
            return { ...I, quantity: A, subtotal: A * B };
          }
          return I;
        }).filter((I) => I.quantity > 0)
      );
    }, []),
    ie = n.useCallback((o) => b((M) => M.filter((U) => U.id !== o)), []),
    Se = n.useCallback(() => {
      b([]), g("Dinheiro"), R(""), f("percentage"), m("");
    }, []),
    ne = t.reduce((o, M) => o + M.subtotal, 0),
    je = t.reduce((o, M) => o + M.quantity, 0),
    a = n.useMemo(() => {
      const o = parseFloat(K.replace(",", ".")) || 0;
      return o <= 0
        ? 0
        : q === "percentage"
        ? (ne * Math.min(o, 100)) / 100
        : Math.min(o, ne);
    }, [K, q, ne]),
    d = ne - a,
    y = Z(l),
    ae = y > 0 ? y - d : 0,
    we = async () => {
      if (t.length === 0) {
        re({
          title: "Carrinho vazio",
          description: "Adicione produtos antes de finalizar",
          variant: "destructive",
        });
        return;
      }
      if (r === "Dinheiro" && y > 0 && y < d) {
        re({
          title: "Valor insuficiente",
          description: "O valor recebido é menor que o total",
          variant: "destructive",
        });
        return;
      }
      T(!0);
      try {
        const o =
          a > 0
            ? {
                type: q,
                value: parseFloat(K.replace(",", ".")) || 0,
                amount: a,
              }
            : void 0;
        await S(t, r, d, o),
          ge(),
          await i([...t], r, d, ne, o),
          D(d),
          Se(),
          E(!0),
          setTimeout(() => E(!1), 3e3);
      } catch {
        re({ title: "Erro ao processar venda", variant: "destructive" });
      } finally {
        T(!1);
      }
    },
    i = async (o, M, U, I, A) => {
      const B = {
        transactionId: crypto.randomUUID(),
        items: o.map((O) => ({
          name: O.name,
          quantity: O.quantity,
          unitPrice: Z(O.salePrice),
          subtotal: O.subtotal,
          code: O.code,
        })),
        total: U,
        subtotal: I,
        discount: A,
        paymentMethod: M,
        date: new Date().toISOString(),
      };
      try {
        const O = le(B, p || {}),
          X = new TextEncoder().encode(O);
        await Fa(X, O, p?.company_name || "Minha Empresa");
      } catch {}
    },
    le = (o, M) => {
      const I = (X) =>
          " ".repeat(Math.max(0, Math.floor((48 - X.length) / 2))) + X,
        A = (X) => X.repeat(48),
        B = (X) => `R$ ${X.toFixed(2).replace(".", ",")}`;
      let O = "";
      if (
        ((O +=
          I(M.company_name?.toUpperCase() || "MINHA EMPRESA") +
          `
`),
        M.company_cnpj &&
          (O +=
            I(`CNPJ: ${M.company_cnpj}`) +
            `
`),
        M.company_address &&
          (O +=
            I(M.company_address.substring(0, 48)) +
            `
`),
        M.company_phone &&
          (O +=
            I(`Tel: ${M.company_phone}`) +
            `
`),
        (O +=
          A("-") +
          `
` +
          I("CUPOM DE VENDA") +
          `
` +
          A("-") +
          `
`),
        (O +=
          `Data: ${new Date(o.date).toLocaleString("pt-BR")}
` +
          A("-") +
          `
`),
        (O +=
          `QTD   PRODUTO                    VALOR
` +
          A("-") +
          `
`),
        o.items.forEach((X) => {
          O += `${X.quantity.toString().padEnd(6)}${X.name
            .substring(0, 22)
            .padEnd(22)}${B(X.subtotal).padStart(12)}
`;
        }),
        (O +=
          A("-") +
          `
`),
        o.discount?.amount > 0)
      ) {
        O +=
          "SUBTOTAL:".padEnd(30) +
          B(o.subtotal).padStart(18) +
          `
`;
        const X =
          o.discount.type === "percentage"
            ? `DESCONTO (${o.discount.value}%):`
            : "DESCONTO:";
        O +=
          X.padEnd(30) +
          `-${B(o.discount.amount)}`.padStart(18) +
          `
` +
          A("-") +
          `
`;
      }
      return (
        (O +=
          "TOTAL:".padEnd(30) +
          B(o.total).padStart(18) +
          `
`),
        (O += `Pagamento: ${o.paymentMethod}
`),
        o.paymentMethod === "Dinheiro" &&
          y > 0 &&
          ((O +=
            "Valor Recebido:".padEnd(30) +
            B(y).padStart(18) +
            `
`),
          ae > 0 &&
            (O +=
              "TROCO:".padEnd(30) +
              B(ae).padStart(18) +
              `
`)),
        (O +=
          A("-") +
          `
` +
          I("OBRIGADO PELA PREFERENCIA!") +
          `
` +
          I("Volte sempre!") +
          `


`),
        O
      );
    };
  return (
    n.useEffect(() => {
      const o = (M) => {
        const U = M.detail;
        if (U) {
          if (U.action === "sale-add-product") {
            const I = String(U.args?.term || "")
                .toLowerCase()
                .trim(),
              A = Math.max(1, Number(U.args?.quantity || 1)),
              B = x.find(
                (X) =>
                  X.name.toLowerCase().includes(I) ||
                  X.code?.toLowerCase() === I
              );
            if (!B) {
              u(I),
                re({
                  title: "Produto não encontrado",
                  description: I,
                  variant: "destructive",
                });
              return;
            }
            const O = Z(B.salePrice);
            b((X) =>
              X.find((ee) => ee.id === B.id)
                ? X.map((ee) =>
                    ee.id === B.id
                      ? {
                          ...ee,
                          quantity: ee.quantity + A,
                          subtotal: (ee.quantity + A) * O,
                        }
                      : ee
                  )
                : [...X, { ...B, quantity: A, subtotal: O * A }]
            ),
              ys.success(`${A}x ${B.name} adicionado`, { duration: 1200 });
          }
          if (U.action === "sale-payment") {
            const I = String(U.args?.method || "").toLowerCase(),
              A = I.includes("pix")
                ? "PIX"
                : I.includes("cr")
                ? "Cartão de Crédito"
                : I.includes("d")
                ? "Cartão de Débito"
                : "Dinheiro";
            g(A);
          }
          U.action === "sale-finish" && we(),
            U.action === "search" && u(String(U.args?.term || ""));
        }
      };
      return (
        window.addEventListener("bench-copilot:command", o),
        () => window.removeEventListener("bench-copilot:command", o)
      );
    }, [x, re, we]),
    e.jsxs("div", {
      className: "flex flex-col lg:flex-row gap-4 min-h-[calc(100vh-12rem)]",
      children: [
        e.jsxs("div", {
          className: "flex-1 flex flex-col gap-4 min-w-0",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-4 flex-wrap",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25",
                      children: e.jsx(os, {
                        className: "h-6 w-6 text-primary-foreground",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h2", {
                          className: "text-xl font-bold tracking-tight",
                          children: "Produtos",
                        }),
                        e.jsxs("p", {
                          className: "text-sm text-muted-foreground",
                          children: [x.length, " cadastrados"],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "relative flex-1 min-w-[200px]",
                  children: [
                    e.jsx(dt, {
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground",
                    }),
                    e.jsx(de, {
                      placeholder: "Buscar por nome ou código...",
                      value: P,
                      onChange: (o) => u(o.target.value),
                      className:
                        "pl-12 h-12 text-base rounded-2xl border-border/50 bg-muted/30 focus:bg-background transition-colors",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(ra, {
              className: "flex-1 min-h-[400px] max-h-[calc(100vh-16rem)]",
              children: e.jsxs("div", {
                className:
                  "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pb-4",
                children: [
                  G.length === 0 &&
                    e.jsxs("div", {
                      className: "col-span-full text-center py-20",
                      children: [
                        e.jsx(os, {
                          className:
                            "h-12 w-12 mx-auto text-muted-foreground/20 mb-3",
                        }),
                        e.jsx("p", {
                          className: "text-base text-muted-foreground",
                          children: "Nenhum produto encontrado",
                        }),
                      ],
                    }),
                  G.map((o) => {
                    const M = t.find((U) => U.id === o.id);
                    return e.jsxs(
                      "button",
                      {
                        onClick: () => xe(o),
                        className: `group relative flex flex-col p-4 rounded-2xl border-2 bg-card text-left transition-all duration-200 hover:shadow-lg active:scale-[0.96] ${
                          M
                            ? "border-primary/50 shadow-md shadow-primary/10"
                            : "border-border/30 hover:border-primary/30"
                        }`,
                        children: [
                          M &&
                            e.jsx(Ae, {
                              className:
                                "absolute -top-2 -right-2 h-7 w-7 rounded-full p-0 flex items-center justify-center text-sm font-bold shadow-lg",
                              children: M.quantity,
                            }),
                          e.jsxs("div", {
                            className:
                              "flex items-start justify-between gap-2 mb-3",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-sm font-semibold leading-snug line-clamp-2",
                                children: o.name,
                              }),
                              e.jsx("div", {
                                className:
                                  "h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 group-hover:scale-110",
                                children: e.jsx(Oe, { className: "h-4 w-4" }),
                              }),
                            ],
                          }),
                          o.code &&
                            e.jsxs("div", {
                              className: "flex items-center gap-1.5 mb-2",
                              children: [
                                e.jsx(mt, {
                                  className:
                                    "h-3.5 w-3.5 text-muted-foreground/40",
                                }),
                                e.jsx("span", {
                                  className: "text-xs text-muted-foreground",
                                  children: o.code,
                                }),
                              ],
                            }),
                          e.jsx("p", {
                            className:
                              "text-xl font-black text-primary mt-auto",
                            children: w(Z(o.salePrice)),
                          }),
                        ],
                      },
                      o.id
                    );
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "w-full lg:w-[420px] shrink-0",
          children: e.jsxs(z, {
            className:
              "rounded-3xl overflow-hidden border-2 border-border/40 shadow-xl h-full flex flex-col",
            children: [
              e.jsx("div", {
                className: "bg-foreground text-background px-5 py-4",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "h-10 w-10 rounded-xl bg-background/15 flex items-center justify-center backdrop-blur-sm",
                          children: e.jsx(na, { className: "h-5 w-5" }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className: "text-lg font-bold",
                              children: "Frente de Caixa",
                            }),
                            e.jsx("p", {
                              className: "text-xs opacity-60",
                              children:
                                je > 0
                                  ? `${je} ${
                                      je === 1 ? "item" : "itens"
                                    } no carrinho`
                                  : "Aguardando itens",
                            }),
                          ],
                        }),
                      ],
                    }),
                    t.length > 0 &&
                      e.jsxs(N, {
                        variant: "ghost",
                        size: "sm",
                        onClick: Se,
                        className:
                          "text-xs h-8 px-3 text-background/60 hover:text-background hover:bg-background/10 rounded-xl",
                        children: [
                          e.jsx(Ue, { className: "h-4 w-4 mr-1.5" }),
                          "Limpar",
                        ],
                      }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex-1 flex flex-col p-5 gap-4 overflow-hidden",
                children:
                  t.length === 0
                    ? e.jsx("div", {
                        className: "flex-1 flex items-center justify-center",
                        children: e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className:
                                "h-20 w-20 mx-auto rounded-3xl bg-muted/40 flex items-center justify-center mb-4",
                              children: e.jsx(As, {
                                className: "h-10 w-10 text-muted-foreground/20",
                              }),
                            }),
                            e.jsx("p", {
                              className:
                                "text-lg font-semibold text-muted-foreground/60",
                              children: "Carrinho vazio",
                            }),
                            e.jsx("p", {
                              className:
                                "text-sm text-muted-foreground/40 mt-1",
                              children: "Toque em um produto para adicionar",
                            }),
                          ],
                        }),
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(ra, {
                            className: "flex-1 max-h-[280px] -mx-1 px-1",
                            children: e.jsx("div", {
                              className: "space-y-2",
                              children: t.map((o) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center gap-3 p-3 rounded-2xl bg-muted/30 border border-border/20 transition-all hover:bg-muted/50",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-sm font-semibold truncate",
                                            children: o.name,
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "text-xs text-muted-foreground mt-0.5",
                                            children: [
                                              w(Z(o.salePrice)),
                                              " × ",
                                              o.quantity,
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-1 bg-background rounded-xl border border-border/40 p-0.5",
                                        children: [
                                          e.jsx(N, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "h-7 w-7 rounded-lg",
                                            onClick: () => ce(o.id, -1),
                                            children: e.jsx(Ht, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "w-7 text-center text-sm font-bold",
                                            children: o.quantity,
                                          }),
                                          e.jsx(N, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "h-7 w-7 rounded-lg",
                                            onClick: () => ce(o.id, 1),
                                            children: e.jsx(Oe, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-sm font-bold text-primary w-20 text-right shrink-0",
                                        children: w(o.subtotal),
                                      }),
                                      e.jsx(N, {
                                        size: "icon",
                                        variant: "ghost",
                                        className:
                                          "h-7 w-7 rounded-lg text-destructive/60 hover:text-destructive shrink-0",
                                        onClick: () => ie(o.id),
                                        children: e.jsx(xt, {
                                          className: "h-4 w-4",
                                        }),
                                      }),
                                    ],
                                  },
                                  o.id
                                )
                              ),
                            }),
                          }),
                          e.jsx(ya, {}),
                          e.jsxs("div", {
                            className: "flex gap-2 items-center",
                            children: [
                              e.jsx(cs, {
                                className:
                                  "h-4 w-4 text-muted-foreground shrink-0",
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex rounded-xl border border-border/40 overflow-hidden h-10",
                                children: [
                                  e.jsx("button", {
                                    onClick: () => f("percentage"),
                                    className: `px-3 text-sm font-medium transition-colors ${
                                      q === "percentage"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted/30 hover:bg-muted/60"
                                    }`,
                                    children: e.jsx(Ut, {
                                      className: "h-4 w-4",
                                    }),
                                  }),
                                  e.jsx("button", {
                                    onClick: () => f("fixed"),
                                    className: `px-3 text-sm font-medium transition-colors ${
                                      q === "fixed"
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted/30 hover:bg-muted/60"
                                    }`,
                                    children: "R$",
                                  }),
                                ],
                              }),
                              e.jsx(de, {
                                type: "text",
                                placeholder:
                                  q === "percentage" ? "Ex: 10" : "Ex: 5,00",
                                value: K,
                                onChange: (o) => R(o.target.value),
                                className: "flex-1 h-10 text-sm rounded-xl",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/30 p-4 space-y-2",
                            children: [
                              a > 0 &&
                                e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between text-sm text-muted-foreground",
                                      children: [
                                        e.jsxs("span", {
                                          children: [
                                            "Subtotal (",
                                            je,
                                            " itens)",
                                          ],
                                        }),
                                        e.jsx("span", { children: w(ne) }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className:
                                        "flex justify-between text-sm text-amber-600 dark:text-amber-400",
                                      children: [
                                        e.jsxs("span", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            e.jsx(cs, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                            "Desconto",
                                          ],
                                        }),
                                        e.jsxs("span", {
                                          children: ["-", w(a)],
                                        }),
                                      ],
                                    }),
                                    e.jsx(ya, {}),
                                  ],
                                }),
                              e.jsxs("div", {
                                className:
                                  "flex justify-between items-center pt-1",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "text-base font-bold uppercase tracking-wider text-muted-foreground",
                                    children: "Total",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-3xl font-black text-primary",
                                    children: w(d),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-xs font-bold uppercase tracking-widest text-muted-foreground/50 px-1",
                                children: "Pagamento",
                              }),
                              e.jsx("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: ar.map((o) => {
                                  const M = r === o.id;
                                  return e.jsxs(
                                    "button",
                                    {
                                      onClick: () => {
                                        g(o.id), o.id !== "Dinheiro" && m("");
                                      },
                                      className: `flex items-center gap-2.5 p-3 rounded-2xl border-2 transition-all duration-200 ${
                                        M
                                          ? o.activeColor +
                                            " shadow-lg scale-[1.02]"
                                          : o.color + " hover:scale-[1.01]"
                                      }`,
                                      children: [
                                        e.jsx(o.icon, { className: "h-5 w-5" }),
                                        e.jsx("span", {
                                          className: "text-sm font-bold",
                                          children: o.label,
                                        }),
                                      ],
                                    },
                                    o.id
                                  );
                                }),
                              }),
                            ],
                          }),
                          r === "Dinheiro" &&
                            e.jsxs("div", {
                              className:
                                "rounded-2xl border-2 border-emerald-500/20 bg-emerald-500/5 p-4 space-y-3",
                              children: [
                                e.jsxs("label", {
                                  className:
                                    "text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 flex items-center gap-2",
                                  children: [
                                    e.jsx(Yt, { className: "h-4 w-4" }),
                                    " Calculadora de Troco",
                                  ],
                                }),
                                e.jsx(de, {
                                  type: "text",
                                  placeholder: "Valor recebido do cliente...",
                                  value: l,
                                  onChange: (o) => m(o.target.value),
                                  className:
                                    "h-12 text-base rounded-xl border-emerald-500/20 focus-visible:ring-emerald-500/30",
                                }),
                                e.jsx("div", {
                                  className: "grid grid-cols-3 gap-1.5",
                                  children: tr.map((o) =>
                                    e.jsx(
                                      "button",
                                      {
                                        onClick: () =>
                                          m(o.toString().replace(".", ",")),
                                        className:
                                          "py-2 text-sm font-semibold rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 transition-colors",
                                        children: w(o),
                                      },
                                      o
                                    )
                                  ),
                                }),
                                y > 0 &&
                                  e.jsxs("div", {
                                    className: `flex items-center justify-between p-4 rounded-2xl ${
                                      ae >= 0
                                        ? "bg-emerald-500/15"
                                        : "bg-destructive/10"
                                    }`,
                                    children: [
                                      e.jsxs("span", {
                                        className:
                                          "text-sm font-bold uppercase tracking-wider flex items-center gap-2",
                                        children: [
                                          e.jsx(Ta, { className: "h-5 w-5" }),
                                          " Troco",
                                        ],
                                      }),
                                      e.jsx("span", {
                                        className: `text-2xl font-black ${
                                          ae >= 0
                                            ? "text-emerald-600 dark:text-emerald-400"
                                            : "text-destructive"
                                        }`,
                                        children:
                                          ae >= 0 ? w(ae) : "Insuficiente",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          e.jsx(N, {
                            className:
                              "w-full h-14 text-lg font-bold rounded-2xl gap-3 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.98]",
                            size: "lg",
                            onClick: we,
                            disabled: V,
                            children: V
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(la, {
                                      className: "h-6 w-6 animate-spin",
                                    }),
                                    "Processando...",
                                  ],
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(ut, { className: "h-6 w-6" }),
                                    "Finalizar ",
                                    w(d),
                                  ],
                                }),
                          }),
                        ],
                      }),
              }),
            ],
          }),
        }),
        L &&
          e.jsx("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-in fade-in-0 duration-300",
            children: e.jsxs("div", {
              className: "text-center animate-in zoom-in-75 duration-500",
              children: [
                e.jsx("div", {
                  className:
                    "h-24 w-24 mx-auto rounded-full bg-emerald-500 flex items-center justify-center mb-6 shadow-2xl shadow-emerald-500/30",
                  children: e.jsx(ht, { className: "h-14 w-14 text-white" }),
                }),
                e.jsx("h2", {
                  className: "text-3xl font-black text-foreground mb-2",
                  children: "Venda Finalizada!",
                }),
                e.jsx("p", {
                  className: "text-xl text-muted-foreground",
                  children: w(C),
                }),
              ],
            }),
          }),
      ],
    })
  );
}
function nr({
  open: x,
  onOpenChange: S,
  onSave: p,
  account: t,
  defaultType: b = "payable",
}) {
  const { symbol: P } = Re(),
    { toast: u } = Ke(),
    { user: r } = bs(),
    [g, V] = n.useState(!1),
    [T, q] = n.useState(""),
    [f, K] = n.useState(""),
    [R, l] = n.useState(b),
    [m, L] = n.useState("variable"),
    [E, C] = n.useState(""),
    [D, w] = n.useState(void 0),
    [re, ge] = n.useState(""),
    [Z, G] = n.useState(""),
    [xe, ce] = n.useState("");
  n.useEffect(() => {
    if (t) {
      if (
        (q(t.description),
        K(t.amount.toString().replace(".", ",")),
        l(t.type),
        L(t.recurrence_type),
        C(t.category || ""),
        t.due_day)
      ) {
        const a = new Date();
        a.setDate(t.due_day), w(a);
      } else w(void 0);
      ge(t.duration_months?.toString() || ""),
        G(t.payment_method || ""),
        ce(t.notes || "");
    } else
      q(""),
        K(""),
        l(b),
        L("variable"),
        C(""),
        w(void 0),
        ge(""),
        G(""),
        ce("");
  }, [t, x, b]);
  const ie = async (a) => {
      if ((a.preventDefault(), !!r)) {
        if (!T.trim()) {
          u({ title: "Descrição é obrigatória", variant: "destructive" });
          return;
        }
        if (!f.trim()) {
          u({ title: "Valor é obrigatório", variant: "destructive" });
          return;
        }
        V(!0);
        try {
          const d = parseFloat(f.replace(/\./g, "").replace(",", ".")) || 0,
            y = D ? D.getDate() : null,
            ae = re ? parseInt(re) : null;
          let we = null;
          if (m === "fixed" && ae) {
            const le = new Date();
            le.setMonth(le.getMonth() + ae),
              (we = le.toISOString().split("T")[0]);
          }
          const i = {
            user_id: r.id,
            description: T,
            amount: d,
            type: R,
            recurrence_type: m,
            category: E || null,
            due_day: y,
            duration_months: ae,
            end_date: we,
            payment_method: Z || null,
            notes: xe || null,
          };
          if (t?.id) {
            const { error: le } = await j
              .from("scheduled_accounts")
              .update(i)
              .eq("id", t.id);
            if (le) throw le;
            u({ title: "Conta atualizada com sucesso!" });
          } else {
            const { data: le, error: o } = await j
              .from("scheduled_accounts")
              .insert(i)
              .select()
              .single();
            if (o) throw o;
            if (le) {
              const M = new Date();
              M.setHours(0, 0, 0, 0);
              let U = D ? new Date(D) : new Date();
              U.setHours(0, 0, 0, 0);
              const I = U.toISOString().split("T")[0],
                A = M.toISOString().split("T")[0],
                B = I < A ? "overdue" : "pending";
              await j
                .from("account_instances")
                .insert({
                  user_id: r.id,
                  scheduled_account_id: le.id,
                  due_date: I,
                  amount: d,
                  status: B,
                });
            }
            u({ title: "Conta cadastrada com sucesso!" });
          }
          p(), S(!1);
        } catch {
          u({ title: "Erro ao salvar conta", variant: "destructive" });
        } finally {
          V(!1);
        }
      }
    },
    je =
      R === "payable"
        ? [
            "Aluguel",
            "Energia",
            "Água",
            "Internet",
            "Telefone",
            "Salários",
            "Fornecedores",
            "Impostos",
            "Marketing",
            "Manutenção",
            "Outros",
          ]
        : [
            "Serviços",
            "Vendas",
            "Aluguéis",
            "Mensalidades",
            "Comissões",
            "Outros",
          ];
  return e.jsx(We, {
    open: x,
    onOpenChange: S,
    children: e.jsxs(Xe, {
      className: "max-w-2xl max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx(Ge, {
          children: e.jsx(Qe, {
            children: t
              ? "Editar Conta"
              : R === "payable"
              ? "Nova Conta a Pagar"
              : "Nova Conta a Receber",
          }),
        }),
        e.jsxs("form", {
          onSubmit: ie,
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(H, { children: "Descrição *" }),
                e.jsx(de, {
                  value: T,
                  onChange: (a) => q(a.target.value),
                  placeholder: "Ex: Aluguel do ponto comercial",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx(H, { children: "Tipo *" }),
                    e.jsxs(fe, {
                      value: R,
                      onValueChange: l,
                      children: [
                        e.jsx(ye, {
                          children: e.jsx(ve, {
                            placeholder: "Selecione o tipo",
                          }),
                        }),
                        e.jsxs(be, {
                          children: [
                            e.jsx(_, {
                              value: "payable",
                              children: "Conta a Pagar",
                            }),
                            e.jsx(_, {
                              value: "receivable",
                              children: "Conta a Receber",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(H, { children: "Recorrência *" }),
                    e.jsxs(fe, {
                      value: m,
                      onValueChange: L,
                      children: [
                        e.jsx(ye, {
                          children: e.jsx(ve, {
                            placeholder: "Selecione a recorrência",
                          }),
                        }),
                        e.jsxs(be, {
                          children: [
                            e.jsx(_, {
                              value: "variable",
                              children: "Variável (única vez)",
                            }),
                            e.jsx(_, {
                              value: "fixed",
                              children: "Fixa (mensal)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs(H, { children: ["Valor (", P, ") *"] }),
                    e.jsx(de, {
                      value: f,
                      onChange: (a) => {
                        const d = a.target.value.replace(/[^\d,]/g, "");
                        K(d);
                      },
                      placeholder: "0,00",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx(H, { children: "Categoria" }),
                    e.jsxs(fe, {
                      value: E,
                      onValueChange: C,
                      children: [
                        e.jsx(ye, {
                          children: e.jsx(ve, {
                            placeholder: "Selecione a categoria",
                          }),
                        }),
                        e.jsx(be, {
                          children: je.map((a) =>
                            e.jsx(_, { value: a, children: a }, a)
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className: "flex flex-col gap-2",
                  children: [
                    e.jsx(H, { children: "Data de Vencimento" }),
                    e.jsxs(ts, {
                      children: [
                        e.jsx(rs, {
                          asChild: !0,
                          children: e.jsxs(N, {
                            variant: "outline",
                            className: Le(
                              "w-full justify-start text-left font-normal",
                              !D && "text-muted-foreground"
                            ),
                            children: [
                              e.jsx(Ye, { className: "mr-2 h-4 w-4" }),
                              D
                                ? me(D, "dd/MM/yyyy", { locale: qe })
                                : e.jsx("span", {
                                    children: "Selecione a data",
                                  }),
                            ],
                          }),
                        }),
                        e.jsx(ns, {
                          className: "w-auto p-0 z-50",
                          align: "start",
                          children: e.jsx(is, {
                            mode: "single",
                            selected: D,
                            onSelect: w,
                            initialFocus: !0,
                            className: Le("p-3 pointer-events-auto"),
                            locale: qe,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                m === "fixed" &&
                  e.jsxs("div", {
                    children: [
                      e.jsx(H, { children: "Duração (meses)" }),
                      e.jsx(de, {
                        type: "number",
                        min: "1",
                        value: re,
                        onChange: (a) => ge(a.target.value),
                        placeholder: "Ex: 12 (vazio = indefinido)",
                      }),
                    ],
                  }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx(H, { children: "Forma de Pagamento" }),
                e.jsxs(fe, {
                  value: Z,
                  onValueChange: G,
                  children: [
                    e.jsx(ye, {
                      children: e.jsx(ve, {
                        placeholder: "Selecione a forma de pagamento",
                      }),
                    }),
                    e.jsxs(be, {
                      children: [
                        e.jsx(_, { value: "Dinheiro", children: "Dinheiro" }),
                        e.jsx(_, { value: "PIX", children: "PIX" }),
                        e.jsx(_, {
                          value: "Cartão de Crédito",
                          children: "Cartão de Crédito",
                        }),
                        e.jsx(_, {
                          value: "Cartão de Débito",
                          children: "Cartão de Débito",
                        }),
                        e.jsx(_, { value: "Boleto", children: "Boleto" }),
                        e.jsx(_, {
                          value: "Transferência",
                          children: "Transferência",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx(H, { children: "Observações" }),
                e.jsx(Is, {
                  value: xe,
                  onChange: (a) => ce(a.target.value),
                  placeholder: "Observações adicionais...",
                }),
              ],
            }),
            e.jsxs(vs, {
              children: [
                e.jsx(N, {
                  type: "button",
                  variant: "outline",
                  onClick: () => S(!1),
                  children: "Cancelar",
                }),
                e.jsx(N, {
                  type: "submit",
                  disabled: g,
                  children: g
                    ? "Salvando..."
                    : t
                    ? "Salvar Alterações"
                    : "Cadastrar",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function lr({ open: x, onOpenChange: S, onSave: p, instance: t }) {
  const { symbol: b, format: P } = Re(),
    { toast: u } = Ke(),
    { user: r } = bs(),
    [g, V] = n.useState(!1),
    [T, q] = n.useState(""),
    [f, K] = n.useState(""),
    [R, l] = n.useState("");
  n.useEffect(() => {
    t && (q(t.amount.toString().replace(".", ",")), K(""), l(""));
  }, [t, x]);
  const m = async (E) => {
    if ((E.preventDefault(), !(!r || !t || g))) {
      if (!f) {
        u({ title: "Selecione a forma de pagamento", variant: "destructive" });
        return;
      }
      V(!0);
      try {
        const { data: C, error: D } = await j
          .from("account_instances")
          .select("status")
          .eq("id", t.id)
          .single();
        if (D) throw D;
        if (C?.status === "paid") {
          u({ title: "Esta conta já foi paga!", variant: "destructive" }),
            S(!1),
            p();
          return;
        }
        const w = parseFloat(T.replace(/\./g, "").replace(",", ".")) || 0,
          { data: re, error: ge } = await j
            .from("account_instances")
            .update({
              status: "paid",
              paid_at: new Date().toISOString(),
              paid_amount: w,
              payment_method: f,
              notes: R || null,
            })
            .eq("id", t.id)
            .in("status", ["pending", "overdue"])
            .select("id,status");
        if (ge) throw ge;
        if (!re || re.length === 0) {
          u({
            title: "Esta conta já foi paga ou não pôde ser atualizada",
            variant: "destructive",
          }),
            S(!1),
            p();
          return;
        }
        if (
          (t.scheduled_account?.recurrence_type === "variable" &&
            (await j
              .from("scheduled_accounts")
              .update({ is_active: !1 })
              .eq("id", t.scheduled_account_id)),
          t.scheduled_account?.recurrence_type === "fixed")
        ) {
          const G = new Date(t.due_date + "T00:00:00");
          G.setMonth(G.getMonth() + 1);
          const xe = t.scheduled_account?.end_date,
            ce = xe ? new Date(xe + "T00:00:00") : null,
            ie = G.toISOString().split("T")[0];
          if (!ce || G <= ce) {
            const { data: Se } = await j
              .from("account_instances")
              .select("id")
              .eq("scheduled_account_id", t.scheduled_account_id)
              .eq("due_date", ie)
              .maybeSingle();
            Se ||
              (await j
                .from("account_instances")
                .insert({
                  user_id: r.id,
                  scheduled_account_id: t.scheduled_account_id,
                  due_date: ie,
                  amount: t.amount,
                  status: "pending",
                }));
          } else
            await j
              .from("scheduled_accounts")
              .update({ is_active: !1 })
              .eq("id", t.scheduled_account_id);
        }
        const Z =
          t.scheduled_account?.type === "receivable" ? "income" : "expense";
        await j
          .from("transactions")
          .insert({
            user_id: r.id,
            description: `${
              t.scheduled_account?.type === "receivable"
                ? "Recebimento"
                : "Pagamento"
            }: ${t.scheduled_account?.description}`,
            amount: w,
            type: Z,
            category:
              t.scheduled_account?.type === "receivable"
                ? "Contas a Receber"
                : "Contas a Pagar",
            date: new Date().toISOString().split("T")[0],
            payment_method: f,
          }),
          u({
            title:
              t.scheduled_account?.type === "receivable"
                ? "Recebimento confirmado!"
                : "Pagamento confirmado!",
          }),
          S(!1),
          setTimeout(() => {
            p();
          }, 100);
      } catch {
        u({ title: "Erro ao confirmar pagamento", variant: "destructive" });
      } finally {
        V(!1);
      }
    }
  };
  if (!t) return null;
  const L = t.status === "overdue";
  return e.jsx(We, {
    open: x,
    onOpenChange: S,
    children: e.jsxs(Xe, {
      className: "max-w-md",
      children: [
        e.jsx(Ge, {
          children: e.jsxs(Qe, {
            className: "flex items-center gap-2",
            children: [
              L
                ? e.jsx(oa, { className: "w-5 h-5 text-destructive" })
                : e.jsx(js, { className: "w-5 h-5 text-green-600" }),
              t.scheduled_account?.type === "receivable"
                ? "Confirmar Recebimento"
                : "Confirmar Pagamento",
            ],
          }),
        }),
        e.jsxs("div", {
          className: "bg-muted p-4 rounded-lg space-y-2 mb-4",
          children: [
            e.jsx("p", {
              className: "font-medium",
              children: t.scheduled_account?.description,
            }),
            e.jsxs("div", {
              className: "flex justify-between text-sm",
              children: [
                e.jsx("span", {
                  className: "text-muted-foreground",
                  children: "Vencimento:",
                }),
                e.jsx("span", {
                  className: L ? "text-destructive font-medium" : "",
                  children: me(
                    new Date(t.due_date + "T00:00:00"),
                    "dd/MM/yyyy",
                    { locale: qe }
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex justify-between text-sm",
              children: [
                e.jsx("span", {
                  className: "text-muted-foreground",
                  children: "Valor:",
                }),
                e.jsx("span", {
                  className: "font-medium",
                  children: P(t.amount),
                }),
              ],
            }),
            L &&
              e.jsx("p", {
                className: "text-destructive text-sm font-medium",
                children: "⚠️ Esta conta está vencida!",
              }),
          ],
        }),
        e.jsxs("form", {
          onSubmit: m,
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs(H, {
                  children: [
                    "Valor ",
                    t.scheduled_account?.type === "receivable"
                      ? "Recebido"
                      : "Pago",
                    " (",
                    b,
                    ") *",
                  ],
                }),
                e.jsx(de, {
                  value: T,
                  onChange: (E) => {
                    const C = E.target.value.replace(/[^\d,]/g, "");
                    q(C);
                  },
                  placeholder: "0,00",
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx(H, { children: "Forma de Pagamento *" }),
                e.jsxs(fe, {
                  value: f,
                  onValueChange: K,
                  children: [
                    e.jsx(ye, {
                      children: e.jsx(ve, { placeholder: "Selecione" }),
                    }),
                    e.jsxs(be, {
                      children: [
                        e.jsx(_, { value: "Dinheiro", children: "Dinheiro" }),
                        e.jsx(_, { value: "PIX", children: "PIX" }),
                        e.jsx(_, {
                          value: "Cartão de Crédito",
                          children: "Cartão de Crédito",
                        }),
                        e.jsx(_, {
                          value: "Cartão de Débito",
                          children: "Cartão de Débito",
                        }),
                        e.jsx(_, { value: "Boleto", children: "Boleto" }),
                        e.jsx(_, {
                          value: "Transferência",
                          children: "Transferência",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx(H, { children: "Observações" }),
                e.jsx(Is, {
                  value: R,
                  onChange: (E) => l(E.target.value),
                  placeholder: "Observações...",
                }),
              ],
            }),
            e.jsxs(vs, {
              children: [
                e.jsx(N, {
                  type: "button",
                  variant: "outline",
                  onClick: () => S(!1),
                  children: "Cancelar",
                }),
                e.jsx(N, {
                  type: "submit",
                  disabled: g,
                  variant: L ? "destructive" : "default",
                  children: g ? "Confirmando..." : "Confirmar",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function or() {
  const { user: x } = bs(),
    { toast: S } = Ke(),
    { format: p } = Re(),
    [t, b] = n.useState([]),
    [P, u] = n.useState([]),
    [r, g] = n.useState(!0),
    [V, T] = n.useState(!1),
    [q, f] = n.useState(!1),
    [K, R] = n.useState(null),
    [l, m] = n.useState(null),
    [L, E] = n.useState(null),
    [C, D] = n.useState(null),
    [w, re] = n.useState("payable"),
    [ge, Z] = n.useState("pending"),
    G = async () => {
      if (x) {
        g(!0);
        try {
          const { data: i, error: le } = await j
            .from("scheduled_accounts")
            .select("*")
            .eq("user_id", x.id)
            .eq("is_active", !0)
            .order("created_at", { ascending: !1 });
          if (le) throw le;
          b(i || []);
          const { data: o, error: M } = await j
            .from("account_instances")
            .select(
              "*, scheduled_account:scheduled_accounts(id, description, type, recurrence_type, duration_months, end_date, is_active)"
            )
            .eq("user_id", x.id)
            .order("due_date", { ascending: !0 });
          if (M) throw M;
          const U = new Date().toISOString().split("T")[0],
            I = (o || []).map((B) =>
              B.status === "pending" && B.due_date < U
                ? { ...B, status: "overdue" }
                : B
            ),
            A = I.filter(
              (B) =>
                B.status === "overdue" &&
                (o || []).find((O) => O.id === B.id)?.status === "pending"
            ).map((B) => B.id);
          A.length > 0 &&
            (await j
              .from("account_instances")
              .update({ status: "overdue" })
              .in("id", A)),
            u(I);
        } catch {
          S({ title: "Erro ao carregar contas", variant: "destructive" });
        } finally {
          g(!1);
        }
      }
    };
  n.useEffect(() => {
    G();
  }, [x]),
    n.useEffect(() => {
      if (!x) return;
      const i = j
        .channel("account_changes")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "account_instances",
            filter: `user_id=eq.${x.id}`,
          },
          () => G()
        )
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "scheduled_accounts",
            filter: `user_id=eq.${x.id}`,
          },
          () => G()
        )
        .subscribe();
      return () => {
        j.removeChannel(i);
      };
    }, [x]);
  const xe = async () => {
      if (L)
        try {
          const { error: i } = await j
            .from("scheduled_accounts")
            .update({ is_active: !1 })
            .eq("id", L);
          if (i) throw i;
          S({ title: "Conta removida com sucesso!" }), G();
        } catch {
          S({ title: "Erro ao remover conta", variant: "destructive" });
        } finally {
          E(null);
        }
    },
    ce = async () => {
      if (C)
        try {
          const { error: i } = await j
            .from("account_instances")
            .delete()
            .eq("id", C);
          if (i) throw i;
          S({ title: "Conta removida com sucesso!" }), G();
        } catch {
          S({ title: "Erro ao remover conta", variant: "destructive" });
        } finally {
          D(null);
        }
    },
    ie = (i) => {
      R(i), re(i.type), T(!0);
    },
    Se = (i) => {
      i.status !== "paid" && (m(i), f(!0));
    },
    ne = (i) => {
      switch (i) {
        case "paid":
          return e.jsxs(Ae, {
            className: "bg-green-500 text-white",
            children: [e.jsx(js, { className: "w-3 h-3 mr-1" }), "Pago"],
          });
        case "overdue":
          return e.jsxs(Ae, {
            variant: "destructive",
            children: [e.jsx(oa, { className: "w-3 h-3 mr-1" }), "Vencido"],
          });
        default:
          return e.jsxs(Ae, {
            variant: "secondary",
            children: [e.jsx(la, { className: "w-3 h-3 mr-1" }), "Pendente"],
          });
      }
    },
    je = (i) =>
      i === "payable"
        ? e.jsxs(Ae, {
            variant: "outline",
            className: "text-destructive border-destructive",
            children: [e.jsx(Me, { className: "w-3 h-3 mr-1" }), "Pagar"],
          })
        : e.jsxs(Ae, {
            variant: "outline",
            className: "text-green-600 border-green-600",
            children: [e.jsx(ca, { className: "w-3 h-3 mr-1" }), "Receber"],
          }),
    a = P.filter((i) => i.status === "pending"),
    d = P.filter((i) => i.status === "overdue"),
    y = P.filter((i) => i.status === "paid"),
    ae = a.reduce((i, le) => i + le.amount, 0),
    we = d.reduce((i, le) => i + le.amount, 0);
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-4 gap-4",
        children: [
          e.jsx(z, {
            className: "p-4",
            children: e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "Contas Cadastradas",
                    }),
                    e.jsx("p", {
                      className: "text-2xl font-bold",
                      children: t.length,
                    }),
                  ],
                }),
                e.jsx(Me, { className: "w-8 h-8 text-primary opacity-50" }),
              ],
            }),
          }),
          e.jsx(z, {
            className: "p-4",
            children: e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "Pendentes",
                    }),
                    e.jsx("p", {
                      className: "text-2xl font-bold text-yellow-600",
                      children: a.length,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: p(ae),
                    }),
                  ],
                }),
                e.jsx(la, { className: "w-8 h-8 text-yellow-600 opacity-50" }),
              ],
            }),
          }),
          e.jsx(z, {
            className: "p-4",
            children: e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "Vencidas",
                    }),
                    e.jsx("p", {
                      className: "text-2xl font-bold text-destructive",
                      children: d.length,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: p(we),
                    }),
                  ],
                }),
                e.jsx(oa, { className: "w-8 h-8 text-destructive opacity-50" }),
              ],
            }),
          }),
          e.jsx(z, {
            className: "p-4",
            children: e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "Pagas (mês)",
                    }),
                    e.jsx("p", {
                      className: "text-2xl font-bold text-green-600",
                      children: y.length,
                    }),
                  ],
                }),
                e.jsx(js, { className: "w-8 h-8 text-green-600 opacity-50" }),
              ],
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex flex-wrap gap-2",
        children: [
          e.jsxs(N, {
            onClick: () => {
              R(null), re("payable"), T(!0);
            },
            children: [
              e.jsx(Oe, { className: "w-4 h-4 mr-2" }),
              "Nova Conta a Pagar",
            ],
          }),
          e.jsxs(N, {
            variant: "outline",
            onClick: () => {
              R(null), re("receivable"), T(!0);
            },
            children: [
              e.jsx(Oe, { className: "w-4 h-4 mr-2" }),
              "Nova Conta a Receber",
            ],
          }),
        ],
      }),
      e.jsxs(Ea, {
        value: ge,
        onValueChange: Z,
        children: [
          e.jsxs(Ma, {
            children: [
              e.jsxs(ke, {
                value: "pending",
                children: ["Pendentes ", a.length > 0 && `(${a.length})`],
              }),
              e.jsxs(ke, {
                value: "overdue",
                children: ["Vencidas ", d.length > 0 && `(${d.length})`],
              }),
              e.jsx(ke, { value: "paid", children: "Pagas" }),
              e.jsx(ke, { value: "registered", children: "Cadastradas" }),
            ],
          }),
          e.jsx(Te, {
            value: "pending",
            className: "space-y-4",
            children: e.jsx(z, {
              children: e.jsxs(Cs, {
                children: [
                  e.jsx(Ss, {
                    children: e.jsxs(Pe, {
                      children: [
                        e.jsx(J, { children: "Descrição" }),
                        e.jsx(J, { children: "Tipo" }),
                        e.jsx(J, { children: "Vencimento" }),
                        e.jsx(J, { children: "Valor" }),
                        e.jsx(J, { children: "Status" }),
                        e.jsx(J, {
                          className: "text-right",
                          children: "Ações",
                        }),
                      ],
                    }),
                  }),
                  e.jsx(Ds, {
                    children:
                      a.length === 0
                        ? e.jsx(Pe, {
                            children: e.jsx(Y, {
                              colSpan: 6,
                              className:
                                "text-center text-muted-foreground py-8",
                              children: "Nenhuma conta pendente",
                            }),
                          })
                        : a.map((i) =>
                            e.jsxs(
                              Pe,
                              {
                                children: [
                                  e.jsx(Y, {
                                    className: "font-medium",
                                    children: i.scheduled_account?.description,
                                  }),
                                  e.jsx(Y, {
                                    children: je(
                                      i.scheduled_account?.type || "payable"
                                    ),
                                  }),
                                  e.jsx(Y, {
                                    children: me(
                                      new Date(i.due_date + "T00:00:00"),
                                      "dd/MM/yyyy",
                                      { locale: qe }
                                    ),
                                  }),
                                  e.jsx(Y, { children: p(i.amount) }),
                                  e.jsx(Y, { children: ne(i.status) }),
                                  e.jsxs(Y, {
                                    className: "text-right space-x-2",
                                    children: [
                                      e.jsxs(N, {
                                        size: "sm",
                                        onClick: () => Se(i),
                                        children: [
                                          e.jsx(js, {
                                            className: "w-4 h-4 mr-1",
                                          }),
                                          i.scheduled_account?.type ===
                                          "receivable"
                                            ? "Receber"
                                            : "Pagar",
                                        ],
                                      }),
                                      e.jsx(N, {
                                        size: "icon",
                                        variant: "ghost",
                                        className: "text-destructive",
                                        onClick: () => D(i.id),
                                        children: e.jsx(Ue, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              i.id
                            )
                          ),
                  }),
                ],
              }),
            }),
          }),
          e.jsx(Te, {
            value: "overdue",
            className: "space-y-4",
            children: e.jsx(z, {
              children: e.jsxs(Cs, {
                children: [
                  e.jsx(Ss, {
                    children: e.jsxs(Pe, {
                      children: [
                        e.jsx(J, { children: "Descrição" }),
                        e.jsx(J, { children: "Tipo" }),
                        e.jsx(J, { children: "Vencimento" }),
                        e.jsx(J, { children: "Valor" }),
                        e.jsx(J, { children: "Status" }),
                        e.jsx(J, {
                          className: "text-right",
                          children: "Ações",
                        }),
                      ],
                    }),
                  }),
                  e.jsx(Ds, {
                    children:
                      d.length === 0
                        ? e.jsx(Pe, {
                            children: e.jsx(Y, {
                              colSpan: 6,
                              className:
                                "text-center text-muted-foreground py-8",
                              children: "Nenhuma conta vencida",
                            }),
                          })
                        : d.map((i) =>
                            e.jsxs(
                              Pe,
                              {
                                className: "bg-destructive/10",
                                children: [
                                  e.jsx(Y, {
                                    className: "font-medium",
                                    children: i.scheduled_account?.description,
                                  }),
                                  e.jsx(Y, {
                                    children: je(
                                      i.scheduled_account?.type || "payable"
                                    ),
                                  }),
                                  e.jsx(Y, {
                                    className: "text-destructive",
                                    children: me(
                                      new Date(i.due_date + "T00:00:00"),
                                      "dd/MM/yyyy",
                                      { locale: qe }
                                    ),
                                  }),
                                  e.jsx(Y, { children: p(i.amount) }),
                                  e.jsx(Y, { children: ne(i.status) }),
                                  e.jsxs(Y, {
                                    className: "text-right space-x-2",
                                    children: [
                                      e.jsxs(N, {
                                        size: "sm",
                                        variant: "destructive",
                                        onClick: () => Se(i),
                                        children: [
                                          e.jsx(js, {
                                            className: "w-4 h-4 mr-1",
                                          }),
                                          i.scheduled_account?.type ===
                                          "receivable"
                                            ? "Receber"
                                            : "Pagar",
                                        ],
                                      }),
                                      e.jsx(N, {
                                        size: "icon",
                                        variant: "ghost",
                                        className: "text-destructive",
                                        onClick: () => D(i.id),
                                        children: e.jsx(Ue, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              i.id
                            )
                          ),
                  }),
                ],
              }),
            }),
          }),
          e.jsx(Te, {
            value: "paid",
            className: "space-y-4",
            children: e.jsx(z, {
              children: e.jsxs(Cs, {
                children: [
                  e.jsx(Ss, {
                    children: e.jsxs(Pe, {
                      children: [
                        e.jsx(J, { children: "Descrição" }),
                        e.jsx(J, { children: "Tipo" }),
                        e.jsx(J, { children: "Vencimento" }),
                        e.jsx(J, { children: "Valor Pago" }),
                        e.jsx(J, { children: "Data Pagamento" }),
                        e.jsx(J, { children: "Status" }),
                      ],
                    }),
                  }),
                  e.jsx(Ds, {
                    children:
                      y.length === 0
                        ? e.jsx(Pe, {
                            children: e.jsx(Y, {
                              colSpan: 6,
                              className:
                                "text-center text-muted-foreground py-8",
                              children: "Nenhuma conta paga",
                            }),
                          })
                        : y.map((i) =>
                            e.jsxs(
                              Pe,
                              {
                                children: [
                                  e.jsx(Y, {
                                    className: "font-medium",
                                    children: i.scheduled_account?.description,
                                  }),
                                  e.jsx(Y, {
                                    children: je(
                                      i.scheduled_account?.type || "payable"
                                    ),
                                  }),
                                  e.jsx(Y, {
                                    children: me(
                                      new Date(i.due_date + "T00:00:00"),
                                      "dd/MM/yyyy",
                                      { locale: qe }
                                    ),
                                  }),
                                  e.jsx(Y, {
                                    children: p(i.paid_amount || i.amount),
                                  }),
                                  e.jsx(Y, {
                                    children: i.paid_at
                                      ? me(new Date(i.paid_at), "dd/MM/yyyy", {
                                          locale: qe,
                                        })
                                      : "-",
                                  }),
                                  e.jsx(Y, { children: ne(i.status) }),
                                ],
                              },
                              i.id
                            )
                          ),
                  }),
                ],
              }),
            }),
          }),
          e.jsx(Te, {
            value: "registered",
            className: "space-y-4",
            children: e.jsx(z, {
              children: e.jsxs(Cs, {
                children: [
                  e.jsx(Ss, {
                    children: e.jsxs(Pe, {
                      children: [
                        e.jsx(J, { children: "Descrição" }),
                        e.jsx(J, { children: "Tipo" }),
                        e.jsx(J, { children: "Recorrência" }),
                        e.jsx(J, { children: "Valor" }),
                        e.jsx(J, { children: "Dia Venc." }),
                        e.jsx(J, { children: "Categoria" }),
                        e.jsx(J, {
                          className: "text-right",
                          children: "Ações",
                        }),
                      ],
                    }),
                  }),
                  e.jsx(Ds, {
                    children:
                      t.length === 0
                        ? e.jsx(Pe, {
                            children: e.jsx(Y, {
                              colSpan: 7,
                              className:
                                "text-center text-muted-foreground py-8",
                              children: "Nenhuma conta cadastrada",
                            }),
                          })
                        : t.map((i) =>
                            e.jsxs(
                              Pe,
                              {
                                children: [
                                  e.jsx(Y, {
                                    className: "font-medium",
                                    children: i.description,
                                  }),
                                  e.jsx(Y, { children: je(i.type) }),
                                  e.jsx(Y, {
                                    children: e.jsx(Ae, {
                                      variant:
                                        i.recurrence_type === "fixed"
                                          ? "default"
                                          : "secondary",
                                      children:
                                        i.recurrence_type === "fixed"
                                          ? "Fixa"
                                          : "Variável",
                                    }),
                                  }),
                                  e.jsx(Y, { children: p(i.amount) }),
                                  e.jsx(Y, { children: i.due_day || "-" }),
                                  e.jsx(Y, { children: i.category || "-" }),
                                  e.jsxs(Y, {
                                    className: "text-right space-x-2",
                                    children: [
                                      e.jsx(N, {
                                        size: "icon",
                                        variant: "ghost",
                                        onClick: () => ie(i),
                                        children: e.jsx(Ra, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      e.jsx(N, {
                                        size: "icon",
                                        variant: "ghost",
                                        className: "text-destructive",
                                        onClick: () => E(i.id),
                                        children: e.jsx(Ue, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              i.id
                            )
                          ),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      e.jsx(nr, {
        open: V,
        onOpenChange: T,
        onSave: G,
        account: K,
        defaultType: w,
      }),
      e.jsx(lr, { open: q, onOpenChange: f, onSave: G, instance: l }),
      e.jsx(Ys, {
        open: !!L,
        onOpenChange: () => E(null),
        children: e.jsxs(Ks, {
          children: [
            e.jsxs(Ws, {
              children: [
                e.jsx(Xs, { children: "Remover Conta Cadastrada" }),
                e.jsx(Gs, {
                  children:
                    "Tem certeza que deseja remover esta conta cadastrada? Todas as parcelas pendentes também serão removidas.",
                }),
              ],
            }),
            e.jsxs(Qs, {
              children: [
                e.jsx(Js, { children: "Cancelar" }),
                e.jsx(Zs, {
                  onClick: xe,
                  className: "bg-destructive hover:bg-destructive/90",
                  children: "Remover",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(Ys, {
        open: !!C,
        onOpenChange: () => D(null),
        children: e.jsxs(Ks, {
          children: [
            e.jsxs(Ws, {
              children: [
                e.jsx(Xs, { children: "Excluir Conta" }),
                e.jsx(Gs, {
                  children:
                    "Tem certeza que deseja excluir esta conta? Esta ação não pode ser desfeita.",
                }),
              ],
            }),
            e.jsxs(Qs, {
              children: [
                e.jsx(Js, { children: "Cancelar" }),
                e.jsx(Zs, {
                  onClick: ce,
                  className: "bg-destructive hover:bg-destructive/90",
                  children: "Excluir",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Ie = {
    catalog_theme: "dark",
    catalog_primary_color: "#10b981",
    catalog_secondary_color: "#1f2937",
    catalog_button_color: "#eab308",
    catalog_whatsapp: "",
    catalog_banner_text: "Bem-vindo à nossa loja!",
    catalog_footer_text: "Obrigado pela preferência!",
    catalog_hide_brands: !1,
    catalog_weekly_offers: [],
    catalog_hide_promo_bar: !1,
    catalog_language: "pt-BR",
    catalog_installments_text: "Até 12x sem juros",
    catalog_show_installments: !0,
  },
  cr = [
    { name: "Verde", primary: "#10b981", secondary: "#064e3b" },
    { name: "Azul", primary: "#3b82f6", secondary: "#1e3a5f" },
    { name: "Roxo", primary: "#8b5cf6", secondary: "#4c1d95" },
    { name: "Rosa", primary: "#ec4899", secondary: "#831843" },
    { name: "Laranja", primary: "#f97316", secondary: "#7c2d12" },
    { name: "Vermelho", primary: "#ef4444", secondary: "#7f1d1d" },
  ],
  ir = [
    { name: "Amarelo", color: "#eab308" },
    { name: "Verde", color: "#22c55e" },
    { name: "Azul", color: "#3b82f6" },
    { name: "Roxo", color: "#8b5cf6" },
    { name: "Rosa", color: "#ec4899" },
    { name: "Laranja", color: "#f97316" },
  ];
function dr({ open: x, onOpenChange: S }) {
  const { user: p } = bs(),
    [t, b] = n.useState(!0),
    [P, u] = n.useState(!1),
    [r, g] = n.useState(Ie),
    [V, T] = n.useState([]);
  n.useEffect(() => {
    x && p && (f(), q());
  }, [x, p]);
  const q = async () => {
      if (!p) return;
      const { data: l } = await j
        .from("products")
        .select("id, name, image_url")
        .eq("user_id", p.id)
        .order("name");
      T(l || []);
    },
    f = async () => {
      if (p) {
        b(!0);
        try {
          const { data: l, error: m } = await j
            .from("user_settings")
            .select(
              "catalog_theme, catalog_primary_color, catalog_secondary_color, catalog_button_color, catalog_whatsapp, catalog_banner_text, catalog_footer_text, catalog_hide_brands, catalog_weekly_offers, catalog_hide_promo_bar, catalog_language, catalog_installments_text, catalog_show_installments"
            )
            .eq("user_id", p.id)
            .maybeSingle();
          if (m && m.code !== "PGRST116") throw m;
          l &&
            g({
              catalog_theme: l.catalog_theme || Ie.catalog_theme,
              catalog_primary_color:
                l.catalog_primary_color || Ie.catalog_primary_color,
              catalog_secondary_color:
                l.catalog_secondary_color || Ie.catalog_secondary_color,
              catalog_button_color:
                l.catalog_button_color || Ie.catalog_button_color,
              catalog_whatsapp: l.catalog_whatsapp || "",
              catalog_banner_text:
                l.catalog_banner_text || Ie.catalog_banner_text,
              catalog_footer_text:
                l.catalog_footer_text || Ie.catalog_footer_text,
              catalog_hide_brands: l.catalog_hide_brands || !1,
              catalog_weekly_offers: l.catalog_weekly_offers || [],
              catalog_hide_promo_bar: l.catalog_hide_promo_bar || !1,
              catalog_language: l.catalog_language || Ie.catalog_language,
              catalog_installments_text:
                l.catalog_installments_text || Ie.catalog_installments_text,
              catalog_show_installments: l.catalog_show_installments !== !1,
            });
        } catch (l) {
          Bs({
            title: "Erro ao carregar configurações",
            description: l.message,
            variant: "destructive",
          });
        } finally {
          b(!1);
        }
      }
    },
    K = async () => {
      if (p) {
        u(!0);
        try {
          const { data: l } = await j
              .from("user_settings")
              .select("id")
              .eq("user_id", p.id)
              .maybeSingle(),
            m = {
              catalog_theme: r.catalog_theme,
              catalog_primary_color: r.catalog_primary_color,
              catalog_secondary_color: r.catalog_secondary_color,
              catalog_button_color: r.catalog_button_color,
              catalog_whatsapp: r.catalog_whatsapp,
              catalog_banner_text: r.catalog_banner_text,
              catalog_footer_text: r.catalog_footer_text,
              catalog_hide_brands: r.catalog_hide_brands,
              catalog_weekly_offers: r.catalog_weekly_offers,
              catalog_hide_promo_bar: r.catalog_hide_promo_bar,
              catalog_language: r.catalog_language,
              catalog_installments_text: r.catalog_installments_text,
              catalog_show_installments: r.catalog_show_installments,
            };
          if (l) {
            const { error: L } = await j
              .from("user_settings")
              .update(m)
              .eq("user_id", p.id);
            if (L) throw L;
          } else {
            const { error: L } = await j
              .from("user_settings")
              .insert({ user_id: p.id, ...m });
            if (L) throw L;
          }
          Bs({
            title: "Configurações salvas!",
            description:
              "As configurações do catálogo foram atualizadas com sucesso.",
          }),
            S(!1);
        } catch (l) {
          Bs({
            title: "Erro ao salvar configurações",
            description: l.message,
            variant: "destructive",
          });
        } finally {
          u(!1);
        }
      }
    },
    R = (l) => {
      g((m) => ({
        ...m,
        catalog_primary_color: l.primary,
        catalog_secondary_color: l.secondary,
      }));
    };
  return e.jsx(We, {
    open: x,
    onOpenChange: S,
    children: e.jsxs(Xe, {
      className: "max-w-2xl max-h-[90vh] overflow-y-auto",
      children: [
        e.jsxs(Ge, {
          children: [
            e.jsxs(Qe, {
              className: "flex items-center gap-2",
              children: [
                e.jsx(va, { className: "w-5 h-5 text-primary" }),
                "Configurar Catálogo Digital",
              ],
            }),
            e.jsx(Ia, {
              children:
                "Personalize a aparência e as informações do seu catálogo virtual.",
            }),
          ],
        }),
        t
          ? e.jsx("div", {
              className: "flex items-center justify-center py-12",
              children: e.jsx(Us, {
                className: "w-8 h-8 animate-spin text-primary",
              }),
            })
          : e.jsxs("div", {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs(H, {
                      className: "flex items-center gap-2 text-sm font-medium",
                      children: [
                        e.jsx(wa, { className: "w-4 h-4" }),
                        "Tema do Catálogo",
                      ],
                    }),
                    e.jsxs(gt, {
                      value: r.catalog_theme,
                      onValueChange: (l) =>
                        g((m) => ({ ...m, catalog_theme: l })),
                      className: "flex gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            e.jsx(ba, { value: "light", id: "theme-light" }),
                            e.jsxs(H, {
                              htmlFor: "theme-light",
                              className:
                                "flex items-center gap-2 cursor-pointer",
                              children: [
                                e.jsx(wa, { className: "w-4 h-4" }),
                                "Claro",
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center space-x-2",
                          children: [
                            e.jsx(ba, { value: "dark", id: "theme-dark" }),
                            e.jsxs(H, {
                              htmlFor: "theme-dark",
                              className:
                                "flex items-center gap-2 cursor-pointer",
                              children: [
                                e.jsx(jt, { className: "w-4 h-4" }),
                                "Escuro",
                              ],
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
                    e.jsxs(H, {
                      className: "flex items-center gap-2 text-sm font-medium",
                      children: [
                        e.jsx(va, { className: "w-4 h-4" }),
                        "Cores do Catálogo",
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-3 sm:grid-cols-6 gap-2",
                      children: cr.map((l) =>
                        e.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => R(l),
                            className: `p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                              r.catalog_primary_color === l.primary
                                ? "border-primary ring-2 ring-primary/30"
                                : "border-border hover:border-primary/50"
                            }`,
                            children: [
                              e.jsx("div", {
                                className: "w-full h-6 rounded-md mb-1",
                                style: { backgroundColor: l.primary },
                              }),
                              e.jsx("span", {
                                className: "text-xs font-medium",
                                children: l.name,
                              }),
                            ],
                          },
                          l.name
                        )
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(H, {
                          htmlFor: "primary-color",
                          children: "Cor Primária",
                        }),
                        e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsx(de, {
                              id: "primary-color",
                              type: "color",
                              value: r.catalog_primary_color,
                              onChange: (l) =>
                                g((m) => ({
                                  ...m,
                                  catalog_primary_color: l.target.value,
                                })),
                              className: "w-14 h-10 p-1 cursor-pointer",
                            }),
                            e.jsx(de, {
                              value: r.catalog_primary_color,
                              onChange: (l) =>
                                g((m) => ({
                                  ...m,
                                  catalog_primary_color: l.target.value,
                                })),
                              placeholder: "#10b981",
                              className: "flex-1",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(H, {
                          htmlFor: "secondary-color",
                          children: "Cor Secundária",
                        }),
                        e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsx(de, {
                              id: "secondary-color",
                              type: "color",
                              value: r.catalog_secondary_color,
                              onChange: (l) =>
                                g((m) => ({
                                  ...m,
                                  catalog_secondary_color: l.target.value,
                                })),
                              className: "w-14 h-10 p-1 cursor-pointer",
                            }),
                            e.jsx(de, {
                              value: r.catalog_secondary_color,
                              onChange: (l) =>
                                g((m) => ({
                                  ...m,
                                  catalog_secondary_color: l.target.value,
                                })),
                              placeholder: "#1f2937",
                              className: "flex-1",
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
                    e.jsxs(H, {
                      className: "flex items-center gap-2 text-sm font-medium",
                      children: [
                        e.jsx(As, { className: "w-4 h-4" }),
                        "Cor dos Botões (Adicionar ao Carrinho)",
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-3 sm:grid-cols-6 gap-2",
                      children: ir.map((l) =>
                        e.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () =>
                              g((m) => ({
                                ...m,
                                catalog_button_color: l.color,
                              })),
                            className: `p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                              r.catalog_button_color === l.color
                                ? "border-primary ring-2 ring-primary/30"
                                : "border-border hover:border-primary/50"
                            }`,
                            children: [
                              e.jsx("div", {
                                className: "w-full h-6 rounded-md mb-1",
                                style: { backgroundColor: l.color },
                              }),
                              e.jsx("span", {
                                className: "text-xs font-medium",
                                children: l.name,
                              }),
                            ],
                          },
                          l.name
                        )
                      ),
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx(de, {
                          type: "color",
                          value: r.catalog_button_color,
                          onChange: (l) =>
                            g((m) => ({
                              ...m,
                              catalog_button_color: l.target.value,
                            })),
                          className: "w-14 h-10 p-1 cursor-pointer",
                        }),
                        e.jsx(de, {
                          value: r.catalog_button_color,
                          onChange: (l) =>
                            g((m) => ({
                              ...m,
                              catalog_button_color: l.target.value,
                            })),
                          placeholder: "#eab308",
                          className: "flex-1",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(H, {
                      htmlFor: "whatsapp",
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(ft, { className: "w-4 h-4" }),
                        "WhatsApp do Catálogo",
                      ],
                    }),
                    e.jsx(de, {
                      id: "whatsapp",
                      value: r.catalog_whatsapp,
                      onChange: (l) =>
                        g((m) => ({ ...m, catalog_whatsapp: l.target.value })),
                      placeholder: "5511999999999",
                      className: "font-mono",
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Número com código do país (ex: 5511999999999). Se vazio, usará o WhatsApp das configurações da empresa.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(H, {
                      htmlFor: "banner-text",
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(Ca, { className: "w-4 h-4" }),
                        "Texto do Banner",
                      ],
                    }),
                    e.jsx(Is, {
                      id: "banner-text",
                      value: r.catalog_banner_text,
                      onChange: (l) =>
                        g((m) => ({
                          ...m,
                          catalog_banner_text: l.target.value,
                        })),
                      placeholder: "Bem-vindo à nossa loja!",
                      rows: 2,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(H, {
                      htmlFor: "footer-text",
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(Ca, { className: "w-4 h-4" }),
                        "Texto do Rodapé",
                      ],
                    }),
                    e.jsx(Is, {
                      id: "footer-text",
                      value: r.catalog_footer_text,
                      onChange: (l) =>
                        g((m) => ({
                          ...m,
                          catalog_footer_text: l.target.value,
                        })),
                      placeholder: "Obrigado pela preferência!",
                      rows: 2,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs(H, {
                      className: "flex items-center gap-2 text-sm font-medium",
                      children: [
                        r.catalog_hide_brands
                          ? e.jsx(_s, { className: "w-4 h-4" })
                          : e.jsx(ws, { className: "w-4 h-4" }),
                        "Banner de Marcas",
                      ],
                    }),
                    e.jsx(N, {
                      type: "button",
                      variant: r.catalog_hide_brands
                        ? "destructive"
                        : "outline",
                      onClick: () =>
                        g((l) => ({
                          ...l,
                          catalog_hide_brands: !l.catalog_hide_brands,
                        })),
                      className: "w-full justify-start gap-2",
                      children: r.catalog_hide_brands
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(_s, { className: "w-4 h-4" }),
                              "Marcas Ocultas - Clique para Exibir",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(ws, { className: "w-4 h-4" }),
                              "Marcas Visíveis - Clique para Ocultar",
                            ],
                          }),
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Controla a exibição do banner com logos das principais marcas no topo do catálogo.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs(H, {
                      className: "flex items-center gap-2 text-sm font-medium",
                      children: [
                        r.catalog_hide_promo_bar
                          ? e.jsx(Kt, { className: "w-4 h-4" })
                          : e.jsx(Wt, { className: "w-4 h-4" }),
                        "Faixa Promocional (Topo)",
                      ],
                    }),
                    e.jsx(N, {
                      type: "button",
                      variant: r.catalog_hide_promo_bar
                        ? "destructive"
                        : "outline",
                      onClick: () =>
                        g((l) => ({
                          ...l,
                          catalog_hide_promo_bar: !l.catalog_hide_promo_bar,
                        })),
                      className: "w-full justify-start gap-2",
                      children: r.catalog_hide_promo_bar
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(_s, { className: "w-4 h-4" }),
                              "Faixa Oculta - Clique para Exibir",
                            ],
                          })
                        : e.jsxs(e.Fragment, {
                            children: [
                              e.jsx(ws, { className: "w-4 h-4" }),
                              "Faixa Visível - Clique para Ocultar",
                            ],
                          }),
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Controla a faixa animada com promoções que aparece no topo do catálogo.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs(H, {
                      className: "flex items-center gap-2 text-sm font-medium",
                      children: [
                        e.jsx(yt, { className: "w-4 h-4" }),
                        "Idioma do Catálogo",
                      ],
                    }),
                    e.jsxs(fe, {
                      value: r.catalog_language,
                      onValueChange: (l) =>
                        g((m) => ({ ...m, catalog_language: l })),
                      children: [
                        e.jsx(ye, {
                          className: "w-full",
                          children: e.jsx(ve, {
                            placeholder: "Selecione o idioma",
                          }),
                        }),
                        e.jsxs(be, {
                          children: [
                            e.jsx(_, {
                              value: "pt-BR",
                              children: "🇧🇷 Brasil (Português)",
                            }),
                            e.jsx(_, {
                              value: "pt-PT",
                              children: "🇵🇹 Portugal (Português)",
                            }),
                            e.jsx(_, {
                              value: "en-US",
                              children: "🇺🇸 Estados Unidos (English)",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Define o idioma e a localização do catálogo. Isso afeta textos, métodos de pagamento (PIX para Brasil, MB Way para Portugal) e informações de entrega.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs(H, {
                      className: "flex items-center gap-2 text-sm font-medium",
                      children: [
                        e.jsx(Me, { className: "w-4 h-4" }),
                        "Informação de Parcelamento",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx(N, {
                          type: "button",
                          variant: r.catalog_show_installments
                            ? "outline"
                            : "destructive",
                          size: "sm",
                          onClick: () =>
                            g((l) => ({
                              ...l,
                              catalog_show_installments:
                                !l.catalog_show_installments,
                            })),
                          className: "flex-shrink-0",
                          children: r.catalog_show_installments
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(ws, { className: "w-4 h-4 mr-1" }),
                                  "Visível",
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(_s, { className: "w-4 h-4 mr-1" }),
                                  "Oculto",
                                ],
                              }),
                        }),
                        e.jsx(de, {
                          value: r.catalog_installments_text,
                          onChange: (l) =>
                            g((m) => ({
                              ...m,
                              catalog_installments_text: l.target.value,
                            })),
                          placeholder: "Até 12x sem juros",
                          disabled: !r.catalog_show_installments,
                          className: "flex-1",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Texto personalizado para informação de parcelamento exibido no catálogo. Deixe vazio ou desative para não exibir.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    e.jsxs(H, {
                      className: "flex items-center gap-2 text-sm font-medium",
                      children: [
                        e.jsx(cs, { className: "w-4 h-4" }),
                        "Ofertas da Semana",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Selecione os produtos que estarão em destaque como oferta da semana no catálogo.",
                    }),
                    V.length === 0
                      ? e.jsxs("div", {
                          className:
                            "text-center py-4 text-muted-foreground text-sm",
                          children: [
                            e.jsx(os, {
                              className: "w-8 h-8 mx-auto mb-2 opacity-50",
                            }),
                            "Nenhum produto cadastrado",
                          ],
                        })
                      : e.jsx(ra, {
                          className: "h-[200px] border rounded-lg p-3",
                          children: e.jsx("div", {
                            className: "space-y-2",
                            children: V.map((l) => {
                              const m = r.catalog_weekly_offers.includes(l.id);
                              return e.jsxs(
                                "div",
                                {
                                  className: `flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                                    m
                                      ? "bg-primary/10 border border-primary/30"
                                      : "hover:bg-muted/50"
                                  }`,
                                  onClick: () => {
                                    g((L) => ({
                                      ...L,
                                      catalog_weekly_offers: m
                                        ? L.catalog_weekly_offers.filter(
                                            (E) => E !== l.id
                                          )
                                        : [...L.catalog_weekly_offers, l.id],
                                    }));
                                  },
                                  children: [
                                    e.jsx(vt, {
                                      checked: m,
                                      className: "pointer-events-none",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "w-10 h-10 rounded-lg bg-muted overflow-hidden flex-shrink-0",
                                      children: l.image_url
                                        ? e.jsx("img", {
                                            src: l.image_url,
                                            alt: "",
                                            className:
                                              "w-full h-full object-contain",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "w-full h-full flex items-center justify-center",
                                            children: e.jsx(os, {
                                              className:
                                                "w-4 h-4 text-muted-foreground",
                                            }),
                                          }),
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-sm font-medium truncate flex-1",
                                      children: l.name,
                                    }),
                                    m &&
                                      e.jsx(cs, {
                                        className:
                                          "w-4 h-4 text-primary flex-shrink-0",
                                      }),
                                  ],
                                },
                                l.id
                              );
                            }),
                          }),
                        }),
                    r.catalog_weekly_offers.length > 0 &&
                      e.jsxs("p", {
                        className: "text-xs text-primary font-medium",
                        children: [
                          r.catalog_weekly_offers.length,
                          " produto(s) selecionado(s) para oferta",
                        ],
                      }),
                  ],
                }),
                e.jsxs(z, {
                  className: "p-4 space-y-3",
                  children: [
                    e.jsx(H, {
                      className: "text-sm font-medium",
                      children: "Pré-visualização",
                    }),
                    e.jsxs("div", {
                      className: `rounded-lg p-4 ${
                        r.catalog_theme === "dark"
                          ? "bg-zinc-900"
                          : "bg-gray-100"
                      }`,
                      children: [
                        e.jsx("div", {
                          className: "h-8 rounded-md mb-2",
                          style: { backgroundColor: r.catalog_primary_color },
                        }),
                        e.jsx("div", {
                          className: "h-4 rounded-md mb-3",
                          style: { backgroundColor: r.catalog_secondary_color },
                        }),
                        e.jsx("div", {
                          className:
                            "h-10 rounded-md flex items-center justify-center text-sm font-medium",
                          style: {
                            backgroundColor: r.catalog_button_color,
                            color:
                              r.catalog_button_color === "#eab308" ||
                              r.catalog_button_color === "#22c55e"
                                ? "#000"
                                : "#fff",
                          },
                          children: "Adicionar ao Carrinho",
                        }),
                        e.jsx("p", {
                          className: `text-xs mt-3 ${
                            r.catalog_theme === "dark"
                              ? "text-gray-300"
                              : "text-gray-700"
                          }`,
                          children: r.catalog_banner_text,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        e.jsxs(vs, {
          children: [
            e.jsx(N, {
              variant: "outline",
              onClick: () => S(!1),
              disabled: P,
              children: "Cancelar",
            }),
            e.jsx(N, {
              onClick: K,
              disabled: P || t,
              children: P
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(Us, { className: "w-4 h-4 mr-2 animate-spin" }),
                      "Salvando...",
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(bt, { className: "w-4 h-4 mr-2" }),
                      "Salvar Configurações",
                    ],
                  }),
            }),
          ],
        }),
      ],
    }),
  });
}
const Ir = () => {
  Nt();
  const S = _t().pathname === "/pdv";
  wt();
  const { format: p, currency: t } = Re(),
    [b, P] = n.useState([]),
    [u, r] = n.useState([]),
    [g, V] = n.useState([]),
    [T, q] = n.useState(!1),
    [f, K] = n.useState(!1),
    [R, l] = n.useState(!1),
    [m, L] = n.useState(!1),
    [E, C] = n.useState(!1),
    [D, w] = n.useState(null),
    [re, ge] = n.useState(null),
    [Z, G] = n.useState(null),
    [xe, ce] = n.useState("income");
  n.useState(!1), n.useState("");
  const [ie, Se] = n.useState("current"),
    [ne, je] = n.useState("month"),
    [a, d] = n.useState(void 0),
    [y, ae] = n.useState(void 0),
    [we, i] = n.useState(!1),
    [le, o] = n.useState(!1),
    [M, U] = n.useState(!1),
    [I, A] = n.useState(null),
    [B, O] = n.useState(""),
    [X, ia] = n.useState(null),
    { toast: ee } = Ke(),
    { user: Fe } = bs(),
    {
      effectiveUserId: qa,
      isEmployee: ze,
      employeeId: ds,
      employeeName: qs,
      permissions: Os,
      loading: Oa,
    } = Ct(),
    te = qa || Fe?.id || "",
    Va = !ze || Os.ver_faturamento === !0 || Os.faturamento === !0,
    $a = ze && Os.vendas === !0 && !Va,
    La = Oa && localStorage.getItem("lastLoginIsEmployee") === "true",
    ue = $a || La || S,
    { playCashRegisterSound: za } = ka();
  n.useEffect(() => {
    if (!Fe || !te) return;
    (async () => {
      const { data: c } = await j
        .from("user_settings")
        .select("*")
        .eq("user_id", te)
        .maybeSingle();
      c &&
        (O(c.company_name || ""),
        ia({
          company_name: c.company_name,
          company_cnpj: c.company_cnpj,
          company_address: c.company_address,
          company_phone: c.company_phone,
          company_logo: c.company_logo,
        }));
    })();
  }, [Fe, te]),
    n.useEffect(() => {
      if (!Fe || !te) return;
      const s = async () => {
        const W = new Date();
        W.toISOString().split("T")[0];
        const v = new Date(W.getFullYear(), W.getMonth(), 1)
            .toISOString()
            .split("T")[0],
          Ne = new Date(W.getFullYear(), W.getMonth() + 1, 0)
            .toISOString()
            .split("T")[0];
        let Q = {};
        if (ie === "current") Q = { gte: v, lte: Ne };
        else if (ie !== "all") {
          const [Ce, $] = ie.split("-").map(Number),
            tt = new Date(Ce, $ - 1, 1).toISOString().split("T")[0],
            rt = new Date(Ce, $, 0).toISOString().split("T")[0];
          Q = { gte: tt, lte: rt };
        }
        const De = j.from("transactions").select("*").eq("user_id", te);
        ie !== "all" && De.gte("date", Q.gte).lte("date", Q.lte);
        const pe = j
          .from("stock_movements")
          .select("id, type, reason, quantity, purchase_value, created_at")
          .eq("user_id", te);
        ie !== "all" &&
          pe
            .gte("created_at", `${Q.gte}T00:00:00`)
            .lte("created_at", `${Q.lte}T23:59:59.999`);
        const [Ze, Ve, F] = await Promise.all([
            De.order("date", { ascending: !1 }),
            j.from("products").select("*").eq("user_id", te).order("name"),
            pe.order("created_at", { ascending: !1 }),
          ]),
          { data: _e, error: Be } = Ze;
        if (!Be) {
          const Ce = _e.map(($) => ({
            id: $.id,
            description: $.description,
            value: parseFloat($.amount.toString()).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            type: $.type,
            category: $.category || "",
            date: $.date,
            paymentMethod: $.payment_method || "",
            productId: $.product_id || "",
            createdAt: $.created_at || "",
          }));
          P(Ce);
        }
        const { data: ms, error: et } = Ve;
        if (!et) {
          const Ce = ms.map(($) => ({
            id: $.id,
            name: $.name,
            description: $.description || "",
            costPrice: parseFloat($.cost_price).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            salePrice: parseFloat($.sale_price).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            priceCash: $.price_cash
              ? parseFloat($.price_cash).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "",
            priceInstallment: $.price_installment
              ? parseFloat($.price_installment).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "",
            installmentCount: $.installment_count || 1,
            code: $.code || "",
            additionalInfo: $.additional_info || "",
            image_url: $.image_url || "",
            images: $.images || [],
            payment_methods: $.payment_methods || ["pix", "dinheiro"],
            max_installments: $.max_installments || 1,
            category: $.category || "",
            brand: $.brand || "",
            colors: $.colors || [],
            quantity: $.quantity || 0,
          }));
          r(Ce);
        }
        const { data: st, error: at } = F;
        at ||
          V(
            (st || []).map((Ce) => ({
              id: Ce.id,
              type: Ce.type,
              reason: Ce.reason || "",
              quantity: Number(Ce.quantity) || 0,
              purchase_value: Number(Ce.purchase_value) || 0,
              created_at: Ce.created_at,
            }))
          );
      };
      s();
      let c = null;
      const h = () => {
          c && clearTimeout(c),
            (c = setTimeout(() => {
              s();
            }, 600));
        },
        k = j
          .channel("transactions_realtime")
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "transactions",
              filter: `user_id=eq.${te}`,
            },
            () => h()
          )
          .subscribe(),
        oe = j
          .channel("products_realtime")
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "products",
              filter: `user_id=eq.${te}`,
            },
            () => h()
          )
          .subscribe(),
        se = j
          .channel("stock_movements_realtime")
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "stock_movements",
              filter: `user_id=eq.${te}`,
            },
            () => h()
          )
          .subscribe();
      return () => {
        c && clearTimeout(c),
          j.removeChannel(k),
          j.removeChannel(oe),
          j.removeChannel(se);
      };
    }, [Fe, te, ie]);
  const Ba = async (s) => {
      if (!Fe) return;
      const c = (v) => {
          const Ne = v.replace(/\./g, "").replace(",", ".");
          return parseFloat(Ne) || 0;
        },
        h = s.description || "",
        k = ze && qs ? ` [Func: ${qs}]` : "",
        oe = s.id || h.includes("[Func:") ? h : `${h}${k}`,
        se = {
          user_id: te,
          description: oe,
          amount: c(s.value),
          type: s.type,
          category: s.category || null,
          date: s.date || He(),
          payment_method: s.paymentMethod || null,
          product_id:
            s.productId && !s.productId.startsWith("temp-")
              ? s.productId
              : null,
          created_by_employee_id: ze ? ds : null,
        },
        W = [...b];
      if (s.id) {
        P(b.map((v) => (v.id === s.id ? s : v)));
        try {
          const { error: v } = await j
            .from("transactions")
            .update(se)
            .eq("id", s.id);
          if (v) throw v;
          ee({ title: "Transação atualizada!" });
        } catch {
          P(W),
            ee({
              title: "Erro ao atualizar transação",
              variant: "destructive",
            });
          return;
        }
      } else {
        const v = `temp-${Date.now()}`,
          Ne = { ...s, id: v };
        P([Ne, ...b]);
        try {
          const { error: Q } = await j.from("transactions").insert([{ ...se }]);
          if (Q) throw Q;
          ee({
            title:
              s.type === "income"
                ? "Receita adicionada!"
                : "Despesa adicionada!",
          }),
            s.type === "income" && za();
        } catch {
          P(W),
            ee({
              title: "Erro ao adicionar transação",
              variant: "destructive",
            });
          return;
        }
      }
      q(!1), w(null);
    },
    Ha = async (s) => {
      if (!Fe) return;
      const c = (se) => {
          const W = se.replace(/\./g, "").replace(",", ".");
          return parseFloat(W) || 0;
        },
        h = {
          user_id: te,
          name: s.name,
          description: s.description || null,
          code: s.code || null,
          additional_info: s.additionalInfo || null,
          cost_price: c(s.costPrice.toString()),
          sale_price: c(s.salePrice.toString()),
          price_cash: s.price_cash ? c(s.price_cash.toString()) : 0,
          price_installment: s.price_installment
            ? c(s.price_installment.toString())
            : 0,
          installment_count: s.installment_count || 1,
          image_url: s.image_url || null,
          images: s.images || [],
          payment_methods: s.payment_methods || ["pix", "dinheiro"],
          max_installments: s.max_installments || 1,
          category: s.category || null,
          brand: s.brand || null,
          colors: s.colors || [],
        },
        k = s.quantity || 0,
        oe = [...u];
      if (s.id && !s.id.startsWith("temp-")) {
        const se = {
          id: s.id,
          name: s.name,
          description: s.description || "",
          costPrice: s.costPrice,
          salePrice: s.salePrice,
          code: s.code || "",
          additionalInfo: s.additionalInfo || "",
          quantity: s.quantity || 0,
          image_url: s.image_url || "",
          images: s.images || [],
          payment_methods: s.payment_methods || ["pix", "dinheiro"],
          max_installments: s.max_installments || 1,
          category: s.category || "",
          brand: s.brand || "",
          colors: s.colors || [],
        };
        r(u.map((W) => (W.id === s.id ? se : W)));
        try {
          const { error: W } = await j
            .from("products")
            .update(h)
            .eq("id", s.id);
          if (W) throw W;
          ee({ title: "Produto atualizado!" });
        } catch {
          r(oe),
            ee({ title: "Erro ao atualizar produto", variant: "destructive" });
          return;
        }
      } else {
        const se = `temp-${Date.now()}`,
          W = { ...s, id: se };
        r([W, ...u]);
        try {
          const { data: v, error: Ne } = await j
            .from("products")
            .insert([h])
            .select()
            .single();
          if (Ne) throw Ne;
          const Q = {
            id: v.id,
            name: v.name,
            description: v.description || "",
            costPrice: parseFloat(v.cost_price.toString()).toLocaleString(
              "pt-BR",
              { minimumFractionDigits: 2, maximumFractionDigits: 2 }
            ),
            salePrice: parseFloat(v.sale_price.toString()).toLocaleString(
              "pt-BR",
              { minimumFractionDigits: 2, maximumFractionDigits: 2 }
            ),
            code: v.code || "",
            additionalInfo: v.additional_info || "",
            quantity: k,
            image_url: v.image_url || "",
            payment_methods: v.payment_methods || ["pix", "dinheiro"],
            max_installments: v.max_installments || 1,
            category: v.category || "",
          };
          r((De) => De.map((pe) => (pe.id === se ? Q : pe))),
            k > 0 &&
              (await j
                .from("parts")
                .insert({
                  user_id: te,
                  name: v.name,
                  code: v.code || "",
                  quantity: k,
                  min_quantity: 5,
                  unit_price: parseFloat(v.cost_price.toString()),
                  category: "Produto",
                  supplier: "Cadastro de Produto",
                })),
            ee({ title: "Produto adicionado!" });
        } catch {
          r(oe),
            ee({ title: "Erro ao adicionar produto", variant: "destructive" });
          return;
        }
      }
      K(!1), ge(null);
    },
    da = async (s) => {
      const c = [...b];
      P(b.filter((h) => h.id !== s));
      try {
        const { error: h } = await j.from("transactions").delete().eq("id", s);
        if (h) throw h;
        ee({ title: "Transação removida!", variant: "destructive" });
      } catch {
        P(c),
          ee({ title: "Erro ao remover transação", variant: "destructive" });
      }
    },
    Ua = async (s) => {
      try {
        ys.info("Enviando para impressora...");
        const c = {
            transactionId: s.id,
            description: s.description,
            value: s.value,
            date: new Date().toISOString(),
            paymentMethod: s.paymentMethod || "Não informado",
            quantity: 1,
            code: s.productId?.substring(0, 8).toUpperCase() || void 0,
          },
          h = await Et(c, X),
          k = Mt(c, X);
        await Fa(h, k, X?.company_name || "MINHA EMPRESA"),
          ys.success("Cupom enviado para impressora!");
      } catch (c) {
        ys.error("Erro ao imprimir cupom: " + c.message);
      }
    },
    Vs = new Date();
  Vs.toISOString().split("T")[0];
  const ma = (s) => {
      const c = Hs(s.slice(0, 10));
      if (ne === "custom" && a && y) {
        const oe = c.getTime(),
          se = Hs(
            a instanceof Date
              ? `${a.getFullYear()}-${String(a.getMonth() + 1).padStart(
                  2,
                  "0"
                )}-${String(a.getDate()).padStart(2, "0")}`
              : a
          );
        se.setHours(0, 0, 0, 0);
        const W = Hs(
          y instanceof Date
            ? `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(
                2,
                "0"
              )}-${String(y.getDate()).padStart(2, "0")}`
            : y
        );
        return (
          W.setHours(23, 59, 59, 999), oe >= se.getTime() && oe <= W.getTime()
        );
      }
      const k = (Vs.getTime() - c.getTime()) / (1e3 * 60 * 60 * 24);
      switch (ne) {
        case "today":
          return c.toDateString() === Vs.toDateString();
        case "week":
          return k <= 7;
        case "month":
          return k <= 30;
        case "year":
          return k <= 365;
        default:
          return !0;
      }
    },
    Ee = (s) => {
      const c = s.replace(/\./g, "").replace(",", ".");
      return parseFloat(c) || 0;
    },
    he = b.filter((s) => ma(s.date)),
    xa = g.filter((s) => ma(s.created_at)),
    $s = Na({
      transactions: he.map((s) => ({
        type: s.type,
        amount: Ee(s.value),
        category: s.category,
        product_id: s.productId || null,
        description: s.description,
      })),
      stockMovements: xa,
    }),
    Je = $s.totalRevenue,
    Ls = $s.totalExpenses,
    Ns = $s.netProfit,
    [ua, ha] = n.useState(0),
    [mr, Ya] = n.useState(null);
  n.useEffect(() => {
    if (!Fe) return;
    const s = async () => {
      const k = He();
      localStorage.getItem("lastRevenueReset") !== k &&
        (localStorage.setItem("lastRevenueReset", k), Ya(k));
      const { data: se, error: W } = await j
        .from("transactions")
        .select("amount, date")
        .eq("user_id", te)
        .eq("type", "income")
        .eq("date", k);
      if (!W)
        if (se) {
          const v = se.reduce(
            (Ne, Q) => Ne + parseFloat(Q.amount.toString()),
            0
          );
          ha(v);
        } else ha(0);
    };
    s();
    const c = j
        .channel("today_revenue_realtime")
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "transactions",
            filter: `user_id=eq.${te}`,
          },
          (k) => {
            s();
          }
        )
        .subscribe(),
      h = setInterval(() => {
        const k = He();
        localStorage.getItem("lastRevenueReset") !== k && s();
      }, 6e4);
    return () => {
      j.removeChannel(c), clearInterval(h);
    };
  }, [Fe]);
  const pa = he.filter((s) => s.type === "income"),
    zs = pa.length,
    Ka = zs > 0 ? Je / zs : 0,
    Wa = Je > 0 ? (Ns / Je) * 100 : 0,
    Xa = (() => {
      const s = [];
      return (
        pa
          .filter((c) => c.category === "Venda de Produtos" && c.productId)
          .forEach((c) => {
            const h = u.find((k) => k.id === c.productId);
            h &&
              s.push({ date: $e(c.date), product: h.name, value: Ee(c.value) });
          }),
        s
          .sort((c, h) => {
            const k = c.date.split("/").reverse().join("-"),
              oe = h.date.split("/").reverse().join("-");
            return k.localeCompare(oe);
          })
          .slice(-20)
      );
    })(),
    Ga = (() => {
      const s = {};
      return (
        he
          .filter((c) => c.type === "income" && c.paymentMethod)
          .forEach((c) => {
            const h = c.paymentMethod || "Outros",
              k = Ee(c.value);
            s[h] = (s[h] || 0) + k;
          }),
        Object.entries(s).map(([c, h]) => ({ name: c, value: h }))
      );
    })(),
    Qa = (() => {
      const s = {};
      return (
        he
          .filter(
            (c) =>
              c.type === "income" &&
              c.category === "Venda de Produtos" &&
              c.productId
          )
          .forEach((c) => {
            const h = u.find((k) => k.id === c.productId);
            if (h) {
              const k = Ee(c.value);
              s[h.name] || (s[h.name] = { sales: 0, revenue: 0 }),
                s[h.name].sales++,
                (s[h.name].revenue += k);
            }
          }),
        Object.entries(s)
          .map(([c, h]) => ({ name: c, ...h }))
          .sort((c, h) => h.revenue - c.revenue)
          .slice(0, 10)
      );
    })(),
    Ja = async (s, c, h, k) => {
      if (!Fe) return;
      const oe = He(),
        se = k && k.amount > 0,
        W = se ? k.amount / s.length : 0;
      for (const v of s) {
        Ee(v.costPrice);
        const Ne = Ee(v.salePrice),
          { data: Q } = await j
            .from("parts")
            .select("*")
            .eq("user_id", te)
            .eq("name", v.name)
            .eq("category", "Produto")
            .maybeSingle();
        Q &&
          Q.quantity >= v.quantity &&
          (await j
            .from("parts")
            .update({ quantity: Q.quantity - v.quantity })
            .eq("id", Q.id),
          await j
            .from("stock_movements")
            .insert({
              user_id: te,
              part_id: Q.id,
              type: "saida",
              quantity: v.quantity,
              reason: "Venda PDV",
              sale_value: Ne,
              purchase_value: Q.unit_price,
            }));
        const De = v.subtotal - W * v.quantity,
          pe = se
            ? ` (Desc: ${
                k.type === "percentage" ? `${k.value}%` : p(k.amount)
              })`
            : "",
          Ze =
            ze && ds
              ? ` [Func: ${
                  (
                    await j
                      .from("employees")
                      .select("name")
                      .eq("id", ds)
                      .maybeSingle()
                  ).data?.name || "Funcionário"
                }]`
              : "";
        await j
          .from("transactions")
          .insert({
            user_id: te,
            description: `Venda PDV - ${v.name} (${v.quantity}x)${pe}${Ze}`,
            amount: De > 0 ? De : 0,
            type: "income",
            category: "Venda de Produtos",
            date: oe,
            payment_method: c,
            product_id: v.id,
            created_by_employee_id: ze ? ds : null,
          });
      }
      ze &&
        (await Rt({
          ownerId: te,
          employeeId: ds,
          employeeName: qs,
          actionType: "venda_pdv",
          description: `Venda PDV - ${s
            .map((v) => `${v.name} (${v.quantity}x)`)
            .join(", ")} - Total: ${p(h)}`,
          metadata: {
            items: s.map((v) => ({ name: v.name, qty: v.quantity })),
            total: h,
            paymentMethod: c,
            discount: k,
          },
        }));
    },
    ga = async () => {
      if (Fe)
        try {
          const { data: s } = await j
              .from("user_settings")
              .select("*")
              .eq("user_id", te)
              .maybeSingle(),
            c = he,
            h = Na({
              transactions: c.map((F) => ({
                type: F.type,
                amount: Ee(F.value),
                category: F.category,
                product_id: F.productId || null,
                description: F.description,
              })),
              stockMovements: xa,
            }),
            k = h.totalRevenue,
            oe = h.totalExpenses,
            se = h.netProfit,
            W = c
              .filter(
                (F) =>
                  F.type === "income" &&
                  F.category === "Venda de Produtos" &&
                  F.productId
              )
              .reduce((F, _e) => F + Ee(_e.value), 0),
            v = c.filter(
              (F) =>
                F.type === "income" &&
                F.category === "Venda de Produtos" &&
                F.productId
            ).length,
            Ne = c
              .filter(
                (F) =>
                  F.type === "income" &&
                  (F.category !== "Venda de Produtos" || !F.productId)
              )
              .reduce((F, _e) => F + Ee(_e.value), 0),
            Q = [],
            De = [];
          c.forEach((F) => {
            const _e = Ee(F.value);
            if (F.type === "income") {
              const Be = Q.find((ms) => ms.category === F.category);
              Be
                ? (Be.total += _e)
                : Q.push({ category: F.category || "Outros", total: _e });
            } else {
              const Be = De.find((ms) => ms.category === F.category);
              Be
                ? (Be.total += _e)
                : De.push({ category: F.category || "Outros", total: _e });
            }
          }),
            Q.sort((F, _e) => _e.total - F.total),
            De.sort((F, _e) => _e.total - F.total);
          let pe = "";
          const Ze = [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ],
            Ve = new Date();
          switch (ne) {
            case "today":
              pe = `Hoje - ${me(Ve, "dd/MM/yyyy")}`;
              break;
            case "week":
              pe = "Últimos 7 dias";
              break;
            case "month":
              pe = `${Ze[Ve.getMonth()]} ${Ve.getFullYear()}`;
              break;
            case "year":
              pe = `Ano ${Ve.getFullYear()}`;
              break;
            case "custom":
              a && y
                ? (pe = `${me(a, "dd/MM/yyyy")} a ${me(y, "dd/MM/yyyy")}`)
                : (pe = "Período personalizado");
              break;
            default:
              pe = `${Ze[Ve.getMonth()]} ${Ve.getFullYear()}`;
          }
          A({
            period: pe,
            totalIncome: k,
            totalExpense: oe,
            netProfit: se,
            totalSales: W,
            salesCount: v,
            quickRevenue: Ne,
            transactions: c.map((F) => ({
              date: F.date,
              description: F.description,
              amount: Ee(F.value),
              type: F.type,
              category: F.category || "Outros",
            })),
            incomeByCategory: Q,
            expenseByCategory: De,
            companyName: s?.company_name || "Tech OS Pro",
            companyLogo: s?.company_logo || "",
            companyPhone: s?.company_phone || "",
            companyAddress: s?.company_address || "",
            companyCNPJ: s?.company_cnpj || "",
            companyDocumentType: s?.company_document_type || "cnpj",
          }),
            o(!0);
        } catch {
          ee({
            title: "Erro ao preparar PDF",
            description: "Ocorreu um erro ao preparar o relatório.",
            variant: "destructive",
          });
        }
    },
    Za = async (s) => {
      if (I)
        try {
          await Vt({ ...I, currency: s }),
            ee({
              title: "PDF gerado com sucesso!",
              description: "O relatório financeiro mensal foi exportado.",
            }),
            A(null);
        } catch {
          ee({
            title: "Erro ao gerar PDF",
            description: "Ocorreu um erro ao exportar o relatório.",
            variant: "destructive",
          });
        }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(We, {
        open: we,
        onOpenChange: i,
        children: e.jsxs(Xe, {
          className: "max-w-[95vw] sm:max-w-[600px]",
          children: [
            e.jsxs(Ge, {
              children: [
                e.jsx(Qe, {
                  className: "text-base sm:text-lg",
                  children: "Resumo do Período",
                }),
                e.jsx(Ia, {
                  className: "text-xs sm:text-sm",
                  children:
                    "Receitas, despesas e lucro do período selecionado.",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4",
              children: [
                e.jsxs(z, {
                  className:
                    "p-3 sm:p-4 bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20",
                  children: [
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground mb-1",
                      children: "Receitas",
                    }),
                    e.jsx("p", {
                      className:
                        "text-base sm:text-lg font-bold text-green-600",
                      children: p(Je),
                    }),
                  ],
                }),
                e.jsxs(z, {
                  className:
                    "p-3 sm:p-4 bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20",
                  children: [
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground mb-1",
                      children: "Despesas",
                    }),
                    e.jsx("p", {
                      className: "text-base sm:text-lg font-bold text-red-600",
                      children: p(Ls),
                    }),
                  ],
                }),
                e.jsxs(z, {
                  className:
                    "p-3 sm:p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
                  children: [
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground mb-1",
                      children: "Lucro Líquido",
                    }),
                    e.jsx("p", {
                      className: "text-base sm:text-lg font-bold text-primary",
                      children: p(Ns),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-h-[40vh] overflow-y-auto mt-2",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h4", {
                      className: "text-xs sm:text-sm font-semibold mb-2",
                      children: "Receitas do período",
                    }),
                    e.jsxs("ul", {
                      className: "space-y-1 text-xs",
                      children: [
                        he
                          .filter((s) => s.type === "income")
                          .map((s) =>
                            e.jsxs(
                              "li",
                              {
                                className:
                                  "flex justify-between border-b border-border/40 py-1 gap-2",
                                children: [
                                  e.jsx("span", {
                                    className: "truncate flex-1",
                                    children: s.description,
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "font-semibold text-green-500 whitespace-nowrap",
                                    children: s.value,
                                  }),
                                ],
                              },
                              s.id
                            )
                          ),
                        he.filter((s) => s.type === "income").length === 0 &&
                          e.jsx("li", {
                            className: "text-muted-foreground text-xs",
                            children: "Nenhuma receita neste período.",
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h4", {
                      className: "text-xs sm:text-sm font-semibold mb-2",
                      children: "Despesas do período",
                    }),
                    e.jsxs("ul", {
                      className: "space-y-1 text-xs",
                      children: [
                        he
                          .filter((s) => s.type === "expense")
                          .map((s) =>
                            e.jsxs(
                              "li",
                              {
                                className:
                                  "flex justify-between border-b border-border/40 py-1 gap-2",
                                children: [
                                  e.jsx("span", {
                                    className: "truncate flex-1",
                                    children: s.description,
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "font-semibold text-red-500 whitespace-nowrap",
                                    children: s.value,
                                  }),
                                ],
                              },
                              s.id
                            )
                          ),
                        he.filter((s) => s.type === "expense").length === 0 &&
                          e.jsx("li", {
                            className: "text-muted-foreground text-xs",
                            children: "Nenhuma despesa neste período.",
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "flex justify-end mt-4 pt-3 border-t border-border/50",
              children: e.jsxs(N, {
                onClick: () => {
                  i(!1), ga();
                },
                className: "flex items-center gap-2",
                children: [e.jsx(ta, { className: "h-4 w-4" }), "Exportar PDF"],
              }),
            }),
          ],
        }),
      }),
      e.jsx("div", {
        className: "mb-3 sm:mb-4 md:mb-6",
        children: e.jsxs("div", {
          className:
            "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4",
          children: [
            e.jsxs("div", {
              className: "w-full sm:w-auto",
              children: [
                e.jsxs("div", {
                  className: "inline-flex items-center gap-2 mb-2",
                  children: [
                    e.jsx("div", {
                      className:
                        "h-9 w-9 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shadow-sm",
                      children: e.jsx(ca, {
                        className: "h-4 w-4 text-primary",
                      }),
                    }),
                    e.jsx("h1", {
                      className:
                        "text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent",
                      children: ue ? "Ponto de Venda" : "Financeiro",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-xs sm:text-sm text-muted-foreground",
                  children: ue
                    ? "Registre vendas e acompanhe o caixa"
                    : "Controle financeiro completo · caixa, PDV, contas e relatórios",
                }),
              ],
            }),
            !ue &&
              e.jsx("div", {
                className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto",
                children: e.jsxs(fe, {
                  value: ie,
                  onValueChange: Se,
                  children: [
                    e.jsx(ye, {
                      className: "w-full sm:w-[200px]",
                      children: e.jsx(ve, {
                        placeholder: "Selecione o período",
                      }),
                    }),
                    e.jsxs(be, {
                      children: [
                        e.jsx(_, { value: "current", children: "Mês Atual" }),
                        e.jsx(_, {
                          value: "all",
                          children: "Todos os Períodos",
                        }),
                        e.jsx(St, {}),
                        Array.from({ length: 12 }, (s, c) => {
                          const h = new Date();
                          h.setMonth(h.getMonth() - (c + 1));
                          const k = `${h.getFullYear()}-${String(
                              h.getMonth() + 1
                            ).padStart(2, "0")}`,
                            oe = h.toLocaleDateString("pt-BR", {
                              month: "long",
                              year: "numeric",
                            });
                          return e.jsx(
                            _,
                            {
                              value: k,
                              children:
                                oe.charAt(0).toUpperCase() + oe.slice(1),
                            },
                            k
                          );
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
      }),
      !ue &&
        e.jsxs("div", {
          className:
            "mb-3 sm:mb-4 flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2 sm:gap-3",
          children: [
            e.jsxs(fe, {
              value: ne,
              onValueChange: (s) => {
                je(s), s !== "custom" && i(!0);
              },
              children: [
                e.jsx(ye, {
                  className: "w-full sm:w-[180px]",
                  children: e.jsx(ve, {}),
                }),
                e.jsxs(be, {
                  children: [
                    e.jsx(_, { value: "today", children: "Hoje" }),
                    e.jsx(_, { value: "week", children: "Última Semana" }),
                    e.jsx(_, { value: "month", children: "Último Mês" }),
                    e.jsx(_, { value: "year", children: "Último Ano" }),
                    e.jsx(_, {
                      value: "custom",
                      children: "Período Personalizado",
                    }),
                  ],
                }),
              ],
            }),
            ne === "custom" &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs(ts, {
                    children: [
                      e.jsx(rs, {
                        asChild: !0,
                        children: e.jsxs(N, {
                          variant: "outline",
                          className: Le(
                            "w-full sm:w-[140px] justify-start text-left font-normal text-xs sm:text-sm",
                            !a && "text-muted-foreground"
                          ),
                          children: [
                            e.jsx(Ye, {
                              className: "mr-2 h-3 w-3 sm:h-4 sm:w-4",
                            }),
                            a ? me(a, "dd/MM/yyyy") : "Início",
                          ],
                        }),
                      }),
                      e.jsx(ns, {
                        className: "w-auto p-0",
                        align: "start",
                        children: e.jsx(is, {
                          mode: "single",
                          selected: a,
                          onSelect: (s) => d(s),
                          initialFocus: !0,
                          className: Le("p-3 pointer-events-auto"),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(ts, {
                    children: [
                      e.jsx(rs, {
                        asChild: !0,
                        children: e.jsxs(N, {
                          variant: "outline",
                          className: Le(
                            "w-full sm:w-[140px] justify-start text-left font-normal text-xs sm:text-sm",
                            !y && "text-muted-foreground"
                          ),
                          children: [
                            e.jsx(Ye, {
                              className: "mr-2 h-3 w-3 sm:h-4 sm:w-4",
                            }),
                            y ? me(y, "dd/MM/yyyy") : "Fim",
                          ],
                        }),
                      }),
                      e.jsx(ns, {
                        className: "w-auto p-0",
                        align: "start",
                        children: e.jsx(is, {
                          mode: "single",
                          selected: y,
                          onSelect: (s) => ae(s),
                          initialFocus: !0,
                          className: Le("p-3 pointer-events-auto"),
                        }),
                      }),
                    ],
                  }),
                  e.jsx(N, {
                    variant: "outline",
                    onClick: () => i(!0),
                    className: "text-xs sm:text-sm",
                    children: "Ver Resumo",
                  }),
                ],
              }),
            e.jsxs(N, {
              variant: "default",
              onClick: ga,
              className: "flex items-center gap-2",
              children: [
                e.jsx(ta, { className: "h-4 w-4" }),
                e.jsx("span", {
                  className: "hidden sm:inline",
                  children: "Exportar PDF",
                }),
                e.jsx("span", { className: "sm:hidden", children: "PDF" }),
              ],
            }),
          ],
        }),
      !ue &&
        e.jsxs("div", {
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6",
          children: [
            e.jsx(z, {
              className:
                "group p-3 sm:p-4 md:p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in",
              children: e.jsxs("div", {
                className: "flex items-start justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-1 sm:space-y-2",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-xs sm:text-sm font-medium text-muted-foreground",
                        children: "Receitas do Mês",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xl sm:text-2xl md:text-3xl font-bold text-green-600",
                        children: p(Je),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "p-2 sm:p-3 rounded-xl bg-green-500/10 group-hover:scale-110 transition-transform shadow-lg",
                    children: e.jsx(ls, {
                      className: "w-5 h-5 sm:w-6 sm:h-6 text-green-600",
                    }),
                  }),
                ],
              }),
            }),
            e.jsx(z, {
              className:
                "group p-3 sm:p-4 md:p-6 bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in",
              style: { animationDelay: "100ms" },
              children: e.jsxs("div", {
                className: "flex items-start justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-1 sm:space-y-2",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-xs sm:text-sm font-medium text-muted-foreground",
                        children: "Despesas",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xl sm:text-2xl md:text-3xl font-bold text-red-600",
                        children: p(Ls),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "p-2 sm:p-3 rounded-xl bg-red-500/10 group-hover:scale-110 transition-transform shadow-lg",
                    children: e.jsx(ea, {
                      className: "w-5 h-5 sm:w-6 sm:h-6 text-red-600",
                    }),
                  }),
                ],
              }),
            }),
            e.jsx(z, {
              className:
                "group p-3 sm:p-4 md:p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in",
              style: { animationDelay: "200ms" },
              children: e.jsxs("div", {
                className: "flex items-start justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-1 sm:space-y-2",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-xs sm:text-sm font-medium text-muted-foreground",
                        children: "Lucro Líquido",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xl sm:text-2xl md:text-3xl font-bold text-primary",
                        children: p(Ns),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "p-2 sm:p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform shadow-lg",
                    children: e.jsx(Fs, {
                      className: "w-5 h-5 sm:w-6 sm:h-6 text-primary",
                    }),
                  }),
                ],
              }),
            }),
            e.jsx(z, {
              className:
                "group p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in",
              style: { animationDelay: "300ms" },
              children: e.jsxs("div", {
                className: "flex items-start justify-between",
                children: [
                  e.jsxs("div", {
                    className: "space-y-1 sm:space-y-2",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-xs sm:text-sm font-medium text-muted-foreground",
                        children: "Receita Hoje",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xl sm:text-2xl md:text-3xl font-bold text-blue-600",
                        children: p(ua),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "p-2 sm:p-3 rounded-xl bg-blue-500/10 group-hover:scale-110 transition-transform shadow-lg",
                    children: e.jsx(Fs, {
                      className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-600",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      e.jsx(z, {
        className:
          "p-3 sm:p-4 md:p-6 bg-gradient-to-br from-card via-card to-card/50 border-border/50 shadow-2xl",
        children: e.jsxs(Ea, {
          defaultValue: ue ? "pdv" : "dashboard",
          className: "w-full",
          children: [
            e.jsxs(Ma, {
              className: `mb-3 sm:mb-4 md:mb-6 grid w-full bg-muted/50 p-1 gap-1 h-auto ${
                ue ? "grid-cols-2" : "grid-cols-5"
              }`,
              children: [
                !ue &&
                  e.jsxs(ke, {
                    value: "dashboard",
                    className:
                      "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 transition-all py-2",
                    children: [
                      e.jsx(Dt, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Dashboard",
                      }),
                    ],
                  }),
                !ue &&
                  e.jsxs(ke, {
                    value: "caixa",
                    className:
                      "data-[state=active]:bg-emerald-500/10 data-[state=active]:text-emerald-600 data-[state=active]:shadow-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 transition-all py-2",
                    children: [
                      e.jsx(ca, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Caixa",
                      }),
                    ],
                  }),
                ue &&
                  e.jsxs(ke, {
                    value: "pdv",
                    className:
                      "data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 transition-all py-2",
                    children: [
                      e.jsx(Me, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "PDV / Vendas",
                      }),
                    ],
                  }),
                ue &&
                  e.jsxs(ke, {
                    value: "despesas",
                    className:
                      "data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive data-[state=active]:shadow-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 transition-all py-2",
                    children: [
                      e.jsx(na, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Despesas",
                      }),
                    ],
                  }),
                !ue &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsxs(ke, {
                        value: "contas",
                        className:
                          "data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-600 data-[state=active]:shadow-lg text-xs sm:text-sm flex items-center justify-center gap-1 sm:gap-2 transition-all py-2",
                        children: [
                          e.jsx(na, { className: "h-3 w-3 sm:h-4 sm:w-4" }),
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Contas",
                          }),
                        ],
                      }),
                      e.jsxs(ke, {
                        value: "entradas",
                        className:
                          "data-[state=active]:bg-green-500/10 data-[state=active]:text-green-600 data-[state=active]:shadow-lg text-xs sm:text-sm transition-all py-2",
                        children: [
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Receitas",
                          }),
                          e.jsx("span", {
                            className: "sm:hidden",
                            children: "💰",
                          }),
                        ],
                      }),
                      e.jsxs(ke, {
                        value: "saidas",
                        className:
                          "data-[state=active]:bg-red-500/10 data-[state=active]:text-red-600 data-[state=active]:shadow-lg text-xs sm:text-sm transition-all py-2",
                        children: [
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Despesas",
                          }),
                          e.jsx("span", {
                            className: "sm:hidden",
                            children: "💸",
                          }),
                        ],
                      }),
                      e.jsxs(ke, {
                        value: "relatorios",
                        className:
                          "data-[state=active]:bg-purple-500/10 data-[state=active]:text-purple-600 data-[state=active]:shadow-lg text-xs sm:text-sm transition-all py-2",
                        children: [
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "📊 Relatórios",
                          }),
                          e.jsx("span", {
                            className: "sm:hidden",
                            children: "📊",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            !ue &&
              e.jsxs(Te, {
                value: "dashboard",
                className: "space-y-6",
                children: [
                  e.jsx(Zt, {
                    metrics: {
                      totalRevenue: Je,
                      totalExpenses: Ls,
                      netProfit: Ns,
                      avgTicket: Ka,
                      totalSales: zs,
                      totalProducts: u.length,
                      profitMargin: Wa,
                      monthlyGrowth: 0,
                      todayRevenue: ua,
                    },
                  }),
                  e.jsx(er, {
                    salesOverTime: Xa,
                    paymentMethods: Ga,
                    topProducts: Qa,
                  }),
                ],
              }),
            !ue &&
              e.jsx(Te, {
                value: "caixa",
                className: "space-y-4",
                children: e.jsx(Xt, {}),
              }),
            e.jsx(Te, {
              value: "pdv",
              className: "space-y-4",
              children: e.jsx(rr, {
                products: u,
                onSale: Ja,
                companySettings: X,
              }),
            }),
            ue &&
              e.jsxs(Te, {
                value: "despesas",
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4",
                    children: [
                      e.jsx("h3", {
                        className: "text-base sm:text-lg font-semibold",
                        children: "Registrar Despesas",
                      }),
                      e.jsxs(N, {
                        onClick: () => {
                          ce("expense"), w(null), q(!0);
                        },
                        className: "gap-2",
                        size: "sm",
                        children: [
                          e.jsx(Oe, { className: "h-4 w-4" }),
                          "Nova Despesa",
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "space-y-2",
                    children:
                      he.filter((s) => s.type === "expense").length === 0
                        ? e.jsx("div", {
                            className:
                              "text-center py-8 text-muted-foreground text-sm",
                            children:
                              "Nenhuma despesa registrada neste período",
                          })
                        : he
                            .filter((s) => s.type === "expense")
                            .map((s) =>
                              e.jsxs(
                                z,
                                {
                                  className:
                                    "p-3 flex items-center justify-between hover:bg-accent/50 transition-colors",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-3 min-w-0",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "flex h-9 w-9 items-center justify-center rounded-xl bg-destructive/10 text-destructive shrink-0",
                                          children: e.jsx(ea, {
                                            className: "h-4 w-4",
                                          }),
                                        }),
                                        e.jsxs("div", {
                                          className: "min-w-0",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "text-sm font-medium truncate",
                                              children: s.description,
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-xs text-muted-foreground",
                                              children: [
                                                $e(s.date),
                                                s.createdAt
                                                  ? ` · ${me(
                                                      new Date(s.createdAt),
                                                      "HH:mm"
                                                    )}`
                                                  : "",
                                                " · ",
                                                s.category || "Sem categoria",
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsxs("span", {
                                          className:
                                            "text-sm font-semibold text-destructive",
                                          children: [
                                            "-",
                                            p(
                                              parseFloat(
                                                s.value
                                                  .replace(/\./g, "")
                                                  .replace(",", ".")
                                              )
                                            ),
                                          ],
                                        }),
                                        e.jsx(N, {
                                          variant: "ghost",
                                          size: "icon",
                                          className: "h-7 w-7",
                                          onClick: () => {
                                            w(s), ce("expense"), q(!0);
                                          },
                                          children: e.jsx(Ra, {
                                            className: "h-3 w-3",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                s.id
                              )
                            ),
                  }),
                ],
              }),
            !ue &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx(Te, {
                    value: "contas",
                    className: "space-y-4",
                    children: e.jsx(or, {}),
                  }),
                  e.jsxs(Te, {
                    value: "entradas",
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4",
                        children: [
                          e.jsx("h3", {
                            className: "text-base sm:text-lg font-semibold",
                            children: "Receitas",
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2 w-full sm:w-auto",
                            children: [
                              e.jsxs(N, {
                                variant: "outline",
                                size: "sm",
                                onClick: () => {
                                  const s = he
                                    .filter((c) => c.type === "income")
                                    .map((c) => ({
                                      date: $e(c.date),
                                      description: c.description,
                                      product_name:
                                        u.find((h) => h.id === c.productId)
                                          ?.name || "",
                                      quantity: 1,
                                      cost: 0,
                                      revenue: parseFloat(
                                        c.value
                                          .replace(/[^\d,]/g, "")
                                          .replace(",", ".")
                                      ),
                                      profit: parseFloat(
                                        c.value
                                          .replace(/[^\d,]/g, "")
                                          .replace(",", ".")
                                      ),
                                      payment_method: c.paymentMethod || "",
                                    }));
                                  Pt(s, t, ne),
                                    ee({
                                      title: "Exportação concluída!",
                                      description:
                                        "Relatório de vendas exportado com sucesso",
                                    });
                                },
                                className: "gap-2",
                                children: [
                                  e.jsx(kt, { className: "w-4 h-4" }),
                                  e.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Exportar Excel",
                                  }),
                                  e.jsx("span", {
                                    className: "sm:hidden",
                                    children: "Excel",
                                  }),
                                ],
                              }),
                              e.jsxs(N, {
                                onClick: () => {
                                  ce("income"), w(null), q(!0);
                                },
                                className: "flex-1 sm:flex-initial",
                                children: [
                                  e.jsx(Oe, { className: "w-4 h-4 mr-2" }),
                                  e.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Adicionar Entrada",
                                  }),
                                  e.jsx("span", {
                                    className: "sm:hidden",
                                    children: "Nova Entrada",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "overflow-x-auto -mx-3 sm:mx-0",
                        children: e.jsxs("table", {
                          className: "w-full min-w-[600px]",
                          children: [
                            e.jsx("thead", {
                              children: e.jsxs("tr", {
                                className: "border-b border-border",
                                children: [
                                  e.jsx("th", {
                                    className:
                                      "text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold",
                                    children: "Data",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold",
                                    children: "Descrição",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold hidden md:table-cell",
                                    children: "Categoria",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold",
                                    children: "Valor",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-right py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold",
                                    children: "Ações",
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("tbody", {
                              children:
                                he.filter((s) => s.type === "income").length ===
                                0
                                  ? e.jsx("tr", {
                                      children: e.jsx("td", {
                                        colSpan: 5,
                                        className:
                                          "text-center py-8 text-muted-foreground",
                                        children:
                                          "Nenhuma entrada registrada neste período.",
                                      }),
                                    })
                                  : he
                                      .filter((s) => s.type === "income")
                                      .map((s) =>
                                        e.jsxs(
                                          "tr",
                                          {
                                            className:
                                              "border-b border-border/50 hover:bg-secondary/30",
                                            children: [
                                              e.jsxs("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-xs sm:text-sm whitespace-nowrap",
                                                children: [
                                                  e.jsx("div", {
                                                    children: $e(s.date),
                                                  }),
                                                  s.createdAt &&
                                                    e.jsx("div", {
                                                      className:
                                                        "text-[10px] text-muted-foreground font-mono",
                                                      children: me(
                                                        new Date(s.createdAt),
                                                        "HH:mm"
                                                      ),
                                                    }),
                                                ],
                                              }),
                                              e.jsx("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-xs sm:text-sm",
                                                children: s.description,
                                              }),
                                              e.jsx("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-xs sm:text-sm hidden md:table-cell",
                                                children: s.category,
                                              }),
                                              e.jsx("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold text-green-500 whitespace-nowrap",
                                                children: s.value,
                                              }),
                                              e.jsx("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-right",
                                                children: e.jsxs("div", {
                                                  className:
                                                    "flex justify-end gap-1",
                                                  children: [
                                                    e.jsx(N, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className:
                                                        "h-7 w-7 sm:h-8 sm:w-8",
                                                      onClick: () => Ua(s),
                                                      title: "Imprimir Cupom",
                                                      children: e.jsx(Tt, {
                                                        className:
                                                          "w-3 h-3 sm:w-4 sm:h-4",
                                                      }),
                                                    }),
                                                    e.jsx(N, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className:
                                                        "h-7 w-7 sm:h-8 sm:w-8",
                                                      onClick: () => da(s.id),
                                                      children: e.jsx(Ue, {
                                                        className:
                                                          "w-3 h-3 sm:w-4 sm:h-4",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            ],
                                          },
                                          s.id
                                        )
                                      ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsxs(Te, {
                    value: "saidas",
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4",
                        children: [
                          e.jsx("h3", {
                            className: "text-base sm:text-lg font-semibold",
                            children: "Despesas",
                          }),
                          e.jsxs(N, {
                            onClick: () => {
                              ce("expense"), w(null), q(!0);
                            },
                            className: "w-full sm:w-auto",
                            children: [
                              e.jsx(Oe, { className: "w-4 h-4 mr-2" }),
                              e.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Adicionar Saída",
                              }),
                              e.jsx("span", {
                                className: "sm:hidden",
                                children: "Nova Saída",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "overflow-x-auto -mx-3 sm:mx-0",
                        children: e.jsxs("table", {
                          className: "w-full min-w-[600px]",
                          children: [
                            e.jsx("thead", {
                              children: e.jsxs("tr", {
                                className: "border-b border-border",
                                children: [
                                  e.jsx("th", {
                                    className:
                                      "text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold",
                                    children: "Data",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold",
                                    children: "Descrição",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold hidden md:table-cell",
                                    children: "Categoria",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-left py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold",
                                    children: "Valor",
                                  }),
                                  e.jsx("th", {
                                    className:
                                      "text-right py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold",
                                    children: "Ações",
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("tbody", {
                              children:
                                he.filter((s) => s.type === "expense")
                                  .length === 0
                                  ? e.jsx("tr", {
                                      children: e.jsx("td", {
                                        colSpan: 5,
                                        className:
                                          "text-center py-8 text-muted-foreground",
                                        children:
                                          "Nenhuma despesa registrada neste período.",
                                      }),
                                    })
                                  : he
                                      .filter((s) => s.type === "expense")
                                      .map((s) =>
                                        e.jsxs(
                                          "tr",
                                          {
                                            className:
                                              "border-b border-border/50 hover:bg-secondary/30",
                                            children: [
                                              e.jsxs("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-xs sm:text-sm whitespace-nowrap",
                                                children: [
                                                  e.jsx("div", {
                                                    children: $e(s.date),
                                                  }),
                                                  s.createdAt &&
                                                    e.jsx("div", {
                                                      className:
                                                        "text-[10px] text-muted-foreground font-mono",
                                                      children: me(
                                                        new Date(s.createdAt),
                                                        "HH:mm"
                                                      ),
                                                    }),
                                                ],
                                              }),
                                              e.jsx("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-xs sm:text-sm",
                                                children: s.description,
                                              }),
                                              e.jsx("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-xs sm:text-sm hidden md:table-cell",
                                                children: s.category,
                                              }),
                                              e.jsx("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-xs sm:text-sm font-semibold text-red-500 whitespace-nowrap",
                                                children: s.value,
                                              }),
                                              e.jsx("td", {
                                                className:
                                                  "py-2 sm:py-3 px-2 text-right",
                                                children: e.jsx(N, {
                                                  variant: "ghost",
                                                  size: "icon",
                                                  className:
                                                    "h-7 w-7 sm:h-8 sm:w-8",
                                                  onClick: () => da(s.id),
                                                  children: e.jsx(Ue, {
                                                    className:
                                                      "w-3 h-3 sm:w-4 sm:h-4",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          },
                                          s.id
                                        )
                                      ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e.jsx(Te, {
                    value: "relatorios",
                    className: "space-y-4",
                    children: e.jsx(sr, {
                      transactions: b,
                      companyName: B,
                      companyLogo: X?.company_logo || "",
                    }),
                  }),
                ],
              }),
          ],
        }),
      }),
      e.jsx(Qt, {
        open: T,
        onOpenChange: (s) => {
          q(s), s || w(null);
        },
        onSave: Ba,
        type: xe,
        transaction: D,
      }),
      e.jsx(It, {
        open: f,
        onOpenChange: (s) => {
          K(s), s || ge(null);
        },
        onSave: Ha,
        product: re,
      }),
      e.jsx(Jt, {
        open: R,
        onOpenChange: l,
        products: u,
        onSale: async (s) => {},
      }),
      e.jsx(At, {
        open: m,
        onOpenChange: (s) => {
          L(s), s || G(null);
        },
        product: Z,
      }),
      e.jsx(qt, { open: E, onOpenChange: C }),
      e.jsx(Aa, {
        open: le,
        onOpenChange: o,
        onConfirm: Za,
        title: "Selecione a moeda para o relatório",
        description:
          "Escolha a moeda que será utilizada no relatório financeiro mensal",
      }),
      e.jsx(dr, { open: M, onOpenChange: U }),
      e.jsx(Ft, {}),
    ],
  });
};
export { Ir as default };
