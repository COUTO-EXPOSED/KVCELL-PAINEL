import {
  W as Me,
  cm as Re,
  r as c,
  j as e,
  D as de,
  c as me,
  a_ as xe,
  d as he,
  n as Y,
  I as $,
  c7 as qe,
  B as C,
  cn as ze,
  cC as Le,
  z as ue,
  w as N,
  b3 as pe,
  bz as Pe,
  N as Fe,
  ct as Ae,
  c0 as Ie,
  G as o,
  ae as fe,
  cf as Be,
  i as $e,
  cD as Ge,
  U as te,
  a8 as Ue,
  a1 as b,
  bO as Ve,
  e as ae,
  cE as He,
  h as Ke,
  Y as I,
  $ as B,
  cF as We,
  cG as re,
  bb as le,
  bg as Ye,
  bc as Xe,
  bd as Je,
  be as Qe,
  bf as ne,
  bh as Ze,
  cb as es,
  cc as ss,
  cd as ts,
  b2 as as,
  b5 as rs,
  b6 as ls,
  b7 as ns,
  b8 as cs,
  b9 as X,
  cH as is,
  aa as os,
  cz as ds,
  bm as ms,
} from "./index-V8ZHCWL2.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ce = Me("Medal", [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza",
    },
  ],
  ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
  ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
  ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }],
]);
function ie({ open: d, onOpenChange: w, onSave: m, technician: x }) {
  const {
    register: n,
    handleSubmit: h,
    reset: u,
    formState: { errors: g },
  } = Re({ resolver: ze(Le) });
  c.useEffect(() => {
    u(x || { name: "", email: "", specialty: "" });
  }, [x, u]);
  const r = (j) => {
    m(j), u();
  };
  return e.jsx(de, {
    open: d,
    onOpenChange: w,
    children: e.jsxs(me, {
      className: "max-w-lg",
      children: [
        e.jsx(xe, {
          children: e.jsx(he, {
            children: x ? "Editar Técnico" : "Novo Técnico",
          }),
        }),
        e.jsxs("form", {
          onSubmit: h(r),
          children: [
            e.jsxs("div", {
              className: "grid gap-4 py-4",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(Y, { htmlFor: "name", children: "Nome Completo *" }),
                    e.jsx($, {
                      id: "name",
                      ...n("name"),
                      placeholder: "Nome do técnico",
                    }),
                    g.name &&
                      e.jsx("p", {
                        className: "text-sm text-destructive",
                        children: g.name.message,
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(Y, { htmlFor: "email", children: "Email *" }),
                    e.jsx($, {
                      id: "email",
                      type: "email",
                      ...n("email"),
                      placeholder: "email@exemplo.com",
                    }),
                    g.email &&
                      e.jsx("p", {
                        className: "text-sm text-destructive",
                        children: g.email.message,
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(Y, {
                      htmlFor: "specialty",
                      children: "Especialidade *",
                    }),
                    e.jsx($, {
                      id: "specialty",
                      ...n("specialty"),
                      placeholder: "Ex: Smartphones, Tablets, Notebooks",
                    }),
                    g.specialty &&
                      e.jsx("p", {
                        className: "text-sm text-destructive",
                        children: g.specialty.message,
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs(qe, {
              children: [
                e.jsx(C, {
                  type: "button",
                  variant: "outline",
                  onClick: () => w(!1),
                  children: "Cancelar",
                }),
                e.jsx(C, {
                  type: "submit",
                  children: x ? "Salvar Alterações" : "Adicionar Técnico",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function xs({ open: d, onOpenChange: w, technician: m }) {
  const { user: x } = ue(),
    [n, h] = c.useState({
      totalOS: 0,
      completed: 0,
      inProgress: 0,
      avgTime: 0,
      completionRate: 0,
    });
  c.useEffect(() => {
    d && m && x && u();
  }, [d, m, x]);
  const u = async () => {
    if (!m || !x) return;
    const { data: j } = await N.from("service_orders")
      .select("*")
      .eq("user_id", x.id)
      .eq("technician", m.name);
    if (j) {
      const v = j.length,
        z = j.filter((p) => p.status === "completed").length,
        G = j.filter((p) => p.status === "in_progress").length,
        D = v > 0 ? (z / v) * 100 : 0,
        E = j.filter((p) => p.status === "completed" && p.entry_date);
      let S = 0;
      E.forEach((p) => {
        const y = new Date(p.entry_date),
          _ = Math.abs(new Date().getTime() - y.getTime()),
          V = Math.ceil(_ / (1e3 * 60 * 60 * 24));
        S += V;
      });
      const U = E.length > 0 ? S / E.length : 0;
      h({
        totalOS: v,
        completed: z,
        inProgress: G,
        avgTime: U,
        completionRate: D,
      });
    }
  };
  if (!m) return null;
  const g = m.email || "Não informado",
    r = m.phone || "Não informado";
  return e.jsx(de, {
    open: d,
    onOpenChange: w,
    children: e.jsxs(me, {
      className: "max-w-[95vw] md:max-w-3xl max-h-[95vh] overflow-y-auto",
      children: [
        e.jsx(xe, { children: e.jsx(he, { children: "Detalhes do Técnico" }) }),
        e.jsxs("div", {
          className: "space-y-6 py-4",
          children: [
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mb-1",
                      children: "ID do Técnico",
                    }),
                    e.jsx("p", {
                      className: "font-mono text-primary font-semibold text-xs",
                      children: m.id,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground mb-1",
                      children: "Especialidade",
                    }),
                    e.jsx(pe, { variant: "secondary", children: m.specialty }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("p", {
                  className: "text-sm text-muted-foreground mb-1",
                  children: "Nome Completo",
                }),
                e.jsx("p", {
                  className: "text-lg font-semibold",
                  children: m.name,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 p-4 bg-secondary/30 rounded-lg",
                  children: [
                    e.jsx(Pe, { className: "w-5 h-5 text-primary" }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Telefone",
                        }),
                        e.jsx("p", { className: "font-medium", children: r }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 p-4 bg-secondary/30 rounded-lg",
                  children: [
                    e.jsx(Fe, { className: "w-5 h-5 text-primary" }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Email",
                        }),
                        e.jsx("p", {
                          className: "font-medium truncate",
                          children: g,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(Ae, {}),
            e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsxs("h3", {
                  className: "text-lg font-semibold flex items-center gap-2",
                  children: [
                    e.jsx(Ie, { className: "w-5 h-5 text-primary" }),
                    "Estatísticas de Desempenho",
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-2 md:grid-cols-5 gap-3",
                  children: [
                    e.jsxs(o, {
                      className: "p-4 bg-primary/5 border-primary/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Total de OS",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-primary",
                          children: n.totalOS,
                        }),
                      ],
                    }),
                    e.jsxs(o, {
                      className: "p-4 bg-green-500/5 border-green-500/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Concluídas",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-green-600",
                          children: n.completed,
                        }),
                      ],
                    }),
                    e.jsxs(o, {
                      className: "p-4 bg-orange-500/5 border-orange-500/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Em Progresso",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-orange-600",
                          children: n.inProgress,
                        }),
                      ],
                    }),
                    e.jsxs(o, {
                      className: "p-4 bg-blue-500/5 border-blue-500/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Tempo Médio",
                        }),
                        e.jsxs("p", {
                          className: "text-lg font-bold text-blue-600",
                          children: [n.avgTime.toFixed(0), "d"],
                        }),
                      ],
                    }),
                    e.jsxs(o, {
                      className: "p-4 bg-purple-500/5 border-purple-500/20",
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mb-1",
                          children: "Taxa Conclusão",
                        }),
                        e.jsxs("p", {
                          className:
                            "text-lg font-bold text-purple-600 flex items-center gap-1",
                          children: [
                            e.jsx(fe, { className: "w-4 h-4" }),
                            n.completionRate.toFixed(0),
                            "%",
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
      ],
    }),
  });
}
const oe = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"],
  ps = () => {
    const { user: d } = ue(),
      { effectiveUserId: w, isEmployee: m, employeeId: x } = Be(),
      n = w || d?.id || "",
      { toast: h } = $e();
    Ge();
    const [u, g] = c.useState([]),
      [r, j] = c.useState([]),
      [v, z] = c.useState(""),
      [G, D] = c.useState(!1),
      [E, S] = c.useState(!1),
      [U, p] = c.useState(!1),
      [y, L] = c.useState(null);
    c.useState("month");
    const [_, V] = c.useState("ranking"),
      [ge, J] = c.useState(!0);
    c.useEffect(() => {
      d && (O(), je());
    }, [d]);
    const O = async () => {
        if (d) {
          J(!0);
          try {
            const { data: s, error: t } = await N.from("technicians")
              .select("id, name, specialty, email, phone")
              .eq("user_id", n)
              .order("created_at", { ascending: !1 });
            if (t) throw t;
            g(s || []);
            const { data: k, error: T } = await N.from("service_orders")
              .select(
                "id, technician, status, service_value, created_at, updated_at, is_warranty"
              )
              .eq("user_id", n);
            if (T) throw T;
            const P = new Date(),
              se = new Date(P.getFullYear(), P.getMonth(), 1),
              M = new Map(),
              H = (a) =>
                a
                  ?.toLowerCase()
                  .trim()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "") || "";
            (s || []).forEach((a) => {
              const i = H(a.name);
              M.set(i, {
                id: a.id,
                name: a.name,
                specialty: a.specialty || "",
                email: a.email || "",
                phone: a.phone,
                totalOS: 0,
                monthlyOS: 0,
                completedOS: 0,
                pendingOS: 0,
                warrantyOS: 0,
                totalRevenue: 0,
                monthlyRevenue: 0,
                avgCompletionTime: 0,
                ranking: 0,
                lastOSDate: null,
              });
            });
            const F = new Map();
            (k || []).forEach((a) => {
              if (!a.technician) return;
              const i = H(a.technician);
              let l;
              if (((l = M.get(i)), !l)) {
                for (const [f, K] of M.entries())
                  if (
                    f.includes(i) ||
                    i.includes(f) ||
                    f.split(" ")[0] === i.split(" ")[0]
                  ) {
                    l = K;
                    break;
                  }
              }
              if (!l) return;
              l.totalOS++, a.is_warranty && l.warrantyOS++;
              const R = new Date(a.created_at);
              (!l.lastOSDate || new Date(l.lastOSDate) < R) &&
                (l.lastOSDate = a.created_at),
                R >= se && l.monthlyOS++;
              let q = 0;
              if (a.service_value) {
                const f = a.service_value
                  .toString()
                  .replace(/[R$€\s]/g, "")
                  .replace(/\./g, "")
                  .replace(",", ".");
                q = parseFloat(f) || 0;
              }
              (l.totalRevenue += q), R >= se && (l.monthlyRevenue += q);
              const A = a.status?.toLowerCase().trim() || "",
                Ee = [
                  "completed",
                  "delivered",
                  "entregue",
                  "finalizado",
                  "retirado",
                  "concluido",
                  "concluído",
                ],
                _e = ["cancelled", "cancelado", "cancelada"];
              if (Ee.some((f) => A.includes(f))) {
                if ((l.completedOS++, a.updated_at && a.created_at)) {
                  const f = new Date(a.created_at),
                    K = new Date(a.updated_at),
                    ke = Math.max(
                      1,
                      Math.ceil(
                        (K.getTime() - f.getTime()) / (1e3 * 60 * 60 * 24)
                      )
                    ),
                    W = H(a.technician);
                  F.has(W) || F.set(W, []), F.get(W).push(ke);
                }
              } else _e.some((f) => A.includes(f)) || l.pendingOS++;
            }),
              F.forEach((a, i) => {
                for (const [l, R] of M.entries())
                  if (l === i || l.includes(i) || i.includes(l)) {
                    a.length > 0 &&
                      (R.avgCompletionTime = Math.round(
                        a.reduce((q, A) => q + A, 0) / a.length
                      ));
                    break;
                  }
              });
            const De = Array.from(M.values())
              .sort((a, i) => i.totalOS - a.totalOS)
              .map((a, i) => ({ ...a, ranking: i + 1 }));
            j(De);
          } catch {
            h({ title: "Erro ao carregar dados", variant: "destructive" });
          } finally {
            J(!1);
          }
        }
      },
      je = () => {
        if (!d) return;
        const s = N.channel("technicians_realtime")
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "technicians",
              filter: `user_id=eq.${n}`,
            },
            () => {
              O();
            }
          )
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "service_orders",
              filter: `user_id=eq.${n}`,
            },
            () => {
              O();
            }
          )
          .subscribe();
        return () => {
          N.removeChannel(s);
        };
      },
      Q = c
        .useMemo(
          () =>
            [...r].sort((s, t) => {
              switch (_) {
                case "totalOS":
                  return t.totalOS - s.totalOS;
                case "revenue":
                  return t.totalRevenue - s.totalRevenue;
                case "ranking":
                default:
                  return s.ranking - t.ranking;
              }
            }),
          [r, _]
        )
        .filter(
          (s) =>
            s.name.toLowerCase().includes(v.toLowerCase()) ||
            s.specialty?.toLowerCase().includes(v.toLowerCase())
        ),
      Z = r
        .filter((s) => s.totalOS > 0)
        .sort((s, t) => t.monthlyOS - s.monthlyOS)
        .slice(0, 6)
        .map((s) => ({
          name: s.name.split(" ")[0],
          OS: s.monthlyOS,
          Receita: s.monthlyRevenue,
        })),
      ee = r
        .filter((s) => s.totalOS > 0)
        .map((s) => ({ name: s.name.split(" ")[0], value: s.totalOS })),
      be = r.reduce((s, t) => s + t.totalOS, 0),
      Ne = r.reduce((s, t) => s + t.monthlyOS, 0),
      ve = r.reduce((s, t) => s + t.warrantyOS, 0);
    r.reduce((s, t) => s + t.totalRevenue, 0);
    const ye =
        r.filter((s) => s.avgCompletionTime > 0).length > 0
          ? Math.round(
              r.reduce((s, t) => s + t.avgCompletionTime, 0) /
                r.filter((s) => s.avgCompletionTime > 0).length
            )
          : 0,
      we = async (s) => {
        if (d)
          try {
            const { error: t } = await N.from("technicians").insert({
              ...s,
              user_id: n,
            });
            if (t) throw t;
            D(!1),
              h({
                title: "Técnico adicionado",
                description: `${s.name} foi cadastrado com sucesso.`,
              }),
              O();
          } catch {
            h({ title: "Erro ao criar técnico", variant: "destructive" });
          }
      },
      Se = async (s) => {
        if (!y || !d) return;
        const t = y.name,
          k = s.name;
        try {
          const { error: T } = await N.from("technicians")
            .update(s)
            .eq("id", y.id);
          if (T) throw T;
          if (k && k !== t) {
            const { error: P } = await N.from("service_orders")
              .update({ technician: k })
              .eq("user_id", n)
              .eq("technician", t);
          }
          S(!1),
            L(null),
            h({
              title: "Técnico atualizado",
              description: "As alterações foram salvas com sucesso.",
            }),
            O();
        } catch {
          h({ title: "Erro ao atualizar técnico", variant: "destructive" });
        }
      },
      Oe = async (s) => {
        if (confirm("Tem certeza que deseja excluir este técnico?"))
          try {
            const { error: t } = await N.from("technicians")
              .delete()
              .eq("id", s);
            if (t) throw t;
            h({
              title: "Técnico removido",
              description: "O técnico foi excluído com sucesso.",
            }),
              O();
          } catch {
            h({ title: "Erro ao deletar técnico", variant: "destructive" });
          }
      },
      Te = (s) =>
        s === 1
          ? e.jsx(re, { className: "w-5 h-5 text-yellow-500" })
          : s === 2
          ? e.jsx(ce, { className: "w-5 h-5 text-gray-400" })
          : s === 3
          ? e.jsx(ce, { className: "w-5 h-5 text-amber-600" })
          : e.jsxs("span", {
              className:
                "w-5 h-5 flex items-center justify-center text-sm font-bold text-muted-foreground",
              children: ["#", s],
            }),
      Ce = (s) =>
        s === 1
          ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
          : s === 2
          ? "bg-gradient-to-r from-gray-300 to-gray-500 text-white"
          : s === 3
          ? "bg-gradient-to-r from-amber-500 to-amber-700 text-white"
          : "bg-muted text-muted-foreground";
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className:
            "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("h1", {
                  className:
                    "text-2xl md:text-3xl font-bold flex items-center gap-2",
                  children: [
                    e.jsx(te, { className: "w-7 h-7 text-primary" }),
                    "Gestão de Técnicos",
                  ],
                }),
                e.jsx("p", {
                  className: "text-sm md:text-base text-muted-foreground",
                  children:
                    "Controle completo da sua equipe com estatísticas e ranking",
                }),
              ],
            }),
            e.jsxs(C, {
              onClick: () => D(!0),
              className: "gap-2",
              children: [e.jsx(Ue, { className: "w-4 h-4" }), "Novo Técnico"],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4",
          children: [
            e.jsx(o, {
              className:
                "bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20",
              children: e.jsx(b, {
                className: "p-4",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Técnicos",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-blue-600",
                          children: u.length,
                        }),
                      ],
                    }),
                    e.jsx(te, { className: "w-8 h-8 text-blue-500/50" }),
                  ],
                }),
              }),
            }),
            e.jsx(o, {
              className:
                "bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20",
              children: e.jsx(b, {
                className: "p-4",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "OS Este Mês",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-green-600",
                          children: Ne,
                        }),
                      ],
                    }),
                    e.jsx(Ve, { className: "w-8 h-8 text-green-500/50" }),
                  ],
                }),
              }),
            }),
            e.jsx(o, {
              className:
                "bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20",
              children: e.jsx(b, {
                className: "p-4",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Total OS",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-purple-600",
                          children: be,
                        }),
                      ],
                    }),
                    e.jsx(ae, { className: "w-8 h-8 text-purple-500/50" }),
                  ],
                }),
              }),
            }),
            e.jsx(o, {
              className:
                "bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20",
              children: e.jsx(b, {
                className: "p-4",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Garantias",
                        }),
                        e.jsx("p", {
                          className: "text-2xl font-bold text-orange-600",
                          children: ve,
                        }),
                      ],
                    }),
                    e.jsx(He, { className: "w-8 h-8 text-orange-500/50" }),
                  ],
                }),
              }),
            }),
            e.jsx(o, {
              className:
                "bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/20",
              children: e.jsx(b, {
                className: "p-4",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Tempo Médio",
                        }),
                        e.jsxs("p", {
                          className: "text-2xl font-bold text-amber-600",
                          children: [ye, "d"],
                        }),
                      ],
                    }),
                    e.jsx(Ke, { className: "w-8 h-8 text-amber-500/50" }),
                  ],
                }),
              }),
            }),
          ],
        }),
        r.filter((s) => s.totalOS > 0).length >= 3 &&
          e.jsxs(o, {
            className: "overflow-hidden",
            children: [
              e.jsx(I, {
                className: "pb-2 bg-gradient-to-r from-primary/10 to-primary/5",
                children: e.jsxs(B, {
                  className: "flex items-center gap-2 text-lg",
                  children: [
                    e.jsx(We, { className: "w-5 h-5 text-yellow-500" }),
                    "Ranking de Desempenho",
                  ],
                }),
              }),
              e.jsx(b, {
                className: "p-4",
                children: e.jsxs("div", {
                  className: "flex items-end justify-center gap-4 py-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-col items-center",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center mb-2 shadow-lg",
                          children: e.jsx("span", {
                            className:
                              "text-2xl md:text-3xl font-bold text-white",
                            children: "2º",
                          }),
                        }),
                        e.jsx("p", {
                          className: "font-semibold text-sm text-center",
                          children: r[1]?.name.split(" ")[0],
                        }),
                        e.jsxs("p", {
                          className: "text-xs text-muted-foreground",
                          children: [r[1]?.totalOS, " OS"],
                        }),
                        e.jsx("div", {
                          className:
                            "w-16 md:w-20 h-20 md:h-24 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg mt-2",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col items-center -mt-4",
                      children: [
                        e.jsx(re, {
                          className:
                            "w-8 h-8 text-yellow-500 mb-1 animate-pulse",
                        }),
                        e.jsx("div", {
                          className:
                            "w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-2 shadow-xl ring-4 ring-yellow-400/30",
                          children: e.jsx("span", {
                            className:
                              "text-3xl md:text-4xl font-bold text-white",
                            children: "1º",
                          }),
                        }),
                        e.jsx("p", {
                          className: "font-bold text-base text-center",
                          children: r[0]?.name.split(" ")[0],
                        }),
                        e.jsxs("p", {
                          className: "text-sm text-yellow-600 font-semibold",
                          children: [r[0]?.totalOS, " OS"],
                        }),
                        e.jsx("div", {
                          className:
                            "w-20 md:w-24 h-28 md:h-32 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-lg mt-2",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col items-center",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-2 shadow-lg",
                          children: e.jsx("span", {
                            className:
                              "text-2xl md:text-3xl font-bold text-white",
                            children: "3º",
                          }),
                        }),
                        e.jsx("p", {
                          className: "font-semibold text-sm text-center",
                          children: r[2]?.name.split(" ")[0],
                        }),
                        e.jsxs("p", {
                          className: "text-xs text-muted-foreground",
                          children: [r[2]?.totalOS, " OS"],
                        }),
                        e.jsx("div", {
                          className:
                            "w-16 md:w-20 h-16 md:h-20 bg-gradient-to-t from-amber-600 to-amber-500 rounded-t-lg mt-2",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        Z.length > 0 &&
          e.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
            children: [
              e.jsxs(o, {
                children: [
                  e.jsx(I, {
                    className: "pb-2",
                    children: e.jsxs(B, {
                      className: "text-sm flex items-center gap-2",
                      children: [
                        e.jsx(ae, { className: "w-4 h-4" }),
                        "OS por Técnico (Este Mês)",
                      ],
                    }),
                  }),
                  e.jsx(b, {
                    children: e.jsx(le, {
                      width: "100%",
                      height: 200,
                      children: e.jsxs(Ye, {
                        data: Z,
                        children: [
                          e.jsx(Xe, { strokeDasharray: "3 3", opacity: 0.3 }),
                          e.jsx(Je, { dataKey: "name", fontSize: 11 }),
                          e.jsx(Qe, { fontSize: 11 }),
                          e.jsx(ne, {}),
                          e.jsx(Ze, {
                            dataKey: "OS",
                            fill: "#10b981",
                            radius: [4, 4, 0, 0],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              e.jsxs(o, {
                children: [
                  e.jsx(I, {
                    className: "pb-2",
                    children: e.jsxs(B, {
                      className: "text-sm flex items-center gap-2",
                      children: [
                        e.jsx(fe, { className: "w-4 h-4" }),
                        "Distribuição de OS",
                      ],
                    }),
                  }),
                  e.jsx(b, {
                    children: e.jsx(le, {
                      width: "100%",
                      height: 200,
                      children: e.jsxs(es, {
                        children: [
                          e.jsx(ss, {
                            data: ee,
                            cx: "50%",
                            cy: "50%",
                            innerRadius: 40,
                            outerRadius: 70,
                            paddingAngle: 3,
                            dataKey: "value",
                            label: ({ name: s, value: t }) => `${s}: ${t}`,
                            labelLine: !1,
                            children: ee.map((s, t) =>
                              e.jsx(
                                ts,
                                { fill: oe[t % oe.length] },
                                `cell-${t}`
                              )
                            ),
                          }),
                          e.jsx(ne, {}),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        e.jsxs(o, {
          children: [
            e.jsx(I, {
              className: "pb-3",
              children: e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between",
                children: [
                  e.jsx(B, {
                    className: "text-base",
                    children: "Equipe de Técnicos",
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-2 w-full sm:w-auto",
                    children: [
                      e.jsxs("div", {
                        className: "relative flex-1 sm:flex-initial sm:w-48",
                        children: [
                          e.jsx(as, {
                            className:
                              "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
                          }),
                          e.jsx($, {
                            placeholder: "Buscar...",
                            value: v,
                            onChange: (s) => z(s.target.value),
                            className: "pl-9 h-9 text-sm",
                          }),
                        ],
                      }),
                      e.jsxs(rs, {
                        value: _,
                        onValueChange: (s) => V(s),
                        children: [
                          e.jsx(ls, {
                            className: "w-full sm:w-36 h-9 text-xs",
                            children: e.jsx(ns, { placeholder: "Ordenar por" }),
                          }),
                          e.jsxs(cs, {
                            children: [
                              e.jsx(X, {
                                value: "ranking",
                                children: "Por Ranking",
                              }),
                              e.jsx(X, {
                                value: "totalOS",
                                children: "Por Total OS",
                              }),
                              e.jsx(X, {
                                value: "revenue",
                                children: "Por Receita",
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
            e.jsx(b, {
              className: "p-3 md:p-6 pt-0",
              children: ge
                ? e.jsx("div", {
                    className: "text-center py-8 text-muted-foreground",
                    children: "Carregando...",
                  })
                : Q.length === 0
                ? e.jsx("div", {
                    className: "text-center py-8 text-muted-foreground",
                    children:
                      u.length === 0
                        ? 'Nenhum técnico cadastrado. Clique em "Novo Técnico" para adicionar.'
                        : "Nenhum técnico encontrado com esse termo de busca.",
                  })
                : e.jsx("div", {
                    className: "space-y-3",
                    children: Q.map((s) =>
                      e.jsx(
                        "div",
                        {
                          className:
                            "p-4 border rounded-xl hover:bg-accent/50 transition-all duration-200 hover:shadow-md",
                          children: e.jsxs("div", {
                            className:
                              "flex flex-col lg:flex-row lg:items-center gap-4",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-3 flex-1 min-w-0",
                                children: [
                                  e.jsx("div", {
                                    className: `w-10 h-10 rounded-full flex items-center justify-center ${Ce(
                                      s.ranking
                                    )}`,
                                    children: Te(s.ranking),
                                  }),
                                  e.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 flex-wrap",
                                        children: [
                                          e.jsx("h3", {
                                            className: "font-semibold truncate",
                                            children: s.name,
                                          }),
                                          s.specialty &&
                                            e.jsx(pe, {
                                              variant: "outline",
                                              className:
                                                "text-xs bg-primary/10 text-primary border-primary/20",
                                              children: s.specialty,
                                            }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children:
                                          s.email || s.phone || "Sem contato",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "grid grid-cols-3 sm:grid-cols-5 gap-2 lg:gap-4",
                                children: [
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-muted-foreground",
                                        children: "Total OS",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-base font-bold text-primary",
                                        children: s.totalOS,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-muted-foreground",
                                        children: "Este Mês",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-base font-bold text-green-600",
                                        children: s.monthlyOS,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-muted-foreground",
                                        children: "Concluídas",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-base font-bold text-blue-600",
                                        children: s.completedOS,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-muted-foreground",
                                        children: "Garantias",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-base font-bold text-amber-600",
                                        children: s.warrantyOS,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[10px] text-muted-foreground",
                                        children: "Tempo Médio",
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "text-base font-bold text-purple-600",
                                        children: [
                                          s.avgCompletionTime || "-",
                                          "d",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  e.jsxs("div", {
                                    className: "hidden md:block w-24",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center justify-between text-xs mb-1",
                                        children: [
                                          e.jsx("span", {
                                            children: "Eficiência",
                                          }),
                                          e.jsxs("span", {
                                            children: [
                                              s.totalOS > 0
                                                ? Math.round(
                                                    (s.completedOS /
                                                      s.totalOS) *
                                                      100
                                                  )
                                                : 0,
                                              "%",
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsx(is, {
                                        value:
                                          s.totalOS > 0
                                            ? (s.completedOS / s.totalOS) * 100
                                            : 0,
                                        className: "h-2",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      e.jsx(C, {
                                        variant: "ghost",
                                        size: "icon",
                                        className:
                                          "h-8 w-8 hover:bg-blue-500/10 hover:text-blue-600",
                                        onClick: () => {
                                          L(
                                            u.find((t) => t.id === s.id) || null
                                          ),
                                            p(!0);
                                        },
                                        children: e.jsx(os, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      e.jsx(C, {
                                        variant: "ghost",
                                        size: "icon",
                                        className:
                                          "h-8 w-8 hover:bg-primary/10 hover:text-primary",
                                        onClick: () => {
                                          L(
                                            u.find((t) => t.id === s.id) || null
                                          ),
                                            S(!0);
                                        },
                                        children: e.jsx(ds, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      e.jsx(C, {
                                        variant: "ghost",
                                        size: "icon",
                                        className:
                                          "h-8 w-8 hover:bg-destructive/10 hover:text-destructive",
                                        onClick: () => Oe(s.id),
                                        children: e.jsx(ms, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
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
            }),
          ],
        }),
        e.jsx(ie, { open: G, onOpenChange: D, onSave: we }),
        e.jsx(ie, { open: E, onOpenChange: S, onSave: Se, technician: y }),
        e.jsx(xs, { open: U, onOpenChange: p, technician: y }),
      ],
    });
  };
export { ps as default };
