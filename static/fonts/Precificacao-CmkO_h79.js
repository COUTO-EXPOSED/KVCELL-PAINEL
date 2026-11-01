const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/pricingTablePDFGenerator-CvQ7Kc0Q.js",
      "assets/index-V8ZHCWL2.js",
      "assets/index-CShRRvYi.css",
      "assets/pt-XKM20doT.js",
    ])
) => i.map((i) => d[i]);
import {
  W as ts,
  i as xe,
  r as n,
  j as e,
  D as pe,
  c as he,
  a_ as ge,
  d as ve,
  n as _,
  I as k,
  T as Fe,
  c7 as fe,
  B as d,
  w,
  cD as $e,
  b3 as L,
  cf as is,
  u as ns,
  bL as os,
  bW as ls,
  a8 as Y,
  S as oe,
  ad as cs,
  ae as ds,
  G as le,
  a1 as ce,
  b2 as ms,
  bV as us,
  cL as de,
  bm as me,
  cJ as xs,
  bO as ee,
  bM as ps,
  h as hs,
  bl as ue,
  X as _e,
  a3 as gs,
  m as vs,
  bn as Se,
  bo as ke,
  bp as Me,
  bq as Te,
  br as De,
  bs as Ee,
  bt as Pe,
  bu as Ae,
  _ as fs,
} from "./index-V8ZHCWL2.js";
import { L as js } from "./layers-D35uilGq.js";
import { A as bs } from "./arrow-up-down-Bp1BbkwY.js";
import { P as ys } from "./percent-Bgqp83iA.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ns = ts("CopyPlus", [
  ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
function ws({
  open: M,
  onOpenChange: T,
  userId: F,
  editing: v,
  categories: h,
  onSaved: f,
}) {
  const { toast: m } = xe(),
    [D, j] = n.useState(!1),
    [x, c] = n.useState({
      name: "",
      brand: "",
      category: "Celular",
      notes: "",
    });
  n.useEffect(() => {
    M &&
      c(
        v
          ? {
              name: v.name,
              brand: v.brand || "",
              category: v.category || "Celular",
              notes: v.notes || "",
            }
          : { name: "", brand: "", category: h[0] || "Celular", notes: "" }
      );
  }, [M, v]);
  const b = async () => {
    if (!x.name.trim()) {
      m({ title: "Informe o nome do modelo", variant: "destructive" });
      return;
    }
    if (F) {
      j(!0);
      try {
        const o = {
          user_id: F,
          name: x.name.trim(),
          brand: x.brand.trim() || null,
          category: x.category.trim() || "Geral",
          notes: x.notes.trim() || null,
        };
        if (v) {
          const { data: C, error: g } = await w
            .from("pricing_models")
            .update(o)
            .eq("id", v.id)
            .select()
            .single();
          if (g) throw g;
          f(C);
        } else {
          const { data: C, error: g } = await w
            .from("pricing_models")
            .insert(o)
            .select()
            .single();
          if (g) throw g;
          f(C);
        }
        m({ title: v ? "Modelo atualizado!" : "Modelo criado!" }), T(!1);
      } catch (o) {
        m({
          title: "Erro ao salvar modelo",
          description: o.message,
          variant: "destructive",
        });
      } finally {
        j(!1);
      }
    }
  };
  return e.jsx(pe, {
    open: M,
    onOpenChange: T,
    children: e.jsxs(he, {
      className: "max-h-[90vh] max-w-md overflow-y-auto",
      children: [
        e.jsx(ge, {
          children: e.jsx(ve, {
            children: v ? "Editar modelo" : "Novo modelo",
          }),
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className: "space-y-1.5",
              children: [
                e.jsx(_, { children: "Modelo / Aparelho *" }),
                e.jsx(k, {
                  value: x.name,
                  onChange: (o) => c({ ...x, name: o.target.value }),
                  placeholder: "Ex: Redmi 13C",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsx(_, { children: "Marca" }),
                    e.jsx(k, {
                      value: x.brand,
                      onChange: (o) => c({ ...x, brand: o.target.value }),
                      placeholder: "Ex: Xiaomi",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsx(_, { children: "Categoria" }),
                    e.jsx(k, {
                      value: x.category,
                      onChange: (o) => c({ ...x, category: o.target.value }),
                      placeholder: "Ex: Celular",
                      list: "pricing-categories",
                    }),
                    e.jsx("datalist", {
                      id: "pricing-categories",
                      children: h.map((o) => e.jsx("option", { value: o }, o)),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-1.5",
              children: [
                e.jsx(_, { children: "Observações" }),
                e.jsx(Fe, {
                  value: x.notes,
                  onChange: (o) => c({ ...x, notes: o.target.value }),
                  placeholder: "Notas internas sobre este modelo",
                  rows: 3,
                }),
              ],
            }),
          ],
        }),
        e.jsxs(fe, {
          children: [
            e.jsx(d, {
              variant: "outline",
              onClick: () => T(!1),
              children: "Cancelar",
            }),
            e.jsx(d, {
              onClick: b,
              disabled: D,
              children: D ? "Salvando..." : "Salvar",
            }),
          ],
        }),
      ],
    }),
  });
}
const ze = [
  "Troca de Tela",
  "Troca de Bateria",
  "Troca de Conector de Carga",
  "Troca de Câmera Traseira",
  "Troca de Câmera Frontal",
  "Troca de Tampa Traseira",
  "Troca de Alto-falante",
  "Troca de Auricular",
  "Troca de Microfone",
  "Troca de Botão Power",
  "Limpeza / Oxidação",
  "Desbloqueio de Conta",
  "Atualização de Software",
  "Película 3D",
];
function Cs({
  open: M,
  onOpenChange: T,
  userId: F,
  modelId: v,
  editing: h,
  onSaved: f,
}) {
  const { toast: m } = xe(),
    { symbol: D } = $e(),
    [j, x] = n.useState(!1),
    [c, b] = n.useState({
      service_name: "",
      price: "",
      cost: "",
      warranty_days: "90",
      duration_minutes: "",
      notes: "",
    });
  n.useEffect(() => {
    M &&
      b(
        h
          ? {
              service_name: h.service_name,
              price: String(h.price ?? ""),
              cost: String(h.cost ?? ""),
              warranty_days: String(h.warranty_days ?? 90),
              duration_minutes:
                h.duration_minutes != null ? String(h.duration_minutes) : "",
              notes: h.notes || "",
            }
          : {
              service_name: "",
              price: "",
              cost: "",
              warranty_days: "90",
              duration_minutes: "",
              notes: "",
            }
      );
  }, [M, h]);
  const o = parseFloat(c.price.replace(",", ".")) || 0,
    C = parseFloat(c.cost.replace(",", ".")) || 0,
    g = o - C,
    S = o > 0 ? (g / o) * 100 : 0,
    U = async () => {
      if (!c.service_name.trim()) {
        m({ title: "Informe o nome do serviço", variant: "destructive" });
        return;
      }
      if (o <= 0) {
        m({ title: "Informe um preço válido", variant: "destructive" });
        return;
      }
      if (!(!F || !v)) {
        x(!0);
        try {
          const u = {
            user_id: F,
            model_id: v,
            service_name: c.service_name.trim(),
            price: o,
            cost: C,
            warranty_days: parseInt(c.warranty_days) || 0,
            duration_minutes: c.duration_minutes
              ? parseInt(c.duration_minutes)
              : null,
            notes: c.notes.trim() || null,
          };
          if (h) {
            const { data: E, error: P } = await w
              .from("pricing_services")
              .update(u)
              .eq("id", h.id)
              .select()
              .single();
            if (P) throw P;
            f(E);
          } else {
            const { data: E, error: P } = await w
              .from("pricing_services")
              .insert(u)
              .select()
              .single();
            if (P) throw P;
            f(E);
          }
          m({ title: h ? "Serviço atualizado!" : "Serviço adicionado!" }),
            T(!1);
        } catch (u) {
          m({
            title: "Erro ao salvar serviço",
            description: u.message,
            variant: "destructive",
          });
        } finally {
          x(!1);
        }
      }
    };
  return e.jsx(pe, {
    open: M,
    onOpenChange: T,
    children: e.jsxs(he, {
      className: "max-w-lg max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx(ge, {
          children: e.jsx(ve, {
            children: h ? "Editar serviço" : "Novo serviço",
          }),
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsxs("div", {
              className: "space-y-1.5",
              children: [
                e.jsx(_, { children: "Serviço *" }),
                e.jsx(k, {
                  value: c.service_name,
                  onChange: (u) => b({ ...c, service_name: u.target.value }),
                  placeholder: "Ex: Troca de Tela",
                  list: "pricing-service-suggestions",
                }),
                e.jsx("datalist", {
                  id: "pricing-service-suggestions",
                  children: ze.map((u) => e.jsx("option", { value: u }, u)),
                }),
                !h &&
                  e.jsx("div", {
                    className: "flex flex-wrap gap-1.5 pt-1",
                    children: ze
                      .slice(0, 6)
                      .map((u) =>
                        e.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => b({ ...c, service_name: u }),
                            className:
                              "rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary",
                            children: u,
                          },
                          u
                        )
                      ),
                  }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsxs(_, { children: ["Preço ao cliente (", D, ") *"] }),
                    e.jsx(k, {
                      inputMode: "decimal",
                      value: c.price,
                      onChange: (u) => b({ ...c, price: u.target.value }),
                      placeholder: "0,00",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsxs(_, { children: ["Custo da peça (", D, ")"] }),
                    e.jsx(k, {
                      inputMode: "decimal",
                      value: c.cost,
                      onChange: (u) => b({ ...c, cost: u.target.value }),
                      placeholder: "0,00",
                    }),
                  ],
                }),
              ],
            }),
            o > 0 &&
              e.jsxs("div", {
                className:
                  "flex items-center gap-2 rounded-xl border border-border/50 bg-muted/30 p-3 text-xs",
                children: [
                  e.jsxs(L, {
                    variant:
                      S >= 40
                        ? "default"
                        : S >= 20
                        ? "secondary"
                        : "destructive",
                    children: ["Margem ", S.toFixed(0), "%"],
                  }),
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "Lucro estimado: ",
                      e.jsxs("strong", {
                        className: "text-foreground",
                        children: [D, " ", g.toFixed(2)],
                      }),
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsx(_, { children: "Garantia (dias)" }),
                    e.jsx(k, {
                      inputMode: "numeric",
                      value: c.warranty_days,
                      onChange: (u) =>
                        b({ ...c, warranty_days: u.target.value }),
                      placeholder: "90",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsx(_, { children: "Tempo estimado (min)" }),
                    e.jsx(k, {
                      inputMode: "numeric",
                      value: c.duration_minutes,
                      onChange: (u) =>
                        b({ ...c, duration_minutes: u.target.value }),
                      placeholder: "60",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-1.5",
              children: [
                e.jsx(_, { children: "Observações" }),
                e.jsx(Fe, {
                  value: c.notes,
                  onChange: (u) => b({ ...c, notes: u.target.value }),
                  placeholder: "Ex: peça original, inclui instalação",
                  rows: 2,
                }),
              ],
            }),
          ],
        }),
        e.jsxs(fe, {
          children: [
            e.jsx(d, {
              variant: "outline",
              onClick: () => T(!1),
              children: "Cancelar",
            }),
            e.jsx(d, {
              onClick: U,
              disabled: j,
              children: j ? "Salvando..." : "Salvar",
            }),
          ],
        }),
      ],
    }),
  });
}
function Ts() {
  const {
      effectiveUserId: M,
      authUserId: T,
      isEmployee: F,
      permissions: v,
      loading: h,
    } = is(),
    f = M || T || "",
    { toast: m } = xe(),
    D = ns(),
    { format: j } = $e(),
    x = !F || v?.financeiro === !0,
    [c, b] = n.useState(!0),
    [o, C] = n.useState([]),
    [g, S] = n.useState([]),
    [U, u] = n.useState(""),
    [E, P] = n.useState("all"),
    [$, R] = n.useState(null),
    [A, I] = n.useState([]),
    [q, Oe] = n.useState("name"),
    [Le, W] = n.useState(!1),
    [Ie, se] = n.useState(null),
    [qe, G] = n.useState(!1),
    [Be, V] = n.useState(null),
    [O, ae] = n.useState(null),
    [B, Q] = n.useState(null),
    [Ue, H] = n.useState(!1),
    [je, be] = n.useState("10"),
    [K, X] = n.useState(!1);
  n.useEffect(() => {
    if (h || !f) return;
    (async () => {
      b(!0);
      const [a, i] = await Promise.all([
        w.from("pricing_models").select("*").eq("user_id", f).order("name"),
        w
          .from("pricing_services")
          .select("*")
          .eq("user_id", f)
          .order("service_name"),
      ]);
      a.error &&
        m({ title: "Erro ao carregar modelos", variant: "destructive" });
      const t = a.data || [];
      C(t), S(i.data || []), R((r) => r ?? (t[0]?.id || null)), b(!1);
    })();
  }, [f, h, m]);
  const J = n.useMemo(
      () =>
        Array.from(new Set(o.map((s) => s.category).filter(Boolean))).sort(),
      [o]
    ),
    re = n.useMemo(() => {
      const s = new Map();
      return (
        g.forEach((a) => {
          const i = s.get(a.model_id) || [];
          i.push(a), s.set(a.model_id, i);
        }),
        s
      );
    }, [g]),
    ye = n.useMemo(() => {
      const s = U.trim().toLowerCase();
      return o.filter((a) => {
        const i = E === "all" || a.category === E,
          t =
            !s ||
            a.name.toLowerCase().includes(s) ||
            (a.brand || "").toLowerCase().includes(s) ||
            (a.category || "").toLowerCase().includes(s) ||
            (re.get(a.id) || []).some((r) =>
              r.service_name.toLowerCase().includes(s)
            );
        return i && t;
      });
    }, [o, U, E, re]),
    l = n.useMemo(() => o.find((s) => s.id === $) || null, [o, $]),
    y = n.useMemo(() => {
      const s = g.filter((t) => t.model_id === $),
        a = (t) => {
          const r = Number(t.price || 0);
          return r > 0 ? ((r - Number(t.cost || 0)) / r) * 100 : 0;
        },
        i = [...s];
      return (
        q === "name" &&
          i.sort((t, r) => t.service_name.localeCompare(r.service_name)),
        q === "price_desc" &&
          i.sort((t, r) => Number(r.price) - Number(t.price)),
        q === "price_asc" &&
          i.sort((t, r) => Number(t.price) - Number(r.price)),
        q === "margin" && i.sort((t, r) => a(r) - a(t)),
        i
      );
    }, [g, $, q]),
    N = n.useMemo(() => y.filter((s) => A.includes(s.id)), [y, A]),
    Ne = N.reduce((s, a) => s + Number(a.price || 0), 0),
    te = N.reduce((s, a) => s + Number(a.cost || 0), 0),
    Re = Ne - te,
    Z = n.useMemo(() => {
      const s = g.length,
        a = s ? g.reduce((t, r) => t + Number(r.price || 0), 0) / s : 0,
        i = s
          ? g.reduce((t, r) => {
              const p = Number(r.price || 0);
              return t + (p > 0 ? ((p - Number(r.cost || 0)) / p) * 100 : 0);
            }, 0) / s
          : 0;
      return { models: o.length, services: s, avg: a, avgMargin: i };
    }, [o, g]),
    Ge = n.useMemo(() => {
      const s = new Map();
      return (
        g.forEach((a) => s.set(a.model_id, (s.get(a.model_id) || 0) + 1)), s
      );
    }, [g]);
  n.useEffect(() => {
    I([]);
  }, [$]);
  const We = (s) => {
      C((a) =>
        (a.some((r) => r.id === s.id)
          ? a.map((r) => (r.id === s.id ? s : r))
          : [...a, s]
        ).sort((r, p) => r.name.localeCompare(p.name))
      ),
        R(s.id);
    },
    Ve = (s) => {
      S((a) =>
        (a.some((r) => r.id === s.id)
          ? a.map((r) => (r.id === s.id ? s : r))
          : [...a, s]
        ).sort((r, p) => r.service_name.localeCompare(p.service_name))
      );
    },
    Qe = async () => {
      if (!O) return;
      const { error: s } = await w
        .from("pricing_models")
        .delete()
        .eq("id", O.id);
      if (s) {
        m({ title: "Erro ao excluir modelo", variant: "destructive" });
        return;
      }
      S((a) => a.filter((i) => i.model_id !== O.id)),
        C((a) => a.filter((i) => i.id !== O.id)),
        $ === O.id && R(null),
        ae(null),
        m({ title: "Modelo excluído" });
    },
    He = async () => {
      if (!B) return;
      const { error: s } = await w
        .from("pricing_services")
        .delete()
        .eq("id", B.id);
      if (s) {
        m({ title: "Erro ao excluir serviço", variant: "destructive" });
        return;
      }
      S((a) => a.filter((i) => i.id !== B.id)),
        I((a) => a.filter((i) => i !== B.id)),
        Q(null),
        m({ title: "Serviço excluído" });
    },
    Ke = (s) => {
      I((a) => (a.includes(s) ? a.filter((i) => i !== s) : [...a, s]));
    },
    Xe = async () => {
      if (!(!l || K)) {
        X(!0);
        try {
          const { data: s, error: a } = await w
            .from("pricing_models")
            .insert({
              user_id: f,
              name: `${l.name} (cópia)`,
              brand: l.brand,
              category: l.category,
              notes: l.notes,
            })
            .select()
            .single();
          if (a) throw a;
          const i = g.filter((r) => r.model_id === l.id);
          let t = [];
          if (i.length) {
            const { data: r, error: p } = await w
              .from("pricing_services")
              .insert(
                i.map((z) => ({
                  user_id: f,
                  model_id: s.id,
                  service_name: z.service_name,
                  price: z.price,
                  cost: z.cost,
                  warranty_days: z.warranty_days,
                  duration_minutes: z.duration_minutes,
                  notes: z.notes,
                }))
              )
              .select();
            if (p) throw p;
            t = r || [];
          }
          C((r) => [...r, s].sort((p, z) => p.name.localeCompare(z.name))),
            S((r) => [...r, ...t]),
            R(s.id),
            m({
              title: "Modelo duplicado!",
              description: `${t.length} serviços copiados.`,
            });
        } catch (s) {
          m({
            title: "Erro ao duplicar modelo",
            description: s.message,
            variant: "destructive",
          });
        } finally {
          X(!1);
        }
      }
    },
    Je = async () => {
      const s = parseFloat(je.replace(",", "."));
      if (!Number.isFinite(s) || s === 0) {
        m({ title: "Informe um percentual válido", variant: "destructive" });
        return;
      }
      const a = N.length ? N : y;
      if (a.length) {
        X(!0);
        try {
          const i = a.map((r) => ({
            id: r.id,
            price: Math.max(
              0,
              Math.round(Number(r.price || 0) * (1 + s / 100) * 100) / 100
            ),
          }));
          await Promise.all(
            i.map((r) =>
              w
                .from("pricing_services")
                .update({ price: r.price })
                .eq("id", r.id)
            )
          );
          const t = new Map(i.map((r) => [r.id, r.price]));
          S((r) =>
            r.map((p) => (t.has(p.id) ? { ...p, price: t.get(p.id) } : p))
          ),
            H(!1),
            m({
              title: "Preços reajustados!",
              description: `${i.length} serviços atualizados em ${s}%.`,
            });
        } catch (i) {
          m({
            title: "Erro ao reajustar preços",
            description: i.message,
            variant: "destructive",
          });
        } finally {
          X(!1);
        }
      }
    },
    we = () => {
      if (!l) return "";
      const s = (N.length ? N : y).map(
        (a) =>
          `• ${a.service_name}: ${j(Number(a.price))}${
            a.warranty_days ? ` (garantia ${a.warranty_days} dias)` : ""
          }`
      ).join(`
`);
      return `*Tabela de preços — ${l.name}*
${s}

Valores sujeitos a avaliação técnica.`;
    },
    Ze = async () => {
      const s = we();
      if (s)
        try {
          await navigator.clipboard.writeText(s),
            m({
              title: "Preços copiados!",
              description: "Cole no WhatsApp do cliente.",
            });
        } catch {
          m({ title: "Não foi possível copiar", variant: "destructive" });
        }
    },
    Ye = () => {
      const s = we();
      s &&
        window.open(`https://wa.me/?text=${encodeURIComponent(s)}`, "_blank");
    },
    es = async () => {
      if (!l) return;
      const s = N.length ? N : y;
      if (!s.length) {
        m({ title: "Nenhum serviço para exportar", variant: "destructive" });
        return;
      }
      try {
        const { generatePricingTablePDF: a } = await fs(async () => {
            const { generatePricingTablePDF: t } = await import(
              "./pricingTablePDFGenerator-CvQ7Kc0Q.js"
            );
            return { generatePricingTablePDF: t };
          }, __vite__mapDeps([0, 1, 2, 3])),
          { data: i } = await w
            .from("user_settings")
            .select("*")
            .eq("user_id", f)
            .maybeSingle();
        await a(
          {
            name: l.name,
            brand: l.brand,
            category: l.category,
            notes: l.notes,
          },
          s.map((t) => ({
            service_name: t.service_name,
            price: t.price,
            cost: t.cost,
            warranty_days: t.warranty_days,
            duration_minutes: t.duration_minutes,
            notes: t.notes,
          })),
          i
        ),
          m({ title: "PDF gerado!" });
      } catch (a) {
        m({
          title: "Erro ao gerar PDF",
          description: a.message,
          variant: "destructive",
        });
      }
    },
    Ce = () =>
      N.length === 0
        ? (m({
            title: "Selecione pelo menos um serviço",
            variant: "destructive",
          }),
          !1)
        : !0,
    ie = (s) => {
      !l ||
        s.length === 0 ||
        D("/orcamentos", {
          state: {
            prefillQuotation: {
              device_brand: l.brand || "",
              device_model: l.name,
              services: s.map((a) => ({
                description: a.service_name,
                quantity: 1,
                unit_price: Number(a.price),
                total: Number(a.price),
              })),
            },
          },
        });
    },
    ne = (s) => {
      if (!l || s.length === 0) return;
      const a = s.map((r) => r.service_name).join(", "),
        i = s.reduce((r, p) => r + Number(p.price || 0), 0),
        t = s.reduce((r, p) => r + Number(p.cost || 0), 0);
      D("/os", {
        state: {
          prefillOS: {
            deviceModel: `${l.brand ? l.brand + " " : ""}${l.name}`.trim(),
            serviceType: a,
            reportedProblem: a,
            serviceValue: i.toFixed(2).replace(".", ","),
            serviceCost: t > 0 ? t.toFixed(2).replace(".", ",") : "",
          },
        },
      });
    },
    ss = () => {
      Ce() && ie(N);
    },
    as = () => {
      Ce() && ne(N);
    },
    rs = [
      { key: "name", label: "A-Z" },
      { key: "price_desc", label: "Maior preço" },
      { key: "price_asc", label: "Menor preço" },
      ...(x ? [{ key: "margin", label: "Maior margem" }] : []),
    ];
  return e.jsxs("div", {
    className: "space-y-5 pb-4",
    children: [
      e.jsxs("div", {
        className:
          "relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-5 sm:p-6",
        children: [
          e.jsx("div", {
            className:
              "pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl",
          }),
          e.jsxs("div", {
            className:
              "relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
            children: [
              e.jsxs("div", {
                className: "min-w-0",
                children: [
                  e.jsxs("div", {
                    className:
                      "mb-1 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary",
                    children: [
                      e.jsx(os, { className: "h-3 w-3" }),
                      " Tabela inteligente de preços",
                    ],
                  }),
                  e.jsxs("h1", {
                    className:
                      "flex items-center gap-2 text-2xl font-bold tracking-tight sm:text-3xl",
                    children: [
                      e.jsx(ls, { className: "h-6 w-6 text-primary" }),
                      "Precificação",
                    ],
                  }),
                  e.jsx("p", {
                    className: "mt-1 max-w-xl text-sm text-muted-foreground",
                    children:
                      "Cadastre modelos, defina o preço de cada serviço e envie o orçamento ao cliente em segundos — com margem, garantia e criação direta de OS.",
                  }),
                ],
              }),
              e.jsxs(d, {
                onClick: () => {
                  se(null), W(!0);
                },
                className:
                  "w-full gap-2 rounded-xl shadow-lg shadow-primary/20 sm:w-auto",
                children: [e.jsx(Y, { className: "h-4 w-4" }), " Novo modelo"],
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
        children: [
          { label: "Modelos", value: String(Z.models), icon: oe },
          {
            label: "Serviços precificados",
            value: String(Z.services),
            icon: js,
          },
          { label: "Preço médio", value: j(Z.avg), icon: cs },
          ...(x
            ? [
                {
                  label: "Margem média",
                  value: `${Z.avgMargin.toFixed(0)}%`,
                  icon: ds,
                },
              ]
            : []),
        ].map((s, a) =>
          e.jsx(
            le,
            {
              className:
                "rounded-2xl border-border/50 bg-gradient-to-br from-card to-muted/30 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5",
              children: e.jsxs(ce, {
                className: "flex items-center gap-3 p-4",
                children: [
                  e.jsx("div", {
                    className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-sm ${
                      a % 4 === 0
                        ? "bg-primary/15 text-primary"
                        : a % 4 === 1
                        ? "bg-blue-500/15 text-blue-500"
                        : a % 4 === 2
                        ? "bg-amber-500/15 text-amber-500"
                        : "bg-emerald-500/15 text-emerald-500"
                    }`,
                    children: e.jsx(s.icon, { className: "h-5 w-5" }),
                  }),
                  e.jsxs("div", {
                    className: "min-w-0",
                    children: [
                      e.jsx("p", {
                        className:
                          "truncate text-[11px] font-medium uppercase tracking-wide text-muted-foreground",
                        children: s.label,
                      }),
                      e.jsx("p", {
                        className: "truncate text-xl font-bold tracking-tight",
                        children: s.value,
                      }),
                    ],
                  }),
                ],
              }),
            },
            s.label
          )
        ),
      }),
      e.jsxs("div", {
        className: "grid min-w-0 gap-4 lg:grid-cols-[320px_minmax(0,1fr)]",
        children: [
          e.jsx(le, {
            className: "rounded-2xl border-border/50",
            children: e.jsxs(ce, {
              className: "space-y-3 p-4",
              children: [
                e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx(ms, {
                      className:
                        "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground",
                    }),
                    e.jsx(k, {
                      value: U,
                      onChange: (s) => u(s.target.value),
                      placeholder: "Buscar modelo ou serviço",
                      className: "rounded-xl pl-9",
                    }),
                  ],
                }),
                J.length > 0 &&
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-1.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => P("all"),
                        className: `rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                          E === "all"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-accent"
                        }`,
                        children: "Todas",
                      }),
                      J.map((s) =>
                        e.jsx(
                          "button",
                          {
                            onClick: () => P(s),
                            className: `rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                              E === s
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-accent"
                            }`,
                            children: s,
                          },
                          s
                        )
                      ),
                    ],
                  }),
                e.jsx("div", {
                  className:
                    "max-h-[320px] space-y-1.5 overflow-y-auto pr-1 lg:max-h-[520px]",
                  children: c
                    ? Array.from({ length: 5 }).map((s, a) =>
                        e.jsx(us, { className: "h-14 w-full rounded-xl" }, a)
                      )
                    : ye.length === 0
                    ? e.jsx("div", {
                        className:
                          "rounded-xl border border-dashed border-border/60 p-6 text-center",
                        children: e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children:
                            o.length === 0
                              ? "Nenhum modelo cadastrado ainda."
                              : "Nenhum modelo encontrado.",
                        }),
                      })
                    : ye.map((s) => {
                        const a = s.id === $,
                          i = re.get(s.id) || [],
                          t = i.length
                            ? Math.min(...i.map((r) => Number(r.price || 0)))
                            : 0;
                        return e.jsxs(
                          "button",
                          {
                            onClick: () => R(s.id),
                            className: `w-full rounded-xl border p-3 text-left transition-all ${
                              a
                                ? "border-primary/40 bg-primary/10 shadow-sm"
                                : "border-border/50 bg-card hover:border-border hover:bg-accent/40"
                            }`,
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex min-w-0 items-center gap-2",
                                    children: [
                                      e.jsx("span", {
                                        className: `flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
                                          a
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground"
                                        }`,
                                        children: (s.brand || s.name)
                                          .charAt(0)
                                          .toUpperCase(),
                                      }),
                                      e.jsx("span", {
                                        className: `truncate text-sm font-semibold ${
                                          a ? "text-primary" : ""
                                        }`,
                                        children: s.name,
                                      }),
                                    ],
                                  }),
                                  e.jsx(L, {
                                    variant: "secondary",
                                    className: "shrink-0 text-[10px]",
                                    children: Ge.get(s.id) || 0,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-2",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "truncate text-[11px] text-muted-foreground",
                                    children: [s.brand, s.category]
                                      .filter(Boolean)
                                      .join(" • "),
                                  }),
                                  t > 0 &&
                                    e.jsxs("span", {
                                      className:
                                        "shrink-0 text-[11px] font-semibold text-primary",
                                      children: ["a partir de ", j(t)],
                                    }),
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
          }),
          e.jsx(le, {
            className: "min-w-0 overflow-hidden rounded-2xl border-border/50",
            children: e.jsx(ce, {
              className: "p-4",
              children: l
                ? e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-3 sm:flex-row sm:items-start sm:justify-between",
                        children: [
                          e.jsx("div", {
                            className:
                              "pointer-events-none absolute -right-8 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl",
                          }),
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsx("h2", {
                                className: "truncate text-lg font-bold",
                                children: l.name,
                              }),
                              e.jsxs("div", {
                                className:
                                  "mt-1 flex flex-wrap items-center gap-1.5",
                                children: [
                                  l.brand &&
                                    e.jsx(L, {
                                      variant: "outline",
                                      className: "text-[10px]",
                                      children: l.brand,
                                    }),
                                  e.jsx(L, {
                                    variant: "secondary",
                                    className: "text-[10px]",
                                    children: l.category,
                                  }),
                                  e.jsxs(L, {
                                    variant: "outline",
                                    className: "text-[10px]",
                                    children: [y.length, " serviços"],
                                  }),
                                ],
                              }),
                              l.notes &&
                                e.jsx("p", {
                                  className:
                                    "mt-1.5 break-all text-xs text-muted-foreground [overflow-wrap:anywhere]",
                                  children: l.notes,
                                }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "grid w-full grid-cols-2 gap-1.5 sm:flex sm:w-auto sm:flex-wrap",
                            children: [
                              e.jsxs(d, {
                                size: "sm",
                                variant: "outline",
                                className:
                                  "w-full gap-1.5 rounded-xl sm:w-auto",
                                onClick: () => {
                                  se(l), W(!0);
                                },
                                children: [
                                  e.jsx(de, { className: "h-3.5 w-3.5" }),
                                  " Editar",
                                ],
                              }),
                              e.jsxs(d, {
                                size: "sm",
                                variant: "outline",
                                className:
                                  "w-full gap-1.5 rounded-xl sm:w-auto",
                                disabled: K,
                                onClick: Xe,
                                children: [
                                  e.jsx(Ns, { className: "h-3.5 w-3.5" }),
                                  " Duplicar",
                                ],
                              }),
                              e.jsxs(d, {
                                size: "sm",
                                variant: "outline",
                                className:
                                  "w-full gap-1.5 rounded-xl text-destructive hover:bg-destructive/10 hover:text-destructive sm:w-auto",
                                onClick: () => ae(l),
                                children: [
                                  e.jsx(me, { className: "h-3.5 w-3.5" }),
                                  " Excluir",
                                ],
                              }),
                              e.jsxs(d, {
                                size: "sm",
                                className:
                                  "w-full gap-1.5 rounded-xl sm:w-auto",
                                onClick: () => {
                                  V(null), G(!0);
                                },
                                children: [
                                  e.jsx(Y, { className: "h-3.5 w-3.5" }),
                                  " Serviço",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      y.length === 0
                        ? e.jsxs("div", {
                            className:
                              "rounded-xl border border-dashed border-border/60 p-8 text-center",
                            children: [
                              e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children:
                                  "Nenhum serviço precificado para este modelo.",
                              }),
                              e.jsxs(d, {
                                size: "sm",
                                variant: "outline",
                                className: "mt-3 gap-1.5 rounded-xl",
                                onClick: () => {
                                  V(null), G(!0);
                                },
                                children: [
                                  e.jsx(Y, { className: "h-3.5 w-3.5" }),
                                  " Adicionar serviço",
                                ],
                              }),
                            ],
                          })
                        : e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex flex-wrap items-center justify-between gap-2 px-1",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("button", {
                                        className:
                                          "text-[11px] font-medium text-muted-foreground hover:text-foreground",
                                        onClick: () =>
                                          I(
                                            A.length === y.length
                                              ? []
                                              : y.map((s) => s.id)
                                          ),
                                        children:
                                          A.length === y.length
                                            ? "Limpar seleção"
                                            : "Selecionar todos",
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "text-[11px] text-muted-foreground",
                                        children: [A.length, " selecionado(s)"],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "scrollbar-hide -mx-1 flex max-w-full items-center gap-1 overflow-x-auto px-1 py-0.5",
                                    children: [
                                      e.jsx(bs, {
                                        className:
                                          "h-3 w-3 shrink-0 text-muted-foreground",
                                      }),
                                      rs.map((s) =>
                                        e.jsx(
                                          "button",
                                          {
                                            onClick: () => Oe(s.key),
                                            className: `shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium transition-colors ${
                                              q === s.key
                                                ? "bg-primary/15 text-primary"
                                                : "text-muted-foreground hover:bg-accent"
                                            }`,
                                            children: s.label,
                                          },
                                          s.key
                                        )
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              y.map((s) => {
                                const a = Number(s.price || 0),
                                  i = Number(s.cost || 0),
                                  t = a > 0 ? ((a - i) / a) * 100 : 0,
                                  r = A.includes(s.id);
                                return e.jsxs(
                                  "div",
                                  {
                                    className: `flex min-w-0 items-start gap-2.5 rounded-xl border p-3 transition-all sm:items-center sm:gap-3 ${
                                      r
                                        ? "border-primary/40 bg-primary/5 shadow-sm"
                                        : "border-border/50 hover:bg-accent/30"
                                    }`,
                                    children: [
                                      e.jsx(xs, {
                                        className: "mt-1 shrink-0 sm:mt-0",
                                        checked: r,
                                        onCheckedChange: () => Ke(s.id),
                                      }),
                                      e.jsx("span", {
                                        className: `hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:flex ${
                                          r
                                            ? "bg-primary/15 text-primary"
                                            : "bg-muted text-muted-foreground"
                                        }`,
                                        children: e.jsx(ee, {
                                          className: "h-4 w-4",
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-sm font-semibold [overflow-wrap:anywhere] sm:truncate",
                                            children: s.service_name,
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground",
                                            children: [
                                              s.warranty_days > 0 &&
                                                e.jsxs("span", {
                                                  className:
                                                    "flex items-center gap-1",
                                                  children: [
                                                    e.jsx(ps, {
                                                      className: "h-3 w-3",
                                                    }),
                                                    s.warranty_days,
                                                    "d",
                                                  ],
                                                }),
                                              s.duration_minutes
                                                ? e.jsxs("span", {
                                                    className:
                                                      "flex items-center gap-1",
                                                    children: [
                                                      e.jsx(hs, {
                                                        className: "h-3 w-3",
                                                      }),
                                                      s.duration_minutes,
                                                      "min",
                                                    ],
                                                  })
                                                : null,
                                              x &&
                                                i > 0 &&
                                                e.jsxs("span", {
                                                  children: ["Custo ", j(i)],
                                                }),
                                              x &&
                                                i > 0 &&
                                                e.jsxs(L, {
                                                  variant:
                                                    t >= 40
                                                      ? "default"
                                                      : t >= 20
                                                      ? "secondary"
                                                      : "destructive",
                                                  className:
                                                    "text-[10px] sm:hidden",
                                                  children: [t.toFixed(0), "%"],
                                                }),
                                              s.notes &&
                                                e.jsx("span", {
                                                  className:
                                                    "block w-full [overflow-wrap:anywhere] sm:truncate",
                                                  children: s.notes,
                                                }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "mt-2 flex items-center justify-between gap-2 sm:hidden",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "rounded-xl bg-primary/10 px-2.5 py-1",
                                                children: e.jsx("p", {
                                                  className:
                                                    "text-sm font-bold text-primary",
                                                  children: j(a),
                                                }),
                                              }),
                                              e.jsxs("div", {
                                                className: "flex gap-1",
                                                children: [
                                                  e.jsx(d, {
                                                    size: "icon",
                                                    variant: "ghost",
                                                    className:
                                                      "h-8 w-8 rounded-lg text-primary hover:bg-primary/10",
                                                    title:
                                                      "Gerar orçamento com este serviço",
                                                    onClick: () => ie([s]),
                                                    children: e.jsx(ue, {
                                                      className: "h-3.5 w-3.5",
                                                    }),
                                                  }),
                                                  e.jsx(d, {
                                                    size: "icon",
                                                    variant: "ghost",
                                                    className:
                                                      "h-8 w-8 rounded-lg text-primary hover:bg-primary/10",
                                                    title:
                                                      "Criar OS com este serviço",
                                                    onClick: () => ne([s]),
                                                    children: e.jsx(ee, {
                                                      className: "h-3.5 w-3.5",
                                                    }),
                                                  }),
                                                  e.jsx(d, {
                                                    size: "icon",
                                                    variant: "ghost",
                                                    className:
                                                      "h-8 w-8 rounded-lg",
                                                    onClick: () => {
                                                      V(s), G(!0);
                                                    },
                                                    children: e.jsx(de, {
                                                      className: "h-3.5 w-3.5",
                                                    }),
                                                  }),
                                                  e.jsx(d, {
                                                    size: "icon",
                                                    variant: "ghost",
                                                    className:
                                                      "h-8 w-8 rounded-lg text-destructive hover:bg-destructive/10",
                                                    onClick: () => Q(s),
                                                    children: e.jsx(me, {
                                                      className: "h-3.5 w-3.5",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      x &&
                                        i > 0 &&
                                        e.jsxs(L, {
                                          variant:
                                            t >= 40
                                              ? "default"
                                              : t >= 20
                                              ? "secondary"
                                              : "destructive",
                                          className:
                                            "hidden shrink-0 text-[10px] sm:inline-flex",
                                          children: [t.toFixed(0), "%"],
                                        }),
                                      e.jsx("div", {
                                        className:
                                          "hidden shrink-0 rounded-xl bg-primary/10 px-2.5 py-1 text-right sm:block",
                                        children: e.jsx("p", {
                                          className:
                                            "text-sm font-bold text-primary",
                                          children: j(a),
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "hidden gap-1 sm:flex",
                                        children: [
                                          e.jsx(d, {
                                            size: "icon",
                                            variant: "ghost",
                                            className:
                                              "h-8 w-8 rounded-lg text-primary hover:bg-primary/10",
                                            title:
                                              "Gerar orçamento com este serviço",
                                            onClick: () => ie([s]),
                                            children: e.jsx(ue, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                          }),
                                          e.jsx(d, {
                                            size: "icon",
                                            variant: "ghost",
                                            className:
                                              "h-8 w-8 rounded-lg text-primary hover:bg-primary/10",
                                            title: "Criar OS com este serviço",
                                            onClick: () => ne([s]),
                                            children: e.jsx(ee, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                          }),
                                          e.jsx(d, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "h-8 w-8 rounded-lg",
                                            onClick: () => {
                                              V(s), G(!0);
                                            },
                                            children: e.jsx(de, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                          }),
                                          e.jsx(d, {
                                            size: "icon",
                                            variant: "ghost",
                                            className:
                                              "h-8 w-8 rounded-lg text-destructive hover:bg-destructive/10",
                                            onClick: () => Q(s),
                                            children: e.jsx(me, {
                                              className: "h-3.5 w-3.5",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  s.id
                                );
                              }),
                            ],
                          }),
                      y.length > 0 &&
                        e.jsx("div", {
                          className:
                            "sticky bottom-0 z-10 -mx-1 rounded-2xl border border-border/60 bg-card/95 p-3 shadow-lg backdrop-blur",
                          children: e.jsxs("div", {
                            className:
                              "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-2 sm:block",
                                children: [
                                  e.jsxs("div", {
                                    className: "min-w-0",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[11px] uppercase tracking-wide text-muted-foreground",
                                        children: "Total selecionado",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xl font-bold text-primary",
                                        children: j(Ne),
                                      }),
                                      x &&
                                        te > 0 &&
                                        e.jsxs("p", {
                                          className:
                                            "text-[11px] [overflow-wrap:anywhere] text-muted-foreground",
                                          children: [
                                            "Custo ",
                                            j(te),
                                            " • Lucro ",
                                            j(Re),
                                          ],
                                        }),
                                    ],
                                  }),
                                  A.length > 0 &&
                                    e.jsxs(d, {
                                      size: "sm",
                                      variant: "ghost",
                                      className:
                                        "shrink-0 gap-1.5 rounded-xl sm:hidden",
                                      onClick: () => I([]),
                                      children: [
                                        e.jsx(_e, { className: "h-3.5 w-3.5" }),
                                        " Limpar",
                                      ],
                                    }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap",
                                children: [
                                  A.length > 0 &&
                                    e.jsxs(d, {
                                      size: "sm",
                                      variant: "ghost",
                                      className:
                                        "hidden gap-1.5 rounded-xl sm:inline-flex",
                                      onClick: () => I([]),
                                      children: [
                                        e.jsx(_e, { className: "h-3.5 w-3.5" }),
                                        " Limpar",
                                      ],
                                    }),
                                  e.jsxs(d, {
                                    size: "sm",
                                    variant: "outline",
                                    className:
                                      "w-full gap-1.5 rounded-xl sm:w-auto",
                                    onClick: () => H(!0),
                                    children: [
                                      e.jsx(ys, { className: "h-3.5 w-3.5" }),
                                      " Reajustar",
                                    ],
                                  }),
                                  e.jsxs(d, {
                                    size: "sm",
                                    variant: "outline",
                                    className:
                                      "w-full gap-1.5 rounded-xl sm:w-auto",
                                    onClick: es,
                                    children: [
                                      e.jsx(gs, { className: "h-3.5 w-3.5" }),
                                      " PDF",
                                    ],
                                  }),
                                  e.jsxs(d, {
                                    size: "sm",
                                    variant: "outline",
                                    className:
                                      "w-full gap-1.5 rounded-xl sm:w-auto",
                                    onClick: Ze,
                                    children: [
                                      e.jsx(vs, { className: "h-3.5 w-3.5" }),
                                      " Copiar",
                                    ],
                                  }),
                                  e.jsxs(d, {
                                    size: "sm",
                                    variant: "outline",
                                    className:
                                      "w-full gap-1.5 rounded-xl sm:w-auto",
                                    onClick: Ye,
                                    children: [
                                      e.jsx(oe, { className: "h-3.5 w-3.5" }),
                                      " WhatsApp",
                                    ],
                                  }),
                                  e.jsxs(d, {
                                    size: "sm",
                                    variant: "outline",
                                    className:
                                      "w-full gap-1.5 rounded-xl sm:w-auto",
                                    onClick: ss,
                                    children: [
                                      e.jsx(ue, { className: "h-3.5 w-3.5" }),
                                      " Orçamento",
                                    ],
                                  }),
                                  e.jsxs(d, {
                                    size: "sm",
                                    className:
                                      "w-full gap-1.5 rounded-xl sm:w-auto",
                                    onClick: as,
                                    children: [
                                      e.jsx(ee, { className: "h-3.5 w-3.5" }),
                                      " Criar OS",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                    ],
                  })
                : e.jsxs("div", {
                    className:
                      "flex min-h-[320px] flex-col items-center justify-center gap-3 text-center",
                    children: [
                      e.jsx(oe, {
                        className: "h-10 w-10 text-muted-foreground/40",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Selecione ou crie um modelo para configurar os preços dos serviços.",
                      }),
                      e.jsxs(d, {
                        onClick: () => {
                          se(null), W(!0);
                        },
                        variant: "outline",
                        className: "gap-2 rounded-xl",
                        children: [
                          e.jsx(Y, { className: "h-4 w-4" }),
                          " Criar primeiro modelo",
                        ],
                      }),
                    ],
                  }),
            }),
          }),
        ],
      }),
      e.jsx(ws, {
        open: Le,
        onOpenChange: W,
        userId: f,
        editing: Ie,
        categories: J.length ? J : ["Celular", "Notebook", "Tablet", "Console"],
        onSaved: We,
      }),
      l &&
        e.jsx(Cs, {
          open: qe,
          onOpenChange: G,
          userId: f,
          modelId: l.id,
          editing: Be,
          onSaved: Ve,
        }),
      e.jsx(pe, {
        open: Ue,
        onOpenChange: H,
        children: e.jsxs(he, {
          className: "max-w-sm",
          children: [
            e.jsx(ge, {
              children: e.jsx(ve, { children: "Reajustar preços" }),
            }),
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: N.length
                    ? `${N.length} serviço(s) selecionado(s) serão reajustados.`
                    : `Todos os ${y.length} serviços deste modelo serão reajustados.`,
                }),
                e.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    e.jsx(_, { children: "Percentual (%)" }),
                    e.jsx(k, {
                      inputMode: "decimal",
                      value: je,
                      onChange: (s) => be(s.target.value),
                      placeholder: "10 ou -5",
                      className: "rounded-xl",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex gap-1.5",
                  children: ["5", "10", "15", "-5"].map((s) =>
                    e.jsxs(
                      "button",
                      {
                        onClick: () => be(s),
                        className:
                          "rounded-full border border-border/60 px-2.5 py-1 text-[11px] text-muted-foreground hover:bg-accent",
                        children: [s, "%"],
                      },
                      s
                    )
                  ),
                }),
              ],
            }),
            e.jsxs(fe, {
              children: [
                e.jsx(d, {
                  variant: "outline",
                  onClick: () => H(!1),
                  children: "Cancelar",
                }),
                e.jsx(d, {
                  onClick: Je,
                  disabled: K,
                  children: K ? "Aplicando..." : "Aplicar",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(Se, {
        open: !!O,
        onOpenChange: (s) => !s && ae(null),
        children: e.jsxs(ke, {
          children: [
            e.jsxs(Me, {
              children: [
                e.jsx(Te, { children: "Excluir modelo?" }),
                e.jsxs(De, {
                  children: [
                    'Todos os serviços precificados de "',
                    O?.name,
                    '" também serão excluídos.',
                  ],
                }),
              ],
            }),
            e.jsxs(Ee, {
              children: [
                e.jsx(Pe, { children: "Cancelar" }),
                e.jsx(Ae, { onClick: Qe, children: "Excluir" }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(Se, {
        open: !!B,
        onOpenChange: (s) => !s && Q(null),
        children: e.jsxs(ke, {
          children: [
            e.jsxs(Me, {
              children: [
                e.jsx(Te, { children: "Excluir serviço?" }),
                e.jsxs(De, {
                  children: [
                    'O serviço "',
                    B?.service_name,
                    '" será removido da tabela de preços.',
                  ],
                }),
              ],
            }),
            e.jsxs(Ee, {
              children: [
                e.jsx(Pe, { children: "Cancelar" }),
                e.jsx(Ae, { onClick: He, children: "Excluir" }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { Ts as default };
