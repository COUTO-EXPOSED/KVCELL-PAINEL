const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/index-V8ZHCWL2.js", "assets/index-CShRRvYi.css"])
) => i.map((i) => d[i]);
import {
  i as Z,
  r as a,
  j as e,
  D as te,
  c as re,
  B as v,
  X as oe,
  k as le,
  q as ie,
  l as B,
  m as ne,
  E as ce,
  n as p,
  o as me,
  I as j,
  p as de,
  T as xe,
  s as he,
  t as ue,
  v as pe,
  w as J,
  x as H,
  u as ge,
  y as fe,
  z as be,
  _ as ye,
  G as we,
  J as ve,
  K as Q,
  N as je,
  O as K,
  A as Ne,
  P as Ce,
  Q as Pe,
  R as Se,
  V as Ee,
} from "./index-V8ZHCWL2.js";
import { E as X } from "./euro-B6ZhPHlr.js";
import { A as ke } from "./arrow-left-CaH5Nh3G.js";
const De = ({
    open: N,
    plan: m,
    userEmail: k,
    userName: P,
    username: D,
    password: g,
    onBack: R,
    onComplete: C,
  }) => {
    const { toast: f } = Z(),
      [d, A] = a.useState(""),
      [x, _] = a.useState(""),
      [r, I] = a.useState(null),
      [o, S] = a.useState(!1),
      [V, b] = a.useState(!1),
      h = "https://revolut.me/techospro",
      O = (l) => {
        l.target.files && l.target.files[0] && I(l.target.files[0]);
      },
      U = () => {
        navigator.clipboard.writeText(h),
          b(!0),
          f({
            title: "✅ Copiado!",
            description: "Link de pagamento copiado.",
          }),
          setTimeout(() => b(!1), 2e3);
      },
      E = async (l) => {
        l.preventDefault();
        try {
          if (
            (ue.parse({ name: P, whatsapp: d.trim(), observations: x.trim() }),
            !r)
          ) {
            f({
              title: "Erro",
              description: "Por favor, anexe o comprovante de pagamento.",
              variant: "destructive",
            });
            return;
          }
          S(!0);
          let i = r;
          r.type.startsWith("image/") && (i = await pe(r));
          const y = `receipts/${`${Date.now()}_${Math.random()
              .toString(36)
              .substring(7)}.${
              r.type.startsWith("image/") ? "jpg" : r.name.split(".").pop()
            }`}`,
            { error: F } = await J.storage
              .from("receipts")
              .upload(y, i, {
                contentType: r.type.startsWith("image/")
                  ? "image/jpeg"
                  : r.type,
              });
          if (F) throw F;
          const z = btoa(g),
            { data: w, error: n } = await J.functions.invoke(
              "create-purchase-request",
              {
                body: {
                  email: k,
                  name: P,
                  username: D,
                  password: g,
                  plan_id: m.id,
                  whatsapp: d.trim(),
                  observations: `[PAGAMENTO EM EURO - €${m.price}] ${x.trim()}`,
                  receipt_url: y,
                  currency: "EUR",
                  euro_amount: m.price,
                },
              }
            );
          if (n) {
            let L = n.message;
            try {
              const u = n.context;
              if (u?.json) {
                const q = await u.json();
                q?.error && (L = q.error);
              }
            } catch {}
            throw new Error(L);
          }
          if (w?.error) throw new Error(w.error);
          f({
            title: "✅ Cadastro realizado!",
            description: "Aguarde a validação do pagamento em Euro.",
          }),
            C();
        } catch (i) {
          if (i instanceof H) {
            const T = i.issues?.[0];
            f({
              title: "Erro de validação",
              description: T?.message || "Verifique os dados informados.",
              variant: "destructive",
            });
          } else
            f({
              title: "Erro",
              description: i?.message || "Erro ao processar solicitação.",
              variant: "destructive",
            });
        } finally {
          S(!1);
        }
      };
    return m
      ? e.jsx(te, {
          open: N,
          children: e.jsxs(re, {
            className:
              "w-[95vw] max-w-lg sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-blue-500/30 p-0",
            children: [
              e.jsxs("div", {
                className:
                  "relative bg-gradient-to-r from-blue-500 to-blue-600 p-4 sm:p-6 text-white",
                children: [
                  e.jsx(v, {
                    onClick: R,
                    variant: "ghost",
                    size: "icon",
                    className:
                      "absolute top-2 right-2 sm:top-4 sm:right-4 rounded-full bg-white/10 hover:bg-white/20 text-white h-8 w-8",
                    type: "button",
                    "aria-label": "Fechar",
                    children: e.jsx(oe, { className: "w-4 h-4" }),
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center",
                        children: e.jsx(X, {
                          className: "w-5 h-5 sm:w-7 sm:h-7",
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsxs("h2", {
                            className: "text-lg sm:text-2xl font-black",
                            children: ["Plano ", m.name],
                          }),
                          e.jsx("p", {
                            className: "text-white/80 text-xs sm:text-sm",
                            children: "Pagamento via Revolut (Euro)",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("form", {
                onSubmit: E,
                className: "p-4 sm:p-6 space-y-4 sm:space-y-6",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-200",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(le, {
                            className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-500",
                          }),
                          e.jsx("h3", {
                            className:
                              "text-sm sm:text-lg font-semibold text-gray-900",
                            children: "Pague via Revolut",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "relative w-40 h-40 sm:w-56 sm:h-56 border-4 border-blue-500 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 bg-white",
                        children: e.jsx("img", {
                          src: ie,
                          alt: "QR Code Revolut para pagamento em Euro",
                          className: "w-full h-full object-contain p-2",
                        }),
                      }),
                      e.jsxs("div", {
                        className:
                          "w-full space-y-3 p-3 sm:p-4 bg-white rounded-lg border border-blue-200",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs sm:text-sm font-semibold text-center text-gray-900",
                            children: "💳 Link de pagamento Revolut:",
                          }),
                          e.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-2",
                            children: [
                              e.jsx(v, {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                onClick: U,
                                className:
                                  "flex-1 h-auto py-2 gap-2 hover:bg-blue-500/10 border-blue-300 text-gray-900",
                                children: V
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(B, {
                                          className: "h-4 w-4 text-green-500",
                                        }),
                                        e.jsx("span", {
                                          className: "font-medium text-xs",
                                          children: "Copiado!",
                                        }),
                                      ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(ne, { className: "h-4 w-4" }),
                                        e.jsx("span", {
                                          className: "font-medium text-xs",
                                          children: "Copiar Link",
                                        }),
                                      ],
                                    }),
                              }),
                              e.jsxs(v, {
                                type: "button",
                                variant: "outline",
                                size: "sm",
                                onClick: () => window.open(h, "_blank"),
                                className:
                                  "gap-2 hover:bg-blue-500/10 border-blue-300 text-gray-900",
                                children: [
                                  e.jsx(ce, { className: "h-4 w-4" }),
                                  e.jsx("span", {
                                    className: "text-xs",
                                    children: "Abrir",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "p-2 sm:p-3 bg-yellow-50 border border-yellow-300 rounded-lg",
                            children: e.jsxs("p", {
                              className:
                                "text-[10px] sm:text-xs text-yellow-700 text-center",
                              children: [
                                "⚠️ ",
                                e.jsx("strong", { children: "IMPORTANTE:" }),
                                " Coloque o valor exato do plano!",
                              ],
                            }),
                          }),
                          e.jsxs("p", {
                            className:
                              "text-xl sm:text-2xl font-bold text-blue-500 text-center pt-2",
                            children: ["Valor: €", m.price.toFixed(2)],
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className:
                          "text-[10px] sm:text-xs text-gray-500 text-center",
                        children:
                          "Após realizar o pagamento, anexe o comprovante abaixo",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsxs(p, {
                            htmlFor: "receipt",
                            className:
                              "flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-900",
                            children: [
                              e.jsx(me, { className: "w-4 h-4 text-blue-500" }),
                              "Comprovante de Pagamento *",
                            ],
                          }),
                          e.jsx(j, {
                            id: "receipt",
                            type: "file",
                            accept: "image/*,.pdf",
                            onChange: O,
                            className:
                              "cursor-pointer h-10 sm:h-11 text-gray-900 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100",
                            required: !0,
                          }),
                          r &&
                            e.jsxs("p", {
                              className:
                                "text-xs text-green-600 flex items-center gap-1",
                              children: [
                                e.jsx(B, { className: "w-3 h-3" }),
                                " ",
                                r.name,
                              ],
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsxs(p, {
                            htmlFor: "whatsapp",
                            className:
                              "flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-900",
                            children: [
                              e.jsx(de, { className: "w-4 h-4 text-blue-500" }),
                              "WhatsApp (com código do país) *",
                            ],
                          }),
                          e.jsx(j, {
                            id: "whatsapp",
                            type: "tel",
                            value: d,
                            onChange: (l) => A(l.target.value),
                            placeholder: "+351 912 345 678",
                            className: "h-10 sm:h-11 text-gray-900",
                            required: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(p, {
                        htmlFor: "observations",
                        className:
                          "text-xs sm:text-sm font-medium text-gray-900",
                        children: "Observações (opcional)",
                      }),
                      e.jsx(xe, {
                        id: "observations",
                        value: x,
                        onChange: (l) => _(l.target.value),
                        placeholder: "Informações adicionais...",
                        rows: 2,
                        className: "resize-none text-gray-900",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-3 pt-2",
                    children: [
                      e.jsx(v, {
                        type: "button",
                        variant: "outline",
                        onClick: R,
                        className:
                          "flex-1 h-10 sm:h-12 border-gray-300 text-gray-800",
                        disabled: o,
                        children: "Voltar",
                      }),
                      e.jsx(v, {
                        type: "submit",
                        className:
                          "flex-1 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold shadow-lg shadow-blue-500/30",
                        disabled: o || !r,
                        children: o
                          ? e.jsx(he, { className: "w-5 h-5 animate-spin" })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(X, { className: "w-4 h-4 mr-2" }),
                                "Enviar Solicitação",
                              ],
                            }),
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className:
                      "text-[10px] sm:text-xs text-center text-gray-500",
                    children:
                      "🔒 Seus dados estão protegidos. Após análise do comprovante, seu acesso será liberado.",
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  M = { Mensal: 15, Anual: 60 },
  Le = () => {
    const N = ge(),
      [m] = fe(),
      { toast: k } = Z(),
      { user: P, loading: D } = be(),
      [g, R] = a.useState(""),
      [C, f] = a.useState(""),
      [d, A] = a.useState(""),
      [x, _] = a.useState(""),
      [r, I] = a.useState(""),
      [o, S] = a.useState(!1),
      b = m.get("region") === "PT" ? "PT" : "BR",
      [h, O] = a.useState([]),
      [U, E] = a.useState(!1),
      [l, i] = a.useState(!1),
      [T, y] = a.useState(!1),
      [F, z] = a.useState(!1),
      [w, n] = a.useState(null);
    a.useEffect(() => {
      !D && P && N("/dashboard");
    }, [P, D, N]),
      a.useEffect(() => {
        L();
      }, []);
    const L = async () => {
        try {
          const { supabase: s } = await ye(async () => {
              const { supabase: se } = await import("./index-V8ZHCWL2.js").then(
                (ae) => ae.gi
              );
              return { supabase: se };
            }, __vite__mapDeps([0, 1])),
            { data: t, error: c } = await s
              .from("plans")
              .select("*")
              .eq("is_active", !0)
              .order("price", { ascending: !0 });
          if (c) throw c;
          O(t || []);
        } catch {}
      },
      u = m.get("plan");
    a.useEffect(() => {
      if (u && h.length > 0 && !w) {
        const s = h.find((t) => t.name === u);
        if (s)
          if (b === "PT" && s.name !== "Teste Grátis") {
            const t = M[s.name] || s.price;
            n({ ...s, price: t, currency: "EUR" });
          } else n(s);
      }
    }, [u, h, b]);
    const q = async (s) => {
        s.preventDefault(), S(!0);
        try {
          Ee.parse({
            name: g.trim(),
            email: C.trim(),
            username: d.trim(),
            password: x,
            confirmPassword: r,
          });
          const t = w || (u && h.find((c) => c.name === u)) || null;
          if (t)
            if (b === "PT" && t.name !== "Teste Grátis") {
              const c = M[t.name] || t.price,
                G = { ...t, price: c, currency: "EUR" };
              n(G), y(!0);
            } else n(t), i(!0);
          else E(!0);
        } catch (t) {
          if (t instanceof H) {
            const c = t.issues?.[0];
            k({
              title: "Erro de validação",
              description: c?.message || "Verifique os dados informados.",
              variant: "destructive",
            });
          } else
            k({
              title: "Erro",
              description: t?.message || "Erro ao validar os dados.",
              variant: "destructive",
            });
        } finally {
          S(!1);
        }
      },
      Y = (s) => {
        if (b === "PT" && s.name !== "Teste Grátis") {
          const t = M[s.name] || s.price,
            c = { ...s, price: t, currency: "EUR" };
          n(c), E(!1), y(!0);
        } else n(s), E(!1), i(!0);
      },
      W = () => {
        i(!1), y(!1), z(!0);
      },
      $ = () => {
        i(!1), y(!1);
      },
      ee = () => {
        z(!1), N("/");
      };
    return e.jsxs("div", {
      className: "min-h-screen bg-gray-50 flex items-center justify-center p-4",
      children: [
        e.jsxs(we, {
          className:
            "w-full max-w-md p-8 space-y-6 bg-white border-gray-200 shadow-xl",
          children: [
            e.jsxs("div", {
              className: "text-center space-y-2",
              children: [
                e.jsx("div", {
                  className: "flex items-center justify-center gap-2 mb-4",
                  children: e.jsx("img", {
                    src: ve,
                    alt: "Tech OS PRO",
                    className: "h-14 w-auto",
                  }),
                }),
                e.jsx("h2", {
                  className: "text-2xl font-bold text-gray-900",
                  children: "Criar nova conta",
                }),
                e.jsx("p", {
                  className: "text-gray-600",
                  children: "Preencha os dados para começar",
                }),
              ],
            }),
            e.jsxs("form", {
              onSubmit: q,
              className: "space-y-4",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(p, {
                      htmlFor: "name",
                      className:
                        "flex items-center gap-2 text-sm font-medium text-gray-700",
                      children: [
                        e.jsx(Q, { className: "w-4 h-4 text-primary" }),
                        "Nome completo",
                      ],
                    }),
                    e.jsx(j, {
                      id: "name",
                      type: "text",
                      value: g,
                      onChange: (s) => R(s.target.value),
                      placeholder: "João Silva",
                      className:
                        "h-11 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white transition-all",
                      required: !0,
                      disabled: o,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(p, {
                      htmlFor: "username",
                      className:
                        "flex items-center gap-2 text-sm font-medium text-gray-700",
                      children: [
                        e.jsx(Q, { className: "w-4 h-4 text-primary" }),
                        "Nome de usuário",
                      ],
                    }),
                    e.jsx(j, {
                      id: "username",
                      type: "text",
                      value: d,
                      onChange: (s) => A(s.target.value),
                      placeholder: "joaosilva",
                      className:
                        "h-11 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white transition-all",
                      required: !0,
                      disabled: o,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(p, {
                      htmlFor: "email",
                      className:
                        "flex items-center gap-2 text-sm font-medium text-gray-700",
                      children: [
                        e.jsx(je, { className: "w-4 h-4 text-primary" }),
                        "Email",
                      ],
                    }),
                    e.jsx(j, {
                      id: "email",
                      type: "email",
                      value: C,
                      onChange: (s) => f(s.target.value),
                      placeholder: "seu@email.com",
                      className:
                        "h-11 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white transition-all",
                      required: !0,
                      disabled: o,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(p, {
                      htmlFor: "password",
                      className:
                        "flex items-center gap-2 text-sm font-medium text-gray-700",
                      children: [
                        e.jsx(K, { className: "w-4 h-4 text-primary" }),
                        "Senha",
                      ],
                    }),
                    e.jsx(j, {
                      id: "password",
                      type: "password",
                      value: x,
                      onChange: (s) => _(s.target.value),
                      placeholder: "••••••••",
                      className:
                        "h-11 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white transition-all",
                      required: !0,
                      disabled: o,
                      minLength: 6,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(p, {
                      htmlFor: "confirmPassword",
                      className:
                        "flex items-center gap-2 text-sm font-medium text-gray-700",
                      children: [
                        e.jsx(K, { className: "w-4 h-4 text-primary" }),
                        "Confirmar senha",
                      ],
                    }),
                    e.jsx(j, {
                      id: "confirmPassword",
                      type: "password",
                      value: r,
                      onChange: (s) => I(s.target.value),
                      placeholder: "••••••••",
                      className:
                        "h-11 bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:bg-white transition-all",
                      required: !0,
                      disabled: o,
                      minLength: 6,
                    }),
                  ],
                }),
                e.jsx(v, {
                  type: "submit",
                  className:
                    "w-full h-11 text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group",
                  disabled: o,
                  children: o
                    ? e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin",
                          }),
                          "Criando conta...",
                        ],
                      })
                    : e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          "Criar conta",
                          e.jsx(Ne, {
                            className:
                              "w-4 h-4 group-hover:translate-x-1 transition-transform",
                          }),
                        ],
                      }),
                }),
              ],
            }),
            e.jsx("div", {
              className: "text-center",
              children: e.jsxs(v, {
                variant: "ghost",
                className: "gap-2 text-gray-600 hover:text-primary",
                onClick: () => N("/"),
                disabled: o,
                children: [
                  e.jsx(ke, { className: "w-4 h-4" }),
                  "Voltar para o site",
                ],
              }),
            }),
          ],
        }),
        e.jsx(Ce, { open: U, plans: h, onSelectPlan: Y }),
        e.jsx(Pe, {
          open: l,
          plan: w,
          userEmail: C,
          userName: g,
          username: d,
          password: x,
          onBack: $,
          onComplete: W,
        }),
        e.jsx(De, {
          open: T,
          plan: w,
          userEmail: C,
          userName: g,
          username: d,
          password: x,
          onBack: $,
          onComplete: W,
        }),
        e.jsx(Se, { open: F, onClose: ee }),
      ],
    });
  };
export { Le as default };
