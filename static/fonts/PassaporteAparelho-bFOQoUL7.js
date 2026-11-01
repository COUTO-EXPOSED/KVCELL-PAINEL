import {
  bG as g,
  r as n,
  w as b,
  j as e,
  s as y,
  b_ as v,
  G as t,
  a1 as r,
  ba as w,
  S as m,
  bM as _,
  bO as o,
  b$ as p,
  f as h,
  b4 as C,
  b3 as d,
  C as k,
} from "./index-V8ZHCWL2.js";
function E() {
  const { imei: c } = g(),
    [u, j] = n.useState(!0),
    [a, f] = n.useState(null),
    [l, N] = n.useState("");
  n.useEffect(() => {
    (async () => {
      try {
        const { data: s, error: x } = await b.functions.invoke(
          "device-passport",
          { body: { identifier: c } }
        );
        if (x) throw x;
        if (s?.error) throw new Error(s.error);
        f(s);
      } catch (s) {
        N(s?.message || "Erro");
      } finally {
        j(!1);
      }
    })();
  }, [c]);
  const i = (s) => (s ? new Date(s).toLocaleDateString("pt-BR") : "—");
  return u
    ? e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/5",
        children: e.jsx(y, {
          className: "w-10 h-10 animate-spin text-primary",
        }),
      })
    : e.jsx("div", {
        className:
          "min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-8 px-4",
        children: e.jsxs("div", {
          className: "max-w-2xl mx-auto space-y-6",
          children: [
            e.jsxs("div", {
              className: "text-center space-y-2",
              children: [
                e.jsx("div", {
                  className:
                    "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-2",
                  children: e.jsx(v, { className: "w-7 h-7 text-primary" }),
                }),
                e.jsx("h1", {
                  className: "text-3xl font-bold",
                  children: "Passaporte do Aparelho",
                }),
                e.jsx("p", {
                  className: "text-sm text-muted-foreground",
                  children: "Histórico técnico verificado e auditável",
                }),
                e.jsx("code", {
                  className:
                    "inline-block text-xs font-mono bg-muted px-3 py-1 rounded mt-2",
                  children: c,
                }),
              ],
            }),
            l &&
              e.jsx(t, {
                className: "border-red-500/30 bg-red-500/5",
                children: e.jsxs(r, {
                  className: "p-4 flex items-center gap-2 text-sm",
                  children: [
                    e.jsx(w, { className: "w-4 h-4 text-red-500" }),
                    l,
                  ],
                }),
              }),
            a &&
              !a.found &&
              e.jsx(t, {
                children: e.jsxs(r, {
                  className: "p-8 text-center space-y-3",
                  children: [
                    e.jsx(m, { className: "w-12 h-12 mx-auto opacity-30" }),
                    e.jsx("p", {
                      className: "font-semibold",
                      children: "Nenhum reparo registrado",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Este aparelho ainda não passou por uma assistência da nossa rede.",
                    }),
                  ],
                }),
              }),
            a?.found &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx(t, {
                    className:
                      "border-2 border-green-500/30 bg-gradient-to-r from-green-500/10 to-transparent",
                    children: e.jsxs(r, {
                      className: "p-4 flex items-center gap-3",
                      children: [
                        e.jsx(_, { className: "w-8 h-8 text-green-600" }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "font-bold text-green-700 dark:text-green-400",
                              children: "Aparelho verificado",
                            }),
                            e.jsxs("p", {
                              className: "text-xs text-muted-foreground",
                              children: [
                                a.summary.total_services,
                                " ",
                                a.summary.total_services === 1
                                  ? "atendimento técnico registrado"
                                  : "atendimentos técnicos registrados",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                    children: [
                      e.jsx(t, {
                        className: "border-2",
                        children: e.jsxs(r, {
                          className: "p-3 text-center",
                          children: [
                            e.jsx(o, {
                              className:
                                "w-4 h-4 mx-auto text-muted-foreground",
                            }),
                            e.jsx("p", {
                              className: "text-2xl font-bold mt-1",
                              children: a.summary.total_services,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Reparos",
                            }),
                          ],
                        }),
                      }),
                      e.jsx(t, {
                        className: "border-2",
                        children: e.jsxs(r, {
                          className: "p-3 text-center",
                          children: [
                            e.jsx(p, {
                              className:
                                "w-4 h-4 mx-auto text-muted-foreground",
                            }),
                            e.jsx("p", {
                              className: "text-2xl font-bold mt-1",
                              children: a.summary.shops,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Lojas",
                            }),
                          ],
                        }),
                      }),
                      e.jsx(t, {
                        className: "border-2",
                        children: e.jsxs(r, {
                          className: "p-3 text-center",
                          children: [
                            e.jsx(h, {
                              className: "w-4 h-4 mx-auto text-green-600",
                            }),
                            e.jsx("p", {
                              className:
                                "text-2xl font-bold mt-1 text-green-600",
                              children: a.summary.active_warranties,
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Garantias ativas",
                            }),
                          ],
                        }),
                      }),
                      e.jsx(t, {
                        className: "border-2",
                        children: e.jsxs(r, {
                          className: "p-3 text-center",
                          children: [
                            e.jsx(C, {
                              className:
                                "w-4 h-4 mx-auto text-muted-foreground",
                            }),
                            e.jsx("p", {
                              className: "text-sm font-bold mt-1",
                              children: i(a.summary.first_seen),
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "1º atendimento",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  a.summary.device &&
                    e.jsx(t, {
                      children: e.jsxs(r, {
                        className: "p-4 flex items-center gap-3",
                        children: [
                          e.jsx(m, { className: "w-6 h-6 text-primary" }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children: "Aparelho identificado",
                              }),
                              e.jsx("p", {
                                className: "font-semibold",
                                children: a.summary.device,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsxs("h2", {
                        className: "text-lg font-bold flex items-center gap-2",
                        children: [
                          e.jsx(o, { className: "w-4 h-4" }),
                          " Linha do tempo técnica",
                        ],
                      }),
                      a.orders.map((s) =>
                        e.jsx(
                          t,
                          {
                            className:
                              "border hover:border-primary/40 transition",
                            children: e.jsxs(r, {
                              className: "p-4 space-y-2",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-start justify-between gap-2 flex-wrap",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-2 flex-wrap",
                                      children: [
                                        e.jsxs(d, {
                                          variant: "outline",
                                          className: "font-mono text-xs",
                                          children: ["#", s.order_number],
                                        }),
                                        e.jsx(d, {
                                          className:
                                            s.status === "completed" ||
                                            s.status === "delivered" ||
                                            s.status === "Retirado"
                                              ? "bg-green-500/15 text-green-600 border-green-500/30"
                                              : "bg-blue-500/15 text-blue-600 border-blue-500/30",
                                          children: s.status,
                                        }),
                                        s.warranty_expires_at &&
                                          new Date(s.warranty_expires_at) >
                                            new Date() &&
                                          e.jsxs(d, {
                                            className:
                                              "bg-emerald-500/15 text-emerald-600 border-emerald-500/30 gap-1",
                                            children: [
                                              e.jsx(h, {
                                                className: "w-3 h-3",
                                              }),
                                              " Garantia até ",
                                              i(s.warranty_expires_at),
                                            ],
                                          }),
                                      ],
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: i(s.created_at),
                                    }),
                                  ],
                                }),
                                e.jsxs("p", {
                                  className: "font-semibold text-sm",
                                  children: [
                                    s.device_brand,
                                    " ",
                                    s.device_model,
                                  ],
                                }),
                                s.problem_description &&
                                  e.jsxs("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: ["📋 ", s.problem_description],
                                  }),
                                s.service_description &&
                                  e.jsxs("p", {
                                    className: "text-xs flex items-start gap-1",
                                    children: [
                                      e.jsx(k, {
                                        className:
                                          "w-3 h-3 text-green-600 mt-0.5 shrink-0",
                                      }),
                                      e.jsx("span", {
                                        children: s.service_description,
                                      }),
                                    ],
                                  }),
                                e.jsxs("div", {
                                  className:
                                    "text-xs text-muted-foreground pt-2 border-t flex justify-between flex-wrap gap-2",
                                  children: [
                                    e.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        e.jsx(p, { className: "w-3 h-3" }),
                                        s.shop?.company_name || "Assistência",
                                        " ",
                                        s.shop?.city
                                          ? `• ${s.shop.city}/${
                                              s.shop.state || ""
                                            }`
                                          : "",
                                      ],
                                    }),
                                    e.jsxs("span", {
                                      children: [
                                        "Cliente: ",
                                        s.client_name_masked,
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
                    ],
                  }),
                ],
              }),
            e.jsx("p", {
              className: "text-center text-xs text-muted-foreground pt-4",
              children:
                "🔒 Dados sensíveis protegidos. Informações fornecidas pelas assistências cadastradas.",
            }),
          ],
        }),
      });
}
export { E as default };
