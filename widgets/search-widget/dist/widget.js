var ni = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hy;
function $d() {
  if (hy) return be;
  hy = 1;
  var A = Symbol.for("react.transitional.element"), w = Symbol.for("react.fragment");
  function B(m, W, P) {
    var fl = null;
    if (P !== void 0 && (fl = "" + P), W.key !== void 0 && (fl = "" + W.key), "key" in W) {
      P = {};
      for (var vl in W)
        vl !== "key" && (P[vl] = W[vl]);
    } else P = W;
    return W = P.ref, {
      $$typeof: A,
      type: m,
      key: fl,
      ref: W !== void 0 ? W : null,
      props: P
    };
  }
  return be.Fragment = w, be.jsx = B, be.jsxs = B, be;
}
var gy;
function Fd() {
  return gy || (gy = 1, ni.exports = $d()), ni.exports;
}
var ml = Fd();
const kd = ":host{display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.search-widget{position:relative;width:100%;max-width:480px}.search-form{display:flex;align-items:center;border:1.5px solid #ccc;border-radius:4px;overflow:hidden;background:#fff;transition:border-color .2s}.search-form:focus-within{border-color:#099}.search-input{flex:1;border:none;outline:none;padding:10px 12px;font-size:14px;background:transparent;-webkit-appearance:none}.search-input::-webkit-search-cancel-button{-webkit-appearance:none}.search-btn{display:flex;align-items:center;justify-content:center;padding:0 12px;height:40px;border:none;background:#099;color:#fff;cursor:pointer;transition:background .2s}.search-btn:hover{background:#007a7a}.suggestions-panel{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 4px 12px #0000001a;z-index:9999;max-height:420px;overflow-y:auto}.suggestions-section{padding:4px 0}.suggestions-section+.suggestions-section{border-top:1px solid #f0f0f0}.section-header{padding:8px 14px 4px;font-size:11px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:.06em}.suggestions-list{list-style:none;margin:0;padding:0}.suggestion-item{padding:9px 14px;font-size:14px;cursor:pointer;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.suggestion-item:hover{background:#f5f5f5}.suggestion-item mark{background:none;font-weight:600;color:inherit}.product-item{padding:9px 14px}.product-item:hover{background:#f5f5f5}.product-link{display:block;font-size:14px;font-weight:500;color:#333;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.product-link:hover{color:#099}.product-link mark{background:none;font-weight:700;color:inherit}.product-by{font-size:12px;color:#888;margin-top:2px}.product-desc{font-size:12px;color:#666;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.view-all-products{display:block;padding:8px 14px;font-size:13px;color:#099;text-decoration:none;font-weight:500;border-top:1px solid #f0f0f0}.view-all-products:hover{text-decoration:underline}.suggestions-loading{position:absolute;top:calc(100% + 4px);left:0;right:0;padding:10px 14px;background:#fff;border:1px solid #ddd;border-radius:4px;font-size:14px;color:#888}";
var fi = { exports: {} }, ze = {}, ci = { exports: {} }, ii = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sy;
function Id() {
  return Sy || (Sy = 1, (function(A) {
    function w(r, p) {
      var C = r.length;
      r.push(p);
      l: for (; 0 < C; ) {
        var ul = C - 1 >>> 1, il = r[ul];
        if (0 < W(il, p))
          r[ul] = p, r[C] = il, C = ul;
        else break l;
      }
    }
    function B(r) {
      return r.length === 0 ? null : r[0];
    }
    function m(r) {
      if (r.length === 0) return null;
      var p = r[0], C = r.pop();
      if (C !== p) {
        r[0] = C;
        l: for (var ul = 0, il = r.length, o = il >>> 1; ul < o; ) {
          var T = 2 * (ul + 1) - 1, _ = r[T], D = T + 1, Y = r[D];
          if (0 > W(_, C))
            D < il && 0 > W(Y, _) ? (r[ul] = Y, r[D] = C, ul = D) : (r[ul] = _, r[T] = C, ul = T);
          else if (D < il && 0 > W(Y, C))
            r[ul] = Y, r[D] = C, ul = D;
          else break l;
        }
      }
      return p;
    }
    function W(r, p) {
      var C = r.sortIndex - p.sortIndex;
      return C !== 0 ? C : r.id - p.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var P = performance;
      A.unstable_now = function() {
        return P.now();
      };
    } else {
      var fl = Date, vl = fl.now();
      A.unstable_now = function() {
        return fl.now() - vl;
      };
    }
    var N = [], z = [], L = 1, O = null, cl = 3, Rl = !1, jl = !1, Bl = !1, Dt = !1, $l = typeof setTimeout == "function" ? setTimeout : null, $t = typeof clearTimeout == "function" ? clearTimeout : null, Cl = typeof setImmediate < "u" ? setImmediate : null;
    function ft(r) {
      for (var p = B(z); p !== null; ) {
        if (p.callback === null) m(z);
        else if (p.startTime <= r)
          m(z), p.sortIndex = p.expirationTime, w(N, p);
        else break;
        p = B(z);
      }
    }
    function Et(r) {
      if (Bl = !1, ft(r), !jl)
        if (B(N) !== null)
          jl = !0, Gl || (Gl = !0, Xl());
        else {
          var p = B(z);
          p !== null && St(Et, p.startTime - r);
        }
    }
    var Gl = !1, K = -1, Ql = 5, Tt = -1;
    function Xu() {
      return Dt ? !0 : !(A.unstable_now() - Tt < Ql);
    }
    function At() {
      if (Dt = !1, Gl) {
        var r = A.unstable_now();
        Tt = r;
        var p = !0;
        try {
          l: {
            jl = !1, Bl && (Bl = !1, $t(K), K = -1), Rl = !0;
            var C = cl;
            try {
              t: {
                for (ft(r), O = B(N); O !== null && !(O.expirationTime > r && Xu()); ) {
                  var ul = O.callback;
                  if (typeof ul == "function") {
                    O.callback = null, cl = O.priorityLevel;
                    var il = ul(
                      O.expirationTime <= r
                    );
                    if (r = A.unstable_now(), typeof il == "function") {
                      O.callback = il, ft(r), p = !0;
                      break t;
                    }
                    O === B(N) && m(N), ft(r);
                  } else m(N);
                  O = B(N);
                }
                if (O !== null) p = !0;
                else {
                  var o = B(z);
                  o !== null && St(
                    Et,
                    o.startTime - r
                  ), p = !1;
                }
              }
              break l;
            } finally {
              O = null, cl = C, Rl = !1;
            }
            p = void 0;
          }
        } finally {
          p ? Xl() : Gl = !1;
        }
      }
    }
    var Xl;
    if (typeof Cl == "function")
      Xl = function() {
        Cl(At);
      };
    else if (typeof MessageChannel < "u") {
      var Eu = new MessageChannel(), Ut = Eu.port2;
      Eu.port1.onmessage = At, Xl = function() {
        Ut.postMessage(null);
      };
    } else
      Xl = function() {
        $l(At, 0);
      };
    function St(r, p) {
      K = $l(function() {
        r(A.unstable_now());
      }, p);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(r) {
      r.callback = null;
    }, A.unstable_forceFrameRate = function(r) {
      0 > r || 125 < r ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ql = 0 < r ? Math.floor(1e3 / r) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return cl;
    }, A.unstable_next = function(r) {
      switch (cl) {
        case 1:
        case 2:
        case 3:
          var p = 3;
          break;
        default:
          p = cl;
      }
      var C = cl;
      cl = p;
      try {
        return r();
      } finally {
        cl = C;
      }
    }, A.unstable_requestPaint = function() {
      Dt = !0;
    }, A.unstable_runWithPriority = function(r, p) {
      switch (r) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          r = 3;
      }
      var C = cl;
      cl = r;
      try {
        return p();
      } finally {
        cl = C;
      }
    }, A.unstable_scheduleCallback = function(r, p, C) {
      var ul = A.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? ul + C : ul) : C = ul, r) {
        case 1:
          var il = -1;
          break;
        case 2:
          il = 250;
          break;
        case 5:
          il = 1073741823;
          break;
        case 4:
          il = 1e4;
          break;
        default:
          il = 5e3;
      }
      return il = C + il, r = {
        id: L++,
        callback: p,
        priorityLevel: r,
        startTime: C,
        expirationTime: il,
        sortIndex: -1
      }, C > ul ? (r.sortIndex = C, w(z, r), B(N) === null && r === B(z) && (Bl ? ($t(K), K = -1) : Bl = !0, St(Et, C - ul))) : (r.sortIndex = il, w(N, r), jl || Rl || (jl = !0, Gl || (Gl = !0, Xl()))), r;
    }, A.unstable_shouldYield = Xu, A.unstable_wrapCallback = function(r) {
      var p = cl;
      return function() {
        var C = cl;
        cl = p;
        try {
          return r.apply(this, arguments);
        } finally {
          cl = C;
        }
      };
    };
  })(ii)), ii;
}
var ry;
function Pd() {
  return ry || (ry = 1, ci.exports = Id()), ci.exports;
}
var si = { exports: {} }, q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var by;
function lm() {
  if (by) return q;
  by = 1;
  var A = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), fl = Symbol.for("react.context"), vl = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), cl = Symbol.iterator;
  function Rl(o) {
    return o === null || typeof o != "object" ? null : (o = cl && o[cl] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var jl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Bl = Object.assign, Dt = {};
  function $l(o, T, _) {
    this.props = o, this.context = T, this.refs = Dt, this.updater = _ || jl;
  }
  $l.prototype.isReactComponent = {}, $l.prototype.setState = function(o, T) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, T, "setState");
  }, $l.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function $t() {
  }
  $t.prototype = $l.prototype;
  function Cl(o, T, _) {
    this.props = o, this.context = T, this.refs = Dt, this.updater = _ || jl;
  }
  var ft = Cl.prototype = new $t();
  ft.constructor = Cl, Bl(ft, $l.prototype), ft.isPureReactComponent = !0;
  var Et = Array.isArray;
  function Gl() {
  }
  var K = { H: null, A: null, T: null, S: null }, Ql = Object.prototype.hasOwnProperty;
  function Tt(o, T, _) {
    var D = _.ref;
    return {
      $$typeof: A,
      type: o,
      key: T,
      ref: D !== void 0 ? D : null,
      props: _
    };
  }
  function Xu(o, T) {
    return Tt(o.type, T, o.props);
  }
  function At(o) {
    return typeof o == "object" && o !== null && o.$$typeof === A;
  }
  function Xl(o) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(_) {
      return T[_];
    });
  }
  var Eu = /\/+/g;
  function Ut(o, T) {
    return typeof o == "object" && o !== null && o.key != null ? Xl("" + o.key) : T.toString(36);
  }
  function St(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Gl, Gl) : (o.status = "pending", o.then(
          function(T) {
            o.status === "pending" && (o.status = "fulfilled", o.value = T);
          },
          function(T) {
            o.status === "pending" && (o.status = "rejected", o.reason = T);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function r(o, T, _, D, Y) {
    var G = typeof o;
    (G === "undefined" || G === "boolean") && (o = null);
    var I = !1;
    if (o === null) I = !0;
    else
      switch (G) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case A:
            case w:
              I = !0;
              break;
            case L:
              return I = o._init, r(
                I(o._payload),
                T,
                _,
                D,
                Y
              );
          }
      }
    if (I)
      return Y = Y(o), I = D === "" ? "." + Ut(o, 0) : D, Et(Y) ? (_ = "", I != null && (_ = I.replace(Eu, "$&/") + "/"), r(Y, T, _, "", function(Oa) {
        return Oa;
      })) : Y != null && (At(Y) && (Y = Xu(
        Y,
        _ + (Y.key == null || o && o.key === Y.key ? "" : ("" + Y.key).replace(
          Eu,
          "$&/"
        ) + "/") + I
      )), T.push(Y)), 1;
    I = 0;
    var Yl = D === "" ? "." : D + ":";
    if (Et(o))
      for (var Sl = 0; Sl < o.length; Sl++)
        D = o[Sl], G = Yl + Ut(D, Sl), I += r(
          D,
          T,
          _,
          G,
          Y
        );
    else if (Sl = Rl(o), typeof Sl == "function")
      for (o = Sl.call(o), Sl = 0; !(D = o.next()).done; )
        D = D.value, G = Yl + Ut(D, Sl++), I += r(
          D,
          T,
          _,
          G,
          Y
        );
    else if (G === "object") {
      if (typeof o.then == "function")
        return r(
          St(o),
          T,
          _,
          D,
          Y
        );
      throw T = String(o), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function p(o, T, _) {
    if (o == null) return o;
    var D = [], Y = 0;
    return r(o, D, "", "", function(G) {
      return T.call(_, G, Y++);
    }), D;
  }
  function C(o) {
    if (o._status === -1) {
      var T = o._result;
      T = T(), T.then(
        function(_) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = _);
        },
        function(_) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = _);
        }
      ), o._status === -1 && (o._status = 0, o._result = T);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var ul = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, il = {
    map: p,
    forEach: function(o, T, _) {
      p(
        o,
        function() {
          T.apply(this, arguments);
        },
        _
      );
    },
    count: function(o) {
      var T = 0;
      return p(o, function() {
        T++;
      }), T;
    },
    toArray: function(o) {
      return p(o, function(T) {
        return T;
      }) || [];
    },
    only: function(o) {
      if (!At(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return q.Activity = O, q.Children = il, q.Component = $l, q.Fragment = B, q.Profiler = W, q.PureComponent = Cl, q.StrictMode = m, q.Suspense = N, q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return K.H.useMemoCache(o);
    }
  }, q.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, q.cacheSignal = function() {
    return null;
  }, q.cloneElement = function(o, T, _) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var D = Bl({}, o.props), Y = o.key;
    if (T != null)
      for (G in T.key !== void 0 && (Y = "" + T.key), T)
        !Ql.call(T, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && T.ref === void 0 || (D[G] = T[G]);
    var G = arguments.length - 2;
    if (G === 1) D.children = _;
    else if (1 < G) {
      for (var I = Array(G), Yl = 0; Yl < G; Yl++)
        I[Yl] = arguments[Yl + 2];
      D.children = I;
    }
    return Tt(o.type, Y, D);
  }, q.createContext = function(o) {
    return o = {
      $$typeof: fl,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: P,
      _context: o
    }, o;
  }, q.createElement = function(o, T, _) {
    var D, Y = {}, G = null;
    if (T != null)
      for (D in T.key !== void 0 && (G = "" + T.key), T)
        Ql.call(T, D) && D !== "key" && D !== "__self" && D !== "__source" && (Y[D] = T[D]);
    var I = arguments.length - 2;
    if (I === 1) Y.children = _;
    else if (1 < I) {
      for (var Yl = Array(I), Sl = 0; Sl < I; Sl++)
        Yl[Sl] = arguments[Sl + 2];
      Y.children = Yl;
    }
    if (o && o.defaultProps)
      for (D in I = o.defaultProps, I)
        Y[D] === void 0 && (Y[D] = I[D]);
    return Tt(o, G, Y);
  }, q.createRef = function() {
    return { current: null };
  }, q.forwardRef = function(o) {
    return { $$typeof: vl, render: o };
  }, q.isValidElement = At, q.lazy = function(o) {
    return {
      $$typeof: L,
      _payload: { _status: -1, _result: o },
      _init: C
    };
  }, q.memo = function(o, T) {
    return {
      $$typeof: z,
      type: o,
      compare: T === void 0 ? null : T
    };
  }, q.startTransition = function(o) {
    var T = K.T, _ = {};
    K.T = _;
    try {
      var D = o(), Y = K.S;
      Y !== null && Y(_, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Gl, ul);
    } catch (G) {
      ul(G);
    } finally {
      T !== null && _.types !== null && (T.types = _.types), K.T = T;
    }
  }, q.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, q.use = function(o) {
    return K.H.use(o);
  }, q.useActionState = function(o, T, _) {
    return K.H.useActionState(o, T, _);
  }, q.useCallback = function(o, T) {
    return K.H.useCallback(o, T);
  }, q.useContext = function(o) {
    return K.H.useContext(o);
  }, q.useDebugValue = function() {
  }, q.useDeferredValue = function(o, T) {
    return K.H.useDeferredValue(o, T);
  }, q.useEffect = function(o, T) {
    return K.H.useEffect(o, T);
  }, q.useEffectEvent = function(o) {
    return K.H.useEffectEvent(o);
  }, q.useId = function() {
    return K.H.useId();
  }, q.useImperativeHandle = function(o, T, _) {
    return K.H.useImperativeHandle(o, T, _);
  }, q.useInsertionEffect = function(o, T) {
    return K.H.useInsertionEffect(o, T);
  }, q.useLayoutEffect = function(o, T) {
    return K.H.useLayoutEffect(o, T);
  }, q.useMemo = function(o, T) {
    return K.H.useMemo(o, T);
  }, q.useOptimistic = function(o, T) {
    return K.H.useOptimistic(o, T);
  }, q.useReducer = function(o, T, _) {
    return K.H.useReducer(o, T, _);
  }, q.useRef = function(o) {
    return K.H.useRef(o);
  }, q.useState = function(o) {
    return K.H.useState(o);
  }, q.useSyncExternalStore = function(o, T, _) {
    return K.H.useSyncExternalStore(
      o,
      T,
      _
    );
  }, q.useTransition = function() {
    return K.H.useTransition();
  }, q.version = "19.2.8", q;
}
var zy;
function vi() {
  return zy || (zy = 1, si.exports = lm()), si.exports;
}
var oi = { exports: {} }, ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ey;
function tm() {
  if (Ey) return ql;
  Ey = 1;
  var A = vi();
  function w(N) {
    var z = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var L = 2; L < arguments.length; L++)
        z += "&args[]=" + encodeURIComponent(arguments[L]);
    }
    return "Minified React error #" + N + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function B() {
  }
  var m = {
    d: {
      f: B,
      r: function() {
        throw Error(w(522));
      },
      D: B,
      C: B,
      L: B,
      m: B,
      X: B,
      S: B,
      M: B
    },
    p: 0,
    findDOMNode: null
  }, W = Symbol.for("react.portal");
  function P(N, z, L) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: O == null ? null : "" + O,
      children: N,
      containerInfo: z,
      implementation: L
    };
  }
  var fl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function vl(N, z) {
    if (N === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, ql.createPortal = function(N, z) {
    var L = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(w(299));
    return P(N, z, null, L);
  }, ql.flushSync = function(N) {
    var z = fl.T, L = m.p;
    try {
      if (fl.T = null, m.p = 2, N) return N();
    } finally {
      fl.T = z, m.p = L, m.d.f();
    }
  }, ql.preconnect = function(N, z) {
    typeof N == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, m.d.C(N, z));
  }, ql.prefetchDNS = function(N) {
    typeof N == "string" && m.d.D(N);
  }, ql.preinit = function(N, z) {
    if (typeof N == "string" && z && typeof z.as == "string") {
      var L = z.as, O = vl(L, z.crossOrigin), cl = typeof z.integrity == "string" ? z.integrity : void 0, Rl = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      L === "style" ? m.d.S(
        N,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: O,
          integrity: cl,
          fetchPriority: Rl
        }
      ) : L === "script" && m.d.X(N, {
        crossOrigin: O,
        integrity: cl,
        fetchPriority: Rl,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, ql.preinitModule = function(N, z) {
    if (typeof N == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var L = vl(
            z.as,
            z.crossOrigin
          );
          m.d.M(N, {
            crossOrigin: L,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && m.d.M(N);
  }, ql.preload = function(N, z) {
    if (typeof N == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var L = z.as, O = vl(L, z.crossOrigin);
      m.d.L(N, L, {
        crossOrigin: O,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0,
        type: typeof z.type == "string" ? z.type : void 0,
        fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
        referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
        imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
        imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
        media: typeof z.media == "string" ? z.media : void 0
      });
    }
  }, ql.preloadModule = function(N, z) {
    if (typeof N == "string")
      if (z) {
        var L = vl(z.as, z.crossOrigin);
        m.d.m(N, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: L,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else m.d.m(N);
  }, ql.requestFormReset = function(N) {
    m.d.r(N);
  }, ql.unstable_batchedUpdates = function(N, z) {
    return N(z);
  }, ql.useFormState = function(N, z, L) {
    return fl.H.useFormState(N, z, L);
  }, ql.useFormStatus = function() {
    return fl.H.useHostTransitionStatus();
  }, ql.version = "19.2.8", ql;
}
var Ty;
function um() {
  if (Ty) return oi.exports;
  Ty = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (w) {
        console.error(w);
      }
  }
  return A(), oi.exports = tm(), oi.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ay;
function am() {
  if (Ay) return ze;
  Ay = 1;
  var A = Pd(), w = vi(), B = um();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function W(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function P(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function fl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function vl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function N(l) {
    if (P(l) !== l)
      throw Error(m(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = P(l), t === null) throw Error(m(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return N(e), l;
          if (n === a) return N(e), t;
          n = n.sibling;
        }
        throw Error(m(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(m(189));
        }
      }
      if (u.alternate !== a) throw Error(m(190));
    }
    if (u.tag !== 3) throw Error(m(188));
    return u.stateNode.current === u ? l : t;
  }
  function L(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = L(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var O = Object.assign, cl = Symbol.for("react.element"), Rl = Symbol.for("react.transitional.element"), jl = Symbol.for("react.portal"), Bl = Symbol.for("react.fragment"), Dt = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), $t = Symbol.for("react.consumer"), Cl = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Ql = Symbol.for("react.lazy"), Tt = Symbol.for("react.activity"), Xu = Symbol.for("react.memo_cache_sentinel"), At = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object" ? null : (l = At && l[At] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Eu = Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Eu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Dt:
        return "StrictMode";
      case Et:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Cl:
          return l.displayName || "Context";
        case $t:
          return (l._context.displayName || "Context") + ".Consumer";
        case ft:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case K:
          return t = l.displayName || null, t !== null ? t : Ut(l.type) || "Memo";
        case Ql:
          t = l._payload, l = l._init;
          try {
            return Ut(l(t));
          } catch {
          }
      }
    return null;
  }
  var St = Array.isArray, r = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ul = [], il = -1;
  function o(l) {
    return { current: l };
  }
  function T(l) {
    0 > il || (l.current = ul[il], ul[il] = null, il--);
  }
  function _(l, t) {
    il++, ul[il] = l.current, l.current = t;
  }
  var D = o(null), Y = o(null), G = o(null), I = o(null);
  function Yl(l, t) {
    switch (_(G, t), _(Y, l), _(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? jo(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = jo(t), l = Go(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    T(D), _(D, l);
  }
  function Sl() {
    T(D), T(Y), T(G);
  }
  function Oa(l) {
    l.memoizedState !== null && _(I, l);
    var t = D.current, u = Go(t, l.type);
    t !== u && (_(Y, l), _(D, u));
  }
  function Ee(l) {
    Y.current === l && (T(D), T(Y)), I.current === l && (T(I), he._currentValue = C);
  }
  var Qn, di;
  function Tu(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Qn = t && t[1] || "", di = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Qn + l + di;
  }
  var Xn = !1;
  function Zn(l, t) {
    if (!l || Xn) return "";
    Xn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (g) {
                  h = g;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (g) {
            if (g && h && typeof g.stack == "string")
              return [g.stack, h.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), d = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === d.length)
          for (a = i.length - 1, e = d.length - 1; 1 <= a && 0 <= e && i[a] !== d[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== d[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== d[e]) {
                  var S = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Xn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Tu(u) : "";
  }
  function Oy(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Tu(l.type);
      case 16:
        return Tu("Lazy");
      case 13:
        return l.child !== t && t !== null ? Tu("Suspense Fallback") : Tu("Suspense");
      case 19:
        return Tu("SuspenseList");
      case 0:
      case 15:
        return Zn(l.type, !1);
      case 11:
        return Zn(l.type.render, !1);
      case 1:
        return Zn(l.type, !0);
      case 31:
        return Tu("Activity");
      default:
        return "";
    }
  }
  function mi(l) {
    try {
      var t = "", u = null;
      do
        t += Oy(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Vn = Object.prototype.hasOwnProperty, Ln = A.unstable_scheduleCallback, Kn = A.unstable_cancelCallback, My = A.unstable_shouldYield, Dy = A.unstable_requestPaint, Fl = A.unstable_now, Uy = A.unstable_getCurrentPriorityLevel, hi = A.unstable_ImmediatePriority, gi = A.unstable_UserBlockingPriority, Te = A.unstable_NormalPriority, Ny = A.unstable_LowPriority, Si = A.unstable_IdlePriority, Hy = A.log, Ry = A.unstable_setDisableYieldValue, Ma = null, kl = null;
  function Ft(l) {
    if (typeof Hy == "function" && Ry(l), kl && typeof kl.setStrictMode == "function")
      try {
        kl.setStrictMode(Ma, l);
      } catch {
      }
  }
  var Il = Math.clz32 ? Math.clz32 : By, Cy = Math.log, qy = Math.LN2;
  function By(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Cy(l) / qy | 0) | 0;
  }
  var Ae = 256, pe = 262144, _e = 4194304;
  function Au(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Oe(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = Au(a) : (f &= c, f !== 0 ? e = Au(f) : u || (u = c & ~l, u !== 0 && (e = Au(u))))) : (c = a & ~n, c !== 0 ? e = Au(c) : f !== 0 ? e = Au(f) : u || (u = a & ~l, u !== 0 && (e = Au(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Da(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Yy(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ri() {
    var l = _e;
    return _e <<= 1, (_e & 62914560) === 0 && (_e = 4194304), l;
  }
  function Jn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ua(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function xy(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - Il(u), E = 1 << S;
      c[S] = 0, i[S] = -1;
      var h = d[S];
      if (h !== null)
        for (d[S] = null, S = 0; S < h.length; S++) {
          var g = h[S];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~E;
    }
    a !== 0 && bi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function bi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function zi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Il(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Ei(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : wn(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Wn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ti() {
    var l = p.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : iy(l.type));
  }
  function Ai(l, t) {
    var u = p.p;
    try {
      return p.p = l, t();
    } finally {
      p.p = u;
    }
  }
  var kt = Math.random().toString(36).slice(2), Ml = "__reactFiber$" + kt, Zl = "__reactProps$" + kt, Zu = "__reactContainer$" + kt, $n = "__reactEvents$" + kt, jy = "__reactListeners$" + kt, Gy = "__reactHandles$" + kt, pi = "__reactResources$" + kt, Na = "__reactMarker$" + kt;
  function Fn(l) {
    delete l[Ml], delete l[Zl], delete l[$n], delete l[jy], delete l[Gy];
  }
  function Vu(l) {
    var t = l[Ml];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Zu] || u[Ml]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Jo(l); l !== null; ) {
            if (u = l[Ml]) return u;
            l = Jo(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Lu(l) {
    if (l = l[Ml] || l[Zu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ha(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(m(33));
  }
  function Ku(l) {
    var t = l[pi];
    return t || (t = l[pi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function _l(l) {
    l[Na] = !0;
  }
  var _i = /* @__PURE__ */ new Set(), Oi = {};
  function pu(l, t) {
    Ju(l, t), Ju(l + "Capture", t);
  }
  function Ju(l, t) {
    for (Oi[l] = t, l = 0; l < t.length; l++)
      _i.add(t[l]);
  }
  var Qy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Mi = {}, Di = {};
  function Xy(l) {
    return Vn.call(Di, l) ? !0 : Vn.call(Mi, l) ? !1 : Qy.test(l) ? Di[l] = !0 : (Mi[l] = !0, !1);
  }
  function Me(l, t, u) {
    if (Xy(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function De(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Nt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ui(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Zy(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function kn(l) {
    if (!l._valueTracker) {
      var t = Ui(l) ? "checked" : "value";
      l._valueTracker = Zy(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Ni(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Ui(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function Ue(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Vy = /[\n"\\]/g;
  function it(l) {
    return l.replace(
      Vy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function In(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ct(t)) : l.value !== "" + ct(t) && (l.value = "" + ct(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? Pn(l, f, ct(t)) : u != null ? Pn(l, f, ct(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ct(c) : l.removeAttribute("name");
  }
  function Hi(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        kn(l);
        return;
      }
      u = u != null ? "" + ct(u) : "", t = t != null ? "" + ct(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), kn(l);
  }
  function Pn(l, t, u) {
    t === "number" && Ue(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function wu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ct(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ri(l, t, u) {
    if (t != null && (t = "" + ct(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ct(u) : "";
  }
  function Ci(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(m(92));
        if (St(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ct(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), kn(l);
  }
  function Wu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ly = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Ly.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Bi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(m(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && qi(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && qi(l, n, t[n]);
  }
  function lf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ky = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Jy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ne(l) {
    return Jy.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ht() {
  }
  var tf = null;
  function uf(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $u = null, Fu = null;
  function Yi(l) {
    var t = Lu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Zl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (In(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + it(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Zl] || null;
                if (!e) throw Error(m(90));
                In(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Ni(a);
          }
          break l;
        case "textarea":
          Ri(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && wu(l, !!u.multiple, t, !1);
      }
    }
  }
  var af = !1;
  function xi(l, t, u) {
    if (af) return l(t, u);
    af = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (af = !1, ($u !== null || Fu !== null) && (rn(), $u && (t = $u, l = Fu, Fu = $u = null, Yi(t), l)))
        for (t = 0; t < l.length; t++) Yi(l[t]);
    }
  }
  function Ra(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Zl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        m(231, t, typeof u)
      );
    return u;
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ef = !1;
  if (Rt)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function() {
          ef = !0;
        }
      }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca);
    } catch {
      ef = !1;
    }
  var It = null, nf = null, He = null;
  function ji() {
    if (He) return He;
    var l, t = nf, u = t.length, a, e = "value" in It ? It.value : It.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return He = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Ce() {
    return !0;
  }
  function Gi() {
    return !1;
  }
  function Vl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ce : Gi, this.isPropagationStopped = Gi, this;
    }
    return O(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Ce);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Ce);
      },
      persist: function() {
      },
      isPersistent: Ce
    }), t;
  }
  var _u = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qe = Vl(_u), qa = O({}, _u, { view: 0, detail: 0 }), wy = Vl(qa), ff, cf, Ba, Be = O({}, qa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: of,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ba && (Ba && l.type === "mousemove" ? (ff = l.screenX - Ba.screenX, cf = l.screenY - Ba.screenY) : cf = ff = 0, Ba = l), ff);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : cf;
    }
  }), Qi = Vl(Be), Wy = O({}, Be, { dataTransfer: 0 }), $y = Vl(Wy), Fy = O({}, qa, { relatedTarget: 0 }), sf = Vl(Fy), ky = O({}, _u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Iy = Vl(ky), Py = O({}, _u, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), lv = Vl(Py), tv = O({}, _u, { data: 0 }), Xi = Vl(tv), uv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, av = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ev = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nv(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ev[l]) ? !!t[l] : !1;
  }
  function of() {
    return nv;
  }
  var fv = O({}, qa, {
    key: function(l) {
      if (l.key) {
        var t = uv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? av[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: of,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), cv = Vl(fv), iv = O({}, Be, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Zi = Vl(iv), sv = O({}, qa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: of
  }), ov = Vl(sv), yv = O({}, _u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vv = Vl(yv), dv = O({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), mv = Vl(dv), hv = O({}, _u, {
    newState: 0,
    oldState: 0
  }), gv = Vl(hv), Sv = [9, 13, 27, 32], yf = Rt && "CompositionEvent" in window, Ya = null;
  Rt && "documentMode" in document && (Ya = document.documentMode);
  var rv = Rt && "TextEvent" in window && !Ya, Vi = Rt && (!yf || Ya && 8 < Ya && 11 >= Ya), Li = " ", Ki = !1;
  function Ji(l, t) {
    switch (l) {
      case "keyup":
        return Sv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function bv(l, t) {
    switch (l) {
      case "compositionend":
        return wi(t);
      case "keypress":
        return t.which !== 32 ? null : (Ki = !0, Li);
      case "textInput":
        return l = t.data, l === Li && Ki ? null : l;
      default:
        return null;
    }
  }
  function zv(l, t) {
    if (ku)
      return l === "compositionend" || !yf && Ji(l, t) ? (l = ji(), He = nf = It = null, ku = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ev = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Wi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ev[l.type] : t === "textarea";
  }
  function $i(l, t, u, a) {
    $u ? Fu ? Fu.push(a) : Fu = [a] : $u = a, t = _n(t, "onChange"), 0 < t.length && (u = new qe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var xa = null, ja = null;
  function Tv(l) {
    Ro(l, 0);
  }
  function Ye(l) {
    var t = Ha(l);
    if (Ni(t)) return l;
  }
  function Fi(l, t) {
    if (l === "change") return t;
  }
  var ki = !1;
  if (Rt) {
    var vf;
    if (Rt) {
      var df = "oninput" in document;
      if (!df) {
        var Ii = document.createElement("div");
        Ii.setAttribute("oninput", "return;"), df = typeof Ii.oninput == "function";
      }
      vf = df;
    } else vf = !1;
    ki = vf && (!document.documentMode || 9 < document.documentMode);
  }
  function Pi() {
    xa && (xa.detachEvent("onpropertychange", ls), ja = xa = null);
  }
  function ls(l) {
    if (l.propertyName === "value" && Ye(ja)) {
      var t = [];
      $i(
        t,
        ja,
        l,
        uf(l)
      ), xi(Tv, t);
    }
  }
  function Av(l, t, u) {
    l === "focusin" ? (Pi(), xa = t, ja = u, xa.attachEvent("onpropertychange", ls)) : l === "focusout" && Pi();
  }
  function pv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(ja);
  }
  function _v(l, t) {
    if (l === "click") return Ye(t);
  }
  function Ov(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function Mv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : Mv;
  function Ga(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Vn.call(t, e) || !Pl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function ts(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function us(l, t) {
    var u = ts(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ts(u);
    }
  }
  function as(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? as(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function es(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function mf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Dv = Rt && "documentMode" in document && 11 >= document.documentMode, Iu = null, hf = null, Qa = null, gf = !1;
  function ns(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    gf || Iu == null || Iu !== Ue(a) || (a = Iu, "selectionStart" in a && mf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Qa && Ga(Qa, a) || (Qa = a, a = _n(hf, "onSelect"), 0 < a.length && (t = new qe(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Iu)));
  }
  function Ou(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Pu = {
    animationend: Ou("Animation", "AnimationEnd"),
    animationiteration: Ou("Animation", "AnimationIteration"),
    animationstart: Ou("Animation", "AnimationStart"),
    transitionrun: Ou("Transition", "TransitionRun"),
    transitionstart: Ou("Transition", "TransitionStart"),
    transitioncancel: Ou("Transition", "TransitionCancel"),
    transitionend: Ou("Transition", "TransitionEnd")
  }, Sf = {}, fs = {};
  Rt && (fs = document.createElement("div").style, "AnimationEvent" in window || (delete Pu.animationend.animation, delete Pu.animationiteration.animation, delete Pu.animationstart.animation), "TransitionEvent" in window || delete Pu.transitionend.transition);
  function Mu(l) {
    if (Sf[l]) return Sf[l];
    if (!Pu[l]) return l;
    var t = Pu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in fs)
        return Sf[l] = t[u];
    return l;
  }
  var cs = Mu("animationend"), is = Mu("animationiteration"), ss = Mu("animationstart"), Uv = Mu("transitionrun"), Nv = Mu("transitionstart"), Hv = Mu("transitioncancel"), os = Mu("transitionend"), ys = /* @__PURE__ */ new Map(), rf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rf.push("scrollEnd");
  function rt(l, t) {
    ys.set(l, t), pu(t, [l]);
  }
  var xe = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, st = [], la = 0, bf = 0;
  function je() {
    for (var l = la, t = bf = la = 0; t < l; ) {
      var u = st[t];
      st[t++] = null;
      var a = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (st[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && vs(u, e, n);
    }
  }
  function Ge(l, t, u, a) {
    st[la++] = l, st[la++] = t, st[la++] = u, st[la++] = a, bf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function zf(l, t, u, a) {
    return Ge(l, t, u, a), Qe(l);
  }
  function Du(l, t) {
    return Ge(l, null, null, t), Qe(l);
  }
  function vs(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Il(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ie)
      throw ie = 0, Uc = null, Error(m(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ta = {};
  function Rv(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, u, a) {
    return new Rv(l, t, u, a);
  }
  function Ef(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ct(l, t) {
    var u = l.alternate;
    return u === null ? (u = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function ds(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xe(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Ef(l) && (f = 1);
    else if (typeof l == "string")
      f = xd(
        l,
        u,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Tt:
          return l = lt(31, u, t, e), l.elementType = Tt, l.lanes = n, l;
        case Bl:
          return Uu(u.children, e, n, t);
        case Dt:
          f = 8, e |= 24;
          break;
        case $l:
          return l = lt(12, u, t, e | 2), l.elementType = $l, l.lanes = n, l;
        case Et:
          return l = lt(13, u, t, e), l.elementType = Et, l.lanes = n, l;
        case Gl:
          return l = lt(19, u, t, e), l.elementType = Gl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Cl:
                f = 10;
                break l;
              case $t:
                f = 9;
                break l;
              case ft:
                f = 11;
                break l;
              case K:
                f = 14;
                break l;
              case Ql:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            m(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = lt(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Uu(l, t, u, a) {
    return l = lt(7, l, a, t), l.lanes = u, l;
  }
  function Tf(l, t, u) {
    return l = lt(6, l, null, t), l.lanes = u, l;
  }
  function ms(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Af(l, t, u) {
    return t = lt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var hs = /* @__PURE__ */ new WeakMap();
  function ot(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = hs.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: mi(t)
      }, hs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: mi(t)
    };
  }
  var ua = [], aa = 0, Ze = null, Xa = 0, yt = [], vt = 0, Pt = null, pt = 1, _t = "";
  function qt(l, t) {
    ua[aa++] = Xa, ua[aa++] = Ze, Ze = l, Xa = t;
  }
  function gs(l, t, u) {
    yt[vt++] = pt, yt[vt++] = _t, yt[vt++] = Pt, Pt = l;
    var a = pt;
    l = _t;
    var e = 32 - Il(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, pt = 1 << 32 - Il(t) + e | u << e | a, _t = n + l;
    } else
      pt = 1 << n | u << e | a, _t = l;
  }
  function pf(l) {
    l.return !== null && (qt(l, 1), gs(l, 1, 0));
  }
  function _f(l) {
    for (; l === Ze; )
      Ze = ua[--aa], ua[aa] = null, Xa = ua[--aa], ua[aa] = null;
    for (; l === Pt; )
      Pt = yt[--vt], yt[vt] = null, _t = yt[--vt], yt[vt] = null, pt = yt[--vt], yt[vt] = null;
  }
  function Ss(l, t) {
    yt[vt++] = pt, yt[vt++] = _t, yt[vt++] = Pt, pt = t.id, _t = t.overflow, Pt = l;
  }
  var Dl = null, ol = null, J = !1, lu = null, dt = !1, Of = Error(m(519));
  function tu(l) {
    var t = Error(
      m(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Za(ot(t, l)), Of;
  }
  function rs(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Ml] = l, t[Zl] = a, u) {
      case "dialog":
        X("cancel", t), X("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        X("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < oe.length; u++)
          X(oe[u], t);
        break;
      case "source":
        X("error", t);
        break;
      case "img":
      case "image":
      case "link":
        X("error", t), X("load", t);
        break;
      case "details":
        X("toggle", t);
        break;
      case "input":
        X("invalid", t), Hi(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        X("invalid", t);
        break;
      case "textarea":
        X("invalid", t), Ci(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Yo(t.textContent, u) ? (a.popover != null && (X("beforetoggle", t), X("toggle", t)), a.onScroll != null && X("scroll", t), a.onScrollEnd != null && X("scrollend", t), a.onClick != null && (t.onclick = Ht), t = !0) : t = !1, t || tu(l, !0);
  }
  function bs(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          dt = !1;
          return;
        case 27:
        case 3:
          dt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function ea(l) {
    if (l !== Dl) return !1;
    if (!J) return bs(l), J = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Lc(l.type, l.memoizedProps)), u = !u), u && ol && tu(l), bs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      ol = Ko(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      ol = Ko(l);
    } else
      t === 27 ? (t = ol, hu(l.type) ? (l = $c, $c = null, ol = l) : ol = t) : ol = Dl ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Nu() {
    ol = Dl = null, J = !1;
  }
  function Mf() {
    var l = lu;
    return l !== null && (wl === null ? wl = l : wl.push.apply(
      wl,
      l
    ), lu = null), l;
  }
  function Za(l) {
    lu === null ? lu = [l] : lu.push(l);
  }
  var Df = o(null), Hu = null, Bt = null;
  function uu(l, t, u) {
    _(Df, t._currentValue), t._currentValue = u;
  }
  function Yt(l) {
    l._currentValue = Df.current, T(Df);
  }
  function Uf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Nf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Uf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(m(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Uf(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function na(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(m(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Pl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === I.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      e = e.return;
    }
    l !== null && Nf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ru(l) {
    Hu = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ul(l) {
    return zs(Hu, l);
  }
  function Le(l, t) {
    return Hu === null && Ru(l), zs(l, t);
  }
  function zs(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Bt === null) {
      if (l === null) throw Error(m(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return u;
  }
  var Cv = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, qv = A.unstable_scheduleCallback, Bv = A.unstable_NormalPriority, zl = {
    $$typeof: Cl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hf() {
    return {
      controller: new Cv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Va(l) {
    l.refCount--, l.refCount === 0 && qv(Bv, function() {
      l.controller.abort();
    });
  }
  var La = null, Rf = 0, fa = 0, ca = null;
  function Yv(l, t) {
    if (La === null) {
      var u = La = [];
      Rf = 0, fa = Bc(), ca = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Rf++, t.then(Es, Es), t;
  }
  function Es() {
    if (--Rf === 0 && La !== null) {
      ca !== null && (ca.status = "fulfilled");
      var l = La;
      La = null, fa = 0, ca = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function xv(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var Ts = r.S;
  r.S = function(l, t) {
    no = Fl(), typeof t == "object" && t !== null && typeof t.then == "function" && Yv(l, t), Ts !== null && Ts(l, t);
  };
  var Cu = o(null);
  function Cf() {
    var l = Cu.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? _(Cu, Cu.current) : _(Cu, t.pool);
  }
  function As() {
    var l = Cf();
    return l === null ? null : { parent: zl._currentValue, pool: l };
  }
  var ia = Error(m(460)), qf = Error(m(474)), Je = Error(m(542)), we = { then: function() {
  } };
  function ps(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function _s(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ht, Ht), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ms(l), l;
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (l = sl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(m(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ms(l), l;
        }
        throw Bu = t, ia;
    }
  }
  function qu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Bu = u, ia) : u;
    }
  }
  var Bu = null;
  function Os() {
    if (Bu === null) throw Error(m(459));
    var l = Bu;
    return Bu = null, l;
  }
  function Ms(l) {
    if (l === ia || l === Je)
      throw Error(m(483));
  }
  var sa = null, Ka = 0;
  function We(l) {
    var t = Ka;
    return Ka += 1, sa === null && (sa = []), _s(sa, l, t);
  }
  function Ja(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === cl ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Ds(l) {
    function t(y, s) {
      if (l) {
        var v = y.deletions;
        v === null ? (y.deletions = [s], y.flags |= 16) : v.push(s);
      }
    }
    function u(y, s) {
      if (!l) return null;
      for (; s !== null; )
        t(y, s), s = s.sibling;
      return null;
    }
    function a(y) {
      for (var s = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? s.set(y.key, y) : s.set(y.index, y), y = y.sibling;
      return s;
    }
    function e(y, s) {
      return y = Ct(y, s), y.index = 0, y.sibling = null, y;
    }
    function n(y, s, v) {
      return y.index = v, l ? (v = y.alternate, v !== null ? (v = v.index, v < s ? (y.flags |= 67108866, s) : v) : (y.flags |= 67108866, s)) : (y.flags |= 1048576, s);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, s, v, b) {
      return s === null || s.tag !== 6 ? (s = Tf(v, y.mode, b), s.return = y, s) : (s = e(s, v), s.return = y, s);
    }
    function i(y, s, v, b) {
      var H = v.type;
      return H === Bl ? S(
        y,
        s,
        v.props.children,
        b,
        v.key
      ) : s !== null && (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ql && qu(H) === s.type) ? (s = e(s, v.props), Ja(s, v), s.return = y, s) : (s = Xe(
        v.type,
        v.key,
        v.props,
        null,
        y.mode,
        b
      ), Ja(s, v), s.return = y, s);
    }
    function d(y, s, v, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== v.containerInfo || s.stateNode.implementation !== v.implementation ? (s = Af(v, y.mode, b), s.return = y, s) : (s = e(s, v.children || []), s.return = y, s);
    }
    function S(y, s, v, b, H) {
      return s === null || s.tag !== 7 ? (s = Uu(
        v,
        y.mode,
        b,
        H
      ), s.return = y, s) : (s = e(s, v), s.return = y, s);
    }
    function E(y, s, v) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Tf(
          "" + s,
          y.mode,
          v
        ), s.return = y, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Rl:
            return v = Xe(
              s.type,
              s.key,
              s.props,
              null,
              y.mode,
              v
            ), Ja(v, s), v.return = y, v;
          case jl:
            return s = Af(
              s,
              y.mode,
              v
            ), s.return = y, s;
          case Ql:
            return s = qu(s), E(y, s, v);
        }
        if (St(s) || Xl(s))
          return s = Uu(
            s,
            y.mode,
            v,
            null
          ), s.return = y, s;
        if (typeof s.then == "function")
          return E(y, We(s), v);
        if (s.$$typeof === Cl)
          return E(
            y,
            Le(y, s),
            v
          );
        $e(y, s);
      }
      return null;
    }
    function h(y, s, v, b) {
      var H = s !== null ? s.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return H !== null ? null : c(y, s, "" + v, b);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Rl:
            return v.key === H ? i(y, s, v, b) : null;
          case jl:
            return v.key === H ? d(y, s, v, b) : null;
          case Ql:
            return v = qu(v), h(y, s, v, b);
        }
        if (St(v) || Xl(v))
          return H !== null ? null : S(y, s, v, b, null);
        if (typeof v.then == "function")
          return h(
            y,
            s,
            We(v),
            b
          );
        if (v.$$typeof === Cl)
          return h(
            y,
            s,
            Le(y, v),
            b
          );
        $e(y, v);
      }
      return null;
    }
    function g(y, s, v, b, H) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return y = y.get(v) || null, c(s, y, "" + b, H);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Rl:
            return y = y.get(
              b.key === null ? v : b.key
            ) || null, i(s, y, b, H);
          case jl:
            return y = y.get(
              b.key === null ? v : b.key
            ) || null, d(s, y, b, H);
          case Ql:
            return b = qu(b), g(
              y,
              s,
              v,
              b,
              H
            );
        }
        if (St(b) || Xl(b))
          return y = y.get(v) || null, S(s, y, b, H, null);
        if (typeof b.then == "function")
          return g(
            y,
            s,
            v,
            We(b),
            H
          );
        if (b.$$typeof === Cl)
          return g(
            y,
            s,
            v,
            Le(s, b),
            H
          );
        $e(s, b);
      }
      return null;
    }
    function M(y, s, v, b) {
      for (var H = null, $ = null, U = s, j = s = 0, V = null; U !== null && j < v.length; j++) {
        U.index > j ? (V = U, U = null) : V = U.sibling;
        var F = h(
          y,
          U,
          v[j],
          b
        );
        if (F === null) {
          U === null && (U = V);
          break;
        }
        l && U && F.alternate === null && t(y, U), s = n(F, s, j), $ === null ? H = F : $.sibling = F, $ = F, U = V;
      }
      if (j === v.length)
        return u(y, U), J && qt(y, j), H;
      if (U === null) {
        for (; j < v.length; j++)
          U = E(y, v[j], b), U !== null && (s = n(
            U,
            s,
            j
          ), $ === null ? H = U : $.sibling = U, $ = U);
        return J && qt(y, j), H;
      }
      for (U = a(U); j < v.length; j++)
        V = g(
          U,
          y,
          j,
          v[j],
          b
        ), V !== null && (l && V.alternate !== null && U.delete(
          V.key === null ? j : V.key
        ), s = n(
          V,
          s,
          j
        ), $ === null ? H = V : $.sibling = V, $ = V);
      return l && U.forEach(function(zu) {
        return t(y, zu);
      }), J && qt(y, j), H;
    }
    function R(y, s, v, b) {
      if (v == null) throw Error(m(151));
      for (var H = null, $ = null, U = s, j = s = 0, V = null, F = v.next(); U !== null && !F.done; j++, F = v.next()) {
        U.index > j ? (V = U, U = null) : V = U.sibling;
        var zu = h(y, U, F.value, b);
        if (zu === null) {
          U === null && (U = V);
          break;
        }
        l && U && zu.alternate === null && t(y, U), s = n(zu, s, j), $ === null ? H = zu : $.sibling = zu, $ = zu, U = V;
      }
      if (F.done)
        return u(y, U), J && qt(y, j), H;
      if (U === null) {
        for (; !F.done; j++, F = v.next())
          F = E(y, F.value, b), F !== null && (s = n(F, s, j), $ === null ? H = F : $.sibling = F, $ = F);
        return J && qt(y, j), H;
      }
      for (U = a(U); !F.done; j++, F = v.next())
        F = g(U, y, j, F.value, b), F !== null && (l && F.alternate !== null && U.delete(F.key === null ? j : F.key), s = n(F, s, j), $ === null ? H = F : $.sibling = F, $ = F);
      return l && U.forEach(function(Wd) {
        return t(y, Wd);
      }), J && qt(y, j), H;
    }
    function nl(y, s, v, b) {
      if (typeof v == "object" && v !== null && v.type === Bl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Rl:
            l: {
              for (var H = v.key; s !== null; ) {
                if (s.key === H) {
                  if (H = v.type, H === Bl) {
                    if (s.tag === 7) {
                      u(
                        y,
                        s.sibling
                      ), b = e(
                        s,
                        v.props.children
                      ), b.return = y, y = b;
                      break l;
                    }
                  } else if (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ql && qu(H) === s.type) {
                    u(
                      y,
                      s.sibling
                    ), b = e(s, v.props), Ja(b, v), b.return = y, y = b;
                    break l;
                  }
                  u(y, s);
                  break;
                } else t(y, s);
                s = s.sibling;
              }
              v.type === Bl ? (b = Uu(
                v.props.children,
                y.mode,
                b,
                v.key
              ), b.return = y, y = b) : (b = Xe(
                v.type,
                v.key,
                v.props,
                null,
                y.mode,
                b
              ), Ja(b, v), b.return = y, y = b);
            }
            return f(y);
          case jl:
            l: {
              for (H = v.key; s !== null; ) {
                if (s.key === H)
                  if (s.tag === 4 && s.stateNode.containerInfo === v.containerInfo && s.stateNode.implementation === v.implementation) {
                    u(
                      y,
                      s.sibling
                    ), b = e(s, v.children || []), b.return = y, y = b;
                    break l;
                  } else {
                    u(y, s);
                    break;
                  }
                else t(y, s);
                s = s.sibling;
              }
              b = Af(v, y.mode, b), b.return = y, y = b;
            }
            return f(y);
          case Ql:
            return v = qu(v), nl(
              y,
              s,
              v,
              b
            );
        }
        if (St(v))
          return M(
            y,
            s,
            v,
            b
          );
        if (Xl(v)) {
          if (H = Xl(v), typeof H != "function") throw Error(m(150));
          return v = H.call(v), R(
            y,
            s,
            v,
            b
          );
        }
        if (typeof v.then == "function")
          return nl(
            y,
            s,
            We(v),
            b
          );
        if (v.$$typeof === Cl)
          return nl(
            y,
            s,
            Le(y, v),
            b
          );
        $e(y, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, s !== null && s.tag === 6 ? (u(y, s.sibling), b = e(s, v), b.return = y, y = b) : (u(y, s), b = Tf(v, y.mode, b), b.return = y, y = b), f(y)) : u(y, s);
    }
    return function(y, s, v, b) {
      try {
        Ka = 0;
        var H = nl(
          y,
          s,
          v,
          b
        );
        return sa = null, H;
      } catch (U) {
        if (U === ia || U === Je) throw U;
        var $ = lt(29, U, null, y.mode);
        return $.lanes = b, $.return = y, $;
      } finally {
      }
    };
  }
  var Yu = Ds(!0), Us = Ds(!1), au = !1;
  function Bf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Yf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function eu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function nu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (k & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Qe(l), vs(l, null, u), t;
    }
    return Ge(l, a, t, u), Qe(l);
  }
  function wa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zi(l, u);
    }
  }
  function xf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var jf = !1;
  function Wa() {
    if (jf) {
      var l = ca;
      if (l !== null) throw l;
    }
  }
  function $a(l, t, u, a) {
    jf = !1;
    var e = l.updateQueue;
    au = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? n = d : f.next = d, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = d : c.next = d, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var E = e.baseState;
      f = 0, S = d = i = null, c = n;
      do {
        var h = c.lane & -536870913, g = h !== c.lane;
        if (g ? (Z & h) === h : (a & h) === h) {
          h !== 0 && h === fa && (jf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var M = l, R = c;
            h = t;
            var nl = u;
            switch (R.tag) {
              case 1:
                if (M = R.payload, typeof M == "function") {
                  E = M.call(nl, E, h);
                  break l;
                }
                E = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = R.payload, h = typeof M == "function" ? M.call(nl, E, h) : M, h == null) break l;
                E = O({}, E, h);
                break l;
              case 2:
                au = !0;
            }
          }
          h = c.callback, h !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [h] : g.push(h));
        } else
          g = {
            lane: h,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (d = S = g, i = E) : S = S.next = g, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = E), e.baseState = i, e.firstBaseUpdate = d, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), ou |= f, l.lanes = f, l.memoizedState = E;
    }
  }
  function Ns(l, t) {
    if (typeof l != "function")
      throw Error(m(191, l));
    l.call(t);
  }
  function Hs(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Ns(u[l], t);
  }
  var oa = o(null), Fe = o(0);
  function Rs(l, t) {
    l = Kt, _(Fe, l), _(oa, t), Kt = l | t.baseLanes;
  }
  function Gf() {
    _(Fe, Kt), _(oa, oa.current);
  }
  function Qf() {
    Kt = Fe.current, T(oa), T(Fe);
  }
  var tt = o(null), mt = null;
  function fu(l) {
    var t = l.alternate;
    _(rl, rl.current & 1), _(tt, l), mt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (mt = l);
  }
  function Xf(l) {
    _(rl, rl.current), _(tt, l), mt === null && (mt = l);
  }
  function Cs(l) {
    l.tag === 22 ? (_(rl, rl.current), _(tt, l), mt === null && (mt = l)) : cu();
  }
  function cu() {
    _(rl, rl.current), _(tt, tt.current);
  }
  function ut(l) {
    T(tt), mt === l && (mt = null), T(rl);
  }
  var rl = o(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || wc(u) || Wc(u)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var xt = 0, x = null, al = null, El = null, Ie = !1, ya = !1, xu = !1, Pe = 0, Fa = 0, va = null, jv = 0;
  function hl() {
    throw Error(m(321));
  }
  function Zf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Pl(l[u], t[u])) return !1;
    return !0;
  }
  function Vf(l, t, u, a, e, n) {
    return xt = n, x = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, r.H = l === null || l.memoizedState === null ? g0 : ec, xu = !1, n = u(a, e), xu = !1, ya && (n = Bs(
      t,
      u,
      a,
      e
    )), qs(l), n;
  }
  function qs(l) {
    r.H = Pa;
    var t = al !== null && al.next !== null;
    if (xt = 0, El = al = x = null, Ie = !1, Fa = 0, va = null, t) throw Error(m(300));
    l === null || Tl || (l = l.dependencies, l !== null && Ve(l) && (Tl = !0));
  }
  function Bs(l, t, u, a) {
    x = l;
    var e = 0;
    do {
      if (ya && (va = null), Fa = 0, ya = !1, 25 <= e) throw Error(m(301));
      if (e += 1, El = al = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      r.H = S0, n = t(u, a);
    } while (ya);
    return n;
  }
  function Gv() {
    var l = r.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ka(t) : t, l = l.useState()[0], (al !== null ? al.memoizedState : null) !== l && (x.flags |= 1024), t;
  }
  function Lf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Kf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Jf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    xt = 0, El = al = x = null, ya = !1, Fa = Pe = 0, va = null;
  }
  function xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return El === null ? x.memoizedState = El = l : El = El.next = l, El;
  }
  function bl() {
    if (al === null) {
      var l = x.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = El === null ? x.memoizedState : El.next;
    if (t !== null)
      El = t, al = l;
    else {
      if (l === null)
        throw x.alternate === null ? Error(m(467)) : Error(m(310));
      al = l, l = {
        memoizedState: al.memoizedState,
        baseState: al.baseState,
        baseQueue: al.baseQueue,
        queue: al.queue,
        next: null
      }, El === null ? x.memoizedState = El = l : El = El.next = l;
    }
    return El;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ka(l) {
    var t = Fa;
    return Fa += 1, va === null && (va = []), l = _s(va, l, t), t = x, (El === null ? t.memoizedState : El.next) === null && (t = t.alternate, r.H = t === null || t.memoizedState === null ? g0 : ec), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ka(l);
      if (l.$$typeof === Cl) return Ul(l);
    }
    throw Error(m(438, String(l)));
  }
  function wf(l) {
    var t = null, u = x.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = x.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = ln(), x.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Xu;
    return t.index++, u;
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = bl();
    return Wf(t, al, l);
  }
  function Wf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, d = t, S = !1;
      do {
        var E = d.lane & -536870913;
        if (E !== d.lane ? (Z & E) === E : (xt & E) === E) {
          var h = d.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), E === fa && (S = !0);
          else if ((xt & h) === h) {
            d = d.next, h === fa && (S = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = E, f = n) : i = i.next = E, x.lanes |= h, ou |= h;
          E = d.action, xu && u(n, E), n = d.hasEagerState ? d.eagerState : u(n, E);
        } else
          h = {
            lane: E,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, x.lanes |= E, ou |= E;
        d = d.next;
      } while (d !== null && d !== t);
      if (i === null ? f = n : i.next = c, !Pl(n, l.memoizedState) && (Tl = !0, S && (u = ca, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function $f(l) {
    var t = bl(), u = t.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Pl(n, t.memoizedState) || (Tl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ys(l, t, u) {
    var a = x, e = bl(), n = J;
    if (n) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = t();
    var f = !Pl(
      (al || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, Tl = !0), e = e.queue, If(Gs.bind(null, a, e, l), [
      l
    ]), e.getSnapshot !== t || f || El !== null && El.memoizedState.tag & 1) {
      if (a.flags |= 2048, da(
        9,
        { destroy: void 0 },
        js.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), sl === null) throw Error(m(349));
      n || (xt & 127) !== 0 || xs(a, t, u);
    }
    return u;
  }
  function xs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = x.updateQueue, t === null ? (t = ln(), x.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function js(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Qs(t) && Xs(l);
  }
  function Gs(l, t, u) {
    return u(function() {
      Qs(t) && Xs(l);
    });
  }
  function Qs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Pl(l, u);
    } catch {
      return !0;
    }
  }
  function Xs(l) {
    var t = Du(l, 2);
    t !== null && Wl(t, l, 2);
  }
  function Ff(l) {
    var t = xl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), xu) {
        Ft(!0);
        try {
          u();
        } finally {
          Ft(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jt,
      lastRenderedState: l
    }, t;
  }
  function Zs(l, t, u, a) {
    return l.baseState = u, Wf(
      l,
      al,
      typeof a == "function" ? a : jt
    );
  }
  function Qv(l, t, u, a, e) {
    if (nn(l)) throw Error(m(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      r.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Vs(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Vs(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = r.T, f = {};
      r.T = f;
      try {
        var c = u(e, a), i = r.S;
        i !== null && i(f, c), Ls(l, t, c);
      } catch (d) {
        kf(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), r.T = n;
      }
    } else
      try {
        n = u(e, a), Ls(l, t, n);
      } catch (d) {
        kf(l, t, d);
      }
  }
  function Ls(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Ks(l, t, a);
      },
      function(a) {
        return kf(l, t, a);
      }
    ) : Ks(l, t, u);
  }
  function Ks(l, t, u) {
    t.status = "fulfilled", t.value = u, Js(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Vs(l, u)));
  }
  function kf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, Js(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Js(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ws(l, t) {
    return t;
  }
  function Ws(l, t) {
    if (J) {
      var u = sl.formState;
      if (u !== null) {
        l: {
          var a = x;
          if (J) {
            if (ol) {
              t: {
                for (var e = ol, n = dt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ht(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                ol = ht(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            tu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = xl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ws,
      lastRenderedState: t
    }, u.queue = a, u = d0.bind(
      null,
      x,
      a
    ), a.dispatch = u, a = Ff(!1), n = ac.bind(
      null,
      x,
      !1,
      a.queue
    ), a = xl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Qv.bind(
      null,
      x,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function $s(l) {
    var t = bl();
    return Fs(t, al, l);
  }
  function Fs(l, t, u) {
    if (t = Wf(
      l,
      t,
      ws
    )[0], l = un(jt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ka(t);
      } catch (f) {
        throw f === ia ? Je : f;
      }
    else a = t;
    t = bl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (x.flags |= 2048, da(
      9,
      { destroy: void 0 },
      Xv.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Xv(l, t) {
    l.action = t;
  }
  function ks(l) {
    var t = bl(), u = al;
    if (u !== null)
      return Fs(t, u, l);
    bl(), t = t.memoizedState, u = bl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function da(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = x.updateQueue, t === null && (t = ln(), x.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Is() {
    return bl().memoizedState;
  }
  function an(l, t, u, a) {
    var e = xl();
    x.flags |= l, e.memoizedState = da(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function en(l, t, u, a) {
    var e = bl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    al !== null && a !== null && Zf(a, al.memoizedState.deps) ? e.memoizedState = da(t, n, u, a) : (x.flags |= l, e.memoizedState = da(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Ps(l, t) {
    an(8390656, 8, l, t);
  }
  function If(l, t) {
    en(2048, 8, l, t);
  }
  function Zv(l) {
    x.flags |= 4;
    var t = x.updateQueue;
    if (t === null)
      t = ln(), x.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function l0(l) {
    var t = bl().memoizedState;
    return Zv({ ref: t, nextImpl: l }), function() {
      if ((k & 2) !== 0) throw Error(m(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function t0(l, t) {
    return en(4, 2, l, t);
  }
  function u0(l, t) {
    return en(4, 4, l, t);
  }
  function a0(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function e0(l, t, u) {
    u = u != null ? u.concat([l]) : null, en(4, 4, a0.bind(null, t, l), u);
  }
  function Pf() {
  }
  function n0(l, t) {
    var u = bl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Zf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function f0(l, t) {
    var u = bl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Zf(t, a[1]))
      return a[0];
    if (a = l(), xu) {
      Ft(!0);
      try {
        l();
      } finally {
        Ft(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function lc(l, t, u) {
    return u === void 0 || (xt & 1073741824) !== 0 && (Z & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = co(), x.lanes |= l, ou |= l, u);
  }
  function c0(l, t, u, a) {
    return Pl(u, t) ? u : oa.current !== null ? (l = lc(l, u, a), Pl(l, t) || (Tl = !0), l) : (xt & 42) === 0 || (xt & 1073741824) !== 0 && (Z & 261930) === 0 ? (Tl = !0, l.memoizedState = u) : (l = co(), x.lanes |= l, ou |= l, t);
  }
  function i0(l, t, u, a, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var f = r.T, c = {};
    r.T = c, ac(l, !1, t, u);
    try {
      var i = e(), d = r.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = xv(
          i,
          a
        );
        Ia(
          l,
          t,
          S,
          nt(l)
        );
      } else
        Ia(
          l,
          t,
          a,
          nt(l)
        );
    } catch (E) {
      Ia(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: E },
        nt()
      );
    } finally {
      p.p = n, f !== null && c.types !== null && (f.types = c.types), r.T = f;
    }
  }
  function Vv() {
  }
  function tc(l, t, u, a) {
    if (l.tag !== 5) throw Error(m(476));
    var e = s0(l).queue;
    i0(
      l,
      e,
      t,
      C,
      u === null ? Vv : function() {
        return o0(l), u(a);
      }
    );
  }
  function s0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: C,
      baseState: C,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: C
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function o0(l) {
    var t = s0(l);
    t.next === null && (t = l.alternate.memoizedState), Ia(
      l,
      t.next.queue,
      {},
      nt()
    );
  }
  function uc() {
    return Ul(he);
  }
  function y0() {
    return bl().memoizedState;
  }
  function v0() {
    return bl().memoizedState;
  }
  function Lv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = nt();
          l = eu(u);
          var a = nu(t, l, u);
          a !== null && (Wl(a, t, u), wa(a, t, u)), t = { cache: Hf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Kv(l, t, u) {
    var a = nt();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? m0(t, u) : (u = zf(l, t, u, a), u !== null && (Wl(u, l, a), h0(u, t, a)));
  }
  function d0(l, t, u) {
    var a = nt();
    Ia(l, t, u, a);
  }
  function Ia(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) m0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, Pl(c, f))
            return Ge(l, t, e, 0), sl === null && je(), !1;
        } catch {
        } finally {
        }
      if (u = zf(l, t, e, a), u !== null)
        return Wl(u, l, a), h0(u, t, a), !0;
    }
    return !1;
  }
  function ac(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(m(479));
    } else
      t = zf(
        l,
        u,
        a,
        2
      ), t !== null && Wl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === x || t !== null && t === x;
  }
  function m0(l, t) {
    ya = Ie = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function h0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zi(l, u);
    }
  }
  var Pa = {
    readContext: Ul,
    use: tn,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl
  };
  Pa.useEffectEvent = hl;
  var g0 = {
    readContext: Ul,
    use: tn,
    useCallback: function(l, t) {
      return xl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ul,
    useEffect: Ps,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, an(
        4194308,
        4,
        a0.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return an(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      an(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = xl();
      t = t === void 0 ? null : t;
      var a = l();
      if (xu) {
        Ft(!0);
        try {
          l();
        } finally {
          Ft(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = xl();
      if (u !== void 0) {
        var e = u(t);
        if (xu) {
          Ft(!0);
          try {
            u(t);
          } finally {
            Ft(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Kv.bind(
        null,
        x,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = xl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ff(l);
      var t = l.queue, u = d0.bind(null, x, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = xl();
      return lc(u, l, t);
    },
    useTransition: function() {
      var l = Ff(!1);
      return l = i0.bind(
        null,
        x,
        l.queue,
        !0,
        !1
      ), xl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = x, e = xl();
      if (J) {
        if (u === void 0)
          throw Error(m(407));
        u = u();
      } else {
        if (u = t(), sl === null)
          throw Error(m(349));
        (Z & 127) !== 0 || xs(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Ps(Gs.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, da(
        9,
        { destroy: void 0 },
        js.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = xl(), t = sl.identifierPrefix;
      if (J) {
        var u = _t, a = pt;
        u = (a & ~(1 << 32 - Il(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Pe++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = jv++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: uc,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(l) {
      var t = xl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ac.bind(
        null,
        x,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: wf,
    useCacheRefresh: function() {
      return xl().memoizedState = Lv.bind(
        null,
        x
      );
    },
    useEffectEvent: function(l) {
      var t = xl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((k & 2) !== 0)
          throw Error(m(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, ec = {
    readContext: Ul,
    use: tn,
    useCallback: n0,
    useContext: Ul,
    useEffect: If,
    useImperativeHandle: e0,
    useInsertionEffect: t0,
    useLayoutEffect: u0,
    useMemo: f0,
    useReducer: un,
    useRef: Is,
    useState: function() {
      return un(jt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = bl();
      return c0(
        u,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = un(jt)[0], t = bl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: Ys,
    useId: y0,
    useHostTransitionStatus: uc,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(l, t) {
      var u = bl();
      return Zs(u, al, l, t);
    },
    useMemoCache: wf,
    useCacheRefresh: v0
  };
  ec.useEffectEvent = l0;
  var S0 = {
    readContext: Ul,
    use: tn,
    useCallback: n0,
    useContext: Ul,
    useEffect: If,
    useImperativeHandle: e0,
    useInsertionEffect: t0,
    useLayoutEffect: u0,
    useMemo: f0,
    useReducer: $f,
    useRef: Is,
    useState: function() {
      return $f(jt);
    },
    useDebugValue: Pf,
    useDeferredValue: function(l, t) {
      var u = bl();
      return al === null ? lc(u, l, t) : c0(
        u,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = $f(jt)[0], t = bl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: Ys,
    useId: y0,
    useHostTransitionStatus: uc,
    useFormState: ks,
    useActionState: ks,
    useOptimistic: function(l, t) {
      var u = bl();
      return al !== null ? Zs(u, al, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: wf,
    useCacheRefresh: v0
  };
  S0.useEffectEvent = l0;
  function nc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : O({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var fc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = eu(a);
      e.payload = t, u != null && (e.callback = u), t = nu(l, e, a), t !== null && (Wl(t, l, a), wa(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = eu(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = nu(l, e, a), t !== null && (Wl(t, l, a), wa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = nt(), a = eu(u);
      a.tag = 2, t != null && (a.callback = t), t = nu(l, a, u), t !== null && (Wl(t, l, u), wa(t, l, u));
    }
  };
  function r0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Ga(u, a) || !Ga(e, n) : !0;
  }
  function b0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && fc.enqueueReplaceState(t, t.state, null);
  }
  function ju(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = O({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function z0(l) {
    xe(l);
  }
  function E0(l) {
    console.error(l);
  }
  function T0(l) {
    xe(l);
  }
  function fn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function A0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function cc(l, t, u) {
    return u = eu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      fn(l, t);
    }, u;
  }
  function p0(l) {
    return l = eu(l), l.tag = 3, l;
  }
  function _0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        A0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      A0(t, u, a), typeof e != "function" && (yu === null ? yu = /* @__PURE__ */ new Set([this]) : yu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Jv(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && na(
        t,
        u,
        e,
        !0
      ), u = tt.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return mt === null ? bn() : u.alternate === null && gl === 0 && (gl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Rc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Rc(l, a, e)), !1;
        }
        throw Error(m(435, u.tag));
      }
      return Rc(l, a, e), bn(), !1;
    }
    if (J)
      return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Of && (l = Error(m(422), { cause: a }), Za(ot(l, u)))) : (a !== Of && (t = Error(m(423), {
        cause: a
      }), Za(
        ot(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = ot(a, u), e = cc(
        l.stateNode,
        a,
        e
      ), xf(l, e), gl !== 4 && (gl = 2)), !1;
    var n = Error(m(520), { cause: a });
    if (n = ot(n, u), ce === null ? ce = [n] : ce.push(n), gl !== 4 && (gl = 2), t === null) return !0;
    a = ot(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = cc(u.stateNode, a, l), xf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (yu === null || !yu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = p0(e), _0(
              e,
              l,
              u,
              a
            ), xf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var ic = Error(m(461)), Tl = !1;
  function Nl(l, t, u, a) {
    t.child = l === null ? Us(t, null, u, a) : Yu(
      t,
      l.child,
      u,
      a
    );
  }
  function O0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Ru(t), a = Vf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Lf(), l !== null && !Tl ? (Kf(l, t, e), Gt(l, t, e)) : (J && c && pf(t), t.flags |= 1, Nl(l, t, a, e), t.child);
  }
  function M0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Ef(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, D0(
        l,
        t,
        n,
        a,
        e
      )) : (l = Xe(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ga, u(f, a) && l.ref === t.ref)
        return Gt(l, t, e);
    }
    return t.flags |= 1, l = Ct(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function D0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ga(n, a) && l.ref === t.ref)
        if (Tl = !1, t.pendingProps = a = n, gc(l, e))
          (l.flags & 131072) !== 0 && (Tl = !0);
        else
          return t.lanes = l.lanes, Gt(l, t, e);
    }
    return sc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function U0(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return N0(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Rs(t, n) : Gf(), Cs(t);
      else
        return a = t.lanes = 536870912, N0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Ke(t, n.cachePool), Rs(t, n), cu(), t.memoizedState = null) : (l !== null && Ke(t, null), Gf(), cu());
    return Nl(l, t, e, u), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function N0(l, t, u, a, e) {
    var n = Cf();
    return n = n === null ? null : { parent: zl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Ke(t, null), Gf(), Cs(t), l !== null && na(l, t, a, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = on(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function H0(l, t, u) {
    return Yu(t, l.child, null, u), l = cn(t, t.pendingProps), l.flags |= 2, ut(t), t.memoizedState = null, l;
  }
  function wv(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (J) {
        if (a.mode === "hidden")
          return l = cn(t, a), t.lanes = 536870912, le(null, l);
        if (Xf(t), (l = ol) ? (l = Lo(
          l,
          dt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? { id: pt, overflow: _t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ms(l), u.return = t, t.child = u, Dl = t, ol = null)) : l = null, l === null) throw tu(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Xf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = H0(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(m(558));
      else if (Tl || na(l, t, u, !1), e = (u & l.childLanes) !== 0, Tl || e) {
        if (a = sl, a !== null && (f = Ei(a, u), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Du(l, f), Wl(a, l, f), ic;
        bn(), t = H0(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, ol = ht(f.nextSibling), Dl = t, J = !0, lu = null, dt = !1, l !== null && Ss(t, l), t = cn(t, a), t.flags |= 4096;
      return t;
    }
    return l = Ct(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function sn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(m(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function sc(l, t, u, a, e) {
    return Ru(t), u = Vf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Lf(), l !== null && !Tl ? (Kf(l, t, e), Gt(l, t, e)) : (J && a && pf(t), t.flags |= 1, Nl(l, t, u, e), t.child);
  }
  function R0(l, t, u, a, e, n) {
    return Ru(t), t.updateQueue = null, u = Bs(
      t,
      a,
      u,
      e
    ), qs(l), a = Lf(), l !== null && !Tl ? (Kf(l, t, n), Gt(l, t, n)) : (J && a && pf(t), t.flags |= 1, Nl(l, t, u, n), t.child);
  }
  function C0(l, t, u, a, e) {
    if (Ru(t), t.stateNode === null) {
      var n = ta, f = u.contextType;
      typeof f == "object" && f !== null && (n = Ul(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = fc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Bf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Ul(f) : ta, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (nc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && fc.enqueueReplaceState(n, n.state, null), $a(t, a, n, e), Wa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = ju(u, c);
      n.props = i;
      var d = n.context, S = u.contextType;
      f = ta, typeof S == "object" && S !== null && (f = Ul(S));
      var E = u.getDerivedStateFromProps;
      S = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || d !== f) && b0(
        t,
        n,
        a,
        f
      ), au = !1;
      var h = t.memoizedState;
      n.state = h, $a(t, a, n, e), Wa(), d = t.memoizedState, c || h !== d || au ? (typeof E == "function" && (nc(
        t,
        u,
        E,
        a
      ), d = t.memoizedState), (i = au || r0(
        t,
        u,
        i,
        a,
        h,
        d,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), n.props = a, n.state = d, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Yf(l, t), f = t.memoizedProps, S = ju(u, f), n.props = S, E = t.pendingProps, h = n.context, d = u.contextType, i = ta, typeof d == "object" && d !== null && (i = Ul(d)), c = u.getDerivedStateFromProps, (d = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== E || h !== i) && b0(
        t,
        n,
        a,
        i
      ), au = !1, h = t.memoizedState, n.state = h, $a(t, a, n, e), Wa();
      var g = t.memoizedState;
      f !== E || h !== g || au || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof c == "function" && (nc(
        t,
        u,
        c,
        a
      ), g = t.memoizedState), (S = au || r0(
        t,
        u,
        S,
        a,
        h,
        g,
        i
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        g,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && h === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, sn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Yu(
      t,
      l.child,
      null,
      e
    ), t.child = Yu(
      t,
      null,
      u,
      e
    )) : Nl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Gt(
      l,
      t,
      e
    ), l;
  }
  function q0(l, t, u, a) {
    return Nu(), t.flags |= 256, Nl(l, t, u, a), t.child;
  }
  var oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function yc(l) {
    return { baseLanes: l, cachePool: As() };
  }
  function vc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= et), l;
  }
  function B0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (rl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (J) {
        if (e ? fu(t) : cu(), (l = ol) ? (l = Lo(
          l,
          dt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? { id: pt, overflow: _t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ms(l), u.return = t, t.child = u, Dl = t, ol = null)) : l = null, l === null) throw tu(t);
        return Wc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, e ? (cu(), e = t.mode, c = on(
        { mode: "hidden", children: c },
        e
      ), a = Uu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = yc(u), a.childLanes = vc(
        l,
        f,
        u
      ), t.memoizedState = oc, le(null, a)) : (fu(t), dc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (fu(t), t.flags &= -257, t = mc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (cu(), t.child = l.child, t.flags |= 128, t = null) : (cu(), c = a.fallback, e = t.mode, a = on(
          { mode: "visible", children: a.children },
          e
        ), c = Uu(
          c,
          e,
          u,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Yu(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = yc(u), a.childLanes = vc(
          l,
          f,
          u
        ), t.memoizedState = oc, t = le(null, a));
      else if (fu(t), Wc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var d = f.dgst;
        f = d, a = Error(m(419)), a.stack = "", a.digest = f, Za({ value: a, source: null, stack: null }), t = mc(
          l,
          t,
          u
        );
      } else if (Tl || na(l, t, u, !1), f = (u & l.childLanes) !== 0, Tl || f) {
        if (f = sl, f !== null && (a = Ei(f, u), a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, Du(l, a), Wl(f, l, a), ic;
        wc(c) || bn(), t = mc(
          l,
          t,
          u
        );
      } else
        wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, ol = ht(
          c.nextSibling
        ), Dl = t, J = !0, lu = null, dt = !1, l !== null && Ss(t, l), t = dc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (cu(), c = a.fallback, e = t.mode, i = l.child, d = i.sibling, a = Ct(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, d !== null ? c = Ct(
      d,
      c
    ) : (c = Uu(
      c,
      e,
      u,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, le(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = yc(u) : (e = c.cachePool, e !== null ? (i = zl._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = As(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: e
    }), a.memoizedState = c, a.childLanes = vc(
      l,
      f,
      u
    ), t.memoizedState = oc, le(l.child, a)) : (fu(t), u = l.child, l = u.sibling, u = Ct(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function dc(l, t) {
    return t = on(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function on(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function mc(l, t, u) {
    return Yu(t, l.child, null, u), l = dc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Y0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Uf(l.return, t, u);
  }
  function hc(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function x0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = rl.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, _(rl, f), Nl(l, t, a, u), a = J ? Xa : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Y0(l, u, t);
        else if (l.tag === 19)
          Y0(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && ke(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), hc(
          t,
          !1,
          e,
          u,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        hc(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        hc(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), ou |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (na(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(m(153));
    if (t.child !== null) {
      for (l = t.child, u = Ct(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ct(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function gc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function Wv(l, t, u) {
    switch (t.tag) {
      case 3:
        Yl(t, t.stateNode.containerInfo), uu(t, zl, l.memoizedState.cache), Nu();
        break;
      case 27:
      case 5:
        Oa(t);
        break;
      case 4:
        Yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        uu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Xf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (fu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? B0(l, t, u) : (fu(t), l = Gt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        fu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (na(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return x0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(rl, rl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, U0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        uu(t, zl, l.memoizedState.cache);
    }
    return Gt(l, t, u);
  }
  function j0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Tl = !0;
      else {
        if (!gc(l, u) && (t.flags & 128) === 0)
          return Tl = !1, Wv(
            l,
            t,
            u
          );
        Tl = (l.flags & 131072) !== 0;
      }
    else
      Tl = !1, J && (t.flags & 1048576) !== 0 && gs(t, Xa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = qu(t.elementType), t.type = l, typeof l == "function")
            Ef(l) ? (a = ju(l, a), t.tag = 1, t = C0(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = sc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === ft) {
                t.tag = 11, t = O0(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === K) {
                t.tag = 14, t = M0(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              }
            }
            throw t = Ut(l) || l, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return sc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = ju(
          a,
          t.pendingProps
        ), C0(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (Yl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(m(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Yf(l, t), $a(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, uu(t, zl, a), a !== n.cache && Nf(
            t,
            [zl],
            u,
            !0
          ), Wa(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = q0(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = ot(
                Error(m(424)),
                t
              ), Za(e), t = q0(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ol = ht(l.firstChild), Dl = t, J = !0, lu = null, dt = !0, u = Us(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Nu(), a === e) {
              t = Gt(
                l,
                t,
                u
              );
              break l;
            }
            Nl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return sn(l, t), l === null ? (u = Fo(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : J || (u = t.type, l = t.pendingProps, a = On(
          G.current
        ).createElement(u), a[Ml] = t, a[Zl] = l, Hl(a, u, l), _l(a), t.stateNode = a) : t.memoizedState = Fo(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Oa(t), l === null && J && (a = t.stateNode = wo(
          t.type,
          t.pendingProps,
          G.current
        ), Dl = t, dt = !0, e = ol, hu(t.type) ? ($c = e, ol = ht(a.firstChild)) : ol = e), Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && J && ((e = a = ol) && (a = pd(
          a,
          t.type,
          t.pendingProps,
          dt
        ), a !== null ? (t.stateNode = a, Dl = t, ol = ht(a.firstChild), dt = !1, e = !0) : e = !1), e || tu(t)), Oa(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Lc(e, n) ? a = null : f !== null && Lc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Vf(
          l,
          t,
          Gv,
          null,
          null,
          u
        ), he._currentValue = e), sn(l, t), Nl(l, t, a, u), t.child;
      case 6:
        return l === null && J && ((l = u = ol) && (u = _d(
          u,
          t.pendingProps,
          dt
        ), u !== null ? (t.stateNode = u, Dl = t, ol = null, l = !0) : l = !1), l || tu(t)), null;
      case 13:
        return B0(l, t, u);
      case 4:
        return Yl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Yu(
          t,
          null,
          a,
          u
        ) : Nl(l, t, a, u), t.child;
      case 11:
        return O0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Nl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, uu(t, t.type, a.value), Nl(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Ru(t), e = Ul(e), a = a(e), t.flags |= 1, Nl(l, t, a, u), t.child;
      case 14:
        return M0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return D0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return x0(l, t, u);
      case 31:
        return wv(l, t, u);
      case 22:
        return U0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Ru(t), a = Ul(zl), l === null ? (e = Cf(), e === null && (e = sl, n = Hf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Bf(t), uu(t, zl, e)) : ((l.lanes & u) !== 0 && (Yf(l, t), $a(t, null, null, u), Wa()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), uu(t, zl, a)) : (a = n.cache, uu(t, zl, a), a !== e.cache && Nf(
          t,
          [zl],
          u,
          !0
        ))), Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(m(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function Sc(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yo()) l.flags |= 8192;
        else
          throw Bu = we, qf;
    } else l.flags &= -16777217;
  }
  function G0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !ty(t))
      if (yo()) l.flags |= 8192;
      else
        throw Bu = we, qf;
  }
  function yn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? ri() : 536870912, l.lanes |= t, Sa |= t);
  }
  function te(l, t) {
    if (!J)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function yl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function $v(l, t, u) {
    var a = t.pendingProps;
    switch (_f(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yl(t), null;
      case 1:
        return yl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yt(zl), Sl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ea(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mf())), yl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Qt(t), n !== null ? (yl(t), G0(t, n)) : (yl(t), Sc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Qt(t), yl(t), G0(t, n)) : (yl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Qt(t), yl(t), Sc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (Ee(t), u = G.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return yl(t), null;
          }
          l = D.current, ea(t) ? rs(t) : (l = wo(e, a, u), t.stateNode = l, Qt(t));
        }
        return yl(t), null;
      case 5:
        if (Ee(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return yl(t), null;
          }
          if (n = D.current, ea(t))
            rs(t);
          else {
            var f = On(
              G.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[Ml] = t, n[Zl] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Hl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Qt(t);
          }
        }
        return yl(t), Sc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = G.current, ea(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Dl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Ml] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Yo(l.nodeValue, u)), l || tu(t, !0);
          } else
            l = On(l).createTextNode(
              a
            ), l[Ml] = t, t.stateNode = l;
        }
        return yl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ea(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(m(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(557));
              l[Ml] = t;
            } else
              Nu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), l = !1;
          } else
            u = Mf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(m(558));
        }
        return yl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = ea(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(m(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
              e[Ml] = t;
            } else
              Nu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), e = !1;
          } else
            e = Mf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return ut(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), yn(t, t.updateQueue), yl(t), null);
      case 4:
        return Sl(), l === null && Gc(t.stateNode.containerInfo), yl(t), null;
      case 10:
        return Yt(t.type), yl(t), null;
      case 19:
        if (T(rl), a = t.memoizedState, a === null) return yl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) te(a, !1);
          else {
            if (gl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(a, !1), l = n.updateQueue, t.updateQueue = l, yn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    ds(u, l), u = u.sibling;
                  return _(
                    rl,
                    rl.current & 1 | 2
                  ), J && qt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && Fl() > gn && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, yn(t, l), te(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !J)
                return yl(t), null;
            } else
              2 * Fl() - a.renderingStartTime > gn && u !== 536870912 && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Fl(), l.sibling = null, u = rl.current, _(
          rl,
          e ? u & 1 | 2 : u & 1
        ), J && qt(t, a.treeForkCount), l) : (yl(t), null);
      case 22:
      case 23:
        return ut(t), Qf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yl(t), u = t.updateQueue, u !== null && yn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && T(Cu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Yt(zl), yl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function Fv(l, t) {
    switch (_f(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Yt(zl), Sl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ee(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ut(t), t.alternate === null)
            throw Error(m(340));
          Nu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ut(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(m(340));
          Nu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(rl), null;
      case 4:
        return Sl(), null;
      case 10:
        return Yt(t.type), null;
      case 22:
      case 23:
        return ut(t), Qf(), l !== null && T(Cu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Yt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Q0(l, t) {
    switch (_f(t), t.tag) {
      case 3:
        Yt(zl), Sl();
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        Sl();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        T(rl);
        break;
      case 10:
        Yt(t.type);
        break;
      case 22:
      case 23:
        ut(t), Qf(), l !== null && T(Cu);
        break;
      case 24:
        Yt(zl);
    }
  }
  function ue(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      tl(t, t.return, c);
    }
  }
  function iu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, d = c;
              try {
                d();
              } catch (S) {
                tl(
                  e,
                  i,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      tl(t, t.return, S);
    }
  }
  function X0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Hs(t, u);
      } catch (a) {
        tl(l, l.return, a);
      }
    }
  }
  function Z0(l, t, u) {
    u.props = ju(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      tl(l, t, a);
    }
  }
  function ae(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      tl(l, t, e);
    }
  }
  function Ot(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          tl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          tl(l, t, e);
        }
      else u.current = null;
  }
  function V0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function rc(l, t, u) {
    try {
      var a = l.stateNode;
      rd(a, l.type, u, t), a[Zl] = t;
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function L0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && hu(l.type) || l.tag === 4;
  }
  function bc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || L0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && hu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function zc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Ht));
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (zc(l, t, u), l = l.sibling; l !== null; )
        zc(l, t, u), l = l.sibling;
  }
  function vn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (vn(l, t, u), l = l.sibling; l !== null; )
        vn(l, t, u), l = l.sibling;
  }
  function K0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Hl(t, a, u), t[Ml] = l, t[Zl] = u;
    } catch (n) {
      tl(l, l.return, n);
    }
  }
  var Xt = !1, Al = !1, Ec = !1, J0 = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function kv(l, t) {
    if (l = l.containerInfo, Zc = Cn, l = es(l), mf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, d = 0, S = 0, E = l, h = null;
            t: for (; ; ) {
              for (var g; E !== u || e !== 0 && E.nodeType !== 3 || (c = f + e), E !== n || a !== 0 && E.nodeType !== 3 || (i = f + a), E.nodeType === 3 && (f += E.nodeValue.length), (g = E.firstChild) !== null; )
                h = E, E = g;
              for (; ; ) {
                if (E === l) break t;
                if (h === u && ++d === e && (c = f), h === n && ++S === a && (i = f), (g = E.nextSibling) !== null) break;
                E = h, h = E.parentNode;
              }
              E = g;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Vc = { focusedElem: l, selectionRange: u }, Cn = !1, Ol = t; Ol !== null; )
      if (t = Ol, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Ol = l;
      else
        for (; Ol !== null; ) {
          switch (t = Ol, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  e = l[u], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var M = ju(
                    u.type,
                    e
                  );
                  l = a.getSnapshotBeforeUpdate(
                    M,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (R) {
                  tl(
                    u,
                    u.return,
                    R
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Jc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(m(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ol = l;
            break;
          }
          Ol = t.return;
        }
  }
  function w0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, u), a & 4 && ue(5, u);
        break;
      case 1:
        if (Vt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              tl(u, u.return, f);
            }
          else {
            var e = ju(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              tl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && X0(u), a & 512 && ae(u, u.return);
        break;
      case 3:
        if (Vt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            Hs(l, t);
          } catch (f) {
            tl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && K0(u);
      case 26:
      case 5:
        Vt(l, u), t === null && a & 4 && V0(u), a & 512 && ae(u, u.return);
        break;
      case 12:
        Vt(l, u);
        break;
      case 31:
        Vt(l, u), a & 4 && F0(l, u);
        break;
      case 13:
        Vt(l, u), a & 4 && k0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = fd.bind(
          null,
          u
        ), Od(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Xt, !a) {
          t = t !== null && t.memoizedState !== null || Al, e = Xt;
          var n = Al;
          Xt = a, (Al = t) && !n ? Lt(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Vt(l, u), Xt = e, Al = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, u);
    }
  }
  function W0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, W0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Fn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var dl = null, Ll = !1;
  function Zt(l, t, u) {
    for (u = u.child; u !== null; )
      $0(l, t, u), u = u.sibling;
  }
  function $0(l, t, u) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(Ma, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Al || Ot(u, t), Zt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Al || Ot(u, t);
        var a = dl, e = Ll;
        hu(u.type) && (dl = u.stateNode, Ll = !1), Zt(
          l,
          t,
          u
        ), ve(u.stateNode), dl = a, Ll = e;
        break;
      case 5:
        Al || Ot(u, t);
      case 6:
        if (a = dl, e = Ll, dl = null, Zt(
          l,
          t,
          u
        ), dl = a, Ll = e, dl !== null)
          if (Ll)
            try {
              (dl.nodeType === 9 ? dl.body : dl.nodeName === "HTML" ? dl.ownerDocument.body : dl).removeChild(u.stateNode);
            } catch (n) {
              tl(
                u,
                t,
                n
              );
            }
          else
            try {
              dl.removeChild(u.stateNode);
            } catch (n) {
              tl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        dl !== null && (Ll ? (l = dl, Zo(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), _a(l)) : Zo(dl, u.stateNode));
        break;
      case 4:
        a = dl, e = Ll, dl = u.stateNode.containerInfo, Ll = !0, Zt(
          l,
          t,
          u
        ), dl = a, Ll = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        iu(2, u, t), Al || iu(4, u, t), Zt(
          l,
          t,
          u
        );
        break;
      case 1:
        Al || (Ot(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && Z0(
          u,
          t,
          a
        )), Zt(
          l,
          t,
          u
        );
        break;
      case 21:
        Zt(
          l,
          t,
          u
        );
        break;
      case 22:
        Al = (a = Al) || u.memoizedState !== null, Zt(
          l,
          t,
          u
        ), Al = a;
        break;
      default:
        Zt(
          l,
          t,
          u
        );
    }
  }
  function F0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        _a(l);
      } catch (u) {
        tl(t, t.return, u);
      }
    }
  }
  function k0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        _a(l);
      } catch (u) {
        tl(t, t.return, u);
      }
  }
  function Iv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new J0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new J0()), t;
      default:
        throw Error(m(435, l.tag));
    }
  }
  function dn(l, t) {
    var u = Iv(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = cd.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Kl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (hu(c.type)) {
                dl = c.stateNode, Ll = !1;
                break l;
              }
              break;
            case 5:
              dl = c.stateNode, Ll = !1;
              break l;
            case 3:
            case 4:
              dl = c.stateNode.containerInfo, Ll = !0;
              break l;
          }
          c = c.return;
        }
        if (dl === null) throw Error(m(160));
        $0(n, f, e), dl = null, Ll = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        I0(t, l), t = t.sibling;
  }
  var bt = null;
  function I0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Kl(t, l), Jl(l), a & 4 && (iu(3, l, l.return), ue(3, l), iu(5, l, l.return));
        break;
      case 1:
        Kl(t, l), Jl(l), a & 512 && (Al || u === null || Ot(u, u.return)), a & 64 && Xt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = bt;
        if (Kl(t, l), Jl(l), a & 512 && (Al || u === null || Ot(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Na] || n[Ml] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Hl(n, a, u), n[Ml] = l, _l(n), a = n;
                      break l;
                    case "link":
                      var f = Po(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Hl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Po(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Hl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  n[Ml] = l, _l(n), a = n;
                }
                l.stateNode = a;
              } else
                ly(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Io(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? ly(
              e,
              l.type,
              l.stateNode
            ) : Io(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && rc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Kl(t, l), Jl(l), a & 512 && (Al || u === null || Ot(u, u.return)), u !== null && a & 4 && rc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Kl(t, l), Jl(l), a & 512 && (Al || u === null || Ot(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Wu(e, "");
          } catch (M) {
            tl(l, l.return, M);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, rc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (Ec = !0);
        break;
      case 6:
        if (Kl(t, l), Jl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(m(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (M) {
            tl(l, l.return, M);
          }
        }
        break;
      case 3:
        if (Un = null, e = bt, bt = Mn(t.containerInfo), Kl(t, l), bt = e, Jl(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            _a(t.containerInfo);
          } catch (M) {
            tl(l, l.return, M);
          }
        Ec && (Ec = !1, P0(l));
        break;
      case 4:
        a = bt, bt = Mn(
          l.stateNode.containerInfo
        ), Kl(t, l), Jl(l), bt = a;
        break;
      case 12:
        Kl(t, l), Jl(l);
        break;
      case 31:
        Kl(t, l), Jl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 13:
        Kl(t, l), Jl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (hn = Fl()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, d = Xt, S = Al;
        if (Xt = d || e, Al = S || i, Kl(t, l), Al = S, Xt = d, Jl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Xt || Al || Gu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var E = i.memoizedProps.style, h = E != null && E.hasOwnProperty("display") ? E.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                i = t;
                try {
                  var g = i.stateNode;
                  e ? Vo(g, !0) : Vo(i.stateNode, !1);
                } catch (M) {
                  tl(i, i.return, M);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, dn(l, u))));
        break;
      case 19:
        Kl(t, l), Jl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, dn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Kl(t, l), Jl(l);
    }
  }
  function Jl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (L0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(m(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = bc(l);
            vn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Wu(f, ""), u.flags &= -33);
            var c = bc(l);
            vn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, d = bc(l);
            zc(
              l,
              d,
              i
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (S) {
        tl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function P0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        P0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        w0(l, t.alternate, t), t = t.sibling;
  }
  function Gu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          iu(4, t, t.return), Gu(t);
          break;
        case 1:
          Ot(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && Z0(
            t,
            t.return,
            u
          ), Gu(t);
          break;
        case 27:
          ve(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Gu(t);
          break;
        case 22:
          t.memoizedState === null && Gu(t);
          break;
        case 30:
          Gu(t);
          break;
        default:
          Gu(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Lt(
            e,
            n,
            u
          ), ue(4, n);
          break;
        case 1:
          if (Lt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (d) {
              tl(a, a.return, d);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Ns(i[e], c);
            } catch (d) {
              tl(a, a.return, d);
            }
          }
          u && f & 64 && X0(n), ae(n, n.return);
          break;
        case 27:
          K0(n);
        case 26:
        case 5:
          Lt(
            e,
            n,
            u
          ), u && a === null && f & 4 && V0(n), ae(n, n.return);
          break;
        case 12:
          Lt(
            e,
            n,
            u
          );
          break;
        case 31:
          Lt(
            e,
            n,
            u
          ), u && f & 4 && F0(e, n);
          break;
        case 13:
          Lt(
            e,
            n,
            u
          ), u && f & 4 && k0(e, n);
          break;
        case 22:
          n.memoizedState === null && Lt(
            e,
            n,
            u
          ), ae(n, n.return);
          break;
        case 30:
          break;
        default:
          Lt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Tc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Va(u));
  }
  function Ac(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l));
  }
  function zt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        lo(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function lo(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && ue(9, t);
        break;
      case 1:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l)));
        break;
      case 12:
        if (e & 2048) {
          zt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            tl(t, t.return, i);
          }
        } else
          zt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        zt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? zt(
          l,
          t,
          u,
          a
        ) : ee(l, t) : n._visibility & 2 ? zt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, ma(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && Tc(f, t);
        break;
      case 24:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && Ac(t.alternate, t);
        break;
      default:
        zt(
          l,
          t,
          u,
          a
        );
    }
  }
  function ma(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ma(
            n,
            f,
            c,
            i,
            e
          ), ue(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? ma(
            n,
            f,
            c,
            i,
            e
          ) : ee(
            n,
            f
          ) : (S._visibility |= 2, ma(
            n,
            f,
            c,
            i,
            e
          )), e && d & 2048 && Tc(
            f.alternate,
            f
          );
          break;
        case 24:
          ma(
            n,
            f,
            c,
            i,
            e
          ), e && d & 2048 && Ac(f.alternate, f);
          break;
        default:
          ma(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            ee(u, a), e & 2048 && Tc(
              a.alternate,
              a
            );
            break;
          case 24:
            ee(u, a), e & 2048 && Ac(a.alternate, a);
            break;
          default:
            ee(u, a);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function ha(l, t, u) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        to(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function to(l, t, u) {
    switch (l.tag) {
      case 26:
        ha(
          l,
          t,
          u
        ), l.flags & ne && l.memoizedState !== null && jd(
          u,
          bt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ha(
          l,
          t,
          u
        );
        break;
      case 3:
      case 4:
        var a = bt;
        bt = Mn(l.stateNode.containerInfo), ha(
          l,
          t,
          u
        ), bt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ne, ne = 16777216, ha(
          l,
          t,
          u
        ), ne = a) : ha(
          l,
          t,
          u
        ));
        break;
      default:
        ha(
          l,
          t,
          u
        );
    }
  }
  function uo(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, eo(
            a,
            l
          );
        }
      uo(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ao(l), l = l.sibling;
  }
  function ao(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && iu(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, mn(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function mn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, eo(
            a,
            l
          );
        }
      uo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          iu(8, t, t.return), mn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, mn(t));
          break;
        default:
          mn(t);
      }
      l = l.sibling;
    }
  }
  function eo(l, t) {
    for (; Ol !== null; ) {
      var u = Ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          iu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Va(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Ol = a;
      else
        l: for (u = l; Ol !== null; ) {
          a = Ol;
          var e = a.sibling, n = a.return;
          if (W0(a), a === u) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ol = e;
            break l;
          }
          Ol = n;
        }
    }
  }
  var Pv = {
    getCacheForType: function(l) {
      var t = Ul(zl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Ul(zl).controller.signal;
    }
  }, ld = typeof WeakMap == "function" ? WeakMap : Map, k = 0, sl = null, Q = null, Z = 0, ll = 0, at = null, su = !1, ga = !1, pc = !1, Kt = 0, gl = 0, ou = 0, Qu = 0, _c = 0, et = 0, Sa = 0, ce = null, wl = null, Oc = !1, hn = 0, no = 0, gn = 1 / 0, Sn = null, yu = null, pl = 0, vu = null, ra = null, Jt = 0, Mc = 0, Dc = null, fo = null, ie = 0, Uc = null;
  function nt() {
    return (k & 2) !== 0 && Z !== 0 ? Z & -Z : r.T !== null ? Bc() : Ti();
  }
  function co() {
    if (et === 0)
      if ((Z & 536870912) === 0 || J) {
        var l = pe;
        pe <<= 1, (pe & 3932160) === 0 && (pe = 262144), et = l;
      } else et = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), et;
  }
  function Wl(l, t, u) {
    (l === sl && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null) && (ba(l, 0), du(
      l,
      Z,
      et,
      !1
    )), Ua(l, u), ((k & 2) === 0 || l !== sl) && (l === sl && ((k & 2) === 0 && (Qu |= u), gl === 4 && du(
      l,
      Z,
      et,
      !1
    )), Mt(l));
  }
  function io(l, t, u) {
    if ((k & 6) !== 0) throw Error(m(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Da(l, t), e = a ? ad(l, t) : Hc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ga && !a && du(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !td(u)) {
          e = Hc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ce;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (ba(c, f).flags |= 256), f = Hc(
                c,
                f,
                !1
              ), f !== 2) {
                if (pc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Qu |= n, e = 4;
                  break l;
                }
                n = wl, wl = e, n !== null && (wl === null ? wl = n : wl.push.apply(
                  wl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ba(l, 0), du(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              du(
                a,
                t,
                et,
                !su
              );
              break l;
            case 2:
              wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((t & 62914560) === t && (e = hn + 300 - Fl(), 10 < e)) {
            if (du(
              a,
              t,
              et,
              !su
            ), Oe(a, 0, !0) !== 0) break l;
            Jt = t, a.timeoutHandle = Qo(
              so.bind(
                null,
                a,
                u,
                wl,
                Sn,
                Oc,
                t,
                et,
                Qu,
                Sa,
                su,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          so(
            a,
            u,
            wl,
            Sn,
            Oc,
            t,
            et,
            Qu,
            Sa,
            su,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Mt(l);
  }
  function so(l, t, u, a, e, n, f, c, i, d, S, E, h, g) {
    if (l.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht
      }, to(
        t,
        n,
        E
      );
      var M = (n & 62914560) === n ? hn - Fl() : (n & 4194048) === n ? no - Fl() : 0;
      if (M = Gd(
        E,
        M
      ), M !== null) {
        Jt = n, l.cancelPendingCommit = M(
          ro.bind(
            null,
            l,
            t,
            n,
            u,
            a,
            e,
            f,
            c,
            i,
            S,
            E,
            null,
            h,
            g
          )
        ), du(l, n, f, !d);
        return;
      }
    }
    ro(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function td(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function du(l, t, u, a) {
    t &= ~_c, t &= ~Qu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && bi(l, u, t);
  }
  function rn() {
    return (k & 6) === 0 ? (se(0), !1) : !0;
  }
  function Nc() {
    if (Q !== null) {
      if (ll === 0)
        var l = Q.return;
      else
        l = Q, Bt = Hu = null, Jf(l), sa = null, Ka = 0, l = Q;
      for (; l !== null; )
        Q0(l.alternate, l), l = l.return;
      Q = null;
    }
  }
  function ba(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Ed(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Jt = 0, Nc(), sl = l, Q = u = Ct(l.current, null), Z = t, ll = 0, at = null, su = !1, ga = Da(l, t), pc = !1, Sa = et = _c = Qu = ou = gl = 0, wl = ce = null, Oc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Il(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Kt = t, je(), u;
  }
  function oo(l, t) {
    x = null, r.H = Pa, t === ia || t === Je ? (t = Os(), ll = 3) : t === qf ? (t = Os(), ll = 4) : ll = t === ic ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, at = t, Q === null && (gl = 1, fn(
      l,
      ot(t, l.current)
    ));
  }
  function yo() {
    var l = tt.current;
    return l === null ? !0 : (Z & 4194048) === Z ? mt === null : (Z & 62914560) === Z || (Z & 536870912) !== 0 ? l === mt : !1;
  }
  function vo() {
    var l = r.H;
    return r.H = Pa, l === null ? Pa : l;
  }
  function mo() {
    var l = r.A;
    return r.A = Pv, l;
  }
  function bn() {
    gl = 4, su || (Z & 4194048) !== Z && tt.current !== null || (ga = !0), (ou & 134217727) === 0 && (Qu & 134217727) === 0 || sl === null || du(
      sl,
      Z,
      et,
      !1
    );
  }
  function Hc(l, t, u) {
    var a = k;
    k |= 2;
    var e = vo(), n = mo();
    (sl !== l || Z !== t) && (Sn = null, ba(l, t)), t = !1;
    var f = gl;
    l: do
      try {
        if (ll !== 0 && Q !== null) {
          var c = Q, i = at;
          switch (ll) {
            case 8:
              Nc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var d = ll;
              if (ll = 0, at = null, za(l, c, i, d), u && ga) {
                f = 0;
                break l;
              }
              break;
            default:
              d = ll, ll = 0, at = null, za(l, c, i, d);
          }
        }
        ud(), f = gl;
        break;
      } catch (S) {
        oo(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Hu = null, k = a, r.H = e, r.A = n, Q === null && (sl = null, Z = 0, je()), f;
  }
  function ud() {
    for (; Q !== null; ) ho(Q);
  }
  function ad(l, t) {
    var u = k;
    k |= 2;
    var a = vo(), e = mo();
    sl !== l || Z !== t ? (Sn = null, gn = Fl() + 500, ba(l, t)) : ga = Da(
      l,
      t
    );
    l: do
      try {
        if (ll !== 0 && Q !== null) {
          t = Q;
          var n = at;
          t: switch (ll) {
            case 1:
              ll = 0, at = null, za(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ps(n)) {
                ll = 0, at = null, go(t);
                break;
              }
              t = function() {
                ll !== 2 && ll !== 9 || sl !== l || (ll = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              ll = 7;
              break l;
            case 4:
              ll = 5;
              break l;
            case 7:
              ps(n) ? (ll = 0, at = null, go(t)) : (ll = 0, at = null, za(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Q.tag) {
                case 26:
                  f = Q.memoizedState;
                case 5:
                case 27:
                  var c = Q;
                  if (f ? ty(f) : c.stateNode.complete) {
                    ll = 0, at = null;
                    var i = c.sibling;
                    if (i !== null) Q = i;
                    else {
                      var d = c.return;
                      d !== null ? (Q = d, zn(d)) : Q = null;
                    }
                    break t;
                  }
              }
              ll = 0, at = null, za(l, t, n, 5);
              break;
            case 6:
              ll = 0, at = null, za(l, t, n, 6);
              break;
            case 8:
              Nc(), gl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        ed();
        break;
      } catch (S) {
        oo(l, S);
      }
    while (!0);
    return Bt = Hu = null, r.H = a, r.A = e, k = u, Q !== null ? 0 : (sl = null, Z = 0, je(), gl);
  }
  function ed() {
    for (; Q !== null && !My(); )
      ho(Q);
  }
  function ho(l) {
    var t = j0(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Q = t;
  }
  function go(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = R0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Z
        );
        break;
      case 11:
        t = R0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Z
        );
        break;
      case 5:
        Jf(t);
      default:
        Q0(u, t), t = Q = ds(t, Kt), t = j0(u, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : Q = t;
  }
  function za(l, t, u, a) {
    Bt = Hu = null, Jf(t), sa = null, Ka = 0;
    var e = t.return;
    try {
      if (Jv(
        l,
        e,
        t,
        u,
        Z
      )) {
        gl = 1, fn(
          l,
          ot(u, l.current)
        ), Q = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Q = e, n;
      gl = 1, fn(
        l,
        ot(u, l.current)
      ), Q = null;
      return;
    }
    t.flags & 32768 ? (J || a === 1 ? l = !0 : ga || (Z & 536870912) !== 0 ? l = !1 : (su = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = tt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), So(t, l)) : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        So(
          t,
          su
        );
        return;
      }
      l = t.return;
      var u = $v(
        t.alternate,
        t,
        Kt
      );
      if (u !== null) {
        Q = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        Q = t;
        return;
      }
      Q = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function So(l, t) {
    do {
      var u = Fv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Q = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        Q = l;
        return;
      }
      Q = l = u;
    } while (l !== null);
    gl = 6, Q = null;
  }
  function ro(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      En();
    while (pl !== 0);
    if ((k & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= bf, xy(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === sl && (Q = sl = null, Z = 0), ra = t, vu = l, Jt = u, Mc = n, Dc = e, fo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, id(Te, function() {
        return Ao(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = r.T, r.T = null, e = p.p, p.p = 2, f = k, k |= 4;
        try {
          kv(l, t, u);
        } finally {
          k = f, p.p = e, r.T = a;
        }
      }
      pl = 1, bo(), zo(), Eo();
    }
  }
  function bo() {
    if (pl === 1) {
      pl = 0;
      var l = vu, t = ra, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = r.T, r.T = null;
        var a = p.p;
        p.p = 2;
        var e = k;
        k |= 4;
        try {
          I0(t, l);
          var n = Vc, f = es(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && as(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && mf(c)) {
              var d = i.start, S = i.end;
              if (S === void 0 && (S = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var E = c.ownerDocument || document, h = E && E.defaultView || window;
                if (h.getSelection) {
                  var g = h.getSelection(), M = c.textContent.length, R = Math.min(i.start, M), nl = i.end === void 0 ? R : Math.min(i.end, M);
                  !g.extend && R > nl && (f = nl, nl = R, R = f);
                  var y = us(
                    c,
                    R
                  ), s = us(
                    c,
                    nl
                  );
                  if (y && s && (g.rangeCount !== 1 || g.anchorNode !== y.node || g.anchorOffset !== y.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var v = E.createRange();
                    v.setStart(y.node, y.offset), g.removeAllRanges(), R > nl ? (g.addRange(v), g.extend(s.node, s.offset)) : (v.setEnd(s.node, s.offset), g.addRange(v));
                  }
                }
              }
            }
            for (E = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && E.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
              var b = E[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Cn = !!Zc, Vc = Zc = null;
        } finally {
          k = e, p.p = a, r.T = u;
        }
      }
      l.current = t, pl = 2;
    }
  }
  function zo() {
    if (pl === 2) {
      pl = 0;
      var l = vu, t = ra, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = r.T, r.T = null;
        var a = p.p;
        p.p = 2;
        var e = k;
        k |= 4;
        try {
          w0(l, t.alternate, t);
        } finally {
          k = e, p.p = a, r.T = u;
        }
      }
      pl = 3;
    }
  }
  function Eo() {
    if (pl === 4 || pl === 3) {
      pl = 0, Dy();
      var l = vu, t = ra, u = Jt, a = fo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pl = 5 : (pl = 0, ra = vu = null, To(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (yu = null), Wn(u), t = t.stateNode, kl && typeof kl.onCommitFiberRoot == "function")
        try {
          kl.onCommitFiberRoot(
            Ma,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = r.T, e = p.p, p.p = 2, r.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          r.T = t, p.p = e;
        }
      }
      (Jt & 3) !== 0 && En(), Mt(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === Uc ? ie++ : (ie = 0, Uc = l) : ie = 0, se(0);
    }
  }
  function To(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Va(t)));
  }
  function En() {
    return bo(), zo(), Eo(), Ao();
  }
  function Ao() {
    if (pl !== 5) return !1;
    var l = vu, t = Mc;
    Mc = 0;
    var u = Wn(Jt), a = r.T, e = p.p;
    try {
      p.p = 32 > u ? 32 : u, r.T = null, u = Dc, Dc = null;
      var n = vu, f = Jt;
      if (pl = 0, ra = vu = null, Jt = 0, (k & 6) !== 0) throw Error(m(331));
      var c = k;
      if (k |= 4, ao(n.current), lo(
        n,
        n.current,
        f,
        u
      ), k = c, se(0, !1), kl && typeof kl.onPostCommitFiberRoot == "function")
        try {
          kl.onPostCommitFiberRoot(Ma, n);
        } catch {
        }
      return !0;
    } finally {
      p.p = e, r.T = a, To(l, t);
    }
  }
  function po(l, t, u) {
    t = ot(u, t), t = cc(l.stateNode, t, 2), l = nu(l, t, 2), l !== null && (Ua(l, 2), Mt(l));
  }
  function tl(l, t, u) {
    if (l.tag === 3)
      po(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          po(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (yu === null || !yu.has(a))) {
            l = ot(u, l), u = p0(2), a = nu(t, u, 2), a !== null && (_0(
              u,
              a,
              t,
              l
            ), Ua(a, 2), Mt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new ld();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (pc = !0, e.add(u), l = nd.bind(null, l, t, u), t.then(l, l));
  }
  function nd(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, sl === l && (Z & u) === u && (gl === 4 || gl === 3 && (Z & 62914560) === Z && 300 > Fl() - hn ? (k & 2) === 0 && ba(l, 0) : _c |= u, Sa === Z && (Sa = 0)), Mt(l);
  }
  function _o(l, t) {
    t === 0 && (t = ri()), l = Du(l, t), l !== null && (Ua(l, t), Mt(l));
  }
  function fd(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), _o(l, u);
  }
  function cd(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    a !== null && a.delete(t), _o(l, u);
  }
  function id(l, t) {
    return Ln(l, t);
  }
  var Tn = null, Ea = null, Cc = !1, An = !1, qc = !1, mu = 0;
  function Mt(l) {
    l !== Ea && l.next === null && (Ea === null ? Tn = Ea = l : Ea = Ea.next = l), An = !0, Cc || (Cc = !0, od());
  }
  function se(l, t) {
    if (!qc && An) {
      qc = !0;
      do
        for (var u = !1, a = Tn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Il(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Uo(a, n));
          } else
            n = Z, n = Oe(
              a,
              a === sl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Da(a, n) || (u = !0, Uo(a, n));
          a = a.next;
        }
      while (u);
      qc = !1;
    }
  }
  function sd() {
    Oo();
  }
  function Oo() {
    An = Cc = !1;
    var l = 0;
    mu !== 0 && zd() && (l = mu);
    for (var t = Fl(), u = null, a = Tn; a !== null; ) {
      var e = a.next, n = Mo(a, t);
      n === 0 ? (a.next = null, u === null ? Tn = e : u.next = e, e === null && (Ea = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (An = !0)), a = e;
    }
    pl !== 0 && pl !== 5 || se(l), mu !== 0 && (mu = 0);
  }
  function Mo(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Il(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Yy(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = sl, u = Z, u = Oe(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (ll === 2 || ll === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Kn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Da(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Kn(a), Wn(u)) {
        case 2:
        case 8:
          u = gi;
          break;
        case 32:
          u = Te;
          break;
        case 268435456:
          u = Si;
          break;
        default:
          u = Te;
      }
      return a = Do.bind(null, l), u = Ln(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Kn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Do(l, t) {
    if (pl !== 0 && pl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (En() && l.callbackNode !== u)
      return null;
    var a = Z;
    return a = Oe(
      l,
      l === sl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (io(l, a, t), Mo(l, Fl()), l.callbackNode != null && l.callbackNode === u ? Do.bind(null, l) : null);
  }
  function Uo(l, t) {
    if (En()) return null;
    io(l, t, !0);
  }
  function od() {
    Td(function() {
      (k & 6) !== 0 ? Ln(
        hi,
        sd
      ) : Oo();
    });
  }
  function Bc() {
    if (mu === 0) {
      var l = fa;
      l === 0 && (l = Ae, Ae <<= 1, (Ae & 261888) === 0 && (Ae = 256)), mu = l;
    }
    return mu;
  }
  function No(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ne("" + l);
  }
  function Ho(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function yd(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = No(
        (e[Zl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Zl] || null) ? No(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new qe(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (mu !== 0) {
                  var i = f ? Ho(e, f) : new FormData(e);
                  tc(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Ho(e, f) : new FormData(e), tc(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Yc = 0; Yc < rf.length; Yc++) {
    var xc = rf[Yc], vd = xc.toLowerCase(), dd = xc[0].toUpperCase() + xc.slice(1);
    rt(
      vd,
      "on" + dd
    );
  }
  rt(cs, "onAnimationEnd"), rt(is, "onAnimationIteration"), rt(ss, "onAnimationStart"), rt("dblclick", "onDoubleClick"), rt("focusin", "onFocus"), rt("focusout", "onBlur"), rt(Uv, "onTransitionRun"), rt(Nv, "onTransitionStart"), rt(Hv, "onTransitionCancel"), rt(os, "onTransitionEnd"), Ju("onMouseEnter", ["mouseout", "mouseover"]), Ju("onMouseLeave", ["mouseout", "mouseover"]), Ju("onPointerEnter", ["pointerout", "pointerover"]), Ju("onPointerLeave", ["pointerout", "pointerover"]), pu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), pu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), pu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), pu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), pu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), pu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var oe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), md = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(oe)
  );
  function Ro(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, d = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              xe(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, d = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              xe(S);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function X(l, t) {
    var u = t[$n];
    u === void 0 && (u = t[$n] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Co(t, l, 2, !1), u.add(a));
  }
  function jc(l, t, u) {
    var a = 0;
    t && (a |= 4), Co(
      u,
      l,
      a,
      t
    );
  }
  var pn = "_reactListening" + Math.random().toString(36).slice(2);
  function Gc(l) {
    if (!l[pn]) {
      l[pn] = !0, _i.forEach(function(u) {
        u !== "selectionchange" && (md.has(u) || jc(u, !1, l), jc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[pn] || (t[pn] = !0, jc("selectionchange", !1, t));
    }
  }
  function Co(l, t, u, a) {
    switch (iy(t)) {
      case 2:
        var e = Zd;
        break;
      case 8:
        e = Vd;
        break;
      default:
        e = li;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !ef || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Qc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Vu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    xi(function() {
      var d = n, S = uf(u), E = [];
      l: {
        var h = ys.get(l);
        if (h !== void 0) {
          var g = qe, M = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = cv;
              break;
            case "focusin":
              M = "focus", g = sf;
              break;
            case "focusout":
              M = "blur", g = sf;
              break;
            case "beforeblur":
            case "afterblur":
              g = sf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = $y;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = ov;
              break;
            case cs:
            case is:
            case ss:
              g = Iy;
              break;
            case os:
              g = vv;
              break;
            case "scroll":
            case "scrollend":
              g = wy;
              break;
            case "wheel":
              g = mv;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = lv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Zi;
              break;
            case "toggle":
            case "beforetoggle":
              g = gv;
          }
          var R = (t & 4) !== 0, nl = !R && (l === "scroll" || l === "scrollend"), y = R ? h !== null ? h + "Capture" : null : h;
          R = [];
          for (var s = d, v; s !== null; ) {
            var b = s;
            if (v = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || v === null || y === null || (b = Ra(s, y), b != null && R.push(
              ye(s, b, v)
            )), nl) break;
            s = s.return;
          }
          0 < R.length && (h = new g(
            h,
            M,
            null,
            u,
            S
          ), E.push({ event: h, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", h && u !== tf && (M = u.relatedTarget || u.fromElement) && (Vu(M) || M[Zu]))
            break l;
          if ((g || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (M = u.relatedTarget || u.toElement, g = d, M = M ? Vu(M) : null, M !== null && (nl = P(M), R = M.tag, M !== nl || R !== 5 && R !== 27 && R !== 6) && (M = null)) : (g = null, M = d), g !== M)) {
            if (R = Qi, b = "onMouseLeave", y = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (R = Zi, b = "onPointerLeave", y = "onPointerEnter", s = "pointer"), nl = g == null ? h : Ha(g), v = M == null ? h : Ha(M), h = new R(
              b,
              s + "leave",
              g,
              u,
              S
            ), h.target = nl, h.relatedTarget = v, b = null, Vu(S) === d && (R = new R(
              y,
              s + "enter",
              M,
              u,
              S
            ), R.target = v, R.relatedTarget = nl, b = R), nl = b, g && M)
              t: {
                for (R = hd, y = g, s = M, v = 0, b = y; b; b = R(b))
                  v++;
                b = 0;
                for (var H = s; H; H = R(H))
                  b++;
                for (; 0 < v - b; )
                  y = R(y), v--;
                for (; 0 < b - v; )
                  s = R(s), b--;
                for (; v--; ) {
                  if (y === s || s !== null && y === s.alternate) {
                    R = y;
                    break t;
                  }
                  y = R(y), s = R(s);
                }
                R = null;
              }
            else R = null;
            g !== null && qo(
              E,
              h,
              g,
              R,
              !1
            ), M !== null && nl !== null && qo(
              E,
              nl,
              M,
              R,
              !0
            );
          }
        }
        l: {
          if (h = d ? Ha(d) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file")
            var $ = Fi;
          else if (Wi(h))
            if (ki)
              $ = Ov;
            else {
              $ = pv;
              var U = Av;
            }
          else
            g = h.nodeName, !g || g.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? d && lf(d.elementType) && ($ = Fi) : $ = _v;
          if ($ && ($ = $(l, d))) {
            $i(
              E,
              $,
              u,
              S
            );
            break l;
          }
          U && U(l, h, d), l === "focusout" && d && h.type === "number" && d.memoizedProps.value != null && Pn(h, "number", h.value);
        }
        switch (U = d ? Ha(d) : window, l) {
          case "focusin":
            (Wi(U) || U.contentEditable === "true") && (Iu = U, hf = d, Qa = null);
            break;
          case "focusout":
            Qa = hf = Iu = null;
            break;
          case "mousedown":
            gf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gf = !1, ns(E, u, S);
            break;
          case "selectionchange":
            if (Dv) break;
          case "keydown":
          case "keyup":
            ns(E, u, S);
        }
        var j;
        if (yf)
          l: {
            switch (l) {
              case "compositionstart":
                var V = "onCompositionStart";
                break l;
              case "compositionend":
                V = "onCompositionEnd";
                break l;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break l;
            }
            V = void 0;
          }
        else
          ku ? Ji(l, u) && (V = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (V = "onCompositionStart");
        V && (Vi && u.locale !== "ko" && (ku || V !== "onCompositionStart" ? V === "onCompositionEnd" && ku && (j = ji()) : (It = S, nf = "value" in It ? It.value : It.textContent, ku = !0)), U = _n(d, V), 0 < U.length && (V = new Xi(
          V,
          l,
          null,
          u,
          S
        ), E.push({ event: V, listeners: U }), j ? V.data = j : (j = wi(u), j !== null && (V.data = j)))), (j = rv ? bv(l, u) : zv(l, u)) && (V = _n(d, "onBeforeInput"), 0 < V.length && (U = new Xi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), E.push({
          event: U,
          listeners: V
        }), U.data = j)), yd(
          E,
          l,
          d,
          u,
          S
        );
      }
      Ro(E, t);
    });
  }
  function ye(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function _n(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ra(l, u), e != null && a.unshift(
        ye(l, e, n)
      ), e = Ra(l, t), e != null && a.push(
        ye(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function hd(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function qo(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, e ? (d = Ra(u, n), d != null && f.unshift(
        ye(u, d, i)
      )) : e || (d = Ra(u, n), d != null && f.push(
        ye(u, d, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var gd = /\r\n?/g, Sd = /\u0000|\uFFFD/g;
  function Bo(l) {
    return (typeof l == "string" ? l : "" + l).replace(gd, `
`).replace(Sd, "");
  }
  function Yo(l, t) {
    return t = Bo(t), Bo(l) === t;
  }
  function el(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Wu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Wu(l, "" + a);
        break;
      case "className":
        De(l, "class", a);
        break;
      case "tabIndex":
        De(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        De(l, u, a);
        break;
      case "style":
        Bi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          De(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && el(l, t, "name", e.name, e, null), el(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), el(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), el(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (el(l, t, "encType", e.encType, e, null), el(l, t, "method", e.method, e, null), el(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "onScroll":
        a != null && X("scroll", l);
        break;
      case "onScrollEnd":
        a != null && X("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(m(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ne("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        X("beforetoggle", l), X("toggle", l), Me(l, "popover", a);
        break;
      case "xlinkActuate":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Me(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Ky.get(u) || u, Me(l, u, a));
    }
  }
  function Xc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Bi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(m(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(m(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Wu(l, a) : (typeof a == "number" || typeof a == "bigint") && Wu(l, "" + a);
        break;
      case "onScroll":
        a != null && X("scroll", l);
        break;
      case "onScrollEnd":
        a != null && X("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Oi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Zl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Me(l, u, a);
          }
    }
  }
  function Hl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        X("error", l), X("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, t));
                default:
                  el(l, t, n, f, u, null);
              }
          }
        e && el(l, t, "srcSet", u.srcSet, u, null), a && el(l, t, "src", u.src, u, null);
        return;
      case "input":
        X("invalid", l);
        var c = n = f = e = null, i = null, d = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  d = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(m(137, t));
                  break;
                default:
                  el(l, t, a, S, u, null);
              }
          }
        Hi(
          l,
          n,
          c,
          i,
          d,
          f,
          e,
          !1
        );
        return;
      case "select":
        X("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                el(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? wu(l, !!a, t, !1) : u != null && wu(l, !!a, u, !0);
        return;
      case "textarea":
        X("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(m(91));
                break;
              default:
                el(l, t, f, c, u, null);
            }
        Ci(l, a, e, n);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                el(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        X("beforetoggle", l), X("toggle", l), X("cancel", l), X("close", l);
        break;
      case "iframe":
      case "object":
        X("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < oe.length; a++)
          X(oe[a], l);
        break;
      case "image":
        X("error", l), X("load", l);
        break;
      case "details":
        X("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        X("error", l), X("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in u)
          if (u.hasOwnProperty(d) && (a = u[d], a != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                el(l, t, d, a, u, null);
            }
        return;
      default:
        if (lf(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && Xc(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && el(l, t, c, a, u, null));
  }
  function rd(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, d = null, S = null;
        for (g in u) {
          var E = u[g];
          if (u.hasOwnProperty(g) && E != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = E;
              default:
                a.hasOwnProperty(g) || el(l, t, g, null, a, E);
            }
        }
        for (var h in a) {
          var g = a[h];
          if (E = u[h], a.hasOwnProperty(h) && (g != null || E != null))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                d = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                f = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(m(137, t));
                break;
              default:
                g !== E && el(
                  l,
                  t,
                  h,
                  g,
                  a,
                  E
                );
            }
        }
        In(
          l,
          f,
          c,
          i,
          d,
          S,
          n,
          e
        );
        return;
      case "select":
        g = f = c = h = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = i;
              default:
                a.hasOwnProperty(n) || el(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                h = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && el(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = g, h != null ? wu(l, !!u, h, !1) : !!a != !!u && (t != null ? wu(l, !!u, t, !0) : wu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        g = h = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                el(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                h = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(m(91));
                break;
              default:
                e !== n && el(l, t, f, e, a, n);
            }
        Ri(l, h, g);
        return;
      case "option":
        for (var M in u)
          if (h = u[M], u.hasOwnProperty(M) && h != null && !a.hasOwnProperty(M))
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                el(
                  l,
                  t,
                  M,
                  null,
                  a,
                  h
                );
            }
        for (i in a)
          if (h = a[i], g = u[i], a.hasOwnProperty(i) && h !== g && (h != null || g != null))
            switch (i) {
              case "selected":
                l.selected = h && typeof h != "function" && typeof h != "symbol";
                break;
              default:
                el(
                  l,
                  t,
                  i,
                  h,
                  a,
                  g
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var R in u)
          h = u[R], u.hasOwnProperty(R) && h != null && !a.hasOwnProperty(R) && el(l, t, R, null, a, h);
        for (d in a)
          if (h = a[d], g = u[d], a.hasOwnProperty(d) && h !== g && (h != null || g != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                el(
                  l,
                  t,
                  d,
                  h,
                  a,
                  g
                );
            }
        return;
      default:
        if (lf(t)) {
          for (var nl in u)
            h = u[nl], u.hasOwnProperty(nl) && h !== void 0 && !a.hasOwnProperty(nl) && Xc(
              l,
              t,
              nl,
              void 0,
              a,
              h
            );
          for (S in a)
            h = a[S], g = u[S], !a.hasOwnProperty(S) || h === g || h === void 0 && g === void 0 || Xc(
              l,
              t,
              S,
              h,
              a,
              g
            );
          return;
        }
    }
    for (var y in u)
      h = u[y], u.hasOwnProperty(y) && h != null && !a.hasOwnProperty(y) && el(l, t, y, null, a, h);
    for (E in a)
      h = a[E], g = u[E], !a.hasOwnProperty(E) || h === g || h == null && g == null || el(l, t, E, h, a, g);
  }
  function xo(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bd() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && xo(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], d = i.startTime;
            if (d > c) break;
            var S = i.transferSize, E = i.initiatorType;
            S && xo(E) && (i = i.responseEnd, f += S * (i < c ? 1 : (c - d) / (i - d)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Zc = null, Vc = null;
  function On(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function jo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Go(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Lc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Kc = null;
  function zd() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Kc ? !1 : (Kc = l, !0) : (Kc = null, !1);
  }
  var Qo = typeof setTimeout == "function" ? setTimeout : void 0, Ed = typeof clearTimeout == "function" ? clearTimeout : void 0, Xo = typeof Promise == "function" ? Promise : void 0, Td = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xo < "u" ? function(l) {
    return Xo.resolve(null).then(l).catch(Ad);
  } : Qo;
  function Ad(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function hu(l) {
    return l === "head";
  }
  function Zo(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), _a(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          ve(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, ve(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Na] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && ve(l.ownerDocument.body);
      u = e;
    } while (u);
    _a(t);
  }
  function Vo(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function Jc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(u), Fn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function pd(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Na])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function _d(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Lo(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Wc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Od(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var $c = null;
  function Ko(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return ht(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Jo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function wo(l, t, u) {
    switch (t = On(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(m(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(m(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(m(454));
        return l;
      default:
        throw Error(m(451));
    }
  }
  function ve(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Fn(l);
  }
  var gt = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = p.d;
  p.d = {
    f: Md,
    r: Dd,
    D: Ud,
    C: Nd,
    L: Hd,
    m: Rd,
    X: qd,
    S: Cd,
    M: Bd
  };
  function Md() {
    var l = wt.f(), t = rn();
    return l || t;
  }
  function Dd(l) {
    var t = Lu(l);
    t !== null && t.tag === 5 && t.type === "form" ? o0(t) : wt.r(l);
  }
  var Ta = typeof document > "u" ? null : document;
  function $o(l, t, u) {
    var a = Ta;
    if (a && typeof t == "string" && t) {
      var e = it(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Wo.has(e) || (Wo.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Hl(t, "link", l), _l(t), a.head.appendChild(t)));
    }
  }
  function Ud(l) {
    wt.D(l), $o("dns-prefetch", l, null);
  }
  function Nd(l, t) {
    wt.C(l, t), $o("preconnect", l, t);
  }
  function Hd(l, t, u) {
    wt.L(l, t, u);
    var a = Ta;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + it(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + it(
        u.imageSizes
      ) + '"]')) : e += '[href="' + it(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Aa(l);
          break;
        case "script":
          n = pa(l);
      }
      gt.has(n) || (l = O(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), gt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(de(n)) || t === "script" && a.querySelector(me(n)) || (t = a.createElement("link"), Hl(t, "link", l), _l(t), a.head.appendChild(t)));
    }
  }
  function Rd(l, t) {
    wt.m(l, t);
    var u = Ta;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + it(a) + '"][href="' + it(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = pa(l);
      }
      if (!gt.has(n) && (l = O({ rel: "modulepreload", href: l }, t), gt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(me(n)))
              return;
        }
        a = u.createElement("link"), Hl(a, "link", l), _l(a), u.head.appendChild(a);
      }
    }
  }
  function Cd(l, t, u) {
    wt.S(l, t, u);
    var a = Ta;
    if (a && l) {
      var e = Ku(a).hoistableStyles, n = Aa(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          de(n)
        ))
          c.loading = 5;
        else {
          l = O(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = gt.get(n)) && Fc(l, u);
          var i = f = a.createElement("link");
          _l(i), Hl(i, "link", l), i._p = new Promise(function(d, S) {
            i.onload = d, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Dn(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function qd(l, t) {
    wt.X(l, t);
    var u = Ta;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = pa(l), n = a.get(e);
      n || (n = u.querySelector(me(e)), n || (l = O({ src: l, async: !0 }, t), (t = gt.get(e)) && kc(l, t), n = u.createElement("script"), _l(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Bd(l, t) {
    wt.M(l, t);
    var u = Ta;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = pa(l), n = a.get(e);
      n || (n = u.querySelector(me(e)), n || (l = O({ src: l, async: !0, type: "module" }, t), (t = gt.get(e)) && kc(l, t), n = u.createElement("script"), _l(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Fo(l, t, u, a) {
    var e = (e = G.current) ? Mn(e) : null;
    if (!e) throw Error(m(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Aa(u.href), u = Ku(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Aa(u.href);
          var n = Ku(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            de(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), gt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, gt.set(l, u), n || Yd(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(m(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(m(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = pa(u), u = Ku(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(m(444, l));
    }
  }
  function Aa(l) {
    return 'href="' + it(l) + '"';
  }
  function de(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ko(l) {
    return O({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Yd(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Hl(t, "link", u), _l(t), l.head.appendChild(t));
  }
  function pa(l) {
    return '[src="' + it(l) + '"]';
  }
  function me(l) {
    return "script[async]" + l;
  }
  function Io(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + it(u.href) + '"]'
          );
          if (a)
            return t.instance = a, _l(a), a;
          var e = O({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), _l(a), Hl(a, "style", e), Dn(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = Aa(u.href);
          var n = l.querySelector(
            de(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, _l(n), n;
          a = ko(u), (e = gt.get(e)) && Fc(a, e), n = (l.ownerDocument || l).createElement("link"), _l(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Hl(n, "link", a), t.state.loading |= 4, Dn(n, u.precedence, l), t.instance = n;
        case "script":
          return n = pa(u.src), (e = l.querySelector(
            me(n)
          )) ? (t.instance = e, _l(e), e) : (a = u, (e = gt.get(n)) && (a = O({}, u), kc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), _l(e), Hl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(m(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Dn(a, u.precedence, l));
    return t.instance;
  }
  function Dn(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Fc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Un = null;
  function Po(l, t, u) {
    if (Un === null) {
      var a = /* @__PURE__ */ new Map(), e = Un = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Un, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Na] || n[Ml] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function ly(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function xd(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function ty(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function jd(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = Aa(a.href), n = t.querySelector(
          de(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Nn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, _l(n);
          return;
        }
        n = t.ownerDocument || t, a = ko(a), (e = gt.get(e)) && Fc(a, e), n = n.createElement("link"), _l(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Hl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Nn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Ic = 0;
  function Gd(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Ic === 0 && (Ic = 62500 * bd());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Ic ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Nn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Hn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hn = /* @__PURE__ */ new Map(), t.forEach(Qd, l), Hn = null, Nn.call(l));
  }
  function Qd(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Hn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Hn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Nn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: Cl,
    Provider: null,
    Consumer: null,
    _currentValue: C,
    _currentValue2: C,
    _threadCount: 0
  };
  function Xd(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jn(0), this.hiddenUpdates = Jn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function uy(l, t, u, a, e, n, f, c, i, d, S, E) {
    return l = new Xd(
      l,
      t,
      u,
      f,
      i,
      d,
      S,
      E,
      c
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Hf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Bf(n), l;
  }
  function ay(l) {
    return l ? (l = ta, l) : ta;
  }
  function ey(l, t, u, a, e, n) {
    e = ay(e), a.context === null ? a.context = e : a.pendingContext = e, a = eu(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = nu(l, a, t), u !== null && (Wl(u, l, t), wa(u, l, t));
  }
  function ny(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Pc(l, t) {
    ny(l, t), (l = l.alternate) && ny(l, t);
  }
  function fy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Du(l, 67108864);
      t !== null && Wl(t, l, 67108864), Pc(l, 67108864);
    }
  }
  function cy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = wn(t);
      var u = Du(l, t);
      u !== null && Wl(u, l, t), Pc(l, t);
    }
  }
  var Cn = !0;
  function Zd(l, t, u, a) {
    var e = r.T;
    r.T = null;
    var n = p.p;
    try {
      p.p = 2, li(l, t, u, a);
    } finally {
      p.p = n, r.T = e;
    }
  }
  function Vd(l, t, u, a) {
    var e = r.T;
    r.T = null;
    var n = p.p;
    try {
      p.p = 8, li(l, t, u, a);
    } finally {
      p.p = n, r.T = e;
    }
  }
  function li(l, t, u, a) {
    if (Cn) {
      var e = ti(a);
      if (e === null)
        Qc(
          l,
          t,
          a,
          qn,
          u
        ), sy(l, a);
      else if (Kd(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (sy(l, a), t & 4 && -1 < Ld.indexOf(l)) {
        for (; e !== null; ) {
          var n = Lu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Au(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Il(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Mt(n), (k & 6) === 0 && (gn = Fl() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Du(n, 2), c !== null && Wl(c, n, 2), rn(), Pc(n, 2);
            }
          if (n = ti(a), n === null && Qc(
            l,
            t,
            a,
            qn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Qc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function ti(l) {
    return l = uf(l), ui(l);
  }
  var qn = null;
  function ui(l) {
    if (qn = null, l = Vu(l), l !== null) {
      var t = P(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = fl(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = vl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return qn = l, null;
  }
  function iy(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Uy()) {
          case hi:
            return 2;
          case gi:
            return 8;
          case Te:
          case Ny:
            return 32;
          case Si:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ai = !1, gu = null, Su = null, ru = null, ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), bu = [], Ld = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sy(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        gu = null;
        break;
      case "dragenter":
      case "dragleave":
        Su = null;
        break;
      case "mouseover":
      case "mouseout":
        ru = null;
        break;
      case "pointerover":
      case "pointerout":
        ge.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Se.delete(t.pointerId);
    }
  }
  function re(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Lu(t), t !== null && fy(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Kd(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return gu = re(
          gu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Su = re(
          Su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return ru = re(
          ru,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ge.set(
          n,
          re(
            ge.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, Se.set(
          n,
          re(
            Se.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function oy(l) {
    var t = Vu(l.target);
    if (t !== null) {
      var u = P(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = fl(u), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              cy(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = vl(u), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              cy(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = ti(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        tf = a, u.target.dispatchEvent(a), tf = null;
      } else
        return t = Lu(u), t !== null && fy(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function yy(l, t, u) {
    Bn(l) && u.delete(t);
  }
  function Jd() {
    ai = !1, gu !== null && Bn(gu) && (gu = null), Su !== null && Bn(Su) && (Su = null), ru !== null && Bn(ru) && (ru = null), ge.forEach(yy), Se.forEach(yy);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ai || (ai = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      Jd
    )));
  }
  var xn = null;
  function vy(l) {
    xn !== l && (xn = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        xn === l && (xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (ui(a || u) === null)
              continue;
            break;
          }
          var n = Lu(u);
          n !== null && (l.splice(t, 3), t -= 3, tc(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function _a(l) {
    function t(i) {
      return Yn(i, l);
    }
    gu !== null && Yn(gu, l), Su !== null && Yn(Su, l), ru !== null && Yn(ru, l), ge.forEach(t), Se.forEach(t);
    for (var u = 0; u < bu.length; u++) {
      var a = bu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < bu.length && (u = bu[0], u.blockedOn === null); )
      oy(u), u.blockedOn === null && bu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Zl] || null;
        if (typeof n == "function")
          f || vy(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Zl] || null)
              c = f.formAction;
            else if (ui(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), vy(u);
        }
      }
  }
  function dy() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ei(l) {
    this._internalRoot = l;
  }
  jn.prototype.render = ei.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var u = t.current, a = nt();
    ey(u, a, l, t, null, null);
  }, jn.prototype.unmount = ei.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ey(l.current, 2, null, l, null, null), rn(), t[Zu] = null;
    }
  };
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ti();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < bu.length && t !== 0 && t < bu[u].priority; u++) ;
      bu.splice(u, 0, l), u === 0 && oy(l);
    }
  };
  var my = w.version;
  if (my !== "19.2.8")
    throw Error(
      m(
        527,
        my,
        "19.2.8"
      )
    );
  p.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","), Error(m(268, l)));
    return l = z(t), l = l !== null ? L(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var wd = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: r,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        Ma = Gn.inject(
          wd
        ), kl = Gn;
      } catch {
      }
  }
  return ze.createRoot = function(l, t) {
    if (!W(l)) throw Error(m(299));
    var u = !1, a = "", e = z0, n = E0, f = T0;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = uy(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      dy
    ), l[Zu] = t.current, Gc(l), new ei(t);
  }, ze.hydrateRoot = function(l, t, u) {
    if (!W(l)) throw Error(m(299));
    var a = !1, e = "", n = z0, f = E0, c = T0, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = uy(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      i,
      n,
      f,
      c,
      dy
    ), t.context = ay(null), u = t.current, a = nt(), a = wn(a), e = eu(a), e.callback = null, nu(u, e, a), u = a, t.current.lanes = u, Ua(t, u), Mt(t), l[Zu] = t.current, Gc(l), new jn(t);
  }, ze.version = "19.2.8", ze;
}
var py;
function em() {
  if (py) return fi.exports;
  py = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (w) {
        console.error(w);
      }
  }
  return A(), fi.exports = am(), fi.exports;
}
var nm = em(), Wt = vi();
const fm = "https://api.dc.siemens.com/search", cm = 300, im = 2, yi = "https://www.siemens.com/en-us/search.html", sm = `
  query GlobalSearchSuggestions($web: Suggestion!, $product: Suggestion!) {
    suggestionsWeb: suggestions(suggestion: $web) { term type highlighted }
    suggestionsProduct: suggestions(suggestion: $product) {
      term type highlighted
      document { title description url label }
    }
  }
`;
async function om(A, w) {
  const B = await fetch(fm, {
    method: "POST",
    signal: w,
    headers: {
      "content-type": "application/json",
      Authorization: "anonymous",
      "X-Siemens-One-Preview": "enabled"
    },
    body: JSON.stringify({
      query: sm,
      variables: {
        web: {
          q: A,
          limit: 5,
          filter: {
            includes: { languages: { eq: "EN" }, regions: { eq: "US" } },
            mediatypes: ["WEB"]
          }
        },
        product: {
          q: A,
          limit: 3,
          filter: {
            includes: { languages: { eq: "EN" }, regions: { eq: "US" } },
            mediatypes: ["PRODUCT"]
          }
        }
      }
    })
  });
  if (!B.ok) throw new Error(`HTTP ${B.status}`);
  const { data: m, errors: W } = await B.json();
  if (W != null && W.length) throw new Error(W[0].message);
  const P = (m == null ? void 0 : m.suggestionsWeb) ?? [], fl = (m == null ? void 0 : m.suggestionsProduct) ?? [], vl = P.map((z) => ({
    term: z.term,
    highlighted: z.highlighted ?? z.term,
    mediatype: "WEB",
    subtype: z.type ?? "",
    url: null,
    title: null,
    description: null,
    label: null
  })), N = fl.map((z) => {
    var L, O, cl, Rl;
    return {
      term: z.term,
      highlighted: z.highlighted ?? z.term,
      mediatype: "PRODUCT",
      subtype: z.type ?? "",
      url: ((L = z.document) == null ? void 0 : L.url) ?? null,
      title: ((O = z.document) == null ? void 0 : O.title) ?? null,
      description: ((cl = z.document) == null ? void 0 : cl.description) ?? null,
      label: ((Rl = z.document) == null ? void 0 : Rl.label) ?? null
    };
  });
  return [...vl, ...N];
}
function ym(A) {
  const [w, B] = Wt.useState([]), [m, W] = Wt.useState(!1), P = Wt.useRef(null), fl = Wt.useRef(null);
  return Wt.useEffect(() => {
    if (A.length < im) {
      B([]);
      return;
    }
    return P.current && clearTimeout(P.current), P.current = setTimeout(async () => {
      fl.current && fl.current.abort(), fl.current = new AbortController(), W(!0);
      try {
        const vl = await om(A, fl.current.signal);
        B(vl);
      } catch (vl) {
        vl.name !== "AbortError" && B([]);
      } finally {
        W(!1);
      }
    }, cm), () => {
      P.current && clearTimeout(P.current);
    };
  }, [A]), { hits: w, isFetching: m, available: !0 };
}
function vm({ hit: A, onSelect: w }) {
  return /* @__PURE__ */ ml.jsx(
    "li",
    {
      className: "suggestion-item",
      role: "option",
      "aria-selected": "false",
      onMouseDown: (B) => {
        B.preventDefault(), w(A);
      },
      dangerouslySetInnerHTML: { __html: A.highlighted }
    }
  );
}
function dm({ hit: A }) {
  return !A.url || !A.title ? null : /* @__PURE__ */ ml.jsxs("div", { className: "product-item", children: [
    /* @__PURE__ */ ml.jsx(
      "a",
      {
        className: "product-link",
        href: A.url,
        target: "_blank",
        rel: "noreferrer noopener",
        onMouseDown: (w) => w.preventDefault(),
        dangerouslySetInnerHTML: { __html: A.title }
      }
    ),
    A.label && /* @__PURE__ */ ml.jsxs("div", { className: "product-by", children: [
      "by ",
      A.label
    ] }),
    A.description && /* @__PURE__ */ ml.jsx("div", { className: "product-desc", children: A.description })
  ] });
}
function mm() {
  const [A, w] = Wt.useState(""), [B, m] = Wt.useState(!1), { hits: W, isFetching: P } = ym(A), fl = W.filter((O) => O.mediatype === "WEB"), vl = W.filter((O) => O.mediatype === "PRODUCT"), N = W.length > 0, z = Wt.useCallback(
    (O = A) => {
      O.trim() && (m(!1), window.location.href = `${yi}?query=${encodeURIComponent(O.trim())}`);
    },
    [A]
  ), L = Wt.useCallback((O) => {
    m(!1), window.location.href = `${yi}?query=${encodeURIComponent(O.term)}`;
  }, []);
  return /* @__PURE__ */ ml.jsxs("div", { className: "search-widget", children: [
    /* @__PURE__ */ ml.jsxs(
      "form",
      {
        className: "search-form",
        onSubmit: (O) => {
          O.preventDefault(), z();
        },
        children: [
          /* @__PURE__ */ ml.jsx(
            "input",
            {
              type: "search",
              className: "search-input",
              placeholder: "Search Siemens…",
              value: A,
              autoComplete: "off",
              onChange: (O) => {
                w(O.currentTarget.value), m(!0);
              },
              onFocus: () => m(!0),
              onBlur: () => m(!1),
              "aria-label": "Search",
              "aria-autocomplete": "list",
              "aria-expanded": B && N
            }
          ),
          /* @__PURE__ */ ml.jsx("button", { type: "submit", className: "search-btn", "aria-label": "Submit search", children: /* @__PURE__ */ ml.jsxs("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ ml.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ ml.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ] }) })
        ]
      }
    ),
    B && N && /* @__PURE__ */ ml.jsxs("div", { className: "suggestions-panel", role: "listbox", children: [
      fl.length > 0 && /* @__PURE__ */ ml.jsxs("div", { className: "suggestions-section", role: "group", children: [
        /* @__PURE__ */ ml.jsx("div", { className: "section-header", children: "Search suggestions" }),
        /* @__PURE__ */ ml.jsx("ul", { className: "suggestions-list", children: fl.map((O) => /* @__PURE__ */ ml.jsx(vm, { hit: O, onSelect: L }, `web-${O.term}`)) })
      ] }),
      vl.length > 0 && /* @__PURE__ */ ml.jsxs("div", { className: "suggestions-section suggestions-products", role: "group", children: [
        /* @__PURE__ */ ml.jsx("div", { className: "section-header", children: "Products" }),
        vl.map((O) => /* @__PURE__ */ ml.jsx(dm, { hit: O }, `product-${O.term}`)),
        /* @__PURE__ */ ml.jsx(
          "a",
          {
            className: "view-all-products",
            href: `${yi}?query=${encodeURIComponent(A)}&tab=2`,
            target: "_blank",
            rel: "noreferrer noopener",
            onMouseDown: (O) => O.preventDefault(),
            children: "View all products"
          }
        )
      ] })
    ] }),
    B && P && A.length >= 2 && !N && /* @__PURE__ */ ml.jsx("div", { className: "suggestions-loading", children: "Loading…" })
  ] });
}
let hm = kd;
const _y = /* @__PURE__ */ new Set();
async function gm(A) {
  await A.whenReady();
  const w = document.createElement("style");
  w.textContent = hm, _y.add(w), A.shadowRoot.insertBefore(w, A.shadowRoot.firstChild);
  const B = nm.createRoot(A.getContainer());
  B.render(/* @__PURE__ */ ml.jsx(mm, {})), A.on("destroy", () => {
    _y.delete(w), w.remove(), B.unmount();
  });
}
export {
  gm as init
};
