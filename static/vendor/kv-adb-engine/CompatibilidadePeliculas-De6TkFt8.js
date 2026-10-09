import {
  u as $,
  z as U,
  r as l,
  w as K,
  bU as Q,
  j as e,
  s as k,
  S as h,
  Z as Y,
  dL as F,
  bz as S,
  b2 as D,
  I as H,
  B as C,
  X as E,
  b3 as b,
  dM as X,
  bL as J,
  G as T,
  a1 as z,
  C as I,
  A as V,
  D as ee,
  c as ae,
  a_ as se,
  d as te,
  cY as re,
} from "./index-V8ZHCWL2.js";
import { L as le } from "./layers-D35uilGq.js";
function ce() {
  const L = $(),
    { user: p, loading: f } = U(),
    [g, O] = l.useState([]),
    [_, W] = l.useState(!0),
    [r, N] = l.useState(""),
    [d, Z] = l.useState(null),
    [B, y] = l.useState(!1);
  l.useEffect(() => {
    !f && !p && L("/login");
  }, [p, f, L]),
    l.useEffect(() => {
      p && G();
    }, [p]);
  const G = async () => {
      try {
        const { data: a, error: s } = await K.from("film_compatibility")
          .select("id, film_name, compatible_models")
          .eq("is_global", !0)
          .order("film_name", { ascending: !0 });
        if (s) throw s;
        const n = (a || []).map((m) => ({
          id: m.id,
          film_name: m.film_name,
          compatible_models: Array.isArray(m.compatible_models)
            ? m.compatible_models
            : [],
        }));
        O(n);
      } catch {
        Q.error("Erro ao carregar películas");
      } finally {
        W(!1);
      }
    },
    w = l.useMemo(() => {
      const a = new Map();
      g.forEach((t) => {
        const o = t.film_name.toLowerCase();
        if (!a.has(o))
          a.set(o, {
            compatibleWith: new Set(),
            isMaster: !0,
            masterId: t.id,
            displayName: t.film_name,
          });
        else {
          const i = a.get(o);
          (i.isMaster = !0), (i.masterId = t.id), (i.displayName = t.film_name);
        }
        t.compatible_models.forEach((i) => {
          const c = i.toLowerCase();
          a.has(c) ||
            a.set(c, {
              compatibleWith: new Set(),
              isMaster: !1,
              displayName: i,
            });
        });
      }),
        g.forEach((t) => {
          t.film_name.toLowerCase();
          const o = [t.film_name, ...t.compatible_models];
          o.forEach((i) => {
            const c = i.toLowerCase(),
              u = a.get(c);
            u &&
              o.forEach((x) => {
                x.toLowerCase() !== c && u.compatibleWith.add(x);
              });
          });
        });
      let s = !0,
        n = 0;
      const m = 10;
      for (; s && n < m; )
        (s = !1),
          n++,
          a.forEach((t, o) => {
            Array.from(t.compatibleWith).forEach((c) => {
              const u = c.toLowerCase(),
                x = a.get(u);
              x &&
                x.compatibleWith.forEach((M) => {
                  M.toLowerCase() !== o &&
                    !t.compatibleWith.has(M) &&
                    Array.from(t.compatibleWith).some(
                      (A) => x.compatibleWith.has(A) || A.toLowerCase() === u
                    ) &&
                    (t.compatibleWith.add(M), (s = !0));
                });
            });
          });
      return a;
    }, [g]),
    v = l.useMemo(() => {
      const a = [];
      return (
        w.forEach((s, n) => {
          a.push({
            name: s.displayName,
            isMaster: s.isMaster,
            compatibleCount: s.compatibleWith.size,
            masterId: s.masterId,
          });
        }),
        a.sort((s, n) => s.name.localeCompare(n.name))
      );
    }, [w]),
    j = l.useMemo(() => {
      if (!r.trim()) return v;
      const a = r.toLowerCase().trim();
      return v.filter((s) => s.name.toLowerCase().includes(a));
    }, [v, r]),
    q = v.length,
    P = g.length,
    R = (a) => {
      const s = w.get(a.name.toLowerCase());
      s &&
        (Z({
          searchedModel: a.name,
          compatibleModels: Array.from(s.compatibleWith).sort(),
          isMaster: a.isMaster,
          masterId: a.masterId,
        }),
        y(!0));
    };
  return f
    ? e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-background",
        children: e.jsxs("div", {
          className: "flex flex-col items-center gap-4",
          children: [
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse",
                }),
                e.jsx(k, {
                  className:
                    "w-10 h-10 animate-spin text-primary relative z-10",
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-sm text-muted-foreground animate-pulse",
              children: "Carregando...",
            }),
          ],
        }),
      })
    : p
    ? e.jsxs(e.Fragment, {
        children: [
          e.jsxs("div", {
            className:
              "relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-white/10 overflow-hidden",
            children: [
              e.jsxs("div", {
                className: "absolute inset-0",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse",
                    style: { animationDelay: "1s" },
                  }),
                  e.jsx("div", {
                    className:
                      "absolute top-1/2 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                },
              }),
              e.jsxs("div", {
                className: "relative p-6 md:p-8",
                children: [
                  e.jsx("div", {
                    className: "flex items-center gap-3 mb-6",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "relative group",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 blur-xl opacity-60 group-hover:opacity-80 transition-opacity rounded-2xl",
                            }),
                            e.jsx("div", {
                              className:
                                "relative p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/30 border border-white/20",
                              children: e.jsx(h, {
                                className: "w-7 h-7 text-white",
                              }),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("h1", {
                              className:
                                "text-2xl md:text-3xl font-bold text-white tracking-tight",
                              children: "Compatibilidade de Películas",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-cyan-200/70 text-sm mt-1 flex items-center gap-2",
                              children: [
                                e.jsx(Y, { className: "w-3.5 h-3.5" }),
                                "Busca bidirecional inteligente entre modelos",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-3 gap-3 md:gap-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-500",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2",
                          }),
                          e.jsxs("div", {
                            className: "relative flex items-center gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "p-3 rounded-xl bg-gradient-to-br from-cyan-500/30 to-cyan-600/20 border border-cyan-400/20 group-hover:scale-110 transition-transform duration-300",
                                children: e.jsx(F, {
                                  className: "w-5 h-5 text-cyan-400",
                                }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-2xl md:text-3xl font-bold text-white",
                                    children: P,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[11px] md:text-xs text-cyan-200/60 font-medium uppercase tracking-wider",
                                    children: "Películas Master",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-500",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2",
                          }),
                          e.jsxs("div", {
                            className: "relative flex items-center gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "p-3 rounded-xl bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 border border-emerald-400/20 group-hover:scale-110 transition-transform duration-300",
                                children: e.jsx(S, {
                                  className: "w-5 h-5 text-emerald-400",
                                }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-2xl md:text-3xl font-bold text-white",
                                    children: q,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[11px] md:text-xs text-emerald-200/60 font-medium uppercase tracking-wider",
                                    children: "Total de Modelos",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 hover:bg-white/10 transition-all duration-500",
                        children: [
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                          }),
                          e.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2",
                          }),
                          e.jsxs("div", {
                            className: "relative flex items-center gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "p-3 rounded-xl bg-gradient-to-br from-purple-500/30 to-purple-600/20 border border-purple-400/20 group-hover:scale-110 transition-transform duration-300",
                                children: e.jsx(le, {
                                  className: "w-5 h-5 text-purple-400",
                                }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-2xl md:text-3xl font-bold text-white",
                                    children: j.length,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-[11px] md:text-xs text-purple-200/60 font-medium uppercase tracking-wider",
                                    children: "Resultados",
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
            ],
          }),
          e.jsxs("div", {
            className: "p-4 md:p-6 space-y-6",
            children: [
              e.jsxs("div", {
                className: "relative",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl",
                  }),
                  e.jsx("div", {
                    className:
                      "relative bg-card border border-border/50 rounded-2xl shadow-lg overflow-hidden",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-3 p-2",
                      children: [
                        e.jsx("div", {
                          className:
                            "flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 ml-1",
                          children: e.jsx(D, {
                            className: "w-5 h-5 text-primary",
                          }),
                        }),
                        e.jsx(H, {
                          placeholder: "Buscar qualquer modelo de celular...",
                          value: r,
                          onChange: (a) => N(a.target.value),
                          className:
                            "flex-1 border-0 bg-transparent h-12 text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/50",
                        }),
                        r &&
                          e.jsx(C, {
                            variant: "ghost",
                            size: "icon",
                            className:
                              "h-10 w-10 rounded-xl hover:bg-destructive/10 hover:text-destructive mr-1",
                            onClick: () => N(""),
                            children: e.jsx(E, { className: "w-4 h-4" }),
                          }),
                      ],
                    }),
                  }),
                  r &&
                    e.jsxs("div", {
                      className: "flex items-center gap-2 mt-3 ml-1",
                      children: [
                        e.jsxs(b, {
                          variant: "secondary",
                          className:
                            "gap-1.5 py-1 px-3 bg-primary/10 text-primary border-0",
                          children: [
                            e.jsx(D, { className: "w-3 h-3" }),
                            j.length,
                            " resultado(s)",
                          ],
                        }),
                        e.jsxs("span", {
                          className: "text-sm text-muted-foreground",
                          children: ['para "', r, '"'],
                        }),
                      ],
                    }),
                ],
              }),
              e.jsx("div", {
                className:
                  "bg-gradient-to-r from-amber-500/10 via-orange-500/5 to-amber-500/10 rounded-2xl p-4 border border-amber-500/20",
                children: e.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [
                    e.jsx("div", {
                      className: "p-2 rounded-lg bg-amber-500/20 mt-0.5",
                      children: e.jsx(X, {
                        className: "w-4 h-4 text-amber-600 dark:text-amber-400",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1",
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium text-foreground",
                          children:
                            "📱 Base de dados em constante atualização!",
                        }),
                        e.jsxs("p", {
                          className: "text-xs text-muted-foreground mt-1",
                          children: [
                            "Estamos sempre adicionando novas películas e compatibilidades ao sistema. Caso você saiba de alguma compatibilidade que não está listada, por favor entre em contato com um ",
                            e.jsx("strong", { children: "administrador" }),
                            " para que possamos adicionar.",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className:
                  "bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 rounded-2xl p-4 border border-cyan-500/20",
                children: e.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [
                    e.jsx("div", {
                      className: "p-2 rounded-lg bg-cyan-500/20 mt-0.5",
                      children: e.jsx(J, {
                        className: "w-4 h-4 text-cyan-600 dark:text-cyan-400",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium text-foreground",
                          children: "Compatibilidade Bidirecional",
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground mt-0.5",
                          children:
                            "Busque por qualquer modelo. Se ele faz parte de um grupo de compatibilidade, verá todos os outros modelos que usam a mesma película.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              _
                ? e.jsx("div", {
                    className: "flex items-center justify-center py-20",
                    children: e.jsxs("div", {
                      className: "flex flex-col items-center gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse",
                            }),
                            e.jsx(k, {
                              className:
                                "w-10 h-10 animate-spin text-primary relative z-10",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Carregando modelos...",
                        }),
                      ],
                    }),
                  })
                : j.length === 0
                ? e.jsx(T, {
                    className: "border-dashed border-2 bg-card/50",
                    children: e.jsxs(z, {
                      className:
                        "flex flex-col items-center justify-center py-16",
                      children: [
                        e.jsxs("div", {
                          className: "relative mb-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-muted/50 blur-xl rounded-full",
                            }),
                            e.jsx("div", {
                              className:
                                "relative w-20 h-20 rounded-2xl bg-muted/50 flex items-center justify-center",
                              children: e.jsx(h, {
                                className: "w-10 h-10 text-muted-foreground/50",
                              }),
                            }),
                          ],
                        }),
                        e.jsx("h3", {
                          className:
                            "text-xl font-semibold mb-2 text-foreground",
                          children: r
                            ? "Nenhum resultado encontrado"
                            : "Nenhum modelo disponível",
                        }),
                        e.jsx("p", {
                          className:
                            "text-muted-foreground text-sm text-center max-w-md",
                          children: r
                            ? `Não encontramos modelos correspondentes a "${r}". Tente outro termo.`
                            : "Os modelos serão adicionados pela administração do sistema em breve.",
                        }),
                        r &&
                          e.jsxs(C, {
                            variant: "outline",
                            className: "mt-4 gap-2",
                            onClick: () => N(""),
                            children: [
                              e.jsx(E, { className: "w-4 h-4" }),
                              "Limpar busca",
                            ],
                          }),
                      ],
                    }),
                  })
                : e.jsx("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3",
                    children: j.map((a, s) =>
                      e.jsxs(
                        T,
                        {
                          className: `group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                            a.isMaster
                              ? "bg-gradient-to-br from-cyan-500/5 via-card to-card border-cyan-500/30 hover:border-cyan-500/50 hover:shadow-cyan-500/10"
                              : "bg-card/80 border-border/50 hover:border-primary/30 hover:shadow-primary/10"
                          }`,
                          onClick: () => R(a),
                          style: {
                            animationDelay: `${s * 30}ms`,
                            animation: "fade-in 0.3s ease-out forwards",
                          },
                          children: [
                            a.isMaster &&
                              e.jsx("div", {
                                className:
                                  "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500",
                              }),
                            e.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            }),
                            e.jsx(z, {
                              className: "relative p-4",
                              children: e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-3",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-3 min-w-0",
                                    children: [
                                      e.jsx("div", {
                                        className: `p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                                          a.isMaster
                                            ? "bg-gradient-to-br from-cyan-500/30 to-blue-500/20 shadow-lg shadow-cyan-500/20"
                                            : "bg-gradient-to-br from-primary/20 to-primary/10"
                                        }`,
                                        children: e.jsx(h, {
                                          className: `w-5 h-5 ${
                                            a.isMaster
                                              ? "text-cyan-600 dark:text-cyan-400"
                                              : "text-primary"
                                          }`,
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "min-w-0",
                                        children: [
                                          e.jsx("h3", {
                                            className:
                                              "font-semibold text-foreground truncate group-hover:text-primary transition-colors",
                                            children: a.name,
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 mt-1",
                                            children: [
                                              a.isMaster
                                                ? e.jsx(b, {
                                                    className:
                                                      "text-[10px] px-2 py-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 shadow-sm",
                                                    children: "MASTER",
                                                  })
                                                : e.jsx(b, {
                                                    variant: "secondary",
                                                    className:
                                                      "text-[10px] px-2 py-0.5 bg-muted/50",
                                                    children: "Compatível",
                                                  }),
                                              e.jsxs("span", {
                                                className:
                                                  "text-[10px] text-muted-foreground flex items-center gap-1",
                                                children: [
                                                  e.jsx(I, {
                                                    className:
                                                      "w-3 h-3 text-emerald-500",
                                                  }),
                                                  a.compatibleCount,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(V, {
                                    className:
                                      "w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        },
                        `${a.name}-${s}`
                      )
                    ),
                  }),
            ],
          }),
          e.jsx(ee, {
            open: B,
            onOpenChange: y,
            children: e.jsxs(ae, {
              className:
                "max-w-lg max-h-[90vh] p-0 gap-0 overflow-hidden bg-gradient-to-b from-card to-card/95 border-border/50 shadow-2xl",
              children: [
                e.jsxs("div", {
                  className: "relative overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className: `absolute inset-0 ${
                        d?.isMaster
                          ? "bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700"
                          : "bg-gradient-to-br from-primary via-primary/90 to-primary"
                      }`,
                    }),
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxLjI1NCAwIDIuNDc4LS4xMjggMy42NTktLjM3MS0yLjE1NS0uNjgyLTQuMTU1LTEuNzQ0LTUuOTA5LTMuMTI0QzI3LjExNSA0NS45MjYgMjMgNDIuNDM5IDIzIDM2YzAtNi40MzkgNC4xMTUtOS45MjYgMTAuNzUtMTIuNTA1QTI5LjI5NCAyOS4yOTQgMCAwMDM2IDE4eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-30",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2",
                    }),
                    e.jsx(se, {
                      className: "relative p-6",
                      children: e.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          e.jsxs("div", {
                            className: "relative",
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute inset-0 bg-white/30 blur-lg rounded-2xl",
                              }),
                              e.jsx("div", {
                                className:
                                  "relative p-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl",
                                children: e.jsx(h, {
                                  className: "w-7 h-7 text-white",
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              e.jsx(te, {
                                className:
                                  "text-xl font-bold text-white truncate",
                                children: d?.searchedModel,
                              }),
                              e.jsx(re, {
                                className:
                                  "text-white/70 mt-1 flex items-center gap-2",
                                children: d?.isMaster
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(b, {
                                          className:
                                            "bg-white/20 text-white border-0 text-[10px]",
                                          children: "MASTER",
                                        }),
                                        e.jsx("span", {
                                          children: "Película Master",
                                        }),
                                      ],
                                    })
                                  : e.jsx("span", {
                                      children: "Modelo Compatível",
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "p-6",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("div", {
                              className: "p-1.5 rounded-lg bg-emerald-500/10",
                              children: e.jsx(I, {
                                className: "w-4 h-4 text-emerald-500",
                              }),
                            }),
                            e.jsx("h4", {
                              className: "font-semibold text-foreground",
                              children: "Modelos Compatíveis",
                            }),
                          ],
                        }),
                        e.jsxs(b, {
                          variant: "secondary",
                          className: "font-medium",
                          children: [
                            d?.compatibleModels.length || 0,
                            " modelos",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "max-h-[45vh] overflow-y-auto pr-2",
                      children:
                        d && d.compatibleModels.length > 0
                          ? e.jsx("div", {
                              className: "grid grid-cols-1 gap-2",
                              children: d.compatibleModels.map((a, s) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50 hover:from-primary/10 hover:to-primary/5 hover:border-primary/30 transition-all duration-200",
                                    style: {
                                      animationDelay: `${s * 20}ms`,
                                      animation:
                                        "fade-in 0.2s ease-out forwards",
                                    },
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200",
                                        children: e.jsx(S, {
                                          className: "w-4 h-4 text-primary",
                                        }),
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "text-sm font-medium text-foreground flex-1",
                                        children: a,
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity",
                                        children: [
                                          e.jsx(I, {
                                            className:
                                              "w-4 h-4 text-emerald-500",
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-xs text-emerald-600 dark:text-emerald-400 font-medium",
                                            children: "Compatível",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  s
                                )
                              ),
                            })
                          : e.jsxs("div", {
                              className:
                                "text-center py-12 text-muted-foreground",
                              children: [
                                e.jsxs("div", {
                                  className: "relative inline-block mb-4",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-muted/50 blur-xl rounded-full",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "relative w-16 h-16 rounded-2xl bg-muted/30 flex items-center justify-center mx-auto",
                                      children: e.jsx(h, {
                                        className: "w-8 h-8 opacity-30",
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "font-medium",
                                  children: "Nenhum modelo compatível",
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground/70 mt-1",
                                  children:
                                    "Este modelo não possui compatibilidades registradas",
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "flex justify-end items-center p-4 border-t border-border/50 bg-muted/20",
                  children: e.jsx(C, {
                    onClick: () => y(!1),
                    className: "gap-2 min-w-[100px]",
                    children: "Fechar",
                  }),
                }),
              ],
            }),
          }),
        ],
      })
    : null;
}
export { ce as default };
