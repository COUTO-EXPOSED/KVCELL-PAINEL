import {
  W as xs,
  d5 as wt,
  eo as vt,
  ep as Nt,
  eq as yt,
  r as n,
  j as e,
  er as Es,
  es as _t,
  et as ks,
  a$ as R,
  w as h,
  i as rs,
  D as Pe,
  c as Ae,
  a_ as $e,
  B as S,
  d as Oe,
  c2 as we,
  s as pe,
  dG as Fe,
  T as os,
  bk as Be,
  b2 as ls,
  I as De,
  X as Me,
  bP as Xe,
  bU as H,
  by as kt,
  dk as Ct,
  dl as St,
  n as ss,
  dN as fs,
  dO as ps,
  dP as gs,
  dS as We,
  dR as us,
  eu as ke,
  bA as as,
  ev as is,
  ew as bs,
  dz as js,
  ex as Ps,
  aa as zs,
  bm as Is,
  bN as As,
  bB as Zs,
  bC as Js,
  bD as Cs,
  bE as Ss,
  b$ as et,
  bQ as ns,
  dL as Ds,
  cQ as ue,
  a2 as Dt,
  dM as st,
  a4 as Et,
  c7 as Pt,
  a7 as At,
  bv as Mt,
  c5 as Ts,
  b3 as qt,
  ey as Rt,
  d7 as Ut,
  d8 as Lt,
  da as zt,
  ez as tt,
  cY as Bs,
  cz as Tt,
  cw as Bt,
  l as $t,
  eA as Ot,
  bw as Ms,
  bn as Ft,
  bo as Vt,
  bp as Ht,
  bq as Wt,
  br as Kt,
  bs as Xt,
  bt as Yt,
  bu as Qt,
  eB as qs,
  bj as ds,
  eC as at,
  G as ts,
  el as Gt,
  a8 as It,
  c6 as Zt,
  U as rt,
  eD as Jt,
  eE as ea,
  eF as sa,
  eG as ta,
  eH as aa,
  ac as ra,
  ae as it,
  bX as ia,
  a1 as ms,
  Y as $s,
  $ as Os,
  d_ as na,
  cG as oa,
  g as la,
  Z as ca,
  z as da,
  u as ma,
} from "./index-V8ZHCWL2.js";
import { A as Ee } from "./arrow-left-CaH5Nh3G.js";
import { M as ua } from "./MediaViewDialog-Cy2ZQh1t.js";
import { E as ws, i as Fs } from "./isToday-CEo4te1X.js";
import { F as ha } from "./flag-DVg_DpVf.js";
import { P as xa } from "./pause-BTl0GAQj.js";
import { S as fa } from "./shield-x-CjH_UR8i.js";
import { L as pa } from "./link-DySSB7S9.js";
import { M as ga } from "./mic-D-2h8FNy.js";
import { i as ba } from "./isSameDay-C3Dd1gMO.js";
import { U as ja } from "./user-x-DOwtYzgD.js";
import { T as wa } from "./type-BY7-f7Mh.js";
import { A as va } from "./at-sign-CgNRBGZl.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ke = xs("Bookmark", [
  [
    "path",
    { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Na = xs("Navigation", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ya = xs("Repeat2", [
  ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
  ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _a = xs("SquarePlus", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
]);
function Vs(s) {
  return ba(s, wt(vt(s), 1));
}
function ka() {
  return Nt.useSyncExternalStore(
    Ca,
    () => !0,
    () => !1
  );
}
function Ca() {
  return () => {};
}
var Rs = "Avatar",
  [Sa, Dr] = yt(Rs),
  [Da, nt] = Sa(Rs),
  ot = n.forwardRef((s, a) => {
    const { __scopeAvatar: t, ...l } = s,
      [i, r] = n.useState("idle");
    return e.jsx(Da, {
      scope: t,
      imageLoadingStatus: i,
      onImageLoadingStatusChange: r,
      children: e.jsx(Es.span, { ...l, ref: a }),
    });
  });
ot.displayName = Rs;
var lt = "AvatarImage",
  ct = n.forwardRef((s, a) => {
    const {
        __scopeAvatar: t,
        src: l,
        onLoadingStatusChange: i = () => {},
        ...r
      } = s,
      c = nt(lt, t),
      x = Ea(l, r),
      m = _t((o) => {
        i(o), c.onImageLoadingStatusChange(o);
      });
    return (
      ks(() => {
        x !== "idle" && m(x);
      }, [x, m]),
      x === "loaded" ? e.jsx(Es.img, { ...r, ref: a, src: l }) : null
    );
  });
ct.displayName = lt;
var dt = "AvatarFallback",
  mt = n.forwardRef((s, a) => {
    const { __scopeAvatar: t, delayMs: l, ...i } = s,
      r = nt(dt, t),
      [c, x] = n.useState(l === void 0);
    return (
      n.useEffect(() => {
        if (l !== void 0) {
          const m = window.setTimeout(() => x(!0), l);
          return () => window.clearTimeout(m);
        }
      }, [l]),
      c && r.imageLoadingStatus !== "loaded"
        ? e.jsx(Es.span, { ...i, ref: a })
        : null
    );
  });
mt.displayName = dt;
function Hs(s, a) {
  return s
    ? a
      ? (s.src !== a && (s.src = a),
        s.complete && s.naturalWidth > 0 ? "loaded" : "loading")
      : "error"
    : "idle";
}
function Ea(s, { referrerPolicy: a, crossOrigin: t }) {
  const l = ka(),
    i = n.useRef(null),
    r = l ? (i.current || (i.current = new window.Image()), i.current) : null,
    [c, x] = n.useState(() => Hs(r, s));
  return (
    ks(() => {
      x(Hs(r, s));
    }, [r, s]),
    ks(() => {
      const m = (p) => () => {
        x(p);
      };
      if (!r) return;
      const o = m("loaded"),
        g = m("error");
      return (
        r.addEventListener("load", o),
        r.addEventListener("error", g),
        a && (r.referrerPolicy = a),
        typeof t == "string" && (r.crossOrigin = t),
        () => {
          r.removeEventListener("load", o), r.removeEventListener("error", g);
        }
      );
    }, [r, t, a]),
    c
  );
}
var ut = ot,
  ht = ct,
  xt = mt;
const te = n.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(ut, {
    ref: t,
    className: R(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      s
    ),
    ...a,
  })
);
te.displayName = ut.displayName;
const re = n.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(ht, { ref: t, className: R("aspect-square h-full w-full", s), ...a })
);
re.displayName = ht.displayName;
const ae = n.forwardRef(({ className: s, ...a }, t) =>
  e.jsx(xt, {
    ref: t,
    className: R(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      s
    ),
    ...a,
  })
);
ae.displayName = xt.displayName;
async function Us(s, a, t, l, i) {
  if (s !== a)
    try {
      await h
        .from("community_notifications")
        .insert({
          user_id: s,
          actor_id: a,
          type: t,
          post_id: l || null,
          comment_id: i || null,
        });
    } catch {}
}
const Pa = /@([\w\u00C0-\u00FF]+)/g;
function Aa(s) {
  const a = s.match(Pa);
  return a ? [...new Set(a.map((t) => t.slice(1).toLowerCase()))] : [];
}
async function Ma(s) {
  if (s.length === 0) return new Map();
  try {
    const { data: a, error: t } = await h
      .from("profiles")
      .select("user_id, username, name")
      .or(s.map((i) => `username.ilike.${i},name.ilike.${i}`).join(","));
    if (t) throw t;
    const l = new Map();
    return (
      (a || []).forEach((i) => {
        const r = i.username?.toLowerCase() || "",
          c = i.name?.toLowerCase().replace(/\s+/g, "") || "";
        s.forEach((x) => {
          const m = x.toLowerCase();
          (r === m || c === m) && l.set(m, i.user_id);
        });
      }),
      l
    );
  } catch {
    return new Map();
  }
}
async function ft(s, a, t, l) {
  const i = Aa(s);
  if (i.length === 0) return;
  const r = await Ma(i);
  for (const [, c] of r)
    if (c !== a)
      try {
        await h
          .from("community_notifications")
          .insert({
            user_id: c,
            actor_id: a,
            type: "mention",
            post_id: t,
            comment_id: l || null,
          });
      } catch {}
}
async function pt(s) {
  if (!s || s.length < 1) return [];
  try {
    const { data: a, error: t } = await h
      .from("profiles")
      .select("user_id, username, name, avatar_url")
      .or(`username.ilike.%${s}%,name.ilike.%${s}%`)
      .limit(5);
    if (t) throw t;
    return a || [];
  } catch {
    return [];
  }
}
function gt(s, a = 300) {
  const [t, l] = n.useState(s);
  return (
    n.useEffect(() => {
      const i = setTimeout(() => {
        l(s);
      }, a);
      return () => {
        clearTimeout(i);
      };
    }, [s, a]),
    t
  );
}
function qa({
  open: s,
  onOpenChange: a,
  postId: t,
  currentUserId: l,
  onViewProfile: i,
}) {
  const { toast: r } = rs(),
    [c, x] = n.useState([]),
    [m, o] = n.useState(""),
    [g, p] = n.useState(!1),
    [u, d] = n.useState(!1),
    [b, j] = n.useState(null),
    [w, v] = n.useState(!1),
    [L, z] = n.useState([]),
    [k, C] = n.useState(0),
    [B, M] = n.useState(""),
    [N, q] = n.useState(-1),
    $ = n.useRef(null),
    T = n.useRef(null),
    G = gt(B, 200);
  n.useEffect(() => {
    s && (X(), I(), oe());
  }, [s, t]),
    n.useEffect(() => {
      (async () => {
        if (G.length >= 1) {
          const Q = await pt(G);
          z(Q), C(0);
        } else z([]);
      })();
    }, [G]);
  const X = async () => {
      try {
        const { data: E } = await h
          .from("profiles")
          .select("name, avatar_url")
          .eq("user_id", l)
          .single();
        j(E);
      } catch {}
    },
    I = async () => {
      p(!0);
      try {
        const { data: E, error: Q } = await h
          .from("community_comments")
          .select("*")
          .eq("post_id", t)
          .order("created_at", { ascending: !0 });
        if (Q) throw Q;
        const A = await Promise.all(
          (E || []).map(async (F) => {
            const { data: xe } = await h
              .from("profiles")
              .select("name, avatar_url")
              .eq("user_id", F.user_id)
              .single();
            return {
              ...F,
              profiles: xe || { name: "Usuário", avatar_url: null },
            };
          })
        );
        x(A);
      } catch (E) {
        r({
          title: "Erro ao carregar comentários",
          description: E.message,
          variant: "destructive",
        });
      } finally {
        p(!1);
      }
    },
    oe = () => {
      const E = h
        .channel(`comments_${t}`)
        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "community_comments",
            filter: `post_id=eq.${t}`,
          },
          () => {
            I();
          }
        )
        .subscribe();
      return () => {
        h.removeChannel(E);
      };
    },
    Z = async (E) => {
      if ((E.preventDefault(), !!m.trim())) {
        d(!0);
        try {
          const { data: Q, error: A } = await h
            .from("community_comments")
            .insert({ post_id: t, user_id: l, text: m.trim() })
            .select()
            .single();
          if (A) throw A;
          const { data: F } = await h
            .from("community_posts")
            .select("user_id")
            .eq("id", t)
            .single();
          F && F.user_id !== l && Us(F.user_id, l, "comment", t, Q?.id),
            Q && (await ft(m.trim(), l, t, Q.id)),
            o(""),
            r({ title: "Comentário publicado!" });
        } catch (Q) {
          r({
            title: "Erro ao comentar",
            description: Q.message,
            variant: "destructive",
          });
        } finally {
          d(!1);
        }
      }
    },
    Y = b?.name || "Usuário",
    ee = b?.avatar_url,
    ce = n.useCallback((E, Q) => {
      let A = Q - 1;
      for (; A >= 0; ) {
        const F = E[A];
        if (F === "@") {
          const xe = E.substring(A + 1, Q);
          if ((A === 0 || /\s/.test(E[A - 1])) && !/\s/.test(xe))
            return { start: A, query: xe };
          break;
        }
        if (/\s/.test(F)) break;
        A--;
      }
      return null;
    }, []),
    de = (E) => {
      const Q = E.target.value,
        A = E.target.selectionStart;
      o(Q);
      const F = ce(Q, A);
      F ? (M(F.query), q(F.start), v(!0)) : (v(!1), M(""), q(-1));
    },
    he = (E) => {
      if (N === -1 || !$.current) return;
      const Q = $.current.selectionStart,
        A = m.substring(0, N),
        F = m.substring(Q),
        xe = `@${E.username || E.name.replace(/\s+/g, "")} `,
        ie = A + xe + F;
      o(ie),
        v(!1),
        M(""),
        q(-1),
        setTimeout(() => {
          if ($.current) {
            const be = A.length + xe.length;
            $.current.setSelectionRange(be, be), $.current.focus();
          }
        }, 0);
    },
    je = (E) => {
      if (w && L.length > 0) {
        if (E.key === "ArrowDown") {
          E.preventDefault(), C((Q) => (Q + 1) % L.length);
          return;
        }
        if (E.key === "ArrowUp") {
          E.preventDefault(), C((Q) => (Q - 1 + L.length) % L.length);
          return;
        }
        if (E.key === "Enter" && !E.shiftKey) {
          E.preventDefault(), he(L[k]);
          return;
        }
        if (E.key === "Escape") {
          E.preventDefault(), v(!1);
          return;
        }
        if (E.key === "Tab") {
          E.preventDefault(), he(L[k]);
          return;
        }
      }
      E.key === "Enter" && !E.shiftKey && !w && (E.preventDefault(), Z(E));
    },
    O = (E) =>
      E.split(/(@[\w\u00C0-\u00FF]+)/g).map((A, F) =>
        A.startsWith("@")
          ? e.jsx(
              "span",
              {
                className:
                  "text-primary hover:underline cursor-pointer font-medium",
                onClick: (xe) => {
                  xe.stopPropagation();
                },
                children: A,
              },
              F
            )
          : A
      );
  return e.jsx(Pe, {
    open: s,
    onOpenChange: a,
    children: e.jsxs(Ae, {
      className: "sm:max-w-[600px] max-h-[85vh] p-0 gap-0 flex flex-col",
      children: [
        e.jsx($e, {
          className: "p-4 pb-3 border-b flex-shrink-0",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx(S, {
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8",
                onClick: () => a(!1),
                children: e.jsx(Ee, { className: "h-5 w-5" }),
              }),
              e.jsx(Oe, {
                className: "text-lg font-bold",
                children: "Comentários",
              }),
            ],
          }),
        }),
        e.jsx(we, {
          className: "flex-1 p-4",
          children: g
            ? e.jsx("div", {
                className: "flex items-center justify-center py-12",
                children: e.jsx(pe, {
                  className: "h-8 w-8 animate-spin text-primary",
                }),
              })
            : c.length === 0
            ? e.jsxs("div", {
                className: "text-center py-12",
                children: [
                  e.jsx("p", {
                    className: "text-muted-foreground mb-2",
                    children: "Nenhum comentário ainda",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Seja o primeiro a comentar!",
                  }),
                ],
              })
            : e.jsx("div", {
                className: "space-y-4",
                children: c.map((E) => {
                  const Q = E.profiles?.name || "Usuário",
                    A = E.profiles?.avatar_url,
                    F = Fe(new Date(E.created_at), {
                      addSuffix: !0,
                      locale: Be,
                    });
                  return e.jsxs(
                    "div",
                    {
                      className:
                        "flex gap-3 pb-4 border-b border-border last:border-0",
                      children: [
                        e.jsxs(te, {
                          className: "h-10 w-10 flex-shrink-0",
                          children: [
                            e.jsx(re, { src: A || void 0 }),
                            e.jsx(ae, {
                              className:
                                "bg-primary/10 text-primary font-semibold",
                              children: Q.charAt(0).toUpperCase(),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-1 mb-1",
                              children: [
                                e.jsx("span", {
                                  className: "font-bold text-sm",
                                  children: Q,
                                }),
                                e.jsxs("span", {
                                  className: "text-xs text-muted-foreground",
                                  children: [
                                    "@",
                                    Q.toLowerCase().replace(/\s+/g, ""),
                                  ],
                                }),
                                e.jsx("span", {
                                  className: "text-muted-foreground text-xs",
                                  children: "·",
                                }),
                                e.jsx("span", {
                                  className: "text-xs text-muted-foreground",
                                  children: F,
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-sm break-words leading-normal",
                              children: O(E.text),
                            }),
                          ],
                        }),
                      ],
                    },
                    E.id
                  );
                }),
              }),
        }),
        e.jsxs("form", {
          onSubmit: Z,
          className: "p-4 border-t flex-shrink-0 bg-background relative",
          children: [
            w &&
              L.length > 0 &&
              e.jsx("div", {
                ref: T,
                className:
                  "absolute left-4 right-4 bottom-full mb-2 z-50 bg-popover border border-border rounded-xl shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95",
                children: e.jsxs("div", {
                  className: "p-1 max-h-[200px] overflow-y-auto",
                  children: [
                    e.jsx("p", {
                      className:
                        "px-3 py-1.5 text-xs font-medium text-muted-foreground",
                      children: "Usuários",
                    }),
                    L.map((E, Q) =>
                      e.jsxs(
                        "button",
                        {
                          type: "button",
                          className: R(
                            "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left",
                            Q === k
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-accent"
                          ),
                          onClick: () => he(E),
                          onMouseEnter: () => C(Q),
                          children: [
                            e.jsxs(te, {
                              className: "h-8 w-8",
                              children: [
                                e.jsx(re, { src: E.avatar_url || void 0 }),
                                e.jsx(ae, {
                                  className:
                                    "bg-primary/10 text-primary text-xs font-semibold",
                                  children: E.name.charAt(0).toUpperCase(),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsx("p", {
                                  className: "font-medium text-sm truncate",
                                  children: E.name,
                                }),
                                e.jsxs("p", {
                                  className:
                                    "text-xs text-muted-foreground truncate",
                                  children: [
                                    "@",
                                    E.username ||
                                      E.name.toLowerCase().replace(/\s+/g, ""),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        E.user_id
                      )
                    ),
                  ],
                }),
              }),
            e.jsxs("div", {
              className: "flex gap-3",
              children: [
                e.jsxs(te, {
                  className: "h-10 w-10 flex-shrink-0",
                  children: [
                    e.jsx(re, { src: ee || void 0 }),
                    e.jsx(ae, {
                      className: "bg-primary/10 text-primary font-semibold",
                      children: Y.charAt(0).toUpperCase(),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex-1 flex gap-2",
                  children: [
                    e.jsx(os, {
                      ref: $,
                      value: m,
                      onChange: de,
                      placeholder:
                        "Adicione um comentário... Use @ para mencionar",
                      className:
                        "min-h-[44px] max-h-[120px] resize-none border-0 focus-visible:ring-1 bg-transparent",
                      disabled: u,
                      onKeyDown: je,
                    }),
                    e.jsx(S, {
                      type: "submit",
                      size: "sm",
                      disabled: u || !m.trim(),
                      className: "rounded-full px-4 self-end h-9",
                      children: u
                        ? e.jsx(pe, { className: "h-4 w-4 animate-spin" })
                        : "Comentar",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Ra = "/assets/verified-badge-4F3vo53L.png";
function Ye({ className: s = "", size: a = "md" }) {
  const t = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" };
  return e.jsx("img", {
    src: Ra,
    alt: "Verificado",
    className: `inline-block ${t[a]} ${s}`,
    title: "Conta verificada",
  });
}
function Ua({
  open: s,
  onOpenChange: a,
  postId: t,
  profileId: l,
  shareType: i,
  currentUserId: r,
}) {
  const [c, x] = n.useState(""),
    [m, o] = n.useState([]),
    [g, p] = n.useState([]),
    [u, d] = n.useState(!1),
    [b, j] = n.useState(!1);
  n.useEffect(() => {
    s && (w(), p([]));
  }, [s]),
    n.useEffect(() => {
      c ? v(c) : w();
    }, [c]);
  const w = async () => {
      d(!0);
      try {
        const { data: k } = await h
          .from("profiles")
          .select("user_id, name, username, avatar_url")
          .neq("user_id", r)
          .limit(20);
        o(k || []);
      } catch {
      } finally {
        d(!1);
      }
    },
    v = async (k) => {
      d(!0);
      try {
        const { data: C } = await h
          .from("profiles")
          .select("user_id, name, username, avatar_url")
          .or(`name.ilike.%${k}%,username.ilike.%${k}%`)
          .neq("user_id", r)
          .limit(20);
        o(C || []);
      } catch {
      } finally {
        d(!1);
      }
    },
    L = (k) => {
      p((C) => (C.includes(k) ? C.filter((B) => B !== k) : [...C, k]));
    },
    z = async () => {
      if (g.length === 0) {
        H.error("Selecione pelo menos um usuário");
        return;
      }
      j(!0);
      try {
        const k =
            i === "post"
              ? `${window.location.origin}/comunidade?post=${t}`
              : `${window.location.origin}/comunidade?profile=${l}`,
          C =
            i === "post"
              ? `📸 Veja esta publicação: ${k}`
              : `👤 Veja este perfil: ${k}`,
          B = g.map((N) => ({ sender_id: r, receiver_id: N, message: C })),
          { error: M } = await h.from("direct_messages").insert(B);
        if (M) throw M;
        H.success(`Compartilhado com ${g.length} pessoa(s)!`), a(!1);
      } catch {
        H.error("Erro ao compartilhar");
      } finally {
        j(!1);
      }
    };
  return e.jsx(Pe, {
    open: s,
    onOpenChange: a,
    children: e.jsxs(Ae, {
      className: "sm:max-w-md p-0 gap-0",
      children: [
        e.jsx($e, {
          className: "p-4 pb-3 border-b border-border",
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsx(Oe, {
                className: "text-lg font-semibold",
                children: "Compartilhar",
              }),
              e.jsx(S, {
                variant: "ghost",
                size: "sm",
                onClick: z,
                disabled: g.length === 0 || b,
                className: "text-primary font-semibold",
                children: b
                  ? e.jsx(pe, { className: "h-4 w-4 animate-spin" })
                  : "Enviar",
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "p-4 border-b border-border",
          children: e.jsxs("div", {
            className: "relative",
            children: [
              e.jsx(ls, {
                className:
                  "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
              }),
              e.jsx(De, {
                placeholder: "Pesquisar...",
                value: c,
                onChange: (k) => x(k.target.value),
                className: "pl-9 h-10 bg-muted border-0 rounded-xl",
              }),
              c &&
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7",
                  onClick: () => x(""),
                  children: e.jsx(Me, { className: "h-4 w-4" }),
                }),
            ],
          }),
        }),
        e.jsx(we, {
          className: "max-h-[300px]",
          children: u
            ? e.jsx("div", {
                className: "flex items-center justify-center py-8",
                children: e.jsx(pe, {
                  className: "h-6 w-6 animate-spin text-muted-foreground",
                }),
              })
            : m.length === 0
            ? e.jsx("div", {
                className: "text-center py-8 text-muted-foreground",
                children: "Nenhum usuário encontrado",
              })
            : e.jsx("div", {
                className: "p-2",
                children: m.map((k) =>
                  e.jsxs(
                    "button",
                    {
                      onClick: () => L(k.user_id),
                      className: R(
                        "flex items-center gap-3 w-full px-3 py-2 rounded-lg transition-colors",
                        g.includes(k.user_id)
                          ? "bg-primary/10"
                          : "hover:bg-muted/50"
                      ),
                      children: [
                        e.jsxs(te, {
                          className: "h-12 w-12",
                          children: [
                            e.jsx(re, { src: k.avatar_url || void 0 }),
                            e.jsx(ae, {
                              className: "bg-muted text-sm font-semibold",
                              children: k.name.charAt(0).toUpperCase(),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex-1 text-left",
                          children: [
                            e.jsx("p", {
                              className: "font-semibold text-sm",
                              children: k.username,
                            }),
                            e.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: k.name,
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: R(
                            "h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors",
                            g.includes(k.user_id)
                              ? "bg-primary border-primary"
                              : "border-muted-foreground/30"
                          ),
                          children:
                            g.includes(k.user_id) &&
                            e.jsx(Xe, {
                              className: "h-3 w-3 text-primary-foreground",
                            }),
                        }),
                      ],
                    },
                    k.user_id
                  )
                ),
              }),
        }),
        g.length > 0 &&
          e.jsx("div", {
            className: "p-4 border-t border-border bg-muted/30",
            children: e.jsxs("p", {
              className: "text-sm text-center text-muted-foreground",
              children: [g.length, " selecionado(s)"],
            }),
          }),
      ],
    }),
  });
}
const Ws = [
  { value: "spam", label: "Spam" },
  { value: "inappropriate", label: "Conteúdo impróprio" },
  { value: "harassment", label: "Assédio ou bullying" },
  { value: "false_info", label: "Informação falsa" },
  { value: "hate_speech", label: "Discurso de ódio" },
  { value: "violence", label: "Violência ou ameaça" },
  { value: "other", label: "Outro motivo" },
];
function La({ open: s, onOpenChange: a, postId: t, currentUserId: l }) {
  const [i, r] = n.useState(""),
    [c, x] = n.useState(""),
    [m, o] = n.useState(!1),
    g = async () => {
      if (!i) {
        H.error("Selecione um motivo");
        return;
      }
      o(!0);
      try {
        const p =
            i === "other"
              ? `Outro: ${c || "Não especificado"}`
              : Ws.find((d) => d.value === i)?.label || i,
          { error: u } = await h
            .from("community_reports")
            .insert({
              post_id: t,
              reported_by: l,
              reason: p,
              status: "pending",
            });
        if (u)
          if (u.code === "23505") H.info("Você já denunciou esta publicação");
          else throw u;
        else H.success("Denúncia enviada com sucesso");
        a(!1), r(""), x("");
      } catch {
        H.error("Erro ao enviar denúncia");
      } finally {
        o(!1);
      }
    };
  return e.jsx(Pe, {
    open: s,
    onOpenChange: a,
    children: e.jsxs(Ae, {
      className: "sm:max-w-md",
      children: [
        e.jsx($e, {
          children: e.jsxs(Oe, {
            className: "flex items-center gap-2 text-destructive",
            children: [
              e.jsx(kt, { className: "h-5 w-5" }),
              "Denunciar publicação",
            ],
          }),
        }),
        e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children: "Por que você está denunciando esta publicação?",
            }),
            e.jsx(Ct, {
              value: i,
              onValueChange: r,
              children: Ws.map((p) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex items-center space-x-2 py-2",
                    children: [
                      e.jsx(St, { value: p.value, id: p.value }),
                      e.jsx(ss, {
                        htmlFor: p.value,
                        className: "cursor-pointer flex-1",
                        children: p.label,
                      }),
                    ],
                  },
                  p.value
                )
              ),
            }),
            i === "other" &&
              e.jsx(os, {
                placeholder: "Descreva o motivo...",
                value: c,
                onChange: (p) => x(p.target.value),
                className: "min-h-[80px]",
              }),
            e.jsxs("div", {
              className: "flex gap-2 pt-2",
              children: [
                e.jsx(S, {
                  variant: "outline",
                  className: "flex-1",
                  onClick: () => a(!1),
                  disabled: m,
                  children: "Cancelar",
                }),
                e.jsx(S, {
                  variant: "destructive",
                  className: "flex-1",
                  onClick: g,
                  disabled: m || !i,
                  children: m
                    ? e.jsx(pe, { className: "h-4 w-4 animate-spin" })
                    : "Enviar",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function bt(s, a) {
  const [t, l] = n.useState([]),
    [i, r] = n.useState(!1),
    [c, x] = n.useState(!0),
    m = async () => {
      if (!s) {
        x(!1);
        return;
      }
      try {
        const { data: o, error: g } = await h
          .from("community_stories")
          .select("*")
          .eq("user_id", s)
          .gt("expires_at", new Date().toISOString())
          .order("created_at", { ascending: !1 });
        if (g) throw g;
        const p = o || [];
        if ((l(p), s === a || p.length === 0)) {
          r(!1), x(!1);
          return;
        }
        const u = p.map((v) => v.id),
          { data: d, error: b } = await h
            .from("community_story_views")
            .select("story_id")
            .eq("user_id", a)
            .in("story_id", u);
        if (b) throw b;
        const j = new Set((d || []).map((v) => v.story_id)),
          w = p.some((v) => !j.has(v.id));
        r(w);
      } catch {
      } finally {
        x(!1);
      }
    };
  return (
    n.useEffect(() => {
      m();
    }, [s, a]),
    { stories: t, hasUnviewedStories: i, loading: c, refetch: m }
  );
}
function za({
  post: s,
  currentUserId: a,
  onLike: t,
  onDelete: l,
  onHashtagClick: i,
  onViewProfile: r,
  onViewStories: c,
  onShare: x,
}) {
  const [m, o] = n.useState(!1),
    [g, p] = n.useState(!1),
    [u, d] = n.useState([]),
    [b, j] = n.useState(!1),
    [w, v] = n.useState(!1),
    [L, z] = n.useState(!1),
    [k, C] = n.useState(!1),
    [B, M] = n.useState(!1),
    [N, q] = n.useState(!1),
    { stories: $, hasUnviewedStories: T } = bt(s.user_id, a),
    G = s.community_post_likes.some((F) => F.user_id === a),
    X = s.community_post_likes.length,
    I = s._count?.comments || 0;
  n.useEffect(() => {
    oe(), Z();
  }, [s.user_id, s.id]);
  const oe = async () => {
      try {
        const { data: F } = await h
          .from("user_badges")
          .select("badge_name, badge_color")
          .eq("user_id", s.user_id);
        d(F || []);
      } catch {}
    },
    Z = async () => {
      try {
        const { data: F } = await h
          .from("community_bookmarks")
          .select("id")
          .eq("user_id", a)
          .eq("post_id", s.id)
          .maybeSingle();
        j(!!F);
      } catch {}
    },
    Y = async () => {
      if (!k) {
        C(!0);
        try {
          b
            ? (await h
                .from("community_bookmarks")
                .delete()
                .eq("user_id", a)
                .eq("post_id", s.id),
              j(!1),
              H.success("Removido dos salvos"))
            : (await h
                .from("community_bookmarks")
                .insert({ user_id: a, post_id: s.id }),
              j(!0),
              H.success("Salvo!"));
        } catch {
          H.error("Erro ao salvar post");
        } finally {
          C(!1);
        }
      }
    },
    ee = () => {
      G || (t(s.id, !1), z(!0), setTimeout(() => z(!1), 1e3));
    },
    ce = () => {
      M(!0);
    },
    de = s.profiles?.name || "Usuário",
    he = s.profiles?.username || de.toLowerCase().replace(/\s+/g, ""),
    je = s.profiles?.avatar_url,
    O = u.some((F) => F.badge_name === "Verificado"),
    E = Fe(new Date(s.created_at), { addSuffix: !1, locale: Be }),
    Q = (F) =>
      F.split(/(#[\w\u00C0-\u00FF]+|@[\w\u00C0-\u00FF]+)/g).map((ie, be) =>
        ie.startsWith("#") || ie.startsWith("@")
          ? e.jsx(
              "span",
              {
                className:
                  "text-[#00376B] dark:text-[#E0F1FF] font-medium cursor-pointer hover:underline",
                onClick: (ve) => {
                  ve.stopPropagation(), ie.startsWith("#") && i && i(ie);
                },
                children: ie,
              },
              be
            )
          : ie
      ),
    A = s.text.length > 125 && !w ? s.text.substring(0, 125) + "..." : s.text;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("article", {
        className: "bg-background",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between px-3 py-2",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("button", {
                    onClick: () =>
                      $.length > 0 && c ? c(s.user_id) : r?.(s.user_id),
                    className: "relative",
                    children: e.jsx("div", {
                      className: R(
                        "rounded-full p-[2px]",
                        T
                          ? "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
                          : "bg-transparent"
                      ),
                      children: e.jsx("div", {
                        className: R(
                          "rounded-full",
                          T ? "bg-background p-[1.5px]" : ""
                        ),
                        children: e.jsxs(te, {
                          className: "h-8 w-8",
                          children: [
                            e.jsx(re, { src: je || void 0 }),
                            e.jsx(ae, {
                              className: "bg-muted text-xs font-semibold",
                              children: de.charAt(0).toUpperCase(),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx("button", {
                        onClick: () => r?.(s.user_id),
                        className:
                          "font-semibold text-sm hover:opacity-70 transition-opacity",
                        children: he,
                      }),
                      O && e.jsx(Ye, { size: "sm" }),
                      e.jsxs("span", {
                        className: "text-muted-foreground text-sm",
                        children: ["• ", E],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(fs, {
                children: [
                  e.jsx(ps, {
                    asChild: !0,
                    children: e.jsx(S, {
                      variant: "ghost",
                      size: "icon",
                      className: "h-8 w-8 hover:bg-transparent",
                      children: e.jsx(ws, { className: "h-5 w-5" }),
                    }),
                  }),
                  e.jsxs(gs, {
                    align: "end",
                    className: "w-48",
                    children: [
                      e.jsx(We, {
                        onClick: () => r?.(s.user_id),
                        children: "Ver perfil",
                      }),
                      s.user_id === a &&
                        l &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(us, {}),
                            e.jsx(We, {
                              className:
                                "text-destructive focus:text-destructive",
                              onClick: () => {
                                confirm("Excluir esta publicação?") && l(s.id);
                              },
                              children: "Excluir",
                            }),
                          ],
                        }),
                      s.user_id !== a &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(us, {}),
                            e.jsxs(We, {
                              className:
                                "text-destructive focus:text-destructive",
                              onClick: () => q(!0),
                              children: [
                                e.jsx(ha, { className: "h-4 w-4 mr-2" }),
                                "Denunciar",
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
          s.media_url &&
            e.jsxs("div", {
              className: "relative bg-muted cursor-pointer",
              onDoubleClick: ee,
              onClick: () => p(!0),
              children: [
                s.media_type === "image"
                  ? e.jsx("img", {
                      src: s.media_url,
                      alt: "Post",
                      className: "w-full aspect-square object-cover",
                      loading: "lazy",
                    })
                  : e.jsx("video", {
                      src: s.media_url,
                      className: "w-full aspect-square object-cover",
                      controls: !0,
                    }),
                L &&
                  e.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center pointer-events-none animate-in zoom-in-50 duration-300",
                    children: e.jsx(ke, {
                      className:
                        "h-28 w-28 text-white fill-white drop-shadow-2xl",
                    }),
                  }),
              ],
            }),
          e.jsxs("div", {
            className: "px-3 py-2.5",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between mb-2",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      e.jsx("button", {
                        onClick: () => t(s.id, G),
                        className:
                          "hover:opacity-60 transition-all active:scale-90",
                        children: e.jsx(ke, {
                          className: R(
                            "h-6 w-6 transition-all",
                            G ? "fill-red-500 text-red-500" : ""
                          ),
                        }),
                      }),
                      e.jsx("button", {
                        onClick: () => o(!0),
                        className: "hover:opacity-60 transition-opacity",
                        children: e.jsx(as, { className: "h-6 w-6" }),
                      }),
                      e.jsx("button", {
                        onClick: ce,
                        className: "hover:opacity-60 transition-opacity",
                        children: e.jsx(Xe, {
                          className: "h-6 w-6 -rotate-12",
                        }),
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    onClick: Y,
                    disabled: k,
                    className:
                      "hover:opacity-60 transition-opacity disabled:opacity-50",
                    children: e.jsx(Ke, {
                      className: R(
                        "h-6 w-6 transition-all",
                        b && "fill-current text-foreground"
                      ),
                    }),
                  }),
                ],
              }),
              X > 0 &&
                e.jsxs("button", {
                  className: "font-semibold text-sm mb-1",
                  children: [
                    X.toLocaleString(),
                    " ",
                    X === 1 ? "curtida" : "curtidas",
                  ],
                }),
              s.text &&
                e.jsxs("div", {
                  className: "text-sm",
                  children: [
                    e.jsx("button", {
                      onClick: () => r?.(s.user_id),
                      className:
                        "font-semibold hover:opacity-70 transition-opacity mr-1",
                      children: he,
                    }),
                    e.jsx("span", {
                      className: "whitespace-pre-wrap break-words",
                      children: Q(A),
                    }),
                    s.text.length > 125 &&
                      !w &&
                      e.jsx("button", {
                        onClick: () => v(!0),
                        className: "text-muted-foreground ml-1",
                        children: "mais",
                      }),
                  ],
                }),
              I > 0 &&
                e.jsxs("button", {
                  onClick: () => o(!0),
                  className: "text-sm text-muted-foreground mt-1",
                  children: [
                    "Ver ",
                    I === 1 ? "1 comentário" : `todos os ${I} comentários`,
                  ],
                }),
            ],
          }),
        ],
      }),
      e.jsx(qa, { open: m, onOpenChange: o, postId: s.id, currentUserId: a }),
      s.media_url &&
        e.jsx(ua, {
          open: g,
          onOpenChange: p,
          mediaUrl: s.media_url,
          mediaType: s.media_type,
        }),
      e.jsx(Ua, {
        open: B,
        onOpenChange: M,
        postId: s.id,
        shareType: "post",
        currentUserId: a,
      }),
      e.jsx(La, { open: N, onOpenChange: q, postId: s.id, currentUserId: a }),
    ],
  });
}
function Ta({
  currentUserId: s,
  targetUserId: a,
  variant: t = "default",
  className: l = "",
}) {
  const { toast: i } = rs(),
    [r, c] = n.useState(!1),
    [x, m] = n.useState(!1),
    [o, g] = n.useState(!0);
  n.useEffect(() => {
    p();
  }, [s, a]);
  const p = async () => {
      try {
        const { data: d, error: b } = await h
          .from("community_follows")
          .select("id")
          .eq("follower_id", s)
          .eq("following_id", a)
          .single();
        c(!!d);
      } catch {
        c(!1);
      } finally {
        g(!1);
      }
    },
    u = async () => {
      if (!x) {
        m(!0);
        try {
          if (r) {
            const { error: d } = await h
              .from("community_follows")
              .delete()
              .eq("follower_id", s)
              .eq("following_id", a);
            if (d) throw d;
            c(!1), i({ title: "Deixou de seguir" });
          } else {
            const { error: d } = await h
              .from("community_follows")
              .insert({ follower_id: s, following_id: a });
            if (d) throw d;
            c(!0),
              Us(a, s, "follow"),
              i({
                title: "Seguindo!",
                description:
                  "Você agora verá os posts desta pessoa no seu feed",
              });
          }
        } catch (d) {
          i({ title: "Erro", description: d.message, variant: "destructive" });
        } finally {
          m(!1);
        }
      }
    };
  return o
    ? e.jsx(S, {
        variant: t,
        size: "sm",
        disabled: !0,
        className: l,
        children: e.jsx(pe, { className: "h-4 w-4 animate-spin" }),
      })
    : e.jsx(S, {
        variant: r ? "outline" : t,
        size: "sm",
        onClick: u,
        disabled: x,
        className: `rounded-full font-bold transition-all hover-scale ${l}`,
        children: x
          ? e.jsx(pe, { className: "h-4 w-4 animate-spin" })
          : r
          ? "Seguindo"
          : "Seguir",
      });
}
function vs({
  open: s,
  onOpenChange: a,
  post: t,
  posts: l = [],
  currentUserId: i,
  onLike: r,
  onDelete: c,
  onViewProfile: x,
  onNavigate: m,
}) {
  const o = is(),
    [g, p] = n.useState([]),
    [u, d] = n.useState(""),
    [b, j] = n.useState(!1),
    [w, v] = n.useState(!1),
    [L, z] = n.useState([]),
    [k, C] = n.useState(!1),
    [B, M] = n.useState(!1);
  n.useEffect(() => {
    t && s && (N(), q());
  }, [t?.id, s]);
  const N = async () => {
      if (t) {
        j(!0);
        try {
          const { data: O, error: E } = await h
            .from("community_comments")
            .select("*")
            .eq("post_id", t.id)
            .order("created_at", { ascending: !0 });
          if (E) throw E;
          const Q = await Promise.all(
            (O || []).map(async (A) => {
              const { data: F } = await h
                .from("profiles")
                .select("name, avatar_url, username")
                .eq("user_id", A.user_id)
                .single();
              return { ...A, user: F || { name: "Usuário", avatar_url: null } };
            })
          );
          p(Q);
        } catch {
        } finally {
          j(!1);
        }
      }
    },
    q = async () => {
      if (t)
        try {
          const { data: O } = await h
            .from("user_badges")
            .select("badge_name, badge_color")
            .eq("user_id", t.user_id);
          z(O || []);
        } catch {}
    },
    $ = async () => {
      if (!(!u.trim() || !t || w)) {
        v(!0);
        try {
          const { error: O } = await h
            .from("community_comments")
            .insert({ post_id: t.id, user_id: i, text: u.trim() });
          if (O) throw O;
          d(""), N(), H.success("Comentário adicionado!");
        } catch {
          H.error("Erro ao comentar");
        } finally {
          v(!1);
        }
      }
    },
    T = () => {
      if (!t) return;
      t.community_post_likes.some((E) => E.user_id === i) ||
        (r(t.id, !1), M(!0), setTimeout(() => M(!1), 1e3));
    },
    G = async () => {
      if (!t) return;
      const O = `${window.location.origin}/comunidade/post/${t.id}`;
      try {
        navigator.share
          ? await navigator.share({
              title: "TechOS Community",
              text: t.text.substring(0, 100),
              url: O,
            })
          : (await navigator.clipboard.writeText(O),
            H.success("Link copiado!"));
      } catch (E) {
        E.name !== "AbortError" &&
          (await navigator.clipboard.writeText(O), H.success("Link copiado!"));
      }
    };
  if (!t) return null;
  const X = t.community_post_likes.some((O) => O.user_id === i),
    I = t.community_post_likes.length,
    oe = t.profiles?.name || "Usuário",
    Z = t.profiles?.username || oe.toLowerCase().replace(/\s+/g, ""),
    Y = t.profiles?.avatar_url,
    ee = L.some((O) => O.badge_name === "Verificado"),
    ce = Fe(new Date(t.created_at), { addSuffix: !1, locale: Be }),
    de = l.findIndex((O) => O.id === t.id),
    he = de > 0,
    je = de < l.length - 1;
  return e.jsx(Pe, {
    open: s,
    onOpenChange: a,
    children: e.jsx(Ae, {
      className: R(
        "p-0 gap-0 bg-background overflow-hidden border-0",
        o
          ? "max-w-full w-full h-[100dvh] max-h-[100dvh] rounded-none"
          : "max-w-5xl w-[95vw] max-h-[90vh] rounded-xl"
      ),
      children: e.jsxs("div", {
        className: R(
          "flex h-full",
          o ? "flex-col overflow-hidden" : "flex-row"
        ),
        children: [
          e.jsxs("div", {
            className: R(
              "relative bg-black flex items-center justify-center flex-shrink-0",
              o ? "w-full h-[45vh]" : "w-3/5 min-h-[500px]"
            ),
            children: [
              o &&
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "absolute top-2 left-2 z-50 text-white bg-black/50 hover:bg-black/70",
                  onClick: () => a(!1),
                  children: e.jsx(Me, { className: "h-5 w-5" }),
                }),
              !o &&
                he &&
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "absolute left-2 z-50 bg-white/90 hover:bg-white text-black rounded-full shadow-lg",
                  onClick: () => m?.("prev"),
                  children: e.jsx(bs, { className: "h-5 w-5" }),
                }),
              !o &&
                je &&
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  className:
                    "absolute right-2 z-50 bg-white/90 hover:bg-white text-black rounded-full shadow-lg",
                  onClick: () => m?.("next"),
                  children: e.jsx(js, { className: "h-5 w-5" }),
                }),
              t.media_url
                ? e.jsxs("div", {
                    className: "w-full h-full flex items-center justify-center",
                    onDoubleClick: T,
                    children: [
                      t.media_type === "image"
                        ? e.jsx("img", {
                            src: t.media_url,
                            alt: "Post",
                            className: "max-w-full max-h-full object-contain",
                          })
                        : e.jsx("video", {
                            src: t.media_url,
                            className: "max-w-full max-h-full",
                            controls: !0,
                            autoPlay: !0,
                          }),
                      B &&
                        e.jsx("div", {
                          className:
                            "absolute inset-0 flex items-center justify-center pointer-events-none animate-in zoom-in-50 duration-300",
                          children: e.jsx(ke, {
                            className:
                              "h-28 w-28 text-white fill-white drop-shadow-2xl",
                          }),
                        }),
                    ],
                  })
                : e.jsx("div", {
                    className:
                      "w-full h-full flex items-center justify-center bg-muted p-8",
                    children: e.jsx("p", {
                      className: "text-lg text-center whitespace-pre-wrap",
                      children: t.text,
                    }),
                  }),
            ],
          }),
          e.jsxs("div", {
            className: R(
              "flex flex-col bg-background min-h-0",
              o ? "flex-1 overflow-hidden" : "w-2/5 border-l border-border"
            ),
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center justify-between p-4 border-b border-border",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("button", {
                        onClick: () => x?.(t.user_id),
                        children: e.jsxs(te, {
                          className: "h-8 w-8",
                          children: [
                            e.jsx(re, { src: Y || void 0 }),
                            e.jsx(ae, {
                              className: "text-xs",
                              children: oe.charAt(0).toUpperCase(),
                            }),
                          ],
                        }),
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                          e.jsx("button", {
                            onClick: () => x?.(t.user_id),
                            className: "font-semibold text-sm hover:opacity-70",
                            children: Z,
                          }),
                          ee && e.jsx(Ye, { size: "sm" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(fs, {
                    children: [
                      e.jsx(ps, {
                        asChild: !0,
                        children: e.jsx(S, {
                          variant: "ghost",
                          size: "icon",
                          className: "h-8 w-8",
                          children: e.jsx(ws, { className: "h-5 w-5" }),
                        }),
                      }),
                      e.jsxs(gs, {
                        align: "end",
                        children: [
                          e.jsx(We, { onClick: G, children: "Copiar link" }),
                          e.jsx(We, {
                            onClick: () => x?.(t.user_id),
                            children: "Ver perfil",
                          }),
                          t.user_id === i &&
                            c &&
                            e.jsxs(e.Fragment, {
                              children: [
                                e.jsx(us, {}),
                                e.jsx(We, {
                                  className: "text-destructive",
                                  onClick: () => {
                                    confirm("Excluir esta publicação?") &&
                                      (c(t.id), a(!1));
                                  },
                                  children: "Excluir",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(we, {
                className: "flex-1 min-h-0",
                children: e.jsxs("div", {
                  className: "p-4 space-y-4",
                  children: [
                    t.text &&
                      t.media_url &&
                      e.jsxs("div", {
                        className: "flex gap-3",
                        children: [
                          e.jsxs(te, {
                            className: "h-8 w-8 flex-shrink-0",
                            children: [
                              e.jsx(re, { src: Y || void 0 }),
                              e.jsx(ae, {
                                className: "text-xs",
                                children: oe.charAt(0).toUpperCase(),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsxs("p", {
                                className: "text-sm",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold mr-2",
                                    children: Z,
                                  }),
                                  t.text,
                                ],
                              }),
                              e.jsx("p", {
                                className: "text-xs text-muted-foreground mt-1",
                                children: ce,
                              }),
                            ],
                          }),
                        ],
                      }),
                    g.map((O) =>
                      e.jsxs(
                        "div",
                        {
                          className: "flex gap-3",
                          children: [
                            e.jsxs(te, {
                              className: "h-8 w-8 flex-shrink-0",
                              children: [
                                e.jsx(re, {
                                  src: O.user?.avatar_url || void 0,
                                }),
                                e.jsx(ae, {
                                  className: "text-xs",
                                  children:
                                    O.user?.name?.charAt(0).toUpperCase() ||
                                    "U",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex-1",
                              children: [
                                e.jsxs("p", {
                                  className: "text-sm",
                                  children: [
                                    e.jsx("span", {
                                      className: "font-semibold mr-2",
                                      children:
                                        O.user?.username ||
                                        O.user?.name
                                          ?.toLowerCase()
                                          .replace(/\s+/g, ""),
                                    }),
                                    O.text,
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children: Fe(new Date(O.created_at), {
                                    addSuffix: !1,
                                    locale: Be,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        O.id
                      )
                    ),
                    g.length === 0 &&
                      !b &&
                      e.jsx("p", {
                        className:
                          "text-sm text-muted-foreground text-center py-8",
                        children: "Nenhum comentário ainda. Seja o primeiro!",
                      }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "border-t border-border p-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-3",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          e.jsx("button", {
                            onClick: () => r(t.id, X),
                            className:
                              "hover:opacity-60 transition-all active:scale-90",
                            children: e.jsx(ke, {
                              className: R(
                                "h-6 w-6 transition-all",
                                X ? "fill-red-500 text-red-500" : ""
                              ),
                            }),
                          }),
                          e.jsx("button", {
                            className: "hover:opacity-60",
                            children: e.jsx(as, { className: "h-6 w-6" }),
                          }),
                          e.jsx("button", {
                            onClick: G,
                            className: "hover:opacity-60",
                            children: e.jsx(Xe, {
                              className: "h-6 w-6 -rotate-12",
                            }),
                          }),
                        ],
                      }),
                      e.jsx("button", {
                        onClick: () => C(!k),
                        className: "hover:opacity-60",
                        children: e.jsx(Ke, {
                          className: R("h-6 w-6", k && "fill-current"),
                        }),
                      }),
                    ],
                  }),
                  I > 0 &&
                    e.jsxs("p", {
                      className: "font-semibold text-sm mb-2",
                      children: [
                        I.toLocaleString(),
                        " ",
                        I === 1 ? "curtida" : "curtidas",
                      ],
                    }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground uppercase mb-3",
                    children: ce,
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-3 pt-3 border-t border-border",
                    children: [
                      e.jsx(S, {
                        variant: "ghost",
                        size: "icon",
                        className: "h-8 w-8",
                        children: e.jsx(Ps, { className: "h-5 w-5" }),
                      }),
                      e.jsx(De, {
                        placeholder: "Adicione um comentário...",
                        value: u,
                        onChange: (O) => d(O.target.value),
                        onKeyDown: (O) => O.key === "Enter" && $(),
                        className:
                          "flex-1 border-0 bg-transparent p-0 focus-visible:ring-0",
                      }),
                      e.jsx(S, {
                        variant: "ghost",
                        size: "sm",
                        onClick: $,
                        disabled: !u.trim() || w,
                        className:
                          "text-primary font-semibold disabled:opacity-50",
                        children: "Publicar",
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
  });
}
function jt({
  userId: s,
  stories: a,
  currentUserId: t,
  onClose: l,
  onStartDM: i,
}) {
  const [r, c] = n.useState(0),
    [x, m] = n.useState(0),
    [o, g] = n.useState(!1),
    [p, u] = n.useState(null),
    [d, b] = n.useState(0),
    [j, w] = n.useState(""),
    [v, L] = n.useState(!1),
    [z, k] = n.useState([]),
    [C, B] = n.useState([]),
    [M, N] = n.useState(!1),
    [q, $] = n.useState(5e3),
    [T, G] = n.useState(!1),
    [X, I] = n.useState(0),
    [oe, Z] = n.useState("views"),
    Y = n.useRef(null),
    ee = n.useRef(null),
    ce = n.useRef(null),
    de = 5e3,
    he = 2e4;
  n.useEffect(() => {
    E();
  }, [s]),
    n.useEffect(() => {
      a[r] && (ve(a[r].id), Q(a[r].id), A(a[r].id));
    }, [r]),
    n.useEffect(() => {
      const U = a[r];
      if (U)
        return (
          U.media_type !== "video" && ($(de), o || O(de)),
          () => {
            Y.current && clearTimeout(Y.current),
              ee.current && clearInterval(ee.current);
          }
        );
    }, [r, o]);
  const je = (U) => {
      const ne = U.currentTarget,
        ye = Math.min(ne.duration * 1e3, he);
      $(ye), o || O(ye);
    },
    O = (U) => {
      Y.current && clearTimeout(Y.current),
        ee.current && clearInterval(ee.current),
        m(0);
      const ne = Date.now();
      (ee.current = setInterval(() => {
        const Ue = ((Date.now() - ne) / U) * 100;
        m(Math.min(Ue, 100));
      }, 50)),
        (Y.current = setTimeout(() => {
          Ne();
        }, U));
    },
    E = async () => {
      const { data: U } = await h
        .from("profiles")
        .select("name, avatar_url")
        .eq("user_id", s)
        .single();
      U && u(U);
    },
    Q = async (U) => {
      const { count: ne } = await h
        .from("community_story_views")
        .select("*", { count: "exact", head: !0 })
        .eq("story_id", U);
      b(ne || 0);
    },
    A = async (U) => {
      const { data: ne } = await h
        .from("community_story_likes")
        .select("id")
        .eq("story_id", U)
        .eq("user_id", t)
        .maybeSingle();
      G(!!ne);
      const { count: ye } = await h
        .from("community_story_likes")
        .select("*", { count: "exact", head: !0 })
        .eq("story_id", U);
      I(ye || 0);
    },
    F = async () => {
      if (s === t) return;
      const U = a[r].id;
      try {
        T
          ? (await h
              .from("community_story_likes")
              .delete()
              .eq("story_id", U)
              .eq("user_id", t),
            G(!1),
            I((ne) => Math.max(0, ne - 1)))
          : (await h
              .from("community_story_likes")
              .insert({ story_id: U, user_id: t }),
            G(!0),
            I((ne) => ne + 1),
            await h
              .from("direct_messages")
              .insert({
                sender_id: t,
                receiver_id: s,
                message: "❤️ Curtiu seu story!",
              }),
            H.success("Story curtido!"));
      } catch {}
    },
    xe = async (U) => {
      N(!0);
      try {
        const { data: ne } = await h
            .from("community_story_views")
            .select("user_id, viewed_at")
            .eq("story_id", U)
            .order("viewed_at", { ascending: !1 }),
          { data: ye } = await h
            .from("community_story_likes")
            .select("user_id, created_at")
            .eq("story_id", U)
            .order("created_at", { ascending: !1 }),
          Ue = (ne || []).map((P) => P.user_id),
          Qe = (ye || []).map((P) => P.user_id),
          qe = [...new Set([...Ue, ...Qe])];
        let y = new Map();
        if (qe.length > 0) {
          const { data: P } = await h
            .from("profiles")
            .select("user_id, name, avatar_url")
            .in("user_id", qe);
          y = new Map(P?.map((W) => [W.user_id, W]) || []);
        }
        const _ = (ne || []).map((P) => ({
            ...P,
            profile: y.get(P.user_id) || { name: "Usuário", avatar_url: null },
          })),
          f = (ye || []).map((P) => ({
            ...P,
            profile: y.get(P.user_id) || { name: "Usuário", avatar_url: null },
          }));
        k(_), B(f);
      } catch {
      } finally {
        N(!1);
      }
    },
    ie = () => {
      s === t &&
        (xe(a[r].id),
        L(!0),
        g(!0),
        Y.current && clearTimeout(Y.current),
        ee.current && clearInterval(ee.current));
    },
    be = async () => {
      if (!(!j.trim() || !i))
        try {
          const { error: U } = await h
            .from("direct_messages")
            .insert({
              sender_id: t,
              receiver_id: s,
              message: `📷 Respondeu ao seu story: ${j}`,
            });
          if (U) throw U;
          H.success("Resposta enviada!"), w("");
        } catch {
          H.error("Erro ao enviar resposta");
        }
    },
    ve = async (U) => {
      if (s !== t)
        try {
          await h
            .from("community_story_views")
            .upsert(
              { story_id: U, user_id: t },
              { onConflict: "story_id,user_id" }
            );
        } catch {}
    },
    Ne = () => {
      r < a.length - 1 ? c(r + 1) : l();
    },
    Se = () => {
      r > 0 && c(r - 1);
    },
    _e = () => {
      o
        ? (g(!1), O(q), ce.current && ce.current.play())
        : (g(!0),
          Y.current && clearTimeout(Y.current),
          ee.current && clearInterval(ee.current),
          ce.current && ce.current.pause());
    },
    Ie = async () => {
      if (s === t)
        try {
          const U = a[r].id;
          await h.from("community_story_views").delete().eq("story_id", U),
            await h.from("community_story_likes").delete().eq("story_id", U);
          const { error: ne } = await h
            .from("community_stories")
            .delete()
            .eq("id", U);
          if (ne) throw ne;
          H.success("Story excluído!"), l();
        } catch {
          H.error("Erro ao excluir story");
        }
    },
    Ce = a[r];
  return Ce
    ? e.jsxs("div", {
        className:
          "fixed inset-0 z-[100] bg-black flex items-center justify-center",
        children: [
          e.jsx(S, {
            variant: "ghost",
            size: "icon",
            onClick: l,
            className:
              "absolute top-4 right-4 z-50 text-white hover:bg-white/20",
            children: e.jsx(Me, { className: "h-6 w-6" }),
          }),
          r > 0 &&
            e.jsx(S, {
              variant: "ghost",
              size: "icon",
              onClick: Se,
              className:
                "absolute left-2 md:left-4 z-50 text-white hover:bg-white/20",
              children: e.jsx(bs, { className: "h-8 w-8" }),
            }),
          r < a.length - 1 &&
            e.jsx(S, {
              variant: "ghost",
              size: "icon",
              onClick: Ne,
              className:
                "absolute right-2 md:right-4 z-50 text-white hover:bg-white/20",
              children: e.jsx(js, { className: "h-8 w-8" }),
            }),
          e.jsxs("div", {
            className: "relative w-full max-w-md h-full max-h-[90vh] mx-4",
            children: [
              e.jsx("div", {
                className: "absolute top-2 left-2 right-2 z-50 flex gap-1",
                children: a.map((U, ne) =>
                  e.jsx(
                    "div",
                    {
                      className:
                        "flex-1 h-1 bg-white/30 rounded-full overflow-hidden",
                      children: e.jsx("div", {
                        className:
                          "h-full bg-white rounded-full transition-all duration-100",
                        style: {
                          width: ne < r ? "100%" : ne === r ? `${x}%` : "0%",
                        },
                      }),
                    },
                    ne
                  )
                ),
              }),
              e.jsxs("div", {
                className:
                  "absolute top-6 left-2 right-2 z-50 flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsxs(te, {
                        className: "h-10 w-10 border-2 border-white",
                        children: [
                          e.jsx(re, { src: p?.avatar_url || void 0 }),
                          e.jsx(ae, {
                            className:
                              "bg-gradient-to-br from-primary to-primary/60 text-primary-foreground",
                            children: p?.name?.charAt(0).toUpperCase() || "U",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-white font-semibold text-sm",
                            children: p?.name,
                          }),
                          e.jsx("p", {
                            className: "text-white/70 text-xs",
                            children: Fe(new Date(Ce.created_at), {
                              addSuffix: !0,
                              locale: Be,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1 sm:gap-2",
                    children: [
                      s === t &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsxs(S, {
                              variant: "ghost",
                              size: "sm",
                              onClick: ie,
                              className:
                                "text-white hover:bg-white/20 h-8 px-2 gap-1",
                              children: [
                                e.jsx(zs, { className: "h-4 w-4" }),
                                e.jsx("span", {
                                  className: "text-xs sm:text-sm",
                                  children: d,
                                }),
                              ],
                            }),
                            e.jsxs(S, {
                              variant: "ghost",
                              size: "sm",
                              onClick: ie,
                              className:
                                "text-white hover:bg-white/20 h-8 px-2 gap-1",
                              children: [
                                e.jsx(ke, { className: "h-4 w-4" }),
                                e.jsx("span", {
                                  className: "text-xs sm:text-sm",
                                  children: X,
                                }),
                              ],
                            }),
                            e.jsx(S, {
                              variant: "ghost",
                              size: "icon",
                              onClick: Ie,
                              className: "text-white hover:bg-white/20 h-8 w-8",
                              children: e.jsx(Is, { className: "h-4 w-4" }),
                            }),
                          ],
                        }),
                      e.jsx(S, {
                        variant: "ghost",
                        size: "icon",
                        onClick: _e,
                        className: "text-white hover:bg-white/20 h-8 w-8",
                        children: o
                          ? e.jsx(As, { className: "h-4 w-4" })
                          : e.jsx(xa, { className: "h-4 w-4" }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "w-full h-full flex items-center justify-center rounded-xl overflow-hidden",
                onClick: _e,
                children:
                  Ce.media_type === "video"
                    ? e.jsx("video", {
                        ref: ce,
                        src: Ce.media_url,
                        className: "w-full h-full object-contain",
                        autoPlay: !0,
                        playsInline: !0,
                        onLoadedMetadata: je,
                        onEnded: Ne,
                      })
                    : e.jsx("img", {
                        src: Ce.media_url,
                        alt: "Story",
                        className: "w-full h-full object-contain",
                      }),
              }),
              Ce.text &&
                e.jsx("div", {
                  className: "absolute bottom-24 left-4 right-4 z-50",
                  children: e.jsx("p", {
                    className:
                      "text-white text-center text-lg font-medium drop-shadow-lg bg-black/30 rounded-lg p-3",
                    children: Ce.text,
                  }),
                }),
              s !== t &&
                e.jsxs("div", {
                  className:
                    "absolute bottom-4 left-2 right-2 md:left-4 md:right-4 z-50 flex gap-2 items-center",
                  children: [
                    e.jsx(S, {
                      variant: "ghost",
                      size: "icon",
                      onClick: F,
                      className: `h-10 w-10 md:h-12 md:w-12 rounded-full transition-all ${
                        T
                          ? "text-red-500 bg-red-500/20 hover:bg-red-500/30"
                          : "text-white hover:bg-white/20"
                      }`,
                      children: e.jsx(ke, {
                        className: `h-5 w-5 md:h-6 md:w-6 ${
                          T ? "fill-current" : ""
                        }`,
                      }),
                    }),
                    X > 0 &&
                      e.jsx("span", {
                        className: "text-white text-sm font-medium",
                        children: X,
                      }),
                    i &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(De, {
                            placeholder: "Responder...",
                            value: j,
                            onChange: (U) => w(U.target.value),
                            onFocus: () => {
                              g(!0),
                                Y.current && clearTimeout(Y.current),
                                ee.current && clearInterval(ee.current);
                            },
                            onKeyDown: (U) => {
                              U.key === "Enter" && be();
                            },
                            className:
                              "flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 h-10 md:h-12 text-sm md:text-base",
                          }),
                          e.jsx(S, {
                            size: "icon",
                            onClick: be,
                            disabled: !j.trim(),
                            className:
                              "bg-primary hover:bg-primary/90 h-10 w-10 md:h-12 md:w-12",
                            children: e.jsx(Xe, {
                              className: "h-4 w-4 md:h-5 md:w-5",
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              e.jsxs("div", {
                className: "absolute inset-0 flex",
                style: { bottom: s !== t ? "80px" : "0" },
                children: [
                  e.jsx("div", {
                    className: "w-1/3 h-full",
                    onClick: (U) => {
                      U.stopPropagation(), Se();
                    },
                  }),
                  e.jsx("div", {
                    className: "w-1/3 h-full",
                    onClick: (U) => {
                      U.stopPropagation(), _e();
                    },
                  }),
                  e.jsx("div", {
                    className: "w-1/3 h-full",
                    onClick: (U) => {
                      U.stopPropagation(), Ne();
                    },
                  }),
                ],
              }),
            ],
          }),
          e.jsx(Pe, {
            open: v,
            onOpenChange: (U) => {
              L(U), U || (g(!1), O(q));
            },
            children: e.jsxs(Ae, {
              className: "sm:max-w-md max-h-[80vh]",
              children: [
                e.jsx($e, {
                  children: e.jsx(Oe, { children: "Estatísticas do Story" }),
                }),
                e.jsxs(Zs, {
                  value: oe,
                  onValueChange: (U) => Z(U),
                  className: "w-full",
                  children: [
                    e.jsxs(Js, {
                      className: "w-full grid grid-cols-2",
                      children: [
                        e.jsxs(Cs, {
                          value: "views",
                          className: "gap-2",
                          children: [
                            e.jsx(zs, { className: "h-4 w-4" }),
                            "Visualizações (",
                            z.length,
                            ")",
                          ],
                        }),
                        e.jsxs(Cs, {
                          value: "likes",
                          className: "gap-2",
                          children: [
                            e.jsx(ke, { className: "h-4 w-4" }),
                            "Curtidas (",
                            C.length,
                            ")",
                          ],
                        }),
                      ],
                    }),
                    e.jsx(Ss, {
                      value: "views",
                      className: "mt-4",
                      children: e.jsx(we, {
                        className: "h-[300px]",
                        children: M
                          ? e.jsx("div", {
                              className:
                                "flex items-center justify-center py-8",
                              children: e.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-8 w-8 border-b-2 border-primary",
                              }),
                            })
                          : z.length === 0
                          ? e.jsx("p", {
                              className:
                                "text-center text-muted-foreground py-8",
                              children: "Nenhuma visualização ainda",
                            })
                          : e.jsx("div", {
                              className: "space-y-2",
                              children: z.map((U) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50",
                                    children: [
                                      e.jsxs(te, {
                                        className: "h-10 w-10",
                                        children: [
                                          e.jsx(re, {
                                            src:
                                              U.profile?.avatar_url || void 0,
                                          }),
                                          e.jsx(ae, {
                                            className:
                                              "bg-gradient-to-br from-primary to-primary/60 text-primary-foreground",
                                            children:
                                              U.profile?.name
                                                ?.charAt(0)
                                                .toUpperCase() || "U",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "font-medium text-sm truncate",
                                            children: U.profile?.name,
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-xs text-muted-foreground",
                                            children: Fe(
                                              new Date(U.viewed_at),
                                              { addSuffix: !0, locale: Be }
                                            ),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  U.user_id
                                )
                              ),
                            }),
                      }),
                    }),
                    e.jsx(Ss, {
                      value: "likes",
                      className: "mt-4",
                      children: e.jsx(we, {
                        className: "h-[300px]",
                        children: M
                          ? e.jsx("div", {
                              className:
                                "flex items-center justify-center py-8",
                              children: e.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-8 w-8 border-b-2 border-primary",
                              }),
                            })
                          : C.length === 0
                          ? e.jsx("p", {
                              className:
                                "text-center text-muted-foreground py-8",
                              children: "Nenhuma curtida ainda",
                            })
                          : e.jsx("div", {
                              className: "space-y-2",
                              children: C.map((U) =>
                                e.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50",
                                    children: [
                                      e.jsxs(te, {
                                        className: "h-10 w-10",
                                        children: [
                                          e.jsx(re, {
                                            src:
                                              U.profile?.avatar_url || void 0,
                                          }),
                                          e.jsx(ae, {
                                            className:
                                              "bg-gradient-to-br from-primary to-primary/60 text-primary-foreground",
                                            children:
                                              U.profile?.name
                                                ?.charAt(0)
                                                .toUpperCase() || "U",
                                          }),
                                        ],
                                      }),
                                      e.jsxs("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "font-medium text-sm truncate",
                                            children: U.profile?.name,
                                          }),
                                          e.jsx("p", {
                                            className:
                                              "text-xs text-muted-foreground",
                                            children: Fe(
                                              new Date(U.created_at),
                                              { addSuffix: !0, locale: Be }
                                            ),
                                          }),
                                        ],
                                      }),
                                      e.jsx(ke, {
                                        className:
                                          "h-4 w-4 text-red-500 fill-red-500 flex-shrink-0",
                                      }),
                                    ],
                                  },
                                  U.user_id
                                )
                              ),
                            }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    : null;
}
function Ba({ open: s, onOpenChange: a, userName: t, userAvatar: l }) {
  return e.jsx(Pe, {
    open: s,
    onOpenChange: a,
    children: e.jsx(Ae, {
      className: "sm:max-w-lg p-0 bg-transparent border-none",
      children: e.jsx("div", {
        className: "flex items-center justify-center",
        children: l
          ? e.jsx("img", {
              src: l,
              alt: `Foto de ${t}`,
              className: "max-w-full max-h-[80vh] rounded-xl object-contain",
            })
          : e.jsx(te, {
              className: "h-64 w-64",
              children: e.jsx(ae, {
                className:
                  "bg-gradient-to-br from-primary to-primary/60 text-primary-foreground text-6xl font-bold",
                children: t.charAt(0).toUpperCase(),
              }),
            }),
      }),
    }),
  });
}
function Ls(s) {
  const [a, t] = n.useState([]),
    [l, i] = n.useState([]),
    [r, c] = n.useState(!0),
    x = n.useCallback(async () => {
      if (!s) {
        c(!1);
        return;
      }
      try {
        const { data: u, error: d } = await h
          .from("community_blocks")
          .select("blocked_id")
          .eq("blocker_id", s);
        if (d) throw d;
        const { data: b, error: j } = await h
          .from("community_blocks")
          .select("blocker_id")
          .eq("blocked_id", s);
        if (j) throw j;
        t(u?.map((w) => w.blocked_id) || []),
          i(b?.map((w) => w.blocker_id) || []);
      } catch {
      } finally {
        c(!1);
      }
    }, [s]);
  return (
    n.useEffect(() => {
      x();
    }, [x]),
    n.useEffect(() => {
      if (!s) return;
      const u = h
        .channel("community_blocks_realtime")
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "community_blocks",
            filter: `blocked_id=eq.${s}`,
          },
          async (d) => {
            const b = d.new;
            i((w) => [...w, b.blocker_id]);
            const { data: j } = await h
              .from("profiles")
              .select("name")
              .eq("user_id", b.blocker_id)
              .single();
            H.error(`${j?.name || "Um usuário"} bloqueou você`, {
              description:
                "Você não pode mais ver o perfil ou conteúdo deste usuário",
              duration: 5e3,
            });
          }
        )
        .on(
          "postgres_changes",
          {
            event: "DELETE",
            schema: "public",
            table: "community_blocks",
            filter: `blocked_id=eq.${s}`,
          },
          async (d) => {
            const b = d.old;
            i((w) => w.filter((v) => v !== b.blocker_id));
            const { data: j } = await h
              .from("profiles")
              .select("name")
              .eq("user_id", b.blocker_id)
              .single();
            H.success(`${j?.name || "Um usuário"} desbloqueou você`, {
              description:
                "Agora você pode ver o perfil e conteúdo deste usuário",
              duration: 5e3,
            });
          }
        )
        .subscribe();
      return () => {
        h.removeChannel(u);
      };
    }, [s]),
    {
      blockedUsers: a,
      blockedByUsers: l,
      isBlocked: (u) => a.includes(u),
      isBlockedBy: (u) => l.includes(u),
      blockUser: async (u) => {
        try {
          const { error: d } = await h
            .from("community_blocks")
            .insert({ blocker_id: s, blocked_id: u });
          if (d) throw d;
          t((b) => [...b, u]), H.success("Usuário bloqueado com sucesso");
        } catch {
          H.error("Erro ao bloquear usuário");
        }
      },
      unblockUser: async (u) => {
        try {
          const { error: d } = await h
            .from("community_blocks")
            .delete()
            .eq("blocker_id", s)
            .eq("blocked_id", u);
          if (d) throw d;
          t((b) => b.filter((j) => j !== u)),
            H.success("Usuário desbloqueado com sucesso");
        } catch {
          H.error("Erro ao desbloquear usuário");
        }
      },
      loading: r,
    }
  );
}
function $a({
  userId: s,
  currentUserId: a,
  onBack: t,
  onLike: l,
  onDelete: i,
  onStartDM: r,
}) {
  const c = is(),
    [x, m] = n.useState(null),
    [o, g] = n.useState([]),
    [p, u] = n.useState(!0),
    [d, b] = n.useState(0),
    [j, w] = n.useState(0),
    [v, L] = n.useState([]),
    [z, k] = n.useState(null),
    [C, B] = n.useState(!1),
    [M, N] = n.useState(!1),
    { stories: q, hasUnviewedStories: $ } = bt(s, a),
    {
      blockedByUsers: T,
      blockedUsers: G,
      blockUser: X,
      unblockUser: I,
    } = Ls(a),
    oe = T.includes(s),
    Z = G.includes(s);
  n.useEffect(() => {
    s && (ce(), Y(), ee());
  }, [s]);
  const Y = async () => {
      try {
        const { data: A } = await h
          .from("user_badges")
          .select("badge_name, badge_color")
          .eq("user_id", s);
        L(A || []);
      } catch {}
    },
    ee = async () => {
      try {
        const { count: A } = await h
            .from("community_follows")
            .select("*", { count: "exact", head: !0 })
            .eq("following_id", s),
          { count: F } = await h
            .from("community_follows")
            .select("*", { count: "exact", head: !0 })
            .eq("follower_id", s);
        b(A || 0), w(F || 0);
      } catch {}
    },
    ce = async () => {
      u(!0);
      try {
        const { data: A } = await h
          .from("profiles")
          .select(
            "name, username, whatsapp, bio, avatar_url, banner_url, created_at, store_name, store_address"
          )
          .eq("user_id", s)
          .single();
        m(A);
        const { data: F } = await h
            .from("community_posts")
            .select("*, community_post_likes (user_id)")
            .eq("user_id", s)
            .order("created_at", { ascending: !1 }),
          xe = await Promise.all(
            (F || []).map(async (ie) => {
              const { count: be } = await h
                .from("community_comments")
                .select("*", { count: "exact", head: !0 })
                .eq("post_id", ie.id);
              return {
                ...ie,
                profiles: A || { name: "Usuário", avatar_url: null },
                _count: { comments: be || 0 },
              };
            })
          );
        g(xe);
      } catch {
      } finally {
        u(!1);
      }
    },
    de = async () => {
      try {
        await X(s), H.success("Usuário bloqueado");
      } catch {
        H.error("Erro ao bloquear usuário");
      }
    },
    he = async () => {
      try {
        await I(s), H.success("Usuário desbloqueado");
      } catch {
        H.error("Erro ao desbloquear usuário");
      }
    };
  if (p)
    return e.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-background",
      children: e.jsx(pe, {
        className: "h-10 w-10 animate-spin text-muted-foreground",
      }),
    });
  if (oe || Z)
    return e.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        e.jsx("header", {
          className: "sticky top-0 z-50 bg-background border-b border-border",
          children: e.jsxs("div", {
            className: "flex items-center gap-4 h-14 px-4",
            children: [
              e.jsx(S, {
                variant: "ghost",
                size: "icon",
                onClick: t,
                className: "h-9 w-9",
                children: e.jsx(Ee, { className: "h-5 w-5" }),
              }),
              e.jsx("span", { className: "font-semibold", children: "Perfil" }),
            ],
          }),
        }),
        e.jsx("div", {
          className:
            "flex flex-col items-center justify-center min-h-[60vh] px-4",
          children: e.jsxs("div", {
            className: "max-w-md w-full text-center",
            children: [
              e.jsx("div", {
                className:
                  "mx-auto mb-6 h-24 w-24 rounded-full bg-destructive/10 flex items-center justify-center",
                children: e.jsx(fa, {
                  className: "h-12 w-12 text-destructive",
                }),
              }),
              e.jsx("h2", {
                className: "text-2xl font-bold mb-3",
                children: "Acesso Bloqueado",
              }),
              e.jsx("p", {
                className: "text-muted-foreground mb-8",
                children: oe
                  ? "Você foi bloqueado por este usuário."
                  : "Você bloqueou este usuário.",
              }),
              e.jsxs("div", {
                className: "flex gap-3 justify-center",
                children: [
                  e.jsxs(S, {
                    onClick: t,
                    variant: "outline",
                    children: [
                      e.jsx(Ee, { className: "h-4 w-4 mr-2" }),
                      "Voltar",
                    ],
                  }),
                  Z && e.jsx(S, { onClick: he, children: "Desbloquear" }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  if (!x)
    return e.jsx("div", {
      className: "min-h-screen bg-background",
      children: e.jsx("header", {
        className: "sticky top-0 z-50 bg-background border-b border-border",
        children: e.jsxs("div", {
          className: "flex items-center gap-4 h-14 px-4",
          children: [
            e.jsx(S, {
              variant: "ghost",
              size: "icon",
              onClick: t,
              className: "h-9 w-9",
              children: e.jsx(Ee, { className: "h-5 w-5" }),
            }),
            e.jsx("span", {
              className: "font-semibold",
              children: "Perfil não encontrado",
            }),
          ],
        }),
      }),
    });
  const je = x.username || x.name.toLowerCase().replace(/\s+/g, ""),
    O = v.some((A) => A.badge_name === "Verificado"),
    E = (A) => {
      if (!z) return;
      const F = o.findIndex((xe) => xe.id === z.id);
      A === "prev" && F > 0
        ? k(o[F - 1])
        : A === "next" && F < o.length - 1 && k(o[F + 1]);
    },
    Q = () => {
      q.length > 0 ? B(!0) : N(!0);
    };
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx("header", {
        className: "sticky top-0 z-50 bg-background border-b border-border",
        children: e.jsxs("div", {
          className: R(
            "flex items-center justify-between h-14 px-4",
            !c && "max-w-2xl mx-auto"
          ),
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  onClick: t,
                  className: "h-9 w-9",
                  children: e.jsx(Ee, { className: "h-5 w-5" }),
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx("span", {
                      className: "font-semibold text-lg",
                      children: je,
                    }),
                    O && e.jsx(Ye, { size: "sm" }),
                  ],
                }),
              ],
            }),
            e.jsxs(fs, {
              children: [
                e.jsx(ps, {
                  asChild: !0,
                  children: e.jsx(S, {
                    variant: "ghost",
                    size: "icon",
                    className: "h-9 w-9",
                    children: e.jsx(ws, { className: "h-5 w-5" }),
                  }),
                }),
                e.jsx(gs, {
                  align: "end",
                  children: e.jsx(We, {
                    onClick: de,
                    className: "text-destructive",
                    children: "Bloquear usuário",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(we, {
        className: "h-[calc(100vh-56px-56px)]",
        children: e.jsxs("div", {
          className: R("mx-auto", c ? "max-w-full" : "max-w-2xl"),
          children: [
            e.jsxs("div", {
              className: "px-4 py-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-start gap-6 mb-4",
                  children: [
                    e.jsx("div", {
                      className: "relative flex-shrink-0",
                      children: e.jsx("button", {
                        onClick: Q,
                        className: "relative group",
                        children: e.jsx("div", {
                          className: R(
                            "w-20 h-20 md:w-24 md:h-24 rounded-full p-0.5 bg-background",
                            $ && "ring-2 ring-primary"
                          ),
                          children: e.jsxs(te, {
                            className: "h-full w-full",
                            children: [
                              e.jsx(re, {
                                src: x.avatar_url || void 0,
                                className: "object-cover",
                              }),
                              e.jsx(ae, {
                                className: "bg-muted text-2xl font-bold",
                                children: x.name.charAt(0).toUpperCase(),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 flex justify-around pt-2",
                      children: [
                        e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className: "font-bold text-lg",
                              children: o.length,
                            }),
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "posts",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className: "font-bold text-lg",
                              children: d.toLocaleString(),
                            }),
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "seguidores",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className: "font-bold text-lg",
                              children: j.toLocaleString(),
                            }),
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "seguindo",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1 mb-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("span", {
                          className: "font-semibold",
                          children: x.name,
                        }),
                        O && e.jsx(Ye, { size: "sm" }),
                      ],
                    }),
                    x.store_name &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-1 text-sm text-muted-foreground",
                        children: [
                          e.jsx(et, { className: "h-3 w-3" }),
                          e.jsx("span", { children: x.store_name }),
                        ],
                      }),
                    x.bio &&
                      e.jsx("p", {
                        className: "text-sm whitespace-pre-wrap",
                        children: x.bio,
                      }),
                    x.store_address &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-1 text-sm text-muted-foreground",
                        children: [
                          e.jsx(ns, { className: "h-3 w-3" }),
                          e.jsx("span", { children: x.store_address }),
                        ],
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(Ta, {
                      currentUserId: a,
                      targetUserId: s,
                      variant: "default",
                      className: "flex-1 h-9",
                    }),
                    e.jsxs(S, {
                      variant: "secondary",
                      className: "flex-1 h-9 text-sm font-semibold",
                      onClick: () => r(s),
                      children: [
                        e.jsx(as, { className: "h-4 w-4 mr-2" }),
                        "Mensagem",
                      ],
                    }),
                    x.whatsapp &&
                      e.jsx(S, {
                        variant: "outline",
                        size: "icon",
                        className: "h-9 w-9",
                        onClick: () => {
                          const A = x.whatsapp.replace(/\D/g, ""),
                            F = A.startsWith("55") ? A : `55${A}`;
                          window.open(`https://wa.me/${F}`, "_blank");
                        },
                        children: "📱",
                      }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "border-t border-border",
              children: e.jsx("div", {
                className: "flex",
                children: e.jsx("button", {
                  className:
                    "flex-1 py-3 flex items-center justify-center border-b-2 border-foreground",
                  children: e.jsx(Ds, { className: "h-5 w-5" }),
                }),
              }),
            }),
            e.jsx("div", {
              className: "grid grid-cols-3 gap-0.5",
              children: o.map((A) =>
                e.jsxs(
                  "button",
                  {
                    className: "aspect-square relative group bg-muted",
                    onClick: () => k(A),
                    children: [
                      A.media_url
                        ? e.jsx(e.Fragment, {
                            children:
                              A.media_type === "video"
                                ? e.jsxs(e.Fragment, {
                                    children: [
                                      e.jsx("video", {
                                        src: A.media_url,
                                        className: "w-full h-full object-cover",
                                        muted: !0,
                                      }),
                                      e.jsx("div", {
                                        className: "absolute top-2 right-2",
                                        children: e.jsx(As, {
                                          className:
                                            "h-4 w-4 text-white drop-shadow-lg",
                                          fill: "white",
                                        }),
                                      }),
                                    ],
                                  })
                                : e.jsx("img", {
                                    src: A.media_url,
                                    alt: "",
                                    className: "w-full h-full object-cover",
                                    loading: "lazy",
                                  }),
                          })
                        : e.jsx("div", {
                            className:
                              "w-full h-full flex items-center justify-center p-2 bg-muted",
                            children: e.jsx("p", {
                              className:
                                "text-xs text-center line-clamp-4 text-muted-foreground",
                              children: A.text,
                            }),
                          }),
                      e.jsxs("div", {
                        className:
                          "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-1 text-white text-sm font-semibold",
                            children: [
                              e.jsx(ke, {
                                className: "h-4 w-4",
                                fill: "white",
                              }),
                              A.community_post_likes.length,
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "flex items-center gap-1 text-white text-sm font-semibold",
                            children: [
                              e.jsx(as, {
                                className: "h-4 w-4",
                                fill: "white",
                              }),
                              A._count?.comments || 0,
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  A.id
                )
              ),
            }),
            o.length === 0 &&
              e.jsxs("div", {
                className: "text-center py-16 px-4",
                children: [
                  e.jsx("div", {
                    className:
                      "w-20 h-20 rounded-full border-2 border-foreground/20 flex items-center justify-center mx-auto mb-4",
                    children: e.jsx(Ds, {
                      className: "h-10 w-10 text-foreground/20",
                    }),
                  }),
                  e.jsx("h3", {
                    className: "text-xl font-semibold mb-1",
                    children: "Sem publicações",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground text-sm",
                    children: "Ainda não há publicações",
                  }),
                ],
              }),
          ],
        }),
      }),
      e.jsx(vs, {
        open: !!z,
        onOpenChange: (A) => !A && k(null),
        post: z,
        posts: o,
        currentUserId: a,
        onLike: l,
        onDelete: i,
        onViewProfile: () => {},
        onNavigate: E,
      }),
      C &&
        q.length > 0 &&
        e.jsx(jt, {
          stories: q,
          userId: s,
          currentUserId: a,
          onClose: () => B(!1),
        }),
      e.jsx(Ba, {
        open: M,
        onOpenChange: N,
        userAvatar: x.avatar_url,
        userName: x.name,
      }),
    ],
  });
}
var Oa = Object.defineProperty,
  Fa = (s, a, t) =>
    a in s
      ? Oa(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (s[a] = t),
  fe = (s, a, t) => Fa(s, typeof a != "symbol" ? a + "" : a, t);
const hs = { x: 0, y: 0, width: 0, height: 0, unit: "px" },
  Je = (s, a, t) => Math.min(Math.max(s, a), t),
  Va = (...s) => s.filter((a) => a && typeof a == "string").join(" "),
  Ks = (s, a) =>
    s === a ||
    (s.width === a.width &&
      s.height === a.height &&
      s.x === a.x &&
      s.y === a.y &&
      s.unit === a.unit);
function Ha(s, a, t, l) {
  const i = Te(s, t, l);
  return (
    s.width && (i.height = i.width / a),
    s.height && (i.width = i.height * a),
    i.y + i.height > l && ((i.height = l - i.y), (i.width = i.height * a)),
    i.x + i.width > t && ((i.width = t - i.x), (i.height = i.width / a)),
    s.unit === "%" ? He(i, t, l) : i
  );
}
function Wa(s, a, t) {
  const l = Te(s, a, t);
  return (
    (l.x = (a - l.width) / 2),
    (l.y = (t - l.height) / 2),
    s.unit === "%" ? He(l, a, t) : l
  );
}
function He(s, a, t) {
  return s.unit === "%"
    ? { ...hs, ...s, unit: "%" }
    : {
        unit: "%",
        x: s.x ? (s.x / a) * 100 : 0,
        y: s.y ? (s.y / t) * 100 : 0,
        width: s.width ? (s.width / a) * 100 : 0,
        height: s.height ? (s.height / t) * 100 : 0,
      };
}
function Te(s, a, t) {
  return s.unit
    ? s.unit === "px"
      ? { ...hs, ...s, unit: "px" }
      : {
          unit: "px",
          x: s.x ? (s.x * a) / 100 : 0,
          y: s.y ? (s.y * t) / 100 : 0,
          width: s.width ? (s.width * a) / 100 : 0,
          height: s.height ? (s.height * t) / 100 : 0,
        }
    : { ...hs, ...s, unit: "px" };
}
function Xs(s, a, t, l, i, r = 0, c = 0, x = l, m = i) {
  const o = { ...s };
  let g = Math.min(r, l),
    p = Math.min(c, i),
    u = Math.min(x, l),
    d = Math.min(m, i);
  a &&
    (a > 1
      ? ((g = c ? c * a : g), (p = g / a), (u = x * a))
      : ((p = r ? r / a : p), (g = p * a), (d = m / a))),
    o.y < 0 && ((o.height = Math.max(o.height + o.y, p)), (o.y = 0)),
    o.x < 0 && ((o.width = Math.max(o.width + o.x, g)), (o.x = 0));
  const b = l - (o.x + o.width);
  b < 0 && ((o.x = Math.min(o.x, l - g)), (o.width += b));
  const j = i - (o.y + o.height);
  if (
    (j < 0 && ((o.y = Math.min(o.y, i - p)), (o.height += j)),
    o.width < g &&
      ((t === "sw" || t == "nw") && (o.x -= g - o.width), (o.width = g)),
    o.height < p &&
      ((t === "nw" || t == "ne") && (o.y -= p - o.height), (o.height = p)),
    o.width > u &&
      ((t === "sw" || t == "nw") && (o.x -= u - o.width), (o.width = u)),
    o.height > d &&
      ((t === "nw" || t == "ne") && (o.y -= d - o.height), (o.height = d)),
    a)
  ) {
    const w = o.width / o.height;
    if (w < a) {
      const v = Math.max(o.width / a, p);
      (t === "nw" || t == "ne") && (o.y -= v - o.height), (o.height = v);
    } else if (w > a) {
      const v = Math.max(o.height * a, g);
      (t === "sw" || t == "nw") && (o.x -= v - o.width), (o.width = v);
    }
  }
  return o;
}
function Ka(s, a, t, l) {
  const i = { ...s };
  return (
    a === "ArrowLeft"
      ? l === "nw"
        ? ((i.x -= t), (i.y -= t), (i.width += t), (i.height += t))
        : l === "w"
        ? ((i.x -= t), (i.width += t))
        : l === "sw"
        ? ((i.x -= t), (i.width += t), (i.height += t))
        : l === "ne"
        ? ((i.y += t), (i.width -= t), (i.height -= t))
        : l === "e"
        ? (i.width -= t)
        : l === "se" && ((i.width -= t), (i.height -= t))
      : a === "ArrowRight" &&
        (l === "nw"
          ? ((i.x += t), (i.y += t), (i.width -= t), (i.height -= t))
          : l === "w"
          ? ((i.x += t), (i.width -= t))
          : l === "sw"
          ? ((i.x += t), (i.width -= t), (i.height -= t))
          : l === "ne"
          ? ((i.y -= t), (i.width += t), (i.height += t))
          : l === "e"
          ? (i.width += t)
          : l === "se" && ((i.width += t), (i.height += t))),
    a === "ArrowUp"
      ? l === "nw"
        ? ((i.x -= t), (i.y -= t), (i.width += t), (i.height += t))
        : l === "n"
        ? ((i.y -= t), (i.height += t))
        : l === "ne"
        ? ((i.y -= t), (i.width += t), (i.height += t))
        : l === "sw"
        ? ((i.x += t), (i.width -= t), (i.height -= t))
        : l === "s"
        ? (i.height -= t)
        : l === "se" && ((i.width -= t), (i.height -= t))
      : a === "ArrowDown" &&
        (l === "nw"
          ? ((i.x += t), (i.y += t), (i.width -= t), (i.height -= t))
          : l === "n"
          ? ((i.y += t), (i.height -= t))
          : l === "ne"
          ? ((i.y += t), (i.width -= t), (i.height -= t))
          : l === "sw"
          ? ((i.x -= t), (i.width += t), (i.height += t))
          : l === "s"
          ? (i.height += t)
          : l === "se" && ((i.width += t), (i.height += t))),
    i
  );
}
const es = { capture: !0, passive: !1 };
let Xa = 0;
const Ve = class Re extends n.PureComponent {
  constructor() {
    super(...arguments),
      fe(this, "docMoveBound", !1),
      fe(this, "mouseDownOnCrop", !1),
      fe(this, "dragStarted", !1),
      fe(this, "evData", {
        startClientX: 0,
        startClientY: 0,
        startCropX: 0,
        startCropY: 0,
        clientX: 0,
        clientY: 0,
        isResize: !0,
      }),
      fe(this, "componentRef", n.createRef()),
      fe(this, "mediaRef", n.createRef()),
      fe(this, "resizeObserver"),
      fe(this, "initChangeCalled", !1),
      fe(this, "instanceId", `rc-${Xa++}`),
      fe(this, "state", { cropIsActive: !1, newCropIsBeingDrawn: !1 }),
      fe(this, "onCropPointerDown", (a) => {
        const { crop: t, disabled: l } = this.props,
          i = this.getBox();
        if (!t) return;
        const r = Te(t, i.width, i.height);
        if (l) return;
        a.cancelable && a.preventDefault(),
          this.bindDocMove(),
          this.componentRef.current.focus({ preventScroll: !0 });
        const c = a.target.dataset.ord,
          x = !!c;
        let m = a.clientX,
          o = a.clientY,
          g = r.x,
          p = r.y;
        if (c) {
          const u = a.clientX - i.x,
            d = a.clientY - i.y;
          let b = 0,
            j = 0;
          c === "ne" || c == "e"
            ? ((b = u - (r.x + r.width)),
              (j = d - r.y),
              (g = r.x),
              (p = r.y + r.height))
            : c === "se" || c === "s"
            ? ((b = u - (r.x + r.width)),
              (j = d - (r.y + r.height)),
              (g = r.x),
              (p = r.y))
            : c === "sw" || c == "w"
            ? ((b = u - r.x),
              (j = d - (r.y + r.height)),
              (g = r.x + r.width),
              (p = r.y))
            : (c === "nw" || c == "n") &&
              ((b = u - r.x),
              (j = d - r.y),
              (g = r.x + r.width),
              (p = r.y + r.height)),
            (m = g + i.x + b),
            (o = p + i.y + j);
        }
        (this.evData = {
          startClientX: m,
          startClientY: o,
          startCropX: g,
          startCropY: p,
          clientX: a.clientX,
          clientY: a.clientY,
          isResize: x,
          ord: c,
        }),
          (this.mouseDownOnCrop = !0),
          this.setState({ cropIsActive: !0 });
      }),
      fe(this, "onComponentPointerDown", (a) => {
        const {
            crop: t,
            disabled: l,
            locked: i,
            keepSelection: r,
            onChange: c,
          } = this.props,
          x = this.getBox();
        if (l || i || (r && t)) return;
        a.cancelable && a.preventDefault(),
          this.bindDocMove(),
          this.componentRef.current.focus({ preventScroll: !0 });
        const m = a.clientX - x.x,
          o = a.clientY - x.y,
          g = { unit: "px", x: m, y: o, width: 0, height: 0 };
        (this.evData = {
          startClientX: a.clientX,
          startClientY: a.clientY,
          startCropX: m,
          startCropY: o,
          clientX: a.clientX,
          clientY: a.clientY,
          isResize: !0,
        }),
          (this.mouseDownOnCrop = !0),
          c(Te(g, x.width, x.height), He(g, x.width, x.height)),
          this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 });
      }),
      fe(this, "onDocPointerMove", (a) => {
        const {
            crop: t,
            disabled: l,
            onChange: i,
            onDragStart: r,
          } = this.props,
          c = this.getBox();
        if (l || !t || !this.mouseDownOnCrop) return;
        a.cancelable && a.preventDefault(),
          this.dragStarted || ((this.dragStarted = !0), r && r(a));
        const { evData: x } = this;
        (x.clientX = a.clientX), (x.clientY = a.clientY);
        let m;
        x.isResize ? (m = this.resizeCrop()) : (m = this.dragCrop()),
          Ks(t, m) || i(Te(m, c.width, c.height), He(m, c.width, c.height));
      }),
      fe(this, "onComponentKeyDown", (a) => {
        const { crop: t, disabled: l, onChange: i, onComplete: r } = this.props;
        if (l) return;
        const c = a.key;
        let x = !1;
        if (!t) return;
        const m = this.getBox(),
          o = this.makePixelCrop(m),
          g = (navigator.platform.match("Mac") ? a.metaKey : a.ctrlKey)
            ? Re.nudgeStepLarge
            : a.shiftKey
            ? Re.nudgeStepMedium
            : Re.nudgeStep;
        if (
          (c === "ArrowLeft"
            ? ((o.x -= g), (x = !0))
            : c === "ArrowRight"
            ? ((o.x += g), (x = !0))
            : c === "ArrowUp"
            ? ((o.y -= g), (x = !0))
            : c === "ArrowDown" && ((o.y += g), (x = !0)),
          x)
        ) {
          a.cancelable && a.preventDefault(),
            (o.x = Je(o.x, 0, m.width - o.width)),
            (o.y = Je(o.y, 0, m.height - o.height));
          const p = Te(o, m.width, m.height),
            u = He(o, m.width, m.height);
          i(p, u), r && r(p, u);
        }
      }),
      fe(this, "onHandlerKeyDown", (a, t) => {
        const {
            aspect: l = 0,
            crop: i,
            disabled: r,
            minWidth: c = 0,
            minHeight: x = 0,
            maxWidth: m,
            maxHeight: o,
            onChange: g,
            onComplete: p,
          } = this.props,
          u = this.getBox();
        if (r || !i) return;
        if (
          a.key === "ArrowUp" ||
          a.key === "ArrowDown" ||
          a.key === "ArrowLeft" ||
          a.key === "ArrowRight"
        )
          a.stopPropagation(), a.preventDefault();
        else return;
        const d = (navigator.platform.match("Mac") ? a.metaKey : a.ctrlKey)
            ? Re.nudgeStepLarge
            : a.shiftKey
            ? Re.nudgeStepMedium
            : Re.nudgeStep,
          b = Te(i, u.width, u.height),
          j = Ka(b, a.key, d, t),
          w = Xs(j, l, t, u.width, u.height, c, x, m, o);
        if (!Ks(i, w)) {
          const v = He(w, u.width, u.height);
          g(w, v), p && p(w, v);
        }
      }),
      fe(this, "onDocPointerDone", (a) => {
        const {
            crop: t,
            disabled: l,
            onComplete: i,
            onDragEnd: r,
          } = this.props,
          c = this.getBox();
        this.unbindDocMove(),
          !(l || !t) &&
            this.mouseDownOnCrop &&
            ((this.mouseDownOnCrop = !1),
            (this.dragStarted = !1),
            r && r(a),
            i && i(Te(t, c.width, c.height), He(t, c.width, c.height)),
            this.setState({ cropIsActive: !1, newCropIsBeingDrawn: !1 }));
      }),
      fe(this, "onDragFocus", () => {
        var a;
        (a = this.componentRef.current) == null || a.scrollTo(0, 0);
      });
  }
  get document() {
    return document;
  }
  getBox() {
    const a = this.mediaRef.current;
    if (!a) return { x: 0, y: 0, width: 0, height: 0 };
    const { x: t, y: l, width: i, height: r } = a.getBoundingClientRect();
    return { x: t, y: l, width: i, height: r };
  }
  componentDidUpdate(a) {
    const { crop: t, onComplete: l } = this.props;
    if (l && !a.crop && t) {
      const { width: i, height: r } = this.getBox();
      i && r && l(Te(t, i, r), He(t, i, r));
    }
  }
  componentWillUnmount() {
    this.resizeObserver && this.resizeObserver.disconnect(),
      this.unbindDocMove();
  }
  bindDocMove() {
    this.docMoveBound ||
      (this.document.addEventListener("pointermove", this.onDocPointerMove, es),
      this.document.addEventListener("pointerup", this.onDocPointerDone, es),
      this.document.addEventListener(
        "pointercancel",
        this.onDocPointerDone,
        es
      ),
      (this.docMoveBound = !0));
  }
  unbindDocMove() {
    this.docMoveBound &&
      (this.document.removeEventListener(
        "pointermove",
        this.onDocPointerMove,
        es
      ),
      this.document.removeEventListener("pointerup", this.onDocPointerDone, es),
      this.document.removeEventListener(
        "pointercancel",
        this.onDocPointerDone,
        es
      ),
      (this.docMoveBound = !1));
  }
  getCropStyle() {
    const { crop: a } = this.props;
    if (a)
      return {
        top: `${a.y}${a.unit}`,
        left: `${a.x}${a.unit}`,
        width: `${a.width}${a.unit}`,
        height: `${a.height}${a.unit}`,
      };
  }
  dragCrop() {
    const { evData: a } = this,
      t = this.getBox(),
      l = this.makePixelCrop(t),
      i = a.clientX - a.startClientX,
      r = a.clientY - a.startClientY;
    return (
      (l.x = Je(a.startCropX + i, 0, t.width - l.width)),
      (l.y = Je(a.startCropY + r, 0, t.height - l.height)),
      l
    );
  }
  getPointRegion(a, t, l, i) {
    const { evData: r } = this,
      c = r.clientX - a.x,
      x = r.clientY - a.y;
    let m;
    i && t
      ? (m = t === "nw" || t === "n" || t === "ne")
      : (m = x < r.startCropY);
    let o;
    return (
      l && t
        ? (o = t === "nw" || t === "w" || t === "sw")
        : (o = c < r.startCropX),
      o ? (m ? "nw" : "sw") : m ? "ne" : "se"
    );
  }
  resolveMinDimensions(a, t, l = 0, i = 0) {
    const r = Math.min(l, a.width),
      c = Math.min(i, a.height);
    return !t || (!r && !c)
      ? [r, c]
      : t > 1
      ? r
        ? [r, r / t]
        : [c * t, c]
      : c
      ? [c * t, c]
      : [r, r / t];
  }
  resizeCrop() {
    const { evData: a } = this,
      { aspect: t = 0, maxWidth: l, maxHeight: i } = this.props,
      r = this.getBox(),
      [c, x] = this.resolveMinDimensions(
        r,
        t,
        this.props.minWidth,
        this.props.minHeight
      );
    let m = this.makePixelCrop(r);
    const o = this.getPointRegion(r, a.ord, c, x),
      g = a.ord || o;
    let p = a.clientX - a.startClientX,
      u = a.clientY - a.startClientY;
    ((c && g === "nw") || g === "w" || g === "sw") && (p = Math.min(p, -c)),
      ((x && g === "nw") || g === "n" || g === "ne") && (u = Math.min(u, -x));
    const d = { unit: "px", x: 0, y: 0, width: 0, height: 0 };
    o === "ne"
      ? ((d.x = a.startCropX),
        (d.width = p),
        t
          ? ((d.height = d.width / t), (d.y = a.startCropY - d.height))
          : ((d.height = Math.abs(u)), (d.y = a.startCropY - d.height)))
      : o === "se"
      ? ((d.x = a.startCropX),
        (d.y = a.startCropY),
        (d.width = p),
        t ? (d.height = d.width / t) : (d.height = u))
      : o === "sw"
      ? ((d.x = a.startCropX + p),
        (d.y = a.startCropY),
        (d.width = Math.abs(p)),
        t ? (d.height = d.width / t) : (d.height = u))
      : o === "nw" &&
        ((d.x = a.startCropX + p),
        (d.width = Math.abs(p)),
        t
          ? ((d.height = d.width / t), (d.y = a.startCropY - d.height))
          : ((d.height = Math.abs(u)), (d.y = a.startCropY + u)));
    const b = Xs(d, t, o, r.width, r.height, c, x, l, i);
    return (
      t || Re.xyOrds.indexOf(g) > -1
        ? (m = b)
        : Re.xOrds.indexOf(g) > -1
        ? ((m.x = b.x), (m.width = b.width))
        : Re.yOrds.indexOf(g) > -1 && ((m.y = b.y), (m.height = b.height)),
      (m.x = Je(m.x, 0, r.width - m.width)),
      (m.y = Je(m.y, 0, r.height - m.height)),
      m
    );
  }
  renderCropSelection() {
    const {
        ariaLabels: a = Re.defaultProps.ariaLabels,
        disabled: t,
        locked: l,
        renderSelectionAddon: i,
        ruleOfThirds: r,
        crop: c,
      } = this.props,
      x = this.getCropStyle();
    if (c)
      return ue.createElement(
        "div",
        {
          style: x,
          className: "ReactCrop__crop-selection",
          onPointerDown: this.onCropPointerDown,
          "aria-label": a.cropArea,
          tabIndex: 0,
          onKeyDown: this.onComponentKeyDown,
          role: "group",
        },
        !t &&
          !l &&
          ue.createElement(
            "div",
            {
              className: "ReactCrop__drag-elements",
              onFocus: this.onDragFocus,
            },
            ue.createElement("div", {
              className: "ReactCrop__drag-bar ord-n",
              "data-ord": "n",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-bar ord-e",
              "data-ord": "e",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-bar ord-s",
              "data-ord": "s",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-bar ord-w",
              "data-ord": "w",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-handle ord-nw",
              "data-ord": "nw",
              tabIndex: 0,
              "aria-label": a.nwDragHandle,
              onKeyDown: (m) => this.onHandlerKeyDown(m, "nw"),
              role: "button",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-handle ord-n",
              "data-ord": "n",
              tabIndex: 0,
              "aria-label": a.nDragHandle,
              onKeyDown: (m) => this.onHandlerKeyDown(m, "n"),
              role: "button",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-handle ord-ne",
              "data-ord": "ne",
              tabIndex: 0,
              "aria-label": a.neDragHandle,
              onKeyDown: (m) => this.onHandlerKeyDown(m, "ne"),
              role: "button",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-handle ord-e",
              "data-ord": "e",
              tabIndex: 0,
              "aria-label": a.eDragHandle,
              onKeyDown: (m) => this.onHandlerKeyDown(m, "e"),
              role: "button",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-handle ord-se",
              "data-ord": "se",
              tabIndex: 0,
              "aria-label": a.seDragHandle,
              onKeyDown: (m) => this.onHandlerKeyDown(m, "se"),
              role: "button",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-handle ord-s",
              "data-ord": "s",
              tabIndex: 0,
              "aria-label": a.sDragHandle,
              onKeyDown: (m) => this.onHandlerKeyDown(m, "s"),
              role: "button",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-handle ord-sw",
              "data-ord": "sw",
              tabIndex: 0,
              "aria-label": a.swDragHandle,
              onKeyDown: (m) => this.onHandlerKeyDown(m, "sw"),
              role: "button",
            }),
            ue.createElement("div", {
              className: "ReactCrop__drag-handle ord-w",
              "data-ord": "w",
              tabIndex: 0,
              "aria-label": a.wDragHandle,
              onKeyDown: (m) => this.onHandlerKeyDown(m, "w"),
              role: "button",
            })
          ),
        i &&
          ue.createElement(
            "div",
            {
              className: "ReactCrop__selection-addon",
              onPointerDown: (m) => m.stopPropagation(),
            },
            i(this.state)
          ),
        r &&
          ue.createElement(
            ue.Fragment,
            null,
            ue.createElement("div", {
              className: "ReactCrop__rule-of-thirds-hz",
            }),
            ue.createElement("div", {
              className: "ReactCrop__rule-of-thirds-vt",
            })
          )
      );
  }
  makePixelCrop(a) {
    const t = { ...hs, ...(this.props.crop || {}) };
    return Te(t, a.width, a.height);
  }
  render() {
    const {
        aspect: a,
        children: t,
        circularCrop: l,
        className: i,
        crop: r,
        disabled: c,
        locked: x,
        style: m,
        ruleOfThirds: o,
      } = this.props,
      { cropIsActive: g, newCropIsBeingDrawn: p } = this.state,
      u = r ? this.renderCropSelection() : null,
      d = Va(
        "ReactCrop",
        i,
        g && "ReactCrop--active",
        c && "ReactCrop--disabled",
        x && "ReactCrop--locked",
        p && "ReactCrop--new-crop",
        r && a && "ReactCrop--fixed-aspect",
        r && l && "ReactCrop--circular-crop",
        r && o && "ReactCrop--rule-of-thirds",
        !this.dragStarted &&
          r &&
          !r.width &&
          !r.height &&
          "ReactCrop--invisible-crop",
        l && "ReactCrop--no-animate"
      );
    return ue.createElement(
      "div",
      { ref: this.componentRef, className: d, style: m },
      ue.createElement(
        "div",
        {
          ref: this.mediaRef,
          className: "ReactCrop__child-wrapper",
          onPointerDown: this.onComponentPointerDown,
        },
        t
      ),
      r
        ? ue.createElement(
            "svg",
            {
              className: "ReactCrop__crop-mask",
              width: "100%",
              height: "100%",
            },
            ue.createElement(
              "defs",
              null,
              ue.createElement(
                "mask",
                { id: `hole-${this.instanceId}` },
                ue.createElement("rect", {
                  width: "100%",
                  height: "100%",
                  fill: "white",
                }),
                l
                  ? ue.createElement("ellipse", {
                      cx: `${r.x + r.width / 2}${r.unit}`,
                      cy: `${r.y + r.height / 2}${r.unit}`,
                      rx: `${r.width / 2}${r.unit}`,
                      ry: `${r.height / 2}${r.unit}`,
                      fill: "black",
                    })
                  : ue.createElement("rect", {
                      x: `${r.x}${r.unit}`,
                      y: `${r.y}${r.unit}`,
                      width: `${r.width}${r.unit}`,
                      height: `${r.height}${r.unit}`,
                      fill: "black",
                    })
              )
            ),
            ue.createElement("rect", {
              fill: "black",
              fillOpacity: 0.5,
              width: "100%",
              height: "100%",
              mask: `url(#hole-${this.instanceId})`,
            })
          )
        : void 0,
      u
    );
  }
};
fe(Ve, "xOrds", ["e", "w"]),
  fe(Ve, "yOrds", ["n", "s"]),
  fe(Ve, "xyOrds", ["nw", "ne", "se", "sw"]),
  fe(Ve, "nudgeStep", 1),
  fe(Ve, "nudgeStepMedium", 10),
  fe(Ve, "nudgeStepLarge", 100),
  fe(Ve, "defaultProps", {
    ariaLabels: {
      cropArea: "Use the arrow keys to move the crop selection area",
      nwDragHandle:
        "Use the arrow keys to move the north west drag handle to change the crop selection area",
      nDragHandle:
        "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
      neDragHandle:
        "Use the arrow keys to move the north east drag handle to change the crop selection area",
      eDragHandle:
        "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
      seDragHandle:
        "Use the arrow keys to move the south east drag handle to change the crop selection area",
      sDragHandle:
        "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
      swDragHandle:
        "Use the arrow keys to move the south west drag handle to change the crop selection area",
      wDragHandle:
        "Use the up and down arrow keys to move the west drag handle to change the crop selection area",
    },
  });
let Ya = Ve;
function Qa(s, a, t) {
  return Wa(Ha({ unit: "%", width: 90 }, t, s, a), s, a);
}
function Ga({ open: s, onOpenChange: a, imageSrc: t, onCropComplete: l }) {
  const [i, r] = n.useState(),
    [c, x] = n.useState(),
    [m, o] = n.useState(!1),
    g = n.useRef(null),
    p = 3,
    u = n.useCallback(
      (j) => {
        const { width: w, height: v } = j.currentTarget;
        r(Qa(w, v, p));
      },
      [p]
    ),
    d = async () => {
      if (!g.current || !c) return null;
      const j = g.current,
        w = document.createElement("canvas"),
        v = w.getContext("2d");
      if (!v) return null;
      const L = j.naturalWidth / j.width,
        z = j.naturalHeight / j.height,
        k = 1500,
        C = 500;
      return (
        (w.width = k),
        (w.height = C),
        (v.imageSmoothingQuality = "high"),
        v.drawImage(j, c.x * L, c.y * z, c.width * L, c.height * z, 0, 0, k, C),
        new Promise((B) => {
          w.toBlob((M) => B(M), "image/jpeg", 0.9);
        })
      );
    },
    b = async () => {
      o(!0);
      try {
        const j = await d();
        j && (l(j), a(!1));
      } catch {
      } finally {
        o(!1);
      }
    };
  return e.jsx(Pe, {
    open: s,
    onOpenChange: a,
    children: e.jsxs(Ae, {
      className: "sm:max-w-[700px] max-h-[90vh] overflow-y-auto",
      children: [
        e.jsx($e, {
          children: e.jsx(Oe, { children: "Ajustar Foto de Fundo" }),
        }),
        e.jsxs(Dt, {
          className: "bg-primary/10 border-primary/20",
          children: [
            e.jsx(st, { className: "h-4 w-4 text-primary" }),
            e.jsxs(Et, {
              className: "text-sm",
              children: [
                e.jsx("strong", { children: "Tamanho recomendado:" }),
                " 1500 x 500 pixels (proporção 3:1). Arraste para ajustar a área de corte.",
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "flex justify-center bg-muted/50 rounded-lg p-4 min-h-[200px]",
          children:
            t &&
            e.jsx(Ya, {
              crop: i,
              onChange: (j, w) => r(w),
              onComplete: (j) => x(j),
              aspect: p,
              className: "max-h-[400px]",
              children: e.jsx("img", {
                ref: g,
                src: t,
                alt: "Crop preview",
                onLoad: u,
                className: "max-h-[400px] object-contain",
              }),
            }),
        }),
        e.jsxs(Pt, {
          className: "gap-2 sm:gap-0",
          children: [
            e.jsx(S, {
              variant: "outline",
              onClick: () => a(!1),
              disabled: m,
              children: "Cancelar",
            }),
            e.jsx(S, {
              onClick: b,
              disabled: m || !c,
              children: m
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(pe, { className: "mr-2 h-4 w-4 animate-spin" }),
                      "Salvando...",
                    ],
                  })
                : "Salvar",
            }),
          ],
        }),
      ],
    }),
  });
}
function Ia({ userId: s, onBack: a, onLike: t, onViewPost: l }) {
  const { toast: i } = rs(),
    r = is(),
    [c, x] = n.useState(null),
    [m, o] = n.useState([]);
  n.useState([]);
  const [g, p] = n.useState(!0),
    [u, d] = n.useState(!1),
    [b, j] = n.useState(""),
    [w, v] = n.useState(""),
    [L, z] = n.useState(""),
    [k, C] = n.useState(""),
    [B, M] = n.useState(""),
    [N, q] = n.useState(""),
    [$, T] = n.useState(!1),
    [G, X] = n.useState(!1),
    [I, oe] = n.useState(0),
    [Z, Y] = n.useState(0),
    [ee, ce] = n.useState([]),
    [de, he] = n.useState(!1),
    [je, O] = n.useState(null),
    [E, Q] = n.useState(!1),
    [A, F] = n.useState(null),
    [xe, ie] = n.useState("posts"),
    [be, ve] = n.useState(null),
    Ne = n.useRef(null);
  n.useRef(null),
    n.useEffect(() => {
      _e(), Ie(), Ce(), Se();
    }, [s]);
  const Se = async () => {
      try {
        const { data: f } = await h
          .from("user_badges")
          .select("badge_name, badge_color")
          .eq("user_id", s);
        ce(f || []);
      } catch {}
    },
    _e = async () => {
      try {
        const { data: f, error: P } = await h
          .from("profiles")
          .select(
            "name, username, email, avatar_url, banner_url, bio, whatsapp, created_at, store_name, store_address"
          )
          .eq("user_id", s)
          .single();
        if (P) throw P;
        x(f),
          j(f.bio || ""),
          v(f.whatsapp || ""),
          z(f.store_name || ""),
          C(f.store_address || ""),
          M(f.username || ""),
          O(f.avatar_url);
      } catch (f) {
        i({
          title: "Erro ao carregar perfil",
          description: f.message,
          variant: "destructive",
        });
      }
    },
    Ie = async () => {
      p(!0);
      try {
        const { data: f, error: P } = await h
          .from("community_posts")
          .select("*, community_post_likes (user_id)")
          .eq("user_id", s)
          .order("created_at", { ascending: !1 });
        if (P) throw P;
        const W = await Promise.all(
          (f || []).map(async (J) => {
            const { count: me } = await h
              .from("community_comments")
              .select("*", { count: "exact", head: !0 })
              .eq("post_id", J.id);
            return { ...J, _count: { comments: me || 0 } };
          })
        );
        o(W);
      } catch (f) {
        i({
          title: "Erro ao carregar posts",
          description: f.message,
          variant: "destructive",
        });
      } finally {
        p(!1);
      }
    },
    Ce = async () => {
      try {
        const { count: f } = await h
            .from("community_follows")
            .select("*", { count: "exact", head: !0 })
            .eq("following_id", s),
          { count: P } = await h
            .from("community_follows")
            .select("*", { count: "exact", head: !0 })
            .eq("follower_id", s);
        oe(f || 0), Y(P || 0);
      } catch {}
    },
    U = async (f) => {
      if (!f.trim()) return q("Nome de usuário não pode estar vazio"), !1;
      const P = f.toLowerCase().replace(/[^a-z0-9_]/g, "");
      if (P !== f.toLowerCase())
        return q("Use apenas letras, números e underscore"), !1;
      if (P.length < 3) return q("Mínimo de 3 caracteres"), !1;
      T(!0);
      try {
        const { data: W } = await h
          .from("profiles")
          .select("user_id")
          .eq("username", P)
          .neq("user_id", s)
          .maybeSingle();
        return W ? (q("Este nome de usuário já está em uso"), !1) : (q(""), !0);
      } catch {
        return q("Erro ao verificar disponibilidade"), !1;
      } finally {
        T(!1);
      }
    },
    ne = async (f) => {
      const P = f.target.files?.[0];
      if (P) {
        if (P.size > 5 * 1024 * 1024) {
          i({
            title: "Erro",
            description: "Arquivo muito grande. Máximo: 5MB",
            variant: "destructive",
          });
          return;
        }
        he(!0);
        try {
          const W = await Rt(P),
            J = `${s}/${Date.now()}.jpg`,
            { error: me } = await h.storage
              .from("avatars")
              .upload(J, W, {
                cacheControl: "3600",
                upsert: !0,
                contentType: "image/jpeg",
              });
          if (me) throw me;
          const {
            data: { publicUrl: ge },
          } = h.storage.from("avatars").getPublicUrl(J);
          await h.from("profiles").update({ avatar_url: ge }).eq("user_id", s),
            O(ge),
            await _e(),
            i({ title: "Foto atualizada!" });
        } catch (W) {
          i({
            title: "Erro ao enviar foto",
            description: W.message,
            variant: "destructive",
          });
        } finally {
          he(!1);
        }
      }
    },
    ye = async () => {
      const f = B.toLowerCase().replace(/[^a-z0-9_]/g, "");
      if (!(f !== c?.username && !(await U(f)))) {
        X(!0);
        try {
          await h
            .from("profiles")
            .update({
              username: f,
              bio: b.trim() || null,
              whatsapp: w.trim() || null,
              store_name: L.trim() || null,
              store_address: k.trim() || null,
            })
            .eq("user_id", s),
            await _e(),
            d(!1),
            i({ title: "Perfil atualizado!" });
        } catch (P) {
          i({
            title: "Erro ao salvar perfil",
            description: P.message,
            variant: "destructive",
          });
        } finally {
          X(!1);
        }
      }
    },
    Ue = async () => {
      const f = `${window.location.origin}/comunidade/perfil/${c?.username}`;
      try {
        navigator.share
          ? await navigator.share({
              title: `${c?.name} no TechCommunity`,
              text: `Confira o perfil de ${c?.name}`,
              url: f,
            })
          : (await navigator.clipboard.writeText(f),
            i({ title: "Link copiado!" }));
      } catch {}
    };
  if (!c)
    return e.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-background",
      children: e.jsx(pe, {
        className: "h-10 w-10 animate-spin text-muted-foreground",
      }),
    });
  const Qe = c.username || c.name.toLowerCase().replace(/\s+/g, ""),
    qe = ee.some((f) => f.badge_name === "Verificado"),
    y = (f) => {
      if (!be) return;
      const P = m.findIndex((W) => W.id === be.id);
      f === "prev" && P > 0
        ? ve(m[P - 1])
        : f === "next" && P < m.length - 1 && ve(m[P + 1]);
    },
    _ = async (f, P) => {
      if (s)
        try {
          P
            ? (await h
                .from("community_post_likes")
                .delete()
                .eq("post_id", f)
                .eq("user_id", s),
              o((W) =>
                W.map((J) =>
                  J.id === f
                    ? {
                        ...J,
                        community_post_likes: J.community_post_likes.filter(
                          (me) => me.user_id !== s
                        ),
                      }
                    : J
                )
              ))
            : (await h
                .from("community_post_likes")
                .insert({ post_id: f, user_id: s }),
              o((W) =>
                W.map((J) =>
                  J.id === f
                    ? {
                        ...J,
                        community_post_likes: [
                          ...J.community_post_likes,
                          { user_id: s },
                        ],
                      }
                    : J
                )
              )),
            ve((W) =>
              !W || W.id !== f
                ? W
                : P
                ? {
                    ...W,
                    community_post_likes: W.community_post_likes.filter(
                      (J) => J.user_id !== s
                    ),
                  }
                : {
                    ...W,
                    community_post_likes: [
                      ...W.community_post_likes,
                      { user_id: s },
                    ],
                  }
            );
        } catch (W) {
          i({
            title: "Erro ao curtir",
            description: W.message,
            variant: "destructive",
          });
        }
    };
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx("header", {
        className: "sticky top-0 z-50 bg-background border-b border-border",
        children: e.jsxs("div", {
          className: R(
            "flex items-center justify-between h-14 px-4",
            !r && "max-w-2xl mx-auto"
          ),
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  onClick: a,
                  className: "h-9 w-9",
                  children: e.jsx(Ee, { className: "h-5 w-5" }),
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx("span", {
                      className: "font-semibold text-lg",
                      children: Qe,
                    }),
                    qe && e.jsx(Ye, { size: "sm" }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  className: "h-9 w-9",
                  onClick: Ue,
                  children: e.jsx(At, { className: "h-5 w-5" }),
                }),
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  className: "h-9 w-9",
                  onClick: () => d(!0),
                  children: e.jsx(Mt, { className: "h-5 w-5" }),
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(we, {
        className: "h-[calc(100vh-56px-56px)]",
        children: e.jsxs("div", {
          className: R("mx-auto", r ? "max-w-full" : "max-w-2xl"),
          children: [
            e.jsxs("div", {
              className: "px-4 py-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-start gap-6 mb-4",
                  children: [
                    e.jsxs("div", {
                      className: "relative flex-shrink-0",
                      children: [
                        e.jsxs("button", {
                          onClick: () => Ne.current?.click(),
                          className: "relative group",
                          disabled: de,
                          children: [
                            e.jsx("div", {
                              className:
                                "w-20 h-20 md:w-24 md:h-24 rounded-full ring-2 ring-border p-0.5 bg-background",
                              children: e.jsxs(te, {
                                className: "h-full w-full",
                                children: [
                                  e.jsx(re, {
                                    src: je || void 0,
                                    className: "object-cover",
                                  }),
                                  e.jsx(ae, {
                                    className: "bg-muted text-2xl font-bold",
                                    children: c.name.charAt(0).toUpperCase(),
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("div", {
                              className:
                                "absolute bottom-0 right-0 h-7 w-7 rounded-full bg-primary flex items-center justify-center border-2 border-background",
                              children: de
                                ? e.jsx(pe, {
                                    className:
                                      "h-3 w-3 text-primary-foreground animate-spin",
                                  })
                                : e.jsx(Ts, {
                                    className:
                                      "h-3 w-3 text-primary-foreground",
                                  }),
                            }),
                          ],
                        }),
                        e.jsx("input", {
                          ref: Ne,
                          type: "file",
                          accept: "image/*",
                          onChange: ne,
                          className: "hidden",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex-1 flex justify-around pt-2",
                      children: [
                        e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className: "font-bold text-lg",
                              children: m.length,
                            }),
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "posts",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className: "font-bold text-lg",
                              children: I.toLocaleString(),
                            }),
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "seguidores",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className: "font-bold text-lg",
                              children: Z.toLocaleString(),
                            }),
                            e.jsx("div", {
                              className: "text-xs text-muted-foreground",
                              children: "seguindo",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-1 mb-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("span", {
                          className: "font-semibold",
                          children: c.name,
                        }),
                        qe && e.jsx(Ye, { size: "sm" }),
                      ],
                    }),
                    c.store_name &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-1 text-sm text-muted-foreground",
                        children: [
                          e.jsx(et, { className: "h-3 w-3" }),
                          e.jsx("span", { children: c.store_name }),
                        ],
                      }),
                    c.bio &&
                      e.jsx("p", {
                        className: "text-sm whitespace-pre-wrap",
                        children: c.bio,
                      }),
                    c.store_address &&
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-1 text-sm text-muted-foreground",
                        children: [
                          e.jsx(ns, { className: "h-3 w-3" }),
                          e.jsx("span", { children: c.store_address }),
                        ],
                      }),
                    c.whatsapp &&
                      e.jsxs("button", {
                        onClick: () =>
                          window.open(
                            `https://wa.me/55${c.whatsapp?.replace(/\D/g, "")}`,
                            "_blank"
                          ),
                        className:
                          "flex items-center gap-1 text-sm text-primary",
                        children: [
                          e.jsx(pa, { className: "h-3 w-3" }),
                          e.jsxs("span", {
                            children: ["WhatsApp: ", c.whatsapp],
                          }),
                        ],
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(S, {
                      variant: "secondary",
                      className: "flex-1 h-9 text-sm font-semibold",
                      onClick: () => d(!0),
                      children: "Editar perfil",
                    }),
                    e.jsx(S, {
                      variant: "secondary",
                      className: "flex-1 h-9 text-sm font-semibold",
                      onClick: Ue,
                      children: "Compartilhar perfil",
                    }),
                  ],
                }),
              ],
            }),
            ee.filter((f) => f.badge_name !== "Verificado").length > 0 &&
              e.jsx("div", {
                className: "px-4 pb-3",
                children: e.jsx("div", {
                  className: "flex gap-2 overflow-x-auto pb-1 no-scrollbar",
                  children: ee
                    .filter((f) => f.badge_name !== "Verificado")
                    .map((f, P) =>
                      e.jsx(
                        qt,
                        {
                          className: R(
                            "px-3 py-1 text-xs font-medium border-0 whitespace-nowrap",
                            f.badge_color === "blue" &&
                              "bg-blue-500/20 text-blue-500",
                            f.badge_color === "green" &&
                              "bg-green-500/20 text-green-500",
                            f.badge_color === "purple" &&
                              "bg-purple-500/20 text-purple-500",
                            f.badge_color === "yellow" &&
                              "bg-yellow-500/20 text-yellow-500",
                            f.badge_color === "red" &&
                              "bg-red-500/20 text-red-500"
                          ),
                          children: f.badge_name,
                        },
                        P
                      )
                    ),
                }),
              }),
            e.jsx("div", {
              className: "border-t border-border",
              children: e.jsxs("div", {
                className: "flex",
                children: [
                  e.jsx("button", {
                    onClick: () => ie("posts"),
                    className: R(
                      "flex-1 py-3 flex justify-center border-b-2 transition-colors",
                      xe === "posts"
                        ? "border-foreground"
                        : "border-transparent text-muted-foreground"
                    ),
                    children: e.jsx(Ds, { className: "h-5 w-5" }),
                  }),
                  e.jsx("button", {
                    onClick: () => ie("saved"),
                    className: R(
                      "flex-1 py-3 flex justify-center border-b-2 transition-colors",
                      xe === "saved"
                        ? "border-foreground"
                        : "border-transparent text-muted-foreground"
                    ),
                    children: e.jsx(Ke, { className: "h-5 w-5" }),
                  }),
                ],
              }),
            }),
            g
              ? e.jsx("div", {
                  className: "flex items-center justify-center py-12",
                  children: e.jsx(pe, {
                    className: "h-8 w-8 animate-spin text-muted-foreground",
                  }),
                })
              : xe === "posts"
              ? m.length === 0
                ? e.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center py-16 px-4 text-center",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center mb-4",
                        children: e.jsx(Ts, { className: "h-10 w-10" }),
                      }),
                      e.jsx("h3", {
                        className: "text-2xl font-light mb-2",
                        children: "Compartilhe fotos",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Quando você compartilhar fotos, elas aparecerão no seu perfil.",
                      }),
                    ],
                  })
                : e.jsx("div", {
                    className: "grid grid-cols-3 gap-0.5",
                    children: m.map((f) =>
                      e.jsxs(
                        "button",
                        {
                          onClick: () => ve(f),
                          className:
                            "aspect-square relative group overflow-hidden bg-muted",
                          children: [
                            f.media_url
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    f.media_type === "video"
                                      ? e.jsx("video", {
                                          src: f.media_url,
                                          className:
                                            "w-full h-full object-cover",
                                        })
                                      : e.jsx("img", {
                                          src: f.media_url,
                                          alt: "",
                                          className:
                                            "w-full h-full object-cover",
                                        }),
                                    f.media_type === "video" &&
                                      e.jsx("div", {
                                        className: "absolute top-2 right-2",
                                        children: e.jsx(As, {
                                          className:
                                            "h-4 w-4 text-white drop-shadow-lg fill-white",
                                        }),
                                      }),
                                  ],
                                })
                              : e.jsx("div", {
                                  className:
                                    "w-full h-full flex items-center justify-center p-2",
                                  children: e.jsx("p", {
                                    className:
                                      "text-xs text-center line-clamp-4",
                                    children: f.text,
                                  }),
                                }),
                            e.jsxs("div", {
                              className:
                                "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-1 text-white font-semibold",
                                  children: [
                                    e.jsx(ke, {
                                      className: "h-5 w-5 fill-white",
                                    }),
                                    e.jsx("span", {
                                      children: f.community_post_likes.length,
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-1 text-white font-semibold",
                                  children: [
                                    e.jsx(as, {
                                      className: "h-5 w-5 fill-white",
                                    }),
                                    e.jsx("span", {
                                      children: f._count?.comments || 0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        f.id
                      )
                    ),
                  })
              : e.jsxs("div", {
                  className:
                    "flex flex-col items-center justify-center py-16 px-4 text-center",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center mb-4",
                      children: e.jsx(Ke, { className: "h-10 w-10" }),
                    }),
                    e.jsx("h3", {
                      className: "text-2xl font-light mb-2",
                      children: "Salvar",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Salve fotos e vídeos que você deseja ver novamente.",
                    }),
                  ],
                }),
          ],
        }),
      }),
      e.jsx(vs, {
        open: !!be,
        onOpenChange: (f) => !f && ve(null),
        post: be,
        posts: m,
        currentUserId: s,
        onLike: _,
        onNavigate: y,
      }),
      e.jsx(Pe, {
        open: u,
        onOpenChange: d,
        children: e.jsxs(Ae, {
          className: "sm:max-w-[425px] max-h-[90vh] overflow-y-auto",
          children: [
            e.jsx($e, { children: e.jsx(Oe, { children: "Editar perfil" }) }),
            e.jsxs("div", {
              className: "space-y-4 py-4",
              children: [
                e.jsxs("div", {
                  className: "flex flex-col items-center gap-3",
                  children: [
                    e.jsxs(te, {
                      className: "h-20 w-20",
                      children: [
                        e.jsx(re, { src: je || void 0 }),
                        e.jsx(ae, {
                          className: "text-2xl",
                          children: c.name.charAt(0),
                        }),
                      ],
                    }),
                    e.jsx(S, {
                      variant: "link",
                      className: "text-primary text-sm font-semibold",
                      onClick: () => Ne.current?.click(),
                      disabled: de,
                      children: de ? "Enviando..." : "Alterar foto do perfil",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(ss, {
                      htmlFor: "username",
                      children: "Nome de usuário",
                    }),
                    e.jsx(De, {
                      id: "username",
                      value: B,
                      onChange: (f) => {
                        M(
                          f.target.value
                            .toLowerCase()
                            .replace(/[^a-z0-9_]/g, "")
                        ),
                          q("");
                      },
                      onBlur: () => B && U(B),
                      className: N ? "border-destructive" : "",
                    }),
                    N &&
                      e.jsx("p", {
                        className: "text-xs text-destructive",
                        children: N,
                      }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(ss, { htmlFor: "bio", children: "Bio" }),
                    e.jsx(os, {
                      id: "bio",
                      placeholder: "Bio...",
                      value: b,
                      onChange: (f) => j(f.target.value),
                      className: "min-h-[80px] resize-none",
                      maxLength: 150,
                    }),
                    e.jsxs("p", {
                      className: "text-xs text-muted-foreground text-right",
                      children: [b.length, "/150"],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(ss, {
                      htmlFor: "store_name",
                      children: "Nome da Loja",
                    }),
                    e.jsx(De, {
                      id: "store_name",
                      placeholder: "Nome da sua loja",
                      value: L,
                      onChange: (f) => z(f.target.value),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(ss, {
                      htmlFor: "store_address",
                      children: "Endereço",
                    }),
                    e.jsx(De, {
                      id: "store_address",
                      placeholder: "Endereço da loja",
                      value: k,
                      onChange: (f) => C(f.target.value),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(ss, { htmlFor: "whatsapp", children: "WhatsApp" }),
                    e.jsx(De, {
                      id: "whatsapp",
                      placeholder: "(00) 00000-0000",
                      value: w,
                      onChange: (f) => v(f.target.value),
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex justify-end gap-2",
              children: [
                e.jsx(S, {
                  variant: "ghost",
                  onClick: () => d(!1),
                  children: "Cancelar",
                }),
                e.jsxs(S, {
                  onClick: ye,
                  disabled: G || !!N,
                  children: [
                    G
                      ? e.jsx(pe, { className: "h-4 w-4 animate-spin mr-2" })
                      : null,
                    "Concluir",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      A &&
        e.jsx(Ga, {
          open: E,
          onOpenChange: (f) => {
            Q(f), f || F(null);
          },
          imageSrc: A,
          onCropComplete: async () => {},
        }),
    ],
  });
}
const Ys = {
  smileys: {
    name: "😀",
    emojis: [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "🤣",
      "😂",
      "🙂",
      "🙃",
      "😉",
      "😊",
      "😇",
      "🥰",
      "😍",
      "🤩",
      "😘",
      "😗",
      "😚",
      "😙",
      "🥲",
      "😋",
      "😛",
      "😜",
      "🤪",
      "😝",
      "🤑",
      "🤗",
      "🤭",
      "🤫",
      "🤔",
      "🤐",
      "🤨",
      "😐",
      "😑",
      "😶",
      "😏",
      "😒",
      "🙄",
      "😬",
      "🤥",
      "😌",
      "😔",
      "😪",
      "🤤",
      "😴",
      "😷",
      "🤒",
      "🤕",
      "🤢",
      "🤮",
      "🤧",
      "🥵",
      "🥶",
      "🥴",
      "😵",
      "🤯",
      "🤠",
      "🥳",
      "🥸",
      "😎",
      "🤓",
      "🧐",
    ],
  },
  gestures: {
    name: "👋",
    emojis: [
      "👋",
      "🤚",
      "🖐️",
      "✋",
      "🖖",
      "👌",
      "🤌",
      "🤏",
      "✌️",
      "🤞",
      "🤟",
      "🤘",
      "🤙",
      "👈",
      "👉",
      "👆",
      "🖕",
      "👇",
      "☝️",
      "👍",
      "👎",
      "✊",
      "👊",
      "🤛",
      "🤜",
      "👏",
      "🙌",
      "👐",
      "🤲",
      "🤝",
      "🙏",
      "✍️",
      "💪",
      "🦾",
      "🦿",
      "🦵",
      "🦶",
      "👂",
      "🦻",
      "👃",
      "🧠",
      "🫀",
      "🫁",
      "🦷",
      "🦴",
      "👀",
      "👁️",
      "👅",
      "👄",
    ],
  },
  hearts: {
    name: "❤️",
    emojis: [
      "❤️",
      "🧡",
      "💛",
      "💚",
      "💙",
      "💜",
      "🖤",
      "🤍",
      "🤎",
      "💔",
      "❣️",
      "💕",
      "💞",
      "💓",
      "💗",
      "💖",
      "💘",
      "💝",
      "💟",
      "♥️",
      "💌",
      "💋",
      "🫂",
      "👫",
      "👭",
      "👬",
      "💑",
      "💏",
    ],
  },
  objects: {
    name: "📱",
    emojis: [
      "📱",
      "📲",
      "💻",
      "🖥️",
      "🖨️",
      "⌨️",
      "🖱️",
      "🖲️",
      "💽",
      "💾",
      "💿",
      "📀",
      "🧮",
      "🎥",
      "📷",
      "📸",
      "📹",
      "📼",
      "🔍",
      "🔎",
      "🕯️",
      "💡",
      "🔦",
      "🏮",
      "🪔",
      "📔",
      "📕",
      "📖",
      "📗",
      "📘",
      "📙",
      "📚",
      "📓",
      "📒",
      "📃",
      "📜",
      "📄",
      "📰",
      "🗞️",
      "📑",
      "🔖",
      "🏷️",
      "✉️",
      "📧",
      "📨",
      "📩",
      "📤",
      "📥",
      "📦",
      "📫",
      "📪",
    ],
  },
  symbols: {
    name: "✅",
    emojis: [
      "✅",
      "❌",
      "❓",
      "❗",
      "💯",
      "🔥",
      "✨",
      "⭐",
      "🌟",
      "💫",
      "⚡",
      "💥",
      "💢",
      "💨",
      "💦",
      "💤",
      "🕳️",
      "💬",
      "👁️‍🗨️",
      "🗨️",
      "🗯️",
      "💭",
      "♠️",
      "♣️",
      "♥️",
      "♦️",
      "🃏",
      "🎴",
      "🀄",
      "🔇",
      "🔈",
      "🔉",
      "🔊",
      "📢",
      "📣",
      "📯",
      "🔔",
      "🔕",
      "🎵",
      "🎶",
      "💹",
      "🏧",
      "🚮",
      "🚰",
      "♿",
      "🚹",
      "🚺",
      "🚻",
      "🚼",
      "🚾",
      "⚠️",
    ],
  },
  animals: {
    name: "🐶",
    emojis: [
      "🐶",
      "🐱",
      "🐭",
      "🐹",
      "🐰",
      "🦊",
      "🐻",
      "🐼",
      "🐻‍❄️",
      "🐨",
      "🐯",
      "🦁",
      "🐮",
      "🐷",
      "🐸",
      "🐵",
      "🙈",
      "🙉",
      "🙊",
      "🐒",
      "🐔",
      "🐧",
      "🐦",
      "🐤",
      "🐣",
      "🐥",
      "🦆",
      "🦅",
      "🦉",
      "🦇",
      "🐺",
      "🐗",
      "🐴",
      "🦄",
      "🐝",
      "🐛",
      "🦋",
      "🐌",
      "🐞",
      "🐜",
      "🦟",
      "🦗",
      "🕷️",
      "🦂",
      "🐢",
      "🐍",
      "🦎",
      "🦖",
      "🦕",
      "🐙",
      "🦑",
    ],
  },
  food: {
    name: "🍕",
    emojis: [
      "🍕",
      "🍔",
      "🍟",
      "🌭",
      "🍿",
      "🧂",
      "🥓",
      "🥚",
      "🍳",
      "🧈",
      "🥐",
      "🍞",
      "🥖",
      "🥨",
      "🧀",
      "🥗",
      "🥙",
      "🥪",
      "🌮",
      "🌯",
      "🫔",
      "🥫",
      "🍝",
      "🍜",
      "🍲",
      "🍛",
      "🍣",
      "🍱",
      "🥟",
      "🦪",
      "🍤",
      "🍙",
      "🍚",
      "🍘",
      "🍥",
      "🥠",
      "🥮",
      "🍢",
      "🍡",
      "🍧",
      "🍨",
      "🍦",
      "🥧",
      "🧁",
      "🍰",
      "🎂",
      "🍮",
      "🍭",
      "🍬",
      "🍫",
      "🍩",
      "🍪",
    ],
  },
};
function Za({ onEmojiSelect: s }) {
  const [a, t] = n.useState(!1),
    l = (i) => {
      s(i);
    };
  return e.jsxs(Ut, {
    open: a,
    onOpenChange: t,
    children: [
      e.jsx(Lt, {
        asChild: !0,
        children: e.jsx(S, {
          variant: "ghost",
          size: "icon",
          className: "h-9 w-9 rounded-full hover:bg-primary/10",
          children: e.jsx(Ps, {
            className:
              "h-5 w-5 text-muted-foreground hover:text-primary transition-colors",
          }),
        }),
      }),
      e.jsx(zt, {
        className: "w-[320px] p-0",
        side: "top",
        align: "end",
        sideOffset: 10,
        children: e.jsxs(Zs, {
          defaultValue: "smileys",
          className: "w-full",
          children: [
            e.jsx("div", {
              className: "border-b px-2 pt-2",
              children: e.jsx(Js, {
                className: "w-full h-10 bg-transparent gap-1",
                children: Object.entries(Ys).map(([i, { name: r }]) =>
                  e.jsx(
                    Cs,
                    {
                      value: i,
                      className:
                        "flex-1 h-8 px-2 data-[state=active]:bg-primary/10 rounded-md",
                      children: e.jsx("span", {
                        className: "text-lg",
                        children: r,
                      }),
                    },
                    i
                  )
                ),
              }),
            }),
            Object.entries(Ys).map(([i, { emojis: r }]) =>
              e.jsx(
                Ss,
                {
                  value: i,
                  className: "m-0",
                  children: e.jsx(we, {
                    className: "h-[200px]",
                    children: e.jsx("div", {
                      className: "grid grid-cols-8 gap-1 p-2",
                      children: r.map((c, x) =>
                        e.jsx(
                          "button",
                          {
                            onClick: () => l(c),
                            className:
                              "h-8 w-8 flex items-center justify-center text-xl hover:bg-accent rounded-md transition-colors",
                            children: c,
                          },
                          x
                        )
                      ),
                    }),
                  }),
                },
                i
              )
            ),
          ],
        }),
      }),
    ],
  });
}
function Qs({
  avatarUrl: s,
  fallbackText: a,
  bubbleText: t,
  caption: l,
  variant: i = "note",
  highlight: r,
  onClick: c,
}) {
  return e.jsxs("button", {
    type: "button",
    onClick: c,
    className: "flex flex-col items-center gap-1.5 w-[92px] flex-shrink-0",
    children: [
      e.jsx("div", {
        className: R(
          "rounded-full p-0.5",
          r && "ring-2 ring-primary ring-offset-2 ring-offset-background"
        ),
        children: e.jsxs(te, {
          className: R(
            "h-12 w-12",
            i === "create" &&
              "border-2 border-dashed border-muted-foreground/30"
          ),
          children: [
            e.jsx(re, { src: s || void 0 }),
            e.jsx(ae, { className: "text-sm font-semibold", children: a }),
          ],
        }),
      }),
      e.jsx("div", {
        className: R(
          "relative w-full rounded-2xl border border-border bg-muted px-2 py-1 text-[11px] leading-tight text-foreground shadow-sm",
          "before:absolute before:-top-1 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:rotate-45 before:border-l before:border-t before:border-border before:bg-muted before:content-['']"
        ),
        children: e.jsx("p", {
          className: "line-clamp-2 break-words",
          children: t,
        }),
      }),
      l &&
        e.jsx("span", {
          className: "text-[11px] text-muted-foreground truncate max-w-full",
          children: l,
        }),
    ],
  });
}
function Ja({ currentUserId: s, onViewProfile: a }) {
  const { toast: t } = rs(),
    [l, i] = n.useState([]),
    [r, c] = n.useState(null),
    [x, m] = n.useState(null),
    [o, g] = n.useState(!1),
    [p, u] = n.useState(null),
    [d, b] = n.useState(""),
    [j, w] = n.useState(!1);
  n.useEffect(() => {
    L(), v();
    const C = h
      .channel("community_notes_realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "community_notes" },
        () => {
          L();
        }
      )
      .subscribe();
    return () => {
      h.removeChannel(C);
    };
  }, [s]);
  const v = async () => {
      try {
        const { data: C } = await h
          .from("profiles")
          .select("name, username, avatar_url")
          .eq("user_id", s)
          .single();
        C && m(C);
      } catch {}
    },
    L = async () => {
      try {
        const { data: C, error: B } = await h
          .from("community_notes")
          .select("*")
          .gt("expires_at", new Date().toISOString())
          .order("created_at", { ascending: !1 });
        if (B) throw B;
        const M = await Promise.all(
            (C || []).map(async ($) => {
              const { data: T } = await h
                .from("profiles")
                .select("name, username, avatar_url")
                .eq("user_id", $.user_id)
                .single();
              return { ...$, profiles: T };
            })
          ),
          N = M.find(($) => $.user_id === s),
          q = M.filter(($) => $.user_id !== s);
        c(N || null), i(q);
      } catch {}
    },
    z = async () => {
      if (d.trim()) {
        w(!0);
        try {
          r && (await h.from("community_notes").delete().eq("id", r.id));
          const { error: C } = await h
            .from("community_notes")
            .insert({ user_id: s, content: d.trim().slice(0, 60) });
          if (C) throw C;
          t({ title: "Nota publicada!" }), g(!1), b(""), L();
        } catch (C) {
          t({
            title: "Erro ao publicar nota",
            description: C.message,
            variant: "destructive",
          });
        } finally {
          w(!1);
        }
      }
    },
    k = async () => {
      if (r)
        try {
          const { error: C } = await h
            .from("community_notes")
            .delete()
            .eq("id", r.id);
          if (C) throw C;
          t({ title: "Nota excluída" }), c(null), u(null);
        } catch (C) {
          t({
            title: "Erro ao excluir nota",
            description: C.message,
            variant: "destructive",
          });
        }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "py-3 border-b border-border bg-background",
        children: [
          e.jsx("div", {
            className: "px-4 mb-2",
            children: e.jsx("span", {
              className:
                "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
              children: "Notas",
            }),
          }),
          e.jsxs(we, {
            className: "w-full",
            children: [
              e.jsxs("div", {
                className: "flex gap-3 px-4 pb-2",
                children: [
                  e.jsx(Qs, {
                    avatarUrl: r?.profiles?.avatar_url ?? x?.avatar_url,
                    fallbackText: (x?.name?.charAt(0) || "U").toUpperCase(),
                    bubbleText: r ? r.content : "Criar nota",
                    caption: "Sua nota",
                    variant: r ? "note" : "create",
                    highlight: !!r,
                    onClick: () => (r ? u(r) : g(!0)),
                  }),
                  l.map((C) =>
                    e.jsx(
                      Qs,
                      {
                        avatarUrl: C.profiles?.avatar_url,
                        fallbackText: (
                          C.profiles?.name?.charAt(0) || "U"
                        ).toUpperCase(),
                        bubbleText: C.content,
                        caption: C.profiles?.username || "Usuário",
                        onClick: () => u(C),
                      },
                      C.id
                    )
                  ),
                ],
              }),
              e.jsx(tt, { orientation: "horizontal" }),
            ],
          }),
        ],
      }),
      e.jsx(Pe, {
        open: o,
        onOpenChange: g,
        children: e.jsxs(Ae, {
          className: "sm:max-w-md",
          children: [
            e.jsxs($e, {
              children: [
                e.jsx(Oe, { children: "Nova nota" }),
                e.jsx(Bs, {
                  children:
                    "Crie uma nota curta (até 60 caracteres). Ela expira automaticamente em 24 horas.",
                }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-4",
              children: [
                e.jsx("div", {
                  className: "flex items-center justify-center py-4",
                  children: e.jsxs("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                      e.jsxs(te, {
                        className: "h-16 w-16",
                        children: [
                          e.jsx(re, { src: x?.avatar_url || void 0 }),
                          e.jsx(ae, {
                            className: "text-base font-semibold",
                            children: (x?.name?.charAt(0) || "U").toUpperCase(),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: R(
                          "relative w-[180px] rounded-2xl border border-border bg-muted px-3 py-2 text-sm text-foreground shadow-sm",
                          "before:absolute before:-top-1 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:rotate-45 before:border-l before:border-t before:border-border before:bg-muted before:content-['']"
                        ),
                        children: e.jsx("p", {
                          className: "break-words text-center",
                          children: d || "Sua nota...",
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsx(De, {
                  placeholder: "Escreva sua nota (máx. 60 caracteres)",
                  value: d,
                  onChange: (C) => b(C.target.value.slice(0, 60)),
                  maxLength: 60,
                }),
                e.jsxs("p", {
                  className: "text-xs text-muted-foreground text-right",
                  children: [d.length, "/60"],
                }),
                e.jsx(S, {
                  onClick: z,
                  disabled: !d.trim() || j,
                  className: "w-full",
                  children: j ? "Publicando..." : "Publicar nota",
                }),
                e.jsx("p", {
                  className: "text-xs text-center text-muted-foreground",
                  children: "Sua nota desaparecerá em 24 horas",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(Pe, {
        open: !!p,
        onOpenChange: () => u(null),
        children: e.jsxs(Ae, {
          className: "sm:max-w-md",
          children: [
            e.jsxs($e, {
              children: [
                e.jsxs(Oe, {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsxs(te, {
                      className: "h-10 w-10",
                      children: [
                        e.jsx(re, { src: p?.profiles?.avatar_url || void 0 }),
                        e.jsx(ae, {
                          children: p?.profiles?.name?.charAt(0) || "U",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "font-semibold text-sm",
                          children: p?.profiles?.username || "Usuário",
                        }),
                        e.jsx("p", {
                          className:
                            "text-xs text-muted-foreground font-normal",
                          children:
                            p &&
                            Fe(new Date(p.created_at), {
                              addSuffix: !0,
                              locale: Be,
                            }),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(Bs, {
                  className: "sr-only",
                  children: "Visualização da nota publicada.",
                }),
              ],
            }),
            e.jsx("div", {
              className: "py-8",
              children: e.jsx("div", {
                className: "flex items-center justify-center",
                children: e.jsx("div", {
                  className: R(
                    "relative max-w-[260px] rounded-2xl border border-border bg-muted px-4 py-3 text-base text-foreground shadow-sm",
                    "before:absolute before:-top-1 before:left-1/2 before:h-2 before:w-2 before:-translate-x-1/2 before:rotate-45 before:border-l before:border-t before:border-border before:bg-muted before:content-['']"
                  ),
                  children: e.jsx("p", {
                    className: "break-words text-center",
                    children: p?.content,
                  }),
                }),
              }),
            }),
            e.jsx("div", {
              className: "flex gap-2",
              children:
                p?.user_id === s
                  ? e.jsx(S, {
                      variant: "destructive",
                      className: "w-full",
                      onClick: k,
                      children: "Excluir nota",
                    })
                  : e.jsx(S, {
                      variant: "outline",
                      className: "w-full",
                      onClick: () => {
                        a?.(p?.user_id || ""), u(null);
                      },
                      children: "Ver perfil",
                    }),
            }),
          ],
        }),
      }),
    ],
  });
}
function er({ currentUserId: s, onBack: a, onViewProfile: t }) {
  const [l, i] = n.useState([]),
    [r, c] = n.useState(null),
    [x, m] = n.useState([]),
    [o, g] = n.useState(""),
    [p, u] = n.useState(""),
    [d, b] = n.useState([]),
    [j, w] = n.useState(!1),
    [v, L] = n.useState(null),
    [z, k] = n.useState(!1),
    [C, B] = n.useState(!1),
    [M, N] = n.useState(0),
    [q, $] = n.useState([]),
    [T, G] = n.useState(!1),
    [X, I] = n.useState(null),
    [oe, Z] = n.useState({}),
    Y = n.useRef(null),
    ee = n.useRef(null),
    ce = n.useRef(null),
    de = n.useRef([]),
    he = n.useRef(null),
    { blockedUsers: je, blockedByUsers: O } = Ls(s);
  n.useEffect(() => {
    Q();
    const y = h
      .channel("dm_realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "direct_messages" },
        () => {
          Q(), r && A(r);
        }
      )
      .subscribe();
    return () => {
      h.removeChannel(y);
    };
  }, [s, r]),
    n.useEffect(() => {
      const y = h.channel("online-users-dm", {
        config: { presence: { key: s } },
      });
      return (
        y
          .on("presence", { event: "sync" }, () => {
            $(Object.keys(y.presenceState()));
          })
          .subscribe(async (_) => {
            _ === "SUBSCRIBED" &&
              (await y.track({ online_at: new Date().toISOString() }));
          }),
        () => {
          h.removeChannel(y);
        }
      );
    }, [s]);
  const E = () => {
    Y.current?.scrollIntoView({ behavior: "smooth" });
  };
  n.useEffect(() => {
    E();
  }, [x]);
  const Q = async () => {
      const { data: y } = await h
        .from("direct_messages")
        .select("*")
        .or(`sender_id.eq.${s},receiver_id.eq.${s}`)
        .order("created_at", { ascending: !1 });
      if (!y) return;
      const _ = new Map();
      y.forEach((me) => {
        const ge = me.sender_id === s ? me.receiver_id : me.sender_id;
        _.has(ge) || _.set(ge, []), _.get(ge).push(me);
      });
      const f = Array.from(_.keys());
      if (f.length === 0) {
        i([]);
        return;
      }
      const { data: P } = await h
          .from("profiles")
          .select("user_id, name, username, avatar_url")
          .in("user_id", f),
        W = [...je, ...O],
        J = [];
      _.forEach((me, ge) => {
        if (W.includes(ge)) return;
        const Le = P?.find((Ze) => Ze.user_id === ge),
          cs = me[0],
          Ns = me.filter((Ze) => Ze.receiver_id === s && !Ze.read).length;
        J.push({
          userId: ge,
          userName: Le?.name || "Usuário",
          username:
            Le?.username ||
            Le?.name?.toLowerCase().replace(/\s+/g, "") ||
            "user",
          userAvatar: Le?.avatar_url || null,
          lastMessage: cs.message,
          lastMessageTime: cs.created_at,
          unreadCount: Ns,
          isOnline: q.includes(ge),
        });
      }),
        J.sort(
          (me, ge) =>
            new Date(ge.lastMessageTime).getTime() -
            new Date(me.lastMessageTime).getTime()
        ),
        i(J);
    },
    A = async (y) => {
      const { data: _ } = await h
        .from("direct_messages")
        .select("*")
        .or(
          `and(sender_id.eq.${s},receiver_id.eq.${y}),and(sender_id.eq.${y},receiver_id.eq.${s})`
        )
        .order("created_at", { ascending: !0 });
      if (_) {
        m(_);
        const P = _.filter((W) => W.receiver_id === s && !W.read).map(
          (W) => W.id
        );
        P.length > 0 &&
          (await h.from("direct_messages").update({ read: !0 }).in("id", P));
      }
      const { data: f } = await h
        .from("profiles")
        .select("user_id, name, avatar_url")
        .eq("user_id", y)
        .single();
      f && L(f);
    },
    F = (y) => {
      c(y), A(y), w(!1);
    },
    xe = async (y) => {
      if (!y.trim()) {
        b([]);
        return;
      }
      const { data: _ } = await h
          .from("profiles")
          .select("user_id, name, avatar_url")
          .or(`name.ilike.%${y}%,username.ilike.%${y}%`)
          .neq("user_id", s)
          .limit(15),
        f = [...je, ...O];
      b((_ || []).filter((P) => !f.includes(P.user_id)));
    };
  n.useEffect(() => {
    j && p && xe(p);
  }, [p, j]);
  const ie = async (y, _) => {
      const f = o.trim();
      if (!(!f && !y) && r) {
        if (O.includes(r)) {
          H.error("Você foi bloqueado por este usuário");
          return;
        }
        g("");
        try {
          await h
            .from("direct_messages")
            .insert({
              sender_id: s,
              receiver_id: r,
              message: f || (_ === "audio" ? "🎤 Áudio" : "📎 Mídia"),
              media_url: y || null,
              media_type: _ || null,
            });
        } catch {
          H.error("Erro ao enviar mensagem");
        }
      }
    },
    be = async (y) => {
      const _ = y.target.files?.[0];
      if (!_ || !r) return;
      const f = _.type.startsWith("image/"),
        P = _.type.startsWith("video/");
      if (!f && !P) {
        H.error("Apenas imagens e vídeos são permitidos");
        return;
      }
      if (_.size > 50 * 1024 * 1024) {
        H.error("Arquivo muito grande (máx 50MB)");
        return;
      }
      k(!0);
      try {
        let W = _;
        f && (W = await qs(_));
        const J = `${s}/${Date.now()}-${Math.random()
            .toString(36)
            .substring(7)}.${f ? "jpg" : _.name.split(".").pop()}`,
          { error: me } = await h.storage
            .from("direct-messages")
            .upload(J, W, {
              upsert: !1,
              contentType: f ? "image/jpeg" : _.type,
            });
        if (me) throw me;
        const { data: ge } = h.storage.from("direct-messages").getPublicUrl(J);
        await ie(ge.publicUrl, f ? "image" : "video"),
          H.success("Mídia enviada!");
      } catch {
        H.error("Erro ao enviar mídia");
      } finally {
        k(!1), ee.current && (ee.current.value = "");
      }
    },
    ve = async () => {
      try {
        const y = await navigator.mediaDevices.getUserMedia({ audio: !0 }),
          _ = new MediaRecorder(y);
        (ce.current = _),
          (de.current = []),
          (_.ondataavailable = (f) => {
            f.data.size > 0 && de.current.push(f.data);
          }),
          (_.onstop = async () => {
            if (
              (y.getTracks().forEach((f) => f.stop()), de.current.length > 0)
            ) {
              const f = new Blob(de.current, { type: "audio/webm" });
              await _e(f);
            }
          }),
          _.start(),
          B(!0),
          N(0),
          (he.current = setInterval(() => {
            N((f) => f + 1);
          }, 1e3));
      } catch {
        H.error(
          "Erro ao iniciar gravação. Verifique as permissões do microfone."
        );
      }
    },
    Ne = () => {
      ce.current &&
        C &&
        (ce.current.stop(), B(!1), he.current && clearInterval(he.current));
    },
    Se = () => {
      ce.current &&
        C &&
        (ce.current.stream.getTracks().forEach((y) => y.stop()),
        B(!1),
        (de.current = []),
        he.current && clearInterval(he.current));
    },
    _e = async (y) => {
      if (r) {
        k(!0);
        try {
          const _ = `${s}/${Date.now()}-audio.webm`,
            { error: f } = await h.storage
              .from("direct-messages")
              .upload(_, y, { upsert: !1, contentType: "audio/webm" });
          if (f) throw f;
          const { data: P } = h.storage.from("direct-messages").getPublicUrl(_);
          await ie(P.publicUrl, "audio"), H.success("Áudio enviado!");
        } catch {
          H.error("Erro ao enviar áudio");
        } finally {
          k(!1);
        }
      }
    },
    Ie = (y) => {
      const _ = Math.floor(y / 60),
        f = y % 60;
      return `${_}:${f.toString().padStart(2, "0")}`;
    },
    Ce = (y) => {
      const _ = new Date(y);
      return ds(_, "HH:mm");
    },
    U = (y) => {
      const _ = new Date(y);
      return Fs(_) ? ds(_, "HH:mm") : Vs(_) ? "Ontem" : ds(_, "dd/MM");
    },
    ne = async (y) => {
      try {
        const { error: _ } = await h
          .from("direct_messages")
          .delete()
          .eq("id", y)
          .eq("sender_id", s);
        if (_) throw _;
        m((f) => f.filter((P) => P.id !== y)), H.success("Mensagem excluída");
      } catch {
        H.error("Erro ao excluir mensagem");
      } finally {
        I(null);
      }
    },
    ye = (y, _) => {
      Z((f) => {
        if (f[y] === _) {
          const W = { ...f };
          return delete W[y], W;
        }
        return { ...f, [y]: _ };
      }),
        H.success(`Reagiu com ${_}`);
    },
    Ue = ["❤️", "😂", "😮", "😢", "👍", "🔥"],
    Qe = (y) => {
      const _ = [];
      let f = "";
      return (
        y.forEach((P) => {
          const W = new Date(P.created_at);
          let J = "";
          Fs(W)
            ? (J = "Hoje")
            : Vs(W)
            ? (J = "Ontem")
            : (J = ds(W, "d 'de' MMMM", { locale: Be })),
            J !== f && ((f = J), _.push({ date: J, messages: [] })),
            _[_.length - 1].messages.push(P);
        }),
        _
      );
    };
  if (!r)
    return e.jsxs("div", {
      className: "flex flex-col h-[100dvh] bg-background",
      children: [
        e.jsxs("header", {
          className: "flex-shrink-0 bg-background border-b border-border",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between h-11 px-4",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx(S, {
                      variant: "ghost",
                      size: "icon",
                      onClick: a,
                      className: "h-9 w-9 -ml-2",
                      children: e.jsx(Ee, { className: "h-6 w-6" }),
                    }),
                    e.jsx("h1", {
                      className: "text-xl font-bold",
                      children: "Mensagens",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "flex items-center gap-1",
                  children: e.jsx(S, {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => w(!0),
                    className: "h-9 w-9",
                    children: e.jsx(Tt, { className: "h-5 w-5" }),
                  }),
                }),
              ],
            }),
            j &&
              e.jsx("div", {
                className: "px-4 pb-3",
                children: e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx(ls, {
                      className:
                        "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                    }),
                    e.jsx(De, {
                      placeholder: "Pesquisar",
                      value: p,
                      onChange: (y) => u(y.target.value),
                      className: "pl-9 h-9 bg-muted border-0 rounded-xl",
                      autoFocus: !0,
                    }),
                    p &&
                      e.jsx(S, {
                        variant: "ghost",
                        size: "icon",
                        className:
                          "absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7",
                        onClick: () => {
                          u(""), w(!1);
                        },
                        children: e.jsx(Me, { className: "h-4 w-4" }),
                      }),
                  ],
                }),
              }),
          ],
        }),
        e.jsx(Ja, { currentUserId: s, onViewProfile: t }),
        j &&
          d.length > 0 &&
          e.jsx("div", {
            className: "border-b border-border bg-background",
            children: d.map((y) =>
              e.jsxs(
                "button",
                {
                  className:
                    "flex items-center gap-3 w-full px-4 py-3 hover:bg-muted/50 transition-colors",
                  onClick: () => F(y.user_id),
                  children: [
                    e.jsxs(te, {
                      className: "h-12 w-12",
                      children: [
                        e.jsx(re, { src: y.avatar_url || void 0 }),
                        e.jsx(ae, {
                          className:
                            "bg-gradient-to-br from-primary/80 to-primary text-primary-foreground",
                          children: y.name.charAt(0).toUpperCase(),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "text-left",
                      children: [
                        e.jsx("p", {
                          className: "font-semibold text-sm",
                          children: y.username || y.name,
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: y.name,
                        }),
                      ],
                    }),
                  ],
                },
                y.user_id
              )
            ),
          }),
        e.jsx(we, {
          className: "flex-1",
          children:
            l.length === 0
              ? e.jsxs("div", {
                  className:
                    "flex flex-col items-center justify-center h-full py-20 px-4",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center mb-4",
                      children: e.jsx(Xe, { className: "h-10 w-10" }),
                    }),
                    e.jsx("h3", {
                      className: "text-xl font-semibold mb-1",
                      children: "Suas mensagens",
                    }),
                    e.jsx("p", {
                      className:
                        "text-muted-foreground text-sm text-center mb-4",
                      children: "Envie mensagens privadas para outros técnicos",
                    }),
                    e.jsx(S, {
                      onClick: () => w(!0),
                      className: "rounded-lg",
                      children: "Enviar mensagem",
                    }),
                  ],
                })
              : e.jsx("div", {
                  className: "divide-y divide-border",
                  children: l.map((y) =>
                    e.jsxs(
                      "button",
                      {
                        className:
                          "flex items-center gap-3 w-full px-4 py-3 hover:bg-muted/50 transition-colors text-left",
                        onClick: () => F(y.userId),
                        children: [
                          e.jsxs("div", {
                            className: "relative",
                            children: [
                              e.jsxs(te, {
                                className: "h-14 w-14",
                                children: [
                                  e.jsx(re, { src: y.userAvatar || void 0 }),
                                  e.jsx(ae, {
                                    className:
                                      "bg-gradient-to-br from-muted to-muted-foreground/20 text-foreground font-medium",
                                    children: y.userName
                                      .charAt(0)
                                      .toUpperCase(),
                                  }),
                                ],
                              }),
                              y.isOnline &&
                                e.jsx("div", {
                                  className:
                                    "absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-background",
                                }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  e.jsx("span", {
                                    className: R(
                                      "font-semibold text-sm truncate",
                                      y.unreadCount > 0 && "text-foreground"
                                    ),
                                    children: y.userName,
                                  }),
                                  e.jsx("span", {
                                    className: R(
                                      "text-xs",
                                      y.unreadCount > 0
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground"
                                    ),
                                    children: U(y.lastMessageTime),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-center gap-1.5 mt-0.5",
                                children: [
                                  e.jsx("p", {
                                    className: R(
                                      "text-sm truncate flex-1",
                                      y.unreadCount > 0
                                        ? "text-foreground font-medium"
                                        : "text-muted-foreground"
                                    ),
                                    children: y.lastMessage,
                                  }),
                                  y.unreadCount > 0 &&
                                    e.jsx("span", {
                                      className:
                                        "w-2 h-2 rounded-full bg-primary flex-shrink-0",
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      y.userId
                    )
                  ),
                }),
        }),
      ],
    });
  const qe = Qe(x);
  return e.jsxs("div", {
    className: "flex flex-col h-[100dvh] bg-background",
    children: [
      e.jsx("header", {
        className: "flex-shrink-0 bg-background border-b border-border",
        children: e.jsxs("div", {
          className: "flex items-center justify-between h-14 px-2",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  onClick: () => {
                    c(null), L(null);
                  },
                  className: "h-9 w-9",
                  children: e.jsx(Ee, { className: "h-6 w-6" }),
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsxs("div", {
                      className: "relative",
                      children: [
                        e.jsxs(te, {
                          className: "h-9 w-9",
                          children: [
                            e.jsx(re, { src: v?.avatar_url || void 0 }),
                            e.jsx(ae, {
                              className: "text-xs",
                              children: v?.name?.charAt(0).toUpperCase() || "?",
                            }),
                          ],
                        }),
                        q.includes(r) &&
                          e.jsx("div", {
                            className:
                              "absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background",
                          }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "font-semibold text-sm leading-tight",
                          children: v?.name || "Usuário",
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: q.includes(r) ? "Online" : "Offline",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(S, {
              variant: "ghost",
              size: "icon",
              className: "h-9 w-9",
              children: e.jsx(st, { className: "h-5 w-5" }),
            }),
          ],
        }),
      }),
      e.jsxs(we, {
        className: "flex-1 min-h-0 px-4 py-2",
        children: [
          qe.map((y) =>
            e.jsxs(
              "div",
              {
                children: [
                  e.jsx("div", {
                    className: "flex items-center justify-center my-4",
                    children: e.jsx("span", {
                      className:
                        "text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full",
                      children: y.date,
                    }),
                  }),
                  y.messages.map((_, f) => {
                    const P = _.sender_id === s,
                      W =
                        !P &&
                        (f === 0 ||
                          y.messages[f - 1]?.sender_id !== _.sender_id),
                      J = oe[_.id];
                    return e.jsxs(
                      "div",
                      {
                        className: R(
                          "w-full flex items-end gap-2 mb-2 group/message",
                          P ? "justify-end" : "justify-start"
                        ),
                        children: [
                          !P &&
                            e.jsx("div", {
                              className: "w-7 flex-shrink-0",
                              children:
                                W &&
                                e.jsxs(te, {
                                  className: "h-7 w-7",
                                  children: [
                                    e.jsx(re, { src: v?.avatar_url || void 0 }),
                                    e.jsx(ae, {
                                      className: "text-[10px]",
                                      children: v?.name?.charAt(0) || "?",
                                    }),
                                  ],
                                }),
                            }),
                          e.jsxs("div", {
                            className: R(
                              "flex flex-col max-w-[80%] sm:max-w-[60%]",
                              P ? "items-end" : "items-start"
                            ),
                            children: [
                              e.jsxs("div", {
                                className: "relative max-w-full",
                                children: [
                                  e.jsxs(fs, {
                                    children: [
                                      e.jsx(ps, {
                                        asChild: !0,
                                        children: e.jsx(S, {
                                          variant: "ghost",
                                          size: "icon",
                                          className: R(
                                            "absolute top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover/message:opacity-100 transition-opacity bg-background/80 hover:bg-background z-10",
                                            P ? "-left-8" : "-right-8"
                                          ),
                                          children: e.jsx(ws, {
                                            className: "h-4 w-4",
                                          }),
                                        }),
                                      }),
                                      e.jsxs(gs, {
                                        align: P ? "end" : "start",
                                        className: "w-48",
                                        children: [
                                          e.jsx("div", {
                                            className:
                                              "flex items-center justify-center gap-1 p-2 border-b border-border",
                                            children: Ue.map((me) =>
                                              e.jsx(
                                                "button",
                                                {
                                                  className: R(
                                                    "text-xl hover:scale-125 transition-transform p-1 rounded",
                                                    J === me && "bg-muted"
                                                  ),
                                                  onClick: () => ye(_.id, me),
                                                  children: me,
                                                },
                                                me
                                              )
                                            ),
                                          }),
                                          P &&
                                            e.jsxs(e.Fragment, {
                                              children: [
                                                e.jsx(us, {}),
                                                e.jsxs(We, {
                                                  className:
                                                    "text-destructive focus:text-destructive",
                                                  onClick: () => I(_.id),
                                                  children: [
                                                    e.jsx(Is, {
                                                      className: "h-4 w-4 mr-2",
                                                    }),
                                                    "Excluir mensagem",
                                                  ],
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: R(
                                      "w-fit max-w-full min-w-[60px] px-3 py-2 rounded-2xl",
                                      P
                                        ? "bg-primary text-primary-foreground rounded-br-md"
                                        : "bg-muted rounded-bl-md"
                                    ),
                                    children: [
                                      _.media_url &&
                                        _.media_type === "image" &&
                                        e.jsx("img", {
                                          src: _.media_url,
                                          alt: "Mídia",
                                          className:
                                            "rounded-lg max-w-full mb-1",
                                        }),
                                      _.media_url &&
                                        _.media_type === "video" &&
                                        e.jsx("video", {
                                          src: _.media_url,
                                          controls: !0,
                                          className:
                                            "rounded-lg max-w-full mb-1",
                                        }),
                                      _.media_url &&
                                        _.media_type === "audio" &&
                                        e.jsx("audio", {
                                          src: _.media_url,
                                          controls: !0,
                                          className: "max-w-full",
                                        }),
                                      _.message &&
                                        !_.media_url &&
                                        e.jsx("p", {
                                          className:
                                            "text-sm break-words whitespace-pre-wrap",
                                          children: _.message,
                                        }),
                                      _.message &&
                                        _.media_url &&
                                        _.message !== "🎤 Áudio" &&
                                        _.message !== "📎 Mídia" &&
                                        e.jsx("p", {
                                          className:
                                            "text-sm break-words whitespace-pre-wrap mt-1",
                                          children: _.message,
                                        }),
                                      e.jsxs("div", {
                                        className: R(
                                          "flex items-center gap-1 mt-0.5",
                                          P ? "justify-end" : "justify-start"
                                        ),
                                        children: [
                                          e.jsx("span", {
                                            className: R(
                                              "text-[10px]",
                                              P
                                                ? "text-primary-foreground/70"
                                                : "text-muted-foreground"
                                            ),
                                            children: Ce(_.created_at),
                                          }),
                                          P &&
                                            (_.read
                                              ? e.jsx(Bt, {
                                                  className:
                                                    "h-3 w-3 text-primary-foreground/70",
                                                })
                                              : e.jsx($t, {
                                                  className:
                                                    "h-3 w-3 text-primary-foreground/70",
                                                })),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              J &&
                                e.jsx("button", {
                                  type: "button",
                                  className: R(
                                    "mt-1 inline-flex items-center rounded-full border border-border bg-background px-2 text-sm shadow-sm hover:scale-110 transition-transform",
                                    P ? "self-end" : "self-start"
                                  ),
                                  onClick: () => ye(_.id, J),
                                  children: J,
                                }),
                            ],
                          }),
                        ],
                      },
                      _.id
                    );
                  }),
                ],
              },
              y.date
            )
          ),
          e.jsx("div", { ref: Y }),
        ],
      }),
      e.jsxs("div", {
        className:
          "flex-shrink-0 border-t border-border bg-background p-3 pb-24 sm:pb-4",
        children: [
          C
            ? e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx(S, {
                    variant: "ghost",
                    size: "icon",
                    className: "h-10 w-10 rounded-full text-destructive",
                    onClick: Se,
                    children: e.jsx(Me, { className: "h-5 w-5" }),
                  }),
                  e.jsxs("div", {
                    className:
                      "flex-1 flex items-center gap-2 bg-destructive/10 rounded-full px-4 py-2",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-2 h-2 bg-destructive rounded-full animate-pulse",
                      }),
                      e.jsxs("span", {
                        className: "text-sm font-medium text-destructive",
                        children: ["Gravando... ", Ie(M)],
                      }),
                    ],
                  }),
                  e.jsx(S, {
                    size: "icon",
                    className: "h-10 w-10 rounded-full",
                    onClick: Ne,
                    children: e.jsx(Ot, { className: "h-4 w-4 fill-current" }),
                  }),
                ],
              })
            : e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(S, {
                    variant: "ghost",
                    size: "icon",
                    className: "h-10 w-10 rounded-full flex-shrink-0",
                    onClick: () => ee.current?.click(),
                    disabled: z,
                    children: z
                      ? e.jsx(pe, { className: "h-5 w-5 animate-spin" })
                      : e.jsx(Ms, { className: "h-5 w-5" }),
                  }),
                  e.jsx("input", {
                    type: "file",
                    ref: ee,
                    className: "hidden",
                    accept: "image/*,video/*",
                    onChange: be,
                  }),
                  e.jsxs("div", {
                    className: "flex-1 relative",
                    children: [
                      e.jsx(De, {
                        placeholder: "Mensagem...",
                        value: o,
                        onChange: (y) => g(y.target.value),
                        onKeyDown: (y) =>
                          y.key === "Enter" && !y.shiftKey && ie(),
                        className: "pr-10 h-10 rounded-full bg-muted border-0",
                      }),
                      e.jsx(S, {
                        variant: "ghost",
                        size: "icon",
                        className:
                          "absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8",
                        onClick: () => G(!T),
                        children: e.jsx(Ps, {
                          className: "h-5 w-5 text-muted-foreground",
                        }),
                      }),
                    ],
                  }),
                  o.trim()
                    ? e.jsx(S, {
                        size: "icon",
                        className: "h-10 w-10 rounded-full flex-shrink-0",
                        onClick: () => ie(),
                        children: e.jsx(Xe, { className: "h-5 w-5" }),
                      })
                    : e.jsx(S, {
                        variant: "ghost",
                        size: "icon",
                        className: "h-10 w-10 rounded-full flex-shrink-0",
                        onClick: ve,
                        children: e.jsx(ga, { className: "h-5 w-5" }),
                      }),
                ],
              }),
          T &&
            e.jsx("div", {
              className: "mt-2",
              children: e.jsx(Za, {
                onEmojiSelect: (y) => {
                  g((_) => _ + y), G(!1);
                },
              }),
            }),
        ],
      }),
      e.jsx(Ft, {
        open: !!X,
        onOpenChange: (y) => !y && I(null),
        children: e.jsxs(Vt, {
          children: [
            e.jsxs(Ht, {
              children: [
                e.jsx(Wt, { children: "Excluir mensagem?" }),
                e.jsx(Kt, {
                  children:
                    "Esta ação não pode ser desfeita. A mensagem será removida permanentemente.",
                }),
              ],
            }),
            e.jsxs(Xt, {
              children: [
                e.jsx(Yt, { children: "Cancelar" }),
                e.jsx(Qt, {
                  className:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                  onClick: () => X && ne(X),
                  children: "Excluir",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function sr({ open: s, onOpenChange: a }) {
  return e.jsx(Pe, {
    open: s,
    onOpenChange: a,
    children: e.jsxs(Ae, {
      className: "max-w-2xl max-h-[80vh]",
      children: [
        e.jsx($e, {
          children: e.jsx(Oe, {
            className: "text-2xl font-bold",
            children: "Política de Privacidade e Uso da Comunidade",
          }),
        }),
        e.jsx(we, {
          className: "h-[60vh] pr-4",
          children: e.jsxs("div", {
            className: "space-y-4 text-sm",
            children: [
              e.jsxs("section", {
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-2",
                    children: "1. Propósito da Comunidade",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "A Comunidade Tech OS PRO é um espaço exclusivo para técnicos de assistência técnica compartilharem conhecimento, dúvidas e experiências relacionadas ao trabalho técnico profissional.",
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-2",
                    children: "2. Conteúdo Permitido",
                  }),
                  e.jsxs("div", {
                    className: "space-y-2 text-muted-foreground",
                    children: [
                      e.jsx("p", {
                        children: "São permitidos apenas posts relacionados a:",
                      }),
                      e.jsxs("ul", {
                        className: "list-disc list-inside ml-4 space-y-1",
                        children: [
                          e.jsx("li", {
                            children:
                              "Assistência técnica e reparos de dispositivos eletrônicos",
                          }),
                          e.jsx("li", {
                            children:
                              "Dúvidas técnicas e resolução de problemas",
                          }),
                          e.jsx("li", {
                            children:
                              "Compartilhamento de conhecimento e boas práticas",
                          }),
                          e.jsx("li", {
                            children:
                              "Discussões sobre peças, ferramentas e equipamentos",
                          }),
                          e.jsx("li", {
                            children:
                              "Experiências profissionais relacionadas ao setor",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-2 text-destructive",
                    children: "3. Conteúdo Proibido",
                  }),
                  e.jsxs("div", {
                    className: "space-y-2 text-muted-foreground",
                    children: [
                      e.jsx("p", {
                        className: "font-semibold",
                        children:
                          "É ESTRITAMENTE PROIBIDO postar conteúdo relacionado a:",
                      }),
                      e.jsxs("ul", {
                        className: "list-disc list-inside ml-4 space-y-1",
                        children: [
                          e.jsx("li", {
                            className: "text-destructive font-medium",
                            children:
                              "Drogas ilícitas ou substâncias proibidas",
                          }),
                          e.jsx("li", {
                            className: "text-destructive font-medium",
                            children:
                              "Conteúdo sensual, pornográfico ou de natureza sexual",
                          }),
                          e.jsx("li", {
                            className: "text-destructive font-medium",
                            children:
                              "Xingamentos, ofensas ou linguagem inapropriada",
                          }),
                          e.jsx("li", {
                            className: "text-destructive font-medium",
                            children:
                              "Assédio, discriminação ou discurso de ódio",
                          }),
                          e.jsx("li", {
                            className: "text-destructive font-medium",
                            children:
                              "Spam, propaganda não relacionada ao setor",
                          }),
                          e.jsx("li", {
                            className: "text-destructive font-medium",
                            children: "Informações falsas ou enganosas",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-2 text-destructive",
                    children: "4. Consequências de Violação",
                  }),
                  e.jsxs("div", {
                    className: "space-y-2 text-muted-foreground",
                    children: [
                      e.jsx("p", {
                        className: "font-semibold",
                        children:
                          "Qualquer violação desta política resultará em:",
                      }),
                      e.jsxs("ul", {
                        className: "list-disc list-inside ml-4 space-y-1",
                        children: [
                          e.jsx("li", {
                            children:
                              "Remoção automática do conteúdo inapropriado",
                          }),
                          e.jsx("li", {
                            children:
                              "Censura do post e notificação ao usuário",
                          }),
                          e.jsx("li", {
                            children:
                              "Banimento PERMANENTE da conta em casos graves ou reincidência",
                          }),
                          e.jsx("li", {
                            children:
                              "Possível reporte às autoridades competentes quando aplicável",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "mt-3 font-semibold text-destructive",
                        children:
                          "⚠️ ATENÇÃO: Não toleramos qualquer tipo de conteúdo proibido. O banimento é automático e definitivo.",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-2",
                    children: "5. Moderação e Denúncias",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Nossa equipe de moderação monitora a comunidade constantemente. Usuários também podem denunciar conteúdo inadequado através dos canais de suporte. Todas as denúncias são investigadas com seriedade.",
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-2",
                    children: "6. Privacidade dos Dados",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Todos os dados compartilhados na comunidade (posts, mensagens, fotos, vídeos e áudios) são armazenados de forma segura e utilizados apenas para o funcionamento da plataforma. Não compartilhamos suas informações com terceiros sem autorização.",
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-2",
                    children: "7. Direitos Autorais",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Ao postar conteúdo na comunidade, você declara ser o autor ou ter direitos sobre o material compartilhado. Respeite os direitos autorais de terceiros.",
                  }),
                ],
              }),
              e.jsxs("section", {
                children: [
                  e.jsx("h3", {
                    className: "font-semibold text-lg mb-2",
                    children: "8. Alterações na Política",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children:
                      "Esta política pode ser atualizada periodicamente. Recomendamos que revise este documento regularmente para estar ciente de quaisquer mudanças.",
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "pt-4 border-t",
                children: [
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground italic",
                    children: "Última atualização: Dezembro de 2024",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground mt-2",
                    children:
                      "Ao usar a Comunidade Tech OS PRO, você concorda com todos os termos desta política.",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function tr({ currentUserId: s, blockedUsers: a, onUnblock: t, onBack: l }) {
  const [i, r] = n.useState([]),
    [c, x] = n.useState(!0),
    [m, o] = n.useState(null);
  n.useEffect(() => {
    g();
  }, [a]);
  const g = async () => {
      if (a.length === 0) {
        r([]), x(!1);
        return;
      }
      x(!0);
      try {
        const { data: u, error: d } = await h
          .from("profiles")
          .select("user_id, name, username, avatar_url")
          .in("user_id", a);
        if (d) throw d;
        r(u || []);
      } catch {
        H.error("Erro ao carregar usuários bloqueados");
      } finally {
        x(!1);
      }
    },
    p = async (u) => {
      o(u);
      try {
        await t(u), r((d) => d.filter((b) => b.user_id !== u));
      } catch {
      } finally {
        o(null);
      }
    };
  return e.jsxs("div", {
    className: "min-h-screen bg-background",
    children: [
      e.jsx("div", {
        className:
          "sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border/50",
        children: e.jsxs("div", {
          className: "flex items-center gap-4 p-4",
          children: [
            e.jsx(S, {
              variant: "ghost",
              size: "icon",
              onClick: l,
              className: "hover:bg-primary/10 transition-all rounded-full",
              children: e.jsx(Ee, { className: "h-5 w-5" }),
            }),
            e.jsxs("div", {
              className: "flex-1",
              children: [
                e.jsxs("h1", {
                  className: "text-xl font-bold flex items-center gap-2",
                  children: [
                    e.jsx(at, { className: "h-5 w-5 text-destructive" }),
                    "Usuários Bloqueados",
                  ],
                }),
                e.jsxs("p", {
                  className: "text-sm text-muted-foreground",
                  children: [i.length, " usuário(s) bloqueado(s)"],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(we, {
        className: "h-[calc(100vh-80px)]",
        children: e.jsx("div", {
          className: "p-4 space-y-3",
          children: c
            ? e.jsx("div", {
                className: "flex items-center justify-center py-12",
                children: e.jsx(pe, {
                  className: "h-8 w-8 animate-spin text-primary",
                }),
              })
            : i.length === 0
            ? e.jsxs(ts, {
                className: "p-8 text-center",
                children: [
                  e.jsx(ja, {
                    className:
                      "h-16 w-16 mx-auto text-muted-foreground/50 mb-4",
                  }),
                  e.jsx("h3", {
                    className: "text-lg font-medium mb-2",
                    children: "Nenhum usuário bloqueado",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground text-sm",
                    children:
                      "Você não bloqueou nenhum usuário ainda. Quando você bloquear alguém, eles aparecerão aqui e não poderão ver suas postagens ou perfil.",
                  }),
                ],
              })
            : i.map((u) =>
                e.jsx(
                  ts,
                  {
                    className: "p-4 hover:bg-muted/30 transition-colors",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        e.jsxs(te, {
                          className: "h-12 w-12 border-2 border-border",
                          children: [
                            e.jsx(re, { src: u.avatar_url || void 0 }),
                            e.jsx(ae, {
                              className:
                                "bg-primary/10 text-primary font-medium",
                              children: u.name?.charAt(0)?.toUpperCase() || "U",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            e.jsx("h4", {
                              className: "font-semibold truncate",
                              children: u.name,
                            }),
                            e.jsxs("p", {
                              className:
                                "text-sm text-muted-foreground truncate",
                              children: ["@", u.username],
                            }),
                          ],
                        }),
                        e.jsxs(S, {
                          variant: "outline",
                          size: "sm",
                          onClick: () => p(u.user_id),
                          disabled: m === u.user_id,
                          className:
                            "gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary",
                          children: [
                            m === u.user_id
                              ? e.jsx(pe, { className: "h-4 w-4 animate-spin" })
                              : e.jsx(Gt, { className: "h-4 w-4" }),
                            e.jsx("span", {
                              className: "hidden sm:inline",
                              children: "Desbloquear",
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  u.user_id
                )
              ),
        }),
      }),
    ],
  });
}
function ar({
  currentUserId: s,
  currentUserAvatar: a,
  currentUserName: t = "Seu story",
  onCreateStory: l,
  onViewStories: i,
  blockedUsers: r = [],
  blockedByUsers: c = [],
}) {
  const [x, m] = n.useState([]),
    [o, g] = n.useState([]),
    [p, u] = n.useState(!0),
    [d, b] = n.useState([]);
  n.useEffect(() => {
    j();
    const v = h
      .channel("stories_realtime_new")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "community_stories" },
        () => w()
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "community_follows" },
        () => j()
      )
      .subscribe();
    return () => {
      h.removeChannel(v);
    };
  }, [s]),
    n.useEffect(() => {
      w();
    }, [d, r, c]);
  const j = async () => {
      try {
        const { data: v } = await h
          .from("community_follows")
          .select("following_id")
          .eq("follower_id", s);
        b((v || []).map((L) => L.following_id));
      } catch {}
    },
    w = async () => {
      try {
        const { data: v, error: L } = await h
          .from("community_stories")
          .select("*")
          .gt("expires_at", new Date().toISOString())
          .order("created_at", { ascending: !1 });
        if (L) throw L;
        const z = (v || []).filter((N) => N.user_id === s);
        g(z);
        const k = [...r, ...c],
          C = (v || []).filter(
            (N) =>
              N.user_id !== s && !k.includes(N.user_id) && d.includes(N.user_id)
          ),
          B = new Map();
        C.forEach((N) => {
          B.has(N.user_id) || B.set(N.user_id, []), B.get(N.user_id).push(N);
        });
        const M = Array.from(B.keys());
        if (M.length > 0) {
          const { data: N } = await h
              .from("profiles")
              .select("user_id, name, avatar_url")
              .in("user_id", M),
            q = C.map((X) => X.id),
            { data: $ } = await h
              .from("community_story_views")
              .select("story_id")
              .eq("user_id", s)
              .in("story_id", q),
            T = new Set(($ || []).map((X) => X.story_id)),
            G = [];
          B.forEach((X, I) => {
            const oe = N?.find((Y) => Y.user_id === I),
              Z = X.some((Y) => !T.has(Y.id));
            G.push({
              user_id: I,
              name: oe?.name || "Usuário",
              avatar_url: oe?.avatar_url || null,
              stories: X,
              hasUnviewed: Z,
            });
          }),
            G.sort((X, I) => (I.hasUnviewed ? 1 : 0) - (X.hasUnviewed ? 1 : 0)),
            m(G);
        } else m([]);
      } catch {
      } finally {
        u(!1);
      }
    };
  return p
    ? e.jsx("div", {
        className: "flex items-center h-24 px-4 border-b border-border",
        children: e.jsx(pe, {
          className: "h-5 w-5 animate-spin text-muted-foreground mx-auto",
        }),
      })
    : e.jsx("div", {
        className: "border-b border-border bg-background",
        children: e.jsxs("div", {
          className: "flex gap-4 px-4 py-3 overflow-x-auto no-scrollbar",
          children: [
            e.jsxs("div", {
              className: "flex flex-col items-center flex-shrink-0",
              children: [
                e.jsxs("button", {
                  onClick: o.length > 0 ? () => i(s, o) : l,
                  className: "relative group",
                  children: [
                    e.jsx("div", {
                      className: R(
                        "w-[62px] h-[62px] rounded-full flex items-center justify-center",
                        o.length > 0
                          ? "p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
                          : "p-[2px] bg-muted-foreground/30"
                      ),
                      children: e.jsx("div", {
                        className: R(
                          "w-full h-full rounded-full",
                          o.length > 0 ? "bg-background p-[2px]" : ""
                        ),
                        children: e.jsxs(te, {
                          className: "w-full h-full",
                          children: [
                            e.jsx(re, {
                              src: a || void 0,
                              className: "object-cover",
                            }),
                            e.jsx(ae, {
                              className:
                                "bg-gradient-to-br from-primary/80 to-primary text-primary-foreground text-lg",
                              children: t.charAt(0).toUpperCase(),
                            }),
                          ],
                        }),
                      }),
                    }),
                    o.length === 0 &&
                      e.jsx("div", {
                        className:
                          "absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-background shadow-sm",
                        children: e.jsx(It, {
                          className: "h-3.5 w-3.5 text-primary-foreground",
                          strokeWidth: 3,
                        }),
                      }),
                  ],
                }),
                e.jsx("span", {
                  className: "text-[11px] text-center mt-1.5 w-[70px] truncate",
                  children: (o.length > 0, "Seu story"),
                }),
              ],
            }),
            x.map((v) =>
              e.jsxs(
                "div",
                {
                  className: "flex flex-col items-center flex-shrink-0",
                  children: [
                    e.jsx("button", {
                      onClick: () => i(v.user_id, v.stories),
                      className: "group",
                      children: e.jsx("div", {
                        className: R(
                          "w-[62px] h-[62px] rounded-full p-[2px] transition-all",
                          v.hasUnviewed
                            ? "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500"
                            : "bg-muted-foreground/30"
                        ),
                        children: e.jsx("div", {
                          className:
                            "w-full h-full rounded-full bg-background p-[2px]",
                          children: e.jsxs(te, {
                            className: "w-full h-full",
                            children: [
                              e.jsx(re, {
                                src: v.avatar_url || void 0,
                                className: "object-cover",
                              }),
                              e.jsx(ae, {
                                className:
                                  "bg-gradient-to-br from-muted to-muted-foreground/30 text-foreground text-lg",
                                children: v.name.charAt(0).toUpperCase(),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    e.jsx("span", {
                      className:
                        "text-[11px] text-center mt-1.5 w-[70px] truncate text-muted-foreground",
                      children: v.name.split(" ")[0],
                    }),
                  ],
                },
                v.user_id
              )
            ),
            x.length === 0 &&
              o.length === 0 &&
              e.jsx("div", {
                className:
                  "flex items-center text-xs text-muted-foreground py-2 ml-2",
                children: "Siga pessoas para ver stories",
              }),
          ],
        }),
      });
}
function rr({ open: s, onOpenChange: a, currentUserId: t, onSuccess: l }) {
  const [i, r] = n.useState(""),
    [c, x] = n.useState(null),
    [m, o] = n.useState(null),
    [g, p] = n.useState(null),
    [u, d] = n.useState(!1),
    [b, j] = n.useState(!1),
    w = n.useRef(null),
    v = n.useRef(null),
    L = n.useCallback((B, M) => {
      const N = B.target.files?.[0];
      if (!N) return;
      const q = N.type.startsWith("image/"),
        $ = N.type.startsWith("video/");
      if (M === "image" && !q) {
        H.error("Selecione apenas imagens");
        return;
      }
      if (M === "video" && !$) {
        H.error("Selecione apenas vídeos");
        return;
      }
      if (N.size > 50 * 1024 * 1024) {
        H.error("Arquivo muito grande. Máximo: 50MB");
        return;
      }
      if ($) {
        const T = document.createElement("video");
        (T.preload = "metadata"),
          (T.onloadedmetadata = () => {
            if ((URL.revokeObjectURL(T.src), T.duration > 60)) {
              H.error("Vídeo muito longo. Máximo: 60 segundos");
              return;
            }
            x(N), o(URL.createObjectURL(N)), p("video");
          }),
          (T.src = URL.createObjectURL(N));
      } else x(N), o(URL.createObjectURL(N)), p("image");
    }, []),
    z = () => {
      m && URL.revokeObjectURL(m),
        x(null),
        o(null),
        p(null),
        r(""),
        j(!1),
        w.current && (w.current.value = ""),
        v.current && (v.current.value = "");
    },
    k = () => {
      z(), a(!1);
    },
    C = async () => {
      if (!c) {
        H.error("Selecione uma foto ou vídeo para o story");
        return;
      }
      d(!0);
      try {
        const B = g === "image";
        let M = c;
        B && (M = await qs(c));
        const N = `${t}/stories/${Date.now()}.${
            B ? "jpg" : c.name.split(".").pop()
          }`,
          { error: q } = await h.storage
            .from("community-posts")
            .upload(N, M, {
              cacheControl: "3600",
              upsert: !1,
              contentType: B ? "image/jpeg" : c.type,
            });
        if (q) throw q;
        const {
            data: { publicUrl: $ },
          } = h.storage.from("community-posts").getPublicUrl(N),
          { error: T } = await h
            .from("community_stories")
            .insert({
              user_id: t,
              media_url: $,
              media_type: g,
              text: i.trim() || null,
            });
        if (T) throw T;
        H.success("Story publicado!"), z(), a(!1), l();
      } catch (B) {
        H.error(B.message || "Erro ao publicar story");
      } finally {
        d(!1);
      }
    };
  return s
    ? e.jsxs("div", {
        className: "fixed inset-0 z-[100] bg-black flex flex-col",
        children: [
          e.jsxs("header", {
            className:
              "flex items-center justify-between px-4 h-14 text-white safe-area-inset-top",
            children: [
              e.jsx(S, {
                variant: "ghost",
                size: "icon",
                onClick: k,
                className: "text-white hover:bg-white/20",
                children: e.jsx(Me, { className: "h-6 w-6" }),
              }),
              e.jsx("span", {
                className: "font-semibold text-lg",
                children: m ? "Editar Story" : "Novo Story",
              }),
              e.jsx("div", { className: "w-10" }),
            ],
          }),
          e.jsx("div", {
            className: "flex-1 flex flex-col items-center justify-center px-4",
            children: m
              ? e.jsxs("div", {
                  className:
                    "relative w-full max-w-sm aspect-[9/16] rounded-3xl overflow-hidden bg-muted/20",
                  children: [
                    g === "video"
                      ? e.jsx("video", {
                          src: m,
                          className: "w-full h-full object-cover",
                          autoPlay: !0,
                          muted: !0,
                          loop: !0,
                          playsInline: !0,
                        })
                      : e.jsx("img", {
                          src: m,
                          alt: "Preview",
                          className: "w-full h-full object-cover",
                        }),
                    b &&
                      e.jsx("div", {
                        className:
                          "absolute inset-0 bg-black/40 flex items-center justify-center p-4",
                        children: e.jsx(os, {
                          placeholder: "Adicione texto...",
                          value: i,
                          onChange: (B) => r(B.target.value),
                          maxLength: 200,
                          className:
                            "bg-transparent border-0 text-white text-center text-xl font-semibold placeholder:text-white/60 resize-none focus-visible:ring-0",
                          rows: 3,
                          autoFocus: !0,
                        }),
                      }),
                    i &&
                      !b &&
                      e.jsx("div", {
                        className: "absolute bottom-16 left-0 right-0 p-4",
                        children: e.jsx("p", {
                          className:
                            "text-white text-center text-lg font-semibold drop-shadow-lg",
                          children: i,
                        }),
                      }),
                    e.jsx("div", {
                      className:
                        "absolute bottom-4 left-0 right-0 flex justify-center px-4",
                      children: e.jsx(S, {
                        variant: "ghost",
                        size: "icon",
                        onClick: () => j(!b),
                        className: R(
                          "h-12 w-12 rounded-full bg-white/20 text-white hover:bg-white/30",
                          b && "bg-white text-black hover:bg-white/90"
                        ),
                        children: e.jsx(wa, { className: "h-5 w-5" }),
                      }),
                    }),
                    e.jsxs(S, {
                      variant: "ghost",
                      size: "sm",
                      onClick: z,
                      className:
                        "absolute top-4 left-4 text-white bg-black/40 hover:bg-black/60 rounded-full",
                      children: [
                        e.jsx(bs, { className: "h-4 w-4 mr-1" }),
                        "Trocar",
                      ],
                    }),
                  ],
                })
              : e.jsxs("div", {
                  className: "w-full max-w-sm space-y-6",
                  children: [
                    e.jsx("p", {
                      className: "text-center text-white/80 text-lg mb-8",
                      children: "Compartilhe um momento",
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        e.jsxs("button", {
                          onClick: () => w.current?.click(),
                          className:
                            "aspect-square rounded-2xl border-2 border-dashed border-white/30 flex flex-col items-center justify-center gap-3 hover:border-white/60 hover:bg-white/5 transition-all group",
                          children: [
                            e.jsx("div", {
                              className:
                                "p-4 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 group-hover:scale-110 transition-transform",
                              children: e.jsx(Ms, {
                                className: "h-8 w-8 text-white",
                              }),
                            }),
                            e.jsx("span", {
                              className: "text-white font-medium",
                              children: "Foto",
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          onClick: () => v.current?.click(),
                          className:
                            "aspect-square rounded-2xl border-2 border-dashed border-white/30 flex flex-col items-center justify-center gap-3 hover:border-white/60 hover:bg-white/5 transition-all group",
                          children: [
                            e.jsx("div", {
                              className:
                                "p-4 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-500 to-green-500 group-hover:scale-110 transition-transform",
                              children: e.jsx(Zt, {
                                className: "h-8 w-8 text-white",
                              }),
                            }),
                            e.jsx("span", {
                              className: "text-white font-medium",
                              children: "Vídeo",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "text-center text-white/50 text-sm space-y-1",
                      children: [
                        e.jsx("p", {
                          children: "⏰ Stories ficam disponíveis por 24 horas",
                        }),
                        e.jsx("p", {
                          children: "🎬 Vídeos: máximo 60 segundos",
                        }),
                      ],
                    }),
                  ],
                }),
          }),
          e.jsx("input", {
            ref: w,
            type: "file",
            accept: "image/*",
            onChange: (B) => L(B, "image"),
            className: "hidden",
          }),
          e.jsx("input", {
            ref: v,
            type: "file",
            accept: "video/*",
            onChange: (B) => L(B, "video"),
            className: "hidden",
          }),
          m &&
            e.jsx("div", {
              className: "p-4 safe-area-inset-bottom",
              children: e.jsxs("div", {
                className: "flex gap-3 max-w-sm mx-auto",
                children: [
                  e.jsx(S, {
                    variant: "outline",
                    className:
                      "flex-1 h-12 rounded-full border-white/30 text-white hover:bg-white/10 bg-transparent",
                    onClick: k,
                    disabled: u,
                    children: "Cancelar",
                  }),
                  e.jsx(S, {
                    onClick: C,
                    disabled: !c || u,
                    className:
                      "flex-1 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold",
                    children: u
                      ? e.jsxs(e.Fragment, {
                          children: [
                            e.jsx(pe, {
                              className: "h-4 w-4 mr-2 animate-spin",
                            }),
                            "Publicando...",
                          ],
                        })
                      : "Compartilhar",
                  }),
                ],
              }),
            }),
        ],
      })
    : null;
}
function ir({
  value: s,
  onChange: a,
  placeholder: t,
  className: l,
  disabled: i,
  onKeyDown: r,
  minHeight: c = "120px",
}) {
  const [x, m] = n.useState(!1),
    [o, g] = n.useState([]),
    [p, u] = n.useState(0),
    [d, b] = n.useState(""),
    [j, w] = n.useState(-1),
    v = n.useRef(null),
    L = n.useRef(null),
    z = gt(d, 200);
  n.useEffect(() => {
    (async () => {
      if (z.length >= 1) {
        const q = await pt(z);
        g(q), u(0);
      } else g([]);
    })();
  }, [z]);
  const k = n.useCallback((N, q) => {
      let $ = q - 1;
      for (; $ >= 0; ) {
        const T = N[$];
        if (T === "@") {
          const G = N.substring($ + 1, q);
          if (($ === 0 || /\s/.test(N[$ - 1])) && !/\s/.test(G))
            return { start: $, query: G };
          break;
        }
        if (/\s/.test(T)) break;
        $--;
      }
      return null;
    }, []),
    C = (N) => {
      const q = N.target.value,
        $ = N.target.selectionStart;
      a(q);
      const T = k(q, $);
      T ? (b(T.query), w(T.start), m(!0)) : (m(!1), b(""), w(-1));
    },
    B = (N) => {
      if (j === -1) return;
      const q = v.current;
      if (!q) return;
      const $ = q.selectionStart,
        T = s.substring(0, j),
        G = s.substring($),
        X = `@${N.username || N.name.replace(/\s+/g, "")} `,
        I = T + X + G;
      a(I),
        m(!1),
        b(""),
        w(-1),
        setTimeout(() => {
          if (q) {
            const oe = T.length + X.length;
            q.setSelectionRange(oe, oe), q.focus();
          }
        }, 0);
    },
    M = (N) => {
      if (x && o.length > 0) {
        if (N.key === "ArrowDown") {
          N.preventDefault(), u((q) => (q + 1) % o.length);
          return;
        }
        if (N.key === "ArrowUp") {
          N.preventDefault(), u((q) => (q - 1 + o.length) % o.length);
          return;
        }
        if (N.key === "Enter" && !N.shiftKey) {
          N.preventDefault(), B(o[p]);
          return;
        }
        if (N.key === "Escape") {
          N.preventDefault(), m(!1);
          return;
        }
        if (N.key === "Tab") {
          N.preventDefault(), B(o[p]);
          return;
        }
      }
      r?.(N);
    };
  return (
    n.useEffect(() => {
      const N = (q) => {
        L.current &&
          !L.current.contains(q.target) &&
          v.current &&
          !v.current.contains(q.target) &&
          m(!1);
      };
      return (
        document.addEventListener("mousedown", N),
        () => document.removeEventListener("mousedown", N)
      );
    }, []),
    e.jsxs("div", {
      className: "relative",
      children: [
        e.jsx(os, {
          ref: v,
          value: s,
          onChange: C,
          onKeyDown: M,
          placeholder: t,
          className: R(l),
          style: { minHeight: c },
          disabled: i,
        }),
        x &&
          o.length > 0 &&
          e.jsxs("div", {
            ref: L,
            className:
              "absolute left-0 right-0 top-full mt-1 z-50 bg-popover border border-border rounded-xl shadow-lg overflow-hidden animate-in fade-in-0 zoom-in-95",
            children: [
              e.jsxs("div", {
                className: "p-1 max-h-[200px] overflow-y-auto",
                children: [
                  e.jsx("p", {
                    className:
                      "px-3 py-1.5 text-xs font-medium text-muted-foreground",
                    children: "Usuários",
                  }),
                  o.map((N, q) =>
                    e.jsxs(
                      "button",
                      {
                        type: "button",
                        className: R(
                          "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left",
                          q === p
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent"
                        ),
                        onClick: () => B(N),
                        onMouseEnter: () => u(q),
                        children: [
                          e.jsxs(te, {
                            className: "h-8 w-8",
                            children: [
                              e.jsx(re, { src: N.avatar_url || void 0 }),
                              e.jsx(ae, {
                                className:
                                  "bg-primary/10 text-primary text-xs font-semibold",
                                children: N.name.charAt(0).toUpperCase(),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              e.jsx("p", {
                                className: "font-medium text-sm truncate",
                                children: N.name,
                              }),
                              e.jsxs("p", {
                                className:
                                  "text-xs text-muted-foreground truncate",
                                children: [
                                  "@",
                                  N.username ||
                                    N.name.toLowerCase().replace(/\s+/g, ""),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      N.user_id
                    )
                  ),
                ],
              }),
              e.jsxs("div", {
                className:
                  "px-3 py-2 border-t bg-muted/50 text-xs text-muted-foreground",
                children: [
                  e.jsxs("span", {
                    className: "inline-flex items-center gap-1",
                    children: [
                      e.jsx("kbd", {
                        className:
                          "px-1.5 py-0.5 bg-background rounded text-[10px] font-mono",
                        children: "↑↓",
                      }),
                      " navegar",
                    ],
                  }),
                  e.jsx("span", { className: "mx-2", children: "·" }),
                  e.jsxs("span", {
                    className: "inline-flex items-center gap-1",
                    children: [
                      e.jsx("kbd", {
                        className:
                          "px-1.5 py-0.5 bg-background rounded text-[10px] font-mono",
                        children: "Enter",
                      }),
                      " selecionar",
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
const Gs = [
  "São Paulo, Brasil",
  "Rio de Janeiro, Brasil",
  "Belo Horizonte, Brasil",
  "Brasília, Brasil",
  "Curitiba, Brasil",
  "Porto Alegre, Brasil",
  "Fortaleza, Brasil",
  "Salvador, Brasil",
  "Lisboa, Portugal",
  "Porto, Portugal",
];
function nr({
  open: s,
  onOpenChange: a,
  onSelectLocation: t,
  currentLocation: l,
}) {
  const [i, r] = n.useState(""),
    [c, x] = n.useState(!1),
    m = i ? Gs.filter((u) => u.toLowerCase().includes(i.toLowerCase())) : Gs,
    o = (u) => {
      t(u), a(!1);
    },
    g = async () => {
      if (!navigator.geolocation) {
        alert("Geolocalização não suportada pelo navegador");
        return;
      }
      x(!0),
        navigator.geolocation.getCurrentPosition(
          async (u) => {
            try {
              const { latitude: d, longitude: b } = u.coords,
                w = await (
                  await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${d}&lon=${b}&zoom=10`
                  )
                ).json(),
                v =
                  w.address?.city ||
                  w.address?.town ||
                  w.address?.village ||
                  "",
                L = w.address?.country || "",
                z =
                  v && L
                    ? `${v}, ${L}`
                    : w.display_name?.split(",").slice(0, 2).join(",") ||
                      "Localização atual";
              o(z);
            } catch {
              o("Localização atual");
            } finally {
              x(!1);
            }
          },
          (u) => {
            x(!1), alert("Não foi possível obter sua localização");
          }
        );
    },
    p = () => {
      t(""), a(!1);
    };
  return e.jsx(Pe, {
    open: s,
    onOpenChange: a,
    children: e.jsxs(Ae, {
      className: "sm:max-w-md p-0 gap-0",
      children: [
        e.jsx($e, {
          className: "p-4 pb-3 border-b border-border",
          children: e.jsx(Oe, {
            className: "text-lg font-semibold",
            children: "Adicionar localização",
          }),
        }),
        e.jsxs("div", {
          className: "p-4 border-b border-border space-y-3",
          children: [
            e.jsxs("div", {
              className: "relative",
              children: [
                e.jsx(ls, {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                }),
                e.jsx(De, {
                  placeholder: "Pesquisar localização...",
                  value: i,
                  onChange: (u) => r(u.target.value),
                  className: "pl-9 h-10 bg-muted border-0 rounded-xl",
                }),
                i &&
                  e.jsx(S, {
                    variant: "ghost",
                    size: "icon",
                    className:
                      "absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7",
                    onClick: () => r(""),
                    children: e.jsx(Me, { className: "h-4 w-4" }),
                  }),
              ],
            }),
            e.jsxs(S, {
              variant: "outline",
              className: "w-full justify-start gap-2",
              onClick: g,
              disabled: c,
              children: [
                c
                  ? e.jsx(pe, { className: "h-4 w-4 animate-spin" })
                  : e.jsx(Na, { className: "h-4 w-4 text-primary" }),
                "Usar localização atual",
              ],
            }),
            l &&
              e.jsxs(S, {
                variant: "ghost",
                className: "w-full justify-start gap-2 text-muted-foreground",
                onClick: p,
                children: [
                  e.jsx(Me, { className: "h-4 w-4" }),
                  "Remover localização",
                ],
              }),
          ],
        }),
        i &&
          !m.includes(i) &&
          e.jsx("div", {
            className: "border-b border-border",
            children: e.jsxs("button", {
              onClick: () => o(i),
              className:
                "flex items-center gap-3 w-full px-4 py-3 hover:bg-muted/50 transition-colors",
              children: [
                e.jsx(ns, { className: "h-5 w-5 text-muted-foreground" }),
                e.jsxs("span", {
                  className: "text-sm",
                  children: ['Usar "', i, '"'],
                }),
              ],
            }),
          }),
        e.jsx(we, {
          className: "max-h-[250px]",
          children: e.jsxs("div", {
            className: "p-2",
            children: [
              e.jsx("p", {
                className:
                  "px-3 py-2 text-xs font-medium text-muted-foreground uppercase",
                children: "Localizações populares",
              }),
              m.map((u) =>
                e.jsxs(
                  "button",
                  {
                    onClick: () => o(u),
                    className: R(
                      "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg transition-colors",
                      l === u
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted/50"
                    ),
                    children: [
                      e.jsx(ns, { className: "h-5 w-5 text-muted-foreground" }),
                      e.jsx("span", { className: "text-sm", children: u }),
                    ],
                  },
                  u
                )
              ),
            ],
          }),
        }),
      ],
    }),
  });
}
function or({ open: s, onOpenChange: a, userId: t, onPostCreated: l }) {
  const { toast: i } = rs(),
    [r, c] = n.useState(""),
    [x, m] = n.useState(null),
    [o, g] = n.useState(null),
    [p, u] = n.useState(!1),
    [d, b] = n.useState(null),
    [j, w] = n.useState("media"),
    [v, L] = n.useState(""),
    [z, k] = n.useState(!1),
    C = n.useRef(null);
  n.useEffect(() => {
    s && t && (B(), w("media"));
  }, [s, t]);
  const B = async () => {
      try {
        const { data: X } = await h
          .from("profiles")
          .select("name, avatar_url, username")
          .eq("user_id", t)
          .single();
        b(X);
      } catch {}
    },
    M = (X) => {
      const I = X.target.files?.[0];
      if (I) {
        if (!I.type.startsWith("image/") && !I.type.startsWith("video/")) {
          i({
            title: "Arquivo inválido",
            description: "Apenas imagens e vídeos são permitidos",
            variant: "destructive",
          });
          return;
        }
        if (I.size > 50 * 1024 * 1024) {
          i({
            title: "Arquivo muito grande",
            description: "O arquivo deve ter no máximo 50MB",
            variant: "destructive",
          });
          return;
        }
        m(I), g(URL.createObjectURL(I)), w("caption");
      }
    },
    N = () => {
      m(null),
        o && (URL.revokeObjectURL(o), g(null)),
        w("media"),
        C.current && (C.current.value = "");
    },
    q = () => {
      c(""), N(), w("media"), L(""), a(!1);
    },
    $ = async () => {
      if (!r.trim() && !x) {
        i({
          title: "Conteúdo vazio",
          description: "Adicione texto ou mídia",
          variant: "destructive",
        });
        return;
      }
      u(!0);
      try {
        let X = null,
          I = null;
        if (x) {
          const Y = x.type.startsWith("image/");
          let ee = x;
          Y && (ee = await qs(x));
          const ce = `${Date.now()}-${Math.random()
              .toString(36)
              .substring(7)}.${Y ? "jpg" : x.name.split(".").pop()}`,
            de = `${t}/${ce}`,
            { error: he } = await h.storage
              .from("community-posts")
              .upload(de, ee, {
                upsert: !1,
                contentType: Y ? "image/jpeg" : x.type,
              });
          if (he) throw he;
          const { data: je } = h.storage
            .from("community-posts")
            .getPublicUrl(de);
          (X = je.publicUrl), (I = Y ? "image" : "video");
        }
        const { data: oe, error: Z } = await h
          .from("community_posts")
          .insert({
            user_id: t,
            text: r.trim() || "",
            media_url: X,
            media_type: I,
            location: v || null,
          })
          .select()
          .single();
        if (Z) throw Z;
        oe && (await ft(r.trim(), t, oe.id)),
          i({
            title: "Post publicado!",
            description: "Seu post foi compartilhado com a comunidade",
          }),
          q(),
          l?.();
      } catch (X) {
        i({
          title: "Erro ao criar post",
          description: X.message || "Tente novamente",
          variant: "destructive",
        });
      } finally {
        u(!1);
      }
    };
  if (!s) return null;
  const T = d?.name || "Usuário",
    G = d?.avatar_url;
  return (
    d?.username || T.toLowerCase().replace(/\s+/g, ""),
    e.jsxs("div", {
      className: "fixed inset-0 z-[100] bg-background flex flex-col",
      children: [
        e.jsxs("header", {
          className:
            "flex items-center justify-between h-14 px-4 border-b border-border safe-area-inset-top",
          children: [
            e.jsx(S, {
              variant: "ghost",
              size: "icon",
              onClick: j === "caption" ? () => w("media") : q,
              children:
                j === "caption"
                  ? e.jsx(bs, { className: "h-6 w-6" })
                  : e.jsx(Me, { className: "h-6 w-6" }),
            }),
            e.jsx("span", {
              className: "font-semibold text-lg",
              children: "Nova publicação",
            }),
            j === "caption"
              ? e.jsx(S, {
                  variant: "ghost",
                  onClick: $,
                  disabled: p || (!r.trim() && !x),
                  className: "text-primary font-semibold",
                  children: p
                    ? e.jsx(pe, { className: "h-5 w-5 animate-spin" })
                    : "Compartilhar",
                })
              : e.jsx("div", { className: "w-10" }),
          ],
        }),
        j === "media" &&
          e.jsx("div", {
            className: "flex-1 flex flex-col items-center justify-center p-6",
            children: e.jsxs("div", {
              className: "w-full max-w-md space-y-6",
              children: [
                e.jsxs("div", {
                  className: "text-center space-y-2",
                  children: [
                    e.jsx("div", {
                      className:
                        "inline-flex p-6 rounded-full border-2 border-foreground mb-4",
                      children: e.jsx(Ms, { className: "h-12 w-12" }),
                    }),
                    e.jsx("h2", {
                      className: "text-xl font-semibold",
                      children: "Criar nova publicação",
                    }),
                    e.jsx("p", {
                      className: "text-muted-foreground",
                      children:
                        "Arraste fotos e vídeos aqui ou selecione do dispositivo",
                    }),
                  ],
                }),
                e.jsx(S, {
                  onClick: () => C.current?.click(),
                  className:
                    "w-full h-12 rounded-lg bg-primary hover:bg-primary/90 font-semibold",
                  children: "Selecionar do dispositivo",
                }),
                e.jsx("input", {
                  ref: C,
                  type: "file",
                  accept: "image/*,video/*",
                  className: "hidden",
                  onChange: M,
                }),
                e.jsx("div", {
                  className: "pt-4 border-t",
                  children: e.jsx(S, {
                    variant: "outline",
                    className: "w-full h-12 rounded-lg",
                    onClick: () => w("caption"),
                    children: "Criar post apenas com texto",
                  }),
                }),
              ],
            }),
          }),
        j === "caption" &&
          e.jsxs("div", {
            className: "flex-1 flex flex-col overflow-hidden",
            children: [
              o &&
                e.jsxs("div", {
                  className: "relative aspect-square max-h-[50vh] bg-muted",
                  children: [
                    x?.type.startsWith("image/")
                      ? e.jsx("img", {
                          src: o,
                          alt: "Preview",
                          className: "w-full h-full object-contain",
                        })
                      : e.jsx("video", {
                          src: o,
                          controls: !0,
                          className: "w-full h-full object-contain",
                        }),
                    e.jsx(S, {
                      variant: "secondary",
                      size: "icon",
                      className:
                        "absolute top-3 right-3 h-8 w-8 rounded-full shadow-lg",
                      onClick: N,
                      children: e.jsx(Me, { className: "h-4 w-4" }),
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "flex-1 overflow-y-auto",
                children: [
                  e.jsxs("div", {
                    className: "flex items-start gap-3 p-4",
                    children: [
                      e.jsxs(te, {
                        className: "h-10 w-10 flex-shrink-0",
                        children: [
                          e.jsx(re, { src: G || void 0 }),
                          e.jsx(ae, {
                            className: "bg-muted text-sm font-semibold",
                            children: T.charAt(0).toUpperCase(),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "flex-1",
                        children: e.jsx(ir, {
                          value: r,
                          onChange: c,
                          placeholder: "Escreva uma legenda...",
                          className:
                            "border-0 resize-none text-base p-0 focus-visible:ring-0 placeholder:text-muted-foreground/60 min-h-[120px]",
                          disabled: p,
                          minHeight: "120px",
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "border-t border-border",
                    children: [
                      e.jsxs("button", {
                        type: "button",
                        onClick: () => k(!0),
                        className:
                          "flex items-center justify-between w-full px-4 py-3 hover:bg-muted/50 transition-colors",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx(ns, {
                                className: R(
                                  "h-5 w-5",
                                  v ? "text-primary" : "text-muted-foreground"
                                ),
                              }),
                              e.jsx("span", {
                                className: v ? "text-primary" : "",
                                children: v || "Adicionar localização",
                              }),
                            ],
                          }),
                          e.jsx(js, {
                            className: "h-5 w-5 text-muted-foreground",
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "px-4 py-3",
                        children: e.jsxs("div", {
                          className:
                            "flex items-center gap-3 text-muted-foreground",
                          children: [
                            e.jsx(rt, { className: "h-5 w-5" }),
                            e.jsx("span", {
                              className: "text-sm",
                              children: "Use @ no texto para marcar pessoas",
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
        e.jsx(nr, {
          open: z,
          onOpenChange: k,
          onSelectLocation: L,
          currentLocation: v,
        }),
      ],
    })
  );
}
function lr({
  onOpenMessages: s,
  onCreatePost: a,
  unreadMessages: t = 0,
  className: l,
}) {
  return e.jsx("header", {
    className: R(
      "sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border",
      l
    ),
    style: { paddingTop: "env(safe-area-inset-top)" },
    children: e.jsxs("div", {
      className: "flex items-center justify-between h-11 px-4 max-w-lg mx-auto",
      children: [
        e.jsx("div", {
          className: "flex items-center",
          children: e.jsx("h1", {
            className:
              "text-2xl font-bold font-serif italic tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text",
            children: "TechOS",
          }),
        }),
        e.jsxs("div", {
          className: "flex items-center gap-0.5",
          children: [
            a &&
              e.jsx(S, {
                variant: "ghost",
                size: "icon",
                className:
                  "h-9 w-9 hover:bg-muted/50 active:scale-95 transition-all",
                onClick: a,
                children: e.jsx(_a, { className: "h-6 w-6", strokeWidth: 1.5 }),
              }),
            e.jsxs(S, {
              variant: "ghost",
              size: "icon",
              className:
                "h-9 w-9 hover:bg-muted/50 active:scale-95 transition-all relative",
              onClick: s,
              children: [
                e.jsx(Xe, { className: "h-6 w-6", strokeWidth: 1.5 }),
                t > 0 &&
                  e.jsx("span", {
                    className:
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground flex items-center justify-center px-1",
                    children: t > 99 ? "99+" : t,
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function _s({
  activeTab: s,
  onTabChange: a,
  userAvatar: t,
  userName: l = "U",
  unreadNotifications: i = 0,
  unreadMessages: r = 0,
}) {
  const c = is();
  return e.jsx("nav", {
    className: R(
      "fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border",
      !c &&
        "lg:left-auto lg:right-auto lg:w-[470px] lg:mx-auto lg:rounded-t-xl lg:shadow-lg"
    ),
    children: e.jsxs("div", {
      className: R(
        "flex items-center justify-around h-12 max-w-lg mx-auto",
        !c && "lg:h-14"
      ),
      style: { paddingBottom: c ? "env(safe-area-inset-bottom)" : 0 },
      children: [
        e.jsx("button", {
          onClick: () => a("home"),
          className: R(
            "flex items-center justify-center h-full flex-1 transition-all active:scale-90",
            s !== "home" && "opacity-60"
          ),
          children: e.jsx(Jt, {
            className: R("h-6 w-6", s === "home" && "fill-current"),
            strokeWidth: s === "home" ? 2.5 : 1.5,
          }),
        }),
        e.jsx("button", {
          onClick: () => a("search"),
          className: R(
            "flex items-center justify-center h-full flex-1 transition-all active:scale-90",
            s !== "search" && "opacity-60"
          ),
          children: e.jsx(ls, {
            className: "h-6 w-6",
            strokeWidth: s === "search" ? 2.5 : 1.5,
          }),
        }),
        e.jsxs("button", {
          onClick: () => a("messages"),
          className: R(
            "flex items-center justify-center h-full flex-1 transition-all active:scale-90 relative",
            s !== "messages" && "opacity-60"
          ),
          children: [
            e.jsx(Xe, {
              className: "h-6 w-6",
              strokeWidth: s === "messages" ? 2.5 : 1.5,
            }),
            r > 0 &&
              e.jsx("span", {
                className:
                  "absolute top-1 right-1/4 min-w-[18px] h-[18px] rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground flex items-center justify-center px-1",
                children: r > 99 ? "99+" : r,
              }),
          ],
        }),
        e.jsxs("button", {
          onClick: (x) => {
            x.preventDefault(), x.stopPropagation(), a("activity");
          },
          className: R(
            "flex items-center justify-center h-full flex-1 transition-all active:scale-90 relative",
            s !== "activity" && "opacity-60"
          ),
          children: [
            e.jsx(ke, {
              className: R("h-6 w-6", s === "activity" && "fill-current"),
              strokeWidth: s === "activity" ? 2.5 : 1.5,
            }),
            i > 0 &&
              e.jsx("span", {
                className:
                  "absolute top-1 right-1/4 h-2 w-2 rounded-full bg-destructive",
              }),
          ],
        }),
        e.jsx("button", {
          onClick: () => a("profile"),
          className:
            "flex items-center justify-center h-full flex-1 transition-all active:scale-90",
          children: e.jsx("div", {
            className: R(
              "rounded-full transition-all",
              s === "profile"
                ? "ring-2 ring-foreground ring-offset-1 ring-offset-background"
                : "opacity-60"
            ),
            children: e.jsxs(te, {
              className: "h-6 w-6",
              children: [
                e.jsx(re, { src: t || void 0 }),
                e.jsx(ae, {
                  className:
                    "text-[10px] font-semibold bg-gradient-to-br from-primary/20 to-primary/40",
                  children: l.charAt(0).toUpperCase(),
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
function cr({ open: s, onOpenChange: a, userId: t, onViewProfile: l }) {
  const [i, r] = n.useState([]),
    [c, x] = n.useState(!0);
  n.useEffect(() => {
    s && (m(), o());
  }, [s, t]);
  const m = async () => {
      try {
        x(!0);
        const { data: b, error: j } = await h
          .from("community_notifications")
          .select("*")
          .eq("user_id", t)
          .order("created_at", { ascending: !1 })
          .limit(50);
        if (j) throw j;
        const w = [...new Set((b || []).map((k) => k.actor_id))],
          { data: v } = await h
            .from("profiles")
            .select("user_id, name, avatar_url")
            .in("user_id", w),
          L = new Map(v?.map((k) => [k.user_id, k]) || []),
          z = (b || []).map((k) => ({
            ...k,
            type: k.type,
            actor: L.get(k.actor_id) || { name: "Usuário", avatar_url: null },
          }));
        r(z);
      } catch {
      } finally {
        x(!1);
      }
    },
    o = async () => {
      try {
        await h
          .from("community_notifications")
          .update({ read: !0 })
          .eq("user_id", t)
          .eq("read", !1);
      } catch {}
    },
    g = (b) => {
      switch (b) {
        case "like":
          return e.jsx(ke, {
            className: "h-4 w-4 text-destructive fill-destructive",
          });
        case "comment":
          return e.jsx(as, { className: "h-4 w-4 text-primary" });
        case "repost":
          return e.jsx(ya, { className: "h-4 w-4 text-primary" });
        case "follow":
          return e.jsx(ra, { className: "h-4 w-4 text-primary" });
        case "mention":
          return e.jsx(va, { className: "h-4 w-4 text-primary" });
        default:
          return e.jsx(ke, { className: "h-4 w-4" });
      }
    },
    p = (b) => {
      switch (b.type) {
        case "like":
          return "curtiu sua publicação.";
        case "comment":
          return "comentou na sua publicação.";
        case "repost":
          return "repostou sua publicação.";
        case "follow":
          return "começou a seguir você.";
        case "mention":
          return "mencionou você em uma publicação.";
        default:
          return "interagiu com você.";
      }
    },
    u = (b) => {
      b.type === "follow" && l && (l(b.actor_id), a(!1));
    },
    d = i.reduce((b, j) => {
      const w = new Date(j.created_at),
        v = new Date(),
        L = new Date(v);
      L.setDate(L.getDate() - 1);
      const z = new Date(v);
      z.setDate(z.getDate() - 7);
      let k = "Anteriores";
      return (
        w.toDateString() === v.toDateString()
          ? (k = "Hoje")
          : w.toDateString() === L.toDateString()
          ? (k = "Ontem")
          : w > z
          ? (k = "Esta semana")
          : w.getMonth() === v.getMonth() && (k = "Este mês"),
        b[k] || (b[k] = []),
        b[k].push(j),
        b
      );
    }, {});
  return e.jsx(ea, {
    open: s,
    onOpenChange: a,
    children: e.jsxs(sa, {
      side: "bottom",
      className: "h-[85vh] p-0 rounded-t-3xl",
      children: [
        e.jsx(ta, {
          className:
            "sticky top-0 z-10 bg-background border-b border-border px-4 py-3",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx(S, {
                variant: "ghost",
                size: "icon",
                className: "h-8 w-8",
                onClick: () => a(!1),
                children: e.jsx(Ee, { className: "h-5 w-5" }),
              }),
              e.jsx(aa, {
                className: "text-lg font-semibold",
                children: "Notificações",
              }),
            ],
          }),
        }),
        e.jsx(we, {
          className: "h-[calc(85vh-60px)]",
          children: c
            ? e.jsx("div", {
                className: "flex items-center justify-center py-12",
                children: e.jsx(pe, {
                  className: "h-6 w-6 animate-spin text-muted-foreground",
                }),
              })
            : i.length === 0
            ? e.jsxs("div", {
                className: "text-center py-16 px-4",
                children: [
                  e.jsx(ke, {
                    className:
                      "h-12 w-12 mx-auto mb-3 text-muted-foreground/30",
                  }),
                  e.jsx("p", {
                    className: "font-semibold mb-1",
                    children: "Atividade em suas publicações",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children:
                      "Quando alguém curtir ou comentar em suas publicações, você verá aqui.",
                  }),
                ],
              })
            : e.jsx("div", {
                className: "pb-6",
                children: Object.entries(d).map(([b, j]) =>
                  e.jsxs(
                    "div",
                    {
                      children: [
                        e.jsx("div", {
                          className:
                            "px-4 py-2 sticky top-0 bg-background/95 backdrop-blur-sm",
                          children: e.jsx("p", {
                            className: "font-semibold text-sm",
                            children: b,
                          }),
                        }),
                        j.map((w) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => u(w),
                              className: R(
                                "flex items-center gap-3 w-full px-4 py-3 hover:bg-muted/50 active:bg-muted transition-colors text-left",
                                !w.read && "bg-primary/5"
                              ),
                              children: [
                                e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsxs(te, {
                                      className: "h-11 w-11",
                                      children: [
                                        e.jsx(re, {
                                          src: w.actor?.avatar_url || void 0,
                                        }),
                                        e.jsx(ae, {
                                          className:
                                            "bg-gradient-to-br from-primary/20 to-primary/40 text-sm font-medium",
                                          children:
                                            w.actor?.name
                                              ?.charAt(0)
                                              .toUpperCase() || "U",
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-background flex items-center justify-center",
                                      children: g(w.type),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 min-w-0",
                                  children: [
                                    e.jsxs("p", {
                                      className: "text-sm leading-tight",
                                      children: [
                                        e.jsx("span", {
                                          className: "font-semibold",
                                          children: w.actor?.name,
                                        }),
                                        " ",
                                        e.jsx("span", {
                                          className: "text-muted-foreground",
                                          children: p(w),
                                        }),
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-xs text-muted-foreground mt-0.5",
                                      children: Fe(new Date(w.created_at), {
                                        addSuffix: !1,
                                        locale: Be,
                                      }),
                                    }),
                                  ],
                                }),
                                w.type === "follow" &&
                                  e.jsx(S, {
                                    size: "sm",
                                    className:
                                      "h-8 text-xs font-semibold rounded-lg",
                                    children: "Seguir",
                                  }),
                              ],
                            },
                            w.id
                          )
                        ),
                      ],
                    },
                    b
                  )
                ),
              }),
        }),
      ],
    }),
  });
}
function dr({ onHashtagClick: s, selectedHashtag: a, className: t }) {
  const [l, i] = n.useState([]),
    [r, c] = n.useState(!0);
  n.useEffect(() => {
    x();
  }, []);
  const x = async () => {
    try {
      const m = new Date();
      m.setDate(m.getDate() - 7);
      const { data: o, error: g } = await h
        .from("community_posts")
        .select("text")
        .gte("created_at", m.toISOString());
      if (g) throw g;
      const p = {};
      (o || []).forEach((d) => {
        const b = d.text.match(/#[\w\u00C0-\u00FF]+/g);
        b &&
          b.forEach((j) => {
            const w = j.toLowerCase();
            p[w] = (p[w] || 0) + 1;
          });
      });
      const u = Object.entries(p)
        .map(([d, b]) => ({ tag: d, count: b }))
        .sort((d, b) => b.count - d.count)
        .slice(0, 10);
      i(u);
    } catch {
    } finally {
      c(!1);
    }
  };
  return r || l.length === 0
    ? null
    : e.jsxs("div", {
        className: R("bg-background border-b border-border", t),
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 px-4 py-2",
            children: [
              e.jsx(it, { className: "h-4 w-4 text-primary flex-shrink-0" }),
              e.jsx("span", {
                className: "text-xs font-medium text-muted-foreground",
                children: "Em alta",
              }),
            ],
          }),
          e.jsxs(we, {
            className: "w-full whitespace-nowrap",
            children: [
              e.jsx("div", {
                className: "flex gap-2 px-4 pb-3",
                children: l.map(({ tag: m, count: o }) =>
                  e.jsxs(
                    "button",
                    {
                      onClick: () => s(m),
                      className: R(
                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                        "border hover:bg-muted/80 active:scale-95",
                        a === m
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-muted/50 text-foreground border-border"
                      ),
                      children: [
                        e.jsx(ia, { className: "h-3 w-3" }),
                        e.jsx("span", { children: m.replace("#", "") }),
                        e.jsx("span", {
                          className: "text-muted-foreground ml-0.5",
                          children: o,
                        }),
                      ],
                    },
                    m
                  )
                ),
              }),
              e.jsx(tt, { orientation: "horizontal", className: "h-1.5" }),
            ],
          }),
        ],
      });
}
function mr({
  currentUserId: s,
  onViewProfile: a,
  onViewAll: t,
  className: l,
}) {
  const [i, r] = n.useState([]),
    [c, x] = n.useState(!0),
    [m, o] = n.useState([]);
  n.useEffect(() => {
    g();
  }, [s]);
  const g = async () => {
      try {
        const { data: u } = await h
            .from("community_follows")
            .select("following_id")
            .eq("follower_id", s),
          d = (u || []).map((v) => v.following_id);
        o(d);
        const { data: b, error: j } = await h
          .from("profiles")
          .select("user_id, name, username, avatar_url, store_name")
          .neq("user_id", s)
          .not("user_id", "in", `(${d.length > 0 ? d.join(",") : s})`)
          .limit(5);
        if (j) throw j;
        const w = await Promise.all(
          (b || []).map(async (v) => {
            const { data: L } = await h
              .from("user_badges")
              .select("badge_name")
              .eq("user_id", v.user_id);
            return {
              ...v,
              isVerified: (L || []).some((z) => z.badge_name === "Verificado"),
              isFollowing: !1,
            };
          })
        );
        r(w);
      } catch {
      } finally {
        x(!1);
      }
    },
    p = async (u) => {
      try {
        await h
          .from("community_follows")
          .insert({ follower_id: s, following_id: u }),
          r((d) =>
            d.map((b) => (b.user_id === u ? { ...b, isFollowing: !0 } : b))
          ),
          H.success("Seguindo!");
      } catch {
        H.error("Erro ao seguir usuário");
      }
    };
  return c
    ? e.jsx("div", {
        className: R("bg-background rounded-lg border border-border p-4", l),
        children: e.jsx("div", {
          className: "flex items-center justify-center py-4",
          children: e.jsx(pe, {
            className: "h-5 w-5 animate-spin text-muted-foreground",
          }),
        }),
      })
    : i.length === 0
    ? null
    : e.jsxs("div", {
        className: R("bg-background rounded-lg border border-border", l),
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between p-4 pb-2",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(rt, { className: "h-4 w-4 text-muted-foreground" }),
                  e.jsx("span", {
                    className: "text-sm font-semibold text-muted-foreground",
                    children: "Sugestões para você",
                  }),
                ],
              }),
              e.jsx(S, {
                variant: "ghost",
                size: "sm",
                className: "text-xs text-primary",
                onClick: t,
                children: "Ver tudo",
              }),
            ],
          }),
          e.jsx("div", {
            className: "p-4 pt-2 space-y-3",
            children: i.map((u) =>
              e.jsxs(
                "div",
                {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("button", {
                      onClick: () => a(u.user_id),
                      className:
                        "flex items-center gap-3 flex-1 min-w-0 text-left",
                      children: [
                        e.jsxs(te, {
                          className: "h-10 w-10 flex-shrink-0",
                          children: [
                            e.jsx(re, { src: u.avatar_url || void 0 }),
                            e.jsx(ae, {
                              className: "text-sm",
                              children: u.name.charAt(0).toUpperCase(),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "min-w-0 flex-1",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx("span", {
                                  className: "font-semibold text-sm truncate",
                                  children: u.username,
                                }),
                                u.isVerified && e.jsx(Ye, { size: "sm" }),
                              ],
                            }),
                            e.jsx("p", {
                              className:
                                "text-xs text-muted-foreground truncate",
                              children: u.store_name || u.name,
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(S, {
                      variant: u.isFollowing ? "secondary" : "default",
                      size: "sm",
                      className: R(
                        "text-xs h-8 px-4",
                        u.isFollowing && "text-muted-foreground"
                      ),
                      onClick: () => p(u.user_id),
                      disabled: u.isFollowing,
                      children: u.isFollowing ? "Seguindo" : "Seguir",
                    }),
                  ],
                },
                u.user_id
              )
            ),
          }),
        ],
      });
}
function ur({
  currentUserId: s,
  userAvatar: a,
  userName: t,
  username: l,
  onViewProfile: i,
  onViewUser: r,
  onHashtagClick: c,
  selectedHashtag: x,
  onOpenSettings: m,
  onOpenPrivacy: o,
  onViewSavedPosts: g,
  onViewBlockedUsers: p,
  onViewAllSuggestions: u,
}) {
  const [d, b] = n.useState([]),
    [j, w] = n.useState({
      totalPosts: 0,
      totalLikes: 0,
      totalComments: 0,
      activeUsers: 0,
    }),
    [v, L] = n.useState(0);
  n.useEffect(() => {
    z(), k(), C();
  }, [s]);
  const z = async () => {
      try {
        const M = new Date();
        M.setDate(M.getDate() - 7);
        const { data: N } = await h
          .from("community_posts")
          .select("user_id, community_post_likes(user_id)")
          .gte("created_at", M.toISOString());
        if (!N) return;
        const q = new Map();
        N.forEach((Z) => {
          const Y = q.get(Z.user_id) || { posts: 0, likes: 0 };
          (Y.posts += 1),
            (Y.likes += Z.community_post_likes?.length || 0),
            q.set(Z.user_id, Y);
        });
        const $ = Array.from(q.entries())
          .sort(
            (Z, Y) =>
              Y[1].likes + Y[1].posts * 2 - (Z[1].likes + Z[1].posts * 2)
          )
          .slice(0, 3);
        if ($.length === 0) return;
        const T = $.map(([Z]) => Z),
          { data: G } = await h
            .from("profiles")
            .select("user_id, name, username, avatar_url")
            .in("user_id", T),
          { data: X } = await h
            .from("user_badges")
            .select("user_id, badge_name")
            .in("user_id", T)
            .eq("badge_name", "Verificado"),
          I = new Set(X?.map((Z) => Z.user_id) || []),
          oe = $.map(([Z, Y]) => {
            const ee = G?.find((ce) => ce.user_id === Z);
            return {
              user_id: Z,
              name: ee?.name || "Usuário",
              username: ee?.username || "user",
              avatar_url: ee?.avatar_url || null,
              posts_count: Y.posts,
              likes_count: Y.likes,
              isVerified: I.has(Z),
            };
          });
        b(oe);
      } catch {}
    },
    k = async () => {
      try {
        const M = new Date();
        M.setDate(M.getDate() - 7);
        const [N, q, $] = await Promise.all([
            h
              .from("community_posts")
              .select("user_id", { count: "exact" })
              .gte("created_at", M.toISOString()),
            h
              .from("community_post_likes")
              .select("*", { count: "exact", head: !0 })
              .gte("created_at", M.toISOString()),
            h
              .from("community_comments")
              .select("*", { count: "exact", head: !0 })
              .gte("created_at", M.toISOString()),
          ]),
          T = new Set(N.data?.map((G) => G.user_id) || []);
        w({
          totalPosts: N.count || 0,
          totalLikes: q.count || 0,
          totalComments: $.count || 0,
          activeUsers: T.size,
        });
      } catch {}
    },
    C = async () => {
      try {
        const { count: M } = await h
          .from("community_bookmarks")
          .select("*", { count: "exact", head: !0 })
          .eq("user_id", s);
        L(M || 0);
      } catch {}
    },
    B = (M) =>
      M === 0
        ? e.jsx(oa, { className: "h-4 w-4 text-yellow-500" })
        : M === 1
        ? e.jsx(la, { className: "h-4 w-4 text-gray-400" })
        : M === 2
        ? e.jsx(ca, { className: "h-4 w-4 text-amber-600" })
        : null;
  return e.jsxs("div", {
    className: "space-y-4",
    children: [
      e.jsx(ts, {
        className: "border-0 shadow-none bg-transparent",
        children: e.jsx(ms, {
          className: "p-0",
          children: e.jsxs("button", {
            onClick: i,
            className:
              "flex items-center gap-3 w-full hover:bg-muted/50 rounded-lg p-2 -m-2 transition-colors",
            children: [
              e.jsxs(te, {
                className: "h-14 w-14 ring-2 ring-primary/20",
                children: [
                  e.jsx(re, { src: a || void 0 }),
                  e.jsx(ae, {
                    className:
                      "text-lg bg-gradient-to-br from-primary/80 to-primary text-primary-foreground",
                    children: t.charAt(0).toUpperCase(),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0 text-left",
                children: [
                  e.jsx("p", {
                    className: "font-semibold text-sm truncate",
                    children: l,
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground truncate",
                    children: t,
                  }),
                ],
              }),
              e.jsx(js, { className: "h-5 w-5 text-muted-foreground" }),
            ],
          }),
        }),
      }),
      e.jsx(ts, {
        children: e.jsx(ms, {
          className: "p-3",
          children: e.jsxs("div", {
            className: "grid grid-cols-2 gap-2",
            children: [
              e.jsxs(S, {
                variant: "outline",
                size: "sm",
                className: "h-auto py-3 flex-col gap-1.5",
                onClick: g,
                children: [
                  e.jsx(Ke, { className: "h-5 w-5" }),
                  e.jsx("span", { className: "text-xs", children: "Salvos" }),
                ],
              }),
              e.jsxs(S, {
                variant: "outline",
                size: "sm",
                className: "h-auto py-3 flex-col gap-1.5",
                onClick: p,
                children: [
                  e.jsx(at, { className: "h-5 w-5" }),
                  e.jsx("span", {
                    className: "text-xs",
                    children: "Bloqueados",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsxs(ts, {
        children: [
          e.jsx($s, {
            className: "pb-2 pt-3 px-4",
            children: e.jsxs(Os, {
              className: "text-sm font-semibold flex items-center gap-2",
              children: [
                e.jsx(it, { className: "h-4 w-4 text-primary" }),
                "Esta semana",
              ],
            }),
          }),
          e.jsx(ms, {
            className: "px-4 pb-3",
            children: e.jsxs("div", {
              className: "grid grid-cols-2 gap-3",
              children: [
                e.jsxs("div", {
                  className: "text-center p-2 bg-muted/50 rounded-lg",
                  children: [
                    e.jsx("p", {
                      className: "text-xl font-bold text-primary",
                      children: j.totalPosts,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "Posts",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center p-2 bg-muted/50 rounded-lg",
                  children: [
                    e.jsx("p", {
                      className: "text-xl font-bold text-red-500",
                      children: j.totalLikes,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "Curtidas",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center p-2 bg-muted/50 rounded-lg",
                  children: [
                    e.jsx("p", {
                      className: "text-xl font-bold text-blue-500",
                      children: j.totalComments,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "Comentários",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center p-2 bg-muted/50 rounded-lg",
                  children: [
                    e.jsx("p", {
                      className: "text-xl font-bold text-green-500",
                      children: j.activeUsers,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "Ativos",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      d.length > 0 &&
        e.jsxs(ts, {
          children: [
            e.jsx($s, {
              className: "pb-2 pt-3 px-4",
              children: e.jsxs(Os, {
                className: "text-sm font-semibold flex items-center gap-2",
                children: [
                  e.jsx(na, { className: "h-4 w-4 text-orange-500" }),
                  "Destaques da semana",
                ],
              }),
            }),
            e.jsx(ms, {
              className: "px-4 pb-3",
              children: e.jsx("div", {
                className: "space-y-3",
                children: d.map((M, N) =>
                  e.jsxs(
                    "button",
                    {
                      onClick: () => r(M.user_id),
                      className:
                        "flex items-center gap-3 w-full hover:bg-muted/50 rounded-lg p-2 -mx-2 transition-colors",
                      children: [
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsxs(te, {
                              className: "h-10 w-10",
                              children: [
                                e.jsx(re, { src: M.avatar_url || void 0 }),
                                e.jsx(ae, {
                                  className: "text-sm",
                                  children: M.name.charAt(0).toUpperCase(),
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className:
                                "absolute -top-1 -left-1 bg-background rounded-full p-0.5",
                              children: B(N),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex-1 min-w-0 text-left",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-1",
                              children: [
                                e.jsx("p", {
                                  className: "font-semibold text-sm truncate",
                                  children: M.username,
                                }),
                                M.isVerified && e.jsx(Ye, { size: "sm" }),
                              ],
                            }),
                            e.jsxs("p", {
                              className: "text-xs text-muted-foreground",
                              children: [
                                M.posts_count,
                                " posts • ",
                                M.likes_count,
                                " curtidas",
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    M.user_id
                  )
                ),
              }),
            }),
          ],
        }),
      e.jsx(dr, {
        onHashtagClick: c,
        selectedHashtag: x,
        className: "rounded-lg",
      }),
      e.jsx(mr, { currentUserId: s, onViewProfile: r, onViewAll: u }),
      e.jsxs("div", {
        className: "space-y-2 pt-2",
        children: [
          e.jsxs("div", {
            className:
              "flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground",
            children: [
              e.jsx("button", {
                onClick: o,
                className: "hover:underline",
                children: "Privacidade",
              }),
              e.jsx("span", { children: "•" }),
              e.jsx("button", {
                className: "hover:underline",
                children: "Termos",
              }),
              e.jsx("span", { children: "•" }),
              e.jsx("button", {
                className: "hover:underline",
                children: "Ajuda",
              }),
            ],
          }),
          e.jsx("p", {
            className: "text-xs text-muted-foreground",
            children: "© 2024 TechOS Community",
          }),
        ],
      }),
    ],
  });
}
function hr({
  currentUserId: s,
  onBack: a,
  onLike: t,
  onDelete: l,
  onViewProfile: i,
}) {
  const [r, c] = n.useState([]),
    [x, m] = n.useState(!0),
    [o, g] = n.useState(null);
  n.useEffect(() => {
    p();
  }, [s]);
  const p = async () => {
      try {
        const { data: d, error: b } = await h
          .from("community_bookmarks")
          .select("post_id, created_at")
          .eq("user_id", s)
          .order("created_at", { ascending: !1 });
        if (b) throw b;
        if (!d || d.length === 0) {
          c([]);
          return;
        }
        const j = d.map((z) => z.post_id),
          { data: w } = await h
            .from("community_posts")
            .select("*, community_post_likes(user_id)")
            .in("id", j);
        if (!w) {
          c([]);
          return;
        }
        const v = await Promise.all(
            w.map(async (z) => {
              const { data: k } = await h
                  .from("profiles")
                  .select("name, username, avatar_url")
                  .eq("user_id", z.user_id)
                  .single(),
                { count: C } = await h
                  .from("community_comments")
                  .select("*", { count: "exact", head: !0 })
                  .eq("post_id", z.id);
              return {
                ...z,
                profiles: k || { name: "Usuário", avatar_url: null },
                _count: { comments: C || 0 },
              };
            })
          ),
          L = j.map((z) => v.find((k) => k.id === z)).filter(Boolean);
        c(L);
      } catch {
      } finally {
        m(!1);
      }
    },
    u = (d) => {
      if (!o) return;
      const b = r.findIndex((j) => j.id === o.id);
      d === "prev" && b > 0
        ? g(r[b - 1])
        : d === "next" && b < r.length - 1 && g(r[b + 1]);
    };
  return x
    ? e.jsx("div", {
        className: "flex items-center justify-center min-h-[60vh]",
        children: e.jsx(pe, {
          className: "h-8 w-8 animate-spin text-muted-foreground",
        }),
      })
    : e.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [
          e.jsx("header", {
            className: "sticky top-0 z-50 bg-background border-b border-border",
            children: e.jsxs("div", {
              className: "flex items-center h-14 px-4",
              children: [
                e.jsx(S, {
                  variant: "ghost",
                  size: "icon",
                  onClick: a,
                  className: "mr-3",
                  children: e.jsx(Ee, { className: "h-6 w-6" }),
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(Ke, { className: "h-5 w-5" }),
                    e.jsx("h1", {
                      className: "text-lg font-semibold",
                      children: "Salvos",
                    }),
                  ],
                }),
              ],
            }),
          }),
          r.length === 0
            ? e.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center py-20 px-4",
                children: [
                  e.jsx("div", {
                    className:
                      "w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center mb-4",
                    children: e.jsx(Ke, { className: "h-10 w-10" }),
                  }),
                  e.jsx("h3", {
                    className: "text-xl font-semibold mb-1",
                    children: "Salvar",
                  }),
                  e.jsx("p", {
                    className:
                      "text-muted-foreground text-sm text-center max-w-xs",
                    children:
                      "Salve fotos e vídeos que você quer ver de novo. Só você pode ver o que salvou.",
                  }),
                ],
              })
            : e.jsx("div", {
                className: "grid grid-cols-3 gap-0.5 p-0.5",
                children: r.map((d) =>
                  e.jsxs(
                    "button",
                    {
                      className:
                        "aspect-square relative overflow-hidden bg-muted",
                      onClick: () => g(d),
                      children: [
                        d.media_url
                          ? d.media_type === "image"
                            ? e.jsx("img", {
                                src: d.media_url,
                                alt: "",
                                className: "w-full h-full object-cover",
                                loading: "lazy",
                              })
                            : e.jsx("video", {
                                src: d.media_url,
                                className: "w-full h-full object-cover",
                              })
                          : e.jsx("div", {
                              className:
                                "w-full h-full flex items-center justify-center p-2",
                              children: e.jsx("p", {
                                className:
                                  "text-xs text-center text-muted-foreground line-clamp-4",
                                children: d.text,
                              }),
                            }),
                        e.jsx("div", {
                          className:
                            "absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center",
                          children: e.jsx(Ke, {
                            className: "h-6 w-6 text-white fill-white",
                          }),
                        }),
                      ],
                    },
                    d.id
                  )
                ),
              }),
          e.jsx(vs, {
            open: !!o,
            onOpenChange: (d) => !d && g(null),
            post: o,
            posts: r,
            currentUserId: s,
            onLike: t,
            onDelete: l,
            onViewProfile: i,
            onNavigate: u,
          }),
        ],
      });
}
function xr({ children: s, sidebar: a, className: t }) {
  const l = is();
  return e.jsx("div", {
    className: R("min-h-screen bg-background", t),
    children: e.jsx("div", {
      className: R("mx-auto", l ? "max-w-full" : "max-w-6xl"),
      children: e.jsxs("div", {
        className: R("flex", !l && "gap-8 px-4"),
        children: [
          e.jsx("main", {
            className: R("flex-1", !l && "max-w-[470px] mx-auto py-4"),
            children: s,
          }),
          !l &&
            a &&
            e.jsx("aside", {
              className: "hidden lg:block w-[320px] flex-shrink-0 py-4",
              children: e.jsx("div", {
                className: "sticky top-4 max-h-[calc(100vh-2rem)]",
                children: e.jsx(we, {
                  className: "h-full max-h-[calc(100vh-2rem)] pr-4",
                  type: "always",
                  children: a,
                }),
              }),
            }),
        ],
      }),
    }),
  });
}
function Er() {
  const { user: s } = da(),
    { toast: a } = rs();
  ma();
  const [t, l] = n.useState([]),
    [i, r] = n.useState([]),
    [c, x] = n.useState(!0),
    [m, o] = n.useState(!1),
    [g, p] = n.useState(null),
    [u, d] = n.useState(""),
    [b, j] = n.useState(!1),
    [w, v] = n.useState(!1),
    [L, z] = n.useState(!1),
    [k, C] = n.useState(!1),
    [B, M] = n.useState(!1),
    [N, q] = n.useState([]),
    [$, T] = n.useState(null),
    [G, X] = n.useState(null),
    [I, oe] = n.useState(!1),
    [Z, Y] = n.useState(null),
    [ee, ce] = n.useState(0),
    [de, he] = n.useState(!1),
    [je, O] = n.useState(!1),
    [E, Q] = n.useState(0),
    [A, F] = n.useState(0),
    [xe, ie] = n.useState("home"),
    [be, ve] = n.useState(null),
    Ne = is(),
    {
      blockedUsers: Se,
      blockedByUsers: _e,
      blockUser: Ie,
      unblockUser: Ce,
    } = Ls(s?.id || ""),
    U = async () => {
      if (s)
        try {
          const { count: D } = await h
            .from("direct_messages")
            .select("*", { count: "exact", head: !0 })
            .eq("receiver_id", s.id)
            .eq("read", !1);
          Q(D || 0);
        } catch {}
    },
    ne = async () => {
      if (s)
        try {
          const { count: D } = await h
            .from("community_notifications")
            .select("*", { count: "exact", head: !0 })
            .eq("user_id", s.id)
            .eq("read", !1);
          F(D || 0);
        } catch {}
    };
  n.useEffect(() => {
    if (!s) return;
    U(), ne();
    const D = h
      .channel("community_messages_notification")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "direct_messages",
          filter: `receiver_id=eq.${s.id}`,
        },
        () => U()
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "direct_messages",
          filter: `receiver_id=eq.${s.id}`,
        },
        () => U()
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "community_notifications",
          filter: `user_id=eq.${s.id}`,
        },
        () => ne()
      )
      .subscribe();
    return () => {
      h.removeChannel(D);
    };
  }, [s, w]),
    n.useEffect(() => {
      s && (ye(), qe());
    }, [s]),
    n.useEffect(() => {
      if (!s) return;
      const D = h
        .channel("community_realtime")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "community_posts" },
          (K) => {
            Qe(K.new.id);
          }
        )
        .on(
          "postgres_changes",
          { event: "DELETE", schema: "public", table: "community_posts" },
          (K) => {
            const V = K.old.id;
            l((se) => se.filter((le) => le.id !== V)),
              r((se) => se.filter((le) => le.id !== V));
          }
        )
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "community_post_likes" },
          (K) => {
            const V = K.new;
            l((se) =>
              se.map((le) =>
                le.id === V.post_id
                  ? {
                      ...le,
                      community_post_likes: [
                        ...le.community_post_likes,
                        { user_id: V.user_id },
                      ],
                    }
                  : le
              )
            ),
              r((se) =>
                se.map((le) =>
                  le.id === V.post_id
                    ? {
                        ...le,
                        community_post_likes: [
                          ...le.community_post_likes,
                          { user_id: V.user_id },
                        ],
                      }
                    : le
                )
              );
          }
        )
        .on(
          "postgres_changes",
          { event: "DELETE", schema: "public", table: "community_post_likes" },
          (K) => {
            const V = K.old;
            l((se) =>
              se.map((le) =>
                le.id === V.post_id
                  ? {
                      ...le,
                      community_post_likes: le.community_post_likes.filter(
                        (ze) => ze.user_id !== V.user_id
                      ),
                    }
                  : le
              )
            ),
              r((se) =>
                se.map((le) =>
                  le.id === V.post_id
                    ? {
                        ...le,
                        community_post_likes: le.community_post_likes.filter(
                          (ze) => ze.user_id !== V.user_id
                        ),
                      }
                    : le
                )
              );
          }
        )
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "community_comments" },
          (K) => {
            const V = K.new || K.old;
            V?.post_id && Ue(V.post_id);
          }
        )
        .subscribe();
      return () => {
        h.removeChannel(D);
      };
    }, [s]);
  const ye = async () => {
      if (s)
        try {
          const { data: D } = await h
            .from("profiles")
            .select("name, avatar_url, bio, username")
            .eq("user_id", s.id)
            .single();
          p(D);
        } catch {}
    },
    Ue = async (D) => {
      try {
        const { count: K } = await h
          .from("community_comments")
          .select("*", { count: "exact", head: !0 })
          .eq("post_id", D);
        l((V) =>
          V.map((se) =>
            se.id === D ? { ...se, _count: { comments: K || 0 } } : se
          )
        ),
          r((V) =>
            V.map((se) =>
              se.id === D ? { ...se, _count: { comments: K || 0 } } : se
            )
          );
      } catch {}
    },
    Qe = async (D) => {
      try {
        const { data: K, error: V } = await h
          .from("community_posts")
          .select("*, community_post_likes (user_id)")
          .eq("id", D)
          .single();
        if (V) throw V;
        const { data: se } = await h
            .from("profiles")
            .select("name, avatar_url")
            .eq("user_id", K.user_id)
            .single(),
          { count: le } = await h
            .from("community_comments")
            .select("*", { count: "exact", head: !0 })
            .eq("post_id", K.id),
          ze = {
            ...K,
            profiles: se || { name: "Usuário", avatar_url: null },
            _count: { comments: le || 0 },
          };
        l((Ge) => (Ge.some((ys) => ys.id === ze.id) ? Ge : [ze, ...Ge])),
          r((Ge) => (Ge.some((ys) => ys.id === ze.id) ? Ge : [ze, ...Ge]));
      } catch {}
    },
    qe = async () => {
      try {
        const { data: D, error: K } = await h
          .from("community_posts")
          .select("*, community_post_likes (user_id)")
          .order("created_at", { ascending: !1 });
        if (K) throw K;
        const V = await Promise.all(
          (D || []).map(async (se) => {
            const { data: le } = await h
                .from("profiles")
                .select("name, avatar_url")
                .eq("user_id", se.user_id)
                .single(),
              { count: ze } = await h
                .from("community_comments")
                .select("*", { count: "exact", head: !0 })
                .eq("post_id", se.id);
            return {
              ...se,
              profiles: le || { name: "Usuário", avatar_url: null },
              _count: { comments: ze || 0 },
            };
          })
        );
        l(V), r(V);
      } catch (D) {
        a({
          title: "Erro ao carregar posts",
          description: D.message,
          variant: "destructive",
        });
      } finally {
        x(!1);
      }
    };
  n.useEffect(() => {
    let D = [...t];
    const K = [...Se, ..._e];
    if (
      ((D = D.filter((V) => !K.includes(V.user_id))),
      G &&
        (D = D.filter((V) => V.text.toLowerCase().includes(G.toLowerCase()))),
      u.trim())
    ) {
      const V = u.toLowerCase();
      V.startsWith("#")
        ? (D = D.filter((se) => se.text.toLowerCase().includes(V)))
        : (D = D.filter(
            (se) =>
              se.text.toLowerCase().includes(V) ||
              se.profiles?.name.toLowerCase().includes(V)
          ));
    }
    r(D);
  }, [u, t, G, Se, _e]);
  const y = async (D) => {
    try {
      const { data: K, error: V } = await h
        .from("profiles")
        .select("user_id, name, username, avatar_url")
        .or(`name.ilike.%${D}%,username.ilike.%${D}%`)
        .neq("user_id", s?.id || "")
        .limit(20);
      if (V) throw V;
      const se = [...Se, ..._e];
      q((K || []).filter((le) => !se.includes(le.user_id)));
    } catch {
      q([]);
    }
  };
  n.useEffect(() => {
    k && u.length > 0 ? y(u) : k && y("");
  }, [u, k]);
  const _ = async (D, K) => {
      if (s)
        try {
          if (K)
            await h
              .from("community_post_likes")
              .delete()
              .eq("post_id", D)
              .eq("user_id", s.id);
          else {
            await h
              .from("community_post_likes")
              .insert({ post_id: D, user_id: s.id });
            const V = t.find((se) => se.id === D);
            V && V.user_id !== s.id && Us(V.user_id, s.id, "like", D);
          }
        } catch (V) {
          a({
            title: "Erro ao curtir post",
            description: V.message,
            variant: "destructive",
          });
        }
    },
    f = async (D) => {
      if (s) {
        l((K) => K.filter((V) => V.id !== D)),
          r((K) => K.filter((V) => V.id !== D));
        try {
          await h.from("community_reposts").delete().eq("post_id", D),
            await h.from("community_post_likes").delete().eq("post_id", D),
            await h.from("community_comments").delete().eq("post_id", D);
          const { error: K } = await h
            .from("community_posts")
            .delete()
            .eq("id", D)
            .eq("user_id", s.id);
          if (K) throw K;
          a({ title: "Post excluído!" });
        } catch (K) {
          qe(),
            a({
              title: "Erro ao excluir post",
              description: K.message,
              variant: "destructive",
            });
        }
      }
    },
    P = (D) => {
      T(null),
        j(!1),
        v(!0),
        setTimeout(() => {
          const K = new CustomEvent("startDM", { detail: { userId: D } });
          window.dispatchEvent(K);
        }, 100);
    },
    W = (D) => {
      X(D), d(D), C(!1);
    },
    J = () => {
      X(null), d("");
    },
    me = (D) => {
      D === "home"
        ? (j(!1), C(!1), v(!1), ie("home"))
        : D === "search"
        ? (C(!0), j(!1), v(!1), ie("search"))
        : D === "create"
        ? o(!0)
        : D === "activity"
        ? (M(!0), ie("activity"))
        : D === "profile"
        ? (j(!0), C(!1), v(!1), ie("profile"))
        : D === "messages" && (v(!0), j(!1), C(!1), ie("messages"));
    };
  if (c)
    return e.jsx("div", {
      className: "flex items-center justify-center min-h-screen bg-background",
      children: e.jsxs("div", {
        className: "text-center",
        children: [
          e.jsx(pe, {
            className:
              "h-10 w-10 animate-spin text-muted-foreground mx-auto mb-3",
          }),
          e.jsx("p", {
            className: "text-sm text-muted-foreground",
            children: "Carregando...",
          }),
        ],
      }),
    });
  const ge = g?.name || s?.email?.split("@")[0] || "Usuário",
    Le = g?.avatar_url,
    cs = g?.username || ge.toLowerCase().replace(/\s+/g, "");
  if (b)
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Ia, {
          userId: s?.id || "",
          onBack: () => {
            j(!1), ie("home");
          },
          onLike: _,
          onRepost: () => {},
          onDelete: f,
        }),
        e.jsx(_s, {
          activeTab: "profile",
          onTabChange: me,
          userAvatar: Le,
          userName: ge,
          unreadNotifications: A,
          unreadMessages: E,
        }),
      ],
    });
  if (je)
    return e.jsx(hr, {
      currentUserId: s?.id || "",
      onBack: () => O(!1),
      onLike: _,
      onDelete: f,
      onViewProfile: T,
    });
  if (de)
    return e.jsx(tr, {
      currentUserId: s?.id || "",
      blockedUsers: Se,
      onUnblock: Ce,
      onBack: () => he(!1),
    });
  if ($)
    return e.jsx($a, {
      userId: $,
      currentUserId: s?.id || "",
      onBack: () => T(null),
      onLike: _,
      onDelete: f,
      onStartDM: P,
    });
  if (w)
    return e.jsx("div", {
      className: "min-h-screen bg-background",
      children: e.jsx(er, {
        currentUserId: s?.id || "",
        onBack: () => {
          v(!1), ie("home");
        },
        onViewProfile: T,
      }),
    });
  if (k)
    return e.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        e.jsx("header", {
          className:
            "sticky top-0 z-50 bg-background border-b border-border safe-area-inset-top",
          children: e.jsxs("div", {
            className: "flex items-center gap-3 h-14 px-4",
            children: [
              e.jsx(S, {
                variant: "ghost",
                size: "icon",
                onClick: () => {
                  C(!1), ie("home");
                },
                children: e.jsx(Ee, { className: "h-5 w-5" }),
              }),
              e.jsxs("div", {
                className: "flex-1 relative",
                children: [
                  e.jsx(ls, {
                    className:
                      "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
                  }),
                  e.jsx(De, {
                    placeholder: "Pesquisar",
                    value: u,
                    onChange: (D) => d(D.target.value),
                    className: "pl-9 h-9 bg-muted border-0 rounded-lg",
                    autoFocus: !0,
                  }),
                  u &&
                    e.jsx(S, {
                      variant: "ghost",
                      size: "icon",
                      className:
                        "absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7",
                      onClick: () => d(""),
                      children: e.jsx(Me, { className: "h-4 w-4" }),
                    }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "pb-14",
          children:
            N.length > 0
              ? e.jsx("div", {
                  className: "divide-y divide-border",
                  children: N.map((D) =>
                    e.jsxs(
                      "button",
                      {
                        className:
                          "flex items-center gap-3 w-full px-4 py-3 hover:bg-muted/50 transition-colors",
                        onClick: () => {
                          T(D.user_id), C(!1);
                        },
                        children: [
                          e.jsxs(te, {
                            className: "h-12 w-12",
                            children: [
                              e.jsx(re, { src: D.avatar_url || void 0 }),
                              e.jsx(ae, {
                                className: "bg-muted text-sm font-semibold",
                                children: D.name.charAt(0).toUpperCase(),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "text-left",
                            children: [
                              e.jsx("p", {
                                className: "font-semibold text-sm",
                                children: D.username,
                              }),
                              e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: D.name,
                              }),
                            ],
                          }),
                        ],
                      },
                      D.user_id
                    )
                  ),
                })
              : u
              ? e.jsx("div", {
                  className: "text-center py-12 text-muted-foreground",
                  children: e.jsxs("p", {
                    children: ['Nenhum resultado para "', u, '"'],
                  }),
                })
              : e.jsx("div", {
                  className: "text-center py-12 text-muted-foreground",
                  children: e.jsx("p", {
                    className: "text-sm",
                    children: "Pesquise por nome ou @usuário",
                  }),
                }),
        }),
        e.jsx(_s, {
          activeTab: "search",
          onTabChange: me,
          userAvatar: Le,
          userName: ge,
          unreadNotifications: A,
          unreadMessages: E,
        }),
      ],
    });
  const Ns = (D) => {
      if (!be) return;
      const K = i.findIndex((V) => V.id === be.id);
      D === "prev" && K > 0
        ? ve(i[K - 1])
        : D === "next" && K < i.length - 1 && ve(i[K + 1]);
    },
    Ze = () =>
      e.jsx(ur, {
        currentUserId: s?.id || "",
        userAvatar: Le,
        userName: ge,
        username: cs,
        onViewProfile: () => j(!0),
        onViewUser: T,
        onHashtagClick: W,
        selectedHashtag: G,
        onOpenSettings: () => {},
        onOpenPrivacy: () => z(!0),
        onViewSavedPosts: () => O(!0),
        onViewBlockedUsers: () => he(!0),
        onViewAllSuggestions: () => C(!0),
      });
  return e.jsxs(xr, {
    sidebar: e.jsx(Ze, {}),
    children: [
      e.jsx(lr, {
        onOpenMessages: () => v(!0),
        onCreatePost: () => o(!0),
        unreadMessages: E,
        className: R(!Ne && "rounded-t-lg border-x border-t border-border"),
      }),
      G &&
        e.jsxs("div", {
          className: R(
            "px-4 py-2 bg-muted/50 flex items-center justify-between border-b border-border",
            !Ne && "border-x"
          ),
          children: [
            e.jsxs("span", {
              className: "text-sm",
              children: [
                "Filtrando por: ",
                e.jsx("span", {
                  className: "font-semibold text-primary",
                  children: G,
                }),
              ],
            }),
            e.jsxs(S, {
              variant: "ghost",
              size: "sm",
              onClick: J,
              children: [e.jsx(Me, { className: "h-4 w-4 mr-1" }), "Limpar"],
            }),
          ],
        }),
      e.jsx("div", {
        className: R(!Ne && "border-x border-border"),
        children: e.jsx(
          ar,
          {
            currentUserId: s?.id || "",
            currentUserAvatar: Le,
            currentUserName: ge,
            onCreateStory: () => oe(!0),
            onViewStories: (D, K) => Y({ userId: D, stories: K }),
            blockedUsers: Se,
            blockedByUsers: _e,
          },
          ee
        ),
      }),
      e.jsx("div", {
        className: R(
          "pb-16",
          !Ne && "border-x border-b border-border rounded-b-lg"
        ),
        children:
          i.length === 0
            ? e.jsxs("div", {
                className: "text-center py-16 px-4",
                children: [
                  e.jsx("p", {
                    className: "text-lg font-semibold mb-1",
                    children: "Bem-vindo à comunidade!",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground text-sm mb-6",
                    children:
                      "Siga outros técnicos para ver suas publicações aqui",
                  }),
                  e.jsx(S, { onClick: () => C(!0), children: "Explorar" }),
                ],
              })
            : e.jsx("div", {
                className: "divide-y divide-border",
                children: i.map((D) =>
                  e.jsx(
                    za,
                    {
                      post: D,
                      currentUserId: s?.id || "",
                      onLike: _,
                      onDelete: f,
                      onHashtagClick: W,
                      onViewProfile: T,
                      onViewStories: (K) => {
                        h.from("community_stories")
                          .select("*")
                          .eq("user_id", K)
                          .gt("expires_at", new Date().toISOString())
                          .order("created_at", { ascending: !0 })
                          .then(({ data: V }) => {
                            V && V.length > 0 && Y({ userId: K, stories: V });
                          });
                      },
                    },
                    D.id
                  )
                ),
              }),
      }),
      e.jsx(_s, {
        activeTab: xe,
        onTabChange: me,
        userAvatar: Le,
        userName: ge,
        unreadNotifications: A,
        unreadMessages: E,
      }),
      e.jsx(or, {
        open: m,
        onOpenChange: o,
        userId: s?.id || "",
        onPostCreated: () => {
          qe();
        },
      }),
      e.jsx(rr, {
        open: I,
        onOpenChange: oe,
        currentUserId: s?.id || "",
        onSuccess: () => ce((D) => D + 1),
      }),
      e.jsx(cr, {
        open: B,
        onOpenChange: (D) => {
          M(D), D || (ie("home"), ne());
        },
        userId: s?.id || "",
        onViewProfile: (D) => {
          T(D), M(!1);
        },
      }),
      e.jsx(vs, {
        open: !!be,
        onOpenChange: (D) => !D && ve(null),
        post: be,
        posts: i,
        currentUserId: s?.id || "",
        onLike: _,
        onDelete: f,
        onViewProfile: T,
        onNavigate: Ns,
      }),
      Z &&
        e.jsx(jt, {
          stories: Z.stories,
          userId: Z.userId,
          currentUserId: s?.id || "",
          onClose: () => Y(null),
        }),
      e.jsx(sr, { open: L, onOpenChange: z }),
    ],
  });
}
export { Er as default };
