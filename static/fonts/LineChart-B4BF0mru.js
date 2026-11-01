import {
  af as j,
  ag as M,
  ah as le,
  ai as K,
  aj as se,
  ak as de,
  am as $,
  an as U,
  r as i,
  aq as Y,
  ar as Z,
  as as ue,
  at as ce,
  au as pe,
  av as ve,
  ax as J,
  aA as fe,
  aC as he,
  ay as me,
  aB as ye,
  aD as ge,
  aE as xe,
  aF as Pe,
  aG as Ae,
  aH as Ie,
  fy as be,
  aI as Ee,
  aJ as Le,
  aK as X,
  aL as z,
  aQ as F,
  aN as De,
  aO as Se,
  aP as D,
  aS as Ce,
  aT as Oe,
  aV as we,
  fz as ke,
  aU as Ne,
  aY as _e,
  aZ as je,
} from "./index-V8ZHCWL2.js";
import {
  g as Te,
  A as Re,
  D as We,
} from "./getRadiusAndStrokeWidthFromDot-BVjcHO9P.js";
var q = (e, a, r, t) => $(e, "xAxis", a, t),
  H = (e, a, r, t) => U(e, "xAxis", a, t),
  Q = (e, a, r, t) => $(e, "yAxis", r, t),
  ee = (e, a, r, t) => U(e, "yAxis", r, t),
  Be = j([M, q, Q, H, ee], (e, a, r, t, n) =>
    le(e, "xAxis") ? K(a, t, !1) : K(r, n, !1)
  ),
  Ke = (e, a, r, t, n) => n;
function ze(e) {
  return e.type === "line";
}
var Fe = j([se, Ke], (e, a) => e.filter(ze).find((r) => r.id === a)),
  Ve = j([M, q, Q, H, ee, Fe, Be, de], (e, a, r, t, n, o, l, s) => {
    var { chartData: d, dataStartIndex: c, dataEndIndex: v } = s;
    if (
      !(
        o == null ||
        a == null ||
        r == null ||
        t == null ||
        n == null ||
        t.length === 0 ||
        n.length === 0 ||
        l == null
      )
    ) {
      var { dataKey: u, data: p } = o,
        f;
      if (
        (p != null && p.length > 0 ? (f = p) : (f = d?.slice(c, v + 1)),
        f != null)
      )
        return sa({
          layout: e,
          xAxis: a,
          yAxis: r,
          xAxisTicks: t,
          yAxisTicks: n,
          dataKey: u,
          bandSize: l,
          displayedData: f,
        });
    }
  }),
  Ge = ["id"],
  Me = ["type", "layout", "connectNulls", "needClip", "shape"],
  $e = [
    "activeDot",
    "animateNewValues",
    "animationBegin",
    "animationDuration",
    "animationEasing",
    "connectNulls",
    "dot",
    "hide",
    "isAnimationActive",
    "label",
    "legendType",
    "xAxisId",
    "yAxisId",
    "id",
  ];
function S() {
  return (
    (S = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var t in r) ({}.hasOwnProperty.call(r, t) && (e[t] = r[t]));
          }
          return e;
        }),
    S.apply(null, arguments)
  );
}
function V(e, a) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    a &&
      (t = t.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, t);
  }
  return r;
}
function x(e) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? V(Object(r), !0).forEach(function (t) {
          Ue(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : V(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function Ue(e, a, r) {
  return (
    (a = Ye(a)) in e
      ? Object.defineProperty(e, a, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[a] = r),
    e
  );
}
function Ye(e) {
  var a = Ze(e, "string");
  return typeof a == "symbol" ? a : a + "";
}
function Ze(e, a) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var t = r.call(e, a || "default");
    if (typeof t != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(e);
}
function T(e, a) {
  if (e == null) return {};
  var r,
    t,
    n = Je(e, a);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (t = 0; t < o.length; t++)
      (r = o[t]),
        a.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Je(e, a) {
  if (e == null) return {};
  var r = {};
  for (var t in e)
    if ({}.hasOwnProperty.call(e, t)) {
      if (a.indexOf(t) !== -1) continue;
      r[t] = e[t];
    }
  return r;
}
var Xe = (e) => {
  var { dataKey: a, name: r, stroke: t, legendType: n, hide: o } = e;
  return [
    { inactive: o, dataKey: a, type: n, color: t, value: J(r, a), payload: e },
  ];
};
function qe(e) {
  var {
    dataKey: a,
    data: r,
    stroke: t,
    strokeWidth: n,
    fill: o,
    name: l,
    hide: s,
    unit: d,
  } = e;
  return {
    dataDefinedOnItem: r,
    positions: void 0,
    settings: {
      stroke: t,
      strokeWidth: n,
      fill: o,
      dataKey: a,
      nameKey: void 0,
      name: J(l, a),
      hide: s,
      type: e.tooltipType,
      color: e.stroke,
      unit: d,
    },
  };
}
var ae = (e, a) => "".concat(a, "px ").concat(e - a, "px");
function He(e, a) {
  for (var r = e.length % 2 !== 0 ? [...e, 0] : e, t = [], n = 0; n < a; ++n)
    t = [...t, ...r];
  return t;
}
var Qe = (e, a, r) => {
  var t = r.reduce((u, p) => u + p);
  if (!t) return ae(a, e);
  for (
    var n = Math.floor(e / t), o = e % t, l = a - e, s = [], d = 0, c = 0;
    d < r.length;
    c += r[d], ++d
  )
    if (c + r[d] > o) {
      s = [...r.slice(0, d), o - c];
      break;
    }
  var v = s.length % 2 === 0 ? [0, l] : [l];
  return [...He(r, n), ...s, ...v].map((u) => "".concat(u, "px")).join(", ");
};
function ea(e) {
  var { clipPathId: a, points: r, props: t } = e,
    { dot: n, dataKey: o, needClip: l } = t,
    s = T(t, Ge),
    d = Ne(s);
  return i.createElement(We, {
    points: r,
    dot: n,
    className: "recharts-line-dots",
    dotClassName: "recharts-line-dot",
    dataKey: o,
    baseProps: d,
    needClip: l,
    clipPathId: a,
  });
}
function aa(e) {
  var { showLabels: a, children: r, points: t } = e,
    n = i.useMemo(
      () =>
        t?.map((o) => {
          var l,
            s,
            d = {
              x: (l = o.x) !== null && l !== void 0 ? l : 0,
              y: (s = o.y) !== null && s !== void 0 ? s : 0,
              width: 0,
              lowerWidth: 0,
              upperWidth: 0,
              height: 0,
            };
          return x(
            x({}, d),
            {},
            {
              value: o.value,
              payload: o.payload,
              viewBox: d,
              parentViewBox: void 0,
              fill: void 0,
            }
          );
        }),
      [t]
    );
  return i.createElement(Oe, { value: a ? n : void 0 }, r);
}
function G(e) {
  var {
      clipPathId: a,
      pathRef: r,
      points: t,
      strokeDasharray: n,
      props: o,
    } = e,
    { type: l, layout: s, connectNulls: d, needClip: c, shape: v } = o,
    u = T(o, Me),
    p = x(
      x({}, we(u)),
      {},
      {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: c ? "url(#clipPath-".concat(a, ")") : void 0,
        points: t,
        type: l,
        layout: s,
        connectNulls: d,
        strokeDasharray: n ?? o.strokeDasharray,
      }
    );
  return i.createElement(
    i.Fragment,
    null,
    t?.length > 1 &&
      i.createElement(
        ke,
        S({ shapeType: "curve", option: v }, p, { pathRef: r })
      ),
    i.createElement(ea, { points: t, clipPathId: a, props: o })
  );
}
function ta(e) {
  try {
    return (e && e.getTotalLength && e.getTotalLength()) || 0;
  } catch {
    return 0;
  }
}
function ra(e) {
  var {
      clipPathId: a,
      props: r,
      pathRef: t,
      previousPointsRef: n,
      longestAnimatedLengthRef: o,
    } = e,
    {
      points: l,
      strokeDasharray: s,
      isAnimationActive: d,
      animationBegin: c,
      animationDuration: v,
      animationEasing: u,
      animateNewValues: p,
      width: f,
      height: y,
      onAnimationEnd: h,
      onAnimationStart: I,
    } = r,
    A = n.current,
    b = De(r, "recharts-line-"),
    [g, C] = i.useState(!1),
    O = !g,
    k = i.useCallback(() => {
      typeof h == "function" && h(), C(!1);
    }, [h]),
    N = i.useCallback(() => {
      typeof I == "function" && I(), C(!0);
    }, [I]),
    E = ta(t.current),
    w = o.current;
  return i.createElement(
    aa,
    { points: l, showLabels: O },
    r.children,
    i.createElement(
      Se,
      {
        animationId: b,
        begin: c,
        duration: v,
        isActive: d,
        easing: u,
        onAnimationEnd: k,
        onAnimationStart: N,
        key: b,
      },
      (P) => {
        var re = D(w, E + w, P),
          _ = Math.min(re, E),
          L;
        if (d)
          if (s) {
            var ne = ""
              .concat(s)
              .split(/[,\s]+/gim)
              .map((m) => parseFloat(m));
            L = Qe(_, E, ne);
          } else L = ae(E, _);
        else L = s == null ? void 0 : String(s);
        if (A) {
          var ie = A.length / l.length,
            R =
              P === 1
                ? l
                : l.map((m, oe) => {
                    var W = Math.floor(oe * ie);
                    if (A[W]) {
                      var B = A[W];
                      return x(
                        x({}, m),
                        {},
                        { x: D(B.x, m.x, P), y: D(B.y, m.y, P) }
                      );
                    }
                    return p
                      ? x(
                          x({}, m),
                          {},
                          { x: D(f * 2, m.x, P), y: D(y / 2, m.y, P) }
                        )
                      : x(x({}, m), {}, { x: m.x, y: m.y });
                  });
          return (
            (n.current = R),
            i.createElement(G, {
              props: r,
              points: R,
              clipPathId: a,
              pathRef: t,
              strokeDasharray: L,
            })
          );
        }
        return (
          P > 0 && E > 0 && ((n.current = l), (o.current = _)),
          i.createElement(G, {
            props: r,
            points: l,
            clipPathId: a,
            pathRef: t,
            strokeDasharray: L,
          })
        );
      }
    ),
    i.createElement(Ce, { label: r.label })
  );
}
function na(e) {
  var { clipPathId: a, props: r } = e,
    t = i.useRef(null),
    n = i.useRef(0),
    o = i.useRef(null);
  return i.createElement(ra, {
    props: r,
    clipPathId: a,
    previousPointsRef: t,
    longestAnimatedLengthRef: n,
    pathRef: o,
  });
}
var ia = (e, a) => {
  var r, t;
  return {
    x: (r = e.x) !== null && r !== void 0 ? r : void 0,
    y: (t = e.y) !== null && t !== void 0 ? t : void 0,
    value: e.value,
    errorVal: X(e.payload, a),
  };
};
class oa extends i.Component {
  render() {
    var {
      hide: a,
      dot: r,
      points: t,
      className: n,
      xAxisId: o,
      yAxisId: l,
      top: s,
      left: d,
      width: c,
      height: v,
      id: u,
      needClip: p,
      zIndex: f,
    } = this.props;
    if (a) return null;
    var y = ge("recharts-line", n),
      h = u,
      { r: I, strokeWidth: A } = Te(r),
      b = xe(r),
      g = I * 2 + A;
    return i.createElement(
      Pe,
      { zIndex: f },
      i.createElement(
        Ae,
        { className: y },
        p &&
          i.createElement(
            "defs",
            null,
            i.createElement(Ie, { clipPathId: h, xAxisId: o, yAxisId: l }),
            !b &&
              i.createElement(
                "clipPath",
                { id: "clipPath-dots-".concat(h) },
                i.createElement("rect", {
                  x: d - g / 2,
                  y: s - g / 2,
                  width: c + g,
                  height: v + g,
                })
              )
          ),
        i.createElement(
          be,
          {
            xAxisId: o,
            yAxisId: l,
            data: t,
            dataPointFormatter: ia,
            errorBarOffset: 0,
          },
          i.createElement(na, { props: this.props, clipPathId: h })
        )
      ),
      i.createElement(Re, {
        activeDot: this.props.activeDot,
        points: t,
        mainColor: this.props.stroke,
        itemDataKey: this.props.dataKey,
      })
    );
  }
}
var te = {
  activeDot: !0,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !0,
  fill: "#fff",
  hide: !1,
  isAnimationActive: !Ee.isSsr,
  label: !1,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: Le.line,
};
function la(e) {
  var a = Y(e, te),
    {
      activeDot: r,
      animateNewValues: t,
      animationBegin: n,
      animationDuration: o,
      animationEasing: l,
      connectNulls: s,
      dot: d,
      hide: c,
      isAnimationActive: v,
      label: u,
      legendType: p,
      xAxisId: f,
      yAxisId: y,
      id: h,
    } = a,
    I = T(a, $e),
    { needClip: A } = fe(f, y),
    b = he(),
    g = me(),
    C = Z(),
    O = ye((P) => Ve(P, f, y, C, h));
  if ((g !== "horizontal" && g !== "vertical") || O == null || b == null)
    return null;
  var { height: k, width: N, x: E, y: w } = b;
  return i.createElement(
    oa,
    S({}, I, {
      id: h,
      connectNulls: s,
      dot: d,
      activeDot: r,
      animateNewValues: t,
      animationBegin: n,
      animationDuration: o,
      animationEasing: l,
      isAnimationActive: v,
      hide: c,
      label: u,
      legendType: p,
      xAxisId: f,
      yAxisId: y,
      points: O,
      layout: g,
      height: k,
      width: N,
      left: E,
      top: w,
      needClip: A,
    })
  );
}
function sa(e) {
  var {
    layout: a,
    xAxis: r,
    yAxis: t,
    xAxisTicks: n,
    yAxisTicks: o,
    dataKey: l,
    bandSize: s,
    displayedData: d,
  } = e;
  return d
    .map((c, v) => {
      var u = X(c, l);
      if (a === "horizontal") {
        var p = z({ axis: r, ticks: n, bandSize: s, entry: c, index: v }),
          f = F(u) ? null : t.scale(u);
        return { x: p, y: f, value: u, payload: c };
      }
      var y = F(u) ? null : r.scale(u),
        h = z({ axis: t, ticks: o, bandSize: s, entry: c, index: v });
      return y == null || h == null
        ? null
        : { x: y, y: h, value: u, payload: c };
    })
    .filter(Boolean);
}
function da(e) {
  var a = Y(e, te),
    r = Z();
  return i.createElement(ue, { id: a.id, type: "line" }, (t) =>
    i.createElement(
      i.Fragment,
      null,
      i.createElement(ce, { legendPayload: Xe(a) }),
      i.createElement(pe, { fn: qe, args: a }),
      i.createElement(ve, {
        type: "line",
        id: t,
        data: a.data,
        xAxisId: a.xAxisId,
        yAxisId: a.yAxisId,
        zAxisId: 0,
        dataKey: a.dataKey,
        hide: a.hide,
        isPanorama: r,
      }),
      i.createElement(la, S({}, a, { id: t }))
    )
  );
}
var ua = i.memo(da);
ua.displayName = "Line";
var ca = ["axis"],
  fa = i.forwardRef((e, a) =>
    i.createElement(_e, {
      chartName: "LineChart",
      defaultTooltipEventType: "axis",
      validateTooltipEventTypes: ca,
      tooltipPayloadSearcher: je,
      categoricalChartProps: e,
      ref: a,
    })
  );
export { fa as L, ua as a };
