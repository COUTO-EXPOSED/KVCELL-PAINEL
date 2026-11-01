import {
  aD as x,
  aM as m,
  r as l,
  eU as w,
  aU as K,
  aE as $,
  eV as T,
  aF as D,
  aG as E,
  aJ as N,
  aB as W,
  eW as z,
  eX as F,
  aQ as U,
  eY as _,
} from "./index-V8ZHCWL2.js";
function P() {
  return (
    (P = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
          }
          return t;
        }),
    P.apply(null, arguments)
  );
}
var I = (t) => {
    var { cx: e, cy: r, r: n, className: a } = t,
      o = x("recharts-dot", a);
    return m(e) && m(r) && m(n)
      ? l.createElement(
          "circle",
          P({}, K(t), w(t), { className: o, cx: e, cy: r, r: n })
        )
      : null;
  },
  L = ["points"];
function j(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function y(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? j(Object(r), !0).forEach(function (n) {
          V(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : j(Object(r)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return t;
}
function V(t, e, r) {
  return (
    (e = Z(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function Z(t) {
  var e = B(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function B(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function f() {
  return (
    (f = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r) ({}.hasOwnProperty.call(r, n) && (t[n] = r[n]));
          }
          return t;
        }),
    f.apply(null, arguments)
  );
}
function G(t, e) {
  if (t == null) return {};
  var r,
    n,
    a = H(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++)
      (r = o[n]),
        e.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(t, r) &&
          (a[r] = t[r]);
  }
  return a;
}
function H(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n)) {
      if (e.indexOf(n) !== -1) continue;
      r[n] = t[n];
    }
  return r;
}
function J(t) {
  var { option: e, dotProps: r, className: n } = t;
  if (l.isValidElement(e)) return l.cloneElement(e, r);
  if (typeof e == "function") return e(r);
  var a = x(n, typeof e != "boolean" ? e.className : ""),
    o = r ?? {},
    s = G(o, L);
  return l.createElement(I, f({}, s, { className: a }));
}
function M(t, e) {
  return t == null ? !1 : e ? !0 : t.length === 1;
}
function ee(t) {
  var {
    points: e,
    dot: r,
    className: n,
    dotClassName: a,
    dataKey: o,
    baseProps: s,
    needClip: i,
    clipPathId: u,
    zIndex: p = N.scatter,
  } = t;
  if (!M(e, r)) return null;
  var S = $(r),
    k = T(r),
    A = e.map((c, O) => {
      var v,
        d,
        C = y(
          y(y({ r: 3 }, s), k),
          {},
          {
            index: O,
            cx: (v = c.x) !== null && v !== void 0 ? v : void 0,
            cy: (d = c.y) !== null && d !== void 0 ? d : void 0,
            dataKey: o,
            value: c.value,
            payload: c.payload,
            points: e,
          }
        );
      return l.createElement(J, {
        key: "dot-".concat(O),
        option: r,
        dotProps: C,
        className: a,
      });
    }),
    g = {};
  return (
    i &&
      u != null &&
      (g.clipPath = "url(#clipPath-".concat(S ? "" : "dots-").concat(u, ")")),
    l.createElement(
      D,
      { zIndex: p },
      l.createElement(E, f({ className: n }, g), A)
    )
  );
}
function h(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function b(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? h(Object(r), !0).forEach(function (n) {
          Q(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : h(Object(r)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return t;
}
function Q(t, e, r) {
  return (
    (e = X(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function X(t) {
  var e = Y(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Y(t, e) {
  if (typeof t != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
var q = (t) => {
  var { point: e, childIndex: r, mainColor: n, activeDot: a, dataKey: o } = t;
  if (a === !1 || e.x == null || e.y == null) return null;
  var s = {
      index: r,
      dataKey: o,
      cx: e.x,
      cy: e.y,
      r: 4,
      fill: n ?? "none",
      strokeWidth: 2,
      stroke: "#fff",
      payload: e.payload,
      value: e.value,
    },
    i = b(b(b({}, s), _(a)), w(a)),
    u;
  return (
    l.isValidElement(a)
      ? (u = l.cloneElement(a, i))
      : typeof a == "function"
      ? (u = a(i))
      : (u = l.createElement(I, i)),
    l.createElement(E, { className: "recharts-active-dot" }, u)
  );
};
function te(t) {
  var {
      points: e,
      mainColor: r,
      activeDot: n,
      itemDataKey: a,
      zIndex: o = N.activeDot,
    } = t,
    s = W(z),
    i = F();
  if (e == null || i == null) return null;
  var u = e.find((p) => i.includes(p.payload));
  return U(u)
    ? null
    : l.createElement(
        D,
        { zIndex: o },
        l.createElement(q, {
          point: u,
          childIndex: Number(s),
          mainColor: r,
          dataKey: a,
          activeDot: n,
        })
      );
}
function re(t) {
  var e = _(t),
    r = 3,
    n = 2;
  if (e != null) {
    var { r: a, strokeWidth: o } = e,
      s = Number(a),
      i = Number(o);
    return (
      (Number.isNaN(s) || s < 0) && (s = r),
      (Number.isNaN(i) || i < 0) && (i = n),
      { r: s, strokeWidth: i }
    );
  }
  return { r, strokeWidth: n };
}
export { te as A, ee as D, re as g };
