var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_index_001 = __commonJS({
  "https://cdn.jsdelivr.net/gh/7xrrr/broadcastTest/index.js"(exports, module) {
    function _mergeNamespaces(n2, m2) {
      for (var i = 0; i < m2.length; i++) {
        const e = m2[i];
        if (typeof e !== "string" && !Array.isArray(e)) {
          for (const k2 in e) {
            if (k2 !== "default" && !(k2 in n2)) {
              const d = Object.getOwnPropertyDescriptor(e, k2);
              if (d) {
                Object.defineProperty(n2, k2, d.get ? d : {
                  enumerable: true,
                  get: () => e[k2]
                });
              }
            }
          }
        }
      }
      return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
    }
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity) fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
        else fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    function getDefaultExportFromCjs(x2) {
      return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
    }
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    var react = { exports: {} };
    var react_production_min = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
    function A$1(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z$1 && a[z$1] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B$1 = {
      isMounted: function () {
        return false;
      }, enqueueForceUpdate: function () {
      }, enqueueReplaceState: function () {
      }, enqueueSetState: function () {
      }
    }, C$1 = Object.assign, D$1 = {};
    function E$1(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D$1;
      this.updater = e || B$1;
    }
    E$1.prototype.isReactComponent = {};
    E$1.prototype.setState = function (a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E$1.prototype.forceUpdate = function (a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E$1.prototype;
    function G$1(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D$1;
      this.updater = e || B$1;
    }
    var H$1 = G$1.prototype = new F();
    H$1.constructor = G$1;
    C$1(H$1, E$1.prototype);
    H$1.isPureReactComponent = true;
    var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
    function M$1(a, b, e) {
      var d, c = {}, k2 = null, h = null;
      if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g) c.children = e;
      else if (1 < g) {
        for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
        c.children = f2;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
    }
    function N$1(a, b) {
      return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O$1(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l$1;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function (a2) {
        return b[a2];
      });
    }
    var P$1 = /\/+/g;
    function Q$1(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R$1(a, b, e, d, c) {
      var k2 = typeof a;
      if ("undefined" === k2 || "boolean" === k2) a = null;
      var h = false;
      if (null === a) h = true;
      else switch (k2) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l$1:
            case n$1:
              h = true;
          }
      }
      if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function (a2) {
        return a2;
      })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I$1(a)) for (var g = 0; g < a.length; g++) {
        k2 = a[g];
        var f2 = d + Q$1(k2, g);
        h += R$1(k2, b, e, f2, c);
      }
      else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done;) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
      else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S$1(a, b, e) {
      if (null == a) return a;
      var d = [], c = 0;
      R$1(a, d, "", "", function (a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T$1(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function (b2) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
        }, function (b2) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
    function X$2() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    react_production_min.Children = {
      map: S$1, forEach: function (a, b, e) {
        S$1(a, function () {
          b.apply(this, arguments);
        }, e);
      }, count: function (a) {
        var b = 0;
        S$1(a, function () {
          b++;
        });
        return b;
      }, toArray: function (a) {
        return S$1(a, function (a2) {
          return a2;
        }) || [];
      }, only: function (a) {
        if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
        return a;
      }
    };
    react_production_min.Component = E$1;
    react_production_min.Fragment = p$2;
    react_production_min.Profiler = r;
    react_production_min.PureComponent = G$1;
    react_production_min.StrictMode = q$1;
    react_production_min.Suspense = w;
    react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
    react_production_min.act = X$2;
    react_production_min.cloneElement = function (a, b, e) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f2 in b) J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
      }
      var f2 = arguments.length - 2;
      if (1 === f2) d.children = e;
      else if (1 < f2) {
        g = Array(f2);
        for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
        d.children = g;
      }
      return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
    };
    react_production_min.createContext = function (a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    react_production_min.createElement = M$1;
    react_production_min.createFactory = function (a) {
      var b = M$1.bind(null, a);
      b.type = a;
      return b;
    };
    react_production_min.createRef = function () {
      return { current: null };
    };
    react_production_min.forwardRef = function (a) {
      return { $$typeof: v$1, render: a };
    };
    react_production_min.isValidElement = O$1;
    react_production_min.lazy = function (a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
    };
    react_production_min.memo = function (a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    react_production_min.startTransition = function (a) {
      var b = V$1.transition;
      V$1.transition = {};
      try {
        a();
      } finally {
        V$1.transition = b;
      }
    };
    react_production_min.unstable_act = X$2;
    react_production_min.useCallback = function (a, b) {
      return U$1.current.useCallback(a, b);
    };
    react_production_min.useContext = function (a) {
      return U$1.current.useContext(a);
    };
    react_production_min.useDebugValue = function () {
    };
    react_production_min.useDeferredValue = function (a) {
      return U$1.current.useDeferredValue(a);
    };
    react_production_min.useEffect = function (a, b) {
      return U$1.current.useEffect(a, b);
    };
    react_production_min.useId = function () {
      return U$1.current.useId();
    };
    react_production_min.useImperativeHandle = function (a, b, e) {
      return U$1.current.useImperativeHandle(a, b, e);
    };
    react_production_min.useInsertionEffect = function (a, b) {
      return U$1.current.useInsertionEffect(a, b);
    };
    react_production_min.useLayoutEffect = function (a, b) {
      return U$1.current.useLayoutEffect(a, b);
    };
    react_production_min.useMemo = function (a, b) {
      return U$1.current.useMemo(a, b);
    };
    react_production_min.useReducer = function (a, b, e) {
      return U$1.current.useReducer(a, b, e);
    };
    react_production_min.useRef = function (a) {
      return U$1.current.useRef(a);
    };
    react_production_min.useState = function (a) {
      return U$1.current.useState(a);
    };
    react_production_min.useSyncExternalStore = function (a, b, e) {
      return U$1.current.useSyncExternalStore(a, b, e);
    };
    react_production_min.useTransition = function () {
      return U$1.current.useTransition();
    };
    react_production_min.version = "18.3.1";
    {
      react.exports = react_production_min;
    }
    var reactExports = react.exports;
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
    function q(c, a, g) {
      var b, d = {}, e = null, h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    {
      jsxRuntime.exports = reactJsxRuntime_production_min;
    }
    var jsxRuntimeExports = jsxRuntime.exports;
    var reactDom = { exports: {} };
    var reactDom_production_min = {};
    var scheduler = { exports: {} };
    var scheduler_production_min = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function (exports2) {
      function f2(a, b) {
        var c = a.length;
        a.push(b);
        a: for (; 0 < c;) {
          var d = c - 1 >>> 1, e = a[d];
          if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
          else break a;
        }
      }
      function h(a) {
        return 0 === a.length ? null : a[0];
      }
      function k2(a) {
        if (0 === a.length) return null;
        var b = a[0], c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2;) {
            var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
            if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
            else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
            else break a;
          }
        }
        return b;
      }
      function g(a, b) {
        var c = a.sortIndex - b.sortIndex;
        return 0 !== c ? c : a.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        var l2 = performance;
        exports2.unstable_now = function () {
          return l2.now();
        };
      } else {
        var p2 = Date, q2 = p2.now();
        exports2.unstable_now = function () {
          return p2.now() - q2;
        };
      }
      var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G2(a) {
        for (var b = h(t2); null !== b;) {
          if (null === b.callback) k2(t2);
          else if (b.startTime <= a) k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
          else break;
          b = h(t2);
        }
      }
      function H2(a) {
        B2 = false;
        G2(a);
        if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
        else {
          var b = h(t2);
          null !== b && K2(H2, b.startTime - a);
        }
      }
      function J2(a, b) {
        A2 = false;
        B2 && (B2 = false, E2(L2), L2 = -1);
        z2 = true;
        var c = y2;
        try {
          G2(b);
          for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2());) {
            var d = v2.callback;
            if ("function" === typeof d) {
              v2.callback = null;
              y2 = v2.priorityLevel;
              var e = d(v2.expirationTime <= b);
              b = exports2.unstable_now();
              "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
              G2(b);
            } else k2(r2);
            v2 = h(r2);
          }
          if (null !== v2) var w2 = true;
          else {
            var m2 = h(t2);
            null !== m2 && K2(H2, m2.startTime - b);
            w2 = false;
          }
          return w2;
        } finally {
          v2 = null, y2 = c, z2 = false;
        }
      }
      var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
      function M2() {
        return exports2.unstable_now() - Q2 < P2 ? false : true;
      }
      function R2() {
        if (null !== O2) {
          var a = exports2.unstable_now();
          Q2 = a;
          var b = true;
          try {
            b = O2(true, a);
          } finally {
            b ? S2() : (N2 = false, O2 = null);
          }
        } else N2 = false;
      }
      var S2;
      if ("function" === typeof F2) S2 = function () {
        F2(R2);
      };
      else if ("undefined" !== typeof MessageChannel) {
        var T2 = new MessageChannel(), U2 = T2.port2;
        T2.port1.onmessage = R2;
        S2 = function () {
          U2.postMessage(null);
        };
      } else S2 = function () {
        D2(R2, 0);
      };
      function I2(a) {
        O2 = a;
        N2 || (N2 = true, S2());
      }
      function K2(a, b) {
        L2 = D2(function () {
          a(exports2.unstable_now());
        }, b);
      }
      exports2.unstable_IdlePriority = 5;
      exports2.unstable_ImmediatePriority = 1;
      exports2.unstable_LowPriority = 4;
      exports2.unstable_NormalPriority = 3;
      exports2.unstable_Profiling = null;
      exports2.unstable_UserBlockingPriority = 2;
      exports2.unstable_cancelCallback = function (a) {
        a.callback = null;
      };
      exports2.unstable_continueExecution = function () {
        A2 || z2 || (A2 = true, I2(J2));
      };
      exports2.unstable_forceFrameRate = function (a) {
        0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
      };
      exports2.unstable_getCurrentPriorityLevel = function () {
        return y2;
      };
      exports2.unstable_getFirstCallbackNode = function () {
        return h(r2);
      };
      exports2.unstable_next = function (a) {
        switch (y2) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y2;
        }
        var c = y2;
        y2 = b;
        try {
          return a();
        } finally {
          y2 = c;
        }
      };
      exports2.unstable_pauseExecution = function () {
      };
      exports2.unstable_requestPaint = function () {
      };
      exports2.unstable_runWithPriority = function (a, b) {
        switch (a) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a = 3;
        }
        var c = y2;
        y2 = a;
        try {
          return b();
        } finally {
          y2 = c;
        }
      };
      exports2.unstable_scheduleCallback = function (a, b, c) {
        var d = exports2.unstable_now();
        "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
        switch (a) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c + e;
        a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
        c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
        return a;
      };
      exports2.unstable_shouldYield = M2;
      exports2.unstable_wrapCallback = function (a) {
        var b = y2;
        return function () {
          var c = y2;
          y2 = b;
          try {
            return a.apply(this, arguments);
          } finally {
            y2 = c;
          }
        };
      };
    })(scheduler_production_min);
    {
      scheduler.exports = scheduler_production_min;
    }
    var schedulerExports = scheduler.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa = reactExports, ca = schedulerExports;
    function p(a) {
      for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
      return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var da = /* @__PURE__ */ new Set(), ea = {};
    function fa(a, b) {
      ha(a, b);
      ha(a + "Capture", b);
    }
    function ha(a, b) {
      ea[a] = b;
      for (a = 0; a < b.length; a++) da.add(b[a]);
    }
    var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
    function oa(a) {
      if (ja.call(ma, a)) return true;
      if (ja.call(la, a)) return false;
      if (ka.test(a)) return ma[a] = true;
      la[a] = true;
      return false;
    }
    function pa(a, b, c, d) {
      if (null !== c && 0 === c.type) return false;
      switch (typeof b) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          if (d) return false;
          if (null !== c) return !c.acceptsBooleans;
          a = a.toLowerCase().slice(0, 5);
          return "data-" !== a && "aria-" !== a;
        default:
          return false;
      }
    }
    function qa(a, b, c, d) {
      if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
      if (d) return false;
      if (null !== c) switch (c.type) {
        case 3:
          return !b;
        case 4:
          return false === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
      return false;
    }
    function v(a, b, c, d, e, f2, g) {
      this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
      this.attributeName = d;
      this.attributeNamespace = e;
      this.mustUseProperty = c;
      this.propertyName = a;
      this.type = b;
      this.sanitizeURL = f2;
      this.removeEmptyString = g;
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
      z[a] = new v(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
      var b = a[0];
      z[b] = new v(b, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
      z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
      z[a] = new v(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
      z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function (a) {
      z[a] = new v(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function (a) {
      z[a] = new v(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function (a) {
      z[a] = new v(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function (a) {
      z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ra = /[\-:]([a-z])/g;
    function sa(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
      var b = a.replace(
        ra,
        sa
      );
      z[b] = new v(b, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
      var b = a.replace(ra, sa);
      z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function (a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
    });
    z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function (a) {
      z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
    });
    function ta(a, b, c, d) {
      var e = z.hasOwnProperty(b) ? z[b] : null;
      if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
    }
    var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
    var Ia = Symbol.for("react.offscreen");
    var Ja = Symbol.iterator;
    function Ka(a) {
      if (null === a || "object" !== typeof a) return null;
      a = Ja && a[Ja] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var A = Object.assign, La;
    function Ma(a) {
      if (void 0 === La) try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        La = b && b[1] || "";
      }
      return "\n" + La + a;
    }
    var Na = false;
    function Oa(a, b) {
      if (!a || Na) return "";
      Na = true;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (b) if (b = function () {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function () {
            throw Error();
          }
        }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l2) {
            var d = l2;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l2) {
            d = l2;
          }
          a.call(b.prototype);
        }
        else {
          try {
            throw Error();
          } catch (l2) {
            d = l2;
          }
          a();
        }
      } catch (l2) {
        if (l2 && d && "string" === typeof l2.stack) {
          for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h];) h--;
          for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
            if (1 !== g || 1 !== h) {
              do
                if (g--, h--, 0 > h || e[g] !== f2[h]) {
                  var k2 = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                  return k2;
                }
              while (1 <= g && 0 <= h);
            }
            break;
          }
        }
      } finally {
        Na = false, Error.prepareStackTrace = c;
      }
      return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
    }
    function Pa(a) {
      switch (a.tag) {
        case 5:
          return Ma(a.type);
        case 16:
          return Ma("Lazy");
        case 13:
          return Ma("Suspense");
        case 19:
          return Ma("SuspenseList");
        case 0:
        case 2:
        case 15:
          return a = Oa(a.type, false), a;
        case 11:
          return a = Oa(a.type.render, false), a;
        case 1:
          return a = Oa(a.type, true), a;
        default:
          return "";
      }
    }
    function Qa(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case ya:
          return "Fragment";
        case wa:
          return "Portal";
        case Aa:
          return "Profiler";
        case za:
          return "StrictMode";
        case Ea:
          return "Suspense";
        case Fa:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Ca:
          return (a.displayName || "Context") + ".Consumer";
        case Ba:
          return (a._context.displayName || "Context") + ".Provider";
        case Da:
          var b = a.render;
          a = a.displayName;
          a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Ga:
          return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
        case Ha:
          b = a._payload;
          a = a._init;
          try {
            return Qa(a(b));
          } catch (c) {
          }
      }
      return null;
    }
    function Ra(a) {
      var b = a.type;
      switch (a.tag) {
        case 24:
          return "Cache";
        case 9:
          return (b.displayName || "Context") + ".Consumer";
        case 10:
          return (b._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 5:
          return b;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qa(b);
        case 8:
          return b === za ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" === typeof b) return b.displayName || b.name || null;
          if ("string" === typeof b) return b;
      }
      return null;
    }
    function Sa(a) {
      switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return a;
        case "object":
          return a;
        default:
          return "";
      }
    }
    function Ta(a) {
      var b = a.type;
      return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
    }
    function Ua(a) {
      var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
      if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
        var e = c.get, f2 = c.set;
        Object.defineProperty(a, b, {
          configurable: true, get: function () {
            return e.call(this);
          }, set: function (a2) {
            d = "" + a2;
            f2.call(this, a2);
          }
        });
        Object.defineProperty(a, b, { enumerable: c.enumerable });
        return {
          getValue: function () {
            return d;
          }, setValue: function (a2) {
            d = "" + a2;
          }, stopTracking: function () {
            a._valueTracker = null;
            delete a[b];
          }
        };
      }
    }
    function Va(a) {
      a._valueTracker || (a._valueTracker = Ua(a));
    }
    function Wa(a) {
      if (!a) return false;
      var b = a._valueTracker;
      if (!b) return true;
      var c = b.getValue();
      var d = "";
      a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
      a = d;
      return a !== c ? (b.setValue(a), true) : false;
    }
    function Xa(a) {
      a = a || ("undefined" !== typeof document ? document : void 0);
      if ("undefined" === typeof a) return null;
      try {
        return a.activeElement || a.body;
      } catch (b) {
        return a.body;
      }
    }
    function Ya(a, b) {
      var c = b.checked;
      return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
    }
    function Za(a, b) {
      var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
      c = Sa(null != b.value ? b.value : c);
      a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
    }
    function ab(a, b) {
      b = b.checked;
      null != b && ta(a, "checked", b, false);
    }
    function bb(a, b) {
      ab(a, b);
      var c = Sa(b.value), d = b.type;
      if (null != c) if ("number" === d) {
        if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
      } else a.value !== "" + c && (a.value = "" + c);
      else if ("submit" === d || "reset" === d) {
        a.removeAttribute("value");
        return;
      }
      b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
      null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
    }
    function db(a, b, c) {
      if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
        var d = b.type;
        if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
        b = "" + a._wrapperState.initialValue;
        c || b === a.value || (a.value = b);
        a.defaultValue = b;
      }
      c = a.name;
      "" !== c && (a.name = "");
      a.defaultChecked = !!a._wrapperState.initialChecked;
      "" !== c && (a.name = c);
    }
    function cb(a, b, c) {
      if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
    }
    var eb = Array.isArray;
    function fb(a, b, c, d) {
      a = a.options;
      if (b) {
        b = {};
        for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
        for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
      } else {
        c = "" + Sa(c);
        b = null;
        for (e = 0; e < a.length; e++) {
          if (a[e].value === c) {
            a[e].selected = true;
            d && (a[e].defaultSelected = true);
            return;
          }
          null !== b || a[e].disabled || (b = a[e]);
        }
        null !== b && (b.selected = true);
      }
    }
    function gb(a, b) {
      if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
      return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
    }
    function hb(a, b) {
      var c = b.value;
      if (null == c) {
        c = b.children;
        b = b.defaultValue;
        if (null != c) {
          if (null != b) throw Error(p(92));
          if (eb(c)) {
            if (1 < c.length) throw Error(p(93));
            c = c[0];
          }
          b = c;
        }
        null == b && (b = "");
        c = b;
      }
      a._wrapperState = { initialValue: Sa(c) };
    }
    function ib(a, b) {
      var c = Sa(b.value), d = Sa(b.defaultValue);
      null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
      null != d && (a.defaultValue = "" + d);
    }
    function jb(a) {
      var b = a.textContent;
      b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
    }
    function kb(a) {
      switch (a) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function lb(a, b) {
      return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
    }
    var mb, nb = function (a) {
      return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
        MSApp.execUnsafeLocalFunction(function () {
          return a(b, c, d, e);
        });
      } : a;
    }(function (a, b) {
      if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
      else {
        mb = mb || document.createElement("div");
        mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
        for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
        for (; b.firstChild;) a.appendChild(b.firstChild);
      }
    });
    function ob(a, b) {
      if (b) {
        var c = a.firstChild;
        if (c && c === a.lastChild && 3 === c.nodeType) {
          c.nodeValue = b;
          return;
        }
      }
      a.textContent = b;
    }
    var pb = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    }, qb = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pb).forEach(function (a) {
      qb.forEach(function (b) {
        b = b + a.charAt(0).toUpperCase() + a.substring(1);
        pb[b] = pb[a];
      });
    });
    function rb(a, b, c) {
      return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
    }
    function sb(a, b) {
      a = a.style;
      for (var c in b) if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
        "float" === c && (c = "cssFloat");
        d ? a.setProperty(c, e) : a[c] = e;
      }
    }
    var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
    function ub(a, b) {
      if (b) {
        if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
        if (null != b.dangerouslySetInnerHTML) {
          if (null != b.children) throw Error(p(60));
          if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
        }
        if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
      }
    }
    function vb(a, b) {
      if (-1 === a.indexOf("-")) return "string" === typeof b.is;
      switch (a) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var wb = null;
    function xb(a) {
      a = a.target || a.srcElement || window;
      a.correspondingUseElement && (a = a.correspondingUseElement);
      return 3 === a.nodeType ? a.parentNode : a;
    }
    var yb = null, zb = null, Ab = null;
    function Bb(a) {
      if (a = Cb(a)) {
        if ("function" !== typeof yb) throw Error(p(280));
        var b = a.stateNode;
        b && (b = Db(b), yb(a.stateNode, a.type, b));
      }
    }
    function Eb(a) {
      zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
    }
    function Fb() {
      if (zb) {
        var a = zb, b = Ab;
        Ab = zb = null;
        Bb(a);
        if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
      }
    }
    function Gb(a, b) {
      return a(b);
    }
    function Hb() {
    }
    var Ib = false;
    function Jb(a, b, c) {
      if (Ib) return a(b, c);
      Ib = true;
      try {
        return Gb(a, b, c);
      } finally {
        if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
      }
    }
    function Kb(a, b) {
      var c = a.stateNode;
      if (null === c) return null;
      var d = Db(c);
      if (null === d) return null;
      c = d[b];
      a: switch (b) {
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
          (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
          a = !d;
          break a;
        default:
          a = false;
      }
      if (a) return null;
      if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
      return c;
    }
    var Lb = false;
    if (ia) try {
      var Mb = {};
      Object.defineProperty(Mb, "passive", {
        get: function () {
          Lb = true;
        }
      });
      window.addEventListener("test", Mb, Mb);
      window.removeEventListener("test", Mb, Mb);
    } catch (a) {
      Lb = false;
    }
    function Nb(a, b, c, d, e, f2, g, h, k2) {
      var l2 = Array.prototype.slice.call(arguments, 3);
      try {
        b.apply(c, l2);
      } catch (m2) {
        this.onError(m2);
      }
    }
    var Ob = false, Pb = null, Qb = false, Rb = null, Sb = {
      onError: function (a) {
        Ob = true;
        Pb = a;
      }
    };
    function Tb(a, b, c, d, e, f2, g, h, k2) {
      Ob = false;
      Pb = null;
      Nb.apply(Sb, arguments);
    }
    function Ub(a, b, c, d, e, f2, g, h, k2) {
      Tb.apply(this, arguments);
      if (Ob) {
        if (Ob) {
          var l2 = Pb;
          Ob = false;
          Pb = null;
        } else throw Error(p(198));
        Qb || (Qb = true, Rb = l2);
      }
    }
    function Vb(a) {
      var b = a, c = a;
      if (a.alternate) for (; b.return;) b = b.return;
      else {
        a = b;
        do
          b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
        while (a);
      }
      return 3 === b.tag ? c : null;
    }
    function Wb(a) {
      if (13 === a.tag) {
        var b = a.memoizedState;
        null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
        if (null !== b) return b.dehydrated;
      }
      return null;
    }
    function Xb(a) {
      if (Vb(a) !== a) throw Error(p(188));
    }
    function Yb(a) {
      var b = a.alternate;
      if (!b) {
        b = Vb(a);
        if (null === b) throw Error(p(188));
        return b !== a ? null : a;
      }
      for (var c = a, d = b; ;) {
        var e = c.return;
        if (null === e) break;
        var f2 = e.alternate;
        if (null === f2) {
          d = e.return;
          if (null !== d) {
            c = d;
            continue;
          }
          break;
        }
        if (e.child === f2.child) {
          for (f2 = e.child; f2;) {
            if (f2 === c) return Xb(e), a;
            if (f2 === d) return Xb(e), b;
            f2 = f2.sibling;
          }
          throw Error(p(188));
        }
        if (c.return !== d.return) c = e, d = f2;
        else {
          for (var g = false, h = e.child; h;) {
            if (h === c) {
              g = true;
              c = e;
              d = f2;
              break;
            }
            if (h === d) {
              g = true;
              d = e;
              c = f2;
              break;
            }
            h = h.sibling;
          }
          if (!g) {
            for (h = f2.child; h;) {
              if (h === c) {
                g = true;
                c = f2;
                d = e;
                break;
              }
              if (h === d) {
                g = true;
                d = f2;
                c = e;
                break;
              }
              h = h.sibling;
            }
            if (!g) throw Error(p(189));
          }
        }
        if (c.alternate !== d) throw Error(p(190));
      }
      if (3 !== c.tag) throw Error(p(188));
      return c.stateNode.current === c ? a : b;
    }
    function Zb(a) {
      a = Yb(a);
      return null !== a ? $b(a) : null;
    }
    function $b(a) {
      if (5 === a.tag || 6 === a.tag) return a;
      for (a = a.child; null !== a;) {
        var b = $b(a);
        if (null !== b) return b;
        a = a.sibling;
      }
      return null;
    }
    var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
    function mc(a) {
      if (lc && "function" === typeof lc.onCommitFiberRoot) try {
        lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
      } catch (b) {
      }
    }
    var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
    function nc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
    }
    var rc = 64, sc = 4194304;
    function tc(a) {
      switch (a & -a) {
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
          return a & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return a & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return a;
      }
    }
    function uc(a, b) {
      var c = a.pendingLanes;
      if (0 === c) return 0;
      var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
      if (0 !== g) {
        var h = g & ~e;
        0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
      } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
      if (0 === d) return 0;
      if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
      0 !== (d & 4) && (d |= c & 16);
      b = a.entangledLanes;
      if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
      return d;
    }
    function vc(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 4:
          return b + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
          return b + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function wc(a, b) {
      for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2;) {
        var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
        if (-1 === k2) {
          if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
        } else k2 <= b && (a.expiredLanes |= h);
        f2 &= ~h;
      }
    }
    function xc(a) {
      a = a.pendingLanes & -1073741825;
      return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
    }
    function yc() {
      var a = rc;
      rc <<= 1;
      0 === (rc & 4194240) && (rc = 64);
      return a;
    }
    function zc(a) {
      for (var b = [], c = 0; 31 > c; c++) b.push(a);
      return b;
    }
    function Ac(a, b, c) {
      a.pendingLanes |= b;
      536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
      a = a.eventTimes;
      b = 31 - oc(b);
      a[b] = c;
    }
    function Bc(a, b) {
      var c = a.pendingLanes & ~b;
      a.pendingLanes = b;
      a.suspendedLanes = 0;
      a.pingedLanes = 0;
      a.expiredLanes &= b;
      a.mutableReadLanes &= b;
      a.entangledLanes &= b;
      b = a.entanglements;
      var d = a.eventTimes;
      for (a = a.expirationTimes; 0 < c;) {
        var e = 31 - oc(c), f2 = 1 << e;
        b[e] = 0;
        d[e] = -1;
        a[e] = -1;
        c &= ~f2;
      }
    }
    function Cc(a, b) {
      var c = a.entangledLanes |= b;
      for (a = a.entanglements; c;) {
        var d = 31 - oc(c), e = 1 << d;
        e & b | a[d] & b && (a[d] |= b);
        c &= ~e;
      }
    }
    var C = 0;
    function Dc(a) {
      a &= -a;
      return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
    }
    var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function Sc(a, b) {
      switch (a) {
        case "focusin":
        case "focusout":
          Lc = null;
          break;
        case "dragenter":
        case "dragleave":
          Mc = null;
          break;
        case "mouseover":
        case "mouseout":
          Nc = null;
          break;
        case "pointerover":
        case "pointerout":
          Oc.delete(b.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Pc.delete(b.pointerId);
      }
    }
    function Tc(a, b, c, d, e, f2) {
      if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
      a.eventSystemFlags |= d;
      b = a.targetContainers;
      null !== e && -1 === b.indexOf(e) && b.push(e);
      return a;
    }
    function Uc(a, b, c, d, e) {
      switch (b) {
        case "focusin":
          return Lc = Tc(Lc, a, b, c, d, e), true;
        case "dragenter":
          return Mc = Tc(Mc, a, b, c, d, e), true;
        case "mouseover":
          return Nc = Tc(Nc, a, b, c, d, e), true;
        case "pointerover":
          var f2 = e.pointerId;
          Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
          return true;
        case "gotpointercapture":
          return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
      }
      return false;
    }
    function Vc(a) {
      var b = Wc(a.target);
      if (null !== b) {
        var c = Vb(b);
        if (null !== c) {
          if (b = c.tag, 13 === b) {
            if (b = Wb(c), null !== b) {
              a.blockedOn = b;
              Ic(a.priority, function () {
                Gc(c);
              });
              return;
            }
          } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
            a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
            return;
          }
        }
      }
      a.blockedOn = null;
    }
    function Xc(a) {
      if (null !== a.blockedOn) return false;
      for (var b = a.targetContainers; 0 < b.length;) {
        var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null === c) {
          c = a.nativeEvent;
          var d = new c.constructor(c.type, c);
          wb = d;
          c.target.dispatchEvent(d);
          wb = null;
        } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
        b.shift();
      }
      return true;
    }
    function Zc(a, b, c) {
      Xc(a) && c.delete(b);
    }
    function $c() {
      Jc = false;
      null !== Lc && Xc(Lc) && (Lc = null);
      null !== Mc && Xc(Mc) && (Mc = null);
      null !== Nc && Xc(Nc) && (Nc = null);
      Oc.forEach(Zc);
      Pc.forEach(Zc);
    }
    function ad(a, b) {
      a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
    }
    function bd(a) {
      function b(b2) {
        return ad(b2, a);
      }
      if (0 < Kc.length) {
        ad(Kc[0], a);
        for (var c = 1; c < Kc.length; c++) {
          var d = Kc[c];
          d.blockedOn === a && (d.blockedOn = null);
        }
      }
      null !== Lc && ad(Lc, a);
      null !== Mc && ad(Mc, a);
      null !== Nc && ad(Nc, a);
      Oc.forEach(b);
      Pc.forEach(b);
      for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
      for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
    }
    var cd = ua.ReactCurrentBatchConfig, dd = true;
    function ed(a, b, c, d) {
      var e = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 1, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f2;
      }
    }
    function gd(a, b, c, d) {
      var e = C, f2 = cd.transition;
      cd.transition = null;
      try {
        C = 4, fd(a, b, c, d);
      } finally {
        C = e, cd.transition = f2;
      }
    }
    function fd(a, b, c, d) {
      if (dd) {
        var e = Yc(a, b, c, d);
        if (null === e) hd(a, b, d, id, c), Sc(a, d);
        else if (Uc(e, a, b, c, d)) d.stopPropagation();
        else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
          for (; null !== e;) {
            var f2 = Cb(e);
            null !== f2 && Ec(f2);
            f2 = Yc(a, b, c, d);
            null === f2 && hd(a, b, d, id, c);
            if (f2 === e) break;
            e = f2;
          }
          null !== e && d.stopPropagation();
        } else hd(a, b, d, null, c);
      }
    }
    var id = null;
    function Yc(a, b, c, d) {
      id = null;
      a = xb(d);
      a = Wc(a);
      if (null !== a) if (b = Vb(a), null === b) a = null;
      else if (c = b.tag, 13 === c) {
        a = Wb(b);
        if (null !== a) return a;
        a = null;
      } else if (3 === c) {
        if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
        a = null;
      } else b !== a && (a = null);
      id = a;
      return null;
    }
    function jd(a) {
      switch (a) {
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
          return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (ec()) {
            case fc:
              return 1;
            case gc:
              return 4;
            case hc:
            case ic:
              return 16;
            case jc:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var kd = null, ld = null, md = null;
    function nd() {
      if (md) return md;
      var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
      for (a = 0; a < c && b[a] === e[a]; a++);
      var g = c - a;
      for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++);
      return md = e.slice(a, 1 < d ? 1 - d : void 0);
    }
    function od(a) {
      var b = a.keyCode;
      "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
      10 === a && (a = 13);
      return 32 <= a || 13 === a ? a : 0;
    }
    function pd() {
      return true;
    }
    function qd() {
      return false;
    }
    function rd(a) {
      function b(b2, d, e, f2, g) {
        this._reactName = b2;
        this._targetInst = e;
        this.type = d;
        this.nativeEvent = f2;
        this.target = g;
        this.currentTarget = null;
        for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
        this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
        this.isPropagationStopped = qd;
        return this;
      }
      A(b.prototype, {
        preventDefault: function () {
          this.defaultPrevented = true;
          var a2 = this.nativeEvent;
          a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function () {
          var a2 = this.nativeEvent;
          a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function () {
        }, isPersistent: pd
      });
      return b;
    }
    var sd = {
      eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (a) {
        return a.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0
    }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, {
      screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function (a) {
        return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
      }, movementX: function (a) {
        if ("movementX" in a) return a.movementX;
        a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
        return wd;
      }, movementY: function (a) {
        return "movementY" in a ? a.movementY : xd;
      }
    }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, {
      clipboardData: function (a) {
        return "clipboardData" in a ? a.clipboardData : window.clipboardData;
      }
    }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
    }, Nd = {
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
    }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Pd(a) {
      var b = this.nativeEvent;
      return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
    }
    function zd() {
      return Pd;
    }
    var Qd = A({}, ud, {
      key: function (a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function (a) {
        return "keypress" === a.type ? od(a) : 0;
      }, keyCode: function (a) {
        return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }, which: function (a) {
        return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
      }
    }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
      deltaX: function (a) {
        return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
      },
      deltaY: function (a) {
        return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
    ia && "documentMode" in document && (be = document.documentMode);
    var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
    function ge(a, b) {
      switch (a) {
        case "keyup":
          return -1 !== $d.indexOf(b.keyCode);
        case "keydown":
          return 229 !== b.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function he(a) {
      a = a.detail;
      return "object" === typeof a && "data" in a ? a.data : null;
    }
    var ie = false;
    function je(a, b) {
      switch (a) {
        case "compositionend":
          return he(b);
        case "keypress":
          if (32 !== b.which) return null;
          fe = true;
          return ee;
        case "textInput":
          return a = b.data, a === ee && fe ? null : a;
        default:
          return null;
      }
    }
    function ke(a, b) {
      if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
      switch (a) {
        case "paste":
          return null;
        case "keypress":
          if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
            if (b.char && 1 < b.char.length) return b.char;
            if (b.which) return String.fromCharCode(b.which);
          }
          return null;
        case "compositionend":
          return de && "ko" !== b.locale ? null : b.data;
        default:
          return null;
      }
    }
    var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function me(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
    }
    function ne(a, b, c, d) {
      Eb(d);
      b = oe(b, "onChange");
      0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
    }
    var pe = null, qe = null;
    function re(a) {
      se(a, 0);
    }
    function te(a) {
      var b = ue(a);
      if (Wa(b)) return a;
    }
    function ve(a, b) {
      if ("change" === a) return b;
    }
    var we = false;
    if (ia) {
      var xe;
      if (ia) {
        var ye = "oninput" in document;
        if (!ye) {
          var ze = document.createElement("div");
          ze.setAttribute("oninput", "return;");
          ye = "function" === typeof ze.oninput;
        }
        xe = ye;
      } else xe = false;
      we = xe && (!document.documentMode || 9 < document.documentMode);
    }
    function Ae() {
      pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
    }
    function Be(a) {
      if ("value" === a.propertyName && te(qe)) {
        var b = [];
        ne(b, qe, a, xb(a));
        Jb(re, b);
      }
    }
    function Ce(a, b, c) {
      "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
    }
    function De(a) {
      if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
    }
    function Ee(a, b) {
      if ("click" === a) return te(b);
    }
    function Fe(a, b) {
      if ("input" === a || "change" === a) return te(b);
    }
    function Ge(a, b) {
      return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
    }
    var He = "function" === typeof Object.is ? Object.is : Ge;
    function Ie(a, b) {
      if (He(a, b)) return true;
      if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
      var c = Object.keys(a), d = Object.keys(b);
      if (c.length !== d.length) return false;
      for (d = 0; d < c.length; d++) {
        var e = c[d];
        if (!ja.call(b, e) || !He(a[e], b[e])) return false;
      }
      return true;
    }
    function Je(a) {
      for (; a && a.firstChild;) a = a.firstChild;
      return a;
    }
    function Ke(a, b) {
      var c = Je(a);
      a = 0;
      for (var d; c;) {
        if (3 === c.nodeType) {
          d = a + c.textContent.length;
          if (a <= b && d >= b) return { node: c, offset: b - a };
          a = d;
        }
        a: {
          for (; c;) {
            if (c.nextSibling) {
              c = c.nextSibling;
              break a;
            }
            c = c.parentNode;
          }
          c = void 0;
        }
        c = Je(c);
      }
    }
    function Le(a, b) {
      return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
    }
    function Me() {
      for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
        try {
          var c = "string" === typeof b.contentWindow.location.href;
        } catch (d) {
          c = false;
        }
        if (c) a = b.contentWindow;
        else break;
        b = Xa(a.document);
      }
      return b;
    }
    function Ne(a) {
      var b = a && a.nodeName && a.nodeName.toLowerCase();
      return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
    }
    function Oe(a) {
      var b = Me(), c = a.focusedElem, d = a.selectionRange;
      if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
        if (null !== d && Ne(c)) {
          if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
          else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
            a = a.getSelection();
            var e = c.textContent.length, f2 = Math.min(d.start, e);
            d = void 0 === d.end ? f2 : Math.min(d.end, e);
            !a.extend && f2 > d && (e = d, d = f2, f2 = e);
            e = Ke(c, f2);
            var g = Ke(
              c,
              d
            );
            e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
          }
        }
        b = [];
        for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
        "function" === typeof c.focus && c.focus();
        for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }
    var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
    function Ue(a, b, c) {
      var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
      Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
    }
    function Ve(a, b) {
      var c = {};
      c[a.toLowerCase()] = b.toLowerCase();
      c["Webkit" + a] = "webkit" + b;
      c["Moz" + a] = "moz" + b;
      return c;
    }
    var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
    ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
    function Ze(a) {
      if (Xe[a]) return Xe[a];
      if (!We[a]) return a;
      var b = We[a], c;
      for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
      return a;
    }
    var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ff(a, b) {
      df.set(a, b);
      fa(b, [a]);
    }
    for (var gf = 0; gf < ef.length; gf++) {
      var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
      ff(jf, "on" + kf);
    }
    ff($e, "onAnimationEnd");
    ff(af, "onAnimationIteration");
    ff(bf, "onAnimationStart");
    ff("dblclick", "onDoubleClick");
    ff("focusin", "onFocus");
    ff("focusout", "onBlur");
    ff(cf, "onTransitionEnd");
    ha("onMouseEnter", ["mouseout", "mouseover"]);
    ha("onMouseLeave", ["mouseout", "mouseover"]);
    ha("onPointerEnter", ["pointerout", "pointerover"]);
    ha("onPointerLeave", ["pointerout", "pointerover"]);
    fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
    function nf(a, b, c) {
      var d = a.type || "unknown-event";
      a.currentTarget = c;
      Ub(d, b, void 0, a);
      a.currentTarget = null;
    }
    function se(a, b) {
      b = 0 !== (b & 4);
      for (var c = 0; c < a.length; c++) {
        var d = a[c], e = d.event;
        d = d.listeners;
        a: {
          var f2 = void 0;
          if (b) for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g], k2 = h.instance, l2 = h.currentTarget;
            h = h.listener;
            if (k2 !== f2 && e.isPropagationStopped()) break a;
            nf(e, h, l2);
            f2 = k2;
          }
          else for (g = 0; g < d.length; g++) {
            h = d[g];
            k2 = h.instance;
            l2 = h.currentTarget;
            h = h.listener;
            if (k2 !== f2 && e.isPropagationStopped()) break a;
            nf(e, h, l2);
            f2 = k2;
          }
        }
      }
      if (Qb) throw a = Rb, Qb = false, Rb = null, a;
    }
    function D(a, b) {
      var c = b[of];
      void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
      var d = a + "__bubble";
      c.has(d) || (pf(b, a, 2, false), c.add(d));
    }
    function qf(a, b, c) {
      var d = 0;
      b && (d |= 4);
      pf(c, a, d, b);
    }
    var rf = "_reactListening" + Math.random().toString(36).slice(2);
    function sf(a) {
      if (!a[rf]) {
        a[rf] = true;
        da.forEach(function (b2) {
          "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
        });
        var b = 9 === a.nodeType ? a : a.ownerDocument;
        null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
      }
    }
    function pf(a, b, c, d) {
      switch (jd(b)) {
        case 1:
          var e = ed;
          break;
        case 4:
          e = gd;
          break;
        default:
          e = fd;
      }
      c = e.bind(null, b, c, a);
      e = void 0;
      !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
      d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
    }
    function hd(a, b, c, d, e) {
      var f2 = d;
      if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ;) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e) break;
          if (4 === g) for (g = d.return; null !== g;) {
            var k2 = g.tag;
            if (3 === k2 || 4 === k2) {
              if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
            }
            g = g.return;
          }
          for (; null !== h;) {
            g = Wc(h);
            if (null === g) return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
      Jb(function () {
        var d2 = f2, e2 = xb(c), g2 = [];
        a: {
          var h2 = df.get(a);
          if (void 0 !== h2) {
            var k3 = td, n2 = a;
            switch (a) {
              case "keypress":
                if (0 === od(c)) break a;
              case "keydown":
              case "keyup":
                k3 = Rd;
                break;
              case "focusin":
                n2 = "focus";
                k3 = Fd;
                break;
              case "focusout":
                n2 = "blur";
                k3 = Fd;
                break;
              case "beforeblur":
              case "afterblur":
                k3 = Fd;
                break;
              case "click":
                if (2 === c.button) break a;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                k3 = Bd;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                k3 = Dd;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                k3 = Vd;
                break;
              case $e:
              case af:
              case bf:
                k3 = Hd;
                break;
              case cf:
                k3 = Xd;
                break;
              case "scroll":
                k3 = vd;
                break;
              case "wheel":
                k3 = Zd;
                break;
              case "copy":
              case "cut":
              case "paste":
                k3 = Jd;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                k3 = Td;
            }
            var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
            t2 = [];
            for (var w2 = d2, u2; null !== w2;) {
              u2 = w2;
              var F2 = u2.stateNode;
              5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
              if (J2) break;
              w2 = w2.return;
            }
            0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
          }
        }
        if (0 === (b & 7)) {
          a: {
            h2 = "mouseover" === a || "pointerover" === a;
            k3 = "mouseout" === a || "pointerout" === a;
            if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
            if (k3 || h2) {
              h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
              if (k3) {
                if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
              } else k3 = null, n2 = d2;
              if (k3 !== n2) {
                t2 = Bd;
                F2 = "onMouseLeave";
                x2 = "onMouseEnter";
                w2 = "mouse";
                if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
                J2 = null == k3 ? h2 : ue(k3);
                u2 = null == n2 ? h2 : ue(n2);
                h2 = new t2(F2, w2 + "leave", k3, c, e2);
                h2.target = J2;
                h2.relatedTarget = u2;
                F2 = null;
                Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
                J2 = F2;
                if (k3 && n2) b: {
                  t2 = k3;
                  x2 = n2;
                  w2 = 0;
                  for (u2 = t2; u2; u2 = vf(u2)) w2++;
                  u2 = 0;
                  for (F2 = x2; F2; F2 = vf(F2)) u2++;
                  for (; 0 < w2 - u2;) t2 = vf(t2), w2--;
                  for (; 0 < u2 - w2;) x2 = vf(x2), u2--;
                  for (; w2--;) {
                    if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                    t2 = vf(t2);
                    x2 = vf(x2);
                  }
                  t2 = null;
                }
                else t2 = null;
                null !== k3 && wf(g2, h2, k3, t2, false);
                null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
              }
            }
          }
          a: {
            h2 = d2 ? ue(d2) : window;
            k3 = h2.nodeName && h2.nodeName.toLowerCase();
            if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
            else if (me(h2)) if (we) na = Fe;
            else {
              na = De;
              var xa = Ce;
            }
            else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
            if (na && (na = na(a, d2))) {
              ne(g2, na, c, e2);
              break a;
            }
            xa && xa(a, h2, d2);
            "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
          }
          xa = d2 ? ue(d2) : window;
          switch (a) {
            case "focusin":
              if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
              break;
            case "focusout":
              Se = Re = Qe = null;
              break;
            case "mousedown":
              Te = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Te = false;
              Ue(g2, c, e2);
              break;
            case "selectionchange":
              if (Pe) break;
            case "keydown":
            case "keyup":
              Ue(g2, c, e2);
          }
          var $a;
          if (ae) b: {
            switch (a) {
              case "compositionstart":
                var ba = "onCompositionStart";
                break b;
              case "compositionend":
                ba = "onCompositionEnd";
                break b;
              case "compositionupdate":
                ba = "onCompositionUpdate";
                break b;
            }
            ba = void 0;
          }
          else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
          ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
          if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
        }
        se(g2, b);
      });
    }
    function tf(a, b, c) {
      return { instance: a, listener: b, currentTarget: c };
    }
    function oe(a, b) {
      for (var c = b + "Capture", d = []; null !== a;) {
        var e = a, f2 = e.stateNode;
        5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
        a = a.return;
      }
      return d;
    }
    function vf(a) {
      if (null === a) return null;
      do
        a = a.return;
      while (a && 5 !== a.tag);
      return a ? a : null;
    }
    function wf(a, b, c, d, e) {
      for (var f2 = b._reactName, g = []; null !== c && c !== d;) {
        var h = c, k2 = h.alternate, l2 = h.stateNode;
        if (null !== k2 && k2 === d) break;
        5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
        c = c.return;
      }
      0 !== g.length && a.push({ event: b, listeners: g });
    }
    var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
    function zf(a) {
      return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
    }
    function Af(a, b, c) {
      b = zf(b);
      if (zf(a) !== b && c) throw Error(p(425));
    }
    function Bf() {
    }
    var Cf = null, Df = null;
    function Ef(a, b) {
      return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
    }
    var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
      return Hf.resolve(null).then(a).catch(If);
    } : Ff;
    function If(a) {
      setTimeout(function () {
        throw a;
      });
    }
    function Kf(a, b) {
      var c = b, d = 0;
      do {
        var e = c.nextSibling;
        a.removeChild(c);
        if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
          if (0 === d) {
            a.removeChild(e);
            bd(b);
            return;
          }
          d--;
        } else "$" !== c && "$?" !== c && "$!" !== c || d++;
        c = e;
      } while (c);
      bd(b);
    }
    function Lf(a) {
      for (; null != a; a = a.nextSibling) {
        var b = a.nodeType;
        if (1 === b || 3 === b) break;
        if (8 === b) {
          b = a.data;
          if ("$" === b || "$!" === b || "$?" === b) break;
          if ("/$" === b) return null;
        }
      }
      return a;
    }
    function Mf(a) {
      a = a.previousSibling;
      for (var b = 0; a;) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("$" === c || "$!" === c || "$?" === c) {
            if (0 === b) return a;
            b--;
          } else "/$" === c && b++;
        }
        a = a.previousSibling;
      }
      return null;
    }
    var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
    function Wc(a) {
      var b = a[Of];
      if (b) return b;
      for (var c = a.parentNode; c;) {
        if (b = c[uf] || c[Of]) {
          c = b.alternate;
          if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
            if (c = a[Of]) return c;
            a = Mf(a);
          }
          return b;
        }
        a = c;
        c = a.parentNode;
      }
      return null;
    }
    function Cb(a) {
      a = a[Of] || a[uf];
      return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
    }
    function ue(a) {
      if (5 === a.tag || 6 === a.tag) return a.stateNode;
      throw Error(p(33));
    }
    function Db(a) {
      return a[Pf] || null;
    }
    var Sf = [], Tf = -1;
    function Uf(a) {
      return { current: a };
    }
    function E(a) {
      0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
    }
    function G(a, b) {
      Tf++;
      Sf[Tf] = a.current;
      a.current = b;
    }
    var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
    function Yf(a, b) {
      var c = a.type.contextTypes;
      if (!c) return Vf;
      var d = a.stateNode;
      if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
      var e = {}, f2;
      for (f2 in c) e[f2] = b[f2];
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
      return e;
    }
    function Zf(a) {
      a = a.childContextTypes;
      return null !== a && void 0 !== a;
    }
    function $f() {
      E(Wf);
      E(H);
    }
    function ag(a, b, c) {
      if (H.current !== Vf) throw Error(p(168));
      G(H, b);
      G(Wf, c);
    }
    function bg(a, b, c) {
      var d = a.stateNode;
      b = b.childContextTypes;
      if ("function" !== typeof d.getChildContext) return c;
      d = d.getChildContext();
      for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
      return A({}, c, d);
    }
    function cg(a) {
      a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
      Xf = H.current;
      G(H, a);
      G(Wf, Wf.current);
      return true;
    }
    function dg(a, b, c) {
      var d = a.stateNode;
      if (!d) throw Error(p(169));
      c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
      G(Wf, c);
    }
    var eg = null, fg = false, gg = false;
    function hg(a) {
      null === eg ? eg = [a] : eg.push(a);
    }
    function ig(a) {
      fg = true;
      hg(a);
    }
    function jg() {
      if (!gg && null !== eg) {
        gg = true;
        var a = 0, b = C;
        try {
          var c = eg;
          for (C = 1; a < c.length; a++) {
            var d = c[a];
            do
              d = d(true);
            while (null !== d);
          }
          eg = null;
          fg = false;
        } catch (e) {
          throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
        } finally {
          C = b, gg = false;
        }
      }
      return null;
    }
    var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
    function tg(a, b) {
      kg[lg++] = ng;
      kg[lg++] = mg;
      mg = a;
      ng = b;
    }
    function ug(a, b, c) {
      og[pg++] = rg;
      og[pg++] = sg;
      og[pg++] = qg;
      qg = a;
      var d = rg;
      a = sg;
      var e = 32 - oc(d) - 1;
      d &= ~(1 << e);
      c += 1;
      var f2 = 32 - oc(b) + e;
      if (30 < f2) {
        var g = e - e % 5;
        f2 = (d & (1 << g) - 1).toString(32);
        d >>= g;
        e -= g;
        rg = 1 << 32 - oc(b) + e | c << e | d;
        sg = f2 + a;
      } else rg = 1 << f2 | c << e | d, sg = a;
    }
    function vg(a) {
      null !== a.return && (tg(a, 1), ug(a, 1, 0));
    }
    function wg(a) {
      for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
      for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
    }
    var xg = null, yg = null, I = false, zg = null;
    function Ag(a, b) {
      var c = Bg(5, null, null, 0);
      c.elementType = "DELETED";
      c.stateNode = b;
      c.return = a;
      b = a.deletions;
      null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
    }
    function Cg(a, b) {
      switch (a.tag) {
        case 5:
          var c = a.type;
          b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
          return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
        case 6:
          return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
        case 13:
          return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
        default:
          return false;
      }
    }
    function Dg(a) {
      return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
    }
    function Eg(a) {
      if (I) {
        var b = yg;
        if (b) {
          var c = b;
          if (!Cg(a, b)) {
            if (Dg(a)) throw Error(p(418));
            b = Lf(c.nextSibling);
            var d = xg;
            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
          }
        } else {
          if (Dg(a)) throw Error(p(418));
          a.flags = a.flags & -4097 | 2;
          I = false;
          xg = a;
        }
      }
    }
    function Fg(a) {
      for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
      xg = a;
    }
    function Gg(a) {
      if (a !== xg) return false;
      if (!I) return Fg(a), I = true, false;
      var b;
      (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
      if (b && (b = yg)) {
        if (Dg(a)) throw Hg(), Error(p(418));
        for (; b;) Ag(a, b), b = Lf(b.nextSibling);
      }
      Fg(a);
      if (13 === a.tag) {
        a = a.memoizedState;
        a = null !== a ? a.dehydrated : null;
        if (!a) throw Error(p(317));
        a: {
          a = a.nextSibling;
          for (b = 0; a;) {
            if (8 === a.nodeType) {
              var c = a.data;
              if ("/$" === c) {
                if (0 === b) {
                  yg = Lf(a.nextSibling);
                  break a;
                }
                b--;
              } else "$" !== c && "$!" !== c && "$?" !== c || b++;
            }
            a = a.nextSibling;
          }
          yg = null;
        }
      } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
      return true;
    }
    function Hg() {
      for (var a = yg; a;) a = Lf(a.nextSibling);
    }
    function Ig() {
      yg = xg = null;
      I = false;
    }
    function Jg(a) {
      null === zg ? zg = [a] : zg.push(a);
    }
    var Kg = ua.ReactCurrentBatchConfig;
    function Lg(a, b, c) {
      a = c.ref;
      if (null !== a && "function" !== typeof a && "object" !== typeof a) {
        if (c._owner) {
          c = c._owner;
          if (c) {
            if (1 !== c.tag) throw Error(p(309));
            var d = c.stateNode;
          }
          if (!d) throw Error(p(147, a));
          var e = d, f2 = "" + a;
          if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
          b = function (a2) {
            var b2 = e.refs;
            null === a2 ? delete b2[f2] : b2[f2] = a2;
          };
          b._stringRef = f2;
          return b;
        }
        if ("string" !== typeof a) throw Error(p(284));
        if (!c._owner) throw Error(p(290, a));
      }
      return a;
    }
    function Mg(a, b) {
      a = Object.prototype.toString.call(b);
      throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
    }
    function Ng(a) {
      var b = a._init;
      return b(a._payload);
    }
    function Og(a) {
      function b(b2, c2) {
        if (a) {
          var d2 = b2.deletions;
          null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
        }
      }
      function c(c2, d2) {
        if (!a) return null;
        for (; null !== d2;) b(c2, d2), d2 = d2.sibling;
        return null;
      }
      function d(a2, b2) {
        for (a2 = /* @__PURE__ */ new Map(); null !== b2;) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
        return a2;
      }
      function e(a2, b2) {
        a2 = Pg(a2, b2);
        a2.index = 0;
        a2.sibling = null;
        return a2;
      }
      function f2(b2, c2, d2) {
        b2.index = d2;
        if (!a) return b2.flags |= 1048576, c2;
        d2 = b2.alternate;
        if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
        b2.flags |= 2;
        return c2;
      }
      function g(b2) {
        a && null === b2.alternate && (b2.flags |= 2);
        return b2;
      }
      function h(a2, b2, c2, d2) {
        if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function k2(a2, b2, c2, d2) {
        var f3 = c2.type;
        if (f3 === ya) return m2(a2, b2, c2.props.children, d2, c2.key);
        if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
        d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
        d2.ref = Lg(a2, b2, c2);
        d2.return = a2;
        return d2;
      }
      function l2(a2, b2, c2, d2) {
        if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
        b2 = e(b2, c2.children || []);
        b2.return = a2;
        return b2;
      }
      function m2(a2, b2, c2, d2, f3) {
        if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
        b2 = e(b2, c2);
        b2.return = a2;
        return b2;
      }
      function q2(a2, b2, c2) {
        if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
        if ("object" === typeof b2 && null !== b2) {
          switch (b2.$$typeof) {
            case va:
              return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
            case wa:
              return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
            case Ha:
              var d2 = b2._init;
              return q2(a2, d2(b2._payload), c2);
          }
          if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
          Mg(a2, b2);
        }
        return null;
      }
      function r2(a2, b2, c2, d2) {
        var e2 = null !== b2 ? b2.key : null;
        if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
        if ("object" === typeof c2 && null !== c2) {
          switch (c2.$$typeof) {
            case va:
              return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
            case wa:
              return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
            case Ha:
              return e2 = c2._init, r2(
                a2,
                b2,
                e2(c2._payload),
                d2
              );
          }
          if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
          Mg(a2, c2);
        }
        return null;
      }
      function y2(a2, b2, c2, d2, e2) {
        if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
        if ("object" === typeof d2 && null !== d2) {
          switch (d2.$$typeof) {
            case va:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
            case wa:
              return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
            case Ha:
              var f3 = d2._init;
              return y2(a2, b2, c2, f3(d2._payload), e2);
          }
          if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
          Mg(b2, d2);
        }
        return null;
      }
      function n2(e2, g2, h2, k3) {
        for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
          u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
          var n3 = r2(e2, u2, h2[w2], k3);
          if (null === n3) {
            null === u2 && (u2 = x2);
            break;
          }
          a && u2 && null === n3.alternate && b(e2, u2);
          g2 = f2(n3, g2, w2);
          null === m3 ? l3 = n3 : m3.sibling = n3;
          m3 = n3;
          u2 = x2;
        }
        if (w2 === h2.length) return c(e2, u2), I && tg(e2, w2), l3;
        if (null === u2) {
          for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
          I && tg(e2, w2);
          return l3;
        }
        for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
        a && u2.forEach(function (a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l3;
      }
      function t2(e2, g2, h2, k3) {
        var l3 = Ka(h2);
        if ("function" !== typeof l3) throw Error(p(150));
        h2 = l3.call(h2);
        if (null == h2) throw Error(p(151));
        for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
          m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
          var t3 = r2(e2, m3, n3.value, k3);
          if (null === t3) {
            null === m3 && (m3 = x2);
            break;
          }
          a && m3 && null === t3.alternate && b(e2, m3);
          g2 = f2(t3, g2, w2);
          null === u2 ? l3 = t3 : u2.sibling = t3;
          u2 = t3;
          m3 = x2;
        }
        if (n3.done) return c(
          e2,
          m3
        ), I && tg(e2, w2), l3;
        if (null === m3) {
          for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
          I && tg(e2, w2);
          return l3;
        }
        for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
        a && m3.forEach(function (a2) {
          return b(e2, a2);
        });
        I && tg(e2, w2);
        return l3;
      }
      function J2(a2, d2, f3, h2) {
        "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
        if ("object" === typeof f3 && null !== f3) {
          switch (f3.$$typeof) {
            case va:
              a: {
                for (var k3 = f3.key, l3 = d2; null !== l3;) {
                  if (l3.key === k3) {
                    k3 = f3.type;
                    if (k3 === ya) {
                      if (7 === l3.tag) {
                        c(a2, l3.sibling);
                        d2 = e(l3, f3.props.children);
                        d2.return = a2;
                        a2 = d2;
                        break a;
                      }
                    } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                      c(a2, l3.sibling);
                      d2 = e(l3, f3.props);
                      d2.ref = Lg(a2, l3, f3);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    c(a2, l3);
                    break;
                  } else b(a2, l3);
                  l3 = l3.sibling;
                }
                f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
              }
              return g(a2);
            case wa:
              a: {
                for (l3 = f3.key; null !== d2;) {
                  if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                    c(a2, d2.sibling);
                    d2 = e(d2, f3.children || []);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  } else {
                    c(a2, d2);
                    break;
                  }
                  else b(a2, d2);
                  d2 = d2.sibling;
                }
                d2 = Sg(f3, a2.mode, h2);
                d2.return = a2;
                a2 = d2;
              }
              return g(a2);
            case Ha:
              return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
          }
          if (eb(f3)) return n2(a2, d2, f3, h2);
          if (Ka(f3)) return t2(a2, d2, f3, h2);
          Mg(a2, f3);
        }
        return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
      }
      return J2;
    }
    var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
    function $g() {
      Zg = Yg = Xg = null;
    }
    function ah(a) {
      var b = Wg.current;
      E(Wg);
      a._currentValue = b;
    }
    function bh(a, b, c) {
      for (; null !== a;) {
        var d = a.alternate;
        (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
        if (a === c) break;
        a = a.return;
      }
    }
    function ch(a, b) {
      Xg = a;
      Zg = Yg = null;
      a = a.dependencies;
      null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
    }
    function eh(a) {
      var b = a._currentValue;
      if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
        if (null === Xg) throw Error(p(308));
        Yg = a;
        Xg.dependencies = { lanes: 0, firstContext: a };
      } else Yg = Yg.next = a;
      return b;
    }
    var fh = null;
    function gh(a) {
      null === fh ? fh = [a] : fh.push(a);
    }
    function hh(a, b, c, d) {
      var e = b.interleaved;
      null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
      b.interleaved = c;
      return ih(a, d);
    }
    function ih(a, b) {
      a.lanes |= b;
      var c = a.alternate;
      null !== c && (c.lanes |= b);
      c = a;
      for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
      return 3 === c.tag ? c.stateNode : null;
    }
    var jh = false;
    function kh(a) {
      a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
    }
    function lh(a, b) {
      a = a.updateQueue;
      b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
    }
    function mh(a, b) {
      return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
    }
    function nh(a, b, c) {
      var d = a.updateQueue;
      if (null === d) return null;
      d = d.shared;
      if (0 !== (K & 2)) {
        var e = d.pending;
        null === e ? b.next = b : (b.next = e.next, e.next = b);
        d.pending = b;
        return ih(a, c);
      }
      e = d.interleaved;
      null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
      d.interleaved = b;
      return ih(a, c);
    }
    function oh(a, b, c) {
      b = b.updateQueue;
      if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    function ph(a, b) {
      var c = a.updateQueue, d = a.alternate;
      if (null !== d && (d = d.updateQueue, c === d)) {
        var e = null, f2 = null;
        c = c.firstBaseUpdate;
        if (null !== c) {
          do {
            var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
            null === f2 ? e = f2 = g : f2 = f2.next = g;
            c = c.next;
          } while (null !== c);
          null === f2 ? e = f2 = b : f2 = f2.next = b;
        } else e = f2 = b;
        c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
        a.updateQueue = c;
        return;
      }
      a = c.lastBaseUpdate;
      null === a ? c.firstBaseUpdate = b : a.next = b;
      c.lastBaseUpdate = b;
    }
    function qh(a, b, c, d) {
      var e = a.updateQueue;
      jh = false;
      var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
      if (null !== h) {
        e.shared.pending = null;
        var k2 = h, l2 = k2.next;
        k2.next = null;
        null === g ? f2 = l2 : g.next = l2;
        g = k2;
        var m2 = a.alternate;
        null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
      }
      if (null !== f2) {
        var q2 = e.baseState;
        g = 0;
        m2 = l2 = k2 = null;
        h = f2;
        do {
          var r2 = h.lane, y2 = h.eventTime;
          if ((d & r2) === r2) {
            null !== m2 && (m2 = m2.next = {
              eventTime: y2,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            });
            a: {
              var n2 = a, t2 = h;
              r2 = b;
              y2 = c;
              switch (t2.tag) {
                case 1:
                  n2 = t2.payload;
                  if ("function" === typeof n2) {
                    q2 = n2.call(y2, q2, r2);
                    break a;
                  }
                  q2 = n2;
                  break a;
                case 3:
                  n2.flags = n2.flags & -65537 | 128;
                case 0:
                  n2 = t2.payload;
                  r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
                  if (null === r2 || void 0 === r2) break a;
                  q2 = A({}, q2, r2);
                  break a;
                case 2:
                  jh = true;
              }
            }
            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
          } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
          h = h.next;
          if (null === h) if (h = e.shared.pending, null === h) break;
          else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
        } while (1);
        null === m2 && (k2 = q2);
        e.baseState = k2;
        e.firstBaseUpdate = l2;
        e.lastBaseUpdate = m2;
        b = e.shared.interleaved;
        if (null !== b) {
          e = b;
          do
            g |= e.lane, e = e.next;
          while (e !== b);
        } else null === f2 && (e.shared.lanes = 0);
        rh |= g;
        a.lanes = g;
        a.memoizedState = q2;
      }
    }
    function sh(a, b, c) {
      a = b.effects;
      b.effects = null;
      if (null !== a) for (b = 0; b < a.length; b++) {
        var d = a[b], e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ("function" !== typeof e) throw Error(p(191, e));
          e.call(d);
        }
      }
    }
    var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
    function xh(a) {
      if (a === th) throw Error(p(174));
      return a;
    }
    function yh(a, b) {
      G(wh, b);
      G(vh, a);
      G(uh, th);
      a = b.nodeType;
      switch (a) {
        case 9:
        case 11:
          b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
          break;
        default:
          a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
      }
      E(uh);
      G(uh, b);
    }
    function zh() {
      E(uh);
      E(vh);
      E(wh);
    }
    function Ah(a) {
      xh(wh.current);
      var b = xh(uh.current);
      var c = lb(b, a.type);
      b !== c && (G(vh, a), G(uh, c));
    }
    function Bh(a) {
      vh.current === a && (E(uh), E(vh));
    }
    var L = Uf(0);
    function Ch(a) {
      for (var b = a; null !== b;) {
        if (13 === b.tag) {
          var c = b.memoizedState;
          if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
        } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
          if (0 !== (b.flags & 128)) return b;
        } else if (null !== b.child) {
          b.child.return = b;
          b = b.child;
          continue;
        }
        if (b === a) break;
        for (; null === b.sibling;) {
          if (null === b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
      return null;
    }
    var Dh = [];
    function Eh() {
      for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
      Dh.length = 0;
    }
    var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
    function P() {
      throw Error(p(321));
    }
    function Mh(a, b) {
      if (null === b) return false;
      for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
      return true;
    }
    function Nh(a, b, c, d, e, f2) {
      Hh = f2;
      M = b;
      b.memoizedState = null;
      b.updateQueue = null;
      b.lanes = 0;
      Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
      a = c(d, e);
      if (Jh) {
        f2 = 0;
        do {
          Jh = false;
          Kh = 0;
          if (25 <= f2) throw Error(p(301));
          f2 += 1;
          O = N = null;
          b.updateQueue = null;
          Fh.current = Qh;
          a = c(d, e);
        } while (Jh);
      }
      Fh.current = Rh;
      b = null !== N && null !== N.next;
      Hh = 0;
      O = N = M = null;
      Ih = false;
      if (b) throw Error(p(300));
      return a;
    }
    function Sh() {
      var a = 0 !== Kh;
      Kh = 0;
      return a;
    }
    function Th() {
      var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
      return O;
    }
    function Uh() {
      if (null === N) {
        var a = M.alternate;
        a = null !== a ? a.memoizedState : null;
      } else a = N.next;
      var b = null === O ? M.memoizedState : O.next;
      if (null !== b) O = b, N = a;
      else {
        if (null === a) throw Error(p(310));
        N = a;
        a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
        null === O ? M.memoizedState = O = a : O = O.next = a;
      }
      return O;
    }
    function Vh(a, b) {
      return "function" === typeof b ? b(a) : b;
    }
    function Wh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = N, e = d.baseQueue, f2 = c.pending;
      if (null !== f2) {
        if (null !== e) {
          var g = e.next;
          e.next = f2.next;
          f2.next = g;
        }
        d.baseQueue = e = f2;
        c.pending = null;
      }
      if (null !== e) {
        f2 = e.next;
        d = d.baseState;
        var h = g = null, k2 = null, l2 = f2;
        do {
          var m2 = l2.lane;
          if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
          else {
            var q2 = {
              lane: m2,
              action: l2.action,
              hasEagerState: l2.hasEagerState,
              eagerState: l2.eagerState,
              next: null
            };
            null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
            M.lanes |= m2;
            rh |= m2;
          }
          l2 = l2.next;
        } while (null !== l2 && l2 !== f2);
        null === k2 ? g = d : k2.next = h;
        He(d, b.memoizedState) || (dh = true);
        b.memoizedState = d;
        b.baseState = g;
        b.baseQueue = k2;
        c.lastRenderedState = d;
      }
      a = c.interleaved;
      if (null !== a) {
        e = a;
        do
          f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
        while (e !== a);
      } else null === e && (c.lanes = 0);
      return [b.memoizedState, c.dispatch];
    }
    function Xh(a) {
      var b = Uh(), c = b.queue;
      if (null === c) throw Error(p(311));
      c.lastRenderedReducer = a;
      var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
      if (null !== e) {
        c.pending = null;
        var g = e = e.next;
        do
          f2 = a(f2, g.action), g = g.next;
        while (g !== e);
        He(f2, b.memoizedState) || (dh = true);
        b.memoizedState = f2;
        null === b.baseQueue && (b.baseState = f2);
        c.lastRenderedState = f2;
      }
      return [f2, d];
    }
    function Yh() {
    }
    function Zh(a, b) {
      var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
      f2 && (d.memoizedState = e, dh = true);
      d = d.queue;
      $h(ai.bind(null, c, d, a), [a]);
      if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
        c.flags |= 2048;
        bi(9, ci.bind(null, c, d, e, b), void 0, null);
        if (null === Q) throw Error(p(349));
        0 !== (Hh & 30) || di(c, b, e);
      }
      return e;
    }
    function di(a, b, c) {
      a.flags |= 16384;
      a = { getSnapshot: b, value: c };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
    }
    function ci(a, b, c, d) {
      b.value = c;
      b.getSnapshot = d;
      ei(b) && fi(a);
    }
    function ai(a, b, c) {
      return c(function () {
        ei(b) && fi(a);
      });
    }
    function ei(a) {
      var b = a.getSnapshot;
      a = a.value;
      try {
        var c = b();
        return !He(a, c);
      } catch (d) {
        return true;
      }
    }
    function fi(a) {
      var b = ih(a, 1);
      null !== b && gi(b, a, 1, -1);
    }
    function hi(a) {
      var b = Th();
      "function" === typeof a && (a = a());
      b.memoizedState = b.baseState = a;
      a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
      b.queue = a;
      a = a.dispatch = ii.bind(null, M, a);
      return [b.memoizedState, a];
    }
    function bi(a, b, c, d) {
      a = { tag: a, create: b, destroy: c, deps: d, next: null };
      b = M.updateQueue;
      null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
      return a;
    }
    function ji() {
      return Uh().memoizedState;
    }
    function ki(a, b, c, d) {
      var e = Th();
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
    }
    function li(a, b, c, d) {
      var e = Uh();
      d = void 0 === d ? null : d;
      var f2 = void 0;
      if (null !== N) {
        var g = N.memoizedState;
        f2 = g.destroy;
        if (null !== d && Mh(d, g.deps)) {
          e.memoizedState = bi(b, c, f2, d);
          return;
        }
      }
      M.flags |= a;
      e.memoizedState = bi(1 | b, c, f2, d);
    }
    function mi(a, b) {
      return ki(8390656, 8, a, b);
    }
    function $h(a, b) {
      return li(2048, 8, a, b);
    }
    function ni(a, b) {
      return li(4, 2, a, b);
    }
    function oi(a, b) {
      return li(4, 4, a, b);
    }
    function pi(a, b) {
      if ("function" === typeof b) return a = a(), b(a), function () {
        b(null);
      };
      if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
        b.current = null;
      };
    }
    function qi(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return li(4, 4, pi.bind(null, b, a), c);
    }
    function ri() {
    }
    function si(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      c.memoizedState = [a, b];
      return a;
    }
    function ti(a, b) {
      var c = Uh();
      b = void 0 === b ? null : b;
      var d = c.memoizedState;
      if (null !== d && null !== b && Mh(b, d[1])) return d[0];
      a = a();
      c.memoizedState = [a, b];
      return a;
    }
    function ui(a, b, c) {
      if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
      He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
      return b;
    }
    function vi(a, b) {
      var c = C;
      C = 0 !== c && 4 > c ? c : 4;
      a(true);
      var d = Gh.transition;
      Gh.transition = {};
      try {
        a(false), b();
      } finally {
        C = c, Gh.transition = d;
      }
    }
    function wi() {
      return Uh().memoizedState;
    }
    function xi(a, b, c) {
      var d = yi(a);
      c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, c);
      else if (c = hh(a, b, c, d), null !== c) {
        var e = R();
        gi(c, a, d, e);
        Bi(c, b, d);
      }
    }
    function ii(a, b, c) {
      var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
      if (zi(a)) Ai(b, e);
      else {
        var f2 = a.alternate;
        if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
          var g = b.lastRenderedState, h = f2(g, c);
          e.hasEagerState = true;
          e.eagerState = h;
          if (He(h, g)) {
            var k2 = b.interleaved;
            null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
            b.interleaved = e;
            return;
          }
        } catch (l2) {
        } finally {
          }
        c = hh(a, b, e, d);
        null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
      }
    }
    function zi(a) {
      var b = a.alternate;
      return a === M || null !== b && b === M;
    }
    function Ai(a, b) {
      Jh = Ih = true;
      var c = a.pending;
      null === c ? b.next = b : (b.next = c.next, c.next = b);
      a.pending = b;
    }
    function Bi(a, b, c) {
      if (0 !== (c & 4194240)) {
        var d = b.lanes;
        d &= a.pendingLanes;
        c |= d;
        b.lanes = c;
        Cc(a, c);
      }
    }
    var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = {
      readContext: eh, useCallback: function (a, b) {
        Th().memoizedState = [a, void 0 === b ? null : b];
        return a;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function (a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b, a),
          c
        );
      }, useLayoutEffect: function (a, b) {
        return ki(4194308, 4, a, b);
      }, useInsertionEffect: function (a, b) {
        return ki(4, 2, a, b);
      }, useMemo: function (a, b) {
        var c = Th();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      }, useReducer: function (a, b, c) {
        var d = Th();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
        d.queue = a;
        a = a.dispatch = xi.bind(null, M, a);
        return [d.memoizedState, a];
      }, useRef: function (a) {
        var b = Th();
        a = { current: a };
        return b.memoizedState = a;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function (a) {
        return Th().memoizedState = a;
      }, useTransition: function () {
        var a = hi(false), b = a[0];
        a = vi.bind(null, a[1]);
        Th().memoizedState = a;
        return [b, a];
      }, useMutableSource: function () {
      }, useSyncExternalStore: function (a, b, c) {
        var d = M, e = Th();
        if (I) {
          if (void 0 === c) throw Error(p(407));
          c = c();
        } else {
          c = b();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b, c);
        }
        e.memoizedState = c;
        var f2 = { value: c, getSnapshot: b };
        e.queue = f2;
        mi(ai.bind(
          null,
          d,
          f2,
          a
        ), [a]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c, b), void 0, null);
        return c;
      }, useId: function () {
        var a = Th(), b = Q.identifierPrefix;
        if (I) {
          var c = sg;
          var d = rg;
          c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Kh++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      }, unstable_isNewReconciler: false
    }, Ph = {
      readContext: eh,
      useCallback: si,
      useContext: eh,
      useEffect: $h,
      useImperativeHandle: qi,
      useInsertionEffect: ni,
      useLayoutEffect: oi,
      useMemo: ti,
      useReducer: Wh,
      useRef: ji,
      useState: function () {
        return Wh(Vh);
      },
      useDebugValue: ri,
      useDeferredValue: function (a) {
        var b = Uh();
        return ui(b, N.memoizedState, a);
      },
      useTransition: function () {
        var a = Wh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      },
      useMutableSource: Yh,
      useSyncExternalStore: Zh,
      useId: wi,
      unstable_isNewReconciler: false
    }, Qh = {
      readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function () {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function (a) {
        var b = Uh();
        return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
      }, useTransition: function () {
        var a = Xh(Vh)[0], b = Uh().memoizedState;
        return [a, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false
    };
    function Ci(a, b) {
      if (a && a.defaultProps) {
        b = A({}, b);
        a = a.defaultProps;
        for (var c in a) void 0 === b[c] && (b[c] = a[c]);
        return b;
      }
      return b;
    }
    function Di(a, b, c, d) {
      b = a.memoizedState;
      c = c(d, b);
      c = null === c || void 0 === c ? b : A({}, b, c);
      a.memoizedState = c;
      0 === a.lanes && (a.updateQueue.baseState = c);
    }
    var Ei = {
      isMounted: function (a) {
        return (a = a._reactInternals) ? Vb(a) === a : false;
      }, enqueueSetState: function (a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f2 = mh(d, e);
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueReplaceState: function (a, b, c) {
        a = a._reactInternals;
        var d = R(), e = yi(a), f2 = mh(d, e);
        f2.tag = 1;
        f2.payload = b;
        void 0 !== c && null !== c && (f2.callback = c);
        b = nh(a, f2, e);
        null !== b && (gi(b, a, e, d), oh(b, a, e));
      }, enqueueForceUpdate: function (a, b) {
        a = a._reactInternals;
        var c = R(), d = yi(a), e = mh(c, d);
        e.tag = 2;
        void 0 !== b && null !== b && (e.callback = b);
        b = nh(a, e, d);
        null !== b && (gi(b, a, d, c), oh(b, a, d));
      }
    };
    function Fi(a, b, c, d, e, f2, g) {
      a = a.stateNode;
      return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
    }
    function Gi(a, b, c) {
      var d = false, e = Vf;
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
      b = new b(c, f2);
      a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
      b.updater = Ei;
      a.stateNode = b;
      b._reactInternals = a;
      d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
      return b;
    }
    function Hi(a, b, c, d) {
      a = b.state;
      "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
      "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
      b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
    }
    function Ii(a, b, c, d) {
      var e = a.stateNode;
      e.props = c;
      e.state = a.memoizedState;
      e.refs = {};
      kh(a);
      var f2 = b.contextType;
      "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
      e.state = a.memoizedState;
      f2 = b.getDerivedStateFromProps;
      "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
      "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
      "function" === typeof e.componentDidMount && (a.flags |= 4194308);
    }
    function Ji(a, b) {
      try {
        var c = "", d = b;
        do
          c += Pa(d), d = d.return;
        while (d);
        var e = c;
      } catch (f2) {
        e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
      }
      return { value: a, source: b, stack: e, digest: null };
    }
    function Ki(a, b, c) {
      return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
    }
    function Li(a, b) {
      try {
        console.error(b.value);
      } catch (c) {
        setTimeout(function () {
          throw c;
        });
      }
    }
    var Mi = "function" === typeof WeakMap ? WeakMap : Map;
    function Ni(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      c.payload = { element: null };
      var d = b.value;
      c.callback = function () {
        Oi || (Oi = true, Pi = d);
        Li(a, b);
      };
      return c;
    }
    function Qi(a, b, c) {
      c = mh(-1, c);
      c.tag = 3;
      var d = a.type.getDerivedStateFromError;
      if ("function" === typeof d) {
        var e = b.value;
        c.payload = function () {
          return d(e);
        };
        c.callback = function () {
          Li(a, b);
        };
      }
      var f2 = a.stateNode;
      null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function () {
        Li(a, b);
        "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
        var c2 = b.stack;
        this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
      });
      return c;
    }
    function Si(a, b, c) {
      var d = a.pingCache;
      if (null === d) {
        d = a.pingCache = new Mi();
        var e = /* @__PURE__ */ new Set();
        d.set(b, e);
      } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
      e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
    }
    function Ui(a) {
      do {
        var b;
        if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
        if (b) return a;
        a = a.return;
      } while (null !== a);
      return null;
    }
    function Vi(a, b, c, d, e) {
      if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
      a.flags |= 65536;
      a.lanes = e;
      return a;
    }
    var Wi = ua.ReactCurrentOwner, dh = false;
    function Xi(a, b, c, d) {
      b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
    }
    function Yi(a, b, c, d, e) {
      c = c.render;
      var f2 = b.ref;
      ch(b, e);
      d = Nh(a, b, c, d, f2, e);
      c = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && c && vg(b);
      b.flags |= 1;
      Xi(a, b, d, e);
      return b.child;
    }
    function $i(a, b, c, d, e) {
      if (null === a) {
        var f2 = c.type;
        if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
        a = Rg(c.type, null, d, b, b.mode, e);
        a.ref = b.ref;
        a.return = b;
        return b.child = a;
      }
      f2 = a.child;
      if (0 === (a.lanes & e)) {
        var g = f2.memoizedProps;
        c = c.compare;
        c = null !== c ? c : Ie;
        if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
      }
      b.flags |= 1;
      a = Pg(f2, d);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    function bj(a, b, c, d, e) {
      if (null !== a) {
        var f2 = a.memoizedProps;
        if (Ie(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
        else return b.lanes = a.lanes, Zi(a, b, e);
      }
      return cj(a, b, c, d, e);
    }
    function dj(a, b, c) {
      var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
      if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
      else {
        if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
        b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
        d = null !== f2 ? f2.baseLanes : c;
        G(ej, fj);
        fj |= d;
      }
      else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
      Xi(a, b, e, c);
      return b.child;
    }
    function gj(a, b) {
      var c = b.ref;
      if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
    }
    function cj(a, b, c, d, e) {
      var f2 = Zf(c) ? Xf : H.current;
      f2 = Yf(b, f2);
      ch(b, e);
      c = Nh(a, b, c, d, f2, e);
      d = Sh();
      if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
      I && d && vg(b);
      b.flags |= 1;
      Xi(a, b, c, e);
      return b.child;
    }
    function hj(a, b, c, d, e) {
      if (Zf(c)) {
        var f2 = true;
        cg(b);
      } else f2 = false;
      ch(b, e);
      if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
      else if (null === a) {
        var g = b.stateNode, h = b.memoizedProps;
        g.props = h;
        var k2 = g.context, l2 = c.contextType;
        "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
        var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
        q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
        jh = false;
        var r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        k2 = b.memoizedState;
        h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
      } else {
        g = b.stateNode;
        lh(a, b);
        h = b.memoizedProps;
        l2 = b.type === b.elementType ? h : Ci(b.type, h);
        g.props = l2;
        q2 = b.pendingProps;
        r2 = g.context;
        k2 = c.contextType;
        "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
        var y2 = c.getDerivedStateFromProps;
        (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
        jh = false;
        r2 = b.memoizedState;
        g.state = r2;
        qh(b, d, g, e);
        var n2 = b.memoizedState;
        h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
      }
      return jj(a, b, c, d, f2, e);
    }
    function jj(a, b, c, d, e, f2) {
      gj(a, b);
      var g = 0 !== (b.flags & 128);
      if (!d && !g) return e && dg(b, c, false), Zi(a, b, f2);
      d = b.stateNode;
      Wi.current = b;
      var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
      b.flags |= 1;
      null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
      b.memoizedState = d.state;
      e && dg(b, c, true);
      return b.child;
    }
    function kj(a) {
      var b = a.stateNode;
      b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
      yh(a, b.containerInfo);
    }
    function lj(a, b, c, d, e) {
      Ig();
      Jg(e);
      b.flags |= 256;
      Xi(a, b, c, d);
      return b.child;
    }
    var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
    function nj(a) {
      return { baseLanes: a, cachePool: null, transitions: null };
    }
    function oj(a, b, c) {
      var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
      (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
      if (h) f2 = true, b.flags &= -129;
      else if (null === a || null !== a.memoizedState) e |= 1;
      G(L, e & 1);
      if (null === a) {
        Eg(b);
        a = b.memoizedState;
        if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
        g = d.children;
        a = d.fallback;
        return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
      }
      e = a.memoizedState;
      if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
      if (f2) {
        f2 = d.fallback;
        g = b.mode;
        e = a.child;
        h = e.sibling;
        var k2 = { mode: "hidden", children: d.children };
        0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
        null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
        f2.return = b;
        d.return = b;
        d.sibling = f2;
        b.child = d;
        d = f2;
        f2 = b.child;
        g = a.child.memoizedState;
        g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
        f2.memoizedState = g;
        f2.childLanes = a.childLanes & ~c;
        b.memoizedState = mj;
        return d;
      }
      f2 = a.child;
      a = f2.sibling;
      d = Pg(f2, { mode: "visible", children: d.children });
      0 === (b.mode & 1) && (d.lanes = c);
      d.return = b;
      d.sibling = null;
      null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
      b.child = d;
      b.memoizedState = null;
      return d;
    }
    function qj(a, b) {
      b = pj({ mode: "visible", children: b }, a.mode, 0, null);
      b.return = a;
      return a.child = b;
    }
    function sj(a, b, c, d) {
      null !== d && Jg(d);
      Ug(b, a.child, null, c);
      a = qj(b, b.pendingProps.children);
      a.flags |= 2;
      b.memoizedState = null;
      return a;
    }
    function rj(a, b, c, d, e, f2, g) {
      if (c) {
        if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
        if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
        f2 = d.fallback;
        e = b.mode;
        d = pj({ mode: "visible", children: d.children }, e, 0, null);
        f2 = Tg(f2, e, g, null);
        f2.flags |= 2;
        d.return = b;
        f2.return = b;
        d.sibling = f2;
        b.child = d;
        0 !== (b.mode & 1) && Ug(b, a.child, null, g);
        b.child.memoizedState = nj(g);
        b.memoizedState = mj;
        return f2;
      }
      if (0 === (b.mode & 1)) return sj(a, b, g, null);
      if ("$!" === e.data) {
        d = e.nextSibling && e.nextSibling.dataset;
        if (d) var h = d.dgst;
        d = h;
        f2 = Error(p(419));
        d = Ki(f2, d, void 0);
        return sj(a, b, g, d);
      }
      h = 0 !== (g & a.childLanes);
      if (dh || h) {
        d = Q;
        if (null !== d) {
          switch (g & -g) {
            case 4:
              e = 2;
              break;
            case 16:
              e = 8;
              break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              e = 32;
              break;
            case 536870912:
              e = 268435456;
              break;
            default:
              e = 0;
          }
          e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
          0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
        }
        tj();
        d = Ki(Error(p(421)));
        return sj(a, b, g, d);
      }
      if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
      a = f2.treeContext;
      yg = Lf(e.nextSibling);
      xg = b;
      I = true;
      zg = null;
      null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
      b = qj(b, d.children);
      b.flags |= 4096;
      return b;
    }
    function vj(a, b, c) {
      a.lanes |= b;
      var d = a.alternate;
      null !== d && (d.lanes |= b);
      bh(a.return, b, c);
    }
    function wj(a, b, c, d, e) {
      var f2 = a.memoizedState;
      null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
    }
    function xj(a, b, c) {
      var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
      Xi(a, b, d.children, c);
      d = L.current;
      if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
      else {
        if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
          if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
          else if (19 === a.tag) vj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling;) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
        d &= 1;
      }
      G(L, d);
      if (0 === (b.mode & 1)) b.memoizedState = null;
      else switch (e) {
        case "forwards":
          c = b.child;
          for (e = null; null !== c;) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
          c = e;
          null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
          wj(b, false, e, c, f2);
          break;
        case "backwards":
          c = null;
          e = b.child;
          for (b.child = null; null !== e;) {
            a = e.alternate;
            if (null !== a && null === Ch(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          wj(b, true, c, null, f2);
          break;
        case "together":
          wj(b, false, null, null, void 0);
          break;
        default:
          b.memoizedState = null;
      }
      return b.child;
    }
    function ij(a, b) {
      0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
    }
    function Zi(a, b, c) {
      null !== a && (b.dependencies = a.dependencies);
      rh |= b.lanes;
      if (0 === (c & b.childLanes)) return null;
      if (null !== a && b.child !== a.child) throw Error(p(153));
      if (null !== b.child) {
        a = b.child;
        c = Pg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
        c.sibling = null;
      }
      return b.child;
    }
    function yj(a, b, c) {
      switch (b.tag) {
        case 3:
          kj(b);
          Ig();
          break;
        case 5:
          Ah(b);
          break;
        case 1:
          Zf(b.type) && cg(b);
          break;
        case 4:
          yh(b, b.stateNode.containerInfo);
          break;
        case 10:
          var d = b.type._context, e = b.memoizedProps.value;
          G(Wg, d._currentValue);
          d._currentValue = e;
          break;
        case 13:
          d = b.memoizedState;
          if (null !== d) {
            if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
            if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
            G(L, L.current & 1);
            a = Zi(a, b, c);
            return null !== a ? a.sibling : null;
          }
          G(L, L.current & 1);
          break;
        case 19:
          d = 0 !== (c & b.childLanes);
          if (0 !== (a.flags & 128)) {
            if (d) return xj(a, b, c);
            b.flags |= 128;
          }
          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
          G(L, L.current);
          if (d) break;
          else return null;
        case 22:
        case 23:
          return b.lanes = 0, dj(a, b, c);
      }
      return Zi(a, b, c);
    }
    var zj, Aj, Bj, Cj;
    zj = function (a, b) {
      for (var c = b.child; null !== c;) {
        if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
        else if (4 !== c.tag && null !== c.child) {
          c.child.return = c;
          c = c.child;
          continue;
        }
        if (c === b) break;
        for (; null === c.sibling;) {
          if (null === c.return || c.return === b) return;
          c = c.return;
        }
        c.sibling.return = c.return;
        c = c.sibling;
      }
    };
    Aj = function () {
    };
    Bj = function (a, b, c, d) {
      var e = a.memoizedProps;
      if (e !== d) {
        a = b.stateNode;
        xh(uh.current);
        var f2 = null;
        switch (c) {
          case "input":
            e = Ya(a, e);
            d = Ya(a, d);
            f2 = [];
            break;
          case "select":
            e = A({}, e, { value: void 0 });
            d = A({}, d, { value: void 0 });
            f2 = [];
            break;
          case "textarea":
            e = gb(a, e);
            d = gb(a, d);
            f2 = [];
            break;
          default:
            "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
        }
        ub(c, d);
        var g;
        c = null;
        for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
          var h = e[l2];
          for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
        for (l2 in d) {
          var k2 = d[l2];
          h = null != e ? e[l2] : void 0;
          if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
            for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else c || (f2 || (f2 = []), f2.push(
            l2,
            c
          )), c = k2;
          else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
        }
        c && (f2 = f2 || []).push("style", c);
        var l2 = f2;
        if (b.updateQueue = l2) b.flags |= 4;
      }
    };
    Cj = function (a, b, c, d) {
      c !== d && (b.flags |= 4);
    };
    function Dj(a, b) {
      if (!I) switch (a.tailMode) {
        case "hidden":
          b = a.tail;
          for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
          null === c ? a.tail = null : c.sibling = null;
          break;
        case "collapsed":
          c = a.tail;
          for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
          null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
      }
    }
    function S(a) {
      var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
      if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
      else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
      a.subtreeFlags |= d;
      a.childLanes = c;
      return b;
    }
    function Ej(a, b, c) {
      var d = b.pendingProps;
      wg(b);
      switch (b.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return S(b), null;
        case 1:
          return Zf(b.type) && $f(), S(b), null;
        case 3:
          d = b.stateNode;
          zh();
          E(Wf);
          E(H);
          Eh();
          d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
          if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
          Aj(a, b);
          S(b);
          return null;
        case 5:
          Bh(b);
          var e = xh(wh.current);
          c = b.type;
          if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          else {
            if (!d) {
              if (null === b.stateNode) throw Error(p(166));
              S(b);
              return null;
            }
            a = xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.type;
              var f2 = b.memoizedProps;
              d[Of] = b;
              d[Pf] = f2;
              a = 0 !== (b.mode & 1);
              switch (c) {
                case "dialog":
                  D("cancel", d);
                  D("close", d);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", d);
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], d);
                  break;
                case "source":
                  D("error", d);
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    d
                  );
                  D("load", d);
                  break;
                case "details":
                  D("toggle", d);
                  break;
                case "input":
                  Za(d, f2);
                  D("invalid", d);
                  break;
                case "select":
                  d._wrapperState = { wasMultiple: !!f2.multiple };
                  D("invalid", d);
                  break;
                case "textarea":
                  hb(d, f2), D("invalid", d);
              }
              ub(c, f2);
              e = null;
              for (var g in f2) if (f2.hasOwnProperty(g)) {
                var h = f2[g];
                "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                  d.textContent,
                  h,
                  a
                ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
              }
              switch (c) {
                case "input":
                  Va(d);
                  db(d, f2, true);
                  break;
                case "textarea":
                  Va(d);
                  jb(d);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" === typeof f2.onClick && (d.onclick = Bf);
              }
              d = e;
              b.updateQueue = d;
              null !== d && (b.flags |= 4);
            } else {
              g = 9 === e.nodeType ? e : e.ownerDocument;
              "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
              "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
              a[Of] = b;
              a[Pf] = d;
              zj(a, b, false, false);
              b.stateNode = a;
              a: {
                g = vb(c, d);
                switch (c) {
                  case "dialog":
                    D("cancel", a);
                    D("close", a);
                    e = d;
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", a);
                    e = d;
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                    e = d;
                    break;
                  case "source":
                    D("error", a);
                    e = d;
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      a
                    );
                    D("load", a);
                    e = d;
                    break;
                  case "details":
                    D("toggle", a);
                    e = d;
                    break;
                  case "input":
                    Za(a, d);
                    e = Ya(a, d);
                    D("invalid", a);
                    break;
                  case "option":
                    e = d;
                    break;
                  case "select":
                    a._wrapperState = { wasMultiple: !!d.multiple };
                    e = A({}, d, { value: void 0 });
                    D("invalid", a);
                    break;
                  case "textarea":
                    hb(a, d);
                    e = gb(a, d);
                    D("invalid", a);
                    break;
                  default:
                    e = d;
                }
                ub(c, e);
                h = e;
                for (f2 in h) if (h.hasOwnProperty(f2)) {
                  var k2 = h[f2];
                  "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
                }
                switch (c) {
                  case "input":
                    Va(a);
                    db(a, d, false);
                    break;
                  case "textarea":
                    Va(a);
                    jb(a);
                    break;
                  case "option":
                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                    break;
                  case "select":
                    a.multiple = !!d.multiple;
                    f2 = d.value;
                    null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                      a,
                      !!d.multiple,
                      d.defaultValue,
                      true
                    );
                    break;
                  default:
                    "function" === typeof e.onClick && (a.onclick = Bf);
                }
                switch (c) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d = !!d.autoFocus;
                    break a;
                  case "img":
                    d = true;
                    break a;
                  default:
                    d = false;
                }
              }
              d && (b.flags |= 4);
            }
            null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
          }
          S(b);
          return null;
        case 6:
          if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
          else {
            if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
            c = xh(wh.current);
            xh(uh.current);
            if (Gg(b)) {
              d = b.stateNode;
              c = b.memoizedProps;
              d[Of] = b;
              if (f2 = d.nodeValue !== c) {
                if (a = xg, null !== a) switch (a.tag) {
                  case 3:
                    Af(d.nodeValue, c, 0 !== (a.mode & 1));
                    break;
                  case 5:
                    true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                }
              }
              f2 && (b.flags |= 4);
            } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
          }
          S(b);
          return null;
        case 13:
          E(L);
          d = b.memoizedState;
          if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
            if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
            else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
              if (null === a) {
                if (!f2) throw Error(p(318));
                f2 = b.memoizedState;
                f2 = null !== f2 ? f2.dehydrated : null;
                if (!f2) throw Error(p(317));
                f2[Of] = b;
              } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
              S(b);
              f2 = false;
            } else null !== zg && (Fj(zg), zg = null), f2 = true;
            if (!f2) return b.flags & 65536 ? b : null;
          }
          if (0 !== (b.flags & 128)) return b.lanes = c, b;
          d = null !== d;
          d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
          null !== b.updateQueue && (b.flags |= 4);
          S(b);
          return null;
        case 4:
          return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
        case 10:
          return ah(b.type._context), S(b), null;
        case 17:
          return Zf(b.type) && $f(), S(b), null;
        case 19:
          E(L);
          f2 = b.memoizedState;
          if (null === f2) return S(b), null;
          d = 0 !== (b.flags & 128);
          g = f2.rendering;
          if (null === g) if (d) Dj(f2, false);
          else {
            if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
              g = Ch(a);
              if (null !== g) {
                b.flags |= 128;
                Dj(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c;) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(L, L.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
          }
          else {
            if (!d) if (a = Ch(g), null !== a) {
              if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
            } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
          }
          if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
          S(b);
          return null;
        case 22:
        case 23:
          return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(p(156, b.tag));
    }
    function Ij(a, b) {
      wg(b);
      switch (b.tag) {
        case 1:
          return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 3:
          return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
        case 5:
          return Bh(b), null;
        case 13:
          E(L);
          a = b.memoizedState;
          if (null !== a && null !== a.dehydrated) {
            if (null === b.alternate) throw Error(p(340));
            Ig();
          }
          a = b.flags;
          return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
        case 19:
          return E(L), null;
        case 4:
          return zh(), null;
        case 10:
          return ah(b.type._context), null;
        case 22:
        case 23:
          return Hj(), null;
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
    function Lj(a, b) {
      var c = a.ref;
      if (null !== c) if ("function" === typeof c) try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
      else c.current = null;
    }
    function Mj(a, b, c) {
      try {
        c();
      } catch (d) {
        W(a, b, d);
      }
    }
    var Nj = false;
    function Oj(a, b) {
      Cf = dd;
      a = Me();
      if (Ne(a)) {
        if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
        else a: {
          c = (c = a.ownerDocument) && c.defaultView || window;
          var d = c.getSelection && c.getSelection();
          if (d && 0 !== d.rangeCount) {
            c = d.anchorNode;
            var e = d.anchorOffset, f2 = d.focusNode;
            d = d.focusOffset;
            try {
              c.nodeType, f2.nodeType;
            } catch (F2) {
              c = null;
              break a;
            }
            var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
            b: for (; ;) {
              for (var y2; ;) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild)) break;
                r2 = q2;
                q2 = y2;
              }
              for (; ;) {
                if (q2 === a) break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling)) break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
            c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
          } else c = null;
        }
        c = c || { start: 0, end: 0 };
      } else c = null;
      Df = { focusedElem: a, selectionRange: c };
      dd = false;
      for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
      else for (; null !== V;) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (null !== n2) {
                var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
                x2.__reactInternalSnapshotBeforeUpdate = w2;
              }
              break;
            case 3:
              var u2 = b.stateNode.containerInfo;
              1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(p(163));
          }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
      n2 = Nj;
      Nj = false;
      return n2;
    }
    function Pj(a, b, c) {
      var d = b.updateQueue;
      d = null !== d ? d.lastEffect : null;
      if (null !== d) {
        var e = d = d.next;
        do {
          if ((e.tag & a) === a) {
            var f2 = e.destroy;
            e.destroy = void 0;
            void 0 !== f2 && Mj(b, c, f2);
          }
          e = e.next;
        } while (e !== d);
      }
    }
    function Qj(a, b) {
      b = b.updateQueue;
      b = null !== b ? b.lastEffect : null;
      if (null !== b) {
        var c = b = b.next;
        do {
          if ((c.tag & a) === a) {
            var d = c.create;
            c.destroy = d();
          }
          c = c.next;
        } while (c !== b);
      }
    }
    function Rj(a) {
      var b = a.ref;
      if (null !== b) {
        var c = a.stateNode;
        switch (a.tag) {
          case 5:
            a = c;
            break;
          default:
            a = c;
        }
        "function" === typeof b ? b(a) : b.current = a;
      }
    }
    function Sj(a) {
      var b = a.alternate;
      null !== b && (a.alternate = null, Sj(b));
      a.child = null;
      a.deletions = null;
      a.sibling = null;
      5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
      a.stateNode = null;
      a.return = null;
      a.dependencies = null;
      a.memoizedProps = null;
      a.memoizedState = null;
      a.pendingProps = null;
      a.stateNode = null;
      a.updateQueue = null;
    }
    function Tj(a) {
      return 5 === a.tag || 3 === a.tag || 4 === a.tag;
    }
    function Uj(a) {
      a: for (; ;) {
        for (; null === a.sibling;) {
          if (null === a.return || Tj(a.return)) return null;
          a = a.return;
        }
        a.sibling.return = a.return;
        for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
          if (a.flags & 2) continue a;
          if (null === a.child || 4 === a.tag) continue a;
          else a.child.return = a, a = a.child;
        }
        if (!(a.flags & 2)) return a.stateNode;
      }
    }
    function Vj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
      else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a;) Vj(a, b, c), a = a.sibling;
    }
    function Wj(a, b, c) {
      var d = a.tag;
      if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
      else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
    }
    var X$1 = null, Xj = false;
    function Yj(a, b, c) {
      for (c = c.child; null !== c;) Zj(a, b, c), c = c.sibling;
    }
    function Zj(a, b, c) {
      if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
        lc.onCommitFiberUnmount(kc, c);
      } catch (h) {
      }
      switch (c.tag) {
        case 5:
          U || Lj(c, b);
        case 6:
          var d = X$1, e = Xj;
          X$1 = null;
          Yj(a, b, c);
          X$1 = d;
          Xj = e;
          null !== X$1 && (Xj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X$1.removeChild(c.stateNode));
          break;
        case 18:
          null !== X$1 && (Xj ? (a = X$1, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X$1, c.stateNode));
          break;
        case 4:
          d = X$1;
          e = Xj;
          X$1 = c.stateNode.containerInfo;
          Xj = true;
          Yj(a, b, c);
          X$1 = d;
          Xj = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
            e = d = d.next;
            do {
              var f2 = e, g = f2.destroy;
              f2 = f2.tag;
              void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
              e = e.next;
            } while (e !== d);
          }
          Yj(a, b, c);
          break;
        case 1:
          if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
            d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
          } catch (h) {
            W(c, b, h);
          }
          Yj(a, b, c);
          break;
        case 21:
          Yj(a, b, c);
          break;
        case 22:
          c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
          break;
        default:
          Yj(a, b, c);
      }
    }
    function ak(a) {
      var b = a.updateQueue;
      if (null !== b) {
        a.updateQueue = null;
        var c = a.stateNode;
        null === c && (c = a.stateNode = new Kj());
        b.forEach(function (b2) {
          var d = bk.bind(null, a, b2);
          c.has(b2) || (c.add(b2), b2.then(d, d));
        });
      }
    }
    function ck(a, b) {
      var c = b.deletions;
      if (null !== c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        try {
          var f2 = a, g = b, h = g;
          a: for (; null !== h;) {
            switch (h.tag) {
              case 5:
                X$1 = h.stateNode;
                Xj = false;
                break a;
              case 3:
                X$1 = h.stateNode.containerInfo;
                Xj = true;
                break a;
              case 4:
                X$1 = h.stateNode.containerInfo;
                Xj = true;
                break a;
            }
            h = h.return;
          }
          if (null === X$1) throw Error(p(160));
          Zj(f2, g, e);
          X$1 = null;
          Xj = false;
          var k2 = e.alternate;
          null !== k2 && (k2.return = null);
          e.return = null;
        } catch (l2) {
          W(e, b, l2);
        }
      }
      if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) dk(b, a), b = b.sibling;
    }
    function dk(a, b) {
      var c = a.alternate, d = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ck(b, a);
          ek(a);
          if (d & 4) {
            try {
              Pj(3, a, a.return), Qj(3, a);
            } catch (t2) {
              W(a, a.return, t2);
            }
            try {
              Pj(5, a, a.return);
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 1:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          break;
        case 5:
          ck(b, a);
          ek(a);
          d & 512 && null !== c && Lj(c, c.return);
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              ob(e, "");
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          if (d & 4 && (e = a.stateNode, null != e)) {
            var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
            a.updateQueue = null;
            if (null !== k2) try {
              "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
              vb(h, g);
              var l2 = vb(h, f2);
              for (g = 0; g < k2.length; g += 2) {
                var m2 = k2[g], q2 = k2[g + 1];
                "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
              }
              switch (h) {
                case "input":
                  bb(e, f2);
                  break;
                case "textarea":
                  ib(e, f2);
                  break;
                case "select":
                  var r2 = e._wrapperState.wasMultiple;
                  e._wrapperState.wasMultiple = !!f2.multiple;
                  var y2 = f2.value;
                  null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                    e,
                    !!f2.multiple,
                    f2.defaultValue,
                    true
                  ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
              }
              e[Pf] = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 6:
          ck(b, a);
          ek(a);
          if (d & 4) {
            if (null === a.stateNode) throw Error(p(162));
            e = a.stateNode;
            f2 = a.memoizedProps;
            try {
              e.nodeValue = f2;
            } catch (t2) {
              W(a, a.return, t2);
            }
          }
          break;
        case 3:
          ck(b, a);
          ek(a);
          if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
            bd(b.containerInfo);
          } catch (t2) {
            W(a, a.return, t2);
          }
          break;
        case 4:
          ck(b, a);
          ek(a);
          break;
        case 13:
          ck(b, a);
          ek(a);
          e = a.child;
          e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
          d & 4 && ak(a);
          break;
        case 22:
          m2 = null !== c && null !== c.memoizedState;
          a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
          ek(a);
          if (d & 8192) {
            l2 = null !== a.memoizedState;
            if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2;) {
              for (q2 = V = m2; null !== V;) {
                r2 = V;
                y2 = r2.child;
                switch (r2.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Pj(4, r2, r2.return);
                    break;
                  case 1:
                    Lj(r2, r2.return);
                    var n2 = r2.stateNode;
                    if ("function" === typeof n2.componentWillUnmount) {
                      d = r2;
                      c = r2.return;
                      try {
                        b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                      } catch (t2) {
                        W(d, c, t2);
                      }
                    }
                    break;
                  case 5:
                    Lj(r2, r2.return);
                    break;
                  case 22:
                    if (null !== r2.memoizedState) {
                      gk(q2);
                      continue;
                    }
                }
                null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
              }
              m2 = m2.sibling;
            }
            a: for (m2 = null, q2 = a; ;) {
              if (5 === q2.tag) {
                if (null === m2) {
                  m2 = q2;
                  try {
                    e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                  } catch (t2) {
                    W(a, a.return, t2);
                  }
                }
              } else if (6 === q2.tag) {
                if (null === m2) try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
              } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
                q2.child.return = q2;
                q2 = q2.child;
                continue;
              }
              if (q2 === a) break a;
              for (; null === q2.sibling;) {
                if (null === q2.return || q2.return === a) break a;
                m2 === q2 && (m2 = null);
                q2 = q2.return;
              }
              m2 === q2 && (m2 = null);
              q2.sibling.return = q2.return;
              q2 = q2.sibling;
            }
          }
          break;
        case 19:
          ck(b, a);
          ek(a);
          d & 4 && ak(a);
          break;
        case 21:
          break;
        default:
          ck(
            b,
            a
          ), ek(a);
      }
    }
    function ek(a) {
      var b = a.flags;
      if (b & 2) {
        try {
          a: {
            for (var c = a.return; null !== c;) {
              if (Tj(c)) {
                var d = c;
                break a;
              }
              c = c.return;
            }
            throw Error(p(160));
          }
          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (ob(e, ""), d.flags &= -33);
              var f2 = Uj(a);
              Wj(a, f2, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo, h = Uj(a);
              Vj(a, h, g);
              break;
            default:
              throw Error(p(161));
          }
        } catch (k2) {
          W(a, a.return, k2);
        }
        a.flags &= -3;
      }
      b & 4096 && (a.flags &= -4097);
    }
    function hk(a, b, c) {
      V = a;
      ik(a);
    }
    function ik(a, b, c) {
      for (var d = 0 !== (a.mode & 1); null !== V;) {
        var e = V, f2 = e.child;
        if (22 === e.tag && d) {
          var g = null !== e.memoizedState || Jj;
          if (!g) {
            var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
            h = Jj;
            var l2 = U;
            Jj = g;
            if ((U = k2) && !l2) for (V = e; null !== V;) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
            for (; null !== f2;) V = f2, ik(f2), f2 = f2.sibling;
            V = e;
            Jj = h;
            U = l2;
          }
          kk(a);
        } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
      }
    }
    function kk(a) {
      for (; null !== V;) {
        var b = V;
        if (0 !== (b.flags & 8772)) {
          var c = b.alternate;
          try {
            if (0 !== (b.flags & 8772)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                U || Qj(5, b);
                break;
              case 1:
                var d = b.stateNode;
                if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
                var f2 = b.updateQueue;
                null !== f2 && sh(b, f2, d);
                break;
              case 3:
                var g = b.updateQueue;
                if (null !== g) {
                  c = null;
                  if (null !== b.child) switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                  sh(b, g, c);
                }
                break;
              case 5:
                var h = b.stateNode;
                if (null === c && b.flags & 4) {
                  c = h;
                  var k2 = b.memoizedProps;
                  switch (b.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      k2.autoFocus && c.focus();
                      break;
                    case "img":
                      k2.src && (c.src = k2.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (null === b.memoizedState) {
                  var l2 = b.alternate;
                  if (null !== l2) {
                    var m2 = l2.memoizedState;
                    if (null !== m2) {
                      var q2 = m2.dehydrated;
                      null !== q2 && bd(q2);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(p(163));
            }
            U || b.flags & 512 && Rj(b);
          } catch (r2) {
            W(b, b.return, r2);
          }
        }
        if (b === a) {
          V = null;
          break;
        }
        c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function gk(a) {
      for (; null !== V;) {
        var b = V;
        if (b === a) {
          V = null;
          break;
        }
        var c = b.sibling;
        if (null !== c) {
          c.return = b.return;
          V = c;
          break;
        }
        V = b.return;
      }
    }
    function jk(a) {
      for (; null !== V;) {
        var b = V;
        try {
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              var c = b.return;
              try {
                Qj(4, b);
              } catch (k2) {
                W(b, c, k2);
              }
              break;
            case 1:
              var d = b.stateNode;
              if ("function" === typeof d.componentDidMount) {
                var e = b.return;
                try {
                  d.componentDidMount();
                } catch (k2) {
                  W(b, e, k2);
                }
              }
              var f2 = b.return;
              try {
                Rj(b);
              } catch (k2) {
                W(b, f2, k2);
              }
              break;
            case 5:
              var g = b.return;
              try {
                Rj(b);
              } catch (k2) {
                W(b, g, k2);
              }
          }
        } catch (k2) {
          W(b, b.return, k2);
        }
        if (b === a) {
          V = null;
          break;
        }
        var h = b.sibling;
        if (null !== h) {
          h.return = b.return;
          V = h;
          break;
        }
        V = b.return;
      }
    }
    var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
    function R() {
      return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
    }
    function yi(a) {
      if (0 === (a.mode & 1)) return 1;
      if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
      if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
      a = C;
      if (0 !== a) return a;
      a = window.event;
      a = void 0 === a ? 16 : jd(a.type);
      return a;
    }
    function gi(a, b, c, d) {
      if (50 < yk) throw yk = 0, zk = null, Error(p(185));
      Ac(a, c, d);
      if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
    }
    function Dk(a, b) {
      var c = a.callbackNode;
      wc(a, b);
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
      else if (b = d & -d, a.callbackPriority !== b) {
        null != c && bc(c);
        if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function () {
          0 === (K & 6) && jg();
        }), c = null;
        else {
          switch (Dc(d)) {
            case 1:
              c = fc;
              break;
            case 4:
              c = gc;
              break;
            case 16:
              c = hc;
              break;
            case 536870912:
              c = jc;
              break;
            default:
              c = hc;
          }
          c = Fk(c, Gk.bind(null, a));
        }
        a.callbackPriority = b;
        a.callbackNode = c;
      }
    }
    function Gk(a, b) {
      Ak = -1;
      Bk = 0;
      if (0 !== (K & 6)) throw Error(p(327));
      var c = a.callbackNode;
      if (Hk() && a.callbackNode !== c) return null;
      var d = uc(a, a === Q ? Z : 0);
      if (0 === d) return null;
      if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
      else {
        b = d;
        var e = K;
        K |= 2;
        var f2 = Jk();
        if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
        do
          try {
            Lk();
            break;
          } catch (h) {
            Mk(a, h);
          }
        while (1);
        $g();
        mk.current = f2;
        K = e;
        null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
      }
      if (0 !== b) {
        2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
        if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        if (6 === b) Ck(a, d);
        else {
          e = a.current.alternate;
          if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
          a.finishedWork = e;
          a.finishedLanes = d;
          switch (b) {
            case 0:
            case 1:
              throw Error(p(345));
            case 2:
              Pk(a, tk, uk);
              break;
            case 3:
              Ck(a, d);
              if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                if (0 !== uc(a, 0)) break;
                e = a.suspendedLanes;
                if ((e & d) !== d) {
                  R();
                  a.pingedLanes |= a.suspendedLanes & e;
                  break;
                }
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 4:
              Ck(a, d);
              if ((d & 4194240) === d) break;
              b = a.eventTimes;
              for (e = -1; 0 < d;) {
                var g = 31 - oc(d);
                f2 = 1 << g;
                g = b[g];
                g > e && (e = g);
                d &= ~f2;
              }
              d = e;
              d = B() - d;
              d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
              if (10 < d) {
                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                break;
              }
              Pk(a, tk, uk);
              break;
            case 5:
              Pk(a, tk, uk);
              break;
            default:
              throw Error(p(329));
          }
        }
      }
      Dk(a, B());
      return a.callbackNode === c ? Gk.bind(null, a) : null;
    }
    function Nk(a, b) {
      var c = sk;
      a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
      a = Ik(a, b);
      2 !== a && (b = tk, tk = c, null !== b && Fj(b));
      return a;
    }
    function Fj(a) {
      null === tk ? tk = a : tk.push.apply(tk, a);
    }
    function Ok(a) {
      for (var b = a; ;) {
        if (b.flags & 16384) {
          var c = b.updateQueue;
          if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
            var e = c[d], f2 = e.getSnapshot;
            e = e.value;
            try {
              if (!He(f2(), e)) return false;
            } catch (g) {
              return false;
            }
          }
        }
        c = b.child;
        if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
        else {
          if (b === a) break;
          for (; null === b.sibling;) {
            if (null === b.return || b.return === a) return true;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
      }
      return true;
    }
    function Ck(a, b) {
      b &= ~rk;
      b &= ~qk;
      a.suspendedLanes |= b;
      a.pingedLanes &= ~b;
      for (a = a.expirationTimes; 0 < b;) {
        var c = 31 - oc(b), d = 1 << c;
        a[c] = -1;
        b &= ~d;
      }
    }
    function Ek(a) {
      if (0 !== (K & 6)) throw Error(p(327));
      Hk();
      var b = uc(a, 0);
      if (0 === (b & 1)) return Dk(a, B()), null;
      var c = Ik(a, b);
      if (0 !== a.tag && 2 === c) {
        var d = xc(a);
        0 !== d && (b = d, c = Nk(a, d));
      }
      if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
      if (6 === c) throw Error(p(345));
      a.finishedWork = a.current.alternate;
      a.finishedLanes = b;
      Pk(a, tk, uk);
      Dk(a, B());
      return null;
    }
    function Qk(a, b) {
      var c = K;
      K |= 1;
      try {
        return a(b);
      } finally {
        K = c, 0 === K && (Gj = B() + 500, fg && jg());
      }
    }
    function Rk(a) {
      null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
      var b = K;
      K |= 1;
      var c = ok.transition, d = C;
      try {
        if (ok.transition = null, C = 1, a) return a();
      } finally {
        C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
      }
    }
    function Hj() {
      fj = ej.current;
      E(ej);
    }
    function Kk(a, b) {
      a.finishedWork = null;
      a.finishedLanes = 0;
      var c = a.timeoutHandle;
      -1 !== c && (a.timeoutHandle = -1, Gf(c));
      if (null !== Y) for (c = Y.return; null !== c;) {
        var d = c;
        wg(d);
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && $f();
            break;
          case 3:
            zh();
            E(Wf);
            E(H);
            Eh();
            break;
          case 5:
            Bh(d);
            break;
          case 4:
            zh();
            break;
          case 13:
            E(L);
            break;
          case 19:
            E(L);
            break;
          case 10:
            ah(d.type._context);
            break;
          case 22:
          case 23:
            Hj();
        }
        c = c.return;
      }
      Q = a;
      Y = a = Pg(a.current, null);
      Z = fj = b;
      T = 0;
      pk = null;
      rk = qk = rh = 0;
      tk = sk = null;
      if (null !== fh) {
        for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next, f2 = c.pending;
          if (null !== f2) {
            var g = f2.next;
            f2.next = e;
            d.next = g;
          }
          c.pending = d;
        }
        fh = null;
      }
      return a;
    }
    function Mk(a, b) {
      do {
        var c = Y;
        try {
          $g();
          Fh.current = Rh;
          if (Ih) {
            for (var d = M.memoizedState; null !== d;) {
              var e = d.queue;
              null !== e && (e.pending = null);
              d = d.next;
            }
            Ih = false;
          }
          Hh = 0;
          O = N = M = null;
          Jh = false;
          Kh = 0;
          nk.current = null;
          if (null === c || null === c.return) {
            T = 1;
            pk = b;
            Y = null;
            break;
          }
          a: {
            var f2 = a, g = c.return, h = c, k2 = b;
            b = Z;
            h.flags |= 32768;
            if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
              var l2 = k2, m2 = h, q2 = m2.tag;
              if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
                var r2 = m2.alternate;
                r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
              }
              var y2 = Ui(g);
              if (null !== y2) {
                y2.flags &= -257;
                Vi(y2, g, h, f2, b);
                y2.mode & 1 && Si(f2, l2, b);
                b = y2;
                k2 = l2;
                var n2 = b.updateQueue;
                if (null === n2) {
                  var t2 = /* @__PURE__ */ new Set();
                  t2.add(k2);
                  b.updateQueue = t2;
                } else n2.add(k2);
                break a;
              } else {
                if (0 === (b & 1)) {
                  Si(f2, l2, b);
                  tj();
                  break a;
                }
                k2 = Error(p(426));
              }
            } else if (I && h.mode & 1) {
              var J2 = Ui(g);
              if (null !== J2) {
                0 === (J2.flags & 65536) && (J2.flags |= 256);
                Vi(J2, g, h, f2, b);
                Jg(Ji(k2, h));
                break a;
              }
            }
            f2 = k2 = Ji(k2, h);
            4 !== T && (T = 2);
            null === sk ? sk = [f2] : sk.push(f2);
            f2 = g;
            do {
              switch (f2.tag) {
                case 3:
                  f2.flags |= 65536;
                  b &= -b;
                  f2.lanes |= b;
                  var x2 = Ni(f2, k2, b);
                  ph(f2, x2);
                  break a;
                case 1:
                  h = k2;
                  var w2 = f2.type, u2 = f2.stateNode;
                  if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var F2 = Qi(f2, h, b);
                    ph(f2, F2);
                    break a;
                  }
              }
              f2 = f2.return;
            } while (null !== f2);
          }
          Sk(c);
        } catch (na) {
          b = na;
          Y === c && null !== c && (Y = c = c.return);
          continue;
        }
        break;
      } while (1);
    }
    function Jk() {
      var a = mk.current;
      mk.current = Rh;
      return null === a ? Rh : a;
    }
    function tj() {
      if (0 === T || 3 === T || 2 === T) T = 4;
      null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
    }
    function Ik(a, b) {
      var c = K;
      K |= 2;
      var d = Jk();
      if (Q !== a || Z !== b) uk = null, Kk(a, b);
      do
        try {
          Tk();
          break;
        } catch (e) {
          Mk(a, e);
        }
      while (1);
      $g();
      K = c;
      mk.current = d;
      if (null !== Y) throw Error(p(261));
      Q = null;
      Z = 0;
      return T;
    }
    function Tk() {
      for (; null !== Y;) Uk(Y);
    }
    function Lk() {
      for (; null !== Y && !cc();) Uk(Y);
    }
    function Uk(a) {
      var b = Vk(a.alternate, a, fj);
      a.memoizedProps = a.pendingProps;
      null === b ? Sk(a) : Y = b;
      nk.current = null;
    }
    function Sk(a) {
      var b = a;
      do {
        var c = b.alternate;
        a = b.return;
        if (0 === (b.flags & 32768)) {
          if (c = Ej(c, b, fj), null !== c) {
            Y = c;
            return;
          }
        } else {
          c = Ij(c, b);
          if (null !== c) {
            c.flags &= 32767;
            Y = c;
            return;
          }
          if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
          else {
            T = 6;
            Y = null;
            return;
          }
        }
        b = b.sibling;
        if (null !== b) {
          Y = b;
          return;
        }
        Y = b = a;
      } while (null !== b);
      0 === T && (T = 5);
    }
    function Pk(a, b, c) {
      var d = C, e = ok.transition;
      try {
        ok.transition = null, C = 1, Wk(a, b, c, d);
      } finally {
        ok.transition = e, C = d;
      }
      return null;
    }
    function Wk(a, b, c, d) {
      do
        Hk();
      while (null !== wk);
      if (0 !== (K & 6)) throw Error(p(327));
      c = a.finishedWork;
      var e = a.finishedLanes;
      if (null === c) return null;
      a.finishedWork = null;
      a.finishedLanes = 0;
      if (c === a.current) throw Error(p(177));
      a.callbackNode = null;
      a.callbackPriority = 0;
      var f2 = c.lanes | c.childLanes;
      Bc(a, f2);
      a === Q && (Y = Q = null, Z = 0);
      0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function () {
        Hk();
        return null;
      }));
      f2 = 0 !== (c.flags & 15990);
      if (0 !== (c.subtreeFlags & 15990) || f2) {
        f2 = ok.transition;
        ok.transition = null;
        var g = C;
        C = 1;
        var h = K;
        K |= 4;
        nk.current = null;
        Oj(a, c);
        dk(c, a);
        Oe(Df);
        dd = !!Cf;
        Df = Cf = null;
        a.current = c;
        hk(c);
        dc();
        K = h;
        C = g;
        ok.transition = f2;
      } else a.current = c;
      vk && (vk = false, wk = a, xk = e);
      f2 = a.pendingLanes;
      0 === f2 && (Ri = null);
      mc(c.stateNode);
      Dk(a, B());
      if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
      if (Oi) throw Oi = false, a = Pi, Pi = null, a;
      0 !== (xk & 1) && 0 !== a.tag && Hk();
      f2 = a.pendingLanes;
      0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
      jg();
      return null;
    }
    function Hk() {
      if (null !== wk) {
        var a = Dc(xk), b = ok.transition, c = C;
        try {
          ok.transition = null;
          C = 16 > a ? 16 : a;
          if (null === wk) var d = false;
          else {
            a = wk;
            wk = null;
            xk = 0;
            if (0 !== (K & 6)) throw Error(p(331));
            var e = K;
            K |= 4;
            for (V = a.current; null !== V;) {
              var f2 = V, g = f2.child;
              if (0 !== (V.flags & 16)) {
                var h = f2.deletions;
                if (null !== h) {
                  for (var k2 = 0; k2 < h.length; k2++) {
                    var l2 = h[k2];
                    for (V = l2; null !== V;) {
                      var m2 = V;
                      switch (m2.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Pj(8, m2, f2);
                      }
                      var q2 = m2.child;
                      if (null !== q2) q2.return = m2, V = q2;
                      else for (; null !== V;) {
                        m2 = V;
                        var r2 = m2.sibling, y2 = m2.return;
                        Sj(m2);
                        if (m2 === l2) {
                          V = null;
                          break;
                        }
                        if (null !== r2) {
                          r2.return = y2;
                          V = r2;
                          break;
                        }
                        V = y2;
                      }
                    }
                  }
                  var n2 = f2.alternate;
                  if (null !== n2) {
                    var t2 = n2.child;
                    if (null !== t2) {
                      n2.child = null;
                      do {
                        var J2 = t2.sibling;
                        t2.sibling = null;
                        t2 = J2;
                      } while (null !== t2);
                    }
                  }
                  V = f2;
                }
              }
              if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
              else b: for (; null !== V;) {
                f2 = V;
                if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, f2, f2.return);
                }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
            }
            var w2 = a.current;
            for (V = w2; null !== V;) {
              g = V;
              var u2 = g.child;
              if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
              else b: for (g = w2; null !== V;) {
                h = V;
                if (0 !== (h.flags & 2048)) try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h);
                  }
                } catch (na) {
                  W(h, h.return, na);
                }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
            }
            K = e;
            jg();
            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
              lc.onPostCommitFiberRoot(kc, a);
            } catch (na) {
            }
            d = true;
          }
          return d;
        } finally {
          C = c, ok.transition = b;
        }
      }
      return false;
    }
    function Xk(a, b, c) {
      b = Ji(c, b);
      b = Ni(a, b, 1);
      a = nh(a, b, 1);
      b = R();
      null !== a && (Ac(a, 1, b), Dk(a, b));
    }
    function W(a, b, c) {
      if (3 === a.tag) Xk(a, a, c);
      else for (; null !== b;) {
        if (3 === b.tag) {
          Xk(b, a, c);
          break;
        } else if (1 === b.tag) {
          var d = b.stateNode;
          if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
            a = Ji(c, a);
            a = Qi(b, a, 1);
            b = nh(b, a, 1);
            a = R();
            null !== b && (Ac(b, 1, a), Dk(b, a));
            break;
          }
        }
        b = b.return;
      }
    }
    function Ti(a, b, c) {
      var d = a.pingCache;
      null !== d && d.delete(b);
      b = R();
      a.pingedLanes |= a.suspendedLanes & c;
      Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
      Dk(a, b);
    }
    function Yk(a, b) {
      0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
      var c = R();
      a = ih(a, b);
      null !== a && (Ac(a, b, c), Dk(a, c));
    }
    function uj(a) {
      var b = a.memoizedState, c = 0;
      null !== b && (c = b.retryLane);
      Yk(a, c);
    }
    function bk(a, b) {
      var c = 0;
      switch (a.tag) {
        case 13:
          var d = a.stateNode;
          var e = a.memoizedState;
          null !== e && (c = e.retryLane);
          break;
        case 19:
          d = a.stateNode;
          break;
        default:
          throw Error(p(314));
      }
      null !== d && d.delete(b);
      Yk(a, c);
    }
    var Vk;
    Vk = function (a, b, c) {
      if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
      else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
        dh = 0 !== (a.flags & 131072) ? true : false;
      }
      else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
      b.lanes = 0;
      switch (b.tag) {
        case 2:
          var d = b.type;
          ij(a, b);
          a = b.pendingProps;
          var e = Yf(b, H.current);
          ch(b, c);
          e = Nh(null, b, d, a, e, c);
          var f2 = Sh();
          b.flags |= 1;
          "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
          return b;
        case 16:
          d = b.elementType;
          a: {
            ij(a, b);
            a = b.pendingProps;
            e = d._init;
            d = e(d._payload);
            b.type = d;
            e = b.tag = Zk(d);
            a = Ci(d, a);
            switch (e) {
              case 0:
                b = cj(null, b, d, a, c);
                break a;
              case 1:
                b = hj(null, b, d, a, c);
                break a;
              case 11:
                b = Yi(null, b, d, a, c);
                break a;
              case 14:
                b = $i(null, b, d, Ci(d.type, a), c);
                break a;
            }
            throw Error(p(
              306,
              d,
              ""
            ));
          }
          return b;
        case 0:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
        case 1:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
        case 3:
          a: {
            kj(b);
            if (null === a) throw Error(p(387));
            d = b.pendingProps;
            f2 = b.memoizedState;
            e = f2.element;
            lh(a, b);
            qh(b, d, null, c);
            var g = b.memoizedState;
            d = g.element;
            if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
              e = Ji(Error(p(423)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ji(Error(p(424)), b);
              b = lj(a, b, d, c, e);
              break a;
            } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
            else {
              Ig();
              if (d === e) {
                b = Zi(a, b, c);
                break a;
              }
              Xi(a, b, d, c);
            }
            b = b.child;
          }
          return b;
        case 5:
          return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
        case 6:
          return null === a && Eg(b), null;
        case 13:
          return oj(a, b, c);
        case 4:
          return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
        case 11:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
        case 7:
          return Xi(a, b, b.pendingProps, c), b.child;
        case 8:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 12:
          return Xi(a, b, b.pendingProps.children, c), b.child;
        case 10:
          a: {
            d = b.type._context;
            e = b.pendingProps;
            f2 = b.memoizedProps;
            g = e.value;
            G(Wg, d._currentValue);
            d._currentValue = g;
            if (null !== f2) if (He(f2.value, g)) {
              if (f2.children === e.children && !Wf.current) {
                b = Zi(a, b, c);
                break a;
              }
            } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2;) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2;) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = mh(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    bh(
                      f2.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g) throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                bh(g, c, b);
                g = f2.sibling;
              } else g = f2.child;
              if (null !== g) g.return = f2;
              else for (g = f2; null !== g;) {
                if (g === b) {
                  g = null;
                  break;
                }
                f2 = g.sibling;
                if (null !== f2) {
                  f2.return = g.return;
                  g = f2;
                  break;
                }
                g = g.return;
              }
              f2 = g;
            }
            Xi(a, b, e.children, c);
            b = b.child;
          }
          return b;
        case 9:
          return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
        case 14:
          return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
        case 15:
          return bj(a, b, b.type, b.pendingProps, c);
        case 17:
          return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
        case 19:
          return xj(a, b, c);
        case 22:
          return dj(a, b, c);
      }
      throw Error(p(156, b.tag));
    };
    function Fk(a, b) {
      return ac(a, b);
    }
    function $k(a, b, c, d) {
      this.tag = a;
      this.key = c;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.ref = null;
      this.pendingProps = b;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = d;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function Bg(a, b, c, d) {
      return new $k(a, b, c, d);
    }
    function aj(a) {
      a = a.prototype;
      return !(!a || !a.isReactComponent);
    }
    function Zk(a) {
      if ("function" === typeof a) return aj(a) ? 1 : 0;
      if (void 0 !== a && null !== a) {
        a = a.$$typeof;
        if (a === Da) return 11;
        if (a === Ga) return 14;
      }
      return 2;
    }
    function Pg(a, b) {
      var c = a.alternate;
      null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
      c.flags = a.flags & 14680064;
      c.childLanes = a.childLanes;
      c.lanes = a.lanes;
      c.child = a.child;
      c.memoizedProps = a.memoizedProps;
      c.memoizedState = a.memoizedState;
      c.updateQueue = a.updateQueue;
      b = a.dependencies;
      c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
      c.sibling = a.sibling;
      c.index = a.index;
      c.ref = a.ref;
      return c;
    }
    function Rg(a, b, c, d, e, f2) {
      var g = 2;
      d = a;
      if ("function" === typeof a) aj(a) && (g = 1);
      else if ("string" === typeof a) g = 5;
      else a: switch (a) {
        case ya:
          return Tg(c.children, e, f2, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return pj(c, e, f2, b);
        default:
          if ("object" === typeof a && null !== a) switch (a.$$typeof) {
            case Ba:
              g = 10;
              break a;
            case Ca:
              g = 9;
              break a;
            case Da:
              g = 11;
              break a;
            case Ga:
              g = 14;
              break a;
            case Ha:
              g = 16;
              d = null;
              break a;
          }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
      b = Bg(g, c, b, e);
      b.elementType = a;
      b.type = d;
      b.lanes = f2;
      return b;
    }
    function Tg(a, b, c, d) {
      a = Bg(7, a, d, b);
      a.lanes = c;
      return a;
    }
    function pj(a, b, c, d) {
      a = Bg(22, a, d, b);
      a.elementType = Ia;
      a.lanes = c;
      a.stateNode = { isHidden: false };
      return a;
    }
    function Qg(a, b, c) {
      a = Bg(6, a, null, b);
      a.lanes = c;
      return a;
    }
    function Sg(a, b, c) {
      b = Bg(4, null !== a.children ? a.children : [], a.key, b);
      b.lanes = c;
      b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
      return b;
    }
    function al(a, b, c, d, e) {
      this.tag = b;
      this.containerInfo = a;
      this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.pendingContext = this.context = null;
      this.callbackPriority = 0;
      this.eventTimes = zc(0);
      this.expirationTimes = zc(-1);
      this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = zc(0);
      this.identifierPrefix = d;
      this.onRecoverableError = e;
      this.mutableSourceEagerHydrationData = null;
    }
    function bl(a, b, c, d, e, f2, g, h, k2) {
      a = new al(a, b, c, h, k2);
      1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
      f2 = Bg(3, null, null, b);
      a.current = f2;
      f2.stateNode = a;
      f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
      kh(f2);
      return a;
    }
    function cl(a, b, c) {
      var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
    }
    function dl(a) {
      if (!a) return Vf;
      a = a._reactInternals;
      a: {
        if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
        var b = a;
        do {
          switch (b.tag) {
            case 3:
              b = b.stateNode.context;
              break a;
            case 1:
              if (Zf(b.type)) {
                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          b = b.return;
        } while (null !== b);
        throw Error(p(171));
      }
      if (1 === a.tag) {
        var c = a.type;
        if (Zf(c)) return bg(a, c, b);
      }
      return b;
    }
    function el(a, b, c, d, e, f2, g, h, k2) {
      a = bl(c, d, true, a, e, f2, g, h, k2);
      a.context = dl(null);
      c = a.current;
      d = R();
      e = yi(c);
      f2 = mh(d, e);
      f2.callback = void 0 !== b && null !== b ? b : null;
      nh(c, f2, e);
      a.current.lanes = e;
      Ac(a, e, d);
      Dk(a, d);
      return a;
    }
    function fl(a, b, c, d) {
      var e = b.current, f2 = R(), g = yi(e);
      c = dl(c);
      null === b.context ? b.context = c : b.pendingContext = c;
      b = mh(f2, g);
      b.payload = { element: a };
      d = void 0 === d ? null : d;
      null !== d && (b.callback = d);
      a = nh(e, b, g);
      null !== a && (gi(a, e, g, f2), oh(a, e, g));
      return g;
    }
    function gl(a) {
      a = a.current;
      if (!a.child) return null;
      switch (a.child.tag) {
        case 5:
          return a.child.stateNode;
        default:
          return a.child.stateNode;
      }
    }
    function hl(a, b) {
      a = a.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        var c = a.retryLane;
        a.retryLane = 0 !== c && c < b ? c : b;
      }
    }
    function il(a, b) {
      hl(a, b);
      (a = a.alternate) && hl(a, b);
    }
    function jl() {
      return null;
    }
    var kl = "function" === typeof reportError ? reportError : function (a) {
      console.error(a);
    };
    function ll(a) {
      this._internalRoot = a;
    }
    ml.prototype.render = ll.prototype.render = function (a) {
      var b = this._internalRoot;
      if (null === b) throw Error(p(409));
      fl(a, b, null, null);
    };
    ml.prototype.unmount = ll.prototype.unmount = function () {
      var a = this._internalRoot;
      if (null !== a) {
        this._internalRoot = null;
        var b = a.containerInfo;
        Rk(function () {
          fl(null, a, null, null);
        });
        b[uf] = null;
      }
    };
    function ml(a) {
      this._internalRoot = a;
    }
    ml.prototype.unstable_scheduleHydration = function (a) {
      if (a) {
        var b = Hc();
        a = { blockedOn: null, target: a, priority: b };
        for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
        Qc.splice(c, 0, a);
        0 === c && Vc(a);
      }
    };
    function nl(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
    }
    function ol(a) {
      return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
    }
    function pl() {
    }
    function ql(a, b, c, d, e) {
      if (e) {
        if ("function" === typeof d) {
          var f2 = d;
          d = function () {
            var a2 = gl(g);
            f2.call(a2);
          };
        }
        var g = el(b, d, a, 0, null, false, false, "", pl);
        a._reactRootContainer = g;
        a[uf] = g.current;
        sf(8 === a.nodeType ? a.parentNode : a);
        Rk();
        return g;
      }
      for (; e = a.lastChild;) a.removeChild(e);
      if ("function" === typeof d) {
        var h = d;
        d = function () {
          var a2 = gl(k2);
          h.call(a2);
        };
      }
      var k2 = bl(a, 0, false, null, null, false, false, "", pl);
      a._reactRootContainer = k2;
      a[uf] = k2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk(function () {
        fl(b, k2, c, d);
      });
      return k2;
    }
    function rl(a, b, c, d, e) {
      var f2 = c._reactRootContainer;
      if (f2) {
        var g = f2;
        if ("function" === typeof e) {
          var h = e;
          e = function () {
            var a2 = gl(g);
            h.call(a2);
          };
        }
        fl(b, g, a, e);
      } else g = ql(c, b, a, e, d);
      return gl(g);
    }
    Ec = function (a) {
      switch (a.tag) {
        case 3:
          var b = a.stateNode;
          if (b.current.memoizedState.isDehydrated) {
            var c = tc(b.pendingLanes);
            0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
          }
          break;
        case 13:
          Rk(function () {
            var b2 = ih(a, 1);
            if (null !== b2) {
              var c2 = R();
              gi(b2, a, 1, c2);
            }
          }), il(a, 1);
      }
    };
    Fc = function (a) {
      if (13 === a.tag) {
        var b = ih(a, 134217728);
        if (null !== b) {
          var c = R();
          gi(b, a, 134217728, c);
        }
        il(a, 134217728);
      }
    };
    Gc = function (a) {
      if (13 === a.tag) {
        var b = yi(a), c = ih(a, b);
        if (null !== c) {
          var d = R();
          gi(c, a, b, d);
        }
        il(a, b);
      }
    };
    Hc = function () {
      return C;
    };
    Ic = function (a, b) {
      var c = C;
      try {
        return C = a, b();
      } finally {
        C = c;
      }
    };
    yb = function (a, b, c) {
      switch (b) {
        case "input":
          bb(a, c);
          b = c.name;
          if ("radio" === c.type && null != b) {
            for (c = a; c.parentNode;) c = c.parentNode;
            c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
            for (b = 0; b < c.length; b++) {
              var d = c[b];
              if (d !== a && d.form === a.form) {
                var e = Db(d);
                if (!e) throw Error(p(90));
                Wa(d);
                bb(d, e);
              }
            }
          }
          break;
        case "textarea":
          ib(a, c);
          break;
        case "select":
          b = c.value, null != b && fb(a, !!c.multiple, b, false);
      }
    };
    Gb = Qk;
    Hb = Rk;
    var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
    var ul = {
      bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function (a) {
        a = Zb(a);
        return null === a ? null : a.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!vl.isDisabled && vl.supportsFiber) try {
        kc = vl.inject(ul), lc = vl;
      } catch (a) {
      }
    }
    reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
    reactDom_production_min.createPortal = function (a, b) {
      var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!nl(b)) throw Error(p(200));
      return cl(a, b, null, c);
    };
    reactDom_production_min.createRoot = function (a, b) {
      if (!nl(a)) throw Error(p(299));
      var c = false, d = "", e = kl;
      null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
      b = bl(a, 1, false, null, null, c, false, d, e);
      a[uf] = b.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      return new ll(b);
    };
    reactDom_production_min.findDOMNode = function (a) {
      if (null == a) return null;
      if (1 === a.nodeType) return a;
      var b = a._reactInternals;
      if (void 0 === b) {
        if ("function" === typeof a.render) throw Error(p(188));
        a = Object.keys(a).join(",");
        throw Error(p(268, a));
      }
      a = Zb(b);
      a = null === a ? null : a.stateNode;
      return a;
    };
    reactDom_production_min.flushSync = function (a) {
      return Rk(a);
    };
    reactDom_production_min.hydrate = function (a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, true, c);
    };
    reactDom_production_min.hydrateRoot = function (a, b, c) {
      if (!nl(a)) throw Error(p(405));
      var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
      null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
      b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
      a[uf] = b.current;
      sf(a);
      if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
      return new ml(b);
    };
    reactDom_production_min.render = function (a, b, c) {
      if (!ol(b)) throw Error(p(200));
      return rl(null, a, b, false, c);
    };
    reactDom_production_min.unmountComponentAtNode = function (a) {
      if (!ol(a)) throw Error(p(40));
      return a._reactRootContainer ? (Rk(function () {
        rl(null, null, a, false, function () {
          a._reactRootContainer = null;
          a[uf] = null;
        });
      }), true) : false;
    };
    reactDom_production_min.unstable_batchedUpdates = Qk;
    reactDom_production_min.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
      if (!ol(c)) throw Error(p(200));
      if (null == a || void 0 === a._reactInternals) throw Error(p(38));
      return rl(a, b, c, false, d);
    };
    reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    {
      checkDCE();
      reactDom.exports = reactDom_production_min;
    }
    var reactDomExports = reactDom.exports;
    var createRoot;
    var m = reactDomExports;
    {
      createRoot = m.createRoot;
      m.hydrateRoot;
    }
    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d2, b2) {
        d2.__proto__ = b2;
      } || function (d2, b2) {
        for (var p2 in b2) if (Object.prototype.hasOwnProperty.call(b2, p2)) d2[p2] = b2[p2];
      };
      return extendStatics(d, b);
    };
    function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
      __assign = Object.assign || function __assign2(t2) {
        for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
          s = arguments[i];
          for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2)) t2[p2] = s[p2];
        }
        return t2;
      };
      return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t2 = {};
      for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
        t2[p2] = s[p2];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p2 = Object.getOwnPropertySymbols(s); i < p2.length; i++) {
          if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i]))
            t2[p2[i]] = s[p2[i]];
        }
      return t2;
    }
    function __awaiter(thisArg, _arguments, P2, generator) {
      function adopt(value) {
        return value instanceof P2 ? value : new P2(function (resolve) {
          resolve(value);
        });
      }
      return new (P2 || (P2 = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
        label: 0, sent: function () {
          if (t2[0] & 1) throw t2[1];
          return t2[1];
        }, trys: [], ops: []
      }, f2, y2, t2, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n2) {
        return function (v2) {
          return step([n2, v2]);
        };
      }
      function step(op) {
        if (f2) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
          if (y2 = 0, t2) op = [op[0] & 2, t2.value];
          switch (op[0]) {
            case 0:
            case 1:
              t2 = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y2 = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t2[1]) {
                _.label = t2[1];
                t2 = op;
                break;
              }
              if (t2 && _.label < t2[2]) {
                _.label = t2[2];
                _.ops.push(op);
                break;
              }
              if (t2[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y2 = 0;
        } finally {
            f2 = t2 = 0;
          }
        if (op[0] & 5) throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l2 = from.length, ar; i < l2; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    var genericMessage = "Invariant Violation";
    var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
      obj.__proto__ = proto;
      return obj;
    } : _a;
    var InvariantError = (
      /** @class */
      function (_super) {
        __extends(InvariantError2, _super);
        function InvariantError2(message) {
          if (message === void 0) {
            message = genericMessage;
          }
          var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
          _this.framesToPop = 1;
          _this.name = genericMessage;
          setPrototypeOf(_this, InvariantError2.prototype);
          return _this;
        }
        return InvariantError2;
      }(Error)
    );
    function invariant$2(condition, message) {
      if (!condition) {
        throw new InvariantError(message);
      }
    }
    var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
    var verbosityLevel = verbosityLevels.indexOf("log");
    function wrapConsoleMethod(name) {
      return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
          var method = console[name] || console.log;
          return method.apply(console, arguments);
        }
      };
    }
    (function (invariant2) {
      invariant2.debug = wrapConsoleMethod("debug");
      invariant2.log = wrapConsoleMethod("log");
      invariant2.warn = wrapConsoleMethod("warn");
      invariant2.error = wrapConsoleMethod("error");
    })(invariant$2 || (invariant$2 = {}));
    var version = "3.13.8";
    function maybe$1(thunk) {
      try {
        return thunk();
      } catch (_a2) {
      }
    }
    const global$1 = maybe$1(function () {
      return globalThis;
    }) || maybe$1(function () {
      return window;
    }) || maybe$1(function () {
      return self;
    }) || maybe$1(function () {
      return global;
    }) || // We don't expect the Function constructor ever to be invoked at runtime, as
      // long as at least one of globalThis, window, self, or global is defined, so
      // we are under no obligation to make it easy for static analysis tools to
      // detect syntactic usage of the Function constructor. If you think you can
      // improve your static analysis to detect this obfuscation, think again. This
      // is an arms race you cannot win, at least not in JavaScript.
      maybe$1(function () {
        return maybe$1.constructor("return this")();
      });
    var prefixCounts = /* @__PURE__ */ new Map();
    function makeUniqueId(prefix) {
      var count = prefixCounts.get(prefix) || 1;
      prefixCounts.set(prefix, count + 1);
      return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
    }
    function stringifyForDisplay(value, space) {
      if (space === void 0) {
        space = 0;
      }
      var undefId = makeUniqueId("stringifyForDisplay");
      return JSON.stringify(value, function (key, value2) {
        return value2 === void 0 ? undefId : value2;
      }, space).split(JSON.stringify(undefId)).join("<undefined>");
    }
    function wrap$2(fn) {
      return function (message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (typeof message === "number") {
          var arg0 = message;
          message = getHandledErrorMsg(arg0);
          if (!message) {
            message = getFallbackErrorMsg(arg0, args);
            args = [];
          }
        }
        fn.apply(void 0, [message].concat(args));
      };
    }
    var invariant$1 = Object.assign(function invariant2(condition, message) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      if (!condition) {
        invariant$2(condition, getHandledErrorMsg(message, args) || getFallbackErrorMsg(message, args));
      }
    }, {
      debug: wrap$2(invariant$2.debug),
      log: wrap$2(invariant$2.log),
      warn: wrap$2(invariant$2.warn),
      error: wrap$2(invariant$2.error)
    });
    function newInvariantError(message) {
      var optionalParams = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
      }
      return new InvariantError(getHandledErrorMsg(message, optionalParams) || getFallbackErrorMsg(message, optionalParams));
    }
    var ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + version);
    function stringify(arg) {
      if (typeof arg == "string") {
        return arg;
      }
      try {
        return stringifyForDisplay(arg, 2).slice(0, 1e3);
      } catch (_a2) {
        return "<non-serializable>";
      }
    }
    function getHandledErrorMsg(message, messageArgs) {
      if (messageArgs === void 0) {
        messageArgs = [];
      }
      if (!message)
        return;
      return global$1[ApolloErrorMessageHandler] && global$1[ApolloErrorMessageHandler](message, messageArgs.map(stringify));
    }
    function getFallbackErrorMsg(message, messageArgs) {
      if (messageArgs === void 0) {
        messageArgs = [];
      }
      if (!message)
        return;
      return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
        version,
        message,
        args: messageArgs.map(stringify)
      })));
    }
    function devAssert(condition, message) {
      const booleanCondition = Boolean(condition);
      if (!booleanCondition) {
        throw new Error(message);
      }
    }
    function isObjectLike(value) {
      return typeof value == "object" && value !== null;
    }
    function invariant(condition, message) {
      const booleanCondition = Boolean(condition);
      if (!booleanCondition) {
        throw new Error(
          "Unexpected invariant triggered."
        );
      }
    }
    const LineRegExp = /\r\n|[\n\r]/g;
    function getLocation(source, position) {
      let lastLineStart = 0;
      let line = 1;
      for (const match of source.body.matchAll(LineRegExp)) {
        typeof match.index === "number" || invariant(false);
        if (match.index >= position) {
          break;
        }
        lastLineStart = match.index + match[0].length;
        line += 1;
      }
      return {
        line,
        column: position + 1 - lastLineStart
      };
    }
    function printLocation(location) {
      return printSourceLocation(
        location.source,
        getLocation(location.source, location.start)
      );
    }
    function printSourceLocation(source, sourceLocation) {
      const firstLineColumnOffset = source.locationOffset.column - 1;
      const body = "".padStart(firstLineColumnOffset) + source.body;
      const lineIndex = sourceLocation.line - 1;
      const lineOffset = source.locationOffset.line - 1;
      const lineNum = sourceLocation.line + lineOffset;
      const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
      const columnNum = sourceLocation.column + columnOffset;
      const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
      const lines = body.split(/\r\n|[\n\r]/g);
      const locationLine = lines[lineIndex];
      if (locationLine.length > 120) {
        const subLineIndex = Math.floor(columnNum / 80);
        const subLineColumnNum = columnNum % 80;
        const subLines = [];
        for (let i = 0; i < locationLine.length; i += 80) {
          subLines.push(locationLine.slice(i, i + 80));
        }
        return locationStr + printPrefixedLines([
          [`${lineNum} |`, subLines[0]],
          ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
          ["|", "^".padStart(subLineColumnNum)],
          ["|", subLines[subLineIndex + 1]]
        ]);
      }
      return locationStr + printPrefixedLines([
        // Lines specified like this: ["prefix", "string"],
        [`${lineNum - 1} |`, lines[lineIndex - 1]],
        [`${lineNum} |`, locationLine],
        ["|", "^".padStart(columnNum)],
        [`${lineNum + 1} |`, lines[lineIndex + 1]]
      ]);
    }
    function printPrefixedLines(lines) {
      const existingLines = lines.filter(([_, line]) => line !== void 0);
      const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
      return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
    }
    function toNormalizedOptions(args) {
      const firstArg = args[0];
      if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
        return {
          nodes: firstArg,
          source: args[1],
          positions: args[2],
          path: args[3],
          originalError: args[4],
          extensions: args[5]
        };
      }
      return firstArg;
    }
    class GraphQLError extends Error {
      /**
       * An array of `{ line, column }` locations within the source GraphQL document
       * which correspond to this error.
       *
       * Errors during validation often contain multiple locations, for example to
       * point out two things with the same name. Errors during execution include a
       * single location, the field which produced the error.
       *
       * Enumerable, and appears in the result of JSON.stringify().
       */
      /**
       * An array describing the JSON-path into the execution response which
       * corresponds to this error. Only included for errors during execution.
       *
       * Enumerable, and appears in the result of JSON.stringify().
       */
      /**
       * An array of GraphQL AST Nodes corresponding to this error.
       */
      /**
       * The source GraphQL document for the first location of this error.
       *
       * Note that if this Error represents more than one node, the source may not
       * represent nodes after the first node.
       */
      /**
       * An array of character offsets within the source GraphQL document
       * which correspond to this error.
       */
      /**
       * The original error thrown from a field resolver during execution.
       */
      /**
       * Extension fields to add to the formatted error.
       */
      /**
       * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
       */
      constructor(message, ...rawArgs) {
        var _this$nodes, _nodeLocations$, _ref;
        const { nodes, source, positions, path, originalError, extensions } = toNormalizedOptions(rawArgs);
        super(message);
        this.name = "GraphQLError";
        this.path = path !== null && path !== void 0 ? path : void 0;
        this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
        this.nodes = undefinedIfEmpty(
          Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
        );
        const nodeLocations = undefinedIfEmpty(
          (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
        );
        this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
        this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
        this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
        const originalExtensions = isObjectLike(
          originalError === null || originalError === void 0 ? void 0 : originalError.extensions
        ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
        this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
        Object.defineProperties(this, {
          message: {
            writable: true,
            enumerable: true
          },
          name: {
            enumerable: false
          },
          nodes: {
            enumerable: false
          },
          source: {
            enumerable: false
          },
          positions: {
            enumerable: false
          },
          originalError: {
            enumerable: false
          }
        });
        if (originalError !== null && originalError !== void 0 && originalError.stack) {
          Object.defineProperty(this, "stack", {
            value: originalError.stack,
            writable: true,
            configurable: true
          });
        } else if (Error.captureStackTrace) {
          Error.captureStackTrace(this, GraphQLError);
        } else {
          Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: true,
            configurable: true
          });
        }
      }
      get [Symbol.toStringTag]() {
        return "GraphQLError";
      }
      toString() {
        let output = this.message;
        if (this.nodes) {
          for (const node of this.nodes) {
            if (node.loc) {
              output += "\n\n" + printLocation(node.loc);
            }
          }
        } else if (this.source && this.locations) {
          for (const location of this.locations) {
            output += "\n\n" + printSourceLocation(this.source, location);
          }
        }
        return output;
      }
      toJSON() {
        const formattedError = {
          message: this.message
        };
        if (this.locations != null) {
          formattedError.locations = this.locations;
        }
        if (this.path != null) {
          formattedError.path = this.path;
        }
        if (this.extensions != null && Object.keys(this.extensions).length > 0) {
          formattedError.extensions = this.extensions;
        }
        return formattedError;
      }
    }
    function undefinedIfEmpty(array) {
      return array === void 0 || array.length === 0 ? void 0 : array;
    }
    function syntaxError(source, position, description) {
      return new GraphQLError(`Syntax Error: ${description}`, {
        source,
        positions: [position]
      });
    }
    class Location {
      /**
       * The character offset at which this Node begins.
       */
      /**
       * The character offset at which this Node ends.
       */
      /**
       * The Token at which this Node begins.
       */
      /**
       * The Token at which this Node ends.
       */
      /**
       * The Source document the AST represents.
       */
      constructor(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
      }
      get [Symbol.toStringTag]() {
        return "Location";
      }
      toJSON() {
        return {
          start: this.start,
          end: this.end
        };
      }
    }
    class Token {
      /**
       * The kind of Token.
       */
      /**
       * The character offset at which this Node begins.
       */
      /**
       * The character offset at which this Node ends.
       */
      /**
       * The 1-indexed line number on which this Token appears.
       */
      /**
       * The 1-indexed column number at which this Token begins.
       */
      /**
       * For non-punctuation tokens, represents the interpreted value of the token.
       *
       * Note: is undefined for punctuation tokens, but typed as string for
       * convenience in the parser.
       */
      /**
       * Tokens exist as nodes in a double-linked-list amongst all tokens
       * including ignored tokens. <SOF> is always the first node and <EOF>
       * the last.
       */
      constructor(kind, start, end, line, column, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = null;
        this.next = null;
      }
      get [Symbol.toStringTag]() {
        return "Token";
      }
      toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        };
      }
    }
    const QueryDocumentKeys = {
      Name: [],
      Document: ["definitions"],
      OperationDefinition: [
        "name",
        "variableDefinitions",
        "directives",
        "selectionSet"
      ],
      VariableDefinition: ["variable", "type", "defaultValue", "directives"],
      Variable: ["name"],
      SelectionSet: ["selections"],
      Field: ["alias", "name", "arguments", "directives", "selectionSet"],
      Argument: ["name", "value"],
      FragmentSpread: ["name", "directives"],
      InlineFragment: ["typeCondition", "directives", "selectionSet"],
      FragmentDefinition: [
        "name",
        // Note: fragment variable definitions are deprecated and will removed in v17.0.0
        "variableDefinitions",
        "typeCondition",
        "directives",
        "selectionSet"
      ],
      IntValue: [],
      FloatValue: [],
      StringValue: [],
      BooleanValue: [],
      NullValue: [],
      EnumValue: [],
      ListValue: ["values"],
      ObjectValue: ["fields"],
      ObjectField: ["name", "value"],
      Directive: ["name", "arguments"],
      NamedType: ["name"],
      ListType: ["type"],
      NonNullType: ["type"],
      SchemaDefinition: ["description", "directives", "operationTypes"],
      OperationTypeDefinition: ["type"],
      ScalarTypeDefinition: ["description", "name", "directives"],
      ObjectTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
      ],
      FieldDefinition: ["description", "name", "arguments", "type", "directives"],
      InputValueDefinition: [
        "description",
        "name",
        "type",
        "defaultValue",
        "directives"
      ],
      InterfaceTypeDefinition: [
        "description",
        "name",
        "interfaces",
        "directives",
        "fields"
      ],
      UnionTypeDefinition: ["description", "name", "directives", "types"],
      EnumTypeDefinition: ["description", "name", "directives", "values"],
      EnumValueDefinition: ["description", "name", "directives"],
      InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
      DirectiveDefinition: ["description", "name", "arguments", "locations"],
      SchemaExtension: ["directives", "operationTypes"],
      ScalarTypeExtension: ["name", "directives"],
      ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
      InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
      UnionTypeExtension: ["name", "directives", "types"],
      EnumTypeExtension: ["name", "directives", "values"],
      InputObjectTypeExtension: ["name", "directives", "fields"]
    };
    const kindValues = new Set(Object.keys(QueryDocumentKeys));
    function isNode(maybeNode) {
      const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
      return typeof maybeKind === "string" && kindValues.has(maybeKind);
    }
    var OperationTypeNode;
    (function (OperationTypeNode2) {
      OperationTypeNode2["QUERY"] = "query";
      OperationTypeNode2["MUTATION"] = "mutation";
      OperationTypeNode2["SUBSCRIPTION"] = "subscription";
    })(OperationTypeNode || (OperationTypeNode = {}));
    var DirectiveLocation;
    (function (DirectiveLocation2) {
      DirectiveLocation2["QUERY"] = "QUERY";
      DirectiveLocation2["MUTATION"] = "MUTATION";
      DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
      DirectiveLocation2["FIELD"] = "FIELD";
      DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
      DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
      DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
      DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
      DirectiveLocation2["SCHEMA"] = "SCHEMA";
      DirectiveLocation2["SCALAR"] = "SCALAR";
      DirectiveLocation2["OBJECT"] = "OBJECT";
      DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
      DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
      DirectiveLocation2["INTERFACE"] = "INTERFACE";
      DirectiveLocation2["UNION"] = "UNION";
      DirectiveLocation2["ENUM"] = "ENUM";
      DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
      DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
      DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
    })(DirectiveLocation || (DirectiveLocation = {}));
    var Kind;
    (function (Kind2) {
      Kind2["NAME"] = "Name";
      Kind2["DOCUMENT"] = "Document";
      Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
      Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
      Kind2["SELECTION_SET"] = "SelectionSet";
      Kind2["FIELD"] = "Field";
      Kind2["ARGUMENT"] = "Argument";
      Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
      Kind2["INLINE_FRAGMENT"] = "InlineFragment";
      Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
      Kind2["VARIABLE"] = "Variable";
      Kind2["INT"] = "IntValue";
      Kind2["FLOAT"] = "FloatValue";
      Kind2["STRING"] = "StringValue";
      Kind2["BOOLEAN"] = "BooleanValue";
      Kind2["NULL"] = "NullValue";
      Kind2["ENUM"] = "EnumValue";
      Kind2["LIST"] = "ListValue";
      Kind2["OBJECT"] = "ObjectValue";
      Kind2["OBJECT_FIELD"] = "ObjectField";
      Kind2["DIRECTIVE"] = "Directive";
      Kind2["NAMED_TYPE"] = "NamedType";
      Kind2["LIST_TYPE"] = "ListType";
      Kind2["NON_NULL_TYPE"] = "NonNullType";
      Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
      Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
      Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
      Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
      Kind2["FIELD_DEFINITION"] = "FieldDefinition";
      Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
      Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
      Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
      Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
      Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
      Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
      Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
      Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
      Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
      Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
      Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
      Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
      Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
      Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
    })(Kind || (Kind = {}));
    function isWhiteSpace(code) {
      return code === 9 || code === 32;
    }
    function isDigit(code) {
      return code >= 48 && code <= 57;
    }
    function isLetter(code) {
      return code >= 97 && code <= 122 || // A-Z
        code >= 65 && code <= 90;
    }
    function isNameStart(code) {
      return isLetter(code) || code === 95;
    }
    function isNameContinue(code) {
      return isLetter(code) || isDigit(code) || code === 95;
    }
    function dedentBlockStringLines(lines) {
      var _firstNonEmptyLine2;
      let commonIndent = Number.MAX_SAFE_INTEGER;
      let firstNonEmptyLine = null;
      let lastNonEmptyLine = -1;
      for (let i = 0; i < lines.length; ++i) {
        var _firstNonEmptyLine;
        const line = lines[i];
        const indent2 = leadingWhitespace(line);
        if (indent2 === line.length) {
          continue;
        }
        firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i;
        lastNonEmptyLine = i;
        if (i !== 0 && indent2 < commonIndent) {
          commonIndent = indent2;
        }
      }
      return lines.map((line, i) => i === 0 ? line : line.slice(commonIndent)).slice(
        (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
        lastNonEmptyLine + 1
      );
    }
    function leadingWhitespace(str) {
      let i = 0;
      while (i < str.length && isWhiteSpace(str.charCodeAt(i))) {
        ++i;
      }
      return i;
    }
    function printBlockString(value, options) {
      const escapedValue = value.replace(/"""/g, '\\"""');
      const lines = escapedValue.split(/\r\n|[\n\r]/g);
      const isSingleLine = lines.length === 1;
      const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
      const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
      const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
      const hasTrailingSlash = value.endsWith("\\");
      const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
      const printAsMultipleLines = (
        // add leading and trailing new lines only if it improves readability
        !isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes
      );
      let result = "";
      const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
      if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
        result += "\n";
      }
      result += escapedValue;
      if (printAsMultipleLines || forceTrailingNewline) {
        result += "\n";
      }
      return '"""' + result + '"""';
    }
    var TokenKind;
    (function (TokenKind2) {
      TokenKind2["SOF"] = "<SOF>";
      TokenKind2["EOF"] = "<EOF>";
      TokenKind2["BANG"] = "!";
      TokenKind2["DOLLAR"] = "$";
      TokenKind2["AMP"] = "&";
      TokenKind2["PAREN_L"] = "(";
      TokenKind2["PAREN_R"] = ")";
      TokenKind2["SPREAD"] = "...";
      TokenKind2["COLON"] = ":";
      TokenKind2["EQUALS"] = "=";
      TokenKind2["AT"] = "@";
      TokenKind2["BRACKET_L"] = "[";
      TokenKind2["BRACKET_R"] = "]";
      TokenKind2["BRACE_L"] = "{";
      TokenKind2["PIPE"] = "|";
      TokenKind2["BRACE_R"] = "}";
      TokenKind2["NAME"] = "Name";
      TokenKind2["INT"] = "Int";
      TokenKind2["FLOAT"] = "Float";
      TokenKind2["STRING"] = "String";
      TokenKind2["BLOCK_STRING"] = "BlockString";
      TokenKind2["COMMENT"] = "Comment";
    })(TokenKind || (TokenKind = {}));
    class Lexer {
      /**
       * The previously focused non-ignored token.
       */
      /**
       * The currently focused non-ignored token.
       */
      /**
       * The (1-indexed) line containing the current token.
       */
      /**
       * The character offset at which the current line begins.
       */
      constructor(source) {
        const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
      }
      get [Symbol.toStringTag]() {
        return "Lexer";
      }
      /**
       * Advances the token stream to the next non-ignored token.
       */
      advance() {
        this.lastToken = this.token;
        const token = this.token = this.lookahead();
        return token;
      }
      /**
       * Looks ahead and returns the next non-ignored token, but does not change
       * the state of Lexer.
       */
      lookahead() {
        let token = this.token;
        if (token.kind !== TokenKind.EOF) {
          do {
            if (token.next) {
              token = token.next;
            } else {
              const nextToken = readNextToken(this, token.end);
              token.next = nextToken;
              nextToken.prev = token;
              token = nextToken;
            }
          } while (token.kind === TokenKind.COMMENT);
        }
        return token;
      }
    }
    function isPunctuatorTokenKind(kind) {
      return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
    }
    function isUnicodeScalarValue(code) {
      return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
    }
    function isSupplementaryCodePoint(body, location) {
      return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
    }
    function isLeadingSurrogate(code) {
      return code >= 55296 && code <= 56319;
    }
    function isTrailingSurrogate(code) {
      return code >= 56320 && code <= 57343;
    }
    function printCodePointAt(lexer, location) {
      const code = lexer.source.body.codePointAt(location);
      if (code === void 0) {
        return TokenKind.EOF;
      } else if (code >= 32 && code <= 126) {
        const char = String.fromCodePoint(code);
        return char === '"' ? `'"'` : `"${char}"`;
      }
      return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
    }
    function createToken(lexer, kind, start, end, value) {
      const line = lexer.line;
      const col = 1 + start - lexer.lineStart;
      return new Token(kind, start, end, line, col, value);
    }
    function readNextToken(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let position = start;
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        switch (code) {
          case 65279:
          case 9:
          case 32:
          case 44:
            ++position;
            continue;
          case 10:
            ++position;
            ++lexer.line;
            lexer.lineStart = position;
            continue;
          case 13:
            if (body.charCodeAt(position + 1) === 10) {
              position += 2;
            } else {
              ++position;
            }
            ++lexer.line;
            lexer.lineStart = position;
            continue;
          case 35:
            return readComment(lexer, position);
          case 33:
            return createToken(lexer, TokenKind.BANG, position, position + 1);
          case 36:
            return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
          case 38:
            return createToken(lexer, TokenKind.AMP, position, position + 1);
          case 40:
            return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
          case 41:
            return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
          case 46:
            if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
              return createToken(lexer, TokenKind.SPREAD, position, position + 3);
            }
            break;
          case 58:
            return createToken(lexer, TokenKind.COLON, position, position + 1);
          case 61:
            return createToken(lexer, TokenKind.EQUALS, position, position + 1);
          case 64:
            return createToken(lexer, TokenKind.AT, position, position + 1);
          case 91:
            return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
          case 93:
            return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
          case 123:
            return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
          case 124:
            return createToken(lexer, TokenKind.PIPE, position, position + 1);
          case 125:
            return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
          case 34:
            if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
              return readBlockString(lexer, position);
            }
            return readString(lexer, position);
        }
        if (isDigit(code) || code === 45) {
          return readNumber(lexer, position, code);
        }
        if (isNameStart(code)) {
          return readName(lexer, position);
        }
        throw syntaxError(
          lexer.source,
          position,
          code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
        );
      }
      return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
    }
    function readComment(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let position = start + 1;
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        if (code === 10 || code === 13) {
          break;
        }
        if (isUnicodeScalarValue(code)) {
          ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
          position += 2;
        } else {
          break;
        }
      }
      return createToken(
        lexer,
        TokenKind.COMMENT,
        start,
        position,
        body.slice(start + 1, position)
      );
    }
    function readNumber(lexer, start, firstCode) {
      const body = lexer.source.body;
      let position = start;
      let code = firstCode;
      let isFloat = false;
      if (code === 45) {
        code = body.charCodeAt(++position);
      }
      if (code === 48) {
        code = body.charCodeAt(++position);
        if (isDigit(code)) {
          throw syntaxError(
            lexer.source,
            position,
            `Invalid number, unexpected digit after 0: ${printCodePointAt(
              lexer,
              position
            )}.`
          );
        }
      } else {
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 46) {
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 69 || code === 101) {
        isFloat = true;
        code = body.charCodeAt(++position);
        if (code === 43 || code === 45) {
          code = body.charCodeAt(++position);
        }
        position = readDigits(lexer, position, code);
        code = body.charCodeAt(position);
      }
      if (code === 46 || isNameStart(code)) {
        throw syntaxError(
          lexer.source,
          position,
          `Invalid number, expected digit but got: ${printCodePointAt(
            lexer,
            position
          )}.`
        );
      }
      return createToken(
        lexer,
        isFloat ? TokenKind.FLOAT : TokenKind.INT,
        start,
        position,
        body.slice(start, position)
      );
    }
    function readDigits(lexer, start, firstCode) {
      if (!isDigit(firstCode)) {
        throw syntaxError(
          lexer.source,
          start,
          `Invalid number, expected digit but got: ${printCodePointAt(
            lexer,
            start
          )}.`
        );
      }
      const body = lexer.source.body;
      let position = start + 1;
      while (isDigit(body.charCodeAt(position))) {
        ++position;
      }
      return position;
    }
    function readString(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let position = start + 1;
      let chunkStart = position;
      let value = "";
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        if (code === 34) {
          value += body.slice(chunkStart, position);
          return createToken(lexer, TokenKind.STRING, start, position + 1, value);
        }
        if (code === 92) {
          value += body.slice(chunkStart, position);
          const escape2 = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
          value += escape2.value;
          position += escape2.size;
          chunkStart = position;
          continue;
        }
        if (code === 10 || code === 13) {
          break;
        }
        if (isUnicodeScalarValue(code)) {
          ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
          position += 2;
        } else {
          throw syntaxError(
            lexer.source,
            position,
            `Invalid character within String: ${printCodePointAt(
              lexer,
              position
            )}.`
          );
        }
      }
      throw syntaxError(lexer.source, position, "Unterminated string.");
    }
    function readEscapedUnicodeVariableWidth(lexer, position) {
      const body = lexer.source.body;
      let point = 0;
      let size = 3;
      while (size < 12) {
        const code = body.charCodeAt(position + size++);
        if (code === 125) {
          if (size < 5 || !isUnicodeScalarValue(point)) {
            break;
          }
          return {
            value: String.fromCodePoint(point),
            size
          };
        }
        point = point << 4 | readHexDigit(code);
        if (point < 0) {
          break;
        }
      }
      throw syntaxError(
        lexer.source,
        position,
        `Invalid Unicode escape sequence: "${body.slice(
          position,
          position + size
        )}".`
      );
    }
    function readEscapedUnicodeFixedWidth(lexer, position) {
      const body = lexer.source.body;
      const code = read16BitHexCode(body, position + 2);
      if (isUnicodeScalarValue(code)) {
        return {
          value: String.fromCodePoint(code),
          size: 6
        };
      }
      if (isLeadingSurrogate(code)) {
        if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
          const trailingCode = read16BitHexCode(body, position + 8);
          if (isTrailingSurrogate(trailingCode)) {
            return {
              value: String.fromCodePoint(code, trailingCode),
              size: 12
            };
          }
        }
      }
      throw syntaxError(
        lexer.source,
        position,
        `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
      );
    }
    function read16BitHexCode(body, position) {
      return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
    }
    function readHexDigit(code) {
      return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
    }
    function readEscapedCharacter(lexer, position) {
      const body = lexer.source.body;
      const code = body.charCodeAt(position + 1);
      switch (code) {
        case 34:
          return {
            value: '"',
            size: 2
          };
        case 92:
          return {
            value: "\\",
            size: 2
          };
        case 47:
          return {
            value: "/",
            size: 2
          };
        case 98:
          return {
            value: "\b",
            size: 2
          };
        case 102:
          return {
            value: "\f",
            size: 2
          };
        case 110:
          return {
            value: "\n",
            size: 2
          };
        case 114:
          return {
            value: "\r",
            size: 2
          };
        case 116:
          return {
            value: "	",
            size: 2
          };
      }
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character escape sequence: "${body.slice(
          position,
          position + 2
        )}".`
      );
    }
    function readBlockString(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let lineStart = lexer.lineStart;
      let position = start + 3;
      let chunkStart = position;
      let currentLine = "";
      const blockLines = [];
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          currentLine += body.slice(chunkStart, position);
          blockLines.push(currentLine);
          const token = createToken(
            lexer,
            TokenKind.BLOCK_STRING,
            start,
            position + 3,
            // Return a string of the lines joined with U+000A.
            dedentBlockStringLines(blockLines).join("\n")
          );
          lexer.line += blockLines.length - 1;
          lexer.lineStart = lineStart;
          return token;
        }
        if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
          currentLine += body.slice(chunkStart, position);
          chunkStart = position + 1;
          position += 4;
          continue;
        }
        if (code === 10 || code === 13) {
          currentLine += body.slice(chunkStart, position);
          blockLines.push(currentLine);
          if (code === 13 && body.charCodeAt(position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }
          currentLine = "";
          chunkStart = position;
          lineStart = position;
          continue;
        }
        if (isUnicodeScalarValue(code)) {
          ++position;
        } else if (isSupplementaryCodePoint(body, position)) {
          position += 2;
        } else {
          throw syntaxError(
            lexer.source,
            position,
            `Invalid character within String: ${printCodePointAt(
              lexer,
              position
            )}.`
          );
        }
      }
      throw syntaxError(lexer.source, position, "Unterminated string.");
    }
    function readName(lexer, start) {
      const body = lexer.source.body;
      const bodyLength = body.length;
      let position = start + 1;
      while (position < bodyLength) {
        const code = body.charCodeAt(position);
        if (isNameContinue(code)) {
          ++position;
        } else {
          break;
        }
      }
      return createToken(
        lexer,
        TokenKind.NAME,
        start,
        position,
        body.slice(start, position)
      );
    }
    const MAX_ARRAY_LENGTH = 10;
    const MAX_RECURSIVE_DEPTH = 2;
    function inspect(value) {
      return formatValue(value, []);
    }
    function formatValue(value, seenValues) {
      switch (typeof value) {
        case "string":
          return JSON.stringify(value);
        case "function":
          return value.name ? `[function ${value.name}]` : "[function]";
        case "object":
          return formatObjectValue(value, seenValues);
        default:
          return String(value);
      }
    }
    function formatObjectValue(value, previouslySeenValues) {
      if (value === null) {
        return "null";
      }
      if (previouslySeenValues.includes(value)) {
        return "[Circular]";
      }
      const seenValues = [...previouslySeenValues, value];
      if (isJSONable(value)) {
        const jsonValue = value.toJSON();
        if (jsonValue !== value) {
          return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
        }
      } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
      }
      return formatObject(value, seenValues);
    }
    function isJSONable(value) {
      return typeof value.toJSON === "function";
    }
    function formatObject(object, seenValues) {
      const entries = Object.entries(object);
      if (entries.length === 0) {
        return "{}";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[" + getObjectTag(object) + "]";
      }
      const properties = entries.map(
        ([key, value]) => key + ": " + formatValue(value, seenValues)
      );
      return "{ " + properties.join(", ") + " }";
    }
    function formatArray(array, seenValues) {
      if (array.length === 0) {
        return "[]";
      }
      if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return "[Array]";
      }
      const len = Math.min(MAX_ARRAY_LENGTH, array.length);
      const remaining = array.length - len;
      const items = [];
      for (let i = 0; i < len; ++i) {
        items.push(formatValue(array[i], seenValues));
      }
      if (remaining === 1) {
        items.push("... 1 more item");
      } else if (remaining > 1) {
        items.push(`... ${remaining} more items`);
      }
      return "[" + items.join(", ") + "]";
    }
    function getObjectTag(object) {
      const tag = Object.prototype.toString.call(object).replace(/^\[object /, "").replace(/]$/, "");
      if (tag === "Object" && typeof object.constructor === "function") {
        const name = object.constructor.name;
        if (typeof name === "string" && name !== "") {
          return name;
        }
      }
      return tag;
    }
    const isProduction = globalThis.process && // eslint-disable-next-line no-undef
      true;
    const instanceOf = (
      /* c8 ignore next 6 */
      // FIXME: https://github.com/graphql/graphql-js/issues/2317
      isProduction ? function instanceOf2(value, constructor) {
        return value instanceof constructor;
      } : function instanceOf3(value, constructor) {
        if (value instanceof constructor) {
          return true;
        }
        if (typeof value === "object" && value !== null) {
          var _value$constructor;
          const className = constructor.prototype[Symbol.toStringTag];
          const valueClassName = (
            // We still need to support constructor's name to detect conflicts with older versions of this library.
            Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name
          );
          if (className === valueClassName) {
            const stringifiedValue = inspect(value);
            throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
          }
        }
        return false;
      }
    );
    class Source {
      constructor(body, name = "GraphQL request", locationOffset = {
        line: 1,
        column: 1
      }) {
        typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || devAssert(
          false,
          "line in locationOffset is 1-indexed and must be positive."
        );
        this.locationOffset.column > 0 || devAssert(
          false,
          "column in locationOffset is 1-indexed and must be positive."
        );
      }
      get [Symbol.toStringTag]() {
        return "Source";
      }
    }
    function isSource(source) {
      return instanceOf(source, Source);
    }
    function parse(source, options) {
      const parser2 = new Parser(source, options);
      const document2 = parser2.parseDocument();
      Object.defineProperty(document2, "tokenCount", {
        enumerable: false,
        value: parser2.tokenCount
      });
      return document2;
    }
    class Parser {
      constructor(source, options = {}) {
        const sourceObj = isSource(source) ? source : new Source(source);
        this._lexer = new Lexer(sourceObj);
        this._options = options;
        this._tokenCounter = 0;
      }
      get tokenCount() {
        return this._tokenCounter;
      }
      /**
       * Converts a name lex token into a name parse node.
       */
      parseName() {
        const token = this.expectToken(TokenKind.NAME);
        return this.node(token, {
          kind: Kind.NAME,
          value: token.value
        });
      }
      // Implements the parsing rules in the Document section.
      /**
       * Document : Definition+
       */
      parseDocument() {
        return this.node(this._lexer.token, {
          kind: Kind.DOCUMENT,
          definitions: this.many(
            TokenKind.SOF,
            this.parseDefinition,
            TokenKind.EOF
          )
        });
      }
      /**
       * Definition :
       *   - ExecutableDefinition
       *   - TypeSystemDefinition
       *   - TypeSystemExtension
       *
       * ExecutableDefinition :
       *   - OperationDefinition
       *   - FragmentDefinition
       *
       * TypeSystemDefinition :
       *   - SchemaDefinition
       *   - TypeDefinition
       *   - DirectiveDefinition
       *
       * TypeDefinition :
       *   - ScalarTypeDefinition
       *   - ObjectTypeDefinition
       *   - InterfaceTypeDefinition
       *   - UnionTypeDefinition
       *   - EnumTypeDefinition
       *   - InputObjectTypeDefinition
       */
      parseDefinition() {
        if (this.peek(TokenKind.BRACE_L)) {
          return this.parseOperationDefinition();
        }
        const hasDescription = this.peekDescription();
        const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
        if (keywordToken.kind === TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaDefinition();
            case "scalar":
              return this.parseScalarTypeDefinition();
            case "type":
              return this.parseObjectTypeDefinition();
            case "interface":
              return this.parseInterfaceTypeDefinition();
            case "union":
              return this.parseUnionTypeDefinition();
            case "enum":
              return this.parseEnumTypeDefinition();
            case "input":
              return this.parseInputObjectTypeDefinition();
            case "directive":
              return this.parseDirectiveDefinition();
          }
          if (hasDescription) {
            throw syntaxError(
              this._lexer.source,
              this._lexer.token.start,
              "Unexpected description, descriptions are supported only on type definitions."
            );
          }
          switch (keywordToken.value) {
            case "query":
            case "mutation":
            case "subscription":
              return this.parseOperationDefinition();
            case "fragment":
              return this.parseFragmentDefinition();
            case "extend":
              return this.parseTypeSystemExtension();
          }
        }
        throw this.unexpected(keywordToken);
      }
      // Implements the parsing rules in the Operations section.
      /**
       * OperationDefinition :
       *  - SelectionSet
       *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
       */
      parseOperationDefinition() {
        const start = this._lexer.token;
        if (this.peek(TokenKind.BRACE_L)) {
          return this.node(start, {
            kind: Kind.OPERATION_DEFINITION,
            operation: OperationTypeNode.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
        }
        const operation = this.parseOperationType();
        let name;
        if (this.peek(TokenKind.NAME)) {
          name = this.parseName();
        }
        return this.node(start, {
          kind: Kind.OPERATION_DEFINITION,
          operation,
          name,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      /**
       * OperationType : one of query mutation subscription
       */
      parseOperationType() {
        const operationToken = this.expectToken(TokenKind.NAME);
        switch (operationToken.value) {
          case "query":
            return OperationTypeNode.QUERY;
          case "mutation":
            return OperationTypeNode.MUTATION;
          case "subscription":
            return OperationTypeNode.SUBSCRIPTION;
        }
        throw this.unexpected(operationToken);
      }
      /**
       * VariableDefinitions : ( VariableDefinition+ )
       */
      parseVariableDefinitions() {
        return this.optionalMany(
          TokenKind.PAREN_L,
          this.parseVariableDefinition,
          TokenKind.PAREN_R
        );
      }
      /**
       * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
       */
      parseVariableDefinition() {
        return this.node(this._lexer.token, {
          kind: Kind.VARIABLE_DEFINITION,
          variable: this.parseVariable(),
          type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
          defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
          directives: this.parseConstDirectives()
        });
      }
      /**
       * Variable : $ Name
       */
      parseVariable() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.DOLLAR);
        return this.node(start, {
          kind: Kind.VARIABLE,
          name: this.parseName()
        });
      }
      /**
       * ```
       * SelectionSet : { Selection+ }
       * ```
       */
      parseSelectionSet() {
        return this.node(this._lexer.token, {
          kind: Kind.SELECTION_SET,
          selections: this.many(
            TokenKind.BRACE_L,
            this.parseSelection,
            TokenKind.BRACE_R
          )
        });
      }
      /**
       * Selection :
       *   - Field
       *   - FragmentSpread
       *   - InlineFragment
       */
      parseSelection() {
        return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
      }
      /**
       * Field : Alias? Name Arguments? Directives? SelectionSet?
       *
       * Alias : Name :
       */
      parseField() {
        const start = this._lexer.token;
        const nameOrAlias = this.parseName();
        let alias;
        let name;
        if (this.expectOptionalToken(TokenKind.COLON)) {
          alias = nameOrAlias;
          name = this.parseName();
        } else {
          name = nameOrAlias;
        }
        return this.node(start, {
          kind: Kind.FIELD,
          alias,
          name,
          arguments: this.parseArguments(false),
          directives: this.parseDirectives(false),
          selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
        });
      }
      /**
       * Arguments[Const] : ( Argument[?Const]+ )
       */
      parseArguments(isConst) {
        const item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
      }
      /**
       * Argument[Const] : Name : Value[?Const]
       */
      parseArgument(isConst = false) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return this.node(start, {
          kind: Kind.ARGUMENT,
          name,
          value: this.parseValueLiteral(isConst)
        });
      }
      parseConstArgument() {
        return this.parseArgument(true);
      }
      // Implements the parsing rules in the Fragments section.
      /**
       * Corresponds to both FragmentSpread and InlineFragment in the spec.
       *
       * FragmentSpread : ... FragmentName Directives?
       *
       * InlineFragment : ... TypeCondition? Directives? SelectionSet
       */
      parseFragment() {
        const start = this._lexer.token;
        this.expectToken(TokenKind.SPREAD);
        const hasTypeCondition = this.expectOptionalKeyword("on");
        if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
          return this.node(start, {
            kind: Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false)
          });
        }
        return this.node(start, {
          kind: Kind.INLINE_FRAGMENT,
          typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      /**
       * FragmentDefinition :
       *   - fragment FragmentName on TypeCondition Directives? SelectionSet
       *
       * TypeCondition : NamedType
       */
      parseFragmentDefinition() {
        const start = this._lexer.token;
        this.expectKeyword("fragment");
        if (this._options.allowLegacyFragmentVariables === true) {
          return this.node(start, {
            kind: Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet()
          });
        }
        return this.node(start, {
          kind: Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet()
        });
      }
      /**
       * FragmentName : Name but not `on`
       */
      parseFragmentName() {
        if (this._lexer.token.value === "on") {
          throw this.unexpected();
        }
        return this.parseName();
      }
      // Implements the parsing rules in the Values section.
      /**
       * Value[Const] :
       *   - [~Const] Variable
       *   - IntValue
       *   - FloatValue
       *   - StringValue
       *   - BooleanValue
       *   - NullValue
       *   - EnumValue
       *   - ListValue[?Const]
       *   - ObjectValue[?Const]
       *
       * BooleanValue : one of `true` `false`
       *
       * NullValue : `null`
       *
       * EnumValue : Name but not `true`, `false` or `null`
       */
      parseValueLiteral(isConst) {
        const token = this._lexer.token;
        switch (token.kind) {
          case TokenKind.BRACKET_L:
            return this.parseList(isConst);
          case TokenKind.BRACE_L:
            return this.parseObject(isConst);
          case TokenKind.INT:
            this.advanceLexer();
            return this.node(token, {
              kind: Kind.INT,
              value: token.value
            });
          case TokenKind.FLOAT:
            this.advanceLexer();
            return this.node(token, {
              kind: Kind.FLOAT,
              value: token.value
            });
          case TokenKind.STRING:
          case TokenKind.BLOCK_STRING:
            return this.parseStringLiteral();
          case TokenKind.NAME:
            this.advanceLexer();
            switch (token.value) {
              case "true":
                return this.node(token, {
                  kind: Kind.BOOLEAN,
                  value: true
                });
              case "false":
                return this.node(token, {
                  kind: Kind.BOOLEAN,
                  value: false
                });
              case "null":
                return this.node(token, {
                  kind: Kind.NULL
                });
              default:
                return this.node(token, {
                  kind: Kind.ENUM,
                  value: token.value
                });
            }
          case TokenKind.DOLLAR:
            if (isConst) {
              this.expectToken(TokenKind.DOLLAR);
              if (this._lexer.token.kind === TokenKind.NAME) {
                const varName = this._lexer.token.value;
                throw syntaxError(
                  this._lexer.source,
                  token.start,
                  `Unexpected variable "$${varName}" in constant value.`
                );
              } else {
                throw this.unexpected(token);
              }
            }
            return this.parseVariable();
          default:
            throw this.unexpected();
        }
      }
      parseConstValueLiteral() {
        return this.parseValueLiteral(true);
      }
      parseStringLiteral() {
        const token = this._lexer.token;
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.STRING,
          value: token.value,
          block: token.kind === TokenKind.BLOCK_STRING
        });
      }
      /**
       * ListValue[Const] :
       *   - [ ]
       *   - [ Value[?Const]+ ]
       */
      parseList(isConst) {
        const item = () => this.parseValueLiteral(isConst);
        return this.node(this._lexer.token, {
          kind: Kind.LIST,
          values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
        });
      }
      /**
       * ```
       * ObjectValue[Const] :
       *   - { }
       *   - { ObjectField[?Const]+ }
       * ```
       */
      parseObject(isConst) {
        const item = () => this.parseObjectField(isConst);
        return this.node(this._lexer.token, {
          kind: Kind.OBJECT,
          fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
        });
      }
      /**
       * ObjectField[Const] : Name : Value[?Const]
       */
      parseObjectField(isConst) {
        const start = this._lexer.token;
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return this.node(start, {
          kind: Kind.OBJECT_FIELD,
          name,
          value: this.parseValueLiteral(isConst)
        });
      }
      // Implements the parsing rules in the Directives section.
      /**
       * Directives[Const] : Directive[?Const]+
       */
      parseDirectives(isConst) {
        const directives = [];
        while (this.peek(TokenKind.AT)) {
          directives.push(this.parseDirective(isConst));
        }
        return directives;
      }
      parseConstDirectives() {
        return this.parseDirectives(true);
      }
      /**
       * ```
       * Directive[Const] : @ Name Arguments[?Const]?
       * ```
       */
      parseDirective(isConst) {
        const start = this._lexer.token;
        this.expectToken(TokenKind.AT);
        return this.node(start, {
          kind: Kind.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(isConst)
        });
      }
      // Implements the parsing rules in the Types section.
      /**
       * Type :
       *   - NamedType
       *   - ListType
       *   - NonNullType
       */
      parseTypeReference() {
        const start = this._lexer.token;
        let type;
        if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
          const innerType = this.parseTypeReference();
          this.expectToken(TokenKind.BRACKET_R);
          type = this.node(start, {
            kind: Kind.LIST_TYPE,
            type: innerType
          });
        } else {
          type = this.parseNamedType();
        }
        if (this.expectOptionalToken(TokenKind.BANG)) {
          return this.node(start, {
            kind: Kind.NON_NULL_TYPE,
            type
          });
        }
        return type;
      }
      /**
       * NamedType : Name
       */
      parseNamedType() {
        return this.node(this._lexer.token, {
          kind: Kind.NAMED_TYPE,
          name: this.parseName()
        });
      }
      // Implements the parsing rules in the Type Definition section.
      peekDescription() {
        return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
      }
      /**
       * Description : StringValue
       */
      parseDescription() {
        if (this.peekDescription()) {
          return this.parseStringLiteral();
        }
      }
      /**
       * ```
       * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
       * ```
       */
      parseSchemaDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.many(
          TokenKind.BRACE_L,
          this.parseOperationTypeDefinition,
          TokenKind.BRACE_R
        );
        return this.node(start, {
          kind: Kind.SCHEMA_DEFINITION,
          description,
          directives,
          operationTypes
        });
      }
      /**
       * OperationTypeDefinition : OperationType : NamedType
       */
      parseOperationTypeDefinition() {
        const start = this._lexer.token;
        const operation = this.parseOperationType();
        this.expectToken(TokenKind.COLON);
        const type = this.parseNamedType();
        return this.node(start, {
          kind: Kind.OPERATION_TYPE_DEFINITION,
          operation,
          type
        });
      }
      /**
       * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
       */
      parseScalarTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.SCALAR_TYPE_DEFINITION,
          description,
          name,
          directives
        });
      }
      /**
       * ObjectTypeDefinition :
       *   Description?
       *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
       */
      parseObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
          kind: Kind.OBJECT_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields
        });
      }
      /**
       * ImplementsInterfaces :
       *   - implements `&`? NamedType
       *   - ImplementsInterfaces & NamedType
       */
      parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
      }
      /**
       * ```
       * FieldsDefinition : { FieldDefinition+ }
       * ```
       */
      parseFieldsDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseFieldDefinition,
          TokenKind.BRACE_R
        );
      }
      /**
       * FieldDefinition :
       *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
       */
      parseFieldDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        this.expectToken(TokenKind.COLON);
        const type = this.parseTypeReference();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.FIELD_DEFINITION,
          description,
          name,
          arguments: args,
          type,
          directives
        });
      }
      /**
       * ArgumentsDefinition : ( InputValueDefinition+ )
       */
      parseArgumentDefs() {
        return this.optionalMany(
          TokenKind.PAREN_L,
          this.parseInputValueDef,
          TokenKind.PAREN_R
        );
      }
      /**
       * InputValueDefinition :
       *   - Description? Name : Type DefaultValue? Directives[Const]?
       */
      parseInputValueDef() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseName();
        this.expectToken(TokenKind.COLON);
        const type = this.parseTypeReference();
        let defaultValue;
        if (this.expectOptionalToken(TokenKind.EQUALS)) {
          defaultValue = this.parseConstValueLiteral();
        }
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.INPUT_VALUE_DEFINITION,
          description,
          name,
          type,
          defaultValue,
          directives
        });
      }
      /**
       * InterfaceTypeDefinition :
       *   - Description? interface Name Directives[Const]? FieldsDefinition?
       */
      parseInterfaceTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        return this.node(start, {
          kind: Kind.INTERFACE_TYPE_DEFINITION,
          description,
          name,
          interfaces,
          directives,
          fields
        });
      }
      /**
       * UnionTypeDefinition :
       *   - Description? union Name Directives[Const]? UnionMemberTypes?
       */
      parseUnionTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        return this.node(start, {
          kind: Kind.UNION_TYPE_DEFINITION,
          description,
          name,
          directives,
          types
        });
      }
      /**
       * UnionMemberTypes :
       *   - = `|`? NamedType
       *   - UnionMemberTypes | NamedType
       */
      parseUnionMemberTypes() {
        return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
      }
      /**
       * EnumTypeDefinition :
       *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
       */
      parseEnumTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        return this.node(start, {
          kind: Kind.ENUM_TYPE_DEFINITION,
          description,
          name,
          directives,
          values
        });
      }
      /**
       * ```
       * EnumValuesDefinition : { EnumValueDefinition+ }
       * ```
       */
      parseEnumValuesDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseEnumValueDefinition,
          TokenKind.BRACE_R
        );
      }
      /**
       * EnumValueDefinition : Description? EnumValue Directives[Const]?
       */
      parseEnumValueDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        const name = this.parseEnumValueName();
        const directives = this.parseConstDirectives();
        return this.node(start, {
          kind: Kind.ENUM_VALUE_DEFINITION,
          description,
          name,
          directives
        });
      }
      /**
       * EnumValue : Name but not `true`, `false` or `null`
       */
      parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
          throw syntaxError(
            this._lexer.source,
            this._lexer.token.start,
            `${getTokenDesc(
              this._lexer.token
            )} is reserved and cannot be used for an enum value.`
          );
        }
        return this.parseName();
      }
      /**
       * InputObjectTypeDefinition :
       *   - Description? input Name Directives[Const]? InputFieldsDefinition?
       */
      parseInputObjectTypeDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        return this.node(start, {
          kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
          description,
          name,
          directives,
          fields
        });
      }
      /**
       * ```
       * InputFieldsDefinition : { InputValueDefinition+ }
       * ```
       */
      parseInputFieldsDefinition() {
        return this.optionalMany(
          TokenKind.BRACE_L,
          this.parseInputValueDef,
          TokenKind.BRACE_R
        );
      }
      /**
       * TypeSystemExtension :
       *   - SchemaExtension
       *   - TypeExtension
       *
       * TypeExtension :
       *   - ScalarTypeExtension
       *   - ObjectTypeExtension
       *   - InterfaceTypeExtension
       *   - UnionTypeExtension
       *   - EnumTypeExtension
       *   - InputObjectTypeDefinition
       */
      parseTypeSystemExtension() {
        const keywordToken = this._lexer.lookahead();
        if (keywordToken.kind === TokenKind.NAME) {
          switch (keywordToken.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension();
          }
        }
        throw this.unexpected(keywordToken);
      }
      /**
       * ```
       * SchemaExtension :
       *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
       *  - extend schema Directives[Const]
       * ```
       */
      parseSchemaExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("schema");
        const directives = this.parseConstDirectives();
        const operationTypes = this.optionalMany(
          TokenKind.BRACE_L,
          this.parseOperationTypeDefinition,
          TokenKind.BRACE_R
        );
        if (directives.length === 0 && operationTypes.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.SCHEMA_EXTENSION,
          directives,
          operationTypes
        });
      }
      /**
       * ScalarTypeExtension :
       *   - extend scalar Name Directives[Const]
       */
      parseScalarTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("scalar");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        if (directives.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.SCALAR_TYPE_EXTENSION,
          name,
          directives
        });
      }
      /**
       * ObjectTypeExtension :
       *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
       *  - extend type Name ImplementsInterfaces? Directives[Const]
       *  - extend type Name ImplementsInterfaces
       */
      parseObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("type");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.OBJECT_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields
        });
      }
      /**
       * InterfaceTypeExtension :
       *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
       *  - extend interface Name ImplementsInterfaces? Directives[Const]
       *  - extend interface Name ImplementsInterfaces
       */
      parseInterfaceTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("interface");
        const name = this.parseName();
        const interfaces = this.parseImplementsInterfaces();
        const directives = this.parseConstDirectives();
        const fields = this.parseFieldsDefinition();
        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.INTERFACE_TYPE_EXTENSION,
          name,
          interfaces,
          directives,
          fields
        });
      }
      /**
       * UnionTypeExtension :
       *   - extend union Name Directives[Const]? UnionMemberTypes
       *   - extend union Name Directives[Const]
       */
      parseUnionTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("union");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const types = this.parseUnionMemberTypes();
        if (directives.length === 0 && types.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.UNION_TYPE_EXTENSION,
          name,
          directives,
          types
        });
      }
      /**
       * EnumTypeExtension :
       *   - extend enum Name Directives[Const]? EnumValuesDefinition
       *   - extend enum Name Directives[Const]
       */
      parseEnumTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("enum");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const values = this.parseEnumValuesDefinition();
        if (directives.length === 0 && values.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.ENUM_TYPE_EXTENSION,
          name,
          directives,
          values
        });
      }
      /**
       * InputObjectTypeExtension :
       *   - extend input Name Directives[Const]? InputFieldsDefinition
       *   - extend input Name Directives[Const]
       */
      parseInputObjectTypeExtension() {
        const start = this._lexer.token;
        this.expectKeyword("extend");
        this.expectKeyword("input");
        const name = this.parseName();
        const directives = this.parseConstDirectives();
        const fields = this.parseInputFieldsDefinition();
        if (directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }
        return this.node(start, {
          kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
          name,
          directives,
          fields
        });
      }
      /**
       * ```
       * DirectiveDefinition :
       *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
       * ```
       */
      parseDirectiveDefinition() {
        const start = this._lexer.token;
        const description = this.parseDescription();
        this.expectKeyword("directive");
        this.expectToken(TokenKind.AT);
        const name = this.parseName();
        const args = this.parseArgumentDefs();
        const repeatable = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const locations = this.parseDirectiveLocations();
        return this.node(start, {
          kind: Kind.DIRECTIVE_DEFINITION,
          description,
          name,
          arguments: args,
          repeatable,
          locations
        });
      }
      /**
       * DirectiveLocations :
       *   - `|`? DirectiveLocation
       *   - DirectiveLocations | DirectiveLocation
       */
      parseDirectiveLocations() {
        return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
      }
      /*
       * DirectiveLocation :
       *   - ExecutableDirectiveLocation
       *   - TypeSystemDirectiveLocation
       *
       * ExecutableDirectiveLocation : one of
       *   `QUERY`
       *   `MUTATION`
       *   `SUBSCRIPTION`
       *   `FIELD`
       *   `FRAGMENT_DEFINITION`
       *   `FRAGMENT_SPREAD`
       *   `INLINE_FRAGMENT`
       *
       * TypeSystemDirectiveLocation : one of
       *   `SCHEMA`
       *   `SCALAR`
       *   `OBJECT`
       *   `FIELD_DEFINITION`
       *   `ARGUMENT_DEFINITION`
       *   `INTERFACE`
       *   `UNION`
       *   `ENUM`
       *   `ENUM_VALUE`
       *   `INPUT_OBJECT`
       *   `INPUT_FIELD_DEFINITION`
       */
      parseDirectiveLocation() {
        const start = this._lexer.token;
        const name = this.parseName();
        if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
          return name;
        }
        throw this.unexpected(start);
      }
      // Core parsing utility functions
      /**
       * Returns a node that, if configured to do so, sets a "loc" field as a
       * location object, used to identify the place in the source that created a
       * given parsed object.
       */
      node(startToken, node) {
        if (this._options.noLocation !== true) {
          node.loc = new Location(
            startToken,
            this._lexer.lastToken,
            this._lexer.source
          );
        }
        return node;
      }
      /**
       * Determines if the next token is of a given kind
       */
      peek(kind) {
        return this._lexer.token.kind === kind;
      }
      /**
       * If the next token is of the given kind, return that token after advancing the lexer.
       * Otherwise, do not change the parser state and throw an error.
       */
      expectToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
          this.advanceLexer();
          return token;
        }
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
        );
      }
      /**
       * If the next token is of the given kind, return "true" after advancing the lexer.
       * Otherwise, do not change the parser state and return "false".
       */
      expectOptionalToken(kind) {
        const token = this._lexer.token;
        if (token.kind === kind) {
          this.advanceLexer();
          return true;
        }
        return false;
      }
      /**
       * If the next token is a given keyword, advance the lexer.
       * Otherwise, do not change the parser state and throw an error.
       */
      expectKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
          this.advanceLexer();
        } else {
          throw syntaxError(
            this._lexer.source,
            token.start,
            `Expected "${value}", found ${getTokenDesc(token)}.`
          );
        }
      }
      /**
       * If the next token is a given keyword, return "true" after advancing the lexer.
       * Otherwise, do not change the parser state and return "false".
       */
      expectOptionalKeyword(value) {
        const token = this._lexer.token;
        if (token.kind === TokenKind.NAME && token.value === value) {
          this.advanceLexer();
          return true;
        }
        return false;
      }
      /**
       * Helper function for creating an error when an unexpected lexed token is encountered.
       */
      unexpected(atToken) {
        const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return syntaxError(
          this._lexer.source,
          token.start,
          `Unexpected ${getTokenDesc(token)}.`
        );
      }
      /**
       * Returns a possibly empty list of parse nodes, determined by the parseFn.
       * This list begins with a lex token of openKind and ends with a lex token of closeKind.
       * Advances the parser to the next lex token after the closing token.
       */
      any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        while (!this.expectOptionalToken(closeKind)) {
          nodes.push(parseFn.call(this));
        }
        return nodes;
      }
      /**
       * Returns a list of parse nodes, determined by the parseFn.
       * It can be empty only if open token is missing otherwise it will always return non-empty list
       * that begins with a lex token of openKind and ends with a lex token of closeKind.
       * Advances the parser to the next lex token after the closing token.
       */
      optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
          const nodes = [];
          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));
          return nodes;
        }
        return [];
      }
      /**
       * Returns a non-empty list of parse nodes, determined by the parseFn.
       * This list begins with a lex token of openKind and ends with a lex token of closeKind.
       * Advances the parser to the next lex token after the closing token.
       */
      many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));
        return nodes;
      }
      /**
       * Returns a non-empty list of parse nodes, determined by the parseFn.
       * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
       * Advances the parser to the next lex token after last item in the list.
       */
      delimitedMany(delimiterKind, parseFn) {
        this.expectOptionalToken(delimiterKind);
        const nodes = [];
        do {
          nodes.push(parseFn.call(this));
        } while (this.expectOptionalToken(delimiterKind));
        return nodes;
      }
      advanceLexer() {
        const { maxTokens } = this._options;
        const token = this._lexer.advance();
        if (token.kind !== TokenKind.EOF) {
          ++this._tokenCounter;
          if (maxTokens !== void 0 && this._tokenCounter > maxTokens) {
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Document contains more that ${maxTokens} tokens. Parsing aborted.`
            );
          }
        }
      }
    }
    function getTokenDesc(token) {
      const value = token.value;
      return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
    }
    function getTokenKindDesc(kind) {
      return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
    }
    function printString(str) {
      return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
    }
    const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
    function escapedReplacer(str) {
      return escapeSequences[str.charCodeAt(0)];
    }
    const escapeSequences = [
      "\\u0000",
      "\\u0001",
      "\\u0002",
      "\\u0003",
      "\\u0004",
      "\\u0005",
      "\\u0006",
      "\\u0007",
      "\\b",
      "\\t",
      "\\n",
      "\\u000B",
      "\\f",
      "\\r",
      "\\u000E",
      "\\u000F",
      "\\u0010",
      "\\u0011",
      "\\u0012",
      "\\u0013",
      "\\u0014",
      "\\u0015",
      "\\u0016",
      "\\u0017",
      "\\u0018",
      "\\u0019",
      "\\u001A",
      "\\u001B",
      "\\u001C",
      "\\u001D",
      "\\u001E",
      "\\u001F",
      "",
      "",
      '\\"',
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 2F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 3F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 4F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\\\",
      "",
      "",
      "",
      // 5F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      // 6F
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "\\u007F",
      "\\u0080",
      "\\u0081",
      "\\u0082",
      "\\u0083",
      "\\u0084",
      "\\u0085",
      "\\u0086",
      "\\u0087",
      "\\u0088",
      "\\u0089",
      "\\u008A",
      "\\u008B",
      "\\u008C",
      "\\u008D",
      "\\u008E",
      "\\u008F",
      "\\u0090",
      "\\u0091",
      "\\u0092",
      "\\u0093",
      "\\u0094",
      "\\u0095",
      "\\u0096",
      "\\u0097",
      "\\u0098",
      "\\u0099",
      "\\u009A",
      "\\u009B",
      "\\u009C",
      "\\u009D",
      "\\u009E",
      "\\u009F"
    ];
    const BREAK = Object.freeze({});
    function visit(root2, visitor, visitorKeys = QueryDocumentKeys) {
      const enterLeaveMap = /* @__PURE__ */ new Map();
      for (const kind of Object.values(Kind)) {
        enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
      }
      let stack = void 0;
      let inArray = Array.isArray(root2);
      let keys = [root2];
      let index2 = -1;
      let edits = [];
      let node = root2;
      let key = void 0;
      let parent = void 0;
      const path = [];
      const ancestors = [];
      do {
        index2++;
        const isLeaving = index2 === keys.length;
        const isEdited = isLeaving && edits.length !== 0;
        if (isLeaving) {
          key = ancestors.length === 0 ? void 0 : path[path.length - 1];
          node = parent;
          parent = ancestors.pop();
          if (isEdited) {
            if (inArray) {
              node = node.slice();
              let editOffset = 0;
              for (const [editKey, editValue] of edits) {
                const arrayKey = editKey - editOffset;
                if (editValue === null) {
                  node.splice(arrayKey, 1);
                  editOffset++;
                } else {
                  node[arrayKey] = editValue;
                }
              }
            } else {
              node = { ...node };
              for (const [editKey, editValue] of edits) {
                node[editKey] = editValue;
              }
            }
          }
          index2 = stack.index;
          keys = stack.keys;
          edits = stack.edits;
          inArray = stack.inArray;
          stack = stack.prev;
        } else if (parent) {
          key = inArray ? index2 : keys[index2];
          node = parent[key];
          if (node === null || node === void 0) {
            continue;
          }
          path.push(key);
        }
        let result;
        if (!Array.isArray(node)) {
          var _enterLeaveMap$get, _enterLeaveMap$get2;
          isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
          const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
          result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path, ancestors);
          if (result === BREAK) {
            break;
          }
          if (result === false) {
            if (!isLeaving) {
              path.pop();
              continue;
            }
          } else if (result !== void 0) {
            edits.push([key, result]);
            if (!isLeaving) {
              if (isNode(result)) {
                node = result;
              } else {
                path.pop();
                continue;
              }
            }
          }
        }
        if (result === void 0 && isEdited) {
          edits.push([key, node]);
        }
        if (isLeaving) {
          path.pop();
        } else {
          var _node$kind;
          stack = {
            inArray,
            index: index2,
            keys,
            edits,
            prev: stack
          };
          inArray = Array.isArray(node);
          keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
          index2 = -1;
          edits = [];
          if (parent) {
            ancestors.push(parent);
          }
          parent = node;
        }
      } while (stack !== void 0);
      if (edits.length !== 0) {
        return edits[edits.length - 1][1];
      }
      return root2;
    }
    function getEnterLeaveForKind(visitor, kind) {
      const kindVisitor = visitor[kind];
      if (typeof kindVisitor === "object") {
        return kindVisitor;
      } else if (typeof kindVisitor === "function") {
        return {
          enter: kindVisitor,
          leave: void 0
        };
      }
      return {
        enter: visitor.enter,
        leave: visitor.leave
      };
    }
    function print$1(ast) {
      return visit(ast, printDocASTReducer);
    }
    const MAX_LINE_LENGTH = 80;
    const printDocASTReducer = {
      Name: {
        leave: (node) => node.value
      },
      Variable: {
        leave: (node) => "$" + node.name
      },
      // Document
      Document: {
        leave: (node) => join(node.definitions, "\n\n")
      },
      OperationDefinition: {
        leave(node) {
          const varDefs = wrap$1("(", join(node.variableDefinitions, ", "), ")");
          const prefix = join(
            [
              node.operation,
              join([node.name, varDefs]),
              join(node.directives, " ")
            ],
            " "
          );
          return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
        }
      },
      VariableDefinition: {
        leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap$1(" = ", defaultValue) + wrap$1(" ", join(directives, " "))
      },
      SelectionSet: {
        leave: ({ selections }) => block(selections)
      },
      Field: {
        leave({ alias, name, arguments: args, directives, selectionSet }) {
          const prefix = wrap$1("", alias, ": ") + name;
          let argsLine = prefix + wrap$1("(", join(args, ", "), ")");
          if (argsLine.length > MAX_LINE_LENGTH) {
            argsLine = prefix + wrap$1("(\n", indent(join(args, "\n")), "\n)");
          }
          return join([argsLine, join(directives, " "), selectionSet], " ");
        }
      },
      Argument: {
        leave: ({ name, value }) => name + ": " + value
      },
      // Fragments
      FragmentSpread: {
        leave: ({ name, directives }) => "..." + name + wrap$1(" ", join(directives, " "))
      },
      InlineFragment: {
        leave: ({ typeCondition, directives, selectionSet }) => join(
          [
            "...",
            wrap$1("on ", typeCondition),
            join(directives, " "),
            selectionSet
          ],
          " "
        )
      },
      FragmentDefinition: {
        leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => (
          // or removed in the future.
          `fragment ${name}${wrap$1("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap$1("", join(directives, " "), " ")}` + selectionSet
        )
      },
      // Value
      IntValue: {
        leave: ({ value }) => value
      },
      FloatValue: {
        leave: ({ value }) => value
      },
      StringValue: {
        leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
      },
      BooleanValue: {
        leave: ({ value }) => value ? "true" : "false"
      },
      NullValue: {
        leave: () => "null"
      },
      EnumValue: {
        leave: ({ value }) => value
      },
      ListValue: {
        leave: ({ values }) => "[" + join(values, ", ") + "]"
      },
      ObjectValue: {
        leave: ({ fields }) => "{" + join(fields, ", ") + "}"
      },
      ObjectField: {
        leave: ({ name, value }) => name + ": " + value
      },
      // Directive
      Directive: {
        leave: ({ name, arguments: args }) => "@" + name + wrap$1("(", join(args, ", "), ")")
      },
      // Type
      NamedType: {
        leave: ({ name }) => name
      },
      ListType: {
        leave: ({ type }) => "[" + type + "]"
      },
      NonNullType: {
        leave: ({ type }) => type + "!"
      },
      // Type System Definitions
      SchemaDefinition: {
        leave: ({ description, directives, operationTypes }) => wrap$1("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
      },
      OperationTypeDefinition: {
        leave: ({ operation, type }) => operation + ": " + type
      },
      ScalarTypeDefinition: {
        leave: ({ description, name, directives }) => wrap$1("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
      },
      ObjectTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields }) => wrap$1("", description, "\n") + join(
          [
            "type",
            name,
            wrap$1("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      FieldDefinition: {
        leave: ({ description, name, arguments: args, type, directives }) => wrap$1("", description, "\n") + name + (hasMultilineItems(args) ? wrap$1("(\n", indent(join(args, "\n")), "\n)") : wrap$1("(", join(args, ", "), ")")) + ": " + type + wrap$1(" ", join(directives, " "))
      },
      InputValueDefinition: {
        leave: ({ description, name, type, defaultValue, directives }) => wrap$1("", description, "\n") + join(
          [name + ": " + type, wrap$1("= ", defaultValue), join(directives, " ")],
          " "
        )
      },
      InterfaceTypeDefinition: {
        leave: ({ description, name, interfaces, directives, fields }) => wrap$1("", description, "\n") + join(
          [
            "interface",
            name,
            wrap$1("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      UnionTypeDefinition: {
        leave: ({ description, name, directives, types }) => wrap$1("", description, "\n") + join(
          ["union", name, join(directives, " "), wrap$1("= ", join(types, " | "))],
          " "
        )
      },
      EnumTypeDefinition: {
        leave: ({ description, name, directives, values }) => wrap$1("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
      },
      EnumValueDefinition: {
        leave: ({ description, name, directives }) => wrap$1("", description, "\n") + join([name, join(directives, " ")], " ")
      },
      InputObjectTypeDefinition: {
        leave: ({ description, name, directives, fields }) => wrap$1("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
      },
      DirectiveDefinition: {
        leave: ({ description, name, arguments: args, repeatable, locations }) => wrap$1("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap$1("(\n", indent(join(args, "\n")), "\n)") : wrap$1("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
      },
      SchemaExtension: {
        leave: ({ directives, operationTypes }) => join(
          ["extend schema", join(directives, " "), block(operationTypes)],
          " "
        )
      },
      ScalarTypeExtension: {
        leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
      },
      ObjectTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join(
          [
            "extend type",
            name,
            wrap$1("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      InterfaceTypeExtension: {
        leave: ({ name, interfaces, directives, fields }) => join(
          [
            "extend interface",
            name,
            wrap$1("implements ", join(interfaces, " & ")),
            join(directives, " "),
            block(fields)
          ],
          " "
        )
      },
      UnionTypeExtension: {
        leave: ({ name, directives, types }) => join(
          [
            "extend union",
            name,
            join(directives, " "),
            wrap$1("= ", join(types, " | "))
          ],
          " "
        )
      },
      EnumTypeExtension: {
        leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
      },
      InputObjectTypeExtension: {
        leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
      }
    };
    function join(maybeArray, separator = "") {
      var _maybeArray$filter$jo;
      return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x2) => x2).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
    }
    function block(array) {
      return wrap$1("{\n", indent(join(array, "\n")), "\n}");
    }
    function wrap$1(start, maybeString, end = "") {
      return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
    }
    function indent(str) {
      return wrap$1("  ", str.replace(/\n/g, "\n  "));
    }
    function hasMultilineItems(maybeArray) {
      var _maybeArray$some;
      return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
    }
    function isSelectionNode(node) {
      return node.kind === Kind.FIELD || node.kind === Kind.FRAGMENT_SPREAD || node.kind === Kind.INLINE_FRAGMENT;
    }
    function shouldInclude(_a2, variables) {
      var directives = _a2.directives;
      if (!directives || !directives.length) {
        return true;
      }
      return getInclusionDirectives(directives).every(function (_a3) {
        var directive = _a3.directive, ifArgument = _a3.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === "Variable") {
          evaledValue = variables && variables[ifArgument.value.name.value];
          invariant$1(evaledValue !== void 0, 78, directive.name.value);
        } else {
          evaledValue = ifArgument.value.value;
        }
        return directive.name.value === "skip" ? !evaledValue : evaledValue;
      });
    }
    function hasDirectives(names, root2, all) {
      var nameSet = new Set(names);
      var uniqueCount = nameSet.size;
      visit(root2, {
        Directive: function (node) {
          if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
            return BREAK;
          }
        }
      });
      return all ? !nameSet.size : nameSet.size < uniqueCount;
    }
    function hasClientExports(document2) {
      return document2 && hasDirectives(["client", "export"], document2, true);
    }
    function isInclusionDirective(_a2) {
      var value = _a2.name.value;
      return value === "skip" || value === "include";
    }
    function getInclusionDirectives(directives) {
      var result = [];
      if (directives && directives.length) {
        directives.forEach(function (directive) {
          if (!isInclusionDirective(directive))
            return;
          var directiveArguments = directive.arguments;
          var directiveName = directive.name.value;
          invariant$1(directiveArguments && directiveArguments.length === 1, 79, directiveName);
          var ifArgument = directiveArguments[0];
          invariant$1(ifArgument.name && ifArgument.name.value === "if", 80, directiveName);
          var ifValue = ifArgument.value;
          invariant$1(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 81, directiveName);
          result.push({ directive, ifArgument });
        });
      }
      return result;
    }
    function getFragmentMaskMode(fragment) {
      var _a2, _b;
      var directive = (_a2 = fragment.directives) === null || _a2 === void 0 ? void 0 : _a2.find(function (_a3) {
        var name = _a3.name;
        return name.value === "unmask";
      });
      if (!directive) {
        return "mask";
      }
      var modeArg = (_b = directive.arguments) === null || _b === void 0 ? void 0 : _b.find(function (_a3) {
        var name = _a3.name;
        return name.value === "mode";
      });
      if (globalThis.__DEV__ !== false) {
        if (modeArg) {
          if (modeArg.value.kind === Kind.VARIABLE) {
            globalThis.__DEV__ !== false && invariant$1.warn(82);
          } else if (modeArg.value.kind !== Kind.STRING) {
            globalThis.__DEV__ !== false && invariant$1.warn(83);
          } else if (modeArg.value.value !== "migrate") {
            globalThis.__DEV__ !== false && invariant$1.warn(84, modeArg.value.value);
          }
        }
      }
      if (modeArg && "value" in modeArg.value && modeArg.value.value === "migrate") {
        return "migrate";
      }
      return "unmask";
    }
    const defaultMakeData = () => /* @__PURE__ */ Object.create(null);
    const { forEach, slice } = Array.prototype;
    const { hasOwnProperty: hasOwnProperty$7 } = Object.prototype;
    class Trie {
      constructor(weakness = true, makeData = defaultMakeData) {
        this.weakness = weakness;
        this.makeData = makeData;
      }
      lookup() {
        return this.lookupArray(arguments);
      }
      lookupArray(array) {
        let node = this;
        forEach.call(array, (key) => node = node.getChildTrie(key));
        return hasOwnProperty$7.call(node, "data") ? node.data : node.data = this.makeData(slice.call(array));
      }
      peek() {
        return this.peekArray(arguments);
      }
      peekArray(array) {
        let node = this;
        for (let i = 0, len = array.length; node && i < len; ++i) {
          const map = node.mapFor(array[i], false);
          node = map && map.get(array[i]);
        }
        return node && node.data;
      }
      remove() {
        return this.removeArray(arguments);
      }
      removeArray(array) {
        let data;
        if (array.length) {
          const head = array[0];
          const map = this.mapFor(head, false);
          const child = map && map.get(head);
          if (child) {
            data = child.removeArray(slice.call(array, 1));
            if (!child.data && !child.weak && !(child.strong && child.strong.size)) {
              map.delete(head);
            }
          }
        } else {
          data = this.data;
          delete this.data;
        }
        return data;
      }
      getChildTrie(key) {
        const map = this.mapFor(key, true);
        let child = map.get(key);
        if (!child)
          map.set(key, child = new Trie(this.weakness, this.makeData));
        return child;
      }
      mapFor(key, create) {
        return this.weakness && isObjRef(key) ? this.weak || (create ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (create ? this.strong = /* @__PURE__ */ new Map() : void 0);
      }
    }
    function isObjRef(value) {
      switch (typeof value) {
        case "object":
          if (value === null)
            break;
        case "function":
          return true;
      }
      return false;
    }
    var isReactNative = maybe$1(function () {
      return navigator.product;
    }) == "ReactNative";
    var canUseWeakMap = typeof WeakMap === "function" && !(isReactNative && !global.HermesInternal);
    var canUseWeakSet = typeof WeakSet === "function";
    var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
    var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
    var canUseDOM = typeof maybe$1(function () {
      return window.document.createElement;
    }) === "function";
    var usingJSDOM = (
      // Following advice found in this comment from @domenic (maintainer of jsdom):
      // https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
      //
      // Since we control the version of Jest and jsdom used when running Apollo
      // Client tests, and that version is recent enought to include " jsdom/x.y.z"
      // at the end of the user agent string, I believe this case is all we need to
      // check. Testing for "Node.js" was recommended for backwards compatibility
      // with older version of jsdom, but we don't have that problem.
      maybe$1(function () {
        return navigator.userAgent.indexOf("jsdom") >= 0;
      }) || false
    );
    var canUseLayoutEffect = (canUseDOM || isReactNative) && !usingJSDOM;
    function isNonNullObject(obj) {
      return obj !== null && typeof obj === "object";
    }
    function getFragmentQueryDocument(document2, fragmentName) {
      var actualFragmentName = fragmentName;
      var fragments = [];
      document2.definitions.forEach(function (definition) {
        if (definition.kind === "OperationDefinition") {
          throw newInvariantError(
            85,
            definition.operation,
            definition.name ? " named '".concat(definition.name.value, "'") : ""
          );
        }
        if (definition.kind === "FragmentDefinition") {
          fragments.push(definition);
        }
      });
      if (typeof actualFragmentName === "undefined") {
        invariant$1(fragments.length === 1, 86, fragments.length);
        actualFragmentName = fragments[0].name.value;
      }
      var query = __assign(__assign({}, document2), {
        definitions: __spreadArray([
          {
            kind: "OperationDefinition",
            // OperationTypeNode is an enum
            operation: "query",
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: {
                    kind: "Name",
                    value: actualFragmentName
                  }
                }
              ]
            }
          }
        ], document2.definitions, true)
      });
      return query;
    }
    function createFragmentMap(fragments) {
      if (fragments === void 0) {
        fragments = [];
      }
      var symTable = {};
      fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
      });
      return symTable;
    }
    function getFragmentFromSelection(selection, fragmentMap) {
      switch (selection.kind) {
        case "InlineFragment":
          return selection;
        case "FragmentSpread": {
          var fragmentName = selection.name.value;
          if (typeof fragmentMap === "function") {
            return fragmentMap(fragmentName);
          }
          var fragment = fragmentMap && fragmentMap[fragmentName];
          invariant$1(fragment, 87, fragmentName);
          return fragment || null;
        }
        default:
          return null;
      }
    }
    function isFullyUnmaskedOperation(document2) {
      var isUnmasked = true;
      visit(document2, {
        FragmentSpread: function (node) {
          isUnmasked = !!node.directives && node.directives.some(function (directive) {
            return directive.name.value === "unmask";
          });
          if (!isUnmasked) {
            return BREAK;
          }
        }
      });
      return isUnmasked;
    }
    function defaultDispose$1() {
    }
    class StrongCache {
      constructor(max = Infinity, dispose = defaultDispose$1) {
        this.max = max;
        this.dispose = dispose;
        this.map = /* @__PURE__ */ new Map();
        this.newest = null;
        this.oldest = null;
      }
      has(key) {
        return this.map.has(key);
      }
      get(key) {
        const node = this.getNode(key);
        return node && node.value;
      }
      get size() {
        return this.map.size;
      }
      getNode(key) {
        const node = this.map.get(key);
        if (node && node !== this.newest) {
          const { older, newer } = node;
          if (newer) {
            newer.older = older;
          }
          if (older) {
            older.newer = newer;
          }
          node.older = this.newest;
          node.older.newer = node;
          node.newer = null;
          this.newest = node;
          if (node === this.oldest) {
            this.oldest = newer;
          }
        }
        return node;
      }
      set(key, value) {
        let node = this.getNode(key);
        if (node) {
          return node.value = value;
        }
        node = {
          key,
          value,
          newer: null,
          older: this.newest
        };
        if (this.newest) {
          this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
      }
      clean() {
        while (this.oldest && this.map.size > this.max) {
          this.delete(this.oldest.key);
        }
      }
      delete(key) {
        const node = this.map.get(key);
        if (node) {
          if (node === this.newest) {
            this.newest = node.older;
          }
          if (node === this.oldest) {
            this.oldest = node.newer;
          }
          if (node.newer) {
            node.newer.older = node.older;
          }
          if (node.older) {
            node.older.newer = node.newer;
          }
          this.map.delete(key);
          this.dispose(node.value, key);
          return true;
        }
        return false;
      }
    }
    function noop$1() {
    }
    const defaultDispose = noop$1;
    const _WeakRef = typeof WeakRef !== "undefined" ? WeakRef : function (value) {
      return { deref: () => value };
    };
    const _WeakMap = typeof WeakMap !== "undefined" ? WeakMap : Map;
    const _FinalizationRegistry = typeof FinalizationRegistry !== "undefined" ? FinalizationRegistry : function () {
      return {
        register: noop$1,
        unregister: noop$1
      };
    };
    const finalizationBatchSize = 10024;
    class WeakCache {
      constructor(max = Infinity, dispose = defaultDispose) {
        this.max = max;
        this.dispose = dispose;
        this.map = new _WeakMap();
        this.newest = null;
        this.oldest = null;
        this.unfinalizedNodes = /* @__PURE__ */ new Set();
        this.finalizationScheduled = false;
        this.size = 0;
        this.finalize = () => {
          const iterator = this.unfinalizedNodes.values();
          for (let i = 0; i < finalizationBatchSize; i++) {
            const node = iterator.next().value;
            if (!node)
              break;
            this.unfinalizedNodes.delete(node);
            const key = node.key;
            delete node.key;
            node.keyRef = new _WeakRef(key);
            this.registry.register(key, node, node);
          }
          if (this.unfinalizedNodes.size > 0) {
            queueMicrotask(this.finalize);
          } else {
            this.finalizationScheduled = false;
          }
        };
        this.registry = new _FinalizationRegistry(this.deleteNode.bind(this));
      }
      has(key) {
        return this.map.has(key);
      }
      get(key) {
        const node = this.getNode(key);
        return node && node.value;
      }
      getNode(key) {
        const node = this.map.get(key);
        if (node && node !== this.newest) {
          const { older, newer } = node;
          if (newer) {
            newer.older = older;
          }
          if (older) {
            older.newer = newer;
          }
          node.older = this.newest;
          node.older.newer = node;
          node.newer = null;
          this.newest = node;
          if (node === this.oldest) {
            this.oldest = newer;
          }
        }
        return node;
      }
      set(key, value) {
        let node = this.getNode(key);
        if (node) {
          return node.value = value;
        }
        node = {
          key,
          value,
          newer: null,
          older: this.newest
        };
        if (this.newest) {
          this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.scheduleFinalization(node);
        this.map.set(key, node);
        this.size++;
        return node.value;
      }
      clean() {
        while (this.oldest && this.size > this.max) {
          this.deleteNode(this.oldest);
        }
      }
      deleteNode(node) {
        if (node === this.newest) {
          this.newest = node.older;
        }
        if (node === this.oldest) {
          this.oldest = node.newer;
        }
        if (node.newer) {
          node.newer.older = node.older;
        }
        if (node.older) {
          node.older.newer = node.newer;
        }
        this.size--;
        const key = node.key || node.keyRef && node.keyRef.deref();
        this.dispose(node.value, key);
        if (!node.keyRef) {
          this.unfinalizedNodes.delete(node);
        } else {
          this.registry.unregister(node);
        }
        if (key)
          this.map.delete(key);
      }
      delete(key) {
        const node = this.map.get(key);
        if (node) {
          this.deleteNode(node);
          return true;
        }
        return false;
      }
      scheduleFinalization(node) {
        this.unfinalizedNodes.add(node);
        if (!this.finalizationScheduled) {
          this.finalizationScheduled = true;
          queueMicrotask(this.finalize);
        }
      }
    }
    var scheduledCleanup = /* @__PURE__ */ new WeakSet();
    function schedule(cache2) {
      if (cache2.size <= (cache2.max || -1)) {
        return;
      }
      if (!scheduledCleanup.has(cache2)) {
        scheduledCleanup.add(cache2);
        setTimeout(function () {
          cache2.clean();
          scheduledCleanup.delete(cache2);
        }, 100);
      }
    }
    var AutoCleanedWeakCache = function (max, dispose) {
      var cache2 = new WeakCache(max, dispose);
      cache2.set = function (key, value) {
        var ret = WeakCache.prototype.set.call(this, key, value);
        schedule(this);
        return ret;
      };
      return cache2;
    };
    var AutoCleanedStrongCache = function (max, dispose) {
      var cache2 = new StrongCache(max, dispose);
      cache2.set = function (key, value) {
        var ret = StrongCache.prototype.set.call(this, key, value);
        schedule(this);
        return ret;
      };
      return cache2;
    };
    var cacheSizeSymbol = Symbol.for("apollo.cacheSize");
    var cacheSizes = __assign({}, global$1[cacheSizeSymbol]);
    var globalCaches = {};
    function registerGlobalCache(name, getSize) {
      globalCaches[name] = getSize;
    }
    var getApolloClientMemoryInternals = globalThis.__DEV__ !== false ? _getApolloClientMemoryInternals : void 0;
    var getInMemoryCacheMemoryInternals = globalThis.__DEV__ !== false ? _getInMemoryCacheMemoryInternals : void 0;
    var getApolloCacheMemoryInternals = globalThis.__DEV__ !== false ? _getApolloCacheMemoryInternals : void 0;
    function getCurrentCacheSizes() {
      var defaults = {
        parser: 1e3,
        canonicalStringify: 1e3,
        print: 2e3,
        "documentTransform.cache": 2e3,
        "queryManager.getDocumentInfo": 2e3,
        "PersistedQueryLink.persistedQueryHashes": 2e3,
        "fragmentRegistry.transform": 2e3,
        "fragmentRegistry.lookup": 1e3,
        "fragmentRegistry.findFragmentSpreads": 4e3,
        "cache.fragmentQueryDocuments": 1e3,
        "removeTypenameFromVariables.getVariableDefinitions": 2e3,
        "inMemoryCache.maybeBroadcastWatch": 5e3,
        "inMemoryCache.executeSelectionSet": 5e4,
        "inMemoryCache.executeSubSelectedArray": 1e4
      };
      return Object.fromEntries(Object.entries(defaults).map(function (_a2) {
        var k2 = _a2[0], v2 = _a2[1];
        return [
          k2,
          cacheSizes[k2] || v2
        ];
      }));
    }
    function _getApolloClientMemoryInternals() {
      var _a2, _b, _c, _d, _e;
      if (!(globalThis.__DEV__ !== false))
        throw new Error("only supported in development mode");
      return {
        limits: getCurrentCacheSizes(),
        sizes: __assign({
          print: (_a2 = globalCaches.print) === null || _a2 === void 0 ? void 0 : _a2.call(globalCaches), parser: (_b = globalCaches.parser) === null || _b === void 0 ? void 0 : _b.call(globalCaches), canonicalStringify: (_c = globalCaches.canonicalStringify) === null || _c === void 0 ? void 0 : _c.call(globalCaches), links: linkInfo(this.link), queryManager: {
            getDocumentInfo: this["queryManager"]["transformCache"].size,
            documentTransforms: transformInfo(this["queryManager"].documentTransform)
          }
        }, (_e = (_d = this.cache).getMemoryInternals) === null || _e === void 0 ? void 0 : _e.call(_d))
      };
    }
    function _getApolloCacheMemoryInternals() {
      return {
        cache: {
          fragmentQueryDocuments: getWrapperInformation(this["getFragmentDoc"])
        }
      };
    }
    function _getInMemoryCacheMemoryInternals() {
      var fragments = this.config.fragments;
      return __assign(__assign({}, _getApolloCacheMemoryInternals.apply(this)), {
        addTypenameDocumentTransform: transformInfo(this["addTypenameTransform"]), inMemoryCache: {
          executeSelectionSet: getWrapperInformation(this["storeReader"]["executeSelectionSet"]),
          executeSubSelectedArray: getWrapperInformation(this["storeReader"]["executeSubSelectedArray"]),
          maybeBroadcastWatch: getWrapperInformation(this["maybeBroadcastWatch"])
        }, fragmentRegistry: {
          findFragmentSpreads: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.findFragmentSpreads),
          lookup: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.lookup),
          transform: getWrapperInformation(fragments === null || fragments === void 0 ? void 0 : fragments.transform)
        }
      });
    }
    function isWrapper(f2) {
      return !!f2 && "dirtyKey" in f2;
    }
    function getWrapperInformation(f2) {
      return isWrapper(f2) ? f2.size : void 0;
    }
    function isDefined(value) {
      return value != null;
    }
    function transformInfo(transform) {
      return recurseTransformInfo(transform).map(function (cache2) {
        return { cache: cache2 };
      });
    }
    function recurseTransformInfo(transform) {
      return transform ? __spreadArray(__spreadArray([
        getWrapperInformation(transform === null || transform === void 0 ? void 0 : transform["performWork"])
      ], recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["left"]), true), recurseTransformInfo(transform === null || transform === void 0 ? void 0 : transform["right"]), true).filter(isDefined) : [];
    }
    function linkInfo(link) {
      var _a2;
      return link ? __spreadArray(__spreadArray([
        (_a2 = link === null || link === void 0 ? void 0 : link.getMemoryInternals) === null || _a2 === void 0 ? void 0 : _a2.call(link)
      ], linkInfo(link === null || link === void 0 ? void 0 : link.left), true), linkInfo(link === null || link === void 0 ? void 0 : link.right), true).filter(isDefined) : [];
    }
    var canonicalStringify = Object.assign(function canonicalStringify2(value) {
      return JSON.stringify(value, stableObjectReplacer);
    }, {
      reset: function () {
        sortingMap = new AutoCleanedStrongCache(
          cacheSizes.canonicalStringify || 1e3
          /* defaultCacheSizes.canonicalStringify */
        );
      }
    });
    if (globalThis.__DEV__ !== false) {
      registerGlobalCache("canonicalStringify", function () {
        return sortingMap.size;
      });
    }
    var sortingMap;
    canonicalStringify.reset();
    function stableObjectReplacer(key, value) {
      if (value && typeof value === "object") {
        var proto = Object.getPrototypeOf(value);
        if (proto === Object.prototype || proto === null) {
          var keys = Object.keys(value);
          if (keys.every(everyKeyInOrder))
            return value;
          var unsortedKey = JSON.stringify(keys);
          var sortedKeys = sortingMap.get(unsortedKey);
          if (!sortedKeys) {
            keys.sort();
            var sortedKey = JSON.stringify(keys);
            sortedKeys = sortingMap.get(sortedKey) || keys;
            sortingMap.set(unsortedKey, sortedKeys);
            sortingMap.set(sortedKey, sortedKeys);
          }
          var sortedObject_1 = Object.create(proto);
          sortedKeys.forEach(function (key2) {
            sortedObject_1[key2] = value[key2];
          });
          return sortedObject_1;
        }
      }
      return value;
    }
    function everyKeyInOrder(key, i, keys) {
      return i === 0 || keys[i - 1] <= key;
    }
    function makeReference(id2) {
      return { __ref: String(id2) };
    }
    function isReference(obj) {
      return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
    }
    function isDocumentNode(value) {
      return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
    }
    function isStringValue(value) {
      return value.kind === "StringValue";
    }
    function isBooleanValue(value) {
      return value.kind === "BooleanValue";
    }
    function isIntValue(value) {
      return value.kind === "IntValue";
    }
    function isFloatValue(value) {
      return value.kind === "FloatValue";
    }
    function isVariable(value) {
      return value.kind === "Variable";
    }
    function isObjectValue(value) {
      return value.kind === "ObjectValue";
    }
    function isListValue(value) {
      return value.kind === "ListValue";
    }
    function isEnumValue(value) {
      return value.kind === "EnumValue";
    }
    function isNullValue(value) {
      return value.kind === "NullValue";
    }
    function valueToObjectRepresentation(argObj, name, value, variables) {
      if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
      } else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
      } else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
          return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
      } else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
      } else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
          var nestedArgArrayObj = {};
          valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
          return nestedArgArrayObj[name.value];
        });
      } else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
      } else if (isNullValue(value)) {
        argObj[name.value] = null;
      } else {
        throw newInvariantError(96, name.value, value.kind);
      }
    }
    function storeKeyNameFromField(field, variables) {
      var directivesObj = null;
      if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
          directivesObj[directive.name.value] = {};
          if (directive.arguments) {
            directive.arguments.forEach(function (_a2) {
              var name = _a2.name, value = _a2.value;
              return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
            });
          }
        });
      }
      var argObj = null;
      if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(argObj, name, value, variables);
        });
      }
      return getStoreKeyName(field.name.value, argObj, directivesObj);
    }
    var KNOWN_DIRECTIVES = [
      "connection",
      "include",
      "skip",
      "client",
      "rest",
      "export",
      "nonreactive"
    ];
    var storeKeyNameStringify = canonicalStringify;
    var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
      if (args && directives && directives["connection"] && directives["connection"]["key"]) {
        if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
          var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
          filterKeys.sort();
          var filteredArgs_1 = {};
          filterKeys.forEach(function (key) {
            filteredArgs_1[key] = args[key];
          });
          return "".concat(directives["connection"]["key"], "(").concat(storeKeyNameStringify(filteredArgs_1), ")");
        } else {
          return directives["connection"]["key"];
        }
      }
      var completeFieldName = fieldName;
      if (args) {
        var stringifiedArgs = storeKeyNameStringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
      }
      if (directives) {
        Object.keys(directives).forEach(function (key) {
          if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
            return;
          if (directives[key] && Object.keys(directives[key]).length) {
            completeFieldName += "@".concat(key, "(").concat(storeKeyNameStringify(directives[key]), ")");
          } else {
            completeFieldName += "@".concat(key);
          }
        });
      }
      return completeFieldName;
    }, {
      setStringify: function (s) {
        var previous = storeKeyNameStringify;
        storeKeyNameStringify = s;
        return previous;
      }
    });
    function argumentsObjectFromField(field, variables) {
      if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
      }
      return null;
    }
    function resultKeyNameFromField(field) {
      return field.alias ? field.alias.value : field.name.value;
    }
    function getTypenameFromResult(result, selectionSet, fragmentMap) {
      var fragments;
      for (var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++) {
        var selection = _a2[_i];
        if (isField(selection)) {
          if (selection.name.value === "__typename") {
            return result[resultKeyNameFromField(selection)];
          }
        } else if (fragments) {
          fragments.push(selection);
        } else {
          fragments = [selection];
        }
      }
      if (typeof result.__typename === "string") {
        return result.__typename;
      }
      if (fragments) {
        for (var _b = 0, fragments_1 = fragments; _b < fragments_1.length; _b++) {
          var selection = fragments_1[_b];
          var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
          if (typeof typename === "string") {
            return typename;
          }
        }
      }
    }
    function isField(selection) {
      return selection.kind === "Field";
    }
    function isInlineFragment(selection) {
      return selection.kind === "InlineFragment";
    }
    function checkDocument(doc) {
      invariant$1(doc && doc.kind === "Document", 88);
      var operations = doc.definitions.filter(function (d) {
        return d.kind !== "FragmentDefinition";
      }).map(function (definition) {
        if (definition.kind !== "OperationDefinition") {
          throw newInvariantError(89, definition.kind);
        }
        return definition;
      });
      invariant$1(operations.length <= 1, 90, operations.length);
      return doc;
    }
    function getOperationDefinition(doc) {
      checkDocument(doc);
      return doc.definitions.filter(function (definition) {
        return definition.kind === "OperationDefinition";
      })[0];
    }
    function getOperationName(doc) {
      return doc.definitions.filter(function (definition) {
        return definition.kind === "OperationDefinition" && !!definition.name;
      }).map(function (x2) {
        return x2.name.value;
      })[0] || null;
    }
    function getFragmentDefinitions(doc) {
      return doc.definitions.filter(function (definition) {
        return definition.kind === "FragmentDefinition";
      });
    }
    function getQueryDefinition(doc) {
      var queryDef = getOperationDefinition(doc);
      invariant$1(queryDef && queryDef.operation === "query", 91);
      return queryDef;
    }
    function getFragmentDefinition(doc) {
      invariant$1(doc.kind === "Document", 92);
      invariant$1(doc.definitions.length <= 1, 93);
      var fragmentDef = doc.definitions[0];
      invariant$1(fragmentDef.kind === "FragmentDefinition", 94);
      return fragmentDef;
    }
    function getMainDefinition(queryDoc) {
      checkDocument(queryDoc);
      var fragmentDefinition;
      for (var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++) {
        var definition = _a2[_i];
        if (definition.kind === "OperationDefinition") {
          var operation = definition.operation;
          if (operation === "query" || operation === "mutation" || operation === "subscription") {
            return definition;
          }
        }
        if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
          fragmentDefinition = definition;
        }
      }
      if (fragmentDefinition) {
        return fragmentDefinition;
      }
      throw newInvariantError(95);
    }
    function getDefaultValues(definition) {
      var defaultValues = /* @__PURE__ */ Object.create(null);
      var defs = definition && definition.variableDefinitions;
      if (defs && defs.length) {
        defs.forEach(function (def) {
          if (def.defaultValue) {
            valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
          }
        });
      }
      return defaultValues;
    }
    let currentContext = null;
    const MISSING_VALUE = {};
    let idCounter = 1;
    const makeSlotClass = () => class Slot {
      constructor() {
        this.id = [
          "slot",
          idCounter++,
          Date.now(),
          Math.random().toString(36).slice(2)
        ].join(":");
      }
      hasValue() {
        for (let context = currentContext; context; context = context.parent) {
          if (this.id in context.slots) {
            const value = context.slots[this.id];
            if (value === MISSING_VALUE)
              break;
            if (context !== currentContext) {
              currentContext.slots[this.id] = value;
            }
            return true;
          }
        }
        if (currentContext) {
          currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
      }
      getValue() {
        if (this.hasValue()) {
          return currentContext.slots[this.id];
        }
      }
      withValue(value, callback, args, thisArg) {
        const slots = {
          __proto__: null,
          [this.id]: value
        };
        const parent = currentContext;
        currentContext = { parent, slots };
        try {
          return callback.apply(thisArg, args);
        } finally {
          currentContext = parent;
        }
      }
      // Capture the current context and wrap a callback function so that it
      // reestablishes the captured context when called.
      static bind(callback) {
        const context = currentContext;
        return function () {
          const saved = currentContext;
          try {
            currentContext = context;
            return callback.apply(this, arguments);
          } finally {
            currentContext = saved;
          }
        };
      }
      // Immediately run a callback function without any captured context.
      static noContext(callback, args, thisArg) {
        if (currentContext) {
          const saved = currentContext;
          try {
            currentContext = null;
            return callback.apply(thisArg, args);
          } finally {
            currentContext = saved;
          }
        } else {
          return callback.apply(thisArg, args);
        }
      }
    };
    function maybe(fn) {
      try {
        return fn();
      } catch (ignored) {
      }
    }
    const globalKey = "@wry/context:Slot";
    const host = (
      // Prefer globalThis when available.
      // https://github.com/benjamn/wryware/issues/347
      maybe(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
      // bundlers to the appropriate identifier (window, self, ...) depending on the
      // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
      maybe(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
      // back to using the Array constructor as a namespace, but that was flagged in
      // https://github.com/benjamn/wryware/issues/347, and can be avoided.
      /* @__PURE__ */ Object.create(null)
    );
    const globalHost = host;
    const Slot = globalHost[globalKey] || // Earlier versions of this package stored the globalKey property on the Array
      // constructor, so we check there as well, to prevent Slot class duplication.
      Array[globalKey] || function (Slot2) {
        try {
          Object.defineProperty(globalHost, globalKey, {
            value: Slot2,
            enumerable: false,
            writable: false,
            // When it was possible for globalHost to be the Array constructor (a
            // legacy Slot dedup strategy), it was important for the property to be
            // configurable:true so it could be deleted. That does not seem to be as
            // important when globalHost is the global object, but I don't want to
            // cause similar problems again, and configurable:true seems safest.
            // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
            configurable: true
          });
        } finally {
          return Slot2;
        }
      }(makeSlotClass());
    const { bind, noContext } = Slot;
    const parentEntrySlot = new Slot();
    const { hasOwnProperty: hasOwnProperty$6 } = Object.prototype;
    const arrayFromSet = Array.from || function (set) {
      const array = [];
      set.forEach((item) => array.push(item));
      return array;
    };
    function maybeUnsubscribe(entryOrDep) {
      const { unsubscribe } = entryOrDep;
      if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
      }
    }
    const emptySetPool = [];
    const POOL_TARGET_SIZE = 100;
    function assert(condition, optionalMessage) {
      if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
      }
    }
    function valueIs(a, b) {
      const len = a.length;
      return (
        // Unknown values are not equal to each other.
        len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length && // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]
      );
    }
    function valueGet(value) {
      switch (value.length) {
        case 0:
          throw new Error("unknown value");
        case 1:
          return value[0];
        case 2:
          throw value[1];
      }
    }
    function valueCopy(value) {
      return value.slice(0);
    }
    class Entry {
      constructor(fn) {
        this.fn = fn;
        this.parents = /* @__PURE__ */ new Set();
        this.childValues = /* @__PURE__ */ new Map();
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
      }
      peek() {
        if (this.value.length === 1 && !mightBeDirty(this)) {
          rememberParent(this);
          return this.value[0];
        }
      }
      // This is the most important method of the Entry API, because it
      // determines whether the cached this.value can be returned immediately,
      // or must be recomputed. The overall performance of the caching system
      // depends on the truth of the following observations: (1) this.dirty is
      // usually false, (2) this.dirtyChildren is usually null/empty, and thus
      // (3) valueGet(this.value) is usually returned without recomputation.
      recompute(args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
      }
      setDirty() {
        if (this.dirty)
          return;
        this.dirty = true;
        reportDirty(this);
        maybeUnsubscribe(this);
      }
      dispose() {
        this.setDirty();
        forgetChildren(this);
        eachParent(this, (parent, child) => {
          parent.setDirty();
          forgetChild(parent, this);
        });
      }
      forget() {
        this.dispose();
      }
      dependOn(dep2) {
        dep2.add(this);
        if (!this.deps) {
          this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
        }
        this.deps.add(dep2);
      }
      forgetDeps() {
        if (this.deps) {
          arrayFromSet(this.deps).forEach((dep2) => dep2.delete(this));
          this.deps.clear();
          emptySetPool.push(this.deps);
          this.deps = null;
        }
      }
    }
    Entry.count = 0;
    function rememberParent(child) {
      const parent = parentEntrySlot.getValue();
      if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
          parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
          reportDirtyChild(parent, child);
        } else {
          reportCleanChild(parent, child);
        }
        return parent;
      }
    }
    function reallyRecompute(entry, args) {
      forgetChildren(entry);
      parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
      if (maybeSubscribe(entry, args)) {
        setClean(entry);
      }
      return valueGet(entry.value);
    }
    function recomputeNewValue(entry, args) {
      entry.recomputing = true;
      const { normalizeResult } = entry;
      let oldValueCopy;
      if (normalizeResult && entry.value.length === 1) {
        oldValueCopy = valueCopy(entry.value);
      }
      entry.value.length = 0;
      try {
        entry.value[0] = entry.fn.apply(null, args);
        if (normalizeResult && oldValueCopy && !valueIs(oldValueCopy, entry.value)) {
          try {
            entry.value[0] = normalizeResult(entry.value[0], oldValueCopy[0]);
          } catch (_a2) {
          }
        }
      } catch (e) {
        entry.value[1] = e;
      }
      entry.recomputing = false;
    }
    function mightBeDirty(entry) {
      return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
    }
    function setClean(entry) {
      entry.dirty = false;
      if (mightBeDirty(entry)) {
        return;
      }
      reportClean(entry);
    }
    function reportDirty(child) {
      eachParent(child, reportDirtyChild);
    }
    function reportClean(child) {
      eachParent(child, reportCleanChild);
    }
    function eachParent(child, callback) {
      const parentCount = child.parents.size;
      if (parentCount) {
        const parents = arrayFromSet(child.parents);
        for (let i = 0; i < parentCount; ++i) {
          callback(parents[i], child);
        }
      }
    }
    function reportDirtyChild(parent, child) {
      assert(parent.childValues.has(child));
      assert(mightBeDirty(child));
      const parentWasClean = !mightBeDirty(parent);
      if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
      } else if (parent.dirtyChildren.has(child)) {
        return;
      }
      parent.dirtyChildren.add(child);
      if (parentWasClean) {
        reportDirty(parent);
      }
    }
    function reportCleanChild(parent, child) {
      assert(parent.childValues.has(child));
      assert(!mightBeDirty(child));
      const childValue = parent.childValues.get(child);
      if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
      } else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
      }
      removeDirtyChild(parent, child);
      if (mightBeDirty(parent)) {
        return;
      }
      reportClean(parent);
    }
    function removeDirtyChild(parent, child) {
      const dc2 = parent.dirtyChildren;
      if (dc2) {
        dc2.delete(child);
        if (dc2.size === 0) {
          if (emptySetPool.length < POOL_TARGET_SIZE) {
            emptySetPool.push(dc2);
          }
          parent.dirtyChildren = null;
        }
      }
    }
    function forgetChildren(parent) {
      if (parent.childValues.size > 0) {
        parent.childValues.forEach((_value, child) => {
          forgetChild(parent, child);
        });
      }
      parent.forgetDeps();
      assert(parent.dirtyChildren === null);
    }
    function forgetChild(parent, child) {
      child.parents.delete(parent);
      parent.childValues.delete(child);
      removeDirtyChild(parent, child);
    }
    function maybeSubscribe(entry, args) {
      if (typeof entry.subscribe === "function") {
        try {
          maybeUnsubscribe(entry);
          entry.unsubscribe = entry.subscribe.apply(null, args);
        } catch (e) {
          entry.setDirty();
          return false;
        }
      }
      return true;
    }
    const EntryMethods = {
      setDirty: true,
      dispose: true,
      forget: true
      // Fully remove parent Entry from LRU cache and computation graph
    };
    function dep(options) {
      const depsByKey = /* @__PURE__ */ new Map();
      function depend(key) {
        const parent = parentEntrySlot.getValue();
        if (parent) {
          let dep2 = depsByKey.get(key);
          if (!dep2) {
            depsByKey.set(key, dep2 = /* @__PURE__ */ new Set());
          }
          parent.dependOn(dep2);
        }
      }
      depend.dirty = function dirty(key, entryMethodName) {
        const dep2 = depsByKey.get(key);
        if (dep2) {
          const m2 = entryMethodName && hasOwnProperty$6.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
          arrayFromSet(dep2).forEach((entry) => entry[m2]());
          depsByKey.delete(key);
          maybeUnsubscribe(dep2);
        }
      };
      return depend;
    }
    let defaultKeyTrie;
    function defaultMakeCacheKey(...args) {
      const trie = defaultKeyTrie || (defaultKeyTrie = new Trie(typeof WeakMap === "function"));
      return trie.lookupArray(args);
    }
    const caches = /* @__PURE__ */ new Set();
    function wrap(originalFunction, { max = Math.pow(2, 16), keyArgs, makeCacheKey = defaultMakeCacheKey, normalizeResult, subscribe, cache: cacheOption = StrongCache } = /* @__PURE__ */ Object.create(null)) {
      const cache2 = typeof cacheOption === "function" ? new cacheOption(max, (entry) => entry.dispose()) : cacheOption;
      const optimistic = function () {
        const key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) {
          return originalFunction.apply(null, arguments);
        }
        let entry = cache2.get(key);
        if (!entry) {
          cache2.set(key, entry = new Entry(originalFunction));
          entry.normalizeResult = normalizeResult;
          entry.subscribe = subscribe;
          entry.forget = () => cache2.delete(key);
        }
        const value = entry.recompute(Array.prototype.slice.call(arguments));
        cache2.set(key, entry);
        caches.add(cache2);
        if (!parentEntrySlot.hasValue()) {
          caches.forEach((cache3) => cache3.clean());
          caches.clear();
        }
        return value;
      };
      Object.defineProperty(optimistic, "size", {
        get: () => cache2.size,
        configurable: false,
        enumerable: false
      });
      Object.freeze(optimistic.options = {
        max,
        keyArgs,
        makeCacheKey,
        normalizeResult,
        subscribe,
        cache: cache2
      });
      function dirtyKey(key) {
        const entry = key && cache2.get(key);
        if (entry) {
          entry.setDirty();
        }
      }
      optimistic.dirtyKey = dirtyKey;
      optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
      };
      function peekKey(key) {
        const entry = key && cache2.get(key);
        if (entry) {
          return entry.peek();
        }
      }
      optimistic.peekKey = peekKey;
      optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
      };
      function forgetKey(key) {
        return key ? cache2.delete(key) : false;
      }
      optimistic.forgetKey = forgetKey;
      optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
      };
      optimistic.makeCacheKey = makeCacheKey;
      optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
      } : makeCacheKey;
      return Object.freeze(optimistic);
    }
    function identity(document2) {
      return document2;
    }
    var DocumentTransform = (
      /** @class */
      function () {
        function DocumentTransform2(transform, options) {
          if (options === void 0) {
            options = /* @__PURE__ */ Object.create(null);
          }
          this.resultCache = canUseWeakSet ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set();
          this.transform = transform;
          if (options.getCacheKey) {
            this.getCacheKey = options.getCacheKey;
          }
          this.cached = options.cache !== false;
          this.resetCache();
        }
        DocumentTransform2.prototype.getCacheKey = function (document2) {
          return [document2];
        };
        DocumentTransform2.identity = function () {
          return new DocumentTransform2(identity, { cache: false });
        };
        DocumentTransform2.split = function (predicate, left, right) {
          if (right === void 0) {
            right = DocumentTransform2.identity();
          }
          return Object.assign(new DocumentTransform2(
            function (document2) {
              var documentTransform = predicate(document2) ? left : right;
              return documentTransform.transformDocument(document2);
            },
            // Reasonably assume both `left` and `right` transforms handle their own caching
            { cache: false }
          ), { left, right });
        };
        DocumentTransform2.prototype.resetCache = function () {
          var _this = this;
          if (this.cached) {
            var stableCacheKeys_1 = new Trie(canUseWeakMap);
            this.performWork = wrap(DocumentTransform2.prototype.performWork.bind(this), {
              makeCacheKey: function (document2) {
                var cacheKeys = _this.getCacheKey(document2);
                if (cacheKeys) {
                  invariant$1(Array.isArray(cacheKeys), 77);
                  return stableCacheKeys_1.lookupArray(cacheKeys);
                }
              },
              max: cacheSizes["documentTransform.cache"],
              cache: WeakCache
            });
          }
        };
        DocumentTransform2.prototype.performWork = function (document2) {
          checkDocument(document2);
          return this.transform(document2);
        };
        DocumentTransform2.prototype.transformDocument = function (document2) {
          if (this.resultCache.has(document2)) {
            return document2;
          }
          var transformedDocument = this.performWork(document2);
          this.resultCache.add(transformedDocument);
          return transformedDocument;
        };
        DocumentTransform2.prototype.concat = function (otherTransform) {
          var _this = this;
          return Object.assign(new DocumentTransform2(
            function (document2) {
              return otherTransform.transformDocument(_this.transformDocument(document2));
            },
            // Reasonably assume both transforms handle their own caching
            { cache: false }
          ), {
            left: this,
            right: otherTransform
          });
        };
        return DocumentTransform2;
      }()
    );
    var printCache;
    var print = Object.assign(function (ast) {
      var result = printCache.get(ast);
      if (!result) {
        result = print$1(ast);
        printCache.set(ast, result);
      }
      return result;
    }, {
      reset: function () {
        printCache = new AutoCleanedWeakCache(
          cacheSizes.print || 2e3
          /* defaultCacheSizes.print */
        );
      }
    });
    print.reset();
    if (globalThis.__DEV__ !== false) {
      registerGlobalCache("print", function () {
        return printCache ? printCache.size : 0;
      });
    }
    var isArray = Array.isArray;
    function isNonEmptyArray(value) {
      return Array.isArray(value) && value.length > 0;
    }
    var TYPENAME_FIELD = {
      kind: Kind.FIELD,
      name: {
        kind: Kind.NAME,
        value: "__typename"
      }
    };
    function isEmpty(op, fragmentMap) {
      return !op || op.selectionSet.selections.every(function (selection) {
        return selection.kind === Kind.FRAGMENT_SPREAD && isEmpty(fragmentMap[selection.name.value], fragmentMap);
      });
    }
    function nullIfDocIsEmpty(doc) {
      return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
    }
    function getDirectiveMatcher(configs) {
      var names = /* @__PURE__ */ new Map();
      var tests = /* @__PURE__ */ new Map();
      configs.forEach(function (directive) {
        if (directive) {
          if (directive.name) {
            names.set(directive.name, directive);
          } else if (directive.test) {
            tests.set(directive.test, directive);
          }
        }
      });
      return function (directive) {
        var config = names.get(directive.name.value);
        if (!config && tests.size) {
          tests.forEach(function (testConfig, test) {
            if (test(directive)) {
              config = testConfig;
            }
          });
        }
        return config;
      };
    }
    function makeInUseGetterFunction(defaultKey) {
      var map = /* @__PURE__ */ new Map();
      return function inUseGetterFunction(key) {
        if (key === void 0) {
          key = defaultKey;
        }
        var inUse = map.get(key);
        if (!inUse) {
          map.set(key, inUse = {
            // Variable and fragment spread names used directly within this
            // operation or fragment definition, as identified by key. These sets
            // will be populated during the first traversal of the document in
            // removeDirectivesFromDocument below.
            variables: /* @__PURE__ */ new Set(),
            fragmentSpreads: /* @__PURE__ */ new Set()
          });
        }
        return inUse;
      };
    }
    function removeDirectivesFromDocument(directives, doc) {
      checkDocument(doc);
      var getInUseByOperationName = makeInUseGetterFunction("");
      var getInUseByFragmentName = makeInUseGetterFunction("");
      var getInUse = function (ancestors) {
        for (var p2 = 0, ancestor = void 0; p2 < ancestors.length && (ancestor = ancestors[p2]); ++p2) {
          if (isArray(ancestor))
            continue;
          if (ancestor.kind === Kind.OPERATION_DEFINITION) {
            return getInUseByOperationName(ancestor.name && ancestor.name.value);
          }
          if (ancestor.kind === Kind.FRAGMENT_DEFINITION) {
            return getInUseByFragmentName(ancestor.name.value);
          }
        }
        globalThis.__DEV__ !== false && invariant$1.error(97);
        return null;
      };
      var operationCount = 0;
      for (var i = doc.definitions.length - 1; i >= 0; --i) {
        if (doc.definitions[i].kind === Kind.OPERATION_DEFINITION) {
          ++operationCount;
        }
      }
      var directiveMatcher = getDirectiveMatcher(directives);
      var shouldRemoveField = function (nodeDirectives) {
        return isNonEmptyArray(nodeDirectives) && nodeDirectives.map(directiveMatcher).some(function (config) {
          return config && config.remove;
        });
      };
      var originalFragmentDefsByPath = /* @__PURE__ */ new Map();
      var firstVisitMadeChanges = false;
      var fieldOrInlineFragmentVisitor = {
        enter: function (node) {
          if (shouldRemoveField(node.directives)) {
            firstVisitMadeChanges = true;
            return null;
          }
        }
      };
      var docWithoutDirectiveSubtrees = visit(doc, {
        // These two AST node types share the same implementation, defined above.
        Field: fieldOrInlineFragmentVisitor,
        InlineFragment: fieldOrInlineFragmentVisitor,
        VariableDefinition: {
          enter: function () {
            return false;
          }
        },
        Variable: {
          enter: function (node, _key, _parent, _path, ancestors) {
            var inUse = getInUse(ancestors);
            if (inUse) {
              inUse.variables.add(node.name.value);
            }
          }
        },
        FragmentSpread: {
          enter: function (node, _key, _parent, _path, ancestors) {
            if (shouldRemoveField(node.directives)) {
              firstVisitMadeChanges = true;
              return null;
            }
            var inUse = getInUse(ancestors);
            if (inUse) {
              inUse.fragmentSpreads.add(node.name.value);
            }
          }
        },
        FragmentDefinition: {
          enter: function (node, _key, _parent, path) {
            originalFragmentDefsByPath.set(JSON.stringify(path), node);
          },
          leave: function (node, _key, _parent, path) {
            var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
            if (node === originalNode) {
              return node;
            }
            if (
              // This logic applies only if the document contains one or more
              // operations, since removing all fragments from a document containing
              // only fragments makes the document useless.
              operationCount > 0 && node.selectionSet.selections.every(function (selection) {
                return selection.kind === Kind.FIELD && selection.name.value === "__typename";
              })
            ) {
              getInUseByFragmentName(node.name.value).removed = true;
              firstVisitMadeChanges = true;
              return null;
            }
          }
        },
        Directive: {
          leave: function (node) {
            if (directiveMatcher(node)) {
              firstVisitMadeChanges = true;
              return null;
            }
          }
        }
      });
      if (!firstVisitMadeChanges) {
        return doc;
      }
      var populateTransitiveVars = function (inUse) {
        if (!inUse.transitiveVars) {
          inUse.transitiveVars = new Set(inUse.variables);
          if (!inUse.removed) {
            inUse.fragmentSpreads.forEach(function (childFragmentName) {
              populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function (varName) {
                inUse.transitiveVars.add(varName);
              });
            });
          }
        }
        return inUse;
      };
      var allFragmentNamesUsed = /* @__PURE__ */ new Set();
      docWithoutDirectiveSubtrees.definitions.forEach(function (def) {
        if (def.kind === Kind.OPERATION_DEFINITION) {
          populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function (childFragmentName) {
            allFragmentNamesUsed.add(childFragmentName);
          });
        } else if (def.kind === Kind.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
          // definitions count as usages of their own fragment names. This heuristic
          // prevents accidentally removing all fragment definitions from the
          // document just because it contains no operations that use the fragments.
          operationCount === 0 && !getInUseByFragmentName(def.name.value).removed) {
          allFragmentNamesUsed.add(def.name.value);
        }
      });
      allFragmentNamesUsed.forEach(function (fragmentName) {
        populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function (childFragmentName) {
          allFragmentNamesUsed.add(childFragmentName);
        });
      });
      var fragmentWillBeRemoved = function (fragmentName) {
        return !!// A fragment definition will be removed if there are no spreads that refer
          // to it, or the fragment was explicitly removed because it had no fields
          // other than __typename.
          (!allFragmentNamesUsed.has(fragmentName) || getInUseByFragmentName(fragmentName).removed);
      };
      var enterVisitor = {
        enter: function (node) {
          if (fragmentWillBeRemoved(node.name.value)) {
            return null;
          }
        }
      };
      return nullIfDocIsEmpty(visit(docWithoutDirectiveSubtrees, {
        // If the fragment is going to be removed, then leaving any dangling
        // FragmentSpread nodes with the same name would be a mistake.
        FragmentSpread: enterVisitor,
        // This is where the fragment definition is actually removed.
        FragmentDefinition: enterVisitor,
        OperationDefinition: {
          leave: function (node) {
            if (node.variableDefinitions) {
              var usedVariableNames_1 = populateTransitiveVars(
                // If an operation is anonymous, we use the empty string as its key.
                getInUseByOperationName(node.name && node.name.value)
              ).transitiveVars;
              if (usedVariableNames_1.size < node.variableDefinitions.length) {
                return __assign(__assign({}, node), {
                  variableDefinitions: node.variableDefinitions.filter(function (varDef) {
                    return usedVariableNames_1.has(varDef.variable.name.value);
                  })
                });
              }
            }
          }
        }
      }));
    }
    var addTypenameToDocument = Object.assign(function (doc) {
      return visit(doc, {
        SelectionSet: {
          enter: function (node, _key, parent) {
            if (parent && parent.kind === Kind.OPERATION_DEFINITION) {
              return;
            }
            var selections = node.selections;
            if (!selections) {
              return;
            }
            var skip = selections.some(function (selection) {
              return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
            });
            if (skip) {
              return;
            }
            var field = parent;
            if (isField(field) && field.directives && field.directives.some(function (d) {
              return d.name.value === "export";
            })) {
              return;
            }
            return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
          }
        }
      });
    }, {
      added: function (field) {
        return field === TYPENAME_FIELD;
      }
    });
    function buildQueryFromSelectionSet(document2) {
      var definition = getMainDefinition(document2);
      var definitionOperation = definition.operation;
      if (definitionOperation === "query") {
        return document2;
      }
      var modifiedDoc = visit(document2, {
        OperationDefinition: {
          enter: function (node) {
            return __assign(__assign({}, node), { operation: "query" });
          }
        }
      });
      return modifiedDoc;
    }
    function removeClientSetsFromDocument(document2) {
      checkDocument(document2);
      var modifiedDoc = removeDirectivesFromDocument([
        {
          test: function (directive) {
            return directive.name.value === "client";
          },
          remove: true
        }
      ], document2);
      return modifiedDoc;
    }
    function addNonReactiveToNamedFragments(document2) {
      checkDocument(document2);
      return visit(document2, {
        FragmentSpread: function (node) {
          var _a2;
          if ((_a2 = node.directives) === null || _a2 === void 0 ? void 0 : _a2.some(function (directive) {
            return directive.name.value === "unmask";
          })) {
            return;
          }
          return __assign(__assign({}, node), {
            directives: __spreadArray(__spreadArray([], node.directives || [], true), [
              {
                kind: Kind.DIRECTIVE,
                name: { kind: Kind.NAME, value: "nonreactive" }
              }
            ], false)
          });
        }
      });
    }
    var hasOwnProperty$5 = Object.prototype.hasOwnProperty;
    function mergeDeep() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      return mergeDeepArray(sources);
    }
    function mergeDeepArray(sources) {
      var target = sources[0] || {};
      var count = sources.length;
      if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
          target = merger.merge(target, sources[i]);
        }
      }
      return target;
    }
    var defaultReconciler = function (target, source, property) {
      return this.merge(target[property], source[property]);
    };
    var DeepMerger = (
      /** @class */
      function () {
        function DeepMerger2(reconciler) {
          if (reconciler === void 0) {
            reconciler = defaultReconciler;
          }
          this.reconciler = reconciler;
          this.isObject = isNonNullObject;
          this.pastCopies = /* @__PURE__ */ new Set();
        }
        DeepMerger2.prototype.merge = function (target, source) {
          var _this = this;
          var context = [];
          for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
          }
          if (isNonNullObject(source) && isNonNullObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
              if (hasOwnProperty$5.call(target, sourceKey)) {
                var targetValue = target[sourceKey];
                if (source[sourceKey] !== targetValue) {
                  var result = _this.reconciler.apply(_this, __spreadArray([
                    target,
                    source,
                    sourceKey
                  ], context, false));
                  if (result !== targetValue) {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = result;
                  }
                }
              } else {
                target = _this.shallowCopyForMerge(target);
                target[sourceKey] = source[sourceKey];
              }
            });
            return target;
          }
          return source;
        };
        DeepMerger2.prototype.shallowCopyForMerge = function (value) {
          if (isNonNullObject(value)) {
            if (!this.pastCopies.has(value)) {
              if (Array.isArray(value)) {
                value = value.slice(0);
              } else {
                value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
              }
              this.pastCopies.add(value);
            }
          }
          return value;
        };
        return DeepMerger2;
      }()
    );
    function _createForOfIteratorHelperLoose(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (it) return (it = it.call(o)).next.bind(it);
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n2 = Object.prototype.toString.call(o).slice(8, -1);
      if (n2 === "Object" && o.constructor) n2 = o.constructor.name;
      if (n2 === "Map" || n2 === "Set") return Array.from(o);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    var hasSymbols = function () {
      return typeof Symbol === "function";
    };
    var hasSymbol = function (name) {
      return hasSymbols() && Boolean(Symbol[name]);
    };
    var getSymbol = function (name) {
      return hasSymbol(name) ? Symbol[name] : "@@" + name;
    };
    if (hasSymbols() && !hasSymbol("observable")) {
      Symbol.observable = Symbol("observable");
    }
    var SymbolIterator = getSymbol("iterator");
    var SymbolObservable = getSymbol("observable");
    var SymbolSpecies = getSymbol("species");
    function getMethod(obj, key) {
      var value = obj[key];
      if (value == null) return void 0;
      if (typeof value !== "function") throw new TypeError(value + " is not a function");
      return value;
    }
    function getSpecies(obj) {
      var ctor = obj.constructor;
      if (ctor !== void 0) {
        ctor = ctor[SymbolSpecies];
        if (ctor === null) {
          ctor = void 0;
        }
      }
      return ctor !== void 0 ? ctor : Observable;
    }
    function isObservable(x2) {
      return x2 instanceof Observable;
    }
    function hostReportError(e) {
      if (hostReportError.log) {
        hostReportError.log(e);
      } else {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function enqueue(fn) {
      Promise.resolve().then(function () {
        try {
          fn();
        } catch (e) {
          hostReportError(e);
        }
      });
    }
    function cleanupSubscription(subscription) {
      var cleanup = subscription._cleanup;
      if (cleanup === void 0) return;
      subscription._cleanup = void 0;
      if (!cleanup) {
        return;
      }
      try {
        if (typeof cleanup === "function") {
          cleanup();
        } else {
          var unsubscribe = getMethod(cleanup, "unsubscribe");
          if (unsubscribe) {
            unsubscribe.call(cleanup);
          }
        }
      } catch (e) {
        hostReportError(e);
      }
    }
    function closeSubscription(subscription) {
      subscription._observer = void 0;
      subscription._queue = void 0;
      subscription._state = "closed";
    }
    function flushSubscription(subscription) {
      var queue = subscription._queue;
      if (!queue) {
        return;
      }
      subscription._queue = void 0;
      subscription._state = "ready";
      for (var i = 0; i < queue.length; ++i) {
        notifySubscription(subscription, queue[i].type, queue[i].value);
        if (subscription._state === "closed") break;
      }
    }
    function notifySubscription(subscription, type, value) {
      subscription._state = "running";
      var observer = subscription._observer;
      try {
        var m2 = getMethod(observer, type);
        switch (type) {
          case "next":
            if (m2) m2.call(observer, value);
            break;
          case "error":
            closeSubscription(subscription);
            if (m2) m2.call(observer, value);
            else throw value;
            break;
          case "complete":
            closeSubscription(subscription);
            if (m2) m2.call(observer);
            break;
        }
      } catch (e) {
        hostReportError(e);
      }
      if (subscription._state === "closed") cleanupSubscription(subscription);
      else if (subscription._state === "running") subscription._state = "ready";
    }
    function onNotify(subscription, type, value) {
      if (subscription._state === "closed") return;
      if (subscription._state === "buffering") {
        subscription._queue.push({
          type,
          value
        });
        return;
      }
      if (subscription._state !== "ready") {
        subscription._state = "buffering";
        subscription._queue = [{
          type,
          value
        }];
        enqueue(function () {
          return flushSubscription(subscription);
        });
        return;
      }
      notifySubscription(subscription, type, value);
    }
    var Subscription = /* @__PURE__ */ function () {
      function Subscription2(observer, subscriber) {
        this._cleanup = void 0;
        this._observer = observer;
        this._queue = void 0;
        this._state = "initializing";
        var subscriptionObserver = new SubscriptionObserver(this);
        try {
          this._cleanup = subscriber.call(void 0, subscriptionObserver);
        } catch (e) {
          subscriptionObserver.error(e);
        }
        if (this._state === "initializing") this._state = "ready";
      }
      var _proto = Subscription2.prototype;
      _proto.unsubscribe = function unsubscribe() {
        if (this._state !== "closed") {
          closeSubscription(this);
          cleanupSubscription(this);
        }
      };
      _createClass(Subscription2, [{
        key: "closed",
        get: function () {
          return this._state === "closed";
        }
      }]);
      return Subscription2;
    }();
    var SubscriptionObserver = /* @__PURE__ */ function () {
      function SubscriptionObserver2(subscription) {
        this._subscription = subscription;
      }
      var _proto2 = SubscriptionObserver2.prototype;
      _proto2.next = function next(value) {
        onNotify(this._subscription, "next", value);
      };
      _proto2.error = function error(value) {
        onNotify(this._subscription, "error", value);
      };
      _proto2.complete = function complete() {
        onNotify(this._subscription, "complete");
      };
      _createClass(SubscriptionObserver2, [{
        key: "closed",
        get: function () {
          return this._subscription._state === "closed";
        }
      }]);
      return SubscriptionObserver2;
    }();
    var Observable = /* @__PURE__ */ function () {
      function Observable2(subscriber) {
        if (!(this instanceof Observable2)) throw new TypeError("Observable cannot be called as a function");
        if (typeof subscriber !== "function") throw new TypeError("Observable initializer must be a function");
        this._subscriber = subscriber;
      }
      var _proto3 = Observable2.prototype;
      _proto3.subscribe = function subscribe(observer) {
        if (typeof observer !== "object" || observer === null) {
          observer = {
            next: observer,
            error: arguments[1],
            complete: arguments[2]
          };
        }
        return new Subscription(observer, this._subscriber);
      };
      _proto3.forEach = function forEach2(fn) {
        var _this = this;
        return new Promise(function (resolve, reject) {
          if (typeof fn !== "function") {
            reject(new TypeError(fn + " is not a function"));
            return;
          }
          function done() {
            subscription.unsubscribe();
            resolve();
          }
          var subscription = _this.subscribe({
            next: function (value) {
              try {
                fn(value, done);
              } catch (e) {
                reject(e);
                subscription.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
        });
      };
      _proto3.map = function map(fn) {
        var _this2 = this;
        if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
        var C2 = getSpecies(this);
        return new C2(function (observer) {
          return _this2.subscribe({
            next: function (value) {
              try {
                value = fn(value);
              } catch (e) {
                return observer.error(e);
              }
              observer.next(value);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              observer.complete();
            }
          });
        });
      };
      _proto3.filter = function filter(fn) {
        var _this3 = this;
        if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
        var C2 = getSpecies(this);
        return new C2(function (observer) {
          return _this3.subscribe({
            next: function (value) {
              try {
                if (!fn(value)) return;
              } catch (e) {
                return observer.error(e);
              }
              observer.next(value);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              observer.complete();
            }
          });
        });
      };
      _proto3.reduce = function reduce(fn) {
        var _this4 = this;
        if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
        var C2 = getSpecies(this);
        var hasSeed = arguments.length > 1;
        var hasValue = false;
        var seed = arguments[1];
        var acc = seed;
        return new C2(function (observer) {
          return _this4.subscribe({
            next: function (value) {
              var first = !hasValue;
              hasValue = true;
              if (!first || hasSeed) {
                try {
                  acc = fn(acc, value);
                } catch (e) {
                  return observer.error(e);
                }
              } else {
                acc = value;
              }
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              if (!hasValue && !hasSeed) return observer.error(new TypeError("Cannot reduce an empty sequence"));
              observer.next(acc);
              observer.complete();
            }
          });
        });
      };
      _proto3.concat = function concat() {
        var _this5 = this;
        for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }
        var C2 = getSpecies(this);
        return new C2(function (observer) {
          var subscription;
          var index2 = 0;
          function startNext(next) {
            subscription = next.subscribe({
              next: function (v2) {
                observer.next(v2);
              },
              error: function (e) {
                observer.error(e);
              },
              complete: function () {
                if (index2 === sources.length) {
                  subscription = void 0;
                  observer.complete();
                } else {
                  startNext(C2.from(sources[index2++]));
                }
              }
            });
          }
          startNext(_this5);
          return function () {
            if (subscription) {
              subscription.unsubscribe();
              subscription = void 0;
            }
          };
        });
      };
      _proto3.flatMap = function flatMap(fn) {
        var _this6 = this;
        if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
        var C2 = getSpecies(this);
        return new C2(function (observer) {
          var subscriptions = [];
          var outer = _this6.subscribe({
            next: function (value) {
              if (fn) {
                try {
                  value = fn(value);
                } catch (e) {
                  return observer.error(e);
                }
              }
              var inner = C2.from(value).subscribe({
                next: function (value2) {
                  observer.next(value2);
                },
                error: function (e) {
                  observer.error(e);
                },
                complete: function () {
                  var i = subscriptions.indexOf(inner);
                  if (i >= 0) subscriptions.splice(i, 1);
                  completeIfDone();
                }
              });
              subscriptions.push(inner);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              completeIfDone();
            }
          });
          function completeIfDone() {
            if (outer.closed && subscriptions.length === 0) observer.complete();
          }
          return function () {
            subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
            outer.unsubscribe();
          };
        });
      };
      _proto3[SymbolObservable] = function () {
        return this;
      };
      Observable2.from = function from(x2) {
        var C2 = typeof this === "function" ? this : Observable2;
        if (x2 == null) throw new TypeError(x2 + " is not an object");
        var method = getMethod(x2, SymbolObservable);
        if (method) {
          var observable = method.call(x2);
          if (Object(observable) !== observable) throw new TypeError(observable + " is not an object");
          if (isObservable(observable) && observable.constructor === C2) return observable;
          return new C2(function (observer) {
            return observable.subscribe(observer);
          });
        }
        if (hasSymbol("iterator")) {
          method = getMethod(x2, SymbolIterator);
          if (method) {
            return new C2(function (observer) {
              enqueue(function () {
                if (observer.closed) return;
                for (var _iterator = _createForOfIteratorHelperLoose(method.call(x2)), _step; !(_step = _iterator()).done;) {
                  var item = _step.value;
                  observer.next(item);
                  if (observer.closed) return;
                }
                observer.complete();
              });
            });
          }
        }
        if (Array.isArray(x2)) {
          return new C2(function (observer) {
            enqueue(function () {
              if (observer.closed) return;
              for (var i = 0; i < x2.length; ++i) {
                observer.next(x2[i]);
                if (observer.closed) return;
              }
              observer.complete();
            });
          });
        }
        throw new TypeError(x2 + " is not observable");
      };
      Observable2.of = function of2() {
        for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          items[_key2] = arguments[_key2];
        }
        var C2 = typeof this === "function" ? this : Observable2;
        return new C2(function (observer) {
          enqueue(function () {
            if (observer.closed) return;
            for (var i = 0; i < items.length; ++i) {
              observer.next(items[i]);
              if (observer.closed) return;
            }
            observer.complete();
          });
        });
      };
      _createClass(Observable2, null, [{
        key: SymbolSpecies,
        get: function () {
          return this;
        }
      }]);
      return Observable2;
    }();
    if (hasSymbols()) {
      Object.defineProperty(Observable, Symbol("extensions"), {
        value: {
          symbol: SymbolObservable,
          hostReportError
        },
        configurable: true
      });
    }
    function symbolObservablePonyfill(root2) {
      var result;
      var Symbol2 = root2.Symbol;
      if (typeof Symbol2 === "function") {
        if (Symbol2.observable) {
          result = Symbol2.observable;
        } else {
          if (typeof Symbol2.for === "function") {
            result = Symbol2.for("https://github.com/benlesh/symbol-observable");
          } else {
            result = Symbol2("https://github.com/benlesh/symbol-observable");
          }
          try {
            Symbol2.observable = result;
          } catch (err) {
          }
        }
      } else {
        result = "@@observable";
      }
      return result;
    }
    var root;
    if (typeof self !== "undefined") {
      root = self;
    } else if (typeof window !== "undefined") {
      root = window;
    } else if (typeof global !== "undefined") {
      root = global;
    } else if (typeof module !== "undefined") {
      root = module;
    } else {
      root = Function("return this")();
    }
    symbolObservablePonyfill(root);
    var prototype = Observable.prototype;
    var fakeObsSymbol = "@@observable";
    if (!prototype[fakeObsSymbol]) {
      prototype[fakeObsSymbol] = function () {
        return this;
      };
    }
    function preventUnhandledRejection(promise) {
      promise.catch(function () {
      });
      return promise;
    }
    var toString$1 = Object.prototype.toString;
    function cloneDeep(value) {
      return cloneDeepHelper(value);
    }
    function cloneDeepHelper(val, seen) {
      switch (toString$1.call(val)) {
        case "[object Array]": {
          seen = seen || /* @__PURE__ */ new Map();
          if (seen.has(val))
            return seen.get(val);
          var copy_1 = val.slice(0);
          seen.set(val, copy_1);
          copy_1.forEach(function (child, i) {
            copy_1[i] = cloneDeepHelper(child, seen);
          });
          return copy_1;
        }
        case "[object Object]": {
          seen = seen || /* @__PURE__ */ new Map();
          if (seen.has(val))
            return seen.get(val);
          var copy_2 = Object.create(Object.getPrototypeOf(val));
          seen.set(val, copy_2);
          Object.keys(val).forEach(function (key) {
            copy_2[key] = cloneDeepHelper(val[key], seen);
          });
          return copy_2;
        }
        default:
          return val;
      }
    }
    function deepFreeze(value) {
      var workSet = /* @__PURE__ */ new Set([value]);
      workSet.forEach(function (obj) {
        if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
          Object.getOwnPropertyNames(obj).forEach(function (name) {
            if (isNonNullObject(obj[name]))
              workSet.add(obj[name]);
          });
        }
      });
      return value;
    }
    function shallowFreeze(obj) {
      if (globalThis.__DEV__ !== false && !Object.isFrozen(obj)) {
        try {
          Object.freeze(obj);
        } catch (e) {
          if (e instanceof TypeError)
            return null;
          throw e;
        }
      }
      return obj;
    }
    function maybeDeepFreeze(obj) {
      if (globalThis.__DEV__ !== false) {
        deepFreeze(obj);
      }
      return obj;
    }
    function iterateObserversSafely(observers, method, argument) {
      var observersWithMethod = [];
      observers.forEach(function (obs) {
        return obs[method] && observersWithMethod.push(obs);
      });
      observersWithMethod.forEach(function (obs) {
        return obs[method](argument);
      });
    }
    function asyncMap(observable, mapFn, catchFn) {
      return new Observable(function (observer) {
        var promiseQueue = {
          // Normally we would initialize promiseQueue to Promise.resolve(), but
          // in this case, for backwards compatibility, we need to be careful to
          // invoke the first callback synchronously.
          then: function (callback) {
            return new Promise(function (resolve) {
              return resolve(callback());
            });
          }
        };
        function makeCallback(examiner, key) {
          return function (arg) {
            if (examiner) {
              var both = function () {
                return observer.closed ? (
                  /* will be swallowed */
                  0
                ) : examiner(arg);
              };
              promiseQueue = promiseQueue.then(both, both).then(function (result) {
                return observer.next(result);
              }, function (error) {
                return observer.error(error);
              });
            } else {
              observer[key](arg);
            }
          };
        }
        var handler = {
          next: makeCallback(mapFn, "next"),
          error: makeCallback(catchFn, "error"),
          complete: function () {
            promiseQueue.then(function () {
              return observer.complete();
            });
          }
        };
        var sub = observable.subscribe(handler);
        return function () {
          return sub.unsubscribe();
        };
      });
    }
    function fixObservableSubclass(subclass) {
      function set(key) {
        Object.defineProperty(subclass, key, { value: Observable });
      }
      if (canUseSymbol && Symbol.species) {
        set(Symbol.species);
      }
      set("@@species");
      return subclass;
    }
    function isPromiseLike(value) {
      return value && typeof value.then === "function";
    }
    var Concast = (
      /** @class */
      function (_super) {
        __extends(Concast2, _super);
        function Concast2(sources) {
          var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () {
              return _this.removeObserver(observer);
            };
          }) || this;
          _this.observers = /* @__PURE__ */ new Set();
          _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
          });
          _this.handlers = {
            next: function (result) {
              if (_this.sub !== null) {
                _this.latest = ["next", result];
                _this.notify("next", result);
                iterateObserversSafely(_this.observers, "next", result);
              }
            },
            error: function (error) {
              var sub = _this.sub;
              if (sub !== null) {
                if (sub)
                  setTimeout(function () {
                    return sub.unsubscribe();
                  });
                _this.sub = null;
                _this.latest = ["error", error];
                _this.reject(error);
                _this.notify("error", error);
                iterateObserversSafely(_this.observers, "error", error);
              }
            },
            complete: function () {
              var _a2 = _this, sub = _a2.sub, _b = _a2.sources, sources2 = _b === void 0 ? [] : _b;
              if (sub !== null) {
                var value = sources2.shift();
                if (!value) {
                  if (sub)
                    setTimeout(function () {
                      return sub.unsubscribe();
                    });
                  _this.sub = null;
                  if (_this.latest && _this.latest[0] === "next") {
                    _this.resolve(_this.latest[1]);
                  } else {
                    _this.resolve();
                  }
                  _this.notify("complete");
                  iterateObserversSafely(_this.observers, "complete");
                } else if (isPromiseLike(value)) {
                  value.then(function (obs) {
                    return _this.sub = obs.subscribe(_this.handlers);
                  }, _this.handlers.error);
                } else {
                  _this.sub = value.subscribe(_this.handlers);
                }
              }
            }
          };
          _this.nextResultListeners = /* @__PURE__ */ new Set();
          _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.error(reason);
          };
          _this.promise.catch(function (_) {
          });
          if (typeof sources === "function") {
            sources = [new Observable(sources)];
          }
          if (isPromiseLike(sources)) {
            sources.then(function (iterable) {
              return _this.start(iterable);
            }, _this.handlers.error);
          } else {
            _this.start(sources);
          }
          return _this;
        }
        Concast2.prototype.start = function (sources) {
          if (this.sub !== void 0)
            return;
          this.sources = Array.from(sources);
          this.handlers.complete();
        };
        Concast2.prototype.deliverLastMessage = function (observer) {
          if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
              method.call(observer, this.latest[1]);
            }
            if (this.sub === null && nextOrError === "next" && observer.complete) {
              observer.complete();
            }
          }
        };
        Concast2.prototype.addObserver = function (observer) {
          if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
          }
        };
        Concast2.prototype.removeObserver = function (observer) {
          if (this.observers.delete(observer) && this.observers.size < 1) {
            this.handlers.complete();
          }
        };
        Concast2.prototype.notify = function (method, arg) {
          var nextResultListeners = this.nextResultListeners;
          if (nextResultListeners.size) {
            this.nextResultListeners = /* @__PURE__ */ new Set();
            nextResultListeners.forEach(function (listener) {
              return listener(method, arg);
            });
          }
        };
        Concast2.prototype.beforeNext = function (callback) {
          var called = false;
          this.nextResultListeners.add(function (method, arg) {
            if (!called) {
              called = true;
              callback(method, arg);
            }
          });
        };
        return Concast2;
      }(Observable)
    );
    fixObservableSubclass(Concast);
    function isExecutionPatchIncrementalResult(value) {
      return "incremental" in value;
    }
    function isExecutionPatchInitialResult(value) {
      return "hasNext" in value && "data" in value;
    }
    function isExecutionPatchResult(value) {
      return isExecutionPatchIncrementalResult(value) || isExecutionPatchInitialResult(value);
    }
    function isApolloPayloadResult(value) {
      return isNonNullObject(value) && "payload" in value;
    }
    function mergeIncrementalData(prevResult, result) {
      var mergedData = prevResult;
      var merger = new DeepMerger();
      if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
        result.incremental.forEach(function (_a2) {
          var data = _a2.data, path = _a2.path;
          for (var i = path.length - 1; i >= 0; --i) {
            var key = path[i];
            var isNumericKey = !isNaN(+key);
            var parent_1 = isNumericKey ? [] : {};
            parent_1[key] = data;
            data = parent_1;
          }
          mergedData = merger.merge(mergedData, data);
        });
      }
      return mergedData;
    }
    function graphQLResultHasError(result) {
      var errors = getGraphQLErrorsFromResult(result);
      return isNonEmptyArray(errors);
    }
    function getGraphQLErrorsFromResult(result) {
      var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
      if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
        result.incremental.forEach(function (incrementalResult) {
          if (incrementalResult.errors) {
            graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
          }
        });
      }
      return graphQLErrors;
    }
    function compact() {
      var objects = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
      }
      var result = /* @__PURE__ */ Object.create(null);
      objects.forEach(function (obj) {
        if (!obj)
          return;
        Object.keys(obj).forEach(function (key) {
          var value = obj[key];
          if (value !== void 0) {
            result[key] = value;
          }
        });
      });
      return result;
    }
    function mergeOptions(defaults, options) {
      return compact(defaults, options, options.variables && {
        variables: compact(__assign(__assign({}, defaults && defaults.variables), options.variables))
      });
    }
    function fromError(errorValue) {
      return new Observable(function (observer) {
        observer.error(errorValue);
      });
    }
    var throwServerError = function (response, result, message) {
      var error = new Error(message);
      error.name = "ServerError";
      error.response = response;
      error.statusCode = response.status;
      error.result = result;
      throw error;
    };
    function validateOperation(operation) {
      var OPERATION_FIELDS = [
        "query",
        "operationName",
        "variables",
        "extensions",
        "context"
      ];
      for (var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++) {
        var key = _a2[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
          throw newInvariantError(46, key);
        }
      }
      return operation;
    }
    function createOperation(starting, operation) {
      var context = __assign({}, starting);
      var setContext = function (next) {
        if (typeof next === "function") {
          context = __assign(__assign({}, context), next(context));
        } else {
          context = __assign(__assign({}, context), next);
        }
      };
      var getContext = function () {
        return __assign({}, context);
      };
      Object.defineProperty(operation, "setContext", {
        enumerable: false,
        value: setContext
      });
      Object.defineProperty(operation, "getContext", {
        enumerable: false,
        value: getContext
      });
      return operation;
    }
    function transformOperation(operation) {
      var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query
      };
      if (!transformedOperation.operationName) {
        transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
      }
      return transformedOperation;
    }
    function filterOperationVariables(variables, query) {
      var result = __assign({}, variables);
      var unusedNames = new Set(Object.keys(variables));
      visit(query, {
        Variable: function (node, _key, parent) {
          if (parent && parent.kind !== "VariableDefinition") {
            unusedNames.delete(node.name.value);
          }
        }
      });
      unusedNames.forEach(function (name) {
        delete result[name];
      });
      return result;
    }
    function passthrough(op, forward) {
      return forward ? forward(op) : Observable.of();
    }
    function toLink(handler) {
      return typeof handler === "function" ? new ApolloLink(handler) : handler;
    }
    function isTerminating(link) {
      return link.request.length <= 1;
    }
    var ApolloLink = (
      /** @class */
      function () {
        function ApolloLink2(request) {
          if (request)
            this.request = request;
        }
        ApolloLink2.empty = function () {
          return new ApolloLink2(function () {
            return Observable.of();
          });
        };
        ApolloLink2.from = function (links) {
          if (links.length === 0)
            return ApolloLink2.empty();
          return links.map(toLink).reduce(function (x2, y2) {
            return x2.concat(y2);
          });
        };
        ApolloLink2.split = function (test, left, right) {
          var leftLink = toLink(left);
          var rightLink = toLink(right || new ApolloLink2(passthrough));
          var ret;
          if (isTerminating(leftLink) && isTerminating(rightLink)) {
            ret = new ApolloLink2(function (operation) {
              return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
            });
          } else {
            ret = new ApolloLink2(function (operation, forward) {
              return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
            });
          }
          return Object.assign(ret, { left: leftLink, right: rightLink });
        };
        ApolloLink2.execute = function (link, operation) {
          return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
        };
        ApolloLink2.concat = function (first, second) {
          var firstLink = toLink(first);
          if (isTerminating(firstLink)) {
            globalThis.__DEV__ !== false && invariant$1.warn(38, firstLink);
            return firstLink;
          }
          var nextLink = toLink(second);
          var ret;
          if (isTerminating(nextLink)) {
            ret = new ApolloLink2(function (operation) {
              return firstLink.request(operation, function (op) {
                return nextLink.request(op) || Observable.of();
              }) || Observable.of();
            });
          } else {
            ret = new ApolloLink2(function (operation, forward) {
              return firstLink.request(operation, function (op) {
                return nextLink.request(op, forward) || Observable.of();
              }) || Observable.of();
            });
          }
          return Object.assign(ret, { left: firstLink, right: nextLink });
        };
        ApolloLink2.prototype.split = function (test, left, right) {
          return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
        };
        ApolloLink2.prototype.concat = function (next) {
          return ApolloLink2.concat(this, next);
        };
        ApolloLink2.prototype.request = function (operation, forward) {
          throw newInvariantError(39);
        };
        ApolloLink2.prototype.onError = function (error, observer) {
          if (observer && observer.error) {
            observer.error(error);
            return false;
          }
          throw error;
        };
        ApolloLink2.prototype.setOnError = function (fn) {
          this.onError = fn;
          return this;
        };
        return ApolloLink2;
      }()
    );
    var execute = ApolloLink.execute;
    function asyncIterator(source) {
      var _a2;
      var iterator = source[Symbol.asyncIterator]();
      return _a2 = {
        next: function () {
          return iterator.next();
        }
      }, _a2[Symbol.asyncIterator] = function () {
        return this;
      }, _a2;
    }
    function nodeStreamIterator(stream) {
      var cleanup = null;
      var error = null;
      var done = false;
      var data = [];
      var waiting = [];
      function onData(chunk) {
        if (error)
          return;
        if (waiting.length) {
          var shiftedArr = waiting.shift();
          if (Array.isArray(shiftedArr) && shiftedArr[0]) {
            return shiftedArr[0]({ value: chunk, done: false });
          }
        }
        data.push(chunk);
      }
      function onError(err) {
        error = err;
        var all = waiting.slice();
        all.forEach(function (pair) {
          pair[1](err);
        });
        !cleanup || cleanup();
      }
      function onEnd() {
        done = true;
        var all = waiting.slice();
        all.forEach(function (pair) {
          pair[0]({ value: void 0, done: true });
        });
        !cleanup || cleanup();
      }
      cleanup = function () {
        cleanup = null;
        stream.removeListener("data", onData);
        stream.removeListener("error", onError);
        stream.removeListener("end", onEnd);
        stream.removeListener("finish", onEnd);
        stream.removeListener("close", onEnd);
      };
      stream.on("data", onData);
      stream.on("error", onError);
      stream.on("end", onEnd);
      stream.on("finish", onEnd);
      stream.on("close", onEnd);
      function getNext() {
        return new Promise(function (resolve, reject) {
          if (error)
            return reject(error);
          if (data.length)
            return resolve({ value: data.shift(), done: false });
          if (done)
            return resolve({ value: void 0, done: true });
          waiting.push([resolve, reject]);
        });
      }
      var iterator = {
        next: function () {
          return getNext();
        }
      };
      if (canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
          return this;
        };
      }
      return iterator;
    }
    function promiseIterator(promise) {
      var resolved = false;
      var iterator = {
        next: function () {
          if (resolved)
            return Promise.resolve({
              value: void 0,
              done: true
            });
          resolved = true;
          return new Promise(function (resolve, reject) {
            promise.then(function (value) {
              resolve({ value, done: false });
            }).catch(reject);
          });
        }
      };
      if (canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
          return this;
        };
      }
      return iterator;
    }
    function readerIterator(reader) {
      var iterator = {
        next: function () {
          return reader.read();
        }
      };
      if (canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
          return this;
        };
      }
      return iterator;
    }
    function isNodeResponse(value) {
      return !!value.body;
    }
    function isReadableStream(value) {
      return !!value.getReader;
    }
    function isAsyncIterableIterator(value) {
      return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
    }
    function isStreamableBlob(value) {
      return !!value.stream;
    }
    function isBlob(value) {
      return !!value.arrayBuffer;
    }
    function isNodeReadableStream(value) {
      return !!value.pipe;
    }
    function responseIterator(response) {
      var body = response;
      if (isNodeResponse(response))
        body = response.body;
      if (isAsyncIterableIterator(body))
        return asyncIterator(body);
      if (isReadableStream(body))
        return readerIterator(body.getReader());
      if (isStreamableBlob(body)) {
        return readerIterator(body.stream().getReader());
      }
      if (isBlob(body))
        return promiseIterator(body.arrayBuffer());
      if (isNodeReadableStream(body))
        return nodeStreamIterator(body);
      throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
    }
    var PROTOCOL_ERRORS_SYMBOL = Symbol();
    function graphQLResultHasProtocolErrors(result) {
      if (result.extensions) {
        return Array.isArray(result.extensions[PROTOCOL_ERRORS_SYMBOL]);
      }
      return false;
    }
    function isApolloError(err) {
      return err.hasOwnProperty("graphQLErrors");
    }
    var generateErrorMessage = function (err) {
      var errors = __spreadArray(__spreadArray(__spreadArray([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
      if (err.networkError)
        errors.push(err.networkError);
      return errors.map(function (err2) {
        return isNonNullObject(err2) && err2.message || "Error message not found.";
      }).join("\n");
    };
    var ApolloError = (
      /** @class */
      function (_super) {
        __extends(ApolloError2, _super);
        function ApolloError2(_a2) {
          var graphQLErrors = _a2.graphQLErrors, protocolErrors = _a2.protocolErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
          var _this = _super.call(this, errorMessage) || this;
          _this.name = "ApolloError";
          _this.graphQLErrors = graphQLErrors || [];
          _this.protocolErrors = protocolErrors || [];
          _this.clientErrors = clientErrors || [];
          _this.networkError = networkError || null;
          _this.message = errorMessage || generateErrorMessage(_this);
          _this.extraInfo = extraInfo;
          _this.cause = __spreadArray(__spreadArray(__spreadArray([
            networkError
          ], graphQLErrors || [], true), protocolErrors || [], true), clientErrors || [], true).find(function (e) {
            return !!e;
          }) || null;
          _this.__proto__ = ApolloError2.prototype;
          return _this;
        }
        return ApolloError2;
      }(Error)
    );
    var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
    function readMultipartBody(response, nextValue) {
      return __awaiter(this, void 0, void 0, function () {
        var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _a2, value, done, chunk, searchFrom, bi2, message, i, headers, contentType_1, body, result, next;
        var _b, _c;
        var _d;
        return __generator(this, function (_e) {
          switch (_e.label) {
            case 0:
              if (TextDecoder === void 0) {
                throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
              }
              decoder = new TextDecoder("utf-8");
              contentType = (_d = response.headers) === null || _d === void 0 ? void 0 : _d.get("content-type");
              delimiter = "boundary=";
              boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-";
              boundary = "\r\n--".concat(boundaryVal);
              buffer = "";
              iterator = responseIterator(response);
              running = true;
              _e.label = 1;
            case 1:
              if (!running) return [3, 3];
              return [4, iterator.next()];
            case 2:
              _a2 = _e.sent(), value = _a2.value, done = _a2.done;
              chunk = typeof value === "string" ? value : decoder.decode(value);
              searchFrom = buffer.length - boundary.length + 1;
              running = !done;
              buffer += chunk;
              bi2 = buffer.indexOf(boundary, searchFrom);
              while (bi2 > -1) {
                message = void 0;
                _b = [
                  buffer.slice(0, bi2),
                  buffer.slice(bi2 + boundary.length)
                ], message = _b[0], buffer = _b[1];
                i = message.indexOf("\r\n\r\n");
                headers = parseHeaders(message.slice(0, i));
                contentType_1 = headers["content-type"];
                if (contentType_1 && contentType_1.toLowerCase().indexOf("application/json") === -1) {
                  throw new Error("Unsupported patch content type: application/json is required.");
                }
                body = message.slice(i);
                if (body) {
                  result = parseJsonBody(response, body);
                  if (Object.keys(result).length > 1 || "data" in result || "incremental" in result || "errors" in result || "payload" in result) {
                    if (isApolloPayloadResult(result)) {
                      next = {};
                      if ("payload" in result) {
                        if (Object.keys(result).length === 1 && result.payload === null) {
                          return [
                            2
                            /*return*/
                          ];
                        }
                        next = __assign({}, result.payload);
                      }
                      if ("errors" in result) {
                        next = __assign(__assign({}, next), { extensions: __assign(__assign({}, "extensions" in next ? next.extensions : null), (_c = {}, _c[PROTOCOL_ERRORS_SYMBOL] = result.errors, _c)) });
                      }
                      nextValue(next);
                    } else {
                      nextValue(result);
                    }
                  } else if (
                    // If the chunk contains only a "hasNext: false", we can call
                    // observer.complete() immediately.
                    Object.keys(result).length === 1 && "hasNext" in result && !result.hasNext
                  ) {
                    return [
                      2
                      /*return*/
                    ];
                  }
                }
                bi2 = buffer.indexOf(boundary);
              }
              return [3, 1];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }
    function parseHeaders(headerText) {
      var headersInit = {};
      headerText.split("\n").forEach(function (line) {
        var i = line.indexOf(":");
        if (i > -1) {
          var name_1 = line.slice(0, i).trim().toLowerCase();
          var value = line.slice(i + 1).trim();
          headersInit[name_1] = value;
        }
      });
      return headersInit;
    }
    function parseJsonBody(response, bodyText) {
      if (response.status >= 300) {
        var getResult = function () {
          try {
            return JSON.parse(bodyText);
          } catch (err) {
            return bodyText;
          }
        };
        throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
      }
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
      }
    }
    function handleError(err, observer) {
      if (err.result && err.result.errors && err.result.data) {
        observer.next(err.result);
      }
      observer.error(err);
    }
    function parseAndCheckHttpResponse(operations) {
      return function (response) {
        return response.text().then(function (bodyText) {
          return parseJsonBody(response, bodyText);
        }).then(function (result) {
          if (!Array.isArray(result) && !hasOwnProperty$4.call(result, "data") && !hasOwnProperty$4.call(result, "errors")) {
            throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function (op) {
              return op.operationName;
            }) : operations.operationName, "'."));
          }
          return result;
        });
      };
    }
    var serializeFetchParameter = function (p2, label) {
      var serialized;
      try {
        serialized = JSON.stringify(p2);
      } catch (e) {
        var parseError = newInvariantError(42, label, e.message);
        parseError.parseError = e;
        throw parseError;
      }
      return serialized;
    };
    var defaultHttpOptions = {
      includeQuery: true,
      includeExtensions: false,
      preserveHeaderCase: false
    };
    var defaultHeaders = {
      // headers are case insensitive (https://stackoverflow.com/a/5259004)
      accept: "*/*",
      // The content-type header describes the type of the body of the request, and
      // so it typically only is sent with requests that actually have bodies. One
      // could imagine that Apollo Client would remove this header when constructing
      // a GET request (which has no body), but we historically have not done that.
      // This means that browsers will preflight all Apollo Client requests (even
      // GET requests). Apollo Server's CSRF prevention feature (introduced in
      // AS3.7) takes advantage of this fact and does not block requests with this
      // header. If you want to drop this header from GET requests, then you should
      // probably replace it with a `apollo-require-preflight` header, or servers
      // with CSRF prevention enabled might block your GET request. See
      // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
      // for more details.
      "content-type": "application/json"
    };
    var defaultOptions = {
      method: "POST"
    };
    var fallbackHttpConfig = {
      http: defaultHttpOptions,
      headers: defaultHeaders,
      options: defaultOptions
    };
    var defaultPrinter = function (ast, printer) {
      return printer(ast);
    };
    function selectHttpOptionsAndBodyInternal(operation, printer) {
      var configs = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
      }
      var options = {};
      var http = {};
      configs.forEach(function (config) {
        options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), config.headers) });
        if (config.credentials) {
          options.credentials = config.credentials;
        }
        http = __assign(__assign({}, http), config.http);
      });
      if (options.headers) {
        options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
      }
      var operationName2 = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
      var body = { operationName: operationName2, variables };
      if (http.includeExtensions)
        body.extensions = extensions;
      if (http.includeQuery)
        body.query = printer(query, print);
      return {
        options,
        body
      };
    }
    function removeDuplicateHeaders(headers, preserveHeaderCase) {
      if (!preserveHeaderCase) {
        var normalizedHeaders_1 = {};
        Object.keys(Object(headers)).forEach(function (name) {
          normalizedHeaders_1[name.toLowerCase()] = headers[name];
        });
        return normalizedHeaders_1;
      }
      var headerData = {};
      Object.keys(Object(headers)).forEach(function (name) {
        headerData[name.toLowerCase()] = {
          originalName: name,
          value: headers[name]
        };
      });
      var normalizedHeaders = {};
      Object.keys(headerData).forEach(function (name) {
        normalizedHeaders[headerData[name].originalName] = headerData[name].value;
      });
      return normalizedHeaders;
    }
    var checkFetcher = function (fetcher) {
      if (!fetcher && typeof fetch === "undefined") {
        throw newInvariantError(40);
      }
    };
    var selectURI = function (operation, fallbackURI) {
      var context = operation.getContext();
      var contextURI = context.uri;
      if (contextURI) {
        return contextURI;
      } else if (typeof fallbackURI === "function") {
        return fallbackURI(operation);
      } else {
        return fallbackURI || "/graphql";
      }
    };
    function rewriteURIForGET(chosenURI, body) {
      var queryParams = [];
      var addQueryParam = function (key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
      };
      if ("query" in body) {
        addQueryParam("query", body.query);
      }
      if (body.operationName) {
        addQueryParam("operationName", body.operationName);
      }
      if (body.variables) {
        var serializedVariables = void 0;
        try {
          serializedVariables = serializeFetchParameter(body.variables, "Variables map");
        } catch (parseError) {
          return { parseError };
        }
        addQueryParam("variables", serializedVariables);
      }
      if (body.extensions) {
        var serializedExtensions = void 0;
        try {
          serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
        } catch (parseError) {
          return { parseError };
        }
        addQueryParam("extensions", serializedExtensions);
      }
      var fragment = "", preFragment = chosenURI;
      var fragmentStart = chosenURI.indexOf("#");
      if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
      }
      var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
      var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
      return { newURI };
    }
    var backupFetch = maybe$1(function () {
      return fetch;
    });
    var createHttpLink = function (linkOptions) {
      if (linkOptions === void 0) {
        linkOptions = {};
      }
      var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
      if (globalThis.__DEV__ !== false) {
        checkFetcher(preferredFetch || backupFetch);
      }
      var linkConfig = {
        http: { includeExtensions, preserveHeaderCase },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers
      };
      return new ApolloLink(function (operation) {
        var chosenURI = selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
          var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
          if (name_1) {
            clientAwarenessHeaders["apollographql-client-name"] = name_1;
          }
          if (version2) {
            clientAwarenessHeaders["apollographql-client-version"] = version2;
          }
        }
        var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
          http: context.http,
          options: context.fetchOptions,
          credentials: context.credentials,
          headers: contextHeaders
        };
        if (hasDirectives(["client"], operation.query)) {
          var transformedQuery = removeClientSetsFromDocument(operation.query);
          if (!transformedQuery) {
            return fromError(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
          }
          operation.query = transformedQuery;
        }
        var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
        if (body.variables && !includeUnusedVariables) {
          body.variables = filterOperationVariables(body.variables, operation.query);
        }
        var controller;
        if (!options.signal && typeof AbortController !== "undefined") {
          controller = new AbortController();
          options.signal = controller.signal;
        }
        var definitionIsMutation = function (d) {
          return d.kind === "OperationDefinition" && d.operation === "mutation";
        };
        var definitionIsSubscription = function (d) {
          return d.kind === "OperationDefinition" && d.operation === "subscription";
        };
        var isSubscription = definitionIsSubscription(getMainDefinition(operation.query));
        var hasDefer = hasDirectives(["defer"], operation.query);
        if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
          options.method = "GET";
        }
        if (hasDefer || isSubscription) {
          options.headers = options.headers || {};
          var acceptHeader = "multipart/mixed;";
          if (isSubscription && hasDefer) {
            globalThis.__DEV__ !== false && invariant$1.warn(41);
          }
          if (isSubscription) {
            acceptHeader += "boundary=graphql;subscriptionSpec=1.0,application/json";
          } else if (hasDefer) {
            acceptHeader += "deferSpec=20220824,application/json";
          }
          options.headers.accept = acceptHeader;
        }
        if (options.method === "GET") {
          var _c2 = rewriteURIForGET(chosenURI, body), newURI = _c2.newURI, parseError = _c2.parseError;
          if (parseError) {
            return fromError(parseError);
          }
          chosenURI = newURI;
        } else {
          try {
            options.body = serializeFetchParameter(body, "Payload");
          } catch (parseError2) {
            return fromError(parseError2);
          }
        }
        return new Observable(function (observer) {
          var currentFetch = preferredFetch || maybe$1(function () {
            return fetch;
          }) || backupFetch;
          var observerNext = observer.next.bind(observer);
          currentFetch(chosenURI, options).then(function (response) {
            var _a4;
            operation.setContext({ response });
            var ctype = (_a4 = response.headers) === null || _a4 === void 0 ? void 0 : _a4.get("content-type");
            if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
              return readMultipartBody(response, observerNext);
            } else {
              return parseAndCheckHttpResponse(operation)(response).then(observerNext);
            }
          }).then(function () {
            controller = void 0;
            observer.complete();
          }).catch(function (err) {
            controller = void 0;
            handleError(err, observer);
          });
          return function () {
            if (controller)
              controller.abort();
          };
        });
      });
    };
    var HttpLink = (
      /** @class */
      function (_super) {
        __extends(HttpLink2, _super);
        function HttpLink2(options) {
          if (options === void 0) {
            options = {};
          }
          var _this = _super.call(this, createHttpLink(options).request) || this;
          _this.options = options;
          return _this;
        }
        return HttpLink2;
      }(ApolloLink)
    );
    const { toString, hasOwnProperty: hasOwnProperty$3 } = Object.prototype;
    const fnToStr = Function.prototype.toString;
    const previousComparisons = /* @__PURE__ */ new Map();
    function equal(a, b) {
      try {
        return check(a, b);
      } finally {
        previousComparisons.clear();
      }
    }
    function check(a, b) {
      if (a === b) {
        return true;
      }
      const aTag = toString.call(a);
      const bTag = toString.call(b);
      if (aTag !== bTag) {
        return false;
      }
      switch (aTag) {
        case "[object Array]":
          if (a.length !== b.length)
            return false;
        case "[object Object]": {
          if (previouslyCompared(a, b))
            return true;
          const aKeys = definedKeys(a);
          const bKeys = definedKeys(b);
          const keyCount = aKeys.length;
          if (keyCount !== bKeys.length)
            return false;
          for (let k2 = 0; k2 < keyCount; ++k2) {
            if (!hasOwnProperty$3.call(b, aKeys[k2])) {
              return false;
            }
          }
          for (let k2 = 0; k2 < keyCount; ++k2) {
            const key = aKeys[k2];
            if (!check(a[key], b[key])) {
              return false;
            }
          }
          return true;
        }
        case "[object Error]":
          return a.name === b.name && a.message === b.message;
        case "[object Number]":
          if (a !== a)
            return b !== b;
        case "[object Boolean]":
        case "[object Date]":
          return +a === +b;
        case "[object RegExp]":
        case "[object String]":
          return a == `${b}`;
        case "[object Map]":
        case "[object Set]": {
          if (a.size !== b.size)
            return false;
          if (previouslyCompared(a, b))
            return true;
          const aIterator = a.entries();
          const isMap = aTag === "[object Map]";
          while (true) {
            const info = aIterator.next();
            if (info.done)
              break;
            const [aKey, aValue] = info.value;
            if (!b.has(aKey)) {
              return false;
            }
            if (isMap && !check(aValue, b.get(aKey))) {
              return false;
            }
          }
          return true;
        }
        case "[object Uint16Array]":
        case "[object Uint8Array]":
        case "[object Uint32Array]":
        case "[object Int32Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object ArrayBuffer]":
          a = new Uint8Array(a);
          b = new Uint8Array(b);
        case "[object DataView]": {
          let len = a.byteLength;
          if (len === b.byteLength) {
            while (len-- && a[len] === b[len]) {
            }
          }
          return len === -1;
        }
        case "[object AsyncFunction]":
        case "[object GeneratorFunction]":
        case "[object AsyncGeneratorFunction]":
        case "[object Function]": {
          const aCode = fnToStr.call(a);
          if (aCode !== fnToStr.call(b)) {
            return false;
          }
          return !endsWith(aCode, nativeCodeSuffix);
        }
      }
      return false;
    }
    function definedKeys(obj) {
      return Object.keys(obj).filter(isDefinedKey, obj);
    }
    function isDefinedKey(key) {
      return this[key] !== void 0;
    }
    const nativeCodeSuffix = "{ [native code] }";
    function endsWith(full, suffix) {
      const fromIndex = full.length - suffix.length;
      return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
    }
    function previouslyCompared(a, b) {
      let bSet = previousComparisons.get(a);
      if (bSet) {
        if (bSet.has(b))
          return true;
      } else {
        previousComparisons.set(a, bSet = /* @__PURE__ */ new Set());
      }
      bSet.add(b);
      return false;
    }
    function equalByQuery(query, _a2, _b, variables) {
      var aData = _a2.data, aRest = __rest(_a2, ["data"]);
      var bData = _b.data, bRest = __rest(_b, ["data"]);
      return equal(aRest, bRest) && equalBySelectionSet(getMainDefinition(query).selectionSet, aData, bData, {
        fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
        variables
      });
    }
    function equalBySelectionSet(selectionSet, aResult, bResult, context) {
      if (aResult === bResult) {
        return true;
      }
      var seenSelections = /* @__PURE__ */ new Set();
      return selectionSet.selections.every(function (selection) {
        if (seenSelections.has(selection))
          return true;
        seenSelections.add(selection);
        if (!shouldInclude(selection, context.variables))
          return true;
        if (selectionHasNonreactiveDirective(selection))
          return true;
        if (isField(selection)) {
          var resultKey = resultKeyNameFromField(selection);
          var aResultChild = aResult && aResult[resultKey];
          var bResultChild = bResult && bResult[resultKey];
          var childSelectionSet = selection.selectionSet;
          if (!childSelectionSet) {
            return equal(aResultChild, bResultChild);
          }
          var aChildIsArray = Array.isArray(aResultChild);
          var bChildIsArray = Array.isArray(bResultChild);
          if (aChildIsArray !== bChildIsArray)
            return false;
          if (aChildIsArray && bChildIsArray) {
            var length_1 = aResultChild.length;
            if (bResultChild.length !== length_1) {
              return false;
            }
            for (var i = 0; i < length_1; ++i) {
              if (!equalBySelectionSet(childSelectionSet, aResultChild[i], bResultChild[i], context)) {
                return false;
              }
            }
            return true;
          }
          return equalBySelectionSet(childSelectionSet, aResultChild, bResultChild, context);
        } else {
          var fragment = getFragmentFromSelection(selection, context.fragmentMap);
          if (fragment) {
            if (selectionHasNonreactiveDirective(fragment))
              return true;
            return equalBySelectionSet(
              fragment.selectionSet,
              // Notice that we reuse the same aResult and bResult values here,
              // since the fragment ...spread does not specify a field name, but
              // consists of multiple fields (within the fragment's selection set)
              // that should be applied to the current result value(s).
              aResult,
              bResult,
              context
            );
          }
        }
      });
    }
    function selectionHasNonreactiveDirective(selection) {
      return !!selection.directives && selection.directives.some(directiveIsNonreactive);
    }
    function directiveIsNonreactive(dir) {
      return dir.name.value === "nonreactive";
    }
    var MapImpl = canUseWeakMap ? WeakMap : Map;
    var SetImpl = canUseWeakSet ? WeakSet : Set;
    var disableWarningsSlot = new Slot();
    var issuedWarning = false;
    function warnOnImproperCacheImplementation() {
      if (!issuedWarning) {
        issuedWarning = true;
        globalThis.__DEV__ !== false && invariant$1.warn(52);
      }
    }
    function maskDefinition(data, selectionSet, context) {
      return disableWarningsSlot.withValue(true, function () {
        var masked = maskSelectionSet(data, selectionSet, context, false);
        if (Object.isFrozen(data)) {
          maybeDeepFreeze(masked);
        }
        return masked;
      });
    }
    function getMutableTarget(data, mutableTargets) {
      if (mutableTargets.has(data)) {
        return mutableTargets.get(data);
      }
      var mutableTarget = Array.isArray(data) ? [] : /* @__PURE__ */ Object.create(null);
      mutableTargets.set(data, mutableTarget);
      return mutableTarget;
    }
    function maskSelectionSet(data, selectionSet, context, migration, path) {
      var _a2;
      var knownChanged = context.knownChanged;
      var memo = getMutableTarget(data, context.mutableTargets);
      if (Array.isArray(data)) {
        for (var _i = 0, _b = Array.from(data.entries()); _i < _b.length; _i++) {
          var _c = _b[_i], index2 = _c[0], item = _c[1];
          if (item === null) {
            memo[index2] = null;
            continue;
          }
          var masked = maskSelectionSet(item, selectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", "[").concat(index2, "]") : void 0);
          if (knownChanged.has(masked)) {
            knownChanged.add(memo);
          }
          memo[index2] = masked;
        }
        return knownChanged.has(memo) ? memo : data;
      }
      for (var _d = 0, _e = selectionSet.selections; _d < _e.length; _d++) {
        var selection = _e[_d];
        var value = void 0;
        if (migration) {
          knownChanged.add(memo);
        }
        if (selection.kind === Kind.FIELD) {
          var keyName = resultKeyNameFromField(selection);
          var childSelectionSet = selection.selectionSet;
          value = memo[keyName] || data[keyName];
          if (value === void 0) {
            continue;
          }
          if (childSelectionSet && value !== null) {
            var masked = maskSelectionSet(data[keyName], childSelectionSet, context, migration, globalThis.__DEV__ !== false ? "".concat(path || "", ".").concat(keyName) : void 0);
            if (knownChanged.has(masked)) {
              value = masked;
            }
          }
          if (!(globalThis.__DEV__ !== false)) {
            memo[keyName] = value;
          }
          if (globalThis.__DEV__ !== false) {
            if (migration && keyName !== "__typename" && // either the field is not present in the memo object
              // or it has a `get` descriptor, not a `value` descriptor
              // => it is a warning accessor and we can overwrite it
              // with another accessor
              !((_a2 = Object.getOwnPropertyDescriptor(memo, keyName)) === null || _a2 === void 0 ? void 0 : _a2.value)) {
              Object.defineProperty(memo, keyName, getAccessorWarningDescriptor(keyName, value, path || "", context.operationName, context.operationType));
            } else {
              delete memo[keyName];
              memo[keyName] = value;
            }
          }
        }
        if (selection.kind === Kind.INLINE_FRAGMENT && (!selection.typeCondition || context.cache.fragmentMatches(selection, data.__typename))) {
          value = maskSelectionSet(data, selection.selectionSet, context, migration, path);
        }
        if (selection.kind === Kind.FRAGMENT_SPREAD) {
          var fragmentName = selection.name.value;
          var fragment = context.fragmentMap[fragmentName] || (context.fragmentMap[fragmentName] = context.cache.lookupFragment(fragmentName));
          invariant$1(fragment, 47, fragmentName);
          var mode = getFragmentMaskMode(selection);
          if (mode !== "mask") {
            value = maskSelectionSet(data, fragment.selectionSet, context, mode === "migrate", path);
          }
        }
        if (knownChanged.has(value)) {
          knownChanged.add(memo);
        }
      }
      if ("__typename" in data && !("__typename" in memo)) {
        memo.__typename = data.__typename;
      }
      if (Object.keys(memo).length !== Object.keys(data).length) {
        knownChanged.add(memo);
      }
      return knownChanged.has(memo) ? memo : data;
    }
    function getAccessorWarningDescriptor(fieldName, value, path, operationName2, operationType) {
      var getValue = function () {
        if (disableWarningsSlot.getValue()) {
          return value;
        }
        globalThis.__DEV__ !== false && invariant$1.warn(48, operationName2 ? "".concat(operationType, " '").concat(operationName2, "'") : "anonymous ".concat(operationType), "".concat(path, ".").concat(fieldName).replace(/^\./, ""));
        getValue = function () {
          return value;
        };
        return value;
      };
      return {
        get: function () {
          return getValue();
        },
        set: function (newValue) {
          getValue = function () {
            return newValue;
          };
        },
        enumerable: true,
        configurable: true
      };
    }
    function maskFragment(data, document2, cache2, fragmentName) {
      if (!cache2.fragmentMatches) {
        if (globalThis.__DEV__ !== false) {
          warnOnImproperCacheImplementation();
        }
        return data;
      }
      var fragments = document2.definitions.filter(function (node) {
        return node.kind === Kind.FRAGMENT_DEFINITION;
      });
      if (typeof fragmentName === "undefined") {
        invariant$1(fragments.length === 1, 49, fragments.length);
        fragmentName = fragments[0].name.value;
      }
      var fragment = fragments.find(function (fragment2) {
        return fragment2.name.value === fragmentName;
      });
      invariant$1(!!fragment, 50, fragmentName);
      if (data == null) {
        return data;
      }
      if (equal(data, {})) {
        return data;
      }
      return maskDefinition(data, fragment.selectionSet, {
        operationType: "fragment",
        operationName: fragment.name.value,
        fragmentMap: createFragmentMap(getFragmentDefinitions(document2)),
        cache: cache2,
        mutableTargets: new MapImpl(),
        knownChanged: new SetImpl()
      });
    }
    function maskOperation(data, document2, cache2) {
      var _a2;
      if (!cache2.fragmentMatches) {
        if (globalThis.__DEV__ !== false) {
          warnOnImproperCacheImplementation();
        }
        return data;
      }
      var definition = getOperationDefinition(document2);
      invariant$1(definition, 51);
      if (data == null) {
        return data;
      }
      return maskDefinition(data, definition.selectionSet, {
        operationType: definition.operation,
        operationName: (_a2 = definition.name) === null || _a2 === void 0 ? void 0 : _a2.value,
        fragmentMap: createFragmentMap(getFragmentDefinitions(document2)),
        cache: cache2,
        mutableTargets: new MapImpl(),
        knownChanged: new SetImpl()
      });
    }
    var ApolloCache = (
      /** @class */
      function () {
        function ApolloCache2() {
          this.assumeImmutableResults = false;
          this.getFragmentDoc = wrap(getFragmentQueryDocument, {
            max: cacheSizes["cache.fragmentQueryDocuments"] || 1e3,
            cache: WeakCache
          });
        }
        ApolloCache2.prototype.lookupFragment = function (fragmentName) {
          return null;
        };
        ApolloCache2.prototype.batch = function (options) {
          var _this = this;
          var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
          var updateResult;
          this.performTransaction(function () {
            return updateResult = options.update(_this);
          }, optimisticId);
          return updateResult;
        };
        ApolloCache2.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
          this.performTransaction(transaction, optimisticId);
        };
        ApolloCache2.prototype.transformDocument = function (document2) {
          return document2;
        };
        ApolloCache2.prototype.transformForLink = function (document2) {
          return document2;
        };
        ApolloCache2.prototype.identify = function (object) {
          return;
        };
        ApolloCache2.prototype.gc = function () {
          return [];
        };
        ApolloCache2.prototype.modify = function (options) {
          return false;
        };
        ApolloCache2.prototype.readQuery = function (options, optimistic) {
          if (optimistic === void 0) {
            optimistic = !!options.optimistic;
          }
          return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
        };
        ApolloCache2.prototype.watchFragment = function (options) {
          var _this = this;
          var fragment = options.fragment, fragmentName = options.fragmentName, from = options.from, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, otherOptions = __rest(options, ["fragment", "fragmentName", "from", "optimistic"]);
          var query = this.getFragmentDoc(fragment, fragmentName);
          var id2 = typeof from === "undefined" || typeof from === "string" ? from : this.identify(from);
          var dataMasking = !!options[Symbol.for("apollo.dataMasking")];
          if (globalThis.__DEV__ !== false) {
            var actualFragmentName = fragmentName || getFragmentDefinition(fragment).name.value;
            if (!id2) {
              globalThis.__DEV__ !== false && invariant$1.warn(1, actualFragmentName);
            }
          }
          var diffOptions = __assign(__assign({}, otherOptions), { returnPartialData: true, id: id2, query, optimistic });
          var latestDiff;
          return new Observable(function (observer) {
            return _this.watch(__assign(__assign({}, diffOptions), {
              immediate: true, callback: function (diff) {
                var data = dataMasking ? maskFragment(diff.result, fragment, _this, fragmentName) : diff.result;
                if (
                  // Always ensure we deliver the first result
                  latestDiff && equalByQuery(
                    query,
                    { data: latestDiff.result },
                    { data },
                    // TODO: Fix the type on WatchFragmentOptions so that TVars
                    // extends OperationVariables
                    options.variables
                  )
                ) {
                  return;
                }
                var result = {
                  data,
                  complete: !!diff.complete
                };
                if (diff.missing) {
                  result.missing = mergeDeepArray(diff.missing.map(function (error) {
                    return error.missing;
                  }));
                }
                latestDiff = __assign(__assign({}, diff), { result: data });
                observer.next(result);
              }
            }));
          });
        };
        ApolloCache2.prototype.readFragment = function (options, optimistic) {
          if (optimistic === void 0) {
            optimistic = !!options.optimistic;
          }
          return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
        };
        ApolloCache2.prototype.writeQuery = function (_a2) {
          var id2 = _a2.id, data = _a2.data, options = __rest(_a2, ["id", "data"]);
          return this.write(Object.assign(options, {
            dataId: id2 || "ROOT_QUERY",
            result: data
          }));
        };
        ApolloCache2.prototype.writeFragment = function (_a2) {
          var id2 = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, ["id", "data", "fragment", "fragmentName"]);
          return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id2,
            result: data
          }));
        };
        ApolloCache2.prototype.updateQuery = function (options, update) {
          return this.batch({
            update: function (cache2) {
              var value = cache2.readQuery(options);
              var data = update(value);
              if (data === void 0 || data === null)
                return value;
              cache2.writeQuery(__assign(__assign({}, options), { data }));
              return data;
            }
          });
        };
        ApolloCache2.prototype.updateFragment = function (options, update) {
          return this.batch({
            update: function (cache2) {
              var value = cache2.readFragment(options);
              var data = update(value);
              if (data === void 0 || data === null)
                return value;
              cache2.writeFragment(__assign(__assign({}, options), { data }));
              return data;
            }
          });
        };
        return ApolloCache2;
      }()
    );
    if (globalThis.__DEV__ !== false) {
      ApolloCache.prototype.getMemoryInternals = getApolloCacheMemoryInternals;
    }
    var MissingFieldError = (
      /** @class */
      function (_super) {
        __extends(MissingFieldError2, _super);
        function MissingFieldError2(message, path, query, variables) {
          var _a2;
          var _this = _super.call(this, message) || this;
          _this.message = message;
          _this.path = path;
          _this.query = query;
          _this.variables = variables;
          if (Array.isArray(_this.path)) {
            _this.missing = _this.message;
            for (var i = _this.path.length - 1; i >= 0; --i) {
              _this.missing = (_a2 = {}, _a2[_this.path[i]] = _this.missing, _a2);
            }
          } else {
            _this.missing = _this.path;
          }
          _this.__proto__ = MissingFieldError2.prototype;
          return _this;
        }
        return MissingFieldError2;
      }(Error)
    );
    var hasOwn = Object.prototype.hasOwnProperty;
    function isNullish(value) {
      return value === null || value === void 0;
    }
    function defaultDataIdFromObject(_a2, context) {
      var __typename = _a2.__typename, id2 = _a2.id, _id = _a2._id;
      if (typeof __typename === "string") {
        if (context) {
          context.keyObject = !isNullish(id2) ? { id: id2 } : !isNullish(_id) ? { _id } : void 0;
        }
        if (isNullish(id2) && !isNullish(_id)) {
          id2 = _id;
        }
        if (!isNullish(id2)) {
          return "".concat(__typename, ":").concat(typeof id2 === "number" || typeof id2 === "string" ? id2 : JSON.stringify(id2));
        }
      }
    }
    var defaultConfig = {
      dataIdFromObject: defaultDataIdFromObject,
      addTypename: true,
      resultCaching: true,
      // Thanks to the shouldCanonizeResults helper, this should be the only line
      // you have to change to reenable canonization by default in the future.
      canonizeResults: false
    };
    function normalizeConfig(config) {
      return compact(defaultConfig, config);
    }
    function shouldCanonizeResults(config) {
      var value = config.canonizeResults;
      return value === void 0 ? defaultConfig.canonizeResults : value;
    }
    function getTypenameFromStoreObject(store, objectOrReference) {
      return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
    }
    var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
    function fieldNameFromStoreName(storeFieldName) {
      var match = storeFieldName.match(TypeOrFieldNameRegExp);
      return match ? match[0] : storeFieldName;
    }
    function selectionSetMatchesResult(selectionSet, result, variables) {
      if (isNonNullObject(result)) {
        return isArray(result) ? result.every(function (item) {
          return selectionSetMatchesResult(selectionSet, item, variables);
        }) : selectionSet.selections.every(function (field) {
          if (isField(field) && shouldInclude(field, variables)) {
            var key = resultKeyNameFromField(field);
            return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
          }
          return true;
        });
      }
      return false;
    }
    function storeValueIsStoreObject(value) {
      return isNonNullObject(value) && !isReference(value) && !isArray(value);
    }
    function makeProcessedFieldsMerger() {
      return new DeepMerger();
    }
    function extractFragmentContext(document2, fragments) {
      var fragmentMap = createFragmentMap(getFragmentDefinitions(document2));
      return {
        fragmentMap,
        lookupFragment: function (name) {
          var def = fragmentMap[name];
          if (!def && fragments) {
            def = fragments.lookup(name);
          }
          return def || null;
        }
      };
    }
    var DELETE = /* @__PURE__ */ Object.create(null);
    var delModifier = function () {
      return DELETE;
    };
    var INVALIDATE = /* @__PURE__ */ Object.create(null);
    var EntityStore = (
      /** @class */
      function () {
        function EntityStore2(policies, group) {
          var _this = this;
          this.policies = policies;
          this.group = group;
          this.data = /* @__PURE__ */ Object.create(null);
          this.rootIds = /* @__PURE__ */ Object.create(null);
          this.refs = /* @__PURE__ */ Object.create(null);
          this.getFieldValue = function (objectOrReference, storeFieldName) {
            return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
          };
          this.canRead = function (objOrRef) {
            return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
          };
          this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
              return makeReference(objOrIdOrRef);
            }
            if (isReference(objOrIdOrRef)) {
              return objOrIdOrRef;
            }
            var id2 = _this.policies.identify(objOrIdOrRef)[0];
            if (id2) {
              var ref = makeReference(id2);
              if (mergeIntoStore) {
                _this.merge(id2, objOrIdOrRef);
              }
              return ref;
            }
          };
        }
        EntityStore2.prototype.toObject = function () {
          return __assign({}, this.data);
        };
        EntityStore2.prototype.has = function (dataId) {
          return this.lookup(dataId, true) !== void 0;
        };
        EntityStore2.prototype.get = function (dataId, fieldName) {
          this.group.depend(dataId, fieldName);
          if (hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && hasOwn.call(storeObject, fieldName)) {
              return storeObject[fieldName];
            }
          }
          if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
          }
          if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
          }
        };
        EntityStore2.prototype.lookup = function (dataId, dependOnExistence) {
          if (dependOnExistence)
            this.group.depend(dataId, "__exists");
          if (hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
          }
          if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
          }
          if (this.policies.rootTypenamesById[dataId]) {
            return /* @__PURE__ */ Object.create(null);
          }
        };
        EntityStore2.prototype.merge = function (older, newer) {
          var _this = this;
          var dataId;
          if (isReference(older))
            older = older.__ref;
          if (isReference(newer))
            newer = newer.__ref;
          var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
          var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
          if (!incoming)
            return;
          invariant$1(typeof dataId === "string", 2);
          var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
          this.data[dataId] = merged;
          if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
              var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
              if (!existing)
                fieldsToDirty_1.__exists = 1;
              Object.keys(incoming).forEach(function (storeFieldName) {
                if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                  fieldsToDirty_1[storeFieldName] = 1;
                  var fieldName = fieldNameFromStoreName(storeFieldName);
                  if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                    fieldsToDirty_1[fieldName] = 1;
                  }
                  if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                    delete merged[storeFieldName];
                  }
                }
              });
              if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && // Since we return default root __typename strings
                // automatically from store.get, we don't need to dirty the
                // ROOT_QUERY.__typename field if merged.__typename is equal
                // to the default string (usually "Query").
                this.policies.rootTypenamesById[dataId] === merged.__typename) {
                delete fieldsToDirty_1.__typename;
              }
              Object.keys(fieldsToDirty_1).forEach(function (fieldName) {
                return _this.group.dirty(dataId, fieldName);
              });
            }
          }
        };
        EntityStore2.prototype.modify = function (dataId, fields) {
          var _this = this;
          var storeObject = this.lookup(dataId);
          if (storeObject) {
            var changedFields_1 = /* @__PURE__ */ Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
              DELETE,
              INVALIDATE,
              isReference,
              toReference: this.toReference,
              canRead: this.canRead,
              readField: function (fieldNameOrOptions, from) {
                return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                  fieldName: fieldNameOrOptions,
                  from: from || makeReference(dataId)
                } : fieldNameOrOptions, { store: _this });
              }
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
              var fieldName = fieldNameFromStoreName(storeFieldName);
              var fieldValue = storeObject[storeFieldName];
              if (fieldValue === void 0)
                return;
              var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
              if (modify) {
                var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                if (newValue === INVALIDATE) {
                  _this.group.dirty(dataId, storeFieldName);
                } else {
                  if (newValue === DELETE)
                    newValue = void 0;
                  if (newValue !== fieldValue) {
                    changedFields_1[storeFieldName] = newValue;
                    needToMerge_1 = true;
                    fieldValue = newValue;
                    if (globalThis.__DEV__ !== false) {
                      var checkReference = function (ref) {
                        if (_this.lookup(ref.__ref) === void 0) {
                          globalThis.__DEV__ !== false && invariant$1.warn(3, ref);
                          return true;
                        }
                      };
                      if (isReference(newValue)) {
                        checkReference(newValue);
                      } else if (Array.isArray(newValue)) {
                        var seenReference = false;
                        var someNonReference = void 0;
                        for (var _i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
                          var value = newValue_1[_i];
                          if (isReference(value)) {
                            seenReference = true;
                            if (checkReference(value))
                              break;
                          } else {
                            if (typeof value === "object" && !!value) {
                              var id2 = _this.policies.identify(value)[0];
                              if (id2) {
                                someNonReference = value;
                              }
                            }
                          }
                          if (seenReference && someNonReference !== void 0) {
                            globalThis.__DEV__ !== false && invariant$1.warn(4, someNonReference);
                            break;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (fieldValue !== void 0) {
                allDeleted_1 = false;
              }
            });
            if (needToMerge_1) {
              this.merge(dataId, changedFields_1);
              if (allDeleted_1) {
                if (this instanceof Layer) {
                  this.data[dataId] = void 0;
                } else {
                  delete this.data[dataId];
                }
                this.group.dirty(dataId, "__exists");
              }
              return true;
            }
          }
          return false;
        };
        EntityStore2.prototype.delete = function (dataId, fieldName, args) {
          var _a2;
          var storeObject = this.lookup(dataId);
          if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
            return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
          }
          return false;
        };
        EntityStore2.prototype.evict = function (options, limit) {
          var evicted = false;
          if (options.id) {
            if (hasOwn.call(this.data, options.id)) {
              evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
              evicted = this.parent.evict(options, limit) || evicted;
            }
            if (options.fieldName || evicted) {
              this.group.dirty(options.id, options.fieldName || "__exists");
            }
          }
          return evicted;
        };
        EntityStore2.prototype.clear = function () {
          this.replace(null);
        };
        EntityStore2.prototype.extract = function () {
          var _this = this;
          var obj = this.toObject();
          var extraRootIds = [];
          this.getRootIdSet().forEach(function (id2) {
            if (!hasOwn.call(_this.policies.rootTypenamesById, id2)) {
              extraRootIds.push(id2);
            }
          });
          if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
          }
          return obj;
        };
        EntityStore2.prototype.replace = function (newData) {
          var _this = this;
          Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && hasOwn.call(newData, dataId))) {
              _this.delete(dataId);
            }
          });
          if (newData) {
            var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
              _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
              __META.extraRootIds.forEach(this.retain, this);
            }
          }
        };
        EntityStore2.prototype.retain = function (rootId) {
          return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
        };
        EntityStore2.prototype.release = function (rootId) {
          if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
              delete this.rootIds[rootId];
            return count;
          }
          return 0;
        };
        EntityStore2.prototype.getRootIdSet = function (ids) {
          if (ids === void 0) {
            ids = /* @__PURE__ */ new Set();
          }
          Object.keys(this.rootIds).forEach(ids.add, ids);
          if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
          } else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
          }
          return ids;
        };
        EntityStore2.prototype.gc = function () {
          var _this = this;
          var ids = this.getRootIdSet();
          var snapshot = this.toObject();
          ids.forEach(function (id2) {
            if (hasOwn.call(snapshot, id2)) {
              Object.keys(_this.findChildRefIds(id2)).forEach(ids.add, ids);
              delete snapshot[id2];
            }
          });
          var idsToRemove = Object.keys(snapshot);
          if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
              root_1 = root_1.parent;
            idsToRemove.forEach(function (id2) {
              return root_1.delete(id2);
            });
          }
          return idsToRemove;
        };
        EntityStore2.prototype.findChildRefIds = function (dataId) {
          if (!hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
            var root2 = this.data[dataId];
            if (!root2)
              return found_1;
            var workSet_1 = /* @__PURE__ */ new Set([root2]);
            workSet_1.forEach(function (obj) {
              if (isReference(obj)) {
                found_1[obj.__ref] = true;
              }
              if (isNonNullObject(obj)) {
                Object.keys(obj).forEach(function (key) {
                  var child = obj[key];
                  if (isNonNullObject(child)) {
                    workSet_1.add(child);
                  }
                });
              }
            });
          }
          return this.refs[dataId];
        };
        EntityStore2.prototype.makeCacheKey = function () {
          return this.group.keyMaker.lookupArray(arguments);
        };
        return EntityStore2;
      }()
    );
    var CacheGroup = (
      /** @class */
      function () {
        function CacheGroup2(caching, parent) {
          if (parent === void 0) {
            parent = null;
          }
          this.caching = caching;
          this.parent = parent;
          this.d = null;
          this.resetCaching();
        }
        CacheGroup2.prototype.resetCaching = function () {
          this.d = this.caching ? dep() : null;
          this.keyMaker = new Trie(canUseWeakMap);
        };
        CacheGroup2.prototype.depend = function (dataId, storeFieldName) {
          if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName) {
              this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
              this.parent.depend(dataId, storeFieldName);
            }
          }
        };
        CacheGroup2.prototype.dirty = function (dataId, storeFieldName) {
          if (this.d) {
            this.d.dirty(
              makeDepKey(dataId, storeFieldName),
              // When storeFieldName === "__exists", that means the entity identified
              // by dataId has either disappeared from the cache or was newly added,
              // so the result caching system would do well to "forget everything it
              // knows" about that object. To achieve that kind of invalidation, we
              // not only dirty the associated result cache entry, but also remove it
              // completely from the dependency graph. For the optimism implementation
              // details, see https://github.com/benjamn/optimism/pull/195.
              storeFieldName === "__exists" ? "forget" : "setDirty"
            );
          }
        };
        return CacheGroup2;
      }()
    );
    function makeDepKey(dataId, storeFieldName) {
      return storeFieldName + "#" + dataId;
    }
    function maybeDependOnExistenceOfEntity(store, entityId) {
      if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
      }
    }
    (function (EntityStore2) {
      var Root = (
        /** @class */
        function (_super) {
          __extends(Root2, _super);
          function Root2(_a2) {
            var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new Trie(canUseWeakMap);
            if (seed)
              _this.replace(seed);
            return _this;
          }
          Root2.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
          };
          Root2.prototype.removeLayer = function () {
            return this;
          };
          Root2.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
          };
          return Root2;
        }(EntityStore2)
      );
      EntityStore2.Root = Root;
    })(EntityStore || (EntityStore = {}));
    var Layer = (
      /** @class */
      function (_super) {
        __extends(Layer2, _super);
        function Layer2(id2, parent, replay, group) {
          var _this = _super.call(this, parent.policies, group) || this;
          _this.id = id2;
          _this.parent = parent;
          _this.replay = replay;
          _this.group = group;
          replay(_this);
          return _this;
        }
        Layer2.prototype.addLayer = function (layerId, replay) {
          return new Layer2(layerId, this, replay, this.group);
        };
        Layer2.prototype.removeLayer = function (layerId) {
          var _this = this;
          var parent = this.parent.removeLayer(layerId);
          if (layerId === this.id) {
            if (this.group.caching) {
              Object.keys(this.data).forEach(function (dataId) {
                var ownStoreObject = _this.data[dataId];
                var parentStoreObject = parent["lookup"](dataId);
                if (!parentStoreObject) {
                  _this.delete(dataId);
                } else if (!ownStoreObject) {
                  _this.group.dirty(dataId, "__exists");
                  Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                    _this.group.dirty(dataId, storeFieldName);
                  });
                } else if (ownStoreObject !== parentStoreObject) {
                  Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                    if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                      _this.group.dirty(dataId, storeFieldName);
                    }
                  });
                }
              });
            }
            return parent;
          }
          if (parent === this.parent)
            return this;
          return parent.addLayer(this.id, this.replay);
        };
        Layer2.prototype.toObject = function () {
          return __assign(__assign({}, this.parent.toObject()), this.data);
        };
        Layer2.prototype.findChildRefIds = function (dataId) {
          var fromParent = this.parent.findChildRefIds(dataId);
          return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
        };
        Layer2.prototype.getStorage = function () {
          var p2 = this.parent;
          while (p2.parent)
            p2 = p2.parent;
          return p2.getStorage.apply(
            p2,
            // @ts-expect-error
            arguments
          );
        };
        return Layer2;
      }(EntityStore)
    );
    var Stump = (
      /** @class */
      function (_super) {
        __extends(Stump2, _super);
        function Stump2(root2) {
          return _super.call(this, "EntityStore.Stump", root2, function () {
          }, new CacheGroup(root2.group.caching, root2.group)) || this;
        }
        Stump2.prototype.removeLayer = function () {
          return this;
        };
        Stump2.prototype.merge = function (older, newer) {
          return this.parent.merge(older, newer);
        };
        return Stump2;
      }(Layer)
    );
    function storeObjectReconciler(existingObject, incomingObject, property) {
      var existingValue = existingObject[property];
      var incomingValue = incomingObject[property];
      return equal(existingValue, incomingValue) ? existingValue : incomingValue;
    }
    function supportsResultCaching(store) {
      return !!(store instanceof EntityStore && store.group.caching);
    }
    function shallowCopy(value) {
      if (isNonNullObject(value)) {
        return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
      }
      return value;
    }
    var ObjectCanon = (
      /** @class */
      function () {
        function ObjectCanon2() {
          this.known = new (canUseWeakSet ? WeakSet : Set)();
          this.pool = new Trie(canUseWeakMap);
          this.passes = /* @__PURE__ */ new WeakMap();
          this.keysByJSON = /* @__PURE__ */ new Map();
          this.empty = this.admit({});
        }
        ObjectCanon2.prototype.isKnown = function (value) {
          return isNonNullObject(value) && this.known.has(value);
        };
        ObjectCanon2.prototype.pass = function (value) {
          if (isNonNullObject(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
          }
          return value;
        };
        ObjectCanon2.prototype.admit = function (value) {
          var _this = this;
          if (isNonNullObject(value)) {
            var original = this.passes.get(value);
            if (original)
              return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
              case Array.prototype: {
                if (this.known.has(value))
                  return value;
                var array = value.map(this.admit, this);
                var node = this.pool.lookupArray(array);
                if (!node.array) {
                  this.known.add(node.array = array);
                  if (globalThis.__DEV__ !== false) {
                    Object.freeze(array);
                  }
                }
                return node.array;
              }
              case null:
              case Object.prototype: {
                if (this.known.has(value))
                  return value;
                var proto_1 = Object.getPrototypeOf(value);
                var array_1 = [proto_1];
                var keys = this.sortedKeys(value);
                array_1.push(keys.json);
                var firstValueIndex_1 = array_1.length;
                keys.sorted.forEach(function (key) {
                  array_1.push(_this.admit(value[key]));
                });
                var node = this.pool.lookupArray(array_1);
                if (!node.object) {
                  var obj_1 = node.object = Object.create(proto_1);
                  this.known.add(obj_1);
                  keys.sorted.forEach(function (key, i) {
                    obj_1[key] = array_1[firstValueIndex_1 + i];
                  });
                  if (globalThis.__DEV__ !== false) {
                    Object.freeze(obj_1);
                  }
                }
                return node.object;
              }
            }
          }
          return value;
        };
        ObjectCanon2.prototype.sortedKeys = function (obj) {
          var keys = Object.keys(obj);
          var node = this.pool.lookupArray(keys);
          if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
              this.keysByJSON.set(json, node.keys = { sorted: keys, json });
            }
          }
          return node.keys;
        };
        return ObjectCanon2;
      }()
    );
    function execSelectionSetKeyArgs(options) {
      return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        // We split out this property so we can pass different values
        // independently without modifying options.context itself.
        options.context.canonizeResults
      ];
    }
    var StoreReader = (
      /** @class */
      function () {
        function StoreReader2(config) {
          var _this = this;
          this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
          this.config = compact(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: shouldCanonizeResults(config)
          });
          this.canon = config.canon || new ObjectCanon();
          this.executeSelectionSet = wrap(function (options) {
            var _a2;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
            if (other) {
              if (canonizeResults) {
                return __assign(__assign({}, other), {
                  // If we previously read this result without canonizing it, we can
                  // reuse that result simply by canonizing it now.
                  result: _this.canon.admit(other.result)
                });
              }
              return other;
            }
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
          }, {
            max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: execSelectionSetKeyArgs,
            // Note that the parameters of makeCacheKey are determined by the
            // array returned by keyArgs.
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
              if (supportsResultCaching(context.store)) {
                return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
              }
            }
          });
          this.executeSubSelectedArray = wrap(function (options) {
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
          }, {
            max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.executeSubSelectedArray"] || 1e4,
            makeCacheKey: function (_a2) {
              var field = _a2.field, array = _a2.array, context = _a2.context;
              if (supportsResultCaching(context.store)) {
                return context.store.makeCacheKey(field, array, context.varString);
              }
            }
          });
        }
        StoreReader2.prototype.resetCanon = function () {
          this.canon = new ObjectCanon();
        };
        StoreReader2.prototype.diffQueryAgainstStore = function (_a2) {
          var store = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
          var policies = this.config.cache.policies;
          variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
          var rootRef = makeReference(rootId);
          var execResult = this.executeSelectionSet({
            selectionSet: getMainDefinition(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: __assign({ store, query, policies, variables, varString: canonicalStringify(variables), canonizeResults }, extractFragmentContext(query, this.config.fragments))
          });
          var missing;
          if (execResult.missing) {
            missing = [
              new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)
            ];
            if (!returnPartialData) {
              throw missing[0];
            }
          }
          return {
            result: execResult.result,
            complete: !missing,
            missing
          };
        };
        StoreReader2.prototype.isFresh = function (result, parent, selectionSet, context) {
          if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(
              selectionSet,
              parent,
              context,
              // If result is canonical, then it could only have been previously
              // cached by the canonizing version of executeSelectionSet, so we can
              // avoid checking both possibilities here.
              this.canon.isKnown(result)
            );
            if (latest && result === latest.result) {
              return true;
            }
          }
          return false;
        };
        StoreReader2.prototype.execSelectionSetImpl = function (_a2) {
          var _this = this;
          var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
          if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
            return {
              result: this.canon.empty,
              missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
            };
          }
          var variables = context.variables, policies = context.policies, store = context.store;
          var typename = store.getFieldValue(objectOrReference, "__typename");
          var objectsToMerge = [];
          var missing;
          var missingMerger = new DeepMerger();
          if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
          }
          function handleMissing(result2, resultName) {
            var _a3;
            if (result2.missing) {
              missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = result2.missing, _a3));
            }
            return result2.result;
          }
          var workSet = new Set(selectionSet.selections);
          workSet.forEach(function (selection) {
            var _a3, _b;
            if (!shouldInclude(selection, variables))
              return;
            if (isField(selection)) {
              var fieldValue = policies.readField({
                fieldName: selection.name.value,
                field: selection,
                variables: context.variables,
                from: objectOrReference
              }, context);
              var resultName = resultKeyNameFromField(selection);
              if (fieldValue === void 0) {
                if (!addTypenameToDocument.added(selection)) {
                  missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
                }
              } else if (isArray(fieldValue)) {
                if (fieldValue.length > 0) {
                  fieldValue = handleMissing(_this.executeSubSelectedArray({
                    field: selection,
                    array: fieldValue,
                    enclosingRef,
                    context
                  }), resultName);
                }
              } else if (!selection.selectionSet) {
                if (context.canonizeResults) {
                  fieldValue = _this.canon.pass(fieldValue);
                }
              } else if (fieldValue != null) {
                fieldValue = handleMissing(_this.executeSelectionSet({
                  selectionSet: selection.selectionSet,
                  objectOrReference: fieldValue,
                  enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
                  context
                }), resultName);
              }
              if (fieldValue !== void 0) {
                objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
              }
            } else {
              var fragment = getFragmentFromSelection(selection, context.lookupFragment);
              if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
                throw newInvariantError(10, selection.name.value);
              }
              if (fragment && policies.fragmentMatches(fragment, typename)) {
                fragment.selectionSet.selections.forEach(workSet.add, workSet);
              }
            }
          });
          var result = mergeDeepArray(objectsToMerge);
          var finalResult = { result, missing };
          var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
          if (frozen.result) {
            this.knownResults.set(frozen.result, selectionSet);
          }
          return frozen;
        };
        StoreReader2.prototype.execSubSelectedArrayImpl = function (_a2) {
          var _this = this;
          var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
          var missing;
          var missingMerger = new DeepMerger();
          function handleMissing(childResult, i) {
            var _a3;
            if (childResult.missing) {
              missing = missingMerger.merge(missing, (_a3 = {}, _a3[i] = childResult.missing, _a3));
            }
            return childResult.result;
          }
          if (field.selectionSet) {
            array = array.filter(context.store.canRead);
          }
          array = array.map(function (item, i) {
            if (item === null) {
              return null;
            }
            if (isArray(item)) {
              return handleMissing(_this.executeSubSelectedArray({
                field,
                array: item,
                enclosingRef,
                context
              }), i);
            }
            if (field.selectionSet) {
              return handleMissing(_this.executeSelectionSet({
                selectionSet: field.selectionSet,
                objectOrReference: item,
                enclosingRef: isReference(item) ? item : enclosingRef,
                context
              }), i);
            }
            if (globalThis.__DEV__ !== false) {
              assertSelectionSetForIdValue(context.store, field, item);
            }
            return item;
          });
          return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing
          };
        };
        return StoreReader2;
      }()
    );
    function firstMissing(tree) {
      try {
        JSON.stringify(tree, function (_, value) {
          if (typeof value === "string")
            throw value;
          return value;
        });
      } catch (result) {
        return result;
      }
    }
    function assertSelectionSetForIdValue(store, field, fieldValue) {
      if (!field.selectionSet) {
        var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
        workSet_1.forEach(function (value) {
          if (isNonNullObject(value)) {
            invariant$1(
              !isReference(value),
              11,
              getTypenameFromStoreObject(store, value),
              field.name.value
            );
            Object.values(value).forEach(workSet_1.add, workSet_1);
          }
        });
      }
    }
    var cacheSlot = new Slot();
    var cacheInfoMap = /* @__PURE__ */ new WeakMap();
    function getCacheInfo(cache2) {
      var info = cacheInfoMap.get(cache2);
      if (!info) {
        cacheInfoMap.set(cache2, info = {
          vars: /* @__PURE__ */ new Set(),
          dep: dep()
        });
      }
      return info;
    }
    function forgetCache(cache2) {
      getCacheInfo(cache2).vars.forEach(function (rv) {
        return rv.forgetCache(cache2);
      });
    }
    function recallCache(cache2) {
      getCacheInfo(cache2).vars.forEach(function (rv) {
        return rv.attachCache(cache2);
      });
    }
    function makeVar(value) {
      var caches2 = /* @__PURE__ */ new Set();
      var listeners = /* @__PURE__ */ new Set();
      var rv = function (newValue) {
        if (arguments.length > 0) {
          if (value !== newValue) {
            value = newValue;
            caches2.forEach(function (cache3) {
              getCacheInfo(cache3).dep.dirty(rv);
              broadcast(cache3);
            });
            var oldListeners = Array.from(listeners);
            listeners.clear();
            oldListeners.forEach(function (listener) {
              return listener(value);
            });
          }
        } else {
          var cache2 = cacheSlot.getValue();
          if (cache2) {
            attach(cache2);
            getCacheInfo(cache2).dep(rv);
          }
        }
        return value;
      };
      rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
          listeners.delete(listener);
        };
      };
      var attach = rv.attachCache = function (cache2) {
        caches2.add(cache2);
        getCacheInfo(cache2).vars.add(rv);
        return rv;
      };
      rv.forgetCache = function (cache2) {
        return caches2.delete(cache2);
      };
      return rv;
    }
    function broadcast(cache2) {
      if (cache2.broadcastWatches) {
        cache2.broadcastWatches();
      }
    }
    var specifierInfoCache = /* @__PURE__ */ Object.create(null);
    function lookupSpecifierInfo(spec) {
      var cacheKey = JSON.stringify(spec);
      return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
    }
    function keyFieldsFnFromSpecifier(specifier) {
      var info = lookupSpecifierInfo(specifier);
      return info.keyFieldsFn || (info.keyFieldsFn = function (object, context) {
        var extract = function (from, key) {
          return context.readField(key, from);
        };
        var keyObject = context.keyObject = collectSpecifierPaths(specifier, function (schemaKeyPath) {
          var extracted = extractKeyPath(
            context.storeObject,
            schemaKeyPath,
            // Using context.readField to extract paths from context.storeObject
            // allows the extraction to see through Reference objects and respect
            // custom read functions.
            extract
          );
          if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
            extracted = extractKeyPath(object, schemaKeyPath, extractKey);
          }
          invariant$1(extracted !== void 0, 5, schemaKeyPath.join("."), object);
          return extracted;
        });
        return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
      });
    }
    function keyArgsFnFromSpecifier(specifier) {
      var info = lookupSpecifierInfo(specifier);
      return info.keyArgsFn || (info.keyArgsFn = function (args, _a2) {
        var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
        var collected = collectSpecifierPaths(specifier, function (keyPath) {
          var firstKey = keyPath[0];
          var firstChar = firstKey.charAt(0);
          if (firstChar === "@") {
            if (field && isNonEmptyArray(field.directives)) {
              var directiveName_1 = firstKey.slice(1);
              var d = field.directives.find(function (d2) {
                return d2.name.value === directiveName_1;
              });
              var directiveArgs = d && argumentsObjectFromField(d, variables);
              return directiveArgs && extractKeyPath(
                directiveArgs,
                // If keyPath.length === 1, this code calls extractKeyPath with an
                // empty path, which works because it uses directiveArgs as the
                // extracted value.
                keyPath.slice(1)
              );
            }
            return;
          }
          if (firstChar === "$") {
            var variableName = firstKey.slice(1);
            if (variables && hasOwn.call(variables, variableName)) {
              var varKeyPath = keyPath.slice(0);
              varKeyPath[0] = variableName;
              return extractKeyPath(variables, varKeyPath);
            }
            return;
          }
          if (args) {
            return extractKeyPath(args, keyPath);
          }
        });
        var suffix = JSON.stringify(collected);
        if (args || suffix !== "{}") {
          fieldName += ":" + suffix;
        }
        return fieldName;
      });
    }
    function collectSpecifierPaths(specifier, extractor) {
      var merger = new DeepMerger();
      return getSpecifierPaths(specifier).reduce(function (collected, path) {
        var _a2;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
          for (var i = path.length - 1; i >= 0; --i) {
            toMerge = (_a2 = {}, _a2[path[i]] = toMerge, _a2);
          }
          collected = merger.merge(collected, toMerge);
        }
        return collected;
      }, /* @__PURE__ */ Object.create(null));
    }
    function getSpecifierPaths(spec) {
      var info = lookupSpecifierInfo(spec);
      if (!info.paths) {
        var paths_1 = info.paths = [];
        var currentPath_1 = [];
        spec.forEach(function (s, i) {
          if (isArray(s)) {
            getSpecifierPaths(s).forEach(function (p2) {
              return paths_1.push(currentPath_1.concat(p2));
            });
            currentPath_1.length = 0;
          } else {
            currentPath_1.push(s);
            if (!isArray(spec[i + 1])) {
              paths_1.push(currentPath_1.slice(0));
              currentPath_1.length = 0;
            }
          }
        });
      }
      return info.paths;
    }
    function extractKey(object, key) {
      return object[key];
    }
    function extractKeyPath(object, path, extract) {
      extract = extract || extractKey;
      return normalize$1(path.reduce(function reducer(obj, key) {
        return isArray(obj) ? obj.map(function (child) {
          return reducer(child, key);
        }) : obj && extract(obj, key);
      }, object));
    }
    function normalize$1(value) {
      if (isNonNullObject(value)) {
        if (isArray(value)) {
          return value.map(normalize$1);
        }
        return collectSpecifierPaths(Object.keys(value).sort(), function (path) {
          return extractKeyPath(value, path);
        });
      }
      return value;
    }
    function argsFromFieldSpecifier(spec) {
      return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
    }
    var nullKeyFieldsFn = function () {
      return void 0;
    };
    var simpleKeyArgsFn = function (_args, context) {
      return context.fieldName;
    };
    var mergeTrueFn = function (existing, incoming, _a2) {
      var mergeObjects = _a2.mergeObjects;
      return mergeObjects(existing, incoming);
    };
    var mergeFalseFn = function (_, incoming) {
      return incoming;
    };
    var Policies = (
      /** @class */
      function () {
        function Policies2(config) {
          this.config = config;
          this.typePolicies = /* @__PURE__ */ Object.create(null);
          this.toBeAdded = /* @__PURE__ */ Object.create(null);
          this.supertypeMap = /* @__PURE__ */ new Map();
          this.fuzzySubtypes = /* @__PURE__ */ new Map();
          this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
          this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
          this.usingPossibleTypes = false;
          this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config);
          this.cache = this.config.cache;
          this.setRootTypename("Query");
          this.setRootTypename("Mutation");
          this.setRootTypename("Subscription");
          if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
          }
          if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
          }
        }
        Policies2.prototype.identify = function (object, partialContext) {
          var _a2;
          var policies = this;
          var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object.__typename;
          if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
          }
          var storeObject = partialContext && partialContext.storeObject || object;
          var context = __assign(__assign({}, partialContext), {
            typename, storeObject, readField: partialContext && partialContext.readField || function () {
              var options = normalizeReadFieldOptions(arguments, storeObject);
              return policies.readField(options, {
                store: policies.cache["data"],
                variables: options.variables
              });
            }
          });
          var id2;
          var policy = typename && this.getTypePolicy(typename);
          var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
          disableWarningsSlot.withValue(true, function () {
            while (keyFn) {
              var specifierOrId = keyFn(__assign(__assign({}, object), storeObject), context);
              if (isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
              } else {
                id2 = specifierOrId;
                break;
              }
            }
          });
          id2 = id2 ? String(id2) : void 0;
          return context.keyObject ? [id2, context.keyObject] : [id2];
        };
        Policies2.prototype.addTypePolicies = function (typePolicies) {
          var _this = this;
          Object.keys(typePolicies).forEach(function (typename) {
            var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
              _this.setRootTypename("Query", typename);
            if (mutationType)
              _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
              _this.setRootTypename("Subscription", typename);
            if (hasOwn.call(_this.toBeAdded, typename)) {
              _this.toBeAdded[typename].push(incoming);
            } else {
              _this.toBeAdded[typename] = [incoming];
            }
          });
        };
        Policies2.prototype.updateTypePolicy = function (typename, incoming) {
          var _this = this;
          var existing = this.getTypePolicy(typename);
          var keyFields = incoming.keyFields, fields = incoming.fields;
          function setMerge(existing2, merge) {
            existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
          }
          setMerge(existing, incoming.merge);
          existing.keyFn = // Pass false to disable normalization for this typename.
            keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
          if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
              var existing2 = _this.getFieldPolicy(typename, fieldName, true);
              var incoming2 = fields[fieldName];
              if (typeof incoming2 === "function") {
                existing2.read = incoming2;
              } else {
                var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
                existing2.keyFn = // Pass false to disable argument-based differentiation of
                  // field identities.
                  keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
                if (typeof read === "function") {
                  existing2.read = read;
                }
                setMerge(existing2, merge);
              }
              if (existing2.read && existing2.merge) {
                existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
              }
            });
          }
        };
        Policies2.prototype.setRootTypename = function (which, typename) {
          if (typename === void 0) {
            typename = which;
          }
          var rootId = "ROOT_" + which.toUpperCase();
          var old = this.rootTypenamesById[rootId];
          if (typename !== old) {
            invariant$1(!old || old === which, 6, which);
            if (old)
              delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
          }
        };
        Policies2.prototype.addPossibleTypes = function (possibleTypes) {
          var _this = this;
          this.usingPossibleTypes = true;
          Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
              _this.getSupertypeSet(subtype, true).add(supertype);
              var match = subtype.match(TypeOrFieldNameRegExp);
              if (!match || match[0] !== subtype) {
                _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
              }
            });
          });
        };
        Policies2.prototype.getTypePolicy = function (typename) {
          var _this = this;
          if (!hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
            policy_1.fields = /* @__PURE__ */ Object.create(null);
            var supertypes_1 = this.supertypeMap.get(typename);
            if (!supertypes_1 && this.fuzzySubtypes.size) {
              supertypes_1 = this.getSupertypeSet(typename, true);
              this.fuzzySubtypes.forEach(function (regExp, fuzzy) {
                if (regExp.test(typename)) {
                  var fuzzySupertypes = _this.supertypeMap.get(fuzzy);
                  if (fuzzySupertypes) {
                    fuzzySupertypes.forEach(function (supertype) {
                      return supertypes_1.add(supertype);
                    });
                  }
                }
              });
            }
            if (supertypes_1 && supertypes_1.size) {
              supertypes_1.forEach(function (supertype) {
                var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, ["fields"]);
                Object.assign(policy_1, rest);
                Object.assign(policy_1.fields, fields);
              });
            }
          }
          var inbox = this.toBeAdded[typename];
          if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
              _this.updateTypePolicy(typename, policy);
            });
          }
          return this.typePolicies[typename];
        };
        Policies2.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
          if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
          }
        };
        Policies2.prototype.getSupertypeSet = function (subtype, createIfMissing) {
          var supertypeSet = this.supertypeMap.get(subtype);
          if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
          }
          return supertypeSet;
        };
        Policies2.prototype.fragmentMatches = function (fragment, typename, result, variables) {
          var _this = this;
          if (!fragment.typeCondition)
            return true;
          if (!typename)
            return false;
          var supertype = fragment.typeCondition.name.value;
          if (typename === supertype)
            return true;
          if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
              var supertypeSet2 = _this.getSupertypeSet(subtype, false);
              if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
                workQueue_1.push(supertypeSet2);
              }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
              var supertypeSet = workQueue_1[i];
              if (supertypeSet.has(supertype)) {
                if (!typenameSupertypeSet.has(supertype)) {
                  if (checkingFuzzySubtypes) {
                    globalThis.__DEV__ !== false && invariant$1.warn(7, typename, supertype);
                  }
                  typenameSupertypeSet.add(supertype);
                }
                return true;
              }
              supertypeSet.forEach(maybeEnqueue_1);
              if (needToCheckFuzzySubtypes && // Start checking fuzzy subtypes only after exhausting all
                // non-fuzzy subtypes (after the final iteration of the loop).
                i === workQueue_1.length - 1 && // We could wait to compare fragment.selectionSet to result
                // after we verify the supertype, but this check is often less
                // expensive than that search, and we will have to do the
                // comparison anyway whenever we find a potential match.
                selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
                needToCheckFuzzySubtypes = false;
                checkingFuzzySubtypes = true;
                this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                  var match = typename.match(regExp);
                  if (match && match[0] === typename) {
                    maybeEnqueue_1(fuzzyString);
                  }
                });
              }
            }
          }
          return false;
        };
        Policies2.prototype.hasKeyArgs = function (typename, fieldName) {
          var policy = this.getFieldPolicy(typename, fieldName, false);
          return !!(policy && policy.keyFn);
        };
        Policies2.prototype.getStoreFieldName = function (fieldSpec) {
          var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
          var policy = this.getFieldPolicy(typename, fieldName, false);
          var storeFieldName;
          var keyFn = policy && policy.keyFn;
          if (keyFn && typename) {
            var context = {
              typename,
              fieldName,
              field: fieldSpec.field || null,
              variables: fieldSpec.variables
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
              var specifierOrString = keyFn(args, context);
              if (isArray(specifierOrString)) {
                keyFn = keyArgsFnFromSpecifier(specifierOrString);
              } else {
                storeFieldName = specifierOrString || fieldName;
                break;
              }
            }
          }
          if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
          }
          if (storeFieldName === false) {
            return fieldName;
          }
          return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
        };
        Policies2.prototype.readField = function (options, context) {
          var objectOrReference = options.from;
          if (!objectOrReference)
            return;
          var nameOrField = options.field || options.fieldName;
          if (!nameOrField)
            return;
          if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
              options.typename = typename;
          }
          var storeFieldName = this.getStoreFieldName(options);
          var fieldName = fieldNameFromStoreName(storeFieldName);
          var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
          var policy = this.getFieldPolicy(options.typename, fieldName, false);
          var read = policy && policy.read;
          if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
            return cacheSlot.withValue(this.cache, read, [
              existing,
              readOptions
            ]);
          }
          return existing;
        };
        Policies2.prototype.getReadFunction = function (typename, fieldName) {
          var policy = this.getFieldPolicy(typename, fieldName, false);
          return policy && policy.read;
        };
        Policies2.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
          var policy = this.getFieldPolicy(parentTypename, fieldName, false);
          var merge = policy && policy.merge;
          if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
          }
          return merge;
        };
        Policies2.prototype.runMergeFunction = function (existing, incoming, _a2, context, storage) {
          var field = _a2.field, typename = _a2.typename, merge = _a2.merge;
          if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
          }
          if (merge === mergeFalseFn) {
            return incoming;
          }
          if (context.overwrite) {
            existing = void 0;
          }
          return merge(existing, incoming, makeFieldFunctionOptions(
            this,
            // Unlike options.readField for read functions, we do not fall
            // back to the current object if no foreignObjOrRef is provided,
            // because it's not clear what the current object should be for
            // merge functions: the (possibly undefined) existing object, or
            // the incoming object? If you think your merge function needs
            // to read sibling fields in order to produce a new value for
            // the current field, you might want to rethink your strategy,
            // because that's a recipe for making merge behavior sensitive
            // to the order in which fields are written into the cache.
            // However, readField(name, ref) is useful for merge functions
            // that need to deduplicate child objects and references.
            void 0,
            {
              typename,
              fieldName: field.name.value,
              field,
              variables: context.variables
            },
            context,
            storage || /* @__PURE__ */ Object.create(null)
          ));
        };
        return Policies2;
      }()
    );
    function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
      var storeFieldName = policies.getStoreFieldName(fieldSpec);
      var fieldName = fieldNameFromStoreName(storeFieldName);
      var variables = fieldSpec.variables || context.variables;
      var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
      return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName,
        storeFieldName,
        variables,
        isReference,
        toReference,
        storage,
        cache: policies.cache,
        canRead,
        readField: function () {
          return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store)
      };
    }
    function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
      var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
      var options;
      if (typeof fieldNameOrOptions === "string") {
        options = {
          fieldName: fieldNameOrOptions,
          // Default to objectOrReference only when no second argument was
          // passed for the from parameter, not when undefined is explicitly
          // passed as the second argument.
          from: argc > 1 ? from : objectOrReference
        };
      } else {
        options = __assign({}, fieldNameOrOptions);
        if (!hasOwn.call(options, "from")) {
          options.from = objectOrReference;
        }
      }
      if (globalThis.__DEV__ !== false && options.from === void 0) {
        globalThis.__DEV__ !== false && invariant$1.warn(8, stringifyForDisplay(Array.from(readFieldArgs)));
      }
      if (void 0 === options.variables) {
        options.variables = variables;
      }
      return options;
    }
    function makeMergeObjectsFunction(store) {
      return function mergeObjects(existing, incoming) {
        if (isArray(existing) || isArray(incoming)) {
          throw newInvariantError(9);
        }
        if (isNonNullObject(existing) && isNonNullObject(incoming)) {
          var eType = store.getFieldValue(existing, "__typename");
          var iType = store.getFieldValue(incoming, "__typename");
          var typesDiffer = eType && iType && eType !== iType;
          if (typesDiffer) {
            return incoming;
          }
          if (isReference(existing) && storeValueIsStoreObject(incoming)) {
            store.merge(existing.__ref, incoming);
            return existing;
          }
          if (storeValueIsStoreObject(existing) && isReference(incoming)) {
            store.merge(existing, incoming.__ref);
            return incoming;
          }
          if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
            return __assign(__assign({}, existing), incoming);
          }
        }
        return incoming;
      };
    }
    function getContextFlavor(context, clientOnly, deferred) {
      var key = "".concat(clientOnly).concat(deferred);
      var flavored = context.flavors.get(key);
      if (!flavored) {
        context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
      }
      return flavored;
    }
    var StoreWriter = (
      /** @class */
      function () {
        function StoreWriter2(cache2, reader, fragments) {
          this.cache = cache2;
          this.reader = reader;
          this.fragments = fragments;
        }
        StoreWriter2.prototype.writeToStore = function (store, _a2) {
          var _this = this;
          var query = _a2.query, result = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
          var operationDefinition = getOperationDefinition(query);
          var merger = makeProcessedFieldsMerger();
          variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
          var context = __assign(__assign({
            store, written: /* @__PURE__ */ Object.create(null), merge: function (existing, incoming) {
              return merger.merge(existing, incoming);
            }, variables, varString: canonicalStringify(variables)
          }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: /* @__PURE__ */ new Map(), clientOnly: false, deferred: false, flavors: /* @__PURE__ */ new Map() });
          var ref = this.processSelectionSet({
            result: result || /* @__PURE__ */ Object.create(null),
            dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: /* @__PURE__ */ new Map() },
            context
          });
          if (!isReference(ref)) {
            throw newInvariantError(12, result);
          }
          context.incomingById.forEach(function (_a3, dataId2) {
            var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
            var entityRef = makeReference(dataId2);
            if (mergeTree && mergeTree.map.size) {
              var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
              if (isReference(applied)) {
                return;
              }
              storeObject = applied;
            }
            if (globalThis.__DEV__ !== false && !context.overwrite) {
              var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
              fieldNodeSet.forEach(function (field) {
                if (field.selectionSet) {
                  fieldsWithSelectionSets_1[field.name.value] = true;
                }
              });
              var hasSelectionSet_1 = function (storeFieldName) {
                return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
              };
              var hasMergeFunction_1 = function (storeFieldName) {
                var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                return Boolean(childTree && childTree.info && childTree.info.merge);
              };
              Object.keys(storeObject).forEach(function (storeFieldName) {
                if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
                  warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                }
              });
            }
            store.merge(dataId2, storeObject);
          });
          store.retain(ref.__ref);
          return ref;
        };
        StoreWriter2.prototype.processSelectionSet = function (_a2) {
          var _this = this;
          var dataId = _a2.dataId, result = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
          var policies = this.cache.policies;
          var incoming = /* @__PURE__ */ Object.create(null);
          var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
          if ("string" === typeof typename) {
            incoming.__typename = typename;
          }
          var readField = function () {
            var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
            if (isReference(options.from)) {
              var info = context.incomingById.get(options.from.__ref);
              if (info) {
                var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
                if (result_1 !== void 0) {
                  return result_1;
                }
              }
            }
            return policies.readField(options, context);
          };
          var fieldNodeSet = /* @__PURE__ */ new Set();
          this.flattenFields(
            selectionSet,
            result,
            // This WriteContext will be the default context value for fields returned
            // by the flattenFields method, but some fields may be assigned a modified
            // context, depending on the presence of @client and other directives.
            context,
            typename
          ).forEach(function (context2, field) {
            var _a3;
            var resultFieldKey = resultKeyNameFromField(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
              var storeFieldName = policies.getStoreFieldName({
                typename,
                fieldName: field.name.value,
                field,
                variables: context2.variables
              });
              var childTree = getChildMergeTree(mergeTree, storeFieldName);
              var incomingValue = _this.processFieldValue(
                value,
                field,
                // Reset context.clientOnly and context.deferred to their default
                // values before processing nested selection sets.
                field.selectionSet ? getContextFlavor(context2, false, false) : context2,
                childTree
              );
              var childTypename = void 0;
              if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
                childTypename = readField("__typename", incomingValue);
              }
              var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
              if (merge) {
                childTree.info = {
                  // TODO Check compatibility against any existing childTree.field?
                  field,
                  typename,
                  merge
                };
              } else {
                maybeRecycleChildMergeTree(mergeTree, storeFieldName);
              }
              incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
            } else if (globalThis.__DEV__ !== false && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && // If the field has a read function, it may be a synthetic field or
              // provide a default value, so its absence from the written data should
              // not be cause for alarm.
              !policies.getReadFunction(typename, field.name.value)) {
              globalThis.__DEV__ !== false && invariant$1.error(13, resultKeyNameFromField(field), result);
            }
          });
          try {
            var _b = policies.identify(result, {
              typename,
              selectionSet,
              fragmentMap: context.fragmentMap,
              storeObject: incoming,
              readField
            }), id2 = _b[0], keyObject = _b[1];
            dataId = dataId || id2;
            if (keyObject) {
              incoming = context.merge(incoming, keyObject);
            }
          } catch (e) {
            if (!dataId)
              throw e;
          }
          if ("string" === typeof dataId) {
            var dataRef = makeReference(dataId);
            var sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0)
              return dataRef;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
              return dataRef;
            }
            var previous_1 = context.incomingById.get(dataId);
            if (previous_1) {
              previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
              previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
              fieldNodeSet.forEach(function (field) {
                return previous_1.fieldNodeSet.add(field);
              });
            } else {
              context.incomingById.set(dataId, {
                storeObject: incoming,
                // Save a reference to mergeTree only if it is not empty, because
                // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
                // reused for entirely different parts of the result tree.
                mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                fieldNodeSet
              });
            }
            return dataRef;
          }
          return incoming;
        };
        StoreWriter2.prototype.processFieldValue = function (value, field, context, mergeTree) {
          var _this = this;
          if (!field.selectionSet || value === null) {
            return globalThis.__DEV__ !== false ? cloneDeep(value) : value;
          }
          if (isArray(value)) {
            return value.map(function (item, i) {
              var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
              maybeRecycleChildMergeTree(mergeTree, i);
              return value2;
            });
          }
          return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context,
            mergeTree
          });
        };
        StoreWriter2.prototype.flattenFields = function (selectionSet, result, context, typename) {
          if (typename === void 0) {
            typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
          }
          var fieldMap = /* @__PURE__ */ new Map();
          var policies = this.cache.policies;
          var limitingTrie = new Trie(false);
          (function flatten(selectionSet2, inheritedContext) {
            var visitedNode = limitingTrie.lookup(
              selectionSet2,
              // Because we take inheritedClientOnly and inheritedDeferred into
              // consideration here (in addition to selectionSet), it's possible for
              // the same selection set to be flattened more than once, if it appears
              // in the query with different @client and/or @directive configurations.
              inheritedContext.clientOnly,
              inheritedContext.deferred
            );
            if (visitedNode.visited)
              return;
            visitedNode.visited = true;
            selectionSet2.selections.forEach(function (selection) {
              if (!shouldInclude(selection, context.variables))
                return;
              var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
              if (
                // Since the presence of @client or @defer on this field can only
                // cause clientOnly or deferred to become true, we can skip the
                // forEach loop if both clientOnly and deferred are already true.
                !(clientOnly && deferred) && isNonEmptyArray(selection.directives)
              ) {
                selection.directives.forEach(function (dir) {
                  var name = dir.name.value;
                  if (name === "client")
                    clientOnly = true;
                  if (name === "defer") {
                    var args = argumentsObjectFromField(dir, context.variables);
                    if (!args || args.if !== false) {
                      deferred = true;
                    }
                  }
                });
              }
              if (isField(selection)) {
                var existing = fieldMap.get(selection);
                if (existing) {
                  clientOnly = clientOnly && existing.clientOnly;
                  deferred = deferred && existing.deferred;
                }
                fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
              } else {
                var fragment = getFragmentFromSelection(selection, context.lookupFragment);
                if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
                  throw newInvariantError(14, selection.name.value);
                }
                if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
                  flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                }
              }
            });
          })(selectionSet, context);
          return fieldMap;
        };
        StoreWriter2.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
          var _a2;
          var _this = this;
          if (mergeTree.map.size && !isReference(incoming)) {
            var e_1 = (
              // Items in the same position in different arrays are not
              // necessarily related to each other, so when incoming is an array
              // we process its elements as if there was no existing data.
              !isArray(incoming) && // Likewise, existing must be either a Reference or a StoreObject
                // in order for its fields to be safe to merge with the fields of
                // the incoming object.
                (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0
            );
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
              getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
              return isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
              var eVal = getValue_1(e_1, storeFieldName);
              var iVal = getValue_1(i_1, storeFieldName);
              if (void 0 === iVal)
                return;
              if (getStorageArgs) {
                getStorageArgs.push(storeFieldName);
              }
              var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
              if (aVal !== iVal) {
                changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
                changedFields_1.set(storeFieldName, aVal);
              }
              if (getStorageArgs) {
                invariant$1(getStorageArgs.pop() === storeFieldName);
              }
            });
            if (changedFields_1) {
              incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
              changedFields_1.forEach(function (value, name) {
                incoming[name] = value;
              });
            }
          }
          if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
          }
          return incoming;
        };
        return StoreWriter2;
      }()
    );
    var emptyMergeTreePool = [];
    function getChildMergeTree(_a2, name) {
      var map = _a2.map;
      if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
      }
      return map.get(name);
    }
    function mergeMergeTrees(left, right) {
      if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
      if (!left || mergeTreeIsEmpty(left))
        return right;
      var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
      var needToMergeMaps = left.map.size && right.map.size;
      var map = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
      var merged = { info, map };
      if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
          merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
          remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
          merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
      }
      return merged;
    }
    function mergeTreeIsEmpty(tree) {
      return !tree || !(tree.info || tree.map.size);
    }
    function maybeRecycleChildMergeTree(_a2, name) {
      var map = _a2.map;
      var childTree = map.get(name);
      if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
      }
    }
    var warnings = /* @__PURE__ */ new Set();
    function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
      var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
      };
      var existing = getChild(existingRef);
      if (!existing)
        return;
      var incoming = getChild(incomingObj);
      if (!incoming)
        return;
      if (isReference(existing))
        return;
      if (equal(existing, incoming))
        return;
      if (Object.keys(existing).every(function (key) {
        return store.getFieldValue(incoming, key) !== void 0;
      })) {
        return;
      }
      var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
      var fieldName = fieldNameFromStoreName(storeFieldName);
      var typeDotName = "".concat(parentType, ".").concat(fieldName);
      if (warnings.has(typeDotName))
        return;
      warnings.add(typeDotName);
      var childTypenames = [];
      if (!isArray(existing) && !isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
          var typename = store.getFieldValue(child, "__typename");
          if (typeof typename === "string" && !childTypenames.includes(typename)) {
            childTypenames.push(typename);
          }
        });
      }
      globalThis.__DEV__ !== false && invariant$1.warn(15, fieldName, parentType, childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", typeDotName, __assign({}, existing), __assign({}, incoming));
    }
    var InMemoryCache = (
      /** @class */
      function (_super) {
        __extends(InMemoryCache2, _super);
        function InMemoryCache2(config) {
          if (config === void 0) {
            config = {};
          }
          var _this = _super.call(this) || this;
          _this.watches = /* @__PURE__ */ new Set();
          _this.addTypenameTransform = new DocumentTransform(addTypenameToDocument);
          _this.assumeImmutableResults = true;
          _this.makeVar = makeVar;
          _this.txCount = 0;
          _this.config = normalizeConfig(config);
          _this.addTypename = !!_this.config.addTypename;
          _this.policies = new Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies
          });
          _this.init();
          return _this;
        }
        InMemoryCache2.prototype.init = function () {
          var rootStore = this.data = new EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching
          });
          this.optimisticData = rootStore.stump;
          this.resetResultCache();
        };
        InMemoryCache2.prototype.resetResultCache = function (resetResultIdentities) {
          var _this = this;
          var previousReader = this.storeReader;
          var fragments = this.config.fragments;
          this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: shouldCanonizeResults(this.config),
            canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon,
            fragments
          }), fragments);
          this.maybeBroadcastWatch = wrap(function (c, options) {
            return _this.broadcastWatch(c, options);
          }, {
            max: this.config.resultCacheMaxSize || cacheSizes["inMemoryCache.maybeBroadcastWatch"] || 5e3,
            makeCacheKey: function (c) {
              var store = c.optimistic ? _this.optimisticData : _this.data;
              if (supportsResultCaching(store)) {
                var optimistic = c.optimistic, id2 = c.id, variables = c.variables;
                return store.makeCacheKey(
                  c.query,
                  // Different watches can have the same query, optimistic
                  // status, rootId, and variables, but if their callbacks are
                  // different, the (identical) result needs to be delivered to
                  // each distinct callback. The easiest way to achieve that
                  // separation is to include c.callback in the cache key for
                  // maybeBroadcastWatch calls. See issue #5733.
                  c.callback,
                  canonicalStringify({ optimistic, id: id2, variables })
                );
              }
            }
          });
          (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function (group) {
            return group.resetCaching();
          });
        };
        InMemoryCache2.prototype.restore = function (data) {
          this.init();
          if (data)
            this.data.replace(data);
          return this;
        };
        InMemoryCache2.prototype.extract = function (optimistic) {
          if (optimistic === void 0) {
            optimistic = false;
          }
          return (optimistic ? this.optimisticData : this.data).extract();
        };
        InMemoryCache2.prototype.read = function (options) {
          var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
          try {
            return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
          } catch (e) {
            if (e instanceof MissingFieldError) {
              return null;
            }
            throw e;
          }
        };
        InMemoryCache2.prototype.write = function (options) {
          try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
          } finally {
            if (!--this.txCount && options.broadcast !== false) {
              this.broadcastWatches();
            }
          }
        };
        InMemoryCache2.prototype.modify = function (options) {
          if (hasOwn.call(options, "id") && !options.id) {
            return false;
          }
          var store = options.optimistic ? this.optimisticData : this.data;
          try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
          } finally {
            if (!--this.txCount && options.broadcast !== false) {
              this.broadcastWatches();
            }
          }
        };
        InMemoryCache2.prototype.diff = function (options) {
          return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
        };
        InMemoryCache2.prototype.watch = function (watch) {
          var _this = this;
          if (!this.watches.size) {
            recallCache(this);
          }
          this.watches.add(watch);
          if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
          }
          return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
              forgetCache(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
          };
        };
        InMemoryCache2.prototype.gc = function (options) {
          var _a2;
          canonicalStringify.reset();
          print.reset();
          this.addTypenameTransform.resetCache();
          (_a2 = this.config.fragments) === null || _a2 === void 0 ? void 0 : _a2.resetCaches();
          var ids = this.optimisticData.gc();
          if (options && !this.txCount) {
            if (options.resetResultCache) {
              this.resetResultCache(options.resetResultIdentities);
            } else if (options.resetResultIdentities) {
              this.storeReader.resetCanon();
            }
          }
          return ids;
        };
        InMemoryCache2.prototype.retain = function (rootId, optimistic) {
          return (optimistic ? this.optimisticData : this.data).retain(rootId);
        };
        InMemoryCache2.prototype.release = function (rootId, optimistic) {
          return (optimistic ? this.optimisticData : this.data).release(rootId);
        };
        InMemoryCache2.prototype.identify = function (object) {
          if (isReference(object))
            return object.__ref;
          try {
            return this.policies.identify(object)[0];
          } catch (e) {
            globalThis.__DEV__ !== false && invariant$1.warn(e);
          }
        };
        InMemoryCache2.prototype.evict = function (options) {
          if (!options.id) {
            if (hasOwn.call(options, "id")) {
              return false;
            }
            options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
          }
          try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
          } finally {
            if (!--this.txCount && options.broadcast !== false) {
              this.broadcastWatches();
            }
          }
        };
        InMemoryCache2.prototype.reset = function (options) {
          var _this = this;
          this.init();
          canonicalStringify.reset();
          if (options && options.discardWatches) {
            this.watches.forEach(function (watch) {
              return _this.maybeBroadcastWatch.forget(watch);
            });
            this.watches.clear();
            forgetCache(this);
          } else {
            this.broadcastWatches();
          }
          return Promise.resolve();
        };
        InMemoryCache2.prototype.removeOptimistic = function (idToRemove) {
          var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
          if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
          }
        };
        InMemoryCache2.prototype.batch = function (options) {
          var _this = this;
          var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
          var updateResult;
          var perform = function (layer) {
            var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
            ++_this.txCount;
            if (layer) {
              _this.data = _this.optimisticData = layer;
            }
            try {
              return updateResult = update(_this);
            } finally {
              --_this.txCount;
              _this.data = data;
              _this.optimisticData = optimisticData;
            }
          };
          var alreadyDirty = /* @__PURE__ */ new Set();
          if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches(__assign(__assign({}, options), {
              onWatchUpdated: function (watch) {
                alreadyDirty.add(watch);
                return false;
              }
            }));
          }
          if (typeof optimistic === "string") {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
          } else if (optimistic === false) {
            perform(this.data);
          } else {
            perform();
          }
          if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
          }
          if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches(__assign(__assign({}, options), {
              onWatchUpdated: function (watch, diff) {
                var result = onWatchUpdated.call(this, watch, diff);
                if (result !== false) {
                  alreadyDirty.delete(watch);
                }
                return result;
              }
            }));
            if (alreadyDirty.size) {
              alreadyDirty.forEach(function (watch) {
                return _this.maybeBroadcastWatch.dirty(watch);
              });
            }
          } else {
            this.broadcastWatches(options);
          }
          return updateResult;
        };
        InMemoryCache2.prototype.performTransaction = function (update, optimisticId) {
          return this.batch({
            update,
            optimistic: optimisticId || optimisticId !== null
          });
        };
        InMemoryCache2.prototype.transformDocument = function (document2) {
          return this.addTypenameToDocument(this.addFragmentsToDocument(document2));
        };
        InMemoryCache2.prototype.fragmentMatches = function (fragment, typename) {
          return this.policies.fragmentMatches(fragment, typename);
        };
        InMemoryCache2.prototype.lookupFragment = function (fragmentName) {
          var _a2;
          return ((_a2 = this.config.fragments) === null || _a2 === void 0 ? void 0 : _a2.lookup(fragmentName)) || null;
        };
        InMemoryCache2.prototype.broadcastWatches = function (options) {
          var _this = this;
          if (!this.txCount) {
            this.watches.forEach(function (c) {
              return _this.maybeBroadcastWatch(c, options);
            });
          }
        };
        InMemoryCache2.prototype.addFragmentsToDocument = function (document2) {
          var fragments = this.config.fragments;
          return fragments ? fragments.transform(document2) : document2;
        };
        InMemoryCache2.prototype.addTypenameToDocument = function (document2) {
          if (this.addTypename) {
            return this.addTypenameTransform.transformDocument(document2);
          }
          return document2;
        };
        InMemoryCache2.prototype.broadcastWatch = function (c, options) {
          var lastDiff = c.lastDiff;
          var diff = this.diff(c);
          if (options) {
            if (c.optimistic && typeof options.optimistic === "string") {
              diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
              return;
            }
          }
          if (!lastDiff || !equal(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
          }
        };
        return InMemoryCache2;
      }(ApolloCache)
    );
    if (globalThis.__DEV__ !== false) {
      InMemoryCache.prototype.getMemoryInternals = getInMemoryCacheMemoryInternals;
    }
    var NetworkStatus;
    (function (NetworkStatus2) {
      NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
      NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
      NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
      NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
      NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
      NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
      NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
    })(NetworkStatus || (NetworkStatus = {}));
    function isNetworkRequestInFlight(networkStatus) {
      return networkStatus ? networkStatus < 7 : false;
    }
    var assign = Object.assign, hasOwnProperty$2 = Object.hasOwnProperty;
    var ObservableQuery = (
      /** @class */
      function (_super) {
        __extends(ObservableQuery2, _super);
        function ObservableQuery2(_a2) {
          var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
          var _this = this;
          var startedInactive = ObservableQuery2.inactiveOnCreation.getValue();
          _this = _super.call(this, function (observer) {
            if (startedInactive) {
              queryManager["queries"].set(_this.queryId, queryInfo);
              startedInactive = false;
            }
            try {
              var subObserver = observer._subscription._observer;
              if (subObserver && !subObserver.error) {
                subObserver.error = defaultSubscriptionObserverErrorCallback;
              }
            } catch (_a3) {
            }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) {
              observer.error && observer.error(last.error);
            } else if (last && last.result) {
              observer.next && observer.next(_this.maskResult(last.result));
            }
            if (first) {
              _this.reobserve().catch(function () {
              });
            }
            return function () {
              if (_this.observers.delete(observer) && !_this.observers.size) {
                _this.tearDownQuery();
              }
            };
          }) || this;
          _this.observers = /* @__PURE__ */ new Set();
          _this.subscriptions = /* @__PURE__ */ new Set();
          _this.dirty = false;
          _this.queryInfo = queryInfo;
          _this.queryManager = queryManager;
          _this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy);
          _this.isTornDown = false;
          _this.subscribeToMore = _this.subscribeToMore.bind(_this);
          _this.maskResult = _this.maskResult.bind(_this);
          var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
          var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
          _this.options = __assign(__assign({}, options), {
            // Remember the initial options.fetchPolicy so we can revert back to this
            // policy when variables change. This information can also be specified
            // (or overridden) by providing options.initialFetchPolicy explicitly.
            initialFetchPolicy,
            // This ensures this.options.fetchPolicy always has a string value, in
            // case options.fetchPolicy was not provided.
            fetchPolicy
          });
          _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
          var opDef = getOperationDefinition(_this.query);
          _this.queryName = opDef && opDef.name && opDef.name.value;
          return _this;
        }
        Object.defineProperty(ObservableQuery2.prototype, "query", {
          // The `query` computed property will always reflect the document transformed
          // by the last run query. `this.options.query` will always reflect the raw
          // untransformed query to ensure document transforms with runtime conditionals
          // are run on the original document.
          get: function () {
            return this.lastQuery || this.options.query;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(ObservableQuery2.prototype, "variables", {
          // Computed shorthand for this.options.variables, preserved for
          // backwards compatibility.
          /**
           * An object containing the variables that were provided for the query.
           */
          get: function () {
            return this.options.variables;
          },
          enumerable: false,
          configurable: true
        });
        ObservableQuery2.prototype.result = function () {
          var _this = this;
          return new Promise(function (resolve, reject) {
            var observer = {
              next: function (result) {
                resolve(result);
                _this.observers.delete(observer);
                if (!_this.observers.size) {
                  _this.queryManager.removeQuery(_this.queryId);
                }
                setTimeout(function () {
                  subscription.unsubscribe();
                }, 0);
              },
              error: reject
            };
            var subscription = _this.subscribe(observer);
          });
        };
        ObservableQuery2.prototype.resetDiff = function () {
          this.queryInfo.resetDiff();
        };
        ObservableQuery2.prototype.getCurrentFullResult = function (saveAsLastResult) {
          if (saveAsLastResult === void 0) {
            saveAsLastResult = true;
          }
          var lastResult = this.getLastResult(true);
          var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
          var result = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
          var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
          if (
            // These fetch policies should never deliver data from the cache, unless
            // redelivering a previously delivered result.
            skipCacheDataFor(fetchPolicy) || // If this.options.query has @client(always: true) fields, we cannot
            // trust diff.result, since it was read from the cache without running
            // local resolvers (and it's too late to run resolvers now, since we must
            // return a result synchronously).
            this.queryManager.getDocumentInfo(this.query).hasForcedResolvers
          );
          else if (this.waitForOwnResult) {
            this.queryInfo["updateWatch"]();
          } else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) {
              result.data = diff.result;
            }
            if (equal(result.data, {})) {
              result.data = void 0;
            }
            if (diff.complete) {
              delete result.partial;
              if (diff.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
                result.networkStatus = NetworkStatus.ready;
                result.loading = false;
              }
            } else {
              result.partial = true;
            }
            if (result.networkStatus === NetworkStatus.ready && (result.error || result.errors)) {
              result.networkStatus = NetworkStatus.error;
            }
            if (globalThis.__DEV__ !== false && !diff.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) {
              logMissingFieldErrors(diff.missing);
            }
          }
          if (saveAsLastResult) {
            this.updateLastResult(result);
          }
          return result;
        };
        ObservableQuery2.prototype.getCurrentResult = function (saveAsLastResult) {
          if (saveAsLastResult === void 0) {
            saveAsLastResult = true;
          }
          return this.maskResult(this.getCurrentFullResult(saveAsLastResult));
        };
        ObservableQuery2.prototype.isDifferentFromLastResult = function (newResult, variables) {
          if (!this.last) {
            return true;
          }
          var documentInfo = this.queryManager.getDocumentInfo(this.query);
          var dataMasking = this.queryManager.dataMasking;
          var query = dataMasking ? documentInfo.nonReactiveQuery : this.query;
          var resultIsDifferent = dataMasking || documentInfo.hasNonreactiveDirective ? !equalByQuery(query, this.last.result, newResult, this.variables) : !equal(this.last.result, newResult);
          return resultIsDifferent || variables && !equal(this.last.variables, variables);
        };
        ObservableQuery2.prototype.getLast = function (key, variablesMustMatch) {
          var last = this.last;
          if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
            return last[key];
          }
        };
        ObservableQuery2.prototype.getLastResult = function (variablesMustMatch) {
          return this.getLast("result", variablesMustMatch);
        };
        ObservableQuery2.prototype.getLastError = function (variablesMustMatch) {
          return this.getLast("error", variablesMustMatch);
        };
        ObservableQuery2.prototype.resetLastResults = function () {
          delete this.last;
          this.isTornDown = false;
        };
        ObservableQuery2.prototype.resetQueryStoreErrors = function () {
          this.queryManager.resetErrors(this.queryId);
        };
        ObservableQuery2.prototype.refetch = function (variables) {
          var _a2;
          var reobserveOptions = {
            // Always disable polling for refetches.
            pollInterval: 0
          };
          var fetchPolicy = this.options.fetchPolicy;
          if (fetchPolicy === "no-cache") {
            reobserveOptions.fetchPolicy = "no-cache";
          } else {
            reobserveOptions.fetchPolicy = "network-only";
          }
          if (globalThis.__DEV__ !== false && variables && hasOwnProperty$2.call(variables, "variables")) {
            var queryDef = getQueryDefinition(this.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function (v2) {
              return v2.variable.name.value === "variables";
            })) {
              globalThis.__DEV__ !== false && invariant$1.warn(
                21,
                variables,
                ((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || queryDef
              );
            }
          }
          if (variables && !equal(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
          }
          this.queryInfo.resetLastWrite();
          return this.reobserve(reobserveOptions, NetworkStatus.refetch);
        };
        ObservableQuery2.prototype.fetchMore = function (fetchMoreOptions) {
          var _this = this;
          var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.options.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), {
            // The fetchMore request goes immediately to the network and does
            // not automatically write its result to the cache (hence no-cache
            // instead of network-only), because we allow the caller of
            // fetchMore to provide an updateQuery callback that determines how
            // the data gets written to the cache.
            fetchPolicy: "no-cache"
          });
          combinedOptions.query = this.transformDocument(combinedOptions.query);
          var qid = this.queryManager.generateQueryId();
          this.lastQuery = fetchMoreOptions.query ? this.transformDocument(this.options.query) : combinedOptions.query;
          var queryInfo = this.queryInfo;
          var originalNetworkStatus = queryInfo.networkStatus;
          queryInfo.networkStatus = NetworkStatus.fetchMore;
          if (combinedOptions.notifyOnNetworkStatusChange) {
            this.observe();
          }
          var updatedQuerySet = /* @__PURE__ */ new Set();
          var updateQuery = fetchMoreOptions === null || fetchMoreOptions === void 0 ? void 0 : fetchMoreOptions.updateQuery;
          var isCached = this.options.fetchPolicy !== "no-cache";
          if (!isCached) {
            invariant$1(updateQuery, 22);
          }
          return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            _this.queryManager.removeQuery(qid);
            if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
              queryInfo.networkStatus = originalNetworkStatus;
            }
            if (isCached) {
              _this.queryManager.cache.batch({
                update: function (cache2) {
                  var updateQuery2 = fetchMoreOptions.updateQuery;
                  if (updateQuery2) {
                    cache2.updateQuery({
                      query: _this.query,
                      variables: _this.variables,
                      returnPartialData: true,
                      optimistic: false
                    }, function (previous) {
                      return updateQuery2(previous, {
                        fetchMoreResult: fetchMoreResult.data,
                        variables: combinedOptions.variables
                      });
                    });
                  } else {
                    cache2.writeQuery({
                      query: combinedOptions.query,
                      variables: combinedOptions.variables,
                      data: fetchMoreResult.data
                    });
                  }
                },
                onWatchUpdated: function (watch) {
                  updatedQuerySet.add(watch.query);
                }
              });
            } else {
              var lastResult = _this.getLast("result");
              var data = updateQuery(lastResult.data, {
                fetchMoreResult: fetchMoreResult.data,
                variables: combinedOptions.variables
              });
              _this.reportResult(__assign(__assign({}, lastResult), { networkStatus: originalNetworkStatus, loading: isNetworkRequestInFlight(originalNetworkStatus), data }), _this.variables);
            }
            return _this.maskResult(fetchMoreResult);
          }).finally(function () {
            if (isCached && !updatedQuerySet.has(_this.query)) {
              _this.reobserveCacheFirst();
            }
          });
        };
        ObservableQuery2.prototype.subscribeToMore = function (options) {
          var _this = this;
          var subscription = this.queryManager.startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context
          }).subscribe({
            next: function (subscriptionData) {
              var updateQuery = options.updateQuery;
              if (updateQuery) {
                _this.updateQuery(function (previous, updateOptions) {
                  return updateQuery(previous, __assign({ subscriptionData }, updateOptions));
                });
              }
            },
            error: function (err) {
              if (options.onError) {
                options.onError(err);
                return;
              }
              globalThis.__DEV__ !== false && invariant$1.error(23, err);
            }
          });
          this.subscriptions.add(subscription);
          return function () {
            if (_this.subscriptions.delete(subscription)) {
              subscription.unsubscribe();
            }
          };
        };
        ObservableQuery2.prototype.setOptions = function (newOptions) {
          return this.reobserve(newOptions);
        };
        ObservableQuery2.prototype.silentSetOptions = function (newOptions) {
          var mergedOptions = compact(this.options, newOptions || {});
          assign(this.options, mergedOptions);
        };
        ObservableQuery2.prototype.setVariables = function (variables) {
          if (equal(this.variables, variables)) {
            return this.observers.size ? this.result() : Promise.resolve();
          }
          this.options.variables = variables;
          if (!this.observers.size) {
            return Promise.resolve();
          }
          return this.reobserve({
            // Reset options.fetchPolicy to its original value.
            fetchPolicy: this.options.initialFetchPolicy,
            variables
          }, NetworkStatus.setVariables);
        };
        ObservableQuery2.prototype.updateQuery = function (mapFn) {
          var queryManager = this.queryManager;
          var _a2 = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false
          }), result = _a2.result, complete = _a2.complete;
          var newResult = mapFn(result, {
            variables: this.variables,
            complete: !!complete,
            previousData: result
          });
          if (newResult) {
            queryManager.cache.writeQuery({
              query: this.options.query,
              data: newResult,
              variables: this.variables
            });
            queryManager.broadcastQueries();
          }
        };
        ObservableQuery2.prototype.startPolling = function (pollInterval) {
          this.options.pollInterval = pollInterval;
          this.updatePolling();
        };
        ObservableQuery2.prototype.stopPolling = function () {
          this.options.pollInterval = 0;
          this.updatePolling();
        };
        ObservableQuery2.prototype.applyNextFetchPolicy = function (reason, options) {
          if (options.nextFetchPolicy) {
            var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
            if (fetchPolicy === "standby");
            else if (typeof options.nextFetchPolicy === "function") {
              options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
                reason,
                options,
                observable: this,
                initialFetchPolicy
              });
            } else if (reason === "variables-changed") {
              options.fetchPolicy = initialFetchPolicy;
            } else {
              options.fetchPolicy = options.nextFetchPolicy;
            }
          }
          return options.fetchPolicy;
        };
        ObservableQuery2.prototype.fetch = function (options, newNetworkStatus, query) {
          var queryInfo = this.queryManager.getOrCreateQuery(this.queryId);
          queryInfo.setObservableQuery(this);
          return this.queryManager["fetchConcastWithInfo"](queryInfo, options, newNetworkStatus, query);
        };
        ObservableQuery2.prototype.updatePolling = function () {
          var _this = this;
          if (this.queryManager.ssrMode) {
            return;
          }
          var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
          if (!pollInterval || !this.hasObservers()) {
            if (pollingInfo) {
              clearTimeout(pollingInfo.timeout);
              delete this.pollingInfo;
            }
            return;
          }
          if (pollingInfo && pollingInfo.interval === pollInterval) {
            return;
          }
          invariant$1(pollInterval, 24);
          var info = pollingInfo || (this.pollingInfo = {});
          info.interval = pollInterval;
          var maybeFetch = function () {
            var _a3, _b;
            if (_this.pollingInfo) {
              if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus) && !((_b = (_a3 = _this.options).skipPollAttempt) === null || _b === void 0 ? void 0 : _b.call(_a3))) {
                _this.reobserve({
                  // Most fetchPolicy options don't make sense to use in a polling context, as
                  // users wouldn't want to be polling the cache directly. However, network-only and
                  // no-cache are both useful for when the user wants to control whether or not the
                  // polled results are written to the cache.
                  fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
                }, NetworkStatus.poll).then(poll, poll);
              } else {
                poll();
              }
            }
          };
          var poll = function () {
            var info2 = _this.pollingInfo;
            if (info2) {
              clearTimeout(info2.timeout);
              info2.timeout = setTimeout(maybeFetch, info2.interval);
            }
          };
          poll();
        };
        ObservableQuery2.prototype.updateLastResult = function (newResult, variables) {
          if (variables === void 0) {
            variables = this.variables;
          }
          var error = this.getLastError();
          if (error && this.last && !equal(variables, this.last.variables)) {
            error = void 0;
          }
          return this.last = __assign({ result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables }, error ? { error } : null);
        };
        ObservableQuery2.prototype.reobserveAsConcast = function (newOptions, newNetworkStatus) {
          var _this = this;
          this.isTornDown = false;
          var useDisposableConcast = (
            // Refetching uses a disposable Concast to allow refetches using different
            // options/variables, without permanently altering the options of the
            // original ObservableQuery.
            newNetworkStatus === NetworkStatus.refetch || // The fetchMore method does not actually call the reobserve method, but,
            // if it did, it would definitely use a disposable Concast.
            newNetworkStatus === NetworkStatus.fetchMore || // Polling uses a disposable Concast so the polling options (which force
            // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
            newNetworkStatus === NetworkStatus.poll
          );
          var oldVariables = this.options.variables;
          var oldFetchPolicy = this.options.fetchPolicy;
          var mergedOptions = compact(this.options, newOptions || {});
          var options = useDisposableConcast ? (
            // Disposable Concast fetches receive a shallow copy of this.options
            // (merged with newOptions), leaving this.options unmodified.
            mergedOptions
          ) : assign(this.options, mergedOptions);
          var query = this.transformDocument(options.query);
          this.lastQuery = query;
          if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && // Don't mess with the fetchPolicy if it's currently "standby".
              options.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
              // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
              (options.fetchPolicy === oldFetchPolicy || // A `nextFetchPolicy` function has even higher priority, though,
                // so in that case `applyNextFetchPolicy` must be called.
                typeof options.nextFetchPolicy === "function")) {
              this.applyNextFetchPolicy("variables-changed", options);
              if (newNetworkStatus === void 0) {
                newNetworkStatus = NetworkStatus.setVariables;
              }
            }
          }
          this.waitForOwnResult && (this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy));
          var finishWaitingForOwnResult = function () {
            if (_this.concast === concast) {
              _this.waitForOwnResult = false;
            }
          };
          var variables = options.variables && __assign({}, options.variables);
          var _a2 = this.fetch(options, newNetworkStatus, query), concast = _a2.concast, fromLink = _a2.fromLink;
          var observer = {
            next: function (result) {
              if (equal(_this.variables, variables)) {
                finishWaitingForOwnResult();
                _this.reportResult(result, variables);
              }
            },
            error: function (error) {
              if (equal(_this.variables, variables)) {
                if (!isApolloError(error)) {
                  error = new ApolloError({ networkError: error });
                }
                finishWaitingForOwnResult();
                _this.reportError(error, variables);
              }
            }
          };
          if (!useDisposableConcast && (fromLink || !this.concast)) {
            if (this.concast && this.observer) {
              this.concast.removeObserver(this.observer);
            }
            this.concast = concast;
            this.observer = observer;
          }
          concast.addObserver(observer);
          return concast;
        };
        ObservableQuery2.prototype.reobserve = function (newOptions, newNetworkStatus) {
          return preventUnhandledRejection(this.reobserveAsConcast(newOptions, newNetworkStatus).promise.then(this.maskResult));
        };
        ObservableQuery2.prototype.resubscribeAfterError = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var last = this.last;
          this.resetLastResults();
          var subscription = this.subscribe.apply(this, args);
          this.last = last;
          return subscription;
        };
        ObservableQuery2.prototype.observe = function () {
          this.reportResult(
            // Passing false is important so that this.getCurrentResult doesn't
            // save the fetchMore result as this.lastResult, causing it to be
            // ignored due to the this.isDifferentFromLastResult check in
            // this.reportResult.
            this.getCurrentFullResult(false),
            this.variables
          );
        };
        ObservableQuery2.prototype.reportResult = function (result, variables) {
          var lastError = this.getLastError();
          var isDifferent = this.isDifferentFromLastResult(result, variables);
          if (lastError || !result.partial || this.options.returnPartialData) {
            this.updateLastResult(result, variables);
          }
          if (lastError || isDifferent) {
            iterateObserversSafely(this.observers, "next", this.maskResult(result));
          }
        };
        ObservableQuery2.prototype.reportError = function (error, variables) {
          var errorResult = __assign(__assign({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
          this.updateLastResult(errorResult, variables);
          iterateObserversSafely(this.observers, "error", this.last.error = error);
        };
        ObservableQuery2.prototype.hasObservers = function () {
          return this.observers.size > 0;
        };
        ObservableQuery2.prototype.tearDownQuery = function () {
          if (this.isTornDown)
            return;
          if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
          }
          this.stopPolling();
          this.subscriptions.forEach(function (sub) {
            return sub.unsubscribe();
          });
          this.subscriptions.clear();
          this.queryManager.stopQuery(this.queryId);
          this.observers.clear();
          this.isTornDown = true;
        };
        ObservableQuery2.prototype.transformDocument = function (document2) {
          return this.queryManager.transform(document2);
        };
        ObservableQuery2.prototype.maskResult = function (result) {
          return result && "data" in result ? __assign(__assign({}, result), {
            data: this.queryManager.maskOperation({
              document: this.query,
              data: result.data,
              fetchPolicy: this.options.fetchPolicy,
              id: this.queryId
            })
          }) : result;
        };
        ObservableQuery2.prototype.resetNotifications = function () {
          this.cancelNotifyTimeout();
          this.dirty = false;
        };
        ObservableQuery2.prototype.cancelNotifyTimeout = function () {
          if (this.notifyTimeout) {
            clearTimeout(this.notifyTimeout);
            this.notifyTimeout = void 0;
          }
        };
        ObservableQuery2.prototype.scheduleNotify = function () {
          var _this = this;
          if (this.dirty)
            return;
          this.dirty = true;
          if (!this.notifyTimeout) {
            this.notifyTimeout = setTimeout(function () {
              return _this.notify();
            }, 0);
          }
        };
        ObservableQuery2.prototype.notify = function () {
          this.cancelNotifyTimeout();
          if (this.dirty) {
            if (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !isNetworkRequestInFlight(this.queryInfo.networkStatus)) {
              var diff = this.queryInfo.getDiff();
              if (diff.fromOptimisticTransaction) {
                this.observe();
              } else {
                this.reobserveCacheFirst();
              }
            }
          }
          this.dirty = false;
        };
        ObservableQuery2.prototype.reobserveCacheFirst = function () {
          var _a2 = this.options, fetchPolicy = _a2.fetchPolicy, nextFetchPolicy = _a2.nextFetchPolicy;
          if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
            return this.reobserve({
              fetchPolicy: "cache-first",
              // Use a temporary nextFetchPolicy function that replaces itself with the
              // previous nextFetchPolicy value and returns the original fetchPolicy.
              nextFetchPolicy: function (currentFetchPolicy, context) {
                this.nextFetchPolicy = nextFetchPolicy;
                if (typeof this.nextFetchPolicy === "function") {
                  return this.nextFetchPolicy(currentFetchPolicy, context);
                }
                return fetchPolicy;
              }
            });
          }
          return this.reobserve();
        };
        ObservableQuery2.inactiveOnCreation = new Slot();
        return ObservableQuery2;
      }(Observable)
    );
    fixObservableSubclass(ObservableQuery);
    function defaultSubscriptionObserverErrorCallback(error) {
      globalThis.__DEV__ !== false && invariant$1.error(25, error.message, error.stack);
    }
    function logMissingFieldErrors(missing) {
      if (globalThis.__DEV__ !== false && missing) {
        globalThis.__DEV__ !== false && invariant$1.debug(26, missing);
      }
    }
    function skipCacheDataFor(fetchPolicy) {
      return fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby";
    }
    var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
    function wrapDestructiveCacheMethod(cache2, methodName) {
      var original = cache2[methodName];
      if (typeof original === "function") {
        cache2[methodName] = function () {
          destructiveMethodCounts.set(
            cache2,
            // The %1e15 allows the count to wrap around to 0 safely every
            // quadrillion evictions, so there's no risk of overflow. To be
            // clear, this is more of a pedantic principle than something
            // that matters in any conceivable practical scenario.
            (destructiveMethodCounts.get(cache2) + 1) % 1e15
          );
          return original.apply(this, arguments);
        };
      }
    }
    var QueryInfo = (
      /** @class */
      function () {
        function QueryInfo2(queryManager, queryId) {
          if (queryId === void 0) {
            queryId = queryManager.generateQueryId();
          }
          this.queryId = queryId;
          this.document = null;
          this.lastRequestId = 1;
          this.stopped = false;
          this.observableQuery = null;
          var cache2 = this.cache = queryManager.cache;
          if (!destructiveMethodCounts.has(cache2)) {
            destructiveMethodCounts.set(cache2, 0);
            wrapDestructiveCacheMethod(cache2, "evict");
            wrapDestructiveCacheMethod(cache2, "modify");
            wrapDestructiveCacheMethod(cache2, "reset");
          }
        }
        QueryInfo2.prototype.init = function (query) {
          var networkStatus = query.networkStatus || NetworkStatus.loading;
          if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
            networkStatus = NetworkStatus.setVariables;
          }
          if (!equal(query.variables, this.variables)) {
            this.lastDiff = void 0;
            this.cancel();
          }
          Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus
          });
          if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
          }
          if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
          }
          return this;
        };
        QueryInfo2.prototype.resetDiff = function () {
          this.lastDiff = void 0;
        };
        QueryInfo2.prototype.getDiff = function () {
          var options = this.getDiffOptions();
          if (this.lastDiff && equal(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
          }
          this.updateWatch(this.variables);
          var oq = this.observableQuery;
          if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
          }
          var diff = this.cache.diff(options);
          this.updateLastDiff(diff, options);
          return diff;
        };
        QueryInfo2.prototype.updateLastDiff = function (diff, options) {
          this.lastDiff = diff ? {
            diff,
            options: options || this.getDiffOptions()
          } : void 0;
        };
        QueryInfo2.prototype.getDiffOptions = function (variables) {
          var _a2;
          if (variables === void 0) {
            variables = this.variables;
          }
          return {
            query: this.document,
            variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
          };
        };
        QueryInfo2.prototype.setDiff = function (diff) {
          var _a2, _b;
          var oldDiff = this.lastDiff && this.lastDiff.diff;
          if (diff && !diff.complete && ((_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.getLastError())) {
            return;
          }
          this.updateLastDiff(diff);
          if (!equal(oldDiff && oldDiff.result, diff && diff.result)) {
            (_b = this.observableQuery) === null || _b === void 0 ? void 0 : _b["scheduleNotify"]();
          }
        };
        QueryInfo2.prototype.setObservableQuery = function (oq) {
          if (oq === this.observableQuery)
            return;
          this.observableQuery = oq;
          if (oq) {
            oq["queryInfo"] = this;
          }
        };
        QueryInfo2.prototype.stop = function () {
          var _a2;
          if (!this.stopped) {
            this.stopped = true;
            (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["resetNotifications"]();
            this.cancel();
            var oq = this.observableQuery;
            if (oq)
              oq.stopPolling();
          }
        };
        QueryInfo2.prototype.cancel = function () {
          var _a2;
          (_a2 = this.cancelWatch) === null || _a2 === void 0 ? void 0 : _a2.call(this);
          this.cancelWatch = void 0;
        };
        QueryInfo2.prototype.updateWatch = function (variables) {
          var _this = this;
          if (variables === void 0) {
            variables = this.variables;
          }
          var oq = this.observableQuery;
          if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
          }
          var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), {
            watcher: this, callback: function (diff) {
              return _this.setDiff(diff);
            }
          });
          if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancelWatch = this.cache.watch(this.lastWatch = watchOptions);
          }
        };
        QueryInfo2.prototype.resetLastWrite = function () {
          this.lastWrite = void 0;
        };
        QueryInfo2.prototype.shouldWrite = function (result, variables) {
          var lastWrite = this.lastWrite;
          return !(lastWrite && // If cache.evict has been called since the last time we wrote this
            // data into the cache, there's a chance writing this result into
            // the cache will repair what was evicted.
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
        };
        QueryInfo2.prototype.markResult = function (result, document2, options, cacheWriteBehavior) {
          var _this = this;
          var _a2;
          var merger = new DeepMerger();
          var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
          (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["resetNotifications"]();
          if ("incremental" in result && isNonEmptyArray(result.incremental)) {
            var mergedData = mergeIncrementalData(this.getDiff().result, result);
            result.data = mergedData;
          } else if ("hasNext" in result && result.hasNext) {
            var diff = this.getDiff();
            result.data = merger.merge(diff.result, result.data);
          }
          this.graphQLErrors = graphQLErrors;
          if (options.fetchPolicy === "no-cache") {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
          } else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
              this.cache.performTransaction(function (cache2) {
                if (_this.shouldWrite(result, options.variables)) {
                  cache2.writeQuery({
                    query: document2,
                    data: result.data,
                    variables: options.variables,
                    overwrite: cacheWriteBehavior === 1
                  });
                  _this.lastWrite = {
                    result,
                    variables: options.variables,
                    dmCount: destructiveMethodCounts.get(_this.cache)
                  };
                } else {
                  if (_this.lastDiff && _this.lastDiff.diff.complete) {
                    result.data = _this.lastDiff.diff.result;
                    return;
                  }
                }
                var diffOptions = _this.getDiffOptions(options.variables);
                var diff2 = cache2.diff(diffOptions);
                if (!_this.stopped && equal(_this.variables, options.variables)) {
                  _this.updateWatch(options.variables);
                }
                _this.updateLastDiff(diff2, diffOptions);
                if (diff2.complete) {
                  result.data = diff2.result;
                }
              });
            } else {
              this.lastWrite = void 0;
            }
          }
        };
        QueryInfo2.prototype.markReady = function () {
          this.networkError = null;
          return this.networkStatus = NetworkStatus.ready;
        };
        QueryInfo2.prototype.markError = function (error) {
          var _a2;
          this.networkStatus = NetworkStatus.error;
          this.lastWrite = void 0;
          (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["resetNotifications"]();
          if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
          }
          if (error.networkError) {
            this.networkError = error.networkError;
          }
          return error;
        };
        return QueryInfo2;
      }()
    );
    function shouldWriteResult(result, errorPolicy) {
      if (errorPolicy === void 0) {
        errorPolicy = "none";
      }
      var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
      var writeWithErrors = !graphQLResultHasError(result);
      if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
      }
      return writeWithErrors;
    }
    var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
    var IGNORE = /* @__PURE__ */ Object.create(null);
    var QueryManager = (
      /** @class */
      function () {
        function QueryManager2(options) {
          var _this = this;
          this.clientAwareness = {};
          this.queries = /* @__PURE__ */ new Map();
          this.fetchCancelFns = /* @__PURE__ */ new Map();
          this.transformCache = new AutoCleanedWeakCache(
            cacheSizes["queryManager.getDocumentInfo"] || 2e3
            /* defaultCacheSizes["queryManager.getDocumentInfo"] */
          );
          this.queryIdCounter = 1;
          this.requestIdCounter = 1;
          this.mutationIdCounter = 1;
          this.inFlightLinkObservables = new Trie(false);
          this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
          var defaultDocumentTransform = new DocumentTransform(
            function (document2) {
              return _this.cache.transformDocument(document2);
            },
            // Allow the apollo cache to manage its own transform caches
            { cache: false }
          );
          this.cache = options.cache;
          this.link = options.link;
          this.defaultOptions = options.defaultOptions;
          this.queryDeduplication = options.queryDeduplication;
          this.clientAwareness = options.clientAwareness;
          this.localState = options.localState;
          this.ssrMode = options.ssrMode;
          this.assumeImmutableResults = options.assumeImmutableResults;
          this.dataMasking = options.dataMasking;
          var documentTransform = options.documentTransform;
          this.documentTransform = documentTransform ? defaultDocumentTransform.concat(documentTransform).concat(defaultDocumentTransform) : defaultDocumentTransform;
          this.defaultContext = options.defaultContext || /* @__PURE__ */ Object.create(null);
          if (this.onBroadcast = options.onBroadcast) {
            this.mutationStore = /* @__PURE__ */ Object.create(null);
          }
        }
        QueryManager2.prototype.stop = function () {
          var _this = this;
          this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
          });
          this.cancelPendingFetches(newInvariantError(27));
        };
        QueryManager2.prototype.cancelPendingFetches = function (error) {
          this.fetchCancelFns.forEach(function (cancel) {
            return cancel(error);
          });
          this.fetchCancelFns.clear();
        };
        QueryManager2.prototype.mutate = function (_a2) {
          return __awaiter(this, arguments, void 0, function (_b) {
            var mutationId, hasClientExports2, mutationStoreValue, isOptimistic, self2;
            var _c, _d;
            var mutation = _b.mutation, variables = _b.variables, optimisticResponse = _b.optimisticResponse, updateQueries = _b.updateQueries, _e = _b.refetchQueries, refetchQueries = _e === void 0 ? [] : _e, _f = _b.awaitRefetchQueries, awaitRefetchQueries = _f === void 0 ? false : _f, updateWithProxyFn = _b.update, onQueryUpdated = _b.onQueryUpdated, _g = _b.fetchPolicy, fetchPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.fetchPolicy) || "network-only" : _g, _h = _b.errorPolicy, errorPolicy = _h === void 0 ? ((_d = this.defaultOptions.mutate) === null || _d === void 0 ? void 0 : _d.errorPolicy) || "none" : _h, keepRootFields = _b.keepRootFields, context = _b.context;
            return __generator(this, function (_j) {
              switch (_j.label) {
                case 0:
                  invariant$1(mutation, 28);
                  invariant$1(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 29);
                  mutationId = this.generateMutationId();
                  mutation = this.cache.transformForLink(this.transform(mutation));
                  hasClientExports2 = this.getDocumentInfo(mutation).hasClientExports;
                  variables = this.getVariables(mutation, variables);
                  if (!hasClientExports2) return [3, 2];
                  return [4, this.localState.addExportedVariables(mutation, variables, context)];
                case 1:
                  variables = _j.sent();
                  _j.label = 2;
                case 2:
                  mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
                    mutation,
                    variables,
                    loading: true,
                    error: null
                  });
                  isOptimistic = optimisticResponse && this.markMutationOptimistic(optimisticResponse, {
                    mutationId,
                    document: mutation,
                    variables,
                    fetchPolicy,
                    errorPolicy,
                    context,
                    updateQueries,
                    update: updateWithProxyFn,
                    keepRootFields
                  });
                  this.broadcastQueries();
                  self2 = this;
                  return [2, new Promise(function (resolve, reject) {
                    return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse: isOptimistic ? optimisticResponse : void 0 }), variables, {}, false), function (result) {
                      if (graphQLResultHasError(result) && errorPolicy === "none") {
                        throw new ApolloError({
                          graphQLErrors: getGraphQLErrorsFromResult(result)
                        });
                      }
                      if (mutationStoreValue) {
                        mutationStoreValue.loading = false;
                        mutationStoreValue.error = null;
                      }
                      var storeResult = __assign({}, result);
                      if (typeof refetchQueries === "function") {
                        refetchQueries = refetchQueries(storeResult);
                      }
                      if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                        delete storeResult.errors;
                      }
                      return self2.markMutationResult({
                        mutationId,
                        result: storeResult,
                        document: mutation,
                        variables,
                        fetchPolicy,
                        errorPolicy,
                        context,
                        update: updateWithProxyFn,
                        updateQueries,
                        awaitRefetchQueries,
                        refetchQueries,
                        removeOptimistic: isOptimistic ? mutationId : void 0,
                        onQueryUpdated,
                        keepRootFields
                      });
                    }).subscribe({
                      next: function (storeResult) {
                        self2.broadcastQueries();
                        if (!("hasNext" in storeResult) || storeResult.hasNext === false) {
                          resolve(__assign(__assign({}, storeResult), {
                            data: self2.maskOperation({
                              document: mutation,
                              data: storeResult.data,
                              fetchPolicy,
                              id: mutationId
                            })
                          }));
                        }
                      },
                      error: function (err) {
                        if (mutationStoreValue) {
                          mutationStoreValue.loading = false;
                          mutationStoreValue.error = err;
                        }
                        if (isOptimistic) {
                          self2.cache.removeOptimistic(mutationId);
                        }
                        self2.broadcastQueries();
                        reject(err instanceof ApolloError ? err : new ApolloError({
                          networkError: err
                        }));
                      }
                    });
                  })];
              }
            });
          });
        };
        QueryManager2.prototype.markMutationResult = function (mutation, cache2) {
          var _this = this;
          if (cache2 === void 0) {
            cache2 = this.cache;
          }
          var result = mutation.result;
          var cacheWrites = [];
          var skipCache = mutation.fetchPolicy === "no-cache";
          if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            if (!isExecutionPatchIncrementalResult(result)) {
              cacheWrites.push({
                result: result.data,
                dataId: "ROOT_MUTATION",
                query: mutation.document,
                variables: mutation.variables
              });
            }
            if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
              var diff = cache2.diff({
                id: "ROOT_MUTATION",
                // The cache complains if passed a mutation where it expects a
                // query, so we transform mutations and subscriptions to queries
                // (only once, thanks to this.transformCache).
                query: this.getDocumentInfo(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });
              var mergedData = void 0;
              if (diff.result) {
                mergedData = mergeIncrementalData(diff.result, result);
              }
              if (typeof mergedData !== "undefined") {
                result.data = mergedData;
                cacheWrites.push({
                  result: mergedData,
                  dataId: "ROOT_MUTATION",
                  query: mutation.document,
                  variables: mutation.variables
                });
              }
            }
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
              this.queries.forEach(function (_a2, queryId) {
                var observableQuery = _a2.observableQuery;
                var queryName = observableQuery && observableQuery.queryName;
                if (!queryName || !hasOwnProperty$1.call(updateQueries_1, queryName)) {
                  return;
                }
                var updater = updateQueries_1[queryName];
                var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
                var _c = cache2.diff({
                  query: document2,
                  variables,
                  returnPartialData: true,
                  optimistic: false
                }), currentQueryResult = _c.result, complete = _c.complete;
                if (complete && currentQueryResult) {
                  var nextQueryResult = updater(currentQueryResult, {
                    mutationResult: result,
                    queryName: document2 && getOperationName(document2) || void 0,
                    queryVariables: variables
                  });
                  if (nextQueryResult) {
                    cacheWrites.push({
                      result: nextQueryResult,
                      dataId: "ROOT_QUERY",
                      query: document2,
                      variables
                    });
                  }
                }
              });
            }
          }
          if (cacheWrites.length > 0 || (mutation.refetchQueries || "").length > 0 || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
              updateCache: function (cache3) {
                if (!skipCache) {
                  cacheWrites.forEach(function (write) {
                    return cache3.write(write);
                  });
                }
                var update = mutation.update;
                var isFinalResult = !isExecutionPatchResult(result) || isExecutionPatchIncrementalResult(result) && !result.hasNext;
                if (update) {
                  if (!skipCache) {
                    var diff2 = cache3.diff({
                      id: "ROOT_MUTATION",
                      // The cache complains if passed a mutation where it expects a
                      // query, so we transform mutations and subscriptions to queries
                      // (only once, thanks to this.transformCache).
                      query: _this.getDocumentInfo(mutation.document).asQuery,
                      variables: mutation.variables,
                      optimistic: false,
                      returnPartialData: true
                    });
                    if (diff2.complete) {
                      result = __assign(__assign({}, result), { data: diff2.result });
                      if ("incremental" in result) {
                        delete result.incremental;
                      }
                      if ("hasNext" in result) {
                        delete result.hasNext;
                      }
                    }
                  }
                  if (isFinalResult) {
                    update(cache3, result, {
                      context: mutation.context,
                      variables: mutation.variables
                    });
                  }
                }
                if (!skipCache && !mutation.keepRootFields && isFinalResult) {
                  cache3.modify({
                    id: "ROOT_MUTATION",
                    fields: function (value, _a2) {
                      var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                      return fieldName === "__typename" ? value : DELETE2;
                    }
                  });
                }
              },
              include: mutation.refetchQueries,
              // Write the final mutation.result to the root layer of the cache.
              optimistic: false,
              // Remove the corresponding optimistic layer at the same time as we
              // write the final non-optimistic result.
              removeOptimistic: mutation.removeOptimistic,
              // Let the caller of client.mutate optionally determine the refetching
              // behavior for watched queries after the mutation.update function runs.
              // If no onQueryUpdated function was provided for this mutation, pass
              // null instead of undefined to disable the default refetching behavior.
              onQueryUpdated: mutation.onQueryUpdated || null
            }).forEach(function (result2) {
              return results_1.push(result2);
            });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
              return Promise.all(results_1).then(function () {
                return result;
              });
            }
          }
          return Promise.resolve(result);
        };
        QueryManager2.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
          var _this = this;
          var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables, { IGNORE }) : optimisticResponse;
          if (data === IGNORE) {
            return false;
          }
          this.cache.recordOptimisticTransaction(function (cache2) {
            try {
              _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache2);
            } catch (error) {
              globalThis.__DEV__ !== false && invariant$1.error(error);
            }
          }, mutation.mutationId);
          return true;
        };
        QueryManager2.prototype.fetchQuery = function (queryId, options, networkStatus) {
          return this.fetchConcastWithInfo(this.getOrCreateQuery(queryId), options, networkStatus).concast.promise;
        };
        QueryManager2.prototype.getQueryStore = function () {
          var store = /* @__PURE__ */ Object.create(null);
          this.queries.forEach(function (info, queryId) {
            store[queryId] = {
              variables: info.variables,
              networkStatus: info.networkStatus,
              networkError: info.networkError,
              graphQLErrors: info.graphQLErrors
            };
          });
          return store;
        };
        QueryManager2.prototype.resetErrors = function (queryId) {
          var queryInfo = this.queries.get(queryId);
          if (queryInfo) {
            queryInfo.networkError = void 0;
            queryInfo.graphQLErrors = [];
          }
        };
        QueryManager2.prototype.transform = function (document2) {
          return this.documentTransform.transformDocument(document2);
        };
        QueryManager2.prototype.getDocumentInfo = function (document2) {
          var transformCache = this.transformCache;
          if (!transformCache.has(document2)) {
            var cacheEntry = {
              // TODO These three calls (hasClientExports, shouldForceResolvers, and
              // usesNonreactiveDirective) are performing independent full traversals
              // of the transformed document. We should consider merging these
              // traversals into a single pass in the future, though the work is
              // cached after the first time.
              hasClientExports: hasClientExports(document2),
              hasForcedResolvers: this.localState.shouldForceResolvers(document2),
              hasNonreactiveDirective: hasDirectives(["nonreactive"], document2),
              nonReactiveQuery: addNonReactiveToNamedFragments(document2),
              clientQuery: this.localState.clientQuery(document2),
              serverQuery: removeDirectivesFromDocument([
                { name: "client", remove: true },
                { name: "connection" },
                { name: "nonreactive" },
                { name: "unmask" }
              ], document2),
              defaultVars: getDefaultValues(getOperationDefinition(document2)),
              // Transform any mutation or subscription operations to query operations
              // so we can read/write them from/to the cache.
              asQuery: __assign(__assign({}, document2), {
                definitions: document2.definitions.map(function (def) {
                  if (def.kind === "OperationDefinition" && def.operation !== "query") {
                    return __assign(__assign({}, def), { operation: "query" });
                  }
                  return def;
                })
              })
            };
            transformCache.set(document2, cacheEntry);
          }
          return transformCache.get(document2);
        };
        QueryManager2.prototype.getVariables = function (document2, variables) {
          return __assign(__assign({}, this.getDocumentInfo(document2).defaultVars), variables);
        };
        QueryManager2.prototype.watchQuery = function (options) {
          var query = this.transform(options.query);
          options = __assign(__assign({}, options), { variables: this.getVariables(query, options.variables) });
          if (typeof options.notifyOnNetworkStatusChange === "undefined") {
            options.notifyOnNetworkStatusChange = false;
          }
          var queryInfo = new QueryInfo(this);
          var observable = new ObservableQuery({
            queryManager: this,
            queryInfo,
            options
          });
          observable["lastQuery"] = query;
          if (!ObservableQuery["inactiveOnCreation"].getValue()) {
            this.queries.set(observable.queryId, queryInfo);
          }
          queryInfo.init({
            document: query,
            observableQuery: observable,
            variables: observable.variables
          });
          return observable;
        };
        QueryManager2.prototype.query = function (options, queryId) {
          var _this = this;
          if (queryId === void 0) {
            queryId = this.generateQueryId();
          }
          invariant$1(options.query, 30);
          invariant$1(options.query.kind === "Document", 31);
          invariant$1(!options.returnPartialData, 32);
          invariant$1(!options.pollInterval, 33);
          var query = this.transform(options.query);
          return this.fetchQuery(queryId, __assign(__assign({}, options), { query })).then(function (result) {
            return result && __assign(__assign({}, result), {
              data: _this.maskOperation({
                document: query,
                data: result.data,
                fetchPolicy: options.fetchPolicy,
                id: queryId
              })
            });
          }).finally(function () {
            return _this.stopQuery(queryId);
          });
        };
        QueryManager2.prototype.generateQueryId = function () {
          return String(this.queryIdCounter++);
        };
        QueryManager2.prototype.generateRequestId = function () {
          return this.requestIdCounter++;
        };
        QueryManager2.prototype.generateMutationId = function () {
          return String(this.mutationIdCounter++);
        };
        QueryManager2.prototype.stopQueryInStore = function (queryId) {
          this.stopQueryInStoreNoBroadcast(queryId);
          this.broadcastQueries();
        };
        QueryManager2.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
          var queryInfo = this.queries.get(queryId);
          if (queryInfo)
            queryInfo.stop();
        };
        QueryManager2.prototype.clearStore = function (options) {
          if (options === void 0) {
            options = {
              discardWatches: true
            };
          }
          this.cancelPendingFetches(newInvariantError(34));
          this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
              queryInfo.networkStatus = NetworkStatus.loading;
            } else {
              queryInfo.stop();
            }
          });
          if (this.mutationStore) {
            this.mutationStore = /* @__PURE__ */ Object.create(null);
          }
          return this.cache.reset(options);
        };
        QueryManager2.prototype.getObservableQueries = function (include) {
          var _this = this;
          if (include === void 0) {
            include = "active";
          }
          var queries = /* @__PURE__ */ new Map();
          var queryNames = /* @__PURE__ */ new Map();
          var queryNamesAndQueryStrings = /* @__PURE__ */ new Map();
          var legacyQueryOptions = /* @__PURE__ */ new Set();
          if (Array.isArray(include)) {
            include.forEach(function (desc) {
              if (typeof desc === "string") {
                queryNames.set(desc, desc);
                queryNamesAndQueryStrings.set(desc, false);
              } else if (isDocumentNode(desc)) {
                var queryString = print(_this.transform(desc));
                queryNames.set(queryString, getOperationName(desc));
                queryNamesAndQueryStrings.set(queryString, false);
              } else if (isNonNullObject(desc) && desc.query) {
                legacyQueryOptions.add(desc);
              }
            });
          }
          this.queries.forEach(function (_a2, queryId) {
            var oq = _a2.observableQuery, document2 = _a2.document;
            if (oq) {
              if (include === "all") {
                queries.set(queryId, oq);
                return;
              }
              var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
              if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
                return;
              }
              if (include === "active" || queryName && queryNamesAndQueryStrings.has(queryName) || document2 && queryNamesAndQueryStrings.has(print(document2))) {
                queries.set(queryId, oq);
                if (queryName)
                  queryNamesAndQueryStrings.set(queryName, true);
                if (document2)
                  queryNamesAndQueryStrings.set(print(document2), true);
              }
            }
          });
          if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
              var queryId = makeUniqueId("legacyOneTimeQuery");
              var queryInfo = _this.getOrCreateQuery(queryId).init({
                document: options.query,
                variables: options.variables
              });
              var oq = new ObservableQuery({
                queryManager: _this,
                queryInfo,
                options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
              });
              invariant$1(oq.queryId === queryId);
              queryInfo.setObservableQuery(oq);
              queries.set(queryId, oq);
            });
          }
          if (globalThis.__DEV__ !== false && queryNamesAndQueryStrings.size) {
            queryNamesAndQueryStrings.forEach(function (included, nameOrQueryString) {
              if (!included) {
                var queryName = queryNames.get(nameOrQueryString);
                if (queryName) {
                  globalThis.__DEV__ !== false && invariant$1.warn(35, queryName);
                } else {
                  globalThis.__DEV__ !== false && invariant$1.warn(36);
                }
              }
            });
          }
          return queries;
        };
        QueryManager2.prototype.reFetchObservableQueries = function (includeStandby) {
          var _this = this;
          if (includeStandby === void 0) {
            includeStandby = false;
          }
          var observableQueryPromises = [];
          this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
              observableQueryPromises.push(observableQuery.refetch());
            }
            (_this.queries.get(queryId) || observableQuery["queryInfo"]).setDiff(null);
          });
          this.broadcastQueries();
          return Promise.all(observableQueryPromises);
        };
        QueryManager2.prototype.startGraphQLSubscription = function (options) {
          var _this = this;
          var query = options.query, variables = options.variables;
          var fetchPolicy = options.fetchPolicy, _a2 = options.errorPolicy, errorPolicy = _a2 === void 0 ? "none" : _a2, _b = options.context, context = _b === void 0 ? {} : _b, _c = options.extensions, extensions = _c === void 0 ? {} : _c;
          query = this.transform(query);
          variables = this.getVariables(query, variables);
          var makeObservable = function (variables2) {
            return _this.getObservableFromLink(query, context, variables2, extensions).map(function (result) {
              if (fetchPolicy !== "no-cache") {
                if (shouldWriteResult(result, errorPolicy)) {
                  _this.cache.write({
                    query,
                    result: result.data,
                    dataId: "ROOT_SUBSCRIPTION",
                    variables: variables2
                  });
                }
                _this.broadcastQueries();
              }
              var hasErrors = graphQLResultHasError(result);
              var hasProtocolErrors = graphQLResultHasProtocolErrors(result);
              if (hasErrors || hasProtocolErrors) {
                var errors = {};
                if (hasErrors) {
                  errors.graphQLErrors = result.errors;
                }
                if (hasProtocolErrors) {
                  errors.protocolErrors = result.extensions[PROTOCOL_ERRORS_SYMBOL];
                }
                if (errorPolicy === "none" || hasProtocolErrors) {
                  throw new ApolloError(errors);
                }
              }
              if (errorPolicy === "ignore") {
                delete result.errors;
              }
              return result;
            });
          };
          if (this.getDocumentInfo(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new Observable(function (observer) {
              var sub = null;
              observablePromise_1.then(function (observable) {
                return sub = observable.subscribe(observer);
              }, observer.error);
              return function () {
                return sub && sub.unsubscribe();
              };
            });
          }
          return makeObservable(variables);
        };
        QueryManager2.prototype.stopQuery = function (queryId) {
          this.stopQueryNoBroadcast(queryId);
          this.broadcastQueries();
        };
        QueryManager2.prototype.stopQueryNoBroadcast = function (queryId) {
          this.stopQueryInStoreNoBroadcast(queryId);
          this.removeQuery(queryId);
        };
        QueryManager2.prototype.removeQuery = function (queryId) {
          var _a2;
          this.fetchCancelFns.delete(queryId);
          if (this.queries.has(queryId)) {
            (_a2 = this.queries.get(queryId)) === null || _a2 === void 0 ? void 0 : _a2.stop();
            this.queries.delete(queryId);
          }
        };
        QueryManager2.prototype.broadcastQueries = function () {
          if (this.onBroadcast)
            this.onBroadcast();
          this.queries.forEach(function (info) {
            var _a2;
            return (_a2 = info.observableQuery) === null || _a2 === void 0 ? void 0 : _a2["notify"]();
          });
        };
        QueryManager2.prototype.getLocalState = function () {
          return this.localState;
        };
        QueryManager2.prototype.getObservableFromLink = function (query, context, variables, extensions, deduplication) {
          var _this = this;
          var _a2;
          if (deduplication === void 0) {
            deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
          }
          var observable;
          var _b = this.getDocumentInfo(query), serverQuery = _b.serverQuery, clientQuery = _b.clientQuery;
          if (serverQuery) {
            var _c = this, inFlightLinkObservables_1 = _c.inFlightLinkObservables, link = _c.link;
            var operation = {
              query: serverQuery,
              variables,
              operationName: getOperationName(serverQuery) || void 0,
              context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication })),
              extensions
            };
            context = operation.context;
            if (deduplication) {
              var printedServerQuery_1 = print(serverQuery);
              var varJson_1 = canonicalStringify(variables);
              var entry = inFlightLinkObservables_1.lookup(printedServerQuery_1, varJson_1);
              observable = entry.observable;
              if (!observable) {
                var concast_1 = new Concast([
                  execute(link, operation)
                ]);
                observable = entry.observable = concast_1;
                concast_1.beforeNext(function cb2(method, arg) {
                  if (method === "next" && "hasNext" in arg && arg.hasNext) {
                    concast_1.beforeNext(cb2);
                  } else {
                    inFlightLinkObservables_1.remove(printedServerQuery_1, varJson_1);
                  }
                });
              }
            } else {
              observable = new Concast([
                execute(link, operation)
              ]);
            }
          } else {
            observable = new Concast([Observable.of({ data: {} })]);
            context = this.prepareContext(context);
          }
          if (clientQuery) {
            observable = asyncMap(observable, function (result) {
              return _this.localState.runResolvers({
                document: clientQuery,
                remoteResult: result,
                context,
                variables
              });
            });
          }
          return observable;
        };
        QueryManager2.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
          var requestId = queryInfo.lastRequestId = this.generateRequestId();
          var linkDocument = this.cache.transformForLink(options.query);
          return asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function (result) {
            var graphQLErrors = getGraphQLErrorsFromResult(result);
            var hasErrors = graphQLErrors.length > 0;
            var errorPolicy = options.errorPolicy;
            if (requestId >= queryInfo.lastRequestId) {
              if (hasErrors && errorPolicy === "none") {
                throw queryInfo.markError(new ApolloError({
                  graphQLErrors
                }));
              }
              queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
              queryInfo.markReady();
            }
            var aqr = {
              data: result.data,
              loading: false,
              networkStatus: NetworkStatus.ready
            };
            if (hasErrors && errorPolicy === "none") {
              aqr.data = void 0;
            }
            if (hasErrors && errorPolicy !== "ignore") {
              aqr.errors = graphQLErrors;
              aqr.networkStatus = NetworkStatus.error;
            }
            return aqr;
          }, function (networkError) {
            var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
            if (requestId >= queryInfo.lastRequestId) {
              queryInfo.markError(error);
            }
            throw error;
          });
        };
        QueryManager2.prototype.fetchConcastWithInfo = function (queryInfo, options, networkStatus, query) {
          var _this = this;
          if (networkStatus === void 0) {
            networkStatus = NetworkStatus.loading;
          }
          if (query === void 0) {
            query = options.query;
          }
          var variables = this.getVariables(query, options.variables);
          var defaults = this.defaultOptions.watchQuery;
          var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
          var normalized = Object.assign({}, options, {
            query,
            variables,
            fetchPolicy,
            errorPolicy,
            returnPartialData,
            notifyOnNetworkStatusChange,
            context
          });
          var fromVariables = function (variables2) {
            normalized.variables = variables2;
            var sourcesWithInfo2 = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
            if (
              // If we're in standby, postpone advancing options.fetchPolicy using
              // applyNextFetchPolicy.
              normalized.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
              // this is another way to detect when nothing was done/fetched.
              sourcesWithInfo2.sources.length > 0 && queryInfo.observableQuery
            ) {
              queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
            }
            return sourcesWithInfo2;
          };
          var cleanupCancelFn = function () {
            return _this.fetchCancelFns.delete(queryInfo.queryId);
          };
          this.fetchCancelFns.set(queryInfo.queryId, function (reason) {
            cleanupCancelFn();
            setTimeout(function () {
              return concast.cancel(reason);
            });
          });
          var concast, containsDataFromLink;
          if (this.getDocumentInfo(normalized.query).hasClientExports) {
            concast = new Concast(this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables).then(function (sourcesWithInfo2) {
              return sourcesWithInfo2.sources;
            }));
            containsDataFromLink = true;
          } else {
            var sourcesWithInfo = fromVariables(normalized.variables);
            containsDataFromLink = sourcesWithInfo.fromLink;
            concast = new Concast(sourcesWithInfo.sources);
          }
          concast.promise.then(cleanupCancelFn, cleanupCancelFn);
          return {
            concast,
            fromLink: containsDataFromLink
          };
        };
        QueryManager2.prototype.refetchQueries = function (_a2) {
          var _this = this;
          var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
          var includedQueriesById = /* @__PURE__ */ new Map();
          if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
              includedQueriesById.set(queryId, {
                oq,
                lastDiff: (_this.queries.get(queryId) || oq["queryInfo"]).getDiff()
              });
            });
          }
          var results = /* @__PURE__ */ new Map();
          if (updateCache) {
            this.cache.batch({
              update: updateCache,
              // Since you can perform any combination of cache reads and/or writes in
              // the cache.batch update function, its optimistic option can be either
              // a boolean or a string, representing three distinct modes of
              // operation:
              //
              // * false: read/write only the root layer
              // * true: read/write the topmost layer
              // * string: read/write a fresh optimistic layer with that ID string
              //
              // When typeof optimistic === "string", a new optimistic layer will be
              // temporarily created within cache.batch with that string as its ID. If
              // we then pass that same string as the removeOptimistic option, we can
              // make cache.batch immediately remove the optimistic layer after
              // running the updateCache function, triggering only one broadcast.
              //
              // However, the refetchQueries method accepts only true or false for its
              // optimistic option (not string). We interpret true to mean a temporary
              // optimistic layer should be created, to allow efficiently rolling back
              // the effect of the updateCache function, which involves passing a
              // string instead of true as the optimistic option to cache.batch, when
              // refetchQueries receives optimistic: true.
              //
              // In other words, we are deliberately not supporting the use case of
              // writing to an *existing* optimistic layer (using the refetchQueries
              // updateCache function), since that would potentially interfere with
              // other optimistic updates in progress. Instead, you can read/write
              // only the root layer by passing optimistic: false to refetchQueries,
              // or you can read/write a brand new optimistic layer that will be
              // automatically removed by passing optimistic: true.
              optimistic: optimistic && removeOptimistic || false,
              // The removeOptimistic option can also be provided by itself, even if
              // optimistic === false, to remove some previously-added optimistic
              // layer safely and efficiently, like we do in markMutationResult.
              //
              // If an explicit removeOptimistic string is provided with optimistic:
              // true, the removeOptimistic string will determine the ID of the
              // temporary optimistic layer, in case that ever matters.
              removeOptimistic,
              onWatchUpdated: function (watch, diff, lastDiff) {
                var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
                if (oq) {
                  if (onQueryUpdated) {
                    includedQueriesById.delete(oq.queryId);
                    var result = onQueryUpdated(oq, diff, lastDiff);
                    if (result === true) {
                      result = oq.refetch();
                    }
                    if (result !== false) {
                      results.set(oq, result);
                    }
                    return result;
                  }
                  if (onQueryUpdated !== null) {
                    includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
                  }
                }
              }
            });
          }
          if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a3, queryId) {
              var oq = _a3.oq, lastDiff = _a3.lastDiff, diff = _a3.diff;
              var result;
              if (onQueryUpdated) {
                if (!diff) {
                  diff = _this.cache.diff(oq["queryInfo"]["getDiffOptions"]());
                }
                result = onQueryUpdated(oq, diff, lastDiff);
              }
              if (!onQueryUpdated || result === true) {
                result = oq.refetch();
              }
              if (result !== false) {
                results.set(oq, result);
              }
              if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                _this.stopQueryNoBroadcast(queryId);
              }
            });
          }
          if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
          }
          return results;
        };
        QueryManager2.prototype.maskOperation = function (options) {
          var _a2, _b, _c;
          var document2 = options.document, data = options.data;
          if (globalThis.__DEV__ !== false) {
            var fetchPolicy = options.fetchPolicy, id2 = options.id;
            var operationType = (_a2 = getOperationDefinition(document2)) === null || _a2 === void 0 ? void 0 : _a2.operation;
            var operationId = ((_b = operationType === null || operationType === void 0 ? void 0 : operationType[0]) !== null && _b !== void 0 ? _b : "o") + id2;
            if (this.dataMasking && fetchPolicy === "no-cache" && !isFullyUnmaskedOperation(document2) && !this.noCacheWarningsByQueryId.has(operationId)) {
              this.noCacheWarningsByQueryId.add(operationId);
              globalThis.__DEV__ !== false && invariant$1.warn(
                37,
                (_c = getOperationName(document2)) !== null && _c !== void 0 ? _c : "Unnamed ".concat(operationType !== null && operationType !== void 0 ? operationType : "operation")
              );
            }
          }
          return this.dataMasking ? maskOperation(data, document2, this.cache) : data;
        };
        QueryManager2.prototype.maskFragment = function (options) {
          var data = options.data, fragment = options.fragment, fragmentName = options.fragmentName;
          return this.dataMasking ? maskFragment(data, fragment, this.cache, fragmentName) : data;
        };
        QueryManager2.prototype.fetchQueryByPolicy = function (queryInfo, _a2, networkStatus) {
          var _this = this;
          var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
          var oldNetworkStatus = queryInfo.networkStatus;
          queryInfo.init({
            document: query,
            variables,
            networkStatus
          });
          var readCache = function () {
            return queryInfo.getDiff();
          };
          var resultsFromCache = function (diff2, networkStatus2) {
            if (networkStatus2 === void 0) {
              networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
            }
            var data = diff2.result;
            if (globalThis.__DEV__ !== false && !returnPartialData && !equal(data, {})) {
              logMissingFieldErrors(diff2.missing);
            }
            var fromData = function (data2) {
              return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
            };
            if (data && _this.getDocumentInfo(query).hasForcedResolvers) {
              return _this.localState.runResolvers({
                document: query,
                remoteResult: { data },
                context,
                variables,
                onlyRunForcedResolvers: true
              }).then(function (resolved) {
                return fromData(resolved.data || void 0);
              });
            }
            if (errorPolicy === "none" && networkStatus2 === NetworkStatus.refetch && Array.isArray(diff2.missing)) {
              return fromData(void 0);
            }
            return fromData(data);
          };
          var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
          var resultsFromLink = function () {
            return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
              query,
              variables,
              context,
              fetchPolicy,
              errorPolicy
            });
          };
          var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
          switch (fetchPolicy) {
            default:
            case "cache-first": {
              var diff = readCache();
              if (diff.complete) {
                return {
                  fromLink: false,
                  sources: [resultsFromCache(diff, queryInfo.markReady())]
                };
              }
              if (returnPartialData || shouldNotify) {
                return {
                  fromLink: true,
                  sources: [resultsFromCache(diff), resultsFromLink()]
                };
              }
              return { fromLink: true, sources: [resultsFromLink()] };
            }
            case "cache-and-network": {
              var diff = readCache();
              if (diff.complete || returnPartialData || shouldNotify) {
                return {
                  fromLink: true,
                  sources: [resultsFromCache(diff), resultsFromLink()]
                };
              }
              return { fromLink: true, sources: [resultsFromLink()] };
            }
            case "cache-only":
              return {
                fromLink: false,
                sources: [resultsFromCache(readCache(), queryInfo.markReady())]
              };
            case "network-only":
              if (shouldNotify) {
                return {
                  fromLink: true,
                  sources: [resultsFromCache(readCache()), resultsFromLink()]
                };
              }
              return { fromLink: true, sources: [resultsFromLink()] };
            case "no-cache":
              if (shouldNotify) {
                return {
                  fromLink: true,
                  // Note that queryInfo.getDiff() for no-cache queries does not call
                  // cache.diff, but instead returns a { complete: false } stub result
                  // when there is no queryInfo.diff already defined.
                  sources: [resultsFromCache(queryInfo.getDiff()), resultsFromLink()]
                };
              }
              return { fromLink: true, sources: [resultsFromLink()] };
            case "standby":
              return { fromLink: false, sources: [] };
          }
        };
        QueryManager2.prototype.getOrCreateQuery = function (queryId) {
          if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new QueryInfo(this, queryId));
          }
          return this.queries.get(queryId);
        };
        QueryManager2.prototype.prepareContext = function (context) {
          if (context === void 0) {
            context = {};
          }
          var newContext = this.localState.prepareContext(context);
          return __assign(__assign(__assign({}, this.defaultContext), newContext), { clientAwareness: this.clientAwareness });
        };
        return QueryManager2;
      }()
    );
    var LocalState = (
      /** @class */
      function () {
        function LocalState2(_a2) {
          var cache2 = _a2.cache, client = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
          this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap();
          this.cache = cache2;
          if (client) {
            this.client = client;
          }
          if (resolvers) {
            this.addResolvers(resolvers);
          }
          if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
          }
        }
        LocalState2.prototype.addResolvers = function (resolvers) {
          var _this = this;
          this.resolvers = this.resolvers || {};
          if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
              _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
            });
          } else {
            this.resolvers = mergeDeep(this.resolvers, resolvers);
          }
        };
        LocalState2.prototype.setResolvers = function (resolvers) {
          this.resolvers = {};
          this.addResolvers(resolvers);
        };
        LocalState2.prototype.getResolvers = function () {
          return this.resolvers || {};
        };
        LocalState2.prototype.runResolvers = function (_a2) {
          return __awaiter(this, arguments, void 0, function (_b) {
            var document2 = _b.document, remoteResult = _b.remoteResult, context = _b.context, variables = _b.variables, _c = _b.onlyRunForcedResolvers, onlyRunForcedResolvers = _c === void 0 ? false : _c;
            return __generator(this, function (_d) {
              if (document2) {
                return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) {
                  return __assign(__assign({}, remoteResult), { data: localResult.result });
                })];
              }
              return [2, remoteResult];
            });
          });
        };
        LocalState2.prototype.setFragmentMatcher = function (fragmentMatcher) {
          this.fragmentMatcher = fragmentMatcher;
        };
        LocalState2.prototype.getFragmentMatcher = function () {
          return this.fragmentMatcher;
        };
        LocalState2.prototype.clientQuery = function (document2) {
          if (hasDirectives(["client"], document2)) {
            if (this.resolvers) {
              return document2;
            }
          }
          return null;
        };
        LocalState2.prototype.serverQuery = function (document2) {
          return removeClientSetsFromDocument(document2);
        };
        LocalState2.prototype.prepareContext = function (context) {
          var cache2 = this.cache;
          return __assign(__assign({}, context), {
            cache: cache2,
            // Getting an entry's cache key is useful for local state resolvers.
            getCacheKey: function (obj) {
              return cache2.identify(obj);
            }
          });
        };
        LocalState2.prototype.addExportedVariables = function (document_1) {
          return __awaiter(this, arguments, void 0, function (document2, variables, context) {
            if (variables === void 0) {
              variables = {};
            }
            if (context === void 0) {
              context = {};
            }
            return __generator(this, function (_a2) {
              if (document2) {
                return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function (data) {
                  return __assign(__assign({}, variables), data.exportedVariables);
                })];
              }
              return [2, __assign({}, variables)];
            });
          });
        };
        LocalState2.prototype.shouldForceResolvers = function (document2) {
          var forceResolvers = false;
          visit(document2, {
            Directive: {
              enter: function (node) {
                if (node.name.value === "client" && node.arguments) {
                  forceResolvers = node.arguments.some(function (arg) {
                    return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
                  });
                  if (forceResolvers) {
                    return BREAK;
                  }
                }
              }
            }
          });
          return forceResolvers;
        };
        LocalState2.prototype.buildRootValueFromCache = function (document2, variables) {
          return this.cache.diff({
            query: buildQueryFromSelectionSet(document2),
            variables,
            returnPartialData: true,
            optimistic: false
          }).result;
        };
        LocalState2.prototype.resolveDocument = function (document_1, rootValue_1) {
          return __awaiter(this, arguments, void 0, function (document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
            var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a2, cache2, client, execContext, isClientFieldDescendant;
            if (context === void 0) {
              context = {};
            }
            if (variables === void 0) {
              variables = {};
            }
            if (fragmentMatcher === void 0) {
              fragmentMatcher = function () {
                return true;
              };
            }
            if (onlyRunForcedResolvers === void 0) {
              onlyRunForcedResolvers = false;
            }
            return __generator(this, function (_b) {
              mainDefinition = getMainDefinition(document2);
              fragments = getFragmentDefinitions(document2);
              fragmentMap = createFragmentMap(fragments);
              selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
              definitionOperation = mainDefinition.operation;
              defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
              _a2 = this, cache2 = _a2.cache, client = _a2.client;
              execContext = {
                fragmentMap,
                context: __assign(__assign({}, context), { cache: cache2, client }),
                variables,
                fragmentMatcher,
                defaultOperationType,
                exportedVariables: {},
                selectionsToResolve,
                onlyRunForcedResolvers
              };
              isClientFieldDescendant = false;
              return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (result) {
                return {
                  result,
                  exportedVariables: execContext.exportedVariables
                };
              })];
            });
          });
        };
        LocalState2.prototype.resolveSelectionSet = function (selectionSet, isClientFieldDescendant, rootValue, execContext) {
          return __awaiter(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute2;
            var _this = this;
            return __generator(this, function (_a2) {
              fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
              resultsToMerge = [rootValue];
              execute2 = function (selection) {
                return __awaiter(_this, void 0, void 0, function () {
                  var fragment, typeCondition;
                  return __generator(this, function (_a3) {
                    if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    if (!shouldInclude(selection, variables)) {
                      return [
                        2
                        /*return*/
                      ];
                    }
                    if (isField(selection)) {
                      return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function (fieldResult) {
                        var _a4;
                        if (typeof fieldResult !== "undefined") {
                          resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                        }
                      })];
                    }
                    if (isInlineFragment(selection)) {
                      fragment = selection;
                    } else {
                      fragment = fragmentMap[selection.name.value];
                      invariant$1(fragment, 19, selection.name.value);
                    }
                    if (fragment && fragment.typeCondition) {
                      typeCondition = fragment.typeCondition.name.value;
                      if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                        return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (fragmentResult) {
                          resultsToMerge.push(fragmentResult);
                        })];
                      }
                    }
                    return [
                      2
                      /*return*/
                    ];
                  });
                });
              };
              return [2, Promise.all(selectionSet.selections.map(execute2)).then(function () {
                return mergeDeepArray(resultsToMerge);
              })];
            });
          });
        };
        LocalState2.prototype.resolveField = function (field, isClientFieldDescendant, rootValue, execContext) {
          return __awaiter(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return __generator(this, function (_a2) {
              if (!rootValue) {
                return [2, null];
              }
              variables = execContext.variables;
              fieldName = field.name.value;
              aliasedFieldName = resultKeyNameFromField(field);
              aliasUsed = fieldName !== aliasedFieldName;
              defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
              resultPromise = Promise.resolve(defaultResult);
              if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
                resolverType = rootValue.__typename || execContext.defaultOperationType;
                resolverMap = this.resolvers && this.resolvers[resolverType];
                if (resolverMap) {
                  resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                  if (resolve) {
                    resultPromise = Promise.resolve(
                      // In case the resolve function accesses reactive variables,
                      // set cacheSlot to the current cache instance.
                      cacheSlot.withValue(this.cache, resolve, [
                        rootValue,
                        argumentsObjectFromField(field, variables),
                        execContext.context,
                        { field, fragmentMap: execContext.fragmentMap }
                      ])
                    );
                  }
                }
              }
              return [2, resultPromise.then(function (result) {
                var _a3, _b;
                if (result === void 0) {
                  result = defaultResult;
                }
                if (field.directives) {
                  field.directives.forEach(function (directive) {
                    if (directive.name.value === "export" && directive.arguments) {
                      directive.arguments.forEach(function (arg) {
                        if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                          execContext.exportedVariables[arg.value.value] = result;
                        }
                      });
                    }
                  });
                }
                if (!field.selectionSet) {
                  return result;
                }
                if (result == null) {
                  return result;
                }
                var isClientField = (_b = (_a3 = field.directives) === null || _a3 === void 0 ? void 0 : _a3.some(function (d) {
                  return d.name.value === "client";
                })) !== null && _b !== void 0 ? _b : false;
                if (Array.isArray(result)) {
                  return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result, execContext);
                }
                if (field.selectionSet) {
                  return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result, execContext);
                }
              })];
            });
          });
        };
        LocalState2.prototype.resolveSubSelectedArray = function (field, isClientFieldDescendant, result, execContext) {
          var _this = this;
          return Promise.all(result.map(function (item) {
            if (item === null) {
              return null;
            }
            if (Array.isArray(item)) {
              return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
            }
            if (field.selectionSet) {
              return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
            }
          }));
        };
        LocalState2.prototype.collectSelectionsToResolve = function (mainDefinition, fragmentMap) {
          var isSingleASTNode = function (node) {
            return !Array.isArray(node);
          };
          var selectionsToResolveCache = this.selectionsToResolveCache;
          function collectByDefinition(definitionNode) {
            if (!selectionsToResolveCache.has(definitionNode)) {
              var matches_1 = /* @__PURE__ */ new Set();
              selectionsToResolveCache.set(definitionNode, matches_1);
              visit(definitionNode, {
                Directive: function (node, _, __, ___, ancestors) {
                  if (node.name.value === "client") {
                    ancestors.forEach(function (node2) {
                      if (isSingleASTNode(node2) && isSelectionNode(node2)) {
                        matches_1.add(node2);
                      }
                    });
                  }
                },
                FragmentSpread: function (spread, _, __, ___, ancestors) {
                  var fragment = fragmentMap[spread.name.value];
                  invariant$1(fragment, 20, spread.name.value);
                  var fragmentSelections = collectByDefinition(fragment);
                  if (fragmentSelections.size > 0) {
                    ancestors.forEach(function (node) {
                      if (isSingleASTNode(node) && isSelectionNode(node)) {
                        matches_1.add(node);
                      }
                    });
                    matches_1.add(spread);
                    fragmentSelections.forEach(function (selection) {
                      matches_1.add(selection);
                    });
                  }
                }
              });
            }
            return selectionsToResolveCache.get(definitionNode);
          }
          return collectByDefinition(mainDefinition);
        };
        return LocalState2;
      }()
    );
    var hasSuggestedDevtools = false;
    var ApolloClient = (
      /** @class */
      function () {
        function ApolloClient2(options) {
          var _this = this;
          var _a2;
          this.resetStoreCallbacks = [];
          this.clearStoreCallbacks = [];
          if (!options.cache) {
            throw newInvariantError(16);
          }
          var uri = options.uri, credentials = options.credentials, headers = options.headers, cache2 = options.cache, documentTransform = options.documentTransform, _b = options.ssrMode, ssrMode = _b === void 0 ? false : _b, _c = options.ssrForceFetchDelay, ssrForceFetchDelay = _c === void 0 ? 0 : _c, connectToDevTools = options.connectToDevTools, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, defaultContext = options.defaultContext, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? cache2.assumeImmutableResults : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version, devtools = options.devtools, dataMasking = options.dataMasking;
          var link = options.link;
          if (!link) {
            link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
          }
          this.link = link;
          this.cache = cache2;
          this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
          this.queryDeduplication = queryDeduplication;
          this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
          this.typeDefs = typeDefs;
          this.devtoolsConfig = __assign(__assign({}, devtools), { enabled: (_a2 = devtools === null || devtools === void 0 ? void 0 : devtools.enabled) !== null && _a2 !== void 0 ? _a2 : connectToDevTools });
          if (this.devtoolsConfig.enabled === void 0) {
            this.devtoolsConfig.enabled = globalThis.__DEV__ !== false;
          }
          if (ssrForceFetchDelay) {
            setTimeout(function () {
              return _this.disableNetworkFetches = false;
            }, ssrForceFetchDelay);
          }
          this.watchQuery = this.watchQuery.bind(this);
          this.query = this.query.bind(this);
          this.mutate = this.mutate.bind(this);
          this.watchFragment = this.watchFragment.bind(this);
          this.resetStore = this.resetStore.bind(this);
          this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
          this.version = version;
          this.localState = new LocalState({
            cache: cache2,
            client: this,
            resolvers,
            fragmentMatcher
          });
          this.queryManager = new QueryManager({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            defaultContext,
            documentTransform,
            queryDeduplication,
            ssrMode,
            dataMasking: !!dataMasking,
            clientAwareness: {
              name: clientAwarenessName,
              version: clientAwarenessVersion
            },
            localState: this.localState,
            assumeImmutableResults,
            onBroadcast: this.devtoolsConfig.enabled ? function () {
              if (_this.devToolsHookCb) {
                _this.devToolsHookCb({
                  action: {},
                  state: {
                    queries: _this.queryManager.getQueryStore(),
                    mutations: _this.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: _this.cache.extract(true)
                });
              }
            } : void 0
          });
          if (this.devtoolsConfig.enabled)
            this.connectToDevTools();
        }
        ApolloClient2.prototype.connectToDevTools = function () {
          if (typeof window === "undefined") {
            return;
          }
          var windowWithDevTools = window;
          var devtoolsSymbol = Symbol.for("apollo.devtools");
          (windowWithDevTools[devtoolsSymbol] = windowWithDevTools[devtoolsSymbol] || []).push(this);
          windowWithDevTools.__APOLLO_CLIENT__ = this;
          if (!hasSuggestedDevtools && globalThis.__DEV__ !== false) {
            hasSuggestedDevtools = true;
            if (window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol)) {
              setTimeout(function () {
                if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                  var nav = window.navigator;
                  var ua2 = nav && nav.userAgent;
                  var url = void 0;
                  if (typeof ua2 === "string") {
                    if (ua2.indexOf("Chrome/") > -1) {
                      url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    } else if (ua2.indexOf("Firefox/") > -1) {
                      url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                  }
                  if (url) {
                    globalThis.__DEV__ !== false && invariant$1.log("Download the Apollo DevTools for a better development experience: %s", url);
                  }
                }
              }, 1e4);
            }
          }
        };
        Object.defineProperty(ApolloClient2.prototype, "documentTransform", {
          /**
           * The `DocumentTransform` used to modify GraphQL documents before a request
           * is made. If a custom `DocumentTransform` is not provided, this will be the
           * default document transform.
           */
          get: function () {
            return this.queryManager.documentTransform;
          },
          enumerable: false,
          configurable: true
        });
        ApolloClient2.prototype.stop = function () {
          this.queryManager.stop();
        };
        ApolloClient2.prototype.watchQuery = function (options) {
          if (this.defaultOptions.watchQuery) {
            options = mergeOptions(this.defaultOptions.watchQuery, options);
          }
          if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
            options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
          }
          return this.queryManager.watchQuery(options);
        };
        ApolloClient2.prototype.query = function (options) {
          if (this.defaultOptions.query) {
            options = mergeOptions(this.defaultOptions.query, options);
          }
          invariant$1(options.fetchPolicy !== "cache-and-network", 17);
          if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
            options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
          }
          return this.queryManager.query(options);
        };
        ApolloClient2.prototype.mutate = function (options) {
          if (this.defaultOptions.mutate) {
            options = mergeOptions(this.defaultOptions.mutate, options);
          }
          return this.queryManager.mutate(options);
        };
        ApolloClient2.prototype.subscribe = function (options) {
          var _this = this;
          var id2 = this.queryManager.generateQueryId();
          return this.queryManager.startGraphQLSubscription(options).map(function (result) {
            return __assign(__assign({}, result), {
              data: _this.queryManager.maskOperation({
                document: options.query,
                data: result.data,
                fetchPolicy: options.fetchPolicy,
                id: id2
              })
            });
          });
        };
        ApolloClient2.prototype.readQuery = function (options, optimistic) {
          if (optimistic === void 0) {
            optimistic = false;
          }
          return this.cache.readQuery(options, optimistic);
        };
        ApolloClient2.prototype.watchFragment = function (options) {
          var _a2;
          return this.cache.watchFragment(__assign(__assign({}, options), (_a2 = {}, _a2[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, _a2)));
        };
        ApolloClient2.prototype.readFragment = function (options, optimistic) {
          if (optimistic === void 0) {
            optimistic = false;
          }
          return this.cache.readFragment(options, optimistic);
        };
        ApolloClient2.prototype.writeQuery = function (options) {
          var ref = this.cache.writeQuery(options);
          if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
          }
          return ref;
        };
        ApolloClient2.prototype.writeFragment = function (options) {
          var ref = this.cache.writeFragment(options);
          if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
          }
          return ref;
        };
        ApolloClient2.prototype.__actionHookForDevTools = function (cb2) {
          this.devToolsHookCb = cb2;
        };
        ApolloClient2.prototype.__requestRaw = function (payload) {
          return execute(this.link, payload);
        };
        ApolloClient2.prototype.resetStore = function () {
          var _this = this;
          return Promise.resolve().then(function () {
            return _this.queryManager.clearStore({
              discardWatches: false
            });
          }).then(function () {
            return Promise.all(_this.resetStoreCallbacks.map(function (fn) {
              return fn();
            }));
          }).then(function () {
            return _this.reFetchObservableQueries();
          });
        };
        ApolloClient2.prototype.clearStore = function () {
          var _this = this;
          return Promise.resolve().then(function () {
            return _this.queryManager.clearStore({
              discardWatches: true
            });
          }).then(function () {
            return Promise.all(_this.clearStoreCallbacks.map(function (fn) {
              return fn();
            }));
          });
        };
        ApolloClient2.prototype.onResetStore = function (cb2) {
          var _this = this;
          this.resetStoreCallbacks.push(cb2);
          return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) {
              return c !== cb2;
            });
          };
        };
        ApolloClient2.prototype.onClearStore = function (cb2) {
          var _this = this;
          this.clearStoreCallbacks.push(cb2);
          return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) {
              return c !== cb2;
            });
          };
        };
        ApolloClient2.prototype.reFetchObservableQueries = function (includeStandby) {
          return this.queryManager.reFetchObservableQueries(includeStandby);
        };
        ApolloClient2.prototype.refetchQueries = function (options) {
          var map = this.queryManager.refetchQueries(options);
          var queries = [];
          var results = [];
          map.forEach(function (result2, obsQuery) {
            queries.push(obsQuery);
            results.push(result2);
          });
          var result = Promise.all(results);
          result.queries = queries;
          result.results = results;
          result.catch(function (error) {
            globalThis.__DEV__ !== false && invariant$1.debug(18, error);
          });
          return result;
        };
        ApolloClient2.prototype.getObservableQueries = function (include) {
          if (include === void 0) {
            include = "active";
          }
          return this.queryManager.getObservableQueries(include);
        };
        ApolloClient2.prototype.extract = function (optimistic) {
          return this.cache.extract(optimistic);
        };
        ApolloClient2.prototype.restore = function (serializedState) {
          return this.cache.restore(serializedState);
        };
        ApolloClient2.prototype.addResolvers = function (resolvers) {
          this.localState.addResolvers(resolvers);
        };
        ApolloClient2.prototype.setResolvers = function (resolvers) {
          this.localState.setResolvers(resolvers);
        };
        ApolloClient2.prototype.getResolvers = function () {
          return this.localState.getResolvers();
        };
        ApolloClient2.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
          this.localState.setFragmentMatcher(fragmentMatcher);
        };
        ApolloClient2.prototype.setLink = function (newLink) {
          this.link = this.queryManager.link = newLink;
        };
        Object.defineProperty(ApolloClient2.prototype, "defaultContext", {
          get: function () {
            return this.queryManager.defaultContext;
          },
          enumerable: false,
          configurable: true
        });
        return ApolloClient2;
      }()
    );
    if (globalThis.__DEV__ !== false) {
      ApolloClient.prototype.getMemoryInternals = getApolloClientMemoryInternals;
    }
    var docCache = /* @__PURE__ */ new Map();
    var fragmentSourceMap = /* @__PURE__ */ new Map();
    var printFragmentWarnings = true;
    var experimentalFragmentVariables = false;
    function normalize(string) {
      return string.replace(/[\s,]+/g, " ").trim();
    }
    function cacheKeyFromLoc(loc) {
      return normalize(loc.source.body.substring(loc.start, loc.end));
    }
    function processFragments(ast) {
      var seenKeys = /* @__PURE__ */ new Set();
      var definitions = [];
      ast.definitions.forEach(function (fragmentDefinition) {
        if (fragmentDefinition.kind === "FragmentDefinition") {
          var fragmentName = fragmentDefinition.name.value;
          var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
          var sourceKeySet = fragmentSourceMap.get(fragmentName);
          if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
            if (printFragmentWarnings) {
              console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
            }
          } else if (!sourceKeySet) {
            fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
          }
          sourceKeySet.add(sourceKey);
          if (!seenKeys.has(sourceKey)) {
            seenKeys.add(sourceKey);
            definitions.push(fragmentDefinition);
          }
        } else {
          definitions.push(fragmentDefinition);
        }
      });
      return __assign(__assign({}, ast), { definitions });
    }
    function stripLoc(doc) {
      var workSet = new Set(doc.definitions);
      workSet.forEach(function (node) {
        if (node.loc)
          delete node.loc;
        Object.keys(node).forEach(function (key) {
          var value = node[key];
          if (value && typeof value === "object") {
            workSet.add(value);
          }
        });
      });
      var loc = doc.loc;
      if (loc) {
        delete loc.startToken;
        delete loc.endToken;
      }
      return doc;
    }
    function parseDocument(source) {
      var cacheKey = normalize(source);
      if (!docCache.has(cacheKey)) {
        var parsed = parse(source, {
          experimentalFragmentVariables,
          allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== "Document") {
          throw new Error("Not a valid GraphQL document.");
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
      }
      return docCache.get(cacheKey);
    }
    function gql(literals) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      if (typeof literals === "string") {
        literals = [literals];
      }
      var result = literals[0];
      args.forEach(function (arg, i) {
        if (arg && arg.kind === "Document") {
          result += arg.loc.source.body;
        } else {
          result += arg;
        }
        result += literals[i + 1];
      });
      return parseDocument(result);
    }
    function resetCaches() {
      docCache.clear();
      fragmentSourceMap.clear();
    }
    function disableFragmentWarnings() {
      printFragmentWarnings = false;
    }
    function enableExperimentalFragmentVariables() {
      experimentalFragmentVariables = true;
    }
    function disableExperimentalFragmentVariables() {
      experimentalFragmentVariables = false;
    }
    var extras = {
      gql,
      resetCaches,
      disableFragmentWarnings,
      enableExperimentalFragmentVariables,
      disableExperimentalFragmentVariables
    };
    (function (gql_1) {
      gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
    })(gql || (gql = {}));
    gql["default"] = gql;
    var rehackt = { exports: {} };
    (function (module2) {
      module2.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0;
      module2.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0;
      module2.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0;
      Object.assign(module2.exports, reactExports);
    })(rehackt);
    var rehacktExports = rehackt.exports;
    const index = /* @__PURE__ */ getDefaultExportFromCjs(rehacktExports);
    const React = /* @__PURE__ */ _mergeNamespaces({
      __proto__: null,
      default: index
    }, [rehacktExports]);
    var contextKey = canUseSymbol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
    function getApolloContext() {
      invariant$1("createContext" in React, 54);
      var context = rehacktExports.createContext[contextKey];
      if (!context) {
        Object.defineProperty(rehacktExports.createContext, contextKey, {
          value: context = rehacktExports.createContext({}),
          enumerable: false,
          writable: false,
          configurable: true
        });
        context.displayName = "ApolloContext";
      }
      return context;
    }
    var ApolloProvider = function (_a2) {
      var client = _a2.client, children = _a2.children;
      var ApolloContext = getApolloContext();
      var parentContext = rehacktExports.useContext(ApolloContext);
      var context = rehacktExports.useMemo(function () {
        return __assign(__assign({}, parentContext), { client: client || parentContext.client });
      }, [parentContext, client]);
      invariant$1(context.client, 55);
      return rehacktExports.createElement(ApolloContext.Provider, { value: context }, children);
    };
    function useApolloClient(override) {
      var context = rehacktExports.useContext(getApolloContext());
      var client = override || context.client;
      invariant$1(!!client, 58);
      return client;
    }
    var didWarnUncachedGetSnapshot = false;
    var uSESKey = "useSyncExternalStore";
    var realHook = React[uSESKey];
    var useSyncExternalStore = realHook || function (subscribe, getSnapshot, getServerSnapshot) {
      var value = getSnapshot();
      if (
        // DEVIATION: Using __DEV__
        globalThis.__DEV__ !== false && !didWarnUncachedGetSnapshot && // DEVIATION: Not using Object.is because we know our snapshots will never
        // be exotic primitive values like NaN, which is !== itself.
        value !== getSnapshot()
      ) {
        didWarnUncachedGetSnapshot = true;
        globalThis.__DEV__ !== false && invariant$1.error(68);
      }
      var _a2 = rehacktExports.useState({
        inst: { value, getSnapshot }
      }), inst = _a2[0].inst, forceUpdate = _a2[1];
      if (canUseLayoutEffect) {
        rehacktExports.useLayoutEffect(function () {
          Object.assign(inst, { value, getSnapshot });
          if (checkIfSnapshotChanged(inst)) {
            forceUpdate({ inst });
          }
        }, [subscribe, value, getSnapshot]);
      } else {
        Object.assign(inst, { value, getSnapshot });
      }
      rehacktExports.useEffect(function () {
        if (checkIfSnapshotChanged(inst)) {
          forceUpdate({ inst });
        }
        return subscribe(function handleStoreChange() {
          if (checkIfSnapshotChanged(inst)) {
            forceUpdate({ inst });
          }
        });
      }, [subscribe]);
      return value;
    };
    function checkIfSnapshotChanged(_a2) {
      var value = _a2.value, getSnapshot = _a2.getSnapshot;
      try {
        return value !== getSnapshot();
      } catch (_b) {
        return true;
      }
    }
    var DocumentType;
    (function (DocumentType2) {
      DocumentType2[DocumentType2["Query"] = 0] = "Query";
      DocumentType2[DocumentType2["Mutation"] = 1] = "Mutation";
      DocumentType2[DocumentType2["Subscription"] = 2] = "Subscription";
    })(DocumentType || (DocumentType = {}));
    var cache;
    function operationName(type) {
      var name;
      switch (type) {
        case DocumentType.Query:
          name = "Query";
          break;
        case DocumentType.Mutation:
          name = "Mutation";
          break;
        case DocumentType.Subscription:
          name = "Subscription";
          break;
      }
      return name;
    }
    function parser(document2) {
      if (!cache) {
        cache = new AutoCleanedWeakCache(
          cacheSizes.parser || 1e3
          /* defaultCacheSizes.parser */
        );
      }
      var cached = cache.get(document2);
      if (cached)
        return cached;
      var variables, type, name;
      invariant$1(!!document2 && !!document2.kind, 70, document2);
      var fragments = [];
      var queries = [];
      var mutations = [];
      var subscriptions = [];
      for (var _i = 0, _a2 = document2.definitions; _i < _a2.length; _i++) {
        var x2 = _a2[_i];
        if (x2.kind === "FragmentDefinition") {
          fragments.push(x2);
          continue;
        }
        if (x2.kind === "OperationDefinition") {
          switch (x2.operation) {
            case "query":
              queries.push(x2);
              break;
            case "mutation":
              mutations.push(x2);
              break;
            case "subscription":
              subscriptions.push(x2);
              break;
          }
        }
      }
      invariant$1(!fragments.length || queries.length || mutations.length || subscriptions.length, 71);
      invariant$1(
        queries.length + mutations.length + subscriptions.length <= 1,
        72,
        document2,
        queries.length,
        subscriptions.length,
        mutations.length
      );
      type = queries.length ? DocumentType.Query : DocumentType.Mutation;
      if (!queries.length && !mutations.length)
        type = DocumentType.Subscription;
      var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
      invariant$1(definitions.length === 1, 73, document2, definitions.length);
      var definition = definitions[0];
      variables = definition.variableDefinitions || [];
      if (definition.name && definition.name.kind === "Name") {
        name = definition.name.value;
      } else {
        name = "data";
      }
      var payload = { name, type, variables };
      cache.set(document2, payload);
      return payload;
    }
    parser.resetCache = function () {
      cache = void 0;
    };
    if (globalThis.__DEV__ !== false) {
      registerGlobalCache("parser", function () {
        return cache ? cache.size : 0;
      });
    }
    function verifyDocumentType(document2, type) {
      var operation = parser(document2);
      var requiredOperationName = operationName(type);
      var usedOperationName = operationName(operation.type);
      invariant$1(
        operation.type === type,
        74,
        requiredOperationName,
        requiredOperationName,
        usedOperationName
      );
    }
    var wrapperSymbol = Symbol.for("apollo.hook.wrappers");
    function wrapHook(hookName, useHook, clientOrObsQuery) {
      var queryManager = clientOrObsQuery["queryManager"];
      var wrappers = queryManager && queryManager[wrapperSymbol];
      var wrapper = wrappers && wrappers[hookName];
      return wrapper ? wrapper(useHook) : useHook;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function noop() {
    }
    var lastWatchOptions = Symbol();
    function useQuery(query, options) {
      if (options === void 0) {
        options = /* @__PURE__ */ Object.create(null);
      }
      return wrapHook(
        "useQuery",
        // eslint-disable-next-line react-compiler/react-compiler
        useQuery_,
        useApolloClient(options && options.client)
      )(query, options);
    }
    function useQuery_(query, options) {
      var _a2 = useQueryInternals(query, options), result = _a2.result, obsQueryFields = _a2.obsQueryFields;
      return rehacktExports.useMemo(function () {
        return __assign(__assign({}, result), obsQueryFields);
      }, [result, obsQueryFields]);
    }
    function useInternalState(client, query, options, renderPromises, makeWatchQueryOptions) {
      function createInternalState(previous) {
        var _a3;
        verifyDocumentType(query, DocumentType.Query);
        var internalState2 = {
          client,
          query,
          observable: (
            // See if there is an existing observable that was used to fetch the same
            // data and if so, use it instead since it will contain the proper queryId
            // to fetch the result set. This is used during SSR.
            renderPromises && renderPromises.getSSRObservable(makeWatchQueryOptions()) || ObservableQuery["inactiveOnCreation"].withValue(!renderPromises, function () {
              return client.watchQuery(getObsQueryOptions(void 0, client, options, makeWatchQueryOptions()));
            })
          ),
          resultData: {
            // Reuse previousData from previous InternalState (if any) to provide
            // continuity of previousData even if/when the query or client changes.
            previousData: (_a3 = previous === null || previous === void 0 ? void 0 : previous.resultData.current) === null || _a3 === void 0 ? void 0 : _a3.data
          }
        };
        return internalState2;
      }
      var _a2 = rehacktExports.useState(createInternalState), internalState = _a2[0], updateInternalState = _a2[1];
      function onQueryExecuted(watchQueryOptions) {
        var _a3;
        var _b;
        Object.assign(internalState.observable, (_a3 = {}, _a3[lastWatchOptions] = watchQueryOptions, _a3));
        var resultData = internalState.resultData;
        updateInternalState(__assign(__assign({}, internalState), {
          // might be a different query
          query: watchQueryOptions.query,
          resultData: Object.assign(resultData, {
            // We need to modify the previous `resultData` object as we rely on the
            // object reference in other places
            previousData: ((_b = resultData.current) === null || _b === void 0 ? void 0 : _b.data) || resultData.previousData,
            current: void 0
          })
        }));
      }
      if (client !== internalState.client || query !== internalState.query) {
        var newInternalState = createInternalState(internalState);
        updateInternalState(newInternalState);
        return [newInternalState, onQueryExecuted];
      }
      return [internalState, onQueryExecuted];
    }
    function useQueryInternals(query, options) {
      var client = useApolloClient(options.client);
      var renderPromises = rehacktExports.useContext(getApolloContext()).renderPromises;
      var isSyncSSR = !!renderPromises;
      var disableNetworkFetches = client.disableNetworkFetches;
      var ssrAllowed = options.ssr !== false && !options.skip;
      var partialRefetch = options.partialRefetch;
      var makeWatchQueryOptions = createMakeWatchQueryOptions(client, query, options, isSyncSSR);
      var _a2 = useInternalState(client, query, options, renderPromises, makeWatchQueryOptions), _b = _a2[0], observable = _b.observable, resultData = _b.resultData, onQueryExecuted = _a2[1];
      var watchQueryOptions = makeWatchQueryOptions(observable);
      useResubscribeIfNecessary(
        resultData,
        // might get mutated during render
        observable,
        // might get mutated during render
        client,
        options,
        watchQueryOptions
      );
      var obsQueryFields = rehacktExports.useMemo(function () {
        return bindObservableMethods(observable);
      }, [observable]);
      useRegisterSSRObservable(observable, renderPromises, ssrAllowed);
      var result = useObservableSubscriptionResult(resultData, observable, client, options, watchQueryOptions, disableNetworkFetches, partialRefetch, isSyncSSR, {
        onCompleted: options.onCompleted || noop,
        onError: options.onError || noop
      });
      return {
        result,
        obsQueryFields,
        observable,
        resultData,
        client,
        onQueryExecuted
      };
    }
    function useObservableSubscriptionResult(resultData, observable, client, options, watchQueryOptions, disableNetworkFetches, partialRefetch, isSyncSSR, callbacks) {
      var callbackRef = rehacktExports.useRef(callbacks);
      rehacktExports.useEffect(function () {
        callbackRef.current = callbacks;
      });
      var resultOverride = (isSyncSSR || disableNetworkFetches) && options.ssr === false && !options.skip ? (
        // If SSR has been explicitly disabled, and this function has been called
        // on the server side, return the default loading state.
        ssrDisabledResult
      ) : options.skip || watchQueryOptions.fetchPolicy === "standby" ? (
        // When skipping a query (ie. we're not querying for data but still want to
        // render children), make sure the `data` is cleared out and `loading` is
        // set to `false` (since we aren't loading anything).
        //
        // NOTE: We no longer think this is the correct behavior. Skipping should
        // not automatically set `data` to `undefined`, but instead leave the
        // previous data in place. In other words, skipping should not mandate that
        // previously received data is all of a sudden removed. Unfortunately,
        // changing this is breaking, so we'll have to wait until Apollo Client 4.0
        // to address this.
        skipStandbyResult
      ) : void 0;
      var previousData = resultData.previousData;
      var currentResultOverride = rehacktExports.useMemo(function () {
        return resultOverride && toQueryResult(resultOverride, previousData, observable, client);
      }, [client, observable, resultOverride, previousData]);
      return useSyncExternalStore(rehacktExports.useCallback(function (handleStoreChange) {
        if (isSyncSSR) {
          return function () {
          };
        }
        var onNext = function () {
          var previousResult = resultData.current;
          var result = observable.getCurrentResult();
          if (previousResult && previousResult.loading === result.loading && previousResult.networkStatus === result.networkStatus && equal(previousResult.data, result.data)) {
            return;
          }
          setResult(result, resultData, observable, client, partialRefetch, handleStoreChange, callbackRef.current);
        };
        var onError = function (error) {
          subscription.current.unsubscribe();
          subscription.current = observable.resubscribeAfterError(onNext, onError);
          if (!hasOwnProperty.call(error, "graphQLErrors")) {
            throw error;
          }
          var previousResult = resultData.current;
          if (!previousResult || previousResult && previousResult.loading || !equal(error, previousResult.error)) {
            setResult({
              data: previousResult && previousResult.data,
              error,
              loading: false,
              networkStatus: NetworkStatus.error
            }, resultData, observable, client, partialRefetch, handleStoreChange, callbackRef.current);
          }
        };
        var subscription = { current: observable.subscribe(onNext, onError) };
        return function () {
          setTimeout(function () {
            return subscription.current.unsubscribe();
          });
        };
      }, [
        disableNetworkFetches,
        isSyncSSR,
        observable,
        resultData,
        partialRefetch,
        client
      ]), function () {
        return currentResultOverride || getCurrentResult(resultData, observable, callbackRef.current, partialRefetch, client);
      }, function () {
        return currentResultOverride || getCurrentResult(resultData, observable, callbackRef.current, partialRefetch, client);
      });
    }
    function useRegisterSSRObservable(observable, renderPromises, ssrAllowed) {
      if (renderPromises && ssrAllowed) {
        renderPromises.registerSSRObservable(observable);
        if (observable.getCurrentResult().loading) {
          renderPromises.addObservableQueryPromise(observable);
        }
      }
    }
    function useResubscribeIfNecessary(resultData, observable, client, options, watchQueryOptions) {
      var _a2;
      if (observable[lastWatchOptions] && !equal(observable[lastWatchOptions], watchQueryOptions)) {
        observable.reobserve(getObsQueryOptions(observable, client, options, watchQueryOptions));
        resultData.previousData = ((_a2 = resultData.current) === null || _a2 === void 0 ? void 0 : _a2.data) || resultData.previousData;
        resultData.current = void 0;
      }
      observable[lastWatchOptions] = watchQueryOptions;
    }
    function createMakeWatchQueryOptions(client, query, _a2, isSyncSSR) {
      if (_a2 === void 0) {
        _a2 = {};
      }
      var skip = _a2.skip;
      _a2.ssr;
      _a2.onCompleted;
      _a2.onError;
      var defaultOptions2 = _a2.defaultOptions, otherOptions = __rest(_a2, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
      return function (observable) {
        var watchQueryOptions = Object.assign(otherOptions, { query });
        if (isSyncSSR && (watchQueryOptions.fetchPolicy === "network-only" || watchQueryOptions.fetchPolicy === "cache-and-network")) {
          watchQueryOptions.fetchPolicy = "cache-first";
        }
        if (!watchQueryOptions.variables) {
          watchQueryOptions.variables = {};
        }
        if (skip) {
          watchQueryOptions.initialFetchPolicy = watchQueryOptions.initialFetchPolicy || watchQueryOptions.fetchPolicy || getDefaultFetchPolicy(defaultOptions2, client.defaultOptions);
          watchQueryOptions.fetchPolicy = "standby";
        } else if (!watchQueryOptions.fetchPolicy) {
          watchQueryOptions.fetchPolicy = (observable === null || observable === void 0 ? void 0 : observable.options.initialFetchPolicy) || getDefaultFetchPolicy(defaultOptions2, client.defaultOptions);
        }
        return watchQueryOptions;
      };
    }
    function getObsQueryOptions(observable, client, queryHookOptions, watchQueryOptions) {
      var toMerge = [];
      var globalDefaults = client.defaultOptions.watchQuery;
      if (globalDefaults)
        toMerge.push(globalDefaults);
      if (queryHookOptions.defaultOptions) {
        toMerge.push(queryHookOptions.defaultOptions);
      }
      toMerge.push(compact(observable && observable.options, watchQueryOptions));
      return toMerge.reduce(mergeOptions);
    }
    function setResult(nextResult, resultData, observable, client, partialRefetch, forceUpdate, callbacks) {
      var previousResult = resultData.current;
      if (previousResult && previousResult.data) {
        resultData.previousData = previousResult.data;
      }
      if (!nextResult.error && isNonEmptyArray(nextResult.errors)) {
        nextResult.error = new ApolloError({ graphQLErrors: nextResult.errors });
      }
      resultData.current = toQueryResult(unsafeHandlePartialRefetch(nextResult, observable, partialRefetch), resultData.previousData, observable, client);
      forceUpdate();
      handleErrorOrCompleted(nextResult, previousResult === null || previousResult === void 0 ? void 0 : previousResult.networkStatus, callbacks);
    }
    function handleErrorOrCompleted(result, previousNetworkStatus, callbacks) {
      if (!result.loading) {
        var error_1 = toApolloError(result);
        Promise.resolve().then(function () {
          if (error_1) {
            callbacks.onError(error_1);
          } else if (result.data && previousNetworkStatus !== result.networkStatus && result.networkStatus === NetworkStatus.ready) {
            callbacks.onCompleted(result.data);
          }
        }).catch(function (error) {
          globalThis.__DEV__ !== false && invariant$1.warn(error);
        });
      }
    }
    function getCurrentResult(resultData, observable, callbacks, partialRefetch, client) {
      if (!resultData.current) {
        setResult(observable.getCurrentResult(), resultData, observable, client, partialRefetch, function () {
        }, callbacks);
      }
      return resultData.current;
    }
    function getDefaultFetchPolicy(queryHookDefaultOptions, clientDefaultOptions) {
      var _a2;
      return (queryHookDefaultOptions === null || queryHookDefaultOptions === void 0 ? void 0 : queryHookDefaultOptions.fetchPolicy) || ((_a2 = clientDefaultOptions === null || clientDefaultOptions === void 0 ? void 0 : clientDefaultOptions.watchQuery) === null || _a2 === void 0 ? void 0 : _a2.fetchPolicy) || "cache-first";
    }
    function toApolloError(result) {
      return isNonEmptyArray(result.errors) ? new ApolloError({ graphQLErrors: result.errors }) : result.error;
    }
    function toQueryResult(result, previousData, observable, client) {
      var data = result.data;
      result.partial;
      var resultWithoutPartial = __rest(result, ["data", "partial"]);
      var queryResult = __assign(__assign({ data }, resultWithoutPartial), { client, observable, variables: observable.variables, called: result !== ssrDisabledResult && result !== skipStandbyResult, previousData });
      return queryResult;
    }
    function unsafeHandlePartialRefetch(result, observable, partialRefetch) {
      if (result.partial && partialRefetch && !result.loading && (!result.data || Object.keys(result.data).length === 0) && observable.options.fetchPolicy !== "cache-only") {
        observable.refetch();
        return __assign(__assign({}, result), { loading: true, networkStatus: NetworkStatus.refetch });
      }
      return result;
    }
    var ssrDisabledResult = maybeDeepFreeze({
      loading: true,
      data: void 0,
      error: void 0,
      networkStatus: NetworkStatus.loading
    });
    var skipStandbyResult = maybeDeepFreeze({
      loading: false,
      data: void 0,
      error: void 0,
      networkStatus: NetworkStatus.ready
    });
    function bindObservableMethods(observable) {
      return {
        refetch: observable.refetch.bind(observable),
        reobserve: observable.reobserve.bind(observable),
        fetchMore: observable.fetchMore.bind(observable),
        updateQuery: observable.updateQuery.bind(observable),
        startPolling: observable.startPolling.bind(observable),
        stopPolling: observable.stopPolling.bind(observable),
        subscribeToMore: observable.subscribeToMore.bind(observable)
      };
    }
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    var defaultAttributes = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
    const createLucideIcon = (iconName, iconNode) => {
      const Component = reactExports.forwardRef(
        ({
          color = "currentColor",
          size = 24,
          strokeWidth = 2,
          absoluteStrokeWidth,
          className = "",
          children,
          ...rest
        }, ref) => {
          return reactExports.createElement(
            "svg",
            {
              ref,
              ...defaultAttributes,
              width: size,
              height: size,
              stroke: color,
              strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
              className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" "),
              ...rest
            },
            [
              ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
              ...Array.isArray(children) ? children : [children]
            ]
          );
        }
      );
      Component.displayName = `${iconName}`;
      return Component;
    };
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const CheckCircle = createLucideIcon("CheckCircle", [
      ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
    ]);
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Clock = createLucideIcon("Clock", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
    ]);
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Copy = createLucideIcon("Copy", [
      ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
      ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
    ]);
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Filter = createLucideIcon("Filter", [
      ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
    ]);
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Search = createLucideIcon("Search", [
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
    ]);
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Timer = createLucideIcon("Timer", [
      ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
      ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
      ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
    ]);
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Users = createLucideIcon("Users", [
      ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
    ]);
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const XCircle = createLucideIcon("XCircle", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }]
    ]);
    /**
     * @license lucide-react v0.344.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const X = createLucideIcon("X", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
    ]);
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(date);
    };
    const formatTime = (dateString) => {
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1e3);
      if (diffInSeconds < 60) {
        return "Just now";
      } else if (diffInSeconds < 3600) {
        const minutes = Math.floor(diffInSeconds / 60);
        return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
      } else if (diffInSeconds < 86400) {
        const hours = Math.floor(diffInSeconds / 3600);
        return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
      } else {
        return new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          month: "short",
          day: "numeric"
        }).format(date);
      }
    };
    const formatDuration = (seconds) => {
      if (seconds < 60) {
        return `${seconds} sec`;
      }
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      if (remainingSeconds === 0) {
        return `${minutes} min`;
      }
      return `${minutes} min ${remainingSeconds} sec`;
    };
    const StatusDonut = ({ successCount, failureCount }) => {
      const total = successCount + failureCount;
      const successPercentage = Math.round(successCount / total * 100);
      const failurePercentage = 100 - successPercentage;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", {
            width: "120\\", height: "120\\", viewBox: "0 0 120 120", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "60",
                cy: "60",
                r: "54",
                fill: "none",
                stroke: "currentColor",
                className: "text-slate-700",
                strokeWidth: "12"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "circle",
              {
                cx: "60",
                cy: "60",
                r: "54",
                fill: "none",
                stroke: "currentColor",
                className: "text-emerald-500",
                strokeWidth: "12",
                strokeDasharray: "339.3",
                strokeDashoffset: 339.3 * (1 - successPercentage / 100),
                transform: "rotate(-90 60 60)",
                style: {
                  strokeDashoffset: 339.3 * (1 - successPercentage / 100),
                  transition: "stroke-dashoffset 1s ease-out"
                }
              }
            ),
              failurePercentage > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "circle",
                {
                  cx: "60",
                  cy: "60",
                  r: "54",
                  fill: "none",
                  stroke: "currentColor",
                  className: "text-rose-500",
                  strokeWidth: "12",
                  strokeDasharray: "339.3",
                  strokeDashoffset: 339.3 * (1 - failurePercentage / 100),
                  transform: `rotate(${successPercentage * 3.6 - 90} 60 60)`,
                  style: {
                    strokeDashoffset: 339.3 * (1 - failurePercentage / 100),
                    transition: "stroke-dashoffset 1s ease-out"
                  }
                }
              )
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                className: "text-2xl font-semibold text-slate-100", children: [
                  successPercentage,
                  "%"
                ]
              }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: "Success Rate" })
              ]
            })
          })
          ]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "mt-4 flex space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-4 w-4 text-emerald-500 mr-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
              className: "text-sm text-slate-300", children: [
                successCount,
                " Successful"
              ]
            })
            ]
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(XCircle, { className: "h-4 w-4 text-rose-500 mr-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
              className: "text-sm text-slate-300", children: [
                failureCount,
                " Failed"
              ]
            })
            ]
          })
          ]
        })
        ]
      });
    };
    const BroadcastSummary = ({ data }) => {
      const {
        sender,
        totalMembers,
        successCount,
        failureCount,
        duration,
        timestamp,
        message
      } = data;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold text-slate-100 mb-2", children: "Broadcast Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "h-12 w-12 rounded-full overflow-hidden mr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: sender.avatar,
                alt: sender.username,
                className: "h-full w-full object-cover"
              }
            )
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-slate-100", children: sender.username }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400", children: formatDate(timestamp) })
            ]
          })
          ]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusDonut, { successCount, failureCount }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-indigo-500" }),
              label: "Total Members",
              value: totalMembers
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-5 w-5 text-emerald-500" }),
              label: "Successful",
              value: successCount
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(XCircle, { className: "h-5 w-5 text-rose-500" }),
              label: "Failed",
              value: failureCount
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Timer, { className: "h-5 w-5 text-amber-500" }),
              label: "Duration",
              value: formatDuration(duration)
            }
          )
          ]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-medium text-slate-300 mb-2", children: "Broadcast Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-slate-800 rounded p-4 font-mono text-sm whitespace-pre-wrap text-slate-200", children: message })
          ]
        })
        ]
      });
    };
    const StatCard = ({ icon, label, value }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "bg-slate-900 p-4 rounded-lg border border-slate-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "flex items-center mb-2", children: [
            icon,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-slate-400 ml-1.5", children: label })
          ]
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold text-slate-100", children: value })
        ]
      });
    };
    const MemberDeliveryList = ({
      members,
      allMembers,
      filteredCount,
      currentPage,
      totalPages,
      onPageChange,
      searchQuery,
      onSearchChange
    }) => {
      const membersPerPage = 10;
      const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
      };
      const getPageRange = () => {
        const range = [];
        const maxVisiblePages = 5;
        const halfVisible = Math.floor(maxVisiblePages / 2);
        let start = Math.max(1, currentPage - halfVisible);
        let end = Math.min(totalPages, start + maxVisiblePages - 1);
        if (end - start + 1 < maxVisiblePages) {
          start = Math.max(1, end - maxVisiblePages + 1);
        }
        if (start > 1) {
          range.push(1);
          if (start > 2) range.push("...");
        }
        for (let i = start; i <= end; i++) {
          range.push(i);
        }
        if (end < totalPages) {
          if (end < totalPages - 1) range.push("...");
          range.push(totalPages);
        }
        return range;
      };
      const startIndex = (currentPage - 1) * membersPerPage + 1;
      const endIndex = Math.min(currentPage * membersPerPage, filteredCount);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-slate-100", children: "Member Delivery Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "relative w-full sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search by username or ID...",
                value: searchQuery,
                onChange: (e) => onSearchChange(e.target.value),
                className: "w-full sm:w-64 pl-10 pr-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              }
            )
            ]
          })
          ]
        }),
          searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "mb-4 text-sm text-slate-300", children: [
              "Showing ",
              filteredCount,
              " of ",
              allMembers.length,
              " members"
            ]
          }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "overflow-x-auto -mx-4 sm:mx-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className: "inline-block min-w-full align-middle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", {
                className: "min-w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", {
                  className: "bg-slate-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", {
                    children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider", children: "Member" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "hidden sm:table-cell py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider", children: "Time Sent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider", children: "Discord ID" })
                    ]
                  })
                }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", {
                  className: "divide-y divide-slate-700", children: members.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "tr",
                    {
                      className: "hover:bg-slate-900 transition-colors",
                      children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", {
                        className: "py-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                            className: "h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden mr-3 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "img",
                              {
                                src: member.avatar,
                                alt: member.username,
                                className: "h-full w-full object-cover"
                              }
                            )
                          }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-slate-100 truncate", children: member.username }) })
                          ]
                        })
                      }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", {
                        className: "py-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                          className: "flex items-center", children: member.success ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCircle, { className: "h-4 w-4 sm:h-5 sm:w-5 text-emerald-500 mr-1.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400 text-sm font-medium", children: "Successful" })
                            ]
                          }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                            children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(XCircle, { className: "h-4 w-4 sm:h-5 sm:w-5 text-rose-500 mr-1.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-rose-400 text-sm font-medium", children: "Failed" })
                            ]
                          })
                        })
                      }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden sm:table-cell py-4 px-4 text-sm text-slate-300", children: formatTime(member.sentAt) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", {
                        className: "py-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "flex items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs bg-slate-800 px-2 py-1 rounded text-slate-300 font-mono truncate max-w-[100px] sm:max-w-none", children: member.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              onClick: () => copyToClipboard(member.id),
                              className: "ml-2 text-slate-400 hover:text-indigo-400 transition-colors",
                              title: "Copy ID",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" })
                            }
                          )
                          ]
                        })
                      })
                      ]
                    },
                    member.id
                  ))
                })
                ]
              })
            })
          }),
          totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "flex items-center justify-between border-t border-slate-700 px-4 py-3 sm:px-6 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex flex-1 justify-between sm:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onPageChange(Math.max(1, currentPage - 1)),
                  disabled: currentPage === 1,
                  className: `relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${currentPage === 1 ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                  children: "Previous"
                }
              ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onPageChange(Math.min(totalPages, currentPage + 1)),
                  disabled: currentPage === totalPages,
                  className: `relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${currentPage === totalPages ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-slate-800 text-slate-300 hover:bg-slate-700"}`,
                  children: "Next"
                }
              )
              ]
            }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", {
                  className: "text-sm text-slate-300", children: [
                    "Showing ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: startIndex }),
                    " to",
                    " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: endIndex }),
                    " ",
                    "of ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: filteredCount }),
                    " results"
                  ]
                })
              }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", {
                  className: "isolate inline-flex -space-x-px rounded-md shadow-sm", "aria-label": "Pagination", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => onPageChange(Math.max(1, currentPage - 1)),
                      disabled: currentPage === 1,
                      className: `relative inline-flex items-center rounded-l-md px-2 py-2 ${currentPage === 1 ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`,
                      children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) })
                      ]
                    }
                  ),
                    getPageRange().map((page, index2) => typeof page === "number" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: () => onPageChange(page),
                        className: `relative inline-flex items-center px-4 py-2 text-sm font-medium ${page === currentPage ? "z-10 bg-indigo-900 border-indigo-500 text-indigo-300 focus:outline-offset-0" : "bg-slate-800 border-slate-600 text-slate-400 hover:bg-slate-700"}`,
                        children: page
                      },
                      index2
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "relative inline-flex items-center px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800",
                        children: page
                      },
                      index2
                    )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => onPageChange(Math.min(totalPages, currentPage + 1)),
                        disabled: currentPage === totalPages,
                        className: `relative inline-flex items-center rounded-r-md px-2 py-2 ${currentPage === totalPages ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-slate-800 text-slate-400 hover:bg-slate-700"}`,
                        children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) })
                        ]
                      }
                    )
                  ]
                })
              })
              ]
            })
            ]
          })
        ]
      });
    };
    const SmartFilters = ({
      members,
      filters,
      onFiltersChange,
      isOpen,
      onToggle
    }) => {
      const [localFilters, setLocalFilters] = reactExports.useState(filters);
      const applyFilters = () => {
        onFiltersChange(localFilters);
      };
      const resetFilters = () => {
        const defaultFilters = {
          status: "all",
          timeRange: "all",
          searchQuery: ""
        };
        setLocalFilters(defaultFilters);
        onFiltersChange(defaultFilters);
      };
      const getFilteredCount = () => {
        return members.filter((member) => {
          if (localFilters.status === "success" && !member.success) return false;
          if (localFilters.status === "failed" && member.success) return false;
          if (localFilters.timeRange !== "all") {
            const now = /* @__PURE__ */ new Date();
            const memberTime = new Date(member.sentAt);
            const diffHours = (now.getTime() - memberTime.getTime()) / (1e3 * 60 * 60);
            switch (localFilters.timeRange) {
              case "last-hour":
                if (diffHours > 1) return false;
                break;
              case "last-day":
                if (diffHours > 24) return false;
                break;
              case "last-week":
                if (diffHours > 168) return false;
                break;
            }
          }
          if (localFilters.searchQuery) {
            const query = localFilters.searchQuery.toLowerCase();
            if (!member.username.toLowerCase().includes(query) && !member.id.includes(query)) {
              return false;
            }
          }
          return true;
        }).length;
      };
      const hasActiveFilters = filters.status !== "all" || filters.timeRange !== "all" || filters.searchQuery !== "";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onToggle,
            className: `flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${hasActiveFilters ? "bg-indigo-900 border-indigo-500 text-indigo-300" : "bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Filters" }),
              hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-indigo-500 text-white text-xs px-2 py-0.5 rounded-full", children: "Active" })
            ]
          }
        ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "absolute top-full left-0 mt-2 w-80 bg-slate-800 border border-slate-600 rounded-lg shadow-xl z-50 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-slate-100", children: "Smart Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onToggle,
                  className: "text-slate-400 hover:text-slate-200",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                }
              )
              ]
            }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                  className: "block text-sm font-medium text-slate-300 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 inline mr-1" }),
                    "Delivery Status"
                  ]
                }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "grid grid-cols-3 gap-2", children: [
                    { value: "all", label: "All", icon: Users },
                    { value: "success", label: "Success", icon: CheckCircle },
                    { value: "failed", label: "Failed", icon: XCircle }
                  ].map(({ value, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setLocalFilters({ ...localFilters, status: value }),
                      className: `flex items-center justify-center gap-1 px-3 py-2 rounded text-sm transition-colors ${localFilters.status === value ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`,
                      children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3 w-3" }),
                        label
                      ]
                    },
                    value
                  ))
                })
                ]
              }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                  className: "block text-sm font-medium text-slate-300 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 inline mr-1" }),
                    "Time Range"
                  ]
                }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className: "grid grid-cols-2 gap-2", children: [
                    { value: "all", label: "All Time" },
                    { value: "last-hour", label: "Last Hour" },
                    { value: "last-day", label: "Last Day" },
                    { value: "last-week", label: "Last Week" }
                  ].map(({ value, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setLocalFilters({ ...localFilters, timeRange: value }),
                      className: `px-3 py-2 rounded text-sm transition-colors ${localFilters.timeRange === value ? "bg-indigo-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`,
                      children: label
                    },
                    value
                  ))
                })
                ]
              }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-slate-300 mb-2", children: "Search Query" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    value: localFilters.searchQuery,
                    onChange: (e) => setLocalFilters({ ...localFilters, searchQuery: e.target.value }),
                    placeholder: "Username or Discord ID...",
                    className: "w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  }
                )
                ]
              }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "bg-slate-700 rounded p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "text-sm text-slate-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: getFilteredCount() }),
                    " of",
                    " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: members.length }),
                    " members match these filters"
                  ]
                })
              }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                className: "flex gap-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: applyFilters,
                    className: "flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition-colors",
                    children: "Apply Filters"
                  }
                ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: resetFilters,
                    className: "px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded transition-colors",
                    children: "Reset"
                  }
                )
                ]
              })
              ]
            })
            ]
          })
        ]
      });
    };
    const LoadingSpinner = ({ size = "md", className = "" }) => {
      const sizeClasses = {
        sm: "h-4 w-4",
        md: "h-8 w-8",
        lg: "h-12 w-12"
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `animate-spin rounded-full border-2 border-slate-600 border-t-indigo-500 ${sizeClasses[size]} ${className}` });
    };
    const BroadcastResults = ({ broadcastData: broadcastData2, isLoading = false }) => {
      const [currentPage, setCurrentPage] = reactExports.useState(1);
      const [filtersOpen, setFiltersOpen] = reactExports.useState(false);
      const [filters, setFilters] = reactExports.useState({
        status: "all",
        timeRange: "all",
        searchQuery: ""
      });
      const membersPerPage = 10;
      const filteredMembers = reactExports.useMemo(() => {
        return broadcastData2.members.filter((member) => {
          if (filters.status === "success" && !member.success) return false;
          if (filters.status === "failed" && member.success) return false;
          if (filters.timeRange !== "all") {
            const now = /* @__PURE__ */ new Date();
            const memberTime = new Date(member.sentAt);
            const diffHours = (now.getTime() - memberTime.getTime()) / (1e3 * 60 * 60);
            switch (filters.timeRange) {
              case "last-hour":
                if (diffHours > 1) return false;
                break;
              case "last-day":
                if (diffHours > 24) return false;
                break;
              case "last-week":
                if (diffHours > 168) return false;
                break;
            }
          }
          if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            if (!member.username.toLowerCase().includes(query) && !member.id.includes(query)) {
              return false;
            }
          }
          return true;
        });
      }, [broadcastData2.members, filters]);
      const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
      const currentMembers = filteredMembers.slice(
        (currentPage - 1) * membersPerPage,
        currentPage * membersPerPage
      );
      const handleFiltersChange = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
      };
      if (isLoading) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingSpinner, { size: "lg\\", className: "mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-slate-100 mb-2", children: "Loading Broadcast Results" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400", children: "Fetching delivery data and analytics..." })
            ]
          })
        });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "container mx-auto px-4 py-4 sm:py-8 max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className: "space-y-4 sm:space-y-6 animate-fadeIn", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "bg-slate-800 rounded-lg shadow-sm p-4 sm:p-6 border border-slate-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "mb-4 sm:mb-6", children: [
                ...broadcastData.childrens.map((e, i) =>
                  jsxRuntimeExports.jsx("div", {
                    key: i,
                    className: "p-4 rounded-r mb-6",
                    style: {
                      backgroundColor: e.bgColor || "#1E1B4B",               // Main background
                      borderLeft: `4px solid ${e.borderColor || "#6366f1"}`, // Border left color
                    },
                    children: jsxRuntimeExports.jsx("p", {
                      style: {
                        color: e.textColor || "#87B4FC",                     // Text color
                        fontSize: "0.875rem",
                      },
                      children: e.content,
                    }),
                  })
                ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(BroadcastSummary, { data: broadcastData2 })
              ]
            })
          }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "bg-slate-800 rounded-lg shadow-sm p-4 sm:p-6 border border-slate-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-slate-100", children: "Member Delivery Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
                SmartFilters,
                {
                  members: broadcastData2.members,
                  filters,
                  onFiltersChange: handleFiltersChange,
                  isOpen: filtersOpen,
                  onToggle: () => setFiltersOpen(!filtersOpen)
                }
              )
              ]
            }),
              filters.status !== "all" || filters.timeRange !== "all" || filters.searchQuery ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className: "mb-4 p-3 bg-slate-900 rounded-lg border border-slate-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                  className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
                    className: "text-sm text-slate-300", children: [
                      "Showing ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-indigo-400", children: filteredMembers.length }),
                      " of",
                      " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: broadcastData2.members.length }),
                      " members"
                    ]
                  }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => handleFiltersChange({ status: "all", timeRange: "all", searchQuery: "" }),
                      className: "text-xs text-indigo-400 hover:text-indigo-300 underline",
                      children: "Clear all filters"
                    }
                  )
                  ]
                })
              }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(
                MemberDeliveryList,
                {
                  members: currentMembers,
                  allMembers: broadcastData2.members,
                  filteredCount: filteredMembers.length,
                  currentPage,
                  totalPages,
                  onPageChange: setCurrentPage,
                  searchQuery: filters.searchQuery,
                  onSearchChange: (query) => handleFiltersChange({ ...filters, searchQuery: query })
                }
              )
            ]
          }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "text-center text-sm text-slate-400 pt-4", children: [
              "Developed by ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-indigo-400", children: "7xr" })
            ]
          })
          ]
        })
      });
    };
    const httpLink = createHttpLink({
      uri: "/graphql"
    });
    const apolloClient = new ApolloClient({
      link: httpLink,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          errorPolicy: "all"
        },
        query: {
          errorPolicy: "all"
        }
      }
    });
    const GET_BROADCAST_RESULTS = gql`
  query GetBroadcastResults($broadcastId: ID!) {
    broadcastResults(id: $broadcastId) {
      id
      sender {
        id
        username
        avatar
      }
      totalMembers
      successCount
      failureCount
      duration
      timestamp
      message
      members {
        id
        username
        avatar
        success
        sentAt
        errorMessage
      }
    }
  }
`;
    gql`
  query GetBroadcastAnalytics($broadcastId: ID!) {
    broadcastAnalytics(id: $broadcastId) {
      deliveryTimeline {
        timestamp
        successCount
        failureCount
      }
      errorBreakdown {
        errorType
        count
        percentage
      }
      memberActivity {
        hour
        activeMembers
      }
    }
  }
`;
    gql`
  mutation RetryFailedDeliveries($broadcastId: ID!, $memberIds: [ID!]!) {
    retryFailedDeliveries(broadcastId: $broadcastId, memberIds: $memberIds) {
      success
      retriedCount
      errors {
        memberId
        message
      }
    }
  }
`;
    const broadcastData = window.broadcastData;
    const useBroadcastData = (broadcastId) => {
      const [isLoading, setIsLoading] = reactExports.useState(true);
      const [data, setData] = reactExports.useState(null);
      const [error, setError] = reactExports.useState(null);
      const { data: graphqlData, loading: graphqlLoading, error: graphqlError } = useQuery(
        GET_BROADCAST_RESULTS,
        {
          variables: { broadcastId: "sample" },
          skip: true,
          errorPolicy: "all"
        }
      );
      reactExports.useEffect(() => {
        const loadData = async () => {
          setIsLoading(true);
          try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            if (graphqlData == null ? void 0 : graphqlData.broadcastResults) {
              const transformedData = {
                sender: graphqlData.broadcastResults.sender,
                totalMembers: graphqlData.broadcastResults.totalMembers,
                successCount: graphqlData.broadcastResults.successCount,
                failureCount: graphqlData.broadcastResults.failureCount,
                duration: graphqlData.broadcastResults.duration,
                timestamp: graphqlData.broadcastResults.timestamp,
                message: graphqlData.broadcastResults.message,
                members: graphqlData.broadcastResults.members
              };
              setData(transformedData);
            } else {
              setData(broadcastData);
            }
            setError(null);
          } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load broadcast data");
            setData(broadcastData);
          } finally {
            setIsLoading(false);
          }
        };
        loadData();
      }, [graphqlData, graphqlError]);
      return {
        data,
        isLoading: isLoading || graphqlLoading,
        error: error || (graphqlError == null ? void 0 : graphqlError.message),
        refetch: () => {
          setIsLoading(true);
        }
      };
    };
    const AppContent = () => {
      const { data, isLoading, error } = useBroadcastData();
      if (error) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-red-400 mb-2", children: "Error Loading Data" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400", children: error })
            ]
          })
        });
      }
      if (!data) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-slate-100 mb-2", children: "No Data Available" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400", children: "Unable to load broadcast results." })
            ]
          })
        });
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BroadcastResults, { broadcastData: data, isLoading });
    };
    function App() {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ApolloProvider, { client: apolloClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppContent, {}) }) });
    }
    createRoot(document.getElementById("root")).render(
      /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
    );
  }
});
export default require_index_001();
