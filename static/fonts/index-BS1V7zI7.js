import {
  cM as W,
  cN as L,
  cO as z,
  cP as y,
  cQ as k,
  r as U,
} from "./index-V8ZHCWL2.js";
function E() {
  return (
    (E = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            for (var t in r) ({}.hasOwnProperty.call(r, t) && (e[t] = r[t]));
          }
          return e;
        }),
    E.apply(null, arguments)
  );
}
function N(e, n) {
  if (e == null) return {};
  var r = {};
  for (var t in e)
    if ({}.hasOwnProperty.call(e, t)) {
      if (n.indexOf(t) !== -1) continue;
      r[t] = e[t];
    }
  return r;
}
function B(e, n) {
  if (e == null) return {};
  var r,
    t,
    i = N(e, n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (t = 0; t < a.length; t++)
      (r = a[t]),
        n.indexOf(r) === -1 &&
          {}.propertyIsEnumerable.call(e, r) &&
          (i[r] = e[r]);
  }
  return i;
}
function j(e, n, r) {
  return Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function F(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function D(e, n) {
  return (
    (D = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, t) {
          return (r.__proto__ = t), r;
        }),
    D(e, n)
  );
}
function A(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(n && n.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    n && D(e, n);
}
function C(e) {
  return (
    (C = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    C(e)
  );
}
function T() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (T = function () {
    return !!e;
  })();
}
function I(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function q(e, n) {
  if (n && (W(n) == "object" || typeof n == "function")) return n;
  if (n !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return I(e);
}
function V(e) {
  var n = T();
  return function () {
    var r,
      t = C(e);
    if (n) {
      var i = C(this).constructor;
      r = Reflect.construct(t, arguments, i);
    } else r = t.apply(this, arguments);
    return q(this, r);
  };
}
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */ function b(e, n, r) {
  (this.x = e), (this.y = n), (this.time = r || new Date().getTime());
}
b.prototype.velocityFrom = function (e) {
  return this.time !== e.time ? this.distanceTo(e) / (this.time - e.time) : 1;
};
b.prototype.distanceTo = function (e) {
  return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
};
b.prototype.equals = function (e) {
  return this.x === e.x && this.y === e.y && this.time === e.time;
};
function O(e, n, r, t) {
  (this.startPoint = e),
    (this.control1 = n),
    (this.control2 = r),
    (this.endPoint = t);
}
O.prototype.length = function () {
  for (var e = 10, n = 0, r = void 0, t = void 0, i = 0; i <= e; i += 1) {
    var a = i / e,
      h = this._point(
        a,
        this.startPoint.x,
        this.control1.x,
        this.control2.x,
        this.endPoint.x
      ),
      o = this._point(
        a,
        this.startPoint.y,
        this.control1.y,
        this.control2.y,
        this.endPoint.y
      );
    if (i > 0) {
      var c = h - r,
        s = o - t;
      n += Math.sqrt(c * c + s * s);
    }
    (r = h), (t = o);
  }
  return n;
};
O.prototype._point = function (e, n, r, t, i) {
  return (
    n * (1 - e) * (1 - e) * (1 - e) +
    3 * r * (1 - e) * (1 - e) * e +
    3 * t * (1 - e) * e * e +
    i * e * e * e
  );
};
function H(e, n, r) {
  var t,
    i,
    a,
    h = null,
    o = 0;
  r || (r = {});
  var c = function () {
    (o = r.leading === !1 ? 0 : Date.now()),
      (h = null),
      (a = e.apply(t, i)),
      h || (t = i = null);
  };
  return function () {
    var s = Date.now();
    !o && r.leading === !1 && (o = s);
    var u = n - (s - o);
    return (
      (t = this),
      (i = arguments),
      u <= 0 || u > n
        ? (h && (clearTimeout(h), (h = null)),
          (o = s),
          (a = e.apply(t, i)),
          h || (t = i = null))
        : !h && r.trailing !== !1 && (h = setTimeout(c, u)),
      a
    );
  };
}
function v(e, n) {
  var r = this,
    t = n || {};
  (this.velocityFilterWeight = t.velocityFilterWeight || 0.7),
    (this.minWidth = t.minWidth || 0.5),
    (this.maxWidth = t.maxWidth || 2.5),
    (this.throttle = "throttle" in t ? t.throttle : 16),
    (this.minDistance = "minDistance" in t ? t.minDistance : 5),
    this.throttle
      ? (this._strokeMoveUpdate = H(v.prototype._strokeUpdate, this.throttle))
      : (this._strokeMoveUpdate = v.prototype._strokeUpdate),
    (this.dotSize =
      t.dotSize ||
      function () {
        return (this.minWidth + this.maxWidth) / 2;
      }),
    (this.penColor = t.penColor || "black"),
    (this.backgroundColor = t.backgroundColor || "rgba(0,0,0,0)"),
    (this.onBegin = t.onBegin),
    (this.onEnd = t.onEnd),
    (this._canvas = e),
    (this._ctx = e.getContext("2d")),
    this.clear(),
    (this._handleMouseDown = function (i) {
      i.which === 1 && ((r._mouseButtonDown = !0), r._strokeBegin(i));
    }),
    (this._handleMouseMove = function (i) {
      r._mouseButtonDown && r._strokeMoveUpdate(i);
    }),
    (this._handleMouseUp = function (i) {
      i.which === 1 &&
        r._mouseButtonDown &&
        ((r._mouseButtonDown = !1), r._strokeEnd(i));
    }),
    (this._handleTouchStart = function (i) {
      if (i.targetTouches.length === 1) {
        var a = i.changedTouches[0];
        r._strokeBegin(a);
      }
    }),
    (this._handleTouchMove = function (i) {
      i.preventDefault();
      var a = i.targetTouches[0];
      r._strokeMoveUpdate(a);
    }),
    (this._handleTouchEnd = function (i) {
      var a = i.target === r._canvas;
      a && (i.preventDefault(), r._strokeEnd(i));
    }),
    this.on();
}
v.prototype.clear = function () {
  var e = this._ctx,
    n = this._canvas;
  (e.fillStyle = this.backgroundColor),
    e.clearRect(0, 0, n.width, n.height),
    e.fillRect(0, 0, n.width, n.height),
    (this._data = []),
    this._reset(),
    (this._isEmpty = !0);
};
v.prototype.fromDataURL = function (e) {
  var n = this,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = new Image(),
    i = r.ratio || window.devicePixelRatio || 1,
    a = r.width || this._canvas.width / i,
    h = r.height || this._canvas.height / i;
  this._reset(),
    (t.src = e),
    (t.onload = function () {
      n._ctx.drawImage(t, 0, 0, a, h);
    }),
    (this._isEmpty = !1);
};
v.prototype.toDataURL = function (e) {
  var n;
  switch (e) {
    case "image/svg+xml":
      return this._toSVG();
    default:
      for (
        var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), i = 1;
        i < r;
        i++
      )
        t[i - 1] = arguments[i];
      return (n = this._canvas).toDataURL.apply(n, [e].concat(t));
  }
};
v.prototype.on = function () {
  this._handleMouseEvents(), this._handleTouchEvents();
};
v.prototype.off = function () {
  this._canvas.removeEventListener("mousedown", this._handleMouseDown),
    this._canvas.removeEventListener("mousemove", this._handleMouseMove),
    document.removeEventListener("mouseup", this._handleMouseUp),
    this._canvas.removeEventListener("touchstart", this._handleTouchStart),
    this._canvas.removeEventListener("touchmove", this._handleTouchMove),
    this._canvas.removeEventListener("touchend", this._handleTouchEnd);
};
v.prototype.isEmpty = function () {
  return this._isEmpty;
};
v.prototype._strokeBegin = function (e) {
  this._data.push([]),
    this._reset(),
    this._strokeUpdate(e),
    typeof this.onBegin == "function" && this.onBegin(e);
};
v.prototype._strokeUpdate = function (e) {
  var n = e.clientX,
    r = e.clientY,
    t = this._createPoint(n, r),
    i = this._data[this._data.length - 1],
    a = i && i[i.length - 1],
    h = a && t.distanceTo(a) < this.minDistance;
  if (!(a && h)) {
    var o = this._addPoint(t),
      c = o.curve,
      s = o.widths;
    c && s && this._drawCurve(c, s.start, s.end),
      this._data[this._data.length - 1].push({
        x: t.x,
        y: t.y,
        time: t.time,
        color: this.penColor,
      });
  }
};
v.prototype._strokeEnd = function (e) {
  var n = this.points.length > 2,
    r = this.points[0];
  if ((!n && r && this._drawDot(r), r)) {
    var t = this._data[this._data.length - 1],
      i = t[t.length - 1];
    r.equals(i) ||
      t.push({ x: r.x, y: r.y, time: r.time, color: this.penColor });
  }
  typeof this.onEnd == "function" && this.onEnd(e);
};
v.prototype._handleMouseEvents = function () {
  (this._mouseButtonDown = !1),
    this._canvas.addEventListener("mousedown", this._handleMouseDown),
    this._canvas.addEventListener("mousemove", this._handleMouseMove),
    document.addEventListener("mouseup", this._handleMouseUp);
};
v.prototype._handleTouchEvents = function () {
  (this._canvas.style.msTouchAction = "none"),
    (this._canvas.style.touchAction = "none"),
    this._canvas.addEventListener("touchstart", this._handleTouchStart),
    this._canvas.addEventListener("touchmove", this._handleTouchMove),
    this._canvas.addEventListener("touchend", this._handleTouchEnd);
};
v.prototype._reset = function () {
  (this.points = []),
    (this._lastVelocity = 0),
    (this._lastWidth = (this.minWidth + this.maxWidth) / 2),
    (this._ctx.fillStyle = this.penColor);
};
v.prototype._createPoint = function (e, n, r) {
  var t = this._canvas.getBoundingClientRect();
  return new b(e - t.left, n - t.top, r || new Date().getTime());
};
v.prototype._addPoint = function (e) {
  var n = this.points,
    r = void 0;
  if ((n.push(e), n.length > 2)) {
    n.length === 3 && n.unshift(n[0]),
      (r = this._calculateCurveControlPoints(n[0], n[1], n[2]));
    var t = r.c2;
    r = this._calculateCurveControlPoints(n[1], n[2], n[3]);
    var i = r.c1,
      a = new O(n[1], t, i, n[2]),
      h = this._calculateCurveWidths(a);
    return n.shift(), { curve: a, widths: h };
  }
  return {};
};
v.prototype._calculateCurveControlPoints = function (e, n, r) {
  var t = e.x - n.x,
    i = e.y - n.y,
    a = n.x - r.x,
    h = n.y - r.y,
    o = { x: (e.x + n.x) / 2, y: (e.y + n.y) / 2 },
    c = { x: (n.x + r.x) / 2, y: (n.y + r.y) / 2 },
    s = Math.sqrt(t * t + i * i),
    u = Math.sqrt(a * a + h * h),
    l = o.x - c.x,
    d = o.y - c.y,
    f = u / (s + u),
    _ = { x: c.x + l * f, y: c.y + d * f },
    p = n.x - _.x,
    m = n.y - _.y;
  return { c1: new b(o.x + p, o.y + m), c2: new b(c.x + p, c.y + m) };
};
v.prototype._calculateCurveWidths = function (e) {
  var n = e.startPoint,
    r = e.endPoint,
    t = { start: null, end: null },
    i =
      this.velocityFilterWeight * r.velocityFrom(n) +
      (1 - this.velocityFilterWeight) * this._lastVelocity,
    a = this._strokeWidth(i);
  return (
    (t.start = this._lastWidth),
    (t.end = a),
    (this._lastVelocity = i),
    (this._lastWidth = a),
    t
  );
};
v.prototype._strokeWidth = function (e) {
  return Math.max(this.maxWidth / (e + 1), this.minWidth);
};
v.prototype._drawPoint = function (e, n, r) {
  var t = this._ctx;
  t.moveTo(e, n), t.arc(e, n, r, 0, 2 * Math.PI, !1), (this._isEmpty = !1);
};
v.prototype._drawCurve = function (e, n, r) {
  var t = this._ctx,
    i = r - n,
    a = Math.floor(e.length());
  t.beginPath();
  for (var h = 0; h < a; h += 1) {
    var o = h / a,
      c = o * o,
      s = c * o,
      u = 1 - o,
      l = u * u,
      d = l * u,
      f = d * e.startPoint.x;
    (f += 3 * l * o * e.control1.x),
      (f += 3 * u * c * e.control2.x),
      (f += s * e.endPoint.x);
    var _ = d * e.startPoint.y;
    (_ += 3 * l * o * e.control1.y),
      (_ += 3 * u * c * e.control2.y),
      (_ += s * e.endPoint.y);
    var p = n + s * i;
    this._drawPoint(f, _, p);
  }
  t.closePath(), t.fill();
};
v.prototype._drawDot = function (e) {
  var n = this._ctx,
    r = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
  n.beginPath(), this._drawPoint(e.x, e.y, r), n.closePath(), n.fill();
};
v.prototype._fromData = function (e, n, r) {
  for (var t = 0; t < e.length; t += 1) {
    var i = e[t];
    if (i.length > 1)
      for (var a = 0; a < i.length; a += 1) {
        var h = i[a],
          o = new b(h.x, h.y, h.time),
          c = h.color;
        if (a === 0) (this.penColor = c), this._reset(), this._addPoint(o);
        else if (a !== i.length - 1) {
          var s = this._addPoint(o),
            u = s.curve,
            l = s.widths;
          u && l && n(u, l, c);
        }
      }
    else {
      this._reset();
      var d = i[0];
      r(d);
    }
  }
};
v.prototype._toSVG = function () {
  var e = this,
    n = this._data,
    r = this._canvas,
    t = Math.max(window.devicePixelRatio || 1, 1),
    i = 0,
    a = 0,
    h = r.width / t,
    o = r.height / t,
    c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  c.setAttributeNS(null, "width", r.width),
    c.setAttributeNS(null, "height", r.height),
    this._fromData(
      n,
      function (g, x, P) {
        var w = document.createElement("path");
        if (
          !isNaN(g.control1.x) &&
          !isNaN(g.control1.y) &&
          !isNaN(g.control2.x) &&
          !isNaN(g.control2.y)
        ) {
          var R =
            "M " +
            g.startPoint.x.toFixed(3) +
            "," +
            g.startPoint.y.toFixed(3) +
            " " +
            ("C " +
              g.control1.x.toFixed(3) +
              "," +
              g.control1.y.toFixed(3) +
              " ") +
            (g.control2.x.toFixed(3) + "," + g.control2.y.toFixed(3) + " ") +
            (g.endPoint.x.toFixed(3) + "," + g.endPoint.y.toFixed(3));
          w.setAttribute("d", R),
            w.setAttribute("stroke-width", (x.end * 2.25).toFixed(3)),
            w.setAttribute("stroke", P),
            w.setAttribute("fill", "none"),
            w.setAttribute("stroke-linecap", "round"),
            c.appendChild(w);
        }
      },
      function (g) {
        var x = document.createElement("circle"),
          P = typeof e.dotSize == "function" ? e.dotSize() : e.dotSize;
        x.setAttribute("r", P),
          x.setAttribute("cx", g.x),
          x.setAttribute("cy", g.y),
          x.setAttribute("fill", g.color),
          c.appendChild(x);
      }
    );
  var s = "data:image/svg+xml;base64,",
    u =
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
      (' viewBox="' + i + " " + a + " " + h + " " + o + '"') +
      (' width="' + h + '"') +
      (' height="' + o + '"') +
      ">",
    l = c.innerHTML;
  if (l === void 0) {
    var d = document.createElement("dummy"),
      f = c.childNodes;
    d.innerHTML = "";
    for (var _ = 0; _ < f.length; _ += 1) d.appendChild(f[_].cloneNode(!0));
    l = d.innerHTML;
  }
  var p = "</svg>",
    m = u + l + p;
  return s + btoa(m);
};
v.prototype.fromData = function (e) {
  var n = this;
  this.clear(),
    this._fromData(
      e,
      function (r, t) {
        return n._drawCurve(r, t.start, t.end);
      },
      function (r) {
        return n._drawDot(r);
      }
    ),
    (this._data = e);
};
v.prototype.toData = function () {
  return this._data;
};
var S = { exports: {} };
(function (e, n) {
  (function (r, t) {
    e.exports = t();
  })(L, function () {
    return (function (r) {
      function t(a) {
        if (i[a]) return i[a].exports;
        var h = (i[a] = { exports: {}, id: a, loaded: !1 });
        return (
          r[a].call(h.exports, h, h.exports, t), (h.loaded = !0), h.exports
        );
      }
      var i = {};
      return (t.m = r), (t.c = i), (t.p = ""), t(0);
    })([
      function (r, t) {
        function i(s) {
          var u = s.getContext("2d"),
            l = s.width,
            d = s.height,
            f = u.getImageData(0, 0, l, d).data,
            _ = o(!0, l, d, f),
            p = o(!1, l, d, f),
            m = c(!0, l, d, f),
            g = c(!1, l, d, f),
            x = g - m + 1,
            P = p - _ + 1,
            w = u.getImageData(m, _, x, P);
          return (
            (s.width = x),
            (s.height = P),
            u.clearRect(0, 0, x, P),
            u.putImageData(w, 0, 0),
            s
          );
        }
        function a(s, u, l, d) {
          return {
            red: d[4 * (l * u + s)],
            green: d[4 * (l * u + s) + 1],
            blue: d[4 * (l * u + s) + 2],
            alpha: d[4 * (l * u + s) + 3],
          };
        }
        function h(s, u, l, d) {
          return a(s, u, l, d).alpha;
        }
        function o(s, u, l, d) {
          for (
            var f = s ? 1 : -1, _ = s ? 0 : l - 1, p = _;
            s ? p < l : p > -1;
            p += f
          )
            for (var m = 0; m < u; m++) if (h(m, p, u, d)) return p;
          return null;
        }
        function c(s, u, l, d) {
          for (
            var f = s ? 1 : -1, _ = s ? 0 : u - 1, p = _;
            s ? p < u : p > -1;
            p += f
          )
            for (var m = 0; m < l; m++) if (h(p, m, u, d)) return p;
          return null;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = i);
      },
    ]);
  });
})(S);
var $ = S.exports;
const X = z($);
var Y = ["canvasProps", "clearOnResize"],
  M = (function (e) {
    A(r, e);
    var n = V(r);
    function r() {
      var t;
      F(this, r);
      for (var i = arguments.length, a = new Array(i), h = 0; h < i; h++)
        a[h] = arguments[h];
      return (
        (t = n.call.apply(n, [this].concat(a))),
        (t.staticThis = t.constructor),
        (t._sigPad = null),
        (t._canvas = null),
        (t.setRef = function (o) {
          (t._canvas = o), t._canvas === null && (t._sigPad = null);
        }),
        (t._excludeOurProps = function () {
          var o = t.props;
          o.canvasProps, o.clearOnResize;
          var c = B(o, Y);
          return c;
        }),
        (t.componentDidMount = function () {
          var o = t.getCanvas();
          (t._sigPad = new v(o, t._excludeOurProps())),
            t._resizeCanvas(),
            t.on();
        }),
        (t.componentWillUnmount = function () {
          t.off();
        }),
        (t.componentDidUpdate = function () {
          Object.assign(t._sigPad, t._excludeOurProps());
        }),
        (t.getCanvas = function () {
          if (t._canvas === null) throw t.staticThis.refNullError;
          return t._canvas;
        }),
        (t.getTrimmedCanvas = function () {
          var o = t.getCanvas(),
            c = document.createElement("canvas");
          return (
            (c.width = o.width),
            (c.height = o.height),
            c.getContext("2d").drawImage(o, 0, 0),
            X(c)
          );
        }),
        (t.getSignaturePad = function () {
          if (t._sigPad === null) throw t.staticThis.refNullError;
          return t._sigPad;
        }),
        (t._checkClearOnResize = function () {
          t.props.clearOnResize && t._resizeCanvas();
        }),
        (t._resizeCanvas = function () {
          var o,
            c,
            s = (o = t.props.canvasProps) !== null && o !== void 0 ? o : {},
            u = s.width,
            l = s.height;
          if (!(typeof u < "u" && typeof l < "u")) {
            var d = t.getCanvas(),
              f = Math.max(
                (c = window.devicePixelRatio) !== null && c !== void 0 ? c : 1,
                1
              );
            typeof u > "u" && (d.width = d.offsetWidth * f),
              typeof l > "u" && (d.height = d.offsetHeight * f),
              d.getContext("2d").scale(f, f),
              t.clear();
          }
        }),
        (t.render = function () {
          var o = t.props.canvasProps;
          return k.createElement("canvas", E({ ref: t.setRef }, o));
        }),
        (t.on = function () {
          return (
            window.addEventListener("resize", t._checkClearOnResize),
            t.getSignaturePad().on()
          );
        }),
        (t.off = function () {
          return (
            window.removeEventListener("resize", t._checkClearOnResize),
            t.getSignaturePad().off()
          );
        }),
        (t.clear = function () {
          return t.getSignaturePad().clear();
        }),
        (t.isEmpty = function () {
          return t.getSignaturePad().isEmpty();
        }),
        (t.fromDataURL = function (o, c) {
          return t.getSignaturePad().fromDataURL(o, c);
        }),
        (t.toDataURL = function (o, c) {
          return t.getSignaturePad().toDataURL(o, c);
        }),
        (t.fromData = function (o) {
          return t.getSignaturePad().fromData(o);
        }),
        (t.toData = function () {
          return t.getSignaturePad().toData();
        }),
        t
      );
    }
    return j(r);
  })(U.Component);
M.propTypes = {
  velocityFilterWeight: y.number,
  minWidth: y.number,
  maxWidth: y.number,
  minDistance: y.number,
  dotSize: y.oneOfType([y.number, y.func]),
  penColor: y.string,
  throttle: y.number,
  onEnd: y.func,
  onBegin: y.func,
  canvasProps: y.object,
  clearOnResize: y.bool,
};
M.defaultProps = { clearOnResize: !0 };
M.refNullError = new Error(
  "react-signature-canvas is currently mounting or unmounting: React refs are null during this phase."
);
export { M as S };
