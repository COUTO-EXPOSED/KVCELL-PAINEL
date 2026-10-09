import {
  z as te,
  r as d,
  j as e,
  b$ as re,
  b2 as le,
  I as ie,
  O as U,
  bL as G,
  B as g,
  G as N,
  b3 as h,
  d_ as Z,
  a1 as v,
  bA as D,
  ct as P,
  A as oe,
  bV as ne,
  cK as ce,
  bW as de,
  g as K,
  bZ as q,
  k as V,
  C as me,
  D as xe,
  c as he,
  a_ as pe,
  d as ue,
  ew as ge,
  dz as fe,
  a3 as J,
  bM as Y,
  eK as je,
  dg as Ne,
  Z as ve,
  w as R,
  bU as be,
} from "./index-V8ZHCWL2.js";
import { I } from "./image-off-9SOsXh9j.js";
import { B as we } from "./badge-percent-BqXrkbuf.js";
const ye = "5518997798619",
  n = (l) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(l || 0),
  _e = 12,
  $ = 0.05,
  z = (l) =>
    (l.variations || []).filter((r) => r && r.name && Number(r.price) > 0),
  E = (l, r) => {
    if (r) return Number(r.promo_price ?? r.price);
    const k = z(l);
    return k.length
      ? Math.min(...k.map((b) => Number(b.promo_price ?? b.price)))
      : Number(l.promo_price ?? l.price);
  },
  Q = (l) => (l === "servico" ? "Serviço" : "Produto digital"),
  C = (l) => {
    const r = l >= 600 ? _e : l >= 300 ? 6 : 3;
    return { n: r, value: l / r };
  },
  Ce = [
    {
      icon: Y,
      title: "Compra 100% segura",
      text: "Atendimento humano e garantia oficial",
    },
    {
      icon: V,
      title: "Até 12x sem juros",
      text: "Cartão, PIX, boleto e link de pagamento",
    },
    {
      icon: J,
      title: "Entrega digital imediata",
      text: "100% digital: liberação rápida após a confirmação",
    },
    {
      icon: je,
      title: "Suporte especializado",
      text: "Time de assistência técnica no WhatsApp",
    },
  ],
  ke = [
    { icon: q, label: "PIX", detail: "5% de desconto à vista" },
    { icon: V, label: "Cartão de crédito", detail: "Até 12x sem juros" },
    { icon: Ne, label: "Boleto bancário", detail: "Compensação em 1 dia útil" },
    {
      icon: ve,
      label: "Link de pagamento",
      detail: "Enviado direto no WhatsApp",
    },
  ];
function Ae() {
  const { user: l } = te(),
    [r, k] = d.useState([]),
    [b, ee] = d.useState(!0),
    [A, se] = d.useState(""),
    [p, W] = d.useState("all"),
    [t, w] = d.useState(null),
    [O, u] = d.useState(0),
    [X, y] = d.useState(0),
    [F, H] = d.useState(0);
  d.useEffect(() => {
    (async () => {
      const { data: a, error: o } = await R.from("ceo_store_products")
        .select(
          "id, title, description, category, item_type, price, promo_price, variations, images, whatsapp, badge, is_featured"
        )
        .eq("is_active", !0)
        .order("is_featured", { ascending: !1 })
        .order("sort_order", { ascending: !0 })
        .order("created_at", { ascending: !1 });
      k(a || []), ee(!1);
    })();
  }, []);
  const ae = d.useMemo(
      () => Array.from(new Set(r.map((s) => s.category).filter(Boolean))),
      [r]
    ),
    f = d.useMemo(
      () => r.filter((s) => s.promo_price != null && s.promo_price < s.price),
      [r]
    ),
    j = d.useMemo(() => {
      const s = r.filter((a) => a.is_featured);
      return (s.length ? s : f.length ? f : r).slice(0, 5);
    }, [r, f]);
  d.useEffect(() => {
    if (j.length < 2) return;
    const s = setInterval(() => H((a) => (a + 1) % j.length), 6e3);
    return () => clearInterval(s);
  }, [j.length]);
  const L = d.useMemo(() => {
      const s = A.trim().toLowerCase();
      return r.filter((a) => {
        const o =
            !s ||
            a.title.toLowerCase().includes(s) ||
            (a.description || "").toLowerCase().includes(s) ||
            (a.category || "").toLowerCase().includes(s),
          c = p === "all" || a.category === p;
        return o && c;
      });
    }, [r, A, p]),
    M = async (s, a) => {
      const o = E(s, a),
        c = a ? `${s.title} - ${a.name}` : s.title;
      try {
        if (l) {
          const { data: m } = await R.from("profiles")
            .select("name, email, whatsapp")
            .eq("user_id", l.id)
            .maybeSingle();
          await R.from("ceo_store_orders").insert({
            product_id: s.id,
            product_title: c,
            price: o,
            user_id: l.id,
            customer_name: m?.name || l.email,
            customer_email: m?.email || l.email,
            customer_phone: m?.whatsapp || null,
          });
        }
      } catch {}
      const _ = (s.whatsapp || ye).replace(/\D/g, ""),
        x = encodeURIComponent(
          `Olá! Tenho interesse em *${c}* (${n(
            o
          )}) da Loja Tech OS PRO. Pode me ajudar?`
        );
      window.open(`https://wa.me/${_}?text=${x}`, "_blank"),
        be.success("Redirecionando para o WhatsApp...");
    },
    i = j[F],
    S = i ? i.promo_price ?? i.price : 0,
    T =
      i && i.promo_price != null && i.promo_price < i.price
        ? Math.round(((i.price - i.promo_price) / i.price) * 100)
        : 0;
  return e.jsxs("div", {
    className: "space-y-8 max-w-[1400px] mx-auto pb-10",
    children: [
      e.jsx("div", {
        className:
          "rounded-3xl bg-gradient-to-r from-primary via-primary to-emerald-600 p-4 md:p-5 text-primary-foreground shadow-lg",
        children: e.jsxs("div", {
          className: "flex flex-col lg:flex-row lg:items-center gap-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3 shrink-0",
              children: [
                e.jsx("div", {
                  className:
                    "w-11 h-11 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm",
                  children: e.jsx(re, { className: "w-6 h-6" }),
                }),
                e.jsxs("div", {
                  className: "leading-tight",
                  children: [
                    e.jsx("h1", {
                      className: "text-lg md:text-xl font-bold",
                      children: "Loja Tech OS PRO",
                    }),
                    e.jsx("p", {
                      className: "text-[11px] text-primary-foreground/80",
                      children:
                        "Produtos digitais e serviços para assistências",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "relative flex-1 min-w-0",
              children: [
                e.jsx(le, {
                  className:
                    "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
                }),
                e.jsx(ie, {
                  placeholder: "Buscar produtos digitais e serviços...",
                  value: A,
                  onChange: (s) => se(s.target.value),
                  className:
                    "pl-11 h-12 rounded-2xl bg-background text-foreground border-0 shadow-sm",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "hidden lg:flex items-center gap-4 text-xs shrink-0",
              children: [
                e.jsxs("span", {
                  className: "flex items-center gap-1.5",
                  children: [
                    e.jsx(U, { className: "w-3.5 h-3.5" }),
                    " Ambiente seguro",
                  ],
                }),
                e.jsxs("span", {
                  className: "flex items-center gap-1.5",
                  children: [
                    e.jsx(G, { className: "w-3.5 h-3.5" }),
                    " ",
                    r.length,
                    " itens",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "flex gap-2 overflow-x-auto pb-1 -mt-4",
        children: [
          e.jsx(g, {
            size: "sm",
            variant: p === "all" ? "default" : "outline",
            onClick: () => W("all"),
            className: "rounded-full shrink-0",
            children: "Todos os departamentos",
          }),
          ae.map((s) =>
            e.jsx(
              g,
              {
                size: "sm",
                variant: p === s ? "default" : "outline",
                onClick: () => W(s),
                className: "rounded-full shrink-0",
                children: s,
              },
              s
            )
          ),
        ],
      }),
      !b &&
        i &&
        e.jsxs("div", {
          className: "grid lg:grid-cols-3 gap-4",
          children: [
            e.jsx(N, {
              className:
                "lg:col-span-2 rounded-3xl overflow-hidden border-border/60 cursor-pointer group",
              onClick: () => {
                w(i), u(0), y(0);
              },
              children: e.jsxs("div", {
                className: "grid sm:grid-cols-2",
                children: [
                  e.jsxs("div", {
                    className:
                      "relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[220px] bg-muted/50",
                    children: [
                      i.images?.[0]
                        ? e.jsx("img", {
                            src: i.images[0],
                            alt: i.title,
                            className:
                              "absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500",
                          })
                        : e.jsx("div", {
                            className:
                              "w-full h-full flex items-center justify-center text-muted-foreground",
                            children: e.jsx(I, { className: "w-10 h-10" }),
                          }),
                      T > 0 &&
                        e.jsxs(h, {
                          variant: "destructive",
                          className:
                            "absolute top-4 left-4 rounded-full gap-1 shadow",
                          children: [
                            e.jsx(Z, { className: "w-3.5 h-3.5" }),
                            " -",
                            T,
                            "%",
                          ],
                        }),
                    ],
                  }),
                  e.jsxs(v, {
                    className: "p-6 flex flex-col justify-center gap-3",
                    children: [
                      e.jsxs("span", {
                        className:
                          "text-[11px] font-semibold uppercase tracking-wider text-primary flex items-center gap-1",
                        children: [
                          e.jsx(G, { className: "w-3.5 h-3.5" }),
                          " Destaque da semana",
                        ],
                      }),
                      e.jsx("h2", {
                        className:
                          "text-xl md:text-2xl font-bold leading-tight line-clamp-2",
                        children: i.title,
                      }),
                      e.jsx("p", {
                        className:
                          "text-sm text-muted-foreground line-clamp-3 [overflow-wrap:anywhere]",
                        children: i.description,
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsxs("div", {
                            className: "flex items-baseline gap-2",
                            children: [
                              e.jsx("span", {
                                className:
                                  "text-3xl font-extrabold text-primary",
                                children: n(S),
                              }),
                              T > 0 &&
                                e.jsx("span", {
                                  className:
                                    "text-sm line-through text-muted-foreground",
                                  children: n(i.price),
                                }),
                            ],
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-muted-foreground mt-1",
                            children: [
                              "ou ",
                              C(S).n,
                              "x de ",
                              n(C(S).value),
                              " sem juros ·",
                              " ",
                              e.jsxs("span", {
                                className: "text-primary font-medium",
                                children: [n(S * (1 - $)), " no PIX"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs(g, {
                        className: "rounded-2xl gap-2 w-fit",
                        onClick: (s) => {
                          s.stopPropagation(), M(i);
                        },
                        children: [
                          e.jsx(D, { className: "w-4 h-4" }),
                          " Comprar agora",
                        ],
                      }),
                      j.length > 1 &&
                        e.jsx("div", {
                          className: "flex gap-1.5 pt-1",
                          children: j.map((s, a) =>
                            e.jsx(
                              "button",
                              {
                                onClick: (o) => {
                                  o.stopPropagation(), H(a);
                                },
                                className: `h-1.5 rounded-full transition-all ${
                                  a === F
                                    ? "w-6 bg-primary"
                                    : "w-2 bg-muted-foreground/30"
                                }`,
                                "aria-label": `Destaque ${a + 1}`,
                              },
                              a
                            )
                          ),
                        }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(N, {
              className: "rounded-3xl border-border/60",
              children: e.jsxs(v, {
                className: "p-5 space-y-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("h3", {
                        className: "font-bold flex items-center gap-2",
                        children: [
                          e.jsx(we, { className: "w-4 h-4 text-destructive" }),
                          " Ofertas do dia",
                        ],
                      }),
                      e.jsxs("span", {
                        className: "text-[11px] text-muted-foreground",
                        children: [f.length, " itens"],
                      }),
                    ],
                  }),
                  e.jsx(P, {}),
                  f.length === 0
                    ? e.jsx("p", {
                        className:
                          "text-sm text-muted-foreground py-6 text-center",
                        children:
                          "Nenhuma oferta ativa no momento. Volte em breve!",
                      })
                    : e.jsx("div", {
                        className: "space-y-3",
                        children: f.slice(0, 4).map((s) => {
                          const a = Math.round(
                            ((s.price - s.promo_price) / s.price) * 100
                          );
                          return e.jsxs(
                            "button",
                            {
                              onClick: () => {
                                w(s), u(0), y(0);
                              },
                              className:
                                "w-full flex items-center gap-3 text-left rounded-2xl p-2 hover:bg-muted/60 transition-colors",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-14 h-14 rounded-xl overflow-hidden bg-muted shrink-0",
                                  children: s.images?.[0]
                                    ? e.jsx("img", {
                                        src: s.images[0],
                                        alt: s.title,
                                        className: "w-full h-full object-cover",
                                      })
                                    : e.jsx("div", {
                                        className:
                                          "w-full h-full flex items-center justify-center text-muted-foreground",
                                        children: e.jsx(I, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-sm font-medium line-clamp-1",
                                      children: s.title,
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "text-sm font-bold text-primary",
                                          children: n(s.promo_price),
                                        }),
                                        e.jsxs(h, {
                                          variant: "destructive",
                                          className:
                                            "rounded-full text-[10px] px-1.5 py-0",
                                          children: ["-", a, "%"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx(oe, {
                                  className:
                                    "w-4 h-4 text-muted-foreground shrink-0",
                                }),
                              ],
                            },
                            s.id
                          );
                        }),
                      }),
                ],
              }),
            }),
          ],
        }),
      e.jsx("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        children: Ce.map((s) =>
          e.jsx(
            N,
            {
              className: "rounded-2xl border-border/60",
              children: e.jsxs(v, {
                className: "p-4 flex items-start gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0",
                    children: e.jsx(s.icon, { className: "w-[18px] h-[18px]" }),
                  }),
                  e.jsxs("div", {
                    className: "min-w-0",
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-semibold leading-tight",
                        children: s.title,
                      }),
                      e.jsx("p", {
                        className: "text-[11px] text-muted-foreground mt-0.5",
                        children: s.text,
                      }),
                    ],
                  }),
                ],
              }),
            },
            s.title
          )
        ),
      }),
      e.jsxs("div", {
        className: "space-y-4",
        children: [
          e.jsx("div", {
            className: "flex items-end justify-between",
            children: e.jsxs("div", {
              children: [
                e.jsx("h2", {
                  className: "text-lg font-bold",
                  children: p === "all" ? "Todos os produtos e serviços" : p,
                }),
                e.jsxs("p", {
                  className: "text-xs text-muted-foreground",
                  children: [L.length, " resultado(s)"],
                }),
              ],
            }),
          }),
          b
            ? e.jsx("div", {
                className:
                  "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: Array.from({ length: 8 }).map((s, a) =>
                  e.jsx(ne, { className: "h-80 rounded-3xl" }, a)
                ),
              })
            : L.length === 0
            ? e.jsx(N, {
                className: "rounded-3xl border-dashed",
                children: e.jsxs(v, {
                  className: "py-16 text-center space-y-2",
                  children: [
                    e.jsx(ce, {
                      className: "w-10 h-10 mx-auto text-muted-foreground",
                    }),
                    e.jsx("p", {
                      className: "font-semibold",
                      children: "Nenhum item por aqui ainda",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: "Em breve novos produtos e serviços na loja.",
                    }),
                  ],
                }),
              })
            : e.jsx("div", {
                className:
                  "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
                children: L.map((s) => {
                  const a = z(s),
                    o = E(s),
                    c =
                      !a.length &&
                      s.promo_price != null &&
                      s.promo_price < s.price,
                    _ = c ? Math.round(((s.price - o) / s.price) * 100) : 0,
                    x = C(o);
                  return e.jsxs(
                    N,
                    {
                      className:
                        "group rounded-3xl overflow-hidden border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col",
                      onClick: () => {
                        w(s), u(0), y(0);
                      },
                      children: [
                        e.jsxs("div", {
                          className:
                            "relative aspect-square bg-muted/40 overflow-hidden",
                          children: [
                            s.images?.[0]
                              ? e.jsx("img", {
                                  src: s.images[0],
                                  alt: s.title,
                                  loading: "lazy",
                                  className:
                                    "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300",
                                })
                              : e.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-muted-foreground",
                                  children: e.jsx(I, { className: "w-8 h-8" }),
                                }),
                            e.jsxs("div", {
                              className:
                                "absolute top-3 left-3 flex flex-col gap-1.5 items-start",
                              children: [
                                s.badge &&
                                  e.jsx(h, {
                                    className: "rounded-full shadow",
                                    children: s.badge,
                                  }),
                                c &&
                                  e.jsxs(h, {
                                    variant: "destructive",
                                    className: "rounded-full shadow gap-1",
                                    children: [
                                      e.jsx(Z, { className: "w-3 h-3" }),
                                      " -",
                                      _,
                                      "%",
                                    ],
                                  }),
                              ],
                            }),
                            e.jsx(h, {
                              variant: "secondary",
                              className: "absolute top-3 right-3 rounded-full",
                              children: Q(s.item_type),
                            }),
                          ],
                        }),
                        e.jsxs(v, {
                          className: "p-4 flex-1 flex flex-col gap-1.5",
                          children: [
                            s.category &&
                              e.jsxs("span", {
                                className:
                                  "text-[10px] uppercase tracking-wide text-muted-foreground flex items-center gap-1",
                                children: [
                                  e.jsx(de, { className: "w-3 h-3" }),
                                  " ",
                                  s.category,
                                ],
                              }),
                            e.jsx("h3", {
                              className:
                                "font-semibold text-sm leading-tight line-clamp-2",
                              children: s.title,
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-1 text-amber-500",
                              children: [
                                Array.from({ length: 5 }).map((m, B) =>
                                  e.jsx(
                                    K,
                                    { className: "w-3 h-3 fill-current" },
                                    B
                                  )
                                ),
                                e.jsx("span", {
                                  className:
                                    "text-[10px] text-muted-foreground ml-1",
                                  children: "Vendedor verificado",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "mt-auto pt-2 space-y-1",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-baseline gap-2 flex-wrap",
                                  children: [
                                    a.length > 0 &&
                                      e.jsx("span", {
                                        className:
                                          "text-[11px] text-muted-foreground",
                                        children: "a partir de",
                                      }),
                                    e.jsx("span", {
                                      className:
                                        "text-xl font-extrabold text-primary",
                                      children: n(o),
                                    }),
                                    c &&
                                      e.jsx("span", {
                                        className:
                                          "text-xs line-through text-muted-foreground",
                                        children: n(s.price),
                                      }),
                                  ],
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-[11px] text-muted-foreground",
                                  children: [
                                    x.n,
                                    "x de ",
                                    n(x.value),
                                    " sem juros",
                                  ],
                                }),
                                a.length > 0 &&
                                  e.jsxs("p", {
                                    className:
                                      "text-[11px] text-muted-foreground",
                                    children: [
                                      a.length,
                                      " variaç",
                                      a.length > 1 ? "ões" : "ão",
                                      " disponíve",
                                      a.length > 1 ? "is" : "l",
                                    ],
                                  }),
                                e.jsxs("p", {
                                  className:
                                    "text-[11px] text-primary font-medium flex items-center gap-1",
                                  children: [
                                    e.jsx(q, { className: "w-3 h-3" }),
                                    " ",
                                    n(o * (1 - $)),
                                    " no PIX",
                                  ],
                                }),
                                e.jsxs(g, {
                                  className: "w-full mt-2 rounded-2xl gap-2",
                                  onClick: (m) => {
                                    if ((m.stopPropagation(), a.length)) {
                                      w(s), u(0), y(0);
                                      return;
                                    }
                                    M(s);
                                  },
                                  children: [
                                    e.jsx(D, { className: "w-4 h-4" }),
                                    " ",
                                    a.length ? "Ver opções" : "Comprar",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    s.id
                  );
                }),
              }),
        ],
      }),
      e.jsx(N, {
        className: "rounded-3xl border-border/60 overflow-hidden",
        children: e.jsxs(v, {
          className: "p-6 space-y-5",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(V, { className: "w-5 h-5 text-primary" }),
                e.jsx("h2", {
                  className: "text-lg font-bold",
                  children: "Formas de pagamento",
                }),
              ],
            }),
            e.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-3",
              children: ke.map((s) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "rounded-2xl border border-border/60 p-4 bg-muted/30",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2",
                        children: e.jsx(s.icon, {
                          className: "w-[18px] h-[18px]",
                        }),
                      }),
                      e.jsx("p", {
                        className: "text-sm font-semibold",
                        children: s.label,
                      }),
                      e.jsx("p", {
                        className: "text-[11px] text-muted-foreground mt-0.5",
                        children: s.detail,
                      }),
                    ],
                  },
                  s.label
                )
              ),
            }),
            e.jsx(P, {}),
            e.jsx("div", {
              className: "grid sm:grid-cols-3 gap-3 text-sm",
              children: [
                "Pagamento confirmado antes do envio ou liberação do serviço",
                "Nota fiscal e comprovante enviados no WhatsApp",
                "Garantia e suporte direto com a equipe Tech OS PRO",
              ].map((s) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-2",
                    children: [
                      e.jsx(me, {
                        className: "w-4 h-4 text-primary shrink-0 mt-0.5",
                      }),
                      e.jsx("span", {
                        className: "text-muted-foreground text-xs",
                        children: s,
                      }),
                    ],
                  },
                  s
                )
              ),
            }),
          ],
        }),
      }),
      e.jsx(xe, {
        open: !!t,
        onOpenChange: (s) => !s && w(null),
        children: e.jsx(he, {
          className: "max-w-4xl rounded-3xl max-h-[90vh] overflow-y-auto",
          children:
            t &&
            e.jsxs(e.Fragment, {
              children: [
                e.jsx(pe, {
                  children: e.jsx(ue, {
                    className: "text-xl [overflow-wrap:anywhere] pr-6",
                    children: t.title,
                  }),
                }),
                e.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-5",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        e.jsxs("div", {
                          className:
                            "relative aspect-square rounded-2xl overflow-hidden bg-muted/50",
                          children: [
                            t.images?.[O]
                              ? e.jsx("img", {
                                  src: t.images[O],
                                  alt: t.title,
                                  className: "w-full h-full object-cover",
                                })
                              : e.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center text-muted-foreground",
                                  children: e.jsx(I, {
                                    className: "w-10 h-10",
                                  }),
                                }),
                            t.images?.length > 1 &&
                              e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(g, {
                                    size: "icon",
                                    variant: "secondary",
                                    className:
                                      "absolute left-2 top-1/2 -translate-y-1/2 rounded-full h-8 w-8",
                                    onClick: () =>
                                      u(
                                        (s) =>
                                          (s - 1 + t.images.length) %
                                          t.images.length
                                      ),
                                    children: e.jsx(ge, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                  e.jsx(g, {
                                    size: "icon",
                                    variant: "secondary",
                                    className:
                                      "absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-8 w-8",
                                    onClick: () =>
                                      u((s) => (s + 1) % t.images.length),
                                    children: e.jsx(fe, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        t.images?.length > 1 &&
                          e.jsx("div", {
                            className: "flex gap-2 overflow-x-auto",
                            children: t.images.map((s, a) =>
                              e.jsx(
                                "button",
                                {
                                  onClick: () => u(a),
                                  className: `w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 ${
                                    a === O
                                      ? "border-primary"
                                      : "border-transparent"
                                  }`,
                                  children: e.jsx("img", {
                                    src: s,
                                    alt: "",
                                    className: "w-full h-full object-cover",
                                  }),
                                },
                                s + a
                              )
                            ),
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex flex-wrap gap-2",
                          children: [
                            t.category &&
                              e.jsx(h, {
                                variant: "secondary",
                                children: t.category,
                              }),
                            e.jsx(h, {
                              variant: "outline",
                              children: Q(t.item_type),
                            }),
                            t.badge && e.jsx(h, { children: t.badge }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-1 text-amber-500",
                          children: [
                            Array.from({ length: 5 }).map((s, a) =>
                              e.jsx(
                                K,
                                { className: "w-3.5 h-3.5 fill-current" },
                                a
                              )
                            ),
                            e.jsx("span", {
                              className:
                                "text-[11px] text-muted-foreground ml-1",
                              children: "Vendedor verificado Tech OS PRO",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm text-muted-foreground whitespace-pre-wrap [overflow-wrap:anywhere]",
                          children: t.description || "Sem descrição.",
                        }),
                        (() => {
                          const s = z(t),
                            a = s.length ? s[Math.min(X, s.length - 1)] : null,
                            o = a ? Number(a.price) : t.price,
                            c = E(t, a),
                            _ = c < o;
                          return e.jsxs("div", {
                            className:
                              "rounded-2xl border border-border/60 bg-muted/30 p-4 space-y-3",
                            children: [
                              s.length > 0 &&
                                e.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    e.jsx("p", {
                                      className: "text-xs font-semibold",
                                      children: "Escolha a opção",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "grid grid-cols-1 sm:grid-cols-2 gap-2",
                                      children: s.map((x, m) => {
                                        const B =
                                          m === Math.min(X, s.length - 1);
                                        return e.jsxs(
                                          "button",
                                          {
                                            onClick: () => y(m),
                                            className: `rounded-xl border p-2.5 text-left transition-colors ${
                                              B
                                                ? "border-primary bg-primary/5"
                                                : "border-border/60 hover:bg-muted/60"
                                            }`,
                                            children: [
                                              e.jsx("p", {
                                                className:
                                                  "text-xs font-semibold line-clamp-1",
                                                children: x.name,
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-sm font-bold text-primary",
                                                children: n(
                                                  Number(
                                                    x.promo_price ?? x.price
                                                  )
                                                ),
                                              }),
                                            ],
                                          },
                                          x.name + m
                                        );
                                      }),
                                    }),
                                    e.jsx(P, {}),
                                  ],
                                }),
                              e.jsxs("div", {
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-baseline gap-2 flex-wrap",
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "text-3xl font-extrabold text-primary",
                                        children: n(c),
                                      }),
                                      _ &&
                                        e.jsx("span", {
                                          className:
                                            "text-sm line-through text-muted-foreground",
                                          children: n(o),
                                        }),
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-xs text-muted-foreground mt-1",
                                    children: [
                                      "em até ",
                                      C(c).n,
                                      "x de ",
                                      n(C(c).value),
                                      " sem juros",
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-xs text-primary font-medium flex items-center gap-1 mt-0.5",
                                    children: [
                                      e.jsx(q, { className: "w-3.5 h-3.5" }),
                                      n(c * (1 - $)),
                                      " à vista no PIX (5% off)",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(P, {}),
                              e.jsxs("div", {
                                className:
                                  "space-y-1.5 text-xs text-muted-foreground",
                                children: [
                                  e.jsxs("p", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(J, {
                                        className: "w-3.5 h-3.5 text-primary",
                                      }),
                                      " Produto digital: liberação imediata após confirmação",
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(Y, {
                                        className: "w-3.5 h-3.5 text-primary",
                                      }),
                                      " Garantia e suporte incluídos",
                                    ],
                                  }),
                                  e.jsxs("p", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(U, {
                                        className: "w-3.5 h-3.5 text-primary",
                                      }),
                                      " Pagamento seguro confirmado no atendimento",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs(g, {
                                className: "w-full rounded-2xl gap-2 h-12",
                                onClick: () => M(t, a),
                                children: [
                                  e.jsx(D, { className: "w-5 h-5" }),
                                  " Comprar no WhatsApp",
                                ],
                              }),
                              e.jsx("p", {
                                className:
                                  "text-[11px] text-center text-muted-foreground",
                                children:
                                  "Você será direcionado ao WhatsApp para finalizar a compra com um especialista.",
                              }),
                            ],
                          });
                        })(),
                      ],
                    }),
                  ],
                }),
              ],
            }),
        }),
      }),
    ],
  });
}
export { Ae as default };
