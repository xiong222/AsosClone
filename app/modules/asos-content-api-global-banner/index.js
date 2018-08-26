!(function (t, n) {
  typeof exports === 'object' && typeof module === 'object' ? module.exports = n(require('prop-types'), require('react'), require('base64url'), require('isomorphic-fetch')) : typeof define === 'function' && define.amd ? define('asos-content-api-global-banner', ['prop-types', 'react', 'base64url', 'isomorphic-fetch'], n) : typeof exports === 'object' ? exports['asos-content-api-global-banner'] = n(require('prop-types'), require('react'), require('base64url'), require('isomorphic-fetch')) : t['asos-content-api-global-banner'] = n(t['prop-types'], t.react, t.base64url, t['isomorphic-fetch']);
}(this, (t, n, e, o) => (function (t) {
  const n = {};
  function e(o) {
    if (n[o]) { return n[o].exports; }
    const r = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(r.exports, r, r.exports, e),
    r.l = !0,
    r.exports;
  }
  return e.m = t,
  e.c = n,
  e.i = function (t) {
    return t;
  }
  ,
  e.d = function (t, n, o) {
    e.o(t, n) || Object.defineProperty(t, n, {
      configurable: !1,
      enumerable: !0,
      get: o
    });
  }
  ,
  e.n = function (t) {
    const n = t && t.__esModule ? function () {
      return t.default;
    }
      : function () {
        return t;
      };
    return e.d(n, 'a', n),
    n;
  }
  ,
  e.o = function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }
  ,
  e.p = '',
  e(e.s = 17);
}([function (t, n) {
  t.exports = require('prop-types');
},
function (t, n) {
  t.exports = require('react');
},
function (t, n) {
  t.exports = function (t) {
    const n = [];
    return n.toString = function () {
      return this.map((n) => {
        const e = (function (t, n) {
          let e = t[1] || '',
            o = t[3];
          if (!o) { return e; }
          if (n && typeof btoa === 'function') {
            let r = (a = o,
              `/*# sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(a))))} */`),
              l = o.sources.map((t) => `/*# sourceURL=${  o.sourceRoot  }${t  } */`);
            return [e].concat(l).concat([r]).join('\n');
          }
          let a;
          return [e].join('\n');
        }(n, t));
        return n[2] ? `@media ${n[2]}{${e}}` : e;
      }).join('');
    }
    ,
    n.i = function (t, e) {
      typeof t === 'string' && (t = [[null, t, '']]);
      for (var o = {}, r = 0; r < this.length; r++) {
        const l = this[r][0];
        typeof l === 'number' && (o[l] = !0);
      }
      for (r = 0; r < t.length; r++) {
        const a = t[r];
        typeof a[0] === 'number' && o[a[0]] || (e && !a[2] ? a[2] = e : e && (a[2] = `(${a[2]}) and (${e})`),
        n.push(a));
      }
    }
    ,
    n;
  };
},
function (t, n, e) {
  let o,
    r,
    l = {},
    a = (o = function () {
      return window && document && document.all && !window.atob;
    }
    ,
    function () {
      return void 0 === r && (r = o.apply(this, arguments)),
      r;
    }
    ),
    i = (function (t) {
      const n = {};
      return function (t) {
        if (typeof t === 'function') { return t(); }
        if (typeof n[t] === 'undefined') {
          let e = function (t) {
            return document.querySelector(t);
          }
            .call(this, t);
          if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) {
            try {
              e = e.contentDocument.head;
            } catch (o) {
              e = null;
            }
          }
          n[t] = e;
        }
        return n[t];
      };
    }()),
    s = null,
    c = 0,
    p = [],
    u = e(32);
  function f(t, n) {
    for (let e = 0; e < t.length; e++) {
      let o = t[e],
        r = l[o.id];
      if (r) {
        r.refs++;
        for (var a = 0; a < r.parts.length; a++) { r.parts[a](o.parts[a]); }
        for (; a < o.parts.length; a++) { r.parts.push(y(o.parts[a], n)); }
      } else {
        const i = [];
        for (a = 0; a < o.parts.length; a++) { i.push(y(o.parts[a], n)); }
        l[o.id] = {
          id: o.id,
          refs: 1,
          parts: i
        };
      }
    }
  }
  function d(t, n) {
    for (var e = [], o = {}, r = 0; r < t.length; r++) {
      let l = t[r],
        a = n.base ? l[0] + n.base : l[0],
        i = {
          css: l[1],
          media: l[2],
          sourceMap: l[3]
        };
      o[a] ? o[a].parts.push(i) : e.push(o[a] = {
        id: a,
        parts: [i]
      });
    }
    return e;
  }
  function b(t, n) {
    const e = i(t.insertInto);
    if (!e) { throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); }
    const o = p[p.length - 1];
    if (t.insertAt === 'top') {
      o ? o.nextSibling ? e.insertBefore(n, o.nextSibling) : e.appendChild(n) : e.insertBefore(n, e.firstChild),
      p.push(n);
    } else if (t.insertAt === 'bottom') { e.appendChild(n); } else {
      if (typeof t.insertAt !== 'object' || !t.insertAt.before) { throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"); }
      const r = i(`${t.insertInto} ${t.insertAt.before}`);
      e.insertBefore(n, r);
    }
  }
  function C(t) {
    if (t.parentNode === null) { return !1; }
    t.parentNode.removeChild(t);
    const n = p.indexOf(t);
    n >= 0 && p.splice(n, 1);
  }
  function h(t) {
    const n = document.createElement('style');
    return t.attrs.type === undefined && (t.attrs.type = 'text/css'),
    _(n, t.attrs),
    b(t, n),
    n;
  }
  function _(t, n) {
    Object.keys(n).forEach((e) => {
      t.setAttribute(e, n[e]);
    });
  }
  function y(t, n) {
    let e,
      o,
      r,
      l;
    if (n.transform && t.css) {
      if (!(l = n.transform(t.css))) { return function () {}; }
      t.css = l;
    }
    if (n.singleton) {
      const a = c++;
      e = s || (s = h(n)),
      o = x.bind(null, e, a, !1),
      r = x.bind(null, e, a, !0);
    } else {
      t.sourceMap && typeof URL === 'function' && typeof URL.createObjectURL === 'function' && typeof URL.revokeObjectURL === 'function' && typeof Blob === 'function' && typeof btoa === 'function' ? (e = (function (t) {
        const n = document.createElement('link');
        return t.attrs.type === undefined && (t.attrs.type = 'text/css'),
        t.attrs.rel = 'stylesheet',
        _(n, t.attrs),
        b(t, n),
        n;
      }(n)),
      o = function (t, n, e) {
        let o = e.css,
          r = e.sourceMap,
          l = n.convertToAbsoluteUrls === undefined && r;
        (n.convertToAbsoluteUrls || l) && (o = u(o));
        r && (o += `\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(r))))} */`);
        let a = new Blob([o], {
            type: 'text/css'
          }),
          i = t.href;
        t.href = URL.createObjectURL(a),
        i && URL.revokeObjectURL(i);
      }
        .bind(null, e, n),
      r = function () {
        C(e),
        e.href && URL.revokeObjectURL(e.href);
      }
      ) : (e = h(n),
      o = function (t, n) {
        let e = n.css,
          o = n.media;
        o && t.setAttribute('media', o);
        if (t.styleSheet) { t.styleSheet.cssText = e; } else {
          for (; t.firstChild;) { t.removeChild(t.firstChild); }
          t.appendChild(document.createTextNode(e));
        }
      }
        .bind(null, e),
      r = function () {
        C(e);
      }
      );
    }
    return o(t),
    function (n) {
      if (n) {
        if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) { return; }
        o(t = n);
      } else { r(); }
    };
  }
  t.exports = function (t, n) {
    if (typeof DEBUG !== 'undefined' && DEBUG && typeof document !== 'object') { throw new Error('The style-loader cannot be used in a non-browser environment'); }
    if (typeof document === 'undefined') { return null; }
    (n = n || {}).attrs = typeof n.attrs === 'object' ? n.attrs : {},
    n.singleton || typeof n.singleton === 'boolean' || (n.singleton = a()),
    n.insertInto || (n.insertInto = 'head'),
    n.insertAt || (n.insertAt = 'bottom');
    const e = d(t, n);
    return f(e, n),
    function (t) {
      for (var o = [], r = 0; r < e.length; r++) {
        const a = e[r];
        (i = l[a.id]).refs--,
        o.push(i);
      }
      t && f(d(t, n), n);
      for (r = 0; r < o.length; r++) {
        var i;
        if ((i = o[r]).refs === 0) {
          for (let s = 0; s < i.parts.length; s++) { i.parts[s](); }
          delete l[i.id];
        }
      }
    };
  };
  let P,
    g = (P = [],
    function (t, n) {
      return P[t] = n,
      P.filter(Boolean).join('\n');
    }
    );
  function x(t, n, e, o) {
    const r = e ? '' : o.css;
    if (t.styleSheet) { t.styleSheet.cssText = g(n, r); } else {
      let l = document.createTextNode(r),
        a = t.childNodes;
      a[n] && t.removeChild(a[n]),
      a.length ? t.insertBefore(l, a[n]) : t.appendChild(l);
    }
  }
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = (function () {
    function t(t, n) {
      for (let e = 0; e < n.length; e++) {
        const o = n[e];
        o.enumerable = o.enumerable || !1,
        o.configurable = !0,
        'value' in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
      }
    }
    return function (n, e, o) {
      return e && t(n.prototype, e),
      o && t(n, o),
      n;
    };
  }());
  const r = (function () {
    function t() {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, t));
    }
    return o(t, [{
      key: 'triggerNewrelicEvent',
      value(t, n) {
        if (typeof window !== 'undefined') {
          const e = window.newrelic;
          e && e.addPageAction(t, n);
        }
      }
    }, {
      key: 'triggerTargetEvent',
      value(t) {
        if (typeof window !== 'undefined') {
          const n = new CustomEvent(t, {
            detail: {
              message: t,
              time: new Date()
            },
            bubbles: !0,
            cancelable: !0
          });
          window.dispatchEvent(n);
        }
      }
    }]),
    t;
  }());
  n.default = r;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  }),
  n.handleCtaRef = function (t, n) {
    if (n.length > 0) {
      let e = 'ctaref',
        o = new RegExp('([?&])ctaref=.*?(&|$)', 'i'),
        r = t.indexOf('?') !== -1 ? '&' : '?';
      return t.match(o) ? t.replace(o, `$1ctaref=${n}$2`) : `${t}${r}${e}=${n}`;
    }
    return t;
  };
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = (function () {
    function t(t, n) {
      for (let e = 0; e < n.length; e++) {
        const o = n[e];
        o.enumerable = o.enumerable || !1,
        o.configurable = !0,
        'value' in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
      }
    }
    return function (n, e, o) {
      return e && t(n.prototype, e),
      o && t(n, o),
      n;
    };
  }());
  e(34);
  let r,
    l = e(33),
    a = (r = l) && r.__esModule ? r : {
      default: r
    },
    i = e(18);
  const s = (function () {
    function t() {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, t)),
      this.endpoint = i.ENDPOINT,
      this.locationParameters = {},
      this.encodedUserContext = {};
    }
    return o(t, [{
      key: 'setContextParameters',
      value(n) {
        this.encodedUserContext = t.objectToBase64({
          premier: n.subscriptions
        }),
        this.locationParameters = {
          country: n.country,
          store: n.store,
          lang: n.lang
        };
      }
    }, {
      key: 'fetchContent',
      value() {
        return fetch(this.generateContentAPIURL(), {
          method: 'GET',
          credentials: 'same-origin'
        }).then((t) => (t.status === 200 ? t.json() : Promise.reject(t))).then((t) => t).catch((t) => Promise.reject(t));
      }
    }, {
      key: 'generateContentAPIURL',
      value() {
        const n = t.constructQueryString(this.locationParameters, this.encodedUserContext);
        return `${this.endpoint}${n}`;
      }
    }], [{
      key: 'objectToBase64',
      value(t) {
        return Object.keys(t).length === 0 ? null : a.default.encode(JSON.stringify(t));
      }
    }, {
      key: 'constructQueryString',
      value(t, n) {
        let e = '/?';
        for (const o in t) { e = e === '/?' ? `${e}${o}=${ t[o]}` : `${e}&${o}=${t[o]}`; }
        return n ? `${e}&context=${n}` : e;
      }
    }]),
    t;
  }());
  n.default = s;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = (function () {
      function t(t, n) {
        for (let e = 0; e < n.length; e++) {
          const o = n[e];
          o.enumerable = o.enumerable || !1,
          o.configurable = !0,
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
        }
      }
      return function (n, e, o) {
        return e && t(n.prototype, e),
        o && t(n, o),
        n;
      };
    }()),
    r = s(e(1)),
    l = s(e(0)),
    a = s(e(14)),
    i = s(e(16));
  function s(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const c = (function (t) {
    function n() {
      return (function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, n)),
      (function (t, n) {
        if (!t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); }
        return !n || typeof n !== 'object' && typeof n !== 'function' ? t : n;
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments)));
    }
    return (function (t, n) {
      if (typeof n !== 'function' && n !== null) { throw new TypeError(`Super expression must either be null or a function, not ${ typeof n}`); }
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }(n, r.default.PureComponent)),
    o(n, [{
      key: 'isMarketingUnits',
      value(t) {
        return !!t.javascripts;
      }
    }, {
      key: 'filterGlobalBannerFromContentAPI',
      value(t) {
        for (let n = 0; n < t.length; n++) {
          if (t[n].type === 'GlobalBanner')
            return t[n].data; 
}
        return null;
      }
    }, {
      key: 'render',
      value() {
        return this.isMarketingUnits(this.props.content) ? r.default.createElement(i.default, {
          content: this.props.content
        }) : r.default.createElement(a.default, {
          content: this.filterGlobalBannerFromContentAPI(this.props.content)
        });
      }
    }]),
    n;
  }());
  c.propTypes = {
    content: l.default.oneOfType([l.default.object, l.default.array]).isRequired
  },
  n.default = c;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = (function () {
    function t(t, n) {
      for (let e = 0; e < n.length; e++) {
        const o = n[e];
        o.enumerable = o.enumerable || !1,
        o.configurable = !0,
        'value' in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
      }
    }
    return function (n, e, o) {
      return e && t(n.prototype, e),
      o && t(n, o),
      n;
    };
  }());
  const r = (function () {
    function t(n, e) {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, t)),
      this.storageType = n,
      this.storageTimeout = e;
    }
    return o(t, [{
      key: 'isAvailable',
      value() {
        try {
          let t = window[this.storageType],
            n = '__storage_test__';
          return t.setItem(n, n),
          t.removeItem(n),
          !0;
        } catch (e) {
          return !1;
        }
      }
    }, {
      key: 'getData',
      value(t) {
        return this.isAvailable() ? JSON.parse(window[this.storageType].getItem(t)) : null;
      }
    }, {
      key: 'getValidatedContent',
      value(t) {
        const n = this.getData(t);
        return n && (new Date()).getTime() - n.timestamp < this.storageTimeout ? n.content : null;
      }
    }, {
      key: 'setData',
      value(t, n) {
        const e = {
          content: n,
          timestamp: (new Date()).getTime()
        };
        this.isAvailable() && window[this.storageType].setItem(t, JSON.stringify(e));
      }
    }]),
    t;
  }());
  n.default = r;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = i(e(1)),
    r = i(e(0)),
    l = e(5),
    a = i(e(26));
  function i(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const s = function (t) {
    let n = t.data,
      e = t.contentColor,
      r = t.style,
      i = r === undefined ? a.default : r;
    return o.default.createElement('a', {
      href: (0,
      l.handleCtaRef)(n.url, n.ctaRef),
      className: i.button,
      target: n.target,
      style: {
        color: e,
        borderColor: e
      }
    }, n.text);
  };
  s.propTypes = {
    data: r.default.shape({
      url: r.default.string.isRequired,
      text: r.default.string.isRequired,
      ctaRef: r.default.string.isRequired,
      target: r.default.string.isRequired
    }).isRequired,
    contentColor: r.default.string.isRequired
  },
  n.default = s;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = (function () {
      function t(t, n) {
        for (let e = 0; e < n.length; e++) {
          const o = n[e];
          o.enumerable = o.enumerable || !1,
          o.configurable = !0,
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
        }
      }
      return function (n, e, o) {
        return e && t(n.prototype, e),
        o && t(n, o),
        n;
      };
    }()),
    r = c(e(1)),
    l = c(e(0)),
    a = c(e(27)),
    i = c(e(13)),
    s = c(e(12));
  function c(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const p = (function (t) {
    function n(t) {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, n));
      const e = (function (t, n) {
        if (!t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); }
        return !n || typeof n !== 'object' && typeof n !== 'function' ? t : n;
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)));
      return e.style = a.default,
      e.state = {
        tooltipVisible: !1
      },
      e;
    }
    return (function (t, n) {
      if (typeof n !== 'function' && n !== null) { throw new TypeError(`Super expression must either be null or a function, not ${ typeof n}`); }
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }(n, r.default.Component)),
    o(n, [{
      key: 'handleUnitHover',
      value() {
        const t = this;
        return function () {
          t.setState({
            tooltipVisible: !t.state.tooltipVisible
          });
        };
      }
    }, {
      key: 'render',
      value() {
        return r.default.createElement('div', {
          className: this.style.column,
          style: {
            backgroundColor: this.props.data.backgroundColor
          }
        }, r.default.createElement(i.default, {
          data: this.props.data,
          unitPosition: this.props.columnPosition,
          handleUnitHover: this.handleUnitHover(),
          fontSize: this.props.data.fontSize,
          contentColor: this.props.data.contentColor
        }), this.props.data.tooltip ? r.default.createElement(s.default, {
          content: this.props.data.tooltip,
          tooltipPosition: this.props.columnPosition,
          isVisible: this.state.tooltipVisible
        }) : null);
      }
    }]),
    n;
  }());
  p.defaultProps = {
    data: {
      tooltip: '',
      fontSize: 'medium',
      backgroundColor: '#FFF',
      contentColor: '#000'
    }
  },
  p.propTypes = {
    columnPosition: l.default.string.isRequired,
    data: l.default.shape({
      tooltip: l.default.string,
      fontSize: l.default.string,
      backgroundColor: l.default.string,
      contentColor: l.default.string
    }).isRequired
  },
  n.default = p;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = i(e(1)),
    r = i(e(0)),
    l = i(e(28)),
    a = i(e(19));
  function i(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const s = function (t) {
    let n = t.content,
      e = t.contentColor,
      r = t.fontSize,
      i = t.style,
      s = i === undefined ? l.default : i;
    return o.default.createElement('div', {
      className: s.content,
      style: {
        fontSize: a.default[r],
        color: e
      }
    }, o.default.createElement('span', {
      className: s.copy,
      dangerouslySetInnerHTML: {
        __html: n
      }
    }));
  };
  s.propTypes = {
    content: r.default.string.isRequired,
    contentColor: r.default.string.isRequired,
    fontSize: r.default.string.isRequired
  },
  n.default = s;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = (function () {
      function t(t, n) {
        for (let e = 0; e < n.length; e++) {
          const o = n[e];
          o.enumerable = o.enumerable || !1,
          o.configurable = !0,
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
        }
      }
      return function (n, e, o) {
        return e && t(n.prototype, e),
        o && t(n, o),
        n;
      };
    }()),
    r = i(e(1)),
    l = i(e(0)),
    a = i(e(30));
  function i(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const s = (function (t) {
    function n() {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, n));
      const t = (function (t, n) {
        if (!t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); }
        return !n || typeof n !== 'object' && typeof n !== 'function' ? t : n;
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)));
      return t.style = a.default,
      t.state = {
        mouseOverTooltip: !1
      },
      t;
    }
    return (function (t, n) {
      if (typeof n !== 'function' && n !== null) { throw new TypeError(`Super expression must either be null or a function, not ${ typeof n}`); }
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }(n, r.default.Component)),
    o(n, [{
      key: 'createMarkup',
      value() {
        return {
          __html: this.props.content
        };
      }
    }, {
      key: 'mouseOverTooltip',
      value() {
        this.setState({
          mouseOverTooltip: !this.state.mouseOverTooltip
        });
      }
    }, {
      key: 'render',
      value() {
        const t = this;
        return this.state.mouseOverTooltip || this.props.isVisible ? r.default.createElement('div', {
          className: this.style[`wrapper${this.props.tooltipPosition}`],
          onMouseEnter() {
            return t.mouseOverTooltip();
          },
          onMouseLeave() {
            return t.mouseOverTooltip();
          }
        }, r.default.createElement('div', {
          className: this.style.tooltip,
          dangerouslySetInnerHTML: this.createMarkup()
        })) : r.default.createElement('div', {
          className: `${this.style[`wrapper${ this.props.tooltipPosition}`]} ${this.style.hidden}`
        }, r.default.createElement('div', {
          className: this.style.tooltip,
          dangerouslySetInnerHTML: this.createMarkup()
        }));
      }
    }]),
    n;
  }());
  s.propTypes = {
    content: l.default.string.isRequired,
    tooltipPosition: l.default.string.isRequired,
    isVisible: l.default.bool.isRequired
  },
  n.default = s;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = c(e(1)),
    r = c(e(0)),
    l = e(5),
    a = c(e(31)),
    i = c(e(11)),
    s = c(e(9));
  function c(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const p = function (t) {
    let n = t.data,
      e = t.unitPosition,
      r = t.fontSize,
      c = t.contentColor,
      p = t.handleUnitHover,
      u = t.style,
      f = u === undefined ? a.default : u;
    return n.link ? o.default.createElement('a', {
      className: `${f.unitLink} ${f[`unit${e}`]}`,
      href: (0,
      l.handleCtaRef)(n.link.url, n.link.ctaRef),
      target: n.link.target,
      onMouseEnter() {
        return p();
      },
      onMouseLeave() {
        return p();
      }
    }, o.default.createElement(i.default, {
      content: n.content,
      contentColor: c,
      fontSize: r
    })) : o.default.createElement('div', {
      className: `${f.unit} ${f[`unit${e}`]}`,
      onMouseEnter() {
        return p();
      },
      onMouseLeave() {
        return p();
      }
    }, n.buttons.length ? o.default.createElement(s.default, {
      data: n.buttons[0],
      contentColor: c
    }) : null, o.default.createElement(i.default, {
      content: n.content,
      contentColor: c,
      fontSize: r
    }), n.buttons.length ? o.default.createElement(s.default, {
      data: n.buttons[1],
      contentColor: c
    }) : null);
  };
  p.propTypes = {
    data: r.default.shape({
      content: r.default.string.isRequired,
      contentColor: r.default.string.isRequired,
      link: r.default.object
    }).isRequired,
    unitPosition: r.default.string.isRequired,
    fontSize: r.default.string.isRequired,
    handleUnitHover: r.default.func.isRequired
  },
  n.default = p;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = (function () {
      function t(t, n) {
        for (let e = 0; e < n.length; e++) {
          const o = n[e];
          o.enumerable = o.enumerable || !1,
          o.configurable = !0,
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
        }
      }
      return function (n, e, o) {
        return e && t(n.prototype, e),
        o && t(n, o),
        n;
      };
    }()),
    r = c(e(1)),
    l = c(e(0)),
    a = c(e(29)),
    i = c(e(10)),
    s = c(e(4));
  function c(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const p = (function (t) {
    function n() {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, n));
      const t = (function (t, n) {
        if (!t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); }
        return !n || typeof n !== 'object' && typeof n !== 'function' ? t : n;
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)));
      return t.eventManager = new s.default(),
      t;
    }
    return (function (t, n) {
      if (typeof n !== 'function' && n !== null) { throw new TypeError(`Super expression must either be null or a function, not ${ typeof n}`); }
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }(n, r.default.PureComponent)),
    o(n, [{
      key: 'getColumnPosition',
      value(t) {
        return this.props.content.columns.length === 1 ? 'Center' : t === 0 ? 'Left' : 'Right';
      }
    }, {
      key: 'render',
      value() {
        const t = this;
        return this.props.content ? (this.eventManager.triggerTargetEvent('globalBannerComplete'),
        r.default.createElement('section', {
          id: 'globalBannerComponent',
          className: this.props.style.globalBanner
        }, this.props.content.columns.map((n, e) => r.default.createElement(i.default, {
          key: `column${  e}`,
          data: n,
          columnPosition: t.getColumnPosition(e)
        })))) : null;
      }
    }]),
    n;
  }());
  p.defaultProps = {
    style: a.default
  },
  p.propTypes = {
    content: l.default.shape({
      columns: l.default.arrayOf(l.default.object).isRequired
    })
  },
  n.default = p;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = (function () {
    function t(t, n) {
      for (let e = 0; e < n.length; e++) {
        const o = n[e];
        o.enumerable = o.enumerable || !1,
        o.configurable = !0,
        'value' in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o);
      }
    }
    return function (n, e, o) {
      return e && t(n.prototype, e),
      o && t(n, o),
      n;
    };
  }());
  const r = (function () {
    function t(n) {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, t)),
      this.elements = n,
      this.stylesheet = document.createElement('style'),
      this.stylesheet.type = 'text/css',
      this.hasGeneratedStyles = !1;
    }
    return o(t, [{
      key: 'init',
      value() {
        for (let t = 0; t < this.elements.length; t++) {
          let n = this.elements[t],
            e = `unit-btn_${t}`;
          n.className += ` ${e}`,
          this.extractStyles(n, e);
        }
        this.hasGeneratedStyles && document.head.appendChild(this.stylesheet);
      }
    }, {
      key: 'extractStyles',
      value(t, n) {
        let e = t.getAttribute('data-color-primary'),
          o = t.getAttribute('data-color-secondary'),
          r = '';
        t.className.indexOf('unit-btn_reverse') !== -1 && e && o && (r += `.global-banner .${n}.unit-btn_reverse .unit-btn { background-color: ${o}; border: solid 2px ${e}; color: ${e}; }`,
        r += `.global-banner .${n}.unit-btn_reverse .unit-btn:hover { background-color: ${e}; border: solid 2px ${e}; color: ${o};}`),
        t.className.indexOf('unit-btn_glow') !== -1 && e && o && (r += `.global-banner .${n}.unit-btn_glow .unit-btn { color: ${e}; border: solid 2px ${e}; box-shadow: 0 0 7px ${e}; }`,
        r += `.global-banner .${n}.unit-btn_glow .unit-btn:hover { box-shadow: 0 0 7px ${o}; animation: shop_${n} 2s linear forwards; }`,
        r += `@keyframes shop_${n} { 2% {  border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 3%  { border-color: ${o} ; box-shadow:none; } 5% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; }  6% { border-color: ${o} box-shadow:none; } 7% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 9%  { border-color: ${o} box-shadow:none; } 13% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 16% { border-color: ${o} ; box-shadow:none; } 18% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 22% { border-color: ${o} ; box-shadow:none; } 34% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 36% { border-color: ${o} ; box-shadow:none; } 54% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 100% { border-color: ${e} ; box-shadow:0 0 12px -1px ${e} inset; } } `,
        r += `@-webkit-keyframes shop_${n} { 2% {  border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 3%  { border-color: ${o} ; box-shadow:none; } 5% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; }  6% { border-color: ${o} box-shadow:none; } 7% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 9%  { border-color: ${o} box-shadow:none; } 13% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 16% { border-color: ${o} ; box-shadow:none; } 18% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 22% { border-color: ${o} ; box-shadow:none; } 34% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 36% { border-color: ${o} ; box-shadow:none; } 54% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 100% { border-color: ${e} ; box-shadow:0 0 12px -1px ${e} inset; } } `,
        r += `@-moz-keyframes shop_${n} { 2% {  border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 3%  { border-color: ${o} ; box-shadow:none; } 5% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; }  6% { border-color: ${o} box-shadow:none; } 7% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 9%  { border-color: ${o} box-shadow:none; } 13% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 16% { border-color: ${o} ; box-shadow:none; } 18% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 22% { border-color: ${o} ; box-shadow:none; } 34% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 36% { border-color: ${o} ; box-shadow:none; } 54% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 100% { border-color: ${e} ; box-shadow:0 0 12px -1px ${e} inset; } } `,
        r += `@-o-keyframes shop_${n} { 2% {  border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 3%  { border-color: ${o} ; box-shadow:none; } 5% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; }  6% { border-color: ${o} box-shadow:none; } 7% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 9%  { border-color: ${o} box-shadow:none; } 13% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 16% { border-color: ${o} ; box-shadow:none; } 18% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 22% { border-color: ${o} ; box-shadow:none; } 34% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 36% { border-color: ${o} ; box-shadow:none; } 54% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 100% { border-color: ${e} ; box-shadow:0 0 12px -1px ${e} inset; } } `,
        r += `@-ms-keyframes shop_${n} { 2% {  border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 3%  { border-color: ${o} ; box-shadow:none; } 5% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; }  6% { border-color: ${o} box-shadow:none; } 7% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 9%  { border-color: ${o} box-shadow:none; } 13% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 16% { border-color: ${o} ; box-shadow:none; } 18% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 22% { border-color: ${o} ; box-shadow:none; } 34% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 36% { border-color: ${o} ; box-shadow:none; } 54% { border-color: ${e} ; box-shadow: 0 0 12px -1px ${e} inset; } 100% { border-color: ${e} ; box-shadow:0 0 12px -1px ${e} inset; } } `),
        t.className.indexOf('unit-btn_fade') === -1 && t.className.indexOf('unit-btn_copyfade') === -1 || !e || (r += `.global-banner .${n} .unit-btn {background: none; border: solid 2px ${e}; color: ${e}; }`),
        r.length > 0 && (this.hasGeneratedStyles = !0,
        this.stylesheet.appendChild(document.createTextNode(r)));
      }
    }]),
    t;
  }());
  n.default = r;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = (function () {
      function t(t, n) {
        for (let e = 0; e < n.length; e++) {
          const o = n[e];
          o.enumerable = o.enumerable || !1,
          o.configurable = !0,
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
        }
      }
      return function (n, e, o) {
        return e && t(n.prototype, e),
        o && t(n, o),
        n;
      };
    }()),
    r = s(e(1)),
    l = s(e(0)),
    a = s(e(15)),
    i = s(e(4));
  function s(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const c = (function (t) {
    function n() {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, n));
      const t = (function (t, n) {
        if (!t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); }
        return !n || typeof n !== 'object' && typeof n !== 'function' ? t : n;
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)));
      return t.eventManager = new i.default(),
      t;
    }
    return (function (t, n) {
      if (typeof n !== 'function' && n !== null) { throw new TypeError(`Super expression must either be null or a function, not ${typeof n}`); }
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }(n, r.default.PureComponent)),
    o(n, [{
      key: 'componentDidMount',
      value() {
        new a.default(document.getElementsByClassName('unit-message')).init();
      }
    }, {
      key: 'createMarkup',
      value(t) {
        return {
          __html: t
        };
      }
    }, {
      key: 'render',
      value() {
        return this.eventManager.triggerTargetEvent('globalBannerComplete'),
        r.default.createElement('div', {
          id: 'divGlobalBanner',
          dangerouslySetInnerHTML: this.createMarkup(this.props.content.content)
        });
      }
    }]),
    n;
  }());
  c.propTypes = {
    content: l.default.oneOfType([l.default.object, l.default.array]).isRequired
  },
  n.default = c;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  let o = (function () {
      function t(t, n) {
        for (let e = 0; e < n.length; e++) {
          const o = n[e];
          o.enumerable = o.enumerable || !1,
          o.configurable = !0,
          'value' in o && (o.writable = !0),
          Object.defineProperty(t, o.key, o);
        }
      }
      return function (n, e, o) {
        return e && t(n.prototype, e),
        o && t(n, o),
        n;
      };
    }()),
    r = p(e(1)),
    l = p(e(0)),
    a = p(e(7)),
    i = p(e(6)),
    s = p(e(8)),
    c = p(e(4));
  function p(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  const u = (function (t) {
    function n() {
      !(function (t, n) {
        if (!(t instanceof n)) { throw new TypeError('Cannot call a class as a function'); }
      }(this, n));
      const t = (function (t, n) {
        if (!t) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); }
        return !n || typeof n !== 'object' && typeof n !== 'function' ? t : n;
      }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)));
      return t.storage = new s.default('localStorage', 3e5),
      t.eventManager = new c.default(),
      t.contentAPISDK = new i.default(),
      t.state = {
        data: null
      },
      t;
    }
    return (function (t, n) {
      if (typeof n !== 'function' && n !== null) { throw new TypeError(`Super expression must either be null or a function, not ${typeof n}`); }
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }),
      n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
    }(n, r.default.Component)),
    o(n, [{
      key: 'componentDidMount',
      value() {
        this.setPropsAsContentAPIParameters(this.props),
        this.getBannerData(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value(t) {
        this.setPropsAsContentAPIParameters(t),
        this.getBannerData(t);
      }
    }, {
      key: 'componentDidUpdate',
      value() {}
    }, {
      key: 'getBannerData',
      value(t) {
        let n = this,
          e = this.getDataFromStorage();
        e ? this.setState({
          data: e
        }) : this.getDataFromAPI().then((t) => {
          n.setState({
            data: t
          });
        });
      }
    }, {
      key: 'getDataFromStorage',
      value() {
        const t = this.generateStorageKey();
        return this.storage.getValidatedContent(t);
      }
    }, {
      key: 'generateStorageKey',
      value() {
        return `globalBanner-${this.contentAPISDK.generateContentAPIURL()}`;
      }
    }, {
      key: 'setPropsAsContentAPIParameters',
      value(t) {
        this.contentAPISDK.setContextParameters({
          subscriptions: t.isPremier ? 'T' : 'F',
          country: t.browseCountry,
          store: t.store,
          lang: t.language
        });
      }
    }, {
      key: 'getDataFromAPI',
      value() {
        const t = this;
        return new Promise(((n) => {
          t.contentAPISDK.fetchContent().then((e) => {
            t.storage.setData(t.generateStorageKey(), e),
            n(e);
          }).catch((e) => {
            t.eventManager.triggerNewrelicEvent('globalBannerApiError', e),
            n(null);
          });
        })
        );
      }
    }, {
      key: 'render',
      value() {
        return this.state.data ? r.default.createElement(a.default, {
          content: this.state.data
        }) : null;
      }
    }]),
    n;
  }());
  u.propTypes = {
    store: l.default.string.isRequired,
    language: l.default.string.isRequired,
    isPremier: l.default.bool.isRequired,
    browseCountry: l.default.string.isRequired
  },
  n.default = u;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  });
  const o = 'http://localhost:5000/api/fashion/contentapi/v1/components';
  n.ENDPOINT = o;
},
function (t, n, e) {
  Object.defineProperty(n, '__esModule', {
    value: !0
  }),
  n.default = {
    small: '13px',
    medium: '14px',
    large: '16px',
    xlarge: '18px'
  };
},
function (t, n, e) {
  (n = t.exports = e(2)(!1)).push([t.i, '.src-GlobalBannerContentAPI-Button-Button_button{height:30px;font-size:13px;font-weight:700;width:100px;border-radius:0;display:block;border:2px solid #fff;box-sizing:border-box;line-height:26px;text-decoration:none;color:#fff;margin:9px 0;cursor:pointer;opacity:1;transition:opacity .8s ease}.src-GlobalBannerContentAPI-Button-Button_button:hover{opacity:.5;transition:opacity .8s ease}', '']),
  n.locals = {
    button: 'src-GlobalBannerContentAPI-Button-Button_button'
  };
},
function (t, n, e) {
  (n = t.exports = e(2)(!1)).push([t.i, '.src-GlobalBannerContentAPI-Column-Column_column{width:50%;background:#fff;text-align:center;line-height:15px;height:100%;float:left;box-sizing:border-box;position:relative}.src-GlobalBannerContentAPI-Column-Column_column:first-child{border-right:1px solid #ddd}.src-GlobalBannerContentAPI-Column-Column_column:only-child{border-right:none;width:100%}', '']),
  n.locals = {
    column: 'src-GlobalBannerContentAPI-Column-Column_column'
  };
},
function (t, n, e) {
  (n = t.exports = e(2)(!1)).push([t.i, '.src-GlobalBannerContentAPI-Content-Content_content{display:table-cell;vertical-align:middle;margin:auto;width:100%;height:100%;box-sizing:border-box}.src-GlobalBannerContentAPI-Content-Content_content a,.src-GlobalBannerContentAPI-Content-Content_content abbr,.src-GlobalBannerContentAPI-Content-Content_content address,.src-GlobalBannerContentAPI-Content-Content_content article,.src-GlobalBannerContentAPI-Content-Content_content aside,.src-GlobalBannerContentAPI-Content-Content_content audio,.src-GlobalBannerContentAPI-Content-Content_content b,.src-GlobalBannerContentAPI-Content-Content_content big,.src-GlobalBannerContentAPI-Content-Content_content blockquote,.src-GlobalBannerContentAPI-Content-Content_content canvas,.src-GlobalBannerContentAPI-Content-Content_content caption,.src-GlobalBannerContentAPI-Content-Content_content center,.src-GlobalBannerContentAPI-Content-Content_content dd,.src-GlobalBannerContentAPI-Content-Content_content del,.src-GlobalBannerContentAPI-Content-Content_content details,.src-GlobalBannerContentAPI-Content-Content_content dfn,.src-GlobalBannerContentAPI-Content-Content_content dl,.src-GlobalBannerContentAPI-Content-Content_content dt,.src-GlobalBannerContentAPI-Content-Content_content em,.src-GlobalBannerContentAPI-Content-Content_content embed,.src-GlobalBannerContentAPI-Content-Content_content fieldset,.src-GlobalBannerContentAPI-Content-Content_content figcaption,.src-GlobalBannerContentAPI-Content-Content_content figure,.src-GlobalBannerContentAPI-Content-Content_content footer,.src-GlobalBannerContentAPI-Content-Content_content form,.src-GlobalBannerContentAPI-Content-Content_content h1,.src-GlobalBannerContentAPI-Content-Content_content h2,.src-GlobalBannerContentAPI-Content-Content_content h3,.src-GlobalBannerContentAPI-Content-Content_content h4,.src-GlobalBannerContentAPI-Content-Content_content h5,.src-GlobalBannerContentAPI-Content-Content_content h6,.src-GlobalBannerContentAPI-Content-Content_content header,.src-GlobalBannerContentAPI-Content-Content_content hgroup,.src-GlobalBannerContentAPI-Content-Content_content i,.src-GlobalBannerContentAPI-Content-Content_content img,.src-GlobalBannerContentAPI-Content-Content_content label,.src-GlobalBannerContentAPI-Content-Content_content legend,.src-GlobalBannerContentAPI-Content-Content_content li,.src-GlobalBannerContentAPI-Content-Content_content mark,.src-GlobalBannerContentAPI-Content-Content_content menu,.src-GlobalBannerContentAPI-Content-Content_content nav,.src-GlobalBannerContentAPI-Content-Content_content ol,.src-GlobalBannerContentAPI-Content-Content_content output,.src-GlobalBannerContentAPI-Content-Content_content p,.src-GlobalBannerContentAPI-Content-Content_content pre,.src-GlobalBannerContentAPI-Content-Content_content q,.src-GlobalBannerContentAPI-Content-Content_content ruby,.src-GlobalBannerContentAPI-Content-Content_content s,.src-GlobalBannerContentAPI-Content-Content_content samp,.src-GlobalBannerContentAPI-Content-Content_content section,.src-GlobalBannerContentAPI-Content-Content_content small,.src-GlobalBannerContentAPI-Content-Content_content strike,.src-GlobalBannerContentAPI-Content-Content_content strong,.src-GlobalBannerContentAPI-Content-Content_content summary,.src-GlobalBannerContentAPI-Content-Content_content sup,.src-GlobalBannerContentAPI-Content-Content_content table,.src-GlobalBannerContentAPI-Content-Content_content tbody,.src-GlobalBannerContentAPI-Content-Content_content td,.src-GlobalBannerContentAPI-Content-Content_content tfoot,.src-GlobalBannerContentAPI-Content-Content_content th,.src-GlobalBannerContentAPI-Content-Content_content thead,.src-GlobalBannerContentAPI-Content-Content_content tr,.src-GlobalBannerContentAPI-Content-Content_content tt,.src-GlobalBannerContentAPI-Content-Content_content u,.src-GlobalBannerContentAPI-Content-Content_content ul,.src-GlobalBannerContentAPI-Content-Content_content var,.src-GlobalBannerContentAPI-Content-Content_content video{margin:0;padding:0;border:0;vertical-align:baseline}.src-GlobalBannerContentAPI-Content-Content_content article,.src-GlobalBannerContentAPI-Content-Content_content aside,.src-GlobalBannerContentAPI-Content-Content_content details,.src-GlobalBannerContentAPI-Content-Content_content figcaption,.src-GlobalBannerContentAPI-Content-Content_content figure,.src-GlobalBannerContentAPI-Content-Content_content footer,.src-GlobalBannerContentAPI-Content-Content_content header,.src-GlobalBannerContentAPI-Content-Content_content hgroup,.src-GlobalBannerContentAPI-Content-Content_content menu,.src-GlobalBannerContentAPI-Content-Content_content nav,.src-GlobalBannerContentAPI-Content-Content_content section{display:block}.src-GlobalBannerContentAPI-Content-Content_content ol,.src-GlobalBannerContentAPI-Content-Content_content ul{list-style:none}.src-GlobalBannerContentAPI-Content-Content_content blockquote,.src-GlobalBannerContentAPI-Content-Content_content q{quotes:none}.src-GlobalBannerContentAPI-Content-Content_content blockquote:after,.src-GlobalBannerContentAPI-Content-Content_content blockquote:before,.src-GlobalBannerContentAPI-Content-Content_content q:after,.src-GlobalBannerContentAPI-Content-Content_content q:before{content:""}.src-GlobalBannerContentAPI-Content-Content_content a{color:inherit;text-decoration:underline}.src-GlobalBannerContentAPI-Content-Content_content table{border-collapse:collapse;border-spacing:0}.src-GlobalBannerContentAPI-Content-Content_copy{text-align:center;max-width:661px;width:100%;display:inline-block;letter-spacing:.5px;vertical-align:middle;margin:auto;box-sizing:border-box}.src-GlobalBannerContentAPI-Content-Content_copy strong{font-weight:700;letter-spacing:2px}', '']),
  n.locals = {
    content: 'src-GlobalBannerContentAPI-Content-Content_content',
    copy: 'src-GlobalBannerContentAPI-Content-Content_copy'
  };
},
function (t, n, e) {
  (n = t.exports = e(2)(!1)).push([t.i, '.src-GlobalBannerContentAPI-GlobalBannerContentAPI_globalBanner{display:none}@media (min-width:768px){.src-GlobalBannerContentAPI-GlobalBannerContentAPI_globalBanner{width:100%;height:50px;min-height:50px;margin:0 auto;font-family:Futura-pt,Futura STD,Arial,Verdana,sans-serif;font-size:13px;letter-spacing:1px;display:block;position:relative;background-color:#fff;box-sizing:border-box;border-bottom:1px solid #ddd}.src-GlobalBannerContentAPI-GlobalBannerContentAPI_globalBanner:after{content:none}}', '']),
  n.locals = {
    globalBanner: 'src-GlobalBannerContentAPI-GlobalBannerContentAPI_globalBanner'
  };
},
function (t, n, e) {
  (n = t.exports = e(2)(!1)).push([t.i, '.src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperCenter,.src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperLeft,.src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperRight{position:absolute;top:50px;padding:0 16px;max-width:646px;width:100%;box-sizing:border-box;transition-property:opacity,visiblity;transition-delay:.2s;transition-duration:1s;transition-timing-function:ease;opacity:1;visibility:visible;z-index:100}.src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperCenter{max-width:100%;width:1366px;padding:0 16px}.src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperLeft{right:0;margin:0}.src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperRight{left:0;margin:0}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip{font-size:12px;letter-spacing:.5px;line-height:14px;background:#f2f2f2;padding:8px;text-align:center;box-shadow:3px 3px 0 hsla(0,0%,41%,.5);text-transform:none;box-sizing:border-box}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip:before{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #f2f2f2;position:absolute;top:-5px;margin:0 auto;left:0;right:0}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip a,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip abbr,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip address,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip article,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip aside,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip audio,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip b,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip big,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip blockquote,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip canvas,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip caption,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip center,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip dd,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip del,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip details,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip dfn,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip dl,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip dt,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip em,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip embed,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip fieldset,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip figcaption,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip figure,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip footer,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip form,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip h1,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip h2,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip h3,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip h4,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip h5,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip h6,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip header,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip hgroup,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip i,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip img,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip label,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip legend,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip li,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip mark,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip menu,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip nav,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip ol,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip output,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip p,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip pre,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip q,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip ruby,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip s,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip samp,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip section,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip small,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip strike,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip strong,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip summary,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip sup,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip table,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip tbody,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip td,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip tfoot,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip th,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip thead,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip tr,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip tt,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip u,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip ul,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip var,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip video{margin:0;padding:0;border:0;vertical-align:baseline}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip article,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip aside,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip details,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip figcaption,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip figure,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip footer,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip header,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip hgroup,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip menu,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip nav,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip section{display:block}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip ol,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip ul{list-style:none}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip blockquote,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip q{quotes:none}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip blockquote:after,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip blockquote:before,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip q:after,.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip q:before{content:""}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip a{color:inherit;text-decoration:underline}.src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip table{border-collapse:collapse;border-spacing:0}.src-GlobalBannerContentAPI-Tooltip-Tooltip_hidden{opacity:0;transition:opacity .4s,visibility .4s;visibility:hidden}@media (min-width:1366px){.src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperCenter{max-width:1366px;margin-left:-683px;left:50%;width:1366px;padding:0 32px}}', '']),
  n.locals = {
    wrapperCenter: 'src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperCenter',
    wrapperLeft: 'src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperLeft',
    wrapperRight: 'src-GlobalBannerContentAPI-Tooltip-Tooltip_wrapperRight',
    tooltip: 'src-GlobalBannerContentAPI-Tooltip-Tooltip_tooltip',
    hidden: 'src-GlobalBannerContentAPI-Tooltip-Tooltip_hidden'
  };
},
function (t, n, e) {
  (n = t.exports = e(2)(!1)).push([t.i, '.src-GlobalBannerContentAPI-Unit-Unit_unit,.src-GlobalBannerContentAPI-Unit-Unit_unitLink{padding:0 16px;box-sizing:border-box;text-align:center;width:100%;height:49px;display:table;position:relative;line-height:15px}.src-GlobalBannerContentAPI-Unit-Unit_unit{cursor:default}.src-GlobalBannerContentAPI-Unit-Unit_unitLink{cursor:pointer;opacity:1;transition:opacity .8s ease}.src-GlobalBannerContentAPI-Unit-Unit_unitLink:hover{opacity:.5;transition:opacity .8s ease}@media (min-width:1366px){.src-GlobalBannerContentAPI-Unit-Unit_unitLeft{width:661px;right:0;position:absolute}.src-GlobalBannerContentAPI-Unit-Unit_unitRight{width:661px;left:0;position:absolute}.src-GlobalBannerContentAPI-Unit-Unit_unitCenter{width:1366px;position:static;margin:0 auto;padding:0 32px}}', '']),
  n.locals = {
    unit: 'src-GlobalBannerContentAPI-Unit-Unit_unit',
    unitLink: 'src-GlobalBannerContentAPI-Unit-Unit_unitLink',
    unitLeft: 'src-GlobalBannerContentAPI-Unit-Unit_unitLeft',
    unitRight: 'src-GlobalBannerContentAPI-Unit-Unit_unitRight',
    unitCenter: 'src-GlobalBannerContentAPI-Unit-Unit_unitCenter'
  };
},
function (t, n, e) {
  let o = e(20);
  typeof o === 'string' && (o = [[t.i, o, '']]);
  const r = {
    singleton: !0,
    hmr: !0,
    transform: void 0
  };
  r.insertInto = undefined;
  e(3)(o, r);
  o.locals && (t.exports = o.locals);
},
function (t, n, e) {
  let o = e(21);
  typeof o === 'string' && (o = [[t.i, o, '']]);
  const r = {
    singleton: !0,
    hmr: !0,
    transform: void 0
  };
  r.insertInto = undefined;
  e(3)(o, r);
  o.locals && (t.exports = o.locals);
},
function (t, n, e) {
  let o = e(22);
  typeof o === 'string' && (o = [[t.i, o, '']]);
  const r = {
    singleton: !0,
    hmr: !0,
    transform: void 0
  };
  r.insertInto = undefined;
  e(3)(o, r);
  o.locals && (t.exports = o.locals);
},
function (t, n, e) {
  let o = e(23);
  typeof o === 'string' && (o = [[t.i, o, '']]);
  const r = {
    singleton: !0,
    hmr: !0,
    transform: void 0
  };
  r.insertInto = undefined;
  e(3)(o, r);
  o.locals && (t.exports = o.locals);
},
function (t, n, e) {
  let o = e(24);
  typeof o === 'string' && (o = [[t.i, o, '']]);
  const r = {
    singleton: !0,
    hmr: !0,
    transform: void 0
  };
  r.insertInto = undefined;
  e(3)(o, r);
  o.locals && (t.exports = o.locals);
},
function (t, n, e) {
  let o = e(25);
  typeof o === 'string' && (o = [[t.i, o, '']]);
  const r = {
    singleton: !0,
    hmr: !0,
    transform: void 0
  };
  r.insertInto = undefined;
  e(3)(o, r);
  o.locals && (t.exports = o.locals);
},
function (t, n) {
  t.exports = function (t) {
    const n = typeof window !== 'undefined' && window.location;
    if (!n) { throw new Error('fixUrls requires window.location'); }
    if (!t || typeof t !== 'string') { return t; }
    let e = `${n.protocol}//${n.host}`,
      o = e + n.pathname.replace(/\/[^\/]*$/, '/');
    return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (t, n) => {
      let r,
        l = n.trim().replace(/^"(.*)"$/, (t, n) => n).replace(/^'(.*)'$/, (t, n) => n);
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l) ? t : (r = l.indexOf('//') === 0 ? l : l.indexOf('/') === 0 ? e + l : o + l.replace(/^\.\//, ''),
      `url(${JSON.stringify(r)})`);
    });
  };
},
function (t, n) {
  t.exports = require('base64url');
},
function (t, n) {
  t.exports = require('isomorphic-fetch');
}
]))));
