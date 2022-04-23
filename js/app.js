(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function n(e) {
            e.parentElement.removeChild(e);
          }
          function i(e) {
            return null != e;
          }
          function r(e) {
            e.preventDefault();
          }
          function o(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function a(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              n = e.ownerDocument,
              i = n.documentElement,
              r = v(n);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0),
              t ? s.top + r.y - i.clientTop : s.left + r.x - i.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, s) {
            s > 0 &&
              (f(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function h(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function b() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function w() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function y() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function S(e, t) {
            return 100 / (t - e);
          }
          function E(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function C(e, t) {
            return E(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function x(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function T(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function P(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var n = T(s, e),
              i = e[n - 1],
              r = e[n],
              o = t[n - 1],
              a = t[n];
            return o + C([i, r], s) / S(o, a);
          }
          function L(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var n = T(s, t),
              i = e[n - 1],
              r = e[n],
              o = t[n - 1];
            return x([i, r], (s - o) * S(o, t[n]));
          }
          function k(e, t, s, n) {
            if (100 === n) return n;
            var i = T(n, e),
              r = e[i - 1],
              o = e[i];
            return s
              ? n - r > (o - r) / 2
                ? o
                : r
              : t[i - 1]
              ? e[i - 1] + a(n - e[i - 1], t[i - 1])
              : n;
          }
          var A, M;
          (e.PipsMode = void 0),
            ((M = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (M.Steps = "steps"),
            (M.Positions = "positions"),
            (M.Count = "count"),
            (M.Values = "values"),
            (e.PipsType = void 0),
            ((A = e.PipsType || (e.PipsType = {}))[(A.None = -1)] = "None"),
            (A[(A.NoValue = 0)] = "NoValue"),
            (A[(A.LargeValue = 1)] = "LargeValue"),
            (A[(A.SmallValue = 2)] = "SmallValue");
          var _ = (function () {
              function e(e, t, s) {
                var n;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var i = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    i.push([p(e[t]), t]);
                  }),
                    i.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    n = 0;
                  n < i.length;
                  n++
                )
                  this.handleEntryPoint(i[n][1], i[n][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), n = 0;
                  n < this.xNumSteps.length;
                  n++
                )
                  this.handleStepPoint(n, this.xNumSteps[n]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = E(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var n,
                    i = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[i + 1]; ) i++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (i = this.xPct.length - 2);
                  s || e !== this.xPct[i + 1] || i++, null === t && (t = []);
                  var r = 1,
                    o = t[i],
                    a = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                  for (
                    n = s
                      ? (e - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i])
                      : (this.xPct[i + 1] - e) /
                        (this.xPct[i + 1] - this.xPct[i]);
                    o > 0;

                  )
                    (a = this.xPct[i + 1 + d] - this.xPct[i + d]),
                      t[i + d] * r + 100 - 100 * n > 100
                        ? ((l = a * n), (r = (o - 100 * n) / t[i + d]), (n = 1))
                        : ((l = ((t[i + d] * a) / 100) * r), (r = 0)),
                      s
                        ? ((c -= l), this.xPct.length + d >= 1 && d--)
                        : ((c += l), this.xPct.length - d >= 1 && d++),
                      (o = t[i + d] * r);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = P(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return L(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = k(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var n = T(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[n - 1])) &&
                      (n = Math.max(n - 1, 1)),
                    (this.xVal[n] - this.xVal[n - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = T(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(h);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !c(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var n = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(n) && n)
                    : isNaN(n) || (this.xSteps[0] = n),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        E([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        S(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        n = Math.ceil(Number(s.toFixed(3)) - 1),
                        i = this.xVal[e] + this.xNumSteps[e] * n;
                      this.xHighestCompleteStep[e] = i;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            O = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            $ = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            N = { tooltips: ".__tooltips", aria: ".__aria" };
          function I(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function D(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function z(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function V(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function B(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new _(t, e.snap || !1, e.singleStep);
          }
          function G(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function H(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function q(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function F(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function j(e, t) {
            var s,
              n = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) n.push(t);
              n.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              n = t;
            }
            e.connect = n;
          }
          function R(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function W(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function U(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function X(e, t) {
            var s;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var n = t[0] + t[1],
                i = e.spectrum.xVal[0];
              if (n / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - i) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function Y(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              n = t.indexOf("drag") >= 0,
              i = t.indexOf("fixed") >= 0,
              r = t.indexOf("snap") >= 0,
              o = t.indexOf("hover") >= 0,
              a = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0;
            if (i) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              W(e, e.start[1] - e.start[0]);
            }
            if (a && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || r,
              drag: n,
              dragAll: l,
              fixed: i,
              snap: r,
              hover: o,
              unconstrained: a,
            };
          }
          function Z(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var n = 0; n < e.handles; n++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Q(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function J(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ne(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ie(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function re(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: O,
                format: O,
              },
              s = {
                step: { r: !1, t: I },
                keyboardPageMultiplier: { r: !1, t: D },
                keyboardMultiplier: { r: !1, t: z },
                keyboardDefaultStep: { r: !1, t: V },
                start: { r: !0, t: G },
                connect: { r: !0, t: j },
                direction: { r: !0, t: Y },
                snap: { r: !1, t: H },
                animate: { r: !1, t: q },
                animationDuration: { r: !1, t: F },
                range: { r: !0, t: B },
                orientation: { r: !1, t: R },
                margin: { r: !1, t: W },
                limit: { r: !1, t: U },
                padding: { r: !1, t: X },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: J },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: Z },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ne },
                cssClasses: { r: !0, t: ie },
                handleAttributes: { r: !1, t: Q },
              },
              n = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: $,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (r) {
                if (i(e[r]) || void 0 !== n[r])
                  s[r].t(t, i(e[r]) ? e[r] : n[r]);
                else if (s[r].r)
                  throw new Error("noUiSlider: '" + r + "' is required.");
              }),
              (t.pips = e.pips);
            var r = document.createElement("div"),
              o = void 0 !== r.style.msTransform,
              a = void 0 !== r.style.transform;
            t.transformRule = a
              ? "transform"
              : o
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function oe(t, s, a) {
            var c,
              h,
              S,
              E,
              C,
              x = b(),
              T = y() && w(),
              P = t,
              L = s.spectrum,
              k = [],
              A = [],
              M = [],
              _ = 0,
              O = {},
              $ = t.ownerDocument,
              I = s.documentElement || $.documentElement,
              D = $.body,
              z = "rtl" === $.dir || 1 === s.ort ? 0 : 100;
            function V(e, t) {
              var s = $.createElement("div");
              return t && f(s, t), e.appendChild(s), s;
            }
            function B(e, t) {
              var n = V(e, s.cssClasses.origin),
                i = V(n, s.cssClasses.handle);
              if (
                (V(i, s.cssClasses.touchArea),
                i.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (i.setAttribute("tabindex", "0"),
                  i.addEventListener("keydown", function (e) {
                    return he(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var r = s.handleAttributes[t];
                Object.keys(r).forEach(function (e) {
                  i.setAttribute(e, r[e]);
                });
              }
              return (
                i.setAttribute("role", "slider"),
                i.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(i, s.cssClasses.handleLower)
                  : t === s.handles - 1 && f(i, s.cssClasses.handleUpper),
                n
              );
            }
            function G(e, t) {
              return !!t && V(e, s.cssClasses.connect);
            }
            function H(e, t) {
              var n = V(t, s.cssClasses.connects);
              (h = []), (S = []).push(G(n, e[0]));
              for (var i = 0; i < s.handles; i++)
                h.push(B(t, i)), (M[i] = i), S.push(G(n, e[i + 1]));
            }
            function q(e) {
              return (
                f(e, s.cssClasses.target),
                0 === s.dir ? f(e, s.cssClasses.ltr) : f(e, s.cssClasses.rtl),
                0 === s.ort
                  ? f(e, s.cssClasses.horizontal)
                  : f(e, s.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                V(e, s.cssClasses.base)
              );
            }
            function F(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                V(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function j() {
              return P.hasAttribute("disabled");
            }
            function R(e) {
              return h[e].hasAttribute("disabled");
            }
            function W() {
              C &&
                (ve("update" + N.tooltips),
                C.forEach(function (e) {
                  e && n(e);
                }),
                (C = null));
            }
            function U() {
              W(),
                (C = h.map(F)),
                me("update" + N.tooltips, function (e, t, n) {
                  if (C && s.tooltips && !1 !== C[t]) {
                    var i = e[t];
                    !0 !== s.tooltips[t] && (i = s.tooltips[t].to(n[t])),
                      (C[t].innerHTML = i);
                  }
                });
            }
            function X() {
              ve("update" + N.aria),
                me("update" + N.aria, function (e, t, n, i, r) {
                  M.forEach(function (e) {
                    var t = h[e],
                      i = we(A, e, 0, !0, !0, !0),
                      o = we(A, e, 100, !0, !0, !0),
                      a = r[e],
                      l = String(s.ariaFormat.to(n[e]));
                    (i = L.fromStepping(i).toFixed(1)),
                      (o = L.fromStepping(o).toFixed(1)),
                      (a = L.fromStepping(a).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", i),
                      t.children[0].setAttribute("aria-valuemax", o),
                      t.children[0].setAttribute("aria-valuenow", a),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function Y(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return L.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, n = 100 / s, i = []; s--; )
                  i[s] = s * n;
                return i.push(100), K(i, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return L.fromStepping(L.getStep(L.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return L.fromStepping(t ? L.getStep(e) : e);
              });
            }
            function Z(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var n = Y(t),
                i = {},
                r = L.xVal[0],
                a = L.xVal[L.xVal.length - 1],
                l = !1,
                c = !1,
                d = 0;
              return (
                (n = o(
                  n.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== r && (n.unshift(r), (l = !0)),
                n[n.length - 1] !== a && (n.push(a), (c = !0)),
                n.forEach(function (r, o) {
                  var a,
                    u,
                    p,
                    h,
                    f,
                    m,
                    g,
                    v,
                    b,
                    w,
                    y = r,
                    S = n[o + 1],
                    E = t.mode === e.PipsMode.Steps;
                  for (
                    E && (a = L.xNumSteps[o]),
                      a || (a = S - y),
                      void 0 === S && (S = y),
                      a = Math.max(a, 1e-7),
                      u = y;
                    u <= S;
                    u = s(u, a)
                  ) {
                    for (
                      v = (f = (h = L.toStepping(u)) - d) / (t.density || 1),
                        w = f / (b = Math.round(v)),
                        p = 1;
                      p <= b;
                      p += 1
                    )
                      i[(m = d + p * w).toFixed(5)] = [L.fromStepping(m), 0];
                    (g =
                      n.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : E
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !o && l && u !== S && (g = 0),
                      (u === S && c) || (i[h.toFixed(5)] = [u, g]),
                      (d = h);
                  }
                }),
                i
              );
            }
            function Q(t, n, i) {
              var r,
                o,
                a = $.createElement("div"),
                l =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  r),
                c =
                  (((o = {})[e.PipsType.None] = ""),
                  (o[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (o[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (o[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  o),
                d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                u = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var n = t === s.cssClasses.value,
                  i = n ? l : c;
                return t + " " + (n ? d : u)[s.ort] + " " + i[e];
              }
              function h(t, r, o) {
                if ((o = n ? n(r, o) : o) !== e.PipsType.None) {
                  var l = V(a, !1);
                  (l.className = p(o, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    o > e.PipsType.NoValue &&
                      (((l = V(a, !1)).className = p(o, s.cssClasses.value)),
                      l.setAttribute("data-value", String(r)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(i.to(r))));
                }
              }
              return (
                f(a, s.cssClasses.pips),
                f(
                  a,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  h(e, t[e][0], t[e][1]);
                }),
                a
              );
            }
            function J() {
              E && (n(E), (E = null));
            }
            function ee(e) {
              J();
              var t = Z(e),
                s = e.filter,
                n = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (E = P.appendChild(Q(t, s, n)));
            }
            function te() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || c[t] : e.height || c[t];
            }
            function se(e, t, n, i) {
              var r = function (r) {
                  var o = ne(r, i.pageOffset, i.target || t);
                  return (
                    !!o &&
                    !(j() && !i.doNotReject) &&
                    !(g(P, s.cssClasses.tap) && !i.doNotReject) &&
                    !(e === x.start && void 0 !== o.buttons && o.buttons > 1) &&
                    (!i.hover || !o.buttons) &&
                    (T || o.preventDefault(),
                    (o.calcPoint = o.points[s.ort]),
                    void n(o, i))
                  );
                },
                o = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, r, !!T && { passive: !0 }),
                    o.push([e, r]);
                }),
                o
              );
            }
            function ne(e, t, s) {
              var n = 0 === e.type.indexOf("touch"),
                i = 0 === e.type.indexOf("mouse"),
                r = 0 === e.type.indexOf("pointer"),
                o = 0,
                a = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (r = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (n) {
                var l = function (t) {
                  var n = t.target;
                  return (
                    n === s ||
                    s.contains(n) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (o = c[0].pageX), (a = c[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (o = d.pageX), (a = d.pageY);
                }
              }
              return (
                (t = t || v($)),
                (i || r) && ((o = e.clientX + t.x), (a = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [o, a]),
                (e.cursor = i || r),
                e
              );
            }
            function ie(e) {
              var t = (100 * (e - l(c, s.ort))) / te();
              return (t = u(t)), s.dir ? 100 - t : t;
            }
            function oe(e) {
              var t = 100,
                s = !1;
              return (
                h.forEach(function (n, i) {
                  if (!R(i)) {
                    var r = A[i],
                      o = Math.abs(r - e);
                    (o < t || (o <= t && e > r) || (100 === o && 100 === t)) &&
                      ((s = i), (t = o));
                  }
                }),
                s
              );
            }
            function ae(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ce(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ce(e, t);
              var n = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Se(
                n > 0,
                (100 * n) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ce(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (_ -= 1)),
                t.listeners.forEach(function (e) {
                  I.removeEventListener(e[0], e[1]);
                }),
                0 === _ &&
                  (m(P, s.cssClasses.drag),
                  xe(),
                  e.cursor &&
                    ((D.style.cursor = ""),
                    D.removeEventListener("selectstart", r))),
                t.handleNumbers.forEach(function (e) {
                  be("change", e), be("set", e), be("end", e);
                });
            }
            function de(e, t) {
              if (!t.handleNumbers.some(R)) {
                var n;
                1 === t.handleNumbers.length &&
                  ((n = h[t.handleNumbers[0]].children[0]),
                  (_ += 1),
                  f(n, s.cssClasses.active)),
                  e.stopPropagation();
                var i = [],
                  o = se(x.move, I, le, {
                    target: e.target,
                    handle: n,
                    connect: t.connect,
                    listeners: i,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: A.slice(),
                  }),
                  a = se(x.end, I, ce, {
                    target: e.target,
                    handle: n,
                    listeners: i,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = se("mouseout", I, ae, {
                    target: e.target,
                    handle: n,
                    listeners: i,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                i.push.apply(i, o.concat(a, l)),
                  e.cursor &&
                    ((D.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && f(P, s.cssClasses.drag),
                    D.addEventListener("selectstart", r, !1)),
                  t.handleNumbers.forEach(function (e) {
                    be("start", e);
                  });
              }
            }
            function ue(e) {
              e.stopPropagation();
              var t = ie(e.calcPoint),
                n = oe(t);
              !1 !== n &&
                (s.events.snap || d(P, s.cssClasses.tap, s.animationDuration),
                Te(n, t, !0, !0),
                xe(),
                be("slide", n, !0),
                be("update", n, !0),
                s.events.snap
                  ? de(e, { handleNumbers: [n] })
                  : (be("change", n, !0), be("set", n, !0)));
            }
            function pe(e) {
              var t = ie(e.calcPoint),
                s = L.getStep(t),
                n = L.fromStepping(s);
              Object.keys(O).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  O[e].forEach(function (e) {
                    e.call(ze, n);
                  });
              });
            }
            function he(e, t) {
              if (j() || R(t)) return !1;
              var n = ["Left", "Right"],
                i = ["Down", "Up"],
                r = ["PageDown", "PageUp"],
                o = ["Home", "End"];
              s.dir && !s.ort
                ? n.reverse()
                : s.ort && !s.dir && (i.reverse(), r.reverse());
              var a,
                l = e.key.replace("Arrow", ""),
                c = l === r[0],
                d = l === r[1],
                u = l === i[0] || l === n[0] || c,
                p = l === i[1] || l === n[1] || d,
                h = l === o[0],
                f = l === o[1];
              if (!(u || p || h || f)) return !0;
              if ((e.preventDefault(), p || u)) {
                var m = u ? 0 : 1,
                  g = $e(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = L.getDefaultStep(A[t], u, s.keyboardDefaultStep)),
                  (g *=
                    d || c ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (a = k[t] + g);
              } else
                a = f
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Te(t, L.toStepping(a), !0, !0),
                be("slide", t),
                be("update", t),
                be("change", t),
                be("set", t),
                !1
              );
            }
            function fe(e) {
              e.fixed ||
                h.forEach(function (e, t) {
                  se(x.start, e.children[0], de, { handleNumbers: [t] });
                }),
                e.tap && se(x.start, c, ue, {}),
                e.hover && se(x.move, c, pe, { hover: !0 }),
                e.drag &&
                  S.forEach(function (t, n) {
                    if (!1 !== t && 0 !== n && n !== S.length - 1) {
                      var i = h[n - 1],
                        r = h[n],
                        o = [t],
                        a = [i, r],
                        l = [n - 1, n];
                      f(t, s.cssClasses.draggable),
                        e.fixed &&
                          (o.push(i.children[0]), o.push(r.children[0])),
                        e.dragAll && ((a = h), (l = M)),
                        o.forEach(function (e) {
                          se(x.start, e, de, {
                            handles: a,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function me(e, t) {
              (O[e] = O[e] || []),
                O[e].push(t),
                "update" === e.split(".")[0] &&
                  h.forEach(function (e, t) {
                    be("update", t);
                  });
            }
            function ge(e) {
              return e === N.aria || e === N.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(O).forEach(function (e) {
                var n = e.split(".")[0],
                  i = e.substring(n.length);
                (t && t !== n) ||
                  (s && s !== i) ||
                  (ge(i) && s !== i) ||
                  delete O[e];
              });
            }
            function be(e, t, n) {
              Object.keys(O).forEach(function (i) {
                var r = i.split(".")[0];
                e === r &&
                  O[i].forEach(function (e) {
                    e.call(
                      ze,
                      k.map(s.format.to),
                      t,
                      k.slice(),
                      n || !1,
                      A.slice(),
                      ze
                    );
                  });
              });
            }
            function we(e, t, n, i, r, o) {
              var a;
              return (
                h.length > 1 &&
                  !s.events.unconstrained &&
                  (i &&
                    t > 0 &&
                    ((a = L.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (n = Math.max(n, a))),
                  r &&
                    t < h.length - 1 &&
                    ((a = L.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (n = Math.min(n, a)))),
                h.length > 1 &&
                  s.limit &&
                  (i &&
                    t > 0 &&
                    ((a = L.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (n = Math.min(n, a))),
                  r &&
                    t < h.length - 1 &&
                    ((a = L.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (n = Math.max(n, a)))),
                s.padding &&
                  (0 === t &&
                    ((a = L.getAbsoluteDistance(0, s.padding[0], !1)),
                    (n = Math.max(n, a))),
                  t === h.length - 1 &&
                    ((a = L.getAbsoluteDistance(100, s.padding[1], !0)),
                    (n = Math.min(n, a)))),
                !((n = u((n = L.getStep(n)))) === e[t] && !o) && n
              );
            }
            function ye(e, t) {
              var n = s.ort;
              return (n ? t : e) + ", " + (n ? e : t);
            }
            function Se(e, t, s, n, i) {
              var r = s.slice(),
                o = n[0],
                a = [!e, e],
                l = [e, !e];
              (n = n.slice()),
                e && n.reverse(),
                n.length > 1
                  ? n.forEach(function (e, s) {
                      var n = we(r, e, r[e] + t, a[s], l[s], !1);
                      !1 === n ? (t = 0) : ((t = n - r[e]), (r[e] = n));
                    })
                  : (a = l = [!0]);
              var c = !1;
              n.forEach(function (e, n) {
                c = Te(e, s[e] + t, a[n], l[n]) || c;
              }),
                c &&
                  (n.forEach(function (e) {
                    be("update", e), be("slide", e);
                  }),
                  null != i && be("drag", o));
            }
            function Ee(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function Ce(e, t) {
              (A[e] = t), (k[e] = L.fromStepping(t));
              var n = "translate(" + ye(Ee(t, 0) - z + "%", "0") + ")";
              (h[e].style[s.transformRule] = n), Pe(e), Pe(e + 1);
            }
            function xe() {
              M.forEach(function (e) {
                var t = A[e] > 50 ? -1 : 1,
                  s = 3 + (h.length + t * e);
                h[e].style.zIndex = String(s);
              });
            }
            function Te(e, t, s, n, i) {
              return (
                i || (t = we(A, e, t, s, n, !1)), !1 !== t && (Ce(e, t), !0)
              );
            }
            function Pe(e) {
              if (S[e]) {
                var t = 0,
                  n = 100;
                0 !== e && (t = A[e - 1]), e !== S.length - 1 && (n = A[e]);
                var i = n - t,
                  r = "translate(" + ye(Ee(t, i) + "%", "0") + ")",
                  o = "scale(" + ye(i / 100, "1") + ")";
                S[e].style[s.transformRule] = r + " " + o;
              }
            }
            function Le(e, t) {
              return null === e || !1 === e || void 0 === e
                ? A[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = L.toStepping(e)),
                  !1 === e || isNaN(e) ? A[t] : e);
            }
            function ke(e, t, n) {
              var i = p(e),
                r = void 0 === A[0];
              (t = void 0 === t || t),
                s.animate && !r && d(P, s.cssClasses.tap, s.animationDuration),
                M.forEach(function (e) {
                  Te(e, Le(i[e], e), !0, !1, n);
                });
              var o = 1 === M.length ? 0 : 1;
              if (r && L.hasNoSize() && ((n = !0), (A[0] = 0), M.length > 1)) {
                var a = 100 / (M.length - 1);
                M.forEach(function (e) {
                  A[e] = e * a;
                });
              }
              for (; o < M.length; ++o)
                M.forEach(function (e) {
                  Te(e, A[e], !0, !0, n);
                });
              xe(),
                M.forEach(function (e) {
                  be("update", e), null !== i[e] && t && be("set", e);
                });
            }
            function Ae(e) {
              ke(s.start, e);
            }
            function Me(e, t, s, n) {
              if (!((e = Number(e)) >= 0 && e < M.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Te(e, Le(t, e), !0, !0, n), be("update", e), s && be("set", e);
            }
            function _e(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === k.length ? k[0] : k.slice(0);
              var t = k.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Oe() {
              for (
                ve(N.aria),
                  ve(N.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(P, s.cssClasses[e]);
                  });
                P.firstChild;

              )
                P.removeChild(P.firstChild);
              delete P.noUiSlider;
            }
            function $e(e) {
              var t = A[e],
                n = L.getNearbySteps(t),
                i = k[e],
                r = n.thisStep.step,
                o = null;
              if (s.snap)
                return [
                  i - n.stepBefore.startValue || null,
                  n.stepAfter.startValue - i || null,
                ];
              !1 !== r &&
                i + r > n.stepAfter.startValue &&
                (r = n.stepAfter.startValue - i),
                (o =
                  i > n.thisStep.startValue
                    ? n.thisStep.step
                    : !1 !== n.stepBefore.step && i - n.stepBefore.highestStep),
                100 === t ? (r = null) : 0 === t && (o = null);
              var a = L.countStepDecimals();
              return (
                null !== r && !1 !== r && (r = Number(r.toFixed(a))),
                null !== o && !1 !== o && (o = Number(o.toFixed(a))),
                [o, r]
              );
            }
            function Ne() {
              return M.map($e);
            }
            function Ie(e, t) {
              var n = _e(),
                r = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              r.forEach(function (t) {
                void 0 !== e[t] && (a[t] = e[t]);
              });
              var o = re(a);
              r.forEach(function (t) {
                void 0 !== e[t] && (s[t] = o[t]);
              }),
                (L = o.spectrum),
                (s.margin = o.margin),
                (s.limit = o.limit),
                (s.padding = o.padding),
                s.pips ? ee(s.pips) : J(),
                s.tooltips ? U() : W(),
                (A = []),
                ke(i(e.start) ? e.start : n, t);
            }
            function De() {
              (c = q(P)),
                H(s.connect, c),
                fe(s.events),
                ke(s.start),
                s.pips && ee(s.pips),
                s.tooltips && U(),
                X();
            }
            De();
            var ze = {
              destroy: Oe,
              steps: Ne,
              on: me,
              off: ve,
              get: _e,
              set: ke,
              setHandle: Me,
              reset: Ae,
              __moveHandles: function (e, t, s) {
                Se(e, t, A, s);
              },
              options: a,
              updateOptions: Ie,
              target: P,
              removePips: J,
              removeTooltips: W,
              getPositions: function () {
                return A.slice();
              },
              getTooltips: function () {
                return C;
              },
              getOrigins: function () {
                return h;
              },
              pips: ee,
            };
            return ze;
          }
          function ae(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = oe(e, re(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: _, cssClasses: $, create: ae };
          (e.create = ae),
            (e.cssClasses = $),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var n in s)
                      Object.prototype.hasOwnProperty.call(s, n) &&
                        (e[n] = s[n]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            n = t && "IntersectionObserver" in window,
            i = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
            },
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var s,
                n = "LazyLoad::Initialized",
                i = new e(t);
              try {
                s = new CustomEvent(n, { detail: { instance: i } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  n,
                  !1,
                  !1,
                  { instance: i }
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            p = "poster",
            h = "llOriginalAttrs",
            f = "loading",
            m = "loaded",
            g = "applied",
            v = "error",
            b = "native",
            w = "data-",
            y = "ll-status",
            S = function (e, t) {
              return e.getAttribute(w + t);
            },
            E = function (e) {
              return S(e, y);
            },
            C = function (e, t) {
              return (function (e, t, s) {
                var n = "data-ll-status";
                null !== s ? e.setAttribute(n, s) : e.removeAttribute(n);
              })(e, 0, t);
            },
            x = function (e) {
              return C(e, null);
            },
            T = function (e) {
              return null === E(e);
            },
            P = function (e) {
              return E(e) === b;
            },
            L = [f, m, g, v],
            k = function (e, t, s, n) {
              e &&
                (void 0 === n ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, n));
            },
            A = function (e, t) {
              i
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            M = function (e, t) {
              i
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            _ = function (e) {
              return e.llTempImage;
            },
            O = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            $ = function (e, t) {
              e && (e.loadingCount += t);
            },
            N = function (e, t) {
              e && (e.toLoadCount = t);
            },
            I = function (e) {
              for (var t, s = [], n = 0; (t = e.children[n]); n += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            D = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && I(s).forEach(t);
            },
            z = function (e, t) {
              I(e).forEach(t);
            },
            V = [c],
            B = [c, p],
            G = [c, d, u],
            H = function (e) {
              return !!e[h];
            },
            q = function (e) {
              return e[h];
            },
            F = function (e) {
              return delete e[h];
            },
            j = function (e, t) {
              if (!H(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[h] = s);
              }
            },
            R = function (e, t) {
              if (H(e)) {
                var s = q(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            W = function (e, t, s) {
              A(e, t.class_loading),
                C(e, f),
                s && ($(s, 1), k(t.callback_loading, e, s));
            },
            U = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            X = function (e, t) {
              U(e, u, S(e, t.data_sizes)),
                U(e, d, S(e, t.data_srcset)),
                U(e, c, S(e, t.data_src));
            },
            Y = {
              IMG: function (e, t) {
                D(e, function (e) {
                  j(e, G), X(e, t);
                }),
                  j(e, G),
                  X(e, t);
              },
              IFRAME: function (e, t) {
                j(e, V), U(e, c, S(e, t.data_src));
              },
              VIDEO: function (e, t) {
                z(e, function (e) {
                  j(e, V), U(e, c, S(e, t.data_src));
                }),
                  j(e, B),
                  U(e, p, S(e, t.data_poster)),
                  U(e, c, S(e, t.data_src)),
                  e.load();
              },
            },
            K = ["IMG", "IFRAME", "VIDEO"],
            Z = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                k(e.callback_finish, t);
            },
            Q = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            J = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ee = function (e) {
              return !!e.llEvLisnrs;
            },
            te = function (e) {
              if (ee(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var n = t[s];
                  J(e, s, n);
                }
                delete e.llEvLisnrs;
              }
            },
            se = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                $(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                M(e, t.class_loading),
                t.unobserve_completed && O(e, s);
            },
            ne = function (e, t, s) {
              var n = _(e) || e;
              ee(n) ||
                (function (e, t, s) {
                  ee(e) || (e.llEvLisnrs = {});
                  var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  Q(e, n, t), Q(e, "error", s);
                })(
                  n,
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = P(t);
                      se(t, s, n),
                        A(t, s.class_loaded),
                        C(t, m),
                        k(s.callback_loaded, t, n),
                        i || Z(s, n);
                    })(0, e, t, s),
                      te(n);
                  },
                  function (i) {
                    !(function (e, t, s, n) {
                      var i = P(t);
                      se(t, s, n),
                        A(t, s.class_error),
                        C(t, v),
                        k(s.callback_error, t, n),
                        i || Z(s, n);
                    })(0, e, t, s),
                      te(n);
                  }
                );
            },
            ie = function (e, t, s) {
              !(function (e) {
                e.llTempImage = document.createElement("IMG");
              })(e),
                ne(e, t, s),
                (function (e) {
                  H(e) || (e[h] = { backgroundImage: e.style.backgroundImage });
                })(e),
                (function (e, t, s) {
                  var n = S(e, t.data_bg),
                    i = S(e, t.data_bg_hidpi),
                    o = r && i ? i : n;
                  o &&
                    ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                    _(e).setAttribute(c, o),
                    W(e, t, s));
                })(e, t, s),
                (function (e, t, s) {
                  var n = S(e, t.data_bg_multi),
                    i = S(e, t.data_bg_multi_hidpi),
                    o = r && i ? i : n;
                  o &&
                    ((e.style.backgroundImage = o),
                    (function (e, t, s) {
                      A(e, t.class_applied),
                        C(e, g),
                        s &&
                          (t.unobserve_completed && O(e, t),
                          k(t.callback_applied, e, s));
                    })(e, t, s));
                })(e, t, s);
            },
            re = function (e, t, s) {
              !(function (e) {
                return K.indexOf(e.tagName) > -1;
              })(e)
                ? ie(e, t, s)
                : (function (e, t, s) {
                    ne(e, t, s),
                      (function (e, t, s) {
                        var n = Y[e.tagName];
                        n && (n(e, t), W(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            oe = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ae = function (e) {
              D(e, function (e) {
                R(e, G);
              }),
                R(e, G);
            },
            le = {
              IMG: ae,
              IFRAME: function (e) {
                R(e, V);
              },
              VIDEO: function (e) {
                z(e, function (e) {
                  R(e, V);
                }),
                  R(e, B),
                  e.load();
              },
            },
            ce = function (e, t) {
              (function (e) {
                var t = le[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (H(e)) {
                        var t = q(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  T(e) ||
                    P(e) ||
                    (M(e, t.class_entered),
                    M(e, t.class_exited),
                    M(e, t.class_applied),
                    M(e, t.class_loading),
                    M(e, t.class_loaded),
                    M(e, t.class_error));
                })(e, t),
                x(e),
                F(e);
            },
            de = ["IMG", "IFRAME", "VIDEO"],
            ue = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            pe = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, n) {
                      var i = (function (e) {
                        return L.indexOf(E(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        A(e, s.class_entered),
                        M(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && O(e, s);
                        })(e, s, n),
                        k(s.callback_enter, e, t, n),
                        i || re(e, s, n);
                    })(e.target, e, t, s)
                  : (function (e, t, s, n) {
                      T(e) ||
                        (A(e, s.class_exited),
                        (function (e, t, s, n) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return E(e) === f;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (te(e),
                            (function (e) {
                              D(e, function (e) {
                                oe(e);
                              }),
                                oe(e);
                            })(e),
                            ae(e),
                            M(e, s.class_loading),
                            $(n, -1),
                            x(e),
                            k(s.callback_cancel, e, t, n));
                        })(e, t, s, n),
                        k(s.callback_exit, e, t, n));
                    })(e.target, e, t, s);
              });
            },
            he = function (e) {
              return Array.prototype.slice.call(e);
            },
            fe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            me = function (e) {
              return (function (e) {
                return E(e) === v;
              })(e);
            },
            ge = function (e, t) {
              return (function (e) {
                return he(e).filter(T);
              })(e || fe(t));
            },
            ve = function (e, s) {
              var i = a(e);
              (this._settings = i),
                (this.loadingCount = 0),
                (function (e, t) {
                  n &&
                    !ue(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        pe(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(i, this),
                (function (e, s) {
                  t &&
                    window.addEventListener("online", function () {
                      !(function (e, t) {
                        var s;
                        ((s = fe(e)), he(s).filter(me)).forEach(function (t) {
                          M(t, e.class_error), x(t);
                        }),
                          t.update();
                      })(e, s);
                    });
                })(i, this),
                this.update(s);
            };
          return (
            (ve.prototype = {
              update: function (e) {
                var t,
                  i,
                  r = this._settings,
                  o = ge(e, r);
                N(this, o.length),
                  !s && n
                    ? ue(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== de.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ne(e, t, s),
                                  (function (e, t) {
                                    var s = Y[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  C(e, b);
                              })(e, t, s);
                          }),
                            N(s, 0);
                        })(o, r, this)
                      : ((i = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, i))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  fe(this._settings).forEach(function (e) {
                    F(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ge(e, s).forEach(function (e) {
                  O(e, t), re(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                fe(e).forEach(function (t) {
                  ce(t, e);
                });
              },
            }),
            (ve.load = function (e, t) {
              var s = a(t);
              re(e, s);
            }),
            (ve.resetStatus = function (e) {
              x(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, n = 0; (s = t[n]); n += 1) l(e, s);
                  else l(e, t);
              })(ve, window.lazyLoadOptions),
            ve
          );
        })();
      },
    },
    t = {};
  function s(n) {
    var i = t[n];
    if (void 0 !== i) return i.exports;
    var r = (t[n] = { exports: {} });
    return e[n].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      n = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let n = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = n + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      i = !0,
      r = (e = 500) => {
        document.documentElement.classList.contains("lock") ? o(e) : a(e);
      },
      o = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (i) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (i = !1),
            setTimeout(function () {
              i = !0;
            }, e);
        }
      };
    function l(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function c(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    function d(e, t) {
      const s = Array.from(e).filter(function (e, s, n) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const n = {},
            i = s.dataset[t].split(",");
          (n.value = i[0]),
            (n.type = i[1] ? i[1].trim() : "max"),
            (n.item = s),
            e.push(n);
        });
        let n = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        n = c(n);
        const i = [];
        if (n.length)
          return (
            n.forEach((t) => {
              const s = t.split(","),
                n = s[1],
                r = s[2],
                o = window.matchMedia(s[0]),
                a = e.filter(function (e) {
                  if (e.value === n && e.type === r) return !0;
                });
              i.push({ itemsArray: a, matchMedia: o });
            }),
            i
          );
      }
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : r(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            i &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              r(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          n = s.indexOf(document.activeElement);
        e.shiftKey && 0 === n && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            n !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && l(`[Попапос]: ${e}`);
      }
    })({});
    let u = (e, t = !1, s = 500, n = 0) => {
      const i = "string" == typeof e ? document.querySelector(e) : e;
      if (i) {
        let r = "",
          a = 0;
        t &&
          ((r = "header.header"), (a = document.querySelector(r).offsetHeight));
        let c = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: n,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (o(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(i, "", c);
        else {
          let e = i.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
        }
        l(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else l(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    let p = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                p.removeError(t);
            }
            let n = t.querySelectorAll(".checkbox__input");
            if (n.length > 0)
              for (let e = 0; e < n.length; e++) {
                n[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const n = s[t].querySelector("select");
                  e.select.selectBuild(n);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var h = s(211);
    function f(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function m(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : f(t[s]) && f(e[s]) && Object.keys(t[s]).length > 0 && m(e[s], t[s]);
      });
    }
    !(function () {
      const e = document.querySelectorAll("[data-range]");
      e.length &&
        e.forEach((e) => {
          const t = e.querySelector("[data-range-from]"),
            s = e.querySelector("[data-range-to]"),
            n = e.querySelector("[data-range-item]");
          h.create(n, {
            start: [Number(t.value), Number(s.value)],
            tooltips: [!0, !0],
            connect: !0,
            range: {
              min: [Number(t.dataset.rangeFrom)],
              max: [Number(s.dataset.rangeTo)],
            },
          }),
            n.noUiSlider.on("update", function (e, n) {
              (t.value = e[n]), (s.value = e[n]);
            });
        });
    })();
    const g = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function v() {
      const e = "undefined" != typeof document ? document : {};
      return m(e, g), e;
    }
    const b = {
      document: g,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function w() {
      const e = "undefined" != typeof window ? window : {};
      return m(e, b), e;
    }
    class y extends Array {
      constructor(e) {
        super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this);
      }
    }
    function S(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...S(e)) : t.push(e);
        }),
        t
      );
    }
    function E(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function C(e, t) {
      const s = w(),
        n = v();
      let i = [];
      if (!t && e instanceof y) return e;
      if (!e) return new y(i);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = n.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            i.push(t.childNodes[e]);
        } else
          i = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              n = t.querySelectorAll(e);
            for (let e = 0; e < n.length; e += 1) s.push(n[e]);
            return s;
          })(e.trim(), t || n);
      } else if (e.nodeType || e === s || e === n) i.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof y) return e;
        i = e;
      }
      return new y(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(i)
      );
    }
    C.fn = y.prototype;
    const x = "resize scroll".split(" ");
    function T(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            x.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : C(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    T("click"),
      T("blur"),
      T("focus"),
      T("focusin"),
      T("focusout"),
      T("keyup"),
      T("keydown"),
      T("keypress"),
      T("submit"),
      T("change"),
      T("mousedown"),
      T("mousemove"),
      T("mouseup"),
      T("mouseenter"),
      T("mouseleave"),
      T("mouseout"),
      T("mouseover"),
      T("touchstart"),
      T("touchend"),
      T("touchmove"),
      T("resize"),
      T("scroll");
    const P = {
      addClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        return (
          E(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = S(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, n, i] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), C(t).is(s))) n.apply(t, i);
          else {
            const e = C(t).parents();
            for (let t = 0; t < e.length; t += 1)
              C(e[t]).is(s) && n.apply(e[t], i);
          }
        }
        function o(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
        }
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const a = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
                t.addEventListener(e, r, i);
            }
          else
            for (l = 0; l < a.length; l += 1) {
              const e = a[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: n, proxyListener: o }),
                t.addEventListener(e, o, i);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, n, i] = e;
        "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
          i || (i = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let o;
            if (
              (!s && r.dom7Listeners
                ? (o = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
              o && o.length)
            )
              for (let e = o.length - 1; e >= 0; e -= 1) {
                const s = o[e];
                (n && s.listener === n) ||
                (n &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === n)
                  ? (r.removeEventListener(t, s.proxyListener, i),
                    o.splice(e, 1))
                  : n ||
                    (r.removeEventListener(t, s.proxyListener, i),
                    o.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = w(),
          s = e[0].split(" "),
          n = e[1];
        for (let i = 0; i < s.length; i += 1) {
          const r = s[i];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              });
              (i.dom7EventData = e.filter((e, t) => t > 0)),
                i.dispatchEvent(s),
                (i.dom7EventData = []),
                delete i.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(n) {
              n.target === this && (e.call(this, n), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = w();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = w(),
            t = v(),
            s = this[0],
            n = s.getBoundingClientRect(),
            i = t.body,
            r = s.clientTop || i.clientTop || 0,
            o = s.clientLeft || i.clientLeft || 0,
            a = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: n.top + a - r, left: n.left + l - o };
        }
        return null;
      },
      css: function (e, t) {
        const s = w();
        let n;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (n = 0; n < this.length; n += 1)
              for (const t in e) this[n].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = w(),
          s = v(),
          n = this[0];
        let i, r;
        if (!n || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);
          for (i = C(e), r = 0; r < i.length; r += 1) if (i[r] === n) return !0;
          return !1;
        }
        if (e === s) return n === s;
        if (e === t) return n === t;
        if (e.nodeType || e instanceof y) {
          for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
            if (i[r] === n) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return C([]);
        if (e < 0) {
          const s = t + e;
          return C(s < 0 ? [] : [this[s]]);
        }
        return C([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = v();
        for (let n = 0; n < e.length; n += 1) {
          t = e[n];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const n = s.createElement("div");
              for (n.innerHTML = t; n.firstChild; )
                this[e].appendChild(n.firstChild);
            } else if (t instanceof y)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = v();
        let s, n;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const i = t.createElement("div");
            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
              this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
          } else if (e instanceof y)
            for (n = 0; n < e.length; n += 1)
              this[s].insertBefore(e[n], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && C(this[0].nextElementSibling).is(e)
              ? C([this[0].nextElementSibling])
              : C([])
            : this[0].nextElementSibling
            ? C([this[0].nextElementSibling])
            : C([])
          : C([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return C([]);
        for (; s.nextElementSibling; ) {
          const n = s.nextElementSibling;
          e ? C(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return C(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && C(t.previousElementSibling).is(e)
              ? C([t.previousElementSibling])
              : C([])
            : t.previousElementSibling
            ? C([t.previousElementSibling])
            : C([]);
        }
        return C([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return C([]);
        for (; s.previousElementSibling; ) {
          const n = s.previousElementSibling;
          e ? C(n).is(e) && t.push(n) : t.push(n), (s = n);
        }
        return C(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? C(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return C(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let n = this[s].parentNode;
          for (; n; )
            e ? C(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
        }
        return C(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? C([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) t.push(n[e]);
        }
        return C(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s].children;
          for (let s = 0; s < n.length; s += 1)
            (e && !C(n[s]).is(e)) || t.push(n[s]);
        }
        return C(t);
      },
      filter: function (e) {
        return C(E(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(P).forEach((e) => {
      Object.defineProperty(C.fn, e, { value: P[e], writable: !0 });
    });
    const L = C;
    function k(e, t = 0) {
      return setTimeout(e, t);
    }
    function A() {
      return Date.now();
    }
    function M(e, t = "x") {
      const s = w();
      let n, i, r;
      const o = (function (e) {
        const t = w();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((i = o.transform || o.webkitTransform),
            i.split(",").length > 6 &&
              (i = i
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (n = r.toString().split(","))),
        "x" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m41
            : 16 === n.length
            ? parseFloat(n[12])
            : parseFloat(n[4])),
        "y" === t &&
          (i = s.WebKitCSSMatrix
            ? r.m42
            : 16 === n.length
            ? parseFloat(n[13])
            : parseFloat(n[5])),
        i || 0
      );
    }
    function _(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function O(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let i = 1; i < e.length; i += 1) {
        const r = e[i];
        if (
          null != r &&
          ((n = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? n instanceof HTMLElement
            : n && (1 === n.nodeType || 11 === n.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, n = e.length; s < n; s += 1) {
            const n = e[s],
              i = Object.getOwnPropertyDescriptor(r, n);
            void 0 !== i &&
              i.enumerable &&
              (_(t[n]) && _(r[n])
                ? r[n].__swiper__
                  ? (t[n] = r[n])
                  : O(t[n], r[n])
                : !_(t[n]) && _(r[n])
                ? ((t[n] = {}), r[n].__swiper__ ? (t[n] = r[n]) : O(t[n], r[n]))
                : (t[n] = r[n]));
          }
        }
      }
      var n;
      return t;
    }
    function $(e, t, s) {
      e.style.setProperty(t, s);
    }
    function N({ swiper: e, targetPosition: t, side: s }) {
      const n = w(),
        i = -e.translate;
      let r,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > i ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (r = new Date().getTime()), null === o && (o = r);
          const l = Math.max(Math.min((r - o) / a, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let p = i + u * (t - i);
          if ((c(p, t) && (p = t), e.wrapperEl.scrollTo({ [s]: p }), c(p, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: p });
              }),
              void n.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = n.requestAnimationFrame(d);
        };
      d();
    }
    let I, D, z;
    function V() {
      return (
        I ||
          (I = (function () {
            const e = w(),
              t = v();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        I
      );
    }
    function B(e = {}) {
      return (
        D ||
          (D = (function ({ userAgent: e } = {}) {
            const t = V(),
              s = w(),
              n = s.navigator.platform,
              i = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              o = s.screen.width,
              a = s.screen.height,
              l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              p = "Win32" === n;
            let h = "MacIntel" === n;
            return (
              !c &&
                h &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${a}`) >= 0 &&
                ((c = i.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (h = !1)),
              l && !p && ((r.os = "android"), (r.android = !0)),
              (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        D
      );
    }
    function G() {
      return (
        z ||
          (z = (function () {
            const e = w();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        z
      );
    }
    const H = {
      on(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        const i = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            n.eventsListeners[e] || (n.eventsListeners[e] = []),
              n.eventsListeners[e][i](t);
          }),
          n
        );
      },
      once(e, t, s) {
        const n = this;
        if ("function" != typeof t) return n;
        function i(...s) {
          n.off(e, i),
            i.__emitterProxy && delete i.__emitterProxy,
            t.apply(n, s);
        }
        return (i.__emitterProxy = t), n.on(e, i, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const n = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((n, i) => {
                    (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(i, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners) return t;
        let s, n, i;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
          : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
          n.unshift(i);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(i, [e, ...n]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(i, n);
                });
          }),
          t
        );
      },
    };
    const q = {
      updateSize: function () {
        const e = this;
        let t, s;
        const n = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : n[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : n[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(n.css("padding-left") || 0, 10) -
              parseInt(n.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(n.css("padding-top") || 0, 10) -
              parseInt(n.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const n = e.params,
          { $wrapperEl: i, size: r, rtlTranslate: o, wrongRTL: a } = e,
          l = e.virtual && n.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = i.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const h = [],
          f = [];
        let m = n.slidesOffsetBefore;
        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
        let g = n.slidesOffsetAfter;
        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let w = n.spaceBetween,
          y = -m,
          S = 0,
          E = 0;
        if (void 0 === r) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * r),
          (e.virtualSize = -w),
          o
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          n.centeredSlides &&
            n.cssMode &&
            ($(e.wrapperEl, "--swiper-centered-offset-before", ""),
            $(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = n.grid && n.grid.rows > 1 && e.grid;
        let x;
        C && e.grid.initSlides(u);
        const T =
          "auto" === n.slidesPerView &&
          n.breakpoints &&
          Object.keys(n.breakpoints).filter(
            (e) => void 0 !== n.breakpoints[e].slidesPerView
          ).length > 0;
        for (let i = 0; i < u; i += 1) {
          x = 0;
          const o = d.eq(i);
          if (
            (C && e.grid.updateSlide(i, o, u, t), "none" !== o.css("display"))
          ) {
            if ("auto" === n.slidesPerView) {
              T && (d[i].style[t("width")] = "");
              const r = getComputedStyle(o[0]),
                a = o[0].style.transform,
                l = o[0].style.webkitTransform;
              if (
                (a && (o[0].style.transform = "none"),
                l && (o[0].style.webkitTransform = "none"),
                n.roundLengths)
              )
                x = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  n = s(r, "padding-right"),
                  i = s(r, "margin-left"),
                  a = s(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) x = e + i + a;
                else {
                  const { clientWidth: s, offsetWidth: r } = o[0];
                  x = e + t + n + i + a + (r - s);
                }
              }
              a && (o[0].style.transform = a),
                l && (o[0].style.webkitTransform = l),
                n.roundLengths && (x = Math.floor(x));
            } else
              (x = (r - (n.slidesPerView - 1) * w) / n.slidesPerView),
                n.roundLengths && (x = Math.floor(x)),
                d[i] && (d[i].style[t("width")] = `${x}px`);
            d[i] && (d[i].swiperSlideSize = x),
              f.push(x),
              n.centeredSlides
                ? ((y = y + x / 2 + S / 2 + w),
                  0 === S && 0 !== i && (y = y - r / 2 - w),
                  0 === i && (y = y - r / 2 - w),
                  Math.abs(y) < 0.001 && (y = 0),
                  n.roundLengths && (y = Math.floor(y)),
                  E % n.slidesPerGroup == 0 && p.push(y),
                  h.push(y))
                : (n.roundLengths && (y = Math.floor(y)),
                  (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(y),
                  h.push(y),
                  (y = y + x + w)),
              (e.virtualSize += x + w),
              (S = x),
              (E += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          o &&
            a &&
            ("slide" === n.effect || "coverflow" === n.effect) &&
            i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
          n.setWrapperSize &&
            i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(x, p, t),
          !n.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let i = p[s];
            n.roundLengths && (i = Math.floor(i)),
              p[s] <= e.virtualSize - r && t.push(i);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== n.spaceBetween)) {
          const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({
            [s]: `${w}px`,
          });
        }
        if (n.centeredSlides && n.centeredSlidesBounds) {
          let e = 0;
          f.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
            (e -= n.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (n.centerInsufficientSlides) {
          let e = 0;
          if (
            (f.forEach((t) => {
              e += t + (n.spaceBetween ? n.spaceBetween : 0);
            }),
            (e -= n.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              h.forEach((e, s) => {
                h[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: h,
            slidesSizesGrid: f,
          }),
          n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
        ) {
          $(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            $(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - f[f.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          h.length !== b && e.emit("slidesGridLengthChange"),
          n.watchSlidesProgress && e.updateSlidesOffset();
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          n = t.virtual && t.params.virtual.enabled;
        let i,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) =>
          n
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
              const e = t.activeIndex + i;
              if (e > t.slides.length && !n) break;
              s.push(o(e));
            }
        else s.push(o(t.activeIndex));
        for (i = 0; i < s.length; i += 1)
          if (void 0 !== s[i]) {
            const e = s[i].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: n, rtlTranslate: i, snapGrid: r } = t;
        if (0 === n.length) return;
        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        i && (o = e),
          n.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < n.length; e += 1) {
          const a = n[e];
          let l = a.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
          const c =
              (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            d =
              (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            u = -(o - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            n.eq(e).addClass(s.slideVisibleClass)),
            (a.progress = i ? -c : c),
            (a.originalProgress = i ? -d : d);
        }
        t.visibleSlides = L(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          n = t.maxTranslate() - t.minTranslate();
        let { progress: i, isBeginning: r, isEnd: o } = t;
        const a = r,
          l = o;
        0 === n
          ? ((i = 0), (r = !0), (o = !0))
          : ((i = (e - t.minTranslate()) / n), (r = i <= 0), (o = i >= 1)),
          Object.assign(t, { progress: i, isBeginning: r, isEnd: o }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !a && t.emit("reachBeginning toEdge"),
          o && !l && t.emit("reachEnd toEdge"),
          ((a && !r) || (l && !o)) && t.emit("fromEdge"),
          t.emit("progress", i);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: n,
            activeIndex: i,
            realIndex: r,
          } = e,
          o = e.virtual && s.virtual.enabled;
        let a;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (a = o
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${i}"]`
              )
            : t.eq(i)),
          a.addClass(s.slideActiveClass),
          s.loop &&
            (a.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : n
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = a.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let c = a.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? n
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : n
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: n,
            snapGrid: i,
            params: r,
            activeIndex: o,
            realIndex: a,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < n.length; e += 1)
            void 0 !== n[e + 1]
              ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
                ? (d = e)
                : s >= n[e] && s < n[e + 1] && (d = e + 1)
              : s >= n[e] && (d = e);
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (i.indexOf(s) >= 0) c = i.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((c >= i.length && (c = i.length - 1), d === o))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: o,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          a !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          n = L(e).closest(`.${s.slideClass}`)[0];
        let i,
          r = !1;
        if (n)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === n) {
              (r = !0), (i = e);
              break;
            }
        if (!n || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = n),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                L(n).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = i),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const F = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const {
          params: t,
          rtlTranslate: s,
          translate: n,
          $wrapperEl: i,
        } = this;
        if (t.virtualTranslate) return s ? -n : n;
        if (t.cssMode) return n;
        let r = M(i[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: n,
            params: i,
            $wrapperEl: r,
            wrapperEl: o,
            progress: a,
          } = s;
        let l,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = n ? -e : e) : (d = e),
          i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          i.cssMode
            ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : i.virtualTranslate ||
              r.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const u = s.maxTranslate() - s.minTranslate();
        (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
          l !== a && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, n = !0, i) {
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = n && e > l ? l : n && e < c ? c : e),
          r.updateProgress(d),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                N({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function j({ swiper: e, runCallbacks: t, direction: s, step: n }) {
      const { activeIndex: i, previousIndex: r } = e;
      let o = s;
      if (
        (o || (o = i > r ? "next" : i < r ? "prev" : "reset"),
        e.emit(`transition${n}`),
        t && i !== r)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${n}`);
        e.emit(`slideChangeTransition${n}`),
          "next" === o
            ? e.emit(`slideNextTransition${n}`)
            : e.emit(`slidePrevTransition${n}`);
      }
    }
    const R = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
        if ("number" != typeof e && "string" != typeof e)
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: h,
          enabled: f,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!f && !n && !i)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, o);
        let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || a.initialSlide || 0) === (d || 0) &&
            s &&
            r.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((r.updateProgress(v), a.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              n = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < n - (n - s) / 2
                ? (o = e)
                : t >= s && t < n && (o = e + 1)
              : t >= s && (o = e);
          }
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let b;
        if (
          ((b = o > u ? "next" : o < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (h[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                N({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, n),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
        const i = this;
        let r = e;
        return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n);
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const n = this,
          { animating: i, enabled: r, params: o } = n;
        if (!r) return n;
        let a = o.slidesPerGroup;
        "auto" === o.slidesPerView &&
          1 === o.slidesPerGroup &&
          o.slidesPerGroupAuto &&
          (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
        const l = n.activeIndex < o.slidesPerGroupSkip ? 1 : a;
        if (o.loop) {
          if (i && o.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        return o.rewind && n.isEnd
          ? n.slideTo(0, e, t, s)
          : n.slideTo(n.activeIndex + l, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const n = this,
          {
            params: i,
            animating: r,
            snapGrid: o,
            slidesGrid: a,
            rtlTranslate: l,
            enabled: c,
          } = n;
        if (!c) return n;
        if (i.loop) {
          if (r && i.loopPreventsSlide) return !1;
          n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? n.translate : -n.translate),
          p = o.map((e) => d(e));
        let h = o[p.indexOf(u) - 1];
        if (void 0 === h && i.cssMode) {
          let e;
          o.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (h = o[e > 0 ? e - 1 : e]);
        }
        let f = 0;
        return (
          void 0 !== h &&
            ((f = a.indexOf(h)),
            f < 0 && (f = n.activeIndex - 1),
            "auto" === i.slidesPerView &&
              1 === i.slidesPerGroup &&
              i.slidesPerGroupAuto &&
              ((f = f - n.slidesPerViewDynamic("previous", !0) + 1),
              (f = Math.max(f, 0)))),
          i.rewind && n.isBeginning
            ? n.slideTo(n.slides.length - 1, e, t, s)
            : n.slideTo(f, e, t, s)
        );
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, n = 0.5) {
        const i = this;
        let r = i.activeIndex;
        const o = Math.min(i.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / i.params.slidesPerGroup),
          l = i.rtlTranslate ? i.translate : -i.translate;
        if (l >= i.snapGrid[a]) {
          const e = i.snapGrid[a];
          l - e > (i.snapGrid[a + 1] - e) * n && (r += i.params.slidesPerGroup);
        } else {
          const e = i.snapGrid[a - 1];
          l - e <= (i.snapGrid[a] - e) * n && (r -= i.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, i.slidesGrid.length - 1)),
          i.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          n =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let i,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (i = parseInt(L(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
            t.centeredSlides
              ? r < e.loopedSlides - n / 2 ||
                r > e.slides.length - e.loopedSlides + n / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  k(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - n
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                k(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const W = {
      loopCreate: function () {
        const e = this,
          t = v(),
          { params: s, $wrapperEl: n } = e,
          i = n.children().length > 0 ? L(n.children()[0].parentNode) : n;
        i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = i.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let n = 0; n < e; n += 1) {
              const e = L(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              i.append(e);
            }
            r = i.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const o = [],
          a = [];
        r.each((t, s) => {
          const n = L(t);
          s < e.loopedSlides && a.push(t),
            s < r.length && s >= r.length - e.loopedSlides && o.push(t),
            n.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < a.length; e += 1)
          i.append(L(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = o.length - 1; e >= 0; e -= 1)
          i.prepend(L(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: n,
          allowSlidePrev: i,
          allowSlideNext: r,
          snapGrid: o,
          rtlTranslate: a,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -o[t] - e.getTranslate();
        if (t < n) {
          (l = s.length - 3 * n + t), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        } else if (t >= s.length - n) {
          (l = -s.length + t + n), (l += n);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((a ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function U(e) {
      const t = this,
        s = v(),
        n = w(),
        i = t.touchEventsData,
        { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = L(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((i.isTouchEvent = "touchstart" === l.type),
        !i.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!i.isTouchEvent && "button" in l && l.button > 0) return;
      if (i.isTouched && i.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = L(e.path[0]));
      const d = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t = this) {
              return (function t(s) {
                return s && s !== v() && s !== w()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t);
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (o.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (o.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = o.currentX,
        h = o.currentY,
        f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (f && (p <= m || p >= n.innerWidth - m)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      if (
        (Object.assign(i, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (o.startX = p),
        (o.startY = h),
        (i.touchStartTime = A()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (i.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(i.focusableElements) && (e = !1),
          s.activeElement &&
            L(s.activeElement).is(i.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const n = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !n) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.emit("touchStart", l);
    }
    function X(e) {
      const t = v(),
        s = this,
        n = s.touchEventsData,
        { params: i, touches: r, rtlTranslate: o, enabled: a } = s;
      if (!a) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
        return void (
          n.startMoving &&
          n.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (n.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          (s.allowClick = !1),
          void (
            n.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (n.touchStartTime = A()))
          )
        );
      if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (n.isTouched = !1), void (n.isMoved = !1);
        } else if (
          (d < r.startX && s.translate <= s.maxTranslate()) ||
          (d > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        n.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        L(l.target).is(n.focusableElements)
      )
        return (n.isMoved = !0), void (s.allowClick = !1);
      if (
        (n.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = u);
      const p = r.currentX - r.startX,
        h = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + h ** 2) < s.params.threshold)
        return;
      if (void 0 === n.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (n.isScrolling = !1)
          : p * p + h * h >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(h), Math.abs(p))) / Math.PI),
            (n.isScrolling = s.isHorizontal()
              ? e > i.touchAngle
              : 90 - e > i.touchAngle));
      }
      if (
        (n.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === n.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (n.startMoving = !0)),
        n.isScrolling)
      )
        return void (n.isTouched = !1);
      if (!n.startMoving) return;
      (s.allowClick = !1),
        !i.cssMode && l.cancelable && l.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
        n.isMoved ||
          (i.loop && !i.cssMode && s.loopFix(),
          (n.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (n.allowMomentumBounce = !1),
          !i.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (n.isMoved = !0);
      let f = s.isHorizontal() ? p : h;
      (r.diff = f),
        (f *= i.touchRatio),
        o && (f = -f),
        (s.swipeDirection = f > 0 ? "prev" : "next"),
        (n.currentTranslate = f + n.startTranslate);
      let m = !0,
        g = i.resistanceRatio;
      if (
        (i.touchReleaseOnEdges && (g = 0),
        f > 0 && n.currentTranslate > s.minTranslate()
          ? ((m = !1),
            i.resistance &&
              (n.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + n.startTranslate + f) ** g))
          : f < 0 &&
            n.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            i.resistance &&
              (n.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - n.startTranslate - f) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          n.currentTranslate < n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          n.currentTranslate > n.startTranslate &&
          (n.currentTranslate = n.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (n.currentTranslate = n.startTranslate),
        i.threshold > 0)
      ) {
        if (!(Math.abs(f) > i.threshold || n.allowThresholdMove))
          return void (n.currentTranslate = n.startTranslate);
        if (!n.allowThresholdMove)
          return (
            (n.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (n.currentTranslate = n.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      i.followFinger &&
        !i.cssMode &&
        (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
          i.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          i.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(n.currentTranslate),
        s.setTranslate(n.currentTranslate));
    }
    function Y(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: n,
          touches: i,
          rtlTranslate: r,
          slidesGrid: o,
          enabled: a,
        } = t;
      if (!a) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = A(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = A()),
        k(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === i.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = n.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        h = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < o.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t]
          ? u >= o[e] && u < o[e + t] && ((p = e), (h = o[e + t] - o[e]))
          : u >= o[e] && ((p = e), (h = o[o.length - 1] - o[o.length - 2]));
      }
      const f = (u - o[p]) / h,
        m = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (d > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (f >= n.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (f > 1 - n.longSwipesRatio ? t.slideTo(p + m) : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + m)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(p + m),
            "prev" === t.swipeDirection && t.slideTo(p));
      }
    }
    function K() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = n),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function Z(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function Q() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
      if (!n) return;
      let i;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let J = !1;
    function ee() {}
    const te = (e, t) => {
      const s = v(),
        {
          params: n,
          touchEvents: i,
          el: r,
          wrapperEl: o,
          device: a,
          support: l,
        } = e,
        c = !!n.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== i.start ||
          !l.passiveListener ||
          !n.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](i.start, e.onTouchStart, t),
          r[d](
            i.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[d](i.end, e.onTouchEnd, t),
          i.cancel && r[d](i.cancel, e.onTouchEnd, t);
      } else
        r[d](i.start, e.onTouchStart, !1),
          s[d](i.move, e.onTouchMove, c),
          s[d](i.end, e.onTouchEnd, !1);
      (n.preventClicks || n.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        n.cssMode && o[d]("scroll", e.onScroll),
        n.updateOnWindowResize
          ? e[u](
              a.ios || a.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              K,
              !0
            )
          : e[u]("observerUpdate", K, !0);
    };
    const se = {
        attachEvents: function () {
          const e = this,
            t = v(),
            { params: s, support: n } = e;
          (e.onTouchStart = U.bind(e)),
            (e.onTouchMove = X.bind(e)),
            (e.onTouchEnd = Y.bind(e)),
            s.cssMode && (e.onScroll = Q.bind(e)),
            (e.onClick = Z.bind(e)),
            n.touch && !J && (t.addEventListener("touchstart", ee), (J = !0)),
            te(e, "on");
        },
        detachEvents: function () {
          te(this, "off");
        },
      },
      ne = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const ie = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: n = 0,
            params: i,
            $el: r,
          } = e,
          o = i.breakpoints;
        if (!o || (o && 0 === Object.keys(o).length)) return;
        const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
        if (!a || e.currentBreakpoint === a) return;
        const l = (a in o ? o[a] : void 0) || e.originalParams,
          c = ne(e, i),
          d = ne(e, l),
          u = i.enabled;
        c && !d
          ? (r.removeClass(
              `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (r.addClass(`${i.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === i.grid.fill)) &&
              r.addClass(`${i.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== i.direction,
          h = i.loop && (l.slidesPerView !== i.slidesPerView || p);
        p && s && e.changeDirection(), O(e.params, l);
        const f = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !f ? e.disable() : !u && f && e.enable(),
          (e.currentBreakpoint = a),
          e.emit("_beforeBreakpoint", l),
          h &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - n + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t = "window", s) {
        if (!e || ("container" === t && !s)) return;
        let n = !1;
        const i = w(),
          r = "window" === t ? i.innerHeight : s.clientHeight,
          o = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < o.length; e += 1) {
          const { point: r, value: a } = o[e];
          "window" === t
            ? i.matchMedia(`(min-width: ${a}px)`).matches && (n = r)
            : a <= s.clientWidth && (n = r);
        }
        return n || "max";
      },
    };
    const re = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: n,
            $el: i,
            device: r,
            support: o,
          } = e,
          a = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((n) => {
                      e[n] && s.push(t + n);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !o.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: n },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const oe = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ae(e, t) {
      return function (s = {}) {
        const n = Object.keys(s)[0],
          i = s[n];
        "object" == typeof i && null !== i
          ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
              !0 === e[n] &&
              (e[n] = { auto: !0 }),
            n in e && "enabled" in i
              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                "object" != typeof e[n] ||
                  "enabled" in e[n] ||
                  (e[n].enabled = !0),
                e[n] || (e[n] = { enabled: !1 }),
                O(t, s))
              : O(t, s))
          : O(t, s);
      };
    }
    const le = {
        eventsEmitter: H,
        update: q,
        translate: F,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            n.cssMode ||
              (n.autoHeight && s.updateAutoHeight(),
              j({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: n } = s;
            (s.animating = !1),
              n.cssMode ||
                (s.setTransition(0),
                j({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: R,
        loop: W,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: se,
        breakpoints: ie,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: n } = s;
            if (n) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: re,
        images: {
          loadImage: function (e, t, s, n, i, r) {
            const o = w();
            let a;
            function l() {
              r && r();
            }
            L(e).parent("picture")[0] || (e.complete && i)
              ? l()
              : t
              ? ((a = new o.Image()),
                (a.onload = l),
                (a.onerror = l),
                n && (a.sizes = n),
                s && (a.srcset = s),
                t && (a.src = t))
              : l();
          },
          preloadImages: function () {
            const e = this;
            function t() {
              null != e &&
                e &&
                !e.destroyed &&
                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                e.imagesLoaded === e.imagesToLoad.length &&
                  (e.params.updateOnImagesReady && e.update(),
                  e.emit("imagesReady")));
            }
            e.imagesToLoad = e.$el.find("img");
            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
              const n = e.imagesToLoad[s];
              e.loadImage(
                n,
                n.currentSrc || n.getAttribute("src"),
                n.srcset || n.getAttribute("srcset"),
                n.sizes || n.getAttribute("sizes"),
                !0,
                t
              );
            }
          },
        },
      },
      ce = {};
    class de {
      constructor(...e) {
        let t, s;
        if (
          (1 === e.length &&
          e[0].constructor &&
          "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
            ? (s = e[0])
            : ([t, s] = e),
          s || (s = {}),
          (s = O({}, s)),
          t && !s.el && (s.el = t),
          s.el && L(s.el).length > 1)
        ) {
          const e = [];
          return (
            L(s.el).each((t) => {
              const n = O({}, s, { el: t });
              e.push(new de(n));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = V()),
          (n.device = B({ userAgent: s.userAgent })),
          (n.browser = G()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const i = {};
        n.modules.forEach((e) => {
          e({
            swiper: n,
            extendParams: ae(s, i),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const r = O({}, oe, i);
        return (
          (n.params = O({}, r, ce, s)),
          (n.originalParams = O({}, n.params)),
          (n.passedParams = O({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          (n.$ = L),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: L(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (n.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                n.support.touch || !n.params.simulateTouch
                  ? n.touchEventsTouch
                  : n.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: A(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = s.minTranslate(),
          i = (s.maxTranslate() - n) * e + n;
        s.translateTo(i, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const n = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: n,
          slidesGrid: i,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = n[a].swiperSlideSize;
          for (let s = a + 1; s < n.length; s += 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let s = a - 1; s >= 0; s -= 1)
            n[s] &&
              !e &&
              ((t += n[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < n.length; e += 1) {
            (t ? i[e] + r[e] - i[a] < o : i[e] - i[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            i[a] - i[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function n() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let i;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (n(), e.params.autoHeight && e.updateAutoHeight())
            : ((i =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              i || n()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          n = s.params.direction;
        return (
          e || (e = "horizontal" === n ? "vertical" : "horizontal"),
          e === n ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${n}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = L(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const n = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let i = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = L(e.shadowRoot.querySelector(n()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(n());
        })();
        if (0 === i.length && t.params.createElements) {
          const e = v().createElement("div");
          (i = L(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              i.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: i,
            wrapperEl: i[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === i.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: n, $el: i, $wrapperEl: r, slides: o } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            n.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              i.removeAttr("style"),
              r.removeAttr("style"),
              o &&
                o.length &&
                o
                  .removeClass(
                    [
                      n.slideVisibleClass,
                      n.slideActiveClass,
                      n.slideNextClass,
                      n.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        O(ce, e);
      }
      static get extendedDefaults() {
        return ce;
      }
      static get defaults() {
        return oe;
      }
      static installModule(e) {
        de.prototype.__modules__ || (de.prototype.__modules__ = []);
        const t = de.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => de.installModule(e)), de)
          : (de.installModule(e), de);
      }
    }
    Object.keys(le).forEach((e) => {
      Object.keys(le[e]).forEach((t) => {
        de.prototype[t] = le[e][t];
      });
    }),
      de.use([
        function ({ swiper: e, on: t, emit: s }) {
          const n = w();
          let i = null;
          const r = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            o = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== n.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((i = new ResizeObserver((t) => {
                  const { width: s, height: n } = e;
                  let i = s,
                    o = n;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: n }) => {
                      (n && n !== e.el) ||
                        ((i = s ? s.width : (t[0] || t).inlineSize),
                        (o = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (i === s && o === n) || r();
                })),
                i.observe(e.el))
              : (n.addEventListener("resize", r),
                n.addEventListener("orientationchange", o));
          }),
            t("destroy", () => {
              i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
                n.removeEventListener("resize", r),
                n.removeEventListener("orientationchange", o);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: n }) {
          const i = [],
            r = w(),
            o = (e, t = {}) => {
              const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(t)
                    : r.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                i.push(s);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = e.$el.parents();
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.$el[0], { childList: e.params.observeSlideChildren }),
                  o(e.$wrapperEl[0], { attributes: !1 });
              }
            }),
            s("destroy", () => {
              i.forEach((e) => {
                e.disconnect();
              }),
                i.splice(0, i.length);
            });
        },
      ]);
    const ue = de;
    function pe(e, t, s, n) {
      const i = v();
      return (
        e.params.createElements &&
          Object.keys(n).forEach((r) => {
            if (!s[r] && !0 === s.auto) {
              let o = e.$el.children(`.${n[r]}`)[0];
              o ||
                ((o = i.createElement("div")),
                (o.className = n[r]),
                e.$el.append(o)),
                (s[r] = o),
                (t[r] = o);
            }
          }),
        s
      );
    }
    function he({ swiper: e, extendParams: t, on: s, emit: n }) {
      function i(t) {
        let s;
        return (
          t &&
            ((s = L(t)),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.$el.find(t).length &&
              (s = e.$el.find(t))),
          s
        );
      }
      function r(t, s) {
        const n = e.params.navigation;
        t &&
          t.length > 0 &&
          (t[s ? "addClass" : "removeClass"](n.disabledClass),
          t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
      }
      function o() {
        if (e.params.loop) return;
        const { $nextEl: t, $prevEl: s } = e.navigation;
        r(s, e.isBeginning && !e.params.rewind),
          r(t, e.isEnd && !e.params.rewind);
      }
      function a(t) {
        t.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
      }
      function l(t) {
        t.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
      }
      function c() {
        const t = e.params.navigation;
        if (
          ((e.params.navigation = pe(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !t.nextEl && !t.prevEl)
        )
          return;
        const s = i(t.nextEl),
          n = i(t.prevEl);
        s && s.length > 0 && s.on("click", l),
          n && n.length > 0 && n.on("click", a),
          Object.assign(e.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: n,
            prevEl: n && n[0],
          }),
          e.enabled ||
            (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass));
      }
      function d() {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t.length &&
          (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", a),
            s.removeClass(e.params.navigation.disabledClass));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (e.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        s("init", () => {
          c(), o();
        }),
        s("toEdge fromEdge lock unlock", () => {
          o();
        }),
        s("destroy", () => {
          d();
        }),
        s("enable disable", () => {
          const { $nextEl: t, $prevEl: s } = e.navigation;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            ),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              );
        }),
        s("click", (t, s) => {
          const { $nextEl: i, $prevEl: r } = e.navigation,
            o = s.target;
          if (e.params.navigation.hideOnClick && !L(o).is(r) && !L(o).is(i)) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === o || e.pagination.el.contains(o))
            )
              return;
            let t;
            i
              ? (t = i.hasClass(e.params.navigation.hiddenClass))
              : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
              n(!0 === t ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(e.params.navigation.hiddenClass),
              r && r.toggleClass(e.params.navigation.hiddenClass);
          }
        }),
        Object.assign(e.navigation, { update: o, init: c, destroy: d });
    }
    function fe(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function me({ swiper: e, extendParams: t, on: s, emit: n }) {
      const i = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${i}-bullet`,
          bulletActiveClass: `${i}-bullet-active`,
          modifierClass: `${i}-`,
          currentClass: `${i}-current`,
          totalClass: `${i}-total`,
          hiddenClass: `${i}-hidden`,
          progressbarFillClass: `${i}-progressbar-fill`,
          progressbarOppositeClass: `${i}-progressbar-opposite`,
          clickableClass: `${i}-clickable`,
          lockClass: `${i}-lock`,
          horizontalClass: `${i}-horizontal`,
          verticalClass: `${i}-vertical`,
        },
      }),
        (e.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function a() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          !e.pagination.$el ||
          0 === e.pagination.$el.length
        );
      }
      function l(t, s) {
        const { bulletActiveClass: n } = e.params.pagination;
        t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
      }
      function c() {
        const t = e.rtl,
          s = e.params.pagination;
        if (a()) return;
        const i =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          c = e.pagination.$el;
        let d;
        const u = e.params.loop
          ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((d = Math.ceil(
                (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
              )),
              d > i - 1 - 2 * e.loopedSlides && (d -= i - 2 * e.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
            : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const n = e.pagination.bullets;
          let i, a, u;
          if (
            (s.dynamicBullets &&
              ((r = n
                .eq(0)
                [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              c.css(
                e.isHorizontal() ? "width" : "height",
                r * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((o += d - (e.previousIndex - e.loopedSlides || 0)),
                o > s.dynamicMainBullets - 1
                  ? (o = s.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (i = Math.max(d - o, 0)),
              (a = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
              (u = (a + i) / 2)),
            n.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            c.length > 1)
          )
            n.each((e) => {
              const t = L(e),
                n = t.index();
              n === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (n >= i &&
                    n <= a &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  n === i && l(t, "prev"),
                  n === a && l(t, "next"));
            });
          else {
            const t = n.eq(d),
              r = t.index();
            if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const t = n.eq(i),
                o = n.eq(a);
              for (let e = i; e <= a; e += 1)
                n.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (e.params.loop)
                if (r >= n.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                  n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else l(t, "prev"), l(o, "next");
              else l(t, "prev"), l(o, "next");
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(n.length, s.dynamicMainBullets + 4),
              o = (r * i - r) / 2 - u * r,
              a = t ? "right" : "left";
            n.css(e.isHorizontal() ? a : "top", `${o}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (c.find(fe(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            c.find(fe(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let t;
          t = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const n = (d + 1) / u;
          let i = 1,
            r = 1;
          "horizontal" === t ? (i = n) : (r = n),
            c
              .find(fe(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`)
              .transition(e.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (c.html(s.renderCustom(e, d + 1, u)), n("paginationRender", c[0]))
          : n("paginationUpdate", c[0]),
          e.params.watchOverflow &&
            e.enabled &&
            c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function d() {
        const t = e.params.pagination;
        if (a()) return;
        const s =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          i = e.pagination.$el;
        let r = "";
        if ("bullets" === t.type) {
          let n = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode &&
            e.params.freeMode.enabled &&
            !e.params.loop &&
            n > s &&
            (n = s);
          for (let s = 0; s < n; s += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, s, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
          i.html(r), (e.pagination.bullets = i.find(fe(t.bulletClass)));
        }
        "fraction" === t.type &&
          ((r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === t.type &&
            ((r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
      }
      function u() {
        e.params.pagination = pe(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const t = e.params.pagination;
        if (!t.el) return;
        let s = L(t.el);
        0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            s.length > 1 &&
            ((s = e.$el.find(t.el)),
            s.length > 1 &&
              (s = s.filter((t) => L(t).parents(".swiper")[0] === e.el))),
          "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
          s.addClass(t.modifierClass + t.type),
          s.addClass(t.modifierClass + e.params.direction),
          "bullets" === t.type &&
            t.dynamicBullets &&
            (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            (o = 0),
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
          "progressbar" === t.type &&
            t.progressbarOpposite &&
            s.addClass(t.progressbarOppositeClass),
          t.clickable &&
            s.on("click", fe(t.bulletClass), function (t) {
              t.preventDefault();
              let s = L(this).index() * e.params.slidesPerGroup;
              e.params.loop && (s += e.loopedSlides), e.slideTo(s);
            }),
          Object.assign(e.pagination, { $el: s, el: s[0] }),
          e.enabled || s.addClass(t.lockClass));
      }
      function p() {
        const t = e.params.pagination;
        if (a()) return;
        const s = e.pagination.$el;
        s.removeClass(t.hiddenClass),
          s.removeClass(t.modifierClass + t.type),
          s.removeClass(t.modifierClass + e.params.direction),
          e.pagination.bullets &&
            e.pagination.bullets.removeClass &&
            e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && s.off("click", fe(t.bulletClass));
      }
      s("init", () => {
        u(), d(), c();
      }),
        s("activeIndexChange", () => {
          (e.params.loop || void 0 === e.snapIndex) && c();
        }),
        s("snapIndexChange", () => {
          e.params.loop || c();
        }),
        s("slidesLengthChange", () => {
          e.params.loop && (d(), c());
        }),
        s("snapGridLengthChange", () => {
          e.params.loop || (d(), c());
        }),
        s("destroy", () => {
          p();
        }),
        s("enable disable", () => {
          const { $el: t } = e.pagination;
          t &&
            t[e.enabled ? "removeClass" : "addClass"](
              e.params.pagination.lockClass
            );
        }),
        s("lock unlock", () => {
          c();
        }),
        s("click", (t, s) => {
          const i = s.target,
            { $el: r } = e.pagination;
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            r.length > 0 &&
            !L(i).hasClass(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && i === e.navigation.nextEl) ||
                (e.navigation.prevEl && i === e.navigation.prevEl))
            )
              return;
            const t = r.hasClass(e.params.pagination.hiddenClass);
            n(!0 === t ? "paginationShow" : "paginationHide"),
              r.toggleClass(e.params.pagination.hiddenClass);
          }
        }),
        Object.assign(e.pagination, {
          render: d,
          update: c,
          init: u,
          destroy: p,
        });
    }
    function ge() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      ge(),
        document.querySelector(".strategies__slider") &&
          new ue(".strategies__slider", {
            modules: [he, me],
            observer: !0,
            observeParents: !0,
            slidesPerView: 3,
            spaceBetween: 32,
            speed: 800,
            loop: !0,
            Pagination: { el: "strategies__slider-dotts", clickable: !0 },
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 20 },
              620: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 32 },
            },
          });
    });
    new (s(732))({
      elements_selector: "[data-src],[data-srcset]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    e.watcher = new (class {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            c(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                n = { root: s[0], margin: s[1], threshold: s[2] },
                i = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    i = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === n.root &&
                    String(s) === n.margin &&
                    String(i) === n.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(n);
              this.scrollWatcherInit(i, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && l(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    })({});
    let ve = !1;
    setTimeout(() => {
      if (ve) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    let be = document.querySelector(".buttons-menu__darktheme"),
      we = document.querySelector("body");
    (be.onclick = function () {
      we.classList.toggle("dark-theme");
    }),
      document.addEventListener("DOMContentLoaded", () => {
        const e = localStorage.getItem("theme") || "auto";
        applyTheme(e);
        for (const t of document.querySelectorAll("#theme option"))
          t.selected = e === t.value;
        document
          .querySelector("#theme")
          .addEventListener("change", function () {
            localStorage.setItem("theme", this.value), applyTheme(this.value);
          });
      }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            i &&
              (r(),
              document.documentElement.classList.toggle("menu-open"),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"),
              document.documentElement.classList.contains("sub-menu-open") &&
                document.documentElement.classList.remove("sub-menu-open"));
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          s.length && r(s);
          let i = d(e, "spollers");
          function r(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    o(e),
                    e.addEventListener("click", a))
                  : (e.classList.remove("_spoller-init"),
                    o(e, !1),
                    e.removeEventListener("click", a));
            });
          }
          function o(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function a(e) {
            const s = e.target;
            if (s.closest("[data-spoller]")) {
              const i = s.closest("[data-spoller]"),
                r = i.closest("[data-spollers]"),
                o = !!r.hasAttribute("data-one-spoller");
              r.querySelectorAll("._slide").length ||
                (o && !i.classList.contains("_spoller-active") && l(r),
                i.classList.toggle("_spoller-active"),
                ((e, s = 500) => {
                  e.hidden ? n(e, s) : t(e, s);
                })(i.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const s = e.querySelector("[data-spoller]._spoller-active");
            s &&
              (s.classList.remove("_spoller-active"),
              t(s.nextElementSibling, 500));
          }
          i &&
            i.length &&
            i.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                r(e.itemsArray, e.matchMedia);
              }),
                r(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      window.addEventListener("load", function (e) {
        const s = document.querySelectorAll("[data-showmore]");
        let i, r;
        function o(e) {
          e.forEach((e) => {
            a(e.itemsArray, e.matchMedia);
          });
        }
        function a(e, s) {
          e.forEach((e) => {
            !(function (e, s = !1) {
              let i = (e = s ? e.item : e).querySelectorAll(
                  "[data-showmore-content]"
                ),
                r = e.querySelectorAll("[data-showmore-button]");
              (i = Array.from(i).filter(
                (t) => t.closest("[data-showmore]") === e
              )[0]),
                (r = Array.from(r).filter(
                  (t) => t.closest("[data-showmore]") === e
                )[0]);
              const o = l(e, i);
              (s.matches || !s) &&
              o <
                (function (e) {
                  let t = e.offsetHeight;
                  e.style.removeProperty("height");
                  let s = e.offsetHeight;
                  return (e.style.height = `${t}px`), s;
                })(i)
                ? (t(i, 0, o), (r.hidden = !1))
                : (n(i, 0, o), (r.hidden = !0));
            })(e, s);
          });
        }
        function l(e, t) {
          let s = 0;
          if ("items" === (e.dataset.showmore ? e.dataset.showmore : "size")) {
            const e = t.dataset.showmoreContent ? t.dataset.showmoreContent : 3,
              n = t.children;
            for (
              let t = 1;
              t < n.length && ((s += n[t - 1].offsetHeight), t != e);
              t++
            );
          } else s = t.dataset.showmoreContent ? t.dataset.showmoreContent : 0;
          return s;
        }
        function c(e) {
          const s = e.target,
            c = e.type;
          if ("click" === c) {
            if (s.closest("[data-showmore-button]")) {
              const e = s
                  .closest("[data-showmore-button]")
                  .closest("[data-showmore]"),
                i = e.querySelector("[data-showmore-content]"),
                r = e.dataset.showmoreButton ? e.dataset.showmoreButton : "500",
                o = l(e, i);
              i.classList.contains("_slide") ||
                (e.classList.contains("_showmore-active")
                  ? t(i, r, o)
                  : n(i, r, o),
                e.classList.toggle("_showmore-active"));
            }
          } else "resize" === c && (i && i.length && a(i), r && r.length && o(r));
        }
        s.length &&
          ((i = Array.from(s).filter(function (e, t, s) {
            return !e.dataset.showmoreMedia;
          })),
          i.length && a(i),
          document.addEventListener("click", c),
          window.addEventListener("resize", c),
          (r = d(s, "showmoreMedia")),
          r &&
            r.length &&
            (r.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                a(e.itemsArray, e.matchMedia);
              });
            }),
            o(r)));
      }),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              p.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && p.validateInput(t));
          });
      })(),
      (function (t) {
        e.popup && e.popup.open("some");
        const s = document.forms;
        if (s.length)
          for (const e of s)
            e.addEventListener("submit", function (e) {
              n(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                p.formClean(t);
              });
        async function n(e, s) {
          if (0 === (t ? p.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              s.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                n = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                r = new FormData(e);
              e.classList.add("_sending");
              const o = await fetch(t, { method: n, body: r });
              if (o.ok) {
                await o.json();
                e.classList.remove("_sending"), i(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (s.preventDefault(), i(e));
          } else {
            s.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && u(t, !0, 1e3);
          }
        }
        function i(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } })
          ),
            setTimeout(() => {
              if (e.popup) {
                const s = t.dataset.popupMessage;
                s && e.popup.open(s);
              }
            }, 0),
            p.formClean(t),
            l(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0);
  })();
})();
