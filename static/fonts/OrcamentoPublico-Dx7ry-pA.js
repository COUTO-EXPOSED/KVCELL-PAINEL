import {
  bG as U,
  r as n,
  i as $,
  w as y,
  j as e,
  G as c,
  a1 as i,
  ba as G,
  bJ as J,
  bQ as K,
  bz as V,
  N as X,
  bl as Y,
  bj as p,
  ct as z,
  Y as h,
  $ as u,
  K as W,
  S as Z,
  b4 as ee,
  B as v,
  bK as se,
  bx as O,
  bT as E,
  b3 as j,
  bk as ae,
} from "./index-V8ZHCWL2.js";
import {
  T as te,
  a as re,
  b as M,
  c as f,
  d as ne,
  e as b,
} from "./table-Dmiq7g5Z.js";
import { g as ce } from "./quotationPDFGenerator-D-0ir42U.js";
import { T as ie } from "./ThemeToggleButton-DN8EhluE.js";
import { p as oe } from "./pt-XKM20doT.js";
import "./sun-P4wkve1z.js";
function ue() {
  const { accessToken: g } = U(),
    [s, w] = n.useState(null),
    [t, P] = n.useState(null),
    [F, R] = n.useState(!0),
    [_, T] = n.useState(!1),
    [B, k] = n.useState(!1),
    { toast: N } = $(),
    o = t?.selected_currency === "EUR" || t?.company_document_type === "nif",
    S = o ? "€" : "R$",
    l = o ? oe : ae,
    C = o ? "NIF" : "CPF/CNPJ",
    q = o ? "Morada" : "Endereço",
    d = (a) =>
      o
        ? new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR",
          }).format(a)
        : new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(a);
  n.useEffect(() => {
    g && A();
  }, [g]);
  const A = async () => {
      try {
        const { data: a, error: r } = await y
          .from("quotations")
          .select("*")
          .eq("access_token", g)
          .maybeSingle();
        if (r) throw r;
        if (!a) {
          k(!0);
          return;
        }
        const x = {
          ...a,
          services: Array.isArray(a.services)
            ? a.services
            : JSON.parse(a.services || "[]"),
        };
        w(x);
        const { data: Q } = await y
          .from("user_settings")
          .select(
            "company_name, company_cnpj, company_address, company_phone, company_email, company_logo, selected_currency, company_document_type, quotation_pdf_color"
          )
          .eq("user_id", a.user_id)
          .maybeSingle();
        P(Q);
      } catch {
        k(!0);
      } finally {
        R(!1);
      }
    },
    D = async (a) => {
      if (s) {
        T(!0);
        try {
          const r = { status: a };
          a === "approved"
            ? (r.approved_at = new Date().toISOString())
            : (r.rejected_at = new Date().toISOString());
          const { error: x } = await y
            .from("quotations")
            .update(r)
            .eq("id", s.id);
          if (x) throw x;
          w({ ...s, status: a }),
            N({
              title: "Sucesso",
              description: `Orçamento ${
                a === "approved" ? "aprovado" : "recusado"
              } com sucesso!`,
            });
        } catch {
          N({
            title: "Erro",
            description: "Falha ao atualizar status do orçamento",
            variant: "destructive",
          });
        } finally {
          T(!1);
        }
      }
    },
    I = async () => {
      if (s)
        try {
          await ce(s, t);
        } catch {
          N({
            title: "Erro",
            description: "Falha ao gerar PDF",
            variant: "destructive",
          });
        }
    };
  if (F)
    return e.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-950 dark:to-neutral-900",
      children: e.jsx("div", {
        className:
          "animate-spin rounded-full h-12 w-12 border-b-2 border-primary",
      }),
    });
  if (B || !s)
    return e.jsx("div", {
      className:
        "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-950 dark:to-neutral-900 p-4",
      children: e.jsx(c, {
        className: "max-w-md w-full text-center",
        children: e.jsxs(i, {
          className: "pt-6",
          children: [
            e.jsx(G, {
              className: "h-16 w-16 text-muted-foreground mx-auto mb-4",
            }),
            e.jsx("h2", {
              className: "text-xl font-semibold mb-2",
              children: "Orçamento não encontrado",
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children:
                "O orçamento que você está procurando não existe ou foi removido.",
            }),
          ],
        }),
      }),
    });
  const m = new Date(s.validity_date + "T23:59:59") < new Date(),
    H = s.status === "pending" && !m,
    L = () =>
      s.status === "approved"
        ? e.jsx(j, {
            className: "bg-green-500 text-white text-lg px-4 py-1",
            children: "Aprovado",
          })
        : s.status === "rejected"
        ? e.jsx(j, {
            className: "bg-red-500 text-white text-lg px-4 py-1",
            children: "Recusado",
          })
        : m
        ? e.jsx(j, {
            className: "bg-orange-500 text-white text-lg px-4 py-1",
            children: "Expirado",
          })
        : e.jsx(j, {
            className: "bg-blue-500 text-white text-lg px-4 py-1",
            children: "Aguardando Aprovação",
          });
  return e.jsx("div", {
    className:
      "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-950 dark:to-neutral-900 py-8 px-4",
    children: e.jsxs("div", {
      className: "max-w-4xl mx-auto space-y-6",
      children: [
        e.jsx("div", {
          className: "flex justify-end",
          children: e.jsx(ie, {}),
        }),
        e.jsxs(c, {
          className: "overflow-hidden border-border",
          children: [
            e.jsx("div", {
              className:
                "bg-gradient-to-r from-zinc-800 to-zinc-700 dark:from-zinc-900 dark:to-zinc-800 p-6 text-white",
              children: e.jsxs("div", {
                className:
                  "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      t?.company_logo
                        ? e.jsx("img", {
                            src: t.company_logo,
                            alt: "Logo",
                            className:
                              "h-16 w-16 object-contain bg-white rounded-lg p-1",
                          })
                        : e.jsx("div", {
                            className:
                              "h-16 w-16 bg-white/20 rounded-lg flex items-center justify-center",
                            children: e.jsx(J, { className: "h-8 w-8" }),
                          }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h1", {
                            className: "text-2xl font-bold",
                            children: t?.company_name || "Assistência Técnica",
                          }),
                          t?.company_cnpj &&
                            e.jsxs("p", {
                              className: "text-white/80 text-sm",
                              children: [C, ": ", t.company_cnpj],
                            }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "text-right text-sm text-white/80",
                    children: [
                      t?.company_address &&
                        e.jsxs("p", {
                          className: "flex items-center gap-1 justify-end",
                          children: [
                            e.jsx(K, { className: "h-3 w-3" }),
                            t.company_address,
                          ],
                        }),
                      t?.company_phone &&
                        e.jsxs("p", {
                          className: "flex items-center gap-1 justify-end",
                          children: [
                            e.jsx(V, { className: "h-3 w-3" }),
                            t.company_phone,
                          ],
                        }),
                      t?.company_email &&
                        e.jsxs("p", {
                          className: "flex items-center gap-1 justify-end",
                          children: [
                            e.jsx(X, { className: "h-3 w-3" }),
                            t.company_email,
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs(i, {
              className: "p-6 bg-card",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsxs("h2", {
                          className:
                            "text-xl font-bold flex items-center gap-2 text-foreground",
                          children: [
                            e.jsx(Y, { className: "h-5 w-5 text-primary" }),
                            "Orçamento ",
                            s.quotation_number,
                          ],
                        }),
                        e.jsxs("p", {
                          className: "text-sm text-muted-foreground",
                          children: [
                            "Emitido em ",
                            p(new Date(s.created_at), "dd/MM/yyyy", {
                              locale: l,
                            }),
                          ],
                        }),
                      ],
                    }),
                    L(),
                  ],
                }),
                e.jsx(z, { className: "mb-6" }),
                e.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-6 mb-6",
                  children: [
                    e.jsxs(c, {
                      className: "border-2 border-border bg-card",
                      children: [
                        e.jsx(h, {
                          className: "pb-2",
                          children: e.jsxs(u, {
                            className:
                              "text-base flex items-center gap-2 text-foreground",
                            children: [
                              e.jsx(W, { className: "h-4 w-4 text-primary" }),
                              "Dados do Cliente",
                            ],
                          }),
                        }),
                        e.jsxs(i, {
                          className: "text-sm space-y-1 text-foreground",
                          children: [
                            e.jsxs("p", {
                              children: [
                                e.jsx("span", {
                                  className: "font-medium",
                                  children: "Cliente:",
                                }),
                                " ",
                                s.client_name,
                              ],
                            }),
                            s.client_cpf_nif &&
                              e.jsxs("p", {
                                children: [
                                  e.jsxs("span", {
                                    className: "font-medium",
                                    children: [C, ":"],
                                  }),
                                  " ",
                                  s.client_cpf_nif,
                                ],
                              }),
                            s.client_phone &&
                              e.jsxs("p", {
                                children: [
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: "Telefone:",
                                  }),
                                  " ",
                                  s.client_phone,
                                ],
                              }),
                            s.client_address &&
                              e.jsxs("p", {
                                children: [
                                  e.jsxs("span", {
                                    className: "font-medium",
                                    children: [q, ":"],
                                  }),
                                  " ",
                                  s.client_address,
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(c, {
                      className: "border-2 border-border bg-card",
                      children: [
                        e.jsx(h, {
                          className: "pb-2",
                          children: e.jsxs(u, {
                            className:
                              "text-base flex items-center gap-2 text-foreground",
                            children: [
                              e.jsx(Z, { className: "h-4 w-4 text-primary" }),
                              "Dados do Aparelho",
                            ],
                          }),
                        }),
                        e.jsxs(i, {
                          className: "text-sm space-y-1 text-foreground",
                          children: [
                            e.jsxs("p", {
                              children: [
                                e.jsx("span", {
                                  className: "font-medium",
                                  children: "Marca:",
                                }),
                                " ",
                                s.device_brand,
                              ],
                            }),
                            e.jsxs("p", {
                              children: [
                                e.jsx("span", {
                                  className: "font-medium",
                                  children: "Modelo:",
                                }),
                                " ",
                                s.device_model,
                              ],
                            }),
                            s.device_color &&
                              e.jsxs("p", {
                                children: [
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: "Cor:",
                                  }),
                                  " ",
                                  s.device_color,
                                ],
                              }),
                            s.device_imei &&
                              e.jsxs("p", {
                                children: [
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: "IMEI:",
                                  }),
                                  " ",
                                  s.device_imei,
                                ],
                              }),
                            s.device_serial &&
                              e.jsxs("p", {
                                children: [
                                  e.jsx("span", {
                                    className: "font-medium",
                                    children: "Série:",
                                  }),
                                  " ",
                                  s.device_serial,
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(c, {
                  className: "border-2 border-border mb-6 bg-card",
                  children: [
                    e.jsx(h, {
                      className: "pb-2 bg-muted/50",
                      children: e.jsx(u, {
                        className: "text-base text-foreground",
                        children: "Descrição dos Serviços",
                      }),
                    }),
                    e.jsx(i, {
                      className: "p-0",
                      children: e.jsxs(te, {
                        children: [
                          e.jsx(re, {
                            children: e.jsxs(M, {
                              className:
                                "bg-zinc-800 dark:bg-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-900",
                              children: [
                                e.jsx(f, {
                                  className: "text-white font-semibold",
                                  children: "Descrição do Serviço",
                                }),
                                e.jsx(f, {
                                  className:
                                    "text-white font-semibold text-center",
                                  children: "Qtd.",
                                }),
                                e.jsxs(f, {
                                  className:
                                    "text-white font-semibold text-right",
                                  children: ["Unitário (", S, ")"],
                                }),
                                e.jsxs(f, {
                                  className:
                                    "text-white font-semibold text-right",
                                  children: ["Total (", S, ")"],
                                }),
                              ],
                            }),
                          }),
                          e.jsx(ne, {
                            children: s.services.map((a, r) =>
                              e.jsxs(
                                M,
                                {
                                  className:
                                    r % 2 === 0 ? "bg-muted/30" : "bg-card",
                                  children: [
                                    e.jsx(b, {
                                      className: "font-medium text-foreground",
                                      children: a.description,
                                    }),
                                    e.jsx(b, {
                                      className: "text-center text-foreground",
                                      children: a.quantity,
                                    }),
                                    e.jsx(b, {
                                      className: "text-right text-foreground",
                                      children: d(a.unit_price),
                                    }),
                                    e.jsx(b, {
                                      className:
                                        "text-right font-semibold text-foreground",
                                      children: d(a.total),
                                    }),
                                  ],
                                },
                                r
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex justify-end mb-6",
                  children: e.jsxs("div", {
                    className: "w-64 space-y-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between",
                        children: [
                          e.jsx("span", {
                            className: "text-muted-foreground",
                            children: "Subtotal:",
                          }),
                          e.jsx("span", {
                            className: "font-medium text-foreground",
                            children: d(s.subtotal),
                          }),
                        ],
                      }),
                      s.discount > 0 &&
                        e.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "Desconto:",
                            }),
                            e.jsxs("span", {
                              className: "font-medium text-red-500",
                              children: ["-", d(s.discount)],
                            }),
                          ],
                        }),
                      e.jsx(z, {}),
                      e.jsxs("div", {
                        className: "flex justify-between text-lg",
                        children: [
                          e.jsx("span", {
                            className: "font-bold text-foreground",
                            children: "Total Geral:",
                          }),
                          e.jsx("span", {
                            className: "font-bold text-primary",
                            children: d(s.total),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                s.observations &&
                  e.jsxs(c, {
                    className:
                      "border-2 mb-6 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
                    children: [
                      e.jsx(h, {
                        className: "pb-2",
                        children: e.jsx(u, {
                          className: "text-base text-foreground",
                          children: "Observações",
                        }),
                      }),
                      e.jsx(i, {
                        children: e.jsx("p", {
                          className:
                            "text-sm whitespace-pre-line text-foreground",
                          children: s.observations,
                        }),
                      }),
                    ],
                  }),
                e.jsxs("div", {
                  className: "flex items-center gap-2 text-sm mb-6",
                  children: [
                    e.jsx(ee, { className: "h-4 w-4 text-muted-foreground" }),
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: "Válido até:",
                    }),
                    e.jsx("span", {
                      className: `font-bold ${
                        m ? "text-red-500" : "text-primary"
                      }`,
                      children: p(
                        new Date(s.validity_date + "T12:00:00"),
                        "dd/MM/yyyy",
                        { locale: l }
                      ),
                    }),
                    m &&
                      e.jsx("span", {
                        className: "text-red-500 text-xs font-medium",
                        children: "(Expirado)",
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row gap-4 justify-between items-center pt-4 border-t",
                  children: [
                    e.jsxs(v, {
                      variant: "outline",
                      onClick: I,
                      children: [
                        e.jsx(se, { className: "h-4 w-4 mr-2" }),
                        "Imprimir PDF",
                      ],
                    }),
                    H &&
                      e.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          e.jsxs(v, {
                            variant: "outline",
                            size: "lg",
                            className:
                              "text-red-600 dark:text-red-400 border-red-300 dark:border-red-700 hover:bg-red-50 dark:hover:bg-red-950/50",
                            onClick: () => D("rejected"),
                            disabled: _,
                            children: [
                              e.jsx(O, { className: "h-5 w-5 mr-2" }),
                              "Recusar Orçamento",
                            ],
                          }),
                          e.jsxs(v, {
                            size: "lg",
                            className: "bg-green-600 hover:bg-green-700",
                            onClick: () => D("approved"),
                            disabled: _,
                            children: [
                              e.jsx(E, { className: "h-5 w-5 mr-2" }),
                              "Aprovar Orçamento",
                            ],
                          }),
                        ],
                      }),
                    s.status === "approved" &&
                      e.jsxs("div", {
                        className:
                          "text-green-600 font-semibold flex items-center gap-2",
                        children: [
                          e.jsx(E, { className: "h-5 w-5" }),
                          "Orçamento aprovado em ",
                          p(new Date(s.approved_at), "dd/MM/yyyy 'às' HH:mm", {
                            locale: l,
                          }),
                        ],
                      }),
                    s.status === "rejected" &&
                      e.jsxs("div", {
                        className:
                          "text-red-600 font-semibold flex items-center gap-2",
                        children: [
                          e.jsx(O, { className: "h-5 w-5" }),
                          "Orçamento recusado em ",
                          p(new Date(s.rejected_at), "dd/MM/yyyy 'às' HH:mm", {
                            locale: l,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("p", {
          className: "text-center text-sm text-muted-foreground",
          children:
            "Este orçamento foi gerado automaticamente pelo sistema Tech OS PRO",
        }),
      ],
    }),
  });
}
export { ue as default };
