"use strict";

/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #1 - September 4, 2014
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path[, domain]])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookies = {
  getItem: function getItem(sKey) {
    if (!sKey) {
      return null;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function removeItem(sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) {
      return false;
    }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function hasItem(sKey) {
    if (!sKey) {
      return false;
    }
    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
  },
  keys: function keys() {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  }
};
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! lazysizes - v4.0.1 */
!function (a, b) {
  var c = b(a, a.document);a.lazySizes = c, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = c);
}(window, function (a, b) {
  "use strict";
  if (b.getElementsByClassName) {
    var c,
        d,
        e = b.documentElement,
        f = a.Date,
        g = a.HTMLPictureElement,
        h = "addEventListener",
        i = "getAttribute",
        j = a[h],
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        p = {},
        q = Array.prototype.forEach,
        r = function r(a, b) {
      return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b];
    },
        s = function s(a, b) {
      r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
    },
        t = function t(a, b) {
      var c;(c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
    },
        u = function u(a, b, c) {
      var d = c ? h : "removeEventListener";c && u(a, b), o.forEach(function (c) {
        a[d](c, b);
      });
    },
        v = function v(a, d, e, f, g) {
      var h = b.createEvent("CustomEvent");return e || (e = {}), e.instance = c, h.initCustomEvent(d, !f, !g, e), a.dispatchEvent(h), h;
    },
        w = function w(b, c) {
      var e;!g && (e = a.picturefill || d.pf) ? e({ reevaluate: !0, elements: [b] }) : c && c.src && (b.src = c.src);
    },
        x = function x(a, b) {
      return (getComputedStyle(a, null) || {})[b];
    },
        y = function y(a, b, c) {
      for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) {
        c = b.offsetWidth, b = b.parentNode;
      }return c;
    },
        z = function () {
      var a,
          c,
          d = [],
          e = [],
          f = d,
          g = function g() {
        var b = f;for (f = d.length ? e : d, a = !0, c = !1; b.length;) {
          b.shift()();
        }a = !1;
      },
          h = function h(d, e) {
        a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)));
      };return h._lsFlush = g, h;
    }(),
        A = function A(a, b) {
      return b ? function () {
        z(a);
      } : function () {
        var b = this,
            c = arguments;z(function () {
          a.apply(b, c);
        });
      };
    },
        B = function B(a) {
      var b,
          c = 0,
          e = 125,
          g = d.ricTimeout,
          h = function h() {
        b = !1, c = f.now(), a();
      },
          i = m && d.ricTimeout ? function () {
        m(h, { timeout: g }), g !== d.ricTimeout && (g = d.ricTimeout);
      } : A(function () {
        k(h);
      }, !0);return function (a) {
        var d;(a = a === !0) && (g = 33), b || (b = !0, d = e - (f.now() - c), 0 > d && (d = 0), a || 9 > d && m ? i() : k(i, d));
      };
    },
        C = function C(a) {
      var b,
          c,
          d = 99,
          e = function e() {
        b = null, a();
      },
          g = function g() {
        var a = f.now() - c;d > a ? k(g, d - a) : (m || e)(e);
      };return function () {
        c = f.now(), b || (b = k(g, d));
      };
    };!function () {
      var b,
          c = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2, loadHidden: !0, ricTimeout: 300 };d = a.lazySizesConfig || a.lazysizesConfig || {};for (b in c) {
        b in d || (d[b] = c[b]);
      }a.lazySizesConfig = d, k(function () {
        d.init && F();
      });
    }();var D = function () {
      var g,
          l,
          m,
          o,
          p,
          y,
          D,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M = /^img$/i,
          N = /^iframe$/i,
          O = "onscroll" in a && !/glebot/.test(navigator.userAgent),
          P = 0,
          Q = 0,
          R = 0,
          S = -1,
          T = function T(a) {
        R--, a && a.target && u(a.target, T), (!a || 0 > R || !a.target) && (R = 0);
      },
          U = function U(a, c) {
        var d,
            f = a,
            g = "hidden" == x(b.body, "visibility") || "hidden" != x(a, "visibility");for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;) {
          g = (x(f, "opacity") || 1) > 0, g && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
        }return g;
      },
          V = function V() {
        var a,
            f,
            h,
            j,
            k,
            m,
            n,
            p,
            q,
            r = c.elements;if ((o = d.loadMode) && 8 > R && (a = r.length)) {
          f = 0, S++, null == K && ("expand" in d || (d.expand = e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370), J = d.expand, K = J * d.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;for (; a > f; f++) {
            if (r[f] && !r[f]._lazyRace) if (O) {
              if ((p = r[f][i]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (y = innerWidth + m * L, D = innerHeight + m, n = -1 * m, q = m), h = r[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * L && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || "hidden" != x(r[f], "visibility")) && (l && 3 > R && !p && (3 > o || 4 > S) || U(r[f], m))) {
                if (ba(r[f]), k = !0, R > 9) break;
              } else !k && l && !j && 4 > R && 4 > S && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != r[f][i](d.sizesAttr))) && (j = g[0] || r[f]);
            } else ba(r[f]);
          }j && !k && ba(j);
        }
      },
          W = B(V),
          X = function X(a) {
        s(a.target, d.loadedClass), t(a.target, d.loadingClass), u(a.target, Z), v(a.target, "lazyloaded");
      },
          Y = A(X),
          Z = function Z(a) {
        Y({ target: a.target });
      },
          $ = function $(a, b) {
        try {
          a.contentWindow.location.replace(b);
        } catch (c) {
          a.src = b;
        }
      },
          _ = function _(a) {
        var b,
            c = a[i](d.srcsetAttr);(b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c);
      },
          aa = A(function (a, b, c, e, f) {
        var g, h, j, l, o, p;(o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = { target: a }, p && (u(a, T, !0), clearTimeout(m), m = k(T, 2500), s(a, d.loadingClass), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, { src: g })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () {
          (!p || a.complete && a.naturalWidth > 1) && (p ? T(o) : R--, X(o));
        }, !0);
      }),
          ba = function ba(a) {
        var b,
            c = M.test(a.nodeName),
            e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
            f = "auto" == e;(!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, c));
      },
          ca = function ca() {
        if (!l) {
          if (f.now() - p < 999) return void k(ca, 999);var a = C(function () {
            d.loadMode = 3, W();
          });l = !0, d.loadMode = 3, W(), j("scroll", function () {
            3 == d.loadMode && (d.loadMode = 2), a();
          }, !0);
        }
      };return { _: function _() {
          p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), L = d.hFac, j("scroll", W, !0), j("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(e, { childList: !0, subtree: !0, attributes: !0 }) : (e[h]("DOMNodeInserted", W, !0), e[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {
            b[h](a, W, !0);
          }), /d$|^c/.test(b.readyState) ? ca() : (j("load", ca), b[h]("DOMContentLoaded", W), k(ca, 2e4)), c.elements.length ? (V(), z._lsFlush()) : W();
        }, checkElems: W, unveil: ba };
    }(),
        E = function () {
      var a,
          c = A(function (a, b, c, d) {
        var e, f, g;if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) {
          e[f].setAttribute("sizes", d);
        }c.detail.dataAttr || w(a, c.detail);
      }),
          e = function e(a, b, d) {
        var e,
            f = a.parentNode;f && (d = y(a, f, d), e = v(a, "lazybeforesizes", { width: d, dataAttr: !!b }), e.defaultPrevented || (d = e.detail.width, d && d !== a._lazysizesWidth && c(a, f, e, d)));
      },
          f = function f() {
        var b,
            c = a.length;if (c) for (b = 0; c > b; b++) {
          e(a[b]);
        }
      },
          g = C(f);return { _: function _() {
          a = b.getElementsByClassName(d.autosizesClass), j("resize", g);
        }, checkElems: g, updateElem: e };
    }(),
        F = function F() {
      F.i || (F.i = !0, E._(), D._());
    };return c = { cfg: d, autoSizer: E, loader: D, init: F, uP: w, aC: s, rC: t, hC: r, fire: v, gW: y, rAF: z };
  }
});
'use strict';

(function (window) {

  var hostname = window.location.hostname === 'localhost' ? null : window.location.hostname;

  /**
  * @function init
  * @memberOf notices
  */
  var init = function init() {
    hideNotices();
    bindEvents();
  };

  /**
  * @function hideNotices
  * @memberOf notices
  */
  var hideNotices = function hideNotices() {
    if (!docCookies.hasItem('browserNoticeDismissed')) {
      document.body.className += ' browser-notice-active';
    }

    if (!docCookies.hasItem('cssNoticeDismissed')) {
      document.body.className += ' css-notice-active';
    }
  };

  /**
  * @function bindEvents
  * @memberOf notices
  */
  var bindEvents = function bindEvents() {
    var buttons = document.getElementsByClassName('js-close-notice');

    for (var i = 0; i < buttons.length; ++i) {
      buttons[i].addEventListener('click', closeNotice);
      buttons[i].addEventListener('click', setCookie);
    }
  };

  /**
  * @function closeNotice
  * @memberof notices
  */
  var closeNotice = function closeNotice(button) {
    var notice = button.target.parentNode;

    notice.style.display = 'none';
  };

  /**
  * @function setCookie
  * @memberof notices
  * @todo set cookie with docCookies
  */
  var setCookie = function setCookie(button) {
    var noticeName = button.target.parentNode.classList[1].replace('support-notice--', '');

    docCookies.setItem(noticeName + 'NoticeDismissed', true, 'Fri, 31 Dec 9999 23:59:59 GMT', '/', hostname);
  };

  init();
})(window);
"use strict";

/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
  var e = /\blang(?:uage)?-(\w+)\b/i,
      t = 0,
      n = _self.Prism = { manual: _self.Prism && _self.Prism.manual, util: { encode: function encode(e) {
        return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      }, type: function type(e) {
        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
      }, objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id;
      }, clone: function clone(e) {
        var t = n.util.type(e);switch (t) {case "Object":
            var a = {};for (var r in e) {
              e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
            }return a;case "Array":
            return e.map && e.map(function (e) {
              return n.util.clone(e);
            });}return e;
      } }, languages: { extend: function extend(e, t) {
        var a = n.util.clone(n.languages[e]);for (var r in t) {
          a[r] = t[r];
        }return a;
      }, insertBefore: function insertBefore(e, t, a, r) {
        r = r || n.languages;var l = r[e];if (2 == arguments.length) {
          a = arguments[1];for (var i in a) {
            a.hasOwnProperty(i) && (l[i] = a[i]);
          }return l;
        }var o = {};for (var s in l) {
          if (l.hasOwnProperty(s)) {
            if (s == t) for (var i in a) {
              a.hasOwnProperty(i) && (o[i] = a[i]);
            }o[s] = l[s];
          }
        }return n.languages.DFS(n.languages, function (t, n) {
          n === r[e] && t != e && (this[t] = o);
        }), r[e] = o;
      }, DFS: function DFS(e, t, a, r) {
        r = r || {};for (var l in e) {
          e.hasOwnProperty(l) && (t.call(e, l, e[l], a || l), "Object" !== n.util.type(e[l]) || r[n.util.objId(e[l])] ? "Array" !== n.util.type(e[l]) || r[n.util.objId(e[l])] || (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, r)) : (r[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, r)));
        }
      } }, plugins: {}, highlightAll: function highlightAll(e, t) {
      var a = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };n.hooks.run("before-highlightall", a);for (var r, l = a.elements || document.querySelectorAll(a.selector), i = 0; r = l[i++];) {
        n.highlightElement(r, e === !0, a.callback);
      }
    }, highlightElement: function highlightElement(t, a, r) {
      for (var l, i, o = t; o && !e.test(o.className);) {
        o = o.parentNode;
      }o && (l = (o.className.match(e) || [, ""])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l);var s = t.textContent,
          u = { element: t, language: l, grammar: i, code: s };if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar) return u.code && (u.element.textContent = u.code), n.hooks.run("complete", u), void 0;if (n.hooks.run("before-highlight", u), a && _self.Worker) {
        var g = new Worker(n.filename);g.onmessage = function (e) {
          u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
        }, g.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 }));
      } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u);
    }, highlight: function highlight(e, t, r) {
      var l = n.tokenize(e, t);return a.stringify(n.util.encode(l), r);
    }, tokenize: function tokenize(e, t) {
      var a = n.Token,
          r = [e],
          l = t.rest;if (l) {
        for (var i in l) {
          t[i] = l[i];
        }delete t.rest;
      }e: for (var i in t) {
        if (t.hasOwnProperty(i) && t[i]) {
          var o = t[i];o = "Array" === n.util.type(o) ? o : [o];for (var s = 0; s < o.length; ++s) {
            var u = o[s],
                g = u.inside,
                c = !!u.lookbehind,
                h = !!u.greedy,
                f = 0,
                d = u.alias;if (h && !u.pattern.global) {
              var p = u.pattern.toString().match(/[imuy]*$/)[0];u.pattern = RegExp(u.pattern.source, p + "g");
            }u = u.pattern || u;for (var m = 0, y = 0; m < r.length; y += r[m].length, ++m) {
              var v = r[m];if (r.length > e.length) break e;if (!(v instanceof a)) {
                u.lastIndex = 0;var b = u.exec(v),
                    k = 1;if (!b && h && m != r.length - 1) {
                  if (u.lastIndex = y, b = u.exec(e), !b) break;for (var w = b.index + (c ? b[1].length : 0), _ = b.index + b[0].length, P = m, A = y, j = r.length; j > P && _ > A; ++P) {
                    A += r[P].length, w >= A && (++m, y = A);
                  }if (r[m] instanceof a || r[P - 1].greedy) continue;k = P - m, v = e.slice(y, A), b.index -= y;
                }if (b) {
                  c && (f = b[1].length);var w = b.index + f,
                      b = b[0].slice(f),
                      _ = w + b.length,
                      x = v.slice(0, w),
                      O = v.slice(_),
                      S = [m, k];x && S.push(x);var N = new a(i, g ? n.tokenize(b, g) : b, d, b, h);S.push(N), O && S.push(O), Array.prototype.splice.apply(r, S);
                }
              }
            }
          }
        }
      }return r;
    }, hooks: { all: {}, add: function add(e, t) {
        var a = n.hooks.all;a[e] = a[e] || [], a[e].push(t);
      }, run: function run(e, t) {
        var a = n.hooks.all[e];if (a && a.length) for (var r, l = 0; r = a[l++];) {
          r(t);
        }
      } } },
      a = n.Token = function (e, t, n, a, r) {
    this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, this.greedy = !!r;
  };if (a.stringify = function (e, t, r) {
    if ("string" == typeof e) return e;if ("Array" === n.util.type(e)) return e.map(function (n) {
      return a.stringify(n, t, e);
    }).join("");var l = { type: e.type, content: a.stringify(e.content, t, r), tag: "span", classes: ["token", e.type], attributes: {}, language: t, parent: r };if ("comment" == l.type && (l.attributes.spellcheck = "true"), e.alias) {
      var i = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];Array.prototype.push.apply(l.classes, i);
    }n.hooks.run("wrap", l);var o = Object.keys(l.attributes).map(function (e) {
      return e + '="' + (l.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");return "<" + l.tag + ' class="' + l.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + l.content + "</" + l.tag + ">";
  }, !_self.document) return _self.addEventListener ? (_self.addEventListener("message", function (e) {
    var t = JSON.parse(e.data),
        a = t.language,
        r = t.code,
        l = t.immediateClose;_self.postMessage(n.highlight(r, n.languages[a], a)), l && _self.close();
  }, !1), _self.Prism) : _self.Prism;var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();return r && (n.filename = r.src, !document.addEventListener || n.manual || r.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism;
}();"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\w\W]*?-->/, prolog: /<\?[\w\W]+?\?>/, doctype: /<!DOCTYPE[\w\W]+?>/i, cdata: /<!\[CDATA\[[\w\W]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: { punctuation: /[=>"']/ } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = { comment: /\/\*[\w\W]*?\*\//, atrule: { pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i, selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/, string: { pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, property: /(\b|\B)[\w-]+(?=\s*:)/i, important: /\B!important\b/i, "function": /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:]/ }, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", { style: { pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i, lookbehind: !0, inside: Prism.languages.css, alias: "language-css" } }), Prism.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|').*?\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: Prism.languages.css } }, alias: "language-css" } }, Prism.languages.markup.tag));
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }], string: { pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i, lookbehind: !0, inside: { punctuation: /(\.|\\)/ } }, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, "boolean": /\b(true|false)\b/, "function": /[a-z0-9_]+(?=\()/i, number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/, number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/, "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/ }), Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0, greedy: !0 } }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\\\|\\?[^\\])*?`/, greedy: !0, inside: { interpolation: { pattern: /\$\{[^}]+\}/, inside: { "interpolation-punctuation": { pattern: /^\$\{|\}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", { script: { pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i, lookbehind: !0, inside: Prism.languages.javascript, alias: "language-javascript" } }), Prism.languages.js = Prism.languages.javascript;
'use strict';

(function (event) {

  'use strict';

  window.obj = {};

  // ==============================================
  //    Configuration
  // ==============================================
  obj.config = {
    elements: {
      body: 'body',
      logo: '[data-logo]',
      nav: '[data-navigation]',
      navList: '[data-navigation-list]',
      navItem: '[data-nav-item]',
      navItemActive: '[data-nav-item-active]',
      navTrigger: '[data-navigation-trigger]',
      fade: '[data-fade]',
      fadeDelay: 'data-fade-delay',
      image: '[data-lazy]',
      infoBlockPicture: '[data-info-block-picture]'
    },
    classes: {
      bodyNavOpen: 'body--nav-open',
      logoWhite: 'logo--white',
      navOpen: 'nav--open',
      navListUnload: 'nav__list--unload',
      navItemActive: 'nav__item--active',
      navTriggerActive: 'button--nav-active',
      hideElement: 'hide',
      fadeInElement: 'fade-in',
      lazyload: 'lazyload__image--lazy',
      lazyloaded: 'lazyload__image--loaded',
      imageLoaded: 'lazyload--image-loaded'
    }
  };

  // ==============================================
  //    Initialise
  // ==============================================
  obj.init = function (event) {
    obj.html = document.documentElement;
    obj.body = document.querySelector(obj.config.elements.body);
    obj.logo = document.querySelector(obj.config.elements.logo);
    obj.nav = document.querySelector(obj.config.elements.nav);
    obj.navItem = document.querySelectorAll(obj.config.elements.navItem);
    obj.navItemActive = document.querySelector(obj.config.elements.navItemActive);
    obj.navList = document.querySelector(obj.config.elements.navList);
    obj.mobileNavTrigger = document.querySelector(obj.config.elements.navTrigger);
    obj.fade = document.querySelectorAll(obj.config.elements.fade);
    obj.image = document.querySelectorAll(obj.config.elements.image);
    obj.infoBlockPicture = document.querySelector(obj.config.elements.infoBlockPicture);
    obj.attachMethods();
    obj.attachListeners();
  };

  // ==============================================
  //    Attach methods
  // ==============================================
  obj.attachMethods = function () {
    obj.lazyloadConfig();
    obj.fadeElementsOnScroll();
    obj.handleAciveNavItem();
    obj.activeMenuMouseLeave();
  };

  // ==============================================
  //    Attach event listeners
  // ==============================================
  obj.attachListeners = function (event) {
    window.addEventListener('scroll', obj.fadeElementsOnScroll);
    window.addEventListener('resize', obj.handleLazyImageSizes);

    Array.from(obj.image).map(function (el) {
      el.addEventListener('lazyloaded', function (el) {
        return obj.lazyLoadImages(el);
      });
      el.addEventListener('lazybeforeunveil', function (el) {
        return obj.loadImages(el);
      });
    });

    if (window.innerWidth < 768) {
      obj.mobileNavTrigger.addEventListener('click', obj.triggerMobileNav);
      obj.nav.addEventListener('touchmove', obj.preventMobileNavScroll);
    } else {
      Array.from(obj.navItem).map(function (el) {
        el.parentNode.addEventListener('mouseover', obj.activeMenuMouseOver);
        el.parentNode.addEventListener('mouseleave', obj.activeMenuMouseLeave);
        el.addEventListener('focus', obj.activeMenuFocus);
      });
    }
  };

  // ==============================================
  //    Lazy load configuration
  // ==============================================
  obj.lazyloadConfig = function () {
    window.lazySizesConfig.lazyClass = obj.config.classes.lazyload;
    window.lazySizesConfig.loadedClass = obj.config.classes.lazyloaded;
    window.lazySizesConfig.expand = 50;
  };

  // ==============================================
  //    Fade in elements when in viewport
  // ==============================================
  obj.fadeElementsOnScroll = function () {
    Array.from(obj.fade).map(function (el) {
      var objectPosition = el.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (objectPosition - windowHeight <= 0) {
        el.classList.remove(obj.config.classes.hideElement);
        el.classList.add(obj.config.classes.fadeInElement);
        el.style.transitionDelay = el.getAttribute(obj.config.elements.fadeDelay);
      }
    });
  };

  // ==============================================
  //    Add active class to correct nav item
  // ==============================================
  obj.handleAciveNavItem = function () {
    Array.from(obj.navItem).map(function (el) {
      if (window.location.pathname.indexOf(el.getAttribute('href')) === 0) {
        el.classList.add(obj.config.classes.navLinkctive);
        el.parentNode.classList.add(obj.config.classes.navItemActive);
      }
    });
  };

  // ==============================================
  //    Mobile menu trigger
  // ==============================================
  obj.triggerMobileNav = function () {
    obj.triggerMobileNavAnimation();
    obj.body.classList.toggle(obj.config.classes.bodyNavOpen);
    obj.html.classList.toggle(obj.config.classes.bodyNavOpen);
    obj.nav.classList.add(obj.config.classes.navOpen);
    obj.mobileNavTrigger.classList.toggle(obj.config.classes.navTriggerActive);

    if (window.location.pathname === '/') {
      obj.logo.classList.toggle(obj.config.classes.logoWhite);
    }
  };

  obj.triggerMobileNavAnimation = function () {
    if (obj.nav.classList.contains(obj.config.classes.navOpen)) {
      obj.navList.classList.add(obj.config.classes.navListUnload);

      obj.navAnimationTimer = setTimeout(function () {
        obj.nav.classList.remove(obj.config.classes.navOpen);
        obj.navList.classList.remove(obj.config.classes.navListUnload);
        clearTimeout(obj.navAnimationTimer);
      }, 850);
    }
  };

  obj.preventMobileNavScroll = function (ev) {
    if (obj.nav.classList.contains(obj.config.classes.navOpen)) {
      ev.preventDefault();
    }
  };

  // ==============================================
  //    Desktop nav item on hover/focus
  // ==============================================
  obj.activeMenuMouseOver = function (el) {
    el = el.currentTarget;

    obj.navItemActive.style.left = el.firstChild.offsetLeft + 'px';
    obj.navItemActive.style.width = el.firstChild.clientWidth + 'px';
  };

  obj.activeMenuFocus = function (el) {
    el = el.currentTarget;

    obj.navItemActive.style.left = el.offsetLeft + 'px';
    obj.navItemActive.style.width = el.clientWidth + 'px';
  };

  obj.activeMenuMouseLeave = function () {
    var navItemActiveClass = document.querySelectorAll('.' + obj.config.classes.navItemActive);

    if (navItemActiveClass.length > 0) {
      var activeNavItem = navItemActiveClass[0];

      obj.navItemActive.style.left = activeNavItem.firstChild.offsetLeft + 'px';
      obj.navItemActive.style.width = activeNavItem.firstChild.clientWidth + 'px';
    } else {
      obj.navItemActive.style.left = '0px';
      obj.navItemActive.style.width = '0px';
    }
  };

  // ==============================================
  //    Resize lazy images on orientation
  // ==============================================
  obj.handleLazyImageSizes = function () {
    Array.from(obj.image).map(function (el) {
      obj.delayImageResize = setTimeout(function () {
        var width = el.naturalWidth;
        var height = el.naturalHeight;
        var ratio = (Math.round(height) / Math.round(width) * 100).toFixed(2);

        el.parentNode.style.paddingTop = ratio.replace('.00', '') + '%';

        if (window.innerWidth >= 992 && document.body.contains(obj.infoBlockPicture)) {
          obj.infoBlockPicture.style.paddingTop = '';
        }

        clearTimeout(obj.delayImageResize);
      }, 10);
    });
  };

  // ==============================================
  //    Lazy load images
  // ==============================================
  obj.lazyLoadImages = function (el) {
    el = el.currentTarget;

    var width = el.naturalWidth;
    var height = el.naturalHeight;
    var ratio = (Math.round(height) / Math.round(width) * 100).toFixed(2);

    el.parentNode.style.paddingTop = ratio.replace('.00', '') + '%';

    if (window.innerWidth >= 992 && document.body.contains(obj.infoBlockPicture)) {
      obj.infoBlockPicture.style.paddingTop = '';
    }
  };

  obj.loadImages = function (el) {
    el = el.currentTarget;

    el.parentNode.classList.add(obj.config.classes.imageLoaded);
    el.removeEventListener('lazybeforeunveil', obj.loadImages);
  };

  window.addEventListener('DOMContentLoaded', obj.init(event));
})();
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "function" == typeof define && define.amd ? define([], e()) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : function n() {
    t = document || document.body;document && document.body ? t.zenscroll = e() : setTimeout(n, 9);
  }();
}(undefined, function () {
  "use strict";
  var t = function t(_t) {
    return "getComputedStyle" in window && "smooth" === window.getComputedStyle(_t)["scroll-behavior"];
  };if ("undefined" == typeof window || !("document" in window)) return {};var e = function e(_e, n, o) {
    n = n || 999, o || 0 === o || (o = 9);var i,
        r = function r(t) {
      i = t;
    },
        u = function u() {
      clearTimeout(i), r(0);
    },
        c = function c(t) {
      return Math.max(0, _e.getTopOf(t) - o);
    },
        f = function f(o, i, c) {
      if (u(), 0 === i || i && i < 0 || t(_e.body)) _e.toY(o), c && c();else {
        var f = _e.getY(),
            a = Math.max(0, o) - f,
            l = new Date().getTime();i = i || Math.min(Math.abs(a), n), function t() {
          r(setTimeout(function () {
            var n = Math.min(1, (new Date().getTime() - l) / i),
                o = Math.max(0, Math.floor(f + a * (n < .5 ? 2 * n * n : n * (4 - 2 * n) - 1)));_e.toY(o), n < 1 && _e.getHeight() + o < _e.body.scrollHeight ? t() : (setTimeout(u, 99), c && c());
          }, 9));
        }();
      }
    },
        a = function a(t, e, n) {
      f(c(t), e, n);
    },
        l = function l(t, n, i) {
      var r = t.getBoundingClientRect().height,
          u = _e.getTopOf(t) + r,
          l = _e.getHeight(),
          s = _e.getY(),
          d = s + l;c(t) < s || r + o > l ? a(t, n, i) : u + o > d ? f(u - l + o, n, i) : i && i();
    },
        s = function s(t, n, o, i) {
      f(Math.max(0, _e.getTopOf(t) - _e.getHeight() / 2 + (o || t.getBoundingClientRect().height / 2)), n, i);
    };return { setup: function setup(t, e) {
        return (0 === t || t) && (n = t), (0 === e || e) && (o = e), { defaultDuration: n, edgeOffset: o };
      }, to: a, toY: f, intoView: l, center: s, stop: u, moving: function moving() {
        return !!i;
      }, getY: _e.getY, getTopOf: _e.getTopOf };
  },
      n = document.documentElement,
      o = function o() {
    return window.scrollY || n.scrollTop;
  },
      i = e({ body: document.scrollingElement || document.body, toY: function toY(t) {
      window.scrollTo(0, t);
    }, getY: o, getHeight: function getHeight() {
      return window.innerHeight || n.clientHeight;
    }, getTopOf: function getTopOf(t) {
      return t.getBoundingClientRect().top + o() - n.offsetTop;
    } });if (i.createScroller = function (t, o, i) {
    return e({ body: t, toY: function toY(e) {
        t.scrollTop = e;
      }, getY: function getY() {
        return t.scrollTop;
      }, getHeight: function getHeight() {
        return Math.min(t.clientHeight, window.innerHeight || n.clientHeight);
      }, getTopOf: function getTopOf(t) {
        return t.offsetTop;
      } }, o, i);
  }, "addEventListener" in window && !window.noZensmooth && !t(document.body)) {
    var r = "scrollRestoration" in history;r && (history.scrollRestoration = "auto"), window.addEventListener("load", function () {
      r && (setTimeout(function () {
        history.scrollRestoration = "manual";
      }, 9), window.addEventListener("popstate", function (t) {
        t.state && "zenscrollY" in t.state && i.toY(t.state.zenscrollY);
      }, !1)), window.location.hash && setTimeout(function () {
        var t = i.setup().edgeOffset;if (t) {
          var e = document.getElementById(window.location.href.split("#")[1]);if (e) {
            var n = Math.max(0, i.getTopOf(e) - t),
                o = i.getY() - n;0 <= o && o < 9 && window.scrollTo(0, n);
          }
        }
      }, 9);
    }, !1);var u = new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click", function (t) {
      for (var e = t.target; e && "A" !== e.tagName;) {
        e = e.parentNode;
      }if (!(!e || 1 !== t.which || t.shiftKey || t.metaKey || t.ctrlKey || t.altKey)) {
        if (r) try {
          history.replaceState({ zenscrollY: i.getY() }, "");
        } catch (t) {}var n = e.getAttribute("href") || "";if (0 === n.indexOf("#") && !u.test(e.className)) {
          var o = 0,
              c = document.getElementById(n.substring(1));if ("#" !== n) {
            if (!c) return;o = i.getTopOf(c);
          }t.preventDefault();var f = function f() {
            window.location = n;
          },
              a = i.setup().edgeOffset;a && (o = Math.max(0, o - a), f = function f() {
            history.pushState(null, "", n);
          }), i.toY(o, null, f);
        }
      }
    }, !1);
  }return i;
});
//# sourceMappingURL=main.js.map
