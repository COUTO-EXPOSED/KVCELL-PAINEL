import {
  cD as ze,
  z as Qe,
  u as ms,
  r as i,
  cm as ks,
  j as e,
  D as ye,
  c as Ne,
  a_ as ve,
  d as be,
  cR as Is,
  cS as ie,
  cT as ne,
  cU as oe,
  cV as ce,
  I as G,
  cW as le,
  bJ as us,
  b5 as he,
  b6 as ge,
  b7 as fe,
  b8 as je,
  b9 as Q,
  B as f,
  a8 as xs,
  c7 as He,
  cn as Os,
  cX as Ts,
  w as g,
  n as Pe,
  T as Ms,
  bS as Oe,
  c2 as $e,
  G as pe,
  b3 as U,
  b4 as As,
  bj as Ls,
  bk as Rs,
  cf as ps,
  e as Ve,
  bb as as,
  bg as Bs,
  bc as Vs,
  bd as zs,
  be as Qs,
  bf as rs,
  bh as Hs,
  cd as is,
  cb as $s,
  cc as Us,
  i as hs,
  cy as gs,
  cY as fs,
  o as Ie,
  a3 as Ks,
  s as Ys,
  C as Gs,
  ba as Ws,
  cZ as De,
  c_ as Xs,
  c$ as Js,
  cu as Zs,
  d0 as et,
  d1 as st,
  d2 as tt,
  bl as at,
  cK as Ae,
  bW as rt,
  aa as Le,
  a9 as Re,
  by as Ce,
  Y as Fe,
  $ as Ee,
  a1 as ke,
  a0 as it,
  b2 as nt,
  bO as ns,
  cz as os,
  bm as cs,
} from "./index-V8ZHCWL2.js";
import {
  T as js,
  a as ys,
  b as Se,
  c as te,
  d as Ns,
  e as Z,
} from "./table-Dmiq7g5Z.js";
import { A as ot, a as ct } from "./arrow-up-BO8-gqvp.js";
import {
  P as lt,
  a as dt,
  S as mt,
  b as ut,
} from "./SalesHistoryDialog-a-7h4DoN.js";
import { C as xt } from "./chart-pie-FBSL2Xay.js";
import { C as pt } from "./CurrencyExportDialog-HmiEHQbG.js";
import { g as ht } from "./financeReportPDFGenerator-qoM5ezYg.js";
import { A as ls } from "./arrow-up-down-Bp1BbkwY.js";
import "./layers-D35uilGq.js";
import "./calendar-D5yT29JG.js";
import "./isSameDay-C3Dd1gMO.js";
import "./isBefore-BYSD3akg.js";
function gt({ open: b, onOpenChange: C, onSave: M, part: p }) {
  const { symbol: u } = ze(),
    { user: _ } = Qe(),
    j = ms(),
    [c, H] = i.useState([]),
    [B, D] = i.useState(""),
    [F, N] = i.useState(!1),
    P = ks({
      resolver: Os(Ts),
      defaultValues: {
        name: "",
        code: "",
        category: "",
        quantity: 0,
        minQuantity: 0,
        purchasePrice: "",
        salePrice: "",
      },
    });
  i.useEffect(() => {
    (async () => {
      if (!_ || !b) return;
      N(!0);
      const { data: x, error: n } = await g
        .from("suppliers")
        .select("id, name")
        .eq("user_id", _.id)
        .eq("is_active", !0)
        .order("name");
      !n && x && H(x), N(!1);
    })();
  }, [_, b]),
    i.useEffect(() => {
      p
        ? (P.reset({
            name: p.name,
            code: p.code,
            category: p.category,
            quantity: p.quantity,
            minQuantity: p.minQuantity,
            purchasePrice: p.purchasePrice,
            salePrice: p.salePrice,
          }),
          D(p.supplierId || ""))
        : (P.reset({
            name: "",
            code: "",
            category: "",
            quantity: 0,
            minQuantity: 0,
            purchasePrice: "",
            salePrice: "",
          }),
          D(""));
    }, [p, b, P]);
  const V = (o) => {
    const x = c.find((n) => n.id === B);
    M({ ...o, id: p?.id, supplierId: B || null, supplier: x?.name || "" }),
      P.reset(),
      D("");
  };
  return e.jsx(ye, {
    open: b,
    onOpenChange: C,
    children: e.jsxs(Ne, {
      className: "max-w-2xl max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx(ve, {
          children: e.jsx(be, { children: p ? "Editar Peça" : "Nova Peça" }),
        }),
        e.jsx(Is, {
          ...P,
          children: e.jsxs("form", {
            onSubmit: P.handleSubmit(V),
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                  e.jsx(ie, {
                    control: P.control,
                    name: "name",
                    render: ({ field: o }) =>
                      e.jsxs(ne, {
                        children: [
                          e.jsx(oe, { children: "Nome da Peça *" }),
                          e.jsx(ce, {
                            children: e.jsx(G, {
                              ...o,
                              placeholder: "Ex: Tela LCD iPhone 13",
                            }),
                          }),
                          e.jsx(le, {}),
                        ],
                      }),
                  }),
                  e.jsx(ie, {
                    control: P.control,
                    name: "code",
                    render: ({ field: o }) =>
                      e.jsxs(ne, {
                        children: [
                          e.jsx(oe, { children: "Código *" }),
                          e.jsx(ce, {
                            children: e.jsx(G, {
                              ...o,
                              placeholder: "Ex: PCA001",
                            }),
                          }),
                          e.jsx(le, {}),
                        ],
                      }),
                  }),
                ],
              }),
              e.jsx(ie, {
                control: P.control,
                name: "category",
                render: ({ field: o }) =>
                  e.jsxs(ne, {
                    children: [
                      e.jsx(oe, { children: "Categoria *" }),
                      e.jsx(ce, {
                        children: e.jsx(G, {
                          ...o,
                          placeholder: "Ex: Telas, Baterias, Cabos",
                        }),
                      }),
                      e.jsx(le, {}),
                    ],
                  }),
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                  e.jsx(ie, {
                    control: P.control,
                    name: "quantity",
                    render: ({ field: o }) =>
                      e.jsxs(ne, {
                        children: [
                          e.jsx(oe, { children: "Quantidade *" }),
                          e.jsx(ce, {
                            children: e.jsx(G, {
                              ...o,
                              type: "number",
                              placeholder: "0",
                              onChange: (x) =>
                                o.onChange(parseInt(x.target.value) || 0),
                            }),
                          }),
                          e.jsx(le, {}),
                        ],
                      }),
                  }),
                  e.jsx(ie, {
                    control: P.control,
                    name: "minQuantity",
                    render: ({ field: o }) =>
                      e.jsxs(ne, {
                        children: [
                          e.jsx(oe, { children: "Quantidade Mínima *" }),
                          e.jsx(ce, {
                            children: e.jsx(G, {
                              ...o,
                              type: "number",
                              placeholder: "0",
                              onChange: (x) =>
                                o.onChange(parseInt(x.target.value) || 0),
                            }),
                          }),
                          e.jsx(le, {}),
                        ],
                      }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                  e.jsx(ie, {
                    control: P.control,
                    name: "purchasePrice",
                    render: ({ field: o }) =>
                      e.jsxs(ne, {
                        children: [
                          e.jsxs(oe, {
                            children: ["Preço de Compra (", u, ") *"],
                          }),
                          e.jsx(ce, {
                            children: e.jsx(G, { ...o, placeholder: "0,00" }),
                          }),
                          e.jsx(le, {}),
                        ],
                      }),
                  }),
                  e.jsx(ie, {
                    control: P.control,
                    name: "salePrice",
                    render: ({ field: o }) =>
                      e.jsxs(ne, {
                        children: [
                          e.jsxs(oe, {
                            children: ["Preço de Venda (", u, ") *"],
                          }),
                          e.jsx(ce, {
                            children: e.jsx(G, { ...o, placeholder: "0,00" }),
                          }),
                          e.jsx(le, {}),
                        ],
                      }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsxs("label", {
                    className: "text-sm font-medium flex items-center gap-2",
                    children: [
                      e.jsx(us, { className: "h-4 w-4" }),
                      "Fornecedor",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsxs(he, {
                        value: B,
                        onValueChange: D,
                        children: [
                          e.jsx(ge, {
                            className: "flex-1",
                            children: e.jsx(fe, {
                              placeholder: F
                                ? "Carregando..."
                                : "Selecione um fornecedor",
                            }),
                          }),
                          e.jsxs(je, {
                            children: [
                              e.jsx(Q, {
                                value: "none",
                                children: "Nenhum fornecedor",
                              }),
                              c.map((o) =>
                                e.jsx(
                                  Q,
                                  { value: o.id, children: o.name },
                                  o.id
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(f, {
                        type: "button",
                        variant: "outline",
                        size: "icon",
                        onClick: () => {
                          C(!1), j("/fornecedores");
                        },
                        title: "Cadastrar novo fornecedor",
                        children: e.jsx(xs, { className: "h-4 w-4" }),
                      }),
                    ],
                  }),
                  c.length === 0 &&
                    !F &&
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children:
                        "Nenhum fornecedor cadastrado. Clique no + para cadastrar.",
                    }),
                ],
              }),
              e.jsxs(He, {
                children: [
                  e.jsx(f, {
                    type: "button",
                    variant: "outline",
                    onClick: () => C(!1),
                    children: "Cancelar",
                  }),
                  e.jsx(f, {
                    type: "submit",
                    children: p ? "Salvar Alterações" : "Adicionar Peça",
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
function ft({ open: b, onOpenChange: C, onConfirm: M, partName: p }) {
  const [u, _] = i.useState("in"),
    [j, c] = i.useState(""),
    [H, B] = i.useState(""),
    [D, F] = i.useState(""),
    [N, P] = i.useState(""),
    V = () => {
      M({
        type: u,
        reason: j,
        quantity: parseInt(H || "0", 10),
        osNumber: D || void 0,
        saleValue: N || void 0,
      }),
        _("in"),
        c(""),
        B(""),
        F(""),
        P(""),
        C(!1);
    };
  return e.jsx(ye, {
    open: b,
    onOpenChange: C,
    children: e.jsxs(Ne, {
      className: "w-[95vw] max-w-md max-h-[90vh] overflow-y-auto",
      children: [
        e.jsxs(ve, {
          children: [
            e.jsx(be, { children: "Registrar Movimentação" }),
            p &&
              e.jsxs("p", {
                className: "text-sm text-muted-foreground",
                children: ["Peça: ", p],
              }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(Pe, { children: "Tipo de Movimentação" }),
                e.jsxs(he, {
                  value: u,
                  onValueChange: (o) => _(o),
                  children: [
                    e.jsx(ge, { children: e.jsx(fe, {}) }),
                    e.jsxs(je, {
                      children: [
                        e.jsx(Q, { value: "in", children: "Entrada" }),
                        e.jsx(Q, { value: "out", children: "Saída" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(Pe, { children: "Quantidade *" }),
                e.jsx(G, {
                  type: "number",
                  min: 1,
                  placeholder: "Ex: 1",
                  value: H,
                  onChange: (o) => B(o.target.value),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(Pe, { children: "Motivo *" }),
                e.jsx(Ms, {
                  placeholder: "Ex: Compra de fornecedor, venda, uso em OS...",
                  value: j,
                  onChange: (o) => c(o.target.value),
                  rows: 3,
                }),
              ],
            }),
            u === "out" &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(Pe, { children: "Número da OS (Opcional)" }),
                      e.jsx(G, {
                        placeholder: "Ex: OS-001",
                        value: D,
                        onChange: (o) => F(o.target.value),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(Pe, { children: "Valor de Venda (Opcional)" }),
                      e.jsx(G, {
                        type: "number",
                        step: "0.01",
                        min: "0",
                        placeholder:
                          "Deixe em branco para usar valor de cadastro",
                        value: N,
                        onChange: (o) => P(o.target.value),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        e.jsxs(He, {
          children: [
            e.jsx(f, {
              variant: "outline",
              onClick: () => C(!1),
              children: "Cancelar",
            }),
            e.jsx(f, {
              onClick: V,
              disabled: !j.trim() || !H || parseInt(H) <= 0,
              children: "Confirmar",
            }),
          ],
        }),
      ],
    }),
  });
}
function jt({ open: b, onOpenChange: C }) {
  const { user: M } = Qe(),
    [p, u] = i.useState([]),
    [_, j] = i.useState(!0);
  return (
    i.useEffect(() => {
      if (!b || !M) return;
      let c = !0;
      (async () => {
        if (!c) return;
        j(!0);
        const { data: D, error: F } = await g
          .from("stock_movements")
          .select(
            `
          id,
          part_id,
          type,
          quantity,
          reason,
          os_number,
          sale_value,
          purchase_value,
          created_at
        `
          )
          .eq("user_id", M.id)
          .order("created_at", { ascending: !1 })
          .limit(100);
        if (!F && D && c) {
          const N = [...new Set(D.map((x) => x.part_id).filter(Boolean))],
            { data: P } = await g.from("parts").select("id, name").in("id", N),
            V = new Map(P?.map((x) => [x.id, x.name]) || []),
            o = D.map((x) => ({
              ...x,
              part: x.part_id
                ? { name: V.get(x.part_id) || "Peça não identificada" }
                : null,
            }));
          u(o);
        }
        c && j(!1);
      })();
      const B = g
        .channel(`stock_movements_history_${M.id}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "stock_movements",
            filter: `user_id=eq.${M.id}`,
          },
          async (D) => {
            if (!c) return;
            const F = D.new;
            if (F.part_id) {
              const { data: N } = await g
                .from("parts")
                .select("name")
                .eq("id", F.part_id)
                .maybeSingle();
              N
                ? (F.part = { name: N.name })
                : (F.part = { name: "Peça não identificada" });
            }
            u((N) => [F, ...N].slice(0, 100));
          }
        )
        .subscribe();
      return () => {
        (c = !1), g.removeChannel(B);
      };
    }, [b, M]),
    e.jsx(ye, {
      open: b,
      onOpenChange: C,
      children: e.jsxs(Ne, {
        className: "max-w-3xl max-h-[90vh]",
        children: [
          e.jsx(ve, {
            children: e.jsxs(be, {
              className: "flex items-center gap-2",
              children: [
                e.jsx(Oe, { className: "h-5 w-5" }),
                "Histórico de Movimentações",
              ],
            }),
          }),
          e.jsx($e, {
            className: "h-[600px] pr-4",
            children: _
              ? e.jsx("div", {
                  className: "text-center py-8 text-muted-foreground",
                  children: "Carregando...",
                })
              : p.length === 0
              ? e.jsx("div", {
                  className: "text-center py-8 text-muted-foreground",
                  children: "Nenhuma movimentação registrada",
                })
              : e.jsx("div", {
                  className: "space-y-3",
                  children: p.map((c) =>
                    e.jsx(
                      pe,
                      {
                        className: "p-4",
                        children: e.jsxs("div", {
                          className: "flex items-start justify-between gap-4",
                          children: [
                            e.jsxs("div", {
                              className: "flex-1 space-y-2",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    c.type === "entrada"
                                      ? e.jsx(ot, {
                                          className: "h-4 w-4 text-green-500",
                                        })
                                      : e.jsx(ct, {
                                          className: "h-4 w-4 text-red-500",
                                        }),
                                    e.jsx("span", {
                                      className: "font-semibold",
                                      children:
                                        c.part?.name || "Peça não identificada",
                                    }),
                                    e.jsx(U, {
                                      variant:
                                        c.type === "entrada"
                                          ? "default"
                                          : "secondary",
                                      children:
                                        c.type === "entrada"
                                          ? "Entrada"
                                          : "Saída",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "text-sm space-y-1",
                                  children: [
                                    e.jsxs("p", {
                                      className: "text-muted-foreground",
                                      children: [
                                        "Quantidade: ",
                                        e.jsxs("span", {
                                          className:
                                            "font-medium text-foreground",
                                          children: [c.quantity, " un."],
                                        }),
                                      ],
                                    }),
                                    c.reason &&
                                      e.jsxs("p", {
                                        className: "text-muted-foreground",
                                        children: [
                                          "Motivo: ",
                                          e.jsx("span", {
                                            className: "text-foreground",
                                            children: c.reason,
                                          }),
                                        ],
                                      }),
                                    c.os_number &&
                                      e.jsxs("p", {
                                        className: "text-muted-foreground",
                                        children: [
                                          "OS: ",
                                          e.jsx("span", {
                                            className:
                                              "font-medium text-foreground",
                                            children: c.os_number,
                                          }),
                                        ],
                                      }),
                                    c.sale_value &&
                                      e.jsxs("p", {
                                        className: "text-muted-foreground",
                                        children: [
                                          "Valor de venda: ",
                                          e.jsxs("span", {
                                            className:
                                              "font-medium text-foreground",
                                            children: [
                                              "R$ ",
                                              c.sale_value.toFixed(2),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "text-right text-xs text-muted-foreground flex items-center gap-1",
                              children: [
                                e.jsx(As, { className: "h-3 w-3" }),
                                Ls(new Date(c.created_at), "dd/MM/yyyy HH:mm", {
                                  locale: Rs,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      c.id
                    )
                  ),
                }),
          }),
        ],
      }),
    })
  );
}
const ds = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#84cc16",
    "#f97316",
    "#6b7280",
  ],
  yt = "Sem categoria";
function Nt({ open: b, onOpenChange: C }) {
  const { effectiveUserId: M } = ps(),
    { format: p } = ze(),
    [u, _] = i.useState("month"),
    [j, c] = i.useState("all"),
    [H, B] = i.useState([]),
    [D, F] = i.useState(!1),
    [N, P] = i.useState([]),
    V = () => {
      const n = new Date();
      let S = new Date(n.getFullYear(), n.getMonth(), 1);
      return (
        u === "today" &&
          (S = new Date(n.getFullYear(), n.getMonth(), n.getDate())),
        u === "week" &&
          (S = new Date(n.getFullYear(), n.getMonth(), n.getDate() - 7)),
        u === "year" && (S = new Date(n.getFullYear(), 0, 1)),
        {
          start: S.toISOString().split("T")[0],
          end: n.toISOString().split("T")[0],
        }
      );
    },
    o = async () => {
      if (M) {
        F(!0);
        try {
          const { start: n, end: S } = V(),
            { data: O } = await g
              .from("transactions")
              .select("amount, product_id, date")
              .eq("user_id", M)
              .eq("type", "income")
              .eq("category", "Venda de Produtos")
              .not("product_id", "is", null)
              .gte("date", n)
              .lte("date", S),
            X = Array.from(
              new Set((O || []).map((y) => y.product_id).filter(Boolean))
            );
          let de = [];
          if (X.length) {
            const { data: y } = await g
              .from("products")
              .select("id, name, category, cost_price")
              .in("id", X);
            de = y || [];
          }
          const me = new Map(de.map((y) => [y.id, y])),
            { data: we } = await g
              .from("product_categories")
              .select("name, color")
              .eq("user_id", M),
            I = new Map((we || []).map((y) => [y.name, y.color || null])),
            w = new Map();
          (O || []).forEach((y) => {
            const A = me.get(y.product_id),
              v = (A?.category && String(A.category).trim()) || yt,
              E = w.get(v) || { quantity: 0, revenue: 0, cost: 0 };
            (E.quantity += 1),
              (E.revenue += Number(y.amount || 0)),
              (E.cost += Number(A?.cost_price || 0)),
              w.set(v, E);
          });
          const h = Array.from(w.entries())
              .map(([y, A], v) => ({
                category: y,
                color: I.get(y) || ds[v % ds.length],
                quantity: A.quantity,
                revenue: A.revenue,
                cost: A.cost,
                profit: A.revenue - A.cost,
              }))
              .sort((y, A) => A.revenue - y.revenue),
            ee = (we || []).map((y) => y.name),
            z = Array.from(
              new Set([...h.map((y) => y.category), ...ee])
            ).sort();
          B(z);
          const $ = j === "all" ? h : h.filter((y) => y.category === j);
          P($);
        } finally {
          F(!1);
        }
      }
    };
  i.useEffect(() => {
    b && o();
  }, [b, u, j, M]);
  const x = i.useMemo(
    () => ({
      quantity: N.reduce((n, S) => n + S.quantity, 0),
      revenue: N.reduce((n, S) => n + S.revenue, 0),
      profit: N.reduce((n, S) => n + S.profit, 0),
    }),
    [N]
  );
  return e.jsx(ye, {
    open: b,
    onOpenChange: C,
    children: e.jsxs(Ne, {
      className: "w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx(ve, {
          children: e.jsxs(be, {
            className: "flex items-center gap-2",
            children: [
              e.jsx(Ve, { className: "h-5 w-5 text-primary" }),
              "Relatório de Vendas por Categoria",
            ],
          }),
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-2 w-full sm:w-auto",
                  children: [
                    e.jsxs(he, {
                      value: u,
                      onValueChange: _,
                      children: [
                        e.jsx(ge, {
                          className: "w-full sm:w-[180px]",
                          children: e.jsx(fe, {}),
                        }),
                        e.jsxs(je, {
                          children: [
                            e.jsx(Q, { value: "today", children: "Hoje" }),
                            e.jsx(Q, {
                              value: "week",
                              children: "Última Semana",
                            }),
                            e.jsx(Q, { value: "month", children: "Este Mês" }),
                            e.jsx(Q, { value: "year", children: "Este Ano" }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(he, {
                      value: j,
                      onValueChange: c,
                      children: [
                        e.jsx(ge, {
                          className: "w-full sm:w-[220px]",
                          children: e.jsx(fe, {
                            placeholder: "Todas as categorias",
                          }),
                        }),
                        e.jsxs(je, {
                          children: [
                            e.jsx(Q, {
                              value: "all",
                              children: "Todas as categorias",
                            }),
                            H.map((n) =>
                              e.jsx(Q, { value: n, children: n }, n)
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-3 text-sm",
                  children: [
                    e.jsxs("div", {
                      className: "px-3 py-1 rounded-lg bg-muted",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Vendas: ",
                        }),
                        e.jsx("span", {
                          className: "font-bold",
                          children: x.quantity,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Receita: ",
                        }),
                        e.jsx("span", {
                          className: "font-bold",
                          children: p(x.revenue),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "px-3 py-1 rounded-lg bg-primary/10 text-primary",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Lucro: ",
                        }),
                        e.jsx("span", {
                          className: "font-bold",
                          children: p(x.profit),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            D
              ? e.jsx("div", {
                  className: "text-center py-12 text-muted-foreground",
                  children: "Carregando...",
                })
              : N.length === 0
              ? e.jsxs("div", {
                  className:
                    "text-center py-12 text-muted-foreground flex flex-col items-center gap-2",
                  children: [
                    e.jsx(Oe, { className: "h-12 w-12 opacity-30" }),
                    "Nenhuma venda no período selecionado.",
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs("div", {
                      className: "grid lg:grid-cols-2 gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "border rounded-lg p-4",
                          children: [
                            e.jsxs("h3", {
                              className:
                                "text-sm font-semibold mb-3 flex items-center gap-2",
                              children: [
                                e.jsx(Ve, { className: "h-4 w-4" }),
                                " Receita por Categoria",
                              ],
                            }),
                            e.jsx("div", {
                              className: "h-64",
                              children: e.jsx(as, {
                                children: e.jsxs(Bs, {
                                  data: N,
                                  children: [
                                    e.jsx(Vs, {
                                      strokeDasharray: "3 3",
                                      opacity: 0.2,
                                    }),
                                    e.jsx(zs, {
                                      dataKey: "category",
                                      tick: { fontSize: 11 },
                                    }),
                                    e.jsx(Qs, { tick: { fontSize: 11 } }),
                                    e.jsx(rs, { formatter: (n) => p(n) }),
                                    e.jsx(Hs, {
                                      dataKey: "revenue",
                                      radius: [6, 6, 0, 0],
                                      children: N.map((n, S) =>
                                        e.jsx(is, { fill: n.color }, S)
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "border rounded-lg p-4",
                          children: [
                            e.jsxs("h3", {
                              className:
                                "text-sm font-semibold mb-3 flex items-center gap-2",
                              children: [
                                e.jsx(xt, { className: "h-4 w-4" }),
                                " Distribuição de Vendas",
                              ],
                            }),
                            e.jsx("div", {
                              className: "h-64",
                              children: e.jsx(as, {
                                children: e.jsxs($s, {
                                  children: [
                                    e.jsx(Us, {
                                      data: N,
                                      dataKey: "quantity",
                                      nameKey: "category",
                                      outerRadius: 80,
                                      innerRadius: 40,
                                      label: (n) =>
                                        `${n.category} (${n.quantity})`,
                                      children: N.map((n, S) =>
                                        e.jsx(is, { fill: n.color }, S)
                                      ),
                                    }),
                                    e.jsx(rs, {}),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "overflow-x-auto border rounded-lg",
                      children: e.jsxs("table", {
                        className: "w-full text-sm",
                        children: [
                          e.jsx("thead", {
                            className: "bg-muted/50",
                            children: e.jsxs("tr", {
                              children: [
                                e.jsx("th", {
                                  className: "text-left p-3 font-semibold",
                                  children: "Categoria",
                                }),
                                e.jsx("th", {
                                  className: "text-right p-3 font-semibold",
                                  children: "Vendas",
                                }),
                                e.jsx("th", {
                                  className: "text-right p-3 font-semibold",
                                  children: "Receita",
                                }),
                                e.jsx("th", {
                                  className: "text-right p-3 font-semibold",
                                  children: "Custo",
                                }),
                                e.jsx("th", {
                                  className: "text-right p-3 font-semibold",
                                  children: "Lucro",
                                }),
                                e.jsx("th", {
                                  className: "text-right p-3 font-semibold",
                                  children: "% Receita",
                                }),
                              ],
                            }),
                          }),
                          e.jsx("tbody", {
                            children: N.map((n) =>
                              e.jsxs(
                                "tr",
                                {
                                  className: "border-t hover:bg-muted/30",
                                  children: [
                                    e.jsx("td", {
                                      className: "p-3",
                                      children: e.jsx(U, {
                                        variant: "outline",
                                        style: {
                                          borderColor: n.color,
                                          color: n.color,
                                        },
                                        children: n.category,
                                      }),
                                    }),
                                    e.jsx("td", {
                                      className: "p-3 text-right",
                                      children: n.quantity,
                                    }),
                                    e.jsx("td", {
                                      className:
                                        "p-3 text-right text-emerald-600 font-semibold",
                                      children: p(n.revenue),
                                    }),
                                    e.jsx("td", {
                                      className: "p-3 text-right text-red-600",
                                      children: p(n.cost),
                                    }),
                                    e.jsx("td", {
                                      className:
                                        "p-3 text-right text-primary font-bold",
                                      children: p(n.profit),
                                    }),
                                    e.jsxs("td", {
                                      className:
                                        "p-3 text-right text-muted-foreground",
                                      children: [
                                        x.revenue > 0
                                          ? (
                                              (n.revenue / x.revenue) *
                                              100
                                            ).toFixed(1)
                                          : "0",
                                        "%",
                                      ],
                                    }),
                                  ],
                                },
                                n.category
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
          ],
        }),
      ],
    }),
  });
}
const vt = {
    name: "Nome do Produto *",
    code: "Código / SKU",
    description: "Descrição",
    category: "Categoria",
    brand: "Marca",
    costPrice: "Preço de Custo",
    salePrice: "Preço de Venda",
    quantity: "Quantidade em Estoque",
  },
  bt = {
    nome: "name",
    "nome do produto": "name",
    produto: "name",
    descrição: "description",
    descricao: "description",
    description: "description",
    name: "name",
    title: "name",
    titulo: "name",
    codigo: "code",
    código: "code",
    code: "code",
    sku: "code",
    "código de barras": "code",
    ean: "code",
    barcode: "code",
    referencia: "code",
    referência: "code",
    ref: "code",
    categoria: "category",
    category: "category",
    grupo: "category",
    departamento: "category",
    marca: "brand",
    brand: "brand",
    fabricante: "brand",
    manufacturer: "brand",
    custo: "costPrice",
    "preço de custo": "costPrice",
    "preco de custo": "costPrice",
    "valor de custo": "costPrice",
    cost: "costPrice",
    "cost price": "costPrice",
    preço: "salePrice",
    preco: "salePrice",
    "preço de venda": "salePrice",
    "preco de venda": "salePrice",
    venda: "salePrice",
    "valor de venda": "salePrice",
    price: "salePrice",
    "sale price": "salePrice",
    valor: "salePrice",
    quantidade: "quantity",
    qtd: "quantity",
    qtde: "quantity",
    estoque: "quantity",
    quantity: "quantity",
    stock: "quantity",
    qty: "quantity",
  };
function Be(b) {
  if (b == null || b === "") return 0;
  if (typeof b == "number") return b;
  const C = String(b)
    .trim()
    .replace(/[R$€$\s]/g, "");
  return C.includes(",") && C.includes(".")
    ? C.lastIndexOf(",") > C.lastIndexOf(".")
      ? parseFloat(C.replace(/\./g, "").replace(",", ".")) || 0
      : parseFloat(C.replace(/,/g, "")) || 0
    : C.includes(",")
    ? parseFloat(C.replace(",", ".")) || 0
    : parseFloat(C) || 0;
}
function wt({ open: b, onOpenChange: C, userId: M, onImported: p }) {
  const { toast: u } = hs(),
    _ = i.useRef(null),
    [j, c] = i.useState("upload"),
    [H, B] = i.useState([]),
    [D, F] = i.useState([]),
    [N, P] = i.useState({}),
    [V, o] = i.useState(!1),
    [x, n] = i.useState({ success: 0, failed: 0, errors: [] }),
    S = () => {
      c("upload"),
        B([]),
        F([]),
        P({}),
        n({ success: 0, failed: 0, errors: [] }),
        _.current && (_.current.value = "");
    },
    O = () => {
      V || (S(), C(!1));
    },
    X = () => {
      const I = De.book_new(),
        w = [
          [
            "Nome",
            "Código",
            "Descrição",
            "Categoria",
            "Marca",
            "Preço de Custo",
            "Preço de Venda",
            "Quantidade",
          ],
          [
            "Capa iPhone 13",
            "CAP-IP13",
            "Capa silicone preta",
            "Acessórios",
            "Genérica",
            "15.00",
            "39.90",
            "10",
          ],
          [
            "Película Vidro 3D",
            "PEL-3D",
            "Película de vidro temperado 9H",
            "Películas",
            "Hprime",
            "5.00",
            "25.00",
            "50",
          ],
        ],
        h = De.aoa_to_sheet(w);
      (h["!cols"] = [
        { wch: 30 },
        { wch: 15 },
        { wch: 40 },
        { wch: 18 },
        { wch: 15 },
        { wch: 15 },
        { wch: 15 },
        { wch: 12 },
      ]),
        De.book_append_sheet(I, h, "Produtos"),
        Xs(I, "modelo-importacao-produtos.xlsx");
    },
    de = async (I) => {
      try {
        const w = await I.arrayBuffer(),
          h = Js(w, { type: "array" }),
          ee = h.Sheets[h.SheetNames[0]],
          z = De.sheet_to_json(ee, { header: 1, defval: "", raw: !1 });
        if (z.length < 2) {
          u({
            title: "Arquivo vazio",
            description: "Adicione pelo menos uma linha de produto.",
            variant: "destructive",
          });
          return;
        }
        const $ = z[0].map((v) => String(v ?? "").trim()).filter(Boolean),
          y = z
            .slice(1)
            .filter((v) => v.some((E) => String(E ?? "").trim() !== ""))
            .map((v) => {
              const E = {};
              return (
                $.forEach((se, L) => {
                  E[se] = v[L];
                }),
                E
              );
            }),
          A = {};
        $.forEach((v) => {
          const E = v.toLowerCase().trim();
          A[v] = bt[E] || "ignore";
        }),
          B($),
          F(y),
          P(A),
          c("map");
      } catch (w) {
        u({
          title: "Erro ao ler arquivo",
          description: w.message,
          variant: "destructive",
        });
      }
    },
    me = (I) => {
      const w = I.target.files?.[0];
      w && de(w);
    },
    we = async () => {
      if (!Object.values(N).includes("name")) {
        u({
          title: "Mapeie a coluna 'Nome'",
          description:
            "É obrigatório identificar qual coluna contém o nome do produto.",
          variant: "destructive",
        });
        return;
      }
      o(!0), c("importing");
      const w = {};
      Object.entries(N).forEach(([v, E]) => {
        E !== "ignore" && !w[E] && (w[E] = v);
      });
      const h = (v, E) => {
          const se = w[E];
          return se ? v[se] : "";
        },
        ee = [];
      let z = 0,
        $ = 0;
      const y = 50,
        A = D.filter((v) => String(h(v, "name") ?? "").trim() !== "");
      for (let v = 0; v < A.length; v += y) {
        const E = A.slice(v, v + y),
          se = E.map((L) => {
            const ue = Be(h(L, "costPrice")),
              _e = Be(h(L, "salePrice")),
              W = Math.max(0, Math.floor(Be(h(L, "quantity"))));
            return {
              user_id: M,
              name: String(h(L, "name")).trim().slice(0, 255),
              code: String(h(L, "code") ?? "").trim() || null,
              description: String(h(L, "description") ?? "").trim() || null,
              category: String(h(L, "category") ?? "").trim() || null,
              brand: String(h(L, "brand") ?? "").trim() || null,
              cost_price: ue,
              sale_price: _e,
              quantity: W,
              payment_methods: ["pix", "dinheiro"],
              max_installments: 1,
            };
          });
        try {
          const { data: L, error: ue } = await g
            .from("products")
            .insert(se)
            .select("id, name, code, quantity, cost_price, sale_price");
          if (ue) throw ue;
          if (((z += L?.length || 0), L && L.length)) {
            const _e = L.map((W) => ({
              user_id: M,
              name: W.name,
              code: W.code || "",
              quantity: W.quantity || 0,
              min_quantity: 1,
              unit_price: Number(W.cost_price) || 0,
              sale_price: Number(W.sale_price) || 0,
              category: "Produto",
              supplier: "Importação Excel",
            }));
            await g.from("parts").insert(_e);
          }
        } catch (L) {
          ($ += E.length),
            ee.push(`Linhas ${v + 2}-${v + E.length + 1}: ${L.message}`);
        }
      }
      n({ success: z, failed: $, errors: ee }),
        o(!1),
        c("done"),
        z > 0 && p?.();
    };
  return e.jsx(ye, {
    open: b,
    onOpenChange: O,
    children: e.jsxs(Ne, {
      className: "max-w-4xl max-h-[90vh] overflow-hidden flex flex-col",
      children: [
        e.jsxs(ve, {
          children: [
            e.jsxs(be, {
              className: "flex items-center gap-2",
              children: [
                e.jsx(gs, { className: "h-5 w-5 text-green-600" }),
                "Importar Produtos de Planilha (.xlsx / .csv)",
              ],
            }),
            e.jsx(fs, {
              children:
                "Importe seu catálogo de produtos de qualquer outro sistema. Depois você pode editar individualmente para adicionar fotos, ajustar estoque, etc.",
            }),
          ],
        }),
        j === "upload" &&
          e.jsxs("div", {
            className: "space-y-4 py-4",
            children: [
              e.jsxs("div", {
                className:
                  "rounded-lg border-2 border-dashed border-muted-foreground/30 p-8 text-center space-y-4",
                children: [
                  e.jsx(Ie, {
                    className: "h-12 w-12 mx-auto text-muted-foreground",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "font-medium",
                        children: "Selecione um arquivo Excel ou CSV",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Formatos aceitos: .xlsx, .xls, .csv",
                      }),
                    ],
                  }),
                  e.jsx("input", {
                    ref: _,
                    type: "file",
                    accept: ".xlsx,.xls,.csv",
                    onChange: me,
                    className: "hidden",
                  }),
                  e.jsxs(f, {
                    onClick: () => _.current?.click(),
                    children: [
                      e.jsx(Ie, { className: "mr-2 h-4 w-4" }),
                      "Escolher Arquivo",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "rounded-lg bg-muted/50 p-4 space-y-2",
                children: [
                  e.jsx("p", {
                    className: "text-sm font-medium",
                    children: "Não tem um modelo?",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children:
                      "Baixe nosso modelo já formatado e preencha seus produtos.",
                  }),
                  e.jsxs(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: X,
                    children: [
                      e.jsx(Ks, { className: "mr-2 h-4 w-4" }),
                      "Baixar modelo .xlsx",
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "text-xs text-muted-foreground space-y-1",
                children: [
                  e.jsxs("p", {
                    children: [
                      e.jsx("strong", {
                        children: "Colunas detectadas automaticamente:",
                      }),
                      " Nome, Código/SKU, Descrição, Categoria, Marca, Preço de Custo, Preço de Venda, Quantidade.",
                    ],
                  }),
                  e.jsx("p", {
                    children:
                      "Você poderá ajustar o mapeamento na próxima etapa.",
                  }),
                ],
              }),
            ],
          }),
        j === "map" &&
          e.jsxs("div", {
            className: "flex-1 overflow-hidden flex flex-col gap-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsxs("p", {
                        className: "font-medium",
                        children: [D.length, " produto(s) detectado(s)"],
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Confira o mapeamento das colunas",
                      }),
                    ],
                  }),
                  e.jsx(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: S,
                    children: "Trocar arquivo",
                  }),
                ],
              }),
              e.jsxs($e, {
                className: "flex-1 border rounded-lg",
                children: [
                  e.jsxs(js, {
                    children: [
                      e.jsx(ys, {
                        className: "sticky top-0 bg-background z-10",
                        children: e.jsx(Se, {
                          children: H.map((I) =>
                            e.jsx(
                              te,
                              {
                                className: "min-w-[180px]",
                                children: e.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-xs text-muted-foreground truncate",
                                      title: I,
                                      children: I,
                                    }),
                                    e.jsxs(he, {
                                      value: N[I] || "ignore",
                                      onValueChange: (w) =>
                                        P((h) => ({ ...h, [I]: w })),
                                      children: [
                                        e.jsx(ge, {
                                          className: "h-8 text-xs",
                                          children: e.jsx(fe, {}),
                                        }),
                                        e.jsxs(je, {
                                          children: [
                                            e.jsx(Q, {
                                              value: "ignore",
                                              children: "— Ignorar coluna —",
                                            }),
                                            Object.entries(vt).map(([w, h]) =>
                                              e.jsx(
                                                Q,
                                                { value: w, children: h },
                                                w
                                              )
                                            ),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              I
                            )
                          ),
                        }),
                      }),
                      e.jsx(Ns, {
                        children: D.slice(0, 10).map((I, w) =>
                          e.jsx(
                            Se,
                            {
                              children: H.map((h) =>
                                e.jsx(
                                  Z,
                                  {
                                    className: "text-xs",
                                    children: String(I[h] ?? ""),
                                  },
                                  h
                                )
                              ),
                            },
                            w
                          )
                        ),
                      }),
                    ],
                  }),
                  D.length > 10 &&
                    e.jsxs("p", {
                      className:
                        "p-2 text-center text-xs text-muted-foreground",
                      children: [
                        "Mostrando primeiras 10 de ",
                        D.length,
                        " linhas",
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-2 text-xs",
                children: [
                  e.jsx(U, {
                    variant: "outline",
                    children: "Obrigatório: Nome",
                  }),
                  e.jsx("span", {
                    className: "text-muted-foreground",
                    children:
                      "Campos não mapeados podem ser preenchidos depois editando cada produto.",
                  }),
                ],
              }),
            ],
          }),
        j === "importing" &&
          e.jsxs("div", {
            className: "py-12 text-center space-y-3",
            children: [
              e.jsx(Ys, {
                className: "h-12 w-12 mx-auto animate-spin text-primary",
              }),
              e.jsx("p", {
                className: "font-medium",
                children: "Importando produtos...",
              }),
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: "Não feche esta janela.",
              }),
            ],
          }),
        j === "done" &&
          e.jsxs("div", {
            className: "py-8 space-y-4",
            children: [
              e.jsxs("div", {
                className: "text-center space-y-2",
                children: [
                  e.jsx(Gs, { className: "h-12 w-12 mx-auto text-green-600" }),
                  e.jsx("p", {
                    className: "font-medium text-lg",
                    children: "Importação concluída!",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                  e.jsxs("div", {
                    className:
                      "rounded-lg border bg-green-500/10 p-4 text-center",
                    children: [
                      e.jsx("p", {
                        className: "text-2xl font-bold text-green-600",
                        children: x.success,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "importados com sucesso",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "rounded-lg border bg-red-500/10 p-4 text-center",
                    children: [
                      e.jsx("p", {
                        className: "text-2xl font-bold text-red-600",
                        children: x.failed,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "com erro",
                      }),
                    ],
                  }),
                ],
              }),
              x.errors.length > 0 &&
                e.jsxs("div", {
                  className:
                    "rounded-lg border border-red-500/30 bg-red-500/5 p-3 max-h-40 overflow-auto",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2 mb-2",
                      children: [
                        e.jsx(Ws, { className: "h-4 w-4 text-red-600" }),
                        e.jsx("span", {
                          className: "text-sm font-medium",
                          children: "Detalhes dos erros",
                        }),
                      ],
                    }),
                    e.jsx("ul", {
                      className: "text-xs space-y-1",
                      children: x.errors.map((I, w) =>
                        e.jsx("li", { children: I }, w)
                      ),
                    }),
                  ],
                }),
              e.jsx("p", {
                className: "text-xs text-center text-muted-foreground",
                children:
                  "Agora você pode editar cada produto para adicionar fotos, ajustar estoque, marca, categoria e demais informações.",
              }),
            ],
          }),
        e.jsxs(He, {
          children: [
            j === "map" &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx(f, {
                    variant: "outline",
                    onClick: O,
                    children: "Cancelar",
                  }),
                  e.jsxs(f, {
                    onClick: we,
                    disabled: V,
                    children: [
                      e.jsx(Ie, { className: "mr-2 h-4 w-4" }),
                      "Importar ",
                      D.length,
                      " produto(s)",
                    ],
                  }),
                ],
              }),
            j === "done" && e.jsx(f, { onClick: O, children: "Fechar" }),
            j === "upload" &&
              e.jsx(f, {
                variant: "outline",
                onClick: O,
                children: "Cancelar",
              }),
          ],
        }),
      ],
    }),
  });
}
const Lt = () => {
  const { format: b } = ze(),
    { currency: C } = Zs(),
    M = ms(),
    [p, u] = i.useState([]),
    [_, j] = i.useState([]),
    [c, H] = i.useState(""),
    [B, D] = i.useState(""),
    [F, N] = i.useState("all"),
    [P, V] = i.useState(!1),
    [o, x] = i.useState(null),
    [n, S] = i.useState(!1),
    [O, X] = i.useState(null),
    [de, me] = i.useState(!1),
    [we, I] = i.useState("parts"),
    [w, h] = i.useState(!1),
    [ee, z] = i.useState(null),
    [$, y] = i.useState(!1),
    [A, v] = i.useState(!1),
    [E, se] = i.useState(null),
    [L, ue] = i.useState(!1),
    [_e, W] = i.useState(!1),
    [vs, Ue] = i.useState(!1),
    [bs, Ke] = i.useState(!1),
    [Ye, ws] = i.useState(0),
    [_s, Te] = i.useState(!1),
    { toast: T } = hs(),
    { user: K } = Qe(),
    { effectiveUserId: Ps, isEmployee: _t, employeeId: Pt } = ps(),
    R = Ps || K?.id || "";
  et(),
    i.useEffect(() => {
      if (!K) return;
      (async () => {
        const { data: l, error: d } = await g
          .from("parts")
          .select("*")
          .eq("user_id", R)
          .order("name");
        if (d) return;
        const r = l.map((t) => ({
          id: t.id,
          name: t.name,
          code: t.code || "",
          quantity: t.quantity,
          minQuantity: t.min_quantity,
          purchasePrice: t.unit_price.toString(),
          salePrice: t.sale_price?.toString() || t.unit_price.toString(),
          category: t.category || "",
          supplier: t.supplier || "",
          supplierId: t.supplier_id || "",
        }));
        u(r);
      })();
      const a = g
        .channel(`parts_${R}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "parts",
            filter: `user_id=eq.${R}`,
          },
          (l) => {
            const { eventType: d, new: r, old: t } = l;
            u((m) => {
              if (d === "INSERT") {
                const q = {
                  id: r.id,
                  name: r.name,
                  code: r.code || "",
                  quantity: r.quantity,
                  minQuantity: r.min_quantity,
                  purchasePrice: r.unit_price.toString(),
                  salePrice:
                    r.sale_price?.toString() || r.unit_price.toString(),
                  category: r.category || "",
                  supplier: r.supplier || "",
                  supplierId: r.supplier_id || "",
                };
                return m.some((k) => k.id === q.id)
                  ? m
                  : [...m, q].sort((k, Y) => k.name.localeCompare(Y.name));
              }
              if (d === "UPDATE") {
                const q = {
                  id: r.id,
                  name: r.name,
                  code: r.code || "",
                  quantity: r.quantity,
                  minQuantity: r.min_quantity,
                  purchasePrice: r.unit_price.toString(),
                  salePrice:
                    r.sale_price?.toString() || r.unit_price.toString(),
                  category: r.category || "",
                  supplier: r.supplier || "",
                  supplierId: r.supplier_id || "",
                };
                return m.map((k) => (k.id === q.id ? q : k));
              }
              return d === "DELETE" ? m.filter((q) => q.id !== t.id) : m;
            });
          }
        )
        .subscribe();
      return () => {
        g.removeChannel(a);
      };
    }, [K, R, Ye]),
    i.useEffect(() => {
      if (!K) return;
      const s = async () => {
        const { data: l, error: d } = await g
          .from("products")
          .select("*")
          .eq("user_id", R)
          .order("name");
        if (d) return;
        const r = l.map((t) => ({
          id: t.id,
          name: t.name,
          description: t.description || "",
          costPrice: parseFloat(t.cost_price).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          salePrice: parseFloat(t.sale_price).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          priceCash:
            t.price_cash != null && Number(t.price_cash) > 0
              ? Number(t.price_cash).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "",
          priceInstallment:
            t.price_installment != null && Number(t.price_installment) > 0
              ? Number(t.price_installment).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "",
          installmentCount: t.installment_count || 1,
          code: t.code || "",
          additionalInfo: t.additional_info || "",
          image_url: t.image_url || "",
          images: t.images || [],
          payment_methods: t.payment_methods || ["pix", "dinheiro"],
          max_installments: t.max_installments || 1,
          category: t.category || "",
          brand: t.brand || "",
          colors: t.colors || [],
          quantity: t.quantity || 0,
          hidden_from_catalog: t.hidden_from_catalog || !1,
        }));
        j(r);
      };
      s();
      const a = g
        .channel(`products_estoque_${R}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "products",
            filter: `user_id=eq.${R}`,
          },
          () => s()
        )
        .subscribe();
      return () => {
        g.removeChannel(a);
      };
    }, [K, R, Ye]);
  const Cs = async (s) => {
      if (!K) return;
      const a = (d) => {
          if (!d) return 0;
          const r = d.replace(/\./g, "").replace(",", ".");
          return parseFloat(r) || 0;
        },
        l = {
          user_id: R,
          name: s.name,
          code: s.code,
          quantity: s.quantity,
          min_quantity: s.minQuantity,
          unit_price: a(s.purchasePrice),
          sale_price: a(s.salePrice),
          category: s.category,
          supplier: s.supplier,
          supplier_id: s.supplierId === "none" ? null : s.supplierId || null,
        };
      if (s.id && !s.id.startsWith("temp-")) {
        const d = p.find((r) => r.id === s.id);
        u((r) => r.map((t) => (t.id === s.id ? { ...s, id: s.id } : t))),
          V(!1),
          x(null);
        try {
          const { user_id: r, ...t } = l,
            { error: m } = await g
              .from("parts")
              .update(t)
              .eq("id", s.id)
              .eq("user_id", R);
          if (m) throw m;
          T({ title: "Sucesso", description: "Peça atualizada com sucesso" });
        } catch {
          d && u((t) => t.map((m) => (m.id === s.id ? d : m))),
            T({
              title: "Erro",
              description: "Erro ao salvar peça",
              variant: "destructive",
            });
        }
      } else {
        const d = `temp-${Date.now()}`,
          r = { id: d, ...s };
        u((t) => [...t, r]), V(!1), x(null);
        try {
          const { data: t, error: m } = await g
            .from("parts")
            .insert(l)
            .select()
            .single();
          if (m) throw m;
          const q = {
            id: t.id,
            name: t.name,
            code: t.code || "",
            quantity: t.quantity,
            minQuantity: t.min_quantity,
            purchasePrice: t.unit_price.toString(),
            salePrice: t.sale_price?.toString() || t.unit_price.toString(),
            category: t.category || "",
            supplier: t.supplier || "",
            supplierId: t.supplier_id || "",
          };
          u((k) => k.map((Y) => (Y.id === d ? q : Y))),
            T({ title: "Sucesso", description: "Peça cadastrada com sucesso" });
        } catch {
          u((m) => m.filter((q) => q.id !== d)),
            T({
              title: "Erro",
              description: "Erro ao salvar peça",
              variant: "destructive",
            });
        }
      }
    },
    Ge = async (s) => {
      const a = p.find((r) => r.id === s);
      if (!a) return;
      const l = a.category === "Produto";
      if (
        confirm(
          l
            ? "Deseja realmente excluir este produto? Ele será removido do estoque E do catálogo."
            : "Deseja realmente excluir esta peça?"
        )
      ) {
        u((r) => r.filter((t) => t.id !== s));
        try {
          const { error: r } = await g.from("parts").delete().eq("id", s);
          if (r) throw r;
          l &&
            K &&
            (await g
              .from("products")
              .delete()
              .eq("user_id", R)
              .eq("name", a.name)),
            T({
              title: "Sucesso",
              description: l
                ? "Produto excluído do estoque e catálogo"
                : "Peça excluída com sucesso",
            });
        } catch {
          a && u((t) => [...t, a]),
            T({
              title: "Erro",
              description: "Erro ao excluir",
              variant: "destructive",
            });
        }
      }
    },
    Ss = async (s) => {
      if (!O || !K) return;
      if (!O.id || O.id === "temp-") {
        T({
          title: "Erro",
          description: "Peça inválida. Por favor, recarregue a página.",
          variant: "destructive",
        });
        return;
      }
      const a =
        s.type === "in" ? O.quantity + s.quantity : O.quantity - s.quantity;
      if (a < 0) {
        T({
          title: "Aviso",
          description: "Quantidade insuficiente em estoque",
          variant: "destructive",
        });
        return;
      }
      const l = [...p];
      u((d) => d.map((r) => (r.id === O.id ? { ...r, quantity: a } : r))),
        S(!1),
        X(null);
      try {
        const d = parseFloat(O.purchasePrice || "0"),
          { error: r } = await g
            .from("parts")
            .update({ quantity: a })
            .eq("id", O.id);
        if (r) throw r;
        O.category === "Produto" &&
          (await g
            .from("products")
            .update({ quantity: a })
            .eq("user_id", R)
            .eq("name", O.name));
        const { error: t } = await g
          .from("stock_movements")
          .insert({
            user_id: R,
            part_id: O.id,
            type: s.type === "in" ? "entrada" : "saida",
            quantity: s.quantity,
            reason: s.reason,
            os_number: s.osNumber || null,
            sale_value: s.saleValue
              ? parseFloat(s.saleValue)
              : s.type === "out"
              ? d * 1.5
              : null,
            purchase_value: d,
          });
        if (t) throw t;
        T({
          title: "Sucesso",
          description: `Movimentação de ${
            s.type === "in" ? "entrada" : "saída"
          } registrada`,
        });
      } catch {
        u(l),
          T({
            title: "Erro",
            description: "Erro ao registrar movimentação",
            variant: "destructive",
          });
      }
    },
    qe = (s) => {
      const a = s.trim().replace(/[^\d,.-]/g, "");
      if (!a) return 0;
      const l = a.includes(",") ? a.replace(/\./g, "").replace(",", ".") : a;
      return Number.parseFloat(l) || 0;
    },
    qs = async (s) => {
      if (!K) return;
      const a = s.quantity || 0,
        l = qe(s.costPrice.toString()),
        d = qe(s.salePrice.toString()),
        r = {
          user_id: R,
          name: s.name,
          description: s.description || null,
          code: s.code || null,
          additional_info: s.additionalInfo || null,
          cost_price: l,
          sale_price: d,
          price_cash: s.price_cash ? qe(s.price_cash.toString()) : 0,
          price_installment: s.price_installment
            ? qe(s.price_installment.toString())
            : 0,
          installment_count: s.installment_count || 1,
          image_url: s.image_url || null,
          images: s.images || [],
          payment_methods: s.payment_methods || ["pix", "dinheiro"],
          max_installments: s.max_installments || 1,
          category: s.category || null,
          brand: s.brand || null,
          colors: s.colors || [],
          quantity: a,
        };
      if (s.id && !s.id.startsWith("temp-")) {
        const t = _.find((m) => m.id === s.id);
        j((m) =>
          m.map((q) =>
            q.id === s.id
              ? {
                  ...q,
                  name: s.name,
                  description: s.description || "",
                  costPrice: l.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }),
                  salePrice: d.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }),
                  priceCash:
                    r.price_cash > 0
                      ? r.price_cash.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : "",
                  priceInstallment:
                    r.price_installment > 0
                      ? r.price_installment.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : "",
                  installmentCount: r.installment_count,
                  code: s.code || "",
                  quantity: a,
                  category: s.category || "",
                  brand: s.brand || "",
                }
              : q
          )
        );
        try {
          const { data: m, error: q } = await g
            .from("products")
            .update(r)
            .eq("id", s.id)
            .eq("user_id", R)
            .select(
              "id, cost_price, sale_price, price_cash, price_installment, installment_count"
            )
            .single();
          if (q) throw q;
          if (!m) throw new Error("Produto não encontrado para atualização");
          const { data: k } = await g
            .from("parts")
            .select("id")
            .eq("user_id", R)
            .eq("name", t?.name || s.name)
            .eq("category", "Produto")
            .maybeSingle();
          k &&
            (await g
              .from("parts")
              .update({
                code: s.code || "",
                quantity: a,
                unit_price: l,
                sale_price: d,
              })
              .eq("id", k.id)),
            T({ title: "Produto atualizado!" }),
            h(!1),
            z(null);
        } catch (m) {
          t && j((q) => q.map((k) => (k.id === s.id ? t : k))),
            T({
              title: "Erro ao atualizar produto",
              description: m.message,
              variant: "destructive",
            });
        }
      } else {
        const t = `temp-${Date.now()}`,
          m = {
            id: t,
            name: s.name,
            description: s.description || "",
            costPrice: l.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            salePrice: d.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }),
            code: s.code || "",
            quantity: a,
            category: s.category || "",
            brand: s.brand || "",
            image_url: s.image_url || "",
            images: s.images || [],
            payment_methods: s.payment_methods || ["pix", "dinheiro"],
            max_installments: s.max_installments || 1,
            colors: s.colors || [],
          };
        j((k) => [...k, m]), h(!1), z(null);
        const q = {
          id: `temp-part-${Date.now()}`,
          name: s.name,
          code: s.code || "",
          quantity: a,
          minQuantity: 1,
          purchasePrice: l.toString(),
          salePrice: d.toString(),
          category: "Produto",
          supplier: "Cadastro de Produto",
        };
        u((k) => [...k, q]);
        try {
          const { data: k, error: Y } = await g
            .from("products")
            .insert([r])
            .select()
            .single();
          if (Y) throw Y;
          j((Me) => Me.map((re) => (re.id === t ? { ...re, id: k.id } : re)));
          const { data: xe } = await g
            .from("parts")
            .insert({
              user_id: R,
              name: k.name,
              code: k.code || "",
              quantity: a,
              min_quantity: 1,
              unit_price: l,
              sale_price: d,
              category: "Produto",
              supplier: "Cadastro de Produto",
            })
            .select()
            .single();
          xe &&
            u((Me) =>
              Me.map((re) => (re.id === q.id ? { ...re, id: xe.id } : re))
            ),
            T({ title: "Produto adicionado!" });
        } catch {
          j((Y) => Y.filter((xe) => xe.id !== t)),
            u((Y) => Y.filter((xe) => xe.id !== q.id)),
            T({ title: "Erro ao adicionar produto", variant: "destructive" });
        }
      }
    },
    We = async (s) => {
      if (!K) return;
      const a = _.find((t) => t.name === s.name);
      if (!a) return;
      const d = !(a.hidden_from_catalog || !1);
      j((t) =>
        t.map((m) => (m.id === a.id ? { ...m, hidden_from_catalog: d } : m))
      );
      const { error: r } = await g
        .from("products")
        .update({ hidden_from_catalog: d })
        .eq("id", a.id);
      r
        ? (j((t) =>
            t.map((m) =>
              m.id === a.id ? { ...m, hidden_from_catalog: !d } : m
            )
          ),
          T({
            title: "Erro ao atualizar visibilidade",
            variant: "destructive",
          }))
        : T({
            title: d
              ? "Produto oculto do catálogo"
              : "Produto visível no catálogo",
          });
    };
  _.filter(
    (s) =>
      s.name.toLowerCase().includes(B.toLowerCase()) ||
      (s.code && s.code.toLowerCase().includes(B.toLowerCase())) ||
      (s.description && s.description.toLowerCase().includes(B.toLowerCase()))
  );
  const J = p.filter((s) => {
      const a =
        s.name.toLowerCase().includes(c.toLowerCase()) ||
        s.code.toLowerCase().includes(c.toLowerCase()) ||
        s.category.toLowerCase().includes(c.toLowerCase());
      return F === "parts"
        ? a && s.category !== "Produto"
        : F === "products"
        ? a && s.category === "Produto"
        : a;
    }),
    Xe = J.filter((s) => s.quantity <= s.minQuantity),
    Je = J.reduce(
      (s, a) => s + a.quantity * parseFloat(a.purchasePrice || "0"),
      0
    ),
    Ze = J.reduce((s, a) => s + a.quantity, 0),
    ae = Xe.length,
    [Ds, es] = i.useState(!1),
    [ss, ts] = i.useState(null),
    Fs = async () => {
      if (K)
        try {
          const { data: s } = await g
              .from("user_settings")
              .select("*")
              .eq("user_id", R)
              .maybeSingle(),
            a = (l) => {
              const d = l.replace(/\./g, "").replace(",", ".");
              return parseFloat(d) || 0;
            };
          ts({
            parts: J.map((l) => ({
              name: l.name,
              code: l.code,
              quantity: l.quantity,
              minQuantity: l.minQuantity,
              purchasePrice: a(l.purchasePrice),
              category: l.category,
              supplier: l.supplier,
            })),
            totalValue: Je,
            totalParts: Ze,
            lowStockCount: ae,
            companyName: s?.company_name || "Tech OS Pro",
            companyLogo: s?.company_logo || "",
          }),
            es(!0);
        } catch {
          T({
            title: "Erro ao preparar PDF",
            description: "Ocorreu um erro ao preparar o relatório.",
            variant: "destructive",
          });
        }
    },
    Es = async (s) => {
      if (ss)
        try {
          await ht({ ...ss, currency: s }),
            T({
              title: "PDF gerado com sucesso!",
              description: "O relatório de estoque foi exportado.",
            }),
            ts(null);
        } catch {
          T({
            title: "Erro ao gerar PDF",
            description: "Ocorreu um erro ao exportar o relatório.",
            variant: "destructive",
          });
        }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "flex-1 space-y-3 md:space-y-6 p-3 md:p-6",
        children: [
          e.jsxs("div", {
            className: "flex flex-col gap-3",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className: "text-xl md:text-3xl font-bold tracking-tight",
                    children: "Estoque",
                  }),
                  e.jsx("p", {
                    className: "text-xs md:text-base text-muted-foreground",
                    children:
                      "Gerencie o inventário de peças e produtos com IA",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-wrap gap-2 w-full",
                children: [
                  e.jsxs(he, {
                    value: F,
                    onValueChange: (s) => N(s),
                    children: [
                      e.jsx(ge, {
                        className: "w-full sm:w-[140px] text-xs md:text-sm h-9",
                        children: e.jsx(fe, { placeholder: "Filtrar estoque" }),
                      }),
                      e.jsxs(je, {
                        children: [
                          e.jsx(Q, { value: "all", children: "Todo Estoque" }),
                          e.jsx(Q, { value: "parts", children: "Peças" }),
                          e.jsx(Q, { value: "products", children: "Produtos" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => M("/fornecedores"),
                    className: "flex-1 sm:flex-initial text-xs md:text-sm",
                    children: [
                      e.jsx(us, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      "Fornecedores",
                    ],
                  }),
                  e.jsxs(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => me(!0),
                    className: "flex-1 sm:flex-initial text-xs md:text-sm",
                    children: [
                      e.jsx(st, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      "Histórico",
                    ],
                  }),
                  e.jsxs(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                      const s = J.map((a) => ({
                        code: a.code || "",
                        name: a.name,
                        category: a.category || "",
                        quantity: a.quantity,
                        min_quantity: a.minQuantity,
                        unit_price: parseFloat(a.purchasePrice || "0"),
                        supplier: a.supplier || "",
                        total_value:
                          a.quantity * parseFloat(a.purchasePrice || "0"),
                      }));
                      tt(s, C, "parts"),
                        T({
                          title: "Exportação concluída!",
                          description:
                            "Relatório de estoque exportado com sucesso",
                        });
                    },
                    className: "flex-1 sm:flex-initial text-xs md:text-sm",
                    children: [
                      e.jsx(gs, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      "Excel",
                    ],
                  }),
                  e.jsxs(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: Fs,
                    className: "flex-1 sm:flex-initial text-xs md:text-sm",
                    children: [
                      e.jsx(at, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      "PDF",
                    ],
                  }),
                  e.jsxs(f, {
                    size: "sm",
                    onClick: () => {
                      x(null), V(!0);
                    },
                    className: "flex-1 sm:flex-initial text-xs md:text-sm",
                    children: [
                      e.jsx(xs, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      "Nova Peça",
                    ],
                  }),
                  e.jsxs(f, {
                    size: "sm",
                    onClick: () => {
                      z(null), h(!0);
                    },
                    className:
                      "flex-1 sm:flex-initial text-xs md:text-sm bg-primary",
                    children: [
                      e.jsx(Ae, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      "Novo Produto",
                    ],
                  }),
                  e.jsxs(f, {
                    size: "sm",
                    variant: "outline",
                    onClick: () => Ke(!0),
                    className:
                      "flex-1 sm:flex-initial text-xs md:text-sm border-green-600/40 text-green-700 hover:bg-green-600/10",
                    title: "Importar produtos de planilha Excel/CSV",
                    children: [
                      e.jsx(Ie, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      "Importar Excel",
                    ],
                  }),
                  e.jsxs(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => W(!0),
                    className: "flex-1 sm:flex-initial text-xs md:text-sm",
                    children: [
                      e.jsx(rt, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Categorias",
                      }),
                    ],
                  }),
                  e.jsxs(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => Ue(!0),
                    className: "flex-1 sm:flex-initial text-xs md:text-sm",
                    children: [
                      e.jsx(Ve, {
                        className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                      }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: "Vendas/Categoria",
                      }),
                    ],
                  }),
                  e.jsxs(f, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => y(!$),
                    className: "flex-1 sm:flex-initial text-xs md:text-sm",
                    children: [
                      $
                        ? e.jsx(Le, {
                            className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                          })
                        : e.jsx(Re, {
                            className: "mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4",
                          }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: $ ? "Mostrar Custos" : "Mascarar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          ae > 0 &&
            e.jsxs("button", {
              type: "button",
              onClick: () => Te(!0),
              className:
                "w-full flex items-center justify-between gap-3 p-3 md:p-4 rounded-xl border border-orange-500/40 bg-orange-500/5 hover:bg-orange-500/10 transition-colors text-left",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 min-w-0",
                  children: [
                    e.jsx(Ce, {
                      className: "h-5 w-5 text-orange-600 flex-shrink-0",
                    }),
                    e.jsxs("div", {
                      className: "min-w-0",
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-sm md:text-base font-medium text-orange-600",
                          children: [
                            ae,
                            " ",
                            ae === 1
                              ? "peça abaixo do mínimo"
                              : "peças abaixo do mínimo",
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Toque para visualizar",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(U, {
                  variant: "outline",
                  className:
                    "border-orange-500/50 text-orange-600 flex-shrink-0",
                  children: "Ver lista",
                }),
              ],
            }),
          e.jsx(ye, {
            open: _s,
            onOpenChange: Te,
            children: e.jsxs(Ne, {
              className: "max-w-2xl max-h-[85vh] flex flex-col",
              children: [
                e.jsxs(ve, {
                  children: [
                    e.jsxs(be, {
                      className: "flex items-center gap-2 text-orange-600",
                      children: [
                        e.jsx(Ce, { className: "h-5 w-5" }),
                        "Alertas de Estoque Baixo",
                      ],
                    }),
                    e.jsxs(fs, {
                      children: [
                        ae,
                        " ",
                        ae === 1 ? "peça está" : "peças estão",
                        " abaixo do mínimo",
                      ],
                    }),
                  ],
                }),
                e.jsx($e, {
                  className: "flex-1 -mx-2 px-2",
                  children: e.jsx("div", {
                    className: "space-y-2",
                    children: Xe.map((s) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center justify-between p-3 bg-muted/40 rounded-lg gap-2",
                          children: [
                            e.jsxs("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                e.jsx("p", {
                                  className: "font-medium text-sm truncate",
                                  children: s.name,
                                }),
                                e.jsxs("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: [
                                    "Estoque: ",
                                    s.quantity,
                                    " | Mín: ",
                                    s.minQuantity,
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(f, {
                              size: "sm",
                              onClick: () => {
                                X(s), S(!0), Te(!1);
                              },
                              className: "flex-shrink-0 text-xs",
                              children: "Adicionar",
                            }),
                          ],
                        },
                        s.id
                      )
                    ),
                  }),
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: "grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3",
            children: [
              e.jsxs(pe, {
                children: [
                  e.jsxs(Fe, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2 p-3 md:p-6",
                    children: [
                      e.jsx(Ee, {
                        className: "text-xs md:text-sm font-medium",
                        children: "Total de Peças",
                      }),
                      e.jsx(Oe, {
                        className:
                          "h-3 w-3 md:h-4 md:w-4 text-muted-foreground",
                      }),
                    ],
                  }),
                  e.jsxs(ke, {
                    className: "p-3 pt-0 md:p-6 md:pt-0",
                    children: [
                      e.jsx("div", {
                        className: "text-lg md:text-2xl font-bold",
                        children: Ze,
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] md:text-xs text-muted-foreground",
                        children: "unidades",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(pe, {
                children: [
                  e.jsxs(Fe, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2 p-3 md:p-6",
                    children: [
                      e.jsx(Ee, {
                        className: "text-xs md:text-sm font-medium",
                        children: "Valor Total",
                      }),
                      e.jsx(Oe, {
                        className:
                          "h-3 w-3 md:h-4 md:w-4 text-muted-foreground",
                      }),
                    ],
                  }),
                  e.jsxs(ke, {
                    className: "p-3 pt-0 md:p-6 md:pt-0",
                    children: [
                      e.jsx("div", {
                        className: "text-lg md:text-2xl font-bold",
                        children: b(Je),
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] md:text-xs text-muted-foreground",
                        children: "em estoque",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(pe, {
                className: "col-span-2 sm:col-span-1",
                children: [
                  e.jsxs(Fe, {
                    className:
                      "flex flex-row items-center justify-between space-y-0 pb-1 md:pb-2 p-3 md:p-6",
                    children: [
                      e.jsx(Ee, {
                        className: "text-xs md:text-sm font-medium",
                        children: "Alertas",
                      }),
                      e.jsx(Ce, {
                        className:
                          "h-3 w-3 md:h-4 md:w-4 text-muted-foreground",
                      }),
                    ],
                  }),
                  e.jsxs(ke, {
                    className: "p-3 pt-0 md:p-6 md:pt-0",
                    children: [
                      e.jsx("div", {
                        className:
                          "text-lg md:text-2xl font-bold text-orange-600",
                        children: ae,
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] md:text-xs text-muted-foreground",
                        children: "itens baixos",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(pe, {
            children: [
              e.jsx(Fe, {
                className: "p-3 md:p-6",
                children: e.jsxs("div", {
                  className: "flex flex-col gap-2 md:gap-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx(Ee, {
                          className: "text-sm md:text-lg",
                          children: "Lista de Peças",
                        }),
                        e.jsx(it, {
                          className: "text-xs md:text-sm hidden sm:block",
                          children: "Todas as peças cadastradas",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "relative w-full",
                      children: [
                        e.jsx(nt, {
                          className:
                            "absolute left-2 top-2.5 h-3 w-3 md:h-4 md:w-4 text-muted-foreground",
                        }),
                        e.jsx(G, {
                          placeholder: "Buscar...",
                          value: c,
                          onChange: (s) => H(s.target.value),
                          className: "pl-8 md:pl-9 text-xs md:text-sm h-9",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsxs(ke, {
                className: "p-0",
                children: [
                  e.jsx("div", {
                    className: "sm:hidden p-2 md:p-3 space-y-2",
                    children:
                      J.length === 0
                        ? e.jsx("div", {
                            className:
                              "text-center py-8 text-muted-foreground text-xs",
                            children: "Nenhuma peça cadastrada",
                          })
                        : J.map((s) =>
                            e.jsx(
                              pe,
                              {
                                className: "p-2 md:p-3 bg-card border-border",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-start justify-between gap-2",
                                  children: [
                                    e.jsxs("div", {
                                      className: "space-y-1 min-w-0 flex-1",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "font-medium text-xs truncate",
                                              children: s.name,
                                            }),
                                            s.category === "Produto"
                                              ? e.jsxs(U, {
                                                  variant: "secondary",
                                                  className:
                                                    "text-[9px] h-4 px-1 bg-blue-500/20 text-blue-400 border-blue-500/30",
                                                  children: [
                                                    e.jsx(Ae, {
                                                      className:
                                                        "h-2.5 w-2.5 mr-0.5",
                                                    }),
                                                    " Produto",
                                                  ],
                                                })
                                              : e.jsxs(U, {
                                                  variant: "outline",
                                                  className:
                                                    "text-[9px] h-4 px-1 bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
                                                  children: [
                                                    e.jsx(ns, {
                                                      className:
                                                        "h-2.5 w-2.5 mr-0.5",
                                                    }),
                                                    " Peça",
                                                  ],
                                                }),
                                          ],
                                        }),
                                        e.jsxs("p", {
                                          className:
                                            "text-[10px] text-muted-foreground",
                                          children: ["Cód: ", s.code || "-"],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5 text-[10px]",
                                          children: [
                                            e.jsxs("span", {
                                              className: `${
                                                s.quantity <= s.minQuantity
                                                  ? "text-destructive font-semibold"
                                                  : "text-muted-foreground"
                                              }`,
                                              children: ["Qtd: ", s.quantity],
                                            }),
                                            s.quantity <= s.minQuantity
                                              ? e.jsxs(U, {
                                                  variant: "destructive",
                                                  className:
                                                    "gap-0.5 text-[9px] h-4 px-1",
                                                  children: [
                                                    e.jsx(Ce, {
                                                      className: "h-2.5 w-2.5",
                                                    }),
                                                    " Baixo",
                                                  ],
                                                })
                                              : e.jsx(U, {
                                                  variant: "default",
                                                  className:
                                                    "text-[9px] h-4 px-1",
                                                  children: "Normal",
                                                }),
                                          ],
                                        }),
                                        e.jsx("p", {
                                          className: "text-[10px]",
                                          children: b(
                                            parseFloat(s.purchasePrice || "0")
                                          ),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-0.5",
                                      children: [
                                        e.jsx(f, {
                                          variant: "ghost",
                                          size: "icon",
                                          className: "h-7 w-7",
                                          onClick: () => {
                                            X(s), S(!0);
                                          },
                                          "aria-label": "Movimentar",
                                          children: e.jsx(ls, {
                                            className: "h-3 w-3",
                                          }),
                                        }),
                                        e.jsx(f, {
                                          variant: "ghost",
                                          size: "icon",
                                          className: "h-7 w-7",
                                          onClick: () => {
                                            if (s.category === "Produto") {
                                              const a = _.find(
                                                (l) => l.name === s.name
                                              );
                                              a && (z(a), h(!0));
                                            } else x(s), V(!0);
                                          },
                                          "aria-label": "Editar",
                                          children: e.jsx(os, {
                                            className: "h-3 w-3",
                                          }),
                                        }),
                                        s.category === "Produto" &&
                                          e.jsx(f, {
                                            variant: "ghost",
                                            size: "icon",
                                            className: "h-7 w-7",
                                            onClick: () => We(s),
                                            "aria-label": _.find(
                                              (a) => a.name === s.name
                                            )?.hidden_from_catalog
                                              ? "Mostrar no catálogo"
                                              : "Ocultar do catálogo",
                                            title: _.find(
                                              (a) => a.name === s.name
                                            )?.hidden_from_catalog
                                              ? "Mostrar no catálogo"
                                              : "Ocultar do catálogo",
                                            children: _.find(
                                              (a) => a.name === s.name
                                            )?.hidden_from_catalog
                                              ? e.jsx(Re, {
                                                  className:
                                                    "h-3 w-3 text-destructive",
                                                })
                                              : e.jsx(Le, {
                                                  className: "h-3 w-3",
                                                }),
                                          }),
                                        e.jsx(f, {
                                          variant: "ghost",
                                          size: "icon",
                                          className: "h-7 w-7",
                                          onClick: () => Ge(s.id),
                                          "aria-label": "Excluir",
                                          children: e.jsx(cs, {
                                            className: "h-3 w-3",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              s.id
                            )
                          ),
                  }),
                  e.jsx("div", {
                    className: "hidden sm:block p-3 md:p-6",
                    children: e.jsxs(js, {
                      className: "w-full",
                      children: [
                        e.jsx(ys, {
                          children: e.jsxs(Se, {
                            children: [
                              e.jsx(te, {
                                className: "text-xs",
                                children: "Código",
                              }),
                              e.jsx(te, {
                                className: "text-xs",
                                children: "Nome",
                              }),
                              e.jsx(te, {
                                className: "text-xs",
                                children: "Tipo",
                              }),
                              e.jsx(te, {
                                className: "text-center text-xs",
                                children: "Qtd",
                              }),
                              e.jsx(te, {
                                className:
                                  "text-center text-xs hidden lg:table-cell",
                                children: "Status",
                              }),
                              e.jsx(te, {
                                className: "text-right text-xs",
                                children: "Preço",
                              }),
                              e.jsx(te, {
                                className: "text-center text-xs",
                                children: "Ações",
                              }),
                            ],
                          }),
                        }),
                        e.jsx(Ns, {
                          children:
                            J.length === 0
                              ? e.jsx(Se, {
                                  children: e.jsx(Z, {
                                    colSpan: 7,
                                    className:
                                      "text-center py-8 text-muted-foreground text-xs",
                                    children: "Nenhuma peça cadastrada",
                                  }),
                                })
                              : J.map((s) =>
                                  e.jsxs(
                                    Se,
                                    {
                                      children: [
                                        e.jsx(Z, {
                                          className: "font-medium text-xs",
                                          children: s.code,
                                        }),
                                        e.jsx(Z, {
                                          className: "text-xs",
                                          children: s.name,
                                        }),
                                        e.jsx(Z, {
                                          className: "text-xs",
                                          children:
                                            s.category === "Produto"
                                              ? e.jsxs(U, {
                                                  variant: "secondary",
                                                  className:
                                                    "text-[10px] h-5 bg-blue-500/20 text-blue-400 border-blue-500/30",
                                                  children: [
                                                    e.jsx(Ae, {
                                                      className:
                                                        "h-2.5 w-2.5 mr-1",
                                                    }),
                                                    " Produto",
                                                  ],
                                                })
                                              : e.jsxs(U, {
                                                  variant: "outline",
                                                  className:
                                                    "text-[10px] h-5 bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
                                                  children: [
                                                    e.jsx(ns, {
                                                      className:
                                                        "h-2.5 w-2.5 mr-1",
                                                    }),
                                                    " Peça",
                                                  ],
                                                }),
                                        }),
                                        e.jsx(Z, {
                                          className: "text-center",
                                          children: e.jsx("span", {
                                            className: `text-xs ${
                                              s.quantity <= s.minQuantity
                                                ? "text-orange-600 font-bold"
                                                : ""
                                            }`,
                                            children: s.quantity,
                                          }),
                                        }),
                                        e.jsx(Z, {
                                          className:
                                            "text-center hidden lg:table-cell",
                                          children:
                                            s.quantity <= s.minQuantity
                                              ? e.jsxs(U, {
                                                  variant: "destructive",
                                                  className:
                                                    "gap-1 text-[10px] h-5",
                                                  children: [
                                                    e.jsx(Ce, {
                                                      className: "h-2.5 w-2.5",
                                                    }),
                                                    "Baixo",
                                                  ],
                                                })
                                              : e.jsx(U, {
                                                  variant: "default",
                                                  className: "text-[10px] h-5",
                                                  children: "Normal",
                                                }),
                                        }),
                                        e.jsx(Z, {
                                          className: "text-right text-xs",
                                          children: b(
                                            parseFloat(s.purchasePrice || "0")
                                          ),
                                        }),
                                        e.jsx(Z, {
                                          children: e.jsxs("div", {
                                            className:
                                              "flex items-center justify-center gap-0.5",
                                            children: [
                                              e.jsx(f, {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "h-7 w-7",
                                                onClick: () => {
                                                  X(s), S(!0);
                                                },
                                                children: e.jsx(ls, {
                                                  className: "h-3 w-3",
                                                }),
                                              }),
                                              e.jsx(f, {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "h-7 w-7",
                                                onClick: () => {
                                                  if (
                                                    s.category === "Produto"
                                                  ) {
                                                    const a = _.find(
                                                      (l) => l.name === s.name
                                                    );
                                                    a && (z(a), h(!0));
                                                  } else x(s), V(!0);
                                                },
                                                children: e.jsx(os, {
                                                  className: "h-3 w-3",
                                                }),
                                              }),
                                              s.category === "Produto" &&
                                                e.jsx(f, {
                                                  variant: "ghost",
                                                  size: "icon",
                                                  className: "h-7 w-7",
                                                  onClick: () => We(s),
                                                  title: _.find(
                                                    (a) => a.name === s.name
                                                  )?.hidden_from_catalog
                                                    ? "Mostrar no catálogo"
                                                    : "Ocultar do catálogo",
                                                  children: _.find(
                                                    (a) => a.name === s.name
                                                  )?.hidden_from_catalog
                                                    ? e.jsx(Re, {
                                                        className:
                                                          "h-3 w-3 text-destructive",
                                                      })
                                                    : e.jsx(Le, {
                                                        className: "h-3 w-3",
                                                      }),
                                                }),
                                              e.jsx(f, {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "h-7 w-7",
                                                onClick: () => Ge(s.id),
                                                children: e.jsx(cs, {
                                                  className: "h-3 w-3",
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
            ],
          }),
        ],
      }),
      e.jsx(gt, { open: P, onOpenChange: V, onSave: Cs, part: o }),
      e.jsx(ft, { open: n, onOpenChange: S, onConfirm: Ss, partName: O?.name }),
      e.jsx(jt, { open: de, onOpenChange: me }),
      e.jsx(pt, { open: Ds, onOpenChange: es, onConfirm: Es }),
      e.jsx(lt, {
        open: w,
        onOpenChange: (s) => {
          h(s), s || z(null);
        },
        onSave: qs,
        product: ee,
      }),
      e.jsx(dt, {
        open: A,
        onOpenChange: (s) => {
          v(s), s || se(null);
        },
        product: E,
      }),
      e.jsx(mt, { open: L, onOpenChange: ue }),
      e.jsx(ut, { open: _e, onOpenChange: W }),
      e.jsx(Nt, { open: vs, onOpenChange: Ue }),
      e.jsx(wt, {
        open: bs,
        onOpenChange: Ke,
        userId: R,
        onImported: () => {
          ws((s) => s + 1), I("products");
        },
      }),
    ],
  });
};
export { Lt as default };
