import {
  r as n,
  w as c,
  j as e,
  d1 as f,
  bV as m,
  G as h,
  bL as w,
  c2 as N,
  ek as v,
  b3 as p,
  C as b,
} from "./index-V8ZHCWL2.js";
function _() {
  const [o, x] = n.useState([]),
    [u, r] = n.useState(!0);
  return (
    n.useEffect(() => {
      (async () => {
        try {
          const {
            data: { user: s },
          } = await c.auth.getUser();
          if (!s) {
            r(!1);
            return;
          }
          const { data: a } = await c
            .from("user_update_views")
            .select("update_id, viewed_at")
            .eq("user_id", s.id)
            .order("viewed_at", { ascending: !1 });
          if (!a || a.length === 0) {
            x([]), r(!1);
            return;
          }
          const d = a.map((t) => t.update_id),
            { data: l } = await c
              .from("system_updates")
              .select("id,title,description,changes,version,sent_at")
              .in("id", d),
            i = new Map(a.map((t) => [t.update_id, t.viewed_at])),
            g = (l || [])
              .map((t) => ({
                ...t,
                changes: Array.isArray(t.changes) ? t.changes : [],
                viewed_at: i.get(t.id),
              }))
              .sort(
                (t, j) =>
                  new Date(j.viewed_at).getTime() -
                  new Date(t.viewed_at).getTime()
              );
          x(g);
        } catch {
        } finally {
          r(!1);
        }
      })();
    }, []),
    e.jsxs("div", {
      className: "container mx-auto p-4 md:p-8 max-w-4xl",
      children: [
        e.jsxs("div", {
          className: "mb-6 flex items-center gap-3",
          children: [
            e.jsx("div", {
              className:
                "h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg",
              children: e.jsx(f, {
                className: "h-6 w-6 text-primary-foreground",
              }),
            }),
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className: "text-2xl md:text-3xl font-bold",
                  children: "Histórico de Atualizações",
                }),
                e.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children:
                    "Todas as novidades e melhorias que você já visualizou.",
                }),
              ],
            }),
          ],
        }),
        u
          ? e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsx(m, { className: "h-32 w-full" }),
                e.jsx(m, { className: "h-32 w-full" }),
                e.jsx(m, { className: "h-32 w-full" }),
              ],
            })
          : o.length === 0
          ? e.jsxs(h, {
              className: "p-12 text-center text-muted-foreground",
              children: [
                e.jsx(w, { className: "w-12 h-12 mx-auto mb-4 opacity-50" }),
                e.jsx("p", {
                  className: "font-medium",
                  children: "Nenhuma atualização visualizada ainda.",
                }),
                e.jsx("p", {
                  className: "text-sm mt-1",
                  children:
                    "Quando o sistema receber novas atualizações, elas aparecerão aqui.",
                }),
              ],
            })
          : e.jsx(N, {
              className: "max-h-[calc(100vh-200px)]",
              children: e.jsx("div", {
                className: "space-y-4 pr-2",
                children: o.map((s) =>
                  e.jsx(
                    h,
                    {
                      className: "p-5 hover:shadow-md transition-shadow",
                      children: e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0",
                            children: e.jsx(v, {
                              className: "h-5 w-5 text-primary",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-2 flex-wrap mb-1",
                                children: [
                                  e.jsx("h3", {
                                    className: "font-bold text-base",
                                    children: s.title,
                                  }),
                                  s.version &&
                                    e.jsxs(p, {
                                      variant: "outline",
                                      children: ["v", s.version],
                                    }),
                                  e.jsxs(p, {
                                    className:
                                      "gap-1 bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/30",
                                    children: [
                                      e.jsx(b, { className: "w-3 h-3" }),
                                      " Visualizada",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("p", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                  s.sent_at &&
                                    e.jsxs(e.Fragment, {
                                      children: [
                                        "Publicada em ",
                                        new Date(s.sent_at).toLocaleDateString(
                                          "pt-BR",
                                          {
                                            day: "2-digit",
                                            month: "long",
                                            year: "numeric",
                                          }
                                        ),
                                        " • ",
                                      ],
                                    }),
                                  "Vista em ",
                                  new Date(s.viewed_at).toLocaleDateString(
                                    "pt-BR",
                                    {
                                      day: "2-digit",
                                      month: "long",
                                      year: "numeric",
                                    }
                                  ),
                                ],
                              }),
                              s.description &&
                                e.jsx("p", {
                                  className:
                                    "text-sm mt-3 text-muted-foreground",
                                  children: s.description,
                                }),
                              s.changes.length > 0 &&
                                e.jsxs("div", {
                                  className:
                                    "mt-3 rounded-xl border border-border/50 bg-muted/30 p-4",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2",
                                      children: "O que mudou",
                                    }),
                                    e.jsx("ul", {
                                      className: "space-y-1.5",
                                      children: s.changes.map((a, d) => {
                                        const l =
                                            typeof a == "string"
                                              ? a
                                              : a?.title ?? "",
                                          i =
                                            typeof a == "object" && a
                                              ? a.description
                                              : null;
                                        return e.jsxs(
                                          "li",
                                          {
                                            className: "text-sm flex gap-2",
                                            children: [
                                              e.jsx("span", {
                                                className:
                                                  "text-primary font-bold mt-0.5",
                                                children: "✓",
                                              }),
                                              e.jsxs("span", {
                                                children: [
                                                  e.jsx("span", {
                                                    className: "font-medium",
                                                    children: l,
                                                  }),
                                                  i &&
                                                    e.jsx("span", {
                                                      className:
                                                        "block text-xs text-muted-foreground mt-0.5",
                                                      children: i,
                                                    }),
                                                ],
                                              }),
                                            ],
                                          },
                                          d
                                        );
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
    })
  );
}
export { _ as default };
