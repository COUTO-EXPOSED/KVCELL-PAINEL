import {
  r as l,
  u as C,
  i as L,
  z as k,
  ab as O,
  w as n,
  j as e,
  J as y,
  U as v,
  n as b,
  N as D,
  I as j,
  O as z,
  B as w,
  A as P,
  ac as T,
  ad as U,
  ae as F,
} from "./index-V8ZHCWL2.js";
import { A as B } from "./arrow-left-CaH5Nh3G.js";
const N = l.memo(({ feature: r, index: h }) =>
  e.jsxs("div", {
    className:
      "group flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:scale-[1.02]",
    style: {
      animationDelay: `${0.3 + h * 0.1}s`,
      animation: "fade-in 0.6s ease-out forwards",
      opacity: 0,
    },
    children: [
      e.jsx("div", {
        className:
          "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110",
        children: e.jsx(r.icon, {
          className:
            "w-5 h-5 text-primary transition-colors group-hover:text-white",
        }),
      }),
      e.jsxs("div", {
        className: "min-w-0 pt-0.5",
        children: [
          e.jsx("p", {
            className:
              "text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors",
            children: r.title,
          }),
          e.jsx("p", {
            className: "text-xs text-gray-500 leading-relaxed",
            children: r.desc,
          }),
        ],
      }),
    ],
  })
);
N.displayName = "FeatureCard";
function M() {
  const [r, h] = l.useState(""),
    [p, _] = l.useState(""),
    [o, d] = l.useState(!1),
    t = C(),
    { toast: i } = L(),
    { signIn: g, user: c } = k();
  l.useEffect(() => {
    (async () => {
      if (c) {
        const { data: s, error: m } = await n
          .from("user_roles")
          .select("role")
          .eq("user_id", c.id)
          .eq("role", "reseller")
          .maybeSingle();
        if (s) {
          t("/reseller-dashboard");
          return;
        }
        const { data: x, error: f } = await n
          .from("profiles")
          .select("reseller_category")
          .eq("user_id", c.id)
          .maybeSingle();
        x?.reseller_category && t("/reseller-dashboard");
      }
    })();
  }, [c, t]);
  const E = l.useCallback(
      async (a) => {
        a.preventDefault(), d(!0);
        try {
          const s = O.parse({ email: r, password: p }),
            { data: m, error: x } = await g(s.email, s.password);
          if (x) {
            i({
              title: "Erro ao fazer login",
              description: x.message,
              variant: "destructive",
            }),
              d(!1);
            return;
          }
          if (m.user) {
            const { data: f, error: S } = await n
              .from("user_roles")
              .select("role")
              .eq("user_id", m.user.id)
              .eq("role", "reseller")
              .maybeSingle();
            let u = !!f;
            if (!u) {
              const { data: A, error: q } = await n
                .from("profiles")
                .select("reseller_category")
                .eq("user_id", m.user.id)
                .maybeSingle();
              u = !!A?.reseller_category;
            }
            if (!u) {
              i({
                title: "Acesso negado",
                description: "Você não tem permissão de revendedor.",
                variant: "destructive",
              }),
                await n.auth.signOut(),
                d(!1);
              return;
            }
            i({
              title: "Login realizado com sucesso!",
              description: "Bem-vindo ao painel de revendedor.",
            }),
              t("/reseller-dashboard");
          }
        } catch (s) {
          s.errors
            ? i({
                title: "Erro de validação",
                description: s.errors[0].message,
                variant: "destructive",
              })
            : i({
                title: "Erro ao fazer login",
                description: "Verifique suas credenciais e tente novamente.",
                variant: "destructive",
              });
        } finally {
          d(!1);
        }
      },
      [r, p, g, i, t]
    ),
    R = [
      { icon: T, title: "Criar Usuários", desc: "Cadastre novos clientes" },
      { icon: U, title: "Comissões", desc: "Acompanhe seus ganhos" },
      { icon: F, title: "Relatórios", desc: "Métricas de vendas" },
    ];
  return e.jsxs("div", {
    className:
      "min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-white",
    children: [
      e.jsxs("div", {
        className:
          "hidden lg:flex lg:w-[55%] relative overflow-hidden bg-gray-50",
        children: [
          e.jsxs("div", {
            className: "absolute inset-0",
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:60px_60px]",
              }),
              e.jsx("div", {
                className:
                  "absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl",
              }),
              e.jsx("div", {
                className:
                  "absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "relative z-10 flex flex-col justify-between p-12 w-full",
            children: [
              e.jsx("div", {
                className: "animate-fade-in",
                children: e.jsx("img", {
                  src: y,
                  alt: "Tech OS PRO",
                  className: "h-20 w-auto",
                }),
              }),
              e.jsx("div", {
                className: "flex-1 flex flex-col justify-center py-10",
                children: e.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-5 animate-fade-in",
                      children: [
                        e.jsxs("div", {
                          className:
                            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20",
                          children: [
                            e.jsx(v, { className: "w-4 h-4 text-primary" }),
                            e.jsx("span", {
                              className: "text-sm font-medium text-primary",
                              children: "Área do Revendedor",
                            }),
                          ],
                        }),
                        e.jsxs("h2", {
                          className:
                            "text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1]",
                          children: [
                            "Painel de",
                            e.jsx("span", {
                              className: "block mt-2 text-primary",
                              children: "Revendedor",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-lg text-gray-600 leading-relaxed max-w-md",
                          children:
                            "Gerencie suas vendas, crie usuários e acompanhe suas comissões em tempo real.",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid gap-3 max-w-lg",
                      children: R.map((a, s) =>
                        e.jsx(N, { feature: a, index: s }, s)
                      ),
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "animate-fade-in",
                style: { animationDelay: "0.8s" },
                children: e.jsx("p", {
                  className: "text-xs text-gray-400",
                  children:
                    "© 2025 TechOS PRO. Acesso exclusivo para revendedores.",
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-16 bg-white min-h-screen lg:min-h-0",
        children: e.jsxs("div", {
          className: "w-full max-w-[400px] space-y-8",
          children: [
            e.jsxs("div", {
              className: "lg:hidden text-center mb-8 animate-fade-in",
              children: [
                e.jsx("img", {
                  src: y,
                  alt: "Tech OS PRO",
                  className: "h-16 w-auto mx-auto mb-4",
                }),
                e.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3",
                  children: [
                    e.jsx(v, { className: "w-3.5 h-3.5 text-primary" }),
                    e.jsx("span", {
                      className: "text-xs font-medium text-primary",
                      children: "Revendedor",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-center lg:text-left space-y-3 animate-fade-in",
              children: [
                e.jsx("h2", {
                  className: "text-3xl font-bold tracking-tight text-gray-900",
                  children: "Login de Revendedor",
                }),
                e.jsx("p", {
                  className: "text-gray-600",
                  children: "Acesse o painel de revendedor",
                }),
              ],
            }),
            e.jsxs("form", {
              onSubmit: E,
              className: "space-y-6 animate-fade-in",
              style: { animationDelay: "0.1s" },
              children: [
                e.jsxs("div", {
                  className: "space-y-5",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsx(b, {
                          htmlFor: "email",
                          className: "text-sm font-medium text-gray-700",
                          children: "Email",
                        }),
                        e.jsxs("div", {
                          className: "relative group",
                          children: [
                            e.jsx(D, {
                              className:
                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-primary",
                            }),
                            e.jsx(j, {
                              id: "email",
                              type: "email",
                              value: r,
                              onChange: (a) => h(a.target.value),
                              placeholder: "revendedor@email.com",
                              className:
                                "h-12 pl-12 bg-gray-50 border-gray-200 text-gray-900 rounded-xl hover:border-primary/40 focus:border-primary focus:bg-white transition-all duration-300 focus:shadow-lg focus:shadow-primary/10",
                              required: !0,
                              disabled: o,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsx(b, {
                          htmlFor: "password",
                          className: "text-sm font-medium text-gray-700",
                          children: "Senha",
                        }),
                        e.jsxs("div", {
                          className: "relative group",
                          children: [
                            e.jsx(z, {
                              className:
                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-primary",
                            }),
                            e.jsx(j, {
                              id: "password",
                              type: "password",
                              value: p,
                              onChange: (a) => _(a.target.value),
                              placeholder: "••••••••",
                              className:
                                "h-12 pl-12 bg-gray-50 border-gray-200 text-gray-900 rounded-xl hover:border-primary/40 focus:border-primary focus:bg-white transition-all duration-300 focus:shadow-lg focus:shadow-primary/10",
                              required: !0,
                              disabled: o,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(w, {
                  type: "submit",
                  className:
                    "w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] group",
                  disabled: o,
                  children: o
                    ? e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                          }),
                          "Entrando...",
                        ],
                      })
                    : e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          "Entrar",
                          e.jsx(P, {
                            className:
                              "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",
                          }),
                        ],
                      }),
                }),
              ],
            }),
            e.jsx("div", {
              className: "text-center animate-fade-in",
              style: { animationDelay: "0.2s" },
              children: e.jsxs(w, {
                variant: "ghost",
                className:
                  "gap-2 text-gray-500 hover:text-primary transition-all duration-300 hover:scale-105",
                onClick: () => t("/login"),
                disabled: o,
                children: [
                  e.jsx(B, { className: "w-4 h-4" }),
                  "Voltar para Login",
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
export { M as default };
