import {
  bG as T,
  r as n,
  w as i,
  j as e,
  G as r,
  ba as R,
  bT as y,
  h as B,
  S as D,
  bO as I,
  c0 as P,
  C as q,
  bx as L,
  bw as z,
  ad as U,
  b4 as V,
  bI as _,
  f as G,
  K as M,
  B as K,
  bU as w,
} from "./index-V8ZHCWL2.js";
import { T as W } from "./ThemeToggleButton-DN8EhluE.js";
import "./sun-P4wkve1z.js";
const J = () => {
  const { approvalToken: l } = T(),
    [s, S] = n.useState(null),
    [o, k] = n.useState(null),
    [C, m] = n.useState(!0),
    [x, p] = n.useState(!1),
    [h, u] = n.useState(!1),
    [A, j] = n.useState(!1),
    [f, b] = n.useState(null);
  n.useEffect(() => {
    l && F();
  }, [l]);
  const F = async () => {
      try {
        const { data: a, error: t } = await i
          .from("service_orders")
          .select("*")
          .eq("approval_token", l)
          .maybeSingle();
        if (t || !a) {
          j(!0), m(!1);
          return;
        }
        S(a), a.approval_status === "approved" && u(!0);
        const { data: v } = await i
          .from("user_settings")
          .select("company_name, company_phone, company_logo, company_address")
          .eq("user_id", a.user_id)
          .maybeSingle();
        v && k(v);
      } catch {
        j(!0);
      } finally {
        m(!1);
      }
    },
    O = async () => {
      if (s) {
        p(!0);
        try {
          const { error: a } = await i
            .from("service_orders")
            .update({
              approval_status: "approved",
              approved_at: new Date().toISOString(),
              status: "open",
            })
            .eq("approval_token", l)
            .eq("approval_status", "pending");
          if (a) throw a;
          u(!0), w.success("Ordem de Serviço aprovada com sucesso!");
        } catch {
          w.error("Erro ao aprovar. Tente novamente.");
        } finally {
          p(!1);
        }
      }
    },
    c = (a) => {
      const t = typeof a == "string" ? parseFloat(a.replace(",", ".")) : a;
      return isNaN(t)
        ? a
        : new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(t);
    };
  if (C)
    return e.jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-background",
      children: e.jsxs("div", {
        className: "flex flex-col items-center gap-4",
        children: [
          e.jsx("div", {
            className:
              "w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin",
          }),
          e.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Carregando...",
          }),
        ],
      }),
    });
  if (A)
    return e.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-background p-4",
      children: e.jsxs(r, {
        className: "p-8 text-center max-w-md",
        children: [
          e.jsx(R, { className: "w-12 h-12 text-destructive mx-auto mb-4" }),
          e.jsx("h2", {
            className: "text-xl font-bold mb-2",
            children: "Aprovação não encontrada",
          }),
          e.jsx("p", {
            className: "text-muted-foreground",
            children: "Este link de aprovação é inválido ou já expirou.",
          }),
        ],
      }),
    });
  const g = s?.entry_checklist || [],
    d = s?.down_payment ? parseFloat(s.down_payment) : 0,
    N = s?.service_value ? parseFloat(s.service_value.replace(",", ".")) : 0,
    E = N - d;
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx(W, {}),
      e.jsx("div", {
        className: "bg-primary/5 border-b border-border py-6 px-4",
        children: e.jsxs("div", {
          className: "max-w-2xl mx-auto text-center",
          children: [
            o?.company_logo &&
              e.jsx("img", {
                src: o.company_logo,
                alt: "Logo",
                className: "h-12 mx-auto mb-3 object-contain",
              }),
            e.jsx("h1", {
              className: "text-xl font-bold text-foreground",
              children: o?.company_name || "Aprovação de Orçamento",
            }),
            e.jsxs("p", {
              className: "text-sm text-muted-foreground mt-1",
              children: ["Ordem de Serviço #", s?.order_number],
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "max-w-2xl mx-auto p-4 space-y-4 pb-32",
        children: [
          h
            ? e.jsxs("div", {
                className:
                  "p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-center",
                children: [
                  e.jsx(y, {
                    className: "w-8 h-8 text-green-500 mx-auto mb-2",
                  }),
                  e.jsx("p", {
                    className:
                      "font-semibold text-green-700 dark:text-green-400",
                    children: "OS Aprovada!",
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: [
                      "Aprovada em ",
                      s?.approved_at
                        ? new Date(s.approved_at).toLocaleString("pt-BR")
                        : "—",
                    ],
                  }),
                ],
              })
            : e.jsxs("div", {
                className:
                  "p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-center",
                children: [
                  e.jsx(B, {
                    className: "w-8 h-8 text-amber-500 mx-auto mb-2",
                  }),
                  e.jsx("p", {
                    className:
                      "font-semibold text-amber-700 dark:text-amber-400",
                    children: "Aguardando Aprovação",
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children:
                      "Revise os detalhes abaixo e aprove para iniciar o serviço.",
                  }),
                ],
              }),
          e.jsxs(r, {
            className: "p-4",
            children: [
              e.jsxs("h3", {
                className: "font-semibold text-sm flex items-center gap-2 mb-3",
                children: [
                  e.jsx(D, { className: "w-4 h-4 text-primary" }),
                  "Dispositivo",
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-3 text-sm",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground text-xs",
                        children: "Modelo",
                      }),
                      e.jsx("p", {
                        className: "font-medium",
                        children: s?.device_model,
                      }),
                    ],
                  }),
                  s?.imei &&
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground text-xs",
                          children: "IMEI",
                        }),
                        e.jsx("p", {
                          className: "font-medium",
                          children: s.imei,
                        }),
                      ],
                    }),
                  s?.serial &&
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground text-xs",
                          children: "Serial",
                        }),
                        e.jsx("p", {
                          className: "font-medium",
                          children: s.serial,
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          e.jsxs(r, {
            className: "p-4",
            children: [
              e.jsxs("h3", {
                className: "font-semibold text-sm flex items-center gap-2 mb-3",
                children: [
                  e.jsx(I, { className: "w-4 h-4 text-primary" }),
                  "Problema Relatado",
                ],
              }),
              e.jsx("p", {
                className: "text-sm text-foreground",
                children: s?.reported_problem,
              }),
              s?.additional_notes &&
                e.jsxs("div", {
                  className: "mt-3 pt-3 border-t border-border",
                  children: [
                    e.jsx("span", {
                      className: "text-xs text-muted-foreground",
                      children: "Observações",
                    }),
                    e.jsx("p", {
                      className: "text-sm",
                      children: s.additional_notes,
                    }),
                  ],
                }),
            ],
          }),
          g.length > 0 &&
            e.jsxs(r, {
              className: "p-4",
              children: [
                e.jsxs("h3", {
                  className:
                    "font-semibold text-sm flex items-center gap-2 mb-3",
                  children: [
                    e.jsx(P, { className: "w-4 h-4 text-primary" }),
                    "Checklist de Entrada",
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-2 gap-2",
                  children: g.map((a) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2 text-sm",
                        children: [
                          a.checked
                            ? e.jsx(q, {
                                className:
                                  "w-4 h-4 text-green-500 flex-shrink-0",
                              })
                            : e.jsx(L, {
                                className:
                                  "w-4 h-4 text-destructive flex-shrink-0",
                              }),
                          e.jsx("span", { children: a.label }),
                        ],
                      },
                      a.id
                    )
                  ),
                }),
              ],
            }),
          s?.photos &&
            s.photos.length > 0 &&
            e.jsxs(r, {
              className: "p-4",
              children: [
                e.jsxs("h3", {
                  className:
                    "font-semibold text-sm flex items-center gap-2 mb-3",
                  children: [
                    e.jsx(z, { className: "w-4 h-4 text-primary" }),
                    "Fotos de Entrada",
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-3 gap-2",
                  children: s.photos.map((a, t) =>
                    e.jsx(
                      "img",
                      {
                        src: a,
                        alt: `Foto ${t + 1}`,
                        className:
                          "rounded-lg w-full h-24 object-cover cursor-pointer hover:opacity-80 transition-opacity",
                        onClick: () => b(a),
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          e.jsxs(r, {
            className: "p-4",
            children: [
              e.jsxs("h3", {
                className: "font-semibold text-sm flex items-center gap-2 mb-3",
                children: [
                  e.jsx(U, { className: "w-4 h-4 text-primary" }),
                  "Valores",
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsxs("div", {
                    className: "flex justify-between items-center text-sm",
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Valor do Serviço",
                      }),
                      e.jsx("span", {
                        className: "font-bold text-lg text-primary",
                        children: c(N),
                      }),
                    ],
                  }),
                  d > 0 &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex justify-between items-center text-sm",
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Entrada",
                            }),
                            e.jsxs("span", {
                              className: "text-green-600",
                              children: ["- ", c(d)],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex justify-between items-center text-sm pt-2 border-t border-border",
                          children: [
                            e.jsx("span", {
                              className: "font-medium",
                              children: "Restante",
                            }),
                            e.jsx("span", {
                              className: "font-bold",
                              children: c(E),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          e.jsxs(r, {
            className: "p-4",
            children: [
              e.jsxs("h3", {
                className: "font-semibold text-sm flex items-center gap-2 mb-3",
                children: [
                  e.jsx(V, { className: "w-4 h-4 text-primary" }),
                  "Datas",
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-3 text-sm",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground text-xs",
                        children: "Entrada",
                      }),
                      e.jsx("p", {
                        className: "font-medium",
                        children: _(s?.entry_date),
                      }),
                    ],
                  }),
                  s?.estimated_delivery_date &&
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground text-xs",
                          children: "Previsão de Entrega",
                        }),
                        e.jsx("p", {
                          className: "font-medium",
                          children: _(s.estimated_delivery_date),
                        }),
                      ],
                    }),
                ],
              }),
              s?.technician &&
                e.jsxs("div", {
                  className: "mt-3 pt-3 border-t border-border",
                  children: [
                    e.jsx("span", {
                      className: "text-muted-foreground text-xs",
                      children: "Técnico Responsável",
                    }),
                    e.jsx("p", {
                      className: "font-medium text-sm",
                      children: s.technician,
                    }),
                  ],
                }),
            ],
          }),
          s?.used_parts &&
            s.used_parts.length > 0 &&
            e.jsxs(r, {
              className: "p-4",
              children: [
                e.jsxs("h3", {
                  className:
                    "font-semibold text-sm flex items-center gap-2 mb-3",
                  children: [
                    e.jsx(G, { className: "w-4 h-4 text-primary" }),
                    "Peças Utilizadas",
                  ],
                }),
                e.jsx("div", {
                  className: "space-y-1",
                  children: s.used_parts.map((a, t) =>
                    e.jsxs(
                      "div",
                      {
                        className: "flex justify-between text-sm",
                        children: [
                          e.jsx("span", { children: a.partName }),
                          e.jsxs("span", {
                            className: "text-muted-foreground",
                            children: ["x", a.quantity],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          e.jsxs(r, {
            className: "p-4",
            children: [
              e.jsxs("h3", {
                className: "font-semibold text-sm flex items-center gap-2 mb-3",
                children: [
                  e.jsx(M, { className: "w-4 h-4 text-primary" }),
                  "Dados do Cliente",
                ],
              }),
              e.jsxs("div", {
                className: "space-y-1 text-sm",
                children: [
                  e.jsxs("p", {
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Nome:",
                      }),
                      " ",
                      s?.client_name,
                    ],
                  }),
                  s?.client_phone &&
                    e.jsxs("p", {
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Telefone:",
                        }),
                        " ",
                        s.client_phone,
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      !h &&
        e.jsx("div", {
          className:
            "fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border",
          children: e.jsxs("div", {
            className: "max-w-2xl mx-auto",
            children: [
              e.jsx(K, {
                onClick: O,
                disabled: x,
                className: "w-full h-12 text-base font-semibold",
                size: "lg",
                children: x
                  ? e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          className:
                            "w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2",
                        }),
                        "Aprovando...",
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(y, { className: "w-5 h-5 mr-2" }),
                        "Aprovar Ordem de Serviço",
                      ],
                    }),
              }),
              e.jsx("p", {
                className: "text-xs text-center text-muted-foreground mt-2",
                children:
                  "Ao aprovar, você autoriza a execução do serviço conforme descrito acima.",
              }),
            ],
          }),
        }),
      f &&
        e.jsx("div", {
          className:
            "fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4",
          onClick: () => b(null),
          children: e.jsx("img", {
            src: f,
            alt: "Foto ampliada",
            className: "max-w-full max-h-full object-contain rounded-lg",
          }),
        }),
    ],
  });
};
export { J as default };
