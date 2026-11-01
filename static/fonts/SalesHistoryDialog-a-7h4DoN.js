import {
  i as ve,
  cD as be,
  r as o,
  w as v,
  j as e,
  D as le,
  c as ce,
  a_ as de,
  d as me,
  bW as Z,
  a8 as oe,
  n as pe,
  I as _,
  B as y,
  s as ee,
  b2 as Me,
  X as je,
  l as Oe,
  dy as Ae,
  dz as Be,
  b3 as Ie,
  b1 as Ne,
  cz as ze,
  bm as fe,
  cf as ke,
  cY as Te,
  dA as Le,
  dB as R,
  dC as ge,
  dD as ye,
  cm as Re,
  cR as qe,
  cU as N,
  c5 as Ue,
  cS as S,
  cT as D,
  cV as M,
  cW as V,
  b5 as te,
  b6 as re,
  b7 as ne,
  b8 as ie,
  b9 as G,
  k as $e,
  cJ as He,
  c7 as Ge,
  cn as Ye,
  di as ae,
  dE as Qe,
  dF as We,
  ae as Ve,
  a2 as Xe,
  a4 as Je,
  bU as Ke,
  z as Ze,
  bl as ea,
  d7 as Ce,
  d8 as we,
  b4 as Pe,
  bj as ue,
  bk as Se,
  da as De,
  bI as aa,
} from "./index-V8ZHCWL2.js";
import { L as _e } from "./layers-D35uilGq.js";
import { C as Fe } from "./calendar-D5yT29JG.js";
import { c as sa } from "./financeReportPDFGenerator-qoM5ezYg.js";
import { C as ta } from "./CurrencyExportDialog-HmiEHQbG.js";
function ra({ open: u, onOpenChange: F, product: x, onVariationsUpdated: t }) {
  const { toast: c } = ve(),
    { format: p } = be(),
    [C, g] = o.useState([]),
    [E, b] = o.useState(!0),
    [O, j] = o.useState(!1),
    [A, I] = o.useState(null),
    [B, q] = o.useState(""),
    [U, $] = o.useState(null),
    [d, k] = o.useState({ name: "", price: "" }),
    [z, H] = o.useState({ name: "", price: "" }),
    [T, l] = o.useState({ name: "", price: "" });
  o.useEffect(() => {
    u && x && (L(), q(""), $(null));
  }, [u, x]);
  const L = async () => {
      b(!0);
      try {
        const { data: r, error: n } = await v
          .from("catalog_product_variations")
          .select("*")
          .eq("product_id", x.id)
          .order("price", { ascending: !0 });
        if (n) throw n;
        const f = (r || []).map((s) => s.id);
        let a = {};
        if (f.length > 0) {
          const { data: s } = await v
            .from("catalog_variation_options")
            .select("*")
            .in("variation_id", f)
            .order("price", { ascending: !0 });
          (s || []).forEach((m) => {
            a[m.variation_id] || (a[m.variation_id] = []),
              a[m.variation_id].push(m);
          });
        }
        g((r || []).map((s) => ({ ...s, options: a[s.id] || [] })));
      } catch {
        c({ title: "Erro ao carregar variações", variant: "destructive" });
      } finally {
        b(!1);
      }
    },
    Q = async () => {
      if (!d.name.trim() || !d.price) {
        c({ title: "Preencha nome e preço", variant: "destructive" });
        return;
      }
      j(!0);
      try {
        const { error: r } = await v
          .from("catalog_product_variations")
          .insert({
            product_id: x.id,
            name: d.name.trim(),
            price: parseFloat(d.price),
            is_active: !0,
          });
        if (r) throw r;
        c({ title: "Variação adicionada!" }),
          k({ name: "", price: "" }),
          L(),
          t?.();
      } catch (r) {
        c({
          title: "Erro ao adicionar",
          description: r.message,
          variant: "destructive",
        });
      } finally {
        j(!1);
      }
    },
    i = async (r) => {
      if (!z.name.trim() || !z.price) {
        c({ title: "Preencha nome e preço", variant: "destructive" });
        return;
      }
      j(!0);
      try {
        const { error: n } = await v
          .from("catalog_product_variations")
          .update({ name: z.name.trim(), price: parseFloat(z.price) })
          .eq("id", r);
        if (n) throw n;
        c({ title: "Variação atualizada!" }), I(null), L(), t?.();
      } catch (n) {
        c({
          title: "Erro ao atualizar",
          description: n.message,
          variant: "destructive",
        });
      } finally {
        j(!1);
      }
    },
    h = async (r, n) => {
      try {
        const { error: f } = await v
          .from("catalog_product_variations")
          .update({ is_active: n })
          .eq("id", r);
        if (f) throw f;
        c({ title: n ? "Variação ativada!" : "Variação desativada!" }), L();
      } catch (f) {
        c({
          title: "Erro ao atualizar",
          description: f.message,
          variant: "destructive",
        });
      }
    },
    w = async (r) => {
      if (confirm("Excluir esta variação e todas suas sub-variações?"))
        try {
          const { error: n } = await v
            .from("catalog_product_variations")
            .delete()
            .eq("id", r);
          if (n) throw n;
          c({ title: "Variação excluída!" }), L(), t?.();
        } catch (n) {
          c({
            title: "Erro ao excluir",
            description: n.message,
            variant: "destructive",
          });
        }
    },
    W = async (r) => {
      if (!T.name.trim() || !T.price) {
        c({
          title: "Preencha nome e preço da sub-variação",
          variant: "destructive",
        });
        return;
      }
      j(!0);
      try {
        const { error: n } = await v
          .from("catalog_variation_options")
          .insert({
            variation_id: r,
            name: T.name.trim(),
            price: parseFloat(T.price),
            is_active: !0,
          });
        if (n) throw n;
        c({ title: "Sub-variação adicionada!" }),
          l({ name: "", price: "" }),
          L(),
          t?.();
      } catch (n) {
        c({
          title: "Erro ao adicionar",
          description: n.message,
          variant: "destructive",
        });
      } finally {
        j(!1);
      }
    },
    X = async (r) => {
      if (confirm("Excluir esta sub-variação?"))
        try {
          const { error: n } = await v
            .from("catalog_variation_options")
            .delete()
            .eq("id", r);
          if (n) throw n;
          c({ title: "Sub-variação excluída!" }), L(), t?.();
        } catch (n) {
          c({
            title: "Erro ao excluir",
            description: n.message,
            variant: "destructive",
          });
        }
    },
    J = async (r, n) => {
      try {
        const { error: f } = await v
          .from("catalog_variation_options")
          .update({ is_active: n })
          .eq("id", r);
        if (f) throw f;
        L();
      } catch (f) {
        c({
          title: "Erro ao atualizar",
          description: f.message,
          variant: "destructive",
        });
      }
    },
    K = C.filter((r) => r.name.toLowerCase().includes(B.toLowerCase()));
  return e.jsx(le, {
    open: u,
    onOpenChange: F,
    children: e.jsxs(ce, {
      className: "max-w-lg max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx(de, {
          children: e.jsxs(me, {
            className: "flex items-center gap-2",
            children: [
              e.jsx(Z, { className: "w-5 h-5 text-purple-600" }),
              "Variações - ",
              x.name,
            ],
          }),
        }),
        e.jsxs("div", {
          className: "space-y-5",
          children: [
            e.jsxs("div", {
              className: "p-3 rounded-xl bg-muted/50 border",
              children: [
                e.jsx("p", {
                  className: "text-xs text-muted-foreground mb-1",
                  children: "Preço Base do Produto",
                }),
                e.jsx("p", {
                  className: "text-lg font-bold text-emerald-600",
                  children: p(x.sale_price),
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "p-4 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent border border-purple-500/20 space-y-3",
              children: [
                e.jsxs("h4", {
                  className: "font-semibold text-sm flex items-center gap-2",
                  children: [
                    e.jsx(oe, { className: "w-4 h-4 text-purple-600" }),
                    "Nova Variação",
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        e.jsx(pe, { className: "text-xs", children: "Nome *" }),
                        e.jsx(_, {
                          value: d.name,
                          onChange: (r) =>
                            k((n) => ({ ...n, name: r.target.value })),
                          placeholder: "Ex: Cor, Tamanho, Voltagem",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        e.jsx(pe, {
                          className: "text-xs",
                          children: "Preço *",
                        }),
                        e.jsx(_, {
                          type: "number",
                          step: "0.01",
                          min: "0",
                          value: d.price,
                          onChange: (r) =>
                            k((n) => ({ ...n, price: r.target.value })),
                          placeholder: "0.00",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(y, {
                  onClick: Q,
                  disabled: O,
                  className: "w-full gap-2 bg-purple-600 hover:bg-purple-700",
                  children: [
                    O
                      ? e.jsx(ee, { className: "w-4 h-4 animate-spin" })
                      : e.jsx(oe, { className: "w-4 h-4" }),
                    "Adicionar Variação",
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsx("div", {
                  className: "flex items-center justify-between",
                  children: e.jsxs("h4", {
                    className: "font-semibold text-sm",
                    children: ["Variações (", C.length, ")"],
                  }),
                }),
                C.length > 3 &&
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx(Me, {
                        className:
                          "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
                      }),
                      e.jsx(_, {
                        value: B,
                        onChange: (r) => q(r.target.value),
                        placeholder: "Pesquisar variações...",
                        className: "pl-9 h-9",
                      }),
                    ],
                  }),
                E
                  ? e.jsx("div", {
                      className: "flex items-center justify-center py-8",
                      children: e.jsx(ee, {
                        className: "w-6 h-6 animate-spin text-muted-foreground",
                      }),
                    })
                  : K.length === 0
                  ? e.jsxs("div", {
                      className: "text-center py-6 text-muted-foreground",
                      children: [
                        e.jsx(Z, {
                          className: "w-10 h-10 mx-auto mb-2 opacity-30",
                        }),
                        e.jsx("p", {
                          className: "text-sm",
                          children: B
                            ? "Nenhuma variação encontrada"
                            : "Nenhuma variação cadastrada",
                        }),
                      ],
                    })
                  : K.map((r) => {
                      const n = U === r.id,
                        f = r.options?.length || 0;
                      return e.jsxs(
                        "div",
                        {
                          className: "space-y-0",
                          children: [
                            e.jsx("div", {
                              className: `p-3 rounded-xl border transition-all ${
                                r.is_active
                                  ? "bg-card border-border"
                                  : "bg-muted/20 border-muted opacity-60"
                              } ${n ? "rounded-b-none" : ""}`,
                              children:
                                A === r.id
                                  ? e.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        e.jsxs("div", {
                                          className: "grid grid-cols-2 gap-2",
                                          children: [
                                            e.jsx(_, {
                                              value: z.name,
                                              onChange: (a) =>
                                                H((s) => ({
                                                  ...s,
                                                  name: a.target.value,
                                                })),
                                              placeholder: "Nome",
                                              className: "h-9",
                                            }),
                                            e.jsx(_, {
                                              type: "number",
                                              step: "0.01",
                                              min: "0",
                                              value: z.price,
                                              onChange: (a) =>
                                                H((s) => ({
                                                  ...s,
                                                  price: a.target.value,
                                                })),
                                              placeholder: "Preço",
                                              className: "h-9",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className: "flex justify-end gap-2",
                                          children: [
                                            e.jsx(y, {
                                              variant: "ghost",
                                              size: "sm",
                                              onClick: () => I(null),
                                              children: e.jsx(je, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                            e.jsx(y, {
                                              size: "sm",
                                              onClick: () => i(r.id),
                                              disabled: O,
                                              className:
                                                "bg-emerald-600 hover:bg-emerald-700",
                                              children: e.jsx(Oe, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    })
                                  : e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-3 flex-1 min-w-0 cursor-pointer",
                                          onClick: () => $(n ? null : r.id),
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0",
                                              children: n
                                                ? e.jsx(Ae, {
                                                    className:
                                                      "w-4 h-4 text-purple-600",
                                                  })
                                                : e.jsx(Be, {
                                                    className:
                                                      "w-4 h-4 text-purple-600",
                                                  }),
                                            }),
                                            e.jsxs("div", {
                                              className: "min-w-0",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "font-medium text-sm truncate",
                                                      children: r.name,
                                                    }),
                                                    f > 0 &&
                                                      e.jsxs(Ie, {
                                                        variant: "outline",
                                                        className:
                                                          "text-[10px] shrink-0",
                                                        children: [
                                                          e.jsx(_e, {
                                                            className:
                                                              "w-3 h-3 mr-1",
                                                          }),
                                                          f,
                                                          " sub",
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                                e.jsx("p", {
                                                  className:
                                                    "text-base font-bold text-emerald-600",
                                                  children: p(r.price),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            e.jsx(Ne, {
                                              checked: r.is_active,
                                              onCheckedChange: (a) =>
                                                h(r.id, a),
                                            }),
                                            e.jsx(y, {
                                              variant: "ghost",
                                              size: "icon",
                                              className: "h-8 w-8",
                                              onClick: () => {
                                                I(r.id),
                                                  H({
                                                    name: r.name,
                                                    price: r.price.toString(),
                                                  });
                                              },
                                              children: e.jsx(ze, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                            e.jsx(y, {
                                              variant: "ghost",
                                              size: "icon",
                                              className:
                                                "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10",
                                              onClick: () => w(r.id),
                                              children: e.jsx(fe, {
                                                className: "w-4 h-4",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                            }),
                            n &&
                              e.jsxs("div", {
                                className:
                                  "border border-t-0 rounded-b-xl p-3 bg-muted/30 space-y-3",
                                children: [
                                  e.jsxs("h5", {
                                    className:
                                      "text-xs font-semibold text-muted-foreground flex items-center gap-1.5",
                                    children: [
                                      e.jsx(_e, { className: "w-3.5 h-3.5" }),
                                      'Sub-variações de "',
                                      r.name,
                                      '"',
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "grid grid-cols-[1fr_auto_auto] gap-2 items-end",
                                    children: [
                                      e.jsx(_, {
                                        value: T.name,
                                        onChange: (a) =>
                                          l((s) => ({
                                            ...s,
                                            name: a.target.value,
                                          })),
                                        placeholder: "Ex: P, M, G, Preto",
                                        className: "h-8 text-sm",
                                      }),
                                      e.jsx(_, {
                                        type: "number",
                                        step: "0.01",
                                        min: "0",
                                        value: T.price,
                                        onChange: (a) =>
                                          l((s) => ({
                                            ...s,
                                            price: a.target.value,
                                          })),
                                        placeholder: "Preço",
                                        className: "h-8 text-sm w-24",
                                      }),
                                      e.jsx(y, {
                                        size: "sm",
                                        className:
                                          "h-8 bg-purple-600 hover:bg-purple-700",
                                        onClick: () => W(r.id),
                                        disabled: O,
                                        children: e.jsx(oe, {
                                          className: "w-3.5 h-3.5",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (r.options || []).length === 0
                                    ? e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground text-center py-2",
                                        children:
                                          "Nenhuma sub-variação cadastrada",
                                      })
                                    : e.jsx("div", {
                                        className: "space-y-1.5",
                                        children: (r.options || []).map((a) =>
                                          e.jsxs(
                                            "div",
                                            {
                                              className: `flex items-center justify-between p-2 rounded-lg border bg-background ${
                                                a.is_active ? "" : "opacity-50"
                                              }`,
                                              children: [
                                                e.jsxs("div", {
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "text-xs font-medium",
                                                      children: a.name,
                                                    }),
                                                    e.jsx("p", {
                                                      className:
                                                        "text-sm font-bold text-emerald-600",
                                                      children: p(a.price),
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-1",
                                                  children: [
                                                    e.jsx(Ne, {
                                                      checked: a.is_active,
                                                      onCheckedChange: (s) =>
                                                        J(a.id, s),
                                                      className: "scale-75",
                                                    }),
                                                    e.jsx(y, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className:
                                                        "h-7 w-7 text-destructive hover:bg-destructive/10",
                                                      onClick: () => X(a.id),
                                                      children: e.jsx(fe, {
                                                        className:
                                                          "w-3.5 h-3.5",
                                                      }),
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
                          ],
                        },
                        r.id
                      );
                    }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Ee = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
  "#06B6D4",
  "#84CC16",
  "#F97316",
  "#6B7280",
];
function na({ open: u, onOpenChange: F, onChanged: x }) {
  const { effectiveUserId: t } = ke(),
    { toast: c } = ve(),
    [p, C] = o.useState([]),
    [g, E] = o.useState(""),
    [b, O] = o.useState(Ee[0]),
    [j, A] = o.useState(!1),
    [I, B] = o.useState(!1),
    q = async () => {
      if (!t) return;
      A(!0);
      const { data: d, error: k } = await v
        .from("product_categories")
        .select("*")
        .eq("user_id", t)
        .order("name");
      if ((A(!1), k)) {
        c({
          title: "Erro ao carregar categorias",
          description: k.message,
          variant: "destructive",
        });
        return;
      }
      C(d || []);
    };
  o.useEffect(() => {
    u && q();
  }, [u, t]);
  const U = async () => {
      if (!g.trim() || !t) {
        c({ title: "Nome obrigatório", variant: "destructive" });
        return;
      }
      B(!0);
      const { error: d } = await v
        .from("product_categories")
        .insert({ user_id: t, name: g.trim(), color: b });
      if ((B(!1), d)) {
        c({
          title: "Erro ao criar categoria",
          description: d.message,
          variant: "destructive",
        });
        return;
      }
      E(""), c({ title: "Categoria criada!" }), await q(), x?.();
    },
    $ = async (d) => {
      const { error: k } = await v
        .from("product_categories")
        .delete()
        .eq("id", d);
      if (k) {
        c({
          title: "Erro ao remover",
          description: k.message,
          variant: "destructive",
        });
        return;
      }
      c({ title: "Categoria removida" }), await q(), x?.();
    };
  return e.jsx(le, {
    open: u,
    onOpenChange: F,
    children: e.jsxs(ce, {
      className: "w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto",
      children: [
        e.jsxs(de, {
          children: [
            e.jsxs(me, {
              className: "flex items-center gap-2",
              children: [
                e.jsx(Z, { className: "h-5 w-5" }),
                " Categorias de Produtos",
              ],
            }),
            e.jsx(Te, {
              children:
                "Crie categorias personalizadas para organizar seus produtos.",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className: "space-y-2 p-3 rounded-lg border bg-muted/30",
              children: [
                e.jsx(pe, { htmlFor: "cat-name", children: "Nova categoria" }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(_, {
                      id: "cat-name",
                      value: g,
                      onChange: (d) => E(d.target.value),
                      placeholder: "Ex: Capinhas, Películas, Carregadores...",
                      maxLength: 40,
                      onKeyDown: (d) => d.key === "Enter" && U(),
                    }),
                    e.jsx(y, {
                      onClick: U,
                      disabled: I,
                      children: I
                        ? e.jsx(ee, { className: "h-4 w-4 animate-spin" })
                        : e.jsx(oe, { className: "h-4 w-4" }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex flex-wrap gap-2 pt-1",
                  children: Ee.map((d) =>
                    e.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => O(d),
                        className: `h-6 w-6 rounded-full border-2 transition-all ${
                          b === d
                            ? "border-foreground scale-110"
                            : "border-transparent"
                        }`,
                        style: { backgroundColor: d },
                        "aria-label": `Cor ${d}`,
                      },
                      d
                    )
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsx(pe, { children: "Suas categorias" }),
                j
                  ? e.jsx("div", {
                      className: "text-center text-muted-foreground py-4",
                      children: "Carregando...",
                    })
                  : p.length === 0
                  ? e.jsx("div", {
                      className:
                        "text-center text-muted-foreground text-sm py-6",
                      children: "Nenhuma categoria criada ainda.",
                    })
                  : e.jsx("div", {
                      className: "space-y-2 max-h-72 overflow-y-auto",
                      children: p.map((d) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center justify-between p-2 rounded-lg border",
                            children: [
                              e.jsx(Ie, {
                                variant: "outline",
                                className: "font-medium",
                                style: {
                                  borderColor: d.color || "#888",
                                  color: d.color || void 0,
                                },
                                children: d.name,
                              }),
                              e.jsx(y, {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => $(d.id),
                                className:
                                  "h-8 w-8 text-destructive hover:text-destructive",
                                children: e.jsx(fe, { className: "h-4 w-4" }),
                              }),
                            ],
                          },
                          d.id
                        )
                      ),
                    }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const he = (u) => {
    const F = u.replace(/\D/g, "");
    return F
      ? (parseFloat(F) / 100).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "";
  },
  se = (u) => {
    const x = u.replace(/[^\d,]/g, "").replace(",", ".");
    return parseFloat(x) || 0;
  },
  ia = [
    { id: "pix", label: "PIX" },
    { id: "dinheiro", label: "Dinheiro" },
    { id: "credito", label: "Cartão de Crédito" },
    { id: "debito", label: "Cartão de Débito" },
    { id: "boleto", label: "Boleto" },
    { id: "transferencia", label: "Transferência" },
  ],
  oa = [
    { id: "celulares", label: "Celulares" },
    { id: "acessorios", label: "Acessórios" },
    { id: "pecas", label: "Peças" },
    { id: "servicos", label: "Serviços" },
    { id: "eletronicos", label: "Eletrônicos" },
    { id: "informatica", label: "Informática" },
    { id: "outros", label: "Outros" },
  ],
  la = [
    { id: "apple", label: "Apple" },
    { id: "samsung", label: "Samsung" },
    { id: "xiaomi", label: "Xiaomi" },
    { id: "realme", label: "Realme" },
    { id: "oppo", label: "OPPO" },
    { id: "lg", label: "LG" },
    { id: "motorola", label: "Motorola" },
    { id: "huawei", label: "Huawei" },
    { id: "asus", label: "ASUS" },
    { id: "nokia", label: "Nokia" },
    { id: "oneplus", label: "OnePlus" },
    { id: "google", label: "Google" },
    { id: "outros", label: "Outros" },
  ],
  ca = [
    { id: "preto", label: "Preto", color: "#000000" },
    { id: "branco", label: "Branco", color: "#FFFFFF" },
    { id: "azul", label: "Azul", color: "#3B82F6" },
    { id: "vermelho", label: "Vermelho", color: "#EF4444" },
    { id: "verde", label: "Verde", color: "#22C55E" },
    { id: "roxo", label: "Roxo", color: "#A855F7" },
    { id: "rosa", label: "Rosa", color: "#EC4899" },
    { id: "amarelo", label: "Amarelo", color: "#EAB308" },
    { id: "laranja", label: "Laranja", color: "#F97316" },
    { id: "cinza", label: "Cinza", color: "#6B7280" },
    { id: "dourado", label: "Dourado", color: "#D4AF37" },
    { id: "prata", label: "Prata", color: "#C0C0C0" },
  ],
  da = Le({
    name: R().min(1, "Nome é obrigatório"),
    description: R().optional(),
    costPrice: R().min(1, "Preço de custo é obrigatório"),
    salePrice: R().min(1, "Preço de venda é obrigatório"),
    priceCash: R().optional(),
    priceInstallment: R().optional(),
    installmentCount: ge().min(1).max(24).optional(),
    code: R().optional(),
    additionalInfo: R().optional(),
    quantity: ge().min(0, "Quantidade deve ser positiva").optional(),
    paymentMethods: ye(R()).min(1, "Selecione ao menos uma forma de pagamento"),
    maxInstallments: ge().min(1).max(24),
    category: R().optional(),
    brand: R().optional(),
    colors: ye(R()).optional(),
  });
function ga({ open: u, onOpenChange: F, onSave: x, product: t }) {
  const { symbol: c } = be(),
    [p, C] = o.useState(null),
    [g, E] = o.useState([]),
    [b, O] = o.useState(!1),
    [j, A] = o.useState(null),
    [I, B] = o.useState(!1),
    [q, U] = o.useState(!1),
    [$, d] = o.useState([]),
    { effectiveUserId: k } = ke(),
    z = o.useRef(null),
    H = o.useRef([null, null, null, null, null]),
    T = async () => {
      if (!k) return;
      const { data: a } = await v
        .from("product_categories")
        .select("id, name")
        .eq("user_id", k)
        .order("name");
      d((a || []).map((s) => ({ id: s.name, label: s.name })));
    };
  o.useEffect(() => {
    u && T();
  }, [u, k]);
  const l = Re({
      resolver: Ye(da),
      defaultValues: {
        name: "",
        description: "",
        costPrice: "",
        salePrice: "",
        code: "",
        additionalInfo: "",
        quantity: 0,
        paymentMethods: ["pix", "dinheiro"],
        maxInstallments: 1,
        category: "",
        brand: "",
        colors: [],
      },
    }),
    L = l.watch("paymentMethods"),
    Q = l.watch("category"),
    i = L.includes("credito"),
    h = Q === "celulares",
    [w, W] = o.useState(!1);
  o.useEffect(() => {
    if (u && t) {
      const a = typeof t.costPrice == "string" ? se(t.costPrice) : t.costPrice,
        s = typeof t.salePrice == "string" ? se(t.salePrice) : t.salePrice,
        m = t.priceCash
          ? typeof t.priceCash == "string"
            ? se(t.priceCash)
            : t.priceCash
          : 0,
        P = t.priceInstallment
          ? typeof t.priceInstallment == "string"
            ? se(t.priceInstallment)
            : t.priceInstallment
          : 0;
      l.reset({
        name: t.name,
        description: t.description || "",
        costPrice: a.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        salePrice: s.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        priceCash:
          m > 0
            ? m.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "",
        priceInstallment:
          P > 0
            ? P.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "",
        installmentCount: t.installmentCount || 1,
        code: t.code || "",
        additionalInfo: t.additionalInfo || "",
        quantity: t.quantity || 0,
        paymentMethods: t.payment_methods || ["pix", "dinheiro"],
        maxInstallments: t.max_installments || 1,
        category: t.category || "",
        brand: t.brand || "",
        colors: t.colors || [],
      }),
        C(t.image_url || null),
        E(t.images || []),
        W(!0);
    } else
      u &&
        !t &&
        (l.reset({
          name: "",
          description: "",
          costPrice: "",
          salePrice: "",
          priceCash: "",
          priceInstallment: "",
          installmentCount: 1,
          code: "",
          additionalInfo: "",
          quantity: 0,
          paymentMethods: ["pix", "dinheiro"],
          maxInstallments: 1,
          category: "",
          brand: "",
          colors: [],
        }),
        C(null),
        E([]),
        W(!1));
  }, [t, u, l]),
    o.useEffect(() => {
      if (w && Q !== "celulares") {
        const a = l.getValues("brand"),
          s = l.getValues("colors");
        (a || (s && s.length > 0)) &&
          (l.setValue("brand", ""), l.setValue("colors", []));
      }
    }, [Q, l, w]);
  const X = async (a) => {
      if (!a.type.startsWith("image/"))
        return (
          ae({
            title: "Erro",
            description: "Por favor, selecione apenas arquivos de imagem.",
            variant: "destructive",
          }),
          null
        );
      if (a.size > 10 * 1024 * 1024)
        return (
          ae({
            title: "Erro",
            description: "A imagem deve ter no máximo 10MB.",
            variant: "destructive",
          }),
          null
        );
      try {
        const {
          data: { user: s },
        } = await v.auth.getUser();
        if (!s) throw new Error("Usuário não autenticado");
        const m = await Qe(a),
          P = We(s.id, "product"),
          { error: Y } = await v.storage
            .from("product-images")
            .upload(P, m, { contentType: "image/jpeg" });
        if (Y) throw Y;
        const {
          data: { publicUrl: xe },
        } = v.storage.from("product-images").getPublicUrl(P);
        return xe;
      } catch (s) {
        return (
          ae({
            title: "Erro ao carregar imagem",
            description: s.message || "Tente novamente.",
            variant: "destructive",
          }),
          null
        );
      }
    },
    J = async (a) => {
      const s = a.target.files?.[0];
      if (!s) return;
      O(!0);
      const m = await X(s);
      m &&
        (C(m),
        ae({ title: "Sucesso", description: "Imagem principal carregada!" })),
        O(!1);
    },
    K = async (a, s) => {
      const m = a.target.files?.[0];
      if (!m) return;
      A(s);
      const P = await X(m);
      P &&
        (E((Y) => {
          const xe = [...Y];
          return (xe[s] = P), xe.filter(Boolean);
        }),
        ae({ title: "Sucesso", description: "Imagem adicional carregada!" })),
        A(null);
    },
    r = () => {
      C(null), z.current && (z.current.value = "");
    },
    n = (a) => {
      E((s) => s.filter((m, P) => P !== a));
    },
    f = (a) => {
      x({
        ...a,
        id: t?.id,
        image_url: p,
        images: g.filter(Boolean),
        payment_methods: a.paymentMethods,
        max_installments: a.maxInstallments,
        price_cash: a.priceCash,
        price_installment: a.priceInstallment,
        installment_count: a.installmentCount || 1,
        category: a.category || null,
        brand: (a.category === "celulares" && a.brand) || null,
        colors: a.category === "celulares" ? a.colors || [] : [],
      }),
        l.reset(),
        C(null),
        E([]);
    };
  return e.jsx(le, {
    open: u,
    onOpenChange: F,
    children: e.jsxs(ce, {
      className: "max-w-md max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx(de, {
          children: e.jsx(me, {
            children: t ? "Editar Produto" : "Novo Produto",
          }),
        }),
        e.jsx(qe, {
          ...l,
          children: e.jsxs("form", {
            onSubmit: l.handleSubmit(f),
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsx(N, { children: "Fotos do Produto (até 6)" }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-3",
                    children: [
                      e.jsxs("div", {
                        className: "relative",
                        children: [
                          p
                            ? e.jsxs("div", {
                                className: "relative",
                                children: [
                                  e.jsx("img", {
                                    src: p,
                                    alt: "Produto",
                                    className:
                                      "w-20 h-20 object-cover rounded-lg border border-border",
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    onClick: r,
                                    className:
                                      "absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90",
                                    children: e.jsx(je, {
                                      className: "w-3 h-3",
                                    }),
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] bg-primary text-primary-foreground px-1 rounded",
                                    children: "Principal",
                                  }),
                                ],
                              })
                            : e.jsx("div", {
                                onClick: () => z.current?.click(),
                                className:
                                  "w-20 h-20 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-accent/50 transition-colors",
                                children: b
                                  ? e.jsx(ee, {
                                      className:
                                        "w-5 h-5 animate-spin text-muted-foreground",
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(Ue, {
                                          className:
                                            "w-5 h-5 text-muted-foreground",
                                        }),
                                        e.jsx("span", {
                                          className:
                                            "text-[10px] text-muted-foreground mt-1",
                                          children: "Principal",
                                        }),
                                      ],
                                    }),
                              }),
                          e.jsx("input", {
                            ref: z,
                            type: "file",
                            accept: "image/*",
                            onChange: J,
                            className: "hidden",
                          }),
                        ],
                      }),
                      [0, 1, 2, 3, 4].map((a) =>
                        e.jsxs(
                          "div",
                          {
                            className: "relative",
                            children: [
                              g[a]
                                ? e.jsxs("div", {
                                    className: "relative",
                                    children: [
                                      e.jsx("img", {
                                        src: g[a],
                                        alt: `Foto ${a + 2}`,
                                        className:
                                          "w-20 h-20 object-cover rounded-lg border border-border",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        onClick: () => n(a),
                                        className:
                                          "absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 hover:bg-destructive/90",
                                        children: e.jsx(je, {
                                          className: "w-3 h-3",
                                        }),
                                      }),
                                    ],
                                  })
                                : e.jsx("div", {
                                    onClick: () => H.current[a]?.click(),
                                    className:
                                      "w-20 h-20 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-accent/50 transition-colors",
                                    children:
                                      j === a
                                        ? e.jsx(ee, {
                                            className:
                                              "w-5 h-5 animate-spin text-muted-foreground",
                                          })
                                        : e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx(oe, {
                                                className:
                                                  "w-5 h-5 text-muted-foreground",
                                              }),
                                              e.jsxs("span", {
                                                className:
                                                  "text-[10px] text-muted-foreground mt-1",
                                                children: ["Foto ", a + 2],
                                              }),
                                            ],
                                          }),
                                  }),
                              e.jsx("input", {
                                ref: (s) => (H.current[a] = s),
                                type: "file",
                                accept: "image/*",
                                onChange: (s) => K(s, a),
                                className: "hidden",
                              }),
                            ],
                          },
                          a
                        )
                      ),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children:
                      "Adicione até 6 fotos. A primeira será a foto principal do produto.",
                  }),
                ],
              }),
              e.jsx(S, {
                control: l.control,
                name: "name",
                render: ({ field: a }) =>
                  e.jsxs(D, {
                    children: [
                      e.jsx(N, { children: "Nome do Produto *" }),
                      e.jsx(M, {
                        children: e.jsx(_, {
                          ...a,
                          placeholder: "Ex: iPhone 14 Pro Max 256GB",
                        }),
                      }),
                      e.jsx(V, {}),
                    ],
                  }),
              }),
              e.jsx(S, {
                control: l.control,
                name: "description",
                render: ({ field: a }) =>
                  e.jsxs(D, {
                    children: [
                      e.jsx(N, { children: "Descrição" }),
                      e.jsx(M, {
                        children: e.jsx("textarea", {
                          ...a,
                          placeholder:
                            "Descrição detalhada do produto. Use Enter para quebras de linha.",
                          rows: 4,
                          className:
                            "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y min-h-[80px]",
                        }),
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Pressione Enter para criar novas linhas.",
                      }),
                      e.jsx(V, {}),
                    ],
                  }),
              }),
              e.jsx(S, {
                control: l.control,
                name: "category",
                render: ({ field: a }) =>
                  e.jsxs(D, {
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsx(N, { children: "Categoria" }),
                          e.jsxs(y, {
                            type: "button",
                            variant: "ghost",
                            size: "sm",
                            className: "h-7 px-2 text-xs",
                            onClick: () => U(!0),
                            children: [
                              e.jsx(Z, { className: "h-3 w-3 mr-1" }),
                              "Gerenciar",
                            ],
                          }),
                        ],
                      }),
                      e.jsxs(te, {
                        value: a.value || "",
                        onValueChange: a.onChange,
                        children: [
                          e.jsx(M, {
                            children: e.jsx(re, {
                              children: e.jsx(ne, {
                                placeholder: "Selecione uma categoria",
                              }),
                            }),
                          }),
                          e.jsxs(ie, {
                            children: [
                              oa.map((s) =>
                                e.jsx(
                                  G,
                                  { value: s.id, children: s.label },
                                  s.id
                                )
                              ),
                              $.length > 0 &&
                                e.jsx("div", {
                                  className:
                                    "px-2 py-1 text-xs text-muted-foreground border-t mt-1 pt-2",
                                  children: "Personalizadas",
                                }),
                              $.map((s) =>
                                e.jsx(
                                  G,
                                  { value: s.id, children: s.label },
                                  `custom-${s.id}`
                                )
                              ),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(V, {}),
                    ],
                  }),
              }),
              h &&
                e.jsx(S, {
                  control: l.control,
                  name: "brand",
                  render: ({ field: a }) =>
                    e.jsxs(D, {
                      children: [
                        e.jsx(N, { children: "Marca" }),
                        e.jsxs(te, {
                          value: a.value || "",
                          onValueChange: a.onChange,
                          children: [
                            e.jsx(M, {
                              children: e.jsx(re, {
                                children: e.jsx(ne, {
                                  placeholder: "Selecione a marca",
                                }),
                              }),
                            }),
                            e.jsx(ie, {
                              children: la.map((s) =>
                                e.jsx(
                                  G,
                                  { value: s.id, children: s.label },
                                  s.id
                                )
                              ),
                            }),
                          ],
                        }),
                        e.jsx(V, {}),
                      ],
                    }),
                }),
              h &&
                e.jsx(S, {
                  control: l.control,
                  name: "colors",
                  render: ({ field: a }) =>
                    e.jsxs(D, {
                      children: [
                        e.jsx(N, { children: "Cores Disponíveis" }),
                        e.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children: ca.map((s) => {
                            const m = a.value?.includes(s.id);
                            return e.jsxs(
                              "button",
                              {
                                type: "button",
                                onClick: () => {
                                  const P = a.value || [];
                                  m
                                    ? a.onChange(P.filter((Y) => Y !== s.id))
                                    : a.onChange([...P, s.id]);
                                },
                                className: `flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                                  m
                                    ? "border-primary bg-primary/10 ring-2 ring-primary"
                                    : "border-border hover:border-primary/50"
                                }`,
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "w-4 h-4 rounded-full border border-border",
                                    style: { backgroundColor: s.color },
                                  }),
                                  e.jsx("span", {
                                    className: "text-sm",
                                    children: s.label,
                                  }),
                                ],
                              },
                              s.id
                            );
                          }),
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            "Selecione as cores disponíveis para este produto.",
                        }),
                        e.jsx(V, {}),
                      ],
                    }),
                }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  e.jsx(S, {
                    control: l.control,
                    name: "costPrice",
                    render: ({ field: a }) =>
                      e.jsxs(D, {
                        children: [
                          e.jsxs(N, {
                            children: ["Preço de Custo (", c, ") *"],
                          }),
                          e.jsx(M, {
                            children: e.jsx(_, {
                              ...a,
                              placeholder: "0,00",
                              onChange: (s) => {
                                const m = he(s.target.value);
                                a.onChange(m);
                              },
                            }),
                          }),
                          e.jsx(V, {}),
                        ],
                      }),
                  }),
                  e.jsx(S, {
                    control: l.control,
                    name: "salePrice",
                    render: ({ field: a }) =>
                      e.jsxs(D, {
                        children: [
                          e.jsxs(N, {
                            children: ["Preço de Venda (", c, ") *"],
                          }),
                          e.jsx(M, {
                            children: e.jsx(_, {
                              ...a,
                              placeholder: "0,00",
                              onChange: (s) => {
                                const m = he(s.target.value);
                                a.onChange(m);
                              },
                            }),
                          }),
                          e.jsx(V, {}),
                        ],
                      }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "space-y-3 p-3 rounded-lg bg-muted/30 border border-border",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(Z, { className: "w-4 h-4 text-primary" }),
                      e.jsx(N, {
                        className: "text-sm font-medium",
                        children: "Preços para o Catálogo",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children:
                      "Defina preços diferenciados para exibir no catálogo. Se não preencher, será usado o preço de venda.",
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      e.jsx(S, {
                        control: l.control,
                        name: "priceCash",
                        render: ({ field: a }) =>
                          e.jsxs(D, {
                            children: [
                              e.jsxs(N, {
                                className: "text-xs",
                                children: ["Preço à Vista (", c, ")"],
                              }),
                              e.jsx(M, {
                                children: e.jsx(_, {
                                  ...a,
                                  placeholder: "0,00",
                                  onChange: (s) => {
                                    const m = he(s.target.value);
                                    a.onChange(m);
                                  },
                                }),
                              }),
                              e.jsx(V, {}),
                            ],
                          }),
                      }),
                      e.jsx(S, {
                        control: l.control,
                        name: "priceInstallment",
                        render: ({ field: a }) =>
                          e.jsxs(D, {
                            children: [
                              e.jsxs(N, {
                                className: "text-xs",
                                children: ["Preço Parcelado (", c, ")"],
                              }),
                              e.jsx(M, {
                                children: e.jsx(_, {
                                  ...a,
                                  placeholder: "0,00",
                                  onChange: (s) => {
                                    const m = he(s.target.value);
                                    a.onChange(m);
                                  },
                                }),
                              }),
                              e.jsx(V, {}),
                            ],
                          }),
                      }),
                    ],
                  }),
                  l.watch("priceInstallment") &&
                    e.jsx(S, {
                      control: l.control,
                      name: "installmentCount",
                      render: ({ field: a }) =>
                        e.jsxs(D, {
                          children: [
                            e.jsx(N, {
                              className: "text-xs",
                              children: "Quantidade de Parcelas",
                            }),
                            e.jsxs(te, {
                              value: String(a.value || 1),
                              onValueChange: (s) => a.onChange(parseInt(s)),
                              children: [
                                e.jsx(M, {
                                  children: e.jsx(re, {
                                    children: e.jsx(ne, {}),
                                  }),
                                }),
                                e.jsx(ie, {
                                  children: [
                                    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                  ].map((s) =>
                                    e.jsxs(
                                      G,
                                      {
                                        value: String(s),
                                        children: [s, "x sem juros"],
                                      },
                                      s
                                    )
                                  ),
                                }),
                              ],
                            }),
                            e.jsx(V, {}),
                          ],
                        }),
                    }),
                ],
              }),
              e.jsx(S, {
                control: l.control,
                name: "code",
                render: ({ field: a }) =>
                  e.jsxs(D, {
                    children: [
                      e.jsx(N, { children: "Código" }),
                      e.jsx(M, {
                        children: e.jsx(_, {
                          ...a,
                          placeholder: "Código do produto",
                        }),
                      }),
                      e.jsx(V, {}),
                    ],
                  }),
              }),
              e.jsx(S, {
                control: l.control,
                name: "additionalInfo",
                render: ({ field: a }) =>
                  e.jsxs(D, {
                    children: [
                      e.jsx(N, { children: "Informações Adicionais" }),
                      e.jsx(M, {
                        children: e.jsx(_, {
                          ...a,
                          placeholder: "Outras informações relevantes",
                        }),
                      }),
                      e.jsx(V, {}),
                    ],
                  }),
              }),
              e.jsx(S, {
                control: l.control,
                name: "quantity",
                render: ({ field: a }) =>
                  e.jsxs(D, {
                    children: [
                      e.jsx(N, { children: "Quantidade em Estoque" }),
                      e.jsx(M, {
                        children: e.jsx(_, {
                          ...a,
                          type: "number",
                          min: "0",
                          placeholder: "0",
                          onChange: (s) =>
                            a.onChange(parseInt(s.target.value) || 0),
                        }),
                      }),
                      e.jsx(V, {}),
                    ],
                  }),
              }),
              e.jsxs("div", {
                className:
                  "space-y-3 p-3 rounded-lg bg-muted/30 border border-border",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx($e, { className: "w-4 h-4 text-primary" }),
                      e.jsx(N, {
                        className: "text-sm font-medium",
                        children: "Formas de Pagamento Aceitas",
                      }),
                    ],
                  }),
                  e.jsx(S, {
                    control: l.control,
                    name: "paymentMethods",
                    render: () =>
                      e.jsxs(D, {
                        children: [
                          e.jsx("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: ia.map((a) =>
                              e.jsx(
                                S,
                                {
                                  control: l.control,
                                  name: "paymentMethods",
                                  render: ({ field: s }) =>
                                    e.jsxs(D, {
                                      className:
                                        "flex items-center space-x-2 space-y-0",
                                      children: [
                                        e.jsx(M, {
                                          children: e.jsx(He, {
                                            checked: s.value?.includes(a.id),
                                            onCheckedChange: (m) => {
                                              const P = s.value || [];
                                              m
                                                ? s.onChange([...P, a.id])
                                                : s.onChange(
                                                    P.filter((Y) => Y !== a.id)
                                                  );
                                            },
                                          }),
                                        }),
                                        e.jsx(N, {
                                          className:
                                            "text-xs font-normal cursor-pointer",
                                          children: a.label,
                                        }),
                                      ],
                                    }),
                                },
                                a.id
                              )
                            ),
                          }),
                          e.jsx(V, {}),
                        ],
                      }),
                  }),
                ],
              }),
              i &&
                e.jsx(S, {
                  control: l.control,
                  name: "maxInstallments",
                  render: ({ field: a }) =>
                    e.jsxs(D, {
                      children: [
                        e.jsx(N, {
                          children: "Máximo de Parcelas (Cartão de Crédito)",
                        }),
                        e.jsxs(te, {
                          value: String(a.value),
                          onValueChange: (s) => a.onChange(parseInt(s)),
                          children: [
                            e.jsx(M, {
                              children: e.jsx(re, { children: e.jsx(ne, {}) }),
                            }),
                            e.jsx(ie, {
                              children: [
                                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                              ].map((s) =>
                                e.jsxs(
                                  G,
                                  {
                                    value: String(s),
                                    children: [
                                      s,
                                      "x ",
                                      s === 1 ? "à vista" : "sem juros",
                                    ],
                                  },
                                  s
                                )
                              ),
                            }),
                          ],
                        }),
                        e.jsx(V, {}),
                      ],
                    }),
                }),
              e.jsxs(Ge, {
                className: "flex-col sm:flex-row gap-2",
                children: [
                  t?.id &&
                    e.jsxs(y, {
                      type: "button",
                      variant: "outline",
                      className:
                        "gap-2 border-purple-500/30 text-purple-600 hover:bg-purple-500/10",
                      onClick: () => B(!0),
                      children: [
                        e.jsx(Z, { className: "w-4 h-4" }),
                        "Variações",
                      ],
                    }),
                  e.jsxs("div", {
                    className: "flex gap-2 ml-auto",
                    children: [
                      e.jsx(y, {
                        type: "button",
                        variant: "outline",
                        onClick: () => F(!1),
                        children: "Cancelar",
                      }),
                      e.jsx(y, {
                        type: "submit",
                        children: t ? "Salvar" : "Cadastrar",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        t?.id &&
          e.jsx(ra, {
            open: I,
            onOpenChange: B,
            product: {
              id: t.id,
              name: t.name,
              sale_price:
                typeof t.salePrice == "string"
                  ? se(t.salePrice)
                  : Number(t.salePrice),
            },
          }),
        e.jsx(na, { open: q, onOpenChange: U, onChanged: T }),
      ],
    }),
  });
}
function ja({ open: u, onOpenChange: F, product: x }) {
  const [t, c] = o.useState(!1),
    [p, C] = o.useState(""),
    [g, E] = o.useState(""),
    b = async () => {
      if (x) {
        c(!0);
        try {
          const { data: j, error: A } = await v.functions.invoke(
            "analyze-product",
            { body: { product: x } }
          );
          if (A) throw A;
          C(j.analysis), E(j.margin);
        } catch {
          Ke.error("Erro ao analisar produto");
        } finally {
          c(!1);
        }
      }
    },
    O = (j) => {
      j && x && !p ? b() : j || (C(""), E("")), F(j);
    };
  return e.jsx(le, {
    open: u,
    onOpenChange: O,
    children: e.jsxs(ce, {
      className: "max-w-2xl",
      children: [
        e.jsx(de, {
          children: e.jsxs(me, {
            className: "flex items-center gap-2",
            children: [
              e.jsx(Ve, { className: "h-5 w-5 text-primary" }),
              "Análise Inteligente do Produto",
            ],
          }),
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className: "bg-muted/50 p-4 rounded-lg",
              children: [
                e.jsx("h3", {
                  className: "font-semibold text-lg mb-2",
                  children: x?.name,
                }),
                x?.description &&
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground mb-2",
                    children: x.description,
                  }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 gap-4 text-sm",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Preço de Custo:",
                        }),
                        e.jsxs("p", {
                          className: "font-semibold",
                          children: ["R$ ", x?.costPrice],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Preço de Venda:",
                        }),
                        e.jsxs("p", {
                          className: "font-semibold",
                          children: ["R$ ", x?.salePrice],
                        }),
                      ],
                    }),
                    g &&
                      e.jsxs("div", {
                        className: "col-span-2",
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Margem de Lucro:",
                          }),
                          e.jsxs("p", {
                            className: "font-semibold text-green-600",
                            children: [g, "%"],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            t
              ? e.jsxs("div", {
                  className: "flex items-center justify-center py-8",
                  children: [
                    e.jsx(ee, {
                      className: "h-8 w-8 animate-spin text-primary",
                    }),
                    e.jsx("span", {
                      className: "ml-2 text-muted-foreground",
                      children: "Analisando produto...",
                    }),
                  ],
                })
              : p
              ? e.jsx(Xe, {
                  children: e.jsx(Je, {
                    className: "whitespace-pre-wrap leading-relaxed",
                    children: p,
                  }),
                })
              : null,
            e.jsxs("div", {
              className: "flex justify-end gap-2",
              children: [
                p &&
                  e.jsx(y, {
                    variant: "outline",
                    onClick: b,
                    disabled: t,
                    children: "Analisar Novamente",
                  }),
                e.jsx(y, { onClick: () => F(!1), children: "Fechar" }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function fa({ open: u, onOpenChange: F }) {
  const { format: x } = be(),
    [t, c] = o.useState([]),
    [p, C] = o.useState("month"),
    [g, E] = o.useState(),
    [b, O] = o.useState(),
    [j, A] = o.useState(!1),
    { user: I } = Ze(),
    { toast: B } = ve(),
    [q, U] = o.useState(!1),
    [$, d] = o.useState(null);
  o.useEffect(() => {
    u && I && z();
  }, [u, p, g, b, I]);
  const k = () => {
      const i = new Date();
      let h,
        w = i;
      switch (p) {
        case "today":
          h = new Date(i.getFullYear(), i.getMonth(), i.getDate());
          break;
        case "week":
          h = new Date(i.getFullYear(), i.getMonth(), i.getDate() - 7);
          break;
        case "month":
          h = new Date(i.getFullYear(), i.getMonth(), 1);
          break;
        case "custom":
          if (!g || !b) return null;
          (h = g), (w = b);
          break;
        default:
          h = new Date(i.getFullYear(), i.getMonth(), 1);
      }
      return {
        start: h.toISOString().split("T")[0],
        end: w.toISOString().split("T")[0],
      };
    },
    z = async () => {
      if (!I) return;
      const i = k();
      if (i) {
        A(!0);
        try {
          const { data: h, error: w } = await v
            .from("transactions")
            .select("*")
            .eq("user_id", I.id)
            .eq("type", "income")
            .eq("category", "Venda de Produtos")
            .not("product_id", "is", null)
            .gte("date", i.start)
            .lte("date", i.end)
            .order("date", { ascending: !1 });
          if (w) throw w;
          const W = [...new Set(h?.map((n) => n.product_id).filter(Boolean))],
            { data: X, error: J } = await v
              .from("products")
              .select("*")
              .in("id", W);
          if (J) throw J;
          const K = new Map(X?.map((n) => [n.id, n]) || []),
            r = (h || []).map((n) => {
              const f = K.get(n.product_id),
                a = f?.cost_price || 0,
                s = n.amount,
                m = s - a;
              return {
                id: n.id,
                date: n.date,
                product_id: n.product_id,
                product_name: f?.name || "Produto Desconhecido",
                amount: s,
                cost: a,
                profit: m,
              };
            });
          c(r);
        } catch {
        } finally {
          A(!1);
        }
      }
    },
    H = t.reduce((i, h) => i + h.amount, 0),
    T = t.reduce((i, h) => i + h.cost, 0),
    l = t.reduce((i, h) => i + h.profit, 0),
    L = async () => {
      if (I)
        try {
          const { data: i } = await v
              .from("user_settings")
              .select("*")
              .eq("user_id", I.id)
              .maybeSingle(),
            h =
              p === "today"
                ? "Hoje"
                : p === "week"
                ? "Última Semana"
                : p === "month"
                ? "Este Mês"
                : `${g ? ue(g, "dd/MM/yyyy") : ""} - ${
                    b ? ue(b, "dd/MM/yyyy") : ""
                  }`;
          d({
            sales: t.map((w) => ({
              date: w.date,
              product_name: w.product_name,
              amount: w.amount,
              cost: w.cost,
              profit: w.profit,
            })),
            totalRevenue: H,
            totalCost: T,
            totalProfit: l,
            period: h,
            companyName: i?.company_name || "Tech OS Pro",
            companyLogo: i?.company_logo || "",
            companyPhone: i?.company_phone || "",
            companyAddress: i?.company_address || "",
            companyCNPJ: i?.company_cnpj || "",
          }),
            U(!0);
        } catch {
          B({
            title: "Erro ao preparar PDF",
            description: "Ocorreu um erro ao preparar o relatório.",
            variant: "destructive",
          });
        }
    },
    Q = async (i) => {
      if ($)
        try {
          await sa({ ...$, currency: i }),
            B({
              title: "PDF gerado com sucesso!",
              description: "O relatório de vendas foi exportado.",
            }),
            d(null);
        } catch {
          B({
            title: "Erro ao gerar PDF",
            description: "Ocorreu um erro ao exportar o relatório.",
            variant: "destructive",
          });
        }
    };
  return e.jsxs(le, {
    open: u,
    onOpenChange: F,
    children: [
      e.jsxs(ce, {
        className: "max-w-4xl max-h-[90vh] overflow-y-auto",
        children: [
          e.jsx(de, {
            children: e.jsxs(me, {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(Ve, { className: "h-5 w-5 text-primary" }),
                    "Histórico de Vendas",
                  ],
                }),
                e.jsxs(y, {
                  variant: "outline",
                  size: "sm",
                  onClick: L,
                  disabled: t.length === 0,
                  children: [
                    e.jsx(ea, { className: "mr-2 h-4 w-4" }),
                    "Exportar PDF",
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-3",
                children: [
                  e.jsxs(te, {
                    value: p,
                    onValueChange: C,
                    children: [
                      e.jsx(re, {
                        className: "w-full sm:w-[180px]",
                        children: e.jsx(ne, {
                          placeholder: "Selecione o período",
                        }),
                      }),
                      e.jsxs(ie, {
                        children: [
                          e.jsx(G, { value: "today", children: "Hoje" }),
                          e.jsx(G, {
                            value: "week",
                            children: "Última Semana",
                          }),
                          e.jsx(G, { value: "month", children: "Este Mês" }),
                          e.jsx(G, {
                            value: "custom",
                            children: "Período Personalizado",
                          }),
                        ],
                      }),
                    ],
                  }),
                  p === "custom" &&
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsxs(Ce, {
                          children: [
                            e.jsx(we, {
                              asChild: !0,
                              children: e.jsxs(y, {
                                variant: "outline",
                                className:
                                  "w-[180px] justify-start text-left font-normal",
                                children: [
                                  e.jsx(Pe, { className: "mr-2 h-4 w-4" }),
                                  g
                                    ? ue(g, "P", { locale: Se })
                                    : "Data inicial",
                                ],
                              }),
                            }),
                            e.jsx(De, {
                              className: "w-auto p-0",
                              children: e.jsx(Fe, {
                                mode: "single",
                                selected: g,
                                onSelect: E,
                                initialFocus: !0,
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(Ce, {
                          children: [
                            e.jsx(we, {
                              asChild: !0,
                              children: e.jsxs(y, {
                                variant: "outline",
                                className:
                                  "w-[180px] justify-start text-left font-normal",
                                children: [
                                  e.jsx(Pe, { className: "mr-2 h-4 w-4" }),
                                  b ? ue(b, "P", { locale: Se }) : "Data final",
                                ],
                              }),
                            }),
                            e.jsx(De, {
                              className: "w-auto p-0",
                              children: e.jsx(Fe, {
                                mode: "single",
                                selected: b,
                                onSelect: O,
                                initialFocus: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: [
                  e.jsxs("div", {
                    className:
                      "bg-green-500/10 border border-green-500/20 rounded-lg p-4",
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Faturamento Total",
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-bold text-green-600",
                        children: x(H),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-red-500/10 border border-red-500/20 rounded-lg p-4",
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Custo Total",
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-bold text-red-600",
                        children: x(T),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "bg-primary/10 border border-primary/20 rounded-lg p-4",
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground mb-1",
                        children: "Lucro Líquido",
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-bold text-primary",
                        children: x(l),
                      }),
                    ],
                  }),
                ],
              }),
              j
                ? e.jsx("div", {
                    className: "text-center py-8 text-muted-foreground",
                    children: "Carregando vendas...",
                  })
                : t.length === 0
                ? e.jsx("div", {
                    className: "text-center py-8 text-muted-foreground",
                    children: "Nenhuma venda encontrada neste período.",
                  })
                : e.jsx("div", {
                    className: "overflow-x-auto",
                    children: e.jsxs("table", {
                      className: "w-full",
                      children: [
                        e.jsx("thead", {
                          children: e.jsxs("tr", {
                            className: "border-b border-border",
                            children: [
                              e.jsx("th", {
                                className:
                                  "text-left py-3 px-2 text-sm font-semibold",
                                children: "Data",
                              }),
                              e.jsx("th", {
                                className:
                                  "text-left py-3 px-2 text-sm font-semibold",
                                children: "Produto",
                              }),
                              e.jsx("th", {
                                className:
                                  "text-right py-3 px-2 text-sm font-semibold",
                                children: "Faturamento",
                              }),
                              e.jsx("th", {
                                className:
                                  "text-right py-3 px-2 text-sm font-semibold",
                                children: "Custo",
                              }),
                              e.jsx("th", {
                                className:
                                  "text-right py-3 px-2 text-sm font-semibold",
                                children: "Lucro Líquido",
                              }),
                            ],
                          }),
                        }),
                        e.jsx("tbody", {
                          children: t.map((i) =>
                            e.jsxs(
                              "tr",
                              {
                                className:
                                  "border-b border-border/50 hover:bg-secondary/30",
                                children: [
                                  e.jsx("td", {
                                    className: "py-3 px-2 text-sm",
                                    children: aa(i.date),
                                  }),
                                  e.jsx("td", {
                                    className: "py-3 px-2 text-sm",
                                    children: i.product_name,
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-3 px-2 text-sm text-right font-semibold text-green-600",
                                    children: x(i.amount),
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-3 px-2 text-sm text-right text-red-600",
                                    children: x(i.cost),
                                  }),
                                  e.jsx("td", {
                                    className:
                                      "py-3 px-2 text-sm text-right font-bold text-primary",
                                    children: x(i.profit),
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
            ],
          }),
        ],
      }),
      e.jsx(ta, { open: q, onOpenChange: U, onConfirm: Q }),
    ],
  });
}
export { ga as P, fa as S, ja as a, na as b };
