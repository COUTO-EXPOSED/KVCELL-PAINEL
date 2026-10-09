const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/index-V8ZHCWL2.js", "assets/index-CShRRvYi.css"])
) => i.map((i) => d[i]);
import {
  r as o,
  j as e,
  u as L,
  i as D,
  z as k,
  ab as R,
  _ as g,
  J as f,
  f as y,
  n as v,
  N as q,
  I as b,
  O as z,
  B as j,
  A as I,
  U as T,
  e as F,
  bv as B,
} from "./index-V8ZHCWL2.js";
import { A as V } from "./arrow-left-CaH5Nh3G.js";
const w = o.memo(({ feature: s, index: t }) =>
  e.jsxs("div", {
    className:
      "group flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:scale-[1.02]",
    style: {
      animationDelay: `${0.3 + t * 0.1}s`,
      animation: "fade-in 0.6s ease-out forwards",
      opacity: 0,
    },
    children: [
      e.jsx("div", {
        className:
          "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:scale-110",
        children: e.jsx(s.icon, {
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
            children: s.title,
          }),
          e.jsx("p", {
            className: "text-xs text-gray-500 leading-relaxed",
            children: s.desc,
          }),
        ],
      }),
    ],
  })
);
w.displayName = "FeatureCard";
const M = () => {
  const s = L(),
    { toast: t } = D(),
    { signIn: u, user: c, loading: p } = k(),
    [m, N] = o.useState(""),
    [x, E] = o.useState(""),
    [i, h] = o.useState(!1);
  o.useEffect(() => {
    (async () => {
      if (!p && c) {
        const { supabase: a } = await g(async () => {
            const { supabase: n } = await import("./index-V8ZHCWL2.js").then(
              (d) => d.gi
            );
            return { supabase: n };
          }, __vite__mapDeps([0, 1])),
          { data: l } = await a
            .from("user_roles")
            .select("role")
            .eq("user_id", c.id)
            .eq("role", "ceo")
            .maybeSingle();
        l && s("/ceo-dashboard");
      }
    })();
  }, [c, p, s]);
  const _ = o.useCallback(
      async (r) => {
        r.preventDefault(), h(!0);
        try {
          const a = R.parse({ email: m.trim(), password: x }),
            { data: l, error: n } = await u(a.email, a.password);
          if (n) throw n;
          if (l?.user) {
            const { supabase: d } = await g(async () => {
                const { supabase: P } = await import(
                  "./index-V8ZHCWL2.js"
                ).then((S) => S.gi);
                return { supabase: P };
              }, __vite__mapDeps([0, 1])),
              { data: O, error: A } = await d
                .from("user_roles")
                .select("role")
                .eq("user_id", l.user.id)
                .eq("role", "ceo")
                .maybeSingle();
            if (A || !O) {
              await d.auth.signOut(),
                t({
                  title: "Acesso negado",
                  description:
                    "Você não tem permissão para acessar o Painel CEO.",
                  variant: "destructive",
                }),
                h(!1);
              return;
            }
            t({
              title: "Login realizado com sucesso!",
              description: "Bem-vindo ao Painel CEO.",
            }),
              s("/ceo-dashboard");
          }
        } catch (a) {
          if (a.errors) {
            const l = a.errors[0];
            t({
              title: "Erro de validação",
              description: l.message,
              variant: "destructive",
            });
          } else
            t({
              title: "Erro ao fazer login",
              description:
                a.message === "Invalid login credentials"
                  ? "Email ou senha incorretos."
                  : a.message || "Credenciais inválidas.",
              variant: "destructive",
            });
        } finally {
          h(!1);
        }
      },
      [m, x, u, t, s]
    ),
    C = [
      {
        icon: T,
        title: "Gestão de Usuários",
        desc: "Controle total de acessos",
      },
      {
        icon: F,
        title: "Dashboard Financeiro",
        desc: "Métricas em tempo real",
      },
      {
        icon: B,
        title: "Configurações Globais",
        desc: "Personalize o sistema",
      },
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
                  src: f,
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
                            e.jsx(y, { className: "w-4 h-4 text-primary" }),
                            e.jsx("span", {
                              className: "text-sm font-medium text-primary",
                              children: "Área Restrita - CEO",
                            }),
                          ],
                        }),
                        e.jsxs("h2", {
                          className:
                            "text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1]",
                          children: [
                            "Painel",
                            e.jsx("span", {
                              className: "block mt-2 text-primary",
                              children: "Administrativo",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-lg text-gray-600 leading-relaxed max-w-md",
                          children:
                            "Acesse o painel completo de administração. Gerencie usuários, monitore receitas e configure o sistema.",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid gap-3 max-w-lg",
                      children: C.map((r, a) =>
                        e.jsx(w, { feature: r, index: a }, a)
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
                    "© 2025 TechOS PRO. Acesso exclusivo para administradores.",
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
                  src: f,
                  alt: "Tech OS PRO",
                  className: "h-16 w-auto mx-auto mb-4",
                }),
                e.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3",
                  children: [
                    e.jsx(y, { className: "w-3.5 h-3.5 text-primary" }),
                    e.jsx("span", {
                      className: "text-xs font-medium text-primary",
                      children: "Painel CEO",
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
                  children: "Login Administrativo",
                }),
                e.jsx("p", {
                  className: "text-gray-600",
                  children: "Acesso exclusivo para administradores",
                }),
              ],
            }),
            e.jsxs("form", {
              onSubmit: _,
              className: "space-y-6 animate-fade-in",
              style: { animationDelay: "0.1s" },
              children: [
                e.jsxs("div", {
                  className: "space-y-5",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsx(v, {
                          htmlFor: "email",
                          className: "text-sm font-medium text-gray-700",
                          children: "Email",
                        }),
                        e.jsxs("div", {
                          className: "relative group",
                          children: [
                            e.jsx(q, {
                              className:
                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-primary",
                            }),
                            e.jsx(b, {
                              id: "email",
                              type: "email",
                              value: m,
                              onChange: (r) => N(r.target.value),
                              placeholder: "admin@techospro.com",
                              className:
                                "h-12 pl-12 bg-gray-50 border-gray-200 text-gray-900 rounded-xl hover:border-primary/40 focus:border-primary focus:bg-white transition-all duration-300 focus:shadow-lg focus:shadow-primary/10",
                              required: !0,
                              disabled: i,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsx(v, {
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
                            e.jsx(b, {
                              id: "password",
                              type: "password",
                              value: x,
                              onChange: (r) => E(r.target.value),
                              placeholder: "••••••••",
                              className:
                                "h-12 pl-12 bg-gray-50 border-gray-200 text-gray-900 rounded-xl hover:border-primary/40 focus:border-primary focus:bg-white transition-all duration-300 focus:shadow-lg focus:shadow-primary/10",
                              required: !0,
                              disabled: i,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(j, {
                  type: "submit",
                  className:
                    "w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] group",
                  disabled: i,
                  children: i
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
                          "Acessar Painel CEO",
                          e.jsx(I, {
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
              style: { animationDelay: "0.15s" },
              children: e.jsx("button", {
                type: "button",
                onClick: () => s("/forgot-password"),
                className:
                  "text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors",
                disabled: i,
                children: "Esqueceu sua senha?",
              }),
            }),
            e.jsx("div", {
              className: "text-center animate-fade-in",
              style: { animationDelay: "0.2s" },
              children: e.jsxs(j, {
                variant: "ghost",
                className:
                  "gap-2 text-gray-500 hover:text-primary transition-all duration-300 hover:scale-105",
                onClick: () => s("/login"),
                disabled: i,
                children: [
                  e.jsx(V, { className: "w-4 h-4" }),
                  "Voltar para Login",
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
};
export { M as default };
