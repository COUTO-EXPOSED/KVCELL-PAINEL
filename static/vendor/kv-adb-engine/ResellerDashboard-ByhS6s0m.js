import {
  af as ge,
  ag as fe,
  ah as Te,
  ai as be,
  aj as sa,
  ak as ra,
  al as na,
  am as Fe,
  an as Le,
  ao as ye,
  ap as la,
  r as i,
  aq as Ue,
  ar as $e,
  as as ia,
  at as oa,
  au as ca,
  av as da,
  aw as ma,
  ax as Me,
  ay as ua,
  az as pa,
  aA as xa,
  aB as ha,
  aC as ga,
  aD as fa,
  aE as va,
  aF as ja,
  aG as re,
  aH as ba,
  aI as ya,
  aJ as Na,
  aK as Ne,
  aL as we,
  aM as J,
  aN as wa,
  aO as Ca,
  aP as X,
  aQ as _a,
  aR as Sa,
  aS as Pa,
  aT as Aa,
  aU as Oe,
  aV as Ea,
  aW as ce,
  aX as ne,
  aY as Da,
  aZ as ka,
  w as _,
  i as ee,
  j as e,
  D as Ra,
  c as Ia,
  a_ as Ta,
  d as Fa,
  G as D,
  a$ as La,
  l as de,
  n as M,
  B as U,
  m as ve,
  I as z,
  o as Ua,
  b0 as $a,
  b1 as Ma,
  s as me,
  ac as ue,
  b2 as ze,
  b3 as W,
  b4 as je,
  a1 as R,
  b5 as Be,
  b6 as qe,
  b7 as We,
  b8 as Ve,
  b9 as H,
  Y as F,
  $ as L,
  ad as ae,
  U as te,
  ae as He,
  ba as Oa,
  a0 as K,
  bb as Ce,
  bc as _e,
  bd as Se,
  be as Pe,
  bf as Ae,
  bg as za,
  bh as Ba,
  bi as qa,
  bj as se,
  bk as pe,
  bl as Wa,
  a3 as Va,
  K as Ha,
  k as Ka,
  bm as Ga,
  bn as Xa,
  bo as Ya,
  bp as Qa,
  bq as Za,
  br as Ja,
  bs as et,
  bt as at,
  bu as tt,
  bv as le,
  bw as st,
  Z as xe,
  bx as Ke,
  by as Ge,
  h as he,
  bz as rt,
  bA as nt,
  z as lt,
  u as it,
  bB as ot,
  bC as ct,
  bD as Y,
  e as dt,
  bE as Q,
} from "./index-V8ZHCWL2.js";
import {
  g as mt,
  A as Ee,
  D as ut,
} from "./getRadiusAndStrokeWidthFromDot-BVjcHO9P.js";
import { C as pt } from "./CurrencyExportDialog-HmiEHQbG.js";
import { A as xt } from "./arrow-left-CaH5Nh3G.js";
var Xe = (t, a, s, n) => Fe(t, "xAxis", a, n),
  Ye = (t, a, s, n) => Le(t, "xAxis", a, n),
  Qe = (t, a, s, n) => Fe(t, "yAxis", s, n),
  Ze = (t, a, s, n) => Le(t, "yAxis", s, n),
  ht = ge([fe, Xe, Qe, Ye, Ze], (t, a, s, n, r) =>
    Te(t, "xAxis") ? be(a, n, !1) : be(s, r, !1)
  ),
  gt = (t, a, s, n, r) => r,
  Je = ge([sa, gt], (t, a) =>
    t.filter((s) => s.type === "area").find((s) => s.id === a)
  ),
  ft = (t, a, s, n, r) => {
    var m,
      x = Je(t, a, s, n, r);
    if (x != null) {
      var d = fe(t),
        h = Te(d, "xAxis"),
        b;
      if (
        (h ? (b = ye(t, "yAxis", s, n)) : (b = ye(t, "xAxis", a, n)), b != null)
      ) {
        var { stackId: P } = x,
          j = la(x);
        if (!(P == null || j == null)) {
          var u = (m = b[P]) === null || m === void 0 ? void 0 : m.stackedData;
          return u?.find((g) => g.key === j);
        }
      }
    }
  },
  vt = ge(
    [fe, Xe, Qe, Ye, Ze, ft, ra, ht, Je, na],
    (t, a, s, n, r, m, x, d, h, b) => {
      var { chartData: P, dataStartIndex: j, dataEndIndex: u } = x;
      if (
        !(
          h == null ||
          (t !== "horizontal" && t !== "vertical") ||
          a == null ||
          s == null ||
          n == null ||
          r == null ||
          n.length === 0 ||
          r.length === 0 ||
          d == null
        )
      ) {
        var { data: g } = h,
          S;
        if ((g && g.length > 0 ? (S = g) : (S = P?.slice(j, u + 1)), S != null))
          return Ut({
            layout: t,
            xAxis: a,
            yAxis: s,
            xAxisTicks: n,
            yAxisTicks: r,
            dataStartIndex: j,
            areaSettings: h,
            stackedData: m,
            displayedData: S,
            chartBaseValue: b,
            bandSize: d,
          });
      }
    }
  ),
  jt = ["id"],
  bt = [
    "activeDot",
    "animationBegin",
    "animationDuration",
    "animationEasing",
    "connectNulls",
    "dot",
    "fill",
    "fillOpacity",
    "hide",
    "isAnimationActive",
    "legendType",
    "stroke",
    "xAxisId",
    "yAxisId",
  ];
function G() {
  return (
    (G = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var a = 1; a < arguments.length; a++) {
            var s = arguments[a];
            for (var n in s) ({}.hasOwnProperty.call(s, n) && (t[n] = s[n]));
          }
          return t;
        }),
    G.apply(null, arguments)
  );
}
function ea(t, a) {
  if (t == null) return {};
  var s,
    n,
    r = yt(t, a);
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(t);
    for (n = 0; n < m.length; n++)
      (s = m[n]),
        a.indexOf(s) === -1 &&
          {}.propertyIsEnumerable.call(t, s) &&
          (r[s] = t[s]);
  }
  return r;
}
function yt(t, a) {
  if (t == null) return {};
  var s = {};
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n)) {
      if (a.indexOf(n) !== -1) continue;
      s[n] = t[n];
    }
  return s;
}
function De(t, a) {
  var s = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    a &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(t, r).enumerable;
      })),
      s.push.apply(s, n);
  }
  return s;
}
function Z(t) {
  for (var a = 1; a < arguments.length; a++) {
    var s = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? De(Object(s), !0).forEach(function (n) {
          Nt(t, n, s[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
      : De(Object(s)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
        });
  }
  return t;
}
function Nt(t, a, s) {
  return (
    (a = wt(a)) in t
      ? Object.defineProperty(t, a, {
          value: s,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[a] = s),
    t
  );
}
function wt(t) {
  var a = Ct(t, "string");
  return typeof a == "symbol" ? a : a + "";
}
function Ct(t, a) {
  if (typeof t != "object" || !t) return t;
  var s = t[Symbol.toPrimitive];
  if (s !== void 0) {
    var n = s.call(t, a || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(t);
}
function ie(t, a) {
  return t && t !== "none" ? t : a;
}
var _t = (t) => {
  var { dataKey: a, name: s, stroke: n, fill: r, legendType: m, hide: x } = t;
  return [
    {
      inactive: x,
      dataKey: a,
      type: m,
      color: ie(n, r),
      value: Me(s, a),
      payload: t,
    },
  ];
};
function St(t) {
  var {
    dataKey: a,
    data: s,
    stroke: n,
    strokeWidth: r,
    fill: m,
    name: x,
    hide: d,
    unit: h,
  } = t;
  return {
    dataDefinedOnItem: s,
    positions: void 0,
    settings: {
      stroke: n,
      strokeWidth: r,
      fill: m,
      dataKey: a,
      nameKey: void 0,
      name: Me(x, a),
      hide: d,
      type: t.tooltipType,
      color: ie(n, m),
      unit: h,
    },
  };
}
function Pt(t) {
  var { clipPathId: a, points: s, props: n } = t,
    { needClip: r, dot: m, dataKey: x } = n,
    d = Oe(n);
  return i.createElement(ut, {
    points: s,
    dot: m,
    className: "recharts-area-dots",
    dotClassName: "recharts-area-dot",
    dataKey: x,
    baseProps: d,
    needClip: r,
    clipPathId: a,
  });
}
function At(t) {
  var { showLabels: a, children: s, points: n } = t,
    r = n.map((m) => {
      var x,
        d,
        h = {
          x: (x = m.x) !== null && x !== void 0 ? x : 0,
          y: (d = m.y) !== null && d !== void 0 ? d : 0,
          width: 0,
          lowerWidth: 0,
          upperWidth: 0,
          height: 0,
        };
      return Z(
        Z({}, h),
        {},
        {
          value: m.value,
          payload: m.payload,
          parentViewBox: void 0,
          viewBox: h,
          fill: void 0,
        }
      );
    });
  return i.createElement(Aa, { value: a ? r : void 0 }, s);
}
function ke(t) {
  var { points: a, baseLine: s, needClip: n, clipPathId: r, props: m } = t,
    { layout: x, type: d, stroke: h, connectNulls: b, isRange: P } = m,
    { id: j } = m,
    u = ea(m, jt),
    g = Oe(u),
    S = Ea(u);
  return i.createElement(
    i.Fragment,
    null,
    a?.length > 1 &&
      i.createElement(
        re,
        { clipPath: n ? "url(#clipPath-".concat(r, ")") : void 0 },
        i.createElement(
          ce,
          G({}, S, {
            id: j,
            points: a,
            connectNulls: b,
            type: d,
            baseLine: s,
            layout: x,
            stroke: "none",
            className: "recharts-area-area",
          })
        ),
        h !== "none" &&
          i.createElement(
            ce,
            G({}, g, {
              className: "recharts-area-curve",
              layout: x,
              type: d,
              connectNulls: b,
              fill: "none",
              points: a,
            })
          ),
        h !== "none" &&
          P &&
          i.createElement(
            ce,
            G({}, g, {
              className: "recharts-area-curve",
              layout: x,
              type: d,
              connectNulls: b,
              fill: "none",
              points: s,
            })
          )
      ),
    i.createElement(Pt, { points: a, props: u, clipPathId: r })
  );
}
function Et(t) {
  var { alpha: a, baseLine: s, points: n, strokeWidth: r } = t,
    m = n[0].y,
    x = n[n.length - 1].y;
  if (!ne(m) || !ne(x)) return null;
  var d = a * Math.abs(m - x),
    h = Math.max(...n.map((b) => b.x || 0));
  return (
    J(s)
      ? (h = Math.max(s, h))
      : s &&
        Array.isArray(s) &&
        s.length &&
        (h = Math.max(...s.map((b) => b.x || 0), h)),
    J(h)
      ? i.createElement("rect", {
          x: 0,
          y: m < x ? m : m - d,
          width: h + (r ? parseInt("".concat(r), 10) : 1),
          height: Math.floor(d),
        })
      : null
  );
}
function Dt(t) {
  var { alpha: a, baseLine: s, points: n, strokeWidth: r } = t,
    m = n[0].x,
    x = n[n.length - 1].x;
  if (!ne(m) || !ne(x)) return null;
  var d = a * Math.abs(m - x),
    h = Math.max(...n.map((b) => b.y || 0));
  return (
    J(s)
      ? (h = Math.max(s, h))
      : s &&
        Array.isArray(s) &&
        s.length &&
        (h = Math.max(...s.map((b) => b.y || 0), h)),
    J(h)
      ? i.createElement("rect", {
          x: m < x ? m : m - d,
          y: 0,
          width: d,
          height: Math.floor(h + (r ? parseInt("".concat(r), 10) : 1)),
        })
      : null
  );
}
function kt(t) {
  var { alpha: a, layout: s, points: n, baseLine: r, strokeWidth: m } = t;
  return s === "vertical"
    ? i.createElement(Et, { alpha: a, points: n, baseLine: r, strokeWidth: m })
    : i.createElement(Dt, { alpha: a, points: n, baseLine: r, strokeWidth: m });
}
function Rt(t) {
  var {
      needClip: a,
      clipPathId: s,
      props: n,
      previousPointsRef: r,
      previousBaselineRef: m,
    } = t,
    {
      points: x,
      baseLine: d,
      isAnimationActive: h,
      animationBegin: b,
      animationDuration: P,
      animationEasing: j,
      onAnimationStart: u,
      onAnimationEnd: g,
    } = n,
    S = wa(n, "recharts-area-"),
    [y, N] = i.useState(!1),
    l = !y,
    v = i.useCallback(() => {
      typeof g == "function" && g(), N(!1);
    }, [g]),
    f = i.useCallback(() => {
      typeof u == "function" && u(), N(!0);
    }, [u]),
    c = r.current,
    o = m.current;
  return i.createElement(
    At,
    { showLabels: l, points: x },
    n.children,
    i.createElement(
      Ca,
      {
        animationId: S,
        begin: b,
        duration: P,
        isActive: h,
        easing: j,
        onAnimationEnd: v,
        onAnimationStart: f,
        key: S,
      },
      (p) => {
        if (c) {
          var C = c.length / x.length,
            A =
              p === 1
                ? x
                : x.map((k, w) => {
                    var I = Math.floor(w * C);
                    if (c[I]) {
                      var T = c[I];
                      return Z(
                        Z({}, k),
                        {},
                        { x: X(T.x, k.x, p), y: X(T.y, k.y, p) }
                      );
                    }
                    return k;
                  }),
            E;
          return (
            J(d)
              ? (E = X(o, d, p))
              : _a(d) || Sa(d)
              ? (E = X(o, 0, p))
              : (E = d.map((k, w) => {
                  var I = Math.floor(w * C);
                  if (Array.isArray(o) && o[I]) {
                    var T = o[I];
                    return Z(
                      Z({}, k),
                      {},
                      { x: X(T.x, k.x, p), y: X(T.y, k.y, p) }
                    );
                  }
                  return k;
                })),
            p > 0 && ((r.current = A), (m.current = E)),
            i.createElement(ke, {
              points: A,
              baseLine: E,
              needClip: a,
              clipPathId: s,
              props: n,
            })
          );
        }
        return (
          p > 0 && ((r.current = x), (m.current = d)),
          i.createElement(
            re,
            null,
            h &&
              i.createElement(
                "defs",
                null,
                i.createElement(
                  "clipPath",
                  { id: "animationClipPath-".concat(s) },
                  i.createElement(kt, {
                    alpha: p,
                    points: x,
                    baseLine: d,
                    layout: n.layout,
                    strokeWidth: n.strokeWidth,
                  })
                )
              ),
            i.createElement(
              re,
              { clipPath: "url(#animationClipPath-".concat(s, ")") },
              i.createElement(ke, {
                points: x,
                baseLine: d,
                needClip: a,
                clipPathId: s,
                props: n,
              })
            )
          )
        );
      }
    ),
    i.createElement(Pa, { label: n.label })
  );
}
function It(t) {
  var { needClip: a, clipPathId: s, props: n } = t,
    r = i.useRef(null),
    m = i.useRef();
  return i.createElement(Rt, {
    needClip: a,
    clipPathId: s,
    props: n,
    previousPointsRef: r,
    previousBaselineRef: m,
  });
}
class Tt extends i.PureComponent {
  render() {
    var {
      hide: a,
      dot: s,
      points: n,
      className: r,
      top: m,
      left: x,
      needClip: d,
      xAxisId: h,
      yAxisId: b,
      width: P,
      height: j,
      id: u,
      baseLine: g,
      zIndex: S,
    } = this.props;
    if (a) return null;
    var y = fa("recharts-area", r),
      N = u,
      { r: l, strokeWidth: v } = mt(s),
      f = va(s),
      c = l * 2 + v;
    return i.createElement(
      ja,
      { zIndex: S },
      i.createElement(
        re,
        { className: y },
        d &&
          i.createElement(
            "defs",
            null,
            i.createElement(ba, { clipPathId: N, xAxisId: h, yAxisId: b }),
            !f &&
              i.createElement(
                "clipPath",
                { id: "clipPath-dots-".concat(N) },
                i.createElement("rect", {
                  x: x - c / 2,
                  y: m - c / 2,
                  width: P + c,
                  height: j + c,
                })
              )
          ),
        i.createElement(It, { needClip: d, clipPathId: N, props: this.props })
      ),
      i.createElement(Ee, {
        points: n,
        mainColor: ie(this.props.stroke, this.props.fill),
        itemDataKey: this.props.dataKey,
        activeDot: this.props.activeDot,
      }),
      this.props.isRange &&
        Array.isArray(g) &&
        i.createElement(Ee, {
          points: g,
          mainColor: ie(this.props.stroke, this.props.fill),
          itemDataKey: this.props.dataKey,
          activeDot: this.props.activeDot,
        })
    );
  }
}
var aa = {
  activeDot: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !1,
  fill: "#3182bd",
  fillOpacity: 0.6,
  hide: !1,
  isAnimationActive: !ya.isSsr,
  legendType: "line",
  stroke: "#3182bd",
  xAxisId: 0,
  yAxisId: 0,
  zIndex: Na.area,
};
function Ft(t) {
  var a,
    s = Ue(t, aa),
    {
      activeDot: n,
      animationBegin: r,
      animationDuration: m,
      animationEasing: x,
      connectNulls: d,
      dot: h,
      fill: b,
      fillOpacity: P,
      hide: j,
      isAnimationActive: u,
      legendType: g,
      stroke: S,
      xAxisId: y,
      yAxisId: N,
    } = s,
    l = ea(s, bt),
    v = ua(),
    f = pa(),
    { needClip: c } = xa(y, N),
    o = $e(),
    {
      points: p,
      isRange: C,
      baseLine: A,
    } = (a = ha(($) => vt($, y, N, o, t.id))) !== null && a !== void 0 ? a : {},
    E = ga();
  if (
    (v !== "horizontal" && v !== "vertical") ||
    E == null ||
    (f !== "AreaChart" && f !== "ComposedChart")
  )
    return null;
  var { height: k, width: w, x: I, y: T } = E;
  return !p || !p.length
    ? null
    : i.createElement(
        Tt,
        G({}, l, {
          activeDot: n,
          animationBegin: r,
          animationDuration: m,
          animationEasing: x,
          baseLine: A,
          connectNulls: d,
          dot: h,
          fill: b,
          fillOpacity: P,
          height: k,
          hide: j,
          layout: v,
          isAnimationActive: u,
          isRange: C,
          legendType: g,
          needClip: c,
          points: p,
          stroke: S,
          width: w,
          left: I,
          top: T,
          xAxisId: y,
          yAxisId: N,
        })
      );
}
var Lt = (t, a, s, n, r) => {
  var m = s ?? a;
  if (J(m)) return m;
  var x = t === "horizontal" ? r : n,
    d = x.scale.domain();
  if (x.type === "number") {
    var h = Math.max(d[0], d[1]),
      b = Math.min(d[0], d[1]);
    return m === "dataMin"
      ? b
      : m === "dataMax" || h < 0
      ? h
      : Math.max(Math.min(d[0], d[1]), 0);
  }
  return m === "dataMin" ? d[0] : m === "dataMax" ? d[1] : d[0];
};
function Ut(t) {
  var {
      areaSettings: { connectNulls: a, baseValue: s, dataKey: n },
      stackedData: r,
      layout: m,
      chartBaseValue: x,
      xAxis: d,
      yAxis: h,
      displayedData: b,
      dataStartIndex: P,
      xAxisTicks: j,
      yAxisTicks: u,
      bandSize: g,
    } = t,
    S = r && r.length,
    y = Lt(m, x, s, d, h),
    N = m === "horizontal",
    l = !1,
    v = b.map((c, o) => {
      var p;
      S
        ? (p = r[P + o])
        : ((p = Ne(c, n)), Array.isArray(p) ? (l = !0) : (p = [y, p]));
      var C = p[1] == null || (S && !a && Ne(c, n) == null);
      return N
        ? {
            x: we({ axis: d, ticks: j, bandSize: g, entry: c, index: o }),
            y: C ? null : h.scale(p[1]),
            value: p,
            payload: c,
          }
        : {
            x: C ? null : d.scale(p[1]),
            y: we({ axis: h, ticks: u, bandSize: g, entry: c, index: o }),
            value: p,
            payload: c,
          };
    }),
    f;
  return (
    S || l
      ? (f = v.map((c) => {
          var o = Array.isArray(c.value) ? c.value[0] : null;
          return N
            ? {
                x: c.x,
                y: o != null && c.y != null ? h.scale(o) : null,
                payload: c.payload,
              }
            : { x: o != null ? d.scale(o) : null, y: c.y, payload: c.payload };
        }))
      : (f = N ? h.scale(y) : d.scale(y)),
    { points: v, baseLine: f, isRange: l }
  );
}
function $t(t) {
  var a = Ue(t, aa),
    s = $e();
  return i.createElement(ia, { id: a.id, type: "area" }, (n) =>
    i.createElement(
      i.Fragment,
      null,
      i.createElement(oa, { legendPayload: _t(a) }),
      i.createElement(ca, { fn: St, args: a }),
      i.createElement(da, {
        type: "area",
        id: n,
        data: a.data,
        dataKey: a.dataKey,
        xAxisId: a.xAxisId,
        yAxisId: a.yAxisId,
        zAxisId: 0,
        stackId: ma(a.stackId),
        hide: a.hide,
        barSize: void 0,
        baseValue: a.baseValue,
        isPanorama: s,
        connectNulls: a.connectNulls,
      }),
      i.createElement(Ft, G({}, a, { id: n }))
    )
  );
}
var ta = i.memo($t);
ta.displayName = "Area";
var Mt = ["axis"],
  Ot = i.forwardRef((t, a) =>
    i.createElement(Da, {
      chartName: "AreaChart",
      defaultTooltipEventType: "axis",
      validateTooltipEventTypes: Mt,
      tooltipPayloadSearcher: ka,
      categoricalChartProps: t,
      ref: a,
    })
  );
async function zt(t) {
  try {
    const {
      data: { user: a },
    } = await _.auth.getUser();
    if (!a) return;
    const { error: s } = await _.from("reseller_logs").insert({
      reseller_id: a.id,
      action_type: t.actionType,
      action_description: t.actionDescription,
      target_user_id: t.targetUserId,
      target_user_name: t.targetUserName,
      metadata: t.metadata || {},
    });
  } catch {}
}
const Bt = "/assets/qr-mensal-revendedor-B8edHDRw.png",
  qt = "/assets/qr-anual-revendedor-BA7i77Rl.png",
  Wt = ({ open: t, onClose: a, onSelectPlan: s }) => {
    const { toast: n } = ee(),
      [r, m] = i.useState(null),
      [x, d] = i.useState(null),
      h = {
        monthly:
          "00020126460014BR.GOV.BCB.PIX0124g7atendimentoo@gmail.com520400005303986540513.005802BR5901N6001C62090505bruno630417C5",
        annual:
          "00020126460014BR.GOV.BCB.PIX0124g7atendimentoo@gmail.com5204000053039865406130.005802BR5901N6001C62090505bruno63046F82",
      },
      b = [
        {
          id: "monthly",
          name: "Plano Mensal",
          price: 13,
          duration: "30 dias",
          features: [
            "Acesso completo ao sistema",
            "Suporte técnico",
            "Todas as funcionalidades",
            "Atualizações automáticas",
          ],
        },
        {
          id: "annual",
          name: "Plano Anual",
          price: 130,
          duration: "365 dias",
          features: [
            "Acesso completo ao sistema",
            "Suporte técnico prioritário",
            "Todas as funcionalidades",
            "Atualizações automáticas",
            "Economia de R$ 26/ano",
          ],
          popular: !0,
        },
      ],
      P = (g) => {
        navigator.clipboard.writeText(g),
          n({
            title: "Código copiado!",
            description:
              "O código PIX foi copiado para a área de transferência.",
          });
      },
      j = (g) => {
        g.target.files && g.target.files[0] && d(g.target.files[0]);
      },
      u = () => {
        if (!r) {
          n({
            title: "Selecione um plano",
            description: "Por favor, selecione o plano desejado.",
            variant: "destructive",
          });
          return;
        }
        if (!x) {
          n({
            title: "Comprovante obrigatório",
            description: "Por favor, faça upload do comprovante de pagamento.",
            variant: "destructive",
          });
          return;
        }
        s(r, x), m(null), d(null);
      };
    return e.jsx(Ra, {
      open: t,
      onOpenChange: a,
      children: e.jsxs(Ia, {
        className: "max-w-5xl max-h-[90vh] overflow-y-auto",
        children: [
          e.jsxs(Ta, {
            children: [
              e.jsx(Fa, {
                className: "text-2xl font-bold text-center",
                children: "Checkout - Criação de Usuário",
              }),
              e.jsx("p", {
                className: "text-muted-foreground text-center mt-2",
                children: "Complete o pagamento para criar o novo usuário",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-6 mt-6",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "1. Selecione o Plano",
                  }),
                  e.jsx("div", {
                    className: "grid md:grid-cols-2 gap-4",
                    children: b.map((g) =>
                      e.jsxs(
                        D,
                        {
                          className: La(
                            "relative p-6 border-2 transition-all duration-300 hover:shadow-lg cursor-pointer",
                            r === g.id &&
                              "border-primary shadow-glow bg-primary/5",
                            g.popular && !r && "border-primary/50"
                          ),
                          onClick: () => m(g.id),
                          children: [
                            g.popular &&
                              e.jsx("div", {
                                className:
                                  "absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold",
                                children: "Mais Popular",
                              }),
                            e.jsxs("div", {
                              className: "text-center space-y-4",
                              children: [
                                e.jsx("h3", {
                                  className: "text-xl font-bold",
                                  children: g.name,
                                }),
                                e.jsxs("div", {
                                  className: "space-y-1",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "text-4xl font-bold text-primary",
                                      children: ["R$ ", g.price.toFixed(2)],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: g.duration,
                                    }),
                                  ],
                                }),
                                e.jsx("ul", {
                                  className: "space-y-2 text-left",
                                  children: g.features.map((S, y) =>
                                    e.jsxs(
                                      "li",
                                      {
                                        className: "flex items-start gap-2",
                                        children: [
                                          e.jsx(de, {
                                            className:
                                              "w-5 h-5 text-primary flex-shrink-0 mt-0.5",
                                          }),
                                          e.jsx("span", {
                                            className: "text-sm",
                                            children: S,
                                          }),
                                        ],
                                      },
                                      y
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        },
                        g.id
                      )
                    ),
                  }),
                ],
              }),
              r &&
                e.jsxs("div", {
                  className: "space-y-6 border-t pt-6",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "2. Realize o Pagamento via PIX",
                    }),
                    e.jsxs("div", {
                      className: "grid md:grid-cols-2 gap-6",
                      children: [
                        e.jsx("div", {
                          className: "space-y-4",
                          children: e.jsxs("div", {
                            className:
                              "bg-card border rounded-lg p-6 flex flex-col items-center",
                            children: [
                              e.jsx(M, {
                                className: "mb-4 text-center font-semibold",
                                children: "QR Code PIX",
                              }),
                              e.jsx("img", {
                                src: r === "monthly" ? Bt : qt,
                                alt: "QR Code PIX",
                                className: "w-64 h-64 object-contain",
                              }),
                              e.jsx("p", {
                                className:
                                  "text-sm text-muted-foreground mt-4 text-center",
                                children: "Escaneie com o app do seu banco",
                              }),
                            ],
                          }),
                        }),
                        e.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            e.jsxs("div", {
                              className: "bg-card border rounded-lg p-6",
                              children: [
                                e.jsx(M, {
                                  className: "mb-2 block font-semibold",
                                  children: "Código PIX Copia e Cola",
                                }),
                                e.jsx("div", {
                                  className:
                                    "bg-muted p-4 rounded-md break-all text-sm font-mono mb-4",
                                  children: h[r],
                                }),
                                e.jsxs(U, {
                                  onClick: () => P(h[r]),
                                  className: "w-full",
                                  variant: "outline",
                                  children: [
                                    e.jsx(ve, { className: "w-4 h-4 mr-2" }),
                                    "Copiar Código",
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "bg-primary/10 border border-primary/20 rounded-lg p-4",
                              children: [
                                e.jsx("p", {
                                  className: "text-sm font-semibold mb-2",
                                  children: "Valor a pagar:",
                                }),
                                e.jsxs("p", {
                                  className: "text-3xl font-bold text-primary",
                                  children: [
                                    "R$ ",
                                    b.find((g) => g.id === r)?.price.toFixed(2),
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-xs text-muted-foreground mt-1",
                                  children: b.find((g) => g.id === r)?.duration,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-4 border-t pt-6",
                      children: [
                        e.jsx("h3", {
                          className: "text-lg font-semibold",
                          children: "3. Envie o Comprovante de Pagamento",
                        }),
                        e.jsxs("div", {
                          className: "bg-card border rounded-lg p-6",
                          children: [
                            e.jsx(M, {
                              htmlFor: "receipt",
                              className: "mb-2 block",
                              children: "Comprovante de Pagamento *",
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                e.jsx(z, {
                                  id: "receipt",
                                  type: "file",
                                  accept: "image/*,.pdf",
                                  onChange: j,
                                  className: "flex-1",
                                }),
                                x &&
                                  e.jsxs("div", {
                                    className:
                                      "flex items-center gap-2 text-sm text-green-600",
                                    children: [
                                      e.jsx(de, { className: "w-4 h-4" }),
                                      "Arquivo selecionado",
                                    ],
                                  }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground mt-2",
                              children: "Formatos aceitos: JPG, PNG, PDF",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs(U, {
                      onClick: u,
                      className: "w-full h-12 text-base font-semibold",
                      disabled: !x,
                      children: [
                        e.jsx(Ua, { className: "w-5 h-5 mr-2" }),
                        "Confirmar Pagamento e Criar Usuário",
                      ],
                    }),
                  ],
                }),
              e.jsx("div", {
                className: "mt-6 p-4 bg-muted/50 rounded-lg",
                children: e.jsxs("p", {
                  className: "text-sm text-muted-foreground text-center",
                  children: [
                    "⚠️ ",
                    e.jsx("strong", { children: "Importante:" }),
                    " Após o pagamento, o usuário será criado automaticamente. A receita será registrada no painel do CEO.",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
function Vt() {
  const { toast: t } = ee(),
    { playCashRegisterSound: a } = $a(),
    [s, n] = i.useState(!1),
    [r, m] = i.useState([]),
    [x, d] = i.useState(!1),
    [h, b] = i.useState(!1),
    [P, j] = i.useState(null),
    [u, g] = i.useState({ name: "", email: "", username: "", password: "" });
  i.useEffect(() => {
    S();
  }, []);
  const S = async () => {
      const { data: f } = await _.from("plans")
        .select("*")
        .eq("is_active", !0)
        .order("price", { ascending: !0 });
      f && m(f);
    },
    y = (f) => {
      if (
        (f.preventDefault(), !u.name || !u.email || !u.username || !u.password)
      ) {
        t({
          title: "Campos obrigatórios!",
          description: "Preencha todos os campos.",
          variant: "destructive",
        });
        return;
      }
      x ? v(null) : b(!0);
    },
    N = async (f, c) => {
      j(f), b(!1);
      const o = r.find((p) =>
        f === "monthly"
          ? p.duration_days === 30 || p.name.toLowerCase().includes("mensal")
          : p.duration_days === 365 ||
            p.name.toLowerCase().includes("anual") ||
            p.name.toLowerCase().includes("ano")
      );
      if (!o) {
        t({
          title: "Erro ao selecionar plano",
          description:
            "Plano não encontrado no sistema. Contate o administrador.",
          variant: "destructive",
        });
        return;
      }
      await v(o, c);
    },
    l = (f) => {
      if (x) {
        const c = new Date();
        return c.setDate(c.getDate() + 5), c.toISOString();
      } else {
        const c = new Date();
        return c.setDate(c.getDate() + f), c.toISOString();
      }
    },
    v = async (f, c) => {
      n(!0);
      try {
        let o = f,
          p = "",
          C = 0,
          A = "";
        if (x) {
          const w = new Date();
          if (
            (w.setDate(w.getDate() + 5), (p = w.toISOString()), (o = r[0]), !o)
          )
            throw new Error("Nenhum plano disponível no sistema");
        } else {
          if (!o) throw new Error("Plano não encontrado");
          const I = (o.duration_days || 0) <= 31 ? "monthly" : "annual",
            T = o.duration_days;
          if (((p = l(T)), (C = I === "monthly" ? 13 : 130), c)) {
            const $ = c.name.split(".").pop(),
              B = `${Date.now()}-${Math.random()
                .toString(36)
                .substring(7)}.${$}`,
              { error: O } = await _.storage.from("receipts").upload(B, c);
            if (O) throw new Error("Erro ao fazer upload do comprovante");
            const { data: q } = _.storage.from("receipts").getPublicUrl(B);
            A = q.publicUrl;
          }
        }
        const { data: E, error: k } = await _.functions.invoke("create-user", {
          body: {
            email: u.email,
            password: u.password,
            name: u.name,
            username: u.username,
            plan_id: o.id,
            expiration_date: p,
          },
        });
        if (k) throw new Error(k.message || "Erro ao criar usuário");
        if (!E?.success) throw new Error(E?.error || "Erro ao criar usuário");
        if (
          (await zt({
            actionType: "user_creation",
            actionDescription: `Criou usuário ${x ? "de TESTE" : "NORMAL"}: ${
              u.name
            } (${u.email})`,
            targetUserId: E.user?.id,
            targetUserName: u.name,
            metadata: {
              plan_id: o.id,
              plan_name: o.name,
              expiration_date: p,
              user_type: x ? "test" : "normal",
              type: x ? "test" : "normal",
              reseller_price: C,
            },
          }),
          !x && E.user?.id)
        ) {
          const {
            data: { user: w },
          } = await _.auth.getUser();
          if (w) {
            const { data: I } = await _.from("profiles")
                .select("name, username")
                .eq("user_id", w.id)
                .single(),
              T = I?.name || "Revendedor",
              B = (o.duration_days || 0) <= 31 ? "monthly" : "annual",
              O = B === "monthly" ? "Plano Mensal" : "Plano Anual",
              { data: q, error: V } = await _.functions.invoke(
                "create-reseller-revenue",
                {
                  body: {
                    reseller_id: w.id,
                    reseller_name: T,
                    reseller_username: I?.username,
                    target_user_id: E.user.id,
                    target_user_name: u.name,
                    target_user_email: u.email,
                    plan_type: B,
                    plan_name: O,
                    amount: C,
                    receipt_url: A,
                  },
                }
              );
            if (V)
              throw new Error("Erro ao registrar receita no painel do CEO");
            if (!q?.success) throw new Error("Erro ao processar receita");
            a(),
              t({
                title: "🎉 Parabéns! Receita Registrada!",
                description: `Venda confirmada! R$ ${C.toFixed(
                  2
                )} adicionado às suas receitas.`,
                className: "bg-green-500 text-white border-green-600",
              });
          }
        } else
          t({
            title: "Usuário criado com sucesso!",
            description: `${u.name} foi adicionado ao sistema (Teste - 5 dias)`,
          });
        g({ name: "", email: "", username: "", password: "" }), d(!1), j(null);
      } catch (o) {
        t({
          title: "Erro ao criar usuário",
          description: o.message,
          variant: "destructive",
        });
      } finally {
        n(!1);
      }
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("form", {
        onSubmit: y,
        className: "space-y-6",
        children: [
          e.jsxs("div", {
            className:
              "flex items-center space-x-2 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20",
            children: [
              e.jsx(Ma, { id: "test-user", checked: x, onCheckedChange: d }),
              e.jsx(M, {
                htmlFor: "test-user",
                className: "cursor-pointer",
                children: "Usuário de Teste (expira em 5 dias)",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(M, { htmlFor: "name", children: "Nome Completo *" }),
                  e.jsx(z, {
                    id: "name",
                    value: u.name,
                    onChange: (f) => g({ ...u, name: f.target.value }),
                    placeholder: "Nome do usuário",
                    required: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(M, { htmlFor: "email", children: "E-mail *" }),
                  e.jsx(z, {
                    id: "email",
                    type: "email",
                    value: u.email,
                    onChange: (f) => g({ ...u, email: f.target.value }),
                    placeholder: "email@exemplo.com",
                    required: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(M, {
                    htmlFor: "username",
                    children: "Usuário (Login) *",
                  }),
                  e.jsx(z, {
                    id: "username",
                    value: u.username,
                    onChange: (f) => g({ ...u, username: f.target.value }),
                    placeholder: "usuario123",
                    required: !0,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(M, { htmlFor: "password", children: "Senha *" }),
                  e.jsx(z, {
                    id: "password",
                    type: "password",
                    value: u.password,
                    onChange: (f) => g({ ...u, password: f.target.value }),
                    placeholder: "••••••••",
                    required: !0,
                  }),
                ],
              }),
              x &&
                e.jsx("div", {
                  className:
                    "md:col-span-2 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20",
                  children: e.jsxs("p", {
                    className: "text-sm text-orange-600 dark:text-orange-400",
                    children: [
                      "⚠️ Usuários de teste são criados com ",
                      e.jsx("strong", { children: "5 dias de validade" }),
                      " sem necessidade de plano específico.",
                    ],
                  }),
                }),
            ],
          }),
          e.jsx(U, {
            type: "submit",
            disabled: s,
            className: "w-full h-12 text-base font-semibold shadow-lg",
            children: s
              ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(me, { className: "mr-2 h-5 w-5 animate-spin" }),
                    "Criando usuário...",
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(ue, { className: "mr-2 h-5 w-5" }),
                    x
                      ? "Criar Usuário de Teste"
                      : "Continuar para Seleção de Plano",
                  ],
                }),
          }),
        ],
      }),
      e.jsx(Wt, { open: h, onClose: () => b(!1), onSelectPlan: N }),
    ],
  });
}
function Ht() {
  const { toast: t } = ee(),
    [a, s] = i.useState([]),
    [n, r] = i.useState([]),
    [m, x] = i.useState("");
  i.useEffect(() => {
    d();
    const j = _.channel("reseller_users_realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "profiles" },
        () => {
          d();
        }
      )
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "user_subscriptions" },
        () => {
          d();
        }
      )
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "reseller_logs" },
        () => {
          d();
        }
      )
      .subscribe();
    return () => {
      _.removeChannel(j);
    };
  }, []);
  const d = async () => {
      try {
        const {
          data: { user: j },
        } = await _.auth.getUser();
        if (!j) return;
        const { data: u, error: g } = await _.from("reseller_logs")
          .select("target_user_id, metadata, created_at, target_user_name")
          .eq("reseller_id", j.id)
          .eq("action_type", "user_creation")
          .order("created_at", { ascending: !1 });
        if (g) throw g;
        if (!u || u.length === 0) {
          s([]), r([]);
          return;
        }
        const S = u.map((c) => c.target_user_id).filter(Boolean),
          { data: y, error: N } = await _.from("profiles")
            .select("*")
            .in("user_id", S),
          l = u.map((c) => {
            const o = y?.find((C) => C.user_id === c.target_user_id),
              p = c.metadata;
            return o
              ? { ...o, user_type: p?.user_type || p?.type || "normal" }
              : {
                  id: c.target_user_id,
                  user_id: c.target_user_id,
                  name: c.target_user_name || "Usuário",
                  email: p?.target_user_email || "email@exemplo.com",
                  username: p?.target_username || "usuario",
                  status: "active",
                  created_at: c.created_at,
                  user_type: p?.user_type || p?.type || "normal",
                };
          }),
          { data: v, error: f } = await _.from("user_subscriptions")
            .select("*, plan:plans(id, name, price)")
            .in("user_id", S);
        s(l || []), r(v || []);
      } catch (j) {
        t({
          title: "Erro ao carregar usuários",
          description: j.message,
          variant: "destructive",
        });
      }
    },
    h = a.filter(
      (j) =>
        j.name.toLowerCase().includes(m.toLowerCase()) ||
        j.email.toLowerCase().includes(m.toLowerCase()) ||
        j.username.toLowerCase().includes(m.toLowerCase())
    ),
    b = (j) => n.find((u) => u.user_id === j),
    P = (j) => new Date(j) < new Date();
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsx("div", {
        className: "flex flex-col md:flex-row gap-4",
        children: e.jsxs("div", {
          className: "relative flex-1",
          children: [
            e.jsx(ze, {
              className:
                "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground",
            }),
            e.jsx(z, {
              placeholder: "Buscar por nome, e-mail ou usuário...",
              value: m,
              onChange: (j) => x(j.target.value),
              className: "pl-12 h-12 border-2 focus:border-primary",
            }),
          ],
        }),
      }),
      e.jsx("div", {
        className: "rounded-lg border-2 overflow-hidden",
        children: e.jsx("div", {
          className: "overflow-x-auto",
          children: e.jsxs("table", {
            className: "w-full",
            children: [
              e.jsx("thead", {
                className: "bg-muted/50",
                children: e.jsxs("tr", {
                  className: "border-b-2 border-border",
                  children: [
                    e.jsx("th", {
                      className: "text-left py-4 px-4 text-sm font-semibold",
                      children: "Nome",
                    }),
                    e.jsx("th", {
                      className: "text-left py-4 px-4 text-sm font-semibold",
                      children: "E-mail",
                    }),
                    e.jsx("th", {
                      className: "text-left py-4 px-4 text-sm font-semibold",
                      children: "Usuário",
                    }),
                    e.jsx("th", {
                      className: "text-left py-4 px-4 text-sm font-semibold",
                      children: "Plano",
                    }),
                    e.jsx("th", {
                      className: "text-left py-4 px-4 text-sm font-semibold",
                      children: "Status",
                    }),
                    e.jsx("th", {
                      className: "text-left py-4 px-4 text-sm font-semibold",
                      children: "Vencimento",
                    }),
                    e.jsx("th", {
                      className: "text-center py-4 px-4 text-sm font-semibold",
                      children: "Observações",
                    }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children:
                  h.length === 0
                    ? e.jsx("tr", {
                        children: e.jsx("td", {
                          colSpan: 7,
                          className: "text-center py-8 text-muted-foreground",
                          children: "Nenhum usuário encontrado.",
                        }),
                      })
                    : h.map((j) => {
                        const u = b(j.user_id);
                        return e.jsxs(
                          "tr",
                          {
                            className:
                              "border-b border-border hover:bg-muted/30 transition-all",
                            children: [
                              e.jsx("td", {
                                className: "py-4 px-4",
                                children: e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx("span", {
                                      className: "font-semibold",
                                      children: j.name,
                                    }),
                                    j.user_type === "test" &&
                                      e.jsx(W, {
                                        variant: "secondary",
                                        className: "text-xs",
                                        children: "Teste",
                                      }),
                                  ],
                                }),
                              }),
                              e.jsx("td", {
                                className:
                                  "py-4 px-4 text-sm text-muted-foreground",
                                children: j.email,
                              }),
                              e.jsx("td", {
                                className: "py-4 px-4 text-sm",
                                children: e.jsxs("span", {
                                  className:
                                    "font-mono bg-muted px-2 py-1 rounded",
                                  children: ["@", j.username],
                                }),
                              }),
                              e.jsx("td", {
                                className: "py-3 px-2",
                                children:
                                  u && u.plan
                                    ? e.jsx(W, {
                                        variant: "outline",
                                        className:
                                          "bg-primary/10 text-primary border-primary/20",
                                        children: u.plan.name,
                                      })
                                    : e.jsx(W, {
                                        variant: "outline",
                                        className: "bg-muted/10",
                                        children: "Sem plano",
                                      }),
                              }),
                              e.jsx("td", {
                                className: "py-3 px-2",
                                children: e.jsx(W, {
                                  variant: "outline",
                                  className:
                                    j.status === "active"
                                      ? "bg-green-500/10 text-green-500 border-green-500/20"
                                      : j.status === "paused"
                                      ? "bg-orange-500/10 text-orange-500 border-orange-500/20"
                                      : "bg-red-500/10 text-red-500 border-red-500/20",
                                  children:
                                    j.status === "active"
                                      ? "Ativo"
                                      : j.status === "paused"
                                      ? "Pausado"
                                      : "Banido",
                                }),
                              }),
                              e.jsx("td", {
                                className: "py-3 px-2",
                                children: u
                                  ? e.jsxs(W, {
                                      variant: "outline",
                                      className: P(u.expiration_date)
                                        ? "bg-red-500/10 text-red-500 border-red-500/20"
                                        : "bg-blue-500/10 text-blue-500 border-blue-500/20",
                                      children: [
                                        e.jsx(je, {
                                          className: "w-3 h-3 mr-1",
                                        }),
                                        P(u.expiration_date)
                                          ? "Expirado"
                                          : new Date(
                                              u.expiration_date
                                            ).toLocaleDateString("pt-BR"),
                                      ],
                                    })
                                  : e.jsx(W, {
                                      variant: "outline",
                                      className: "bg-muted/10",
                                      children: "-",
                                    }),
                              }),
                              e.jsx("td", {
                                className: "py-4 px-4",
                                children: e.jsx("div", {
                                  className: "flex items-center justify-center",
                                  children: e.jsx("span", {
                                    className:
                                      "text-xs text-muted-foreground italic",
                                    children: "Apenas o CEO pode gerenciar",
                                  }),
                                }),
                              }),
                            ],
                          },
                          j.id
                        );
                      }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function Kt() {
  const [t, a] = i.useState([]),
    [s, n] = i.useState({ total: 0, active: 0, test: 0, normal: 0, banned: 0 }),
    [r, m] = i.useState(0),
    [x, d] = i.useState(!0),
    [h, b] = i.useState("all");
  i.useEffect(() => {
    P();
  }, [h]);
  const P = async () => {
    try {
      const {
        data: { user: u },
      } = await _.auth.getUser();
      if (!u) return;
      const g = new Date();
      let S = null;
      switch (h) {
        case "day":
          (S = new Date(g)), S.setHours(0, 0, 0, 0);
          break;
        case "week":
          (S = new Date(g)), S.setDate(g.getDate() - 7);
          break;
        case "month":
          (S = new Date(g)), S.setMonth(g.getMonth() - 1);
          break;
        case "all":
        default:
          S = null;
          break;
      }
      let y = _.from("reseller_logs")
        .select("target_user_id, created_at, metadata")
        .eq("reseller_id", u.id)
        .eq("action_type", "user_creation")
        .order("created_at", { ascending: !0 });
      S && (y = y.gte("created_at", S.toISOString()));
      const { data: N } = await y;
      if (!N || N.length === 0) {
        d(!1);
        return;
      }
      const l = N.map((w) => w.target_user_id).filter(Boolean),
        { data: v } = await _.from("profiles")
          .select("user_id, status")
          .in("user_id", l),
        { data: f } = await _.from("user_subscriptions")
          .select("user_id, plan_id, created_at, plan:plans(name, price)")
          .in("user_id", l)
          .eq("is_active", !0),
        c = N.filter((w) => w.metadata?.user_type === "test").length,
        o = N.length - c,
        p = v?.filter((w) => w.status === "active").length || 0,
        C = v?.filter((w) => w.status === "banned").length || 0;
      n({ total: N.length, active: p, test: c, normal: o, banned: C });
      let A = 0;
      const E = {};
      f &&
        f.forEach((w) => {
          if (
            !(
              N.find((B) => B.target_user_id === w.user_id)?.metadata
                ?.user_type === "test"
            ) &&
            w.plan
          ) {
            A += w.plan.price;
            const O = new Date(w.created_at).toLocaleDateString("pt-BR", {
              month: "short",
              year: "numeric",
            });
            E[O] || (E[O] = { revenue: 0, users: 0 }),
              (E[O].revenue += w.plan.price),
              (E[O].users += 1);
          }
        }),
        m(A);
      const k = Object.entries(E).map(([w, I]) => ({
        month: w,
        revenue: I.revenue,
        users: I.users,
      }));
      a(k), d(!1);
    } catch {
      d(!1);
    }
  };
  if (x)
    return e.jsx("div", {
      className: "flex items-center justify-center py-12",
      children: e.jsx("div", {
        className:
          "w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin",
      }),
    });
  const j = () => {
    switch (h) {
      case "day":
        return "Hoje";
      case "week":
        return "Última Semana";
      case "month":
        return "Último Mês";
      case "all":
        return "Todo o Período";
      default:
        return "Todo o Período";
    }
  };
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsx(D, {
        className: "border-2 bg-card/50",
        children: e.jsx(R, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-center justify-between gap-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(je, { className: "h-5 w-5 text-primary" }),
                  e.jsx("span", {
                    className: "font-medium",
                    children: "Período de Análise:",
                  }),
                ],
              }),
              e.jsxs(Be, {
                value: h,
                onValueChange: (u) => b(u),
                children: [
                  e.jsx(qe, { className: "w-48", children: e.jsx(We, {}) }),
                  e.jsxs(Ve, {
                    children: [
                      e.jsx(H, { value: "day", children: "Hoje" }),
                      e.jsx(H, { value: "week", children: "Última Semana" }),
                      e.jsx(H, { value: "month", children: "Último Mês" }),
                      e.jsx(H, { value: "all", children: "Todo o Período" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
        children: [
          e.jsxs(D, {
            className: "border-2 hover:border-primary/50 transition-all",
            children: [
              e.jsxs(F, {
                className:
                  "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                  e.jsx(L, {
                    className: "text-sm font-medium",
                    children: "Receita Total",
                  }),
                  e.jsx(ae, { className: "h-5 w-5 text-primary" }),
                ],
              }),
              e.jsxs(R, {
                children: [
                  e.jsxs("div", {
                    className: "text-3xl font-bold text-primary",
                    children: ["R$ ", r.toFixed(2)],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: j(),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(D, {
            className: "border-2 hover:border-blue-500/50 transition-all",
            children: [
              e.jsxs(F, {
                className:
                  "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                  e.jsx(L, {
                    className: "text-sm font-medium",
                    children: "Total de Usuários",
                  }),
                  e.jsx(te, { className: "h-5 w-5 text-blue-500" }),
                ],
              }),
              e.jsxs(R, {
                children: [
                  e.jsx("div", {
                    className: "text-3xl font-bold text-blue-500",
                    children: s.total,
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: [j(), " - ", s.active, " ativos"],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(D, {
            className: "border-2 hover:border-green-500/50 transition-all",
            children: [
              e.jsxs(F, {
                className:
                  "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                  e.jsx(L, {
                    className: "text-sm font-medium",
                    children: "Usuários Normais",
                  }),
                  e.jsx(He, { className: "h-5 w-5 text-green-500" }),
                ],
              }),
              e.jsxs(R, {
                children: [
                  e.jsx("div", {
                    className: "text-3xl font-bold text-green-500",
                    children: s.normal,
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Com planos pagos",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(D, {
            className: "border-2 hover:border-orange-500/50 transition-all",
            children: [
              e.jsxs(F, {
                className:
                  "flex flex-row items-center justify-between space-y-0 pb-2",
                children: [
                  e.jsx(L, {
                    className: "text-sm font-medium",
                    children: "Usuários Teste",
                  }),
                  e.jsx(Oa, { className: "h-5 w-5 text-orange-500" }),
                ],
              }),
              e.jsxs(R, {
                children: [
                  e.jsx("div", {
                    className: "text-3xl font-bold text-orange-500",
                    children: s.test,
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: "Válidos por 5 dias",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
        children: [
          e.jsxs(D, {
            className: "border-2",
            children: [
              e.jsxs(F, {
                children: [
                  e.jsx(L, { children: "Receita por Período" }),
                  e.jsx(K, {
                    children: "Evolução da receita gerada ao longo do tempo",
                  }),
                ],
              }),
              e.jsx(R, {
                children:
                  t.length > 0
                    ? e.jsx(Ce, {
                        width: "100%",
                        height: 300,
                        children: e.jsxs(Ot, {
                          data: t,
                          children: [
                            e.jsx("defs", {
                              children: e.jsxs("linearGradient", {
                                id: "colorRevenue",
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                  e.jsx("stop", {
                                    offset: "5%",
                                    stopColor: "hsl(var(--primary))",
                                    stopOpacity: 0.3,
                                  }),
                                  e.jsx("stop", {
                                    offset: "95%",
                                    stopColor: "hsl(var(--primary))",
                                    stopOpacity: 0,
                                  }),
                                ],
                              }),
                            }),
                            e.jsx(_e, {
                              strokeDasharray: "3 3",
                              className: "stroke-border",
                            }),
                            e.jsx(Se, {
                              dataKey: "month",
                              className: "text-xs",
                            }),
                            e.jsx(Pe, { className: "text-xs" }),
                            e.jsx(Ae, {
                              contentStyle: {
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px",
                              },
                              formatter: (u) => [
                                `R$ ${u.toFixed(2)}`,
                                "Receita",
                              ],
                            }),
                            e.jsx(ta, {
                              type: "monotone",
                              dataKey: "revenue",
                              stroke: "hsl(var(--primary))",
                              fill: "url(#colorRevenue)",
                              strokeWidth: 2,
                            }),
                          ],
                        }),
                      })
                    : e.jsx("div", {
                        className:
                          "flex items-center justify-center h-[300px] text-muted-foreground",
                        children: "Nenhum dado de receita disponível",
                      }),
              }),
            ],
          }),
          e.jsxs(D, {
            className: "border-2",
            children: [
              e.jsxs(F, {
                children: [
                  e.jsx(L, { children: "Usuários por Período" }),
                  e.jsx(K, {
                    children: "Número de usuários criados em cada período",
                  }),
                ],
              }),
              e.jsx(R, {
                children:
                  t.length > 0
                    ? e.jsx(Ce, {
                        width: "100%",
                        height: 300,
                        children: e.jsxs(za, {
                          data: t,
                          children: [
                            e.jsx(_e, {
                              strokeDasharray: "3 3",
                              className: "stroke-border",
                            }),
                            e.jsx(Se, {
                              dataKey: "month",
                              className: "text-xs",
                            }),
                            e.jsx(Pe, { className: "text-xs" }),
                            e.jsx(Ae, {
                              contentStyle: {
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px",
                              },
                              formatter: (u) => [u, "Usuários"],
                            }),
                            e.jsx(Ba, {
                              dataKey: "users",
                              fill: "hsl(var(--primary))",
                              radius: [8, 8, 0, 0],
                            }),
                          ],
                        }),
                      })
                    : e.jsx("div", {
                        className:
                          "flex items-center justify-center h-[300px] text-muted-foreground",
                        children: "Nenhum dado de usuários disponível",
                      }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs(D, {
        className: "border-2",
        children: [
          e.jsxs(F, {
            children: [
              e.jsx(L, { children: "Resumo de Desempenho" }),
              e.jsx(K, {
                children: "Visão geral da sua performance como revendedor",
              }),
            ],
          }),
          e.jsx(R, {
            children: e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-4",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-3 h-3 rounded-full bg-primary animate-pulse",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium",
                          children: "Taxa de Conversão",
                        }),
                        e.jsxs("p", {
                          className: "text-2xl font-bold",
                          children: [
                            s.total > 0
                              ? ((s.normal / s.total) * 100).toFixed(1)
                              : 0,
                            "%",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/20",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-3 h-3 rounded-full bg-green-500 animate-pulse",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium",
                          children: "Ticket Médio",
                        }),
                        e.jsxs("p", {
                          className: "text-2xl font-bold",
                          children: [
                            "R$ ",
                            s.normal > 0 ? (r / s.normal).toFixed(2) : "0.00",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 p-4 rounded-lg bg-blue-500/5 border border-blue-500/20",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-3 h-3 rounded-full bg-blue-500 animate-pulse",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("p", {
                          className: "text-sm font-medium",
                          children: "Taxa de Ativação",
                        }),
                        e.jsxs("p", {
                          className: "text-2xl font-bold",
                          children: [
                            s.total > 0
                              ? ((s.active / s.total) * 100).toFixed(1)
                              : 0,
                            "%",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
async function Gt(t) {
  const a = new qa(),
    s = a.internal.pageSize.width,
    n = a.internal.pageSize.height;
  let r = 20;
  a.setFontSize(20),
    a.setFont("helvetica", "bold"),
    a.text("Relatório de Receitas", s / 2, r, { align: "center" }),
    (r += 10),
    a.setFontSize(12),
    a.setFont("helvetica", "normal"),
    a.text(`Revendedor: ${t.resellerName}`, s / 2, r, { align: "center" }),
    (r += 7),
    a.setFontSize(10),
    a.setTextColor(100),
    a.text(`Período: ${t.periodLabel}`, s / 2, r, { align: "center" }),
    (r += 7),
    a.text(
      `Gerado em: ${se(new Date(), "dd/MM/yyyy 'às' HH:mm", { locale: pe })}`,
      s / 2,
      r,
      { align: "center" }
    ),
    (r += 8),
    a.setDrawColor(200),
    a.line(15, r, s - 15, r),
    (r += 10),
    a.setFontSize(14),
    a.setFont("helvetica", "bold"),
    a.setTextColor(0),
    a.text("Resumo Financeiro", 15, r),
    (r += 8),
    a.setFontSize(11),
    a.setFont("helvetica", "normal");
  const m = r;
  a.setFillColor(245, 247, 250),
    a.roundedRect(15, m, s - 30, 30, 3, 3, "F"),
    (r += 8),
    a.text(`Total de Transações: ${t.revenues.length}`, 20, r),
    (r += 8),
    a.setFontSize(14),
    a.setFont("helvetica", "bold"),
    a.setTextColor(34, 197, 94),
    a.text(`Receita Total: R$ ${t.totalRevenue.toFixed(2)}`, 20, r),
    (r += 20),
    a.setFontSize(11),
    a.setFont("helvetica", "normal"),
    a.setTextColor(0),
    a.setDrawColor(200),
    a.line(15, r, s - 15, r),
    (r += 10),
    a.setFontSize(14),
    a.setFont("helvetica", "bold"),
    a.text("Detalhamento de Transações", 15, r),
    (r += 10),
    a.setFontSize(9),
    a.setFont("helvetica", "normal"),
    t.revenues.length === 0
      ? (a.setTextColor(150),
        a.text("Nenhuma receita encontrada no período selecionado.", 15, r))
      : (a.setFont("helvetica", "bold"),
        a.setFillColor(66, 102, 245),
        a.setTextColor(255),
        a.rect(15, r - 5, s - 30, 8, "F"),
        a.text("Data/Hora", 18, r),
        a.text("Cliente", 55, r),
        a.text("Plano", 120, r),
        a.text("Valor", s - 35, r),
        (r += 8),
        a.setFont("helvetica", "normal"),
        a.setTextColor(0),
        t.revenues.forEach((h, b) => {
          r > n - 30 &&
            (a.addPage(),
            (r = 20),
            a.setFont("helvetica", "bold"),
            a.setFillColor(66, 102, 245),
            a.setTextColor(255),
            a.rect(15, r - 5, s - 30, 8, "F"),
            a.text("Data/Hora", 18, r),
            a.text("Cliente", 55, r),
            a.text("Plano", 120, r),
            a.text("Valor", s - 35, r),
            (r += 8),
            a.setFont("helvetica", "normal"),
            a.setTextColor(0)),
            b % 2 === 0 &&
              (a.setFillColor(250, 250, 250),
              a.rect(15, r - 5, s - 30, 8, "F"));
          const P = se(new Date(h.created_at), "dd/MM/yy HH:mm", {
              locale: pe,
            }),
            j = h.payer_name || "N/A",
            u = h.metadata?.plan_name || "N/A",
            g = `R$ ${Number(h.amount).toFixed(2)}`;
          a.setFontSize(8),
            a.text(P, 18, r),
            a.text(j.substring(0, 25), 55, r),
            a.text(u.substring(0, 20), 120, r),
            a.setFont("helvetica", "bold"),
            a.setTextColor(34, 197, 94),
            a.text(g, s - 35, r),
            a.setFont("helvetica", "normal"),
            a.setTextColor(0),
            (r += 8);
        }));
  const x = n - 15;
  a.setFontSize(8),
    a.setTextColor(150),
    a.text(
      "Relatório gerado automaticamente pelo Sistema Tech OS Pro",
      s / 2,
      x,
      { align: "center" }
    ),
    a.text(`Página ${a.internal.pages.length - 1}`, s / 2, x + 5, {
      align: "center",
    });
  const d = `receitas_revendedor_${se(new Date(), "ddMMyyy_HHmmss")}.pdf`;
  a.save(d);
}
function Xt() {
  const { toast: t } = ee(),
    [a, s] = i.useState([]),
    [n, r] = i.useState([]),
    [m, x] = i.useState(!0),
    [d, h] = i.useState("all"),
    [b, P] = i.useState({ open: !1, revenueId: null }),
    [j, u] = i.useState(!1),
    [g, S] = i.useState(null);
  i.useEffect(() => {
    N();
    const o = _.channel("reseller_revenues")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "payments" },
        () => {
          N();
        }
      )
      .subscribe();
    return () => {
      _.removeChannel(o);
    };
  }, []),
    i.useEffect(() => {
      y();
    }, [d, n]);
  const y = () => {
      const o = new Date();
      let p = [...n];
      if (d === "day") {
        const C = new Date(o.setHours(0, 0, 0, 0));
        p = n.filter((A) => new Date(A.created_at) >= C);
      } else if (d === "week") {
        const C = new Date(o);
        C.setDate(C.getDate() - 7),
          (p = n.filter((A) => new Date(A.created_at) >= C));
      } else if (d === "month") {
        const C = new Date(o);
        C.setMonth(C.getMonth() - 1),
          (p = n.filter((A) => new Date(A.created_at) >= C));
      }
      s(p);
    },
    N = async () => {
      try {
        const {
          data: { user: o },
        } = await _.auth.getUser();
        if (!o) return;
        const { data: p, error: C } = await _.from("payments")
          .select("*")
          .eq("user_id", o.id)
          .eq("status", "approved")
          .order("created_at", { ascending: !1 });
        if (C) throw C;
        const A = (p || []).filter(
          (E) => E.metadata?.created_by_reseller === !0
        );
        r(A), s(A);
      } catch {
        t({
          title: "Erro ao carregar receitas",
          description: "Não foi possível carregar as receitas.",
          variant: "destructive",
        });
      } finally {
        x(!1);
      }
    },
    l = async () => {
      if (b.revenueId)
        try {
          const { error: o } = await _.from("payments")
            .delete()
            .eq("id", b.revenueId);
          if (o) throw o;
          t({
            title: "Receita excluída",
            description: "A receita foi removida com sucesso.",
          }),
            P({ open: !1, revenueId: null }),
            N();
        } catch {
          t({
            title: "Erro ao excluir",
            description: "Não foi possível excluir a receita.",
            variant: "destructive",
          });
        }
    },
    v = async () => {
      try {
        const {
          data: { user: o },
        } = await _.auth.getUser();
        if (!o) return;
        const { data: p } = await _.from("profiles")
          .select("name")
          .eq("user_id", o.id)
          .single();
        S({
          revenues: a,
          periodLabel: {
            all: "Todo o Período",
            day: "Hoje",
            week: "Última Semana",
            month: "Último Mês",
          }[d],
          totalRevenue: c,
          resellerName: p?.name || "Revendedor",
        }),
          u(!0);
      } catch {
        t({
          title: "Erro ao preparar PDF",
          description: "Ocorreu um erro ao preparar o relatório.",
          variant: "destructive",
        });
      }
    },
    f = async (o) => {
      if (g)
        try {
          await Gt({ ...g, currency: o }),
            t({
              title: "PDF gerado com sucesso!",
              description: "O relatório foi baixado automaticamente.",
            }),
            S(null);
        } catch {
          t({
            title: "Erro ao gerar PDF",
            description: "Ocorreu um erro ao exportar o relatório.",
            variant: "destructive",
          });
        }
    };
  if (m)
    return e.jsx("div", {
      className: "flex items-center justify-center py-12",
      children: e.jsx("div", {
        className:
          "w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin",
      }),
    });
  const c = a.reduce((o, p) => o + Number(p.amount), 0);
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsx(D, {
        className: "border-2",
        children: e.jsx(R, {
          className: "p-4",
          children: e.jsxs("div", {
            className:
              "flex flex-col md:flex-row items-start md:items-center justify-between gap-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(Wa, { className: "h-5 w-5 text-primary" }),
                  e.jsx("span", {
                    className: "font-medium",
                    children: "Filtrar por Período:",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-2 w-full md:w-auto",
                children: [
                  e.jsxs(Be, {
                    value: d,
                    onValueChange: (o) => h(o),
                    children: [
                      e.jsx(qe, {
                        className: "w-full md:w-48",
                        children: e.jsx(We, {}),
                      }),
                      e.jsxs(Ve, {
                        children: [
                          e.jsx(H, {
                            value: "all",
                            children: "Todo o Período",
                          }),
                          e.jsx(H, { value: "day", children: "Hoje" }),
                          e.jsx(H, {
                            value: "week",
                            children: "Última Semana",
                          }),
                          e.jsx(H, { value: "month", children: "Último Mês" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs(U, {
                    onClick: v,
                    variant: "default",
                    className: "gap-2",
                    children: [
                      e.jsx(Va, { className: "h-4 w-4" }),
                      "Exportar PDF",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsxs(D, {
        className:
          "border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10",
        children: [
          e.jsxs(F, {
            children: [
              e.jsxs(L, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(ae, { className: "h-6 w-6 text-primary" }),
                  "Receita Total",
                ],
              }),
              e.jsx(K, {
                children: "Receitas geradas através de vendas de planos",
              }),
            ],
          }),
          e.jsxs(R, {
            children: [
              e.jsxs("div", {
                className: "text-4xl font-bold text-primary",
                children: ["R$ ", c.toFixed(2)],
              }),
              e.jsxs("p", {
                className: "text-sm text-muted-foreground mt-2",
                children: [a.length, " ", a.length === 1 ? "venda" : "vendas"],
              }),
            ],
          }),
        ],
      }),
      e.jsxs(D, {
        className: "border-2",
        children: [
          e.jsxs(F, {
            children: [
              e.jsx(L, { children: "Histórico de Receitas" }),
              e.jsx(K, {
                children: "Todas as receitas geradas pela venda de planos",
              }),
            ],
          }),
          e.jsx(R, {
            children:
              a.length === 0
                ? e.jsxs("div", {
                    className: "text-center py-12 text-muted-foreground",
                    children: [
                      e.jsx(ae, {
                        className: "h-12 w-12 mx-auto mb-4 opacity-20",
                      }),
                      e.jsxs("p", {
                        children: [
                          "Nenhuma receita gerada ",
                          d !== "all" ? "neste período" : "ainda",
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-sm mt-2",
                        children:
                          d !== "all"
                            ? "Tente alterar o filtro de período"
                            : "Venda planos para começar a gerar receitas",
                      }),
                    ],
                  })
                : e.jsx("div", {
                    className: "space-y-4",
                    children: a.map((o) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-all bg-card",
                          children: [
                            e.jsxs("div", {
                              className: "flex-1 space-y-2",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(Ha, {
                                      className: "h-4 w-4 text-primary",
                                    }),
                                    e.jsx("span", {
                                      className: "font-semibold",
                                      children: o.payer_name,
                                    }),
                                    e.jsxs("span", {
                                      className:
                                        "text-sm text-muted-foreground",
                                      children: ["(", o.payer_email, ")"],
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex items-center gap-4 text-sm text-muted-foreground",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        e.jsx(je, { className: "h-3 w-3" }),
                                        se(
                                          new Date(o.created_at),
                                          "dd/MM/yyyy 'às' HH:mm",
                                          { locale: pe }
                                        ),
                                      ],
                                    }),
                                    o.metadata?.plan_name &&
                                      e.jsxs("div", {
                                        className: "flex items-center gap-1",
                                        children: [
                                          e.jsx(Ka, { className: "h-3 w-3" }),
                                          "Plano: ",
                                          o.metadata.plan_name,
                                        ],
                                      }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children: o.description,
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                e.jsxs("div", {
                                  className: "text-right",
                                  children: [
                                    e.jsxs("div", {
                                      className:
                                        "text-2xl font-bold text-green-600 dark:text-green-400",
                                      children: [
                                        "R$ ",
                                        Number(o.amount).toFixed(2),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: "Receita",
                                    }),
                                  ],
                                }),
                                e.jsx(U, {
                                  variant: "ghost",
                                  size: "icon",
                                  onClick: () =>
                                    P({ open: !0, revenueId: o.id }),
                                  className:
                                    "text-destructive hover:text-destructive hover:bg-destructive/10",
                                  children: e.jsx(Ga, { className: "h-4 w-4" }),
                                }),
                              ],
                            }),
                          ],
                        },
                        o.id
                      )
                    ),
                  }),
          }),
        ],
      }),
      e.jsx(Xa, {
        open: b.open,
        onOpenChange: (o) => !o && P({ open: !1, revenueId: null }),
        children: e.jsxs(Ya, {
          children: [
            e.jsxs(Qa, {
              children: [
                e.jsx(Za, { children: "Excluir Receita?" }),
                e.jsx(Ja, {
                  children:
                    "Esta ação não pode ser desfeita. A receita será removida permanentemente do sistema.",
                }),
              ],
            }),
            e.jsxs(et, {
              children: [
                e.jsx(at, { children: "Cancelar" }),
                e.jsx(tt, {
                  onClick: l,
                  className:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                  children: "Excluir",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(pt, { open: j, onOpenChange: u, onConfirm: f }),
    ],
  });
}
function Yt() {
  const { toast: t } = ee(),
    [a, s] = i.useState(!1);
  i.useState(!1);
  const [n, r] = i.useState(!1),
    [m, x] = i.useState({ primaryColor: "#6366f1", logoUrl: "" }),
    [d, h] = i.useState("light");
  i.useEffect(() => {
    g();
    const y = localStorage.getItem("reseller-theme");
    y && (h(y), b(y));
  }, []);
  const b = (y) => {
      const N = document.documentElement;
      y === "dark" ? N.classList.add("dark") : N.classList.remove("dark");
    },
    P = (y) => {
      h(y),
        b(y),
        localStorage.setItem("reseller-theme", y),
        t({
          title: "Tema atualizado!",
          description: `Tema ${
            y === "dark" ? "escuro" : "claro"
          } aplicado com sucesso.`,
        });
    },
    j = (y) => {
      x({ ...m, primaryColor: y });
      const N = document.documentElement,
        l = u(y);
      N.style.setProperty("--primary", l),
        localStorage.setItem("reseller-primary-color", y),
        t({
          title: "Cor atualizada!",
          description: "A cor foi aplicada em tempo real.",
        });
    },
    u = (y) => {
      const N = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(y);
      if (!N) return "221.2 83.2% 53.3%";
      let l = parseInt(N[1], 16) / 255,
        v = parseInt(N[2], 16) / 255,
        f = parseInt(N[3], 16) / 255;
      const c = Math.max(l, v, f),
        o = Math.min(l, v, f);
      let p = 0,
        C = 0,
        A = (c + o) / 2;
      if (c !== o) {
        const E = c - o;
        switch (((C = A > 0.5 ? E / (2 - c - o) : E / (c + o)), c)) {
          case l:
            p = ((v - f) / E + (v < f ? 6 : 0)) / 6;
            break;
          case v:
            p = ((f - l) / E + 2) / 6;
            break;
          case f:
            p = ((l - v) / E + 4) / 6;
            break;
        }
      }
      return (
        (p = Math.round(p * 360)),
        (C = Math.round(C * 100)),
        (A = Math.round(A * 100)),
        `${p} ${C}% ${A}%`
      );
    },
    g = async () => {
      try {
        s(!0);
        const {
          data: { user: y },
        } = await _.auth.getUser();
        if (!y) return;
        const { data: N, error: l } = await _.from("user_settings")
          .select("company_logo")
          .eq("user_id", y.id)
          .maybeSingle();
        if (l && l.code !== "PGRST116") throw l;
        N?.company_logo && x((f) => ({ ...f, logoUrl: N.company_logo }));
        const v = localStorage.getItem("reseller-primary-color");
        if (v) {
          x((o) => ({ ...o, primaryColor: v }));
          const f = document.documentElement,
            c = u(v);
          f.style.setProperty("--primary", c);
        }
      } catch {
      } finally {
        s(!1);
      }
    },
    S = async (y) => {
      const N = y.target.files?.[0];
      if (N) {
        if (!N.type.startsWith("image/")) {
          t({
            title: "Arquivo inválido",
            description: "Por favor, envie uma imagem válida.",
            variant: "destructive",
          });
          return;
        }
        if (N.size > 2 * 1024 * 1024) {
          t({
            title: "Arquivo muito grande",
            description: "A imagem deve ter no máximo 2MB.",
            variant: "destructive",
          });
          return;
        }
        try {
          r(!0);
          const {
            data: { user: l },
          } = await _.auth.getUser();
          if (!l) return;
          const v = N.name.split(".").pop(),
            c = `reseller-logos/${`${l.id}-${Date.now()}.${v}`}`,
            { error: o } = await _.storage
              .from("avatars")
              .upload(c, N, { upsert: !0 });
          if (o) throw o;
          const {
              data: { publicUrl: p },
            } = _.storage.from("avatars").getPublicUrl(c),
            { error: C } = await _.from("user_settings").upsert(
              { user_id: l.id, company_logo: p },
              { onConflict: "user_id" }
            );
          if (C) throw C;
          x((A) => ({ ...A, logoUrl: p })),
            t({
              title: "Logo atualizada!",
              description:
                "A logo foi enviada com sucesso e aparecerá no topo do painel.",
            });
        } catch (l) {
          t({
            title: "Erro ao fazer upload",
            description: l.message,
            variant: "destructive",
          });
        } finally {
          r(!1);
        }
      }
    };
  return a
    ? e.jsx("div", {
        className: "flex items-center justify-center py-12",
        children: e.jsx(me, { className: "w-8 h-8 animate-spin text-primary" }),
      })
    : e.jsxs("div", {
        className: "space-y-6",
        children: [
          e.jsxs(D, {
            className: "p-6 bg-card border-border",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                  e.jsx("div", {
                    className:
                      "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center",
                    children: e.jsx(le, { className: "w-6 h-6 text-primary" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "font-semibold text-lg",
                        children: "Tema e Aparência",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Personalize as cores e o tema do seu painel",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(M, {
                        htmlFor: "theme",
                        children: "Tema do Painel",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          e.jsx(U, {
                            variant: d === "light" ? "default" : "outline",
                            onClick: () => P("light"),
                            className: "flex-1",
                            children: "☀️ Claro",
                          }),
                          e.jsx(U, {
                            variant: d === "dark" ? "default" : "outline",
                            onClick: () => P("dark"),
                            className: "flex-1",
                            children: "🌙 Escuro",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(M, {
                        htmlFor: "primaryColor",
                        children: "Cor Principal do Painel",
                      }),
                      e.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          e.jsx(z, {
                            id: "primaryColor",
                            type: "color",
                            value: m.primaryColor,
                            onChange: (y) => j(y.target.value),
                            className: "w-20 h-10 p-1 cursor-pointer",
                          }),
                          e.jsx(z, {
                            value: m.primaryColor,
                            onChange: (y) => j(y.target.value),
                            placeholder: "#6366f1",
                            className: "flex-1",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children:
                          "A cor será aplicada em tempo real ao seu painel",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(D, {
            className: "p-6 bg-card border-border",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 mb-6",
                children: [
                  e.jsx("div", {
                    className:
                      "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center",
                    children: e.jsx(st, { className: "w-6 h-6 text-primary" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "font-semibold text-lg",
                        children: "Logo da Empresa",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Adicione a logo da sua empresa no painel",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  m.logoUrl &&
                    e.jsx("div", {
                      className:
                        "flex justify-center p-4 bg-secondary/20 rounded-lg border border-border",
                      children: e.jsx("img", {
                        src: m.logoUrl,
                        alt: "Logo",
                        className: "max-h-24 max-w-full object-contain",
                      }),
                    }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(M, { htmlFor: "logo", children: "Upload da Logo" }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(z, {
                            id: "logo",
                            type: "file",
                            accept: "image/*",
                            onChange: S,
                            disabled: n,
                            className: "flex-1",
                          }),
                          n &&
                            e.jsx(me, {
                              className: "w-4 h-4 animate-spin text-primary",
                            }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "p-3 rounded-lg bg-amber-500/10 border border-amber-500/30",
                        children: e.jsx("p", {
                          className:
                            "text-xs text-amber-700 dark:text-amber-400 font-medium",
                          children:
                            "⚠️ Importante: Envie a logo sem fundo para melhor aparência",
                        }),
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children:
                          "A logo aparecerá no topo do seu painel de revendedor. Tamanho máximo: 2MB",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(D, {
            className: "p-6 bg-card border-border",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 mb-4",
                children: [
                  e.jsx(le, { className: "w-5 h-5 text-primary" }),
                  e.jsx("h3", {
                    className: "font-semibold text-lg",
                    children: "Informações",
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "p-4 rounded-lg bg-secondary/30 border border-border/50",
                children: e.jsxs("p", {
                  className: "text-sm",
                  children: [
                    "✅ Personalize o visual do seu painel",
                    e.jsx("br", {}),
                    "✅ Tema claro ou escuro",
                    e.jsx("br", {}),
                    "✅ Cores personalizadas",
                    e.jsx("br", {}),
                    "✅ Logo da sua empresa no topo",
                  ],
                }),
              }),
            ],
          }),
        ],
      });
}
const Re = {
    expired: (t, a) => `Olá ${t.name}! 👋

Notei que seu acesso ao Tech OS PRO expirou. Para não perder seus dados e voltar a usar todas as funcionalidades, renove agora seu plano *${
      t.plan_name
    }* por apenas R$ ${t.plan_price.toFixed(2)}.

Posso reativar sua conta hoje mesmo. Me chama aqui! 🚀

— ${a}`,
    today: (t, a) => `Olá ${t.name}! ⏰

Seu plano *${
      t.plan_name
    }* expira HOJE. Para manter seu sistema funcionando sem interrupções, renove agora por R$ ${t.plan_price.toFixed(
      2
    )}.

Quer que eu te envie o PIX agora?

— ${a}`,
    soon: (t, a) => `Olá ${t.name}! 📅

Seu plano *${t.plan_name}* vence em ${
      t.daysLeft
    } dia(s). Garante já a renovação por R$ ${t.plan_price.toFixed(
      2
    )} e continue sem interrupção.

Posso adiantar o pagamento agora?

— ${a}`,
    week: (t, a) => `Olá ${t.name}! 🙌

Seu plano *${t.plan_name}* vence em ${
      t.daysLeft
    } dias. Renovando antecipado você evita qualquer corte de acesso.

Valor: R$ ${t.plan_price.toFixed(2)}. Posso preparar a renovação?

— ${a}`,
  },
  Ie = {
    expired: {
      label: "Expirado",
      color: "bg-red-500/10 text-red-500 border-red-500/30",
      icon: Ke,
    },
    today: {
      label: "Vence hoje",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/30",
      icon: Ge,
    },
    soon: {
      label: "≤ 3 dias",
      color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
      icon: he,
    },
    week: {
      label: "≤ 7 dias",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/30",
      icon: he,
    },
  };
function Qt() {
  const { toast: t } = ee(),
    [a, s] = i.useState([]),
    [n, r] = i.useState("Seu Revendedor"),
    [m, x] = i.useState(!0),
    [d, h] = i.useState(""),
    [b, P] = i.useState("all");
  i.useEffect(() => {
    j();
    const l = _.channel("reseller-renewal-center")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "user_subscriptions" },
        () => j()
      )
      .subscribe();
    return () => {
      _.removeChannel(l);
    };
  }, []);
  const j = async () => {
      try {
        x(!0);
        const {
          data: { user: l },
        } = await _.auth.getUser();
        if (!l) return;
        const { data: v } = await _.from("profiles")
          .select("name")
          .eq("user_id", l.id)
          .maybeSingle();
        v?.name && r(v.name);
        const { data: f } = await _.from("reseller_logs")
            .select("target_user_id, metadata")
            .eq("reseller_id", l.id)
            .eq("action_type", "user_creation"),
          c = (f || []).map((w) => w.target_user_id).filter(Boolean);
        if (!c.length) {
          s([]);
          return;
        }
        const o = new Map();
        (f || []).forEach((w) => o.set(w.target_user_id, w.metadata || {}));
        const [{ data: p }, { data: C }, { data: A }] = await Promise.all([
            _.from("profiles").select("user_id, name, email").in("user_id", c),
            _.from("user_subscriptions")
              .select(
                "user_id, expiration_date, is_active, plan:plans(name, price)"
              )
              .in("user_id", c),
            _.from("user_settings")
              .select("user_id, company_phone")
              .in("user_id", c),
          ]),
          E = new Date(),
          k = (C || [])
            .map((w) => {
              const I = p?.find((oe) => oe.user_id === w.user_id),
                T = A?.find((oe) => oe.user_id === w.user_id),
                $ = o.get(w.user_id) || {},
                O = new Date(w.expiration_date).getTime() - E.getTime(),
                q = Math.ceil(O / (1e3 * 60 * 60 * 24));
              let V = null;
              return (
                q < 0
                  ? (V = "expired")
                  : q === 0
                  ? (V = "today")
                  : q <= 3
                  ? (V = "soon")
                  : q <= 7 && (V = "week"),
                V
                  ? {
                      user_id: w.user_id,
                      name: I?.name || $.target_user_name || "Cliente",
                      email: I?.email || $.target_user_email || "",
                      phone: T?.company_phone || $.phone || null,
                      expiration_date: w.expiration_date,
                      plan_name: w.plan?.name || "Plano",
                      plan_price: Number(w.plan?.price || 0),
                      user_type: $.user_type || $.type || "normal",
                      daysLeft: q,
                      bucket: V,
                      potential: Number(w.plan?.price || 0),
                    }
                  : null
              );
            })
            .filter(Boolean);
        k.sort((w, I) => w.daysLeft - I.daysLeft), s(k);
      } catch (l) {
        t({
          title: "Erro ao carregar",
          description: l.message,
          variant: "destructive",
        });
      } finally {
        x(!1);
      }
    },
    u = i.useMemo(() => {
      const l = d.toLowerCase();
      return a.filter(
        (v) =>
          (b === "all" || v.bucket === b) &&
          (!l ||
            v.name.toLowerCase().includes(l) ||
            v.email.toLowerCase().includes(l))
      );
    }, [a, d, b]),
    g = i.useMemo(
      () => ({
        all: a.length,
        expired: a.filter((l) => l.bucket === "expired").length,
        today: a.filter((l) => l.bucket === "today").length,
        soon: a.filter((l) => l.bucket === "soon").length,
        week: a.filter((l) => l.bucket === "week").length,
        potential: a.reduce((l, v) => l + v.potential, 0),
      }),
      [a]
    ),
    S = (l) => (l || "").replace(/\D/g, ""),
    y = (l) => {
      const v = S(l.phone || ""),
        f = encodeURIComponent(Re[l.bucket](l, n));
      if (!v) {
        navigator.clipboard.writeText(decodeURIComponent(f)),
          t({
            title: "Mensagem copiada",
            description:
              "Cliente sem telefone cadastrado. Mensagem copiada para colar no WhatsApp.",
          });
        return;
      }
      window.open(`https://wa.me/${v}?text=${f}`, "_blank");
    },
    N = (l) => {
      navigator.clipboard.writeText(Re[l.bucket](l, n)),
        t({
          title: "Mensagem copiada!",
          description: "Cole no WhatsApp ou e-mail.",
        });
    };
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        className: "grid grid-cols-2 md:grid-cols-5 gap-3",
        children: [
          e.jsx(D, {
            className:
              "border-2 hover:border-primary/50 transition cursor-pointer",
            onClick: () => P("all"),
            children: e.jsx(R, {
              className: "p-4",
              children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Total",
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-bold",
                        children: g.all,
                      }),
                    ],
                  }),
                  e.jsx(xe, { className: "h-5 w-5 text-primary" }),
                ],
              }),
            }),
          }),
          e.jsx(D, {
            className: "border-2 hover:border-red-500/50 cursor-pointer",
            onClick: () => P("expired"),
            children: e.jsx(R, {
              className: "p-4",
              children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Expirados",
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-bold text-red-500",
                        children: g.expired,
                      }),
                    ],
                  }),
                  e.jsx(Ke, { className: "h-5 w-5 text-red-500" }),
                ],
              }),
            }),
          }),
          e.jsx(D, {
            className: "border-2 hover:border-orange-500/50 cursor-pointer",
            onClick: () => P("today"),
            children: e.jsx(R, {
              className: "p-4",
              children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Hoje",
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-bold text-orange-500",
                        children: g.today,
                      }),
                    ],
                  }),
                  e.jsx(Ge, { className: "h-5 w-5 text-orange-500" }),
                ],
              }),
            }),
          }),
          e.jsx(D, {
            className: "border-2 hover:border-yellow-500/50 cursor-pointer",
            onClick: () => P("soon"),
            children: e.jsx(R, {
              className: "p-4",
              children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "≤ 3 dias",
                      }),
                      e.jsx("p", {
                        className: "text-2xl font-bold text-yellow-600",
                        children: g.soon,
                      }),
                    ],
                  }),
                  e.jsx(he, { className: "h-5 w-5 text-yellow-600" }),
                ],
              }),
            }),
          }),
          e.jsx(D, {
            className:
              "border-2 border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent",
            children: e.jsx(R, {
              className: "p-4",
              children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: "Potencial",
                      }),
                      e.jsxs("p", {
                        className: "text-2xl font-bold text-green-600",
                        children: ["R$ ", g.potential.toFixed(2)],
                      }),
                    ],
                  }),
                  e.jsx(He, { className: "h-5 w-5 text-green-600" }),
                ],
              }),
            }),
          }),
        ],
      }),
      e.jsx(D, {
        className:
          "border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-transparent",
        children: e.jsxs(R, {
          className: "p-4 flex items-start gap-3",
          children: [
            e.jsx(xe, { className: "h-5 w-5 text-primary mt-0.5" }),
            e.jsxs("div", {
              className: "text-sm",
              children: [
                e.jsx("p", {
                  className: "font-semibold",
                  children: "Renovação Express",
                }),
                e.jsxs("p", {
                  className: "text-muted-foreground",
                  children: [
                    "Mensagens personalizadas geradas por IA + WhatsApp em 1 clique. Recupere até",
                    " ",
                    e.jsxs("span", {
                      className: "font-bold text-green-600",
                      children: ["R$ ", g.potential.toFixed(2)],
                    }),
                    " este mês.",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs("div", {
        className: "flex flex-col md:flex-row gap-3",
        children: [
          e.jsxs("div", {
            className: "relative flex-1",
            children: [
              e.jsx(ze, {
                className:
                  "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground",
              }),
              e.jsx(z, {
                placeholder: "Buscar cliente...",
                value: d,
                onChange: (l) => h(l.target.value),
                className: "pl-10",
              }),
            ],
          }),
          e.jsx("div", {
            className: "flex gap-2 flex-wrap",
            children: ["all", "expired", "today", "soon", "week"].map((l) =>
              e.jsx(
                U,
                {
                  size: "sm",
                  variant: b === l ? "default" : "outline",
                  onClick: () => P(l),
                  children: l === "all" ? "Todos" : Ie[l].label,
                },
                l
              )
            ),
          }),
        ],
      }),
      e.jsxs(D, {
        className: "border-2",
        children: [
          e.jsx(F, {
            className: "pb-3",
            children: e.jsxs(L, {
              className: "text-base",
              children: ["Clientes para acionar (", u.length, ")"],
            }),
          }),
          e.jsx(R, {
            className: "p-0",
            children: m
              ? e.jsx("p", {
                  className: "p-8 text-center text-muted-foreground text-sm",
                  children: "Carregando...",
                })
              : u.length === 0
              ? e.jsx("p", {
                  className: "p-8 text-center text-muted-foreground text-sm",
                  children: "🎉 Nenhum cliente precisando de renovação agora.",
                })
              : e.jsx("div", {
                  className: "divide-y",
                  children: u.map((l) => {
                    const v = Ie[l.bucket],
                      f = v.icon;
                    return e.jsxs(
                      "div",
                      {
                        className:
                          "flex flex-col md:flex-row md:items-center gap-3 p-4 hover:bg-muted/30 transition",
                        children: [
                          e.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [
                              e.jsxs("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                  e.jsx("span", {
                                    className: "font-semibold truncate",
                                    children: l.name,
                                  }),
                                  e.jsxs(W, {
                                    variant: "outline",
                                    className: v.color,
                                    children: [
                                      e.jsx(f, { className: "w-3 h-3 mr-1" }),
                                      v.label,
                                    ],
                                  }),
                                  e.jsx(W, {
                                    variant: "outline",
                                    className: "bg-primary/5",
                                    children: l.plan_name,
                                  }),
                                  l.user_type === "test" &&
                                    e.jsx(W, {
                                      variant: "secondary",
                                      className: "text-xs",
                                      children: "Teste",
                                    }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "text-xs text-muted-foreground mt-1 flex flex-wrap gap-x-3 gap-y-1",
                                children: [
                                  e.jsx("span", { children: l.email }),
                                  l.phone &&
                                    e.jsxs("span", {
                                      className: "flex items-center gap-1",
                                      children: [
                                        e.jsx(rt, { className: "w-3 h-3" }),
                                        l.phone,
                                      ],
                                    }),
                                  e.jsxs("span", {
                                    children: [
                                      "Vence: ",
                                      new Date(
                                        l.expiration_date
                                      ).toLocaleDateString("pt-BR"),
                                    ],
                                  }),
                                  e.jsxs("span", {
                                    className: "font-semibold text-green-600",
                                    children: ["R$ ", l.plan_price.toFixed(2)],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2 shrink-0",
                            children: [
                              e.jsx(U, {
                                size: "sm",
                                variant: "outline",
                                onClick: () => N(l),
                                title: "Copiar mensagem",
                                children: e.jsx(ve, { className: "w-4 h-4" }),
                              }),
                              e.jsxs(U, {
                                size: "sm",
                                className:
                                  "bg-green-600 hover:bg-green-700 text-white gap-2",
                                onClick: () => y(l),
                                children: [
                                  e.jsx(nt, { className: "w-4 h-4" }),
                                  "WhatsApp",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      l.user_id
                    );
                  }),
                }),
          }),
        ],
      }),
    ],
  });
}
function ts() {
  const { user: t } = lt(),
    a = it(),
    [s, n] = i.useState("stats"),
    [r, m] = i.useState({ users: 0, revenue: 0 }),
    [x, d] = i.useState(null),
    [h, b] = i.useState(null),
    [P, j] = i.useState(!1),
    u = (l) => {
      const v = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l);
      if (!v) return "221.2 83.2% 53.3%";
      let f = parseInt(v[1], 16) / 255,
        c = parseInt(v[2], 16) / 255,
        o = parseInt(v[3], 16) / 255;
      const p = Math.max(f, c, o),
        C = Math.min(f, c, o);
      let A = 0,
        E = 0,
        k = (p + C) / 2;
      if (p !== C) {
        const w = p - C;
        switch (((E = k > 0.5 ? w / (2 - p - C) : w / (p + C)), p)) {
          case f:
            A = ((c - o) / w + (c < o ? 6 : 0)) / 6;
            break;
          case c:
            A = ((o - f) / w + 2) / 6;
            break;
          case o:
            A = ((f - c) / w + 4) / 6;
            break;
        }
      }
      return (
        (A = Math.round(A * 360)),
        (E = Math.round(E * 100)),
        (k = Math.round(k * 100)),
        `${A} ${E}% ${k}%`
      );
    };
  i.useEffect(() => {
    const l = localStorage.getItem("reseller-theme");
    if (l) {
      const c = document.documentElement;
      l === "dark" ? c.classList.add("dark") : c.classList.remove("dark");
    }
    const v = localStorage.getItem("reseller-primary-color");
    if (v) {
      const c = document.documentElement,
        o = u(v);
      c.style.setProperty("--primary", o);
    }
    N(), g(), S();
    const f = _.channel("reseller-logo-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "user_settings",
          filter: `user_id=eq.${t?.id}`,
        },
        (c) => {
          c.new && "company_logo" in c.new && d(c.new.company_logo);
        }
      )
      .subscribe();
    return () => {
      _.removeChannel(f);
    };
  }, [t?.id]);
  const g = async () => {
      try {
        const {
          data: { user: l },
        } = await _.auth.getUser();
        if (!l) return;
        const { data: v, error: f } = await _.from("user_settings")
          .select("company_logo")
          .eq("user_id", l.id)
          .maybeSingle();
        if (f) return;
        v?.company_logo && d(v.company_logo);
      } catch {}
    },
    S = async () => {
      try {
        const {
          data: { user: l },
        } = await _.auth.getUser();
        if (!l) return;
        const { data: v, error: f } = await _.from("partners")
          .select("coupon_code")
          .eq("user_id", l.id)
          .maybeSingle();
        if (f) return;
        v?.coupon_code && b(v.coupon_code);
      } catch {}
    },
    y = () => {
      h &&
        (navigator.clipboard.writeText(h), j(!0), setTimeout(() => j(!1), 2e3));
    },
    N = async () => {
      try {
        const {
          data: { user: l },
        } = await _.auth.getUser();
        if (!l) return;
        const { data: v } = await _.from("reseller_logs")
            .select("metadata")
            .eq("reseller_id", l.id)
            .eq("action_type", "user_creation"),
          f = v?.filter((p) => p.metadata?.user_type !== "test").length || 0,
          { data: c } = await _.from("payments")
            .select("amount, metadata")
            .eq("user_id", l.id)
            .eq("status", "approved"),
          o =
            c?.reduce(
              (p, C) =>
                C.metadata?.created_by_reseller === !0
                  ? p + Number(C.amount)
                  : p,
              0
            ) || 0;
        m({ users: f, revenue: o });
      } catch {}
    };
  return e.jsx("div", {
    className:
      "min-h-screen bg-gradient-to-br from-background via-background to-primary/5",
    children: e.jsxs("div", {
      className: "container mx-auto py-8 px-4 max-w-7xl",
      children: [
        h &&
          e.jsx(D, {
            className:
              "mb-6 border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10",
            children: e.jsx(R, {
              className: "p-6",
              children: e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className:
                          "text-sm font-medium text-muted-foreground mb-1",
                        children: "Seu Cupom de Convite",
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          e.jsx("code", {
                            className:
                              "text-2xl font-bold font-mono bg-background/50 px-4 py-2 rounded-lg border-2",
                            children: h,
                          }),
                          e.jsx(U, {
                            variant: P ? "default" : "outline",
                            size: "lg",
                            onClick: y,
                            className: "gap-2 font-semibold",
                            children: P
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(de, { className: "w-4 h-4" }),
                                    "Copiado!",
                                  ],
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(ve, { className: "w-4 h-4" }),
                                    "Copiar Cupom",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "text-right",
                    children: [
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Compartilhe este cupom com seus clientes",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground mt-1",
                        children:
                          "Eles devem usar no checkout para gerar comissão",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        e.jsx("div", {
          className: "mb-8",
          children: e.jsxs("div", {
            className: "flex items-center justify-between mb-6",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  e.jsxs(U, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => a("/"),
                    className: "gap-2",
                    children: [
                      e.jsx(xt, { className: "w-4 h-4" }),
                      "Voltar ao Site",
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      x &&
                        e.jsx("div", {
                          className: "flex-shrink-0",
                          children: e.jsx("img", {
                            src: x,
                            alt: "Logo do Revendedor",
                            className: "h-20 w-auto object-contain rounded-md",
                          }),
                        }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("h1", {
                            className:
                              "text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent",
                            children: "Painel do Revendedor",
                          }),
                          e.jsx("p", {
                            className: "text-muted-foreground mt-2",
                            children:
                              "Central de gerenciamento de vendas e usuários",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-4",
                children: [
                  e.jsx(D, {
                    className: "border-2",
                    children: e.jsxs(R, {
                      className: "p-4 flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className: "p-2 rounded-lg bg-primary/10",
                          children: e.jsx(te, {
                            className: "w-5 h-5 text-primary",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Usuários",
                            }),
                            e.jsx("p", {
                              className: "text-xl font-bold",
                              children: r.users,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx(D, {
                    className: "border-2",
                    children: e.jsxs(R, {
                      className: "p-4 flex items-center gap-3",
                      children: [
                        e.jsx("div", {
                          className: "p-2 rounded-lg bg-green-500/10",
                          children: e.jsx(ae, {
                            className: "w-5 h-5 text-green-500",
                          }),
                        }),
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: "Receita",
                            }),
                            e.jsxs("p", {
                              className: "text-xl font-bold",
                              children: ["R$ ", r.revenue.toFixed(2)],
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
        }),
        e.jsxs(ot, {
          value: s,
          onValueChange: n,
          className: "space-y-6",
          children: [
            e.jsxs(ct, {
              className:
                "grid w-full grid-cols-3 md:grid-cols-6 lg:w-auto lg:inline-grid bg-card/50 backdrop-blur-sm border-2",
              children: [
                e.jsxs(Y, {
                  value: "stats",
                  className:
                    "gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  children: [e.jsx(dt, { className: "w-4 h-4" }), "Dashboard"],
                }),
                e.jsxs(Y, {
                  value: "renewals",
                  className:
                    "gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  children: [
                    e.jsx(xe, { className: "w-4 h-4" }),
                    "Renovação Express",
                  ],
                }),
                e.jsxs(Y, {
                  value: "revenues",
                  className:
                    "gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  children: [e.jsx(ae, { className: "w-4 h-4" }), "Receitas"],
                }),
                e.jsxs(Y, {
                  value: "create",
                  className:
                    "gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  children: [
                    e.jsx(ue, { className: "w-4 h-4" }),
                    "Criar Usuário",
                  ],
                }),
                e.jsxs(Y, {
                  value: "manage",
                  className:
                    "gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  children: [e.jsx(te, { className: "w-4 h-4" }), "Usuários"],
                }),
                e.jsxs(Y, {
                  value: "settings",
                  className:
                    "gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  children: [
                    e.jsx(le, { className: "w-4 h-4" }),
                    "Configurações",
                  ],
                }),
              ],
            }),
            e.jsx(Q, {
              value: "renewals",
              className: "space-y-6",
              children: e.jsx(Qt, {}),
            }),
            e.jsx(Q, {
              value: "stats",
              className: "space-y-6",
              children: e.jsx(Kt, {}),
            }),
            e.jsx(Q, {
              value: "revenues",
              className: "space-y-6",
              children: e.jsx(Xt, {}),
            }),
            e.jsx(Q, {
              value: "create",
              children: e.jsxs(D, {
                className: "border-2 shadow-lg",
                children: [
                  e.jsxs(F, {
                    className: "border-b bg-card/50",
                    children: [
                      e.jsxs(L, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(ue, { className: "w-5 h-5 text-primary" }),
                          "Criar Novo Usuário",
                        ],
                      }),
                      e.jsx(K, {
                        children:
                          "Adicione novos usuários ao sistema com planos personalizados",
                      }),
                    ],
                  }),
                  e.jsx(R, { className: "p-6", children: e.jsx(Vt, {}) }),
                ],
              }),
            }),
            e.jsx(Q, {
              value: "manage",
              children: e.jsxs(D, {
                className: "border-2 shadow-lg",
                children: [
                  e.jsxs(F, {
                    className: "border-b bg-card/50",
                    children: [
                      e.jsxs(L, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(te, { className: "w-5 h-5 text-primary" }),
                          "Gerenciar Usuários",
                        ],
                      }),
                      e.jsx(K, {
                        children:
                          "Visualize e gerencie todos os usuários criados por você",
                      }),
                    ],
                  }),
                  e.jsx(R, { className: "p-6", children: e.jsx(Ht, {}) }),
                ],
              }),
            }),
            e.jsx(Q, {
              value: "settings",
              children: e.jsxs(D, {
                className: "border-2 shadow-lg",
                children: [
                  e.jsxs(F, {
                    className: "border-b bg-card/50",
                    children: [
                      e.jsxs(L, {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(le, { className: "w-5 h-5 text-primary" }),
                          "Configurações do Painel",
                        ],
                      }),
                      e.jsx(K, {
                        children:
                          "Personalize a aparência do seu painel de revendedor",
                      }),
                    ],
                  }),
                  e.jsx(R, { className: "p-6", children: e.jsx(Yt, {}) }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
export { ts as default };
