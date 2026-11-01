import {
  u as g,
  r as i,
  j as e,
  H as x,
  L as h,
  Z as u,
  B as r,
  A as l,
  a as f,
  C as b,
  b as j,
  D as v,
  c as N,
  d as y,
  X as w,
  F as C,
  e as c,
  S,
  f as I,
  M as k,
  g as D,
  h as P,
  U as T,
} from "./index-V8ZHCWL2.js";
const F = "/assets/dashboard-principal-BJp5uvxJ.png",
  q = "/assets/controle-fiado-BDP743DV.png",
  O = "/assets/gestao-garantias-CXFMQ1NT.png",
  A = "/assets/ordens-servico-CWSYvI65.png",
  G = "/assets/comunidade-tecnicos-CpASP-h2.png",
  M = "/assets/catalogo-digital-BEnoG3k_.png",
  z = "/assets/financeiro-aMcJhqtv.png",
  E = "/assets/controle-estoque-8DP5L7C2.png",
  R = [
    {
      title: "Dashboard Principal",
      description:
        "Painel completo com visão geral do seu negócio. Métricas em tempo real, gráficos de desempenho e indicadores chave para tomar as melhores decisões.",
      image: F,
      benefits: [
        "Métricas de vendas em tempo real",
        "Gráficos de desempenho diário/mensal",
        "Indicadores financeiros",
        "Acesso rápido às funções principais",
      ],
      icon: c,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Ordens de Serviço",
      description:
        "Gerencie todas as suas ordens de serviço de forma profissional. Controle de status, histórico completo, fotos de entrada e saída, e muito mais.",
      image: A,
      benefits: [
        "Controle completo de status",
        "Fotos e vídeos de entrada/saída",
        "Histórico detalhado",
        "Impressão de etiquetas",
      ],
      icon: S,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Controle Financeiro",
      description:
        "Sistema financeiro completo com PDV integrado, controle de receitas e despesas, gráficos analíticos e relatórios detalhados.",
      image: z,
      benefits: [
        "PDV com carrinho de vendas",
        "Controle de receitas e despesas",
        "Gráficos e relatórios",
        "Métodos de pagamento variados",
      ],
      icon: c,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Controle de Fiado",
      description:
        "Gerencie vendas a prazo e parcelamentos com promissórias digitais, cálculo automático de juros e multas, e relatórios de inadimplência.",
      image: q,
      benefits: [
        "Promissórias digitais",
        "Cálculo automático de juros",
        "Relatórios de inadimplência",
        "Notificações de vencimento",
      ],
      icon: I,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Gestão de Estoque",
      description:
        "Controle total do seu estoque de peças e produtos. Alertas de estoque baixo, histórico de movimentações e integração com vendas.",
      image: E,
      benefits: [
        "Alertas de estoque baixo",
        "Histórico de movimentações",
        "Categorização de produtos",
        "Integração com vendas",
      ],
      icon: k,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Catálogo Digital",
      description:
        "Sua loja online profissional em minutos. Catálogo responsivo, carrinho de compras, cupons de desconto e integração com WhatsApp.",
      image: M,
      benefits: [
        "Design profissional responsivo",
        "Carrinho de compras",
        "Cupons de desconto",
        "Integração WhatsApp",
      ],
      icon: D,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Gestão de Garantias",
      description:
        "Controle automático de garantias com alertas de vencimento, histórico de serviços e documentação completa para cada reparo.",
      image: O,
      benefits: [
        "Alertas de vencimento",
        "Histórico de reparos",
        "Documentação digital",
        "Período configurável",
      ],
      icon: P,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Comunidade de Técnicos",
      description:
        "Rede social exclusiva para técnicos. Compartilhe conhecimento, tire dúvidas, faça networking e cresça junto com outros profissionais.",
      image: G,
      benefits: [
        "Feed de publicações",
        "Stories e mensagens diretas",
        "Networking profissional",
        "Compartilhamento de dicas",
      ],
      icon: T,
      color: "from-indigo-500 to-indigo-600",
    },
  ];
function B() {
  const d = g(),
    [m, o] = i.useState(!1),
    [a, t] = i.useState(null);
  return (
    i.useEffect(() => {
      const s = document.documentElement;
      s.style.setProperty("--primary", "119 60% 35%"),
        s.style.setProperty("--accent", "119 55% 40%"),
        s.style.setProperty("--ring", "119 60% 35%"),
        window.scrollTo(0, 0);
    }, []),
    e.jsxs(e.Fragment, {
      children: [
        e.jsxs(x, {
          children: [
            e.jsx("title", { children: "Funcionalidades - Tech OS PRO" }),
            e.jsx("meta", {
              name: "description",
              content:
                "Conheça todas as funcionalidades do Tech OS PRO. Sistema completo para assistências técnicas com OS, financeiro, estoque, catálogo e muito mais.",
            }),
          ],
        }),
        e.jsxs("div", {
          className: "min-h-screen bg-white text-gray-900",
          children: [
            e.jsx(h, { onOpenTrial: () => o(!0) }),
            e.jsx("section", {
              className:
                "pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-gray-50 to-white",
              children: e.jsx("div", {
                className: "container mx-auto px-4",
                children: e.jsxs("div", {
                  className: "text-center max-w-4xl mx-auto",
                  children: [
                    e.jsxs("div", {
                      className:
                        "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6",
                      children: [
                        e.jsx(u, { className: "w-4 h-4" }),
                        "Todas as Funcionalidades",
                      ],
                    }),
                    e.jsxs("h1", {
                      className:
                        "text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6",
                      children: [
                        "Conheça o Sistema",
                        e.jsx("span", {
                          className: "text-primary block mt-2",
                          children: "Mais Completo do Mercado",
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-lg text-gray-600 max-w-2xl mx-auto mb-8",
                      children:
                        "Todas as ferramentas que você precisa para transformar sua assistência técnica em um negócio de sucesso.",
                    }),
                    e.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row gap-4 justify-center",
                      children: [
                        e.jsxs(r, {
                          size: "lg",
                          className:
                            "bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 px-8",
                          onClick: () => o(!0),
                          children: [
                            "Começar Teste Grátis",
                            e.jsx(l, { className: "w-5 h-5 ml-2" }),
                          ],
                        }),
                        e.jsx(r, {
                          size: "lg",
                          variant: "outline",
                          className: "border-gray-300",
                          onClick: () => d("/"),
                          children: "Voltar ao Início",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            e.jsx("section", {
              className: "py-12 lg:py-20",
              children: e.jsx("div", {
                className: "container mx-auto px-4",
                children: e.jsx("div", {
                  className: "space-y-16 lg:space-y-24",
                  children: R.map((s, p) =>
                    e.jsxs(
                      "div",
                      {
                        className: `flex flex-col ${
                          p % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        } gap-8 lg:gap-16 items-center`,
                        children: [
                          e.jsx("div", {
                            className: "flex-1 w-full",
                            children: e.jsxs("div", {
                              className: "relative group cursor-pointer",
                              onClick: () =>
                                t({ src: s.image, title: s.title }),
                              children: [
                                e.jsx("div", {
                                  className: `absolute inset-0 bg-gradient-to-r ${s.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`,
                                }),
                                e.jsxs("div", {
                                  className:
                                    "relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group-hover:shadow-2xl transition-shadow",
                                  children: [
                                    e.jsx("img", {
                                      src: s.image,
                                      alt: s.title,
                                      className:
                                        "w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]",
                                      loading: "lazy",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center",
                                      children: e.jsx("div", {
                                        className:
                                          "opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg",
                                        children: e.jsx(f, {
                                          className: "w-6 h-6 text-gray-700",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsxs("div", {
                            className: "flex-1 w-full",
                            children: [
                              e.jsxs("div", {
                                className: `inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${s.color} rounded-full text-white font-medium text-sm mb-4`,
                                children: [
                                  e.jsx(s.icon, { className: "w-4 h-4" }),
                                  s.title,
                                ],
                              }),
                              e.jsx("h2", {
                                className:
                                  "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4",
                                children: s.title,
                              }),
                              e.jsx("p", {
                                className: "text-lg text-gray-600 mb-6",
                                children: s.description,
                              }),
                              e.jsx("ul", {
                                className: "space-y-3",
                                children: s.benefits.map((n) =>
                                  e.jsxs(
                                    "li",
                                    {
                                      className: "flex items-center gap-3",
                                      children: [
                                        e.jsx(b, {
                                          className:
                                            "w-5 h-5 text-primary flex-shrink-0",
                                        }),
                                        e.jsx("span", {
                                          className: "text-gray-700",
                                          children: n,
                                        }),
                                      ],
                                    },
                                    n
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      },
                      s.title
                    )
                  ),
                }),
              }),
            }),
            e.jsx("section", {
              className:
                "py-16 lg:py-24 bg-gradient-to-r from-primary to-green-600",
              children: e.jsxs("div", {
                className: "container mx-auto px-4 text-center",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6",
                    children: "Pronto para Transformar seu Negócio?",
                  }),
                  e.jsx("p", {
                    className: "text-lg text-white/90 max-w-2xl mx-auto mb-8",
                    children:
                      "Junte-se a milhares de técnicos que já estão crescendo com o Tech OS PRO",
                  }),
                  e.jsxs(r, {
                    size: "lg",
                    variant: "secondary",
                    className:
                      "bg-white text-primary hover:bg-gray-100 font-semibold shadow-lg px-8",
                    onClick: () => o(!0),
                    children: [
                      "Começar Agora - 7 Dias Grátis",
                      e.jsx(l, { className: "w-5 h-5 ml-2" }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(j, {}),
            e.jsx(v, {
              open: !!a,
              onOpenChange: () => t(null),
              children: e.jsxs(N, {
                className:
                  "max-w-[95vw] lg:max-w-6xl p-0 bg-black/95 border-none",
                "aria-describedby": void 0,
                children: [
                  e.jsx(y, {
                    className: "sr-only",
                    children: a?.title || "Imagem",
                  }),
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx("button", {
                        onClick: () => t(null),
                        className:
                          "absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors",
                        children: e.jsx(w, { className: "w-6 h-6 text-white" }),
                      }),
                      a &&
                        e.jsxs("div", {
                          className: "p-4",
                          children: [
                            e.jsx("h3", {
                              className:
                                "text-white text-xl font-bold mb-4 text-center",
                              children: a.title,
                            }),
                            e.jsx("img", {
                              src: a.src,
                              alt: a.title,
                              className:
                                "w-full h-auto max-h-[80vh] object-contain rounded-lg",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(C, { open: m, onOpenChange: o }),
          ],
        }),
      ],
    })
  );
}
export { B as default };
