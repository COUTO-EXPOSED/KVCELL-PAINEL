import {
  r as i,
  j as e,
  u as U,
  i as _,
  z as T,
  ab as R,
  w as m,
  J as b,
  el as p,
  fJ as j,
  f as I,
  fK as v,
  n as N,
  N as M,
  I as w,
  O as $,
  B as y,
  A as q,
  S as z,
  cI as F,
  ad as B,
  U as G,
  Z as H,
  dW as K,
  fL as J,
  fM as V,
  dX as W,
} from "./index-V8ZHCWL2.js";
import { K as k } from "./key-DcwzdGZh.js";
import { A as Y } from "./arrow-left-CaH5Nh3G.js";
import { H as Z } from "./hard-drive-CSfjam_T.js";
const S = i.memo(({ icon: r, label: t, status: l, delay: n }) =>
  e.jsxs("div", {
    className:
      "group flex items-center gap-3 p-3 rounded-lg bg-black/40 backdrop-blur-sm border border-emerald-500/20 transition-all duration-300 hover:border-emerald-400/50 hover:bg-black/60",
    style: {
      animationDelay: `${n}s`,
      animation: "fade-in 0.5s ease-out forwards",
      opacity: 0,
    },
    children: [
      e.jsxs("div", {
        className: "relative",
        children: [
          e.jsx("div", {
            className: `w-8 h-8 rounded-md flex items-center justify-center ${
              l === "online"
                ? "bg-emerald-500/20 border border-emerald-500/40"
                : "bg-amber-500/20 border border-amber-500/40"
            }`,
            children: e.jsx(r, {
              className: `w-4 h-4 ${
                l === "online" ? "text-emerald-400" : "text-amber-400"
              }`,
            }),
          }),
          e.jsx("span", {
            className: `absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${
              l === "online" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
            }`,
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex-1 min-w-0",
        children: [
          e.jsx("p", {
            className: "text-xs font-medium text-gray-200 truncate",
            children: t,
          }),
          e.jsx("p", {
            className: `text-[10px] ${
              l === "online" ? "text-emerald-400" : "text-amber-400"
            }`,
            children: l === "online" ? "● Online" : "○ Processando",
          }),
        ],
      }),
    ],
  })
);
S.displayName = "ServerNode";
const A = i.memo(({ feature: r, index: t }) =>
  e.jsxs("div", {
    className:
      "group flex items-start gap-3 p-3.5 rounded-xl bg-black/30 backdrop-blur-sm border border-emerald-500/20 transition-all duration-300 hover:border-emerald-400/40 hover:bg-black/50",
    style: {
      animationDelay: `${0.4 + t * 0.08}s`,
      animation: "fade-in 0.5s ease-out forwards",
      opacity: 0,
    },
    children: [
      e.jsx("div", {
        className:
          "w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0",
        children: e.jsx(r.icon, { className: "w-4 h-4 text-emerald-400" }),
      }),
      e.jsxs("div", {
        className: "min-w-0 pt-0.5",
        children: [
          e.jsx("p", {
            className: "text-sm font-semibold text-gray-100",
            children: r.title,
          }),
          e.jsx("p", {
            className: "text-xs text-gray-400 leading-relaxed",
            children: r.desc,
          }),
        ],
      }),
    ],
  })
);
A.displayName = "FeatureCard";
const se = () => {
  const r = U(),
    { toast: t } = _(),
    { signIn: l, user: n, loading: f } = T(),
    [x, E] = i.useState(""),
    [u, C] = i.useState(""),
    [d, o] = i.useState(!1);
  i.useEffect(() => {
    (async () => {
      if (!f && n) {
        const { data: a } = await m
          .from("unlockers")
          .select("id, is_active")
          .eq("user_id", n.id)
          .eq("is_active", !0)
          .maybeSingle();
        a && r("/unlocker-dashboard");
      }
    })();
  }, [n, f, r]);
  const P = i.useCallback(
      async (s) => {
        s.preventDefault(), o(!0);
        try {
          const a = R.parse({ email: x.trim(), password: u }),
            { data: c, error: g } = await l(a.email, a.password);
          if (g) throw g;
          if (c?.user) {
            const { data: h, error: L } = await m
              .from("unlockers")
              .select("id, is_active, name")
              .eq("user_id", c.user.id)
              .maybeSingle();
            if (L || !h) {
              await m.auth.signOut(),
                t({
                  title: "Acesso negado",
                  description:
                    "Você não possui uma conta de Unlocker. Entre em contato com o administrador.",
                  variant: "destructive",
                }),
                o(!1);
              return;
            }
            if (!h.is_active) {
              await m.auth.signOut(),
                t({
                  title: "Conta desativada",
                  description:
                    "Sua conta de Unlocker está desativada. Entre em contato com o administrador.",
                  variant: "destructive",
                }),
                o(!1);
              return;
            }
            t({
              title: "Login realizado com sucesso!",
              description: `Bem-vindo ao Painel Unlocker, ${h.name}!`,
            }),
              r("/unlocker-dashboard");
          }
        } catch (a) {
          if (a.errors) {
            const c = a.errors[0];
            t({
              title: "Erro de validação",
              description: c.message,
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
          o(!1);
        }
      },
      [x, u, l, t, r]
    ),
    O = [
      {
        icon: z,
        title: "iCloud & FRP",
        desc: "Desbloqueio de contas Apple e Google",
      },
      {
        icon: k,
        title: "MDM & Operadora",
        desc: "Remoção de gerenciamento e rede",
      },
      {
        icon: F,
        title: "Site Personalizado",
        desc: "Sua vitrine online de serviços",
      },
      {
        icon: B,
        title: "Gestão Financeira",
        desc: "Controle total de receitas",
      },
      {
        icon: G,
        title: "Base de Clientes",
        desc: "Histórico completo de pedidos",
      },
      {
        icon: H,
        title: "Calculadora IMEI",
        desc: "Análise rápida de dispositivos",
      },
    ],
    D = [
      { icon: v, label: "Servidor Principal", status: "online" },
      { icon: K, label: "Banco de Dados", status: "online" },
      { icon: J, label: "Processamento", status: "processing" },
      { icon: Z, label: "Armazenamento", status: "online" },
      { icon: V, label: "Conectividade", status: "online" },
      { icon: W, label: "Monitoramento", status: "online" },
    ];
  return e.jsxs("div", {
    className: "min-h-screen w-full flex flex-col lg:flex-row overflow-hidden",
    children: [
      e.jsxs("div", {
        className:
          "hidden lg:flex lg:w-[55%] relative overflow-hidden bg-[#0a0f0d]",
        children: [
          e.jsxs("div", {
            className: "absolute inset-0",
            children: [
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:32px_32px]",
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-black/60",
              }),
              e.jsx("div", {
                className:
                  "absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse",
              }),
              e.jsx("div", {
                className:
                  "absolute bottom-20 right-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse",
                style: { animationDelay: "1s" },
              }),
              e.jsx("div", {
                className:
                  "absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-[80px]",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "absolute top-6 left-6 flex items-center gap-1.5 opacity-60",
            children: [
              e.jsx("span", {
                className: "w-3 h-3 rounded-full bg-red-500/80",
              }),
              e.jsx("span", {
                className: "w-3 h-3 rounded-full bg-amber-500/80",
              }),
              e.jsx("span", {
                className: "w-3 h-3 rounded-full bg-emerald-500/80",
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "relative z-10 flex flex-col justify-between p-10 w-full",
            children: [
              e.jsxs("div", {
                className: "animate-fade-in flex items-center gap-4",
                children: [
                  e.jsx("img", {
                    src: b,
                    alt: "Tech OS PRO",
                    className: "h-12 w-auto",
                  }),
                  e.jsx("div", { className: "h-6 w-px bg-emerald-500/30" }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center",
                        children: e.jsx(p, { className: "w-4 h-4 text-white" }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("span", {
                            className: "text-lg font-bold text-white",
                            children: "Unlocker",
                          }),
                          e.jsx("span", {
                            className:
                              "text-[10px] text-emerald-400 block -mt-1",
                            children: "SYSTEM",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex-1 flex flex-col justify-center py-8",
                children: e.jsxs("div", {
                  className: "space-y-6 max-w-lg",
                  children: [
                    e.jsxs("div", {
                      className:
                        "animate-fade-in flex items-center gap-2 text-emerald-400 font-mono text-sm",
                      children: [
                        e.jsx(j, { className: "w-4 h-4" }),
                        e.jsx("span", { children: "unlocker@techospro:~$" }),
                        e.jsx("span", {
                          className: "animate-pulse",
                          children: "_",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-4 animate-fade-in",
                      children: [
                        e.jsxs("div", {
                          className:
                            "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30",
                          children: [
                            e.jsx(I, {
                              className: "w-3.5 h-3.5 text-emerald-400",
                            }),
                            e.jsx("span", {
                              className: "text-xs font-medium text-emerald-400",
                              children: "Sistema Profissional",
                            }),
                          ],
                        }),
                        e.jsxs("h2", {
                          className:
                            "text-3xl xl:text-4xl font-bold text-white leading-[1.15]",
                          children: [
                            "Central de Controle",
                            e.jsx("span", {
                              className:
                                "block mt-1 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent",
                              children: "Unlocker Pro",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-base text-gray-400 leading-relaxed",
                          children:
                            "Acesse o sistema completo para gerenciar seus serviços de desbloqueio, clientes e finanças.",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: D.map((s, a) =>
                        e.jsx(
                          S,
                          {
                            icon: s.icon,
                            label: s.label,
                            status: s.status,
                            delay: 0.2 + a * 0.08,
                          },
                          a
                        )
                      ),
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-2 gap-2 pt-2",
                      children: O.map((s, a) =>
                        e.jsx(A, { feature: s, index: a }, a)
                      ),
                    }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "animate-fade-in font-mono text-xs text-gray-600",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4 mb-2",
                    children: [
                      e.jsx("span", {
                        className: "text-emerald-500",
                        children: "STATUS:",
                      }),
                      e.jsx("span", {
                        className: "text-emerald-400",
                        children: "ALL SYSTEMS OPERATIONAL",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    children: "© 2025 TechOS PRO - Unlocker System v2.0",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className:
          "flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-16 bg-background min-h-screen lg:min-h-0",
        children: e.jsxs("div", {
          className: "w-full max-w-[400px] space-y-8",
          children: [
            e.jsxs("div", {
              className: "lg:hidden text-center mb-8 animate-fade-in",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-center gap-3 mb-4",
                  children: [
                    e.jsx("img", {
                      src: b,
                      alt: "Tech OS PRO",
                      className: "h-12 w-auto",
                    }),
                    e.jsx("div", { className: "h-5 w-px bg-border" }),
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center",
                          children: e.jsx(p, {
                            className: "w-3.5 h-3.5 text-white",
                          }),
                        }),
                        e.jsx("span", {
                          className: "text-base font-bold",
                          children: "Unlocker",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20",
                  children: [
                    e.jsx(v, { className: "w-3.5 h-3.5 text-emerald-500" }),
                    e.jsx("span", {
                      className:
                        "text-xs font-medium text-emerald-600 dark:text-emerald-400",
                      children: "Sistema Profissional",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-center lg:text-left space-y-3 animate-fade-in",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 justify-center lg:justify-start",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 flex items-center justify-center",
                      children: e.jsx(j, {
                        className: "w-6 h-6 text-emerald-500",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h2", {
                          className: "text-2xl font-bold tracking-tight",
                          children: "Acesso ao Sistema",
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Painel Unlocker Pro",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-muted-foreground pt-2",
                  children:
                    "Entre com suas credenciais para acessar o painel de controle.",
                }),
              ],
            }),
            e.jsxs("form", {
              onSubmit: P,
              className: "space-y-6 animate-fade-in",
              style: { animationDelay: "0.1s" },
              children: [
                e.jsxs("div", {
                  className: "space-y-5",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsx(N, {
                          htmlFor: "email",
                          className: "text-sm font-medium",
                          children: "Email",
                        }),
                        e.jsxs("div", {
                          className: "relative group",
                          children: [
                            e.jsx(M, {
                              className:
                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors duration-300 group-focus-within:text-emerald-500",
                            }),
                            e.jsx(w, {
                              id: "email",
                              type: "email",
                              value: x,
                              onChange: (s) => E(s.target.value),
                              placeholder: "seu@email.com",
                              className:
                                "h-12 pl-12 rounded-xl border-border hover:border-emerald-500/40 focus:border-emerald-500 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10",
                              required: !0,
                              disabled: d,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        e.jsx(N, {
                          htmlFor: "password",
                          className: "text-sm font-medium",
                          children: "Senha",
                        }),
                        e.jsxs("div", {
                          className: "relative group",
                          children: [
                            e.jsx($, {
                              className:
                                "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground transition-colors duration-300 group-focus-within:text-emerald-500",
                            }),
                            e.jsx(w, {
                              id: "password",
                              type: "password",
                              value: u,
                              onChange: (s) => C(s.target.value),
                              placeholder: "••••••••",
                              className:
                                "h-12 pl-12 rounded-xl border-border hover:border-emerald-500/40 focus:border-emerald-500 transition-all duration-300 focus:shadow-lg focus:shadow-emerald-500/10",
                              required: !0,
                              disabled: d,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(y, {
                  type: "submit",
                  className:
                    "w-full h-12 text-base font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-[1.02] group",
                  disabled: d,
                  children: d
                    ? e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                          }),
                          "Conectando...",
                        ],
                      })
                    : e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(p, { className: "w-5 h-5" }),
                          "Acessar Sistema",
                          e.jsx(q, {
                            className:
                              "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1",
                          }),
                        ],
                      }),
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "p-4 rounded-xl bg-muted/50 border border-border animate-fade-in",
              style: { animationDelay: "0.2s" },
              children: e.jsxs("div", {
                className: "flex items-start gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5",
                    children: e.jsx(k, {
                      className: "w-4 h-4 text-emerald-500",
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-medium",
                        children: "Acesso Restrito",
                      }),
                      e.jsx("p", {
                        className:
                          "text-xs text-muted-foreground mt-1 leading-relaxed",
                        children:
                          "O acesso ao sistema é criado pelo administrador. Entre em contato para solicitar suas credenciais.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "text-center animate-fade-in",
              style: { animationDelay: "0.3s" },
              children: e.jsxs(y, {
                variant: "ghost",
                className:
                  "gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105",
                onClick: () => r("/login"),
                disabled: d,
                children: [
                  e.jsx(Y, { className: "w-4 h-4" }),
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
export { se as default };
