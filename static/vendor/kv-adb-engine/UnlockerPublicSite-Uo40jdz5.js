import {
  W as Ms,
  r as d,
  w as b,
  j as e,
  D as Ge,
  c as We,
  c2 as os,
  bL as Qe,
  eu as ca,
  bS as Re,
  b3 as H,
  a3 as cs,
  C as Ce,
  g as ke,
  k as is,
  bW as ia,
  a8 as zs,
  B as N,
  dc as Ye,
  Z as Ee,
  f as Xe,
  O as ze,
  cE as Ue,
  bA as Ds,
  i as js,
  a_ as Ls,
  d as Fs,
  bZ as Da,
  h as Be,
  n as te,
  I as xe,
  m as rs,
  o as Aa,
  X as ls,
  bw as Ta,
  ba as Cs,
  s as Ie,
  bH as Ra,
  U as vs,
  dJ as na,
  bM as Te,
  eK as Oe,
  fS as da,
  bP as hs,
  bz as Me,
  N as gs,
  bQ as Ia,
  cI as ma,
  G as ye,
  a1 as Se,
  dT as As,
  aa as Ss,
  p as us,
  bl as ts,
  bO as Fe,
  bR as Vs,
  K as Ve,
  S as ws,
  bX as _s,
  M as ys,
  dM as qa,
  b4 as xa,
  bj as xs,
  bk as Ze,
  dI as Us,
  dG as pa,
  eJ as Ts,
  dy as Rs,
  a9 as ha,
  E as Xs,
  eI as ps,
  T as fs,
  g7 as ua,
  a$ as Ne,
  d_ as ya,
  cG as Is,
  A as ks,
  ev as Ma,
  fN as as,
  bN as ea,
  b2 as Je,
  dz as qs,
  dk as za,
  dl as La,
  l as Fa,
  fM as Va,
  bG as Ua,
  y as Xa,
  el as Ps,
  eD as Ba,
  b$ as Ha,
  ek as Ga,
  by as Wa,
  a5 as Qa,
  g8 as sa,
  g9 as Ka,
  fL as Ja,
  fR as aa,
  Y as Ya,
  $ as Za,
  b5 as Oa,
  b6 as el,
  b7 as sl,
  b8 as al,
  b9 as ll,
  eM as tl,
  eL as rl,
  eN as ol,
  eP as cl,
  eQ as il,
  eO as nl,
} from "./index-V8ZHCWL2.js";
import { B as fa } from "./box-_vn9phMy.js";
import { M as Bs } from "./minus-BvnD96RC.js";
import { b as dl } from "./pixPayload-DJAh-TDT.js";
import { K as bs } from "./key-DcwzdGZh.js";
import { F as ja, I as ga } from "./image-plus-zjuggK0Y.js";
import { C as ml } from "./circle-help-BRdEyltb.js";
import { A as xl } from "./arrow-left-CaH5Nh3G.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ba = Ms("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pl = Ms("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hl = Ms("MapPinned", [
  [
    "path",
    {
      d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
      key: "11u0oz",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
      key: "q8zwxj",
    },
  ],
]);
function ul({
  open: r,
  onOpenChange: l,
  product: i,
  config: c,
  onAddToCart: m,
  formatCurrency: w,
}) {
  const [y, $] = d.useState([]),
    [f, L] = d.useState(null),
    [h, Q] = d.useState(1),
    [le, re] = d.useState(!1),
    [C, _] = d.useState(!1),
    J = c.theme === "dark",
    A = J ? "#0a0a0a" : "#ffffff",
    ee = J ? "#171717" : "#f5f5f5",
    T = J ? "#fafafa" : "#0a0a0a",
    a = J ? "#a3a3a3" : "#525252",
    fe = "#737373",
    k = J ? "#262626" : "#e5e5e5",
    Y = c.secondary_color || c.primary_color;
  d.useEffect(() => {
    r && i && (Q(1), L(null), se());
  }, [r, i]);
  const se = async () => {
      if (i) {
        re(!0);
        try {
          const { data: R, error: ve } = await b
            .from("unlocker_product_variations")
            .select("*")
            .eq("product_id", i.id)
            .eq("is_active", !0)
            .order("price", { ascending: !0 });
          if (ve) throw ve;
          const K = R || [];
          $(K), K.length > 0 && L(K[0]);
        } catch {
        } finally {
          re(!1);
        }
      }
    },
    V = () => {
      if (!i || (y.length > 0 && !f)) return;
      const R = f ? { id: f.id, name: f.name, price: f.price } : void 0;
      m(i, h, R), l(!1);
    },
    $e = () => {
      i && h < i.stock_quantity && Q((R) => R + 1);
    },
    oe = () => {
      h > 1 && Q((R) => R - 1);
    },
    ae = f ? f.price : i?.price || 0,
    he = ae * h,
    q = !i || i.stock_quantity === 0,
    F = y.length > 0,
    ue = i?.discount_percent || 0,
    je = ue > 0,
    ne = je ? ae / (1 - ue / 100) : ae,
    Z = ne - ae;
  return i
    ? e.jsx(Ge, {
        open: r,
        onOpenChange: l,
        children: e.jsx(We, {
          className:
            "w-[95vw] max-w-5xl max-h-[95vh] p-0 overflow-hidden gap-0 sm:rounded-3xl border-0",
          style: { backgroundColor: A, color: T },
          children: e.jsx(os, {
            className: "h-full max-h-[95vh]",
            children: e.jsxs("div", {
              className: "flex flex-col lg:grid lg:grid-cols-2 gap-0",
              children: [
                e.jsxs("div", {
                  className:
                    "relative w-full flex items-center justify-center p-6 sm:p-8 lg:p-10 min-h-[300px] sm:min-h-[400px] lg:min-h-[550px]",
                  style: { backgroundColor: ee },
                  children: [
                    je &&
                      e.jsxs("div", {
                        className:
                          "absolute top-4 left-4 z-20 px-4 py-2 text-white font-bold text-lg flex items-center gap-2 rounded-xl shadow-lg",
                        style: {
                          background: `linear-gradient(135deg, ${c.primary_color} 0%, ${Y} 100%)`,
                        },
                        children: [
                          e.jsx(Qe, { className: "w-5 h-5" }),
                          ue,
                          "% OFF",
                        ],
                      }),
                    e.jsx("button", {
                      onClick: () => _(!C),
                      className:
                        "absolute top-4 right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
                      style: {
                        backgroundColor: C
                          ? `${c.primary_color}20`
                          : "rgba(255,255,255,0.9)",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                      },
                      children: e.jsx(ca, {
                        className: "w-6 h-6 transition-all",
                        fill: C ? c.primary_color : "transparent",
                        style: { color: C ? c.primary_color : fe },
                      }),
                    }),
                    i.image_url
                      ? e.jsx("img", {
                          src: i.image_url,
                          alt: i.name,
                          className:
                            "w-full h-auto max-h-[55vh] lg:max-h-[65vh] object-contain rounded-2xl",
                        })
                      : e.jsxs("div", {
                          className:
                            "w-full h-72 flex flex-col items-center justify-center gap-3",
                          children: [
                            e.jsx(Re, { className: "w-28 h-28 opacity-20" }),
                            e.jsx("span", {
                              className: "text-sm",
                              style: { color: fe },
                              children: "Sem imagem",
                            }),
                          ],
                        }),
                    e.jsx(H, {
                      className:
                        "absolute bottom-6 left-6 text-sm font-semibold text-white shadow-lg px-4 py-1.5",
                      style: { backgroundColor: c.primary_color },
                      children: i.category,
                    }),
                    i.stock_quantity > 0 &&
                      i.stock_quantity <= 3 &&
                      e.jsxs(H, {
                        className:
                          "absolute bottom-6 right-6 text-sm bg-amber-500 text-white animate-pulse px-4 py-1.5 shadow-lg",
                        children: ["🔥 Últimas ", i.stock_quantity, "!"],
                      }),
                    q &&
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-black/75 flex items-center justify-center rounded-2xl m-6 backdrop-blur-sm",
                        children: e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx(fa, {
                              className: "w-16 h-16 mx-auto text-white/50 mb-3",
                            }),
                            e.jsx("span", {
                              className: "text-white font-bold text-2xl",
                              children: "ESGOTADO",
                            }),
                            e.jsx("p", {
                              className: "text-white/60 mt-2",
                              children: "Produto indisponível",
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "p-6 sm:p-8 flex flex-col",
                  children: [
                    e.jsxs("div", {
                      className: "mb-6",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mb-3 flex-wrap",
                          children: [
                            i.brand &&
                              e.jsx("span", {
                                className:
                                  "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                                style: {
                                  backgroundColor: `${c.primary_color}15`,
                                  color: c.primary_color,
                                },
                                children: i.brand,
                              }),
                            e.jsxs("span", {
                              className:
                                "text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1",
                              style: {
                                backgroundColor: "#8b5cf615",
                                color: "#8b5cf6",
                              },
                              children: [
                                e.jsx(cs, { className: "w-3 h-3" }),
                                "Produto Digital",
                              ],
                            }),
                            e.jsxs("span", {
                              className:
                                "text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1",
                              style: {
                                backgroundColor: "#00a65015",
                                color: "#00a650",
                              },
                              children: [
                                e.jsx(Ce, { className: "w-3 h-3" }),
                                "Original",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("h2", {
                          className:
                            "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4",
                          children: i.name,
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-3 flex-wrap",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1.5 rounded-full",
                              children: [
                                e.jsx("div", {
                                  className: "flex items-center gap-0.5",
                                  children: [1, 2, 3, 4, 5].map((R) =>
                                    e.jsx(
                                      ke,
                                      {
                                        className: "w-4 h-4",
                                        fill: "#facc15",
                                        style: { color: "#facc15" },
                                      },
                                      R
                                    )
                                  ),
                                }),
                                e.jsx("span", {
                                  className: "text-sm font-bold ml-1",
                                  style: { color: T },
                                  children: "5.0",
                                }),
                              ],
                            }),
                            e.jsx("span", {
                              className: "text-sm font-medium",
                              style: { color: a },
                              children: "(127 avaliações)",
                            }),
                            e.jsx("span", {
                              className:
                                "text-sm font-semibold px-3 py-1 rounded-full",
                              style: {
                                backgroundColor: `${c.primary_color}10`,
                                color: c.primary_color,
                              },
                              children: "+500 vendidos",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "p-5 rounded-2xl mb-6",
                      style: {
                        background: `linear-gradient(135deg, ${c.primary_color}08 0%, ${Y}08 100%)`,
                        border: `1px solid ${c.primary_color}20`,
                      },
                      children: [
                        je &&
                          e.jsxs("div", {
                            className: "flex items-center gap-3 mb-2",
                            children: [
                              e.jsx("span", {
                                className: "text-lg line-through",
                                style: { color: fe },
                                children: w(ne),
                              }),
                              e.jsxs("span", {
                                className:
                                  "text-sm font-bold px-3 py-1 rounded-full",
                                style: {
                                  backgroundColor: `${c.primary_color}20`,
                                  color: c.primary_color,
                                },
                                children: ["Economize ", w(Z)],
                              }),
                            ],
                          }),
                        e.jsx("div", {
                          className: "flex items-baseline gap-3",
                          children: e.jsx("span", {
                            className: "text-4xl sm:text-5xl font-bold",
                            style: { color: c.primary_color },
                            children: w(ae),
                          }),
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2 mt-3",
                          children: [
                            e.jsx(is, {
                              className: "w-4 h-4",
                              style: { color: c.primary_color },
                            }),
                            e.jsxs("span", {
                              className: "text-sm font-medium",
                              style: { color: a },
                              children: [
                                "PIX parcelado em até 12x de ",
                                w(ae / 12),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    F &&
                      e.jsxs("div", {
                        className: "mb-6",
                        children: [
                          e.jsxs("label", {
                            className:
                              "text-sm font-bold mb-3 flex items-center gap-2",
                            children: [
                              e.jsx(ia, {
                                className: "w-4 h-4",
                                style: { color: c.primary_color },
                              }),
                              "Escolha uma opção *",
                            ],
                          }),
                          e.jsx("div", {
                            className: "grid grid-cols-2 gap-3 mt-3",
                            children: y.map((R) =>
                              e.jsxs(
                                "button",
                                {
                                  onClick: () => L(R),
                                  className:
                                    "p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02]",
                                  style: {
                                    borderColor:
                                      f?.id === R.id ? c.primary_color : k,
                                    backgroundColor:
                                      f?.id === R.id
                                        ? `${c.primary_color}10`
                                        : ee,
                                    boxShadow:
                                      f?.id === R.id
                                        ? `0 4px 20px ${c.primary_color}20`
                                        : "none",
                                  },
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold text-sm",
                                          children: R.name,
                                        }),
                                        f?.id === R.id &&
                                          e.jsx(Ce, {
                                            className: "w-5 h-5",
                                            style: { color: c.primary_color },
                                          }),
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className: "text-xl font-bold mt-2",
                                      style: { color: c.primary_color },
                                      children: w(R.price),
                                    }),
                                  ],
                                },
                                R.id
                              )
                            ),
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className: "mb-6",
                      children: [
                        e.jsx("label", {
                          className: "text-sm font-bold mb-3 block",
                          children: "Quantidade",
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-4 flex-wrap mt-3",
                          children: [
                            e.jsxs("div", {
                              className:
                                "flex items-center rounded-xl overflow-hidden border-2",
                              style: { borderColor: k },
                              children: [
                                e.jsx("button", {
                                  onClick: oe,
                                  className:
                                    "px-5 py-3 transition-colors hover:bg-muted disabled:opacity-50",
                                  style: { backgroundColor: ee },
                                  disabled: h <= 1,
                                  children: e.jsx(Bs, { className: "w-5 h-5" }),
                                }),
                                e.jsx("span", {
                                  className:
                                    "px-8 py-3 font-bold text-xl min-w-[80px] text-center",
                                  children: h,
                                }),
                                e.jsx("button", {
                                  onClick: $e,
                                  className:
                                    "px-5 py-3 transition-colors hover:bg-muted disabled:opacity-50",
                                  style: { backgroundColor: ee },
                                  disabled: h >= i.stock_quantity,
                                  children: e.jsx(zs, { className: "w-5 h-5" }),
                                }),
                              ],
                            }),
                            e.jsxs("span", {
                              className: "text-sm font-medium",
                              style: { color: fe },
                              children: [
                                i.stock_quantity,
                                " unidades disponíveis",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "p-5 rounded-2xl mb-6",
                      style: { backgroundColor: ee },
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between mb-4",
                          children: [
                            e.jsx("span", {
                              className: "font-semibold text-lg",
                              children: "Total:",
                            }),
                            e.jsx("span", {
                              className: "text-3xl font-bold",
                              style: { color: c.primary_color },
                              children: w(he),
                            }),
                          ],
                        }),
                        e.jsxs(N, {
                          onClick: V,
                          disabled: q || (F && !f),
                          className:
                            "w-full h-14 text-lg font-bold gap-3 text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl rounded-xl",
                          style: {
                            background: `linear-gradient(135deg, ${c.primary_color} 0%, ${Y} 100%)`,
                            boxShadow: `0 10px 30px ${c.primary_color}40`,
                          },
                          children: [
                            e.jsx(Ye, { className: "w-6 h-6" }),
                            q
                              ? "Produto Esgotado"
                              : F && !f
                              ? "Selecione uma opção"
                              : "Adicionar ao Carrinho",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "p-4 rounded-xl flex items-center gap-4 mb-6",
                      style: {
                        background: `linear-gradient(135deg, ${c.primary_color}15 0%, ${Y}15 100%)`,
                        border: `1px solid ${c.primary_color}30`,
                      },
                      children: [
                        e.jsx("div", {
                          className:
                            "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
                          style: { backgroundColor: `${c.primary_color}20` },
                          children: e.jsx(Ee, {
                            className: "w-7 h-7",
                            style: { color: c.primary_color },
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "font-bold text-base",
                              style: { color: c.primary_color },
                              children: "Entrega Rápida",
                            }),
                            e.jsx("p", {
                              className: "text-sm",
                              style: { color: a },
                              children:
                                "Receba seu produto digital após confirmação do pagamento",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid grid-cols-2 gap-3 mb-6",
                      children: [
                        {
                          icon: Xe,
                          text: "Compra 100% Segura",
                          desc: "Proteção total",
                        },
                        {
                          icon: ze,
                          text: "Dados Protegidos",
                          desc: "Criptografia SSL",
                        },
                        {
                          icon: Ue,
                          text: i.warranty || "Garantia",
                          desc: "Suporte incluso",
                        },
                        {
                          icon: Ds,
                          text: "Suporte 24/7",
                          desc: "Atendimento rápido",
                        },
                      ].map((R, ve) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center gap-3 p-4 rounded-xl transition-all duration-200 hover:scale-[1.02]",
                            style: { backgroundColor: ee },
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                                style: {
                                  backgroundColor: `${c.primary_color}15`,
                                },
                                children: e.jsx(R.icon, {
                                  className: "w-5 h-5",
                                  style: { color: c.primary_color },
                                }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("span", {
                                    className: "text-sm font-semibold block",
                                    style: { color: T },
                                    children: R.text,
                                  }),
                                  e.jsx("span", {
                                    className: "text-xs",
                                    style: { color: fe },
                                    children: R.desc,
                                  }),
                                ],
                              }),
                            ],
                          },
                          ve
                        )
                      ),
                    }),
                    i.description &&
                      e.jsxs("div", {
                        className: "pt-6 border-t",
                        style: { borderColor: k },
                        children: [
                          e.jsxs("h3", {
                            className:
                              "font-bold text-lg mb-4 flex items-center gap-2",
                            children: [
                              e.jsx(Re, {
                                className: "w-5 h-5",
                                style: { color: c.primary_color },
                              }),
                              "Descrição do Produto",
                            ],
                          }),
                          e.jsx("p", {
                            className: "text-sm leading-relaxed",
                            style: { color: a },
                            children: i.description,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          }),
        }),
      })
    : null;
}
function Na({
  open: r,
  onOpenChange: l,
  pixKey: i,
  bankName: c,
  merchantName: m,
  merchantCity: w,
  totalValue: y,
  formatCurrency: $,
  onSubmit: f,
  config: L,
}) {
  const { toast: h } = js(),
    [Q, le] = d.useState(""),
    [re, C] = d.useState(180),
    [_, J] = d.useState(!1),
    [A, ee] = d.useState(null),
    [T, a] = d.useState("");
  d.useState(!1);
  const [fe, k] = d.useState(!1),
    Y = d.useRef(null),
    se = d.useRef(null),
    V = L.theme === "dark",
    $e = V ? "#0a0a0a" : "#ffffff",
    oe = V ? "#171717" : "#f5f5f5",
    ae = V ? "#fafafa" : "#0a0a0a",
    he = V ? "#a3a3a3" : "#525252",
    q = "#737373",
    F = V ? "#262626" : "#e5e5e5",
    ue = (m || c || "Recebedor").trim(),
    je = (w || "BRASIL").trim();
  d.useEffect(() => {
    r &&
      i &&
      ((async () => {
        try {
          const U = dl({
              pixKey: i,
              merchantName: ue,
              merchantCity: je,
              amount: y,
              txid: "***",
            }),
            X = await Ra.toDataURL(U, {
              width: 250,
              margin: 2,
              color: {
                dark: V ? "#ffffff" : "#000000",
                light: V ? "#171717" : "#ffffff",
              },
              errorCorrectionLevel: "M",
            });
          le(X);
        } catch {}
      })(),
      C(180),
      J(!1),
      ee(null),
      a(""));
  }, [r, i, y, V, ue, je]),
    d.useEffect(
      () => (
        r &&
          re > 0 &&
          !_ &&
          (se.current = setInterval(() => {
            C((O) => (O <= 1 ? (J(!0), 0) : O - 1));
          }, 1e3)),
        () => {
          se.current && clearInterval(se.current);
        }
      ),
      [r, _]
    );
  const ne = (O) => {
      const U = Math.floor(O / 60),
        X = O % 60;
      return `${U.toString().padStart(2, "0")}:${X.toString().padStart(
        2,
        "0"
      )}`;
    },
    Z = async () => {
      try {
        await navigator.clipboard.writeText(i),
          h({ title: "Chave PIX copiada!" });
      } catch {
        h({ title: "Erro ao copiar", variant: "destructive" });
      }
    },
    R = (O) => {
      const U = O.target.files?.[0];
      if (U) {
        if (U.size > 5 * 1024 * 1024) {
          h({
            title: "Arquivo muito grande (máx. 5MB)",
            variant: "destructive",
          });
          return;
        }
        ee(U);
        const X = new FileReader();
        (X.onload = () => {
          a(X.result);
        }),
          X.readAsDataURL(U);
      }
    },
    ve = async () => {
      k(!0);
      try {
        let O = "";
        if (A) {
          const U = A.name.split(".").pop(),
            I = `unlocker-receipts/${`${Date.now()}-${Math.random()
              .toString(36)
              .substring(2)}.${U}`}`,
            { error: we } = await b.storage.from("receipts").upload(I, A);
          if (we) throw we;
          const { data: G } = b.storage.from("receipts").getPublicUrl(I);
          O = G.publicUrl;
        }
        await f(O), l(!1);
      } catch (O) {
        h({
          title: "Erro ao enviar comprovante",
          description: O.message,
          variant: "destructive",
        });
      } finally {
        k(!1);
      }
    },
    K = () => {
      C(180), J(!1);
    };
  return e.jsx(Ge, {
    open: r,
    onOpenChange: l,
    children: e.jsxs(We, {
      className:
        "w-[95vw] max-w-md h-[85vh] max-h-[700px] flex flex-col p-0 overflow-hidden sm:rounded-2xl",
      style: { backgroundColor: $e, color: ae, borderColor: F },
      children: [
        e.jsx(Ls, {
          className: "p-3 sm:p-4 border-b flex-shrink-0",
          style: { borderColor: F },
          children: e.jsxs(Fs, {
            className: "flex items-center gap-2 text-base sm:text-lg",
            children: [
              e.jsx(Da, {
                className: "w-4 h-4 sm:w-5 sm:h-5",
                style: { color: L.primary_color },
              }),
              "Pagamento via PIX",
            ],
          }),
        }),
        e.jsx(os, {
          className: "flex-1 min-h-0",
          children: e.jsxs("div", {
            className: "p-3 sm:p-4 space-y-4",
            children: [
              e.jsxs("div", {
                className: `p-3 sm:p-4 rounded-xl text-center ${
                  _ ? "bg-red-500/10 border border-red-500/30" : ""
                }`,
                style: { backgroundColor: _ ? void 0 : oe },
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-center gap-2 mb-1 sm:mb-2",
                    children: [
                      e.jsx(Be, {
                        className: `w-4 h-4 sm:w-5 sm:h-5 ${
                          _ ? "text-red-500" : ""
                        }`,
                        style: { color: _ ? void 0 : L.primary_color },
                      }),
                      e.jsx("span", {
                        className: "text-xs sm:text-sm font-medium",
                        style: { color: _ ? "#ef4444" : he },
                        children: _ ? "QR Code expirado" : "Tempo restante",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: `text-2xl sm:text-3xl font-bold font-mono ${
                      _ ? "text-red-500" : ""
                    }`,
                    style: { color: _ ? void 0 : L.primary_color },
                    children: ne(re),
                  }),
                  _ &&
                    e.jsx(N, {
                      variant: "outline",
                      size: "sm",
                      className: "mt-2 sm:mt-3 text-xs",
                      onClick: K,
                      children: "Gerar novo QR Code",
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "text-center py-2 sm:py-3 rounded-xl",
                style: { backgroundColor: `${L.primary_color}15` },
                children: [
                  e.jsx("p", {
                    className: "text-[10px] sm:text-xs font-medium mb-1",
                    style: { color: q },
                    children: "Valor a pagar",
                  }),
                  e.jsx("p", {
                    className: "text-xl sm:text-2xl font-bold",
                    style: { color: L.primary_color },
                    children: $(y),
                  }),
                ],
              }),
              !_ &&
                Q &&
                e.jsx("div", {
                  className: "flex justify-center",
                  children: e.jsx("div", {
                    className: "p-2 sm:p-4 rounded-xl",
                    style: {
                      backgroundColor: V ? "#171717" : "#ffffff",
                      border: `1px solid ${F}`,
                    },
                    children: e.jsx("img", {
                      src: Q,
                      alt: "QR Code PIX",
                      className:
                        "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]",
                    }),
                  }),
                }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsxs(te, {
                    className:
                      "text-[10px] sm:text-xs font-semibold flex items-center gap-1",
                    children: [
                      e.jsx(bs, { className: "w-3 h-3" }),
                      " Chave PIX Manual",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      e.jsx(xe, {
                        value: i,
                        readOnly: !0,
                        className: "font-mono text-xs sm:text-sm h-9 sm:h-10",
                        style: { backgroundColor: oe, borderColor: F },
                      }),
                      e.jsx(N, {
                        variant: "outline",
                        size: "icon",
                        className: "h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0",
                        onClick: Z,
                        style: { borderColor: F },
                        children: e.jsx(rs, {
                          className: "w-3.5 h-3.5 sm:w-4 sm:h-4",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-[10px] sm:text-xs",
                    style: { color: q },
                    children: ["Banco: ", e.jsx("strong", { children: c })],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2 sm:space-y-3",
                children: [
                  e.jsxs(te, {
                    className:
                      "text-[10px] sm:text-xs font-semibold flex items-center gap-1",
                    children: [
                      e.jsx(Aa, { className: "w-3 h-3" }),
                      " Comprovante de Pagamento (opcional)",
                    ],
                  }),
                  e.jsx("input", {
                    type: "file",
                    accept: "image/*",
                    ref: Y,
                    onChange: R,
                    className: "hidden",
                  }),
                  T
                    ? e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx("img", {
                            src: T,
                            alt: "Comprovante",
                            className:
                              "w-full h-36 sm:h-48 object-cover rounded-xl",
                            style: { border: `1px solid ${F}` },
                          }),
                          e.jsx(N, {
                            size: "icon",
                            variant: "destructive",
                            className:
                              "absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8",
                            onClick: () => {
                              ee(null), a("");
                            },
                            children: e.jsx(ls, {
                              className: "w-3.5 h-3.5 sm:w-4 sm:h-4",
                            }),
                          }),
                        ],
                      })
                    : e.jsxs("button", {
                        onClick: () => Y.current?.click(),
                        className:
                          "w-full p-5 sm:p-8 rounded-xl border-2 border-dashed flex flex-col items-center gap-2 sm:gap-3 transition-all hover:opacity-80",
                        style: { borderColor: F, backgroundColor: oe },
                        children: [
                          e.jsx(Ta, {
                            className: "w-8 h-8 sm:w-10 sm:h-10",
                            style: { color: q },
                          }),
                          e.jsxs("div", {
                            className: "text-center",
                            children: [
                              e.jsx("p", {
                                className: "font-medium text-xs sm:text-sm",
                                children: "Clique para anexar",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] sm:text-xs",
                                style: { color: q },
                                children: "PNG, JPG ou PDF (máx. 5MB)",
                              }),
                            ],
                          }),
                        ],
                      }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "p-2.5 sm:p-3 rounded-xl flex items-start gap-2 sm:gap-3",
                style: {
                  backgroundColor: `${L.primary_color}10`,
                  border: `1px solid ${L.primary_color}30`,
                },
                children: [
                  e.jsx(Cs, {
                    className: "w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5",
                    style: { color: L.primary_color },
                  }),
                  e.jsxs("div", {
                    className: "text-[10px] sm:text-xs",
                    style: { color: he },
                    children: [
                      e.jsx("p", {
                        className: "font-semibold mb-1",
                        children: "Como funciona:",
                      }),
                      e.jsxs("ol", {
                        className:
                          "list-decimal list-inside space-y-0.5 sm:space-y-1",
                        children: [
                          e.jsx("li", {
                            children: "Escaneie o QR Code ou copie a chave PIX",
                          }),
                          e.jsx("li", {
                            children: "Faça o pagamento no app do seu banco",
                          }),
                          e.jsx("li", {
                            children:
                              "Anexe o comprovante e envie a solicitação",
                          }),
                          e.jsx("li", {
                            children: "Aguarde a confirmação do vendedor",
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
        e.jsxs("div", {
          className: "p-3 sm:p-4 border-t space-y-2 sm:space-y-3 flex-shrink-0",
          style: { borderColor: F },
          children: [
            e.jsx(N, {
              className:
                "w-full h-10 sm:h-12 gap-2 font-bold text-sm sm:text-base text-white",
              style: { backgroundColor: L.primary_color },
              onClick: ve,
              disabled: fe || _,
              children: fe
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(Ie, { className: "w-4 h-4 animate-spin" }),
                      "Enviando...",
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(Ce, { className: "w-4 h-4" }),
                      "Enviar Comprovante",
                    ],
                  }),
            }),
            e.jsx("p", {
              className: "text-center text-[9px] sm:text-[10px]",
              style: { color: q },
              children: "Você receberá um código de acompanhamento após enviar",
            }),
          ],
        }),
      ],
    }),
  });
}
function yl({
  unlocker: r,
  config: l,
  bgCard: i,
  bgMuted: c,
  textPrimary: m,
  textSecondary: w,
  textMuted: y,
  borderColor: $,
  isDark: f,
}) {
  const L = new Date().getFullYear(),
    h = () => {
      r.whatsapp &&
        window.open(`https://wa.me/${r.whatsapp.replace(/\D/g, "")}`, "_blank");
    },
    Q = () => {
      l.whatsapp_group_link && window.open(l.whatsapp_group_link, "_blank");
    },
    le = [
      { icon: Te, label: "Compra Segura" },
      { icon: ze, label: "Dados Criptografados" },
      { icon: Ue, label: "Profissional Verificado" },
      { icon: Oe, label: "Suporte Dedicado" },
    ],
    re = ["PIX", "Cartão de Crédito", "Boleto", "Transferência"];
  return e.jsxs("footer", {
    className: "mt-auto",
    children: [
      l.whatsapp_group_link &&
        e.jsx("div", {
          className: "border-t py-4 px-4",
          style: { backgroundColor: i, borderColor: $ },
          children: e.jsx("div", {
            className: "max-w-6xl mx-auto",
            children: e.jsxs("button", {
              onClick: Q,
              className:
                "w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group",
              style: {
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 20px rgba(37, 211, 102, 0.25)",
              },
              children: [
                e.jsx("div", {
                  className:
                    "w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform",
                  children: e.jsx(vs, { className: "w-6 h-6 text-white" }),
                }),
                e.jsxs("div", {
                  className: "text-left",
                  children: [
                    e.jsx("p", {
                      className: "text-white font-bold text-lg",
                      children: "Entre no Nosso Grupo",
                    }),
                    e.jsx("p", {
                      className: "text-white/80 text-sm",
                      children: "Receba novidades e promoções exclusivas",
                    }),
                  ],
                }),
                e.jsx(Ds, {
                  className:
                    "w-8 h-8 text-white/60 ml-auto group-hover:text-white transition-colors",
                }),
              ],
            }),
          }),
        }),
      e.jsx("div", {
        className: "border-t py-8 px-4",
        style: { backgroundColor: c, borderColor: $ },
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            e.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",
              children: le.map((C, _) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group",
                    style: { backgroundColor: i, border: `1px solid ${$}` },
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-lg flex items-center justify-center transition-colors group-hover:scale-110",
                        style: { backgroundColor: `${l.primary_color}15` },
                        children: e.jsx(C.icon, {
                          className: "w-5 h-5",
                          style: { color: l.primary_color },
                        }),
                      }),
                      e.jsx("span", {
                        className: "text-xs font-semibold",
                        style: { color: m },
                        children: C.label,
                      }),
                    ],
                  },
                  _
                )
              ),
            }),
            e.jsxs("div", {
              className:
                "flex flex-wrap items-center justify-center gap-6 py-6 px-4 rounded-2xl mb-8",
              style: {
                background: `linear-gradient(135deg, ${l.primary_color}10 0%, ${l.primary_color}05 100%)`,
                border: `1px solid ${l.primary_color}30`,
              },
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(na, {
                      className: "w-5 h-5",
                      style: { color: l.primary_color },
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: "Entrega Rápida",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "h-6 w-px",
                  style: { backgroundColor: $ },
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(Te, {
                      className: "w-5 h-5",
                      style: { color: l.primary_color },
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: "100% Seguro",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "h-6 w-px hidden md:block",
                  style: { backgroundColor: $ },
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(is, {
                      className: "w-5 h-5",
                      style: { color: l.primary_color },
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: "Parcelamento",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "h-6 w-px hidden md:block",
                  style: { backgroundColor: $ },
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(Oe, {
                      className: "w-5 h-5",
                      style: { color: l.primary_color },
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      children: "Suporte 24/7",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx("div", {
        className: "py-10 px-4",
        style: { backgroundColor: i, borderTop: `1px solid ${$}` },
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            e.jsxs("div", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10",
              children: [
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("h4", {
                          className: "text-lg font-bold mb-2",
                          style: { color: m },
                          children: r.store_name || r.name,
                        }),
                        e.jsxs(H, {
                          className: "text-[10px]",
                          style: { backgroundColor: l.primary_color },
                          children: [
                            e.jsx(Ce, { className: "w-3 h-3 mr-1" }),
                            "Verificado",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("p", {
                      className: "text-sm",
                      style: { color: w },
                      children:
                        "Especialista em desbloqueio de dispositivos com anos de experiência. Atendimento profissional e garantia em todos os serviços.",
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-3",
                      children: [
                        l.social_links.instagram &&
                          e.jsx("a", {
                            href: l.social_links.instagram,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg",
                            style: {
                              background:
                                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                            },
                            children: e.jsx(da, {
                              className: "w-5 h-5 text-white",
                            }),
                          }),
                        l.social_links.facebook &&
                          e.jsx("a", {
                            href: l.social_links.facebook,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg",
                            children: e.jsx(ja, {
                              className: "w-5 h-5 text-white",
                            }),
                          }),
                        l.social_links.telegram &&
                          e.jsx("a", {
                            href: l.social_links.telegram,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg",
                            children: e.jsx(hs, {
                              className: "w-5 h-5 text-white",
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h4", {
                      className: "text-sm font-bold uppercase tracking-wider",
                      style: { color: m },
                      children: "Contato",
                    }),
                    e.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        l.show_whatsapp &&
                          r.whatsapp &&
                          e.jsxs("button", {
                            onClick: h,
                            className:
                              "flex items-center gap-3 group transition-all hover:translate-x-1",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",
                                style: { backgroundColor: "#25D366" },
                                children: e.jsx(Me, {
                                  className: "w-4 h-4 text-white",
                                }),
                              }),
                              e.jsx("span", {
                                className: "text-sm",
                                style: { color: w },
                                children: r.whatsapp,
                              }),
                            ],
                          }),
                        l.company_email &&
                          e.jsxs("a", {
                            href: `mailto:${l.company_email}`,
                            className:
                              "flex items-center gap-3 group transition-all hover:translate-x-1",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform",
                                style: {
                                  backgroundColor: `${l.primary_color}15`,
                                },
                                children: e.jsx(gs, {
                                  className: "w-4 h-4",
                                  style: { color: l.primary_color },
                                }),
                              }),
                              e.jsx("span", {
                                className: "text-sm",
                                style: { color: w },
                                children: l.company_email,
                              }),
                            ],
                          }),
                        l.show_address &&
                          r.address &&
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-9 h-9 rounded-lg flex items-center justify-center",
                                style: {
                                  backgroundColor: `${l.primary_color}15`,
                                },
                                children: e.jsx(Ia, {
                                  className: "w-4 h-4",
                                  style: { color: l.primary_color },
                                }),
                              }),
                              e.jsx("span", {
                                className: "text-sm",
                                style: { color: w },
                                children: r.address,
                              }),
                            ],
                          }),
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-9 h-9 rounded-lg flex items-center justify-center",
                              style: {
                                backgroundColor: `${l.primary_color}15`,
                              },
                              children: e.jsx(Be, {
                                className: "w-4 h-4",
                                style: { color: l.primary_color },
                              }),
                            }),
                            e.jsx("span", {
                              className: "text-sm",
                              style: { color: w },
                              children: l.working_hours,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h4", {
                      className: "text-sm font-bold uppercase tracking-wider",
                      style: { color: m },
                      children: "Serviços",
                    }),
                    e.jsx("ul", {
                      className: "space-y-2",
                      children: [
                        "Remoção iCloud",
                        "Remoção FRP (Google)",
                        "Remoção MDM",
                        "Desbloqueio PIN/Senha",
                        "Ativação de Rede",
                        "Conta Samsung/Mi",
                      ].map((C, _) =>
                        e.jsx(
                          "li",
                          {
                            children: e.jsxs("span", {
                              className:
                                "text-sm flex items-center gap-2 transition-colors hover:translate-x-1 cursor-default",
                              style: { color: w },
                              children: [
                                e.jsx(Ee, {
                                  className: "w-3 h-3",
                                  style: { color: l.primary_color },
                                }),
                                C,
                              ],
                            }),
                          },
                          _
                        )
                      ),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h4", {
                      className: "text-sm font-bold uppercase tracking-wider",
                      style: { color: m },
                      children: "Formas de Pagamento",
                    }),
                    e.jsx("div", {
                      className: "flex flex-wrap gap-2",
                      children: re.map((C, _) =>
                        e.jsx(
                          H,
                          {
                            variant: "secondary",
                            className: "text-xs",
                            style: { backgroundColor: c, color: w },
                            children: C,
                          },
                          _
                        )
                      ),
                    }),
                    l.company_cnpj &&
                      e.jsxs("div", {
                        className: "pt-4",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] uppercase tracking-wider mb-1",
                            style: { color: y },
                            children: "CNPJ",
                          }),
                          e.jsx("p", {
                            className: "text-sm font-mono",
                            style: { color: w },
                            children: l.company_cnpj,
                          }),
                        ],
                      }),
                    l.show_whatsapp &&
                      r.whatsapp &&
                      e.jsxs(N, {
                        onClick: h,
                        className:
                          "w-full gap-2 mt-4 text-white transition-all duration-300 hover:scale-105",
                        style: { backgroundColor: "#25D366" },
                        children: [
                          e.jsx(Ds, { className: "w-4 h-4" }),
                          "Falar no WhatsApp",
                        ],
                      }),
                  ],
                }),
              ],
            }),
            l.footer_text &&
              e.jsx("div", {
                className: "text-center py-6 px-4 rounded-xl mb-8",
                style: { backgroundColor: c },
                children: e.jsxs("p", {
                  className: "text-sm italic",
                  style: { color: w },
                  children: ['"', l.footer_text, '"'],
                }),
              }),
          ],
        }),
      }),
      e.jsx("div", {
        className: "py-6 px-4",
        style: {
          background: `linear-gradient(135deg, ${l.primary_color}10 0%, ${c} 100%)`,
          borderTop: `1px solid ${l.primary_color}20`,
        },
        children: e.jsx("div", {
          className: "max-w-6xl mx-auto",
          children: e.jsxs("div", {
            className:
              "flex flex-col md:flex-row items-center justify-center gap-4 p-5 rounded-2xl",
            style: { backgroundColor: i, border: `1px solid ${$}` },
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "w-14 h-14 rounded-full flex items-center justify-center animate-pulse",
                    style: {
                      background: `linear-gradient(135deg, ${l.primary_color} 0%, ${l.secondary_color} 100%)`,
                      boxShadow: `0 4px 20px ${l.primary_color}40`,
                    },
                    children: e.jsx(Te, { className: "w-7 h-7 text-white" }),
                  }),
                  e.jsxs("div", {
                    className: "text-left",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("p", {
                            className: "font-bold text-sm",
                            style: { color: m },
                            children: "Site Verificado e Regulamentado",
                          }),
                          e.jsx(Ce, {
                            className: "w-4 h-4",
                            style: { color: l.primary_color },
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-xs",
                        style: { color: w },
                        children:
                          "Este site atende aos mais altos padrões de segurança e transparência",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "hidden md:block h-10 w-px",
                style: { backgroundColor: $ },
              }),
              e.jsxs("div", {
                className: "flex items-center gap-4 flex-wrap justify-center",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
                    style: {
                      backgroundColor: `${l.primary_color}15`,
                      color: l.primary_color,
                    },
                    children: [
                      e.jsx(ze, { className: "w-3.5 h-3.5" }),
                      "SSL 256-bit",
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
                    style: {
                      backgroundColor: `${l.primary_color}15`,
                      color: l.primary_color,
                    },
                    children: [
                      e.jsx(Ue, { className: "w-3.5 h-3.5" }),
                      "Profissional Certificado",
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
                    style: {
                      backgroundColor: `${l.primary_color}15`,
                      color: l.primary_color,
                    },
                    children: [
                      e.jsx(vs, { className: "w-3.5 h-3.5" }),
                      "+500 Clientes",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsx("div", {
        className: "py-6 px-4 text-center",
        style: {
          backgroundColor: f ? "#0a0a0a" : "#f5f5f5",
          borderTop: `1px solid ${$}`,
        },
        children: e.jsxs("div", {
          className: "max-w-6xl mx-auto space-y-4",
          children: [
            e.jsx("div", {
              className: "flex items-center justify-center gap-6 flex-wrap",
              children: [
                { icon: Xe, label: "SSL Seguro" },
                { icon: ma, label: "99.9% Online" },
                { icon: ze, label: "Dados Protegidos" },
              ].map((C, _) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-1.5 text-xs",
                    style: { color: y },
                    children: [
                      e.jsx(C.icon, {
                        className: "w-3.5 h-3.5",
                        style: { color: l.primary_color },
                      }),
                      C.label,
                    ],
                  },
                  _
                )
              ),
            }),
            e.jsxs("div", {
              className: "space-y-2",
              children: [
                e.jsxs("p", {
                  className: "text-xs",
                  style: { color: y },
                  children: [
                    "© ",
                    L,
                    " ",
                    r.store_name || r.name,
                    ". Todos os direitos reservados.",
                  ],
                }),
                e.jsxs("p", {
                  className: "text-xs flex items-center justify-center gap-1",
                  style: { color: y },
                  children: [
                    "Feito com ",
                    e.jsx(ca, {
                      className: "w-3 h-3 fill-current",
                      style: { color: l.primary_color },
                    }),
                    " para você",
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
function fl({
  config: r,
  bgCard: l,
  bgMuted: i,
  textPrimary: c,
  textSecondary: m,
  textMuted: w,
  borderColor: y,
}) {
  const $ = [
      {
        icon: Ss,
        title: "Acompanhamento em Tempo Real",
        description:
          "Veja o status do seu pedido atualizado instantaneamente, sem precisar atualizar a página.",
        color: "#3b82f6",
      },
      {
        icon: us,
        title: "Chat Direto com o Técnico",
        description:
          "Envie mensagens, fotos e tire dúvidas diretamente com o profissional responsável.",
        color: "#10b981",
      },
      {
        icon: bs,
        title: "Credenciais de Produtos",
        description:
          "Ao comprar produtos digitais, receba email, senha e links de download diretamente aqui.",
        color: "#8b5cf6",
      },
      {
        icon: ts,
        title: "Notas do Técnico",
        description:
          "Acompanhe observações e atualizações importantes sobre seu serviço ou pedido.",
        color: "#f59e0b",
      },
      {
        icon: cs,
        title: "Downloads de Produtos",
        description:
          "Acesse links exclusivos para download de softwares e ferramentas adquiridas.",
        color: "#ec4899",
      },
      {
        icon: is,
        title: "Informações de Pagamento",
        description:
          "Visualize valores, formas de pagamento e comprovantes quando disponíveis.",
        color: "#06b6d4",
      },
    ],
    f = [
      {
        icon: Fe,
        title: "Serviços",
        items: [
          "Desbloqueio iCloud, FRP, MDM",
          "Status: Pendente → Em Andamento → Concluído",
          "Chat em tempo real com o técnico",
          "Histórico de mensagens salvo",
        ],
        color: "#10b981",
      },
      {
        icon: Re,
        title: "Produtos",
        items: [
          "Ferramentas e licenças digitais",
          "Credenciais disponíveis após conclusão",
          "Links de download seguros",
          "Suporte pós-venda incluído",
        ],
        color: "#8b5cf6",
      },
    ],
    L = [
      {
        icon: Vs,
        tip: "A página atualiza automaticamente - não precisa recarregar!",
      },
      {
        icon: Be,
        tip: "O rastreio expira 24h após a conclusão do serviço/entrega",
      },
      { icon: As, tip: "Mantenha a aba aberta para receber notificações" },
      {
        icon: Xe,
        tip: "Seus dados estão protegidos e são exibidos parcialmente",
      },
    ];
  return e.jsxs("div", {
    className: "space-y-6 animate-in fade-in duration-500",
    children: [
      e.jsxs("div", {
        className: "p-6 rounded-2xl text-center",
        style: {
          background: `linear-gradient(135deg, ${r.primary_color}15 0%, ${r.primary_color}05 100%)`,
          border: `1px solid ${r.primary_color}30`,
        },
        children: [
          e.jsx(ml, {
            className: "w-10 h-10 mx-auto mb-3",
            style: { color: r.primary_color },
          }),
          e.jsx("h3", {
            className: "text-lg font-bold mb-2",
            children: "O que você pode fazer aqui?",
          }),
          e.jsx("p", {
            className: "text-sm",
            style: { color: m },
            children:
              "Tudo o que você precisa para acompanhar seus pedidos em um só lugar",
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
        children: $.map((h, Q) =>
          e.jsx(
            ye,
            {
              className:
                "group transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
              style: { backgroundColor: l, borderColor: y },
              children: e.jsxs(Se, {
                className: "p-5",
                children: [
                  e.jsx("div", {
                    className:
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                    style: { backgroundColor: `${h.color}15` },
                    children: e.jsx(h.icon, {
                      className: "w-6 h-6",
                      style: { color: h.color },
                    }),
                  }),
                  e.jsx("h4", {
                    className: "font-semibold text-sm mb-2",
                    style: { color: c },
                    children: h.title,
                  }),
                  e.jsx("p", {
                    className: "text-xs leading-relaxed",
                    style: { color: m },
                    children: h.description,
                  }),
                ],
              }),
            },
            Q
          )
        ),
      }),
      e.jsx("div", {
        className: "grid md:grid-cols-2 gap-4",
        children: f.map((h, Q) =>
          e.jsxs(
            ye,
            {
              className:
                "overflow-hidden transition-all duration-300 hover:shadow-lg",
              style: { backgroundColor: l, borderColor: y },
              children: [
                e.jsxs("div", {
                  className: "p-4 flex items-center gap-3",
                  style: {
                    backgroundColor: `${h.color}10`,
                    borderBottom: `1px solid ${y}`,
                  },
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                      style: { backgroundColor: h.color },
                      children: e.jsx(h.icon, {
                        className: "w-5 h-5 text-white",
                      }),
                    }),
                    e.jsx("h4", {
                      className: "font-bold",
                      style: { color: c },
                      children: h.title,
                    }),
                  ],
                }),
                e.jsx(Se, {
                  className: "p-4",
                  children: e.jsx("ul", {
                    className: "space-y-2",
                    children: h.items.map((le, re) =>
                      e.jsxs(
                        "li",
                        {
                          className: "flex items-start gap-2",
                          children: [
                            e.jsx(Ce, {
                              className: "w-4 h-4 mt-0.5 flex-shrink-0",
                              style: { color: h.color },
                            }),
                            e.jsx("span", {
                              className: "text-sm",
                              style: { color: m },
                              children: le,
                            }),
                          ],
                        },
                        re
                      )
                    ),
                  }),
                }),
              ],
            },
            Q
          )
        ),
      }),
      e.jsxs("div", {
        className: "p-5 rounded-2xl",
        style: { backgroundColor: i, border: `1px solid ${y}` },
        children: [
          e.jsxs("h4", {
            className: "font-semibold text-sm mb-4 flex items-center gap-2",
            style: { color: c },
            children: [
              e.jsx(As, {
                className: "w-4 h-4",
                style: { color: r.primary_color },
              }),
              "Dicas Importantes",
            ],
          }),
          e.jsx("div", {
            className: "grid sm:grid-cols-2 gap-3",
            children: L.map((h, Q) =>
              e.jsxs(
                "div",
                {
                  className:
                    "flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02]",
                  style: { backgroundColor: l },
                  children: [
                    e.jsx(h.icon, {
                      className: "w-4 h-4 flex-shrink-0",
                      style: { color: r.primary_color },
                    }),
                    e.jsx("span", {
                      className: "text-xs",
                      style: { color: m },
                      children: h.tip,
                    }),
                  ],
                },
                Q
              )
            ),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "p-4 rounded-xl text-center",
        style: { backgroundColor: i, border: `1px dashed ${y}` },
        children: [
          e.jsx("p", {
            className: "text-xs mb-2",
            style: { color: w },
            children: "Formato do código de rastreio:",
          }),
          e.jsx(H, {
            variant: "secondary",
            className: "font-mono text-sm px-4 py-2",
            style: { backgroundColor: l },
            children: "UNL-XXXXXXXX-XXXX",
          }),
          e.jsx("p", {
            className: "text-[10px] mt-2",
            style: { color: w },
            children:
              "Você recebeu este código após solicitar o serviço ou comprar um produto",
          }),
        ],
      }),
    ],
  });
}
const Ke = {
  pending: {
    label: "Aguardando",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.15)",
    icon: Be,
  },
  in_progress: {
    label: "Em Andamento",
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.15)",
    icon: Fe,
  },
  completed: {
    label: "Concluído",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.15)",
    icon: Ce,
  },
  cancelled: {
    label: "Cancelado",
    color: "#ef4444",
    bgColor: "rgba(239,68,68,0.15)",
    icon: ls,
  },
};
function jl({
  open: r,
  onOpenChange: l,
  trackedOrder: i,
  config: c,
  unlocker: m,
  formatCurrency: w,
  onOrderUpdate: y,
}) {
  const { toast: $ } = js(),
    [f, L] = d.useState([]),
    [h, Q] = d.useState(""),
    [le, re] = d.useState(!1),
    [C, _] = d.useState(null),
    [J, A] = d.useState(!1),
    [ee, T] = d.useState(!1),
    [a, fe] = d.useState(!1),
    [k, Y] = d.useState(!1),
    [se, V] = d.useState(!1),
    $e = d.useRef(null),
    oe = d.useRef(null),
    [ae, he] = d.useState(!1),
    [q, F] = d.useState(0),
    [ue, je] = d.useState(0),
    [ne, Z] = d.useState(""),
    [R, ve] = d.useState(!1),
    [K, O] = d.useState(!1),
    U = c.theme === "dark",
    X = U ? "#0a0a0a" : "#ffffff",
    I = U ? "#171717" : "#f5f5f5",
    we = U ? "#fafafa" : "#0a0a0a",
    G = U ? "#a3a3a3" : "#525252",
    v = "#737373",
    W = U ? "#262626" : "#e5e5e5";
  d.useEffect(
    () => (
      r && i && (P(), u()),
      () => {
        r || (_(null), L([]), A(!1), V(!1), he(!1), F(0), Z(""), O(!1));
      }
    ),
    [r, i?.order_id]
  ),
    d.useEffect(() => {
      if (!i || !r) return;
      const t = b
        .channel(`tracking-order-${i.order_id}`)
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "unlocker_orders_public",
            filter: `order_id=eq.${i.order_id}`,
          },
          (x) => {
            y(x.new);
          }
        )
        .subscribe();
      return () => {
        b.removeChannel(t);
      };
    }, [i?.order_id, r]),
    d.useEffect(() => {
      if (!C || !r) return;
      const t = b
        .channel(`tracking-chat-${C}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "unlocker_support_messages",
            filter: `ticket_id=eq.${C}`,
          },
          (x) => {
            L((n) => (n.some((j) => j.id === x.new.id) ? n : [...n, x.new]));
          }
        )
        .subscribe();
      return () => {
        b.removeChannel(t);
      };
    }, [C, r]),
    d.useEffect(() => {
      se && $e.current?.scrollIntoView({ behavior: "smooth" });
    }, [f, se]);
  const u = async () => {
      if (i)
        try {
          const { data: t } = await b
            .from("unlocker_order_ratings")
            .select("id, rating")
            .eq("order_id", i.order_id)
            .maybeSingle();
          t && (O(!0), F(t.rating));
        } catch {}
    },
    P = async () => {
      if (i)
        try {
          const { data: t } = await b
            .from("unlocker_support_tickets")
            .select("id, is_archived, status")
            .eq("order_id", i.order_id)
            .maybeSingle();
          if (t) {
            _(t.id), A(t.is_archived || t.status === "closed");
            const { data: x } = await b
              .from("unlocker_support_messages")
              .select("*")
              .eq("ticket_id", t.id)
              .order("created_at", { ascending: !0 });
            L(x || []);
          } else _(null), L([]);
        } catch {}
    },
    ge = async () => {
      if (!(!i || !h.trim())) {
        re(!0);
        try {
          let t = C;
          if (!t) {
            const n = i.client_name || "Cliente",
              { data: j, error: z } = await b
                .from("unlocker_support_tickets")
                .insert({
                  unlocker_id: i.unlocker_id,
                  order_id: i.order_id,
                  client_name: n,
                  client_phone: "",
                  subject: `Pedido ${i.order_number}`,
                  status: "open",
                  priority: "normal",
                })
                .select()
                .single();
            if (z) throw z;
            (t = j.id), _(t);
          }
          const { error: x } = await b
            .from("unlocker_support_messages")
            .insert({
              ticket_id: t,
              sender_type: "client",
              message: h.trim(),
              is_read: !1,
            });
          if (x) throw x;
          Q("");
        } catch {
          $({ title: "Erro ao enviar mensagem", variant: "destructive" });
        } finally {
          re(!1);
        }
      }
    },
    M = async (t) => {
      const x = t.target.files?.[0];
      if (!(!x || !i)) {
        if (x.size > 5 * 1024 * 1024) {
          $({ title: "Imagem muito grande (máx 5MB)", variant: "destructive" });
          return;
        }
        T(!0);
        try {
          let n = C;
          if (!n) {
            const De = i.client_name || "Cliente",
              { data: Ae, error: He } = await b
                .from("unlocker_support_tickets")
                .insert({
                  unlocker_id: i.unlocker_id,
                  order_id: i.order_id,
                  client_name: De,
                  client_phone: "",
                  subject: `Pedido ${i.order_number}`,
                  status: "open",
                  priority: "normal",
                })
                .select()
                .single();
            if (He) throw He;
            (n = Ae.id), _(n);
          }
          const j = `${n}/${Date.now()}-${x.name}`,
            { error: z } = await b.storage
              .from("support-chat-images")
              .upload(j, x);
          if (z) throw z;
          const {
            data: { publicUrl: p },
          } = b.storage.from("support-chat-images").getPublicUrl(j);
          await b
            .from("unlocker_support_messages")
            .insert({
              ticket_id: n,
              sender_type: "client",
              message: "📷 Imagem enviada",
              media_url: p,
              media_type: "image",
              is_read: !1,
            }),
            $({ title: "Imagem enviada!" });
        } catch {
          $({ title: "Erro ao enviar imagem", variant: "destructive" });
        } finally {
          T(!1), oe.current && (oe.current.value = "");
        }
      }
    },
    de = (t, x) => {
      navigator.clipboard.writeText(t),
        $({ title: x ? `${x} copiado!` : "Copiado!" });
    },
    S = () => {
      m?.whatsapp &&
        window.open(`https://wa.me/${m.whatsapp.replace(/\D/g, "")}`, "_blank");
    },
    Pe = async () => {
      if (!(!i || q === 0)) {
        ve(!0);
        try {
          const { error: t } = await b
            .from("unlocker_order_ratings")
            .insert({
              order_id: i.order_id,
              unlocker_id: i.unlocker_id,
              rating: q,
              comment: ne.trim() || null,
              client_name: i.client_name,
            });
          if (t) throw t;
          O(!0),
            he(!1),
            $({
              title: "Obrigado pela avaliação!",
              description: "Sua opinião é muito importante para nós.",
            });
        } catch (t) {
          t.code === "23505"
            ? ($({
                title: "Você já avaliou este pedido",
                variant: "destructive",
              }),
              O(!0))
            : $({ title: "Erro ao enviar avaliação", variant: "destructive" });
        } finally {
          ve(!1);
        }
      }
    },
    be = (t) => {
      if (!t) return { anydesk: null, currentStatus: null };
      const x = t.match(/AnyDesk:\s*([^\n]+)/)?.[1]?.trim(),
        n = t.match(/Status atual:\s*([^\n]+)/)?.[1]?.trim();
      return {
        anydesk: x === "Não informado" ? null : x,
        currentStatus: n === "Não informado" ? null : n,
      };
    };
  if (!i) return null;
  const Le = i.order_type === "product",
    ce = i.status === "completed" && i.login_credentials,
    me = i.login_credentials,
    pe = Ke[i.status] || Ke.pending,
    ns = pe.icon,
    E = be(i.service_description),
    ds = i.status === "completed";
  return e.jsx(Ge, {
    open: r,
    onOpenChange: l,
    children: e.jsxs(We, {
      className:
        "w-[95vw] max-w-lg max-h-[92vh] flex flex-col p-0 overflow-hidden",
      style: { backgroundColor: X, color: we, borderColor: W },
      children: [
        e.jsxs("div", {
          className: "p-4 border-b relative overflow-hidden",
          style: { borderColor: W },
          children: [
            e.jsx("div", {
              className: "absolute inset-0 opacity-10",
              style: {
                background: `linear-gradient(135deg, ${pe.color} 0%, transparent 60%)`,
              },
            }),
            e.jsx("div", {
              className: "relative flex items-start justify-between gap-3",
              children: e.jsxs("div", {
                className: "flex items-start gap-3 min-w-0 flex-1",
                children: [
                  e.jsx("div", {
                    className:
                      "w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg",
                    style: { backgroundColor: pe.color },
                    children: e.jsx(ns, { className: "w-7 h-7 text-white" }),
                  }),
                  e.jsxs("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [
                          e.jsx(H, {
                            className: "text-[10px] px-2 py-0.5 font-bold",
                            style: {
                              backgroundColor: pe.bgColor,
                              color: pe.color,
                              border: `1px solid ${pe.color}40`,
                            },
                            children: pe.label,
                          }),
                          e.jsx(H, {
                            variant: "outline",
                            className: "text-[9px] px-1.5 py-0",
                            style: { borderColor: W, color: v },
                            children: Le ? "Produto" : "Serviço",
                          }),
                        ],
                      }),
                      e.jsx("h3", {
                        className: "font-bold text-sm leading-tight",
                        children: i.service_type,
                      }),
                      e.jsx("code", {
                        className:
                          "text-[10px] font-mono px-1.5 py-0.5 rounded mt-1 inline-block",
                        style: { backgroundColor: I, color: v },
                        children: i.order_number,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "px-4 py-3 border-b",
          style: { borderColor: W, backgroundColor: I },
          children: e.jsx("div", {
            className: "flex items-center justify-between gap-1",
            children: [
              { status: "pending", label: "Recebido" },
              { status: "in_progress", label: "Andamento" },
              { status: "completed", label: "Concluído" },
            ].map((t, x) => {
              const n = ["pending", "in_progress", "completed"],
                j = n.indexOf(i.status),
                z = n.indexOf(t.status),
                p = j >= z,
                De = i.status === t.status,
                Ae = Ke[t.status]?.icon || Be;
              return e.jsxs(
                "div",
                {
                  className: "flex items-center flex-1",
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-col items-center flex-1",
                      children: [
                        e.jsx("div", {
                          className: `w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                            De ? "ring-2 ring-offset-2" : ""
                          }`,
                          style: {
                            backgroundColor: p ? Ke[t.status]?.color : X,
                            color: p ? "#fff" : v,
                            border: p ? "none" : `2px dashed ${W}`,
                            ...(De && { "--tw-ring-color": c.primary_color }),
                          },
                          children: e.jsx(Ae, { className: "w-4 h-4" }),
                        }),
                        e.jsx("span", {
                          className: "text-[9px] font-medium mt-1 text-center",
                          style: { color: p ? we : v },
                          children: t.label,
                        }),
                      ],
                    }),
                    x < 2 &&
                      e.jsx("div", {
                        className:
                          "h-0.5 w-full max-w-8 mx-1 rounded-full transition-all",
                        style: { backgroundColor: j > z ? c.primary_color : W },
                      }),
                  ],
                },
                t.status
              );
            }),
          }),
        }),
        e.jsx(os, {
          className: "flex-1 min-h-0",
          children: e.jsxs("div", {
            className: "p-4 space-y-4",
            children: [
              i.client_name &&
                e.jsx("div", {
                  className: "p-3 rounded-xl",
                  style: { backgroundColor: I, border: `1px solid ${W}` },
                  children: e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-full flex items-center justify-center",
                        style: { backgroundColor: `${c.primary_color}20` },
                        children: e.jsx(Ve, {
                          className: "w-5 h-5",
                          style: { color: c.primary_color },
                        }),
                      }),
                      e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          e.jsx("p", {
                            className: "font-bold text-sm truncate",
                            children: i.client_name,
                          }),
                          i.client_phone &&
                            e.jsx("p", {
                              className: "text-xs",
                              style: { color: v },
                              children: i.client_phone,
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-2",
                children: [
                  i.device_brand &&
                    e.jsxs("div", {
                      className: "p-3 rounded-xl",
                      style: { backgroundColor: I },
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1.5 mb-1",
                          children: [
                            e.jsx(ws, {
                              className: "w-3.5 h-3.5",
                              style: { color: c.primary_color },
                            }),
                            e.jsx("span", {
                              className: "text-[10px] font-semibold uppercase",
                              style: { color: v },
                              children: "Dispositivo",
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "font-bold text-xs truncate",
                          children: [i.device_brand, " ", i.device_model],
                        }),
                      ],
                    }),
                  i.imei_last4 &&
                    e.jsxs("div", {
                      className: "p-3 rounded-xl",
                      style: { backgroundColor: I },
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1.5 mb-1",
                          children: [
                            e.jsx(_s, {
                              className: "w-3.5 h-3.5",
                              style: { color: c.primary_color },
                            }),
                            e.jsx("span", {
                              className: "text-[10px] font-semibold uppercase",
                              style: { color: v },
                              children: "IMEI",
                            }),
                          ],
                        }),
                        e.jsxs("p", {
                          className: "font-bold text-xs font-mono",
                          children: ["****", i.imei_last4],
                        }),
                      ],
                    }),
                  E.anydesk &&
                    e.jsxs("div", {
                      className: "p-3 rounded-xl",
                      style: { backgroundColor: I },
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1.5 mb-1",
                          children: [
                            e.jsx(ys, {
                              className: "w-3.5 h-3.5",
                              style: { color: c.primary_color },
                            }),
                            e.jsx("span", {
                              className: "text-[10px] font-semibold uppercase",
                              style: { color: v },
                              children: "AnyDesk",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "font-bold text-xs font-mono",
                          children: E.anydesk,
                        }),
                      ],
                    }),
                  E.currentStatus &&
                    e.jsxs("div", {
                      className: "p-3 rounded-xl",
                      style: { backgroundColor: I },
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1.5 mb-1",
                          children: [
                            e.jsx(qa, {
                              className: "w-3.5 h-3.5",
                              style: { color: c.primary_color },
                            }),
                            e.jsx("span", {
                              className: "text-[10px] font-semibold uppercase",
                              style: { color: v },
                              children: "Situação",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "font-bold text-xs truncate",
                          children: E.currentStatus,
                        }),
                      ],
                    }),
                  e.jsxs("div", {
                    className: "p-3 rounded-xl",
                    style: { backgroundColor: I },
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-1.5 mb-1",
                        children: [
                          e.jsx(xa, {
                            className: "w-3.5 h-3.5",
                            style: { color: c.primary_color },
                          }),
                          e.jsx("span", {
                            className: "text-[10px] font-semibold uppercase",
                            style: { color: v },
                            children: "Entrada",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "font-bold text-xs",
                        children: xs(new Date(i.created_at), "dd/MM/yy HH:mm", {
                          locale: Ze,
                        }),
                      }),
                    ],
                  }),
                  i.value > 0 &&
                    e.jsxs("div", {
                      className: "p-3 rounded-xl",
                      style: { backgroundColor: I },
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1.5 mb-1",
                          children: [
                            e.jsx(is, {
                              className: "w-3.5 h-3.5",
                              style: { color: c.primary_color },
                            }),
                            e.jsx("span", {
                              className: "text-[10px] font-semibold uppercase",
                              style: { color: v },
                              children: "Valor",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "font-bold text-xs",
                          style: { color: c.primary_color },
                          children: w(i.value),
                        }),
                      ],
                    }),
                  i.completed_at &&
                    e.jsxs("div", {
                      className: "p-3 rounded-xl col-span-2",
                      style: { backgroundColor: `${Ke.completed.color}10` },
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1.5 mb-1",
                          children: [
                            e.jsx(Ce, {
                              className: "w-3.5 h-3.5",
                              style: { color: Ke.completed.color },
                            }),
                            e.jsx("span", {
                              className: "text-[10px] font-semibold uppercase",
                              style: { color: Ke.completed.color },
                              children: "Concluído em",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "font-bold text-xs",
                          children: xs(
                            new Date(i.completed_at),
                            "dd/MM/yyyy 'às' HH:mm",
                            { locale: Ze }
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center justify-center gap-2 py-2",
                children: [
                  e.jsx(Us, { className: "w-3 h-3", style: { color: v } }),
                  e.jsxs("span", {
                    className: "text-[10px]",
                    style: { color: v },
                    children: [
                      "Atualizado ",
                      pa(new Date(i.updated_at), { addSuffix: !0, locale: Ze }),
                    ],
                  }),
                ],
              }),
              i.notes &&
                e.jsx("div", {
                  className: "p-4 rounded-xl",
                  style: {
                    backgroundColor: `${c.primary_color}08`,
                    border: `1px solid ${c.primary_color}20`,
                  },
                  children: e.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0",
                        style: { backgroundColor: `${c.primary_color}20` },
                        children: e.jsx(ts, {
                          className: "w-4 h-4",
                          style: { color: c.primary_color },
                        }),
                      }),
                      e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          e.jsx("p", {
                            className: "text-[10px] font-bold uppercase mb-1.5",
                            style: { color: c.primary_color },
                            children: "Observações do Técnico",
                          }),
                          e.jsx("p", {
                            className: "text-sm leading-relaxed break-words",
                            style: { color: G },
                            children: i.notes,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ce &&
                me &&
                e.jsxs("div", {
                  className: "rounded-2xl overflow-hidden",
                  style: {
                    border: `2px solid ${c.primary_color}`,
                    background: `linear-gradient(135deg, ${c.primary_color}08 0%, transparent 100%)`,
                  },
                  children: [
                    e.jsxs("button", {
                      className: "w-full p-4 flex items-center justify-between",
                      style: { backgroundColor: `${c.primary_color}12` },
                      onClick: () => fe(!a),
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 rounded-xl flex items-center justify-center",
                              style: { backgroundColor: c.primary_color },
                              children: e.jsx(bs, {
                                className: "w-5 h-5 text-white",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "text-left",
                              children: [
                                e.jsxs("h4", {
                                  className:
                                    "font-bold text-sm flex items-center gap-1.5",
                                  children: [
                                    "Suas Credenciais",
                                    e.jsx(Qe, {
                                      className: "w-3.5 h-3.5",
                                      style: { color: c.primary_color },
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-[10px]",
                                  style: { color: G },
                                  children: "Dados de acesso ao produto",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "text-xs font-medium",
                              style: { color: c.primary_color },
                              children: a ? "Ocultar" : "Mostrar",
                            }),
                            a
                              ? e.jsx(Ts, {
                                  className: "w-4 h-4",
                                  style: { color: c.primary_color },
                                })
                              : e.jsx(Rs, {
                                  className: "w-4 h-4",
                                  style: { color: c.primary_color },
                                }),
                          ],
                        }),
                      ],
                    }),
                    a &&
                      e.jsxs("div", {
                        className: "p-4 space-y-3",
                        children: [
                          me.login_email &&
                            e.jsxs("div", {
                              className:
                                "p-3 rounded-xl flex items-center gap-3",
                              style: {
                                backgroundColor: X,
                                border: `1px solid ${W}`,
                              },
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-blue-500/15",
                                  children: e.jsx(gs, {
                                    className: "w-4 h-4 text-blue-500",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[9px] font-semibold uppercase",
                                      style: { color: v },
                                      children: "E-mail / Usuário",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "font-mono font-bold text-sm truncate",
                                      children: me.login_email,
                                    }),
                                  ],
                                }),
                                e.jsx(N, {
                                  variant: "ghost",
                                  size: "sm",
                                  className: "flex-shrink-0 h-8 w-8 p-0",
                                  onClick: () => de(me.login_email, "E-mail"),
                                  children: e.jsx(rs, { className: "w-4 h-4" }),
                                }),
                              ],
                            }),
                          me.login_password &&
                            e.jsxs("div", {
                              className:
                                "p-3 rounded-xl flex items-center gap-3",
                              style: {
                                backgroundColor: X,
                                border: `1px solid ${W}`,
                              },
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-amber-500/15",
                                  children: e.jsx(ze, {
                                    className: "w-4 h-4 text-amber-500",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[9px] font-semibold uppercase",
                                      style: { color: v },
                                      children: "Senha de Acesso",
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "font-mono font-bold text-sm truncate",
                                      children: k
                                        ? me.login_password
                                        : "••••••••",
                                    }),
                                  ],
                                }),
                                e.jsx(N, {
                                  variant: "ghost",
                                  size: "sm",
                                  className: "flex-shrink-0 h-8 w-8 p-0",
                                  onClick: () => Y(!k),
                                  children: k
                                    ? e.jsx(ha, { className: "w-4 h-4" })
                                    : e.jsx(Ss, { className: "w-4 h-4" }),
                                }),
                                e.jsx(N, {
                                  variant: "ghost",
                                  size: "sm",
                                  className: "flex-shrink-0 h-8 w-8 p-0",
                                  onClick: () => de(me.login_password, "Senha"),
                                  children: e.jsx(rs, { className: "w-4 h-4" }),
                                }),
                              ],
                            }),
                          me.download_url &&
                            e.jsxs("a", {
                              href: me.download_url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "flex items-center justify-center gap-2 p-3.5 rounded-xl text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]",
                              style: {
                                backgroundColor: c.primary_color,
                                boxShadow: `0 6px 20px ${c.primary_color}35`,
                              },
                              children: [
                                e.jsx(cs, { className: "w-4 h-4" }),
                                "Baixar Produto / Ferramenta",
                                e.jsx(Xs, { className: "w-3.5 h-3.5" }),
                              ],
                            }),
                          me.additional_notes &&
                            e.jsx("div", {
                              className: "p-3 rounded-xl",
                              style: {
                                backgroundColor: I,
                                border: `1px solid ${W}`,
                              },
                              children: e.jsxs("div", {
                                className: "flex items-start gap-2",
                                children: [
                                  e.jsx(Cs, {
                                    className: "w-4 h-4 flex-shrink-0 mt-0.5",
                                    style: { color: c.primary_color },
                                  }),
                                  e.jsxs("div", {
                                    className: "min-w-0",
                                    children: [
                                      e.jsx("p", {
                                        className: "text-[10px] font-bold mb-1",
                                        style: { color: c.primary_color },
                                        children: "Instruções Importantes",
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "text-xs whitespace-pre-wrap break-words",
                                        style: { color: G },
                                        children: me.additional_notes,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-2 px-3 py-2 rounded-lg",
                            style: { backgroundColor: I },
                            children: [
                              e.jsx(Xe, {
                                className: "w-3.5 h-3.5 flex-shrink-0",
                                style: { color: c.primary_color },
                              }),
                              e.jsx("p", {
                                className: "text-[10px]",
                                style: { color: v },
                                children:
                                  "Guarde suas credenciais em local seguro.",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              Le &&
                i.status !== "completed" &&
                e.jsxs("div", {
                  className: "p-4 rounded-xl flex items-center gap-3",
                  style: { backgroundColor: I, border: `1px dashed ${W}` },
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-500/15",
                      children: e.jsx(Re, {
                        className: "w-5 h-5 text-amber-500",
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "font-semibold text-sm",
                          children: "Aguardando liberação",
                        }),
                        e.jsx("p", {
                          className: "text-[10px]",
                          style: { color: v },
                          children:
                            "Credenciais serão exibidas quando o pedido for concluído.",
                        }),
                      ],
                    }),
                  ],
                }),
              ds &&
                !Le &&
                e.jsx("div", {
                  className: "p-4 rounded-2xl",
                  style: {
                    backgroundColor: K ? `${c.primary_color}08` : I,
                    border: `1px solid ${K ? c.primary_color + "30" : W}`,
                  },
                  children: K
                    ? e.jsxs("div", {
                        className: "text-center",
                        children: [
                          e.jsx("div", {
                            className:
                              "flex items-center justify-center gap-1 mb-2",
                            children: [1, 2, 3, 4, 5].map((t) =>
                              e.jsx(
                                ke,
                                {
                                  className: "w-6 h-6",
                                  fill: t <= q ? "#fbbf24" : "transparent",
                                  style: { color: t <= q ? "#fbbf24" : W },
                                },
                                t
                              )
                            ),
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [
                              e.jsx(ps, {
                                className: "w-4 h-4",
                                style: { color: c.primary_color },
                              }),
                              e.jsx("p", {
                                className: "text-sm font-semibold",
                                style: { color: c.primary_color },
                                children: "Obrigado pela avaliação!",
                              }),
                            ],
                          }),
                        ],
                      })
                    : ae
                    ? e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "text-center",
                            children: [
                              e.jsx("p", {
                                className: "font-bold text-sm mb-3",
                                children: "Como foi sua experiência?",
                              }),
                              e.jsx("div", {
                                className:
                                  "flex items-center justify-center gap-2",
                                children: [1, 2, 3, 4, 5].map((t) =>
                                  e.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      className:
                                        "transition-all hover:scale-110 active:scale-95",
                                      onMouseEnter: () => je(t),
                                      onMouseLeave: () => je(0),
                                      onClick: () => F(t),
                                      children: e.jsx(ke, {
                                        className: "w-9 h-9",
                                        fill:
                                          (ue || q) >= t
                                            ? "#fbbf24"
                                            : "transparent",
                                        style: {
                                          color: (ue || q) >= t ? "#fbbf24" : W,
                                        },
                                      }),
                                    },
                                    t
                                  )
                                ),
                              }),
                              q > 0 &&
                                e.jsxs("p", {
                                  className: "text-xs mt-2",
                                  style: { color: v },
                                  children: [
                                    q === 1 && "Muito ruim 😞",
                                    q === 2 && "Ruim 😕",
                                    q === 3 && "Regular 😐",
                                    q === 4 && "Bom 😊",
                                    q === 5 && "Excelente! 🤩",
                                  ],
                                }),
                            ],
                          }),
                          e.jsx(fs, {
                            value: ne,
                            onChange: (t) => Z(t.target.value),
                            placeholder: "Deixe um comentário (opcional)...",
                            className: "resize-none text-sm",
                            style: { backgroundColor: X, borderColor: W },
                            rows: 3,
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(N, {
                                variant: "outline",
                                size: "sm",
                                className: "flex-1",
                                onClick: () => {
                                  he(!1), F(0), Z("");
                                },
                                style: { borderColor: W },
                                children: "Cancelar",
                              }),
                              e.jsx(N, {
                                size: "sm",
                                className: "flex-1 text-white",
                                style: { backgroundColor: c.primary_color },
                                onClick: Pe,
                                disabled: q === 0 || R,
                                children: R
                                  ? e.jsx(Ie, {
                                      className: "w-4 h-4 animate-spin",
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(ke, {
                                          className: "w-4 h-4 mr-1",
                                        }),
                                        "Enviar",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : e.jsxs("button", {
                        className:
                          "w-full flex items-center justify-center gap-3 py-2",
                        onClick: () => he(!0),
                        children: [
                          e.jsx("div", {
                            className: "flex items-center gap-0.5",
                            children: [1, 2, 3, 4, 5].map((t) =>
                              e.jsx(
                                ke,
                                { className: "w-5 h-5", style: { color: W } },
                                t
                              )
                            ),
                          }),
                          e.jsx("span", {
                            className: "text-sm font-medium",
                            style: { color: c.primary_color },
                            children: "Avaliar atendimento",
                          }),
                        ],
                      }),
                }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "border-t",
          style: { borderColor: W },
          children: [
            e.jsxs("button", {
              className: "w-full p-3 flex items-center justify-between",
              style: { backgroundColor: I },
              onClick: () => V(!se),
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(us, {
                      className: "w-4 h-4",
                      style: { color: c.primary_color },
                    }),
                    e.jsx("span", {
                      className: "font-bold text-sm",
                      children: "Chat com o Técnico",
                    }),
                    J &&
                      e.jsx(H, {
                        variant: "secondary",
                        className: "text-[9px]",
                        children: "Arquivado",
                      }),
                    f.length > 0 &&
                      e.jsx(H, {
                        variant: "outline",
                        className: "text-[9px]",
                        children: f.length,
                      }),
                  ],
                }),
                se
                  ? e.jsx(Rs, { className: "w-4 h-4", style: { color: v } })
                  : e.jsx(Ts, { className: "w-4 h-4", style: { color: v } }),
              ],
            }),
            se &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx("div", {
                    className: "p-3 max-h-48 overflow-y-auto",
                    style: { backgroundColor: X },
                    children: e.jsxs("div", {
                      className: "space-y-2.5",
                      children: [
                        J &&
                          e.jsxs("div", {
                            className: "p-3 rounded-xl text-center",
                            style: { backgroundColor: I },
                            children: [
                              e.jsx(ze, {
                                className: "w-6 h-6 mx-auto mb-1.5 opacity-40",
                              }),
                              e.jsx("p", {
                                className: "font-semibold text-xs mb-0.5",
                                children: "Chat Finalizado",
                              }),
                              e.jsx("p", {
                                className: "text-[10px]",
                                style: { color: v },
                                children: "Use WhatsApp para novas mensagens.",
                              }),
                            ],
                          }),
                        f.length === 0 &&
                          !J &&
                          e.jsxs("div", {
                            className: "text-center py-4",
                            children: [
                              e.jsx(us, {
                                className: "w-8 h-8 mx-auto mb-1.5 opacity-20",
                              }),
                              e.jsx("p", {
                                className: "text-xs",
                                style: { color: v },
                                children: "Nenhuma mensagem ainda",
                              }),
                            ],
                          }),
                        f.map((t) =>
                          e.jsx(
                            "div",
                            {
                              className: `flex ${
                                t.sender_type === "client"
                                  ? "justify-end"
                                  : "justify-start"
                              }`,
                              children: e.jsxs("div", {
                                className: `max-w-[85%] rounded-2xl px-3.5 py-2 ${
                                  t.sender_type === "client"
                                    ? "rounded-br-md"
                                    : "rounded-bl-md"
                                }`,
                                style: {
                                  backgroundColor:
                                    t.sender_type === "client"
                                      ? c.primary_color
                                      : I,
                                  color:
                                    t.sender_type === "client" ? "#fff" : we,
                                },
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[9px] font-semibold mb-0.5",
                                    style: {
                                      color:
                                        t.sender_type === "client"
                                          ? "rgba(255,255,255,0.8)"
                                          : c.primary_color,
                                    },
                                    children:
                                      t.sender_type === "client"
                                        ? i?.client_name || "Você"
                                        : "Técnico",
                                  }),
                                  t.media_url &&
                                    e.jsx("a", {
                                      href: t.media_url,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      className: "block mb-1.5",
                                      children: e.jsx("img", {
                                        src: t.media_url,
                                        alt: "Anexo",
                                        className:
                                          "max-w-full h-auto rounded-lg max-h-32 object-cover",
                                      }),
                                    }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs whitespace-pre-wrap break-words",
                                    children: t.message,
                                  }),
                                  e.jsx("p", {
                                    className: "text-[9px] mt-0.5",
                                    style: {
                                      color:
                                        t.sender_type === "client"
                                          ? "rgba(255,255,255,0.6)"
                                          : v,
                                    },
                                    children: xs(
                                      new Date(t.created_at),
                                      "HH:mm",
                                      { locale: Ze }
                                    ),
                                  }),
                                ],
                              }),
                            },
                            t.id
                          )
                        ),
                        e.jsx("div", { ref: $e }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    className: "p-3 border-t",
                    style: { borderColor: W },
                    children: J
                      ? e.jsxs("div", {
                          className:
                            "flex items-center justify-center gap-2 py-1",
                          children: [
                            e.jsx("p", {
                              className: "text-[10px]",
                              style: { color: v },
                              children: "Chat encerrado",
                            }),
                            c.show_whatsapp &&
                              m?.whatsapp &&
                              e.jsxs(N, {
                                variant: "outline",
                                size: "sm",
                                className: "gap-1.5 h-7 text-xs",
                                style: {
                                  borderColor: c.primary_color,
                                  color: c.primary_color,
                                },
                                onClick: S,
                                children: [
                                  e.jsx(Me, { className: "w-3 h-3" }),
                                  "WhatsApp",
                                ],
                              }),
                          ],
                        })
                      : e.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            e.jsx("input", {
                              type: "file",
                              accept: "image/*",
                              ref: oe,
                              onChange: M,
                              className: "hidden",
                            }),
                            e.jsx(N, {
                              type: "button",
                              variant: "outline",
                              size: "icon",
                              className: "h-9 w-9 flex-shrink-0",
                              onClick: () => oe.current?.click(),
                              disabled: ee,
                              style: { borderColor: W },
                              children: ee
                                ? e.jsx(Ie, {
                                    className: "w-4 h-4 animate-spin",
                                  })
                                : e.jsx(ga, {
                                    className: "w-4 h-4",
                                    style: { color: G },
                                  }),
                            }),
                            e.jsx(xe, {
                              value: h,
                              onChange: (t) => Q(t.target.value),
                              placeholder: "Escreva sua mensagem...",
                              className: "flex-1 h-9 text-sm",
                              style: { backgroundColor: I, borderColor: W },
                              onKeyDown: (t) => {
                                t.key === "Enter" &&
                                  !t.shiftKey &&
                                  (t.preventDefault(), ge());
                              },
                            }),
                            e.jsx(N, {
                              onClick: ge,
                              disabled: !h.trim() || le,
                              className: "h-9 px-3 text-white flex-shrink-0",
                              style: { backgroundColor: c.primary_color },
                              children: le
                                ? e.jsx(Ie, {
                                    className: "w-4 h-4 animate-spin",
                                  })
                                : e.jsx(hs, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
}
function gl({
  product: r,
  config: l,
  cartItem: i,
  formatCurrency: c,
  onViewDetails: m,
  onUpdateQuantity: w,
  index: y = 0,
  categoryName: $,
}) {
  const { ref: f, isVisible: L } = ua({ threshold: 0.1 }),
    [h, Q] = d.useState(!1),
    le = l.theme === "dark",
    re = le ? "#0a0a0a" : "#ffffff",
    C = le ? "#171717" : "#f5f5f5",
    _ = le ? "#fafafa" : "#0a0a0a",
    J = le ? "#a3a3a3" : "#525252",
    A = "#737373",
    ee = le ? "#262626" : "#e5e5e5",
    T = r.stock_quantity === 0,
    a = r.stock_quantity > 0 && r.stock_quantity <= 3,
    fe = r.stock_quantity > 10,
    k = r.discount_percent || 0,
    Y = k > 0,
    se = Y ? r.price / (1 - k / 100) : r.price;
  return (
    se - r.price,
    e.jsxs("div", {
      ref: f,
      className: Ne(
        "group relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-500",
        L ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      ),
      style: {
        backgroundColor: re,
        border: `1px solid ${ee}`,
        transitionDelay: `${y * 100}ms`,
        transform: h ? "translateY(-8px) scale(1.02)" : void 0,
        boxShadow: h
          ? `0 20px 40px -10px ${l.primary_color}30, 0 10px 20px -5px rgba(0,0,0,0.2)`
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },
      onMouseEnter: () => Q(!0),
      onMouseLeave: () => Q(!1),
      children: [
        !T &&
          Y &&
          e.jsxs("div", {
            className:
              "absolute top-0 left-0 z-20 px-2.5 sm:px-4 py-1 sm:py-2 text-white font-bold text-[10px] sm:text-sm flex items-center gap-1",
            style: {
              background: `linear-gradient(135deg, ${l.primary_color} 0%, ${l.secondary_color} 100%)`,
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
            },
            children: [
              e.jsx(Qe, { className: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" }),
              k,
              "% OFF",
            ],
          }),
        fe &&
          !T &&
          e.jsxs("div", {
            className:
              "absolute top-0 right-0 z-20 px-2 sm:px-3 py-1 sm:py-1.5 text-white font-bold text-[8px] sm:text-[10px] uppercase tracking-wider",
            style: {
              backgroundColor: "#f59e0b",
              clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
            },
            children: [
              e.jsx(Ue, {
                className: "w-2.5 h-2.5 sm:w-3 sm:h-3 inline mr-0.5 sm:mr-1",
              }),
              "Popular",
            ],
          }),
        e.jsxs("div", {
          className: "relative aspect-square overflow-hidden cursor-pointer",
          onClick: m,
          children: [
            r.image_url
              ? e.jsx("img", {
                  src: r.image_url,
                  alt: r.name,
                  className: Ne(
                    "w-full h-full object-cover transition-all duration-700",
                    h ? "scale-110 brightness-105" : "scale-100"
                  ),
                })
              : e.jsx("div", {
                  className: "w-full h-full flex items-center justify-center",
                  style: { backgroundColor: C },
                  children: e.jsx(Re, { className: "w-16 h-16 opacity-20" }),
                }),
            e.jsx("div", {
              className: Ne(
                "absolute inset-0 transition-opacity duration-300",
                h ? "opacity-100" : "opacity-0"
              ),
              style: {
                background: `linear-gradient(to top, ${re} 0%, transparent 60%)`,
              },
            }),
            e.jsx("div", {
              className: Ne(
                "absolute inset-0 flex items-center justify-center transition-all duration-500",
                h ? "opacity-100" : "opacity-0"
              ),
              children: e.jsxs(N, {
                className: Ne(
                  "gap-2 text-white font-semibold shadow-2xl transition-all duration-300",
                  h ? "translate-y-0 scale-100" : "translate-y-4 scale-90"
                ),
                style: { backgroundColor: l.primary_color },
                children: [e.jsx(Ss, { className: "w-4 h-4" }), "Ver Detalhes"],
              }),
            }),
            e.jsxs("div", {
              className:
                "absolute top-2 right-2 sm:top-3 sm:right-3 flex flex-col gap-1 sm:gap-1.5 z-10",
              children: [
                r.brand &&
                  e.jsx("span", {
                    className: Ne(
                      "text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md transition-all",
                      h ? "scale-110" : "scale-100"
                    ),
                    style: {
                      backgroundColor: le
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(0,0,0,0.08)",
                      color: _,
                    },
                    children: r.brand,
                  }),
                a &&
                  e.jsxs(H, {
                    className: Ne(
                      "text-[8px] sm:text-[10px] bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transition-all",
                      "animate-pulse"
                    ),
                    children: [
                      e.jsx(ya, {
                        className: "w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1",
                      }),
                      "Últimas ",
                      r.stock_quantity,
                      "!",
                    ],
                  }),
              ],
            }),
            e.jsx("div", {
              className: "absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10",
              children: e.jsx(H, {
                className: Ne(
                  "text-[8px] sm:text-[10px] font-semibold shadow-lg text-white transition-all duration-300",
                  h ? "translate-x-1" : "translate-x-0"
                ),
                style: { backgroundColor: l.primary_color },
                children: $ || r.category,
              }),
            }),
            T &&
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-black/75 flex items-center justify-center z-20 backdrop-blur-sm",
                children: e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx(Re, {
                      className: "w-10 h-10 mx-auto text-white/50 mb-2",
                    }),
                    e.jsx("span", {
                      className: "text-white font-bold text-lg",
                      children: "ESGOTADO",
                    }),
                  ],
                }),
              }),
          ],
        }),
        e.jsxs("div", {
          className: "p-2 sm:p-4 space-y-1.5 sm:space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-1 sm:gap-1.5 mb-0.5 sm:mb-2",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-0.5 px-1.5 sm:px-2 py-0.5 rounded-full text-[7px] sm:text-[10px] font-semibold",
                  style: {
                    backgroundColor: `${l.primary_color}15`,
                    color: l.primary_color,
                  },
                  children: [
                    e.jsx(Ce, { className: "w-2 h-2 sm:w-3 sm:h-3" }),
                    "Original",
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-0.5 px-1.5 sm:px-2 py-0.5 rounded-full text-[7px] sm:text-[10px] font-semibold",
                  style: { backgroundColor: "#8b5cf615", color: "#8b5cf6" },
                  children: [
                    e.jsx(cs, { className: "w-2 h-2 sm:w-3 sm:h-3" }),
                    "Digital",
                  ],
                }),
              ],
            }),
            e.jsx("h4", {
              className: Ne(
                "font-semibold text-[11px] sm:text-sm line-clamp-2 min-h-[1.75rem] sm:min-h-[2.5rem] leading-snug cursor-pointer transition-colors duration-200"
              ),
              style: { color: h ? l.primary_color : _ },
              onClick: m,
              children: r.name,
            }),
            e.jsxs("div", {
              className: "flex items-center gap-0.5 sm:gap-2",
              children: [
                e.jsx("div", {
                  className: "flex items-center gap-0.5",
                  children: [1, 2, 3, 4, 5].map((V) =>
                    e.jsx(
                      ke,
                      {
                        className: "w-2 h-2 sm:w-3.5 sm:h-3.5",
                        fill: "#facc15",
                        style: { color: "#facc15" },
                      },
                      V
                    )
                  ),
                }),
                e.jsx("span", {
                  className: "text-[9px] sm:text-xs font-medium",
                  style: { color: A },
                  children: "4.9",
                }),
                e.jsx("span", {
                  className:
                    "hidden sm:inline text-[10px] px-1.5 py-0.5 rounded-full font-medium",
                  style: {
                    backgroundColor: `${l.primary_color}10`,
                    color: l.primary_color,
                  },
                  children: "+500 vendidos",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-0.5 sm:space-y-1",
              children: [
                Y &&
                  e.jsxs("div", {
                    className: "flex items-center gap-1 sm:gap-2",
                    children: [
                      e.jsx("p", {
                        className: "text-[9px] sm:text-xs line-through",
                        style: { color: A },
                        children: c(se),
                      }),
                      e.jsxs("span", {
                        className:
                          "text-[7px] sm:text-[10px] font-bold px-1 sm:px-1.5 py-0.5 rounded",
                        style: {
                          backgroundColor: `${l.primary_color}20`,
                          color: l.primary_color,
                        },
                        children: ["-", k, "%"],
                      }),
                    ],
                  }),
                e.jsx("p", {
                  className: "text-base sm:text-2xl font-bold",
                  style: { color: _ },
                  children: c(r.price),
                }),
                e.jsx("p", {
                  className: "text-[9px] sm:text-xs font-medium",
                  style: { color: l.primary_color },
                  children: "PIX parcelado em até 12x",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "hidden sm:flex items-center gap-3 py-2.5 px-3 rounded-xl",
              style: {
                background: `linear-gradient(135deg, ${l.primary_color}10 0%, ${l.secondary_color}10 100%)`,
                border: `1px solid ${l.primary_color}20`,
              },
              children: [
                e.jsx("div", {
                  className:
                    "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                  style: { backgroundColor: `${l.primary_color}20` },
                  children: e.jsx(Ee, {
                    className: "w-5 h-5",
                    style: { color: l.primary_color },
                  }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "text-xs font-bold truncate",
                      style: { color: l.primary_color },
                      children: "Entrega Rápida",
                    }),
                    e.jsx("p", {
                      className: "text-[10px] truncate",
                      style: { color: J },
                      children: "Receba após pagamento",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "pt-1 sm:pt-2",
              children: i
                ? e.jsxs("div", {
                    className:
                      "flex items-center justify-between p-1.5 sm:p-2 rounded-lg sm:rounded-xl",
                    style: {
                      backgroundColor: `${l.primary_color}15`,
                      border: `1px solid ${l.primary_color}30`,
                    },
                    children: [
                      e.jsx(N, {
                        size: "icon",
                        variant: "ghost",
                        className: Ne(
                          "h-7 w-7 sm:h-9 sm:w-9 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95"
                        ),
                        onClick: (V) => {
                          V.stopPropagation(), w(-1);
                        },
                        children: e.jsx(Bs, {
                          className: "w-3 h-3 sm:w-4 sm:h-4",
                        }),
                      }),
                      e.jsx("span", {
                        className:
                          "font-bold text-base sm:text-lg min-w-[30px] sm:min-w-[40px] text-center",
                        style: { color: l.primary_color },
                        children: i.quantity,
                      }),
                      e.jsx(N, {
                        size: "icon",
                        variant: "ghost",
                        className:
                          "h-7 w-7 sm:h-9 sm:w-9 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95",
                        onClick: (V) => {
                          V.stopPropagation(), w(1);
                        },
                        children: e.jsx(zs, {
                          className: "w-3 h-3 sm:w-4 sm:h-4",
                        }),
                      }),
                    ],
                  })
                : e.jsxs(N, {
                    className: Ne(
                      "w-full gap-1.5 sm:gap-2 h-8 sm:h-12 font-bold text-white text-[11px] sm:text-sm rounded-lg sm:rounded-xl shadow-lg transition-all duration-300",
                      "hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                    ),
                    style: {
                      background: `linear-gradient(135deg, ${l.primary_color} 0%, ${l.secondary_color} 100%)`,
                      boxShadow: h
                        ? `0 10px 30px -5px ${l.primary_color}50`
                        : void 0,
                    },
                    onClick: (V) => {
                      V.stopPropagation(), m();
                    },
                    disabled: T,
                    children: [
                      e.jsx(Ye, {
                        className: Ne(
                          "w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform",
                          h ? "animate-bounce" : ""
                        ),
                      }),
                      T ? "Indisponível" : "Comprar",
                    ],
                  }),
            }),
            e.jsxs("div", {
              className:
                "flex items-center justify-between pt-1.5 sm:pt-3 mt-1 sm:mt-2",
              style: { borderTop: `1px solid ${ee}` },
              children: [
                e.jsxs("span", {
                  className:
                    "flex items-center gap-0.5 text-[7px] sm:text-[10px] font-medium",
                  style: { color: J },
                  children: [
                    e.jsx(Xe, {
                      className: "w-2 h-2 sm:w-3.5 sm:h-3.5",
                      style: { color: l.primary_color },
                    }),
                    "Garantia",
                  ],
                }),
                e.jsxs("span", {
                  className:
                    "flex items-center gap-0.5 text-[7px] sm:text-[10px] font-medium",
                  style: { color: J },
                  children: [
                    e.jsx(ze, {
                      className: "w-2 h-2 sm:w-3.5 sm:h-3.5",
                      style: { color: l.primary_color },
                    }),
                    "Seguro",
                  ],
                }),
                e.jsxs("span", {
                  className:
                    "flex items-center gap-0.5 text-[7px] sm:text-[10px] font-medium",
                  style: { color: J },
                  children: [
                    e.jsx(Ce, {
                      className: "w-2 h-2 sm:w-3.5 sm:h-3.5",
                      style: { color: l.primary_color },
                    }),
                    "Original",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function bl({
  config: r,
  storeName: l,
  productsCount: i,
  onScrollToProducts: c,
}) {
  const { ref: m, isVisible: w } = ua(),
    y = r.theme === "dark",
    $ = [
      { icon: Ee, text: "Entrega Instantânea", color: "#00a650" },
      { icon: Te, text: "100% Original", color: "#3483fa" },
      { icon: is, text: "12x Sem Juros", color: "#ff7733" },
      { icon: Oe, text: "Suporte 24/7", color: "#8b5cf6" },
    ];
  return e.jsxs("div", {
    ref: m,
    className: Ne(
      "relative overflow-hidden rounded-xl sm:rounded-3xl transition-all duration-700",
      w ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    ),
    style: {
      background: `linear-gradient(135deg, ${r.primary_color} 0%, ${
        r.secondary_color
      } 50%, ${y ? "#000" : "#1a1a2e"} 100%)`,
    },
    children: [
      e.jsxs("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [
          e.jsx("div", {
            className:
              "absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 animate-pulse",
            style: { backgroundColor: r.accent_color },
          }),
          e.jsx("div", {
            className:
              "absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10",
            style: { backgroundColor: "#fff" },
          }),
          e.jsx("div", {
            className:
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5",
            style: {
              background: `radial-gradient(circle, ${r.primary_color} 0%, transparent 70%)`,
              animation: "pulse 3s ease-in-out infinite",
            },
          }),
          e.jsx("div", {
            className: "absolute top-10 left-10 opacity-20 animate-bounce",
            style: { animationDelay: "0s" },
            children: e.jsx(Re, { className: "w-8 h-8 text-white" }),
          }),
          e.jsx("div", {
            className: "absolute top-20 right-20 opacity-20 animate-bounce",
            style: { animationDelay: "0.5s" },
            children: e.jsx(ke, { className: "w-6 h-6 text-white" }),
          }),
          e.jsx("div", {
            className: "absolute bottom-10 right-10 opacity-20 animate-bounce",
            style: { animationDelay: "1s" },
            children: e.jsx(Ue, { className: "w-7 h-7 text-white" }),
          }),
        ],
      }),
      e.jsx("div", {
        className: "relative p-4 sm:p-6 md:p-10 lg:p-12 overflow-hidden",
        children: e.jsxs("div", {
          className:
            "flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8",
          children: [
            e.jsxs("div", {
              className: "flex-1 min-w-0 space-y-3 sm:space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex flex-wrap items-center gap-1.5 sm:gap-2",
                  children: [
                    e.jsxs(H, {
                      className:
                        "px-2 sm:px-4 py-1 sm:py-1.5 text-[9px] sm:text-sm font-bold bg-white/20 text-white backdrop-blur-sm border-0",
                      children: [
                        e.jsx(Is, {
                          className:
                            "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-400",
                        }),
                        "Loja Premium",
                      ],
                    }),
                    e.jsxs(H, {
                      className:
                        "px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs font-semibold",
                      style: { backgroundColor: "#00a650", color: "#fff" },
                      children: [
                        e.jsx(Ce, {
                          className: "w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1",
                        }),
                        "Verificado",
                      ],
                    }),
                    e.jsxs(H, {
                      className:
                        "px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs font-semibold bg-purple-500 text-white",
                      children: [
                        e.jsx(cs, {
                          className: "w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1",
                        }),
                        "Digital",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "min-w-0",
                  children: [
                    e.jsx("h1", {
                      className:
                        "text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-3 leading-tight break-words",
                      children: l,
                    }),
                    e.jsx("p", {
                      className:
                        "text-xs sm:text-lg md:text-xl text-white/80 max-w-xl",
                      children:
                        "Licenças e produtos digitais originais com entrega instantânea",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex flex-wrap items-center gap-1.5 sm:gap-4 text-white/90",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
                      children: [
                        e.jsx("div", {
                          className: "flex -space-x-0.5",
                          children: [1, 2, 3, 4, 5].map((f) =>
                            e.jsx(
                              ke,
                              {
                                className:
                                  "w-2.5 h-2.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400",
                              },
                              f
                            )
                          ),
                        }),
                        e.jsx("span", {
                          className: "font-bold text-[10px] sm:text-sm",
                          children: "4.9",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
                      children: [
                        e.jsx(pl, { className: "w-2.5 h-2.5 sm:w-4 sm:h-4" }),
                        e.jsxs("span", {
                          className: "font-medium text-[10px] sm:text-sm",
                          children: [i, "+ produtos"],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full",
                      children: [
                        e.jsx(Ee, {
                          className:
                            "w-2.5 h-2.5 sm:w-4 sm:h-4 text-yellow-400",
                        }),
                        e.jsx("span", {
                          className: "font-medium text-[10px] sm:text-sm",
                          children: "5.000+ entregas",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-xl border border-white/20",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0",
                      children: e.jsx(Ee, {
                        className: "w-4 h-4 sm:w-6 sm:h-6 text-white",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0",
                      children: [
                        e.jsx("p", {
                          className:
                            "font-bold text-white text-xs sm:text-base",
                          children: "Entrega Rápida!",
                        }),
                        e.jsx("p", {
                          className:
                            "text-[10px] sm:text-sm text-white/70 truncate",
                          children: "Receba após confirmação do pagamento",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs(N, {
                  size: "lg",
                  className:
                    "gap-2 sm:gap-3 h-10 sm:h-14 px-4 sm:px-8 text-xs sm:text-lg font-bold bg-white hover:bg-white/90 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/25 active:scale-95 group w-full sm:w-auto",
                  style: { color: r.primary_color },
                  onClick: c,
                  children: [
                    e.jsx(Qe, {
                      className:
                        "w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform group-hover:rotate-12",
                    }),
                    "Explorar Produtos",
                    e.jsx(ks, {
                      className:
                        "w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "hidden sm:block lg:w-80 p-4 sm:p-6 rounded-2xl backdrop-blur-xl",
              style: {
                backgroundColor: y
                  ? "rgba(0,0,0,0.4)"
                  : "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.2)",
              },
              children: [
                e.jsxs("h3", {
                  className:
                    "text-white font-bold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base",
                  children: [
                    e.jsx(Te, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
                    "Por que comprar aqui?",
                  ],
                }),
                e.jsx("div", {
                  className: "grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3",
                  children: $.map((f, L) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/10",
                        style: { backgroundColor: "rgba(255,255,255,0.05)" },
                        children: [
                          e.jsx("div", {
                            className:
                              "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0",
                            style: { backgroundColor: `${f.color}20` },
                            children: e.jsx(f.icon, {
                              className: "w-4 h-4 sm:w-5 sm:h-5",
                              style: { color: f.color },
                            }),
                          }),
                          e.jsx("span", {
                            className:
                              "text-white font-medium text-xs sm:text-sm",
                            children: f.text,
                          }),
                        ],
                      },
                      L
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const Es = {
  pending: {
    label: "Recebido",
    color: "#f59e0b",
    bgColor: "rgba(245,158,11,0.15)",
    icon: Be,
  },
  in_progress: {
    label: "Em Andamento",
    color: "#3b82f6",
    bgColor: "rgba(59,130,246,0.15)",
    icon: Fe,
  },
  completed: {
    label: "Concluído",
    color: "#10b981",
    bgColor: "rgba(16,185,129,0.15)",
    icon: Ce,
  },
  cancelled: {
    label: "Cancelado",
    color: "#ef4444",
    bgColor: "rgba(239,68,68,0.15)",
    icon: ls,
  },
};
function la({
  trackedOrder: r,
  config: l,
  unlocker: i,
  formatCurrency: c,
  onBack: m,
  onOrderUpdate: w,
}) {
  const { toast: y } = js(),
    $ = Ma(),
    [f, L] = d.useState([]),
    [h, Q] = d.useState(""),
    [le, re] = d.useState(!1),
    [C, _] = d.useState(null),
    [J, A] = d.useState(!1),
    [ee, T] = d.useState(!1),
    [a, fe] = d.useState(!1),
    [k, Y] = d.useState(!1),
    se = d.useRef(null),
    V = d.useRef(null),
    [$e, oe] = d.useState(!1),
    [ae, he] = d.useState(0),
    [q, F] = d.useState(0),
    [ue, je] = d.useState(""),
    [ne, Z] = d.useState(!1),
    [R, ve] = d.useState(!1),
    K = l.theme === "dark",
    O = K ? "#000000" : "#f8fafc",
    U = K ? "#0a0a0a" : "#ffffff",
    X = K ? "#171717" : "#f1f5f9",
    I = K ? "#fafafa" : "#0f172a",
    we = K ? "#a3a3a3" : "#475569",
    G = K ? "#737373" : "#94a3b8",
    v = K ? "#262626" : "#e2e8f0",
    W = l.logo_url || i?.logo_url;
  d.useEffect(() => {
    P(), u();
  }, [r?.order_id]),
    d.useEffect(() => {
      if (!r) return;
      const t = b
        .channel(`customer-area-order-${r.order_id}`)
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "unlocker_orders_public",
            filter: `order_id=eq.${r.order_id}`,
          },
          (x) => {
            w(x.new);
          }
        )
        .subscribe();
      return () => {
        b.removeChannel(t);
      };
    }, [r?.order_id]),
    d.useEffect(() => {
      if (!C) return;
      const t = b
        .channel(`customer-area-chat-${C}`)
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "unlocker_support_messages",
            filter: `ticket_id=eq.${C}`,
          },
          (x) => {
            L((n) => (n.some((j) => j.id === x.new.id) ? n : [...n, x.new]));
          }
        )
        .subscribe();
      return () => {
        b.removeChannel(t);
      };
    }, [C]),
    d.useEffect(() => {
      se.current && se.current.scrollIntoView({ behavior: "smooth" });
    }, [f]);
  const u = async () => {
      if (r)
        try {
          const { data: t } = await b
            .from("unlocker_order_ratings")
            .select("id, rating")
            .eq("order_id", r.order_id)
            .maybeSingle();
          t && (ve(!0), he(t.rating));
        } catch {}
    },
    P = async () => {
      if (r)
        try {
          const { data: t } = await b
            .from("unlocker_support_tickets")
            .select("id, is_archived, status")
            .eq("order_id", r.order_id)
            .maybeSingle();
          if (t) {
            _(t.id), A(t.is_archived || t.status === "closed");
            const { data: x } = await b
              .from("unlocker_support_messages")
              .select("*")
              .eq("ticket_id", t.id)
              .order("created_at", { ascending: !0 });
            L(x || []);
          } else _(null), L([]);
        } catch {}
    },
    ge = async () => {
      if (!(!r || !h.trim())) {
        re(!0);
        try {
          let t = C;
          if (!t) {
            const n = r.client_name || "Cliente",
              { data: j, error: z } = await b
                .from("unlocker_support_tickets")
                .insert({
                  unlocker_id: r.unlocker_id,
                  order_id: r.order_id,
                  client_name: n,
                  client_phone: "",
                  subject: `Pedido ${r.order_number}`,
                  status: "open",
                  priority: "normal",
                })
                .select()
                .single();
            if (z) throw z;
            (t = j.id), _(t);
          }
          const { error: x } = await b
            .from("unlocker_support_messages")
            .insert({
              ticket_id: t,
              sender_type: "client",
              message: h.trim(),
              is_read: !1,
            });
          if (x) throw x;
          Q("");
        } catch {
          y({ title: "Erro ao enviar mensagem", variant: "destructive" });
        } finally {
          re(!1);
        }
      }
    },
    M = async (t) => {
      const x = t.target.files?.[0];
      if (!(!x || !r)) {
        if (x.size > 5 * 1024 * 1024) {
          y({ title: "Imagem muito grande (máx 5MB)", variant: "destructive" });
          return;
        }
        T(!0);
        try {
          let n = C;
          if (!n) {
            const De = r.client_name || "Cliente",
              { data: Ae, error: He } = await b
                .from("unlocker_support_tickets")
                .insert({
                  unlocker_id: r.unlocker_id,
                  order_id: r.order_id,
                  client_name: De,
                  client_phone: "",
                  subject: `Pedido ${r.order_number}`,
                  status: "open",
                  priority: "normal",
                })
                .select()
                .single();
            if (He) throw He;
            (n = Ae.id), _(n);
          }
          const j = `${n}/${Date.now()}-${x.name}`,
            { error: z } = await b.storage
              .from("support-chat-images")
              .upload(j, x);
          if (z) throw z;
          const {
            data: { publicUrl: p },
          } = b.storage.from("support-chat-images").getPublicUrl(j);
          await b
            .from("unlocker_support_messages")
            .insert({
              ticket_id: n,
              sender_type: "client",
              message: "📷 Imagem enviada",
              media_url: p,
              media_type: "image",
              is_read: !1,
            }),
            y({ title: "Imagem enviada!" });
        } catch {
          y({ title: "Erro ao enviar imagem", variant: "destructive" });
        } finally {
          T(!1), V.current && (V.current.value = "");
        }
      }
    },
    de = (t, x) => {
      navigator.clipboard.writeText(t),
        y({ title: x ? `${x} copiado!` : "Copiado!" });
    },
    S = () => {
      i?.whatsapp &&
        window.open(`https://wa.me/${i.whatsapp.replace(/\D/g, "")}`, "_blank");
    },
    Pe = async () => {
      if (!(!r || ae === 0)) {
        Z(!0);
        try {
          const { error: t } = await b
            .from("unlocker_order_ratings")
            .insert({
              order_id: r.order_id,
              unlocker_id: r.unlocker_id,
              rating: ae,
              comment: ue.trim() || null,
              client_name: r.client_name,
            });
          if (t) throw t;
          if (C) {
            const n = `📊 **Avaliação Recebida!**

${"⭐".repeat(ae)} (${ae}/5)
${
  ue
    ? `
💬 "${ue}"`
    : ""
}

✅ Obrigado pelo feedback!`;
            await b
              .from("unlocker_support_messages")
              .insert({
                ticket_id: C,
                sender_type: "system",
                message: n,
                is_read: !1,
              });
          }
          ve(!0),
            oe(!1),
            y({
              title: "Obrigado pela avaliação!",
              description: "Sua opinião é muito importante para nós.",
            });
        } catch (t) {
          t.code === "23505"
            ? (y({
                title: "Você já avaliou este pedido",
                variant: "destructive",
              }),
              ve(!0))
            : y({ title: "Erro ao enviar avaliação", variant: "destructive" });
        } finally {
          Z(!1);
        }
      }
    },
    be = r.order_type === "product",
    Le = r.status === "completed" && r.login_credentials,
    ce = r.login_credentials,
    me = Es[r.status] || Es.pending,
    pe = me.icon,
    ns = r.status === "completed",
    E =
      r.anydesk_id ||
      r.service_description?.match(/AnyDesk:\s*([^\n]+)/)?.[1]?.trim(),
    ds = [
      r.device_brand && {
        icon: ws,
        label: "Dispositivo",
        value: `${r.device_brand} ${r.device_model || ""}`,
      },
      r.imei_last4 && { icon: _s, label: "IMEI", value: `****${r.imei_last4}` },
      E && E !== "Não informado" && { icon: ys, label: "AnyDesk", value: E },
      {
        icon: xa,
        label: "Entrada",
        value: xs(new Date(r.created_at), "dd/MM/yy HH:mm", { locale: Ze }),
      },
    ].filter(Boolean);
  return e.jsxs("div", {
    className: Ne("min-h-screen flex flex-col", K && "dark"),
    style: { backgroundColor: O, color: I },
    children: [
      e.jsx("header", {
        className: "sticky top-0 z-40 border-b backdrop-blur-xl",
        style: {
          backgroundColor: K ? "rgba(0,0,0,0.95)" : "rgba(255,255,255,0.95)",
          borderColor: v,
        },
        children: e.jsx("div", {
          className: "px-3 py-2.5",
          children: e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx(N, {
                variant: "ghost",
                size: "icon",
                onClick: m,
                className: "rounded-lg h-9 w-9 flex-shrink-0",
                style: { color: I },
                children: e.jsx(xl, { className: "w-5 h-5" }),
              }),
              W
                ? e.jsx("img", {
                    src: W,
                    alt: i?.store_name || i?.name,
                    className: "h-8 w-auto max-w-[100px] object-contain",
                  })
                : e.jsx("div", {
                    className:
                      "w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0",
                    style: { backgroundColor: l.primary_color },
                    children: (i?.store_name || i?.name || "U")
                      .charAt(0)
                      .toUpperCase(),
                  }),
              e.jsx("div", {
                className: "flex-1 min-w-0",
                children: e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("code", {
                      className: "text-xs font-mono px-2 py-0.5 rounded",
                      style: { backgroundColor: X, color: we },
                      children: r.order_number,
                    }),
                    e.jsxs(H, {
                      className: "text-[10px] px-2 py-0.5 font-semibold",
                      style: {
                        backgroundColor: me.bgColor,
                        color: K ? I : me.color,
                        border: `1px solid ${me.color}40`,
                      },
                      children: [
                        e.jsx(pe, { className: "w-3 h-3 mr-1" }),
                        me.label,
                      ],
                    }),
                  ],
                }),
              }),
              l.show_whatsapp &&
                i?.whatsapp &&
                e.jsxs(N, {
                  size: "sm",
                  className:
                    "h-8 px-3 gap-1.5 text-white text-xs font-semibold flex-shrink-0",
                  style: { backgroundColor: "#25D366" },
                  onClick: S,
                  children: [
                    e.jsx(Me, { className: "w-3.5 h-3.5" }),
                    !$ && "WhatsApp",
                  ],
                }),
            ],
          }),
        }),
      }),
      e.jsx("main", {
        className: "flex-1 overflow-auto",
        children: e.jsxs("div", {
          className: "p-3 space-y-3 max-w-4xl mx-auto",
          children: [
            e.jsx(ye, {
              style: { backgroundColor: U, borderColor: v },
              children: e.jsxs(Se, {
                className: "p-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-start gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                        style: { backgroundColor: me.color },
                        children: e.jsx(pe, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center gap-1.5 mb-0.5",
                            children: e.jsx(H, {
                              variant: "outline",
                              className: "text-[9px] px-1.5 py-0",
                              style: { borderColor: v, color: G },
                              children: be ? "📦 Produto" : "🔧 Serviço",
                            }),
                          }),
                          e.jsx("h1", {
                            className: "text-sm font-bold line-clamp-1",
                            children: r.service_type,
                          }),
                          r.client_name &&
                            e.jsxs("p", {
                              className:
                                "text-xs flex items-center gap-1 mt-0.5",
                              style: { color: G },
                              children: [
                                e.jsx(Ve, { className: "w-3 h-3" }),
                                " ",
                                r.client_name,
                              ],
                            }),
                        ],
                      }),
                      r.value > 0 &&
                        e.jsx("div", {
                          className: "text-right flex-shrink-0",
                          children: e.jsx("p", {
                            className: "text-base font-bold",
                            style: { color: K ? I : l.primary_color },
                            children: c(r.value),
                          }),
                        }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "mt-3 pt-3 border-t",
                    style: { borderColor: v },
                    children: e.jsx("div", {
                      className: "flex items-center justify-between",
                      children: [
                        { status: "pending", label: "Recebido", icon: Be },
                        { status: "in_progress", label: "Andamento", icon: Fe },
                        { status: "completed", label: "Concluído", icon: Ce },
                      ].map((t, x) => {
                        const n = ["pending", "in_progress", "completed"],
                          j = n.indexOf(r.status),
                          z = n.indexOf(t.status),
                          p = j >= z,
                          De = r.status === t.status,
                          Ae = t.icon;
                        return e.jsxs(
                          "div",
                          {
                            className: "flex items-center flex-1",
                            children: [
                              e.jsxs("div", {
                                className: "flex flex-col items-center flex-1",
                                children: [
                                  e.jsx("div", {
                                    className: Ne(
                                      "w-9 h-9 rounded-full flex items-center justify-center transition-all",
                                      De && "ring-2 ring-offset-1 scale-110"
                                    ),
                                    style: {
                                      backgroundColor: p
                                        ? Es[t.status]?.color
                                        : X,
                                      color: p ? "#fff" : G,
                                      border: p ? "none" : `2px dashed ${v}`,
                                      ...(De && {
                                        "--tw-ring-color": l.primary_color,
                                      }),
                                    },
                                    children: e.jsx(Ae, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                  e.jsx("span", {
                                    className: "text-[9px] font-semibold mt-1",
                                    style: { color: p ? I : G },
                                    children: t.label,
                                  }),
                                ],
                              }),
                              x < 2 &&
                                e.jsx("div", {
                                  className:
                                    "h-0.5 w-full max-w-8 mx-1 rounded-full",
                                  style: {
                                    backgroundColor:
                                      j > z ? l.primary_color : v,
                                  },
                                }),
                            ],
                          },
                          t.status
                        );
                      }),
                    }),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "grid grid-cols-2 gap-2",
              children: ds.map((t, x) => {
                const n = t.icon;
                return e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 p-2.5 rounded-lg",
                    style: { backgroundColor: U, border: `1px solid ${v}` },
                    children: [
                      e.jsx(n, {
                        className: "w-4 h-4 flex-shrink-0",
                        style: { color: l.primary_color },
                      }),
                      e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          e.jsx("p", {
                            className: "text-[9px] font-semibold uppercase",
                            style: { color: G },
                            children: t.label,
                          }),
                          e.jsx("p", {
                            className: "text-xs font-bold truncate",
                            children: t.value,
                          }),
                        ],
                      }),
                    ],
                  },
                  x
                );
              }),
            }),
            e.jsxs("div", {
              className: "flex items-center justify-center gap-1.5 py-1",
              children: [
                e.jsx(Vs, { className: "w-3 h-3", style: { color: G } }),
                e.jsxs("span", {
                  className: "text-[10px]",
                  style: { color: G },
                  children: [
                    "Atualizado ",
                    pa(new Date(r.updated_at), { addSuffix: !0, locale: Ze }),
                  ],
                }),
              ],
            }),
            r.notes &&
              e.jsx(ye, {
                style: { backgroundColor: U, borderColor: v },
                children: e.jsx(Se, {
                  className: "p-3",
                  children: e.jsxs("div", {
                    className: "flex items-start gap-2.5",
                    children: [
                      e.jsx(ts, {
                        className: "w-4 h-4 flex-shrink-0 mt-0.5",
                        style: { color: l.primary_color },
                      }),
                      e.jsxs("div", {
                        className: "min-w-0 flex-1",
                        children: [
                          e.jsx("p", {
                            className: "text-[10px] font-bold uppercase mb-1",
                            style: { color: K ? I : l.primary_color },
                            children: "Observações do Técnico",
                          }),
                          e.jsx("p", {
                            className: "text-xs leading-relaxed",
                            style: { color: we },
                            children: r.notes,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            Le &&
              ce &&
              e.jsxs(ye, {
                style: {
                  backgroundColor: U,
                  borderColor: l.primary_color,
                  borderWidth: 2,
                },
                children: [
                  e.jsxs("button", {
                    className: "w-full p-3 flex items-center justify-between",
                    style: { backgroundColor: `${l.primary_color}12` },
                    onClick: () => fe(!a),
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-9 h-9 rounded-lg flex items-center justify-center",
                            style: { backgroundColor: l.primary_color },
                            children: e.jsx(bs, {
                              className: "w-4 h-4 text-white",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-left",
                            children: [
                              e.jsxs("h4", {
                                className:
                                  "font-bold text-sm flex items-center gap-1",
                                children: [
                                  "Suas Credenciais",
                                  e.jsx(Qe, {
                                    className: "w-3.5 h-3.5",
                                    style: { color: l.primary_color },
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-[10px]",
                                style: { color: we },
                                children: "Dados de acesso",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a
                        ? e.jsx(Ts, {
                            className: "w-5 h-5",
                            style: { color: K ? I : l.primary_color },
                          })
                        : e.jsx(Rs, {
                            className: "w-5 h-5",
                            style: { color: K ? I : l.primary_color },
                          }),
                    ],
                  }),
                  a &&
                    e.jsxs(Se, {
                      className: "p-3 pt-0 space-y-2",
                      children: [
                        ce.login_email &&
                          e.jsxs("div", {
                            className:
                              "p-3 rounded-lg flex items-center gap-2.5",
                            style: { backgroundColor: X },
                            children: [
                              e.jsx(gs, {
                                className: "w-4 h-4 flex-shrink-0",
                                style: { color: G },
                              }),
                              e.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[9px] font-semibold uppercase",
                                    style: { color: G },
                                    children: "E-mail / Usuário",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs font-mono font-bold truncate",
                                    children: ce.login_email,
                                  }),
                                ],
                              }),
                              e.jsx(N, {
                                variant: "ghost",
                                size: "icon",
                                className: "h-7 w-7",
                                onClick: () => de(ce.login_email, "E-mail"),
                                children: e.jsx(rs, {
                                  className: "w-3.5 h-3.5",
                                }),
                              }),
                            ],
                          }),
                        ce.login_password &&
                          e.jsxs("div", {
                            className:
                              "p-3 rounded-lg flex items-center gap-2.5",
                            style: { backgroundColor: X },
                            children: [
                              e.jsx(ze, {
                                className: "w-4 h-4 flex-shrink-0 text-warning",
                              }),
                              e.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[9px] font-semibold uppercase",
                                    style: { color: G },
                                    children: "Senha",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs font-mono font-bold truncate",
                                    children: k
                                      ? ce.login_password
                                      : "••••••••",
                                  }),
                                ],
                              }),
                              e.jsx(N, {
                                variant: "ghost",
                                size: "icon",
                                className: "h-7 w-7",
                                onClick: () => Y(!k),
                                children: k
                                  ? e.jsx(ha, { className: "w-3.5 h-3.5" })
                                  : e.jsx(Ss, { className: "w-3.5 h-3.5" }),
                              }),
                              e.jsx(N, {
                                variant: "ghost",
                                size: "icon",
                                className: "h-7 w-7",
                                onClick: () => de(ce.login_password, "Senha"),
                                children: e.jsx(rs, {
                                  className: "w-3.5 h-3.5",
                                }),
                              }),
                            ],
                          }),
                        ce.download_url &&
                          e.jsxs("a", {
                            href: ce.download_url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center justify-center gap-2 p-3 rounded-lg text-white font-semibold text-sm",
                            style: { backgroundColor: l.primary_color },
                            children: [
                              e.jsx(cs, { className: "w-4 h-4" }),
                              "Baixar Produto",
                              e.jsx(Xs, { className: "w-3.5 h-3.5" }),
                            ],
                          }),
                        ce.additional_notes &&
                          e.jsx("div", {
                            className: "p-3 rounded-lg",
                            style: { backgroundColor: X },
                            children: e.jsxs("div", {
                              className: "flex items-start gap-2",
                              children: [
                                e.jsx(Cs, {
                                  className: "w-3.5 h-3.5 flex-shrink-0 mt-0.5",
                                  style: { color: l.primary_color },
                                }),
                                e.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    e.jsx("p", {
                                      className: "text-[10px] font-bold mb-0.5",
                                      style: { color: K ? I : l.primary_color },
                                      children: "Instruções",
                                    }),
                                    e.jsx("p", {
                                      className: "text-xs whitespace-pre-wrap",
                                      style: { color: we },
                                      children: ce.additional_notes,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                ],
              }),
            be &&
              r.status !== "completed" &&
              e.jsx(ye, {
                style: { backgroundColor: U, borderColor: v },
                children: e.jsx(Se, {
                  className: "p-3",
                  children: e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-lg flex items-center justify-center bg-warning/15",
                        children: e.jsx(Re, {
                          className: "w-5 h-5 text-warning",
                        }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-semibold text-sm",
                            children: "Aguardando liberação",
                          }),
                          e.jsx("p", {
                            className: "text-xs",
                            style: { color: G },
                            children:
                              "Credenciais serão exibidas após conclusão.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ns &&
              e.jsx(ye, {
                style: { backgroundColor: U, borderColor: v },
                children: e.jsx(Se, {
                  className: "p-3",
                  children: R
                    ? e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 rounded-lg flex items-center justify-center bg-primary/15",
                            children: e.jsx(ps, {
                              className: "w-5 h-5 text-primary",
                            }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "font-semibold text-sm",
                                children: "Obrigado pela avaliação!",
                              }),
                              e.jsx("div", {
                                className: "flex items-center gap-0.5 mt-0.5",
                                children: [1, 2, 3, 4, 5].map((t) =>
                                  e.jsx(
                                    ke,
                                    {
                                      className: Ne(
                                        "w-4 h-4",
                                        t <= ae
                                          ? "fill-warning text-warning"
                                          : "text-muted-foreground/40"
                                      ),
                                    },
                                    t
                                  )
                                ),
                              }),
                            ],
                          }),
                        ],
                      })
                    : $e
                    ? e.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          e.jsxs("h4", {
                            className:
                              "font-bold text-sm flex items-center gap-2",
                            children: [
                              e.jsx(ke, {
                                className: "w-4 h-4",
                                style: { color: l.primary_color },
                              }),
                              "Avalie o atendimento",
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "flex items-center justify-center gap-1.5",
                            children: [1, 2, 3, 4, 5].map((t) =>
                              e.jsx(
                                "button",
                                {
                                  type: "button",
                                  onMouseEnter: () => F(t),
                                  onMouseLeave: () => F(0),
                                  onClick: () => he(t),
                                  className:
                                    "transition-transform hover:scale-110 active:scale-100",
                                  children: e.jsx(ke, {
                                    className: Ne(
                                      "w-8 h-8",
                                      t <= (q || ae)
                                        ? "fill-warning text-warning"
                                        : "text-muted-foreground/40"
                                    ),
                                  }),
                                },
                                t
                              )
                            ),
                          }),
                          e.jsx(fs, {
                            value: ue,
                            onChange: (t) => je(t.target.value),
                            placeholder: "Comentário opcional...",
                            rows: 2,
                            className: "text-sm",
                            style: {
                              backgroundColor: X,
                              borderColor: v,
                              color: I,
                            },
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsx(N, {
                                variant: "outline",
                                size: "sm",
                                className: "flex-1",
                                style: { borderColor: v, color: I },
                                onClick: () => oe(!1),
                                children: "Cancelar",
                              }),
                              e.jsx(N, {
                                size: "sm",
                                className: "flex-1 text-white font-semibold",
                                style: { backgroundColor: l.primary_color },
                                onClick: Pe,
                                disabled: ae === 0 || ne,
                                children: ne
                                  ? e.jsx(Ie, {
                                      className: "w-4 h-4 animate-spin",
                                    })
                                  : "Enviar",
                              }),
                            ],
                          }),
                        ],
                      })
                    : e.jsxs("button", {
                        className: "w-full flex items-center gap-3",
                        onClick: () => oe(!0),
                        children: [
                          e.jsx("div", {
                            className:
                              "w-10 h-10 rounded-lg flex items-center justify-center",
                            style: { backgroundColor: `${l.primary_color}15` },
                            children: e.jsx(ke, {
                              className: "w-5 h-5",
                              style: { color: l.primary_color },
                            }),
                          }),
                          e.jsxs("div", {
                            className: "text-left",
                            children: [
                              e.jsx("p", {
                                className: "font-semibold text-sm",
                                children: "Avalie este atendimento",
                              }),
                              e.jsx("p", {
                                className: "text-xs",
                                style: { color: G },
                                children: "Sua opinião é importante",
                              }),
                            ],
                          }),
                        ],
                      }),
                }),
              }),
            e.jsx(ye, {
              style: { backgroundColor: U, borderColor: v },
              children: e.jsx(Se, {
                className: "p-3",
                children: e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                      style: { backgroundColor: `${l.primary_color}15` },
                      children: e.jsx(ba, {
                        className: "w-5 h-5",
                        style: { color: l.primary_color },
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsx("p", {
                          className: "font-bold text-sm truncate",
                          children: i?.store_name || i?.name,
                        }),
                        e.jsx("p", {
                          className: "text-[10px]",
                          style: { color: G },
                          children: "Profissional Verificado",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-3 flex-shrink-0",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-1 text-[10px]",
                          style: { color: G },
                          children: [
                            e.jsx(Xe, {
                              className: "w-3 h-3",
                              style: { color: l.primary_color },
                            }),
                            "Seguro",
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-1 text-[10px]",
                          style: { color: G },
                          children: [
                            e.jsx(Oe, {
                              className: "w-3 h-3",
                              style: { color: l.primary_color },
                            }),
                            "Suporte",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            e.jsxs(ye, {
              className: "overflow-hidden",
              style: { backgroundColor: U, borderColor: v },
              children: [
                e.jsxs("div", {
                  className: "py-2.5 px-3 border-b flex items-center gap-2",
                  style: { borderColor: v },
                  children: [
                    e.jsx(us, {
                      className: "w-4 h-4",
                      style: { color: l.primary_color },
                    }),
                    e.jsx("span", {
                      className: "font-bold text-sm",
                      children: "Chat com o Técnico",
                    }),
                    f.length > 0 &&
                      e.jsx(H, {
                        variant: "secondary",
                        className: "text-[10px] px-1.5 py-0 h-4",
                        children: f.length,
                      }),
                  ],
                }),
                e.jsx(os, {
                  className: "h-64 sm:h-80",
                  children: e.jsxs("div", {
                    className: "p-3 space-y-2",
                    children: [
                      f.length === 0
                        ? e.jsxs("div", {
                            className: "text-center py-8",
                            children: [
                              e.jsx(us, {
                                className: "w-10 h-10 mx-auto opacity-20 mb-2",
                              }),
                              e.jsx("p", {
                                className: "text-xs font-medium",
                                style: { color: G },
                                children: "Nenhuma mensagem ainda.",
                              }),
                              e.jsx("p", {
                                className: "text-[10px] mt-0.5",
                                style: { color: G },
                                children: "Envie uma mensagem para iniciar.",
                              }),
                            ],
                          })
                        : f.map((t) =>
                            e.jsx(
                              "div",
                              {
                                className: `flex ${
                                  t.sender_type === "client"
                                    ? "justify-end"
                                    : "justify-start"
                                }`,
                                children: e.jsxs("div", {
                                  className: Ne(
                                    "max-w-[80%] p-2.5 rounded-xl text-sm",
                                    t.sender_type === "client"
                                      ? "rounded-br-sm"
                                      : t.sender_type === "system"
                                      ? "w-full text-center border"
                                      : "rounded-bl-sm"
                                  ),
                                  style: {
                                    backgroundColor:
                                      t.sender_type === "client"
                                        ? l.primary_color
                                        : t.sender_type === "system"
                                        ? `${l.primary_color}10`
                                        : X,
                                    color:
                                      t.sender_type === "client" ? "#fff" : I,
                                    borderColor:
                                      t.sender_type === "system"
                                        ? `${l.primary_color}30`
                                        : void 0,
                                  },
                                  children: [
                                    t.media_url &&
                                      t.media_type === "image" &&
                                      e.jsx("img", {
                                        src: t.media_url,
                                        alt: "Imagem",
                                        className:
                                          "rounded-lg mb-1.5 max-w-full cursor-pointer",
                                        onClick: () =>
                                          window.open(t.media_url, "_blank"),
                                      }),
                                    e.jsx("p", {
                                      className:
                                        "whitespace-pre-wrap break-words text-xs",
                                      children: t.message,
                                    }),
                                    e.jsx("p", {
                                      className: "text-[9px] mt-1 text-right",
                                      style: {
                                        color:
                                          t.sender_type === "client"
                                            ? "rgba(255,255,255,0.7)"
                                            : G,
                                      },
                                      children: xs(
                                        new Date(t.created_at),
                                        "HH:mm",
                                        { locale: Ze }
                                      ),
                                    }),
                                  ],
                                }),
                              },
                              t.id
                            )
                          ),
                      e.jsx("div", { ref: se }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "p-2.5 border-t",
                  style: { borderColor: v },
                  children: J
                    ? e.jsx("div", {
                        className: "text-center py-2 rounded-lg",
                        style: { backgroundColor: X },
                        children: e.jsx("p", {
                          className: "text-xs",
                          style: { color: G },
                          children: "O chat foi encerrado.",
                        }),
                      })
                    : e.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          e.jsx("input", {
                            ref: V,
                            type: "file",
                            accept: "image/*",
                            onChange: M,
                            className: "hidden",
                          }),
                          e.jsx(N, {
                            variant: "outline",
                            size: "icon",
                            className: "flex-shrink-0 h-9 w-9",
                            style: { borderColor: v },
                            onClick: () => V.current?.click(),
                            disabled: ee,
                            children: ee
                              ? e.jsx(Ie, { className: "w-4 h-4 animate-spin" })
                              : e.jsx(ga, { className: "w-4 h-4" }),
                          }),
                          e.jsx(xe, {
                            value: h,
                            onChange: (t) => Q(t.target.value),
                            placeholder: "Sua mensagem...",
                            className: "h-9 text-sm",
                            style: {
                              backgroundColor: X,
                              borderColor: v,
                              color: I,
                            },
                            onKeyDown: (t) =>
                              t.key === "Enter" && !t.shiftKey && ge(),
                          }),
                          e.jsx(N, {
                            size: "icon",
                            className: "flex-shrink-0 h-9 w-9 text-white",
                            style: { backgroundColor: l.primary_color },
                            onClick: ge,
                            disabled: le || !h.trim(),
                            children: le
                              ? e.jsx(Ie, { className: "w-4 h-4 animate-spin" })
                              : e.jsx(hs, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Nl({
  unlocker: r,
  config: l,
  formatCurrency: i,
  bgCard: c,
  bgMuted: m,
  borderColor: w,
  textPrimary: y,
  textSecondary: $,
  textMuted: f,
  isDark: L,
}) {
  const { toast: h } = js(),
    [Q, le] = d.useState([]),
    [re, C] = d.useState(!0),
    [_, J] = d.useState(""),
    [A, ee] = d.useState(null),
    [T, a] = d.useState(null),
    [fe, k] = d.useState(!1),
    [Y, se] = d.useState(!1),
    [V, $e] = d.useState(!1),
    [oe, ae] = d.useState(!1),
    [he, q] = d.useState(""),
    [F, ue] = d.useState(null),
    [je, ne] = d.useState(!1),
    [Z, R] = d.useState({
      customer_name: "",
      customer_phone: "",
      customer_email: "",
      notes: "",
    });
  d.useEffect(() => {
    ve();
  }, [r?.id]);
  const ve = async () => {
      if (r?.id)
        try {
          const { data: u, error: P } = await b
            .from("unlocker_products")
            .select("*")
            .eq("unlocker_id", r.id)
            .eq("is_active", !0)
            .eq("category", "iptv")
            .order("name");
          if (P) throw P;
          const ge = (u || []).map((S) => S.id);
          let M = [];
          if (ge.length > 0) {
            const { data: S, error: Pe } = await b
              .from("unlocker_product_variations")
              .select("*")
              .in("product_id", ge)
              .eq("is_active", !0)
              .order("price");
            Pe || (M = S || []);
          }
          const de = (u || []).map((S) => ({
            ...S,
            variations: M.filter((Pe) => Pe.product_id === S.id),
          }));
          le(de);
        } catch {
        } finally {
          C(!1);
        }
    },
    K = Q.filter(
      (u) =>
        u.name.toLowerCase().includes(_.toLowerCase()) ||
        u.description?.toLowerCase().includes(_.toLowerCase())
    ),
    O = (u) => {
      ee(u), a(null), k(!0);
    },
    U = () => (T ? T.price : A?.price || 0),
    X = () => (T ? `${A?.name} - ${T.name}` : A?.name || ""),
    I = () => {
      if (A) {
        if (A.stock_quantity <= 0) {
          h({ title: "Produto esgotado", variant: "destructive" });
          return;
        }
        if (A.variations && A.variations.length > 0 && !T) {
          h({ title: "Selecione uma opção de plano", variant: "destructive" });
          return;
        }
        ue(A), k(!1), ne(!0);
      }
    },
    we = () => {
      if (!Z.customer_name.trim()) {
        h({ title: "Informe seu nome", variant: "destructive" });
        return;
      }
      if (!Z.customer_phone.trim()) {
        h({ title: "Informe seu WhatsApp", variant: "destructive" });
        return;
      }
      if (!Z.customer_email.trim()) {
        h({ title: "Informe seu email", variant: "destructive" });
        return;
      }
      ne(!1), se(!0);
    },
    G = () => {
      const u = Date.now().toString(36).toUpperCase(),
        P = Math.random().toString(36).substring(2, 6).toUpperCase();
      return `IPTV-${u}-${P}`;
    },
    v = async (u) => {
      if (!(!r || !F)) {
        $e(!0);
        try {
          const P = G(),
            ge = X(),
            M = U(),
            { error: de } = await b.from("unlocker_orders").insert({
              unlocker_id: r.id,
              product_id: F.id,
              order_number: P,
              client_name: Z.customer_name.trim(),
              client_phone: Z.customer_phone.trim(),
              client_email: Z.customer_email.trim(),
              service_type: `IPTV: ${ge}`,
              service_description: [
                `Assinatura IPTV - ${ge}`,
                T ? `Variação: ${T.name}` : null,
                Z.notes ? `Obs: ${Z.notes}` : null,
              ].filter(Boolean).join(`
`),
              notes: Z.notes || null,
              status: "pending",
              source: "site",
              order_type: "product",
              value: M,
              cost: 0,
              receipt_url: u,
              variation_id: T?.id || null,
              variation_name: T?.name || null,
            });
          if (de) throw de;
          q(P),
            se(!1),
            ae(!0),
            ue(null),
            a(null),
            R({
              customer_name: "",
              customer_phone: "",
              customer_email: "",
              notes: "",
            });
        } catch (P) {
          h({
            title: "Erro ao criar pedido",
            description: P.message,
            variant: "destructive",
          });
        } finally {
          $e(!1);
        }
      }
    },
    W = [
      { icon: as, title: "+5000 Canais", desc: "HD e 4K" },
      { icon: ea, title: "Filmes & Séries", desc: "On Demand" },
      { icon: Va, title: "Multi-Telas", desc: "Todos dispositivos" },
      { icon: ma, title: "Internacional", desc: "Vários países" },
    ];
  return re
    ? e.jsx("div", {
        className: "flex items-center justify-center min-h-[400px]",
        children: e.jsxs("div", {
          className: "flex flex-col items-center gap-4",
          children: [
            e.jsx("div", {
              className:
                "w-16 h-16 rounded-2xl flex items-center justify-center animate-pulse",
              style: { backgroundColor: `${l.primary_color}20` },
              children: e.jsx(as, {
                className: "w-8 h-8",
                style: { color: l.primary_color },
              }),
            }),
            e.jsx(Ie, {
              className: "w-6 h-6 animate-spin",
              style: { color: l.primary_color },
            }),
            e.jsx("p", {
              className: "text-sm",
              style: { color: $ },
              children: "Carregando planos...",
            }),
          ],
        }),
      })
    : Q.length === 0
    ? e.jsxs("div", {
        className: "text-center py-20",
        children: [
          e.jsx("div", {
            className:
              "w-24 h-24 rounded-3xl mx-auto flex items-center justify-center mb-6",
            style: {
              background: `linear-gradient(135deg, ${l.primary_color}30 0%, ${l.secondary_color}30 100%)`,
              border: `2px dashed ${l.primary_color}40`,
            },
            children: e.jsx(as, {
              className: "w-12 h-12",
              style: { color: l.primary_color },
            }),
          }),
          e.jsx("h2", {
            className: "text-2xl font-bold mb-3",
            style: { color: y },
            children: "IPTV em breve!",
          }),
          e.jsx("p", {
            className: "max-w-sm mx-auto",
            style: { color: $ },
            children:
              "Estamos preparando nossos planos de IPTV. Volte em breve para conferir!",
          }),
        ],
      })
    : e.jsxs("div", {
        className: "space-y-8",
        children: [
          e.jsxs("div", {
            className: "relative rounded-3xl overflow-hidden",
            style: {
              background: `linear-gradient(135deg, ${l.primary_color} 0%, ${l.secondary_color} 100%)`,
            },
            children: [
              e.jsxs("div", {
                className: "absolute inset-0 opacity-10",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2",
                  }),
                  e.jsx("div", {
                    className:
                      "absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "relative p-6 sm:p-10",
                children: e.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-4",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            e.jsxs(H, {
                              className:
                                "bg-white/20 text-white border-white/30 backdrop-blur-sm",
                              children: [
                                e.jsx(Qe, { className: "w-3 h-3 mr-1" }),
                                "Streaming Premium",
                              ],
                            }),
                            e.jsxs(H, {
                              className:
                                "bg-white/20 text-white border-white/30 backdrop-blur-sm",
                              children: [
                                e.jsx(ya, { className: "w-3 h-3 mr-1" }),
                                "Popular",
                              ],
                            }),
                          ],
                        }),
                        e.jsx("h1", {
                          className:
                            "text-3xl sm:text-4xl font-bold text-white",
                          children: "IPTV & Streaming",
                        }),
                        e.jsx("p", {
                          className: "text-white/80 max-w-lg text-lg",
                          children:
                            "Assista milhares de canais, filmes e séries em qualidade HD e 4K. Suporte dedicado e ativação imediata.",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "hidden sm:flex items-center justify-center",
                      children: e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx("div", {
                            className:
                              "w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center",
                            children: e.jsx(ys, {
                              className: "w-16 h-16 text-white",
                            }),
                          }),
                          e.jsx("div", {
                            className:
                              "absolute -bottom-2 -right-2 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center",
                            children: e.jsx(ea, {
                              className: "w-5 h-5 text-white fill-white",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx("div", {
            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
            children: W.map((u, P) =>
              e.jsxs(
                "div",
                {
                  className:
                    "group p-4 rounded-2xl text-center transition-all duration-300 hover:scale-[1.02]",
                  style: {
                    backgroundColor: c,
                    border: `1px solid ${w}`,
                    boxShadow: L ? "none" : "0 4px 20px rgba(0,0,0,0.05)",
                  },
                  children: [
                    e.jsx("div", {
                      className:
                        "w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center transition-transform group-hover:scale-110",
                      style: {
                        background: `linear-gradient(135deg, ${l.primary_color}15 0%, ${l.primary_color}25 100%)`,
                      },
                      children: e.jsx(u.icon, {
                        className: "w-7 h-7",
                        style: { color: l.primary_color },
                      }),
                    }),
                    e.jsx("p", {
                      className: "font-bold text-sm",
                      style: { color: y },
                      children: u.title,
                    }),
                    e.jsx("p", {
                      className: "text-xs mt-0.5",
                      style: { color: $ },
                      children: u.desc,
                    }),
                  ],
                },
                P
              )
            ),
          }),
          Q.length > 3 &&
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx(Je, {
                  className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5",
                  style: { color: f },
                }),
                e.jsx(xe, {
                  placeholder: "Buscar planos de IPTV...",
                  value: _,
                  onChange: (u) => J(u.target.value),
                  className: "pl-12 h-12 rounded-xl text-base",
                  style: { backgroundColor: c, borderColor: w, color: y },
                }),
              ],
            }),
          e.jsx("div", {
            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
            children: K.map((u) => {
              const P = u.variations && u.variations.length > 0,
                ge = P
                  ? Math.min(...u.variations.map((M) => M.price))
                  : u.price;
              return e.jsxs(
                ye,
                {
                  className:
                    "group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden",
                  style: {
                    backgroundColor: c,
                    borderColor: w,
                    boxShadow: L ? "none" : "0 4px 20px rgba(0,0,0,0.08)",
                  },
                  onClick: () => O(u),
                  children: [
                    e.jsxs("div", {
                      className: "relative aspect-[4/3] overflow-hidden",
                      style: { backgroundColor: `${l.primary_color}08` },
                      children: [
                        u.image_url
                          ? e.jsx("img", {
                              src: u.image_url,
                              alt: u.name,
                              className:
                                "w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105",
                            })
                          : e.jsx("div", {
                              className:
                                "w-full h-full flex items-center justify-center",
                              children: e.jsx("div", {
                                className:
                                  "w-20 h-20 rounded-2xl flex items-center justify-center",
                                style: {
                                  backgroundColor: `${l.primary_color}15`,
                                },
                                children: e.jsx(as, {
                                  className: "w-10 h-10",
                                  style: { color: l.primary_color },
                                }),
                              }),
                            }),
                        e.jsx("div", {
                          className: "absolute top-3 left-3",
                          children: e.jsxs(H, {
                            className: "backdrop-blur-md border-0",
                            style: {
                              backgroundColor: `${l.primary_color}E0`,
                              color: "white",
                            },
                            children: [
                              e.jsx(Is, { className: "w-3 h-3 mr-1" }),
                              "Popular",
                            ],
                          }),
                        }),
                        u.stock_quantity <= 0 &&
                          e.jsx("div", {
                            className:
                              "absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center",
                            children: e.jsx(H, {
                              variant: "destructive",
                              className: "text-sm px-4 py-1",
                              children: "Esgotado",
                            }),
                          }),
                        P &&
                          e.jsx("div", {
                            className: "absolute bottom-3 right-3",
                            children: e.jsxs(H, {
                              variant: "secondary",
                              className: "backdrop-blur-md",
                              style: { backgroundColor: c, color: y },
                              children: [u.variations.length, " opções"],
                            }),
                          }),
                      ],
                    }),
                    e.jsxs(Se, {
                      className: "p-5 space-y-3",
                      children: [
                        e.jsx("h3", {
                          className: "font-bold text-lg leading-tight",
                          style: { color: y },
                          children: u.name,
                        }),
                        u.description &&
                          e.jsx("p", {
                            className: "text-sm line-clamp-2 leading-relaxed",
                            style: { color: $ },
                            children: u.description,
                          }),
                        e.jsxs("div", {
                          className: "flex items-center justify-between pt-2",
                          children: [
                            e.jsxs("div", {
                              children: [
                                P &&
                                  e.jsx("span", {
                                    className: "text-xs block mb-0.5",
                                    style: { color: f },
                                    children: "a partir de",
                                  }),
                                e.jsxs("div", {
                                  className: "flex items-baseline gap-1",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-2xl font-bold",
                                      style: { color: l.primary_color },
                                      children: i(ge),
                                    }),
                                    e.jsx("span", {
                                      className: "text-sm",
                                      style: { color: f },
                                      children: "/mês",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.stock_quantity > 0 &&
                              e.jsxs(N, {
                                size: "sm",
                                className: "gap-1.5 rounded-xl shadow-lg",
                                style: { backgroundColor: l.primary_color },
                                onClick: (M) => {
                                  M.stopPropagation(), O(u);
                                },
                                children: [
                                  "Ver Plano",
                                  e.jsx(qs, { className: "w-4 h-4" }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                u.id
              );
            }),
          }),
          e.jsx("div", {
            className:
              "p-5 rounded-2xl flex flex-wrap items-center justify-center gap-6",
            style: { backgroundColor: m, border: `1px solid ${w}` },
            children: [
              { icon: Te, text: "100% Seguro" },
              { icon: Ee, text: "Ativação Imediata" },
              { icon: Us, text: "Suporte 24/7" },
              { icon: ke, text: "5.0 Avaliação" },
            ].map((u, P) =>
              e.jsxs(
                "div",
                {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-8 h-8 rounded-lg flex items-center justify-center",
                      style: { backgroundColor: `${l.primary_color}15` },
                      children: e.jsx(u.icon, {
                        className: "w-4 h-4",
                        style: { color: l.primary_color },
                      }),
                    }),
                    e.jsx("span", {
                      className: "text-sm font-medium",
                      style: { color: y },
                      children: u.text,
                    }),
                  ],
                },
                P
              )
            ),
          }),
          e.jsx(Ge, {
            open: fe,
            onOpenChange: k,
            children: e.jsx(We, {
              className: "max-w-lg max-h-[90vh] p-0 overflow-hidden",
              style: { backgroundColor: c, borderColor: w },
              children: e.jsx(os, {
                className: "max-h-[90vh]",
                children:
                  A &&
                  e.jsxs("div", {
                    children: [
                      e.jsxs("div", {
                        className: "relative aspect-video",
                        style: { backgroundColor: `${l.primary_color}08` },
                        children: [
                          A.image_url
                            ? e.jsx("img", {
                                src: A.image_url,
                                alt: A.name,
                                className: "w-full h-full object-contain p-6",
                              })
                            : e.jsx("div", {
                                className:
                                  "w-full h-full flex items-center justify-center",
                                children: e.jsx("div", {
                                  className:
                                    "w-24 h-24 rounded-2xl flex items-center justify-center",
                                  style: {
                                    backgroundColor: `${l.primary_color}15`,
                                  },
                                  children: e.jsx(as, {
                                    className: "w-12 h-12",
                                    style: { color: l.primary_color },
                                  }),
                                }),
                              }),
                          e.jsx("div", {
                            className: "absolute top-4 left-4",
                            children: e.jsxs(H, {
                              className: "backdrop-blur-md border-0",
                              style: {
                                backgroundColor: `${l.primary_color}E0`,
                                color: "white",
                              },
                              children: [
                                e.jsx(Is, { className: "w-3 h-3 mr-1" }),
                                "IPTV Premium",
                              ],
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "p-6 space-y-5",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("h2", {
                                className: "text-2xl font-bold mb-2",
                                style: { color: y },
                                children: A.name,
                              }),
                              A.description &&
                                e.jsx("p", {
                                  className: "leading-relaxed",
                                  style: { color: $ },
                                  children: A.description,
                                }),
                            ],
                          }),
                          A.variations &&
                            A.variations.length > 0 &&
                            e.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                e.jsxs(te, {
                                  className:
                                    "text-sm font-semibold flex items-center gap-2",
                                  style: { color: y },
                                  children: [
                                    e.jsx(Be, {
                                      className: "w-4 h-4",
                                      style: { color: l.primary_color },
                                    }),
                                    "Escolha seu plano:",
                                  ],
                                }),
                                e.jsx(za, {
                                  value: T?.id || "",
                                  onValueChange: (u) => {
                                    const P = A.variations.find(
                                      (ge) => ge.id === u
                                    );
                                    a(P || null);
                                  },
                                  children: e.jsx("div", {
                                    className: "grid gap-2",
                                    children: A.variations.map((u) =>
                                      e.jsxs(
                                        "label",
                                        {
                                          className:
                                            "flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all",
                                          style: {
                                            backgroundColor:
                                              T?.id === u.id
                                                ? `${l.primary_color}15`
                                                : m,
                                            border: `2px solid ${
                                              T?.id === u.id
                                                ? l.primary_color
                                                : w
                                            }`,
                                          },
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center gap-3",
                                              children: [
                                                e.jsx(La, {
                                                  value: u.id,
                                                  id: u.id,
                                                }),
                                                e.jsx("div", {
                                                  children: e.jsx("p", {
                                                    className: "font-semibold",
                                                    style: { color: y },
                                                    children: u.name,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            e.jsx("div", {
                                              className: "text-right",
                                              children: e.jsx("p", {
                                                className: "font-bold text-lg",
                                                style: {
                                                  color: l.primary_color,
                                                },
                                                children: i(u.price),
                                              }),
                                            }),
                                          ],
                                        },
                                        u.id
                                      )
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            className: "p-4 rounded-xl space-y-3",
                            style: { backgroundColor: m },
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-xs font-semibold uppercase tracking-wide",
                                style: { color: f },
                                children: "Incluso no plano",
                              }),
                              e.jsx("div", {
                                className: "grid grid-cols-1 gap-2",
                                children: [
                                  "Mais de 5000 canais HD e 4K",
                                  "Filmes e séries sob demanda",
                                  "Funciona em Smart TV, Celular e PC",
                                  "Suporte técnico dedicado",
                                  "Ativação imediata após pagamento",
                                ].map((u, P) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                                          style: {
                                            backgroundColor: `${l.primary_color}20`,
                                          },
                                          children: e.jsx(Fa, {
                                            className: "w-3 h-3",
                                            style: { color: l.primary_color },
                                          }),
                                        }),
                                        e.jsx("span", {
                                          className: "text-sm",
                                          style: { color: y },
                                          children: u,
                                        }),
                                      ],
                                    },
                                    P
                                  )
                                ),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "p-4 rounded-xl",
                            style: {
                              background: `linear-gradient(135deg, ${l.primary_color}10 0%, ${l.secondary_color}10 100%)`,
                              border: `1px solid ${l.primary_color}30`,
                            },
                            children: [
                              e.jsx("div", {
                                className:
                                  "flex items-center justify-between mb-4",
                                children: e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className: "text-xs",
                                      style: { color: f },
                                      children: T ? T.name : "Valor mensal",
                                    }),
                                    e.jsxs("p", {
                                      className: "text-3xl font-bold",
                                      style: { color: l.primary_color },
                                      children: [
                                        i(U()),
                                        e.jsx("span", {
                                          className: "text-sm font-normal ml-1",
                                          style: { color: f },
                                          children: "/mês",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs(N, {
                                className:
                                  "w-full h-12 text-base font-semibold gap-2 rounded-xl shadow-lg",
                                style: { backgroundColor: l.primary_color },
                                onClick: I,
                                disabled: A.stock_quantity <= 0,
                                children: [
                                  e.jsx(Ye, { className: "w-5 h-5" }),
                                  "Assinar Agora",
                                  e.jsx(ks, { className: "w-4 h-4" }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            }),
          }),
          e.jsx(Ge, {
            open: je,
            onOpenChange: ne,
            children: e.jsxs(We, {
              className: "max-w-md",
              style: { backgroundColor: c, borderColor: w },
              children: [
                e.jsx(Ls, {
                  children: e.jsxs(Fs, {
                    className: "flex items-center gap-3",
                    style: { color: y },
                    children: [
                      e.jsx("div", {
                        className:
                          "w-10 h-10 rounded-xl flex items-center justify-center",
                        style: { backgroundColor: `${l.primary_color}15` },
                        children: e.jsx(Ve, {
                          className: "w-5 h-5",
                          style: { color: l.primary_color },
                        }),
                      }),
                      "Seus Dados",
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "space-y-4 mt-2",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx(te, {
                          className: "text-sm font-medium",
                          style: { color: y },
                          children: "Nome Completo *",
                        }),
                        e.jsxs("div", {
                          className: "relative mt-1.5",
                          children: [
                            e.jsx(Ve, {
                              className:
                                "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
                              style: { color: f },
                            }),
                            e.jsx(xe, {
                              placeholder: "Digite seu nome completo",
                              value: Z.customer_name,
                              onChange: (u) =>
                                R((P) => ({
                                  ...P,
                                  customer_name: u.target.value,
                                })),
                              className: "pl-10 h-11 rounded-xl",
                              style: {
                                backgroundColor: m,
                                borderColor: w,
                                color: y,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(te, {
                          className: "text-sm font-medium",
                          style: { color: y },
                          children: "WhatsApp *",
                        }),
                        e.jsxs("div", {
                          className: "relative mt-1.5",
                          children: [
                            e.jsx(Me, {
                              className:
                                "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
                              style: { color: f },
                            }),
                            e.jsx(xe, {
                              placeholder: "(00) 00000-0000",
                              value: Z.customer_phone,
                              onChange: (u) =>
                                R((P) => ({
                                  ...P,
                                  customer_phone: u.target.value,
                                })),
                              className: "pl-10 h-11 rounded-xl",
                              style: {
                                backgroundColor: m,
                                borderColor: w,
                                color: y,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(te, {
                          className: "text-sm font-medium",
                          style: { color: y },
                          children: "Email *",
                        }),
                        e.jsxs("div", {
                          className: "relative mt-1.5",
                          children: [
                            e.jsx(gs, {
                              className:
                                "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
                              style: { color: f },
                            }),
                            e.jsx(xe, {
                              type: "email",
                              placeholder: "seu@email.com",
                              value: Z.customer_email,
                              onChange: (u) =>
                                R((P) => ({
                                  ...P,
                                  customer_email: u.target.value,
                                })),
                              className: "pl-10 h-11 rounded-xl",
                              style: {
                                backgroundColor: m,
                                borderColor: w,
                                color: y,
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(te, {
                          className: "text-sm font-medium",
                          style: { color: y },
                          children: "Observações (opcional)",
                        }),
                        e.jsx(fs, {
                          placeholder: "Alguma informação adicional...",
                          value: Z.notes,
                          onChange: (u) =>
                            R((P) => ({ ...P, notes: u.target.value })),
                          className: "mt-1.5 rounded-xl resize-none",
                          rows: 2,
                          style: {
                            backgroundColor: m,
                            borderColor: w,
                            color: y,
                          },
                        }),
                      ],
                    }),
                    F &&
                      e.jsxs("div", {
                        className: "p-4 rounded-xl space-y-2",
                        style: {
                          background: `linear-gradient(135deg, ${l.primary_color}08 0%, ${l.secondary_color}08 100%)`,
                          border: `1px solid ${w}`,
                        },
                        children: [
                          e.jsx("div", {
                            className: "flex items-center justify-between",
                            children: e.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(as, {
                                  className: "w-4 h-4",
                                  style: { color: l.primary_color },
                                }),
                                e.jsx("span", {
                                  className: "font-medium text-sm",
                                  style: { color: y },
                                  children: X(),
                                }),
                              ],
                            }),
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-center justify-between pt-2 border-t",
                            style: { borderColor: w },
                            children: [
                              e.jsx("span", {
                                className: "text-sm",
                                style: { color: f },
                                children: "Total:",
                              }),
                              e.jsxs("span", {
                                className: "text-xl font-bold",
                                style: { color: l.primary_color },
                                children: [i(U()), "/mês"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    e.jsxs(N, {
                      className:
                        "w-full h-12 text-base font-semibold gap-2 rounded-xl",
                      style: { backgroundColor: l.primary_color },
                      onClick: we,
                      children: [
                        "Continuar para Pagamento",
                        e.jsx(ks, { className: "w-4 h-4" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          F &&
            r.pix_key &&
            e.jsx(Na, {
              open: Y,
              onOpenChange: se,
              pixKey: r.pix_key,
              bankName: r.bank_name || r.store_name || r.name,
              merchantName: r.store_name || r.name,
              totalValue: U(),
              formatCurrency: i,
              onSubmit: v,
              config: { primary_color: l.primary_color, theme: l.theme },
            }),
          e.jsx(Ge, {
            open: oe,
            onOpenChange: ae,
            children: e.jsx(We, {
              className: "max-w-sm",
              style: { backgroundColor: c, borderColor: w },
              children: e.jsxs("div", {
                className: "text-center space-y-5 py-4",
                children: [
                  e.jsx("div", {
                    className:
                      "w-20 h-20 rounded-3xl mx-auto flex items-center justify-center",
                    style: {
                      background: `linear-gradient(135deg, ${l.primary_color}20 0%, ${l.secondary_color}20 100%)`,
                    },
                    children: e.jsx(Ce, {
                      className: "w-10 h-10",
                      style: { color: l.primary_color },
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h2", {
                        className: "text-2xl font-bold mb-2",
                        style: { color: y },
                        children: "Pedido Recebido!",
                      }),
                      e.jsx("p", {
                        className: "text-sm leading-relaxed",
                        style: { color: $ },
                        children:
                          "Seu pedido foi recebido com sucesso. Após a confirmação do pagamento, você receberá as credenciais de acesso via WhatsApp.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "p-4 rounded-xl",
                    style: { backgroundColor: m },
                    children: [
                      e.jsx("p", {
                        className: "text-xs mb-1",
                        style: { color: f },
                        children: "Código do pedido:",
                      }),
                      e.jsx("code", {
                        className: "font-mono font-bold text-lg",
                        style: { color: l.primary_color },
                        children: he,
                      }),
                    ],
                  }),
                  e.jsx(N, {
                    className: "w-full h-11 rounded-xl font-semibold",
                    style: { backgroundColor: l.primary_color },
                    onClick: () => ae(!1),
                    children: "Entendi",
                  }),
                ],
              }),
            }),
          }),
        ],
      });
}
const vl = [
    { name: "Samsung", logo: tl },
    { name: "Apple", logo: rl },
    { name: "Xiaomi", logo: ol },
    { name: "LG", logo: cl },
    { name: "Huawei", logo: il },
    { name: "Realme", logo: nl },
  ],
  ta = {
    credencial: "Credencial/Conta",
    licenca: "Licença/Ativação",
    credito: "Crédito/Saldo",
    servico: "Serviço Digital",
    software: "Software/Ferramenta",
    arquivo: "Arquivo/Download",
    aluguel: "Aluguel de Ferramenta",
    iptv: "IPTV/Streaming",
  },
  ra = {
    theme: "dark",
    primary_color: "#10b981",
    secondary_color: "#1f2937",
    accent_color: "#f59e0b",
    hero_title: "Desbloqueio Profissional",
    hero_subtitle: "iCloud, FRP, Google Account e MDM",
    about_text:
      "Especialista em desbloqueio com anos de experiência no mercado.",
    banner_url: "",
    banner_mobile_url: "",
    logo_url: "",
    show_whatsapp: !0,
    show_address: !0,
    footer_text: "",
    company_email: "",
    company_cnpj: "",
    social_links: { instagram: "", facebook: "", telegram: "" },
    working_hours: "Segunda a Sexta: 9h às 18h",
    whatsapp_group_link: "",
    announcements: [],
  },
  oa = [
    { value: "icloud", label: "Remoção iCloud" },
    { value: "frp", label: "Remoção FRP (Google)" },
    { value: "mdm", label: "Remoção MDM" },
    { value: "conta_google", label: "Conta Google" },
    { value: "conta_samsung", label: "Conta Samsung" },
    { value: "conta_mi", label: "Conta Mi (Xiaomi)" },
    { value: "pin_padrao", label: "PIN/Padrão/Senha" },
    { value: "ativacao", label: "Ativação de Rede" },
    { value: "software_recovery", label: "Recuperação de Software" },
    { value: "outro", label: "Outro Serviço" },
  ],
  Al = () => {
    const { username: r } = Ua(),
      [l, i] = Xa(),
      { toast: c } = js(),
      [m, w] = d.useState(null),
      [y, $] = d.useState([]),
      [f, L] = d.useState([]),
      [h, Q] = d.useState([]),
      [le, re] = d.useState([]),
      [C, _] = d.useState(!0),
      [J, A] = d.useState(!1),
      [ee, T] = d.useState(!1),
      [a, fe] = d.useState(ra),
      [k, Y] = d.useState("home"),
      [se, V] = d.useState(!1),
      [$e, oe] = d.useState(""),
      [ae, he] = d.useState(!1),
      [q, F] = d.useState(null),
      [ue, je] = d.useState(!1),
      [ne, Z] = d.useState(""),
      [R, ve] = d.useState(null),
      [K, O] = d.useState(!1),
      [U, X] = d.useState(!1),
      [I, we] = d.useState(!1),
      [G, v] = d.useState(!1),
      [W, u] = d.useState(""),
      [P, ge] = d.useState("service"),
      [M, de] = d.useState({
        customer_name: "",
        customer_phone: "",
        device_brand: "",
        device_model: "",
        imei: "",
        unlock_type: "",
        anydesk_id: "",
        current_status: "",
        notes: "",
      }),
      [S, Pe] = d.useState({
        customer_name: "",
        customer_phone: "",
        customer_email: "",
        customer_cpf: "",
        customer_address: "",
        notes: "",
      }),
      [be, Le] = d.useState([]),
      [ce, me] = d.useState("all"),
      pe = d.useRef(null),
      ns = () => {
        let s = sessionStorage.getItem("unlocker_cart_session");
        return (
          s ||
            ((s = crypto.randomUUID()),
            sessionStorage.setItem("unlocker_cart_session", s)),
          s
        );
      };
    d.useEffect(() => {
      if (!m?.id || be.length === 0) return;
      const s = setTimeout(async () => {
        const o = ns(),
          g = be.map((B) => ({
            product_id: B.product.id,
            product_name: B.product.name,
            quantity: B.quantity,
            price: B.product.price,
            variation_name: B.variation_name || null,
            image_url: B.product.image_url || null,
          })),
          D = be.reduce((B, ie) => B + ie.product.price * ie.quantity, 0);
        try {
          const { data: B } = await b
            .from("abandoned_carts")
            .select("id")
            .eq("session_id", o)
            .eq("unlocker_id", m.id)
            .eq("status", "abandoned")
            .maybeSingle();
          if (B)
            await b
              .from("abandoned_carts")
              .update({
                items: g,
                total: D,
                updated_at: new Date().toISOString(),
              })
              .eq("id", B.id),
              (pe.current = B.id);
          else {
            const { data: ie } = await b
              .from("abandoned_carts")
              .insert({
                unlocker_id: m.id,
                session_id: o,
                items: g,
                total: D,
                source: "unlocker",
              })
              .select("id")
              .single();
            ie && (pe.current = ie.id);
          }
        } catch {}
      }, 2e3);
      return () => clearTimeout(s);
    }, [be, m?.id]),
      d.useEffect(() => {
        if (!pe.current || (!S.customer_name && !S.customer_phone)) return;
        const s = setTimeout(async () => {
          try {
            await b
              .from("abandoned_carts")
              .update({
                customer_name: S.customer_name || null,
                customer_phone: S.customer_phone || null,
                customer_email: S.customer_email || null,
              })
              .eq("id", pe.current);
          } catch {}
        }, 1500);
        return () => clearTimeout(s);
      }, [S.customer_name, S.customer_phone, S.customer_email]);
    const E = a.theme === "dark",
      ds = E ? "#000000" : "#ffffff",
      t = E ? "#0a0a0a" : "#ffffff",
      x = E ? "#171717" : "#f5f5f5",
      n = E ? "#fafafa" : "#0a0a0a",
      j = E ? "#a3a3a3" : "#525252",
      z = "#737373",
      p = E ? "#262626" : "#e5e5e5";
    d.useEffect(() => {
      r && Ae();
    }, [r]),
      d.useEffect(() => {
        if (m?.site_config) {
          const s = m.site_config;
          fe({ ...ra, ...s });
        }
      }, [m]),
      d.useEffect(() => {
        const s = l.get("track");
        if (s && m && !C) {
          oe(s.toUpperCase()), Y("tracking");
          const o = new URLSearchParams(l);
          o.delete("track"),
            i(o, { replace: !0 }),
            setTimeout(() => {
              De(s.toUpperCase());
            }, 100);
        }
      }, [m, C, l]);
    const De = async (s) => {
      he(!0), Hs(!1);
      try {
        let { data: o, error: g } = await b
          .from("unlocker_orders_public")
          .select("*")
          .eq("order_number", s)
          .maybeSingle();
        if (!o && !g) {
          const { data: D, error: B } = await b
            .from("unlocker_orders_public")
            .select("*")
            .ilike("order_number", `%${s}%`)
            .limit(1)
            .maybeSingle();
          (o = D), (g = B);
        }
        if (g) throw g;
        if (!o) {
          c({
            title: "Serviço não encontrado",
            description: "Verifique se o código está correto.",
            variant: "destructive",
          });
          return;
        }
        if (He(o)) {
          c({
            title: "Código expirado",
            description: "Este código de rastreio expirou.",
            variant: "destructive",
          });
          return;
        }
        F(o), je(!1);
      } catch {
        c({ title: "Erro ao buscar serviço", variant: "destructive" });
      } finally {
        he(!1);
      }
    };
    d.useEffect(() => {
      if (!m) return;
      const s = m.store_name || m.name,
        o = a.logo_url || m.logo_url;
      if (((document.title = `${s} | Desbloqueio Profissional`), o)) {
        let g = document.querySelector("link[rel='icon']");
        g ||
          ((g = document.createElement("link")),
          (g.rel = "icon"),
          document.head.appendChild(g)),
          (g.href = o),
          (g.type = "image/png");
      }
      return () => {
        document.title = "Tech OS PRO";
        const g = document.querySelector("link[rel='icon']");
        g && (g.href = "/favicon.ico");
      };
    }, [m, a.logo_url]),
      d.useEffect(() => {
        if (!q) return;
        const s = b
          .channel(`public-order-${q.order_id}`)
          .on(
            "postgres_changes",
            {
              event: "*",
              schema: "public",
              table: "unlocker_orders_public",
              filter: `order_id=eq.${q.order_id}`,
            },
            (o) => {
              o.eventType === "UPDATE" && F(o.new);
            }
          )
          .subscribe();
        return () => {
          b.removeChannel(s);
        };
      }, [q?.order_id]);
    const Ae = async (s = 0) => {
        try {
          const { data: o, error: g } = await b
            .from("unlockers")
            .select("*")
            .ilike("username", (r || "").trim())
            .eq("is_active", !0)
            .maybeSingle();
          if (g) throw g;
          if (!o) {
            _(!1);
            return;
          }
          w(o);
          const [D, B, ie, _e] = await Promise.all([
            b
              .from("unlocker_services")
              .select("*")
              .eq("unlocker_id", o.id)
              .eq("is_active", !0)
              .order("category"),
            b
              .from("unlocker_products")
              .select("*")
              .eq("unlocker_id", o.id)
              .eq("is_active", !0)
              .order("category"),
            b
              .from("unlocker_testimonials")
              .select("*")
              .eq("unlocker_id", o.id)
              .eq("is_visible", !0)
              .order("created_at", { ascending: !1 })
              .limit(6),
            b
              .from("unlocker_product_categories")
              .select("id, name")
              .eq("unlocker_id", o.id),
          ]);
          $(D.data || []),
            L(B.data || []),
            Q(ie.data || []),
            re(_e.data || []),
            A(!1),
            _(!1);
        } catch {
          if (s < 3) {
            setTimeout(() => Ae(s + 1), 800 * (s + 1));
            return;
          }
          A(!0), _(!1);
        }
      },
      He = (s) => {
        if (s.status !== "completed" && s.status !== "cancelled") return !1;
        const o = new Date(s.updated_at);
        return (new Date().getTime() - o.getTime()) / (1e3 * 60 * 60) > 24;
      },
      [wl, Hs] = d.useState(!1),
      Gs = async () => {
        const s = $e.trim().toUpperCase();
        if (!s) {
          c({ title: "Digite o código do serviço", variant: "destructive" });
          return;
        }
        he(!0), Hs(!1);
        try {
          let { data: o, error: g } = await b
            .from("unlocker_orders_public")
            .select("*")
            .eq("order_number", s)
            .maybeSingle();
          if (!o && !g) {
            const { data: D, error: B } = await b
              .from("unlocker_orders_public")
              .select("*")
              .ilike("order_number", `%${s}%`)
              .limit(1)
              .maybeSingle();
            (o = D), (g = B);
          }
          if (g) throw g;
          if (!o) {
            c({
              title: "Serviço não encontrado",
              description:
                "Verifique se o código está correto. Ex: UNL-ML38C4Y7-P8FW",
              variant: "destructive",
            });
            return;
          }
          if (He(o)) {
            c({
              title: "Código expirado",
              description:
                "Este código de rastreio expirou após 24h da conclusão do serviço.",
              variant: "destructive",
            });
            return;
          }
          F(o), je(!1);
        } catch {
          c({ title: "Erro ao buscar serviço", variant: "destructive" });
        } finally {
          he(!1);
        }
      },
      Ws = () => {
        const s = Date.now().toString(36).toUpperCase(),
          o = Math.random().toString(36).substring(2, 6).toUpperCase();
        return `UNL-${s}-${o}`;
      },
      va = (s) => {
        navigator.clipboard.writeText(s), c({ title: "Código copiado!" });
      },
      wa = async (s) => {
        if ((s.preventDefault(), !m)) {
          c({
            title: "Erro",
            description: "Dados do profissional não encontrados.",
            variant: "destructive",
          });
          return;
        }
        if (!M.customer_name.trim() || !M.customer_phone.trim()) {
          c({
            title: "Campos obrigatórios",
            description: "Preencha nome e telefone.",
            variant: "destructive",
          });
          return;
        }
        if (!M.unlock_type) {
          c({ title: "Selecione o tipo de serviço", variant: "destructive" });
          return;
        }
        T(!0);
        try {
          const o = y.find(
              (ie) =>
                ie.category
                  .toLowerCase()
                  .includes(M.unlock_type.toLowerCase()) ||
                ie.name.toLowerCase().includes(M.unlock_type.toLowerCase())
            ),
            g = Ws(),
            D =
              oa.find((ie) => ie.value === M.unlock_type)?.label ||
              M.unlock_type,
            { error: B } = await b.from("unlocker_orders").insert({
              unlocker_id: m.id,
              service_id: o?.id || null,
              order_number: g,
              client_name: M.customer_name.trim(),
              client_phone: M.customer_phone.trim(),
              device_brand: M.device_brand.trim() || null,
              device_model: M.device_model.trim() || null,
              imei: M.imei.trim() || null,
              service_type: D,
              service_description: `AnyDesk: ${M.anydesk_id || "Não informado"}
Status atual: ${M.current_status || "Não informado"}`,
              notes: M.notes || null,
              status: "pending",
              source: "site",
              order_type: "service",
              value: o?.price || 0,
              cost: 0,
            });
          if (B) throw B;
          u(g),
            ge("service"),
            v(!0),
            de({
              customer_name: "",
              customer_phone: "",
              device_brand: "",
              device_model: "",
              imei: "",
              unlock_type: "",
              anydesk_id: "",
              current_status: "",
              notes: "",
            });
        } catch {
          c({
            title: "Erro ao enviar",
            description: "Tente novamente.",
            variant: "destructive",
          });
        } finally {
          T(!1);
        }
      },
      _a = (s) => {
        if ((s.preventDefault(), !m)) {
          c({
            title: "Erro",
            description: "Dados do profissional não encontrados.",
            variant: "destructive",
          });
          return;
        }
        if (!S.customer_name.trim() || !S.customer_phone.trim()) {
          c({
            title: "Campos obrigatórios",
            description: "Preencha nome e telefone.",
            variant: "destructive",
          });
          return;
        }
        if (be.length === 0) {
          c({
            title: "Carrinho vazio",
            description: "Adicione produtos ao carrinho.",
            variant: "destructive",
          });
          return;
        }
        if (!m.pix_key) {
          c({
            title: "PIX não configurado",
            description: "O vendedor não configurou uma chave PIX.",
            variant: "destructive",
          });
          return;
        }
        pe.current &&
          S.customer_name &&
          b
            .from("abandoned_carts")
            .update({
              customer_name: S.customer_name,
              customer_phone: S.customer_phone,
              customer_email: S.customer_email,
            })
            .eq("id", pe.current)
            .then(() => {}),
          X(!1),
          we(!0);
      },
      ka = async (s) => {
        if (m) {
          T(!0);
          try {
            const o = Ws(),
              g = be.reduce((ss, Os) => ss + Os.product.price * Os.quantity, 0),
              D = be
                .map((ss) => `${ss.quantity}x ${ss.product.name}`)
                .join(", "),
              B = [
                S.customer_email ? `Email: ${S.customer_email}` : null,
                S.customer_cpf ? `CPF: ${S.customer_cpf}` : null,
                S.customer_address ? `Endereço: ${S.customer_address}` : null,
              ].filter(Boolean).join(`
`),
              ie = be[0],
              { error: _e } = await b.from("unlocker_orders").insert({
                unlocker_id: m.id,
                product_id: ie.product.id,
                variation_id: ie.variation_id || null,
                variation_name: ie.variation_name || null,
                order_number: o,
                client_name: S.customer_name.trim(),
                client_phone: S.customer_phone.trim(),
                client_email: S.customer_email || null,
                service_type: "Compra de Produto",
                service_description: `${D}

${B}`.trim(),
                notes: S.notes || null,
                status: "pending",
                source: "site",
                order_type: "product",
                value: g,
                cost: 0,
                receipt_url: s,
              });
            if (_e) throw _e;
            pe.current &&
              (await b.from("abandoned_carts").delete().eq("id", pe.current),
              (pe.current = null)),
              u(o),
              ge("product"),
              v(!0),
              we(!1);
          } catch {
            c({
              title: "Erro ao enviar",
              description: "Tente novamente.",
              variant: "destructive",
            });
          } finally {
            T(!1);
          }
        }
      },
      Ca = (s, o, g) => {
        Le((D) => {
          const B = o ? `${s.id}-${o}` : s.id,
            ie = D.find(
              (_e) =>
                (_e.variation_id
                  ? `${_e.product.id}-${_e.variation_id}`
                  : _e.product.id) === B
            );
          return ie
            ? ie.quantity >= s.stock_quantity
              ? (c({ title: "Limite atingido", variant: "destructive" }), D)
              : D.map((_e) =>
                  (_e.variation_id
                    ? `${_e.product.id}-${_e.variation_id}`
                    : _e.product.id) === B
                    ? { ..._e, quantity: _e.quantity + 1 }
                    : _e
                )
            : [
                ...D,
                { product: s, quantity: 1, variation_id: o, variation_name: g },
              ];
        }),
          c({ title: "✓ Adicionado ao carrinho" });
      },
      $s = (s, o) => {
        Le((g) =>
          g
            .map((D) => {
              if (D.product.id !== s) return D;
              const B = D.quantity + o;
              return B <= 0 || B > D.product.stock_quantity
                ? D
                : { ...D, quantity: B };
            })
            .filter((D) => D.quantity > 0)
        );
      },
      Sa = (s) => {
        Le((o) => o.filter((g) => g.product.id !== s));
      },
      qe = (s) =>
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(s),
      es = () => {
        if (m?.whatsapp) {
          const s = m.whatsapp.replace(/\D/g, ""),
            o = encodeURIComponent(
              "Olá! Vim pelo site e gostaria de solicitar um serviço."
            );
          window.open(`https://wa.me/${s}?text=${o}`, "_blank");
        }
      },
      Qs = be.reduce((s, o) => s + o.product.price * o.quantity, 0),
      ms = be.reduce((s, o) => s + o.quantity, 0),
      Ks = [...new Set(f.map((s) => s.category))],
      Js = (s) => {
        if (ta[s]) return ta[s];
        const o = le.find((g) => g.id === s);
        return o ? o.name : s;
      },
      Ns = f.filter((s) => {
        const o = ce === "all" || s.category === ce,
          g =
            !ne ||
            s.name.toLowerCase().includes(ne.toLowerCase()) ||
            s.brand?.toLowerCase().includes(ne.toLowerCase()) ||
            s.description?.toLowerCase().includes(ne.toLowerCase());
        return o && g;
      }),
      Ys = a.logo_url || m?.logo_url;
    if (C)
      return e.jsx("div", {
        className: "min-h-screen flex items-center justify-center",
        style: { backgroundColor: "#000" },
        children: e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsxs("div", {
              className: "relative w-16 h-16 mx-auto mb-6",
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 rounded-full border-2 border-emerald-500/30",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 rounded-full border-t-2 border-emerald-500 animate-spin",
                }),
                e.jsx(Ps, {
                  className: "absolute inset-0 m-auto w-6 h-6 text-emerald-500",
                }),
              ],
            }),
            e.jsx("p", {
              className: "text-neutral-400 font-medium",
              children: "Carregando...",
            }),
          ],
        }),
      });
    if (!m)
      return e.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-4",
        style: { backgroundColor: "#000" },
        children: e.jsxs(ye, {
          className:
            "max-w-md w-full text-center p-10 bg-neutral-900 border-neutral-800",
          children: [
            e.jsx(Cs, { className: "w-20 h-20 mx-auto text-red-500/80 mb-6" }),
            e.jsx("h1", {
              className: "text-2xl font-bold text-white mb-3",
              children: J ? "Conexão instável" : "Página não encontrada",
            }),
            e.jsx("p", {
              className: "text-neutral-400 mb-6",
              children: J
                ? "Não conseguimos carregar a loja agora. Verifique sua internet e tente novamente."
                : "Este profissional não existe ou está inativo.",
            }),
            J &&
              e.jsxs(N, {
                onClick: () => {
                  A(!1), _(!0), Ae();
                },
                className: "bg-emerald-600 hover:bg-emerald-500",
                children: [
                  e.jsx(Vs, { className: "w-4 h-4 mr-2" }),
                  " Tentar novamente",
                ],
              }),
          ],
        }),
      });
    const Zs = [
        { id: "home", label: "Início", icon: Ba },
        ...(a.hide_unlock_services
          ? []
          : [{ id: "services", label: "Serviços", icon: Fe }]),
        { id: "store", label: "Loja", icon: Ha },
        ...(a.show_iptv_section
          ? [{ id: "iptv", label: "IPTV/Streaming", icon: ys }]
          : []),
        { id: "tracking", label: "Área do Cliente", icon: Ve },
      ],
      $a = a.hide_unlock_references
        ? [
            {
              icon: Ee,
              title: "Entrega Rápida",
              desc: "Receba seus produtos em minutos",
            },
            {
              icon: Te,
              title: "100% Seguro",
              desc: "Transações protegidas sempre",
            },
            {
              icon: Ue,
              title: "Qualidade",
              desc: "Produtos originais garantidos",
            },
            { icon: ps, title: "Suporte", desc: "Atendimento dedicado 24/7" },
          ]
        : [
            {
              icon: Ee,
              title: "Serviço Rápido",
              desc: "Desbloqueio em minutos, não horas",
            },
            {
              icon: Te,
              title: "100% Seguro",
              desc: "Seus dados protegidos sempre",
            },
            {
              icon: Ue,
              title: "Experiência",
              desc: "Anos de expertise no mercado",
            },
            {
              icon: ps,
              title: "Garantia",
              desc: "Satisfação garantida ou reembolso",
            },
          ],
      Pa = [
        { icon: Ps, title: "iCloud", desc: "Remoção completa" },
        { icon: Xe, title: "FRP/Google", desc: "Bypass seguro" },
        { icon: ze, title: "MDM", desc: "Remoção empresarial" },
        { icon: ws, title: "PIN/Senha", desc: "Desbloqueio rápido" },
      ],
      Ea = a.hide_unlock_references
        ? [
            { value: "500+", label: "Vendas Realizadas" },
            { value: "5.0", label: "Avaliação Média" },
            { value: "Rápido", label: "Entrega Digital" },
            { value: "100%", label: "Satisfação" },
          ]
        : [
            { value: "500+", label: "Serviços Realizados" },
            { value: "5.0", label: "Avaliação Média" },
            { value: "24h", label: "Tempo Médio" },
            { value: "100%", label: "Satisfação" },
          ];
    return k === "tracking" && q
      ? e.jsx(la, {
          trackedOrder: q,
          config: a,
          unlocker: m,
          formatCurrency: qe,
          onBack: () => {
            F(null), je(!1), oe(""), Y("tracking");
          },
          onOrderUpdate: (s) => F(s),
        })
      : e.jsxs("div", {
          className: "min-h-screen flex overflow-x-hidden",
          style: { backgroundColor: ds, color: n },
          children: [
            se &&
              e.jsx("div", {
                className: "fixed inset-0 bg-black/60 z-40 lg:hidden",
                onClick: () => V(!1),
              }),
            e.jsx("aside", {
              className: `fixed lg:sticky top-0 left-0 z-50 h-screen w-[280px] lg:w-72 transition-transform duration-300 ${
                se ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
              }`,
              style: {
                backgroundColor: t,
                borderRight: `1px solid ${p}`,
                boxShadow: E
                  ? "4px 0 20px rgba(0,0,0,0.3)"
                  : "4px 0 20px rgba(0,0,0,0.05)",
              },
              children: e.jsxs("div", {
                className: "flex flex-col h-full",
                children: [
                  e.jsxs("div", {
                    className:
                      "p-4 lg:p-6 border-b flex flex-col items-center justify-center relative",
                    style: { borderColor: p },
                    children: [
                      e.jsx("button", {
                        className:
                          "lg:hidden absolute top-3 right-3 p-2 rounded-lg transition-all hover:bg-white/10",
                        onClick: () => V(!1),
                        children: e.jsx(ls, {
                          className: "w-5 h-5",
                          style: { color: j },
                        }),
                      }),
                      Ys
                        ? e.jsx("img", {
                            src: Ys,
                            alt: m.store_name || m.name,
                            className:
                              "h-24 lg:h-32 w-auto max-w-[160px] lg:max-w-[180px] object-contain mx-auto",
                          })
                        : e.jsxs("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl transition-transform duration-300 hover:scale-105",
                                style: {
                                  background: `linear-gradient(135deg, ${a.primary_color} 0%, ${a.secondary_color} 100%)`,
                                  boxShadow: `0 8px 25px ${a.primary_color}40`,
                                },
                                children: (m.store_name || m.name)
                                  .charAt(0)
                                  .toUpperCase(),
                              }),
                              e.jsxs("div", {
                                className: "text-center",
                                children: [
                                  e.jsx("h1", {
                                    className: "font-bold text-base",
                                    style: { color: n },
                                    children: m.store_name || m.name,
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-xs flex items-center justify-center gap-1 mt-1",
                                    style: { color: j },
                                    children: [
                                      e.jsx(ba, {
                                        className: "w-3.5 h-3.5",
                                        style: { color: a.primary_color },
                                      }),
                                      "Verificado",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                  e.jsxs("nav", {
                    className: "flex-1 p-3 lg:p-4 space-y-1 overflow-y-auto",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[10px] uppercase tracking-wider font-semibold mb-2 lg:mb-3 px-2 lg:px-3",
                        style: { color: z },
                        children: "Menu Principal",
                      }),
                      Zs.map((s, o) =>
                        e.jsxs(
                          "button",
                          {
                            onClick: () => {
                              Y(s.id), V(!1);
                            },
                            className: `w-full flex items-center gap-2.5 lg:gap-3 px-3 lg:px-4 py-3 lg:py-3.5 rounded-xl text-sm font-medium transition-all duration-300 group relative overflow-hidden ${
                              k === s.id ? "text-white" : "hover:translate-x-1"
                            }`,
                            style: {
                              background:
                                k === s.id
                                  ? `linear-gradient(135deg, ${a.primary_color} 0%, ${a.secondary_color} 100%)`
                                  : "transparent",
                              color: k === s.id ? "#fff" : j,
                              boxShadow:
                                k === s.id
                                  ? `0 4px 20px ${a.primary_color}50`
                                  : "none",
                              animationDelay: `${o * 50}ms`,
                            },
                            children: [
                              k !== s.id &&
                                e.jsx("div", {
                                  className:
                                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl",
                                  style: {
                                    backgroundColor: `${a.primary_color}10`,
                                  },
                                }),
                              e.jsx("div", {
                                className: `relative w-8 h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                  k === s.id
                                    ? "bg-white/20"
                                    : "group-hover:scale-110"
                                }`,
                                style: {
                                  backgroundColor:
                                    k !== s.id
                                      ? `${a.primary_color}15`
                                      : void 0,
                                },
                                children: e.jsx(s.icon, {
                                  className: `w-5 h-5 transition-all duration-300 ${
                                    k === s.id ? "scale-110" : ""
                                  }`,
                                  style: {
                                    color:
                                      k === s.id ? "#fff" : a.primary_color,
                                  },
                                }),
                              }),
                              e.jsx("span", {
                                className: "relative",
                                children: s.label,
                              }),
                              k === s.id &&
                                e.jsx("div", {
                                  className: "ml-auto flex items-center gap-1",
                                  children: e.jsx("div", {
                                    className:
                                      "w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse",
                                  }),
                                }),
                              k !== s.id &&
                                e.jsx(qs, {
                                  className:
                                    "ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 transition-all duration-300",
                                  style: { color: z },
                                }),
                            ],
                          },
                          s.id
                        )
                      ),
                      e.jsxs("div", {
                        className: "pt-4 mt-4 border-t",
                        style: { borderColor: p },
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[10px] uppercase tracking-wider font-semibold mb-3 px-3",
                            style: { color: z },
                            children: "Ações Rápidas",
                          }),
                          e.jsxs("button", {
                            onClick: es,
                            className:
                              "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group hover:translate-x-1",
                            style: { color: j },
                            children: [
                              e.jsx("div", {
                                className:
                                  "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                                style: {
                                  backgroundColor: `${a.primary_color}15`,
                                },
                                children: e.jsx(Oe, {
                                  className: "w-5 h-5",
                                  style: { color: a.primary_color },
                                }),
                              }),
                              e.jsx("span", { children: "Suporte" }),
                              e.jsx(qs, {
                                className:
                                  "ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 transition-all duration-300",
                                style: { color: z },
                              }),
                            ],
                          }),
                          a.whatsapp_group_link &&
                            e.jsxs("a", {
                              href: a.whatsapp_group_link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group hover:translate-x-1",
                              style: { color: j },
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                                  style: { backgroundColor: "#25D36615" },
                                  children: e.jsx(vs, {
                                    className: "w-5 h-5 text-[#25D366]",
                                  }),
                                }),
                                e.jsx("span", { children: "Grupo VIP" }),
                                e.jsx(Xs, {
                                  className:
                                    "ml-auto w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 transition-all duration-300",
                                  style: { color: z },
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  a.announcements &&
                    a.announcements.filter((s) => s.is_active).length > 0 &&
                    e.jsxs("div", {
                      className: "px-4 py-3 border-t",
                      style: { borderColor: p },
                      children: [
                        e.jsxs("p", {
                          className:
                            "text-xs font-semibold mb-2 flex items-center gap-1.5",
                          style: { color: j },
                          children: [
                            e.jsx(Ga, {
                              className: "w-3.5 h-3.5",
                              style: { color: a.primary_color },
                            }),
                            "Avisos",
                          ],
                        }),
                        e.jsx("div", {
                          className: "space-y-2 max-h-32 overflow-y-auto",
                          children: a.announcements
                            .filter((s) => s.is_active)
                            .slice(0, 2)
                            .map((s) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "p-2.5 rounded-lg text-xs transition-all duration-300 hover:scale-[1.02]",
                                  style: {
                                    backgroundColor:
                                      s.type === "promo"
                                        ? `${a.primary_color}15`
                                        : s.type === "alert"
                                        ? "rgba(245,158,11,0.15)"
                                        : x,
                                    border: `1px solid ${
                                      s.type === "promo"
                                        ? `${a.primary_color}30`
                                        : s.type === "alert"
                                        ? "rgba(245,158,11,0.3)"
                                        : p
                                    }`,
                                  },
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center gap-1.5 mb-1",
                                      children: [
                                        s.type === "promo" &&
                                          e.jsx(ia, {
                                            className: "w-3 h-3",
                                            style: { color: a.primary_color },
                                          }),
                                        s.type === "info" &&
                                          e.jsx(As, {
                                            className: "w-3 h-3 text-blue-500",
                                          }),
                                        s.type === "alert" &&
                                          e.jsx(Wa, {
                                            className: "w-3 h-3 text-amber-500",
                                          }),
                                        e.jsx("span", {
                                          className: "font-semibold truncate",
                                          style: { color: n },
                                          children: s.title,
                                        }),
                                      ],
                                    }),
                                    s.content &&
                                      e.jsx("p", {
                                        className: "line-clamp-2",
                                        style: { color: j },
                                        children: s.content,
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
                    className: "p-4 border-t space-y-4",
                    style: { borderColor: p },
                    children: [
                      a.show_whatsapp &&
                        m.whatsapp &&
                        e.jsxs(N, {
                          onClick: es,
                          className:
                            "w-full gap-2 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95",
                          style: {
                            backgroundColor: "#25D366",
                            boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
                          },
                          children: [
                            e.jsx(Me, { className: "w-4 h-4" }),
                            "Falar no WhatsApp",
                          ],
                        }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2 justify-center",
                        children: [
                          a.social_links.instagram &&
                            e.jsx("a", {
                              href: a.social_links.instagram,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95",
                              style: {
                                background:
                                  "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                              },
                              children: e.jsx(da, {
                                className: "w-5 h-5 text-white",
                              }),
                            }),
                          a.social_links.facebook &&
                            e.jsx("a", {
                              href: a.social_links.facebook,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95",
                              children: e.jsx(ja, {
                                className: "w-5 h-5 text-white",
                              }),
                            }),
                          a.social_links.telegram &&
                            e.jsx("a", {
                              href: a.social_links.telegram,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "w-10 h-10 rounded-xl bg-[#0088cc] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg active:scale-95",
                              children: e.jsx(hs, {
                                className: "w-5 h-5 text-white",
                              }),
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs",
                        style: { backgroundColor: x, color: j },
                        children: [
                          e.jsx(Be, {
                            className: "w-3.5 h-3.5",
                            style: { color: a.primary_color },
                          }),
                          e.jsx("span", { children: a.working_hours }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs("main", {
              className: "flex-1 min-h-screen overflow-x-hidden",
              children: [
                e.jsxs("header", {
                  className:
                    "lg:hidden sticky top-0 z-30 flex items-center justify-between p-4 border-b backdrop-blur-xl",
                  style: {
                    backgroundColor: E
                      ? "rgba(0,0,0,0.9)"
                      : "rgba(255,255,255,0.95)",
                    borderColor: p,
                  },
                  children: [
                    e.jsx("button", {
                      onClick: () => V(!0),
                      children: e.jsx(Qa, {
                        className: "w-6 h-6",
                        style: { color: n },
                      }),
                    }),
                    e.jsx("div", {
                      className: "flex items-center gap-2",
                      children: e.jsxs(N, {
                        variant: "ghost",
                        size: "sm",
                        className: "relative",
                        onClick: () => X(!0),
                        children: [
                          e.jsx(Ye, {
                            className: "w-5 h-5",
                            style: { color: j },
                          }),
                          ms > 0 &&
                            e.jsx("span", {
                              className:
                                "absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center text-white",
                              style: { backgroundColor: a.primary_color },
                              children: ms,
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "hidden lg:block fixed top-4 right-4 z-30",
                  children: e.jsxs(N, {
                    variant: "outline",
                    className: "gap-2 shadow-lg",
                    style: { backgroundColor: t, borderColor: p },
                    onClick: () => X(!0),
                    children: [
                      e.jsx(Ye, { className: "w-4 h-4", style: { color: j } }),
                      "Carrinho",
                      ms > 0 &&
                        e.jsx(H, {
                          style: { backgroundColor: a.primary_color },
                          children: ms,
                        }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "p-3 sm:p-4 lg:p-8 max-w-6xl mx-auto overflow-x-hidden",
                  children: [
                    k === "home" &&
                      e.jsxs("div", {
                        className: "space-y-6 sm:space-y-8 lg:space-y-10",
                        children: [
                          !a.hide_banner &&
                            (a.banner_url || a.banner_mobile_url) &&
                            e.jsxs("div", {
                              className:
                                "rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl",
                              children: [
                                a.banner_url &&
                                  e.jsx("img", {
                                    src: a.banner_url,
                                    alt: "Banner",
                                    className:
                                      "hidden md:block w-full h-40 lg:h-64 object-cover",
                                  }),
                                (a.banner_mobile_url || a.banner_url) &&
                                  e.jsx("img", {
                                    src: a.banner_mobile_url || a.banner_url,
                                    alt: "Banner",
                                    className:
                                      "md:hidden w-full h-32 sm:h-40 object-cover",
                                  }),
                              ],
                            }),
                          e.jsxs("div", {
                            className: "space-y-4 sm:space-y-6",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex flex-wrap items-center gap-1.5 sm:gap-2",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold",
                                    style: {
                                      backgroundColor: `${a.primary_color}20`,
                                      color: a.primary_color,
                                    },
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-1.5 h-1.5 rounded-full bg-current animate-pulse",
                                      }),
                                      "DISPONÍVEL AGORA",
                                    ],
                                  }),
                                  !a.hide_unlock_references &&
                                    e.jsxs(H, {
                                      variant: "secondary",
                                      className: "text-xs",
                                      style: { backgroundColor: x, color: j },
                                      children: [
                                        e.jsx(ke, {
                                          className:
                                            "w-3 h-3 mr-1 fill-amber-400 text-amber-400",
                                        }),
                                        "5.0 • +500 serviços",
                                      ],
                                    }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("h1", {
                                    className:
                                      "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 leading-tight",
                                    children: a.hide_unlock_references
                                      ? m.store_name || m.name
                                      : a.hero_title,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-sm sm:text-base md:text-lg lg:text-xl",
                                    style: { color: j },
                                    children: a.hide_unlock_references
                                      ? "Produtos digitais com entrega rápida e segura"
                                      : a.hero_subtitle,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                  !a.hide_unlock_services &&
                                    e.jsxs(N, {
                                      size: "lg",
                                      className:
                                        "gap-2 shadow-lg shadow-primary/30 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group",
                                      style: {
                                        backgroundColor: a.primary_color,
                                      },
                                      onClick: () => Y("services"),
                                      children: [
                                        e.jsx(Qe, {
                                          className:
                                            "w-4 h-4 transition-transform group-hover:rotate-12",
                                        }),
                                        "Solicitar Serviço",
                                        e.jsx(ks, {
                                          className:
                                            "w-4 h-4 transition-transform group-hover:translate-x-1",
                                        }),
                                      ],
                                    }),
                                  e.jsxs(N, {
                                    size: "lg",
                                    variant: a.hide_unlock_services
                                      ? "default"
                                      : "outline",
                                    className: `gap-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
                                      a.hide_unlock_services ? "text-white" : ""
                                    }`,
                                    style: {
                                      borderColor: a.hide_unlock_services
                                        ? void 0
                                        : p,
                                      color: a.hide_unlock_services
                                        ? "#fff"
                                        : n,
                                      backgroundColor: a.hide_unlock_services
                                        ? a.primary_color
                                        : "transparent",
                                    },
                                    onClick: () => Y("store"),
                                    children: [
                                      e.jsx(Re, { className: "w-4 h-4" }),
                                      "Ver Produtos",
                                    ],
                                  }),
                                  e.jsxs(N, {
                                    size: "lg",
                                    variant: "outline",
                                    className:
                                      "gap-2 transition-all duration-300 hover:scale-105 active:scale-95",
                                    style: {
                                      borderColor: p,
                                      color: n,
                                      backgroundColor: "transparent",
                                    },
                                    onClick: () => Y("tracking"),
                                    children: [
                                      e.jsx(Je, { className: "w-4 h-4" }),
                                      "Rastrear Pedido",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "relative overflow-hidden rounded-3xl p-8",
                            style: {
                              background: `linear-gradient(135deg, ${a.primary_color} 0%, ${a.secondary_color} 100%)`,
                            },
                            children: [
                              e.jsx("div", {
                                className:
                                  "absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5",
                              }),
                              e.jsx("div", {
                                className:
                                  "absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5",
                              }),
                              e.jsx("div", {
                                className:
                                  "relative grid grid-cols-2 md:grid-cols-4 gap-6",
                                children: Ea.map((s, o) =>
                                  e.jsxs(
                                    "div",
                                    {
                                      className:
                                        "text-center group cursor-default",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-3xl md:text-4xl font-black text-white transition-transform group-hover:scale-110",
                                          children: s.value,
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-sm text-white/70 mt-1",
                                          children: s.label,
                                        }),
                                      ],
                                    },
                                    o
                                  )
                                ),
                              }),
                            ],
                          }),
                          !a.hide_unlock_references &&
                            e.jsxs("div", {
                              children: [
                                e.jsxs("div", {
                                  className: "text-center mb-8",
                                  children: [
                                    e.jsx(H, {
                                      className: "mb-3",
                                      style: {
                                        backgroundColor: `${a.primary_color}20`,
                                        color: a.primary_color,
                                      },
                                      children: "Simples & Rápido",
                                    }),
                                    e.jsx("h2", {
                                      className:
                                        "text-2xl md:text-3xl font-bold mb-2",
                                      children: "Como Funciona?",
                                    }),
                                    e.jsx("p", {
                                      style: { color: j },
                                      children: "Em apenas 4 passos simples",
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                  children: [
                                    {
                                      step: "01",
                                      title: "Solicite",
                                      desc: "Preencha o formulário com os dados do seu dispositivo",
                                      icon: ts,
                                    },
                                    {
                                      step: "02",
                                      title: "Análise",
                                      desc: "Nossa equipe analisa e entra em contato rapidamente",
                                      icon: Je,
                                    },
                                    {
                                      step: "03",
                                      title: "Desbloqueio",
                                      desc: "Realizamos o serviço com segurança e agilidade",
                                      icon: Ps,
                                    },
                                    {
                                      step: "04",
                                      title: "Pronto!",
                                      desc: "Seu dispositivo é liberado e você recebe os dados",
                                      icon: Ce,
                                    },
                                  ].map((s, o) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "relative p-6 rounded-2xl text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-2",
                                        style: {
                                          backgroundColor: t,
                                          border: `1px solid ${p}`,
                                        },
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg",
                                            style: {
                                              backgroundColor: a.primary_color,
                                            },
                                            children: s.step,
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6",
                                            style: {
                                              backgroundColor: `${a.primary_color}15`,
                                            },
                                            children: e.jsx(s.icon, {
                                              className: "w-7 h-7",
                                              style: { color: a.primary_color },
                                            }),
                                          }),
                                          e.jsx("h4", {
                                            className: "font-bold mb-2",
                                            children: s.title,
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-xs leading-relaxed",
                                            style: { color: j },
                                            children: s.desc,
                                          }),
                                          o < 3 &&
                                            e.jsx("div", {
                                              className:
                                                "hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 -translate-y-1/2",
                                              style: {
                                                backgroundColor:
                                                  a.primary_color,
                                                opacity: 0.3,
                                              },
                                            }),
                                        ],
                                      },
                                      o
                                    )
                                  ),
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            className:
                              "animate-in fade-in slide-in-from-bottom duration-700 delay-100",
                            children: [
                              e.jsxs("h2", {
                                className:
                                  "text-xl font-bold mb-4 flex items-center gap-2",
                                style: { color: n },
                                children: [
                                  e.jsx(sa, {
                                    className: "w-5 h-5",
                                    style: { color: a.primary_color },
                                  }),
                                  "Por que nos escolher?",
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: $a.map((s, o) =>
                                  e.jsxs(
                                    ye,
                                    {
                                      className:
                                        "p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group cursor-default",
                                      style: {
                                        backgroundColor: t,
                                        borderColor: p,
                                        boxShadow: E
                                          ? "0 4px 20px rgba(0,0,0,0.3)"
                                          : "0 4px 20px rgba(0,0,0,0.08)",
                                      },
                                      children: [
                                        e.jsx("div", {
                                          className:
                                            "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                          style: {
                                            backgroundColor: `${a.primary_color}15`,
                                          },
                                          children: e.jsx(s.icon, {
                                            className:
                                              "w-6 h-6 transition-colors",
                                            style: { color: a.primary_color },
                                          }),
                                        }),
                                        e.jsx("h3", {
                                          className: "font-semibold mb-1",
                                          style: { color: n },
                                          children: s.title,
                                        }),
                                        e.jsx("p", {
                                          className: "text-sm",
                                          style: { color: j },
                                          children: s.desc,
                                        }),
                                      ],
                                    },
                                    o
                                  )
                                ),
                              }),
                            ],
                          }),
                          !a.hide_unlock_references &&
                            e.jsxs("div", {
                              children: [
                                e.jsxs("h2", {
                                  className:
                                    "text-xl font-bold mb-4 flex items-center gap-2",
                                  children: [
                                    e.jsx(Ka, {
                                      className: "w-5 h-5",
                                      style: { color: a.primary_color },
                                    }),
                                    "Nossos Serviços",
                                  ],
                                }),
                                e.jsx("div", {
                                  className:
                                    "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                  children: Pa.map((s, o) =>
                                    e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "p-5 rounded-xl text-center transition-all hover:scale-105 cursor-pointer",
                                        style: {
                                          background: `linear-gradient(135deg, ${a.primary_color}15 0%, ${t} 100%)`,
                                          border: `1px solid ${p}`,
                                        },
                                        onClick: () => Y("services"),
                                        children: [
                                          e.jsx(s.icon, {
                                            className: "w-8 h-8 mx-auto mb-3",
                                            style: { color: a.primary_color },
                                          }),
                                          e.jsx("h4", {
                                            className: "font-semibold text-sm",
                                            children: s.title,
                                          }),
                                          e.jsx("p", {
                                            className: "text-xs mt-1",
                                            style: { color: j },
                                            children: s.desc,
                                          }),
                                        ],
                                      },
                                      o
                                    )
                                  ),
                                }),
                              ],
                            }),
                          a.about_text &&
                            e.jsx(ye, {
                              className: "p-6",
                              style: {
                                background: `linear-gradient(135deg, ${a.primary_color}10 0%, ${t} 100%)`,
                                borderColor: p,
                                boxShadow: E
                                  ? "0 4px 20px rgba(0,0,0,0.3)"
                                  : "0 4px 20px rgba(0,0,0,0.08)",
                              },
                              children: e.jsxs("div", {
                                className: "flex items-start gap-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
                                    style: { backgroundColor: a.primary_color },
                                    children: e.jsx(Ve, {
                                      className: "w-7 h-7 text-white",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsxs("h3", {
                                        className: "font-bold text-lg mb-2",
                                        style: { color: n },
                                        children: [
                                          "Sobre ",
                                          m.store_name || m.name,
                                        ],
                                      }),
                                      e.jsx("p", {
                                        style: { color: j },
                                        children: a.about_text,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("h2", {
                                className:
                                  "text-xl font-bold mb-4 flex items-center gap-2",
                                children: [
                                  e.jsx(Ja, {
                                    className: "w-5 h-5",
                                    style: { color: a.primary_color },
                                  }),
                                  "Marcas Atendidas",
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "flex flex-wrap gap-4 justify-center items-center p-6 rounded-2xl",
                                style: {
                                  backgroundColor: t,
                                  borderColor: p,
                                  border: `1px solid ${p}`,
                                },
                                children: vl.map((s) =>
                                  e.jsx(
                                    "div",
                                    {
                                      className:
                                        "w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center p-2 transition-all hover:scale-110",
                                      style: {
                                        backgroundColor: E ? x : "#ffffff",
                                      },
                                      children: e.jsx("img", {
                                        src: s.logo,
                                        alt: s.name,
                                        className: `max-w-full max-h-full object-contain ${
                                          E
                                            ? "filter brightness-0 invert opacity-70"
                                            : ""
                                        }`,
                                      }),
                                    },
                                    s.name
                                  )
                                ),
                              }),
                            ],
                          }),
                          h.length > 0 &&
                            e.jsxs("div", {
                              className: "relative",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20",
                                  style: { backgroundColor: a.primary_color },
                                }),
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8",
                                      children: [
                                        e.jsxs("div", {
                                          children: [
                                            e.jsxs(H, {
                                              className: "mb-3",
                                              style: {
                                                backgroundColor: `${a.primary_color}20`,
                                                color: a.primary_color,
                                              },
                                              children: [
                                                e.jsx(ke, {
                                                  className:
                                                    "w-3 h-3 mr-1 fill-current",
                                                }),
                                                "Avaliações Verificadas",
                                              ],
                                            }),
                                            e.jsxs("h2", {
                                              className:
                                                "text-2xl md:text-3xl font-bold flex items-center gap-3",
                                              children: [
                                                e.jsx(aa, {
                                                  className: "w-7 h-7",
                                                  style: {
                                                    color: a.primary_color,
                                                  },
                                                }),
                                                "O que dizem nossos clientes",
                                              ],
                                            }),
                                            e.jsx("p", {
                                              className: "mt-2",
                                              style: { color: j },
                                              children:
                                                "Confira a experiência de quem já utilizou nossos serviços",
                                            }),
                                          ],
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-3 px-5 py-3 rounded-2xl",
                                          style: {
                                            background: `linear-gradient(135deg, ${a.primary_color}15 0%, ${t} 100%)`,
                                            border: `1px solid ${a.primary_color}30`,
                                          },
                                          children: [
                                            e.jsxs("div", {
                                              className: "text-center",
                                              children: [
                                                e.jsx("p", {
                                                  className:
                                                    "text-3xl font-bold",
                                                  style: {
                                                    color: a.primary_color,
                                                  },
                                                  children: (
                                                    h.reduce(
                                                      (s, o) => s + o.rating,
                                                      0
                                                    ) / h.length
                                                  ).toFixed(1),
                                                }),
                                                e.jsx("div", {
                                                  className:
                                                    "flex items-center gap-0.5 mt-1",
                                                  children: [...Array(5)].map(
                                                    (s, o) =>
                                                      e.jsx(
                                                        ke,
                                                        {
                                                          className:
                                                            "w-3 h-3 fill-amber-400 text-amber-400",
                                                        },
                                                        o
                                                      )
                                                  ),
                                                }),
                                              ],
                                            }),
                                            e.jsx("div", {
                                              className: "h-10 w-px",
                                              style: { backgroundColor: p },
                                            }),
                                            e.jsxs("div", {
                                              className: "text-left",
                                              children: [
                                                e.jsxs("p", {
                                                  className:
                                                    "text-sm font-semibold",
                                                  children: [h.length, "+"],
                                                }),
                                                e.jsx("p", {
                                                  className: "text-xs",
                                                  style: { color: z },
                                                  children: "avaliações",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
                                      children: h.slice(0, 6).map((s, o) =>
                                        e.jsxs(
                                          "div",
                                          {
                                            className:
                                              "group relative p-6 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2",
                                            style: {
                                              backgroundColor: t,
                                              border: `1px solid ${p}`,
                                              animationDelay: `${o * 100}ms`,
                                            },
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "absolute -top-3 -left-3 w-10 h-10 rounded-xl flex items-center justify-center rotate-12 shadow-lg transition-transform group-hover:scale-110",
                                                style: {
                                                  backgroundColor:
                                                    a.primary_color,
                                                },
                                                children: e.jsx(aa, {
                                                  className:
                                                    "w-5 h-5 text-white -rotate-12",
                                                }),
                                              }),
                                              e.jsx("div", {
                                                className:
                                                  "flex items-center gap-1 mb-4 pt-2",
                                                children: [...Array(5)].map(
                                                  (g, D) =>
                                                    e.jsx(
                                                      ke,
                                                      {
                                                        className: `w-5 h-5 transition-transform group-hover:scale-110 ${
                                                          D < s.rating
                                                            ? "fill-amber-400 text-amber-400"
                                                            : "text-neutral-600"
                                                        }`,
                                                        style: {
                                                          transitionDelay: `${
                                                            D * 50
                                                          }ms`,
                                                        },
                                                      },
                                                      D
                                                    )
                                                ),
                                              }),
                                              e.jsxs("p", {
                                                className:
                                                  "text-sm leading-relaxed mb-5 italic",
                                                style: { color: j },
                                                children: ['"', s.comment, '"'],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-3 pt-4 border-t",
                                                style: { borderColor: p },
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg",
                                                    style: {
                                                      background: `linear-gradient(135deg, ${a.primary_color} 0%, ${a.secondary_color} 100%)`,
                                                    },
                                                    children: s.client_name
                                                      .split(" ")
                                                      .map((g) => g[0])
                                                      .slice(0, 2)
                                                      .join(""),
                                                  }),
                                                  e.jsxs("div", {
                                                    className: "flex-1",
                                                    children: [
                                                      e.jsx("p", {
                                                        className:
                                                          "font-semibold text-sm",
                                                        children: s.client_name,
                                                      }),
                                                      s.service_type &&
                                                        e.jsxs("p", {
                                                          className:
                                                            "text-xs flex items-center gap-1",
                                                          style: {
                                                            color:
                                                              a.primary_color,
                                                          },
                                                          children: [
                                                            e.jsx(Ce, {
                                                              className:
                                                                "w-3 h-3",
                                                            }),
                                                            s.service_type,
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
                                    e.jsx("div", {
                                      className:
                                        "mt-8 p-5 rounded-2xl flex flex-wrap items-center justify-center gap-6",
                                      style: { backgroundColor: x },
                                      children: [
                                        { icon: Te, text: "100% Seguro" },
                                        {
                                          icon: Ue,
                                          text: "Especialista Verificado",
                                        },
                                        {
                                          icon: ps,
                                          text: "Satisfação Garantida",
                                        },
                                        {
                                          icon: vs,
                                          text: "+500 Clientes Atendidos",
                                        },
                                      ].map((s, o) =>
                                        e.jsxs(
                                          "div",
                                          {
                                            className:
                                              "flex items-center gap-2 px-4 py-2 rounded-full",
                                            style: { backgroundColor: t },
                                            children: [
                                              e.jsx(s.icon, {
                                                className: "w-4 h-4",
                                                style: {
                                                  color: a.primary_color,
                                                },
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "text-xs font-medium",
                                                style: { color: n },
                                                children: s.text,
                                              }),
                                            ],
                                          },
                                          o
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          e.jsxs("div", {
                            className: "p-8 rounded-2xl text-center",
                            style: {
                              background: `linear-gradient(135deg, ${a.primary_color} 0%, ${a.secondary_color} 100%)`,
                            },
                            children: [
                              e.jsx("h2", {
                                className: "text-2xl font-bold text-white mb-3",
                                children: "Pronto para começar?",
                              }),
                              e.jsx("p", {
                                className: "text-white/80 mb-6",
                                children:
                                  "Solicite seu serviço agora e tenha seu dispositivo desbloqueado rapidamente.",
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex flex-wrap gap-3 justify-center",
                                children: [
                                  e.jsxs(N, {
                                    size: "lg",
                                    className: "gap-2",
                                    style: {
                                      backgroundColor: E
                                        ? "#ffffff"
                                        : a.primary_color,
                                      color: E ? a.primary_color : "#ffffff",
                                    },
                                    onClick: () => Y("services"),
                                    children: [
                                      e.jsx(Qe, { className: "w-4 h-4" }),
                                      "Solicitar Agora",
                                    ],
                                  }),
                                  a.show_whatsapp &&
                                    m.whatsapp &&
                                    e.jsxs(N, {
                                      size: "lg",
                                      variant: "outline",
                                      className: "gap-2",
                                      style: {
                                        borderColor: E
                                          ? "rgba(255,255,255,0.3)"
                                          : p,
                                        color: E ? "#ffffff" : n,
                                        backgroundColor: "transparent",
                                      },
                                      onClick: es,
                                      children: [
                                        e.jsx(Me, { className: "w-4 h-4" }),
                                        "WhatsApp",
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    k === "services" &&
                      e.jsxs("div", {
                        className: "space-y-8",
                        children: [
                          e.jsx("div", {
                            className:
                              "p-6 rounded-2xl relative overflow-hidden",
                            style: {
                              background: `linear-gradient(135deg, ${a.primary_color}15 0%, ${t} 100%)`,
                              border: `1px solid ${p}`,
                            },
                            children: e.jsxs("div", {
                              className:
                                "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsxs(H, {
                                      className: "mb-3 text-xs",
                                      style: {
                                        backgroundColor: `${a.primary_color}20`,
                                        color: E ? n : a.primary_color,
                                      },
                                      children: [
                                        e.jsx(Ee, {
                                          className: "w-3 h-3 mr-1",
                                        }),
                                        "Serviço Profissional",
                                      ],
                                    }),
                                    e.jsx("h2", {
                                      className: "text-2xl font-bold mb-2",
                                      style: { color: n },
                                      children: "Solicitar Serviço",
                                    }),
                                    e.jsx("p", {
                                      style: { color: j },
                                      children:
                                        "Preencha o formulário e receba atendimento especializado",
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "flex items-center gap-3",
                                  children:
                                    a.show_whatsapp &&
                                    m.whatsapp &&
                                    e.jsxs(N, {
                                      variant: "outline",
                                      className:
                                        "gap-2 bg-transparent hover:bg-transparent",
                                      style: {
                                        borderColor: E
                                          ? "rgba(255,255,255,0.25)"
                                          : p,
                                        color: n,
                                        backgroundColor: "transparent",
                                      },
                                      onClick: es,
                                      children: [
                                        e.jsx(Me, { className: "w-4 h-4" }),
                                        "WhatsApp",
                                      ],
                                    }),
                                }),
                              ],
                            }),
                          }),
                          e.jsxs("div", {
                            className: "grid lg:grid-cols-5 gap-8",
                            children: [
                              e.jsxs("div", {
                                className: "lg:col-span-2 space-y-4",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      e.jsxs("h3", {
                                        className:
                                          "font-semibold flex items-center gap-2",
                                        style: { color: n },
                                        children: [
                                          e.jsx(Fe, {
                                            className: "w-4 h-4",
                                            style: { color: a.primary_color },
                                          }),
                                          "Serviços Disponíveis",
                                        ],
                                      }),
                                      e.jsxs(H, {
                                        variant: "secondary",
                                        style: { backgroundColor: x, color: n },
                                        children: [y.length, " serviços"],
                                      }),
                                    ],
                                  }),
                                  y.length === 0
                                    ? e.jsx(ye, {
                                        style: {
                                          backgroundColor: t,
                                          borderColor: p,
                                        },
                                        children: e.jsxs(Se, {
                                          className: "py-8 text-center",
                                          children: [
                                            e.jsx(Fe, {
                                              className:
                                                "w-12 h-12 mx-auto opacity-20 mb-3",
                                            }),
                                            e.jsx("p", {
                                              style: { color: j },
                                              children:
                                                "Nenhum serviço cadastrado ainda.",
                                            }),
                                          ],
                                        }),
                                      })
                                    : e.jsx("div", {
                                        className:
                                          "space-y-3 max-h-[500px] overflow-y-auto pr-2",
                                        children: y.map((s) =>
                                          e.jsx(
                                            ye,
                                            {
                                              className:
                                                "transition-all hover:scale-[1.02]",
                                              style: {
                                                backgroundColor: t,
                                                borderColor: p,
                                              },
                                              children: e.jsx(Se, {
                                                className: "p-4",
                                                children: e.jsxs("div", {
                                                  className:
                                                    "flex items-start justify-between gap-4",
                                                  children: [
                                                    e.jsxs("div", {
                                                      className: "flex-1",
                                                      children: [
                                                        e.jsx(H, {
                                                          className:
                                                            "mb-2 text-[10px]",
                                                          style: {
                                                            backgroundColor: `${a.primary_color}20`,
                                                            color: E
                                                              ? n
                                                              : a.primary_color,
                                                          },
                                                          children: s.category,
                                                        }),
                                                        e.jsx("h4", {
                                                          className:
                                                            "font-semibold text-sm",
                                                          style: { color: n },
                                                          children: s.name,
                                                        }),
                                                        s.description &&
                                                          e.jsx("p", {
                                                            className:
                                                              "text-xs mt-1 line-clamp-2",
                                                            style: { color: j },
                                                            children:
                                                              s.description,
                                                          }),
                                                        s.estimated_time &&
                                                          e.jsx("div", {
                                                            className:
                                                              "flex items-center gap-2 mt-2",
                                                            children: e.jsxs(
                                                              "div",
                                                              {
                                                                className:
                                                                  "flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full",
                                                                style: {
                                                                  backgroundColor:
                                                                    x,
                                                                  color: z,
                                                                },
                                                                children: [
                                                                  e.jsx(Us, {
                                                                    className:
                                                                      "w-3 h-3",
                                                                  }),
                                                                  s.estimated_time,
                                                                ],
                                                              }
                                                            ),
                                                          }),
                                                      ],
                                                    }),
                                                    e.jsx("div", {
                                                      className: "text-right",
                                                      children: e.jsx("p", {
                                                        className:
                                                          "text-lg font-bold",
                                                        style: {
                                                          color: E
                                                            ? n
                                                            : a.primary_color,
                                                        },
                                                        children: qe(s.price),
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            },
                                            s.id
                                          )
                                        ),
                                      }),
                                  e.jsx(ye, {
                                    style: {
                                      backgroundColor: x,
                                      borderColor: p,
                                    },
                                    children: e.jsx(Se, {
                                      className: "p-4",
                                      children: e.jsxs("div", {
                                        className:
                                          "grid grid-cols-2 gap-3 text-center",
                                        children: [
                                          e.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              e.jsx(Te, {
                                                className: "w-6 h-6 mx-auto",
                                                style: {
                                                  color: a.primary_color,
                                                },
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-xs font-semibold",
                                                style: { color: n },
                                                children: "100% Seguro",
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              e.jsx(Oe, {
                                                className: "w-6 h-6 mx-auto",
                                                style: {
                                                  color: a.primary_color,
                                                },
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-xs font-semibold",
                                                style: { color: n },
                                                children: "Suporte 24h",
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              e.jsx(Ue, {
                                                className: "w-6 h-6 mx-auto",
                                                style: {
                                                  color: a.primary_color,
                                                },
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-xs font-semibold",
                                                style: { color: n },
                                                children: "Garantia",
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              e.jsx(Ee, {
                                                className: "w-6 h-6 mx-auto",
                                                style: {
                                                  color: a.primary_color,
                                                },
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-xs font-semibold",
                                                style: { color: n },
                                                children: "Rápido",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "lg:col-span-3",
                                children: e.jsxs(ye, {
                                  style: { backgroundColor: t, borderColor: p },
                                  children: [
                                    e.jsxs(Ya, {
                                      className: "pb-4",
                                      children: [
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center justify-between",
                                          children: [
                                            e.jsxs(Za, {
                                              className:
                                                "flex items-center gap-2 text-lg",
                                              style: { color: n },
                                              children: [
                                                e.jsx(hs, {
                                                  className: "w-5 h-5",
                                                  style: {
                                                    color: a.primary_color,
                                                  },
                                                }),
                                                "Formulário de Solicitação",
                                              ],
                                            }),
                                            e.jsx(H, {
                                              variant: "secondary",
                                              className: "text-[10px]",
                                              style: {
                                                backgroundColor: x,
                                                color: n,
                                              },
                                              children: "* Campos obrigatórios",
                                            }),
                                          ],
                                        }),
                                        e.jsx("p", {
                                          className: "text-xs",
                                          style: { color: j },
                                          children:
                                            "Complete as informações abaixo para iniciar seu serviço",
                                        }),
                                      ],
                                    }),
                                    e.jsx(Se, {
                                      children: e.jsxs("form", {
                                        onSubmit: wa,
                                        className: "space-y-5",
                                        children: [
                                          e.jsxs("div", {
                                            className: "space-y-3",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 pb-2 border-b",
                                                style: { borderColor: p },
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                                                    style: {
                                                      backgroundColor:
                                                        a.primary_color,
                                                    },
                                                    children: "1",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "font-semibold text-sm",
                                                    style: { color: n },
                                                    children: "Seus Dados",
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "grid sm:grid-cols-2 gap-4",
                                                children: [
                                                  e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                      e.jsxs(te, {
                                                        className:
                                                          "text-xs font-semibold flex items-center gap-1",
                                                        style: { color: n },
                                                        children: [
                                                          e.jsx(Ve, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                          " Nome Completo *",
                                                        ],
                                                      }),
                                                      e.jsx(xe, {
                                                        value: M.customer_name,
                                                        onChange: (s) =>
                                                          de((o) => ({
                                                            ...o,
                                                            customer_name:
                                                              s.target.value,
                                                          })),
                                                        placeholder:
                                                          "Digite seu nome completo",
                                                        required: !0,
                                                        className: "h-11",
                                                        style: {
                                                          backgroundColor: x,
                                                          borderColor: p,
                                                          color: n,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                      e.jsxs(te, {
                                                        className:
                                                          "text-xs font-semibold flex items-center gap-1",
                                                        style: { color: n },
                                                        children: [
                                                          e.jsx(Me, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                          " WhatsApp *",
                                                        ],
                                                      }),
                                                      e.jsx(xe, {
                                                        value: M.customer_phone,
                                                        onChange: (s) =>
                                                          de((o) => ({
                                                            ...o,
                                                            customer_phone:
                                                              s.target.value,
                                                          })),
                                                        placeholder:
                                                          "(00) 00000-0000",
                                                        required: !0,
                                                        className: "h-11",
                                                        style: {
                                                          backgroundColor: x,
                                                          borderColor: p,
                                                          color: n,
                                                        },
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
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 pb-2 border-b",
                                                style: { borderColor: p },
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                                                    style: {
                                                      backgroundColor:
                                                        a.primary_color,
                                                    },
                                                    children: "2",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "font-semibold text-sm",
                                                    style: { color: n },
                                                    children: "Tipo de Serviço",
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className: "space-y-2",
                                                children: [
                                                  e.jsxs(te, {
                                                    className:
                                                      "text-xs font-semibold flex items-center gap-1",
                                                    style: { color: n },
                                                    children: [
                                                      e.jsx(Fe, {
                                                        className: "w-3 h-3",
                                                      }),
                                                      " Serviço Desejado *",
                                                    ],
                                                  }),
                                                  e.jsxs(Oa, {
                                                    value: M.unlock_type,
                                                    onValueChange: (s) =>
                                                      de((o) => ({
                                                        ...o,
                                                        unlock_type: s,
                                                      })),
                                                    children: [
                                                      e.jsx(el, {
                                                        className: "h-11",
                                                        style: {
                                                          backgroundColor: x,
                                                          borderColor: p,
                                                          color: n,
                                                        },
                                                        children: e.jsx(sl, {
                                                          placeholder:
                                                            "Selecione o tipo de serviço",
                                                        }),
                                                      }),
                                                      e.jsx(al, {
                                                        style: {
                                                          backgroundColor: t,
                                                          borderColor: p,
                                                          color: n,
                                                        },
                                                        children: oa.map((s) =>
                                                          e.jsx(
                                                            ll,
                                                            {
                                                              value: s.value,
                                                              style: {
                                                                color: n,
                                                              },
                                                              children: s.label,
                                                            },
                                                            s.value
                                                          )
                                                        ),
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
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 pb-2 border-b",
                                                style: { borderColor: p },
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                                                    style: {
                                                      backgroundColor:
                                                        a.primary_color,
                                                    },
                                                    children: "3",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "font-semibold text-sm",
                                                    style: { color: n },
                                                    children:
                                                      "Informações do Dispositivo",
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "grid sm:grid-cols-2 gap-4",
                                                children: [
                                                  e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                      e.jsxs(te, {
                                                        className:
                                                          "text-xs font-semibold flex items-center gap-1",
                                                        style: { color: n },
                                                        children: [
                                                          e.jsx(ws, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                          " Marca",
                                                        ],
                                                      }),
                                                      e.jsx(xe, {
                                                        value: M.device_brand,
                                                        onChange: (s) =>
                                                          de((o) => ({
                                                            ...o,
                                                            device_brand:
                                                              s.target.value,
                                                          })),
                                                        placeholder:
                                                          "Ex: Apple, Samsung, Xiaomi",
                                                        className: "h-11",
                                                        style: {
                                                          backgroundColor: x,
                                                          borderColor: p,
                                                          color: n,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                      e.jsx(te, {
                                                        className:
                                                          "text-xs font-semibold",
                                                        style: { color: n },
                                                        children: "Modelo",
                                                      }),
                                                      e.jsx(xe, {
                                                        value: M.device_model,
                                                        onChange: (s) =>
                                                          de((o) => ({
                                                            ...o,
                                                            device_model:
                                                              s.target.value,
                                                          })),
                                                        placeholder:
                                                          "Ex: iPhone 14 Pro, Galaxy S23",
                                                        className: "h-11",
                                                        style: {
                                                          backgroundColor: x,
                                                          borderColor: p,
                                                          color: n,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className: "space-y-2",
                                                children: [
                                                  e.jsxs(te, {
                                                    className:
                                                      "text-xs font-semibold flex items-center gap-1",
                                                    style: { color: n },
                                                    children: [
                                                      e.jsx(_s, {
                                                        className: "w-3 h-3",
                                                      }),
                                                      " IMEI do Aparelho",
                                                      e.jsx("span", {
                                                        className:
                                                          "text-[10px] font-normal ml-1",
                                                        style: { color: z },
                                                        children:
                                                          "(Digite *#06# no telefone)",
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsx(xe, {
                                                    value: M.imei,
                                                    onChange: (s) =>
                                                      de((o) => ({
                                                        ...o,
                                                        imei: s.target.value
                                                          .replace(/\D/g, "")
                                                          .slice(0, 15),
                                                      })),
                                                    placeholder:
                                                      "000000000000000 (15 dígitos)",
                                                    maxLength: 15,
                                                    className:
                                                      "h-11 font-mono text-center tracking-wider",
                                                    style: {
                                                      backgroundColor: x,
                                                      borderColor: p,
                                                      color: n,
                                                    },
                                                  }),
                                                  e.jsx("p", {
                                                    className: "text-[10px]",
                                                    style: { color: z },
                                                    children:
                                                      "O IMEI é um código único de 15 dígitos do seu aparelho",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className: "space-y-3",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 pb-2 border-b",
                                                style: { borderColor: p },
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                                                    style: {
                                                      backgroundColor:
                                                        a.primary_color,
                                                    },
                                                    children: "4",
                                                  }),
                                                  e.jsxs("span", {
                                                    className:
                                                      "font-semibold text-sm",
                                                    style: { color: n },
                                                    children: [
                                                      "Acesso Remoto ",
                                                      e.jsx("span", {
                                                        className:
                                                          "font-normal text-xs",
                                                        style: { color: z },
                                                        children:
                                                          "(se necessário)",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className:
                                                  "grid sm:grid-cols-2 gap-4",
                                                children: [
                                                  e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                      e.jsxs(te, {
                                                        className:
                                                          "text-xs font-semibold flex items-center gap-1",
                                                        style: { color: n },
                                                        children: [
                                                          e.jsx(ys, {
                                                            className:
                                                              "w-3 h-3",
                                                          }),
                                                          " AnyDesk / TeamViewer",
                                                        ],
                                                      }),
                                                      e.jsx(xe, {
                                                        value: M.anydesk_id,
                                                        onChange: (s) =>
                                                          de((o) => ({
                                                            ...o,
                                                            anydesk_id:
                                                              s.target.value,
                                                          })),
                                                        placeholder:
                                                          "ID para acesso remoto",
                                                        className: "h-11",
                                                        style: {
                                                          backgroundColor: x,
                                                          borderColor: p,
                                                          color: n,
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                  e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                      e.jsx(te, {
                                                        className:
                                                          "text-xs font-semibold",
                                                        style: { color: n },
                                                        children:
                                                          "Status Atual do Dispositivo",
                                                      }),
                                                      e.jsx(xe, {
                                                        value: M.current_status,
                                                        onChange: (s) =>
                                                          de((o) => ({
                                                            ...o,
                                                            current_status:
                                                              s.target.value,
                                                          })),
                                                        placeholder:
                                                          "Ex: Bloqueado, Tela de ativação",
                                                        className: "h-11",
                                                        style: {
                                                          backgroundColor: x,
                                                          borderColor: p,
                                                          color: n,
                                                        },
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
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 pb-2 border-b",
                                                style: { borderColor: p },
                                                children: [
                                                  e.jsx("div", {
                                                    className:
                                                      "w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold",
                                                    style: {
                                                      backgroundColor:
                                                        a.primary_color,
                                                    },
                                                    children: "5",
                                                  }),
                                                  e.jsx("span", {
                                                    className:
                                                      "font-semibold text-sm",
                                                    style: { color: n },
                                                    children:
                                                      "Informações Adicionais",
                                                  }),
                                                ],
                                              }),
                                              e.jsxs("div", {
                                                className: "space-y-2",
                                                children: [
                                                  e.jsxs(te, {
                                                    className:
                                                      "text-xs font-semibold flex items-center gap-1",
                                                    style: { color: n },
                                                    children: [
                                                      e.jsx(ts, {
                                                        className: "w-3 h-3",
                                                      }),
                                                      " Observações",
                                                    ],
                                                  }),
                                                  e.jsx(fs, {
                                                    value: M.notes,
                                                    onChange: (s) =>
                                                      de((o) => ({
                                                        ...o,
                                                        notes: s.target.value,
                                                      })),
                                                    placeholder:
                                                      "Descreva detalhes do problema, histórico do aparelho ou outras informações relevantes...",
                                                    rows: 4,
                                                    style: {
                                                      backgroundColor: x,
                                                      borderColor: p,
                                                      color: n,
                                                    },
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className:
                                              "p-4 rounded-xl space-y-4",
                                            style: {
                                              backgroundColor: `${a.primary_color}10`,
                                              border: `1px solid ${a.primary_color}30`,
                                            },
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 text-xs",
                                                style: { color: j },
                                                children: [
                                                  e.jsx(Xe, {
                                                    className: "w-4 h-4",
                                                    style: {
                                                      color: a.primary_color,
                                                    },
                                                  }),
                                                  e.jsx("span", {
                                                    children:
                                                      "Seus dados estão protegidos e serão utilizados apenas para o atendimento",
                                                  }),
                                                ],
                                              }),
                                              e.jsx(N, {
                                                type: "submit",
                                                className:
                                                  "w-full gap-2 h-12 text-white font-bold",
                                                style: {
                                                  backgroundColor:
                                                    a.primary_color,
                                                },
                                                disabled: ee,
                                                children: ee
                                                  ? e.jsxs(e.Fragment, {
                                                      children: [
                                                        e.jsx(Ie, {
                                                          className:
                                                            "w-4 h-4 animate-spin",
                                                        }),
                                                        " Processando...",
                                                      ],
                                                    })
                                                  : e.jsxs(e.Fragment, {
                                                      children: [
                                                        e.jsx(sa, {
                                                          className: "w-4 h-4",
                                                        }),
                                                        "Enviar Solicitação de Serviço",
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
                              }),
                            ],
                          }),
                        ],
                      }),
                    k === "store" &&
                      e.jsxs("div", {
                        className: "space-y-4 sm:space-y-6 lg:space-y-8",
                        children: [
                          e.jsx(bl, {
                            config: a,
                            storeName: m.store_name || m.name,
                            productsCount: f.length,
                          }),
                          e.jsxs("div", {
                            className:
                              "p-3 sm:p-4 rounded-xl lg:rounded-2xl space-y-3 sm:space-y-4",
                            style: {
                              backgroundColor: t,
                              border: `1px solid ${p}`,
                              boxShadow: E
                                ? "0 4px 20px rgba(0,0,0,0.3)"
                                : "0 4px 20px rgba(0,0,0,0.08)",
                            },
                            children: [
                              e.jsxs("div", {
                                className: "relative",
                                children: [
                                  e.jsx(Je, {
                                    className:
                                      "absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5",
                                    style: { color: z },
                                  }),
                                  e.jsx(xe, {
                                    value: ne,
                                    onChange: (s) => Z(s.target.value),
                                    placeholder: "Buscar produtos...",
                                    className:
                                      "pl-10 sm:pl-12 h-11 sm:h-14 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 focus:ring-2 focus:shadow-lg",
                                    style: {
                                      backgroundColor: x,
                                      borderColor: p,
                                      color: n,
                                    },
                                  }),
                                  ne &&
                                    e.jsx(N, {
                                      variant: "ghost",
                                      size: "sm",
                                      className:
                                        "absolute right-2 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform",
                                      onClick: () => Z(""),
                                      children: e.jsx(ls, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                ],
                              }),
                              Ks.length > 0 &&
                                e.jsxs("div", {
                                  className:
                                    "flex gap-2 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide",
                                  children: [
                                    e.jsxs("button", {
                                      onClick: () => me("all"),
                                      className:
                                        "px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0",
                                      style: {
                                        backgroundColor:
                                          ce === "all" ? a.primary_color : x,
                                        color: ce === "all" ? "#fff" : n,
                                        boxShadow:
                                          ce === "all"
                                            ? `0 4px 15px ${a.primary_color}40`
                                            : "none",
                                      },
                                      children: ["Todos (", f.length, ")"],
                                    }),
                                    Ks.map((s) => {
                                      const o = f.filter(
                                          (D) => D.category === s
                                        ).length,
                                        g = Js(s);
                                      return e.jsxs(
                                        "button",
                                        {
                                          onClick: () => me(s),
                                          className:
                                            "px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0",
                                          style: {
                                            backgroundColor:
                                              ce === s ? a.primary_color : x,
                                            color: ce === s ? "#fff" : n,
                                            boxShadow:
                                              ce === s
                                                ? `0 4px 15px ${a.primary_color}40`
                                                : "none",
                                          },
                                          children: [g, " (", o, ")"],
                                        },
                                        s
                                      );
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          e.jsx("div", {
                            className:
                              "flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 scrollbar-hide",
                            children: [
                              {
                                icon: na,
                                text: "Frete Grátis",
                                subtext: "Acima de R$ 99",
                                color: "#00a650",
                              },
                              {
                                icon: Te,
                                text: "Compra Segura",
                                subtext: "100% Protegido",
                                color: "#3483fa",
                              },
                              {
                                icon: is,
                                text: "12x Sem Juros",
                                subtext: "Todos cartões",
                                color: "#ff7733",
                              },
                              {
                                icon: Oe,
                                text: "Suporte 24h",
                                subtext: "Atendimento rápido",
                                color: "#8b5cf6",
                              },
                            ].map((s, o) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-2 p-2 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-default group flex-shrink-0 min-w-[140px] sm:min-w-0",
                                  style: {
                                    backgroundColor: t,
                                    border: `1px solid ${p}`,
                                  },
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 flex-shrink-0",
                                      style: {
                                        backgroundColor: `${s.color}15`,
                                      },
                                      children: e.jsx(s.icon, {
                                        className: "w-3.5 h-3.5 sm:w-5 sm:h-5",
                                        style: { color: s.color },
                                      }),
                                    }),
                                    e.jsxs("div", {
                                      className: "min-w-0",
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "font-semibold text-[10px] sm:text-sm truncate",
                                          style: { color: n },
                                          children: s.text,
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-[9px] sm:text-xs truncate",
                                          style: { color: z },
                                          children: s.subtext,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                o
                              )
                            ),
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("p", {
                                className: "text-sm",
                                style: { color: j },
                                children: [
                                  e.jsx("span", {
                                    className: "font-bold",
                                    style: { color: n },
                                    children: Ns.length,
                                  }),
                                  " produtos encontrados",
                                ],
                              }),
                              e.jsxs(H, {
                                className: "gap-1",
                                style: {
                                  backgroundColor: `${a.primary_color}15`,
                                  color: a.primary_color,
                                },
                                children: [
                                  e.jsx(Ee, { className: "w-3 h-3" }),
                                  "Envio Imediato",
                                ],
                              }),
                            ],
                          }),
                          Ns.length === 0
                            ? e.jsx(ye, {
                                style: { backgroundColor: t, borderColor: p },
                                children: e.jsxs(Se, {
                                  className: "py-20 text-center",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center",
                                      style: { backgroundColor: x },
                                      children: e.jsx(fa, {
                                        className: "w-10 h-10",
                                        style: { color: z },
                                      }),
                                    }),
                                    e.jsx("h4", {
                                      className: "text-2xl font-bold mb-3",
                                      style: { color: n },
                                      children: "Loja em construção",
                                    }),
                                    e.jsx("p", {
                                      className: "max-w-md mx-auto",
                                      style: { color: j },
                                      children:
                                        "Em breve teremos produtos incríveis disponíveis para você.",
                                    }),
                                  ],
                                }),
                              })
                            : e.jsx("div", {
                                className:
                                  "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5 sm:gap-4 lg:gap-6",
                                children: Ns.map((s, o) => {
                                  const g = be.find(
                                    (D) => D.product.id === s.id
                                  );
                                  return e.jsx(
                                    gl,
                                    {
                                      product: s,
                                      config: a,
                                      cartItem: g,
                                      formatCurrency: qe,
                                      onViewDetails: () => {
                                        ve(s), O(!0);
                                      },
                                      onUpdateQuantity: (D) => $s(s.id, D),
                                      index: o,
                                      categoryName: Js(s.category),
                                    },
                                    s.id
                                  );
                                }),
                              }),
                          Ns.length > 0 &&
                            a.show_whatsapp &&
                            m.whatsapp &&
                            e.jsxs("div", {
                              className:
                                "p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center",
                              style: {
                                background: `linear-gradient(135deg, ${a.primary_color}15 0%, ${t} 100%)`,
                                border: `1px solid ${p}`,
                              },
                              children: [
                                e.jsx("p", {
                                  className:
                                    "font-semibold mb-2 sm:mb-3 text-sm sm:text-base",
                                  style: { color: n },
                                  children: "Não encontrou o que procura?",
                                }),
                                e.jsxs(N, {
                                  className:
                                    "gap-2 transition-all duration-300 hover:scale-105 text-white text-sm",
                                  style: { backgroundColor: "#25D366" },
                                  onClick: es,
                                  children: [
                                    e.jsx(Me, { className: "w-4 h-4" }),
                                    "Fale conosco no WhatsApp",
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    k === "iptv" &&
                      e.jsx(Nl, {
                        unlocker: m,
                        config: a,
                        formatCurrency: qe,
                        bgCard: t,
                        bgMuted: x,
                        borderColor: p,
                        textPrimary: n,
                        textSecondary: j,
                        textMuted: z,
                        isDark: E,
                      }),
                    k === "tracking" &&
                      e.jsx(e.Fragment, {
                        children: q
                          ? e.jsx(la, {
                              trackedOrder: q,
                              config: a,
                              unlocker: m,
                              formatCurrency: qe,
                              onBack: () => {
                                F(null), oe("");
                              },
                              onOrderUpdate: (s) => F(s),
                            })
                          : e.jsxs("div", {
                              className: "max-w-4xl mx-auto space-y-8",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "text-center space-y-3 animate-in fade-in duration-500",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "w-20 h-20 rounded-2xl mx-auto flex items-center justify-center transition-transform hover:scale-110",
                                      style: {
                                        backgroundColor: `${a.primary_color}15`,
                                      },
                                      children: e.jsx(Ve, {
                                        className: "w-10 h-10",
                                        style: { color: a.primary_color },
                                      }),
                                    }),
                                    e.jsx("h2", {
                                      className: "text-2xl font-bold",
                                      children: "Área do Cliente",
                                    }),
                                    e.jsx("p", {
                                      style: { color: j },
                                      children:
                                        "Acesse seu pedido para acompanhar em tempo real, conversar com o técnico e muito mais",
                                    }),
                                    e.jsx(H, {
                                      variant: "secondary",
                                      className: "text-xs",
                                      style: {
                                        backgroundColor: `${a.primary_color}15`,
                                        color: a.primary_color,
                                      },
                                      children: "Serviços e Produtos",
                                    }),
                                  ],
                                }),
                                e.jsx(ye, {
                                  className:
                                    "animate-in slide-in-from-bottom duration-500",
                                  style: { backgroundColor: t, borderColor: p },
                                  children: e.jsxs(Se, {
                                    className: "p-6 space-y-4",
                                    children: [
                                      e.jsxs("div", {
                                        className: "space-y-2",
                                        children: [
                                          e.jsx(te, {
                                            className: "text-sm font-semibold",
                                            style: { color: n },
                                            children: "Código do Pedido",
                                          }),
                                          e.jsxs("div", {
                                            className: "flex gap-2",
                                            children: [
                                              e.jsx(xe, {
                                                value: $e,
                                                onChange: (s) =>
                                                  oe(
                                                    s.target.value.toUpperCase()
                                                  ),
                                                placeholder:
                                                  "UNL-XXXXXXXX-XXXX",
                                                className:
                                                  "flex-1 h-12 font-mono text-center text-lg transition-all focus:scale-[1.02]",
                                                style: {
                                                  backgroundColor: x,
                                                  borderColor: p,
                                                  color: n,
                                                },
                                                onKeyDown: (s) =>
                                                  s.key === "Enter" && Gs(),
                                              }),
                                              e.jsx(N, {
                                                onClick: Gs,
                                                className:
                                                  "h-12 px-6 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95",
                                                style: {
                                                  backgroundColor:
                                                    a.primary_color,
                                                },
                                                disabled: ae,
                                                children: ae
                                                  ? e.jsx(Ie, {
                                                      className:
                                                        "w-5 h-5 animate-spin",
                                                    })
                                                  : e.jsx(Je, {
                                                      className: "w-5 h-5",
                                                    }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsx("div", {
                                        className: "pt-4 border-t",
                                        style: { borderColor: p },
                                        children: e.jsxs("p", {
                                          className: "text-xs text-center",
                                          style: { color: z },
                                          children: [
                                            "O código foi enviado para você após a solicitação do serviço.",
                                            e.jsx("br", {}),
                                            "Exemplo: ",
                                            e.jsx("span", {
                                              className: "font-mono",
                                              children: "UNL-ML38C4Y7-P8FW",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "p-4 rounded-xl text-center animate-in fade-in duration-700 delay-200",
                                  style: { backgroundColor: x },
                                  children: e.jsxs("p", {
                                    className: "text-sm",
                                    style: { color: j },
                                    children: [
                                      "Precisa de ajuda? Entre em contato via",
                                      " ",
                                      a.show_whatsapp &&
                                        m.whatsapp &&
                                        e.jsx("button", {
                                          onClick: es,
                                          className:
                                            "font-semibold hover:underline transition-colors",
                                          style: { color: a.primary_color },
                                          children: "WhatsApp",
                                        }),
                                    ],
                                  }),
                                }),
                                e.jsx(fl, {
                                  config: a,
                                  bgCard: t,
                                  bgMuted: x,
                                  textPrimary: n,
                                  textSecondary: j,
                                  textMuted: z,
                                  borderColor: p,
                                }),
                              ],
                            }),
                      }),
                  ],
                }),
                e.jsx("div", {
                  className: "hidden lg:block",
                  children: e.jsx(yl, {
                    unlocker: m,
                    config: a,
                    bgCard: t,
                    bgMuted: x,
                    textPrimary: n,
                    textSecondary: j,
                    textMuted: z,
                    borderColor: p,
                    isDark: E,
                  }),
                }),
              ],
            }),
            e.jsx(Ge, {
              open: G,
              onOpenChange: v,
              children: e.jsx(We, {
                className: "w-[95vw] max-w-md text-center",
                style: { backgroundColor: t, color: n, borderColor: p },
                children: e.jsxs("div", {
                  className: "py-6 space-y-6",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-20 h-20 rounded-full mx-auto flex items-center justify-center",
                      style: { backgroundColor: `${a.primary_color}20` },
                      children:
                        P === "product"
                          ? e.jsx(Re, {
                              className: "w-10 h-10",
                              style: { color: a.primary_color },
                            })
                          : e.jsx(Fe, {
                              className: "w-10 h-10",
                              style: { color: a.primary_color },
                            }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h2", {
                          className: "text-2xl font-bold mb-2",
                          children:
                            P === "product"
                              ? "Compra Realizada!"
                              : "Serviço Solicitado!",
                        }),
                        e.jsx("p", {
                          className: "text-sm",
                          style: { color: j },
                          children:
                            P === "product"
                              ? "Seu pedido foi recebido com sucesso! Após a confirmação do pagamento, você receberá os dados de acesso do seu produto."
                              : "Sua solicitação de serviço foi recebida! Um técnico entrará em contato em breve para dar andamento ao seu pedido.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "p-4 rounded-xl",
                      style: { backgroundColor: x },
                      children: [
                        e.jsx("p", {
                          className: "text-xs mb-2",
                          style: { color: z },
                          children:
                            P === "product"
                              ? "Seu código de pedido:"
                              : "Seu código de acompanhamento:",
                        }),
                        e.jsxs("div", {
                          className: "flex items-center justify-center gap-2",
                          children: [
                            e.jsx("code", {
                              className: "text-lg font-bold font-mono",
                              style: { color: a.primary_color },
                              children: W,
                            }),
                            e.jsx(N, {
                              size: "icon",
                              variant: "ghost",
                              className: "h-8 w-8",
                              onClick: () => va(W),
                              children: e.jsx(rs, { className: "w-4 h-4" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "text-left p-4 rounded-xl space-y-3",
                      style: { backgroundColor: x },
                      children:
                        P === "product"
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsxs("h4", {
                                  className:
                                    "font-semibold text-sm flex items-center gap-2",
                                  children: [
                                    e.jsx(bs, {
                                      className: "w-4 h-4",
                                      style: { color: a.primary_color },
                                    }),
                                    "Como acessar meu produto?",
                                  ],
                                }),
                                e.jsxs("ul", {
                                  className: "text-xs space-y-2",
                                  style: { color: j },
                                  children: [
                                    e.jsxs("li", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-base",
                                          style: { color: a.primary_color },
                                          children: "1.",
                                        }),
                                        e.jsxs("span", {
                                          children: [
                                            "Vá até a aba ",
                                            e.jsx("strong", {
                                              children: '"Rastrear"',
                                            }),
                                            " e digite o código acima",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("li", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-base",
                                          style: { color: a.primary_color },
                                          children: "2.",
                                        }),
                                        e.jsx("span", {
                                          children:
                                            "Aguarde a confirmação do pagamento pelo técnico",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("li", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-base",
                                          style: { color: a.primary_color },
                                          children: "3.",
                                        }),
                                        e.jsxs("span", {
                                          children: [
                                            "Quando o status mudar para ",
                                            e.jsx("strong", {
                                              children: '"Concluído"',
                                            }),
                                            ", os dados de login (email, senha e link de download) aparecerão na tela de rastreio",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("li", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-base",
                                          style: { color: a.primary_color },
                                          children: "4.",
                                        }),
                                        e.jsx("span", {
                                          children:
                                            "Copie as credenciais e acesse seu produto!",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : e.jsxs(e.Fragment, {
                              children: [
                                e.jsxs("h4", {
                                  className:
                                    "font-semibold text-sm flex items-center gap-2",
                                  children: [
                                    e.jsx(Je, {
                                      className: "w-4 h-4",
                                      style: { color: a.primary_color },
                                    }),
                                    "Como acompanhar meu serviço?",
                                  ],
                                }),
                                e.jsxs("ul", {
                                  className: "text-xs space-y-2",
                                  style: { color: j },
                                  children: [
                                    e.jsxs("li", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-base",
                                          style: { color: a.primary_color },
                                          children: "1.",
                                        }),
                                        e.jsx("span", {
                                          children:
                                            "Guarde este código em um local seguro",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("li", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-base",
                                          style: { color: a.primary_color },
                                          children: "2.",
                                        }),
                                        e.jsxs("span", {
                                          children: [
                                            "Vá até a aba ",
                                            e.jsx("strong", {
                                              children: '"Rastrear"',
                                            }),
                                            " e digite o código",
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("li", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-base",
                                          style: { color: a.primary_color },
                                          children: "3.",
                                        }),
                                        e.jsx("span", {
                                          children:
                                            "Acompanhe o status em tempo real e converse com o técnico pelo chat",
                                        }),
                                      ],
                                    }),
                                    e.jsxs("li", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-bold text-base",
                                          style: { color: a.primary_color },
                                          children: "4.",
                                        }),
                                        e.jsx("span", {
                                          children:
                                            "Você será notificado quando o serviço for concluído",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                    }),
                    e.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        e.jsxs(N, {
                          className: "w-full gap-2 text-white",
                          style: { backgroundColor: a.primary_color },
                          onClick: () => {
                            v(!1), Y("tracking"), oe(W);
                          },
                          children: [
                            e.jsx(Je, { className: "w-4 h-4" }),
                            P === "product"
                              ? "Ver Meu Pedido"
                              : "Rastrear Serviço",
                          ],
                        }),
                        e.jsx(N, {
                          variant: "outline",
                          className: "w-full",
                          style: { borderColor: p },
                          onClick: () => v(!1),
                          children: "Fechar",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            e.jsx(Ge, {
              open: U,
              onOpenChange: X,
              children: e.jsxs(We, {
                className:
                  "w-[95vw] max-w-lg max-h-[90vh] flex flex-col p-0 overflow-hidden",
                style: { backgroundColor: t, color: n, borderColor: p },
                children: [
                  e.jsx(Ls, {
                    className: "p-4 border-b",
                    style: { borderColor: p },
                    children: e.jsxs(Fs, {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(Ye, {
                          className: "w-5 h-5",
                          style: { color: a.primary_color },
                        }),
                        "Carrinho (",
                        ms,
                        ")",
                      ],
                    }),
                  }),
                  be.length === 0
                    ? e.jsxs("div", {
                        className: "p-8 text-center",
                        children: [
                          e.jsx(Ye, {
                            className: "w-16 h-16 mx-auto opacity-20 mb-4",
                          }),
                          e.jsx("p", {
                            className: "font-semibold mb-2",
                            children: "Carrinho vazio",
                          }),
                          e.jsx("p", {
                            className: "text-sm",
                            style: { color: j },
                            children: "Adicione produtos para continuar",
                          }),
                        ],
                      })
                    : e.jsxs("div", {
                        className: "flex flex-col flex-1 min-h-0",
                        children: [
                          e.jsx(os, {
                            className: "flex-1 p-4",
                            children: e.jsx("div", {
                              className: "space-y-3",
                              children: be.map(({ product: s, quantity: o }) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center gap-3 p-3 rounded-xl",
                                    style: { backgroundColor: x },
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-16 h-16 rounded-lg overflow-hidden flex-shrink-0",
                                        children: s.image_url
                                          ? e.jsx("img", {
                                              src: s.image_url,
                                              alt: s.name,
                                              className:
                                                "w-full h-full object-cover",
                                            })
                                          : e.jsx("div", {
                                              className:
                                                "w-full h-full flex items-center justify-center",
                                              style: { backgroundColor: t },
                                              children: e.jsx(Re, {
                                                className: "w-6 h-6 opacity-30",
                                              }),
                                            }),
                                      }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx("h4", {
                                            className:
                                              "font-semibold text-sm truncate",
                                            children: s.name,
                                          }),
                                          e.jsx("p", {
                                            className: "text-sm font-bold",
                                            style: { color: a.primary_color },
                                            children: qe(s.price * o),
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          e.jsx(N, {
                                            size: "icon",
                                            variant: "outline",
                                            className: "h-7 w-7",
                                            style: { borderColor: p },
                                            onClick: () => $s(s.id, -1),
                                            children: e.jsx(Bs, {
                                              className: "w-3 h-3",
                                            }),
                                          }),
                                          e.jsx("span", {
                                            className:
                                              "w-6 text-center text-sm font-semibold",
                                            children: o,
                                          }),
                                          e.jsx(N, {
                                            size: "icon",
                                            variant: "outline",
                                            className: "h-7 w-7",
                                            style: { borderColor: p },
                                            onClick: () => $s(s.id, 1),
                                            children: e.jsx(zs, {
                                              className: "w-3 h-3",
                                            }),
                                          }),
                                          e.jsx(N, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "h-7 w-7 text-red-500",
                                            onClick: () => Sa(s.id),
                                            children: e.jsx(ls, {
                                              className: "w-4 h-4",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  s.id
                                )
                              ),
                            }),
                          }),
                          e.jsxs("div", {
                            className: "p-4 border-t space-y-4",
                            style: { borderColor: p },
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between text-lg font-bold",
                                children: [
                                  e.jsx("span", { children: "Total:" }),
                                  e.jsx("span", {
                                    style: { color: a.primary_color },
                                    children: qe(Qs),
                                  }),
                                ],
                              }),
                              e.jsxs("form", {
                                onSubmit: _a,
                                className: "space-y-3",
                                children: [
                                  e.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                      e.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          e.jsxs(te, {
                                            className:
                                              "text-xs font-semibold flex items-center gap-1",
                                            style: { color: E ? "#ffffff" : n },
                                            children: [
                                              e.jsx(Ve, {
                                                className: "w-3 h-3",
                                              }),
                                              " Nome *",
                                            ],
                                          }),
                                          e.jsx(xe, {
                                            value: S.customer_name,
                                            onChange: (s) =>
                                              Pe((o) => ({
                                                ...o,
                                                customer_name: s.target.value,
                                              })),
                                            placeholder: "Seu nome",
                                            required: !0,
                                            className: "h-11",
                                            style: {
                                              backgroundColor: x,
                                              borderColor: p,
                                              color: n,
                                            },
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          e.jsxs(te, {
                                            className:
                                              "text-xs font-semibold flex items-center gap-1",
                                            style: { color: E ? "#ffffff" : n },
                                            children: [
                                              e.jsx(Me, {
                                                className: "w-3 h-3",
                                              }),
                                              " WhatsApp *",
                                            ],
                                          }),
                                          e.jsx(xe, {
                                            value: S.customer_phone,
                                            onChange: (s) =>
                                              Pe((o) => ({
                                                ...o,
                                                customer_phone: s.target.value,
                                              })),
                                            placeholder: "(00) 00000-0000",
                                            required: !0,
                                            className: "h-11",
                                            style: {
                                              backgroundColor: x,
                                              borderColor: p,
                                              color: n,
                                            },
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "space-y-1",
                                        children: [
                                          e.jsxs(te, {
                                            className:
                                              "text-xs font-semibold flex items-center gap-1",
                                            style: { color: E ? "#ffffff" : n },
                                            children: [
                                              e.jsx(_s, {
                                                className: "w-3 h-3",
                                              }),
                                              " CPF",
                                            ],
                                          }),
                                          e.jsx(xe, {
                                            value: S.customer_cpf,
                                            onChange: (s) =>
                                              Pe((o) => ({
                                                ...o,
                                                customer_cpf: s.target.value,
                                              })),
                                            placeholder: "000.000.000-00",
                                            className: "h-11",
                                            style: {
                                              backgroundColor: x,
                                              borderColor: p,
                                              color: n,
                                            },
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      e.jsxs(te, {
                                        className:
                                          "text-xs font-semibold flex items-center gap-1",
                                        style: { color: E ? "#ffffff" : n },
                                        children: [
                                          e.jsx(gs, { className: "w-3 h-3" }),
                                          " E-mail",
                                        ],
                                      }),
                                      e.jsx(xe, {
                                        type: "email",
                                        value: S.customer_email,
                                        onChange: (s) =>
                                          Pe((o) => ({
                                            ...o,
                                            customer_email: s.target.value,
                                          })),
                                        placeholder: "seu@email.com",
                                        className: "h-11",
                                        style: {
                                          backgroundColor: x,
                                          borderColor: p,
                                          color: n,
                                        },
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      e.jsxs(te, {
                                        className:
                                          "text-xs font-semibold flex items-center gap-1",
                                        style: { color: E ? "#ffffff" : n },
                                        children: [
                                          e.jsx(hl, { className: "w-3 h-3" }),
                                          " Endereço de Entrega",
                                        ],
                                      }),
                                      e.jsx(xe, {
                                        value: S.customer_address,
                                        onChange: (s) =>
                                          Pe((o) => ({
                                            ...o,
                                            customer_address: s.target.value,
                                          })),
                                        placeholder:
                                          "Rua, número, bairro, cidade",
                                        className: "h-11",
                                        style: {
                                          backgroundColor: x,
                                          borderColor: p,
                                          color: n,
                                        },
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      e.jsxs(te, {
                                        className:
                                          "text-xs font-semibold flex items-center gap-1",
                                        style: { color: E ? "#ffffff" : n },
                                        children: [
                                          e.jsx(ts, { className: "w-3 h-3" }),
                                          " Observações",
                                        ],
                                      }),
                                      e.jsx(fs, {
                                        value: S.notes,
                                        onChange: (s) =>
                                          Pe((o) => ({
                                            ...o,
                                            notes: s.target.value,
                                          })),
                                        placeholder:
                                          "Informações adicionais (opcional)",
                                        rows: 2,
                                        style: {
                                          backgroundColor: x,
                                          borderColor: p,
                                          color: n,
                                        },
                                      }),
                                    ],
                                  }),
                                  e.jsx(N, {
                                    type: "submit",
                                    className:
                                      "w-full h-12 gap-2 text-white font-bold",
                                    style: { backgroundColor: a.primary_color },
                                    disabled: ee,
                                    children: ee
                                      ? e.jsxs(e.Fragment, {
                                          children: [
                                            e.jsx(Ie, {
                                              className: "w-4 h-4 animate-spin",
                                            }),
                                            " Processando...",
                                          ],
                                        })
                                      : e.jsxs(e.Fragment, {
                                          children: [
                                            e.jsx(ze, { className: "w-4 h-4" }),
                                            "Finalizar Compra Segura",
                                          ],
                                        }),
                                  }),
                                  e.jsxs("p", {
                                    className: "text-center text-[10px]",
                                    style: { color: z },
                                    children: [
                                      e.jsx(Xe, {
                                        className: "w-3 h-3 inline mr-1",
                                      }),
                                      "Seus dados estão protegidos e não serão compartilhados",
                                    ],
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
            e.jsx(ul, {
              open: K,
              onOpenChange: O,
              product: R,
              config: a,
              onAddToCart: (s, o, g) => {
                const D = g ? g.price : s.price,
                  B = {
                    ...s,
                    price: D,
                    name: g ? `${s.name} - ${g.name}` : s.name,
                  };
                for (let ie = 0; ie < o; ie++) Ca(B, g?.id, g?.name);
              },
              formatCurrency: qe,
            }),
            e.jsx(Na, {
              open: I,
              onOpenChange: we,
              pixKey: m?.pix_key || "",
              bankName: m?.bank_name || "Banco",
              merchantName: m?.store_name || m?.name || "",
              totalValue: Qs,
              formatCurrency: qe,
              onSubmit: ka,
              config: a,
            }),
            e.jsx(jl, {
              open: ue,
              onOpenChange: (s) => {
                je(s), s || F(null);
              },
              trackedOrder: q,
              config: a,
              unlocker: m,
              formatCurrency: qe,
              onOrderUpdate: F,
            }),
            e.jsx("footer", {
              className:
                "lg:hidden fixed bottom-0 left-0 right-0 border-t py-2 px-4 flex justify-around z-30 backdrop-blur-xl",
              style: {
                backgroundColor: E
                  ? "rgba(0,0,0,0.95)"
                  : "rgba(255,255,255,0.95)",
                borderColor: p,
              },
              children: Zs.map((s) =>
                e.jsxs(
                  "button",
                  {
                    onClick: () => Y(s.id),
                    className: `flex flex-col items-center gap-0.5 p-2 rounded-lg transition-all duration-300 ${
                      k === s.id
                        ? "scale-110"
                        : "opacity-50 hover:opacity-75 active:scale-95"
                    }`,
                    children: [
                      e.jsx(s.icon, {
                        className: `w-5 h-5 transition-transform ${
                          k === s.id ? "animate-bounce" : ""
                        }`,
                        style: { color: k === s.id ? a.primary_color : j },
                      }),
                      e.jsx("span", {
                        className: "text-[10px] font-medium",
                        style: { color: k === s.id ? a.primary_color : j },
                        children: s.label,
                      }),
                      k === s.id &&
                        e.jsx("div", {
                          className: "absolute -bottom-1 w-1 h-1 rounded-full",
                          style: { backgroundColor: a.primary_color },
                        }),
                    ],
                  },
                  s.id
                )
              ),
            }),
          ],
        });
  };
export { Al as default };
