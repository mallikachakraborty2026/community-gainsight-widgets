var fi = { exports: {} }, re = {};
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
function $v() {
  if (hy) return re;
  hy = 1;
  var A = Symbol.for("react.transitional.element"), W = Symbol.for("react.fragment");
  function B(m, $, ll) {
    var cl = null;
    if (ll !== void 0 && (cl = "" + ll), $.key !== void 0 && (cl = "" + $.key), "key" in $) {
      ll = {};
      for (var dl in $)
        dl !== "key" && (ll[dl] = $[dl]);
    } else ll = $;
    return $ = ll.ref, {
      $$typeof: A,
      type: m,
      key: cl,
      ref: $ !== void 0 ? $ : null,
      props: ll
    };
  }
  return re.Fragment = W, re.jsx = B, re.jsxs = B, re;
}
var gy;
function Fv() {
  return gy || (gy = 1, fi.exports = $v()), fi.exports;
}
var ml = Fv();
const kv = ":host{display:block;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif}.search-widget{position:relative;width:100%;max-width:480px}.search-form{display:flex;align-items:center;border:1.5px solid #ccc;border-radius:4px;overflow:hidden;background:#fff;transition:border-color .2s}.search-form:focus-within{border-color:#099}.search-input{flex:1;border:none;outline:none;padding:10px 12px;font-size:14px;background:transparent;-webkit-appearance:none}.search-input::-webkit-search-cancel-button{-webkit-appearance:none}.search-btn{display:flex;align-items:center;justify-content:center;padding:0 12px;height:40px;border:none;background:#099;color:#fff;cursor:pointer;transition:background .2s}.search-btn:hover{background:#007a7a}.suggestions-panel{position:absolute;top:calc(100% + 4px);left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:4px;box-shadow:0 4px 12px #0000001a;z-index:9999;max-height:420px;overflow-y:auto}.suggestions-section{padding:4px 0}.suggestions-section+.suggestions-section{border-top:1px solid #f0f0f0}.section-header{padding:8px 14px 4px;font-size:11px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:.06em}.suggestions-list{list-style:none;margin:0;padding:0}.suggestion-item{padding:9px 14px;font-size:14px;cursor:pointer;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.suggestion-item:hover{background:#f5f5f5}.suggestion-item mark{background:none;font-weight:600;color:inherit}.product-item{padding:9px 14px;cursor:pointer}.product-item:hover{background:#f5f5f5}.product-link{display:block;font-size:14px;font-weight:500;color:#333;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.product-item:hover .product-link{color:#099}.product-link mark{background:none;font-weight:700;color:inherit}.product-by{font-size:12px;color:#888;margin-top:2px}.product-desc{font-size:12px;color:#666;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.view-all-products{display:block;padding:8px 14px;font-size:13px;color:#099;text-decoration:none;font-weight:500;border-top:1px solid #f0f0f0}.view-all-products:hover{text-decoration:underline}.suggestions-loading{position:absolute;top:calc(100% + 4px);left:0;right:0;padding:10px 14px;background:#fff;border:1px solid #ddd;border-radius:4px;font-size:14px;color:#888}";
var ci = { exports: {} }, ze = {}, ii = { exports: {} }, si = {};
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
function Iv() {
  return Sy || (Sy = 1, (function(A) {
    function W(b, p) {
      var q = b.length;
      b.push(p);
      l: for (; 0 < q; ) {
        var al = q - 1 >>> 1, il = b[al];
        if (0 < $(il, p))
          b[al] = p, b[q] = il, q = al;
        else break l;
      }
    }
    function B(b) {
      return b.length === 0 ? null : b[0];
    }
    function m(b) {
      if (b.length === 0) return null;
      var p = b[0], q = b.pop();
      if (q !== p) {
        b[0] = q;
        l: for (var al = 0, il = b.length, o = il >>> 1; al < o; ) {
          var E = 2 * (al + 1) - 1, _ = b[E], M = E + 1, x = b[M];
          if (0 > $(_, q))
            M < il && 0 > $(x, _) ? (b[al] = x, b[M] = q, al = M) : (b[al] = _, b[E] = q, al = E);
          else if (M < il && 0 > $(x, q))
            b[al] = x, b[M] = q, al = M;
          else break l;
        }
      }
      return p;
    }
    function $(b, p) {
      var q = b.sortIndex - p.sortIndex;
      return q !== 0 ? q : b.id - p.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ll = performance;
      A.unstable_now = function() {
        return ll.now();
      };
    } else {
      var cl = Date, dl = cl.now();
      A.unstable_now = function() {
        return cl.now() - dl;
      };
    }
    var U = [], z = [], K = 1, H = null, C = 3, Rl = !1, jl = !1, Bl = !1, Ut = !1, $l = typeof setTimeout == "function" ? setTimeout : null, $t = typeof clearTimeout == "function" ? clearTimeout : null, Cl = typeof setImmediate < "u" ? setImmediate : null;
    function ft(b) {
      for (var p = B(z); p !== null; ) {
        if (p.callback === null) m(z);
        else if (p.startTime <= b)
          m(z), p.sortIndex = p.expirationTime, W(U, p);
        else break;
        p = B(z);
      }
    }
    function Tt(b) {
      if (Bl = !1, ft(b), !jl)
        if (B(U) !== null)
          jl = !0, Gl || (Gl = !0, Xl());
        else {
          var p = B(z);
          p !== null && St(Tt, p.startTime - b);
        }
    }
    var Gl = !1, J = -1, Ql = 5, Et = -1;
    function Xu() {
      return Ut ? !0 : !(A.unstable_now() - Et < Ql);
    }
    function At() {
      if (Ut = !1, Gl) {
        var b = A.unstable_now();
        Et = b;
        var p = !0;
        try {
          l: {
            jl = !1, Bl && (Bl = !1, $t(J), J = -1), Rl = !0;
            var q = C;
            try {
              t: {
                for (ft(b), H = B(U); H !== null && !(H.expirationTime > b && Xu()); ) {
                  var al = H.callback;
                  if (typeof al == "function") {
                    H.callback = null, C = H.priorityLevel;
                    var il = al(
                      H.expirationTime <= b
                    );
                    if (b = A.unstable_now(), typeof il == "function") {
                      H.callback = il, ft(b), p = !0;
                      break t;
                    }
                    H === B(U) && m(U), ft(b);
                  } else m(U);
                  H = B(U);
                }
                if (H !== null) p = !0;
                else {
                  var o = B(z);
                  o !== null && St(
                    Tt,
                    o.startTime - b
                  ), p = !1;
                }
              }
              break l;
            } finally {
              H = null, C = q, Rl = !1;
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
      var Tu = new MessageChannel(), Nt = Tu.port2;
      Tu.port1.onmessage = At, Xl = function() {
        Nt.postMessage(null);
      };
    } else
      Xl = function() {
        $l(At, 0);
      };
    function St(b, p) {
      J = $l(function() {
        b(A.unstable_now());
      }, p);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, A.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ql = 0 < b ? Math.floor(1e3 / b) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, A.unstable_next = function(b) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var p = 3;
          break;
        default:
          p = C;
      }
      var q = C;
      C = p;
      try {
        return b();
      } finally {
        C = q;
      }
    }, A.unstable_requestPaint = function() {
      Ut = !0;
    }, A.unstable_runWithPriority = function(b, p) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var q = C;
      C = b;
      try {
        return p();
      } finally {
        C = q;
      }
    }, A.unstable_scheduleCallback = function(b, p, q) {
      var al = A.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? al + q : al) : q = al, b) {
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
      return il = q + il, b = {
        id: K++,
        callback: p,
        priorityLevel: b,
        startTime: q,
        expirationTime: il,
        sortIndex: -1
      }, q > al ? (b.sortIndex = q, W(z, b), B(U) === null && b === B(z) && (Bl ? ($t(J), J = -1) : Bl = !0, St(Tt, q - al))) : (b.sortIndex = il, W(U, b), jl || Rl || (jl = !0, Gl || (Gl = !0, Xl()))), b;
    }, A.unstable_shouldYield = Xu, A.unstable_wrapCallback = function(b) {
      var p = C;
      return function() {
        var q = C;
        C = p;
        try {
          return b.apply(this, arguments);
        } finally {
          C = q;
        }
      };
    };
  })(si)), si;
}
var by;
function Pv() {
  return by || (by = 1, ii.exports = Iv()), ii.exports;
}
var oi = { exports: {} }, Y = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ry;
function lm() {
  if (ry) return Y;
  ry = 1;
  var A = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), ll = Symbol.for("react.consumer"), cl = Symbol.for("react.context"), dl = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), C = Symbol.iterator;
  function Rl(o) {
    return o === null || typeof o != "object" ? null : (o = C && o[C] || o["@@iterator"], typeof o == "function" ? o : null);
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
  }, Bl = Object.assign, Ut = {};
  function $l(o, E, _) {
    this.props = o, this.context = E, this.refs = Ut, this.updater = _ || jl;
  }
  $l.prototype.isReactComponent = {}, $l.prototype.setState = function(o, E) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, E, "setState");
  }, $l.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function $t() {
  }
  $t.prototype = $l.prototype;
  function Cl(o, E, _) {
    this.props = o, this.context = E, this.refs = Ut, this.updater = _ || jl;
  }
  var ft = Cl.prototype = new $t();
  ft.constructor = Cl, Bl(ft, $l.prototype), ft.isPureReactComponent = !0;
  var Tt = Array.isArray;
  function Gl() {
  }
  var J = { H: null, A: null, T: null, S: null }, Ql = Object.prototype.hasOwnProperty;
  function Et(o, E, _) {
    var M = _.ref;
    return {
      $$typeof: A,
      type: o,
      key: E,
      ref: M !== void 0 ? M : null,
      props: _
    };
  }
  function Xu(o, E) {
    return Et(o.type, E, o.props);
  }
  function At(o) {
    return typeof o == "object" && o !== null && o.$$typeof === A;
  }
  function Xl(o) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(_) {
      return E[_];
    });
  }
  var Tu = /\/+/g;
  function Nt(o, E) {
    return typeof o == "object" && o !== null && o.key != null ? Xl("" + o.key) : E.toString(36);
  }
  function St(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Gl, Gl) : (o.status = "pending", o.then(
          function(E) {
            o.status === "pending" && (o.status = "fulfilled", o.value = E);
          },
          function(E) {
            o.status === "pending" && (o.status = "rejected", o.reason = E);
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
  function b(o, E, _, M, x) {
    var Q = typeof o;
    (Q === "undefined" || Q === "boolean") && (o = null);
    var P = !1;
    if (o === null) P = !0;
    else
      switch (Q) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case A:
            case W:
              P = !0;
              break;
            case K:
              return P = o._init, b(
                P(o._payload),
                E,
                _,
                M,
                x
              );
          }
      }
    if (P)
      return x = x(o), P = M === "" ? "." + Nt(o, 0) : M, Tt(x) ? (_ = "", P != null && (_ = P.replace(Tu, "$&/") + "/"), b(x, E, _, "", function(Oa) {
        return Oa;
      })) : x != null && (At(x) && (x = Xu(
        x,
        _ + (x.key == null || o && o.key === x.key ? "" : ("" + x.key).replace(
          Tu,
          "$&/"
        ) + "/") + P
      )), E.push(x)), 1;
    P = 0;
    var Yl = M === "" ? "." : M + ":";
    if (Tt(o))
      for (var Sl = 0; Sl < o.length; Sl++)
        M = o[Sl], Q = Yl + Nt(M, Sl), P += b(
          M,
          E,
          _,
          Q,
          x
        );
    else if (Sl = Rl(o), typeof Sl == "function")
      for (o = Sl.call(o), Sl = 0; !(M = o.next()).done; )
        M = M.value, Q = Yl + Nt(M, Sl++), P += b(
          M,
          E,
          _,
          Q,
          x
        );
    else if (Q === "object") {
      if (typeof o.then == "function")
        return b(
          St(o),
          E,
          _,
          M,
          x
        );
      throw E = String(o), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function p(o, E, _) {
    if (o == null) return o;
    var M = [], x = 0;
    return b(o, M, "", "", function(Q) {
      return E.call(_, Q, x++);
    }), M;
  }
  function q(o) {
    if (o._status === -1) {
      var E = o._result;
      E = E(), E.then(
        function(_) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = _);
        },
        function(_) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = _);
        }
      ), o._status === -1 && (o._status = 0, o._result = E);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var al = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  }, il = {
    map: p,
    forEach: function(o, E, _) {
      p(
        o,
        function() {
          E.apply(this, arguments);
        },
        _
      );
    },
    count: function(o) {
      var E = 0;
      return p(o, function() {
        E++;
      }), E;
    },
    toArray: function(o) {
      return p(o, function(E) {
        return E;
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
  return Y.Activity = H, Y.Children = il, Y.Component = $l, Y.Fragment = B, Y.Profiler = $, Y.PureComponent = Cl, Y.StrictMode = m, Y.Suspense = U, Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, Y.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return J.H.useMemoCache(o);
    }
  }, Y.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, Y.cacheSignal = function() {
    return null;
  }, Y.cloneElement = function(o, E, _) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var M = Bl({}, o.props), x = o.key;
    if (E != null)
      for (Q in E.key !== void 0 && (x = "" + E.key), E)
        !Ql.call(E, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && E.ref === void 0 || (M[Q] = E[Q]);
    var Q = arguments.length - 2;
    if (Q === 1) M.children = _;
    else if (1 < Q) {
      for (var P = Array(Q), Yl = 0; Yl < Q; Yl++)
        P[Yl] = arguments[Yl + 2];
      M.children = P;
    }
    return Et(o.type, x, M);
  }, Y.createContext = function(o) {
    return o = {
      $$typeof: cl,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: ll,
      _context: o
    }, o;
  }, Y.createElement = function(o, E, _) {
    var M, x = {}, Q = null;
    if (E != null)
      for (M in E.key !== void 0 && (Q = "" + E.key), E)
        Ql.call(E, M) && M !== "key" && M !== "__self" && M !== "__source" && (x[M] = E[M]);
    var P = arguments.length - 2;
    if (P === 1) x.children = _;
    else if (1 < P) {
      for (var Yl = Array(P), Sl = 0; Sl < P; Sl++)
        Yl[Sl] = arguments[Sl + 2];
      x.children = Yl;
    }
    if (o && o.defaultProps)
      for (M in P = o.defaultProps, P)
        x[M] === void 0 && (x[M] = P[M]);
    return Et(o, Q, x);
  }, Y.createRef = function() {
    return { current: null };
  }, Y.forwardRef = function(o) {
    return { $$typeof: dl, render: o };
  }, Y.isValidElement = At, Y.lazy = function(o) {
    return {
      $$typeof: K,
      _payload: { _status: -1, _result: o },
      _init: q
    };
  }, Y.memo = function(o, E) {
    return {
      $$typeof: z,
      type: o,
      compare: E === void 0 ? null : E
    };
  }, Y.startTransition = function(o) {
    var E = J.T, _ = {};
    J.T = _;
    try {
      var M = o(), x = J.S;
      x !== null && x(_, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(Gl, al);
    } catch (Q) {
      al(Q);
    } finally {
      E !== null && _.types !== null && (E.types = _.types), J.T = E;
    }
  }, Y.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, Y.use = function(o) {
    return J.H.use(o);
  }, Y.useActionState = function(o, E, _) {
    return J.H.useActionState(o, E, _);
  }, Y.useCallback = function(o, E) {
    return J.H.useCallback(o, E);
  }, Y.useContext = function(o) {
    return J.H.useContext(o);
  }, Y.useDebugValue = function() {
  }, Y.useDeferredValue = function(o, E) {
    return J.H.useDeferredValue(o, E);
  }, Y.useEffect = function(o, E) {
    return J.H.useEffect(o, E);
  }, Y.useEffectEvent = function(o) {
    return J.H.useEffectEvent(o);
  }, Y.useId = function() {
    return J.H.useId();
  }, Y.useImperativeHandle = function(o, E, _) {
    return J.H.useImperativeHandle(o, E, _);
  }, Y.useInsertionEffect = function(o, E) {
    return J.H.useInsertionEffect(o, E);
  }, Y.useLayoutEffect = function(o, E) {
    return J.H.useLayoutEffect(o, E);
  }, Y.useMemo = function(o, E) {
    return J.H.useMemo(o, E);
  }, Y.useOptimistic = function(o, E) {
    return J.H.useOptimistic(o, E);
  }, Y.useReducer = function(o, E, _) {
    return J.H.useReducer(o, E, _);
  }, Y.useRef = function(o) {
    return J.H.useRef(o);
  }, Y.useState = function(o) {
    return J.H.useState(o);
  }, Y.useSyncExternalStore = function(o, E, _) {
    return J.H.useSyncExternalStore(
      o,
      E,
      _
    );
  }, Y.useTransition = function() {
    return J.H.useTransition();
  }, Y.version = "19.2.8", Y;
}
var zy;
function di() {
  return zy || (zy = 1, oi.exports = lm()), oi.exports;
}
var yi = { exports: {} }, ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ty;
function tm() {
  if (Ty) return ql;
  Ty = 1;
  var A = di();
  function W(U) {
    var z = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var K = 2; K < arguments.length; K++)
        z += "&args[]=" + encodeURIComponent(arguments[K]);
    }
    return "Minified React error #" + U + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function B() {
  }
  var m = {
    d: {
      f: B,
      r: function() {
        throw Error(W(522));
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
  }, $ = Symbol.for("react.portal");
  function ll(U, z, K) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: $,
      key: H == null ? null : "" + H,
      children: U,
      containerInfo: z,
      implementation: K
    };
  }
  var cl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function dl(U, z) {
    if (U === "font") return "";
    if (typeof z == "string")
      return z === "use-credentials" ? z : "";
  }
  return ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, ql.createPortal = function(U, z) {
    var K = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
      throw Error(W(299));
    return ll(U, z, null, K);
  }, ql.flushSync = function(U) {
    var z = cl.T, K = m.p;
    try {
      if (cl.T = null, m.p = 2, U) return U();
    } finally {
      cl.T = z, m.p = K, m.d.f();
    }
  }, ql.preconnect = function(U, z) {
    typeof U == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, m.d.C(U, z));
  }, ql.prefetchDNS = function(U) {
    typeof U == "string" && m.d.D(U);
  }, ql.preinit = function(U, z) {
    if (typeof U == "string" && z && typeof z.as == "string") {
      var K = z.as, H = dl(K, z.crossOrigin), C = typeof z.integrity == "string" ? z.integrity : void 0, Rl = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      K === "style" ? m.d.S(
        U,
        typeof z.precedence == "string" ? z.precedence : void 0,
        {
          crossOrigin: H,
          integrity: C,
          fetchPriority: Rl
        }
      ) : K === "script" && m.d.X(U, {
        crossOrigin: H,
        integrity: C,
        fetchPriority: Rl,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, ql.preinitModule = function(U, z) {
    if (typeof U == "string")
      if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var K = dl(
            z.as,
            z.crossOrigin
          );
          m.d.M(U, {
            crossOrigin: K,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && m.d.M(U);
  }, ql.preload = function(U, z) {
    if (typeof U == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var K = z.as, H = dl(K, z.crossOrigin);
      m.d.L(U, K, {
        crossOrigin: H,
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
  }, ql.preloadModule = function(U, z) {
    if (typeof U == "string")
      if (z) {
        var K = dl(z.as, z.crossOrigin);
        m.d.m(U, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: K,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else m.d.m(U);
  }, ql.requestFormReset = function(U) {
    m.d.r(U);
  }, ql.unstable_batchedUpdates = function(U, z) {
    return U(z);
  }, ql.useFormState = function(U, z, K) {
    return cl.H.useFormState(U, z, K);
  }, ql.useFormStatus = function() {
    return cl.H.useHostTransitionStatus();
  }, ql.version = "19.2.8", ql;
}
var Ey;
function um() {
  if (Ey) return yi.exports;
  Ey = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (W) {
        console.error(W);
      }
  }
  return A(), yi.exports = tm(), yi.exports;
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
  var A = Pv(), W = di(), B = um();
  function m(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function $(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ll(l) {
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
  function cl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function dl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (ll(l) !== l)
      throw Error(m(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = ll(l), t === null) throw Error(m(188));
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
          if (n === u) return U(e), l;
          if (n === a) return U(e), t;
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
  function K(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = K(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign, C = Symbol.for("react.element"), Rl = Symbol.for("react.transitional.element"), jl = Symbol.for("react.portal"), Bl = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), $t = Symbol.for("react.consumer"), Cl = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), Tt = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Ql = Symbol.for("react.lazy"), Et = Symbol.for("react.activity"), Xu = Symbol.for("react.memo_cache_sentinel"), At = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object" ? null : (l = At && l[At] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Tu = Symbol.for("react.client.reference");
  function Nt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Tu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Et:
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
        case J:
          return t = l.displayName || null, t !== null ? t : Nt(l.type) || "Memo";
        case Ql:
          t = l._payload, l = l._init;
          try {
            return Nt(l(t));
          } catch {
          }
      }
    return null;
  }
  var St = Array.isArray, b = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, al = [], il = -1;
  function o(l) {
    return { current: l };
  }
  function E(l) {
    0 > il || (l.current = al[il], al[il] = null, il--);
  }
  function _(l, t) {
    il++, al[il] = l.current, l.current = t;
  }
  var M = o(null), x = o(null), Q = o(null), P = o(null);
  function Yl(l, t) {
    switch (_(Q, t), _(x, l), _(M, null), t.nodeType) {
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
    E(M), _(M, l);
  }
  function Sl() {
    E(M), E(x), E(Q);
  }
  function Oa(l) {
    l.memoizedState !== null && _(P, l);
    var t = M.current, u = Go(t, l.type);
    t !== u && (_(x, l), _(M, u));
  }
  function Te(l) {
    x.current === l && (E(M), E(x)), P.current === l && (E(P), he._currentValue = q);
  }
  var Xn, vi;
  function Eu(l) {
    if (Xn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Xn = t && t[1] || "", vi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Xn + l + vi;
  }
  var Zn = !1;
  function Vn(l, t) {
    if (!l || Zn) return "";
    Zn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (g) {
                  h = g;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
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
`), v = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < v.length && !v[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === v.length)
          for (a = i.length - 1, e = v.length - 1; 1 <= a && 0 <= e && i[a] !== v[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== v[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== v[e]) {
                  var S = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Zn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Eu(u) : "";
  }
  function Oy(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Eu(l.type);
      case 16:
        return Eu("Lazy");
      case 13:
        return l.child !== t && t !== null ? Eu("Suspense Fallback") : Eu("Suspense");
      case 19:
        return Eu("SuspenseList");
      case 0:
      case 15:
        return Vn(l.type, !1);
      case 11:
        return Vn(l.type.render, !1);
      case 1:
        return Vn(l.type, !0);
      case 31:
        return Eu("Activity");
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
  var Ln = Object.prototype.hasOwnProperty, Kn = A.unstable_scheduleCallback, Jn = A.unstable_cancelCallback, My = A.unstable_shouldYield, Dy = A.unstable_requestPaint, Fl = A.unstable_now, Uy = A.unstable_getCurrentPriorityLevel, hi = A.unstable_ImmediatePriority, gi = A.unstable_UserBlockingPriority, Ee = A.unstable_NormalPriority, Ny = A.unstable_LowPriority, Si = A.unstable_IdlePriority, Hy = A.log, Ry = A.unstable_setDisableYieldValue, Ma = null, kl = null;
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
  function bi() {
    var l = _e;
    return _e <<= 1, (_e & 62914560) === 0 && (_e = 4194304), l;
  }
  function wn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ua(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function xy(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, v = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - Il(u), T = 1 << S;
      c[S] = 0, i[S] = -1;
      var h = v[S];
      if (h !== null)
        for (v[S] = null, S = 0; S < h.length; S++) {
          var g = h[S];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && ri(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function ri(l, t, u) {
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
  function Ti(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : Wn(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function Wn(l) {
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
  function $n(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ei() {
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
  var kt = Math.random().toString(36).slice(2), Ml = "__reactFiber$" + kt, Zl = "__reactProps$" + kt, Zu = "__reactContainer$" + kt, Fn = "__reactEvents$" + kt, jy = "__reactListeners$" + kt, Gy = "__reactHandles$" + kt, pi = "__reactResources$" + kt, Na = "__reactMarker$" + kt;
  function kn(l) {
    delete l[Ml], delete l[Zl], delete l[Fn], delete l[jy], delete l[Gy];
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
    return Ln.call(Di, l) ? !0 : Ln.call(Mi, l) ? !1 : Qy.test(l) ? Di[l] = !0 : (Mi[l] = !0, !1);
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
  function Ht(l, t, u, a) {
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
  function In(l) {
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
  function Pn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ct(t)) : l.value !== "" + ct(t) && (l.value = "" + ct(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? lf(l, f, ct(t)) : u != null ? lf(l, f, ct(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ct(c) : l.removeAttribute("name");
  }
  function Hi(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        In(l);
        return;
      }
      u = u != null ? "" + ct(u) : "", t = t != null ? "" + ct(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), In(l);
  }
  function lf(l, t, u) {
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
    u = ct(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), In(l);
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
  function tf(l) {
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
  function Rt() {
  }
  var uf = null;
  function af(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $u = null, Fu = null;
  function Yi(l) {
    var t = Lu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Zl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Pn(
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
                Pn(
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
  var ef = !1;
  function xi(l, t, u) {
    if (ef) return l(t, u);
    ef = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ef = !1, ($u !== null || Fu !== null) && (bn(), $u && (t = $u, l = Fu, Fu = $u = null, Yi(t), l)))
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
  var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nf = !1;
  if (Ct)
    try {
      var Ca = {};
      Object.defineProperty(Ca, "passive", {
        get: function() {
          nf = !0;
        }
      }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca);
    } catch {
      nf = !1;
    }
  var It = null, ff = null, He = null;
  function ji() {
    if (He) return He;
    var l, t = ff, u = t.length, a, e = "value" in It ? It.value : It.textContent, n = e.length;
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
    return H(t.prototype, {
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
  }, qe = Vl(_u), qa = H({}, _u, { view: 0, detail: 0 }), wy = Vl(qa), cf, sf, Ba, Be = H({}, qa, {
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
    getModifierState: yf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ba && (Ba && l.type === "mousemove" ? (cf = l.screenX - Ba.screenX, sf = l.screenY - Ba.screenY) : sf = cf = 0, Ba = l), cf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : sf;
    }
  }), Qi = Vl(Be), Wy = H({}, Be, { dataTransfer: 0 }), $y = Vl(Wy), Fy = H({}, qa, { relatedTarget: 0 }), of = Vl(Fy), ky = H({}, _u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Iy = Vl(ky), Py = H({}, _u, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ld = Vl(Py), td = H({}, _u, { data: 0 }), Xi = Vl(td), ud = {
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
  }, ad = {
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
  }, ed = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function nd(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = ed[l]) ? !!t[l] : !1;
  }
  function yf() {
    return nd;
  }
  var fd = H({}, qa, {
    key: function(l) {
      if (l.key) {
        var t = ud[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? ad[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yf,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), cd = Vl(fd), id = H({}, Be, {
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
  }), Zi = Vl(id), sd = H({}, qa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yf
  }), od = Vl(sd), yd = H({}, _u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), dd = Vl(yd), vd = H({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), md = Vl(vd), hd = H({}, _u, {
    newState: 0,
    oldState: 0
  }), gd = Vl(hd), Sd = [9, 13, 27, 32], df = Ct && "CompositionEvent" in window, Ya = null;
  Ct && "documentMode" in document && (Ya = document.documentMode);
  var bd = Ct && "TextEvent" in window && !Ya, Vi = Ct && (!df || Ya && 8 < Ya && 11 >= Ya), Li = " ", Ki = !1;
  function Ji(l, t) {
    switch (l) {
      case "keyup":
        return Sd.indexOf(t.keyCode) !== -1;
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
  function rd(l, t) {
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
  function zd(l, t) {
    if (ku)
      return l === "compositionend" || !df && Ji(l, t) ? (l = ji(), He = ff = It = null, ku = !1, l) : null;
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
  var Td = {
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
    return t === "input" ? !!Td[l.type] : t === "textarea";
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
  function Ed(l) {
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
  if (Ct) {
    var vf;
    if (Ct) {
      var mf = "oninput" in document;
      if (!mf) {
        var Ii = document.createElement("div");
        Ii.setAttribute("oninput", "return;"), mf = typeof Ii.oninput == "function";
      }
      vf = mf;
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
        af(l)
      ), xi(Ed, t);
    }
  }
  function Ad(l, t, u) {
    l === "focusin" ? (Pi(), xa = t, ja = u, xa.attachEvent("onpropertychange", ls)) : l === "focusout" && Pi();
  }
  function pd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ye(ja);
  }
  function _d(l, t) {
    if (l === "click") return Ye(t);
  }
  function Od(l, t) {
    if (l === "input" || l === "change")
      return Ye(t);
  }
  function Md(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : Md;
  function Ga(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Ln.call(t, e) || !Pl(l[e], t[e]))
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
  function hf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Dd = Ct && "documentMode" in document && 11 >= document.documentMode, Iu = null, gf = null, Qa = null, Sf = !1;
  function ns(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Sf || Iu == null || Iu !== Ue(a) || (a = Iu, "selectionStart" in a && hf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Qa && Ga(Qa, a) || (Qa = a, a = _n(gf, "onSelect"), 0 < a.length && (t = new qe(
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
  }, bf = {}, fs = {};
  Ct && (fs = document.createElement("div").style, "AnimationEvent" in window || (delete Pu.animationend.animation, delete Pu.animationiteration.animation, delete Pu.animationstart.animation), "TransitionEvent" in window || delete Pu.transitionend.transition);
  function Mu(l) {
    if (bf[l]) return bf[l];
    if (!Pu[l]) return l;
    var t = Pu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in fs)
        return bf[l] = t[u];
    return l;
  }
  var cs = Mu("animationend"), is = Mu("animationiteration"), ss = Mu("animationstart"), Ud = Mu("transitionrun"), Nd = Mu("transitionstart"), Hd = Mu("transitioncancel"), os = Mu("transitionend"), ys = /* @__PURE__ */ new Map(), rf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rf.push("scrollEnd");
  function bt(l, t) {
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
  }, st = [], la = 0, zf = 0;
  function je() {
    for (var l = la, t = zf = la = 0; t < l; ) {
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
      n !== 0 && ds(u, e, n);
    }
  }
  function Ge(l, t, u, a) {
    st[la++] = l, st[la++] = t, st[la++] = u, st[la++] = a, zf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Tf(l, t, u, a) {
    return Ge(l, t, u, a), Qe(l);
  }
  function Du(l, t) {
    return Ge(l, null, null, t), Qe(l);
  }
  function ds(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Il(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ie)
      throw ie = 0, Nc = null, Error(m(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ta = {};
  function Rd(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, u, a) {
    return new Rd(l, t, u, a);
  }
  function Ef(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var u = l.alternate;
    return u === null ? (u = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function vs(l, t) {
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
      f = xv(
        l,
        u,
        M.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Et:
          return l = lt(31, u, t, e), l.elementType = Et, l.lanes = n, l;
        case Bl:
          return Uu(u.children, e, n, t);
        case Ut:
          f = 8, e |= 24;
          break;
        case $l:
          return l = lt(12, u, t, e | 2), l.elementType = $l, l.lanes = n, l;
        case Tt:
          return l = lt(13, u, t, e), l.elementType = Tt, l.lanes = n, l;
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
              case J:
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
  function Af(l, t, u) {
    return l = lt(6, l, null, t), l.lanes = u, l;
  }
  function ms(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function pf(l, t, u) {
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
  var ua = [], aa = 0, Ze = null, Xa = 0, yt = [], dt = 0, Pt = null, pt = 1, _t = "";
  function Bt(l, t) {
    ua[aa++] = Xa, ua[aa++] = Ze, Ze = l, Xa = t;
  }
  function gs(l, t, u) {
    yt[dt++] = pt, yt[dt++] = _t, yt[dt++] = Pt, Pt = l;
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
  function _f(l) {
    l.return !== null && (Bt(l, 1), gs(l, 1, 0));
  }
  function Of(l) {
    for (; l === Ze; )
      Ze = ua[--aa], ua[aa] = null, Xa = ua[--aa], ua[aa] = null;
    for (; l === Pt; )
      Pt = yt[--dt], yt[dt] = null, _t = yt[--dt], yt[dt] = null, pt = yt[--dt], yt[dt] = null;
  }
  function Ss(l, t) {
    yt[dt++] = pt, yt[dt++] = _t, yt[dt++] = Pt, pt = t.id, _t = t.overflow, Pt = l;
  }
  var Dl = null, ol = null, w = !1, lu = null, vt = !1, Mf = Error(m(519));
  function tu(l) {
    var t = Error(
      m(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Za(ot(t, l)), Mf;
  }
  function bs(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Ml] = l, t[Zl] = a, u) {
      case "dialog":
        Z("cancel", t), Z("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Z("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < oe.length; u++)
          Z(oe[u], t);
        break;
      case "source":
        Z("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Z("error", t), Z("load", t);
        break;
      case "details":
        Z("toggle", t);
        break;
      case "input":
        Z("invalid", t), Hi(
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
        Z("invalid", t);
        break;
      case "textarea":
        Z("invalid", t), Ci(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Yo(t.textContent, u) ? (a.popover != null && (Z("beforetoggle", t), Z("toggle", t)), a.onScroll != null && Z("scroll", t), a.onScrollEnd != null && Z("scrollend", t), a.onClick != null && (t.onclick = Rt), t = !0) : t = !1, t || tu(l, !0);
  }
  function rs(l) {
    for (Dl = l.return; Dl; )
      switch (Dl.tag) {
        case 5:
        case 31:
        case 13:
          vt = !1;
          return;
        case 27:
        case 3:
          vt = !0;
          return;
        default:
          Dl = Dl.return;
      }
  }
  function ea(l) {
    if (l !== Dl) return !1;
    if (!w) return rs(l), w = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Kc(l.type, l.memoizedProps)), u = !u), u && ol && tu(l), rs(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      ol = Ko(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(m(317));
      ol = Ko(l);
    } else
      t === 27 ? (t = ol, hu(l.type) ? (l = Fc, Fc = null, ol = l) : ol = t) : ol = Dl ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Nu() {
    ol = Dl = null, w = !1;
  }
  function Df() {
    var l = lu;
    return l !== null && (wl === null ? wl = l : wl.push.apply(
      wl,
      l
    ), lu = null), l;
  }
  function Za(l) {
    lu === null ? lu = [l] : lu.push(l);
  }
  var Uf = o(null), Hu = null, Yt = null;
  function uu(l, t, u) {
    _(Uf, t._currentValue), t._currentValue = u;
  }
  function xt(l) {
    l._currentValue = Uf.current, E(Uf);
  }
  function Nf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Hf(l, t, u, a) {
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
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Nf(
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
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Nf(f, u, l), f = null;
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
      } else if (e === P.current) {
        if (f = e.alternate, f === null) throw Error(m(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      e = e.return;
    }
    l !== null && Hf(
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
    Hu = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ul(l) {
    return zs(Hu, l);
  }
  function Le(l, t) {
    return Hu === null && Ru(l), zs(l, t);
  }
  function zs(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Yt === null) {
      if (l === null) throw Error(m(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return u;
  }
  var Cd = typeof AbortController < "u" ? AbortController : function() {
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
  }, qd = A.unstable_scheduleCallback, Bd = A.unstable_NormalPriority, zl = {
    $$typeof: Cl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rf() {
    return {
      controller: new Cd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Va(l) {
    l.refCount--, l.refCount === 0 && qd(Bd, function() {
      l.controller.abort();
    });
  }
  var La = null, Cf = 0, fa = 0, ca = null;
  function Yd(l, t) {
    if (La === null) {
      var u = La = [];
      Cf = 0, fa = Yc(), ca = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Cf++, t.then(Ts, Ts), t;
  }
  function Ts() {
    if (--Cf === 0 && La !== null) {
      ca !== null && (ca.status = "fulfilled");
      var l = La;
      La = null, fa = 0, ca = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function xd(l, t) {
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
  var Es = b.S;
  b.S = function(l, t) {
    no = Fl(), typeof t == "object" && t !== null && typeof t.then == "function" && Yd(l, t), Es !== null && Es(l, t);
  };
  var Cu = o(null);
  function qf() {
    var l = Cu.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? _(Cu, Cu.current) : _(Cu, t.pool);
  }
  function As() {
    var l = qf();
    return l === null ? null : { parent: zl._currentValue, pool: l };
  }
  var ia = Error(m(460)), Bf = Error(m(474)), Je = Error(m(542)), we = { then: function() {
  } };
  function ps(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function _s(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Rt, Rt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ms(l), l;
      default:
        if (typeof t.status == "string") t.then(Rt, Rt);
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
    throw t.$$typeof === C ? Error(m(525)) : (l = Object.prototype.toString.call(t), Error(
      m(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Ds(l) {
    function t(y, s) {
      if (l) {
        var d = y.deletions;
        d === null ? (y.deletions = [s], y.flags |= 16) : d.push(s);
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
      return y = qt(y, s), y.index = 0, y.sibling = null, y;
    }
    function n(y, s, d) {
      return y.index = d, l ? (d = y.alternate, d !== null ? (d = d.index, d < s ? (y.flags |= 67108866, s) : d) : (y.flags |= 67108866, s)) : (y.flags |= 1048576, s);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, s, d, r) {
      return s === null || s.tag !== 6 ? (s = Af(d, y.mode, r), s.return = y, s) : (s = e(s, d), s.return = y, s);
    }
    function i(y, s, d, r) {
      var N = d.type;
      return N === Bl ? S(
        y,
        s,
        d.props.children,
        r,
        d.key
      ) : s !== null && (s.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Ql && qu(N) === s.type) ? (s = e(s, d.props), Ja(s, d), s.return = y, s) : (s = Xe(
        d.type,
        d.key,
        d.props,
        null,
        y.mode,
        r
      ), Ja(s, d), s.return = y, s);
    }
    function v(y, s, d, r) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = pf(d, y.mode, r), s.return = y, s) : (s = e(s, d.children || []), s.return = y, s);
    }
    function S(y, s, d, r, N) {
      return s === null || s.tag !== 7 ? (s = Uu(
        d,
        y.mode,
        r,
        N
      ), s.return = y, s) : (s = e(s, d), s.return = y, s);
    }
    function T(y, s, d) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Af(
          "" + s,
          y.mode,
          d
        ), s.return = y, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Rl:
            return d = Xe(
              s.type,
              s.key,
              s.props,
              null,
              y.mode,
              d
            ), Ja(d, s), d.return = y, d;
          case jl:
            return s = pf(
              s,
              y.mode,
              d
            ), s.return = y, s;
          case Ql:
            return s = qu(s), T(y, s, d);
        }
        if (St(s) || Xl(s))
          return s = Uu(
            s,
            y.mode,
            d,
            null
          ), s.return = y, s;
        if (typeof s.then == "function")
          return T(y, We(s), d);
        if (s.$$typeof === Cl)
          return T(
            y,
            Le(y, s),
            d
          );
        $e(y, s);
      }
      return null;
    }
    function h(y, s, d, r) {
      var N = s !== null ? s.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return N !== null ? null : c(y, s, "" + d, r);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Rl:
            return d.key === N ? i(y, s, d, r) : null;
          case jl:
            return d.key === N ? v(y, s, d, r) : null;
          case Ql:
            return d = qu(d), h(y, s, d, r);
        }
        if (St(d) || Xl(d))
          return N !== null ? null : S(y, s, d, r, null);
        if (typeof d.then == "function")
          return h(
            y,
            s,
            We(d),
            r
          );
        if (d.$$typeof === Cl)
          return h(
            y,
            s,
            Le(y, d),
            r
          );
        $e(y, d);
      }
      return null;
    }
    function g(y, s, d, r, N) {
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
        return y = y.get(d) || null, c(s, y, "" + r, N);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Rl:
            return y = y.get(
              r.key === null ? d : r.key
            ) || null, i(s, y, r, N);
          case jl:
            return y = y.get(
              r.key === null ? d : r.key
            ) || null, v(s, y, r, N);
          case Ql:
            return r = qu(r), g(
              y,
              s,
              d,
              r,
              N
            );
        }
        if (St(r) || Xl(r))
          return y = y.get(d) || null, S(s, y, r, N, null);
        if (typeof r.then == "function")
          return g(
            y,
            s,
            d,
            We(r),
            N
          );
        if (r.$$typeof === Cl)
          return g(
            y,
            s,
            d,
            Le(s, r),
            N
          );
        $e(s, r);
      }
      return null;
    }
    function O(y, s, d, r) {
      for (var N = null, F = null, D = s, G = s = 0, L = null; D !== null && G < d.length; G++) {
        D.index > G ? (L = D, D = null) : L = D.sibling;
        var k = h(
          y,
          D,
          d[G],
          r
        );
        if (k === null) {
          D === null && (D = L);
          break;
        }
        l && D && k.alternate === null && t(y, D), s = n(k, s, G), F === null ? N = k : F.sibling = k, F = k, D = L;
      }
      if (G === d.length)
        return u(y, D), w && Bt(y, G), N;
      if (D === null) {
        for (; G < d.length; G++)
          D = T(y, d[G], r), D !== null && (s = n(
            D,
            s,
            G
          ), F === null ? N = D : F.sibling = D, F = D);
        return w && Bt(y, G), N;
      }
      for (D = a(D); G < d.length; G++)
        L = g(
          D,
          y,
          G,
          d[G],
          r
        ), L !== null && (l && L.alternate !== null && D.delete(
          L.key === null ? G : L.key
        ), s = n(
          L,
          s,
          G
        ), F === null ? N = L : F.sibling = L, F = L);
      return l && D.forEach(function(zu) {
        return t(y, zu);
      }), w && Bt(y, G), N;
    }
    function R(y, s, d, r) {
      if (d == null) throw Error(m(151));
      for (var N = null, F = null, D = s, G = s = 0, L = null, k = d.next(); D !== null && !k.done; G++, k = d.next()) {
        D.index > G ? (L = D, D = null) : L = D.sibling;
        var zu = h(y, D, k.value, r);
        if (zu === null) {
          D === null && (D = L);
          break;
        }
        l && D && zu.alternate === null && t(y, D), s = n(zu, s, G), F === null ? N = zu : F.sibling = zu, F = zu, D = L;
      }
      if (k.done)
        return u(y, D), w && Bt(y, G), N;
      if (D === null) {
        for (; !k.done; G++, k = d.next())
          k = T(y, k.value, r), k !== null && (s = n(k, s, G), F === null ? N = k : F.sibling = k, F = k);
        return w && Bt(y, G), N;
      }
      for (D = a(D); !k.done; G++, k = d.next())
        k = g(D, y, G, k.value, r), k !== null && (l && k.alternate !== null && D.delete(k.key === null ? G : k.key), s = n(k, s, G), F === null ? N = k : F.sibling = k, F = k);
      return l && D.forEach(function(Wv) {
        return t(y, Wv);
      }), w && Bt(y, G), N;
    }
    function fl(y, s, d, r) {
      if (typeof d == "object" && d !== null && d.type === Bl && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Rl:
            l: {
              for (var N = d.key; s !== null; ) {
                if (s.key === N) {
                  if (N = d.type, N === Bl) {
                    if (s.tag === 7) {
                      u(
                        y,
                        s.sibling
                      ), r = e(
                        s,
                        d.props.children
                      ), r.return = y, y = r;
                      break l;
                    }
                  } else if (s.elementType === N || typeof N == "object" && N !== null && N.$$typeof === Ql && qu(N) === s.type) {
                    u(
                      y,
                      s.sibling
                    ), r = e(s, d.props), Ja(r, d), r.return = y, y = r;
                    break l;
                  }
                  u(y, s);
                  break;
                } else t(y, s);
                s = s.sibling;
              }
              d.type === Bl ? (r = Uu(
                d.props.children,
                y.mode,
                r,
                d.key
              ), r.return = y, y = r) : (r = Xe(
                d.type,
                d.key,
                d.props,
                null,
                y.mode,
                r
              ), Ja(r, d), r.return = y, y = r);
            }
            return f(y);
          case jl:
            l: {
              for (N = d.key; s !== null; ) {
                if (s.key === N)
                  if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                    u(
                      y,
                      s.sibling
                    ), r = e(s, d.children || []), r.return = y, y = r;
                    break l;
                  } else {
                    u(y, s);
                    break;
                  }
                else t(y, s);
                s = s.sibling;
              }
              r = pf(d, y.mode, r), r.return = y, y = r;
            }
            return f(y);
          case Ql:
            return d = qu(d), fl(
              y,
              s,
              d,
              r
            );
        }
        if (St(d))
          return O(
            y,
            s,
            d,
            r
          );
        if (Xl(d)) {
          if (N = Xl(d), typeof N != "function") throw Error(m(150));
          return d = N.call(d), R(
            y,
            s,
            d,
            r
          );
        }
        if (typeof d.then == "function")
          return fl(
            y,
            s,
            We(d),
            r
          );
        if (d.$$typeof === Cl)
          return fl(
            y,
            s,
            Le(y, d),
            r
          );
        $e(y, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, s !== null && s.tag === 6 ? (u(y, s.sibling), r = e(s, d), r.return = y, y = r) : (u(y, s), r = Af(d, y.mode, r), r.return = y, y = r), f(y)) : u(y, s);
    }
    return function(y, s, d, r) {
      try {
        Ka = 0;
        var N = fl(
          y,
          s,
          d,
          r
        );
        return sa = null, N;
      } catch (D) {
        if (D === ia || D === Je) throw D;
        var F = lt(29, D, null, y.mode);
        return F.lanes = r, F.return = y, F;
      } finally {
      }
    };
  }
  var Yu = Ds(!0), Us = Ds(!1), au = !1;
  function Yf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xf(l, t) {
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
    if (a = a.shared, (I & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Qe(l), ds(l, null, u), t;
    }
    return Ge(l, a, t, u), Qe(l);
  }
  function wa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, zi(l, u);
    }
  }
  function jf(l, t) {
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
  var Gf = !1;
  function Wa() {
    if (Gf) {
      var l = ca;
      if (l !== null) throw l;
    }
  }
  function $a(l, t, u, a) {
    Gf = !1;
    var e = l.updateQueue;
    au = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, v = i.next;
      i.next = null, f === null ? n = v : f.next = v, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = v : c.next = v, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, S = v = i = null, c = n;
      do {
        var h = c.lane & -536870913, g = h !== c.lane;
        if (g ? (V & h) === h : (a & h) === h) {
          h !== 0 && h === fa && (Gf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var O = l, R = c;
            h = t;
            var fl = u;
            switch (R.tag) {
              case 1:
                if (O = R.payload, typeof O == "function") {
                  T = O.call(fl, T, h);
                  break l;
                }
                T = O;
                break l;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = R.payload, h = typeof O == "function" ? O.call(fl, T, h) : O, h == null) break l;
                T = H({}, T, h);
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
          }, S === null ? (v = S = g, i = T) : S = S.next = g, f |= h;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = T), e.baseState = i, e.firstBaseUpdate = v, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), ou |= f, l.lanes = f, l.memoizedState = T;
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
    l = Jt, _(Fe, l), _(oa, t), Jt = l | t.baseLanes;
  }
  function Qf() {
    _(Fe, Jt), _(oa, oa.current);
  }
  function Xf() {
    Jt = Fe.current, E(oa), E(Fe);
  }
  var tt = o(null), mt = null;
  function fu(l) {
    var t = l.alternate;
    _(bl, bl.current & 1), _(tt, l), mt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (mt = l);
  }
  function Zf(l) {
    _(bl, bl.current), _(tt, l), mt === null && (mt = l);
  }
  function Cs(l) {
    l.tag === 22 ? (_(bl, bl.current), _(tt, l), mt === null && (mt = l)) : cu();
  }
  function cu() {
    _(bl, bl.current), _(tt, tt.current);
  }
  function ut(l) {
    E(tt), mt === l && (mt = null), E(bl);
  }
  var bl = o(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Wc(u) || $c(u)))
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
  var jt = 0, j = null, el = null, Tl = null, Ie = !1, ya = !1, xu = !1, Pe = 0, Fa = 0, da = null, jd = 0;
  function hl() {
    throw Error(m(321));
  }
  function Vf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Pl(l[u], t[u])) return !1;
    return !0;
  }
  function Lf(l, t, u, a, e, n) {
    return jt = n, j = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? g0 : nc, xu = !1, n = u(a, e), xu = !1, ya && (n = Bs(
      t,
      u,
      a,
      e
    )), qs(l), n;
  }
  function qs(l) {
    b.H = Pa;
    var t = el !== null && el.next !== null;
    if (jt = 0, Tl = el = j = null, Ie = !1, Fa = 0, da = null, t) throw Error(m(300));
    l === null || El || (l = l.dependencies, l !== null && Ve(l) && (El = !0));
  }
  function Bs(l, t, u, a) {
    j = l;
    var e = 0;
    do {
      if (ya && (da = null), Fa = 0, ya = !1, 25 <= e) throw Error(m(301));
      if (e += 1, Tl = el = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = S0, n = t(u, a);
    } while (ya);
    return n;
  }
  function Gd() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ka(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (j.flags |= 1024), t;
  }
  function Kf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Jf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function wf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    jt = 0, Tl = el = j = null, ya = !1, Fa = Pe = 0, da = null;
  }
  function xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Tl === null ? j.memoizedState = Tl = l : Tl = Tl.next = l, Tl;
  }
  function rl() {
    if (el === null) {
      var l = j.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = Tl === null ? j.memoizedState : Tl.next;
    if (t !== null)
      Tl = t, el = l;
    else {
      if (l === null)
        throw j.alternate === null ? Error(m(467)) : Error(m(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
        next: null
      }, Tl === null ? j.memoizedState = Tl = l : Tl = Tl.next = l;
    }
    return Tl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ka(l) {
    var t = Fa;
    return Fa += 1, da === null && (da = []), l = _s(da, l, t), t = j, (Tl === null ? t.memoizedState : Tl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? g0 : nc), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ka(l);
      if (l.$$typeof === Cl) return Ul(l);
    }
    throw Error(m(438, String(l)));
  }
  function Wf(l) {
    var t = null, u = j.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = j.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = ln(), j.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Xu;
    return t.index++, u;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = rl();
    return $f(t, el, l);
  }
  function $f(l, t, u) {
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
      var c = f = null, i = null, v = t, S = !1;
      do {
        var T = v.lane & -536870913;
        if (T !== v.lane ? (V & T) === T : (jt & T) === T) {
          var h = v.revertLane;
          if (h === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), T === fa && (S = !0);
          else if ((jt & h) === h) {
            v = v.next, h === fa && (S = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, j.lanes |= h, ou |= h;
          T = v.action, xu && u(n, T), n = v.hasEagerState ? v.eagerState : u(n, T);
        } else
          h = {
            lane: T,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, i === null ? (c = i = h, f = n) : i = i.next = h, j.lanes |= T, ou |= T;
        v = v.next;
      } while (v !== null && v !== t);
      if (i === null ? f = n : i.next = c, !Pl(n, l.memoizedState) && (El = !0, S && (u = ca, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Ff(l) {
    var t = rl(), u = t.queue;
    if (u === null) throw Error(m(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Pl(n, t.memoizedState) || (El = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ys(l, t, u) {
    var a = j, e = rl(), n = w;
    if (n) {
      if (u === void 0) throw Error(m(407));
      u = u();
    } else u = t();
    var f = !Pl(
      (el || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, El = !0), e = e.queue, Pf(Gs.bind(null, a, e, l), [
      l
    ]), e.getSnapshot !== t || f || Tl !== null && Tl.memoizedState.tag & 1) {
      if (a.flags |= 2048, va(
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
      n || (jt & 127) !== 0 || xs(a, t, u);
    }
    return u;
  }
  function xs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = j.updateQueue, t === null ? (t = ln(), j.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
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
  function kf(l) {
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
      lastRenderedReducer: Gt,
      lastRenderedState: l
    }, t;
  }
  function Zs(l, t, u, a) {
    return l.baseState = u, $f(
      l,
      el,
      typeof a == "function" ? a : Gt
    );
  }
  function Qd(l, t, u, a, e) {
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
      b.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Vs(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Vs(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = u(e, a), i = b.S;
        i !== null && i(f, c), Ls(l, t, c);
      } catch (v) {
        If(l, t, v);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = u(e, a), Ls(l, t, n);
      } catch (v) {
        If(l, t, v);
      }
  }
  function Ls(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Ks(l, t, a);
      },
      function(a) {
        return If(l, t, a);
      }
    ) : Ks(l, t, u);
  }
  function Ks(l, t, u) {
    t.status = "fulfilled", t.value = u, Js(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Vs(l, u)));
  }
  function If(l, t, u) {
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
    if (w) {
      var u = sl.formState;
      if (u !== null) {
        l: {
          var a = j;
          if (w) {
            if (ol) {
              t: {
                for (var e = ol, n = vt; e.nodeType !== 8; ) {
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
    }, u.queue = a, u = v0.bind(
      null,
      j,
      a
    ), a.dispatch = u, a = kf(!1), n = ec.bind(
      null,
      j,
      !1,
      a.queue
    ), a = xl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Qd.bind(
      null,
      j,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function $s(l) {
    var t = rl();
    return Fs(t, el, l);
  }
  function Fs(l, t, u) {
    if (t = $f(
      l,
      t,
      ws
    )[0], l = un(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ka(t);
      } catch (f) {
        throw f === ia ? Je : f;
      }
    else a = t;
    t = rl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (j.flags |= 2048, va(
      9,
      { destroy: void 0 },
      Xd.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Xd(l, t) {
    l.action = t;
  }
  function ks(l) {
    var t = rl(), u = el;
    if (u !== null)
      return Fs(t, u, l);
    rl(), t = t.memoizedState, u = rl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function va(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = j.updateQueue, t === null && (t = ln(), j.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Is() {
    return rl().memoizedState;
  }
  function an(l, t, u, a) {
    var e = xl();
    j.flags |= l, e.memoizedState = va(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function en(l, t, u, a) {
    var e = rl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    el !== null && a !== null && Vf(a, el.memoizedState.deps) ? e.memoizedState = va(t, n, u, a) : (j.flags |= l, e.memoizedState = va(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Ps(l, t) {
    an(8390656, 8, l, t);
  }
  function Pf(l, t) {
    en(2048, 8, l, t);
  }
  function Zd(l) {
    j.flags |= 4;
    var t = j.updateQueue;
    if (t === null)
      t = ln(), j.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function l0(l) {
    var t = rl().memoizedState;
    return Zd({ ref: t, nextImpl: l }), function() {
      if ((I & 2) !== 0) throw Error(m(440));
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
  function lc() {
  }
  function n0(l, t) {
    var u = rl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Vf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function f0(l, t) {
    var u = rl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Vf(t, a[1]))
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
  function tc(l, t, u) {
    return u === void 0 || (jt & 1073741824) !== 0 && (V & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = co(), j.lanes |= l, ou |= l, u);
  }
  function c0(l, t, u, a) {
    return Pl(u, t) ? u : oa.current !== null ? (l = tc(l, u, a), Pl(l, t) || (El = !0), l) : (jt & 42) === 0 || (jt & 1073741824) !== 0 && (V & 261930) === 0 ? (El = !0, l.memoizedState = u) : (l = co(), j.lanes |= l, ou |= l, t);
  }
  function i0(l, t, u, a, e) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, ec(l, !1, t, u);
    try {
      var i = e(), v = b.S;
      if (v !== null && v(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = xd(
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
    } catch (T) {
      Ia(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        nt()
      );
    } finally {
      p.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function Vd() {
  }
  function uc(l, t, u, a) {
    if (l.tag !== 5) throw Error(m(476));
    var e = s0(l).queue;
    i0(
      l,
      e,
      t,
      q,
      u === null ? Vd : function() {
        return o0(l), u(a);
      }
    );
  }
  function s0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: q
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
        lastRenderedReducer: Gt,
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
  function ac() {
    return Ul(he);
  }
  function y0() {
    return rl().memoizedState;
  }
  function d0() {
    return rl().memoizedState;
  }
  function Ld(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = nt();
          l = eu(u);
          var a = nu(t, l, u);
          a !== null && (Wl(a, t, u), wa(a, t, u)), t = { cache: Rf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Kd(l, t, u) {
    var a = nt();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? m0(t, u) : (u = Tf(l, t, u, a), u !== null && (Wl(u, l, a), h0(u, t, a)));
  }
  function v0(l, t, u) {
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
      if (u = Tf(l, t, e, a), u !== null)
        return Wl(u, l, a), h0(u, t, a), !0;
    }
    return !1;
  }
  function ec(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Yc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(m(479));
    } else
      t = Tf(
        l,
        u,
        a,
        2
      ), t !== null && Wl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === j || t !== null && t === j;
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
      }, a.queue = l, l = l.dispatch = Kd.bind(
        null,
        j,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = xl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = kf(l);
      var t = l.queue, u = v0.bind(null, j, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = xl();
      return tc(u, l, t);
    },
    useTransition: function() {
      var l = kf(!1);
      return l = i0.bind(
        null,
        j,
        l.queue,
        !0,
        !1
      ), xl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = j, e = xl();
      if (w) {
        if (u === void 0)
          throw Error(m(407));
        u = u();
      } else {
        if (u = t(), sl === null)
          throw Error(m(349));
        (V & 127) !== 0 || xs(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Ps(Gs.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, va(
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
      if (w) {
        var u = _t, a = pt;
        u = (a & ~(1 << 32 - Il(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Pe++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = jd++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ac,
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
      return t.queue = u, t = ec.bind(
        null,
        j,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Wf,
    useCacheRefresh: function() {
      return xl().memoizedState = Ld.bind(
        null,
        j
      );
    },
    useEffectEvent: function(l) {
      var t = xl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((I & 2) !== 0)
          throw Error(m(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, nc = {
    readContext: Ul,
    use: tn,
    useCallback: n0,
    useContext: Ul,
    useEffect: Pf,
    useImperativeHandle: e0,
    useInsertionEffect: t0,
    useLayoutEffect: u0,
    useMemo: f0,
    useReducer: un,
    useRef: Is,
    useState: function() {
      return un(Gt);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = rl();
      return c0(
        u,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = un(Gt)[0], t = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: Ys,
    useId: y0,
    useHostTransitionStatus: ac,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(l, t) {
      var u = rl();
      return Zs(u, el, l, t);
    },
    useMemoCache: Wf,
    useCacheRefresh: d0
  };
  nc.useEffectEvent = l0;
  var S0 = {
    readContext: Ul,
    use: tn,
    useCallback: n0,
    useContext: Ul,
    useEffect: Pf,
    useImperativeHandle: e0,
    useInsertionEffect: t0,
    useLayoutEffect: u0,
    useMemo: f0,
    useReducer: Ff,
    useRef: Is,
    useState: function() {
      return Ff(Gt);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = rl();
      return el === null ? tc(u, l, t) : c0(
        u,
        el.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ff(Gt)[0], t = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: Ys,
    useId: y0,
    useHostTransitionStatus: ac,
    useFormState: ks,
    useActionState: ks,
    useOptimistic: function(l, t) {
      var u = rl();
      return el !== null ? Zs(u, el, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Wf,
    useCacheRefresh: d0
  };
  S0.useEffectEvent = l0;
  function fc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : H({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var cc = {
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
  function b0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Ga(u, a) || !Ga(e, n) : !0;
  }
  function r0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && cc.enqueueReplaceState(t, t.state, null);
  }
  function ju(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = H({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function z0(l) {
    xe(l);
  }
  function T0(l) {
    console.error(l);
  }
  function E0(l) {
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
  function ic(l, t, u) {
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
  function Jd(l, t, u, a, e) {
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
            return mt === null ? rn() : u.alternate === null && gl === 0 && (gl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Cc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Cc(l, a, e)), !1;
        }
        throw Error(m(435, u.tag));
      }
      return Cc(l, a, e), rn(), !1;
    }
    if (w)
      return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Mf && (l = Error(m(422), { cause: a }), Za(ot(l, u)))) : (a !== Mf && (t = Error(m(423), {
        cause: a
      }), Za(
        ot(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = ot(a, u), e = ic(
        l.stateNode,
        a,
        e
      ), jf(l, e), gl !== 4 && (gl = 2)), !1;
    var n = Error(m(520), { cause: a });
    if (n = ot(n, u), ce === null ? ce = [n] : ce.push(n), gl !== 4 && (gl = 2), t === null) return !0;
    a = ot(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ic(u.stateNode, a, l), jf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (yu === null || !yu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = p0(e), _0(
              e,
              l,
              u,
              a
            ), jf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var sc = Error(m(461)), El = !1;
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
    return Ru(t), a = Lf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Kf(), l !== null && !El ? (Jf(l, t, e), Qt(l, t, e)) : (w && c && _f(t), t.flags |= 1, Nl(l, t, a, e), t.child);
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
    if (n = l.child, !Sc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ga, u(f, a) && l.ref === t.ref)
        return Qt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function D0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ga(n, a) && l.ref === t.ref)
        if (El = !1, t.pendingProps = a = n, Sc(l, e))
          (l.flags & 131072) !== 0 && (El = !0);
        else
          return t.lanes = l.lanes, Qt(l, t, e);
    }
    return oc(
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
        ), n !== null ? Rs(t, n) : Qf(), Cs(t);
      else
        return a = t.lanes = 536870912, N0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Ke(t, n.cachePool), Rs(t, n), cu(), t.memoizedState = null) : (l !== null && Ke(t, null), Qf(), cu());
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
    var n = qf();
    return n = n === null ? null : { parent: zl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Ke(t, null), Qf(), Cs(t), l !== null && na(l, t, a, !0), t.childLanes = e, null;
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
  function wd(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (w) {
        if (a.mode === "hidden")
          return l = cn(t, a), t.lanes = 536870912, le(null, l);
        if (Zf(t), (l = ol) ? (l = Lo(
          l,
          vt
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
      if (Zf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = H0(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(m(558));
      else if (El || na(l, t, u, !1), e = (u & l.childLanes) !== 0, El || e) {
        if (a = sl, a !== null && (f = Ti(a, u), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Du(l, f), Wl(a, l, f), sc;
        rn(), t = H0(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, ol = ht(f.nextSibling), Dl = t, w = !0, lu = null, vt = !1, l !== null && Ss(t, l), t = cn(t, a), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
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
  function oc(l, t, u, a, e) {
    return Ru(t), u = Lf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Kf(), l !== null && !El ? (Jf(l, t, e), Qt(l, t, e)) : (w && a && _f(t), t.flags |= 1, Nl(l, t, u, e), t.child);
  }
  function R0(l, t, u, a, e, n) {
    return Ru(t), t.updateQueue = null, u = Bs(
      t,
      a,
      u,
      e
    ), qs(l), a = Kf(), l !== null && !El ? (Jf(l, t, n), Qt(l, t, n)) : (w && a && _f(t), t.flags |= 1, Nl(l, t, u, n), t.child);
  }
  function C0(l, t, u, a, e) {
    if (Ru(t), t.stateNode === null) {
      var n = ta, f = u.contextType;
      typeof f == "object" && f !== null && (n = Ul(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Yf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Ul(f) : ta, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (fc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && cc.enqueueReplaceState(n, n.state, null), $a(t, a, n, e), Wa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = ju(u, c);
      n.props = i;
      var v = n.context, S = u.contextType;
      f = ta, typeof S == "object" && S !== null && (f = Ul(S));
      var T = u.getDerivedStateFromProps;
      S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || v !== f) && r0(
        t,
        n,
        a,
        f
      ), au = !1;
      var h = t.memoizedState;
      n.state = h, $a(t, a, n, e), Wa(), v = t.memoizedState, c || h !== v || au ? (typeof T == "function" && (fc(
        t,
        u,
        T,
        a
      ), v = t.memoizedState), (i = au || b0(
        t,
        u,
        i,
        a,
        h,
        v,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = v), n.props = a, n.state = v, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, xf(l, t), f = t.memoizedProps, S = ju(u, f), n.props = S, T = t.pendingProps, h = n.context, v = u.contextType, i = ta, typeof v == "object" && v !== null && (i = Ul(v)), c = u.getDerivedStateFromProps, (v = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || h !== i) && r0(
        t,
        n,
        a,
        i
      ), au = !1, h = t.memoizedState, n.state = h, $a(t, a, n, e), Wa();
      var g = t.memoizedState;
      f !== T || h !== g || au || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof c == "function" && (fc(
        t,
        u,
        c,
        a
      ), g = t.memoizedState), (S = au || b0(
        t,
        u,
        S,
        a,
        h,
        g,
        i
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
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
    )) : Nl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Qt(
      l,
      t,
      e
    ), l;
  }
  function q0(l, t, u, a) {
    return Nu(), t.flags |= 256, Nl(l, t, u, a), t.child;
  }
  var yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(l) {
    return { baseLanes: l, cachePool: As() };
  }
  function vc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= et), l;
  }
  function B0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (bl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (w) {
        if (e ? fu(t) : cu(), (l = ol) ? (l = Lo(
          l,
          vt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Pt !== null ? { id: pt, overflow: _t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = ms(l), u.return = t, t.child = u, Dl = t, ol = null)) : l = null, l === null) throw tu(t);
        return $c(l) ? t.lanes = 32 : t.lanes = 536870912, null;
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
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = dc(u), a.childLanes = vc(
        l,
        f,
        u
      ), t.memoizedState = yc, le(null, a)) : (fu(t), mc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (fu(t), t.flags &= -257, t = hc(
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
        ), a = t.child, a.memoizedState = dc(u), a.childLanes = vc(
          l,
          f,
          u
        ), t.memoizedState = yc, t = le(null, a));
      else if (fu(t), $c(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var v = f.dgst;
        f = v, a = Error(m(419)), a.stack = "", a.digest = f, Za({ value: a, source: null, stack: null }), t = hc(
          l,
          t,
          u
        );
      } else if (El || na(l, t, u, !1), f = (u & l.childLanes) !== 0, El || f) {
        if (f = sl, f !== null && (a = Ti(f, u), a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, Du(l, a), Wl(f, l, a), sc;
        Wc(c) || rn(), t = hc(
          l,
          t,
          u
        );
      } else
        Wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, ol = ht(
          c.nextSibling
        ), Dl = t, w = !0, lu = null, vt = !1, l !== null && Ss(t, l), t = mc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (cu(), c = a.fallback, e = t.mode, i = l.child, v = i.sibling, a = qt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, v !== null ? c = qt(
      v,
      c
    ) : (c = Uu(
      c,
      e,
      u,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, le(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = dc(u) : (e = c.cachePool, e !== null ? (i = zl._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = As(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: e
    }), a.memoizedState = c, a.childLanes = vc(
      l,
      f,
      u
    ), t.memoizedState = yc, le(l.child, a)) : (fu(t), u = l.child, l = u.sibling, u = qt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function mc(l, t) {
    return t = on(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function on(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function hc(l, t, u) {
    return Yu(t, l.child, null, u), l = mc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Y0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Nf(l.return, t, u);
  }
  function gc(l, t, u, a, e, n) {
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
    var f = bl.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, _(bl, f), Nl(l, t, a, u), a = w ? Xa : 0, !c && l !== null && (l.flags & 128) !== 0)
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
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), gc(
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
        gc(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        gc(
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
  function Qt(l, t, u) {
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
      for (l = t.child, u = qt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = qt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function Sc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function Wd(l, t, u) {
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
          return t.flags |= 128, Zf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (fu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? B0(l, t, u) : (fu(t), l = Qt(
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
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), _(bl, bl.current), a) break;
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
    return Qt(l, t, u);
  }
  function j0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        El = !0;
      else {
        if (!Sc(l, u) && (t.flags & 128) === 0)
          return El = !1, Wd(
            l,
            t,
            u
          );
        El = (l.flags & 131072) !== 0;
      }
    else
      El = !1, w && (t.flags & 1048576) !== 0 && gs(t, Xa, t.index);
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
            )) : (t.tag = 0, t = oc(
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
              } else if (e === J) {
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
            throw t = Nt(l) || l, Error(m(306, t, ""));
          }
        }
        return t;
      case 0:
        return oc(
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
          e = n.element, xf(l, t), $a(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, uu(t, zl, a), a !== n.cache && Hf(
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
              for (ol = ht(l.firstChild), Dl = t, w = !0, lu = null, vt = !0, u = Us(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Nu(), a === e) {
              t = Qt(
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
        )) ? t.memoizedState = u : w || (u = t.type, l = t.pendingProps, a = On(
          Q.current
        ).createElement(u), a[Ml] = t, a[Zl] = l, Hl(a, u, l), _l(a), t.stateNode = a) : t.memoizedState = Fo(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Oa(t), l === null && w && (a = t.stateNode = wo(
          t.type,
          t.pendingProps,
          Q.current
        ), Dl = t, vt = !0, e = ol, hu(t.type) ? (Fc = e, ol = ht(a.firstChild)) : ol = e), Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), sn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && w && ((e = a = ol) && (a = pv(
          a,
          t.type,
          t.pendingProps,
          vt
        ), a !== null ? (t.stateNode = a, Dl = t, ol = ht(a.firstChild), vt = !1, e = !0) : e = !1), e || tu(t)), Oa(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Kc(e, n) ? a = null : f !== null && Kc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Lf(
          l,
          t,
          Gd,
          null,
          null,
          u
        ), he._currentValue = e), sn(l, t), Nl(l, t, a, u), t.child;
      case 6:
        return l === null && w && ((l = u = ol) && (u = _v(
          u,
          t.pendingProps,
          vt
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
        return wd(l, t, u);
      case 22:
        return U0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Ru(t), a = Ul(zl), l === null ? (e = qf(), e === null && (e = sl, n = Rf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Yf(t), uu(t, zl, e)) : ((l.lanes & u) !== 0 && (xf(l, t), $a(t, null, null, u), Wa()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), uu(t, zl, a)) : (a = n.cache, uu(t, zl, a), a !== e.cache && Hf(
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
  function Xt(l) {
    l.flags |= 4;
  }
  function bc(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (yo()) l.flags |= 8192;
        else
          throw Bu = we, Bf;
    } else l.flags &= -16777217;
  }
  function G0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !ty(t))
      if (yo()) l.flags |= 8192;
      else
        throw Bu = we, Bf;
  }
  function yn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bi() : 536870912, l.lanes |= t, Sa |= t);
  }
  function te(l, t) {
    if (!w)
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
  function $d(l, t, u) {
    var a = t.pendingProps;
    switch (Of(t), t.tag) {
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
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), xt(zl), Sl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ea(t) ? Xt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Df())), yl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Xt(t), n !== null ? (yl(t), G0(t, n)) : (yl(t), bc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Xt(t), yl(t), G0(t, n)) : (yl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Xt(t), yl(t), bc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (Te(t), u = Q.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Xt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return yl(t), null;
          }
          l = M.current, ea(t) ? bs(t) : (l = wo(e, a, u), t.stateNode = l, Xt(t));
        }
        return yl(t), null;
      case 5:
        if (Te(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Xt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(m(166));
            return yl(t), null;
          }
          if (n = M.current, ea(t))
            bs(t);
          else {
            var f = On(
              Q.current
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
            a && Xt(t);
          }
        }
        return yl(t), bc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Xt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(m(166));
          if (l = Q.current, ea(t)) {
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
            u = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
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
            e = Df(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return ut(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), yn(t, t.updateQueue), yl(t), null);
      case 4:
        return Sl(), l === null && Qc(t.stateNode.containerInfo), yl(t), null;
      case 10:
        return xt(t.type), yl(t), null;
      case 19:
        if (E(bl), a = t.memoizedState, a === null) return yl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) te(a, !1);
          else {
            if (gl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(a, !1), l = n.updateQueue, t.updateQueue = l, yn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    vs(u, l), u = u.sibling;
                  return _(
                    bl,
                    bl.current & 1 | 2
                  ), w && Bt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && Fl() > gn && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, yn(t, l), te(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !w)
                return yl(t), null;
            } else
              2 * Fl() - a.renderingStartTime > gn && u !== 536870912 && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Fl(), l.sibling = null, u = bl.current, _(
          bl,
          e ? u & 1 | 2 : u & 1
        ), w && Bt(t, a.treeForkCount), l) : (yl(t), null);
      case 22:
      case 23:
        return ut(t), Xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yl(t), u = t.updateQueue, u !== null && yn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && E(Cu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), xt(zl), yl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, t.tag));
  }
  function Fd(l, t) {
    switch (Of(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return xt(zl), Sl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Te(t), null;
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
        return E(bl), null;
      case 4:
        return Sl(), null;
      case 10:
        return xt(t.type), null;
      case 22:
      case 23:
        return ut(t), Xf(), l !== null && E(Cu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return xt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Q0(l, t) {
    switch (Of(t), t.tag) {
      case 3:
        xt(zl), Sl();
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
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
        E(bl);
        break;
      case 10:
        xt(t.type);
        break;
      case 22:
      case 23:
        ut(t), Xf(), l !== null && E(Cu);
        break;
      case 24:
        xt(zl);
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
      ul(t, t.return, c);
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
              var i = u, v = c;
              try {
                v();
              } catch (S) {
                ul(
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
      ul(t, t.return, S);
    }
  }
  function X0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Hs(t, u);
      } catch (a) {
        ul(l, l.return, a);
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
      ul(l, t, a);
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
      ul(l, t, e);
    }
  }
  function Ot(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          ul(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          ul(l, t, e);
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
      ul(l, l.return, e);
    }
  }
  function rc(l, t, u) {
    try {
      var a = l.stateNode;
      bv(a, l.type, u, t), a[Zl] = t;
    } catch (e) {
      ul(l, l.return, e);
    }
  }
  function L0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && hu(l.type) || l.tag === 4;
  }
  function zc(l) {
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
  function Tc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Rt));
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (Tc(l, t, u), l = l.sibling; l !== null; )
        Tc(l, t, u), l = l.sibling;
  }
  function dn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (dn(l, t, u), l = l.sibling; l !== null; )
        dn(l, t, u), l = l.sibling;
  }
  function K0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Hl(t, a, u), t[Ml] = l, t[Zl] = u;
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  var Zt = !1, Al = !1, Ec = !1, J0 = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function kd(l, t) {
    if (l = l.containerInfo, Vc = Cn, l = es(l), hf(l)) {
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
            var f = 0, c = -1, i = -1, v = 0, S = 0, T = l, h = null;
            t: for (; ; ) {
              for (var g; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (g = T.firstChild) !== null; )
                h = T, T = g;
              for (; ; ) {
                if (T === l) break t;
                if (h === u && ++v === e && (c = f), h === n && ++S === a && (i = f), (g = T.nextSibling) !== null) break;
                T = h, h = T.parentNode;
              }
              T = g;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Lc = { focusedElem: l, selectionRange: u }, Cn = !1, Ol = t; Ol !== null; )
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
                  var O = ju(
                    u.type,
                    e
                  );
                  l = a.getSnapshotBeforeUpdate(
                    O,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (R) {
                  ul(
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
                  wc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wc(l);
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
        Lt(l, u), a & 4 && ue(5, u);
        break;
      case 1:
        if (Lt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              ul(u, u.return, f);
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
              ul(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && X0(u), a & 512 && ae(u, u.return);
        break;
      case 3:
        if (Lt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
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
            ul(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && K0(u);
      case 26:
      case 5:
        Lt(l, u), t === null && a & 4 && V0(u), a & 512 && ae(u, u.return);
        break;
      case 12:
        Lt(l, u);
        break;
      case 31:
        Lt(l, u), a & 4 && F0(l, u);
        break;
      case 13:
        Lt(l, u), a & 4 && k0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = fv.bind(
          null,
          u
        ), Ov(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Zt, !a) {
          t = t !== null && t.memoizedState !== null || Al, e = Zt;
          var n = Al;
          Zt = a, (Al = t) && !n ? Kt(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Lt(l, u), Zt = e, Al = n;
        }
        break;
      case 30:
        break;
      default:
        Lt(l, u);
    }
  }
  function W0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, W0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var vl = null, Ll = !1;
  function Vt(l, t, u) {
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
        Al || Ot(u, t), Vt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Al || Ot(u, t);
        var a = vl, e = Ll;
        hu(u.type) && (vl = u.stateNode, Ll = !1), Vt(
          l,
          t,
          u
        ), de(u.stateNode), vl = a, Ll = e;
        break;
      case 5:
        Al || Ot(u, t);
      case 6:
        if (a = vl, e = Ll, vl = null, Vt(
          l,
          t,
          u
        ), vl = a, Ll = e, vl !== null)
          if (Ll)
            try {
              (vl.nodeType === 9 ? vl.body : vl.nodeName === "HTML" ? vl.ownerDocument.body : vl).removeChild(u.stateNode);
            } catch (n) {
              ul(
                u,
                t,
                n
              );
            }
          else
            try {
              vl.removeChild(u.stateNode);
            } catch (n) {
              ul(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        vl !== null && (Ll ? (l = vl, Zo(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), _a(l)) : Zo(vl, u.stateNode));
        break;
      case 4:
        a = vl, e = Ll, vl = u.stateNode.containerInfo, Ll = !0, Vt(
          l,
          t,
          u
        ), vl = a, Ll = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        iu(2, u, t), Al || iu(4, u, t), Vt(
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
        )), Vt(
          l,
          t,
          u
        );
        break;
      case 21:
        Vt(
          l,
          t,
          u
        );
        break;
      case 22:
        Al = (a = Al) || u.memoizedState !== null, Vt(
          l,
          t,
          u
        ), Al = a;
        break;
      default:
        Vt(
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
        ul(t, t.return, u);
      }
    }
  }
  function k0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        _a(l);
      } catch (u) {
        ul(t, t.return, u);
      }
  }
  function Id(l) {
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
  function vn(l, t) {
    var u = Id(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = cv.bind(null, l, a);
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
                vl = c.stateNode, Ll = !1;
                break l;
              }
              break;
            case 5:
              vl = c.stateNode, Ll = !1;
              break l;
            case 3:
            case 4:
              vl = c.stateNode.containerInfo, Ll = !0;
              break l;
          }
          c = c.return;
        }
        if (vl === null) throw Error(m(160));
        $0(n, f, e), vl = null, Ll = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        I0(t, l), t = t.sibling;
  }
  var rt = null;
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
        Kl(t, l), Jl(l), a & 512 && (Al || u === null || Ot(u, u.return)), a & 64 && Zt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = rt;
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
          } catch (O) {
            ul(l, l.return, O);
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
          } catch (O) {
            ul(l, l.return, O);
          }
        }
        break;
      case 3:
        if (Un = null, e = rt, rt = Mn(t.containerInfo), Kl(t, l), rt = e, Jl(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            _a(t.containerInfo);
          } catch (O) {
            ul(l, l.return, O);
          }
        Ec && (Ec = !1, P0(l));
        break;
      case 4:
        a = rt, rt = Mn(
          l.stateNode.containerInfo
        ), Kl(t, l), Jl(l), rt = a;
        break;
      case 12:
        Kl(t, l), Jl(l);
        break;
      case 31:
        Kl(t, l), Jl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, vn(l, a)));
        break;
      case 13:
        Kl(t, l), Jl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (hn = Fl()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, vn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, v = Zt, S = Al;
        if (Zt = v || e, Al = S || i, Kl(t, l), Al = S, Zt = v, Jl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Zt || Al || Gu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, h = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
                  }
                } catch (O) {
                  ul(i, i.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (O) {
                  ul(i, i.return, O);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                i = t;
                try {
                  var g = i.stateNode;
                  e ? Vo(g, !0) : Vo(i.stateNode, !1);
                } catch (O) {
                  ul(i, i.return, O);
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
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, vn(l, u))));
        break;
      case 19:
        Kl(t, l), Jl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, vn(l, a)));
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
            var e = u.stateNode, n = zc(l);
            dn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Wu(f, ""), u.flags &= -33);
            var c = zc(l);
            dn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, v = zc(l);
            Tc(
              l,
              v,
              i
            );
            break;
          default:
            throw Error(m(161));
        }
      } catch (S) {
        ul(l, l.return, S);
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
  function Lt(l, t) {
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
          de(t.stateNode);
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
  function Kt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Kt(
            e,
            n,
            u
          ), ue(4, n);
          break;
        case 1:
          if (Kt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (v) {
              ul(a, a.return, v);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Ns(i[e], c);
            } catch (v) {
              ul(a, a.return, v);
            }
          }
          u && f & 64 && X0(n), ae(n, n.return);
          break;
        case 27:
          K0(n);
        case 26:
        case 5:
          Kt(
            e,
            n,
            u
          ), u && a === null && f & 4 && V0(n), ae(n, n.return);
          break;
        case 12:
          Kt(
            e,
            n,
            u
          );
          break;
        case 31:
          Kt(
            e,
            n,
            u
          ), u && f & 4 && F0(e, n);
          break;
        case 13:
          Kt(
            e,
            n,
            u
          ), u && f & 4 && k0(e, n);
          break;
        case 22:
          n.memoizedState === null && Kt(
            e,
            n,
            u
          ), ae(n, n.return);
          break;
        case 30:
          break;
        default:
          Kt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Ac(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Va(u));
  }
  function pc(l, t) {
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
            ul(t, t.return, i);
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
        )), e & 2048 && Ac(f, t);
        break;
      case 24:
        zt(
          l,
          t,
          u,
          a
        ), e & 2048 && pc(t.alternate, t);
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
      var n = l, f = t, c = u, i = a, v = f.flags;
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
          )), e && v & 2048 && Ac(
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
          ), e && v & 2048 && pc(f.alternate, f);
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
            ee(u, a), e & 2048 && Ac(
              a.alternate,
              a
            );
            break;
          case 24:
            ee(u, a), e & 2048 && pc(a.alternate, a);
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
        ), l.flags & ne && l.memoizedState !== null && jv(
          u,
          rt,
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
        var a = rt;
        rt = Mn(l.stateNode.containerInfo), ha(
          l,
          t,
          u
        ), rt = a;
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
  var Pd = {
    getCacheForType: function(l) {
      var t = Ul(zl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Ul(zl).controller.signal;
    }
  }, lv = typeof WeakMap == "function" ? WeakMap : Map, I = 0, sl = null, X = null, V = 0, tl = 0, at = null, su = !1, ga = !1, _c = !1, Jt = 0, gl = 0, ou = 0, Qu = 0, Oc = 0, et = 0, Sa = 0, ce = null, wl = null, Mc = !1, hn = 0, no = 0, gn = 1 / 0, Sn = null, yu = null, pl = 0, du = null, ba = null, wt = 0, Dc = 0, Uc = null, fo = null, ie = 0, Nc = null;
  function nt() {
    return (I & 2) !== 0 && V !== 0 ? V & -V : b.T !== null ? Yc() : Ei();
  }
  function co() {
    if (et === 0)
      if ((V & 536870912) === 0 || w) {
        var l = pe;
        pe <<= 1, (pe & 3932160) === 0 && (pe = 262144), et = l;
      } else et = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), et;
  }
  function Wl(l, t, u) {
    (l === sl && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null) && (ra(l, 0), vu(
      l,
      V,
      et,
      !1
    )), Ua(l, u), ((I & 2) === 0 || l !== sl) && (l === sl && ((I & 2) === 0 && (Qu |= u), gl === 4 && vu(
      l,
      V,
      et,
      !1
    )), Mt(l));
  }
  function io(l, t, u) {
    if ((I & 6) !== 0) throw Error(m(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Da(l, t), e = a ? av(l, t) : Rc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ga && !a && vu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !tv(u)) {
          e = Rc(l, t, !1), n = !1;
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
              if (i && (ra(c, f).flags |= 256), f = Rc(
                c,
                f,
                !1
              ), f !== 2) {
                if (_c && !i) {
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
          ra(l, 0), vu(l, t, 0, !0);
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
              vu(
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
            if (vu(
              a,
              t,
              et,
              !su
            ), Oe(a, 0, !0) !== 0) break l;
            wt = t, a.timeoutHandle = Qo(
              so.bind(
                null,
                a,
                u,
                wl,
                Sn,
                Mc,
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
            Mc,
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
  function so(l, t, u, a, e, n, f, c, i, v, S, T, h, g) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rt
      }, to(
        t,
        n,
        T
      );
      var O = (n & 62914560) === n ? hn - Fl() : (n & 4194048) === n ? no - Fl() : 0;
      if (O = Gv(
        T,
        O
      ), O !== null) {
        wt = n, l.cancelPendingCommit = O(
          bo.bind(
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
            T,
            null,
            h,
            g
          )
        ), vu(l, n, f, !v);
        return;
      }
    }
    bo(
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
  function tv(l) {
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
  function vu(l, t, u, a) {
    t &= ~Oc, t &= ~Qu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && ri(l, u, t);
  }
  function bn() {
    return (I & 6) === 0 ? (se(0), !1) : !0;
  }
  function Hc() {
    if (X !== null) {
      if (tl === 0)
        var l = X.return;
      else
        l = X, Yt = Hu = null, wf(l), sa = null, Ka = 0, l = X;
      for (; l !== null; )
        Q0(l.alternate, l), l = l.return;
      X = null;
    }
  }
  function ra(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Tv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), wt = 0, Hc(), sl = l, X = u = qt(l.current, null), V = t, tl = 0, at = null, su = !1, ga = Da(l, t), _c = !1, Sa = et = Oc = Qu = ou = gl = 0, wl = ce = null, Mc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Il(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Jt = t, je(), u;
  }
  function oo(l, t) {
    j = null, b.H = Pa, t === ia || t === Je ? (t = Os(), tl = 3) : t === Bf ? (t = Os(), tl = 4) : tl = t === sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, at = t, X === null && (gl = 1, fn(
      l,
      ot(t, l.current)
    ));
  }
  function yo() {
    var l = tt.current;
    return l === null ? !0 : (V & 4194048) === V ? mt === null : (V & 62914560) === V || (V & 536870912) !== 0 ? l === mt : !1;
  }
  function vo() {
    var l = b.H;
    return b.H = Pa, l === null ? Pa : l;
  }
  function mo() {
    var l = b.A;
    return b.A = Pd, l;
  }
  function rn() {
    gl = 4, su || (V & 4194048) !== V && tt.current !== null || (ga = !0), (ou & 134217727) === 0 && (Qu & 134217727) === 0 || sl === null || vu(
      sl,
      V,
      et,
      !1
    );
  }
  function Rc(l, t, u) {
    var a = I;
    I |= 2;
    var e = vo(), n = mo();
    (sl !== l || V !== t) && (Sn = null, ra(l, t)), t = !1;
    var f = gl;
    l: do
      try {
        if (tl !== 0 && X !== null) {
          var c = X, i = at;
          switch (tl) {
            case 8:
              Hc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var v = tl;
              if (tl = 0, at = null, za(l, c, i, v), u && ga) {
                f = 0;
                break l;
              }
              break;
            default:
              v = tl, tl = 0, at = null, za(l, c, i, v);
          }
        }
        uv(), f = gl;
        break;
      } catch (S) {
        oo(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Hu = null, I = a, b.H = e, b.A = n, X === null && (sl = null, V = 0, je()), f;
  }
  function uv() {
    for (; X !== null; ) ho(X);
  }
  function av(l, t) {
    var u = I;
    I |= 2;
    var a = vo(), e = mo();
    sl !== l || V !== t ? (Sn = null, gn = Fl() + 500, ra(l, t)) : ga = Da(
      l,
      t
    );
    l: do
      try {
        if (tl !== 0 && X !== null) {
          t = X;
          var n = at;
          t: switch (tl) {
            case 1:
              tl = 0, at = null, za(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ps(n)) {
                tl = 0, at = null, go(t);
                break;
              }
              t = function() {
                tl !== 2 && tl !== 9 || sl !== l || (tl = 7), Mt(l);
              }, n.then(t, t);
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              ps(n) ? (tl = 0, at = null, go(t)) : (tl = 0, at = null, za(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (X.tag) {
                case 26:
                  f = X.memoizedState;
                case 5:
                case 27:
                  var c = X;
                  if (f ? ty(f) : c.stateNode.complete) {
                    tl = 0, at = null;
                    var i = c.sibling;
                    if (i !== null) X = i;
                    else {
                      var v = c.return;
                      v !== null ? (X = v, zn(v)) : X = null;
                    }
                    break t;
                  }
              }
              tl = 0, at = null, za(l, t, n, 5);
              break;
            case 6:
              tl = 0, at = null, za(l, t, n, 6);
              break;
            case 8:
              Hc(), gl = 6;
              break l;
            default:
              throw Error(m(462));
          }
        }
        ev();
        break;
      } catch (S) {
        oo(l, S);
      }
    while (!0);
    return Yt = Hu = null, b.H = a, b.A = e, I = u, X !== null ? 0 : (sl = null, V = 0, je(), gl);
  }
  function ev() {
    for (; X !== null && !My(); )
      ho(X);
  }
  function ho(l) {
    var t = j0(l.alternate, l, Jt);
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : X = t;
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
          V
        );
        break;
      case 11:
        t = R0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          V
        );
        break;
      case 5:
        wf(t);
      default:
        Q0(u, t), t = X = vs(t, Jt), t = j0(u, t, Jt);
    }
    l.memoizedProps = l.pendingProps, t === null ? zn(l) : X = t;
  }
  function za(l, t, u, a) {
    Yt = Hu = null, wf(t), sa = null, Ka = 0;
    var e = t.return;
    try {
      if (Jd(
        l,
        e,
        t,
        u,
        V
      )) {
        gl = 1, fn(
          l,
          ot(u, l.current)
        ), X = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw X = e, n;
      gl = 1, fn(
        l,
        ot(u, l.current)
      ), X = null;
      return;
    }
    t.flags & 32768 ? (w || a === 1 ? l = !0 : ga || (V & 536870912) !== 0 ? l = !1 : (su = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = tt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), So(t, l)) : zn(t);
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
      var u = $d(
        t.alternate,
        t,
        Jt
      );
      if (u !== null) {
        X = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        X = t;
        return;
      }
      X = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function So(l, t) {
    do {
      var u = Fd(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, X = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        X = l;
        return;
      }
      X = l = u;
    } while (l !== null);
    gl = 6, X = null;
  }
  function bo(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      Tn();
    while (pl !== 0);
    if ((I & 6) !== 0) throw Error(m(327));
    if (t !== null) {
      if (t === l.current) throw Error(m(177));
      if (n = t.lanes | t.childLanes, n |= zf, xy(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === sl && (X = sl = null, V = 0), ba = t, du = l, wt = u, Dc = n, Uc = e, fo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, iv(Ee, function() {
        return Ao(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, e = p.p, p.p = 2, f = I, I |= 4;
        try {
          kd(l, t, u);
        } finally {
          I = f, p.p = e, b.T = a;
        }
      }
      pl = 1, ro(), zo(), To();
    }
  }
  function ro() {
    if (pl === 1) {
      pl = 0;
      var l = du, t = ba, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null;
        var a = p.p;
        p.p = 2;
        var e = I;
        I |= 4;
        try {
          I0(t, l);
          var n = Lc, f = es(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && as(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && hf(c)) {
              var v = i.start, S = i.end;
              if (S === void 0 && (S = v), "selectionStart" in c)
                c.selectionStart = v, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, h = T && T.defaultView || window;
                if (h.getSelection) {
                  var g = h.getSelection(), O = c.textContent.length, R = Math.min(i.start, O), fl = i.end === void 0 ? R : Math.min(i.end, O);
                  !g.extend && R > fl && (f = fl, fl = R, R = f);
                  var y = us(
                    c,
                    R
                  ), s = us(
                    c,
                    fl
                  );
                  if (y && s && (g.rangeCount !== 1 || g.anchorNode !== y.node || g.anchorOffset !== y.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var d = T.createRange();
                    d.setStart(y.node, y.offset), g.removeAllRanges(), R > fl ? (g.addRange(d), g.extend(s.node, s.offset)) : (d.setEnd(s.node, s.offset), g.addRange(d));
                  }
                }
              }
            }
            for (T = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && T.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var r = T[c];
              r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
            }
          }
          Cn = !!Vc, Lc = Vc = null;
        } finally {
          I = e, p.p = a, b.T = u;
        }
      }
      l.current = t, pl = 2;
    }
  }
  function zo() {
    if (pl === 2) {
      pl = 0;
      var l = du, t = ba, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = b.T, b.T = null;
        var a = p.p;
        p.p = 2;
        var e = I;
        I |= 4;
        try {
          w0(l, t.alternate, t);
        } finally {
          I = e, p.p = a, b.T = u;
        }
      }
      pl = 3;
    }
  }
  function To() {
    if (pl === 4 || pl === 3) {
      pl = 0, Dy();
      var l = du, t = ba, u = wt, a = fo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pl = 5 : (pl = 0, ba = du = null, Eo(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (yu = null), $n(u), t = t.stateNode, kl && typeof kl.onCommitFiberRoot == "function")
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
        t = b.T, e = p.p, p.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, p.p = e;
        }
      }
      (wt & 3) !== 0 && Tn(), Mt(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === Nc ? ie++ : (ie = 0, Nc = l) : ie = 0, se(0);
    }
  }
  function Eo(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Va(t)));
  }
  function Tn() {
    return ro(), zo(), To(), Ao();
  }
  function Ao() {
    if (pl !== 5) return !1;
    var l = du, t = Dc;
    Dc = 0;
    var u = $n(wt), a = b.T, e = p.p;
    try {
      p.p = 32 > u ? 32 : u, b.T = null, u = Uc, Uc = null;
      var n = du, f = wt;
      if (pl = 0, ba = du = null, wt = 0, (I & 6) !== 0) throw Error(m(331));
      var c = I;
      if (I |= 4, ao(n.current), lo(
        n,
        n.current,
        f,
        u
      ), I = c, se(0, !1), kl && typeof kl.onPostCommitFiberRoot == "function")
        try {
          kl.onPostCommitFiberRoot(Ma, n);
        } catch {
        }
      return !0;
    } finally {
      p.p = e, b.T = a, Eo(l, t);
    }
  }
  function po(l, t, u) {
    t = ot(u, t), t = ic(l.stateNode, t, 2), l = nu(l, t, 2), l !== null && (Ua(l, 2), Mt(l));
  }
  function ul(l, t, u) {
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
  function Cc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new lv();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (_c = !0, e.add(u), l = nv.bind(null, l, t, u), t.then(l, l));
  }
  function nv(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, sl === l && (V & u) === u && (gl === 4 || gl === 3 && (V & 62914560) === V && 300 > Fl() - hn ? (I & 2) === 0 && ra(l, 0) : Oc |= u, Sa === V && (Sa = 0)), Mt(l);
  }
  function _o(l, t) {
    t === 0 && (t = bi()), l = Du(l, t), l !== null && (Ua(l, t), Mt(l));
  }
  function fv(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), _o(l, u);
  }
  function cv(l, t) {
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
  function iv(l, t) {
    return Kn(l, t);
  }
  var En = null, Ta = null, qc = !1, An = !1, Bc = !1, mu = 0;
  function Mt(l) {
    l !== Ta && l.next === null && (Ta === null ? En = Ta = l : Ta = Ta.next = l), An = !0, qc || (qc = !0, ov());
  }
  function se(l, t) {
    if (!Bc && An) {
      Bc = !0;
      do
        for (var u = !1, a = En; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Il(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Uo(a, n));
          } else
            n = V, n = Oe(
              a,
              a === sl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Da(a, n) || (u = !0, Uo(a, n));
          a = a.next;
        }
      while (u);
      Bc = !1;
    }
  }
  function sv() {
    Oo();
  }
  function Oo() {
    An = qc = !1;
    var l = 0;
    mu !== 0 && zv() && (l = mu);
    for (var t = Fl(), u = null, a = En; a !== null; ) {
      var e = a.next, n = Mo(a, t);
      n === 0 ? (a.next = null, u === null ? En = e : u.next = e, e === null && (Ta = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (An = !0)), a = e;
    }
    pl !== 0 && pl !== 5 || se(l), mu !== 0 && (mu = 0);
  }
  function Mo(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Il(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Yy(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = sl, u = V, u = Oe(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Jn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Da(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Jn(a), $n(u)) {
        case 2:
        case 8:
          u = gi;
          break;
        case 32:
          u = Ee;
          break;
        case 268435456:
          u = Si;
          break;
        default:
          u = Ee;
      }
      return a = Do.bind(null, l), u = Kn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Jn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Do(l, t) {
    if (pl !== 0 && pl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Tn() && l.callbackNode !== u)
      return null;
    var a = V;
    return a = Oe(
      l,
      l === sl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (io(l, a, t), Mo(l, Fl()), l.callbackNode != null && l.callbackNode === u ? Do.bind(null, l) : null);
  }
  function Uo(l, t) {
    if (Tn()) return null;
    io(l, t, !0);
  }
  function ov() {
    Ev(function() {
      (I & 6) !== 0 ? Kn(
        hi,
        sv
      ) : Oo();
    });
  }
  function Yc() {
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
  function yv(l, t, u, a, e) {
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
                  uc(
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
                typeof n == "function" && (c.preventDefault(), i = f ? Ho(e, f) : new FormData(e), uc(
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
  for (var xc = 0; xc < rf.length; xc++) {
    var jc = rf[xc], dv = jc.toLowerCase(), vv = jc[0].toUpperCase() + jc.slice(1);
    bt(
      dv,
      "on" + vv
    );
  }
  bt(cs, "onAnimationEnd"), bt(is, "onAnimationIteration"), bt(ss, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(Ud, "onTransitionRun"), bt(Nd, "onTransitionStart"), bt(Hd, "onTransitionCancel"), bt(os, "onTransitionEnd"), Ju("onMouseEnter", ["mouseout", "mouseover"]), Ju("onMouseLeave", ["mouseout", "mouseover"]), Ju("onPointerEnter", ["pointerout", "pointerover"]), Ju("onPointerLeave", ["pointerout", "pointerover"]), pu(
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
  ), mv = new Set(
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
            var c = a[f], i = c.instance, v = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = v;
            try {
              n(e);
            } catch (S) {
              xe(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, v = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = v;
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
  function Z(l, t) {
    var u = t[Fn];
    u === void 0 && (u = t[Fn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Co(t, l, 2, !1), u.add(a));
  }
  function Gc(l, t, u) {
    var a = 0;
    t && (a |= 4), Co(
      u,
      l,
      a,
      t
    );
  }
  var pn = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(l) {
    if (!l[pn]) {
      l[pn] = !0, _i.forEach(function(u) {
        u !== "selectionchange" && (mv.has(u) || Gc(u, !1, l), Gc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[pn] || (t[pn] = !0, Gc("selectionchange", !1, t));
    }
  }
  function Co(l, t, u, a) {
    switch (iy(t)) {
      case 2:
        var e = Zv;
        break;
      case 8:
        e = Vv;
        break;
      default:
        e = ti;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !nf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Xc(l, t, u, a, e) {
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
      var v = n, S = af(u), T = [];
      l: {
        var h = ys.get(l);
        if (h !== void 0) {
          var g = qe, O = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = cd;
              break;
            case "focusin":
              O = "focus", g = of;
              break;
            case "focusout":
              O = "blur", g = of;
              break;
            case "beforeblur":
            case "afterblur":
              g = of;
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
              g = od;
              break;
            case cs:
            case is:
            case ss:
              g = Iy;
              break;
            case os:
              g = dd;
              break;
            case "scroll":
            case "scrollend":
              g = wy;
              break;
            case "wheel":
              g = md;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = ld;
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
              g = gd;
          }
          var R = (t & 4) !== 0, fl = !R && (l === "scroll" || l === "scrollend"), y = R ? h !== null ? h + "Capture" : null : h;
          R = [];
          for (var s = v, d; s !== null; ) {
            var r = s;
            if (d = r.stateNode, r = r.tag, r !== 5 && r !== 26 && r !== 27 || d === null || y === null || (r = Ra(s, y), r != null && R.push(
              ye(s, r, d)
            )), fl) break;
            s = s.return;
          }
          0 < R.length && (h = new g(
            h,
            O,
            null,
            u,
            S
          ), T.push({ event: h, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", h && u !== uf && (O = u.relatedTarget || u.fromElement) && (Vu(O) || O[Zu]))
            break l;
          if ((g || h) && (h = S.window === S ? S : (h = S.ownerDocument) ? h.defaultView || h.parentWindow : window, g ? (O = u.relatedTarget || u.toElement, g = v, O = O ? Vu(O) : null, O !== null && (fl = ll(O), R = O.tag, O !== fl || R !== 5 && R !== 27 && R !== 6) && (O = null)) : (g = null, O = v), g !== O)) {
            if (R = Qi, r = "onMouseLeave", y = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (R = Zi, r = "onPointerLeave", y = "onPointerEnter", s = "pointer"), fl = g == null ? h : Ha(g), d = O == null ? h : Ha(O), h = new R(
              r,
              s + "leave",
              g,
              u,
              S
            ), h.target = fl, h.relatedTarget = d, r = null, Vu(S) === v && (R = new R(
              y,
              s + "enter",
              O,
              u,
              S
            ), R.target = d, R.relatedTarget = fl, r = R), fl = r, g && O)
              t: {
                for (R = hv, y = g, s = O, d = 0, r = y; r; r = R(r))
                  d++;
                r = 0;
                for (var N = s; N; N = R(N))
                  r++;
                for (; 0 < d - r; )
                  y = R(y), d--;
                for (; 0 < r - d; )
                  s = R(s), r--;
                for (; d--; ) {
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
              T,
              h,
              g,
              R,
              !1
            ), O !== null && fl !== null && qo(
              T,
              fl,
              O,
              R,
              !0
            );
          }
        }
        l: {
          if (h = v ? Ha(v) : window, g = h.nodeName && h.nodeName.toLowerCase(), g === "select" || g === "input" && h.type === "file")
            var F = Fi;
          else if (Wi(h))
            if (ki)
              F = Od;
            else {
              F = pd;
              var D = Ad;
            }
          else
            g = h.nodeName, !g || g.toLowerCase() !== "input" || h.type !== "checkbox" && h.type !== "radio" ? v && tf(v.elementType) && (F = Fi) : F = _d;
          if (F && (F = F(l, v))) {
            $i(
              T,
              F,
              u,
              S
            );
            break l;
          }
          D && D(l, h, v), l === "focusout" && v && h.type === "number" && v.memoizedProps.value != null && lf(h, "number", h.value);
        }
        switch (D = v ? Ha(v) : window, l) {
          case "focusin":
            (Wi(D) || D.contentEditable === "true") && (Iu = D, gf = v, Qa = null);
            break;
          case "focusout":
            Qa = gf = Iu = null;
            break;
          case "mousedown":
            Sf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sf = !1, ns(T, u, S);
            break;
          case "selectionchange":
            if (Dd) break;
          case "keydown":
          case "keyup":
            ns(T, u, S);
        }
        var G;
        if (df)
          l: {
            switch (l) {
              case "compositionstart":
                var L = "onCompositionStart";
                break l;
              case "compositionend":
                L = "onCompositionEnd";
                break l;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break l;
            }
            L = void 0;
          }
        else
          ku ? Ji(l, u) && (L = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (L = "onCompositionStart");
        L && (Vi && u.locale !== "ko" && (ku || L !== "onCompositionStart" ? L === "onCompositionEnd" && ku && (G = ji()) : (It = S, ff = "value" in It ? It.value : It.textContent, ku = !0)), D = _n(v, L), 0 < D.length && (L = new Xi(
          L,
          l,
          null,
          u,
          S
        ), T.push({ event: L, listeners: D }), G ? L.data = G : (G = wi(u), G !== null && (L.data = G)))), (G = bd ? rd(l, u) : zd(l, u)) && (L = _n(v, "onBeforeInput"), 0 < L.length && (D = new Xi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), T.push({
          event: D,
          listeners: L
        }), D.data = G)), yv(
          T,
          l,
          v,
          u,
          S
        );
      }
      Ro(T, t);
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
  function hv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function qo(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, v = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || v === null || (i = v, e ? (v = Ra(u, n), v != null && f.unshift(
        ye(u, v, i)
      )) : e || (v = Ra(u, n), v != null && f.push(
        ye(u, v, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var gv = /\r\n?/g, Sv = /\u0000|\uFFFD/g;
  function Bo(l) {
    return (typeof l == "string" ? l : "" + l).replace(gv, `
`).replace(Sv, "");
  }
  function Yo(l, t) {
    return t = Bo(t), Bo(l) === t;
  }
  function nl(l, t, u, a, e, n) {
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
          typeof n == "function" && (u === "formAction" ? (t !== "input" && nl(l, t, "name", e.name, e, null), nl(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), nl(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), nl(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (nl(l, t, "encType", e.encType, e, null), nl(l, t, "method", e.method, e, null), nl(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
        break;
      case "onScroll":
        a != null && Z("scroll", l);
        break;
      case "onScrollEnd":
        a != null && Z("scrollend", l);
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
        Z("beforetoggle", l), Z("toggle", l), Me(l, "popover", a);
        break;
      case "xlinkActuate":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ht(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ht(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ht(
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
  function Zc(l, t, u, a, e, n) {
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
        a != null && Z("scroll", l);
        break;
      case "onScrollEnd":
        a != null && Z("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Rt);
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
        Z("error", l), Z("load", l);
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
                  nl(l, t, n, f, u, null);
              }
          }
        e && nl(l, t, "srcSet", u.srcSet, u, null), a && nl(l, t, "src", u.src, u, null);
        return;
      case "input":
        Z("invalid", l);
        var c = n = f = e = null, i = null, v = null;
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
                  v = S;
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
                  nl(l, t, a, S, u, null);
              }
          }
        Hi(
          l,
          n,
          c,
          i,
          v,
          f,
          e,
          !1
        );
        return;
      case "select":
        Z("invalid", l), a = f = n = null;
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
                nl(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? wu(l, !!a, t, !1) : u != null && wu(l, !!a, u, !0);
        return;
      case "textarea":
        Z("invalid", l), n = e = a = null;
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
                nl(l, t, f, c, u, null);
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
                nl(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        Z("beforetoggle", l), Z("toggle", l), Z("cancel", l), Z("close", l);
        break;
      case "iframe":
      case "object":
        Z("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < oe.length; a++)
          Z(oe[a], l);
        break;
      case "image":
        Z("error", l), Z("load", l);
        break;
      case "details":
        Z("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Z("error", l), Z("load", l);
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
        for (v in u)
          if (u.hasOwnProperty(v) && (a = u[v], a != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, t));
              default:
                nl(l, t, v, a, u, null);
            }
        return;
      default:
        if (tf(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && Zc(
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
      u.hasOwnProperty(c) && (a = u[c], a != null && nl(l, t, c, a, u, null));
  }
  function bv(l, t, u, a) {
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
        var e = null, n = null, f = null, c = null, i = null, v = null, S = null;
        for (g in u) {
          var T = u[g];
          if (u.hasOwnProperty(g) && T != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(g) || nl(l, t, g, null, a, T);
            }
        }
        for (var h in a) {
          var g = a[h];
          if (T = u[h], a.hasOwnProperty(h) && (g != null || T != null))
            switch (h) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                v = g;
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
                g !== T && nl(
                  l,
                  t,
                  h,
                  g,
                  a,
                  T
                );
            }
        }
        Pn(
          l,
          f,
          c,
          i,
          v,
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
                a.hasOwnProperty(n) || nl(
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
                n !== i && nl(
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
                nl(l, t, c, null, a, e);
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
                e !== n && nl(l, t, f, e, a, n);
            }
        Ri(l, h, g);
        return;
      case "option":
        for (var O in u)
          if (h = u[O], u.hasOwnProperty(O) && h != null && !a.hasOwnProperty(O))
            switch (O) {
              case "selected":
                l.selected = !1;
                break;
              default:
                nl(
                  l,
                  t,
                  O,
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
                nl(
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
          h = u[R], u.hasOwnProperty(R) && h != null && !a.hasOwnProperty(R) && nl(l, t, R, null, a, h);
        for (v in a)
          if (h = a[v], g = u[v], a.hasOwnProperty(v) && h !== g && (h != null || g != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(m(137, t));
                break;
              default:
                nl(
                  l,
                  t,
                  v,
                  h,
                  a,
                  g
                );
            }
        return;
      default:
        if (tf(t)) {
          for (var fl in u)
            h = u[fl], u.hasOwnProperty(fl) && h !== void 0 && !a.hasOwnProperty(fl) && Zc(
              l,
              t,
              fl,
              void 0,
              a,
              h
            );
          for (S in a)
            h = a[S], g = u[S], !a.hasOwnProperty(S) || h === g || h === void 0 && g === void 0 || Zc(
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
      h = u[y], u.hasOwnProperty(y) && h != null && !a.hasOwnProperty(y) && nl(l, t, y, null, a, h);
    for (T in a)
      h = a[T], g = u[T], !a.hasOwnProperty(T) || h === g || h == null && g == null || nl(l, t, T, h, a, g);
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
  function rv() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && xo(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], v = i.startTime;
            if (v > c) break;
            var S = i.transferSize, T = i.initiatorType;
            S && xo(T) && (i = i.responseEnd, f += S * (i < c ? 1 : (c - v) / (i - v)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Vc = null, Lc = null;
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
  function Kc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Jc = null;
  function zv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Jc ? !1 : (Jc = l, !0) : (Jc = null, !1);
  }
  var Qo = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, Xo = typeof Promise == "function" ? Promise : void 0, Ev = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xo < "u" ? function(l) {
    return Xo.resolve(null).then(l).catch(Av);
  } : Qo;
  function Av(l) {
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
          de(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, de(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Na] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && de(l.ownerDocument.body);
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
  function wc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wc(u), kn(u);
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
  function pv(l, t, u, a) {
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
  function _v(l, t, u) {
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
  function Wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $c(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Ov(l, t) {
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
  var Fc = null;
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
  function de(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    kn(l);
  }
  var gt = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Set();
  function Mn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Wt = p.d;
  p.d = {
    f: Mv,
    r: Dv,
    D: Uv,
    C: Nv,
    L: Hv,
    m: Rv,
    X: qv,
    S: Cv,
    M: Bv
  };
  function Mv() {
    var l = Wt.f(), t = bn();
    return l || t;
  }
  function Dv(l) {
    var t = Lu(l);
    t !== null && t.tag === 5 && t.type === "form" ? o0(t) : Wt.r(l);
  }
  var Ea = typeof document > "u" ? null : document;
  function $o(l, t, u) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var e = it(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Wo.has(e) || (Wo.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Hl(t, "link", l), _l(t), a.head.appendChild(t)));
    }
  }
  function Uv(l) {
    Wt.D(l), $o("dns-prefetch", l, null);
  }
  function Nv(l, t) {
    Wt.C(l, t), $o("preconnect", l, t);
  }
  function Hv(l, t, u) {
    Wt.L(l, t, u);
    var a = Ea;
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
      gt.has(n) || (l = H(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), gt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ve(n)) || t === "script" && a.querySelector(me(n)) || (t = a.createElement("link"), Hl(t, "link", l), _l(t), a.head.appendChild(t)));
    }
  }
  function Rv(l, t) {
    Wt.m(l, t);
    var u = Ea;
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
      if (!gt.has(n) && (l = H({ rel: "modulepreload", href: l }, t), gt.set(n, l), u.querySelector(e) === null)) {
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
  function Cv(l, t, u) {
    Wt.S(l, t, u);
    var a = Ea;
    if (a && l) {
      var e = Ku(a).hoistableStyles, n = Aa(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          ve(n)
        ))
          c.loading = 5;
        else {
          l = H(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = gt.get(n)) && kc(l, u);
          var i = f = a.createElement("link");
          _l(i), Hl(i, "link", l), i._p = new Promise(function(v, S) {
            i.onload = v, i.onerror = S;
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
  function qv(l, t) {
    Wt.X(l, t);
    var u = Ea;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = pa(l), n = a.get(e);
      n || (n = u.querySelector(me(e)), n || (l = H({ src: l, async: !0 }, t), (t = gt.get(e)) && Ic(l, t), n = u.createElement("script"), _l(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Bv(l, t) {
    Wt.M(l, t);
    var u = Ea;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = pa(l), n = a.get(e);
      n || (n = u.querySelector(me(e)), n || (l = H({ src: l, async: !0, type: "module" }, t), (t = gt.get(e)) && Ic(l, t), n = u.createElement("script"), _l(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Fo(l, t, u, a) {
    var e = (e = Q.current) ? Mn(e) : null;
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
            ve(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), gt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, gt.set(l, u), n || Yv(
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
  function ve(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ko(l) {
    return H({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Yv(l, t, u, a) {
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
          var e = H({}, u, {
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
            ve(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, _l(n), n;
          a = ko(u), (e = gt.get(e)) && kc(a, e), n = (l.ownerDocument || l).createElement("link"), _l(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Hl(n, "link", a), t.state.loading |= 4, Dn(n, u.precedence, l), t.instance = n;
        case "script":
          return n = pa(u.src), (e = l.querySelector(
            me(n)
          )) ? (t.instance = e, _l(e), e) : (a = u, (e = gt.get(n)) && (a = H({}, u), Ic(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), _l(e), Hl(e, "link", a), l.head.appendChild(e), t.instance = e);
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
  function kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Ic(l, t) {
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
  function xv(l, t, u) {
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
  function jv(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = Aa(a.href), n = t.querySelector(
          ve(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Nn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, _l(n);
          return;
        }
        n = t.ownerDocument || t, a = ko(a), (e = gt.get(e)) && kc(a, e), n = n.createElement("link"), _l(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Hl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Nn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Pc = 0;
  function Gv(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Pc === 0 && (Pc = 62500 * rv());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Pc ? 50 : 800) + t
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
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hn = /* @__PURE__ */ new Map(), t.forEach(Qv, l), Hn = null, Nn.call(l));
  }
  function Qv(l, t) {
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
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Xv(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wn(0), this.hiddenUpdates = wn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function uy(l, t, u, a, e, n, f, c, i, v, S, T) {
    return l = new Xv(
      l,
      t,
      u,
      f,
      i,
      v,
      S,
      T,
      c
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Rf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Yf(n), l;
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
  function li(l, t) {
    ny(l, t), (l = l.alternate) && ny(l, t);
  }
  function fy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Du(l, 67108864);
      t !== null && Wl(t, l, 67108864), li(l, 67108864);
    }
  }
  function cy(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = Wn(t);
      var u = Du(l, t);
      u !== null && Wl(u, l, t), li(l, t);
    }
  }
  var Cn = !0;
  function Zv(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = p.p;
    try {
      p.p = 2, ti(l, t, u, a);
    } finally {
      p.p = n, b.T = e;
    }
  }
  function Vv(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = p.p;
    try {
      p.p = 8, ti(l, t, u, a);
    } finally {
      p.p = n, b.T = e;
    }
  }
  function ti(l, t, u, a) {
    if (Cn) {
      var e = ui(a);
      if (e === null)
        Xc(
          l,
          t,
          a,
          qn,
          u
        ), sy(l, a);
      else if (Kv(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (sy(l, a), t & 4 && -1 < Lv.indexOf(l)) {
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
                    Mt(n), (I & 6) === 0 && (gn = Fl() + 500, se(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Du(n, 2), c !== null && Wl(c, n, 2), bn(), li(n, 2);
            }
          if (n = ui(a), n === null && Xc(
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
        Xc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function ui(l) {
    return l = af(l), ai(l);
  }
  var qn = null;
  function ai(l) {
    if (qn = null, l = Vu(l), l !== null) {
      var t = ll(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = cl(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = dl(t), l !== null) return l;
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
          case Ee:
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
  var ei = !1, gu = null, Su = null, bu = null, ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ru = [], Lv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
        bu = null;
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
  function be(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Lu(t), t !== null && fy(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Kv(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return gu = be(
          gu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Su = be(
          Su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return bu = be(
          bu,
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
          be(
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
          be(
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
      var u = ll(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = cl(u), t !== null) {
            l.blockedOn = t, Ai(l.priority, function() {
              cy(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = dl(u), t !== null) {
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
      var u = ui(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        uf = a, u.target.dispatchEvent(a), uf = null;
      } else
        return t = Lu(u), t !== null && fy(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function yy(l, t, u) {
    Bn(l) && u.delete(t);
  }
  function Jv() {
    ei = !1, gu !== null && Bn(gu) && (gu = null), Su !== null && Bn(Su) && (Su = null), bu !== null && Bn(bu) && (bu = null), ge.forEach(yy), Se.forEach(yy);
  }
  function Yn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ei || (ei = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      Jv
    )));
  }
  var xn = null;
  function dy(l) {
    xn !== l && (xn = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        xn === l && (xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (ai(a || u) === null)
              continue;
            break;
          }
          var n = Lu(u);
          n !== null && (l.splice(t, 3), t -= 3, uc(
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
    gu !== null && Yn(gu, l), Su !== null && Yn(Su, l), bu !== null && Yn(bu, l), ge.forEach(t), Se.forEach(t);
    for (var u = 0; u < ru.length; u++) {
      var a = ru[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ru.length && (u = ru[0], u.blockedOn === null); )
      oy(u), u.blockedOn === null && ru.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Zl] || null;
        if (typeof n == "function")
          f || dy(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Zl] || null)
              c = f.formAction;
            else if (ai(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), dy(u);
        }
      }
  }
  function vy() {
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
  function ni(l) {
    this._internalRoot = l;
  }
  jn.prototype.render = ni.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(m(409));
    var u = t.current, a = nt();
    ey(u, a, l, t, null, null);
  }, jn.prototype.unmount = ni.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ey(l.current, 2, null, l, null, null), bn(), t[Zu] = null;
    }
  };
  function jn(l) {
    this._internalRoot = l;
  }
  jn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ei();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < ru.length && t !== 0 && t < ru[u].priority; u++) ;
      ru.splice(u, 0, l), u === 0 && oy(l);
    }
  };
  var my = W.version;
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
    return l = z(t), l = l !== null ? K(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var wv = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.8"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        Ma = Gn.inject(
          wv
        ), kl = Gn;
      } catch {
      }
  }
  return ze.createRoot = function(l, t) {
    if (!$(l)) throw Error(m(299));
    var u = !1, a = "", e = z0, n = T0, f = E0;
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
      vy
    ), l[Zu] = t.current, Qc(l), new ni(t);
  }, ze.hydrateRoot = function(l, t, u) {
    if (!$(l)) throw Error(m(299));
    var a = !1, e = "", n = z0, f = T0, c = E0, i = null;
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
      vy
    ), t.context = ay(null), u = t.current, a = nt(), a = Wn(a), e = eu(a), e.callback = null, nu(u, e, a), u = a, t.current.lanes = u, Ua(t, u), Mt(t), l[Zu] = t.current, Qc(l), new jn(t);
  }, ze.version = "19.2.8", ze;
}
var py;
function em() {
  if (py) return ci.exports;
  py = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (W) {
        console.error(W);
      }
  }
  return A(), ci.exports = am(), ci.exports;
}
var nm = em(), Dt = di();
const fm = "https://api.dc.siemens.com/search", cm = 300, im = 2, Qn = "https://siemens-en-sandbox-community.insided.com/search", sm = `
  query GlobalSearchSuggestions($web: Suggestion!, $product: Suggestion!) {
    suggestionsWeb: suggestions(suggestion: $web) { term type highlighted }
    suggestionsProduct: suggestions(suggestion: $product) {
      term type highlighted
      document { title description url label }
    }
  }
`;
async function om(A, W) {
  const B = await fetch(fm, {
    method: "POST",
    signal: W,
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
  const { data: m, errors: $ } = await B.json();
  if ($ != null && $.length) throw new Error($[0].message);
  const ll = (m == null ? void 0 : m.suggestionsWeb) ?? [], cl = (m == null ? void 0 : m.suggestionsProduct) ?? [], dl = ll.map((z) => ({
    term: z.term,
    highlighted: z.highlighted ?? z.term,
    mediatype: "WEB",
    subtype: z.type ?? "",
    url: null,
    title: null,
    description: null,
    label: null
  })), U = cl.map((z) => {
    var K, H, C, Rl;
    return {
      term: z.term,
      highlighted: z.highlighted ?? z.term,
      mediatype: "PRODUCT",
      subtype: z.type ?? "",
      url: ((K = z.document) == null ? void 0 : K.url) ?? null,
      title: ((H = z.document) == null ? void 0 : H.title) ?? null,
      description: ((C = z.document) == null ? void 0 : C.description) ?? null,
      label: ((Rl = z.document) == null ? void 0 : Rl.label) ?? null
    };
  });
  return [...dl, ...U];
}
function ym(A) {
  const [W, B] = Dt.useState([]), [m, $] = Dt.useState(!1), ll = Dt.useRef(null), cl = Dt.useRef(null);
  return Dt.useEffect(() => {
    if (A.length < im) {
      B([]);
      return;
    }
    return ll.current && clearTimeout(ll.current), ll.current = setTimeout(async () => {
      cl.current && cl.current.abort(), cl.current = new AbortController(), $(!0);
      try {
        const dl = await om(A, cl.current.signal);
        B(dl);
      } catch (dl) {
        dl.name !== "AbortError" && B([]);
      } finally {
        $(!1);
      }
    }, cm), () => {
      ll.current && clearTimeout(ll.current);
    };
  }, [A]), { hits: W, isFetching: m, available: !0 };
}
function dm({ hit: A, onSelect: W }) {
  return /* @__PURE__ */ ml.jsx(
    "li",
    {
      className: "suggestion-item",
      role: "option",
      "aria-selected": "false",
      onMouseDown: (B) => {
        B.preventDefault(), W(A);
      },
      dangerouslySetInnerHTML: { __html: A.highlighted }
    }
  );
}
function vm({ hit: A, onSelect: W }) {
  return A.title ? /* @__PURE__ */ ml.jsxs(
    "div",
    {
      className: "product-item",
      onMouseDown: (B) => {
        B.preventDefault(), W(A);
      },
      children: [
        /* @__PURE__ */ ml.jsx(
          "div",
          {
            className: "product-link",
            dangerouslySetInnerHTML: { __html: A.title }
          }
        ),
        A.label && /* @__PURE__ */ ml.jsxs("div", { className: "product-by", children: [
          "by ",
          A.label
        ] }),
        A.description && /* @__PURE__ */ ml.jsx("div", { className: "product-desc", children: A.description })
      ]
    }
  ) : null;
}
function mm() {
  const [A, W] = Dt.useState(""), [B, m] = Dt.useState(!1), { hits: $, isFetching: ll } = ym(A), cl = $.filter((C) => C.mediatype === "WEB"), dl = $.filter((C) => C.mediatype === "PRODUCT"), U = $.length > 0, z = Dt.useCallback(
    (C = A) => {
      C.trim() && (m(!1), window.location.href = `${Qn}?q=${encodeURIComponent(C.trim())}`);
    },
    [A]
  ), K = Dt.useCallback((C) => {
    m(!1), window.location.href = `${Qn}?q=${encodeURIComponent(C.term)}`;
  }, []), H = Dt.useCallback((C) => {
    m(!1), window.location.href = `${Qn}?q=${encodeURIComponent(C.term)}`;
  }, []);
  return /* @__PURE__ */ ml.jsxs("div", { className: "search-widget", children: [
    /* @__PURE__ */ ml.jsxs(
      "form",
      {
        className: "search-form",
        onSubmit: (C) => {
          C.preventDefault(), z();
        },
        children: [
          /* @__PURE__ */ ml.jsx(
            "input",
            {
              type: "search",
              className: "search-input",
              placeholder: "Search with AI…",
              value: A,
              autoComplete: "off",
              onChange: (C) => {
                W(C.currentTarget.value), m(!0);
              },
              onFocus: () => m(!0),
              onBlur: () => m(!1),
              "aria-label": "Search",
              "aria-autocomplete": "list",
              "aria-expanded": B && U
            }
          ),
          /* @__PURE__ */ ml.jsx("button", { type: "submit", className: "search-btn", "aria-label": "Submit search", children: /* @__PURE__ */ ml.jsxs("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
            /* @__PURE__ */ ml.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ ml.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
          ] }) })
        ]
      }
    ),
    B && U && /* @__PURE__ */ ml.jsxs("div", { className: "suggestions-panel", role: "listbox", children: [
      cl.length > 0 && /* @__PURE__ */ ml.jsxs("div", { className: "suggestions-section", role: "group", children: [
        /* @__PURE__ */ ml.jsx("div", { className: "section-header", children: "Search suggestions" }),
        /* @__PURE__ */ ml.jsx("ul", { className: "suggestions-list", children: cl.map((C) => /* @__PURE__ */ ml.jsx(dm, { hit: C, onSelect: K }, `web-${C.term}`)) })
      ] }),
      dl.length > 0 && /* @__PURE__ */ ml.jsxs("div", { className: "suggestions-section suggestions-products", role: "group", children: [
        /* @__PURE__ */ ml.jsx("div", { className: "section-header", children: "Products" }),
        dl.map((C) => /* @__PURE__ */ ml.jsx(vm, { hit: C, onSelect: H }, `product-${C.term}`)),
        /* @__PURE__ */ ml.jsx(
          "a",
          {
            className: "view-all-products",
            href: `${Qn}?q=${encodeURIComponent(A)}`,
            onMouseDown: (C) => C.preventDefault(),
            children: "View all in community"
          }
        )
      ] })
    ] }),
    B && ll && A.length >= 2 && !U && /* @__PURE__ */ ml.jsx("div", { className: "suggestions-loading", children: "Loading…" })
  ] });
}
let hm = kv;
const _y = /* @__PURE__ */ new Set();
async function gm(A) {
  await A.whenReady();
  const W = document.createElement("style");
  W.textContent = hm, _y.add(W), A.shadowRoot.insertBefore(W, A.shadowRoot.firstChild);
  const B = nm.createRoot(A.getContainer());
  B.render(/* @__PURE__ */ ml.jsx(mm, {})), A.on("destroy", () => {
    _y.delete(W), W.remove(), B.unmount();
  });
}
export {
  gm as init
};
