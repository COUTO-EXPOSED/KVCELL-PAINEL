import {
  W as ha,
  z as ja,
  r as _,
  j as e,
  G as k,
  a1 as F,
  by as ea,
  C as me,
  dd as Oa,
  ad as _a,
  B as m,
  bR as Va,
  dc as J,
  b3 as ve,
  bS as V,
  h as Be,
  dG as Ga,
  bm as I,
  D as Ha,
  c as Wa,
  a_ as Ka,
  d as Qa,
  bz as fa,
  bj as ye,
  bk as ke,
  bA as we,
  dH as Xa,
  Z as Ja,
  w as u,
  di as D,
  ce as Za,
  u as Ya,
  cf as es,
  s as z,
  b$ as Re,
  m as aa,
  E as sa,
  dn as as,
  bB as ss,
  b5 as he,
  b6 as je,
  b7 as _e,
  b8 as fe,
  b9 as f,
  cI as Te,
  bw as ie,
  bL as W,
  dj as ta,
  bW as ze,
  dI as De,
  dJ as K,
  p as la,
  c0 as oa,
  bE as C,
  c2 as Q,
  aa as se,
  a9 as de,
  M as Ee,
  n as i,
  I as g,
  b1 as B,
  a8 as te,
  o as M,
  dK as X,
  X as ts,
  T as Ne,
  cJ as ra,
  k as ls,
  K as ca,
  g as os,
  bN as rs,
  bP as na,
  bT as be,
  bx as Fe,
  dk as cs,
  dl as ia,
  dm as ns,
  bU as N,
  S as da,
  bZ as is,
  bQ as qe,
} from "./index-V8ZHCWL2.js";
import { T as Ue, m as ds } from "./mbway-icon-CFCEBqN3.js";
import { C as ms } from "./circle-help-BRdEyltb.js";
import { M as xs } from "./MediaViewDialog-Cy2ZQh1t.js";
import { A as gs } from "./arrow-left-CaH5Nh3G.js";
import { T as ma } from "./type-BY7-f7Mh.js";
import { L as Le } from "./link-DySSB7S9.js";
import { T as us, a as ps } from "./toggle-right-Dh1xU7WQ.js";
import { C as hs } from "./coins-BAvQgDWQ.js";
import { S as xa } from "./sun-P4wkve1z.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ga = ha("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const js = ha("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }],
]);
function _s({ formatPrice: P }) {
  const { user: j } = ja(),
    [R, Z] = _.useState([]),
    [G, v] = _.useState(!0),
    [p, q] = _.useState(null),
    [$, Y] = _.useState("all"),
    l = async () => {
      if (j?.id) {
        v(!0);
        try {
          let d = u
            .from("abandoned_carts")
            .select("*")
            .eq("user_id", j.id)
            .eq("source", "catalog")
            .order("created_at", { ascending: !1 });
          $ !== "all" && (d = d.eq("status", $));
          const { data: h, error: b } = await d;
          if (b) throw b;
          Z(
            (h || []).map((L) => ({
              ...L,
              items: Array.isArray(L.items)
                ? L.items
                : JSON.parse(L.items || "[]"),
            }))
          );
        } catch {
        } finally {
          v(!1);
        }
      }
    };
  _.useEffect(() => {
    l();
  }, [j?.id, $]);
  const c = async (d) => {
      try {
        const { error: h } = await u
          .from("abandoned_carts")
          .update({
            status: "recovered",
            recovered_at: new Date().toISOString(),
          })
          .eq("id", d);
        if (h) throw h;
        D({ title: "Carrinho marcado como recuperado!" }), l(), q(null);
      } catch {
        D({ title: "Erro ao atualizar", variant: "destructive" });
      }
    },
    T = async (d) => {
      try {
        const { error: h } = await u
          .from("abandoned_carts")
          .delete()
          .eq("id", d);
        if (h) throw h;
        D({ title: "Carrinho removido!" }), l(), q(null);
      } catch {
        D({ title: "Erro ao remover", variant: "destructive" });
      }
    },
    le = R.filter((d) => d.status === "abandoned").length,
    y = R.filter((d) => d.status === "recovered").length,
    H = R.filter((d) => d.status === "abandoned").reduce(
      (d, h) => d + h.total,
      0
    ),
    oe = R.filter((d) => d.status === "recovered").reduce(
      (d, h) => d + h.total,
      0
    );
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsxs("div", {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
        children: [
          e.jsx(k, {
            className: "border-destructive/30 bg-destructive/5",
            children: e.jsxs(F, {
              className: "p-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    e.jsx(ea, { className: "w-4 h-4 text-destructive" }),
                    e.jsx("span", {
                      className: "text-xs text-muted-foreground",
                      children: "Abandonados",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-lg font-bold text-destructive",
                  children: le,
                }),
              ],
            }),
          }),
          e.jsx(k, {
            className: "border-primary/30 bg-primary/5",
            children: e.jsxs(F, {
              className: "p-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    e.jsx(me, { className: "w-4 h-4 text-primary" }),
                    e.jsx("span", {
                      className: "text-xs text-muted-foreground",
                      children: "Recuperados",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-lg font-bold text-primary",
                  children: y,
                }),
              ],
            }),
          }),
          e.jsx(k, {
            className: "border-orange-500/30 bg-orange-500/5",
            children: e.jsxs(F, {
              className: "p-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    e.jsx(Oa, { className: "w-4 h-4 text-orange-500" }),
                    e.jsx("span", {
                      className: "text-xs text-muted-foreground",
                      children: "Valor Perdido",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-lg font-bold text-orange-500",
                  children: P(H),
                }),
              ],
            }),
          }),
          e.jsx(k, {
            className: "border-emerald-500/30 bg-emerald-500/5",
            children: e.jsxs(F, {
              className: "p-3",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2 mb-1",
                  children: [
                    e.jsx(_a, { className: "w-4 h-4 text-emerald-500" }),
                    e.jsx("span", {
                      className: "text-xs text-muted-foreground",
                      children: "Recuperado",
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-lg font-bold text-emerald-500",
                  children: P(oe),
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex items-center justify-between gap-2 flex-wrap",
        children: [
          e.jsx("div", {
            className: "flex gap-2",
            children: ["all", "abandoned", "recovered"].map((d) =>
              e.jsx(
                m,
                {
                  variant: $ === d ? "default" : "outline",
                  size: "sm",
                  onClick: () => Y(d),
                  className: "text-xs",
                  children:
                    d === "all"
                      ? "Todos"
                      : d === "abandoned"
                      ? "Abandonados"
                      : "Recuperados",
                },
                d
              )
            ),
          }),
          e.jsxs(m, {
            variant: "outline",
            size: "sm",
            onClick: l,
            className: "gap-1",
            children: [e.jsx(Va, { className: "w-3 h-3" }), " Atualizar"],
          }),
        ],
      }),
      G
        ? e.jsx("div", {
            className: "flex justify-center py-8",
            children: e.jsx("div", {
              className:
                "w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin",
            }),
          })
        : R.length === 0
        ? e.jsx(k, {
            children: e.jsxs(F, {
              className: "p-8 text-center",
              children: [
                e.jsx(J, {
                  className:
                    "w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50",
                }),
                e.jsx("p", {
                  className: "text-muted-foreground text-sm",
                  children: "Nenhum carrinho abandonado",
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children:
                    "Quando visitantes adicionarem itens ao carrinho e saírem sem comprar, aparecerão aqui.",
                }),
              ],
            }),
          })
        : e.jsx("div", {
            className: "grid gap-3",
            children: R.map((d) =>
              e.jsx(
                k,
                {
                  className: `hover:shadow-md transition-all ${
                    d.status === "recovered"
                      ? "border-primary/30 bg-primary/5"
                      : "border-destructive/20"
                  }`,
                  children: e.jsx(F, {
                    className: "p-3",
                    children: e.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        e.jsxs("div", {
                          className: "flex-1 min-w-0 cursor-pointer",
                          onClick: () => q(d),
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx("span", {
                                  className: "font-semibold text-sm truncate",
                                  children:
                                    d.customer_name || "Visitante Anônimo",
                                }),
                                e.jsx(ve, {
                                  variant:
                                    d.status === "recovered"
                                      ? "default"
                                      : "destructive",
                                  className: "text-[10px]",
                                  children:
                                    d.status === "recovered"
                                      ? "Recuperado"
                                      : "Abandonado",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-3 mt-1 text-xs text-muted-foreground",
                              children: [
                                e.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx(V, { className: "w-3 h-3" }),
                                    d.items.length,
                                    " ",
                                    d.items.length === 1 ? "item" : "itens",
                                  ],
                                }),
                                e.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx(Be, { className: "w-3 h-3" }),
                                    Ga(new Date(d.created_at), {
                                      addSuffix: !0,
                                      locale: ke,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2 shrink-0",
                          children: [
                            e.jsx("p", {
                              className: "font-bold text-sm",
                              children: P(d.total),
                            }),
                            e.jsx(m, {
                              variant: "ghost",
                              size: "icon",
                              className:
                                "h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10",
                              onClick: (h) => {
                                h.stopPropagation(),
                                  confirm(
                                    "Excluir este carrinho abandonado?"
                                  ) && T(d.id);
                              },
                              children: e.jsx(I, { className: "w-3.5 h-3.5" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                d.id
              )
            ),
          }),
      e.jsx(Ha, {
        open: !!p,
        onOpenChange: () => q(null),
        children: e.jsxs(Wa, {
          className: "max-w-lg max-h-[85vh] overflow-y-auto",
          children: [
            e.jsx(Ka, {
              children: e.jsxs(Qa, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(J, { className: "w-5 h-5 text-primary" }),
                  "Detalhes do Carrinho",
                ],
              }),
            }),
            p &&
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsx(k, {
                    children: e.jsxs(F, {
                      className: "p-4 space-y-2",
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium",
                          children: p.customer_name || "Visitante Anônimo",
                        }),
                        p.customer_phone &&
                          e.jsxs("p", {
                            className:
                              "text-xs text-muted-foreground flex items-center gap-1",
                            children: [
                              e.jsx(fa, { className: "w-3 h-3" }),
                              " ",
                              p.customer_phone,
                            ],
                          }),
                        e.jsxs("p", {
                          className:
                            "text-xs text-muted-foreground flex items-center gap-1",
                          children: [
                            e.jsx(Be, { className: "w-3 h-3" }),
                            ye(
                              new Date(p.created_at),
                              "dd/MM/yyyy 'às' HH:mm",
                              { locale: ke }
                            ),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx(k, {
                    children: e.jsxs(F, {
                      className: "p-4 space-y-3",
                      children: [
                        e.jsxs("h4", {
                          className: "font-semibold text-sm",
                          children: ["Itens (", p.items.length, ")"],
                        }),
                        p.items.map((d, h) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center gap-3 p-2 rounded-lg bg-muted/50",
                              children: [
                                d.image_url
                                  ? e.jsx("img", {
                                      src: d.image_url,
                                      alt: "",
                                      className:
                                        "w-10 h-10 rounded object-cover",
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "w-10 h-10 rounded bg-muted flex items-center justify-center",
                                      children: e.jsx(V, {
                                        className:
                                          "w-5 h-5 text-muted-foreground",
                                      }),
                                    }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className: "text-sm font-medium truncate",
                                      children: d.product_name,
                                    }),
                                    e.jsxs("p", {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: ["Qtd: ", d.quantity],
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-sm font-semibold shrink-0",
                                  children: P(d.price * d.quantity),
                                }),
                              ],
                            },
                            h
                          )
                        ),
                        e.jsxs("div", {
                          className:
                            "flex justify-between items-center pt-2 border-t",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold text-sm",
                              children: "Total",
                            }),
                            e.jsx("span", {
                              className: "font-bold text-lg text-primary",
                              children: P(p.total),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  p.customer_phone &&
                    p.status === "abandoned" &&
                    e.jsx(k, {
                      className: "border-primary/20 bg-primary/5",
                      children: e.jsxs(F, {
                        className: "p-4 space-y-2",
                        children: [
                          e.jsxs("h4", {
                            className:
                              "font-semibold text-sm flex items-center gap-2",
                            children: [
                              e.jsx(we, { className: "w-4 h-4 text-primary" }),
                              "Recuperar Venda via WhatsApp",
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                            children: [
                              e.jsxs(m, {
                                variant: "outline",
                                size: "sm",
                                className:
                                  "justify-start gap-2 text-xs h-auto py-2",
                                onClick: () => {
                                  const d = p.items.map(
                                      (ee) =>
                                        `• ${ee.product_name} (${ee.quantity}x)`
                                    ).join(`
`),
                                    h = `Olá ${p.customer_name || ""}! 😊

Vimos que você deixou alguns itens no carrinho:

${d}

💰 Total: ${P(p.total)}

Ainda tem interesse? Estamos à disposição para finalizar seu pedido! 🛒`,
                                    b = p.customer_phone.replace(/\D/g, ""),
                                    L = b.startsWith("55") ? b : `55${b}`;
                                  window.open(
                                    `https://wa.me/${L}?text=${encodeURIComponent(
                                      h
                                    )}`,
                                    "_blank"
                                  );
                                },
                                children: [
                                  e.jsx(J, {
                                    className:
                                      "w-3.5 h-3.5 text-primary shrink-0",
                                  }),
                                  e.jsx("span", {
                                    className: "text-left",
                                    children: "Lembrete do Carrinho",
                                  }),
                                ],
                              }),
                              e.jsxs(m, {
                                variant: "outline",
                                size: "sm",
                                className:
                                  "justify-start gap-2 text-xs h-auto py-2",
                                onClick: () => {
                                  const d = `Olá ${p.customer_name || ""}! 🎉

Temos uma oferta especial para você! Finalize sua compra agora e ganhe um *desconto exclusivo*! 🏷️

💰 Valor do carrinho: ${P(p.total)}

Entre em contato para garantir seu desconto! ⏰`,
                                    h = p.customer_phone.replace(/\D/g, ""),
                                    b = h.startsWith("55") ? h : `55${h}`;
                                  window.open(
                                    `https://wa.me/${b}?text=${encodeURIComponent(
                                      d
                                    )}`,
                                    "_blank"
                                  );
                                },
                                children: [
                                  e.jsx(Xa, {
                                    className:
                                      "w-3.5 h-3.5 text-emerald-500 shrink-0",
                                  }),
                                  e.jsx("span", {
                                    className: "text-left",
                                    children: "Oferecer Desconto",
                                  }),
                                ],
                              }),
                              e.jsxs(m, {
                                variant: "outline",
                                size: "sm",
                                className:
                                  "justify-start gap-2 text-xs h-auto py-2",
                                onClick: () => {
                                  const d = `Olá ${p.customer_name || ""}! ⚡

Últimas unidades disponíveis dos produtos que você escolheu! Não perca a oportunidade de garantir o seu! 🔥

💰 Total: ${P(p.total)}

Finalize agora antes que esgote! 🏃‍♂️`,
                                    h = p.customer_phone.replace(/\D/g, ""),
                                    b = h.startsWith("55") ? h : `55${h}`;
                                  window.open(
                                    `https://wa.me/${b}?text=${encodeURIComponent(
                                      d
                                    )}`,
                                    "_blank"
                                  );
                                },
                                children: [
                                  e.jsx(Ja, {
                                    className:
                                      "w-3.5 h-3.5 text-orange-500 shrink-0",
                                  }),
                                  e.jsx("span", {
                                    className: "text-left",
                                    children: "Urgência / Escassez",
                                  }),
                                ],
                              }),
                              e.jsxs(m, {
                                variant: "outline",
                                size: "sm",
                                className:
                                  "justify-start gap-2 text-xs h-auto py-2",
                                onClick: () => {
                                  const d = `Olá ${p.customer_name || ""}! 👋

Vimos que você estava interessado em alguns produtos. Ficou com alguma dúvida? 🤔

Estamos à disposição para ajudar! Pode perguntar qualquer coisa sobre os produtos. 😊`,
                                    h = p.customer_phone.replace(/\D/g, ""),
                                    b = h.startsWith("55") ? h : `55${h}`;
                                  window.open(
                                    `https://wa.me/${b}?text=${encodeURIComponent(
                                      d
                                    )}`,
                                    "_blank"
                                  );
                                },
                                children: [
                                  e.jsx(ms, {
                                    className:
                                      "w-3.5 h-3.5 text-blue-500 shrink-0",
                                  }),
                                  e.jsx("span", {
                                    className: "text-left",
                                    children: "Tirar Dúvidas",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  !p.customer_phone &&
                    p.status === "abandoned" &&
                    e.jsx(k, {
                      className: "border-orange-500/20 bg-orange-500/5",
                      children: e.jsxs(F, {
                        className:
                          "p-3 flex items-center gap-2 text-xs text-muted-foreground",
                        children: [
                          e.jsx(ea, {
                            className: "w-4 h-4 text-orange-500 shrink-0",
                          }),
                          "Visitante sem telefone cadastrado. Não é possível enviar mensagem de recuperação.",
                        ],
                      }),
                    }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      p.status === "abandoned" &&
                        e.jsxs(m, {
                          variant: "outline",
                          size: "sm",
                          className: "gap-2 flex-1",
                          onClick: () => c(p.id),
                          children: [
                            e.jsx(me, { className: "w-4 h-4" }),
                            " Marcar Recuperado",
                          ],
                        }),
                      e.jsx(m, {
                        variant: "destructive",
                        size: "sm",
                        className: "gap-2",
                        onClick: () => T(p.id),
                        children: e.jsx(I, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      }),
    ],
  });
}
const fs = [
    { id: "promotions", label: "Promoções", icon: "🔥", color: "#ef4444" },
    { id: "launches", label: "Lançamentos", icon: "✨", color: "#8b5cf6" },
    { id: "highlights", label: "Destaques", icon: "⭐", color: "#f59e0b" },
    { id: "blackfriday", label: "Black Friday", icon: "🏷️", color: "#000000" },
  ],
  O = {
    catalog_theme: "dark",
    catalog_primary_color: "#10b981",
    catalog_secondary_color: "#1f2937",
    catalog_button_color: "#eab308",
    catalog_whatsapp: "",
    catalog_banner_text: "Bem-vindo à nossa loja!",
    catalog_footer_text: "Obrigado pela preferência!",
    catalog_hide_brands: !1,
    catalog_weekly_offers: [],
    catalog_promo_enabled: !1,
    catalog_promo_end_date: "",
    catalog_show_skeleton: !0,
    catalog_coupons: [],
    catalog_delivery_persons: [],
    catalog_delivery_enabled: !1,
    catalog_currency: "BRL",
    catalog_banners: [],
    catalog_main_banners: [],
    catalog_secondary_banners: [],
    catalog_top_banner_desktop: "",
    catalog_top_banner_mobile: "",
    catalog_top_banner_link: "",
    catalog_pix_discount: 5,
    catalog_pix_discount_enabled: !0,
    catalog_hide_promo_bar: !1,
    catalog_language: "pt-BR",
    catalog_installments_text: "Até 12x sem juros",
    catalog_show_installments: !0,
    catalog_store_slug: "",
    catalog_popups: [],
    catalog_mid_banner_desktop: "",
    catalog_mid_banner_mobile: "",
    catalog_mid_banner_link: "",
    catalog_category_cards: [],
    catalog_show_round_categories: !1,
  },
  Ns = [
    { name: "Verde", primary: "#10b981", secondary: "#064e3b" },
    { name: "Azul", primary: "#3b82f6", secondary: "#1e3a5f" },
    { name: "Roxo", primary: "#8b5cf6", secondary: "#4c1d95" },
    { name: "Rosa", primary: "#ec4899", secondary: "#831843" },
    { name: "Laranja", primary: "#f97316", secondary: "#7c2d12" },
    { name: "Vermelho", primary: "#ef4444", secondary: "#7f1d1d" },
    { name: "Amarelo", primary: "#eab308", secondary: "#713f12" },
    { name: "Ciano", primary: "#06b6d4", secondary: "#164e63" },
  ],
  bs = [
    { name: "Amarelo", color: "#eab308" },
    { name: "Verde", color: "#22c55e" },
    { name: "Azul", color: "#3b82f6" },
    { name: "Roxo", color: "#8b5cf6" },
    { name: "Rosa", color: "#ec4899" },
    { name: "Laranja", color: "#f97316" },
    { name: "Vermelho", color: "#ef4444" },
    { name: "Branco", color: "#ffffff" },
  ],
  vs = [
    { value: "BRL", label: "Real (R$)", symbol: "R$" },
    { value: "USD", label: "Dólar ($)", symbol: "$" },
    { value: "EUR", label: "Euro (€)", symbol: "€" },
  ],
  ua = ({ endDate: P }) => {
    const [j, R] = _.useState({ hours: 0, minutes: 0, seconds: 0 });
    _.useEffect(() => {
      const G = () => {
        const p = new Date(P).getTime(),
          q = new Date().getTime(),
          $ = p - q;
        if ($ > 0) {
          const Y = Math.floor($ / 36e5),
            l = Math.floor(($ % (1e3 * 60 * 60)) / (1e3 * 60)),
            c = Math.floor(($ % (1e3 * 60)) / 1e3);
          R({ hours: Y, minutes: l, seconds: c });
        } else R({ hours: 0, minutes: 0, seconds: 0 });
      };
      G();
      const v = setInterval(G, 1e3);
      return () => clearInterval(v);
    }, [P]);
    const Z = (G) => G.toString().padStart(2, "0");
    return e.jsxs("span", {
      className: "font-mono font-bold",
      children: [Z(j.hours), ":", Z(j.minutes), ":", Z(j.seconds)],
    });
  },
  pa = () =>
    e.jsxs("div", {
      className: "rounded-lg p-3 space-y-2 bg-muted/20 animate-pulse",
      children: [
        e.jsx("div", { className: "h-20 rounded bg-muted" }),
        e.jsx("div", { className: "h-3 rounded bg-muted w-3/4" }),
        e.jsx("div", { className: "h-4 rounded bg-muted w-1/2" }),
        e.jsx("div", { className: "h-8 rounded bg-muted" }),
      ],
    }),
  Ts = () => {
    Za();
    const P = Ya(),
      { user: j } = ja(),
      { effectiveUserId: R, isEmployee: Z, employeeId: G } = es(),
      v = R || j?.id || "",
      [p, q] = _.useState(!0),
      [$, Y] = _.useState(!1),
      [l, c] = _.useState(O),
      [T, le] = _.useState([]),
      [y, H] = _.useState([]),
      [oe, d] = _.useState("geral"),
      [h, b] = _.useState([]),
      [L, ee] = _.useState(null),
      [xe, Ce] = _.useState(""),
      [ge, Me] = _.useState(null);
    _.useEffect(() => {
      j && (Sa(), $a(), Oe(), Ve());
    }, [j]);
    const Oe = async () => {
        if (!j) return;
        const { data: a, error: s } = await u
          .from("catalog_orders")
          .select("*")
          .eq("user_id", v)
          .order("created_at", { ascending: !1 });
        !s && a && H(a);
      },
      Na = (a, s) =>
        s === "video"
          ? "video"
          : s === "image"
          ? "image"
          : /\.(mp4|mov|webm|m4v|avi|mkv)(\?|$)/i.test(a)
          ? "video"
          : "image",
      Ve = async () => {
        if (!j) return;
        const { data: a } = await u
          .from("products")
          .select("id")
          .eq("user_id", v);
        if (!a || a.length === 0) {
          b([]);
          return;
        }
        const s = a.map((r) => r.id),
          { data: t, error: o } = await u
            .from("product_reviews")
            .select(
              "id, product_id, customer_name, comment, rating, status, technician_response, responded_at, created_at, media_urls, media_types, product:products(name)"
            )
            .in("product_id", s)
            .order("created_at", { ascending: !1 });
        !o &&
          t &&
          b(
            t.map((r) => ({
              ...r,
              product_name: r.product?.name || "Produto desconhecido",
            }))
          );
      },
      Ge = async (a, s) => {
        const { error: t } = await u
          .from("product_reviews")
          .update({ status: s })
          .eq("id", a);
        if (t) {
          N.error("Erro ao atualizar avaliação");
          return;
        }
        N.success(
          s === "approved" ? "Avaliação aprovada!" : "Avaliação rejeitada!"
        ),
          b((o) => o.map((r) => (r.id === a ? { ...r, status: s } : r)));
      },
      ba = async (a) => {
        const { error: s } = await u
          .from("product_reviews")
          .delete()
          .eq("id", a);
        s ||
          (b((t) => t.filter((o) => o.id !== a)),
          N.success("Avaliação removida!"));
      },
      va = async (a) => {
        if (!xe.trim()) {
          N.error("Digite uma resposta");
          return;
        }
        const { error: s } = await u
          .from("product_reviews")
          .update({
            technician_response: xe.trim(),
            responded_at: new Date().toISOString(),
          })
          .eq("id", a);
        if (s) {
          N.error("Erro ao enviar resposta");
          return;
        }
        N.success("Resposta enviada!"),
          b((t) =>
            t.map((o) =>
              o.id === a ? { ...o, technician_response: xe.trim() } : o
            )
          ),
          ee(null),
          Ce("");
      },
      [Pe, He] = _.useState(null),
      [re, $e] = _.useState(""),
      [We, Ke] = _.useState(""),
      [Se, ya] = _.useState([]),
      Qe = async (a) => {
        const { data: s } = await u
          .from("catalog_order_tracking")
          .select("*")
          .eq("order_id", a)
          .order("created_at", { ascending: !1 });
        ya(s || []);
      },
      wa = async (a) => {
        if (!re.trim() || !j) return;
        const { error: s } = await u
          .from("catalog_order_tracking")
          .insert({
            order_id: a,
            user_id: v,
            status: re.trim(),
            description: re.trim(),
            location: We.trim() || null,
          });
        s ||
          (N.success("Status de rastreio atualizado!"), $e(""), Ke(""), Qe(a));
      },
      ka = async (a) => {
        const s = y.find((w) => w.id === a);
        if (!s || !j) return;
        const t =
            s.tracking_code ||
            `TC${Date.now().toString(36).toUpperCase()}${Math.random()
              .toString(36)
              .slice(2, 5)
              .toUpperCase()}`,
          { error: o } = await u
            .from("catalog_orders")
            .update({ status: "approved", tracking_code: t })
            .eq("id", a);
        if (o) {
          N.error("Erro ao aprovar pedido");
          return;
        }
        const r = Array.isArray(s.items) ? s.items : [],
          n = r.map((w) => `${w.quantity}x ${w.name}`).join(", "),
          x = r.map((w) => w.id).filter(Boolean);
        let ne = 0;
        if (x.length > 0) {
          const { data: w } = await u
            .from("products")
            .select("id, cost_price, quantity")
            .in("id", x);
          if (w) {
            const U = new Map(w.map((A) => [A.id, A.cost_price || 0])),
              Ba = new Map(w.map((A) => [A.id, A.quantity || 0]));
            ne = r.reduce(
              (A, pe) => A + (U.get(pe.id) || 0) * (pe.quantity || 1),
              0
            );
            for (const A of r) {
              if (!A.id) continue;
              const pe = Ba.get(A.id) || 0,
                Ma = Math.max(0, pe - (A.quantity || 1));
              await u.from("products").update({ quantity: Ma }).eq("id", A.id);
            }
          }
        }
        const Ie = Number(s.total) || 0;
        await u
          .from("transactions")
          .insert({
            user_id: v,
            type: "income",
            category: "Venda de Produtos",
            description: `Pedido Catálogo: ${s.customer_name} - ${n}`,
            amount: Ie,
            date: new Date().toISOString().split("T")[0],
          }),
          ne > 0 &&
            (await u
              .from("transactions")
              .insert({
                user_id: v,
                type: "expense",
                category: "Custo de Produtos",
                description: `Custo - Pedido Catálogo: ${s.customer_name}`,
                amount: ne,
                date: new Date().toISOString().split("T")[0],
              })),
          await u
            .from("catalog_order_tracking")
            .insert({
              order_id: a,
              user_id: v,
              status: "Pagamento Confirmado",
              description:
                "Pagamento confirmado! Seu pedido está sendo preparado.",
            }),
          H((w) =>
            w.map((U) =>
              U.id === a ? { ...U, status: "approved", tracking_code: t } : U
            )
          ),
          N.success(`Pedido aprovado! Estoque descontado. Código: ${t}`);
      },
      [Ae, Ca] = _.useState("all"),
      Pa = async (a) => {
        const { error: s } = await u
          .from("catalog_orders")
          .delete()
          .eq("id", a);
        s ||
          (H((t) => t.filter((o) => o.id !== a)),
          N.success("Pedido removido!"));
      },
      [S, Xe] = _.useState(null),
      ce = async (a, s) => {
        if (!j) return null;
        Xe(s);
        try {
          const t = a.name.split(".").pop(),
            o = `${j.id}/${s}-${Date.now()}.${t}`,
            { error: r } = await u.storage
              .from("catalog-banners")
              .upload(o, a, { upsert: !0 });
          if (r) throw r;
          const {
            data: { publicUrl: n },
          } = u.storage.from("catalog-banners").getPublicUrl(o);
          return N.success("Imagem enviada com sucesso!"), n;
        } catch {
          return N.error("Erro ao enviar imagem"), null;
        } finally {
          Xe(null);
        }
      },
      Je = async (a, s, t) => {
        const o = a.target.files?.[0];
        if (!o) return;
        const r = await ce(o, `${s}-${t}`);
        r &&
          c((n) => ({
            ...n,
            catalog_banners: n.catalog_banners.map((x) =>
              x.type === s ? { ...x, [t]: r } : x
            ),
          }));
      },
      $a = async () => {
        if (!j) return;
        const { data: a } = await u
          .from("products")
          .select("id, name, image_url, sale_price, hidden_from_catalog")
          .eq("user_id", v)
          .order("name");
        le(
          (a || []).map((s) => ({
            ...s,
            hidden_from_catalog: s.hidden_from_catalog || !1,
          }))
        );
      },
      Sa = async () => {
        if (j) {
          q(!0);
          try {
            const { data: a, error: s } = await u
              .from("user_settings")
              .select("*")
              .eq("user_id", v)
              .maybeSingle();
            if (s && s.code !== "PGRST116") throw s;
            if (a) {
              const t = a.os_print_settings || {};
              c({
                catalog_theme: a.catalog_theme || O.catalog_theme,
                catalog_primary_color:
                  a.catalog_primary_color || O.catalog_primary_color,
                catalog_secondary_color:
                  a.catalog_secondary_color || O.catalog_secondary_color,
                catalog_button_color:
                  a.catalog_button_color || O.catalog_button_color,
                catalog_whatsapp: a.catalog_whatsapp || "",
                catalog_banner_text:
                  a.catalog_banner_text || O.catalog_banner_text,
                catalog_footer_text:
                  a.catalog_footer_text || O.catalog_footer_text,
                catalog_hide_brands: a.catalog_hide_brands || !1,
                catalog_weekly_offers: a.catalog_weekly_offers || [],
                catalog_promo_enabled: t.catalog_promo_enabled || !1,
                catalog_promo_end_date: t.catalog_promo_end_date || "",
                catalog_show_skeleton: t.catalog_show_skeleton !== !1,
                catalog_coupons: t.catalog_coupons || [],
                catalog_delivery_persons: t.catalog_delivery_persons || [],
                catalog_delivery_enabled: t.catalog_delivery_enabled || !1,
                catalog_currency: t.catalog_currency || "BRL",
                catalog_banners: t.catalog_banners || [],
                catalog_main_banners: t.catalog_main_banners || [],
                catalog_secondary_banners: t.catalog_secondary_banners || [],
                catalog_top_banner_desktop: t.catalog_top_banner_desktop || "",
                catalog_top_banner_mobile: t.catalog_top_banner_mobile || "",
                catalog_top_banner_link: t.catalog_top_banner_link || "",
                catalog_pix_discount: t.catalog_pix_discount ?? 5,
                catalog_pix_discount_enabled:
                  t.catalog_pix_discount_enabled !== !1,
                catalog_hide_promo_bar: a.catalog_hide_promo_bar || !1,
                catalog_language: a.catalog_language || "pt-BR",
                catalog_installments_text:
                  a.catalog_installments_text || O.catalog_installments_text,
                catalog_show_installments: a.catalog_show_installments !== !1,
                catalog_store_slug: a.catalog_store_slug || "",
                catalog_popups: t.catalog_popups || [],
                catalog_mid_banner_desktop: t.catalog_mid_banner_desktop || "",
                catalog_mid_banner_mobile: t.catalog_mid_banner_mobile || "",
                catalog_mid_banner_link: t.catalog_mid_banner_link || "",
                catalog_category_cards: t.catalog_category_cards || [],
                catalog_show_round_categories:
                  t.catalog_show_round_categories || !1,
              });
            }
          } catch (a) {
            D({
              title: "Erro ao carregar configurações",
              description: a.message,
              variant: "destructive",
            });
          } finally {
            q(!1);
          }
        }
      },
      Aa = async () => {
        if (j) {
          Y(!0);
          try {
            const { data: a } = await u
                .from("user_settings")
                .select("id, os_print_settings")
                .eq("user_id", v)
                .maybeSingle(),
              s = a?.os_print_settings || {},
              t = {
                catalog_theme: l.catalog_theme,
                catalog_primary_color: l.catalog_primary_color,
                catalog_secondary_color: l.catalog_secondary_color,
                catalog_button_color: l.catalog_button_color,
                catalog_whatsapp: l.catalog_whatsapp,
                catalog_banner_text: l.catalog_banner_text,
                catalog_footer_text: l.catalog_footer_text,
                catalog_hide_brands: l.catalog_hide_brands,
                catalog_weekly_offers: l.catalog_weekly_offers,
                catalog_hide_promo_bar: l.catalog_hide_promo_bar,
                catalog_language: l.catalog_language,
                catalog_installments_text: l.catalog_installments_text,
                catalog_show_installments: l.catalog_show_installments,
                catalog_store_slug: l.catalog_store_slug || null,
                os_print_settings: {
                  ...s,
                  catalog_promo_enabled: l.catalog_promo_enabled,
                  catalog_promo_end_date: l.catalog_promo_end_date,
                  catalog_show_skeleton: l.catalog_show_skeleton,
                  catalog_coupons: l.catalog_coupons,
                  catalog_delivery_persons: l.catalog_delivery_persons,
                  catalog_delivery_enabled: l.catalog_delivery_enabled,
                  catalog_currency: l.catalog_currency,
                  catalog_banners: l.catalog_banners,
                  catalog_main_banners: l.catalog_main_banners,
                  catalog_secondary_banners: l.catalog_secondary_banners,
                  catalog_top_banner_desktop: l.catalog_top_banner_desktop,
                  catalog_top_banner_mobile: l.catalog_top_banner_mobile,
                  catalog_top_banner_link: l.catalog_top_banner_link,
                  catalog_pix_discount: l.catalog_pix_discount,
                  catalog_popups: l.catalog_popups,
                  catalog_mid_banner_desktop: l.catalog_mid_banner_desktop,
                  catalog_mid_banner_mobile: l.catalog_mid_banner_mobile,
                  catalog_mid_banner_link: l.catalog_mid_banner_link,
                  catalog_category_cards: l.catalog_category_cards,
                  catalog_show_round_categories:
                    l.catalog_show_round_categories,
                },
              };
            if (a) {
              const { error: o } = await u
                .from("user_settings")
                .update(t)
                .eq("user_id", v);
              if (o) throw o;
            } else {
              const { error: o } = await u
                .from("user_settings")
                .insert({ user_id: v, ...t });
              if (o) throw o;
            }
            D({
              title: "Configurações salvas!",
              description:
                "As configurações do catálogo foram atualizadas com sucesso.",
            });
          } catch (a) {
            D({
              title: "Erro ao salvar configurações",
              description: a.message,
              variant: "destructive",
            });
          } finally {
            Y(!1);
          }
        }
      },
      Ia = (a) => {
        c((s) => ({
          ...s,
          catalog_primary_color: a.primary,
          catalog_secondary_color: a.secondary,
        }));
      },
      Ra = () => {
        const a = {
          id: crypto.randomUUID(),
          code: "",
          discountType: "percentage",
          discountValue: 10,
          minValue: 0,
          maxUses: 0,
          usedCount: 0,
          isActive: !0,
        };
        c((s) => ({ ...s, catalog_coupons: [...s.catalog_coupons, a] }));
      },
      ae = (a, s) => {
        c((t) => ({
          ...t,
          catalog_coupons: t.catalog_coupons.map((o) =>
            o.id === a ? { ...o, ...s } : o
          ),
        }));
      },
      Ta = (a) => {
        c((s) => ({
          ...s,
          catalog_coupons: s.catalog_coupons.filter((t) => t.id !== a),
        }));
      },
      za = () => {
        const a = {
          id: crypto.randomUUID(),
          name: "",
          basePrice: 5,
          baseRadiusKm: 3,
          extraPricePerKm: 2,
        };
        c((s) => ({
          ...s,
          catalog_delivery_persons: [...s.catalog_delivery_persons, a],
        }));
      },
      ue = (a, s) => {
        c((t) => ({
          ...t,
          catalog_delivery_persons: t.catalog_delivery_persons.map((o) =>
            o.id === a ? { ...o, ...s } : o
          ),
        }));
      },
      Da = (a) => {
        c((s) => ({
          ...s,
          catalog_delivery_persons: s.catalog_delivery_persons.filter(
            (t) => t.id !== a
          ),
        }));
      },
      Ea = (a) => {
        c((s) => ({
          ...s,
          catalog_weekly_offers: s.catalog_weekly_offers.includes(a)
            ? s.catalog_weekly_offers.filter((t) => t !== a)
            : [...s.catalog_weekly_offers, a],
        }));
      },
      Fa = async (a) => {
        const s = T.find((r) => r.id === a);
        if (!s) return;
        const t = !s.hidden_from_catalog;
        le((r) =>
          r.map((n) => (n.id === a ? { ...n, hidden_from_catalog: t } : n))
        );
        const { error: o } = await u
          .from("products")
          .update({ hidden_from_catalog: t })
          .eq("id", a);
        o
          ? (le((r) =>
              r.map((n) => (n.id === a ? { ...n, hidden_from_catalog: !t } : n))
            ),
            N.error("Erro ao atualizar visibilidade"))
          : N.success(
              t ? "Produto oculto do catálogo!" : "Produto visível no catálogo!"
            );
      },
      qa = () => {
        const a = {
          id: crypto.randomUUID(),
          title: "",
          description: "",
          buttonText: "Ver Agora",
          buttonLink: "",
          type: "promo",
          backgroundColor: l.catalog_primary_color,
          isActive: !0,
          showOnce: !0,
          delay: 3,
        };
        c((s) => ({ ...s, catalog_popups: [...s.catalog_popups, a] }));
      },
      E = (a, s) => {
        c((t) => ({
          ...t,
          catalog_popups: t.catalog_popups.map((o) =>
            o.id === a ? { ...o, ...s } : o
          ),
        }));
      },
      Ua = (a) => {
        c((s) => ({
          ...s,
          catalog_popups: s.catalog_popups.filter((t) => t.id !== a),
        }));
      },
      Ze = () => {
        if (j) {
          const a = l.catalog_store_slug || j.id,
            s = `${window.location.origin}/catalogo/${a}`;
          navigator.clipboard.writeText(s),
            N.success("Link copiado!", {
              description: l.catalog_store_slug
                ? `Link personalizado: /catalogo/${l.catalog_store_slug}`
                : "Configure um slug personalizado para ter uma URL mais curta!",
            });
        }
      },
      Ye = () => {
        if (j) {
          const a = l.catalog_store_slug || j.id;
          window.open(`/catalogo/${a}`, "_blank");
        }
      },
      La = () => {
        const s = (l.catalog_banner_text || "minha-loja")
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
          .substring(0, 30);
        c((t) => ({ ...t, catalog_store_slug: s })),
          N.success("Slug gerado!", { description: `Sugestão: ${s}` });
      };
    return p
      ? e.jsx(e.Fragment, {
          children: e.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: e.jsx(z, {
              className: "w-8 h-8 animate-spin text-primary",
            }),
          }),
        })
      : e.jsxs(e.Fragment, {
          children: [
            e.jsx("div", {
              className: "mb-4 sm:mb-6",
              children: e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx(m, {
                        variant: "ghost",
                        size: "icon",
                        onClick: () => P("/financeiro"),
                        children: e.jsx(gs, { className: "w-5 h-5" }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsxs("h1", {
                            className:
                              "text-xl sm:text-2xl md:text-3xl font-bold flex items-center gap-2",
                            children: [
                              e.jsx(Re, {
                                className: "w-6 h-6 sm:w-8 sm:h-8 text-primary",
                              }),
                              "Configurar Catálogo",
                            ],
                          }),
                          e.jsx("p", {
                            className:
                              "text-xs sm:text-sm text-muted-foreground",
                            children:
                              "Personalize seu catálogo virtual de produtos",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2 w-full sm:w-auto",
                    children: [
                      e.jsxs(m, {
                        variant: "outline",
                        onClick: Ze,
                        className: "flex-1 sm:flex-initial gap-2",
                        children: [
                          e.jsx(aa, { className: "w-4 h-4" }),
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Copiar Link",
                          }),
                        ],
                      }),
                      e.jsxs(m, {
                        variant: "outline",
                        onClick: Ye,
                        className: "flex-1 sm:flex-initial gap-2",
                        children: [
                          e.jsx(sa, { className: "w-4 h-4" }),
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Abrir Catálogo",
                          }),
                        ],
                      }),
                      e.jsxs(m, {
                        onClick: Aa,
                        disabled: $,
                        className: "flex-1 sm:flex-initial gap-2",
                        children: [
                          $
                            ? e.jsx(z, { className: "w-4 h-4 animate-spin" })
                            : e.jsx(as, { className: "w-4 h-4" }),
                          e.jsx("span", {
                            className: "hidden sm:inline",
                            children: "Salvar",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className: "flex flex-col lg:flex-row gap-4 sm:gap-6",
              children: [
                e.jsx("div", {
                  className: "flex-1 min-w-0",
                  children: e.jsx(k, {
                    className: "p-3 sm:p-4 md:p-6",
                    children: e.jsxs(ss, {
                      value: oe,
                      onValueChange: d,
                      children: [
                        e.jsx("div", {
                          className: "block sm:hidden mb-4",
                          children: e.jsxs(he, {
                            value: oe,
                            onValueChange: d,
                            children: [
                              e.jsx(je, {
                                className: "w-full",
                                children: e.jsx(_e, {}),
                              }),
                              e.jsxs(fe, {
                                children: [
                                  e.jsx(f, {
                                    value: "geral",
                                    children: "🌐 Geral",
                                  }),
                                  e.jsx(f, {
                                    value: "produtos",
                                    children: "📦 Produtos",
                                  }),
                                  e.jsx(f, {
                                    value: "secoes",
                                    children: "🖼️ Seções",
                                  }),
                                  e.jsx(f, {
                                    value: "popups",
                                    children: "✨ Popups",
                                  }),
                                  e.jsx(f, {
                                    value: "comentarios",
                                    children: "💬 Avaliações",
                                  }),
                                  e.jsx(f, {
                                    value: "aparencia",
                                    children: "🎨 Aparência",
                                  }),
                                  e.jsx(f, {
                                    value: "textos",
                                    children: "📝 Textos",
                                  }),
                                  e.jsx(f, {
                                    value: "ofertas",
                                    children: "🏷️ Ofertas",
                                  }),
                                  e.jsx(f, {
                                    value: "promocao",
                                    children: "⏱️ Promoção",
                                  }),
                                  e.jsx(f, {
                                    value: "cupons",
                                    children: "🎟️ Cupons",
                                  }),
                                  e.jsx(f, {
                                    value: "frete",
                                    children: "🚚 Frete",
                                  }),
                                  e.jsx(f, {
                                    value: "contato",
                                    children: "📱 Contato",
                                  }),
                                  e.jsx(f, {
                                    value: "carrinhos",
                                    children: "🛒 Carrinhos",
                                  }),
                                  e.jsx(f, {
                                    value: "pedidos",
                                    children: "📋 Pedidos",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        e.jsx("div", {
                          className: "hidden sm:block mb-6",
                          children: e.jsx("div", {
                            className:
                              "grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-1.5",
                            children: [
                              { value: "geral", icon: Te, label: "Geral" },
                              { value: "produtos", icon: V, label: "Produtos" },
                              { value: "secoes", icon: ie, label: "Seções" },
                              { value: "popups", icon: W, label: "Popups" },
                              {
                                value: "comentarios",
                                icon: we,
                                label: "Avaliações",
                              },
                              {
                                value: "aparencia",
                                icon: ta,
                                label: "Aparência",
                              },
                              { value: "textos", icon: ma, label: "Textos" },
                              { value: "ofertas", icon: ze, label: "Ofertas" },
                              {
                                value: "promocao",
                                icon: De,
                                label: "Promoção",
                              },
                              { value: "cupons", icon: Ue, label: "Cupons" },
                              { value: "frete", icon: K, label: "Frete" },
                              { value: "contato", icon: la, label: "Contato" },
                              {
                                value: "carrinhos",
                                icon: J,
                                label: "Carrinhos",
                              },
                              { value: "pedidos", icon: oa, label: "Pedidos" },
                            ].map((a) => {
                              const s = a.icon,
                                t = oe === a.value;
                              return e.jsxs(
                                "button",
                                {
                                  onClick: () => d(a.value),
                                  className: `flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg text-xs font-medium transition-all border ${
                                    t
                                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                                      : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
                                  }`,
                                  children: [
                                    e.jsx(s, { className: "w-4 h-4" }),
                                    e.jsx("span", {
                                      className:
                                        "truncate w-full text-center text-[10px] md:text-xs",
                                      children: a.label,
                                    }),
                                  ],
                                },
                                a.value
                              );
                            }),
                          }),
                        }),
                        e.jsxs(C, {
                          value: "produtos",
                          className: "space-y-6",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                e.jsxs("h3", {
                                  className:
                                    "text-lg font-semibold flex items-center gap-2",
                                  children: [
                                    e.jsx(V, {
                                      className: "w-5 h-5 text-primary",
                                    }),
                                    "Visibilidade dos Produtos",
                                  ],
                                }),
                                e.jsxs("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: [
                                    T.filter((a) => a.hidden_from_catalog)
                                      .length,
                                    " oculto(s)",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children:
                                "Oculte produtos do catálogo sem precisar deletá-los. Produtos ocultos não aparecerão para os clientes.",
                            }),
                            e.jsx(Q, {
                              className: "h-[400px]",
                              children: e.jsx("div", {
                                className: "space-y-2",
                                children:
                                  T.length === 0
                                    ? e.jsxs("div", {
                                        className:
                                          "text-center py-8 text-muted-foreground",
                                        children: [
                                          e.jsx(V, {
                                            className:
                                              "w-10 h-10 mx-auto mb-2 opacity-50",
                                          }),
                                          e.jsx("p", {
                                            className: "text-sm",
                                            children:
                                              "Nenhum produto cadastrado",
                                          }),
                                        ],
                                      })
                                    : T.map((a) =>
                                        e.jsxs(
                                          "div",
                                          {
                                            className: `flex items-center gap-3 p-3 rounded-lg border transition-all ${
                                              a.hidden_from_catalog
                                                ? "border-destructive/30 bg-destructive/5 opacity-70"
                                                : "border-border bg-muted/10"
                                            }`,
                                            children: [
                                              a.image_url
                                                ? e.jsx("img", {
                                                    src: a.image_url,
                                                    alt: a.name,
                                                    className:
                                                      "w-10 h-10 rounded-lg object-cover border border-border",
                                                  })
                                                : e.jsx("div", {
                                                    className:
                                                      "w-10 h-10 rounded-lg bg-muted flex items-center justify-center",
                                                    children: e.jsx(V, {
                                                      className:
                                                        "w-5 h-5 text-muted-foreground",
                                                    }),
                                                  }),
                                              e.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  e.jsx("p", {
                                                    className: `text-sm font-medium truncate ${
                                                      a.hidden_from_catalog
                                                        ? "line-through text-muted-foreground"
                                                        : ""
                                                    }`,
                                                    children: a.name,
                                                  }),
                                                  e.jsxs("p", {
                                                    className:
                                                      "text-xs text-muted-foreground",
                                                    children: [
                                                      "R$ ",
                                                      a.sale_price.toLocaleString(
                                                        "pt-BR",
                                                        {
                                                          minimumFractionDigits: 2,
                                                        }
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  a.hidden_from_catalog &&
                                                    e.jsx(ve, {
                                                      variant: "destructive",
                                                      className:
                                                        "text-[10px] px-1.5 py-0",
                                                      children: "Oculto",
                                                    }),
                                                  e.jsx(m, {
                                                    variant:
                                                      a.hidden_from_catalog
                                                        ? "outline"
                                                        : "ghost",
                                                    size: "sm",
                                                    onClick: () => Fa(a.id),
                                                    className: "gap-1",
                                                    children:
                                                      a.hidden_from_catalog
                                                        ? e.jsxs(e.Fragment, {
                                                            children: [
                                                              e.jsx(se, {
                                                                className:
                                                                  "w-3 h-3",
                                                              }),
                                                              " Mostrar",
                                                            ],
                                                          })
                                                        : e.jsxs(e.Fragment, {
                                                            children: [
                                                              e.jsx(de, {
                                                                className:
                                                                  "w-3 h-3",
                                                              }),
                                                              " Ocultar",
                                                            ],
                                                          }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          },
                                          a.id
                                        )
                                      ),
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(C, {
                          value: "secoes",
                          className: "space-y-6",
                          children: [
                            e.jsxs("h3", {
                              className:
                                "text-lg font-semibold flex items-center gap-2",
                              children: [
                                e.jsx(ie, {
                                  className: "w-5 h-5 text-primary",
                                }),
                                "Seções Personalizáveis",
                              ],
                            }),
                            e.jsxs(k, {
                              className: "p-4 space-y-4",
                              children: [
                                e.jsxs("h4", {
                                  className:
                                    "font-semibold text-sm flex items-center gap-2",
                                  children: [
                                    e.jsx(Ee, { className: "w-4 h-4" }),
                                    "Banner de Meio de Página",
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Aparece entre os produtos e as promoções.",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        e.jsx(i, {
                                          className: "text-xs",
                                          children: "Imagem Desktop",
                                        }),
                                        e.jsx(g, {
                                          type: "file",
                                          accept: "image/*",
                                          className: "text-xs",
                                          onChange: async (a) => {
                                            const s = a.target.files?.[0];
                                            if (!s || !j) return;
                                            const t = `mid-banner-desktop-${Date.now()}.${s.name
                                                .split(".")
                                                .pop()}`,
                                              { data: o, error: r } =
                                                await u.storage
                                                  .from("catalog-banners")
                                                  .upload(`${j.id}/${t}`, s, {
                                                    upsert: !0,
                                                  });
                                            if (r) {
                                              D({
                                                title: "Erro no upload",
                                                variant: "destructive",
                                              });
                                              return;
                                            }
                                            const { data: n } = u.storage
                                              .from("catalog-banners")
                                              .getPublicUrl(o.path);
                                            c((x) => ({
                                              ...x,
                                              catalog_mid_banner_desktop:
                                                n.publicUrl,
                                            }));
                                          },
                                        }),
                                        l.catalog_mid_banner_desktop &&
                                          e.jsxs("div", {
                                            className: "relative",
                                            children: [
                                              e.jsx("img", {
                                                src: l.catalog_mid_banner_desktop,
                                                alt: "",
                                                className:
                                                  "w-full h-24 object-cover rounded-lg border",
                                              }),
                                              e.jsx(m, {
                                                variant: "destructive",
                                                size: "icon",
                                                className:
                                                  "absolute top-1 right-1 h-6 w-6",
                                                onClick: () =>
                                                  c((a) => ({
                                                    ...a,
                                                    catalog_mid_banner_desktop:
                                                      "",
                                                  })),
                                                children: e.jsx(I, {
                                                  className: "w-3 h-3",
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        e.jsx(i, {
                                          className: "text-xs",
                                          children: "Imagem Mobile",
                                        }),
                                        e.jsx(g, {
                                          type: "file",
                                          accept: "image/*",
                                          className: "text-xs",
                                          onChange: async (a) => {
                                            const s = a.target.files?.[0];
                                            if (!s || !j) return;
                                            const t = `mid-banner-mobile-${Date.now()}.${s.name
                                                .split(".")
                                                .pop()}`,
                                              { data: o, error: r } =
                                                await u.storage
                                                  .from("catalog-banners")
                                                  .upload(`${j.id}/${t}`, s, {
                                                    upsert: !0,
                                                  });
                                            if (r) {
                                              D({
                                                title: "Erro no upload",
                                                variant: "destructive",
                                              });
                                              return;
                                            }
                                            const { data: n } = u.storage
                                              .from("catalog-banners")
                                              .getPublicUrl(o.path);
                                            c((x) => ({
                                              ...x,
                                              catalog_mid_banner_mobile:
                                                n.publicUrl,
                                            }));
                                          },
                                        }),
                                        l.catalog_mid_banner_mobile &&
                                          e.jsxs("div", {
                                            className: "relative",
                                            children: [
                                              e.jsx("img", {
                                                src: l.catalog_mid_banner_mobile,
                                                alt: "",
                                                className:
                                                  "w-full h-24 object-cover rounded-lg border",
                                              }),
                                              e.jsx(m, {
                                                variant: "destructive",
                                                size: "icon",
                                                className:
                                                  "absolute top-1 right-1 h-6 w-6",
                                                onClick: () =>
                                                  c((a) => ({
                                                    ...a,
                                                    catalog_mid_banner_mobile:
                                                      "",
                                                  })),
                                                children: e.jsx(I, {
                                                  className: "w-3 h-3",
                                                }),
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    e.jsx(i, {
                                      className: "text-xs",
                                      children: "Link do Banner (opcional)",
                                    }),
                                    e.jsx(g, {
                                      value: l.catalog_mid_banner_link,
                                      onChange: (a) =>
                                        c((s) => ({
                                          ...s,
                                          catalog_mid_banner_link:
                                            a.target.value,
                                        })),
                                      placeholder: "https://...",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs(k, {
                              className: "p-4 space-y-4",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsxs("h4", {
                                      className:
                                        "font-semibold text-sm flex items-center gap-2",
                                      children: [
                                        e.jsx(Re, { className: "w-4 h-4" }),
                                        "Categorias com Foto (Estilo Mercado Livre)",
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx(i, {
                                          className: "text-xs",
                                          children: "Ativar",
                                        }),
                                        e.jsx(B, {
                                          checked:
                                            l.catalog_show_round_categories,
                                          onCheckedChange: (a) =>
                                            c((s) => ({
                                              ...s,
                                              catalog_show_round_categories: a,
                                            })),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Categorias redondas com foto no topo do catálogo. Selecione quais produtos pertencem a cada categoria.",
                                }),
                                e.jsxs("div", {
                                  className: "flex gap-2 items-end",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex-1 space-y-1",
                                      children: [
                                        e.jsx(i, {
                                          className: "text-xs",
                                          children: "Nome da Categoria",
                                        }),
                                        e.jsx(g, {
                                          id: "new-cat-name",
                                          placeholder:
                                            "Ex: Perfumes, Camisas, Acessórios...",
                                          className: "h-9",
                                        }),
                                      ],
                                    }),
                                    e.jsxs(m, {
                                      size: "sm",
                                      className: "h-9 gap-1",
                                      onClick: () => {
                                        const a =
                                          document.getElementById(
                                            "new-cat-name"
                                          );
                                        if (!a?.value) {
                                          D({
                                            title: "Preencha o nome",
                                            variant: "destructive",
                                          });
                                          return;
                                        }
                                        const s = a.value
                                          .toLowerCase()
                                          .normalize("NFD")
                                          .replace(/[\u0300-\u036f]/g, "")
                                          .replace(/\s+/g, "-");
                                        c((t) => ({
                                          ...t,
                                          catalog_category_cards: [
                                            ...t.catalog_category_cards,
                                            {
                                              id: crypto.randomUUID(),
                                              name: a.value,
                                              image: "",
                                              categoryId: s,
                                              productIds: [],
                                            },
                                          ],
                                        })),
                                          (a.value = "");
                                      },
                                      children: [
                                        e.jsx(te, { className: "w-4 h-4" }),
                                        " Adicionar",
                                      ],
                                    }),
                                  ],
                                }),
                                l.catalog_category_cards.length === 0
                                  ? e.jsxs("div", {
                                      className:
                                        "text-center py-8 border border-dashed rounded-xl",
                                      children: [
                                        e.jsx(Re, {
                                          className:
                                            "w-10 h-10 mx-auto mb-2 text-muted-foreground/40",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children:
                                            "Nenhuma categoria cadastrada",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-[10px] text-muted-foreground/60 mt-1",
                                          children:
                                            "Crie categorias visuais para organizar seu catálogo",
                                        }),
                                      ],
                                    })
                                  : e.jsx("div", {
                                      className: "space-y-4",
                                      children: l.catalog_category_cards.map(
                                        (a) => {
                                          const s = T.filter((o) =>
                                              (a.productIds || []).includes(
                                                o.id
                                              )
                                            ),
                                            t = T.filter(
                                              (o) =>
                                                !(a.productIds || []).includes(
                                                  o.id
                                                )
                                            );
                                          return e.jsxs(
                                            "div",
                                            {
                                              className:
                                                "border rounded-xl overflow-hidden",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-3 p-3 bg-muted/30",
                                                  children: [
                                                    e.jsxs("div", {
                                                      className:
                                                        "relative flex-shrink-0",
                                                      children: [
                                                        e.jsx("div", {
                                                          className:
                                                            "w-14 h-14 rounded-full border-2 border-dashed border-muted-foreground/30 overflow-hidden bg-muted flex items-center justify-center",
                                                          children: a.image
                                                            ? e.jsx("img", {
                                                                src: a.image,
                                                                alt: a.name,
                                                                className:
                                                                  "w-full h-full object-cover",
                                                              })
                                                            : e.jsx(M, {
                                                                className:
                                                                  "w-5 h-5 text-muted-foreground",
                                                              }),
                                                        }),
                                                        e.jsx(i, {
                                                          htmlFor: `cat-img-${a.id}`,
                                                          className:
                                                            "absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition-transform",
                                                          children: e.jsx(M, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                        }),
                                                        e.jsx("input", {
                                                          id: `cat-img-${a.id}`,
                                                          type: "file",
                                                          accept: "image/*",
                                                          className: "hidden",
                                                          onChange: async (
                                                            o
                                                          ) => {
                                                            const r =
                                                              o.target
                                                                .files?.[0];
                                                            if (!r || !j)
                                                              return;
                                                            const n = `cat-${
                                                                a.id
                                                              }-${Date.now()}.${r.name
                                                                .split(".")
                                                                .pop()}`,
                                                              {
                                                                data: x,
                                                                error: ne,
                                                              } = await u.storage
                                                                .from(
                                                                  "catalog-banners"
                                                                )
                                                                .upload(
                                                                  `${j.id}/${n}`,
                                                                  r,
                                                                  { upsert: !0 }
                                                                );
                                                            if (ne) {
                                                              D({
                                                                title:
                                                                  "Erro no upload",
                                                                variant:
                                                                  "destructive",
                                                              });
                                                              return;
                                                            }
                                                            const { data: Ie } =
                                                              u.storage
                                                                .from(
                                                                  "catalog-banners"
                                                                )
                                                                .getPublicUrl(
                                                                  x.path
                                                                );
                                                            c((w) => ({
                                                              ...w,
                                                              catalog_category_cards:
                                                                w.catalog_category_cards.map(
                                                                  (U) =>
                                                                    U.id ===
                                                                    a.id
                                                                      ? {
                                                                          ...U,
                                                                          image:
                                                                            Ie.publicUrl,
                                                                        }
                                                                      : U
                                                                ),
                                                            }));
                                                          },
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "flex-1 min-w-0",
                                                      children: [
                                                        e.jsx(g, {
                                                          value: a.name,
                                                          onChange: (o) =>
                                                            c((r) => ({
                                                              ...r,
                                                              catalog_category_cards:
                                                                r.catalog_category_cards.map(
                                                                  (n) =>
                                                                    n.id ===
                                                                    a.id
                                                                      ? {
                                                                          ...n,
                                                                          name: o
                                                                            .target
                                                                            .value,
                                                                        }
                                                                      : n
                                                                ),
                                                            })),
                                                          className:
                                                            "h-8 text-sm font-semibold border-0 bg-transparent p-0 focus-visible:ring-0 focus-visible:ring-offset-0",
                                                        }),
                                                        e.jsxs("p", {
                                                          className:
                                                            "text-[10px] text-muted-foreground",
                                                          children: [
                                                            s.length,
                                                            " produto(s) vinculado(s)",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsx(m, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className:
                                                        "h-8 w-8 text-destructive hover:bg-destructive/10",
                                                      onClick: () =>
                                                        c((o) => ({
                                                          ...o,
                                                          catalog_category_cards:
                                                            o.catalog_category_cards.filter(
                                                              (r) =>
                                                                r.id !== a.id
                                                            ),
                                                        })),
                                                      children: e.jsx(I, {
                                                        className: "w-4 h-4",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "p-3 space-y-2",
                                                  children: [
                                                    e.jsxs(he, {
                                                      onValueChange: (o) => {
                                                        c((r) => ({
                                                          ...r,
                                                          catalog_category_cards:
                                                            r.catalog_category_cards.map(
                                                              (n) =>
                                                                n.id === a.id
                                                                  ? {
                                                                      ...n,
                                                                      productIds:
                                                                        [
                                                                          ...(n.productIds ||
                                                                            []),
                                                                          o,
                                                                        ],
                                                                    }
                                                                  : n
                                                            ),
                                                        }));
                                                      },
                                                      children: [
                                                        e.jsx(je, {
                                                          className:
                                                            "h-8 text-xs",
                                                          children: e.jsx(_e, {
                                                            placeholder:
                                                              "+ Adicionar produto a esta categoria...",
                                                          }),
                                                        }),
                                                        e.jsx(fe, {
                                                          children: e.jsx(Q, {
                                                            className:
                                                              "max-h-[200px]",
                                                            children:
                                                              t.length === 0
                                                                ? e.jsx("p", {
                                                                    className:
                                                                      "text-xs text-muted-foreground p-2 text-center",
                                                                    children:
                                                                      "Todos os produtos já estão nesta categoria",
                                                                  })
                                                                : t.map((o) =>
                                                                    e.jsx(
                                                                      f,
                                                                      {
                                                                        value:
                                                                          o.id,
                                                                        children:
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "flex items-center gap-2",
                                                                              children:
                                                                                [
                                                                                  o.image_url &&
                                                                                    e.jsx(
                                                                                      "img",
                                                                                      {
                                                                                        src: o.image_url,
                                                                                        alt: "",
                                                                                        className:
                                                                                          "w-5 h-5 rounded object-cover",
                                                                                      }
                                                                                    ),
                                                                                  e.jsx(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "truncate",
                                                                                      children:
                                                                                        o.name,
                                                                                    }
                                                                                  ),
                                                                                  e.jsxs(
                                                                                    "span",
                                                                                    {
                                                                                      className:
                                                                                        "text-muted-foreground ml-auto text-[10px]",
                                                                                      children:
                                                                                        [
                                                                                          X(
                                                                                            l.catalog_currency
                                                                                          ),
                                                                                          " ",
                                                                                          o.sale_price.toFixed(
                                                                                            2
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                      },
                                                                      o.id
                                                                    )
                                                                  ),
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                    s.length > 0 &&
                                                      e.jsx("div", {
                                                        className:
                                                          "flex flex-wrap gap-1.5",
                                                        children: s.map((o) =>
                                                          e.jsxs(
                                                            "div",
                                                            {
                                                              className:
                                                                "flex items-center gap-1.5 bg-muted rounded-lg px-2 py-1 text-xs group",
                                                              children: [
                                                                o.image_url &&
                                                                  e.jsx("img", {
                                                                    src: o.image_url,
                                                                    alt: "",
                                                                    className:
                                                                      "w-4 h-4 rounded object-cover",
                                                                  }),
                                                                e.jsx("span", {
                                                                  className:
                                                                    "truncate max-w-[120px]",
                                                                  children:
                                                                    o.name,
                                                                }),
                                                                e.jsx(
                                                                  "button",
                                                                  {
                                                                    className:
                                                                      "text-muted-foreground hover:text-destructive transition-colors ml-0.5",
                                                                    onClick:
                                                                      () =>
                                                                        c(
                                                                          (
                                                                            r
                                                                          ) => ({
                                                                            ...r,
                                                                            catalog_category_cards:
                                                                              r.catalog_category_cards.map(
                                                                                (
                                                                                  n
                                                                                ) =>
                                                                                  n.id ===
                                                                                  a.id
                                                                                    ? {
                                                                                        ...n,
                                                                                        productIds:
                                                                                          (
                                                                                            n.productIds ||
                                                                                            []
                                                                                          ).filter(
                                                                                            (
                                                                                              x
                                                                                            ) =>
                                                                                              x !==
                                                                                              o.id
                                                                                          ),
                                                                                      }
                                                                                    : n
                                                                              ),
                                                                          })
                                                                        ),
                                                                    children:
                                                                      e.jsx(
                                                                        ts,
                                                                        {
                                                                          className:
                                                                            "w-3 h-3",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                              ],
                                                            },
                                                            o.id
                                                          )
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            a.id
                                          );
                                        }
                                      ),
                                    }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(C, {
                          value: "popups",
                          className: "space-y-6",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                e.jsxs("h3", {
                                  className:
                                    "text-lg font-semibold flex items-center gap-2",
                                  children: [
                                    e.jsx(W, {
                                      className: "w-5 h-5 text-primary",
                                    }),
                                    "Pop-ups do Site",
                                  ],
                                }),
                                e.jsxs(m, {
                                  size: "sm",
                                  onClick: qa,
                                  className: "gap-1",
                                  children: [
                                    e.jsx(te, { className: "w-4 h-4" }),
                                    " Novo Pop-up",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children:
                                "Configure pop-ups para aparecerem quando o cliente entrar no catálogo. Ideal para promoções, cupons e novidades.",
                            }),
                            l.catalog_popups.length === 0
                              ? e.jsxs("div", {
                                  className:
                                    "text-center py-8 text-muted-foreground border border-dashed rounded-lg",
                                  children: [
                                    e.jsx(W, {
                                      className:
                                        "w-10 h-10 mx-auto mb-2 opacity-50",
                                    }),
                                    e.jsx("p", {
                                      className: "text-sm",
                                      children: "Nenhum pop-up configurado",
                                    }),
                                    e.jsx("p", {
                                      className: "text-xs",
                                      children:
                                        "Crie pop-ups para engajar seus clientes",
                                    }),
                                  ],
                                })
                              : e.jsx(Q, {
                                  className: "h-[400px]",
                                  children: e.jsx("div", {
                                    className: "space-y-4",
                                    children: l.catalog_popups.map((a, s) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className:
                                            "p-4 rounded-lg border border-border bg-muted/10 space-y-3",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center justify-between",
                                              children: [
                                                e.jsxs("span", {
                                                  className:
                                                    "text-sm font-medium flex items-center gap-2",
                                                  children: [
                                                    "Pop-up ",
                                                    s + 1,
                                                    a.isActive &&
                                                      e.jsx("span", {
                                                        className:
                                                          "w-2 h-2 rounded-full bg-green-500",
                                                      }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2",
                                                  children: [
                                                    e.jsx(B, {
                                                      checked: a.isActive,
                                                      onCheckedChange: (t) =>
                                                        E(a.id, {
                                                          isActive: t,
                                                        }),
                                                    }),
                                                    e.jsx(m, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className:
                                                        "h-8 w-8 text-destructive",
                                                      onClick: () => Ua(a.id),
                                                      children: e.jsx(I, {
                                                        className: "w-4 h-4",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                              children: [
                                                e.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    e.jsx(i, {
                                                      className: "text-xs",
                                                      children: "Tipo",
                                                    }),
                                                    e.jsxs(he, {
                                                      value: a.type,
                                                      onValueChange: (t) =>
                                                        E(a.id, { type: t }),
                                                      children: [
                                                        e.jsx(je, {
                                                          className: "h-9",
                                                          children: e.jsx(
                                                            _e,
                                                            {}
                                                          ),
                                                        }),
                                                        e.jsxs(fe, {
                                                          children: [
                                                            e.jsx(f, {
                                                              value: "promo",
                                                              children:
                                                                "🔥 Promoção",
                                                            }),
                                                            e.jsx(f, {
                                                              value: "coupon",
                                                              children:
                                                                "🎟️ Cupom",
                                                            }),
                                                            e.jsx(f, {
                                                              value:
                                                                "newProduct",
                                                              children:
                                                                "✨ Produto Novo",
                                                            }),
                                                            e.jsx(f, {
                                                              value: "custom",
                                                              children:
                                                                "📢 Personalizado",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    e.jsx(i, {
                                                      className: "text-xs",
                                                      children:
                                                        "Delay (segundos)",
                                                    }),
                                                    e.jsx(g, {
                                                      type: "number",
                                                      min: 0,
                                                      max: 60,
                                                      value: a.delay,
                                                      onChange: (t) =>
                                                        E(a.id, {
                                                          delay:
                                                            parseInt(
                                                              t.target.value
                                                            ) || 0,
                                                        }),
                                                      className: "h-9",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className: "space-y-1",
                                              children: [
                                                e.jsx(i, {
                                                  className: "text-xs",
                                                  children: "Título",
                                                }),
                                                e.jsx(g, {
                                                  value: a.title,
                                                  onChange: (t) =>
                                                    E(a.id, {
                                                      title: t.target.value,
                                                    }),
                                                  placeholder:
                                                    "Ex: 🔥 Mega Promoção!",
                                                  className: "h-9",
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className: "space-y-1",
                                              children: [
                                                e.jsx(i, {
                                                  className: "text-xs",
                                                  children: "Descrição",
                                                }),
                                                e.jsx(Ne, {
                                                  value: a.description,
                                                  onChange: (t) =>
                                                    E(a.id, {
                                                      description:
                                                        t.target.value,
                                                    }),
                                                  placeholder:
                                                    "Ex: Aproveite até 50% de desconto em todos os produtos!",
                                                  rows: 2,
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                              children: [
                                                e.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    e.jsx(i, {
                                                      className: "text-xs",
                                                      children:
                                                        "Texto do Botão",
                                                    }),
                                                    e.jsx(g, {
                                                      value: a.buttonText,
                                                      onChange: (t) =>
                                                        E(a.id, {
                                                          buttonText:
                                                            t.target.value,
                                                        }),
                                                      placeholder: "Ver Agora",
                                                      className: "h-9",
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    e.jsx(i, {
                                                      className: "text-xs",
                                                      children:
                                                        "Link do Botão (opcional)",
                                                    }),
                                                    e.jsx(g, {
                                                      value: a.buttonLink,
                                                      onChange: (t) =>
                                                        E(a.id, {
                                                          buttonLink:
                                                            t.target.value,
                                                        }),
                                                      placeholder:
                                                        "https://...",
                                                      className: "h-9",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-3",
                                              children: [
                                                e.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    e.jsx(i, {
                                                      className: "text-xs",
                                                      children: "Cor de Fundo",
                                                    }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-2",
                                                      children: [
                                                        e.jsx("input", {
                                                          type: "color",
                                                          value:
                                                            a.backgroundColor,
                                                          onChange: (t) =>
                                                            E(a.id, {
                                                              backgroundColor:
                                                                t.target.value,
                                                            }),
                                                          className:
                                                            "w-8 h-8 rounded cursor-pointer border border-border",
                                                        }),
                                                        e.jsx(g, {
                                                          value:
                                                            a.backgroundColor,
                                                          onChange: (t) =>
                                                            E(a.id, {
                                                              backgroundColor:
                                                                t.target.value,
                                                            }),
                                                          className:
                                                            "h-8 w-24 text-xs",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 ml-auto",
                                                  children: [
                                                    e.jsx(ra, {
                                                      id: `popup-once-${a.id}`,
                                                      checked: a.showOnce,
                                                      onCheckedChange: (t) =>
                                                        E(a.id, {
                                                          showOnce: !!t,
                                                        }),
                                                    }),
                                                    e.jsx(i, {
                                                      htmlFor: `popup-once-${a.id}`,
                                                      className:
                                                        "text-xs cursor-pointer",
                                                      children:
                                                        "Mostrar apenas 1 vez por sessão",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        a.id
                                      )
                                    ),
                                  }),
                                }),
                          ],
                        }),
                        e.jsxs(C, {
                          value: "geral",
                          className: "space-y-6",
                          children: [
                            e.jsx("div", {
                              className: "flex items-center justify-between",
                              children: e.jsxs("h3", {
                                className:
                                  "text-lg font-semibold flex items-center gap-2",
                                children: [
                                  e.jsx(Te, {
                                    className: "w-5 h-5 text-primary",
                                  }),
                                  "Configurações Gerais",
                                ],
                              }),
                            }),
                            e.jsxs("div", {
                              className:
                                "space-y-3 p-4 rounded-lg border border-border bg-muted/20",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    e.jsx(Te, { className: "w-4 h-4" }),
                                    "Idioma e Região do Catálogo",
                                  ],
                                }),
                                e.jsxs(he, {
                                  value: l.catalog_language,
                                  onValueChange: (a) =>
                                    c((s) => ({ ...s, catalog_language: a })),
                                  children: [
                                    e.jsx(je, {
                                      className: "w-full",
                                      children: e.jsx(_e, {
                                        placeholder: "Selecione o idioma",
                                      }),
                                    }),
                                    e.jsxs(fe, {
                                      children: [
                                        e.jsx(f, {
                                          value: "pt-BR",
                                          children: "🇧🇷 Brasil (Português)",
                                        }),
                                        e.jsx(f, {
                                          value: "pt-PT",
                                          children: "🇵🇹 Portugal (Português)",
                                        }),
                                        e.jsx(f, {
                                          value: "en-US",
                                          children:
                                            "🇺🇸 Estados Unidos (English)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Define o idioma completo do catálogo. Isso afeta todos os textos, métodos de pagamento (PIX para Brasil, MB Way para Portugal), e informações de entrega.",
                                }),
                                e.jsxs("div", {
                                  className:
                                    "mt-3 p-3 bg-background rounded-lg",
                                  children: [
                                    e.jsx(i, {
                                      className:
                                        "text-xs text-muted-foreground mb-2 block",
                                      children: "Forma de pagamento exibida:",
                                    }),
                                    e.jsx("div", {
                                      className: "flex items-center gap-2",
                                      children:
                                        l.catalog_language === "pt-PT"
                                          ? e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx("img", {
                                                  src: ds,
                                                  alt: "MB Way",
                                                  className:
                                                    "w-8 h-8 object-contain",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-sm font-medium",
                                                  children: "MB Way (Portugal)",
                                                }),
                                              ],
                                            })
                                          : e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx("div", {
                                                  className:
                                                    "w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-white font-bold text-xs",
                                                  children: "PIX",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-sm font-medium",
                                                  children: "PIX (Brasil)",
                                                }),
                                              ],
                                            }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "space-y-3 p-4 rounded-lg border border-primary/30 bg-primary/5",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    e.jsx(Le, { className: "w-4 h-4" }),
                                    "Link Personalizado do Catálogo",
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1 text-sm text-muted-foreground bg-muted px-3 py-2 rounded-l-lg border border-r-0",
                                      children: [
                                        e.jsx("span", {
                                          className: "hidden sm:inline",
                                          children: window.location.origin,
                                        }),
                                        "/catalogo/",
                                      ],
                                    }),
                                    e.jsx(g, {
                                      value: l.catalog_store_slug,
                                      onChange: (a) => {
                                        const s = a.target.value
                                          .toLowerCase()
                                          .replace(/[^a-z0-9-]/g, "")
                                          .substring(0, 30);
                                        c((t) => ({
                                          ...t,
                                          catalog_store_slug: s,
                                        }));
                                      },
                                      placeholder: "minha-loja",
                                      className: "flex-1 rounded-l-none",
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "flex items-center gap-2",
                                  children: e.jsxs(m, {
                                    type: "button",
                                    variant: "outline",
                                    size: "sm",
                                    onClick: La,
                                    children: [
                                      e.jsx(W, { className: "w-4 h-4 mr-1" }),
                                      "Gerar Automaticamente",
                                    ],
                                  }),
                                }),
                                l.catalog_store_slug &&
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 p-3 bg-background rounded-lg border border-green-500/30",
                                    children: [
                                      e.jsx(me, {
                                        className: "w-4 h-4 text-green-500",
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "text-sm font-medium text-green-600 dark:text-green-400",
                                        children: [
                                          "Seu link: ",
                                          window.location.origin,
                                          "/catalogo/",
                                          l.catalog_store_slug,
                                        ],
                                      }),
                                      e.jsx(m, {
                                        type: "button",
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: Ze,
                                        className: "ml-auto",
                                        children: e.jsx(aa, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                    ],
                                  }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Crie um link curto e personalizado para seu catálogo. Use apenas letras minúsculas, números e hífens. Deixe em branco para usar o link padrão.",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "space-y-3 p-4 rounded-lg border border-border bg-muted/20",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    l.catalog_hide_promo_bar
                                      ? e.jsx(us, { className: "w-4 h-4" })
                                      : e.jsx(ps, { className: "w-4 h-4" }),
                                    "Faixa Promocional (Barra Animada no Topo)",
                                  ],
                                }),
                                e.jsx(m, {
                                  type: "button",
                                  variant: l.catalog_hide_promo_bar
                                    ? "destructive"
                                    : "outline",
                                  onClick: () =>
                                    c((a) => ({
                                      ...a,
                                      catalog_hide_promo_bar:
                                        !a.catalog_hide_promo_bar,
                                    })),
                                  className: "w-full justify-start gap-2",
                                  children: l.catalog_hide_promo_bar
                                    ? e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx(de, { className: "w-4 h-4" }),
                                          "Faixa Oculta - Clique para Exibir",
                                        ],
                                      })
                                    : e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx(se, { className: "w-4 h-4" }),
                                          "Faixa Visível - Clique para Ocultar",
                                        ],
                                      }),
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    'Controla a faixa animada com promoções que aparece no topo do catálogo (ex: "Frete Grátis", "Parcelamento", etc).',
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "space-y-3 p-4 rounded-lg border border-border bg-muted/20",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    e.jsx(ls, { className: "w-4 h-4" }),
                                    "Informação de Parcelamento",
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    e.jsx(m, {
                                      type: "button",
                                      variant: l.catalog_show_installments
                                        ? "outline"
                                        : "destructive",
                                      size: "sm",
                                      onClick: () =>
                                        c((a) => ({
                                          ...a,
                                          catalog_show_installments:
                                            !a.catalog_show_installments,
                                        })),
                                      className: "flex-shrink-0",
                                      children: l.catalog_show_installments
                                        ? e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx(se, {
                                                className: "w-4 h-4 mr-1",
                                              }),
                                              "Visível",
                                            ],
                                          })
                                        : e.jsxs(e.Fragment, {
                                            children: [
                                              e.jsx(de, {
                                                className: "w-4 h-4 mr-1",
                                              }),
                                              "Oculto",
                                            ],
                                          }),
                                    }),
                                    e.jsx(g, {
                                      value: l.catalog_installments_text,
                                      onChange: (a) =>
                                        c((s) => ({
                                          ...s,
                                          catalog_installments_text:
                                            a.target.value,
                                        })),
                                      placeholder: "Até 12x sem juros",
                                      disabled: !l.catalog_show_installments,
                                      className: "flex-1",
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Texto personalizado para informação de parcelamento exibido nos produtos e no catálogo.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(C, {
                          value: "comentarios",
                          className: "space-y-4",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center justify-between",
                              children: [
                                e.jsxs("h3", {
                                  className:
                                    "text-lg font-semibold flex items-center gap-2",
                                  children: [
                                    e.jsx(we, {
                                      className: "w-5 h-5 text-primary",
                                    }),
                                    "Avaliações dos Clientes",
                                  ],
                                }),
                                e.jsxs(m, {
                                  variant: "outline",
                                  size: "sm",
                                  onClick: Ve,
                                  children: [
                                    e.jsx(z, { className: "w-4 h-4 mr-2" }),
                                    "Atualizar",
                                  ],
                                }),
                              ],
                            }),
                            h.length === 0
                              ? e.jsxs("div", {
                                  className:
                                    "text-center py-12 text-muted-foreground",
                                  children: [
                                    e.jsx(we, {
                                      className:
                                        "w-12 h-12 mx-auto mb-4 opacity-50",
                                    }),
                                    e.jsx("p", {
                                      children:
                                        "Nenhuma avaliação recebida ainda",
                                    }),
                                    e.jsx("p", {
                                      className: "text-sm",
                                      children:
                                        "As avaliações dos clientes aparecerão aqui",
                                    }),
                                  ],
                                })
                              : e.jsx(Q, {
                                  className: "h-[500px]",
                                  children: e.jsx("div", {
                                    className: "space-y-3",
                                    children: h.map((a) =>
                                      e.jsxs(
                                        "div",
                                        {
                                          className: `p-4 rounded-lg border ${
                                            a.status === "approved"
                                              ? "border-green-500/30 bg-green-500/5"
                                              : a.status === "rejected"
                                              ? "border-red-500/30 bg-red-500/5"
                                              : "border-yellow-500/30 bg-yellow-500/5"
                                          }`,
                                          children: [
                                            e.jsx("div", {
                                              className:
                                                "flex items-start justify-between mb-3",
                                              children: e.jsxs("div", {
                                                className: "flex-1",
                                                children: [
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-2 flex-wrap",
                                                    children: [
                                                      e.jsx(ca, {
                                                        className:
                                                          "w-4 h-4 text-muted-foreground",
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "font-semibold",
                                                        children:
                                                          a.customer_name,
                                                      }),
                                                      e.jsx("div", {
                                                        className:
                                                          "flex items-center",
                                                        children: [
                                                          1, 2, 3, 4, 5,
                                                        ].map((s) =>
                                                          e.jsx(
                                                            os,
                                                            {
                                                              className: `w-3 h-3 ${
                                                                s <= a.rating
                                                                  ? "fill-yellow-400 text-yellow-400"
                                                                  : "text-muted"
                                                              }`,
                                                            },
                                                            s
                                                          )
                                                        ),
                                                      }),
                                                      e.jsx("span", {
                                                        className: `text-xs px-2 py-0.5 rounded-full ${
                                                          a.status ===
                                                          "approved"
                                                            ? "bg-green-500/20 text-green-600"
                                                            : a.status ===
                                                              "rejected"
                                                            ? "bg-red-500/20 text-red-600"
                                                            : "bg-yellow-500/20 text-yellow-600"
                                                        }`,
                                                        children:
                                                          a.status ===
                                                          "approved"
                                                            ? "Aprovado"
                                                            : a.status ===
                                                              "rejected"
                                                            ? "Rejeitado"
                                                            : "Pendente",
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("p", {
                                                    className:
                                                      "text-xs text-muted-foreground mt-1",
                                                    children: [
                                                      "Produto: ",
                                                      e.jsx("span", {
                                                        className:
                                                          "font-medium",
                                                        children:
                                                          a.product_name,
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsx("p", {
                                                    className:
                                                      "text-xs text-muted-foreground",
                                                    children: ye(
                                                      new Date(a.created_at),
                                                      "dd/MM/yyyy 'às' HH:mm",
                                                      { locale: ke }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-sm bg-muted/30 p-3 rounded-lg mb-3",
                                              children: ['"', a.comment, '"'],
                                            }),
                                            a.media_urls &&
                                              a.media_urls.length > 0 &&
                                              e.jsx("div", {
                                                className:
                                                  "flex gap-2 overflow-x-auto pb-1 mb-3",
                                                children: a.media_urls.map(
                                                  (s, t) => {
                                                    const o = Na(
                                                      s,
                                                      a.media_types?.[t]
                                                    );
                                                    return e.jsx(
                                                      "button",
                                                      {
                                                        type: "button",
                                                        onClick: () =>
                                                          Me({
                                                            url: s,
                                                            type: o,
                                                          }),
                                                        className:
                                                          "relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-border hover:opacity-90 transition-opacity flex-shrink-0",
                                                        children:
                                                          o === "video"
                                                            ? e.jsxs("div", {
                                                                className:
                                                                  "w-full h-full bg-black relative",
                                                                children: [
                                                                  e.jsx(
                                                                    "video",
                                                                    {
                                                                      src: s,
                                                                      className:
                                                                        "w-full h-full object-cover",
                                                                      preload:
                                                                        "metadata",
                                                                      muted: !0,
                                                                      playsInline:
                                                                        !0,
                                                                    }
                                                                  ),
                                                                  e.jsx("div", {
                                                                    className:
                                                                      "absolute inset-0 flex items-center justify-center bg-black/30",
                                                                    children:
                                                                      e.jsx(
                                                                        rs,
                                                                        {
                                                                          className:
                                                                            "w-4 h-4 text-white",
                                                                        }
                                                                      ),
                                                                  }),
                                                                ],
                                                              })
                                                            : e.jsx("img", {
                                                                src: s,
                                                                alt: "Mídia da avaliação",
                                                                className:
                                                                  "w-full h-full object-cover",
                                                                loading: "lazy",
                                                              }),
                                                      },
                                                      `${a.id}-${t}`
                                                    );
                                                  }
                                                ),
                                              }),
                                            a.technician_response &&
                                              e.jsxs("div", {
                                                className:
                                                  "p-3 rounded-lg bg-primary/10 border-l-4 border-primary mb-3",
                                                children: [
                                                  e.jsx("p", {
                                                    className:
                                                      "text-xs font-semibold mb-1",
                                                    children: "Sua resposta:",
                                                  }),
                                                  e.jsx("p", {
                                                    className: "text-sm",
                                                    children:
                                                      a.technician_response,
                                                  }),
                                                ],
                                              }),
                                            L === a.id &&
                                              e.jsxs("div", {
                                                className:
                                                  "p-3 rounded-lg bg-muted/30 mb-3 space-y-2",
                                                children: [
                                                  e.jsx(Ne, {
                                                    value: xe,
                                                    onChange: (s) =>
                                                      Ce(s.target.value),
                                                    placeholder:
                                                      "Digite sua resposta...",
                                                    className: "min-h-[80px]",
                                                    maxLength: 500,
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex gap-2 justify-end",
                                                    children: [
                                                      e.jsx(m, {
                                                        size: "sm",
                                                        variant: "ghost",
                                                        onClick: () => {
                                                          ee(null), Ce("");
                                                        },
                                                        children: "Cancelar",
                                                      }),
                                                      e.jsxs(m, {
                                                        size: "sm",
                                                        onClick: () => va(a.id),
                                                        className: "gap-1",
                                                        children: [
                                                          e.jsx(na, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                          "Enviar",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            e.jsxs("div", {
                                              className: "flex flex-wrap gap-2",
                                              children: [
                                                a.status === "pending" &&
                                                  e.jsxs(e.Fragment, {
                                                    children: [
                                                      e.jsxs(m, {
                                                        size: "sm",
                                                        className:
                                                          "gap-1 bg-green-600 hover:bg-green-700",
                                                        onClick: () =>
                                                          Ge(a.id, "approved"),
                                                        children: [
                                                          e.jsx(be, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                          "Aprovar",
                                                        ],
                                                      }),
                                                      e.jsxs(m, {
                                                        size: "sm",
                                                        variant: "destructive",
                                                        className: "gap-1",
                                                        onClick: () =>
                                                          Ge(a.id, "rejected"),
                                                        children: [
                                                          e.jsx(Fe, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                          "Rejeitar",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                !a.technician_response &&
                                                  a.status === "approved" &&
                                                  e.jsxs(m, {
                                                    size: "sm",
                                                    variant: "outline",
                                                    className: "gap-1",
                                                    onClick: () => ee(a.id),
                                                    children: [
                                                      e.jsx(js, {
                                                        className: "w-3 h-3",
                                                      }),
                                                      "Responder",
                                                    ],
                                                  }),
                                                e.jsxs(m, {
                                                  size: "sm",
                                                  variant: "ghost",
                                                  className:
                                                    "text-destructive hover:text-destructive gap-1",
                                                  onClick: () => ba(a.id),
                                                  children: [
                                                    e.jsx(I, {
                                                      className: "w-3 h-3",
                                                    }),
                                                    "Excluir",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        a.id
                                      )
                                    ),
                                  }),
                                }),
                          ],
                        }),
                        e.jsxs(C, {
                          value: "aparencia",
                          className: "space-y-6",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    e.jsx(hs, { className: "w-4 h-4" }),
                                    "Moeda do Catálogo",
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "flex gap-2",
                                  children: vs.map((a) =>
                                    e.jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () =>
                                          c((s) => ({
                                            ...s,
                                            catalog_currency: a.value,
                                          })),
                                        className: `flex-1 p-3 rounded-lg border-2 transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                                          l.catalog_currency === a.value
                                            ? "border-primary bg-primary/10"
                                            : "border-border hover:border-primary/50"
                                        }`,
                                        children: [
                                          e.jsx("span", {
                                            className: "font-bold text-lg",
                                            children: a.symbol,
                                          }),
                                          e.jsx("span", {
                                            className: "text-sm",
                                            children: a.label,
                                          }),
                                        ],
                                      },
                                      a.value
                                    )
                                  ),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    e.jsx(xa, { className: "w-4 h-4" }),
                                    "Modo Claro/Escuro",
                                  ],
                                }),
                                e.jsxs(cs, {
                                  value: l.catalog_theme,
                                  onValueChange: (a) =>
                                    c((s) => ({ ...s, catalog_theme: a })),
                                  className: "flex gap-4",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center space-x-2",
                                      children: [
                                        e.jsx(ia, {
                                          value: "light",
                                          id: "theme-light",
                                        }),
                                        e.jsxs(i, {
                                          htmlFor: "theme-light",
                                          className:
                                            "flex items-center gap-2 cursor-pointer",
                                          children: [
                                            e.jsx(xa, { className: "w-4 h-4" }),
                                            "Claro",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-center space-x-2",
                                      children: [
                                        e.jsx(ia, {
                                          value: "dark",
                                          id: "theme-dark",
                                        }),
                                        e.jsxs(i, {
                                          htmlFor: "theme-dark",
                                          className:
                                            "flex items-center gap-2 cursor-pointer",
                                          children: [
                                            e.jsx(ns, { className: "w-4 h-4" }),
                                            "Escuro",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "space-y-3 p-4 rounded-lg border border-border bg-muted/20",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsxs(i, {
                                      className:
                                        "flex items-center gap-2 text-sm font-medium",
                                      children: [
                                        e.jsx(ie, { className: "w-4 h-4" }),
                                        "Banners Principais (Carrossel)",
                                      ],
                                    }),
                                    e.jsxs(m, {
                                      type: "button",
                                      size: "sm",
                                      onClick: () => {
                                        const a = {
                                          id: crypto.randomUUID(),
                                          desktopImage: "",
                                          mobileImage: "",
                                          link: "",
                                        };
                                        c((s) => ({
                                          ...s,
                                          catalog_main_banners: [
                                            ...s.catalog_main_banners,
                                            a,
                                          ],
                                        }));
                                      },
                                      className: "gap-1",
                                      children: [
                                        e.jsx(te, { className: "w-4 h-4" }),
                                        "Adicionar Banner",
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Adicione múltiplos banners que serão exibidos em carrossel. Desktop (1200x400px) e Mobile (600x300px).",
                                }),
                                l.catalog_main_banners.length === 0
                                  ? e.jsxs("div", {
                                      className:
                                        "text-center py-6 text-muted-foreground border border-dashed rounded-lg",
                                      children: [
                                        e.jsx(ie, {
                                          className:
                                            "w-10 h-10 mx-auto mb-2 opacity-50",
                                        }),
                                        e.jsx("p", {
                                          className: "text-sm",
                                          children: "Nenhum banner adicionado",
                                        }),
                                        e.jsx("p", {
                                          className: "text-xs",
                                          children:
                                            'Clique em "Adicionar Banner" para começar',
                                        }),
                                      ],
                                    })
                                  : e.jsx("div", {
                                      className: "space-y-3",
                                      children: l.catalog_main_banners.map(
                                        (a, s) =>
                                          e.jsxs(
                                            "div",
                                            {
                                              className:
                                                "p-3 border rounded-lg bg-background/50 space-y-2",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center justify-between",
                                                  children: [
                                                    e.jsxs("span", {
                                                      className:
                                                        "text-sm font-medium",
                                                      children: [
                                                        "Banner ",
                                                        s + 1,
                                                      ],
                                                    }),
                                                    e.jsx(m, {
                                                      type: "button",
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className:
                                                        "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10",
                                                      onClick: async () => {
                                                        c((t) => ({
                                                          ...t,
                                                          catalog_main_banners:
                                                            t.catalog_main_banners.filter(
                                                              (o) =>
                                                                o.id !== a.id
                                                            ),
                                                        })),
                                                          N.success(
                                                            "Banner removido! Clique em Salvar para confirmar."
                                                          );
                                                      },
                                                      children: e.jsx(I, {
                                                        className: "w-4 h-4",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                  children: [
                                                    e.jsxs("div", {
                                                      className: "space-y-2",
                                                      children: [
                                                        e.jsxs(i, {
                                                          className:
                                                            "text-xs flex items-center gap-1",
                                                          children: [
                                                            e.jsx(Ee, {
                                                              className:
                                                                "w-3 h-3",
                                                            }),
                                                            " Desktop",
                                                          ],
                                                        }),
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex gap-2",
                                                          children: [
                                                            e.jsx(g, {
                                                              placeholder:
                                                                "URL da imagem desktop",
                                                              value:
                                                                a.desktopImage,
                                                              onChange: (t) => {
                                                                c((o) => ({
                                                                  ...o,
                                                                  catalog_main_banners:
                                                                    o.catalog_main_banners.map(
                                                                      (r) =>
                                                                        r.id ===
                                                                        a.id
                                                                          ? {
                                                                              ...r,
                                                                              desktopImage:
                                                                                t
                                                                                  .target
                                                                                  .value,
                                                                            }
                                                                          : r
                                                                    ),
                                                                }));
                                                              },
                                                              className:
                                                                "text-sm flex-1",
                                                            }),
                                                            e.jsxs(m, {
                                                              type: "button",
                                                              variant:
                                                                "outline",
                                                              size: "icon",
                                                              className:
                                                                "relative",
                                                              disabled:
                                                                S ===
                                                                `main-${a.id}-desktop`,
                                                              children: [
                                                                S ===
                                                                `main-${a.id}-desktop`
                                                                  ? e.jsx(z, {
                                                                      className:
                                                                        "w-4 h-4 animate-spin",
                                                                    })
                                                                  : e.jsx(M, {
                                                                      className:
                                                                        "w-4 h-4",
                                                                    }),
                                                                e.jsx("input", {
                                                                  type: "file",
                                                                  accept:
                                                                    "image/*",
                                                                  onChange:
                                                                    async (
                                                                      t
                                                                    ) => {
                                                                      const o =
                                                                        t.target
                                                                          .files?.[0];
                                                                      if (!o)
                                                                        return;
                                                                      const r =
                                                                        await ce(
                                                                          o,
                                                                          `main-${a.id}-desktop`
                                                                        );
                                                                      r &&
                                                                        c(
                                                                          (
                                                                            n
                                                                          ) => ({
                                                                            ...n,
                                                                            catalog_main_banners:
                                                                              n.catalog_main_banners.map(
                                                                                (
                                                                                  x
                                                                                ) =>
                                                                                  x.id ===
                                                                                  a.id
                                                                                    ? {
                                                                                        ...x,
                                                                                        desktopImage:
                                                                                          r,
                                                                                      }
                                                                                    : x
                                                                              ),
                                                                          })
                                                                        );
                                                                    },
                                                                  className:
                                                                    "absolute inset-0 opacity-0 cursor-pointer",
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        a.desktopImage &&
                                                          e.jsx("img", {
                                                            src: a.desktopImage,
                                                            alt: "Preview",
                                                            className:
                                                              "w-full h-16 object-cover rounded border",
                                                          }),
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      className: "space-y-2",
                                                      children: [
                                                        e.jsxs(i, {
                                                          className:
                                                            "text-xs flex items-center gap-1",
                                                          children: [
                                                            e.jsx(da, {
                                                              className:
                                                                "w-3 h-3",
                                                            }),
                                                            " Mobile",
                                                          ],
                                                        }),
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex gap-2",
                                                          children: [
                                                            e.jsx(g, {
                                                              placeholder:
                                                                "URL da imagem mobile",
                                                              value:
                                                                a.mobileImage,
                                                              onChange: (t) => {
                                                                c((o) => ({
                                                                  ...o,
                                                                  catalog_main_banners:
                                                                    o.catalog_main_banners.map(
                                                                      (r) =>
                                                                        r.id ===
                                                                        a.id
                                                                          ? {
                                                                              ...r,
                                                                              mobileImage:
                                                                                t
                                                                                  .target
                                                                                  .value,
                                                                            }
                                                                          : r
                                                                    ),
                                                                }));
                                                              },
                                                              className:
                                                                "text-sm flex-1",
                                                            }),
                                                            e.jsxs(m, {
                                                              type: "button",
                                                              variant:
                                                                "outline",
                                                              size: "icon",
                                                              className:
                                                                "relative",
                                                              disabled:
                                                                S ===
                                                                `main-${a.id}-mobile`,
                                                              children: [
                                                                S ===
                                                                `main-${a.id}-mobile`
                                                                  ? e.jsx(z, {
                                                                      className:
                                                                        "w-4 h-4 animate-spin",
                                                                    })
                                                                  : e.jsx(M, {
                                                                      className:
                                                                        "w-4 h-4",
                                                                    }),
                                                                e.jsx("input", {
                                                                  type: "file",
                                                                  accept:
                                                                    "image/*",
                                                                  onChange:
                                                                    async (
                                                                      t
                                                                    ) => {
                                                                      const o =
                                                                        t.target
                                                                          .files?.[0];
                                                                      if (!o)
                                                                        return;
                                                                      const r =
                                                                        await ce(
                                                                          o,
                                                                          `main-${a.id}-mobile`
                                                                        );
                                                                      r &&
                                                                        c(
                                                                          (
                                                                            n
                                                                          ) => ({
                                                                            ...n,
                                                                            catalog_main_banners:
                                                                              n.catalog_main_banners.map(
                                                                                (
                                                                                  x
                                                                                ) =>
                                                                                  x.id ===
                                                                                  a.id
                                                                                    ? {
                                                                                        ...x,
                                                                                        mobileImage:
                                                                                          r,
                                                                                      }
                                                                                    : x
                                                                              ),
                                                                          })
                                                                        );
                                                                    },
                                                                  className:
                                                                    "absolute inset-0 opacity-0 cursor-pointer",
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        a.mobileImage &&
                                                          e.jsx("img", {
                                                            src: a.mobileImage,
                                                            alt: "Preview",
                                                            className:
                                                              "w-full h-12 object-cover rounded border",
                                                          }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    e.jsxs(i, {
                                                      className:
                                                        "text-xs flex items-center gap-1",
                                                      children: [
                                                        e.jsx(Le, {
                                                          className: "w-3 h-3",
                                                        }),
                                                        " Link (opcional)",
                                                      ],
                                                    }),
                                                    e.jsx(g, {
                                                      placeholder:
                                                        "https://exemplo.com/promocao",
                                                      value: a.link || "",
                                                      onChange: (t) => {
                                                        c((o) => ({
                                                          ...o,
                                                          catalog_main_banners:
                                                            o.catalog_main_banners.map(
                                                              (r) =>
                                                                r.id === a.id
                                                                  ? {
                                                                      ...r,
                                                                      link: t
                                                                        .target
                                                                        .value,
                                                                    }
                                                                  : r
                                                            ),
                                                        }));
                                                      },
                                                      className: "text-sm",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            a.id
                                          )
                                      ),
                                    }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "space-y-3 p-4 rounded-lg border border-orange-500/30 bg-orange-500/5",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsxs(i, {
                                      className:
                                        "flex items-center gap-2 text-sm font-medium",
                                      children: [
                                        e.jsx(W, {
                                          className: "w-4 h-4 text-orange-500",
                                        }),
                                        "Banners Secundários (Promoções no Meio)",
                                      ],
                                    }),
                                    e.jsxs(m, {
                                      type: "button",
                                      size: "sm",
                                      onClick: () => {
                                        const a = {
                                          id: crypto.randomUUID(),
                                          desktopImage: "",
                                          mobileImage: "",
                                          link: "",
                                          title: "",
                                        };
                                        c((s) => ({
                                          ...s,
                                          catalog_secondary_banners: [
                                            ...s.catalog_secondary_banners,
                                            a,
                                          ],
                                        }));
                                      },
                                      className: "gap-1",
                                      children: [
                                        e.jsx(te, { className: "w-4 h-4" }),
                                        "Adicionar",
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Banners promocionais exibidos entre os produtos no catálogo. Ideal para destacar ofertas especiais.",
                                }),
                                l.catalog_secondary_banners.length === 0
                                  ? e.jsxs("div", {
                                      className:
                                        "text-center py-6 text-muted-foreground border border-dashed rounded-lg",
                                      children: [
                                        e.jsx(ze, {
                                          className:
                                            "w-10 h-10 mx-auto mb-2 opacity-50",
                                        }),
                                        e.jsx("p", {
                                          className: "text-sm",
                                          children: "Nenhum banner secundário",
                                        }),
                                        e.jsx("p", {
                                          className: "text-xs",
                                          children:
                                            "Adicione banners promocionais para exibir no meio do catálogo",
                                        }),
                                      ],
                                    })
                                  : e.jsx("div", {
                                      className: "space-y-3",
                                      children: l.catalog_secondary_banners.map(
                                        (a, s) =>
                                          e.jsxs(
                                            "div",
                                            {
                                              className:
                                                "p-3 border rounded-lg bg-background/50 space-y-2",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center justify-between",
                                                  children: [
                                                    e.jsxs("span", {
                                                      className:
                                                        "text-sm font-medium",
                                                      children: [
                                                        "Banner Promocional ",
                                                        s + 1,
                                                      ],
                                                    }),
                                                    e.jsx(m, {
                                                      type: "button",
                                                      variant: "ghost",
                                                      size: "icon",
                                                      className:
                                                        "h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10",
                                                      onClick: () => {
                                                        c((t) => ({
                                                          ...t,
                                                          catalog_secondary_banners:
                                                            t.catalog_secondary_banners.filter(
                                                              (o) =>
                                                                o.id !== a.id
                                                            ),
                                                        })),
                                                          N.success(
                                                            "Banner removido! Clique em Salvar para confirmar."
                                                          );
                                                      },
                                                      children: e.jsx(I, {
                                                        className: "w-4 h-4",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "space-y-2",
                                                  children: [
                                                    e.jsx(i, {
                                                      className: "text-xs",
                                                      children:
                                                        "Título (opcional)",
                                                    }),
                                                    e.jsx(g, {
                                                      placeholder:
                                                        "Ex: Super Promoção de Verão",
                                                      value: a.title || "",
                                                      onChange: (t) => {
                                                        c((o) => ({
                                                          ...o,
                                                          catalog_secondary_banners:
                                                            o.catalog_secondary_banners.map(
                                                              (r) =>
                                                                r.id === a.id
                                                                  ? {
                                                                      ...r,
                                                                      title:
                                                                        t.target
                                                                          .value,
                                                                    }
                                                                  : r
                                                            ),
                                                        }));
                                                      },
                                                      className: "text-sm",
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                  children: [
                                                    e.jsxs("div", {
                                                      className: "space-y-2",
                                                      children: [
                                                        e.jsxs(i, {
                                                          className:
                                                            "text-xs flex items-center gap-1",
                                                          children: [
                                                            e.jsx(Ee, {
                                                              className:
                                                                "w-3 h-3",
                                                            }),
                                                            " Desktop (1200x300px)",
                                                          ],
                                                        }),
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex gap-2",
                                                          children: [
                                                            e.jsx(g, {
                                                              placeholder:
                                                                "URL da imagem desktop",
                                                              value:
                                                                a.desktopImage,
                                                              onChange: (t) => {
                                                                c((o) => ({
                                                                  ...o,
                                                                  catalog_secondary_banners:
                                                                    o.catalog_secondary_banners.map(
                                                                      (r) =>
                                                                        r.id ===
                                                                        a.id
                                                                          ? {
                                                                              ...r,
                                                                              desktopImage:
                                                                                t
                                                                                  .target
                                                                                  .value,
                                                                            }
                                                                          : r
                                                                    ),
                                                                }));
                                                              },
                                                              className:
                                                                "text-sm flex-1",
                                                            }),
                                                            e.jsxs(m, {
                                                              type: "button",
                                                              variant:
                                                                "outline",
                                                              size: "icon",
                                                              className:
                                                                "relative",
                                                              disabled:
                                                                S ===
                                                                `secondary-${a.id}-desktop`,
                                                              children: [
                                                                S ===
                                                                `secondary-${a.id}-desktop`
                                                                  ? e.jsx(z, {
                                                                      className:
                                                                        "w-4 h-4 animate-spin",
                                                                    })
                                                                  : e.jsx(M, {
                                                                      className:
                                                                        "w-4 h-4",
                                                                    }),
                                                                e.jsx("input", {
                                                                  type: "file",
                                                                  accept:
                                                                    "image/*",
                                                                  onChange:
                                                                    async (
                                                                      t
                                                                    ) => {
                                                                      const o =
                                                                        t.target
                                                                          .files?.[0];
                                                                      if (!o)
                                                                        return;
                                                                      const r =
                                                                        await ce(
                                                                          o,
                                                                          `secondary-${a.id}-desktop`
                                                                        );
                                                                      r &&
                                                                        c(
                                                                          (
                                                                            n
                                                                          ) => ({
                                                                            ...n,
                                                                            catalog_secondary_banners:
                                                                              n.catalog_secondary_banners.map(
                                                                                (
                                                                                  x
                                                                                ) =>
                                                                                  x.id ===
                                                                                  a.id
                                                                                    ? {
                                                                                        ...x,
                                                                                        desktopImage:
                                                                                          r,
                                                                                      }
                                                                                    : x
                                                                              ),
                                                                          })
                                                                        );
                                                                    },
                                                                  className:
                                                                    "absolute inset-0 opacity-0 cursor-pointer",
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        a.desktopImage &&
                                                          e.jsx("img", {
                                                            src: a.desktopImage,
                                                            alt: "Preview",
                                                            className:
                                                              "w-full h-16 object-cover rounded border",
                                                          }),
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      className: "space-y-2",
                                                      children: [
                                                        e.jsxs(i, {
                                                          className:
                                                            "text-xs flex items-center gap-1",
                                                          children: [
                                                            e.jsx(da, {
                                                              className:
                                                                "w-3 h-3",
                                                            }),
                                                            " Mobile (600x200px)",
                                                          ],
                                                        }),
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex gap-2",
                                                          children: [
                                                            e.jsx(g, {
                                                              placeholder:
                                                                "URL da imagem mobile",
                                                              value:
                                                                a.mobileImage,
                                                              onChange: (t) => {
                                                                c((o) => ({
                                                                  ...o,
                                                                  catalog_secondary_banners:
                                                                    o.catalog_secondary_banners.map(
                                                                      (r) =>
                                                                        r.id ===
                                                                        a.id
                                                                          ? {
                                                                              ...r,
                                                                              mobileImage:
                                                                                t
                                                                                  .target
                                                                                  .value,
                                                                            }
                                                                          : r
                                                                    ),
                                                                }));
                                                              },
                                                              className:
                                                                "text-sm flex-1",
                                                            }),
                                                            e.jsxs(m, {
                                                              type: "button",
                                                              variant:
                                                                "outline",
                                                              size: "icon",
                                                              className:
                                                                "relative",
                                                              disabled:
                                                                S ===
                                                                `secondary-${a.id}-mobile`,
                                                              children: [
                                                                S ===
                                                                `secondary-${a.id}-mobile`
                                                                  ? e.jsx(z, {
                                                                      className:
                                                                        "w-4 h-4 animate-spin",
                                                                    })
                                                                  : e.jsx(M, {
                                                                      className:
                                                                        "w-4 h-4",
                                                                    }),
                                                                e.jsx("input", {
                                                                  type: "file",
                                                                  accept:
                                                                    "image/*",
                                                                  onChange:
                                                                    async (
                                                                      t
                                                                    ) => {
                                                                      const o =
                                                                        t.target
                                                                          .files?.[0];
                                                                      if (!o)
                                                                        return;
                                                                      const r =
                                                                        await ce(
                                                                          o,
                                                                          `secondary-${a.id}-mobile`
                                                                        );
                                                                      r &&
                                                                        c(
                                                                          (
                                                                            n
                                                                          ) => ({
                                                                            ...n,
                                                                            catalog_secondary_banners:
                                                                              n.catalog_secondary_banners.map(
                                                                                (
                                                                                  x
                                                                                ) =>
                                                                                  x.id ===
                                                                                  a.id
                                                                                    ? {
                                                                                        ...x,
                                                                                        mobileImage:
                                                                                          r,
                                                                                      }
                                                                                    : x
                                                                              ),
                                                                          })
                                                                        );
                                                                    },
                                                                  className:
                                                                    "absolute inset-0 opacity-0 cursor-pointer",
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                        a.mobileImage &&
                                                          e.jsx("img", {
                                                            src: a.mobileImage,
                                                            alt: "Preview",
                                                            className:
                                                              "w-full h-12 object-cover rounded border",
                                                          }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "space-y-1",
                                                  children: [
                                                    e.jsxs(i, {
                                                      className:
                                                        "text-xs flex items-center gap-1",
                                                      children: [
                                                        e.jsx(Le, {
                                                          className: "w-3 h-3",
                                                        }),
                                                        " Link (opcional)",
                                                      ],
                                                    }),
                                                    e.jsx(g, {
                                                      placeholder:
                                                        "https://exemplo.com/promocao",
                                                      value: a.link || "",
                                                      onChange: (t) => {
                                                        c((o) => ({
                                                          ...o,
                                                          catalog_secondary_banners:
                                                            o.catalog_secondary_banners.map(
                                                              (r) =>
                                                                r.id === a.id
                                                                  ? {
                                                                      ...r,
                                                                      link: t
                                                                        .target
                                                                        .value,
                                                                    }
                                                                  : r
                                                            ),
                                                        }));
                                                      },
                                                      className: "text-sm",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            a.id
                                          )
                                      ),
                                    }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "space-y-3 p-4 rounded-lg border border-border bg-muted/20",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    e.jsx(W, { className: "w-4 h-4" }),
                                    "Seções Fixas (Promoções, Lançamentos, Destaques, Black Friday)",
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "space-y-3",
                                  children: fs.map((a) => {
                                    const s = l.catalog_banners.find(
                                      (t) => t.type === a.id
                                    );
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "p-3 border rounded-lg space-y-2",
                                        style: { borderColor: `${a.color}40` },
                                        children: [
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  e.jsx("span", {
                                                    children: a.icon,
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "text-sm font-medium",
                                                    children: a.label,
                                                  }),
                                                ],
                                              }),
                                              e.jsx(B, {
                                                checked: s?.isActive || !1,
                                                onCheckedChange: (t) => {
                                                  c(
                                                    s
                                                      ? (o) => ({
                                                          ...o,
                                                          catalog_banners:
                                                            o.catalog_banners.map(
                                                              (r) =>
                                                                r.type === a.id
                                                                  ? {
                                                                      ...r,
                                                                      isActive:
                                                                        t,
                                                                    }
                                                                  : r
                                                            ),
                                                        })
                                                      : (o) => ({
                                                          ...o,
                                                          catalog_banners: [
                                                            ...o.catalog_banners,
                                                            {
                                                              id: crypto.randomUUID(),
                                                              type: a.id,
                                                              title: a.label,
                                                              desktopImage: "",
                                                              mobileImage: "",
                                                              isActive: t,
                                                            },
                                                          ],
                                                        })
                                                  );
                                                },
                                              }),
                                            ],
                                          }),
                                          s?.isActive &&
                                            e.jsxs("div", {
                                              className: "space-y-2",
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "grid grid-cols-1 md:grid-cols-2 gap-2",
                                                  children: [
                                                    e.jsxs("div", {
                                                      className: "flex gap-1",
                                                      children: [
                                                        e.jsx(g, {
                                                          placeholder:
                                                            "URL Desktop",
                                                          value:
                                                            s?.desktopImage ||
                                                            "",
                                                          onChange: (t) =>
                                                            c((o) => ({
                                                              ...o,
                                                              catalog_banners:
                                                                o.catalog_banners.map(
                                                                  (r) =>
                                                                    r.type ===
                                                                    a.id
                                                                      ? {
                                                                          ...r,
                                                                          desktopImage:
                                                                            t
                                                                              .target
                                                                              .value,
                                                                        }
                                                                      : r
                                                                ),
                                                            })),
                                                          className:
                                                            "text-xs flex-1",
                                                        }),
                                                        e.jsxs(m, {
                                                          type: "button",
                                                          variant: "outline",
                                                          size: "icon",
                                                          className:
                                                            "relative h-9 w-9",
                                                          disabled:
                                                            S ===
                                                            `${a.id}-desktopImage`,
                                                          children: [
                                                            S ===
                                                            `${a.id}-desktopImage`
                                                              ? e.jsx(z, {
                                                                  className:
                                                                    "w-3 h-3 animate-spin",
                                                                })
                                                              : e.jsx(M, {
                                                                  className:
                                                                    "w-3 h-3",
                                                                }),
                                                            e.jsx("input", {
                                                              type: "file",
                                                              accept: "image/*",
                                                              onChange: (t) =>
                                                                Je(
                                                                  t,
                                                                  a.id,
                                                                  "desktopImage"
                                                                ),
                                                              className:
                                                                "absolute inset-0 opacity-0 cursor-pointer",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsxs("div", {
                                                      className: "flex gap-1",
                                                      children: [
                                                        e.jsx(g, {
                                                          placeholder:
                                                            "URL Mobile",
                                                          value:
                                                            s?.mobileImage ||
                                                            "",
                                                          onChange: (t) =>
                                                            c((o) => ({
                                                              ...o,
                                                              catalog_banners:
                                                                o.catalog_banners.map(
                                                                  (r) =>
                                                                    r.type ===
                                                                    a.id
                                                                      ? {
                                                                          ...r,
                                                                          mobileImage:
                                                                            t
                                                                              .target
                                                                              .value,
                                                                        }
                                                                      : r
                                                                ),
                                                            })),
                                                          className:
                                                            "text-xs flex-1",
                                                        }),
                                                        e.jsxs(m, {
                                                          type: "button",
                                                          variant: "outline",
                                                          size: "icon",
                                                          className:
                                                            "relative h-9 w-9",
                                                          disabled:
                                                            S ===
                                                            `${a.id}-mobileImage`,
                                                          children: [
                                                            S ===
                                                            `${a.id}-mobileImage`
                                                              ? e.jsx(z, {
                                                                  className:
                                                                    "w-3 h-3 animate-spin",
                                                                })
                                                              : e.jsx(M, {
                                                                  className:
                                                                    "w-3 h-3",
                                                                }),
                                                            e.jsx("input", {
                                                              type: "file",
                                                              accept: "image/*",
                                                              onChange: (t) =>
                                                                Je(
                                                                  t,
                                                                  a.id,
                                                                  "mobileImage"
                                                                ),
                                                              className:
                                                                "absolute inset-0 opacity-0 cursor-pointer",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.jsx(g, {
                                                  placeholder:
                                                    "Link (opcional)",
                                                  value: s?.link || "",
                                                  onChange: (t) =>
                                                    c((o) => ({
                                                      ...o,
                                                      catalog_banners:
                                                        o.catalog_banners.map(
                                                          (r) =>
                                                            r.type === a.id
                                                              ? {
                                                                  ...r,
                                                                  link: t.target
                                                                    .value,
                                                                }
                                                              : r
                                                        ),
                                                    })),
                                                  className: "text-xs",
                                                }),
                                                (s?.desktopImage ||
                                                  s?.mobileImage) &&
                                                  e.jsxs("div", {
                                                    className:
                                                      "grid grid-cols-2 gap-2",
                                                    children: [
                                                      s?.desktopImage &&
                                                        e.jsx("img", {
                                                          src: s.desktopImage,
                                                          alt: "Desktop",
                                                          className:
                                                            "w-full h-10 object-cover rounded border",
                                                        }),
                                                      s?.mobileImage &&
                                                        e.jsx("img", {
                                                          src: s.mobileImage,
                                                          alt: "Mobile",
                                                          className:
                                                            "w-full h-10 object-cover rounded border",
                                                        }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                        ],
                                      },
                                      a.id
                                    );
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center justify-between p-4 rounded-lg border border-border bg-muted/20",
                              children: [
                                e.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    e.jsxs(i, {
                                      className:
                                        "flex items-center gap-2 text-sm font-medium",
                                      children: [
                                        e.jsx(z, { className: "w-4 h-4" }),
                                        "Animação de Carregamento",
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children:
                                        "Exibir skeleton loading estilo Mercado Livre ao carregar produtos",
                                    }),
                                  ],
                                }),
                                e.jsx(B, {
                                  checked: l.catalog_show_skeleton,
                                  onCheckedChange: (a) =>
                                    c((s) => ({
                                      ...s,
                                      catalog_show_skeleton: a,
                                    })),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    e.jsx(ta, { className: "w-4 h-4" }),
                                    "Paleta de Cores",
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "grid grid-cols-4 sm:grid-cols-8 gap-2",
                                  children: Ns.map((a) =>
                                    e.jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => Ia(a),
                                        className: `p-2 sm:p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                                          l.catalog_primary_color === a.primary
                                            ? "border-primary ring-2 ring-primary/30"
                                            : "border-border hover:border-primary/50"
                                        }`,
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-full h-6 rounded-md mb-1",
                                            style: {
                                              backgroundColor: a.primary,
                                            },
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[10px] sm:text-xs font-medium",
                                            children: a.name,
                                          }),
                                        ],
                                      },
                                      a.name
                                    )
                                  ),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "grid grid-cols-1 sm:grid-cols-2 gap-4",
                              children: [
                                e.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    e.jsx(i, {
                                      htmlFor: "primary-color",
                                      children: "Cor Primária",
                                    }),
                                    e.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        e.jsx(g, {
                                          id: "primary-color",
                                          type: "color",
                                          value: l.catalog_primary_color,
                                          onChange: (a) =>
                                            c((s) => ({
                                              ...s,
                                              catalog_primary_color:
                                                a.target.value,
                                            })),
                                          className:
                                            "w-14 h-10 p-1 cursor-pointer",
                                        }),
                                        e.jsx(g, {
                                          value: l.catalog_primary_color,
                                          onChange: (a) =>
                                            c((s) => ({
                                              ...s,
                                              catalog_primary_color:
                                                a.target.value,
                                            })),
                                          placeholder: "#10b981",
                                          className: "flex-1 font-mono",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    e.jsx(i, {
                                      htmlFor: "secondary-color",
                                      children: "Cor Secundária",
                                    }),
                                    e.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        e.jsx(g, {
                                          id: "secondary-color",
                                          type: "color",
                                          value: l.catalog_secondary_color,
                                          onChange: (a) =>
                                            c((s) => ({
                                              ...s,
                                              catalog_secondary_color:
                                                a.target.value,
                                            })),
                                          className:
                                            "w-14 h-10 p-1 cursor-pointer",
                                        }),
                                        e.jsx(g, {
                                          value: l.catalog_secondary_color,
                                          onChange: (a) =>
                                            c((s) => ({
                                              ...s,
                                              catalog_secondary_color:
                                                a.target.value,
                                            })),
                                          placeholder: "#1f2937",
                                          className: "flex-1 font-mono",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    e.jsx(J, { className: "w-4 h-4" }),
                                    "Cor dos Botões",
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "grid grid-cols-4 sm:grid-cols-8 gap-2",
                                  children: bs.map((a) =>
                                    e.jsxs(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () =>
                                          c((s) => ({
                                            ...s,
                                            catalog_button_color: a.color,
                                          })),
                                        className: `p-2 sm:p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                                          l.catalog_button_color === a.color
                                            ? "border-primary ring-2 ring-primary/30"
                                            : "border-border hover:border-primary/50"
                                        }`,
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "w-full h-6 rounded-md mb-1 border",
                                            style: { backgroundColor: a.color },
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "text-[10px] sm:text-xs font-medium",
                                            children: a.name,
                                          }),
                                        ],
                                      },
                                      a.name
                                    )
                                  ),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs(i, {
                                  className:
                                    "flex items-center gap-2 text-sm font-medium",
                                  children: [
                                    l.catalog_hide_brands
                                      ? e.jsx(de, { className: "w-4 h-4" })
                                      : e.jsx(se, { className: "w-4 h-4" }),
                                    "Banner de Marcas",
                                  ],
                                }),
                                e.jsx(m, {
                                  type: "button",
                                  variant: l.catalog_hide_brands
                                    ? "destructive"
                                    : "outline",
                                  onClick: () =>
                                    c((a) => ({
                                      ...a,
                                      catalog_hide_brands:
                                        !a.catalog_hide_brands,
                                    })),
                                  className: "w-full justify-start gap-2",
                                  children: l.catalog_hide_brands
                                    ? e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx(de, { className: "w-4 h-4" }),
                                          "Marcas Ocultas - Clique para Exibir",
                                        ],
                                      })
                                    : e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx(se, { className: "w-4 h-4" }),
                                          "Marcas Visíveis - Clique para Ocultar",
                                        ],
                                      }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs(C, {
                          value: "textos",
                          className: "space-y-6",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsxs(i, {
                                  htmlFor: "banner-text",
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(W, { className: "w-4 h-4" }),
                                    "Texto do Banner Principal",
                                  ],
                                }),
                                e.jsx(Ne, {
                                  id: "banner-text",
                                  value: l.catalog_banner_text,
                                  onChange: (a) =>
                                    c((s) => ({
                                      ...s,
                                      catalog_banner_text: a.target.value,
                                    })),
                                  placeholder: "Bem-vindo à nossa loja!",
                                  rows: 3,
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Este texto aparecerá no topo do seu catálogo.",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsxs(i, {
                                  htmlFor: "footer-text",
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(ma, { className: "w-4 h-4" }),
                                    "Texto do Rodapé",
                                  ],
                                }),
                                e.jsx(Ne, {
                                  id: "footer-text",
                                  value: l.catalog_footer_text,
                                  onChange: (a) =>
                                    c((s) => ({
                                      ...s,
                                      catalog_footer_text: a.target.value,
                                    })),
                                  placeholder: "Obrigado pela preferência!",
                                  rows: 3,
                                }),
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children:
                                    "Este texto aparecerá no final do seu catálogo.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(C, {
                          value: "ofertas",
                          className: "space-y-6",
                          children: e.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              e.jsxs(i, {
                                className:
                                  "flex items-center gap-2 text-sm font-medium",
                                children: [
                                  e.jsx(ze, { className: "w-4 h-4" }),
                                  "Produtos em Oferta da Semana",
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children:
                                  'Selecione os produtos que aparecerão com destaque de "🔥 OFERTA" no catálogo.',
                              }),
                              T.length === 0
                                ? e.jsxs("div", {
                                    className:
                                      "text-center py-12 text-muted-foreground",
                                    children: [
                                      e.jsx(V, {
                                        className:
                                          "w-12 h-12 mx-auto mb-3 opacity-50",
                                      }),
                                      e.jsx("p", {
                                        className: "font-medium",
                                        children: "Nenhum produto cadastrado",
                                      }),
                                      e.jsx("p", {
                                        className: "text-sm",
                                        children:
                                          "Cadastre produtos no módulo Financeiro para selecioná-los como ofertas.",
                                      }),
                                    ],
                                  })
                                : e.jsx(Q, {
                                    className:
                                      "h-[400px] border rounded-lg p-3",
                                    children: e.jsx("div", {
                                      className: "space-y-2",
                                      children: T.map((a) => {
                                        const s =
                                          l.catalog_weekly_offers.includes(
                                            a.id
                                          );
                                        return e.jsxs(
                                          "div",
                                          {
                                            onClick: () => Ea(a.id),
                                            className: `flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all hover:bg-muted/50 ${
                                              s
                                                ? "border-primary bg-primary/10"
                                                : "border-border"
                                            }`,
                                            children: [
                                              e.jsx(ra, { checked: s }),
                                              a.image_url
                                                ? e.jsx("img", {
                                                    src: a.image_url,
                                                    alt: a.name,
                                                    className:
                                                      "w-12 h-12 object-cover rounded-md",
                                                  })
                                                : e.jsx("div", {
                                                    className:
                                                      "w-12 h-12 bg-muted rounded-md flex items-center justify-center",
                                                    children: e.jsx(ie, {
                                                      className:
                                                        "w-5 h-5 text-muted-foreground",
                                                    }),
                                                  }),
                                              e.jsxs("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                  e.jsx("p", {
                                                    className:
                                                      "font-medium truncate",
                                                    children: a.name,
                                                  }),
                                                  e.jsxs("p", {
                                                    className:
                                                      "text-sm text-primary font-semibold",
                                                    children: [
                                                      "R$ ",
                                                      a.sale_price.toLocaleString(
                                                        "pt-BR",
                                                        {
                                                          minimumFractionDigits: 2,
                                                        }
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              s &&
                                                e.jsxs("span", {
                                                  className:
                                                    "text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full flex items-center gap-1",
                                                  children: [
                                                    e.jsx(me, {
                                                      className: "w-3 h-3",
                                                    }),
                                                    "Oferta",
                                                  ],
                                                }),
                                            ],
                                          },
                                          a.id
                                        );
                                      }),
                                    }),
                                  }),
                              l.catalog_weekly_offers.length > 0 &&
                                e.jsxs("p", {
                                  className: "text-sm text-primary font-medium",
                                  children: [
                                    l.catalog_weekly_offers.length,
                                    " produto(s) selecionado(s) como oferta",
                                  ],
                                }),
                            ],
                          }),
                        }),
                        e.jsx(C, {
                          value: "promocao",
                          className: "space-y-6",
                          children: e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between p-4 rounded-lg border border-border bg-muted/20",
                                children: [
                                  e.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      e.jsxs(i, {
                                        className:
                                          "flex items-center gap-2 text-sm font-medium",
                                        children: [
                                          e.jsx(De, { className: "w-4 h-4" }),
                                          "Contador de Promoção",
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children:
                                          "Exibir contador regressivo para produtos em oferta",
                                      }),
                                    ],
                                  }),
                                  e.jsx(B, {
                                    checked: l.catalog_promo_enabled,
                                    onCheckedChange: (a) =>
                                      c((s) => ({
                                        ...s,
                                        catalog_promo_enabled: a,
                                      })),
                                  }),
                                ],
                              }),
                              l.catalog_promo_enabled &&
                                e.jsxs("div", {
                                  className: "space-y-4 animate-fade-in",
                                  children: [
                                    e.jsxs("div", {
                                      className: "space-y-2",
                                      children: [
                                        e.jsxs(i, {
                                          htmlFor: "promo-end-date",
                                          className: "flex items-center gap-2",
                                          children: [
                                            e.jsx(Be, { className: "w-4 h-4" }),
                                            "Data/Hora de Término da Promoção",
                                          ],
                                        }),
                                        e.jsx(g, {
                                          id: "promo-end-date",
                                          type: "datetime-local",
                                          value: l.catalog_promo_end_date,
                                          onChange: (a) =>
                                            c((s) => ({
                                              ...s,
                                              catalog_promo_end_date:
                                                a.target.value,
                                            })),
                                          className: "max-w-xs",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children:
                                            "Define quando a promoção termina. O contador aparecerá nos produtos em oferta.",
                                        }),
                                      ],
                                    }),
                                    l.catalog_promo_end_date &&
                                      e.jsxs("div", {
                                        className:
                                          "p-4 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30",
                                        children: [
                                          e.jsxs("p", {
                                            className:
                                              "text-sm font-medium flex items-center gap-2",
                                            children: [
                                              e.jsx(De, {
                                                className:
                                                  "w-4 h-4 text-orange-500",
                                              }),
                                              "Prévia do Contador:",
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "mt-2 text-lg flex items-center gap-2",
                                            children: [
                                              "⏳ Promoção termina em: ",
                                              e.jsx(ua, {
                                                endDate:
                                                  l.catalog_promo_end_date,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        e.jsxs(C, {
                          value: "cupons",
                          className: "space-y-6",
                          children: [
                            e.jsxs("div", {
                              className: `p-4 rounded-lg border ${
                                l.catalog_pix_discount_enabled
                                  ? "border-emerald-500/30 bg-emerald-500/5"
                                  : "border-border bg-muted/20"
                              }`,
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        e.jsx("div", {
                                          className: `w-10 h-10 rounded-full flex items-center justify-center ${
                                            l.catalog_pix_discount_enabled
                                              ? "bg-emerald-500/20"
                                              : "bg-muted"
                                          }`,
                                          children: e.jsx(is, {
                                            className: `w-5 h-5 ${
                                              l.catalog_pix_discount_enabled
                                                ? "text-emerald-500"
                                                : "text-muted-foreground"
                                            }`,
                                          }),
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx(i, {
                                              className:
                                                "flex items-center gap-2 text-sm font-medium",
                                              children:
                                                "Desconto no PIX à Vista",
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-xs text-muted-foreground",
                                              children:
                                                "Ative para exibir desconto no catálogo",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx(B, {
                                      checked: l.catalog_pix_discount_enabled,
                                      onCheckedChange: (a) =>
                                        c((s) => ({
                                          ...s,
                                          catalog_pix_discount_enabled: a,
                                        })),
                                    }),
                                  ],
                                }),
                                l.catalog_pix_discount_enabled &&
                                  e.jsxs("div", {
                                    className:
                                      "mt-4 pt-4 border-t border-emerald-500/20",
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          e.jsx(i, {
                                            className: "text-sm",
                                            children:
                                              "Porcentagem de desconto:",
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              e.jsx(g, {
                                                type: "number",
                                                min: "1",
                                                max: "50",
                                                value: l.catalog_pix_discount,
                                                onChange: (a) =>
                                                  c((s) => ({
                                                    ...s,
                                                    catalog_pix_discount:
                                                      Number(a.target.value),
                                                  })),
                                                className:
                                                  "w-20 text-center font-bold",
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "text-sm font-medium",
                                                children: "% OFF",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsxs("p", {
                                        className:
                                          "text-xs text-emerald-600 mt-3 flex items-center gap-1",
                                        children: [
                                          e.jsx(me, { className: "w-3 h-3" }),
                                          "Desconto de ",
                                          l.catalog_pix_discount,
                                          "% será exibido nos produtos do catálogo",
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsxs(i, {
                                          className:
                                            "flex items-center gap-2 text-sm font-medium",
                                          children: [
                                            e.jsx(Ue, { className: "w-4 h-4" }),
                                            "Cupons de Desconto",
                                          ],
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground mt-1",
                                          children:
                                            "Crie cupons para seus clientes usarem no checkout",
                                        }),
                                      ],
                                    }),
                                    e.jsxs(m, {
                                      onClick: Ra,
                                      size: "sm",
                                      className: "gap-2",
                                      children: [
                                        e.jsx(te, { className: "w-4 h-4" }),
                                        "Novo Cupom",
                                      ],
                                    }),
                                  ],
                                }),
                                l.catalog_coupons.length === 0
                                  ? e.jsxs("div", {
                                      className:
                                        "text-center py-12 text-muted-foreground border rounded-lg border-dashed",
                                      children: [
                                        e.jsx(Ue, {
                                          className:
                                            "w-12 h-12 mx-auto mb-3 opacity-50",
                                        }),
                                        e.jsx("p", {
                                          className: "font-medium",
                                          children: "Nenhum cupom cadastrado",
                                        }),
                                        e.jsx("p", {
                                          className: "text-sm",
                                          children:
                                            'Clique em "Novo Cupom" para criar seu primeiro cupom de desconto.',
                                        }),
                                      ],
                                    })
                                  : e.jsx(Q, {
                                      className: "h-[400px]",
                                      children: e.jsx("div", {
                                        className: "space-y-4",
                                        children: l.catalog_coupons.map((a) =>
                                          e.jsxs(
                                            "div",
                                            {
                                              className: `p-4 rounded-lg border ${
                                                a.isActive
                                                  ? "border-primary/50 bg-primary/5"
                                                  : "border-border bg-muted/20"
                                              }`,
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-start justify-between gap-4 mb-4",
                                                  children: [
                                                    e.jsxs("div", {
                                                      className:
                                                        "flex-1 space-y-3",
                                                      children: [
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex items-center gap-3",
                                                          children: [
                                                            e.jsx(g, {
                                                              value: a.code,
                                                              onChange: (s) =>
                                                                ae(a.id, {
                                                                  code: s.target.value.toUpperCase(),
                                                                }),
                                                              placeholder:
                                                                "CÓDIGO",
                                                              className:
                                                                "font-mono uppercase w-40",
                                                            }),
                                                            e.jsx(B, {
                                                              checked:
                                                                a.isActive,
                                                              onCheckedChange: (
                                                                s
                                                              ) =>
                                                                ae(a.id, {
                                                                  isActive: s,
                                                                }),
                                                            }),
                                                            e.jsx("span", {
                                                              className: `text-xs ${
                                                                a.isActive
                                                                  ? "text-green-500"
                                                                  : "text-muted-foreground"
                                                              }`,
                                                              children:
                                                                a.isActive
                                                                  ? "Ativo"
                                                                  : "Inativo",
                                                            }),
                                                          ],
                                                        }),
                                                        e.jsxs("div", {
                                                          className:
                                                            "grid grid-cols-2 sm:grid-cols-4 gap-3",
                                                          children: [
                                                            e.jsxs("div", {
                                                              children: [
                                                                e.jsx(i, {
                                                                  className:
                                                                    "text-xs text-muted-foreground",
                                                                  children:
                                                                    "Tipo",
                                                                }),
                                                                e.jsxs(
                                                                  "select",
                                                                  {
                                                                    value:
                                                                      a.discountType,
                                                                    onChange: (
                                                                      s
                                                                    ) =>
                                                                      ae(a.id, {
                                                                        discountType:
                                                                          s
                                                                            .target
                                                                            .value,
                                                                      }),
                                                                    className:
                                                                      "w-full mt-1 h-9 px-2 rounded-md border border-input bg-background text-sm",
                                                                    children: [
                                                                      e.jsx(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "percentage",
                                                                          children:
                                                                            "% Desconto",
                                                                        }
                                                                      ),
                                                                      e.jsx(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "fixed",
                                                                          children:
                                                                            "R$ Fixo",
                                                                        }
                                                                      ),
                                                                      e.jsx(
                                                                        "option",
                                                                        {
                                                                          value:
                                                                            "freeShipping",
                                                                          children:
                                                                            "Frete Grátis",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            a.discountType !==
                                                              "freeShipping" &&
                                                              e.jsxs("div", {
                                                                children: [
                                                                  e.jsx(i, {
                                                                    className:
                                                                      "text-xs text-muted-foreground",
                                                                    children:
                                                                      a.discountType ===
                                                                      "percentage"
                                                                        ? "Desconto (%)"
                                                                        : "Desconto (R$)",
                                                                  }),
                                                                  e.jsx(g, {
                                                                    type: "number",
                                                                    value:
                                                                      a.discountValue,
                                                                    onChange: (
                                                                      s
                                                                    ) =>
                                                                      ae(a.id, {
                                                                        discountValue:
                                                                          parseFloat(
                                                                            s
                                                                              .target
                                                                              .value
                                                                          ) ||
                                                                          0,
                                                                      }),
                                                                    className:
                                                                      "mt-1",
                                                                  }),
                                                                ],
                                                              }),
                                                            e.jsxs("div", {
                                                              children: [
                                                                e.jsx(i, {
                                                                  className:
                                                                    "text-xs text-muted-foreground",
                                                                  children:
                                                                    "Valor Mín. (R$)",
                                                                }),
                                                                e.jsx(g, {
                                                                  type: "number",
                                                                  value:
                                                                    a.minValue,
                                                                  onChange: (
                                                                    s
                                                                  ) =>
                                                                    ae(a.id, {
                                                                      minValue:
                                                                        parseFloat(
                                                                          s
                                                                            .target
                                                                            .value
                                                                        ) || 0,
                                                                    }),
                                                                  className:
                                                                    "mt-1",
                                                                  placeholder:
                                                                    "0 = sem mínimo",
                                                                }),
                                                              ],
                                                            }),
                                                            e.jsxs("div", {
                                                              children: [
                                                                e.jsx(i, {
                                                                  className:
                                                                    "text-xs text-muted-foreground",
                                                                  children:
                                                                    "Máx. Usos",
                                                                }),
                                                                e.jsx(g, {
                                                                  type: "number",
                                                                  value:
                                                                    a.maxUses,
                                                                  onChange: (
                                                                    s
                                                                  ) =>
                                                                    ae(a.id, {
                                                                      maxUses:
                                                                        parseInt(
                                                                          s
                                                                            .target
                                                                            .value
                                                                        ) || 0,
                                                                    }),
                                                                  className:
                                                                    "mt-1",
                                                                  placeholder:
                                                                    "0 = ilimitado",
                                                                }),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsx(m, {
                                                      variant: "ghost",
                                                      size: "icon",
                                                      onClick: () => Ta(a.id),
                                                      className:
                                                        "text-destructive hover:text-destructive",
                                                      children: e.jsx(I, {
                                                        className: "w-4 h-4",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                a.usedCount > 0 &&
                                                  e.jsxs("p", {
                                                    className:
                                                      "text-xs text-muted-foreground",
                                                    children: [
                                                      "Usado ",
                                                      a.usedCount,
                                                      "x ",
                                                      a.maxUses > 0
                                                        ? `de ${a.maxUses}`
                                                        : "",
                                                    ],
                                                  }),
                                              ],
                                            },
                                            a.id
                                          )
                                        ),
                                      }),
                                    }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx(C, {
                          value: "frete",
                          className: "space-y-6",
                          children: e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between p-4 rounded-lg border border-border bg-muted/20",
                                children: [
                                  e.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      e.jsxs(i, {
                                        className:
                                          "flex items-center gap-2 text-sm font-medium",
                                        children: [
                                          e.jsx(K, { className: "w-4 h-4" }),
                                          "Habilitar Entregas",
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children:
                                          "Permitir que clientes escolham entrega no checkout",
                                      }),
                                    ],
                                  }),
                                  e.jsx(B, {
                                    checked: l.catalog_delivery_enabled,
                                    onCheckedChange: (a) =>
                                      c((s) => ({
                                        ...s,
                                        catalog_delivery_enabled: a,
                                      })),
                                  }),
                                ],
                              }),
                              l.catalog_delivery_enabled &&
                                e.jsxs("div", {
                                  className: "space-y-4 animate-fade-in",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        e.jsxs("div", {
                                          children: [
                                            e.jsxs(i, {
                                              className:
                                                "flex items-center gap-2 text-sm font-medium",
                                              children: [
                                                e.jsx(qe, {
                                                  className: "w-4 h-4",
                                                }),
                                                "Entregadores / Bairros",
                                              ],
                                            }),
                                            e.jsx("p", {
                                              className:
                                                "text-xs text-muted-foreground mt-1",
                                              children:
                                                "Configure os entregadores disponíveis e valores de frete",
                                            }),
                                          ],
                                        }),
                                        e.jsxs(m, {
                                          onClick: za,
                                          size: "sm",
                                          className: "gap-2",
                                          children: [
                                            e.jsx(te, { className: "w-4 h-4" }),
                                            "Adicionar",
                                          ],
                                        }),
                                      ],
                                    }),
                                    l.catalog_delivery_persons.length === 0
                                      ? e.jsxs("div", {
                                          className:
                                            "text-center py-12 text-muted-foreground border rounded-lg border-dashed",
                                          children: [
                                            e.jsx(K, {
                                              className:
                                                "w-12 h-12 mx-auto mb-3 opacity-50",
                                            }),
                                            e.jsx("p", {
                                              className: "font-medium",
                                              children:
                                                "Nenhum entregador cadastrado",
                                            }),
                                            e.jsx("p", {
                                              className: "text-sm",
                                              children:
                                                "Adicione entregadores para oferecer entregas aos seus clientes.",
                                            }),
                                          ],
                                        })
                                      : e.jsx(Q, {
                                          className: "h-[350px]",
                                          children: e.jsx("div", {
                                            className: "space-y-4",
                                            children:
                                              l.catalog_delivery_persons.map(
                                                (a) =>
                                                  e.jsx(
                                                    "div",
                                                    {
                                                      className:
                                                        "p-4 rounded-lg border border-border bg-card",
                                                      children: e.jsxs("div", {
                                                        className:
                                                          "flex items-start justify-between gap-4",
                                                        children: [
                                                          e.jsxs("div", {
                                                            className:
                                                              "flex-1 space-y-3",
                                                            children: [
                                                              e.jsxs("div", {
                                                                children: [
                                                                  e.jsx(i, {
                                                                    className:
                                                                      "text-xs text-muted-foreground",
                                                                    children:
                                                                      "Nome do Entregador / Bairro",
                                                                  }),
                                                                  e.jsx(g, {
                                                                    value:
                                                                      a.name,
                                                                    onChange: (
                                                                      s
                                                                    ) =>
                                                                      ue(a.id, {
                                                                        name: s
                                                                          .target
                                                                          .value,
                                                                      }),
                                                                    placeholder:
                                                                      "Ex: Centro, Jardim América, João Motoboy...",
                                                                    className:
                                                                      "mt-1",
                                                                  }),
                                                                ],
                                                              }),
                                                              e.jsxs("div", {
                                                                className:
                                                                  "grid grid-cols-3 gap-3",
                                                                children: [
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            i,
                                                                            {
                                                                              className:
                                                                                "text-xs text-muted-foreground",
                                                                              children:
                                                                                "Preço Base (R$)",
                                                                            }
                                                                          ),
                                                                          e.jsx(
                                                                            g,
                                                                            {
                                                                              type: "number",
                                                                              step: "0.01",
                                                                              value:
                                                                                a.basePrice,
                                                                              onChange:
                                                                                (
                                                                                  s
                                                                                ) =>
                                                                                  ue(
                                                                                    a.id,
                                                                                    {
                                                                                      basePrice:
                                                                                        parseFloat(
                                                                                          s
                                                                                            .target
                                                                                            .value
                                                                                        ) ||
                                                                                        0,
                                                                                    }
                                                                                  ),
                                                                              className:
                                                                                "mt-1",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            i,
                                                                            {
                                                                              className:
                                                                                "text-xs text-muted-foreground",
                                                                              children:
                                                                                "Raio Base (km)",
                                                                            }
                                                                          ),
                                                                          e.jsx(
                                                                            g,
                                                                            {
                                                                              type: "number",
                                                                              step: "0.1",
                                                                              value:
                                                                                a.baseRadiusKm,
                                                                              onChange:
                                                                                (
                                                                                  s
                                                                                ) =>
                                                                                  ue(
                                                                                    a.id,
                                                                                    {
                                                                                      baseRadiusKm:
                                                                                        parseFloat(
                                                                                          s
                                                                                            .target
                                                                                            .value
                                                                                        ) ||
                                                                                        0,
                                                                                    }
                                                                                  ),
                                                                              className:
                                                                                "mt-1",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      children:
                                                                        [
                                                                          e.jsx(
                                                                            i,
                                                                            {
                                                                              className:
                                                                                "text-xs text-muted-foreground",
                                                                              children:
                                                                                "Extra/km (R$)",
                                                                            }
                                                                          ),
                                                                          e.jsx(
                                                                            g,
                                                                            {
                                                                              type: "number",
                                                                              step: "0.01",
                                                                              value:
                                                                                a.extraPricePerKm,
                                                                              onChange:
                                                                                (
                                                                                  s
                                                                                ) =>
                                                                                  ue(
                                                                                    a.id,
                                                                                    {
                                                                                      extraPricePerKm:
                                                                                        parseFloat(
                                                                                          s
                                                                                            .target
                                                                                            .value
                                                                                        ) ||
                                                                                        0,
                                                                                    }
                                                                                  ),
                                                                              className:
                                                                                "mt-1",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                              e.jsxs("p", {
                                                                className:
                                                                  "text-xs text-muted-foreground",
                                                                children: [
                                                                  "Até ",
                                                                  a.baseRadiusKm,
                                                                  "km: R$ ",
                                                                  a.basePrice.toFixed(
                                                                    2
                                                                  ),
                                                                  " | Acima: +R$ ",
                                                                  a.extraPricePerKm.toFixed(
                                                                    2
                                                                  ),
                                                                  "/km adicional",
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                          e.jsx(m, {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            onClick: () =>
                                                              Da(a.id),
                                                            className:
                                                              "text-destructive hover:text-destructive",
                                                            children: e.jsx(I, {
                                                              className:
                                                                "w-4 h-4",
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    },
                                                    a.id
                                                  )
                                              ),
                                          }),
                                        }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        e.jsx(C, {
                          value: "contato",
                          className: "space-y-6",
                          children: e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs(i, {
                                htmlFor: "whatsapp",
                                className: "flex items-center gap-2",
                                children: [
                                  e.jsx(la, { className: "w-4 h-4" }),
                                  "WhatsApp do Catálogo",
                                ],
                              }),
                              e.jsx(g, {
                                id: "whatsapp",
                                value: l.catalog_whatsapp,
                                onChange: (a) =>
                                  c((s) => ({
                                    ...s,
                                    catalog_whatsapp: a.target.value,
                                  })),
                                placeholder: "5511999999999",
                                className: "font-mono",
                              }),
                              e.jsx("p", {
                                className: "text-xs text-muted-foreground",
                                children:
                                  "Número com código do país (ex: 5511999999999). Se vazio, usará o WhatsApp das configurações da empresa.",
                              }),
                            ],
                          }),
                        }),
                        e.jsxs(C, {
                          value: "carrinhos",
                          className: "space-y-4",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-2",
                              children: [
                                e.jsx(J, { className: "w-5 h-5 text-primary" }),
                                e.jsx("h3", {
                                  className: "text-lg font-semibold",
                                  children: "Carrinhos Abandonados",
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-sm text-muted-foreground mb-4",
                              children:
                                "Veja os carrinhos que seus clientes abandonaram no catálogo digital.",
                            }),
                            e.jsx(_s, {
                              formatPrice: (a) =>
                                `${X("BRL")} ${a.toFixed(2).replace(".", ",")}`,
                            }),
                          ],
                        }),
                        e.jsxs(C, {
                          value: "pedidos",
                          className: "space-y-4",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsxs("h3", {
                                      className:
                                        "text-lg font-bold flex items-center gap-2",
                                      children: [
                                        e.jsx(oa, {
                                          className: "w-5 h-5 text-primary",
                                        }),
                                        "Central de Pedidos",
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-xs text-muted-foreground mt-0.5",
                                      children:
                                        "Gerencie todos os pedidos do catálogo digital",
                                    }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  variant: "outline",
                                  size: "sm",
                                  onClick: Oe,
                                  className: "gap-1.5",
                                  children: [
                                    e.jsx(z, { className: "w-3.5 h-3.5" }),
                                    "Atualizar",
                                  ],
                                }),
                              ],
                            }),
                            y.length > 0 &&
                              e.jsx("div", {
                                className:
                                  "grid grid-cols-2 sm:grid-cols-4 gap-3",
                                children: [
                                  {
                                    label: "Pendentes",
                                    count: y.filter(
                                      (a) => a.status === "pending"
                                    ).length,
                                    color: "text-yellow-600",
                                    bg: "bg-yellow-500/10 border-yellow-500/20",
                                    icon: ga,
                                  },
                                  {
                                    label: "Aprovados",
                                    count: y.filter(
                                      (a) => a.status === "approved"
                                    ).length,
                                    color: "text-green-600",
                                    bg: "bg-green-500/10 border-green-500/20",
                                    icon: be,
                                  },
                                  {
                                    label: "Entregues",
                                    count: y.filter(
                                      (a) => a.status === "delivered"
                                    ).length,
                                    color: "text-blue-600",
                                    bg: "bg-blue-500/10 border-blue-500/20",
                                    icon: K,
                                  },
                                  {
                                    label: "Faturamento",
                                    count: -1,
                                    value: y
                                      .filter(
                                        (a) =>
                                          a.status === "approved" ||
                                          a.status === "delivered"
                                      )
                                      .reduce((a, s) => a + Number(s.total), 0),
                                    color: "text-primary",
                                    bg: "bg-primary/10 border-primary/20",
                                    icon: _a,
                                  },
                                ].map((a, s) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: `${a.bg} border rounded-xl p-3 space-y-1`,
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            e.jsx(a.icon, {
                                              className: `w-4 h-4 ${a.color}`,
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-[10px] sm:text-xs font-medium text-muted-foreground",
                                              children: a.label,
                                            }),
                                          ],
                                        }),
                                        e.jsx("p", {
                                          className: `text-lg sm:text-xl font-bold ${a.color}`,
                                          children:
                                            a.count >= 0
                                              ? a.count
                                              : `${X(l.catalog_currency)} ${(
                                                  a.value || 0
                                                )
                                                  .toFixed(2)
                                                  .replace(".", ",")}`,
                                        }),
                                      ],
                                    },
                                    s
                                  )
                                ),
                              }),
                            y.length > 0 &&
                              e.jsx("div", {
                                className: "flex gap-1.5 flex-wrap",
                                children: [
                                  {
                                    key: "all",
                                    label: "Todos",
                                    count: y.length,
                                  },
                                  {
                                    key: "pending",
                                    label: "⏳ Pendentes",
                                    count: y.filter(
                                      (a) => a.status === "pending"
                                    ).length,
                                  },
                                  {
                                    key: "approved",
                                    label: "✅ Aprovados",
                                    count: y.filter(
                                      (a) => a.status === "approved"
                                    ).length,
                                  },
                                  {
                                    key: "delivered",
                                    label: "📦 Entregues",
                                    count: y.filter(
                                      (a) => a.status === "delivered"
                                    ).length,
                                  },
                                  {
                                    key: "rejected",
                                    label: "❌ Rejeitados",
                                    count: y.filter(
                                      (a) => a.status === "rejected"
                                    ).length,
                                  },
                                ].map((a) =>
                                  e.jsxs(
                                    m,
                                    {
                                      size: "sm",
                                      variant:
                                        Ae === a.key ? "default" : "outline",
                                      className:
                                        "text-xs gap-1 h-8 rounded-full",
                                      onClick: () => Ca(a.key),
                                      children: [
                                        a.label,
                                        " ",
                                        e.jsx(ve, {
                                          variant: "secondary",
                                          className:
                                            "text-[10px] px-1.5 py-0 h-4 ml-0.5",
                                          children: a.count,
                                        }),
                                      ],
                                    },
                                    a.key
                                  )
                                ),
                              }),
                            y.length === 0
                              ? e.jsxs("div", {
                                  className:
                                    "text-center py-16 text-muted-foreground",
                                  children: [
                                    e.jsx(J, {
                                      className:
                                        "w-16 h-16 mx-auto mb-4 opacity-20",
                                    }),
                                    e.jsx("p", {
                                      className: "font-semibold text-lg",
                                      children: "Nenhum pedido ainda",
                                    }),
                                    e.jsx("p", {
                                      className: "text-sm mt-1",
                                      children:
                                        "Os pedidos do catálogo aparecerão aqui automaticamente.",
                                    }),
                                  ],
                                })
                              : e.jsx("div", {
                                  className: "space-y-3",
                                  children: y
                                    .filter(
                                      (a) => Ae === "all" || a.status === Ae
                                    )
                                    .map((a) => {
                                      const s = Array.isArray(a.items)
                                          ? a.items
                                          : [],
                                        t = {
                                          pending: {
                                            bg: "border-l-yellow-500",
                                            text: "text-yellow-600",
                                            icon: ga,
                                            label: "Pendente",
                                          },
                                          approved: {
                                            bg: "border-l-green-500",
                                            text: "text-green-600",
                                            icon: be,
                                            label: "Aprovado",
                                          },
                                          rejected: {
                                            bg: "border-l-red-500",
                                            text: "text-red-600",
                                            icon: Fe,
                                            label: "Rejeitado",
                                          },
                                          delivered: {
                                            bg: "border-l-blue-500",
                                            text: "text-blue-600",
                                            icon: K,
                                            label: "Entregue",
                                          },
                                        },
                                        o = t[a.status] || t.pending,
                                        r = o.icon;
                                      return e.jsx(
                                        k,
                                        {
                                          className: `border-l-4 ${o.bg} overflow-hidden hover:shadow-md transition-shadow`,
                                          children: e.jsxs("div", {
                                            className: "p-4 space-y-3",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-start justify-between gap-3",
                                                children: [
                                                  e.jsx("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: e.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-2 flex-wrap",
                                                      children: [
                                                        e.jsx("div", {
                                                          className:
                                                            "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                                                          children: e.jsx(ca, {
                                                            className:
                                                              "w-4 h-4 text-primary",
                                                          }),
                                                        }),
                                                        e.jsxs("div", {
                                                          children: [
                                                            e.jsx("h4", {
                                                              className:
                                                                "font-bold text-sm",
                                                              children:
                                                                a.customer_name,
                                                            }),
                                                            e.jsx("p", {
                                                              className:
                                                                "text-[10px] text-muted-foreground",
                                                              children: ye(
                                                                new Date(
                                                                  a.created_at
                                                                ),
                                                                "dd/MM/yyyy 'às' HH:mm",
                                                                { locale: ke }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "text-right flex-shrink-0",
                                                    children: [
                                                      e.jsxs("div", {
                                                        className: `inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${o.text} bg-current/10`,
                                                        style: {
                                                          backgroundColor:
                                                            "color-mix(in srgb, currentColor 10%, transparent)",
                                                        },
                                                        children: [
                                                          e.jsx(r, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                          o.label,
                                                        ],
                                                      }),
                                                      e.jsxs("p", {
                                                        className:
                                                          "text-lg font-bold text-primary mt-1",
                                                        children: [
                                                          X(l.catalog_currency),
                                                          " ",
                                                          Number(a.total)
                                                            .toFixed(2)
                                                            .replace(".", ","),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex flex-wrap gap-3 text-xs text-muted-foreground",
                                                children: [
                                                  e.jsxs("span", {
                                                    className:
                                                      "flex items-center gap-1",
                                                    children: [
                                                      e.jsx(fa, {
                                                        className: "w-3 h-3",
                                                      }),
                                                      " ",
                                                      a.customer_phone,
                                                    ],
                                                  }),
                                                  a.customer_address &&
                                                    e.jsxs("span", {
                                                      className:
                                                        "flex items-center gap-1",
                                                      children: [
                                                        e.jsx(qe, {
                                                          className: "w-3 h-3",
                                                        }),
                                                        " ",
                                                        a.customer_address,
                                                      ],
                                                    }),
                                                  a.delivery_method &&
                                                    e.jsxs("span", {
                                                      className:
                                                        "flex items-center gap-1",
                                                      children: [
                                                        e.jsx(K, {
                                                          className: "w-3 h-3",
                                                        }),
                                                        " ",
                                                        a.delivery_person ||
                                                          a.delivery_method,
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "border rounded-lg overflow-hidden",
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "bg-muted/40 px-3 py-1.5",
                                                    children: e.jsx("p", {
                                                      className:
                                                        "text-[10px] font-bold text-muted-foreground uppercase tracking-wider",
                                                      children:
                                                        "Itens do Pedido",
                                                    }),
                                                  }),
                                                  e.jsxs("div", {
                                                    className: "p-2 space-y-1",
                                                    children: [
                                                      s.map((n, x) =>
                                                        e.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex justify-between text-xs py-0.5",
                                                            children: [
                                                              e.jsxs("span", {
                                                                className:
                                                                  "truncate flex-1",
                                                                children: [
                                                                  n.quantity,
                                                                  "x ",
                                                                  n.name,
                                                                ],
                                                              }),
                                                              e.jsxs("span", {
                                                                className:
                                                                  "font-semibold ml-2",
                                                                children: [
                                                                  X(
                                                                    l.catalog_currency
                                                                  ),
                                                                  " ",
                                                                  (
                                                                    n.price *
                                                                    n.quantity
                                                                  )
                                                                    .toFixed(2)
                                                                    .replace(
                                                                      ".",
                                                                      ","
                                                                    ),
                                                                ],
                                                              }),
                                                            ],
                                                          },
                                                          x
                                                        )
                                                      ),
                                                      a.delivery_fee > 0 &&
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex justify-between text-xs text-muted-foreground border-t pt-1",
                                                          children: [
                                                            e.jsx("span", {
                                                              children: "Frete",
                                                            }),
                                                            e.jsxs("span", {
                                                              children: [
                                                                X(
                                                                  l.catalog_currency
                                                                ),
                                                                " ",
                                                                Number(
                                                                  a.delivery_fee
                                                                )
                                                                  .toFixed(2)
                                                                  .replace(
                                                                    ".",
                                                                    ","
                                                                  ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      a.coupon_code &&
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex justify-between text-xs text-green-600 border-t pt-1",
                                                          children: [
                                                            e.jsxs("span", {
                                                              children: [
                                                                "Cupom: ",
                                                                a.coupon_code,
                                                              ],
                                                            }),
                                                            e.jsxs("span", {
                                                              children: [
                                                                "-",
                                                                X(
                                                                  l.catalog_currency
                                                                ),
                                                                " ",
                                                                Number(
                                                                  a.coupon_discount
                                                                )
                                                                  .toFixed(2)
                                                                  .replace(
                                                                    ".",
                                                                    ","
                                                                  ),
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              a.notes &&
                                                e.jsxs("p", {
                                                  className:
                                                    "text-xs bg-muted/50 rounded-lg p-2.5 italic border",
                                                  children: ["📝 ", a.notes],
                                                }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex gap-2 flex-wrap pt-1 border-t",
                                                children: [
                                                  a.status === "pending" &&
                                                    e.jsxs(e.Fragment, {
                                                      children: [
                                                        e.jsxs(m, {
                                                          size: "sm",
                                                          className:
                                                            "gap-1.5 text-xs rounded-full",
                                                          onClick: () =>
                                                            ka(a.id),
                                                          children: [
                                                            e.jsx(be, {
                                                              className:
                                                                "w-3.5 h-3.5",
                                                            }),
                                                            " Aprovar Pedido",
                                                          ],
                                                        }),
                                                        e.jsxs(m, {
                                                          size: "sm",
                                                          variant: "outline",
                                                          className:
                                                            "gap-1.5 text-xs text-destructive rounded-full",
                                                          onClick: async () => {
                                                            await u
                                                              .from(
                                                                "catalog_orders"
                                                              )
                                                              .update({
                                                                status:
                                                                  "rejected",
                                                              })
                                                              .eq("id", a.id),
                                                              H((n) =>
                                                                n.map((x) =>
                                                                  x.id === a.id
                                                                    ? {
                                                                        ...x,
                                                                        status:
                                                                          "rejected",
                                                                      }
                                                                    : x
                                                                )
                                                              ),
                                                              N.success(
                                                                "Pedido rejeitado."
                                                              );
                                                          },
                                                          children: [
                                                            e.jsx(Fe, {
                                                              className:
                                                                "w-3.5 h-3.5",
                                                            }),
                                                            " Rejeitar",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  a.status === "approved" &&
                                                    e.jsxs(m, {
                                                      size: "sm",
                                                      variant: "outline",
                                                      className:
                                                        "gap-1.5 text-xs rounded-full",
                                                      onClick: async () => {
                                                        await u
                                                          .from(
                                                            "catalog_orders"
                                                          )
                                                          .update({
                                                            status: "delivered",
                                                          })
                                                          .eq("id", a.id),
                                                          j &&
                                                            (await u
                                                              .from(
                                                                "catalog_order_tracking"
                                                              )
                                                              .insert({
                                                                order_id: a.id,
                                                                user_id: v,
                                                                status:
                                                                  "Pedido Entregue",
                                                                description:
                                                                  "Seu pedido foi entregue com sucesso! Obrigado pela compra.",
                                                              })),
                                                          H((n) =>
                                                            n.map((x) =>
                                                              x.id === a.id
                                                                ? {
                                                                    ...x,
                                                                    status:
                                                                      "delivered",
                                                                  }
                                                                : x
                                                            )
                                                          ),
                                                          N.success(
                                                            "Pedido marcado como entregue!"
                                                          );
                                                      },
                                                      children: [
                                                        e.jsx(K, {
                                                          className:
                                                            "w-3.5 h-3.5",
                                                        }),
                                                        " Marcar Entregue",
                                                      ],
                                                    }),
                                                  e.jsx(m, {
                                                    size: "sm",
                                                    variant: "ghost",
                                                    className:
                                                      "gap-1 text-xs text-destructive ml-auto",
                                                    onClick: () => Pa(a.id),
                                                    children: e.jsx(I, {
                                                      className: "w-3.5 h-3.5",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              a.status !== "rejected" &&
                                                e.jsxs("div", {
                                                  className:
                                                    "border-t pt-3 mt-2 space-y-2",
                                                  children: [
                                                    e.jsxs("div", {
                                                      className:
                                                        "flex items-center justify-between",
                                                      children: [
                                                        e.jsxs("p", {
                                                          className:
                                                            "text-xs font-bold flex items-center gap-1.5",
                                                          children: [
                                                            e.jsx(qe, {
                                                              className:
                                                                "w-3.5 h-3.5 text-primary",
                                                            }),
                                                            "Rastreio ",
                                                            a.tracking_code &&
                                                              e.jsx(ve, {
                                                                variant:
                                                                  "outline",
                                                                className:
                                                                  "text-[9px] ml-1 font-mono",
                                                                children:
                                                                  a.tracking_code,
                                                              }),
                                                          ],
                                                        }),
                                                        e.jsx(m, {
                                                          size: "sm",
                                                          variant: "ghost",
                                                          className:
                                                            "text-[10px] h-6 px-2",
                                                          onClick: () => {
                                                            Pe === a.id
                                                              ? He(null)
                                                              : (He(a.id),
                                                                Qe(a.id));
                                                          },
                                                          children:
                                                            Pe === a.id
                                                              ? "Fechar"
                                                              : "Gerenciar Rastreio",
                                                        }),
                                                      ],
                                                    }),
                                                    Pe === a.id &&
                                                      e.jsxs("div", {
                                                        className:
                                                          "space-y-3 bg-muted/30 rounded-lg p-3",
                                                        children: [
                                                          e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-[10px] font-semibold text-muted-foreground mb-1.5",
                                                                children:
                                                                  "Status rápidos:",
                                                              }),
                                                              e.jsx("div", {
                                                                className:
                                                                  "flex gap-1 flex-wrap",
                                                                children: [
                                                                  "📦 Preparando encomenda",
                                                                  "✅ Embalado e pronto",
                                                                  "🚚 Saiu para entrega",
                                                                  "📍 A caminho do destino",
                                                                  "🏠 Próximo à sua casa",
                                                                  "🔔 Tentativa de entrega",
                                                                  "📬 Disponível para retirada",
                                                                  "✨ Pedido Entregue",
                                                                ].map((n) =>
                                                                  e.jsx(
                                                                    m,
                                                                    {
                                                                      size: "sm",
                                                                      variant:
                                                                        re === n
                                                                          ? "default"
                                                                          : "outline",
                                                                      className:
                                                                        "text-[9px] h-6 px-2 rounded-full",
                                                                      onClick:
                                                                        () =>
                                                                          $e(n),
                                                                      children:
                                                                        n,
                                                                    },
                                                                    n
                                                                  )
                                                                ),
                                                              }),
                                                            ],
                                                          }),
                                                          e.jsxs("div", {
                                                            className:
                                                              "flex gap-2",
                                                            children: [
                                                              e.jsx(g, {
                                                                placeholder:
                                                                  "Status personalizado...",
                                                                value: re,
                                                                onChange: (n) =>
                                                                  $e(
                                                                    n.target
                                                                      .value
                                                                  ),
                                                                className:
                                                                  "text-xs h-8",
                                                              }),
                                                              e.jsx(g, {
                                                                placeholder:
                                                                  "Local (opcional)",
                                                                value: We,
                                                                onChange: (n) =>
                                                                  Ke(
                                                                    n.target
                                                                      .value
                                                                  ),
                                                                className:
                                                                  "text-xs h-8 w-32",
                                                              }),
                                                              e.jsxs(m, {
                                                                size: "sm",
                                                                className:
                                                                  "h-8 text-xs gap-1",
                                                                onClick: () =>
                                                                  wa(a.id),
                                                                children: [
                                                                  e.jsx(na, {
                                                                    className:
                                                                      "w-3 h-3",
                                                                  }),
                                                                  " Enviar",
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                          Se.length > 0 &&
                                                            e.jsx("div", {
                                                              className:
                                                                "space-y-1.5 mt-2 max-h-48 overflow-y-auto",
                                                              children: Se.map(
                                                                (n, x) =>
                                                                  e.jsxs(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex gap-2 text-[10px]",
                                                                      children:
                                                                        [
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "flex flex-col items-center",
                                                                              children:
                                                                                [
                                                                                  e.jsx(
                                                                                    "div",
                                                                                    {
                                                                                      className: `w-2.5 h-2.5 rounded-full ${
                                                                                        x ===
                                                                                        0
                                                                                          ? "bg-primary ring-2 ring-primary/30"
                                                                                          : "bg-muted-foreground/30"
                                                                                      }`,
                                                                                    }
                                                                                  ),
                                                                                  x <
                                                                                    Se.length -
                                                                                      1 &&
                                                                                    e.jsx(
                                                                                      "div",
                                                                                      {
                                                                                        className:
                                                                                          "w-0.5 flex-1 bg-muted-foreground/20",
                                                                                      }
                                                                                    ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          e.jsxs(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "flex-1 pb-2",
                                                                              children:
                                                                                [
                                                                                  e.jsx(
                                                                                    "p",
                                                                                    {
                                                                                      className: `font-semibold ${
                                                                                        x ===
                                                                                        0
                                                                                          ? "text-primary"
                                                                                          : ""
                                                                                      }`,
                                                                                      children:
                                                                                        n.status,
                                                                                    }
                                                                                  ),
                                                                                  n.location &&
                                                                                    e.jsxs(
                                                                                      "p",
                                                                                      {
                                                                                        className:
                                                                                          "text-muted-foreground",
                                                                                        children:
                                                                                          [
                                                                                            "📍 ",
                                                                                            n.location,
                                                                                          ],
                                                                                      }
                                                                                    ),
                                                                                  e.jsx(
                                                                                    "p",
                                                                                    {
                                                                                      className:
                                                                                        "text-muted-foreground",
                                                                                      children:
                                                                                        ye(
                                                                                          new Date(
                                                                                            n.created_at
                                                                                          ),
                                                                                          "dd/MM/yyyy 'às' HH:mm"
                                                                                        ),
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    },
                                                                    n.id
                                                                  )
                                                              ),
                                                            }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        },
                                        a.id
                                      );
                                    }),
                                }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx("div", {
                  className: "hidden lg:block w-[320px] flex-shrink-0",
                  children: e.jsxs(k, {
                    className: "p-4 sm:p-6 sticky top-4",
                    children: [
                      e.jsxs("h3", {
                        className: "font-semibold mb-4 flex items-center gap-2",
                        children: [
                          e.jsx(se, { className: "w-4 h-4" }),
                          "Prévia do Catálogo",
                        ],
                      }),
                      e.jsxs("div", {
                        className: "rounded-lg p-4 space-y-3",
                        style: {
                          backgroundColor:
                            l.catalog_theme === "dark" ? "#18181b" : "#ffffff",
                          border: "1px solid",
                          borderColor:
                            l.catalog_theme === "dark" ? "#27272a" : "#e4e4e7",
                        },
                        children: [
                          e.jsx("div", {
                            className: "rounded-lg p-3 text-center",
                            style: {
                              backgroundColor: l.catalog_secondary_color,
                            },
                            children: e.jsx("p", {
                              className: "text-sm font-semibold",
                              style: { color: l.catalog_primary_color },
                              children:
                                l.catalog_banner_text || "Banner da Loja",
                            }),
                          }),
                          l.catalog_show_skeleton &&
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsx("p", {
                                  className: "text-xs text-muted-foreground",
                                  children: "Carregando...",
                                }),
                                e.jsxs("div", {
                                  className: "grid grid-cols-2 gap-2",
                                  children: [e.jsx(pa, {}), e.jsx(pa, {})],
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            className: "rounded-lg p-3 space-y-2",
                            style: {
                              backgroundColor:
                                l.catalog_theme === "dark"
                                  ? "#27272a"
                                  : "#f4f4f5",
                            },
                            children: [
                              (l.catalog_weekly_offers?.length || 0) > 0 &&
                                e.jsx("span", {
                                  className:
                                    "text-xs px-2 py-0.5 rounded-full inline-block",
                                  style: {
                                    backgroundColor: l.catalog_primary_color,
                                    color: "#fff",
                                  },
                                  children: "🔥 OFERTA",
                                }),
                              e.jsx("div", {
                                className:
                                  "h-20 rounded bg-muted flex items-center justify-center",
                                style: {
                                  backgroundColor:
                                    l.catalog_secondary_color + "40",
                                },
                                children: e.jsx(V, {
                                  className: "w-8 h-8",
                                  style: { color: l.catalog_primary_color },
                                }),
                              }),
                              e.jsx("p", {
                                className: "text-sm font-medium",
                                style: {
                                  color:
                                    l.catalog_theme === "dark"
                                      ? "#fafafa"
                                      : "#09090b",
                                },
                                children: "Produto Exemplo",
                              }),
                              e.jsx("p", {
                                className: "text-lg font-bold",
                                style: { color: l.catalog_primary_color },
                                children: "R$ 199,90",
                              }),
                              l.catalog_promo_enabled &&
                                l.catalog_promo_end_date &&
                                e.jsxs("div", {
                                  className:
                                    "text-xs py-1 px-2 rounded flex items-center gap-1",
                                  style: {
                                    backgroundColor:
                                      l.catalog_theme === "dark"
                                        ? "#3f3f46"
                                        : "#e4e4e7",
                                    color:
                                      l.catalog_theme === "dark"
                                        ? "#fafafa"
                                        : "#09090b",
                                  },
                                  children: [
                                    "⏳ Termina em: ",
                                    e.jsx(ua, {
                                      endDate: l.catalog_promo_end_date,
                                    }),
                                  ],
                                }),
                              e.jsx("button", {
                                className:
                                  "w-full py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90",
                                style: {
                                  backgroundColor: l.catalog_button_color,
                                  color:
                                    l.catalog_button_color === "#ffffff"
                                      ? "#000000"
                                      : "#ffffff",
                                },
                                children: "Adicionar ao Carrinho",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-xs text-center",
                            style: {
                              color:
                                l.catalog_theme === "dark"
                                  ? "#a1a1aa"
                                  : "#71717a",
                            },
                            children: l.catalog_footer_text || "Rodapé",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "mt-4 pt-4 border-t space-y-2",
                        children: [
                          e.jsxs(m, {
                            onClick: Ye,
                            variant: "outline",
                            className: "w-full gap-2",
                            children: [
                              e.jsx(sa, { className: "w-4 h-4" }),
                              "Ver Catálogo Completo",
                            ],
                          }),
                          (l.catalog_weekly_offers?.length || 0) > 0 &&
                            e.jsx("div", {
                              className:
                                "text-center p-2 rounded-lg bg-primary/10",
                              children: e.jsxs("p", {
                                className: "text-xs font-medium text-primary",
                                children: [
                                  l.catalog_weekly_offers?.length || 0,
                                  " produto(s) em promoção",
                                ],
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            ge &&
              e.jsx(xs, {
                open: !!ge,
                onOpenChange: () => Me(null),
                mediaUrl: ge.url,
                mediaType: ge.type,
              }),
          ],
        });
  };
export { Ts as default };
