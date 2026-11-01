import {
  W as Gs,
  j as e,
  G as bs,
  bS as Fe,
  b3 as pe,
  B,
  dc as cs,
  r as l,
  w as ne,
  p as Zs,
  g as Ve,
  C as xs,
  bw as Lt,
  bN as Fs,
  I as ue,
  c5 as Ut,
  c6 as Dt,
  X as Te,
  T as ct,
  bP as dt,
  cE as mt,
  eI as xt,
  K as fs,
  eJ as ht,
  dy as pt,
  bU as se,
  D as Ke,
  c as Ye,
  a as ut,
  ew as Ps,
  dz as ps,
  a7 as qt,
  eu as gt,
  bW as Ds,
  l as We,
  dg as Oe,
  k as je,
  dh as qs,
  bZ as ss,
  b2 as Cs,
  Z as ft,
  bA as Ze,
  dJ as Ce,
  f as qe,
  de as bt,
  eK as Vt,
  eL as Wt,
  eM as Ht,
  eN as Gt,
  eO as Xt,
  eP as Qt,
  eQ as Kt,
  eR as Vs,
  bO as Ss,
  a_ as ds,
  d as ms,
  n as Ne,
  b5 as Yt,
  b6 as Zt,
  b7 as Jt,
  b8 as ea,
  b9 as sa,
  cK as ts,
  b$ as Ws,
  c2 as Xs,
  s as Js,
  ct as ws,
  bz as jt,
  dk as Os,
  dl as $s,
  bQ as Hs,
  m as _s,
  h as Nt,
  bH as ta,
  S as Is,
  eE as vt,
  eS as yt,
  eF as wt,
  eG as $t,
  eH as Ct,
  ae as St,
  ad as et,
  bL as hs,
  eT as aa,
  cJ as Ls,
  bG as la,
  bV as De,
  H as ra,
  d_ as is,
  a8 as na,
  bm as oa,
  U as ia,
  O as st,
  aa as ca,
  dH as da,
  dI as ma,
} from "./index-V8ZHCWL2.js";
import { m as ks, T as Qe } from "./mbway-icon-CFCEBqN3.js";
import { A as xa } from "./arrow-left-CaH5Nh3G.js";
import { B as _t } from "./box-_vn9phMy.js";
import { b as ha } from "./pixPayload-DJAh-TDT.js";
import { F as pa } from "./filter-zlxD6zAv.js";
import { M as ua } from "./minus-BvnD96RC.js";
import { a as ga, A as fa } from "./arrow-up-BO8-gqvp.js";
import { B as ba } from "./badge-percent-BqXrkbuf.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ja = Gs("CirclePercent", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Na = Gs("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const va = Gs("ZoomOut", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
    ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }],
  ]),
  ya = {
    apple: "Apple",
    samsung: "Samsung",
    xiaomi: "Xiaomi",
    realme: "Realme",
    oppo: "OPPO",
    lg: "LG",
    motorola: "Motorola",
    huawei: "Huawei",
    asus: "ASUS",
    nokia: "Nokia",
    oneplus: "OnePlus",
    google: "Google",
    outros: "Outros",
  };
function wa({
  products: n,
  currentProductId: r,
  onSelectProduct: u,
  onAddToCart: o,
  formatPrice: m,
  isDarkTheme: b,
  primaryColor: E,
  buttonColor: A,
}) {
  const y = n.find((d) => d.id === r),
    U = n
      .filter((d) => d.id !== r)
      .filter(
        (d) =>
          !!(
            (y?.category && d.category === y.category) ||
            (y?.brand && d.brand === y.brand)
          )
      )
      .slice(0, 8);
  if (U.length < 4) {
    const d = n
      .filter((V) => V.id !== r && !U.some((c) => c.id === V.id))
      .slice(0, 8 - U.length);
    U.push(...d);
  }
  if (U.length === 0) return null;
  const $ = {
      bg: b ? "bg-zinc-900" : "bg-gray-50",
      bgCard: b ? "bg-zinc-800" : "bg-white",
      border: b ? "border-zinc-700" : "border-gray-200",
      text: b ? "text-white" : "text-gray-900",
      textSecondary: b ? "text-zinc-400" : "text-gray-600",
      textMuted: b ? "text-zinc-500" : "text-gray-500",
    },
    L = ((d) =>
      ["#eab308", "#22c55e", "#fbbf24", "#a3e635", "#facc15"].includes(
        d.toLowerCase()
      )
        ? "#000000"
        : "#ffffff")(A);
  return e.jsx("div", {
    className: `py-6 sm:py-8 ${$.bg} border-t ${$.border}`,
    children: e.jsxs("div", {
      className: "container mx-auto px-3 sm:px-4",
      children: [
        e.jsxs("div", {
          className: "flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6",
          children: [
            e.jsx("div", {
              className: "w-1 h-6 sm:h-8 rounded-full",
              style: { backgroundColor: E },
            }),
            e.jsx("h2", {
              className: `text-lg sm:text-xl md:text-2xl font-bold ${$.text}`,
              children: "Você também pode gostar",
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4",
          children: U.slice(0, 4).map((d) => {
            const V = d.payment_methods?.includes("credito"),
              c = d.max_installments || 1;
            return e.jsxs(
              bs,
              {
                className: `
                  group overflow-hidden ${$.bgCard} border ${$.border}
                  hover:shadow-2xl transition-all duration-300 flex flex-col
                  cursor-pointer hover:scale-[1.02]
                `,
                onClick: () => u(d),
                children: [
                  e.jsxs("div", {
                    className: `aspect-square ${
                      b ? "bg-zinc-700/50" : "bg-gray-100"
                    } relative overflow-hidden`,
                    children: [
                      d.image_url
                        ? e.jsx("img", {
                            src: d.image_url,
                            alt: d.name,
                            className:
                              "w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500",
                            loading: "lazy",
                          })
                        : e.jsx("div", {
                            className:
                              "w-full h-full flex items-center justify-center",
                            children: e.jsx(Fe, {
                              className: `w-12 h-12 ${$.textMuted}`,
                            }),
                          }),
                      d.brand &&
                        e.jsx(pe, {
                          className:
                            "absolute top-2 left-2 text-white text-[10px]",
                          style: { backgroundColor: E },
                          children: ya[d.brand] || d.brand,
                        }),
                      V &&
                        c > 1 &&
                        e.jsxs(pe, {
                          className:
                            "absolute bottom-2 left-2 bg-blue-600 text-white text-[10px]",
                          children: [c, "x sem juros"],
                        }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "p-3 flex flex-col flex-1",
                    children: [
                      e.jsx("h3", {
                        className: `font-medium text-sm ${$.text} line-clamp-2 mb-2 min-h-[40px]`,
                        children: d.name,
                      }),
                      e.jsxs("div", {
                        className: "mt-auto space-y-2",
                        children: [
                          e.jsx("p", {
                            className: `text-lg sm:text-xl font-bold ${$.text}`,
                            children: m(d.sale_price),
                          }),
                          V &&
                            c > 1 &&
                            e.jsxs("p", {
                              className: `text-[11px] ${$.textMuted}`,
                              children: [
                                "em até ",
                                e.jsxs("span", {
                                  className: "text-green-500 font-medium",
                                  children: [c, "x de ", m(d.sale_price / c)],
                                }),
                              ],
                            }),
                          e.jsxs(B, {
                            onClick: (le) => {
                              le.stopPropagation(), o(d);
                            },
                            className: "w-full gap-2 font-semibold text-xs h-8",
                            style: { backgroundColor: A, color: L },
                            children: [
                              e.jsx(cs, { className: "w-3 h-3" }),
                              "Adicionar",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              d.id
            );
          }),
        }),
      ],
    }),
  });
}
function $a({ productId: n, isDarkTheme: r, primaryColor: u, userId: o }) {
  const [m, b] = l.useState([]),
    [E, A] = l.useState(!0),
    [y, U] = l.useState(!1),
    [$, g] = l.useState(!1),
    [L, d] = l.useState(""),
    [V, c] = l.useState(""),
    [le, X] = l.useState(5),
    [G, a] = l.useState(0),
    [W, S] = l.useState([]),
    [xe, Q] = l.useState(null),
    [T, Z] = l.useState(!1),
    [x, j] = l.useState([]),
    re = l.useRef(null),
    z = l.useRef(null),
    N = {
      bg: r ? "bg-zinc-950" : "bg-white",
      bgCard: r ? "bg-zinc-900/80" : "bg-gray-50/80",
      bgInput: r ? "bg-zinc-800" : "bg-white",
      border: r ? "border-zinc-800" : "border-gray-100",
      text: r ? "text-white" : "text-gray-900",
      textSec: r ? "text-zinc-400" : "text-gray-500",
      textMuted: r ? "text-zinc-600" : "text-gray-300",
      divider: r ? "bg-zinc-800" : "bg-gray-100",
    };
  l.useEffect(() => {
    J();
  }, [n]);
  const J = async () => {
      try {
        const { data: h, error: w } = await ne
          .from("product_reviews")
          .select(
            "id, customer_name, comment, rating, technician_response, created_at, media_urls, media_types"
          )
          .eq("product_id", n)
          .eq("status", "approved")
          .order("created_at", { ascending: !1 })
          .limit(20);
        if (w) throw w;
        b(h || []);
      } catch {
      } finally {
        A(!1);
      }
    },
    K = (h) => {
      const w = h.target.files;
      if (w) {
        if (W.length + w.length > 5) {
          se.error("Máximo de 5 mídias");
          return;
        }
        Array.from(w).forEach((H) => {
          if (H.size > 5 * 1024 * 1024) {
            se.error(`${H.name} excede 5MB`);
            return;
          }
          S((Y) => [
            ...Y,
            { file: H, preview: URL.createObjectURL(H), type: "image" },
          ]);
        }),
          (h.target.value = "");
      }
    },
    $e = (h) => {
      const w = h.target.files;
      if (w) {
        if (W.length + w.length > 5) {
          se.error("Máximo de 5 mídias");
          return;
        }
        Array.from(w).forEach((H) => {
          if (H.size > 30 * 1024 * 1024) {
            se.error(`${H.name} excede 30MB`);
            return;
          }
          const Y = document.createElement("video");
          (Y.preload = "metadata"),
            (Y.onloadedmetadata = () => {
              if ((URL.revokeObjectURL(Y.src), Y.duration > 30)) {
                se.error("Vídeo deve ter no máximo 30 segundos");
                return;
              }
              S((Se) => [
                ...Se,
                { file: H, preview: URL.createObjectURL(H), type: "video" },
              ]);
            }),
            (Y.src = URL.createObjectURL(H));
        }),
          (h.target.value = "");
      }
    },
    Ae = (h) => {
      S((w) => {
        const H = [...w];
        return URL.revokeObjectURL(H[h].preview), H.splice(h, 1), H;
      });
    },
    oe = (h, w) =>
      w === "video"
        ? "video"
        : w === "image"
        ? "image"
        : /\.(mp4|mov|webm|m4v|avi|mkv)(\?|$)/i.test(h)
        ? "video"
        : "image",
    M = (h, w) => {
      const H = h.name.split(".").pop()?.toLowerCase();
      return H && H.length <= 5
        ? H
        : h.type === "video/quicktime"
        ? "mov"
        : w === "video"
        ? "mp4"
        : "jpg";
    },
    te = async () => {
      const h = await Promise.all(
        W.map(async (w) => {
          const H = M(w.file, w.type),
            Y = `reviews/${o}/${Date.now()}-${Math.random()
              .toString(36)
              .slice(2, 8)}.${H}`,
            { error: Se } = await ne.storage
              .from("product-images")
              .upload(Y, w.file, {
                contentType: w.file.type,
                cacheControl: "31536000",
              });
          if (Se) throw new Error(`upload_failed:${Se.message}`);
          const { data: de } = ne.storage
            .from("product-images")
            .getPublicUrl(Y);
          return { url: de.publicUrl, type: w.type };
        })
      );
      return { urls: h.map((w) => w.url), types: h.map((w) => w.type) };
    },
    He = async () => {
      if (!L.trim() || !V.trim()) {
        se.error("Preencha seu nome e comentário");
        return;
      }
      U(!0);
      try {
        let h = [],
          w = [];
        if (W.length > 0) {
          const Y = await te();
          (h = Y.urls), (w = Y.types);
        }
        const { error: H } = await ne
          .from("product_reviews")
          .insert({
            product_id: n,
            user_id: o,
            customer_name: L.trim(),
            comment: V.trim(),
            rating: le,
            status: "pending",
            media_urls: h,
            media_types: w,
          });
        if (H) throw H;
        se.success("Avaliação enviada! Aguarde aprovação."),
          d(""),
          c(""),
          X(5),
          S([]),
          g(!1);
      } catch (h) {
        const w = h instanceof Error ? h.message : "";
        se.error(
          w.includes("upload_failed")
            ? "Falha ao enviar mídia."
            : "Erro ao enviar avaliação"
        );
      } finally {
        U(!1);
      }
    },
    ze = (h) => {
      j((w) => (w.includes(h) ? w.filter((H) => H !== h) : [...w, h]));
    },
    Ie = m.length > 0 ? m.reduce((h, w) => h + w.rating, 0) / m.length : 0,
    Ge = [5, 4, 3, 2, 1].map((h) => ({
      stars: h,
      count: m.filter((w) => w.rating === h).length,
      pct:
        m.length > 0
          ? (m.filter((w) => w.rating === h).length / m.length) * 100
          : 0,
    })),
    Re = m.filter((h) => h.media_urls && h.media_urls.length > 0),
    Ue = T ? m : m.slice(0, 4),
    ce = ["", "Péssimo", "Ruim", "Regular", "Bom", "Excelente"];
  return e.jsxs("div", {
    className: `${N.bg} rounded-2xl border ${N.border} overflow-hidden`,
    children: [
      e.jsxs("div", {
        className: "p-4 sm:p-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between mb-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx("div", {
                    className:
                      "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center",
                    style: { backgroundColor: `${u}15` },
                    children: e.jsx(Zs, {
                      className: "w-3.5 h-3.5 sm:w-4 sm:h-4",
                      style: { color: u },
                    }),
                  }),
                  e.jsx("h3", {
                    className: `text-base sm:text-lg font-bold ${N.text}`,
                    children: "Avaliações",
                  }),
                  m.length > 0 &&
                    e.jsx("span", {
                      className: `text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${
                        r
                          ? "bg-zinc-800 text-zinc-400"
                          : "bg-gray-100 text-gray-500"
                      }`,
                      children: m.length,
                    }),
                ],
              }),
              e.jsxs(B, {
                onClick: () => g(!$),
                size: "sm",
                className:
                  "rounded-xl text-white text-[10px] sm:text-xs font-semibold gap-1 sm:gap-1.5 px-3 sm:px-4 h-8 sm:h-9 shadow-lg hover:shadow-xl transition-all",
                style: { backgroundColor: u },
                children: [
                  e.jsx(Ve, { className: "w-3 h-3 sm:w-3.5 sm:h-3.5" }),
                  e.jsx("span", {
                    className: "hidden sm:inline",
                    children: "Avaliar produto",
                  }),
                  e.jsx("span", {
                    className: "sm:hidden",
                    children: "Avaliar",
                  }),
                ],
              }),
            ],
          }),
          m.length > 0 &&
            e.jsxs("div", {
              className: `${N.bgCard} backdrop-blur-sm rounded-xl p-3 sm:p-5 border ${N.border}`,
              children: [
                e.jsxs("div", {
                  className: "flex gap-4 sm:gap-5",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-col items-center justify-center min-w-[80px] sm:min-w-[140px]",
                      children: [
                        e.jsx("span", {
                          className: `text-3xl sm:text-5xl font-black ${N.text} leading-none`,
                          children: Ie.toFixed(1),
                        }),
                        e.jsx("div", {
                          className: "flex items-center gap-0.5 mt-1.5 sm:mt-2",
                          children: [1, 2, 3, 4, 5].map((h) =>
                            e.jsx(
                              Ve,
                              {
                                className: `w-3 h-3 sm:w-4 sm:h-4 ${
                                  h <= Math.round(Ie)
                                    ? "fill-amber-400 text-amber-400"
                                    : N.textMuted
                                }`,
                              },
                              h
                            )
                          ),
                        }),
                        e.jsxs("span", {
                          className: `text-[10px] sm:text-xs ${N.textSec} mt-1`,
                          children: [m.length, " avaliações"],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center gap-1 mt-1.5",
                          children: [
                            e.jsx(xs, { className: "w-3 h-3 text-green-500" }),
                            e.jsx("span", {
                              className:
                                "text-[9px] sm:text-[10px] text-green-500 font-medium",
                              children: "Verificadas",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "flex-1 space-y-1 sm:space-y-1.5",
                      children: Ge.map(({ stars: h, count: w, pct: H }) =>
                        e.jsxs(
                          "div",
                          {
                            className: "flex items-center gap-1.5 sm:gap-2.5",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-0.5 w-6 sm:w-8 justify-end",
                                children: [
                                  e.jsx("span", {
                                    className: `text-[10px] sm:text-xs font-medium ${N.textSec}`,
                                    children: h,
                                  }),
                                  e.jsx(Ve, {
                                    className:
                                      "w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400",
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: `flex-1 h-1.5 sm:h-2 rounded-full overflow-hidden ${
                                  r ? "bg-zinc-800" : "bg-gray-200"
                                }`,
                                children: e.jsx("div", {
                                  className:
                                    "h-full rounded-full transition-all duration-700 ease-out",
                                  style: { width: `${H}%`, backgroundColor: u },
                                }),
                              }),
                              e.jsx("span", {
                                className: `text-[10px] sm:text-xs ${N.textMuted} w-5 sm:w-8 text-right`,
                                children: w,
                              }),
                            ],
                          },
                          h
                        )
                      ),
                    }),
                  ],
                }),
                Re.length > 0 &&
                  e.jsxs("div", {
                    className:
                      "mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-dashed",
                    style: { borderColor: `${u}20` },
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-1.5 mb-2",
                        children: [
                          e.jsx(Lt, {
                            className: "w-3 h-3",
                            style: { color: u },
                          }),
                          e.jsx("span", {
                            className: `text-[10px] sm:text-xs font-semibold ${N.textSec}`,
                            children: "Fotos e vídeos dos clientes",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide pb-1",
                        children: Re.flatMap((h) =>
                          (h.media_urls || []).map((w, H) => ({
                            url: w,
                            type: oe(w, h.media_types?.[H]),
                          }))
                        )
                          .slice(0, 12)
                          .map((h, w) =>
                            e.jsx(
                              "button",
                              {
                                onClick: () => Q(h),
                                className:
                                  "relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden border transition-all hover:scale-105 hover:shadow-md",
                                style: { borderColor: `${u}25` },
                                children:
                                  h.type === "video"
                                    ? e.jsxs("div", {
                                        className:
                                          "w-full h-full bg-black relative",
                                        children: [
                                          e.jsx("video", {
                                            src: h.url,
                                            className:
                                              "w-full h-full object-cover",
                                            preload: "metadata",
                                            muted: !0,
                                            playsInline: !0,
                                            onLoadedData: (H) => {
                                              const Y = H.currentTarget;
                                              Y.readyState >= 2 &&
                                                (Y.currentTime = 0.1);
                                            },
                                          }),
                                          e.jsx("div", {
                                            className:
                                              "absolute inset-0 flex items-center justify-center bg-black/30",
                                            children: e.jsx(Fs, {
                                              className: "w-4 h-4 text-white",
                                            }),
                                          }),
                                        ],
                                      })
                                    : e.jsx("img", {
                                        src: h.url,
                                        alt: "",
                                        className: "w-full h-full object-cover",
                                        loading: "lazy",
                                      }),
                              },
                              w
                            )
                          ),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      }),
      $ &&
        e.jsxs("div", {
          className: `mx-4 sm:mx-6 mb-4 sm:mb-5 ${N.bgCard} backdrop-blur-sm rounded-xl p-3 sm:p-5 border ${N.border}`,
          children: [
            e.jsxs("h4", {
              className: `font-semibold ${N.text} mb-3 sm:mb-4 text-sm flex items-center gap-2`,
              children: [
                e.jsx(Ve, { className: "w-4 h-4", style: { color: u } }),
                "Deixe sua avaliação",
              ],
            }),
            e.jsxs("div", {
              className: "mb-3 sm:mb-4",
              children: [
                e.jsx("label", {
                  className: `text-[10px] sm:text-xs font-medium ${N.textSec} mb-1.5 sm:mb-2 block uppercase tracking-wider`,
                  children: "Sua nota",
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx("div", {
                      className: "flex gap-0.5",
                      children: [1, 2, 3, 4, 5].map((h) =>
                        e.jsx(
                          "button",
                          {
                            type: "button",
                            onMouseEnter: () => a(h),
                            onMouseLeave: () => a(0),
                            onClick: () => X(h),
                            className:
                              "p-1 sm:p-0.5 transition-transform hover:scale-125 active:scale-95",
                            children: e.jsx(Ve, {
                              className: `w-7 h-7 sm:w-7 sm:h-7 transition-colors ${
                                h <= (G || le)
                                  ? "fill-amber-400 text-amber-400"
                                  : N.textMuted
                              }`,
                            }),
                          },
                          h
                        )
                      ),
                    }),
                    e.jsx("span", {
                      className: `text-xs font-medium ml-2 ${N.textSec}`,
                      children: ce[G || le],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "space-y-2.5 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-3 mb-3",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("label", {
                      className: `text-[10px] sm:text-xs font-medium ${N.textSec} mb-1 sm:mb-1.5 block uppercase tracking-wider`,
                      children: "Seu nome",
                    }),
                    e.jsx(ue, {
                      value: L,
                      onChange: (h) => d(h.target.value),
                      placeholder: "Digite seu nome",
                      className: `${N.bgInput} ${N.border} ${N.text} h-10 rounded-lg text-sm`,
                      maxLength: 100,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("label", {
                      className: `text-[10px] sm:text-xs font-medium ${N.textSec} mb-1 sm:mb-1.5 block uppercase tracking-wider`,
                      children: "Mídia (opcional)",
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsxs(B, {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          onClick: () => re.current?.click(),
                          className: `gap-1.5 ${N.border} ${N.text} h-10 flex-1 rounded-lg text-xs`,
                          disabled: W.length >= 5,
                          children: [
                            e.jsx(Ut, { className: "w-3.5 h-3.5" }),
                            " Foto",
                          ],
                        }),
                        e.jsxs(B, {
                          type: "button",
                          variant: "outline",
                          size: "sm",
                          onClick: () => z.current?.click(),
                          className: `gap-1.5 ${N.border} ${N.text} h-10 flex-1 rounded-lg text-xs`,
                          disabled: W.length >= 5,
                          children: [
                            e.jsx(Dt, { className: "w-3.5 h-3.5" }),
                            " Vídeo",
                          ],
                        }),
                      ],
                    }),
                    e.jsx("input", {
                      ref: re,
                      type: "file",
                      accept: "image/*",
                      multiple: !0,
                      className: "hidden",
                      onChange: K,
                    }),
                    e.jsx("input", {
                      ref: z,
                      type: "file",
                      accept: "video/*",
                      className: "hidden",
                      onChange: $e,
                    }),
                  ],
                }),
              ],
            }),
            W.length > 0 &&
              e.jsxs("div", {
                className:
                  "flex gap-1.5 sm:gap-2 mb-3 overflow-x-auto pb-1 scrollbar-hide",
                children: [
                  W.map((h, w) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-600",
                        children: [
                          h.type === "image"
                            ? e.jsx("img", {
                                src: h.preview,
                                alt: "",
                                className: "w-full h-full object-cover",
                              })
                            : e.jsxs("div", {
                                className:
                                  "w-full h-full bg-black flex items-center justify-center relative",
                                children: [
                                  e.jsx("video", {
                                    src: h.preview,
                                    className: "w-full h-full object-cover",
                                    preload: "metadata",
                                  }),
                                  e.jsx(Fs, {
                                    className:
                                      "absolute w-4 h-4 text-white drop-shadow-lg",
                                  }),
                                ],
                              }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => Ae(w),
                            className:
                              "absolute top-0.5 right-0.5 bg-black/70 rounded-full p-0.5 text-white hover:bg-red-600 transition-colors",
                            children: e.jsx(Te, { className: "w-3 h-3" }),
                          }),
                        ],
                      },
                      w
                    )
                  ),
                  e.jsxs("span", {
                    className: `text-[9px] ${N.textMuted} self-end`,
                    children: [W.length, "/5"],
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "mb-3",
              children: [
                e.jsx("label", {
                  className: `text-[10px] sm:text-xs font-medium ${N.textSec} mb-1 sm:mb-1.5 block uppercase tracking-wider`,
                  children: "Comentário",
                }),
                e.jsx(ct, {
                  value: V,
                  onChange: (h) => c(h.target.value),
                  placeholder: "Conte sua experiência com o produto...",
                  className: `${N.bgInput} ${N.border} ${N.text} min-h-[70px] sm:min-h-[80px] rounded-lg text-sm resize-none`,
                  maxLength: 500,
                }),
                e.jsxs("p", {
                  className: `text-[9px] sm:text-[10px] ${N.textMuted} mt-1 text-right`,
                  children: [V.length, "/500"],
                }),
              ],
            }),
            e.jsxs(B, {
              onClick: He,
              disabled: y,
              className:
                "text-white gap-2 rounded-xl h-10 w-full font-semibold text-sm shadow-lg",
              style: { backgroundColor: u },
              children: [
                e.jsx(dt, { className: "w-3.5 h-3.5" }),
                y ? "Enviando..." : "Enviar Avaliação",
              ],
            }),
          ],
        }),
      e.jsx("div", { className: `h-px ${N.divider}` }),
      e.jsx("div", {
        className: "p-4 sm:p-6",
        children: E
          ? e.jsx("div", {
              className: "space-y-3 sm:space-y-4",
              children: [1, 2, 3].map((h) =>
                e.jsxs(
                  "div",
                  {
                    className: `${N.bgCard} rounded-xl p-3 sm:p-4 animate-pulse`,
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2.5 sm:gap-3 mb-3",
                        children: [
                          e.jsx("div", {
                            className: `w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
                              r ? "bg-zinc-800" : "bg-gray-200"
                            }`,
                          }),
                          e.jsxs("div", {
                            className: "flex-1",
                            children: [
                              e.jsx("div", {
                                className: `h-3 ${
                                  r ? "bg-zinc-800" : "bg-gray-200"
                                } rounded w-20 sm:w-24 mb-2`,
                              }),
                              e.jsx("div", {
                                className: `h-2.5 ${
                                  r ? "bg-zinc-800" : "bg-gray-200"
                                } rounded w-14 sm:w-16`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: `h-3 ${
                          r ? "bg-zinc-800" : "bg-gray-200"
                        } rounded w-3/4`,
                      }),
                    ],
                  },
                  h
                )
              ),
            })
          : m.length === 0
          ? e.jsxs("div", {
              className: `text-center py-8 sm:py-10 ${N.textSec}`,
              children: [
                e.jsx("div", {
                  className: `w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl flex items-center justify-center ${
                    r ? "bg-zinc-900" : "bg-gray-50"
                  }`,
                  children: e.jsx(Zs, {
                    className: `w-6 h-6 sm:w-7 sm:h-7 ${N.textMuted}`,
                  }),
                }),
                e.jsx("p", {
                  className: `font-semibold ${N.text} mb-1 text-sm sm:text-base`,
                  children: "Nenhuma avaliação ainda",
                }),
                e.jsx("p", {
                  className: `text-xs sm:text-sm ${N.textSec}`,
                  children: "Seja o primeiro a avaliar este produto!",
                }),
              ],
            })
          : e.jsxs("div", {
              className: "space-y-3 sm:space-y-4",
              children: [
                Ue.map((h) =>
                  e.jsxs(
                    "div",
                    {
                      className: `${N.bgCard} backdrop-blur-sm rounded-xl p-3 sm:p-4 border ${N.border} transition-all hover:shadow-sm`,
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-3",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs sm:text-sm shadow-md",
                              style: {
                                background: `linear-gradient(135deg, ${u}, ${u}cc)`,
                              },
                              children: h.customer_name.charAt(0).toUpperCase(),
                            }),
                            e.jsx("div", {
                              className: "flex-1 min-w-0",
                              children: e.jsxs("div", {
                                className:
                                  "flex items-center gap-1.5 sm:gap-2 flex-wrap",
                                children: [
                                  e.jsx("span", {
                                    className: `font-semibold text-xs sm:text-sm ${N.text}`,
                                    children: h.customer_name,
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "flex items-center gap-px sm:gap-0.5",
                                    children: [1, 2, 3, 4, 5].map((w) =>
                                      e.jsx(
                                        Ve,
                                        {
                                          className: `w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                                            w <= h.rating
                                              ? "fill-amber-400 text-amber-400"
                                              : N.textMuted
                                          }`,
                                        },
                                        w
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            h.rating === 5 &&
                              e.jsxs("div", {
                                className:
                                  "flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 flex-shrink-0",
                                children: [
                                  e.jsx(mt, {
                                    className:
                                      "w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500",
                                  }),
                                  e.jsx("span", {
                                    className:
                                      "text-[9px] sm:text-[10px] font-semibold text-amber-500",
                                    children: "Top",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        e.jsx("p", {
                          className: `${N.textSec} text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-3`,
                          children: h.comment,
                        }),
                        h.media_urls &&
                          h.media_urls.length > 0 &&
                          e.jsx("div", {
                            className:
                              "flex gap-1.5 sm:gap-2 mb-2.5 sm:mb-3 overflow-x-auto scrollbar-hide pb-1",
                            children: h.media_urls.map((w, H) => {
                              const Y = oe(w, h.media_types?.[H]);
                              return e.jsx(
                                "button",
                                {
                                  onClick: () => Q({ url: w, type: Y }),
                                  className:
                                    "relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all hover:scale-[1.03] hover:shadow-lg active:scale-95",
                                  style: { borderColor: `${u}30` },
                                  children:
                                    Y === "video"
                                      ? e.jsxs("div", {
                                          className:
                                            "w-full h-full bg-black relative",
                                          children: [
                                            e.jsx("video", {
                                              src: w,
                                              className:
                                                "w-full h-full object-cover",
                                              preload: "metadata",
                                              muted: !0,
                                              playsInline: !0,
                                              onLoadedData: (Se) => {
                                                const de = Se.currentTarget;
                                                de.readyState >= 2 &&
                                                  (de.currentTime = 0.1);
                                              },
                                            }),
                                            e.jsx("div", {
                                              className:
                                                "absolute inset-0 flex items-center justify-center bg-black/30",
                                              children: e.jsx("div", {
                                                className:
                                                  "w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/90 flex items-center justify-center shadow-lg",
                                                children: e.jsx(Fs, {
                                                  className:
                                                    "w-3 h-3 sm:w-4 sm:h-4 text-gray-900 ml-0.5",
                                                }),
                                              }),
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "absolute bottom-0.5 right-0.5 text-[8px] sm:text-[9px] bg-black/70 text-white px-1 py-px rounded font-medium",
                                              children: "Vídeo",
                                            }),
                                          ],
                                        })
                                      : e.jsx("img", {
                                          src: w,
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover",
                                          loading: "lazy",
                                        }),
                                },
                                H
                              );
                            }),
                          }),
                        e.jsx("div", {
                          className: "flex items-center gap-3",
                          children: e.jsxs("button", {
                            onClick: () => ze(h.id),
                            className: `flex items-center gap-1 text-[10px] sm:text-xs font-medium transition-colors ${
                              x.includes(h.id)
                                ? "text-green-500"
                                : `${N.textMuted} hover:${N.textSec}`
                            }`,
                            children: [
                              e.jsx(xt, {
                                className: `w-3 h-3 ${
                                  x.includes(h.id) ? "fill-green-500" : ""
                                }`,
                              }),
                              "Útil",
                            ],
                          }),
                        }),
                        h.technician_response &&
                          e.jsxs("div", {
                            className: `p-2.5 sm:p-3 rounded-lg ${
                              r ? "bg-zinc-800/80" : "bg-white"
                            } border-l-[3px] mt-2.5`,
                            style: { borderColor: u },
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-1.5 mb-1",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center",
                                    style: { backgroundColor: `${u}20` },
                                    children: e.jsx(fs, {
                                      className: "w-2.5 h-2.5 sm:w-3 sm:h-3",
                                      style: { color: u },
                                    }),
                                  }),
                                  e.jsx("span", {
                                    className: `text-[10px] sm:text-[11px] font-bold ${N.text}`,
                                    children: "Resposta da loja",
                                  }),
                                ],
                              }),
                              e.jsx("p", {
                                className: `text-[11px] sm:text-xs ${N.textSec} leading-relaxed`,
                                children: h.technician_response,
                              }),
                            ],
                          }),
                      ],
                    },
                    h.id
                  )
                ),
                m.length > 4 &&
                  e.jsx("button", {
                    onClick: () => Z(!T),
                    className: `w-full py-2.5 sm:py-3 rounded-xl border ${N.border} ${N.text} text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all hover:shadow-sm`,
                    style: { borderColor: `${u}30` },
                    children: T
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(ht, { className: "w-3.5 h-3.5" }),
                            " Mostrar menos",
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(pt, { className: "w-3.5 h-3.5" }),
                            " Ver todas (",
                            m.length,
                            ") avaliações",
                          ],
                        }),
                  }),
              ],
            }),
      }),
      xe &&
        e.jsxs("div", {
          className:
            "fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center",
          onClick: () => Q(null),
          children: [
            e.jsx("button", {
              className:
                "absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors",
              onClick: () => Q(null),
              children: e.jsx(Te, { className: "h-4 w-4 sm:h-5 sm:w-5" }),
            }),
            e.jsx("div", {
              className: "max-w-4xl max-h-[90vh] w-full px-3 sm:px-4",
              onClick: (h) => h.stopPropagation(),
              children:
                xe.type === "image"
                  ? e.jsx("img", {
                      src: xe.url,
                      alt: "",
                      className:
                        "max-w-full max-h-[90vh] object-contain mx-auto rounded-lg",
                    })
                  : e.jsx("video", {
                      src: xe.url,
                      controls: !0,
                      autoPlay: !0,
                      playsInline: !0,
                      className: "max-w-full max-h-[90vh] mx-auto rounded-lg",
                    }),
            }),
          ],
        }),
    ],
  });
}
function Ca({
  images: n,
  currentIndex: r,
  open: u,
  onOpenChange: o,
  onIndexChange: m,
}) {
  const [b, E] = l.useState(!1),
    A = () => {
      m((r + 1) % n.length);
    },
    y = () => {
      m((r - 1 + n.length) % n.length);
    };
  return n.length === 0
    ? null
    : e.jsx(Ke, {
        open: u,
        onOpenChange: o,
        children: e.jsx(Ye, {
          className:
            "max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-black/95 border-none overflow-hidden",
          children: e.jsxs("div", {
            className:
              "relative flex items-center justify-center min-h-[50vh] max-h-[90vh]",
            children: [
              e.jsx(B, {
                variant: "ghost",
                size: "icon",
                className:
                  "absolute top-2 right-2 z-50 text-white hover:bg-white/20 rounded-full",
                onClick: () => o(!1),
                children: e.jsx(Te, { className: "w-5 h-5" }),
              }),
              e.jsx(B, {
                variant: "ghost",
                size: "icon",
                className:
                  "absolute top-2 left-2 z-50 text-white hover:bg-white/20 rounded-full",
                onClick: () => E(!b),
                children: b
                  ? e.jsx(va, { className: "w-5 h-5" })
                  : e.jsx(ut, { className: "w-5 h-5" }),
              }),
              n.length > 1 &&
                e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(B, {
                      variant: "ghost",
                      size: "icon",
                      className:
                        "absolute left-2 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full w-10 h-10",
                      onClick: y,
                      children: e.jsx(Ps, { className: "w-6 h-6" }),
                    }),
                    e.jsx(B, {
                      variant: "ghost",
                      size: "icon",
                      className:
                        "absolute right-2 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full w-10 h-10",
                      onClick: A,
                      children: e.jsx(ps, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              e.jsx("div", {
                className: `flex items-center justify-center p-4 ${
                  b ? "overflow-auto cursor-zoom-out" : "cursor-zoom-in"
                }`,
                onClick: () => E(!b),
                children: e.jsx("img", {
                  src: n[r],
                  alt: `Imagem ${r + 1}`,
                  className: `transition-all duration-300 rounded-lg ${
                    b
                      ? "max-w-none scale-150"
                      : "max-w-[85vw] max-h-[80vh] w-auto h-auto object-contain"
                  }`,
                }),
              }),
              n.length > 1 &&
                e.jsx("div", {
                  className:
                    "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-50",
                  children: n.map((U, $) =>
                    e.jsx(
                      "button",
                      {
                        className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          $ === r
                            ? "bg-white scale-125"
                            : "bg-white/40 hover:bg-white/60"
                        }`,
                        onClick: (g) => {
                          g.stopPropagation(), m($);
                        },
                      },
                      $
                    )
                  ),
                }),
              e.jsxs("div", {
                className:
                  "absolute bottom-4 right-4 text-white/70 text-sm z-50 bg-black/50 px-2 py-1 rounded-full",
                children: [r + 1, " / ", n.length],
              }),
            ],
          }),
        }),
      });
}
const Sa = (n) =>
    n === "en-US"
      ? {
          paypal: {
            label: "PayPal",
            icon: e.jsx(qs, { className: "w-5 h-5" }),
          },
          applepay: {
            label: "Apple Pay",
            icon: e.jsx(qs, { className: "w-5 h-5" }),
          },
          card: {
            label: "Credit Card",
            icon: e.jsx(je, { className: "w-5 h-5" }),
          },
          debit: {
            label: "Debit Card",
            icon: e.jsx(je, { className: "w-5 h-5" }),
          },
          cash: { label: "Cash", icon: e.jsx(Oe, { className: "w-5 h-5" }) },
        }
      : n === "pt-PT"
      ? {
          mbway: {
            label: "MB Way",
            icon: e.jsx("img", {
              src: ks,
              alt: "MB Way",
              className: "w-5 h-5 object-contain",
            }),
          },
          multibanco: {
            label: "Multibanco",
            icon: e.jsx(je, { className: "w-5 h-5" }),
          },
          credito: {
            label: "Cartão de Crédito",
            icon: e.jsx(je, { className: "w-5 h-5" }),
          },
          debito: {
            label: "Cartão de Débito",
            icon: e.jsx(je, { className: "w-5 h-5" }),
          },
          dinheiro: {
            label: "Dinheiro",
            icon: e.jsx(Oe, { className: "w-5 h-5" }),
          },
          transferencia: {
            label: "Transferência",
            icon: e.jsx(Oe, { className: "w-5 h-5" }),
          },
        }
      : {
          pix: { label: "PIX", icon: e.jsx(ss, { className: "w-5 h-5" }) },
          dinheiro: {
            label: "Dinheiro",
            icon: e.jsx(Oe, { className: "w-5 h-5" }),
          },
          credito: {
            label: "Cartão de Crédito",
            icon: e.jsx(je, { className: "w-5 h-5" }),
          },
          debito: {
            label: "Cartão de Débito",
            icon: e.jsx(je, { className: "w-5 h-5" }),
          },
          boleto: {
            label: "Boleto",
            icon: e.jsx(je, { className: "w-5 h-5" }),
          },
          transferencia: {
            label: "Transferência",
            icon: e.jsx(Oe, { className: "w-5 h-5" }),
          },
        },
  _a = (n) =>
    n === "en-US"
      ? ["paypal", "card", "cash"]
      : n === "pt-PT"
      ? ["mbway", "credito", "dinheiro"]
      : ["pix", "dinheiro"],
  ka = (n) => {
    const r = {
      "pt-BR": {
        back: "Voltar",
        inStock: "Em estoque",
        reviews: "avaliações",
        sold: "vendidos",
        off: "OFF",
        noInterest: "sem juros",
        upTo: "em até",
        of: "de",
        color: "Cor",
        select: "Selecione",
        quantity: "Quantidade",
        addToCart: "Adicionar ao Carrinho",
        buyWhatsApp: "Comprar via WhatsApp",
        freeShipping: "Frete Grátis",
        securePurchase: "Compra Segura",
        easyExchange: "Troca Fácil",
        support: "Suporte",
        productDescription: "Descrição do Produto",
        paymentMethods: "Formas de Pagamento",
        clickToZoom: "Clique para ampliar",
        linkCopied: "Link copiado!",
        phoneNotConfigured: "Telefone da empresa não configurado",
        addedToCart: "adicionado ao carrinho!",
        withPix: "no PIX",
      },
      "pt-PT": {
        back: "Voltar",
        inStock: "Em stock",
        reviews: "avaliações",
        sold: "vendidos",
        off: "OFF",
        noInterest: "sem juros",
        upTo: "até",
        of: "de",
        color: "Cor",
        select: "Selecione",
        quantity: "Quantidade",
        addToCart: "Adicionar ao Carrinho",
        buyWhatsApp: "Comprar via WhatsApp",
        freeShipping: "Envio Grátis",
        securePurchase: "Compra Segura",
        easyExchange: "Troca Fácil",
        support: "Suporte",
        productDescription: "Descrição do Produto",
        paymentMethods: "Formas de Pagamento",
        clickToZoom: "Clique para ampliar",
        linkCopied: "Link copiado!",
        phoneNotConfigured: "Telefone da empresa não configurado",
        addedToCart: "adicionado ao carrinho!",
        withPix: "com MB Way",
      },
      "en-US": {
        back: "Back",
        inStock: "In Stock",
        reviews: "reviews",
        sold: "sold",
        off: "OFF",
        noInterest: "no interest",
        upTo: "up to",
        of: "of",
        color: "Color",
        select: "Select",
        quantity: "Quantity",
        addToCart: "Add to Cart",
        buyWhatsApp: "Buy via WhatsApp",
        freeShipping: "Free Shipping",
        securePurchase: "Secure Purchase",
        easyExchange: "Easy Returns",
        support: "Support",
        productDescription: "Product Description",
        paymentMethods: "Payment Methods",
        clickToZoom: "Click to zoom",
        linkCopied: "Link copied!",
        phoneNotConfigured: "Company phone not configured",
        addedToCart: "added to cart!",
        withPix: "instant payment",
      },
    };
    return r[n] || r["pt-BR"];
  },
  Pa = {
    apple: "Apple",
    samsung: "Samsung",
    xiaomi: "Xiaomi",
    realme: "Realme",
    oppo: "OPPO",
    lg: "LG",
    motorola: "Motorola",
    huawei: "Huawei",
    asus: "ASUS",
    nokia: "Nokia",
    oneplus: "OnePlus",
    google: "Google",
    outros: "Outros",
  },
  Us = {
    preto: { label: "Preto", color: "#000000" },
    branco: { label: "Branco", color: "#FFFFFF" },
    azul: { label: "Azul", color: "#3B82F6" },
    vermelho: { label: "Vermelho", color: "#EF4444" },
    verde: { label: "Verde", color: "#22C55E" },
    roxo: { label: "Roxo", color: "#A855F7" },
    rosa: { label: "Rosa", color: "#EC4899" },
    amarelo: { label: "Amarelo", color: "#EAB308" },
    laranja: { label: "Laranja", color: "#F97316" },
    cinza: { label: "Cinza", color: "#6B7280" },
    dourado: { label: "Dourado", color: "#D4AF37" },
    prata: { label: "Prata", color: "#C0C0C0" },
  };
function Aa({
  product: n,
  companyInfo: r,
  onBack: u,
  onAddToCart: o,
  formatPrice: m,
  allProducts: b = [],
  onSelectProduct: E,
  userId: A,
  catalogLanguage: y = "pt-BR",
}) {
  const [U, $] = l.useState(0),
    [g, L] = l.useState(!1),
    [d, V] = l.useState(null),
    [c, le] = l.useState(null),
    [X, G] = l.useState([]),
    [a, W] = l.useState(""),
    [S, xe] = l.useState(!1),
    [Q, T] = l.useState(1),
    [Z, x] = l.useState(!1),
    j = ka(y),
    re = Sa(y),
    z = l.useRef(0),
    N = l.useRef(0);
  l.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [n.id]),
    l.useEffect(() => {
      (async () => {
        const { data: D } = await ne
          .from("catalog_product_variations")
          .select("*")
          .eq("product_id", n.id)
          .eq("is_active", !0)
          .order("price", { ascending: !0 });
        G(D || []), le(null), W("");
      })();
    }, [n.id]);
  const J = r?.catalog_theme !== "light",
    K = r?.catalog_primary_color || "#10b981";
  r?.catalog_secondary_color;
  const $e = r?.catalog_button_color || "#eab308",
    oe = ((_) =>
      ["#eab308", "#22c55e", "#fbbf24", "#a3e635", "#facc15"].includes(
        _.toLowerCase()
      )
        ? "#000000"
        : "#ffffff")($e),
    M = {
      bg: J ? "bg-zinc-950" : "bg-gray-50",
      bgCard: J ? "bg-zinc-900" : "bg-white",
      bgSection: J ? "bg-zinc-900/50" : "bg-gray-50",
      border: J ? "border-zinc-800" : "border-gray-200",
      text: J ? "text-white" : "text-gray-900",
      textSecondary: J ? "text-zinc-400" : "text-gray-600",
      textMuted: J ? "text-zinc-500" : "text-gray-500",
    },
    te = [];
  n.image_url && te.push(n.image_url),
    n.images &&
      n.images.length > 0 &&
      n.images.forEach((_) => {
        _ && !te.includes(_) && te.push(_);
      });
  const He = _a(y),
    ze =
      n.payment_methods && n.payment_methods.length > 0
        ? n.payment_methods
        : He,
    Ie = n.max_installments || 1,
    Ge = ze.includes("credito") || ze.includes("card"),
    Re = n.colors || [],
    Ue = ze.includes("pix") || ze.includes("mbway") || ze.includes("paypal"),
    ce = () => {
      const _ = r?.catalog_whatsapp?.replace(/\D/g, "") || "",
        D = r?.company_phone?.replace(/\D/g, "") || "";
      return _ || D;
    },
    h = () => {
      const _ = ce();
      if (!_) {
        se.error(j.phoneNotConfigured);
        return;
      }
      const D = _.length <= 11 ? (_.startsWith("55") ? _ : `55${_}`) : _,
        ee = c ? c.price : n.sale_price,
        ve = d ? ` | Cor: ${Us[d]?.label || d}` : "",
        _e = c ? ` | Variação: ${c.name}` : "",
        Le = encodeURIComponent(
          `Olá! Tenho interesse no produto: *${
            n.name
          }*${_e}${ve} (${Q}x) pelo valor de *${m(
            ee * Q
          )}*. Gostaria de mais informações!`
        );
      window.open(`https://wa.me/${D}?text=${Le}`, "_blank");
    },
    w = () => {
      navigator.share
        ? navigator.share({
            title: n.name,
            text: `Confira este produto: ${n.name} por ${m(n.sale_price)}`,
            url: window.location.href,
          })
        : (navigator.clipboard.writeText(window.location.href),
          se.success(j.linkCopied));
    },
    H = () => {
      $((_) => (_ + 1) % te.length);
    },
    Y = () => {
      $((_) => (_ - 1 + te.length) % te.length);
    },
    Se = (_) => {
      z.current = _.touches[0].clientX;
    },
    de = (_) => {
      N.current = _.touches[0].clientX;
    },
    Je = () => {
      if (te.length <= 1) return;
      const _ = z.current - N.current;
      Math.abs(_) > 50 && (_ > 0 ? H() : Y());
    },
    es = () => {
      const _ = c
        ? { ...n, sale_price: c.price, name: `${n.name} - ${c.name}` }
        : n;
      for (let ee = 0; ee < Q; ee++) o(_);
      const D = c ? ` (${c.name})` : "";
      se.success(`${Q}x ${n.name}${D} ${j.addedToCart}`);
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(Ca, {
        images: te,
        currentIndex: U,
        open: Z,
        onOpenChange: x,
        onIndexChange: $,
      }),
      e.jsxs("div", {
        className: `min-h-screen ${M.bg}`,
        children: [
          e.jsx("header", {
            className: `sticky top-0 z-50 ${M.bgCard} border-b ${M.border} shadow-sm backdrop-blur-md`,
            children: e.jsxs("div", {
              className:
                "container mx-auto px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between",
              children: [
                e.jsxs(B, {
                  variant: "ghost",
                  size: "sm",
                  onClick: u,
                  className: `${M.text} gap-1 sm:gap-2 h-9`,
                  children: [
                    e.jsx(xa, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
                    e.jsx("span", { className: "text-sm", children: j.back }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-1 sm:gap-2",
                  children: [
                    e.jsx(B, {
                      variant: "ghost",
                      size: "icon",
                      onClick: w,
                      className: `${M.text} h-9 w-9`,
                      children: e.jsx(qt, {
                        className: "w-4 h-4 sm:w-5 sm:h-5",
                      }),
                    }),
                    e.jsx(B, {
                      variant: "ghost",
                      size: "icon",
                      onClick: () => L(!g),
                      className: `h-9 w-9 ${g ? "text-red-500" : M.text}`,
                      children: e.jsx(gt, {
                        className: `w-4 h-4 sm:w-5 sm:h-5 ${
                          g ? "fill-current" : ""
                        }`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs("main", {
            className: "container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-7xl",
            children: [
              e.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8",
                children: [
                  e.jsxs("div", {
                    className: "lg:col-span-5 space-y-3 sm:space-y-4",
                    children: [
                      e.jsx("div", {
                        className: `relative aspect-square rounded-2xl ${
                          J ? "bg-zinc-800" : "bg-white"
                        } overflow-hidden touch-pan-y shadow-xl border ${
                          M.border
                        }`,
                        onTouchStart: Se,
                        onTouchMove: de,
                        onTouchEnd: Je,
                        children:
                          te.length > 0
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "w-full h-full cursor-pointer relative group",
                                    onClick: () => x(!0),
                                    children: [
                                      e.jsx("img", {
                                        src: te[U],
                                        alt: n.name,
                                        className:
                                          "w-full h-full object-contain p-6 select-none transition-opacity duration-300",
                                        draggable: !1,
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100",
                                        children: e.jsxs("div", {
                                          className:
                                            "bg-black/50 text-white px-3 py-2 rounded-full flex items-center gap-2 text-sm",
                                          children: [
                                            e.jsx(ut, { className: "w-4 h-4" }),
                                            j.clickToZoom,
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  te.length > 1 &&
                                    e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx("button", {
                                          onClick: Y,
                                          className: `absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${
                                            J ? "bg-zinc-900/90" : "bg-white/90"
                                          } flex items-center justify-center shadow-lg hover:scale-110 transition-transform border ${
                                            M.border
                                          }`,
                                          children: e.jsx(Ps, {
                                            className: `w-5 h-5 ${M.text}`,
                                          }),
                                        }),
                                        e.jsx("button", {
                                          onClick: H,
                                          className: `absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${
                                            J ? "bg-zinc-900/90" : "bg-white/90"
                                          } flex items-center justify-center shadow-lg hover:scale-110 transition-transform border ${
                                            M.border
                                          }`,
                                          children: e.jsx(ps, {
                                            className: `w-5 h-5 ${M.text}`,
                                          }),
                                        }),
                                        e.jsx("div", {
                                          className:
                                            "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/30 backdrop-blur-md rounded-full px-3 py-2",
                                          children: te.map((_, D) =>
                                            e.jsx(
                                              "button",
                                              {
                                                onClick: () => $(D),
                                                className: `w-2.5 h-2.5 rounded-full transition-all ${
                                                  U === D
                                                    ? "w-6 scale-100"
                                                    : "bg-white/50 hover:bg-white/80"
                                                }`,
                                                style:
                                                  U === D
                                                    ? { backgroundColor: K }
                                                    : {},
                                              },
                                              D
                                            )
                                          ),
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : e.jsx("div", {
                                className:
                                  "w-full h-full flex items-center justify-center",
                                children: e.jsx(Fe, {
                                  className: `w-24 h-24 ${M.textMuted}`,
                                }),
                              }),
                      }),
                      te.length > 1 &&
                        e.jsx("div", {
                          className:
                            "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
                          children: te.map((_, D) =>
                            e.jsx(
                              "button",
                              {
                                onClick: () => $(D),
                                className: `flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                                  U === D
                                    ? "shadow-lg scale-105"
                                    : `${M.border} opacity-60 hover:opacity-100`
                                } ${J ? "bg-zinc-800" : "bg-white"}`,
                                style: U === D ? { borderColor: K } : {},
                                children: e.jsx("img", {
                                  src: _,
                                  alt: "",
                                  className: "w-full h-full object-contain p-1",
                                }),
                              },
                              D
                            )
                          ),
                        }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "lg:col-span-7 space-y-4 sm:space-y-5",
                    children: [
                      e.jsxs("div", {
                        className: "flex flex-wrap gap-1.5 sm:gap-2",
                        children: [
                          n.category &&
                            e.jsx(pe, {
                              variant: "outline",
                              className: `${M.border} ${M.text} text-[10px] sm:text-xs capitalize`,
                              children:
                                n.category === "celulares"
                                  ? "Celular"
                                  : n.category,
                            }),
                          n.brand &&
                            e.jsx(pe, {
                              className:
                                "text-white font-medium text-[10px] sm:text-xs",
                              style: { backgroundColor: K },
                              children: Pa[n.brand] || n.brand,
                            }),
                          X.length > 0 &&
                            e.jsxs(pe, {
                              className:
                                "bg-purple-500/10 text-purple-500 border-purple-500/20 text-[10px] sm:text-xs",
                              children: [
                                e.jsx(Ds, { className: "w-3 h-3 mr-1" }),
                                X.length,
                                " ",
                                y === "en-US" ? "variations" : "variações",
                              ],
                            }),
                          e.jsxs(pe, {
                            className:
                              "bg-green-500/10 text-green-500 border-green-500/20 text-[10px] sm:text-xs",
                            children: [
                              e.jsx(We, { className: "w-3 h-3 mr-1" }),
                              j.inStock,
                            ],
                          }),
                        ],
                      }),
                      e.jsx("h1", {
                        className: `text-xl sm:text-2xl lg:text-4xl font-bold ${M.text} leading-tight`,
                        children: n.name,
                      }),
                      e.jsxs("div", {
                        className: "flex flex-wrap items-center gap-2 sm:gap-3",
                        children: [
                          e.jsx("div", {
                            className: "flex items-center gap-0.5",
                            children: [1, 2, 3, 4, 5].map((_) =>
                              e.jsx(
                                Ve,
                                {
                                  className: `w-4 h-4 sm:w-5 sm:h-5 ${
                                    _ <= 4
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  }`,
                                },
                                _
                              )
                            ),
                          }),
                          e.jsxs("span", {
                            className: `text-xs sm:text-sm ${M.textSecondary}`,
                            children: ["4.0 (12 ", j.reviews, ")"],
                          }),
                          e.jsx("span", {
                            className: `text-xs sm:text-sm ${M.textMuted} hidden sm:inline`,
                            children: "|",
                          }),
                          e.jsxs("span", {
                            className: `text-xs sm:text-sm font-medium ${M.textSecondary}`,
                            children: ["+50 ", j.sold],
                          }),
                        ],
                      }),
                      (() => {
                        const _ = c ? c.price : n.sale_price,
                          D =
                            n.price_cash && n.price_cash > 0
                              ? n.price_cash
                              : null,
                          ee =
                            n.price_installment && n.price_installment > 0
                              ? n.price_installment
                              : null,
                          ve = n.installment_count || 1;
                        return e.jsxs("div", {
                          className: `${
                            J ? "bg-zinc-800/50" : "bg-gray-50"
                          } rounded-2xl p-4 sm:p-6 border ${M.border}`,
                          children: [
                            e.jsxs("div", {
                              className: "flex items-baseline gap-2 mb-1",
                              children: [
                                e.jsx("span", {
                                  className: `text-sm ${M.textMuted} line-through`,
                                  children: m(_ * 1.15),
                                }),
                                e.jsxs(pe, {
                                  className:
                                    "bg-green-500/20 text-green-500 border-0 text-xs font-bold",
                                  children: ["-15% ", j.off],
                                }),
                                c &&
                                  e.jsx(pe, {
                                    className:
                                      "bg-purple-500/20 text-purple-500 border-0 text-xs font-bold",
                                    children: c.name,
                                  }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-3xl sm:text-4xl font-black mb-2",
                              style: { color: K },
                              children: m(_),
                            }),
                            D &&
                              !c &&
                              e.jsx("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20",
                                  children: [
                                    e.jsx(Oe, {
                                      className: "w-5 h-5 text-emerald-500",
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-xs text-emerald-400 font-medium",
                                          children: "À vista",
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "text-lg font-black text-emerald-500",
                                          children: m(D),
                                        }),
                                      ],
                                    }),
                                    D < _ &&
                                      e.jsxs(pe, {
                                        className:
                                          "bg-emerald-500 text-white text-[10px] ml-1",
                                        children: [
                                          "-",
                                          Math.round(((_ - D) / _) * 100),
                                          "% ",
                                          j.off,
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                            ee &&
                              ve > 1 &&
                              !c &&
                              e.jsx("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 px-3 py-2 rounded-xl",
                                  style: {
                                    backgroundColor: `${K}10`,
                                    border: `1px solid ${K}30`,
                                  },
                                  children: [
                                    e.jsx(je, {
                                      className: "w-5 h-5",
                                      style: { color: K },
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className: "text-xs font-medium",
                                          style: { color: K },
                                          children: "Parcelado",
                                        }),
                                        e.jsxs("p", {
                                          className: "text-base font-bold",
                                          style: { color: K },
                                          children: [
                                            ve,
                                            "x de ",
                                            m(ee / ve),
                                            " ",
                                            j.noInterest,
                                          ],
                                        }),
                                        e.jsxs("p", {
                                          className: `text-[11px] ${M.textMuted}`,
                                          children: ["Total: ", m(ee)],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            Ge &&
                              Ie > 1 &&
                              !ee &&
                              e.jsxs("p", {
                                className: `text-sm ${M.textSecondary} mb-3`,
                                children: [
                                  j.upTo,
                                  " ",
                                  e.jsxs("span", {
                                    className: "text-emerald-500 font-bold",
                                    children: [Ie, "x ", j.of, " ", m(_ / Ie)],
                                  }),
                                  " ",
                                  j.noInterest,
                                ],
                              }),
                            Ue &&
                              !D &&
                              r?.os_print_settings
                                ?.catalog_pix_discount_enabled === !0 &&
                              (r?.os_print_settings?.catalog_pix_discount ??
                                0) > 0 &&
                              e.jsx("div", {
                                className: "flex items-center gap-2 mt-3",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20",
                                  children: [
                                    y === "pt-PT"
                                      ? e.jsx("img", {
                                          src: ks,
                                          alt: "MB Way",
                                          className: "w-4 h-4 object-contain",
                                        })
                                      : y === "en-US"
                                      ? e.jsx(qs, {
                                          className: "w-4 h-4 text-emerald-500",
                                        })
                                      : e.jsx(ss, {
                                          className: "w-4 h-4 text-emerald-500",
                                        }),
                                    e.jsxs("span", {
                                      className:
                                        "text-sm text-emerald-500 font-semibold",
                                      children: [
                                        m(
                                          _ *
                                            (1 -
                                              (r?.os_print_settings
                                                ?.catalog_pix_discount ?? 0) /
                                                100)
                                        ),
                                        " ",
                                        j.withPix,
                                      ],
                                    }),
                                    e.jsxs(pe, {
                                      className:
                                        "bg-emerald-500 text-white text-[10px]",
                                      children: [
                                        r?.os_print_settings
                                          ?.catalog_pix_discount,
                                        "% ",
                                        j.off,
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        });
                      })(),
                      X.length > 0 &&
                        (() => {
                          const _ = X.filter((D) =>
                            D.name.toLowerCase().includes(a.toLowerCase())
                          );
                          return e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsxs("button", {
                                onClick: () => xe(!S),
                                className: `w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border-2 transition-all ${
                                  c
                                    ? "shadow-md"
                                    : `${
                                        J
                                          ? "border-zinc-700 bg-zinc-800/30 hover:border-zinc-600"
                                          : "border-gray-200 bg-gray-50 hover:border-gray-300"
                                      }`
                                }`,
                                style: c
                                  ? {
                                      borderColor: K,
                                      backgroundColor: `${K}08`,
                                    }
                                  : {},
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-9 h-9 rounded-xl flex items-center justify-center",
                                        style: { backgroundColor: `${K}15` },
                                        children: e.jsx(Ds, {
                                          className: "w-4 h-4",
                                          style: { color: K },
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "text-left",
                                        children: [
                                          e.jsx("p", {
                                            className: `text-sm font-bold ${M.text}`,
                                            children: c
                                              ? c.name
                                              : y === "en-US"
                                              ? "Choose your option"
                                              : "Escolha sua opção",
                                          }),
                                          e.jsx("p", {
                                            className: `text-xs ${M.textMuted}`,
                                            children: c
                                              ? m(c.price)
                                              : `${X.length} ${
                                                  y === "en-US"
                                                    ? "options available"
                                                    : "opções disponíveis"
                                                }`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(ps, {
                                    className: `w-5 h-5 ${
                                      M.textMuted
                                    } transition-transform duration-200 ${
                                      S ? "rotate-90" : ""
                                    }`,
                                  }),
                                ],
                              }),
                              S &&
                                e.jsxs("div", {
                                  className: `rounded-2xl border ${
                                    M.border
                                  } overflow-hidden ${
                                    J ? "bg-zinc-800/30" : "bg-white"
                                  } animate-in slide-in-from-top-2 duration-200`,
                                  children: [
                                    X.length > 4 &&
                                      e.jsx("div", {
                                        className: "p-3 pb-0",
                                        children: e.jsxs("div", {
                                          className: "relative",
                                          children: [
                                            e.jsx(Cs, {
                                              className:
                                                "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4",
                                              style: { color: K },
                                            }),
                                            e.jsx(ue, {
                                              value: a,
                                              onChange: (D) =>
                                                W(D.target.value),
                                              placeholder:
                                                y === "en-US"
                                                  ? "Search..."
                                                  : "Pesquisar...",
                                              className: `pl-9 h-9 rounded-xl ${
                                                J
                                                  ? "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                                                  : "bg-gray-50 border-gray-200"
                                              }`,
                                            }),
                                          ],
                                        }),
                                      }),
                                    e.jsxs("div", {
                                      className:
                                        "max-h-[280px] overflow-y-auto p-2",
                                      children: [
                                        _.map((D) => {
                                          const ee = c?.id === D.id,
                                            ve = D.price - n.sale_price;
                                          return e.jsxs(
                                            "button",
                                            {
                                              onClick: () => {
                                                le(ee ? null : D), xe(!1);
                                              },
                                              className: `w-full flex items-center justify-between p-3 rounded-xl transition-all mb-1 last:mb-0 ${
                                                ee
                                                  ? "shadow-sm"
                                                  : `${
                                                      J
                                                        ? "hover:bg-zinc-700/50"
                                                        : "hover:bg-gray-50"
                                                    }`
                                              }`,
                                              style: ee
                                                ? {
                                                    backgroundColor: `${K}12`,
                                                    borderLeft: `3px solid ${K}`,
                                                  }
                                                : {
                                                    borderLeft:
                                                      "3px solid transparent",
                                                  },
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "text-left flex-1 min-w-0",
                                                  children: [
                                                    e.jsx("p", {
                                                      className: `text-sm font-semibold ${M.text} truncate`,
                                                      children: D.name,
                                                    }),
                                                    ve !== 0 &&
                                                      e.jsx("span", {
                                                        className: `text-[10px] ${
                                                          ve > 0
                                                            ? "text-orange-500"
                                                            : "text-green-500"
                                                        } font-medium`,
                                                        children:
                                                          ve > 0
                                                            ? `+${m(ve)}`
                                                            : `-${m(
                                                                Math.abs(ve)
                                                              )}`,
                                                      }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 flex-shrink-0",
                                                  children: [
                                                    e.jsx("span", {
                                                      className:
                                                        "text-sm font-black",
                                                      style: { color: K },
                                                      children: m(D.price),
                                                    }),
                                                    ee &&
                                                      e.jsx("div", {
                                                        className:
                                                          "w-5 h-5 rounded-full flex items-center justify-center",
                                                        style: {
                                                          backgroundColor: K,
                                                        },
                                                        children: e.jsx(We, {
                                                          className:
                                                            "w-3 h-3 text-white",
                                                        }),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            D.id
                                          );
                                        }),
                                        _.length === 0 &&
                                          a &&
                                          e.jsx("p", {
                                            className: `text-sm text-center py-3 ${M.textMuted}`,
                                            children:
                                              y === "en-US"
                                                ? "No variations found"
                                                : "Nenhuma variação encontrada",
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          });
                        })(),
                      Re.length > 0 &&
                        e.jsxs("div", {
                          className: "space-y-3",
                          children: [
                            e.jsxs("h3", {
                              className: `text-sm font-semibold ${M.text} flex items-center gap-2`,
                              children: [
                                j.color,
                                ": ",
                                e.jsx("span", {
                                  style: { color: K },
                                  children: d ? Us[d]?.label : j.select,
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: Re.map((_) => {
                                const D = Us[_] || { label: _, color: "#888" },
                                  ee = d === _;
                                return e.jsx(
                                  "button",
                                  {
                                    onClick: () => V(ee ? null : _),
                                    className: `w-10 h-10 rounded-full border-2 transition-all relative ${
                                      ee
                                        ? "scale-110 shadow-lg"
                                        : "hover:scale-105"
                                    }`,
                                    style: {
                                      backgroundColor: D.color,
                                      borderColor: ee
                                        ? K
                                        : J
                                        ? "#3f3f46"
                                        : "#e5e7eb",
                                    },
                                    title: D.label,
                                    children:
                                      ee &&
                                      e.jsx(We, {
                                        className:
                                          "absolute inset-0 m-auto w-5 h-5",
                                        style: {
                                          color:
                                            D.color === "#FFFFFF"
                                              ? "#000"
                                              : "#fff",
                                        },
                                      }),
                                  },
                                  _
                                );
                              }),
                            }),
                          ],
                        }),
                      e.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          e.jsxs("span", {
                            className: `text-sm font-medium ${M.text}`,
                            children: [j.quantity, ":"],
                          }),
                          e.jsxs("div", {
                            className: `flex items-center gap-3 px-3 py-2 rounded-full ${
                              J ? "bg-zinc-800" : "bg-gray-100"
                            } border ${M.border}`,
                            children: [
                              e.jsx("button", {
                                onClick: () => T(Math.max(1, Q - 1)),
                                className: `w-8 h-8 rounded-full flex items-center justify-center ${
                                  J
                                    ? "bg-zinc-700 hover:bg-zinc-600"
                                    : "bg-white hover:bg-gray-50"
                                } transition-colors`,
                                children: e.jsx("span", {
                                  className: `text-lg font-bold ${M.text}`,
                                  children: "−",
                                }),
                              }),
                              e.jsx("span", {
                                className: `text-lg font-bold min-w-[2rem] text-center ${M.text}`,
                                children: Q,
                              }),
                              e.jsx("button", {
                                onClick: () => T(Q + 1),
                                className:
                                  "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                style: { backgroundColor: K },
                                children: e.jsx("span", {
                                  className: "text-lg font-bold text-white",
                                  children: "+",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2",
                        children: [
                          e.jsxs(B, {
                            onClick: es,
                            className:
                              "flex-1 h-12 sm:h-14 gap-2 font-bold text-sm sm:text-base rounded-xl shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98]",
                            style: {
                              background: `linear-gradient(135deg, ${$e}, ${$e}dd)`,
                              color: oe,
                            },
                            children: [
                              e.jsx(ft, { className: "w-5 h-5" }),
                              y === "en-US" ? "Buy Now" : "Comprar Agora",
                            ],
                          }),
                          e.jsxs(B, {
                            onClick: h,
                            className:
                              "flex-1 h-12 sm:h-14 gap-2 font-bold text-sm sm:text-base bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98]",
                            children: [
                              e.jsx(Ze, { className: "w-5 h-5" }),
                              j.buyWhatsApp,
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "grid grid-cols-4 gap-2 sm:gap-3 pt-3 sm:pt-4",
                        children: [
                          e.jsxs("div", {
                            className: `flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl ${
                              J ? "bg-zinc-800/50" : "bg-gray-50"
                            } text-center`,
                            children: [
                              e.jsx(Ce, {
                                className: "w-5 h-5 sm:w-6 sm:h-6",
                                style: { color: K },
                              }),
                              e.jsx("span", {
                                className: `text-[9px] sm:text-xs font-medium ${M.text} leading-tight`,
                                children: j.freeShipping,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: `flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl ${
                              J ? "bg-zinc-800/50" : "bg-gray-50"
                            } text-center`,
                            children: [
                              e.jsx(qe, {
                                className:
                                  "w-5 h-5 sm:w-6 sm:h-6 text-green-500",
                              }),
                              e.jsx("span", {
                                className: `text-[9px] sm:text-xs font-medium ${M.text} leading-tight`,
                                children: j.securePurchase,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: `flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl ${
                              J ? "bg-zinc-800/50" : "bg-gray-50"
                            } text-center`,
                            children: [
                              e.jsx(bt, {
                                className:
                                  "w-5 h-5 sm:w-6 sm:h-6 text-blue-500",
                              }),
                              e.jsx("span", {
                                className: `text-[9px] sm:text-xs font-medium ${M.text} leading-tight`,
                                children: j.easyExchange,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: `flex flex-col items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl ${
                              J ? "bg-zinc-800/50" : "bg-gray-50"
                            } text-center`,
                            children: [
                              e.jsx(Vt, {
                                className:
                                  "w-5 h-5 sm:w-6 sm:h-6 text-purple-500",
                              }),
                              e.jsx("span", {
                                className: `text-[9px] sm:text-xs font-medium ${M.text} leading-tight`,
                                children: j.support,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              n.description &&
                e.jsxs("section", {
                  className: `mt-8 ${M.bgCard} rounded-2xl p-6 border ${M.border}`,
                  children: [
                    e.jsxs("h2", {
                      className: `text-xl font-bold ${M.text} mb-4 flex items-center gap-2`,
                      children: [
                        e.jsx(_t, {
                          className: "w-5 h-5",
                          style: { color: K },
                        }),
                        j.productDescription,
                      ],
                    }),
                    e.jsx("div", {
                      className: `${M.textSecondary} whitespace-pre-line leading-relaxed`,
                      children: n.description,
                    }),
                  ],
                }),
              e.jsxs("section", {
                className: `mt-6 ${M.bgCard} rounded-2xl p-6 border ${M.border}`,
                children: [
                  e.jsxs("h2", {
                    className: `text-xl font-bold ${M.text} mb-4 flex items-center gap-2`,
                    children: [
                      e.jsx(je, { className: "w-5 h-5", style: { color: K } }),
                      j.paymentMethods,
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",
                    children: ze.map((_) =>
                      e.jsxs(
                        "div",
                        {
                          className: `flex items-center gap-2 p-3 rounded-xl ${
                            J ? "bg-zinc-800" : "bg-gray-50"
                          } border ${M.border}`,
                          children: [
                            e.jsx("span", {
                              style: { color: K },
                              children: re[_]?.icon,
                            }),
                            e.jsx("span", {
                              className: `text-sm ${M.text}`,
                              children: re[_]?.label || _,
                            }),
                          ],
                        },
                        _
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
          e.jsx("section", {
            className: `py-8 ${M.bgSection}`,
            children: e.jsx("div", {
              className: "container mx-auto px-3 sm:px-4 max-w-7xl",
              children: e.jsx($a, {
                productId: n.id,
                isDarkTheme: J,
                primaryColor: K,
                userId: A,
              }),
            }),
          }),
          b.length > 1 &&
            E &&
            e.jsx("section", {
              className: `${M.bg}`,
              children: e.jsx(wa, {
                products: b,
                currentProductId: n.id,
                onSelectProduct: E,
                onAddToCart: o,
                formatPrice: m,
                isDarkTheme: J,
                primaryColor: K,
                buttonColor: $e,
              }),
            }),
        ],
      }),
    ],
  });
}
const za = [
  { name: "Apple", logo: Wt },
  { name: "Samsung", logo: Ht },
  { name: "Xiaomi", logo: Gt },
  { name: "Realme", logo: Xt },
  { name: "LG", logo: Qt },
  { name: "Huawei", logo: Kt },
];
function Ma({ isDarkTheme: n, primaryColor: r }) {
  const [u, o] = l.useState(null);
  return e.jsx("div", {
    className: `py-4 border-b transition-all ${
      n ? "bg-zinc-900 border-zinc-800" : "bg-gray-100 border-gray-200"
    }`,
    children: e.jsxs("div", {
      className: "container mx-auto px-4",
      children: [
        e.jsx("p", {
          className: `text-center text-sm font-medium mb-4 ${
            n ? "text-zinc-400" : "text-gray-600"
          }`,
          children: "🏆 Trabalhamos com as principais marcas do mercado!",
        }),
        e.jsx("div", {
          className:
            "flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap",
          children: za.map((m) => {
            const b = u === m.name;
            return e.jsx(
              "div",
              {
                onMouseEnter: () => o(m.name),
                onMouseLeave: () => o(null),
                className: `
                  relative cursor-pointer
                  flex items-center justify-center p-3 sm:p-4
                  transition-all duration-300 ease-out
                  rounded-xl ${
                    n ? "bg-zinc-800/50" : "bg-white"
                  } shadow-sm hover:shadow-lg
                  ${b ? "scale-110" : "scale-100"}
                `,
                title: m.name,
                children: e.jsx("img", {
                  src: m.logo,
                  alt: m.name,
                  className: `
                    h-6 sm:h-8 md:h-10 w-auto object-contain relative z-10
                    transition-all duration-300
                    ${b ? "brightness-125" : "brightness-100"}
                  `,
                  loading: "lazy",
                  draggable: !1,
                }),
              },
              m.name
            );
          }),
        }),
      ],
    }),
  });
}
function Ta({ banners: n, primaryColor: r, autoPlayInterval: u = 5e3 }) {
  const [o, m] = l.useState(0),
    [b, E] = l.useState(!1),
    [A, y] = l.useState(!1),
    U = l.useRef(0),
    $ = l.useRef(0),
    g = n.filter((a) => a.desktopImage || a.mobileImage),
    L = l.useCallback(() => {
      g.length !== 0 && (m((a) => (a + 1) % g.length), y(!1));
    }, [g.length]),
    d = l.useCallback(() => {
      g.length !== 0 && (m((a) => (a - 1 + g.length) % g.length), y(!1));
    }, [g.length]),
    V = l.useCallback((a) => {
      m(a), y(!1);
    }, []);
  l.useEffect(() => {
    if (g.length <= 1 || b) return;
    const a = setInterval(L, u);
    return () => clearInterval(a);
  }, [g.length, b, L, u]);
  const c = (a) => {
      U.current = a.touches[0].clientX;
    },
    le = (a) => {
      $.current = a.touches[0].clientX;
    },
    X = () => {
      if (g.length <= 1) return;
      const a = U.current - $.current;
      Math.abs(a) > 50 && (a > 0 ? L() : d());
    };
  if (g.length === 0) return null;
  const G = (a) => {
    a && window.open(a, "_blank");
  };
  return e.jsxs("div", {
    className: "relative w-full overflow-hidden group rounded-xl",
    onMouseEnter: () => E(!0),
    onMouseLeave: () => E(!1),
    onTouchStart: c,
    onTouchMove: le,
    onTouchEnd: X,
    children: [
      e.jsx("div", {
        className:
          "flex transition-transform duration-500 ease-out will-change-transform",
        style: { transform: `translateX(-${o * 100}%)` },
        children: g.map((a, W) =>
          e.jsxs(
            "div",
            {
              className: "w-full flex-shrink-0 cursor-pointer",
              onClick: () => G(a.link),
              children: [
                e.jsx("div", {
                  className: "hidden md:block w-full",
                  children: e.jsx("img", {
                    src: a.desktopImage || a.mobileImage,
                    alt: `Banner ${W + 1}`,
                    className: "w-full h-auto",
                    style: { maxHeight: "600px", objectFit: "contain" },
                    loading: W === 0 ? "eager" : "lazy",
                    onLoad: () => W === o && y(!0),
                  }),
                }),
                e.jsx("div", {
                  className: "md:hidden w-full",
                  children: e.jsx("img", {
                    src: a.mobileImage || a.desktopImage,
                    alt: `Banner ${W + 1}`,
                    className: "w-full h-auto object-contain",
                    style: { maxHeight: "350px" },
                    loading: W === 0 ? "eager" : "lazy",
                    onLoad: () => W === o && y(!0),
                  }),
                }),
              ],
            },
            a.id || W
          )
        ),
      }),
      g.length > 1 &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx(B, {
              variant: "ghost",
              size: "icon",
              className:
                "absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-2xl z-20",
              onClick: (a) => {
                a.stopPropagation(), d();
              },
              children: e.jsx(Ps, { className: "w-5 h-5 md:w-6 md:h-6" }),
            }),
            e.jsx(B, {
              variant: "ghost",
              size: "icon",
              className:
                "absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/60 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 md:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/10 shadow-2xl z-20",
              onClick: (a) => {
                a.stopPropagation(), L();
              },
              children: e.jsx(ps, { className: "w-5 h-5 md:w-6 md:h-6" }),
            }),
          ],
        }),
      g.length > 1 &&
        e.jsx("div", {
          className:
            "absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 backdrop-blur-md rounded-full px-3 py-2 z-20",
          children: g.map((a, W) =>
            e.jsx(
              "button",
              {
                onClick: (S) => {
                  S.stopPropagation(), V(W);
                },
                className: `rounded-full transition-all duration-300 ${
                  W === o
                    ? "w-6 h-2.5"
                    : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
                }`,
                style: { backgroundColor: W === o ? r : void 0 },
                "aria-label": `Go to slide ${W + 1}`,
              },
              W
            )
          ),
        }),
      g.length > 1 &&
        e.jsx("div", {
          className:
            "md:hidden absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 text-[10px] bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm",
          children: "← Deslize →",
        }),
      !A &&
        e.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse pointer-events-none",
        }),
    ],
  });
}
const Ea = [
    "Troca de tela",
    "Reparo em placa",
    "Troca de bateria",
    "Troca de conector",
    "Reparo em Face ID",
    "Troca de tampa traseira",
    "Reparo em câmera",
    "Outro",
  ],
  Ra = ({
    whatsappNumber: n,
    companyName: r,
    primaryColor: u,
    buttonColor: o,
    isDarkTheme: m,
  }) => {
    const [b, E] = l.useState(!1),
      [A, y] = l.useState({
        nome: "",
        telefone: "",
        modelo: "",
        servico: "",
        informacoesAdicionais: "",
      }),
      U = () => {
        if (!A.nome.trim()) {
          se.error("Por favor, informe seu nome");
          return;
        }
        if (!A.telefone.trim()) {
          se.error("Por favor, informe seu telefone");
          return;
        }
        if (!A.modelo.trim()) {
          se.error("Por favor, informe o modelo do celular");
          return;
        }
        if (!A.servico) {
          se.error("Por favor, selecione o serviço desejado");
          return;
        }
        const g = `🔧 *SOLICITAÇÃO DE SERVIÇO*

📋 *Dados do Cliente:*
• Nome: ${A.nome}
• Telefone: ${A.telefone}

📱 *Informações do Aparelho:*
• Modelo: ${A.modelo}
• Serviço: ${A.servico}
${
  A.informacoesAdicionais
    ? `
📝 *Informações Adicionais:*
${A.informacoesAdicionais}`
    : ""
}

_Mensagem enviada via Catálogo Virtual - ${r}_`,
          L = n.replace(/\D/g, ""),
          V = `https://wa.me/${
            L.length <= 11 && !L.startsWith("+")
              ? L.startsWith("55")
                ? L
                : `55${L}`
              : L.replace(/^\+/, "")
          }?text=${encodeURIComponent(g)}`;
        window.open(V, "_blank"),
          y({
            nome: "",
            telefone: "",
            modelo: "",
            servico: "",
            informacoesAdicionais: "",
          }),
          E(!1),
          se.success("Redirecionando para o WhatsApp...");
      },
      $ = {
        bg: m ? "bg-zinc-900" : "bg-white",
        text: m ? "text-white" : "text-gray-900",
        textSecondary: m ? "text-zinc-400" : "text-gray-600",
        border: m ? "border-zinc-700" : "border-gray-200",
        input: m
          ? "bg-zinc-800 border-zinc-700 text-white"
          : "bg-white border-gray-300 text-gray-900",
      };
    return e.jsxs(Ke, {
      open: b,
      onOpenChange: E,
      children: [
        e.jsx(Vs, {
          asChild: !0,
          children: e.jsxs(B, {
            variant: "ghost",
            size: "sm",
            className: `hidden sm:flex gap-2 ${$.text} hover:opacity-80`,
            children: [
              e.jsx(Ss, { className: "w-4 h-4", style: { color: u } }),
              e.jsx("span", {
                className: "hidden lg:inline",
                children: "Solicitar Serviço",
              }),
            ],
          }),
        }),
        e.jsxs(Ye, {
          className: `${$.bg} ${$.border} ${$.text} max-w-md`,
          children: [
            e.jsx(ds, {
              children: e.jsxs(ms, {
                className: `flex items-center gap-2 ${$.text}`,
                children: [
                  e.jsx(Ss, { className: "w-5 h-5", style: { color: u } }),
                  "Solicitar Serviço",
                ],
              }),
            }),
            e.jsxs("div", {
              className: "space-y-4 mt-4",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(Ne, {
                      htmlFor: "nome",
                      className: $.text,
                      children: "Nome *",
                    }),
                    e.jsx(ue, {
                      id: "nome",
                      placeholder: "Seu nome completo",
                      value: A.nome,
                      onChange: (g) => y({ ...A, nome: g.target.value }),
                      className: $.input,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(Ne, {
                      htmlFor: "telefone",
                      className: $.text,
                      children: "Telefone *",
                    }),
                    e.jsx(ue, {
                      id: "telefone",
                      placeholder: "(00) 00000-0000",
                      value: A.telefone,
                      onChange: (g) => y({ ...A, telefone: g.target.value }),
                      className: $.input,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(Ne, {
                      htmlFor: "modelo",
                      className: $.text,
                      children: "Modelo do Celular *",
                    }),
                    e.jsx(ue, {
                      id: "modelo",
                      placeholder: "Ex: iPhone 14 Pro, Samsung S23...",
                      value: A.modelo,
                      onChange: (g) => y({ ...A, modelo: g.target.value }),
                      className: $.input,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(Ne, {
                      htmlFor: "servico",
                      className: $.text,
                      children: "Serviço *",
                    }),
                    e.jsxs(Yt, {
                      value: A.servico,
                      onValueChange: (g) => y({ ...A, servico: g }),
                      children: [
                        e.jsx(Zt, {
                          className: $.input,
                          children: e.jsx(Jt, {
                            placeholder: "Selecione o serviço desejado",
                          }),
                        }),
                        e.jsx(ea, {
                          className: `${$.bg} ${$.border}`,
                          children: Ea.map((g) =>
                            e.jsx(
                              sa,
                              {
                                value: g,
                                className: `${$.text} focus:bg-opacity-10`,
                                children: g,
                              },
                              g
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs(Ne, {
                      htmlFor: "info",
                      className: $.text,
                      children: [
                        "Informações Adicionais ",
                        e.jsx("span", {
                          className: $.textSecondary,
                          children: "(opcional)",
                        }),
                      ],
                    }),
                    e.jsx(ct, {
                      id: "info",
                      placeholder: "Descreva o problema ou observações...",
                      value: A.informacoesAdicionais,
                      onChange: (g) =>
                        y({ ...A, informacoesAdicionais: g.target.value }),
                      className: `${$.input} min-h-[80px] resize-none`,
                    }),
                  ],
                }),
                e.jsxs(B, {
                  onClick: U,
                  className: "w-full h-11 gap-2 font-semibold mt-4",
                  style: { backgroundColor: "#22c55e", color: "#fff" },
                  children: [
                    e.jsx(dt, { className: "w-4 h-4" }),
                    "Enviar via WhatsApp",
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ba = (n) =>
    n === "pt-PT"
      ? [
          {
            id: "mbway",
            label: "MB Way",
            icon: Is,
            description: "Pagamento instantâneo",
          },
          {
            id: "dinheiro",
            label: "Dinheiro",
            icon: Oe,
            description: "Pagamento em numerário",
          },
          {
            id: "credito",
            label: "Cartão de Crédito",
            icon: je,
            description: "Em prestações",
          },
          {
            id: "debito",
            label: "Cartão de Débito",
            icon: je,
            description: "À vista",
          },
        ]
      : n === "en-US"
      ? [
          {
            id: "card",
            label: "Credit/Debit Card",
            icon: je,
            description: "Visa, Mastercard, Amex",
          },
          {
            id: "cash",
            label: "Cash",
            icon: Oe,
            description: "Pay on delivery",
          },
          {
            id: "paypal",
            label: "PayPal",
            icon: Is,
            description: "Fast & secure",
          },
          {
            id: "applepay",
            label: "Apple Pay",
            icon: Is,
            description: "Contactless payment",
          },
        ]
      : [
          {
            id: "pix",
            label: "PIX",
            icon: ss,
            description: "Pagamento instantâneo",
          },
          {
            id: "dinheiro",
            label: "Dinheiro",
            icon: Oe,
            description: "Pagamento em espécie",
          },
          {
            id: "credito",
            label: "Cartão de Crédito",
            icon: je,
            description: "Em até 12x",
          },
          {
            id: "debito",
            label: "Cartão de Débito",
            icon: je,
            description: "À vista",
          },
        ],
  Fa = {
    "pt-BR": {
      finishOrder: "Finalize seu pedido",
      yourCart: "Seu Carrinho",
      items: "itens",
      yourData: "Seus Dados",
      fullName: "Nome completo",
      phoneWhatsApp: "Telefone / WhatsApp",
      phonePlaceholder: "(00) 00000-0000",
      deliveryMethod: "Forma de recebimento",
      storePickup: "Retirar na loja",
      storePickupDesc: "Retire seu pedido no endereço da loja",
      delivery: "Entrega",
      deliveryDesc: "Receba em seu endereço",
      fullAddress: "Endereço completo",
      addressPlaceholder: "Rua, número, bairro, cidade",
      complement: "Complemento (opcional)",
      complementPlaceholder: "Apto, bloco, referência...",
      selectDeliveryPerson: "Selecione o entregador",
      deliveryNote:
        "Entregas realizadas somente na cidade ou região. Consulte disponibilidade.",
      paymentMethod: "Forma de Pagamento",
      securePayment: "Pagamento seguro e protegido",
      confirmOrder: "Confirme seu Pedido",
      couponLabel: "Cupom de Desconto",
      couponPlaceholder: "Digite o cupom",
      apply: "Aplicar",
      subtotal: "Subtotal",
      discount: "Desconto",
      total: "Total",
      back: "Voltar",
      continue: "Continuar",
      sendOrder: "Enviar Pedido",
      orderViaWhatsApp: "Ao confirmar, seu pedido será enviado via WhatsApp",
      free: "GRÁTIS",
      shipping: "Frete",
      fillNamePhone: "Preencha seu nome e telefone",
      fillAddress: "Preencha o endereço de entrega",
      selectDelivery: "Selecione um entregador",
      orderSent: "Pedido enviado via WhatsApp!",
      invalidCoupon: "Cupom inválido ou expirado",
      couponLimitReached: "Este cupom atingiu o limite de uso",
      couponMinValue: "Valor mínimo para este cupom:",
      couponApplied: "Cupom aplicado com sucesso!",
      enterCouponCode: "Digite um código de cupom",
      percentOff: "de desconto",
      fixedOff: "de desconto",
      freeShipping: "Frete Grátis",
      upToKm: "Até",
    },
    "pt-PT": {
      finishOrder: "Finalize a sua encomenda",
      yourCart: "O Seu Carrinho",
      items: "artigos",
      yourData: "Os Seus Dados",
      fullName: "Nome completo",
      phoneWhatsApp: "Telefone / WhatsApp",
      phonePlaceholder: "+351 912 345 678",
      deliveryMethod: "Forma de receção",
      storePickup: "Levantar na loja",
      storePickupDesc: "Levante a sua encomenda na morada da loja",
      delivery: "Entrega",
      deliveryDesc: "Receba na sua morada",
      fullAddress: "Morada completa",
      addressPlaceholder: "Rua, número, código postal, cidade",
      complement: "Complemento (opcional)",
      complementPlaceholder: "Andar, porta, referência...",
      selectDeliveryPerson: "Selecione o estafeta",
      deliveryNote:
        "Entregas realizadas apenas na cidade ou região. Consulte disponibilidade.",
      paymentMethod: "Forma de Pagamento",
      securePayment: "Pagamento seguro e protegido",
      confirmOrder: "Confirme a sua Encomenda",
      couponLabel: "Cupão de Desconto",
      couponPlaceholder: "Introduza o cupão",
      apply: "Aplicar",
      subtotal: "Subtotal",
      discount: "Desconto",
      total: "Total",
      back: "Voltar",
      continue: "Continuar",
      sendOrder: "Enviar Encomenda",
      orderViaWhatsApp:
        "Ao confirmar, a sua encomenda será enviada via WhatsApp",
      free: "GRÁTIS",
      shipping: "Portes",
      fillNamePhone: "Preencha o seu nome e telefone",
      fillAddress: "Preencha a morada de entrega",
      selectDelivery: "Selecione um estafeta",
      orderSent: "Encomenda enviada via WhatsApp!",
      invalidCoupon: "Cupão inválido ou expirado",
      couponLimitReached: "Este cupão atingiu o limite de utilização",
      couponMinValue: "Valor mínimo para este cupão:",
      couponApplied: "Cupão aplicado com sucesso!",
      enterCouponCode: "Introduza um código de cupão",
      percentOff: "de desconto",
      fixedOff: "de desconto",
      freeShipping: "Portes Grátis",
      upToKm: "Até",
    },
    "en-US": {
      finishOrder: "Complete your order",
      yourCart: "Your Cart",
      items: "items",
      yourData: "Your Information",
      fullName: "Full name",
      phoneWhatsApp: "Phone / WhatsApp",
      phonePlaceholder: "+1 (555) 123-4567",
      deliveryMethod: "Delivery method",
      storePickup: "Store pickup",
      storePickupDesc: "Pick up your order at our store",
      delivery: "Delivery",
      deliveryDesc: "Receive at your address",
      fullAddress: "Full address",
      addressPlaceholder: "Street, number, city, state, zip",
      complement: "Apartment/Suite (optional)",
      complementPlaceholder: "Apt, suite, floor...",
      selectDeliveryPerson: "Select delivery driver",
      deliveryNote:
        "Deliveries only within city or region. Check availability.",
      paymentMethod: "Payment Method",
      securePayment: "Secure and protected payment",
      confirmOrder: "Confirm your Order",
      couponLabel: "Discount Coupon",
      couponPlaceholder: "Enter coupon code",
      apply: "Apply",
      subtotal: "Subtotal",
      discount: "Discount",
      total: "Total",
      back: "Back",
      continue: "Continue",
      sendOrder: "Send Order",
      orderViaWhatsApp:
        "Upon confirmation, your order will be sent via WhatsApp",
      free: "FREE",
      shipping: "Shipping",
      fillNamePhone: "Please fill in your name and phone",
      fillAddress: "Please fill in your delivery address",
      selectDelivery: "Please select a delivery driver",
      orderSent: "Order sent via WhatsApp!",
      invalidCoupon: "Invalid or expired coupon",
      couponLimitReached: "This coupon has reached its usage limit",
      couponMinValue: "Minimum purchase for this coupon:",
      couponApplied: "Coupon applied successfully!",
      enterCouponCode: "Enter a coupon code",
      percentOff: "off",
      fixedOff: "off",
      freeShipping: "Free Shipping",
      upToKm: "Up to",
    },
  },
  Oa = ({
    open: n,
    onOpenChange: r,
    cart: u,
    companyInfo: o,
    formatPrice: m,
    primaryColor: b,
    buttonColor: E,
    isDarkTheme: A,
    coupons: y = [],
    deliveryPersons: U = [],
    deliveryEnabled: $ = !1,
    userId: g,
    onOrderCreated: L,
    catalogLanguage: d = "pt-BR",
    abandonedCartId: V,
  }) => {
    const c = Fa[d],
      le = Ba(d),
      [X, G] = l.useState("cart"),
      [a, W] = l.useState({ name: "", phone: "", address: "", complement: "" }),
      [S, xe] = l.useState(le[0]?.id || "pix"),
      [Q, T] = l.useState("pickup"),
      [Z, x] = l.useState(""),
      [j, re] = l.useState(""),
      [z, N] = l.useState(null),
      [J, K] = l.useState(!1),
      [$e, Ae] = l.useState(""),
      [oe, M] = l.useState(""),
      [te, He] = l.useState(null),
      [ze, Ie] = l.useState(""),
      [Ge, Re] = l.useState(null),
      [Ue, ce] = l.useState(""),
      [h, w] = l.useState(!1),
      [H, Y] = l.useState(!1),
      [Se, de] = l.useState(!1),
      [Je, es] = l.useState(!1),
      [_, D] = l.useState(""),
      ee = u.reduce((p, q) => p + q.product.sale_price * q.quantity, 0),
      ve = u.reduce((p, q) => p + q.quantity, 0),
      _e = U.find((p) => p.id === Z),
      Le = Q === "delivery" && _e ? _e.basePrice : 0,
      ge = z
        ? z.discountType === "percentage"
          ? (ee * z.discountValue) / 100
          : z.discountType === "fixed"
          ? Math.min(z.discountValue, ee)
          : z.discountType === "freeShipping"
          ? Le
          : 0
        : 0,
      ke = z?.discountType === "freeShipping",
      Pe = ee + (ke ? 0 : Le) - (ke ? 0 : ge);
    l.useEffect(() => {
      if (!g || !n) return;
      (async () => {
        try {
          const { data: q, error: me } = await ne
            .from("user_settings")
            .select("pix_key, receiver_name, company_name")
            .eq("user_id", g)
            .maybeSingle();
          if (me) return;
          if (q) {
            const fe = (q.pix_key || "").trim();
            He(fe || null),
              Ie(
                (q.receiver_name || q.company_name || "Loja")
                  .trim()
                  .slice(0, 25)
              );
          }
        } catch {}
      })();
    }, [g, n]),
      l.useEffect(() => {
        if ((S !== "pix" && S !== "mbway") || !te) {
          Re(null), ce("");
          return;
        }
        (async () => {
          try {
            const q = Pe > 0 ? Math.round(Pe * 100) / 100 : void 0,
              me = ha({
                pixKey: te.trim(),
                merchantName: ze || "Loja",
                merchantCity: "BRASIL",
                amount: q,
                txid: `CAT${Date.now().toString(36).toUpperCase().slice(-8)}`,
              });
            ce(me);
            const fe = await ta.toDataURL(me, {
              width: 280,
              margin: 2,
              color: { dark: "#000000", light: "#ffffff" },
              errorCorrectionLevel: "M",
            });
            Re(fe);
          } catch {
            Re(null),
              ce(""),
              se.error(
                "Erro ao gerar QR Code PIX. Verifique a chave PIX configurada."
              );
          }
        })();
      }, [S, te, ze, Pe]),
      l.useEffect(() => {
        if (X === "confirm" && (S === "pix" || S === "mbway") && te) {
          Y(!1);
          const p = setTimeout(() => Y(!0), 5e3);
          return () => clearTimeout(p);
        } else Y(!1);
      }, [X, S, te]),
      l.useEffect(() => {
        n || (G("cart"), es(!1), D(""), Y(!1), w(!1));
      }, [n]),
      l.useEffect(() => {
        if (!V || !a.name) return;
        const p = setTimeout(async () => {
          try {
            await ne
              .from("abandoned_carts")
              .update({
                customer_name: a.name || null,
                customer_phone: a.phone || null,
              })
              .eq("id", V);
          } catch {}
        }, 1500);
        return () => clearTimeout(p);
      }, [a.name, a.phone, V]);
    const v = {
        bg: A ? "bg-zinc-950" : "bg-white",
        bgCard: A ? "bg-zinc-900" : "bg-gray-50",
        border: A ? "border-zinc-800" : "border-gray-200",
        text: A ? "text-white" : "text-gray-900",
        textSecondary: A ? "text-zinc-400" : "text-gray-600",
        textMuted: A ? "text-zinc-500" : "text-gray-500",
        input: A ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-300",
      },
      zs = ((p) =>
        [
          "#eab308",
          "#22c55e",
          "#fbbf24",
          "#a3e635",
          "#facc15",
          "#ffffff",
        ].includes(p.toLowerCase())
          ? "#000000"
          : "#ffffff")(E),
      he = () => {
        K(!0), Ae("");
        const p = j.trim().toUpperCase();
        if (!p) {
          Ae(c.enterCouponCode), K(!1);
          return;
        }
        const q = y.find((me) => me.code.toUpperCase() === p && me.isActive);
        if (!q) {
          Ae(c.invalidCoupon), K(!1);
          return;
        }
        if (q.maxUses > 0 && q.usedCount >= q.maxUses) {
          Ae(c.couponLimitReached), K(!1);
          return;
        }
        if (q.minValue > 0 && ee < q.minValue) {
          Ae(`${c.couponMinValue} ${m(q.minValue)}`), K(!1);
          return;
        }
        N(q), K(!1), se.success(c.couponApplied);
      },
      Ms = () => {
        N(null), re(""), Ae("");
      },
      as = () => {
        if (X === "cart") G("info");
        else if (X === "info") {
          if (!a.name || !a.phone) {
            se.error(c.fillNamePhone);
            return;
          }
          if (Q === "delivery") {
            if (!a.address) {
              se.error(c.fillAddress);
              return;
            }
            if ($ && U.length > 0 && !Z) {
              se.error(c.selectDelivery);
              return;
            }
          }
          G("payment");
        } else X === "payment" && G("confirm");
      },
      Ns = () => {
        X === "info"
          ? G("cart")
          : X === "payment"
          ? G("info")
          : X === "confirm" && G("payment");
      },
      us = async () => {
        if (g)
          try {
            const p = le.find((P) => P.id === S)?.label || S,
              q = `TC${Date.now().toString(36).toUpperCase()}${Math.random()
                .toString(36)
                .slice(2, 5)
                .toUpperCase()}`,
              me = crypto.randomUUID(),
              fe = {
                id: me,
                user_id: g,
                customer_name: a.name,
                customer_phone: a.phone,
                customer_address:
                  Q === "delivery"
                    ? `${a.address}${a.complement ? ` - ${a.complement}` : ""}`
                    : null,
                items: u.map((P) => ({
                  id: P.product.id,
                  name: P.product.name,
                  price: P.product.sale_price,
                  quantity: P.quantity,
                  image_url: P.product.image_url,
                })),
                subtotal: ee,
                delivery_fee: ke ? 0 : Le,
                coupon_code: z?.code || null,
                coupon_discount: ge,
                total: Pe,
                delivery_method: Q,
                delivery_person: _e?.name || null,
                status: "pending",
                tracking_code: q,
                notes: `Pagamento: ${p}${
                  (S === "dinheiro" || S === "cash") && oe
                    ? ` | Troco para: ${m(Number(oe))}`
                    : ""
                }`,
              };
            await ne.from("catalog_orders").insert(fe),
              await ne
                .from("catalog_order_tracking")
                .insert({
                  order_id: me,
                  user_id: g,
                  status: "Pedido Recebido",
                  description:
                    "Seu pedido foi recebido e está aguardando confirmação de pagamento.",
                }),
              D(q),
              V && (await ne.from("abandoned_carts").delete().eq("id", V)),
              L?.();
          } catch {}
      },
      Ts = async () => {
        de(!0);
        try {
          await us(),
            es(!0),
            se.success(
              "Pedido enviado com sucesso! O vendedor irá confirmar seu pagamento."
            );
        } catch {
          se.error("Erro ao enviar pedido. Tente novamente.");
        } finally {
          de(!1);
        }
      },
      Es = async () => {
        const p = (o?.catalog_whatsapp || o?.company_phone || "").replace(
          /\D/g,
          ""
        );
        if (!p) {
          se.error("Telefone da empresa não configurado");
          return;
        }
        const q = p.length <= 11 ? (p.startsWith("55") ? p : `55${p}`) : p;
        await us();
        const me = le.find((we) => we.id === S)?.label || S,
          fe = Q === "pickup" ? c.storePickup : c.delivery,
          P = u.map(
            (we) =>
              `• ${we.quantity}x ${we.product.name} - ${m(
                we.product.sale_price * we.quantity
              )}`
          ).join(`
`);
        let f = `🛒 *NOVO PEDIDO*

`;
        if (
          ((f += `*Loja:* ${o?.company_name || "Loja"}

`),
          (f += `📦 *ITENS DO PEDIDO:*
${P}

`),
          (f += `💵 *SUBTOTAL:* ${m(ee)}
`),
          z &&
            (z.discountType === "freeShipping"
              ? (f += `🎟️ *CUPOM:* ${z.code} (${c.freeShipping})
`)
              : (f += `🎟️ *CUPOM:* ${z.code} (-${m(ge)})
`)),
          Q === "delivery" && _e)
        ) {
          const we = ke ? 0 : Le;
          f += `🚚 *${c.shipping.toUpperCase()}:* ${
            we === 0 ? c.free : m(we)
          } (${_e.name})
`;
        }
        (f += `
💰 *TOTAL:* ${m(Pe)}

`),
          (f += `👤 *CLIENTE:*
`),
          (f += `Nome: ${a.name}
`),
          (f += `Telefone: ${a.phone}

`),
          (f += `🚚 *ENTREGA:* ${fe}
`),
          Q === "delivery" &&
            a.address &&
            ((f += `Endereço: ${a.address}${
              a.complement ? ` - ${a.complement}` : ""
            }
`),
            _e &&
              (f += `Entregador: ${_e.name}
`)),
          (f += `
💳 *PAGAMENTO:* ${me}
`),
          (S === "dinheiro" || S === "cash") &&
            oe &&
            Number(oe) > 0 &&
            ((f += `💵 *TROCO PARA:* ${m(Number(oe))}
`),
            (f += `🔄 *TROCO:* ${m(Number(oe) - Pe)}
`)),
          (f += `
Aguardo confirmação! 🙏`),
          window.open(
            `https://wa.me/${q}?text=${encodeURIComponent(f)}`,
            "_blank"
          ),
          r(!1),
          G("cart"),
          N(null),
          re(""),
          se.success(c.orderSent);
      },
      vs = () => {
        Ue &&
          (navigator.clipboard.writeText(Ue),
          w(!0),
          se.success("Código PIX copiado!"),
          setTimeout(() => w(!1), 3e3));
      },
      ls = S === "pix" || S === "mbway",
      rs = !!te,
      ns = [
        { id: "cart", label: c.yourCart.split(" ")[0] || "Cart", icon: ts },
        { id: "info", label: d === "en-US" ? "Info" : "Dados", icon: fs },
        {
          id: "payment",
          label: d === "en-US" ? "Payment" : "Pagamento",
          icon: je,
        },
        {
          id: "confirm",
          label: d === "en-US" ? "Confirm" : "Confirmar",
          icon: We,
        },
      ],
      Qs = ns.findIndex((p) => p.id === X);
    return e.jsx(Ke, {
      open: n,
      onOpenChange: r,
      children: e.jsxs(Ye, {
        className: `max-w-lg p-0 overflow-hidden ${v.bg} ${v.border} ${v.text} max-h-[95vh] sm:max-h-[90vh]`,
        children: [
          e.jsxs("div", {
            className: "p-3 sm:p-6 pb-3 sm:pb-4",
            style: { background: `linear-gradient(135deg, ${b}, ${b}dd)` },
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4",
                children: [
                  o?.company_logo
                    ? e.jsx("img", {
                        src: o.company_logo,
                        alt: o.company_name || "Logo",
                        className:
                          "h-8 w-8 sm:h-10 sm:w-10 object-contain rounded-lg bg-white p-0.5 sm:p-1",
                      })
                    : e.jsx("div", {
                        className:
                          "h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-white/20 flex items-center justify-center",
                        children: e.jsx(Ws, {
                          className: "w-4 h-4 sm:w-5 sm:h-5 text-white",
                        }),
                      }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h2", {
                        className: "font-bold text-white text-sm sm:text-lg",
                        children: o?.company_name || "Checkout",
                      }),
                      e.jsx("p", {
                        className: "text-white/80 text-[10px] sm:text-sm",
                        children: c.finishOrder,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "flex items-center justify-between",
                children: ns.map((p, q) => {
                  const me = p.icon,
                    fe = p.id === X,
                    P = q < Qs;
                  return e.jsxs(
                    "div",
                    {
                      className: "flex items-center",
                      children: [
                        e.jsxs("div", {
                          className: "flex flex-col items-center",
                          children: [
                            e.jsx("div", {
                              className: `w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all ${
                                fe
                                  ? "bg-white text-gray-900 shadow-lg scale-110"
                                  : P
                                  ? "bg-white/40 text-white"
                                  : "bg-white/20 text-white/60"
                              }`,
                              children: P
                                ? e.jsx(We, {
                                    className: "w-3 h-3 sm:w-4 sm:h-4",
                                  })
                                : e.jsx(me, {
                                    className: "w-3 h-3 sm:w-4 sm:h-4",
                                  }),
                            }),
                            e.jsx("span", {
                              className: `text-[8px] sm:text-[10px] mt-1 ${
                                fe ? "text-white font-medium" : "text-white/60"
                              }`,
                              children: p.label,
                            }),
                          ],
                        }),
                        q < ns.length - 1 &&
                          e.jsx("div", {
                            className: `w-8 h-0.5 mx-1 ${
                              P ? "bg-white/40" : "bg-white/20"
                            }`,
                          }),
                      ],
                    },
                    p.id
                  );
                }),
              }),
            ],
          }),
          e.jsx(Xs, {
            className: "max-h-[50vh] sm:max-h-[60vh]",
            children: e.jsxs("div", {
              className: "p-3 sm:p-6 pt-3 sm:pt-4",
              children: [
                X === "cart" &&
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                          e.jsx(ts, {
                            className: "w-5 h-5",
                            style: { color: b },
                          }),
                          e.jsxs("h3", {
                            className: "font-semibold",
                            children: [c.yourCart, " (", ve, " ", c.items, ")"],
                          }),
                        ],
                      }),
                      u.map((p) =>
                        e.jsxs(
                          "div",
                          {
                            className: `flex gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg ${v.bgCard}`,
                            children: [
                              e.jsx("div", {
                                className: `w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 ${
                                  A ? "bg-zinc-800" : "bg-gray-200"
                                }`,
                                children: p.product.image_url
                                  ? e.jsx("img", {
                                      src: p.product.image_url,
                                      alt: p.product.name,
                                      className:
                                        "w-full h-full object-contain p-1",
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "w-full h-full flex items-center justify-center",
                                      children: e.jsx(Fe, {
                                        className: "w-5 h-5 sm:w-6 sm:h-6",
                                        style: { color: v.textMuted },
                                      }),
                                    }),
                              }),
                              e.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                  e.jsx("h4", {
                                    className:
                                      "font-medium text-xs sm:text-sm truncate",
                                    children: p.product.name,
                                  }),
                                  e.jsxs("p", {
                                    className: `text-[10px] sm:text-xs ${v.textMuted}`,
                                    children: ["Qtd: ", p.quantity],
                                  }),
                                  e.jsx("p", {
                                    className: "font-bold text-xs sm:text-sm",
                                    style: { color: b },
                                    children: m(
                                      p.product.sale_price * p.quantity
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          },
                          p.product.id
                        )
                      ),
                      y.length > 0 &&
                        e.jsxs("div", {
                          className: `p-4 rounded-lg border ${v.border} ${v.bgCard}`,
                          children: [
                            e.jsxs(Ne, {
                              className: `flex items-center gap-2 mb-3 text-sm font-medium ${v.textSecondary}`,
                              children: [
                                e.jsx(Qe, { className: "w-4 h-4" }),
                                c.couponLabel,
                              ],
                            }),
                            z
                              ? e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/30",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        e.jsx(xs, {
                                          className: "w-5 h-5 text-green-500",
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "font-mono font-bold text-green-600",
                                              children: z.code,
                                            }),
                                            e.jsxs("p", {
                                              className:
                                                "text-xs text-green-600",
                                              children: [
                                                z.discountType ===
                                                  "percentage" &&
                                                  `${z.discountValue}% ${c.percentOff}`,
                                                z.discountType === "fixed" &&
                                                  `${m(z.discountValue)} ${
                                                    c.fixedOff
                                                  }`,
                                                z.discountType ===
                                                  "freeShipping" &&
                                                  c.freeShipping,
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx(B, {
                                      variant: "ghost",
                                      size: "icon",
                                      onClick: Ms,
                                      children: e.jsx(Te, {
                                        className: "w-4 h-4",
                                      }),
                                    }),
                                  ],
                                })
                              : e.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "flex flex-col sm:flex-row gap-2 w-full",
                                      children: [
                                        e.jsx(ue, {
                                          value: j,
                                          onChange: (p) =>
                                            re(p.target.value.toUpperCase()),
                                          placeholder: c.couponPlaceholder,
                                          className: `font-mono uppercase ${v.input} w-full`,
                                        }),
                                        e.jsx(B, {
                                          onClick: he,
                                          disabled: J,
                                          style: {
                                            backgroundColor: b,
                                            color: "#fff",
                                          },
                                          className: "w-full sm:w-auto",
                                          children: J
                                            ? e.jsx(Js, {
                                                className:
                                                  "w-4 h-4 animate-spin",
                                              })
                                            : c.apply,
                                        }),
                                      ],
                                    }),
                                    $e &&
                                      e.jsx("p", {
                                        className: "text-xs text-red-500",
                                        children: $e,
                                      }),
                                  ],
                                }),
                          ],
                        }),
                      e.jsx(ws, { className: v.border }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex justify-between items-center text-sm",
                            children: [
                              e.jsxs("span", {
                                className: v.textSecondary,
                                children: [c.subtotal, ":"],
                              }),
                              e.jsx("span", { children: m(ee) }),
                            ],
                          }),
                          z &&
                            ge > 0 &&
                            e.jsxs("div", {
                              className:
                                "flex justify-between items-center text-sm text-green-500",
                              children: [
                                e.jsxs("span", {
                                  children: [c.discount, " (", z.code, "):"],
                                }),
                                e.jsxs("span", { children: ["-", m(ge)] }),
                              ],
                            }),
                          e.jsxs("div", {
                            className:
                              "flex justify-between items-center pt-2 border-t",
                            children: [
                              e.jsxs("span", {
                                className: "font-semibold",
                                children: [c.total, ":"],
                              }),
                              e.jsx("span", {
                                className: "text-2xl font-bold",
                                style: { color: b },
                                children: m(ee - ge),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                X === "info" &&
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                          e.jsx(fs, {
                            className: "w-5 h-5",
                            style: { color: b },
                          }),
                          e.jsx("h3", {
                            className: "font-semibold",
                            children: c.yourData,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsxs(Ne, {
                                htmlFor: "name",
                                className: `flex items-center gap-2 mb-1.5 ${v.textSecondary}`,
                                children: [
                                  e.jsx(fs, { className: "w-4 h-4" }),
                                  c.fullName,
                                  " *",
                                ],
                              }),
                              e.jsx(ue, {
                                id: "name",
                                value: a.name,
                                onChange: (p) =>
                                  W((q) => ({ ...q, name: p.target.value })),
                                placeholder: c.fullName,
                                className: v.input,
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs(Ne, {
                                htmlFor: "phone",
                                className: `flex items-center gap-2 mb-1.5 ${v.textSecondary}`,
                                children: [
                                  e.jsx(jt, { className: "w-4 h-4" }),
                                  c.phoneWhatsApp,
                                  " *",
                                ],
                              }),
                              e.jsx(ue, {
                                id: "phone",
                                value: a.phone,
                                onChange: (p) =>
                                  W((q) => ({ ...q, phone: p.target.value })),
                                placeholder: c.phonePlaceholder,
                                className: v.input,
                              }),
                            ],
                          }),
                          e.jsx(ws, { className: v.border }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs(Ne, {
                                className: `flex items-center gap-2 mb-3 ${v.textSecondary}`,
                                children: [
                                  e.jsx(Ce, { className: "w-4 h-4" }),
                                  c.deliveryMethod,
                                ],
                              }),
                              e.jsxs(Os, {
                                value: Q,
                                onValueChange: (p) => T(p),
                                children: [
                                  e.jsxs("div", {
                                    className: `flex items-center space-x-3 p-3 rounded-lg border cursor-pointer ${
                                      Q === "pickup" ? "border-2" : v.border
                                    } ${v.bgCard}`,
                                    style:
                                      Q === "pickup" ? { borderColor: b } : {},
                                    onClick: () => T("pickup"),
                                    children: [
                                      e.jsx($s, {
                                        value: "pickup",
                                        id: "pickup",
                                      }),
                                      e.jsxs(Ne, {
                                        htmlFor: "pickup",
                                        className: "flex-1 cursor-pointer",
                                        children: [
                                          e.jsx("span", {
                                            className: "font-medium",
                                            children: c.storePickup,
                                          }),
                                          e.jsx("p", {
                                            className: `text-xs ${v.textMuted}`,
                                            children: c.storePickupDesc,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: `flex items-center space-x-3 p-3 rounded-lg border cursor-pointer ${
                                      Q === "delivery" ? "border-2" : v.border
                                    } ${v.bgCard} mt-2`,
                                    style:
                                      Q === "delivery"
                                        ? { borderColor: b }
                                        : {},
                                    onClick: () => T("delivery"),
                                    children: [
                                      e.jsx($s, {
                                        value: "delivery",
                                        id: "delivery",
                                      }),
                                      e.jsxs(Ne, {
                                        htmlFor: "delivery",
                                        className: "flex-1 cursor-pointer",
                                        children: [
                                          e.jsx("span", {
                                            className: "font-medium",
                                            children: c.delivery,
                                          }),
                                          e.jsx("p", {
                                            className: `text-xs ${v.textMuted}`,
                                            children: c.deliveryDesc,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Q === "delivery" &&
                            e.jsxs("div", {
                              className: "space-y-3 animate-fade-in",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsxs(Ne, {
                                      htmlFor: "address",
                                      className: `flex items-center gap-2 mb-1.5 ${v.textSecondary}`,
                                      children: [
                                        e.jsx(Hs, { className: "w-4 h-4" }),
                                        c.fullAddress,
                                        " *",
                                      ],
                                    }),
                                    e.jsx(ue, {
                                      id: "address",
                                      value: a.address,
                                      onChange: (p) =>
                                        W((q) => ({
                                          ...q,
                                          address: p.target.value,
                                        })),
                                      placeholder: c.addressPlaceholder,
                                      className: v.input,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx(Ne, {
                                      htmlFor: "complement",
                                      className: `mb-1.5 ${v.textSecondary}`,
                                      children: c.complement,
                                    }),
                                    e.jsx(ue, {
                                      id: "complement",
                                      value: a.complement,
                                      onChange: (p) =>
                                        W((q) => ({
                                          ...q,
                                          complement: p.target.value,
                                        })),
                                      placeholder: c.complementPlaceholder,
                                      className: v.input,
                                    }),
                                  ],
                                }),
                                $ &&
                                  U.length > 0 &&
                                  e.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      e.jsxs(Ne, {
                                        className: `flex items-center gap-2 ${v.textSecondary}`,
                                        children: [
                                          e.jsx(Ce, { className: "w-4 h-4" }),
                                          c.selectDeliveryPerson,
                                          " *",
                                        ],
                                      }),
                                      e.jsx("div", {
                                        className: `p-3 rounded-lg border ${v.border} bg-amber-500/10 mb-2`,
                                        children: e.jsxs("p", {
                                          className:
                                            "text-xs text-amber-600 flex items-center gap-2",
                                          children: [
                                            e.jsx(Hs, {
                                              className:
                                                "w-4 h-4 flex-shrink-0",
                                            }),
                                            c.deliveryNote,
                                          ],
                                        }),
                                      }),
                                      e.jsx(Os, {
                                        value: Z,
                                        onValueChange: x,
                                        children: U.map((p) =>
                                          e.jsxs(
                                            "div",
                                            {
                                              className: `flex items-center justify-between p-3 rounded-lg border cursor-pointer ${
                                                Z === p.id
                                                  ? "border-2"
                                                  : v.border
                                              } ${v.bgCard}`,
                                              style:
                                                Z === p.id
                                                  ? { borderColor: b }
                                                  : {},
                                              onClick: () => x(p.id),
                                              children: [
                                                e.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-3",
                                                  children: [
                                                    e.jsx($s, {
                                                      value: p.id,
                                                      id: p.id,
                                                    }),
                                                    e.jsxs(Ne, {
                                                      htmlFor: p.id,
                                                      className:
                                                        "cursor-pointer",
                                                      children: [
                                                        e.jsx("span", {
                                                          className:
                                                            "font-medium",
                                                          children: p.name,
                                                        }),
                                                        e.jsxs("p", {
                                                          className: `text-xs ${v.textMuted}`,
                                                          children: [
                                                            "Até ",
                                                            p.baseRadiusKm,
                                                            "km",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                e.jsxs("div", {
                                                  className: "text-right",
                                                  children: [
                                                    e.jsx("span", {
                                                      className: "font-bold",
                                                      style: {
                                                        color: ke
                                                          ? "#22c55e"
                                                          : b,
                                                      },
                                                      children: ke
                                                        ? "GRÁTIS"
                                                        : m(p.basePrice),
                                                    }),
                                                    ke &&
                                                      e.jsx("p", {
                                                        className:
                                                          "text-xs line-through text-muted-foreground",
                                                        children: m(
                                                          p.basePrice
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            },
                                            p.id
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                X === "payment" &&
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 mb-2",
                        children: [
                          e.jsx(je, {
                            className: "w-5 h-5",
                            style: { color: b },
                          }),
                          e.jsx("h3", {
                            className: "font-semibold",
                            children: c.paymentMethod,
                          }),
                        ],
                      }),
                      e.jsx(Os, {
                        value: S,
                        onValueChange: xe,
                        children: le.map((p) => {
                          const q = p.icon;
                          return e.jsxs(
                            "div",
                            {
                              className: `flex items-center space-x-3 p-4 rounded-lg border cursor-pointer transition-all ${
                                S === p.id ? "border-2" : v.border
                              } ${v.bgCard}`,
                              style: S === p.id ? { borderColor: b } : {},
                              onClick: () => xe(p.id),
                              children: [
                                e.jsx($s, { value: p.id, id: p.id }),
                                e.jsx("div", {
                                  className:
                                    "w-10 h-10 rounded-lg flex items-center justify-center",
                                  style: { backgroundColor: `${b}20` },
                                  children: e.jsx(q, {
                                    className: "w-5 h-5",
                                    style: { color: b },
                                  }),
                                }),
                                e.jsxs(Ne, {
                                  htmlFor: p.id,
                                  className: "flex-1 cursor-pointer",
                                  children: [
                                    e.jsx("span", {
                                      className: "font-medium",
                                      children: p.label,
                                    }),
                                    e.jsx("p", {
                                      className: `text-xs ${v.textMuted}`,
                                      children: p.description,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            p.id
                          );
                        }),
                      }),
                      (S === "dinheiro" || S === "cash") &&
                        e.jsxs("div", {
                          className: `p-4 rounded-lg border ${v.border} ${v.bgCard} space-y-2`,
                          children: [
                            e.jsxs(Ne, {
                              className: `flex items-center gap-2 text-sm font-medium ${v.textSecondary}`,
                              children: [
                                e.jsx(Oe, { className: "w-4 h-4" }),
                                d === "en-US"
                                  ? "Change for how much?"
                                  : "Troco para quanto?",
                              ],
                            }),
                            e.jsx(ue, {
                              type: "number",
                              value: oe,
                              onChange: (p) => M(p.target.value),
                              placeholder:
                                d === "en-US" ? "E.g.: 100" : "Ex: 100",
                              className: v.input,
                              min: 0,
                            }),
                            oe &&
                              Number(oe) > 0 &&
                              Number(oe) >= Pe &&
                              e.jsxs("p", {
                                className:
                                  "text-xs text-green-500 flex items-center gap-1",
                                children: [
                                  e.jsx(xs, { className: "w-3 h-3" }),
                                  d === "en-US" ? "Change" : "Troco",
                                  ": ",
                                  m(Number(oe) - Pe),
                                ],
                              }),
                            oe &&
                              Number(oe) > 0 &&
                              Number(oe) < Pe &&
                              e.jsx("p", {
                                className: "text-xs text-red-500",
                                children:
                                  d === "en-US"
                                    ? "Amount must be greater than or equal to the total"
                                    : "O valor deve ser maior ou igual ao total",
                              }),
                          ],
                        }),
                      e.jsxs("div", {
                        className: `p-3 rounded-lg flex items-center gap-2 ${v.bgCard}`,
                        children: [
                          e.jsx(qe, { className: "w-5 h-5 text-green-500" }),
                          e.jsx("span", {
                            className: `text-sm ${v.textSecondary}`,
                            children: c.securePayment,
                          }),
                        ],
                      }),
                    ],
                  }),
                X === "confirm" &&
                  e.jsx("div", {
                    className: "space-y-4",
                    children: Je
                      ? e.jsxs("div", {
                          className: "text-center py-6 space-y-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto animate-bounce",
                              children: e.jsx(xs, {
                                className: "w-8 h-8 text-green-500",
                              }),
                            }),
                            e.jsxs("div", {
                              children: [
                                e.jsx("h3", {
                                  className: "text-lg font-bold",
                                  children: "🎉 Pedido Enviado!",
                                }),
                                e.jsx("p", {
                                  className: `text-sm ${v.textSecondary} mt-1`,
                                  children:
                                    "Seu pedido foi registrado com sucesso. O vendedor irá confirmar o pagamento e preparar seu pedido.",
                                }),
                              ],
                            }),
                            _ &&
                              e.jsxs("div", {
                                className:
                                  "p-4 rounded-xl border-2 border-dashed text-center space-y-2",
                                style: {
                                  borderColor: b,
                                  backgroundColor: `${b}10`,
                                },
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-xs font-semibold flex items-center justify-center gap-1.5",
                                    children: "📦 Seu código de rastreio:",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xl font-black tracking-wider",
                                    style: { color: b },
                                    children: _,
                                  }),
                                  e.jsx(B, {
                                    size: "sm",
                                    variant: "outline",
                                    className: "text-xs gap-1.5 rounded-full",
                                    onClick: () => {
                                      navigator.clipboard.writeText(_),
                                        se.success("Código copiado!");
                                    },
                                    children: "📋 Copiar Código",
                                  }),
                                  e.jsx("p", {
                                    className: `text-[10px] ${v.textMuted}`,
                                    children:
                                      'Use este código na aba "Acompanhar Pedido" para ver o status da sua entrega em tempo real.',
                                  }),
                                ],
                              }),
                            e.jsxs("div", {
                              className: `p-4 rounded-xl ${v.bgCard} border ${v.border} text-left space-y-2`,
                              children: [
                                e.jsx("p", {
                                  className: "text-xs font-semibold",
                                  children: "Resumo:",
                                }),
                                e.jsxs("p", {
                                  className: `text-xs ${v.textMuted}`,
                                  children: ["👤 ", a.name, " • 📞 ", a.phone],
                                }),
                                e.jsxs("p", {
                                  className: `text-xs ${v.textMuted}`,
                                  children: [
                                    "📦 ",
                                    ve,
                                    " ",
                                    ve > 1 ? "itens" : "item",
                                    " • 💰 ",
                                    m(Pe),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(B, {
                              onClick: () => {
                                r(!1), G("cart"), es(!1);
                              },
                              className: "w-full h-11",
                              style: { backgroundColor: b, color: "#fff" },
                              children: "Fechar",
                            }),
                          ],
                        })
                      : e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2 mb-2",
                              children: [
                                e.jsx(We, {
                                  className: "w-5 h-5",
                                  style: { color: b },
                                }),
                                e.jsx("h3", {
                                  className: "font-semibold",
                                  children: "Confirme seu Pedido",
                                }),
                              ],
                            }),
                            ls &&
                              rs &&
                              Ge &&
                              e.jsxs("div", {
                                className: `p-4 rounded-xl border-2 ${v.bgCard} space-y-3`,
                                style: { borderColor: b },
                                children: [
                                  e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center justify-center gap-2 mb-2",
                                        children: [
                                          e.jsx(ss, {
                                            className: "w-5 h-5",
                                            style: { color: b },
                                          }),
                                          e.jsx("h4", {
                                            className: "font-bold text-sm",
                                            children:
                                              S === "mbway"
                                                ? "Pague via MB Way"
                                                : "Pague via PIX",
                                          }),
                                        ],
                                      }),
                                      e.jsx("p", {
                                        className: `text-xs ${v.textMuted} mb-3`,
                                        children:
                                          "Escaneie o QR Code ou copie o código para realizar o pagamento",
                                      }),
                                      e.jsx("div", {
                                        className: "flex justify-center mb-3",
                                        children: e.jsx("div", {
                                          className:
                                            "bg-white p-3 rounded-xl shadow-lg",
                                          children: e.jsx("img", {
                                            src: Ge,
                                            alt: "PIX QR Code",
                                            className:
                                              "w-48 h-48 sm:w-56 sm:h-56",
                                          }),
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        className: "mb-3",
                                        children: [
                                          e.jsx("p", {
                                            className: `text-xs ${v.textMuted}`,
                                            children: "Valor a pagar:",
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-2xl font-extrabold",
                                            style: { color: b },
                                            children: m(Pe),
                                          }),
                                        ],
                                      }),
                                      e.jsx(B, {
                                        variant: "outline",
                                        onClick: vs,
                                        className: `w-full gap-2 ${v.border}`,
                                        children: h
                                          ? e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx(We, {
                                                  className:
                                                    "w-4 h-4 text-green-500",
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "text-green-500 font-semibold",
                                                  children: "Código copiado!",
                                                }),
                                              ],
                                            })
                                          : e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx(_s, {
                                                  className: "w-4 h-4",
                                                }),
                                                "Copiar código PIX",
                                              ],
                                            }),
                                      }),
                                      e.jsxs("p", {
                                        className: `text-[10px] ${v.textMuted} mt-2`,
                                        children: ["Recebedor: ", ze],
                                      }),
                                    ],
                                  }),
                                  H &&
                                    e.jsxs("div", {
                                      className:
                                        "animate-fade-in space-y-2 pt-2 border-t",
                                      style: { borderColor: `${b}30` },
                                      children: [
                                        e.jsxs(B, {
                                          onClick: Ts,
                                          disabled: Se,
                                          className:
                                            "w-full h-12 gap-2 font-bold text-sm shadow-lg",
                                          style: {
                                            backgroundColor: "#22c55e",
                                            color: "#fff",
                                          },
                                          children: [
                                            Se
                                              ? e.jsx(Js, {
                                                  className:
                                                    "w-5 h-5 animate-spin",
                                                })
                                              : e.jsx(xs, {
                                                  className: "w-5 h-5",
                                                }),
                                            "Já fiz o pagamento",
                                          ],
                                        }),
                                        e.jsx("p", {
                                          className: `text-[10px] text-center ${v.textMuted}`,
                                          children:
                                            "Ao clicar, seu pedido será enviado para aprovação do vendedor",
                                        }),
                                      ],
                                    }),
                                  !H &&
                                    e.jsxs("div", {
                                      className:
                                        "flex items-center justify-center gap-2 py-2",
                                      children: [
                                        e.jsx(Nt, {
                                          className: "w-3.5 h-3.5 animate-spin",
                                          style: { color: b },
                                        }),
                                        e.jsx("span", {
                                          className: `text-xs ${v.textMuted}`,
                                          children: "Aguardando pagamento...",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            e.jsxs("div", {
                              className: `p-4 rounded-lg space-y-3 ${v.bgCard}`,
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(ts, {
                                      className: "w-4 h-4",
                                      style: { color: b },
                                    }),
                                    e.jsxs("span", {
                                      className: "font-medium",
                                      children: [ve, " itens"],
                                    }),
                                    e.jsx("span", {
                                      className: "ml-auto",
                                      children: m(ee),
                                    }),
                                  ],
                                }),
                                z &&
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 text-green-500",
                                    children: [
                                      e.jsx(Qe, { className: "w-4 h-4" }),
                                      e.jsxs("span", {
                                        className: "font-medium",
                                        children: ["Cupom ", z.code],
                                      }),
                                      e.jsx("span", {
                                        className: "ml-auto",
                                        children:
                                          z.discountType === "freeShipping"
                                            ? "Frete Grátis"
                                            : `-${m(ge)}`,
                                      }),
                                    ],
                                  }),
                                Q === "delivery" &&
                                  _e &&
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(Ce, {
                                        className: "w-4 h-4",
                                        style: { color: b },
                                      }),
                                      e.jsxs("span", {
                                        children: ["Frete (", _e.name, ")"],
                                      }),
                                      e.jsx("span", {
                                        className: "ml-auto",
                                        children: ke ? "GRÁTIS" : m(Le),
                                      }),
                                    ],
                                  }),
                                e.jsx(ws, { className: v.border }),
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className: "font-bold",
                                      children: "Total:",
                                    }),
                                    e.jsx("span", {
                                      className: "ml-auto text-xl font-bold",
                                      style: { color: b },
                                      children: m(Pe),
                                    }),
                                  ],
                                }),
                                e.jsx(ws, { className: v.border }),
                                e.jsxs("div", {
                                  className: "space-y-2 text-sm",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx(fs, {
                                          className: "w-4 h-4 mt-0.5",
                                          style: { color: b },
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className: "font-medium",
                                              children: a.name,
                                            }),
                                            e.jsx("p", {
                                              className: v.textMuted,
                                              children: a.phone,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx(Ce, {
                                          className: "w-4 h-4 mt-0.5",
                                          style: { color: b },
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className: "font-medium",
                                              children:
                                                Q === "pickup"
                                                  ? "Retirada na loja"
                                                  : "Entrega",
                                            }),
                                            Q === "delivery" &&
                                              a.address &&
                                              e.jsxs("p", {
                                                className: v.textMuted,
                                                children: [
                                                  a.address,
                                                  a.complement &&
                                                    ` - ${a.complement}`,
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        e.jsx(je, {
                                          className: "w-4 h-4 mt-0.5",
                                          style: { color: b },
                                        }),
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className: "font-medium",
                                              children: le.find(
                                                (p) => p.id === S
                                              )?.label,
                                            }),
                                            (S === "dinheiro" ||
                                              S === "cash") &&
                                              oe &&
                                              Number(oe) > 0 &&
                                              e.jsxs("p", {
                                                className: v.textMuted,
                                                children: [
                                                  d === "en-US"
                                                    ? "Change for"
                                                    : "Troco para",
                                                  ": ",
                                                  m(Number(oe)),
                                                  " → ",
                                                  d === "en-US"
                                                    ? "Change"
                                                    : "Troco",
                                                  ": ",
                                                  m(Number(oe) - Pe),
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
                            !(ls && rs) &&
                              e.jsxs("div", {
                                className: `p-3 rounded-lg flex items-center gap-2 ${
                                  A ? "bg-green-500/20" : "bg-green-50"
                                }`,
                                children: [
                                  e.jsx(Ze, {
                                    className: "w-5 h-5 text-green-500",
                                  }),
                                  e.jsx("span", {
                                    className: `text-sm ${
                                      A ? "text-green-400" : "text-green-700"
                                    }`,
                                    children: c.orderViaWhatsApp,
                                  }),
                                ],
                              }),
                          ],
                        }),
                  }),
              ],
            }),
          }),
          !Je &&
            e.jsxs("div", {
              className: `p-3 sm:p-4 border-t ${v.border} flex gap-2 sm:gap-3`,
              children: [
                X !== "cart" &&
                  e.jsx(B, {
                    variant: "outline",
                    onClick: Ns,
                    className: `flex-1 h-10 sm:h-11 text-xs sm:text-sm ${v.border}`,
                    children: c.back,
                  }),
                X !== "confirm"
                  ? e.jsxs(B, {
                      onClick: as,
                      className:
                        "flex-1 h-10 sm:h-11 gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold",
                      style: { backgroundColor: E, color: zs },
                      children: [
                        c.continue,
                        e.jsx(ps, { className: "w-4 h-4" }),
                      ],
                    })
                  : !(ls && rs) &&
                    e.jsxs(B, {
                      onClick: Es,
                      className:
                        "flex-1 h-10 sm:h-11 gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold shadow-lg",
                      style: { backgroundColor: "#22c55e", color: "#fff" },
                      children: [
                        e.jsx(Ze, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
                        c.sendOrder,
                      ],
                    }),
              ],
            }),
        ],
      }),
    });
  },
  Ia = (n) => {
    const r = {
      "pt-BR": {
        filters: "Filtros",
        advancedFilters: "Filtros Avançados",
        priceRange: "Faixa de Preço",
        minPrice: "Mín",
        maxPrice: "Máx",
        categories: "Categorias",
        brands: "Marcas",
        sortBy: "Ordenar por",
        popularity: "Popularidade",
        priceLowToHigh: "Menor Preço",
        priceHighToLow: "Maior Preço",
        newest: "Novidades",
        discounts: "Com Desconto",
        newArrivals: "Novidades",
        clearFilters: "Limpar Filtros",
        applyFilters: "Aplicar",
        allCategories: "Todas",
        allBrands: "Todas",
        productsFound: "produtos encontrados",
      },
      "pt-PT": {
        filters: "Filtros",
        advancedFilters: "Filtros Avançados",
        priceRange: "Intervalo de Preço",
        minPrice: "Mín",
        maxPrice: "Máx",
        categories: "Categorias",
        brands: "Marcas",
        sortBy: "Ordenar por",
        popularity: "Popularidade",
        priceLowToHigh: "Menor Preço",
        priceHighToLow: "Maior Preço",
        newest: "Novidades",
        discounts: "Com Desconto",
        newArrivals: "Novidades",
        clearFilters: "Limpar Filtros",
        applyFilters: "Aplicar",
        allCategories: "Todas",
        allBrands: "Todas",
        productsFound: "produtos encontrados",
      },
      "en-US": {
        filters: "Filters",
        advancedFilters: "Advanced Filters",
        priceRange: "Price Range",
        minPrice: "Min",
        maxPrice: "Max",
        categories: "Categories",
        brands: "Brands",
        sortBy: "Sort by",
        popularity: "Popularity",
        priceLowToHigh: "Price: Low to High",
        priceHighToLow: "Price: High to Low",
        newest: "Newest",
        discounts: "On Sale",
        newArrivals: "New Arrivals",
        clearFilters: "Clear Filters",
        applyFilters: "Apply",
        allCategories: "All",
        allBrands: "All",
        productsFound: "products found",
      },
    };
    return r[n] || r["pt-BR"];
  },
  tt = {
    apple: "Apple",
    samsung: "Samsung",
    xiaomi: "Xiaomi",
    realme: "Realme",
    oppo: "OPPO",
    lg: "LG",
    motorola: "Motorola",
    huawei: "Huawei",
    asus: "ASUS",
    nokia: "Nokia",
    oneplus: "OnePlus",
    google: "Google",
    outros: "Outros",
  },
  at = {
    celulares: {
      "pt-BR": "Celulares",
      "pt-PT": "Telemóveis",
      "en-US": "Phones",
    },
    acessorios: {
      "pt-BR": "Acessórios",
      "pt-PT": "Acessórios",
      "en-US": "Accessories",
    },
    pecas: { "pt-BR": "Peças", "pt-PT": "Peças", "en-US": "Parts" },
    servicos: { "pt-BR": "Serviços", "pt-PT": "Serviços", "en-US": "Services" },
    eletronicos: {
      "pt-BR": "Eletrônicos",
      "pt-PT": "Eletrónicos",
      "en-US": "Electronics",
    },
    informatica: {
      "pt-BR": "Informática",
      "pt-PT": "Informática",
      "en-US": "Computers",
    },
    outros: { "pt-BR": "Outros", "pt-PT": "Outros", "en-US": "Others" },
  };
function lt({
  products: n,
  onFilterChange: r,
  primaryColor: u,
  isDarkTheme: o,
  catalogLanguage: m,
  formatPrice: b,
}) {
  const E = Ia(m),
    [A, y] = l.useState(!1),
    [U, $] = l.useState({ price: !0, categories: !0, brands: !0, sort: !0 }),
    g = n.length > 0 ? Math.min(...n.map((x) => x.sale_price)) : 0,
    L = n.length > 0 ? Math.max(...n.map((x) => x.sale_price)) : 1e4,
    [d, V] = l.useState({
      minPrice: g,
      maxPrice: L,
      categories: [],
      brands: [],
      showDiscounts: !1,
      showNew: !1,
      sortBy: null,
    }),
    [c, le] = l.useState(0),
    X = [...new Set(n.map((x) => x.category).filter(Boolean))],
    G = [...new Set(n.map((x) => x.brand).filter(Boolean))],
    a = {
      bg: o ? "bg-zinc-900" : "bg-white",
      bgSecondary: o ? "bg-zinc-800" : "bg-gray-50",
      border: o ? "border-zinc-700" : "border-gray-200",
      text: o ? "text-white" : "text-gray-900",
      textSecondary: o ? "text-zinc-400" : "text-gray-600",
      textMuted: o ? "text-zinc-500" : "text-gray-500",
    };
  l.useEffect(() => {
    let x = [...n];
    if (
      ((x = x.filter(
        (z) => z.sale_price >= d.minPrice && z.sale_price <= d.maxPrice
      )),
      d.categories.length > 0 &&
        (x = x.filter((z) => z.category && d.categories.includes(z.category))),
      d.brands.length > 0 &&
        (x = x.filter((z) => z.brand && d.brands.includes(z.brand))),
      d.showNew)
    ) {
      const z = new Date();
      z.setDate(z.getDate() - 30),
        (x = x.filter((N) =>
          N.created_at ? new Date(N.created_at) >= z : !1
        ));
    }
    if (d.sortBy)
      switch (d.sortBy) {
        case "price-asc":
          x.sort((z, N) => z.sale_price - N.sale_price);
          break;
        case "price-desc":
          x.sort((z, N) => N.sale_price - z.sale_price);
          break;
        case "newest":
          x.sort((z, N) =>
            !z.created_at || !N.created_at
              ? 0
              : new Date(N.created_at).getTime() -
                new Date(z.created_at).getTime()
          );
          break;
        case "popularity":
          x.sort((z, N) => N.quantity - z.quantity);
          break;
      }
    let j = 0;
    (d.minPrice > g || d.maxPrice < L) && j++,
      d.categories.length > 0 && j++,
      d.brands.length > 0 && j++,
      d.showNew && j++,
      d.sortBy && j++,
      le(j);
    const re = j > 0;
    r(x, re);
  }, [d, n, g, L, r]);
  const W = () => {
      V({
        minPrice: g,
        maxPrice: L,
        categories: [],
        brands: [],
        showDiscounts: !1,
        showNew: !1,
        sortBy: null,
      });
    },
    S = (x) => {
      $((j) => ({ ...j, [x]: !j[x] }));
    },
    xe = (x) => {
      V((j) => ({
        ...j,
        categories: j.categories.includes(x)
          ? j.categories.filter((re) => re !== x)
          : [...j.categories, x],
      }));
    },
    Q = (x) => {
      V((j) => ({
        ...j,
        brands: j.brands.includes(x)
          ? j.brands.filter((re) => re !== x)
          : [...j.brands, x],
      }));
    },
    T = ({ value: x, label: j, icon: re }) =>
      e.jsxs(B, {
        variant: d.sortBy === x ? "default" : "outline",
        size: "sm",
        onClick: () => V((z) => ({ ...z, sortBy: z.sortBy === x ? null : x })),
        className: `justify-start gap-2 ${d.sortBy !== x ? a.border : ""}`,
        style: d.sortBy === x ? { backgroundColor: u } : {},
        children: [re && e.jsx(re, { className: "w-4 h-4" }), j],
      }),
    Z = ({ title: x, section: j, children: re }) =>
      e.jsxs("div", {
        className: `border-b ${a.border} pb-4`,
        children: [
          e.jsxs("button", {
            onClick: () => S(j),
            className: `w-full flex items-center justify-between py-2 ${a.text} font-medium`,
            children: [
              x,
              U[j]
                ? e.jsx(ht, { className: "w-4 h-4" })
                : e.jsx(pt, { className: "w-4 h-4" }),
            ],
          }),
          U[j] &&
            e.jsx("div", {
              className: "mt-2 space-y-2 animate-fade-in",
              children: re,
            }),
        ],
      });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs(vt, {
        open: A,
        onOpenChange: y,
        children: [
          e.jsx(yt, {
            asChild: !0,
            children: e.jsxs(B, {
              variant: "outline",
              size: "sm",
              className: `gap-2 ${a.border} relative`,
              children: [
                e.jsx(Na, { className: "w-4 h-4" }),
                e.jsx("span", { children: E.filters }),
                c > 0 &&
                  e.jsx(pe, {
                    className:
                      "absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs",
                    style: { backgroundColor: u },
                    children: c,
                  }),
              ],
            }),
          }),
          e.jsxs(wt, {
            side: "left",
            className: `${a.bg} ${a.border} ${a.text} w-full sm:max-w-md p-0`,
            children: [
              e.jsx($t, {
                className: `p-4 border-b ${a.border}`,
                children: e.jsxs(Ct, {
                  className: `${a.text} flex items-center justify-between`,
                  children: [
                    e.jsxs("span", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(pa, {
                          className: "w-5 h-5",
                          style: { color: u },
                        }),
                        E.advancedFilters,
                      ],
                    }),
                    c > 0 &&
                      e.jsxs(B, {
                        variant: "ghost",
                        size: "sm",
                        onClick: W,
                        className: "gap-1 text-sm",
                        children: [
                          e.jsx(bt, { className: "w-4 h-4" }),
                          E.clearFilters,
                        ],
                      }),
                  ],
                }),
              }),
              e.jsx(Xs, {
                className: "h-[calc(100vh-140px)] p-4",
                children: e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx(Z, {
                      title: E.sortBy,
                      section: "sort",
                      children: e.jsxs("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          e.jsx(T, {
                            value: "popularity",
                            label: E.popularity,
                            icon: St,
                          }),
                          e.jsx(T, {
                            value: "price-asc",
                            label: E.priceLowToHigh,
                            icon: et,
                          }),
                          e.jsx(T, {
                            value: "price-desc",
                            label: E.priceHighToLow,
                            icon: et,
                          }),
                          e.jsx(T, {
                            value: "newest",
                            label: E.newest,
                            icon: hs,
                          }),
                        ],
                      }),
                    }),
                    e.jsx(Z, {
                      title: E.priceRange,
                      section: "price",
                      children: e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsx(aa, {
                            value: [d.minPrice, d.maxPrice],
                            min: g,
                            max: L,
                            step: 1,
                            onValueChange: ([x, j]) =>
                              V((re) => ({ ...re, minPrice: x, maxPrice: j })),
                            className: "py-4",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  e.jsx(Ne, {
                                    className: `text-xs ${a.textSecondary}`,
                                    children: E.minPrice,
                                  }),
                                  e.jsx(ue, {
                                    type: "number",
                                    value: d.minPrice,
                                    onChange: (x) =>
                                      V((j) => ({
                                        ...j,
                                        minPrice: Number(x.target.value),
                                      })),
                                    className: `${a.bgSecondary} ${a.border} ${a.text} h-9`,
                                  }),
                                ],
                              }),
                              e.jsx("span", {
                                className: `${a.textMuted} mt-5`,
                                children: "-",
                              }),
                              e.jsxs("div", {
                                className: "flex-1",
                                children: [
                                  e.jsx(Ne, {
                                    className: `text-xs ${a.textSecondary}`,
                                    children: E.maxPrice,
                                  }),
                                  e.jsx(ue, {
                                    type: "number",
                                    value: d.maxPrice,
                                    onChange: (x) =>
                                      V((j) => ({
                                        ...j,
                                        maxPrice: Number(x.target.value),
                                      })),
                                    className: `${a.bgSecondary} ${a.border} ${a.text} h-9`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: `text-sm ${a.textSecondary} text-center`,
                            children: [b(d.minPrice), " - ", b(d.maxPrice)],
                          }),
                        ],
                      }),
                    }),
                    X.length > 0 &&
                      e.jsx(Z, {
                        title: E.categories,
                        section: "categories",
                        children: e.jsx("div", {
                          className: "space-y-2",
                          children: X.map((x) =>
                            e.jsxs(
                              "label",
                              {
                                className: `flex items-center gap-3 cursor-pointer py-1.5 px-2 rounded-lg ${a.bgSecondary}`,
                                children: [
                                  e.jsx(Ls, {
                                    checked: d.categories.includes(x),
                                    onCheckedChange: () => xe(x),
                                    style: { borderColor: u },
                                  }),
                                  e.jsx("span", {
                                    className: `${a.text} text-sm`,
                                    children: at[x]?.[m] || x,
                                  }),
                                ],
                              },
                              x
                            )
                          ),
                        }),
                      }),
                    G.length > 0 &&
                      e.jsx(Z, {
                        title: E.brands,
                        section: "brands",
                        children: e.jsx("div", {
                          className: "space-y-2",
                          children: G.map((x) =>
                            e.jsxs(
                              "label",
                              {
                                className: `flex items-center gap-3 cursor-pointer py-1.5 px-2 rounded-lg ${a.bgSecondary}`,
                                children: [
                                  e.jsx(Ls, {
                                    checked: d.brands.includes(x),
                                    onCheckedChange: () => Q(x),
                                    style: { borderColor: u },
                                  }),
                                  e.jsx("span", {
                                    className: `${a.text} text-sm`,
                                    children: tt[x] || x,
                                  }),
                                ],
                              },
                              x
                            )
                          ),
                        }),
                      }),
                    e.jsx("div", {
                      className: "space-y-3 pt-2",
                      children: e.jsxs("label", {
                        className: `flex items-center gap-3 cursor-pointer py-2 px-3 rounded-lg ${a.bgSecondary}`,
                        children: [
                          e.jsx(Ls, {
                            checked: d.showNew,
                            onCheckedChange: (x) =>
                              V((j) => ({ ...j, showNew: !!x })),
                            style: { borderColor: u },
                          }),
                          e.jsx(hs, {
                            className: "w-4 h-4",
                            style: { color: u },
                          }),
                          e.jsx("span", {
                            className: `${a.text} text-sm font-medium`,
                            children: E.newArrivals,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: `p-4 border-t ${a.border}`,
                children: e.jsx(B, {
                  onClick: () => y(!1),
                  className: "w-full gap-2",
                  style: { backgroundColor: u },
                  children: E.applyFilters,
                }),
              }),
            ],
          }),
        ],
      }),
      c > 0 &&
        e.jsxs("div", {
          className: "flex flex-wrap gap-2 mt-2",
          children: [
            d.sortBy &&
              e.jsxs(pe, {
                variant: "secondary",
                className: `${a.bgSecondary} ${a.text} gap-1 cursor-pointer animate-scale-in`,
                onClick: () => V((x) => ({ ...x, sortBy: null })),
                children: [
                  d.sortBy === "popularity" && E.popularity,
                  d.sortBy === "price-asc" && E.priceLowToHigh,
                  d.sortBy === "price-desc" && E.priceHighToLow,
                  d.sortBy === "newest" && E.newest,
                  e.jsx(Te, { className: "w-3 h-3 ml-1" }),
                ],
              }),
            (d.minPrice > g || d.maxPrice < L) &&
              e.jsxs(pe, {
                variant: "secondary",
                className: `${a.bgSecondary} ${a.text} gap-1 cursor-pointer animate-scale-in`,
                onClick: () => V((x) => ({ ...x, minPrice: g, maxPrice: L })),
                children: [
                  b(d.minPrice),
                  " - ",
                  b(d.maxPrice),
                  e.jsx(Te, { className: "w-3 h-3 ml-1" }),
                ],
              }),
            d.categories.map((x) =>
              e.jsxs(
                pe,
                {
                  variant: "secondary",
                  className: `${a.bgSecondary} ${a.text} gap-1 cursor-pointer animate-scale-in`,
                  onClick: () => xe(x),
                  children: [
                    at[x]?.[m] || x,
                    e.jsx(Te, { className: "w-3 h-3 ml-1" }),
                  ],
                },
                x
              )
            ),
            d.brands.map((x) =>
              e.jsxs(
                pe,
                {
                  variant: "secondary",
                  className: `${a.bgSecondary} ${a.text} gap-1 cursor-pointer animate-scale-in`,
                  onClick: () => Q(x),
                  children: [
                    tt[x] || x,
                    e.jsx(Te, { className: "w-3 h-3 ml-1" }),
                  ],
                },
                x
              )
            ),
            d.showNew &&
              e.jsxs(pe, {
                variant: "secondary",
                className: `${a.bgSecondary} ${a.text} gap-1 cursor-pointer animate-scale-in`,
                onClick: () => V((x) => ({ ...x, showNew: !1 })),
                children: [
                  e.jsx(hs, { className: "w-3 h-3" }),
                  E.newArrivals,
                  e.jsx(Te, { className: "w-3 h-3 ml-1" }),
                ],
              }),
          ],
        }),
    ],
  });
}
function La({
  banners: n,
  primaryColor: r,
  autoPlayInterval: u = 4e3,
  isDarkTheme: o,
  onBannerClick: m,
}) {
  const [b, E] = l.useState(0),
    [A, y] = l.useState(!1),
    U = l.useRef(0),
    $ = l.useRef(0),
    g = n.filter((a) => a.desktopImage || a.mobileImage),
    L = l.useCallback(() => {
      g.length <= 1 || E((a) => (a + 1) % g.length);
    }, [g.length]),
    d = l.useCallback(() => {
      g.length <= 1 || E((a) => (a - 1 + g.length) % g.length);
    }, [g.length]),
    V = l.useCallback((a) => {
      E(a);
    }, []);
  l.useEffect(() => {
    if (g.length <= 1 || A) return;
    const a = setInterval(L, u);
    return () => clearInterval(a);
  }, [g.length, A, u, L]);
  const c = (a) => {
      U.current = a.touches[0].clientX;
    },
    le = (a) => {
      $.current = a.touches[0].clientX;
    },
    X = () => {
      if (g.length <= 1) return;
      const a = U.current - $.current;
      Math.abs(a) > 50 && (a > 0 ? L() : d());
    };
  if (g.length === 0) return null;
  const G = g[b];
  return e.jsxs("div", {
    className: `relative w-full overflow-hidden rounded-2xl ${
      o ? "bg-zinc-900" : "bg-gray-100"
    } group`,
    onMouseEnter: () => y(!0),
    onMouseLeave: () => y(!1),
    onTouchStart: c,
    onTouchMove: le,
    onTouchEnd: X,
    children: [
      e.jsxs("div", {
        className: "relative w-full cursor-pointer",
        onClick: () => {
          G.link ? window.open(G.link, "_blank") : m && m();
        },
        children: [
          e.jsx("img", {
            src: G.desktopImage || G.mobileImage,
            alt: G.title || `Banner ${b + 1}`,
            className:
              "hidden md:block w-full h-auto max-h-[400px] object-contain transition-all duration-500",
          }),
          e.jsx("img", {
            src: G.mobileImage || G.desktopImage,
            alt: G.title || `Banner ${b + 1}`,
            className:
              "block md:hidden w-full h-auto max-h-[250px] object-contain transition-all duration-500",
          }),
          e.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none",
          }),
          G.title &&
            e.jsx("div", {
              className:
                "absolute bottom-4 left-4 px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg animate-slide-up",
              style: { backgroundColor: r },
              children: G.title,
            }),
        ],
      }),
      g.length > 1 &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx("button", {
              onClick: (a) => {
                a.stopPropagation(), d();
              },
              className: `absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center 
              ${
                o
                  ? "bg-zinc-800/90 hover:bg-zinc-700"
                  : "bg-white/90 hover:bg-white"
              } 
              shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100
              ${A ? "opacity-100" : "md:opacity-0"}`,
              style: { color: r },
              children: e.jsx(Ps, { className: "w-5 h-5" }),
            }),
            e.jsx("button", {
              onClick: (a) => {
                a.stopPropagation(), L();
              },
              className: `absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center 
              ${
                o
                  ? "bg-zinc-800/90 hover:bg-zinc-700"
                  : "bg-white/90 hover:bg-white"
              } 
              shadow-lg transition-all duration-300
              ${A ? "opacity-100" : "md:opacity-0"}`,
              style: { color: r },
              children: e.jsx(ps, { className: "w-5 h-5" }),
            }),
          ],
        }),
      g.length > 1 &&
        e.jsx("div", {
          className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5",
          children: g.map((a, W) =>
            e.jsx(
              "button",
              {
                onClick: (S) => {
                  S.stopPropagation(), V(W);
                },
                className: `h-2 rounded-full transition-all duration-300 ${
                  W === b ? "w-6" : "w-2 bg-white/50 hover:bg-white/70"
                }`,
                style: W === b ? { backgroundColor: r } : {},
              },
              W
            )
          ),
        }),
    ],
  });
}
const rt = [
  { key: "received", label: "Recebido", icon: ts },
  { key: "confirmed", label: "Confirmado", icon: xs },
  { key: "preparing", label: "Preparando", icon: _t },
  { key: "shipped", label: "Em Entrega", icon: Ce },
  { key: "delivered", label: "Entregue", icon: Fe },
];
function Ua(n) {
  const r = n.toLowerCase();
  return r.includes("entregue")
    ? 4
    : r.includes("saiu") ||
      r.includes("caminho") ||
      r.includes("próximo") ||
      r.includes("tentativa")
    ? 3
    : r.includes("preparando") || r.includes("embalado") || r.includes("pronto")
    ? 2
    : r.includes("confirmado") ||
      r.includes("aprovado") ||
      r.includes("pagamento")
    ? 1
    : 0;
}
function nt({ userId: n, primaryColor: r, isDarkTheme: u, formatPrice: o }) {
  const [m, b] = l.useState(""),
    [E, A] = l.useState(""),
    [y, U] = l.useState(null),
    [$, g] = l.useState([]),
    [L, d] = l.useState(!1),
    [V, c] = l.useState(!1),
    le = u ? "bg-zinc-900" : "bg-white",
    X = u ? "border-zinc-800" : "border-gray-200",
    G = u ? "text-white" : "text-gray-900",
    a = u ? "text-zinc-500" : "text-gray-500",
    W = u ? "text-zinc-400" : "text-gray-600",
    S = u
      ? "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
      : "",
    xe = async () => {
      if (!m.trim() && !E.trim()) return;
      d(!0), c(!0);
      let T = ne.from("catalog_orders").select("*").eq("user_id", n);
      m.trim()
        ? (T = T.eq("tracking_code", m.trim().toUpperCase()))
        : E.trim() &&
          (T = T.ilike("customer_phone", `%${E.trim().replace(/\D/g, "")}%`));
      const { data: Z } = await T.order("created_at", { ascending: !1 })
        .limit(1)
        .maybeSingle();
      if (Z) {
        U(Z);
        const { data: x } = await ne
          .from("catalog_order_tracking")
          .select("*")
          .eq("order_id", Z.id)
          .order("created_at", { ascending: !1 });
        g(x || []);
      } else U(null), g([]);
      d(!1);
    };
  l.useEffect(() => {
    if (!y?.id) return;
    const T = ne
      .channel(`tracking_${y.id}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "catalog_order_tracking",
          filter: `order_id=eq.${y.id}`,
        },
        (Z) => {
          g((x) => [Z.new, ...x]);
        }
      )
      .subscribe();
    return () => {
      ne.removeChannel(T);
    };
  }, [y?.id]);
  const Q = $.length > 0 ? Ua($[0].status) : 0;
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsxs("div", {
        className: "text-center space-y-2",
        children: [
          e.jsx("div", {
            className:
              "w-14 h-14 rounded-2xl mx-auto flex items-center justify-center",
            style: { backgroundColor: `${r}15` },
            children: e.jsx(Ce, { className: "w-7 h-7", style: { color: r } }),
          }),
          e.jsx("h3", {
            className: `text-lg font-bold ${G}`,
            children: "Acompanhar Pedido",
          }),
          e.jsx("p", {
            className: `text-sm ${a}`,
            children: "Digite o código de rastreio ou seu telefone",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "space-y-2",
        children: [
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsx(ue, {
                placeholder: "Código de rastreio (ex: TC...)",
                value: m,
                onChange: (T) => {
                  b(T.target.value.toUpperCase()), A("");
                },
                className: `${S} rounded-xl font-mono`,
                onKeyDown: (T) => T.key === "Enter" && xe(),
              }),
              e.jsx(B, {
                onClick: xe,
                disabled: L,
                style: { backgroundColor: r, color: "#fff" },
                className: "rounded-xl px-6",
                children: e.jsx(Cs, { className: "w-4 h-4" }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx("div", {
                className: `h-px flex-1 ${u ? "bg-zinc-800" : "bg-gray-200"}`,
              }),
              e.jsx("span", { className: `text-[10px] ${a}`, children: "ou" }),
              e.jsx("div", {
                className: `h-px flex-1 ${u ? "bg-zinc-800" : "bg-gray-200"}`,
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsx(ue, {
                placeholder: "Seu telefone",
                value: E,
                onChange: (T) => {
                  A(T.target.value), b("");
                },
                className: `${S} rounded-xl`,
                onKeyDown: (T) => T.key === "Enter" && xe(),
              }),
              e.jsx(B, {
                onClick: xe,
                disabled: L,
                variant: "outline",
                className: `rounded-xl px-6 ${X}`,
                children: e.jsx(jt, { className: "w-4 h-4" }),
              }),
            ],
          }),
        ],
      }),
      V &&
        !y &&
        !L &&
        e.jsxs("div", {
          className: "text-center py-8",
          children: [
            e.jsx(Fe, { className: `w-12 h-12 mx-auto mb-3 ${a}` }),
            e.jsx("p", {
              className: `font-medium ${G}`,
              children: "Pedido não encontrado",
            }),
            e.jsx("p", {
              className: `text-sm ${a}`,
              children: "Verifique o código ou telefone informado",
            }),
          ],
        }),
      y &&
        e.jsx(bs, {
          className: `${le} border ${X} rounded-2xl overflow-hidden`,
          children: e.jsxs("div", {
            className: "p-4 space-y-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: `text-[10px] ${a} uppercase tracking-wider`,
                        children: "Código de Rastreio",
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("p", {
                            className: `font-black text-lg font-mono ${G}`,
                            children: y.tracking_code || y.id.slice(0, 8),
                          }),
                          y.tracking_code &&
                            e.jsx("button", {
                              onClick: () => {
                                navigator.clipboard.writeText(y.tracking_code);
                              },
                              className: `p-1 rounded ${a} hover:opacity-70`,
                              children: e.jsx(_s, { className: "w-3.5 h-3.5" }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(pe, {
                    className:
                      "rounded-full px-3 py-1 text-white text-xs font-bold",
                    style: {
                      backgroundColor:
                        y.status === "delivered"
                          ? "#22c55e"
                          : y.status === "approved"
                          ? "#3b82f6"
                          : y.status === "rejected"
                          ? "#ef4444"
                          : "#eab308",
                    },
                    children:
                      y.status === "delivered"
                        ? "✅ Entregue"
                        : y.status === "approved"
                        ? "🚚 Em andamento"
                        : y.status === "rejected"
                        ? "❌ Cancelado"
                        : "⏳ Aguardando",
                  }),
                ],
              }),
              e.jsx("div", {
                className: `rounded-xl p-4 ${
                  u ? "bg-zinc-800/50" : "bg-gray-50"
                }`,
                children: e.jsxs("div", {
                  className: "flex items-center justify-between relative",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute top-4 left-6 right-6 h-1 rounded-full",
                      style: { backgroundColor: u ? "#27272a" : "#e5e7eb" },
                    }),
                    e.jsx("div", {
                      className:
                        "absolute top-4 left-6 h-1 rounded-full transition-all duration-700",
                      style: {
                        backgroundColor: r,
                        width: `calc(${(Q / (rt.length - 1)) * 100}% - 48px)`,
                        maxWidth: "calc(100% - 48px)",
                      },
                    }),
                    rt.map((T, Z) => {
                      const x = T.icon,
                        j = Z <= Q,
                        re = Z === Q;
                      return e.jsxs(
                        "div",
                        {
                          className: "flex flex-col items-center z-10 relative",
                          children: [
                            e.jsx("div", {
                              className: `w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                re ? "ring-4 scale-110" : ""
                              }`,
                              style: {
                                backgroundColor: j
                                  ? r
                                  : u
                                  ? "#3f3f46"
                                  : "#d1d5db",
                                color: j ? "#fff" : u ? "#71717a" : "#9ca3af",
                                ...(re
                                  ? { boxShadow: `0 0 0 4px ${r}30` }
                                  : {}),
                              },
                              children: e.jsx(x, { className: "w-3.5 h-3.5" }),
                            }),
                            e.jsx("span", {
                              className: `text-[9px] mt-1.5 font-medium text-center w-14 ${
                                j ? "" : a
                              }`,
                              style: j ? { color: r } : {},
                              children: T.label,
                            }),
                          ],
                        },
                        T.key
                      );
                    }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className: `rounded-xl p-3 space-y-1 ${
                  u ? "bg-zinc-800/50" : "bg-gray-50"
                }`,
                children: [
                  (Array.isArray(y.items) ? y.items : []).map((T, Z) =>
                    e.jsxs(
                      "div",
                      {
                        className: `flex justify-between text-sm ${G}`,
                        children: [
                          e.jsxs("span", {
                            children: [T.quantity, "x ", T.name],
                          }),
                          e.jsx("span", {
                            className: "font-semibold",
                            children: o(T.price * T.quantity),
                          }),
                        ],
                      },
                      Z
                    )
                  ),
                  e.jsxs("div", {
                    className: `border-t pt-1 mt-1 flex justify-between font-bold ${G}`,
                    style: { borderColor: u ? "#27272a" : "#e5e7eb" },
                    children: [
                      e.jsx("span", { children: "Total" }),
                      e.jsx("span", {
                        style: { color: r },
                        children: o(Number(y.total)),
                      }),
                    ],
                  }),
                ],
              }),
              $.length > 0 &&
                e.jsxs("div", {
                  className: "space-y-0",
                  children: [
                    e.jsxs("p", {
                      className: `text-xs font-bold ${G} mb-3 flex items-center gap-1.5`,
                      children: [
                        e.jsx(Hs, {
                          className: "w-3.5 h-3.5",
                          style: { color: r },
                        }),
                        "Histórico Detalhado",
                      ],
                    }),
                    e.jsx("div", {
                      className: "space-y-0",
                      children: $.map((T, Z) =>
                        e.jsxs(
                          "div",
                          {
                            className: "flex gap-3",
                            children: [
                              e.jsxs("div", {
                                className: "flex flex-col items-center",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "w-3 h-3 rounded-full flex-shrink-0 transition-all",
                                    style: {
                                      backgroundColor:
                                        Z === 0 ? r : u ? "#3f3f46" : "#d1d5db",
                                      ...(Z === 0
                                        ? { boxShadow: `0 0 0 4px ${r}25` }
                                        : {}),
                                    },
                                  }),
                                  Z < $.length - 1 &&
                                    e.jsx("div", {
                                      className: `w-0.5 flex-1 min-h-[28px] ${
                                        u ? "bg-zinc-700" : "bg-gray-200"
                                      }`,
                                    }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "pb-4 flex-1",
                                children: [
                                  e.jsx("p", {
                                    className: `text-sm font-semibold ${
                                      Z === 0 ? "" : W
                                    }`,
                                    style: Z === 0 ? { color: r } : {},
                                    children: T.status,
                                  }),
                                  T.description &&
                                    T.description !== T.status &&
                                    e.jsx("p", {
                                      className: `text-xs ${a} mt-0.5`,
                                      children: T.description,
                                    }),
                                  T.location &&
                                    e.jsxs("p", {
                                      className: `text-xs ${a}`,
                                      children: ["📍 ", T.location],
                                    }),
                                  e.jsxs("p", {
                                    className: `text-[10px] ${a} mt-0.5`,
                                    children: [
                                      new Date(T.created_at).toLocaleDateString(
                                        "pt-BR"
                                      ),
                                      " às ",
                                      new Date(T.created_at).toLocaleTimeString(
                                        "pt-BR",
                                        { hour: "2-digit", minute: "2-digit" }
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          },
                          T.id
                        )
                      ),
                    }),
                  ],
                }),
              $.length === 0 &&
                e.jsxs("div", {
                  className: `text-center py-4 ${a} text-sm`,
                  children: [
                    e.jsx(Nt, { className: "w-8 h-8 mx-auto mb-2 opacity-50" }),
                    "Aguardando confirmação do vendedor...",
                  ],
                }),
            ],
          }),
        }),
    ],
  });
}
const kt = {
    "pt-BR": {
      freeShipping: "FRETE GRÁTIS ACIMA DE",
      freeShippingValue: "R$99",
      flashSales: "OFERTAS RELÂMPAGO",
      securePurchase: "COMPRA 100% SEGURA",
      bestPrices: "MELHORES PREÇOS",
      pixDiscount: "DESCONTO NO PIX",
      mbwayDiscount: "DESCONTO NO MB WAY",
      searchPlaceholder: "Buscar produtos...",
      contact: "Contato",
      coupons: "Cupons",
      cart: "Carrinho",
      emptyCart: "Seu carrinho está vazio",
      emptyCartDescription: "Adicione produtos para continuar",
      subtotal: "Subtotal",
      total: "Total",
      checkout: "Finalizar Compra",
      itemRemoved: "Item removido do carrinho",
      addedToCart: "adicionado ao carrinho!",
      fastDelivery: "Entrega Rápida",
      deliveryLocation: "Em todo Brasil",
      securePayment: "Compra Segura",
      dataProtected: "Dados protegidos",
      installments: "Parcelamento",
      warranty: "Garantia",
      factoryWarranty: "Garantia de fábrica",
      ourProducts: "Nossos Produtos",
      productsAvailable: "produtos disponíveis",
      productAvailable: "produto disponível",
      clearFilters: "Limpar filtros",
      noProductsFound: "Nenhum produto encontrado",
      tryAnotherSearch: "Tente buscar por outro termo ou categoria",
      viewAllProducts: "Ver todos os produtos",
      allCategories: "Todos",
      allBrands: "Todas Marcas",
      weeklyOffer: "OFERTA",
      inStock: "Em estoque",
      lastUnits: "Últimas unidades",
      outOfStock: "Esgotado",
      addToCart: "Adicionar",
      or: "ou",
      noInterest: "sem juros",
      categories: {
        celulares: "Celulares",
        acessorios: "Acessórios",
        pecas: "Peças",
        servicos: "Serviços",
        eletronicos: "Eletrônicos",
        informatica: "Informática",
        outros: "Outros",
      },
      customerInfo: "Informações",
      paymentMethod: "Pagamento",
      confirm: "Confirmar",
      name: "Nome",
      phone: "Telefone",
      address: "Endereço",
      notes: "Observações",
      delivery: "Entrega",
      pickup: "Retirar na loja",
      contactWhatsApp: "Fale Conosco no WhatsApp",
      allRightsReserved: "Todos os direitos reservados.",
      availableCoupons: "Cupons Disponíveis",
      noCoupons: "Nenhum cupom disponível no momento",
      minPurchase: "Compra mínima",
      off: "OFF",
      freeShippingLabel: "Frete Grátis",
      copied: "copiado!",
      requestService: "Solicitar Serviço",
    },
    "pt-PT": {
      freeShipping: "PORTES GRÁTIS ACIMA DE",
      freeShippingValue: "€49",
      flashSales: "PROMOÇÕES RELÂMPAGO",
      securePurchase: "COMPRA 100% SEGURA",
      bestPrices: "MELHORES PREÇOS",
      pixDiscount: "DESCONTO NO MB WAY",
      mbwayDiscount: "DESCONTO NO MB WAY",
      searchPlaceholder: "Procurar produtos...",
      contact: "Contacto",
      coupons: "Cupões",
      cart: "Carrinho",
      emptyCart: "O seu carrinho está vazio",
      emptyCartDescription: "Adicione produtos para continuar",
      subtotal: "Subtotal",
      total: "Total",
      checkout: "Finalizar Compra",
      itemRemoved: "Item removido do carrinho",
      addedToCart: "adicionado ao carrinho!",
      fastDelivery: "Entrega Rápida",
      deliveryLocation: "Em todo Portugal",
      securePayment: "Compra Segura",
      dataProtected: "Dados protegidos",
      installments: "Prestações",
      warranty: "Garantia",
      factoryWarranty: "Garantia de fábrica",
      ourProducts: "Os Nossos Produtos",
      productsAvailable: "produtos disponíveis",
      productAvailable: "produto disponível",
      clearFilters: "Limpar filtros",
      noProductsFound: "Nenhum produto encontrado",
      tryAnotherSearch: "Tente procurar por outro termo ou categoria",
      viewAllProducts: "Ver todos os produtos",
      allCategories: "Todos",
      allBrands: "Todas as Marcas",
      weeklyOffer: "PROMOÇÃO",
      inStock: "Em stock",
      lastUnits: "Últimas unidades",
      outOfStock: "Esgotado",
      addToCart: "Adicionar",
      or: "ou",
      noInterest: "sem juros",
      categories: {
        celulares: "Telemóveis",
        acessorios: "Acessórios",
        pecas: "Peças",
        servicos: "Serviços",
        eletronicos: "Eletrónicos",
        informatica: "Informática",
        outros: "Outros",
      },
      customerInfo: "Informações",
      paymentMethod: "Pagamento",
      confirm: "Confirmar",
      name: "Nome",
      phone: "Telefone",
      address: "Morada",
      notes: "Observações",
      delivery: "Entrega",
      pickup: "Levantar na loja",
      contactWhatsApp: "Fale Connosco no WhatsApp",
      allRightsReserved: "Todos os direitos reservados.",
      availableCoupons: "Cupões Disponíveis",
      noCoupons: "Nenhum cupão disponível de momento",
      minPurchase: "Compra mínima",
      off: "DESC.",
      freeShippingLabel: "Portes Grátis",
      copied: "copiado!",
      requestService: "Solicitar Serviço",
    },
    "en-US": {
      freeShipping: "FREE SHIPPING OVER",
      freeShippingValue: "$99",
      flashSales: "FLASH SALES",
      securePurchase: "100% SECURE",
      bestPrices: "BEST PRICES",
      pixDiscount: "INSTANT PAYMENT DISCOUNT",
      mbwayDiscount: "INSTANT PAYMENT DISCOUNT",
      searchPlaceholder: "Search products...",
      contact: "Contact",
      coupons: "Coupons",
      cart: "Cart",
      emptyCart: "Your cart is empty",
      emptyCartDescription: "Add products to continue",
      subtotal: "Subtotal",
      total: "Total",
      checkout: "Checkout",
      itemRemoved: "Item removed from cart",
      addedToCart: "added to cart!",
      fastDelivery: "Fast Delivery",
      deliveryLocation: "Nationwide",
      securePayment: "Secure Payment",
      dataProtected: "Data protected",
      installments: "Installments",
      warranty: "Warranty",
      factoryWarranty: "Factory warranty",
      ourProducts: "Our Products",
      productsAvailable: "products available",
      productAvailable: "product available",
      clearFilters: "Clear filters",
      noProductsFound: "No products found",
      tryAnotherSearch: "Try searching for another term or category",
      viewAllProducts: "View all products",
      allCategories: "All",
      allBrands: "All Brands",
      weeklyOffer: "SALE",
      inStock: "In stock",
      lastUnits: "Last units",
      outOfStock: "Out of stock",
      addToCart: "Add",
      or: "or",
      noInterest: "interest-free",
      categories: {
        celulares: "Phones",
        acessorios: "Accessories",
        pecas: "Parts",
        servicos: "Services",
        eletronicos: "Electronics",
        informatica: "Computers",
        outros: "Other",
      },
      customerInfo: "Information",
      paymentMethod: "Payment",
      confirm: "Confirm",
      name: "Name",
      phone: "Phone",
      address: "Address",
      notes: "Notes",
      delivery: "Delivery",
      pickup: "Store pickup",
      contactWhatsApp: "Contact us on WhatsApp",
      allRightsReserved: "All rights reserved.",
      availableCoupons: "Available Coupons",
      noCoupons: "No coupons available at the moment",
      minPurchase: "Minimum purchase",
      off: "OFF",
      freeShippingLabel: "Free Shipping",
      copied: "copied!",
      requestService: "Request Service",
    },
  },
  Da = (n, r, u, o, m) => {
    switch (n) {
      case "pc-store":
        return {
          bg: r ? "bg-black" : "bg-slate-100",
          bgCard: r ? "bg-zinc-900/95" : "bg-white",
          bgHeader: r ? "bg-black/98" : "bg-white/98",
          bgInput: r ? "bg-zinc-800" : "bg-slate-100",
          bgBanner: r ? "bg-zinc-900" : "bg-slate-50",
          border: r ? `border-[${u}]/30` : "border-slate-200",
          borderAccent: `border-[${u}]`,
          text: r ? "text-white" : "text-slate-900",
          textSecondary: r ? "text-zinc-300" : "text-slate-600",
          textMuted: r ? "text-zinc-500" : "text-slate-400",
          hoverBg: r ? "hover:bg-zinc-800" : "hover:bg-slate-100",
          cardHover: `hover:border-[${u}]`,
          cardRadius: "rounded-none",
          buttonRadius: "rounded-none",
          headerPadding: "py-2",
          cardShadow: r ? `shadow-lg shadow-[${u}]/20` : "shadow-lg",
          productCardClass: `group relative overflow-hidden border-2 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-br before:from-[${u}]/5 before:to-transparent before:pointer-events-none`,
          headerClass: "backdrop-blur-xl border-b-2 shadow-lg",
          promoBarClass: `bg-gradient-to-r from-zinc-900 via-[${u}] to-zinc-900`,
          badgeClass: `bg-gradient-to-r from-[${u}] to-[${o}] text-white font-bold uppercase tracking-wider border-0`,
          footerClass: "bg-black border-t-2",
          cardAnimation: "hover:-translate-y-2 hover:scale-[1.02]",
          imageAnimation:
            "group-hover:scale-110 transition-transform duration-500",
          buttonAnimation: `hover:shadow-[0_0_20px_${u}] transition-all duration-300`,
          gridClass:
            "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
          categoryStyle: "sharp",
          searchStyle: "angular",
          glowEffect: !0,
          scanlineEffect: !0,
          rgbAccent: !0,
        };
      default:
        return {
          bg: r ? "bg-zinc-950" : "bg-gray-50",
          bgCard: r ? "bg-zinc-900" : "bg-white",
          bgHeader: r ? "bg-zinc-900/95" : "bg-white/95",
          bgInput: r ? "bg-zinc-800" : "bg-gray-100",
          bgBanner: r ? "bg-zinc-900" : "bg-white",
          border: r ? "border-zinc-800" : "border-gray-200",
          borderAccent: `border-[${u}]`,
          text: r ? "text-white" : "text-gray-900",
          textSecondary: r ? "text-zinc-400" : "text-gray-600",
          textMuted: r ? "text-zinc-500" : "text-gray-500",
          hoverBg: r ? "hover:bg-zinc-800" : "hover:bg-gray-100",
          cardHover: r ? "hover:border-zinc-600" : "hover:border-gray-300",
          cardRadius: "rounded-2xl",
          buttonRadius: "rounded-xl",
          headerPadding: "py-3",
          cardShadow: r ? "shadow-xl" : "shadow-lg",
          productCardClass:
            "group relative overflow-hidden transition-all duration-500 hover:shadow-2xl",
          headerClass: "backdrop-blur-xl border-b shadow-sm",
          promoBarClass: `bg-gradient-to-r from-[${u}] via-[${o}] to-[${u}]`,
          badgeClass: `bg-[${u}] text-white font-semibold rounded-full`,
          footerClass: "bg-zinc-900",
          cardAnimation: "hover:-translate-y-1 hover:scale-[1.01]",
          imageAnimation:
            "group-hover:scale-105 transition-transform duration-700 ease-out",
          buttonAnimation: "hover:scale-[1.02] transition-all duration-300",
          gridClass:
            "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
          categoryStyle: "pill",
          searchStyle: "rounded",
          glowEffect: !1,
          scanlineEffect: !1,
          rgbAccent: !1,
        };
    }
  },
  qa = (n) => {
    switch (n) {
      case "pc-store":
        return {
          wrapper: "sticky top-0 z-50 backdrop-blur-xl border-b-2 shadow-lg",
          container: "flex items-center justify-between gap-3 py-2",
          logo: "h-8 sm:h-10 object-contain",
          logoContainer: "flex items-center gap-3",
          storeName: "text-sm sm:text-base font-bold uppercase tracking-widest",
          search:
            "border-2 focus-within:border-primary focus-within:shadow-[0_0_15px_var(--primary)]",
          searchInput: "bg-transparent border-none",
          searchIcon: "text-primary",
          navButton:
            "font-bold uppercase tracking-wider text-xs hover:text-primary transition-colors p-2",
          cartBadge: "font-bold border text-[10px]",
          cartButton:
            "relative p-2 border transition-colors hover:border-primary",
          actionButtons: "flex items-center gap-1",
        };
      default:
        return {
          wrapper: "sticky top-0 z-50 backdrop-blur-xl border-b shadow-sm",
          container: "flex items-center justify-between gap-4 py-3",
          logo: "h-10 sm:h-12 object-contain",
          logoContainer: "flex items-center gap-4",
          storeName: "text-base sm:text-lg font-bold tracking-tight",
          search:
            "rounded-2xl border focus-within:border-primary focus-within:shadow-md transition-all",
          searchInput: "bg-transparent border-none rounded-2xl",
          searchIcon: "text-muted-foreground",
          navButton:
            "font-medium text-sm hover:bg-muted/50 transition-colors rounded-xl px-3 py-2",
          cartBadge: "font-semibold rounded-full text-xs",
          cartButton:
            "relative p-2 rounded-xl transition-colors hover:bg-muted/50",
          actionButtons: "flex items-center gap-2",
        };
    }
  },
  ot = (n, r) => {
    const u = kt[r],
      o = n.toLowerCase();
    return u.categories[o] || n;
  },
  Va = {
    celulares: "📱",
    acessorios: "🎧",
    pecas: "🔧",
    servicos: "🛠️",
    eletronicos: "💻",
    informatica: "🖥️",
    outros: "📦",
  },
  it = {
    apple: "Apple",
    samsung: "Samsung",
    xiaomi: "Xiaomi",
    realme: "Realme",
    oppo: "OPPO",
    lg: "LG",
    motorola: "Motorola",
    huawei: "Huawei",
    asus: "ASUS",
    nokia: "Nokia",
    oneplus: "OnePlus",
    google: "Google",
    outros: "Outros",
  },
  sl = () => {
    const { storeName: n } = la(),
      [r, u] = l.useState([]),
      [o, m] = l.useState(null),
      [b, E] = l.useState(!0),
      [A, y] = l.useState(""),
      [U, $] = l.useState(null),
      [g, L] = l.useState(null),
      [d, V] = l.useState(null),
      [c, le] = l.useState([]),
      [X, G] = l.useState(null),
      [a, W] = l.useState([]),
      [S, xe] = l.useState(null),
      [Q, T] = l.useState(!1),
      [Z, x] = l.useState(!0),
      [j, re] = l.useState(null),
      [z, N] = l.useState(!1),
      [J, K] = l.useState(!1),
      [$e, Ae] = l.useState("relevance"),
      [oe, M] = l.useState(null),
      te = l.useRef(null),
      [He, ze] = l.useState([]),
      [Ie, Ge] = l.useState(!1),
      [Re, Ue] = l.useState(0),
      [ce, h] = l.useState(null),
      [w, H] = l.useState([]),
      [Y, Se] = l.useState(null),
      [de, Je] = l.useState(null),
      [es, _] = l.useState(!1),
      [D, ee] = l.useState(!1),
      [ve, _e] = l.useState(!1),
      [Le, As] = l.useState(null),
      [ge, ke] = l.useState({
        nome: "",
        telefone: "",
        modelo: "",
        servico: "",
        info: "",
      });
    l.useEffect(() => {
      const s = () => Ge(window.scrollY > 600);
      return (
        window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
      );
    }, []),
      l.useEffect(() => {
        Ue(Math.floor(Math.random() * 30) + 15);
        const s = setInterval(() => {
          Ue((i) => Math.max(8, i + Math.floor(Math.random() * 7) - 3));
        }, 8e3);
        return () => clearInterval(s);
      }, []),
      l.useEffect(() => {
        if (r.length === 0) return;
        const s = [
            "Ana",
            "Carlos",
            "Maria",
            "Pedro",
            "Julia",
            "Lucas",
            "Beatriz",
            "Rafael",
            "Camila",
            "Diego",
          ],
          i = [
            "São Paulo",
            "Rio de Janeiro",
            "Belo Horizonte",
            "Curitiba",
            "Porto Alegre",
            "Salvador",
            "Brasília",
            "Lisboa",
            "Porto",
          ],
          C = () => {
            const F = r[Math.floor(Math.random() * r.length)],
              ae = s[Math.floor(Math.random() * s.length)],
              be = i[Math.floor(Math.random() * i.length)];
            Se({ name: ae, product: F.name, city: be }),
              setTimeout(() => Se(null), 4e3);
          },
          k = setTimeout(C, 12e3),
          I = setInterval(C, 25e3 + Math.random() * 15e3);
        return () => {
          clearTimeout(k), clearInterval(I);
        };
      }, [r]);
    const Pe = () => {
        let s = sessionStorage.getItem("catalog_cart_session");
        return (
          s ||
            ((s = crypto.randomUUID()),
            sessionStorage.setItem("catalog_cart_session", s)),
          s
        );
      },
      v = l.useCallback(
        async (s) => {
          if (!S || c.length === 0) return null;
          const i = Pe(),
            C = c.map((F) => ({
              product_id: F.product.id,
              product_name: F.product.name,
              quantity: F.quantity,
              price: F.product.sale_price,
              image_url: F.product.image_url || null,
            })),
            k = c.reduce((F, ae) => F + ae.product.sale_price * ae.quantity, 0),
            I = s
              ? {
                  customer_name: s.name || null,
                  customer_phone: s.phone || null,
                }
              : {};
          try {
            const { data: F } = await ne
              .from("abandoned_carts")
              .select("id")
              .eq("session_id", i)
              .eq("user_id", S)
              .eq("status", "abandoned")
              .maybeSingle();
            if (F)
              return (
                await ne
                  .from("abandoned_carts")
                  .update({
                    ...I,
                    items: C,
                    total: k,
                    updated_at: new Date().toISOString(),
                  })
                  .eq("id", F.id),
                (te.current = F.id),
                M(F.id),
                F.id
              );
            const { data: ae } = await ne
              .from("abandoned_carts")
              .insert({
                user_id: S,
                session_id: i,
                items: C,
                total: k,
                source: "catalog",
                ...I,
              })
              .select("id")
              .single();
            return ae?.id ? ((te.current = ae.id), M(ae.id), ae.id) : null;
          } catch {
            return null;
          }
        },
        [c, S]
      );
    l.useEffect(() => {
      if (!S || c.length === 0) return;
      const s = setTimeout(() => {
        v();
      }, 800);
      return () => clearTimeout(s);
    }, [c, S, v]),
      l.useEffect(() => {
        const s = () => {
          document.visibilityState === "hidden" && v();
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => document.removeEventListener("visibilitychange", s)
        );
      }, [v]),
      l.useEffect(() => {
        c.length === 0 &&
          te.current &&
          ne
            .from("abandoned_carts")
            .delete()
            .eq("id", te.current)
            .then(() => {
              (te.current = null), M(null);
            });
      }, [c]),
      l.useEffect(() => {
        (async () => {
          if (!n) {
            V("Nome da loja não encontrado"), E(!1);
            return;
          }
          try {
            const i = new Date().getTime(),
              { data: C, error: k } = await ne
                .from("user_settings")
                .select(
                  "user_id, company_name, company_phone, company_logo, company_address, company_email, company_cnpj, catalog_theme, catalog_primary_color, catalog_secondary_color, catalog_button_color, catalog_whatsapp, catalog_banner_text, catalog_footer_text, catalog_hide_brands, catalog_weekly_offers, catalog_hide_promo_bar, catalog_language, catalog_installments_text, catalog_show_installments, os_print_settings, catalog_store_slug"
                )
                .eq("catalog_store_slug", n.toLowerCase())
                .maybeSingle();
            if (!k && C) {
              xe(C.user_id), m(C);
              const Me = C.os_print_settings;
              x(Me?.catalog_show_skeleton !== !1);
              return;
            }
            const { data: I, error: F } = await ne
              .from("user_settings")
              .select(
                "user_id, company_name, company_phone, company_logo, company_address, company_email, company_cnpj, catalog_theme, catalog_primary_color, catalog_secondary_color, catalog_button_color, catalog_whatsapp, catalog_banner_text, catalog_footer_text, catalog_hide_brands, catalog_weekly_offers, catalog_hide_promo_bar, catalog_language, catalog_installments_text, catalog_show_installments, os_print_settings"
              )
              .eq("user_id", n)
              .maybeSingle();
            if (!F && I) {
              xe(I.user_id), m(I);
              const Me = I.os_print_settings;
              x(Me?.catalog_show_skeleton !== !1);
              return;
            }
            const ae = decodeURIComponent(n).toLowerCase().replace(/-/g, " "),
              { data: be, error: ie } = await ne
                .from("user_settings")
                .select(
                  "user_id, company_name, company_phone, company_logo, company_address, company_email, company_cnpj, catalog_theme, catalog_primary_color, catalog_secondary_color, catalog_button_color, catalog_whatsapp, catalog_banner_text, catalog_footer_text, catalog_hide_brands, catalog_weekly_offers, catalog_hide_promo_bar, catalog_language, catalog_installments_text, catalog_show_installments, os_print_settings"
                );
            if (ie) throw ie;
            const ye = be?.find((Me) => {
              const gs = (Me.company_name || "")
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^a-z0-9-]/g, ""),
                It = n.toLowerCase();
              return gs === It;
            });
            if (ye) {
              xe(ye.user_id), m(ye);
              const Me = ye.os_print_settings;
              x(Me?.catalog_show_skeleton !== !1);
            } else
              V("Loja não encontrada. Use o link correto do seu catálogo."),
                E(!1);
          } catch {
            V("Erro ao carregar catálogo"), E(!1);
          }
        })();
      }, [n]),
      l.useEffect(() => {
        if (!S) return;
        const s = async () => {
          try {
            const { data: k, error: I } = await ne
              .from("products")
              .select(
                "id, name, description, sale_price, price_cash, price_installment, installment_count, image_url, images, quantity, payment_methods, max_installments, category, brand, colors, hidden_from_catalog"
              )
              .eq("user_id", S)
              .gt("quantity", 0)
              .eq("hidden_from_catalog", !1)
              .order("name");
            if (I) throw I;
            u(k || []), E(!1);
          } catch {
            V("Erro ao carregar produtos"), E(!1);
          }
        };
        s();
        const i = ne
            .channel(`catalog_products_${S}_${Date.now()}`)
            .on(
              "postgres_changes",
              {
                event: "INSERT",
                schema: "public",
                table: "products",
                filter: `user_id=eq.${S}`,
              },
              (k) => {
                const I = k.new;
                I.quantity > 0 &&
                  !I.hidden_from_catalog &&
                  u((F) => (F.some((ae) => ae.id === I.id) ? F : [...F, I]));
              }
            )
            .on(
              "postgres_changes",
              {
                event: "UPDATE",
                schema: "public",
                table: "products",
                filter: `user_id=eq.${S}`,
              },
              (k) => {
                const I = k.new;
                I.quantity <= 0 || I.hidden_from_catalog
                  ? u((F) => F.filter((ae) => ae.id !== I.id))
                  : u((F) =>
                      F.some((be) => be.id === I.id)
                        ? F.map((be) => (be.id === I.id ? I : be))
                        : [...F, I]
                    );
              }
            )
            .on(
              "postgres_changes",
              {
                event: "DELETE",
                schema: "public",
                table: "products",
                filter: `user_id=eq.${S}`,
              },
              (k) => {
                const I = k.old;
                u((F) => F.filter((ae) => ae.id !== I.id));
              }
            )
            .subscribe((k, I) => {
              k === "SUBSCRIBED" || (k === "CHANNEL_ERROR" && s());
            }),
          C = ne
            .channel(`catalog_settings_${S}_${Date.now()}`)
            .on(
              "postgres_changes",
              {
                event: "*",
                schema: "public",
                table: "user_settings",
                filter: `user_id=eq.${S}`,
              },
              async () => {
                const { data: k } = await ne
                  .from("user_settings")
                  .select(
                    "company_name, company_phone, company_logo, company_address, company_email, company_cnpj, catalog_theme, catalog_primary_color, catalog_secondary_color, catalog_button_color, catalog_whatsapp, catalog_banner_text, catalog_footer_text, catalog_hide_brands, catalog_weekly_offers, catalog_hide_promo_bar, catalog_language, catalog_installments_text, catalog_show_installments, os_print_settings"
                  )
                  .eq("user_id", S)
                  .maybeSingle();
                if (k) {
                  m(k);
                  const I = k.os_print_settings;
                  x(I?.catalog_show_skeleton !== !1);
                }
              }
            )
            .subscribe();
        return () => {
          ne.removeChannel(i), ne.removeChannel(C);
        };
      }, [S]),
      l.useEffect(() => {
        if (!o) return;
        const i = (o?.os_print_settings?.catalog_popups || []).filter(
          (F) => F.isActive
        );
        if (i.length === 0) return;
        const C = JSON.parse(
            sessionStorage.getItem("dismissed_popups") || "[]"
          ),
          k = i.find((F) => !C.includes(F.id) && !w.includes(F.id));
        if (!k) return;
        const I = setTimeout(() => {
          h(k);
        }, (k.delay || 3) * 1e3);
        return () => clearTimeout(I);
      }, [o, w]);
    const js = (s) => {
        h(null), H((C) => [...C, s]);
        const i = JSON.parse(
          sessionStorage.getItem("dismissed_popups") || "[]"
        );
        sessionStorage.setItem("dismissed_popups", JSON.stringify([...i, s]));
      },
      zs = o?.os_print_settings?.catalog_currency || "BRL",
      he = (s) => {
        const i = {
            BRL: { locale: "pt-BR", currency: "BRL" },
            USD: { locale: "en-US", currency: "USD" },
            EUR: { locale: "de-DE", currency: "EUR" },
          },
          C = i[zs] || i.BRL;
        return new Intl.NumberFormat(C.locale, {
          style: "currency",
          currency: C.currency,
        }).format(s);
      },
      Ms = () => {
        const s = o?.catalog_whatsapp?.replace(/\D/g, "") || "",
          i = o?.company_phone?.replace(/\D/g, "") || "";
        return s || i;
      },
      as = () => {
        const s = Ms();
        s && window.open(`https://wa.me/${s}`, "_blank");
      },
      Ns = (s) => {
        le((i) =>
          i.find((k) => k.product.id === s.id)
            ? i.map((k) =>
                k.product.id === s.id ? { ...k, quantity: k.quantity + 1 } : k
              )
            : [...i, { product: s, quantity: 1 }]
        ),
          se.success(`${s.name} adicionado ao carrinho!`);
      },
      us = (s, i) => {
        le((C) =>
          C.map((k) => {
            if (k.product.id === s) {
              const I = k.quantity + i;
              return I > 0 ? { ...k, quantity: I } : k;
            }
            return k;
          }).filter((k) => k.quantity > 0)
        );
      },
      Ts = (s) => {
        le((i) => i.filter((C) => C.product.id !== s)),
          se.success("Item removido do carrinho");
      },
      Es = (s) => {
        W((i) => (i.includes(s) ? i.filter((C) => C !== s) : [...i, s]));
      },
      vs = [...new Set(r.map((s) => s.category).filter(Boolean))],
      ls = [...new Set(r.map((s) => s.brand).filter(Boolean))],
      rs = r,
      ns = r.filter((s) => {
        const i =
            s.name.toLowerCase().includes(A.toLowerCase()) ||
            (s.description &&
              s.description.toLowerCase().includes(A.toLowerCase())),
          C = !U || s.category === U,
          k = !g || s.brand === g;
        if (de) {
          const ae =
            (o?.os_print_settings?.catalog_category_cards || []).find(
              (be) => be.id === de
            )?.productIds || [];
          if (ae.length > 0 && !ae.includes(s.id)) return !1;
        }
        if (z) {
          const F = (o?.catalog_weekly_offers || []).includes(s.id);
          return i && C && k && F;
        }
        return i && C && k;
      }),
      p = [
        ...(J && j !== null
          ? j.filter((s) => ns.some((i) => i.id === s.id))
          : ns),
      ].sort((s, i) =>
        $e === "price-asc"
          ? s.sale_price - i.sale_price
          : $e === "price-desc"
          ? i.sale_price - s.sale_price
          : $e === "name"
          ? s.name.localeCompare(i.name, "pt-BR")
          : 0
      ),
      q = l.useCallback((s, i) => {
        re(s), K(i);
      }, []),
      me = c.reduce((s, i) => s + i.product.sale_price * i.quantity, 0),
      fe = c.reduce((s, i) => s + i.quantity, 0),
      P = o?.catalog_theme !== "light",
      f = o?.catalog_primary_color || "#10b981",
      we = o?.catalog_secondary_color || "#1f2937",
      Be = o?.catalog_button_color || "#eab308",
      Pt = o?.catalog_footer_text || "Obrigado pela preferência!",
      R = o?.catalog_language || "pt-BR",
      O = kt[R],
      At = o?.catalog_hide_promo_bar || !1,
      zt = o?.catalog_show_installments !== !1,
      Mt = o?.catalog_installments_text || O.installments,
      Tt = R === "pt-PT",
      Ks = "cell-store",
      os = ((s) =>
        ["#eab308", "#22c55e", "#fbbf24", "#a3e635", "#facc15"].includes(
          s.toLowerCase()
        )
          ? "#000000"
          : "#ffffff")(Be),
      Ee = Da(Ks, P, f, we),
      Et = qa(Ks),
      t = {
        ...Ee,
        bg: Ee.bg,
        bgCard: Ee.bgCard,
        bgHeader: Ee.bgHeader,
        bgInput: Ee.bgInput,
        bgBanner: Ee.bgBanner,
        border: Ee.border,
        text: Ee.text,
        textSecondary: Ee.textSecondary,
        textMuted: Ee.textMuted,
        hoverBg: Ee.hoverBg,
        cardHover: Ee.cardHover,
      },
      ys = (s) => {
        ze((i) => {
          const C = i.filter((k) => k.id !== s.id);
          return [s, ...C].slice(0, 10);
        }),
          G(s);
      };
    if (X)
      return e.jsx(Aa, {
        product: X,
        companyInfo: o,
        onBack: () => G(null),
        onAddToCart: Ns,
        formatPrice: he,
        allProducts: r,
        onSelectProduct: (s) => {
          ys(s);
        },
        userId: S || "",
        catalogLanguage: R,
      });
    const Rs = o?.os_print_settings?.catalog_coupons || [],
      Rt = ({ coupons: s, theme: i, primaryColor: C, formatPrice: k }) => {
        const [I, F] = l.useState(null),
          ae = s.filter((ie) => ie.isActive),
          be = (ie) => {
            navigator.clipboard.writeText(ie),
              F(ie),
              se.success(`Cupom ${ie} copiado!`),
              setTimeout(() => F(null), 2e3);
          };
        return e.jsxs(Ke, {
          children: [
            e.jsx(Vs, {
              asChild: !0,
              children: e.jsxs(B, {
                variant: "ghost",
                size: "sm",
                className: `hidden sm:flex gap-2 ${i.text} ${i.hoverBg}`,
                children: [
                  e.jsx(Qe, { className: "w-4 h-4", style: { color: C } }),
                  e.jsx("span", {
                    className: "hidden lg:inline",
                    children: "Cupons",
                  }),
                ],
              }),
            }),
            e.jsxs(Ye, {
              className: `${i.bgCard} ${i.border} ${i.text} max-w-md`,
              children: [
                e.jsx(ds, {
                  children: e.jsxs(ms, {
                    className: `${i.text} flex items-center gap-2`,
                    children: [
                      e.jsx(Qe, { className: "w-5 h-5", style: { color: C } }),
                      "Cupons Disponíveis",
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "space-y-3 mt-4",
                  children:
                    ae.length === 0
                      ? e.jsxs("div", {
                          className: "text-center py-8",
                          children: [
                            e.jsx(Qe, {
                              className: `w-12 h-12 mx-auto mb-3 ${i.textMuted}`,
                            }),
                            e.jsx("p", {
                              className: i.textSecondary,
                              children: "Nenhum cupom disponível no momento",
                            }),
                            e.jsx("p", {
                              className: `text-xs ${i.textMuted} mt-1`,
                              children: "Fique de olho para novas promoções!",
                            }),
                          ],
                        })
                      : ae.map((ie) =>
                          e.jsx(
                            "div",
                            {
                              className: `p-4 rounded-lg border ${i.border} ${i.hoverBg} transition-all`,
                              children: e.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "font-mono font-bold text-lg",
                                        style: { color: C },
                                        children: ie.code,
                                      }),
                                      e.jsxs("p", {
                                        className: `text-sm ${i.textSecondary}`,
                                        children: [
                                          ie.discountType === "percentage" &&
                                            `${ie.discountValue}% de desconto`,
                                          ie.discountType === "fixed" &&
                                            `${k(
                                              ie.discountValue
                                            )} de desconto`,
                                          ie.discountType === "freeShipping" &&
                                            "Frete Grátis",
                                        ],
                                      }),
                                      ie.minValue > 0 &&
                                        e.jsxs("p", {
                                          className: `text-xs ${i.textMuted}`,
                                          children: [
                                            "Mínimo: ",
                                            k(ie.minValue),
                                          ],
                                        }),
                                    ],
                                  }),
                                  e.jsx(B, {
                                    size: "sm",
                                    onClick: () => be(ie.code),
                                    style: {
                                      backgroundColor:
                                        I === ie.code ? "#22c55e" : C,
                                      color: "#fff",
                                    },
                                    children:
                                      I === ie.code
                                        ? e.jsx(We, { className: "w-4 h-4" })
                                        : e.jsx(_s, { className: "w-4 h-4" }),
                                  }),
                                ],
                              }),
                            },
                            ie.id
                          )
                        ),
                }),
              ],
            }),
          ],
        });
      },
      Bt = o?.os_print_settings?.catalog_promo_enabled || !1,
      Ys = o?.os_print_settings?.catalog_promo_end_date || "",
      Ft = ({ endDate: s }) => {
        const [i, C] = l.useState({ hours: 0, minutes: 0, seconds: 0 });
        l.useEffect(() => {
          const F = () => {
            const be = new Date(s).getTime(),
              ie = new Date().getTime(),
              ye = be - ie;
            if (ye > 0) {
              const Me = Math.floor(ye / 36e5),
                Bs = Math.floor((ye % (1e3 * 60 * 60)) / (1e3 * 60)),
                gs = Math.floor((ye % (1e3 * 60)) / 1e3);
              C({ hours: Me, minutes: Bs, seconds: gs });
            } else C({ hours: 0, minutes: 0, seconds: 0 });
          };
          F();
          const ae = setInterval(F, 1e3);
          return () => clearInterval(ae);
        }, [s]);
        const k = (F) => F.toString().padStart(2, "0");
        return i.hours > 0 || i.minutes > 0 || i.seconds > 0
          ? e.jsxs("div", {
              className:
                "flex items-center gap-1 text-xs font-bold text-red-500",
              children: [
                e.jsx(ma, { className: "w-3 h-3" }),
                e.jsxs("span", {
                  children: [k(i.hours), ":", k(i.minutes), ":", k(i.seconds)],
                }),
              ],
            })
          : null;
      },
      Ot = () =>
        e.jsxs(bs, {
          className: `overflow-hidden ${t.bgCard} border ${t.border}`,
          children: [
            e.jsx("div", {
              className: `aspect-square ${P ? "bg-zinc-800" : "bg-gray-200"}`,
              children: e.jsx(De, { className: "w-full h-full" }),
            }),
            e.jsxs("div", {
              className: "p-3 space-y-2",
              children: [
                e.jsx(De, { className: "h-4 w-3/4" }),
                e.jsx(De, { className: "h-3 w-1/2" }),
                e.jsx(De, { className: "h-6 w-2/3" }),
                e.jsx(De, { className: "h-9 w-full" }),
              ],
            }),
          ],
        });
    if (b && Z)
      return e.jsxs("div", {
        className: `min-h-screen ${t.bg}`,
        children: [
          e.jsx("div", {
            className: `${t.bgHeader} border-b ${t.border} p-4`,
            children: e.jsxs("div", {
              className: "container mx-auto flex items-center gap-4",
              children: [
                e.jsx(De, { className: "h-12 w-12 rounded-xl" }),
                e.jsxs("div", {
                  className: "space-y-2 flex-1",
                  children: [
                    e.jsx(De, { className: "h-5 w-40" }),
                    e.jsx(De, { className: "h-4 w-60" }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: `${t.bgBanner} border-b ${t.border} py-4`,
            children: e.jsx("div", {
              className: "container mx-auto px-4 flex gap-2",
              children: [1, 2, 3, 4, 5].map((s) =>
                e.jsx(De, { className: "h-9 w-24 rounded-full" }, s)
              ),
            }),
          }),
          e.jsx("main", {
            className: "container mx-auto px-4 py-6",
            children: e.jsx("div", {
              className:
                "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4",
              children: [1, 2, 3, 4, 5, 6, 7, 8].map((s) => e.jsx(Ot, {}, s)),
            }),
          }),
        ],
      });
    if (b)
      return e.jsx("div", {
        className: `min-h-screen ${t.bg} flex items-center justify-center`,
        children: e.jsxs("div", {
          className: "animate-pulse flex flex-col items-center gap-4",
          children: [
            e.jsx("div", {
              className:
                "w-20 h-20 rounded-full animate-bounce flex items-center justify-center",
              style: { background: `linear-gradient(135deg, ${f}, ${we})` },
              children: e.jsx(ts, { className: "w-10 h-10 text-white" }),
            }),
            e.jsx("p", {
              className: t.textSecondary,
              children: "Carregando catálogo...",
            }),
          ],
        }),
      });
    if (d)
      return e.jsx("div", {
        className: `min-h-screen ${t.bg} flex items-center justify-center p-4`,
        children: e.jsxs(bs, {
          className: `p-8 text-center max-w-md ${t.bgCard} ${t.border}`,
          children: [
            e.jsx(Fe, { className: `w-16 h-16 mx-auto mb-4 ${t.textMuted}` }),
            e.jsx("h1", {
              className: `text-xl font-bold mb-2 ${t.text}`,
              children: "Catálogo não encontrado",
            }),
            e.jsx("p", { className: t.textSecondary, children: d }),
          ],
        }),
      });
    const Xe = o?.company_name || "Loja Virtual";
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(ra, {
          children: [
            e.jsxs("title", { children: [Xe, " - Catálogo Virtual"] }),
            e.jsx("meta", {
              name: "description",
              content: `Catálogo de produtos da ${Xe}`,
            }),
            o?.company_logo &&
              e.jsx("link", {
                rel: "icon",
                type: "image/png",
                href: o.company_logo,
              }),
          ],
        }),
        e.jsxs("div", {
          className: `min-h-screen ${t.bg}`,
          children: [
            ce &&
              e.jsx("div", {
                className:
                  "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300",
                onClick: () => js(ce.id),
                children: e.jsxs("div", {
                  className:
                    "relative w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300",
                  onClick: (s) => s.stopPropagation(),
                  style: { backgroundColor: ce.backgroundColor || f },
                  children: [
                    e.jsx("button", {
                      onClick: () => js(ce.id),
                      className:
                        "absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors z-10",
                      children: e.jsx(Te, { className: "w-4 h-4" }),
                    }),
                    e.jsxs("div", {
                      className: "p-6 sm:p-8 text-center text-white",
                      children: [
                        e.jsxs("div", {
                          className: "text-3xl mb-3",
                          children: [
                            ce.type === "promo" && "🔥",
                            ce.type === "coupon" && "🎟️",
                            ce.type === "newProduct" && "✨",
                            ce.type === "custom" && "📢",
                          ],
                        }),
                        e.jsx("h3", {
                          className:
                            "text-xl sm:text-2xl font-bold mb-2 drop-shadow-md",
                          children: ce.title,
                        }),
                        e.jsx("p", {
                          className:
                            "text-sm sm:text-base opacity-90 mb-5 leading-relaxed",
                          children: ce.description,
                        }),
                        ce.buttonText &&
                          e.jsx("button", {
                            onClick: () => {
                              ce.buttonLink &&
                                window.open(ce.buttonLink, "_blank"),
                                js(ce.id);
                            },
                            className:
                              "px-6 py-3 rounded-xl font-bold text-sm bg-white shadow-lg hover:scale-105 transition-transform active:scale-95",
                            style: { color: ce.backgroundColor || f },
                            children: ce.buttonText,
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            !At &&
              e.jsxs("div", {
                className: "py-2 overflow-hidden text-white relative",
                style: { background: `linear-gradient(135deg, ${f}, ${we})` },
                children: [
                  e.jsx("div", {
                    className: "absolute inset-0 animate-shimmer opacity-30",
                  }),
                  e.jsxs("div", {
                    className:
                      "animate-marquee whitespace-nowrap flex items-center gap-8 sm:gap-12 text-xs sm:text-sm font-semibold relative z-10",
                    children: [
                      e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(hs, { className: "w-3 h-3 sm:w-4 sm:h-4" }),
                          " ",
                          O.freeShipping,
                          " ",
                          O.freeShippingValue,
                        ],
                      }),
                      e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(is, {
                            className: "w-3 h-3 sm:w-4 sm:h-4 text-yellow-300",
                          }),
                          " ",
                          O.flashSales,
                        ],
                      }),
                      e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(qe, { className: "w-3 h-3 sm:w-4 sm:h-4" }),
                          " ",
                          O.securePurchase,
                        ],
                      }),
                      e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(St, { className: "w-3 h-3 sm:w-4 sm:h-4" }),
                          " ",
                          O.bestPrices,
                        ],
                      }),
                      e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(ja, { className: "w-3 h-3 sm:w-4 sm:h-4" }),
                          " ",
                          Tt ? O.mbwayDiscount : O.pixDiscount,
                        ],
                      }),
                      e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(hs, { className: "w-3 h-3 sm:w-4 sm:h-4" }),
                          " ",
                          O.freeShipping,
                          " ",
                          O.freeShippingValue,
                        ],
                      }),
                      e.jsxs("span", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(is, {
                            className: "w-3 h-3 sm:w-4 sm:h-4 text-yellow-300",
                          }),
                          " ",
                          O.flashSales,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            e.jsx("header", {
              className: `${Et.wrapper} ${t.bgHeader} ${t.border}`,
              children: e.jsxs("div", {
                className: "container mx-auto px-3 sm:px-4 py-1.5 sm:py-2",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between gap-2 sm:gap-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 sm:gap-3 flex-shrink-0",
                        children: [
                          o?.company_logo
                            ? e.jsx("div", {
                                className:
                                  "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-xl bg-white/95 flex items-center justify-center shadow-md ring-1 ring-black/5 overflow-hidden p-0.5",
                                children: e.jsx("img", {
                                  src: o.company_logo,
                                  alt: Xe,
                                  className: "h-full w-full object-contain",
                                }),
                              })
                            : e.jsx("div", {
                                className:
                                  "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-md",
                                style: {
                                  background: `linear-gradient(135deg, ${f}, ${we})`,
                                },
                                children: e.jsx(Ws, {
                                  className:
                                    "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white",
                                }),
                              }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h1", {
                                className: `text-sm sm:text-lg md:text-xl font-bold ${t.text} leading-tight`,
                                children: Xe,
                              }),
                              e.jsx("p", {
                                className: `text-[9px] sm:text-[10px] ${t.textMuted} hidden sm:block`,
                                children: "Catálogo Virtual",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "flex-1 max-w-xl hidden md:flex items-center gap-2",
                        children: [
                          e.jsxs("div", {
                            className: "relative flex-1",
                            children: [
                              e.jsx(Cs, {
                                className: `absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${t.textMuted}`,
                              }),
                              e.jsx(ue, {
                                placeholder: O.searchPlaceholder,
                                value: A,
                                onChange: (s) => y(s.target.value),
                                className: `pl-12 pr-4 h-11 ${t.bgInput} ${t.border} ${t.text} rounded-xl`,
                              }),
                              A &&
                                e.jsx(B, {
                                  size: "icon",
                                  variant: "ghost",
                                  className:
                                    "absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7",
                                  onClick: () => y(""),
                                  children: e.jsx(Te, { className: "w-4 h-4" }),
                                }),
                            ],
                          }),
                          e.jsx(lt, {
                            products: rs,
                            onFilterChange: q,
                            primaryColor: f,
                            isDarkTheme: P,
                            catalogLanguage: R,
                            formatPrice: he,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-1 sm:gap-2",
                        children: [
                          e.jsxs(Ke, {
                            children: [
                              e.jsx(Vs, {
                                asChild: !0,
                                children: e.jsxs(B, {
                                  variant: "ghost",
                                  size: "sm",
                                  className: `hidden sm:flex gap-2 ${t.text} ${t.hoverBg}`,
                                  children: [
                                    e.jsx(Ce, {
                                      className: "w-4 h-4",
                                      style: { color: f },
                                    }),
                                    e.jsx("span", {
                                      className: "hidden lg:inline",
                                      children:
                                        R === "en-US"
                                          ? "Track Order"
                                          : "Rastrear",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs(Ye, {
                                className: `${t.bgCard} ${t.border} ${t.text} w-[95vw] max-w-md max-h-[85vh] overflow-y-auto rounded-2xl`,
                                children: [
                                  e.jsx(ds, {
                                    children: e.jsx(ms, {
                                      className: t.text,
                                      children:
                                        R === "en-US"
                                          ? "Track Your Order"
                                          : "Acompanhar Pedido",
                                    }),
                                  }),
                                  e.jsx(nt, {
                                    userId: S || "",
                                    primaryColor: f,
                                    isDarkTheme: P,
                                    formatPrice: he,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx(Rt, {
                            coupons: Rs,
                            theme: t,
                            primaryColor: f,
                            formatPrice: he,
                          }),
                          (o?.company_phone || o?.catalog_whatsapp) &&
                            e.jsxs(e.Fragment, {
                              children: [
                                e.jsxs(B, {
                                  variant: "ghost",
                                  size: "sm",
                                  onClick: as,
                                  className: `hidden sm:flex gap-2 ${t.text} ${t.hoverBg}`,
                                  children: [
                                    e.jsx(Ze, {
                                      className: "w-4 h-4",
                                      style: { color: f },
                                    }),
                                    e.jsx("span", {
                                      className: "hidden lg:inline",
                                      children: O.contact,
                                    }),
                                  ],
                                }),
                                e.jsx(Ra, {
                                  whatsappNumber:
                                    o?.catalog_whatsapp ||
                                    o?.company_phone ||
                                    "",
                                  companyName: Xe,
                                  primaryColor: f,
                                  buttonColor: Be,
                                  isDarkTheme: P,
                                }),
                              ],
                            }),
                          e.jsxs(vt, {
                            children: [
                              e.jsx(yt, {
                                asChild: !0,
                                children: e.jsxs(B, {
                                  variant: "ghost",
                                  size: "icon",
                                  className: `relative ${t.text} ${t.hoverBg}`,
                                  children: [
                                    e.jsx(cs, { className: "w-5 h-5" }),
                                    fe > 0 &&
                                      e.jsx("span", {
                                        className:
                                          "absolute -top-1 -right-1 min-w-[20px] h-5 text-xs font-bold rounded-full flex items-center justify-center px-1",
                                        style: {
                                          backgroundColor: Be,
                                          color: os,
                                        },
                                        children: fe,
                                      }),
                                  ],
                                }),
                              }),
                              e.jsxs(wt, {
                                className: `${t.bgCard} ${t.border} ${t.text} w-full sm:max-w-md`,
                                children: [
                                  e.jsx($t, {
                                    children: e.jsxs(Ct, {
                                      className: `${t.text} flex items-center gap-2`,
                                      children: [
                                        e.jsx(cs, {
                                          className: "w-5 h-5",
                                          style: { color: f },
                                        }),
                                        O.cart,
                                        " (",
                                        fe,
                                        ")",
                                      ],
                                    }),
                                  }),
                                  e.jsx(Xs, {
                                    className: "h-[55vh] mt-4 pr-4",
                                    children:
                                      c.length === 0
                                        ? e.jsxs("div", {
                                            className: "text-center py-12",
                                            children: [
                                              e.jsx(ts, {
                                                className: `w-20 h-20 mx-auto mb-4 ${t.textMuted}`,
                                              }),
                                              e.jsx("p", {
                                                className: `text-lg ${t.textSecondary}`,
                                                children: O.emptyCart,
                                              }),
                                              e.jsx("p", {
                                                className: `text-sm mt-2 ${t.textMuted}`,
                                                children:
                                                  O.emptyCartDescription,
                                              }),
                                            ],
                                          })
                                        : e.jsx("div", {
                                            className: "space-y-3",
                                            children: c.map((s) =>
                                              e.jsxs(
                                                "div",
                                                {
                                                  className: `flex gap-3 p-3 ${
                                                    P
                                                      ? "bg-zinc-800/50"
                                                      : "bg-gray-100"
                                                  } rounded-xl border ${
                                                    t.border
                                                  }`,
                                                  children: [
                                                    e.jsx("div", {
                                                      className: `w-16 h-16 rounded-lg ${
                                                        P
                                                          ? "bg-zinc-800"
                                                          : "bg-gray-200"
                                                      } overflow-hidden flex-shrink-0`,
                                                      children: s.product
                                                        .image_url
                                                        ? e.jsx("img", {
                                                            src: s.product
                                                              .image_url,
                                                            alt: s.product.name,
                                                            className:
                                                              "w-full h-full object-contain p-1",
                                                          })
                                                        : e.jsx("div", {
                                                            className:
                                                              "w-full h-full flex items-center justify-center",
                                                            children: e.jsx(
                                                              Fe,
                                                              {
                                                                className: `w-6 h-6 ${t.textMuted}`,
                                                              }
                                                            ),
                                                          }),
                                                    }),
                                                    e.jsxs("div", {
                                                      className:
                                                        "flex-1 min-w-0",
                                                      children: [
                                                        e.jsx("h4", {
                                                          className: `font-medium text-sm truncate ${t.text}`,
                                                          children:
                                                            s.product.name,
                                                        }),
                                                        e.jsx("p", {
                                                          className:
                                                            "font-bold",
                                                          style: { color: f },
                                                          children: he(
                                                            s.product.sale_price
                                                          ),
                                                        }),
                                                        e.jsxs("div", {
                                                          className:
                                                            "flex items-center gap-2 mt-2",
                                                          children: [
                                                            e.jsx(B, {
                                                              size: "icon",
                                                              variant:
                                                                "outline",
                                                              className: `w-6 h-6 ${t.border} ${t.hoverBg}`,
                                                              onClick: () =>
                                                                us(
                                                                  s.product.id,
                                                                  -1
                                                                ),
                                                              children: e.jsx(
                                                                ua,
                                                                {
                                                                  className:
                                                                    "w-3 h-3",
                                                                }
                                                              ),
                                                            }),
                                                            e.jsx("span", {
                                                              className: `w-6 text-center text-sm ${t.text}`,
                                                              children:
                                                                s.quantity,
                                                            }),
                                                            e.jsx(B, {
                                                              size: "icon",
                                                              variant:
                                                                "outline",
                                                              className: `w-6 h-6 ${t.border} ${t.hoverBg}`,
                                                              onClick: () =>
                                                                us(
                                                                  s.product.id,
                                                                  1
                                                                ),
                                                              children: e.jsx(
                                                                na,
                                                                {
                                                                  className:
                                                                    "w-3 h-3",
                                                                }
                                                              ),
                                                            }),
                                                            e.jsx(B, {
                                                              size: "icon",
                                                              variant: "ghost",
                                                              className:
                                                                "w-6 h-6 text-red-500 hover:text-red-400 hover:bg-red-500/10 ml-auto",
                                                              onClick: () =>
                                                                Ts(
                                                                  s.product.id
                                                                ),
                                                              children: e.jsx(
                                                                oa,
                                                                {
                                                                  className:
                                                                    "w-4 h-4",
                                                                }
                                                              ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                s.product.id
                                              )
                                            ),
                                          }),
                                  }),
                                  c.length > 0 &&
                                    e.jsxs("div", {
                                      className: `border-t ${t.border} pt-4 mt-4 space-y-4`,
                                      children: [
                                        me < 99 &&
                                          e.jsxs("div", {
                                            className: `p-3 rounded-xl ${
                                              P
                                                ? "bg-emerald-500/10 border border-emerald-500/20"
                                                : "bg-emerald-50 border border-emerald-100"
                                            }`,
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-2 mb-1.5",
                                                children: [
                                                  e.jsx(Ce, {
                                                    className:
                                                      "w-4 h-4 text-emerald-500",
                                                  }),
                                                  e.jsxs("span", {
                                                    className: `text-xs font-semibold ${t.text}`,
                                                    children: [
                                                      "Falta ",
                                                      e.jsx("span", {
                                                        className:
                                                          "text-emerald-500 font-bold",
                                                        children: he(99 - me),
                                                      }),
                                                      " para frete grátis!",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              e.jsx("div", {
                                                className: `h-2 rounded-full overflow-hidden ${
                                                  P
                                                    ? "bg-zinc-700"
                                                    : "bg-gray-200"
                                                }`,
                                                children: e.jsx("div", {
                                                  className:
                                                    "h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500",
                                                  style: {
                                                    width: `${Math.min(
                                                      (me / 99) * 100,
                                                      100
                                                    )}%`,
                                                  },
                                                }),
                                              }),
                                            ],
                                          }),
                                        me >= 99 &&
                                          e.jsxs("div", {
                                            className: `p-2.5 rounded-xl flex items-center gap-2 ${
                                              P
                                                ? "bg-emerald-500/10 border border-emerald-500/20"
                                                : "bg-emerald-50 border border-emerald-100"
                                            }`,
                                            children: [
                                              e.jsx(Ce, {
                                                className:
                                                  "w-4 h-4 text-emerald-500",
                                              }),
                                              e.jsx("span", {
                                                className:
                                                  "text-xs font-bold text-emerald-500",
                                                children:
                                                  "🎉 Frete Grátis aplicado!",
                                              }),
                                            ],
                                          }),
                                        e.jsxs("div", {
                                          className: "space-y-2",
                                          children: [
                                            e.jsxs("div", {
                                              className: `flex justify-between text-sm ${t.textSecondary}`,
                                              children: [
                                                e.jsxs("span", {
                                                  children: [O.subtotal, ":"],
                                                }),
                                                e.jsx("span", {
                                                  children: he(me),
                                                }),
                                              ],
                                            }),
                                            me >= 99 &&
                                              e.jsxs("div", {
                                                className:
                                                  "flex justify-between text-sm text-emerald-500",
                                                children: [
                                                  e.jsx("span", {
                                                    children: "Frete:",
                                                  }),
                                                  e.jsx("span", {
                                                    className: "font-bold",
                                                    children: "Grátis",
                                                  }),
                                                ],
                                              }),
                                            e.jsxs("div", {
                                              className:
                                                "flex justify-between items-center",
                                              children: [
                                                e.jsxs("span", {
                                                  className: `text-lg font-semibold ${t.text}`,
                                                  children: [O.total, ":"],
                                                }),
                                                e.jsx("span", {
                                                  className:
                                                    "font-bold text-2xl",
                                                  style: { color: f },
                                                  children: he(me),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsxs(B, {
                                          onClick: async () => {
                                            await v(), T(!0);
                                          },
                                          className:
                                            "w-full h-12 gap-2 font-semibold shadow-lg",
                                          style: {
                                            backgroundColor: Be,
                                            color: os,
                                          },
                                          children: [
                                            e.jsx(cs, { className: "w-5 h-5" }),
                                            O.checkout,
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
                    ],
                  }),
                  e.jsx("div", {
                    className: "mt-2 md:hidden space-y-2",
                    children: e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsxs("div", {
                          className: "relative flex-1",
                          children: [
                            e.jsx(Cs, {
                              className: `absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${t.textMuted}`,
                            }),
                            e.jsx(ue, {
                              placeholder: O.searchPlaceholder,
                              value: A,
                              onChange: (s) => y(s.target.value),
                              className: `pl-9 h-9 text-sm ${t.bgInput} ${t.border} ${t.text} rounded-lg`,
                            }),
                          ],
                        }),
                        e.jsx(lt, {
                          products: rs,
                          onFilterChange: q,
                          primaryColor: f,
                          isDarkTheme: P,
                          catalogLanguage: R,
                          formatPrice: he,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (() => {
              const s = o?.os_print_settings?.catalog_main_banners || [],
                i = {
                  id: "legacy",
                  desktopImage:
                    o?.os_print_settings?.catalog_top_banner_desktop || "",
                  mobileImage:
                    o?.os_print_settings?.catalog_top_banner_mobile || "",
                  link: o?.os_print_settings?.catalog_top_banner_link || "",
                },
                C = i.desktopImage || i.mobileImage ? [i, ...s] : s;
              return C.length === 0
                ? null
                : e.jsx(Ta, {
                    banners: C,
                    primaryColor: f,
                    autoPlayInterval: 5e3,
                  });
            })(),
            (o?.os_print_settings?.catalog_banners || []).filter(
              (s) => s.isActive && (s.desktopImage || s.mobileImage)
            ).length > 0 &&
              e.jsx("div", {
                className: `${t.bgBanner} border-b ${t.border}`,
                children: e.jsx("div", {
                  className: "container mx-auto px-3 sm:px-4 py-4",
                  children: e.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                    children: (o?.os_print_settings?.catalog_banners || [])
                      .filter(
                        (s) => s.isActive && (s.desktopImage || s.mobileImage)
                      )
                      .map((s) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "rounded-lg overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform",
                            onClick: () =>
                              s.link && window.open(s.link, "_blank"),
                            children: [
                              e.jsx("img", {
                                src: s.desktopImage || s.mobileImage,
                                alt: s.title,
                                className:
                                  "w-full h-24 md:h-32 object-cover hidden md:block",
                              }),
                              e.jsx("img", {
                                src: s.mobileImage || s.desktopImage,
                                alt: s.title,
                                className: "w-full h-20 object-cover md:hidden",
                              }),
                            ],
                          },
                          s.id
                        )
                      ),
                  }),
                }),
              }),
            !o?.catalog_hide_brands &&
              e.jsx(Ma, { isDarkTheme: P, primaryColor: f }),
            (() => {
              const s = o?.os_print_settings?.catalog_show_round_categories,
                i = o?.os_print_settings?.catalog_category_cards || [];
              return !s || i.length === 0
                ? null
                : e.jsx("div", {
                    className: `${t.bgBanner} border-b ${t.border}`,
                    children: e.jsxs("div", {
                      className: "container mx-auto px-3 sm:px-4 py-4 sm:py-6",
                      children: [
                        e.jsx("p", {
                          className: `text-[10px] sm:text-xs font-semibold uppercase tracking-widest ${t.textMuted} mb-3 sm:mb-4 animate-slide-up`,
                          children: "🏪 Navegue por categorias",
                        }),
                        e.jsxs("div", {
                          className:
                            "grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4",
                          children: [
                            e.jsxs("button", {
                              onClick: () => {
                                Je(null), $(null), L(null);
                              },
                              className:
                                "flex flex-col items-center gap-2 group transition-all duration-300 category-glow animate-category-bounce",
                              children: [
                                e.jsx("div", {
                                  className: `w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center transition-all duration-300 ${
                                    de === null
                                      ? "ring-[3px] shadow-lg scale-110"
                                      : "ring-1 group-hover:ring-2 group-hover:shadow-md group-hover:scale-105"
                                  } ${
                                    P
                                      ? "bg-zinc-800 ring-zinc-600"
                                      : "bg-gray-100 ring-gray-200"
                                  }`,
                                  style:
                                    de === null
                                      ? {
                                          borderColor: f,
                                          boxShadow: `0 0 0 3px ${f}40`,
                                        }
                                      : {},
                                  children: e.jsx(Fe, {
                                    className: `w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110 ${
                                      de === null ? "" : t.textMuted
                                    }`,
                                    style: de === null ? { color: f } : {},
                                  }),
                                }),
                                e.jsx("span", {
                                  className: `text-[10px] sm:text-[11px] font-medium leading-tight text-center w-full line-clamp-2 transition-colors duration-200 ${
                                    de === null ? "font-bold" : t.textSecondary
                                  }`,
                                  style: de === null ? { color: f } : {},
                                  children: "Todos",
                                }),
                              ],
                            }),
                            i.map((C, k) =>
                              e.jsxs(
                                "button",
                                {
                                  onClick: () => {
                                    Je(de === C.id ? null : C.id),
                                      $(null),
                                      L(null);
                                  },
                                  className:
                                    "flex flex-col items-center gap-2 group transition-all duration-300 category-glow animate-category-bounce opacity-0 animate-fade-in-scale",
                                  style: {
                                    animationDelay: `${(k + 1) * 0.08}s`,
                                    animationFillMode: "forwards",
                                  },
                                  children: [
                                    e.jsx("div", {
                                      className: `w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-full overflow-hidden transition-all duration-300 ${
                                        de === C.id
                                          ? "ring-[3px] shadow-lg scale-110"
                                          : "ring-1 group-hover:ring-2 group-hover:shadow-md group-hover:scale-105"
                                      } ${
                                        P
                                          ? "bg-zinc-800 ring-zinc-600"
                                          : "bg-gray-100 ring-gray-200"
                                      }`,
                                      style:
                                        de === C.id
                                          ? { boxShadow: `0 0 0 3px ${f}40` }
                                          : {},
                                      children: C.image
                                        ? e.jsx("img", {
                                            src: C.image,
                                            alt: C.name,
                                            className:
                                              "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                                            loading: "lazy",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "w-full h-full flex items-center justify-center",
                                            children: e.jsx(Fe, {
                                              className: `w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110 ${t.textMuted}`,
                                            }),
                                          }),
                                    }),
                                    e.jsx("span", {
                                      className: `text-[10px] sm:text-[11px] font-medium leading-tight text-center w-full line-clamp-2 transition-colors duration-200 ${
                                        de === C.id
                                          ? "font-bold"
                                          : t.textSecondary
                                      }`,
                                      style: de === C.id ? { color: f } : {},
                                      children: C.name,
                                    }),
                                  ],
                                },
                                C.id
                              )
                            ),
                          ],
                        }),
                      ],
                    }),
                  });
            })(),
            vs.length > 0 &&
              e.jsx("div", {
                className: `${t.bgBanner} border-b ${t.border} py-3 sm:py-5`,
                children: e.jsxs("div", {
                  className: "container mx-auto px-3 sm:px-4",
                  children: [
                    e.jsx("p", {
                      className: `text-[10px] sm:text-xs font-semibold uppercase tracking-widest ${t.textMuted} mb-2 sm:mb-3 animate-slide-up`,
                      children:
                        R === "en-US" ? "🏷️ Categories" : "🏷️ Categorias",
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0 sm:flex-wrap",
                      children: [
                        e.jsxs("button", {
                          onClick: () => {
                            $(null), L(null);
                          },
                          className: `rounded-xl h-9 sm:h-11 px-4 sm:px-5 text-[11px] sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 sm:gap-2 border-2 hover:scale-[1.05] active:scale-[0.97] ${
                            U === null
                              ? "text-white shadow-lg scale-[1.03]"
                              : `${t.border} ${t.text}`
                          }`,
                          style:
                            U === null
                              ? { backgroundColor: f, borderColor: f }
                              : {},
                          children: [
                            e.jsx("span", {
                              className: "text-sm sm:text-base",
                              children: "🛍️",
                            }),
                            " ",
                            O.allCategories,
                          ],
                        }),
                        vs.map((s, i) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => {
                                $(s), L(null);
                              },
                              className: `rounded-xl h-9 sm:h-11 px-4 sm:px-5 text-[11px] sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 flex items-center gap-1.5 sm:gap-2 border-2 hover:scale-[1.05] active:scale-[0.97] opacity-0 animate-fade-in-scale ${
                                U === s
                                  ? "text-white shadow-lg scale-[1.03]"
                                  : `${t.border} ${t.text}`
                              }`,
                              style: {
                                ...(U === s
                                  ? { backgroundColor: f, borderColor: f }
                                  : {}),
                                animationDelay: `${i * 0.06}s`,
                                animationFillMode: "forwards",
                              },
                              children: [
                                e.jsx("span", {
                                  className: "text-sm sm:text-base",
                                  children: Va[s] || "📦",
                                }),
                                " ",
                                ot(s, R),
                              ],
                            },
                            s
                          )
                        ),
                        U &&
                          ls.length > 0 &&
                          e.jsxs(e.Fragment, {
                            children: [
                              e.jsx("div", {
                                className: `w-px h-7 mx-1 ${
                                  P ? "bg-zinc-700" : "bg-gray-300"
                                }`,
                              }),
                              ls.map((s) =>
                                e.jsx(
                                  "button",
                                  {
                                    onClick: () => L(s === g ? null : s),
                                    className: `rounded-xl h-9 sm:h-11 px-3 sm:px-4 text-[11px] sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 border-2 hover:scale-[1.05] active:scale-[0.97] animate-slide-left ${
                                      g === s
                                        ? "text-white shadow-md"
                                        : `${t.border} ${t.text}`
                                    }`,
                                    style:
                                      g === s
                                        ? {
                                            backgroundColor: we,
                                            borderColor: we,
                                          }
                                        : {},
                                    children: it[s] || s,
                                  },
                                  s
                                )
                              ),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            e.jsx("div", {
              className: `${t.bgBanner} border-b ${t.border}`,
              children: e.jsxs("div", {
                className: "container mx-auto px-3 sm:px-4 py-2.5 sm:py-4",
                children: [
                  e.jsxs("div", {
                    className:
                      "mb-2 sm:hidden flex items-center rounded-xl border px-3 h-9 w-full bg-background/60 backdrop-blur-sm",
                    children: [
                      e.jsx("span", {
                        className: `text-[11px] mr-2 ${t.textMuted}`,
                        children: "Ordenar:",
                      }),
                      e.jsxs("select", {
                        value: $e,
                        onChange: (s) => Ae(s.target.value),
                        className: `text-[11px] bg-transparent outline-none ${t.text} w-full`,
                        children: [
                          e.jsx("option", {
                            value: "relevance",
                            children: "Relevância",
                          }),
                          e.jsx("option", {
                            value: "price-asc",
                            children: "Menor preço",
                          }),
                          e.jsx("option", {
                            value: "price-desc",
                            children: "Maior preço",
                          }),
                          e.jsx("option", {
                            value: "name",
                            children: "Nome (A-Z)",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3",
                    children: [
                      {
                        icon: Ce,
                        title: O.fastDelivery,
                        desc: O.deliveryLocation,
                        gradientFrom: `${f}25`,
                        gradientTo: `${f}10`,
                        iconColor: f,
                      },
                      {
                        icon: qe,
                        title: O.securePayment,
                        desc: O.dataProtected,
                        gradientFrom: "rgb(34 197 94 / 0.2)",
                        gradientTo: "rgb(34 197 94 / 0.05)",
                        iconColor: "#22c55e",
                      },
                      ...(zt
                        ? [
                            {
                              icon: je,
                              title: O.installments,
                              desc: Mt,
                              gradientFrom: "rgb(59 130 246 / 0.2)",
                              gradientTo: "rgb(59 130 246 / 0.05)",
                              iconColor: "#3b82f6",
                            },
                          ]
                        : []),
                      {
                        icon: mt,
                        title: O.warranty,
                        desc: O.factoryWarranty,
                        gradientFrom: "rgb(168 85 247 / 0.2)",
                        gradientTo: "rgb(168 85 247 / 0.05)",
                        iconColor: "#a855f7",
                      },
                    ].map((s, i) =>
                      e.jsxs(
                        "div",
                        {
                          className: `flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl ${
                            P
                              ? "bg-zinc-800/50 border border-zinc-700/50"
                              : "bg-white border border-gray-100 shadow-sm"
                          } transition-all hover:scale-[1.03] hover:shadow-md opacity-0 animate-trust-badge`,
                          style: {
                            animationDelay: `${i * 0.1}s`,
                            animationFillMode: "forwards",
                          },
                          children: [
                            e.jsx("div", {
                              className:
                                "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                              style: {
                                background: `linear-gradient(135deg, ${s.gradientFrom}, ${s.gradientTo})`,
                              },
                              children: e.jsx(s.icon, {
                                className: "w-4 h-4 sm:w-5 sm:h-5",
                                style: { color: s.iconColor },
                              }),
                            }),
                            e.jsxs("div", {
                              className: "min-w-0",
                              children: [
                                e.jsx("p", {
                                  className: `text-[10px] sm:text-sm font-bold ${t.text} leading-tight`,
                                  children: s.title,
                                }),
                                e.jsx("p", {
                                  className: `text-[9px] sm:text-xs ${t.textMuted} leading-tight`,
                                  children: s.desc,
                                }),
                              ],
                            }),
                          ],
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: `${t.bgBanner} border-b ${t.border}`,
              children: e.jsx("div", {
                className: "container mx-auto px-3 sm:px-4 py-2",
                children: e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsxs("div", {
                          className: "relative flex items-center",
                          children: [
                            e.jsx("span", {
                              className:
                                "w-2 h-2 bg-red-500 rounded-full animate-pulse",
                            }),
                            e.jsx("span", {
                              className:
                                "w-2 h-2 bg-red-500 rounded-full animate-pulse absolute opacity-50 scale-150",
                            }),
                          ],
                        }),
                        e.jsxs("span", {
                          className: `text-[10px] sm:text-xs font-medium ${t.textMuted}`,
                          children: [
                            e.jsx(ia, { className: "w-3 h-3 inline mr-1" }),
                            e.jsx("span", {
                              className: "font-bold",
                              style: { color: f },
                              children: Re,
                            }),
                            " ",
                            R === "en-US"
                              ? "people viewing now"
                              : "pessoas vendo agora",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: `flex items-center gap-1.5 text-[10px] sm:text-xs ${t.textMuted}`,
                      children: [
                        e.jsx(xt, {
                          className: "w-3 h-3",
                          style: { color: f },
                        }),
                        e.jsx("span", {
                          className: "font-semibold",
                          children:
                            R === "en-US"
                              ? "98% positive ratings"
                              : "98% avaliações positivas",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            e.jsxs("main", {
              className: "container mx-auto px-2 sm:px-4 py-4 sm:py-8",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center justify-between mb-3 sm:mb-6 px-1 sm:px-0",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("h2", {
                          className: `text-sm sm:text-xl font-bold ${t.text} flex items-center gap-1.5 sm:gap-2`,
                          children: z
                            ? e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(is, {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    style: { color: f },
                                  }),
                                  R === "pt-BR" || R === "pt-PT"
                                    ? "Produtos em Oferta"
                                    : "Products on Sale",
                                ],
                              })
                            : e.jsxs(e.Fragment, {
                                children: [
                                  e.jsx(hs, {
                                    className: "w-4 h-4 sm:w-5 sm:h-5",
                                    style: { color: f },
                                  }),
                                  O.ourProducts,
                                ],
                              }),
                        }),
                        e.jsxs("p", {
                          className: `text-xs sm:text-sm ${t.textMuted} mt-0.5 sm:mt-1`,
                          children: [
                            p.length,
                            " ",
                            p.length !== 1
                              ? O.productsAvailable
                              : O.productAvailable,
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsxs("div", {
                          className: `hidden sm:flex items-center rounded-full border px-3 h-9 ${t.border} ${t.bgInput}`,
                          children: [
                            e.jsx("span", {
                              className: `text-xs mr-2 ${t.textMuted}`,
                              children: "Ordenar:",
                            }),
                            e.jsxs("select", {
                              value: $e,
                              onChange: (s) => Ae(s.target.value),
                              className: `text-xs bg-transparent outline-none ${t.text}`,
                              children: [
                                e.jsx("option", {
                                  value: "relevance",
                                  children: "Relevância",
                                }),
                                e.jsx("option", {
                                  value: "price-asc",
                                  children: "Menor preço",
                                }),
                                e.jsx("option", {
                                  value: "price-desc",
                                  children: "Maior preço",
                                }),
                                e.jsx("option", {
                                  value: "name",
                                  children: "Nome (A-Z)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (A || U || g || $e !== "relevance" || z) &&
                          e.jsxs(B, {
                            variant: "outline",
                            size: "sm",
                            className: `${t.border} ${t.text} ${t.hoverBg} rounded-full`,
                            onClick: () => {
                              y(""), $(null), L(null), N(!1), Ae("relevance");
                            },
                            children: [
                              e.jsx(Te, { className: "w-4 h-4 mr-1" }),
                              O.clearFilters,
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                p.length === 0
                  ? e.jsxs("div", {
                      className: "text-center py-20 animate-fade-in-scale",
                      children: [
                        e.jsx(ts, {
                          className: `w-24 h-24 mx-auto mb-6 ${t.textMuted} animate-bounce-gentle`,
                        }),
                        e.jsx("h2", {
                          className: `text-2xl font-bold mb-3 ${t.text}`,
                          children: O.noProductsFound,
                        }),
                        e.jsx("p", {
                          className: t.textMuted,
                          children: O.tryAnotherSearch,
                        }),
                        e.jsx(B, {
                          variant: "outline",
                          className: `mt-6 ${t.border} ${t.text} ${t.hoverBg} btn-animated`,
                          onClick: () => {
                            y(""), $(null), L(null), Ae("relevance");
                          },
                          children: O.viewAllProducts,
                        }),
                      ],
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx("div", {
                          className:
                            "grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-5 md:gap-6",
                          children: p.map((s, i) => {
                            const C = s.payment_methods || ["pix", "dinheiro"],
                              k = s.max_installments || 1,
                              I = C.includes("credito"),
                              F = s.quantity,
                              ae = a.includes(s.id),
                              be =
                                o?.catalog_weekly_offers?.includes(s.id) || !1,
                              ie = (((i + 3) * 9) % 120) + 12;
                            return e.jsxs(
                              bs,
                              {
                                className: `
                          ${t.bgCard} border ${t.border} 
                          group relative overflow-hidden flex flex-col
                          rounded-xl sm:rounded-2xl
                          product-card product-shine
                          ${
                            be
                              ? "ring-2 ring-offset-1 sm:ring-offset-2 ring-offset-transparent"
                              : ""
                          }
                          opacity-0 animate-card-reveal
                        `,
                                style: {
                                  animationDelay: `${i * 0.07}s`,
                                  animationFillMode: "forwards",
                                  ...(be ? { "--tw-ring-color": f } : {}),
                                },
                                children: [
                                  e.jsxs("div", {
                                    className: `aspect-[4/3] sm:aspect-square ${
                                      P
                                        ? "bg-gradient-to-br from-zinc-800/80 to-zinc-900"
                                        : "bg-gradient-to-br from-gray-50 to-white"
                                    } relative overflow-hidden cursor-pointer`,
                                    onClick: () => ys(s),
                                    children: [
                                      s.image_url
                                        ? e.jsx("img", {
                                            src: s.image_url,
                                            alt: s.name,
                                            className:
                                              "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-3 sm:p-5",
                                            loading: "lazy",
                                          })
                                        : e.jsx("div", {
                                            className:
                                              "w-full h-full flex items-center justify-center",
                                            children: e.jsx(Fe, {
                                              className: `w-10 h-10 sm:w-16 sm:h-16 ${t.textMuted}`,
                                            }),
                                          }),
                                      be &&
                                        e.jsxs("div", {
                                          className:
                                            "absolute top-0 left-0 right-0 z-10",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "text-white text-center py-1 sm:py-1.5 px-1 sm:px-2 text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1 shadow-lg",
                                              style: {
                                                background: `linear-gradient(135deg, ${f}, ${f}dd)`,
                                              },
                                              children: [
                                                e.jsx(is, {
                                                  className:
                                                    "w-3 h-3 sm:w-4 sm:h-4 animate-bounce-gentle",
                                                }),
                                                e.jsx("span", {
                                                  className: "truncate",
                                                  children: O.weeklyOffer,
                                                }),
                                                e.jsx(is, {
                                                  className:
                                                    "w-3 h-3 sm:w-4 sm:h-4 animate-bounce-gentle",
                                                }),
                                              ],
                                            }),
                                            Bt &&
                                              Ys &&
                                              e.jsx("div", {
                                                className:
                                                  "bg-black/80 text-white text-center py-0.5 sm:py-1 px-1 sm:px-2 text-[9px] sm:text-[10px]",
                                                children: e.jsx(Ft, {
                                                  endDate: Ys,
                                                }),
                                              }),
                                          ],
                                        }),
                                      e.jsx("button", {
                                        onClick: (ye) => {
                                          ye.stopPropagation(), Es(s.id);
                                        },
                                        className: `absolute top-1.5 right-1.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md z-20 ${
                                          ae
                                            ? "bg-gradient-to-r from-red-500 to-pink-500 text-white scale-110"
                                            : `${
                                                P
                                                  ? "bg-zinc-900/80"
                                                  : "bg-white/90"
                                              } backdrop-blur-sm ${
                                                t.textMuted
                                              } hover:text-red-500 hover:scale-110`
                                        }`,
                                        children: e.jsx(gt, {
                                          className: `w-3 h-3 sm:w-4 sm:h-4 ${
                                            ae ? "fill-current" : ""
                                          }`,
                                        }),
                                      }),
                                      s.brand &&
                                        !be &&
                                        !I &&
                                        e.jsx("div", {
                                          className:
                                            "absolute top-1.5 left-1.5 sm:top-3 sm:left-3 z-10",
                                          children: e.jsx(pe, {
                                            className:
                                              "text-white text-[8px] sm:text-[10px] font-bold shadow-lg backdrop-blur-sm px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md",
                                            style: {
                                              background: `linear-gradient(135deg, ${f}, ${f}dd)`,
                                            },
                                            children: it[s.brand] || s.brand,
                                          }),
                                        }),
                                      F > 0 &&
                                        F <= 5 &&
                                        e.jsx("div", {
                                          className:
                                            "absolute bottom-1.5 left-1.5 sm:bottom-3 sm:left-3 z-10",
                                          children: e.jsxs(pe, {
                                            className:
                                              "bg-orange-500/90 text-white text-[8px] sm:text-[10px] font-bold shadow-lg animate-pulse px-1.5 py-0.5 rounded-md",
                                            children: [
                                              "⚡ ",
                                              O.lastUnits,
                                              " (",
                                              F,
                                              ")!",
                                            ],
                                          }),
                                        }),
                                      s.images &&
                                        s.images.length > 0 &&
                                        e.jsx("div", {
                                          className:
                                            "absolute bottom-1.5 right-1.5 sm:bottom-3 sm:right-3 z-10",
                                          children: e.jsxs(pe, {
                                            className: `${
                                              P
                                                ? "bg-zinc-900/80"
                                                : "bg-white/90"
                                            } ${
                                              t.text
                                            } text-[8px] sm:text-[10px] shadow-lg backdrop-blur-sm px-1.5 py-0.5 rounded-md`,
                                            children: ["📸 +", s.images.length],
                                          }),
                                        }),
                                      I &&
                                        k > 1 &&
                                        !be &&
                                        e.jsx("div", {
                                          className:
                                            "absolute top-1.5 left-1.5 sm:top-3 sm:left-3 z-10",
                                          children: e.jsxs(pe, {
                                            className:
                                              "bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[8px] sm:text-[10px] font-bold shadow-lg px-1.5 py-0.5 rounded-md",
                                            children: [
                                              "💳 ",
                                              k,
                                              "x ",
                                              O.noInterest,
                                            ],
                                          }),
                                        }),
                                      e.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className:
                                      "p-2.5 sm:p-4 flex flex-col flex-1 relative space-y-1.5 sm:space-y-2",
                                    children: [
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          s.category &&
                                            e.jsx("span", {
                                              className: `text-[8px] sm:text-[10px] font-medium uppercase tracking-wider ${t.textMuted}`,
                                              children: ot(s.category, R),
                                            }),
                                          e.jsxs("div", {
                                            className:
                                              "flex items-center gap-0.5 ml-auto",
                                            children: [
                                              [1, 2, 3, 4, 5].map((ye) =>
                                                e.jsx(
                                                  Ve,
                                                  {
                                                    className: `w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                                                      ye <= 4
                                                        ? "text-yellow-400 fill-yellow-400"
                                                        : P
                                                        ? "text-zinc-600"
                                                        : "text-gray-300"
                                                    }`,
                                                  },
                                                  ye
                                                )
                                              ),
                                              e.jsx("span", {
                                                className: `text-[8px] sm:text-[10px] ${t.textMuted} ml-0.5`,
                                                children: "(4.0)",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      e.jsx("h3", {
                                        className: `font-semibold text-xs sm:text-sm line-clamp-2 ${t.text} cursor-pointer hover:underline underline-offset-2 transition-all duration-300 min-h-[28px] sm:min-h-[36px] leading-snug`,
                                        onClick: () => ys(s),
                                        children: s.name,
                                      }),
                                      e.jsxs("div", {
                                        className:
                                          "mt-auto space-y-1.5 sm:space-y-2",
                                        children: [
                                          e.jsxs("div", {
                                            className: "space-y-0.5",
                                            children: [
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1.5",
                                                children: [
                                                  e.jsx("span", {
                                                    className: `text-[10px] sm:text-xs ${t.textMuted} line-through`,
                                                    children: he(
                                                      s.sale_price * 1.15
                                                    ),
                                                  }),
                                                  e.jsx(pe, {
                                                    className:
                                                      "bg-green-500/15 text-green-500 text-[8px] sm:text-[10px] font-bold border-0 px-1 py-0 rounded-sm",
                                                    children: "-15%",
                                                  }),
                                                ],
                                              }),
                                              e.jsx("p", {
                                                className:
                                                  "text-base sm:text-xl font-extrabold tracking-tight leading-none",
                                                style: { color: f },
                                                children: he(s.sale_price),
                                              }),
                                              s.price_cash &&
                                                s.price_cash > 0 &&
                                                e.jsxs("p", {
                                                  className:
                                                    "text-[9px] sm:text-xs text-emerald-500 font-bold leading-tight",
                                                  children: [
                                                    "À vista: ",
                                                    he(s.price_cash),
                                                  ],
                                                }),
                                              s.price_installment &&
                                                s.price_installment > 0 &&
                                                (s.installment_count || 1) >
                                                  1 &&
                                                e.jsxs("p", {
                                                  className: `text-[9px] sm:text-xs ${t.textSecondary} leading-tight`,
                                                  children: [
                                                    O.or,
                                                    " ",
                                                    e.jsxs("span", {
                                                      className:
                                                        "font-bold text-emerald-500",
                                                      children: [
                                                        s.installment_count,
                                                        "x ",
                                                        he(
                                                          s.price_installment /
                                                            (s.installment_count ||
                                                              1)
                                                        ),
                                                      ],
                                                    }),
                                                    " ",
                                                    O.noInterest,
                                                  ],
                                                }),
                                              !(
                                                s.price_installment &&
                                                s.price_installment > 0
                                              ) &&
                                                I &&
                                                k > 1 &&
                                                e.jsxs("p", {
                                                  className: `text-[9px] sm:text-xs ${t.textSecondary} leading-tight`,
                                                  children: [
                                                    O.or,
                                                    " ",
                                                    e.jsxs("span", {
                                                      className:
                                                        "font-bold text-emerald-500",
                                                      children: [
                                                        k,
                                                        "x ",
                                                        he(s.sale_price / k),
                                                      ],
                                                    }),
                                                    " ",
                                                    O.noInterest,
                                                  ],
                                                }),
                                              C.includes("pix") &&
                                                o?.os_print_settings
                                                  ?.catalog_pix_discount_enabled ===
                                                  !0 &&
                                                o?.os_print_settings
                                                  ?.catalog_pix_discount > 0 &&
                                                e.jsx("div", {
                                                  className:
                                                    "flex items-center gap-1 mt-0.5",
                                                  children: e.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-0.5 sm:gap-1 px-1.5 sm:px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20",
                                                    children: [
                                                      e.jsx(ss, {
                                                        className:
                                                          "w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500",
                                                      }),
                                                      e.jsxs("span", {
                                                        className:
                                                          "text-[8px] sm:text-[10px] text-emerald-500 font-bold",
                                                        children: [
                                                          R === "pt-PT"
                                                            ? "MB WAY"
                                                            : R === "pt-BR"
                                                            ? "PIX"
                                                            : "INSTANT",
                                                          " ",
                                                          o?.os_print_settings
                                                            ?.catalog_pix_discount,
                                                          "% OFF",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className: "space-y-1",
                                            children: [
                                              e.jsx("div", {
                                                className:
                                                  "flex items-center gap-1",
                                                children: e.jsxs("div", {
                                                  className: `inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded ${
                                                    P
                                                      ? "bg-orange-500/15"
                                                      : "bg-orange-50"
                                                  } border ${
                                                    P
                                                      ? "border-orange-500/20"
                                                      : "border-orange-200"
                                                  }`,
                                                  children: [
                                                    e.jsx(ga, {
                                                      className:
                                                        "w-2.5 h-2.5 text-orange-500",
                                                    }),
                                                    e.jsx("span", {
                                                      className:
                                                        "text-[8px] sm:text-[10px] font-bold text-orange-500",
                                                      children:
                                                        R === "en-US"
                                                          ? "LOWEST PRICE"
                                                          : "MENOR PREÇO",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              e.jsxs("div", {
                                                className: `flex items-center justify-between text-[9px] sm:text-xs ${t.textMuted}`,
                                                children: [
                                                  e.jsxs("span", {
                                                    className: "font-medium",
                                                    children: [
                                                      "+",
                                                      ie,
                                                      " ",
                                                      R === "en-US"
                                                        ? "sold"
                                                        : "vendidos",
                                                    ],
                                                  }),
                                                  s.sale_price >= 99 &&
                                                    e.jsxs("span", {
                                                      className:
                                                        "inline-flex items-center gap-0.5 font-semibold text-emerald-500",
                                                      children: [
                                                        e.jsx(Ce, {
                                                          className:
                                                            "w-2.5 h-2.5 sm:w-3 sm:h-3",
                                                        }),
                                                        e.jsx("span", {
                                                          className:
                                                            "hidden sm:inline",
                                                          children:
                                                            O.freeShipping,
                                                        }),
                                                        e.jsx("span", {
                                                          className:
                                                            "sm:hidden",
                                                          children: "Grátis",
                                                        }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className: `rounded-lg p-1.5 sm:p-2 ${
                                              P
                                                ? "bg-zinc-800/60"
                                                : "bg-gray-50"
                                            } border ${t.border} space-y-1`,
                                            children: [
                                              s.sale_price >= 99
                                                ? e.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-1.5 text-emerald-500",
                                                    children: [
                                                      e.jsx(Ce, {
                                                        className:
                                                          "w-3 h-3 flex-shrink-0",
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "text-[9px] sm:text-[11px] font-semibold",
                                                        children:
                                                          O.freeShipping,
                                                      }),
                                                      e.jsx(qe, {
                                                        className:
                                                          "w-2.5 h-2.5 ml-auto flex-shrink-0",
                                                      }),
                                                    ],
                                                  })
                                                : e.jsxs("div", {
                                                    className: `flex items-center gap-1.5 ${t.textMuted}`,
                                                    children: [
                                                      e.jsx(Ce, {
                                                        className:
                                                          "w-3 h-3 flex-shrink-0",
                                                      }),
                                                      e.jsxs("span", {
                                                        className:
                                                          "text-[8px] sm:text-[10px]",
                                                        children: [
                                                          R === "en-US"
                                                            ? "Free shipping over"
                                                            : "Frete grátis acima de",
                                                          " ",
                                                          he(99),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                              e.jsxs("div", {
                                                className:
                                                  "flex items-center gap-1 flex-wrap",
                                                children: [
                                                  C.includes("pix") &&
                                                    e.jsxs("div", {
                                                      className:
                                                        "flex items-center gap-0.5 px-1 py-0.5 rounded bg-emerald-500/10",
                                                      title: "PIX",
                                                      children: [
                                                        e.jsx(ss, {
                                                          className:
                                                            "w-2.5 h-2.5 text-emerald-500",
                                                        }),
                                                        e.jsx("span", {
                                                          className:
                                                            "text-[7px] sm:text-[9px] font-bold text-emerald-500",
                                                          children: "PIX",
                                                        }),
                                                      ],
                                                    }),
                                                  C.includes("credito") &&
                                                    e.jsxs("div", {
                                                      className: `flex items-center gap-0.5 px-1 py-0.5 rounded ${
                                                        P
                                                          ? "bg-blue-500/10"
                                                          : "bg-blue-50"
                                                      }`,
                                                      title: "Cartão",
                                                      children: [
                                                        e.jsx(je, {
                                                          className:
                                                            "w-2.5 h-2.5 text-blue-500",
                                                        }),
                                                        e.jsx("span", {
                                                          className:
                                                            "text-[7px] sm:text-[9px] font-bold text-blue-500 hidden sm:inline",
                                                          children: "Cartão",
                                                        }),
                                                      ],
                                                    }),
                                                  C.includes("dinheiro") &&
                                                    e.jsx("div", {
                                                      className: `flex items-center gap-0.5 px-1 py-0.5 rounded ${
                                                        P
                                                          ? "bg-yellow-500/10"
                                                          : "bg-yellow-50"
                                                      }`,
                                                      title: "Dinheiro",
                                                      children: e.jsx(Oe, {
                                                        className:
                                                          "w-2.5 h-2.5 text-yellow-600",
                                                      }),
                                                    }),
                                                  C.includes("mbway") &&
                                                    e.jsx("div", {
                                                      className: `flex items-center gap-0.5 px-1 py-0.5 rounded ${
                                                        P
                                                          ? "bg-red-500/10"
                                                          : "bg-red-50"
                                                      }`,
                                                      title: "MB Way",
                                                      children: e.jsx("img", {
                                                        src: ks,
                                                        alt: "MB Way",
                                                        className:
                                                          "w-2.5 h-2.5 object-contain",
                                                      }),
                                                    }),
                                                  e.jsx("div", {
                                                    className: "flex-1",
                                                  }),
                                                  e.jsxs("div", {
                                                    className:
                                                      "flex items-center gap-0.5",
                                                    children: [
                                                      e.jsx(st, {
                                                        className:
                                                          "w-2.5 h-2.5 text-green-500",
                                                      }),
                                                      e.jsx("span", {
                                                        className:
                                                          "text-[7px] sm:text-[9px] text-green-500 font-medium",
                                                        children:
                                                          R === "en-US"
                                                            ? "Secure"
                                                            : "Seguro",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          e.jsxs("div", {
                                            className: "flex gap-1.5",
                                            children: [
                                              e.jsxs(B, {
                                                onClick: (ye) => {
                                                  ye.stopPropagation(),
                                                    le((Me) =>
                                                      Me.find(
                                                        (gs) =>
                                                          gs.product.id === s.id
                                                      )
                                                        ? Me
                                                        : [
                                                            ...Me,
                                                            {
                                                              product: s,
                                                              quantity: 1,
                                                            },
                                                          ]
                                                    ),
                                                    T(!0);
                                                },
                                                className:
                                                  "flex-1 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm h-9 sm:h-11 shadow-md btn-animated relative overflow-hidden group/btn active:scale-[0.97] transition-transform",
                                                style: {
                                                  background: `linear-gradient(135deg, ${Be}, ${Be}dd)`,
                                                  color: os,
                                                },
                                                children: [
                                                  e.jsx("span", {
                                                    className:
                                                      "absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12",
                                                  }),
                                                  e.jsx(ft, {
                                                    className:
                                                      "w-3 h-3 sm:w-4 sm:h-4 mr-1",
                                                  }),
                                                  R === "en-US"
                                                    ? "Buy Now"
                                                    : "Comprar",
                                                ],
                                              }),
                                              e.jsx(B, {
                                                onClick: (ye) => {
                                                  ye.stopPropagation(), Ns(s);
                                                },
                                                className:
                                                  "w-9 sm:w-11 h-9 sm:h-11 rounded-lg sm:rounded-xl shadow-md active:scale-[0.95] transition-transform flex-shrink-0 p-0",
                                                style: {
                                                  background: `linear-gradient(135deg, ${Be}cc, ${Be}aa)`,
                                                  color: os,
                                                },
                                                title: O.addToCart,
                                                children: e.jsx(cs, {
                                                  className:
                                                    "w-3.5 h-3.5 sm:w-4 sm:h-4",
                                                }),
                                              }),
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
                        (() => {
                          const s =
                              o?.os_print_settings
                                ?.catalog_mid_banner_desktop || "",
                            i =
                              o?.os_print_settings?.catalog_mid_banner_mobile ||
                              "",
                            C =
                              o?.os_print_settings?.catalog_mid_banner_link ||
                              "";
                          if (!s && !i) return null;
                          const k = C ? "a" : "div",
                            I = C
                              ? {
                                  href: C,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                }
                              : {};
                          return e.jsx("div", {
                            className: "mt-6 sm:mt-10",
                            children: e.jsxs(k, {
                              ...I,
                              className:
                                "block rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer",
                              children: [
                                s &&
                                  e.jsx("img", {
                                    src: s,
                                    alt: "Promoção",
                                    className: "w-full h-auto hidden sm:block",
                                    loading: "lazy",
                                  }),
                                i &&
                                  e.jsx("img", {
                                    src: i,
                                    alt: "Promoção",
                                    className: "w-full h-auto sm:hidden",
                                    loading: "lazy",
                                  }),
                                !i &&
                                  s &&
                                  e.jsx("img", {
                                    src: s,
                                    alt: "Promoção",
                                    className: "w-full h-auto sm:hidden",
                                    loading: "lazy",
                                  }),
                                !s &&
                                  i &&
                                  e.jsx("img", {
                                    src: i,
                                    alt: "Promoção",
                                    className: "w-full h-auto hidden sm:block",
                                    loading: "lazy",
                                  }),
                              ],
                            }),
                          });
                        })(),
                      ],
                    }),
              ],
            }),
            (() => {
              const s = o?.os_print_settings?.catalog_secondary_banners || [];
              if (s.length === 0) return null;
              const i = () => {
                N(!0), window.scrollTo({ top: 0, behavior: "smooth" });
              };
              return e.jsxs("div", {
                className: "container mx-auto px-3 sm:px-4 py-6 sm:py-8",
                children: [
                  e.jsxs("div", {
                    className: "mb-4",
                    children: [
                      e.jsxs("h2", {
                        className: `text-lg sm:text-xl font-bold ${t.text} flex items-center gap-2`,
                        children: [
                          e.jsx(is, {
                            className: "w-5 h-5",
                            style: { color: f },
                          }),
                          R === "pt-BR" || R === "pt-PT"
                            ? "Promoções Especiais"
                            : "Special Promotions",
                        ],
                      }),
                      e.jsx("p", {
                        className: `text-sm ${t.textMuted} mt-1`,
                        children:
                          R === "pt-BR" || R === "pt-PT"
                            ? "Clique no banner para ver todos os produtos em oferta"
                            : "Click the banner to see all products on sale",
                      }),
                    ],
                  }),
                  e.jsx(La, {
                    banners: s,
                    primaryColor: f,
                    autoPlayInterval: 4e3,
                    isDarkTheme: P,
                    onBannerClick: i,
                  }),
                ],
              });
            })(),
            e.jsxs(e.Fragment, {
              children: [
                e.jsxs("div", {
                  className: `sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t ${t.bgHeader} ${t.border} shadow-2xl`,
                  style: { paddingBottom: "env(safe-area-inset-bottom)" },
                  children: [
                    fe > 0 &&
                      e.jsxs("div", {
                        className: `flex items-center gap-3 px-3 py-2 border-b ${t.border}`,
                        children: [
                          e.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              e.jsxs("p", {
                                className: `text-[11px] ${t.textMuted}`,
                                children: [fe, " ", fe > 1 ? "itens" : "item"],
                              }),
                              e.jsx("p", {
                                className: `text-base font-extrabold ${t.text}`,
                                children: he(me),
                              }),
                            ],
                          }),
                          e.jsxs(B, {
                            onClick: async () => {
                              await v(), T(!0);
                            },
                            className: "flex-1 h-10 font-semibold",
                            style: { backgroundColor: Be, color: os },
                            children: [
                              e.jsx(cs, { className: "w-4 h-4 mr-2" }),
                              O.checkout,
                            ],
                          }),
                        ],
                      }),
                    e.jsxs("div", {
                      className: "grid grid-cols-4 gap-0",
                      children: [
                        e.jsxs("button", {
                          onClick: () => _(!0),
                          className: `flex flex-col items-center gap-0.5 py-2.5 ${t.text} hover:opacity-80 transition-opacity`,
                          children: [
                            e.jsx(Ce, {
                              className: "w-5 h-5",
                              style: { color: f },
                            }),
                            e.jsx("span", {
                              className: "text-[9px] font-medium",
                              children: R === "en-US" ? "Track" : "Rastrear",
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          onClick: () => _e(!0),
                          className: `flex flex-col items-center gap-0.5 py-2.5 ${t.text} hover:opacity-80 transition-opacity`,
                          children: [
                            e.jsx(Ss, {
                              className: "w-5 h-5",
                              style: { color: f },
                            }),
                            e.jsx("span", {
                              className: "text-[9px] font-medium",
                              children: R === "en-US" ? "Service" : "Serviço",
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          onClick: () => ee(!0),
                          className: `flex flex-col items-center gap-0.5 py-2.5 ${t.text} hover:opacity-80 transition-opacity`,
                          children: [
                            e.jsx(Qe, {
                              className: "w-5 h-5",
                              style: { color: f },
                            }),
                            e.jsx("span", {
                              className: "text-[9px] font-medium",
                              children: R === "en-US" ? "Coupons" : "Cupons",
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          onClick: as,
                          className: `flex flex-col items-center gap-0.5 py-2.5 ${t.text} hover:opacity-80 transition-opacity`,
                          children: [
                            e.jsx(Ze, {
                              className: "w-5 h-5",
                              style: { color: f },
                            }),
                            e.jsx("span", {
                              className: "text-[9px] font-medium",
                              children: R === "en-US" ? "Contact" : "Contato",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: `sm:hidden ${fe > 0 ? "h-32" : "h-16"}`,
                }),
                e.jsx(Ke, {
                  open: es,
                  onOpenChange: _,
                  children: e.jsxs(Ye, {
                    className: `${t.bgCard} ${t.border} ${t.text} w-[95vw] max-w-md max-h-[85vh] overflow-y-auto rounded-2xl`,
                    children: [
                      e.jsx(ds, {
                        children: e.jsx(ms, {
                          className: t.text,
                          children:
                            R === "en-US"
                              ? "Track Your Order"
                              : "Acompanhar Pedido",
                        }),
                      }),
                      e.jsx(nt, {
                        userId: S || "",
                        primaryColor: f,
                        isDarkTheme: P,
                        formatPrice: he,
                      }),
                    ],
                  }),
                }),
                e.jsx(Ke, {
                  open: D,
                  onOpenChange: ee,
                  children: e.jsxs(Ye, {
                    className: `${t.bgCard} ${t.border} ${t.text} w-[95vw] max-w-md max-h-[85vh] overflow-y-auto rounded-2xl`,
                    children: [
                      e.jsx(ds, {
                        children: e.jsxs(ms, {
                          className: `${t.text} flex items-center gap-2`,
                          children: [
                            e.jsx(Qe, {
                              className: "w-5 h-5",
                              style: { color: f },
                            }),
                            R === "en-US"
                              ? "Available Coupons"
                              : "Cupons Disponíveis",
                          ],
                        }),
                      }),
                      e.jsx("div", {
                        className: "space-y-3 mt-2",
                        children:
                          Rs.filter((s) => s.isActive).length === 0
                            ? e.jsxs("div", {
                                className: "text-center py-8",
                                children: [
                                  e.jsx(Qe, {
                                    className: `w-12 h-12 mx-auto mb-3 ${t.textMuted}`,
                                  }),
                                  e.jsx("p", {
                                    className: t.textSecondary,
                                    children: "Nenhum cupom disponível",
                                  }),
                                ],
                              })
                            : Rs.filter((s) => s.isActive).map((s) =>
                                e.jsx(
                                  "div",
                                  {
                                    className: `p-4 rounded-lg border ${t.border}`,
                                    children: e.jsxs("div", {
                                      className:
                                        "flex items-center justify-between",
                                      children: [
                                        e.jsxs("div", {
                                          children: [
                                            e.jsx("p", {
                                              className:
                                                "font-mono font-bold text-lg",
                                              style: { color: f },
                                              children: s.code,
                                            }),
                                            e.jsxs("p", {
                                              className: `text-sm ${t.textSecondary}`,
                                              children: [
                                                s.discountType ===
                                                  "percentage" &&
                                                  `${s.discountValue}% de desconto`,
                                                s.discountType === "fixed" &&
                                                  `${he(
                                                    s.discountValue
                                                  )} de desconto`,
                                                s.discountType ===
                                                  "freeShipping" &&
                                                  "Frete Grátis",
                                              ],
                                            }),
                                          ],
                                        }),
                                        e.jsx(B, {
                                          size: "sm",
                                          onClick: () => {
                                            navigator.clipboard.writeText(
                                              s.code
                                            ),
                                              As(s.code),
                                              se.success(
                                                `Cupom ${s.code} copiado!`
                                              ),
                                              setTimeout(() => As(null), 2e3);
                                          },
                                          style: {
                                            backgroundColor:
                                              Le === s.code ? "#22c55e" : f,
                                            color: "#fff",
                                          },
                                          children:
                                            Le === s.code
                                              ? e.jsx(We, {
                                                  className: "w-4 h-4",
                                                })
                                              : e.jsx(_s, {
                                                  className: "w-4 h-4",
                                                }),
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
                }),
                e.jsx(Ke, {
                  open: ve,
                  onOpenChange: _e,
                  children: e.jsxs(Ye, {
                    className: `${t.bgCard} ${t.border} ${t.text} w-[95vw] max-w-md max-h-[85vh] overflow-y-auto rounded-2xl`,
                    children: [
                      e.jsx(ds, {
                        children: e.jsxs(ms, {
                          className: `${t.text} flex items-center gap-2`,
                          children: [
                            e.jsx(Ss, {
                              className: "w-5 h-5",
                              style: { color: f },
                            }),
                            R === "en-US"
                              ? "Request Service"
                              : "Solicitar Serviço",
                          ],
                        }),
                      }),
                      e.jsxs("div", {
                        className: "space-y-3 mt-2",
                        children: [
                          e.jsx(ue, {
                            placeholder: "Seu nome",
                            value: ge.nome,
                            onChange: (s) =>
                              ke((i) => ({ ...i, nome: s.target.value })),
                            className: P
                              ? "bg-zinc-800 border-zinc-700 text-white"
                              : "",
                          }),
                          e.jsx(ue, {
                            placeholder: "Seu telefone",
                            value: ge.telefone,
                            onChange: (s) =>
                              ke((i) => ({ ...i, telefone: s.target.value })),
                            className: P
                              ? "bg-zinc-800 border-zinc-700 text-white"
                              : "",
                          }),
                          e.jsx(ue, {
                            placeholder: "Modelo do aparelho",
                            value: ge.modelo,
                            onChange: (s) =>
                              ke((i) => ({ ...i, modelo: s.target.value })),
                            className: P
                              ? "bg-zinc-800 border-zinc-700 text-white"
                              : "",
                          }),
                          e.jsxs("select", {
                            value: ge.servico,
                            onChange: (s) =>
                              ke((i) => ({ ...i, servico: s.target.value })),
                            className: `w-full h-10 px-3 rounded-md border text-sm ${
                              P
                                ? "bg-zinc-800 border-zinc-700 text-white"
                                : "bg-white border-gray-300"
                            }`,
                            children: [
                              e.jsx("option", {
                                value: "",
                                children: "Selecione o serviço",
                              }),
                              e.jsx("option", {
                                value: "Troca de tela",
                                children: "Troca de tela",
                              }),
                              e.jsx("option", {
                                value: "Reparo em placa",
                                children: "Reparo em placa",
                              }),
                              e.jsx("option", {
                                value: "Troca de bateria",
                                children: "Troca de bateria",
                              }),
                              e.jsx("option", {
                                value: "Troca de conector",
                                children: "Troca de conector",
                              }),
                              e.jsx("option", {
                                value: "Reparo em câmera",
                                children: "Reparo em câmera",
                              }),
                              e.jsx("option", {
                                value: "Outro",
                                children: "Outro",
                              }),
                            ],
                          }),
                          e.jsx(ue, {
                            placeholder: "Informações adicionais (opcional)",
                            value: ge.info,
                            onChange: (s) =>
                              ke((i) => ({ ...i, info: s.target.value })),
                            className: P
                              ? "bg-zinc-800 border-zinc-700 text-white"
                              : "",
                          }),
                          e.jsxs(B, {
                            className: "w-full",
                            style: { backgroundColor: Be, color: os },
                            onClick: () => {
                              if (!ge.nome || !ge.telefone) {
                                se.error("Preencha nome e telefone");
                                return;
                              }
                              const s = (
                                  o?.catalog_whatsapp ||
                                  o?.company_phone ||
                                  ""
                                ).replace(/\D/g, ""),
                                i =
                                  encodeURIComponent(`🔧 *SOLICITAÇÃO DE SERVIÇO*

👤 Nome: ${ge.nome}
📞 Telefone: ${ge.telefone}
📱 Modelo: ${ge.modelo}
🛠️ Serviço: ${ge.servico}
📝 Info: ${ge.info || "N/A"}`);
                              window.open(
                                `https://wa.me/${
                                  s.length <= 11 ? `55${s}` : s
                                }?text=${i}`,
                                "_blank"
                              ),
                                _e(!1),
                                ke({
                                  nome: "",
                                  telefone: "",
                                  modelo: "",
                                  servico: "",
                                  info: "",
                                });
                            },
                            children: [
                              e.jsx(Ze, { className: "w-4 h-4 mr-2" }),
                              "Enviar via WhatsApp",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            He.length > 0 &&
              e.jsx("div", {
                className: `${t.bgBanner} border-t ${t.border}`,
                children: e.jsxs("div", {
                  className: "container mx-auto px-3 sm:px-4 py-6 sm:py-8",
                  children: [
                    e.jsxs("h2", {
                      className: `text-base sm:text-lg font-bold ${t.text} flex items-center gap-2 mb-4`,
                      children: [
                        e.jsx(ca, {
                          className: "w-4 h-4 sm:w-5 sm:h-5",
                          style: { color: f },
                        }),
                        R === "en-US"
                          ? "Recently Viewed"
                          : "Vistos Recentemente",
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "flex gap-3 overflow-x-auto pb-2 scrollbar-hide",
                      children: He.map((s) =>
                        e.jsxs(
                          "div",
                          {
                            className: `flex-shrink-0 w-32 sm:w-40 cursor-pointer group/rv ${t.bgCard} rounded-xl border ${t.border} overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-lg`,
                            onClick: () => ys(s),
                            children: [
                              e.jsx("div", {
                                className: `aspect-square ${
                                  P ? "bg-zinc-800" : "bg-gray-50"
                                } overflow-hidden`,
                                children: s.image_url
                                  ? e.jsx("img", {
                                      src: s.image_url,
                                      alt: s.name,
                                      className:
                                        "w-full h-full object-contain p-2 group-hover/rv:scale-105 transition-transform duration-300",
                                      loading: "lazy",
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "w-full h-full flex items-center justify-center",
                                      children: e.jsx(Fe, {
                                        className: `w-8 h-8 ${t.textMuted}`,
                                      }),
                                    }),
                              }),
                              e.jsxs("div", {
                                className: "p-2",
                                children: [
                                  e.jsx("p", {
                                    className: `text-[10px] sm:text-xs font-medium ${t.text} line-clamp-2 leading-tight`,
                                    children: s.name,
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "text-xs sm:text-sm font-bold mt-1",
                                    style: { color: f },
                                    children: he(s.sale_price),
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
              }),
            e.jsx("div", {
              className: `${t.bgBanner} border-t ${t.border}`,
              children: e.jsxs("div", {
                className: "container mx-auto px-3 sm:px-4 py-6 sm:py-10",
                children: [
                  e.jsxs("h2", {
                    className: `text-base sm:text-lg font-bold ${t.text} text-center mb-6 flex items-center justify-center gap-2`,
                    children: [
                      e.jsx(ba, { className: "w-5 h-5", style: { color: f } }),
                      R === "en-US"
                        ? "Why buy from us?"
                        : "Por que comprar conosco?",
                    ],
                  }),
                  e.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4",
                    children: [
                      {
                        icon: Ds,
                        title:
                          R === "en-US" ? "Best Prices" : "Melhores Preços",
                        desc:
                          R === "en-US"
                            ? "Guaranteed lowest prices"
                            : "Menor preço garantido",
                        color: "#f59e0b",
                      },
                      {
                        icon: Ce,
                        title: R === "en-US" ? "Fast Shipping" : "Envio Rápido",
                        desc:
                          R === "en-US"
                            ? "Delivered to your door"
                            : "Entrega na sua porta",
                        color: "#10b981",
                      },
                      {
                        icon: qe,
                        title: R === "en-US" ? "Secure" : "Compra Segura",
                        desc:
                          R === "en-US" ? "100% protected" : "100% protegido",
                        color: "#3b82f6",
                      },
                      {
                        icon: da,
                        title:
                          R === "en-US"
                            ? "Exclusive Offers"
                            : "Ofertas Exclusivas",
                        desc:
                          R === "en-US"
                            ? "Daily promotions"
                            : "Promoções diárias",
                        color: "#8b5cf6",
                      },
                    ].map((s, i) =>
                      e.jsxs(
                        "div",
                        {
                          className: `text-center p-3 sm:p-5 rounded-2xl ${
                            P
                              ? "bg-zinc-800/50 border border-zinc-700/50"
                              : "bg-white border border-gray-100 shadow-sm"
                          } hover:scale-[1.03] transition-all duration-300 group/b`,
                          children: [
                            e.jsx("div", {
                              className:
                                "w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center group-hover/b:scale-110 transition-transform",
                              style: { background: `${s.color}15` },
                              children: e.jsx(s.icon, {
                                className: "w-5 h-5 sm:w-6 sm:h-6",
                                style: { color: s.color },
                              }),
                            }),
                            e.jsx("p", {
                              className: `text-xs sm:text-sm font-bold ${t.text}`,
                              children: s.title,
                            }),
                            e.jsx("p", {
                              className: `text-[9px] sm:text-xs ${t.textMuted} mt-0.5`,
                              children: s.desc,
                            }),
                          ],
                        },
                        i
                      )
                    ),
                  }),
                ],
              }),
            }),
            (o?.company_phone || o?.catalog_whatsapp) &&
              e.jsx("button", {
                onClick: as,
                className: `fixed ${
                  fe > 0 ? "bottom-28" : "bottom-6"
                } md:bottom-6 right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-gentle`,
                title: "WhatsApp",
                children: e.jsx(Ze, { className: "w-6 h-6 sm:w-7 sm:h-7" }),
              }),
            Ie &&
              e.jsx("button", {
                onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                className: `fixed ${
                  fe > 0 ? "bottom-28" : "bottom-6"
                } md:bottom-6 left-4 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center ${
                  P
                    ? "bg-zinc-800 text-white border border-zinc-700"
                    : "bg-white text-gray-700 border border-gray-200"
                }`,
                children: e.jsx(fa, { className: "w-4 h-4 sm:w-5 sm:h-5" }),
              }),
            Y &&
              e.jsxs("div", {
                className: `fixed bottom-20 sm:bottom-6 left-3 sm:left-4 z-50 max-w-[280px] sm:max-w-xs rounded-xl shadow-2xl border overflow-hidden animate-slide-up ${
                  P ? "bg-zinc-900 border-zinc-700" : "bg-white border-gray-200"
                }`,
                children: [
                  e.jsxs("div", {
                    className: "p-3 flex items-start gap-2.5",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold",
                        style: { backgroundColor: f },
                        children: Y.name.charAt(0),
                      }),
                      e.jsxs("div", {
                        className: "min-w-0",
                        children: [
                          e.jsxs("p", {
                            className: `text-[11px] sm:text-xs font-semibold ${
                              P ? "text-white" : "text-gray-900"
                            } leading-tight`,
                            children: [Y.name, " de ", Y.city],
                          }),
                          e.jsxs("p", {
                            className: `text-[10px] sm:text-[11px] ${
                              P ? "text-zinc-400" : "text-gray-500"
                            } leading-tight mt-0.5`,
                            children: [
                              "comprou ",
                              e.jsx("span", {
                                className: "font-medium",
                                style: { color: f },
                                children:
                                  Y.product.length > 30
                                    ? Y.product.slice(0, 30) + "..."
                                    : Y.product,
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: `text-[9px] ${
                              P ? "text-zinc-600" : "text-gray-400"
                            } mt-1`,
                            children: "há poucos minutos",
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () => Se(null),
                        className: `flex-shrink-0 ${
                          P
                            ? "text-zinc-600 hover:text-zinc-400"
                            : "text-gray-300 hover:text-gray-500"
                        }`,
                        children: e.jsx(Te, { className: "w-3 h-3" }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className:
                      "h-0.5 w-full animate-[shrink_4s_linear_forwards]",
                    style: { backgroundColor: f },
                  }),
                ],
              }),
            e.jsx("div", {
              className: `${t.bgBanner} border-t ${t.border}`,
              children: e.jsx("div", {
                className: "container mx-auto px-3 sm:px-4 py-4 sm:py-6",
                children: e.jsxs("div", {
                  className: `flex flex-col sm:flex-row items-center gap-3 sm:gap-6 p-4 sm:p-5 rounded-2xl border-2 border-dashed ${
                    P
                      ? "border-zinc-700 bg-zinc-900/50"
                      : "border-gray-200 bg-gray-50/50"
                  }`,
                  children: [
                    e.jsx("div", {
                      className:
                        "w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0",
                      style: {
                        background: `linear-gradient(135deg, ${f}20, ${f}10)`,
                      },
                      children: e.jsx(qe, {
                        className: "w-6 h-6 sm:w-7 sm:h-7",
                        style: { color: f },
                      }),
                    }),
                    e.jsxs("div", {
                      className: "text-center sm:text-left",
                      children: [
                        e.jsxs("h3", {
                          className: `text-sm sm:text-base font-bold ${
                            P ? "text-white" : "text-gray-900"
                          }`,
                          children: [
                            "🛡️ ",
                            R === "en-US"
                              ? "Satisfaction Guarantee"
                              : "Garantia de Satisfação",
                          ],
                        }),
                        e.jsx("p", {
                          className: `text-[11px] sm:text-sm ${
                            P ? "text-zinc-400" : "text-gray-500"
                          } mt-0.5`,
                          children:
                            R === "en-US"
                              ? "Not satisfied? Full refund within 7 days, no questions asked."
                              : "Não ficou satisfeito? Devolução total em até 7 dias, sem perguntas.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2 flex-shrink-0",
                      children: [
                        e.jsx("div", {
                          className: "flex -space-x-1",
                          children: ["⭐", "⭐", "⭐", "⭐", "⭐"].map((s, i) =>
                            e.jsx(
                              Ve,
                              {
                                className:
                                  "w-3.5 h-3.5 fill-amber-400 text-amber-400",
                              },
                              i
                            )
                          ),
                        }),
                        e.jsx("span", {
                          className: `text-[10px] sm:text-xs font-bold ${
                            P ? "text-zinc-400" : "text-gray-500"
                          }`,
                          children: "4.9/5",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            e.jsxs("footer", {
              className: `${
                P ? "bg-zinc-950" : "bg-gray-950"
              } relative overflow-hidden`,
              children: [
                e.jsx("div", {
                  className: "h-0.5 w-full",
                  style: {
                    background: `linear-gradient(90deg, transparent, ${f}, transparent)`,
                  },
                }),
                e.jsxs("div", {
                  className:
                    "container mx-auto px-4 py-8 sm:py-10 relative z-10",
                  children: [
                    e.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
                      children: [
                        e.jsxs("div", {
                          className:
                            "flex flex-col items-center md:items-start text-center md:text-left",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-2.5 mb-3",
                              children: [
                                o?.company_logo
                                  ? e.jsx("div", {
                                      className:
                                        "h-10 w-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-md p-0.5",
                                      children: e.jsx("img", {
                                        src: o.company_logo,
                                        alt: Xe,
                                        className:
                                          "h-full w-full object-contain",
                                      }),
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "w-10 h-10 rounded-xl flex items-center justify-center shadow-md",
                                      style: {
                                        background: `linear-gradient(135deg, ${f}, ${we})`,
                                      },
                                      children: e.jsx(Ws, {
                                        className: "w-5 h-5 text-white",
                                      }),
                                    }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("h3", {
                                      className:
                                        "text-base font-bold text-white",
                                      children: Xe,
                                    }),
                                    e.jsx("p", {
                                      className: "text-zinc-500 text-[10px]",
                                      children: "Catálogo Virtual",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "text-zinc-400 text-xs max-w-xs leading-relaxed",
                              children: Pt,
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex flex-col items-center text-center",
                          children: [
                            e.jsx("h4", {
                              className:
                                "text-sm font-semibold text-white uppercase tracking-wider mb-4",
                              children: R === "en-US" ? "Contact" : "Contato",
                            }),
                            e.jsxs("div", {
                              className: "space-y-3 text-sm text-zinc-400",
                              children: [
                                o?.company_address &&
                                  e.jsxs("p", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("span", { children: "📍" }),
                                      " ",
                                      o.company_address,
                                    ],
                                  }),
                                (o?.catalog_whatsapp || o?.company_phone) &&
                                  e.jsxs("p", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("span", { children: "📞" }),
                                      " ",
                                      o?.catalog_whatsapp || o?.company_phone,
                                    ],
                                  }),
                                o?.company_email &&
                                  e.jsxs("p", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx("span", { children: "✉️" }),
                                      " ",
                                      o.company_email,
                                    ],
                                  }),
                              ],
                            }),
                            (o?.company_phone || o?.catalog_whatsapp) &&
                              e.jsxs(B, {
                                onClick: as,
                                className:
                                  "mt-4 gap-2 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all",
                                style: {
                                  backgroundColor: "#25D366",
                                  color: "#fff",
                                },
                                size: "sm",
                                children: [
                                  e.jsx(Ze, { className: "w-4 h-4" }),
                                  O.contactWhatsApp,
                                ],
                              }),
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex flex-col items-center md:items-end text-center md:text-right",
                          children: [
                            e.jsx("h4", {
                              className:
                                "text-sm font-semibold text-white uppercase tracking-wider mb-4",
                              children:
                                R === "en-US"
                                  ? "Payment Methods"
                                  : "Formas de Pagamento",
                            }),
                            e.jsxs("div", {
                              className:
                                "flex flex-wrap items-center justify-center md:justify-end gap-2",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "h-9 px-3 rounded-lg flex items-center justify-center bg-white/10 border border-white/5",
                                  children: e.jsx("span", {
                                    className:
                                      "font-bold text-sm italic text-white/90",
                                    children: "VISA",
                                  }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "h-9 px-2.5 rounded-lg flex items-center justify-center bg-white/10 border border-white/5",
                                  children: e.jsxs("div", {
                                    className: "flex items-center",
                                    children: [
                                      e.jsx("div", {
                                        className:
                                          "w-5 h-5 rounded-full bg-red-500 -mr-1.5",
                                      }),
                                      e.jsx("div", {
                                        className:
                                          "w-5 h-5 rounded-full bg-yellow-500 opacity-90",
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx("div", {
                                  className:
                                    "h-9 px-2.5 rounded-lg flex items-center justify-center bg-[#006fcf]/80 border border-[#006fcf]/30",
                                  children: e.jsx("span", {
                                    className:
                                      "font-bold text-[9px] text-white leading-tight text-center",
                                    children: "AMEX",
                                  }),
                                }),
                                R === "pt-BR" &&
                                  e.jsxs("div", {
                                    className:
                                      "h-9 px-3 rounded-lg flex items-center justify-center bg-teal-500/20 border border-teal-500/30",
                                    children: [
                                      e.jsx(ss, {
                                        className: "w-4 h-4 text-teal-400 mr-1",
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "font-bold text-sm text-teal-400",
                                        children: "PIX",
                                      }),
                                    ],
                                  }),
                                R === "pt-PT" &&
                                  e.jsx("div", {
                                    className:
                                      "h-9 px-2.5 rounded-lg flex items-center justify-center bg-white border border-white/10",
                                    children: e.jsx("img", {
                                      src: ks,
                                      alt: "MB Way",
                                      className: "h-5 object-contain",
                                    }),
                                  }),
                                R === "en-US" &&
                                  e.jsx("div", {
                                    className:
                                      "h-9 px-3 rounded-lg flex items-center justify-center bg-white/10 border border-white/5",
                                    children: e.jsxs("span", {
                                      className: "font-bold text-sm",
                                      children: [
                                        e.jsx("span", {
                                          className: "text-[#003087]",
                                          children: "Pay",
                                        }),
                                        e.jsx("span", {
                                          className: "text-[#0070ba]",
                                          children: "Pal",
                                        }),
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-3 mt-4 text-zinc-500 text-xs",
                              children: [
                                e.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx(qe, { className: "w-3 h-3" }),
                                    " SSL",
                                  ],
                                }),
                                e.jsxs("span", {
                                  className: "flex items-center gap-1",
                                  children: [
                                    e.jsx(qe, { className: "w-3 h-3" }),
                                    " ",
                                    R === "en-US" ? "Secure" : "Seguro",
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
                        "border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3",
                      children: [
                        e.jsxs("p", {
                          className: "text-xs text-zinc-600",
                          children: [
                            "© ",
                            new Date().getFullYear(),
                            " ",
                            Xe,
                            ". ",
                            O.allRightsReserved,
                          ],
                        }),
                        e.jsxs("div", {
                          className:
                            "flex items-center gap-2 text-xs text-zinc-600",
                          children: [
                            e.jsx(st, { className: "w-3 h-3" }),
                            R === "en-US"
                              ? "Protected shopping environment"
                              : "Ambiente de compra protegido",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className:
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-[120px] opacity-10 pointer-events-none",
                  style: { backgroundColor: f },
                }),
              ],
            }),
            e.jsx(Oa, {
              open: Q,
              onOpenChange: T,
              cart: c,
              companyInfo: o,
              formatPrice: he,
              primaryColor: f,
              buttonColor: Be,
              isDarkTheme: P,
              coupons: o?.os_print_settings?.catalog_coupons || [],
              deliveryPersons:
                o?.os_print_settings?.catalog_delivery_persons || [],
              deliveryEnabled:
                o?.os_print_settings?.catalog_delivery_enabled || !1,
              userId: S || void 0,
              catalogLanguage: R,
              abandonedCartId: oe,
              onOrderCreated: () => {
                (te.current = null), M(null);
              },
            }),
          ],
        }),
      ],
    });
  };
export { sl as default };
