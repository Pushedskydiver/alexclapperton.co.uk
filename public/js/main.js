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

/*!
 * tota11y v0.1.3
 * http://khan.github.io/tota11y
 *
 * Includes Accessibility Developer Tools
 * http://github.com/GoogleChrome/accessibility-developer-tools
 *
 * Copyright (c) 2015 Khan Academy
 * Released under the MIT license
 * http://github.com/Khan/tota11y/blob/master/LICENSE.txt
 *
 * Date: 2015-11-23
 *
 */
!function (e) {
	function t(r) {
		if (n[r]) return n[r].exports;var a = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports;
	}var n = {};return t.m = e, t.c = n, t.p = "", t(0);
}([function (e, t, n) {
	(function (e) {
		"use strict";
		function t(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}var r = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
				}
			}return function (t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t;
			};
		}();n(43);var a = n(1),
		    o = n(17),
		    i = n(35);n(41);var s = function () {
			function n() {
				t(this, n), this.activePlugin = null;
			}return r(n, [{ key: "handlePluginClick", value: function value(e) {
					e === this.activePlugin ? (e.deactivate(), this.activePlugin = null) : (this.activePlugin && this.activePlugin.deactivate(), e.activate(), this.activePlugin = e);
				} }, { key: "appendTo", value: function value(t) {
					var n = this,
					    r = a(i()),
					    s = void 0,
					    l = o["default"].map(function (t) {
						return e(t, { onClick: n.handlePluginClick.bind(n) });
					}),
					    u = null;o.experimental.length && (u = e("div", null, e("div", { className: "tota11y-plugins-separator" }, "Experimental"), o.experimental.map(function (t) {
						return e(t, { onClick: n.handlePluginClick.bind(n) });
					})));var c = e("div", { className: "tota11y-plugins" }, l, u),
					    p = function p(e) {
						e.preventDefault(), e.stopPropagation(), s.toggleClass("tota11y-expanded"), s.attr("aria-expanded", s.is(".tota11y-expanded"));
					},
					    d = e("button", { "aria-controls": "tota11y-toolbar", className: "tota11y-toolbar-toggle", onClick: p, "aria-label": "[tota11y] Toggle menu" }, e("div", { "aria-hidden": "true", className: "tota11y-toolbar-logo" }, r));s = e("div", { id: "tota11y-toolbar", className: "tota11y tota11y-toolbar", role: "region", "aria-expanded": "false" }, e("div", { className: "tota11y-toolbar-body" }, c), d), t.append(s);
				} }]), n;
		}();a(function () {
			var e = new s();e.appendTo(a("body"));
		});
	}).call(t, n(4));
}, function (e, t, n) {
	var r, a; /*!
           * jQuery JavaScript Library v2.1.4
           * http://jquery.com/
           *
           * Includes Sizzle.js
           * http://sizzlejs.com/
           *
           * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
           * Released under the MIT license
           * http://jquery.org/license
           *
           * Date: 2015-04-28T16:01Z
           */
	!function (t, n) {
		"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.exports) ? e.exports = t.document ? n(t, !0) : function (e) {
			if (!e.document) throw new Error("jQuery requires a window with a document");return n(e);
		} : n(t);
	}("undefined" != typeof window ? window : this, function (n, o) {
		function i(e) {
			var t = "length" in e && e.length,
			    n = re.type(e);return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
		}function s(e, t, n) {
			if (re.isFunction(t)) return re.grep(e, function (e, r) {
				return !!t.call(e, r, e) !== n;
			});if (t.nodeType) return re.grep(e, function (e) {
				return e === t !== n;
			});if ("string" == typeof t) {
				if (pe.test(t)) return re.filter(t, e, n);t = re.filter(t, e);
			}return re.grep(e, function (e) {
				return K.call(t, e) >= 0 !== n;
			});
		}function l(e, t) {
			for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
		}function u(e) {
			var t = ve[e] = {};return re.each(e.match(be) || [], function (e, n) {
				t[n] = !0;
			}), t;
		}function c() {
			te.removeEventListener("DOMContentLoaded", c, !1), n.removeEventListener("load", c, !1), re.ready();
		}function p() {
			Object.defineProperty(this.cache = {}, 0, { get: function get() {
					return {};
				} }), this.expando = re.expando + p.uid++;
		}function d(e, t, n) {
			var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Ce, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ee.test(n) ? re.parseJSON(n) : n;
				} catch (a) {}Ae.set(e, t, n);
			} else n = void 0;return n;
		}function f() {
			return !0;
		}function h() {
			return !1;
		}function g() {
			try {
				return te.activeElement;
			} catch (e) {}
		}function m(e, t) {
			return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
		}function b(e) {
			return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
		}function v(e) {
			var t = Fe.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
		}function y(e, t) {
			for (var n = 0, r = e.length; r > n; n++) {
				we.set(e[n], "globalEval", !t || we.get(t[n], "globalEval"));
			}
		}function x(e, t) {
			var n, r, a, o, i, s, l, u;if (1 === t.nodeType) {
				if (we.hasData(e) && (o = we.access(e), i = we.set(t, o), u = o.events)) {
					delete i.handle, i.events = {};for (a in u) {
						for (n = 0, r = u[a].length; r > n; n++) {
							re.event.add(t, a, u[a][n]);
						}
					}
				}Ae.hasData(e) && (s = Ae.access(e), l = re.extend({}, s), Ae.set(t, l));
			}
		}function w(e, t) {
			var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n;
		}function A(e, t) {
			var n = t.nodeName.toLowerCase();"input" === n && ke.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
		}function E(e, t) {
			var r,
			    a = re(t.createElement(e)).appendTo(t.body),
			    o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(a[0])) ? r.display : re.css(a[0], "display");return a.detach(), o;
		}function C(e) {
			var t = te,
			    n = Ve[e];return n || (n = E(e, t), "none" !== n && n || (We = (We || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = We[0].contentDocument, t.write(), t.close(), n = E(e, t), We.detach()), Ve[e] = n), n;
		}function _(e, t, n) {
			var r,
			    a,
			    o,
			    i,
			    s = e.style;return n = n || $e(e), n && (i = n.getPropertyValue(t) || n[t]), n && ("" !== i || re.contains(e.ownerDocument, e) || (i = re.style(e, t)), Ye.test(i) && Ge.test(t) && (r = s.width, a = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = n.width, s.width = r, s.minWidth = a, s.maxWidth = o)), void 0 !== i ? i + "" : i;
		}function T(e, t) {
			return { get: function get() {
					return e() ? void delete this.get : (this.get = t).apply(this, arguments);
				} };
		}function R(e, t) {
			if (t in e) return t;for (var n = t[0].toUpperCase() + t.slice(1), r = t, a = Qe.length; a--;) {
				if (t = Qe[a] + n, t in e) return t;
			}return r;
		}function k(e, t, n) {
			var r = Xe.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
		}function S(e, t, n, r, a) {
			for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; 4 > o; o += 2) {
				"margin" === n && (i += re.css(e, n + Te[o], !0, a)), r ? ("content" === n && (i -= re.css(e, "padding" + Te[o], !0, a)), "margin" !== n && (i -= re.css(e, "border" + Te[o] + "Width", !0, a))) : (i += re.css(e, "padding" + Te[o], !0, a), "padding" !== n && (i += re.css(e, "border" + Te[o] + "Width", !0, a)));
			}return i;
		}function N(e, t, n) {
			var r = !0,
			    a = "width" === t ? e.offsetWidth : e.offsetHeight,
			    o = $e(e),
			    i = "border-box" === re.css(e, "boxSizing", !1, o);if (0 >= a || null == a) {
				if (a = _(e, t, o), (0 > a || null == a) && (a = e.style[t]), Ye.test(a)) return a;r = i && (ee.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0;
			}return a + S(e, t, n || (i ? "border" : "content"), r, o) + "px";
		}function O(e, t) {
			for (var n, r, a, o = [], i = 0, s = e.length; s > i; i++) {
				r = e[i], r.style && (o[i] = we.get(r, "olddisplay"), n = r.style.display, t ? (o[i] || "none" !== n || (r.style.display = ""), "" === r.style.display && Re(r) && (o[i] = we.access(r, "olddisplay", C(r.nodeName)))) : (a = Re(r), "none" === n && a || we.set(r, "olddisplay", a ? n : re.css(r, "display"))));
			}for (i = 0; s > i; i++) {
				r = e[i], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[i] || "" : "none"));
			}return e;
		}function I(e, t, n, r, a) {
			return new I.prototype.init(e, t, n, r, a);
		}function L() {
			return setTimeout(function () {
				et = void 0;
			}), et = re.now();
		}function P(e, t) {
			var n,
			    r = 0,
			    a = { height: e };for (t = t ? 1 : 0; 4 > r; r += 2 - t) {
				n = Te[r], a["margin" + n] = a["padding" + n] = e;
			}return t && (a.opacity = a.width = e), a;
		}function D(e, t, n) {
			for (var r, a = (it[t] || []).concat(it["*"]), o = 0, i = a.length; i > o; o++) {
				if (r = a[o].call(n, t, e)) return r;
			}
		}function M(e, t, n) {
			var r,
			    a,
			    o,
			    i,
			    s,
			    l,
			    u,
			    c,
			    p = this,
			    d = {},
			    f = e.style,
			    h = e.nodeType && Re(e),
			    g = we.get(e, "fxshow");n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
				s.unqueued || l();
			}), s.unqueued++, p.always(function () {
				p.always(function () {
					s.unqueued--, re.queue(e, "fx").length || s.empty.fire();
				});
			})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = re.css(e, "display"), c = "none" === u ? we.get(e, "olddisplay") || C(e.nodeName) : u, "inline" === c && "none" === re.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
				f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
			}));for (r in t) {
				if (a = t[r], nt.exec(a)) {
					if (delete t[r], o = o || "toggle" === a, a === (h ? "hide" : "show")) {
						if ("show" !== a || !g || void 0 === g[r]) continue;h = !0;
					}d[r] = g && g[r] || re.style(e, r);
				} else u = void 0;
			}if (re.isEmptyObject(d)) "inline" === ("none" === u ? C(e.nodeName) : u) && (f.display = u);else {
				g ? "hidden" in g && (h = g.hidden) : g = we.access(e, "fxshow", {}), o && (g.hidden = !h), h ? re(e).show() : p.done(function () {
					re(e).hide();
				}), p.done(function () {
					var t;we.remove(e, "fxshow");for (t in d) {
						re.style(e, t, d[t]);
					}
				});for (r in d) {
					i = D(h ? g[r] : 0, r, p), r in g || (g[r] = i.start, h && (i.end = i.start, i.start = "width" === r || "height" === r ? 1 : 0));
				}
			}
		}function j(e, t) {
			var n, r, a, o, i;for (n in e) {
				if (r = re.camelCase(n), a = t[r], o = e[n], re.isArray(o) && (a = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), i = re.cssHooks[r], i && "expand" in i) {
					o = i.expand(o), delete e[r];for (n in o) {
						n in e || (e[n] = o[n], t[n] = a);
					}
				} else t[r] = a;
			}
		}function H(e, t, n) {
			var r,
			    a,
			    o = 0,
			    i = ot.length,
			    s = re.Deferred().always(function () {
				delete l.elem;
			}),
			    l = function l() {
				if (a) return !1;for (var t = et || L(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, i = 0, l = u.tweens.length; l > i; i++) {
					u.tweens[i].run(o);
				}return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
			},
			    u = s.promise({ elem: e, props: re.extend({}, t), opts: re.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: et || L(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
					var r = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
				}, stop: function stop(t) {
					var n = 0,
					    r = t ? u.tweens.length : 0;if (a) return this;for (a = !0; r > n; n++) {
						u.tweens[n].run(1);
					}return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
				} }),
			    c = u.props;for (j(c, u.opts.specialEasing); i > o; o++) {
				if (r = ot[o].call(u, e, c, u.opts)) return r;
			}return re.map(c, D, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
		}function q(e) {
			return function (t, n) {
				"string" != typeof t && (n = t, t = "*");var r,
				    a = 0,
				    o = t.toLowerCase().match(be) || [];if (re.isFunction(n)) for (; r = o[a++];) {
					"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
				}
			};
		}function F(e, t, n, r) {
			function a(s) {
				var l;return o[s] = !0, re.each(e[s] || [], function (e, s) {
					var u = s(t, n, r);return "string" != typeof u || i || o[u] ? i ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1);
				}), l;
			}var o = {},
			    i = e === Et;return a(t.dataTypes[0]) || !o["*"] && a("*");
		}function B(e, t) {
			var n,
			    r,
			    a = re.ajaxSettings.flatOptions || {};for (n in t) {
				void 0 !== t[n] && ((a[n] ? e : r || (r = {}))[n] = t[n]);
			}return r && re.extend(!0, e, r), e;
		}function U(e, t, n) {
			for (var r, a, o, i, s = e.contents, l = e.dataTypes; "*" === l[0];) {
				l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
			}if (r) for (a in s) {
				if (s[a] && s[a].test(r)) {
					l.unshift(a);break;
				}
			}if (l[0] in n) o = l[0];else {
				for (a in n) {
					if (!l[0] || e.converters[a + " " + l[0]]) {
						o = a;break;
					}i || (i = a);
				}o = o || i;
			}return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
		}function W(e, t, n, r) {
			var a,
			    o,
			    i,
			    s,
			    l,
			    u = {},
			    c = e.dataTypes.slice();if (c[1]) for (i in e.converters) {
				u[i.toLowerCase()] = e.converters[i];
			}for (o = c.shift(); o;) {
				if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
					if (i = u[l + " " + o] || u["* " + o], !i) for (a in u) {
						if (s = a.split(" "), s[1] === o && (i = u[l + " " + s[0]] || u["* " + s[0]])) {
							i === !0 ? i = u[a] : u[a] !== !0 && (o = s[0], c.unshift(s[1]));break;
						}
					}if (i !== !0) if (i && e["throws"]) t = i(t);else try {
						t = i(t);
					} catch (p) {
						return { state: "parsererror", error: i ? p : "No conversion from " + l + " to " + o };
					}
				}
			}return { state: "success", data: t };
		}function V(e, t, n, r) {
			var a;if (re.isArray(t)) re.each(t, function (t, a) {
				n || kt.test(e) ? r(e, a) : V(e + "[" + ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? t : "") + "]", a, n, r);
			});else if (n || "object" !== re.type(t)) r(e, t);else for (a in t) {
				V(e + "[" + a + "]", t[a], n, r);
			}
		}function G(e) {
			return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
		}var Y = [],
		    $ = Y.slice,
		    z = Y.concat,
		    X = Y.push,
		    K = Y.indexOf,
		    J = {},
		    Z = J.toString,
		    Q = J.hasOwnProperty,
		    ee = {},
		    te = n.document,
		    ne = "2.1.4",
		    re = function re(e, t) {
			return new re.fn.init(e, t);
		},
		    ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		    oe = /^-ms-/,
		    ie = /-([\da-z])/gi,
		    se = function se(e, t) {
			return t.toUpperCase();
		};re.fn = re.prototype = { jquery: ne, constructor: re, selector: "", length: 0, toArray: function toArray() {
				return $.call(this);
			}, get: function get(e) {
				return null != e ? 0 > e ? this[e + this.length] : this[e] : $.call(this);
			}, pushStack: function pushStack(e) {
				var t = re.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
			}, each: function each(e, t) {
				return re.each(this, e, t);
			}, map: function map(e) {
				return this.pushStack(re.map(this, function (t, n) {
					return e.call(t, n, t);
				}));
			}, slice: function slice() {
				return this.pushStack($.apply(this, arguments));
			}, first: function first() {
				return this.eq(0);
			}, last: function last() {
				return this.eq(-1);
			}, eq: function eq(e) {
				var t = this.length,
				    n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
			}, end: function end() {
				return this.prevObject || this.constructor(null);
			}, push: X, sort: Y.sort, splice: Y.splice }, re.extend = re.fn.extend = function () {
			var e,
			    t,
			    n,
			    r,
			    a,
			    o,
			    i = arguments[0] || {},
			    s = 1,
			    l = arguments.length,
			    u = !1;for ("boolean" == typeof i && (u = i, i = arguments[s] || {}, s++), "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) || re.isFunction(i) || (i = {}), s === l && (i = this, s--); l > s; s++) {
				if (null != (e = arguments[s])) for (t in e) {
					n = i[t], r = e[t], i !== r && (u && r && (re.isPlainObject(r) || (a = re.isArray(r))) ? (a ? (a = !1, o = n && re.isArray(n) ? n : []) : o = n && re.isPlainObject(n) ? n : {}, i[t] = re.extend(u, o, r)) : void 0 !== r && (i[t] = r));
				}
			}return i;
		}, re.extend({ expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
				throw new Error(e);
			}, noop: function noop() {}, isFunction: function isFunction(e) {
				return "function" === re.type(e);
			}, isArray: Array.isArray, isWindow: function isWindow(e) {
				return null != e && e === e.window;
			}, isNumeric: function isNumeric(e) {
				return !re.isArray(e) && e - parseFloat(e) + 1 >= 0;
			}, isPlainObject: function isPlainObject(e) {
				return "object" !== re.type(e) || e.nodeType || re.isWindow(e) ? !1 : e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0;
			}, isEmptyObject: function isEmptyObject(e) {
				var t;for (t in e) {
					return !1;
				}return !0;
			}, type: function type(e) {
				return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? J[Z.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
			}, globalEval: function globalEval(e) {
				var t,
				    n = eval;e = re.trim(e), e && (1 === e.indexOf("use strict") ? (t = te.createElement("script"), t.text = e, te.head.appendChild(t).parentNode.removeChild(t)) : n(e));
			}, camelCase: function camelCase(e) {
				return e.replace(oe, "ms-").replace(ie, se);
			}, nodeName: function nodeName(e, t) {
				return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
			}, each: function each(e, t, n) {
				var r,
				    a = 0,
				    o = e.length,
				    s = i(e);if (n) {
					if (s) for (; o > a && (r = t.apply(e[a], n), r !== !1); a++) {} else for (a in e) {
						if (r = t.apply(e[a], n), r === !1) break;
					}
				} else if (s) for (; o > a && (r = t.call(e[a], a, e[a]), r !== !1); a++) {} else for (a in e) {
					if (r = t.call(e[a], a, e[a]), r === !1) break;
				}return e;
			}, trim: function trim(e) {
				return null == e ? "" : (e + "").replace(ae, "");
			}, makeArray: function makeArray(e, t) {
				var n = t || [];return null != e && (i(Object(e)) ? re.merge(n, "string" == typeof e ? [e] : e) : X.call(n, e)), n;
			}, inArray: function inArray(e, t, n) {
				return null == t ? -1 : K.call(t, e, n);
			}, merge: function merge(e, t) {
				for (var n = +t.length, r = 0, a = e.length; n > r; r++) {
					e[a++] = t[r];
				}return e.length = a, e;
			}, grep: function grep(e, t, n) {
				for (var r, a = [], o = 0, i = e.length, s = !n; i > o; o++) {
					r = !t(e[o], o), r !== s && a.push(e[o]);
				}return a;
			}, map: function map(e, t, n) {
				var r,
				    a = 0,
				    o = e.length,
				    s = i(e),
				    l = [];if (s) for (; o > a; a++) {
					r = t(e[a], a, n), null != r && l.push(r);
				} else for (a in e) {
					r = t(e[a], a, n), null != r && l.push(r);
				}return z.apply([], l);
			}, guid: 1, proxy: function proxy(e, t) {
				var n, r, a;return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (r = $.call(arguments, 2), a = function a() {
					return e.apply(t || this, r.concat($.call(arguments)));
				}, a.guid = e.guid = e.guid || re.guid++, a) : void 0;
			}, now: Date.now, support: ee }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
			J["[object " + t + "]"] = t.toLowerCase();
		});var le = /*!
              * Sizzle CSS Selector Engine v2.2.0-pre
              * http://sizzlejs.com/
              *
              * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
              * Released under the MIT license
              * http://jquery.org/license
              *
              * Date: 2014-12-16
              */
		function (e) {
			function t(e, t, n, r) {
				var a, o, i, s, l, u, p, f, h, g;if ((t ? t.ownerDocument || t : F) !== I && O(t), t = t || I, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;if (!r && P) {
					if (11 !== s && (a = ve.exec(e))) if (i = a[1]) {
						if (9 === s) {
							if (o = t.getElementById(i), !o || !o.parentNode) return n;if (o.id === i) return n.push(o), n;
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(i)) && H(t, o) && o.id === i) return n.push(o), n;
					} else {
						if (a[2]) return Z.apply(n, t.getElementsByTagName(e)), n;if ((i = a[3]) && w.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(i)), n;
					}if (w.qsa && (!D || !D.test(e))) {
						if (f = p = q, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (u = _(e), (p = t.getAttribute("id")) ? f = p.replace(xe, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) {
								u[l] = f + d(u[l]);
							}h = ye.test(e) && c(t.parentNode) || t, g = u.join(",");
						}if (g) try {
							return Z.apply(n, h.querySelectorAll(g)), n;
						} catch (m) {} finally {
							p || t.removeAttribute("id");
						}
					}
				}return R(e.replace(le, "$1"), t, n, r);
			}function n() {
				function e(n, r) {
					return t.push(n + " ") > A.cacheLength && delete e[t.shift()], e[n + " "] = r;
				}var t = [];return e;
			}function r(e) {
				return e[q] = !0, e;
			}function a(e) {
				var t = I.createElement("div");try {
					return !!e(t);
				} catch (n) {
					return !1;
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null;
				}
			}function o(e, t) {
				for (var n = e.split("|"), r = e.length; r--;) {
					A.attrHandle[n[r]] = t;
				}
			}function i(e, t) {
				var n = t && e,
				    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || $) - (~e.sourceIndex || $);if (r) return r;if (n) for (; n = n.nextSibling;) {
					if (n === t) return -1;
				}return e ? 1 : -1;
			}function s(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
				};
			}function l(e) {
				return function (t) {
					var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
				};
			}function u(e) {
				return r(function (t) {
					return t = +t, r(function (n, r) {
						for (var a, o = e([], n.length, t), i = o.length; i--;) {
							n[a = o[i]] && (n[a] = !(r[a] = n[a]));
						}
					});
				});
			}function c(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e;
			}function p() {}function d(e) {
				for (var t = 0, n = e.length, r = ""; n > t; t++) {
					r += e[t].value;
				}return r;
			}function f(e, t, n) {
				var r = t.dir,
				    a = n && "parentNode" === r,
				    o = U++;return t.first ? function (t, n, o) {
					for (; t = t[r];) {
						if (1 === t.nodeType || a) return e(t, n, o);
					}
				} : function (t, n, i) {
					var s,
					    l,
					    u = [B, o];if (i) {
						for (; t = t[r];) {
							if ((1 === t.nodeType || a) && e(t, n, i)) return !0;
						}
					} else for (; t = t[r];) {
						if (1 === t.nodeType || a) {
							if (l = t[q] || (t[q] = {}), (s = l[r]) && s[0] === B && s[1] === o) return u[2] = s[2];if (l[r] = u, u[2] = e(t, n, i)) return !0;
						}
					}
				};
			}function h(e) {
				return e.length > 1 ? function (t, n, r) {
					for (var a = e.length; a--;) {
						if (!e[a](t, n, r)) return !1;
					}return !0;
				} : e[0];
			}function g(e, n, r) {
				for (var a = 0, o = n.length; o > a; a++) {
					t(e, n[a], r);
				}return r;
			}function m(e, t, n, r, a) {
				for (var o, i = [], s = 0, l = e.length, u = null != t; l > s; s++) {
					(o = e[s]) && (!n || n(o, r, a)) && (i.push(o), u && t.push(s));
				}return i;
			}function b(e, t, n, a, o, i) {
				return a && !a[q] && (a = b(a)), o && !o[q] && (o = b(o, i)), r(function (r, i, s, l) {
					var u,
					    c,
					    p,
					    d = [],
					    f = [],
					    h = i.length,
					    b = r || g(t || "*", s.nodeType ? [s] : s, []),
					    v = !e || !r && t ? b : m(b, d, e, s, l),
					    y = n ? o || (r ? e : h || a) ? [] : i : v;if (n && n(v, y, s, l), a) for (u = m(y, f), a(u, [], s, l), c = u.length; c--;) {
						(p = u[c]) && (y[f[c]] = !(v[f[c]] = p));
					}if (r) {
						if (o || e) {
							if (o) {
								for (u = [], c = y.length; c--;) {
									(p = y[c]) && u.push(v[c] = p);
								}o(null, y = [], u, l);
							}for (c = y.length; c--;) {
								(p = y[c]) && (u = o ? ee(r, p) : d[c]) > -1 && (r[u] = !(i[u] = p));
							}
						}
					} else y = m(y === i ? y.splice(h, y.length) : y), o ? o(null, i, y, l) : Z.apply(i, y);
				});
			}function v(e) {
				for (var t, n, r, a = e.length, o = A.relative[e[0].type], i = o || A.relative[" "], s = o ? 1 : 0, l = f(function (e) {
					return e === t;
				}, i, !0), u = f(function (e) {
					return ee(t, e) > -1;
				}, i, !0), c = [function (e, n, r) {
					var a = !o && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));return t = null, a;
				}]; a > s; s++) {
					if (n = A.relative[e[s].type]) c = [f(h(c), n)];else {
						if (n = A.filter[e[s].type].apply(null, e[s].matches), n[q]) {
							for (r = ++s; a > r && !A.relative[e[r].type]; r++) {}return b(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(le, "$1"), n, r > s && v(e.slice(s, r)), a > r && v(e = e.slice(r)), a > r && d(e));
						}c.push(n);
					}
				}return h(c);
			}function y(e, n) {
				var a = n.length > 0,
				    o = e.length > 0,
				    i = function i(r, _i, s, l, u) {
					var c,
					    p,
					    d,
					    f = 0,
					    h = "0",
					    g = r && [],
					    b = [],
					    v = k,
					    y = r || o && A.find.TAG("*", u),
					    x = B += null == v ? 1 : Math.random() || .1,
					    w = y.length;for (u && (k = _i !== I && _i); h !== w && null != (c = y[h]); h++) {
						if (o && c) {
							for (p = 0; d = e[p++];) {
								if (d(c, _i, s)) {
									l.push(c);break;
								}
							}u && (B = x);
						}a && ((c = !d && c) && f--, r && g.push(c));
					}if (f += h, a && h !== f) {
						for (p = 0; d = n[p++];) {
							d(g, b, _i, s);
						}if (r) {
							if (f > 0) for (; h--;) {
								g[h] || b[h] || (b[h] = K.call(l));
							}b = m(b);
						}Z.apply(l, b), u && !r && b.length > 0 && f + n.length > 1 && t.uniqueSort(l);
					}return u && (B = x, k = v), g;
				};return a ? r(i) : i;
			}var x,
			    w,
			    A,
			    E,
			    C,
			    _,
			    T,
			    R,
			    k,
			    S,
			    N,
			    O,
			    I,
			    L,
			    P,
			    D,
			    M,
			    j,
			    H,
			    q = "sizzle" + 1 * new Date(),
			    F = e.document,
			    B = 0,
			    U = 0,
			    W = n(),
			    V = n(),
			    G = n(),
			    Y = function Y(e, t) {
				return e === t && (N = !0), 0;
			},
			    $ = 1 << 31,
			    z = {}.hasOwnProperty,
			    X = [],
			    K = X.pop,
			    J = X.push,
			    Z = X.push,
			    Q = X.slice,
			    ee = function ee(e, t) {
				for (var n = 0, r = e.length; r > n; n++) {
					if (e[n] === t) return n;
				}return -1;
			},
			    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			    ne = "[\\x20\\t\\r\\n\\f]",
			    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			    ae = re.replace("w", "w#"),
			    oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ae + "))|)" + ne + "*\\]",
			    ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
			    se = new RegExp(ne + "+", "g"),
			    le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			    ue = new RegExp("^" + ne + "*," + ne + "*"),
			    ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			    pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			    de = new RegExp(ie),
			    fe = new RegExp("^" + ae + "$"),
			    he = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
			    ge = /^(?:input|select|textarea|button)$/i,
			    me = /^h\d$/i,
			    be = /^[^{]+\{\s*\[native \w/,
			    ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    ye = /[+~]/,
			    xe = /'|\\/g,
			    we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			    Ae = function Ae(e, t, n) {
				var r = "0x" + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
			},
			    Ee = function Ee() {
				O();
			};try {
				Z.apply(X = Q.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType;
			} catch (Ce) {
				Z = { apply: X.length ? function (e, t) {
						J.apply(e, Q.call(t));
					} : function (e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];) {}e.length = n - 1;
					} };
			}w = t.support = {}, C = t.isXML = function (e) {
				var t = e && (e.ownerDocument || e).documentElement;return t ? "HTML" !== t.nodeName : !1;
			}, O = t.setDocument = function (e) {
				var t,
				    n,
				    r = e ? e.ownerDocument || e : F;return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, L = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), P = !C(r), w.attributes = a(function (e) {
					return e.className = "i", !e.getAttribute("className");
				}), w.getElementsByTagName = a(function (e) {
					return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
				}), w.getElementsByClassName = be.test(r.getElementsByClassName), w.getById = a(function (e) {
					return L.appendChild(e).id = q, !r.getElementsByName || !r.getElementsByName(q).length;
				}), w.getById ? (A.find.ID = function (e, t) {
					if ("undefined" != typeof t.getElementById && P) {
						var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
					}
				}, A.filter.ID = function (e) {
					var t = e.replace(we, Ae);return function (e) {
						return e.getAttribute("id") === t;
					};
				}) : (delete A.find.ID, A.filter.ID = function (e) {
					var t = e.replace(we, Ae);return function (e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
					};
				}), A.find.TAG = w.getElementsByTagName ? function (e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
				} : function (e, t) {
					var n,
					    r = [],
					    a = 0,
					    o = t.getElementsByTagName(e);if ("*" === e) {
						for (; n = o[a++];) {
							1 === n.nodeType && r.push(n);
						}return r;
					}return o;
				}, A.find.CLASS = w.getElementsByClassName && function (e, t) {
					return P ? t.getElementsByClassName(e) : void 0;
				}, M = [], D = [], (w.qsa = be.test(r.querySelectorAll)) && (a(function (e) {
					L.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || D.push(".#.+[+~]");
				}), a(function (e) {
					var t = r.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:");
				})), (w.matchesSelector = be.test(j = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && a(function (e) {
					w.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), M.push("!=", ie);
				}), D = D.length && new RegExp(D.join("|")), M = M.length && new RegExp(M.join("|")), t = be.test(L.compareDocumentPosition), H = t || be.test(L.contains) ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
					    r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
				} : function (e, t) {
					if (t) for (; t = t.parentNode;) {
						if (t === e) return !0;
					}return !1;
				}, Y = t ? function (e, t) {
					if (e === t) return N = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === F && H(F, e) ? -1 : t === r || t.ownerDocument === F && H(F, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1);
				} : function (e, t) {
					if (e === t) return N = !0, 0;var n,
					    a = 0,
					    o = e.parentNode,
					    s = t.parentNode,
					    l = [e],
					    u = [t];if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : S ? ee(S, e) - ee(S, t) : 0;if (o === s) return i(e, t);for (n = e; n = n.parentNode;) {
						l.unshift(n);
					}for (n = t; n = n.parentNode;) {
						u.unshift(n);
					}for (; l[a] === u[a];) {
						a++;
					}return a ? i(l[a], u[a]) : l[a] === F ? -1 : u[a] === F ? 1 : 0;
				}, r) : I;
			}, t.matches = function (e, n) {
				return t(e, null, null, n);
			}, t.matchesSelector = function (e, n) {
				if ((e.ownerDocument || e) !== I && O(e), n = n.replace(pe, "='$1']"), w.matchesSelector && P && (!M || !M.test(n)) && (!D || !D.test(n))) try {
					var r = j.call(e, n);if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
				} catch (a) {}return t(n, I, null, [e]).length > 0;
			}, t.contains = function (e, t) {
				return (e.ownerDocument || e) !== I && O(e), H(e, t);
			}, t.attr = function (e, t) {
				(e.ownerDocument || e) !== I && O(e);var n = A.attrHandle[t.toLowerCase()],
				    r = n && z.call(A.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;return void 0 !== r ? r : w.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
			}, t.error = function (e) {
				throw new Error("Syntax error, unrecognized expression: " + e);
			}, t.uniqueSort = function (e) {
				var t,
				    n = [],
				    r = 0,
				    a = 0;if (N = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(Y), N) {
					for (; t = e[a++];) {
						t === e[a] && (r = n.push(a));
					}for (; r--;) {
						e.splice(n[r], 1);
					}
				}return S = null, e;
			}, E = t.getText = function (e) {
				var t,
				    n = "",
				    r = 0,
				    a = e.nodeType;if (a) {
					if (1 === a || 9 === a || 11 === a) {
						if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
							n += E(e);
						}
					} else if (3 === a || 4 === a) return e.nodeValue;
				} else for (; t = e[r++];) {
					n += E(t);
				}return n;
			}, A = t.selectors = { cacheLength: 50, createPseudo: r, match: he, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
						return e[1] = e[1].replace(we, Ae), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Ae), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
					}, CHILD: function CHILD(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
					}, PSEUDO: function PSEUDO(e) {
						var t,
						    n = !e[6] && e[2];return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
					} }, filter: { TAG: function TAG(e) {
						var t = e.replace(we, Ae).toLowerCase();return "*" === e ? function () {
							return !0;
						} : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t;
						};
					}, CLASS: function CLASS(e) {
						var t = W[e + " "];return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function (e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
						});
					}, ATTR: function ATTR(e, n, r) {
						return function (a) {
							var o = t.attr(a, e);return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0;
						};
					}, CHILD: function CHILD(e, t, n, r, a) {
						var o = "nth" !== e.slice(0, 3),
						    i = "last" !== e.slice(-4),
						    s = "of-type" === t;return 1 === r && 0 === a ? function (e) {
							return !!e.parentNode;
						} : function (t, n, l) {
							var u,
							    c,
							    p,
							    d,
							    f,
							    h,
							    g = o !== i ? "nextSibling" : "previousSibling",
							    m = t.parentNode,
							    b = s && t.nodeName.toLowerCase(),
							    v = !l && !s;if (m) {
								if (o) {
									for (; g;) {
										for (p = t; p = p[g];) {
											if (s ? p.nodeName.toLowerCase() === b : 1 === p.nodeType) return !1;
										}h = g = "only" === e && !h && "nextSibling";
									}return !0;
								}if (h = [i ? m.firstChild : m.lastChild], i && v) {
									for (c = m[q] || (m[q] = {}), u = c[e] || [], f = u[0] === B && u[1], d = u[0] === B && u[2], p = f && m.childNodes[f]; p = ++f && p && p[g] || (d = f = 0) || h.pop();) {
										if (1 === p.nodeType && ++d && p === t) {
											c[e] = [B, f, d];break;
										}
									}
								} else if (v && (u = (t[q] || (t[q] = {}))[e]) && u[0] === B) d = u[1];else for (; (p = ++f && p && p[g] || (d = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== b : 1 !== p.nodeType) || !++d || (v && ((p[q] || (p[q] = {}))[e] = [B, d]), p !== t));) {}return d -= a, d === r || d % r === 0 && d / r >= 0;
							}
						};
					}, PSEUDO: function PSEUDO(e, n) {
						var a,
						    o = A.pseudos[e] || A.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return o[q] ? o(n) : o.length > 1 ? (a = [e, e, "", n], A.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
							for (var r, a = o(e, n), i = a.length; i--;) {
								r = ee(e, a[i]), e[r] = !(t[r] = a[i]);
							}
						}) : function (e) {
							return o(e, 0, a);
						}) : o;
					} }, pseudos: { not: r(function (e) {
						var t = [],
						    n = [],
						    a = T(e.replace(le, "$1"));return a[q] ? r(function (e, t, n, r) {
							for (var o, i = a(e, null, r, []), s = e.length; s--;) {
								(o = i[s]) && (e[s] = !(t[s] = o));
							}
						}) : function (e, r, o) {
							return t[0] = e, a(t, null, o, n), t[0] = null, !n.pop();
						};
					}), has: r(function (e) {
						return function (n) {
							return t(e, n).length > 0;
						};
					}), contains: r(function (e) {
						return e = e.replace(we, Ae), function (t) {
							return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
						};
					}), lang: r(function (e) {
						return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ae).toLowerCase(), function (t) {
							var n;do {
								if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							} while ((t = t.parentNode) && 1 === t.nodeType);return !1;
						};
					}), target: function target(t) {
						var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
					}, root: function root(e) {
						return e === L;
					}, focus: function focus(e) {
						return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
					}, enabled: function enabled(e) {
						return e.disabled === !1;
					}, disabled: function disabled(e) {
						return e.disabled === !0;
					}, checked: function checked(e) {
						var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
					}, selected: function selected(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
					}, empty: function empty(e) {
						for (e = e.firstChild; e; e = e.nextSibling) {
							if (e.nodeType < 6) return !1;
						}return !0;
					}, parent: function parent(e) {
						return !A.pseudos.empty(e);
					}, header: function header(e) {
						return me.test(e.nodeName);
					}, input: function input(e) {
						return ge.test(e.nodeName);
					}, button: function button(e) {
						var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
					}, text: function text(e) {
						var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
					}, first: u(function () {
						return [0];
					}), last: u(function (e, t) {
						return [t - 1];
					}), eq: u(function (e, t, n) {
						return [0 > n ? n + t : n];
					}), even: u(function (e, t) {
						for (var n = 0; t > n; n += 2) {
							e.push(n);
						}return e;
					}), odd: u(function (e, t) {
						for (var n = 1; t > n; n += 2) {
							e.push(n);
						}return e;
					}), lt: u(function (e, t, n) {
						for (var r = 0 > n ? n + t : n; --r >= 0;) {
							e.push(r);
						}return e;
					}), gt: u(function (e, t, n) {
						for (var r = 0 > n ? n + t : n; ++r < t;) {
							e.push(r);
						}return e;
					}) } }, A.pseudos.nth = A.pseudos.eq;for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
				A.pseudos[x] = s(x);
			}for (x in { submit: !0, reset: !0 }) {
				A.pseudos[x] = l(x);
			}return p.prototype = A.filters = A.pseudos, A.setFilters = new p(), _ = t.tokenize = function (e, n) {
				var r,
				    a,
				    o,
				    i,
				    s,
				    l,
				    u,
				    c = V[e + " "];if (c) return n ? 0 : c.slice(0);for (s = e, l = [], u = A.preFilter; s;) {
					(!r || (a = ue.exec(s))) && (a && (s = s.slice(a[0].length) || s), l.push(o = [])), r = !1, (a = ce.exec(s)) && (r = a.shift(), o.push({ value: r, type: a[0].replace(le, " ") }), s = s.slice(r.length));for (i in A.filter) {
						!(a = he[i].exec(s)) || u[i] && !(a = u[i](a)) || (r = a.shift(), o.push({ value: r, type: i, matches: a }), s = s.slice(r.length));
					}if (!r) break;
				}return n ? s.length : s ? t.error(e) : V(e, l).slice(0);
			}, T = t.compile = function (e, t) {
				var n,
				    r = [],
				    a = [],
				    o = G[e + " "];if (!o) {
					for (t || (t = _(e)), n = t.length; n--;) {
						o = v(t[n]), o[q] ? r.push(o) : a.push(o);
					}o = G(e, y(a, r)), o.selector = e;
				}return o;
			}, R = t.select = function (e, t, n, r) {
				var a,
				    o,
				    i,
				    s,
				    l,
				    u = "function" == typeof e && e,
				    p = !r && _(e = u.selector || e);if (n = n || [], 1 === p.length) {
					if (o = p[0] = p[0].slice(0), o.length > 2 && "ID" === (i = o[0]).type && w.getById && 9 === t.nodeType && P && A.relative[o[1].type]) {
						if (t = (A.find.ID(i.matches[0].replace(we, Ae), t) || [])[0], !t) return n;u && (t = t.parentNode), e = e.slice(o.shift().value.length);
					}for (a = he.needsContext.test(e) ? 0 : o.length; a-- && (i = o[a], !A.relative[s = i.type]);) {
						if ((l = A.find[s]) && (r = l(i.matches[0].replace(we, Ae), ye.test(o[0].type) && c(t.parentNode) || t))) {
							if (o.splice(a, 1), e = r.length && d(o), !e) return Z.apply(n, r), n;break;
						}
					}
				}return (u || T(e, p))(r, t, !P, n, ye.test(e) && c(t.parentNode) || t), n;
			}, w.sortStable = q.split("").sort(Y).join("") === q, w.detectDuplicates = !!N, O(), w.sortDetached = a(function (e) {
				return 1 & e.compareDocumentPosition(I.createElement("div"));
			}), a(function (e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
			}) || o("type|href|height|width", function (e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
			}), w.attributes && a(function (e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
			}) || o("value", function (e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
			}), a(function (e) {
				return null == e.getAttribute("disabled");
			}) || o(te, function (e, t, n) {
				var r;return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
			}), t;
		}(n);re.find = le, re.expr = le.selectors, re.expr[":"] = re.expr.pseudos, re.unique = le.uniqueSort, re.text = le.getText, re.isXMLDoc = le.isXML, re.contains = le.contains;var ue = re.expr.match.needsContext,
		    ce = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		    pe = /^.[^:#\[\.,]*$/;re.filter = function (e, t, n) {
			var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? re.find.matchesSelector(r, e) ? [r] : [] : re.find.matches(e, re.grep(t, function (e) {
				return 1 === e.nodeType;
			}));
		}, re.fn.extend({ find: function find(e) {
				var t,
				    n = this.length,
				    r = [],
				    a = this;if ("string" != typeof e) return this.pushStack(re(e).filter(function () {
					for (t = 0; n > t; t++) {
						if (re.contains(a[t], this)) return !0;
					}
				}));for (t = 0; n > t; t++) {
					re.find(e, a[t], r);
				}return r = this.pushStack(n > 1 ? re.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r;
			}, filter: function filter(e) {
				return this.pushStack(s(this, e || [], !1));
			}, not: function not(e) {
				return this.pushStack(s(this, e || [], !0));
			}, is: function is(e) {
				return !!s(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length;
			} });var de,
		    fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    he = re.fn.init = function (e, t) {
			var n, r;if (!e) return this;if ("string" == typeof e) {
				if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : fe.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || de).find(e) : this.constructor(t).find(e);if (n[1]) {
					if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), ce.test(n[1]) && re.isPlainObject(t)) for (n in t) {
						re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					}return this;
				}return r = te.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = te, this.selector = e, this;
			}return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? "undefined" != typeof de.ready ? de.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this));
		};he.prototype = re.fn, de = re(te);var ge = /^(?:parents|prev(?:Until|All))/,
		    me = { children: !0, contents: !0, next: !0, prev: !0 };re.extend({ dir: function dir(e, t, n) {
				for (var r = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
					if (1 === e.nodeType) {
						if (a && re(e).is(n)) break;r.push(e);
					}
				}return r;
			}, sibling: function sibling(e, t) {
				for (var n = []; e; e = e.nextSibling) {
					1 === e.nodeType && e !== t && n.push(e);
				}return n;
			} }), re.fn.extend({ has: function has(e) {
				var t = re(e, this),
				    n = t.length;return this.filter(function () {
					for (var e = 0; n > e; e++) {
						if (re.contains(this, t[e])) return !0;
					}
				});
			}, closest: function closest(e, t) {
				for (var n, r = 0, a = this.length, o = [], i = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; a > r; r++) {
					for (n = this[r]; n && n !== t; n = n.parentNode) {
						if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
							o.push(n);break;
						}
					}
				}return this.pushStack(o.length > 1 ? re.unique(o) : o);
			}, index: function index(e) {
				return e ? "string" == typeof e ? K.call(re(e), this[0]) : K.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}, add: function add(e, t) {
				return this.pushStack(re.unique(re.merge(this.get(), re(e, t))));
			}, addBack: function addBack(e) {
				return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
			} }), re.each({ parent: function parent(e) {
				var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
			}, parents: function parents(e) {
				return re.dir(e, "parentNode");
			}, parentsUntil: function parentsUntil(e, t, n) {
				return re.dir(e, "parentNode", n);
			}, next: function next(e) {
				return l(e, "nextSibling");
			}, prev: function prev(e) {
				return l(e, "previousSibling");
			}, nextAll: function nextAll(e) {
				return re.dir(e, "nextSibling");
			}, prevAll: function prevAll(e) {
				return re.dir(e, "previousSibling");
			}, nextUntil: function nextUntil(e, t, n) {
				return re.dir(e, "nextSibling", n);
			}, prevUntil: function prevUntil(e, t, n) {
				return re.dir(e, "previousSibling", n);
			}, siblings: function siblings(e) {
				return re.sibling((e.parentNode || {}).firstChild, e);
			}, children: function children(e) {
				return re.sibling(e.firstChild);
			}, contents: function contents(e) {
				return e.contentDocument || re.merge([], e.childNodes);
			} }, function (e, t) {
			re.fn[e] = function (n, r) {
				var a = re.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (a = re.filter(r, a)), this.length > 1 && (me[e] || re.unique(a), ge.test(e) && a.reverse()), this.pushStack(a);
			};
		});var be = /\S+/g,
		    ve = {};re.Callbacks = function (e) {
			e = "string" == typeof e ? ve[e] || u(e) : re.extend({}, e);var t,
			    n,
			    r,
			    a,
			    o,
			    i,
			    s = [],
			    l = !e.once && [],
			    c = function c(u) {
				for (t = e.memory && u, n = !0, i = a || 0, a = 0, o = s.length, r = !0; s && o > i; i++) {
					if (s[i].apply(u[0], u[1]) === !1 && e.stopOnFalse) {
						t = !1;break;
					}
				}r = !1, s && (l ? l.length && c(l.shift()) : t ? s = [] : p.disable());
			},
			    p = { add: function add() {
					if (s) {
						var n = s.length;!function i(t) {
							re.each(t, function (t, n) {
								var r = re.type(n);"function" === r ? e.unique && p.has(n) || s.push(n) : n && n.length && "string" !== r && i(n);
							});
						}(arguments), r ? o = s.length : t && (a = n, c(t));
					}return this;
				}, remove: function remove() {
					return s && re.each(arguments, function (e, t) {
						for (var n; (n = re.inArray(t, s, n)) > -1;) {
							s.splice(n, 1), r && (o >= n && o--, i >= n && i--);
						}
					}), this;
				}, has: function has(e) {
					return e ? re.inArray(e, s) > -1 : !(!s || !s.length);
				}, empty: function empty() {
					return s = [], o = 0, this;
				}, disable: function disable() {
					return s = l = t = void 0, this;
				}, disabled: function disabled() {
					return !s;
				}, lock: function lock() {
					return l = void 0, t || p.disable(), this;
				}, locked: function locked() {
					return !l;
				}, fireWith: function fireWith(e, t) {
					return !s || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this;
				}, fire: function fire() {
					return p.fireWith(this, arguments), this;
				}, fired: function fired() {
					return !!n;
				} };return p;
		}, re.extend({ Deferred: function Deferred(e) {
				var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]],
				    n = "pending",
				    r = { state: function state() {
						return n;
					}, always: function always() {
						return a.done(arguments).fail(arguments), this;
					}, then: function then() {
						var e = arguments;return re.Deferred(function (n) {
							re.each(t, function (t, o) {
								var i = re.isFunction(e[t]) && e[t];a[o[1]](function () {
									var e = i && i.apply(this, arguments);e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, i ? [e] : arguments);
								});
							}), e = null;
						}).promise();
					}, promise: function promise(e) {
						return null != e ? re.extend(e, r) : r;
					} },
				    a = {};return r.pipe = r.then, re.each(t, function (e, o) {
					var i = o[2],
					    s = o[3];r[o[1]] = i.add, s && i.add(function () {
						n = s;
					}, t[1 ^ e][2].disable, t[2][2].lock), a[o[0]] = function () {
						return a[o[0] + "With"](this === a ? r : this, arguments), this;
					}, a[o[0] + "With"] = i.fireWith;
				}), r.promise(a), e && e.call(a, a), a;
			}, when: function when(e) {
				var t,
				    n,
				    r,
				    a = 0,
				    o = $.call(arguments),
				    i = o.length,
				    s = 1 !== i || e && re.isFunction(e.promise) ? i : 0,
				    l = 1 === s ? e : re.Deferred(),
				    u = function u(e, n, r) {
					return function (a) {
						n[e] = this, r[e] = arguments.length > 1 ? $.call(arguments) : a, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
					};
				};if (i > 1) for (t = new Array(i), n = new Array(i), r = new Array(i); i > a; a++) {
					o[a] && re.isFunction(o[a].promise) ? o[a].promise().done(u(a, r, o)).fail(l.reject).progress(u(a, n, t)) : --s;
				}return s || l.resolveWith(r, o), l.promise();
			} });var ye;re.fn.ready = function (e) {
			return re.ready.promise().done(e), this;
		}, re.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
				e ? re.readyWait++ : re.ready(!0);
			}, ready: function ready(e) {
				(e === !0 ? --re.readyWait : re.isReady) || (re.isReady = !0, e !== !0 && --re.readyWait > 0 || (ye.resolveWith(te, [re]), re.fn.triggerHandler && (re(te).triggerHandler("ready"), re(te).off("ready"))));
			} }), re.ready.promise = function (e) {
			return ye || (ye = re.Deferred(), "complete" === te.readyState ? setTimeout(re.ready) : (te.addEventListener("DOMContentLoaded", c, !1), n.addEventListener("load", c, !1))), ye.promise(e);
		}, re.ready.promise();var xe = re.access = function (e, t, n, r, a, o, i) {
			var s = 0,
			    l = e.length,
			    u = null == n;if ("object" === re.type(n)) {
				a = !0;for (s in n) {
					re.access(e, t, s, n[s], !0, o, i);
				}
			} else if (void 0 !== r && (a = !0, re.isFunction(r) || (i = !0), u && (i ? (t.call(e, r), t = null) : (u = t, t = function t(e, _t2, n) {
				return u.call(re(e), n);
			})), t)) for (; l > s; s++) {
				t(e[s], n, i ? r : r.call(e[s], s, t(e[s], n)));
			}return a ? e : u ? t.call(e) : l ? t(e[0], n) : o;
		};re.acceptData = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
		}, p.uid = 1, p.accepts = re.acceptData, p.prototype = { key: function key(e) {
				if (!p.accepts(e)) return 0;var t = {},
				    n = e[this.expando];if (!n) {
					n = p.uid++;try {
						t[this.expando] = { value: n }, Object.defineProperties(e, t);
					} catch (r) {
						t[this.expando] = n, re.extend(e, t);
					}
				}return this.cache[n] || (this.cache[n] = {}), n;
			}, set: function set(e, t, n) {
				var r,
				    a = this.key(e),
				    o = this.cache[a];if ("string" == typeof t) o[t] = n;else if (re.isEmptyObject(o)) re.extend(this.cache[a], t);else for (r in t) {
					o[r] = t[r];
				}return o;
			}, get: function get(e, t) {
				var n = this.cache[this.key(e)];return void 0 === t ? n : n[t];
			}, access: function access(e, t, n) {
				var r;return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
			}, remove: function remove(e, t) {
				var n,
				    r,
				    a,
				    o = this.key(e),
				    i = this.cache[o];if (void 0 === t) this.cache[o] = {};else {
					re.isArray(t) ? r = t.concat(t.map(re.camelCase)) : (a = re.camelCase(t), t in i ? r = [t, a] : (r = a, r = r in i ? [r] : r.match(be) || [])), n = r.length;for (; n--;) {
						delete i[r[n]];
					}
				}
			}, hasData: function hasData(e) {
				return !re.isEmptyObject(this.cache[e[this.expando]] || {});
			}, discard: function discard(e) {
				e[this.expando] && delete this.cache[e[this.expando]];
			} };var we = new p(),
		    Ae = new p(),
		    Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    Ce = /([A-Z])/g;re.extend({ hasData: function hasData(e) {
				return Ae.hasData(e) || we.hasData(e);
			}, data: function data(e, t, n) {
				return Ae.access(e, t, n);
			}, removeData: function removeData(e, t) {
				Ae.remove(e, t);
			}, _data: function _data(e, t, n) {
				return we.access(e, t, n);
			}, _removeData: function _removeData(e, t) {
				we.remove(e, t);
			} }), re.fn.extend({ data: function data(e, t) {
				var n,
				    r,
				    a,
				    o = this[0],
				    i = o && o.attributes;if (void 0 === e) {
					if (this.length && (a = Ae.get(o), 1 === o.nodeType && !we.get(o, "hasDataAttrs"))) {
						for (n = i.length; n--;) {
							i[n] && (r = i[n].name, 0 === r.indexOf("data-") && (r = re.camelCase(r.slice(5)), d(o, r, a[r])));
						}we.set(o, "hasDataAttrs", !0);
					}return a;
				}return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
					Ae.set(this, e);
				}) : xe(this, function (t) {
					var n,
					    r = re.camelCase(e);if (o && void 0 === t) {
						if (n = Ae.get(o, e), void 0 !== n) return n;if (n = Ae.get(o, r), void 0 !== n) return n;if (n = d(o, r, void 0), void 0 !== n) return n;
					} else this.each(function () {
						var n = Ae.get(this, r);Ae.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && Ae.set(this, e, t);
					});
				}, null, t, arguments.length > 1, null, !0);
			}, removeData: function removeData(e) {
				return this.each(function () {
					Ae.remove(this, e);
				});
			} }), re.extend({ queue: function queue(e, t, n) {
				var r;return e ? (t = (t || "fx") + "queue", r = we.get(e, t), n && (!r || re.isArray(n) ? r = we.access(e, t, re.makeArray(n)) : r.push(n)), r || []) : void 0;
			}, dequeue: function dequeue(e, t) {
				t = t || "fx";var n = re.queue(e, t),
				    r = n.length,
				    a = n.shift(),
				    o = re._queueHooks(e, t),
				    i = function i() {
					re.dequeue(e, t);
				};"inprogress" === a && (a = n.shift(), r--), a && ("fx" === t && n.unshift("inprogress"), delete o.stop, a.call(e, i, o)), !r && o && o.empty.fire();
			}, _queueHooks: function _queueHooks(e, t) {
				var n = t + "queueHooks";return we.get(e, n) || we.access(e, n, { empty: re.Callbacks("once memory").add(function () {
						we.remove(e, [t + "queue", n]);
					}) });
			} }), re.fn.extend({ queue: function queue(e, t) {
				var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
					var n = re.queue(this, e, t);re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e);
				});
			}, dequeue: function dequeue(e) {
				return this.each(function () {
					re.dequeue(this, e);
				});
			}, clearQueue: function clearQueue(e) {
				return this.queue(e || "fx", []);
			}, promise: function promise(e, t) {
				var n,
				    r = 1,
				    a = re.Deferred(),
				    o = this,
				    i = this.length,
				    s = function s() {
					--r || a.resolveWith(o, [o]);
				};for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;) {
					n = we.get(o[i], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				}return s(), a.promise(t);
			} });var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		    Te = ["Top", "Right", "Bottom", "Left"],
		    Re = function Re(e, t) {
			return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e);
		},
		    ke = /^(?:checkbox|radio)$/i;!function () {
			var e = te.createDocumentFragment(),
			    t = e.appendChild(te.createElement("div")),
			    n = te.createElement("input");n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ee.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ee.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
		}();var Se = "undefined";ee.focusinBubbles = "onfocusin" in n;var Ne = /^key/,
		    Oe = /^(?:mouse|pointer|contextmenu)|click/,
		    Ie = /^(?:focusinfocus|focusoutblur)$/,
		    Le = /^([^.]*)(?:\.(.+)|)$/;re.event = { global: {}, add: function add(e, t, n, r, a) {
				var o,
				    i,
				    s,
				    l,
				    u,
				    c,
				    p,
				    d,
				    f,
				    h,
				    g,
				    m = we.get(e);if (m) for (n.handler && (o = n, n = o.handler, a = o.selector), n.guid || (n.guid = re.guid++), (l = m.events) || (l = m.events = {}), (i = m.handle) || (i = m.handle = function (t) {
					return (typeof re === "undefined" ? "undefined" : _typeof(re)) !== Se && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0;
				}), t = (t || "").match(be) || [""], u = t.length; u--;) {
					s = Le.exec(t[u]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f && (p = re.event.special[f] || {}, f = (a ? p.delegateType : p.bindType) || f, p = re.event.special[f] || {}, c = re.extend({ type: f, origType: g, data: r, handler: n, guid: n.guid, selector: a, needsContext: a && re.expr.match.needsContext.test(a), namespace: h.join(".") }, o), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, r, h, i) !== !1 || e.addEventListener && e.addEventListener(f, i, !1)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), a ? d.splice(d.delegateCount++, 0, c) : d.push(c), re.event.global[f] = !0);
				}
			}, remove: function remove(e, t, n, r, a) {
				var o,
				    i,
				    s,
				    l,
				    u,
				    c,
				    p,
				    d,
				    f,
				    h,
				    g,
				    m = we.hasData(e) && we.get(e);if (m && (l = m.events)) {
					for (t = (t || "").match(be) || [""], u = t.length; u--;) {
						if (s = Le.exec(t[u]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f) {
							for (p = re.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, d = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = o = d.length; o--;) {
								c = d[o], !a && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
							}i && !d.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || re.removeEvent(e, f, m.handle), delete l[f]);
						} else for (f in l) {
							re.event.remove(e, f + t[u], n, r, !0);
						}
					}re.isEmptyObject(l) && (delete m.handle, we.remove(e, "events"));
				}
			}, trigger: function trigger(e, t, r, a) {
				var o,
				    i,
				    s,
				    l,
				    u,
				    c,
				    p,
				    d = [r || te],
				    f = Q.call(e, "type") ? e.type : e,
				    h = Q.call(e, "namespace") ? e.namespace.split(".") : [];if (i = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !Ie.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[re.expando] ? e : new re.Event(f, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), e.isTrigger = a ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : re.makeArray(t, [e]), p = re.event.special[f] || {}, a || !p.trigger || p.trigger.apply(r, t) !== !1)) {
					if (!a && !p.noBubble && !re.isWindow(r)) {
						for (l = p.delegateType || f, Ie.test(l + f) || (i = i.parentNode); i; i = i.parentNode) {
							d.push(i), s = i;
						}s === (r.ownerDocument || te) && d.push(s.defaultView || s.parentWindow || n);
					}for (o = 0; (i = d[o++]) && !e.isPropagationStopped();) {
						e.type = o > 1 ? l : p.bindType || f, c = (we.get(i, "events") || {})[e.type] && we.get(i, "handle"), c && c.apply(i, t), c = u && i[u], c && c.apply && re.acceptData(i) && (e.result = c.apply(i, t), e.result === !1 && e.preventDefault());
					}return e.type = f, a || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), t) !== !1 || !re.acceptData(r) || u && re.isFunction(r[f]) && !re.isWindow(r) && (s = r[u], s && (r[u] = null), re.event.triggered = f, r[f](), re.event.triggered = void 0, s && (r[u] = s)), e.result;
				}
			}, dispatch: function dispatch(e) {
				e = re.event.fix(e);var t,
				    n,
				    r,
				    a,
				    o,
				    i = [],
				    s = $.call(arguments),
				    l = (we.get(this, "events") || {})[e.type] || [],
				    u = re.event.special[e.type] || {};if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
					for (i = re.event.handlers.call(this, e, l), t = 0; (a = i[t++]) && !e.isPropagationStopped();) {
						for (e.currentTarget = a.elem, n = 0; (o = a.handlers[n++]) && !e.isImmediatePropagationStopped();) {
							(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((re.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
						}
					}return u.postDispatch && u.postDispatch.call(this, e), e.result;
				}
			}, handlers: function handlers(e, t) {
				var n,
				    r,
				    a,
				    o,
				    i = [],
				    s = t.delegateCount,
				    l = e.target;if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l !== this; l = l.parentNode || this) {
					if (l.disabled !== !0 || "click" !== e.type) {
						for (r = [], n = 0; s > n; n++) {
							o = t[n], a = o.selector + " ", void 0 === r[a] && (r[a] = o.needsContext ? re(a, this).index(l) >= 0 : re.find(a, this, null, [l]).length), r[a] && r.push(o);
						}r.length && i.push({ elem: l, handlers: r });
					}
				}return s < t.length && i.push({ elem: this, handlers: t.slice(s) }), i;
			}, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
					return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
				} }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, t) {
					var n,
					    r,
					    a,
					    o = t.button;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || te, r = n.documentElement, a = n.body, e.pageX = t.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
				} }, fix: function fix(e) {
				if (e[re.expando]) return e;var t,
				    n,
				    r,
				    a = e.type,
				    o = e,
				    i = this.fixHooks[a];for (i || (this.fixHooks[a] = i = Oe.test(a) ? this.mouseHooks : Ne.test(a) ? this.keyHooks : {}), r = i.props ? this.props.concat(i.props) : this.props, e = new re.Event(o), t = r.length; t--;) {
					n = r[t], e[n] = o[n];
				}return e.target || (e.target = te), 3 === e.target.nodeType && (e.target = e.target.parentNode), i.filter ? i.filter(e, o) : e;
			}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
						return this !== g() && this.focus ? (this.focus(), !1) : void 0;
					}, delegateType: "focusin" }, blur: { trigger: function trigger() {
						return this === g() && this.blur ? (this.blur(), !1) : void 0;
					}, delegateType: "focusout" }, click: { trigger: function trigger() {
						return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0;
					}, _default: function _default(e) {
						return re.nodeName(e.target, "a");
					} }, beforeunload: { postDispatch: function postDispatch(e) {
						void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
					} } }, simulate: function simulate(e, t, n, r) {
				var a = re.extend(new re.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? re.event.trigger(a, null, t) : re.event.dispatch.call(t, a), a.isDefaultPrevented() && n.preventDefault();
			} }, re.removeEvent = function (e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n, !1);
		}, re.Event = function (e, t) {
			return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f : h) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void (this[re.expando] = !0)) : new re.Event(e, t);
		}, re.Event.prototype = { isDefaultPrevented: h, isPropagationStopped: h, isImmediatePropagationStopped: h, preventDefault: function preventDefault() {
				var e = this.originalEvent;this.isDefaultPrevented = f, e && e.preventDefault && e.preventDefault();
			}, stopPropagation: function stopPropagation() {
				var e = this.originalEvent;this.isPropagationStopped = f, e && e.stopPropagation && e.stopPropagation();
			}, stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;this.isImmediatePropagationStopped = f, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
			} }, re.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
			re.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
					var n,
					    r = this,
					    a = e.relatedTarget,
					    o = e.handleObj;return (!a || a !== r && !re.contains(r, a)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
				} };
		}), ee.focusinBubbles || re.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
			var n = function n(e) {
				re.event.simulate(t, e.target, re.event.fix(e), !0);
			};re.event.special[t] = { setup: function setup() {
					var r = this.ownerDocument || this,
					    a = we.access(r, t);a || r.addEventListener(e, n, !0), we.access(r, t, (a || 0) + 1);
				}, teardown: function teardown() {
					var r = this.ownerDocument || this,
					    a = we.access(r, t) - 1;a ? we.access(r, t, a) : (r.removeEventListener(e, n, !0), we.remove(r, t));
				} };
		}), re.fn.extend({ on: function on(e, t, n, r, a) {
				var o, i;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
					"string" != typeof t && (n = n || t, t = void 0);for (i in e) {
						this.on(i, t, n, e[i], a);
					}return this;
				}if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = h;else if (!r) return this;return 1 === a && (o = r, r = function r(e) {
					return re().off(e), o.apply(this, arguments);
				}, r.guid = o.guid || (o.guid = re.guid++)), this.each(function () {
					re.event.add(this, e, r, n, t);
				});
			}, one: function one(e, t, n, r) {
				return this.on(e, t, n, r, 1);
			}, off: function off(e, t, n) {
				var r, a;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, re(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
					for (a in e) {
						this.off(a, t, e[a]);
					}return this;
				}return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
					re.event.remove(this, e, n, t);
				});
			}, trigger: function trigger(e, t) {
				return this.each(function () {
					re.event.trigger(e, t, this);
				});
			}, triggerHandler: function triggerHandler(e, t) {
				var n = this[0];return n ? re.event.trigger(e, t, n, !0) : void 0;
			} });var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    De = /<([\w:]+)/,
		    Me = /<|&#?\w+;/,
		    je = /<(?:script|style|link)/i,
		    He = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    qe = /^$|\/(?:java|ecma)script/i,
		    Fe = /^true\/(.*)/,
		    Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		    Ue = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td, re.extend({ clone: function clone(e, t, n) {
				var r,
				    a,
				    o,
				    i,
				    s = e.cloneNode(!0),
				    l = re.contains(e.ownerDocument, e);if (!(ee.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e))) for (i = w(s), o = w(e), r = 0, a = o.length; a > r; r++) {
					A(o[r], i[r]);
				}if (t) if (n) for (o = o || w(e), i = i || w(s), r = 0, a = o.length; a > r; r++) {
					x(o[r], i[r]);
				} else x(e, s);return i = w(s, "script"), i.length > 0 && y(i, !l && w(e, "script")), s;
			}, buildFragment: function buildFragment(e, t, n, r) {
				for (var a, o, i, s, l, u, c = t.createDocumentFragment(), p = [], d = 0, f = e.length; f > d; d++) {
					if (a = e[d], a || 0 === a) if ("object" === re.type(a)) re.merge(p, a.nodeType ? [a] : a);else if (Me.test(a)) {
						for (o = o || c.appendChild(t.createElement("div")), i = (De.exec(a) || ["", ""])[1].toLowerCase(), s = Ue[i] || Ue._default, o.innerHTML = s[1] + a.replace(Pe, "<$1></$2>") + s[2], u = s[0]; u--;) {
							o = o.lastChild;
						}re.merge(p, o.childNodes), o = c.firstChild, o.textContent = "";
					} else p.push(t.createTextNode(a));
				}for (c.textContent = "", d = 0; a = p[d++];) {
					if ((!r || -1 === re.inArray(a, r)) && (l = re.contains(a.ownerDocument, a), o = w(c.appendChild(a), "script"), l && y(o), n)) for (u = 0; a = o[u++];) {
						qe.test(a.type || "") && n.push(a);
					}
				}return c;
			}, cleanData: function cleanData(e) {
				for (var t, n, r, a, o = re.event.special, i = 0; void 0 !== (n = e[i]); i++) {
					if (re.acceptData(n) && (a = n[we.expando], a && (t = we.cache[a]))) {
						if (t.events) for (r in t.events) {
							o[r] ? re.event.remove(n, r) : re.removeEvent(n, r, t.handle);
						}we.cache[a] && delete we.cache[a];
					}delete Ae.cache[n[Ae.expando]];
				}
			} }), re.fn.extend({ text: function text(e) {
				return xe(this, function (e) {
					return void 0 === e ? re.text(this) : this.empty().each(function () {
						(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
					});
				}, null, e, arguments.length);
			}, append: function append() {
				return this.domManip(arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = m(this, e);t.appendChild(e);
					}
				});
			}, prepend: function prepend() {
				return this.domManip(arguments, function (e) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var t = m(this, e);t.insertBefore(e, t.firstChild);
					}
				});
			}, before: function before() {
				return this.domManip(arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this);
				});
			}, after: function after() {
				return this.domManip(arguments, function (e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
				});
			}, remove: function remove(e, t) {
				for (var n, r = e ? re.filter(e, this) : this, a = 0; null != (n = r[a]); a++) {
					t || 1 !== n.nodeType || re.cleanData(w(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && y(w(n, "script")), n.parentNode.removeChild(n));
				}return this;
			}, empty: function empty() {
				for (var e, t = 0; null != (e = this[t]); t++) {
					1 === e.nodeType && (re.cleanData(w(e, !1)), e.textContent = "");
				}return this;
			}, clone: function clone(e, t) {
				return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
					return re.clone(this, e, t);
				});
			}, html: function html(e) {
				return xe(this, function (e) {
					var t = this[0] || {},
					    n = 0,
					    r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !je.test(e) && !Ue[(De.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = e.replace(Pe, "<$1></$2>");try {
							for (; r > n; n++) {
								t = this[n] || {}, 1 === t.nodeType && (re.cleanData(w(t, !1)), t.innerHTML = e);
							}t = 0;
						} catch (a) {}
					}t && this.empty().append(e);
				}, null, e, arguments.length);
			}, replaceWith: function replaceWith() {
				var e = arguments[0];return this.domManip(arguments, function (t) {
					e = this.parentNode, re.cleanData(w(this)), e && e.replaceChild(t, this);
				}), e && (e.length || e.nodeType) ? this : this.remove();
			}, detach: function detach(e) {
				return this.remove(e, !0);
			}, domManip: function domManip(e, t) {
				e = z.apply([], e);var n,
				    r,
				    a,
				    o,
				    i,
				    s,
				    l = 0,
				    u = this.length,
				    c = this,
				    p = u - 1,
				    d = e[0],
				    f = re.isFunction(d);if (f || u > 1 && "string" == typeof d && !ee.checkClone && He.test(d)) return this.each(function (n) {
					var r = c.eq(n);f && (e[0] = d.call(this, n, r.html())), r.domManip(e, t);
				});if (u && (n = re.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
					for (a = re.map(w(n, "script"), b), o = a.length; u > l; l++) {
						i = n, l !== p && (i = re.clone(i, !0, !0), o && re.merge(a, w(i, "script"))), t.call(this[l], i, l);
					}if (o) for (s = a[a.length - 1].ownerDocument, re.map(a, v), l = 0; o > l; l++) {
						i = a[l], qe.test(i.type || "") && !we.access(i, "globalEval") && re.contains(s, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval(i.textContent.replace(Be, "")));
					}
				}return this;
			} }), re.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
			re.fn[e] = function (e) {
				for (var n, r = [], a = re(e), o = a.length - 1, i = 0; o >= i; i++) {
					n = i === o ? this : this.clone(!0), re(a[i])[t](n), X.apply(r, n.get());
				}return this.pushStack(r);
			};
		});var We,
		    Ve = {},
		    Ge = /^margin/,
		    Ye = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
		    $e = function $e(e) {
			return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : n.getComputedStyle(e, null);
		};!function () {
			function e() {
				i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i.innerHTML = "", a.appendChild(o);var e = n.getComputedStyle(i, null);t = "1%" !== e.top, r = "4px" === e.width, a.removeChild(o);
			}var t,
			    r,
			    a = te.documentElement,
			    o = te.createElement("div"),
			    i = te.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ee.clearCloneStyle = "content-box" === i.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(i), n.getComputedStyle && re.extend(ee, { pixelPosition: function pixelPosition() {
					return e(), t;
				}, boxSizingReliable: function boxSizingReliable() {
					return null == r && e(), r;
				}, reliableMarginRight: function reliableMarginRight() {
					var e,
					    t = i.appendChild(te.createElement("div"));return t.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", i.style.width = "1px", a.appendChild(o), e = !parseFloat(n.getComputedStyle(t, null).marginRight), a.removeChild(o), i.removeChild(t), e;
				} }));
		}(), re.swap = function (e, t, n, r) {
			var a,
			    o,
			    i = {};for (o in t) {
				i[o] = e.style[o], e.style[o] = t[o];
			}a = n.apply(e, r || []);for (o in t) {
				e.style[o] = i[o];
			}return a;
		};var ze = /^(none|table(?!-c[ea]).+)/,
		    Xe = new RegExp("^(" + _e + ")(.*)$", "i"),
		    Ke = new RegExp("^([+-])=(" + _e + ")", "i"),
		    Je = { position: "absolute", visibility: "hidden", display: "block" },
		    Ze = { letterSpacing: "0", fontWeight: "400" },
		    Qe = ["Webkit", "O", "Moz", "ms"];re.extend({ cssHooks: { opacity: { get: function get(e, t) {
						if (t) {
							var n = _(e, "opacity");return "" === n ? "1" : n;
						}
					} } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(e, t, n, r) {
				if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var a,
					    o,
					    i,
					    s = re.camelCase(t),
					    l = e.style;return t = re.cssProps[s] || (re.cssProps[s] = R(l, s)), i = re.cssHooks[t] || re.cssHooks[s], void 0 === n ? i && "get" in i && void 0 !== (a = i.get(e, !1, r)) ? a : l[t] : (o = typeof n === "undefined" ? "undefined" : _typeof(n), "string" === o && (a = Ke.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(re.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || re.cssNumber[s] || (n += "px"), ee.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), i && "set" in i && void 0 === (n = i.set(e, n, r)) || (l[t] = n)), void 0);
				}
			}, css: function css(e, t, n, r) {
				var a,
				    o,
				    i,
				    s = re.camelCase(t);return t = re.cssProps[s] || (re.cssProps[s] = R(e.style, s)), i = re.cssHooks[t] || re.cssHooks[s], i && "get" in i && (a = i.get(e, !0, n)), void 0 === a && (a = _(e, t, r)), "normal" === a && t in Ze && (a = Ze[t]), "" === n || n ? (o = parseFloat(a), n === !0 || re.isNumeric(o) ? o || 0 : a) : a;
			} }), re.each(["height", "width"], function (e, t) {
			re.cssHooks[t] = { get: function get(e, n, r) {
					return n ? ze.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, Je, function () {
						return N(e, t, r);
					}) : N(e, t, r) : void 0;
				}, set: function set(e, n, r) {
					var a = r && $e(e);return k(e, n, r ? S(e, t, r, "border-box" === re.css(e, "boxSizing", !1, a), a) : 0);
				} };
		}), re.cssHooks.marginRight = T(ee.reliableMarginRight, function (e, t) {
			return t ? re.swap(e, { display: "inline-block" }, _, [e, "marginRight"]) : void 0;
		}), re.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
			re.cssHooks[e + t] = { expand: function expand(n) {
					for (var r = 0, a = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) {
						a[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
					}return a;
				} }, Ge.test(e) || (re.cssHooks[e + t].set = k);
		}), re.fn.extend({ css: function css(e, t) {
				return xe(this, function (e, t, n) {
					var r,
					    a,
					    o = {},
					    i = 0;if (re.isArray(t)) {
						for (r = $e(e), a = t.length; a > i; i++) {
							o[t[i]] = re.css(e, t[i], !1, r);
						}return o;
					}return void 0 !== n ? re.style(e, t, n) : re.css(e, t);
				}, e, t, arguments.length > 1);
			}, show: function show() {
				return O(this, !0);
			}, hide: function hide() {
				return O(this);
			}, toggle: function toggle(e) {
				return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
					Re(this) ? re(this).show() : re(this).hide();
				});
			} }), re.Tween = I, I.prototype = { constructor: I, init: function init(e, t, n, r, a, o) {
				this.elem = e, this.prop = n, this.easing = a || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (re.cssNumber[n] ? "" : "px");
			}, cur: function cur() {
				var e = I.propHooks[this.prop];return e && e.get ? e.get(this) : I.propHooks._default.get(this);
			}, run: function run(e) {
				var t,
				    n = I.propHooks[this.prop];return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this;
			} }, I.prototype.init.prototype = I.prototype, I.propHooks = { _default: { get: function get(e) {
					var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
				}, set: function set(e) {
					re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
				} } }, I.propHooks.scrollTop = I.propHooks.scrollLeft = { set: function set(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
			} }, re.easing = { linear: function linear(e) {
				return e;
			}, swing: function swing(e) {
				return .5 - Math.cos(e * Math.PI) / 2;
			} }, re.fx = I.prototype.init, re.fx.step = {};var et,
		    tt,
		    nt = /^(?:toggle|show|hide)$/,
		    rt = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
		    at = /queueHooks$/,
		    ot = [M],
		    it = { "*": [function (e, t) {
				var n = this.createTween(e, t),
				    r = n.cur(),
				    a = rt.exec(t),
				    o = a && a[3] || (re.cssNumber[e] ? "" : "px"),
				    i = (re.cssNumber[e] || "px" !== o && +r) && rt.exec(re.css(n.elem, e)),
				    s = 1,
				    l = 20;if (i && i[3] !== o) {
					o = o || i[3], a = a || [], i = +r || 1;do {
						s = s || ".5", i /= s, re.style(n.elem, e, i + o);
					} while (s !== (s = n.cur() / r) && 1 !== s && --l);
				}return a && (i = n.start = +i || +r || 0, n.unit = o, n.end = a[1] ? i + (a[1] + 1) * a[2] : +a[2]), n;
			}] };re.Animation = re.extend(H, { tweener: function tweener(e, t) {
				re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");for (var n, r = 0, a = e.length; a > r; r++) {
					n = e[r], it[n] = it[n] || [], it[n].unshift(t);
				}
			}, prefilter: function prefilter(e, t) {
				t ? ot.unshift(e) : ot.push(e);
			} }), re.speed = function (e, t, n) {
			var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? re.extend({}, e) : { complete: n || !n && t || re.isFunction(e) && e, duration: e, easing: n && t || t && !re.isFunction(t) && t };return r.duration = re.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in re.fx.speeds ? re.fx.speeds[r.duration] : re.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
				re.isFunction(r.old) && r.old.call(this), r.queue && re.dequeue(this, r.queue);
			}, r;
		}, re.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
				return this.filter(Re).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
			}, animate: function animate(e, t, n, r) {
				var a = re.isEmptyObject(e),
				    o = re.speed(t, n, r),
				    i = function i() {
					var t = H(this, re.extend({}, e), o);(a || we.get(this, "finish")) && t.stop(!0);
				};return i.finish = i, a || o.queue === !1 ? this.each(i) : this.queue(o.queue, i);
			}, stop: function stop(e, t, n) {
				var r = function r(e) {
					var t = e.stop;delete e.stop, t(n);
				};return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
					var t = !0,
					    a = null != e && e + "queueHooks",
					    o = re.timers,
					    i = we.get(this);if (a) i[a] && i[a].stop && r(i[a]);else for (a in i) {
						i[a] && i[a].stop && at.test(a) && r(i[a]);
					}for (a = o.length; a--;) {
						o[a].elem !== this || null != e && o[a].queue !== e || (o[a].anim.stop(n), t = !1, o.splice(a, 1));
					}(t || !n) && re.dequeue(this, e);
				});
			}, finish: function finish(e) {
				return e !== !1 && (e = e || "fx"), this.each(function () {
					var t,
					    n = we.get(this),
					    r = n[e + "queue"],
					    a = n[e + "queueHooks"],
					    o = re.timers,
					    i = r ? r.length : 0;for (n.finish = !0, re.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = o.length; t--;) {
						o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					}for (t = 0; i > t; t++) {
						r[t] && r[t].finish && r[t].finish.call(this);
					}delete n.finish;
				});
			} }), re.each(["toggle", "show", "hide"], function (e, t) {
			var n = re.fn[t];re.fn[t] = function (e, r, a) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, a);
			};
		}), re.each({ slideDown: P("show"), slideUp: P("hide"), slideToggle: P("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
			re.fn[e] = function (e, n, r) {
				return this.animate(t, e, n, r);
			};
		}), re.timers = [], re.fx.tick = function () {
			var e,
			    t = 0,
			    n = re.timers;for (et = re.now(); t < n.length; t++) {
				e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			}n.length || re.fx.stop(), et = void 0;
		}, re.fx.timer = function (e) {
			re.timers.push(e), e() ? re.fx.start() : re.timers.pop();
		}, re.fx.interval = 13, re.fx.start = function () {
			tt || (tt = setInterval(re.fx.tick, re.fx.interval));
		}, re.fx.stop = function () {
			clearInterval(tt), tt = null;
		}, re.fx.speeds = { slow: 600, fast: 200, _default: 400 }, re.fn.delay = function (e, t) {
			return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
				var r = setTimeout(t, e);n.stop = function () {
					clearTimeout(r);
				};
			});
		}, function () {
			var e = te.createElement("input"),
			    t = te.createElement("select"),
			    n = t.appendChild(te.createElement("option"));e.type = "checkbox", ee.checkOn = "" !== e.value, ee.optSelected = n.selected, t.disabled = !0, ee.optDisabled = !n.disabled, e = te.createElement("input"), e.value = "t", e.type = "radio", ee.radioValue = "t" === e.value;
		}();var st,
		    lt,
		    ut = re.expr.attrHandle;re.fn.extend({ attr: function attr(e, t) {
				return xe(this, re.attr, e, t, arguments.length > 1);
			}, removeAttr: function removeAttr(e) {
				return this.each(function () {
					re.removeAttr(this, e);
				});
			} }), re.extend({ attr: function attr(e, t, n) {
				var r,
				    a,
				    o = e.nodeType;if (e && 3 !== o && 8 !== o && 2 !== o) return _typeof(e.getAttribute) === Se ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (t = t.toLowerCase(), r = re.attrHooks[t] || (re.expr.match.bool.test(t) ? lt : st)), void 0 === n ? r && "get" in r && null !== (a = r.get(e, t)) ? a : (a = re.find.attr(e, t), null == a ? void 0 : a) : null !== n ? r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t));
			}, removeAttr: function removeAttr(e, t) {
				var n,
				    r,
				    a = 0,
				    o = t && t.match(be);if (o && 1 === e.nodeType) for (; n = o[a++];) {
					r = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
				}
			}, attrHooks: { type: { set: function set(e, t) {
						if (!ee.radioValue && "radio" === t && re.nodeName(e, "input")) {
							var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
						}
					} } } }), lt = { set: function set(e, t, n) {
				return t === !1 ? re.removeAttr(e, n) : e.setAttribute(n, n), n;
			} }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
			var n = ut[t] || re.find.attr;ut[t] = function (e, t, r) {
				var a, o;return r || (o = ut[t], ut[t] = a, a = null != n(e, t, r) ? t.toLowerCase() : null, ut[t] = o), a;
			};
		});var ct = /^(?:input|select|textarea|button)$/i;re.fn.extend({ prop: function prop(e, t) {
				return xe(this, re.prop, e, t, arguments.length > 1);
			}, removeProp: function removeProp(e) {
				return this.each(function () {
					delete this[re.propFix[e] || e];
				});
			} }), re.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, t, n) {
				var r,
				    a,
				    o,
				    i = e.nodeType;if (e && 3 !== i && 8 !== i && 2 !== i) return o = 1 !== i || !re.isXMLDoc(e), o && (t = re.propFix[t] || t, a = re.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (r = a.set(e, n, t)) ? r : e[t] = n : a && "get" in a && null !== (r = a.get(e, t)) ? r : e[t];
			}, propHooks: { tabIndex: { get: function get(e) {
						return e.hasAttribute("tabindex") || ct.test(e.nodeName) || e.href ? e.tabIndex : -1;
					} } } }), ee.optSelected || (re.propHooks.selected = { get: function get(e) {
				var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
			} }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			re.propFix[this.toLowerCase()] = this;
		});var pt = /[\t\r\n\f]/g;re.fn.extend({ addClass: function addClass(e) {
				var t,
				    n,
				    r,
				    a,
				    o,
				    i,
				    s = "string" == typeof e && e,
				    l = 0,
				    u = this.length;if (re.isFunction(e)) return this.each(function (t) {
					re(this).addClass(e.call(this, t, this.className));
				});if (s) for (t = (e || "").match(be) || []; u > l; l++) {
					if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pt, " ") : " ")) {
						for (o = 0; a = t[o++];) {
							r.indexOf(" " + a + " ") < 0 && (r += a + " ");
						}i = re.trim(r), n.className !== i && (n.className = i);
					}
				}return this;
			}, removeClass: function removeClass(e) {
				var t,
				    n,
				    r,
				    a,
				    o,
				    i,
				    s = 0 === arguments.length || "string" == typeof e && e,
				    l = 0,
				    u = this.length;if (re.isFunction(e)) return this.each(function (t) {
					re(this).removeClass(e.call(this, t, this.className));
				});if (s) for (t = (e || "").match(be) || []; u > l; l++) {
					if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pt, " ") : "")) {
						for (o = 0; a = t[o++];) {
							for (; r.indexOf(" " + a + " ") >= 0;) {
								r = r.replace(" " + a + " ", " ");
							}
						}i = e ? re.trim(r) : "", n.className !== i && (n.className = i);
					}
				}return this;
			}, toggleClass: function toggleClass(e, t) {
				var n = typeof e === "undefined" ? "undefined" : _typeof(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
					re(this).toggleClass(e.call(this, n, this.className, t), t);
				}) : this.each(function () {
					if ("string" === n) for (var t, r = 0, a = re(this), o = e.match(be) || []; t = o[r++];) {
						a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
					} else (n === Se || "boolean" === n) && (this.className && we.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : we.get(this, "__className__") || "");
				});
			}, hasClass: function hasClass(e) {
				for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) {
					if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(pt, " ").indexOf(t) >= 0) return !0;
				}return !1;
			} });var dt = /\r/g;re.fn.extend({ val: function val(e) {
				var t,
				    n,
				    r,
				    a = this[0];{
					if (arguments.length) return r = re.isFunction(e), this.each(function (n) {
						var a;1 === this.nodeType && (a = r ? e.call(this, n, re(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : re.isArray(a) && (a = re.map(a, function (e) {
							return null == e ? "" : e + "";
						})), t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a));
					});if (a) return t = re.valHooks[a.type] || re.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n);
				}
			} }), re.extend({ valHooks: { option: { get: function get(e) {
						var t = re.find.attr(e, "value");return null != t ? t : re.trim(re.text(e));
					} }, select: { get: function get(e) {
						for (var t, n, r = e.options, a = e.selectedIndex, o = "select-one" === e.type || 0 > a, i = o ? null : [], s = o ? a + 1 : r.length, l = 0 > a ? s : o ? a : 0; s > l; l++) {
							if (n = r[l], (n.selected || l === a) && (ee.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
								if (t = re(n).val(), o) return t;i.push(t);
							}
						}return i;
					}, set: function set(e, t) {
						for (var n, r, a = e.options, o = re.makeArray(t), i = a.length; i--;) {
							r = a[i], (r.selected = re.inArray(r.value, o) >= 0) && (n = !0);
						}return n || (e.selectedIndex = -1), o;
					} } } }), re.each(["radio", "checkbox"], function () {
			re.valHooks[this] = { set: function set(e, t) {
					return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0;
				} }, ee.checkOn || (re.valHooks[this].get = function (e) {
				return null === e.getAttribute("value") ? "on" : e.value;
			});
		}), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
			re.fn[t] = function (e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
			};
		}), re.fn.extend({ hover: function hover(e, t) {
				return this.mouseenter(e).mouseleave(t || e);
			}, bind: function bind(e, t, n) {
				return this.on(e, null, t, n);
			}, unbind: function unbind(e, t) {
				return this.off(e, null, t);
			}, delegate: function delegate(e, t, n, r) {
				return this.on(t, e, n, r);
			}, undelegate: function undelegate(e, t, n) {
				return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
			} });var ft = re.now(),
		    ht = /\?/;re.parseJSON = function (e) {
			return JSON.parse(e + "");
		}, re.parseXML = function (e) {
			var t, n;if (!e || "string" != typeof e) return null;try {
				n = new DOMParser(), t = n.parseFromString(e, "text/xml");
			} catch (r) {
				t = void 0;
			}return (!t || t.getElementsByTagName("parsererror").length) && re.error("Invalid XML: " + e), t;
		};var gt = /#.*$/,
		    mt = /([?&])_=[^&]*/,
		    bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		    vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    yt = /^(?:GET|HEAD)$/,
		    xt = /^\/\//,
		    wt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		    At = {},
		    Et = {},
		    Ct = "*/".concat("*"),
		    _t = n.location.href,
		    Tt = wt.exec(_t.toLowerCase()) || [];re.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: _t, type: "GET", isLocal: vt.test(Tt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ct, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": re.parseJSON, "text xml": re.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
				return t ? B(B(e, re.ajaxSettings), t) : B(re.ajaxSettings, e);
			}, ajaxPrefilter: q(At), ajaxTransport: q(Et), ajax: function ajax(e, t) {
				function n(e, t, n, i) {
					var l,
					    c,
					    b,
					    v,
					    x,
					    A = t;2 !== y && (y = 2, s && clearTimeout(s), r = void 0, o = i || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (v = U(p, w, n)), v = W(p, v, w, l), l ? (p.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (re.lastModified[a] = x), x = w.getResponseHeader("etag"), x && (re.etag[a] = x)), 204 === e || "HEAD" === p.type ? A = "nocontent" : 304 === e ? A = "notmodified" : (A = v.state, c = v.data, b = v.error, l = !b)) : (b = A, (e || !A) && (A = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || A) + "", l ? h.resolveWith(d, [c, A, w]) : h.rejectWith(d, [w, A, b]), w.statusCode(m), m = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? c : b]), g.fireWith(d, [w, A]), u && (f.trigger("ajaxComplete", [w, p]), --re.active || re.event.trigger("ajaxStop")));
				}"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t = e, e = void 0), t = t || {};var r,
				    a,
				    o,
				    i,
				    s,
				    l,
				    u,
				    c,
				    p = re.ajaxSetup({}, t),
				    d = p.context || p,
				    f = p.context && (d.nodeType || d.jquery) ? re(d) : re.event,
				    h = re.Deferred(),
				    g = re.Callbacks("once memory"),
				    m = p.statusCode || {},
				    b = {},
				    v = {},
				    y = 0,
				    x = "canceled",
				    w = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
						var t;if (2 === y) {
							if (!i) for (i = {}; t = bt.exec(o);) {
								i[t[1].toLowerCase()] = t[2];
							}t = i[e.toLowerCase()];
						}return null == t ? null : t;
					}, getAllResponseHeaders: function getAllResponseHeaders() {
						return 2 === y ? o : null;
					}, setRequestHeader: function setRequestHeader(e, t) {
						var n = e.toLowerCase();return y || (e = v[n] = v[n] || e, b[e] = t), this;
					}, overrideMimeType: function overrideMimeType(e) {
						return y || (p.mimeType = e), this;
					}, statusCode: function statusCode(e) {
						var t;if (e) if (2 > y) for (t in e) {
							m[t] = [m[t], e[t]];
						} else w.always(e[w.status]);return this;
					}, abort: function abort(e) {
						var t = e || x;return r && r.abort(t), n(0, t), this;
					} };if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || _t) + "").replace(gt, "").replace(xt, Tt[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(be) || [""], null == p.crossDomain && (l = wt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === Tt[1] && l[2] === Tt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), F(At, p, t, w), 2 === y) return w;u = re.event && p.global, u && 0 === re.active++ && re.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !yt.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (ht.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = mt.test(a) ? a.replace(mt, "$1_=" + ft++) : a + (ht.test(a) ? "&" : "?") + "_=" + ft++)), p.ifModified && (re.lastModified[a] && w.setRequestHeader("If-Modified-Since", re.lastModified[a]), re.etag[a] && w.setRequestHeader("If-None-Match", re.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Ct + "; q=0.01" : "") : p.accepts["*"]);for (c in p.headers) {
					w.setRequestHeader(c, p.headers[c]);
				}if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === y)) return w.abort();x = "abort";for (c in { success: 1, error: 1, complete: 1 }) {
					w[c](p[c]);
				}if (r = F(Et, p, t, w)) {
					w.readyState = 1, u && f.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
						w.abort("timeout");
					}, p.timeout));try {
						y = 1, r.send(b, n);
					} catch (A) {
						if (!(2 > y)) throw A;n(-1, A);
					}
				} else n(-1, "No Transport");return w;
			}, getJSON: function getJSON(e, t, n) {
				return re.get(e, t, n, "json");
			}, getScript: function getScript(e, t) {
				return re.get(e, void 0, t, "script");
			} }), re.each(["get", "post"], function (e, t) {
			re[t] = function (e, n, r, a) {
				return re.isFunction(n) && (a = a || r, r = n, n = void 0), re.ajax({ url: e, type: t, dataType: a, data: n, success: r });
			};
		}), re._evalUrl = function (e) {
			return re.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
		}, re.fn.extend({ wrapAll: function wrapAll(e) {
				var t;return re.isFunction(e) ? this.each(function (t) {
					re(this).wrapAll(e.call(this, t));
				}) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
					for (var e = this; e.firstElementChild;) {
						e = e.firstElementChild;
					}return e;
				}).append(this)), this);
			}, wrapInner: function wrapInner(e) {
				return re.isFunction(e) ? this.each(function (t) {
					re(this).wrapInner(e.call(this, t));
				}) : this.each(function () {
					var t = re(this),
					    n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
				});
			}, wrap: function wrap(e) {
				var t = re.isFunction(e);return this.each(function (n) {
					re(this).wrapAll(t ? e.call(this, n) : e);
				});
			}, unwrap: function unwrap() {
				return this.parent().each(function () {
					re.nodeName(this, "body") || re(this).replaceWith(this.childNodes);
				}).end();
			} }), re.expr.filters.hidden = function (e) {
			return e.offsetWidth <= 0 && e.offsetHeight <= 0;
		}, re.expr.filters.visible = function (e) {
			return !re.expr.filters.hidden(e);
		};var Rt = /%20/g,
		    kt = /\[\]$/,
		    St = /\r?\n/g,
		    Nt = /^(?:submit|button|image|reset|file)$/i,
		    Ot = /^(?:input|select|textarea|keygen)/i;re.param = function (e, t) {
			var n,
			    r = [],
			    a = function a(e, t) {
				t = re.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
			};if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
				a(this.name, this.value);
			});else for (n in e) {
				V(n, e[n], t, a);
			}return r.join("&").replace(Rt, "+");
		}, re.fn.extend({ serialize: function serialize() {
				return re.param(this.serializeArray());
			}, serializeArray: function serializeArray() {
				return this.map(function () {
					var e = re.prop(this, "elements");return e ? re.makeArray(e) : this;
				}).filter(function () {
					var e = this.type;return this.name && !re(this).is(":disabled") && Ot.test(this.nodeName) && !Nt.test(e) && (this.checked || !ke.test(e));
				}).map(function (e, t) {
					var n = re(this).val();return null == n ? null : re.isArray(n) ? re.map(n, function (e) {
						return { name: t.name, value: e.replace(St, "\r\n") };
					}) : { name: t.name, value: n.replace(St, "\r\n") };
				}).get();
			} }), re.ajaxSettings.xhr = function () {
			try {
				return new XMLHttpRequest();
			} catch (e) {}
		};var It = 0,
		    Lt = {},
		    Pt = { 0: 200, 1223: 204 },
		    Dt = re.ajaxSettings.xhr();n.attachEvent && n.attachEvent("onunload", function () {
			for (var e in Lt) {
				Lt[e]();
			}
		}), ee.cors = !!Dt && "withCredentials" in Dt, ee.ajax = Dt = !!Dt, re.ajaxTransport(function (e) {
			var _t3;return ee.cors || Dt && !e.crossDomain ? { send: function send(n, r) {
					var a,
					    o = e.xhr(),
					    i = ++It;if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
						o[a] = e.xhrFields[a];
					}e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");for (a in n) {
						o.setRequestHeader(a, n[a]);
					}_t3 = function t(e) {
						return function () {
							_t3 && (delete Lt[i], _t3 = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Pt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders()));
						};
					}, o.onload = _t3(), o.onerror = _t3("error"), _t3 = Lt[i] = _t3("abort");try {
						o.send(e.hasContent && e.data || null);
					} catch (s) {
						if (_t3) throw s;
					}
				}, abort: function abort() {
					_t3 && _t3();
				} } : void 0;
		}), re.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
					return re.globalEval(e), e;
				} } }), re.ajaxPrefilter("script", function (e) {
			void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
		}), re.ajaxTransport("script", function (e) {
			if (e.crossDomain) {
				var t, _n;return { send: function send(r, a) {
						t = re("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
							t.remove(), _n = null, e && a("error" === e.type ? 404 : 200, e.type);
						}), te.head.appendChild(t[0]);
					}, abort: function abort() {
						_n && _n();
					} };
			}
		});var Mt = [],
		    jt = /(=)\?(?=&|$)|\?\?/;re.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
				var e = Mt.pop() || re.expando + "_" + ft++;return this[e] = !0, e;
			} }), re.ajaxPrefilter("json jsonp", function (e, t, r) {
			var a,
			    o,
			    i,
			    s = e.jsonp !== !1 && (jt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(e.data) && "data");return s || "jsonp" === e.dataTypes[0] ? (a = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(jt, "$1" + a) : e.jsonp !== !1 && (e.url += (ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function () {
				return i || re.error(a + " was not called"), i[0];
			}, e.dataTypes[0] = "json", o = n[a], n[a] = function () {
				i = arguments;
			}, r.always(function () {
				n[a] = o, e[a] && (e.jsonpCallback = t.jsonpCallback, Mt.push(a)), i && re.isFunction(o) && o(i[0]), i = o = void 0;
			}), "script") : void 0;
		}), re.parseHTML = function (e, t, n) {
			if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || te;var r = ce.exec(e),
			    a = !n && [];return r ? [t.createElement(r[1])] : (r = re.buildFragment([e], t, a), a && a.length && re(a).remove(), re.merge([], r.childNodes));
		};var Ht = re.fn.load;re.fn.load = function (e, t, n) {
			if ("string" != typeof e && Ht) return Ht.apply(this, arguments);var r,
			    a,
			    o,
			    i = this,
			    s = e.indexOf(" ");return s >= 0 && (r = re.trim(e.slice(s)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (a = "POST"), i.length > 0 && re.ajax({ url: e, type: a, dataType: "html", data: t }).done(function (e) {
				o = arguments, i.html(r ? re("<div>").append(re.parseHTML(e)).find(r) : e);
			}).complete(n && function (e, t) {
				i.each(n, o || [e.responseText, t, e]);
			}), this;
		}, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
			re.fn[t] = function (e) {
				return this.on(t, e);
			};
		}), re.expr.filters.animated = function (e) {
			return re.grep(re.timers, function (t) {
				return e === t.elem;
			}).length;
		};var qt = n.document.documentElement;re.offset = { setOffset: function setOffset(e, t, n) {
				var r,
				    a,
				    o,
				    i,
				    s,
				    l,
				    u,
				    c = re.css(e, "position"),
				    p = re(e),
				    d = {};"static" === c && (e.style.position = "relative"), s = p.offset(), o = re.css(e, "top"), l = re.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = p.position(), i = r.top, a = r.left) : (i = parseFloat(o) || 0, a = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + a), "using" in t ? t.using.call(e, d) : p.css(d);
			} }, re.fn.extend({ offset: function offset(e) {
				if (arguments.length) return void 0 === e ? this : this.each(function (t) {
					re.offset.setOffset(this, e, t);
				});var t,
				    n,
				    r = this[0],
				    a = { top: 0, left: 0 },
				    o = r && r.ownerDocument;if (o) return t = o.documentElement, re.contains(t, r) ? (_typeof(r.getBoundingClientRect) !== Se && (a = r.getBoundingClientRect()), n = G(o), { top: a.top + n.pageYOffset - t.clientTop, left: a.left + n.pageXOffset - t.clientLeft }) : a;
			}, position: function position() {
				if (this[0]) {
					var e,
					    t,
					    n = this[0],
					    r = { top: 0, left: 0 };return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (r = e.offset()), r.top += re.css(e[0], "borderTopWidth", !0), r.left += re.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - re.css(n, "marginTop", !0), left: t.left - r.left - re.css(n, "marginLeft", !0) };
				}
			}, offsetParent: function offsetParent() {
				return this.map(function () {
					for (var e = this.offsetParent || qt; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) {
						e = e.offsetParent;
					}return e || qt;
				});
			} }), re.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
			var r = "pageYOffset" === t;re.fn[e] = function (a) {
				return xe(this, function (e, a, o) {
					var i = G(e);return void 0 === o ? i ? i[t] : e[a] : void (i ? i.scrollTo(r ? n.pageXOffset : o, r ? o : n.pageYOffset) : e[a] = o);
				}, e, a, arguments.length, null);
			};
		}), re.each(["top", "left"], function (e, t) {
			re.cssHooks[t] = T(ee.pixelPosition, function (e, n) {
				return n ? (n = _(e, t), Ye.test(n) ? re(e).position()[t] + "px" : n) : void 0;
			});
		}), re.each({ Height: "height", Width: "width" }, function (e, t) {
			re.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
				re.fn[r] = function (r, a) {
					var o = arguments.length && (n || "boolean" != typeof r),
					    i = n || (r === !0 || a === !0 ? "margin" : "border");return xe(this, function (t, n, r) {
						var a;return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? re.css(t, n, i) : re.style(t, n, r, i);
					}, t, o ? r : void 0, o, null);
				};
			});
		}), re.fn.size = function () {
			return this.length;
		}, re.fn.andSelf = re.fn.addBack, r = [], a = function () {
			return re;
		}.apply(t, r), !(void 0 !== a && (e.exports = a));var Ft = n.jQuery,
		    Bt = n.$;return re.noConflict = function (e) {
			return n.$ === re && (n.$ = Bt), e && n.jQuery === re && (n.jQuery = Ft), re;
		}, (typeof o === "undefined" ? "undefined" : _typeof(o)) === Se && (n.jQuery = n.$ = re), re;
	});
}, function (e, t, n) {
	(function (t) {
		"use strict";
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}var a = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
				}
			}return function (t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t;
			};
		}(),
		    o = n(21);n(49);var i = function () {
			function e() {
				r(this, e), this.panel = new o(this), this.$checkbox = null;
			}return a(e, [{ key: "getTitle", value: function value() {
					return "New plugin";
				} }, { key: "getDescription", value: function value() {
					return "";
				} }, { key: "summary", value: function value(e) {
					return this.panel.setSummary(e);
				} }, { key: "about", value: function value(e) {
					return this.panel.setAbout(e);
				} }, { key: "error", value: function value(e, t, n) {
					return this.panel.addError(e, t, n);
				} }, { key: "render", value: function value(e) {
					var n = this;this.$checkbox = t("input", { className: "tota11y-plugin-checkbox tota11y-sr-only", type: "checkbox", onClick: function onClick() {
							return e(n);
						} });var r = t("label", { className: "tota11y-plugin-switch" }, this.$checkbox, t("div", { "aria-hidden": "true", className: "tota11y-plugin-indicator" }, "✓"), t("div", { className: "tota11y-plugin-info" }, t("div", { className: "tota11y-plugin-title" }, this.getTitle()), t("div", { className: "tota11y-plugin-description" }, this.getDescription()))),
					    a = t("li", { role: "menu-item", className: "tota11y-plugin" }, r);return a;
				} }, { key: "activate", value: function value() {
					this.run(), this.panel.render();
				} }, { key: "deactivate", value: function value() {
					this.cleanup(), this.panel.destroy(), this.$checkbox.prop("checked", !1);
				} }]), e;
		}();e.exports = i;
	}).call(t, n(4));
}, function (e, t, n) {
	"use strict";
	var r = n(1),
	    a = n(33);n(47);var o = 25;window.requestAnimationFrame = window.requestAnimationFrame || function (e) {
		window.setTimeout(e, 16);
	}, e.exports = function (e) {
		var t = "tota11y-annotation-" + e,
		    n = [],
		    i = function i(e, a) {
			var o = r("<div>").addClass("tota11y").addClass(t).addClass(a).css(e.position()).data({ $el: e });return n.push({ $annotation: o, $parent: e.offsetParent() }), o;
		},
		    s = 20;return function l() {
			for (var e = 0; n.length > 0 && s > e; e++) {
				var t = n.shift();t.$parent.append(t.$annotation);
			}window.requestAnimationFrame(l);
		}(), r(window).resize(function () {
			var e = r("." + t),
			    n = e.map(function (e, t) {
				return r(t).data("$el").position();
			});e.each(function (e, t) {
				r(t).css({ top: n[e].top, left: n[e].left });
			});
		}), { label: function label(e) {
				var t = arguments.length <= 1 || void 0 === arguments[1] ? e.prop("tagName").toLowerCase() : arguments[1];return function () {
					var n = i(e, "tota11y-label");return n.html(t);
				}();
			}, errorLabel: function errorLabel(e, t, n, o) {
				var i = r(a({ text: t, detail: n, hasErrorEntry: !!o }));return o && (i.find(".tota11y-label-link").click(function (e) {
					e.preventDefault(), e.stopPropagation(), o.show();
				}), i.hover(function () {
					o.$trigger.addClass("trigger-highlight");
				}, function () {
					o.$trigger.removeClass("trigger-highlight");
				})), this.label(e).addClass("tota11y-label-error").html(i);
			}, highlight: function highlight(e) {
				var t = i(e, "tota11y-highlight");return t.css({ width: Math.max(o, e.outerWidth(!0)), height: Math.max(o, e.outerHeight(!0)) });
			}, toggleHighlight: function toggleHighlight(e, t) {
				var n = this,
				    r = void 0;t.on("mouseenter focus", function () {
					r && r.remove(), r = n.highlight(e);
				}), t.on("mouseleave blur", function () {
					r && (r.remove(), r = null);
				});
			}, hide: function hide() {
				r(".tota11y.tota11y-label").hide();
			}, show: function show() {
				r(".tota11y.tota11y-label").show();
			}, removeAll: function removeAll() {
				r("." + t).remove();
			} };
	};
}, function (e, t, n) {
	"use strict";
	function r(e, t) {
		var a = arguments,
		    o = n(1);if (void 0 === t) return e;if (e.render) return e.render(t && t.onClick);var i,
		    s,
		    l,
		    u = function () {
			var n = o("<" + e + ">");if (null !== t) for (var u in t) {
				if ("onClick" === u) {
					var c = t[u];n.click(c);
				} else if (/^aria-/.test(u) || "role" === u) {
					var p = t[u];n.attr(u, p);
				} else {
					var p = t[u];n.prop(u, p);
				}
			}for (i = a.length, s = Array(i > 2 ? i - 2 : 0), l = 2; i > l; l++) {
				s[l - 2] = a[l];
			}return s.forEach(function (e) {
				n.append(r(e));
			}), { v: n };
		}();return "object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) ? u.v : void 0;
	}e.exports = r;
}, function (e, t) {
	e.exports = function () {
		var e = [];return e.toString = function () {
			for (var e = [], t = 0; t < this.length; t++) {
				var n = this[t];n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1]);
			}return e.join("");
		}, e.i = function (t, n) {
			"string" == typeof t && (t = [[null, t, ""]]);for (var r = {}, a = 0; a < this.length; a++) {
				var o = this[a][0];"number" == typeof o && (r[o] = !0);
			}for (var a = 0; a < t.length; a++) {
				var i = t[a];"number" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i));
			}
		}, e;
	};
}, function (e, t, n) {
	e.exports = n(36)["default"];
}, function (e, t, n) {
	function r(e, t) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n],
			    a = p[r.id];if (a) {
				a.refs++;for (var o = 0; o < a.parts.length; o++) {
					a.parts[o](r.parts[o]);
				}for (; o < r.parts.length; o++) {
					a.parts.push(s(r.parts[o], t));
				}
			} else {
				for (var i = [], o = 0; o < r.parts.length; o++) {
					i.push(s(r.parts[o], t));
				}p[r.id] = { id: r.id, refs: 1, parts: i };
			}
		}
	}function a(e) {
		for (var t = [], n = {}, r = 0; r < e.length; r++) {
			var a = e[r],
			    o = a[0],
			    i = a[1],
			    s = a[2],
			    l = a[3],
			    u = { css: i, media: s, sourceMap: l };n[o] ? n[o].parts.push(u) : t.push(n[o] = { id: o, parts: [u] });
		}return t;
	}function o() {
		var e = document.createElement("style"),
		    t = h();return e.type = "text/css", t.appendChild(e), e;
	}function i() {
		var e = document.createElement("link"),
		    t = h();return e.rel = "stylesheet", t.appendChild(e), e;
	}function s(e, t) {
		var n, r, a;if (t.singleton) {
			var s = m++;n = g || (g = o()), r = l.bind(null, n, s, !1), a = l.bind(null, n, s, !0);
		} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = i(), r = c.bind(null, n), a = function a() {
			n.parentNode.removeChild(n), n.href && URL.revokeObjectURL(n.href);
		}) : (n = o(), r = u.bind(null, n), a = function a() {
			n.parentNode.removeChild(n);
		});return r(e), function (t) {
			if (t) {
				if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;r(e = t);
			} else a();
		};
	}function l(e, t, n, r) {
		var a = n ? "" : r.css;if (e.styleSheet) e.styleSheet.cssText = b(t, a);else {
			var o = document.createTextNode(a),
			    i = e.childNodes;i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(o, i[t]) : e.appendChild(o);
		}
	}function u(e, t) {
		var n = t.css,
		    r = t.media;t.sourceMap;if (r && e.setAttribute("media", r), e.styleSheet) e.styleSheet.cssText = n;else {
			for (; e.firstChild;) {
				e.removeChild(e.firstChild);
			}e.appendChild(document.createTextNode(n));
		}
	}function c(e, t) {
		var n = t.css,
		    r = (t.media, t.sourceMap);r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(r)) + " */");var a = new Blob([n], { type: "text/css" }),
		    o = e.href;e.href = URL.createObjectURL(a), o && URL.revokeObjectURL(o);
	}var p = {},
	    d = function d(e) {
		var t;return function () {
			return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
		};
	},
	    f = d(function () {
		return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
		);
	}),
	    h = d(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	    g = null,
	    m = 0;e.exports = function (e, t) {
		t = t || {}, "undefined" == typeof t.singleton && (t.singleton = f());var n = a(e);return r(n, t), function (e) {
			for (var o = [], i = 0; i < n.length; i++) {
				var s = n[i],
				    l = p[s.id];l.refs--, o.push(l);
			}if (e) {
				var u = a(e);r(u, t);
			}for (var i = 0; i < o.length; i++) {
				var l = o[i];if (0 === l.refs) {
					for (var c = 0; c < l.parts.length; c++) {
						l.parts[c]();
					}delete p[l.id];
				}
			}
		};
	};var b = function () {
		var e = [];return function (t, n) {
			return e[t] = n, e.filter(Boolean).join("\n");
		};
	}();
},, function (e, t) {
	"use strict";
	function n(e, t) {
		var a = t && t.loc,
		    o = void 0,
		    i = void 0;a && (o = a.start.line, i = a.start.column, e += " - " + o + ":" + i);for (var s = Error.prototype.constructor.call(this, e), l = 0; l < r.length; l++) {
			this[r[l]] = s[r[l]];
		}Error.captureStackTrace && Error.captureStackTrace(this, n), a && (this.lineNumber = o, this.column = i);
	}t.__esModule = !0;var r = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];n.prototype = new Error(), t["default"] = n, e.exports = t["default"];
}, function (e, t) {
	"use strict";
	function n(e) {
		return u[e];
	}function r(e) {
		for (var t = 1; t < arguments.length; t++) {
			for (var n in arguments[t]) {
				Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
			}
		}return e;
	}function a(e, t) {
		for (var n = 0, r = e.length; r > n; n++) {
			if (e[n] === t) return n;
		}return -1;
	}function o(e) {
		if ("string" != typeof e) {
			if (e && e.toHTML) return e.toHTML();if (null == e) return "";if (!e) return e + "";e = "" + e;
		}return p.test(e) ? e.replace(c, n) : e;
	}function i(e) {
		return e || 0 === e ? h(e) && 0 === e.length ? !0 : !1 : !0;
	}function s(e, t) {
		return e.path = t, e;
	}function l(e, t) {
		return (e ? e + "." : "") + t;
	}t.__esModule = !0, t.extend = r, t.indexOf = a, t.escapeExpression = o, t.isEmpty = i, t.blockParams = s, t.appendContextPath = l;var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
	    c = /[&<>"'`]/g,
	    p = /[&<>"'`]/,
	    d = Object.prototype.toString;t.toString = d;var f = function f(e) {
		return "function" == typeof e;
	};f(/x/) && (t.isFunction = f = function f(e) {
		return "function" == typeof e && "[object Function]" === d.call(e);
	});var f;t.isFunction = f;var h = Array.isArray || function (e) {
		return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? "[object Array]" === d.call(e) : !1;
	};t.isArray = h;
}, function (e, t) {
	"use strict";
	function n() {
		return axs.AuditRules.getRules().map(function (e) {
			return e.name;
		});
	}function r(e) {
		var t = new axs.AuditConfiguration();return t.showUnsupportedRulesWarning = !1, t.ignoreSelectors(e, ".tota11y *"), n().forEach(function (n) {
			n !== e && t.ignoreSelectors(n, "*");
		}), t;
	}function a() {
		axs.AuditRule.collectMatchingElements = function (e, t, n, r) {
			if (e.nodeType === Node.ELEMENT_NODE) var a = e;if (a && t.call(null, a) && n.push(a), a) {
				var o = a.shadowRoot || a.webkitShadowRoot;if (o) return void axs.AuditRule.collectMatchingElements(o, t, n, o);
			}if (a && "content" == a.localName) for (var i = a, s = i.getDistributedNodes(), l = 0; l < s.length; l++) {
				axs.AuditRule.collectMatchingElements(s[l], t, n, r);
			} else {
				if (a && "shadow" == a.localName) {
					var u = a;if (r) for (var s = u.getDistributedNodes(), l = 0; l < s.length; l++) {
						axs.AuditRule.collectMatchingElements(s[l], t, n, r);
					} else console.warn("ShadowRoot not provided for", a);
				}for (var c = e.firstChild; null != c;) {
					axs.AuditRule.collectMatchingElements(c, t, n, r), c = c.nextSibling;
				}
			}
		};
	}function o(e) {
		var t = r(e);return a(), axs.Audit.run(t).filter(function (t) {
			return t.rule.name === e;
		})[0];
	}e.exports = o;
}, function (e, t, n) {
	"use strict";
	function r(e, t) {
		this.helpers = e || {}, this.partials = t || {}, a(this);
	}function a(e) {
		e.registerHelper("helperMissing", function () {
			if (1 === arguments.length) return void 0;throw new c["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"');
		}), e.registerHelper("blockHelperMissing", function (t, n) {
			var r = n.inverse,
			    a = n.fn;if (t === !0) return a(this);if (t === !1 || null == t) return r(this);if (h(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : r(this);if (n.data && n.ids) {
				var i = o(n.data);i.contextPath = l.appendContextPath(n.data.contextPath, n.name), n = { data: i };
			}return a(t, n);
		}), e.registerHelper("each", function (e, t) {
			function n(t, n, a) {
				u && (u.key = t, u.index = n, u.first = 0 === n, u.last = !!a, p && (u.contextPath = p + t)), s += r(e[t], { data: u, blockParams: l.blockParams([e[t], t], [p + t, null]) });
			}if (!t) throw new c["default"]("Must pass iterator to #each");var r = t.fn,
			    a = t.inverse,
			    i = 0,
			    s = "",
			    u = void 0,
			    p = void 0;if (t.data && t.ids && (p = l.appendContextPath(t.data.contextPath, t.ids[0]) + "."), g(e) && (e = e.call(this)), t.data && (u = o(t.data)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) if (h(e)) for (var d = e.length; d > i; i++) {
				n(i, i, i === e.length - 1);
			} else {
				var f = void 0;for (var m in e) {
					e.hasOwnProperty(m) && (f && n(f, i - 1), f = m, i++);
				}f && n(f, i - 1, !0);
			}return 0 === i && (s = a(this)), s;
		}), e.registerHelper("if", function (e, t) {
			return g(e) && (e = e.call(this)), !t.hash.includeZero && !e || l.isEmpty(e) ? t.inverse(this) : t.fn(this);
		}), e.registerHelper("unless", function (t, n) {
			return e.helpers["if"].call(this, t, { fn: n.inverse, inverse: n.fn, hash: n.hash });
		}), e.registerHelper("with", function (e, t) {
			g(e) && (e = e.call(this));var n = t.fn;if (l.isEmpty(e)) return t.inverse(this);if (t.data && t.ids) {
				var r = o(t.data);r.contextPath = l.appendContextPath(t.data.contextPath, t.ids[0]), t = { data: r };
			}return n(e, t);
		}), e.registerHelper("log", function (t, n) {
			var r = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;e.log(r, t);
		}), e.registerHelper("lookup", function (e, t) {
			return e && e[t];
		});
	}function o(e) {
		var t = l.extend({}, e);return t._parent = e, t;
	}var i = function i(e) {
		return e && e.__esModule ? e : { "default": e };
	};t.__esModule = !0, t.HandlebarsEnvironment = r, t.createFrame = o;var s = n(10),
	    l = i(s),
	    u = n(9),
	    c = i(u),
	    p = "3.0.1";t.VERSION = p;var d = 6;t.COMPILER_REVISION = d;var f = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1" };t.REVISION_CHANGES = f;var h = l.isArray,
	    g = l.isFunction,
	    m = l.toString,
	    b = "[object Object]";r.prototype = { constructor: r, logger: v, log: y, registerHelper: function registerHelper(e, t) {
			if (m.call(e) === b) {
				if (t) throw new c["default"]("Arg not supported with multiple helpers");l.extend(this.helpers, e);
			} else this.helpers[e] = t;
		}, unregisterHelper: function unregisterHelper(e) {
			delete this.helpers[e];
		}, registerPartial: function registerPartial(e, t) {
			if (m.call(e) === b) l.extend(this.partials, e);else {
				if ("undefined" == typeof t) throw new c["default"]("Attempting to register a partial as undefined");this.partials[e] = t;
			}
		}, unregisterPartial: function unregisterPartial(e) {
			delete this.partials[e];
		} };var v = { methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" }, DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3, level: 1, log: function log(e, t) {
			if ("undefined" != typeof console && v.level <= e) {
				var n = v.methodMap[e];(console[n] || console.log).call(console, t);
			}
		} };t.logger = v;var y = v.log;t.log = y;
}, function (e, t, n) {
	(function (t) {
		"use strict";
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}function a(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
		}var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
				}
			}return function (t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t;
			};
		}(),
		    i = function i(e, t, n) {
			for (var r = !0; r;) {
				var a = e,
				    o = t,
				    i = n;s = u = l = void 0, r = !1, null === a && (a = Function.prototype);var s = Object.getOwnPropertyDescriptor(a, o);if (void 0 !== s) {
					if ("value" in s) return s.value;var l = s.get;return void 0 === l ? void 0 : l.call(i);
				}var u = Object.getPrototypeOf(a);if (null === u) return void 0;e = u, t = o, n = i, r = !0;
			}
		},
		    s = n(1),
		    l = n(2);n(44);var u = function (e) {
			function n() {
				r(this, n), i(Object.getPrototypeOf(n.prototype), "constructor", this).apply(this, arguments);
			}return a(n, e), o(n, [{ key: "getTitle", value: function value() {
					return "Screen Reader Wand";
				} }, { key: "getDescription", value: function value() {
					return "Hover over elements to view them as a screen reader would";
				} }, { key: "run", value: function value() {
					this.summary(" "), this.panel.render(), s(document).on("mousemove.wand", function (e) {
						var n = document.elementFromPoint(e.clientX, e.clientY),
						    r = axs.properties.findTextAlternatives(n, {});s(".tota11y-outlined").removeClass("tota11y-outlined"), s(n).addClass("tota11y-outlined"), r ? s(".tota11y-info-section.active").text(r) : s(".tota11y-info-section.active").html(t("i", { className: "tota11y-nothingness" }, "No text visible to a screen reader"));
					});
				} }, { key: "cleanup", value: function value() {
					s(".tota11y-outlined").removeClass("tota11y-outlined"), s(document).off("mousemove.wand");
				} }]), n;
		}(l);e.exports = u;
	}).call(t, n(4));
}, function (e, t, n) {
	(function (t) {
		"use strict";
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}function a(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
		}var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
				}
			}return function (t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t;
			};
		}(),
		    i = function i(e, t, n) {
			for (var r = !0; r;) {
				var a = e,
				    o = t,
				    i = n;s = u = l = void 0, r = !1, null === a && (a = Function.prototype);var s = Object.getOwnPropertyDescriptor(a, o);if (void 0 !== s) {
					if ("value" in s) return s.value;var l = s.get;return void 0 === l ? void 0 : l.call(i);
				}var u = Object.getPrototypeOf(a);if (null === u) return void 0;e = u, t = o, n = i, r = !0;
			}
		},
		    s = n(1),
		    l = n(2),
		    u = n(3)("alt-text"),
		    c = n(11),
		    p = function (e) {
			function n() {
				r(this, n), i(Object.getPrototypeOf(n.prototype), "constructor", this).apply(this, arguments);
			}return a(n, e), o(n, [{ key: "getTitle", value: function value() {
					return "Image alt-text";
				} }, { key: "getDescription", value: function value() {
					return "Annotates images without alt text";
				} }, { key: "reportError", value: function value(e) {
					var n = s(e),
					    r = n.attr("src") || "..",
					    a = "Image is missing alt text",
					    o = t("div", null, t("p", null, 'This image does not have an associated "alt" attribute. Please specify the alt text for this image like so:'), t("pre", null, t("code", null, '&lt;img src="' + r + '" alt="Image description"&gt')), t("p", null, 'If the image is decorative and does not convey any information to the surrounding content, however, you may leave this "alt" attribute empty, or specify a "role" attribute with a value of "presentation."'), t("pre", null, t("code", null, '&lt;img src="' + r + '" alt=""&gt;', t("br", null), '&lt;img src="' + r + '" role="presentation"&gt;'))),
					    i = this.error(a, o, n);u.errorLabel(n, "", a, i);
				} }, { key: "run", value: function value() {
					var e = c("imagesWithoutAltText"),
					    t = e.result,
					    n = e.elements;"FAIL" === t && n.forEach(this.reportError.bind(this)), s('img[role="presentation"], img[alt=""]').each(function (e, t) {
						u.errorLabel(s(t), "", "This image is decorative").addClass("tota11y-label-warning");
					});
				} }, { key: "cleanup", value: function value() {
					u.removeAll();
				} }]), n;
		}(l);e.exports = p;
	}).call(t, n(4));
}, function (e, t, n) {
	"use strict";
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	}function a(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}var o = function () {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}return function (t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(),
	    i = function i(e, t, n) {
		for (var r = !0; r;) {
			var a = e,
			    o = t,
			    i = n;s = u = l = void 0, r = !1, null === a && (a = Function.prototype);var s = Object.getOwnPropertyDescriptor(a, o);if (void 0 !== s) {
				if ("value" in s) return s.value;var l = s.get;return void 0 === l ? void 0 : l.call(i);
			}var u = Object.getPrototypeOf(a);if (null === u) return void 0;e = u, t = o, n = i, r = !0;
		}
	},
	    s = n(1),
	    l = n(2),
	    u = n(3)("contrast"),
	    c = n(30),
	    p = n(29);n(45);var d = function (e) {
		function t() {
			r(this, t), i(Object.getPrototypeOf(t.prototype), "constructor", this).call(this), this.preservedColors = [];
		}return a(t, e), o(t, [{ key: "getTitle", value: function value() {
				return "Contrast";
			} }, { key: "getDescription", value: function value() {
				return "Labels elements with insufficient contrast";
			} }, { key: "addError", value: function value(e, t) {
				var n = e.style,
				    r = e.fgColor,
				    a = e.bgColor,
				    o = e.contrastRatio,
				    i = e.requiredRatio,
				    l = axs.color.suggestColors(a, r, { AA: i }).AA,
				    u = { fgColorHex: axs.color.colorToString(r), bgColorHex: axs.color.colorToString(a), contrastRatio: o, requiredRatio: i, suggestedFgColorHex: l.fg, suggestedBgColorHex: l.bg, suggestedColorsRatio: l.contrast },
				    d = s(p(u)),
				    f = n.color,
				    h = n.backgroundColor;return d.find(".preview-contrast-fix").click(function (e) {
					s(e.target).prop("checked") ? (s(t).css("color", l.fg), s(t).css("background-color", l.bg)) : (s(t).css("color", f), s(t).css("background-color", h));
				}), this.error(c(u), d, s(t));
			} }, { key: "run", value: function value() {
				var e = this,
				    t = {};s("*").each(function (n, r) {
					if (axs.properties.hasDirectTextDescendant(r) && !(s(r).parents(".tota11y").length > 0 || axs.utils.elementIsTransparent(r) || axs.utils.elementHasZeroArea(r))) {
						var a = getComputedStyle(r),
						    o = axs.utils.getBgColor(a, r),
						    i = axs.utils.getFgColor(a, r, o),
						    l = axs.color.calculateContrastRatio(i, o).toFixed(2),
						    c = axs.utils.isLargeFont(a) ? 3 : 4.5,
						    p = axs.color.colorToString(i) + "/" + axs.color.colorToString(o) + "/" + c;if (axs.utils.isLowContrast(l, a)) {
							if (!t[p]) {
								var d = e.addError({ style: a, fgColor: i, bgColor: o, contrastRatio: l, requiredRatio: c }, r);e.preservedColors.push({ $el: s(r), fg: a.color, bg: a.backgroundColor }), t[p] = d;
							}u.errorLabel(s(r), l, "This contrast is insufficient at this size.", t[p]);
						} else t[p] || (u.label(s(r), l).addClass("tota11y-label-success"), t[p] = !0);
					}
				});
			} }, { key: "cleanup", value: function value() {
				this.preservedColors.forEach(function (e) {
					e.$el.css("color", e.fg), e.$el.css("background-color", e.bg);
				}), u.removeAll();
			} }]), t;
	}(l);e.exports = d;
}, function (e, t, n) {
	(function (t) {
		"use strict";
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}function a(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
		}var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
				}
			}return function (t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t;
			};
		}(),
		    i = function i(e, t, n) {
			for (var r = !0; r;) {
				var a = e,
				    o = t,
				    i = n;s = u = l = void 0, r = !1, null === a && (a = Function.prototype);var s = Object.getOwnPropertyDescriptor(a, o);if (void 0 !== s) {
					if ("value" in s) return s.value;var l = s.get;return void 0 === l ? void 0 : l.call(i);
				}var u = Object.getPrototypeOf(a);if (null === u) return void 0;e = u, t = o, n = i, r = !0;
			}
		},
		    s = n(1),
		    l = n(2),
		    u = n(3)("headings"),
		    c = n(31);n(46);var p = { FIRST_NOT_H1: function FIRST_NOT_H1(e) {
				return { title: "First heading is not an &lt;h1&gt;", description: "\n                <div>\n                    To give your document a proper structure for assistive\n                    technologies, it is important to lay out your headings\n                    beginning with an <code>&lt;h1&gt;</code>. We found an\n                    <code>&lt;h" + e + "&gt;</code> instead.\n                </div>\n            " };
			}, MULTIPLE_H1: { title: "&lt;h1&gt; used when one is already present" }, NONCONSECUTIVE_HEADER: function NONCONSECUTIVE_HEADER(e, t) {
				var n = function n(e) {
					return "<code>&lt;h" + e + "&gt;</code>";
				},
				    r = "\n            <div>\n                This document contains an " + n(t) + " tag directly\n                following an " + n(e) + ". In order to maintain a consistent\n                outline of the page for assistive technologies, reduce the gap in\n                the heading level by upgrading this tag to an\n                " + n(e + 1);return 1 !== e && (r += " or " + n(e)), r += ".</div>", { title: "\n                Nonconsecutive heading level used (h" + e + " &rarr;\n                h" + t + ")\n            ", description: r };
			} },
		    d = function (e) {
			function n() {
				r(this, n), i(Object.getPrototypeOf(n.prototype), "constructor", this).apply(this, arguments);
			}return a(n, e), o(n, [{ key: "getTitle", value: function value() {
					return "Headings";
				} }, { key: "getDescription", value: function value() {
					return "\n            Highlights headings (&lt;h1&gt;, &lt;h2&gt;, etc) and\n            order violations\n        ";
				} }, { key: "outline", value: function value(e) {
					var t = this,
					    n = [],
					    r = void 0;return e.each(function (e, a) {
						var o = s(a),
						    i = +o.prop("tagName").slice(1),
						    l = void 0;0 === e && 1 !== i ? l = p.FIRST_NOT_H1(i) : r && i - r > 1 && (l = p.NONCONSECUTIVE_HEADER(r, i)), r = i;var d = s(c({ level: i, text: o.text() }));if (n.push(d), u.toggleHighlight(o, d), l) {
							var f = t.error(l.title, s(l.description), o);u.errorLabel(o, o.prop("tagName").toLowerCase(), l.title, f), d.find(".tota11y-heading-outline-level").addClass("tota11y-label-error");
						} else u.label(o).addClass("tota11y-label-success"), d.find(".tota11y-heading-outline-level").addClass("tota11y-label-success");
					}), n;
				} }, { key: "run", value: function value() {
					var e = s("h1, h2, h3, h4, h5, h6"),
					    n = this.outline(e);if (n.length) {
						var r = t("div", { className: "tota11y-heading-outline" }, n);this.summary(r);
					}
				} }, { key: "cleanup", value: function value() {
					u.removeAll();
				} }]), n;
		}(l);e.exports = d;
	}).call(t, n(4));
}, function (e, t, n) {
	"use strict";
	var r = n(14),
	    a = n(15),
	    o = n(16),
	    i = n(18),
	    s = n(19),
	    l = n(20),
	    u = n(13);e.exports = { "default": [new o(), new a(), new l(), new i(), new r(), new s()], experimental: [new u()] };
}, function (e, t, n) {
	"use strict";
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	}function a(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}var o = function () {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}return function (t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(),
	    i = function i(e, t, n) {
		for (var r = !0; r;) {
			var a = e,
			    o = t,
			    i = n;s = u = l = void 0, r = !1, null === a && (a = Function.prototype);var s = Object.getOwnPropertyDescriptor(a, o);if (void 0 !== s) {
				if ("value" in s) return s.value;var l = s.get;return void 0 === l ? void 0 : l.call(i);
			}var u = Object.getPrototypeOf(a);
			if (null === u) return void 0;e = u, t = o, n = i, r = !0;
		}
	},
	    s = n(1),
	    l = n(2),
	    u = n(3)("labels"),
	    c = n(11),
	    p = n(32),
	    d = function (e) {
		function t() {
			r(this, t), i(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
		}return a(t, e), o(t, [{ key: "getTitle", value: function value() {
				return "Labels";
			} }, { key: "getDescription", value: function value() {
				return "Identifies inputs with missing labels";
			} }, { key: "errorMessage", value: function value(e) {
				return p({ placeholder: e.attr("placeholder"), id: e.attr("id"), tagName: e.prop("tagName").toLowerCase() });
			} }, { key: "run", value: function value() {
				var e = this,
				    t = c("controlsWithoutLabel"),
				    n = t.result,
				    r = t.elements;"FAIL" === n && r.forEach(function (t) {
					var n = s(t),
					    r = "Input is missing a label",
					    a = e.error(r, s(e.errorMessage(n)), n);u.errorLabel(n, "", r, a);
				});
			} }, { key: "cleanup", value: function value() {
				u.removeAll();
			} }]), t;
	}(l);e.exports = d;
}, function (e, t, n) {
	"use strict";
	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	}function a(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}var o = function () {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}return function (t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(),
	    i = function i(e, t, n) {
		for (var r = !0; r;) {
			var a = e,
			    o = t,
			    i = n;s = u = l = void 0, r = !1, null === a && (a = Function.prototype);var s = Object.getOwnPropertyDescriptor(a, o);if (void 0 !== s) {
				if ("value" in s) return s.value;var l = s.get;return void 0 === l ? void 0 : l.call(i);
			}var u = Object.getPrototypeOf(a);if (null === u) return void 0;e = u, t = o, n = i, r = !0;
		}
	},
	    s = n(1),
	    l = n(2),
	    u = n(3)("landmarks"),
	    c = function (e) {
		function t() {
			r(this, t), i(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments);
		}return a(t, e), o(t, [{ key: "getTitle", value: function value() {
				return "Landmarks";
			} }, { key: "getDescription", value: function value() {
				return "Labels all ARIA landmarks";
			} }, { key: "run", value: function value() {
				s("[role]").each(function () {
					u.label(s(this), s(this).attr("role"));
				});
			} }, { key: "cleanup", value: function value() {
				u.removeAll();
			} }]), t;
	}(l);e.exports = c;
}, function (e, t, n) {
	(function (t) {
		"use strict";
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}function a(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
		}var o = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
				}
			}return function (t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t;
			};
		}(),
		    i = function i(e, t, n) {
			for (var r = !0; r;) {
				var a = e,
				    o = t,
				    i = n;s = u = l = void 0, r = !1, null === a && (a = Function.prototype);var s = Object.getOwnPropertyDescriptor(a, o);if (void 0 !== s) {
					if ("value" in s) return s.value;var l = s.get;return void 0 === l ? void 0 : l.call(i);
				}var u = Object.getPrototypeOf(a);if (null === u) return void 0;e = u, t = o, n = i, r = !0;
			}
		},
		    s = n(1),
		    l = n(2),
		    u = n(3)("link-text"),
		    c = function (e) {
			function n() {
				r(this, n), i(Object.getPrototypeOf(n.prototype), "constructor", this).apply(this, arguments);
			}return a(n, e), o(n, [{ key: "getTitle", value: function value() {
					return "Link text";
				} }, { key: "getDescription", value: function value() {
					return "\n            Identifies links that may be confusing when read by a screen\n            reader\n        ";
				} }, { key: "isDescriptiveText", value: function value(e) {
					if ("undefined" == typeof e || null === e) return !1;var t = ["click", "tap", "go", "here", "learn", "more", "this", "page", "link", "about"],
					    n = new RegExp("\\b(" + t.join("|") + ")\\b", "ig");return e = e.replace(/[^a-zA-Z ]/g, "").replace(n, ""), "" !== e.trim();
				} }, { key: "reportError", value: function value(e, t, n) {
					var r = this.error("Link text is unclear", t, e);u.errorLabel(e, "", 'Link text "' + n + '" is unclear', r);
				} }, { key: "run", value: function value() {
					var e = this;s("a").each(function (n, r) {
						var a = s(r);if (!a.parents(".tota11y").length) {
							var o = {},
							    i = axs.properties.findTextAlternatives(r, o);if (!e.isDescriptiveText(i)) {
								var l = t("div", null, "The text", " ", t("i", null, '"', i, '"'), " ", "is unclear without context and may be confusing to screen readers. Consider rearranging the", " ", t("code", null, "&lt;a&gt;&lt;/a&gt;"), " ", "tags or including special screen reader text.");e.reportError(a, l, i);
							}
						}
					});
				} }, { key: "cleanup", value: function value() {
					u.removeAll();
				} }]), n;
		}(l);e.exports = c;
	}).call(t, n(4));
}, function (e, t, n) {
	(function (t) {
		"use strict";
		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
		}var a = function () {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
				}
			}return function (t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t;
			};
		}(),
		    o = n(1),
		    i = n(3)("info-panel"),
		    s = n(34);n(48);var l = 10,
		    u = "tota11y-collapsed",
		    c = "tota11y-info-hidden",
		    p = function () {
			function e(t) {
				r(this, e), this.plugin = t, this.about = null, this.summary = null, this.errors = [], this.$el = null;
			}return a(e, [{ key: "setAbout", value: function value(e) {
					this.about = e;
				} }, { key: "setSummary", value: function value(e) {
					this.summary = e;
				} }, { key: "addError", value: function value(e, t, n) {
					var r = { title: e, $description: t, $el: n };return this.errors.push(r), r;
				} }, { key: "_addTab", value: function value(e, n) {
					var r = this,
					    a = t("li", { className: "tota11y-info-tab" }, t("a", { className: "tota11y-info-tab-anchor", href: "#" }, t("span", { className: "tota11y-info-tab-anchor-text" }, e)));this.$el.find(".tota11y-info-tabs").append(a);var i = o("<div>").addClass("tota11y-info-section").html(n);return this.$el.find(".tota11y-info-sections").append(i), a.on("activate", function () {
						r.$el.find(".tota11y-info-tab.active").removeClass("active"), r.$el.find(".tota11y-info-section.active").removeClass("active"), a.addClass("active"), i.addClass("active");
					}), a.on("click", function (e) {
						e.preventDefault(), e.stopPropagation(), a.trigger("activate");
					}), a;
				} }, { key: "initAndPosition", value: function value() {
					var e = this,
					    t = void 0,
					    n = void 0;this.$el.find(".tota11y-info-dismiss-trigger").click(function (t) {
						t.preventDefault(), t.stopPropagation(), e.$el.addClass(c), e.plugin.$checkbox.focus();
					}), o("body").append(this.$el), t = window.innerWidth - this.$el.width() - l, n = window.innerHeight - this.$el.height() - l;var r = this.$el.find(".tota11y-info-title"),
					    a = !1,
					    i = void 0,
					    s = void 0,
					    u = void 0,
					    p = void 0;r.on("mousedown", function (e) {
						e.preventDefault(), a = !0, i = e.pageX, s = e.pageY, u = t, p = n;
					}).on("mouseup", function (e) {
						e.preventDefault(), a = !1;
					}), o(window).on("mousemove", function (r) {
						if (a) {
							r.preventDefault();var o = r.pageX - i,
							    l = r.pageY - s;t = u + o, n = p + l, e.$el.css({ left: t, top: n });
						}
					}), this.$el.css({ left: t, top: n });
				} }, { key: "render", value: function value() {
					var e = this;this.$el && this.$el.remove();var n = !1;this.$el = t("div", { className: "tota11y tota11y-info", tabindex: "-1" }, t("header", { className: "tota11y-info-title" }, this.plugin.getTitle(), t("span", { className: "tota11y-info-controls" }, t("label", { className: "tota11y-info-annotation-toggle" }, "Annotate:", " ", t("input", { className: "toggle-annotation", type: "checkbox", checked: "checked" })), t("a", { "aria-label": "Close info panel", href: "#", className: "tota11y-info-dismiss-trigger" }, "×"))), t("div", { className: "tota11y-info-body" }, t("div", { className: "tota11y-info-sections" }), t("ul", { role: "tablist", className: "tota11y-info-tabs" })));var r = void 0;return this.about && (r = this._addTab("About", this.about)), this.summary && (r = this._addTab("Summary", this.summary)), this.$el.find(".toggle-annotation").click(function (e) {
						o(e.target).prop("checked") ? i.show() : i.hide();
					}), this.errors.length > 0 && !function () {
						var t = o("<ul>").addClass("tota11y-info-errors"),
						    n = void 0;e.errors.forEach(function (r, a) {
							var l = o(s(r));l.find(".tota11y-info-error-description").prepend(r.$description), t.append(l);var p = l.find(".tota11y-info-error-trigger"),
							    d = l.find(".tota11y-info-error-description");p.click(function (e) {
								e.preventDefault(), e.stopPropagation(), p.toggleClass(u), d.toggleClass(u);
							}), r.show = function () {
								e.$el.removeClass(c), p.removeClass(u), d.removeClass(u), n.trigger("activate");var t = p.parents(".tota11y-info-section");t[0].scrollTop = p[0].offsetTop - 10;
							}, r.$trigger = p;var f = l.find(".tota11y-info-error-scroll");f.click(function (e) {
								e.preventDefault(), e.stopPropagation(), o(document).scrollTop(r.$el.offset().top - 80);
							}), 0 === a && (d.toggleClass(u), p.toggleClass(u)), i.toggleHighlight(r.$el, p), i.toggleHighlight(r.$el, f);var h = r.$el[0].outerHTML;h.length > 300 && (h = h.substring(0, 300) + "...");var g = l.find(".tota11y-info-error-description-code-container code");g.text(h);
						}), n = r = e._addTab("Errors", t);var a = o("<div>").addClass("tota11y-info-error-count").text(e.errors.length);r.find(".tota11y-info-tab-anchor").append(a);
					}(), r && (r.trigger("activate"), n = !0), n && this.initAndPosition(), this.$el.focus(), this.$el;
				} }, { key: "destroy", value: function value() {
					this.about = null, this.summary = null, this.errors = [], this.$el && (this.$el.remove(), this.$el = null), i.removeAll();
				} }]), e;
		}();e.exports = p;
	}).call(t, n(4));
}, function (e, t, n) {
	t = e.exports = n(5)(), t.push([e.id, ".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y,.tota11y *{border:none!important;box-sizing:border-box!important;color:#f2f2f2!important;font-family:Arial!important;font-size:14px!important;font-style:normal!important;font-weight:400!important;line-height:1.35!important;margin:0!important;padding:0!important;text-align:left!important;text-shadow:none!important}.tota11y p,.tota11y pre{margin:0 0 10px!important}.tota11y *{height:auto!important;width:auto!important}.tota11y-toolbar-logo,.tota11y-toolbar-logo svg{height:25px!important}.tota11y strong{font-weight:700!important}.tota11y code,.tota11y pre{background-color:#ddd!important;border:none!important;border-radius:0!important;color:inherit!important;font-family:monospace!important;font-size:inherit!important;line-height:inherit!important}.tota11y pre{padding:5px 10px!important;overflow-x:scroll!important}.tota11y code{border-radius:2px!important;display:inline!important;padding:1px!important}.tota11y em,.tota11y i{font-style:italic!important}.tota11y a,.tota11y a:focus,.tota11y a:hover{background-color:inherit!important;color:inherit!important;text-decoration:none!important}.tota11y-toolbar{background-color:#333!important;color:#f2f2f2!important;position:fixed!important;top:auto!important;right:auto!important;bottom:0!important;left:10px!important;border-top-left-radius:5px!important;border-top-right-radius:5px!important;overflow:hidden!important;z-index:9998!important}.tota11y-toolbar-toggle{background-color:#333!important;display:block!important;padding:7px!important;width:100%!important}.tota11y-toolbar-logo{margin:0 auto!important;text-align:center!important;width:35px!important}.tota11y-toolbar-body{display:none!important}.tota11y-toolbar.tota11y-expanded .tota11y-toolbar-body{display:block!important}.tota11y-sr-only{border:0!important;clip:rect(0,0,0,0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important}", ""]);
}, function (e, t, n) {
	t = e.exports = n(5)(), t.push([e.id, ".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-outlined{outline:#7882c8 solid 2px!important}.tota11y-nothingness{color:#888!important}", ""]);
}, function (e, t, n) {
	t = e.exports = n(5)(), t.push([e.id, ".tota11y-swatches{margin-left:5px!important;margin-right:5px!important;position:relative!important;top:1px!important}.tota11y-swatch{border:1px solid #000!important;display:inline-block!important;height:12px!important;width:12px!important}.tota11y-contrast-suggestion{margin:0 0 15px 15px!important}.tota11y-color-hexes{font-family:monospace!important}", ""]);
}, function (e, t, n) {
	t = e.exports = n(5)(), t.push([e.id, ".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-heading-outline{color:#333!important}.tota11y-heading-outline-entry{margin-bottom:8px!important}.tota11y-heading-outline-entry.heading-level-1{margin-left:0!important}.tota11y-heading-outline-entry.heading-level-2{margin-left:20px!important}.tota11y-heading-outline-entry.heading-level-3{margin-left:40px!important}.tota11y-heading-outline-entry.heading-level-4{margin-left:60px!important}.tota11y-heading-outline-entry.heading-level-5{margin-left:80px!important}.tota11y-heading-outline-entry.heading-level-6{margin-left:100px!important}.tota11y-heading-outline-level{position:relative!important;top:-2px!important;right:auto!important;bottom:auto!important;left:auto!important;margin-right:5px!important;padding:2px 3px!important;pointer-events:none!important}", ""]);
}, function (e, t, n) {
	t = e.exports = n(5)(), t.push([e.id, ".tota11y-label-help,.tota11y-label-text{float:left!important}.tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-label{background-color:#ffe800!important;border:1px solid rgba(0,0,0,.1)!important;cursor:default!important;padding:3px!important;position:absolute!important;z-index:9997!important}.tota11y-label-error{background-color:#ffaeae!important}.tota11y-label-error-icon{display:block!important;float:left!important;margin-right:3px!important;width:12px!important}.tota11y-label-success{background-color:#b9eda9!important}.tota11y-label-warning{background-color:#ffe800!important}.tota11y-label,.tota11y-label-detail,.tota11y-label-help,.tota11y-label-link,.tota11y-label-text{color:#333!important;font-size:12px!important}.tota11y-label-detail{clear:both!important;display:none!important;max-width:300px!important}.tota11y-label:hover .tota11y-label-detail{display:block!important}.tota11y-label-help{margin-left:5px!important}.tota11y-label-link:focus,.tota11y-label-link:hover{opacity:.6!important;text-decoration:underline!important}.tota11y-highlight{background-color:rgba(120,130,200,.4)!important;pointer-events:none!important;position:absolute!important;z-index:9999!important}", ""]);
}, function (e, t, n) {
	t = e.exports = n(5)(), t.push([e.id, ".tota11y-dark-color-scheme,.tota11y-info{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-info{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;border-radius:5px!important;position:fixed!important;z-index:9998!important}.tota11y-info-section,.tota11y-info-section *,.tota11y-info-tab.active .tota11y-info-tab-anchor-text{color:#333!important}.tota11y-info-controls{float:right!important}.tota11y-info-annotation-toggle{float:left!important;margin-right:10px!important}.tota11y-info-hidden{display:none!important}.tota11y-info-dismiss-trigger{font-size:25px!important;line-height:25px!important;position:relative!important;top:-2px!important}.tota11y-info-section,.tota11y-info-tab-anchor{top:0!important;right:0!important;bottom:0!important;left:0!important}.tota11y-info-body,.tota11y-info-title{padding:10px 10px 0!important}.tota11y-info-title:hover{cursor:move!important}.tota11y-info-tabs{display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;margin:0!important;padding:0 0 10px!important}.tota11y-info-tab{height:30px!important;list-style:none!important;position:relative!important;text-align:center!important;width:100%!important}.tota11y-info-tab-anchor{position:absolute!important;text-align:center!important}.tota11y-info-tab-anchor-text{line-height:30px!important}.tota11y-info-tab:hover{background-color:#555!important}.tota11y-info-section,.tota11y-info-tab.active,.tota11y-info-tab.active:hover{background-color:#f2f2f2!important}.tota11y-info-sections{position:relative!important;height:270px!important;width:400px!important}.tota11y-info-section{position:absolute!important;display:none!important;overflow-y:scroll!important;padding:10px!important}.tota11y-info-error-trigger,.tota11y-info-section.active{display:block!important}.tota11y-info-errors{margin:0!important;padding:0!important}.tota11y-info-error{list-style:none!important;margin-bottom:10px!important}.tota11y-info-error-trigger.trigger-highlight{background-color:rgba(120,130,200,.4)!important}.tota11y-info-error-chevron{display:inline-block!important;font-size:20px!important;height:14px!important;line-height:14px!important;margin-right:3px!important;-webkit-transform:rotateZ(90deg)!important;transform:rotateZ(90deg)!important;-webkit-transform-origin:3px 8px!important;-ms-transform-origin:3px 8px!important;transform-origin:3px 8px!important;-webkit-transition:-webkit-transform ease-in-out 50ms!important;transition:transform ease-in-out 50ms!important}.tota11y-info-error-trigger.tota11y-collapsed .tota11y-info-error-chevron{-webkit-transform:rotateZ(0)!important;transform:rotateZ(0)!important}.tota11y-info-error-title{font-weight:700!important}.tota11y-info-error-scroll{float:right!important;margin-top:3px!important;padding-left:5px!important}.tota11y-info-error-scroll-glyph{border-color:#333!important}.tota11y-info-error-scroll:hover .tota11y-info-error-scroll-glyph{border-color:#999!important}.tota11y-info-error-scroll-lens{border:1px solid!important;border-radius:50%!important;height:8px!important;width:8px!important}.tota11y-info-error-scroll-handle{border-left:1px solid!important;height:7px!important;-webkit-transform:translateX(-2px) translateY(-2px) rotate(45deg)!important;-ms-transform:translateX(-2px) translateY(-2px) rotate(45deg)!important;transform:translateX(-2px) translateY(-2px) rotate(45deg)!important;width:1px!important}.tota11y-info-error-description{font-size:13px!important;padding:10px 0 0!important;-webkit-user-select:text!important;-moz-user-select:text!important;-ms-user-select:text!important;user-select:text!important}.tota11y-info-error-description-code-container{margin-top:10px!important}.tota11y-info-error-description-code-container code{display:block!important;margin-top:10px!important;padding:5px 10px!important;word-wrap:break-word!important}.tota11y-info-error-description.tota11y-collapsed{display:none!important}.tota11y-info-error-count{background-color:red!important;border-radius:20px!important;color:#fff!important;display:inline!important;margin-left:5px!important;padding:1px 8px!important}", ""]);
}, function (e, t, n) {
	t = e.exports = n(5)(), t.push([e.id, ".tota11y-dark-color-scheme{background-color:#333!important;color:#f2f2f2!important}.tota11y-no-select{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.tota11y-plugin{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;border-bottom:1px solid #555!important;list-style:none!important}.tota11y-plugin-switch{-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;cursor:pointer!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;padding:12px 12px 12px 0!important;margin:0!important}.tota11y-plugin-indicator{margin:0 15px!important;border-radius:16px!important;border:1px solid #999!important;color:transparent!important;font-size:13px!important;height:16px!important;line-height:16px!important;padding:0 0 0 1px!important;width:16px!important}.tota11y-plugin-checkbox:focus+.tota11y-plugin-indicator{border-color:#639b24!important;background-color:#49721a!important;color:#49721a!important}.tota11y-plugin-checkbox:checked+.tota11y-plugin-indicator{background-color:#639b24!important;border-color:#639b24!important;color:#fff!important}.tota11y-plugin-title{font-weight:700!important}.tota11y-plugin-description{font-size:11px!important;font-style:italic!important;width:200px!important;margin-right:3px!important}.tota11y-plugins-separator{font-size:12px!important;margin:7px 15px 0!important;text-transform:uppercase!important}", ""]);
}, function (e, t, n) {
	var r = n(6);e.exports = (r["default"] || r).template({ compiler: [6, ">= 2.0.0-beta.1"], main: function main(e, t, n, r) {
			var a,
			    o = t.helperMissing,
			    i = "function",
			    s = this.escapeExpression;return '<div>\n    <p>\n        The color combination\n        <span class="tota11y-color-hexes">' + s((a = null != (a = t.fgColorHex || (null != e ? e.fgColorHex : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "fgColorHex", hash: {}, data: r }) : a)) + "/" + s((a = null != (a = t.bgColorHex || (null != e ? e.bgColorHex : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "bgColorHex", hash: {}, data: r }) : a)) + "</span>\n        has a contrast ratio of <strong>" + s((a = null != (a = t.contrastRatio || (null != e ? e.contrastRatio : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "contrastRatio", hash: {}, data: r }) : a)) + "</strong>, which is not\n        sufficient. At this size, you will need a ratio of at least\n        <strong>" + s((a = null != (a = t.requiredRatio || (null != e ? e.requiredRatio : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "requiredRatio", hash: {}, data: r }) : a)) + '</strong>.\n    </p>\n\n    <p>\n        Consider using the following foreground/background combination:\n    </p>\n\n    <div class="tota11y-contrast-suggestion">\n        <span class="tota11y-color-hexes">\n            ' + s((a = null != (a = t.suggestedFgColorHex || (null != e ? e.suggestedFgColorHex : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "suggestedFgColorHex", hash: {}, data: r }) : a)) + "/" + s((a = null != (a = t.suggestedBgColorHex || (null != e ? e.suggestedBgColorHex : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "suggestedBgColorHex", hash: {}, data: r }) : a)) + '\n        </span>\n\n        <span class="tota11y-swatches">\n            <span\n                class="tota11y-swatch"\n                style="background-color: ' + s((a = null != (a = t.suggestedFgColorHex || (null != e ? e.suggestedFgColorHex : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "suggestedFgColorHex", hash: {}, data: r }) : a)) + '">\n            </span>\n            /\n            <span\n                class="tota11y-swatch"\n                style="background-color: ' + s((a = null != (a = t.suggestedBgColorHex || (null != e ? e.suggestedBgColorHex : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "suggestedBgColorHex", hash: {}, data: r }) : a)) + '">\n            </span>\n        </span>\n\n        has a ratio of <strong>' + s((a = null != (a = t.suggestedColorsRatio || (null != e ? e.suggestedColorsRatio : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "suggestedColorsRatio", hash: {}, data: r }) : a)) + '</strong>\n        <br />\n\n        <label>\n            Preview:\n            <input class="preview-contrast-fix" type="checkbox">\n        </label>\n    </div>\n</div>\n';
		}, useData: !0 });
}, function (e, t, n) {
	var r = n(6);e.exports = (r["default"] || r).template({ compiler: [6, ">= 2.0.0-beta.1"], main: function main(e, t, n, r) {
			var a,
			    o = t.helperMissing,
			    i = "function",
			    s = this.escapeExpression;return "Insufficient contrast ratio (" + s((a = null != (a = t.contrastRatio || (null != e ? e.contrastRatio : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "contrastRatio", hash: {}, data: r }) : a)) + " &lt; " + s((a = null != (a = t.requiredRatio || (null != e ? e.requiredRatio : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "requiredRatio", hash: {}, data: r }) : a)) + ')\n\n<span class="tota11y-swatches">\n    <span class="tota11y-swatch" style="background-color: ' + s((a = null != (a = t.fgColorHex || (null != e ? e.fgColorHex : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "fgColorHex", hash: {}, data: r }) : a)) + '"></span>\n    /\n    <span class="tota11y-swatch" style="background-color: ' + s((a = null != (a = t.bgColorHex || (null != e ? e.bgColorHex : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "bgColorHex", hash: {}, data: r }) : a)) + '"></span>\n</span>\n';
		}, useData: !0 });
}, function (e, t, n) {
	var r = n(6);e.exports = (r["default"] || r).template({ compiler: [6, ">= 2.0.0-beta.1"], main: function main(e, t, n, r) {
			var a,
			    o = t.helperMissing,
			    i = "function",
			    s = this.escapeExpression;return '<div class="tota11y-heading-outline-entry heading-level-' + s((a = null != (a = t.level || (null != e ? e.level : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "level", hash: {}, data: r }) : a)) + '">\n    <span class="tota11y-heading-outline-level tota11y-label">' + s((a = null != (a = t.level || (null != e ? e.level : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "level", hash: {}, data: r }) : a)) + '</span>\n    <span class="tota11y-heading-outline-heading-text">' + s((a = null != (a = t.text || (null != e ? e.text : e)) ? a : o, (typeof a === "undefined" ? "undefined" : _typeof(a)) === i ? a.call(e, { name: "text", hash: {}, data: r }) : a)) + "</span>\n</div>\n";
		}, useData: !0 });
}, function (e, t, n) {
	var r = n(6);e.exports = (r["default"] || r).template({ 1: function _(e, t, n, r) {
			return "    <p>\n        The <code>placeholder</code> attribute is not guaranteed to be read by\n        assistive technologies. It is better to include a proper label.\n    </p>\n";
		}, 3: function _(e, t, n, r) {
			var a;return '    <p>\n        The simplest way to do so is by creating a <code>&lt;label&gt;</code>\n        tag with a <code>for</code> attribute like so:\n    </p>\n\n    <pre><code>&lt;label for="' + this.escapeExpression((a = null != (a = t.id || (null != e ? e.id : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, { name: "id", hash: {}, data: r }) : a)) + '"&gt;\n    Label text here...\n&lt;/label&gt;</code></pre>\n';
		}, 5: function _(e, t, n, r) {
			var a;return '    <p>\n        You can give this element an <code>id</code> attribute and build a\n        <code>&lt;label&gt;</code> with a corresponding <code>for</code>\n        attribute like so:\n\n        <pre><code>&lt;label for="my-input"&gt;\n    Label text here...\n&lt;/label&gt;\n&lt;' + this.escapeExpression((a = null != (a = t.tagName || (null != e ? e.tagName : e)) ? a : t.helperMissing, "function" == typeof a ? a.call(e, { name: "tagName", hash: {}, data: r }) : a)) + ' id="my-input"&gt;</code></pre>\n    </p>\n';
		}, compiler: [6, ">= 2.0.0-beta.1"], main: function main(e, t, n, r) {
			var a;return (null != (a = t["if"].call(e, null != e ? e.placeholder : e, { name: "if", hash: {}, fn: this.program(1, r, 0), inverse: this.noop, data: r })) ? a : "") + "\n" + (null != (a = t["if"].call(e, null != e ? e.id : e, { name: "if", hash: {}, fn: this.program(3, r, 0), inverse: this.program(5, r, 0), data: r })) ? a : "");
		}, useData: !0 });
}, function (e, t, n) {
	var r = n(6);e.exports = (r["default"] || r).template({ 1: function _(e, t, n, r) {
			return '        <div class="tota11y-label-help">\n            (<a class="tota11y-label-link" href="#">?</a>)\n        </div>\n';
		}, compiler: [6, ">= 2.0.0-beta.1"], main: function main(e, t, n, r) {
			var a,
			    o,
			    i = t.helperMissing,
			    s = "function";return '<span class="tota11y-label-error-icon">\n    <!--\n        "Warning" icon by Lorena Salagre\n        https://thenounproject.com/lorens/\n\n        Licensed under Creative Commons by 3.0 US\n        http://creativecommons.org/licenses/by/3.0/us/legalcode\n    -->\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n        <path d="M80.515,90.781H19.485c-6.145,0-10.779-2.168-13.052-6.103c-2.273-3.938-1.832-9.036,1.24-14.356l30.515-52.851  c3.07-5.321,7.266-8.251,11.811-8.251s8.741,2.93,11.811,8.251l30.515,52.851c3.072,5.32,3.513,10.418,1.24,14.356  C91.293,88.613,86.659,90.781,80.515,90.781z M50,12.384c-3.367,0-6.59,2.369-9.071,6.669L10.415,71.904  c-2.483,4.3-2.924,8.275-1.24,11.191c1.683,2.916,5.345,4.521,10.311,4.521h61.029c4.966,0,8.628-1.605,10.311-4.521  c1.683-2.916,1.243-6.89-1.24-11.191L59.071,19.053C56.59,14.753,53.367,12.384,50,12.384z M56.227,72.18  c0-3.172-2.572-5.744-5.744-5.744s-5.744,2.572-5.744,5.744c0,3.172,2.572,5.744,5.744,5.744S56.227,75.352,56.227,72.18z   M56.382,37.613c0-3.257-2.641-5.898-5.898-5.898c-3.257,0-5.898,2.641-5.898,5.898l1.393,20.932h0.019  c0.202,2.312,2.121,4.132,4.486,4.132c2.187,0,4.012-1.551,4.434-3.613c0.034-0.167,0.037-0.345,0.052-0.518h0.04L56.382,37.613z"/>\n    </svg>\n</span>\n\n<span class="tota11y-label-content">\n    <div class="tota11y-label-text">' + (null != (o = null != (o = t.text || (null != e ? e.text : e)) ? o : i, a = (typeof o === "undefined" ? "undefined" : _typeof(o)) === s ? o.call(e, { name: "text", hash: {}, data: r }) : o) ? a : "") + "</div>\n" + (null != (a = t["if"].call(e, null != e ? e.hasErrorEntry : e, { name: "if", hash: {}, fn: this.program(1, r, 0), inverse: this.noop, data: r })) ? a : "") + '    <div class="tota11y-label-detail">' + (null != (o = null != (o = t.detail || (null != e ? e.detail : e)) ? o : i, a = (typeof o === "undefined" ? "undefined" : _typeof(o)) === s ? o.call(e, { name: "detail", hash: {}, data: r }) : o) ? a : "") + "</div>\n</span>\n";
		}, useData: !0 });
}, function (e, t, n) {
	var r = n(6);e.exports = (r["default"] || r).template({ compiler: [6, ">= 2.0.0-beta.1"], main: function main(e, t, n, r) {
			var a, o;return '<li class="tota11y-info-error">\n    <a aria-label="Scroll to error" href="#" class="tota11y-info-error-scroll">\n        <div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-lens"></div>\n        <div class="tota11y-info-error-scroll-glyph tota11y-info-error-scroll-handle"></div>\n    </a>\n    <a href="#" class="tota11y-info-error-trigger tota11y-collapsed">\n        <div class="tota11y-info-error-title">\n            <span class="tota11y-info-error-chevron">\n                &#8250;\n            </span>\n            ' + (null != (o = null != (o = t.title || (null != e ? e.title : e)) ? o : t.helperMissing, a = "function" == typeof o ? o.call(e, { name: "title", hash: {}, data: r }) : o) ? a : "") + '\n        </div>\n    </a>\n    <div class="tota11y-info-error-description tota11y-collapsed">\n        <div class="tota11y-info-error-description-code-container">\n            <em>Relevant code:</em>\n            <code></code>\n        </div>\n    </div>\n</li>\n';
		}, useData: !0 });
}, function (e, t, n) {
	var r = n(6);e.exports = (r["default"] || r).template({ compiler: [6, ">= 2.0.0-beta.1"], main: function main(e, t, n, r) {
			return '<!--\n    "Glasses" icon by Kyle Scott\n    https://thenounproject.com/Kyle/\n\n    Licensed under Creative Commons by 3.0 US\n    http://creativecommons.org/licenses/by/3.0/us/legalcode\n-->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">\n    <path fill="#ffffff" d="M74.466,35.24c-1.069-0.19-2.208-0.267-3.228-0.562c-0.639-0.184-1.348-0.622-1.965-1.075  c-1.246-0.919-2.479-1.557-3.928-2.152c-0.671-0.276-1.617-0.698-2.432-0.608c-0.582,0.064-1.196,0.664-1.73,1.029  c-1.196,0.818-2.186,1.442-3.32,2.198c-0.524,0.35-1.308,0.798-1.543,1.263c-0.142,0.279-0.13,0.736-0.281,1.029  c-0.35,0.679-1.069,1.434-1.777,1.403c-0.835-0.038-1.773-1.518-1.449-2.619c0.177-0.602,1.126-0.902,1.776-1.262  c2.041-1.134,3.803-2.3,5.52-3.602c1.106-0.841,2.579-1.471,4.536-1.542c1.889-0.071,4.45-0.083,6.22,0  c1.465,0.066,2.698,0.164,3.976,0.42c7.308,1.469,14.698,2.788,21.607,4.77c0.739,0.213,2.896,0.613,3.086,1.311  c0.121,0.439-0.236,1.435-0.375,2.151c-0.165,0.865-0.292,1.626-0.42,2.246c-0.12,0.574-0.65,1.174-0.936,1.776  c-0.842,1.778-1.379,3.821-2.104,5.753c-0.954,2.545-2.02,4.859-3.554,6.968c-1.46,2.005-3.442,3.33-5.987,4.536  c-1.128,0.534-2.43,1.083-3.835,1.403c-1.355,0.311-3.263,0.63-4.817,0.28c-2.233-0.501-3.081-2.543-3.882-4.536  c-0.848-2.115-1.351-4.049-1.636-6.827c-2.692,0.176-3.259,2.014-4.163,3.928c-0.384,0.812-0.792,1.623-1.168,2.385  c-1.542,3.115-3.197,6.47-5.473,8.746c-1.215,1.213-2.581,2.03-4.35,2.758c-3.331,1.373-6.847,2.569-10.757,3.462  c-3.598,0.821-8.923,1.642-12.252-0.093c-2.136-1.113-3.105-3.939-4.023-6.268c-0.458-1.159-0.835-2.459-1.262-3.882  c-0.378-1.259-0.708-2.778-1.543-3.602c-1.053-1.037-2.78-1.414-3.227-2.993c-0.815-0.307-1.563-0.821-2.292-1.308  c-4.349-2.915-8.693-5.774-13.141-8.606c-0.727-0.462-1.667-0.958-2.151-1.497c-0.712-0.792-1.108-2.117-1.684-3.133  c-0.265-0.469-0.588-0.92-0.888-1.357c-0.275-0.4-0.536-0.997-1.076-1.076C2.223,36.823,2.365,37.469,2.349,38  c-0.017,0.549-0.077,1.172-0.047,1.823c0.028,0.606,0.297,1.049,0.28,1.544c-0.018,0.515-0.291,1.036-0.841,1.029  c-0.727-0.009-0.8-0.98-0.983-1.686c-0.209-0.807-0.483-1.551-0.421-2.245c0.049-0.531,0.341-1.223,0.468-2.057  c0.246-1.599,0.126-3.078,1.451-3.415C3.004,32.804,4,33.38,4.781,33.649c0.789,0.272,1.597,0.428,2.339,0.702  c0.854,0.316,1.706,0.875,2.524,1.355c2.526,1.484,4.626,3.112,7.062,4.63c3.273,2.041,6.545,3.955,9.307,6.267  c7.434-2.179,16.722-3.566,25.863-4.302c4.176-0.337,8.326-0.174,12.253,0.374c5.624,0.787,10.073-1.58,13.844-3.18  c2.035-0.864,4.078-1.653,6.173-2.573C80.804,36.331,77.705,35.814,74.466,35.24z M93.968,39.729  c-1.838-0.388-3.732-0.737-5.471-1.075c-0.059-0.012-0.127-0.067-0.188-0.046c-1.143,0.392-2.279,0.613-3.367,1.029  c-2.033,0.773-4.015,1.775-5.752,3.039C78.33,43.3,77.372,44,76.897,44.733c-1.609,2.489-1.206,7.214-0.467,10.149  c0.27,1.071,0.411,1.79,0.889,2.666c3.022,1.287,6.88-0.183,8.885-1.684c1.526-1.142,2.676-2.75,3.602-4.35  C91.815,48.042,93.102,43.946,93.968,39.729z M64.878,46.089c-6.121-1.937-14.865-0.822-21.232,0.467  c-4.477,0.907-9.474,1.92-10.944,5.753c-0.801,2.086-1.009,5.098-0.701,7.903c0.284,2.599,1.076,4.892,2.011,6.594  c2.943,2.698,10.038,1.581,14.124,0.375c2.523-0.745,4.112-1.389,5.845-2.197c1.973-0.921,4.636-1.939,5.285-4.116  c0.179-0.597,0.115-1.244,0.188-1.824c0.492-3.909,1.942-7.447,4.303-9.634c0.477-0.441,1.146-0.679,1.357-1.262  C65.37,47.428,65.13,46.709,64.878,46.089z"/>\n</svg>\n';
		}, useData: !0 });
}, function (e, t, n) {
	"use strict";
	function r() {
		var e = new i.HandlebarsEnvironment();return d.extend(e, i), e.SafeString = l["default"], e.Exception = c["default"], e.Utils = d, e.escapeExpression = d.escapeExpression, e.VM = h, e.template = function (t) {
			return h.template(t, e);
		}, e;
	}var a = function a(e) {
		return e && e.__esModule ? e : { "default": e };
	};t.__esModule = !0;var o = n(12),
	    i = a(o),
	    s = n(39),
	    l = a(s),
	    u = n(9),
	    c = a(u),
	    p = n(10),
	    d = a(p),
	    f = n(38),
	    h = a(f),
	    g = n(37),
	    m = a(g),
	    b = r();b.create = r, m["default"](b), b["default"] = b, t["default"] = b, e.exports = t["default"];
}, function (e, t) {
	(function (n) {
		"use strict";
		t.__esModule = !0, t["default"] = function (e) {
			var t = "undefined" != typeof n ? n : window,
			    r = t.Handlebars;e.noConflict = function () {
				t.Handlebars === e && (t.Handlebars = r);
			};
		}, e.exports = t["default"];
	}).call(t, function () {
		return this;
	}());
}, function (e, t, n) {
	"use strict";
	function r(e) {
		var t = e && e[0] || 1,
		    n = g.COMPILER_REVISION;if (t !== n) {
			if (n > t) {
				var r = g.REVISION_CHANGES[n],
				    a = g.REVISION_CHANGES[t];throw new h["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + a + ").");
			}throw new h["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").");
		}
	}function a(e, t) {
		function n(n, r, a) {
			a.hash && (r = d.extend({}, r, a.hash)), n = t.VM.resolvePartial.call(this, n, r, a);var o = t.VM.invokePartial.call(this, n, r, a);if (null == o && t.compile && (a.partials[a.name] = t.compile(n, e.compilerOptions, t), o = a.partials[a.name](r, a)), null != o) {
				if (a.indent) {
					for (var i = o.split("\n"), s = 0, l = i.length; l > s && (i[s] || s + 1 !== l); s++) {
						i[s] = a.indent + i[s];
					}o = i.join("\n");
				}return o;
			}throw new h["default"]("The partial " + a.name + " could not be compiled when running in runtime-only mode");
		}function r(t) {
			var n = void 0 === arguments[1] ? {} : arguments[1],
			    o = n.data;r._setup(n), !n.partial && e.useData && (o = u(t, o));var i = void 0,
			    s = e.useBlockParams ? [] : void 0;return e.useDepths && (i = n.depths ? [t].concat(n.depths) : [t]), e.main.call(a, t, a.helpers, a.partials, o, s, i);
		}if (!t) throw new h["default"]("No environment passed to template");if (!e || !e.main) throw new h["default"]("Unknown template object: " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.VM.checkRevision(e.compiler);var a = { strict: function strict(e, t) {
				if (!(t in e)) throw new h["default"]('"' + t + '" not defined in ' + e);return e[t];
			}, lookup: function lookup(e, t) {
				for (var n = e.length, r = 0; n > r; r++) {
					if (e[r] && null != e[r][t]) return e[r][t];
				}
			}, lambda: function lambda(e, t) {
				return "function" == typeof e ? e.call(t) : e;
			}, escapeExpression: d.escapeExpression, invokePartial: n, fn: function fn(t) {
				return e[t];
			}, programs: [], program: function program(e, t, n, r, a) {
				var i = this.programs[e],
				    s = this.fn(e);return t || a || r || n ? i = o(this, e, s, t, n, r, a) : i || (i = this.programs[e] = o(this, e, s)), i;
			}, data: function data(e, t) {
				for (; e && t--;) {
					e = e._parent;
				}return e;
			}, merge: function merge(e, t) {
				var n = e || t;return e && t && e !== t && (n = d.extend({}, t, e)), n;
			}, noop: t.VM.noop, compilerInfo: e.compiler };return r.isTop = !0, r._setup = function (n) {
			n.partial ? (a.helpers = n.helpers, a.partials = n.partials) : (a.helpers = a.merge(n.helpers, t.helpers), e.usePartial && (a.partials = a.merge(n.partials, t.partials)));
		}, r._child = function (t, n, r, i) {
			if (e.useBlockParams && !r) throw new h["default"]("must pass block params");if (e.useDepths && !i) throw new h["default"]("must pass parent depths");return o(a, t, e[t], n, 0, r, i);
		}, r;
	}function o(e, t, n, r, a, o, i) {
		function s(t) {
			var a = void 0 === arguments[1] ? {} : arguments[1];return n.call(e, t, e.helpers, e.partials, a.data || r, o && [a.blockParams].concat(o), i && [t].concat(i));
		}return s.program = t, s.depth = i ? i.length : 0, s.blockParams = a || 0, s;
	}function i(e, t, n) {
		return e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = n.partials[n.name], e;
	}function s(e, t, n) {
		if (n.partial = !0, void 0 === e) throw new h["default"]("The partial " + n.name + " could not be found");return e instanceof Function ? e(t, n) : void 0;
	}function l() {
		return "";
	}function u(e, t) {
		return t && "root" in t || (t = t ? g.createFrame(t) : {}, t.root = e), t;
	}var c = function c(e) {
		return e && e.__esModule ? e : { "default": e };
	};t.__esModule = !0, t.checkRevision = r, t.template = a, t.wrapProgram = o, t.resolvePartial = i, t.invokePartial = s, t.noop = l;var p = n(10),
	    d = c(p),
	    f = n(9),
	    h = c(f),
	    g = n(12);
}, function (e, t) {
	"use strict";
	function n(e) {
		this.string = e;
	}t.__esModule = !0, n.prototype.toString = n.prototype.toHTML = function () {
		return "" + this.string;
	}, t["default"] = n, e.exports = t["default"];
}, function (e, t) {
	e.exports = function (e) {
		"function" == typeof execScript ? execScript(e) : eval.call(null, e);
	};
}, function (e, t, n) {
	n(40)(n(42));
}, function (e, t) {
	e.exports = '/*\n * Copyright 2015 Google Inc.\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * Generated from http://github.com/GoogleChrome/accessibility-developer-tools/tree/952a710bc74ae546473b239e32b76cb3946c6fad\n *\n * See project README for build steps.\n */\n\n// AUTO-GENERATED CONTENT BELOW: DO NOT EDIT! See above for details.\n\nvar fn = (function() {\n  var COMPILED = !0, goog = goog || {};\ngoog.global = this;\ngoog.isDef = function(a) {\n  return void 0 !== a;\n};\ngoog.exportPath_ = function(a, b, c) {\n  a = a.split(".");\n  c = c || goog.global;\n  a[0] in c || !c.execScript || c.execScript("var " + a[0]);\n  for (var d;a.length && (d = a.shift());) {\n    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};\n  }\n};\ngoog.define = function(a, b) {\n  var c = b;\n  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));\n  goog.exportPath_(a, c);\n};\ngoog.DEBUG = !0;\ngoog.LOCALE = "en";\ngoog.TRUSTED_SITE = !0;\ngoog.STRICT_MODE_COMPATIBLE = !1;\ngoog.provide = function(a) {\n  if (!COMPILED) {\n    if (goog.isProvided_(a)) {\n      throw Error(\'Namespace "\' + a + \'" already declared.\');\n    }\n    delete goog.implicitNamespaces_[a];\n    for (var b = a;(b = b.substring(0, b.lastIndexOf("."))) && !goog.getObjectByName(b);) {\n      goog.implicitNamespaces_[b] = !0;\n    }\n  }\n  goog.exportPath_(a);\n};\ngoog.setTestOnly = function(a) {\n  if (COMPILED && !goog.DEBUG) {\n    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");\n  }\n};\ngoog.forwardDeclare = function(a) {\n};\nCOMPILED || (goog.isProvided_ = function(a) {\n  return !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));\n}, goog.implicitNamespaces_ = {});\ngoog.getObjectByName = function(a, b) {\n  for (var c = a.split("."), d = b || goog.global, e;e = c.shift();) {\n    if (goog.isDefAndNotNull(d[e])) {\n      d = d[e];\n    } else {\n      return null;\n    }\n  }\n  return d;\n};\ngoog.globalize = function(a, b) {\n  var c = b || goog.global, d;\n  for (d in a) {\n    c[d] = a[d];\n  }\n};\ngoog.addDependency = function(a, b, c) {\n  if (goog.DEPENDENCIES_ENABLED) {\n    var d;\n    a = a.replace(/\\\\/g, "/");\n    for (var e = goog.dependencies_, f = 0;d = b[f];f++) {\n      e.nameToPath[d] = a, a in e.pathToNames || (e.pathToNames[a] = {}), e.pathToNames[a][d] = !0;\n    }\n    for (d = 0;b = c[d];d++) {\n      a in e.requires || (e.requires[a] = {}), e.requires[a][b] = !0;\n    }\n  }\n};\ngoog.ENABLE_DEBUG_LOADER = !0;\ngoog.require = function(a) {\n  if (!COMPILED && !goog.isProvided_(a)) {\n    if (goog.ENABLE_DEBUG_LOADER) {\n      var b = goog.getPathFromDeps_(a);\n      if (b) {\n        goog.included_[b] = !0;\n        goog.writeScripts_();\n        return;\n      }\n    }\n    a = "goog.require could not find: " + a;\n    goog.global.console && goog.global.console.error(a);\n    throw Error(a);\n  }\n};\ngoog.basePath = "";\ngoog.nullFunction = function() {\n};\ngoog.identityFunction = function(a, b) {\n  return a;\n};\ngoog.abstractMethod = function() {\n  throw Error("unimplemented abstract method");\n};\ngoog.addSingletonGetter = function(a) {\n  a.getInstance = function() {\n    if (a.instance_) {\n      return a.instance_;\n    }\n    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);\n    return a.instance_ = new a;\n  };\n};\ngoog.instantiatedSingletons_ = [];\ngoog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;\ngoog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {\n  var a = goog.global.document;\n  return "undefined" != typeof a && "write" in a;\n}, goog.findBasePath_ = function() {\n  if (goog.global.CLOSURE_BASE_PATH) {\n    goog.basePath = goog.global.CLOSURE_BASE_PATH;\n  } else {\n    if (goog.inHtmlDocument_()) {\n      for (var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1;0 <= b;--b) {\n        var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;\n        if ("base.js" == c.substr(d - 7, 7)) {\n          goog.basePath = c.substr(0, d - 7);\n          break;\n        }\n      }\n    }\n  }\n}, goog.importScript_ = function(a) {\n  var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;\n  !goog.dependencies_.written[a] && b(a) && (goog.dependencies_.written[a] = !0);\n}, goog.writeScriptTag_ = function(a) {\n  if (goog.inHtmlDocument_()) {\n    var b = goog.global.document;\n    if ("complete" == b.readyState) {\n      if (/\\bdeps.js$/.test(a)) {\n        return !1;\n      }\n      throw Error(\'Cannot write "\' + a + \'" after document load\');\n    }\n    b.write(\'<script type="text/javascript" src="\' + a + \'">\\x3c/script>\');\n    return !0;\n  }\n  return !1;\n}, goog.writeScripts_ = function() {\n  function a(e) {\n    if (!(e in d.written)) {\n      if (!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {\n        for (var g in d.requires[e]) {\n          if (!goog.isProvided_(g)) {\n            if (g in d.nameToPath) {\n              a(d.nameToPath[g]);\n            } else {\n              throw Error("Undefined nameToPath for " + g);\n            }\n          }\n        }\n      }\n      e in c || (c[e] = !0, b.push(e));\n    }\n  }\n  var b = [], c = {}, d = goog.dependencies_, e;\n  for (e in goog.included_) {\n    d.written[e] || a(e);\n  }\n  for (e = 0;e < b.length;e++) {\n    if (b[e]) {\n      goog.importScript_(goog.basePath + b[e]);\n    } else {\n      throw Error("Undefined script input");\n    }\n  }\n}, goog.getPathFromDeps_ = function(a) {\n  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;\n}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));\ngoog.typeOf = function(a) {\n  var b = typeof a;\n  if ("object" == b) {\n    if (a) {\n      if (a instanceof Array) {\n        return "array";\n      }\n      if (a instanceof Object) {\n        return b;\n      }\n      var c = Object.prototype.toString.call(a);\n      if ("[object Window]" == c) {\n        return "object";\n      }\n      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {\n        return "array";\n      }\n      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {\n        return "function";\n      }\n    } else {\n      return "null";\n    }\n  } else {\n    if ("function" == b && "undefined" == typeof a.call) {\n      return "object";\n    }\n  }\n  return b;\n};\ngoog.isNull = function(a) {\n  return null === a;\n};\ngoog.isDefAndNotNull = function(a) {\n  return null != a;\n};\ngoog.isArray = function(a) {\n  return "array" == goog.typeOf(a);\n};\ngoog.isArrayLike = function(a) {\n  var b = goog.typeOf(a);\n  return "array" == b || "object" == b && "number" == typeof a.length;\n};\ngoog.isDateLike = function(a) {\n  return goog.isObject(a) && "function" == typeof a.getFullYear;\n};\ngoog.isString = function(a) {\n  return "string" == typeof a;\n};\ngoog.isBoolean = function(a) {\n  return "boolean" == typeof a;\n};\ngoog.isNumber = function(a) {\n  return "number" == typeof a;\n};\ngoog.isFunction = function(a) {\n  return "function" == goog.typeOf(a);\n};\ngoog.isObject = function(a) {\n  var b = typeof a;\n  return "object" == b && null != a || "function" == b;\n};\ngoog.getUid = function(a) {\n  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);\n};\ngoog.hasUid = function(a) {\n  return !!a[goog.UID_PROPERTY_];\n};\ngoog.removeUid = function(a) {\n  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);\n  try {\n    delete a[goog.UID_PROPERTY_];\n  } catch (b) {\n  }\n};\ngoog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);\ngoog.uidCounter_ = 0;\ngoog.getHashCode = goog.getUid;\ngoog.removeHashCode = goog.removeUid;\ngoog.cloneObject = function(a) {\n  var b = goog.typeOf(a);\n  if ("object" == b || "array" == b) {\n    if (a.clone) {\n      return a.clone();\n    }\n    var b = "array" == b ? [] : {}, c;\n    for (c in a) {\n      b[c] = goog.cloneObject(a[c]);\n    }\n    return b;\n  }\n  return a;\n};\ngoog.bindNative_ = function(a, b, c) {\n  return a.call.apply(a.bind, arguments);\n};\ngoog.bindJs_ = function(a, b, c) {\n  if (!a) {\n    throw Error();\n  }\n  if (2 < arguments.length) {\n    var d = Array.prototype.slice.call(arguments, 2);\n    return function() {\n      var c = Array.prototype.slice.call(arguments);\n      Array.prototype.unshift.apply(c, d);\n      return a.apply(b, c);\n    };\n  }\n  return function() {\n    return a.apply(b, arguments);\n  };\n};\ngoog.bind = function(a, b, c) {\n  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;\n  return goog.bind.apply(null, arguments);\n};\ngoog.partial = function(a, b) {\n  var c = Array.prototype.slice.call(arguments, 1);\n  return function() {\n    var b = c.slice();\n    b.push.apply(b, arguments);\n    return a.apply(this, b);\n  };\n};\ngoog.mixin = function(a, b) {\n  for (var c in b) {\n    a[c] = b[c];\n  }\n};\ngoog.now = goog.TRUSTED_SITE && Date.now || function() {\n  return +new Date;\n};\ngoog.globalEval = function(a) {\n  if (goog.global.execScript) {\n    goog.global.execScript(a, "JavaScript");\n  } else {\n    if (goog.global.eval) {\n      if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) {\n        goog.global.eval(a);\n      } else {\n        var b = goog.global.document, c = b.createElement("script");\n        c.type = "text/javascript";\n        c.defer = !1;\n        c.appendChild(b.createTextNode(a));\n        b.body.appendChild(c);\n        b.body.removeChild(c);\n      }\n    } else {\n      throw Error("goog.globalEval not available");\n    }\n  }\n};\ngoog.evalWorksForGlobals_ = null;\ngoog.getCssName = function(a, b) {\n  var c = function(a) {\n    return goog.cssNameMapping_[a] || a;\n  }, d = function(a) {\n    a = a.split("-");\n    for (var b = [], d = 0;d < a.length;d++) {\n      b.push(c(a[d]));\n    }\n    return b.join("-");\n  }, d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {\n    return a;\n  };\n  return b ? a + "-" + d(b) : d(a);\n};\ngoog.setCssNameMapping = function(a, b) {\n  goog.cssNameMapping_ = a;\n  goog.cssNameMappingStyle_ = b;\n};\n!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);\ngoog.getMsg = function(a, b) {\n  var c = b || {}, d;\n  for (d in c) {\n    var e = ("" + c[d]).replace(/\\$/g, "$$$$");\n    a = a.replace(new RegExp("\\\\{\\\\$" + d + "\\\\}", "gi"), e);\n  }\n  return a;\n};\ngoog.getMsgWithFallback = function(a, b) {\n  return a;\n};\ngoog.exportSymbol = function(a, b, c) {\n  goog.exportPath_(a, b, c);\n};\ngoog.exportProperty = function(a, b, c) {\n  a[b] = c;\n};\ngoog.inherits = function(a, b) {\n  function c() {\n  }\n  c.prototype = b.prototype;\n  a.superClass_ = b.prototype;\n  a.prototype = new c;\n  a.prototype.constructor = a;\n  a.base = function(a, c, f) {\n    var g = Array.prototype.slice.call(arguments, 2);\n    return b.prototype[c].apply(a, g);\n  };\n};\ngoog.base = function(a, b, c) {\n  var d = arguments.callee.caller;\n  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {\n    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");\n  }\n  if (d.superClass_) {\n    return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));\n  }\n  for (var e = Array.prototype.slice.call(arguments, 2), f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {\n    if (g.prototype[b] === d) {\n      f = !0;\n    } else {\n      if (f) {\n        return g.prototype[b].apply(a, e);\n      }\n    }\n  }\n  if (a[b] === d) {\n    return a.constructor.prototype[b].apply(a, e);\n  }\n  throw Error("goog.base called from a method of one name to a method of a different name");\n};\ngoog.scope = function(a) {\n  a.call(goog.global);\n};\nvar axs = {};\naxs.browserUtils = {};\naxs.browserUtils.matchSelector = function(a, b) {\n  return a.matches ? a.matches(b) : a.webkitMatchesSelector ? a.webkitMatchesSelector(b) : a.mozMatchesSelector ? a.mozMatchesSelector(b) : a.msMatchesSelector ? a.msMatchesSelector(b) : !1;\n};\naxs.constants = {};\naxs.constants.ARIA_ROLES = {alert:{namefrom:["author"], parent:["region"]}, alertdialog:{namefrom:["author"], namerequired:!0, parent:["alert", "dialog"]}, application:{namefrom:["author"], namerequired:!0, parent:["landmark"]}, article:{namefrom:["author"], parent:["document", "region"]}, banner:{namefrom:["author"], parent:["landmark"]}, button:{childpresentational:!0, namefrom:["contents", "author"], namerequired:!0, parent:["command"], properties:["aria-expanded", "aria-pressed"]}, checkbox:{namefrom:["contents", \n"author"], namerequired:!0, parent:["input"], requiredProperties:["aria-checked"], properties:["aria-checked"]}, columnheader:{namefrom:["contents", "author"], namerequired:!0, parent:["gridcell", "sectionhead", "widget"], properties:["aria-sort"], scope:["row"]}, combobox:{mustcontain:["listbox", "textbox"], namefrom:["author"], namerequired:!0, parent:["select"], requiredProperties:["aria-expanded"], properties:["aria-expanded", "aria-autocomplete", "aria-required"]}, command:{"abstract":!0, namefrom:["author"], \nparent:["widget"]}, complementary:{namefrom:["author"], parent:["landmark"]}, composite:{"abstract":!0, childpresentational:!1, namefrom:["author"], parent:["widget"], properties:["aria-activedescendant"]}, contentinfo:{namefrom:["author"], parent:["landmark"]}, definition:{namefrom:["author"], parent:["section"]}, dialog:{namefrom:["author"], namerequired:!0, parent:["window"]}, directory:{namefrom:["contents", "author"], parent:["list"]}, document:{namefrom:[" author"], namerequired:!0, parent:["structure"], \nproperties:["aria-expanded"]}, form:{namefrom:["author"], parent:["landmark"]}, grid:{mustcontain:["row", "rowgroup"], namefrom:["author"], namerequired:!0, parent:["composite", "region"], properties:["aria-level", "aria-multiselectable", "aria-readonly"]}, gridcell:{namefrom:["contents", "author"], namerequired:!0, parent:["section", "widget"], properties:["aria-readonly", "aria-required", "aria-selected"], scope:["row"]}, group:{namefrom:[" author"], parent:["section"], properties:["aria-activedescendant"]}, \nheading:{namerequired:!0, parent:["sectionhead"], properties:["aria-level"]}, img:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["section"]}, input:{"abstract":!0, namefrom:["author"], parent:["widget"]}, landmark:{"abstract":!0, namefrom:["contents", "author"], namerequired:!1, parent:["region"]}, link:{namefrom:["contents", "author"], namerequired:!0, parent:["command"], properties:["aria-expanded"]}, list:{mustcontain:["group", "listitem"], namefrom:["author"], parent:["region"]}, \nlistbox:{mustcontain:["option"], namefrom:["author"], namerequired:!0, parent:["list", "select"], properties:["aria-multiselectable", "aria-required"]}, listitem:{namefrom:["contents", "author"], namerequired:!0, parent:["section"], properties:["aria-level", "aria-posinset", "aria-setsize"], scope:["list"]}, log:{namefrom:[" author"], namerequired:!0, parent:["region"]}, main:{namefrom:["author"], parent:["landmark"]}, marquee:{namerequired:!0, parent:["section"]}, math:{childpresentational:!0, namefrom:["author"], \nparent:["section"]}, menu:{mustcontain:["group", "menuitemradio", "menuitem", "menuitemcheckbox"], namefrom:["author"], namerequired:!0, parent:["list", "select"]}, menubar:{namefrom:["author"], parent:["menu"]}, menuitem:{namefrom:["contents", "author"], namerequired:!0, parent:["command"], scope:["menu", "menubar"]}, menuitemcheckbox:{namefrom:["contents", "author"], namerequired:!0, parent:["checkbox", "menuitem"], scope:["menu", "menubar"]}, menuitemradio:{namefrom:["contents", "author"], namerequired:!0, \nparent:["menuitemcheckbox", "radio"], scope:["menu", "menubar"]}, navigation:{namefrom:["author"], parent:["landmark"]}, note:{namefrom:["author"], parent:["section"]}, option:{namefrom:["contents", "author"], namerequired:!0, parent:["input"], properties:["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"]}, presentation:{parent:["structure"]}, progressbar:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["range"]}, radio:{namefrom:["contents", "author"], namerequired:!0, \nparent:["checkbox", "option"]}, radiogroup:{mustcontain:["radio"], namefrom:["author"], namerequired:!0, parent:["select"], properties:["aria-required"]}, range:{"abstract":!0, namefrom:["author"], parent:["widget"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]}, region:{namefrom:[" author"], parent:["section"]}, roletype:{"abstract":!0, properties:"aria-atomic aria-busy aria-controls aria-describedby aria-disabled aria-dropeffect aria-flowto aria-grabbed aria-haspopup aria-hidden aria-invalid aria-label aria-labelledby aria-live aria-owns aria-relevant".split(" ")}, \nrow:{mustcontain:["columnheader", "gridcell", "rowheader"], namefrom:["contents", "author"], parent:["group", "widget"], properties:["aria-level", "aria-selected"], scope:["grid", "rowgroup", "treegrid"]}, rowgroup:{mustcontain:["row"], namefrom:["contents", "author"], parent:["group"], scope:["grid"]}, rowheader:{namefrom:["contents", "author"], namerequired:!0, parent:["gridcell", "sectionhead", "widget"], properties:["aria-sort"], scope:["row"]}, search:{namefrom:["author"], parent:["landmark"]}, \nsection:{"abstract":!0, namefrom:["contents", "author"], parent:["structure"], properties:["aria-expanded"]}, sectionhead:{"abstract":!0, namefrom:["contents", "author"], parent:["structure"], properties:["aria-expanded"]}, select:{"abstract":!0, namefrom:["author"], parent:["composite", "group", "input"]}, separator:{childpresentational:!0, namefrom:["author"], parent:["structure"], properties:["aria-expanded", "aria-orientation"]}, scrollbar:{childpresentational:!0, namefrom:["author"], namerequired:!1, \nparent:["input", "range"], requiredProperties:["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow"]}, slider:{childpresentational:!0, namefrom:["author"], namerequired:!0, parent:["input", "range"], requiredProperties:["aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-orientation"]}, spinbutton:{namefrom:["author"], \nnamerequired:!0, parent:["input", "range"], requiredProperties:["aria-valuemax", "aria-valuemin", "aria-valuenow"], properties:["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-required"]}, status:{parent:["region"]}, structure:{"abstract":!0, parent:["roletype"]}, tab:{namefrom:["contents", "author"], parent:["sectionhead", "widget"], properties:["aria-selected"], scope:["tablist"]}, tablist:{mustcontain:["tab"], namefrom:["author"], parent:["composite", "directory"], properties:["aria-level"]}, \ntabpanel:{namefrom:["author"], namerequired:!0, parent:["region"]}, textbox:{namefrom:["author"], namerequired:!0, parent:["input"], properties:["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required"]}, timer:{namefrom:["author"], namerequired:!0, parent:["status"]}, toolbar:{namefrom:["author"], parent:["group"]}, tooltip:{namerequired:!0, parent:["section"]}, tree:{mustcontain:["group", "treeitem"], namefrom:["author"], namerequired:!0, parent:["select"], \nproperties:["aria-multiselectable", "aria-required"]}, treegrid:{mustcontain:["row"], namefrom:["author"], namerequired:!0, parent:["grid", "tree"]}, treeitem:{namefrom:["contents", "author"], namerequired:!0, parent:["listitem", "option"], scope:["group", "tree"]}, widget:{"abstract":!0, parent:["roletype"]}, window:{"abstract":!0, namefrom:[" author"], parent:["roletype"], properties:["aria-expanded"]}};\naxs.constants.WIDGET_ROLES = {};\naxs.constants.addAllParentRolesToSet_ = function(a, b) {\n  if (a.parent) {\n    for (var c = a.parent, d = 0;d < c.length;d++) {\n      var e = c[d];\n      b[e] = !0;\n      axs.constants.addAllParentRolesToSet_(axs.constants.ARIA_ROLES[e], b);\n    }\n  }\n};\naxs.constants.addAllPropertiesToSet_ = function(a, b, c) {\n  var d = a[b];\n  if (d) {\n    for (var e = 0;e < d.length;e++) {\n      c[d[e]] = !0;\n    }\n  }\n  if (a.parent) {\n    for (a = a.parent, d = 0;d < a.length;d++) {\n      axs.constants.addAllPropertiesToSet_(axs.constants.ARIA_ROLES[a[d]], b, c);\n    }\n  }\n};\nfor (var roleName in axs.constants.ARIA_ROLES) {\n  var role = axs.constants.ARIA_ROLES[roleName], propertiesSet = {};\n  axs.constants.addAllPropertiesToSet_(role, "properties", propertiesSet);\n  role.propertiesSet = propertiesSet;\n  var requiredPropertiesSet = {};\n  axs.constants.addAllPropertiesToSet_(role, "requiredProperties", requiredPropertiesSet);\n  role.requiredPropertiesSet = requiredPropertiesSet;\n  var parentRolesSet = {};\n  axs.constants.addAllParentRolesToSet_(role, parentRolesSet);\n  role.allParentRolesSet = parentRolesSet;\n  "widget" in parentRolesSet && (axs.constants.WIDGET_ROLES[roleName] = role);\n}\naxs.constants.ARIA_PROPERTIES = {activedescendant:{type:"property", valueType:"idref"}, atomic:{defaultValue:"false", type:"property", valueType:"boolean"}, autocomplete:{defaultValue:"none", type:"property", valueType:"token", values:["inline", "list", "both", "none"]}, busy:{defaultValue:"false", type:"state", valueType:"boolean"}, checked:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "mixed", "undefined"]}, controls:{type:"property", valueType:"idref_list"}, \ndescribedby:{type:"property", valueType:"idref_list"}, disabled:{defaultValue:"false", type:"state", valueType:"boolean"}, dropeffect:{defaultValue:"none", type:"property", valueType:"token_list", values:"copy move link execute popup none".split(" ")}, expanded:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "undefined"]}, flowto:{type:"property", valueType:"idref_list"}, grabbed:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", \n"undefined"]}, haspopup:{defaultValue:"false", type:"property", valueType:"boolean"}, hidden:{defaultValue:"false", type:"state", valueType:"boolean"}, invalid:{defaultValue:"false", type:"state", valueType:"token", values:["grammar", "false", "spelling", "true"]}, label:{type:"property", valueType:"string"}, labelledby:{type:"property", valueType:"idref_list"}, level:{type:"property", valueType:"integer"}, live:{defaultValue:"off", type:"property", valueType:"token", values:["off", "polite", "assertive"]}, \nmultiline:{defaultValue:"false", type:"property", valueType:"boolean"}, multiselectable:{defaultValue:"false", type:"property", valueType:"boolean"}, orientation:{defaultValue:"vertical", type:"property", valueType:"token", values:["horizontal", "vertical"]}, owns:{type:"property", valueType:"idref_list"}, posinset:{type:"property", valueType:"integer"}, pressed:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "mixed", "undefined"]}, readonly:{defaultValue:"false", \ntype:"property", valueType:"boolean"}, relevant:{defaultValue:"additions text", type:"property", valueType:"token_list", values:["additions", "removals", "text", "all"]}, required:{defaultValue:"false", type:"property", valueType:"boolean"}, selected:{defaultValue:"undefined", type:"state", valueType:"token", values:["true", "false", "undefined"]}, setsize:{type:"property", valueType:"integer"}, sort:{defaultValue:"none", type:"property", valueType:"token", values:["ascending", "descending", "none", \n"other"]}, valuemax:{type:"property", valueType:"decimal"}, valuemin:{type:"property", valueType:"decimal"}, valuenow:{type:"property", valueType:"decimal"}, valuetext:{type:"property", valueType:"string"}};\n(function() {\n  for (var a in axs.constants.ARIA_PROPERTIES) {\n    var b = axs.constants.ARIA_PROPERTIES[a];\n    if (b.values) {\n      for (var c = {}, d = 0;d < b.values.length;d++) {\n        c[b.values[d]] = !0;\n      }\n      b.valuesSet = c;\n    }\n  }\n})();\naxs.constants.GLOBAL_PROPERTIES = axs.constants.ARIA_ROLES.roletype.propertiesSet;\naxs.constants.NO_ROLE_NAME = " ";\naxs.constants.WIDGET_ROLE_TO_NAME = {alert:"aria_role_alert", alertdialog:"aria_role_alertdialog", button:"aria_role_button", checkbox:"aria_role_checkbox", columnheader:"aria_role_columnheader", combobox:"aria_role_combobox", dialog:"aria_role_dialog", grid:"aria_role_grid", gridcell:"aria_role_gridcell", link:"aria_role_link", listbox:"aria_role_listbox", log:"aria_role_log", marquee:"aria_role_marquee", menu:"aria_role_menu", menubar:"aria_role_menubar", menuitem:"aria_role_menuitem", menuitemcheckbox:"aria_role_menuitemcheckbox", \nmenuitemradio:"aria_role_menuitemradio", option:axs.constants.NO_ROLE_NAME, progressbar:"aria_role_progressbar", radio:"aria_role_radio", radiogroup:"aria_role_radiogroup", rowheader:"aria_role_rowheader", scrollbar:"aria_role_scrollbar", slider:"aria_role_slider", spinbutton:"aria_role_spinbutton", status:"aria_role_status", tab:"aria_role_tab", tabpanel:"aria_role_tabpanel", textbox:"aria_role_textbox", timer:"aria_role_timer", toolbar:"aria_role_toolbar", tooltip:"aria_role_tooltip", treeitem:"aria_role_treeitem"};\naxs.constants.STRUCTURE_ROLE_TO_NAME = {article:"aria_role_article", application:"aria_role_application", banner:"aria_role_banner", columnheader:"aria_role_columnheader", complementary:"aria_role_complementary", contentinfo:"aria_role_contentinfo", definition:"aria_role_definition", directory:"aria_role_directory", document:"aria_role_document", form:"aria_role_form", group:"aria_role_group", heading:"aria_role_heading", img:"aria_role_img", list:"aria_role_list", listitem:"aria_role_listitem", \nmain:"aria_role_main", math:"aria_role_math", navigation:"aria_role_navigation", note:"aria_role_note", region:"aria_role_region", rowheader:"aria_role_rowheader", search:"aria_role_search", separator:"aria_role_separator"};\naxs.constants.ATTRIBUTE_VALUE_TO_STATUS = [{name:"aria-autocomplete", values:{inline:"aria_autocomplete_inline", list:"aria_autocomplete_list", both:"aria_autocomplete_both"}}, {name:"aria-checked", values:{"true":"aria_checked_true", "false":"aria_checked_false", mixed:"aria_checked_mixed"}}, {name:"aria-disabled", values:{"true":"aria_disabled_true"}}, {name:"aria-expanded", values:{"true":"aria_expanded_true", "false":"aria_expanded_false"}}, {name:"aria-invalid", values:{"true":"aria_invalid_true", \ngrammar:"aria_invalid_grammar", spelling:"aria_invalid_spelling"}}, {name:"aria-multiline", values:{"true":"aria_multiline_true"}}, {name:"aria-multiselectable", values:{"true":"aria_multiselectable_true"}}, {name:"aria-pressed", values:{"true":"aria_pressed_true", "false":"aria_pressed_false", mixed:"aria_pressed_mixed"}}, {name:"aria-readonly", values:{"true":"aria_readonly_true"}}, {name:"aria-required", values:{"true":"aria_required_true"}}, {name:"aria-selected", values:{"true":"aria_selected_true", \n"false":"aria_selected_false"}}];\naxs.constants.INPUT_TYPE_TO_INFORMATION_TABLE_MSG = {button:"input_type_button", checkbox:"input_type_checkbox", color:"input_type_color", datetime:"input_type_datetime", "datetime-local":"input_type_datetime_local", date:"input_type_date", email:"input_type_email", file:"input_type_file", image:"input_type_image", month:"input_type_month", number:"input_type_number", password:"input_type_password", radio:"input_type_radio", range:"input_type_range", reset:"input_type_reset", search:"input_type_search", \nsubmit:"input_type_submit", tel:"input_type_tel", text:"input_type_text", url:"input_type_url", week:"input_type_week"};\naxs.constants.TAG_TO_INFORMATION_TABLE_VERBOSE_MSG = {A:"tag_link", BUTTON:"tag_button", H1:"tag_h1", H2:"tag_h2", H3:"tag_h3", H4:"tag_h4", H5:"tag_h5", H6:"tag_h6", LI:"tag_li", OL:"tag_ol", SELECT:"tag_select", TEXTAREA:"tag_textarea", UL:"tag_ul", SECTION:"tag_section", NAV:"tag_nav", ARTICLE:"tag_article", ASIDE:"tag_aside", HGROUP:"tag_hgroup", HEADER:"tag_header", FOOTER:"tag_footer", TIME:"tag_time", MARK:"tag_mark"};\naxs.constants.TAG_TO_INFORMATION_TABLE_BRIEF_MSG = {BUTTON:"tag_button", SELECT:"tag_select", TEXTAREA:"tag_textarea"};\naxs.constants.MIXED_VALUES = {"true":!0, "false":!0, mixed:!0};\naxs.constants.Severity = {INFO:"Info", WARNING:"Warning", SEVERE:"Severe"};\naxs.constants.AuditResult = {PASS:"PASS", FAIL:"FAIL", NA:"NA"};\naxs.constants.InlineElements = {TT:!0, I:!0, B:!0, BIG:!0, SMALL:!0, EM:!0, STRONG:!0, DFN:!0, CODE:!0, SAMP:!0, KBD:!0, VAR:!0, CITE:!0, ABBR:!0, ACRONYM:!0, A:!0, IMG:!0, OBJECT:!0, BR:!0, SCRIPT:!0, MAP:!0, Q:!0, SUB:!0, SUP:!0, SPAN:!0, BDO:!0, INPUT:!0, SELECT:!0, TEXTAREA:!0, LABEL:!0, BUTTON:!0};\naxs.constants.NATIVELY_DISABLEABLE = {BUTTON:!0, INPUT:!0, SELECT:!0, TEXTAREA:!0, FIELDSET:!0, OPTGROUP:!0, OPTION:!0};\naxs.constants.ARIA_TO_HTML_ATTRIBUTE = {"aria-checked":"checked", "aria-disabled":"disabled", "aria-hidden":"hidden", "aria-expanded":"open", "aria-valuemax":"max", "aria-valuemin":"min", "aria-readonly":"readonly", "aria-required":"required", "aria-selected":"selected", "aria-valuenow":"value"};\naxs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO = {A:[{role:"link", allowed:"button checkbox menuitem menuitemcheckbox menuitemradio tab treeitem".split(" "), selector:"a[href]"}], ADDRESS:[{role:"", allowed:["contentinfo", "presentation"]}], AREA:[{role:"link", selector:"area[href]"}], ARTICLE:[{role:"article", allowed:["presentation", "article", "document", "application", "main"]}], ASIDE:[{role:"complementary", allowed:["note", "complementary", "search", "presentation"]}], AUDIO:[{role:"", allowed:["application", \n"presentation"]}], BASE:[{role:"", reserved:!0}], BODY:[{role:"document", allowed:["presentation"]}], BUTTON:[{role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'button:not([aria-pressed]):not([type="menu"])\'}, {role:"button", allowed:["button"], selector:"button[aria-pressed]"}, {role:"button", attributes:{"aria-haspopup":!0}, allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'button[type="menu"]\'}], CAPTION:[{role:"", \nallowed:["presentation"]}], COL:[{role:"", reserved:!0}], COLGROUP:[{role:"", reserved:!0}], DATALIST:[{role:"listbox", attributes:{"aria-multiselectable":!1}, allowed:["presentation"]}], DEL:[{role:"", allowed:["*"]}], DD:[{role:"", allowed:["presentation"]}], DT:[{role:"", allowed:["presentation"]}], DETAILS:[{role:"group", allowed:["group", "presentation"]}], DIALOG:[{role:"dialog", allowed:"dialog alert alertdialog application log marquee status".split(" "), selector:"dialog[open]"}, {role:"dialog", \nattributes:{"aria-hidden":!0}, allowed:"dialog alert alertdialog application log marquee status".split(" "), selector:"dialog:not([open])"}], DIV:[{role:"", allowed:["*"]}], DL:[{role:"list", allowed:["presentation"]}], EMBED:[{role:"", allowed:["application", "document", "img", "presentation"]}], FIGURE:[{role:"", allowed:["*"]}], FOOTER:[{role:"", allowed:["contentinfo", "presentation"]}], FORM:[{role:"form", allowed:["presentation"]}], P:[{role:"", allowed:["*"]}], PRE:[{role:"", allowed:["*"]}], \nBLOCKQUOTE:[{role:"", allowed:["*"]}], H1:[{role:"heading"}], H2:[{role:"heading"}], H3:[{role:"heading"}], H4:[{role:"heading"}], H5:[{role:"heading"}], H6:[{role:"heading"}], HEAD:[{role:"", reserved:!0}], HEADER:[{role:"", allowed:["banner", "presentation"]}], HR:[{role:"separator", allowed:["presentation"]}], HTML:[{role:"", reserved:!0}], IFRAME:[{role:"", allowed:["application", "document", "img", "presentation"], selector:"iframe:not([seamless])"}, {role:"", allowed:["application", "document", \n"img", "presentation", "group"], selector:"iframe[seamless]"}], IMG:[{role:"presentation", reserved:!0, selector:\'img[alt=""]\'}, {role:"img", allowed:["*"], selector:\'img[alt]:not([alt=""])\'}], INPUT:[{role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'input[type="button"]:not([aria-pressed])\'}, {role:"button", allowed:["button"], selector:\'input[type="button"][aria-pressed]\'}, {role:"checkbox", allowed:["checkbox"], selector:\'input[type="checkbox"]\'}, \n{role:"", selector:\'input[type="color"]\'}, {role:"", selector:\'input[type="date"]\'}, {role:"", selector:\'input[type="datetime"]\'}, {role:"textbox", selector:\'input[type="email"]:not([list])\'}, {role:"", selector:\'input[type="file"]\'}, {role:"", reserved:!0, selector:\'input[type="hidden"]\'}, {role:"button", allowed:["button"], selector:\'input[type="image"][aria-pressed]\'}, {role:"button", allowed:["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio"], selector:\'input[type="image"]:not([aria-pressed])\'}, \n{role:"", selector:\'input[type="month"]\'}, {role:"", selector:\'input[type="number"]\'}, {role:"textbox", selector:\'input[type="password"]\'}, {role:"radio", allowed:["menuitemradio"], selector:\'input[type="radio"]\'}, {role:"slider", selector:\'input[type="range"]\'}, {role:"button", selector:\'input[type="reset"]\'}, {role:"combobox", selector:\'input[type="search"][list]\'}, {role:"textbox", selector:\'input[type="search"]:not([list])\'}, {role:"button", selector:\'input[type="submit"]\'}, {role:"combobox", \nselector:\'input[type="tel"][list]\'}, {role:"textbox", selector:\'input[type="tel"]:not([list])\'}, {role:"combobox", selector:\'input[type="text"][list]\'}, {role:"textbox", selector:\'input[type="text"]:not([list])\'}, {role:"textbox", selector:"input:not([type])"}, {role:"", selector:\'input[type="time"]\'}, {role:"combobox", selector:\'input[type="url"][list]\'}, {role:"textbox", selector:\'input[type="url"]:not([list])\'}, {role:"", selector:\'input[type="week"]\'}], INS:[{role:"", allowed:["*"]}], KEYGEN:[{role:""}], \nLABEL:[{role:"", allowed:["presentation"]}], LI:[{role:"listitem", allowed:"menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(" "), selector:\'ol:not([role="presentation"])>li, ul:not([role="presentation"])>li\'}, {role:"listitem", allowed:"listitem menuitem menuitemcheckbox menuitemradio option tab treeitem presentation".split(" "), selector:\'ol[role="presentation"]>li, ul[role="presentation"]>li\'}], LINK:[{role:"link", reserved:!0, selector:"link[href]"}], MAIN:[{role:"", \nallowed:["main", "presentation"]}], MAP:[{role:"", reserved:!0}], MATH:[{role:"", allowed:["presentation"]}], MENU:[{role:"toolbar", selector:\'menu[type="toolbar"]\'}], MENUITEM:[{role:"menuitem", selector:\'menuitem[type="command"]\'}, {role:"menuitemcheckbox", selector:\'menuitem[type="checkbox"]\'}, {role:"menuitemradio", selector:\'menuitem[type="radio"]\'}], META:[{role:"", reserved:!0}], METER:[{role:"progressbar", allowed:["presentation"]}], NAV:[{role:"navigation", allowed:["navigation", "presentation"]}], \nNOSCRIPT:[{role:"", reserved:!0}], OBJECT:[{role:"", allowed:["application", "document", "img", "presentation"]}], OL:[{role:"list", allowed:"directory group listbox menu menubar tablist toolbar tree presentation".split(" ")}], OPTGROUP:[{role:"", allowed:["presentation"]}], OPTION:[{role:"option"}], OUTPUT:[{role:"status", allowed:["*"]}], PARAM:[{role:"", reserved:!0}], PICTURE:[{role:"", reserved:!0}], PROGRESS:[{role:"progressbar", allowed:["presentation"]}], SCRIPT:[{role:"", reserved:!0}], \nSECTION:[{role:"region", allowed:"alert alertdialog application contentinfo dialog document log marquee search status presentation".split(" ")}], SELECT:[{role:"listbox"}], SOURCE:[{role:"", reserved:!0}], SPAN:[{role:"", allowed:["*"]}], STYLE:[{role:"", reserved:!0}], SVG:[{role:"", allowed:["application", "document", "img", "presentation"]}], SUMMARY:[{role:"", allowed:["presentation"]}], TABLE:[{role:"", allowed:["*"]}], TEMPLATE:[{role:"", reserved:!0}], TEXTAREA:[{role:"textbox"}], TBODY:[{role:"rowgroup", \nallowed:["*"]}], THEAD:[{role:"rowgroup", allowed:["*"]}], TFOOT:[{role:"rowgroup", allowed:["*"]}], TITLE:[{role:"", reserved:!0}], TD:[{role:"", allowed:["*"]}], TH:[{role:"", allowed:["*"]}], TR:[{role:"", allowed:["*"]}], TRACK:[{role:"", reserved:!0}], UL:[{role:"list", allowed:"directory group listbox menu menubar tablist toolbar tree presentation".split(" ")}], VIDEO:[{role:"", allowed:["application", "presentation"]}]};\naxs.color = {};\naxs.color.Color = function(a, b, c, d) {\n  this.red = a;\n  this.green = b;\n  this.blue = c;\n  this.alpha = d;\n};\naxs.color.YCbCr = function(a) {\n  this.luma = this.z = a[0];\n  this.Cb = this.x = a[1];\n  this.Cr = this.y = a[2];\n};\naxs.color.YCbCr.prototype = {multiply:function(a) {\n  return new axs.color.YCbCr([this.luma * a, this.Cb * a, this.Cr * a]);\n}, add:function(a) {\n  return new axs.color.YCbCr([this.luma + a.luma, this.Cb + a.Cb, this.Cr + a.Cr]);\n}, subtract:function(a) {\n  return new axs.color.YCbCr([this.luma - a.luma, this.Cb - a.Cb, this.Cr - a.Cr]);\n}};\naxs.color.calculateContrastRatio = function(a, b) {\n  1 > a.alpha && (a = axs.color.flattenColors(a, b));\n  var c = axs.color.calculateLuminance(a), d = axs.color.calculateLuminance(b);\n  return (Math.max(c, d) + .05) / (Math.min(c, d) + .05);\n};\naxs.color.calculateLuminance = function(a) {\n  return axs.color.toYCbCr(a).luma;\n};\naxs.color.luminanceRatio = function(a, b) {\n  return (Math.max(a, b) + .05) / (Math.min(a, b) + .05);\n};\naxs.color.parseColor = function(a) {\n  if ("transparent" === a) {\n    return new axs.color.Color(0, 0, 0, 0);\n  }\n  var b = a.match(/^rgb\\((\\d+), (\\d+), (\\d+)\\)$/);\n  if (b) {\n    a = parseInt(b[1], 10);\n    var c = parseInt(b[2], 10), d = parseInt(b[3], 10);\n    return new axs.color.Color(a, c, d, 1);\n  }\n  return (b = a.match(/^rgba\\((\\d+), (\\d+), (\\d+), (\\d*(\\.\\d+)?)\\)/)) ? (a = parseInt(b[1], 10), c = parseInt(b[2], 10), d = parseInt(b[3], 10), b = parseFloat(b[4]), new axs.color.Color(a, c, d, b)) : null;\n};\naxs.color.colorChannelToString = function(a) {\n  a = Math.round(a);\n  return 15 >= a ? "0" + a.toString(16) : a.toString(16);\n};\naxs.color.colorToString = function(a) {\n  return 1 == a.alpha ? "#" + axs.color.colorChannelToString(a.red) + axs.color.colorChannelToString(a.green) + axs.color.colorChannelToString(a.blue) : "rgba(" + [a.red, a.green, a.blue, a.alpha].join() + ")";\n};\naxs.color.luminanceFromContrastRatio = function(a, b, c) {\n  return c ? (a + .05) * b - .05 : (a + .05) / b - .05;\n};\naxs.color.translateColor = function(a, b) {\n  for (var c = b > a.luma ? axs.color.WHITE_YCC : axs.color.BLACK_YCC, d = c == axs.color.WHITE_YCC ? axs.color.YCC_CUBE_FACES_WHITE : axs.color.YCC_CUBE_FACES_BLACK, e = new axs.color.YCbCr([0, a.Cb, a.Cr]), f = new axs.color.YCbCr([1, a.Cb, a.Cr]), f = {a:e, b:f}, e = null, g = 0;g < d.length && !(e = axs.color.findIntersection(f, d[g]), 0 <= e.z && 1 >= e.z);g++) {\n  }\n  if (!e) {\n    throw "Couldn\'t find intersection with YCbCr color cube for Cb=" + a.Cb + ", Cr=" + a.Cr + ".";\n  }\n  if (e.x != a.x || e.y != a.y) {\n    throw "Intersection has wrong Cb/Cr values.";\n  }\n  if (Math.abs(c.luma - e.luma) < Math.abs(c.luma - b)) {\n    return c = [b, a.Cb, a.Cr], axs.color.fromYCbCrArray(c);\n  }\n  c = (b - e.luma) / (c.luma - e.luma);\n  c = [b, e.Cb - e.Cb * c, e.Cr - e.Cr * c];\n  return axs.color.fromYCbCrArray(c);\n};\naxs.color.suggestColors = function(a, b, c) {\n  var d = {}, e = axs.color.calculateLuminance(a), f = axs.color.calculateLuminance(b), g = f > e, h = axs.color.toYCbCr(b), k = axs.color.toYCbCr(a), m;\n  for (m in c) {\n    var l = c[m], n = axs.color.luminanceFromContrastRatio(e, l + .02, g);\n    if (1 >= n && 0 <= n) {\n      var p = axs.color.translateColor(h, n), l = axs.color.calculateContrastRatio(p, a), n = {};\n      n.fg = axs.color.colorToString(p);\n      n.bg = axs.color.colorToString(a);\n      n.contrast = l.toFixed(2);\n      d[m] = n;\n    } else {\n      l = axs.color.luminanceFromContrastRatio(f, l + .02, !g), 1 >= l && 0 <= l && (p = axs.color.translateColor(k, l), l = axs.color.calculateContrastRatio(b, p), n = {}, n.bg = axs.color.colorToString(p), n.fg = axs.color.colorToString(b), n.contrast = l.toFixed(2), d[m] = n);\n    }\n  }\n  return d;\n};\naxs.color.flattenColors = function(a, b) {\n  var c = a.alpha;\n  return new axs.color.Color((1 - c) * b.red + c * a.red, (1 - c) * b.green + c * a.green, (1 - c) * b.blue + c * a.blue, a.alpha + b.alpha * (1 - a.alpha));\n};\naxs.color.multiplyMatrixVector = function(a, b) {\n  var c = b[0], d = b[1], e = b[2];\n  return [a[0][0] * c + a[0][1] * d + a[0][2] * e, a[1][0] * c + a[1][1] * d + a[1][2] * e, a[2][0] * c + a[2][1] * d + a[2][2] * e];\n};\naxs.color.toYCbCr = function(a) {\n  var b = a.red / 255, c = a.green / 255;\n  a = a.blue / 255;\n  b = .03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4);\n  c = .03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4);\n  a = .03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4);\n  return new axs.color.YCbCr(axs.color.multiplyMatrixVector(axs.color.YCC_MATRIX, [b, c, a]));\n};\naxs.color.fromYCbCr = function(a) {\n  return axs.color.fromYCbCrArray([a.luma, a.Cb, a.Cr]);\n};\naxs.color.fromYCbCrArray = function(a) {\n  var b = axs.color.multiplyMatrixVector(axs.color.INVERTED_YCC_MATRIX, a), c = b[0];\n  a = b[1];\n  b = b[2];\n  c = .00303949 >= c ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055;\n  a = .00303949 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055;\n  b = .00303949 >= b ? 12.92 * b : 1.055 * Math.pow(b, 1 / 2.4) - .055;\n  c = Math.min(Math.max(Math.round(255 * c), 0), 255);\n  a = Math.min(Math.max(Math.round(255 * a), 0), 255);\n  b = Math.min(Math.max(Math.round(255 * b), 0), 255);\n  return new axs.color.Color(c, a, b, 1);\n};\naxs.color.RGBToYCbCrMatrix = function(a, b) {\n  return [[a, 1 - a - b, b], [-a / (2 - 2 * b), (a + b - 1) / (2 - 2 * b), (1 - b) / (2 - 2 * b)], [(1 - a) / (2 - 2 * a), (a + b - 1) / (2 - 2 * a), -b / (2 - 2 * a)]];\n};\naxs.color.invert3x3Matrix = function(a) {\n  var b = a[0][0], c = a[0][1], d = a[0][2], e = a[1][0], f = a[1][1], g = a[1][2], h = a[2][0], k = a[2][1];\n  a = a[2][2];\n  return axs.color.scalarMultiplyMatrix([[f * a - g * k, d * k - c * a, c * g - d * f], [g * h - e * a, b * a - d * h, d * e - b * g], [e * k - f * h, h * c - b * k, b * f - c * e]], 1 / (b * (f * a - g * k) - c * (a * e - g * h) + d * (e * k - f * h)));\n};\naxs.color.findIntersection = function(a, b) {\n  var c = [a.a.x - b.p0.x, a.a.y - b.p0.y, a.a.z - b.p0.z], d = axs.color.invert3x3Matrix([[a.a.x - a.b.x, b.p1.x - b.p0.x, b.p2.x - b.p0.x], [a.a.y - a.b.y, b.p1.y - b.p0.y, b.p2.y - b.p0.y], [a.a.z - a.b.z, b.p1.z - b.p0.z, b.p2.z - b.p0.z]]), c = axs.color.multiplyMatrixVector(d, c)[0];\n  return a.a.add(a.b.subtract(a.a).multiply(c));\n};\naxs.color.scalarMultiplyMatrix = function(a, b) {\n  for (var c = [], d = 0;3 > d;d++) {\n    c[d] = axs.color.scalarMultiplyVector(a[d], b);\n  }\n  return c;\n};\naxs.color.scalarMultiplyVector = function(a, b) {\n  for (var c = [], d = 0;d < a.length;d++) {\n    c[d] = a[d] * b;\n  }\n  return c;\n};\naxs.color.kR = .2126;\naxs.color.kB = .0722;\naxs.color.YCC_MATRIX = axs.color.RGBToYCbCrMatrix(axs.color.kR, axs.color.kB);\naxs.color.INVERTED_YCC_MATRIX = axs.color.invert3x3Matrix(axs.color.YCC_MATRIX);\naxs.color.BLACK = new axs.color.Color(0, 0, 0, 1);\naxs.color.BLACK_YCC = axs.color.toYCbCr(axs.color.BLACK);\naxs.color.WHITE = new axs.color.Color(255, 255, 255, 1);\naxs.color.WHITE_YCC = axs.color.toYCbCr(axs.color.WHITE);\naxs.color.RED = new axs.color.Color(255, 0, 0, 1);\naxs.color.RED_YCC = axs.color.toYCbCr(axs.color.RED);\naxs.color.GREEN = new axs.color.Color(0, 255, 0, 1);\naxs.color.GREEN_YCC = axs.color.toYCbCr(axs.color.GREEN);\naxs.color.BLUE = new axs.color.Color(0, 0, 255, 1);\naxs.color.BLUE_YCC = axs.color.toYCbCr(axs.color.BLUE);\naxs.color.CYAN = new axs.color.Color(0, 255, 255, 1);\naxs.color.CYAN_YCC = axs.color.toYCbCr(axs.color.CYAN);\naxs.color.MAGENTA = new axs.color.Color(255, 0, 255, 1);\naxs.color.MAGENTA_YCC = axs.color.toYCbCr(axs.color.MAGENTA);\naxs.color.YELLOW = new axs.color.Color(255, 255, 0, 1);\naxs.color.YELLOW_YCC = axs.color.toYCbCr(axs.color.YELLOW);\naxs.color.YCC_CUBE_FACES_BLACK = [{p0:axs.color.BLACK_YCC, p1:axs.color.RED_YCC, p2:axs.color.GREEN_YCC}, {p0:axs.color.BLACK_YCC, p1:axs.color.GREEN_YCC, p2:axs.color.BLUE_YCC}, {p0:axs.color.BLACK_YCC, p1:axs.color.BLUE_YCC, p2:axs.color.RED_YCC}];\naxs.color.YCC_CUBE_FACES_WHITE = [{p0:axs.color.WHITE_YCC, p1:axs.color.CYAN_YCC, p2:axs.color.MAGENTA_YCC}, {p0:axs.color.WHITE_YCC, p1:axs.color.MAGENTA_YCC, p2:axs.color.YELLOW_YCC}, {p0:axs.color.WHITE_YCC, p1:axs.color.YELLOW_YCC, p2:axs.color.CYAN_YCC}];\naxs.utils = {};\naxs.utils.FOCUSABLE_ELEMENTS_SELECTOR = "input:not([type=hidden]):not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),a[href],iframe,[tabindex]";\naxs.utils.LABELABLE_ELEMENTS_SELECTOR = "button,input:not([type=hidden]),keygen,meter,output,progress,select,textarea";\naxs.utils.parentElement = function(a) {\n  if (!a) {\n    return null;\n  }\n  if (a.nodeType == Node.DOCUMENT_FRAGMENT_NODE) {\n    return a.host;\n  }\n  var b = a.parentElement;\n  if (b) {\n    return b;\n  }\n  a = a.parentNode;\n  if (!a) {\n    return null;\n  }\n  switch(a.nodeType) {\n    case Node.ELEMENT_NODE:\n      return a;\n    case Node.DOCUMENT_FRAGMENT_NODE:\n      return a.host;\n    default:\n      return null;\n  }\n};\naxs.utils.asElement = function(a) {\n  switch(a.nodeType) {\n    case Node.COMMENT_NODE:\n      return null;\n    case Node.ELEMENT_NODE:\n      if ("script" == a.tagName.toLowerCase()) {\n        return null;\n      }\n      break;\n    case Node.TEXT_NODE:\n      a = axs.utils.parentElement(a);\n      break;\n    default:\n      return console.warn("Unhandled node type: ", a.nodeType), null;\n  }\n  return a;\n};\naxs.utils.elementIsTransparent = function(a) {\n  return "0" == a.style.opacity;\n};\naxs.utils.elementHasZeroArea = function(a) {\n  a = a.getBoundingClientRect();\n  var b = a.top - a.bottom;\n  return a.right - a.left && b ? !1 : !0;\n};\naxs.utils.elementIsOutsideScrollArea = function(a) {\n  for (var b = axs.utils.parentElement(a), c = a.ownerDocument.defaultView;b != c.document.body;) {\n    if (axs.utils.isClippedBy(a, b)) {\n      return !0;\n    }\n    if (axs.utils.canScrollTo(a, b) && !axs.utils.elementIsOutsideScrollArea(b)) {\n      return !1;\n    }\n    b = axs.utils.parentElement(b);\n  }\n  return !axs.utils.canScrollTo(a, c.document.body);\n};\naxs.utils.canScrollTo = function(a, b) {\n  var c = a.getBoundingClientRect(), d = b.getBoundingClientRect(), e = d.top, f = d.left, g = e - b.scrollTop, e = e - b.scrollTop + b.scrollHeight, h = f - b.scrollLeft + b.scrollWidth;\n  if (c.right < f - b.scrollLeft || c.bottom < g || c.left > h || c.top > e) {\n    return !1;\n  }\n  f = a.ownerDocument.defaultView;\n  g = f.getComputedStyle(b);\n  return c.left > d.right || c.top > d.bottom ? "scroll" == g.overflow || "auto" == g.overflow || b instanceof f.HTMLBodyElement : !0;\n};\naxs.utils.isClippedBy = function(a, b) {\n  var c = a.getBoundingClientRect(), d = b.getBoundingClientRect(), e = d.top - b.scrollTop, f = d.left - b.scrollLeft, g = a.ownerDocument.defaultView.getComputedStyle(b);\n  return (c.right < d.left || c.bottom < d.top || c.left > d.right || c.top > d.bottom) && "hidden" == g.overflow ? !0 : c.right < f || c.bottom < e ? "visible" != g.overflow : !1;\n};\naxs.utils.isAncestor = function(a, b) {\n  return null == b ? !1 : b === a ? !0 : axs.utils.isAncestor(a, b.parentNode);\n};\naxs.utils.overlappingElements = function(a) {\n  if (axs.utils.elementHasZeroArea(a)) {\n    return null;\n  }\n  for (var b = [], c = a.getClientRects(), d = 0;d < c.length;d++) {\n    var e = c[d], e = document.elementFromPoint((e.left + e.right) / 2, (e.top + e.bottom) / 2);\n    if (null != e && e != a && !axs.utils.isAncestor(e, a) && !axs.utils.isAncestor(a, e)) {\n      var f = window.getComputedStyle(e, null);\n      f && (f = axs.utils.getBgColor(f, e)) && 0 < f.alpha && 0 > b.indexOf(e) && b.push(e);\n    }\n  }\n  return b;\n};\naxs.utils.elementIsHtmlControl = function(a) {\n  var b = a.ownerDocument.defaultView;\n  return a instanceof b.HTMLButtonElement || a instanceof b.HTMLInputElement || a instanceof b.HTMLSelectElement || a instanceof b.HTMLTextAreaElement ? !0 : !1;\n};\naxs.utils.elementIsAriaWidget = function(a) {\n  return a.hasAttribute("role") && (a = a.getAttribute("role")) && (a = axs.constants.ARIA_ROLES[a]) && "widget" in a.allParentRolesSet ? !0 : !1;\n};\naxs.utils.elementIsVisible = function(a) {\n  return axs.utils.elementIsTransparent(a) || axs.utils.elementHasZeroArea(a) || axs.utils.elementIsOutsideScrollArea(a) || axs.utils.overlappingElements(a).length ? !1 : !0;\n};\naxs.utils.isLargeFont = function(a) {\n  var b = a.fontSize;\n  a = "bold" == a.fontWeight;\n  var c = b.match(/(\\d+)px/);\n  if (c) {\n    b = parseInt(c[1], 10);\n    if (c = window.getComputedStyle(document.body, null).fontSize.match(/(\\d+)px/)) {\n      var d = parseInt(c[1], 10), c = 1.2 * d, d = 1.5 * d\n    } else {\n      c = 19.2, d = 24;\n    }\n    return a && b >= c || b >= d;\n  }\n  if (c = b.match(/(\\d+)em/)) {\n    return b = parseInt(c[1], 10), a && 1.2 <= b || 1.5 <= b ? !0 : !1;\n  }\n  if (c = b.match(/(\\d+)%/)) {\n    return b = parseInt(c[1], 10), a && 120 <= b || 150 <= b ? !0 : !1;\n  }\n  if (c = b.match(/(\\d+)pt/)) {\n    if (b = parseInt(c[1], 10), a && 14 <= b || 18 <= b) {\n      return !0;\n    }\n  }\n  return !1;\n};\naxs.utils.getBgColor = function(a, b) {\n  var c = axs.color.parseColor(a.backgroundColor);\n  if (!c) {\n    return null;\n  }\n  1 > a.opacity && (c.alpha *= a.opacity);\n  if (1 > c.alpha) {\n    var d = axs.utils.getParentBgColor(b);\n    if (null == d) {\n      return null;\n    }\n    c = axs.color.flattenColors(c, d);\n  }\n  return c;\n};\naxs.utils.getParentBgColor = function(a) {\n  var b = a;\n  a = [];\n  for (var c = null;b = axs.utils.parentElement(b);) {\n    var d = window.getComputedStyle(b, null);\n    if (d) {\n      var e = axs.color.parseColor(d.backgroundColor);\n      if (e && (1 > d.opacity && (e.alpha *= d.opacity), 0 != e.alpha && (a.push(e), 1 == e.alpha))) {\n        c = !0;\n        break;\n      }\n    }\n  }\n  c || a.push(new axs.color.Color(255, 255, 255, 1));\n  for (b = a.pop();a.length;) {\n    c = a.pop(), b = axs.color.flattenColors(c, b);\n  }\n  return b;\n};\naxs.utils.getFgColor = function(a, b, c) {\n  var d = axs.color.parseColor(a.color);\n  if (!d) {\n    return null;\n  }\n  1 > d.alpha && (d = axs.color.flattenColors(d, c));\n  1 > a.opacity && (b = axs.utils.getParentBgColor(b), d.alpha *= a.opacity, d = axs.color.flattenColors(d, b));\n  return d;\n};\naxs.utils.getContrastRatioForElement = function(a) {\n  var b = window.getComputedStyle(a, null);\n  return axs.utils.getContrastRatioForElementWithComputedStyle(b, a);\n};\naxs.utils.getContrastRatioForElementWithComputedStyle = function(a, b) {\n  if (axs.utils.isElementHidden(b)) {\n    return null;\n  }\n  var c = axs.utils.getBgColor(a, b);\n  if (!c) {\n    return null;\n  }\n  var d = axs.utils.getFgColor(a, b, c);\n  return d ? axs.color.calculateContrastRatio(d, c) : null;\n};\naxs.utils.isNativeTextElement = function(a) {\n  var b = a.tagName.toLowerCase();\n  a = a.type ? a.type.toLowerCase() : "";\n  if ("textarea" == b) {\n    return !0;\n  }\n  if ("input" != b) {\n    return !1;\n  }\n  switch(a) {\n    case "email":\n    ;\n    case "number":\n    ;\n    case "password":\n    ;\n    case "search":\n    ;\n    case "text":\n    ;\n    case "tel":\n    ;\n    case "url":\n    ;\n    case "":\n      return !0;\n    default:\n      return !1;\n  }\n};\naxs.utils.isLowContrast = function(a, b, c) {\n  a = Math.round(10 * a) / 10;\n  return c ? 4.5 > a || !axs.utils.isLargeFont(b) && 7 > a : 3 > a || !axs.utils.isLargeFont(b) && 4.5 > a;\n};\naxs.utils.hasLabel = function(a) {\n  var b = a.tagName.toLowerCase(), c = a.type ? a.type.toLowerCase() : "";\n  if (a.hasAttribute("aria-label") || a.hasAttribute("title") || "img" == b && a.hasAttribute("alt") || "input" == b && "image" == c && a.hasAttribute("alt") || "input" == b && ("submit" == c || "reset" == c) || a.hasAttribute("aria-labelledby") || a.hasAttribute("id") && 0 < document.querySelectorAll(\'label[for="\' + a.id + \'"]\').length) {\n    return !0;\n  }\n  for (b = axs.utils.parentElement(a);b;) {\n    if ("label" == b.tagName.toLowerCase() && b.control == a) {\n      return !0;\n    }\n    b = axs.utils.parentElement(b);\n  }\n  return !1;\n};\naxs.utils.isNativelyDisableable = function(a) {\n  return a.tagName.toUpperCase() in axs.constants.NATIVELY_DISABLEABLE;\n};\naxs.utils.isElementDisabled = function(a) {\n  if (axs.browserUtils.matchSelector(a, "[aria-disabled=true], [aria-disabled=true] *")) {\n    return !0;\n  }\n  if (!axs.utils.isNativelyDisableable(a) || axs.browserUtils.matchSelector(a, "fieldset>legend:first-of-type *")) {\n    return !1;\n  }\n  for (;null !== a;a = axs.utils.parentElement(a)) {\n    if (axs.utils.isNativelyDisableable(a) && a.hasAttribute("disabled")) {\n      return !0;\n    }\n  }\n  return !1;\n};\naxs.utils.isElementHidden = function(a) {\n  if (!(a instanceof a.ownerDocument.defaultView.HTMLElement)) {\n    return !1;\n  }\n  if (a.hasAttribute("chromevoxignoreariahidden")) {\n    var b = !0\n  }\n  var c = window.getComputedStyle(a, null);\n  return "none" == c.display || "hidden" == c.visibility ? !0 : a.hasAttribute("aria-hidden") && "true" == a.getAttribute("aria-hidden").toLowerCase() ? !b : !1;\n};\naxs.utils.isElementOrAncestorHidden = function(a) {\n  return axs.utils.isElementHidden(a) ? !0 : axs.utils.parentElement(a) ? axs.utils.isElementOrAncestorHidden(axs.utils.parentElement(a)) : !1;\n};\naxs.utils.isInlineElement = function(a) {\n  a = a.tagName.toUpperCase();\n  return axs.constants.InlineElements[a];\n};\naxs.utils.getRoles = function(a, b) {\n  if (!a || a.nodeType !== Node.ELEMENT_NODE || !a.hasAttribute("role") && !b) {\n    return null;\n  }\n  var c = a.getAttribute("role");\n  !c && b && (c = axs.properties.getImplicitRole(a));\n  if (!c) {\n    return null;\n  }\n  for (var c = c.split(" "), d = {roles:[], valid:!1}, e = 0;e < c.length;e++) {\n    var f = c[e], g = axs.constants.ARIA_ROLES[f], f = {name:f};\n    g && !g.abstract ? (f.details = g, d.applied || (d.applied = f), f.valid = d.valid = !0) : f.valid = !1;\n    d.roles.push(f);\n  }\n  return d;\n};\naxs.utils.getAriaPropertyValue = function(a, b, c) {\n  var d = a.replace(/^aria-/, ""), e = axs.constants.ARIA_PROPERTIES[d], d = {name:a, rawValue:b};\n  if (!e) {\n    return d.valid = !1, d.reason = \'"\' + a + \'" is not a valid ARIA property\', d;\n  }\n  e = e.valueType;\n  if (!e) {\n    return d.valid = !1, d.reason = \'"\' + a + \'" is not a valid ARIA property\', d;\n  }\n  switch(e) {\n    case "idref":\n      a = axs.utils.isValidIDRefValue(b, c), d.valid = a.valid, d.reason = a.reason, d.idref = a.idref;\n    case "idref_list":\n      a = b.split(/\\s+/);\n      d.valid = !0;\n      for (b = 0;b < a.length;b++) {\n        e = axs.utils.isValidIDRefValue(a[b], c), e.valid || (d.valid = !1), d.values ? d.values.push(e) : d.values = [e];\n      }\n      return d;\n    case "integer":\n      c = axs.utils.isValidNumber(b);\n      if (!c.valid) {\n        return d.valid = !1, d.reason = c.reason, d;\n      }\n      Math.floor(c.value) !== c.value ? (d.valid = !1, d.reason = "" + b + " is not a whole integer") : (d.valid = !0, d.value = c.value);\n      return d;\n    case "decimal":\n    ;\n    case "number":\n      c = axs.utils.isValidNumber(b);\n      d.valid = c.valid;\n      if (!c.valid) {\n        return d.reason = c.reason, d;\n      }\n      d.value = c.value;\n      return d;\n    case "string":\n      return d.valid = !0, d.value = b, d;\n    case "token":\n      return c = axs.utils.isValidTokenValue(a, b.toLowerCase()), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n    case "token_list":\n      e = b.split(/\\s+/);\n      d.valid = !0;\n      for (b = 0;b < e.length;b++) {\n        c = axs.utils.isValidTokenValue(a, e[b].toLowerCase()), c.valid || (d.valid = !1, d.reason ? (d.reason = [d.reason], d.reason.push(c.reason)) : (d.reason = c.reason, d.possibleValues = c.possibleValues)), d.values ? d.values.push(c.value) : d.values = [c.value];\n      }\n      return d;\n    case "tristate":\n      return c = axs.utils.isPossibleValue(b.toLowerCase(), axs.constants.MIXED_VALUES, a), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n    case "boolean":\n      return c = axs.utils.isValidBoolean(b), c.valid ? (d.valid = !0, d.value = c.value) : (d.valid = !1, d.value = b, d.reason = c.reason), d;\n  }\n  d.valid = !1;\n  d.reason = "Not a valid ARIA property";\n  return d;\n};\naxs.utils.isValidTokenValue = function(a, b) {\n  var c = a.replace(/^aria-/, "");\n  return axs.utils.isPossibleValue(b, axs.constants.ARIA_PROPERTIES[c].valuesSet, a);\n};\naxs.utils.isPossibleValue = function(a, b, c) {\n  return b[a] ? {valid:!0, value:a} : {valid:!1, value:a, reason:\'"\' + a + \'" is not a valid value for \' + c, possibleValues:Object.keys(b)};\n};\naxs.utils.isValidBoolean = function(a) {\n  try {\n    var b = JSON.parse(a);\n  } catch (c) {\n    b = "";\n  }\n  return "boolean" != typeof b ? {valid:!1, value:a, reason:\'"\' + a + \'" is not a true/false value\'} : {valid:!0, value:b};\n};\naxs.utils.isValidIDRefValue = function(a, b) {\n  return 0 == a.length ? {valid:!0, idref:a} : b.ownerDocument.getElementById(a) ? {valid:!0, idref:a} : {valid:!1, idref:a, reason:\'No element with ID "\' + a + \'"\'};\n};\naxs.utils.isValidNumber = function(a) {\n  var b = {valid:!1, value:a, reason:\'"\' + a + \'" is not a number\'};\n  if (!a) {\n    return b;\n  }\n  if (/^0x/i.test(a)) {\n    return b.reason = \'"\' + a + \'" is not a decimal number\', b;\n  }\n  a *= 1;\n  return isFinite(a) ? {valid:!0, value:a} : b;\n};\naxs.utils.isElementImplicitlyFocusable = function(a) {\n  var b = a.ownerDocument.defaultView;\n  return a instanceof b.HTMLAnchorElement || a instanceof b.HTMLAreaElement ? a.hasAttribute("href") : a instanceof b.HTMLInputElement || a instanceof b.HTMLSelectElement || a instanceof b.HTMLTextAreaElement || a instanceof b.HTMLButtonElement || a instanceof b.HTMLIFrameElement ? !a.disabled : !1;\n};\naxs.utils.values = function(a) {\n  var b = [], c;\n  for (c in a) {\n    a.hasOwnProperty(c) && "function" != typeof a[c] && b.push(a[c]);\n  }\n  return b;\n};\naxs.utils.namedValues = function(a) {\n  var b = {}, c;\n  for (c in a) {\n    a.hasOwnProperty(c) && "function" != typeof a[c] && (b[c] = a[c]);\n  }\n  return b;\n};\naxs.utils.getQuerySelectorText = function(a) {\n  if (null == a || "HTML" == a.tagName) {\n    return "html";\n  }\n  if ("BODY" == a.tagName) {\n    return "body";\n  }\n  if (a.hasAttribute) {\n    if (a.id) {\n      return "#" + a.id;\n    }\n    if (a.className) {\n      for (var b = "", c = 0;c < a.classList.length;c++) {\n        b += "." + a.classList[c];\n      }\n      var d = 0;\n      if (a.parentNode) {\n        for (c = 0;c < a.parentNode.children.length;c++) {\n          var e = a.parentNode.children[c];\n          axs.browserUtils.matchSelector(e, b) && d++;\n          if (e === a) {\n            break;\n          }\n        }\n      } else {\n        d = 1;\n      }\n      if (1 == d) {\n        return axs.utils.getQuerySelectorText(a.parentNode) + " > " + b;\n      }\n    }\n    if (a.parentNode) {\n      b = a.parentNode.children;\n      d = 1;\n      for (c = 0;b[c] !== a;) {\n        b[c].tagName == a.tagName && d++, c++;\n      }\n      c = "";\n      "BODY" != a.parentNode.tagName && (c = axs.utils.getQuerySelectorText(a.parentNode) + " > ");\n      return 1 == d ? c + a.tagName : c + a.tagName + ":nth-of-type(" + d + ")";\n    }\n  } else {\n    if (a.selectorText) {\n      return a.selectorText;\n    }\n  }\n  return "";\n};\naxs.utils.getIdReferrers = function(a, b) {\n  if (!b) {\n    return null;\n  }\n  var c = b.id, d = a.replace(/^aria-/, ""), d = axs.constants.ARIA_PROPERTIES[d];\n  if (!c || !d) {\n    return null;\n  }\n  d = d.valueType;\n  return "idref_list" === d || "idref" === d ? (c = c.replace(/\'/g, "\\\\\'"), b.ownerDocument.querySelectorAll("[" + a + "~=\'" + c + "\']")) : null;\n};\naxs.utils.getIdReferents = function(a, b) {\n  var c = [], d = a.replace(/^aria-/, ""), d = axs.constants.ARIA_PROPERTIES[d];\n  if (!d || !b.hasAttribute(a)) {\n    return c;\n  }\n  d = d.valueType;\n  if ("idref_list" === d || "idref" === d) {\n    for (var d = b.ownerDocument, e = b.getAttribute(a), e = e.split(/\\s+/), f = 0, g = e.length;f < g;f++) {\n      var h = d.getElementById(e[f]);\n      h && (c[c.length] = h);\n    }\n  }\n  return c;\n};\naxs.utils.getAriaPropertiesByValueType = function(a) {\n  var b = {}, c;\n  for (c in axs.constants.ARIA_PROPERTIES) {\n    var d = axs.constants.ARIA_PROPERTIES[c];\n    d && 0 <= a.indexOf(d.valueType) && (b[c] = d);\n  }\n  return b;\n};\naxs.utils.getSelectorForAriaProperties = function(a) {\n  a = Object.keys(a).map(function(a) {\n    return "[aria-" + a + "]";\n  });\n  a.sort();\n  return a.join(",");\n};\naxs.utils.findDescendantsWithRole = function(a, b) {\n  if (!a || !b) {\n    return [];\n  }\n  var c = axs.properties.getSelectorForRole(b);\n  if (c && (c = a.querySelectorAll(c))) {\n    c = Array.prototype.map.call(c, function(a) {\n      return a;\n    });\n  } else {\n    return [];\n  }\n  return c;\n};\naxs.properties = {};\naxs.properties.TEXT_CONTENT_XPATH = \'.//text()[normalize-space(.)!=""]/parent::*[name()!="script"]\';\naxs.properties.getFocusProperties = function(a) {\n  var b = {}, c = a.getAttribute("tabindex");\n  void 0 != c ? b.tabindex = {value:c, valid:!0} : axs.utils.isElementImplicitlyFocusable(a) && (b.implicitlyFocusable = {value:!0, valid:!0});\n  if (0 == Object.keys(b).length) {\n    return null;\n  }\n  var d = axs.utils.elementIsTransparent(a), e = axs.utils.elementHasZeroArea(a), f = axs.utils.elementIsOutsideScrollArea(a), g = axs.utils.overlappingElements(a);\n  if (d || e || f || 0 < g.length) {\n    var c = axs.utils.isElementOrAncestorHidden(a), h = {value:!1, valid:c};\n    d && (h.transparent = !0);\n    e && (h.zeroArea = !0);\n    f && (h.outsideScrollArea = !0);\n    g && 0 < g.length && (h.overlappingElements = g);\n    d = {value:c, valid:c};\n    c && (d.reason = axs.properties.getHiddenReason(a));\n    h.hidden = d;\n    b.visible = h;\n  } else {\n    b.visible = {value:!0, valid:!0};\n  }\n  return b;\n};\naxs.properties.getHiddenReason = function(a) {\n  if (!(a && a instanceof a.ownerDocument.defaultView.HTMLElement)) {\n    return null;\n  }\n  if (a.hasAttribute("chromevoxignoreariahidden")) {\n    var b = !0\n  }\n  var c = window.getComputedStyle(a, null);\n  return "none" == c.display ? {property:"display: none", on:a} : "hidden" == c.visibility ? {property:"visibility: hidden", on:a} : a.hasAttribute("aria-hidden") && "true" == a.getAttribute("aria-hidden").toLowerCase() && !b ? {property:"aria-hidden", on:a} : axs.properties.getHiddenReason(axs.utils.parentElement(a));\n};\naxs.properties.getColorProperties = function(a) {\n  var b = {};\n  (a = axs.properties.getContrastRatioProperties(a)) && (b.contrastRatio = a);\n  return 0 == Object.keys(b).length ? null : b;\n};\naxs.properties.hasDirectTextDescendant = function(a) {\n  function b() {\n    for (var b = c.evaluate(axs.properties.TEXT_CONTENT_XPATH, a, null, XPathResult.ANY_TYPE, null), e = b.iterateNext();null != e;e = b.iterateNext()) {\n      if (e === a) {\n        return !0;\n      }\n    }\n    return !1;\n  }\n  var c;\n  c = a.nodeType == Node.DOCUMENT_NODE ? a : a.ownerDocument;\n  return c.evaluate ? b() : function() {\n    for (var b = c.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);b.nextNode();) {\n      var e = b.currentNode, f = e.parentNode.tagName.toLowerCase();\n      if (e.nodeValue.trim() && "script" !== f && a !== e) {\n        return !0;\n      }\n    }\n    return !1;\n  }();\n};\naxs.properties.getContrastRatioProperties = function(a) {\n  if (!axs.properties.hasDirectTextDescendant(a)) {\n    return null;\n  }\n  var b = {}, c = window.getComputedStyle(a, null), d = axs.utils.getBgColor(c, a);\n  if (!d) {\n    return null;\n  }\n  b.backgroundColor = axs.color.colorToString(d);\n  var e = axs.utils.getFgColor(c, a, d);\n  b.foregroundColor = axs.color.colorToString(e);\n  a = axs.utils.getContrastRatioForElementWithComputedStyle(c, a);\n  if (!a) {\n    return null;\n  }\n  b.value = a.toFixed(2);\n  axs.utils.isLowContrast(a, c) && (b.alert = !0);\n  var f = axs.utils.isLargeFont(c) ? 3 : 4.5, c = axs.utils.isLargeFont(c) ? 4.5 : 7, g = {};\n  f > a && (g.AA = f);\n  c > a && (g.AAA = c);\n  if (!Object.keys(g).length) {\n    return b;\n  }\n  (d = axs.color.suggestColors(d, e, g)) && Object.keys(d).length && (b.suggestedColors = d);\n  return b;\n};\naxs.properties.findTextAlternatives = function(a, b, c, d) {\n  var e = c || !1;\n  c = axs.utils.asElement(a);\n  if (!c || !e && !d && axs.utils.isElementOrAncestorHidden(c)) {\n    return null;\n  }\n  if (a.nodeType == Node.TEXT_NODE) {\n    return c = {type:"text"}, c.text = a.textContent, c.lastWord = axs.properties.getLastWord(c.text), b.content = c, a.textContent;\n  }\n  a = null;\n  e || (a = axs.properties.getTextFromAriaLabelledby(c, b));\n  c.hasAttribute("aria-label") && (d = {type:"text"}, d.text = c.getAttribute("aria-label"), d.lastWord = axs.properties.getLastWord(d.text), a ? d.unused = !0 : e && axs.utils.elementIsHtmlControl(c) || (a = d.text), b.ariaLabel = d);\n  c.hasAttribute("role") && "presentation" == c.getAttribute("role") || (a = axs.properties.getTextFromHostLanguageAttributes(c, b, a, e));\n  if (e && axs.utils.elementIsHtmlControl(c)) {\n    d = c.ownerDocument.defaultView;\n    if (c instanceof d.HTMLInputElement) {\n      var f = c;\n      "text" == f.type && f.value && 0 < f.value.length && (b.controlValue = {text:f.value});\n      "range" == f.type && (b.controlValue = {text:f.value});\n    }\n    c instanceof d.HTMLSelectElement && (b.controlValue = {text:c.value});\n    b.controlValue && (d = b.controlValue, a ? d.unused = !0 : a = d.text);\n  }\n  if (e && axs.utils.elementIsAriaWidget(c)) {\n    e = c.getAttribute("role");\n    "textbox" == e && c.textContent && 0 < c.textContent.length && (b.controlValue = {text:c.textContent});\n    if ("slider" == e || "spinbutton" == e) {\n      c.hasAttribute("aria-valuetext") ? b.controlValue = {text:c.getAttribute("aria-valuetext")} : c.hasAttribute("aria-valuenow") && (b.controlValue = {value:c.getAttribute("aria-valuenow"), text:"" + c.getAttribute("aria-valuenow")});\n    }\n    if ("menu" == e) {\n      var g = c.querySelectorAll("[role=menuitemcheckbox], [role=menuitemradio]");\n      d = [];\n      for (f = 0;f < g.length;f++) {\n        "true" == g[f].getAttribute("aria-checked") && d.push(g[f]);\n      }\n      if (0 < d.length) {\n        g = "";\n        for (f = 0;f < d.length;f++) {\n          g += axs.properties.findTextAlternatives(d[f], {}, !0), f < d.length - 1 && (g += ", ");\n        }\n        b.controlValue = {text:g};\n      }\n    }\n    if ("combobox" == e || "select" == e) {\n      b.controlValue = {text:"TODO"};\n    }\n    b.controlValue && (d = b.controlValue, a ? d.unused = !0 : a = d.text);\n  }\n  d = !0;\n  c.hasAttribute("role") && (e = c.getAttribute("role"), (e = axs.constants.ARIA_ROLES[e]) && (!e.namefrom || 0 > e.namefrom.indexOf("contents")) && (d = !1));\n  (e = axs.properties.getTextFromDescendantContent(c)) && d && (d = {type:"text"}, d.text = e, d.lastWord = axs.properties.getLastWord(d.text), a ? d.unused = !0 : a = e, b.content = d);\n  c.hasAttribute("title") && (e = {type:"string", valid:!0}, e.text = c.getAttribute("title"), e.lastWord = axs.properties.getLastWord(e.lastWord), a ? e.unused = !0 : a = e.text, b.title = e);\n  return 0 == Object.keys(b).length && null == a ? null : a;\n};\naxs.properties.getTextFromDescendantContent = function(a) {\n  var b = a.childNodes;\n  a = [];\n  for (var c = 0;c < b.length;c++) {\n    var d = axs.properties.findTextAlternatives(b[c], {}, !0);\n    d && a.push(d.trim());\n  }\n  if (a.length) {\n    b = "";\n    for (c = 0;c < a.length;c++) {\n      b = [b, a[c]].join(" ").trim();\n    }\n    return b;\n  }\n  return null;\n};\naxs.properties.getTextFromAriaLabelledby = function(a, b) {\n  var c = null;\n  if (!a.hasAttribute("aria-labelledby")) {\n    return c;\n  }\n  for (var d = a.getAttribute("aria-labelledby").split(/\\s+/), e = {valid:!0}, f = [], g = [], h = 0;h < d.length;h++) {\n    var k = {type:"element"}, m = d[h];\n    k.value = m;\n    var l = document.getElementById(m);\n    l ? (k.valid = !0, k.text = axs.properties.findTextAlternatives(l, {}, !0), k.lastWord = axs.properties.getLastWord(k.text), f.push(l.textContent.trim()), k.element = l) : (k.valid = !1, e.valid = !1, k.errorMessage = {messageKey:"noElementWithId", args:[m]});\n    g.push(k);\n  }\n  0 < g.length && (g[g.length - 1].last = !0, e.values = g, e.text = f.join(" "), e.lastWord = axs.properties.getLastWord(e.text), c = e.text, b.ariaLabelledby = e);\n  return c;\n};\naxs.properties.getTextFromHostLanguageAttributes = function(a, b, c, d) {\n  if (axs.browserUtils.matchSelector(a, "img") && a.hasAttribute("alt")) {\n    var e = {type:"string", valid:!0};\n    e.text = a.getAttribute("alt");\n    c ? e.unused = !0 : c = e.text;\n    b.alt = e;\n  }\n  if (axs.browserUtils.matchSelector(a, \'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])\') && !d) {\n    if (a.hasAttribute("id")) {\n      d = document.querySelectorAll(\'label[for="\' + a.id + \'"]\');\n      for (var e = {}, f = [], g = [], h = 0;h < d.length;h++) {\n        var k = {type:"element"}, m = d[h], l = axs.properties.findTextAlternatives(m, {}, !0);\n        l && 0 < l.trim().length && (k.text = l.trim(), g.push(l.trim()));\n        k.element = m;\n        f.push(k);\n      }\n      0 < f.length && (f[f.length - 1].last = !0, e.values = f, e.text = g.join(" "), e.lastWord = axs.properties.getLastWord(e.text), c ? e.unused = !0 : c = e.text, b.labelFor = e);\n    }\n    d = axs.utils.parentElement(a);\n    for (e = {};d;) {\n      if ("label" == d.tagName.toLowerCase() && (f = d, f.control == a)) {\n        e.type = "element";\n        e.text = axs.properties.findTextAlternatives(f, {}, !0);\n        e.lastWord = axs.properties.getLastWord(e.text);\n        e.element = f;\n        break;\n      }\n      d = axs.utils.parentElement(d);\n    }\n    e.text && (c ? e.unused = !0 : c = e.text, b.labelWrapped = e);\n    Object.keys(b).length || (b.noLabel = !0);\n  }\n  return c;\n};\naxs.properties.getLastWord = function(a) {\n  if (!a) {\n    return null;\n  }\n  var b = a.lastIndexOf(" ") + 1, c = a.length - 10;\n  return a.substring(b > c ? b : c);\n};\naxs.properties.getTextProperties = function(a) {\n  var b = {}, c = axs.properties.findTextAlternatives(a, b, !1, !0);\n  if (0 == Object.keys(b).length && ((a = axs.utils.asElement(a)) && axs.browserUtils.matchSelector(a, "img") && (b.alt = {valid:!1, errorMessage:"No alt value provided"}, a = a.src, "string" == typeof a && (c = a.split("/").pop(), b.filename = {text:c})), !c)) {\n    return null;\n  }\n  b.hasProperties = Boolean(Object.keys(b).length);\n  b.computedText = c;\n  b.lastWord = axs.properties.getLastWord(c);\n  return b;\n};\naxs.properties.getAriaProperties = function(a) {\n  var b = {}, c = axs.properties.getGlobalAriaProperties(a), d;\n  for (d in axs.constants.ARIA_PROPERTIES) {\n    var e = "aria-" + d;\n    if (a.hasAttribute(e)) {\n      var f = a.getAttribute(e);\n      c[e] = axs.utils.getAriaPropertyValue(e, f, a);\n    }\n  }\n  0 < Object.keys(c).length && (b.properties = axs.utils.values(c));\n  f = axs.utils.getRoles(a);\n  if (!f) {\n    return Object.keys(b).length ? b : null;\n  }\n  b.roles = f;\n  if (!f.valid || !f.roles) {\n    return b;\n  }\n  for (var e = f.roles, g = 0;g < e.length;g++) {\n    var h = e[g];\n    if (h.details && h.details.propertiesSet) {\n      for (d in h.details.propertiesSet) {\n        d in c || (a.hasAttribute(d) ? (f = a.getAttribute(d), c[d] = axs.utils.getAriaPropertyValue(d, f, a), "values" in c[d] && (f = c[d].values, f[f.length - 1].isLast = !0)) : h.details.requiredPropertiesSet[d] && (c[d] = {name:d, valid:!1, reason:"Required property not set"}));\n      }\n    }\n  }\n  0 < Object.keys(c).length && (b.properties = axs.utils.values(c));\n  return 0 < Object.keys(b).length ? b : null;\n};\naxs.properties.getGlobalAriaProperties = function(a) {\n  var b = {}, c;\n  for (c in axs.constants.GLOBAL_PROPERTIES) {\n    if (a.hasAttribute(c)) {\n      var d = a.getAttribute(c);\n      b[c] = axs.utils.getAriaPropertyValue(c, d, a);\n    }\n  }\n  return b;\n};\naxs.properties.getVideoProperties = function(a) {\n  if (!axs.browserUtils.matchSelector(a, "video")) {\n    return null;\n  }\n  var b = {};\n  b.captionTracks = axs.properties.getTrackElements(a, "captions");\n  b.descriptionTracks = axs.properties.getTrackElements(a, "descriptions");\n  b.chapterTracks = axs.properties.getTrackElements(a, "chapters");\n  return b;\n};\naxs.properties.getTrackElements = function(a, b) {\n  var c = a.querySelectorAll("track[kind=" + b + "]"), d = {};\n  if (!c.length) {\n    return d.valid = !1, d.reason = {messageKey:"noTracksProvided", args:[[b]]}, d;\n  }\n  d.valid = !0;\n  for (var e = [], f = 0;f < c.length;f++) {\n    var g = {}, h = c[f].getAttribute("src"), k = c[f].getAttribute("srcLang"), m = c[f].getAttribute("label");\n    h ? (g.valid = !0, g.src = h) : (g.valid = !1, g.reason = {messageKey:"noSrcProvided"});\n    h = "";\n    m && (h += m, k && (h += " "));\n    k && (h += "(" + k + ")");\n    "" == h && (h = "[[object Object]]");\n    g.name = h;\n    e.push(g);\n  }\n  d.values = e;\n  return d;\n};\naxs.properties.getAllProperties = function(a) {\n  var b = axs.utils.asElement(a);\n  if (!b) {\n    return {};\n  }\n  var c = {};\n  c.ariaProperties = axs.properties.getAriaProperties(b);\n  c.colorProperties = axs.properties.getColorProperties(b);\n  c.focusProperties = axs.properties.getFocusProperties(b);\n  c.textProperties = axs.properties.getTextProperties(a);\n  c.videoProperties = axs.properties.getVideoProperties(b);\n  return c;\n};\n(function() {\n  function a(a) {\n    if (!a) {\n      return null;\n    }\n    var c = a.tagName;\n    if (!c) {\n      return null;\n    }\n    c = c.toUpperCase();\n    c = axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[c];\n    if (!c || !c.length) {\n      return null;\n    }\n    for (var d = null, e = 0, f = c.length;e < f;e++) {\n      var g = c[e];\n      if (g.selector) {\n        if (axs.browserUtils.matchSelector(a, g.selector)) {\n          return g;\n        }\n      } else {\n        d = g;\n      }\n    }\n    return d;\n  }\n  axs.properties.getImplicitRole = function(b) {\n    return (b = a(b)) ? b.role : "";\n  };\n  axs.properties.canTakeAriaAttributes = function(b) {\n    return (b = a(b)) ? !b.reserved : !0;\n  };\n})();\naxs.properties.getNativelySupportedAttributes = function(a) {\n  var b = [];\n  if (!a) {\n    return b;\n  }\n  a = a.cloneNode(!1);\n  for (var c = Object.keys(axs.constants.ARIA_TO_HTML_ATTRIBUTE), d = 0;d < c.length;d++) {\n    var e = c[d];\n    axs.constants.ARIA_TO_HTML_ATTRIBUTE[e] in a && (b[b.length] = e);\n  }\n  return b;\n};\n(function() {\n  var a = {};\n  axs.properties.getSelectorForRole = function(b) {\n    if (!b) {\n      return "";\n    }\n    if (a[b] && a.hasOwnProperty(b)) {\n      return a[b];\n    }\n    var c = [\'[role="\' + b + \'"]\'];\n    Object.keys(axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO).forEach(function(a) {\n      var e = axs.constants.TAG_TO_IMPLICIT_SEMANTIC_INFO[a];\n      if (e && e.length) {\n        for (var f = 0;f < e.length;f++) {\n          var g = e[f];\n          if (g.role === b) {\n            if (g.selector) {\n              c[c.length] = g.selector;\n            } else {\n              c[c.length] = a;\n              break;\n            }\n          }\n        }\n      }\n    });\n    return a[b] = c.join(",");\n  };\n})();\naxs.AuditRule = function(a) {\n  for (var b = !0, c = [], d = 0;d < axs.AuditRule.requiredFields.length;d++) {\n    var e = axs.AuditRule.requiredFields[d];\n    e in a || (b = !1, c.push(e));\n  }\n  if (!b) {\n    throw "Invalid spec; the following fields were not specified: " + c.join(", ") + "\\n" + JSON.stringify(a);\n  }\n  this.name = a.name;\n  this.severity = a.severity;\n  this.relevantElementMatcher_ = a.relevantElementMatcher;\n  this.test_ = a.test;\n  this.code = a.code;\n  this.heading = a.heading || "";\n  this.url = a.url || "";\n  this.requiresConsoleAPI = !!a.opt_requiresConsoleAPI;\n};\naxs.AuditRule.requiredFields = "name severity relevantElementMatcher test code heading".split(" ");\naxs.AuditRule.NOT_APPLICABLE = {result:axs.constants.AuditResult.NA};\naxs.AuditRule.prototype.addElement = function(a, b) {\n  a.push(b);\n};\naxs.AuditRule.collectMatchingElements = function(a, b, c, d) {\n  if (a.nodeType == Node.ELEMENT_NODE) {\n    var e = a\n  }\n  e && b.call(null, e) && c.push(e);\n  if (e) {\n    var f = e.shadowRoot || e.webkitShadowRoot;\n    if (f) {\n      axs.AuditRule.collectMatchingElements(f, b, c, f);\n      return;\n    }\n  }\n  if (e && "content" == e.localName) {\n    for (var f = e.getDistributedNodes(), g = 0;g < f.length;g++) {\n      axs.AuditRule.collectMatchingElements(f[g], b, c, d);\n    }\n  } else {\n    if (e && "shadow" == e.localName) {\n      if (f = e, d) {\n        for (f = f.getDistributedNodes(), g = 0;g < f.length;g++) {\n          axs.AuditRule.collectMatchingElements(f[g], b, c, d);\n        }\n      } else {\n        console.warn("ShadowRoot not provided for", e);\n      }\n    }\n    e && "iframe" == e.localName && e.contentDocument && axs.AuditRule.collectMatchingElements(e.contentDocument, b, c, d);\n    for (a = a.firstChild;null != a;) {\n      axs.AuditRule.collectMatchingElements(a, b, c, d), a = a.nextSibling;\n    }\n  }\n};\naxs.AuditRule.prototype.run = function(a) {\n  a = a || {};\n  var b = "ignoreSelectors" in a ? a.ignoreSelectors : [], c = "maxResults" in a ? a.maxResults : null, d = [];\n  axs.AuditRule.collectMatchingElements("scope" in a ? a.scope : document, this.relevantElementMatcher_, d);\n  var e = [];\n  if (!d.length) {\n    return {result:axs.constants.AuditResult.NA};\n  }\n  for (var f = 0;f < d.length && !(null != c && e.length >= c);f++) {\n    var g = d[f], h;\n    a: {\n      h = g;\n      for (var k = 0;k < b.length;k++) {\n        if (axs.browserUtils.matchSelector(h, b[k])) {\n          h = !0;\n          break a;\n        }\n      }\n      h = !1;\n    }\n    !h && this.test_(g, a.config) && this.addElement(e, g);\n  }\n  a = {result:e.length ? axs.constants.AuditResult.FAIL : axs.constants.AuditResult.PASS, elements:e};\n  f < d.length && (a.resultsTruncated = !0);\n  return a;\n};\naxs.AuditRules = {};\n(function() {\n  var a = {}, b = {};\n  axs.AuditRules.specs = {};\n  axs.AuditRules.addRule = function(c) {\n    var d = new axs.AuditRule(c);\n    if (d.code in b) {\n      throw Error(\'Can not add audit rule with same code: "\' + d.code + \'"\');\n    }\n    if (d.name in a) {\n      throw Error(\'Can not add audit rule with same name: "\' + d.name + \'"\');\n    }\n    a[d.name] = b[d.code] = d;\n    axs.AuditRules.specs[c.name] = c;\n  };\n  axs.AuditRules.getRule = function(c) {\n    return a[c] || b[c] || null;\n  };\n  axs.AuditRules.getRules = function(b) {\n    var d = Object.keys(a);\n    return b ? d : d.map(function(a) {\n      return this.getRule(a);\n    }, axs.AuditRules);\n  };\n})();\naxs.AuditResults = function() {\n  this.errors_ = [];\n  this.warnings_ = [];\n};\ngoog.exportSymbol("axs.AuditResults", axs.AuditResults);\naxs.AuditResults.prototype.addError = function(a) {\n  "" != a && this.errors_.push(a);\n};\ngoog.exportProperty(axs.AuditResults.prototype, "addError", axs.AuditResults.prototype.addError);\naxs.AuditResults.prototype.addWarning = function(a) {\n  "" != a && this.warnings_.push(a);\n};\ngoog.exportProperty(axs.AuditResults.prototype, "addWarning", axs.AuditResults.prototype.addWarning);\naxs.AuditResults.prototype.numErrors = function() {\n  return this.errors_.length;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "numErrors", axs.AuditResults.prototype.numErrors);\naxs.AuditResults.prototype.numWarnings = function() {\n  return this.warnings_.length;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "numWarnings", axs.AuditResults.prototype.numWarnings);\naxs.AuditResults.prototype.getErrors = function() {\n  return this.errors_;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "getErrors", axs.AuditResults.prototype.getErrors);\naxs.AuditResults.prototype.getWarnings = function() {\n  return this.warnings_;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "getWarnings", axs.AuditResults.prototype.getWarnings);\naxs.AuditResults.prototype.toString = function() {\n  for (var a = "", b = 0;b < this.errors_.length;b++) {\n    0 == b && (a += "\\nErrors:\\n");\n    var c = this.errors_[b], a = a + (c + "\\n\\n");\n  }\n  for (b = 0;b < this.warnings_.length;b++) {\n    0 == b && (a += "\\nWarnings:\\n"), c = this.warnings_[b], a += c + "\\n\\n";\n  }\n  return a;\n};\ngoog.exportProperty(axs.AuditResults.prototype, "toString", axs.AuditResults.prototype.toString);\naxs.Audit = {};\naxs.AuditConfiguration = function(a) {\n  null == a && (a = {});\n  this.rules_ = {};\n  this.maxResults = this.auditRulesToIgnore = this.auditRulesToRun = this.scope = null;\n  this.withConsoleApi = !1;\n  this.showUnsupportedRulesWarning = !0;\n  for (var b in this) {\n    this.hasOwnProperty(b) && b in a && (this[b] = a[b]);\n  }\n  goog.exportProperty(this, "scope", this.scope);\n  goog.exportProperty(this, "auditRulesToRun", this.auditRulesToRun);\n  goog.exportProperty(this, "auditRulesToIgnore", this.auditRulesToIgnore);\n  goog.exportProperty(this, "withConsoleApi", this.withConsoleApi);\n  goog.exportProperty(this, "showUnsupportedRulesWarning", this.showUnsupportedRulesWarning);\n};\ngoog.exportSymbol("axs.AuditConfiguration", axs.AuditConfiguration);\naxs.AuditConfiguration.prototype = {ignoreSelectors:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  "ignore" in this.rules_[a] || (this.rules_[a].ignore = []);\n  Array.prototype.push.call(this.rules_[a].ignore, b);\n}, getIgnoreSelectors:function(a) {\n  return a in this.rules_ && "ignore" in this.rules_[a] ? this.rules_[a].ignore : [];\n}, setSeverity:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  this.rules_[a].severity = b;\n}, getSeverity:function(a) {\n  return a in this.rules_ && "severity" in this.rules_[a] ? this.rules_[a].severity : null;\n}, setRuleConfig:function(a, b) {\n  a in this.rules_ || (this.rules_[a] = {});\n  this.rules_[a].config = b;\n}, getRuleConfig:function(a) {\n  return a in this.rules_ && "config" in this.rules_[a] ? this.rules_[a].config : null;\n}};\ngoog.exportProperty(axs.AuditConfiguration.prototype, "ignoreSelectors", axs.AuditConfiguration.prototype.ignoreSelectors);\ngoog.exportProperty(axs.AuditConfiguration.prototype, "getIgnoreSelectors", axs.AuditConfiguration.prototype.getIgnoreSelectors);\naxs.Audit.unsupportedRulesWarningShown = !1;\naxs.Audit.getRulesCannotRun = function(a) {\n  return a.withConsoleApi ? [] : axs.AuditRules.getRules().filter(function(a) {\n    return a.requiresConsoleAPI;\n  }).map(function(a) {\n    return a.code;\n  });\n};\naxs.Audit.run = function(a) {\n  a = a || new axs.AuditConfiguration;\n  var b = a.withConsoleApi, c = [], d;\n  d = a.auditRulesToRun && 0 < a.auditRulesToRun.length ? a.auditRulesToRun : axs.AuditRules.getRules(!0);\n  if (a.auditRulesToIgnore) {\n    for (var e = 0;e < a.auditRulesToIgnore.length;e++) {\n      var f = a.auditRulesToIgnore[e];\n      0 > d.indexOf(f) || d.splice(d.indexOf(f), 1);\n    }\n  }\n  !axs.Audit.unsupportedRulesWarningShown && a.showUnsupportedRulesWarning && (e = axs.Audit.getRulesCannotRun(a), 0 < e.length && (console.warn("Some rules cannot be checked using the axs.Audit.run() method call. Use the Chrome plugin to check these rules: " + e.join(", ")), console.warn("To remove this message, pass an AuditConfiguration object to axs.Audit.run() and set configuration.showUnsupportedRulesWarning = false.")), axs.Audit.unsupportedRulesWarningShown = !0);\n  for (e = 0;e < d.length;e++) {\n    var f = d[e], g = axs.AuditRules.getRule(f);\n    if (g && !g.disabled && (b || !g.requiresConsoleAPI)) {\n      var h = {}, k = a.getIgnoreSelectors(g.name);\n      if (0 < k.length || a.scope) {\n        h.ignoreSelectors = k;\n      }\n      k = a.getRuleConfig(g.name);\n      null != k && (h.config = k);\n      a.scope && (h.scope = a.scope);\n      a.maxResults && (h.maxResults = a.maxResults);\n      h = g.run.call(g, h);\n      g = axs.utils.namedValues(g);\n      g.severity = a.getSeverity(f) || g.severity;\n      h.rule = g;\n      c.push(h);\n    }\n  }\n  return c;\n};\ngoog.exportSymbol("axs.Audit.run", axs.Audit.run);\naxs.Audit.auditResults = function(a) {\n  for (var b = new axs.AuditResults, c = 0;c < a.length;c++) {\n    var d = a[c];\n    d.result == axs.constants.AuditResult.FAIL && (d.rule.severity == axs.constants.Severity.SEVERE ? b.addError(axs.Audit.accessibilityErrorMessage(d)) : b.addWarning(axs.Audit.accessibilityErrorMessage(d)));\n  }\n  return b;\n};\ngoog.exportSymbol("axs.Audit.auditResults", axs.Audit.auditResults);\naxs.Audit.createReport = function(a, b) {\n  var c;\n  c = "*** Begin accessibility audit results ***\\nAn accessibility audit found " + axs.Audit.auditResults(a).toString();\n  b && (c += "\\nFor more information, please see ", c += b);\n  return c += "\\n*** End accessibility audit results ***";\n};\ngoog.exportSymbol("axs.Audit.createReport", axs.Audit.createReport);\naxs.Audit.accessibilityErrorMessage = function(a) {\n  for (var b = a.rule.severity == axs.constants.Severity.SEVERE ? "Error: " : "Warning: ", b = b + (a.rule.code + " (" + a.rule.heading + ") failed on the following " + (1 == a.elements.length ? "element" : "elements")), b = 1 == a.elements.length ? b + ":" : b + (" (1 - " + Math.min(5, a.elements.length) + " of " + a.elements.length + "):"), c = Math.min(a.elements.length, 5), d = 0;d < c;d++) {\n    var e = a.elements[d], b = b + "\\n";\n    try {\n      b += axs.utils.getQuerySelectorText(e);\n    } catch (f) {\n      b += " tagName:" + e.tagName, b += " id:" + e.id;\n    }\n  }\n  "" != a.rule.url && (b += "\\nSee " + a.rule.url + " for more information.");\n  return b;\n};\ngoog.exportSymbol("axs.Audit.accessibilityErrorMessage", axs.Audit.accessibilityErrorMessage);\naxs.AuditRules.addRule({name:"ariaOnReservedElement", heading:"This element does not support ARIA roles, states and properties", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_12", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return !axs.properties.canTakeAriaAttributes(a);\n}, test:function(a) {\n  return null !== axs.properties.getAriaProperties(a);\n}, code:"AX_ARIA_12"});\naxs.AuditRules.addRule({name:"ariaOwnsDescendant", heading:"aria-owns should not be used if ownership is implicit in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_06", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[aria-owns]");\n}, test:function(a) {\n  return axs.utils.getIdReferents("aria-owns", a).some(function(b) {\n    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_CONTAINED_BY;\n  });\n}, code:"AX_ARIA_06"});\naxs.AuditRules.addRule({name:"ariaRoleNotScoped", heading:"Elements with ARIA roles must be in the correct scope", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_09", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  var b = axs.utils.getRoles(a);\n  if (!b || !b.applied) {\n    return !1;\n  }\n  b = b.applied.details.scope;\n  if (!b || 0 === b.length) {\n    return !1;\n  }\n  for (var c = a;c = c.parentNode;) {\n    var d = axs.utils.getRoles(c, !0);\n    if (d && d.applied && 0 <= b.indexOf(d.applied.name)) {\n      return !1;\n    }\n  }\n  if (a = axs.utils.getIdReferrers("aria-owns", a)) {\n    for (c = 0;c < a.length;c++) {\n      if ((d = axs.utils.getRoles(a[c], !0)) && d.applied && 0 <= b.indexOf(d.applied.name)) {\n        return !1;\n      }\n    }\n  }\n  return !0;\n}, code:"AX_ARIA_09"});\naxs.AuditRules.addRule({name:"audioWithoutControls", heading:"Audio elements should have controls", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_audio_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "audio[autoplay]");\n}, test:function(a) {\n  return !a.querySelectorAll("[controls]").length && 3 < a.duration;\n}, code:"AX_AUDIO_01"});\n(function() {\n  var a = /^aria\\-/;\n  axs.AuditRules.addRule({name:"badAriaAttribute", heading:"This element has an invalid ARIA attribute", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_11", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(b) {\n    b = b.attributes;\n    for (var c = 0, d = b.length;c < d;c++) {\n      if (a.test(b[c].name)) {\n        return !0;\n      }\n    }\n    return !1;\n  }, test:function(b) {\n    b = b.attributes;\n    for (var c = 0, d = b.length;c < d;c++) {\n      var e = b[c].name;\n      if (a.test(e) && (e = e.replace(a, ""), !axs.constants.ARIA_PROPERTIES.hasOwnProperty(e))) {\n        return !0;\n      }\n    }\n    return !1;\n  }, code:"AX_ARIA_11"});\n})();\naxs.AuditRules.addRule({name:"badAriaAttributeValue", heading:"ARIA state and property values must be valid", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_04", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  var b = axs.utils.getSelectorForAriaProperties(axs.constants.ARIA_PROPERTIES);\n  return axs.browserUtils.matchSelector(a, b);\n}, test:function(a) {\n  for (var b in axs.constants.ARIA_PROPERTIES) {\n    var c = "aria-" + b;\n    if (a.hasAttribute(c)) {\n      var d = a.getAttribute(c);\n      if (!axs.utils.getAriaPropertyValue(c, d, a).valid) {\n        return !0;\n      }\n    }\n  }\n  return !1;\n}, code:"AX_ARIA_04"});\naxs.AuditRules.addRule({name:"badAriaRole", heading:"Elements with ARIA roles must use a valid, non-abstract ARIA role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  return !axs.utils.getRoles(a).valid;\n}, code:"AX_ARIA_01"});\naxs.AuditRules.addRule({name:"controlsWithoutLabel", heading:"Controls and media elements should have labels", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_01", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  if (!axs.browserUtils.matchSelector(a, \'input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), video:not([disabled])\') || "presentation" == a.getAttribute("role")) {\n    return !1;\n  }\n  if (0 <= a.tabIndex) {\n    return !0;\n  }\n  for (a = axs.utils.parentElement(a);null != a;a = axs.utils.parentElement(a)) {\n    if (axs.utils.elementIsAriaWidget(a)) {\n      return !1;\n    }\n  }\n  return !0;\n}, test:function(a) {\n  if (axs.utils.isElementOrAncestorHidden(a) || "input" == a.tagName.toLowerCase() && "button" == a.type && a.value.length || "button" == a.tagName.toLowerCase() && a.textContent.replace(/^\\s+|\\s+$/g, "").length || axs.utils.hasLabel(a)) {\n    return !1;\n  }\n  a = axs.properties.findTextAlternatives(a, {});\n  return null === a || "" === a.trim() ? !0 : !1;\n}, code:"AX_TEXT_01", ruleName:"Controls and media elements should have labels"});\naxs.AuditRules.addRule({name:"duplicateId", heading:"An element\'s ID must be unique in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_02", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[id]");\n}, test:function(a) {\n  var b = a.id;\n  if (!b) {\n    return !1;\n  }\n  b = "[id=\'" + b.replace(/\'/g, "\\\\\'") + "\']";\n  return 1 < a.ownerDocument.querySelectorAll(b).length;\n}, code:"AX_HTML_02"});\naxs.AuditRules.addRule({name:"focusableElementNotVisibleAndNotAriaHidden", heading:"These elements are focusable but either invisible or obscured by another element", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  if (!axs.browserUtils.matchSelector(a, axs.utils.FOCUSABLE_ELEMENTS_SELECTOR)) {\n    return !1;\n  }\n  if (0 <= a.tabIndex) {\n    return !0;\n  }\n  for (var b = axs.utils.parentElement(a);null != b;b = axs.utils.parentElement(b)) {\n    if (axs.utils.elementIsAriaWidget(b)) {\n      return !1;\n    }\n  }\n  a = axs.properties.findTextAlternatives(a, {});\n  return null === a || "" === a.trim() ? !1 : !0;\n}, test:function(a) {\n  if (axs.utils.isElementOrAncestorHidden(a)) {\n    return !1;\n  }\n  a.focus();\n  return !axs.utils.elementIsVisible(a);\n}, code:"AX_FOCUS_01"});\naxs.AuditRules.addRule({name:"humanLangMissing", heading:"The web page should have the content\'s human language indicated in the markup", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_html_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return a instanceof a.ownerDocument.defaultView.HTMLHtmlElement;\n}, test:function(a) {\n  return a.lang ? !1 : !0;\n}, code:"AX_HTML_01"});\naxs.AuditRules.addRule({name:"imagesWithoutAltText", heading:"Images should have a text alternative or presentational role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_02", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "img") && !axs.utils.isElementOrAncestorHidden(a);\n}, test:function(a) {\n  if (a.hasAttribute("alt") && "" == a.alt || "presentation" == a.getAttribute("role")) {\n    return !1;\n  }\n  var b = {};\n  axs.properties.findTextAlternatives(a, b);\n  return 0 == Object.keys(b).length ? !0 : !1;\n}, code:"AX_TEXT_02"});\naxs.AuditRules.addRule({name:"linkWithUnclearPurpose", heading:"The purpose of each link should be clear from the link text", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_text_04", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "a") && !axs.utils.isElementOrAncestorHidden(a);\n}, test:function(a, b) {\n  for (var c = b || {}, d = c.blacklistPhrases || [], e = /\\s+/, f = 0;f < d.length;f++) {\n    var g = "^\\\\s*" + d[f].trim().replace(e, "\\\\s*") + "s*[^a-z]$";\n    if ((new RegExp(g, "i")).test(a.textContent)) {\n      return !0;\n    }\n  }\n  c = c.stopwords || "click tap go here learn more this page link about".split(" ");\n  d = axs.properties.findTextAlternatives(a, {});\n  if (null === d || "" === d.trim()) {\n    return !0;\n  }\n  d = d.replace(/[^a-zA-Z ]/g, "");\n  for (f = 0;f < c.length;f++) {\n    if (d = d.replace(new RegExp("\\\\b" + c[f] + "\\\\b", "ig"), ""), "" == d.trim()) {\n      return !0;\n    }\n  }\n  return !1;\n}, code:"AX_TEXT_04"});\naxs.AuditRules.addRule({name:"lowContrastElements", heading:"Text elements should have a reasonable contrast ratio", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_color_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.properties.hasDirectTextDescendant(a) && !axs.utils.isElementDisabled(a);\n}, test:function(a) {\n  var b = window.getComputedStyle(a, null);\n  return (a = axs.utils.getContrastRatioForElementWithComputedStyle(b, a)) && axs.utils.isLowContrast(a, b);\n}, code:"AX_COLOR_01"});\naxs.AuditRules.addRule({name:"mainRoleOnInappropriateElement", heading:"role=main should only appear on significant elements", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_05", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role~=main]");\n}, test:function(a) {\n  if (axs.utils.isInlineElement(a)) {\n    return !0;\n  }\n  a = axs.properties.getTextFromDescendantContent(a);\n  return !a || 50 > a.length ? !0 : !1;\n}, code:"AX_ARIA_05"});\naxs.AuditRules.addRule({name:"elementsWithMeaningfulBackgroundImage", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return !axs.utils.isElementOrAncestorHidden(a);\n}, heading:"Meaningful images should not be used in element backgrounds", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_image_01", test:function(a) {\n  if (a.textContent && 0 < a.textContent.length) {\n    return !1;\n  }\n  a = window.getComputedStyle(a, null);\n  var b = a.backgroundImage;\n  if (!b || "undefined" === b || "none" === b || 0 != b.indexOf("url")) {\n    return !1;\n  }\n  b = parseInt(a.width, 10);\n  a = parseInt(a.height, 10);\n  return 150 > b && 150 > a;\n}, code:"AX_IMAGE_01"});\naxs.AuditRules.addRule({name:"multipleAriaOwners", heading:"An element\'s ID must not be present in more that one aria-owns attribute at any time", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_07", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[aria-owns]");\n}, test:function(a) {\n  return axs.utils.getIdReferents("aria-owns", a).some(function(a) {\n    return 1 < axs.utils.getIdReferrers("aria-owns", a).length;\n  });\n}, code:"AX_ARIA_07"});\naxs.AuditRules.addRule({name:"multipleLabelableElementsPerLabel", heading:"A label element may not have labelable descendants other than its labeled control.", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#-ax_text_03--labels-should-only-contain-one-labelable-element", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "label");\n}, test:function(a) {\n  if (1 < a.querySelectorAll(axs.utils.LABELABLE_ELEMENTS_SELECTOR).length) {\n    return !0;\n  }\n}, code:"AX_TEXT_03"});\naxs.AuditRules.addRule({name:"nonExistentAriaRelatedElement", heading:"ARIA attributes which refer to other elements by ID should refer to elements which exist in the DOM", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_02", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  var b = axs.utils.getAriaPropertiesByValueType(["idref", "idref_list"]), b = axs.utils.getSelectorForAriaProperties(b);\n  return axs.browserUtils.matchSelector(a, b);\n}, test:function(a) {\n  for (var b = axs.utils.getAriaPropertiesByValueType(["idref", "idref_list"]), b = axs.utils.getSelectorForAriaProperties(b).split(","), c = 0, d = b.length;c < d;c++) {\n    var e = b[c];\n    if (axs.browserUtils.matchSelector(a, e)) {\n      var e = e.match(/aria-[^\\]]+/)[0], f = a.getAttribute(e);\n      if (!axs.utils.getAriaPropertyValue(e, f, a).valid) {\n        return !0;\n      }\n    }\n  }\n  return !1;\n}, code:"AX_ARIA_02"});\naxs.AuditRules.addRule({name:"pageWithoutTitle", heading:"The web page should have a title that describes topic or purpose", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_title_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return "html" == a.tagName.toLowerCase();\n}, test:function(a) {\n  a = a.querySelector("head");\n  return a ? (a = a.querySelector("title")) ? !a.textContent : !0 : !0;\n}, code:"AX_TITLE_01"});\naxs.AuditRules.addRule({name:"requiredAriaAttributeMissing", heading:"Elements with ARIA roles must have all required attributes for that role", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_03", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[role]");\n}, test:function(a) {\n  var b = axs.utils.getRoles(a);\n  if (!b.valid) {\n    return !1;\n  }\n  for (var c = 0;c < b.roles.length;c++) {\n    var d = b.roles[c].details.requiredPropertiesSet, e;\n    for (e in d) {\n      if (d = e.replace(/^aria-/, ""), !("defaultValue" in axs.constants.ARIA_PROPERTIES[d] || a.hasAttribute(e)) && 0 > axs.properties.getNativelySupportedAttributes(a).indexOf(e)) {\n        return !0;\n      }\n    }\n  }\n}, code:"AX_ARIA_03"});\n(function() {\n  function a(a) {\n    a = axs.utils.getRoles(a);\n    if (!a || !a.applied) {\n      return [];\n    }\n    a = a.applied;\n    return a.valid ? a.details.mustcontain || [] : [];\n  }\n  axs.AuditRules.addRule({name:"requiredOwnedAriaRoleMissing", heading:"Elements with ARIA roles must ensure required owned elements are present", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_08", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(b) {\n    return axs.browserUtils.matchSelector(b, "[role]") ? 0 < a(b).length : !1;\n  }, test:function(b) {\n    if ("true" === b.getAttribute("aria-busy")) {\n      return !1;\n    }\n    for (var c = a(b), d = c.length - 1;0 <= d;d--) {\n      var e = axs.utils.findDescendantsWithRole(b, c[d]);\n      if (e && e.length) {\n        return !1;\n      }\n    }\n    b = axs.utils.getIdReferents("aria-owns", b);\n    for (d = b.length - 1;0 <= d;d--) {\n      if ((e = axs.utils.getRoles(b[d], !0)) && e.applied) {\n        for (var e = e.applied, f = c.length - 1;0 <= f;f--) {\n          if (e.name === c[f]) {\n            return !1;\n          }\n        }\n      }\n    }\n    return !0;\n  }, code:"AX_ARIA_08"});\n})();\naxs.AuditRules.addRule({name:"tabIndexGreaterThanZero", heading:"Avoid positive integer values for tabIndex", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_03", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "[tabindex]");\n}, test:function(a) {\n  if (0 < a.tabIndex) {\n    return !0;\n  }\n}, code:"AX_FOCUS_03"});\naxs.AuditRules.addRule({name:"unfocusableElementsWithOnClick", heading:"Elements with onclick handlers must be focusable", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_focus_02", severity:axs.constants.Severity.WARNING, opt_requiresConsoleAPI:!0, relevantElementMatcher:function(a) {\n  return a instanceof a.ownerDocument.defaultView.HTMLBodyElement || axs.utils.isElementOrAncestorHidden(a) ? !1 : "click" in getEventListeners(a) ? !0 : !1;\n}, test:function(a) {\n  return !a.hasAttribute("tabindex") && !axs.utils.isElementImplicitlyFocusable(a) && !a.disabled;\n}, code:"AX_FOCUS_02"});\n(function() {\n  var a = /^aria\\-/, b = axs.utils.getSelectorForAriaProperties(axs.constants.ARIA_PROPERTIES);\n  axs.AuditRules.addRule({name:"unsupportedAriaAttribute", heading:"This element has an unsupported ARIA attribute", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_aria_10", severity:axs.constants.Severity.SEVERE, relevantElementMatcher:function(a) {\n    return axs.browserUtils.matchSelector(a, b);\n  }, test:function(b) {\n    var d = axs.utils.getRoles(b, !0), d = d && d.applied ? d.applied.details.propertiesSet : axs.constants.GLOBAL_PROPERTIES;\n    b = b.attributes;\n    for (var e = 0, f = b.length;e < f;e++) {\n      var g = b[e].name;\n      if (a.test(g)) {\n        var h = g.replace(a, "");\n        if (axs.constants.ARIA_PROPERTIES.hasOwnProperty(h) && !(g in d)) {\n          return !0;\n        }\n      }\n    }\n    return !1;\n  }, code:"AX_ARIA_10"});\n})();\naxs.AuditRules.addRule({name:"videoWithoutCaptions", heading:"Video elements should use <track> elements to provide captions", url:"https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#ax_video_01", severity:axs.constants.Severity.WARNING, relevantElementMatcher:function(a) {\n  return axs.browserUtils.matchSelector(a, "video");\n}, test:function(a) {\n  return !a.querySelectorAll("track[kind=captions]").length;\n}, code:"AX_VIDEO_01"});\n\n  return axs;\n});\n\n// Define AMD module if possible, export globals otherwise.\nif (typeof define !== \'undefined\' && define.amd) {\n  define([], fn);\n} else {\n  var axs = fn.call(this);\n}\n\n';
}, function (e, t, n) {
	var r = n(22);"string" == typeof r && (r = [[e.id, r, ""]]);n(7)(r, {});
}, function (e, t, n) {
	var r = n(23);"string" == typeof r && (r = [[e.id, r, ""]]);n(7)(r, {});
}, function (e, t, n) {
	var r = n(24);"string" == typeof r && (r = [[e.id, r, ""]]);n(7)(r, {});
}, function (e, t, n) {
	var r = n(25);"string" == typeof r && (r = [[e.id, r, ""]]);n(7)(r, {});
}, function (e, t, n) {
	var r = n(26);"string" == typeof r && (r = [[e.id, r, ""]]);n(7)(r, {});
}, function (e, t, n) {
	var r = n(27);"string" == typeof r && (r = [[e.id, r, ""]]);n(7)(r, {});
}, function (e, t, n) {
	var r = n(28);"string" == typeof r && (r = [[e.id, r, ""]]);n(7)(r, {});
}]);
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
