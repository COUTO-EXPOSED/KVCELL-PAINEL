import {
  j as e,
  D as z,
  c as H,
  a_ as W,
  d as U,
  b3 as l,
  bQ as P,
  bz as h,
  N as K,
  cI as Q,
  B as x,
  g as E,
  i as J,
  r as o,
  w as j,
  bL as S,
  G as m,
  b2 as X,
  I as Y,
  b5 as T,
  b6 as C,
  b7 as A,
  b8 as O,
  b9 as D,
  cE as f,
  aa as R,
} from "./index-V8ZHCWL2.js";
const Z = ({ open: u, onOpenChange: p, provider: a }) => {
    if (!a) return null;
    const c = (n) =>
        e.jsx("div", {
          className: "flex gap-1",
          children: [...Array(5)].map((d, i) =>
            e.jsx(
              E,
              {
                className: `w-5 h-5 ${
                  i < n
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                }`,
              },
              i
            )
          ),
        }),
      g = () => {
        if (!a.phone) return;
        const n = a.phone.replace(/\D/g, ""),
          d = encodeURIComponent(
            `Olá! Vim através do software Tech OS PRO e gostaria de saber mais sobre os serviços de ${a.category}.`
          );
        window.open(`https://wa.me/55${n}?text=${d}`, "_blank");
      };
    return e.jsx(z, {
      open: u,
      onOpenChange: p,
      children: e.jsxs(H, {
        className: "max-w-2xl max-h-[90vh] overflow-y-auto",
        children: [
          e.jsx(W, {
            children: e.jsx(U, {
              className: "text-2xl",
              children: "Detalhes da Empresa",
            }),
          }),
          e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsx("div", {
                className:
                  "bg-primary/10 border border-primary/20 rounded-lg p-4",
                children: e.jsxs("p", {
                  className: "text-sm text-foreground text-center font-medium",
                  children: [
                    "🎉 ",
                    e.jsx("strong", { children: "Desconto Exclusivo!" }),
                    " Ao mencionar que veio pelo Tech OS PRO, você garante ",
                    e.jsx("strong", { children: "5% de desconto" }),
                    " em todos os serviços desta empresa!",
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "pb-4 border-b border-border space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("div", {
                            className: `w-3 h-3 rounded-full animate-pulse ${
                              a.is_active ? "bg-green-500" : "bg-red-500"
                            }`,
                          }),
                          e.jsx("span", {
                            className: `text-sm font-bold uppercase tracking-wide ${
                              a.is_active ? "text-green-500" : "text-red-500"
                            }`,
                            children: a.is_active ? "Ativa" : "Inativa",
                          }),
                        ],
                      }),
                      e.jsx(l, {
                        variant: "outline",
                        className:
                          "bg-primary/10 text-primary border-primary/30 font-semibold",
                        children: a.category,
                      }),
                    ],
                  }),
                  e.jsx("h3", {
                    className: "text-3xl font-bold text-foreground",
                    children: a.company_name,
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      c(a.rating),
                      e.jsxs("span", {
                        className: "text-base font-semibold text-foreground",
                        children: ["(", a.rating, ".0)"],
                      }),
                    ],
                  }),
                ],
              }),
              a.description &&
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx("h4", {
                      className: "font-semibold text-foreground",
                      children: "Sobre",
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground leading-relaxed",
                      children: a.description,
                    }),
                  ],
                }),
              a.specialties &&
                a.specialties.length > 0 &&
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx("h4", {
                      className: "font-semibold text-foreground",
                      children: "Especialidades",
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: a.specialties.map((n, d) =>
                        e.jsx(l, { variant: "secondary", children: n }, d)
                      ),
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "space-y-3",
                children: [
                  e.jsx("h4", {
                    className: "font-semibold text-foreground",
                    children: "Contato",
                  }),
                  a.address &&
                    e.jsxs("div", {
                      className: "flex items-start gap-3 text-muted-foreground",
                      children: [
                        e.jsx(P, {
                          className:
                            "w-5 h-5 mt-0.5 flex-shrink-0 text-primary",
                        }),
                        e.jsx("span", { children: a.address }),
                      ],
                    }),
                  a.phone &&
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx(h, {
                          className: "w-5 h-5 flex-shrink-0 text-primary",
                        }),
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: a.phone,
                        }),
                      ],
                    }),
                  a.email &&
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx(K, {
                          className: "w-5 h-5 flex-shrink-0 text-primary",
                        }),
                        e.jsx("a", {
                          href: `mailto:${a.email}`,
                          className: "text-primary hover:underline",
                          children: a.email,
                        }),
                      ],
                    }),
                  a.website &&
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        e.jsx(Q, {
                          className: "w-5 h-5 flex-shrink-0 text-primary",
                        }),
                        e.jsx("a", {
                          href: a.website,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-primary hover:underline",
                          children: "Visitar site",
                        }),
                      ],
                    }),
                ],
              }),
              a.phone &&
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(x, {
                      onClick: g,
                      className:
                        "w-full bg-[#25D366] hover:bg-[#20BA5A] text-white",
                      children: [
                        e.jsx(h, { className: "w-4 h-4 mr-2" }),
                        "Entrar em Contato via WhatsApp",
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-xs text-center text-muted-foreground",
                      children:
                        "Lembre-se de mencionar que veio pelo Tech OS PRO para garantir seu desconto de 5%!",
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
    });
  },
  N = [
    { value: "all", label: "Todas as Categorias" },
    { value: "reparo-placa", label: "Reparo em Placa" },
    { value: "fornecedor", label: "Fornecedor de Peças" },
    { value: "unlocker", label: "Unlocker/Desbloqueio" },
    { value: "assistencia", label: "Assistência Técnica" },
    { value: "atacado", label: "Atacado" },
    { value: "outros", label: "Outros Serviços" },
  ],
  ee = [
    { value: "all", label: "Todos os Rankings" },
    { value: "top3", label: "Top 3 Destaque" },
    { value: "1", label: "Top 1" },
    { value: "2", label: "Top 2" },
    { value: "3", label: "Top 3" },
    { value: "4", label: "Top 4" },
    { value: "5", label: "Top 5" },
    { value: "6", label: "Top 6" },
    { value: "7", label: "Top 7" },
    { value: "8", label: "Top 8" },
    { value: "9", label: "Top 9" },
    { value: "10", label: "Top 10" },
  ],
  ae = () => {
    const { toast: u } = J(),
      [p, a] = o.useState([]),
      [c, g] = o.useState(""),
      [n, d] = o.useState("all"),
      [i, $] = o.useState("all"),
      [V, B] = o.useState(!0),
      [I, L] = o.useState(null),
      [M, v] = o.useState(!1);
    o.useEffect(() => {
      y(), q();
    }, []);
    const y = async () => {
        try {
          const { data: s, error: r } = await j
            .from("service_providers")
            .select("*")
            .eq("is_active", !0)
            .order("is_top_3_services", { ascending: !1 })
            .order("top_ranking", { ascending: !0, nullsFirst: !1 })
            .order("rating", { ascending: !1 })
            .order("company_name", { ascending: !0 });
          if (r) throw r;
          a(s || []);
        } catch (s) {
          s?.message !== "Failed to fetch" &&
            u({
              title: "Erro ao carregar serviços",
              description: s?.message || "Tente novamente mais tarde",
              variant: "destructive",
            }),
            a([]);
        } finally {
          B(!1);
        }
      },
      q = () => {
        const s = j
          .channel("service_providers_realtime")
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "service_providers" },
            () => {
              y();
            }
          )
          .subscribe();
        return () => {
          j.removeChannel(s);
        };
      },
      b = p.filter((s) => {
        const r =
            s.company_name.toLowerCase().includes(c.toLowerCase()) ||
            s.description?.toLowerCase().includes(c.toLowerCase()) ||
            s.specialties?.some((G) =>
              G.toLowerCase().includes(c.toLowerCase())
            ),
          t = n === "all" || s.category === n,
          F =
            i === "all" ||
            (i === "top3" && s.is_top_3_services) ||
            (i !== "top3" && s.top_ranking?.toString() === i);
        return r && t && F;
      }),
      w = (s) =>
        e.jsx("div", {
          className: "flex gap-1",
          children: [...Array(5)].map((r, t) =>
            e.jsx(
              E,
              {
                className: `w-5 h-5 ${
                  t < s
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                }`,
              },
              t
            )
          ),
        }),
      k = (s) => {
        if (!s.phone) return;
        const r = s.phone.replace(/\D/g, ""),
          t = encodeURIComponent(
            `Olá! Vim através do software Tech OS PRO e gostaria de saber mais sobre os serviços de ${s.category}.`
          );
        window.open(`https://wa.me/55${r}?text=${t}`, "_blank");
      },
      _ = (s) => {
        L(s), v(!0);
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "mb-6",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 mb-2",
              children: [
                e.jsx(S, { className: "w-8 h-8 text-primary" }),
                e.jsx("h1", {
                  className: "text-3xl font-bold",
                  children: "Serviços e Indicações",
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-muted-foreground mb-3",
              children: "Os melhores profissionais e fornecedores recomendados",
            }),
            e.jsxs("div", {
              className:
                "bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2",
              children: [
                e.jsxs("p", {
                  className: "text-sm text-foreground",
                  children: [
                    "✓ ",
                    e.jsx("strong", {
                      children: "Empresas verificadas e seguras",
                    }),
                    " - Todas as empresas aqui presentes são avaliadas e intermediadas pela Tech OS PRO para seu melhor atendimento.",
                  ],
                }),
                e.jsxs("p", {
                  className: "text-sm text-foreground",
                  children: [
                    "✓ ",
                    e.jsx("strong", { children: "Desconto exclusivo de 5%" }),
                    " - Ao contratar serviços através do Tech OS PRO, você garante 5% de desconto com todas as empresas parceiras.",
                  ],
                }),
                e.jsxs("p", {
                  className: "text-sm text-foreground",
                  children: [
                    "✓ ",
                    e.jsx("strong", { children: "Suporte e garantia" }),
                    " - Atendimento profissional com respaldo da Tech OS PRO.",
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs(m, {
          className:
            "p-6 mb-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/30 relative overflow-hidden",
          children: [
            e.jsx("div", {
              className:
                "absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none",
            }),
            e.jsxs("div", {
              className: "relative space-y-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3 flex-wrap",
                  children: [
                    e.jsx(l, {
                      className: "bg-primary text-primary-foreground",
                      children: "Oficial",
                    }),
                    e.jsx("h2", {
                      className: "text-2xl font-bold",
                      children:
                        "🎨 BrunoG7 — Design & Sistemas para Assistência Técnica",
                    }),
                  ],
                }),
                e.jsxs("p", {
                  className: "text-sm text-muted-foreground",
                  children: [
                    "Identidade visual profissional pensada ",
                    e.jsx("strong", { children: "exclusivamente" }),
                    " para sua assistência técnica. Tudo feito pelo CEO ",
                    e.jsx("strong", { children: "BrunoG7" }),
                    ", criador do Tech OS PRO.",
                  ],
                }),
                e.jsxs("div", {
                  className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3",
                  children: [
                    e.jsxs("div", {
                      className:
                        "bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-smooth",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-1",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold",
                              children: "Logo 3D 4K",
                            }),
                            e.jsx(l, {
                              variant: "outline",
                              className:
                                "bg-primary/10 text-primary border-primary/20",
                              children: "R$ 29,90",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            "Logo profissional em alta resolução, com efeito 3D realista.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-smooth",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-1",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold",
                              children: "Banners",
                            }),
                            e.jsx(l, {
                              variant: "outline",
                              className:
                                "bg-primary/10 text-primary border-primary/20",
                              children: "R$ 39,90",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            "Banners para catálogo, redes sociais e fachada da loja.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-smooth",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-1",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold",
                              children: "Cartão de Visita",
                            }),
                            e.jsx(l, {
                              variant: "outline",
                              className:
                                "bg-primary/10 text-primary border-primary/20",
                              children: "R$ 39,90",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            "Arte do cartão pronta para impressão, frente e verso.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-smooth",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-1",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold",
                              children: "Instagram Completo",
                            }),
                            e.jsx(l, {
                              variant: "outline",
                              className:
                                "bg-amber-500/10 text-amber-600 border-amber-500/20",
                              children: "Sob orçamento",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            "Identidade visual completa: feed, destaques, capa e templates personalizados.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-smooth",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-1",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold",
                              children: "Sistemas Personalizados",
                            }),
                            e.jsx(l, {
                              variant: "outline",
                              className:
                                "bg-amber-500/10 text-amber-600 border-amber-500/20",
                              children: "Sob orçamento",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            "Desenvolvimento de sistemas sob medida para sua operação.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-smooth",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-1",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold",
                              children: "E muito mais",
                            }),
                            e.jsx(l, {
                              variant: "outline",
                              className:
                                "bg-primary/10 text-primary border-primary/20",
                              children: "Consulte",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children:
                            "Tudo focado na identidade visual da sua assistência técnica.",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-2 pt-2",
                  children: [
                    e.jsxs(x, {
                      className: "bg-[#25D366] hover:bg-[#20BA5A] text-white",
                      onClick: () => {
                        const s = encodeURIComponent(
                          "Olá BrunoG7! Vim pelo Tech OS PRO e gostaria de um orçamento de design/sistemas para minha assistência técnica."
                        );
                        window.open(
                          `https://wa.me/5518997798619?text=${s}`,
                          "_blank"
                        );
                      },
                      children: [
                        e.jsx(h, { className: "w-4 h-4 mr-2" }),
                        "Solicitar orçamento — (18) 99779-8619",
                      ],
                    }),
                    e.jsx("span", {
                      className: "text-xs text-muted-foreground self-center",
                      children: "Atendimento direto com o CEO BrunoG7",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx(m, {
          className: "p-6 bg-card border-border mb-6",
          children: e.jsxs("div", {
            className: "flex flex-col md:flex-row gap-4",
            children: [
              e.jsxs("div", {
                className: "relative flex-1",
                children: [
                  e.jsx(X, {
                    className:
                      "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
                  }),
                  e.jsx(Y, {
                    placeholder:
                      "Buscar por nome, descrição ou especialidade...",
                    value: c,
                    onChange: (s) => g(s.target.value),
                    className: "pl-10",
                  }),
                ],
              }),
              e.jsxs(T, {
                value: n,
                onValueChange: d,
                children: [
                  e.jsx(C, {
                    className: "w-full md:w-[220px]",
                    children: e.jsx(A, { placeholder: "Categoria" }),
                  }),
                  e.jsx(O, {
                    children: N.map((s) =>
                      e.jsx(D, { value: s.value, children: s.label }, s.value)
                    ),
                  }),
                ],
              }),
              e.jsxs(T, {
                value: i,
                onValueChange: $,
                children: [
                  e.jsx(C, {
                    className: "w-full md:w-[200px]",
                    children: e.jsx(A, { placeholder: "Ranking" }),
                  }),
                  e.jsx(O, {
                    children: ee.map((s) =>
                      e.jsx(D, { value: s.value, children: s.label }, s.value)
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        V
          ? e.jsx("div", {
              className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
              children: [1, 2, 3].map((s) =>
                e.jsxs(
                  m,
                  {
                    className: "p-6 bg-card border-border animate-pulse",
                    children: [
                      e.jsx("div", { className: "h-6 bg-muted rounded mb-4" }),
                      e.jsx("div", { className: "h-4 bg-muted rounded mb-2" }),
                      e.jsx("div", { className: "h-4 bg-muted rounded w-3/4" }),
                    ],
                  },
                  s
                )
              ),
            })
          : b.length === 0
          ? e.jsxs(m, {
              className: "p-12 bg-card border-border text-center",
              children: [
                e.jsx(S, { className: "w-16 h-16 text-muted mx-auto mb-4" }),
                e.jsx("p", {
                  className: "text-lg text-muted-foreground",
                  children:
                    "Nenhum serviço encontrado para os filtros aplicados.",
                }),
              ],
            })
          : e.jsxs(e.Fragment, {
              children: [
                n === "all" &&
                  c === "" &&
                  i === "all" &&
                  e.jsxs("div", {
                    className: "mb-8",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                          e.jsx(f, { className: "w-6 h-6 text-primary" }),
                          e.jsx("h2", {
                            className: "text-2xl font-bold",
                            children: "🏆 Ranking Top 3 - Empresas Destaque",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "grid gap-6 md:grid-cols-3",
                        children: b
                          .filter((s) => s.is_top_3_services)
                          .slice(0, 3)
                          .map((s, r) =>
                            e.jsxs(
                              m,
                              {
                                className:
                                  "p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30 hover:shadow-elegant hover:border-primary/40 transition-smooth relative overflow-hidden",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "absolute top-2 right-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg",
                                    children: [s.top_ranking || r + 1, "º"],
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-4",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                          s.logo_url
                                            ? e.jsx("div", {
                                                className:
                                                  "w-20 h-20 rounded-lg border border-primary/20 overflow-hidden bg-background flex-shrink-0",
                                                children: e.jsx("img", {
                                                  src: s.logo_url,
                                                  alt: s.company_name,
                                                  className:
                                                    "w-full h-full object-contain p-1",
                                                  onError: (t) => {
                                                    (t.currentTarget.style.display =
                                                      "none"),
                                                      (t.currentTarget.parentElement.innerHTML =
                                                        '<div class="w-full h-full flex items-center justify-center"><svg class="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>');
                                                  },
                                                }),
                                              })
                                            : e.jsx("div", {
                                                className:
                                                  "w-20 h-20 rounded-lg border border-primary/20 bg-background flex items-center justify-center flex-shrink-0",
                                                children: e.jsx(f, {
                                                  className:
                                                    "w-10 h-10 text-primary",
                                                }),
                                              }),
                                          e.jsxs("div", {
                                            className: "flex-1 space-y-2",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  e.jsx("div", {
                                                    className: `w-2 h-2 rounded-full ${
                                                      s.is_active
                                                        ? "bg-green-500"
                                                        : "bg-red-500"
                                                    }`,
                                                  }),
                                                  e.jsx("span", {
                                                    className: `text-xs font-medium ${
                                                      s.is_active
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                    }`,
                                                    children: s.is_active
                                                      ? "Ativa"
                                                      : "Inativa",
                                                  }),
                                                ],
                                              }),
                                              e.jsx("h3", {
                                                className:
                                                  "text-lg font-bold text-foreground",
                                                children: s.company_name,
                                              }),
                                              e.jsx(l, {
                                                variant: "outline",
                                                className:
                                                  "bg-primary/10 text-primary border-primary/20",
                                                children: N.find(
                                                  (t) => t.value === s.category
                                                )?.label,
                                              }),
                                              w(s.rating),
                                            ],
                                          }),
                                        ],
                                      }),
                                      s.description &&
                                        e.jsx("p", {
                                          className:
                                            "text-sm text-muted-foreground line-clamp-2",
                                          children: s.description,
                                        }),
                                      e.jsxs("div", {
                                        className: "flex gap-2 pt-2",
                                        children: [
                                          e.jsxs(x, {
                                            variant: "outline",
                                            className: "flex-1",
                                            onClick: () => _(s),
                                            children: [
                                              e.jsx(R, {
                                                className: "w-4 h-4 mr-2",
                                              }),
                                              "Ver Detalhes",
                                            ],
                                          }),
                                          s.phone &&
                                            e.jsxs(x, {
                                              className:
                                                "flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white",
                                              onClick: () => k(s),
                                              children: [
                                                e.jsx(h, {
                                                  className: "w-4 h-4 mr-2",
                                                }),
                                                "WhatsApp",
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              s.id
                            )
                          ),
                      }),
                    ],
                  }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h2", {
                      className: "text-xl font-bold mb-4",
                      children: "Todas as Empresas",
                    }),
                    e.jsx("div", {
                      className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                      children: b.map((s) =>
                        e.jsx(
                          m,
                          {
                            className:
                              "p-6 bg-card border-border hover:shadow-elegant hover:border-primary/20 transition-smooth group",
                            children: e.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-start gap-4",
                                  children: [
                                    s.logo_url
                                      ? e.jsx("div", {
                                          className:
                                            "w-20 h-20 rounded-lg border border-border overflow-hidden bg-muted flex-shrink-0",
                                          children: e.jsx("img", {
                                            src: s.logo_url,
                                            alt: s.company_name,
                                            className:
                                              "w-full h-full object-contain p-1",
                                            onError: (r) => {
                                              (r.currentTarget.style.display =
                                                "none"),
                                                (r.currentTarget.parentElement.innerHTML =
                                                  '<div class="w-full h-full flex items-center justify-center"><svg class="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>');
                                            },
                                          }),
                                        })
                                      : e.jsx("div", {
                                          className:
                                            "w-20 h-20 rounded-lg border border-border bg-muted flex items-center justify-center flex-shrink-0",
                                          children: e.jsx(f, {
                                            className:
                                              "w-10 h-10 text-muted-foreground",
                                          }),
                                        }),
                                    e.jsxs("div", {
                                      className: "flex-1 space-y-2",
                                      children: [
                                        e.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            e.jsx("div", {
                                              className: `w-2 h-2 rounded-full ${
                                                s.is_active
                                                  ? "bg-green-500"
                                                  : "bg-red-500"
                                              }`,
                                            }),
                                            e.jsx("span", {
                                              className: `text-xs font-medium ${
                                                s.is_active
                                                  ? "text-green-500"
                                                  : "text-red-500"
                                              }`,
                                              children: s.is_active
                                                ? "Ativa"
                                                : "Inativa",
                                            }),
                                          ],
                                        }),
                                        e.jsx("h3", {
                                          className:
                                            "text-lg font-bold group-hover:text-primary transition-smooth",
                                          children: s.company_name,
                                        }),
                                        e.jsx(l, {
                                          variant: "outline",
                                          className:
                                            "bg-primary/10 text-primary border-primary/20",
                                          children: N.find(
                                            (r) => r.value === s.category
                                          )?.label,
                                        }),
                                        w(s.rating),
                                      ],
                                    }),
                                  ],
                                }),
                                s.description &&
                                  e.jsx("p", {
                                    className:
                                      "text-sm text-muted-foreground line-clamp-2",
                                    children: s.description,
                                  }),
                                s.specialties &&
                                  s.specialties.length > 0 &&
                                  e.jsxs("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                      s.specialties
                                        .slice(0, 3)
                                        .map((r, t) =>
                                          e.jsx(
                                            l,
                                            {
                                              variant: "secondary",
                                              className: "text-xs",
                                              children: r,
                                            },
                                            t
                                          )
                                        ),
                                      s.specialties.length > 3 &&
                                        e.jsxs(l, {
                                          variant: "secondary",
                                          className: "text-xs",
                                          children: [
                                            "+",
                                            s.specialties.length - 3,
                                          ],
                                        }),
                                    ],
                                  }),
                                e.jsxs("div", {
                                  className:
                                    "space-y-2 text-sm border-t border-border pt-3",
                                  children: [
                                    s.address &&
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-muted-foreground",
                                        children: [
                                          e.jsx(P, {
                                            className:
                                              "w-4 h-4 text-primary flex-shrink-0",
                                          }),
                                          e.jsx("span", {
                                            className: "line-clamp-1",
                                            children: s.address,
                                          }),
                                        ],
                                      }),
                                    s.phone &&
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 text-muted-foreground",
                                        children: [
                                          e.jsx(h, {
                                            className:
                                              "w-4 h-4 text-primary flex-shrink-0",
                                          }),
                                          e.jsx("span", { children: s.phone }),
                                        ],
                                      }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-2 pt-2",
                                  children: [
                                    e.jsxs(x, {
                                      variant: "outline",
                                      className: "flex-1",
                                      onClick: () => _(s),
                                      children: [
                                        e.jsx(R, { className: "w-4 h-4 mr-2" }),
                                        "Ver Detalhes",
                                      ],
                                    }),
                                    s.phone &&
                                      e.jsxs(x, {
                                        className:
                                          "flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white",
                                        onClick: () => k(s),
                                        children: [
                                          e.jsx(h, {
                                            className: "w-4 h-4 mr-2",
                                          }),
                                          "WhatsApp",
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
                    }),
                  ],
                }),
              ],
            }),
        e.jsx(Z, { open: M, onOpenChange: v, provider: I }),
      ],
    });
  };
export { ae as default };
