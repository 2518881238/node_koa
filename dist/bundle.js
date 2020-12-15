/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var __webpack_modules__ = {
    9078: (e, t, n) => {
      "use strict";
      var i = n(159), a = n(983);

      function s(e) {
        if (!(this instanceof s)) return new s(e);
        this.headers = e.headers, this.negotiator = new i(e)
      }

      function o(e) {
        return -1 === e.indexOf("/") ? a.lookup(e) : e
      }

      function r(e) {
        return "string" == typeof e
      }

      e.exports = s, s.prototype.type = s.prototype.types = function (e) {
        var t = e;
        if (t && !Array.isArray(t)) {
          t = new Array(arguments.length);
          for (var n = 0; n < t.length; n++) t[n] = arguments[n]
        }
        if (!t || 0 === t.length) return this.negotiator.mediaTypes();
        if (!this.headers.accept) return t[0];
        var i = t.map(o), a = this.negotiator.mediaTypes(i.filter(r)), s = a[0];
        return !!s && t[i.indexOf(s)]
      }, s.prototype.encoding = s.prototype.encodings = function (e) {
        var t = e;
        if (t && !Array.isArray(t)) {
          t = new Array(arguments.length);
          for (var n = 0; n < t.length; n++) t[n] = arguments[n]
        }
        return t && 0 !== t.length ? this.negotiator.encodings(t)[0] || !1 : this.negotiator.encodings()
      }, s.prototype.charset = s.prototype.charsets = function (e) {
        var t = e;
        if (t && !Array.isArray(t)) {
          t = new Array(arguments.length);
          for (var n = 0; n < t.length; n++) t[n] = arguments[n]
        }
        return t && 0 !== t.length ? this.negotiator.charsets(t)[0] || !1 : this.negotiator.charsets()
      }, s.prototype.lang = s.prototype.langs = s.prototype.language = s.prototype.languages = function (e) {
        var t = e;
        if (t && !Array.isArray(t)) {
          t = new Array(arguments.length);
          for (var n = 0; n < t.length; n++) t[n] = arguments[n]
        }
        return t && 0 !== t.length ? this.negotiator.languages(t)[0] || !1 : this.negotiator.languages()
      }
    }, 5845: (e, t, n) => {
      e.exports = n(891)().Promise
    }, 8922: e => {
      "use strict";
      var t = "@@any-promise/REGISTRATION", n = null;
      e.exports = function (e, i) {
        return function (a, s) {
          a = a || null;
          var o = !1 !== (s = s || {}).global;
          if (null === n && o && (n = e[t] || null), null !== n && null !== a && n.implementation !== a) throw new Error('any-promise already defined as "' + n.implementation + '".  You can only register an implementation before the first  call to require("any-promise") and an implementation cannot be changed');
          return null === n && (n = null !== a && void 0 !== s.Promise ? {
            Promise: s.Promise,
            implementation: a
          } : i(a), o && (e[t] = n)), n
        }
      }
    }, 891: (e, t, n) => {
      "use strict";
      e.exports = n(8922)(global, (function e(t) {
        var i = null;
        if (function (e) {
          if (e) return "global.Promise" === e;
          if (void 0 !== global.Promise) {
            var t = /v(\d+)\.(\d+)\.(\d+)/.exec(process.version);
            return !(t && 0 == +t[1] && +t[2] < 12)
          }
          return !1
        }(t)) i = {Promise: global.Promise, implementation: "global.Promise"}; else if (t) {
          var a = n(2219)(t);
          i = {Promise: a.Promise || a, implementation: t}
        } else i = function () {
          for (var t = ["es6-promise", "promise", "native-promise-only", "bluebird", "rsvp", "when", "q", "pinkie", "lie", "vow"], n = 0, i = t.length; n < i; n++) try {
            return e(t[n])
          } catch (e) {
          }
          return null
        }();
        if (null === i) throw new Error('Cannot find any-promise implementation nor global.Promise. You must install polyfill or call require("any-promise/register") with your preferred implementation, e.g. require("any-promise/register/bluebird") on application load prior to any require("any-promise").');
        return i
      }))
    }, 2219: e => {
      function t(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }

      t.keys = () => [], t.resolve = t, t.id = 2219, e.exports = t
    }, 905: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {BigNumber: () => h, default: () => I});
      var i = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, a = Math.ceil, s = Math.floor, o = "[BigNumber Error] ",
        r = o + "Number primitive has more than 15 significant digits: ", c = 1e14, _ = 14, E = 9007199254740991,
        p = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], u = 1e7, l = 1e9;

      function R(e) {
        var t = 0 | e;
        return e > 0 || e === t ? t : t - 1
      }

      function A(e) {
        for (var t, n, i = 1, a = e.length, s = e[0] + ""; i < a;) {
          for (t = e[i++] + "", n = _ - t.length; n--; t = "0" + t) ;
          s += t
        }
        for (a = s.length; 48 === s.charCodeAt(--a);) ;
        return s.slice(0, a + 1 || 1)
      }

      function d(e, t) {
        var n, i, a = e.c, s = t.c, o = e.s, r = t.s, c = e.e, _ = t.e;
        if (!o || !r) return null;
        if (n = a && !a[0], i = s && !s[0], n || i) return n ? i ? 0 : -r : o;
        if (o != r) return o;
        if (n = o < 0, i = c == _, !a || !s) return i ? 0 : !a ^ n ? 1 : -1;
        if (!i) return c > _ ^ n ? 1 : -1;
        for (r = (c = a.length) < (_ = s.length) ? c : _, o = 0; o < r; o++) if (a[o] != s[o]) return a[o] > s[o] ^ n ? 1 : -1;
        return c == _ ? 0 : c > _ ^ n ? 1 : -1
      }

      function N(e, t, n, i) {
        if (e < t || e > n || e !== s(e)) throw Error(o + (i || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
      }

      function T(e) {
        var t = e.c.length - 1;
        return R(e.e / _) == t && e.c[t] % 2 != 0
      }

      function f(e, t) {
        return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
      }

      function m(e, t, n) {
        var i, a;
        if (t < 0) {
          for (a = n + "."; ++t; a += n) ;
          e = a + e
        } else if (++t > (i = e.length)) {
          for (a = n, t -= i; --t; a += n) ;
          e += a
        } else t < i && (e = e.slice(0, t) + "." + e.slice(t));
        return e
      }

      var h = function e(t) {
        var n, h, I, O, C, g, S, D, x, v, L = H.prototype = {constructor: H, toString: null, valueOf: null},
          b = new H(1), U = 20, B = 4, M = -7, w = 21, G = -1e7, F = 1e7, y = !1, P = 1, V = 0, Q = {
            prefix: "",
            groupSize: 3,
            secondaryGroupSize: 0,
            groupSeparator: ",",
            decimalSeparator: ".",
            fractionGroupSize: 0,
            fractionGroupSeparator: " ",
            suffix: ""
          }, k = "0123456789abcdefghijklmnopqrstuvwxyz";

        function H(e, t) {
          var n, a, o, c, p, u, l, R, A = this;
          if (!(A instanceof H)) return new H(e, t);
          if (null == t) {
            if (e && !0 === e._isBigNumber) return A.s = e.s, void (!e.c || e.e > F ? A.c = A.e = null : e.e < G ? A.c = [A.e = 0] : (A.e = e.e, A.c = e.c.slice()));
            if ((u = "number" == typeof e) && 0 * e == 0) {
              if (A.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                for (c = 0, p = e; p >= 10; p /= 10, c++) ;
                return void (c > F ? A.c = A.e = null : (A.e = c, A.c = [e]))
              }
              R = String(e)
            } else {
              if (!i.test(R = String(e))) return I(A, R, u);
              A.s = 45 == R.charCodeAt(0) ? (R = R.slice(1), -1) : 1
            }
            (c = R.indexOf(".")) > -1 && (R = R.replace(".", "")), (p = R.search(/e/i)) > 0 ? (c < 0 && (c = p), c += +R.slice(p + 1), R = R.substring(0, p)) : c < 0 && (c = R.length)
          } else {
            if (N(t, 2, k.length, "Base"), 10 == t) return K(A = new H(e), U + A.e + 1, B);
            if (R = String(e), u = "number" == typeof e) {
              if (0 * e != 0) return I(A, R, u, t);
              if (A.s = 1 / e < 0 ? (R = R.slice(1), -1) : 1, H.DEBUG && R.replace(/^0\.0*|\./, "").length > 15) throw Error(r + e)
            } else A.s = 45 === R.charCodeAt(0) ? (R = R.slice(1), -1) : 1;
            for (n = k.slice(0, t), c = p = 0, l = R.length; p < l; p++) if (n.indexOf(a = R.charAt(p)) < 0) {
              if ("." == a) {
                if (p > c) {
                  c = l;
                  continue
                }
              } else if (!o && (R == R.toUpperCase() && (R = R.toLowerCase()) || R == R.toLowerCase() && (R = R.toUpperCase()))) {
                o = !0, p = -1, c = 0;
                continue
              }
              return I(A, String(e), u, t)
            }
            u = !1, (c = (R = h(R, t, 10, A.s)).indexOf(".")) > -1 ? R = R.replace(".", "") : c = R.length
          }
          for (p = 0; 48 === R.charCodeAt(p); p++) ;
          for (l = R.length; 48 === R.charCodeAt(--l);) ;
          if (R = R.slice(p, ++l)) {
            if (l -= p, u && H.DEBUG && l > 15 && (e > E || e !== s(e))) throw Error(r + A.s * e);
            if ((c = c - p - 1) > F) A.c = A.e = null; else if (c < G) A.c = [A.e = 0]; else {
              if (A.e = c, A.c = [], p = (c + 1) % _, c < 0 && (p += _), p < l) {
                for (p && A.c.push(+R.slice(0, p)), l -= _; p < l;) A.c.push(+R.slice(p, p += _));
                p = _ - (R = R.slice(p)).length
              } else p -= l;
              for (; p--; R += "0") ;
              A.c.push(+R)
            }
          } else A.c = [A.e = 0]
        }

        function W(e, t, n, i) {
          var a, s, o, r, c;
          if (null == n ? n = B : N(n, 0, 8), !e.c) return e.toString();
          if (a = e.c[0], o = e.e, null == t) c = A(e.c), c = 1 == i || 2 == i && (o <= M || o >= w) ? f(c, o) : m(c, o, "0"); else if (s = (e = K(new H(e), t, n)).e, r = (c = A(e.c)).length, 1 == i || 2 == i && (t <= s || s <= M)) {
            for (; r < t; c += "0", r++) ;
            c = f(c, s)
          } else if (t -= o, c = m(c, s, "0"), s + 1 > r) {
            if (--t > 0) for (c += "."; t--; c += "0") ;
          } else if ((t += s - r) > 0) for (s + 1 == r && (c += "."); t--; c += "0") ;
          return e.s < 0 && a ? "-" + c : c
        }

        function Y(e, t) {
          for (var n, i = 1, a = new H(e[0]); i < e.length; i++) {
            if (!(n = new H(e[i])).s) {
              a = n;
              break
            }
            t.call(a, n) && (a = n)
          }
          return a
        }

        function j(e, t, n) {
          for (var i = 1, a = t.length; !t[--a]; t.pop()) ;
          for (a = t[0]; a >= 10; a /= 10, i++) ;
          return (n = i + n * _ - 1) > F ? e.c = e.e = null : n < G ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
        }

        function K(e, t, n, i) {
          var o, r, E, u, l, R, A, d = e.c, N = p;
          if (d) {
            e:{
              for (o = 1, u = d[0]; u >= 10; u /= 10, o++) ;
              if ((r = t - o) < 0) r += _, E = t, A = (l = d[R = 0]) / N[o - E - 1] % 10 | 0; else if ((R = a((r + 1) / _)) >= d.length) {
                if (!i) break e;
                for (; d.length <= R; d.push(0)) ;
                l = A = 0, o = 1, E = (r %= _) - _ + 1
              } else {
                for (l = u = d[R], o = 1; u >= 10; u /= 10, o++) ;
                A = (E = (r %= _) - _ + o) < 0 ? 0 : l / N[o - E - 1] % 10 | 0
              }
              if (i = i || t < 0 || null != d[R + 1] || (E < 0 ? l : l % N[o - E - 1]), i = n < 4 ? (A || i) && (0 == n || n == (e.s < 0 ? 3 : 2)) : A > 5 || 5 == A && (4 == n || i || 6 == n && (r > 0 ? E > 0 ? l / N[o - E] : 0 : d[R - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !d[0]) return d.length = 0, i ? (t -= e.e + 1, d[0] = N[(_ - t % _) % _], e.e = -t || 0) : d[0] = e.e = 0, e;
              if (0 == r ? (d.length = R, u = 1, R--) : (d.length = R + 1, u = N[_ - r], d[R] = E > 0 ? s(l / N[o - E] % N[E]) * u : 0), i) for (; ;) {
                if (0 == R) {
                  for (r = 1, E = d[0]; E >= 10; E /= 10, r++) ;
                  for (E = d[0] += u, u = 1; E >= 10; E /= 10, u++) ;
                  r != u && (e.e++, d[0] == c && (d[0] = 1));
                  break
                }
                if (d[R] += u, d[R] != c) break;
                d[R--] = 0, u = 1
              }
              for (r = d.length; 0 === d[--r]; d.pop()) ;
            }
            e.e > F ? e.c = e.e = null : e.e < G && (e.c = [e.e = 0])
          }
          return e
        }

        function X(e) {
          var t, n = e.e;
          return null === n ? e.toString() : (t = A(e.c), t = n <= M || n >= w ? f(t, n) : m(t, n, "0"), e.s < 0 ? "-" + t : t)
        }

        return H.clone = e, H.ROUND_UP = 0, H.ROUND_DOWN = 1, H.ROUND_CEIL = 2, H.ROUND_FLOOR = 3, H.ROUND_HALF_UP = 4, H.ROUND_HALF_DOWN = 5, H.ROUND_HALF_EVEN = 6, H.ROUND_HALF_CEIL = 7, H.ROUND_HALF_FLOOR = 8, H.EUCLID = 9, H.config = H.set = function (e) {
          var t, n;
          if (null != e) {
            if ("object" != typeof e) throw Error(o + "Object expected: " + e);
            if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (N(n = e[t], 0, l, t), U = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (N(n = e[t], 0, 8, t), B = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((n = e[t]) && n.pop ? (N(n[0], -l, 0, t), N(n[1], 0, l, t), M = n[0], w = n[1]) : (N(n, -l, l, t), M = -(w = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE")) if ((n = e[t]) && n.pop) N(n[0], -l, -1, t), N(n[1], 1, l, t), G = n[0], F = n[1]; else {
              if (N(n, -l, l, t), !n) throw Error(o + t + " cannot be zero: " + n);
              G = -(F = n < 0 ? -n : n)
            }
            if (e.hasOwnProperty(t = "CRYPTO")) {
              if ((n = e[t]) !== !!n) throw Error(o + t + " not true or false: " + n);
              if (n) {
                if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw y = !n, Error(o + "crypto unavailable");
                y = n
              } else y = n
            }
            if (e.hasOwnProperty(t = "MODULO_MODE") && (N(n = e[t], 0, 9, t), P = n), e.hasOwnProperty(t = "POW_PRECISION") && (N(n = e[t], 0, l, t), V = n), e.hasOwnProperty(t = "FORMAT")) {
              if ("object" != typeof (n = e[t])) throw Error(o + t + " not an object: " + n);
              Q = n
            }
            if (e.hasOwnProperty(t = "ALPHABET")) {
              if ("string" != typeof (n = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(n)) throw Error(o + t + " invalid: " + n);
              k = n
            }
          }
          return {
            DECIMAL_PLACES: U,
            ROUNDING_MODE: B,
            EXPONENTIAL_AT: [M, w],
            RANGE: [G, F],
            CRYPTO: y,
            MODULO_MODE: P,
            POW_PRECISION: V,
            FORMAT: Q,
            ALPHABET: k
          }
        }, H.isBigNumber = function (e) {
          if (!e || !0 !== e._isBigNumber) return !1;
          if (!H.DEBUG) return !0;
          var t, n, i = e.c, a = e.e, r = e.s;
          e:if ("[object Array]" == {}.toString.call(i)) {
            if ((1 === r || -1 === r) && a >= -l && a <= l && a === s(a)) {
              if (0 === i[0]) {
                if (0 === a && 1 === i.length) return !0;
                break e
              }
              if ((t = (a + 1) % _) < 1 && (t += _), String(i[0]).length == t) {
                for (t = 0; t < i.length; t++) if ((n = i[t]) < 0 || n >= c || n !== s(n)) break e;
                if (0 !== n) return !0
              }
            }
          } else if (null === i && null === a && (null === r || 1 === r || -1 === r)) return !0;
          throw Error(o + "Invalid BigNumber: " + e)
        }, H.maximum = H.max = function () {
          return Y(arguments, L.lt)
        }, H.minimum = H.min = function () {
          return Y(arguments, L.gt)
        }, H.random = (O = 9007199254740992, C = Math.random() * O & 2097151 ? function () {
          return s(Math.random() * O)
        } : function () {
          return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
        }, function (e) {
          var t, n, i, r, c, E = 0, u = [], R = new H(b);
          if (null == e ? e = U : N(e, 0, l), r = a(e / _), y) if (crypto.getRandomValues) {
            for (t = crypto.getRandomValues(new Uint32Array(r *= 2)); E < r;) (c = 131072 * t[E] + (t[E + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)), t[E] = n[0], t[E + 1] = n[1]) : (u.push(c % 1e14), E += 2);
            E = r / 2
          } else {
            if (!crypto.randomBytes) throw y = !1, Error(o + "crypto unavailable");
            for (t = crypto.randomBytes(r *= 7); E < r;) (c = 281474976710656 * (31 & t[E]) + 1099511627776 * t[E + 1] + 4294967296 * t[E + 2] + 16777216 * t[E + 3] + (t[E + 4] << 16) + (t[E + 5] << 8) + t[E + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, E) : (u.push(c % 1e14), E += 7);
            E = r / 7
          }
          if (!y) for (; E < r;) (c = C()) < 9e15 && (u[E++] = c % 1e14);
          for (r = u[--E], e %= _, r && e && (c = p[_ - e], u[E] = s(r / c) * c); 0 === u[E]; u.pop(), E--) ;
          if (E < 0) u = [i = 0]; else {
            for (i = -1; 0 === u[0]; u.splice(0, 1), i -= _) ;
            for (E = 1, c = u[0]; c >= 10; c /= 10, E++) ;
            E < _ && (i -= _ - E)
          }
          return R.e = i, R.c = u, R
        }), H.sum = function () {
          for (var e = 1, t = arguments, n = new H(t[0]); e < t.length;) n = n.plus(t[e++]);
          return n
        }, h = function () {
          var e = "0123456789";

          function t(e, t, n, i) {
            for (var a, s, o = [0], r = 0, c = e.length; r < c;) {
              for (s = o.length; s--; o[s] *= t) ;
              for (o[0] += i.indexOf(e.charAt(r++)), a = 0; a < o.length; a++) o[a] > n - 1 && (null == o[a + 1] && (o[a + 1] = 0), o[a + 1] += o[a] / n | 0, o[a] %= n)
            }
            return o.reverse()
          }

          return function (i, a, s, o, r) {
            var c, _, E, p, u, l, R, d, N = i.indexOf("."), T = U, f = B;
            for (N >= 0 && (p = V, V = 0, i = i.replace(".", ""), l = (d = new H(a)).pow(i.length - N), V = p, d.c = t(m(A(l.c), l.e, "0"), 10, s, e), d.e = d.c.length), E = p = (R = t(i, a, s, r ? (c = k, e) : (c = e, k))).length; 0 == R[--p]; R.pop()) ;
            if (!R[0]) return c.charAt(0);
            if (N < 0 ? --E : (l.c = R, l.e = E, l.s = o, R = (l = n(l, d, T, f, s)).c, u = l.r, E = l.e), N = R[_ = E + T + 1], p = s / 2, u = u || _ < 0 || null != R[_ + 1], u = f < 4 ? (null != N || u) && (0 == f || f == (l.s < 0 ? 3 : 2)) : N > p || N == p && (4 == f || u || 6 == f && 1 & R[_ - 1] || f == (l.s < 0 ? 8 : 7)), _ < 1 || !R[0]) i = u ? m(c.charAt(1), -T, c.charAt(0)) : c.charAt(0); else {
              if (R.length = _, u) for (--s; ++R[--_] > s;) R[_] = 0, _ || (++E, R = [1].concat(R));
              for (p = R.length; !R[--p];) ;
              for (N = 0, i = ""; N <= p; i += c.charAt(R[N++])) ;
              i = m(i, E, c.charAt(0))
            }
            return i
          }
        }(), n = function () {
          function e(e, t, n) {
            var i, a, s, o, r = 0, c = e.length, _ = t % u, E = t / u | 0;
            for (e = e.slice(); c--;) r = ((a = _ * (s = e[c] % u) + (i = E * s + (o = e[c] / u | 0) * _) % u * u + r) / n | 0) + (i / u | 0) + E * o, e[c] = a % n;
            return r && (e = [r].concat(e)), e
          }

          function t(e, t, n, i) {
            var a, s;
            if (n != i) s = n > i ? 1 : -1; else for (a = s = 0; a < n; a++) if (e[a] != t[a]) {
              s = e[a] > t[a] ? 1 : -1;
              break
            }
            return s
          }

          function n(e, t, n, i) {
            for (var a = 0; n--;) e[n] -= a, a = e[n] < t[n] ? 1 : 0, e[n] = a * i + e[n] - t[n];
            for (; !e[0] && e.length > 1; e.splice(0, 1)) ;
          }

          return function (i, a, o, r, E) {
            var p, u, l, A, d, N, T, f, m, h, I, O, C, g, S, D, x, v = i.s == a.s ? 1 : -1, L = i.c, b = a.c;
            if (!(L && L[0] && b && b[0])) return new H(i.s && a.s && (L ? !b || L[0] != b[0] : b) ? L && 0 == L[0] || !b ? 0 * v : v / 0 : NaN);
            for (m = (f = new H(v)).c = [], v = o + (u = i.e - a.e) + 1, E || (E = c, u = R(i.e / _) - R(a.e / _), v = v / _ | 0), l = 0; b[l] == (L[l] || 0); l++) ;
            if (b[l] > (L[l] || 0) && u--, v < 0) m.push(1), A = !0; else {
              for (g = L.length, D = b.length, l = 0, v += 2, (d = s(E / (b[0] + 1))) > 1 && (b = e(b, d, E), L = e(L, d, E), D = b.length, g = L.length), C = D, I = (h = L.slice(0, D)).length; I < D; h[I++] = 0) ;
              x = b.slice(), x = [0].concat(x), S = b[0], b[1] >= E / 2 && S++;
              do {
                if (d = 0, (p = t(b, h, D, I)) < 0) {
                  if (O = h[0], D != I && (O = O * E + (h[1] || 0)), (d = s(O / S)) > 1) for (d >= E && (d = E - 1), T = (N = e(b, d, E)).length, I = h.length; 1 == t(N, h, T, I);) d--, n(N, D < T ? x : b, T, E), T = N.length, p = 1; else 0 == d && (p = d = 1), T = (N = b.slice()).length;
                  if (T < I && (N = [0].concat(N)), n(h, N, I, E), I = h.length, -1 == p) for (; t(b, h, D, I) < 1;) d++, n(h, D < I ? x : b, I, E), I = h.length
                } else 0 === p && (d++, h = [0]);
                m[l++] = d, h[0] ? h[I++] = L[C] || 0 : (h = [L[C]], I = 1)
              } while ((C++ < g || null != h[0]) && v--);
              A = null != h[0], m[0] || m.splice(0, 1)
            }
            if (E == c) {
              for (l = 1, v = m[0]; v >= 10; v /= 10, l++) ;
              K(f, o + (f.e = l + u * _ - 1) + 1, r, A)
            } else f.e = u, f.r = +A;
            return f
          }
        }(), g = /^(-?)0([xbo])(?=\w[\w.]*$)/i, S = /^([^.]+)\.$/, D = /^\.([^.]+)$/, x = /^-?(Infinity|NaN)$/, v = /^\s*\+(?=[\w.])|^\s+|\s+$/g, I = function (e, t, n, i) {
          var a, s = n ? t : t.replace(v, "");
          if (x.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1; else {
            if (!n && (s = s.replace(g, (function (e, t, n) {
              return a = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, i && i != a ? e : t
            })), i && (a = i, s = s.replace(S, "$1").replace(D, "0.$1")), t != s)) return new H(s, a);
            if (H.DEBUG) throw Error(o + "Not a" + (i ? " base " + i : "") + " number: " + t);
            e.s = null
          }
          e.c = e.e = null
        }, L.absoluteValue = L.abs = function () {
          var e = new H(this);
          return e.s < 0 && (e.s = 1), e
        }, L.comparedTo = function (e, t) {
          return d(this, new H(e, t))
        }, L.decimalPlaces = L.dp = function (e, t) {
          var n, i, a, s = this;
          if (null != e) return N(e, 0, l), null == t ? t = B : N(t, 0, 8), K(new H(s), e + s.e + 1, t);
          if (!(n = s.c)) return null;
          if (i = ((a = n.length - 1) - R(this.e / _)) * _, a = n[a]) for (; a % 10 == 0; a /= 10, i--) ;
          return i < 0 && (i = 0), i
        }, L.dividedBy = L.div = function (e, t) {
          return n(this, new H(e, t), U, B)
        }, L.dividedToIntegerBy = L.idiv = function (e, t) {
          return n(this, new H(e, t), 0, 1)
        }, L.exponentiatedBy = L.pow = function (e, t) {
          var n, i, r, c, E, p, u, l, R = this;
          if ((e = new H(e)).c && !e.isInteger()) throw Error(o + "Exponent not an integer: " + X(e));
          if (null != t && (t = new H(t)), E = e.e > 14, !R.c || !R.c[0] || 1 == R.c[0] && !R.e && 1 == R.c.length || !e.c || !e.c[0]) return l = new H(Math.pow(+X(R), E ? 2 - T(e) : +X(e))), t ? l.mod(t) : l;
          if (p = e.s < 0, t) {
            if (t.c ? !t.c[0] : !t.s) return new H(NaN);
            (i = !p && R.isInteger() && t.isInteger()) && (R = R.mod(t))
          } else {
            if (e.e > 9 && (R.e > 0 || R.e < -1 || (0 == R.e ? R.c[0] > 1 || E && R.c[1] >= 24e7 : R.c[0] < 8e13 || E && R.c[0] <= 9999975e7))) return c = R.s < 0 && T(e) ? -0 : 0, R.e > -1 && (c = 1 / c), new H(p ? 1 / c : c);
            V && (c = a(V / _ + 2))
          }
          for (E ? (n = new H(.5), p && (e.s = 1), u = T(e)) : u = (r = Math.abs(+X(e))) % 2, l = new H(b); ;) {
            if (u) {
              if (!(l = l.times(R)).c) break;
              c ? l.c.length > c && (l.c.length = c) : i && (l = l.mod(t))
            }
            if (r) {
              if (0 === (r = s(r / 2))) break;
              u = r % 2
            } else if (K(e = e.times(n), e.e + 1, 1), e.e > 14) u = T(e); else {
              if (0 == (r = +X(e))) break;
              u = r % 2
            }
            R = R.times(R), c ? R.c && R.c.length > c && (R.c.length = c) : i && (R = R.mod(t))
          }
          return i ? l : (p && (l = b.div(l)), t ? l.mod(t) : c ? K(l, V, B, void 0) : l)
        }, L.integerValue = function (e) {
          var t = new H(this);
          return null == e ? e = B : N(e, 0, 8), K(t, t.e + 1, e)
        }, L.isEqualTo = L.eq = function (e, t) {
          return 0 === d(this, new H(e, t))
        }, L.isFinite = function () {
          return !!this.c
        }, L.isGreaterThan = L.gt = function (e, t) {
          return d(this, new H(e, t)) > 0
        }, L.isGreaterThanOrEqualTo = L.gte = function (e, t) {
          return 1 === (t = d(this, new H(e, t))) || 0 === t
        }, L.isInteger = function () {
          return !!this.c && R(this.e / _) > this.c.length - 2
        }, L.isLessThan = L.lt = function (e, t) {
          return d(this, new H(e, t)) < 0
        }, L.isLessThanOrEqualTo = L.lte = function (e, t) {
          return -1 === (t = d(this, new H(e, t))) || 0 === t
        }, L.isNaN = function () {
          return !this.s
        }, L.isNegative = function () {
          return this.s < 0
        }, L.isPositive = function () {
          return this.s > 0
        }, L.isZero = function () {
          return !!this.c && 0 == this.c[0]
        }, L.minus = function (e, t) {
          var n, i, a, s, o = this, r = o.s;
          if (t = (e = new H(e, t)).s, !r || !t) return new H(NaN);
          if (r != t) return e.s = -t, o.plus(e);
          var E = o.e / _, p = e.e / _, u = o.c, l = e.c;
          if (!E || !p) {
            if (!u || !l) return u ? (e.s = -t, e) : new H(l ? o : NaN);
            if (!u[0] || !l[0]) return l[0] ? (e.s = -t, e) : new H(u[0] ? o : 3 == B ? -0 : 0)
          }
          if (E = R(E), p = R(p), u = u.slice(), r = E - p) {
            for ((s = r < 0) ? (r = -r, a = u) : (p = E, a = l), a.reverse(), t = r; t--; a.push(0)) ;
            a.reverse()
          } else for (i = (s = (r = u.length) < (t = l.length)) ? r : t, r = t = 0; t < i; t++) if (u[t] != l[t]) {
            s = u[t] < l[t];
            break
          }
          if (s && (a = u, u = l, l = a, e.s = -e.s), (t = (i = l.length) - (n = u.length)) > 0) for (; t--; u[n++] = 0) ;
          for (t = c - 1; i > r;) {
            if (u[--i] < l[i]) {
              for (n = i; n && !u[--n]; u[n] = t) ;
              --u[n], u[i] += c
            }
            u[i] -= l[i]
          }
          for (; 0 == u[0]; u.splice(0, 1), --p) ;
          return u[0] ? j(e, u, p) : (e.s = 3 == B ? -1 : 1, e.c = [e.e = 0], e)
        }, L.modulo = L.mod = function (e, t) {
          var i, a, s = this;
          return e = new H(e, t), !s.c || !e.s || e.c && !e.c[0] ? new H(NaN) : !e.c || s.c && !s.c[0] ? new H(s) : (9 == P ? (a = e.s, e.s = 1, i = n(s, e, 0, 3), e.s = a, i.s *= a) : i = n(s, e, 0, P), (e = s.minus(i.times(e))).c[0] || 1 != P || (e.s = s.s), e)
        }, L.multipliedBy = L.times = function (e, t) {
          var n, i, a, s, o, r, E, p, l, A, d, N, T, f, m, h = this, I = h.c, O = (e = new H(e, t)).c;
          if (!(I && O && I[0] && O[0])) return !h.s || !e.s || I && !I[0] && !O || O && !O[0] && !I ? e.c = e.e = e.s = null : (e.s *= h.s, I && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
          for (i = R(h.e / _) + R(e.e / _), e.s *= h.s, (E = I.length) < (A = O.length) && (T = I, I = O, O = T, a = E, E = A, A = a), a = E + A, T = []; a--; T.push(0)) ;
          for (f = c, m = u, a = A; --a >= 0;) {
            for (n = 0, d = O[a] % m, N = O[a] / m | 0, s = a + (o = E); s > a;) n = ((p = d * (p = I[--o] % m) + (r = N * p + (l = I[o] / m | 0) * d) % m * m + T[s] + n) / f | 0) + (r / m | 0) + N * l, T[s--] = p % f;
            T[s] = n
          }
          return n ? ++i : T.splice(0, 1), j(e, T, i)
        }, L.negated = function () {
          var e = new H(this);
          return e.s = -e.s || null, e
        }, L.plus = function (e, t) {
          var n, i = this, a = i.s;
          if (t = (e = new H(e, t)).s, !a || !t) return new H(NaN);
          if (a != t) return e.s = -t, i.minus(e);
          var s = i.e / _, o = e.e / _, r = i.c, E = e.c;
          if (!s || !o) {
            if (!r || !E) return new H(a / 0);
            if (!r[0] || !E[0]) return E[0] ? e : new H(r[0] ? i : 0 * a)
          }
          if (s = R(s), o = R(o), r = r.slice(), a = s - o) {
            for (a > 0 ? (o = s, n = E) : (a = -a, n = r), n.reverse(); a--; n.push(0)) ;
            n.reverse()
          }
          for ((a = r.length) - (t = E.length) < 0 && (n = E, E = r, r = n, t = a), a = 0; t;) a = (r[--t] = r[t] + E[t] + a) / c | 0, r[t] = c === r[t] ? 0 : r[t] % c;
          return a && (r = [a].concat(r), ++o), j(e, r, o)
        }, L.precision = L.sd = function (e, t) {
          var n, i, a, s = this;
          if (null != e && e !== !!e) return N(e, 1, l), null == t ? t = B : N(t, 0, 8), K(new H(s), e, t);
          if (!(n = s.c)) return null;
          if (i = (a = n.length - 1) * _ + 1, a = n[a]) {
            for (; a % 10 == 0; a /= 10, i--) ;
            for (a = n[0]; a >= 10; a /= 10, i++) ;
          }
          return e && s.e + 1 > i && (i = s.e + 1), i
        }, L.shiftedBy = function (e) {
          return N(e, -9007199254740991, E), this.times("1e" + e)
        }, L.squareRoot = L.sqrt = function () {
          var e, t, i, a, s, o = this, r = o.c, c = o.s, _ = o.e, E = U + 4, p = new H("0.5");
          if (1 !== c || !r || !r[0]) return new H(!c || c < 0 && (!r || r[0]) ? NaN : r ? o : 1 / 0);
          if (0 == (c = Math.sqrt(+X(o))) || c == 1 / 0 ? (((t = A(r)).length + _) % 2 == 0 && (t += "0"), c = Math.sqrt(+t), _ = R((_ + 1) / 2) - (_ < 0 || _ % 2), i = new H(t = c == 1 / 0 ? "1e" + _ : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + _)) : i = new H(c + ""), i.c[0]) for ((c = (_ = i.e) + E) < 3 && (c = 0); ;) if (s = i, i = p.times(s.plus(n(o, s, E, 1))), A(s.c).slice(0, c) === (t = A(i.c)).slice(0, c)) {
            if (i.e < _ && --c, "9999" != (t = t.slice(c - 3, c + 1)) && (a || "4999" != t)) {
              +t && (+t.slice(1) || "5" != t.charAt(0)) || (K(i, i.e + U + 2, 1), e = !i.times(i).eq(o));
              break
            }
            if (!a && (K(s, s.e + U + 2, 0), s.times(s).eq(o))) {
              i = s;
              break
            }
            E += 4, c += 4, a = 1
          }
          return K(i, i.e + U + 1, B, e)
        }, L.toExponential = function (e, t) {
          return null != e && (N(e, 0, l), e++), W(this, e, t, 1)
        }, L.toFixed = function (e, t) {
          return null != e && (N(e, 0, l), e = e + this.e + 1), W(this, e, t)
        }, L.toFormat = function (e, t, n) {
          var i, a = this;
          if (null == n) null != e && t && "object" == typeof t ? (n = t, t = null) : e && "object" == typeof e ? (n = e, e = t = null) : n = Q; else if ("object" != typeof n) throw Error(o + "Argument not an object: " + n);
          if (i = a.toFixed(e, t), a.c) {
            var s, r = i.split("."), c = +n.groupSize, _ = +n.secondaryGroupSize, E = n.groupSeparator || "", p = r[0],
              u = r[1], l = a.s < 0, R = l ? p.slice(1) : p, A = R.length;
            if (_ && (s = c, c = _, _ = s, A -= s), c > 0 && A > 0) {
              for (s = A % c || c, p = R.substr(0, s); s < A; s += c) p += E + R.substr(s, c);
              _ > 0 && (p += E + R.slice(s)), l && (p = "-" + p)
            }
            i = u ? p + (n.decimalSeparator || "") + ((_ = +n.fractionGroupSize) ? u.replace(new RegExp("\\d{" + _ + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : u) : p
          }
          return (n.prefix || "") + i + (n.suffix || "")
        }, L.toFraction = function (e) {
          var t, i, a, s, r, c, E, u, l, R, d, N, T = this, f = T.c;
          if (null != e && (!(E = new H(e)).isInteger() && (E.c || 1 !== E.s) || E.lt(b))) throw Error(o + "Argument " + (E.isInteger() ? "out of range: " : "not an integer: ") + X(E));
          if (!f) return new H(T);
          for (t = new H(b), l = i = new H(b), a = u = new H(b), N = A(f), r = t.e = N.length - T.e - 1, t.c[0] = p[(c = r % _) < 0 ? _ + c : c], e = !e || E.comparedTo(t) > 0 ? r > 0 ? t : l : E, c = F, F = 1 / 0, E = new H(N), u.c[0] = 0; R = n(E, t, 0, 1), 1 != (s = i.plus(R.times(a))).comparedTo(e);) i = a, a = s, l = u.plus(R.times(s = l)), u = s, t = E.minus(R.times(s = t)), E = s;
          return s = n(e.minus(i), a, 0, 1), u = u.plus(s.times(l)), i = i.plus(s.times(a)), u.s = l.s = T.s, d = n(l, a, r *= 2, B).minus(T).abs().comparedTo(n(u, i, r, B).minus(T).abs()) < 1 ? [l, a] : [u, i], F = c, d
        }, L.toNumber = function () {
          return +X(this)
        }, L.toPrecision = function (e, t) {
          return null != e && N(e, 1, l), W(this, e, t, 2)
        }, L.toString = function (e) {
          var t, n = this, i = n.s, a = n.e;
          return null === a ? i ? (t = "Infinity", i < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = a <= M || a >= w ? f(A(n.c), a) : m(A(n.c), a, "0") : 10 === e ? t = m(A((n = K(new H(n), U + a + 1, B)).c), n.e, "0") : (N(e, 2, k.length, "Base"), t = h(m(A(n.c), a, "0"), 10, e, i, !0)), i < 0 && n.c[0] && (t = "-" + t)), t
        }, L.valueOf = L.toJSON = function () {
          return X(this)
        }, L._isBigNumber = !0, L[Symbol.toStringTag] = "BigNumber", L[Symbol.for("nodejs.util.inspect.custom")] = L.valueOf, null != t && H.set(t), H
      }();
      const I = h
    }, 3601: (e, t, n) => {
      "use strict";
      const i = n(983), a = new (n(931))(100);
      e.exports = e => {
        let t = a.get(e);
        return t || (t = i.contentType(e), a.set(e, t)), t
      }
    }, 8333: e => {
      var t = Array.prototype.slice;

      function n(e) {
        var n = this, a = t.call(arguments, 1);
        return new Promise((function (t, s) {
          if ("function" == typeof e && (e = e.apply(n, a)), !e || "function" != typeof e.next) return t(e);

          function o(t) {
            var n;
            try {
              n = e.next(t)
            } catch (e) {
              return s(e)
            }
            _(n)
          }

          function c(t) {
            var n;
            try {
              n = e.throw(t)
            } catch (e) {
              return s(e)
            }
            _(n)
          }

          function _(e) {
            if (e.done) return t(e.value);
            var a = i.call(n, e.value);
            return a && r(a) ? a.then(o, c) : c(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "' + String(e.value) + '"'))
          }

          o()
        }))
      }

      function i(e) {
        return e ? r(e) ? e : function (e) {
          var t = e.constructor;
          return !!t && ("GeneratorFunction" === t.name || "GeneratorFunction" === t.displayName || c(t.prototype))
        }(e) || c(e) ? n.call(this, e) : "function" == typeof e ? a.call(this, e) : Array.isArray(e) ? s.call(this, e) : Object == e.constructor ? o.call(this, e) : e : e
      }

      function a(e) {
        var n = this;
        return new Promise((function (i, a) {
          e.call(n, (function (e, n) {
            if (e) return a(e);
            arguments.length > 2 && (n = t.call(arguments, 1)), i(n)
          }))
        }))
      }

      function s(e) {
        return Promise.all(e.map(i, this))
      }

      function o(e) {
        for (var t = new e.constructor, n = Object.keys(e), a = [], s = 0; s < n.length; s++) {
          var o = n[s], c = i.call(this, e[o]);
          c && r(c) ? _(c, o) : t[o] = e[o]
        }
        return Promise.all(a).then((function () {
          return t
        }));

        function _(e, n) {
          t[n] = void 0, a.push(e.then((function (e) {
            t[n] = e
          })))
        }
      }

      function r(e) {
        return "function" == typeof e.then
      }

      function c(e) {
        return "function" == typeof e.next && "function" == typeof e.throw
      }

      e.exports = n.default = n.co = n, n.wrap = function (e) {
        return t.__generatorFunction__ = e, t;

        function t() {
          return n.call(this, e.apply(this, arguments))
        }
      }
    }, 7389: (e, t, n) => {
      "use strict";
      e.exports = function (e, t) {
        var n = t || {};
        return function (e) {
          var t = e.parameters, n = e.type;
          if (!n || "string" != typeof n || !l.test(n)) throw new TypeError("invalid type");
          var i = String(n).toLowerCase();
          if (t && "object" == typeof t) for (var a, s = Object.keys(t).sort(), o = 0; o < s.length; o++) {
            var r = "*" === (a = s[o]).substr(-1) ? h(t[a]) : m(t[a]);
            i += "; " + a + "=" + r
          }
          return i
        }(new I(n.type || "attachment", function (e, t) {
          if (void 0 !== e) {
            var n = {};
            if ("string" != typeof e) throw new TypeError("filename must be a string");
            if (void 0 === t && (t = !0), "string" != typeof t && "boolean" != typeof t) throw new TypeError("fallback must be a string or boolean");
            if ("string" == typeof t && c.test(t)) throw new TypeError("fallback must be ISO-8859-1 string");
            var a = i(e), s = u.test(a), r = "string" != typeof t ? t && N(a) : i(t),
              _ = "string" == typeof r && r !== a;
            return (_ || !s || o.test(a)) && (n["filename*"] = a), (s || _) && (n.filename = _ ? r : a), n
          }
        }(e, n.fallback)))
      }, e.exports.parse = function (e) {
        if (!e || "string" != typeof e) throw new TypeError("argument string is required");
        var t = A.exec(e);
        if (!t) throw new TypeError("invalid type format");
        var n, i, a = t[0].length, s = t[1].toLowerCase(), o = [], r = {};
        for (a = p.lastIndex = ";" === t[0].substr(-1) ? a - 1 : a; t = p.exec(e);) {
          if (t.index !== a) throw new TypeError("invalid parameter format");
          if (a += t[0].length, n = t[1].toLowerCase(), i = t[2], -1 !== o.indexOf(n)) throw new TypeError("invalid duplicate parameter");
          o.push(n), n.indexOf("*") + 1 !== n.length ? "string" != typeof r[n] && ('"' === i[0] && (i = i.substr(1, i.length - 2).replace(_, "$1")), r[n] = i) : (n = n.slice(0, -1), i = d(i), r[n] = i)
        }
        if (-1 !== a && a !== e.length) throw new TypeError("invalid parameter format");
        return new I(s, r)
      };
      var i = n(5622).basename, a = n(9509).Buffer, s = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g, o = /%[0-9A-Fa-f]{2}/,
        r = /%([0-9A-Fa-f]{2})/g, c = /[^\x20-\x7e\xa0-\xff]/g, _ = /\\([\u0000-\u007f])/g, E = /([\\"])/g,
        p = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g,
        u = /^[\x20-\x7e\x80-\xff]+$/, l = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/,
        R = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/,
        A = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/;

      function d(e) {
        var t = R.exec(e);
        if (!t) throw new TypeError("invalid extended field value");
        var n, i = t[1].toLowerCase(), s = t[2].replace(r, T);
        switch (i) {
          case"iso-8859-1":
            n = N(s);
            break;
          case"utf-8":
            n = a.from(s, "binary").toString("utf8");
            break;
          default:
            throw new TypeError("unsupported charset in extended field")
        }
        return n
      }

      function N(e) {
        return String(e).replace(c, "?")
      }

      function T(e, t) {
        return String.fromCharCode(parseInt(t, 16))
      }

      function f(e) {
        return "%" + String(e).charCodeAt(0).toString(16).toUpperCase()
      }

      function m(e) {
        return '"' + String(e).replace(E, "\\$1") + '"'
      }

      function h(e) {
        var t = String(e);
        return "UTF-8''" + encodeURIComponent(t).replace(s, f)
      }

      function I(e, t) {
        this.type = e, this.parameters = t
      }
    }, 7811: (e, t) => {
      "use strict";
      var n = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
        i = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/, a = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,
        s = /\\([\u000b\u0020-\u00ff])/g, o = /([\\"])/g,
        r = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

      function c(e) {
        var t = String(e);
        if (a.test(t)) return t;
        if (t.length > 0 && !i.test(t)) throw new TypeError("invalid parameter value");
        return '"' + t.replace(o, "\\$1") + '"'
      }

      function _(e) {
        this.parameters = Object.create(null), this.type = e
      }

      t.format = function (e) {
        if (!e || "object" != typeof e) throw new TypeError("argument obj is required");
        var t = e.parameters, n = e.type;
        if (!n || !r.test(n)) throw new TypeError("invalid type");
        var i = n;
        if (t && "object" == typeof t) for (var s, o = Object.keys(t).sort(), _ = 0; _ < o.length; _++) {
          if (s = o[_], !a.test(s)) throw new TypeError("invalid parameter name");
          i += "; " + s + "=" + c(t[s])
        }
        return i
      }, t.parse = function (e) {
        if (!e) throw new TypeError("argument string is required");
        var t = "object" == typeof e ? function (e) {
          var t;
          if ("function" == typeof e.getHeader ? t = e.getHeader("content-type") : "object" == typeof e.headers && (t = e.headers && e.headers["content-type"]), "string" != typeof t) throw new TypeError("content-type header is missing from object");
          return t
        }(e) : e;
        if ("string" != typeof t) throw new TypeError("argument string is required to be a string");
        var i = t.indexOf(";"), a = -1 !== i ? t.substr(0, i).trim() : t.trim();
        if (!r.test(a)) throw new TypeError("invalid media type");
        var o = new _(a.toLowerCase());
        if (-1 !== i) {
          var c, E, p;
          for (n.lastIndex = i; E = n.exec(t);) {
            if (E.index !== i) throw new TypeError("invalid parameter format");
            i += E[0].length, c = E[1].toLowerCase(), '"' === (p = E[2])[0] && (p = p.substr(1, p.length - 2).replace(s, "$1")), o.parameters[c] = p
          }
          if (i !== t.length) throw new TypeError("invalid parameter format")
        }
        return o
      }
    }, 8933: (e, t, n) => {
      "use strict";
      var i = n(2409)("cookies"), a = n(3559), s = n(8605), o = {}, r = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
        c = /^(?:lax|none|strict)$/i;

      function _(e, t, n) {
        if (!(this instanceof _)) return new _(e, t, n);
        this.secure = void 0, this.request = e, this.response = t, n && (Array.isArray(n) ? (i('"keys" argument; provide using options {"keys": [...]}'), this.keys = new a(n)) : n.constructor && "Keygrip" === n.constructor.name ? (i('"keys" argument; provide using options {"keys": keygrip}'), this.keys = n) : (this.keys = Array.isArray(n.keys) ? new a(n.keys) : n.keys, this.secure = n.secure))
      }

      function E(e, t, n) {
        if (!r.test(e)) throw new TypeError("argument name is invalid");
        if (t && !r.test(t)) throw new TypeError("argument value is invalid");
        for (var e in this.name = e, this.value = t || "", n) this[e] = n[e];
        if (this.value || (this.expires = new Date(0), this.maxAge = null), this.path && !r.test(this.path)) throw new TypeError("option path is invalid");
        if (this.domain && !r.test(this.domain)) throw new TypeError("option domain is invalid");
        if (this.sameSite && !0 !== this.sameSite && !c.test(this.sameSite)) throw new TypeError("option sameSite is invalid")
      }

      function p(e, t) {
        if (t.overwrite) for (var n = e.length - 1; n >= 0; n--) 0 === e[n].indexOf(t.name + "=") && e.splice(n, 1);
        e.push(t.toHeader())
      }

      _.prototype.get = function (e, t) {
        var n, i, a, s, r, c, _ = e + ".sig", E = t && void 0 !== t.signed ? t.signed : !!this.keys;
        if ((n = this.request.headers.cookie) && (i = n.match(function (e) {
          return o[e] ? o[e] : o[e] = new RegExp("(?:^|;) *" + e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "=([^;]*)")
        }(e)))) {
          if (a = i[1], !t || !E) return a;
          if (s = this.get(_)) {
            if (r = e + "=" + a, !this.keys) throw new Error(".keys required for signed cookies");
            if (!((c = this.keys.index(r, s)) < 0)) return c && this.set(_, this.keys.sign(r), {signed: !1}), a;
            this.set(_, null, {path: "/", signed: !1})
          }
        }
      }, _.prototype.set = function (e, t, n) {
        var a = this.response, o = this.request, r = a.getHeader("Set-Cookie") || [],
          c = void 0 !== this.secure ? !!this.secure : "https" === o.protocol || o.connection.encrypted,
          _ = new E(e, t, n), u = n && void 0 !== n.signed ? n.signed : !!this.keys;
        if ("string" == typeof r && (r = [r]), !c && n && n.secure) throw new Error("Cannot send secure cookie over unencrypted connection");
        if (_.secure = n && void 0 !== n.secure ? n.secure : c, n && "secureProxy" in n && (i('"secureProxy" option; use "secure" option, provide "secure" to constructor if needed'), _.secure = n.secureProxy), p(r, _), n && u) {
          if (!this.keys) throw new Error(".keys required for signed cookies");
          _.value = this.keys.sign(_.toString()), _.name += ".sig", p(r, _)
        }
        return (a.set ? s.OutgoingMessage.prototype.setHeader : a.setHeader).call(a, "Set-Cookie", r), this
      }, E.prototype.path = "/", E.prototype.expires = void 0, E.prototype.domain = void 0, E.prototype.httpOnly = !0, E.prototype.sameSite = !1, E.prototype.secure = !1, E.prototype.overwrite = !1, E.prototype.toString = function () {
        return this.name + "=" + this.value
      }, E.prototype.toHeader = function () {
        var e = this.toString();
        return this.maxAge && (this.expires = new Date(Date.now() + this.maxAge)), this.path && (e += "; path=" + this.path), this.expires && (e += "; expires=" + this.expires.toUTCString()), this.domain && (e += "; domain=" + this.domain), this.sameSite && (e += "; samesite=" + (!0 === this.sameSite ? "strict" : this.sameSite.toLowerCase())), this.secure && (e += "; secure"), this.httpOnly && (e += "; httponly"), e
      }, Object.defineProperty(E.prototype, "maxage", {
        configurable: !0, enumerable: !0, get: function () {
          return this.maxAge
        }, set: function (e) {
          return this.maxAge = e
        }
      }), i.property(E.prototype, "maxage", '"maxage"; use "maxAge" instead'), _.connect = _.express = function (e) {
        return function (t, n, i) {
          t.cookies = n.cookies = new _(t, n, {keys: e}), i()
        }
      }, _.Cookie = E, e.exports = _
    }, 2409: (e, t, n) => {
      var i = n(5622).relative;
      e.exports = function (e) {
        if (!e) throw new TypeError("argument namespace is required");
        var t = c(l()[1])[0];

        function n(e) {
          r.call(n, e)
        }

        return n._file = t, n._ignored = function (e) {
          return !!process.noDeprecation || s(process.env.NO_DEPRECATION || "", e)
        }(e), n._namespace = e, n._traced = function (e) {
          return !!process.traceDeprecation || s(process.env.TRACE_DEPRECATION || "", e)
        }(e), n._warned = Object.create(null), n.function = A, n.property = d, n
      };
      var a = process.cwd();

      function s(e, t) {
        for (var n = e.split(/[ ,]+/), i = String(t).toLowerCase(), a = 0; a < n.length; a++) {
          var s = n[a];
          if (s && ("*" === s || s.toLowerCase() === i)) return !0
        }
        return !1
      }

      function o(e) {
        var t = this.name + ": " + this.namespace;
        this.message && (t += " deprecated " + this.message);
        for (var n = 0; n < e.length; n++) t += "\n    at " + e[n].toString();
        return t
      }

      function r(e, t) {
        var n, i,
          a = (i = "deprecation", ("function" != typeof (n = process).listenerCount ? n.listeners(i).length : n.listenerCount(i)) > 0);
        if (a || !this._ignored) {
          var s, o, r, u, R = 0, A = !1, d = l(), T = this._file;
          for (t ? (u = t, (r = c(d[1])).name = u.name, T = r[0]) : r = u = c(d[R = 2]); R < d.length; R++) if ((o = (s = c(d[R]))[0]) === T) A = !0; else if (o === this._file) T = this._file; else if (A) break;
          var f = s ? u.join(":") + "__" + s.join(":") : void 0;
          if (void 0 === f || !(f in this._warned)) {
            this._warned[f] = !0;
            var m = e;
            if (m || (m = r !== u && r.name ? _(r) : _(u)), a) {
              var h = N(this._namespace, m, d.slice(R));
              process.emit("deprecation", h)
            } else {
              var I = (process.stderr.isTTY ? p : E).call(this, m, s, d.slice(R));
              process.stderr.write(I + "\n", "utf8")
            }
          }
        }
      }

      function c(e) {
        var t = e.getFileName() || "<anonymous>", n = e.getLineNumber(), i = e.getColumnNumber();
        e.isEval() && (t = e.getEvalOrigin() + ", " + t);
        var a = [t, n, i];
        return a.callSite = e, a.name = e.getFunctionName(), a
      }

      function _(e) {
        var t = e.callSite, n = e.name;
        n || (n = "<anonymous@" + u(e) + ">");
        var i = t.getThis(), a = i && t.getTypeName();
        return "Object" === a && (a = void 0), "Function" === a && (a = i.name || a), a && t.getMethodName() ? a + "." + n : n
      }

      function E(e, t, n) {
        var i = (new Date).toUTCString() + " " + this._namespace + " deprecated " + e;
        if (this._traced) {
          for (var a = 0; a < n.length; a++) i += "\n    at " + n[a].toString();
          return i
        }
        return t && (i += " at " + u(t)), i
      }

      function p(e, t, n) {
        var i = "[36;1m" + this._namespace + "[22;39m [33;1mdeprecated[22;39m [0m" + e + "[39m";
        if (this._traced) {
          for (var a = 0; a < n.length; a++) i += "\n    [36mat " + n[a].toString() + "[39m";
          return i
        }
        return t && (i += " [36m" + u(t) + "[39m"), i
      }

      function u(e) {
        return i(a, e[0]) + ":" + e[1] + ":" + e[2]
      }

      function l() {
        var e = Error.stackTraceLimit, t = {}, n = Error.prepareStackTrace;
        Error.prepareStackTrace = R, Error.stackTraceLimit = Math.max(10, e), Error.captureStackTrace(t);
        var i = t.stack.slice(1);
        return Error.prepareStackTrace = n, Error.stackTraceLimit = e, i
      }

      function R(e, t) {
        return t
      }

      function A(e, t) {
        if ("function" != typeof e) throw new TypeError("argument fn must be a function");
        var n = function (e) {
          for (var t = "", n = 0; n < e; n++) t += ", arg" + n;
          return t.substr(2)
        }(e.length), i = c(l()[1]);
        return i.name = e.name, new Function("fn", "log", "deprecate", "message", "site", '"use strict"\nreturn function (' + n + ") {log.call(deprecate, message, site)\nreturn fn.apply(this, arguments)\n}")(e, r, this, t, i)
      }

      function d(e, t, n) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new TypeError("argument obj must be object");
        var i = Object.getOwnPropertyDescriptor(e, t);
        if (!i) throw new TypeError("must call property on owner object");
        if (!i.configurable) throw new TypeError("property must be configurable");
        var a = this, s = c(l()[1]);
        s.name = t, "value" in i && (i = function (e, t, n) {
          var i = Object.getOwnPropertyDescriptor(e, t), a = i.value;
          return i.get = function () {
            return a
          }, i.writable && (i.set = function (e) {
            return a = e
          }), delete i.value, delete i.writable, Object.defineProperty(e, t, i), i
        }(e, t));
        var o = i.get, _ = i.set;
        "function" == typeof o && (i.get = function () {
          return r.call(a, n, s), o.apply(this, arguments)
        }), "function" == typeof _ && (i.set = function () {
          return r.call(a, n, s), _.apply(this, arguments)
        }), Object.defineProperty(e, t, i)
      }

      function N(e, t, n) {
        var i, a = new Error;
        return Object.defineProperty(a, "constructor", {value: N}), Object.defineProperty(a, "message", {
          configurable: !0,
          enumerable: !1,
          value: t,
          writable: !0
        }), Object.defineProperty(a, "name", {
          enumerable: !1,
          configurable: !0,
          value: "DeprecationError",
          writable: !0
        }), Object.defineProperty(a, "namespace", {
          configurable: !0,
          enumerable: !1,
          value: e,
          writable: !0
        }), Object.defineProperty(a, "stack", {
          configurable: !0, enumerable: !1, get: function () {
            return void 0 !== i ? i : i = o.call(this, n)
          }, set: function (e) {
            i = e
          }
        }), a
      }
    }, 6497: (e, t) => {
      function n(e) {
        return Object.prototype.toString.call(e)
      }

      t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e)
      }, t.isBoolean = function (e) {
        return "boolean" == typeof e
      }, t.isNull = function (e) {
        return null === e
      }, t.isNullOrUndefined = function (e) {
        return null == e
      }, t.isNumber = function (e) {
        return "number" == typeof e
      }, t.isString = function (e) {
        return "string" == typeof e
      }, t.isSymbol = function (e) {
        return "symbol" == typeof e
      }, t.isUndefined = function (e) {
        return void 0 === e
      }, t.isRegExp = function (e) {
        return "[object RegExp]" === n(e)
      }, t.isObject = function (e) {
        return "object" == typeof e && null !== e
      }, t.isDate = function (e) {
        return "[object Date]" === n(e)
      }, t.isError = function (e) {
        return "[object Error]" === n(e) || e instanceof Error
      }, t.isFunction = function (e) {
        return "function" == typeof e
      }, t.isPrimitive = function (e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
      }, t.isBuffer = Buffer.isBuffer
    }, 1227: (e, t, n) => {
      function i() {
        var e;
        try {
          e = t.storage.debug
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
      }

      (t = e.exports = n(1658)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
      }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), n) {
          var i = "color: " + this.color;
          e.splice(1, 0, i, "color: inherit");
          var a = 0, s = 0;
          e[0].replace(/%[a-zA-Z%]/g, (function (e) {
            "%%" !== e && (a++, "%c" === e && (s = a))
          })), e.splice(s, 0, i)
        }
      }, t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (e) {
        }
      }, t.load = i, t.useColors = function () {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage
        } catch (e) {
        }
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message
        }
      }, t.enable(i())
    }, 1658: (e, t, n) => {
      function i(e) {
        var n;

        function i() {
          if (i.enabled) {
            var e = i, a = +new Date, s = a - (n || a);
            e.diff = s, e.prev = n, e.curr = a, n = a;
            for (var o = new Array(arguments.length), r = 0; r < o.length; r++) o[r] = arguments[r];
            o[0] = t.coerce(o[0]), "string" != typeof o[0] && o.unshift("%O");
            var c = 0;
            o[0] = o[0].replace(/%([a-zA-Z%])/g, (function (n, i) {
              if ("%%" === n) return n;
              c++;
              var a = t.formatters[i];
              if ("function" == typeof a) {
                var s = o[c];
                n = a.call(e, s), o.splice(c, 1), c--
              }
              return n
            })), t.formatArgs.call(e, o);
            var _ = i.log || t.log || console.log.bind(console);
            _.apply(e, o)
          }
        }

        return i.namespace = e, i.enabled = t.enabled(e), i.useColors = t.useColors(), i.color = function (e) {
          var n, i = 0;
          for (n in e) i = (i << 5) - i + e.charCodeAt(n), i |= 0;
          return t.colors[Math.abs(i) % t.colors.length]
        }(e), i.destroy = a, "function" == typeof t.init && t.init(i), t.instances.push(i), i
      }

      function a() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
      }

      (t = e.exports = i.debug = i.default = i).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e
      }, t.disable = function () {
        t.enable("")
      }, t.enable = function (e) {
        var n;
        t.save(e), t.names = [], t.skips = [];
        var i = ("string" == typeof e ? e : "").split(/[\s,]+/), a = i.length;
        for (n = 0; n < a; n++) i[n] && ("-" === (e = i[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (n = 0; n < t.instances.length; n++) {
          var s = t.instances[n];
          s.enabled = t.enabled(s.namespace)
        }
      }, t.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var n, i;
        for (n = 0, i = t.skips.length; n < i; n++) if (t.skips[n].test(e)) return !1;
        for (n = 0, i = t.names.length; n < i; n++) if (t.names[n].test(e)) return !0;
        return !1
      }, t.humanize = n(7824), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
    }, 5158: (e, t, n) => {
      "undefined" == typeof process || "renderer" === process.type ? e.exports = n(1227) : e.exports = n(39)
    }, 39: (e, t, n) => {
      var i = n(3867), a = n(1669);
      (t = e.exports = n(1658)).init = function (e) {
        e.inspectOpts = {};
        for (var n = Object.keys(t.inspectOpts), i = 0; i < n.length; i++) e.inspectOpts[n[i]] = t.inspectOpts[n[i]]
      }, t.log = function () {
        return process.stderr.write(a.format.apply(a, arguments) + "\n")
      }, t.formatArgs = function (e) {
        var n = this.namespace;
        if (this.useColors) {
          var i = this.color, a = "[3" + (i < 8 ? i : "8;5;" + i), s = "  " + a + ";1m" + n + " [0m";
          e[0] = s + e[0].split("\n").join("\n" + s), e.push(a + "m+" + t.humanize(this.diff) + "[0m")
        } else e[0] = (t.inspectOpts.hideDate ? "" : (new Date).toISOString() + " ") + n + " " + e[0]
      }, t.save = function (e) {
        null == e ? delete process.env.DEBUG : process.env.DEBUG = e
      }, t.load = o, t.useColors = function () {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : i.isatty(process.stderr.fd)
      }, t.colors = [6, 2, 3, 4, 5, 1];
      try {
        var s = n(2130);
        s && s.level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
      } catch (e) {
      }

      function o() {
        return process.env.DEBUG
      }

      t.inspectOpts = Object.keys(process.env).filter((function (e) {
        return /^debug_/i.test(e)
      })).reduce((function (e, t) {
        var n = t.substring(6).toLowerCase().replace(/_([a-z])/g, (function (e, t) {
          return t.toUpperCase()
        })), i = process.env[t];
        return i = !!/^(yes|on|true|enabled)$/i.test(i) || !/^(no|off|false|disabled)$/i.test(i) && ("null" === i ? null : Number(i)), e[n] = i, e
      }), {}), t.formatters.o = function (e) {
        return this.inspectOpts.colors = this.useColors, a.inspect(e, this.inspectOpts).split("\n").map((function (e) {
          return e.trim()
        })).join(" ")
      }, t.formatters.O = function (e) {
        return this.inspectOpts.colors = this.useColors, a.inspect(e, this.inspectOpts)
      }, t.enable(o())
    }, 251: (e, t, n) => {
      var i = Array.prototype.slice, a = n(1705), s = n(5539), o = e.exports = function (e, t, n) {
        return n || (n = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : function (e, t, n) {
          var _, E;
          if (r(e) || r(t)) return !1;
          if (e.prototype !== t.prototype) return !1;
          if (s(e)) return !!s(t) && (e = i.call(e), t = i.call(t), o(e, t, n));
          if (c(e)) {
            if (!c(t)) return !1;
            if (e.length !== t.length) return !1;
            for (_ = 0; _ < e.length; _++) if (e[_] !== t[_]) return !1;
            return !0
          }
          try {
            var p = a(e), u = a(t)
          } catch (e) {
            return !1
          }
          if (p.length != u.length) return !1;
          for (p.sort(), u.sort(), _ = p.length - 1; _ >= 0; _--) if (p[_] != u[_]) return !1;
          for (_ = p.length - 1; _ >= 0; _--) if (E = p[_], !o(e[E], t[E], n)) return !1;
          return typeof e == typeof t
        }(e, t, n))
      };

      function r(e) {
        return null == e
      }

      function c(e) {
        return !(!e || "object" != typeof e || "number" != typeof e.length || "function" != typeof e.copy || "function" != typeof e.slice || e.length > 0 && "number" != typeof e[0])
      }
    }, 5539: (e, t) => {
      var n = "[object Arguments]" == function () {
        return Object.prototype.toString.call(arguments)
      }();

      function i(e) {
        return "[object Arguments]" == Object.prototype.toString.call(e)
      }

      function a(e) {
        return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
      }

      (t = e.exports = n ? i : a).supported = i, t.unsupported = a
    }, 1705: (e, t) => {
      function n(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t
      }

      (e.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
    }, 8603: e => {
      function t(e, n) {
        if (!(this instanceof t)) return new t(e, n);
        this.proto = e, this.target = n, this.methods = [], this.getters = [], this.setters = [], this.fluents = []
      }

      e.exports = t, t.prototype.method = function (e) {
        var t = this.proto, n = this.target;
        return this.methods.push(e), t[e] = function () {
          return this[n][e].apply(this[n], arguments)
        }, this
      }, t.prototype.access = function (e) {
        return this.getter(e).setter(e)
      }, t.prototype.getter = function (e) {
        var t = this.proto, n = this.target;
        return this.getters.push(e), t.__defineGetter__(e, (function () {
          return this[n][e]
        })), this
      }, t.prototype.setter = function (e) {
        var t = this.proto, n = this.target;
        return this.setters.push(e), t.__defineSetter__(e, (function (t) {
          return this[n][e] = t
        })), this
      }, t.prototype.fluent = function (e) {
        var t = this.proto, n = this.target;
        return this.fluents.push(e), t[e] = function (t) {
          return void 0 !== t ? (this[n][e] = t, this) : this[n][e]
        }, this
      }
    }, 412: (module, __unused_webpack_exports, __webpack_require__) => {
      var callSiteToString = __webpack_require__(2316).callSiteToString,
        eventListenerCount = __webpack_require__(2316).eventListenerCount,
        relative = __webpack_require__(5622).relative;
      module.exports = depd;
      var basePath = process.cwd();

      function containsNamespace(e, t) {
        for (var n = e.split(/[ ,]+/), i = String(t).toLowerCase(), a = 0; a < n.length; a++) {
          var s = n[a];
          if (s && ("*" === s || s.toLowerCase() === i)) return !0
        }
        return !1
      }

      function convertDataDescriptorToAccessor(e, t, n) {
        var i = Object.getOwnPropertyDescriptor(e, t), a = i.value;
        return i.get = function () {
          return a
        }, i.writable && (i.set = function (e) {
          return a = e
        }), delete i.value, delete i.writable, Object.defineProperty(e, t, i), i
      }

      function createArgumentsString(e) {
        for (var t = "", n = 0; n < e; n++) t += ", arg" + n;
        return t.substr(2)
      }

      function createStackString(e) {
        var t = this.name + ": " + this.namespace;
        this.message && (t += " deprecated " + this.message);
        for (var n = 0; n < e.length; n++) t += "\n    at " + callSiteToString(e[n]);
        return t
      }

      function depd(e) {
        if (!e) throw new TypeError("argument namespace is required");
        var t = callSiteLocation(getStack()[1])[0];

        function n(e) {
          log.call(n, e)
        }

        return n._file = t, n._ignored = isignored(e), n._namespace = e, n._traced = istraced(e), n._warned = Object.create(null), n.function = wrapfunction, n.property = wrapproperty, n
      }

      function isignored(e) {
        return !!process.noDeprecation || containsNamespace(process.env.NO_DEPRECATION || "", e)
      }

      function istraced(e) {
        return !!process.traceDeprecation || containsNamespace(process.env.TRACE_DEPRECATION || "", e)
      }

      function log(e, t) {
        var n = 0 !== eventListenerCount(process, "deprecation");
        if (n || !this._ignored) {
          var i, a, s, o, r = 0, c = !1, _ = getStack(), E = this._file;
          for (t ? (o = t, (s = callSiteLocation(_[1])).name = o.name, E = s[0]) : s = o = callSiteLocation(_[r = 2]); r < _.length; r++) if ((a = (i = callSiteLocation(_[r]))[0]) === E) c = !0; else if (a === this._file) E = this._file; else if (c) break;
          var p = i ? o.join(":") + "__" + i.join(":") : void 0;
          if (void 0 === p || !(p in this._warned)) {
            this._warned[p] = !0;
            var u = e;
            if (u || (u = s !== o && s.name ? defaultMessage(s) : defaultMessage(o)), n) {
              var l = DeprecationError(this._namespace, u, _.slice(r));
              process.emit("deprecation", l)
            } else {
              var R = (process.stderr.isTTY ? formatColor : formatPlain).call(this, u, i, _.slice(r));
              process.stderr.write(R + "\n", "utf8")
            }
          }
        }
      }

      function callSiteLocation(e) {
        var t = e.getFileName() || "<anonymous>", n = e.getLineNumber(), i = e.getColumnNumber();
        e.isEval() && (t = e.getEvalOrigin() + ", " + t);
        var a = [t, n, i];
        return a.callSite = e, a.name = e.getFunctionName(), a
      }

      function defaultMessage(e) {
        var t = e.callSite, n = e.name;
        n || (n = "<anonymous@" + formatLocation(e) + ">");
        var i = t.getThis(), a = i && t.getTypeName();
        return "Object" === a && (a = void 0), "Function" === a && (a = i.name || a), a && t.getMethodName() ? a + "." + n : n
      }

      function formatPlain(e, t, n) {
        var i = (new Date).toUTCString() + " " + this._namespace + " deprecated " + e;
        if (this._traced) {
          for (var a = 0; a < n.length; a++) i += "\n    at " + callSiteToString(n[a]);
          return i
        }
        return t && (i += " at " + formatLocation(t)), i
      }

      function formatColor(e, t, n) {
        var i = "[36;1m" + this._namespace + "[22;39m [33;1mdeprecated[22;39m [0m" + e + "[39m";
        if (this._traced) {
          for (var a = 0; a < n.length; a++) i += "\n    [36mat " + callSiteToString(n[a]) + "[39m";
          return i
        }
        return t && (i += " [36m" + formatLocation(t) + "[39m"), i
      }

      function formatLocation(e) {
        return relative(basePath, e[0]) + ":" + e[1] + ":" + e[2]
      }

      function getStack() {
        var e = Error.stackTraceLimit, t = {}, n = Error.prepareStackTrace;
        Error.prepareStackTrace = prepareObjectStackTrace, Error.stackTraceLimit = Math.max(10, e), Error.captureStackTrace(t);
        var i = t.stack.slice(1);
        return Error.prepareStackTrace = n, Error.stackTraceLimit = e, i
      }

      function prepareObjectStackTrace(e, t) {
        return t
      }

      function wrapfunction(fn, message) {
        if ("function" != typeof fn) throw new TypeError("argument fn must be a function");
        var args = createArgumentsString(fn.length), deprecate = this, stack = getStack(),
          site = callSiteLocation(stack[1]);
        site.name = fn.name;
        var deprecatedfn = eval("(function (" + args + ') {\n"use strict"\nlog.call(deprecate, message, site)\nreturn fn.apply(this, arguments)\n})');
        return deprecatedfn
      }

      function wrapproperty(e, t, n) {
        if (!e || "object" != typeof e && "function" != typeof e) throw new TypeError("argument obj must be object");
        var i = Object.getOwnPropertyDescriptor(e, t);
        if (!i) throw new TypeError("must call property on owner object");
        if (!i.configurable) throw new TypeError("property must be configurable");
        var a = this, s = callSiteLocation(getStack()[1]);
        s.name = t, "value" in i && (i = convertDataDescriptorToAccessor(e, t, n));
        var o = i.get, r = i.set;
        "function" == typeof o && (i.get = function () {
          return log.call(a, n, s), o.apply(this, arguments)
        }), "function" == typeof r && (i.set = function () {
          return log.call(a, n, s), r.apply(this, arguments)
        }), Object.defineProperty(e, t, i)
      }

      function DeprecationError(e, t, n) {
        var i, a = new Error;
        return Object.defineProperty(a, "constructor", {value: DeprecationError}), Object.defineProperty(a, "message", {
          configurable: !0,
          enumerable: !1,
          value: t,
          writable: !0
        }), Object.defineProperty(a, "name", {
          enumerable: !1,
          configurable: !0,
          value: "DeprecationError",
          writable: !0
        }), Object.defineProperty(a, "namespace", {
          configurable: !0,
          enumerable: !1,
          value: e,
          writable: !0
        }), Object.defineProperty(a, "stack", {
          configurable: !0, enumerable: !1, get: function () {
            return void 0 !== i ? i : i = createStackString.call(this, n)
          }, set: function (e) {
            i = e
          }
        }), a
      }
    }, 5868: e => {
      "use strict";
      e.exports = function (e) {
        var t, n = !0, i = function (e) {
          var t, n = "";
          if (e.isNative() ? n = "native" : e.isEval() ? (t = e.getScriptNameOrSourceURL()) || (n = e.getEvalOrigin()) : t = e.getFileName(), t) {
            n += t;
            var i = e.getLineNumber();
            if (null != i) {
              n += ":" + i;
              var a = e.getColumnNumber();
              a && (n += ":" + a)
            }
          }
          return n || "unknown source"
        }(e), a = e.getFunctionName(), s = e.isConstructor(), o = "";
        if (!(e.isToplevel() || s)) {
          var r = e.getMethodName(), c = (t = e.receiver).constructor && t.constructor.name || null;
          a ? (c && 0 !== a.indexOf(c) && (o += c + "."), o += a, r && a.lastIndexOf("." + r) !== a.length - r.length - 1 && (o += " [as " + r + "]")) : o += c + "." + (r || "<anonymous>")
        } else s ? o += "new " + (a || "<anonymous>") : a ? o += a : (n = !1, o += i);
        return n && (o += " (" + i + ")"), o
      }
    }, 1671: e => {
      "use strict";
      e.exports = function (e, t) {
        return e.listeners(t).length
      }
    }, 2316: (e, t, n) => {
      "use strict";
      var i = n(8614).EventEmitter;

      function a(e, t, n) {
        Object.defineProperty(e, t, {
          configurable: !0, enumerable: !0, get: function () {
            var i = n();
            return Object.defineProperty(e, t, {configurable: !0, enumerable: !0, value: i}), i
          }
        })
      }

      function s(e) {
        return e.toString()
      }

      a(e.exports, "callSiteToString", (function () {
        var e = Error.stackTraceLimit, t = {}, i = Error.prepareStackTrace;
        Error.prepareStackTrace = function (e, t) {
          return t
        }, Error.stackTraceLimit = 2, Error.captureStackTrace(t);
        var a = t.stack.slice();
        return Error.prepareStackTrace = i, Error.stackTraceLimit = e, a[0].toString ? s : n(5868)
      })), a(e.exports, "eventListenerCount", (function () {
        return i.listenerCount || n(1671)
      }))
    }, 6149: (e, t, n) => {
      "use strict";
      var i = n(5747).ReadStream, a = n(2413);

      function s() {
        "number" == typeof this.fd && this.close()
      }

      e.exports = function (e) {
        return e instanceof i ? function (e) {
          return e.destroy(), "function" == typeof e.close && e.on("open", s), e
        }(e) : e instanceof a ? ("function" == typeof e.destroy && e.destroy(), e) : e
      }
    }, 4331: e => {
      "use strict";

      function t(e, t) {
        return function (n) {
          for (var i = new Array(arguments.length), a = this, s = "error" === e ? n : null, o = 0; o < i.length; o++) i[o] = arguments[o];
          t(s, a, e, i)
        }
      }

      e.exports = function (e, n) {
        if (!Array.isArray(e)) throw new TypeError("arg must be an array of [ee, events...] arrays");
        for (var i = [], a = 0; a < e.length; a++) {
          var s = e[a];
          if (!Array.isArray(s) || s.length < 2) throw new TypeError("each array member must be [ee, events...]");
          for (var o = s[0], r = 1; r < s.length; r++) {
            var c = s[r], _ = t(c, E);
            o.on(c, _), i.push({ee: o, event: c, fn: _})
          }
        }

        function E() {
          p(), n.apply(null, arguments)
        }

        function p() {
          for (var e, t = 0; t < i.length; t++) (e = i[t]).ee.removeListener(e.event, e.fn)
        }

        function u(e) {
          n = e
        }

        return u.cancel = p, u
      }
    }, 517: e => {
      "use strict";
      e.exports = function (e) {
        return String(e).replace(n, "$1�$2").replace(t, encodeURI)
      };
      var t = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g,
        n = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g
    }, 5573: e => {
      "use strict";
      var t = /["'&<>]/;
      e.exports = function (e) {
        var n, i = "" + e, a = t.exec(i);
        if (!a) return i;
        var s = "", o = 0, r = 0;
        for (o = a.index; o < i.length; o++) {
          switch (i.charCodeAt(o)) {
            case 34:
              n = "&quot;";
              break;
            case 38:
              n = "&amp;";
              break;
            case 39:
              n = "&#39;";
              break;
            case 60:
              n = "&lt;";
              break;
            case 62:
              n = "&gt;";
              break;
            default:
              continue
          }
          r !== o && (s += i.substring(r, o)), r = o + 1, s += n
        }
        return r !== o ? s + i.substring(r, o) : s
      }
    }, 9635: e => {
      "use strict";
      var t = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;

      function n(e) {
        var t = e && Date.parse(e);
        return "number" == typeof t ? t : NaN
      }

      e.exports = function (e, i) {
        var a = e["if-modified-since"], s = e["if-none-match"];
        if (!a && !s) return !1;
        var o = e["cache-control"];
        if (o && t.test(o)) return !1;
        if (s && "*" !== s) {
          var r = i.etag;
          if (!r) return !1;
          for (var c = !0, _ = function (e) {
            for (var t = 0, n = [], i = 0, a = 0, s = e.length; a < s; a++) switch (e.charCodeAt(a)) {
              case 32:
                i === t && (i = t = a + 1);
                break;
              case 44:
                n.push(e.substring(i, t)), i = t = a + 1;
                break;
              default:
                t = a + 1
            }
            return n.push(e.substring(i, t)), n
          }(s), E = 0; E < _.length; E++) {
            var p = _[E];
            if (p === r || p === "W/" + r || "W/" + p === r) {
              c = !1;
              break
            }
          }
          if (c) return !1
        }
        if (a) {
          var u = i["last-modified"];
          if (!(u && n(u) <= n(a))) return !1
        }
        return !0
      }
    }, 6560: e => {
      "use strict";
      e.exports = (e, t = process.argv) => {
        const n = e.startsWith("-") ? "" : 1 === e.length ? "-" : "--", i = t.indexOf(n + e), a = t.indexOf("--");
        return -1 !== i && (-1 === a || i < a)
      }
    }, 659: (e, t, n) => {
      var i = n(8559), a = n(251);

      function s(e, t, n, a) {
        if (!e) throw i(t, n, a)
      }

      e.exports = s, s.equal = function (e, t, n, i, a) {
        s(e == t, n, i, a)
      }, s.notEqual = function (e, t, n, i, a) {
        s(e != t, n, i, a)
      }, s.ok = function (e, t, n, i) {
        s(e, t, n, i)
      }, s.strictEqual = function (e, t, n, i, a) {
        s(e === t, n, i, a)
      }, s.notStrictEqual = function (e, t, n, i, a) {
        s(e !== t, n, i, a)
      }, s.deepEqual = function (e, t, n, i, o) {
        s(a(e, t), n, i, o)
      }, s.notDeepEqual = function (e, t, n, i, o) {
        s(!a(e, t), n, i, o)
      }
    }, 8559: (e, t, n) => {
      "use strict";
      var i, a, s, o = n(412)("http-errors"), r = n(6644), c = n(4917), _ = n(4378), E = n(2953);

      function p(e) {
        return Number(String(e).charAt(0) + "00")
      }

      function u(e, t) {
        var n = Object.getOwnPropertyDescriptor(e, "name");
        n && n.configurable && (n.value = t, Object.defineProperty(e, "name", n))
      }

      e.exports = function e() {
        for (var t, n, i = 500, a = {}, s = 0; s < arguments.length; s++) {
          var r = arguments[s];
          if (r instanceof Error) i = (t = r).status || t.statusCode || i; else switch (typeof r) {
            case"string":
              n = r;
              break;
            case"number":
              i = r, 0 !== s && o("non-first-argument status code; replace with createError(" + r + ", ...)");
              break;
            case"object":
              a = r
          }
        }
        "number" == typeof i && (i < 400 || i >= 600) && o("non-error status code; use only 4xx or 5xx status codes"), ("number" != typeof i || !c[i] && (i < 400 || i >= 600)) && (i = 500);
        var _ = e[i] || e[p(i)];
        for (var E in t || (t = _ ? new _(n) : new Error(n || c[i]), Error.captureStackTrace(t, e)), _ && t instanceof _ && t.status === i || (t.expose = i < 500, t.status = t.statusCode = i), a) "status" !== E && "statusCode" !== E && (t[E] = a[E]);
        return t
      }, e.exports.HttpError = function () {
        function e() {
          throw new TypeError("cannot construct abstract class")
        }

        return _(e, Error), e
      }(), i = e.exports, a = c.codes, s = e.exports.HttpError, a.forEach((function (e) {
        var t, n = E(c[e]);
        switch (p(e)) {
          case 400:
            t = function (e, t, n) {
              var i = t.match(/Error$/) ? t : t + "Error";

              function a(e) {
                var t = null != e ? e : c[n], s = new Error(t);
                return Error.captureStackTrace(s, a), r(s, a.prototype), Object.defineProperty(s, "message", {
                  enumerable: !0,
                  configurable: !0,
                  value: t,
                  writable: !0
                }), Object.defineProperty(s, "name", {enumerable: !1, configurable: !0, value: i, writable: !0}), s
              }

              return _(a, e), u(a, i), a.prototype.status = n, a.prototype.statusCode = n, a.prototype.expose = !0, a
            }(s, n, e);
            break;
          case 500:
            t = function (e, t, n) {
              var i = t.match(/Error$/) ? t : t + "Error";

              function a(e) {
                var t = null != e ? e : c[n], s = new Error(t);
                return Error.captureStackTrace(s, a), r(s, a.prototype), Object.defineProperty(s, "message", {
                  enumerable: !0,
                  configurable: !0,
                  value: t,
                  writable: !0
                }), Object.defineProperty(s, "name", {enumerable: !1, configurable: !0, value: i, writable: !0}), s
              }

              return _(a, e), u(a, i), a.prototype.status = n, a.prototype.statusCode = n, a.prototype.expose = !1, a
            }(s, n, e)
        }
        t && (i[e] = t, i[n] = t)
      })), i["I'mateapot"] = o.function(i.ImATeapot, '"I\'mateapot"; use "ImATeapot" instead')
    }, 9009: (e, t, n) => {
      "use strict";
      var i, a = n(412)("http-errors"), s = n(9310), o = n(4917), r = n(4378), c = n(2953);

      function _(e) {
        return Number(String(e).charAt(0) + "00")
      }

      function E(e, t) {
        var n = Object.getOwnPropertyDescriptor(e, "name");
        n && n.configurable && (n.value = t, Object.defineProperty(e, "name", n))
      }

      function p(e) {
        return "Error" !== e.substr(-5) ? e + "Error" : e
      }

      e.exports = function e() {
        for (var t, n, i = 500, s = {}, r = 0; r < arguments.length; r++) {
          var c = arguments[r];
          if (c instanceof Error) i = (t = c).status || t.statusCode || i; else switch (typeof c) {
            case"string":
              n = c;
              break;
            case"number":
              i = c, 0 !== r && a("non-first-argument status code; replace with createError(" + c + ", ...)");
              break;
            case"object":
              s = c
          }
        }
        "number" == typeof i && (i < 400 || i >= 600) && a("non-error status code; use only 4xx or 5xx status codes"), ("number" != typeof i || !o[i] && (i < 400 || i >= 600)) && (i = 500);
        var E = e[i] || e[_(i)];
        for (var p in t || (t = E ? new E(n) : new Error(n || o[i]), Error.captureStackTrace(t, e)), E && t instanceof E && t.status === i || (t.expose = i < 500, t.status = t.statusCode = i), s) "status" !== p && "statusCode" !== p && (t[p] = s[p]);
        return t
      }, e.exports.HttpError = function () {
        function e() {
          throw new TypeError("cannot construct abstract class")
        }

        return r(e, Error), e
      }(), e.exports.isHttpError = (i = e.exports.HttpError, function (e) {
        return !(!e || "object" != typeof e) && (e instanceof i || e instanceof Error && "boolean" == typeof e.expose && "number" == typeof e.statusCode && e.status === e.statusCode)
      }), function (e, t, n) {
        t.forEach((function (t) {
          var i, a = c(o[t]);
          switch (_(t)) {
            case 400:
              i = function (e, t, n) {
                var i = p(t);

                function a(e) {
                  var t = null != e ? e : o[n], r = new Error(t);
                  return Error.captureStackTrace(r, a), s(r, a.prototype), Object.defineProperty(r, "message", {
                    enumerable: !0,
                    configurable: !0,
                    value: t,
                    writable: !0
                  }), Object.defineProperty(r, "name", {enumerable: !1, configurable: !0, value: i, writable: !0}), r
                }

                return r(a, e), E(a, i), a.prototype.status = n, a.prototype.statusCode = n, a.prototype.expose = !0, a
              }(n, a, t);
              break;
            case 500:
              i = function (e, t, n) {
                var i = p(t);

                function a(e) {
                  var t = null != e ? e : o[n], r = new Error(t);
                  return Error.captureStackTrace(r, a), s(r, a.prototype), Object.defineProperty(r, "message", {
                    enumerable: !0,
                    configurable: !0,
                    value: t,
                    writable: !0
                  }), Object.defineProperty(r, "name", {enumerable: !1, configurable: !0, value: i, writable: !0}), r
                }

                return r(a, e), E(a, i), a.prototype.status = n, a.prototype.statusCode = n, a.prototype.expose = !1, a
              }(n, a, t)
          }
          i && (e[t] = i, e[a] = i)
        })), e["I'mateapot"] = a.function(e.ImATeapot, '"I\'mateapot"; use "ImATeapot" instead')
      }(e.exports, o.codes, e.exports.HttpError)
    }, 9310: e => {
      "use strict";
      e.exports = Object.setPrototypeOf || ({__proto__: []} instanceof Array ? function (e, t) {
        return e.__proto__ = t, e
      } : function (e, t) {
        for (var n in t) Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
        return e
      })
    }, 4378: (e, t, n) => {
      try {
        var i = n(1669);
        if ("function" != typeof i.inherits) throw"";
        e.exports = i.inherits
      } catch (t) {
        e.exports = n(5717)
      }
    }, 5717: e => {
      "function" == typeof Object.create ? e.exports = function (e, t) {
        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }))
      } : e.exports = function (e, t) {
        if (t) {
          e.super_ = t;
          var n = function () {
          };
          n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
        }
      }
    }, 8662: e => {
      "use strict";
      var t = Object.prototype.toString, n = Function.prototype.toString, i = /^\s*(?:function)?\*/,
        a = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, s = Object.getPrototypeOf,
        o = function () {
          if (!a) return !1;
          try {
            return Function("return function*() {}")()
          } catch (e) {
          }
        }(), r = o ? s(o) : {};
      e.exports = function (e) {
        return "function" == typeof e && (!!i.test(n.call(e)) || (a ? s(e) === r : "[object GeneratorFunction]" === t.call(e)))
      }
    }, 5826: e => {
      var t = {}.toString;
      e.exports = Array.isArray || function (e) {
        return "[object Array]" == t.call(e)
      }
    }, 3559: (e, t, n) => {
      "use strict";
      var i = n(2341), a = n(6417);

      function s(e, t, n) {
        if (t || (t = "sha1"), n || (n = "base64"), !(this instanceof s)) return new s(e, t, n);
        if (!e || !(0 in e)) throw new Error("Keys must be provided.");

        function o(e, i) {
          return a.createHmac(t, i).update(e).digest(n).replace(/\/|\+|=/g, (function (e) {
            return {"/": "_", "+": "-", "=": ""}[e]
          }))
        }

        this.sign = function (t) {
          return o(t, e[0])
        }, this.verify = function (e, t) {
          return this.index(e, t) > -1
        }, this.index = function (t, n) {
          for (var a = 0, s = e.length; a < s; a++) if (i(n, o(t, e[a]))) return a;
          return -1
        }
      }

      s.sign = s.verify = s.index = function () {
        throw new Error("Usage: require('keygrip')(<array-of-keys>)")
      }, e.exports = s
    }, 4127: e => {
      "use strict";
      e.exports = function (e) {
        if (!Array.isArray(e)) throw new TypeError("Middleware stack must be an array!");
        for (const t of e) if ("function" != typeof t) throw new TypeError("Middleware must be composed of functions!");
        return function (t, n) {
          let i = -1;
          return function a(s) {
            if (s <= i) return Promise.reject(new Error("next() called multiple times"));
            i = s;
            let o = e[s];
            if (s === e.length && (o = n), !o) return Promise.resolve();
            try {
              return Promise.resolve(o(t, a.bind(null, s + 1)))
            } catch (e) {
              return Promise.reject(e)
            }
          }(0)
        }
      }
    }, 9954: (e, t, n) => {
      "use strict";
      const i = n(8333), a = n(5817);

      function s(e) {
        if ("function" != typeof e) throw new TypeError("middleware must be a function");
        if ("GeneratorFunction" !== e.constructor.name) return e;
        const t = function (t, n) {
          return i.call(t, e.call(t, function* (e) {
            return yield e()
          }(n)))
        };
        return t._name = e._name || e.name, t
      }

      e.exports = s, s.compose = function (e) {
        return Array.isArray(e) || (e = Array.from(arguments)), a(e.map(s))
      }, s.back = function (e) {
        if ("function" != typeof e) throw new TypeError("middleware must be a function");
        if ("GeneratorFunction" === e.constructor.name) return e;
        const t = function* (t) {
          let n = this, a = !1;
          yield Promise.resolve(e(n, (function () {
            return a ? Promise.reject(new Error("next() called multiple times")) : (a = !0, i.call(n, t))
          })))
        };
        return t._name = e._name || e.name, t
      }
    }, 5817: (e, t, n) => {
      "use strict";
      const i = n(5845);
      e.exports = function (e) {
        if (!Array.isArray(e)) throw new TypeError("Middleware stack must be an array!");
        for (const t of e) if ("function" != typeof t) throw new TypeError("Middleware must be composed of functions!");
        return function (t, n) {
          let a = -1;
          return function s(o) {
            if (o <= a) return i.reject(new Error("next() called multiple times"));
            a = o;
            let r = e[o];
            if (o === e.length && (r = n), !r) return i.resolve();
            try {
              return i.resolve(r(t, (function () {
                return s(o + 1)
              })))
            } catch (e) {
              return i.reject(e)
            }
          }(0)
        }
      }
    }, 4319: (e, t, n) => {
      const {pathToRegexp: i, compile: a, parse: s} = n(1068), {parse: o, format: r} = n(8835);

      function c(e, t, n, a) {
        this.opts = a || {}, this.name = this.opts.name || null, this.methods = [], this.paramNames = [], this.stack = Array.isArray(n) ? n : [n];
        for (let e = 0; e < t.length; e++) {
          const n = this.methods.push(t[e].toUpperCase());
          "GET" === this.methods[n - 1] && this.methods.unshift("HEAD")
        }
        for (let n = 0; n < this.stack.length; n++) {
          const i = typeof this.stack[n];
          if ("function" !== i) throw new Error(`${t.toString()} \`${this.opts.name || e}\`: \`middleware\` must be a function, not \`${i}\``)
        }
        this.path = e, this.regexp = i(e, this.paramNames, this.opts)
      }

      function _(e) {
        try {
          return decodeURIComponent(e)
        } catch (t) {
          return e
        }
      }

      e.exports = c, c.prototype.match = function (e) {
        return this.regexp.test(e)
      }, c.prototype.params = function (e, t, n) {
        const i = n || {};
        for (let e = t.length, n = 0; n < e; n++) if (this.paramNames[n]) {
          const e = t[n];
          i[this.paramNames[n].name] = e ? _(e) : e
        }
        return i
      }, c.prototype.captures = function (e) {
        return this.opts.ignoreCaptures ? [] : e.match(this.regexp).slice(1)
      }, c.prototype.url = function (e, t) {
        let n = e;
        const i = this.path.replace(/\(\.\*\)/g, "");
        "object" != typeof e && (n = Array.prototype.slice.call(arguments), "object" == typeof n[n.length - 1] && (t = n[n.length - 1], n = n.slice(0, n.length - 1)));
        const c = a(i, t);
        let _;
        const E = s(i);
        let p = {};
        if (n instanceof Array) for (let e = E.length, t = 0, i = 0; t < e; t++) E[t].name && (p[E[t].name] = n[i++]); else E.some((e => e.name)) ? p = e : t || (t = e);
        return _ = c(p), t && t.query ? (_ = o(_), "string" == typeof t.query ? _.search = t.query : (_.search = void 0, _.query = t.query), r(_)) : _
      }, c.prototype.param = function (e, t) {
        const n = this.stack, i = this.paramNames, a = function (n, i) {
          return t.call(this, n.params[e], n, i)
        };
        a.param = e;
        const s = i.map((function (e) {
          return e.name
        })), o = s.indexOf(e);
        return o > -1 && n.some((function (e, t) {
          if (!e.param || s.indexOf(e.param) > o) return n.splice(t, 0, a), !0
        })), this
      }, c.prototype.setPrefix = function (e) {
        return this.path && (this.path = "/" !== this.path || !0 === this.opts.strict ? `${e}${this.path}` : e, this.paramNames = [], this.regexp = i(this.path, this.paramNames, this.opts)), this
      }
    }, 9529: (e, t, n) => {
      const i = n(4033)("koa-router"), a = n(4127), s = n(9009), o = n(8873), r = n(4319), {pathToRegexp: c} = n(1068);

      function _(e) {
        if (!(this instanceof _)) return new _(e);
        this.opts = e || {}, this.methods = this.opts.methods || ["HEAD", "OPTIONS", "GET", "PUT", "PATCH", "POST", "DELETE"], this.params = {}, this.stack = []
      }

      e.exports = _;
      for (let e = 0; e < o.length; e++) {
        function E(e) {
          _.prototype[e] = function (t, n, i) {
            return "string" == typeof n || n instanceof RegExp ? i = Array.prototype.slice.call(arguments, 2) : (i = Array.prototype.slice.call(arguments, 1), n = t, t = null), this.register(n, [e], i, {name: t}), this
          }
        }

        E(o[e])
      }
      _.prototype.del = _.prototype.delete, _.prototype.use = function () {
        const e = this, t = Array.prototype.slice.call(arguments);
        let n;
        if (Array.isArray(t[0]) && "string" == typeof t[0][0]) {
          let n = t[0];
          for (let i = 0; i < n.length; i++) {
            const a = n[i];
            e.use.apply(e, [a].concat(t.slice(1)))
          }
          return this
        }
        const i = "string" == typeof t[0];
        i && (n = t.shift());
        for (let s = 0; s < t.length; s++) {
          const o = t[s];
          if (o.router) {
            const t = Object.assign(Object.create(_.prototype), o.router, {stack: o.router.stack.slice(0)});
            for (let i = 0; i < t.stack.length; i++) {
              const a = t.stack[i], s = Object.assign(Object.create(r.prototype), a);
              n && s.setPrefix(n), e.opts.prefix && s.setPrefix(e.opts.prefix), e.stack.push(s), t.stack[i] = s
            }
            if (e.params) {
              function a(n) {
                const i = n;
                for (let n = 0; n < i.length; n++) {
                  const a = i[n];
                  t.param(a, e.params[a])
                }
              }

              a(Object.keys(e.params))
            }
          } else {
            const t = [];
            c(e.opts.prefix || "", t);
            const a = e.opts.prefix && t.length;
            e.register(n || "([^/]*)", [], o, {end: !1, ignoreCaptures: !i && !a})
          }
        }
        return this
      }, _.prototype.prefix = function (e) {
        e = e.replace(/\/$/, ""), this.opts.prefix = e;
        for (let t = 0; t < this.stack.length; t++) this.stack[t].setPrefix(e);
        return this
      }, _.prototype.routes = _.prototype.middleware = function () {
        const e = this;
        let t = function (t, n) {
          i("%s %s", t.method, t.path);
          const s = e.opts.routerPath || t.routerPath || t.path, o = e.match(s, t.method);
          let r;
          if (t.matched ? t.matched.push.apply(t.matched, o.path) : t.matched = o.path, t.router = e, !o.route) return n();
          const c = o.pathAndMethod, _ = c[c.length - 1];
          return t._matchedRoute = _.path, _.name && (t._matchedRouteName = _.name), r = c.reduce((function (e, t) {
            return e.push((function (e, n) {
              return e.captures = t.captures(s, e.captures), e.params = e.request.params = t.params(s, e.captures, e.params), e.routerPath = t.path, e.routerName = t.name, e._matchedRoute = t.path, t.name && (e._matchedRouteName = t.name), n()
            })), e.concat(t.stack)
          }), []), a(r)(t, n)
        };
        return t.router = this, t
      }, _.prototype.allowedMethods = function (e) {
        e = e || {};
        const t = this.methods;
        return function (n, i) {
          return i().then((function () {
            const i = {};
            if (!n.status || 404 === n.status) {
              for (let e = 0; e < n.matched.length; e++) {
                const t = n.matched[e];
                for (let e = 0; e < t.methods.length; e++) {
                  const n = t.methods[e];
                  i[n] = n
                }
              }
              const a = Object.keys(i);
              if (~t.indexOf(n.method)) {
                if (a.length) if ("OPTIONS" === n.method) n.status = 200, n.body = "", n.set("Allow", a.join(", ")); else if (!i[n.method]) {
                  if (e.throw) throw"function" == typeof e.methodNotAllowed ? e.methodNotAllowed() : new s.MethodNotAllowed;
                  n.status = 405, n.set("Allow", a.join(", "))
                }
              } else {
                if (e.throw) throw"function" == typeof e.notImplemented ? e.notImplemented() : new s.NotImplemented;
                n.status = 501, n.set("Allow", a.join(", "))
              }
            }
          }))
        }
      }, _.prototype.all = function (e, t, n) {
        return "string" == typeof t ? n = Array.prototype.slice.call(arguments, 2) : (n = Array.prototype.slice.call(arguments, 1), t = e, e = null), this.register(t, o, n, {name: e}), this
      }, _.prototype.redirect = function (e, t, n) {
        return "/" !== e[0] && (e = this.url(e)), "/" === t[0] || t.includes("://") || (t = this.url(t)), this.all(e, (e => {
          e.redirect(t), e.status = n || 301
        }))
      }, _.prototype.register = function (e, t, n, a) {
        a = a || {};
        const s = this, o = this.stack;
        if (Array.isArray(e)) {
          for (let i = 0; i < e.length; i++) {
            const o = e[i];
            s.register.call(s, o, t, n, a)
          }
          return this
        }
        const c = new r(e, t, n, {
          end: !1 !== a.end || a.end,
          name: a.name,
          sensitive: a.sensitive || this.opts.sensitive || !1,
          strict: a.strict || this.opts.strict || !1,
          prefix: a.prefix || this.opts.prefix || "",
          ignoreCaptures: a.ignoreCaptures
        });
        this.opts.prefix && c.setPrefix(this.opts.prefix);
        for (let e = 0; e < Object.keys(this.params).length; e++) {
          const t = Object.keys(this.params)[e];
          c.param(t, this.params[t])
        }
        return o.push(c), i("defined route %s %s", c.methods, c.path), c
      }, _.prototype.route = function (e) {
        const t = this.stack;
        for (let n = t.length, i = 0; i < n; i++) if (t[i].name && t[i].name === e) return t[i];
        return !1
      }, _.prototype.url = function (e, t) {
        const n = this.route(e);
        if (n) {
          const e = Array.prototype.slice.call(arguments, 1);
          return n.url.apply(n, e)
        }
        return new Error("No route found for name: " + e)
      }, _.prototype.match = function (e, t) {
        const n = this.stack;
        let a;
        const s = {path: [], pathAndMethod: [], route: !1};
        for (let o = n.length, r = 0; r < o; r++) a = n[r], i("test %s %s", a.path, a.regexp), a.match(e) && (s.path.push(a), (0 === a.methods.length || ~a.methods.indexOf(t)) && (s.pathAndMethod.push(a), a.methods.length && (s.route = !0)));
        return s
      }, _.prototype.param = function (e, t) {
        this.params[e] = t;
        for (let n = 0; n < this.stack.length; n++) this.stack[n].param(e, t);
        return this
      }, _.url = function (e) {
        const t = Array.prototype.slice.call(arguments, 1);
        return r.prototype.url.apply({path: e}, t)
      }
    }, 7317: (e, t, n) => {
      t.formatArgs = function (t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        let i = 0, a = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e => {
          "%%" !== e && (i++, "%c" === e && (a = i))
        })), t.splice(a, 0, n)
      }, t.save = function (e) {
        try {
          e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
        } catch (e) {
        }
      }, t.load = function () {
        let e;
        try {
          e = t.storage.getItem("debug")
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
      }, t.useColors = function () {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      }, t.storage = function () {
        try {
          return localStorage
        } catch (e) {
        }
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {
      }), e.exports = n(7849)(t);
      const {formatters: i} = e.exports;
      i.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message
        }
      }
    }, 7849: (e, t, n) => {
      e.exports = function (e) {
        function t(e) {
          let n;

          function s(...e) {
            if (!s.enabled) return;
            const i = s, a = Number(new Date), o = a - (n || a);
            i.diff = o, i.prev = n, i.curr = a, n = a, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
            let r = 0;
            e[0] = e[0].replace(/%([a-zA-Z%])/g, ((n, a) => {
              if ("%%" === n) return n;
              r++;
              const s = t.formatters[a];
              if ("function" == typeof s) {
                const t = e[r];
                n = s.call(i, t), e.splice(r, 1), r--
              }
              return n
            })), t.formatArgs.call(i, e), (i.log || t.log).apply(i, e)
          }

          return s.namespace = e, s.enabled = t.enabled(e), s.useColors = t.useColors(), s.color = t.selectColor(e), s.destroy = i, s.extend = a, "function" == typeof t.init && t.init(s), t.instances.push(s), s
        }

        function i() {
          const e = t.instances.indexOf(this);
          return -1 !== e && (t.instances.splice(e, 1), !0)
        }

        function a(e, n) {
          const i = t(this.namespace + (void 0 === n ? ":" : n) + e);
          return i.log = this.log, i
        }

        function s(e) {
          return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }

        return t.debug = t, t.default = t, t.coerce = function (e) {
          return e instanceof Error ? e.stack || e.message : e
        }, t.disable = function () {
          const e = [...t.names.map(s), ...t.skips.map(s).map((e => "-" + e))].join(",");
          return t.enable(""), e
        }, t.enable = function (e) {
          let n;
          t.save(e), t.names = [], t.skips = [];
          const i = ("string" == typeof e ? e : "").split(/[\s,]+/), a = i.length;
          for (n = 0; n < a; n++) i[n] && ("-" === (e = i[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
          for (n = 0; n < t.instances.length; n++) {
            const e = t.instances[n];
            e.enabled = t.enabled(e.namespace)
          }
        }, t.enabled = function (e) {
          if ("*" === e[e.length - 1]) return !0;
          let n, i;
          for (n = 0, i = t.skips.length; n < i; n++) if (t.skips[n].test(e)) return !1;
          for (n = 0, i = t.names.length; n < i; n++) if (t.names[n].test(e)) return !0;
          return !1
        }, t.humanize = n(7898), Object.keys(e).forEach((n => {
          t[n] = e[n]
        })), t.instances = [], t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function (e) {
          let n = 0;
          for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
          return t.colors[Math.abs(n) % t.colors.length]
        }, t.enable(t.load()), t
      }
    }, 4033: (e, t, n) => {
      "undefined" == typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs ? e.exports = n(7317) : e.exports = n(1931)
    }, 1931: (e, t, n) => {
      const i = n(3867), a = n(1669);
      t.init = function (e) {
        e.inspectOpts = {};
        const n = Object.keys(t.inspectOpts);
        for (let i = 0; i < n.length; i++) e.inspectOpts[n[i]] = t.inspectOpts[n[i]]
      }, t.log = function (...e) {
        return process.stderr.write(a.format(...e) + "\n")
      }, t.formatArgs = function (n) {
        const {namespace: i, useColors: a} = this;
        if (a) {
          const t = this.color, a = "[3" + (t < 8 ? t : "8;5;" + t), s = `  ${a};1m${i} [0m`;
          n[0] = s + n[0].split("\n").join("\n" + s), n.push(a + "m+" + e.exports.humanize(this.diff) + "[0m")
        } else n[0] = (t.inspectOpts.hideDate ? "" : (new Date).toISOString() + " ") + i + " " + n[0]
      }, t.save = function (e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG
      }, t.load = function () {
        return process.env.DEBUG
      }, t.useColors = function () {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : i.isatty(process.stderr.fd)
      }, t.colors = [6, 2, 3, 4, 5, 1];
      try {
        const e = n(2130);
        e && (e.stderr || e).level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
      } catch (e) {
      }
      t.inspectOpts = Object.keys(process.env).filter((e => /^debug_/i.test(e))).reduce(((e, t) => {
        const n = t.substring(6).toLowerCase().replace(/_([a-z])/g, ((e, t) => t.toUpperCase()));
        let i = process.env[t];
        return i = !!/^(yes|on|true|enabled)$/i.test(i) || !/^(no|off|false|disabled)$/i.test(i) && ("null" === i ? null : Number(i)), e[n] = i, e
      }), {}), e.exports = n(7849)(t);
      const {formatters: s} = e.exports;
      s.o = function (e) {
        return this.inspectOpts.colors = this.useColors, a.inspect(e, this.inspectOpts).replace(/\s*\n\s*/g, " ")
      }, s.O = function (e) {
        return this.inspectOpts.colors = this.useColors, a.inspect(e, this.inspectOpts)
      }
    }, 7898: e => {
      var t = 1e3, n = 60 * t, i = 60 * n, a = 24 * i;

      function s(e, t, n, i) {
        var a = t >= 1.5 * n;
        return Math.round(e / n) + " " + i + (a ? "s" : "")
      }

      e.exports = function (e, o) {
        o = o || {};
        var r, c, _ = typeof e;
        if ("string" === _ && e.length > 0) return function (e) {
          if (!((e = String(e)).length > 100)) {
            var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
            if (s) {
              var o = parseFloat(s[1]);
              switch ((s[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                  return 315576e5 * o;
                case"weeks":
                case"week":
                case"w":
                  return 6048e5 * o;
                case"days":
                case"day":
                case"d":
                  return o * a;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                  return o * i;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                  return o * n;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                  return o * t;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                  return o;
                default:
                  return
              }
            }
          }
        }(e);
        if ("number" === _ && isFinite(e)) return o.long ? (r = e, (c = Math.abs(r)) >= a ? s(r, c, a, "day") : c >= i ? s(r, c, i, "hour") : c >= n ? s(r, c, n, "minute") : c >= t ? s(r, c, t, "second") : r + " ms") : function (e) {
          var s = Math.abs(e);
          return s >= a ? Math.round(e / a) + "d" : s >= i ? Math.round(e / i) + "h" : s >= n ? Math.round(e / n) + "m" : s >= t ? Math.round(e / t) + "s" : e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
      }
    }, 7570: (e, t, n) => {
      const i = n(5747), a = n(1669), s = n(4312)("koa-send"), o = n(9988), r = n(9009), c = n(2357),
        _ = a.promisify(i.stat), E = a.promisify(i.access);

      async function p(e) {
        try {
          return await E(e), !0
        } catch (e) {
          return !1
        }
      }

      const {normalize: u, basename: l, extname: R, resolve: A, parse: d, sep: N} = n(5622);
      e.exports = async function (e, t, n = {}) {
        c(e, "koa context required"), c(t, "pathname required"), s('send "%s" %j', t, n);
        const a = n.root ? u(A(n.root)) : "", E = "/" === t[t.length - 1];
        t = t.substr(d(t).root.length);
        const T = n.index, f = n.maxage || n.maxAge || 0, m = n.immutable || !1, h = n.hidden || !1,
          I = !1 !== n.format, O = !!Array.isArray(n.extensions) && n.extensions, C = !1 !== n.brotli,
          g = !1 !== n.gzip, S = n.setHeaders;
        if (S && "function" != typeof S) throw new TypeError("option setHeaders must be function");
        if (-1 === (t = function (e) {
          try {
            return decodeURIComponent(e)
          } catch (e) {
            return -1
          }
        }(t))) return e.throw(400, "failed to decode");
        if (T && E && (t += T), t = o(a, t), !h && function (e, t) {
          t = t.substr(e.length).split(N);
          for (let e = 0; e < t.length; e++) if ("." === t[e][0]) return !0;
          return !1
        }(a, t)) return;
        let D, x = "";
        if ("br" === e.acceptsEncodings("br", "identity") && C && await p(t + ".br") ? (t += ".br", e.set("Content-Encoding", "br"), e.res.removeHeader("Content-Length"), x = ".br") : "gzip" === e.acceptsEncodings("gzip", "identity") && g && await p(t + ".gz") && (t += ".gz", e.set("Content-Encoding", "gzip"), e.res.removeHeader("Content-Length"), x = ".gz"), O && !/\./.exec(l(t))) {
          const e = [].concat(O);
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            if ("string" != typeof i) throw new TypeError("option extensions must be array of strings or false");
            if (/^\./.exec(i) || (i = "." + i), await p(`${t}${i}`)) {
              t = `${t}${i}`;
              break
            }
          }
        }
        try {
          if (D = await _(t), D.isDirectory()) {
            if (!I || !T) return;
            t += "/" + T, D = await _(t)
          }
        } catch (e) {
          if (["ENOENT", "ENAMETOOLONG", "ENOTDIR"].includes(e.code)) throw r(404, e);
          throw e.status = 500, e
        }
        if (S && S(e.res, t, D), e.set("Content-Length", D.size), e.response.get("Last-Modified") || e.set("Last-Modified", D.mtime.toUTCString()), !e.response.get("Cache-Control")) {
          const t = ["max-age=" + (f / 1e3 | 0)];
          m && t.push("immutable"), e.set("Cache-Control", t.join(","))
        }
        var v, L;
        return e.type || (e.type = (v = t, R("" !== (L = x) ? l(v, L) : v))), e.body = i.createReadStream(t), t
      }
    }, 6394: (e, t, n) => {
      t.formatArgs = function (t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const n = "color: " + this.color;
        t.splice(1, 0, n, "color: inherit");
        let i = 0, a = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e => {
          "%%" !== e && (i++, "%c" === e && (a = i))
        })), t.splice(a, 0, n)
      }, t.save = function (e) {
        try {
          e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
        } catch (e) {
        }
      }, t.load = function () {
        let e;
        try {
          e = t.storage.getItem("debug")
        } catch (e) {
        }
        return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
      }, t.useColors = function () {
        return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      }, t.storage = function () {
        try {
          return localStorage
        } catch (e) {
        }
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {
      }), e.exports = n(8294)(t);
      const {formatters: i} = e.exports;
      i.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message
        }
      }
    }, 8294: (e, t, n) => {
      e.exports = function (e) {
        function t(e) {
          let n;

          function s(...e) {
            if (!s.enabled) return;
            const i = s, a = Number(new Date), o = a - (n || a);
            i.diff = o, i.prev = n, i.curr = a, n = a, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
            let r = 0;
            e[0] = e[0].replace(/%([a-zA-Z%])/g, ((n, a) => {
              if ("%%" === n) return n;
              r++;
              const s = t.formatters[a];
              if ("function" == typeof s) {
                const t = e[r];
                n = s.call(i, t), e.splice(r, 1), r--
              }
              return n
            })), t.formatArgs.call(i, e), (i.log || t.log).apply(i, e)
          }

          return s.namespace = e, s.enabled = t.enabled(e), s.useColors = t.useColors(), s.color = t.selectColor(e), s.destroy = i, s.extend = a, "function" == typeof t.init && t.init(s), t.instances.push(s), s
        }

        function i() {
          const e = t.instances.indexOf(this);
          return -1 !== e && (t.instances.splice(e, 1), !0)
        }

        function a(e, n) {
          const i = t(this.namespace + (void 0 === n ? ":" : n) + e);
          return i.log = this.log, i
        }

        function s(e) {
          return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }

        return t.debug = t, t.default = t, t.coerce = function (e) {
          return e instanceof Error ? e.stack || e.message : e
        }, t.disable = function () {
          const e = [...t.names.map(s), ...t.skips.map(s).map((e => "-" + e))].join(",");
          return t.enable(""), e
        }, t.enable = function (e) {
          let n;
          t.save(e), t.names = [], t.skips = [];
          const i = ("string" == typeof e ? e : "").split(/[\s,]+/), a = i.length;
          for (n = 0; n < a; n++) i[n] && ("-" === (e = i[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
          for (n = 0; n < t.instances.length; n++) {
            const e = t.instances[n];
            e.enabled = t.enabled(e.namespace)
          }
        }, t.enabled = function (e) {
          if ("*" === e[e.length - 1]) return !0;
          let n, i;
          for (n = 0, i = t.skips.length; n < i; n++) if (t.skips[n].test(e)) return !1;
          for (n = 0, i = t.names.length; n < i; n++) if (t.names[n].test(e)) return !0;
          return !1
        }, t.humanize = n(2571), Object.keys(e).forEach((n => {
          t[n] = e[n]
        })), t.instances = [], t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function (e) {
          let n = 0;
          for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
          return t.colors[Math.abs(n) % t.colors.length]
        }, t.enable(t.load()), t
      }
    }, 4312: (e, t, n) => {
      "undefined" == typeof process || "renderer" === process.type || !0 === process.browser || process.__nwjs ? e.exports = n(6394) : e.exports = n(4833)
    }, 4833: (e, t, n) => {
      const i = n(3867), a = n(1669);
      t.init = function (e) {
        e.inspectOpts = {};
        const n = Object.keys(t.inspectOpts);
        for (let i = 0; i < n.length; i++) e.inspectOpts[n[i]] = t.inspectOpts[n[i]]
      }, t.log = function (...e) {
        return process.stderr.write(a.format(...e) + "\n")
      }, t.formatArgs = function (n) {
        const {namespace: i, useColors: a} = this;
        if (a) {
          const t = this.color, a = "[3" + (t < 8 ? t : "8;5;" + t), s = `  ${a};1m${i} [0m`;
          n[0] = s + n[0].split("\n").join("\n" + s), n.push(a + "m+" + e.exports.humanize(this.diff) + "[0m")
        } else n[0] = (t.inspectOpts.hideDate ? "" : (new Date).toISOString() + " ") + i + " " + n[0]
      }, t.save = function (e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG
      }, t.load = function () {
        return process.env.DEBUG
      }, t.useColors = function () {
        return "colors" in t.inspectOpts ? Boolean(t.inspectOpts.colors) : i.isatty(process.stderr.fd)
      }, t.colors = [6, 2, 3, 4, 5, 1];
      try {
        const e = n(2130);
        e && (e.stderr || e).level >= 2 && (t.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221])
      } catch (e) {
      }
      t.inspectOpts = Object.keys(process.env).filter((e => /^debug_/i.test(e))).reduce(((e, t) => {
        const n = t.substring(6).toLowerCase().replace(/_([a-z])/g, ((e, t) => t.toUpperCase()));
        let i = process.env[t];
        return i = !!/^(yes|on|true|enabled)$/i.test(i) || !/^(no|off|false|disabled)$/i.test(i) && ("null" === i ? null : Number(i)), e[n] = i, e
      }), {}), e.exports = n(8294)(t);
      const {formatters: s} = e.exports;
      s.o = function (e) {
        return this.inspectOpts.colors = this.useColors, a.inspect(e, this.inspectOpts).replace(/\s*\n\s*/g, " ")
      }, s.O = function (e) {
        return this.inspectOpts.colors = this.useColors, a.inspect(e, this.inspectOpts)
      }
    }, 2571: e => {
      var t = 1e3, n = 60 * t, i = 60 * n, a = 24 * i;

      function s(e, t, n, i) {
        var a = t >= 1.5 * n;
        return Math.round(e / n) + " " + i + (a ? "s" : "")
      }

      e.exports = function (e, o) {
        o = o || {};
        var r, c, _ = typeof e;
        if ("string" === _ && e.length > 0) return function (e) {
          if (!((e = String(e)).length > 100)) {
            var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
            if (s) {
              var o = parseFloat(s[1]);
              switch ((s[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                  return 315576e5 * o;
                case"weeks":
                case"week":
                case"w":
                  return 6048e5 * o;
                case"days":
                case"day":
                case"d":
                  return o * a;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                  return o * i;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                  return o * n;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                  return o * t;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                  return o;
                default:
                  return
              }
            }
          }
        }(e);
        if ("number" === _ && isFinite(e)) return o.long ? (r = e, (c = Math.abs(r)) >= a ? s(r, c, a, "day") : c >= i ? s(r, c, i, "hour") : c >= n ? s(r, c, n, "minute") : c >= t ? s(r, c, t, "second") : r + " ms") : function (e) {
          var s = Math.abs(e);
          return s >= a ? Math.round(e / a) + "d" : s >= i ? Math.round(e / i) + "h" : s >= n ? Math.round(e / n) + "m" : s >= t ? Math.round(e / t) + "s" : e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
      }
    }, 3999: (e, t, n) => {
      "use strict";
      const i = n(5158)("koa-static"), {resolve: a} = n(5622), s = n(2357), o = n(7570);
      e.exports = function (e, t) {
        return t = Object.assign({}, t), s(e, "root directory is required to serve files"), i('static "%s" %j', e, t), t.root = a(e), !1 !== t.index && (t.index = t.index || "index.html"), t.defer ? async function (e, n) {
          if (await n(), ("HEAD" === e.method || "GET" === e.method) && null == e.body && 404 === e.status) try {
            await o(e, e.path, t)
          } catch (e) {
            if (404 !== e.status) throw e
          }
        } : async function (e, n) {
          let i = !1;
          if ("HEAD" === e.method || "GET" === e.method) try {
            i = await o(e, e.path, t)
          } catch (e) {
            if (404 !== e.status) throw e
          }
          i || await n()
        }
      }
    }, 7064: (e, t, n) => {
      "use strict";
      const i = n(8662), a = n(5158)("koa:application"), s = n(338), o = n(2201), r = n(4127), c = n(1076), _ = n(4356),
        E = n(4917), p = n(8614), u = n(1669), l = n(2413), R = n(8605), A = n(5445), d = n(9954),
        N = n(412)("koa"), {HttpError: T} = n(9009);
      e.exports = class extends p {
        constructor(e) {
          super(), e = e || {}, this.proxy = e.proxy || !1, this.subdomainOffset = e.subdomainOffset || 2, this.proxyIpHeader = e.proxyIpHeader || "X-Forwarded-For", this.maxIpsCount = e.maxIpsCount || 0, this.env = e.env || "production", e.keys && (this.keys = e.keys), this.middleware = [], this.context = Object.create(c), this.request = Object.create(_), this.response = Object.create(o), u.inspect.custom && (this[u.inspect.custom] = this.inspect)
        }

        listen(...e) {
          return a("listen"), R.createServer(this.callback()).listen(...e)
        }

        toJSON() {
          return A(this, ["subdomainOffset", "proxy", "env"])
        }

        inspect() {
          return this.toJSON()
        }

        use(e) {
          if ("function" != typeof e) throw new TypeError("middleware must be a function!");
          return i(e) && (N("Support for generators will be removed in v3. See the documentation for examples of how to convert old middleware https://github.com/koajs/koa/blob/master/docs/migration.md"), e = d(e)), a("use %s", e._name || e.name || "-"), this.middleware.push(e), this
        }

        callback() {
          const e = r(this.middleware);
          return this.listenerCount("error") || this.on("error", this.onerror), (t, n) => {
            const i = this.createContext(t, n);
            return this.handleRequest(i, e)
          }
        }

        handleRequest(e, t) {
          const n = e.res;
          n.statusCode = 404;
          const i = t => e.onerror(t);
          return s(n, i), t(e).then((() => function (e) {
            if (!1 === e.respond) return;
            if (!e.writable) return;
            const t = e.res;
            let n = e.body;
            const i = e.status;
            if (E.empty[i]) return e.body = null, t.end();
            if ("HEAD" === e.method) {
              if (!t.headersSent && !e.response.has("Content-Length")) {
                const {length: t} = e.response;
                Number.isInteger(t) && (e.length = t)
              }
              return t.end()
            }
            return null == n ? e.response._explicitNullBody ? (e.response.remove("Content-Type"), e.response.remove("Transfer-Encoding"), t.end()) : (n = e.req.httpVersionMajor >= 2 ? String(i) : e.message || String(i), t.headersSent || (e.type = "text", e.length = Buffer.byteLength(n)), t.end(n)) : Buffer.isBuffer(n) || "string" == typeof n ? t.end(n) : n instanceof l ? n.pipe(t) : (n = JSON.stringify(n), t.headersSent || (e.length = Buffer.byteLength(n)), void t.end(n))
          }(e))).catch(i)
        }

        createContext(e, t) {
          const n = Object.create(this.context), i = n.request = Object.create(this.request),
            a = n.response = Object.create(this.response);
          return n.app = i.app = a.app = this, n.req = i.req = a.req = e, n.res = i.res = a.res = t, i.ctx = a.ctx = n, i.response = a, a.request = i, n.originalUrl = i.originalUrl = e.url, n.state = {}, n
        }

        onerror(e) {
          if (!("[object Error]" === Object.prototype.toString.call(e) || e instanceof Error)) throw new TypeError(u.format("non-error thrown: %j", e));
          if (404 === e.status || e.expose) return;
          if (this.silent) return;
          const t = e.stack || e.toString();
          console.error(`\n${t.replace(/^/gm, "  ")}\n`)
        }
      }, e.exports.HttpError = T
    }, 1076: (e, t, n) => {
      "use strict";
      const i = n(1669), a = n(9009), s = n(659), o = n(8603), r = n(4917), c = n(8933), _ = Symbol("context#cookies"),
        E = e.exports = {
          inspect() {
            return this === E ? this : this.toJSON()
          }, toJSON() {
            return {
              request: this.request.toJSON(),
              response: this.response.toJSON(),
              app: this.app.toJSON(),
              originalUrl: this.originalUrl,
              req: "<original node req>",
              res: "<original node res>",
              socket: "<original node socket>"
            }
          }, assert: s, throw(...e) {
            throw a(...e)
          }, onerror(e) {
            if (null == e) return;
            "[object Error]" === Object.prototype.toString.call(e) || e instanceof Error || (e = new Error(i.format("non-error thrown: %j", e)));
            let t = !1;
            if (!this.headerSent && this.writable || (t = e.headerSent = !0), this.app.emit("error", e, this), t) return;
            const {res: n} = this;
            "function" == typeof n.getHeaderNames ? n.getHeaderNames().forEach((e => n.removeHeader(e))) : n._headers = {}, this.set(e.headers), this.type = "text";
            let a = e.status || e.statusCode;
            "ENOENT" === e.code && (a = 404), "number" == typeof a && r[a] || (a = 500);
            const s = r[a], o = e.expose ? e.message : s;
            this.status = e.status = a, this.length = Buffer.byteLength(o), n.end(o)
          }, get cookies() {
            return this[_] || (this[_] = new c(this.req, this.res, {
              keys: this.app.keys,
              secure: this.request.secure
            })), this[_]
          }, set cookies(e) {
            this[_] = e
          }
        };
      i.inspect.custom && (e.exports[i.inspect.custom] = e.exports.inspect), o(E, "response").method("attachment").method("redirect").method("remove").method("vary").method("has").method("set").method("append").method("flushHeaders").access("status").access("message").access("body").access("length").access("type").access("lastModified").access("etag").getter("headerSent").getter("writable"), o(E, "request").method("acceptsLanguages").method("acceptsEncodings").method("acceptsCharsets").method("accepts").method("get").method("is").access("querystring").access("idempotent").access("socket").access("search").access("method").access("query").access("path").access("url").access("accept").getter("origin").getter("href").getter("subdomains").getter("protocol").getter("host").getter("hostname").getter("URL").getter("header").getter("headers").getter("secure").getter("stale").getter("fresh").getter("ips").getter("ip")
    }, 4356: (e, t, n) => {
      "use strict";
      const i = n(8835).URL, a = n(1631), s = n(9078), o = n(7811), r = n(8835).format, c = n(8317), _ = n(1191),
        E = n(273), p = n(9635), u = n(5445), l = n(1669), R = Symbol("context#ip");
      e.exports = {
        get header() {
          return this.req.headers
        }, set header(e) {
          this.req.headers = e
        }, get headers() {
          return this.req.headers
        }, set headers(e) {
          this.req.headers = e
        }, get url() {
          return this.req.url
        }, set url(e) {
          this.req.url = e
        }, get origin() {
          return `${this.protocol}://${this.host}`
        }, get href() {
          return /^https?:\/\//i.test(this.originalUrl) ? this.originalUrl : this.origin + this.originalUrl
        }, get method() {
          return this.req.method
        }, set method(e) {
          this.req.method = e
        }, get path() {
          return c(this.req).pathname
        }, set path(e) {
          const t = c(this.req);
          t.pathname !== e && (t.pathname = e, t.path = null, this.url = r(t))
        }, get query() {
          const e = this.querystring, t = this._querycache = this._querycache || {};
          return t[e] || (t[e] = _.parse(e))
        }, set query(e) {
          this.querystring = _.stringify(e)
        }, get querystring() {
          return this.req && c(this.req).query || ""
        }, set querystring(e) {
          const t = c(this.req);
          t.search !== "?" + e && (t.search = e, t.path = null, this.url = r(t))
        }, get search() {
          return this.querystring ? "?" + this.querystring : ""
        }, set search(e) {
          this.querystring = e
        }, get host() {
          let e = this.app.proxy && this.get("X-Forwarded-Host");
          return e || (this.req.httpVersionMajor >= 2 && (e = this.get(":authority")), e || (e = this.get("Host"))), e ? e.split(/\s*,\s*/, 1)[0] : ""
        }, get hostname() {
          const e = this.host;
          return e ? "[" === e[0] ? this.URL.hostname || "" : e.split(":", 1)[0] : ""
        }, get URL() {
          if (!this.memoizedURL) {
            const e = this.originalUrl || "";
            try {
              this.memoizedURL = new i(`${this.origin}${e}`)
            } catch (e) {
              this.memoizedURL = Object.create(null)
            }
          }
          return this.memoizedURL
        }, get fresh() {
          const e = this.method, t = this.ctx.status;
          return ("GET" === e || "HEAD" === e) && (t >= 200 && t < 300 || 304 === t) && p(this.header, this.response.header)
        }, get stale() {
          return !this.fresh
        }, get idempotent() {
          return !!~["GET", "HEAD", "PUT", "DELETE", "OPTIONS", "TRACE"].indexOf(this.method)
        }, get socket() {
          return this.req.socket
        }, get charset() {
          try {
            const {parameters: e} = o.parse(this.req);
            return e.charset || ""
          } catch (e) {
            return ""
          }
        }, get length() {
          const e = this.get("Content-Length");
          if ("" !== e) return ~~e
        }, get protocol() {
          if (this.socket.encrypted) return "https";
          if (!this.app.proxy) return "http";
          const e = this.get("X-Forwarded-Proto");
          return e ? e.split(/\s*,\s*/, 1)[0] : "http"
        }, get secure() {
          return "https" === this.protocol
        }, get ips() {
          const e = this.app.proxy, t = this.get(this.app.proxyIpHeader);
          let n = e && t ? t.split(/\s*,\s*/) : [];
          return this.app.maxIpsCount > 0 && (n = n.slice(-this.app.maxIpsCount)), n
        }, get ip() {
          return this[R] || (this[R] = this.ips[0] || this.socket.remoteAddress || ""), this[R]
        }, set ip(e) {
          this[R] = e
        }, get subdomains() {
          const e = this.app.subdomainOffset, t = this.hostname;
          return a.isIP(t) ? [] : t.split(".").reverse().slice(e)
        }, get accept() {
          return this._accept || (this._accept = s(this.req))
        }, set accept(e) {
          this._accept = e
        }, accepts(...e) {
          return this.accept.types(...e)
        }, acceptsEncodings(...e) {
          return this.accept.encodings(...e)
        }, acceptsCharsets(...e) {
          return this.accept.charsets(...e)
        }, acceptsLanguages(...e) {
          return this.accept.languages(...e)
        }, is(e, ...t) {
          return E(this.req, e, ...t)
        }, get type() {
          const e = this.get("Content-Type");
          return e ? e.split(";")[0] : ""
        }, get(e) {
          const t = this.req;
          switch (e = e.toLowerCase()) {
            case"referer":
            case"referrer":
              return t.headers.referrer || t.headers.referer || "";
            default:
              return t.headers[e] || ""
          }
        }, inspect() {
          if (this.req) return this.toJSON()
        }, toJSON() {
          return u(this, ["method", "url", "header"])
        }
      }, l.inspect.custom && (e.exports[l.inspect.custom] = e.exports.inspect)
    }, 2201: (e, t, n) => {
      "use strict";
      const i = n(7389), a = n(3601), s = n(338), o = n(5573), r = n(273).is, c = n(4917), _ = n(6149), E = n(2357),
        p = n(5622).extname, u = n(5181), l = n(5445), R = n(1669), A = n(517), d = n(2413);
      e.exports = {
        get socket() {
          return this.res.socket
        }, get header() {
          const {res: e} = this;
          return "function" == typeof e.getHeaders ? e.getHeaders() : e._headers || {}
        }, get headers() {
          return this.header
        }, get status() {
          return this.res.statusCode
        }, set status(e) {
          this.headerSent || (E(Number.isInteger(e), "status code must be a number"), E(e >= 100 && e <= 999, "invalid status code: " + e), this._explicitStatus = !0, this.res.statusCode = e, this.req.httpVersionMajor < 2 && (this.res.statusMessage = c[e]), this.body && c.empty[e] && (this.body = null))
        }, get message() {
          return this.res.statusMessage || c[this.status]
        }, set message(e) {
          this.res.statusMessage = e
        }, get body() {
          return this._body
        }, set body(e) {
          const t = this._body;
          if (this._body = e, null == e) return c.empty[this.status] || (this.status = 204), null === e && (this._explicitNullBody = !0), this.remove("Content-Type"), this.remove("Content-Length"), void this.remove("Transfer-Encoding");
          this._explicitStatus || (this.status = 200);
          const n = !this.has("Content-Type");
          return "string" == typeof e ? (n && (this.type = /^\s*</.test(e) ? "html" : "text"), void (this.length = Buffer.byteLength(e))) : Buffer.isBuffer(e) ? (n && (this.type = "bin"), void (this.length = e.length)) : e instanceof d ? (s(this.res, _.bind(null, e)), t != e && (e.once("error", (e => this.ctx.onerror(e))), null != t && this.remove("Content-Length")), void (n && (this.type = "bin"))) : (this.remove("Content-Length"), void (this.type = "json"))
        }, set length(e) {
          this.set("Content-Length", e)
        }, get length() {
          if (this.has("Content-Length")) return parseInt(this.get("Content-Length"), 10) || 0;
          const {body: e} = this;
          return !e || e instanceof d ? void 0 : "string" == typeof e ? Buffer.byteLength(e) : Buffer.isBuffer(e) ? e.length : Buffer.byteLength(JSON.stringify(e))
        }, get headerSent() {
          return this.res.headersSent
        }, vary(e) {
          this.headerSent || u(this.res, e)
        }, redirect(e, t) {
          if ("back" === e && (e = this.ctx.get("Referrer") || t || "/"), this.set("Location", A(e)), c.redirect[this.status] || (this.status = 302), this.ctx.accepts("html")) return e = o(e), this.type = "text/html; charset=utf-8", void (this.body = `Redirecting to <a href="${e}">${e}</a>.`);
          this.type = "text/plain; charset=utf-8", this.body = `Redirecting to ${e}.`
        }, attachment(e, t) {
          e && (this.type = p(e)), this.set("Content-Disposition", i(e, t))
        }, set type(e) {
          (e = a(e)) ? this.set("Content-Type", e) : this.remove("Content-Type")
        }, set lastModified(e) {
          "string" == typeof e && (e = new Date(e)), this.set("Last-Modified", e.toUTCString())
        }, get lastModified() {
          const e = this.get("last-modified");
          if (e) return new Date(e)
        }, set etag(e) {
          /^(W\/)?"/.test(e) || (e = `"${e}"`), this.set("ETag", e)
        }, get etag() {
          return this.get("ETag")
        }, get type() {
          const e = this.get("Content-Type");
          return e ? e.split(";", 1)[0] : ""
        }, is(e, ...t) {
          return r(this.type, e, ...t)
        }, get(e) {
          return this.header[e.toLowerCase()] || ""
        }, has(e) {
          return "function" == typeof this.res.hasHeader ? this.res.hasHeader(e) : e.toLowerCase() in this.headers
        }, set(e, t) {
          if (!this.headerSent) if (2 === arguments.length) Array.isArray(t) ? t = t.map((e => "string" == typeof e ? e : String(e))) : "string" != typeof t && (t = String(t)), this.res.setHeader(e, t); else for (const t in e) this.set(t, e[t])
        }, append(e, t) {
          const n = this.get(e);
          return n && (t = Array.isArray(n) ? n.concat(t) : [n].concat(t)), this.set(e, t)
        }, remove(e) {
          this.headerSent || this.res.removeHeader(e)
        }, get writable() {
          if (this.res.writableEnded || this.res.finished) return !1;
          const e = this.res.socket;
          return !e || e.writable
        }, inspect() {
          if (!this.res) return;
          const e = this.toJSON();
          return e.body = this.body, e
        }, toJSON() {
          return l(this, ["status", "message", "header"])
        }, flushHeaders() {
          this.res.flushHeaders()
        }
      }, R.inspect.custom && (e.exports[R.inspect.custom] = e.exports.inspect)
    }, 2577: (e, t) => {
      var n = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g,
        i = /^[\u0020-\u007e\u0080-\u00ff]+$/, a = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/, s = /\\([\u0000-\u007f])/g,
        o = /([\\"])/g, r = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/, c = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/,
        _ = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;

      function E(e) {
        var t = String(e);
        if (a.test(t)) return t;
        if (t.length > 0 && !i.test(t)) throw new TypeError("invalid parameter value");
        return '"' + t.replace(o, "\\$1") + '"'
      }

      t.format = function (e) {
        if (!e || "object" != typeof e) throw new TypeError("argument obj is required");
        var t = e.parameters, n = e.subtype, i = e.suffix, s = e.type;
        if (!s || !c.test(s)) throw new TypeError("invalid type");
        if (!n || !r.test(n)) throw new TypeError("invalid subtype");
        var o = s + "/" + n;
        if (i) {
          if (!c.test(i)) throw new TypeError("invalid suffix");
          o += "+" + i
        }
        if (t && "object" == typeof t) for (var _, p = Object.keys(t).sort(), u = 0; u < p.length; u++) {
          if (_ = p[u], !a.test(_)) throw new TypeError("invalid parameter name");
          o += "; " + _ + "=" + E(t[_])
        }
        return o
      }, t.parse = function (e) {
        if (!e) throw new TypeError("argument string is required");
        if ("object" == typeof e && (e = function (e) {
          return "function" == typeof e.getHeader ? e.getHeader("content-type") : "object" == typeof e.headers ? e.headers && e.headers["content-type"] : void 0
        }(e)), "string" != typeof e) throw new TypeError("argument string is required to be a string");
        var t, i, a, o = e.indexOf(";"), r = function (e) {
          var t = _.exec(e.toLowerCase());
          if (!t) throw new TypeError("invalid media type");
          var n, i = t[1], a = t[2], s = a.lastIndexOf("+");
          return -1 !== s && (n = a.substr(s + 1), a = a.substr(0, s)), {type: i, subtype: a, suffix: n}
        }(-1 !== o ? e.substr(0, o) : e), c = {};
        for (n.lastIndex = o; i = n.exec(e);) {
          if (i.index !== o) throw new TypeError("invalid parameter format");
          o += i[0].length, t = i[1].toLowerCase(), '"' === (a = i[2])[0] && (a = a.substr(1, a.length - 2).replace(s, "$1")), c[t] = a
        }
        if (-1 !== o && o !== e.length) throw new TypeError("invalid parameter format");
        return r.parameters = c, r
      }
    }, 8873: (e, t, n) => {
      "use strict";
      var i = n(8605);
      e.exports = i.METHODS && i.METHODS.map((function (e) {
        return e.toLowerCase()
      })) || ["get", "post", "put", "head", "delete", "options", "trace", "copy", "lock", "mkcol", "move", "purge", "propfind", "proppatch", "unlock", "report", "mkactivity", "checkout", "merge", "m-search", "notify", "subscribe", "unsubscribe", "patch", "search", "connect"]
    }, 3313: e => {
      "use strict";
      e.exports = JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["ecma","es"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/mrb-publish+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana"},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana"},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["keynote"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana"},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana"},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana"},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana"},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana"},"image/avcs":{"source":"iana"},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shex":{"extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana"},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}')
    }, 5234: (e, t, n) => {
      e.exports = n(3313)
    }, 983: (e, t, n) => {
      "use strict";
      var i, a, s, o = n(5234), r = n(5622).extname, c = /^\s*([^;\s]*)(?:;|\s|$)/, _ = /^text\//i;

      function E(e) {
        if (!e || "string" != typeof e) return !1;
        var t = c.exec(e), n = t && o[t[1].toLowerCase()];
        return n && n.charset ? n.charset : !(!t || !_.test(t[1])) && "UTF-8"
      }

      t.charset = E, t.charsets = {lookup: E}, t.contentType = function (e) {
        if (!e || "string" != typeof e) return !1;
        var n = -1 === e.indexOf("/") ? t.lookup(e) : e;
        if (!n) return !1;
        if (-1 === n.indexOf("charset")) {
          var i = t.charset(n);
          i && (n += "; charset=" + i.toLowerCase())
        }
        return n
      }, t.extension = function (e) {
        if (!e || "string" != typeof e) return !1;
        var n = c.exec(e), i = n && t.extensions[n[1].toLowerCase()];
        return !(!i || !i.length) && i[0]
      }, t.extensions = Object.create(null), t.lookup = function (e) {
        if (!e || "string" != typeof e) return !1;
        var n = r("x." + e).toLowerCase().substr(1);
        return n && t.types[n] || !1
      }, t.types = Object.create(null), i = t.extensions, a = t.types, s = ["nginx", "apache", void 0, "iana"], Object.keys(o).forEach((function (e) {
        var t = o[e], n = t.extensions;
        if (n && n.length) {
          i[e] = n;
          for (var r = 0; r < n.length; r++) {
            var c = n[r];
            if (a[c]) {
              var _ = s.indexOf(o[a[c]].source), E = s.indexOf(t.source);
              if ("application/octet-stream" !== a[c] && (_ > E || _ === E && "application/" === a[c].substr(0, 12))) continue
            }
            a[c] = e
          }
        }
      }))
    }, 7824: e => {
      var t = 1e3, n = 60 * t, i = 60 * n, a = 24 * i;

      function s(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
      }

      e.exports = function (e, o) {
        o = o || {};
        var r, c = typeof e;
        if ("string" === c && e.length > 0) return function (e) {
          if (!((e = String(e)).length > 100)) {
            var s = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (s) {
              var o = parseFloat(s[1]);
              switch ((s[2] || "ms").toLowerCase()) {
                case"years":
                case"year":
                case"yrs":
                case"yr":
                case"y":
                  return 315576e5 * o;
                case"days":
                case"day":
                case"d":
                  return o * a;
                case"hours":
                case"hour":
                case"hrs":
                case"hr":
                case"h":
                  return o * i;
                case"minutes":
                case"minute":
                case"mins":
                case"min":
                case"m":
                  return o * n;
                case"seconds":
                case"second":
                case"secs":
                case"sec":
                case"s":
                  return o * t;
                case"milliseconds":
                case"millisecond":
                case"msecs":
                case"msec":
                case"ms":
                  return o;
                default:
                  return
              }
            }
          }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return o.long ? s(r = e, a, "day") || s(r, i, "hour") || s(r, n, "minute") || s(r, t, "second") || r + " ms" : function (e) {
          return e >= a ? Math.round(e / a) + "d" : e >= i ? Math.round(e / i) + "h" : e >= n ? Math.round(e / n) + "m" : e >= t ? Math.round(e / t) + "s" : e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
      }
    }, 4426: (e, t, n) => {
      var i = Object.create(null);

      function a(e) {
        var t = i[e];
        if (void 0 !== t) return t;
        switch (e) {
          case"Connection":
            t = n(4623);
            break;
          case"ConnectionConfig":
            t = n(6561);
            break;
          case"Pool":
            t = n(7819);
            break;
          case"PoolCluster":
            t = n(1903);
            break;
          case"PoolConfig":
            t = n(7427);
            break;
          case"SqlString":
            t = n(1976);
            break;
          case"Types":
            t = n(5586);
            break;
          default:
            throw new Error("Cannot find class '" + e + "'")
        }
        return i[e] = t, t
      }

      t.createConnection = function (e) {
        return new (a("Connection"))({config: new (a("ConnectionConfig"))(e)})
      }, t.createPool = function (e) {
        return new (a("Pool"))({config: new (a("PoolConfig"))(e)})
      }, t.createPoolCluster = function (e) {
        return new (a("PoolCluster"))(e)
      }, t.createQuery = function (e, t, n) {
        return a("Connection").createQuery(e, t, n)
      }, t.escape = function (e, t, n) {
        return a("SqlString").escape(e, t, n)
      }, t.escapeId = function (e, t) {
        return a("SqlString").escapeId(e, t)
      }, t.format = function (e, t, n, i) {
        return a("SqlString").format(e, t, n, i)
      }, t.raw = function (e) {
        return a("SqlString").raw(e)
      }, Object.defineProperty(t, "Types", {get: a.bind(null, "Types")})
    }, 4623: (e, t, n) => {
      var i = n(6417), a = n(8614), s = n(1631), o = n(4016), r = n(6561), c = n(8776), _ = n(1976), E = n(8761),
        p = n(1669);

      function u(e) {
        a.EventEmitter.call(this), this.config = e.config, this._socket = e.socket, this._protocol = new c({
          config: this.config,
          connection: this
        }), this._connectCalled = !1, this.state = "disconnected", this.threadId = null
      }

      function l(e, t) {
        if ("function" == typeof t) {
          if (t.domain) return t;
          var n = process.domain;
          return n ? n.bind(t) : e ? function (e) {
            return function () {
              for (var t, n = []; process.domain;) n.shift(process.domain), process.domain.exit();
              try {
                t = e.apply(this, arguments)
              } finally {
                for (var i = 0; i < n.length; i++) n[i].enter()
              }
              return t
            }
          }(R(e, t)) : t
        }
      }

      function R(e, t) {
        return function () {
          a.usingDomains && e.domain ? (e.domain.enter(), t.apply(this, arguments), e.domain.exit()) : t.apply(this, arguments)
        }
      }

      e.exports = u, p.inherits(u, a.EventEmitter), u.createQuery = function (e, t, n) {
        if (e instanceof E) return e;
        var i = n, a = {};
        if ("function" == typeof e ? i = e : "object" == typeof e ? (a = Object.create(e), "function" == typeof t ? i = t : void 0 !== t && Object.defineProperty(a, "values", {value: t})) : (a.sql = e, "function" == typeof t ? i = t : void 0 !== t && (a.values = t)), void 0 !== i && void 0 === (i = l(null, i))) throw new TypeError("argument callback must be a function when provided");
        return new E(a, i)
      }, u.prototype.connect = function (e, t) {
        if (t || "function" != typeof e || (t = e, e = {}), !this._connectCalled) {
          this._connectCalled = !0, this._socket = this.config.socketPath ? s.createConnection(this.config.socketPath) : s.createConnection(this.config.port, this.config.host), a.usingDomains && (this._socket.domain = this.domain);
          var n = this;
          if (this._protocol.on("data", (function (e) {
            n._socket.write(e)
          })), this._socket.on("data", R(n, (function (e) {
            n._protocol.write(e)
          }))), this._protocol.on("end", (function () {
            n._socket.end()
          })), this._socket.on("end", R(n, (function () {
            n._protocol.end()
          }))), this._socket.on("error", this._handleNetworkError.bind(this)), this._socket.on("connect", this._handleProtocolConnect.bind(this)), this._protocol.on("handshake", this._handleProtocolHandshake.bind(this)), this._protocol.on("initialize", this._handleProtocolInitialize.bind(this)), this._protocol.on("unhandledError", this._handleProtocolError.bind(this)), this._protocol.on("drain", this._handleProtocolDrain.bind(this)), this._protocol.on("end", this._handleProtocolEnd.bind(this)), this._protocol.on("enqueue", this._handleProtocolEnqueue.bind(this)), this.config.connectTimeout) {
            var i = this._handleConnectTimeout.bind(this);
            this._socket.setTimeout(this.config.connectTimeout, i), this._socket.once("connect", (function () {
              this.setTimeout(0, i)
            }))
          }
        }
        this._protocol.handshake(e, l(this, t))
      }, u.prototype.changeUser = function (e, t) {
        t || "function" != typeof e || (t = e, e = {}), this._implyConnect();
        var n = e.charset ? r.getCharsetNumber(e.charset) : this.config.charsetNumber;
        return this._protocol.changeUser({
          user: e.user || this.config.user,
          password: e.password || this.config.password,
          database: e.database || this.config.database,
          timeout: e.timeout,
          charsetNumber: n,
          currentConfig: this.config
        }, l(this, t))
      }, u.prototype.beginTransaction = function (e, t) {
        return t || "function" != typeof e || (t = e, e = {}), (e = e || {}).sql = "START TRANSACTION", e.values = null, this.query(e, t)
      }, u.prototype.commit = function (e, t) {
        return t || "function" != typeof e || (t = e, e = {}), (e = e || {}).sql = "COMMIT", e.values = null, this.query(e, t)
      }, u.prototype.rollback = function (e, t) {
        return t || "function" != typeof e || (t = e, e = {}), (e = e || {}).sql = "ROLLBACK", e.values = null, this.query(e, t)
      }, u.prototype.query = function (e, t, n) {
        var i = u.createQuery(e, t, n);
        return i._connection = this, "object" == typeof e && "typeCast" in e || (i.typeCast = this.config.typeCast), i.sql && (i.sql = this.format(i.sql, i.values)), i._callback && (i._callback = l(this, i._callback)), this._implyConnect(), this._protocol._enqueue(i)
      }, u.prototype.ping = function (e, t) {
        t || "function" != typeof e || (t = e, e = {}), this._implyConnect(), this._protocol.ping(e, l(this, t))
      }, u.prototype.statistics = function (e, t) {
        t || "function" != typeof e || (t = e, e = {}), this._implyConnect(), this._protocol.stats(e, l(this, t))
      }, u.prototype.end = function (e, t) {
        var n = t, i = e;
        t || "function" != typeof e || (n = e, i = null), void 0 === (i = Object.create(i || null)).timeout && (i.timeout = 3e4), this._implyConnect(), this._protocol.quit(i, l(this, n))
      }, u.prototype.destroy = function () {
        this.state = "disconnected", this._implyConnect(), this._socket.destroy(), this._protocol.destroy()
      }, u.prototype.pause = function () {
        this._socket.pause(), this._protocol.pause()
      }, u.prototype.resume = function () {
        this._socket.resume(), this._protocol.resume()
      }, u.prototype.escape = function (e) {
        return _.escape(e, !1, this.config.timezone)
      }, u.prototype.escapeId = function (e) {
        return _.escapeId(e, !1)
      }, u.prototype.format = function (e, t) {
        return "function" == typeof this.config.queryFormat ? this.config.queryFormat.call(this, e, t, this.config.timezone) : _.format(e, t, this.config.stringifyObjects, this.config.timezone)
      }, o.TLSSocket ? u.prototype._startTLS = function (e) {
        var t = this;
        !function (n, i) {
          var a = null, s = null;
          try {
            a = o.createSecureContext({
              ca: n.ssl.ca,
              cert: n.ssl.cert,
              ciphers: n.ssl.ciphers,
              key: n.ssl.key,
              passphrase: n.ssl.passphrase
            })
          } catch (e) {
            s = e
          }
          !function (n, i) {
            if (n) e(n); else {
              t._socket.removeAllListeners("data"), t._protocol.removeAllListeners("data");
              var a = t.config.ssl.rejectUnauthorized, s = !1, r = new o.TLSSocket(t._socket, {
                rejectUnauthorized: a,
                requestCert: !0,
                secureContext: i,
                isServer: !1
              });
              r.on("_tlsError", (function (n) {
                s ? t._handleNetworkError(n) : e(n)
              })), r.pipe(t._protocol), t._protocol.on("data", (function (e) {
                r.write(e)
              })), r.on("secure", (function () {
                s = !0, e(a ? this.ssl.verifyError() : null)
              })), r._start()
            }
          }(s, a)
        }(this.config)
      } : u.prototype._startTLS = function (e) {
        var t = this, n = i.createCredentials({
          ca: this.config.ssl.ca,
          cert: this.config.ssl.cert,
          ciphers: this.config.ssl.ciphers,
          key: this.config.ssl.key,
          passphrase: this.config.ssl.passphrase
        }), a = this.config.ssl.rejectUnauthorized, s = !1, r = o.createSecurePair(n, !1, !0, a);
        r.on("error", (function (n) {
          s ? t._handleNetworkError(n) : e(n)
        })), this._socket.removeAllListeners("data"), this._protocol.removeAllListeners("data"), r.encrypted.pipe(this._socket), this._socket.on("data", (function (e) {
          r.encrypted.write(e)
        })), r.cleartext.pipe(this._protocol), this._protocol.on("data", (function (e) {
          r.cleartext.write(e)
        })), r.on("secure", (function () {
          if (s = !0, a) {
            var t = this.ssl.verifyError(), n = t;
            "string" == typeof n && ((n = new Error(t)).code = t), e(n)
          } else e()
        })), r._cycle = r.cycle, r.cycle = function () {
          return this.ssl && this.ssl.error && this.error(), this._cycle.apply(this, arguments)
        }
      }, u.prototype._handleConnectTimeout = function () {
        this._socket && (this._socket.setTimeout(0), this._socket.destroy());
        var e = new Error("connect ETIMEDOUT");
        e.errorno = "ETIMEDOUT", e.code = "ETIMEDOUT", e.syscall = "connect", this._handleNetworkError(e)
      }, u.prototype._handleNetworkError = function (e) {
        this._protocol.handleNetworkError(e)
      }, u.prototype._handleProtocolError = function (e) {
        this.state = "protocol_error", this.emit("error", e)
      }, u.prototype._handleProtocolDrain = function () {
        this.emit("drain")
      }, u.prototype._handleProtocolConnect = function () {
        this.state = "connected", this.emit("connect")
      }, u.prototype._handleProtocolHandshake = function () {
        this.state = "authenticated"
      }, u.prototype._handleProtocolInitialize = function (e) {
        this.threadId = e.threadId
      }, u.prototype._handleProtocolEnd = function (e) {
        this.state = "disconnected", this.emit("end", e)
      }, u.prototype._handleProtocolEnqueue = function (e) {
        this.emit("enqueue", e)
      }, u.prototype._implyConnect = function () {
        this._connectCalled || this.connect()
      }
    }, 6561: (e, t, n) => {
      var i = n(8835).parse, a = n(3778), s = n(2318), o = null;

      function r(e) {
        "string" == typeof e && (e = r.parseUrl(e)), this.host = e.host || "localhost", this.port = e.port || 3306, this.localAddress = e.localAddress, this.socketPath = e.socketPath, this.user = e.user || void 0, this.password = e.password || void 0, this.database = e.database, this.connectTimeout = void 0 === e.connectTimeout ? 1e4 : e.connectTimeout, this.insecureAuth = e.insecureAuth || !1, this.supportBigNumbers = e.supportBigNumbers || !1, this.bigNumberStrings = e.bigNumberStrings || !1, this.dateStrings = e.dateStrings || !1, this.debug = e.debug, this.trace = !1 !== e.trace, this.stringifyObjects = e.stringifyObjects || !1, this.timezone = e.timezone || "local", this.flags = e.flags || "", this.queryFormat = e.queryFormat, this.pool = e.pool || void 0, this.ssl = "string" == typeof e.ssl ? r.getSSLProfile(e.ssl) : e.ssl || !1, this.localInfile = void 0 === e.localInfile || e.localInfile, this.multipleStatements = e.multipleStatements || !1, this.typeCast = void 0 === e.typeCast || e.typeCast, " " === this.timezone[0] && (this.timezone = "+" + this.timezone.substr(1)), this.ssl && (this.ssl.rejectUnauthorized = !1 !== this.ssl.rejectUnauthorized), this.maxPacketSize = 0, this.charsetNumber = e.charset ? r.getCharsetNumber(e.charset) : e.charsetNumber || s.UTF8_GENERAL_CI;
        var t = r.getDefaultFlags(e);
        this.clientFlags = r.mergeFlags(t, e.flags)
      }

      e.exports = r, r.mergeFlags = function (e, t) {
        var n = r.parseFlagList(e), i = r.parseFlagList(t);
        for (var s in i) !1 !== n[s] && (n[s] = i[s]);
        var o = 0;
        for (var s in n) n[s] && (o |= a["CLIENT_" + s] || 0);
        return o
      }, r.getCharsetNumber = function (e) {
        var t = s[e.toUpperCase()];
        if (void 0 === t) throw new TypeError("Unknown charset '" + e + "'");
        return t
      }, r.getDefaultFlags = function (e) {
        var t = ["-COMPRESS", "-CONNECT_ATTRS", "+CONNECT_WITH_DB", "+FOUND_ROWS", "+IGNORE_SIGPIPE", "+IGNORE_SPACE", "+LOCAL_FILES", "+LONG_FLAG", "+LONG_PASSWORD", "+MULTI_RESULTS", "+ODBC", "-PLUGIN_AUTH", "+PROTOCOL_41", "+PS_MULTI_RESULTS", "+RESERVED", "+SECURE_CONNECTION", "+TRANSACTIONS"];
        return e && void 0 !== e.localInfile && !e.localInfile && t.push("-LOCAL_FILES"), e && e.multipleStatements && t.push("+MULTI_STATEMENTS"), t
      }, r.getSSLProfile = function (e) {
        o || (o = n(1075));
        var t = o[e];
        if (void 0 === t) throw new TypeError("Unknown SSL profile '" + e + "'");
        return t
      }, r.parseFlagList = function (e) {
        var t = Object.create(null);
        if (!e) return t;
        for (var n = Array.isArray(e) ? e : String(e || "").toUpperCase().split(/\s*,+\s*/), i = 0; i < n.length; i++) {
          var a = n[i], s = 1, o = a[0];
          void 0 !== o && ("-" !== o && "+" !== o && (s = 0, o = "+"), t[a.substr(s)] = "+" === o)
        }
        return t
      }, r.parseUrl = function (e) {
        var t = {host: (e = i(e, !0)).hostname, port: e.port, database: e.pathname.substr(1)};
        if (e.auth) {
          var n = e.auth.split(":");
          t.user = n.shift(), t.password = n.join(":")
        }
        if (e.query) for (var a in e.query) {
          var s = e.query[a];
          try {
            t[a] = JSON.parse(s)
          } catch (e) {
            t[a] = s
          }
        }
        return t
      }
    }, 7819: (e, t, n) => {
      var i = n(4426), a = n(4623), s = n(8614).EventEmitter, o = n(1669), r = n(4804);

      function c(e) {
        s.call(this), this.config = e.config, this.config.connectionConfig.pool = this, this._acquiringConnections = [], this._allConnections = [], this._freeConnections = [], this._connectionQueue = [], this._closed = !1
      }

      function _(e, t) {
        var n;
        -1 !== (n = e.indexOf(t)) && e.splice(n, 1)
      }

      e.exports = c, o.inherits(c, s), c.prototype.getConnection = function (e) {
        if (this._closed) {
          var t = new Error("Pool is closed.");
          return t.code = "POOL_CLOSED", void process.nextTick((function () {
            e(t)
          }))
        }
        var n, i = this;
        return this._freeConnections.length > 0 ? (n = this._freeConnections.shift(), void this.acquireConnection(n, e)) : 0 === this.config.connectionLimit || this._allConnections.length < this.config.connectionLimit ? (n = new r(this, {config: this.config.newConnectionConfig()}), this._acquiringConnections.push(n), this._allConnections.push(n), void n.connect({timeout: this.config.acquireTimeout}, (function (t) {
          if (_(i._acquiringConnections, n), i._closed && ((t = new Error("Pool is closed.")).code = "POOL_CLOSED"), t) return i._purgeConnection(n), void e(t);
          i.emit("connection", n), i.emit("acquire", n), e(null, n)
        }))) : void (this.config.waitForConnections ? this._enqueueCallback(e) : process.nextTick((function () {
          var t = new Error("No connections available.");
          t.code = "POOL_CONNLIMIT", e(t)
        })))
      }, c.prototype.acquireConnection = function (e, t) {
        if (e._pool !== this) throw new Error("Connection acquired from wrong pool.");
        var n = this._needsChangeUser(e), i = this;

        function a(a) {
          if (_(i._acquiringConnections, e), i._closed && ((a = new Error("Pool is closed.")).code = "POOL_CLOSED"), a) return i._connectionQueue.unshift(t), void i._purgeConnection(e);
          n && i.emit("connection", e), i.emit("acquire", e), t(null, e)
        }

        this._acquiringConnections.push(e), n ? (e.config = this.config.newConnectionConfig(), e.changeUser({timeout: this.config.acquireTimeout}, a)) : e.ping({timeout: this.config.acquireTimeout}, a)
      }, c.prototype.releaseConnection = function (e) {
        if (-1 === this._acquiringConnections.indexOf(e)) {
          if (e._pool) {
            if (e._pool !== this) throw new Error("Connection released to wrong pool");
            if (-1 !== this._freeConnections.indexOf(e)) throw new Error("Connection already released");
            this._freeConnections.push(e), this.emit("release", e)
          }
          this._closed ? this._connectionQueue.splice(0).forEach((function (e) {
            var t = new Error("Pool is closed.");
            t.code = "POOL_CLOSED", process.nextTick((function () {
              e(t)
            }))
          })) : this._connectionQueue.length && this.getConnection(this._connectionQueue.shift())
        }
      }, c.prototype.end = function (e) {
        this._closed = !0, "function" != typeof e && (e = function (e) {
          if (e) throw e
        });
        var t = !1, n = 0;

        function i(i) {
          !t && (i || --n <= 0) && (t = !0, e(i))
        }

        for (; 0 !== this._allConnections.length;) n++, this._purgeConnection(this._allConnections[0], i);
        0 === n && process.nextTick(i)
      }, c.prototype.query = function (e, t, n) {
        var i = a.createQuery(e, t, n);
        return "object" == typeof e && "typeCast" in e || (i.typeCast = this.config.connectionConfig.typeCast), this.config.connectionConfig.trace && (i._callSite = new Error), this.getConnection((function (e, t) {
          if (e) return i.on("error", (function () {
          })), void i.end(e);
          i.once("end", (function () {
            t.release()
          })), t.query(i)
        })), i
      }, c.prototype._enqueueCallback = function (e) {
        if (this.config.queueLimit && this._connectionQueue.length >= this.config.queueLimit) process.nextTick((function () {
          var t = new Error("Queue limit reached.");
          t.code = "POOL_ENQUEUELIMIT", e(t)
        })); else {
          var t = process.domain ? process.domain.bind(e) : e;
          this._connectionQueue.push(t), this.emit("enqueue")
        }
      }, c.prototype._needsChangeUser = function (e) {
        var t = e.config, n = this.config.connectionConfig;
        return t.user !== n.user || t.database !== n.database || t.password !== n.password || t.charsetNumber !== n.charsetNumber
      }, c.prototype._purgeConnection = function (e, t) {
        var n = t || function () {
        };
        "disconnected" === e.state && e.destroy(), this._removeConnection(e), "disconnected" === e.state || e._protocol._quitSequence ? process.nextTick(n) : e._realEnd(n)
      }, c.prototype._removeConnection = function (e) {
        e._pool = null, _(this._allConnections, e), _(this._freeConnections, e), this.releaseConnection(e)
      }, c.prototype.escape = function (e) {
        return i.escape(e, this.config.connectionConfig.stringifyObjects, this.config.connectionConfig.timezone)
      }, c.prototype.escapeId = function (e) {
        return i.escapeId(e, !1)
      }
    }, 1903: (e, t, n) => {
      var i = n(7819), a = n(7427), s = n(2221), o = n(9073), r = n(1669), c = n(8614).EventEmitter;

      function _(e) {
        c.call(this), e = e || {}, this._canRetry = void 0 === e.canRetry || e.canRetry, this._defaultSelector = e.defaultSelector || "RR", this._removeNodeErrorCount = e.removeNodeErrorCount || 5, this._restoreNodeTimeout = e.restoreNodeTimeout || 0, this._closed = !1, this._findCaches = Object.create(null), this._lastId = 0, this._namespaces = Object.create(null), this._nodes = Object.create(null)
      }

      function E() {
        var e;
        return e = "function" == typeof process.hrtime ? 1e3 * (e = process.hrtime())[0] + 1e-6 * e[1] : 1e3 * process.uptime(), Math.floor(e)
      }

      function p(e) {
        if (e) throw e
      }

      function u() {
      }

      e.exports = _, r.inherits(_, c), _.prototype.add = function (e, t) {
        if (this._closed) throw new Error("PoolCluster is closed.");
        var n = "object" == typeof e ? "CLUSTER::" + ++this._lastId : String(e);
        if (void 0 !== this._nodes[n]) throw new Error('Node ID "' + n + '" is already defined in PoolCluster.');
        var s = new a("object" != typeof e ? t : e);
        this._nodes[n] = {id: n, errorCount: 0, pool: new i({config: s}), _offlineUntil: 0}, this._clearFindCaches()
      }, _.prototype.end = function (e) {
        var t = void 0 !== e ? e : p;
        if ("function" != typeof t) throw TypeError("callback argument must be a function");
        if (this._closed) process.nextTick(t); else {
          this._closed = !0;
          for (var n = !1, i = Object.keys(this._nodes), a = 0, s = 0; s < i.length; s++) {
            var o = i[s], r = this._nodes[o];
            a++, r.pool.end(c)
          }
          0 === a && process.nextTick(c)
        }

        function c(e) {
          !n && (e || --a <= 0) && (n = !0, t(e))
        }
      }, _.prototype.of = function (e, t) {
        e = e || "*", t = (t = t || this._defaultSelector).toUpperCase(), void 0 === o[t] && (t = this._defaultSelector);
        var n = e + t;
        return void 0 === this._namespaces[n] && (this._namespaces[n] = new s(this, e, t)), this._namespaces[n]
      }, _.prototype.remove = function (e) {
        for (var t = this._findNodeIds(e, !0), n = 0; n < t.length; n++) {
          var i = this._getNode(t[n]);
          i && this._removeNode(i)
        }
      }, _.prototype.getConnection = function (e, t, n) {
        var i;
        "function" == typeof e ? (n = e, i = this.of()) : ("function" == typeof t && (n = t, t = this._defaultSelector), i = this.of(e, t)), i.getConnection(n)
      }, _.prototype._clearFindCaches = function () {
        this._findCaches = Object.create(null)
      }, _.prototype._decreaseErrorCount = function (e) {
        var t = e.errorCount;
        t > this._removeNodeErrorCount && (t = this._removeNodeErrorCount), t < 1 && (t = 1), e.errorCount = t - 1, e._offlineUntil && (e._offlineUntil = 0, this.emit("online", e.id))
      }, _.prototype._findNodeIds = function (e, t) {
        var n = 0, i = this._findCaches[e];
        if (void 0 === i) {
          var a = function (e) {
            if ("object" == typeof (t = e) && "[object RegExp]" === Object.prototype.toString.call(t)) return e;
            var t, n = e.replace(/([.+?^=!:${}()|\[\]\/\\])/g, "\\$1").replace(/\*/g, ".*");
            return new RegExp("^" + n + "$")
          }(e);
          i = Object.keys(this._nodes).filter((function (e) {
            return e.match(a)
          })), this._findCaches[e] = i
        }
        return t ? i : i.filter((function (e) {
          var t = this._getNode(e);
          return !t._offlineUntil || (n || (n = E()), t._offlineUntil <= n)
        }), this)
      }, _.prototype._getNode = function (e) {
        return this._nodes[e] || null
      }, _.prototype._increaseErrorCount = function (e) {
        var t = ++e.errorCount;
        if (!(this._removeNodeErrorCount > t)) {
          if (this._restoreNodeTimeout > 0) return e._offlineUntil = E() + this._restoreNodeTimeout, void this.emit("offline", e.id);
          this._removeNode(e), this.emit("remove", e.id)
        }
      }, _.prototype._getConnection = function (e, t) {
        var n = this;
        e.pool.getConnection((function (i, a) {
          if (i) return n._increaseErrorCount(e), void t(i);
          n._decreaseErrorCount(e), a._clusterId = e.id, t(null, a)
        }))
      }, _.prototype._removeNode = function (e) {
        delete this._nodes[e.id], this._clearFindCaches(), e.pool.end(u)
      }
    }, 7427: (e, t, n) => {
      var i = n(6561);

      function a(e) {
        "string" == typeof e && (e = i.parseUrl(e)), this.acquireTimeout = void 0 === e.acquireTimeout ? 1e4 : Number(e.acquireTimeout), this.connectionConfig = new i(e), this.waitForConnections = void 0 === e.waitForConnections || Boolean(e.waitForConnections), this.connectionLimit = void 0 === e.connectionLimit ? 10 : Number(e.connectionLimit), this.queueLimit = void 0 === e.queueLimit ? 0 : Number(e.queueLimit)
      }

      e.exports = a, a.prototype.newConnectionConfig = function () {
        var e = new i(this.connectionConfig);
        return e.clientFlags = this.connectionConfig.clientFlags, e.maxPacketSize = this.connectionConfig.maxPacketSize, e
      }
    }, 4804: (e, t, n) => {
      var i = n(1669).inherits, a = n(4623), s = n(8614);

      function o(e, t) {
        a.call(this, t), this._pool = e, s.usingDomains && (this.domain = e.domain), this.on("end", this._removeFromPool), this.on("error", (function (e) {
          e.fatal && this._removeFromPool()
        }))
      }

      e.exports = o, i(o, a), o.prototype.release = function () {
        var e = this._pool;
        if (e && !e._closed) return e.releaseConnection(this)
      }, o.prototype._realEnd = a.prototype.end, o.prototype.end = function () {
        console.warn("Calling conn.end() to release a pooled connection is deprecated. In next version calling conn.end() will be restored to default conn.end() behavior. Use conn.release() instead."), this.release()
      }, o.prototype.destroy = function () {
        a.prototype.destroy.apply(this, arguments), this._removeFromPool(this)
      }, o.prototype._removeFromPool = function () {
        if (this._pool && !this._pool._closed) {
          var e = this._pool;
          this._pool = null, e._purgeConnection(this)
        }
      }
    }, 2221: (e, t, n) => {
      var i = n(4623), a = n(9073);

      function s(e, t, n) {
        this._cluster = e, this._pattern = t, this._selector = new a[n]
      }

      e.exports = s, s.prototype.getConnection = function (e) {
        var t = this._getClusterNode(), n = this._cluster, i = this;
        if (null === t) {
          var a = null;
          return 0 !== this._cluster._findNodeIds(this._pattern, !0).length ? (a = new Error("Pool does not have online node.")).code = "POOL_NONEONLINE" : (a = new Error("Pool does not exist.")).code = "POOL_NOEXIST", void e(a)
        }
        n._getConnection(t, (function (t, a) {
          t && n._canRetry && 0 !== n._findNodeIds(i._pattern).length ? i.getConnection(e) : t ? e(t) : e(null, a)
        }))
      }, s.prototype.query = function (e, t, n) {
        var a = this._cluster, s = this._getClusterNode(), o = i.createQuery(e, t, n), r = this;
        if (null === s) {
          var c = null;
          return 0 !== this._cluster._findNodeIds(this._pattern, !0).length ? (c = new Error("Pool does not have online node.")).code = "POOL_NONEONLINE" : (c = new Error("Pool does not exist.")).code = "POOL_NOEXIST", process.nextTick((function () {
            o.on("error", (function () {
            })), o.end(c)
          })), o
        }
        return "object" == typeof e && "typeCast" in e || (o.typeCast = s.pool.config.connectionConfig.typeCast), s.pool.config.connectionConfig.trace && (o._callSite = new Error), a._getConnection(s, (function (e, t) {
          if (e && a._canRetry && 0 !== a._findNodeIds(r._pattern).length) r.query(o); else {
            if (e) return o.on("error", (function () {
            })), void o.end(e);
            o.once("end", (function () {
              t.release()
            })), t.query(o)
          }
        })), o
      }, s.prototype._getClusterNode = function () {
        var e, t = this._cluster._findNodeIds(this._pattern);
        switch (t.length) {
          case 0:
            e = null;
            break;
          case 1:
            e = t[0];
            break;
          default:
            e = this._selector(t)
        }
        return null !== e ? this._cluster._getNode(e) : null
      }
    }, 9073: e => {
      var t = e.exports = {};
      t.RR = function () {
        var e = 0;
        return function (t) {
          return e >= t.length && (e = 0), t[e++]
        }
      }, t.RANDOM = function () {
        return function (e) {
          return e[Math.floor(Math.random() * e.length)]
        }
      }, t.ORDER = function () {
        return function (e) {
          return e[0]
        }
      }
    }, 8065: (e, t, n) => {
      var i = n(9509).Buffer, a = n(6417), s = t;

      function o(e) {
        var t = a.createHash("sha1");
        return t.update(e, "binary"), t.digest("binary")
      }

      function r(e, t) {
        e = i.from(e, "binary"), t = i.from(t, "binary");
        for (var n = i.allocUnsafe(e.length), a = 0; a < e.length; a++) n[a] = e[a] ^ t[a];
        return n
      }

      s.auth = function (e, t, n) {
        switch (n = n || {}, e) {
          case"mysql_native_password":
            return s.token(n.password, t.slice(0, 20));
          default:
            return
        }
      }, s.sha1 = o, s.xor = r, s.token = function (e, t) {
        if (!e) return i.alloc(0);
        var n = o(i.from(e, "utf8").toString("binary")), a = o(n);
        return r(o(t.toString("binary") + a), n)
      }, s.hashPassword = function (e) {
        var t = [20528, 22325], n = 7, a = [4660, 22129], s = i.alloc(8);
        "string" == typeof e && (e = i.from(e));
        for (var o = 0; o < e.length; o++) {
          var r = e[o];
          32 !== r && 9 !== r && (t = this.xor32(t, this.add32(this.mul32(this.add32(this.and32(t, [0, 63]), [0, n]), [0, r]), this.shl32(t, 8))), a = this.add32(a, this.xor32(this.shl32(a, 8), t)), n += r)
        }
        return this.int31Write(s, t, 0), this.int31Write(s, a, 4), s
      }, s.randomInit = function (e, t) {
        return {max_value: 1073741823, max_value_dbl: 1073741823, seed1: e % 1073741823, seed2: t % 1073741823}
      }, s.myRnd = function (e) {
        return e.seed1 = (3 * e.seed1 + e.seed2) % e.max_value, e.seed2 = (e.seed1 + e.seed2 + 33) % e.max_value, e.seed1 / e.max_value_dbl
      }, s.scramble323 = function (e, t) {
        if (!t) return i.alloc(0);
        for (var n = i.allocUnsafe(8), a = this.hashPassword(t), s = this.hashPassword(e.slice(0, 8)), o = this.int32Read(a, 0) ^ this.int32Read(s, 0), r = this.int32Read(a, 4) ^ this.int32Read(s, 4), c = this.randomInit(o, r), _ = 0; _ < 8; _++) n[_] = Math.floor(31 * this.myRnd(c)) + 64;
        var E = Math.floor(31 * this.myRnd(c));
        for (_ = 0; _ < 8; _++) n[_] ^= E;
        return n
      }, s.xor32 = function (e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }, s.add32 = function (e, t) {
        var n = e[1] + t[1];
        return [65535 & e[0] + t[0] + ((4294901760 & n) >> 16), 65535 & n]
      }, s.mul32 = function (e, t) {
        var n = e[1] * t[1];
        return [65535 & (e[1] * t[1] >> 16 & 65535) + (e[0] * t[1] & 65535) + (e[1] * t[0] & 65535), 65535 & n]
      }, s.and32 = function (e, t) {
        return [e[0] & t[0], e[1] & t[1]]
      }, s.shl32 = function (e, t) {
        var n = e[1] << t;
        return [65535 & (e[0] << t | (4294901760 & n) >> 16), 65535 & n]
      }, s.int31Write = function (e, t, n) {
        e[n] = t[0] >> 8 & 127, e[n + 1] = 255 & t[0], e[n + 2] = t[1] >> 8 & 255, e[n + 3] = 255 & t[1]
      }, s.int32Read = function (e, t) {
        return (e[t] << 24) + (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3]
      }
    }, 5811: e => {
      function t() {
        this.bufs = [], this.size = 0
      }

      e.exports = t, t.prototype.shift = function () {
        var e = this.bufs.shift();
        return e && (this.size -= e.length), e
      }, t.prototype.push = function (e) {
        e && e.length && (this.bufs.push(e), this.size += e.length)
      }
    }, 1604: e => {
      e.exports = function (e, t) {
        this.length = e, this.number = t
      }
    }, 2980: (e, t, n) => {
      var i = Math.pow(2, 16), a = Math.pow(2, 24), s = Math.pow(2, 8), o = Math.pow(2, 53), r = Math.pow(2, 24) - 1,
        c = n(9509).Buffer;

      function _() {
        this._buffer = null, this._offset = 0
      }

      e.exports = _, _.prototype.toBuffer = function (e) {
        this._buffer || (this._buffer = c.alloc(0), this._offset = 0);
        var t = this._buffer, n = this._offset, i = Math.floor(n / r) + 1;
        this._buffer = c.allocUnsafe(n + 4 * i), this._offset = 0;
        for (var a = 0; a < i; a++) {
          var s = a + 1 === i ? n % r : r, o = e.incrementPacketNumber();
          this.writeUnsignedNumber(3, s), this.writeUnsignedNumber(1, o);
          var _ = a * r, E = _ + s;
          this.writeBuffer(t.slice(_, E))
        }
        return this._buffer
      }, _.prototype.writeUnsignedNumber = function (e, t) {
        this._allocate(e);
        for (var n = 0; n < e; n++) this._buffer[this._offset++] = t >> 8 * n & 255
      }, _.prototype.writeFiller = function (e) {
        this._allocate(e);
        for (var t = 0; t < e; t++) this._buffer[this._offset++] = 0
      }, _.prototype.writeNullTerminatedString = function (e, t) {
        e = e || "", e += "";
        var n = c.byteLength(e, t || "utf-8") + 1;
        this._allocate(n), this._buffer.write(e, this._offset, t), this._buffer[this._offset + n - 1] = 0, this._offset += n
      }, _.prototype.writeString = function (e) {
        e = e || "", e += "";
        var t = c.byteLength(e, "utf-8");
        this._allocate(t), this._buffer.write(e, this._offset, "utf-8"), this._offset += t
      }, _.prototype.writeBuffer = function (e) {
        var t = e.length;
        this._allocate(t), e.copy(this._buffer, this._offset), this._offset += t
      }, _.prototype.writeLengthCodedNumber = function (e) {
        if (null === e) return this._allocate(1), void (this._buffer[this._offset++] = 251);
        if (e <= 250) return this._allocate(1), void (this._buffer[this._offset++] = e);
        if (e > o) throw new Error('writeLengthCodedNumber: JS precision range exceeded, your number is > 53 bit: "' + e + '"');
        e < i ? (this._allocate(3), this._buffer[this._offset++] = 252) : e < a ? (this._allocate(4), this._buffer[this._offset++] = 253) : (this._allocate(9), this._buffer[this._offset++] = 254), this._buffer[this._offset++] = 255 & e, this._buffer[this._offset++] = e >> 8 & 255, e < i || (this._buffer[this._offset++] = e >> 16 & 255, e < a || (this._buffer[this._offset++] = e >> 24 & 255, e = (e = e.toString(2)).substr(0, e.length - 32), e = parseInt(e, 2), this._buffer[this._offset++] = 255 & e, this._buffer[this._offset++] = e >> 8 & 255, this._buffer[this._offset++] = e >> 16 & 255, this._buffer[this._offset++] = 0))
      }, _.prototype.writeLengthCodedBuffer = function (e) {
        var t = e.length;
        this.writeLengthCodedNumber(t), this.writeBuffer(e)
      }, _.prototype.writeNullTerminatedBuffer = function (e) {
        this.writeBuffer(e), this.writeFiller(1)
      }, _.prototype.writeLengthCodedString = function (e) {
        if (null !== e) {
          e = void 0 === e ? "" : String(e);
          var t = c.byteLength(e, "utf-8");
          this.writeLengthCodedNumber(t), t && (this._allocate(t), this._buffer.write(e, this._offset, "utf-8"), this._offset += t)
        } else this.writeLengthCodedNumber(null)
      }, _.prototype._allocate = function (e) {
        if (!this._buffer) return this._buffer = c.alloc(Math.max(s, e)), void (this._offset = 0);
        if (!(this._buffer.length - this._offset >= e)) {
          var t = this._buffer.length + Math.max(s, e), n = this._buffer;
          this._buffer = c.alloc(t), n.copy(this._buffer)
        }
      }
    }, 9412: (e, t, n) => {
      var i = n(1604), a = n(905), s = n(9509).Buffer, o = n(5811), r = Math.pow(2, 24) - 1, c = Math.pow(2, 32);

      function _(e) {
        e = e || {}, this._supportBigNumbers = e.config && e.config.supportBigNumbers, this._buffer = s.alloc(0), this._nextBuffers = new o, this._longPacketBuffers = new o, this._offset = 0, this._packetEnd = null, this._packetHeader = null, this._packetOffset = null, this._onError = e.onError || function (e) {
          throw e
        }, this._onPacket = e.onPacket || function () {
        }, this._nextPacketNumber = 0, this._encoding = "utf-8", this._paused = !1
      }

      e.exports = _, _.prototype.write = function (e) {
        for (this._nextBuffers.push(e); !this._paused;) {
          var t = this._tryReadPacketHeader();
          if (!t) break;
          if (!this._combineNextBuffers(t.length)) break;
          this._parsePacket(t)
        }
      }, _.prototype.append = function (e) {
        if (e && 0 !== e.length) {
          for (var t = this._buffer.length, n = null === this._packetOffset ? this._offset : this._packetOffset, i = t - n, a = null, o = e instanceof Array || Array.isArray(e) ? e : [e], r = 0, c = 0, _ = 0; _ < o.length; _++) r += o[_].length;
          if (0 !== i) for (a = s.allocUnsafe(i + r), c = 0, c += this._buffer.copy(a, 0, n, t), _ = 0; _ < o.length; _++) c += o[_].copy(a, c); else if (o.length > 1) for (a = s.allocUnsafe(r), c = 0, _ = 0; _ < o.length; _++) c += o[_].copy(a, c); else a = o[0];
          this._buffer = a, this._offset = this._offset - n, this._packetEnd = null !== this._packetEnd ? this._packetEnd - n : null, this._packetOffset = null !== this._packetOffset ? this._packetOffset - n : null
        }
      }, _.prototype.pause = function () {
        this._paused = !0
      }, _.prototype.resume = function () {
        this._paused = !1, process.nextTick(this.write.bind(this))
      }, _.prototype.peak = function (e) {
        return this._buffer[this._offset + (e >>> 0)]
      }, _.prototype.parseUnsignedNumber = function (e) {
        if (1 === e) return this._buffer[this._offset++];
        var t = this._buffer, n = this._offset + e - 1, i = 0;
        if (e > 4) {
          var a = new Error("parseUnsignedNumber: Supports only up to 4 bytes");
          throw a.offset = this._offset - this._packetOffset - 1, a.code = "PARSER_UNSIGNED_TOO_LONG", a
        }
        for (; n >= this._offset;) i = (i << 8 | t[n]) >>> 0, n--;
        return this._offset += e, i
      }, _.prototype.parseLengthCodedString = function () {
        var e = this.parseLengthCodedNumber();
        return null === e ? null : this.parseString(e)
      }, _.prototype.parseLengthCodedBuffer = function () {
        var e = this.parseLengthCodedNumber();
        return null === e ? null : this.parseBuffer(e)
      }, _.prototype.parseLengthCodedNumber = function () {
        if (this._offset >= this._buffer.length) throw(s = new Error("Parser: read past end")).offset = this._offset - this._packetOffset, s.code = "PARSER_READ_PAST_END", s;
        var e = this._buffer[this._offset++];
        if (e <= 250) return e;
        switch (e) {
          case 251:
            return null;
          case 252:
            return this.parseUnsignedNumber(2);
          case 253:
            return this.parseUnsignedNumber(3);
          case 254:
            break;
          default:
            throw(s = new Error("Unexpected first byte" + (e ? ": 0x" + e.toString(16) : ""))).offset = this._offset - this._packetOffset - 1, s.code = "PARSER_BAD_LENGTH_BYTE", s
        }
        var t, n = this.parseUnsignedNumber(4), i = this.parseUnsignedNumber(4);
        if (i >>> 21) {
          if (t = a(c).times(i).plus(n).toString(), this._supportBigNumbers) return t;
          var s;
          throw(s = new Error('parseLengthCodedNumber: JS precision range exceeded, number is >= 53 bit: "' + t + '"')).offset = this._offset - this._packetOffset - 8, s.code = "PARSER_JS_PRECISION_RANGE_EXCEEDED", s
        }
        return n + c * i
      }, _.prototype.parseFiller = function (e) {
        return this.parseBuffer(e)
      }, _.prototype.parseNullTerminatedBuffer = function () {
        var e = this._nullByteOffset(), t = this._buffer.slice(this._offset, e);
        return this._offset = e + 1, t
      }, _.prototype.parseNullTerminatedString = function () {
        var e = this._nullByteOffset(), t = this._buffer.toString(this._encoding, this._offset, e);
        return this._offset = e + 1, t
      }, _.prototype._nullByteOffset = function () {
        for (var e = this._offset; 0 !== this._buffer[e];) if (++e >= this._buffer.length) {
          var t = new Error("Offset of null terminated string not found.");
          throw t.offset = this._offset - this._packetOffset, t.code = "PARSER_MISSING_NULL_BYTE", t
        }
        return e
      }, _.prototype.parsePacketTerminatedBuffer = function () {
        var e = this._packetEnd - this._offset;
        return this.parseBuffer(e)
      }, _.prototype.parsePacketTerminatedString = function () {
        var e = this._packetEnd - this._offset;
        return this.parseString(e)
      }, _.prototype.parseBuffer = function (e) {
        var t = s.alloc(e);
        return this._buffer.copy(t, 0, this._offset, this._offset + e), this._offset += e, t
      }, _.prototype.parseString = function (e) {
        var t = this._offset, n = t + e, i = this._buffer.toString(this._encoding, t, n);
        return this._offset = n, i
      }, _.prototype.parseGeometryValue = function () {
        var e = this.parseLengthCodedBuffer(), t = 4;
        return null !== e && e.length ? function n() {
          var i = null, a = e.readUInt8(t);
          t += 1;
          var s = a ? e.readUInt32LE(t) : e.readUInt32BE(t);
          switch (t += 4, s) {
            case 1:
              var o = a ? e.readDoubleLE(t) : e.readDoubleBE(t);
              t += 8;
              var r = a ? e.readDoubleLE(t) : e.readDoubleBE(t);
              t += 8, i = {x: o, y: r};
              break;
            case 2:
              var c = a ? e.readUInt32LE(t) : e.readUInt32BE(t);
              t += 4, i = [];
              for (var _ = c; _ > 0; _--) o = a ? e.readDoubleLE(t) : e.readDoubleBE(t), t += 8, r = a ? e.readDoubleLE(t) : e.readDoubleBE(t), t += 8, i.push({
                x: o,
                y: r
              });
              break;
            case 3:
              var E = a ? e.readUInt32LE(t) : e.readUInt32BE(t);
              for (t += 4, i = [], _ = E; _ > 0; _--) {
                c = a ? e.readUInt32LE(t) : e.readUInt32BE(t), t += 4;
                for (var p = [], u = c; u > 0; u--) o = a ? e.readDoubleLE(t) : e.readDoubleBE(t), t += 8, r = a ? e.readDoubleLE(t) : e.readDoubleBE(t), t += 8, p.push({
                  x: o,
                  y: r
                });
                i.push(p)
              }
              break;
            case 4:
            case 5:
            case 6:
            case 7:
              var l = a ? e.readUInt32LE(t) : e.readUInt32BE(t);
              for (t += 4, i = [], _ = l; _ > 0; _--) i.push(n())
          }
          return i
        }() : null
      }, _.prototype.reachedPacketEnd = function () {
        return this._offset === this._packetEnd
      }, _.prototype.incrementPacketNumber = function () {
        var e = this._nextPacketNumber;
        return this._nextPacketNumber = (this._nextPacketNumber + 1) % 256, e
      }, _.prototype.resetPacketNumber = function () {
        this._nextPacketNumber = 0
      }, _.prototype.packetLength = function () {
        return this._packetHeader ? this._packetHeader.length + this._longPacketBuffers.size : null
      }, _.prototype._combineNextBuffers = function (e) {
        var t = this._buffer.length - this._offset;
        if (t >= e) return !0;
        if (t + this._nextBuffers.size < e) return !1;
        for (var n = [], i = e - t; i > 0;) {
          var a = this._nextBuffers.shift();
          n.push(a), i -= a.length
        }
        return this.append(n), !0
      }, _.prototype._combineLongPacketBuffers = function () {
        if (this._longPacketBuffers.size) {
          for (var e = this._buffer.length - this._offset, t = this._buffer.length - this._packetEnd, n = null, i = s.allocUnsafe(e + this._longPacketBuffers.size), a = 0; n = this._longPacketBuffers.shift();) a += n.copy(i, a);
          this._buffer.copy(i, a, this._offset), this._buffer = i, this._offset = 0, this._packetEnd = this._buffer.length - t, this._packetOffset = 0
        }
      }, _.prototype._parsePacket = function (e) {
        if (this._packetEnd = this._offset + e.length, this._packetOffset = this._offset, e.length === r) return this._longPacketBuffers.push(this._buffer.slice(this._packetOffset, this._packetEnd)), void this._advanceToNextPacket();
        this._combineLongPacketBuffers();
        var t = !0;
        try {
          this._onPacket(e), t = !1
        } catch (e) {
          if (!e || "string" != typeof e.code || "PARSER_" !== e.code.substr(0, 7)) throw e;
          this._onError(e), t = !1
        } finally {
          this._advanceToNextPacket(), t && process.nextTick(this.write.bind(this))
        }
      }, _.prototype._tryReadPacketHeader = function () {
        if (this._packetHeader) return this._packetHeader;
        if (!this._combineNextBuffers(4)) return null;
        if (this._packetHeader = new i(this.parseUnsignedNumber(3), this.parseUnsignedNumber(1)), this._packetHeader.number !== this._nextPacketNumber) {
          var e = new Error("Packets out of order. Got: " + this._packetHeader.number + " Expected: " + this._nextPacketNumber);
          e.code = "PROTOCOL_PACKETS_OUT_OF_ORDER", e.fatal = !0, this._onError(e)
        }
        return this.incrementPacketNumber(), this._packetHeader
      }, _.prototype._advanceToNextPacket = function () {
        this._offset = this._packetEnd, this._packetHeader = null, this._packetEnd = null, this._packetOffset = null
      }
    }, 8776: (e, t, n) => {
      var i = n(9412), a = n(3664), s = n(5997), o = n(2413).Stream, r = n(1669), c = n(2980);

      function _(e) {
        o.call(this), e = e || {}, this.readable = !0, this.writable = !0, this._config = e.config || {}, this._connection = e.connection, this._callback = null, this._fatalError = null, this._quitSequence = null, this._handshake = !1, this._handshaked = !1, this._ended = !1, this._destroyed = !1, this._queue = [], this._handshakeInitializationPacket = null, this._parser = new i({
          onError: this.handleParserError.bind(this),
          onPacket: this._parsePacket.bind(this),
          config: this._config
        })
      }

      e.exports = _, r.inherits(_, o), _.prototype.write = function (e) {
        return this._parser.write(e), !0
      }, _.prototype.handshake = function (e, t) {
        "function" == typeof e && (t = e, e = {}), (e = e || {}).config = this._config;
        var n = this._enqueue(new a.Handshake(e, t));
        return this._handshake = !0, n
      }, _.prototype.query = function (e, t) {
        return this._enqueue(new a.Query(e, t))
      }, _.prototype.changeUser = function (e, t) {
        return this._enqueue(new a.ChangeUser(e, t))
      }, _.prototype.ping = function (e, t) {
        return "function" == typeof e && (t = e, e = {}), this._enqueue(new a.Ping(e, t))
      }, _.prototype.stats = function (e, t) {
        return "function" == typeof e && (t = e, e = {}), this._enqueue(new a.Statistics(e, t))
      }, _.prototype.quit = function (e, t) {
        "function" == typeof e && (t = e, e = {});
        var n = this, i = this._enqueue(new a.Quit(e, t));
        return i.on("end", (function () {
          n.end()
        })), this._quitSequence = i
      }, _.prototype.end = function () {
        if (!this._ended) {
          if (this._ended = !0, this._quitSequence && (this._quitSequence._ended || this._queue[0] === this._quitSequence)) return this._quitSequence.end(), void this.emit("end");
          var e = new Error("Connection lost: The server closed the connection.");
          e.fatal = !0, e.code = "PROTOCOL_CONNECTION_LOST", this._delegateError(e)
        }
      }, _.prototype.pause = function () {
        this._parser.pause();
        var e = this._queue[0];
        e && e.emit && e.emit("pause")
      }, _.prototype.resume = function () {
        this._parser.resume();
        var e = this._queue[0];
        e && e.emit && e.emit("resume")
      }, _.prototype._enqueue = function (e) {
        if (!this._validateEnqueue(e)) return e;
        this._config.trace && (e._callSite = e._callSite || new Error), this._queue.push(e), this.emit("enqueue", e);
        var t = this;
        return e.on("error", (function (n) {
          t._delegateError(n, e)
        })).on("packet", (function (n) {
          e._timer.active(), t._emitPacket(n)
        })).on("timeout", (function () {
          var n = new Error(e.constructor.name + " inactivity timeout");
          n.code = "PROTOCOL_SEQUENCE_TIMEOUT", n.fatal = !0, n.timeout = e._timeout, t._delegateError(n, e)
        })), e.constructor === a.Handshake && (e.on("start-tls", (function () {
          e._timer.active(), t._connection._startTLS((function (t) {
            if (t) return t.code = "HANDSHAKE_SSL_ERROR", t.fatal = !0, void e.end(t);
            e._timer.active(), e._tlsUpgradeCompleteHandler()
          }))
        })), e.on("end", (function () {
          t._handshaked = !0, t._fatalError || t.emit("handshake", t._handshakeInitializationPacket)
        }))), e.on("end", (function () {
          t._dequeue(e)
        })), 1 === this._queue.length && (this._parser.resetPacketNumber(), this._startSequence(e)), e
      }, _.prototype._validateEnqueue = function (e) {
        var t, n = "Cannot enqueue " + e.constructor.name;
        if (this._fatalError) (t = new Error(n + " after fatal error.")).code = "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"; else if (this._quitSequence) (t = new Error(n + " after invoking quit.")).code = "PROTOCOL_ENQUEUE_AFTER_QUIT"; else if (this._destroyed) (t = new Error(n + " after being destroyed.")).code = "PROTOCOL_ENQUEUE_AFTER_DESTROY"; else {
          if (!this._handshake && !this._handshaked || e.constructor !== a.Handshake) return !0;
          (t = new Error(n + " after already enqueuing a Handshake.")).code = "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE"
        }
        var i = this;
        return t.fatal = !1, e.on("error", (function (t) {
          i._delegateError(t, e)
        })), process.nextTick((function () {
          e.end(t)
        })), !1
      }, _.prototype._parsePacket = function () {
        var e = this._queue[0];
        if (!e) return (t = new Error("Received packet with no active sequence.")).code = "PROTOCOL_STRAY_PACKET", t.fatal = !0, void this._delegateError(t);
        var t, n = this._determinePacket(e), i = new n({protocol41: this._config.protocol41}), a = n.name;
        return n === s.RowDataPacket ? (e.RowDataPacket(i, this._parser, this._connection), void (this._config.debug && this._debugPacket(!0, i))) : (this._config.debug ? this._parsePacketDebug(i) : i.parse(this._parser), n === s.HandshakeInitializationPacket && (this._handshakeInitializationPacket = i, this.emit("initialize", i)), e._timer.active(), e[a] ? void e[a](i) : ((t = new Error("Received packet in the wrong sequence.")).code = "PROTOCOL_INCORRECT_PACKET_SEQUENCE", t.fatal = !0, void this._delegateError(t)))
      }, _.prototype._parsePacketDebug = function (e) {
        try {
          e.parse(this._parser)
        } finally {
          this._debugPacket(!0, e)
        }
      }, _.prototype._emitPacket = function (e) {
        var t = new c;
        e.write(t), this.emit("data", t.toBuffer(this._parser)), this._config.debug && this._debugPacket(!1, e)
      }, _.prototype._determinePacket = function (e) {
        var t = this._parser.peak();
        if (e.determinePacket) {
          var n = e.determinePacket(t, this._parser);
          if (n) return n
        }
        switch (t) {
          case 0:
            return s.OkPacket;
          case 254:
            return s.EofPacket;
          case 255:
            return s.ErrorPacket
        }
        throw new Error("Could not determine packet, firstByte = " + t)
      }, _.prototype._dequeue = function (e) {
        e._timer.stop(), this._fatalError || (this._queue.shift(), (e = this._queue[0]) ? (this._parser.resetPacketNumber(), this._startSequence(e)) : this.emit("drain"))
      }, _.prototype._startSequence = function (e) {
        e._timeout > 0 && isFinite(e._timeout) && e._timer.start(e._timeout), e.constructor === a.ChangeUser ? e.start(this._handshakeInitializationPacket) : e.start()
      }, _.prototype.handleNetworkError = function (e) {
        e.fatal = !0;
        var t = this._queue[0];
        t ? t.end(e) : this._delegateError(e)
      }, _.prototype.handleParserError = function (e) {
        var t = this._queue[0];
        t ? t.end(e) : this._delegateError(e)
      }, _.prototype._delegateError = function (e, t) {
        if (!this._fatalError) {
          if (e.fatal && (this._fatalError = e), this._shouldErrorBubbleUp(e, t)) this.emit("unhandledError", e); else if (e.fatal) {
            var n = this._queue;
            process.nextTick((function () {
              n.forEach((function (t) {
                t.end(e)
              })), n.length = 0
            }))
          }
          e.fatal && this.emit("end", e)
        }
      }, _.prototype._shouldErrorBubbleUp = function (e, t) {
        if (t) {
          if (t.hasErrorHandler()) return !1;
          if (!e.fatal) return !0
        }
        return e.fatal && !this._hasPendingErrorHandlers()
      }, _.prototype._hasPendingErrorHandlers = function () {
        return this._queue.some((function (e) {
          return e.hasErrorHandler()
        }))
      }, _.prototype.destroy = function () {
        this._destroyed = !0, this._parser.pause(), "disconnected" !== this._connection.state && (this._ended || this.end())
      }, _.prototype._debugPacket = function (e, t) {
        var n = this._connection, i = e ? "<--" : "--\x3e", a = t.constructor.name,
          s = n && null !== n.threadId ? " (" + n.threadId + ")" : "";
        if (!Array.isArray(this._config.debug) || -1 !== this._config.debug.indexOf(a)) {
          var o = r.inspect(t).replace(/^[^{]+/, "");
          console.log("%s%s %s %s\n", i, s, a, o)
        }
      }
    }, 8370: e => {
      e.exports = function (e) {
        this.resultSetHeaderPacket = e, this.fieldPackets = [], this.eofPackets = [], this.rows = []
      }
    }, 1976: (e, t, n) => {
      e.exports = n(2655)
    }, 3822: (e, t, n) => {
      var i = n(8213);

      function a(e) {
        this._object = e, this._timeout = null
      }

      e.exports = a, a.prototype.active = function () {
        this._timeout && (this._timeout.refresh ? this._timeout.refresh() : i.active(this._timeout))
      }, a.prototype.start = function (e) {
        this.stop(), this._timeout = i.setTimeout(this._onTimeout.bind(this), e)
      }, a.prototype.stop = function () {
        this._timeout && (i.clearTimeout(this._timeout), this._timeout = null)
      }, a.prototype._onTimeout = function () {
        return this._object._onTimeout()
      }
    }, 2318: (e, t) => {
      t.BIG5_CHINESE_CI = 1, t.LATIN2_CZECH_CS = 2, t.DEC8_SWEDISH_CI = 3, t.CP850_GENERAL_CI = 4, t.LATIN1_GERMAN1_CI = 5, t.HP8_ENGLISH_CI = 6, t.KOI8R_GENERAL_CI = 7, t.LATIN1_SWEDISH_CI = 8, t.LATIN2_GENERAL_CI = 9, t.SWE7_SWEDISH_CI = 10, t.ASCII_GENERAL_CI = 11, t.UJIS_JAPANESE_CI = 12, t.SJIS_JAPANESE_CI = 13, t.CP1251_BULGARIAN_CI = 14, t.LATIN1_DANISH_CI = 15, t.HEBREW_GENERAL_CI = 16, t.TIS620_THAI_CI = 18, t.EUCKR_KOREAN_CI = 19, t.LATIN7_ESTONIAN_CS = 20, t.LATIN2_HUNGARIAN_CI = 21, t.KOI8U_GENERAL_CI = 22, t.CP1251_UKRAINIAN_CI = 23, t.GB2312_CHINESE_CI = 24, t.GREEK_GENERAL_CI = 25, t.CP1250_GENERAL_CI = 26, t.LATIN2_CROATIAN_CI = 27, t.GBK_CHINESE_CI = 28, t.CP1257_LITHUANIAN_CI = 29, t.LATIN5_TURKISH_CI = 30, t.LATIN1_GERMAN2_CI = 31, t.ARMSCII8_GENERAL_CI = 32, t.UTF8_GENERAL_CI = 33, t.CP1250_CZECH_CS = 34, t.UCS2_GENERAL_CI = 35, t.CP866_GENERAL_CI = 36, t.KEYBCS2_GENERAL_CI = 37, t.MACCE_GENERAL_CI = 38, t.MACROMAN_GENERAL_CI = 39, t.CP852_GENERAL_CI = 40, t.LATIN7_GENERAL_CI = 41, t.LATIN7_GENERAL_CS = 42, t.MACCE_BIN = 43, t.CP1250_CROATIAN_CI = 44, t.UTF8MB4_GENERAL_CI = 45, t.UTF8MB4_BIN = 46, t.LATIN1_BIN = 47, t.LATIN1_GENERAL_CI = 48, t.LATIN1_GENERAL_CS = 49, t.CP1251_BIN = 50, t.CP1251_GENERAL_CI = 51, t.CP1251_GENERAL_CS = 52, t.MACROMAN_BIN = 53, t.UTF16_GENERAL_CI = 54, t.UTF16_BIN = 55, t.UTF16LE_GENERAL_CI = 56, t.CP1256_GENERAL_CI = 57, t.CP1257_BIN = 58, t.CP1257_GENERAL_CI = 59, t.UTF32_GENERAL_CI = 60, t.UTF32_BIN = 61, t.UTF16LE_BIN = 62, t.BINARY = 63, t.ARMSCII8_BIN = 64, t.ASCII_BIN = 65, t.CP1250_BIN = 66, t.CP1256_BIN = 67, t.CP866_BIN = 68, t.DEC8_BIN = 69, t.GREEK_BIN = 70, t.HEBREW_BIN = 71, t.HP8_BIN = 72, t.KEYBCS2_BIN = 73, t.KOI8R_BIN = 74, t.KOI8U_BIN = 75, t.LATIN2_BIN = 77, t.LATIN5_BIN = 78, t.LATIN7_BIN = 79, t.CP850_BIN = 80, t.CP852_BIN = 81, t.SWE7_BIN = 82, t.UTF8_BIN = 83, t.BIG5_BIN = 84, t.EUCKR_BIN = 85, t.GB2312_BIN = 86, t.GBK_BIN = 87, t.SJIS_BIN = 88, t.TIS620_BIN = 89, t.UCS2_BIN = 90, t.UJIS_BIN = 91, t.GEOSTD8_GENERAL_CI = 92, t.GEOSTD8_BIN = 93, t.LATIN1_SPANISH_CI = 94, t.CP932_JAPANESE_CI = 95, t.CP932_BIN = 96, t.EUCJPMS_JAPANESE_CI = 97, t.EUCJPMS_BIN = 98, t.CP1250_POLISH_CI = 99, t.UTF16_UNICODE_CI = 101, t.UTF16_ICELANDIC_CI = 102, t.UTF16_LATVIAN_CI = 103, t.UTF16_ROMANIAN_CI = 104,t.UTF16_SLOVENIAN_CI = 105,t.UTF16_POLISH_CI = 106,t.UTF16_ESTONIAN_CI = 107,t.UTF16_SPANISH_CI = 108,t.UTF16_SWEDISH_CI = 109,t.UTF16_TURKISH_CI = 110,t.UTF16_CZECH_CI = 111,t.UTF16_DANISH_CI = 112,t.UTF16_LITHUANIAN_CI = 113,t.UTF16_SLOVAK_CI = 114,t.UTF16_SPANISH2_CI = 115,t.UTF16_ROMAN_CI = 116,t.UTF16_PERSIAN_CI = 117,t.UTF16_ESPERANTO_CI = 118,t.UTF16_HUNGARIAN_CI = 119,t.UTF16_SINHALA_CI = 120,t.UTF16_GERMAN2_CI = 121,t.UTF16_CROATIAN_MYSQL561_CI = 122,t.UTF16_UNICODE_520_CI = 123,t.UTF16_VIETNAMESE_CI = 124,t.UCS2_UNICODE_CI = 128,t.UCS2_ICELANDIC_CI = 129,t.UCS2_LATVIAN_CI = 130,t.UCS2_ROMANIAN_CI = 131,t.UCS2_SLOVENIAN_CI = 132,t.UCS2_POLISH_CI = 133,t.UCS2_ESTONIAN_CI = 134,t.UCS2_SPANISH_CI = 135,t.UCS2_SWEDISH_CI = 136,t.UCS2_TURKISH_CI = 137,t.UCS2_CZECH_CI = 138,t.UCS2_DANISH_CI = 139,t.UCS2_LITHUANIAN_CI = 140,t.UCS2_SLOVAK_CI = 141,t.UCS2_SPANISH2_CI = 142,t.UCS2_ROMAN_CI = 143,t.UCS2_PERSIAN_CI = 144,t.UCS2_ESPERANTO_CI = 145,t.UCS2_HUNGARIAN_CI = 146,t.UCS2_SINHALA_CI = 147,t.UCS2_GERMAN2_CI = 148,t.UCS2_CROATIAN_MYSQL561_CI = 149,t.UCS2_UNICODE_520_CI = 150,t.UCS2_VIETNAMESE_CI = 151,t.UCS2_GENERAL_MYSQL500_CI = 159,t.UTF32_UNICODE_CI = 160,t.UTF32_ICELANDIC_CI = 161,t.UTF32_LATVIAN_CI = 162,t.UTF32_ROMANIAN_CI = 163,t.UTF32_SLOVENIAN_CI = 164,t.UTF32_POLISH_CI = 165,t.UTF32_ESTONIAN_CI = 166,t.UTF32_SPANISH_CI = 167,t.UTF32_SWEDISH_CI = 168,t.UTF32_TURKISH_CI = 169,t.UTF32_CZECH_CI = 170,t.UTF32_DANISH_CI = 171,t.UTF32_LITHUANIAN_CI = 172,t.UTF32_SLOVAK_CI = 173,t.UTF32_SPANISH2_CI = 174,t.UTF32_ROMAN_CI = 175,t.UTF32_PERSIAN_CI = 176,t.UTF32_ESPERANTO_CI = 177,t.UTF32_HUNGARIAN_CI = 178,t.UTF32_SINHALA_CI = 179,t.UTF32_GERMAN2_CI = 180,t.UTF32_CROATIAN_MYSQL561_CI = 181,t.UTF32_UNICODE_520_CI = 182,t.UTF32_VIETNAMESE_CI = 183,t.UTF8_UNICODE_CI = 192,t.UTF8_ICELANDIC_CI = 193,t.UTF8_LATVIAN_CI = 194,t.UTF8_ROMANIAN_CI = 195,t.UTF8_SLOVENIAN_CI = 196,t.UTF8_POLISH_CI = 197,t.UTF8_ESTONIAN_CI = 198,t.UTF8_SPANISH_CI = 199,t.UTF8_SWEDISH_CI = 200,t.UTF8_TURKISH_CI = 201,t.UTF8_CZECH_CI = 202,t.UTF8_DANISH_CI = 203,t.UTF8_LITHUANIAN_CI = 204,t.UTF8_SLOVAK_CI = 205,t.UTF8_SPANISH2_CI = 206,t.UTF8_ROMAN_CI = 207,t.UTF8_PERSIAN_CI = 208,t.UTF8_ESPERANTO_CI = 209,t.UTF8_HUNGARIAN_CI = 210,t.UTF8_SINHALA_CI = 211,t.UTF8_GERMAN2_CI = 212,t.UTF8_CROATIAN_MYSQL561_CI = 213,t.UTF8_UNICODE_520_CI = 214,t.UTF8_VIETNAMESE_CI = 215,t.UTF8_GENERAL_MYSQL500_CI = 223,t.UTF8MB4_UNICODE_CI = 224,t.UTF8MB4_ICELANDIC_CI = 225,t.UTF8MB4_LATVIAN_CI = 226,t.UTF8MB4_ROMANIAN_CI = 227,t.UTF8MB4_SLOVENIAN_CI = 228,t.UTF8MB4_POLISH_CI = 229,t.UTF8MB4_ESTONIAN_CI = 230,t.UTF8MB4_SPANISH_CI = 231,t.UTF8MB4_SWEDISH_CI = 232,t.UTF8MB4_TURKISH_CI = 233,t.UTF8MB4_CZECH_CI = 234,t.UTF8MB4_DANISH_CI = 235,t.UTF8MB4_LITHUANIAN_CI = 236,t.UTF8MB4_SLOVAK_CI = 237,t.UTF8MB4_SPANISH2_CI = 238,t.UTF8MB4_ROMAN_CI = 239,t.UTF8MB4_PERSIAN_CI = 240,t.UTF8MB4_ESPERANTO_CI = 241,t.UTF8MB4_HUNGARIAN_CI = 242,t.UTF8MB4_SINHALA_CI = 243,t.UTF8MB4_GERMAN2_CI = 244,t.UTF8MB4_CROATIAN_MYSQL561_CI = 245,t.UTF8MB4_UNICODE_520_CI = 246,t.UTF8MB4_VIETNAMESE_CI = 247,t.UTF8_GENERAL50_CI = 253,t.ARMSCII8 = t.ARMSCII8_GENERAL_CI,t.ASCII = t.ASCII_GENERAL_CI,t.BIG5 = t.BIG5_CHINESE_CI,t.BINARY = t.BINARY,t.CP1250 = t.CP1250_GENERAL_CI,t.CP1251 = t.CP1251_GENERAL_CI,t.CP1256 = t.CP1256_GENERAL_CI,t.CP1257 = t.CP1257_GENERAL_CI,t.CP866 = t.CP866_GENERAL_CI,t.CP850 = t.CP850_GENERAL_CI,t.CP852 = t.CP852_GENERAL_CI,t.CP932 = t.CP932_JAPANESE_CI,t.DEC8 = t.DEC8_SWEDISH_CI,t.EUCJPMS = t.EUCJPMS_JAPANESE_CI,t.EUCKR = t.EUCKR_KOREAN_CI,t.GB2312 = t.GB2312_CHINESE_CI,t.GBK = t.GBK_CHINESE_CI,t.GEOSTD8 = t.GEOSTD8_GENERAL_CI,t.GREEK = t.GREEK_GENERAL_CI,t.HEBREW = t.HEBREW_GENERAL_CI,t.HP8 = t.HP8_ENGLISH_CI,t.KEYBCS2 = t.KEYBCS2_GENERAL_CI,t.KOI8R = t.KOI8R_GENERAL_CI,t.KOI8U = t.KOI8U_GENERAL_CI,t.LATIN1 = t.LATIN1_SWEDISH_CI,t.LATIN2 = t.LATIN2_GENERAL_CI,t.LATIN5 = t.LATIN5_TURKISH_CI,t.LATIN7 = t.LATIN7_GENERAL_CI,t.MACCE = t.MACCE_GENERAL_CI,t.MACROMAN = t.MACROMAN_GENERAL_CI,t.SJIS = t.SJIS_JAPANESE_CI,t.SWE7 = t.SWE7_SWEDISH_CI,t.TIS620 = t.TIS620_THAI_CI,t.UCS2 = t.UCS2_GENERAL_CI,t.UJIS = t.UJIS_JAPANESE_CI,t.UTF16 = t.UTF16_GENERAL_CI,t.UTF16LE = t.UTF16LE_GENERAL_CI,t.UTF8 = t.UTF8_GENERAL_CI,t.UTF8MB4 = t.UTF8MB4_GENERAL_CI,t.UTF32 = t.UTF32_GENERAL_CI
    }, 3778: (e, t) => {
      t.CLIENT_LONG_PASSWORD = 1, t.CLIENT_FOUND_ROWS = 2, t.CLIENT_LONG_FLAG = 4, t.CLIENT_CONNECT_WITH_DB = 8, t.CLIENT_NO_SCHEMA = 16, t.CLIENT_COMPRESS = 32, t.CLIENT_ODBC = 64, t.CLIENT_LOCAL_FILES = 128, t.CLIENT_IGNORE_SPACE = 256, t.CLIENT_PROTOCOL_41 = 512, t.CLIENT_INTERACTIVE = 1024, t.CLIENT_SSL = 2048, t.CLIENT_IGNORE_SIGPIPE = 4096, t.CLIENT_TRANSACTIONS = 8192, t.CLIENT_RESERVED = 16384, t.CLIENT_SECURE_CONNECTION = 32768, t.CLIENT_MULTI_STATEMENTS = 65536, t.CLIENT_MULTI_RESULTS = 131072, t.CLIENT_PS_MULTI_RESULTS = 262144, t.CLIENT_PLUGIN_AUTH = 524288, t.CLIENT_SSL_VERIFY_SERVER_CERT = 1073741824, t.CLIENT_REMEMBER_OPTIONS = 2147483648
    }, 9253: (e, t) => {
      t.EE_CANTCREATEFILE = 1, t.EE_READ = 2, t.EE_WRITE = 3, t.EE_BADCLOSE = 4, t.EE_OUTOFMEMORY = 5, t.EE_DELETE = 6, t.EE_LINK = 7, t.EE_EOFERR = 9, t.EE_CANTLOCK = 10, t.EE_CANTUNLOCK = 11, t.EE_DIR = 12, t.EE_STAT = 13, t.EE_CANT_CHSIZE = 14, t.EE_CANT_OPEN_STREAM = 15, t.EE_GETWD = 16, t.EE_SETWD = 17, t.EE_LINK_WARNING = 18, t.EE_OPEN_WARNING = 19, t.EE_DISK_FULL = 20, t.EE_CANT_MKDIR = 21, t.EE_UNKNOWN_CHARSET = 22, t.EE_OUT_OF_FILERESOURCES = 23, t.EE_CANT_READLINK = 24, t.EE_CANT_SYMLINK = 25, t.EE_REALPATH = 26, t.EE_SYNC = 27, t.EE_UNKNOWN_COLLATION = 28, t.EE_FILENOTFOUND = 29, t.EE_FILE_NOT_CLOSED = 30, t.EE_CHANGE_OWNERSHIP = 31, t.EE_CHANGE_PERMISSIONS = 32, t.EE_CANT_SEEK = 33, t.EE_CAPACITY_EXCEEDED = 34, t.HA_ERR_KEY_NOT_FOUND = 120, t.HA_ERR_FOUND_DUPP_KEY = 121, t.HA_ERR_INTERNAL_ERROR = 122, t.HA_ERR_RECORD_CHANGED = 123, t.HA_ERR_WRONG_INDEX = 124, t.HA_ERR_CRASHED = 126, t.HA_ERR_WRONG_IN_RECORD = 127, t.HA_ERR_OUT_OF_MEM = 128, t.HA_ERR_NOT_A_TABLE = 130, t.HA_ERR_WRONG_COMMAND = 131, t.HA_ERR_OLD_FILE = 132, t.HA_ERR_NO_ACTIVE_RECORD = 133, t.HA_ERR_RECORD_DELETED = 134, t.HA_ERR_RECORD_FILE_FULL = 135, t.HA_ERR_INDEX_FILE_FULL = 136, t.HA_ERR_END_OF_FILE = 137, t.HA_ERR_UNSUPPORTED = 138, t.HA_ERR_TOO_BIG_ROW = 139, t.HA_WRONG_CREATE_OPTION = 140, t.HA_ERR_FOUND_DUPP_UNIQUE = 141, t.HA_ERR_UNKNOWN_CHARSET = 142, t.HA_ERR_WRONG_MRG_TABLE_DEF = 143, t.HA_ERR_CRASHED_ON_REPAIR = 144, t.HA_ERR_CRASHED_ON_USAGE = 145, t.HA_ERR_LOCK_WAIT_TIMEOUT = 146, t.HA_ERR_LOCK_TABLE_FULL = 147, t.HA_ERR_READ_ONLY_TRANSACTION = 148, t.HA_ERR_LOCK_DEADLOCK = 149, t.HA_ERR_CANNOT_ADD_FOREIGN = 150, t.HA_ERR_NO_REFERENCED_ROW = 151, t.HA_ERR_ROW_IS_REFERENCED = 152, t.HA_ERR_NO_SAVEPOINT = 153, t.HA_ERR_NON_UNIQUE_BLOCK_SIZE = 154, t.HA_ERR_NO_SUCH_TABLE = 155, t.HA_ERR_TABLE_EXIST = 156, t.HA_ERR_NO_CONNECTION = 157, t.HA_ERR_NULL_IN_SPATIAL = 158, t.HA_ERR_TABLE_DEF_CHANGED = 159, t.HA_ERR_NO_PARTITION_FOUND = 160, t.HA_ERR_RBR_LOGGING_FAILED = 161, t.HA_ERR_DROP_INDEX_FK = 162, t.HA_ERR_FOREIGN_DUPLICATE_KEY = 163, t.HA_ERR_TABLE_NEEDS_UPGRADE = 164, t.HA_ERR_TABLE_READONLY = 165, t.HA_ERR_AUTOINC_READ_FAILED = 166, t.HA_ERR_AUTOINC_ERANGE = 167, t.HA_ERR_GENERIC = 168, t.HA_ERR_RECORD_IS_THE_SAME = 169, t.HA_ERR_LOGGING_IMPOSSIBLE = 170, t.HA_ERR_CORRUPT_EVENT = 171, t.HA_ERR_NEW_FILE = 172, t.HA_ERR_ROWS_EVENT_APPLY = 173, t.HA_ERR_INITIALIZATION = 174, t.HA_ERR_FILE_TOO_SHORT = 175, t.HA_ERR_WRONG_CRC = 176, t.HA_ERR_TOO_MANY_CONCURRENT_TRXS = 177, t.HA_ERR_NOT_IN_LOCK_PARTITIONS = 178, t.HA_ERR_INDEX_COL_TOO_LONG = 179, t.HA_ERR_INDEX_CORRUPT = 180, t.HA_ERR_UNDO_REC_TOO_BIG = 181, t.HA_FTS_INVALID_DOCID = 182, t.HA_ERR_TABLE_IN_FK_CHECK = 183, t.HA_ERR_TABLESPACE_EXISTS = 184, t.HA_ERR_TOO_MANY_FIELDS = 185, t.HA_ERR_ROW_IN_WRONG_PARTITION = 186, t.HA_ERR_INNODB_READ_ONLY = 187, t.HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT = 188, t.HA_ERR_TEMP_FILE_WRITE_FAILURE = 189,t.HA_ERR_INNODB_FORCED_RECOVERY = 190,t.HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE = 191,t.HA_ERR_FK_DEPTH_EXCEEDED = 192,t.HA_MISSING_CREATE_OPTION = 193,t.HA_ERR_SE_OUT_OF_MEMORY = 194,t.HA_ERR_TABLE_CORRUPT = 195,t.HA_ERR_QUERY_INTERRUPTED = 196,t.HA_ERR_TABLESPACE_MISSING = 197,t.HA_ERR_TABLESPACE_IS_NOT_EMPTY = 198,t.HA_ERR_WRONG_FILE_NAME = 199,t.HA_ERR_NOT_ALLOWED_COMMAND = 200,t.HA_ERR_COMPUTE_FAILED = 201,t.ER_HASHCHK = 1e3,t.ER_NISAMCHK = 1001,t.ER_NO = 1002,t.ER_YES = 1003,t.ER_CANT_CREATE_FILE = 1004,t.ER_CANT_CREATE_TABLE = 1005,t.ER_CANT_CREATE_DB = 1006,t.ER_DB_CREATE_EXISTS = 1007,t.ER_DB_DROP_EXISTS = 1008,t.ER_DB_DROP_DELETE = 1009,t.ER_DB_DROP_RMDIR = 1010,t.ER_CANT_DELETE_FILE = 1011,t.ER_CANT_FIND_SYSTEM_REC = 1012,t.ER_CANT_GET_STAT = 1013,t.ER_CANT_GET_WD = 1014,t.ER_CANT_LOCK = 1015,t.ER_CANT_OPEN_FILE = 1016,t.ER_FILE_NOT_FOUND = 1017,t.ER_CANT_READ_DIR = 1018,t.ER_CANT_SET_WD = 1019,t.ER_CHECKREAD = 1020,t.ER_DISK_FULL = 1021,t.ER_DUP_KEY = 1022,t.ER_ERROR_ON_CLOSE = 1023,t.ER_ERROR_ON_READ = 1024,t.ER_ERROR_ON_RENAME = 1025,t.ER_ERROR_ON_WRITE = 1026,t.ER_FILE_USED = 1027,t.ER_FILSORT_ABORT = 1028,t.ER_FORM_NOT_FOUND = 1029,t.ER_GET_ERRNO = 1030,t.ER_ILLEGAL_HA = 1031,t.ER_KEY_NOT_FOUND = 1032,t.ER_NOT_FORM_FILE = 1033,t.ER_NOT_KEYFILE = 1034,t.ER_OLD_KEYFILE = 1035,t.ER_OPEN_AS_READONLY = 1036,t.ER_OUTOFMEMORY = 1037,t.ER_OUT_OF_SORTMEMORY = 1038,t.ER_UNEXPECTED_EOF = 1039,t.ER_CON_COUNT_ERROR = 1040,t.ER_OUT_OF_RESOURCES = 1041,t.ER_BAD_HOST_ERROR = 1042,t.ER_HANDSHAKE_ERROR = 1043,t.ER_DBACCESS_DENIED_ERROR = 1044,t.ER_ACCESS_DENIED_ERROR = 1045,t.ER_NO_DB_ERROR = 1046,t.ER_UNKNOWN_COM_ERROR = 1047,t.ER_BAD_NULL_ERROR = 1048,t.ER_BAD_DB_ERROR = 1049,t.ER_TABLE_EXISTS_ERROR = 1050,t.ER_BAD_TABLE_ERROR = 1051,t.ER_NON_UNIQ_ERROR = 1052,t.ER_SERVER_SHUTDOWN = 1053,t.ER_BAD_FIELD_ERROR = 1054,t.ER_WRONG_FIELD_WITH_GROUP = 1055,t.ER_WRONG_GROUP_FIELD = 1056,t.ER_WRONG_SUM_SELECT = 1057,t.ER_WRONG_VALUE_COUNT = 1058,t.ER_TOO_LONG_IDENT = 1059,t.ER_DUP_FIELDNAME = 1060,t.ER_DUP_KEYNAME = 1061,t.ER_DUP_ENTRY = 1062,t.ER_WRONG_FIELD_SPEC = 1063,t.ER_PARSE_ERROR = 1064,t.ER_EMPTY_QUERY = 1065,t.ER_NONUNIQ_TABLE = 1066,t.ER_INVALID_DEFAULT = 1067,t.ER_MULTIPLE_PRI_KEY = 1068,t.ER_TOO_MANY_KEYS = 1069,t.ER_TOO_MANY_KEY_PARTS = 1070,t.ER_TOO_LONG_KEY = 1071,t.ER_KEY_COLUMN_DOES_NOT_EXITS = 1072,t.ER_BLOB_USED_AS_KEY = 1073,t.ER_TOO_BIG_FIELDLENGTH = 1074,t.ER_WRONG_AUTO_KEY = 1075,t.ER_READY = 1076,t.ER_NORMAL_SHUTDOWN = 1077,t.ER_GOT_SIGNAL = 1078,t.ER_SHUTDOWN_COMPLETE = 1079,t.ER_FORCING_CLOSE = 1080,t.ER_IPSOCK_ERROR = 1081,t.ER_NO_SUCH_INDEX = 1082,t.ER_WRONG_FIELD_TERMINATORS = 1083,t.ER_BLOBS_AND_NO_TERMINATED = 1084,t.ER_TEXTFILE_NOT_READABLE = 1085,t.ER_FILE_EXISTS_ERROR = 1086,t.ER_LOAD_INFO = 1087,t.ER_ALTER_INFO = 1088,t.ER_WRONG_SUB_KEY = 1089,t.ER_CANT_REMOVE_ALL_FIELDS = 1090,t.ER_CANT_DROP_FIELD_OR_KEY = 1091,t.ER_INSERT_INFO = 1092,t.ER_UPDATE_TABLE_USED = 1093,t.ER_NO_SUCH_THREAD = 1094,t.ER_KILL_DENIED_ERROR = 1095,t.ER_NO_TABLES_USED = 1096,t.ER_TOO_BIG_SET = 1097,t.ER_NO_UNIQUE_LOGFILE = 1098,t.ER_TABLE_NOT_LOCKED_FOR_WRITE = 1099,t.ER_TABLE_NOT_LOCKED = 1100,t.ER_BLOB_CANT_HAVE_DEFAULT = 1101,t.ER_WRONG_DB_NAME = 1102,t.ER_WRONG_TABLE_NAME = 1103,t.ER_TOO_BIG_SELECT = 1104,t.ER_UNKNOWN_ERROR = 1105,t.ER_UNKNOWN_PROCEDURE = 1106,t.ER_WRONG_PARAMCOUNT_TO_PROCEDURE = 1107,t.ER_WRONG_PARAMETERS_TO_PROCEDURE = 1108,t.ER_UNKNOWN_TABLE = 1109,t.ER_FIELD_SPECIFIED_TWICE = 1110,t.ER_INVALID_GROUP_FUNC_USE = 1111,t.ER_UNSUPPORTED_EXTENSION = 1112,t.ER_TABLE_MUST_HAVE_COLUMNS = 1113,t.ER_RECORD_FILE_FULL = 1114,t.ER_UNKNOWN_CHARACTER_SET = 1115,t.ER_TOO_MANY_TABLES = 1116,t.ER_TOO_MANY_FIELDS = 1117,t.ER_TOO_BIG_ROWSIZE = 1118,t.ER_STACK_OVERRUN = 1119,t.ER_WRONG_OUTER_JOIN = 1120,t.ER_NULL_COLUMN_IN_INDEX = 1121,t.ER_CANT_FIND_UDF = 1122,t.ER_CANT_INITIALIZE_UDF = 1123,t.ER_UDF_NO_PATHS = 1124,t.ER_UDF_EXISTS = 1125,t.ER_CANT_OPEN_LIBRARY = 1126,t.ER_CANT_FIND_DL_ENTRY = 1127,t.ER_FUNCTION_NOT_DEFINED = 1128,t.ER_HOST_IS_BLOCKED = 1129,t.ER_HOST_NOT_PRIVILEGED = 1130,t.ER_PASSWORD_ANONYMOUS_USER = 1131,t.ER_PASSWORD_NOT_ALLOWED = 1132,t.ER_PASSWORD_NO_MATCH = 1133,t.ER_UPDATE_INFO = 1134,t.ER_CANT_CREATE_THREAD = 1135,t.ER_WRONG_VALUE_COUNT_ON_ROW = 1136,t.ER_CANT_REOPEN_TABLE = 1137,t.ER_INVALID_USE_OF_NULL = 1138,t.ER_REGEXP_ERROR = 1139,t.ER_MIX_OF_GROUP_FUNC_AND_FIELDS = 1140,t.ER_NONEXISTING_GRANT = 1141,t.ER_TABLEACCESS_DENIED_ERROR = 1142,t.ER_COLUMNACCESS_DENIED_ERROR = 1143,t.ER_ILLEGAL_GRANT_FOR_TABLE = 1144,t.ER_GRANT_WRONG_HOST_OR_USER = 1145,t.ER_NO_SUCH_TABLE = 1146,t.ER_NONEXISTING_TABLE_GRANT = 1147,t.ER_NOT_ALLOWED_COMMAND = 1148,t.ER_SYNTAX_ERROR = 1149,t.ER_DELAYED_CANT_CHANGE_LOCK = 1150,t.ER_TOO_MANY_DELAYED_THREADS = 1151,t.ER_ABORTING_CONNECTION = 1152,t.ER_NET_PACKET_TOO_LARGE = 1153,t.ER_NET_READ_ERROR_FROM_PIPE = 1154,t.ER_NET_FCNTL_ERROR = 1155,t.ER_NET_PACKETS_OUT_OF_ORDER = 1156,t.ER_NET_UNCOMPRESS_ERROR = 1157,t.ER_NET_READ_ERROR = 1158,t.ER_NET_READ_INTERRUPTED = 1159,t.ER_NET_ERROR_ON_WRITE = 1160,t.ER_NET_WRITE_INTERRUPTED = 1161,t.ER_TOO_LONG_STRING = 1162,t.ER_TABLE_CANT_HANDLE_BLOB = 1163,t.ER_TABLE_CANT_HANDLE_AUTO_INCREMENT = 1164,t.ER_DELAYED_INSERT_TABLE_LOCKED = 1165,t.ER_WRONG_COLUMN_NAME = 1166,t.ER_WRONG_KEY_COLUMN = 1167,t.ER_WRONG_MRG_TABLE = 1168,t.ER_DUP_UNIQUE = 1169,t.ER_BLOB_KEY_WITHOUT_LENGTH = 1170,t.ER_PRIMARY_CANT_HAVE_NULL = 1171,t.ER_TOO_MANY_ROWS = 1172,t.ER_REQUIRES_PRIMARY_KEY = 1173,t.ER_NO_RAID_COMPILED = 1174,t.ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE = 1175,t.ER_KEY_DOES_NOT_EXITS = 1176,t.ER_CHECK_NO_SUCH_TABLE = 1177,t.ER_CHECK_NOT_IMPLEMENTED = 1178,t.ER_CANT_DO_THIS_DURING_AN_TRANSACTION = 1179,t.ER_ERROR_DURING_COMMIT = 1180,t.ER_ERROR_DURING_ROLLBACK = 1181,t.ER_ERROR_DURING_FLUSH_LOGS = 1182,t.ER_ERROR_DURING_CHECKPOINT = 1183,t.ER_NEW_ABORTING_CONNECTION = 1184,t.ER_DUMP_NOT_IMPLEMENTED = 1185,t.ER_FLUSH_MASTER_BINLOG_CLOSED = 1186,t.ER_INDEX_REBUILD = 1187,t.ER_MASTER = 1188,t.ER_MASTER_NET_READ = 1189,t.ER_MASTER_NET_WRITE = 1190,t.ER_FT_MATCHING_KEY_NOT_FOUND = 1191,t.ER_LOCK_OR_ACTIVE_TRANSACTION = 1192,t.ER_UNKNOWN_SYSTEM_VARIABLE = 1193,t.ER_CRASHED_ON_USAGE = 1194,t.ER_CRASHED_ON_REPAIR = 1195,t.ER_WARNING_NOT_COMPLETE_ROLLBACK = 1196,t.ER_TRANS_CACHE_FULL = 1197,t.ER_SLAVE_MUST_STOP = 1198,t.ER_SLAVE_NOT_RUNNING = 1199,t.ER_BAD_SLAVE = 1200,t.ER_MASTER_INFO = 1201,t.ER_SLAVE_THREAD = 1202,t.ER_TOO_MANY_USER_CONNECTIONS = 1203,t.ER_SET_CONSTANTS_ONLY = 1204,t.ER_LOCK_WAIT_TIMEOUT = 1205,t.ER_LOCK_TABLE_FULL = 1206,t.ER_READ_ONLY_TRANSACTION = 1207,t.ER_DROP_DB_WITH_READ_LOCK = 1208,t.ER_CREATE_DB_WITH_READ_LOCK = 1209,t.ER_WRONG_ARGUMENTS = 1210,t.ER_NO_PERMISSION_TO_CREATE_USER = 1211,t.ER_UNION_TABLES_IN_DIFFERENT_DIR = 1212,t.ER_LOCK_DEADLOCK = 1213,t.ER_TABLE_CANT_HANDLE_FT = 1214,t.ER_CANNOT_ADD_FOREIGN = 1215,t.ER_NO_REFERENCED_ROW = 1216,t.ER_ROW_IS_REFERENCED = 1217,t.ER_CONNECT_TO_MASTER = 1218,t.ER_QUERY_ON_MASTER = 1219,t.ER_ERROR_WHEN_EXECUTING_COMMAND = 1220,t.ER_WRONG_USAGE = 1221,t.ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT = 1222,t.ER_CANT_UPDATE_WITH_READLOCK = 1223,t.ER_MIXING_NOT_ALLOWED = 1224,t.ER_DUP_ARGUMENT = 1225,t.ER_USER_LIMIT_REACHED = 1226,t.ER_SPECIFIC_ACCESS_DENIED_ERROR = 1227,t.ER_LOCAL_VARIABLE = 1228,t.ER_GLOBAL_VARIABLE = 1229,t.ER_NO_DEFAULT = 1230,t.ER_WRONG_VALUE_FOR_VAR = 1231,t.ER_WRONG_TYPE_FOR_VAR = 1232,t.ER_VAR_CANT_BE_READ = 1233,t.ER_CANT_USE_OPTION_HERE = 1234,t.ER_NOT_SUPPORTED_YET = 1235,t.ER_MASTER_FATAL_ERROR_READING_BINLOG = 1236,t.ER_SLAVE_IGNORED_TABLE = 1237,t.ER_INCORRECT_GLOBAL_LOCAL_VAR = 1238,t.ER_WRONG_FK_DEF = 1239,t.ER_KEY_REF_DO_NOT_MATCH_TABLE_REF = 1240,t.ER_OPERAND_COLUMNS = 1241,t.ER_SUBQUERY_NO_1_ROW = 1242,t.ER_UNKNOWN_STMT_HANDLER = 1243,t.ER_CORRUPT_HELP_DB = 1244,t.ER_CYCLIC_REFERENCE = 1245,t.ER_AUTO_CONVERT = 1246,t.ER_ILLEGAL_REFERENCE = 1247,t.ER_DERIVED_MUST_HAVE_ALIAS = 1248,t.ER_SELECT_REDUCED = 1249,t.ER_TABLENAME_NOT_ALLOWED_HERE = 1250,t.ER_NOT_SUPPORTED_AUTH_MODE = 1251,t.ER_SPATIAL_CANT_HAVE_NULL = 1252,t.ER_COLLATION_CHARSET_MISMATCH = 1253,t.ER_SLAVE_WAS_RUNNING = 1254,t.ER_SLAVE_WAS_NOT_RUNNING = 1255,t.ER_TOO_BIG_FOR_UNCOMPRESS = 1256,t.ER_ZLIB_Z_MEM_ERROR = 1257,t.ER_ZLIB_Z_BUF_ERROR = 1258,t.ER_ZLIB_Z_DATA_ERROR = 1259,t.ER_CUT_VALUE_GROUP_CONCAT = 1260,t.ER_WARN_TOO_FEW_RECORDS = 1261,t.ER_WARN_TOO_MANY_RECORDS = 1262,t.ER_WARN_NULL_TO_NOTNULL = 1263,t.ER_WARN_DATA_OUT_OF_RANGE = 1264,t.WARN_DATA_TRUNCATED = 1265,t.ER_WARN_USING_OTHER_HANDLER = 1266,t.ER_CANT_AGGREGATE_2COLLATIONS = 1267,t.ER_DROP_USER = 1268,t.ER_REVOKE_GRANTS = 1269,t.ER_CANT_AGGREGATE_3COLLATIONS = 1270,t.ER_CANT_AGGREGATE_NCOLLATIONS = 1271,t.ER_VARIABLE_IS_NOT_STRUCT = 1272,t.ER_UNKNOWN_COLLATION = 1273,t.ER_SLAVE_IGNORED_SSL_PARAMS = 1274,t.ER_SERVER_IS_IN_SECURE_AUTH_MODE = 1275,t.ER_WARN_FIELD_RESOLVED = 1276,t.ER_BAD_SLAVE_UNTIL_COND = 1277,t.ER_MISSING_SKIP_SLAVE = 1278,t.ER_UNTIL_COND_IGNORED = 1279,t.ER_WRONG_NAME_FOR_INDEX = 1280,t.ER_WRONG_NAME_FOR_CATALOG = 1281,t.ER_WARN_QC_RESIZE = 1282,t.ER_BAD_FT_COLUMN = 1283,t.ER_UNKNOWN_KEY_CACHE = 1284,t.ER_WARN_HOSTNAME_WONT_WORK = 1285,t.ER_UNKNOWN_STORAGE_ENGINE = 1286,t.ER_WARN_DEPRECATED_SYNTAX = 1287,t.ER_NON_UPDATABLE_TABLE = 1288,t.ER_FEATURE_DISABLED = 1289,t.ER_OPTION_PREVENTS_STATEMENT = 1290,t.ER_DUPLICATED_VALUE_IN_TYPE = 1291,t.ER_TRUNCATED_WRONG_VALUE = 1292,t.ER_TOO_MUCH_AUTO_TIMESTAMP_COLS = 1293,t.ER_INVALID_ON_UPDATE = 1294,t.ER_UNSUPPORTED_PS = 1295,t.ER_GET_ERRMSG = 1296,t.ER_GET_TEMPORARY_ERRMSG = 1297,t.ER_UNKNOWN_TIME_ZONE = 1298,t.ER_WARN_INVALID_TIMESTAMP = 1299,t.ER_INVALID_CHARACTER_STRING = 1300,t.ER_WARN_ALLOWED_PACKET_OVERFLOWED = 1301,t.ER_CONFLICTING_DECLARATIONS = 1302,t.ER_SP_NO_RECURSIVE_CREATE = 1303,t.ER_SP_ALREADY_EXISTS = 1304,t.ER_SP_DOES_NOT_EXIST = 1305,t.ER_SP_DROP_FAILED = 1306,t.ER_SP_STORE_FAILED = 1307,t.ER_SP_LILABEL_MISMATCH = 1308,t.ER_SP_LABEL_REDEFINE = 1309,t.ER_SP_LABEL_MISMATCH = 1310,t.ER_SP_UNINIT_VAR = 1311,t.ER_SP_BADSELECT = 1312,t.ER_SP_BADRETURN = 1313,t.ER_SP_BADSTATEMENT = 1314,t.ER_UPDATE_LOG_DEPRECATED_IGNORED = 1315,t.ER_UPDATE_LOG_DEPRECATED_TRANSLATED = 1316,t.ER_QUERY_INTERRUPTED = 1317,t.ER_SP_WRONG_NO_OF_ARGS = 1318,t.ER_SP_COND_MISMATCH = 1319,t.ER_SP_NORETURN = 1320,t.ER_SP_NORETURNEND = 1321,t.ER_SP_BAD_CURSOR_QUERY = 1322,t.ER_SP_BAD_CURSOR_SELECT = 1323,t.ER_SP_CURSOR_MISMATCH = 1324,t.ER_SP_CURSOR_ALREADY_OPEN = 1325,t.ER_SP_CURSOR_NOT_OPEN = 1326,t.ER_SP_UNDECLARED_VAR = 1327,t.ER_SP_WRONG_NO_OF_FETCH_ARGS = 1328,t.ER_SP_FETCH_NO_DATA = 1329,t.ER_SP_DUP_PARAM = 1330,t.ER_SP_DUP_VAR = 1331,t.ER_SP_DUP_COND = 1332,t.ER_SP_DUP_CURS = 1333,t.ER_SP_CANT_ALTER = 1334,t.ER_SP_SUBSELECT_NYI = 1335,t.ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG = 1336,t.ER_SP_VARCOND_AFTER_CURSHNDLR = 1337,t.ER_SP_CURSOR_AFTER_HANDLER = 1338,t.ER_SP_CASE_NOT_FOUND = 1339,t.ER_FPARSER_TOO_BIG_FILE = 1340,t.ER_FPARSER_BAD_HEADER = 1341,t.ER_FPARSER_EOF_IN_COMMENT = 1342,t.ER_FPARSER_ERROR_IN_PARAMETER = 1343,t.ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER = 1344,t.ER_VIEW_NO_EXPLAIN = 1345,t.ER_FRM_UNKNOWN_TYPE = 1346,t.ER_WRONG_OBJECT = 1347,t.ER_NONUPDATEABLE_COLUMN = 1348,t.ER_VIEW_SELECT_DERIVED = 1349,t.ER_VIEW_SELECT_CLAUSE = 1350,t.ER_VIEW_SELECT_VARIABLE = 1351,t.ER_VIEW_SELECT_TMPTABLE = 1352,t.ER_VIEW_WRONG_LIST = 1353,t.ER_WARN_VIEW_MERGE = 1354,t.ER_WARN_VIEW_WITHOUT_KEY = 1355,t.ER_VIEW_INVALID = 1356,t.ER_SP_NO_DROP_SP = 1357,t.ER_SP_GOTO_IN_HNDLR = 1358,t.ER_TRG_ALREADY_EXISTS = 1359,t.ER_TRG_DOES_NOT_EXIST = 1360,t.ER_TRG_ON_VIEW_OR_TEMP_TABLE = 1361,t.ER_TRG_CANT_CHANGE_ROW = 1362,t.ER_TRG_NO_SUCH_ROW_IN_TRG = 1363,t.ER_NO_DEFAULT_FOR_FIELD = 1364,t.ER_DIVISION_BY_ZERO = 1365,t.ER_TRUNCATED_WRONG_VALUE_FOR_FIELD = 1366,t.ER_ILLEGAL_VALUE_FOR_TYPE = 1367,t.ER_VIEW_NONUPD_CHECK = 1368,t.ER_VIEW_CHECK_FAILED = 1369,t.ER_PROCACCESS_DENIED_ERROR = 1370,t.ER_RELAY_LOG_FAIL = 1371,t.ER_PASSWD_LENGTH = 1372,t.ER_UNKNOWN_TARGET_BINLOG = 1373,t.ER_IO_ERR_LOG_INDEX_READ = 1374,t.ER_BINLOG_PURGE_PROHIBITED = 1375,t.ER_FSEEK_FAIL = 1376,t.ER_BINLOG_PURGE_FATAL_ERR = 1377,t.ER_LOG_IN_USE = 1378,t.ER_LOG_PURGE_UNKNOWN_ERR = 1379,t.ER_RELAY_LOG_INIT = 1380,t.ER_NO_BINARY_LOGGING = 1381,t.ER_RESERVED_SYNTAX = 1382,t.ER_WSAS_FAILED = 1383,t.ER_DIFF_GROUPS_PROC = 1384,t.ER_NO_GROUP_FOR_PROC = 1385,t.ER_ORDER_WITH_PROC = 1386,t.ER_LOGGING_PROHIBIT_CHANGING_OF = 1387,t.ER_NO_FILE_MAPPING = 1388,t.ER_WRONG_MAGIC = 1389,t.ER_PS_MANY_PARAM = 1390,t.ER_KEY_PART_0 = 1391,t.ER_VIEW_CHECKSUM = 1392,t.ER_VIEW_MULTIUPDATE = 1393,t.ER_VIEW_NO_INSERT_FIELD_LIST = 1394,t.ER_VIEW_DELETE_MERGE_VIEW = 1395,t.ER_CANNOT_USER = 1396,t.ER_XAER_NOTA = 1397,t.ER_XAER_INVAL = 1398,t.ER_XAER_RMFAIL = 1399,t.ER_XAER_OUTSIDE = 1400,t.ER_XAER_RMERR = 1401,t.ER_XA_RBROLLBACK = 1402,t.ER_NONEXISTING_PROC_GRANT = 1403,t.ER_PROC_AUTO_GRANT_FAIL = 1404,t.ER_PROC_AUTO_REVOKE_FAIL = 1405,t.ER_DATA_TOO_LONG = 1406,t.ER_SP_BAD_SQLSTATE = 1407,t.ER_STARTUP = 1408,t.ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR = 1409,t.ER_CANT_CREATE_USER_WITH_GRANT = 1410,t.ER_WRONG_VALUE_FOR_TYPE = 1411,t.ER_TABLE_DEF_CHANGED = 1412,t.ER_SP_DUP_HANDLER = 1413,t.ER_SP_NOT_VAR_ARG = 1414,t.ER_SP_NO_RETSET = 1415,t.ER_CANT_CREATE_GEOMETRY_OBJECT = 1416,t.ER_FAILED_ROUTINE_BREAK_BINLOG = 1417,t.ER_BINLOG_UNSAFE_ROUTINE = 1418,t.ER_BINLOG_CREATE_ROUTINE_NEED_SUPER = 1419,t.ER_EXEC_STMT_WITH_OPEN_CURSOR = 1420,t.ER_STMT_HAS_NO_OPEN_CURSOR = 1421,t.ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG = 1422,t.ER_NO_DEFAULT_FOR_VIEW_FIELD = 1423,t.ER_SP_NO_RECURSION = 1424,t.ER_TOO_BIG_SCALE = 1425,t.ER_TOO_BIG_PRECISION = 1426,t.ER_M_BIGGER_THAN_D = 1427,t.ER_WRONG_LOCK_OF_SYSTEM_TABLE = 1428,t.ER_CONNECT_TO_FOREIGN_DATA_SOURCE = 1429,t.ER_QUERY_ON_FOREIGN_DATA_SOURCE = 1430,t.ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST = 1431,t.ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE = 1432,t.ER_FOREIGN_DATA_STRING_INVALID = 1433,t.ER_CANT_CREATE_FEDERATED_TABLE = 1434,t.ER_TRG_IN_WRONG_SCHEMA = 1435,t.ER_STACK_OVERRUN_NEED_MORE = 1436,t.ER_TOO_LONG_BODY = 1437,t.ER_WARN_CANT_DROP_DEFAULT_KEYCACHE = 1438,t.ER_TOO_BIG_DISPLAYWIDTH = 1439,t.ER_XAER_DUPID = 1440,t.ER_DATETIME_FUNCTION_OVERFLOW = 1441,t.ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG = 1442,t.ER_VIEW_PREVENT_UPDATE = 1443,t.ER_PS_NO_RECURSION = 1444,t.ER_SP_CANT_SET_AUTOCOMMIT = 1445,t.ER_MALFORMED_DEFINER = 1446,t.ER_VIEW_FRM_NO_USER = 1447,t.ER_VIEW_OTHER_USER = 1448,t.ER_NO_SUCH_USER = 1449,t.ER_FORBID_SCHEMA_CHANGE = 1450,t.ER_ROW_IS_REFERENCED_2 = 1451,t.ER_NO_REFERENCED_ROW_2 = 1452,t.ER_SP_BAD_VAR_SHADOW = 1453,t.ER_TRG_NO_DEFINER = 1454,t.ER_OLD_FILE_FORMAT = 1455,t.ER_SP_RECURSION_LIMIT = 1456,t.ER_SP_PROC_TABLE_CORRUPT = 1457,t.ER_SP_WRONG_NAME = 1458,t.ER_TABLE_NEEDS_UPGRADE = 1459,t.ER_SP_NO_AGGREGATE = 1460,t.ER_MAX_PREPARED_STMT_COUNT_REACHED = 1461,t.ER_VIEW_RECURSIVE = 1462,t.ER_NON_GROUPING_FIELD_USED = 1463,t.ER_TABLE_CANT_HANDLE_SPKEYS = 1464,t.ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA = 1465,t.ER_REMOVED_SPACES = 1466,t.ER_AUTOINC_READ_FAILED = 1467,t.ER_USERNAME = 1468,t.ER_HOSTNAME = 1469,t.ER_WRONG_STRING_LENGTH = 1470,t.ER_NON_INSERTABLE_TABLE = 1471,t.ER_ADMIN_WRONG_MRG_TABLE = 1472,t.ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT = 1473,t.ER_NAME_BECOMES_EMPTY = 1474,t.ER_AMBIGUOUS_FIELD_TERM = 1475,t.ER_FOREIGN_SERVER_EXISTS = 1476,t.ER_FOREIGN_SERVER_DOESNT_EXIST = 1477,t.ER_ILLEGAL_HA_CREATE_OPTION = 1478,t.ER_PARTITION_REQUIRES_VALUES_ERROR = 1479,t.ER_PARTITION_WRONG_VALUES_ERROR = 1480,t.ER_PARTITION_MAXVALUE_ERROR = 1481,t.ER_PARTITION_SUBPARTITION_ERROR = 1482,t.ER_PARTITION_SUBPART_MIX_ERROR = 1483,t.ER_PARTITION_WRONG_NO_PART_ERROR = 1484,t.ER_PARTITION_WRONG_NO_SUBPART_ERROR = 1485,t.ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR = 1486,t.ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR = 1487,t.ER_FIELD_NOT_FOUND_PART_ERROR = 1488,t.ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR = 1489,t.ER_INCONSISTENT_PARTITION_INFO_ERROR = 1490,t.ER_PARTITION_FUNC_NOT_ALLOWED_ERROR = 1491,t.ER_PARTITIONS_MUST_BE_DEFINED_ERROR = 1492,t.ER_RANGE_NOT_INCREASING_ERROR = 1493,t.ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR = 1494,t.ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR = 1495,t.ER_PARTITION_ENTRY_ERROR = 1496,t.ER_MIX_HANDLER_ERROR = 1497,t.ER_PARTITION_NOT_DEFINED_ERROR = 1498,t.ER_TOO_MANY_PARTITIONS_ERROR = 1499,t.ER_SUBPARTITION_ERROR = 1500,t.ER_CANT_CREATE_HANDLER_FILE = 1501,t.ER_BLOB_FIELD_IN_PART_FUNC_ERROR = 1502,t.ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF = 1503,t.ER_NO_PARTS_ERROR = 1504,t.ER_PARTITION_MGMT_ON_NONPARTITIONED = 1505,t.ER_FOREIGN_KEY_ON_PARTITIONED = 1506,t.ER_DROP_PARTITION_NON_EXISTENT = 1507,t.ER_DROP_LAST_PARTITION = 1508,t.ER_COALESCE_ONLY_ON_HASH_PARTITION = 1509,t.ER_REORG_HASH_ONLY_ON_SAME_NO = 1510,t.ER_REORG_NO_PARAM_ERROR = 1511,t.ER_ONLY_ON_RANGE_LIST_PARTITION = 1512,t.ER_ADD_PARTITION_SUBPART_ERROR = 1513,t.ER_ADD_PARTITION_NO_NEW_PARTITION = 1514,t.ER_COALESCE_PARTITION_NO_PARTITION = 1515,t.ER_REORG_PARTITION_NOT_EXIST = 1516,t.ER_SAME_NAME_PARTITION = 1517,t.ER_NO_BINLOG_ERROR = 1518,t.ER_CONSECUTIVE_REORG_PARTITIONS = 1519,t.ER_REORG_OUTSIDE_RANGE = 1520,t.ER_PARTITION_FUNCTION_FAILURE = 1521,t.ER_PART_STATE_ERROR = 1522,t.ER_LIMITED_PART_RANGE = 1523,t.ER_PLUGIN_IS_NOT_LOADED = 1524,t.ER_WRONG_VALUE = 1525,t.ER_NO_PARTITION_FOR_GIVEN_VALUE = 1526,t.ER_FILEGROUP_OPTION_ONLY_ONCE = 1527,t.ER_CREATE_FILEGROUP_FAILED = 1528,t.ER_DROP_FILEGROUP_FAILED = 1529,t.ER_TABLESPACE_AUTO_EXTEND_ERROR = 1530,t.ER_WRONG_SIZE_NUMBER = 1531,t.ER_SIZE_OVERFLOW_ERROR = 1532,t.ER_ALTER_FILEGROUP_FAILED = 1533,t.ER_BINLOG_ROW_LOGGING_FAILED = 1534,t.ER_BINLOG_ROW_WRONG_TABLE_DEF = 1535,t.ER_BINLOG_ROW_RBR_TO_SBR = 1536,t.ER_EVENT_ALREADY_EXISTS = 1537,t.ER_EVENT_STORE_FAILED = 1538,t.ER_EVENT_DOES_NOT_EXIST = 1539,t.ER_EVENT_CANT_ALTER = 1540,t.ER_EVENT_DROP_FAILED = 1541,t.ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG = 1542,t.ER_EVENT_ENDS_BEFORE_STARTS = 1543,t.ER_EVENT_EXEC_TIME_IN_THE_PAST = 1544,t.ER_EVENT_OPEN_TABLE_FAILED = 1545,t.ER_EVENT_NEITHER_M_EXPR_NOR_M_AT = 1546,t.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED = 1547,t.ER_CANNOT_LOAD_FROM_TABLE = 1548,t.ER_EVENT_CANNOT_DELETE = 1549,t.ER_EVENT_COMPILE_ERROR = 1550,t.ER_EVENT_SAME_NAME = 1551,t.ER_EVENT_DATA_TOO_LONG = 1552,t.ER_DROP_INDEX_FK = 1553,t.ER_WARN_DEPRECATED_SYNTAX_WITH_VER = 1554,t.ER_CANT_WRITE_LOCK_LOG_TABLE = 1555,t.ER_CANT_LOCK_LOG_TABLE = 1556,t.ER_FOREIGN_DUPLICATE_KEY = 1557,t.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE = 1558,t.ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR = 1559,t.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT = 1560,t.ER_NDB_CANT_SWITCH_BINLOG_FORMAT = 1561,t.ER_PARTITION_NO_TEMPORARY = 1562,t.ER_PARTITION_CONST_DOMAIN_ERROR = 1563,t.ER_PARTITION_FUNCTION_IS_NOT_ALLOWED = 1564,t.ER_DDL_LOG_ERROR = 1565,t.ER_NULL_IN_VALUES_LESS_THAN = 1566,t.ER_WRONG_PARTITION_NAME = 1567,t.ER_CANT_CHANGE_TX_CHARACTERISTICS = 1568,t.ER_DUP_ENTRY_AUTOINCREMENT_CASE = 1569,t.ER_EVENT_MODIFY_QUEUE_ERROR = 1570,t.ER_EVENT_SET_VAR_ERROR = 1571,t.ER_PARTITION_MERGE_ERROR = 1572,t.ER_CANT_ACTIVATE_LOG = 1573,t.ER_RBR_NOT_AVAILABLE = 1574,t.ER_BASE64_DECODE_ERROR = 1575,t.ER_EVENT_RECURSION_FORBIDDEN = 1576,t.ER_EVENTS_DB_ERROR = 1577,t.ER_ONLY_INTEGERS_ALLOWED = 1578,t.ER_UNSUPORTED_LOG_ENGINE = 1579,t.ER_BAD_LOG_STATEMENT = 1580,t.ER_CANT_RENAME_LOG_TABLE = 1581,t.ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT = 1582,t.ER_WRONG_PARAMETERS_TO_NATIVE_FCT = 1583,t.ER_WRONG_PARAMETERS_TO_STORED_FCT = 1584,t.ER_NATIVE_FCT_NAME_COLLISION = 1585,t.ER_DUP_ENTRY_WITH_KEY_NAME = 1586,t.ER_BINLOG_PURGE_EMFILE = 1587,t.ER_EVENT_CANNOT_CREATE_IN_THE_PAST = 1588,t.ER_EVENT_CANNOT_ALTER_IN_THE_PAST = 1589,t.ER_SLAVE_INCIDENT = 1590,t.ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT = 1591,t.ER_BINLOG_UNSAFE_STATEMENT = 1592,t.ER_SLAVE_FATAL_ERROR = 1593,t.ER_SLAVE_RELAY_LOG_READ_FAILURE = 1594,t.ER_SLAVE_RELAY_LOG_WRITE_FAILURE = 1595,t.ER_SLAVE_CREATE_EVENT_FAILURE = 1596,t.ER_SLAVE_MASTER_COM_FAILURE = 1597,t.ER_BINLOG_LOGGING_IMPOSSIBLE = 1598,t.ER_VIEW_NO_CREATION_CTX = 1599,t.ER_VIEW_INVALID_CREATION_CTX = 1600,t.ER_SR_INVALID_CREATION_CTX = 1601,t.ER_TRG_CORRUPTED_FILE = 1602,t.ER_TRG_NO_CREATION_CTX = 1603,t.ER_TRG_INVALID_CREATION_CTX = 1604,t.ER_EVENT_INVALID_CREATION_CTX = 1605,t.ER_TRG_CANT_OPEN_TABLE = 1606,t.ER_CANT_CREATE_SROUTINE = 1607,t.ER_NEVER_USED = 1608,t.ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT = 1609,t.ER_SLAVE_CORRUPT_EVENT = 1610,t.ER_LOAD_DATA_INVALID_COLUMN = 1611,t.ER_LOG_PURGE_NO_FILE = 1612,t.ER_XA_RBTIMEOUT = 1613,t.ER_XA_RBDEADLOCK = 1614,t.ER_NEED_REPREPARE = 1615,t.ER_DELAYED_NOT_SUPPORTED = 1616,t.WARN_NO_MASTER_INFO = 1617,t.WARN_OPTION_IGNORED = 1618,t.ER_PLUGIN_DELETE_BUILTIN = 1619,t.WARN_PLUGIN_BUSY = 1620,t.ER_VARIABLE_IS_READONLY = 1621,t.ER_WARN_ENGINE_TRANSACTION_ROLLBACK = 1622,t.ER_SLAVE_HEARTBEAT_FAILURE = 1623,t.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE = 1624,t.ER_NDB_REPLICATION_SCHEMA_ERROR = 1625,t.ER_CONFLICT_FN_PARSE_ERROR = 1626,t.ER_EXCEPTIONS_WRITE_ERROR = 1627,t.ER_TOO_LONG_TABLE_COMMENT = 1628,t.ER_TOO_LONG_FIELD_COMMENT = 1629,t.ER_FUNC_INEXISTENT_NAME_COLLISION = 1630,t.ER_DATABASE_NAME = 1631,t.ER_TABLE_NAME = 1632,t.ER_PARTITION_NAME = 1633,t.ER_SUBPARTITION_NAME = 1634,t.ER_TEMPORARY_NAME = 1635,t.ER_RENAMED_NAME = 1636,t.ER_TOO_MANY_CONCURRENT_TRXS = 1637,t.WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED = 1638,t.ER_DEBUG_SYNC_TIMEOUT = 1639,t.ER_DEBUG_SYNC_HIT_LIMIT = 1640,t.ER_DUP_SIGNAL_SET = 1641,t.ER_SIGNAL_WARN = 1642,t.ER_SIGNAL_NOT_FOUND = 1643,t.ER_SIGNAL_EXCEPTION = 1644,t.ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER = 1645,t.ER_SIGNAL_BAD_CONDITION_TYPE = 1646,t.WARN_COND_ITEM_TRUNCATED = 1647,t.ER_COND_ITEM_TOO_LONG = 1648,t.ER_UNKNOWN_LOCALE = 1649,t.ER_SLAVE_IGNORE_SERVER_IDS = 1650,t.ER_QUERY_CACHE_DISABLED = 1651,t.ER_SAME_NAME_PARTITION_FIELD = 1652,t.ER_PARTITION_COLUMN_LIST_ERROR = 1653,t.ER_WRONG_TYPE_COLUMN_VALUE_ERROR = 1654,t.ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR = 1655,t.ER_MAXVALUE_IN_VALUES_IN = 1656,t.ER_TOO_MANY_VALUES_ERROR = 1657,t.ER_ROW_SINGLE_PARTITION_FIELD_ERROR = 1658,t.ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD = 1659,t.ER_PARTITION_FIELDS_TOO_LONG = 1660,t.ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE = 1661,t.ER_BINLOG_ROW_MODE_AND_STMT_ENGINE = 1662,t.ER_BINLOG_UNSAFE_AND_STMT_ENGINE = 1663,t.ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE = 1664,t.ER_BINLOG_STMT_MODE_AND_ROW_ENGINE = 1665,t.ER_BINLOG_ROW_INJECTION_AND_STMT_MODE = 1666,t.ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE = 1667,t.ER_BINLOG_UNSAFE_LIMIT = 1668,t.ER_BINLOG_UNSAFE_INSERT_DELAYED = 1669,t.ER_BINLOG_UNSAFE_SYSTEM_TABLE = 1670,t.ER_BINLOG_UNSAFE_AUTOINC_COLUMNS = 1671,t.ER_BINLOG_UNSAFE_UDF = 1672,t.ER_BINLOG_UNSAFE_SYSTEM_VARIABLE = 1673,t.ER_BINLOG_UNSAFE_SYSTEM_FUNCTION = 1674,t.ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS = 1675,t.ER_MESSAGE_AND_STATEMENT = 1676,t.ER_SLAVE_CONVERSION_FAILED = 1677,t.ER_SLAVE_CANT_CREATE_CONVERSION = 1678,t.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT = 1679,t.ER_PATH_LENGTH = 1680,t.ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT = 1681,t.ER_WRONG_NATIVE_TABLE_STRUCTURE = 1682,t.ER_WRONG_PERFSCHEMA_USAGE = 1683,t.ER_WARN_I_S_SKIPPED_TABLE = 1684,t.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT = 1685,t.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT = 1686;
      t.ER_SPATIAL_MUST_HAVE_GEOM_COL = 1687, t.ER_TOO_LONG_INDEX_COMMENT = 1688, t.ER_LOCK_ABORTED = 1689, t.ER_DATA_OUT_OF_RANGE = 1690, t.ER_WRONG_SPVAR_TYPE_IN_LIMIT = 1691, t.ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE = 1692, t.ER_BINLOG_UNSAFE_MIXED_STATEMENT = 1693, t.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN = 1694, t.ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN = 1695, t.ER_FAILED_READ_FROM_PAR_FILE = 1696, t.ER_VALUES_IS_NOT_INT_TYPE_ERROR = 1697, t.ER_ACCESS_DENIED_NO_PASSWORD_ERROR = 1698, t.ER_SET_PASSWORD_AUTH_PLUGIN = 1699, t.ER_GRANT_PLUGIN_USER_EXISTS = 1700, t.ER_TRUNCATE_ILLEGAL_FK = 1701, t.ER_PLUGIN_IS_PERMANENT = 1702, t.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN = 1703, t.ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX = 1704, t.ER_STMT_CACHE_FULL = 1705, t.ER_MULTI_UPDATE_KEY_CONFLICT = 1706, t.ER_TABLE_NEEDS_REBUILD = 1707, t.WARN_OPTION_BELOW_LIMIT = 1708, t.ER_INDEX_COLUMN_TOO_LONG = 1709, t.ER_ERROR_IN_TRIGGER_BODY = 1710, t.ER_ERROR_IN_UNKNOWN_TRIGGER_BODY = 1711, t.ER_INDEX_CORRUPT = 1712, t.ER_UNDO_RECORD_TOO_BIG = 1713, t.ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT = 1714, t.ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE = 1715, t.ER_BINLOG_UNSAFE_REPLACE_SELECT = 1716, t.ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT = 1717, t.ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT = 1718, t.ER_BINLOG_UNSAFE_UPDATE_IGNORE = 1719, t.ER_PLUGIN_NO_UNINSTALL = 1720, t.ER_PLUGIN_NO_INSTALL = 1721, t.ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT = 1722, t.ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC = 1723, t.ER_BINLOG_UNSAFE_INSERT_TWO_KEYS = 1724, t.ER_TABLE_IN_FK_CHECK = 1725, t.ER_UNSUPPORTED_ENGINE = 1726, t.ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST = 1727, t.ER_CANNOT_LOAD_FROM_TABLE_V2 = 1728, t.ER_MASTER_DELAY_VALUE_OUT_OF_RANGE = 1729, t.ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT = 1730, t.ER_PARTITION_EXCHANGE_DIFFERENT_OPTION = 1731, t.ER_PARTITION_EXCHANGE_PART_TABLE = 1732, t.ER_PARTITION_EXCHANGE_TEMP_TABLE = 1733, t.ER_PARTITION_INSTEAD_OF_SUBPARTITION = 1734, t.ER_UNKNOWN_PARTITION = 1735, t.ER_TABLES_DIFFERENT_METADATA = 1736, t.ER_ROW_DOES_NOT_MATCH_PARTITION = 1737, t.ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX = 1738, t.ER_WARN_INDEX_NOT_APPLICABLE = 1739, t.ER_PARTITION_EXCHANGE_FOREIGN_KEY = 1740, t.ER_NO_SUCH_KEY_VALUE = 1741, t.ER_RPL_INFO_DATA_TOO_LONG = 1742, t.ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE = 1743, t.ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE = 1744, t.ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX = 1745, t.ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT = 1746, t.ER_PARTITION_CLAUSE_ON_NONPARTITIONED = 1747, t.ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET = 1748, t.ER_NO_SUCH_PARTITION = 1749, t.ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE = 1750, t.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE = 1751, t.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE = 1752, t.ER_MTS_FEATURE_IS_NOT_SUPPORTED = 1753, t.ER_MTS_UPDATED_DBS_GREATER_MAX = 1754, t.ER_MTS_CANT_PARALLEL = 1755, t.ER_MTS_INCONSISTENT_DATA = 1756, t.ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING = 1757, t.ER_DA_INVALID_CONDITION_NUMBER = 1758, t.ER_INSECURE_PLAIN_TEXT = 1759, t.ER_INSECURE_CHANGE_MASTER = 1760, t.ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO = 1761, t.ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO = 1762, t.ER_SQLTHREAD_WITH_SECURE_SLAVE = 1763, t.ER_TABLE_HAS_NO_FT = 1764, t.ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER = 1765, t.ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION = 1766, t.ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST = 1767, t.ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION = 1768, t.ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION = 1769, t.ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL = 1770, t.ER_SKIPPING_LOGGED_TRANSACTION = 1771, t.ER_MALFORMED_GTID_SET_SPECIFICATION = 1772, t.ER_MALFORMED_GTID_SET_ENCODING = 1773, t.ER_MALFORMED_GTID_SPECIFICATION = 1774, t.ER_GNO_EXHAUSTED = 1775, t.ER_BAD_SLAVE_AUTO_POSITION = 1776, t.ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF = 1777, t.ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET = 1778, t.ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON = 1779, t.ER_GTID_MODE_REQUIRES_BINLOG = 1780, t.ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF = 1781, t.ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON = 1782, t.ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF = 1783, t.ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF = 1784, t.ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE = 1785, t.ER_GTID_UNSAFE_CREATE_SELECT = 1786, t.ER_GTID_UNSAFE_CREATE_DROP_TEMPORARY_TABLE_IN_TRANSACTION = 1787,t.ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME = 1788,t.ER_MASTER_HAS_PURGED_REQUIRED_GTIDS = 1789,t.ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID = 1790,t.ER_UNKNOWN_EXPLAIN_FORMAT = 1791,t.ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION = 1792,t.ER_TOO_LONG_TABLE_PARTITION_COMMENT = 1793,t.ER_SLAVE_CONFIGURATION = 1794,t.ER_INNODB_FT_LIMIT = 1795,t.ER_INNODB_NO_FT_TEMP_TABLE = 1796,t.ER_INNODB_FT_WRONG_DOCID_COLUMN = 1797,t.ER_INNODB_FT_WRONG_DOCID_INDEX = 1798,t.ER_INNODB_ONLINE_LOG_TOO_BIG = 1799,t.ER_UNKNOWN_ALTER_ALGORITHM = 1800,t.ER_UNKNOWN_ALTER_LOCK = 1801,t.ER_MTS_CHANGE_MASTER_CANT_RUN_WITH_GAPS = 1802,t.ER_MTS_RECOVERY_FAILURE = 1803,t.ER_MTS_RESET_WORKERS = 1804,t.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2 = 1805,t.ER_SLAVE_SILENT_RETRY_TRANSACTION = 1806,t.ER_DISCARD_FK_CHECKS_RUNNING = 1807,t.ER_TABLE_SCHEMA_MISMATCH = 1808,t.ER_TABLE_IN_SYSTEM_TABLESPACE = 1809,t.ER_IO_READ_ERROR = 1810,t.ER_IO_WRITE_ERROR = 1811,t.ER_TABLESPACE_MISSING = 1812,t.ER_TABLESPACE_EXISTS = 1813,t.ER_TABLESPACE_DISCARDED = 1814,t.ER_INTERNAL_ERROR = 1815,t.ER_INNODB_IMPORT_ERROR = 1816,t.ER_INNODB_INDEX_CORRUPT = 1817,t.ER_INVALID_YEAR_COLUMN_LENGTH = 1818,t.ER_NOT_VALID_PASSWORD = 1819,t.ER_MUST_CHANGE_PASSWORD = 1820,t.ER_FK_NO_INDEX_CHILD = 1821,t.ER_FK_NO_INDEX_PARENT = 1822,t.ER_FK_FAIL_ADD_SYSTEM = 1823,t.ER_FK_CANNOT_OPEN_PARENT = 1824,t.ER_FK_INCORRECT_OPTION = 1825,t.ER_FK_DUP_NAME = 1826,t.ER_PASSWORD_FORMAT = 1827,t.ER_FK_COLUMN_CANNOT_DROP = 1828,t.ER_FK_COLUMN_CANNOT_DROP_CHILD = 1829,t.ER_FK_COLUMN_NOT_NULL = 1830,t.ER_DUP_INDEX = 1831,t.ER_FK_COLUMN_CANNOT_CHANGE = 1832,t.ER_FK_COLUMN_CANNOT_CHANGE_CHILD = 1833,t.ER_FK_CANNOT_DELETE_PARENT = 1834,t.ER_MALFORMED_PACKET = 1835,t.ER_READ_ONLY_MODE = 1836,t.ER_GTID_NEXT_TYPE_UNDEFINED_GROUP = 1837,t.ER_VARIABLE_NOT_SETTABLE_IN_SP = 1838,t.ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF = 1839,t.ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY = 1840,t.ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY = 1841,t.ER_GTID_PURGED_WAS_CHANGED = 1842,t.ER_GTID_EXECUTED_WAS_CHANGED = 1843,t.ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES = 1844,t.ER_ALTER_OPERATION_NOT_SUPPORTED = 1845,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON = 1846,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY = 1847,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION = 1848,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME = 1849,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE = 1850,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK = 1851,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_IGNORE = 1852,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK = 1853,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC = 1854,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS = 1855,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS = 1856,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS = 1857,t.ER_SQL_SLAVE_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE = 1858,t.ER_DUP_UNKNOWN_IN_INDEX = 1859,t.ER_IDENT_CAUSES_TOO_LONG_PATH = 1860,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL = 1861,t.ER_MUST_CHANGE_PASSWORD_LOGIN = 1862,t.ER_ROW_IN_WRONG_PARTITION = 1863,t.ER_MTS_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX = 1864,t.ER_INNODB_NO_FT_USES_PARSER = 1865,t.ER_BINLOG_LOGICAL_CORRUPTION = 1866,t.ER_WARN_PURGE_LOG_IN_USE = 1867,t.ER_WARN_PURGE_LOG_IS_ACTIVE = 1868,t.ER_AUTO_INCREMENT_CONFLICT = 1869,t.WARN_ON_BLOCKHOLE_IN_RBR = 1870,t.ER_SLAVE_MI_INIT_REPOSITORY = 1871,t.ER_SLAVE_RLI_INIT_REPOSITORY = 1872,t.ER_ACCESS_DENIED_CHANGE_USER_ERROR = 1873,t.ER_INNODB_READ_ONLY = 1874,t.ER_STOP_SLAVE_SQL_THREAD_TIMEOUT = 1875,t.ER_STOP_SLAVE_IO_THREAD_TIMEOUT = 1876,t.ER_TABLE_CORRUPT = 1877,t.ER_TEMP_FILE_WRITE_FAILURE = 1878,t.ER_INNODB_FT_AUX_NOT_HEX_ID = 1879,t.ER_OLD_TEMPORALS_UPGRADED = 1880,t.ER_INNODB_FORCED_RECOVERY = 1881,t.ER_AES_INVALID_IV = 1882,t.ER_PLUGIN_CANNOT_BE_UNINSTALLED = 1883,t.ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_GTID_GROUP = 1884,t.ER_SLAVE_HAS_MORE_GTIDS_THAN_MASTER = 1885,t.ER_MISSING_KEY = 1886,t.WARN_NAMED_PIPE_ACCESS_EVERYONE = 1887,t.ER_FOUND_MISSING_GTIDS = 1888,t.ER_FILE_CORRUPT = 3e3,t.ER_ERROR_ON_MASTER = 3001,t.ER_INCONSISTENT_ERROR = 3002,t.ER_STORAGE_ENGINE_NOT_LOADED = 3003,t.ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER = 3004,t.ER_WARN_LEGACY_SYNTAX_CONVERTED = 3005,t.ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN = 3006,t.ER_CANNOT_DISCARD_TEMPORARY_TABLE = 3007,t.ER_FK_DEPTH_EXCEEDED = 3008,t.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2 = 3009,t.ER_WARN_TRIGGER_DOESNT_HAVE_CREATED = 3010,t.ER_REFERENCED_TRG_DOES_NOT_EXIST = 3011,t.ER_EXPLAIN_NOT_SUPPORTED = 3012,t.ER_INVALID_FIELD_SIZE = 3013,t.ER_MISSING_HA_CREATE_OPTION = 3014,t.ER_ENGINE_OUT_OF_MEMORY = 3015,t.ER_PASSWORD_EXPIRE_ANONYMOUS_USER = 3016,t.ER_SLAVE_SQL_THREAD_MUST_STOP = 3017,t.ER_NO_FT_MATERIALIZED_SUBQUERY = 3018,t.ER_INNODB_UNDO_LOG_FULL = 3019,t.ER_INVALID_ARGUMENT_FOR_LOGARITHM = 3020,t.ER_SLAVE_CHANNEL_IO_THREAD_MUST_STOP = 3021,t.ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO = 3022,t.ER_WARN_ONLY_MASTER_LOG_FILE_NO_POS = 3023,t.ER_QUERY_TIMEOUT = 3024,t.ER_NON_RO_SELECT_DISABLE_TIMER = 3025,t.ER_DUP_LIST_ENTRY = 3026,t.ER_SQL_MODE_NO_EFFECT = 3027,t.ER_AGGREGATE_ORDER_FOR_UNION = 3028,t.ER_AGGREGATE_ORDER_NON_AGG_QUERY = 3029,t.ER_SLAVE_WORKER_STOPPED_PREVIOUS_THD_ERROR = 3030,t.ER_DONT_SUPPORT_SLAVE_PRESERVE_COMMIT_ORDER = 3031,t.ER_SERVER_OFFLINE_MODE = 3032,t.ER_GIS_DIFFERENT_SRIDS = 3033,t.ER_GIS_UNSUPPORTED_ARGUMENT = 3034,t.ER_GIS_UNKNOWN_ERROR = 3035,t.ER_GIS_UNKNOWN_EXCEPTION = 3036,t.ER_GIS_INVALID_DATA = 3037,t.ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION = 3038,t.ER_BOOST_GEOMETRY_CENTROID_EXCEPTION = 3039,t.ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION = 3040,t.ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION = 3041,t.ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION = 3042,t.ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION = 3043,t.ER_STD_BAD_ALLOC_ERROR = 3044,t.ER_STD_DOMAIN_ERROR = 3045,t.ER_STD_LENGTH_ERROR = 3046,t.ER_STD_INVALID_ARGUMENT = 3047,t.ER_STD_OUT_OF_RANGE_ERROR = 3048,t.ER_STD_OVERFLOW_ERROR = 3049,t.ER_STD_RANGE_ERROR = 3050,t.ER_STD_UNDERFLOW_ERROR = 3051,t.ER_STD_LOGIC_ERROR = 3052,t.ER_STD_RUNTIME_ERROR = 3053,t.ER_STD_UNKNOWN_EXCEPTION = 3054,t.ER_GIS_DATA_WRONG_ENDIANESS = 3055,t.ER_CHANGE_MASTER_PASSWORD_LENGTH = 3056,t.ER_USER_LOCK_WRONG_NAME = 3057,t.ER_USER_LOCK_DEADLOCK = 3058,t.ER_REPLACE_INACCESSIBLE_ROWS = 3059,t.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS = 3060,t.ER_ILLEGAL_USER_VAR = 3061,t.ER_GTID_MODE_OFF = 3062,t.ER_UNSUPPORTED_BY_REPLICATION_THREAD = 3063,t.ER_INCORRECT_TYPE = 3064,t.ER_FIELD_IN_ORDER_NOT_SELECT = 3065,t.ER_AGGREGATE_IN_ORDER_NOT_SELECT = 3066,t.ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN = 3067,t.ER_NET_OK_PACKET_TOO_LARGE = 3068,t.ER_INVALID_JSON_DATA = 3069,t.ER_INVALID_GEOJSON_MISSING_MEMBER = 3070,t.ER_INVALID_GEOJSON_WRONG_TYPE = 3071,t.ER_INVALID_GEOJSON_UNSPECIFIED = 3072,t.ER_DIMENSION_UNSUPPORTED = 3073,t.ER_SLAVE_CHANNEL_DOES_NOT_EXIST = 3074,t.ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT = 3075,t.ER_SLAVE_CHANNEL_NAME_INVALID_OR_TOO_LONG = 3076,t.ER_SLAVE_NEW_CHANNEL_WRONG_REPOSITORY = 3077,t.ER_SLAVE_CHANNEL_DELETE = 3078,t.ER_SLAVE_MULTIPLE_CHANNELS_CMD = 3079,t.ER_SLAVE_MAX_CHANNELS_EXCEEDED = 3080,t.ER_SLAVE_CHANNEL_MUST_STOP = 3081,t.ER_SLAVE_CHANNEL_NOT_RUNNING = 3082,t.ER_SLAVE_CHANNEL_WAS_RUNNING = 3083,t.ER_SLAVE_CHANNEL_WAS_NOT_RUNNING = 3084,t.ER_SLAVE_CHANNEL_SQL_THREAD_MUST_STOP = 3085,t.ER_SLAVE_CHANNEL_SQL_SKIP_COUNTER = 3086,t.ER_WRONG_FIELD_WITH_GROUP_V2 = 3087,t.ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2 = 3088,t.ER_WARN_DEPRECATED_SYSVAR_UPDATE = 3089,t.ER_WARN_DEPRECATED_SQLMODE = 3090,t.ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID = 3091,t.ER_GROUP_REPLICATION_CONFIGURATION = 3092,t.ER_GROUP_REPLICATION_RUNNING = 3093,t.ER_GROUP_REPLICATION_APPLIER_INIT_ERROR = 3094,t.ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT = 3095,t.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR = 3096,t.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR = 3097,t.ER_BEFORE_DML_VALIDATION_ERROR = 3098,t.ER_PREVENTS_VARIABLE_WITHOUT_RBR = 3099,t.ER_RUN_HOOK_ERROR = 3100,t.ER_TRANSACTION_ROLLBACK_DURING_COMMIT = 3101,t.ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED = 3102,t.ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN = 3103,t.ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN = 3104,t.ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN = 3105,t.ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN = 3106,t.ER_GENERATED_COLUMN_NON_PRIOR = 3107,t.ER_DEPENDENT_BY_GENERATED_COLUMN = 3108,t.ER_GENERATED_COLUMN_REF_AUTO_INC = 3109,t.ER_FEATURE_NOT_AVAILABLE = 3110,t.ER_CANT_SET_GTID_MODE = 3111,t.ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF = 3112,t.ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION = 3113,t.ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON = 3114,t.ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF = 3115,t.ER_CANT_SET_ENFORCE_GTID_CONSISTENCY_ON_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS = 3116,t.ER_SET_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS = 3117,t.ER_ACCOUNT_HAS_BEEN_LOCKED = 3118,t.ER_WRONG_TABLESPACE_NAME = 3119,t.ER_TABLESPACE_IS_NOT_EMPTY = 3120,t.ER_WRONG_FILE_NAME = 3121,t.ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION = 3122,t.ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR = 3123,t.ER_WARN_BAD_MAX_EXECUTION_TIME = 3124,t.ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME = 3125,t.ER_WARN_CONFLICTING_HINT = 3126,t.ER_WARN_UNKNOWN_QB_NAME = 3127,t.ER_UNRESOLVED_HINT_NAME = 3128,t.ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE = 3129,t.ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED = 3130,t.ER_LOCKING_SERVICE_WRONG_NAME = 3131,t.ER_LOCKING_SERVICE_DEADLOCK = 3132,t.ER_LOCKING_SERVICE_TIMEOUT = 3133,t.ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED = 3134,t.ER_SQL_MODE_MERGED = 3135,t.ER_VTOKEN_PLUGIN_TOKEN_MISMATCH = 3136,t.ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND = 3137,t.ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID = 3138,t.ER_SLAVE_CHANNEL_OPERATION_NOT_ALLOWED = 3139,t.ER_INVALID_JSON_TEXT = 3140,t.ER_INVALID_JSON_TEXT_IN_PARAM = 3141,t.ER_INVALID_JSON_BINARY_DATA = 3142,t.ER_INVALID_JSON_PATH = 3143,t.ER_INVALID_JSON_CHARSET = 3144,t.ER_INVALID_JSON_CHARSET_IN_FUNCTION = 3145,t.ER_INVALID_TYPE_FOR_JSON = 3146,t.ER_INVALID_CAST_TO_JSON = 3147,t.ER_INVALID_JSON_PATH_CHARSET = 3148,t.ER_INVALID_JSON_PATH_WILDCARD = 3149,t.ER_JSON_VALUE_TOO_BIG = 3150,t.ER_JSON_KEY_TOO_BIG = 3151,t.ER_JSON_USED_AS_KEY = 3152,t.ER_JSON_VACUOUS_PATH = 3153,t.ER_JSON_BAD_ONE_OR_ALL_ARG = 3154,t.ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE = 3155,t.ER_INVALID_JSON_VALUE_FOR_CAST = 3156,t.ER_JSON_DOCUMENT_TOO_DEEP = 3157,t.ER_JSON_DOCUMENT_NULL_KEY = 3158,t.ER_SECURE_TRANSPORT_REQUIRED = 3159,t.ER_NO_SECURE_TRANSPORTS_CONFIGURED = 3160,t.ER_DISABLED_STORAGE_ENGINE = 3161,t.ER_USER_DOES_NOT_EXIST = 3162,t.ER_USER_ALREADY_EXISTS = 3163,t.ER_AUDIT_API_ABORT = 3164,t.ER_INVALID_JSON_PATH_ARRAY_CELL = 3165,t.ER_BUFPOOL_RESIZE_INPROGRESS = 3166,t.ER_FEATURE_DISABLED_SEE_DOC = 3167,t.ER_SERVER_ISNT_AVAILABLE = 3168,t.ER_SESSION_WAS_KILLED = 3169,t.ER_CAPACITY_EXCEEDED = 3170,t.ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER = 3171,t.ER_TABLE_NEEDS_UPG_PART = 3172,t.ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID = 3173,t.ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL = 3174,t.ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT = 3175,t.ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE = 3176,t.ER_LOCK_REFUSED_BY_ENGINE = 3177,t.ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN = 3178,t.ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE = 3179,t.ER_MASTER_KEY_ROTATION_ERROR_BY_SE = 3180,t.ER_MASTER_KEY_ROTATION_BINLOG_FAILED = 3181,t.ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE = 3182,t.ER_TABLESPACE_CANNOT_ENCRYPT = 3183,t.ER_INVALID_ENCRYPTION_OPTION = 3184,t.ER_CANNOT_FIND_KEY_IN_KEYRING = 3185,t.ER_CAPACITY_EXCEEDED_IN_PARSER = 3186,t.ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE = 3187,t.ER_KEYRING_UDF_KEYRING_SERVICE_ERROR = 3188,t.ER_USER_COLUMN_OLD_LENGTH = 3189,t.ER_CANT_RESET_MASTER = 3190,t.ER_GROUP_REPLICATION_MAX_GROUP_SIZE = 3191,t.ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED = 3192,t.ER_TABLE_REFERENCED = 3193,t.ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE = 3194,t.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO = 3195,t.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID = 3196,t.ER_XA_RETRY = 3197,t.ER_KEYRING_AWS_UDF_AWS_KMS_ERROR = 3198,t.ER_BINLOG_UNSAFE_XA = 3199,t.ER_UDF_ERROR = 3200,t.ER_KEYRING_MIGRATION_FAILURE = 3201,t.ER_KEYRING_ACCESS_DENIED_ERROR = 3202,t.ER_KEYRING_MIGRATION_STATUS = 3203,t.ER_PLUGIN_FAILED_TO_OPEN_TABLES = 3204,t.ER_PLUGIN_FAILED_TO_OPEN_TABLE = 3205,t.ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED = 3206,t.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET = 3207,t.ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY = 3208,t.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED = 3209,t.ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED = 3210,t.ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE = 3211,t.ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED = 3212,t.ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS = 3213,t.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE = 3214,t.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT = 3215,t.ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED = 3216,t.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE = 3217,t.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE = 3218,t.ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR = 3219,t.ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY = 3220,t.ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY = 3221,t.ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS = 3222,t.ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC = 3223,t.ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER = 3224,t.ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER = 3225,t.WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP = 3226,t.ER_XA_REPLICATION_FILTERS = 3227,t.ER_CANT_OPEN_ERROR_LOG = 3228,t.ER_GROUPING_ON_TIMESTAMP_IN_DST = 3229,t.ER_CANT_START_SERVER_NAMED_PIPE = 3230,t[1] = "EE_CANTCREATEFILE",t[2] = "EE_READ",t[3] = "EE_WRITE",t[4] = "EE_BADCLOSE",t[5] = "EE_OUTOFMEMORY",t[6] = "EE_DELETE",t[7] = "EE_LINK",t[9] = "EE_EOFERR",t[10] = "EE_CANTLOCK",t[11] = "EE_CANTUNLOCK",t[12] = "EE_DIR",t[13] = "EE_STAT",t[14] = "EE_CANT_CHSIZE",t[15] = "EE_CANT_OPEN_STREAM",t[16] = "EE_GETWD",t[17] = "EE_SETWD",t[18] = "EE_LINK_WARNING",t[19] = "EE_OPEN_WARNING",t[20] = "EE_DISK_FULL",t[21] = "EE_CANT_MKDIR",t[22] = "EE_UNKNOWN_CHARSET",t[23] = "EE_OUT_OF_FILERESOURCES",t[24] = "EE_CANT_READLINK",t[25] = "EE_CANT_SYMLINK",t[26] = "EE_REALPATH",t[27] = "EE_SYNC",t[28] = "EE_UNKNOWN_COLLATION",t[29] = "EE_FILENOTFOUND",t[30] = "EE_FILE_NOT_CLOSED",t[31] = "EE_CHANGE_OWNERSHIP",t[32] = "EE_CHANGE_PERMISSIONS",t[33] = "EE_CANT_SEEK",t[34] = "EE_CAPACITY_EXCEEDED",t[120] = "HA_ERR_KEY_NOT_FOUND",t[121] = "HA_ERR_FOUND_DUPP_KEY",t[122] = "HA_ERR_INTERNAL_ERROR",t[123] = "HA_ERR_RECORD_CHANGED",t[124] = "HA_ERR_WRONG_INDEX",t[126] = "HA_ERR_CRASHED",t[127] = "HA_ERR_WRONG_IN_RECORD",t[128] = "HA_ERR_OUT_OF_MEM",t[130] = "HA_ERR_NOT_A_TABLE",t[131] = "HA_ERR_WRONG_COMMAND",t[132] = "HA_ERR_OLD_FILE",t[133] = "HA_ERR_NO_ACTIVE_RECORD",t[134] = "HA_ERR_RECORD_DELETED",t[135] = "HA_ERR_RECORD_FILE_FULL",t[136] = "HA_ERR_INDEX_FILE_FULL",t[137] = "HA_ERR_END_OF_FILE",t[138] = "HA_ERR_UNSUPPORTED",t[139] = "HA_ERR_TOO_BIG_ROW",t[140] = "HA_WRONG_CREATE_OPTION",t[141] = "HA_ERR_FOUND_DUPP_UNIQUE",t[142] = "HA_ERR_UNKNOWN_CHARSET",t[143] = "HA_ERR_WRONG_MRG_TABLE_DEF",t[144] = "HA_ERR_CRASHED_ON_REPAIR",t[145] = "HA_ERR_CRASHED_ON_USAGE",t[146] = "HA_ERR_LOCK_WAIT_TIMEOUT",t[147] = "HA_ERR_LOCK_TABLE_FULL",t[148] = "HA_ERR_READ_ONLY_TRANSACTION",t[149] = "HA_ERR_LOCK_DEADLOCK",t[150] = "HA_ERR_CANNOT_ADD_FOREIGN",t[151] = "HA_ERR_NO_REFERENCED_ROW",t[152] = "HA_ERR_ROW_IS_REFERENCED",t[153] = "HA_ERR_NO_SAVEPOINT",t[154] = "HA_ERR_NON_UNIQUE_BLOCK_SIZE",t[155] = "HA_ERR_NO_SUCH_TABLE",t[156] = "HA_ERR_TABLE_EXIST",t[157] = "HA_ERR_NO_CONNECTION",t[158] = "HA_ERR_NULL_IN_SPATIAL",t[159] = "HA_ERR_TABLE_DEF_CHANGED",t[160] = "HA_ERR_NO_PARTITION_FOUND",t[161] = "HA_ERR_RBR_LOGGING_FAILED",t[162] = "HA_ERR_DROP_INDEX_FK",t[163] = "HA_ERR_FOREIGN_DUPLICATE_KEY",t[164] = "HA_ERR_TABLE_NEEDS_UPGRADE",t[165] = "HA_ERR_TABLE_READONLY",t[166] = "HA_ERR_AUTOINC_READ_FAILED",t[167] = "HA_ERR_AUTOINC_ERANGE",t[168] = "HA_ERR_GENERIC",t[169] = "HA_ERR_RECORD_IS_THE_SAME",t[170] = "HA_ERR_LOGGING_IMPOSSIBLE",t[171] = "HA_ERR_CORRUPT_EVENT",t[172] = "HA_ERR_NEW_FILE",t[173] = "HA_ERR_ROWS_EVENT_APPLY",t[174] = "HA_ERR_INITIALIZATION",t[175] = "HA_ERR_FILE_TOO_SHORT",t[176] = "HA_ERR_WRONG_CRC",t[177] = "HA_ERR_TOO_MANY_CONCURRENT_TRXS",t[178] = "HA_ERR_NOT_IN_LOCK_PARTITIONS",t[179] = "HA_ERR_INDEX_COL_TOO_LONG",t[180] = "HA_ERR_INDEX_CORRUPT",t[181] = "HA_ERR_UNDO_REC_TOO_BIG",t[182] = "HA_FTS_INVALID_DOCID",t[183] = "HA_ERR_TABLE_IN_FK_CHECK",t[184] = "HA_ERR_TABLESPACE_EXISTS",t[185] = "HA_ERR_TOO_MANY_FIELDS",t[186] = "HA_ERR_ROW_IN_WRONG_PARTITION",t[187] = "HA_ERR_INNODB_READ_ONLY",t[188] = "HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT",t[189] = "HA_ERR_TEMP_FILE_WRITE_FAILURE",t[190] = "HA_ERR_INNODB_FORCED_RECOVERY",t[191] = "HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE",t[192] = "HA_ERR_FK_DEPTH_EXCEEDED",t[193] = "HA_MISSING_CREATE_OPTION",t[194] = "HA_ERR_SE_OUT_OF_MEMORY",t[195] = "HA_ERR_TABLE_CORRUPT",t[196] = "HA_ERR_QUERY_INTERRUPTED",t[197] = "HA_ERR_TABLESPACE_MISSING",t[198] = "HA_ERR_TABLESPACE_IS_NOT_EMPTY",t[199] = "HA_ERR_WRONG_FILE_NAME",t[200] = "HA_ERR_NOT_ALLOWED_COMMAND",t[201] = "HA_ERR_COMPUTE_FAILED",t[1e3] = "ER_HASHCHK",t[1001] = "ER_NISAMCHK",t[1002] = "ER_NO",t[1003] = "ER_YES",t[1004] = "ER_CANT_CREATE_FILE",t[1005] = "ER_CANT_CREATE_TABLE",t[1006] = "ER_CANT_CREATE_DB",t[1007] = "ER_DB_CREATE_EXISTS",t[1008] = "ER_DB_DROP_EXISTS",t[1009] = "ER_DB_DROP_DELETE",t[1010] = "ER_DB_DROP_RMDIR",t[1011] = "ER_CANT_DELETE_FILE",t[1012] = "ER_CANT_FIND_SYSTEM_REC",t[1013] = "ER_CANT_GET_STAT",t[1014] = "ER_CANT_GET_WD",t[1015] = "ER_CANT_LOCK",t[1016] = "ER_CANT_OPEN_FILE",t[1017] = "ER_FILE_NOT_FOUND",t[1018] = "ER_CANT_READ_DIR",t[1019] = "ER_CANT_SET_WD",t[1020] = "ER_CHECKREAD",t[1021] = "ER_DISK_FULL",t[1022] = "ER_DUP_KEY",t[1023] = "ER_ERROR_ON_CLOSE",t[1024] = "ER_ERROR_ON_READ",t[1025] = "ER_ERROR_ON_RENAME",t[1026] = "ER_ERROR_ON_WRITE",t[1027] = "ER_FILE_USED",t[1028] = "ER_FILSORT_ABORT",t[1029] = "ER_FORM_NOT_FOUND",t[1030] = "ER_GET_ERRNO",t[1031] = "ER_ILLEGAL_HA",t[1032] = "ER_KEY_NOT_FOUND",t[1033] = "ER_NOT_FORM_FILE",t[1034] = "ER_NOT_KEYFILE",t[1035] = "ER_OLD_KEYFILE",t[1036] = "ER_OPEN_AS_READONLY",t[1037] = "ER_OUTOFMEMORY",t[1038] = "ER_OUT_OF_SORTMEMORY",t[1039] = "ER_UNEXPECTED_EOF",t[1040] = "ER_CON_COUNT_ERROR",t[1041] = "ER_OUT_OF_RESOURCES",t[1042] = "ER_BAD_HOST_ERROR",t[1043] = "ER_HANDSHAKE_ERROR",t[1044] = "ER_DBACCESS_DENIED_ERROR",t[1045] = "ER_ACCESS_DENIED_ERROR",t[1046] = "ER_NO_DB_ERROR",t[1047] = "ER_UNKNOWN_COM_ERROR",t[1048] = "ER_BAD_NULL_ERROR",t[1049] = "ER_BAD_DB_ERROR",t[1050] = "ER_TABLE_EXISTS_ERROR",t[1051] = "ER_BAD_TABLE_ERROR",t[1052] = "ER_NON_UNIQ_ERROR",t[1053] = "ER_SERVER_SHUTDOWN",t[1054] = "ER_BAD_FIELD_ERROR",t[1055] = "ER_WRONG_FIELD_WITH_GROUP",t[1056] = "ER_WRONG_GROUP_FIELD",t[1057] = "ER_WRONG_SUM_SELECT",t[1058] = "ER_WRONG_VALUE_COUNT",t[1059] = "ER_TOO_LONG_IDENT",t[1060] = "ER_DUP_FIELDNAME",t[1061] = "ER_DUP_KEYNAME",t[1062] = "ER_DUP_ENTRY",t[1063] = "ER_WRONG_FIELD_SPEC",t[1064] = "ER_PARSE_ERROR",t[1065] = "ER_EMPTY_QUERY",t[1066] = "ER_NONUNIQ_TABLE",t[1067] = "ER_INVALID_DEFAULT",t[1068] = "ER_MULTIPLE_PRI_KEY",t[1069] = "ER_TOO_MANY_KEYS",t[1070] = "ER_TOO_MANY_KEY_PARTS",t[1071] = "ER_TOO_LONG_KEY",t[1072] = "ER_KEY_COLUMN_DOES_NOT_EXITS",t[1073] = "ER_BLOB_USED_AS_KEY",t[1074] = "ER_TOO_BIG_FIELDLENGTH",t[1075] = "ER_WRONG_AUTO_KEY",t[1076] = "ER_READY",t[1077] = "ER_NORMAL_SHUTDOWN",t[1078] = "ER_GOT_SIGNAL",t[1079] = "ER_SHUTDOWN_COMPLETE",t[1080] = "ER_FORCING_CLOSE",t[1081] = "ER_IPSOCK_ERROR",t[1082] = "ER_NO_SUCH_INDEX",t[1083] = "ER_WRONG_FIELD_TERMINATORS",t[1084] = "ER_BLOBS_AND_NO_TERMINATED",t[1085] = "ER_TEXTFILE_NOT_READABLE",t[1086] = "ER_FILE_EXISTS_ERROR",t[1087] = "ER_LOAD_INFO",t[1088] = "ER_ALTER_INFO",t[1089] = "ER_WRONG_SUB_KEY",t[1090] = "ER_CANT_REMOVE_ALL_FIELDS",t[1091] = "ER_CANT_DROP_FIELD_OR_KEY",t[1092] = "ER_INSERT_INFO",t[1093] = "ER_UPDATE_TABLE_USED",t[1094] = "ER_NO_SUCH_THREAD",t[1095] = "ER_KILL_DENIED_ERROR",t[1096] = "ER_NO_TABLES_USED",t[1097] = "ER_TOO_BIG_SET",t[1098] = "ER_NO_UNIQUE_LOGFILE",t[1099] = "ER_TABLE_NOT_LOCKED_FOR_WRITE",t[1100] = "ER_TABLE_NOT_LOCKED",t[1101] = "ER_BLOB_CANT_HAVE_DEFAULT",t[1102] = "ER_WRONG_DB_NAME",t[1103] = "ER_WRONG_TABLE_NAME",t[1104] = "ER_TOO_BIG_SELECT",t[1105] = "ER_UNKNOWN_ERROR",t[1106] = "ER_UNKNOWN_PROCEDURE",t[1107] = "ER_WRONG_PARAMCOUNT_TO_PROCEDURE",t[1108] = "ER_WRONG_PARAMETERS_TO_PROCEDURE",t[1109] = "ER_UNKNOWN_TABLE",t[1110] = "ER_FIELD_SPECIFIED_TWICE",t[1111] = "ER_INVALID_GROUP_FUNC_USE",t[1112] = "ER_UNSUPPORTED_EXTENSION",t[1113] = "ER_TABLE_MUST_HAVE_COLUMNS",t[1114] = "ER_RECORD_FILE_FULL",t[1115] = "ER_UNKNOWN_CHARACTER_SET",t[1116] = "ER_TOO_MANY_TABLES",t[1117] = "ER_TOO_MANY_FIELDS",t[1118] = "ER_TOO_BIG_ROWSIZE",t[1119] = "ER_STACK_OVERRUN",t[1120] = "ER_WRONG_OUTER_JOIN",t[1121] = "ER_NULL_COLUMN_IN_INDEX",t[1122] = "ER_CANT_FIND_UDF",t[1123] = "ER_CANT_INITIALIZE_UDF",t[1124] = "ER_UDF_NO_PATHS",t[1125] = "ER_UDF_EXISTS",t[1126] = "ER_CANT_OPEN_LIBRARY",t[1127] = "ER_CANT_FIND_DL_ENTRY",t[1128] = "ER_FUNCTION_NOT_DEFINED",t[1129] = "ER_HOST_IS_BLOCKED",t[1130] = "ER_HOST_NOT_PRIVILEGED",t[1131] = "ER_PASSWORD_ANONYMOUS_USER",t[1132] = "ER_PASSWORD_NOT_ALLOWED",t[1133] = "ER_PASSWORD_NO_MATCH",t[1134] = "ER_UPDATE_INFO",t[1135] = "ER_CANT_CREATE_THREAD",t[1136] = "ER_WRONG_VALUE_COUNT_ON_ROW",t[1137] = "ER_CANT_REOPEN_TABLE",t[1138] = "ER_INVALID_USE_OF_NULL",t[1139] = "ER_REGEXP_ERROR",t[1140] = "ER_MIX_OF_GROUP_FUNC_AND_FIELDS",t[1141] = "ER_NONEXISTING_GRANT",t[1142] = "ER_TABLEACCESS_DENIED_ERROR",t[1143] = "ER_COLUMNACCESS_DENIED_ERROR",t[1144] = "ER_ILLEGAL_GRANT_FOR_TABLE",t[1145] = "ER_GRANT_WRONG_HOST_OR_USER",t[1146] = "ER_NO_SUCH_TABLE",t[1147] = "ER_NONEXISTING_TABLE_GRANT",t[1148] = "ER_NOT_ALLOWED_COMMAND",t[1149] = "ER_SYNTAX_ERROR",t[1150] = "ER_DELAYED_CANT_CHANGE_LOCK",t[1151] = "ER_TOO_MANY_DELAYED_THREADS",t[1152] = "ER_ABORTING_CONNECTION",t[1153] = "ER_NET_PACKET_TOO_LARGE",t[1154] = "ER_NET_READ_ERROR_FROM_PIPE",t[1155] = "ER_NET_FCNTL_ERROR",t[1156] = "ER_NET_PACKETS_OUT_OF_ORDER",t[1157] = "ER_NET_UNCOMPRESS_ERROR",t[1158] = "ER_NET_READ_ERROR",t[1159] = "ER_NET_READ_INTERRUPTED",t[1160] = "ER_NET_ERROR_ON_WRITE",t[1161] = "ER_NET_WRITE_INTERRUPTED",t[1162] = "ER_TOO_LONG_STRING",t[1163] = "ER_TABLE_CANT_HANDLE_BLOB",t[1164] = "ER_TABLE_CANT_HANDLE_AUTO_INCREMENT",t[1165] = "ER_DELAYED_INSERT_TABLE_LOCKED",t[1166] = "ER_WRONG_COLUMN_NAME",t[1167] = "ER_WRONG_KEY_COLUMN",t[1168] = "ER_WRONG_MRG_TABLE",t[1169] = "ER_DUP_UNIQUE",t[1170] = "ER_BLOB_KEY_WITHOUT_LENGTH",t[1171] = "ER_PRIMARY_CANT_HAVE_NULL",t[1172] = "ER_TOO_MANY_ROWS",t[1173] = "ER_REQUIRES_PRIMARY_KEY",t[1174] = "ER_NO_RAID_COMPILED",t[1175] = "ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE",t[1176] = "ER_KEY_DOES_NOT_EXITS",t[1177] = "ER_CHECK_NO_SUCH_TABLE",t[1178] = "ER_CHECK_NOT_IMPLEMENTED",t[1179] = "ER_CANT_DO_THIS_DURING_AN_TRANSACTION",t[1180] = "ER_ERROR_DURING_COMMIT",t[1181] = "ER_ERROR_DURING_ROLLBACK",t[1182] = "ER_ERROR_DURING_FLUSH_LOGS",t[1183] = "ER_ERROR_DURING_CHECKPOINT",t[1184] = "ER_NEW_ABORTING_CONNECTION",t[1185] = "ER_DUMP_NOT_IMPLEMENTED",t[1186] = "ER_FLUSH_MASTER_BINLOG_CLOSED",t[1187] = "ER_INDEX_REBUILD",t[1188] = "ER_MASTER",t[1189] = "ER_MASTER_NET_READ",t[1190] = "ER_MASTER_NET_WRITE",t[1191] = "ER_FT_MATCHING_KEY_NOT_FOUND",t[1192] = "ER_LOCK_OR_ACTIVE_TRANSACTION",t[1193] = "ER_UNKNOWN_SYSTEM_VARIABLE",t[1194] = "ER_CRASHED_ON_USAGE",t[1195] = "ER_CRASHED_ON_REPAIR",t[1196] = "ER_WARNING_NOT_COMPLETE_ROLLBACK",t[1197] = "ER_TRANS_CACHE_FULL",t[1198] = "ER_SLAVE_MUST_STOP",t[1199] = "ER_SLAVE_NOT_RUNNING",t[1200] = "ER_BAD_SLAVE",t[1201] = "ER_MASTER_INFO",t[1202] = "ER_SLAVE_THREAD",t[1203] = "ER_TOO_MANY_USER_CONNECTIONS",t[1204] = "ER_SET_CONSTANTS_ONLY",t[1205] = "ER_LOCK_WAIT_TIMEOUT",t[1206] = "ER_LOCK_TABLE_FULL",t[1207] = "ER_READ_ONLY_TRANSACTION",t[1208] = "ER_DROP_DB_WITH_READ_LOCK",t[1209] = "ER_CREATE_DB_WITH_READ_LOCK",t[1210] = "ER_WRONG_ARGUMENTS",t[1211] = "ER_NO_PERMISSION_TO_CREATE_USER",t[1212] = "ER_UNION_TABLES_IN_DIFFERENT_DIR",t[1213] = "ER_LOCK_DEADLOCK",t[1214] = "ER_TABLE_CANT_HANDLE_FT",t[1215] = "ER_CANNOT_ADD_FOREIGN",t[1216] = "ER_NO_REFERENCED_ROW",t[1217] = "ER_ROW_IS_REFERENCED",t[1218] = "ER_CONNECT_TO_MASTER",t[1219] = "ER_QUERY_ON_MASTER",t[1220] = "ER_ERROR_WHEN_EXECUTING_COMMAND",t[1221] = "ER_WRONG_USAGE",t[1222] = "ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT",t[1223] = "ER_CANT_UPDATE_WITH_READLOCK",t[1224] = "ER_MIXING_NOT_ALLOWED",t[1225] = "ER_DUP_ARGUMENT",t[1226] = "ER_USER_LIMIT_REACHED",t[1227] = "ER_SPECIFIC_ACCESS_DENIED_ERROR",t[1228] = "ER_LOCAL_VARIABLE",t[1229] = "ER_GLOBAL_VARIABLE",t[1230] = "ER_NO_DEFAULT",t[1231] = "ER_WRONG_VALUE_FOR_VAR",t[1232] = "ER_WRONG_TYPE_FOR_VAR",t[1233] = "ER_VAR_CANT_BE_READ",t[1234] = "ER_CANT_USE_OPTION_HERE",t[1235] = "ER_NOT_SUPPORTED_YET",t[1236] = "ER_MASTER_FATAL_ERROR_READING_BINLOG",t[1237] = "ER_SLAVE_IGNORED_TABLE",t[1238] = "ER_INCORRECT_GLOBAL_LOCAL_VAR",t[1239] = "ER_WRONG_FK_DEF",t[1240] = "ER_KEY_REF_DO_NOT_MATCH_TABLE_REF",t[1241] = "ER_OPERAND_COLUMNS",t[1242] = "ER_SUBQUERY_NO_1_ROW",t[1243] = "ER_UNKNOWN_STMT_HANDLER",t[1244] = "ER_CORRUPT_HELP_DB",t[1245] = "ER_CYCLIC_REFERENCE",t[1246] = "ER_AUTO_CONVERT",t[1247] = "ER_ILLEGAL_REFERENCE",t[1248] = "ER_DERIVED_MUST_HAVE_ALIAS",t[1249] = "ER_SELECT_REDUCED",t[1250] = "ER_TABLENAME_NOT_ALLOWED_HERE",t[1251] = "ER_NOT_SUPPORTED_AUTH_MODE",t[1252] = "ER_SPATIAL_CANT_HAVE_NULL",t[1253] = "ER_COLLATION_CHARSET_MISMATCH";
      t[1254] = "ER_SLAVE_WAS_RUNNING", t[1255] = "ER_SLAVE_WAS_NOT_RUNNING", t[1256] = "ER_TOO_BIG_FOR_UNCOMPRESS", t[1257] = "ER_ZLIB_Z_MEM_ERROR", t[1258] = "ER_ZLIB_Z_BUF_ERROR", t[1259] = "ER_ZLIB_Z_DATA_ERROR", t[1260] = "ER_CUT_VALUE_GROUP_CONCAT", t[1261] = "ER_WARN_TOO_FEW_RECORDS", t[1262] = "ER_WARN_TOO_MANY_RECORDS", t[1263] = "ER_WARN_NULL_TO_NOTNULL", t[1264] = "ER_WARN_DATA_OUT_OF_RANGE", t[1265] = "WARN_DATA_TRUNCATED", t[1266] = "ER_WARN_USING_OTHER_HANDLER", t[1267] = "ER_CANT_AGGREGATE_2COLLATIONS", t[1268] = "ER_DROP_USER", t[1269] = "ER_REVOKE_GRANTS", t[1270] = "ER_CANT_AGGREGATE_3COLLATIONS", t[1271] = "ER_CANT_AGGREGATE_NCOLLATIONS", t[1272] = "ER_VARIABLE_IS_NOT_STRUCT", t[1273] = "ER_UNKNOWN_COLLATION", t[1274] = "ER_SLAVE_IGNORED_SSL_PARAMS", t[1275] = "ER_SERVER_IS_IN_SECURE_AUTH_MODE", t[1276] = "ER_WARN_FIELD_RESOLVED", t[1277] = "ER_BAD_SLAVE_UNTIL_COND", t[1278] = "ER_MISSING_SKIP_SLAVE", t[1279] = "ER_UNTIL_COND_IGNORED", t[1280] = "ER_WRONG_NAME_FOR_INDEX", t[1281] = "ER_WRONG_NAME_FOR_CATALOG", t[1282] = "ER_WARN_QC_RESIZE", t[1283] = "ER_BAD_FT_COLUMN", t[1284] = "ER_UNKNOWN_KEY_CACHE", t[1285] = "ER_WARN_HOSTNAME_WONT_WORK", t[1286] = "ER_UNKNOWN_STORAGE_ENGINE", t[1287] = "ER_WARN_DEPRECATED_SYNTAX", t[1288] = "ER_NON_UPDATABLE_TABLE", t[1289] = "ER_FEATURE_DISABLED", t[1290] = "ER_OPTION_PREVENTS_STATEMENT", t[1291] = "ER_DUPLICATED_VALUE_IN_TYPE", t[1292] = "ER_TRUNCATED_WRONG_VALUE", t[1293] = "ER_TOO_MUCH_AUTO_TIMESTAMP_COLS", t[1294] = "ER_INVALID_ON_UPDATE", t[1295] = "ER_UNSUPPORTED_PS", t[1296] = "ER_GET_ERRMSG", t[1297] = "ER_GET_TEMPORARY_ERRMSG", t[1298] = "ER_UNKNOWN_TIME_ZONE", t[1299] = "ER_WARN_INVALID_TIMESTAMP", t[1300] = "ER_INVALID_CHARACTER_STRING", t[1301] = "ER_WARN_ALLOWED_PACKET_OVERFLOWED", t[1302] = "ER_CONFLICTING_DECLARATIONS", t[1303] = "ER_SP_NO_RECURSIVE_CREATE", t[1304] = "ER_SP_ALREADY_EXISTS", t[1305] = "ER_SP_DOES_NOT_EXIST", t[1306] = "ER_SP_DROP_FAILED", t[1307] = "ER_SP_STORE_FAILED", t[1308] = "ER_SP_LILABEL_MISMATCH", t[1309] = "ER_SP_LABEL_REDEFINE", t[1310] = "ER_SP_LABEL_MISMATCH", t[1311] = "ER_SP_UNINIT_VAR", t[1312] = "ER_SP_BADSELECT", t[1313] = "ER_SP_BADRETURN", t[1314] = "ER_SP_BADSTATEMENT", t[1315] = "ER_UPDATE_LOG_DEPRECATED_IGNORED", t[1316] = "ER_UPDATE_LOG_DEPRECATED_TRANSLATED", t[1317] = "ER_QUERY_INTERRUPTED", t[1318] = "ER_SP_WRONG_NO_OF_ARGS", t[1319] = "ER_SP_COND_MISMATCH", t[1320] = "ER_SP_NORETURN", t[1321] = "ER_SP_NORETURNEND", t[1322] = "ER_SP_BAD_CURSOR_QUERY", t[1323] = "ER_SP_BAD_CURSOR_SELECT", t[1324] = "ER_SP_CURSOR_MISMATCH", t[1325] = "ER_SP_CURSOR_ALREADY_OPEN", t[1326] = "ER_SP_CURSOR_NOT_OPEN", t[1327] = "ER_SP_UNDECLARED_VAR", t[1328] = "ER_SP_WRONG_NO_OF_FETCH_ARGS", t[1329] = "ER_SP_FETCH_NO_DATA", t[1330] = "ER_SP_DUP_PARAM", t[1331] = "ER_SP_DUP_VAR", t[1332] = "ER_SP_DUP_COND", t[1333] = "ER_SP_DUP_CURS", t[1334] = "ER_SP_CANT_ALTER", t[1335] = "ER_SP_SUBSELECT_NYI", t[1336] = "ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG", t[1337] = "ER_SP_VARCOND_AFTER_CURSHNDLR", t[1338] = "ER_SP_CURSOR_AFTER_HANDLER", t[1339] = "ER_SP_CASE_NOT_FOUND", t[1340] = "ER_FPARSER_TOO_BIG_FILE", t[1341] = "ER_FPARSER_BAD_HEADER", t[1342] = "ER_FPARSER_EOF_IN_COMMENT", t[1343] = "ER_FPARSER_ERROR_IN_PARAMETER", t[1344] = "ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER", t[1345] = "ER_VIEW_NO_EXPLAIN", t[1346] = "ER_FRM_UNKNOWN_TYPE", t[1347] = "ER_WRONG_OBJECT", t[1348] = "ER_NONUPDATEABLE_COLUMN", t[1349] = "ER_VIEW_SELECT_DERIVED", t[1350] = "ER_VIEW_SELECT_CLAUSE", t[1351] = "ER_VIEW_SELECT_VARIABLE", t[1352] = "ER_VIEW_SELECT_TMPTABLE", t[1353] = "ER_VIEW_WRONG_LIST", t[1354] = "ER_WARN_VIEW_MERGE",t[1355] = "ER_WARN_VIEW_WITHOUT_KEY",t[1356] = "ER_VIEW_INVALID",t[1357] = "ER_SP_NO_DROP_SP",t[1358] = "ER_SP_GOTO_IN_HNDLR",t[1359] = "ER_TRG_ALREADY_EXISTS",t[1360] = "ER_TRG_DOES_NOT_EXIST",t[1361] = "ER_TRG_ON_VIEW_OR_TEMP_TABLE",t[1362] = "ER_TRG_CANT_CHANGE_ROW",t[1363] = "ER_TRG_NO_SUCH_ROW_IN_TRG",t[1364] = "ER_NO_DEFAULT_FOR_FIELD",t[1365] = "ER_DIVISION_BY_ZERO",t[1366] = "ER_TRUNCATED_WRONG_VALUE_FOR_FIELD",t[1367] = "ER_ILLEGAL_VALUE_FOR_TYPE",t[1368] = "ER_VIEW_NONUPD_CHECK",t[1369] = "ER_VIEW_CHECK_FAILED",t[1370] = "ER_PROCACCESS_DENIED_ERROR",t[1371] = "ER_RELAY_LOG_FAIL",t[1372] = "ER_PASSWD_LENGTH",t[1373] = "ER_UNKNOWN_TARGET_BINLOG",t[1374] = "ER_IO_ERR_LOG_INDEX_READ",t[1375] = "ER_BINLOG_PURGE_PROHIBITED",t[1376] = "ER_FSEEK_FAIL",t[1377] = "ER_BINLOG_PURGE_FATAL_ERR",t[1378] = "ER_LOG_IN_USE",t[1379] = "ER_LOG_PURGE_UNKNOWN_ERR",t[1380] = "ER_RELAY_LOG_INIT",t[1381] = "ER_NO_BINARY_LOGGING",t[1382] = "ER_RESERVED_SYNTAX",t[1383] = "ER_WSAS_FAILED",t[1384] = "ER_DIFF_GROUPS_PROC",t[1385] = "ER_NO_GROUP_FOR_PROC",t[1386] = "ER_ORDER_WITH_PROC",t[1387] = "ER_LOGGING_PROHIBIT_CHANGING_OF",t[1388] = "ER_NO_FILE_MAPPING",t[1389] = "ER_WRONG_MAGIC",t[1390] = "ER_PS_MANY_PARAM",t[1391] = "ER_KEY_PART_0",t[1392] = "ER_VIEW_CHECKSUM",t[1393] = "ER_VIEW_MULTIUPDATE",t[1394] = "ER_VIEW_NO_INSERT_FIELD_LIST",t[1395] = "ER_VIEW_DELETE_MERGE_VIEW",t[1396] = "ER_CANNOT_USER",t[1397] = "ER_XAER_NOTA",t[1398] = "ER_XAER_INVAL",t[1399] = "ER_XAER_RMFAIL",t[1400] = "ER_XAER_OUTSIDE",t[1401] = "ER_XAER_RMERR",t[1402] = "ER_XA_RBROLLBACK",t[1403] = "ER_NONEXISTING_PROC_GRANT",t[1404] = "ER_PROC_AUTO_GRANT_FAIL",t[1405] = "ER_PROC_AUTO_REVOKE_FAIL",t[1406] = "ER_DATA_TOO_LONG",t[1407] = "ER_SP_BAD_SQLSTATE",t[1408] = "ER_STARTUP",t[1409] = "ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR",t[1410] = "ER_CANT_CREATE_USER_WITH_GRANT",t[1411] = "ER_WRONG_VALUE_FOR_TYPE",t[1412] = "ER_TABLE_DEF_CHANGED",t[1413] = "ER_SP_DUP_HANDLER",t[1414] = "ER_SP_NOT_VAR_ARG",t[1415] = "ER_SP_NO_RETSET",t[1416] = "ER_CANT_CREATE_GEOMETRY_OBJECT",t[1417] = "ER_FAILED_ROUTINE_BREAK_BINLOG",t[1418] = "ER_BINLOG_UNSAFE_ROUTINE",t[1419] = "ER_BINLOG_CREATE_ROUTINE_NEED_SUPER",t[1420] = "ER_EXEC_STMT_WITH_OPEN_CURSOR",t[1421] = "ER_STMT_HAS_NO_OPEN_CURSOR",t[1422] = "ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG",t[1423] = "ER_NO_DEFAULT_FOR_VIEW_FIELD",t[1424] = "ER_SP_NO_RECURSION",t[1425] = "ER_TOO_BIG_SCALE",t[1426] = "ER_TOO_BIG_PRECISION",t[1427] = "ER_M_BIGGER_THAN_D",t[1428] = "ER_WRONG_LOCK_OF_SYSTEM_TABLE",t[1429] = "ER_CONNECT_TO_FOREIGN_DATA_SOURCE",t[1430] = "ER_QUERY_ON_FOREIGN_DATA_SOURCE",t[1431] = "ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST",t[1432] = "ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE",t[1433] = "ER_FOREIGN_DATA_STRING_INVALID",t[1434] = "ER_CANT_CREATE_FEDERATED_TABLE",t[1435] = "ER_TRG_IN_WRONG_SCHEMA",t[1436] = "ER_STACK_OVERRUN_NEED_MORE",t[1437] = "ER_TOO_LONG_BODY",t[1438] = "ER_WARN_CANT_DROP_DEFAULT_KEYCACHE",t[1439] = "ER_TOO_BIG_DISPLAYWIDTH",t[1440] = "ER_XAER_DUPID",t[1441] = "ER_DATETIME_FUNCTION_OVERFLOW",t[1442] = "ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG",t[1443] = "ER_VIEW_PREVENT_UPDATE",t[1444] = "ER_PS_NO_RECURSION",t[1445] = "ER_SP_CANT_SET_AUTOCOMMIT",t[1446] = "ER_MALFORMED_DEFINER",t[1447] = "ER_VIEW_FRM_NO_USER",t[1448] = "ER_VIEW_OTHER_USER",t[1449] = "ER_NO_SUCH_USER",t[1450] = "ER_FORBID_SCHEMA_CHANGE",t[1451] = "ER_ROW_IS_REFERENCED_2",t[1452] = "ER_NO_REFERENCED_ROW_2",t[1453] = "ER_SP_BAD_VAR_SHADOW",t[1454] = "ER_TRG_NO_DEFINER",t[1455] = "ER_OLD_FILE_FORMAT",t[1456] = "ER_SP_RECURSION_LIMIT",t[1457] = "ER_SP_PROC_TABLE_CORRUPT",t[1458] = "ER_SP_WRONG_NAME",t[1459] = "ER_TABLE_NEEDS_UPGRADE",t[1460] = "ER_SP_NO_AGGREGATE",t[1461] = "ER_MAX_PREPARED_STMT_COUNT_REACHED",t[1462] = "ER_VIEW_RECURSIVE",t[1463] = "ER_NON_GROUPING_FIELD_USED",t[1464] = "ER_TABLE_CANT_HANDLE_SPKEYS",t[1465] = "ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA",t[1466] = "ER_REMOVED_SPACES",t[1467] = "ER_AUTOINC_READ_FAILED",t[1468] = "ER_USERNAME",t[1469] = "ER_HOSTNAME",t[1470] = "ER_WRONG_STRING_LENGTH",t[1471] = "ER_NON_INSERTABLE_TABLE",t[1472] = "ER_ADMIN_WRONG_MRG_TABLE",t[1473] = "ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT",t[1474] = "ER_NAME_BECOMES_EMPTY",t[1475] = "ER_AMBIGUOUS_FIELD_TERM",t[1476] = "ER_FOREIGN_SERVER_EXISTS",t[1477] = "ER_FOREIGN_SERVER_DOESNT_EXIST",t[1478] = "ER_ILLEGAL_HA_CREATE_OPTION",t[1479] = "ER_PARTITION_REQUIRES_VALUES_ERROR",t[1480] = "ER_PARTITION_WRONG_VALUES_ERROR",t[1481] = "ER_PARTITION_MAXVALUE_ERROR",t[1482] = "ER_PARTITION_SUBPARTITION_ERROR",t[1483] = "ER_PARTITION_SUBPART_MIX_ERROR",t[1484] = "ER_PARTITION_WRONG_NO_PART_ERROR",t[1485] = "ER_PARTITION_WRONG_NO_SUBPART_ERROR",t[1486] = "ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR",t[1487] = "ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR",t[1488] = "ER_FIELD_NOT_FOUND_PART_ERROR",t[1489] = "ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR",t[1490] = "ER_INCONSISTENT_PARTITION_INFO_ERROR",t[1491] = "ER_PARTITION_FUNC_NOT_ALLOWED_ERROR",t[1492] = "ER_PARTITIONS_MUST_BE_DEFINED_ERROR",t[1493] = "ER_RANGE_NOT_INCREASING_ERROR",t[1494] = "ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR",t[1495] = "ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR",t[1496] = "ER_PARTITION_ENTRY_ERROR",t[1497] = "ER_MIX_HANDLER_ERROR",t[1498] = "ER_PARTITION_NOT_DEFINED_ERROR",t[1499] = "ER_TOO_MANY_PARTITIONS_ERROR",t[1500] = "ER_SUBPARTITION_ERROR",t[1501] = "ER_CANT_CREATE_HANDLER_FILE",t[1502] = "ER_BLOB_FIELD_IN_PART_FUNC_ERROR",t[1503] = "ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF",t[1504] = "ER_NO_PARTS_ERROR",t[1505] = "ER_PARTITION_MGMT_ON_NONPARTITIONED",t[1506] = "ER_FOREIGN_KEY_ON_PARTITIONED",t[1507] = "ER_DROP_PARTITION_NON_EXISTENT",t[1508] = "ER_DROP_LAST_PARTITION",t[1509] = "ER_COALESCE_ONLY_ON_HASH_PARTITION",t[1510] = "ER_REORG_HASH_ONLY_ON_SAME_NO",t[1511] = "ER_REORG_NO_PARAM_ERROR",t[1512] = "ER_ONLY_ON_RANGE_LIST_PARTITION",t[1513] = "ER_ADD_PARTITION_SUBPART_ERROR",t[1514] = "ER_ADD_PARTITION_NO_NEW_PARTITION",t[1515] = "ER_COALESCE_PARTITION_NO_PARTITION",t[1516] = "ER_REORG_PARTITION_NOT_EXIST",t[1517] = "ER_SAME_NAME_PARTITION",t[1518] = "ER_NO_BINLOG_ERROR",t[1519] = "ER_CONSECUTIVE_REORG_PARTITIONS",t[1520] = "ER_REORG_OUTSIDE_RANGE",t[1521] = "ER_PARTITION_FUNCTION_FAILURE",t[1522] = "ER_PART_STATE_ERROR",t[1523] = "ER_LIMITED_PART_RANGE",t[1524] = "ER_PLUGIN_IS_NOT_LOADED",t[1525] = "ER_WRONG_VALUE",t[1526] = "ER_NO_PARTITION_FOR_GIVEN_VALUE",t[1527] = "ER_FILEGROUP_OPTION_ONLY_ONCE",t[1528] = "ER_CREATE_FILEGROUP_FAILED",t[1529] = "ER_DROP_FILEGROUP_FAILED",t[1530] = "ER_TABLESPACE_AUTO_EXTEND_ERROR",t[1531] = "ER_WRONG_SIZE_NUMBER",t[1532] = "ER_SIZE_OVERFLOW_ERROR",t[1533] = "ER_ALTER_FILEGROUP_FAILED",t[1534] = "ER_BINLOG_ROW_LOGGING_FAILED",t[1535] = "ER_BINLOG_ROW_WRONG_TABLE_DEF",t[1536] = "ER_BINLOG_ROW_RBR_TO_SBR",t[1537] = "ER_EVENT_ALREADY_EXISTS",t[1538] = "ER_EVENT_STORE_FAILED",t[1539] = "ER_EVENT_DOES_NOT_EXIST",t[1540] = "ER_EVENT_CANT_ALTER",t[1541] = "ER_EVENT_DROP_FAILED",t[1542] = "ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG",t[1543] = "ER_EVENT_ENDS_BEFORE_STARTS",t[1544] = "ER_EVENT_EXEC_TIME_IN_THE_PAST",t[1545] = "ER_EVENT_OPEN_TABLE_FAILED",t[1546] = "ER_EVENT_NEITHER_M_EXPR_NOR_M_AT",t[1547] = "ER_COL_COUNT_DOESNT_MATCH_CORRUPTED",t[1548] = "ER_CANNOT_LOAD_FROM_TABLE",t[1549] = "ER_EVENT_CANNOT_DELETE",t[1550] = "ER_EVENT_COMPILE_ERROR",t[1551] = "ER_EVENT_SAME_NAME",t[1552] = "ER_EVENT_DATA_TOO_LONG",t[1553] = "ER_DROP_INDEX_FK",t[1554] = "ER_WARN_DEPRECATED_SYNTAX_WITH_VER",t[1555] = "ER_CANT_WRITE_LOCK_LOG_TABLE",t[1556] = "ER_CANT_LOCK_LOG_TABLE",t[1557] = "ER_FOREIGN_DUPLICATE_KEY",t[1558] = "ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE",t[1559] = "ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR",t[1560] = "ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT",t[1561] = "ER_NDB_CANT_SWITCH_BINLOG_FORMAT",t[1562] = "ER_PARTITION_NO_TEMPORARY",t[1563] = "ER_PARTITION_CONST_DOMAIN_ERROR",t[1564] = "ER_PARTITION_FUNCTION_IS_NOT_ALLOWED",t[1565] = "ER_DDL_LOG_ERROR",t[1566] = "ER_NULL_IN_VALUES_LESS_THAN",t[1567] = "ER_WRONG_PARTITION_NAME",t[1568] = "ER_CANT_CHANGE_TX_CHARACTERISTICS",t[1569] = "ER_DUP_ENTRY_AUTOINCREMENT_CASE",t[1570] = "ER_EVENT_MODIFY_QUEUE_ERROR",t[1571] = "ER_EVENT_SET_VAR_ERROR",t[1572] = "ER_PARTITION_MERGE_ERROR",t[1573] = "ER_CANT_ACTIVATE_LOG",t[1574] = "ER_RBR_NOT_AVAILABLE",t[1575] = "ER_BASE64_DECODE_ERROR",t[1576] = "ER_EVENT_RECURSION_FORBIDDEN",t[1577] = "ER_EVENTS_DB_ERROR",t[1578] = "ER_ONLY_INTEGERS_ALLOWED",t[1579] = "ER_UNSUPORTED_LOG_ENGINE",t[1580] = "ER_BAD_LOG_STATEMENT",t[1581] = "ER_CANT_RENAME_LOG_TABLE",t[1582] = "ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT",t[1583] = "ER_WRONG_PARAMETERS_TO_NATIVE_FCT",t[1584] = "ER_WRONG_PARAMETERS_TO_STORED_FCT",t[1585] = "ER_NATIVE_FCT_NAME_COLLISION",t[1586] = "ER_DUP_ENTRY_WITH_KEY_NAME",t[1587] = "ER_BINLOG_PURGE_EMFILE",t[1588] = "ER_EVENT_CANNOT_CREATE_IN_THE_PAST",t[1589] = "ER_EVENT_CANNOT_ALTER_IN_THE_PAST",t[1590] = "ER_SLAVE_INCIDENT",t[1591] = "ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT",t[1592] = "ER_BINLOG_UNSAFE_STATEMENT",t[1593] = "ER_SLAVE_FATAL_ERROR",t[1594] = "ER_SLAVE_RELAY_LOG_READ_FAILURE",t[1595] = "ER_SLAVE_RELAY_LOG_WRITE_FAILURE",t[1596] = "ER_SLAVE_CREATE_EVENT_FAILURE",t[1597] = "ER_SLAVE_MASTER_COM_FAILURE",t[1598] = "ER_BINLOG_LOGGING_IMPOSSIBLE",t[1599] = "ER_VIEW_NO_CREATION_CTX",t[1600] = "ER_VIEW_INVALID_CREATION_CTX",t[1601] = "ER_SR_INVALID_CREATION_CTX",t[1602] = "ER_TRG_CORRUPTED_FILE",t[1603] = "ER_TRG_NO_CREATION_CTX",t[1604] = "ER_TRG_INVALID_CREATION_CTX",t[1605] = "ER_EVENT_INVALID_CREATION_CTX",t[1606] = "ER_TRG_CANT_OPEN_TABLE",t[1607] = "ER_CANT_CREATE_SROUTINE",t[1608] = "ER_NEVER_USED",t[1609] = "ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT",t[1610] = "ER_SLAVE_CORRUPT_EVENT",t[1611] = "ER_LOAD_DATA_INVALID_COLUMN",t[1612] = "ER_LOG_PURGE_NO_FILE",t[1613] = "ER_XA_RBTIMEOUT",t[1614] = "ER_XA_RBDEADLOCK",t[1615] = "ER_NEED_REPREPARE",t[1616] = "ER_DELAYED_NOT_SUPPORTED",t[1617] = "WARN_NO_MASTER_INFO",t[1618] = "WARN_OPTION_IGNORED",t[1619] = "ER_PLUGIN_DELETE_BUILTIN",t[1620] = "WARN_PLUGIN_BUSY",t[1621] = "ER_VARIABLE_IS_READONLY",t[1622] = "ER_WARN_ENGINE_TRANSACTION_ROLLBACK",t[1623] = "ER_SLAVE_HEARTBEAT_FAILURE",t[1624] = "ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE",t[1625] = "ER_NDB_REPLICATION_SCHEMA_ERROR",t[1626] = "ER_CONFLICT_FN_PARSE_ERROR",t[1627] = "ER_EXCEPTIONS_WRITE_ERROR",t[1628] = "ER_TOO_LONG_TABLE_COMMENT",t[1629] = "ER_TOO_LONG_FIELD_COMMENT",t[1630] = "ER_FUNC_INEXISTENT_NAME_COLLISION",t[1631] = "ER_DATABASE_NAME",t[1632] = "ER_TABLE_NAME",t[1633] = "ER_PARTITION_NAME",t[1634] = "ER_SUBPARTITION_NAME",t[1635] = "ER_TEMPORARY_NAME",t[1636] = "ER_RENAMED_NAME",t[1637] = "ER_TOO_MANY_CONCURRENT_TRXS",t[1638] = "WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED",t[1639] = "ER_DEBUG_SYNC_TIMEOUT",t[1640] = "ER_DEBUG_SYNC_HIT_LIMIT",t[1641] = "ER_DUP_SIGNAL_SET",t[1642] = "ER_SIGNAL_WARN",t[1643] = "ER_SIGNAL_NOT_FOUND",t[1644] = "ER_SIGNAL_EXCEPTION",t[1645] = "ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER",t[1646] = "ER_SIGNAL_BAD_CONDITION_TYPE",t[1647] = "WARN_COND_ITEM_TRUNCATED",t[1648] = "ER_COND_ITEM_TOO_LONG",t[1649] = "ER_UNKNOWN_LOCALE",t[1650] = "ER_SLAVE_IGNORE_SERVER_IDS",t[1651] = "ER_QUERY_CACHE_DISABLED",t[1652] = "ER_SAME_NAME_PARTITION_FIELD",t[1653] = "ER_PARTITION_COLUMN_LIST_ERROR",t[1654] = "ER_WRONG_TYPE_COLUMN_VALUE_ERROR",t[1655] = "ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR",t[1656] = "ER_MAXVALUE_IN_VALUES_IN",t[1657] = "ER_TOO_MANY_VALUES_ERROR",t[1658] = "ER_ROW_SINGLE_PARTITION_FIELD_ERROR",t[1659] = "ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD",t[1660] = "ER_PARTITION_FIELDS_TOO_LONG",t[1661] = "ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE",t[1662] = "ER_BINLOG_ROW_MODE_AND_STMT_ENGINE",t[1663] = "ER_BINLOG_UNSAFE_AND_STMT_ENGINE",t[1664] = "ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE",t[1665] = "ER_BINLOG_STMT_MODE_AND_ROW_ENGINE",t[1666] = "ER_BINLOG_ROW_INJECTION_AND_STMT_MODE",t[1667] = "ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE",t[1668] = "ER_BINLOG_UNSAFE_LIMIT",t[1669] = "ER_BINLOG_UNSAFE_INSERT_DELAYED",t[1670] = "ER_BINLOG_UNSAFE_SYSTEM_TABLE",t[1671] = "ER_BINLOG_UNSAFE_AUTOINC_COLUMNS",t[1672] = "ER_BINLOG_UNSAFE_UDF",t[1673] = "ER_BINLOG_UNSAFE_SYSTEM_VARIABLE",t[1674] = "ER_BINLOG_UNSAFE_SYSTEM_FUNCTION",t[1675] = "ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS",t[1676] = "ER_MESSAGE_AND_STATEMENT",t[1677] = "ER_SLAVE_CONVERSION_FAILED",t[1678] = "ER_SLAVE_CANT_CREATE_CONVERSION",t[1679] = "ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT",t[1680] = "ER_PATH_LENGTH",t[1681] = "ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT",t[1682] = "ER_WRONG_NATIVE_TABLE_STRUCTURE",t[1683] = "ER_WRONG_PERFSCHEMA_USAGE",t[1684] = "ER_WARN_I_S_SKIPPED_TABLE",t[1685] = "ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT",t[1686] = "ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT",t[1687] = "ER_SPATIAL_MUST_HAVE_GEOM_COL",t[1688] = "ER_TOO_LONG_INDEX_COMMENT",t[1689] = "ER_LOCK_ABORTED",t[1690] = "ER_DATA_OUT_OF_RANGE",t[1691] = "ER_WRONG_SPVAR_TYPE_IN_LIMIT",t[1692] = "ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE",t[1693] = "ER_BINLOG_UNSAFE_MIXED_STATEMENT",t[1694] = "ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN",t[1695] = "ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN",t[1696] = "ER_FAILED_READ_FROM_PAR_FILE",t[1697] = "ER_VALUES_IS_NOT_INT_TYPE_ERROR",t[1698] = "ER_ACCESS_DENIED_NO_PASSWORD_ERROR",t[1699] = "ER_SET_PASSWORD_AUTH_PLUGIN",t[1700] = "ER_GRANT_PLUGIN_USER_EXISTS",t[1701] = "ER_TRUNCATE_ILLEGAL_FK",t[1702] = "ER_PLUGIN_IS_PERMANENT",t[1703] = "ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN",t[1704] = "ER_SLAVE_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX",t[1705] = "ER_STMT_CACHE_FULL",t[1706] = "ER_MULTI_UPDATE_KEY_CONFLICT",t[1707] = "ER_TABLE_NEEDS_REBUILD",t[1708] = "WARN_OPTION_BELOW_LIMIT",t[1709] = "ER_INDEX_COLUMN_TOO_LONG",t[1710] = "ER_ERROR_IN_TRIGGER_BODY",t[1711] = "ER_ERROR_IN_UNKNOWN_TRIGGER_BODY",t[1712] = "ER_INDEX_CORRUPT",t[1713] = "ER_UNDO_RECORD_TOO_BIG",t[1714] = "ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT",t[1715] = "ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE",t[1716] = "ER_BINLOG_UNSAFE_REPLACE_SELECT",t[1717] = "ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT",t[1718] = "ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT",t[1719] = "ER_BINLOG_UNSAFE_UPDATE_IGNORE",t[1720] = "ER_PLUGIN_NO_UNINSTALL",t[1721] = "ER_PLUGIN_NO_INSTALL",t[1722] = "ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT",t[1723] = "ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC",t[1724] = "ER_BINLOG_UNSAFE_INSERT_TWO_KEYS",t[1725] = "ER_TABLE_IN_FK_CHECK",t[1726] = "ER_UNSUPPORTED_ENGINE",t[1727] = "ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST",t[1728] = "ER_CANNOT_LOAD_FROM_TABLE_V2",t[1729] = "ER_MASTER_DELAY_VALUE_OUT_OF_RANGE",t[1730] = "ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT",t[1731] = "ER_PARTITION_EXCHANGE_DIFFERENT_OPTION",t[1732] = "ER_PARTITION_EXCHANGE_PART_TABLE",t[1733] = "ER_PARTITION_EXCHANGE_TEMP_TABLE",t[1734] = "ER_PARTITION_INSTEAD_OF_SUBPARTITION",t[1735] = "ER_UNKNOWN_PARTITION",t[1736] = "ER_TABLES_DIFFERENT_METADATA",t[1737] = "ER_ROW_DOES_NOT_MATCH_PARTITION",t[1738] = "ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX",t[1739] = "ER_WARN_INDEX_NOT_APPLICABLE",t[1740] = "ER_PARTITION_EXCHANGE_FOREIGN_KEY",t[1741] = "ER_NO_SUCH_KEY_VALUE",t[1742] = "ER_RPL_INFO_DATA_TOO_LONG",t[1743] = "ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE",t[1744] = "ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE",t[1745] = "ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX",t[1746] = "ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT",t[1747] = "ER_PARTITION_CLAUSE_ON_NONPARTITIONED",t[1748] = "ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET",t[1749] = "ER_NO_SUCH_PARTITION",t[1750] = "ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE",t[1751] = "ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE",t[1752] = "ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE",t[1753] = "ER_MTS_FEATURE_IS_NOT_SUPPORTED",t[1754] = "ER_MTS_UPDATED_DBS_GREATER_MAX",t[1755] = "ER_MTS_CANT_PARALLEL",t[1756] = "ER_MTS_INCONSISTENT_DATA",t[1757] = "ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING",t[1758] = "ER_DA_INVALID_CONDITION_NUMBER",t[1759] = "ER_INSECURE_PLAIN_TEXT",t[1760] = "ER_INSECURE_CHANGE_MASTER",t[1761] = "ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO",t[1762] = "ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO",t[1763] = "ER_SQLTHREAD_WITH_SECURE_SLAVE",t[1764] = "ER_TABLE_HAS_NO_FT",t[1765] = "ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER",t[1766] = "ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION",t[1767] = "ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST",t[1768] = "ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION",t[1769] = "ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION",t[1770] = "ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL",t[1771] = "ER_SKIPPING_LOGGED_TRANSACTION",t[1772] = "ER_MALFORMED_GTID_SET_SPECIFICATION",t[1773] = "ER_MALFORMED_GTID_SET_ENCODING",t[1774] = "ER_MALFORMED_GTID_SPECIFICATION",t[1775] = "ER_GNO_EXHAUSTED",t[1776] = "ER_BAD_SLAVE_AUTO_POSITION",t[1777] = "ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF",t[1778] = "ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET",t[1779] = "ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON",t[1780] = "ER_GTID_MODE_REQUIRES_BINLOG",t[1781] = "ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF",t[1782] = "ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON",t[1783] = "ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF",t[1784] = "ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF",t[1785] = "ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE",t[1786] = "ER_GTID_UNSAFE_CREATE_SELECT",t[1787] = "ER_GTID_UNSAFE_CREATE_DROP_TEMPORARY_TABLE_IN_TRANSACTION",t[1788] = "ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME",t[1789] = "ER_MASTER_HAS_PURGED_REQUIRED_GTIDS",t[1790] = "ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID",t[1791] = "ER_UNKNOWN_EXPLAIN_FORMAT",t[1792] = "ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION",t[1793] = "ER_TOO_LONG_TABLE_PARTITION_COMMENT",t[1794] = "ER_SLAVE_CONFIGURATION",t[1795] = "ER_INNODB_FT_LIMIT",t[1796] = "ER_INNODB_NO_FT_TEMP_TABLE",t[1797] = "ER_INNODB_FT_WRONG_DOCID_COLUMN",t[1798] = "ER_INNODB_FT_WRONG_DOCID_INDEX",t[1799] = "ER_INNODB_ONLINE_LOG_TOO_BIG",t[1800] = "ER_UNKNOWN_ALTER_ALGORITHM",t[1801] = "ER_UNKNOWN_ALTER_LOCK",t[1802] = "ER_MTS_CHANGE_MASTER_CANT_RUN_WITH_GAPS",t[1803] = "ER_MTS_RECOVERY_FAILURE",t[1804] = "ER_MTS_RESET_WORKERS",t[1805] = "ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2",t[1806] = "ER_SLAVE_SILENT_RETRY_TRANSACTION",t[1807] = "ER_DISCARD_FK_CHECKS_RUNNING",t[1808] = "ER_TABLE_SCHEMA_MISMATCH",t[1809] = "ER_TABLE_IN_SYSTEM_TABLESPACE",t[1810] = "ER_IO_READ_ERROR",t[1811] = "ER_IO_WRITE_ERROR",t[1812] = "ER_TABLESPACE_MISSING",t[1813] = "ER_TABLESPACE_EXISTS",t[1814] = "ER_TABLESPACE_DISCARDED",t[1815] = "ER_INTERNAL_ERROR",t[1816] = "ER_INNODB_IMPORT_ERROR",t[1817] = "ER_INNODB_INDEX_CORRUPT",t[1818] = "ER_INVALID_YEAR_COLUMN_LENGTH",t[1819] = "ER_NOT_VALID_PASSWORD",t[1820] = "ER_MUST_CHANGE_PASSWORD",t[1821] = "ER_FK_NO_INDEX_CHILD",t[1822] = "ER_FK_NO_INDEX_PARENT",t[1823] = "ER_FK_FAIL_ADD_SYSTEM",t[1824] = "ER_FK_CANNOT_OPEN_PARENT",t[1825] = "ER_FK_INCORRECT_OPTION",t[1826] = "ER_FK_DUP_NAME",t[1827] = "ER_PASSWORD_FORMAT",t[1828] = "ER_FK_COLUMN_CANNOT_DROP",t[1829] = "ER_FK_COLUMN_CANNOT_DROP_CHILD",t[1830] = "ER_FK_COLUMN_NOT_NULL",t[1831] = "ER_DUP_INDEX",t[1832] = "ER_FK_COLUMN_CANNOT_CHANGE",t[1833] = "ER_FK_COLUMN_CANNOT_CHANGE_CHILD",t[1834] = "ER_FK_CANNOT_DELETE_PARENT",t[1835] = "ER_MALFORMED_PACKET",t[1836] = "ER_READ_ONLY_MODE",t[1837] = "ER_GTID_NEXT_TYPE_UNDEFINED_GROUP",t[1838] = "ER_VARIABLE_NOT_SETTABLE_IN_SP",t[1839] = "ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF",t[1840] = "ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY",t[1841] = "ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY",t[1842] = "ER_GTID_PURGED_WAS_CHANGED",t[1843] = "ER_GTID_EXECUTED_WAS_CHANGED",t[1844] = "ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES",t[1845] = "ER_ALTER_OPERATION_NOT_SUPPORTED",t[1846] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON",t[1847] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY",t[1848] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION",t[1849] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME",t[1850] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE",t[1851] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK",t[1852] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_IGNORE",t[1853] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK",t[1854] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC",t[1855] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS",t[1856] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS",t[1857] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS",t[1858] = "ER_SQL_SLAVE_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE",t[1859] = "ER_DUP_UNKNOWN_IN_INDEX",t[1860] = "ER_IDENT_CAUSES_TOO_LONG_PATH",t[1861] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL",t[1862] = "ER_MUST_CHANGE_PASSWORD_LOGIN",t[1863] = "ER_ROW_IN_WRONG_PARTITION",t[1864] = "ER_MTS_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX",t[1865] = "ER_INNODB_NO_FT_USES_PARSER",t[1866] = "ER_BINLOG_LOGICAL_CORRUPTION",t[1867] = "ER_WARN_PURGE_LOG_IN_USE",t[1868] = "ER_WARN_PURGE_LOG_IS_ACTIVE",t[1869] = "ER_AUTO_INCREMENT_CONFLICT",t[1870] = "WARN_ON_BLOCKHOLE_IN_RBR",t[1871] = "ER_SLAVE_MI_INIT_REPOSITORY",t[1872] = "ER_SLAVE_RLI_INIT_REPOSITORY",t[1873] = "ER_ACCESS_DENIED_CHANGE_USER_ERROR",t[1874] = "ER_INNODB_READ_ONLY",t[1875] = "ER_STOP_SLAVE_SQL_THREAD_TIMEOUT",t[1876] = "ER_STOP_SLAVE_IO_THREAD_TIMEOUT",t[1877] = "ER_TABLE_CORRUPT",t[1878] = "ER_TEMP_FILE_WRITE_FAILURE",t[1879] = "ER_INNODB_FT_AUX_NOT_HEX_ID",t[1880] = "ER_OLD_TEMPORALS_UPGRADED",t[1881] = "ER_INNODB_FORCED_RECOVERY",t[1882] = "ER_AES_INVALID_IV",t[1883] = "ER_PLUGIN_CANNOT_BE_UNINSTALLED",t[1884] = "ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_GTID_GROUP",t[1885] = "ER_SLAVE_HAS_MORE_GTIDS_THAN_MASTER",t[1886] = "ER_MISSING_KEY",t[1887] = "WARN_NAMED_PIPE_ACCESS_EVERYONE",t[1888] = "ER_FOUND_MISSING_GTIDS",t[3e3] = "ER_FILE_CORRUPT",t[3001] = "ER_ERROR_ON_MASTER",t[3002] = "ER_INCONSISTENT_ERROR",t[3003] = "ER_STORAGE_ENGINE_NOT_LOADED",t[3004] = "ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER",t[3005] = "ER_WARN_LEGACY_SYNTAX_CONVERTED",t[3006] = "ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN",t[3007] = "ER_CANNOT_DISCARD_TEMPORARY_TABLE",t[3008] = "ER_FK_DEPTH_EXCEEDED",t[3009] = "ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2",t[3010] = "ER_WARN_TRIGGER_DOESNT_HAVE_CREATED",t[3011] = "ER_REFERENCED_TRG_DOES_NOT_EXIST",t[3012] = "ER_EXPLAIN_NOT_SUPPORTED",t[3013] = "ER_INVALID_FIELD_SIZE",t[3014] = "ER_MISSING_HA_CREATE_OPTION",t[3015] = "ER_ENGINE_OUT_OF_MEMORY",t[3016] = "ER_PASSWORD_EXPIRE_ANONYMOUS_USER",t[3017] = "ER_SLAVE_SQL_THREAD_MUST_STOP",t[3018] = "ER_NO_FT_MATERIALIZED_SUBQUERY",t[3019] = "ER_INNODB_UNDO_LOG_FULL",t[3020] = "ER_INVALID_ARGUMENT_FOR_LOGARITHM",t[3021] = "ER_SLAVE_CHANNEL_IO_THREAD_MUST_STOP",t[3022] = "ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO",t[3023] = "ER_WARN_ONLY_MASTER_LOG_FILE_NO_POS",t[3024] = "ER_QUERY_TIMEOUT",t[3025] = "ER_NON_RO_SELECT_DISABLE_TIMER",t[3026] = "ER_DUP_LIST_ENTRY",t[3027] = "ER_SQL_MODE_NO_EFFECT",t[3028] = "ER_AGGREGATE_ORDER_FOR_UNION",t[3029] = "ER_AGGREGATE_ORDER_NON_AGG_QUERY",t[3030] = "ER_SLAVE_WORKER_STOPPED_PREVIOUS_THD_ERROR",t[3031] = "ER_DONT_SUPPORT_SLAVE_PRESERVE_COMMIT_ORDER",t[3032] = "ER_SERVER_OFFLINE_MODE",t[3033] = "ER_GIS_DIFFERENT_SRIDS",t[3034] = "ER_GIS_UNSUPPORTED_ARGUMENT",t[3035] = "ER_GIS_UNKNOWN_ERROR",t[3036] = "ER_GIS_UNKNOWN_EXCEPTION",t[3037] = "ER_GIS_INVALID_DATA",t[3038] = "ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION",t[3039] = "ER_BOOST_GEOMETRY_CENTROID_EXCEPTION",t[3040] = "ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION",t[3041] = "ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION",t[3042] = "ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION",t[3043] = "ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION",t[3044] = "ER_STD_BAD_ALLOC_ERROR",t[3045] = "ER_STD_DOMAIN_ERROR",t[3046] = "ER_STD_LENGTH_ERROR",t[3047] = "ER_STD_INVALID_ARGUMENT",t[3048] = "ER_STD_OUT_OF_RANGE_ERROR",t[3049] = "ER_STD_OVERFLOW_ERROR",t[3050] = "ER_STD_RANGE_ERROR",t[3051] = "ER_STD_UNDERFLOW_ERROR",t[3052] = "ER_STD_LOGIC_ERROR",t[3053] = "ER_STD_RUNTIME_ERROR",t[3054] = "ER_STD_UNKNOWN_EXCEPTION",t[3055] = "ER_GIS_DATA_WRONG_ENDIANESS",t[3056] = "ER_CHANGE_MASTER_PASSWORD_LENGTH",t[3057] = "ER_USER_LOCK_WRONG_NAME",t[3058] = "ER_USER_LOCK_DEADLOCK",t[3059] = "ER_REPLACE_INACCESSIBLE_ROWS",t[3060] = "ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS",t[3061] = "ER_ILLEGAL_USER_VAR",t[3062] = "ER_GTID_MODE_OFF",t[3063] = "ER_UNSUPPORTED_BY_REPLICATION_THREAD",t[3064] = "ER_INCORRECT_TYPE",t[3065] = "ER_FIELD_IN_ORDER_NOT_SELECT",t[3066] = "ER_AGGREGATE_IN_ORDER_NOT_SELECT",t[3067] = "ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN",t[3068] = "ER_NET_OK_PACKET_TOO_LARGE",t[3069] = "ER_INVALID_JSON_DATA",t[3070] = "ER_INVALID_GEOJSON_MISSING_MEMBER",t[3071] = "ER_INVALID_GEOJSON_WRONG_TYPE",t[3072] = "ER_INVALID_GEOJSON_UNSPECIFIED",t[3073] = "ER_DIMENSION_UNSUPPORTED",t[3074] = "ER_SLAVE_CHANNEL_DOES_NOT_EXIST",t[3075] = "ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT",t[3076] = "ER_SLAVE_CHANNEL_NAME_INVALID_OR_TOO_LONG",t[3077] = "ER_SLAVE_NEW_CHANNEL_WRONG_REPOSITORY",t[3078] = "ER_SLAVE_CHANNEL_DELETE",t[3079] = "ER_SLAVE_MULTIPLE_CHANNELS_CMD",t[3080] = "ER_SLAVE_MAX_CHANNELS_EXCEEDED",t[3081] = "ER_SLAVE_CHANNEL_MUST_STOP",t[3082] = "ER_SLAVE_CHANNEL_NOT_RUNNING",t[3083] = "ER_SLAVE_CHANNEL_WAS_RUNNING",t[3084] = "ER_SLAVE_CHANNEL_WAS_NOT_RUNNING",t[3085] = "ER_SLAVE_CHANNEL_SQL_THREAD_MUST_STOP",t[3086] = "ER_SLAVE_CHANNEL_SQL_SKIP_COUNTER",t[3087] = "ER_WRONG_FIELD_WITH_GROUP_V2",t[3088] = "ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2",t[3089] = "ER_WARN_DEPRECATED_SYSVAR_UPDATE",t[3090] = "ER_WARN_DEPRECATED_SQLMODE",t[3091] = "ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID",t[3092] = "ER_GROUP_REPLICATION_CONFIGURATION",t[3093] = "ER_GROUP_REPLICATION_RUNNING",t[3094] = "ER_GROUP_REPLICATION_APPLIER_INIT_ERROR",t[3095] = "ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT",t[3096] = "ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR",t[3097] = "ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR",t[3098] = "ER_BEFORE_DML_VALIDATION_ERROR",t[3099] = "ER_PREVENTS_VARIABLE_WITHOUT_RBR",t[3100] = "ER_RUN_HOOK_ERROR",t[3101] = "ER_TRANSACTION_ROLLBACK_DURING_COMMIT",t[3102] = "ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED",t[3103] = "ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN",t[3104] = "ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN",t[3105] = "ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN",t[3106] = "ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN",t[3107] = "ER_GENERATED_COLUMN_NON_PRIOR",t[3108] = "ER_DEPENDENT_BY_GENERATED_COLUMN",t[3109] = "ER_GENERATED_COLUMN_REF_AUTO_INC",t[3110] = "ER_FEATURE_NOT_AVAILABLE",t[3111] = "ER_CANT_SET_GTID_MODE",t[3112] = "ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF",t[3113] = "ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION",t[3114] = "ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON",t[3115] = "ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF",t[3116] = "ER_CANT_SET_ENFORCE_GTID_CONSISTENCY_ON_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS",t[3117] = "ER_SET_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TRANSACTIONS",t[3118] = "ER_ACCOUNT_HAS_BEEN_LOCKED",t[3119] = "ER_WRONG_TABLESPACE_NAME",t[3120] = "ER_TABLESPACE_IS_NOT_EMPTY",t[3121] = "ER_WRONG_FILE_NAME",t[3122] = "ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION",t[3123] = "ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR",t[3124] = "ER_WARN_BAD_MAX_EXECUTION_TIME",t[3125] = "ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME",t[3126] = "ER_WARN_CONFLICTING_HINT",t[3127] = "ER_WARN_UNKNOWN_QB_NAME",t[3128] = "ER_UNRESOLVED_HINT_NAME",t[3129] = "ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE",t[3130] = "ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED",t[3131] = "ER_LOCKING_SERVICE_WRONG_NAME",t[3132] = "ER_LOCKING_SERVICE_DEADLOCK",t[3133] = "ER_LOCKING_SERVICE_TIMEOUT",t[3134] = "ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED",t[3135] = "ER_SQL_MODE_MERGED",t[3136] = "ER_VTOKEN_PLUGIN_TOKEN_MISMATCH",t[3137] = "ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND",t[3138] = "ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID",t[3139] = "ER_SLAVE_CHANNEL_OPERATION_NOT_ALLOWED",t[3140] = "ER_INVALID_JSON_TEXT",t[3141] = "ER_INVALID_JSON_TEXT_IN_PARAM",t[3142] = "ER_INVALID_JSON_BINARY_DATA",t[3143] = "ER_INVALID_JSON_PATH",t[3144] = "ER_INVALID_JSON_CHARSET",t[3145] = "ER_INVALID_JSON_CHARSET_IN_FUNCTION",t[3146] = "ER_INVALID_TYPE_FOR_JSON",t[3147] = "ER_INVALID_CAST_TO_JSON",t[3148] = "ER_INVALID_JSON_PATH_CHARSET",t[3149] = "ER_INVALID_JSON_PATH_WILDCARD",t[3150] = "ER_JSON_VALUE_TOO_BIG",t[3151] = "ER_JSON_KEY_TOO_BIG",t[3152] = "ER_JSON_USED_AS_KEY",t[3153] = "ER_JSON_VACUOUS_PATH",t[3154] = "ER_JSON_BAD_ONE_OR_ALL_ARG",t[3155] = "ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE",t[3156] = "ER_INVALID_JSON_VALUE_FOR_CAST",t[3157] = "ER_JSON_DOCUMENT_TOO_DEEP",t[3158] = "ER_JSON_DOCUMENT_NULL_KEY",t[3159] = "ER_SECURE_TRANSPORT_REQUIRED",t[3160] = "ER_NO_SECURE_TRANSPORTS_CONFIGURED",t[3161] = "ER_DISABLED_STORAGE_ENGINE",t[3162] = "ER_USER_DOES_NOT_EXIST",t[3163] = "ER_USER_ALREADY_EXISTS",t[3164] = "ER_AUDIT_API_ABORT";
      t[3165] = "ER_INVALID_JSON_PATH_ARRAY_CELL", t[3166] = "ER_BUFPOOL_RESIZE_INPROGRESS", t[3167] = "ER_FEATURE_DISABLED_SEE_DOC", t[3168] = "ER_SERVER_ISNT_AVAILABLE", t[3169] = "ER_SESSION_WAS_KILLED", t[3170] = "ER_CAPACITY_EXCEEDED", t[3171] = "ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER", t[3172] = "ER_TABLE_NEEDS_UPG_PART", t[3173] = "ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID", t[3174] = "ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL", t[3175] = "ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT", t[3176] = "ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE", t[3177] = "ER_LOCK_REFUSED_BY_ENGINE", t[3178] = "ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN", t[3179] = "ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE", t[3180] = "ER_MASTER_KEY_ROTATION_ERROR_BY_SE", t[3181] = "ER_MASTER_KEY_ROTATION_BINLOG_FAILED", t[3182] = "ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE", t[3183] = "ER_TABLESPACE_CANNOT_ENCRYPT", t[3184] = "ER_INVALID_ENCRYPTION_OPTION", t[3185] = "ER_CANNOT_FIND_KEY_IN_KEYRING", t[3186] = "ER_CAPACITY_EXCEEDED_IN_PARSER", t[3187] = "ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE", t[3188] = "ER_KEYRING_UDF_KEYRING_SERVICE_ERROR", t[3189] = "ER_USER_COLUMN_OLD_LENGTH", t[3190] = "ER_CANT_RESET_MASTER", t[3191] = "ER_GROUP_REPLICATION_MAX_GROUP_SIZE", t[3192] = "ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED", t[3193] = "ER_TABLE_REFERENCED", t[3194] = "ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE", t[3195] = "ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO", t[3196] = "ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID", t[3197] = "ER_XA_RETRY", t[3198] = "ER_KEYRING_AWS_UDF_AWS_KMS_ERROR", t[3199] = "ER_BINLOG_UNSAFE_XA", t[3200] = "ER_UDF_ERROR", t[3201] = "ER_KEYRING_MIGRATION_FAILURE", t[3202] = "ER_KEYRING_ACCESS_DENIED_ERROR", t[3203] = "ER_KEYRING_MIGRATION_STATUS", t[3204] = "ER_PLUGIN_FAILED_TO_OPEN_TABLES", t[3205] = "ER_PLUGIN_FAILED_TO_OPEN_TABLE", t[3206] = "ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED", t[3207] = "ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET", t[3208] = "ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY", t[3209] = "ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED", t[3210] = "ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED", t[3211] = "ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE", t[3212] = "ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED", t[3213] = "ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS", t[3214] = "ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE", t[3215] = "ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT", t[3216] = "ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED", t[3217] = "ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE", t[3218] = "ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE", t[3219] = "ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR", t[3220] = "ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY", t[3221] = "ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY", t[3222] = "ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS", t[3223] = "ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC", t[3224] = "ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER", t[3225] = "ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER", t[3226] = "WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP", t[3227] = "ER_XA_REPLICATION_FILTERS", t[3228] = "ER_CANT_OPEN_ERROR_LOG", t[3229] = "ER_GROUPING_ON_TIMESTAMP_IN_DST", t[3230] = "ER_CANT_START_SERVER_NAMED_PIPE"
    }, 1837: (e, t) => {
      t.SERVER_STATUS_IN_TRANS = 1, t.SERVER_STATUS_AUTOCOMMIT = 2, t.SERVER_MORE_RESULTS_EXISTS = 8, t.SERVER_QUERY_NO_GOOD_INDEX_USED = 16, t.SERVER_QUERY_NO_INDEX_USED = 32, t.SERVER_STATUS_CURSOR_EXISTS = 64, t.SERVER_STATUS_LAST_ROW_SENT = 128, t.SERVER_STATUS_DB_DROPPED = 256, t.SERVER_STATUS_NO_BACKSLASH_ESCAPES = 512, t.SERVER_STATUS_METADATA_CHANGED = 1024, t.SERVER_QUERY_WAS_SLOW = 2048, t.SERVER_PS_OUT_PARAMS = 4096
    }, 1075: (e, t) => {
      t["Amazon RDS"] = {
        ca: ["-----BEGIN CERTIFICATE-----\nMIIDQzCCAqygAwIBAgIJAOd1tlfiGoEoMA0GCSqGSIb3DQEBBQUAMHUxCzAJBgNV\nBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdTZWF0dGxlMRMw\nEQYDVQQKEwpBbWF6b24uY29tMQwwCgYDVQQLEwNSRFMxHDAaBgNVBAMTE2F3cy5h\nbWF6b24uY29tL3Jkcy8wHhcNMTAwNDA1MjI0NDMxWhcNMTUwNDA0MjI0NDMxWjB1\nMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHU2Vh\ndHRsZTETMBEGA1UEChMKQW1hem9uLmNvbTEMMAoGA1UECxMDUkRTMRwwGgYDVQQD\nExNhd3MuYW1hem9uLmNvbS9yZHMvMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKB\ngQDKhXGU7tizxUR5WaFoMTFcxNxa05PEjZaIOEN5ctkWrqYSRov0/nOMoZjqk8bC\nmed9vPFoQGD0OTakPs0jVe3wwmR735hyVwmKIPPsGlaBYj1O6llIpZeQVyupNx56\nUzqtiLaDzh1KcmfqP3qP2dInzBfJQKjiRudo1FWnpPt33QIDAQABo4HaMIHXMB0G\nA1UdDgQWBBT/H3x+cqSkR/ePSIinPtc4yWKe3DCBpwYDVR0jBIGfMIGcgBT/H3x+\ncqSkR/ePSIinPtc4yWKe3KF5pHcwdTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh\nc2hpbmd0b24xEDAOBgNVBAcTB1NlYXR0bGUxEzARBgNVBAoTCkFtYXpvbi5jb20x\nDDAKBgNVBAsTA1JEUzEcMBoGA1UEAxMTYXdzLmFtYXpvbi5jb20vcmRzL4IJAOd1\ntlfiGoEoMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAvguZy/BDT66x\nGfgnJlyQwnFSeVLQm9u/FIvz4huGjbq9dqnD6h/Gm56QPFdyMEyDiZWaqY6V08lY\nLTBNb4kcIc9/6pc0/ojKciP5QJRm6OiZ4vgG05nF4fYjhU7WClUx7cxq1fKjNc2J\nUCmmYqgiVkAGWRETVo+byOSDZ4swb10=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID9DCCAtygAwIBAgIBQjANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUwOTExMzFaFw0y\nMDAzMDUwOTExMzFaMIGKMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEbMBkGA1UEAwwSQW1hem9uIFJE\nUyBSb290IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuD8nrZ8V\nu+VA8yVlUipCZIKPTDcOILYpUe8Tct0YeQQr0uyl018StdBsa3CjBgvwpDRq1HgF\nJi2N3+39+shCNspQeE6aYU+BHXhKhIIStt3r7gl/4NqYiDDMWKHxHq0nsGDFfArf\nAOcjZdJagOMqb3fF46flc8k2E7THTm9Sz4L7RY1WdABMuurpICLFE3oHcGdapOb9\nT53pQR+xpHW9atkcf3pf7gbO0rlKVSIoUenBlZipUlp1VZl/OD/E+TtRhDDNdI2J\nP/DSMM3aEsq6ZQkfbz/Ilml+Lx3tJYXUDmp+ZjzMPLk/+3beT8EhrwtcG3VPpvwp\nBIOqsqVVTvw/CwIDAQABo2MwYTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUw\nAwEB/zAdBgNVHQ4EFgQUTgLurD72FchM7Sz1BcGPnIQISYMwHwYDVR0jBBgwFoAU\nTgLurD72FchM7Sz1BcGPnIQISYMwDQYJKoZIhvcNAQEFBQADggEBAHZcgIio8pAm\nMjHD5cl6wKjXxScXKtXygWH2BoDMYBJF9yfyKO2jEFxYKbHePpnXB1R04zJSWAw5\n2EUuDI1pSBh9BA82/5PkuNlNeSTB3dXDD2PEPdzVWbSKvUB8ZdooV+2vngL0Zm4r\n47QPyd18yPHrRIbtBtHR/6CwKevLZ394zgExqhnekYKIqqEX41xsUV0Gm6x4vpjf\n2u6O/+YE2U+qyyxHE5Wd5oqde0oo9UUpFETJPVb6Q2cEeQib8PBAyi0i6KnF+kIV\nA9dY7IHSubtCK/i8wxMVqfd5GtbA8mmpeJFwnDvm9rBEsHybl08qlax9syEwsUYr\n/40NawZfTUU=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEBjCCAu6gAwIBAgIJAMc0ZzaSUK51MA0GCSqGSIb3DQEBCwUAMIGPMQswCQYD\nVQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\nMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\nem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkw\nODIyMTcwODUwWhcNMjQwODIyMTcwODUwWjCBjzELMAkGA1UEBhMCVVMxEDAOBgNV\nBAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoMGUFtYXpv\nbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxIDAeBgNV\nBAMMF0FtYXpvbiBSRFMgUm9vdCAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEFAAOC\nAQ8AMIIBCgKCAQEArXnF/E6/Qh+ku3hQTSKPMhQQlCpoWvnIthzX6MK3p5a0eXKZ\noWIjYcNNG6UwJjp4fUXl6glp53Jobn+tWNX88dNH2n8DVbppSwScVE2LpuL+94vY\n0EYE/XxN7svKea8YvlrqkUBKyxLxTjh+U/KrGOaHxz9v0l6ZNlDbuaZw3qIWdD/I\n6aNbGeRUVtpM6P+bWIoxVl/caQylQS6CEYUk+CpVyJSkopwJlzXT07tMoDL5WgX9\nO08KVgDNz9qP/IGtAcRduRcNioH3E9v981QO1zt/Gpb2f8NqAjUUCUZzOnij6mx9\nMcZ+9cWX88CRzR0vQODWuZscgI08NvM69Fn2SQIDAQABo2MwYTAOBgNVHQ8BAf8E\nBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUc19g2LzLA5j0Kxc0LjZa\npmD/vB8wHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJKoZIhvcN\nAQELBQADggEBAHAG7WTmyjzPRIM85rVj+fWHsLIvqpw6DObIjMWokpliCeMINZFV\nynfgBKsf1ExwbvJNzYFXW6dihnguDG9VMPpi2up/ctQTN8tm9nDKOy08uNZoofMc\nNUZxKCEkVKZv+IL4oHoeayt8egtv3ujJM6V14AstMQ6SwvwvA93EP/Ug2e4WAXHu\ncbI1NAbUgVDqp+DRdfvZkgYKryjTWd/0+1fS8X1bBZVWzl7eirNVnHbSH2ZDpNuY\n0SBd8dj5F6ld3t58ydZbrTHze7JJOd8ijySAp4/kiu9UfZWuTPABzDa/DSdz9Dk/\nzPW4CXXvhLmE02TA9/HeCw3KEHIwicNuEfw=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBRDANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMDZaFw0y\nMDAzMDUyMjAzMDZaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1ub3J0aGVhc3QtMSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAMmM2B4PfTXCZjbZMWiDPyxvk/eeNwIRJAhfzesiGUiLozX6CRy3rwC1ZOPV\nAcQf0LB+O8wY88C/cV+d4Q2nBDmnk+Vx7o2MyMh343r5rR3Na+4izd89tkQVt0WW\nvO21KRH5i8EuBjinboOwAwu6IJ+HyiQiM0VjgjrmEr/YzFPL8MgHD/YUHehqjACn\nC0+B7/gu7W4qJzBL2DOf7ub2qszGtwPE+qQzkCRDwE1A4AJmVE++/FLH2Zx78Egg\nfV1sUxPtYgjGH76VyyO6GNKM6rAUMD/q5mnPASQVIXgKbupr618bnH+SWHFjBqZq\nHvDGPMtiiWII41EmGUypyt5AbysCAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFIiKM0Q6n1K4EmLxs3ZXxINbwEwR\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQBezGbE9Rw/k2e25iGjj5n8r+M3dlye8ORfCE/dijHtxqAKasXHgKX8I9Tw\nJkBiGWiuzqn7gO5MJ0nMMro1+gq29qjZnYX1pDHPgsRjUX8R+juRhgJ3JSHijRbf\n4qNJrnwga7pj94MhcLq9u0f6dxH6dXbyMv21T4TZMTmcFduf1KgaiVx1PEyJjC6r\nM+Ru+A0eM+jJ7uCjUoZKcpX8xkj4nmSnz9NMPog3wdOSB9cAW7XIc5mHa656wr7I\nWJxVcYNHTXIjCcng2zMKd1aCcl2KSFfy56sRfT7J5Wp69QSr+jq8KM55gw8uqAwi\nVPrXn2899T1rcTtFYFP16WXjGuc0\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBTDANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTExMDYwMDA1NDZaFw0y\nMDAzMDUwMDA1NDZaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1ub3J0aGVhc3QtMiBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAKSwd+RVUzTRH0FgnbwoTK8TMm/zMT4+2BvALpAUe6YXbkisg2goycWuuWLg\njOpFBB3GtyvXZnkqi7MkDWUmj1a2kf8l2oLyoaZ+Hm9x/sV+IJzOqPvj1XVUGjP6\nyYYnPJmUYqvZeI7fEkIGdFkP2m4/sgsSGsFvpD9FK1bL1Kx2UDpYX0kHTtr18Zm/\n1oN6irqWALSmXMDydb8hE0FB2A1VFyeKE6PnoDj/Y5cPHwPPdEi6/3gkDkSaOG30\nrWeQfL3pOcKqzbHaWTxMphd0DSL/quZ64Nr+Ly65Q5PRcTrtr55ekOUziuqXwk+o\n9QpACMwcJ7ROqOznZTqTzSFVXFECAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFM6Nox/QWbhzWVvzoJ/y0kGpNPK+\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQCTkWBqNvyRf3Y/W21DwFx3oT/AIWrHt0BdGZO34tavummXemTH9LZ/mqv9\naljt6ZuDtf5DEQjdsAwXMsyo03ffnP7doWm8iaF1+Mui77ot0TmTsP/deyGwukvJ\ntkxX8bZjDh+EaNauWKr+CYnniNxCQLfFtXYJsfOdVBzK3xNL+Z3ucOQRhr2helWc\nCDQgwfhP1+3pRVKqHvWCPC4R3fT7RZHuRmZ38kndv476GxRntejh+ePffif78bFI\n3rIZCPBGobrrUMycafSbyXteoGca/kA+/IqrAPlk0pWQ4aEL0yTWN2h2dnjoD7oX\nbyIuL/g9AGRh97+ssn7D6bDRPTbW\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBRTANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMTlaFw0y\nMDAzMDUyMjAzMTlaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1zb3V0aGVhc3QtMSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBANaXElmSEYt/UtxHFsARFhSUahTf1KNJzR0Dmay6hqOXQuRVbKRwPd19u5vx\nDdF1sLT7D69IK3VDnUiQScaCv2Dpu9foZt+rLx+cpx1qiQd1UHrvqq8xPzQOqCdC\nRFStq6yVYZ69yfpfoI67AjclMOjl2Vph3ftVnqP0IgVKZdzeC7fd+umGgR9xY0Qr\nUbhd/lWdsbNvzK3f1TPWcfIKQnpvSt85PIEDJir6/nuJUKMtmJRwTymJf0i+JZ4x\n7dJa341p2kHKcHMgOPW7nJQklGBA70ytjUV6/qebS3yIugr/28mwReflg3TJzVDl\nEOvi6pqbqNbkMuEwGDCmEQIVqgkCAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFAu93/4k5xbWOsgdCdn+/KdiRuit\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQBlcjSyscpPjf5+MgzMuAsCxByqUt+WFspwcMCpwdaBeHOPSQrXNqX2Sk6P\nkth6oCivA64trWo8tFMvPYlUA1FYVD5WpN0kCK+P5pD4KHlaDsXhuhClJzp/OP8t\npOyUr5109RHLxqoKB5J5m1XA7rgcFjnMxwBSWFe3/4uMk/+4T53YfCVXuc6QV3i7\nI/2LAJwFf//pTtt6fZenYfCsahnr2nvrNRNyAxcfvGZ/4Opn/mJtR6R/AjvQZHiR\nbkRNKF2GW0ueK5W4FkZVZVhhX9xh1Aj2Ollb+lbOqADaVj+AT3PoJPZ3MPQHKCXm\nxwG0LOLlRr/TfD6li1AfOVTAJXv9\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBRjANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMjRaFw0y\nMDAzMDUyMjAzMjRaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1zb3V0aGVhc3QtMiBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAJqBAJutz69hFOh3BtLHZTbwE8eejGGKayn9hu98YMDPzWzGXWCmW+ZYWELA\ncY3cNWNF8K4FqKXFr2ssorBYim1UtYFX8yhydT2hMD5zgQ2sCGUpuidijuPA6zaq\nZ3tdhVR94f0q8mpwpv2zqR9PcqaGDx2VR1x773FupRPRo7mEW1vC3IptHCQlP/zE\n7jQiLl28bDIH2567xg7e7E9WnZToRnhlYdTaDaJsHTzi5mwILi4cihSok7Shv/ME\nhnukvxeSPUpaVtFaBhfBqq055ePq9I+Ns4KGreTKMhU0O9fkkaBaBmPaFgmeX/XO\nn2AX7gMouo3mtv34iDTZ0h6YCGkCAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFIlQnY0KHYWn1jYumSdJYfwj/Nfw\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQA0wVU6/l41cTzHc4azc4CDYY2Wd90DFWiH9C/mw0SgToYfCJ/5Cfi0NT/Y\nPRnk3GchychCJgoPA/k9d0//IhYEAIiIDjyFVgjbTkKV3sh4RbdldKVOUB9kumz/\nZpShplsGt3z4QQiVnKfrAgqxWDjR0I0pQKkxXa6Sjkicos9LQxVtJ0XA4ieG1E7z\nzJr+6t80wmzxvkInSaWP3xNJK9azVRTrgQZQlvkbpDbExl4mNTG66VD3bAp6t3Wa\nB49//uDdfZmPkqqbX+hsxp160OH0rxJppwO3Bh869PkDnaPEd/Pxw7PawC+li0gi\nNRV8iCEx85aFxcyOhqn0WZOasxee\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/zCCAuegAwIBAgIBRzANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMzFaFw0y\nMDAzMDUyMjAzMzFaMIGSMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEjMCEGA1UEAwwaQW1hem9uIFJE\nUyBldS1jZW50cmFsLTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQDFtP2dhSLuaPOI4ZrrPWsK4OY9ocQBp3yApH1KJYmI9wpQKZG/KCH2E6Oo7JAw\nQORU519r033T+FO2Z7pFPlmz1yrxGXyHpJs8ySx3Yo5S8ncDCdZJCLmtPiq/hahg\n5/0ffexMFUCQaYicFZsrJ/cStdxUV+tSw2JQLD7UxS9J97LQWUPyyG+ZrjYVTVq+\nzudnFmNSe4QoecXMhAFTGJFQXxP7nhSL9Ao5FGgdXy7/JWeWdQIAj8ku6cBDKPa6\nY6kP+ak+In+Lye8z9qsCD/afUozfWjPR2aA4JoIZVF8dNRShIMo8l0XfgfM2q0+n\nApZWZ+BjhIO5XuoUgHS3D2YFAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNV\nHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBRm4GsWIA/M6q+tK8WGHWDGh2gcyTAf\nBgNVHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOC\nAQEAHpMmeVQNqcxgfQdbDIi5UIy+E7zZykmtAygN1XQrvga9nXTis4kOTN6g5/+g\nHCx7jIXeNJzAbvg8XFqBN84Quqgpl/tQkbpco9Jh1HDs558D5NnZQxNqH5qXQ3Mm\nuPgCw0pYcPOa7bhs07i+MdVwPBsX27CFDtsgAIru8HvKxY1oTZrWnyIRo93tt/pk\nWuItVMVHjaQZVfTCow0aDUbte6Vlw82KjUFq+n2NMSCJDiDKsDDHT6BJc4AJHIq3\n/4Z52MSC9KMr0yAaaoWfW/yMEj9LliQauAgwVjArF4q78rxpfKTG9Rfd8U1BZANP\n7FrFMN0ThjfA1IvmOYcgskY5bQ==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBSDANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzMzVaFw0y\nMDAzMDUyMjAzMzVaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyBldS13ZXN0LTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCx\nPdbqQ0HKRj79Pmocxvjc+P6i4Ux24kgFIl+ckiir1vzkmesc3a58gjrMlCksEObt\nYihs5IhzEq1ePT0gbfS9GYFp34Uj/MtPwlrfCBWG4d2TcrsKRHr1/EXUYhWqmdrb\nRhX8XqoRhVkbF/auzFSBhTzcGGvZpQ2KIaxRcQfcXlMVhj/pxxAjh8U4F350Fb0h\nnX1jw4/KvEreBL0Xb2lnlGTkwVxaKGSgXEnOgIyOFdOQc61vdome0+eeZsP4jqeR\nTGYJA9izJsRbe2YJxHuazD+548hsPlM3vFzKKEVURCha466rAaYAHy3rKur3HYQx\nYt+SoKcEz9PXuSGj96ejAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBTebg//h2oeXbZjQ4uuoiuLYzuiPDAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nTikPaGeZasTPw+4RBemlsyPAjtFFQLo7ddaFdORLgdEysVf8aBqndvbA6MT/v4lj\nGtEtUdF59ZcbWOrVm+fBZ2h/jYJ59dYF/xzb09nyRbdMSzB9+mkSsnOMqluq5y8o\nDY/PfP2vGhEg/2ZncRC7nlQU1Dm8F4lFWEiQ2fi7O1cW852Vmbq61RIfcYsH/9Ma\nkpgk10VZ75b8m3UhmpZ/2uRY+JEHImH5WpcTJ7wNiPNJsciZMznGtrgOnPzYco8L\ncDleOASIZifNMQi9PKOJKvi0ITz0B/imr8KBsW0YjZVJ54HMa7W1lwugSM7aMAs+\nE3Sd5lS+SHwWaOCHwhOEVA==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBSTANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzNDBaFw0y\nMDAzMDUyMjAzNDBaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyBzYS1lYXN0LTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCU\nX4OBnQ5xA6TLJAiFEI6l7bUWjoVJBa/VbMdCCSs2i2dOKmqUaXu2ix2zcPILj3lZ\nGMk3d/2zvTK/cKhcFrewHUBamTeVHdEmynhMQamqNmkM4ptYzFcvEUw1TGxHT4pV\nQ6gSN7+/AJewQvyHexHo8D0+LDN0/Wa9mRm4ixCYH2CyYYJNKaZt9+EZfNu+PPS4\n8iB0TWH0DgQkbWMBfCRgolLLitAZklZ4dvdlEBS7evN1/7ttBxUK6SvkeeSx3zBl\nww3BlXqc3bvTQL0A+RRysaVyFbvtp9domFaDKZCpMmDFAN/ntx215xmQdrSt+K3F\ncXdGQYHx5q410CAclGnbAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBT6iVWnm/uakS+tEX2mzIfw+8JL0zAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nFmDD+QuDklXn2EgShwQxV13+txPRuVdOSrutHhoCgMwFWCMtPPtBAKs6KPY7Guvw\nDpJoZSehDiOfsgMirjOWjvfkeWSNvKfjWTVneX7pZD9W5WPnsDBvTbCGezm+v87z\nb+ZM2ZMo98m/wkMcIEAgdSKilR2fuw8rLkAjhYFfs0A7tDgZ9noKwgHvoE4dsrI0\nKZYco6DlP/brASfHTPa2puBLN9McK3v+h0JaSqqm5Ro2Bh56tZkQh8AWy/miuDuK\n3+hNEVdxosxlkM1TPa1DGj0EzzK0yoeerXuH2HX7LlCrrxf6/wdKnjR12PMrLQ4A\npCqkcWw894z6bV9MAvKe6A==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBQzANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMTU0MDRaFw0y\nMDAzMDUyMTU0MDRaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyB1cy1lYXN0LTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDI\nUIuwh8NusKHk1SqPXcP7OqxY3S/M2ZyQWD3w7Bfihpyyy/fc1w0/suIpX3kbMhAV\n2ESwged2/2zSx4pVnjp/493r4luhSqQYzru78TuPt9bhJIJ51WXunZW2SWkisSaf\nUSYUzVN9ezR/bjXTumSUQaLIouJt3OHLX49s+3NAbUyOI8EdvgBQWD68H1epsC0n\nCI5s+pIktyOZ59c4DCDLQcXErQ+tNbDC++oct1ANd/q8p9URonYwGCGOBy7sbCYq\n9eVHh1Iy2M+SNXddVOGw5EuruvHoCIQyOz5Lz4zSuZA9dRbrfztNOpezCNYu6NKM\nn+hzcvdiyxv77uNm8EaxAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBQSQG3TmMe6Sa3KufaPBa72v4QFDzAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nL/mOZfB3187xTmjOHMqN2G2oSKHBKiQLM9uv8+97qT+XR+TVsBT6b3yoPpMAGhHA\nPc7nxAF5gPpuzatx0OTLPcmYucFmfqT/1qA5WlgCnMNtczyNMH97lKFTNV7Njtek\njWEzAEQSyEWrkNpNlC4j6kMYyPzVXQeXUeZTgJ9FNnVZqmvfjip2N22tawMjrCn5\n7KN/zN65EwY2oO9XsaTwwWmBu3NrDdMbzJnbxoWcFWj4RBwanR1XjQOVNhDwmCOl\n/1Et13b8CPyj69PC8BOVU6cfTSx8WUVy0qvYOKHNY9Bqa5BDnIL3IVmUkeTlM1mt\nenRpyBj+Bk9rh/ICdiRKmA==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBSjANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzNDVaFw0y\nMDAzMDUyMjAzNDVaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyB1cy13ZXN0LTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDE\nDhw+uw/ycaiIhhyu2pXFRimq0DlB8cNtIe8hdqndH8TV/TFrljNgR8QdzOgZtZ9C\nzzQ2GRpInN/qJF6slEd6wO+6TaDBQkPY+07TXNt52POFUhdVkhJXHpE2BS7Xn6J7\n7RFAOeG1IZmc2DDt+sR1BgXzUqHslQGfFYNS0/MBO4P+ya6W7IhruB1qfa4HiYQS\ndbe4MvGWnv0UzwAqdR7OF8+8/5c58YXZIXCO9riYF2ql6KNSL5cyDPcYK5VK0+Q9\nVI6vuJHSMYcF7wLePw8jtBktqAFE/wbdZiIHhZvNyiNWPPNTGUmQbaJ+TzQEHDs5\n8en+/W7JKnPyBOkxxENbAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBS0nw/tFR9bCjgqWTPJkyy4oOD8bzAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nCXGAY3feAak6lHdqj6+YWjy6yyUnLK37bRxZDsyDVXrPRQaXRzPTzx79jvDwEb/H\nQ/bdQ7zQRWqJcbivQlwhuPJ4kWPUZgSt3JUUuqkMsDzsvj/bwIjlrEFDOdHGh0mi\neVIngFEjUXjMh+5aHPEF9BlQnB8LfVtKj18e15UDTXFa+xJPFxUR7wDzCfo4WI1m\nsUMG4q1FkGAZgsoyFPZfF8IVvgCuGdR8z30VWKklFxttlK0eGLlPAyIO0CQxPQlo\nsaNJrHf4tLOgZIWk+LpDhNd9Et5EzvJ3aURUsKY4pISPPF5WdvM9OE59bERwUErd\nnuOuQWQeeadMceZnauRzJQ==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBSzANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNTAyMDUyMjAzNTBaFw0y\nMDAzMDUyMjAzNTBaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyB1cy13ZXN0LTIgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDM\nH58SR48U6jyERC1vYTnub34smf5EQVXyzaTmspWGWGzT31NLNZGSDFaa7yef9kdO\nmzJsgebR5tXq6LdwlIoWkKYQ7ycUaadtVKVYdI40QcI3cHn0qLFlg2iBXmWp/B+i\nZ34VuVlCh31Uj5WmhaBoz8t/GRqh1V/aCsf3Wc6jCezH3QfuCjBpzxdOOHN6Ie2v\nxX09O5qmZTvMoRBAvPkxdaPg/Mi7fxueWTbEVk78kuFbF1jHYw8U1BLILIAhcqlq\nx4u8nl73t3O3l/soNUcIwUDK0/S+Kfqhwn9yQyPlhb4Wy3pfnZLJdkyHldktnQav\n9TB9u7KH5Lk0aAYslMLxAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBT8roM4lRnlFHWMPWRz0zkwFZog1jAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQUFAAOCAQEA\nJwrxwgwmPtcdaU7O7WDdYa4hprpOMamI49NDzmE0s10oGrqmLwZygcWU0jT+fJ+Y\npJe1w0CVfKaeLYNsOBVW3X4ZPmffYfWBheZiaiEflq/P6t7/Eg81gaKYnZ/x1Dfa\nsUYkzPvCkXe9wEz5zdUTOCptDt89rBR9CstL9vE7WYUgiVVmBJffWbHQLtfjv6OF\nNMb0QME981kGRzc2WhgP71YS2hHd1kXtsoYP1yTu4vThSKsoN4bkiHsaC1cRkLoy\n0fFA4wpB3WloMEvCDaUvvH1LZlBXTNlwi9KtcwD4tDxkkBt4tQczKLGpQ/nF/W9n\n8YDWk3IIc1sd0bkZqoau2Q==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/TCCAuWgAwIBAgIBTTANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNjA1MDMyMTI5MjJaFw0y\nMDAzMDUyMTI5MjJaMIGQMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEhMB8GA1UEAwwYQW1hem9uIFJE\nUyBhcC1zb3V0aC0xIENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n06eWGLE0TeqL9kyWOLkS8q0fXO97z+xyBV3DKSB2lg2GkgBz3B98MkmkeB0SZy3G\nCe4uCpCPbFKiFEdiUclOlhZsrBuCeaimxLM3Ig2wuenElO/7TqgaYHYUbT3d+VQW\nGUbLn5GRZJZe1OAClYdOWm7A1CKpuo+cVV1vxbY2nGUQSJPpVn2sT9gnwvjdE60U\nJGYU/RLCTm8zmZBvlWaNIeKDnreIc4rKn6gUnJ2cQn1ryCVleEeyc3xjYDSrjgdn\nFLYGcp9mphqVT0byeQMOk0c7RHpxrCSA0V5V6/CreFV2LteK50qcDQzDSM18vWP/\np09FoN8O7QrtOeZJzH/lmwIDAQABo2YwZDAOBgNVHQ8BAf8EBAMCAQYwEgYDVR0T\nAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU2i83QHuEl/d0keXF+69HNJph7cMwHwYD\nVR0jBBgwFoAUTgLurD72FchM7Sz1BcGPnIQISYMwDQYJKoZIhvcNAQELBQADggEB\nACqnH2VjApoDqoSQOky52QBwsGaj+xWYHW5Gm7EvCqvQuhWMkeBuD6YJmMvNyA9G\nI2lh6/o+sUk/RIsbYbxPRdhNPTOgDR9zsNRw6qxaHztq/CEC+mxDCLa3O1hHBaDV\nBmB3nCZb93BvO0EQSEk7aytKq/f+sjyxqOcs385gintdHGU9uM7gTZHnU9vByJsm\n/TL07Miq67X0NlhIoo3jAk+xHaeKJdxdKATQp0448P5cY20q4b8aMk1twcNaMvCP\ndG4M5doaoUA8OQ/0ukLLae/LBxLeTw04q1/a2SyFaVUX2Twbb1S3xVWwLA8vsyGr\nigXx7B5GgP+IHb6DTjPJAi0=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBTjANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNjA4MTExOTU4NDVaFw0y\nMDAzMDUxOTU4NDVaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyB1cy1lYXN0LTIgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCp\nWnnUX7wM0zzstccX+4iXKJa9GR0a2PpvB1paEX4QRCgfhEdQWDaSqyrWNgdVCKkt\n1aQkWu5j6VAC2XIG7kKoonm1ZdBVyBLqW5lXNywlaiU9yhJkwo8BR+/OqgE+PLt/\nEO1mlN0PQudja/XkExCXTO29TG2j7F/O7hox6vTyHNHc0H88zS21uPuBE+jivViS\nyzj/BkyoQ85hnkues3f9R6gCGdc+J51JbZnmgzUkvXjAEuKhAm9JksVOxcOKUYe5\nERhn0U9zjzpfbAITIkul97VVa5IxskFFTHIPJbvRKHJkiF6wTJww/tc9wm+fSCJ1\n+DbQTGZgkQ3bJrqRN29/AgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBSAHQzUYYZbepwKEMvGdHp8wzHnfDAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQsFAAOCAQEA\nMbaEzSYZ+aZeTBxf8yi0ta8K4RdwEJsEmP6IhFFQHYUtva2Cynl4Q9tZg3RMsybT\n9mlnSQQlbN/wqIIXbkrcgFcHoXG9Odm/bDtUwwwDaiEhXVfeQom3G77QHOWMTCGK\nqadwuh5msrb17JdXZoXr4PYHDKP7j0ONfAyFNER2+uecblHfRSpVq5UeF3L6ZJb8\nfSw/GtAV6an+/0r+Qm+PiI2H5XuZ4GmRJYnGMhqWhBYrY7p3jtVnKcsh39wgfUnW\nAvZEZG/yhFyAZW0Essa39LiL5VSq14Y1DOj0wgnhSY/9WHxaAo1HB1T9OeZknYbD\nfl/EGSZ0TEvZkENrXcPlVA==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/zCCAuegAwIBAgIBTzANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNjA5MTUwMDEwMTFaFw0y\nMDAzMDUwMDEwMTFaMIGSMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEjMCEGA1UEAwwaQW1hem9uIFJE\nUyBjYS1jZW50cmFsLTEgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB\nAQCZYI/iQ6DrS3ny3t1EwX1wAD+3LMgh7Fd01EW5LIuaK2kYIIQpsVKhxLCit/V5\nAGc/1qiJS1Qz9ODLTh0Na6bZW6EakRzuHJLe32KJtoFYPC7Z09UqzXrpA/XL+1hM\nP0ZmCWsU7Nn/EmvfBp9zX3dZp6P6ATrvDuYaVFr+SA7aT3FXpBroqBS1fyzUPs+W\nc6zTR6+yc4zkHX0XQxC5RH6xjgpeRkoOajA/sNo7AQF7KlWmKHbdVF44cvvAhRKZ\nXaoVs/C4GjkaAEPTCbopYdhzg+KLx9eB2BQnYLRrIOQZtRfbQI2Nbj7p3VsRuOW1\ntlcks2w1Gb0YC6w6SuIMFkl1AgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNV\nHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBToYWxE1lawl6Ks6NsvpbHQ3GKEtzAf\nBgNVHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQsFAAOC\nAQEAG/8tQ0ooi3hoQpa5EJz0/E5VYBsAz3YxA2HoIonn0jJyG16bzB4yZt4vNQMA\nKsNlQ1uwDWYL1nz63axieUUFIxqxl1KmwfhsmLgZ0Hd2mnTPIl2Hw3uj5+wdgGBg\nagnAZ0bajsBYgD2VGQbqjdk2Qn7Fjy3LEWIvGZx4KyZ99OJ2QxB7JOPdauURAtWA\nDKYkP4LLJxtj07DSzG8kuRWb9B47uqUD+eKDIyjfjbnzGtd9HqqzYFau7EX3HVD9\n9Qhnjl7bTZ6YfAEZ3nH2t3Vc0z76XfGh47rd0pNRhMV+xpok75asKf/lNh5mcUrr\nVKwflyMkQpSbDCmcdJ90N2xEXQ==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBUDANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNjEwMTAxNzQ0NDJaFw0y\nMDAzMDUxNzQ0NDJaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyBldS13ZXN0LTIgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDO\ncttLJfubB4XMMIGWNfJISkIdCMGJyOzLiMJaiWB5GYoXKhEl7YGotpy0qklwW3BQ\na0fmVdcCLX+dIuVQ9iFK+ZcK7zwm7HtdDTCHOCKeOh2IcnU4c/VIokFi6Gn8udM6\nN/Zi5M5OGpVwLVALQU7Yctsn3c95el6MdVx6mJiIPVu7tCVZn88Z2koBQ2gq9P4O\nSb249SHFqOb03lYDsaqy1NDsznEOhaRBw7DPJFpvmw1lA3/Y6qrExRI06H2VYR2i\n7qxwDV50N58fs10n7Ye1IOxTVJsgEA7X6EkRRXqYaM39Z76R894548WHfwXWjUsi\nMEX0RS0/t1GmnUQjvevDAgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBQBxmcuRSxERYCtNnSr5xNfySokHjAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQsFAAOCAQEA\nUyCUQjsF3nUAABjfEZmpksTuUo07aT3KGYt+EMMFdejnBQ0+2lJJFGtT+CDAk1SD\nRSgfEBon5vvKEtlnTf9a3pv8WXOAkhfxnryr9FH6NiB8obISHNQNPHn0ljT2/T+I\nY6ytfRvKHa0cu3V0NXbJm2B4KEOt4QCDiFxUIX9z6eB4Kditwu05OgQh6KcogOiP\nJesWxBMXXGoDC1rIYTFO7szwDyOHlCcVXJDNsTJhc32oDWYdeIbW7o/5I+aQsrXZ\nC96HykZcgWzz6sElrQxUaT3IoMw/5nmw4uWKKnZnxgI9bY4fpQwMeBZ96iHfFxvH\nmqfEEuC7uUoPofXdBp2ObQ==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgZMxCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSQwIgYDVQQDDBtBbWF6b24gUkRTIEdvdkNsb3VkIFJvb3QgQ0EwHhcNMTcwNTE5\nMjIzMTE5WhcNMjIwNTE4MTIwMDAwWjCBkzELMAkGA1UEBhMCVVMxEzARBgNVBAgM\nCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoMGUFtYXpvbiBX\nZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxJDAiBgNVBAMM\nG0FtYXpvbiBSRFMgdXMtZ292LXdlc3QtMSBDQTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAM8YZLKAzzOdNnoi7Klih26Zkj+OCpDfwx4ZYB6f8L8UoQi5\n8z9ZtIwMjiJ/kO08P1yl4gfc7YZcNFvhGruQZNat3YNpxwUpQcr4mszjuffbL4uz\n+/8FBxALdqCVOJ5Q0EVSfz3d9Bd1pUPL7ARtSpy7bn/tUPyQeI+lODYO906C0TQ3\nb9bjOsgAdBKkHfjLdsknsOZYYIzYWOJyFJJa0B11XjDUNBy/3IuC0KvDl6At0V5b\n8M6cWcKhte2hgjwTYepV+/GTadeube1z5z6mWsN5arOAQUtYDLH6Aztq9mCJzLHm\nRccBugnGl3fRLJ2VjioN8PoGoN9l9hFBy5fnFgsCAwEAAaNmMGQwDgYDVR0PAQH/\nBAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFEG7+br8KkvwPd5g\n71Rvh2stclJbMB8GA1UdIwQYMBaAFEkQz6S4NS5lOYKcDjBSuCcVpdzjMA0GCSqG\nSIb3DQEBCwUAA4IBAQBMA327u5ABmhX+aPxljoIbxnydmAFWxW6wNp5+rZrvPig8\nzDRqGQWWr7wWOIjfcWugSElYtf/m9KZHG/Z6+NG7nAoUrdcd1h/IQhb+lFQ2b5g9\nsVzQv/H2JNkfZA8fL/Ko/Tm/f9tcqe0zrGCtT+5u0Nvz35Wl8CEUKLloS5xEb3k5\n7D9IhG3fsE3vHWlWrGCk1cKry3j12wdPG5cUsug0vt34u6rdhP+FsM0tHI15Kjch\nRuUCvyQecy2ZFNAa3jmd5ycNdL63RWe8oayRBpQBxPPCbHfILxGZEdJbCH9aJ2D/\nl8oHIDnvOLdv7/cBjyYuvmprgPtu3QEkbre5Hln/\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIID/DCCAuSgAwIBAgIBUTANBgkqhkiG9w0BAQsFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNzA4MjUyMTM5MjZaFw0y\nMDAzMDUyMTM5MjZaMIGPMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJE\nUyBldS13ZXN0LTMgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC+\nxmlEC/3a4cJH+UPwXCE02lC7Zq5NHd0dn6peMeLN8agb6jW4VfSY0NydjRj2DJZ8\nK7wV6sub5NUGT1NuFmvSmdbNR2T59KX0p2dVvxmXHHtIpQ9Y8Aq3ZfhmC5q5Bqgw\ntMA1xayDi7HmoPX3R8kk9ktAZQf6lDeksCvok8idjTu9tiSpDiMwds5BjMsWfyjZ\nd13PTGGNHYVdP692BSyXzSP1Vj84nJKnciW8tAqwIiadreJt5oXyrCXi8ekUMs80\ncUTuGm3aA3Q7PB5ljJMPqz0eVddaiIvmTJ9O3Ez3Du/HpImyMzXjkFaf+oNXf/Hx\n/EW5jCRR6vEiXJcDRDS7AgMBAAGjZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMB\nAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBRZ9mRtS5fHk3ZKhG20Oack4cAqMTAfBgNV\nHSMEGDAWgBROAu6sPvYVyEztLPUFwY+chAhJgzANBgkqhkiG9w0BAQsFAAOCAQEA\nF/u/9L6ExQwD73F/bhCw7PWcwwqsK1mypIdrjdIsu0JSgwWwGCXmrIspA3n3Dqxq\nsMhAJD88s9Em7337t+naar2VyLO63MGwjj+vA4mtvQRKq8ScIpiEc7xN6g8HUMsd\ngPG9lBGfNjuAZsrGJflrko4HyuSM7zHExMjXLH+CXcv/m3lWOZwnIvlVMa4x0Tz0\nA4fklaawryngzeEjuW6zOiYCzjZtPlP8Fw0SpzppJ8VpQfrZ751RDo4yudmPqoPK\n5EUe36L8U+oYBXnC5TlYs9bpVv9o5wJQI5qA9oQE2eFWxF1E0AyZ4V5sgGUBStaX\nBjDDWul0wSo7rt1Tq7XpnA==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEATCCAumgAwIBAgIBTjANBgkqhkiG9w0BAQUFADCBijELMAkGA1UEBhMCVVMx\nEzARBgNVBAgMCldhc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nGzAZBgNVBAMMEkFtYXpvbiBSRFMgUm9vdCBDQTAeFw0xNzEyMDEwMDU1NDJaFw0y\nMDAzMDUwMDU1NDJaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2FzaGluZ3Rv\nbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\ncywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJE\nUyBhcC1ub3J0aGVhc3QtMyBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoC\nggEBAMZtQNnm/XT19mTa10ftHLzg5UhajoI65JHv4TQNdGXdsv+CQdGYU49BJ9Eu\n3bYgiEtTzR2lQe9zGMvtuJobLhOWuavzp7IixoIQcHkFHN6wJ1CvqrxgvJfBq6Hy\nEuCDCiU+PPDLUNA6XM6Qx3IpHd1wrJkjRB80dhmMSpxmRmx849uFafhN+P1QybsM\nTI0o48VON2+vj+mNuQTyLMMP8D4odSQHjaoG+zyJfJGZeAyqQyoOUOFEyQaHC3TT\n3IDSNCQlpxb9LerbCoKu79WFBBq3CS5cYpg8/fsnV2CniRBFFUumBt5z4dhw9RJU\nqlUXXO1ZyzpGd+c5v6FtrfXtnIUCAwEAAaNmMGQwDgYDVR0PAQH/BAQDAgEGMBIG\nA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFETv7ELNplYy/xTeIOInl6nzeiHg\nMB8GA1UdIwQYMBaAFE4C7qw+9hXITO0s9QXBj5yECEmDMA0GCSqGSIb3DQEBBQUA\nA4IBAQCpKxOQcd0tEKb3OtsOY8q/MPwTyustGk2Rt7t9G68idADp8IytB7M0SDRo\nwWZqynEq7orQVKdVOanhEWksNDzGp0+FPAf/KpVvdYCd7ru3+iI+V4ZEp2JFdjuZ\nZz0PIjS6AgsZqE5Ri1J+NmfmjGZCPhsHnGZiBaenX6K5VRwwwmLN6xtoqrrfR5zL\nQfBeeZNJG6KiM3R/DxJ5rAa6Fz+acrhJ60L7HprhB7SFtj1RCijau3+ZwiGmUOMr\nyKlMv+VgmzSw7o4Hbxy1WVrA6zQsTHHSGf+vkQn2PHvnFMUEu/ZLbTDYFNmTLK91\nK6o4nMsEvhBKgo4z7H1EqqxXhvN2\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEDjCCAvagAwIBAgIJAMM61RQn3/kdMA0GCSqGSIb3DQEBCwUAMIGTMQswCQYD\nVQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\nMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\nem9uIFJEUzEkMCIGA1UEAwwbQW1hem9uIFJEUyBHb3ZDbG91ZCBSb290IENBMB4X\nDTE3MDUxOTIyMjkxMVoXDTIyMDUxODIyMjkxMVowgZMxCzAJBgNVBAYTAlVTMRAw\nDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQKDBlB\nbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMSQw\nIgYDVQQDDBtBbWF6b24gUkRTIEdvdkNsb3VkIFJvb3QgQ0EwggEiMA0GCSqGSIb3\nDQEBAQUAA4IBDwAwggEKAoIBAQDGS9bh1FGiJPT+GRb3C5aKypJVDC1H2gbh6n3u\nj8cUiyMXfmm+ak402zdLpSYMaxiQ7oL/B3wEmumIpRDAsQrSp3B/qEeY7ipQGOfh\nq2TXjXGIUjiJ/FaoGqkymHRLG+XkNNBtb7MRItsjlMVNELXECwSiMa3nJL2/YyHW\nnTr1+11/weeZEKgVbCUrOugFkMXnfZIBSn40j6EnRlO2u/NFU5ksK5ak2+j8raZ7\nxW7VXp9S1Tgf1IsWHjGZZZguwCkkh1tHOlHC9gVA3p63WecjrIzcrR/V27atul4m\ntn56s5NwFvYPUIx1dbC8IajLUrepVm6XOwdQCfd02DmOyjWJAgMBAAGjYzBhMA4G\nA1UdDwEB/wQEAwIBBjAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRJEM+kuDUu\nZTmCnA4wUrgnFaXc4zAfBgNVHSMEGDAWgBRJEM+kuDUuZTmCnA4wUrgnFaXc4zAN\nBgkqhkiG9w0BAQsFAAOCAQEAcfA7uirXsNZyI2j4AJFVtOTKOZlQwqbyNducnmlg\n/5nug9fAkwM4AgvF5bBOD1Hw6khdsccMwIj+1S7wpL+EYb/nSc8G0qe1p/9lZ/mZ\nff5g4JOa26lLuCrZDqAk4TzYnt6sQKfa5ZXVUUn0BK3okhiXS0i+NloMyaBCL7vk\nkDwkHwEqflRKfZ9/oFTcCfoiHPA7AdBtaPVr0/Kj9L7k+ouz122huqG5KqX0Zpo8\nS0IGvcd2FZjNSNPttNAK7YuBVsZ0m2nIH1SLp//00v7yAHIgytQwwB17PBcp4NXD\npCfTa27ng9mMMC2YLqWQpW4TkqjDin2ZC+5X/mbrjzTvVg==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgZQxCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSUwIwYDVQQDDBxBbWF6b24gUkRTIGFwLWVhc3QtMSBSb290IENBMB4XDTE5MDIx\nNzAyNDcwMFoXDTIyMDYwMTEyMDAwMFowgY8xCzAJBgNVBAYTAlVTMRMwEQYDVQQI\nDApXYXNoaW5ndG9uMRAwDgYDVQQHDAdTZWF0dGxlMSIwIAYDVQQKDBlBbWF6b24g\nV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMSAwHgYDVQQD\nDBdBbWF6b24gUkRTIGFwLWVhc3QtMSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAOcJAUofyJuBuPr5ISHi/Ha5ed8h3eGdzn4MBp6rytPOg9NVGRQs\nO93fNGCIKsUT6gPuk+1f1ncMTV8Y0Fdf4aqGWme+Khm3ZOP3V1IiGnVq0U2xiOmn\nSQ4Q7LoeQC4lC6zpoCHVJyDjZ4pAknQQfsXb77Togdt/tK5ahev0D+Q3gCwAoBoO\nDHKJ6t820qPi63AeGbJrsfNjLKiXlFPDUj4BGir4dUzjEeH7/hx37na1XG/3EcxP\n399cT5k7sY/CR9kctMlUyEEUNQOmhi/ly1Lgtihm3QfjL6K9aGLFNwX35Bkh9aL2\nF058u+n8DP/dPeKUAcJKiQZUmzuen5n57x8CAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFFlqgF4FQlb9yP6c+Q3E\nO3tXv+zOMB8GA1UdIwQYMBaAFK9T6sY/PBZVbnHcNcQXf58P4OuPMA0GCSqGSIb3\nDQEBCwUAA4IBAQDeXiS3v1z4jWAo1UvVyKDeHjtrtEH1Rida1eOXauFuEQa5tuOk\nE53Os4haZCW4mOlKjigWs4LN+uLIAe1aFXGo92nGIqyJISHJ1L+bopx/JmIbHMCZ\n0lTNJfR12yBma5VQy7vzeFku/SisKwX0Lov1oHD4MVhJoHbUJYkmAjxorcIHORvh\nI3Vj5XrgDWtLDPL8/Id/roul/L+WX5ir+PGScKBfQIIN2lWdZoqdsx8YWqhm/ikL\nC6qNieSwcvWL7C03ri0DefTQMY54r5wP33QU5hJ71JoaZI3YTeT0Nf+NRL4hM++w\nQ0veeNzBQXg1f/JxfeA39IDIX1kiCf71tGlT\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICcEUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTgxNjU2\nMjBaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1ub3J0aGVhc3QtMSAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEAndtkldmHtk4TVQAyqhAvtEHSMb6pLhyKrIFved1WO3S7\n+I+bWwv9b2W/ljJxLq9kdT43bhvzonNtI4a1LAohS6bqyirmk8sFfsWT3akb+4Sx\n1sjc8Ovc9eqIWJCrUiSvv7+cS7ZTA9AgM1PxvHcsqrcUXiK3Jd/Dax9jdZE1e15s\nBEhb2OEPE+tClFZ+soj8h8Pl2Clo5OAppEzYI4LmFKtp1X/BOf62k4jviXuCSst3\nUnRJzE/CXtjmN6oZySVWSe0rQYuyqRl6//9nK40cfGKyxVnimB8XrrcxUN743Vud\nQQVU0Esm8OVTX013mXWQXJHP2c0aKkog8LOga0vobQIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQULmoOS1mFSjj+\nsnUPx4DgS3SkLFYwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBAAkVL2P1M2/G9GM3DANVAqYOwmX0Xk58YBHQu6iiQg4j\nb4Ky/qsZIsgT7YBsZA4AOcPKQFgGTWhe9pvhmXqoN3RYltN8Vn7TbUm/ZVDoMsrM\ngwv0+TKxW1/u7s8cXYfHPiTzVSJuOogHx99kBW6b2f99GbP7O1Sv3sLq4j6lVvBX\nFiacf5LAWC925nvlTzLlBgIc3O9xDtFeAGtZcEtxZJ4fnGXiqEnN4539+nqzIyYq\nnvlgCzyvcfRAxwltrJHuuRu6Maw5AGcd2Y0saMhqOVq9KYKFKuD/927BTrbd2JVf\n2sGWyuPZPCk3gq+5pCjbD0c6DkhcMGI6WwxvM5V/zSM=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICOFAwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTAxNzQ2\nMjFaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1ub3J0aGVhc3QtMiAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEAzU72e6XbaJbi4HjJoRNjKxzUEuChKQIt7k3CWzNnmjc5\n8I1MjCpa2W1iw1BYVysXSNSsLOtUsfvBZxi/1uyMn5ZCaf9aeoA9UsSkFSZBjOCN\nDpKPCmfV1zcEOvJz26+1m8WDg+8Oa60QV0ou2AU1tYcw98fOQjcAES0JXXB80P2s\n3UfkNcnDz+l4k7j4SllhFPhH6BQ4lD2NiFAP4HwoG6FeJUn45EPjzrydxjq6v5Fc\ncQ8rGuHADVXotDbEhaYhNjIrsPL+puhjWfhJjheEw8c4whRZNp6gJ/b6WEes/ZhZ\nh32DwsDsZw0BfRDUMgUn8TdecNexHUw8vQWeC181hwIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUwW9bWgkWkr0U\nlrOsq2kvIdrECDgwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBAEugF0Gj7HVhX0ehPZoGRYRt3PBuI2YjfrrJRTZ9X5wc\n9T8oHmw07mHmNy1qqWvooNJg09bDGfB0k5goC2emDiIiGfc/kvMLI7u+eQOoMKj6\nmkfCncyRN3ty08Po45vTLBFZGUvtQmjM6yKewc4sXiASSBmQUpsMbiHRCL72M5qV\nobcJOjGcIdDTmV1BHdWT+XcjynsGjUqOvQWWhhLPrn4jWe6Xuxll75qlrpn3IrIx\nCRBv/5r7qbcQJPOgwQsyK4kv9Ly8g7YT1/vYBlR3cRsYQjccw5ceWUj2DrMVWhJ4\nprf+E3Aa4vYmLLOUUvKnDQ1k3RGNu56V0tonsQbfsaM=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICOYIwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTcyMDA1\nMjlaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1ub3J0aGVhc3QtMyAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEA4dMak8W+XW8y/2F6nRiytFiA4XLwePadqWebGtlIgyCS\nkbug8Jv5w7nlMkuxOxoUeD4WhI6A9EkAn3r0REM/2f0aYnd2KPxeqS2MrtdxxHw1\nxoOxk2x0piNSlOz6yog1idsKR5Wurf94fvM9FdTrMYPPrDabbGqiBMsZZmoHLvA3\nZ+57HEV2tU0Ei3vWeGIqnNjIekS+E06KhASxrkNU5vi611UsnYZlSi0VtJsH4UGV\nLhnHl53aZL0YFO5mn/fzuNG/51qgk/6EFMMhaWInXX49Dia9FnnuWXwVwi6uX1Wn\n7kjoHi5VtmC8ZlGEHroxX2DxEr6bhJTEpcLMnoQMqwIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUsUI5Cb3SWB8+\ngv1YLN/ABPMdxSAwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBAJAF3E9PM1uzVL8YNdzb6fwJrxxqI2shvaMVmC1mXS+w\nG0zh4v2hBZOf91l1EO0rwFD7+fxoI6hzQfMxIczh875T6vUXePKVOCOKI5wCrDad\nzQbVqbFbdhsBjF4aUilOdtw2qjjs9JwPuB0VXN4/jY7m21oKEOcnpe36+7OiSPjN\nxngYewCXKrSRqoj3mw+0w/+exYj3Wsush7uFssX18av78G+ehKPIVDXptOCP/N7W\n8iKVNeQ2QGTnu2fzWsGUSvMGyM7yqT+h1ILaT//yQS8er511aHMLc142bD4D9VSy\nDgactwPDTShK/PXqhvNey9v/sKXm4XatZvwcc8KYlW4=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIECDCCAvCgAwIBAgICVIYwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MDQxNzEz\nMDRaFw0yNDA4MjIxNzA4NTBaMIGVMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEmMCQGA1UEAwwdQW1h\nem9uIFJEUyBhcC1zb3V0aC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQDUYOz1hGL42yUCrcsMSOoU8AeD/3KgZ4q7gP+vAz1WnY9K/kim\neWN/2Qqzlo3+mxSFQFyD4MyV3+CnCPnBl9Sh1G/F6kThNiJ7dEWSWBQGAB6HMDbC\nBaAsmUc1UIz8sLTL3fO+S9wYhA63Wun0Fbm/Rn2yk/4WnJAaMZcEtYf6e0KNa0LM\np/kN/70/8cD3iz3dDR8zOZFpHoCtf0ek80QqTich0A9n3JLxR6g6tpwoYviVg89e\nqCjQ4axxOkWWeusLeTJCcY6CkVyFvDAKvcUl1ytM5AiaUkXblE7zDFXRM4qMMRdt\nlPm8d3pFxh0fRYk8bIKnpmtOpz3RIctDrZZxAgMBAAGjZjBkMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBT99wKJftD3jb4sHoHG\ni3uGlH6W6TAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\n9w0BAQsFAAOCAQEAZ17hhr3dII3hUfuHQ1hPWGrpJOX/G9dLzkprEIcCidkmRYl+\nhu1Pe3caRMh/17+qsoEErmnVq5jNY9X1GZL04IZH8YbHc7iRHw3HcWAdhN8633+K\njYEB2LbJ3vluCGnCejq9djDb6alOugdLMJzxOkHDhMZ6/gYbECOot+ph1tQuZXzD\ntZ7prRsrcuPBChHlPjmGy8M9z8u+kF196iNSUGC4lM8vLkHM7ycc1/ZOwRq9aaTe\niOghbQQyAEe03MWCyDGtSmDfr0qEk+CHN+6hPiaL8qKt4s+V9P7DeK4iW08ny8Ox\nAVS7u0OK/5+jKMAMrKwpYrBydOjTUTHScocyNw==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICY4kwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTMyMDEx\nNDJaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1zb3V0aGVhc3QtMSAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEAr5u9OuLL/OF/fBNUX2kINJLzFl4DnmrhnLuSeSnBPgbb\nqddjf5EFFJBfv7IYiIWEFPDbDG5hoBwgMup5bZDbas+ZTJTotnnxVJTQ6wlhTmns\neHECcg2pqGIKGrxZfbQhlj08/4nNAPvyYCTS0bEcmQ1emuDPyvJBYDDLDU6AbCB5\n6Z7YKFQPTiCBblvvNzchjLWF9IpkqiTsPHiEt21sAdABxj9ityStV3ja/W9BfgxH\nwzABSTAQT6FbDwmQMo7dcFOPRX+hewQSic2Rn1XYjmNYzgEHisdUsH7eeXREAcTw\n61TRvaLH8AiOWBnTEJXPAe6wYfrcSd1pD0MXpoB62wIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUytwMiomQOgX5\nIchd+2lDWRUhkikwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBACf6lRDpfCD7BFRqiWM45hqIzffIaysmVfr+Jr+fBTjP\nuYe/ba1omSrNGG23bOcT9LJ8hkQJ9d+FxUwYyICQNWOy6ejicm4z0C3VhphbTPqj\nyjpt9nG56IAcV8BcRJh4o/2IfLNzC/dVuYJV8wj7XzwlvjysenwdrJCoLadkTr1h\neIdG6Le07sB9IxrGJL9e04afk37h7c8ESGSE4E+oS4JQEi3ATq8ne1B9DQ9SasXi\nIRmhNAaISDzOPdyLXi9N9V9Lwe/DHcja7hgLGYx3UqfjhLhOKwp8HtoZORixAmOI\nHfILgNmwyugAbuZoCazSKKBhQ0wgO0WZ66ZKTMG8Oho=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEDDCCAvSgAwIBAgICEkYwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTYxOTUz\nNDdaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\nem9uIFJEUyBhcC1zb3V0aGVhc3QtMiAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\nAAOCAQ8AMIIBCgKCAQEAufodI2Flker8q7PXZG0P0vmFSlhQDw907A6eJuF/WeMo\nGHnll3b4S6nC3oRS3nGeRMHbyU2KKXDwXNb3Mheu+ox+n5eb/BJ17eoj9HbQR1cd\ngEkIciiAltf8gpMMQH4anP7TD+HNFlZnP7ii3geEJB2GGXSxgSWvUzH4etL67Zmn\nTpGDWQMB0T8lK2ziLCMF4XAC/8xDELN/buHCNuhDpxpPebhct0T+f6Arzsiswt2j\n7OeNeLLZwIZvVwAKF7zUFjC6m7/VmTQC8nidVY559D6l0UhhU0Co/txgq3HVsMOH\nPbxmQUwJEKAzQXoIi+4uZzHFZrvov/nDTNJUhC6DqwIDAQABo2YwZDAOBgNVHQ8B\nAf8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUwaZpaCme+EiV\nM5gcjeHZSTgOn4owHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\nKoZIhvcNAQELBQADggEBAAR6a2meCZuXO2TF9bGqKGtZmaah4pH2ETcEVUjkvXVz\nsl+ZKbYjrun+VkcMGGKLUjS812e7eDF726ptoku9/PZZIxlJB0isC/0OyixI8N4M\nNsEyvp52XN9QundTjkl362bomPnHAApeU0mRbMDRR2JdT70u6yAzGLGsUwMkoNnw\n1VR4XKhXHYGWo7KMvFrZ1KcjWhubxLHxZWXRulPVtGmyWg/MvE6KF+2XMLhojhUL\n+9jB3Fpn53s6KMx5tVq1x8PukHmowcZuAF8k+W4gk8Y68wIwynrdZrKRyRv6CVtR\nFZ8DeJgoNZT3y/GT254VqMxxfuy2Ccb/RInd16tEvVk=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgICEzUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTAyMDUy\nMjVaFw0yNDA4MjIxNzA4NTBaMIGXMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEoMCYGA1UEAwwfQW1h\nem9uIFJEUyBjYS1jZW50cmFsLTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAOxHqdcPSA2uBjsCP4DLSlqSoPuQ/X1kkJLusVRKiQE2zayB\nviuCBt4VB9Qsh2rW3iYGM+usDjltGnI1iUWA5KHcvHszSMkWAOYWLiMNKTlg6LCp\nXnE89tvj5dIH6U8WlDvXLdjB/h30gW9JEX7S8supsBSci2GxEzb5mRdKaDuuF/0O\nqvz4YE04pua3iZ9QwmMFuTAOYzD1M72aOpj+7Ac+YLMM61qOtU+AU6MndnQkKoQi\nqmUN2A9IFaqHFzRlSdXwKCKUA4otzmz+/N3vFwjb5F4DSsbsrMfjeHMo6o/nb6Nh\nYDb0VJxxPee6TxSuN7CQJ2FxMlFUezcoXqwqXD0CAwEAAaNmMGQwDgYDVR0PAQH/\nBAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFDGGpon9WfIpsggE\nCxHq8hZ7E2ESMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqG\nSIb3DQEBCwUAA4IBAQAvpeQYEGZvoTVLgV9rd2+StPYykMsmFjWQcyn3dBTZRXC2\nlKq7QhQczMAOhEaaN29ZprjQzsA2X/UauKzLR2Uyqc2qOeO9/YOl0H3qauo8C/W9\nr8xqPbOCDLEXlOQ19fidXyyEPHEq5WFp8j+fTh+s8WOx2M7IuC0ANEetIZURYhSp\nxl9XOPRCJxOhj7JdelhpweX0BJDNHeUFi0ClnFOws8oKQ7sQEv66d5ddxqqZ3NVv\nRbCvCtEutQMOUMIuaygDlMn1anSM8N7Wndx8G6+Uy67AnhjGx7jw/0YPPxopEj6x\nJXP8j0sJbcT9K/9/fPVLNT25RvQ/93T2+IQL4Ca2\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIECjCCAvKgAwIBAgICV2YwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTExOTM2\nMjBaFw0yNDA4MjIxNzA4NTBaMIGXMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEoMCYGA1UEAwwfQW1h\nem9uIFJEUyBldS1jZW50cmFsLTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAMEx54X2pHVv86APA0RWqxxRNmdkhAyp2R1cFWumKQRofoFv\nn+SPXdkpIINpMuEIGJANozdiEz7SPsrAf8WHyD93j/ZxrdQftRcIGH41xasetKGl\nI67uans8d+pgJgBKGb/Z+B5m+UsIuEVekpvgpwKtmmaLFC/NCGuSsJoFsRqoa6Gh\nm34W6yJoY87UatddCqLY4IIXaBFsgK9Q/wYzYLbnWM6ZZvhJ52VMtdhcdzeTHNW0\n5LGuXJOF7Ahb4JkEhoo6TS2c0NxB4l4MBfBPgti+O7WjR3FfZHpt18A6Zkq6A2u6\nD/oTSL6c9/3sAaFTFgMyL3wHb2YlW0BPiljZIqECAwEAAaNmMGQwDgYDVR0PAQH/\nBAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFOcAToAc6skWffJa\nTnreaswAfrbcMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqG\nSIb3DQEBCwUAA4IBAQA1d0Whc1QtspK496mFWfFEQNegLh0a9GWYlJm+Htcj5Nxt\nDAIGXb+8xrtOZFHmYP7VLCT5Zd2C+XytqseK/+s07iAr0/EPF+O2qcyQWMN5KhgE\ncXw2SwuP9FPV3i+YAm11PBVeenrmzuk9NrdHQ7TxU4v7VGhcsd2C++0EisrmquWH\nmgIfmVDGxphwoES52cY6t3fbnXmTkvENvR+h3rj+fUiSz0aSo+XZUGHPgvuEKM/W\nCBD9Smc9CBoBgvy7BgHRgRUmwtABZHFUIEjHI5rIr7ZvYn+6A0O6sogRfvVYtWFc\nqpyrW1YX8mD0VlJ8fGKM3G+aCOsiiPKDV/Uafrm+\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIECDCCAvCgAwIBAgICGAcwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTIxODE5\nNDRaFw0yNDA4MjIxNzA4NTBaMIGVMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEmMCQGA1UEAwwdQW1h\nem9uIFJEUyBldS1ub3J0aC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQCiIYnhe4UNBbdBb/nQxl5giM0XoVHWNrYV5nB0YukA98+TPn9v\nAoj1RGYmtryjhrf01Kuv8SWO+Eom95L3zquoTFcE2gmxCfk7bp6qJJ3eHOJB+QUO\nXsNRh76fwDzEF1yTeZWH49oeL2xO13EAx4PbZuZpZBttBM5zAxgZkqu4uWQczFEs\nJXfla7z2fvWmGcTagX10O5C18XaFroV0ubvSyIi75ue9ykg/nlFAeB7O0Wxae88e\nuhiBEFAuLYdqWnsg3459NfV8Yi1GnaitTym6VI3tHKIFiUvkSiy0DAlAGV2iiyJE\nq+DsVEO4/hSINJEtII4TMtysOsYPpINqeEzRAgMBAAGjZjBkMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBRR0UpnbQyjnHChgmOc\nhnlc0PogzTAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\n9w0BAQsFAAOCAQEAKJD4xVzSf4zSGTBJrmamo86jl1NHQxXUApAZuBZEc8tqC6TI\nT5CeoSr9CMuVC8grYyBjXblC4OsM5NMvmsrXl/u5C9dEwtBFjo8mm53rOOIm1fxl\nI1oYB/9mtO9ANWjkykuLzWeBlqDT/i7ckaKwalhLODsRDO73vRhYNjsIUGloNsKe\npxw3dzHwAZx4upSdEVG4RGCZ1D0LJ4Gw40OfD69hfkDfRVVxKGrbEzqxXRvovmDc\ntKLdYZO/6REoca36v4BlgIs1CbUXJGLSXUwtg7YXGLSVBJ/U0+22iGJmBSNcoyUN\ncjPFD9JQEhDDIYYKSGzIYpvslvGc4T5ISXFiuQ==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICYpgwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTExNzMx\nNDhaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyBldS13ZXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAMk3YdSZ64iAYp6MyyKtYJtNzv7zFSnnNf6vv0FB4VnfITTMmOyZ\nLXqKAT2ahZ00hXi34ewqJElgU6eUZT/QlzdIu359TEZyLVPwURflL6SWgdG01Q5X\nO++7fSGcBRyIeuQWs9FJNIIqK8daF6qw0Rl5TXfu7P9dBc3zkgDXZm2DHmxGDD69\n7liQUiXzoE1q2Z9cA8+jirDioJxN9av8hQt12pskLQumhlArsMIhjhHRgF03HOh5\ntvi+RCfihVOxELyIRTRpTNiIwAqfZxxTWFTgfn+gijTmd0/1DseAe82aYic8JbuS\nEMbrDduAWsqrnJ4GPzxHKLXX0JasCUcWyMECAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFPLtsq1NrwJXO13C9eHt\nsLY11AGwMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQAnWBKj5xV1A1mYd0kIgDdkjCwQkiKF5bjIbGkT3YEFFbXoJlSP\n0lZZ/hDaOHI8wbLT44SzOvPEEmWF9EE7SJzkvSdQrUAWR9FwDLaU427ALI3ngNHy\nlGJ2hse1fvSRNbmg8Sc9GBv8oqNIBPVuw+AJzHTacZ1OkyLZrz1c1QvwvwN2a+Jd\nvH0V0YIhv66llKcYDMUQJAQi4+8nbRxXWv6Gq3pvrFoorzsnkr42V3JpbhnYiK+9\nnRKd4uWl62KRZjGkfMbmsqZpj2fdSWMY1UGyN1k+kDmCSWYdrTRDP0xjtIocwg+A\nJ116n4hV/5mbA0BaPiS2krtv17YAeHABZcvz\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICZIEwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTIyMTMy\nMzJaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyBldS13ZXN0LTIgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBALGiwqjiF7xIjT0Sx7zB3764K2T2a1DHnAxEOr+/EIftWKxWzT3u\nPFwS2eEZcnKqSdRQ+vRzonLBeNLO4z8aLjQnNbkizZMBuXGm4BqRm1Kgq3nlLDQn\n7YqdijOq54SpShvR/8zsO4sgMDMmHIYAJJOJqBdaus2smRt0NobIKc0liy7759KB\n6kmQ47Gg+kfIwxrQA5zlvPLeQImxSoPi9LdbRoKvu7Iot7SOa+jGhVBh3VdqndJX\n7tm/saj4NE375csmMETFLAOXjat7zViMRwVorX4V6AzEg1vkzxXpA9N7qywWIT5Y\nfYaq5M8i6vvLg0CzrH9fHORtnkdjdu1y+0MCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFFOhOx1yt3Z7mvGB9jBv\n2ymdZwiOMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQBehqY36UGDvPVU9+vtaYGr38dBbp+LzkjZzHwKT1XJSSUc2wqM\nhnCIQKilonrTIvP1vmkQi8qHPvDRtBZKqvz/AErW/ZwQdZzqYNFd+BmOXaeZWV0Q\noHtDzXmcwtP8aUQpxN0e1xkWb1E80qoy+0uuRqb/50b/R4Q5qqSfJhkn6z8nwB10\n7RjLtJPrK8igxdpr3tGUzfAOyiPrIDncY7UJaL84GFp7WWAkH0WG3H8Y8DRcRXOU\nmqDxDLUP3rNuow3jnGxiUY+gGX5OqaZg4f4P6QzOSmeQYs6nLpH0PiN00+oS1BbD\nbpWdZEttILPI+vAYkU4QuBKKDjJL6HbSd+cn\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICJDQwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTgxNzAz\nMTVaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyBldS13ZXN0LTMgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAL9bL7KE0n02DLVtlZ2PL+g/BuHpMYFq2JnE2RgompGurDIZdjmh\n1pxfL3nT+QIVMubuAOy8InRfkRxfpxyjKYdfLJTPJG+jDVL+wDcPpACFVqoV7Prg\npVYEV0lc5aoYw4bSeYFhdzgim6F8iyjoPnObjll9mo4XsHzSoqJLCd0QC+VG9Fw2\nq+GDRZrLRmVM2oNGDRbGpGIFg77aRxRapFZa8SnUgs2AqzuzKiprVH5i0S0M6dWr\ni+kk5epmTtkiDHceX+dP/0R1NcnkCPoQ9TglyXyPdUdTPPRfKCq12dftqll+u4mV\nARdN6WFjovxax8EAP2OAUTi1afY+1JFMj+sCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFLfhrbrO5exkCVgxW0x3\nY2mAi8lNMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQAigQ5VBNGyw+OZFXwxeJEAUYaXVoP/qrhTOJ6mCE2DXUVEoJeV\nSxScy/TlFA9tJXqmit8JH8VQ/xDL4ubBfeMFAIAo4WzNWDVoeVMqphVEcDWBHsI1\nAETWzfsapRS9yQekOMmxg63d/nV8xewIl8aNVTHdHYXMqhhik47VrmaVEok1UQb3\nO971RadLXIEbVd9tjY5bMEHm89JsZDnDEw1hQXBb67Elu64OOxoKaHBgUH8AZn/2\nzFsL1ynNUjOhCSAA15pgd1vjwc0YsBbAEBPcHBWYBEyME6NLNarjOzBl4FMtATSF\nwWCKRGkvqN8oxYhwR2jf2rR5Mu4DWkK5Q8Ep\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEEjCCAvqgAwIBAgIJANew34ehz5l8MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYD\nVQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\nMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\nem9uIFJEUzEmMCQGA1UEAwwdQW1hem9uIFJEUyBtZS1zb3V0aC0xIFJvb3QgQ0Ew\nHhcNMTkwNTEwMjE0ODI3WhcNMjQwNTA4MjE0ODI3WjCBlTELMAkGA1UEBhMCVVMx\nEDAOBgNVBAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoM\nGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\nJjAkBgNVBAMMHUFtYXpvbiBSRFMgbWUtc291dGgtMSBSb290IENBMIIBIjANBgkq\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp7BYV88MukcY+rq0r79+C8UzkT30fEfT\naPXbx1d6M7uheGN4FMaoYmL+JE1NZPaMRIPTHhFtLSdPccInvenRDIatcXX+jgOk\nUA6lnHQ98pwN0pfDUyz/Vph4jBR9LcVkBbe0zdoKKp+HGbMPRU0N2yNrog9gM5O8\ngkU/3O2csJ/OFQNnj4c2NQloGMUpEmedwJMOyQQfcUyt9CvZDfIPNnheUS29jGSw\nERpJe/AENu8Pxyc72jaXQuD+FEi2Ck6lBkSlWYQFhTottAeGvVFNCzKszCntrtqd\nrdYUwurYsLTXDHv9nW2hfDUQa0mhXf9gNDOBIVAZugR9NqNRNyYLHQIDAQABo2Mw\nYTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU54cf\nDjgwBx4ycBH8+/r8WXdaiqYwHwYDVR0jBBgwFoAU54cfDjgwBx4ycBH8+/r8WXda\niqYwDQYJKoZIhvcNAQELBQADggEBAIIMTSPx/dR7jlcxggr+O6OyY49Rlap2laKA\neC/XI4ySP3vQkIFlP822U9Kh8a9s46eR0uiwV4AGLabcu0iKYfXjPkIprVCqeXV7\nny9oDtrbflyj7NcGdZLvuzSwgl9SYTJp7PVCZtZutsPYlbJrBPHwFABvAkMvRtDB\nhitIg4AESDGPoCl94sYHpfDfjpUDMSrAMDUyO6DyBdZH5ryRMAs3lGtsmkkNUrso\naTW6R05681Z0mvkRdb+cdXtKOSuDZPoe2wJJIaz3IlNQNSrB5TImMYgmt6iAsFhv\n3vfTSTKrZDNTJn4ybG6pq1zWExoXsktZPylJly6R3RBwV6nwqBM=\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICQ2QwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MDUxODQ2\nMjlaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyBzYS1lYXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAMMvR+ReRnOzqJzoaPipNTt1Z2VA968jlN1+SYKUrYM3No+Vpz0H\nM6Tn0oYB66ByVsXiGc28ulsqX1HbHsxqDPwvQTKvO7SrmDokoAkjJgLocOLUAeld\n5AwvUjxGRP6yY90NV7X786MpnYb2Il9DIIaV9HjCmPt+rjy2CZjS0UjPjCKNfB8J\nbFjgW6GGscjeyGb/zFwcom5p4j0rLydbNaOr9wOyQrtt3ZQWLYGY9Zees/b8pmcc\nJt+7jstZ2UMV32OO/kIsJ4rMUn2r/uxccPwAc1IDeRSSxOrnFKhW3Cu69iB3bHp7\nJbawY12g7zshE4I14sHjv3QoXASoXjx4xgMCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFI1Fc/Ql2jx+oJPgBVYq\nccgP0pQ8MB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQB4VVVabVp70myuYuZ3vltQIWqSUMhkaTzehMgGcHjMf9iLoZ/I\n93KiFUSGnek5cRePyS9wcpp0fcBT3FvkjpUdCjVtdttJgZFhBxgTd8y26ImdDDMR\n4+BUuhI5msvjL08f+Vkkpu1GQcGmyFVPFOy/UY8iefu+QyUuiBUnUuEDd49Hw0Fn\n/kIPII6Vj82a2mWV/Q8e+rgN8dIRksRjKI03DEoP8lhPlsOkhdwU6Uz9Vu6NOB2Q\nLs1kbcxAc7cFSyRVJEhh12Sz9d0q/CQSTFsVJKOjSNQBQfVnLz1GwO/IieUEAr4C\njkTntH0r1LX5b/GwN4R887LvjAEdTbg1his7\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICJVUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTkxODE2\nNTNaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyB1cy1lYXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBAM3i/k2u6cqbMdcISGRvh+m+L0yaSIoOXjtpNEoIftAipTUYoMhL\nInXGlQBVA4shkekxp1N7HXe1Y/iMaPEyb3n+16pf3vdjKl7kaSkIhjdUz3oVUEYt\ni8Z/XeJJ9H2aEGuiZh3kHixQcZczn8cg3dA9aeeyLSEnTkl/npzLf//669Ammyhs\nXcAo58yvT0D4E0D/EEHf2N7HRX7j/TlyWvw/39SW0usiCrHPKDLxByLojxLdHzso\nQIp/S04m+eWn6rmD+uUiRteN1hI5ncQiA3wo4G37mHnUEKo6TtTUh+sd/ku6a8HK\nglMBcgqudDI90s1OpuIAWmuWpY//8xEG2YECAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFPqhoWZcrVY9mU7tuemR\nRBnQIj1jMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQB6zOLZ+YINEs72heHIWlPZ8c6WY8MDU+Be5w1M+BK2kpcVhCUK\nPJO4nMXpgamEX8DIiaO7emsunwJzMSvavSPRnxXXTKIc0i/g1EbiDjnYX9d85DkC\nE1LaAUCmCZBVi9fIe0H2r9whIh4uLWZA41oMnJx/MOmo3XyMfQoWcqaSFlMqfZM4\n0rNoB/tdHLNuV4eIdaw2mlHxdWDtF4oH+HFm+2cVBUVC1jXKrFv/euRVtsTT+A6i\nh2XBHKxQ1Y4HgAn0jACP2QSPEmuoQEIa57bEKEcZsBR8SDY6ZdTd2HLRIApcCOSF\nMRM8CKLeF658I0XgF8D5EsYoKPsA+74Z+jDH\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIECDCCAvCgAwIBAgIDAIVCMA0GCSqGSIb3DQEBCwUAMIGPMQswCQYDVQQGEwJV\nUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEiMCAGA1UE\nCgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJE\nUzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkwOTEzMTcw\nNjQxWhcNMjQwODIyMTcwODUwWjCBlDELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldh\nc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoMGUFtYXpvbiBXZWIg\nU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxJTAjBgNVBAMMHEFt\nYXpvbiBSRFMgdXMtZWFzdC0yIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQDE+T2xYjUbxOp+pv+gRA3FO24+1zCWgXTDF1DHrh1lsPg5k7ht\n2KPYzNc+Vg4E+jgPiW0BQnA6jStX5EqVh8BU60zELlxMNvpg4KumniMCZ3krtMUC\nau1NF9rM7HBh+O+DYMBLK5eSIVt6lZosOb7bCi3V6wMLA8YqWSWqabkxwN4w0vXI\n8lu5uXXFRemHnlNf+yA/4YtN4uaAyd0ami9+klwdkZfkrDOaiy59haOeBGL8EB/c\ndbJJlguHH5CpCscs3RKtOOjEonXnKXldxarFdkMzi+aIIjQ8GyUOSAXHtQHb3gZ4\nnS6Ey0CMlwkB8vUObZU9fnjKJcL5QCQqOfwvAgMBAAGjZjBkMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBQUPuRHohPxx4VjykmH\n6usGrLL1ETAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\n9w0BAQsFAAOCAQEAUdR9Vb3y33Yj6X6KGtuthZ08SwjImVQPtknzpajNE5jOJAh8\nquvQnU9nlnMO85fVDU1Dz3lLHGJ/YG1pt1Cqq2QQ200JcWCvBRgdvH6MjHoDQpqZ\nHvQ3vLgOGqCLNQKFuet9BdpsHzsctKvCVaeBqbGpeCtt3Hh/26tgx0rorPLw90A2\nV8QSkZJjlcKkLa58N5CMM8Xz8KLWg3MZeT4DmlUXVCukqK2RGuP2L+aME8dOxqNv\nOnOz1zrL5mR2iJoDpk8+VE/eBDmJX40IJk6jBjWoxAO/RXq+vBozuF5YHN1ujE92\ntO8HItgTp37XT8bJBAiAnt5mxw+NLSqtxk2QdQ==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIECDCCAvCgAwIBAgIDAIkHMA0GCSqGSIb3DQEBCwUAMIGPMQswCQYDVQQGEwJV\nUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEiMCAGA1UE\nCgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJE\nUzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkwOTA2MTc0\nMDIxWhcNMjQwODIyMTcwODUwWjCBlDELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldh\nc2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoMGUFtYXpvbiBXZWIg\nU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxJTAjBgNVBAMMHEFt\nYXpvbiBSRFMgdXMtd2VzdC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\nDwAwggEKAoIBAQDD2yzbbAl77OofTghDMEf624OvU0eS9O+lsdO0QlbfUfWa1Kd6\n0WkgjkLZGfSRxEHMCnrv4UPBSK/Qwn6FTjkDLgemhqBtAnplN4VsoDL+BkRX4Wwq\n/dSQJE2b+0hm9w9UMVGFDEq1TMotGGTD2B71eh9HEKzKhGzqiNeGsiX4VV+LJzdH\nuM23eGisNqmd4iJV0zcAZ+Gbh2zK6fqTOCvXtm7Idccv8vZZnyk1FiWl3NR4WAgK\nAkvWTIoFU3Mt7dIXKKClVmvssG8WHCkd3Xcb4FHy/G756UZcq67gMMTX/9fOFM/v\nl5C0+CHl33Yig1vIDZd+fXV1KZD84dEJfEvHAgMBAAGjZjBkMA4GA1UdDwEB/wQE\nAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBR+ap20kO/6A7pPxo3+\nT3CfqZpQWjAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\n9w0BAQsFAAOCAQEAHCJky2tPjPttlDM/RIqExupBkNrnSYnOK4kr9xJ3sl8UF2DA\nPAnYsjXp3rfcjN/k/FVOhxwzi3cXJF/2Tjj39Bm/OEfYTOJDNYtBwB0VVH4ffa/6\ntZl87jaIkrxJcreeeHqYMnIxeN0b/kliyA+a5L2Yb0VPjt9INq34QDc1v74FNZ17\n4z8nr1nzg4xsOWu0Dbjo966lm4nOYIGBRGOKEkHZRZ4mEiMgr3YLkv8gSmeitx57\nZ6dVemNtUic/LVo5Iqw4n3TBS0iF2C1Q1xT/s3h+0SXZlfOWttzSluDvoMv5PvCd\npFjNn+aXLAALoihL1MJSsxydtsLjOBro5eK0Vw==\n-----END CERTIFICATE-----\n", "-----BEGIN CERTIFICATE-----\nMIIEBzCCAu+gAwIBAgICUYkwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\nMRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\nDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\nMSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTYxODIx\nMTVaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\naGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\nZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\nem9uIFJEUyB1cy13ZXN0LTIgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\nADCCAQoCggEBANCEZBZyu6yJQFZBJmSUZfSZd3Ui2gitczMKC4FLr0QzkbxY+cLa\nuVONIOrPt4Rwi+3h/UdnUg917xao3S53XDf1TDMFEYp4U8EFPXqCn/GXBIWlU86P\nPvBN+gzw3nS+aco7WXb+woTouvFVkk8FGU7J532llW8o/9ydQyDIMtdIkKTuMfho\nOiNHSaNc+QXQ32TgvM9A/6q7ksUoNXGCP8hDOkSZ/YOLiI5TcdLh/aWj00ziL5bj\npvytiMZkilnc9dLY9QhRNr0vGqL0xjmWdoEXz9/OwjmCihHqJq+20MJPsvFm7D6a\n2NKybR9U+ddrjb8/iyLOjURUZnj5O+2+OPcCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\nAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFEBxMBdv81xuzqcK5TVu\npHj+Aor8MB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\nDQEBCwUAA4IBAQBZkfiVqGoJjBI37aTlLOSjLcjI75L5wBrwO39q+B4cwcmpj58P\n3sivv+jhYfAGEbQnGRzjuFoyPzWnZ1DesRExX+wrmHsLLQbF2kVjLZhEJMHF9eB7\nGZlTPdTzHErcnuXkwA/OqyXMpj9aghcQFuhCNguEfnROY9sAoK2PTfnTz9NJHL+Q\nUpDLEJEUfc0GZMVWYhahc0x38ZnSY2SKacIPECQrTI0KpqZv/P+ijCEcMD9xmYEb\njL4en+XKS1uJpw5fIU5Sj0MxhdGstH6S84iAE5J3GM3XHklGSFwwqPYvuTXvANH6\nuboynxRgSae59jIlAK6Jrr6GWMwQRbgcaAlW\n-----END CERTIFICATE-----\n"]
      }
    }, 5586: (e, t) => {
      t.DECIMAL = 0, t.TINY = 1, t.SHORT = 2, t.LONG = 3, t.FLOAT = 4, t.DOUBLE = 5, t.NULL = 6, t.TIMESTAMP = 7, t.LONGLONG = 8, t.INT24 = 9, t.DATE = 10, t.TIME = 11, t.DATETIME = 12, t.YEAR = 13, t.NEWDATE = 14, t.VARCHAR = 15, t.BIT = 16, t.TIMESTAMP2 = 17, t.DATETIME2 = 18, t.TIME2 = 19, t.JSON = 245, t.NEWDECIMAL = 246, t.ENUM = 247, t.SET = 248, t.TINY_BLOB = 249, t.MEDIUM_BLOB = 250, t.LONG_BLOB = 251, t.BLOB = 252, t.VAR_STRING = 253, t.STRING = 254, t.GEOMETRY = 255, t[0] = "DECIMAL", t[1] = "TINY", t[2] = "SHORT", t[3] = "LONG", t[4] = "FLOAT", t[5] = "DOUBLE", t[6] = "NULL", t[7] = "TIMESTAMP", t[8] = "LONGLONG", t[9] = "INT24", t[10] = "DATE", t[11] = "TIME", t[12] = "DATETIME", t[13] = "YEAR", t[14] = "NEWDATE", t[15] = "VARCHAR", t[16] = "BIT", t[17] = "TIMESTAMP2", t[18] = "DATETIME2", t[19] = "TIME2", t[245] = "JSON", t[246] = "NEWDECIMAL", t[247] = "ENUM", t[248] = "SET", t[249] = "TINY_BLOB", t[250] = "MEDIUM_BLOB", t[251] = "LONG_BLOB", t[252] = "BLOB", t[253] = "VAR_STRING", t[254] = "STRING", t[255] = "GEOMETRY"
    }, 2442: e => {
      function t(e) {
        e = e || {}, this.status = 254, this.authMethodName = e.authMethodName, this.authMethodData = e.authMethodData
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.status = e.parseUnsignedNumber(1), this.authMethodName = e.parseNullTerminatedString(), this.authMethodData = e.parsePacketTerminatedBuffer()
      }, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, this.status), e.writeNullTerminatedString(this.authMethodName), e.writeBuffer(this.authMethodData)
      }
    }, 7344: e => {
      function t(e) {
        e = e || {}, this.data = e.data
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.data = e.parsePacketTerminatedBuffer()
      }, t.prototype.write = function (e) {
        e.writeBuffer(this.data)
      }
    }, 8202: (e, t, n) => {
      var i = n(9509).Buffer;

      function a(e) {
        e = e || {}, this.clientFlags = e.clientFlags, this.maxPacketSize = e.maxPacketSize, this.charsetNumber = e.charsetNumber, this.filler = void 0, this.user = e.user, this.scrambleBuff = e.scrambleBuff, this.database = e.database, this.protocol41 = e.protocol41
      }

      e.exports = a, a.prototype.parse = function (e) {
        this.protocol41 ? (this.clientFlags = e.parseUnsignedNumber(4), this.maxPacketSize = e.parseUnsignedNumber(4), this.charsetNumber = e.parseUnsignedNumber(1), this.filler = e.parseFiller(23), this.user = e.parseNullTerminatedString(), this.scrambleBuff = e.parseLengthCodedBuffer(), this.database = e.parseNullTerminatedString()) : (this.clientFlags = e.parseUnsignedNumber(2), this.maxPacketSize = e.parseUnsignedNumber(3), this.user = e.parseNullTerminatedString(), this.scrambleBuff = e.parseBuffer(8), this.database = e.parseLengthCodedBuffer())
      }, a.prototype.write = function (e) {
        this.protocol41 ? (e.writeUnsignedNumber(4, this.clientFlags), e.writeUnsignedNumber(4, this.maxPacketSize), e.writeUnsignedNumber(1, this.charsetNumber), e.writeFiller(23), e.writeNullTerminatedString(this.user), e.writeLengthCodedBuffer(this.scrambleBuff), e.writeNullTerminatedString(this.database)) : (e.writeUnsignedNumber(2, this.clientFlags), e.writeUnsignedNumber(3, this.maxPacketSize), e.writeNullTerminatedString(this.user), e.writeBuffer(this.scrambleBuff), this.database && this.database.length && (e.writeFiller(1), e.writeBuffer(i.from(this.database))))
      }
    }, 8481: e => {
      function t(e) {
        e = e || {}, this.command = 17, this.user = e.user, this.scrambleBuff = e.scrambleBuff, this.database = e.database, this.charsetNumber = e.charsetNumber
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.command = e.parseUnsignedNumber(1), this.user = e.parseNullTerminatedString(), this.scrambleBuff = e.parseLengthCodedBuffer(), this.database = e.parseNullTerminatedString(), this.charsetNumber = e.parseUnsignedNumber(1)
      }, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, this.command), e.writeNullTerminatedString(this.user), e.writeLengthCodedBuffer(this.scrambleBuff), e.writeNullTerminatedString(this.database), e.writeUnsignedNumber(2, this.charsetNumber)
      }
    }, 8722: e => {
      function t() {
        this.command = 14
      }

      e.exports = t, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, this.command)
      }, t.prototype.parse = function (e) {
        this.command = e.parseUnsignedNumber(1)
      }
    }, 3946: e => {
      function t(e) {
        this.command = 3, this.sql = e
      }

      e.exports = t, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, this.command), e.writeString(this.sql)
      }, t.prototype.parse = function (e) {
        this.command = e.parseUnsignedNumber(1), this.sql = e.parsePacketTerminatedString()
      }
    }, 3616: e => {
      function t() {
        this.command = 1
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.command = e.parseUnsignedNumber(1)
      }, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, this.command)
      }
    }, 654: e => {
      function t() {
        this.command = 9
      }

      e.exports = t, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, this.command)
      }, t.prototype.parse = function (e) {
        this.command = e.parseUnsignedNumber(1)
      }
    }, 1974: e => {
      function t() {
      }

      e.exports = t, t.prototype.parse = function () {
      }, t.prototype.write = function () {
      }
    }, 8131: e => {
      function t(e) {
        e = e || {}, this.fieldCount = void 0, this.warningCount = e.warningCount, this.serverStatus = e.serverStatus, this.protocol41 = e.protocol41
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.fieldCount = e.parseUnsignedNumber(1), this.protocol41 && (this.warningCount = e.parseUnsignedNumber(2), this.serverStatus = e.parseUnsignedNumber(2))
      }, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, 254), this.protocol41 && (e.writeUnsignedNumber(2, this.warningCount), e.writeUnsignedNumber(2, this.serverStatus))
      }
    }, 9243: e => {
      function t(e) {
        e = e || {}, this.fieldCount = e.fieldCount, this.errno = e.errno, this.sqlStateMarker = e.sqlStateMarker, this.sqlState = e.sqlState, this.message = e.message
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.fieldCount = e.parseUnsignedNumber(1), this.errno = e.parseUnsignedNumber(2), 35 === e.peak() && (this.sqlStateMarker = e.parseString(1), this.sqlState = e.parseString(5)), this.message = e.parsePacketTerminatedString()
      }, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, 255), e.writeUnsignedNumber(2, this.errno), this.sqlStateMarker && (e.writeString(this.sqlStateMarker), e.writeString(this.sqlState)), e.writeString(this.message)
      }
    }, 8599: (e, t, n) => {
      var i = n(5586);

      function a(e) {
        e = e || {}, this.parser = e.parser, this.packet = e.packet, this.db = e.packet.db, this.table = e.packet.table, this.name = e.packet.name, this.type = i[e.packet.type], this.length = e.packet.length
      }

      e.exports = a, a.prototype.string = function () {
        return this.parser.parseLengthCodedString()
      }, a.prototype.buffer = function () {
        return this.parser.parseLengthCodedBuffer()
      }, a.prototype.geometry = function () {
        return this.parser.parseGeometryValue()
      }
    }, 9883: e => {
      function t(e) {
        e = e || {}, this.catalog = e.catalog, this.db = e.db, this.table = e.table, this.orgTable = e.orgTable, this.name = e.name, this.orgName = e.orgName, this.charsetNr = e.charsetNr, this.length = e.length, this.type = e.type, this.flags = e.flags, this.decimals = e.decimals, this.default = e.default, this.zeroFill = e.zeroFill, this.protocol41 = e.protocol41
      }

      e.exports = t, t.prototype.parse = function (e) {
        if (this.protocol41) {
          if (this.catalog = e.parseLengthCodedString(), this.db = e.parseLengthCodedString(), this.table = e.parseLengthCodedString(), this.orgTable = e.parseLengthCodedString(), this.name = e.parseLengthCodedString(), this.orgName = e.parseLengthCodedString(), 12 !== e.parseLengthCodedNumber()) throw(t = new TypeError("Received invalid field length")).code = "PARSER_INVALID_FIELD_LENGTH", t;
          this.charsetNr = e.parseUnsignedNumber(2), this.length = e.parseUnsignedNumber(4), this.type = e.parseUnsignedNumber(1), this.flags = e.parseUnsignedNumber(2), this.decimals = e.parseUnsignedNumber(1);
          var t, n = e.parseBuffer(2);
          if (0 !== n[0] || 0 !== n[1]) throw(t = new TypeError("Received invalid filler")).code = "PARSER_INVALID_FILLER", t;
          if (this.zeroFill = !!(64 & this.flags), e.reachedPacketEnd()) return;
          this.default = e.parseLengthCodedString()
        } else this.table = e.parseLengthCodedString(), this.name = e.parseLengthCodedString(), this.length = e.parseUnsignedNumber(e.parseUnsignedNumber(1)), this.type = e.parseUnsignedNumber(e.parseUnsignedNumber(1))
      }, t.prototype.write = function (e) {
        this.protocol41 ? (e.writeLengthCodedString(this.catalog), e.writeLengthCodedString(this.db), e.writeLengthCodedString(this.table), e.writeLengthCodedString(this.orgTable), e.writeLengthCodedString(this.name), e.writeLengthCodedString(this.orgName), e.writeLengthCodedNumber(12), e.writeUnsignedNumber(2, this.charsetNr || 0), e.writeUnsignedNumber(4, this.length || 0), e.writeUnsignedNumber(1, this.type || 0), e.writeUnsignedNumber(2, this.flags || 0), e.writeUnsignedNumber(1, this.decimals || 0), e.writeFiller(2), void 0 !== this.default && e.writeLengthCodedString(this.default)) : (e.writeLengthCodedString(this.table), e.writeLengthCodedString(this.name), e.writeUnsignedNumber(1, 1), e.writeUnsignedNumber(1, this.length), e.writeUnsignedNumber(1, 1), e.writeUnsignedNumber(1, this.type))
      }
    }, 8076: (e, t, n) => {
      var i = n(9509).Buffer, a = n(3778);

      function s(e) {
        e = e || {}, this.protocolVersion = e.protocolVersion, this.serverVersion = e.serverVersion, this.threadId = e.threadId, this.scrambleBuff1 = e.scrambleBuff1, this.filler1 = e.filler1, this.serverCapabilities1 = e.serverCapabilities1, this.serverLanguage = e.serverLanguage, this.serverStatus = e.serverStatus, this.serverCapabilities2 = e.serverCapabilities2, this.scrambleLength = e.scrambleLength, this.filler2 = e.filler2, this.scrambleBuff2 = e.scrambleBuff2, this.filler3 = e.filler3, this.pluginData = e.pluginData, this.protocol41 = e.protocol41, this.protocol41 && (this.serverCapabilities1 |= a.CLIENT_PROTOCOL_41)
      }

      e.exports = s, s.prototype.parse = function (e) {
        if (this.protocolVersion = e.parseUnsignedNumber(1), this.serverVersion = e.parseNullTerminatedString(), this.threadId = e.parseUnsignedNumber(4), this.scrambleBuff1 = e.parseBuffer(8), this.filler1 = e.parseFiller(1), this.serverCapabilities1 = e.parseUnsignedNumber(2), this.serverLanguage = e.parseUnsignedNumber(1), this.serverStatus = e.parseUnsignedNumber(2), this.protocol41 = (512 & this.serverCapabilities1) > 0, this.protocol41 ? (this.serverCapabilities2 = e.parseUnsignedNumber(2), this.scrambleLength = e.parseUnsignedNumber(1), this.filler2 = e.parseFiller(10), this.scrambleBuff2 = e.parseBuffer(12), this.filler3 = e.parseFiller(1)) : this.filler2 = e.parseFiller(13), !e.reachedPacketEnd()) {
          this.pluginData = e.parsePacketTerminatedString();
          var t = this.pluginData.length - 1;
          "\0" === this.pluginData[t] && (this.pluginData = this.pluginData.substr(0, t))
        }
      }, s.prototype.write = function (e) {
        e.writeUnsignedNumber(1, this.protocolVersion), e.writeNullTerminatedString(this.serverVersion), e.writeUnsignedNumber(4, this.threadId), e.writeBuffer(this.scrambleBuff1), e.writeFiller(1), e.writeUnsignedNumber(2, this.serverCapabilities1), e.writeUnsignedNumber(1, this.serverLanguage), e.writeUnsignedNumber(2, this.serverStatus), this.protocol41 && (e.writeUnsignedNumber(2, this.serverCapabilities2), e.writeUnsignedNumber(1, this.scrambleLength), e.writeFiller(10)), e.writeNullTerminatedBuffer(this.scrambleBuff2), void 0 !== this.pluginData && e.writeNullTerminatedString(this.pluginData)
      }, s.prototype.scrambleBuff = function () {
        var e = null;
        return void 0 === this.scrambleBuff2 ? e = i.from(this.scrambleBuff1) : (e = i.allocUnsafe(this.scrambleBuff1.length + this.scrambleBuff2.length), this.scrambleBuff1.copy(e, 0), this.scrambleBuff2.copy(e, this.scrambleBuff1.length)), e
      }
    }, 9110: e => {
      function t(e) {
        this.data = e
      }

      e.exports = t, t.prototype.write = function (e) {
        e.writeBuffer(this.data)
      }
    }, 4388: e => {
      function t(e) {
        e = e || {}, this.filename = e.filename
      }

      e.exports = t, t.prototype.parse = function (e) {
        if (null !== e.parseLengthCodedNumber()) {
          var t = new TypeError("Received invalid field length");
          throw t.code = "PARSER_INVALID_FIELD_LENGTH", t
        }
        this.filename = e.parsePacketTerminatedString()
      }, t.prototype.write = function (e) {
        e.writeLengthCodedNumber(null), e.writeString(this.filename)
      }
    }, 2822: e => {
      var t = /^[^:0-9]+: [0-9]+[^:0-9]+: ([0-9]+)[^:0-9]+: [0-9]+[^:0-9]*$/;

      function n(e) {
        e = e || {}, this.fieldCount = void 0, this.affectedRows = void 0, this.insertId = void 0, this.serverStatus = void 0, this.warningCount = void 0, this.message = void 0, this.protocol41 = e.protocol41
      }

      e.exports = n, n.prototype.parse = function (e) {
        this.fieldCount = e.parseUnsignedNumber(1), this.affectedRows = e.parseLengthCodedNumber(), this.insertId = e.parseLengthCodedNumber(), this.protocol41 && (this.serverStatus = e.parseUnsignedNumber(2), this.warningCount = e.parseUnsignedNumber(2)), this.message = e.parsePacketTerminatedString(), this.changedRows = 0;
        var n = t.exec(this.message);
        null !== n && (this.changedRows = parseInt(n[1], 10))
      }, n.prototype.write = function (e) {
        e.writeUnsignedNumber(1, 0), e.writeLengthCodedNumber(this.affectedRows || 0), e.writeLengthCodedNumber(this.insertId || 0), this.protocol41 && (e.writeUnsignedNumber(2, this.serverStatus || 0), e.writeUnsignedNumber(2, this.warningCount || 0)), e.writeString(this.message)
      }
    }, 217: e => {
      function t(e) {
        e = e || {}, this.scrambleBuff = e.scrambleBuff
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.scrambleBuff = e.parsePacketTerminatedBuffer()
      }, t.prototype.write = function (e) {
        e.writeBuffer(this.scrambleBuff)
      }
    }, 8413: e => {
      function t(e) {
        e = e || {}, this.fieldCount = e.fieldCount
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.fieldCount = e.parseLengthCodedNumber()
      }, t.prototype.write = function (e) {
        e.writeLengthCodedNumber(this.fieldCount)
      }
    }, 2161: (e, t, n) => {
      var i = n(5586), a = n(2318), s = n(8599), o = Math.pow(2, 53);

      function r() {
      }

      e.exports = r, Object.defineProperty(r.prototype, "parse", {
        configurable: !0,
        enumerable: !1,
        value: function (e, t, n, i, o) {
          for (var r = this, c = function () {
            return r._typeCast(p, e, o.config.timezone, o.config.supportBigNumbers, o.config.bigNumberStrings, o.config.dateStrings)
          }, _ = 0; _ < t.length; _++) {
            var E, p = t[_];
            E = "function" == typeof n ? n.apply(o, [new s({
              packet: p,
              parser: e
            }), c]) : n ? this._typeCast(p, e, o.config.timezone, o.config.supportBigNumbers, o.config.bigNumberStrings, o.config.dateStrings) : p.charsetNr === a.BINARY ? e.parseLengthCodedBuffer() : e.parseLengthCodedString(), "string" == typeof i && i.length ? this[p.table + i + p.name] = E : i ? (this[p.table] = this[p.table] || {}, this[p.table][p.name] = E) : this[p.name] = E
          }
        }
      }), Object.defineProperty(r.prototype, "_typeCast", {
        configurable: !0, enumerable: !1, value: function (e, t, n, s, r, c) {
          var _, E, p;
          switch (e.type) {
            case i.TIMESTAMP:
            case i.TIMESTAMP2:
            case i.DATE:
            case i.DATETIME:
            case i.DATETIME2:
            case i.NEWDATE:
              var u = t.parseLengthCodedString();
              if (E = e.type, p = c, Array.isArray(p) ? -1 !== p.indexOf(i[E]) : Boolean(p)) return u;
              if (null === u) return null;
              var l = u;
              e.type === i.DATE && (u += " 00:00:00"), "local" !== n && (u += " " + n);
              var R = new Date(u);
              return isNaN(R.getTime()) ? l : R;
            case i.TINY:
            case i.SHORT:
            case i.LONG:
            case i.INT24:
            case i.YEAR:
            case i.FLOAT:
            case i.DOUBLE:
              return null === (_ = t.parseLengthCodedString()) || e.zeroFill && "0" === _[0] ? _ : Number(_);
            case i.NEWDECIMAL:
            case i.LONGLONG:
              return null === (_ = t.parseLengthCodedString()) || e.zeroFill && "0" === _[0] || s && (r || Number(_) >= o || Number(_) <= -o) ? _ : Number(_);
            case i.BIT:
              return t.parseLengthCodedBuffer();
            case i.STRING:
            case i.VAR_STRING:
            case i.TINY_BLOB:
            case i.MEDIUM_BLOB:
            case i.LONG_BLOB:
            case i.BLOB:
              return e.charsetNr === a.BINARY ? t.parseLengthCodedBuffer() : t.parseLengthCodedString();
            case i.GEOMETRY:
              return t.parseGeometryValue();
            default:
              return t.parseLengthCodedString()
          }
        }
      })
    }, 9508: (e, t, n) => {
      var i = n(3778);

      function a(e) {
        e = e || {}, this.clientFlags = e.clientFlags | i.CLIENT_SSL, this.maxPacketSize = e.maxPacketSize, this.charsetNumber = e.charsetNumber
      }

      e.exports = a, a.prototype.parse = function (e) {
        this.clientFlags = e.parseUnsignedNumber(4), this.maxPacketSize = e.parseUnsignedNumber(4), this.charsetNumber = e.parseUnsignedNumber(1)
      }, a.prototype.write = function (e) {
        e.writeUnsignedNumber(4, this.clientFlags), e.writeUnsignedNumber(4, this.maxPacketSize), e.writeUnsignedNumber(1, this.charsetNumber), e.writeFiller(23)
      }
    }, 3547: e => {
      function t() {
        this.message = void 0
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.message = e.parsePacketTerminatedString();
        for (var t = this.message.split(/\s\s/), n = 0; n < t.length; n++) {
          var i = t[n].match(/^(.+)\:\s+(.+)$/);
          null !== i && (this[i[1].toLowerCase().replace(/\s/g, "_")] = Number(i[2]))
        }
      }, t.prototype.write = function (e) {
        e.writeString(this.message)
      }
    }, 5151: e => {
      function t(e) {
        e = e || {}, this.firstByte = e.firstByte || 254
      }

      e.exports = t, t.prototype.parse = function (e) {
        this.firstByte = e.parseUnsignedNumber(1)
      }, t.prototype.write = function (e) {
        e.writeUnsignedNumber(1, this.firstByte)
      }
    }, 5997: (e, t, n) => {
      t.AuthSwitchRequestPacket = n(2442), t.AuthSwitchResponsePacket = n(7344), t.ClientAuthenticationPacket = n(8202), t.ComChangeUserPacket = n(8481), t.ComPingPacket = n(8722), t.ComQueryPacket = n(3946), t.ComQuitPacket = n(3616), t.ComStatisticsPacket = n(654), t.EmptyPacket = n(1974), t.EofPacket = n(8131), t.ErrorPacket = n(9243), t.Field = n(8599), t.FieldPacket = n(9883), t.HandshakeInitializationPacket = n(8076), t.LocalDataFilePacket = n(9110), t.LocalInfileRequestPacket = n(4388), t.OkPacket = n(2822), t.OldPasswordPacket = n(217), t.ResultSetHeaderPacket = n(8413), t.RowDataPacket = n(2161), t.SSLRequestPacket = n(9508), t.StatisticsPacket = n(3547), t.UseOldPasswordPacket = n(5151)
    }, 6421: (e, t, n) => {
      var i = n(4612), a = n(1669), s = n(5997), o = n(8065);

      function r(e, t) {
        i.call(this, e, t), this._user = e.user, this._password = e.password, this._database = e.database, this._charsetNumber = e.charsetNumber, this._currentConfig = e.currentConfig
      }

      e.exports = r, a.inherits(r, i), r.prototype.determinePacket = function (e) {
        switch (e) {
          case 254:
            return s.AuthSwitchRequestPacket;
          case 255:
            return s.ErrorPacket;
          default:
            return
        }
      }, r.prototype.start = function (e) {
        var t = e.scrambleBuff();
        t = o.token(this._password, t);
        var n = new s.ComChangeUserPacket({
          user: this._user,
          scrambleBuff: t,
          database: this._database,
          charsetNumber: this._charsetNumber
        });
        this._currentConfig.user = this._user, this._currentConfig.password = this._password, this._currentConfig.database = this._database, this._currentConfig.charsetNumber = this._charsetNumber, this.emit("packet", n)
      }, r.prototype.AuthSwitchRequestPacket = function (e) {
        var t = e.authMethodName, n = o.auth(t, e.authMethodData, {password: this._password});
        if (void 0 !== n) this.emit("packet", new s.AuthSwitchResponsePacket({data: n})); else {
          var i = new Error("MySQL is requesting the " + t + " authentication method, which is not supported.");
          i.code = "UNSUPPORTED_AUTH_METHOD", i.fatal = !0, this.end(i)
        }
      }, r.prototype.ErrorPacket = function (e) {
        var t = this._packetToError(e);
        t.fatal = !0, this.end(t)
      }
    }, 5353: (e, t, n) => {
      var i = n(4612), a = n(1669), s = n(5997), o = n(8065), r = n(3778);

      function c(e, t) {
        i.call(this, e, t), e = e || {}, this._config = e.config, this._handshakeInitializationPacket = null
      }

      e.exports = c, a.inherits(c, i), c.prototype.determinePacket = function (e, t) {
        return 255 === e ? s.ErrorPacket : this._handshakeInitializationPacket ? 254 === e ? 1 === t.packetLength() ? s.UseOldPasswordPacket : s.AuthSwitchRequestPacket : void 0 : s.HandshakeInitializationPacket
      }, c.prototype.AuthSwitchRequestPacket = function (e) {
        var t = e.authMethodName, n = o.auth(t, e.authMethodData, {password: this._config.password});
        if (void 0 !== n) this.emit("packet", new s.AuthSwitchResponsePacket({data: n})); else {
          var i = new Error("MySQL is requesting the " + t + " authentication method, which is not supported.");
          i.code = "UNSUPPORTED_AUTH_METHOD", i.fatal = !0, this.end(i)
        }
      }, c.prototype.HandshakeInitializationPacket = function (e) {
        this._handshakeInitializationPacket = e, this._config.protocol41 = e.protocol41;
        var t = e.serverCapabilities1 & r.CLIENT_SSL;
        if (this._config.ssl) {
          if (!t) {
            var n = new Error("Server does not support secure connection");
            return n.code = "HANDSHAKE_NO_SSL_SUPPORT", n.fatal = !0, void this.end(n)
          }
          this._config.clientFlags |= r.CLIENT_SSL, this.emit("packet", new s.SSLRequestPacket({
            clientFlags: this._config.clientFlags,
            maxPacketSize: this._config.maxPacketSize,
            charsetNumber: this._config.charsetNumber
          })), this.emit("start-tls")
        } else this._sendCredentials()
      }, c.prototype._tlsUpgradeCompleteHandler = function () {
        this._sendCredentials()
      }, c.prototype._sendCredentials = function () {
        var e = this._handshakeInitializationPacket;
        this.emit("packet", new s.ClientAuthenticationPacket({
          clientFlags: this._config.clientFlags,
          maxPacketSize: this._config.maxPacketSize,
          charsetNumber: this._config.charsetNumber,
          user: this._config.user,
          database: this._config.database,
          protocol41: e.protocol41,
          scrambleBuff: e.protocol41 ? o.token(this._config.password, e.scrambleBuff()) : o.scramble323(e.scrambleBuff(), this._config.password)
        }))
      }, c.prototype.UseOldPasswordPacket = function () {
        if (!this._config.insecureAuth) {
          var e = new Error("MySQL server is requesting the old and insecure pre-4.1 auth mechanism. Upgrade the user password or use the {insecureAuth: true} option.");
          return e.code = "HANDSHAKE_INSECURE_AUTH", e.fatal = !0, void this.end(e)
        }
        this.emit("packet", new s.OldPasswordPacket({scrambleBuff: o.scramble323(this._handshakeInitializationPacket.scrambleBuff(), this._config.password)}))
      }, c.prototype.ErrorPacket = function (e) {
        var t = this._packetToError(e, !0);
        t.fatal = !0, this.end(t)
      }
    }, 4533: (e, t, n) => {
      var i = n(4612), a = n(1669), s = n(5997);

      function o(e, t) {
        t || "function" != typeof e || (t = e, e = {}), i.call(this, e, t)
      }

      e.exports = o, a.inherits(o, i), o.prototype.start = function () {
        this.emit("packet", new s.ComPingPacket)
      }
    }, 8761: (e, t, n) => {
      var i = n(3778), a = n(5747), s = n(5997), o = n(8370), r = n(4612), c = n(1837), _ = n(1451), E = n(1669);

      function p(e, t) {
        r.call(this, e, t), this.sql = e.sql, this.values = e.values, this.typeCast = void 0 === e.typeCast || e.typeCast, this.nestTables = e.nestTables || !1, this._resultSet = null, this._results = [], this._fields = [], this._index = 0, this._loadError = null
      }

      e.exports = p, E.inherits(p, r), p.prototype.start = function () {
        this.emit("packet", new s.ComQueryPacket(this.sql))
      }, p.prototype.determinePacket = function (e, t) {
        var n = this._resultSet;
        if (!n) switch (e) {
          case 0:
            return s.OkPacket;
          case 251:
            return s.LocalInfileRequestPacket;
          case 255:
            return s.ErrorPacket;
          default:
            return s.ResultSetHeaderPacket
        }
        return 0 === n.eofPackets.length ? n.fieldPackets.length < n.resultSetHeaderPacket.fieldCount ? s.FieldPacket : s.EofPacket : 255 === e ? s.ErrorPacket : 254 === e && t.packetLength() < 9 ? s.EofPacket : s.RowDataPacket
      }, p.prototype.OkPacket = function (e) {
        try {
          this._callback ? (this._results.push(e), this._fields.push(void 0)) : this.emit("result", e, this._index)
        } finally {
          this._index++, this._resultSet = null, this._handleFinalResultPacket(e)
        }
      }, p.prototype.ErrorPacket = function (e) {
        var t = this._packetToError(e), n = this._results.length > 0 ? this._results : void 0,
          i = this._fields.length > 0 ? this._fields : void 0;
        t.index = this._index, t.sql = this.sql, this.end(t, n, i)
      }, p.prototype.LocalInfileRequestPacket = function (e) {
        this._connection.config.clientFlags & i.CLIENT_LOCAL_FILES ? this._sendLocalDataFile(e.filename) : (this._loadError = new Error("Load local files command is disabled"), this._loadError.code = "LOCAL_FILES_DISABLED", this._loadError.fatal = !1, this.emit("packet", new s.EmptyPacket))
      }, p.prototype.ResultSetHeaderPacket = function (e) {
        this._resultSet = new o(e)
      }, p.prototype.FieldPacket = function (e) {
        this._resultSet.fieldPackets.push(e)
      }, p.prototype.EofPacket = function (e) {
        this._resultSet.eofPackets.push(e), 1 !== this._resultSet.eofPackets.length || this._callback || this.emit("fields", this._resultSet.fieldPackets, this._index), 2 === this._resultSet.eofPackets.length && (this._callback && (this._results.push(this._resultSet.rows), this._fields.push(this._resultSet.fieldPackets)), this._index++, this._resultSet = null, this._handleFinalResultPacket(e))
      }, p.prototype._handleFinalResultPacket = function (e) {
        if (!(e.serverStatus & c.SERVER_MORE_RESULTS_EXISTS)) {
          var t = this._results.length > 1 ? this._results : this._results[0],
            n = this._fields.length > 1 ? this._fields : this._fields[0];
          this.end(this._loadError, t, n)
        }
      }, p.prototype.RowDataPacket = function (e, t, n) {
        e.parse(t, this._resultSet.fieldPackets, this.typeCast, this.nestTables, n), this._callback ? this._resultSet.rows.push(e) : this.emit("result", e, this._index)
      }, p.prototype._sendLocalDataFile = function (e) {
        var t = this, n = a.createReadStream(e, {flag: "r", encoding: null, autoClose: !0});
        this.on("pause", (function () {
          n.pause()
        })), this.on("resume", (function () {
          n.resume()
        })), n.on("data", (function (e) {
          t.emit("packet", new s.LocalDataFilePacket(e))
        })), n.on("error", (function (e) {
          t._loadError = e, n.emit("end")
        })), n.on("end", (function () {
          t.emit("packet", new s.EmptyPacket)
        }))
      }, p.prototype.stream = function (e) {
        var t = this;
        (e = e || {}).objectMode = !0;
        var n = new _(e);
        return n._read = function () {
          t._connection && t._connection.resume()
        }, n.once("end", (function () {
          process.nextTick((function () {
            n.emit("close")
          }))
        })), this.on("result", (function (e, i) {
          n.push(e) || t._connection.pause(), n.emit("result", e, i)
        })), this.on("error", (function (e) {
          n.emit("error", e)
        })), this.on("end", (function () {
          n.push(null)
        })), this.on("fields", (function (e, t) {
          n.emit("fields", e, t)
        })), n
      }
    }, 7627: (e, t, n) => {
      var i = n(4612), a = n(1669), s = n(5997);

      function o(e, t) {
        t || "function" != typeof e || (t = e, e = {}), i.call(this, e, t), this._started = !1
      }

      e.exports = o, a.inherits(o, i), o.prototype.end = function (e) {
        this._ended || (this._started && e && "ECONNRESET" === e.code && "read" === e.syscall ? i.prototype.end.call(this) : i.prototype.end.call(this, e))
      }, o.prototype.start = function () {
        this._started = !0, this.emit("packet", new s.ComQuitPacket)
      }
    }, 4612: (e, t, n) => {
      var i = n(1669), a = n(8614).EventEmitter, s = n(5997), o = n(9253), r = n(3822),
        c = a.listenerCount || function (e, t) {
          return e.listeners(t).length
        }, _ = "\n    --------------------\n";

      function E(e, t) {
        "function" == typeof e && (t = e, e = {}), a.call(this), e = e || {}, this._callback = t, this._callSite = null, this._ended = !1, this._timeout = e.timeout, this._timer = new r(this)
      }

      e.exports = E, i.inherits(E, a), E.determinePacket = function (e) {
        switch (e) {
          case 0:
            return s.OkPacket;
          case 254:
            return s.EofPacket;
          case 255:
            return s.ErrorPacket;
          default:
            return
        }
      }, E.prototype.hasErrorHandler = function () {
        return Boolean(this._callback) || c(this, "error") > 1
      }, E.prototype._packetToError = function (e) {
        var t = o[e.errno] || "UNKNOWN_CODE_PLEASE_REPORT", n = new Error(t + ": " + e.message);
        return n.code = t, n.errno = e.errno, n.sqlMessage = e.message, n.sqlState = e.sqlState, n
      }, E.prototype.end = function (e) {
        if (!this._ended) {
          this._ended = !0, e && this._addLongStackTrace(e), this._callSite = null;
          try {
            e && this.emit("error", e)
          } finally {
            try {
              this._callback && this._callback.apply(this, arguments)
            } finally {
              this.emit("end")
            }
          }
        }
      }, E.prototype.OkPacket = function (e) {
        this.end(null, e)
      }, E.prototype.ErrorPacket = function (e) {
        this.end(this._packetToError(e))
      }, E.prototype.start = function () {
      }, E.prototype._addLongStackTrace = function (e) {
        var t = this._callSite && this._callSite.stack;
        if (t && "string" == typeof t && -1 === e.stack.indexOf(_)) {
          var n = t.indexOf("\n");
          -1 !== n && (e.stack += _ + t.substr(n + 1))
        }
      }, E.prototype._onTimeout = function () {
        this.emit("timeout")
      }
    }, 3808: (e, t, n) => {
      var i = n(4612), a = n(1669), s = n(5997);

      function o(e, t) {
        t || "function" != typeof e || (t = e, e = {}), i.call(this, e, t)
      }

      e.exports = o, a.inherits(o, i), o.prototype.start = function () {
        this.emit("packet", new s.ComStatisticsPacket)
      }, o.prototype.StatisticsPacket = function (e) {
        this.end(null, e)
      }, o.prototype.determinePacket = function (e) {
        if (85 === e) return s.StatisticsPacket
      }
    }, 3664: (e, t, n) => {
      t.ChangeUser = n(6421), t.Handshake = n(5353), t.Ping = n(4533), t.Query = n(8761), t.Quit = n(7627), t.Sequence = n(4612), t.Statistics = n(3808)
    }, 159: (e, t, n) => {
      "use strict";
      var i = Object.create(null);

      function a(e) {
        if (!(this instanceof a)) return new a(e);
        this.request = e
      }

      function s(e) {
        var t = i[e];
        if (void 0 !== t) return t;
        switch (e) {
          case"charset":
            t = n(8558);
            break;
          case"encoding":
            t = n(4328);
            break;
          case"language":
            t = n(8035);
            break;
          case"mediaType":
            t = n(4097);
            break;
          default:
            throw new Error("Cannot find module '" + e + "'")
        }
        return i[e] = t, t
      }

      e.exports = a, e.exports.Negotiator = a, a.prototype.charset = function (e) {
        var t = this.charsets(e);
        return t && t[0]
      }, a.prototype.charsets = function (e) {
        return (0, s("charset").preferredCharsets)(this.request.headers["accept-charset"], e)
      }, a.prototype.encoding = function (e) {
        var t = this.encodings(e);
        return t && t[0]
      }, a.prototype.encodings = function (e) {
        return (0, s("encoding").preferredEncodings)(this.request.headers["accept-encoding"], e)
      }, a.prototype.language = function (e) {
        var t = this.languages(e);
        return t && t[0]
      }, a.prototype.languages = function (e) {
        return (0, s("language").preferredLanguages)(this.request.headers["accept-language"], e)
      }, a.prototype.mediaType = function (e) {
        var t = this.mediaTypes(e);
        return t && t[0]
      }, a.prototype.mediaTypes = function (e) {
        return (0, s("mediaType").preferredMediaTypes)(this.request.headers.accept, e)
      }, a.prototype.preferredCharset = a.prototype.charset, a.prototype.preferredCharsets = a.prototype.charsets, a.prototype.preferredEncoding = a.prototype.encoding, a.prototype.preferredEncodings = a.prototype.encodings, a.prototype.preferredLanguage = a.prototype.language, a.prototype.preferredLanguages = a.prototype.languages, a.prototype.preferredMediaType = a.prototype.mediaType, a.prototype.preferredMediaTypes = a.prototype.mediaTypes
    }, 8558: e => {
      "use strict";
      e.exports = a, e.exports.preferredCharsets = a;
      var t = /^\s*([^\s;]+)\s*(?:;(.*))?$/;

      function n(e, n) {
        var i = t.exec(e);
        if (!i) return null;
        var a = i[1], s = 1;
        if (i[2]) for (var o = i[2].split(";"), r = 0; r < o.length; r++) {
          var c = o[r].trim().split("=");
          if ("q" === c[0]) {
            s = parseFloat(c[1]);
            break
          }
        }
        return {charset: a, q: s, i: n}
      }

      function i(e, t, n) {
        var i = 0;
        if (t.charset.toLowerCase() === e.toLowerCase()) i |= 1; else if ("*" !== t.charset) return null;
        return {i: n, o: t.i, q: t.q, s: i}
      }

      function a(e, t) {
        var a = function (e) {
          for (var t = e.split(","), i = 0, a = 0; i < t.length; i++) {
            var s = n(t[i].trim(), i);
            s && (t[a++] = s)
          }
          return t.length = a, t
        }(void 0 === e ? "*" : e || "");
        if (!t) return a.filter(r).sort(s).map(o);
        var c = t.map((function (e, t) {
          return function (e, t, n) {
            for (var a = {o: -1, q: 0, s: 0}, s = 0; s < t.length; s++) {
              var o = i(e, t[s], n);
              o && (a.s - o.s || a.q - o.q || a.o - o.o) < 0 && (a = o)
            }
            return a
          }(e, a, t)
        }));
        return c.filter(r).sort(s).map((function (e) {
          return t[c.indexOf(e)]
        }))
      }

      function s(e, t) {
        return t.q - e.q || t.s - e.s || e.o - t.o || e.i - t.i || 0
      }

      function o(e) {
        return e.charset
      }

      function r(e) {
        return e.q > 0
      }
    }, 4328: e => {
      "use strict";
      e.exports = a, e.exports.preferredEncodings = a;
      var t = /^\s*([^\s;]+)\s*(?:;(.*))?$/;

      function n(e, n) {
        var i = t.exec(e);
        if (!i) return null;
        var a = i[1], s = 1;
        if (i[2]) for (var o = i[2].split(";"), r = 0; r < o.length; r++) {
          var c = o[r].trim().split("=");
          if ("q" === c[0]) {
            s = parseFloat(c[1]);
            break
          }
        }
        return {encoding: a, q: s, i: n}
      }

      function i(e, t, n) {
        var i = 0;
        if (t.encoding.toLowerCase() === e.toLowerCase()) i |= 1; else if ("*" !== t.encoding) return null;
        return {i: n, o: t.i, q: t.q, s: i}
      }

      function a(e, t) {
        var a = function (e) {
          for (var t = e.split(","), a = !1, s = 1, o = 0, r = 0; o < t.length; o++) {
            var c = n(t[o].trim(), o);
            c && (t[r++] = c, a = a || i("identity", c), s = Math.min(s, c.q || 1))
          }
          return a || (t[r++] = {encoding: "identity", q: s, i: o}), t.length = r, t
        }(e || "");
        if (!t) return a.filter(r).sort(s).map(o);
        var c = t.map((function (e, t) {
          return function (e, t, n) {
            for (var a = {o: -1, q: 0, s: 0}, s = 0; s < t.length; s++) {
              var o = i(e, t[s], n);
              o && (a.s - o.s || a.q - o.q || a.o - o.o) < 0 && (a = o)
            }
            return a
          }(e, a, t)
        }));
        return c.filter(r).sort(s).map((function (e) {
          return t[c.indexOf(e)]
        }))
      }

      function s(e, t) {
        return t.q - e.q || t.s - e.s || e.o - t.o || e.i - t.i || 0
      }

      function o(e) {
        return e.encoding
      }

      function r(e) {
        return e.q > 0
      }
    }, 8035: e => {
      "use strict";
      e.exports = a, e.exports.preferredLanguages = a;
      var t = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;

      function n(e, n) {
        var i = t.exec(e);
        if (!i) return null;
        var a = i[1], s = i[2], o = a;
        s && (o += "-" + s);
        var r = 1;
        if (i[3]) for (var c = i[3].split(";"), _ = 0; _ < c.length; _++) {
          var E = c[_].split("=");
          "q" === E[0] && (r = parseFloat(E[1]))
        }
        return {prefix: a, suffix: s, q: r, i: n, full: o}
      }

      function i(e, t, i) {
        var a = n(e);
        if (!a) return null;
        var s = 0;
        if (t.full.toLowerCase() === a.full.toLowerCase()) s |= 4; else if (t.prefix.toLowerCase() === a.full.toLowerCase()) s |= 2; else if (t.full.toLowerCase() === a.prefix.toLowerCase()) s |= 1; else if ("*" !== t.full) return null;
        return {i, o: t.i, q: t.q, s}
      }

      function a(e, t) {
        var a = function (e) {
          for (var t = e.split(","), i = 0, a = 0; i < t.length; i++) {
            var s = n(t[i].trim(), i);
            s && (t[a++] = s)
          }
          return t.length = a, t
        }(void 0 === e ? "*" : e || "");
        if (!t) return a.filter(r).sort(s).map(o);
        var c = t.map((function (e, t) {
          return function (e, t, n) {
            for (var a = {o: -1, q: 0, s: 0}, s = 0; s < t.length; s++) {
              var o = i(e, t[s], n);
              o && (a.s - o.s || a.q - o.q || a.o - o.o) < 0 && (a = o)
            }
            return a
          }(e, a, t)
        }));
        return c.filter(r).sort(s).map((function (e) {
          return t[c.indexOf(e)]
        }))
      }

      function s(e, t) {
        return t.q - e.q || t.s - e.s || e.o - t.o || e.i - t.i || 0
      }

      function o(e) {
        return e.full
      }

      function r(e) {
        return e.q > 0
      }
    }, 4097: e => {
      "use strict";
      e.exports = a, e.exports.preferredMediaTypes = a;
      var t = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;

      function n(e, n) {
        var i = t.exec(e);
        if (!i) return null;
        var a = Object.create(null), s = 1, o = i[2], r = i[1];
        if (i[3]) for (var E = function (e) {
          for (var t = e.split(";"), n = 1, i = 0; n < t.length; n++) c(t[i]) % 2 == 0 ? t[++i] = t[n] : t[i] += ";" + t[n];
          for (t.length = i + 1, n = 0; n < t.length; n++) t[n] = t[n].trim();
          return t
        }(i[3]).map(_), p = 0; p < E.length; p++) {
          var u = E[p], l = u[0].toLowerCase(), R = u[1],
            A = R && '"' === R[0] && '"' === R[R.length - 1] ? R.substr(1, R.length - 2) : R;
          if ("q" === l) {
            s = parseFloat(A);
            break
          }
          a[l] = A
        }
        return {type: r, subtype: o, params: a, q: s, i: n}
      }

      function i(e, t, i) {
        var a = n(e), s = 0;
        if (!a) return null;
        if (t.type.toLowerCase() == a.type.toLowerCase()) s |= 4; else if ("*" != t.type) return null;
        if (t.subtype.toLowerCase() == a.subtype.toLowerCase()) s |= 2; else if ("*" != t.subtype) return null;
        var o = Object.keys(t.params);
        if (o.length > 0) {
          if (!o.every((function (e) {
            return "*" == t.params[e] || (t.params[e] || "").toLowerCase() == (a.params[e] || "").toLowerCase()
          }))) return null;
          s |= 1
        }
        return {i, o: t.i, q: t.q, s}
      }

      function a(e, t) {
        var a = function (e) {
          for (var t = function (e) {
            for (var t = e.split(","), n = 1, i = 0; n < t.length; n++) c(t[i]) % 2 == 0 ? t[++i] = t[n] : t[i] += "," + t[n];
            return t.length = i + 1, t
          }(e), i = 0, a = 0; i < t.length; i++) {
            var s = n(t[i].trim(), i);
            s && (t[a++] = s)
          }
          return t.length = a, t
        }(void 0 === e ? "*/*" : e || "");
        if (!t) return a.filter(r).sort(s).map(o);
        var _ = t.map((function (e, t) {
          return function (e, t, n) {
            for (var a = {o: -1, q: 0, s: 0}, s = 0; s < t.length; s++) {
              var o = i(e, t[s], n);
              o && (a.s - o.s || a.q - o.q || a.o - o.o) < 0 && (a = o)
            }
            return a
          }(e, a, t)
        }));
        return _.filter(r).sort(s).map((function (e) {
          return t[_.indexOf(e)]
        }))
      }

      function s(e, t) {
        return t.q - e.q || t.s - e.s || e.o - t.o || e.i - t.i || 0
      }

      function o(e) {
        return e.type + "/" + e.subtype
      }

      function r(e) {
        return e.q > 0
      }

      function c(e) {
        for (var t = 0, n = 0; -1 !== (n = e.indexOf('"', n));) t++, n++;
        return t
      }

      function _(e) {
        var t, n, i = e.indexOf("=");
        return -1 === i ? t = e : (t = e.substr(0, i), n = e.substr(i + 1)), [t, n]
      }
    }, 338: (e, t, n) => {
      "use strict";
      e.exports = function (e, t) {
        return !1 !== s(e) ? (a(t, null, e), e) : (function (e, t) {
          var n = e.__onFinished;
          n && n.queue || (n = e.__onFinished = function (e) {
            function t(n) {
              if (e.__onFinished === t && (e.__onFinished = null), t.queue) {
                var i = t.queue;
                t.queue = null;
                for (var a = 0; a < i.length; a++) i[a](n, e)
              }
            }

            return t.queue = [], t
          }(e), function (e, t) {
            var n, a, s = !1;

            function o(e) {
              n.cancel(), a.cancel(), s = !0, t(e)
            }

            function r(t) {
              e.removeListener("socket", r), s || n === a && (a = i([[t, "error", "close"]], o))
            }

            n = a = i([[e, "end", "finish"]], o), e.socket ? r(e.socket) : (e.on("socket", r), void 0 === e.socket && function (e, t) {
              var n = e.assignSocket;
              "function" == typeof n && (e.assignSocket = function (e) {
                n.call(this, e), t(e)
              })
            }(e, r))
          }(e, n)), n.queue.push(t)
        }(e, t), e)
      }, e.exports.isFinished = s;
      var i = n(4331), a = "function" == typeof setImmediate ? setImmediate : function (e) {
        process.nextTick(e.bind.apply(e, arguments))
      };

      function s(e) {
        var t = e.socket;
        return "boolean" == typeof e.finished ? Boolean(e.finished || t && !t.writable) : "boolean" == typeof e.complete ? Boolean(e.upgrade || !t || !t.readable || e.complete && !e.readable) : void 0
      }
    }, 5445: e => {
      e.exports = function (e, t) {
        return e = e || {}, "string" == typeof t && (t = t.split(/ +/)), t.reduce((function (t, n) {
          return null == e[n] || (t[n] = e[n]), t
        }), {})
      }
    }, 8317: (e, t, n) => {
      "use strict";
      var i = n(8835), a = i.parse, s = i.Url;

      function o(e) {
        var t = e.url;
        if (void 0 !== t) {
          var n = e._parsedUrl;
          return c(t, n) ? n : ((n = r(t))._raw = t, e._parsedUrl = n)
        }
      }

      function r(e) {
        if ("string" != typeof e || 47 !== e.charCodeAt(0)) return a(e);
        for (var t = e, n = null, i = null, o = 1; o < e.length; o++) switch (e.charCodeAt(o)) {
          case 63:
            null === i && (t = e.substring(0, o), n = e.substring(o + 1), i = e.substring(o));
            break;
          case 9:
          case 10:
          case 12:
          case 13:
          case 32:
          case 35:
          case 160:
          case 65279:
            return a(e)
        }
        var r = void 0 !== s ? new s : {};
        return r.path = e, r.href = e, r.pathname = t, null !== i && (r.query = n, r.search = i), r
      }

      function c(e, t) {
        return "object" == typeof t && null !== t && (void 0 === s || t instanceof s) && t._raw === e
      }

      e.exports = o, e.exports.original = function (e) {
        var t = e.originalUrl;
        if ("string" != typeof t) return o(e);
        var n = e._parsedOriginalUrl;
        return c(t, n) ? n : ((n = r(t))._raw = t, e._parsedOriginalUrl = n)
      }
    }, 4095: e => {
      "use strict";

      function t(e) {
        return "/" === e.charAt(0)
      }

      function n(e) {
        var t = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/.exec(e), n = t[1] || "",
          i = Boolean(n && ":" !== n.charAt(1));
        return Boolean(t[2] || i)
      }

      e.exports = "win32" === process.platform ? n : t, e.exports.posix = t, e.exports.win32 = n
    }, 1068: (e, t, n) => {
      "use strict";

      function i(e, t) {
        void 0 === t && (t = {});
        for (var n = function (e) {
          for (var t = [], n = 0; n < e.length;) {
            var i = e[n];
            if ("*" !== i && "+" !== i && "?" !== i) if ("\\" !== i) if ("{" !== i) if ("}" !== i) if (":" !== i) if ("(" !== i) t.push({
              type: "CHAR",
              index: n,
              value: e[n++]
            }); else {
              var a = 1, s = "";
              if ("?" === e[r = n + 1]) throw new TypeError('Pattern cannot start with "?" at ' + r);
              for (; r < e.length;) if ("\\" !== e[r]) {
                if (")" === e[r]) {
                  if (0 == --a) {
                    r++;
                    break
                  }
                } else if ("(" === e[r] && (a++, "?" !== e[r + 1])) throw new TypeError("Capturing groups are not allowed at " + r);
                s += e[r++]
              } else s += e[r++] + e[r++];
              if (a) throw new TypeError("Unbalanced pattern at " + n);
              if (!s) throw new TypeError("Missing pattern at " + n);
              t.push({type: "PATTERN", index: n, value: s}), n = r
            } else {
              for (var o = "", r = n + 1; r < e.length;) {
                var c = e.charCodeAt(r);
                if (!(c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || 95 === c)) break;
                o += e[r++]
              }
              if (!o) throw new TypeError("Missing parameter name at " + n);
              t.push({type: "NAME", index: n, value: o}), n = r
            } else t.push({type: "CLOSE", index: n, value: e[n++]}); else t.push({
              type: "OPEN",
              index: n,
              value: e[n++]
            }); else t.push({type: "ESCAPED_CHAR", index: n++, value: e[n++]}); else t.push({
              type: "MODIFIER",
              index: n,
              value: e[n++]
            })
          }
          return t.push({type: "END", index: n, value: ""}), t
        }(e), i = t.prefixes, a = void 0 === i ? "./" : i, s = "[^" + c(t.delimiter || "/#?") + "]+?", o = [], r = 0, _ = 0, E = "", p = function (e) {
          if (_ < n.length && n[_].type === e) return n[_++].value
        }, u = function (e) {
          var t = p(e);
          if (void 0 !== t) return t;
          var i = n[_], a = i.type, s = i.index;
          throw new TypeError("Unexpected " + a + " at " + s + ", expected " + e)
        }, l = function () {
          for (var e, t = ""; e = p("CHAR") || p("ESCAPED_CHAR");) t += e;
          return t
        }; _ < n.length;) {
          var R = p("CHAR"), A = p("NAME"), d = p("PATTERN");
          if (A || d) {
            var N = R || "";
            -1 === a.indexOf(N) && (E += N, N = ""), E && (o.push(E), E = ""), o.push({
              name: A || r++,
              prefix: N,
              suffix: "",
              pattern: d || s,
              modifier: p("MODIFIER") || ""
            })
          } else {
            var T = R || p("ESCAPED_CHAR");
            if (T) E += T; else if (E && (o.push(E), E = ""), p("OPEN")) {
              N = l();
              var f = p("NAME") || "", m = p("PATTERN") || "", h = l();
              u("CLOSE"), o.push({
                name: f || (m ? r++ : ""),
                pattern: f && !m ? s : m,
                prefix: N,
                suffix: h,
                modifier: p("MODIFIER") || ""
              })
            } else u("END")
          }
        }
        return o
      }

      function a(e, t) {
        return s(i(e, t), t)
      }

      function s(e, t) {
        void 0 === t && (t = {});
        var n = _(t), i = t.encode, a = void 0 === i ? function (e) {
          return e
        } : i, s = t.validate, o = void 0 === s || s, r = e.map((function (e) {
          if ("object" == typeof e) return new RegExp("^(?:" + e.pattern + ")$", n)
        }));
        return function (t) {
          for (var n = "", i = 0; i < e.length; i++) {
            var s = e[i];
            if ("string" != typeof s) {
              var c = t ? t[s.name] : void 0, _ = "?" === s.modifier || "*" === s.modifier,
                E = "*" === s.modifier || "+" === s.modifier;
              if (Array.isArray(c)) {
                if (!E) throw new TypeError('Expected "' + s.name + '" to not repeat, but got an array');
                if (0 === c.length) {
                  if (_) continue;
                  throw new TypeError('Expected "' + s.name + '" to not be empty')
                }
                for (var p = 0; p < c.length; p++) {
                  var u = a(c[p], s);
                  if (o && !r[i].test(u)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '", but got "' + u + '"');
                  n += s.prefix + u + s.suffix
                }
              } else if ("string" != typeof c && "number" != typeof c) {
                if (!_) {
                  var l = E ? "an array" : "a string";
                  throw new TypeError('Expected "' + s.name + '" to be ' + l)
                }
              } else {
                if (u = a(String(c), s), o && !r[i].test(u)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + u + '"');
                n += s.prefix + u + s.suffix
              }
            } else n += s
          }
          return n
        }
      }

      function o(e, t) {
        var n = [];
        return r(p(e, n, t), n, t)
      }

      function r(e, t, n) {
        void 0 === n && (n = {});
        var i = n.decode, a = void 0 === i ? function (e) {
          return e
        } : i;
        return function (n) {
          var i = e.exec(n);
          if (!i) return !1;
          for (var s = i[0], o = i.index, r = Object.create(null), c = function (e) {
            if (void 0 === i[e]) return "continue";
            var n = t[e - 1];
            "*" === n.modifier || "+" === n.modifier ? r[n.name] = i[e].split(n.prefix + n.suffix).map((function (e) {
              return a(e, n)
            })) : r[n.name] = a(i[e], n)
          }, _ = 1; _ < i.length; _++) c(_);
          return {path: s, index: o, params: r}
        }
      }

      function c(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
      }

      function _(e) {
        return e && e.sensitive ? "" : "i"
      }

      function E(e, t, n) {
        void 0 === n && (n = {});
        for (var i = n.strict, a = void 0 !== i && i, s = n.start, o = void 0 === s || s, r = n.end, E = void 0 === r || r, p = n.encode, u = void 0 === p ? function (e) {
          return e
        } : p, l = "[" + c(n.endsWith || "") + "]|$", R = "[" + c(n.delimiter || "/#?") + "]", A = o ? "^" : "", d = 0, N = e; d < N.length; d++) {
          var T = N[d];
          if ("string" == typeof T) A += c(u(T)); else {
            var f = c(u(T.prefix)), m = c(u(T.suffix));
            if (T.pattern) if (t && t.push(T), f || m) if ("+" === T.modifier || "*" === T.modifier) {
              var h = "*" === T.modifier ? "?" : "";
              A += "(?:" + f + "((?:" + T.pattern + ")(?:" + m + f + "(?:" + T.pattern + "))*)" + m + ")" + h
            } else A += "(?:" + f + "(" + T.pattern + ")" + m + ")" + T.modifier; else A += "(" + T.pattern + ")" + T.modifier; else A += "(?:" + f + m + ")" + T.modifier
          }
        }
        if (E) a || (A += R + "?"), A += n.endsWith ? "(?=" + l + ")" : "$"; else {
          var I = e[e.length - 1], O = "string" == typeof I ? R.indexOf(I[I.length - 1]) > -1 : void 0 === I;
          a || (A += "(?:" + R + "(?=" + l + "))?"), O || (A += "(?=" + R + "|" + l + ")")
        }
        return new RegExp(A, _(n))
      }

      function p(e, t, n) {
        return e instanceof RegExp ? function (e, t) {
          if (!t) return e;
          for (var n = /\((?:\?<(.*?)>)?(?!\?)/g, i = 0, a = n.exec(e.source); a;) t.push({
            name: a[1] || i++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
          }), a = n.exec(e.source);
          return e
        }(e, t) : Array.isArray(e) ? function (e, t, n) {
          var i = e.map((function (e) {
            return p(e, t, n).source
          }));
          return new RegExp("(?:" + i.join("|") + ")", _(n))
        }(e, t, n) : function (e, t, n) {
          return E(i(e, n), t, n)
        }(e, t, n)
      }

      n.r(t), n.d(t, {
        parse: () => i,
        compile: () => a,
        tokensToFunction: () => s,
        match: () => o,
        regexpToFunction: () => r,
        tokensToRegexp: () => E,
        pathToRegexp: () => p
      })
    }, 8212: e => {
      "use strict";
      "undefined" == typeof process || !process.version || 0 === process.version.indexOf("v0.") || 0 === process.version.indexOf("v1.") && 0 !== process.version.indexOf("v1.8.") ? e.exports = {
        nextTick: function (e, t, n, i) {
          if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
          var a, s, o = arguments.length;
          switch (o) {
            case 0:
            case 1:
              return process.nextTick(e);
            case 2:
              return process.nextTick((function () {
                e.call(null, t)
              }));
            case 3:
              return process.nextTick((function () {
                e.call(null, t, n)
              }));
            case 4:
              return process.nextTick((function () {
                e.call(null, t, n, i)
              }));
            default:
              for (a = new Array(o - 1), s = 0; s < a.length;) a[s++] = arguments[s];
              return process.nextTick((function () {
                e.apply(null, a)
              }))
          }
        }
      } : e.exports = process
    }, 6753: (e, t, n) => {
      "use strict";
      var i = n(8212), a = Object.keys || function (e) {
        var t = [];
        for (var n in e) t.push(n);
        return t
      };
      e.exports = p;
      var s = Object.create(n(6497));
      s.inherits = n(4378);
      var o = n(9481), r = n(4229);
      s.inherits(p, o);
      for (var c = a(r.prototype), _ = 0; _ < c.length; _++) {
        var E = c[_];
        p.prototype[E] || (p.prototype[E] = r.prototype[E])
      }

      function p(e) {
        if (!(this instanceof p)) return new p(e);
        o.call(this, e), r.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", u)
      }

      function u() {
        this.allowHalfOpen || this._writableState.ended || i.nextTick(l, this)
      }

      function l(e) {
        e.end()
      }

      Object.defineProperty(p.prototype, "writableHighWaterMark", {
        enumerable: !1, get: function () {
          return this._writableState.highWaterMark
        }
      }), Object.defineProperty(p.prototype, "destroyed", {
        get: function () {
          return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
        }, set: function (e) {
          void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
        }
      }), p.prototype._destroy = function (e, t) {
        this.push(null), this.end(), i.nextTick(t, e)
      }
    }, 2725: (e, t, n) => {
      "use strict";
      e.exports = s;
      var i = n(4605), a = Object.create(n(6497));

      function s(e) {
        if (!(this instanceof s)) return new s(e);
        i.call(this, e)
      }

      a.inherits = n(4378), a.inherits(s, i), s.prototype._transform = function (e, t, n) {
        n(null, e)
      }
    }, 9481: (e, t, n) => {
      "use strict";
      var i = n(8212);
      e.exports = T;
      var a, s = n(5826);
      T.ReadableState = N, n(8614).EventEmitter;
      var o = function (e, t) {
        return e.listeners(t).length
      }, r = n(9740), c = n(9509).Buffer, _ = global.Uint8Array || function () {
      }, E = Object.create(n(6497));
      E.inherits = n(4378);
      var p = n(1669), u = void 0;
      u = p && p.debuglog ? p.debuglog("stream") : function () {
      };
      var l, R = n(5057), A = n(1195);
      E.inherits(T, r);
      var d = ["error", "close", "destroy", "pause", "resume"];

      function N(e, t) {
        e = e || {};
        var i = t instanceof (a = a || n(6753));
        this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var s = e.highWaterMark, o = e.readableHighWaterMark, r = this.objectMode ? 16 : 16384;
        this.highWaterMark = s || 0 === s ? s : i && (o || 0 === o) ? o : r, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new R, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (l || (l = n(2553).s), this.decoder = new l(e.encoding), this.encoding = e.encoding)
      }

      function T(e) {
        if (a = a || n(6753), !(this instanceof T)) return new T(e);
        this._readableState = new N(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), r.call(this)
      }

      function f(e, t, n, i, a) {
        var s, o = e._readableState;
        return null === t ? (o.reading = !1, function (e, t) {
          if (!t.ended) {
            if (t.decoder) {
              var n = t.decoder.end();
              n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
            }
            t.ended = !0, O(e)
          }
        }(e, o)) : (a || (s = function (e, t) {
          var n, i;
          return i = t, c.isBuffer(i) || i instanceof _ || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n
        }(o, t)), s ? e.emit("error", s) : o.objectMode || t && t.length > 0 ? ("string" == typeof t || o.objectMode || Object.getPrototypeOf(t) === c.prototype || (t = function (e) {
          return c.from(e)
        }(t)), i ? o.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : m(e, o, t, !0) : o.ended ? e.emit("error", new Error("stream.push() after EOF")) : (o.reading = !1, o.decoder && !n ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? m(e, o, t, !1) : g(e, o)) : m(e, o, t, !1))) : i || (o.reading = !1)), function (e) {
          return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
        }(o)
      }

      function m(e, t, n, i) {
        t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, i ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && O(e)), g(e, t)
      }

      Object.defineProperty(T.prototype, "destroyed", {
        get: function () {
          return void 0 !== this._readableState && this._readableState.destroyed
        }, set: function (e) {
          this._readableState && (this._readableState.destroyed = e)
        }
      }), T.prototype.destroy = A.destroy, T.prototype._undestroy = A.undestroy, T.prototype._destroy = function (e, t) {
        this.push(null), t(e)
      }, T.prototype.push = function (e, t) {
        var n, i = this._readableState;
        return i.objectMode ? n = !0 : "string" == typeof e && ((t = t || i.defaultEncoding) !== i.encoding && (e = c.from(e, t), t = ""), n = !0), f(this, e, t, !1, n)
      }, T.prototype.unshift = function (e) {
        return f(this, e, null, !0, !1)
      }, T.prototype.isPaused = function () {
        return !1 === this._readableState.flowing
      }, T.prototype.setEncoding = function (e) {
        return l || (l = n(2553).s), this._readableState.decoder = new l(e), this._readableState.encoding = e, this
      };
      var h = 8388608;

      function I(e, t) {
        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function (e) {
          return e >= h ? e = h : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
        }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
      }

      function O(e) {
        var t = e._readableState;
        t.needReadable = !1, t.emittedReadable || (u("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? i.nextTick(C, e) : C(e))
      }

      function C(e) {
        u("emit readable"), e.emit("readable"), v(e)
      }

      function g(e, t) {
        t.readingMore || (t.readingMore = !0, i.nextTick(S, e, t))
      }

      function S(e, t) {
        for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (u("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
        t.readingMore = !1
      }

      function D(e) {
        u("readable nexttick read 0"), e.read(0)
      }

      function x(e, t) {
        t.reading || (u("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), v(e), t.flowing && !t.reading && e.read(0)
      }

      function v(e) {
        var t = e._readableState;
        for (u("flow", t.flowing); t.flowing && null !== e.read();) ;
      }

      function L(e, t) {
        return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = function (e, t, n) {
          var i;
          return e < t.head.data.length ? (i = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : i = e === t.head.data.length ? t.shift() : n ? function (e, t) {
            var n = t.head, i = 1, a = n.data;
            for (e -= a.length; n = n.next;) {
              var s = n.data, o = e > s.length ? s.length : e;
              if (o === s.length ? a += s : a += s.slice(0, e), 0 == (e -= o)) {
                o === s.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n, n.data = s.slice(o));
                break
              }
              ++i
            }
            return t.length -= i, a
          }(e, t) : function (e, t) {
            var n = c.allocUnsafe(e), i = t.head, a = 1;
            for (i.data.copy(n), e -= i.data.length; i = i.next;) {
              var s = i.data, o = e > s.length ? s.length : e;
              if (s.copy(n, n.length - e, 0, o), 0 == (e -= o)) {
                o === s.length ? (++a, i.next ? t.head = i.next : t.head = t.tail = null) : (t.head = i, i.data = s.slice(o));
                break
              }
              ++a
            }
            return t.length -= a, n
          }(e, t), i
        }(e, t.buffer, t.decoder), n);
        var n
      }

      function b(e) {
        var t = e._readableState;
        if (t.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || (t.ended = !0, i.nextTick(U, t, e))
      }

      function U(e, t) {
        e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
      }

      function B(e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1
      }

      T.prototype.read = function (e) {
        u("read", e), e = parseInt(e, 10);
        var t = this._readableState, n = e;
        if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return u("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? b(this) : O(this), null;
        if (0 === (e = I(e, t)) && t.ended) return 0 === t.length && b(this), null;
        var i, a = t.needReadable;
        return u("need readable", a), (0 === t.length || t.length - e < t.highWaterMark) && u("length less than watermark", a = !0), t.ended || t.reading ? u("reading or ended", a = !1) : a && (u("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = I(n, t))), null === (i = e > 0 ? L(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && b(this)), null !== i && this.emit("data", i), i
      }, T.prototype._read = function (e) {
        this.emit("error", new Error("_read() is not implemented"))
      }, T.prototype.pipe = function (e, t) {
        var n = this, a = this._readableState;
        switch (a.pipesCount) {
          case 0:
            a.pipes = e;
            break;
          case 1:
            a.pipes = [a.pipes, e];
            break;
          default:
            a.pipes.push(e)
        }
        a.pipesCount += 1, u("pipe count=%d opts=%j", a.pipesCount, t);
        var r = t && !1 === t.end || e === process.stdout || e === process.stderr ? N : c;

        function c() {
          u("onend"), e.end()
        }

        a.endEmitted ? i.nextTick(r) : n.once("end", r), e.on("unpipe", (function t(i, s) {
          u("onunpipe"), i === n && s && !1 === s.hasUnpiped && (s.hasUnpiped = !0, u("cleanup"), e.removeListener("close", A), e.removeListener("finish", d), e.removeListener("drain", _), e.removeListener("error", R), e.removeListener("unpipe", t), n.removeListener("end", c), n.removeListener("end", N), n.removeListener("data", l), E = !0, !a.awaitDrain || e._writableState && !e._writableState.needDrain || _())
        }));
        var _ = function (e) {
          return function () {
            var t = e._readableState;
            u("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, v(e))
          }
        }(n);
        e.on("drain", _);
        var E = !1, p = !1;

        function l(t) {
          u("ondata"), p = !1, !1 !== e.write(t) || p || ((1 === a.pipesCount && a.pipes === e || a.pipesCount > 1 && -1 !== B(a.pipes, e)) && !E && (u("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, p = !0), n.pause())
        }

        function R(t) {
          u("onerror", t), N(), e.removeListener("error", R), 0 === o(e, "error") && e.emit("error", t)
        }

        function A() {
          e.removeListener("finish", d), N()
        }

        function d() {
          u("onfinish"), e.removeListener("close", A), N()
        }

        function N() {
          u("unpipe"), n.unpipe(e)
        }

        return n.on("data", l), function (e, t, n) {
          if ("function" == typeof e.prependListener) return e.prependListener(t, n);
          e._events && e._events.error ? s(e._events.error) ? e._events.error.unshift(n) : e._events.error = [n, e._events.error] : e.on(t, n)
        }(e, "error", R), e.once("close", A), e.once("finish", d), e.emit("pipe", n), a.flowing || (u("pipe resume"), n.resume()), e
      }, T.prototype.unpipe = function (e) {
        var t = this._readableState, n = {hasUnpiped: !1};
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;
        if (!e) {
          var i = t.pipes, a = t.pipesCount;
          t.pipes = null, t.pipesCount = 0, t.flowing = !1;
          for (var s = 0; s < a; s++) i[s].emit("unpipe", this, n);
          return this
        }
        var o = B(t.pipes, e);
        return -1 === o || (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this
      }, T.prototype.on = function (e, t) {
        var n = r.prototype.on.call(this, e, t);
        if ("data" === e) !1 !== this._readableState.flowing && this.resume(); else if ("readable" === e) {
          var a = this._readableState;
          a.endEmitted || a.readableListening || (a.readableListening = a.needReadable = !0, a.emittedReadable = !1, a.reading ? a.length && O(this) : i.nextTick(D, this))
        }
        return n
      }, T.prototype.addListener = T.prototype.on, T.prototype.resume = function () {
        var e = this._readableState;
        return e.flowing || (u("resume"), e.flowing = !0, function (e, t) {
          t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(x, e, t))
        }(this, e)), this
      }, T.prototype.pause = function () {
        return u("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (u("pause"), this._readableState.flowing = !1, this.emit("pause")), this
      }, T.prototype.wrap = function (e) {
        var t = this, n = this._readableState, i = !1;
        for (var a in e.on("end", (function () {
          if (u("wrapped end"), n.decoder && !n.ended) {
            var e = n.decoder.end();
            e && e.length && t.push(e)
          }
          t.push(null)
        })), e.on("data", (function (a) {
          u("wrapped data"), n.decoder && (a = n.decoder.write(a)), n.objectMode && null == a || (n.objectMode || a && a.length) && (t.push(a) || (i = !0, e.pause()))
        })), e) void 0 === this[a] && "function" == typeof e[a] && (this[a] = function (t) {
          return function () {
            return e[t].apply(e, arguments)
          }
        }(a));
        for (var s = 0; s < d.length; s++) e.on(d[s], this.emit.bind(this, d[s]));
        return this._read = function (t) {
          u("wrapped _read", t), i && (i = !1, e.resume())
        }, this
      }, Object.defineProperty(T.prototype, "readableHighWaterMark", {
        enumerable: !1, get: function () {
          return this._readableState.highWaterMark
        }
      }), T._fromList = L
    }, 4605: (e, t, n) => {
      "use strict";
      e.exports = o;
      var i = n(6753), a = Object.create(n(6497));

      function s(e, t) {
        var n = this._transformState;
        n.transforming = !1;
        var i = n.writecb;
        if (!i) return this.emit("error", new Error("write callback called multiple times"));
        n.writechunk = null, n.writecb = null, null != t && this.push(t), i(e);
        var a = this._readableState;
        a.reading = !1, (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
      }

      function o(e) {
        if (!(this instanceof o)) return new o(e);
        i.call(this, e), this._transformState = {
          afterTransform: s.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", r)
      }

      function r() {
        var e = this;
        "function" == typeof this._flush ? this._flush((function (t, n) {
          c(e, t, n)
        })) : c(this, null, null)
      }

      function c(e, t, n) {
        if (t) return e.emit("error", t);
        if (null != n && e.push(n), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return e.push(null)
      }

      a.inherits = n(4378), a.inherits(o, i), o.prototype.push = function (e, t) {
        return this._transformState.needTransform = !1, i.prototype.push.call(this, e, t)
      }, o.prototype._transform = function (e, t, n) {
        throw new Error("_transform() is not implemented")
      }, o.prototype._write = function (e, t, n) {
        var i = this._transformState;
        if (i.writecb = n, i.writechunk = e, i.writeencoding = t, !i.transforming) {
          var a = this._readableState;
          (i.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
        }
      }, o.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
      }, o.prototype._destroy = function (e, t) {
        var n = this;
        i.prototype._destroy.call(this, e, (function (e) {
          t(e), n.emit("close")
        }))
      }
    }, 4229: (e, t, n) => {
      "use strict";
      var i = n(8212);

      function a(e) {
        var t = this;
        this.next = null, this.entry = null, this.finish = function () {
          !function (e, t, n) {
            var i = e.entry;
            for (e.entry = null; i;) {
              var a = i.callback;
              t.pendingcb--, a(undefined), i = i.next
            }
            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
          }(t, e)
        }
      }

      e.exports = d;
      var s,
        o = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : i.nextTick;
      d.WritableState = A;
      var r = Object.create(n(6497));
      r.inherits = n(4378);
      var c, _ = {deprecate: n(1159)}, E = n(9740), p = n(9509).Buffer, u = global.Uint8Array || function () {
      }, l = n(1195);

      function R() {
      }

      function A(e, t) {
        s = s || n(6753), e = e || {};
        var r = t instanceof s;
        this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var c = e.highWaterMark, _ = e.writableHighWaterMark, E = this.objectMode ? 16 : 16384;
        this.highWaterMark = c || 0 === c ? c : r && (_ || 0 === _) ? _ : E, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var p = !1 === e.decodeStrings;
        this.decodeStrings = !p, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
          !function (e, t) {
            var n = e._writableState, a = n.sync, s = n.writecb;
            if (function (e) {
              e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
            }(n), t) !function (e, t, n, a, s) {
              --t.pendingcb, n ? (i.nextTick(s, a), i.nextTick(I, e, t), e._writableState.errorEmitted = !0, e.emit("error", a)) : (s(a), e._writableState.errorEmitted = !0, e.emit("error", a), I(e, t))
            }(e, n, a, t, s); else {
              var r = m(n);
              r || n.corked || n.bufferProcessing || !n.bufferedRequest || f(e, n), a ? o(T, e, n, r, s) : T(e, n, r, s)
            }
          }(t, e)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new a(this)
      }

      function d(e) {
        if (s = s || n(6753), !(c.call(d, this) || this instanceof s)) return new d(e);
        this._writableState = new A(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), E.call(this)
      }

      function N(e, t, n, i, a, s, o) {
        t.writelen = i, t.writecb = o, t.writing = !0, t.sync = !0, n ? e._writev(a, t.onwrite) : e._write(a, s, t.onwrite), t.sync = !1
      }

      function T(e, t, n, i) {
        n || function (e, t) {
          0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
        }(e, t), t.pendingcb--, i(), I(e, t)
      }

      function f(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var i = t.bufferedRequestCount, s = new Array(i), o = t.corkedRequestsFree;
          o.entry = n;
          for (var r = 0, c = !0; n;) s[r] = n, n.isBuf || (c = !1), n = n.next, r += 1;
          s.allBuffers = c, N(e, t, !0, t.length, s, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new a(t), t.bufferedRequestCount = 0
        } else {
          for (; n;) {
            var _ = n.chunk, E = n.encoding, p = n.callback;
            if (N(e, t, !1, t.objectMode ? 1 : _.length, _, E, p), n = n.next, t.bufferedRequestCount--, t.writing) break
          }
          null === n && (t.lastBufferedRequest = null)
        }
        t.bufferedRequest = n, t.bufferProcessing = !1
      }

      function m(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
      }

      function h(e, t) {
        e._final((function (n) {
          t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), I(e, t)
        }))
      }

      function I(e, t) {
        var n = m(t);
        return n && (function (e, t) {
          t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, i.nextTick(h, e, t)) : (t.prefinished = !0, e.emit("prefinish")))
        }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), n
      }

      r.inherits(d, E), A.prototype.getBuffer = function () {
        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
        return t
      }, function () {
        try {
          Object.defineProperty(A.prototype, "buffer", {
            get: _.deprecate((function () {
              return this.getBuffer()
            }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          })
        } catch (e) {
        }
      }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (c = Function.prototype[Symbol.hasInstance], Object.defineProperty(d, Symbol.hasInstance, {
        value: function (e) {
          return !!c.call(this, e) || this === d && e && e._writableState instanceof A
        }
      })) : c = function (e) {
        return e instanceof this
      }, d.prototype.pipe = function () {
        this.emit("error", new Error("Cannot pipe, not readable"))
      }, d.prototype.write = function (e, t, n) {
        var a, s = this._writableState, o = !1, r = !s.objectMode && (a = e, p.isBuffer(a) || a instanceof u);
        return r && !p.isBuffer(e) && (e = function (e) {
          return p.from(e)
        }(e)), "function" == typeof t && (n = t, t = null), r ? t = "buffer" : t || (t = s.defaultEncoding), "function" != typeof n && (n = R), s.ended ? function (e, t) {
          var n = new Error("write after end");
          e.emit("error", n), i.nextTick(t, n)
        }(this, n) : (r || function (e, t, n, a) {
          var s = !0, o = !1;
          return null === n ? o = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (o = new TypeError("Invalid non-string/buffer chunk")), o && (e.emit("error", o), i.nextTick(a, o), s = !1), s
        }(this, s, e, n)) && (s.pendingcb++, o = function (e, t, n, i, a, s) {
          if (!n) {
            var o = function (e, t, n) {
              return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = p.from(t, n)), t
            }(t, i, a);
            i !== o && (n = !0, a = "buffer", i = o)
          }
          var r = t.objectMode ? 1 : i.length;
          t.length += r;
          var c = t.length < t.highWaterMark;
          if (c || (t.needDrain = !0), t.writing || t.corked) {
            var _ = t.lastBufferedRequest;
            t.lastBufferedRequest = {
              chunk: i,
              encoding: a,
              isBuf: n,
              callback: s,
              next: null
            }, _ ? _.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
          } else N(e, t, !1, r, i, a, s);
          return c
        }(this, s, r, e, t, n)), o
      }, d.prototype.cork = function () {
        this._writableState.corked++
      }, d.prototype.uncork = function () {
        var e = this._writableState;
        e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || f(this, e))
      }, d.prototype.setDefaultEncoding = function (e) {
        if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + e);
        return this._writableState.defaultEncoding = e, this
      }, Object.defineProperty(d.prototype, "writableHighWaterMark", {
        enumerable: !1, get: function () {
          return this._writableState.highWaterMark
        }
      }), d.prototype._write = function (e, t, n) {
        n(new Error("_write() is not implemented"))
      }, d.prototype._writev = null, d.prototype.end = function (e, t, n) {
        var a = this._writableState;
        "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), a.corked && (a.corked = 1, this.uncork()), a.ending || a.finished || function (e, t, n) {
          t.ending = !0, I(e, t), n && (t.finished ? i.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
        }(this, a, n)
      }, Object.defineProperty(d.prototype, "destroyed", {
        get: function () {
          return void 0 !== this._writableState && this._writableState.destroyed
        }, set: function (e) {
          this._writableState && (this._writableState.destroyed = e)
        }
      }), d.prototype.destroy = l.destroy, d.prototype._undestroy = l.undestroy, d.prototype._destroy = function (e, t) {
        this.end(), t(e)
      }
    }, 5057: (e, t, n) => {
      "use strict";
      var i = n(9509).Buffer, a = n(1669);
      e.exports = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.head = null, this.tail = null, this.length = 0
        }

        return e.prototype.push = function (e) {
          var t = {data: e, next: null};
          this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
        }, e.prototype.unshift = function (e) {
          var t = {data: e, next: this.head};
          0 === this.length && (this.tail = t), this.head = t, ++this.length
        }, e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
          }
        }, e.prototype.clear = function () {
          this.head = this.tail = null, this.length = 0
        }, e.prototype.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
          return n
        }, e.prototype.concat = function (e) {
          if (0 === this.length) return i.alloc(0);
          if (1 === this.length) return this.head.data;
          for (var t, n, a = i.allocUnsafe(e >>> 0), s = this.head, o = 0; s;) t = a, n = o, s.data.copy(t, n), o += s.data.length, s = s.next;
          return a
        }, e
      }(), a && a.inspect && a.inspect.custom && (e.exports.prototype[a.inspect.custom] = function () {
        var e = a.inspect({length: this.length});
        return this.constructor.name + " " + e
      })
    }, 1195: (e, t, n) => {
      "use strict";
      var i = n(8212);

      function a(e, t) {
        e.emit("error", t)
      }

      e.exports = {
        destroy: function (e, t) {
          var n = this, s = this._readableState && this._readableState.destroyed,
            o = this._writableState && this._writableState.destroyed;
          return s || o ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || i.nextTick(a, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function (e) {
            !t && e ? (i.nextTick(a, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
          })), this)
        }, undestroy: function () {
          this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
        }
      }
    }, 9740: (e, t, n) => {
      e.exports = n(2413)
    }, 1451: (e, t, n) => {
      var i = n(2413);
      "disable" === process.env.READABLE_STREAM && i ? (e.exports = i, (t = e.exports = i.Readable).Readable = i.Readable, t.Writable = i.Writable, t.Duplex = i.Duplex, t.Transform = i.Transform, t.PassThrough = i.PassThrough, t.Stream = i) : ((t = e.exports = n(9481)).Stream = i || t, t.Readable = t, t.Writable = n(4229), t.Duplex = n(6753), t.Transform = n(4605), t.PassThrough = n(2725))
    }, 9988: (e, t, n) => {
      "use strict";
      var i = n(1694), a = n(5622).join, s = n(5622).normalize, o = n(4095), r = n(5622).resolve, c = n(5622).sep;
      e.exports = function (e, t) {
        var n = t, E = e;
        if (1 === arguments.length && (n = e, E = process.cwd()), null == E) throw new TypeError("argument rootPath is required");
        if ("string" != typeof E) throw new TypeError("argument rootPath must be a string");
        if (null == n) throw new TypeError("argument relativePath is required");
        if ("string" != typeof n) throw new TypeError("argument relativePath must be a string");
        if (-1 !== n.indexOf("\0")) throw i(400, "Malicious Path");
        if (o.posix(n) || o.win32(n)) throw i(400, "Malicious Path");
        if (_.test(s("." + c + n))) throw i(403);
        return s(a(r(E), n))
      };
      var _ = /(?:^|[\\/])\.\.(?:[\\/]|$)/
    }, 1694: (e, t, n) => {
      "use strict";
      var i, a, s, o = n(412)("http-errors"), r = n(8765), c = n(4917), _ = n(885);

      function E(e) {
        return Number(String(e).charAt(0) + "00")
      }

      e.exports = function e() {
        for (var t, n, i = 500, a = {}, s = 0; s < arguments.length; s++) {
          var r = arguments[s];
          if (r instanceof Error) i = (t = r).status || t.statusCode || i; else switch (typeof r) {
            case"string":
              n = r;
              break;
            case"number":
              i = r, 0 !== s && o("non-first-argument status code; replace with createError(" + r + ", ...)");
              break;
            case"object":
              a = r
          }
        }
        "number" == typeof i && (i < 400 || i >= 600) && o("non-error status code; use only 4xx or 5xx status codes"), ("number" != typeof i || !c[i] && (i < 400 || i >= 600)) && (i = 500);
        var _ = e[i] || e[E(i)];
        for (var p in t || (t = _ ? new _(n) : new Error(n || c[i]), Error.captureStackTrace(t, e)), _ && t instanceof _ && t.status === i || (t.expose = i < 500, t.status = t.statusCode = i), a) "status" !== p && "statusCode" !== p && (t[p] = a[p]);
        return t
      }, e.exports.HttpError = function () {
        function e() {
          throw new TypeError("cannot construct abstract class")
        }

        return _(e, Error), e
      }(), i = e.exports, a = c.codes, s = e.exports.HttpError, a.forEach((function (e) {
        var t, n = c[e].split(" ").map((function (e) {
          return e.slice(0, 1).toUpperCase() + e.slice(1)
        })).join("").replace(/[^ _0-9a-z]/gi, "");
        switch (E(e)) {
          case 400:
            t = function (e, t, n) {
              var i = t.match(/Error$/) ? t : t + "Error";

              function a(e) {
                var t = null != e ? e : c[n], s = new Error(t);
                return Error.captureStackTrace(s, a), r(s, a.prototype), Object.defineProperty(s, "message", {
                  enumerable: !0,
                  configurable: !0,
                  value: t,
                  writable: !0
                }), Object.defineProperty(s, "name", {enumerable: !1, configurable: !0, value: i, writable: !0}), s
              }

              return _(a, e), a.prototype.status = n, a.prototype.statusCode = n, a.prototype.expose = !0, a
            }(s, n, e);
            break;
          case 500:
            t = function (e, t, n) {
              var i = t.match(/Error$/) ? t : t + "Error";

              function a(e) {
                var t = null != e ? e : c[n], s = new Error(t);
                return Error.captureStackTrace(s, a), r(s, a.prototype), Object.defineProperty(s, "message", {
                  enumerable: !0,
                  configurable: !0,
                  value: t,
                  writable: !0
                }), Object.defineProperty(s, "name", {enumerable: !1, configurable: !0, value: i, writable: !0}), s
              }

              return _(a, e), a.prototype.status = n, a.prototype.statusCode = n, a.prototype.expose = !1, a
            }(s, n, e)
        }
        t && (i[e] = t, i[n] = t)
      })), i["I'mateapot"] = o.function(i.ImATeapot, '"I\'mateapot"; use "ImATeapot" instead')
    }, 885: (e, t, n) => {
      try {
        var i = n(1669);
        if ("function" != typeof i.inherits) throw"";
        e.exports = i.inherits
      } catch (t) {
        e.exports = n(5534)
      }
    }, 5534: e => {
      "function" == typeof Object.create ? e.exports = function (e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })
      } : e.exports = function (e, t) {
        e.super_ = t;
        var n = function () {
        };
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
      }
    }, 8765: e => {
      e.exports = Object.setPrototypeOf || ({__proto__: []} instanceof Array ? function (e, t) {
        return e.__proto__ = t, e
      } : function (e, t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        return e
      })
    }, 9509: (e, t, n) => {
      var i = n(4293), a = i.Buffer;

      function s(e, t) {
        for (var n in e) t[n] = e[n]
      }

      function o(e, t, n) {
        return a(e, t, n)
      }

      a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? e.exports = i : (s(i, t), t.Buffer = o), s(a, o), o.from = function (e, t, n) {
        if ("number" == typeof e) throw new TypeError("Argument must not be a number");
        return a(e, t, n)
      }, o.alloc = function (e, t, n) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        var i = a(e);
        return void 0 !== t ? "string" == typeof n ? i.fill(t, n) : i.fill(t) : i.fill(0), i
      }, o.allocUnsafe = function (e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return a(e)
      }, o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e)
      }
    }, 6644: e => {
      "use strict";
      e.exports = Object.setPrototypeOf || ({__proto__: []} instanceof Array ? function (e, t) {
        return e.__proto__ = t, e
      } : function (e, t) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
        return e
      })
    }, 2655: (e, t, n) => {
      e.exports = n(5428)
    }, 5428: (e, t) => {
      var n = t, i = /`/g, a = /\./g, s = /[\0\b\t\n\r\x1a\"\'\\]/g, o = {
        "\0": "\\0",
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\r": "\\r",
        "": "\\Z",
        '"': '\\"',
        "'": "\\'",
        "\\": "\\\\"
      };

      function r(e) {
        for (var t, n = s.lastIndex = 0, i = ""; t = s.exec(e);) i += e.slice(n, t.index) + o[t[0]], n = s.lastIndex;
        return 0 === n ? "'" + e + "'" : n < e.length ? "'" + i + e.slice(n) + "'" : "'" + i + "'"
      }

      function c(e, t) {
        for (e = e.toString(); e.length < t;) e = "0" + e;
        return e
      }

      n.escapeId = function (e, t) {
        if (Array.isArray(e)) {
          for (var s = "", o = 0; o < e.length; o++) s += (0 === o ? "" : ", ") + n.escapeId(e[o], t);
          return s
        }
        return t ? "`" + String(e).replace(i, "``") + "`" : "`" + String(e).replace(i, "``").replace(a, "`.`") + "`"
      }, n.escape = function (e, t, i) {
        if (null == e) return "NULL";
        switch (typeof e) {
          case"boolean":
            return e ? "true" : "false";
          case"number":
            return e + "";
          case"object":
            return e instanceof Date ? n.dateToString(e, i || "local") : Array.isArray(e) ? n.arrayToList(e, i) : Buffer.isBuffer(e) ? n.bufferToString(e) : "function" == typeof e.toSqlString ? String(e.toSqlString()) : t ? r(e.toString()) : n.objectToValues(e, i);
          default:
            return r(e)
        }
      }, n.arrayToList = function (e, t) {
        for (var i = "", a = 0; a < e.length; a++) {
          var s = e[a];
          Array.isArray(s) ? i += (0 === a ? "" : ", ") + "(" + n.arrayToList(s, t) + ")" : i += (0 === a ? "" : ", ") + n.escape(s, !0, t)
        }
        return i
      }, n.format = function (e, t, i, a) {
        if (null == t) return e;
        t instanceof Array || Array.isArray(t) || (t = [t]);
        for (var s, o = 0, r = /\?+/g, c = "", _ = 0; _ < t.length && (s = r.exec(e));) {
          var E = s[0].length;
          if (!(E > 2)) {
            var p = 2 === E ? n.escapeId(t[_]) : n.escape(t[_], i, a);
            c += e.slice(o, s.index) + p, o = r.lastIndex, _++
          }
        }
        return 0 === o ? e : o < e.length ? c + e.slice(o) : c
      }, n.dateToString = function (e, t) {
        var n, i, a, s, o, _, E, p = new Date(e);
        if (isNaN(p.getTime())) return "NULL";
        if ("local" === t) n = p.getFullYear(), i = p.getMonth() + 1, a = p.getDate(), s = p.getHours(), o = p.getMinutes(), _ = p.getSeconds(), E = p.getMilliseconds(); else {
          var u = function (e) {
            if ("Z" === e) return 0;
            var t = e.match(/([\+\-\s])(\d\d):?(\d\d)?/);
            return !!t && ("-" === t[1] ? -1 : 1) * (parseInt(t[2], 10) + (t[3] ? parseInt(t[3], 10) : 0) / 60) * 60
          }(t);
          !1 !== u && 0 !== u && p.setTime(p.getTime() + 6e4 * u), n = p.getUTCFullYear(), i = p.getUTCMonth() + 1, a = p.getUTCDate(), s = p.getUTCHours(), o = p.getUTCMinutes(), _ = p.getUTCSeconds(), E = p.getUTCMilliseconds()
        }
        return r(c(n, 4) + "-" + c(i, 2) + "-" + c(a, 2) + " " + c(s, 2) + ":" + c(o, 2) + ":" + c(_, 2) + "." + c(E, 3))
      }, n.bufferToString = function (e) {
        return "X" + r(e.toString("hex"))
      }, n.objectToValues = function (e, t) {
        var i = "";
        for (var a in e) {
          var s = e[a];
          "function" != typeof s && (i += (0 === i.length ? "" : ", ") + n.escapeId(a) + " = " + n.escape(s, !0, t))
        }
        return i
      }, n.raw = function (e) {
        if ("string" != typeof e) throw new TypeError("argument sql must be a string");
        return {
          toSqlString: function () {
            return e
          }
        }
      }
    }, 7799: e => {
      "use strict";
      e.exports = JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')
    }, 4917: (e, t, n) => {
      "use strict";
      var i = n(7799);

      function a(e) {
        if ("number" == typeof e) {
          if (!a[e]) throw new Error("invalid status code: " + e);
          return e
        }
        if ("string" != typeof e) throw new TypeError("code must be a number or string");
        var t = parseInt(e, 10);
        if (!isNaN(t)) {
          if (!a[t]) throw new Error("invalid status code: " + t);
          return t
        }
        if (!(t = a[e.toLowerCase()])) throw new Error('invalid status message: "' + e + '"');
        return t
      }

      e.exports = a, a.STATUS_CODES = i, a.codes = function (e, t) {
        var n = [];
        return Object.keys(t).forEach((function (i) {
          var a = t[i], s = Number(i);
          e[s] = a, e[a] = s, e[a.toLowerCase()] = s, n.push(s)
        })), n
      }(a, i), a.redirect = {300: !0, 301: !0, 302: !0, 303: !0, 305: !0, 307: !0, 308: !0}, a.empty = {
        204: !0,
        205: !0,
        304: !0
      }, a.retry = {502: !0, 503: !0, 504: !0}
    }, 2553: (e, t, n) => {
      "use strict";
      var i = n(9509).Buffer, a = i.isEncoding || function (e) {
        switch ((e = "" + e) && e.toLowerCase()) {
          case"hex":
          case"utf8":
          case"utf-8":
          case"ascii":
          case"binary":
          case"base64":
          case"ucs2":
          case"ucs-2":
          case"utf16le":
          case"utf-16le":
          case"raw":
            return !0;
          default:
            return !1
        }
      };

      function s(e) {
        var t;
        switch (this.encoding = function (e) {
          var t = function (e) {
            if (!e) return "utf8";
            for (var t; ;) switch (e) {
              case"utf8":
              case"utf-8":
                return "utf8";
              case"ucs2":
              case"ucs-2":
              case"utf16le":
              case"utf-16le":
                return "utf16le";
              case"latin1":
              case"binary":
                return "latin1";
              case"base64":
              case"ascii":
              case"hex":
                return e;
              default:
                if (t) return;
                e = ("" + e).toLowerCase(), t = !0
            }
          }(e);
          if ("string" != typeof t && (i.isEncoding === a || !a(e))) throw new Error("Unknown encoding: " + e);
          return t || e
        }(e), this.encoding) {
          case"utf16le":
            this.text = c, this.end = _, t = 4;
            break;
          case"utf8":
            this.fillLast = r, t = 4;
            break;
          case"base64":
            this.text = E, this.end = p, t = 3;
            break;
          default:
            return this.write = u, void (this.end = l)
        }
        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = i.allocUnsafe(t)
      }

      function o(e) {
        return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
      }

      function r(e) {
        var t = this.lastTotal - this.lastNeed, n = function (e, t, n) {
          if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
          }
        }(this, e);
        return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length))
      }

      function c(e, t) {
        if ((e.length - t) % 2 == 0) {
          var n = e.toString("utf16le", t);
          if (n) {
            var i = n.charCodeAt(n.length - 1);
            if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
          }
          return n
        }
        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
      }

      function _(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString("utf16le", 0, n)
        }
        return t
      }

      function E(e, t) {
        var n = (e.length - t) % 3;
        return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
      }

      function p(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
      }

      function u(e) {
        return e.toString(this.encoding)
      }

      function l(e) {
        return e && e.length ? this.write(e) : ""
      }

      t.s = s, s.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, n;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          n = this.lastNeed, this.lastNeed = 0
        } else n = 0;
        return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
      }, s.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t
      }, s.prototype.text = function (e, t) {
        var n = function (e, t, n) {
          var i = t.length - 1;
          if (i < n) return 0;
          var a = o(t[i]);
          return a >= 0 ? (a > 0 && (e.lastNeed = a - 1), a) : --i < n || -2 === a ? 0 : (a = o(t[i])) >= 0 ? (a > 0 && (e.lastNeed = a - 2), a) : --i < n || -2 === a ? 0 : (a = o(t[i])) >= 0 ? (a > 0 && (2 === a ? a = 0 : e.lastNeed = a - 3), a) : 0
        }(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = n;
        var i = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i)
      }, s.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
      }
    }, 2130: (e, t, n) => {
      "use strict";
      const i = n(2087), a = n(3867), s = n(6560), {env: o} = process;
      let r;

      function c(e) {
        return 0 !== e && {level: e, hasBasic: !0, has256: e >= 2, has16m: e >= 3}
      }

      function _(e, t) {
        if (0 === r) return 0;
        if (s("color=16m") || s("color=full") || s("color=truecolor")) return 3;
        if (s("color=256")) return 2;
        if (e && !t && void 0 === r) return 0;
        const n = r || 0;
        if ("dumb" === o.TERM) return n;
        if ("win32" === process.platform) {
          const e = i.release().split(".");
          return Number(e[0]) >= 10 && Number(e[2]) >= 10586 ? Number(e[2]) >= 14931 ? 3 : 2 : 1
        }
        if ("CI" in o) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((e => e in o)) || "codeship" === o.CI_NAME ? 1 : n;
        if ("TEAMCITY_VERSION" in o) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION) ? 1 : 0;
        if ("truecolor" === o.COLORTERM) return 3;
        if ("TERM_PROGRAM" in o) {
          const e = parseInt((o.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (o.TERM_PROGRAM) {
            case"iTerm.app":
              return e >= 3 ? 3 : 2;
            case"Apple_Terminal":
              return 2
          }
        }
        return /-256(color)?$/i.test(o.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM) || "COLORTERM" in o ? 1 : n
      }

      s("no-color") || s("no-colors") || s("color=false") || s("color=never") ? r = 0 : (s("color") || s("colors") || s("color=true") || s("color=always")) && (r = 1), "FORCE_COLOR" in o && (r = "true" === o.FORCE_COLOR ? 1 : "false" === o.FORCE_COLOR ? 0 : 0 === o.FORCE_COLOR.length ? 1 : Math.min(parseInt(o.FORCE_COLOR, 10), 3)), e.exports = {
        supportsColor: function (e) {
          return c(_(e, e && e.isTTY))
        }, stdout: c(_(!0, a.isatty(1))), stderr: c(_(!0, a.isatty(2)))
      }
    }, 2953: e => {
      e.exports = function (e) {
        return e.split(" ").map((function (e) {
          return e.slice(0, 1).toUpperCase() + e.slice(1)
        })).join("").replace(/[^ _0-9a-z]/gi, "")
      }
    }, 6057: e => {
      "use strict";
      e.exports = {host: "localhost", user: "root", password: "zh490490", database: "buyfood"}
    }, 2341: (e, t, n) => {
      "use strict";
      var i = n(6417);
      e.exports = function (e, t) {
        var n = String(e), a = String(t), s = i.pseudoRandomBytes(32);
        return function (e, t) {
          if (e.length !== t.length) return !1;
          if (i.timingSafeEqual) return i.timingSafeEqual(e, t);
          for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
          return !0
        }(i.createHmac("sha256", s).update(n).digest(), i.createHmac("sha256", s).update(a).digest()) && e === t
      }
    }, 273: (e, t, n) => {
      "use strict";
      var i = n(2577), a = n(983);

      function s(e, t) {
        var n, i, a = t, s = _(e);
        if (!s) return !1;
        if (a && !Array.isArray(a)) for (a = new Array(arguments.length - 1), n = 0; n < a.length; n++) a[n] = arguments[n + 1];
        if (!a || !a.length) return s;
        for (n = 0; n < a.length; n++) if (c(r(i = a[n]), s)) return "+" === i[0] || -1 !== i.indexOf("*") ? s : i;
        return !1
      }

      function o(e) {
        return void 0 !== e.headers["transfer-encoding"] || !isNaN(e.headers["content-length"])
      }

      function r(e) {
        if ("string" != typeof e) return !1;
        switch (e) {
          case"urlencoded":
            return "application/x-www-form-urlencoded";
          case"multipart":
            return "multipart/*"
        }
        return "+" === e[0] ? "*/*" + e : -1 === e.indexOf("/") ? a.lookup(e) : e
      }

      function c(e, t) {
        if (!1 === e) return !1;
        var n = t.split("/"), i = e.split("/");
        return 2 === n.length && 2 === i.length && ("*" === i[0] || i[0] === n[0]) && ("*+" === i[1].substr(0, 2) ? i[1].length <= n[1].length + 1 && i[1].substr(1) === n[1].substr(1 - i[1].length) : "*" === i[1] || i[1] === n[1])
      }

      function _(e) {
        if (!e) return null;
        try {
          return function (e) {
            var t = i.parse(e);
            return t.parameters = void 0, i.format(t)
          }(e)
        } catch (e) {
          return null
        }
      }

      e.exports = function (e, t) {
        var n = t;
        if (!o(e)) return null;
        if (arguments.length > 2) {
          n = new Array(arguments.length - 1);
          for (var i = 0; i < n.length; i++) n[i] = arguments[i + 1]
        }
        var a = e.headers["content-type"];
        return s(a, n)
      }, e.exports.is = s, e.exports.hasBody = o, e.exports.normalize = r, e.exports.match = c
    }, 1159: (e, t, n) => {
      e.exports = n(1669).deprecate
    }, 5181: e => {
      "use strict";
      e.exports = function (e, t) {
        if (!e || !e.getHeader || !e.setHeader) throw new TypeError("res argument is required");
        var i = e.getHeader("Vary") || "", a = Array.isArray(i) ? i.join(", ") : String(i);
        (i = n(a, t)) && e.setHeader("Vary", i)
      }, e.exports.append = n;
      var t = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

      function n(e, n) {
        if ("string" != typeof e) throw new TypeError("header argument is required");
        if (!n) throw new TypeError("field argument is required");
        for (var a = Array.isArray(n) ? n : i(String(n)), s = 0; s < a.length; s++) if (!t.test(a[s])) throw new TypeError("field argument contains an invalid header name");
        if ("*" === e) return e;
        var o = e, r = i(e.toLowerCase());
        if (-1 !== a.indexOf("*") || -1 !== r.indexOf("*")) return "*";
        for (var c = 0; c < a.length; c++) {
          var _ = a[c].toLowerCase();
          -1 === r.indexOf(_) && (r.push(_), o = o ? o + ", " + a[c] : a[c])
        }
        return o
      }

      function i(e) {
        for (var t = 0, n = [], i = 0, a = 0, s = e.length; a < s; a++) switch (e.charCodeAt(a)) {
          case 32:
            i === t && (i = t = a + 1);
            break;
          case 44:
            n.push(e.substring(i, t)), i = t = a + 1;
            break;
          default:
            t = a + 1
        }
        return n.push(e.substring(i, t)), n
      }
    }, 931: e => {
      "use strict";
      e.exports = class {
        constructor(e) {
          this.max = e, this.size = 0, this.cache = new Map, this._cache = new Map
        }

        get(e, t) {
          let n = this.cache.get(e);
          const i = t && t.maxAge;
          let a;

          function s() {
            return a = a || Date.now(), a
          }

          if (n) {
            if (n.expired && s() > n.expired) n.expired = 0, n.value = void 0; else if (void 0 !== i) {
              const e = i ? s() + i : 0;
              n.expired = e
            }
            return n.value
          }
          if (n = this._cache.get(e), n) {
            if (n.expired && s() > n.expired) n.expired = 0, n.value = void 0; else if (this._update(e, n), void 0 !== i) {
              const e = i ? s() + i : 0;
              n.expired = e
            }
            return n.value
          }
        }

        set(e, t, n) {
          const i = n && n.maxAge, a = i ? Date.now() + i : 0;
          let s = this.cache.get(e);
          s ? (s.expired = a, s.value = t) : (s = {value: t, expired: a}, this._update(e, s))
        }

        keys() {
          const e = new Set, t = Date.now();
          for (const e of this.cache.entries()) n(e);
          for (const e of this._cache.entries()) n(e);

          function n(n) {
            const i = n[0], a = n[1];
            (n[1].value && !n[1].expired || a.expired >= t) && e.add(i)
          }

          return Array.from(e.keys())
        }

        _update(e, t) {
          this.cache.set(e, t), this.size++, this.size >= this.max && (this.size = 0, this._cache = this.cache, this.cache = new Map)
        }
      }
    }, 2357: e => {
      "use strict";
      e.exports = require("assert")
    }, 4293: e => {
      "use strict";
      e.exports = require("buffer")
    }, 6417: e => {
      "use strict";
      e.exports = require("crypto")
    }, 8614: e => {
      "use strict";
      e.exports = require("events")
    }, 5747: e => {
      "use strict";
      e.exports = require("fs")
    }, 8605: e => {
      "use strict";
      e.exports = require("http")
    }, 1631: e => {
      "use strict";
      e.exports = require("net")
    }, 2087: e => {
      "use strict";
      e.exports = require("os")
    }, 5622: e => {
      "use strict";
      e.exports = require("path")
    }, 1191: e => {
      "use strict";
      e.exports = require("querystring")
    }, 2413: e => {
      "use strict";
      e.exports = require("stream")
    }, 8213: e => {
      "use strict";
      e.exports = require("timers")
    }, 4016: e => {
      "use strict";
      e.exports = require("tls")
    }, 3867: e => {
      "use strict";
      e.exports = require("tty")
    }, 8835: e => {
      "use strict";
      e.exports = require("url")
    }, 1669: e => {
      "use strict";
      e.exports = require("util")
    }
  }, __webpack_module_cache__ = {};

  function __webpack_require__(e) {
    if (__webpack_module_cache__[e]) return __webpack_module_cache__[e].exports;
    var t = __webpack_module_cache__[e] = {exports: {}};
    return __webpack_modules__[e](t, t.exports, __webpack_require__), t.exports
  }

  __webpack_require__.d = (e, t) => {
    for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
      enumerable: !0,
      get: t[n]
    })
  }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, (() => {
    "use strict";
    const e = new (__webpack_require__(7064)), t = new (__webpack_require__(9529)), n = __webpack_require__(3999),
      i = __webpack_require__(4426), a = __webpack_require__(6057);
    e.use(n(__dirname + "/public"));
    const s = i.createConnection(a);
    e.use(t.routes()).use(t.allowedMethods()), e.use((async (e, t) => {
      e.set("Access-Control-Allow-Origin", "*"), e.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE"), e.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type"), e.set("Content-Type", "application/json;charset=utf-8"), e.set("Access-Control-Allow-Credentials", !0), e.set("Access-Control-Max-Age", 300), e.set("Access-Control-Expose-Headers", "myData"), await t()
    })), t.get("/get", (async e => {
      e.set("Access-Control-Allow-Origin", "*");
      let t = await new Promise(((e, t) => {
        s.query("select * from buy_food", (function (t, n) {
          if (t) throw t;
          e(n)
        }))
      }));
      e.body = t
    })), e.listen(3e3, (() => {
      console.log("服务器已启动，http://localhost:3000")
    }))
  })()
})();
//# sourceMappingURL=bundle.js.map
