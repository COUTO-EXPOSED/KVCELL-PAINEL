import {
  bG as R,
  r as n,
  j as e,
  G as i,
  X as h,
  h as f,
  bJ as L,
  bl as O,
  b3 as z,
  K as F,
  S as B,
  bO as D,
  b4 as q,
  bI as M,
  ad as U,
  l as _,
  bT as j,
  c1 as V,
  f as $,
  B as S,
  ba as G,
  w as x,
  bU as g,
} from "./index-V8ZHCWL2.js";
import { S as J } from "./index-BS1V7zI7.js";
import { T as K } from "./ThemeToggleButton-DN8EhluE.js";
import { E as W } from "./eraser-BSo0LUNY.js";
import "./sun-P4wkve1z.js";
const C = {
    open: { label: "Aberta", color: "bg-blue-500", icon: f },
    "in-progress": { label: "Em Andamento", color: "bg-amber-500", icon: D },
    pending: { label: "Pendente", color: "bg-orange-500", icon: G },
    "waiting-parts": {
      label: "Aguardando Peça",
      color: "bg-purple-500",
      icon: f,
    },
    completed: { label: "Concluída", color: "bg-emerald-500", icon: j },
    delivered: { label: "Retirado/Finalizado", color: "bg-green-600", icon: j },
    cancelled: { label: "Cancelada", color: "bg-gray-500", icon: h },
    "no-repair": { label: "Sem Reparo", color: "bg-slate-500", icon: h },
  },
  ee = () => {
    const { accessToken: l } = R(),
      [a, o] = n.useState(null),
      [u, A] = n.useState({}),
      [E, b] = n.useState(!0),
      [N, v] = n.useState(!1),
      [T, p] = n.useState(!1),
      c = n.useRef(null);
    n.useEffect(() => {
      (async () => {
        if (!l) {
          b(!1);
          return;
        }
        try {
          let s = null;
          const d = await x
            .from("service_orders")
            .select("*")
            .eq("access_token", l)
            .maybeSingle();
          if (
            (d.data
              ? (s = d.data)
              : l.length <= 8 &&
                (s = (
                  await x
                    .from("service_orders")
                    .select("*")
                    .ilike("access_token", `${l}%`)
                    .limit(1)
                    .maybeSingle()
                ).data),
            !s)
          ) {
            o(null), b(!1);
            return;
          }
          let m = [];
          if (s.entry_checklist)
            try {
              typeof s.entry_checklist == "string"
                ? (m = JSON.parse(s.entry_checklist))
                : Array.isArray(s.entry_checklist) && (m = s.entry_checklist);
            } catch {}
          o({
            id: s.id,
            orderNumber: s.order_number,
            type: s.type,
            clientName: s.client_name,
            clientCPF: s.client_cpf,
            clientPhone: s.client_phone || s.whatsapp,
            deviceModel: s.device_model,
            imei: s.imei,
            serial: s.serial,
            reportedProblem: s.reported_problem,
            serviceValue: s.service_value,
            downPayment: s.down_payment,
            entryDate: s.entry_date,
            estimatedDeliveryDate: s.estimated_delivery_date,
            technician: s.technician,
            status: s.status,
            userId: s.user_id,
            entryChecklist: m,
            additionalNotes: s.additional_notes,
            signatureType: s.signature_type,
            clientSignature: s.client_signature,
            signatureDate: s.signature_date,
            accessToken: s.access_token,
          }),
            s.client_signature && p(!0);
          const { data: t } = await x
            .from("user_settings")
            .select(
              "company_name, company_phone, company_address, company_logo"
            )
            .eq("user_id", s.user_id)
            .single();
          t &&
            A({
              companyName: t.company_name,
              companyPhone: t.company_phone,
              companyAddress: t.company_address,
              companyLogo: t.company_logo,
            });
        } catch {
          o(null);
        } finally {
          b(!1);
        }
      })();
    }, [l]);
    const P = () => {
        c.current?.clear();
      },
      I = async () => {
        if (!c.current || c.current.isEmpty()) {
          g.error("Por favor, faça sua assinatura antes de enviar.");
          return;
        }
        if (a) {
          v(!0);
          try {
            const s = c.current.getCanvas().toDataURL("image/png"),
              d = new Date().toISOString(),
              {
                data: m,
                error: t,
                count: w,
              } = await x
                .from("service_orders")
                .update({
                  client_signature: s,
                  signature_date: d,
                  signature_type: "digital",
                })
                .eq("access_token", a.accessToken)
                .select("id, client_signature, signature_date")
                .maybeSingle();
            if (t) throw new Error(t.message || "Erro ao salvar assinatura");
            if (!m) {
              const { data: k } = await x
                .from("service_orders")
                .select("client_signature")
                .eq("access_token", a.accessToken)
                .maybeSingle();
              if (k?.client_signature) {
                p(!0),
                  g.info("Este documento já foi assinado anteriormente."),
                  o({
                    ...a,
                    clientSignature: k.client_signature,
                    signatureDate: d,
                    signatureType: "digital",
                  });
                return;
              }
              throw new Error(
                "Não foi possível salvar a assinatura. Tente novamente."
              );
            }
            p(!0),
              g.success("Assinatura registrada com sucesso!"),
              o({
                ...a,
                clientSignature: s,
                signatureDate: d,
                signatureType: "digital",
              });
          } catch (r) {
            g.error(
              r?.message || "Erro ao salvar assinatura. Tente novamente."
            );
          } finally {
            v(!1);
          }
        }
      };
    if (E)
      return e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted",
        children: e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsxs("div", {
              className: "relative w-16 h-16 mx-auto mb-4",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 rounded-full border-4 border-muted",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin",
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-muted-foreground font-medium",
              children: "Carregando...",
            }),
          ],
        }),
      });
    if (!a)
      return e.jsx("div", {
        className:
          "min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4",
        children: e.jsxs(i, {
          className:
            "p-8 max-w-md w-full text-center bg-card border-border shadow-xl",
          children: [
            e.jsx("div", {
              className:
                "w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6",
              children: e.jsx(h, { className: "w-10 h-10 text-destructive" }),
            }),
            e.jsx("h1", {
              className: "text-2xl font-bold text-foreground mb-3",
              children: "Link Inválido ou Expirado",
            }),
            e.jsx("p", {
              className: "text-muted-foreground",
              children:
                "Este link de assinatura não é mais válido. Verifique se já foi utilizado ou solicite um novo link ao técnico.",
            }),
          ],
        }),
      });
    C[a.status]?.icon || f;
    const y = C[a.status] || { label: a.status, color: "bg-gray-500" };
    return e.jsxs("div", {
      className: "min-h-screen bg-gradient-to-br from-background to-muted",
      children: [
        e.jsx("header", {
          className:
            "bg-card border-b border-border shadow-sm sticky top-0 z-10",
          children: e.jsx("div", {
            className: "max-w-2xl mx-auto px-4 py-4",
            children: e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    u.companyLogo
                      ? e.jsx("div", {
                          className:
                            "h-12 w-12 rounded-xl bg-muted flex items-center justify-center p-1.5 shadow-sm",
                          children: e.jsx("img", {
                            src: u.companyLogo,
                            alt: "Logo",
                            className: "max-h-full max-w-full object-contain",
                          }),
                        })
                      : e.jsx("div", {
                          className:
                            "h-12 w-12 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-600 flex items-center justify-center shadow-sm",
                          children: e.jsx(L, {
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h1", {
                          className: "text-lg font-bold text-foreground",
                          children: u.companyName || "Assistência Técnica",
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Assinatura Digital",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(K, {}),
              ],
            }),
          }),
        }),
        e.jsxs("main", {
          className: "max-w-2xl mx-auto px-4 py-6 space-y-6",
          children: [
            e.jsx(i, {
              className: "bg-card border-border shadow-lg overflow-hidden",
              children: e.jsx("div", {
                className:
                  "bg-gradient-to-r from-primary to-primary/80 px-6 py-4",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center",
                          children: e.jsx(O, {
                            className: "w-5 h-5 text-white",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className:
                                "text-primary-foreground/80 text-xs font-medium",
                              children: "Ordem de Serviço",
                            }),
                            e.jsxs("p", {
                              className:
                                "text-white text-xl font-bold font-mono tracking-wide",
                              children: [
                                "#",
                                a.orderNumber || a.id.slice(0, 8).toUpperCase(),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(z, {
                      className: `${y.color} text-white border-0 px-4 py-1.5 text-sm font-semibold shadow-lg`,
                      children: y.label,
                    }),
                  ],
                }),
              }),
            }),
            e.jsxs(i, {
              className: "bg-card border-border shadow-lg p-6",
              children: [
                e.jsxs("h3", {
                  className:
                    "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2",
                  children: [
                    e.jsx(F, { className: "w-4 h-4" }),
                    "Dados do Cliente",
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Nome",
                        }),
                        e.jsx("p", {
                          className: "font-semibold text-foreground",
                          children: a.clientName,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "CPF/NIF",
                        }),
                        e.jsx("p", {
                          className: "font-semibold text-foreground",
                          children: a.clientCPF || "—",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Telefone",
                        }),
                        e.jsx("p", {
                          className: "font-semibold text-foreground",
                          children: a.clientPhone || "—",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(i, {
              className: "bg-card border-border shadow-lg p-6",
              children: [
                e.jsxs("h3", {
                  className:
                    "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2",
                  children: [
                    e.jsx(B, { className: "w-4 h-4" }),
                    "Dados do Aparelho",
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Modelo",
                        }),
                        e.jsx("p", {
                          className: "font-semibold text-foreground",
                          children: a.deviceModel,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "IMEI",
                        }),
                        e.jsx("p", {
                          className: "font-mono text-foreground",
                          children: a.imei || "—",
                        }),
                      ],
                    }),
                    a.serial &&
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Nº de Série",
                          }),
                          e.jsx("p", {
                            className: "font-mono text-foreground",
                            children: a.serial,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs(i, {
              className: "bg-card border-border shadow-lg p-6",
              children: [
                e.jsxs("h3", {
                  className:
                    "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2",
                  children: [
                    e.jsx(D, { className: "w-4 h-4" }),
                    "Detalhes do Serviço",
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Problema Relatado",
                        }),
                        e.jsx("p", {
                          className: "text-foreground",
                          children: a.reportedProblem,
                        }),
                      ],
                    }),
                    a.additionalNotes &&
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: "Serviço a ser Prestado",
                          }),
                          e.jsx("p", {
                            className: "text-foreground",
                            children: a.additionalNotes,
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className:
                        "grid grid-cols-2 gap-4 pt-2 border-t border-border",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsxs("p", {
                              className:
                                "text-xs text-muted-foreground flex items-center gap-1",
                              children: [
                                e.jsx(q, { className: "w-3 h-3" }),
                                " Data de Entrada",
                              ],
                            }),
                            e.jsx("p", {
                              className: "font-semibold text-foreground",
                              children: a.entryDate ? M(a.entryDate) : "—",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsxs("p", {
                              className:
                                "text-xs text-muted-foreground flex items-center gap-1",
                              children: [
                                e.jsx(U, { className: "w-3 h-3" }),
                                " Valor do Serviço",
                              ],
                            }),
                            e.jsx("p", {
                              className: "font-bold text-lg text-primary",
                              children: a.serviceValue,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            a.entryChecklist &&
              a.entryChecklist.length > 0 &&
              e.jsxs(i, {
                className: "bg-card border-border shadow-lg p-6",
                children: [
                  e.jsxs("h3", {
                    className:
                      "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2",
                    children: [
                      e.jsx(_, { className: "w-4 h-4" }),
                      "Checklist de Entrada",
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-2 sm:grid-cols-3 gap-2",
                    children: a.entryChecklist.map((r) =>
                      e.jsxs(
                        "div",
                        {
                          className: `flex items-center gap-2 text-sm p-2 rounded-lg ${
                            r.checked
                              ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400"
                              : "bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400"
                          }`,
                          children: [
                            r.checked
                              ? e.jsx(j, { className: "w-4 h-4 flex-shrink-0" })
                              : e.jsx(h, {
                                  className: "w-4 h-4 flex-shrink-0",
                                }),
                            e.jsx("span", {
                              className: "truncate",
                              children: r.label,
                            }),
                          ],
                        },
                        r.id
                      )
                    ),
                  }),
                ],
              }),
            e.jsxs(i, {
              className: "bg-card border-border shadow-lg p-6",
              children: [
                e.jsxs("h3", {
                  className:
                    "text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4 flex items-center gap-2",
                  children: [
                    e.jsx(V, { className: "w-4 h-4" }),
                    "Assinatura do Cliente",
                  ],
                }),
                T || a.clientSignature
                  ? e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className:
                            "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4",
                              children: e.jsx($, {
                                className:
                                  "w-8 h-8 text-emerald-600 dark:text-emerald-400",
                              }),
                            }),
                            e.jsx("h4", {
                              className:
                                "text-lg font-bold text-emerald-700 dark:text-emerald-400 mb-2",
                              children: "Documento Assinado",
                            }),
                            e.jsx("p", {
                              className:
                                "text-sm text-emerald-600 dark:text-emerald-500",
                              children:
                                "Esta ordem de serviço foi assinada digitalmente.",
                            }),
                            a.signatureDate &&
                              e.jsxs("p", {
                                className:
                                  "text-xs text-emerald-500 dark:text-emerald-600 mt-2",
                                children: [
                                  "Assinado em: ",
                                  new Date(a.signatureDate).toLocaleString(
                                    "pt-BR"
                                  ),
                                ],
                              }),
                          ],
                        }),
                        a.clientSignature &&
                          e.jsxs("div", {
                            className:
                              "border border-border rounded-xl p-4 bg-white dark:bg-zinc-900",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-xs text-muted-foreground mb-2 text-center",
                                children: "Assinatura registrada:",
                              }),
                              e.jsx("img", {
                                src: a.clientSignature,
                                alt: "Assinatura do cliente",
                                className: "max-h-32 mx-auto",
                              }),
                            ],
                          }),
                      ],
                    })
                  : e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsx("div", {
                          className:
                            "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4",
                          children: e.jsxs("p", {
                            className:
                              "text-sm text-amber-700 dark:text-amber-400",
                            children: [
                              e.jsx("strong", { children: "Atenção:" }),
                              " Ao assinar este documento, você concorda com os termos do serviço e declara que as informações acima estão corretas.",
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className:
                            "border-2 border-dashed border-primary/30 rounded-xl overflow-hidden bg-white dark:bg-zinc-900",
                          children: [
                            e.jsxs("div", {
                              className:
                                "bg-muted/50 px-4 py-2 flex items-center justify-between border-b border-border",
                              children: [
                                e.jsx("span", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Assine no campo abaixo",
                                }),
                                e.jsxs(S, {
                                  type: "button",
                                  variant: "ghost",
                                  size: "sm",
                                  onClick: P,
                                  className: "h-8 gap-2",
                                  children: [
                                    e.jsx(W, { className: "w-4 h-4" }),
                                    "Limpar",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(J, {
                              ref: c,
                              penColor: "black",
                              canvasProps: {
                                className: "w-full h-48 touch-none",
                                style: { width: "100%", height: "192px" },
                              },
                              backgroundColor: "white",
                            }),
                          ],
                        }),
                        e.jsx(S, {
                          onClick: I,
                          disabled: N,
                          className: "w-full h-12 text-lg font-semibold gap-2",
                          children: N
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                                  }),
                                  "Enviando...",
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(_, { className: "w-5 h-5" }),
                                  "Confirmar Assinatura",
                                ],
                              }),
                        }),
                      ],
                    }),
              ],
            }),
            e.jsx("div", {
              className: "text-center text-xs text-muted-foreground py-4",
              children: e.jsxs("p", {
                children: [
                  "Documento gerado digitalmente por ",
                  u.companyName || "Assistência Técnica",
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
export { ee as default };
