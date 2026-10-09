import {
  W as C,
  u as S,
  r,
  j as e,
  G as A,
  Y as I,
  S as P,
  $ as k,
  a0 as O,
  a1 as T,
  l as c,
  B as i,
  a2 as t,
  a3 as d,
  a4 as n,
  a5 as q,
  a6 as D,
  a7 as E,
  a8 as R,
} from "./index-V8ZHCWL2.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z = C("Chrome", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
    ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
    [
      "line",
      { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" },
    ],
  ]),
  B = () => {
    const o = S(),
      [a, m] = r.useState(null),
      [f, x] = r.useState(!1),
      [p, g] = r.useState(!1),
      [h, y] = r.useState(!1),
      [N, b] = r.useState(!1);
    r.useEffect(() => {
      (window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === !0) &&
        x(!0);
      const s = /iPad|iPhone|iPod/.test(navigator.userAgent);
      g(s);
      const l = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      b(l);
      const w = /Android/.test(navigator.userAgent);
      y(w);
      const j = (u) => {
        u.preventDefault(), m(u);
      };
      return (
        window.addEventListener("beforeinstallprompt", j),
        () => {
          window.removeEventListener("beforeinstallprompt", j);
        }
      );
    }, []);
    const v = async () => {
      if (!a) return;
      a.prompt();
      const { outcome: s } = await a.userChoice;
      s === "accepted" && (x(!0), m(null));
    };
    return e.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-background via-secondary/10 to-primary/5 flex items-center justify-center p-4",
      children: e.jsxs(A, {
        className: "max-w-2xl w-full shadow-xl border-primary/20",
        children: [
          e.jsxs(I, {
            className: "text-center space-y-6 pb-8",
            children: [
              e.jsx("div", {
                className:
                  "mx-auto w-28 h-28 bg-gradient-to-br from-primary to-primary/70 rounded-3xl flex items-center justify-center shadow-lg animate-fade-in",
                children: e.jsx(P, { className: "w-14 h-14 text-white" }),
              }),
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsx(k, {
                    className:
                      "text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",
                    children: "Instale o Tech OS PRO",
                  }),
                  e.jsx(O, {
                    className: "text-lg text-foreground/70",
                    children:
                      "Transforme seu navegador em um app profissional! Acesse direto da tela inicial com um toque.",
                  }),
                ],
              }),
            ],
          }),
          e.jsx(T, {
            className: "space-y-8",
            children: f
              ? e.jsxs("div", {
                  className: "text-center space-y-6 py-8 animate-fade-in",
                  children: [
                    e.jsx("div", {
                      className:
                        "mx-auto w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center animate-scale-in",
                      children: e.jsx(c, {
                        className: "w-10 h-10 text-green-500",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx("h3", {
                          className: "text-2xl font-bold",
                          children: "App Instalado com Sucesso! 🎉",
                        }),
                        e.jsx("p", {
                          className: "text-muted-foreground",
                          children:
                            "O Tech OS PRO já está na tela inicial do seu dispositivo",
                        }),
                      ],
                    }),
                    e.jsxs(i, {
                      onClick: () => o("/"),
                      size: "lg",
                      className:
                        "mt-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70",
                      children: [
                        e.jsx(c, { className: "mr-2 h-5 w-5" }),
                        "Acessar Dashboard",
                      ],
                    }),
                  ],
                })
              : e.jsxs("div", {
                  className: "space-y-8",
                  children: [
                    e.jsxs("div", {
                      className:
                        "bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 space-y-4",
                      children: [
                        e.jsxs("h3", {
                          className:
                            "font-bold text-xl flex items-center gap-2",
                          children: [
                            e.jsx(c, { className: "w-6 h-6 text-primary" }),
                            "Por que instalar?",
                          ],
                        }),
                        e.jsx("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                          children: [
                            {
                              icon: "⚡",
                              text: "Acesso instantâneo pela tela inicial",
                            },
                            { icon: "📱", text: "Experiência de app nativo" },
                            { icon: "🔔", text: "Notificações em tempo real" },
                            { icon: "💾", text: "Funciona offline" },
                            { icon: "🚀", text: "Carregamento ultra-rápido" },
                            { icon: "🎯", text: "Sem downloads na loja" },
                          ].map((s, l) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center gap-3 p-2 rounded-lg bg-background/50",
                                children: [
                                  e.jsx("span", {
                                    className: "text-2xl",
                                    children: s.icon,
                                  }),
                                  e.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: s.text,
                                  }),
                                ],
                              },
                              l
                            )
                          ),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        a &&
                          e.jsxs(t, {
                            className:
                              "border-primary/30 bg-primary/5 animate-fade-in",
                            children: [
                              e.jsx(d, { className: "h-5 w-5 text-primary" }),
                              e.jsxs(n, {
                                className: "text-base",
                                children: [
                                  e.jsx("strong", {
                                    children: "Pronto para instalar!",
                                  }),
                                  " Clique no botão abaixo para adicionar o Tech OS PRO à sua tela inicial.",
                                ],
                              }),
                            ],
                          }),
                        h &&
                          !a &&
                          e.jsxs(t, {
                            className:
                              "border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 animate-fade-in",
                            children: [
                              e.jsx(z, { className: "h-5 w-5 text-primary" }),
                              e.jsxs(n, {
                                className: "space-y-3",
                                children: [
                                  e.jsx("p", {
                                    className: "font-semibold text-base",
                                    children:
                                      "Como instalar no Android (Chrome):",
                                  }),
                                  e.jsxs("ol", {
                                    className:
                                      "list-decimal list-inside space-y-2 text-sm",
                                    children: [
                                      e.jsxs("li", {
                                        children: [
                                          "Toque no menu ",
                                          e.jsx(q, {
                                            className: "inline h-4 w-4",
                                          }),
                                          " (três pontos) no canto superior",
                                        ],
                                      }),
                                      e.jsxs("li", {
                                        children: [
                                          "Selecione ",
                                          e.jsx("strong", {
                                            children: '"Instalar app"',
                                          }),
                                          " ou ",
                                          e.jsx("strong", {
                                            children:
                                              '"Adicionar à tela inicial"',
                                          }),
                                        ],
                                      }),
                                      e.jsx("li", {
                                        children: "Confirme a instalação",
                                      }),
                                      e.jsx("li", {
                                        children:
                                          "Pronto! O ícone aparecerá na sua tela inicial",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        p &&
                          N &&
                          e.jsxs(t, {
                            className:
                              "border-primary/30 bg-gradient-to-r from-primary/5 to-primary/10 animate-fade-in",
                            children: [
                              e.jsx(D, { className: "h-5 w-5 text-primary" }),
                              e.jsxs(n, {
                                className: "space-y-3",
                                children: [
                                  e.jsx("p", {
                                    className: "font-semibold text-base",
                                    children:
                                      "Como instalar no iPhone/iPad (Safari):",
                                  }),
                                  e.jsxs("ol", {
                                    className:
                                      "list-decimal list-inside space-y-2 text-sm",
                                    children: [
                                      e.jsxs("li", {
                                        children: [
                                          "Toque no botão ",
                                          e.jsx(E, {
                                            className: "inline h-4 w-4",
                                          }),
                                          " ",
                                          e.jsx("strong", {
                                            children: "Compartilhar",
                                          }),
                                          " na parte inferior",
                                        ],
                                      }),
                                      e.jsxs("li", {
                                        children: [
                                          "Role para baixo e toque em ",
                                          e.jsx(R, {
                                            className: "inline h-4 w-4",
                                          }),
                                          " ",
                                          e.jsx("strong", {
                                            children:
                                              '"Adicionar à Tela de Início"',
                                          }),
                                        ],
                                      }),
                                      e.jsxs("li", {
                                        children: [
                                          "Edite o nome se desejar e toque em ",
                                          e.jsx("strong", {
                                            children: '"Adicionar"',
                                          }),
                                        ],
                                      }),
                                      e.jsx("li", {
                                        children:
                                          "Pronto! O ícone aparecerá na sua tela inicial",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-xs text-muted-foreground mt-3",
                                    children: [
                                      "⚠️ ",
                                      e.jsx("strong", {
                                        children: "Importante:",
                                      }),
                                      " Use o Safari para instalar. Outros navegadores no iOS não suportam instalação de PWA.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        !p &&
                          !h &&
                          e.jsxs(t, {
                            className: "border-primary/30 bg-primary/5",
                            children: [
                              e.jsx(d, { className: "h-5 w-5 text-primary" }),
                              e.jsxs(n, {
                                className: "space-y-2",
                                children: [
                                  e.jsx("p", {
                                    className: "font-semibold",
                                    children: "Como instalar:",
                                  }),
                                  e.jsxs("p", {
                                    className: "text-sm",
                                    children: [
                                      "Procure pela opção ",
                                      e.jsx("strong", {
                                        children: '"Instalar"',
                                      }),
                                      " ou ",
                                      e.jsx("strong", {
                                        children: '"Adicionar à tela inicial"',
                                      }),
                                      " no menu do seu navegador (geralmente nos três pontos ou ícone de compartilhar).",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex flex-col sm:flex-row gap-3 pt-4",
                      children: a
                        ? e.jsxs(e.Fragment, {
                            children: [
                              e.jsxs(i, {
                                onClick: v,
                                size: "lg",
                                className:
                                  "flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-base h-12",
                                children: [
                                  e.jsx(d, { className: "mr-2 h-5 w-5" }),
                                  "Instalar Agora",
                                ],
                              }),
                              e.jsx(i, {
                                onClick: () => o("/"),
                                variant: "outline",
                                size: "lg",
                                className: "flex-1 h-12",
                                children: "Usar no Navegador",
                              }),
                            ],
                          })
                        : e.jsx(i, {
                            onClick: () => o("/"),
                            size: "lg",
                            variant: "outline",
                            className: "w-full h-12",
                            children: "Continuar no Navegador",
                          }),
                    }),
                    e.jsxs("p", {
                      className: "text-center text-sm text-muted-foreground",
                      children: [
                        "💡 ",
                        e.jsx("strong", { children: "Dica:" }),
                        " Após instalar, o app funcionará mesmo sem internet!",
                      ],
                    }),
                  ],
                }),
          }),
        ],
      }),
    });
  };
export { B as default };
