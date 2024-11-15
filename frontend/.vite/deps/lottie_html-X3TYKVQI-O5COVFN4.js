import {
  m
} from "./chunk-USPGI4ZR.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/lottie_html-X3TYKVQI.js
var mt = m((exports, module) => {
  typeof navigator < "u" && function(t, e) {
    typeof exports == "object" && typeof module < "u" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self, t.lottie = e());
  }(exports, function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = false, initialDefaultFrame = -999999, setWebWorker = function(e) {
      _useWebWorker = !!e;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(e) {
      locationHref = e;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(t) {
      return document.createElement(t);
    }
    function extendPrototype(t, e) {
      var r, i = t.length, s;
      for (r = 0; r < i; r += 1) {
        s = t[r].prototype;
        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e.prototype[n] = s[n]);
      }
    }
    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e);
    }
    function createProxyFunction(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var audioControllerFactory = function() {
      function t(e) {
        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = false;
      }
      return t.prototype = { addAudio: function(r) {
        this.audios.push(r);
      }, pause: function() {
        var r, i = this.audios.length;
        for (r = 0; r < i; r += 1) this.audios[r].pause();
      }, resume: function() {
        var r, i = this.audios.length;
        for (r = 0; r < i; r += 1) this.audios[r].resume();
      }, setRate: function(r) {
        var i, s = this.audios.length;
        for (i = 0; i < s; i += 1) this.audios[i].setRate(r);
      }, createAudio: function(r) {
        return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({ src: [r] }) : { isPlaying: false, play: function() {
          this.isPlaying = true;
        }, seek: function() {
          this.isPlaying = false;
        }, playing: function() {
        }, rate: function() {
        }, setVolume: function() {
        } };
      }, setAudioFactory: function(r) {
        this.audioFactory = r;
      }, setVolume: function(r) {
        this._volume = r, this._updateVolume();
      }, mute: function() {
        this._isMuted = true, this._updateVolume();
      }, unmute: function() {
        this._isMuted = false, this._updateVolume();
      }, getVolume: function() {
        return this._volume;
      }, _updateVolume: function() {
        var r, i = this.audios.length;
        for (r = 0; r < i; r += 1) this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1));
      } }, function() {
        return new t();
      };
    }(), createTypedArray = /* @__PURE__ */ function() {
      function t(r, i) {
        var s = 0, n = [], a;
        switch (r) {
          case "int16":
          case "uint8c":
            a = 1;
            break;
          default:
            a = 1.1;
            break;
        }
        for (s = 0; s < i; s += 1) n.push(a);
        return n;
      }
      function e(r, i) {
        return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function createSizedArray(t) {
      return Array.apply(null, { length: t });
    }
    function _typeof$6(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
        return typeof r;
      } : _typeof$6 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$6(t);
    }
    var subframeEnabled = true, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    (function() {
      var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e, r = t.length;
      for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]];
    })();
    BMMath.random = Math.random, BMMath.abs = function(t) {
      var e = _typeof$6(t);
      if (e === "object" && t.length) {
        var r = createSizedArray(t.length), i, s = t.length;
        for (i = 0; i < s; i += 1) r[i] = Math.abs(t[i]);
        return r;
      }
      return Math.abs(t);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(t, e, r, i) {
      this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
    }
    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(t, e, r, i) {
      this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(t, e, r) {
      this.type = t, this.firstFrame = e, this.totalFrames = r;
    }
    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e;
    }
    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t;
    }
    var createElementID = /* @__PURE__ */ function() {
      var t = 0;
      return function() {
        return t += 1, idPrefix$1 + "__lottie_element_" + t;
      };
    }();
    function HSVtoRGB(t, e, r) {
      var i, s, n, a, l, o, d, g;
      switch (a = Math.floor(t * 6), l = t * 6 - a, o = r * (1 - e), d = r * (1 - l * e), g = r * (1 - (1 - l) * e), a % 6) {
        case 0:
          i = r, s = g, n = o;
          break;
        case 1:
          i = d, s = r, n = o;
          break;
        case 2:
          i = o, s = r, n = g;
          break;
        case 3:
          i = o, s = d, n = r;
          break;
        case 4:
          i = g, s = o, n = r;
          break;
        case 5:
          i = r, s = o, n = d;
          break;
      }
      return [i, s, n];
    }
    function RGBtoHSV(t, e, r) {
      var i = Math.max(t, e, r), s = Math.min(t, e, r), n = i - s, a, l = i === 0 ? 0 : n / i, o = i / 255;
      switch (i) {
        case s:
          a = 0;
          break;
        case t:
          a = e - r + n * (e < r ? 6 : 0), a /= 6 * n;
          break;
        case e:
          a = r - t + n * 2, a /= 6 * n;
          break;
        case r:
          a = t - e + n * 4, a /= 6 * n;
          break;
      }
      return [a, l, o];
    }
    function addSaturationToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addBrightnessToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addHueToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
    }
    var rgbToHex = function() {
      var t = [], e, r;
      for (e = 0; e < 256; e += 1) r = e.toString(16), t[e] = r.length === 1 ? "0" + r : r;
      return function(i, s, n) {
        return i < 0 && (i = 0), s < 0 && (s = 0), n < 0 && (n = 0), "#" + t[i] + t[s] + t[n];
      };
    }(), setSubframeEnabled = function(e) {
      subframeEnabled = !!e;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(e) {
      expressionsPlugin = e;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(e) {
      expressionsInterfaces = e;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(e) {
      defaultCurveSegments = e;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(e) {
      idPrefix$1 = e;
    };
    function createNS(t) {
      return document.createElementNS(svgNS, t);
    }
    function _typeof$5(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
        return typeof r;
      } : _typeof$5 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$5(t);
    }
    var dataManager = /* @__PURE__ */ function() {
      var t = 1, e = [], r, i, s = { onmessage: function() {
      }, postMessage: function(P) {
        r({ data: P });
      } }, n = { postMessage: function(P) {
        s.onmessage({ data: P });
      } };
      function a(p) {
        if (window.Worker && window.Blob && getWebWorker()) {
          var P = new Blob(["var _workerSelf = self; self.onmessage = ", p.toString()], { type: "text/javascript" }), y = URL.createObjectURL(P);
          return new Worker(y);
        }
        return r = p, s;
      }
      function l() {
        i || (i = a(function(P) {
          function y() {
            function A(w, S) {
              var T, m2, b = w.length, C, k, B, z;
              for (m2 = 0; m2 < b; m2 += 1) if (T = w[m2], "ks" in T && !T.completed) {
                if (T.completed = true, T.hasMask) {
                  var N = T.masksProperties;
                  for (k = N.length, C = 0; C < k; C += 1) if (N[C].pt.k.i) E(N[C].pt.k);
                  else for (z = N[C].pt.k.length, B = 0; B < z; B += 1) N[C].pt.k[B].s && E(N[C].pt.k[B].s[0]), N[C].pt.k[B].e && E(N[C].pt.k[B].e[0]);
                }
                T.ty === 0 ? (T.layers = h(T.refId, S), A(T.layers, S)) : T.ty === 4 ? c(T.shapes) : T.ty === 5 && L(T);
              }
            }
            function f(w, S) {
              if (w) {
                var T = 0, m2 = w.length;
                for (T = 0; T < m2; T += 1) w[T].t === 1 && (w[T].data.layers = h(w[T].data.refId, S), A(w[T].data.layers, S));
              }
            }
            function u(w, S) {
              for (var T = 0, m2 = S.length; T < m2; ) {
                if (S[T].id === w) return S[T];
                T += 1;
              }
              return null;
            }
            function h(w, S) {
              var T = u(w, S);
              return T ? T.layers.__used ? JSON.parse(JSON.stringify(T.layers)) : (T.layers.__used = true, T.layers) : null;
            }
            function c(w) {
              var S, T = w.length, m2, b;
              for (S = T - 1; S >= 0; S -= 1) if (w[S].ty === "sh") if (w[S].ks.k.i) E(w[S].ks.k);
              else for (b = w[S].ks.k.length, m2 = 0; m2 < b; m2 += 1) w[S].ks.k[m2].s && E(w[S].ks.k[m2].s[0]), w[S].ks.k[m2].e && E(w[S].ks.k[m2].e[0]);
              else w[S].ty === "gr" && c(w[S].it);
            }
            function E(w) {
              var S, T = w.i.length;
              for (S = 0; S < T; S += 1) w.i[S][0] += w.v[S][0], w.i[S][1] += w.v[S][1], w.o[S][0] += w.v[S][0], w.o[S][1] += w.v[S][1];
            }
            function x(w, S) {
              var T = S ? S.split(".") : [100, 100, 100];
              return w[0] > T[0] ? true : T[0] > w[0] ? false : w[1] > T[1] ? true : T[1] > w[1] ? false : w[2] > T[2] ? true : T[2] > w[2] ? false : null;
            }
            var M = /* @__PURE__ */ function() {
              var w = [4, 4, 14];
              function S(m2) {
                var b = m2.t.d;
                m2.t.d = { k: [{ s: b, t: 0 }] };
              }
              function T(m2) {
                var b, C = m2.length;
                for (b = 0; b < C; b += 1) m2[b].ty === 5 && S(m2[b]);
              }
              return function(m2) {
                if (x(w, m2.v) && (T(m2.layers), m2.assets)) {
                  var b, C = m2.assets.length;
                  for (b = 0; b < C; b += 1) m2.assets[b].layers && T(m2.assets[b].layers);
                }
              };
            }(), F = /* @__PURE__ */ function() {
              var w = [4, 7, 99];
              return function(S) {
                if (S.chars && !x(w, S.v)) {
                  var T, m2 = S.chars.length;
                  for (T = 0; T < m2; T += 1) {
                    var b = S.chars[T];
                    b.data && b.data.shapes && (c(b.data.shapes), b.data.ip = 0, b.data.op = 99999, b.data.st = 0, b.data.sr = 1, b.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, S.chars[T].t || (b.data.shapes.push({ ty: "no" }), b.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                  }
                }
              };
            }(), I = /* @__PURE__ */ function() {
              var w = [5, 7, 15];
              function S(m2) {
                var b = m2.t.p;
                typeof b.a == "number" && (b.a = { a: 0, k: b.a }), typeof b.p == "number" && (b.p = { a: 0, k: b.p }), typeof b.r == "number" && (b.r = { a: 0, k: b.r });
              }
              function T(m2) {
                var b, C = m2.length;
                for (b = 0; b < C; b += 1) m2[b].ty === 5 && S(m2[b]);
              }
              return function(m2) {
                if (x(w, m2.v) && (T(m2.layers), m2.assets)) {
                  var b, C = m2.assets.length;
                  for (b = 0; b < C; b += 1) m2.assets[b].layers && T(m2.assets[b].layers);
                }
              };
            }(), G = /* @__PURE__ */ function() {
              var w = [4, 1, 9];
              function S(m2) {
                var b, C = m2.length, k, B;
                for (b = 0; b < C; b += 1) if (m2[b].ty === "gr") S(m2[b].it);
                else if (m2[b].ty === "fl" || m2[b].ty === "st") if (m2[b].c.k && m2[b].c.k[0].i) for (B = m2[b].c.k.length, k = 0; k < B; k += 1) m2[b].c.k[k].s && (m2[b].c.k[k].s[0] /= 255, m2[b].c.k[k].s[1] /= 255, m2[b].c.k[k].s[2] /= 255, m2[b].c.k[k].s[3] /= 255), m2[b].c.k[k].e && (m2[b].c.k[k].e[0] /= 255, m2[b].c.k[k].e[1] /= 255, m2[b].c.k[k].e[2] /= 255, m2[b].c.k[k].e[3] /= 255);
                else m2[b].c.k[0] /= 255, m2[b].c.k[1] /= 255, m2[b].c.k[2] /= 255, m2[b].c.k[3] /= 255;
              }
              function T(m2) {
                var b, C = m2.length;
                for (b = 0; b < C; b += 1) m2[b].ty === 4 && S(m2[b].shapes);
              }
              return function(m2) {
                if (x(w, m2.v) && (T(m2.layers), m2.assets)) {
                  var b, C = m2.assets.length;
                  for (b = 0; b < C; b += 1) m2.assets[b].layers && T(m2.assets[b].layers);
                }
              };
            }(), R = /* @__PURE__ */ function() {
              var w = [4, 4, 18];
              function S(m2) {
                var b, C = m2.length, k, B;
                for (b = C - 1; b >= 0; b -= 1) if (m2[b].ty === "sh") if (m2[b].ks.k.i) m2[b].ks.k.c = m2[b].closed;
                else for (B = m2[b].ks.k.length, k = 0; k < B; k += 1) m2[b].ks.k[k].s && (m2[b].ks.k[k].s[0].c = m2[b].closed), m2[b].ks.k[k].e && (m2[b].ks.k[k].e[0].c = m2[b].closed);
                else m2[b].ty === "gr" && S(m2[b].it);
              }
              function T(m2) {
                var b, C, k = m2.length, B, z, N, H;
                for (C = 0; C < k; C += 1) {
                  if (b = m2[C], b.hasMask) {
                    var j = b.masksProperties;
                    for (z = j.length, B = 0; B < z; B += 1) if (j[B].pt.k.i) j[B].pt.k.c = j[B].cl;
                    else for (H = j[B].pt.k.length, N = 0; N < H; N += 1) j[B].pt.k[N].s && (j[B].pt.k[N].s[0].c = j[B].cl), j[B].pt.k[N].e && (j[B].pt.k[N].e[0].c = j[B].cl);
                  }
                  b.ty === 4 && S(b.shapes);
                }
              }
              return function(m2) {
                if (x(w, m2.v) && (T(m2.layers), m2.assets)) {
                  var b, C = m2.assets.length;
                  for (b = 0; b < C; b += 1) m2.assets[b].layers && T(m2.assets[b].layers);
                }
              };
            }();
            function V(w) {
              w.__complete || (G(w), M(w), F(w), I(w), R(w), A(w.layers, w.assets), f(w.chars, w.assets), w.__complete = true);
            }
            function L(w) {
              w.t.a.length === 0 && "m" in w.t.p;
            }
            var D = {};
            return D.completeData = V, D.checkColors = G, D.checkChars = F, D.checkPathProperties = I, D.checkShapes = R, D.completeLayers = A, D;
          }
          if (n.dataManager || (n.dataManager = y()), n.assetLoader || (n.assetLoader = /* @__PURE__ */ function() {
            function A(u) {
              var h = u.getResponseHeader("content-type");
              return h && u.responseType === "json" && h.indexOf("json") !== -1 || u.response && _typeof$5(u.response) === "object" ? u.response : u.response && typeof u.response == "string" ? JSON.parse(u.response) : u.responseText ? JSON.parse(u.responseText) : null;
            }
            function f(u, h, c, E) {
              var x, M = new XMLHttpRequest();
              try {
                M.responseType = "json";
              } catch {
              }
              M.onreadystatechange = function() {
                if (M.readyState === 4) if (M.status === 200) x = A(M), c(x);
                else try {
                  x = A(M), c(x);
                } catch (F) {
                  E && E(F);
                }
              };
              try {
                M.open(["G", "E", "T"].join(""), u, true);
              } catch {
                M.open(["G", "E", "T"].join(""), h + "/" + u, true);
              }
              M.send();
            }
            return { load: f };
          }()), P.data.type === "loadAnimation") n.assetLoader.load(P.data.path, P.data.fullPath, function(A) {
            n.dataManager.completeData(A), n.postMessage({ id: P.data.id, payload: A, status: "success" });
          }, function() {
            n.postMessage({ id: P.data.id, status: "error" });
          });
          else if (P.data.type === "complete") {
            var v = P.data.animation;
            n.dataManager.completeData(v), n.postMessage({ id: P.data.id, payload: v, status: "success" });
          } else P.data.type === "loadData" && n.assetLoader.load(P.data.path, P.data.fullPath, function(A) {
            n.postMessage({ id: P.data.id, payload: A, status: "success" });
          }, function() {
            n.postMessage({ id: P.data.id, status: "error" });
          });
        }), i.onmessage = function(p) {
          var P = p.data, y = P.id, v = e[y];
          e[y] = null, P.status === "success" ? v.onComplete(P.payload) : v.onError && v.onError();
        });
      }
      function o(p, P) {
        t += 1;
        var y = "processId_" + t;
        return e[y] = { onComplete: p, onError: P }, y;
      }
      function d(p, P, y) {
        l();
        var v = o(P, y);
        i.postMessage({ type: "loadAnimation", path: p, fullPath: window.location.origin + window.location.pathname, id: v });
      }
      function g(p, P, y) {
        l();
        var v = o(P, y);
        i.postMessage({ type: "loadData", path: p, fullPath: window.location.origin + window.location.pathname, id: v });
      }
      function _(p, P, y) {
        l();
        var v = o(P, y);
        i.postMessage({ type: "complete", animation: p, id: v });
      }
      return { loadAnimation: d, loadData: g, completeAnimation: _ };
    }(), ImagePreloader = function() {
      var t = function() {
        var f = createTag("canvas");
        f.width = 1, f.height = 1;
        var u = f.getContext("2d");
        return u.fillStyle = "rgba(0,0,0,0)", u.fillRect(0, 0, 1, 1), f;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i(f, u, h) {
        var c = "";
        if (f.e) c = f.p;
        else if (u) {
          var E = f.p;
          E.indexOf("images/") !== -1 && (E = E.split("/")[1]), c = u + E;
        } else c = h, c += f.u ? f.u : "", c += f.p;
        return c;
      }
      function s(f) {
        var u = 0, h = setInterval((function() {
          var c = f.getBBox();
          (c.width || u > 500) && (this._imageLoaded(), clearInterval(h)), u += 1;
        }).bind(this), 50);
      }
      function n(f) {
        var u = i(f, this.assetsPath, this.path), h = createNS("image");
        isSafari ? this.testImageLoaded(h) : h.addEventListener("load", this._imageLoaded, false), h.addEventListener("error", (function() {
          c.img = t, this._imageLoaded();
        }).bind(this), false), h.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this._elementHelper.append ? this._elementHelper.append(h) : this._elementHelper.appendChild(h);
        var c = { img: h, assetData: f };
        return c;
      }
      function a(f) {
        var u = i(f, this.assetsPath, this.path), h = createTag("img");
        h.crossOrigin = "anonymous", h.addEventListener("load", this._imageLoaded, false), h.addEventListener("error", (function() {
          c.img = t, this._imageLoaded();
        }).bind(this), false), h.src = u;
        var c = { img: h, assetData: f };
        return c;
      }
      function l(f) {
        var u = { assetData: f }, h = i(f, this.assetsPath, this.path);
        return dataManager.loadData(h, (function(c) {
          u.img = c, this._footageLoaded();
        }).bind(this), (function() {
          u.img = {}, this._footageLoaded();
        }).bind(this)), u;
      }
      function o(f, u) {
        this.imagesLoadedCb = u;
        var h, c = f.length;
        for (h = 0; h < c; h += 1) f[h].layers || (!f[h].t || f[h].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(f[h]))) : f[h].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(f[h]))));
      }
      function d(f) {
        this.path = f || "";
      }
      function g(f) {
        this.assetsPath = f || "";
      }
      function _(f) {
        for (var u = 0, h = this.images.length; u < h; ) {
          if (this.images[u].assetData === f) return this.images[u].img;
          u += 1;
        }
        return null;
      }
      function p() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function P() {
        return this.totalImages === this.loadedAssets;
      }
      function y() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function v(f, u) {
        f === "svg" ? (this._elementHelper = u, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function A() {
        this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return A.prototype = { loadAssets: o, setAssetsPath: g, setPath: d, loadedImages: P, loadedFootages: y, destroy: p, getAsset: _, createImgData: a, createImageData: n, imageLoaded: e, footageLoaded: r, setCacheType: v }, A;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = { triggerEvent: function(e, r) {
      if (this._cbs[e]) for (var i = this._cbs[e], s = 0; s < i.length; s += 1) i[s](r);
    }, addEventListener: function(e, r) {
      return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(r), (function() {
        this.removeEventListener(e, r);
      }).bind(this);
    }, removeEventListener: function(e, r) {
      if (!r) this._cbs[e] = null;
      else if (this._cbs[e]) {
        for (var i = 0, s = this._cbs[e].length; i < s; ) this._cbs[e][i] === r && (this._cbs[e].splice(i, 1), i -= 1, s -= 1), i += 1;
        this._cbs[e].length || (this._cbs[e] = null);
      }
    } };
    var markerParser = /* @__PURE__ */ function() {
      function t(e) {
        for (var r = e.split(`\r
`), i = {}, s, n = 0, a = 0; a < r.length; a += 1) s = r[a].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), n += 1);
        if (n === 0) throw new Error();
        return i;
      }
      return function(e) {
        for (var r = [], i = 0; i < e.length; i += 1) {
          var s = e[i], n = { time: s.tm, duration: s.dr };
          try {
            n.payload = JSON.parse(e[i].cm);
          } catch {
            try {
              n.payload = t(e[i].cm);
            } catch {
              n.payload = { name: e[i].cm };
            }
          }
          r.push(n);
        }
        return r;
      };
    }(), ProjectInterface = /* @__PURE__ */ function() {
      function t(e) {
        this.compositions.push(e);
      }
      return function() {
        function e(r) {
          for (var i = 0, s = this.compositions.length; i < s; ) {
            if (this.compositions[i].data && this.compositions[i].data.nm === r) return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
            i += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), renderers = {}, registerRenderer = function(e, r) {
      renderers[e] = r;
    };
    function getRenderer(t) {
      return renderers[t];
    }
    function getRegisteredRenderer() {
      if (renderers.canvas) return "canvas";
      for (var t in renderers) if (renderers[t]) return t;
      return "";
    }
    function _typeof$4(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
        return typeof r;
      } : _typeof$4 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$4(t);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var r = getRenderer(e);
      this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === true ? this.loop = true : t.loop === false ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : true, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : true, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(t) {
      dataManager.completeAnimation(t, this.configAnimation);
    }, AnimationItem.prototype.setData = function(t, e) {
      e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
      var r = { wrapper: t, animationData: e }, i = t.attributes;
      r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
      s === "false" ? r.loop = false : s === "true" ? r.loop = true : s !== "" && (r.loop = parseInt(s, 10));
      var n = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : true;
      r.autoplay = n !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
      var a = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
      a === "false" && (r.prerender = false), r.path ? this.setParams(r) : this.trigger("destroy");
    }, AnimationItem.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, r, i = e.length, s = t.layers, n, a = s.length;
      for (n = 0; n < a; n += 1) for (r = 0; r < i; ) {
        if (e[r].id === s[n].id) {
          e[r] = s[n];
          break;
        }
        r += 1;
      }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (i = t.assets.length, r = 0; r < i; r += 1) this.animationData.assets.push(t.assets[r]);
      this.animationData.__complete = false, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = getExpressionsPlugin();
      e && e.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      var t = this.animationData.segments;
      t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(t) {
      if (this.renderer) try {
        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (e) {
        this.triggerConfigError(e);
      }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = true;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(t, e) {
      var r = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
      this.renderer.updateContainerSize(r, i);
    }, AnimationItem.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (!(this.isLoaded === false || !this.renderer)) try {
        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
      } catch (t) {
        this.triggerRenderFrameError(t);
      }
    }, AnimationItem.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === true && (this.isPaused = false, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === false && (this.isPaused = true, this.trigger("_pause"), this._idle = true, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === true ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(t) {
      for (var e, r = 0; r < this.markers.length; r += 1) if (e = this.markers[r], e.payload && e.payload.name === t) return e;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
      if (!(r && this.name !== r)) {
        var i = Number(t);
        if (isNaN(i)) {
          var s = this.getMarkerData(t);
          s && this.goToAndStop(s.time, true);
        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
      if (!(r && this.name !== r)) {
        var i = Number(t);
        if (isNaN(i)) {
          var s = this.getMarkerData(t);
          s && (s.duration ? this.playSegments([s.time, s.time + s.duration], true) : this.goToAndStop(s.time, true));
        } else this.goToAndStop(i, e, r);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(t) {
      if (!(this.isPaused === true || this.isLoaded === false)) {
        var e = this.currentRawFrame + t * this.frameModifier, r = false;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = true, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== true) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true) : (r = true, e = 0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t, e) {
      var r = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, true);
    }, AnimationItem.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
        var r, i = t.length;
        for (r = 0; r < i; r += 1) this.segments.push(t[r]);
      } else this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(t) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), true) : false;
    }, AnimationItem.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(t) {
      this.loop = t;
    }, AnimationItem.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e) e = t.p;
      else if (this.assetsPath) {
        var r = t.p;
        r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r;
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, AnimationItem.prototype.getAssetData = function(t) {
      for (var e = 0, r = this.assets.length; e < r; ) {
        if (t === this.assets[e].id) return this.assets[e];
        e += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
      try {
        var i = this.renderer.getElementByPath(t);
        i.updateDocumentData(e, r);
      } catch {
      }
    }, AnimationItem.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new BMDestroyEvent(t, this));
          break;
        default:
          this.triggerEvent(t);
      }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, AnimationItem.prototype.triggerConfigError = function(t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var animationManager = function() {
      var t = {}, e = [], r = 0, i = 0, s = 0, n = true, a = false;
      function l(S) {
        for (var T = 0, m2 = S.target; T < i; ) e[T].animation === m2 && (e.splice(T, 1), T -= 1, i -= 1, m2.isPaused || _()), T += 1;
      }
      function o(S, T) {
        if (!S) return null;
        for (var m2 = 0; m2 < i; ) {
          if (e[m2].elem === S && e[m2].elem !== null) return e[m2].animation;
          m2 += 1;
        }
        var b = new AnimationItem();
        return p(b, S), b.setData(S, T), b;
      }
      function d() {
        var S, T = e.length, m2 = [];
        for (S = 0; S < T; S += 1) m2.push(e[S].animation);
        return m2;
      }
      function g() {
        s += 1, G();
      }
      function _() {
        s -= 1;
      }
      function p(S, T) {
        S.addEventListener("destroy", l), S.addEventListener("_active", g), S.addEventListener("_idle", _), e.push({ elem: T, animation: S }), i += 1;
      }
      function P(S) {
        var T = new AnimationItem();
        return p(T, null), T.setParams(S), T;
      }
      function y(S, T) {
        var m2;
        for (m2 = 0; m2 < i; m2 += 1) e[m2].animation.setSpeed(S, T);
      }
      function v(S, T) {
        var m2;
        for (m2 = 0; m2 < i; m2 += 1) e[m2].animation.setDirection(S, T);
      }
      function A(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.play(S);
      }
      function f(S) {
        var T = S - r, m2;
        for (m2 = 0; m2 < i; m2 += 1) e[m2].animation.advanceTime(T);
        r = S, s && !a ? window.requestAnimationFrame(f) : n = true;
      }
      function u(S) {
        r = S, window.requestAnimationFrame(f);
      }
      function h(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.pause(S);
      }
      function c(S, T, m2) {
        var b;
        for (b = 0; b < i; b += 1) e[b].animation.goToAndStop(S, T, m2);
      }
      function E(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.stop(S);
      }
      function x(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.togglePause(S);
      }
      function M(S) {
        var T;
        for (T = i - 1; T >= 0; T -= 1) e[T].animation.destroy(S);
      }
      function F(S, T, m2) {
        var b = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), C, k = b.length;
        for (C = 0; C < k; C += 1) m2 && b[C].setAttribute("data-bm-type", m2), o(b[C], S);
        if (T && k === 0) {
          m2 || (m2 = "svg");
          var B = document.getElementsByTagName("body")[0];
          B.innerText = "";
          var z = createTag("div");
          z.style.width = "100%", z.style.height = "100%", z.setAttribute("data-bm-type", m2), B.appendChild(z), o(z, S);
        }
      }
      function I() {
        var S;
        for (S = 0; S < i; S += 1) e[S].animation.resize();
      }
      function G() {
        !a && s && n && (window.requestAnimationFrame(u), n = false);
      }
      function R() {
        a = true;
      }
      function V() {
        a = false, G();
      }
      function L(S, T) {
        var m2;
        for (m2 = 0; m2 < i; m2 += 1) e[m2].animation.setVolume(S, T);
      }
      function D(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.mute(S);
      }
      function w(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.unmute(S);
      }
      return t.registerAnimation = o, t.loadAnimation = P, t.setSpeed = y, t.setDirection = v, t.play = A, t.pause = h, t.stop = E, t.togglePause = x, t.searchAnimations = F, t.resize = I, t.goToAndStop = c, t.destroy = M, t.freeze = R, t.unfreeze = V, t.setVolume = L, t.mute = D, t.unmute = w, t.getRegisteredAnimations = d, t;
    }(), BezierFactory = function() {
      var t = {};
      t.getBezierEasing = r;
      var e = {};
      function r(u, h, c, E, x) {
        var M = x || ("bez_" + u + "_" + h + "_" + c + "_" + E).replace(/\./g, "p");
        if (e[M]) return e[M];
        var F = new f([u, h, c, E]);
        return e[M] = F, F;
      }
      var i = 4, s = 1e-3, n = 1e-7, a = 10, l = 11, o = 1 / (l - 1), d = typeof Float32Array == "function";
      function g(u, h) {
        return 1 - 3 * h + 3 * u;
      }
      function _(u, h) {
        return 3 * h - 6 * u;
      }
      function p(u) {
        return 3 * u;
      }
      function P(u, h, c) {
        return ((g(h, c) * u + _(h, c)) * u + p(h)) * u;
      }
      function y(u, h, c) {
        return 3 * g(h, c) * u * u + 2 * _(h, c) * u + p(h);
      }
      function v(u, h, c, E, x) {
        var M, F, I = 0;
        do
          F = h + (c - h) / 2, M = P(F, E, x) - u, M > 0 ? c = F : h = F;
        while (Math.abs(M) > n && ++I < a);
        return F;
      }
      function A(u, h, c, E) {
        for (var x = 0; x < i; ++x) {
          var M = y(h, c, E);
          if (M === 0) return h;
          var F = P(h, c, E) - u;
          h -= F / M;
        }
        return h;
      }
      function f(u) {
        this._p = u, this._mSampleValues = d ? new Float32Array(l) : new Array(l), this._precomputed = false, this.get = this.get.bind(this);
      }
      return f.prototype = { get: function(h) {
        var c = this._p[0], E = this._p[1], x = this._p[2], M = this._p[3];
        return this._precomputed || this._precompute(), c === E && x === M ? h : h === 0 ? 0 : h === 1 ? 1 : P(this._getTForX(h), E, M);
      }, _precompute: function() {
        var h = this._p[0], c = this._p[1], E = this._p[2], x = this._p[3];
        this._precomputed = true, (h !== c || E !== x) && this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var h = this._p[0], c = this._p[2], E = 0; E < l; ++E) this._mSampleValues[E] = P(E * o, h, c);
      }, _getTForX: function(h) {
        for (var c = this._p[0], E = this._p[2], x = this._mSampleValues, M = 0, F = 1, I = l - 1; F !== I && x[F] <= h; ++F) M += o;
        --F;
        var G = (h - x[F]) / (x[F + 1] - x[F]), R = M + G * o, V = y(R, c, E);
        return V >= s ? A(h, R, c, E) : V === 0 ? R : v(h, M, M + o, c, E);
      } }, t;
    }(), pooling = /* @__PURE__ */ function() {
      function t(e) {
        return e.concat(createSizedArray(e.length));
      }
      return { double: t };
    }(), poolFactory = /* @__PURE__ */ function() {
      return function(t, e, r) {
        var i = 0, s = t, n = createSizedArray(s), a = { newElement: l, release: o };
        function l() {
          var d;
          return i ? (i -= 1, d = n[i]) : d = e(), d;
        }
        function o(d) {
          i === s && (n = pooling.double(n), s *= 2), r && r(d), n[i] = d, i += 1;
        }
        return a;
      };
    }(), bezierLengthPool = function() {
      function t() {
        return { addedLength: 0, percents: createTypedArray("float32", getDefaultCurveSegments()), lengths: createTypedArray("float32", getDefaultCurveSegments()) };
      }
      return poolFactory(8, t);
    }(), segmentsLengthPool = function() {
      function t() {
        return { lengths: [], totalLength: 0 };
      }
      function e(r) {
        var i, s = r.lengths.length;
        for (i = 0; i < s; i += 1) bezierLengthPool.release(r.lengths[i]);
        r.lengths.length = 0;
      }
      return poolFactory(8, t, e);
    }();
    function bezFunction() {
      var t = Math;
      function e(p, P, y, v, A, f) {
        var u = p * v + P * A + y * f - A * v - f * p - y * P;
        return u > -1e-3 && u < 1e-3;
      }
      function r(p, P, y, v, A, f, u, h, c) {
        if (y === 0 && f === 0 && c === 0) return e(p, P, v, A, u, h);
        var E = t.sqrt(t.pow(v - p, 2) + t.pow(A - P, 2) + t.pow(f - y, 2)), x = t.sqrt(t.pow(u - p, 2) + t.pow(h - P, 2) + t.pow(c - y, 2)), M = t.sqrt(t.pow(u - v, 2) + t.pow(h - A, 2) + t.pow(c - f, 2)), F;
        return E > x ? E > M ? F = E - x - M : F = M - x - E : M > x ? F = M - x - E : F = x - E - M, F > -1e-4 && F < 1e-4;
      }
      var i = /* @__PURE__ */ function() {
        return function(p, P, y, v) {
          var A = getDefaultCurveSegments(), f, u, h, c, E, x = 0, M, F = [], I = [], G = bezierLengthPool.newElement();
          for (h = y.length, f = 0; f < A; f += 1) {
            for (E = f / (A - 1), M = 0, u = 0; u < h; u += 1) c = bmPow(1 - E, 3) * p[u] + 3 * bmPow(1 - E, 2) * E * y[u] + 3 * (1 - E) * bmPow(E, 2) * v[u] + bmPow(E, 3) * P[u], F[u] = c, I[u] !== null && (M += bmPow(F[u] - I[u], 2)), I[u] = F[u];
            M && (M = bmSqrt(M), x += M), G.percents[f] = E, G.lengths[f] = x;
          }
          return G.addedLength = x, G;
        };
      }();
      function s(p) {
        var P = segmentsLengthPool.newElement(), y = p.c, v = p.v, A = p.o, f = p.i, u, h = p._length, c = P.lengths, E = 0;
        for (u = 0; u < h - 1; u += 1) c[u] = i(v[u], v[u + 1], A[u], f[u + 1]), E += c[u].addedLength;
        return y && h && (c[u] = i(v[u], v[0], A[u], f[0]), E += c[u].addedLength), P.totalLength = E, P;
      }
      function n(p) {
        this.segmentLength = 0, this.points = new Array(p);
      }
      function a(p, P) {
        this.partialLength = p, this.point = P;
      }
      var l = /* @__PURE__ */ function() {
        var p = {};
        return function(P, y, v, A) {
          var f = (P[0] + "_" + P[1] + "_" + y[0] + "_" + y[1] + "_" + v[0] + "_" + v[1] + "_" + A[0] + "_" + A[1]).replace(/\./g, "p");
          if (!p[f]) {
            var u = getDefaultCurveSegments(), h, c, E, x, M, F = 0, I, G, R = null;
            P.length === 2 && (P[0] !== y[0] || P[1] !== y[1]) && e(P[0], P[1], y[0], y[1], P[0] + v[0], P[1] + v[1]) && e(P[0], P[1], y[0], y[1], y[0] + A[0], y[1] + A[1]) && (u = 2);
            var V = new n(u);
            for (E = v.length, h = 0; h < u; h += 1) {
              for (G = createSizedArray(E), M = h / (u - 1), I = 0, c = 0; c < E; c += 1) x = bmPow(1 - M, 3) * P[c] + 3 * bmPow(1 - M, 2) * M * (P[c] + v[c]) + 3 * (1 - M) * bmPow(M, 2) * (y[c] + A[c]) + bmPow(M, 3) * y[c], G[c] = x, R !== null && (I += bmPow(G[c] - R[c], 2));
              I = bmSqrt(I), F += I, V.points[h] = new a(I, G), R = G;
            }
            V.segmentLength = F, p[f] = V;
          }
          return p[f];
        };
      }();
      function o(p, P) {
        var y = P.percents, v = P.lengths, A = y.length, f = bmFloor((A - 1) * p), u = p * P.addedLength, h = 0;
        if (f === A - 1 || f === 0 || u === v[f]) return y[f];
        for (var c = v[f] > u ? -1 : 1, E = true; E; ) if (v[f] <= u && v[f + 1] > u ? (h = (u - v[f]) / (v[f + 1] - v[f]), E = false) : f += c, f < 0 || f >= A - 1) {
          if (f === A - 1) return y[f];
          E = false;
        }
        return y[f] + (y[f + 1] - y[f]) * h;
      }
      function d(p, P, y, v, A, f) {
        var u = o(A, f), h = 1 - u, c = t.round((h * h * h * p[0] + (u * h * h + h * u * h + h * h * u) * y[0] + (u * u * h + h * u * u + u * h * u) * v[0] + u * u * u * P[0]) * 1e3) / 1e3, E = t.round((h * h * h * p[1] + (u * h * h + h * u * h + h * h * u) * y[1] + (u * u * h + h * u * u + u * h * u) * v[1] + u * u * u * P[1]) * 1e3) / 1e3;
        return [c, E];
      }
      var g = createTypedArray("float32", 8);
      function _(p, P, y, v, A, f, u) {
        A < 0 ? A = 0 : A > 1 && (A = 1);
        var h = o(A, u);
        f = f > 1 ? 1 : f;
        var c = o(f, u), E, x = p.length, M = 1 - h, F = 1 - c, I = M * M * M, G = h * M * M * 3, R = h * h * M * 3, V = h * h * h, L = M * M * F, D = h * M * F + M * h * F + M * M * c, w = h * h * F + M * h * c + h * M * c, S = h * h * c, T = M * F * F, m2 = h * F * F + M * c * F + M * F * c, b = h * c * F + M * c * c + h * F * c, C = h * c * c, k = F * F * F, B = c * F * F + F * c * F + F * F * c, z = c * c * F + F * c * c + c * F * c, N = c * c * c;
        for (E = 0; E < x; E += 1) g[E * 4] = t.round((I * p[E] + G * y[E] + R * v[E] + V * P[E]) * 1e3) / 1e3, g[E * 4 + 1] = t.round((L * p[E] + D * y[E] + w * v[E] + S * P[E]) * 1e3) / 1e3, g[E * 4 + 2] = t.round((T * p[E] + m2 * y[E] + b * v[E] + C * P[E]) * 1e3) / 1e3, g[E * 4 + 3] = t.round((k * p[E] + B * y[E] + z * v[E] + N * P[E]) * 1e3) / 1e3;
        return g;
      }
      return { getSegmentsLength: s, getNewSegment: _, getPointInSegment: d, buildBezierData: l, pointOnLine2D: e, pointOnLine3D: r };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(t, e) {
      var r = this.offsetTime, i;
      this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
      for (var s = e.lastIndex, n = s, a = this.keyframes.length - 1, l = true, o, d, g; l; ) {
        if (o = this.keyframes[n], d = this.keyframes[n + 1], n === a - 1 && t >= d.t - r) {
          o.h && (o = d), s = 0;
          break;
        }
        if (d.t - r > t) {
          s = n;
          break;
        }
        n < a - 1 ? n += 1 : (s = 0, l = false);
      }
      g = this.keyframesMetadata[n] || {};
      var _, p, P, y, v, A, f = d.t - r, u = o.t - r, h;
      if (o.to) {
        g.bezierData || (g.bezierData = bez.buildBezierData(o.s, d.s || o.e, o.to, o.ti));
        var c = g.bezierData;
        if (t >= f || t < u) {
          var E = t >= f ? c.points.length - 1 : 0;
          for (p = c.points[E].point.length, _ = 0; _ < p; _ += 1) i[_] = c.points[E].point[_];
        } else {
          g.__fnct ? A = g.__fnct : (A = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, g.__fnct = A), P = A((t - u) / (f - u));
          var x = c.segmentLength * P, M, F = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastAddedLength : 0;
          for (v = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastPoint : 0, l = true, y = c.points.length; l; ) {
            if (F += c.points[v].partialLength, x === 0 || P === 0 || v === c.points.length - 1) {
              for (p = c.points[v].point.length, _ = 0; _ < p; _ += 1) i[_] = c.points[v].point[_];
              break;
            } else if (x >= F && x < F + c.points[v + 1].partialLength) {
              for (M = (x - F) / c.points[v + 1].partialLength, p = c.points[v].point.length, _ = 0; _ < p; _ += 1) i[_] = c.points[v].point[_] + (c.points[v + 1].point[_] - c.points[v].point[_]) * M;
              break;
            }
            v < y - 1 ? v += 1 : l = false;
          }
          e._lastPoint = v, e._lastAddedLength = F - c.points[v].partialLength, e._lastKeyframeIndex = n;
        }
      } else {
        var I, G, R, V, L;
        if (a = o.s.length, h = d.s || o.e, this.sh && o.h !== 1) if (t >= f) i[0] = h[0], i[1] = h[1], i[2] = h[2];
        else if (t <= u) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
        else {
          var D = createQuaternion(o.s), w = createQuaternion(h), S = (t - u) / (f - u);
          quaternionToEuler(i, slerp(D, w, S));
        }
        else for (n = 0; n < a; n += 1) o.h !== 1 && (t >= f ? P = 1 : t < u ? P = 0 : (o.o.x.constructor === Array ? (g.__fnct || (g.__fnct = []), g.__fnct[n] ? A = g.__fnct[n] : (I = o.o.x[n] === void 0 ? o.o.x[0] : o.o.x[n], G = o.o.y[n] === void 0 ? o.o.y[0] : o.o.y[n], R = o.i.x[n] === void 0 ? o.i.x[0] : o.i.x[n], V = o.i.y[n] === void 0 ? o.i.y[0] : o.i.y[n], A = BezierFactory.getBezierEasing(I, G, R, V).get, g.__fnct[n] = A)) : g.__fnct ? A = g.__fnct : (I = o.o.x, G = o.o.y, R = o.i.x, V = o.i.y, A = BezierFactory.getBezierEasing(I, G, R, V).get, o.keyframeMetadata = A), P = A((t - u) / (f - u)))), h = d.s || o.e, L = o.h === 1 ? o.s[n] : o.s[n] + (h[n] - o.s[n]) * P, this.propType === "multidimensional" ? i[n] = L : i = L;
      }
      return e.lastIndex = s, i;
    }
    function slerp(t, e, r) {
      var i = [], s = t[0], n = t[1], a = t[2], l = t[3], o = e[0], d = e[1], g = e[2], _ = e[3], p, P, y, v, A;
      return P = s * o + n * d + a * g + l * _, P < 0 && (P = -P, o = -o, d = -d, g = -g, _ = -_), 1 - P > 1e-6 ? (p = Math.acos(P), y = Math.sin(p), v = Math.sin((1 - r) * p) / y, A = Math.sin(r * p) / y) : (v = 1 - r, A = r), i[0] = v * s + A * o, i[1] = v * n + A * d, i[2] = v * a + A * g, i[3] = v * l + A * _, i;
    }
    function quaternionToEuler(t, e) {
      var r = e[0], i = e[1], s = e[2], n = e[3], a = Math.atan2(2 * i * n - 2 * r * s, 1 - 2 * i * i - 2 * s * s), l = Math.asin(2 * r * i + 2 * s * n), o = Math.atan2(2 * r * n - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
      t[0] = a / degToRads, t[1] = l / degToRads, t[2] = o / degToRads;
    }
    function createQuaternion(t) {
      var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2), n = Math.cos(r / 2), a = Math.cos(i / 2), l = Math.sin(e / 2), o = Math.sin(r / 2), d = Math.sin(i / 2), g = s * n * a - l * o * d, _ = l * o * a + s * n * d, p = l * n * a + s * o * d, P = s * o * a - l * n * d;
      return [_, p, P, g];
    }
    function getValueAtCurrentTime() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var i = this.interpolateValue(t, this._caching);
        this.pv = i;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function setVValue(t) {
      var e;
      if (this.propType === "unidimensional") e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = true);
      else for (var r = 0, i = this.v.length; r < i; ) e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = true), r += 1;
    }
    function processEffectsSequence() {
      if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
        if (this.lock) {
          this.setVValue(this.pv);
          return;
        }
        this.lock = true, this._mdf = this._isFirstFrame;
        var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
        for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
        this.setVValue(r), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
      }
    }
    function addEffect(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function ValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = false, this.elem = t, this.container = i, this.comp = t.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(t, e, r, i) {
      this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = false, this.elem = t, this.container = i, this.comp = t.comp, this.k = false, this.kf = false, this.frameId = -1;
      var s, n = e.k.length;
      for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), s = 0; s < n; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
      this._isFirstFrame = true, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function KeyframedValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = true, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(t, e, r, i) {
      this.propType = "multidimensional";
      var s, n = e.k.length, a, l, o, d;
      for (s = 0; s < n - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, l = e.k[s + 1].s, o = e.k[s].to, d = e.k[s].ti, (a.length === 2 && !(a[0] === l[0] && a[1] === l[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], l[0] + d[0], l[1] + d[1]) || a.length === 3 && !(a[0] === l[0] && a[1] === l[1] && a[2] === l[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], l[0] + d[0], l[1] + d[1], l[2] + d[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === l[0] && a[1] === l[1] && o[0] === 0 && o[1] === 0 && d[0] === 0 && d[1] === 0 && (a.length === 2 || a[2] === l[2] && o[2] === 0 && d[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var g = e.k[0].s.length;
      for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), s = 0; s < g; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
      this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", g) }, this.addEffect = addEffect;
    }
    var PropertyFactory = /* @__PURE__ */ function() {
      function t(r, i, s, n, a) {
        i.sid && (i = r.globalData.slotManager.getProp(i));
        var l;
        if (!i.k.length) l = new ValueProperty(r, i, n, a);
        else if (typeof i.k[0] == "number") l = new MultiDimensionalProperty(r, i, n, a);
        else switch (s) {
          case 0:
            l = new KeyframedValueProperty(r, i, n, a);
            break;
          case 1:
            l = new KeyframedMultidimensionalProperty(r, i, n, a);
            break;
        }
        return l.effectsSequence.length && a.addDynamicProperty(l), l;
      }
      var e = { getProp: t };
      return e;
    }();
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = { addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = true);
    }, iterateDynamicProperties: function() {
      this._mdf = false;
      var e, r = this.dynamicProperties.length;
      for (e = 0; e < r; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = true);
    }, initDynamicPropertyContainer: function(e) {
      this.container = e, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
    } };
    var pointPool = function() {
      function t() {
        return createTypedArray("float32", 2);
      }
      return poolFactory(8, t);
    }();
    function ShapePath() {
      this.c = false, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var r = 0; r < e; ) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
    }, ShapePath.prototype.setLength = function(t) {
      for (; this._maxLength < t; ) this.doubleArrayLength();
      this._length = t;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
      var n;
      switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
        case "v":
          n = this.v;
          break;
        case "i":
          n = this.i;
          break;
        case "o":
          n = this.o;
          break;
        default:
          n = [];
          break;
      }
      (!n[i] || n[i] && !s) && (n[i] = pointPool.newElement()), n[i][0] = t, n[i][1] = e;
    }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, n, a, l) {
      this.setXYAt(t, e, "v", a, l), this.setXYAt(r, i, "o", a, l), this.setXYAt(s, n, "i", a, l);
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath();
      t.setPathData(this.c, this._length);
      var e = this.v, r = this.o, i = this.i, s = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, false), s = 1);
      var n = this._length - 1, a = this._length, l;
      for (l = s; l < a; l += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], l, false), n -= 1;
      return t;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = function() {
      function t() {
        return new ShapePath();
      }
      function e(s) {
        var n = s._length, a;
        for (a = 0; a < n; a += 1) pointPool.release(s.v[a]), pointPool.release(s.i[a]), pointPool.release(s.o[a]), s.v[a] = null, s.i[a] = null, s.o[a] = null;
        s._length = 0, s.c = false;
      }
      function r(s) {
        var n = i.newElement(), a, l = s._length === void 0 ? s.v.length : s._length;
        for (n.setLength(l), n.c = s.c, a = 0; a < l; a += 1) n.setTripleAt(s.v[a][0], s.v[a][1], s.o[a][0], s.o[a][1], s.i[a][0], s.i[a][1], a);
        return n;
      }
      var i = poolFactory(4, t, e);
      return i.clone = r, i;
    }();
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
      this._length = 0;
    };
    var shapeCollectionPool = function() {
      var t = { newShapeCollection: s, release: n }, e = 0, r = 4, i = createSizedArray(r);
      function s() {
        var a;
        return e ? (e -= 1, a = i[e]) : a = new ShapeCollection(), a;
      }
      function n(a) {
        var l, o = a._length;
        for (l = 0; l < o; l += 1) shapePool.release(a.shapes[l]);
        a._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = a, e += 1;
      }
      return t;
    }(), ShapePropertyFactory = function() {
      var t = -999999;
      function e(f, u, h) {
        var c = h.lastIndex, E, x, M, F, I, G, R, V, L, D = this.keyframes;
        if (f < D[0].t - this.offsetTime) E = D[0].s[0], M = true, c = 0;
        else if (f >= D[D.length - 1].t - this.offsetTime) E = D[D.length - 1].s ? D[D.length - 1].s[0] : D[D.length - 2].e[0], M = true;
        else {
          for (var w = c, S = D.length - 1, T = true, m2, b, C; T && (m2 = D[w], b = D[w + 1], !(b.t - this.offsetTime > f)); ) w < S - 1 ? w += 1 : T = false;
          if (C = this.keyframesMetadata[w] || {}, M = m2.h === 1, c = w, !M) {
            if (f >= b.t - this.offsetTime) V = 1;
            else if (f < m2.t - this.offsetTime) V = 0;
            else {
              var k;
              C.__fnct ? k = C.__fnct : (k = BezierFactory.getBezierEasing(m2.o.x, m2.o.y, m2.i.x, m2.i.y).get, C.__fnct = k), V = k((f - (m2.t - this.offsetTime)) / (b.t - this.offsetTime - (m2.t - this.offsetTime)));
            }
            x = b.s ? b.s[0] : m2.e[0];
          }
          E = m2.s[0];
        }
        for (G = u._length, R = E.i[0].length, h.lastIndex = c, F = 0; F < G; F += 1) for (I = 0; I < R; I += 1) L = M ? E.i[F][I] : E.i[F][I] + (x.i[F][I] - E.i[F][I]) * V, u.i[F][I] = L, L = M ? E.o[F][I] : E.o[F][I] + (x.o[F][I] - E.o[F][I]) * V, u.o[F][I] = L, L = M ? E.v[F][I] : E.v[F][I] + (x.v[F][I] - E.v[F][I]) * V, u.v[F][I] = L;
      }
      function r() {
        var f = this.comp.renderedFrame - this.offsetTime, u = this.keyframes[0].t - this.offsetTime, h = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, c = this._caching.lastFrame;
        return c !== t && (c < u && f < u || c > h && f > h) || (this._caching.lastIndex = c < f ? this._caching.lastIndex : 0, this.interpolateShape(f, this.pv, this._caching)), this._caching.lastFrame = f, this.pv;
      }
      function i() {
        this.paths = this.localShapeCollection;
      }
      function s(f, u) {
        if (f._length !== u._length || f.c !== u.c) return false;
        var h, c = f._length;
        for (h = 0; h < c; h += 1) if (f.v[h][0] !== u.v[h][0] || f.v[h][1] !== u.v[h][1] || f.o[h][0] !== u.o[h][0] || f.o[h][1] !== u.o[h][1] || f.i[h][0] !== u.i[h][0] || f.i[h][1] !== u.i[h][1]) return false;
        return true;
      }
      function n(f) {
        s(this.v, f) || (this.v = shapePool.clone(f), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
      }
      function a() {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (!this.effectsSequence.length) {
            this._mdf = false;
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = true, this._mdf = false;
          var f;
          this.kf ? f = this.pv : this.data.ks ? f = this.data.ks.k : f = this.data.pt.k;
          var u, h = this.effectsSequence.length;
          for (u = 0; u < h; u += 1) f = this.effectsSequence[u](f);
          this.setVValue(f), this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
      function l(f, u, h) {
        this.propType = "shape", this.comp = f.comp, this.container = f, this.elem = f, this.data = u, this.k = false, this.kf = false, this._mdf = false;
        var c = h === 3 ? u.pt.k : u.ks.k;
        this.v = shapePool.clone(c), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
      }
      function o(f) {
        this.effectsSequence.push(f), this.container.addDynamicProperty(this);
      }
      l.prototype.interpolateShape = e, l.prototype.getValue = a, l.prototype.setVValue = n, l.prototype.addEffect = o;
      function d(f, u, h) {
        this.propType = "shape", this.comp = f.comp, this.elem = f, this.container = f, this.offsetTime = f.data.st, this.keyframes = h === 3 ? u.pt.k : u.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
        var c = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, c), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [r.bind(this)];
      }
      d.prototype.getValue = a, d.prototype.interpolateShape = e, d.prototype.setVValue = n, d.prototype.addEffect = o;
      var g = function() {
        var f = roundCorner;
        function u(h, c) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = c.d, this.elem = h, this.comp = h.comp, this.frameId = -1, this.initDynamicPropertyContainer(h), this.p = PropertyFactory.getProp(h, c.p, 1, 0, this), this.s = PropertyFactory.getProp(h, c.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
        }
        return u.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var c = this.p.v[0], E = this.p.v[1], x = this.s.v[0] / 2, M = this.s.v[1] / 2, F = this.d !== 3, I = this.v;
          I.v[0][0] = c, I.v[0][1] = E - M, I.v[1][0] = F ? c + x : c - x, I.v[1][1] = E, I.v[2][0] = c, I.v[2][1] = E + M, I.v[3][0] = F ? c - x : c + x, I.v[3][1] = E, I.i[0][0] = F ? c - x * f : c + x * f, I.i[0][1] = E - M, I.i[1][0] = F ? c + x : c - x, I.i[1][1] = E - M * f, I.i[2][0] = F ? c + x * f : c - x * f, I.i[2][1] = E + M, I.i[3][0] = F ? c - x : c + x, I.i[3][1] = E + M * f, I.o[0][0] = F ? c + x * f : c - x * f, I.o[0][1] = E - M, I.o[1][0] = F ? c + x : c - x, I.o[1][1] = E + M * f, I.o[2][0] = F ? c - x * f : c + x * f, I.o[2][1] = E + M, I.o[3][0] = F ? c - x : c + x, I.o[3][1] = E - M * f;
        } }, extendPrototype([DynamicPropertyContainer], u), u;
      }(), _ = function() {
        function f(u, h) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = u, this.comp = u.comp, this.data = h, this.frameId = -1, this.d = h.d, this.initDynamicPropertyContainer(u), h.sy === 1 ? (this.ir = PropertyFactory.getProp(u, h.ir, 0, 0, this), this.is = PropertyFactory.getProp(u, h.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(u, h.pt, 0, 0, this), this.p = PropertyFactory.getProp(u, h.p, 1, 0, this), this.r = PropertyFactory.getProp(u, h.r, 0, degToRads, this), this.or = PropertyFactory.getProp(u, h.or, 0, 0, this), this.os = PropertyFactory.getProp(u, h.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
        }
        return f.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var h = Math.floor(this.pt.v) * 2, c = Math.PI * 2 / h, E = true, x = this.or.v, M = this.ir.v, F = this.os.v, I = this.is.v, G = 2 * Math.PI * x / (h * 2), R = 2 * Math.PI * M / (h * 2), V, L, D, w, S = -Math.PI / 2;
          S += this.r.v;
          var T = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, V = 0; V < h; V += 1) {
            L = E ? x : M, D = E ? F : I, w = E ? G : R;
            var m2 = L * Math.cos(S), b = L * Math.sin(S), C = m2 === 0 && b === 0 ? 0 : b / Math.sqrt(m2 * m2 + b * b), k = m2 === 0 && b === 0 ? 0 : -m2 / Math.sqrt(m2 * m2 + b * b);
            m2 += +this.p.v[0], b += +this.p.v[1], this.v.setTripleAt(m2, b, m2 - C * w * D * T, b - k * w * D * T, m2 + C * w * D * T, b + k * w * D * T, V, true), E = !E, S += c * T;
          }
        }, convertPolygonToPath: function() {
          var h = Math.floor(this.pt.v), c = Math.PI * 2 / h, E = this.or.v, x = this.os.v, M = 2 * Math.PI * E / (h * 4), F, I = -Math.PI * 0.5, G = this.data.d === 3 ? -1 : 1;
          for (I += this.r.v, this.v._length = 0, F = 0; F < h; F += 1) {
            var R = E * Math.cos(I), V = E * Math.sin(I), L = R === 0 && V === 0 ? 0 : V / Math.sqrt(R * R + V * V), D = R === 0 && V === 0 ? 0 : -R / Math.sqrt(R * R + V * V);
            R += +this.p.v[0], V += +this.p.v[1], this.v.setTripleAt(R, V, R - L * M * x * G, V - D * M * x * G, R + L * M * x * G, V + D * M * x * G, F, true), I += c * G;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, extendPrototype([DynamicPropertyContainer], f), f;
      }(), p = function() {
        function f(u, h) {
          this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = u, this.comp = u.comp, this.frameId = -1, this.d = h.d, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, h.p, 1, 0, this), this.s = PropertyFactory.getProp(u, h.s, 1, 0, this), this.r = PropertyFactory.getProp(u, h.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
        }
        return f.prototype = { convertRectToPath: function() {
          var h = this.p.v[0], c = this.p.v[1], E = this.s.v[0] / 2, x = this.s.v[1] / 2, M = bmMin(E, x, this.r.v), F = M * (1 - roundCorner);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + E, c - x + M, h + E, c - x + M, h + E, c - x + F, 0, true), this.v.setTripleAt(h + E, c + x - M, h + E, c + x - F, h + E, c + x - M, 1, true), M !== 0 ? (this.v.setTripleAt(h + E - M, c + x, h + E - M, c + x, h + E - F, c + x, 2, true), this.v.setTripleAt(h - E + M, c + x, h - E + F, c + x, h - E + M, c + x, 3, true), this.v.setTripleAt(h - E, c + x - M, h - E, c + x - M, h - E, c + x - F, 4, true), this.v.setTripleAt(h - E, c - x + M, h - E, c - x + F, h - E, c - x + M, 5, true), this.v.setTripleAt(h - E + M, c - x, h - E + M, c - x, h - E + F, c - x, 6, true), this.v.setTripleAt(h + E - M, c - x, h + E - F, c - x, h + E - M, c - x, 7, true)) : (this.v.setTripleAt(h - E, c + x, h - E + F, c + x, h - E, c + x, 2), this.v.setTripleAt(h - E, c - x, h - E, c - x + F, h - E, c - x, 3))) : (this.v.setTripleAt(h + E, c - x + M, h + E, c - x + F, h + E, c - x + M, 0, true), M !== 0 ? (this.v.setTripleAt(h + E - M, c - x, h + E - M, c - x, h + E - F, c - x, 1, true), this.v.setTripleAt(h - E + M, c - x, h - E + F, c - x, h - E + M, c - x, 2, true), this.v.setTripleAt(h - E, c - x + M, h - E, c - x + M, h - E, c - x + F, 3, true), this.v.setTripleAt(h - E, c + x - M, h - E, c + x - F, h - E, c + x - M, 4, true), this.v.setTripleAt(h - E + M, c + x, h - E + M, c + x, h - E + F, c + x, 5, true), this.v.setTripleAt(h + E - M, c + x, h + E - F, c + x, h + E - M, c + x, 6, true), this.v.setTripleAt(h + E, c + x - M, h + E, c + x - M, h + E, c + x - F, 7, true)) : (this.v.setTripleAt(h - E, c - x, h - E + F, c - x, h - E, c - x, 1, true), this.v.setTripleAt(h - E, c + x, h - E, c + x - F, h - E, c + x, 2, true), this.v.setTripleAt(h + E, c + x, h + E - F, c + x, h + E, c + x, 3, true)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: i }, extendPrototype([DynamicPropertyContainer], f), f;
      }();
      function P(f, u, h) {
        var c;
        if (h === 3 || h === 4) {
          var E = h === 3 ? u.pt : u.ks, x = E.k;
          x.length ? c = new d(f, u, h) : c = new l(f, u, h);
        } else h === 5 ? c = new p(f, u) : h === 6 ? c = new g(f, u) : h === 7 && (c = new _(f, u));
        return c.k && f.addDynamicProperty(c), c;
      }
      function y() {
        return l;
      }
      function v() {
        return d;
      }
      var A = {};
      return A.getShapeProp = P, A.getConstructorFunction = y, A.getKeyframedConstructorFunction = v, A;
    }();
    var Matrix = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
      function s() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function n(m2) {
        if (m2 === 0) return this;
        var b = t(m2), C = e(m2);
        return this._t(b, -C, 0, 0, C, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function a(m2) {
        if (m2 === 0) return this;
        var b = t(m2), C = e(m2);
        return this._t(1, 0, 0, 0, 0, b, -C, 0, 0, C, b, 0, 0, 0, 0, 1);
      }
      function l(m2) {
        if (m2 === 0) return this;
        var b = t(m2), C = e(m2);
        return this._t(b, 0, C, 0, 0, 1, 0, 0, -C, 0, b, 0, 0, 0, 0, 1);
      }
      function o(m2) {
        if (m2 === 0) return this;
        var b = t(m2), C = e(m2);
        return this._t(b, -C, 0, 0, C, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function d(m2, b) {
        return this._t(1, b, m2, 1, 0, 0);
      }
      function g(m2, b) {
        return this.shear(r(m2), r(b));
      }
      function _(m2, b) {
        var C = t(b), k = e(b);
        return this._t(C, k, 0, 0, -k, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(m2), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(C, -k, 0, 0, k, C, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function p(m2, b, C) {
        return !C && C !== 0 && (C = 1), m2 === 1 && b === 1 && C === 1 ? this : this._t(m2, 0, 0, 0, 0, b, 0, 0, 0, 0, C, 0, 0, 0, 0, 1);
      }
      function P(m2, b, C, k, B, z, N, H, j, W, X, Q, Y, $, K, q) {
        return this.props[0] = m2, this.props[1] = b, this.props[2] = C, this.props[3] = k, this.props[4] = B, this.props[5] = z, this.props[6] = N, this.props[7] = H, this.props[8] = j, this.props[9] = W, this.props[10] = X, this.props[11] = Q, this.props[12] = Y, this.props[13] = $, this.props[14] = K, this.props[15] = q, this;
      }
      function y(m2, b, C) {
        return C = C || 0, m2 !== 0 || b !== 0 || C !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, m2, b, C, 1) : this;
      }
      function v(m2, b, C, k, B, z, N, H, j, W, X, Q, Y, $, K, q) {
        var O = this.props;
        if (m2 === 1 && b === 0 && C === 0 && k === 0 && B === 0 && z === 1 && N === 0 && H === 0 && j === 0 && W === 0 && X === 1 && Q === 0) return O[12] = O[12] * m2 + O[15] * Y, O[13] = O[13] * z + O[15] * $, O[14] = O[14] * X + O[15] * K, O[15] *= q, this._identityCalculated = false, this;
        var et = O[0], nt = O[1], rt = O[2], tt = O[3], it = O[4], st = O[5], Z = O[6], at = O[7], ot = O[8], U = O[9], ht = O[10], J = O[11], lt = O[12], ft = O[13], pt = O[14], ut = O[15];
        return O[0] = et * m2 + nt * B + rt * j + tt * Y, O[1] = et * b + nt * z + rt * W + tt * $, O[2] = et * C + nt * N + rt * X + tt * K, O[3] = et * k + nt * H + rt * Q + tt * q, O[4] = it * m2 + st * B + Z * j + at * Y, O[5] = it * b + st * z + Z * W + at * $, O[6] = it * C + st * N + Z * X + at * K, O[7] = it * k + st * H + Z * Q + at * q, O[8] = ot * m2 + U * B + ht * j + J * Y, O[9] = ot * b + U * z + ht * W + J * $, O[10] = ot * C + U * N + ht * X + J * K, O[11] = ot * k + U * H + ht * Q + J * q, O[12] = lt * m2 + ft * B + pt * j + ut * Y, O[13] = lt * b + ft * z + pt * W + ut * $, O[14] = lt * C + ft * N + pt * X + ut * K, O[15] = lt * k + ft * H + pt * Q + ut * q, this._identityCalculated = false, this;
      }
      function A(m2) {
        var b = m2.props;
        return this.transform(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7], b[8], b[9], b[10], b[11], b[12], b[13], b[14], b[15]);
      }
      function f() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = true), this._identity;
      }
      function u(m2) {
        for (var b = 0; b < 16; ) {
          if (m2.props[b] !== this.props[b]) return false;
          b += 1;
        }
        return true;
      }
      function h(m2) {
        var b;
        for (b = 0; b < 16; b += 1) m2.props[b] = this.props[b];
        return m2;
      }
      function c(m2) {
        var b;
        for (b = 0; b < 16; b += 1) this.props[b] = m2[b];
      }
      function E(m2, b, C) {
        return { x: m2 * this.props[0] + b * this.props[4] + C * this.props[8] + this.props[12], y: m2 * this.props[1] + b * this.props[5] + C * this.props[9] + this.props[13], z: m2 * this.props[2] + b * this.props[6] + C * this.props[10] + this.props[14] };
      }
      function x(m2, b, C) {
        return m2 * this.props[0] + b * this.props[4] + C * this.props[8] + this.props[12];
      }
      function M(m2, b, C) {
        return m2 * this.props[1] + b * this.props[5] + C * this.props[9] + this.props[13];
      }
      function F(m2, b, C) {
        return m2 * this.props[2] + b * this.props[6] + C * this.props[10] + this.props[14];
      }
      function I() {
        var m2 = this.props[0] * this.props[5] - this.props[1] * this.props[4], b = this.props[5] / m2, C = -this.props[1] / m2, k = -this.props[4] / m2, B = this.props[0] / m2, z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / m2, N = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / m2, H = new Matrix();
        return H.props[0] = b, H.props[1] = C, H.props[4] = k, H.props[5] = B, H.props[12] = z, H.props[13] = N, H;
      }
      function G(m2) {
        var b = this.getInverseMatrix();
        return b.applyToPointArray(m2[0], m2[1], m2[2] || 0);
      }
      function R(m2) {
        var b, C = m2.length, k = [];
        for (b = 0; b < C; b += 1) k[b] = G(m2[b]);
        return k;
      }
      function V(m2, b, C) {
        var k = createTypedArray("float32", 6);
        if (this.isIdentity()) k[0] = m2[0], k[1] = m2[1], k[2] = b[0], k[3] = b[1], k[4] = C[0], k[5] = C[1];
        else {
          var B = this.props[0], z = this.props[1], N = this.props[4], H = this.props[5], j = this.props[12], W = this.props[13];
          k[0] = m2[0] * B + m2[1] * N + j, k[1] = m2[0] * z + m2[1] * H + W, k[2] = b[0] * B + b[1] * N + j, k[3] = b[0] * z + b[1] * H + W, k[4] = C[0] * B + C[1] * N + j, k[5] = C[0] * z + C[1] * H + W;
        }
        return k;
      }
      function L(m2, b, C) {
        var k;
        return this.isIdentity() ? k = [m2, b, C] : k = [m2 * this.props[0] + b * this.props[4] + C * this.props[8] + this.props[12], m2 * this.props[1] + b * this.props[5] + C * this.props[9] + this.props[13], m2 * this.props[2] + b * this.props[6] + C * this.props[10] + this.props[14]], k;
      }
      function D(m2, b) {
        if (this.isIdentity()) return m2 + "," + b;
        var C = this.props;
        return Math.round((m2 * C[0] + b * C[4] + C[12]) * 100) / 100 + "," + Math.round((m2 * C[1] + b * C[5] + C[13]) * 100) / 100;
      }
      function w() {
        for (var m2 = 0, b = this.props, C = "matrix3d(", k = 1e4; m2 < 16; ) C += i(b[m2] * k) / k, C += m2 === 15 ? ")" : ",", m2 += 1;
        return C;
      }
      function S(m2) {
        var b = 1e4;
        return m2 < 1e-6 && m2 > 0 || m2 > -1e-6 && m2 < 0 ? i(m2 * b) / b : m2;
      }
      function T() {
        var m2 = this.props, b = S(m2[0]), C = S(m2[1]), k = S(m2[4]), B = S(m2[5]), z = S(m2[12]), N = S(m2[13]);
        return "matrix(" + b + "," + C + "," + k + "," + B + "," + z + "," + N + ")";
      }
      return function() {
        this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = l, this.rotateZ = o, this.skew = g, this.skewFromAxis = _, this.shear = d, this.scale = p, this.setTransform = P, this.translate = y, this.transform = v, this.multiply = A, this.applyToPoint = E, this.applyToX = x, this.applyToY = M, this.applyToZ = F, this.applyToPointArray = L, this.applyToTriplePoints = V, this.applyToPointStringified = D, this.toCSS = w, this.to2dCSS = T, this.clone = h, this.cloneFromProps = c, this.equals = u, this.inversePoints = R, this.inversePoint = G, this.getInverseMatrix = I, this._t = this.transform, this.isIdentity = f, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
        return typeof r;
      } : _typeof$3 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$3(t);
    }
    var lottie = {};
    function setLocation(t) {
      setLocationHref(t);
    }
    function searchAnimations() {
      animationManager.searchAnimations();
    }
    function setSubframeRendering(t) {
      setSubframeEnabled(t);
    }
    function setPrefix(t) {
      setIdPrefix(t);
    }
    function loadAnimation(t) {
      return animationManager.loadAnimation(t);
    }
    function setQuality(t) {
      if (typeof t == "string") switch (t) {
        case "high":
          setDefaultCurveSegments(200);
          break;
        default:
        case "medium":
          setDefaultCurveSegments(50);
          break;
        case "low":
          setDefaultCurveSegments(10);
          break;
      }
      else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
    }
    function inBrowser() {
      return typeof navigator < "u";
    }
    function installPlugin(t, e) {
      t === "expressions" && setExpressionsPlugin(e);
    }
    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t) {
      for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
        var i = e[r].split("=");
        if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1]);
      }
      return null;
    }
    var queryString = "";
    {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      !((typeof exports > "u" ? "undefined" : _typeof$3(exports)) === "object" && typeof module < "u") && !(typeof define == "function" && define.amd) && (window.bodymovin = lottie);
    } catch (t) {
    }
    var ShapeModifiers = function() {
      var t = {}, e = {};
      t.registerModifier = r, t.getModifier = i;
      function r(s, n) {
        e[s] || (e[s] = n);
      }
      function i(s, n, a) {
        return new e[s](n, a);
      }
      return t;
    }();
    function ShapeModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier);
    function TrimModifier() {
    }
    extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
      var n = [];
      e <= 1 ? n.push({ s: t, e }) : t >= 1 ? n.push({ s: t - 1, e: e - 1 }) : (n.push({ s: t, e: 1 }), n.push({ s: 0, e: e - 1 }));
      var a = [], l, o = n.length, d;
      for (l = 0; l < o; l += 1) if (d = n[l], !(d.e * s < i || d.s * s > i + r)) {
        var g, _;
        d.s * s <= i ? g = 0 : g = (d.s * s - i) / r, d.e * s >= i + r ? _ = 1 : _ = (d.e * s - i) / r, a.push([g, _]);
      }
      return a.length || a.push([0, 0]), a;
    }, TrimModifier.prototype.releasePathsData = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
      return t.length = 0, t;
    }, TrimModifier.prototype.processShapes = function(t) {
      var e, r;
      if (this._mdf || t) {
        var i = this.o.v % 360 / 360;
        if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, e > r) {
          var s = e;
          e = r, r = s;
        }
        e = Math.round(e * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = e, this.eValue = r;
      } else e = this.sValue, r = this.eValue;
      var n, a, l = this.shapes.length, o, d, g, _, p, P = 0;
      if (r === e) for (a = 0; a < l; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = true, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (r === 1 && e === 0 || r === 0 && e === 1) {
        if (this._mdf) for (a = 0; a < l; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = true;
      } else {
        var y = [], v, A;
        for (a = 0; a < l; a += 1) if (v = this.shapes[a], !v.shape._mdf && !this._mdf && !t && this.m !== 2) v.shape.paths = v.localShapeCollection;
        else {
          if (n = v.shape.paths, d = n._length, p = 0, !v.shape._mdf && v.pathsData.length) p = v.totalShapeLength;
          else {
            for (g = this.releasePathsData(v.pathsData), o = 0; o < d; o += 1) _ = bez.getSegmentsLength(n.shapes[o]), g.push(_), p += _.totalLength;
            v.totalShapeLength = p, v.pathsData = g;
          }
          P += p, v.shape._mdf = true;
        }
        var f = e, u = r, h = 0, c;
        for (a = l - 1; a >= 0; a -= 1) if (v = this.shapes[a], v.shape._mdf) {
          for (A = v.localShapeCollection, A.releaseShapes(), this.m === 2 && l > 1 ? (c = this.calculateShapeEdges(e, r, v.totalShapeLength, h, P), h += v.totalShapeLength) : c = [[f, u]], d = c.length, o = 0; o < d; o += 1) {
            f = c[o][0], u = c[o][1], y.length = 0, u <= 1 ? y.push({ s: v.totalShapeLength * f, e: v.totalShapeLength * u }) : f >= 1 ? y.push({ s: v.totalShapeLength * (f - 1), e: v.totalShapeLength * (u - 1) }) : (y.push({ s: v.totalShapeLength * f, e: v.totalShapeLength }), y.push({ s: 0, e: v.totalShapeLength * (u - 1) }));
            var E = this.addShapes(v, y[0]);
            if (y[0].s !== y[0].e) {
              if (y.length > 1) {
                var x = v.shape.paths.shapes[v.shape.paths._length - 1];
                if (x.c) {
                  var M = E.pop();
                  this.addPaths(E, A), E = this.addShapes(v, y[1], M);
                } else this.addPaths(E, A), E = this.addShapes(v, y[1]);
              }
              this.addPaths(E, A);
            }
          }
          v.shape.paths = A;
        }
      }
    }, TrimModifier.prototype.addPaths = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1) e.addShape(t[r]);
    }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, n, a) {
      s.setXYAt(e[0], e[1], "o", n), s.setXYAt(r[0], r[1], "i", n + 1), a && s.setXYAt(t[0], t[1], "v", n), s.setXYAt(i[0], i[1], "v", n + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
      e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
    }, TrimModifier.prototype.addShapes = function(t, e, r) {
      var i = t.pathsData, s = t.shape.paths.shapes, n, a = t.shape.paths._length, l, o, d = 0, g, _, p, P, y = [], v, A = true;
      for (r ? (_ = r._length, v = r._length) : (r = shapePool.newElement(), _ = 0, v = 0), y.push(r), n = 0; n < a; n += 1) {
        for (p = i[n].lengths, r.c = s[n].c, o = s[n].c ? p.length : p.length + 1, l = 1; l < o; l += 1) if (g = p[l - 1], d + g.addedLength < e.s) d += g.addedLength, r.c = false;
        else if (d > e.e) {
          r.c = false;
          break;
        } else e.s <= d && e.e >= d + g.addedLength ? (this.addSegment(s[n].v[l - 1], s[n].o[l - 1], s[n].i[l], s[n].v[l], r, _, A), A = false) : (P = bez.getNewSegment(s[n].v[l - 1], s[n].v[l], s[n].o[l - 1], s[n].i[l], (e.s - d) / g.addedLength, (e.e - d) / g.addedLength, p[l - 1]), this.addSegmentFromArray(P, r, _, A), A = false, r.c = false), d += g.addedLength, _ += 1;
        if (s[n].c && p.length) {
          if (g = p[l - 1], d <= e.e) {
            var f = p[l - 1].addedLength;
            e.s <= d && e.e >= d + f ? (this.addSegment(s[n].v[l - 1], s[n].o[l - 1], s[n].i[0], s[n].v[0], r, _, A), A = false) : (P = bez.getNewSegment(s[n].v[l - 1], s[n].v[0], s[n].o[l - 1], s[n].i[0], (e.s - d) / f, (e.e - d) / f, p[l - 1]), this.addSegmentFromArray(P, r, _, A), A = false, r.c = false);
          } else r.c = false;
          d += g.addedLength, _ += 1;
        }
        if (r._length && (r.setXYAt(r.v[v][0], r.v[v][1], "i", v), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
        n < a - 1 && (r = shapePool.newElement(), A = true, y.push(r), _ = 0);
      }
      return y;
    };
    function PuckerAndBloatModifier() {
    }
    extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
      var r = e / 100, i = [0, 0], s = t._length, n = 0;
      for (n = 0; n < s; n += 1) i[0] += t.v[n][0], i[1] += t.v[n][1];
      i[0] /= s, i[1] /= s;
      var a = shapePool.newElement();
      a.c = t.c;
      var l, o, d, g, _, p;
      for (n = 0; n < s; n += 1) l = t.v[n][0] + (i[0] - t.v[n][0]) * r, o = t.v[n][1] + (i[1] - t.v[n][1]) * r, d = t.o[n][0] + (i[0] - t.o[n][0]) * -r, g = t.o[n][1] + (i[1] - t.o[n][1]) * -r, _ = t.i[n][0] + (i[0] - t.i[n][0]) * -r, p = t.i[n][1] + (i[1] - t.i[n][1]) * -r, a.setTripleAt(l, o, d, g, _, p, n);
      return a;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amount.v;
      if (a !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), l.shape._mdf = true, e = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(e[s], a));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    var TransformPropertyFactory = function() {
      var t = [0, 0];
      function e(o) {
        var d = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || d, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function r(o) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || o) {
            var d;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var g, _;
              if (d = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (g = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / d, 0), _ = this.p.getValueAtTime(this.p.keyframes[0].t / d, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (g = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / d, 0), _ = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / d, 0)) : (g = this.p.pv, _ = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / d, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                g = [], _ = [];
                var p = this.px, P = this.py;
                p._caching.lastFrame + p.offsetTime <= p.keyframes[0].t ? (g[0] = p.getValueAtTime((p.keyframes[0].t + 0.01) / d, 0), g[1] = P.getValueAtTime((P.keyframes[0].t + 0.01) / d, 0), _[0] = p.getValueAtTime(p.keyframes[0].t / d, 0), _[1] = P.getValueAtTime(P.keyframes[0].t / d, 0)) : p._caching.lastFrame + p.offsetTime >= p.keyframes[p.keyframes.length - 1].t ? (g[0] = p.getValueAtTime(p.keyframes[p.keyframes.length - 1].t / d, 0), g[1] = P.getValueAtTime(P.keyframes[P.keyframes.length - 1].t / d, 0), _[0] = p.getValueAtTime((p.keyframes[p.keyframes.length - 1].t - 0.01) / d, 0), _[1] = P.getValueAtTime((P.keyframes[P.keyframes.length - 1].t - 0.01) / d, 0)) : (g = [p.pv, P.pv], _[0] = p.getValueAtTime((p._caching.lastFrame + p.offsetTime - 0.01) / d, p.offsetTime), _[1] = P.getValueAtTime((P._caching.lastFrame + P.offsetTime - 0.01) / d, P.offsetTime));
              } else _ = t, g = _;
              this.v.rotate(-Math.atan2(g[1] - _[1], g[0] - _[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function i() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else return;
        if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else return;
        if (this.sk) if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
        else return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
      }
      function s() {
      }
      function n(o) {
        this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = true;
      }
      function a(o, d, g) {
        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = d, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(g || o), d.p && d.p.s ? (this.px = PropertyFactory.getProp(o, d.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, d.p.y, 0, 0, this), d.p.z && (this.pz = PropertyFactory.getProp(o, d.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, d.p || { k: [0, 0, 0] }, 1, 0, this), d.rx) {
          if (this.rx = PropertyFactory.getProp(o, d.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, d.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, d.rz, 0, degToRads, this), d.or.k[0].ti) {
            var _, p = d.or.k.length;
            for (_ = 0; _ < p; _ += 1) d.or.k[_].to = null, d.or.k[_].ti = null;
          }
          this.or = PropertyFactory.getProp(o, d.or, 1, degToRads, this), this.or.sh = true;
        } else this.r = PropertyFactory.getProp(o, d.r || { k: 0 }, 0, degToRads, this);
        d.sk && (this.sk = PropertyFactory.getProp(o, d.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, d.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, d.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(o, d.s || { k: [100, 100, 100] }, 1, 0.01, this), d.o ? this.o = PropertyFactory.getProp(o, d.o, 0, 0.01, o) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
      }
      a.prototype = { applyToMatrix: e, getValue: r, precalculateMatrix: i, autoOrient: s }, extendPrototype([DynamicPropertyContainer], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
      function l(o, d, g) {
        return new a(o, d, g);
      }
      return { getTransformProperty: l };
    }();
    function RepeaterModifier() {
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, n) {
      var a = n ? -1 : 1, l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
      t.translate(i.p.v[0] * a * s, i.p.v[1] * a * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * a * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(n ? 1 / l : l, n ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
    }, RepeaterModifier.prototype.init = function(t, e, r, i) {
      for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0; ) r -= 1, this._elements.unshift(e[r]);
      this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, RepeaterModifier.prototype.resetElements = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) t[e]._processed = false, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, RepeaterModifier.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1) t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e);
    }, RepeaterModifier.prototype.processShapes = function(t) {
      var e, r, i, s, n, a = false;
      if (this._mdf || t) {
        var l = Math.ceil(this.c.v);
        if (this._groups.length < l) {
          for (; this._groups.length < l; ) {
            var o = { it: this.cloneElements(this._elements), ty: "gr" };
            o.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), a = true;
        }
        n = 0;
        var d;
        for (i = 0; i <= this._groups.length - 1; i += 1) {
          if (d = n < l, this._groups[i]._render = d, this.changeGroupRender(this._groups[i].it, d), !d) {
            var g = this.elemsData[i].it, _ = g[g.length - 1];
            _.transform.op.v !== 0 ? (_.transform.op._mdf = true, _.transform.op.v = 0) : _.transform.op._mdf = false;
          }
          n += 1;
        }
        this._currentCopies = l;
        var p = this.o.v, P = p % 1, y = p > 0 ? Math.floor(p) : Math.ceil(p), v = this.pMatrix.props, A = this.rMatrix.props, f = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var u = 0;
        if (p > 0) {
          for (; u < y; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), u += 1;
          P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, P, false), u += P);
        } else if (p < 0) {
          for (; u > y; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), u -= 1;
          P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -P, true), u -= P);
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, n = this._currentCopies;
        for (var h, c; n; ) {
          if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, c = r.length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), u !== 0) {
            for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), h = 0; h < c; h += 1) r[h] = this.matrix.props[h];
            this.matrix.reset();
          } else for (this.matrix.reset(), h = 0; h < c; h += 1) r[h] = this.matrix.props[h];
          u += 1, n -= 1, i += s;
        }
      } else for (n = this._currentCopies, i = 0, s = 1; n; ) e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, n -= 1, i += s;
      return a;
    }, RepeaterModifier.prototype.addShape = function() {
    };
    function RoundCornersModifier() {
    }
    extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
      var r = shapePool.newElement();
      r.c = t.c;
      var i, s = t._length, n, a, l, o, d, g, _ = 0, p, P, y, v, A, f;
      for (i = 0; i < s; i += 1) n = t.v[i], l = t.o[i], a = t.i[i], n[0] === l[0] && n[1] === l[1] && n[0] === a[0] && n[1] === a[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(n[0], n[1], l[0], l[1], a[0], a[1], _), _ += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1], d = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), g = d ? Math.min(d / 2, e) / d : 0, A = n[0] + (o[0] - n[0]) * g, p = A, f = n[1] - (n[1] - o[1]) * g, P = f, y = p - (p - n[0]) * roundCorner, v = P - (P - n[1]) * roundCorner, r.setTripleAt(p, P, y, v, A, f, _), _ += 1, i === s - 1 ? o = t.v[0] : o = t.v[i + 1], d = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), g = d ? Math.min(d / 2, e) / d : 0, y = n[0] + (o[0] - n[0]) * g, p = y, v = n[1] + (o[1] - n[1]) * g, P = v, A = p - (p - n[0]) * roundCorner, f = P - (P - n[1]) * roundCorner, r.setTripleAt(p, P, y, v, A, f, _), _ += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], _), _ += 1);
      return r;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.rd.v;
      if (a !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), l.shape._mdf = true, e = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(e[s], a));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function floatEqual(t, e) {
      return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
    }
    function floatZero(t) {
      return Math.abs(t) <= 1e-5;
    }
    function lerp(t, e, r) {
      return t * (1 - r) + e * r;
    }
    function lerpPoint(t, e, r) {
      return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
    }
    function quadRoots(t, e, r) {
      if (t === 0) return [];
      var i = e * e - 4 * t * r;
      if (i < 0) return [];
      var s = -e / (2 * t);
      if (i === 0) return [s];
      var n = Math.sqrt(i) / (2 * t);
      return [s - n, s + n];
    }
    function polynomialCoefficients(t, e, r, i) {
      return [-t + 3 * e - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t];
    }
    function singlePoint(t) {
      return new PolynomialBezier(t, t, t, t, false);
    }
    function PolynomialBezier(t, e, r, i, s) {
      s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
      var n = polynomialCoefficients(t[0], e[0], r[0], i[0]), a = polynomialCoefficients(t[1], e[1], r[1], i[1]);
      this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [t, e, r, i];
    }
    PolynomialBezier.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, PolynomialBezier.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(t)) return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (r < 0) return [];
      var i = Math.sqrt(r);
      return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(s) {
        return s > 0 && s < 1;
      });
    }, PolynomialBezier.prototype.split = function(t) {
      if (t <= 0) return [singlePoint(this.points[0]), this];
      if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
      var e = lerpPoint(this.points[0], this.points[1], t), r = lerpPoint(this.points[1], this.points[2], t), i = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, r, t), n = lerpPoint(r, i, t), a = lerpPoint(s, n, t);
      return [new PolynomialBezier(this.points[0], e, s, a, true), new PolynomialBezier(a, n, i, this.points[3], true)];
    };
    function extrema(t, e) {
      var r = t.points[0][e], i = t.points[t.points.length - 1][e];
      if (r > i) {
        var s = i;
        i = r, r = s;
      }
      for (var n = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), a = 0; a < n.length; a += 1) if (n[a] > 0 && n[a] < 1) {
        var l = t.point(n[a])[e];
        l < r ? r = l : l > i && (i = l);
      }
      return { min: r, max: i };
    }
    PolynomialBezier.prototype.bounds = function() {
      return { x: extrema(this, 0), y: extrema(this, 1) };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var t = this.bounds();
      return { left: t.x.min, right: t.x.max, top: t.y.min, bottom: t.y.max, width: t.x.max - t.x.min, height: t.y.max - t.y.min, cx: (t.x.max + t.x.min) / 2, cy: (t.y.max + t.y.min) / 2 };
    };
    function intersectData(t, e, r) {
      var i = t.boundingBox();
      return { cx: i.cx, cy: i.cy, width: i.width, height: i.height, bez: t, t: (e + r) / 2, t1: e, t2: r };
    }
    function splitData(t) {
      var e = t.bez.split(0.5);
      return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
    }
    function boxIntersect(t, e) {
      return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
    }
    function intersectsImpl(t, e, r, i, s, n) {
      if (boxIntersect(t, e)) {
        if (r >= n || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
          s.push([t.t, e.t]);
          return;
        }
        var a = splitData(t), l = splitData(e);
        intersectsImpl(a[0], l[0], r + 1, i, s, n), intersectsImpl(a[0], l[1], r + 1, i, s, n), intersectsImpl(a[1], l[0], r + 1, i, s, n), intersectsImpl(a[1], l[1], r + 1, i, s, n);
      }
    }
    PolynomialBezier.prototype.intersections = function(t, e, r) {
      e === void 0 && (e = 2), r === void 0 && (r = 7);
      var i = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i;
    }, PolynomialBezier.shapeSegment = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], true);
    }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], true);
    };
    function crossProduct(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function lineIntersection(t, e, r, i) {
      var s = [t[0], t[1], 1], n = [e[0], e[1], 1], a = [r[0], r[1], 1], l = [i[0], i[1], 1], o = crossProduct(crossProduct(s, n), crossProduct(a, l));
      return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]];
    }
    function polarOffset(t, e, r) {
      return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
    }
    function pointDistance(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function pointEqual(t, e) {
      return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
    }
    function ZigZagModifier() {
    }
    extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function setPoint(t, e, r, i, s, n, a) {
      var l = r - Math.PI / 2, o = r + Math.PI / 2, d = e[0] + Math.cos(r) * i * s, g = e[1] - Math.sin(r) * i * s;
      t.setTripleAt(d, g, d + Math.cos(l) * n, g - Math.sin(l) * n, d + Math.cos(o) * a, g - Math.sin(o) * a, t.length());
    }
    function getPerpendicularVector(t, e) {
      var r = [e[0] - t[0], e[1] - t[1]], i = -Math.PI * 0.5, s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
      return s;
    }
    function getProjectingAngle(t, e) {
      var r = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), s = t.v[r], n = t.v[i], a = getPerpendicularVector(s, n);
      return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
    }
    function zigZagCorner(t, e, r, i, s, n, a) {
      var l = getProjectingAngle(e, r), o = e.v[r % e._length], d = e.v[r === 0 ? e._length - 1 : r - 1], g = e.v[(r + 1) % e._length], _ = n === 2 ? Math.sqrt(Math.pow(o[0] - d[0], 2) + Math.pow(o[1] - d[1], 2)) : 0, p = n === 2 ? Math.sqrt(Math.pow(o[0] - g[0], 2) + Math.pow(o[1] - g[1], 2)) : 0;
      setPoint(t, e.v[r % e._length], l, a, i, p / ((s + 1) * 2), _ / ((s + 1) * 2));
    }
    function zigZagSegment(t, e, r, i, s, n) {
      for (var a = 0; a < i; a += 1) {
        var l = (a + 1) / (i + 1), o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, d = e.normalAngle(l), g = e.point(l);
        setPoint(t, g, d, n, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), n = -n;
      }
      return n;
    }
    ZigZagModifier.prototype.processPath = function(t, e, r, i) {
      var s = t._length, n = shapePool.newElement();
      if (n.c = t.c, t.c || (s -= 1), s === 0) return n;
      var a = -1, l = PolynomialBezier.shapeSegment(t, 0);
      zigZagCorner(n, t, 0, e, r, i, a);
      for (var o = 0; o < s; o += 1) a = zigZagSegment(n, l, e, r, i, -a), o === s - 1 && !t.c ? l = null : l = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(n, t, o + 1, e, r, i, a);
      return n;
    }, ZigZagModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
      if (a !== 0) {
        var d, g;
        for (r = 0; r < i; r += 1) {
          if (d = this.shapes[r], g = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for (g.releaseShapes(), d.shape._mdf = true, e = d.shape.paths.shapes, n = d.shape.paths._length, s = 0; s < n; s += 1) g.addShape(this.processPath(e[s], a, l, o));
          d.shape.paths = d.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function linearOffset(t, e, r) {
      var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [polarOffset(t, i, r), polarOffset(e, i, r)];
    }
    function offsetSegment(t, e) {
      var r, i, s, n, a, l, o;
      o = linearOffset(t.points[0], t.points[1], e), r = o[0], i = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], n = o[1], o = linearOffset(t.points[2], t.points[3], e), a = o[0], l = o[1];
      var d = lineIntersection(r, i, s, n);
      d === null && (d = i);
      var g = lineIntersection(a, l, s, n);
      return g === null && (g = a), new PolynomialBezier(r, d, g, l);
    }
    function joinLines(t, e, r, i, s) {
      var n = e.points[3], a = r.points[0];
      if (i === 3 || pointEqual(n, a)) return n;
      if (i === 2) {
        var l = -e.tangentAngle(1), o = -r.tangentAngle(0) + Math.PI, d = lineIntersection(n, polarOffset(n, l + Math.PI / 2, 100), a, polarOffset(a, l + Math.PI / 2, 100)), g = d ? pointDistance(d, n) : pointDistance(n, a) / 2, _ = polarOffset(n, l, 2 * g * roundCorner);
        return t.setXYAt(_[0], _[1], "o", t.length() - 1), _ = polarOffset(a, o, 2 * g * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], _[0], _[1], t.length()), a;
      }
      var p = pointEqual(n, e.points[2]) ? e.points[0] : e.points[2], P = pointEqual(a, r.points[1]) ? r.points[3] : r.points[1], y = lineIntersection(p, n, a, P);
      return y && pointDistance(y, n) < s ? (t.setTripleAt(y[0], y[1], y[0], y[1], y[0], y[1], t.length()), y) : n;
    }
    function getIntersection(t, e) {
      var r = t.intersections(e);
      return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
    }
    function pruneSegmentIntersection(t, e) {
      var r = t.slice(), i = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
      return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [r, i];
    }
    function pruneIntersections(t) {
      for (var e, r = 1; r < t.length; r += 1) e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
      return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function offsetSegmentSplit(t, e) {
      var r = t.inflectionPoints(), i, s, n, a;
      if (r.length === 0) return [offsetSegment(t, e)];
      if (r.length === 1 || floatEqual(r[1], 1)) return n = t.split(r[0]), i = n[0], s = n[1], [offsetSegment(i, e), offsetSegment(s, e)];
      n = t.split(r[0]), i = n[0];
      var l = (r[1] - r[0]) / (1 - r[0]);
      return n = n[1].split(l), a = n[0], s = n[1], [offsetSegment(i, e), offsetSegment(a, e), offsetSegment(s, e)];
    }
    function OffsetPathModifier() {
    }
    extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
      var s = shapePool.newElement();
      s.c = t.c;
      var n = t.length();
      t.c || (n -= 1);
      var a, l, o, d = [];
      for (a = 0; a < n; a += 1) o = PolynomialBezier.shapeSegment(t, a), d.push(offsetSegmentSplit(o, e));
      if (!t.c) for (a = n - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), d.push(offsetSegmentSplit(o, e));
      d = pruneIntersections(d);
      var g = null, _ = null;
      for (a = 0; a < d.length; a += 1) {
        var p = d[a];
        for (_ && (g = joinLines(s, _, p[0], r, i)), _ = p[p.length - 1], l = 0; l < p.length; l += 1) o = p[l], g && pointEqual(o.points[0], g) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), g = o.points[3];
      }
      return d.length && joinLines(s, _, d[0][0], r, i), s;
    }, OffsetPathModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
      if (a !== 0) {
        var d, g;
        for (r = 0; r < i; r += 1) {
          if (d = this.shapes[r], g = d.localShapeCollection, !(!d.shape._mdf && !this._mdf && !t)) for (g.releaseShapes(), d.shape._mdf = true, e = d.shape.paths.shapes, n = d.shape.paths._length, s = 0; s < n; s += 1) g.addShape(this.processPath(e[s], a, o, l));
          d.shape.paths = d.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function getFontProperties(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, n, a = 0; a < s; a += 1) switch (n = e[a].toLowerCase(), n) {
        case "italic":
          i = "italic";
          break;
        case "bold":
          r = "700";
          break;
        case "black":
          r = "900";
          break;
        case "medium":
          r = "500";
          break;
        case "regular":
        case "normal":
          r = "400";
          break;
        case "light":
        case "thin":
          r = "200";
          break;
      }
      return { style: i, weight: t.fWeight || r };
    }
    var FontManager = function() {
      var t = 5e3, e = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, r = [];
      r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var i = 127988, s = 917631, n = 917601, a = 917626, l = 65039, o = 8205, d = 127462, g = 127487, _ = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function p(S) {
        var T = S.split(","), m2, b = T.length, C = [];
        for (m2 = 0; m2 < b; m2 += 1) T[m2] !== "sans-serif" && T[m2] !== "monospace" && C.push(T[m2]);
        return C.join(",");
      }
      function P(S, T) {
        var m2 = createTag("span");
        m2.setAttribute("aria-hidden", true), m2.style.fontFamily = T;
        var b = createTag("span");
        b.innerText = "giItT1WQy@!-/#", m2.style.position = "absolute", m2.style.left = "-10000px", m2.style.top = "-10000px", m2.style.fontSize = "300px", m2.style.fontVariant = "normal", m2.style.fontStyle = "normal", m2.style.fontWeight = "normal", m2.style.letterSpacing = "0", m2.appendChild(b), document.body.appendChild(m2);
        var C = b.offsetWidth;
        return b.style.fontFamily = p(S) + ", " + T, { node: b, w: C, parent: m2 };
      }
      function y() {
        var S, T = this.fonts.length, m2, b, C = T;
        for (S = 0; S < T; S += 1) this.fonts[S].loaded ? C -= 1 : this.fonts[S].fOrigin === "n" || this.fonts[S].origin === 0 ? this.fonts[S].loaded = true : (m2 = this.fonts[S].monoCase.node, b = this.fonts[S].monoCase.w, m2.offsetWidth !== b ? (C -= 1, this.fonts[S].loaded = true) : (m2 = this.fonts[S].sansCase.node, b = this.fonts[S].sansCase.w, m2.offsetWidth !== b && (C -= 1, this.fonts[S].loaded = true)), this.fonts[S].loaded && (this.fonts[S].sansCase.parent.parentNode.removeChild(this.fonts[S].sansCase.parent), this.fonts[S].monoCase.parent.parentNode.removeChild(this.fonts[S].monoCase.parent)));
        C !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function v(S, T) {
        var m2 = document.body && T ? "svg" : "canvas", b, C = getFontProperties(S);
        if (m2 === "svg") {
          var k = createNS("text");
          k.style.fontSize = "100px", k.setAttribute("font-family", S.fFamily), k.setAttribute("font-style", C.style), k.setAttribute("font-weight", C.weight), k.textContent = "1", S.fClass ? (k.style.fontFamily = "inherit", k.setAttribute("class", S.fClass)) : k.style.fontFamily = S.fFamily, T.appendChild(k), b = k;
        } else {
          var B = new OffscreenCanvas(500, 500).getContext("2d");
          B.font = C.style + " " + C.weight + " 100px " + S.fFamily, b = B;
        }
        function z(N) {
          return m2 === "svg" ? (b.textContent = N, b.getComputedTextLength()) : b.measureText(N).width;
        }
        return { measureText: z };
      }
      function A(S, T) {
        if (!S) {
          this.isLoaded = true;
          return;
        }
        if (this.chars) {
          this.isLoaded = true, this.fonts = S.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = true, S.list.forEach(function(X) {
            X.helper = v(X), X.cache = {};
          }), this.fonts = S.list;
          return;
        }
        var m2 = S.list, b, C = m2.length, k = C;
        for (b = 0; b < C; b += 1) {
          var B = true, z, N;
          if (m2[b].loaded = false, m2[b].monoCase = P(m2[b].fFamily, "monospace"), m2[b].sansCase = P(m2[b].fFamily, "sans-serif"), !m2[b].fPath) m2[b].loaded = true, k -= 1;
          else if (m2[b].fOrigin === "p" || m2[b].origin === 3) {
            if (z = document.querySelectorAll('style[f-forigin="p"][f-family="' + m2[b].fFamily + '"], style[f-origin="3"][f-family="' + m2[b].fFamily + '"]'), z.length > 0 && (B = false), B) {
              var H = createTag("style");
              H.setAttribute("f-forigin", m2[b].fOrigin), H.setAttribute("f-origin", m2[b].origin), H.setAttribute("f-family", m2[b].fFamily), H.type = "text/css", H.innerText = "@font-face {font-family: " + m2[b].fFamily + "; font-style: normal; src: url('" + m2[b].fPath + "');}", T.appendChild(H);
            }
          } else if (m2[b].fOrigin === "g" || m2[b].origin === 1) {
            for (z = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), N = 0; N < z.length; N += 1) z[N].href.indexOf(m2[b].fPath) !== -1 && (B = false);
            if (B) {
              var j = createTag("link");
              j.setAttribute("f-forigin", m2[b].fOrigin), j.setAttribute("f-origin", m2[b].origin), j.type = "text/css", j.rel = "stylesheet", j.href = m2[b].fPath, document.body.appendChild(j);
            }
          } else if (m2[b].fOrigin === "t" || m2[b].origin === 2) {
            for (z = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), N = 0; N < z.length; N += 1) m2[b].fPath === z[N].src && (B = false);
            if (B) {
              var W = createTag("link");
              W.setAttribute("f-forigin", m2[b].fOrigin), W.setAttribute("f-origin", m2[b].origin), W.setAttribute("rel", "stylesheet"), W.setAttribute("href", m2[b].fPath), T.appendChild(W);
            }
          }
          m2[b].helper = v(m2[b], T), m2[b].cache = {}, this.fonts.push(m2[b]);
        }
        k === 0 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function f(S) {
        if (S) {
          this.chars || (this.chars = []);
          var T, m2 = S.length, b, C = this.chars.length, k;
          for (T = 0; T < m2; T += 1) {
            for (b = 0, k = false; b < C; ) this.chars[b].style === S[T].style && this.chars[b].fFamily === S[T].fFamily && this.chars[b].ch === S[T].ch && (k = true), b += 1;
            k || (this.chars.push(S[T]), C += 1);
          }
        }
      }
      function u(S, T, m2) {
        for (var b = 0, C = this.chars.length; b < C; ) {
          if (this.chars[b].ch === S && this.chars[b].style === T && this.chars[b].fFamily === m2) return this.chars[b];
          b += 1;
        }
        return (typeof S == "string" && S.charCodeAt(0) !== 13 || !S) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", S, T, m2)), e;
      }
      function h(S, T, m2) {
        var b = this.getFontByName(T), C = S;
        if (!b.cache[C]) {
          var k = b.helper;
          if (S === " ") {
            var B = k.measureText("|" + S + "|"), z = k.measureText("||");
            b.cache[C] = (B - z) / 100;
          } else b.cache[C] = k.measureText(S) / 100;
        }
        return b.cache[C] * m2;
      }
      function c(S) {
        for (var T = 0, m2 = this.fonts.length; T < m2; ) {
          if (this.fonts[T].fName === S) return this.fonts[T];
          T += 1;
        }
        return this.fonts[0];
      }
      function E(S) {
        var T = 0, m2 = S.charCodeAt(0);
        if (m2 >= 55296 && m2 <= 56319) {
          var b = S.charCodeAt(1);
          b >= 56320 && b <= 57343 && (T = (m2 - 55296) * 1024 + b - 56320 + 65536);
        }
        return T;
      }
      function x(S, T) {
        var m2 = S.toString(16) + T.toString(16);
        return _.indexOf(m2) !== -1;
      }
      function M(S) {
        return S === o;
      }
      function F(S) {
        return S === l;
      }
      function I(S) {
        var T = E(S);
        return T >= d && T <= g;
      }
      function G(S) {
        return I(S.substr(0, 2)) && I(S.substr(2, 2));
      }
      function R(S) {
        return r.indexOf(S) !== -1;
      }
      function V(S, T) {
        var m2 = E(S.substr(T, 2));
        if (m2 !== i) return false;
        var b = 0;
        for (T += 2; b < 5; ) {
          if (m2 = E(S.substr(T, 2)), m2 < n || m2 > a) return false;
          b += 1, T += 2;
        }
        return E(S.substr(T, 2)) === s;
      }
      function L() {
        this.isLoaded = true;
      }
      var D = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      D.isModifier = x, D.isZeroWidthJoiner = M, D.isFlagEmoji = G, D.isRegionalCode = I, D.isCombinedCharacter = R, D.isRegionalFlag = V, D.isVariationSelector = F, D.BLACK_FLAG_CODE_POINT = i;
      var w = { addChars: f, addFonts: A, getCharData: u, getFontByName: c, measureText: h, checkLoadedFonts: y, setIsLoaded: L };
      return D.prototype = w, D;
    }();
    function SlotManager(t) {
      this.animationData = t;
    }
    SlotManager.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    };
    function slotFactory(t) {
      return new SlotManager(t);
    }
    function RenderableElement() {
    }
    RenderableElement.prototype = { initRenderable: function() {
      this.isInRange = false, this.hidden = false, this.isTransparent = false, this.renderableComponents = [];
    }, addRenderableComponent: function(e) {
      this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e);
    }, removeRenderableComponent: function(e) {
      this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
    }, prepareRenderableFrame: function(e) {
      this.checkLayerLimits(e);
    }, checkTransparency: function() {
      this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
    }, checkLayerLimits: function(e) {
      this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== true && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : this.isInRange !== false && (this.globalData._mdf = true, this.isInRange = false, this.hide());
    }, renderRenderable: function() {
      var e, r = this.renderableComponents.length;
      for (e = 0; e < r; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
    }, sourceRectAtTime: function() {
      return { top: 0, left: 0, width: 100, height: 100 };
    }, getLayerSize: function() {
      return this.data.ty === 5 ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
    } };
    var getBlendMode = /* @__PURE__ */ function() {
      var t = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" };
      return function(e) {
        return t[e] || "";
      };
    }();
    function SliderEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function AngleEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function ColorEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function PointEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function LayerIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function MaskIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function CheckboxEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(t, e) {
      var r = t.ef || [];
      this.effectElements = [];
      var i, s = r.length, n;
      for (i = 0; i < s; i += 1) n = new GroupEffect(r[i], e), this.effectElements.push(n);
    }
    function GroupEffect(t, e) {
      this.init(t, e);
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var r, i = this.data.ef.length, s, n = this.data.ef;
      for (r = 0; r < i; r += 1) {
        switch (s = null, n[r].ty) {
          case 0:
            s = new SliderEffect(n[r], e, this);
            break;
          case 1:
            s = new AngleEffect(n[r], e, this);
            break;
          case 2:
            s = new ColorEffect(n[r], e, this);
            break;
          case 3:
            s = new PointEffect(n[r], e, this);
            break;
          case 4:
          case 7:
            s = new CheckboxEffect(n[r], e, this);
            break;
          case 10:
            s = new LayerIndexEffect(n[r], e, this);
            break;
          case 11:
            s = new MaskIndexEffect(n[r], e, this);
            break;
          case 5:
            s = new EffectsManager(n[r], e);
            break;
          default:
            s = new NoValueEffect(n[r]);
            break;
        }
        s && this.effectElements.push(s);
      }
    };
    function BaseElement() {
    }
    BaseElement.prototype = { checkMasks: function() {
      if (!this.data.hasMask) return false;
      for (var e = 0, r = this.data.masksProperties.length; e < r; ) {
        if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== false) return true;
        e += 1;
      }
      return false;
    }, initExpressions: function() {
      var e = getExpressionInterfaces();
      if (e) {
        var r = e("layer"), i = e("effects"), s = e("shape"), n = e("text"), a = e("comp");
        this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var l = i.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface);
      }
    }, setBlendMode: function() {
      var e = getBlendMode(this.data.bm), r = this.baseElement || this.layerElement;
      r.style["mix-blend-mode"] = e;
    }, initBaseData: function(e, r, i) {
      this.globalData = r, this.comp = i, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } };
    function FrameElement() {
    }
    FrameElement.prototype = { initFrame: function() {
      this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
    }, prepareProperties: function(e, r) {
      var i, s = this.dynamicProperties.length;
      for (i = 0; i < s; i += 1) (r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = true, this._mdf = true));
    }, addDynamicProperty: function(e) {
      this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
    } };
    function FootageElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
    }
    FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var t = getExpressionInterfaces();
      if (t) {
        var e = t("footage");
        this.layerInterface = e(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    };
    function AudioElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = false, this._canPlay = false;
      var i = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
    }
    AudioElement.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder) this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var r = this._volume * this._volumeMultiplier;
      this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = false;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = false, this._canPlay = false;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = true;
    }, AudioElement.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, AudioElement.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    };
    function BaseRenderer() {
    }
    BaseRenderer.prototype.checkLayers = function(t) {
      var e, r = this.layers.length, i;
      for (this.completeLayers = true, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : false;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(t) {
      return new AudioElement(t, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t) {
      this.completeLayers = false;
      var e, r = t.length, i, s = this.layers.length;
      for (e = 0; e < r; e += 1) for (i = 0; i < s; ) {
        if (this.layers[i].id === t[e].id) {
          this.layers[i] = t[e];
          break;
        }
        i += 1;
      }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
      for (var i = this.elements, s = this.layers, n = 0, a = s.length; n < a; ) s[n].ind == e && (!i[n] || i[n] === true ? (this.buildItem(n), this.addPendingElement(t)) : (r.push(i[n]), i[n].setAsParent(), s[n].parent !== void 0 ? this.buildElementParenting(t, s[n].parent, r) : t.setHierarchy(r))), n += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) if (t[e].xt) {
        var i = this.createComp(t[e]);
        i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
      }
    }, BaseRenderer.prototype.getElementById = function(t) {
      var e, r = this.elements.length;
      for (e = 0; e < r; e += 1) if (this.elements[e].data.ind === t) return this.elements[e];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(t) {
      var e = t.shift(), r;
      if (typeof e == "number") r = this.elements[e];
      else {
        var i, s = this.elements.length;
        for (i = 0; i < s; i += 1) if (this.elements[i].data.nm === e) {
          r = this.elements[i];
          break;
        }
      }
      return t.length === 0 ? r : r.getElementByPath(t);
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
    };
    var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
    function TransformElement() {
    }
    TransformElement.prototype = { initTransform: function() {
      var e = new Matrix();
      this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _localMatMdf: false, _opMdf: false, mat: e, localMat: e, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var e, r = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
        if (!this.finalTransform._matMdf) for (; i < s; ) {
          if (this.hierarchy[i].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          i += 1;
        }
        if (this.finalTransform._matMdf) for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < s; i += 1) r.multiply(this.hierarchy[i].finalTransform.mProp.v);
      }
      this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
    }, renderLocalTransform: function() {
      if (this.localTransforms) {
        var e = 0, r = this.localTransforms.length;
        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; e < r; ) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = true), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = true), e += 1;
        if (this.finalTransform._localMatMdf) {
          var i = this.finalTransform.localMat;
          for (this.localTransforms[0].matrix.clone(i), e = 1; e < r; e += 1) {
            var s = this.localTransforms[e].matrix;
            i.multiply(s);
          }
          i.multiply(this.finalTransform.mat);
        }
        if (this.finalTransform._opMdf) {
          var n = this.finalTransform.localOpacity;
          for (e = 0; e < r; e += 1) n *= this.localTransforms[e].opacity * 0.01;
          this.finalTransform.localOpacity = n;
        }
      }
    }, searchEffectTransforms: function() {
      if (this.renderableEffectsManager) {
        var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
        if (e.length) {
          this.localTransforms = [], this.finalTransform.localMat = new Matrix();
          var r = 0, i = e.length;
          for (r = 0; r < i; r += 1) this.localTransforms.push(e[r]);
        }
      }
    }, globalToLocal: function(e) {
      var r = [];
      r.push(this.finalTransform);
      for (var i = true, s = this.comp; i; ) s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = false;
      var n, a = r.length, l;
      for (n = 0; n < a; n += 1) l = r[n].mat.applyToPointArray(0, 0, 0), e = [e[0] - l[0], e[1] - l[1], 0];
      return e;
    }, mHelper: new Matrix() };
    function MaskElement(t, e, r) {
      this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var i = this.globalData.defs, s, n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(n), this.solidPath = "";
      var a, l = this.masksProperties, o = 0, d = [], g, _, p = createElementID(), P, y, v, A, f = "clipPath", u = "clip-path";
      for (s = 0; s < n; s += 1) if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (f = "mask", u = "mask"), (l[s].mode === "s" || l[s].mode === "i") && o === 0 ? (P = createNS("rect"), P.setAttribute("fill", "#ffffff"), P.setAttribute("width", this.element.comp.data.w || 0), P.setAttribute("height", this.element.comp.data.h || 0), d.push(P)) : P = null, a = createNS("path"), l[s].mode === "n") this.viewData[s] = { op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3), elem: a, lastPath: "" }, i.appendChild(a);
      else {
        o += 1, a.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
        var h;
        if (l[s].x.k !== 0 ? (f = "mask", u = "mask", A = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element), h = createElementID(), y = createNS("filter"), y.setAttribute("id", h), v = createNS("feMorphology"), v.setAttribute("operator", "erode"), v.setAttribute("in", "SourceGraphic"), v.setAttribute("radius", "0"), y.appendChild(v), i.appendChild(y), a.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (v = null, A = null), this.storedData[s] = { elem: a, x: A, expan: v, lastPath: "", lastOperator: "", filterId: h, lastRadius: 0 }, l[s].mode === "i") {
          _ = d.length;
          var c = createNS("g");
          for (g = 0; g < _; g += 1) c.appendChild(d[g]);
          var E = createNS("mask");
          E.setAttribute("mask-type", "alpha"), E.setAttribute("id", p + "_" + o), E.appendChild(a), i.appendChild(E), c.setAttribute("mask", "url(" + getLocationHref() + "#" + p + "_" + o + ")"), d.length = 0, d.push(c);
        } else d.push(a);
        l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = { elem: a, lastPath: "", op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3), invRect: P }, this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s]);
      }
      for (this.maskElement = createNS(f), n = d.length, s = 0; s < n; s += 1) this.maskElement.appendChild(d[s]);
      o > 0 && (this.maskElement.setAttribute("id", p), this.element.maskedElement.setAttribute(u, "url(" + getLocationHref() + "#" + p + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    MaskElement.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, MaskElement.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, r, i = this.masksProperties.length;
      for (r = 0; r < i; r += 1) if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
        var s = this.storedData[r].expan;
        this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2));
      }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, MaskElement.prototype.drawPath = function(t, e, r) {
      var i = " M" + e.v[0][0] + "," + e.v[0][1], s, n;
      for (n = e._length, s = 1; s < n; s += 1) i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
      if (e.c && n > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
        var a = "";
        r.elem && (e.c && (a = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", a)), r.lastPath = i;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = r;
      function e(i, s) {
        var n = createNS("filter");
        return n.setAttribute("id", i), s !== true && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n;
      }
      function r() {
        var i = createNS("feColorMatrix");
        return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
      }
      return t;
    }(), featureSupport = function() {
      var t = { maskType: true, svgLumaHidden: true, offscreenCanvas: typeof OffscreenCanvas < "u" };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
    function SVGEffects(t) {
      var e, r = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), n = filtersFactory.createFilter(s, true), a = 0;
      this.filters = [];
      var l;
      for (e = 0; e < i; e += 1) {
        l = null;
        var o = t.data.ef[e].ty;
        if (registeredEffects$1[o]) {
          var d = registeredEffects$1[o].effect;
          l = new d(n, t.effectsManager.effectElements[e], t, idPrefix + a, r), r = idPrefix + a, registeredEffects$1[o].countsAsEffect && (a += 1);
        }
        l && this.filters.push(l);
      }
      a && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    SVGEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
    }, SVGEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    };
    function registerEffect$1(t, e, r) {
      registeredEffects$1[t] = { effect: e, countsAsEffect: r };
    }
    function SVGBaseElement() {
    }
    SVGBaseElement.prototype = { initRendererElement: function() {
      this.layerElement = createNS("g");
    }, createContainerElements: function() {
      this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
      var e = null;
      if (this.data.td) {
        this.matteMasks = {};
        var r = createNS("g");
        r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), e = r, this.globalData.defs.appendChild(r);
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
        var i = createNS("clipPath"), s = createNS("path");
        s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var n = createElementID();
        if (i.setAttribute("id", n), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
          var a = createNS("g");
          a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")");
      }
      this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
    }, getMatte: function(e) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
        var r = this.layerId + "_" + e, i, s, n, a;
        if (e === 1 || e === 3) {
          var l = createNS("mask");
          l.setAttribute("id", r), l.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), this.globalData.defs.appendChild(l), !featureSupport.maskType && e === 1 && (l.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(n), l.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
        } else if (e === 2) {
          var o = createNS("mask");
          o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
          var d = createNS("g");
          o.appendChild(d), i = createElementID(), s = filtersFactory.createFilter(i);
          var g = createNS("feComponentTransfer");
          g.setAttribute("in", "SourceGraphic"), s.appendChild(g);
          var _ = createNS("feFuncA");
          _.setAttribute("type", "table"), _.setAttribute("tableValues", "1.0 0.0"), g.appendChild(_), this.globalData.defs.appendChild(s);
          var p = createNS("rect");
          p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), d.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), d.appendChild(p), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), d.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), d.appendChild(p), a.appendChild(this.layerElement), d.appendChild(a)), this.globalData.defs.appendChild(o);
        }
        this.matteMasks[e] = r;
      }
      return this.matteMasks[e];
    }, setMatte: function(e) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")");
    } };
    function HierarchyElement() {
    }
    HierarchyElement.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = false, this.checkParenting();
    }, setHierarchy: function(e) {
      this.hierarchy = e;
    }, setAsParent: function() {
      this._isParent = true;
    }, checkParenting: function() {
      this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
    } };
    function RenderableDOMElement() {
    }
    (function() {
      var t = { initElement: function(r, i, s) {
        this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
      }, hide: function() {
        if (!this.hidden && (!this.isInRange || this.isTransparent)) {
          var r = this.baseElement || this.layerElement;
          r.style.display = "none", this.hidden = true;
        }
      }, show: function() {
        if (this.isInRange && !this.isTransparent) {
          if (!this.data.hd) {
            var r = this.baseElement || this.layerElement;
            r.style.display = "block";
          }
          this.hidden = false, this._isFirstFrame = true;
        }
      }, renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
      }, renderInnerContent: function() {
      }, prepareFrame: function(r) {
        this._mdf = false, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency();
      }, destroy: function() {
        this.innerElem = null, this.destroyBaseElement();
      } };
      extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement);
    })();
    function IImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e;
    }
    function IShapeElement() {
    }
    IShapeElement.prototype = { addShapeToModifiers: function(e) {
      var r, i = this.shapeModifiers.length;
      for (r = 0; r < i; r += 1) this.shapeModifiers[r].addShape(e);
    }, isShapeInAnimatedModifiers: function(e) {
      for (var r = 0, i = this.shapeModifiers.length; r < i; ) if (this.shapeModifiers[r].isAnimatedWithShape(e)) return true;
      return false;
    }, renderModifiers: function() {
      if (this.shapeModifiers.length) {
        var e, r = this.shapes.length;
        for (e = 0; e < r; e += 1) this.shapes[e].sh.reset();
        r = this.shapeModifiers.length;
        var i;
        for (e = r - 1; e >= 0 && (i = this.shapeModifiers[e].processShapes(this._isFirstFrame), !i); e -= 1) ;
      }
    }, searchProcessedElement: function(e) {
      for (var r = this.processedElements, i = 0, s = r.length; i < s; ) {
        if (r[i].elem === e) return r[i].pos;
        i += 1;
      }
      return 0;
    }, addProcessedElement: function(e, r) {
      for (var i = this.processedElements, s = i.length; s; ) if (s -= 1, i[s].elem === e) {
        i[s].pos = r;
        return;
      }
      i.push(new ProcessedElement(e, r));
    }, prepareFrame: function(e) {
      this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
    } };
    var lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
    function SVGShapeData(t, e, r) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
      for (var i = 0, s = t.length; i < s; ) {
        if (t[i].mProps.dynamicProperties.length) {
          this._isAnimated = true;
          break;
        }
        i += 1;
      }
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = true;
    };
    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = t.hd === true, this.pElem = createNS("path"), this.msElem = null;
    }
    SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = false;
    };
    function DashProperty(t, e, r, i) {
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = false, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
      var s, n = e.length || 0, a;
      for (s = 0; s < n; s += 1) a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = { n: e[s].n, p: a };
      this.k || this.getValue(true), this._isAnimated = this.k;
    }
    DashProperty.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, r = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty);
    function SVGStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
    function SVGFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
    function SVGNoStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
    function GradientProperty(t, e, r) {
      this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
      var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = createTypedArray("float32", i), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
    }
    GradientProperty.prototype.comparePoints = function(t, e) {
      for (var r = 0, i = this.o.length / 2, s; r < i; ) {
        if (s = Math.abs(t[r * 4] - t[e * 4 + r * 2]), s > 0.01) return false;
        r += 1;
      }
      return true;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4) return false;
      if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e; ) {
        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return false;
        t += 1;
      }
      else if (!this.comparePoints(this.data.k.k, this.data.p)) return false;
      return true;
    }, GradientProperty.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
        var e, r = this.data.p * 4, i, s;
        for (e = 0; e < r; e += 1) i = e % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
        if (this.o.length) for (r = this.prop.v.length, e = this.data.p * 4; e < r; e += 1) i = e % 2 === 0 ? 100 : 1, s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s, this._omdf = !t);
        this._mdf = !t;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    function SVGGradientFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
    }
    SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
      this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
      var r = createElementID(), i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
      i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
      var s = [], n, a, l;
      for (l = e.g.p * 4, a = 0; a < l; a += 4) n = createNS("stop"), i.appendChild(n), s.push(n);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, i, s, n = createNS("mask"), a = createNS("path");
        n.appendChild(a);
        var l = createElementID(), o = createElementID();
        n.setAttribute("id", o);
        var d = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        d.setAttribute("id", l), d.setAttribute("spreadMethod", "pad"), d.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var g = this.stops;
        for (i = t.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), d.appendChild(r), g.push(r);
        a.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), t.ty === "gs" && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), this.of = d, this.ms = n, this.ost = g, this.maskId = o, e.msElem = a;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
    function SVGGradientStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(t, e, r) {
      this.transform = { mProps: t, op: e, container: r }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var buildShapeString = function(e, r, i, s) {
      if (r === 0) return "";
      var n = e.o, a = e.i, l = e.v, o, d = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
      for (o = 1; o < r; o += 1) d += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[o][0], a[o][1]) + " " + s.applyToPointStringified(l[o][0], l[o][1]);
      return i && r && (d += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), d += "z"), d;
    }, SVGElementsRenderer = function() {
      var t = new Matrix(), e = new Matrix(), r = { createRenderFunction: i };
      function i(_) {
        switch (_.ty) {
          case "fl":
            return l;
          case "gf":
            return d;
          case "gs":
            return o;
          case "st":
            return g;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return a;
          case "tr":
            return s;
          case "no":
            return n;
          default:
            return null;
        }
      }
      function s(_, p, P) {
        (P || p.transform.op._mdf) && p.transform.container.setAttribute("opacity", p.transform.op.v), (P || p.transform.mProps._mdf) && p.transform.container.setAttribute("transform", p.transform.mProps.v.to2dCSS());
      }
      function n() {
      }
      function a(_, p, P) {
        var y, v, A, f, u, h, c = p.styles.length, E = p.lvl, x, M, F, I;
        for (h = 0; h < c; h += 1) {
          if (f = p.sh._mdf || P, p.styles[h].lvl < E) {
            for (M = e.reset(), F = E - p.styles[h].lvl, I = p.transformers.length - 1; !f && F > 0; ) f = p.transformers[I].mProps._mdf || f, F -= 1, I -= 1;
            if (f) for (F = E - p.styles[h].lvl, I = p.transformers.length - 1; F > 0; ) M.multiply(p.transformers[I].mProps.v), F -= 1, I -= 1;
          } else M = t;
          if (x = p.sh.paths, v = x._length, f) {
            for (A = "", y = 0; y < v; y += 1) u = x.shapes[y], u && u._length && (A += buildShapeString(u, u._length, u.c, M));
            p.caches[h] = A;
          } else A = p.caches[h];
          p.styles[h].d += _.hd === true ? "" : A, p.styles[h]._mdf = f || p.styles[h]._mdf;
        }
      }
      function l(_, p, P) {
        var y = p.style;
        (p.c._mdf || P) && y.pElem.setAttribute("fill", "rgb(" + bmFloor(p.c.v[0]) + "," + bmFloor(p.c.v[1]) + "," + bmFloor(p.c.v[2]) + ")"), (p.o._mdf || P) && y.pElem.setAttribute("fill-opacity", p.o.v);
      }
      function o(_, p, P) {
        d(_, p, P), g(_, p, P);
      }
      function d(_, p, P) {
        var y = p.gf, v = p.g._hasOpacity, A = p.s.v, f = p.e.v;
        if (p.o._mdf || P) {
          var u = _.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          p.style.pElem.setAttribute(u, p.o.v);
        }
        if (p.s._mdf || P) {
          var h = _.t === 1 ? "x1" : "cx", c = h === "x1" ? "y1" : "cy";
          y.setAttribute(h, A[0]), y.setAttribute(c, A[1]), v && !p.g._collapsable && (p.of.setAttribute(h, A[0]), p.of.setAttribute(c, A[1]));
        }
        var E, x, M, F;
        if (p.g._cmdf || P) {
          E = p.cst;
          var I = p.g.c;
          for (M = E.length, x = 0; x < M; x += 1) F = E[x], F.setAttribute("offset", I[x * 4] + "%"), F.setAttribute("stop-color", "rgb(" + I[x * 4 + 1] + "," + I[x * 4 + 2] + "," + I[x * 4 + 3] + ")");
        }
        if (v && (p.g._omdf || P)) {
          var G = p.g.o;
          for (p.g._collapsable ? E = p.cst : E = p.ost, M = E.length, x = 0; x < M; x += 1) F = E[x], p.g._collapsable || F.setAttribute("offset", G[x * 2] + "%"), F.setAttribute("stop-opacity", G[x * 2 + 1]);
        }
        if (_.t === 1) (p.e._mdf || P) && (y.setAttribute("x2", f[0]), y.setAttribute("y2", f[1]), v && !p.g._collapsable && (p.of.setAttribute("x2", f[0]), p.of.setAttribute("y2", f[1])));
        else {
          var R;
          if ((p.s._mdf || p.e._mdf || P) && (R = Math.sqrt(Math.pow(A[0] - f[0], 2) + Math.pow(A[1] - f[1], 2)), y.setAttribute("r", R), v && !p.g._collapsable && p.of.setAttribute("r", R)), p.e._mdf || p.h._mdf || p.a._mdf || P) {
            R || (R = Math.sqrt(Math.pow(A[0] - f[0], 2) + Math.pow(A[1] - f[1], 2)));
            var V = Math.atan2(f[1] - A[1], f[0] - A[0]), L = p.h.v;
            L >= 1 ? L = 0.99 : L <= -1 && (L = -0.99);
            var D = R * L, w = Math.cos(V + p.a.v) * D + A[0], S = Math.sin(V + p.a.v) * D + A[1];
            y.setAttribute("fx", w), y.setAttribute("fy", S), v && !p.g._collapsable && (p.of.setAttribute("fx", w), p.of.setAttribute("fy", S));
          }
        }
      }
      function g(_, p, P) {
        var y = p.style, v = p.d;
        v && (v._mdf || P) && v.dashStr && (y.pElem.setAttribute("stroke-dasharray", v.dashStr), y.pElem.setAttribute("stroke-dashoffset", v.dashoffset[0])), p.c && (p.c._mdf || P) && y.pElem.setAttribute("stroke", "rgb(" + bmFloor(p.c.v[0]) + "," + bmFloor(p.c.v[1]) + "," + bmFloor(p.c.v[2]) + ")"), (p.o._mdf || P) && y.pElem.setAttribute("stroke-opacity", p.o.v), (p.w._mdf || P) && (y.pElem.setAttribute("stroke-width", p.w.v), y.msElem && y.msElem.setAttribute("stroke-width", p.w.v));
      }
      return r;
    }();
    function SVGShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, r, i, s = this.stylesList.length, n, a = [], l = false;
      for (i = 0; i < s; i += 1) {
        for (n = this.stylesList[i], l = false, a.length = 0, t = 0; t < e; t += 1) r = this.shapes[t], r.styles.indexOf(n) !== -1 && (a.push(r), l = r._isAnimated || l);
        a.length > 1 && l && this.setShapesAsAnimated(a);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1) t[e].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
      var r, i = new SVGStyleData(t, e), s = i.pElem;
      if (t.ty === "st") r = new SVGStrokeStyleData(this, t, i);
      else if (t.ty === "fl") r = new SVGFillStyleData(this, t, i);
      else if (t.ty === "gf" || t.ty === "gs") {
        var n = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
        r = new n(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"));
      } else t.ty === "no" && (r = new SVGNoStyleData(this, t, i));
      return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
      var e = new ShapeGroupData();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
      var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
      return this.addToAnimatedContents(t, i), i;
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
      var i = 4;
      t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
      var s = ShapePropertyFactory.getShapeProp(this, t, i, this), n = new SVGShapeData(e, r, s);
      return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
      for (var r = 0, i = this.animatedContents.length; r < i; ) {
        if (this.animatedContents[r].element === e) return;
        r += 1;
      }
      this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t });
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
      var e = t.styles, r, i = this.stylesList.length;
      for (r = 0; r < i; r += 1) this.stylesList[r].closed || e.push(this.stylesList[r]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = true;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, n, a) {
      var l = [].concat(n), o, d = t.length - 1, g, _, p = [], P = [], y, v, A;
      for (o = d; o >= 0; o -= 1) {
        if (A = this.searchProcessedElement(t[o]), A ? e[o] = r[A - 1] : t[o]._render = a, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") A ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), p.push(e[o].style);
        else if (t[o].ty === "gr") {
          if (!A) e[o] = this.createGroupElement(t[o]);
          else for (_ = e[o].it.length, g = 0; g < _; g += 1) e[o].prevViewData[g] = e[o].it[g];
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, l, a), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
        } else t[o].ty === "tr" ? (A || (e[o] = this.createTransformElement(t[o], i)), y = e[o].transform, l.push(y)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (A || (e[o] = this.createShapeElement(t[o], l, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (A ? (v = e[o], v.closed = false) : (v = ShapeModifiers.getModifier(t[o].ty), v.init(this, t[o]), e[o] = v, this.shapeModifiers.push(v)), P.push(v)) : t[o].ty === "rp" && (A ? (v = e[o], v.closed = true) : (v = ShapeModifiers.getModifier(t[o].ty), e[o] = v, v.init(this, t, o, e), this.shapeModifiers.push(v), a = false), P.push(v));
        this.addProcessedElement(t[o], o + 1);
      }
      for (d = p.length, o = 0; o < d; o += 1) p[o].closed = true;
      for (d = P.length, o = 0; o < d; o += 1) P[o].closed = true;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var t, e = this.animatedContents.length, r;
      for (t = 0; t < e; t += 1) r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && r.data !== true && r.fn(r.data, r.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function LetterProps(t, e, r, i, s, n) {
      this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = n, this._mdf = { o: true, sw: !!e, sc: !!r, fc: !!i, m: true, p: true };
    }
    LetterProps.prototype.update = function(t, e, r, i, s, n) {
      this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
      var a = false;
      return this.o !== t && (this.o = t, this._mdf.o = true, a = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, a = true), this.sc !== r && (this.sc = r, this._mdf.sc = true, a = true), this.fc !== i && (this.fc = i, this._mdf.fc = true, a = true), this.m !== s && (this.m = s, this._mdf.m = true, a = true), n.length && (this.p[0] !== n[0] || this.p[1] !== n[1] || this.p[4] !== n[4] || this.p[5] !== n[5] || this.p[12] !== n[12] || this.p[13] !== n[13]) && (this.p = n, this._mdf.p = true, a = true), a;
    };
    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t;
    }, TextProperty.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(t) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, r = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = true, this._mdf = false;
        var i, s = this.effectsSequence.length, n = t || this.data.d.k[this.keysIndex].s;
        for (i = 0; i < s; i += 1) r !== this.keysIndex ? n = this.effectsSequence[i](n, n.t) : n = this.effectsSequence[i](this.currentData, n.t);
        e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); ) r += 1;
      return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(t) {
      for (var e = [], r = 0, i = t.length, s, n, a = false, l = false, o = ""; r < i; ) a = l, l = false, s = t.charCodeAt(r), o = t.charAt(r), FontManager.isCombinedCharacter(s) ? a = true : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (n = t.charCodeAt(r + 1), n >= 56320 && n <= 57343 && (FontManager.isModifier(s, n) ? (o = t.substr(r, 2), a = true) : FontManager.isFlagEmoji(t.substr(r, 4)) ? o = t.substr(r, 4) : o = t.substr(r, 2))) : s > 56319 ? (n = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (a = true)) : FontManager.isZeroWidthJoiner(s) && (a = true, l = true), a ? (e[e.length - 1] += o, a = false) : e.push(o), r += o.length;
      return e;
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = true;
      var e = this.elem.globalData.fontManager, r = this.data, i = [], s, n, a, l = 0, o, d = r.m.g, g = 0, _ = 0, p = 0, P = [], y = 0, v = 0, A, f, u = e.getFontByName(t.f), h, c = 0, E = getFontProperties(u);
      t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;
      var x = t.tr / 1e3 * t.finalSize, M;
      if (t.sz) for (var F = true, I = t.sz[0], G = t.sz[1], R, V; F; ) {
        V = this.buildFinalText(t.t), R = 0, y = 0, n = V.length, x = t.tr / 1e3 * t.finalSize;
        var L = -1;
        for (s = 0; s < n; s += 1) M = V[s].charCodeAt(0), a = false, V[s] === " " ? L = s : (M === 13 || M === 3) && (y = 0, a = true, R += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (h = e.getCharData(V[s], u.fStyle, u.fFamily), c = a ? 0 : h.w * t.finalSize / 100) : c = e.measureText(V[s], t.f, t.finalSize), y + c > I && V[s] !== " " ? (L === -1 ? n += 1 : s = L, R += t.finalLineHeight || t.finalSize * 1.2, V.splice(s, L === s ? 1 : 0, "\r"), L = -1, y = 0) : (y += c, y += x);
        R += u.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && G < R ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = V, n = t.finalText.length, F = false);
      }
      y = -x, c = 0;
      var D = 0, w;
      for (s = 0; s < n; s += 1) if (a = false, w = t.finalText[s], M = w.charCodeAt(0), M === 13 || M === 3 ? (D = 0, P.push(y), v = y > v ? y : v, y = -2 * x, o = "", a = true, p += 1) : o = w, e.chars ? (h = e.getCharData(w, u.fStyle, e.getFontByName(t.f).fFamily), c = a ? 0 : h.w * t.finalSize / 100) : c = e.measureText(o, t.f, t.finalSize), w === " " ? D += c + x : (y += c + x + D, D = 0), i.push({ l: c, an: c, add: g, n: a, anIndexes: [], val: o, line: p, animatorJustifyOffset: 0 }), d == 2) {
        if (g += c, o === "" || o === " " || s === n - 1) {
          for ((o === "" || o === " ") && (g -= c); _ <= s; ) i[_].an = g, i[_].ind = l, i[_].extra = c, _ += 1;
          l += 1, g = 0;
        }
      } else if (d == 3) {
        if (g += c, o === "" || s === n - 1) {
          for (o === "" && (g -= c); _ <= s; ) i[_].an = g, i[_].ind = l, i[_].extra = c, _ += 1;
          g = 0, l += 1;
        }
      } else i[l].ind = l, i[l].extra = 0, l += 1;
      if (t.l = i, v = y > v ? y : v, P.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = v, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0;
      }
      t.lineWidths = P;
      var S = r.a, T, m2;
      f = S.length;
      var b, C, k = [];
      for (A = 0; A < f; A += 1) {
        for (T = S[A], T.a.sc && (t.strokeColorAnim = true), T.a.sw && (t.strokeWidthAnim = true), (T.a.fc || T.a.fh || T.a.fs || T.a.fb) && (t.fillColorAnim = true), C = 0, b = T.s.b, s = 0; s < n; s += 1) m2 = i[s], m2.anIndexes[A] = C, (b == 1 && m2.val !== "" || b == 2 && m2.val !== "" && m2.val !== " " || b == 3 && (m2.n || m2.val == " " || s == n - 1) || b == 4 && (m2.n || s == n - 1)) && (T.s.rn === 1 && k.push(C), C += 1);
        r.a[A].s.totalChars = C;
        var B = -1, z;
        if (T.s.rn === 1) for (s = 0; s < n; s += 1) m2 = i[s], B != m2.anIndexes[A] && (B = m2.anIndexes[A], z = k.splice(Math.floor(Math.random() * k.length), 1)[0]), m2.anIndexes[A] = z;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = u.ascent * t.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var r = this.copyData({}, this.data.d.k[e].s);
      r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
    }, TextProperty.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var t = Math.max, e = Math.min, r = Math.floor;
      function i(n, a) {
        this._currentTextLength = -1, this.k = false, this.data = a, this.elem = n, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(n), this.s = PropertyFactory.getProp(n, a.s || { k: 0 }, 0, 0, this), "e" in a ? this.e = PropertyFactory.getProp(n, a.e, 0, 0, this) : this.e = { v: 100 }, this.o = PropertyFactory.getProp(n, a.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(n, a.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(n, a.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(n, a.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(n, a.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      i.prototype = { getMult: function(a) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var l = 0, o = 0, d = 1, g = 1;
        this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? d = 1 - this.xe.v / 100 : g = 1 + this.xe.v / 100;
        var _ = BezierFactory.getBezierEasing(l, o, d, g).get, p = 0, P = this.finalS, y = this.finalE, v = this.data.sh;
        if (v === 2) y === P ? p = a >= y ? 1 : 0 : p = t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), p = _(p);
        else if (v === 3) y === P ? p = a >= y ? 0 : 1 : p = 1 - t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), p = _(p);
        else if (v === 4) y === P ? p = 0 : (p = t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), p < 0.5 ? p *= 2 : p = 1 - 2 * (p - 0.5)), p = _(p);
        else if (v === 5) {
          if (y === P) p = 0;
          else {
            var A = y - P;
            a = e(t(0, a + 0.5 - P), y - P);
            var f = -A / 2 + a, u = A / 2;
            p = Math.sqrt(1 - f * f / (u * u));
          }
          p = _(p);
        } else v === 6 ? (y === P ? p = 0 : (a = e(t(0, a + 0.5 - P), y - P), p = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (y - P))) / 2), p = _(p)) : (a >= r(P) && (a - P < 0 ? p = t(0, e(e(y, 1) - (P - a), 1)) : p = t(0, e(y - a, 1))), p = _(p));
        if (this.sm.v !== 100) {
          var h = this.sm.v * 0.01;
          h === 0 && (h = 1e-8);
          var c = 0.5 - h * 0.5;
          p < c ? p = 0 : (p = (p - c) / h, p > 1 && (p = 1));
        }
        return p * this.a.v;
      }, getValue: function(a) {
        this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / l, d = this.s.v / l + o, g = this.e.v / l + o;
        if (d > g) {
          var _ = d;
          d = g, g = _;
        }
        this.finalS = d, this.finalE = g;
      } }, extendPrototype([DynamicPropertyContainer], i);
      function s(n, a, l) {
        return new i(n, a);
      }
      return { getTextSelectorProp: s };
    }();
    function TextAnimatorDataProperty(t, e, r) {
      var i = { propType: false }, s = PropertyFactory.getProp, n = e.a;
      this.a = { r: n.r ? s(t, n.r, 0, degToRads, r) : i, rx: n.rx ? s(t, n.rx, 0, degToRads, r) : i, ry: n.ry ? s(t, n.ry, 0, degToRads, r) : i, sk: n.sk ? s(t, n.sk, 0, degToRads, r) : i, sa: n.sa ? s(t, n.sa, 0, degToRads, r) : i, s: n.s ? s(t, n.s, 1, 0.01, r) : i, a: n.a ? s(t, n.a, 1, 0, r) : i, o: n.o ? s(t, n.o, 0, 0.01, r) : i, p: n.p ? s(t, n.p, 1, 0, r) : i, sw: n.sw ? s(t, n.sw, 0, 0, r) : i, sc: n.sc ? s(t, n.sc, 1, 0, r) : i, fc: n.fc ? s(t, n.fc, 1, 0, r) : i, fh: n.fh ? s(t, n.fh, 0, 0, r) : i, fs: n.fs ? s(t, n.fs, 0, 0.01, r) : i, fb: n.fb ? s(t, n.fb, 0, 0.01, r) : i, t: n.t ? s(t, n.t, 0, 0, r) : i }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
    }
    function TextAnimatorProperty(t, e, r) {
      this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(r);
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, r, i = PropertyFactory.getProp;
      for (t = 0; t < e; t += 1) r = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, r, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: i(this._elem, this._textData.p.a, 0, 0, this), f: i(this._elem, this._textData.p.f, 0, 0, this), l: i(this._elem, this._textData.p.l, 0, 0, this), r: i(this._elem, this._textData.p.r, 0, 0, this), p: i(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = false;
        var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, n = this.mHelper, a = this._renderType, l = this.renderedLetters.length, o, d, g, _, p = t.l, P, y, v, A, f, u, h, c, E, x, M, F, I, G, R;
        if (this._hasMaskedPath) {
          if (R = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var V = R.v;
            this._pathData.r.v && (V = V.reverse()), P = { tLength: 0, segments: [] }, _ = V._length - 1;
            var L;
            for (F = 0, g = 0; g < _; g += 1) L = bez.buildBezierData(V.v[g], V.v[g + 1], [V.o[g][0] - V.v[g][0], V.o[g][1] - V.v[g][1]], [V.i[g + 1][0] - V.v[g + 1][0], V.i[g + 1][1] - V.v[g + 1][1]]), P.tLength += L.segmentLength, P.segments.push(L), F += L.segmentLength;
            g = _, R.v.c && (L = bez.buildBezierData(V.v[g], V.v[0], [V.o[g][0] - V.v[g][0], V.o[g][1] - V.v[g][1]], [V.i[0][0] - V.v[0][0], V.i[0][1] - V.v[0][1]]), P.tLength += L.segmentLength, P.segments.push(L), F += L.segmentLength), this._pathData.pi = P;
          }
          if (P = this._pathData.pi, y = this._pathData.f.v, h = 0, u = 1, A = 0, f = true, x = P.segments, y < 0 && R.v.c) for (P.tLength < Math.abs(y) && (y = -Math.abs(y) % P.tLength), h = x.length - 1, E = x[h].points, u = E.length - 1; y < 0; ) y += E[u].partialLength, u -= 1, u < 0 && (h -= 1, E = x[h].points, u = E.length - 1);
          E = x[h].points, c = E[u - 1], v = E[u], M = v.partialLength;
        }
        _ = p.length, o = 0, d = 0;
        var D = t.finalSize * 1.2 * 0.714, w = true, S, T, m2, b, C;
        b = i.length;
        var k, B = -1, z, N, H, j = y, W = h, X = u, Q = -1, Y, $, K, q, O, et, nt, rt, tt = "", it = this.defaultPropsArray, st;
        if (t.j === 2 || t.j === 1) {
          var Z = 0, at = 0, ot = t.j === 2 ? -0.5 : -1, U = 0, ht = true;
          for (g = 0; g < _; g += 1) if (p[g].n) {
            for (Z && (Z += at); U < g; ) p[U].animatorJustifyOffset = Z, U += 1;
            Z = 0, ht = true;
          } else {
            for (m2 = 0; m2 < b; m2 += 1) S = i[m2].a, S.t.propType && (ht && t.j === 2 && (at += S.t.v * ot), T = i[m2].s, k = T.getMult(p[g].anIndexes[m2], s.a[m2].s.totalChars), k.length ? Z += S.t.v * k[0] * ot : Z += S.t.v * k * ot);
            ht = false;
          }
          for (Z && (Z += at); U < g; ) p[U].animatorJustifyOffset = Z, U += 1;
        }
        for (g = 0; g < _; g += 1) {
          if (n.reset(), Y = 1, p[g].n) o = 0, d += t.yOffset, d += w ? 1 : 0, y = j, w = false, this._hasMaskedPath && (h = W, u = X, E = x[h].points, c = E[u - 1], v = E[u], M = v.partialLength, A = 0), tt = "", rt = "", et = "", st = "", it = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (Q !== p[g].line) {
                switch (t.j) {
                  case 1:
                    y += F - t.lineWidths[p[g].line];
                    break;
                  case 2:
                    y += (F - t.lineWidths[p[g].line]) / 2;
                    break;
                }
                Q = p[g].line;
              }
              B !== p[g].ind && (p[B] && (y += p[B].extra), y += p[g].an / 2, B = p[g].ind), y += r[0] * p[g].an * 5e-3;
              var J = 0;
              for (m2 = 0; m2 < b; m2 += 1) S = i[m2].a, S.p.propType && (T = i[m2].s, k = T.getMult(p[g].anIndexes[m2], s.a[m2].s.totalChars), k.length ? J += S.p.v[0] * k[0] : J += S.p.v[0] * k), S.a.propType && (T = i[m2].s, k = T.getMult(p[g].anIndexes[m2], s.a[m2].s.totalChars), k.length ? J += S.a.v[0] * k[0] : J += S.a.v[0] * k);
              for (f = true, this._pathData.a.v && (y = p[0].an * 0.5 + (F - this._pathData.f.v - p[0].an * 0.5 - p[p.length - 1].an * 0.5) * B / (_ - 1), y += this._pathData.f.v); f; ) A + M >= y + J || !E ? (I = (y + J - A) / v.partialLength, N = c.point[0] + (v.point[0] - c.point[0]) * I, H = c.point[1] + (v.point[1] - c.point[1]) * I, n.translate(-r[0] * p[g].an * 5e-3, -(r[1] * D) * 0.01), f = false) : E && (A += v.partialLength, u += 1, u >= E.length && (u = 0, h += 1, x[h] ? E = x[h].points : R.v.c ? (u = 0, h = 0, E = x[h].points) : (A -= v.partialLength, E = null)), E && (c = v, v = E[u], M = v.partialLength));
              z = p[g].an / 2 - p[g].add, n.translate(-z, 0, 0);
            } else z = p[g].an / 2 - p[g].add, n.translate(-z, 0, 0), n.translate(-r[0] * p[g].an * 5e-3, -r[1] * D * 0.01, 0);
            for (m2 = 0; m2 < b; m2 += 1) S = i[m2].a, S.t.propType && (T = i[m2].s, k = T.getMult(p[g].anIndexes[m2], s.a[m2].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? k.length ? y += S.t.v * k[0] : y += S.t.v * k : k.length ? o += S.t.v * k[0] : o += S.t.v * k));
            for (t.strokeWidthAnim && (K = t.sw || 0), t.strokeColorAnim && (t.sc ? $ = [t.sc[0], t.sc[1], t.sc[2]] : $ = [0, 0, 0]), t.fillColorAnim && t.fc && (q = [t.fc[0], t.fc[1], t.fc[2]]), m2 = 0; m2 < b; m2 += 1) S = i[m2].a, S.a.propType && (T = i[m2].s, k = T.getMult(p[g].anIndexes[m2], s.a[m2].s.totalChars), k.length ? n.translate(-S.a.v[0] * k[0], -S.a.v[1] * k[1], S.a.v[2] * k[2]) : n.translate(-S.a.v[0] * k, -S.a.v[1] * k, S.a.v[2] * k));
            for (m2 = 0; m2 < b; m2 += 1) S = i[m2].a, S.s.propType && (T = i[m2].s, k = T.getMult(p[g].anIndexes[m2], s.a[m2].s.totalChars), k.length ? n.scale(1 + (S.s.v[0] - 1) * k[0], 1 + (S.s.v[1] - 1) * k[1], 1) : n.scale(1 + (S.s.v[0] - 1) * k, 1 + (S.s.v[1] - 1) * k, 1));
            for (m2 = 0; m2 < b; m2 += 1) {
              if (S = i[m2].a, T = i[m2].s, k = T.getMult(p[g].anIndexes[m2], s.a[m2].s.totalChars), S.sk.propType && (k.length ? n.skewFromAxis(-S.sk.v * k[0], S.sa.v * k[1]) : n.skewFromAxis(-S.sk.v * k, S.sa.v * k)), S.r.propType && (k.length ? n.rotateZ(-S.r.v * k[2]) : n.rotateZ(-S.r.v * k)), S.ry.propType && (k.length ? n.rotateY(S.ry.v * k[1]) : n.rotateY(S.ry.v * k)), S.rx.propType && (k.length ? n.rotateX(S.rx.v * k[0]) : n.rotateX(S.rx.v * k)), S.o.propType && (k.length ? Y += (S.o.v * k[0] - Y) * k[0] : Y += (S.o.v * k - Y) * k), t.strokeWidthAnim && S.sw.propType && (k.length ? K += S.sw.v * k[0] : K += S.sw.v * k), t.strokeColorAnim && S.sc.propType) for (O = 0; O < 3; O += 1) k.length ? $[O] += (S.sc.v[O] - $[O]) * k[0] : $[O] += (S.sc.v[O] - $[O]) * k;
              if (t.fillColorAnim && t.fc) {
                if (S.fc.propType) for (O = 0; O < 3; O += 1) k.length ? q[O] += (S.fc.v[O] - q[O]) * k[0] : q[O] += (S.fc.v[O] - q[O]) * k;
                S.fh.propType && (k.length ? q = addHueToRGB(q, S.fh.v * k[0]) : q = addHueToRGB(q, S.fh.v * k)), S.fs.propType && (k.length ? q = addSaturationToRGB(q, S.fs.v * k[0]) : q = addSaturationToRGB(q, S.fs.v * k)), S.fb.propType && (k.length ? q = addBrightnessToRGB(q, S.fb.v * k[0]) : q = addBrightnessToRGB(q, S.fb.v * k));
              }
            }
            for (m2 = 0; m2 < b; m2 += 1) S = i[m2].a, S.p.propType && (T = i[m2].s, k = T.getMult(p[g].anIndexes[m2], s.a[m2].s.totalChars), this._hasMaskedPath ? k.length ? n.translate(0, S.p.v[1] * k[0], -S.p.v[2] * k[1]) : n.translate(0, S.p.v[1] * k, -S.p.v[2] * k) : k.length ? n.translate(S.p.v[0] * k[0], S.p.v[1] * k[1], -S.p.v[2] * k[2]) : n.translate(S.p.v[0] * k, S.p.v[1] * k, -S.p.v[2] * k));
            if (t.strokeWidthAnim && (et = K < 0 ? 0 : K), t.strokeColorAnim && (nt = "rgb(" + Math.round($[0] * 255) + "," + Math.round($[1] * 255) + "," + Math.round($[2] * 255) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(q[0] * 255) + "," + Math.round(q[1] * 255) + "," + Math.round(q[2] * 255) + ")"), this._hasMaskedPath) {
              if (n.translate(0, -t.ls), n.translate(0, r[1] * D * 0.01 + d, 0), this._pathData.p.v) {
                G = (v.point[1] - c.point[1]) / (v.point[0] - c.point[0]);
                var lt = Math.atan(G) * 180 / Math.PI;
                v.point[0] < c.point[0] && (lt += 180), n.rotate(-lt * Math.PI / 180);
              }
              n.translate(N, H, 0), y -= r[0] * p[g].an * 5e-3, p[g + 1] && B !== p[g + 1].ind && (y += p[g].an / 2, y += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (n.translate(o, d, 0), t.ps && n.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  n.translate(p[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[g].line]), 0, 0);
                  break;
                case 2:
                  n.translate(p[g].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[g].line]) / 2, 0, 0);
                  break;
              }
              n.translate(0, -t.ls), n.translate(z, 0, 0), n.translate(r[0] * p[g].an * 5e-3, r[1] * D * 0.01, 0), o += p[g].l + t.tr * 1e-3 * t.finalSize;
            }
            a === "html" ? tt = n.toCSS() : a === "svg" ? tt = n.to2dCSS() : it = [n.props[0], n.props[1], n.props[2], n.props[3], n.props[4], n.props[5], n.props[6], n.props[7], n.props[8], n.props[9], n.props[10], n.props[11], n.props[12], n.props[13], n.props[14], n.props[15]], st = Y;
          }
          l <= g ? (C = new LetterProps(st, et, nt, rt, tt, it), this.renderedLetters.push(C), l += 1, this.lettersChangedFlag = true) : (C = this.renderedLetters[g], this.lettersChangedFlag = C.update(st, et, nt, rt, tt, it) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
    function ITextElement() {
    }
    ITextElement.prototype.initElement = function(t, e, r) {
      this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, ITextElement.prototype.createPathShape = function(t, e) {
      var r, i = e.length, s, n = "";
      for (r = 0; r < i; r += 1) e[r].ty === "sh" && (s = e[r].ks.k, n += buildShapeString(s, s.i.length, true, t));
      return n;
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, ITextElement.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
          break;
      }
      e.translate(i, s, 0);
    }, ITextElement.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
    };
    var emptyShapeData = { shapes: [] };
    function SVGTextLottieElement(t, e, r) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
      for (var e = 0, r = t.length, i = [], s = ""; e < r; ) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
      return i.push(s), i;
    }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var r = t.shapes[0];
        if (r.it) {
          var i = r.it[r.it.length - 1];
          i.s && (i.s.k[0] = e, i.s.k[1] = e);
        }
      }
      return t;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var t, e, r = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
      var i = this.globalData.fontManager.getFontByName(r.f);
      if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
      else {
        this.layerElement.setAttribute("font-family", i.fFamily);
        var s = r.fWeight, n = r.fStyle;
        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s);
      }
      this.layerElement.setAttribute("aria-label", r.t);
      var a = r.l || [], l = !!this.globalData.fontManager.chars;
      e = a.length;
      var o, d = this.mHelper, g = "", _ = this.data.singleShape, p = 0, P = 0, y = true, v = r.tr * 1e-3 * r.finalSize;
      if (_ && !l && !r.sz) {
        var A = this.textContainer, f = "start";
        switch (r.j) {
          case 1:
            f = "end";
            break;
          case 2:
            f = "middle";
            break;
          default:
            f = "start";
            break;
        }
        A.setAttribute("text-anchor", f), A.setAttribute("letter-spacing", v);
        var u = this.buildTextContents(r.finalText);
        for (e = u.length, P = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) o = this.textSpans[t].span || createNS("tspan"), o.textContent = u[t], o.setAttribute("x", 0), o.setAttribute("y", P), o.style.display = "inherit", A.appendChild(o), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = o, P += r.finalLineHeight;
        this.layerElement.appendChild(A);
      } else {
        var h = this.textSpans.length, c;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !l || !_ || t === 0) {
            if (o = h > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), h <= t) {
              if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, l) {
                var E = createNS("g");
                o.appendChild(E), this.textSpans[t].childSpan = E;
              }
              this.textSpans[t].span = o, this.layerElement.appendChild(o);
            }
            o.style.display = "inherit";
          }
          if (d.reset(), _ && (a[t].n && (p = -v, P += r.yOffset, P += y ? 1 : 0, y = false), this.applyTextPropertiesToMatrix(r, d, a[t].line, p, P), p += a[t].l || 0, p += v), l) {
            c = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
            var x;
            if (c.t === 1) x = new SVGCompElement(c.data, this.globalData, this);
            else {
              var M = emptyShapeData;
              c.data && c.data.shapes && (M = this.buildShapeData(c.data, r.finalSize)), x = new SVGShapeElement(M, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var F = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(F.layerElement), F.destroy();
            }
            this.textSpans[t].glyph = x, x._debug = true, x.prepareFrame(0), x.renderFrame(), this.textSpans[t].childSpan.appendChild(x.layerElement), c.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
          } else _ && o.setAttribute("transform", "translate(" + d.props[12] + "," + d.props[13] + ")"), o.textContent = a[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        _ && o && o.setAttribute("d", g);
      }
      for (; t < this.textSpans.length; ) this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = true;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = false;
        var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var t, e = this.textSpans.length, r;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1) r = this.textSpans[t].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = true));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = true;
        var t, e, r = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
        e = i.length;
        var s, n, a;
        for (t = 0; t < e; t += 1) i[t].n || (s = r[t], n = this.textSpans[t].span, a = this.textSpans[t].glyph, a && a.renderFrame(), s._mdf.m && n.setAttribute("transform", s.m), s._mdf.o && n.setAttribute("opacity", s.o), s._mdf.sw && n.setAttribute("stroke-width", s.sw), s._mdf.sc && n.setAttribute("stroke", s.sc), s._mdf.fc && n.setAttribute("fill", s.fc));
      }
    };
    function ISolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function NullElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
    }
    NullElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
    function SVGRendererBase() {
    }
    extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
      return new NullElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(t) {
      return new SVGShapeElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(t) {
      return new SVGTextLottieElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(t) {
      return new IImageElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(t) {
      return new ISolidElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var r = createNS("clipPath"), i = createNS("rect");
      i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
      var s = createElementID();
      r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(t) {
      var e = 0, r = this.layers.length;
      for (e = 0; e < r; e += 1) if (this.layers[e].ind === t) return e;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = true;
        var r = this.createItem(this.layers[t]);
        if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
          var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (i === -1) return;
          if (!this.elements[i] || this.elements[i] === true) this.buildItem(i), this.addPendingElement(r);
          else {
            var s = e[i], n = s.getMatte(this.layers[t].tt);
            r.setMatte(n);
          }
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt) for (var e = 0, r = this.elements.length; e < r; ) {
          if (this.elements[e] === t) {
            var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[i], n = s.getMatte(this.layers[e].tt);
            t.setMatte(n);
            break;
          }
          e += 1;
        }
      }
    }, SVGRendererBase.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
        var e, r = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf) for (e = 0; e < r; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        for (var i = 0, s; i < e; ) this.elements[i] && this.elements[i] !== true && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
        s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function ICompElement() {
    }
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(t) {
      if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var r, i = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = true));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, ICompElement.prototype.setElements = function(t) {
      this.elements = t;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function SVGCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    };
    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var r = "";
      if (e && e.title) {
        var i = createNS("title"), s = createElementID();
        i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s;
      }
      if (e && e.description) {
        var n = createNS("desc"), a = createElementID();
        n.setAttribute("id", a), n.textContent = e.description, this.svgElement.appendChild(n), r += " " + a;
      }
      r && this.svgElement.setAttribute("aria-labelledby", r);
      var l = createNS("defs");
      this.svgElement.appendChild(l);
      var o = createNS("g");
      this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && e.hideOnTransparent === false), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: l, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
    }
    extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    };
    var registeredEffects = {};
    function CVEffects(t) {
      var e, r = t.data.ef ? t.data.ef.length : 0;
      this.filters = [];
      var i;
      for (e = 0; e < r; e += 1) {
        i = null;
        var s = t.data.ef[e].ty;
        if (registeredEffects[s]) {
          var n = registeredEffects[s].effect;
          i = new n(t.effectsManager.effectElements[e], t);
        }
        i && this.filters.push(i);
      }
      this.filters.length && t.addRenderableComponent(this);
    }
    CVEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t);
    }, CVEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1) this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    };
    function HBaseElement() {
    }
    HBaseElement.prototype = { checkBlendMode: function() {
    }, initRendererElement: function() {
      this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
    }, createContainerElements: function() {
      this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      var e = this.transformedElement ? this.transformedElement.style : {};
      if (this.finalTransform._matMdf) {
        var r = this.finalTransform.mat.toCSS();
        e.transform = r, e.webkitTransform = r;
      }
      this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
    }, destroy: function() {
      this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    }, addEffects: function() {
    }, setMatte: function() {
    } }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
    function HSolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var t;
      this.data.hasMask ? (t = createNS("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
    };
    function HShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
    }
    extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = createNS("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true), this.filterUniqueShapes(), this.shapeCont = t;
    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
      var r = t.sh.v, i = t.transformers, s, n = r._length, a, l, o, d;
      if (!(n <= 1)) {
        for (s = 0; s < n - 1; s += 1) a = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), d = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(a, l, o, d, e);
        r.c && (a = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), d = this.getTransformedPoint(i, r.v[0]), this.checkBounds(a, l, o, d, e));
      }
    }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
      this.getBoundsOfCurve(t, e, r, i);
      var n = this.shapeBoundingBox;
      s.x = bmMin(n.left, s.x), s.xMax = bmMax(n.right, s.xMax), s.y = bmMin(n.top, s.y), s.yMax = bmMax(n.bottom, s.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
      for (var s = [[t[0], i[0]], [t[1], i[1]]], n, a, l, o, d, g, _, p = 0; p < 2; ++p) a = 6 * t[p] - 12 * e[p] + 6 * r[p], n = -3 * t[p] + 9 * e[p] - 9 * r[p] + 3 * i[p], l = 3 * e[p] - 3 * t[p], a |= 0, n |= 0, l |= 0, n === 0 && a === 0 || (n === 0 ? (o = -l / a, o > 0 && o < 1 && s[p].push(this.calculateF(o, t, e, r, i, p))) : (d = a * a - 4 * l * n, d >= 0 && (g = (-a + bmSqrt(d)) / (2 * n), g > 0 && g < 1 && s[p].push(this.calculateF(g, t, e, r, i, p)), _ = (-a - bmSqrt(d)) / (2 * n), _ > 0 && _ < 1 && s[p].push(this.calculateF(_, t, e, r, i, p)))));
      this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1]);
    }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, n) {
      return bmPow(1 - t, 3) * e[n] + 3 * bmPow(1 - t, 2) * t * r[n] + 3 * (1 - t) * bmPow(t, 2) * i[n] + bmPow(t, 3) * s[n];
    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e);
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
      var r = 0;
      if (t.keyframes) {
        for (var i = 0; i < t.keyframes.length; i += 1) {
          var s = t.keyframes[i].s;
          s > r && (r = s);
        }
        r *= t.mult;
      } else r = t.v * t.mult;
      e.x -= r, e.xMax += r, e.y -= r, e.yMax += r;
    }, HShapeElement.prototype.currentBoxContains = function(t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox, e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
        var r = false;
        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = true), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = true), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
          this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var i = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          i.transform = s, i.webkitTransform = s;
        }
      }
    };
    function HTextElement(t, e, r) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = false, this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = createNS("g");
        this.maskedElement.appendChild(t), this.innerElem = t;
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = this.innerElem.style, r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
      e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var i = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", i.fClass) this.innerElem.className = i.fClass;
      else {
        e.fontFamily = i.fFamily;
        var s = t.fWeight, n = t.fStyle;
        e.fontStyle = n, e.fontWeight = s;
      }
      var a, l, o = t.l;
      l = o.length;
      var d, g, _, p = this.mHelper, P, y = "", v = 0;
      for (a = 0; a < l; a += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[v] ? d = this.textPaths[v] : (d = createNS("path"), d.setAttribute("stroke-linecap", lineCapEnum[1]), d.setAttribute("stroke-linejoin", lineJoinEnum[2]), d.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[v] ? (g = this.textSpans[v], _ = g.children[0]) : (g = createTag("div"), g.style.lineHeight = 0, _ = createNS("svg"), _.appendChild(d), styleDiv(g)))) : this.isMasked ? d = this.textPaths[v] ? this.textPaths[v] : createNS("text") : this.textSpans[v] ? (g = this.textSpans[v], d = this.textPaths[v]) : (g = createTag("span"), styleDiv(g), d = createTag("span"), styleDiv(d), g.appendChild(d)), this.globalData.fontManager.chars) {
          var A = this.globalData.fontManager.getCharData(t.finalText[a], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), f;
          if (A ? f = A.data : f = null, p.reset(), f && f.shapes && f.shapes.length && (P = f.shapes[0].it, p.scale(t.finalSize / 100, t.finalSize / 100), y = this.createPathShape(p, P), d.setAttribute("d", y)), this.isMasked) this.innerElem.appendChild(d);
          else {
            if (this.innerElem.appendChild(g), f && f.shapes) {
              document.body.appendChild(_);
              var u = _.getBBox();
              _.setAttribute("width", u.width + 2), _.setAttribute("height", u.height + 2), _.setAttribute("viewBox", u.x - 1 + " " + (u.y - 1) + " " + (u.width + 2) + " " + (u.height + 2));
              var h = _.style, c = "translate(" + (u.x - 1) + "px," + (u.y - 1) + "px)";
              h.transform = c, h.webkitTransform = c, o[a].yOffset = u.y - 1;
            } else _.setAttribute("width", 1), _.setAttribute("height", 1);
            g.appendChild(_);
          }
        } else if (d.textContent = o[a].val, d.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(d);
        else {
          this.innerElem.appendChild(g);
          var E = d.style, x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
          E.transform = x, E.webkitTransform = x;
        }
        this.isMasked ? this.textSpans[v] = d : this.textSpans[v] = g, this.textSpans[v].style.display = "block", this.textPaths[v] = d, v += 1;
      }
      for (; v < this.textSpans.length; ) this.textSpans[v].style.display = "none", v += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var t;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
          var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          t.transform = e, t.webkitTransform = e;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
        var r, i, s = 0, n = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
        i = a.length;
        var l, o, d;
        for (r = 0; r < i; r += 1) a[r].n ? s += 1 : (o = this.textSpans[r], d = this.textPaths[r], l = n[s], s += 1, l._mdf.m && (this.isMasked ? o.setAttribute("transform", l.m) : (o.style.webkitTransform = l.m, o.style.transform = l.m)), o.style.opacity = l.o, l.sw && l._mdf.sw && d.setAttribute("stroke-width", l.sw), l.sc && l._mdf.sc && d.setAttribute("stroke", l.sc), l.fc && l._mdf.fc && (d.setAttribute("fill", l.fc), d.style.color = l.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var g = this.innerElem.getBBox();
          this.currentBBox.w !== g.width && (this.currentBBox.w = g.width, this.svgElement.setAttribute("width", g.width)), this.currentBBox.h !== g.height && (this.currentBBox.h = g.height, this.svgElement.setAttribute("height", g.height));
          var _ = 1;
          if (this.currentBBox.w !== g.width + _ * 2 || this.currentBBox.h !== g.height + _ * 2 || this.currentBBox.x !== g.x - _ || this.currentBBox.y !== g.y - _) {
            this.currentBBox.w = g.width + _ * 2, this.currentBBox.h = g.height + _ * 2, this.currentBBox.x = g.x - _, this.currentBBox.y = g.y - _, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
            var p = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            t.transform = p, t.webkitTransform = p;
          }
        }
      }
    };
    function HCameraElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
      var i = PropertyFactory.getProp;
      if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var s, n = t.ks.or.k.length;
        for (s = 0; s < n; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
      }
      this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = true, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = true, this.finalTransform = { mProp: this };
    }
    extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var t, e = this.comp.threeDElements.length, r, i, s;
      for (t = 0; t < e; t += 1) if (r = this.comp.threeDElements[t], r.type === "3d") {
        i = r.perspectiveElem.style, s = r.container.style;
        var n = this.pe.v + "px", a = "0px 0px 0px", l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        i.perspective = n, i.webkitPerspective = n, s.transformOrigin = a, s.mozTransformOrigin = a, s.webkitTransformOrigin = a, i.transform = l, i.webkitTransform = l;
      }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var t = this._isFirstFrame, e, r;
      if (this.hierarchy) for (r = this.hierarchy.length, e = 0; e < r; e += 1) t = this.hierarchy[e].finalTransform.mProp._mdf || t;
      if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy) for (r = this.hierarchy.length - 1, e = r; e >= 0; e -= 1) {
          var i = this.hierarchy[e].finalTransform.mProp;
          this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
        }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var s;
          this.p ? s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : s = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var n = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), a = [s[0] / n, s[1] / n, s[2] / n], l = Math.sqrt(a[2] * a[2] + a[0] * a[0]), o = Math.atan2(a[1], l), d = Math.atan2(a[0], -a[2]);
          this.mat.rotateY(d).rotateX(-o);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var g = !this._prevMat.equals(this.mat);
        if ((g || this.pe._mdf) && this.comp.threeDElements) {
          r = this.comp.threeDElements.length;
          var _, p, P;
          for (e = 0; e < r; e += 1) if (_ = this.comp.threeDElements[e], _.type === "3d") {
            if (g) {
              var y = this.mat.toCSS();
              P = _.container.style, P.transform = y, P.webkitTransform = y;
            }
            this.pe._mdf && (p = _.perspectiveElem.style, p.perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px");
          }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = false;
    }, HCameraElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    };
    function HImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    };
    function HybridRendererBase(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && e.hideOnTransparent === false), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
    }
    extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        t.checkParenting();
      }
    }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        var i = this.layers[e];
        if (!i.ddd || !this.supports3d) if (this.threeDElements) this.addTo3dContainer(r, e);
        else {
          for (var s = 0, n, a, l; s < e; ) this.elements[s] && this.elements[s] !== true && this.elements[s].getBaseElement && (a = this.elements[s], l = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement(), n = l || n), s += 1;
          n ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, n) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r);
        }
        else this.addTo3dContainer(r, e);
      }
    }, HybridRendererBase.prototype.createShape = function(t) {
      return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createText = function(t) {
      return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createCamera = function(t) {
      return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
    }, HybridRendererBase.prototype.createImage = function(t) {
      return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createSolid = function(t) {
      return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
      for (var e = 0, r = this.threeDElements.length; e < r; ) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
        e += 1;
      }
      return null;
    }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
      var r = createTag("div"), i, s;
      styleDiv(r);
      var n = createTag("div");
      if (styleDiv(n), e === "3d") {
        i = r.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
        var a = "50% 50%";
        i.webkitTransformOrigin = a, i.mozTransformOrigin = a, i.transformOrigin = a, s = n.style;
        var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        s.transform = l, s.webkitTransform = l;
      }
      r.appendChild(n);
      var o = { container: n, perspectiveElem: r, startPos: t, endPos: t, type: e };
      return this.threeDElements.push(o), o;
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var t, e = this.layers.length, r, i = "";
      for (t = 0; t < e; t += 1) this.layers[t].ddd && this.layers[t].ty !== 3 ? (i !== "3d" && (i = "3d", r = this.createThreeDContainer(t, "3d")), r.endPos = Math.max(r.endPos, t)) : (i !== "2d" && (i = "2d", r = this.createThreeDContainer(t, "2d")), r.endPos = Math.max(r.endPos, t));
      for (e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
    }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
      for (var r = 0, i = this.threeDElements.length; r < i; ) {
        if (e <= this.threeDElements[r].endPos) {
          for (var s = this.threeDElements[r].startPos, n; s < e; ) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), s += 1;
          n ? this.threeDElements[r].container.insertBefore(t, n) : this.threeDElements[r].container.appendChild(t);
          break;
        }
        r += 1;
      }
    }, HybridRendererBase.prototype.configAnimation = function(t) {
      var e = createTag("div"), r = this.animationItem.wrapper, i = e.style;
      i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
      var s = createNS("svg");
      s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
      var n = createNS("defs");
      s.appendChild(n), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, r = t / e, i = this.globalData.compSize.w / this.globalData.compSize.h, s, n, a, l;
      i > r ? (s = t / this.globalData.compSize.w, n = t / this.globalData.compSize.w, a = 0, l = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h, n = e / this.globalData.compSize.h, a = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, l = 0);
      var o = this.resizerElem.style;
      o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + n + ",0,0,0,0,1,0," + a + "," + l + ",0,1)", o.transform = o.webkitTransform;
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var t = this.globalData.compSize.w, e = this.globalData.compSize.h, r, i = this.threeDElements.length;
        for (r = 0; r < i; r += 1) {
          var s = this.threeDElements[r].perspectiveElem.style;
          s.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", s.perspective = s.webkitPerspective;
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length, i = createTag("div");
      for (e = 0; e < r; e += 1) if (t[e].xt) {
        var s = this.createComp(t[e], i, this.globalData.comp, null);
        s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
      }
    };
    function HCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
      for (var r = 0, i; r < e; ) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
      i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
    }, HCompElement.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    };
    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && e.hideOnTransparent === false), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" }, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
    }
    extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    }, registerRenderer("html", HybridRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
    var CompExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        function e(r) {
          for (var i = 0, s = t.layers.length; i < s; ) {
            if (t.layers[i].nm === r || t.layers[i].ind === r) return t.elements[i].layerInterface;
            i += 1;
          }
          return null;
        }
        return Object.defineProperty(e, "_name", { value: t.data.nm }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
      };
    }();
    function _typeof$2(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
        return typeof r;
      } : _typeof$2 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$2(t);
    }
    function seedRandom(t, e) {
      var r = this, i = 256, s = 6, n = 52, a = "random", l = e.pow(i, s), o = e.pow(2, n), d = o * 2, g = i - 1, _;
      function p(h, c, E) {
        var x = [];
        c = c === true ? { entropy: true } : c || {};
        var M = A(v(c.entropy ? [h, u(t)] : h === null ? f() : h, 3), x), F = new P(x), I = function() {
          for (var R = F.g(s), V = l, L = 0; R < o; ) R = (R + L) * i, V *= i, L = F.g(1);
          for (; R >= d; ) R /= 2, V /= 2, L >>>= 1;
          return (R + L) / V;
        };
        return I.int32 = function() {
          return F.g(4) | 0;
        }, I.quick = function() {
          return F.g(4) / 4294967296;
        }, I.double = I, A(u(F.S), t), (c.pass || E || function(G, R, V, L) {
          return L && (L.S && y(L, F), G.state = function() {
            return y(F, {});
          }), V ? (e[a] = G, R) : G;
        })(I, M, "global" in c ? c.global : this == e, c.state);
      }
      e["seed" + a] = p;
      function P(h) {
        var c, E = h.length, x = this, M = 0, F = x.i = x.j = 0, I = x.S = [];
        for (E || (h = [E++]); M < i; ) I[M] = M++;
        for (M = 0; M < i; M++) I[M] = I[F = g & F + h[M % E] + (c = I[M])], I[F] = c;
        x.g = function(G) {
          for (var R, V = 0, L = x.i, D = x.j, w = x.S; G--; ) R = w[L = g & L + 1], V = V * i + w[g & (w[L] = w[D = g & D + R]) + (w[D] = R)];
          return x.i = L, x.j = D, V;
        };
      }
      function y(h, c) {
        return c.i = h.i, c.j = h.j, c.S = h.S.slice(), c;
      }
      function v(h, c) {
        var E = [], x = _typeof$2(h), M;
        if (c && x == "object") for (M in h) try {
          E.push(v(h[M], c - 1));
        } catch {
        }
        return E.length ? E : x == "string" ? h : h + "\0";
      }
      function A(h, c) {
        for (var E = h + "", x, M = 0; M < E.length; ) c[g & M] = g & (x ^= c[g & M] * 19) + E.charCodeAt(M++);
        return u(c);
      }
      function f() {
        try {
          if (_) ;
          var h = new Uint8Array(i);
          return (r.crypto || r.msCrypto).getRandomValues(h), u(h);
        } catch {
          var c = r.navigator, E = c && c.plugins;
          return [+/* @__PURE__ */ new Date(), r, E, r.screen, u(t)];
        }
      }
      function u(h) {
        return String.fromCharCode.apply(0, h);
      }
      A(e.random(), t);
    }
    function initialize$2(t) {
      seedRandom([], t);
    }
    var propTypes = { SHAPE: "shape" };
    function _typeof$1(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
        return typeof r;
      } : _typeof$1 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$1(t);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
      initialize$2(BMMath);
      function resetFrame() {
        _lottieGlobal = {};
      }
      function $bm_isInstanceOfArray(t) {
        return t.constructor === Array || t.constructor === Float32Array;
      }
      function isNumerable(t, e) {
        return t === "number" || e instanceof Number || t === "boolean" || t === "string";
      }
      function $bm_neg(t) {
        var e = _typeof$1(t);
        if (e === "number" || t instanceof Number || e === "boolean") return -t;
        if ($bm_isInstanceOfArray(t)) {
          var r, i = t.length, s = [];
          for (r = 0; r < i; r += 1) s[r] = -t[r];
          return s;
        }
        return t.propType ? t.v : -t;
      }
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e) || r === "string" || i === "string") return t + e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] += e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t + e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, n = t.length, a = e.length, l = []; s < n || s < a; ) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] + e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return l;
        }
        return 0;
      }
      var add = sum;
      function sub(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e)) return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return t = t.slice(0), t[0] -= e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return e = e.slice(0), e[0] = t - e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, n = t.length, a = e.length, l = []; s < n || s < a; ) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] - e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return l;
        }
        return 0;
      }
      function mul(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e), s;
        if (isNumerable(r, t) && isNumerable(i, e)) return t * e;
        var n, a;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
          for (a = t.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = t[n] * e;
          return s;
        }
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
          for (a = e.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = t * e[n];
          return s;
        }
        return 0;
      }
      function div(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e), s;
        if (isNumerable(r, t) && isNumerable(i, e)) return t / e;
        var n, a;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
          for (a = t.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = t[n] / e;
          return s;
        }
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
          for (a = e.length, s = createTypedArray("float32", a), n = 0; n < a; n += 1) s[n] = t / e[n];
          return s;
        }
        return 0;
      }
      function mod(t, e) {
        return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(t, e, r) {
        if (e > r) {
          var i = r;
          r = e, e = i;
        }
        return Math.min(Math.max(t, e), r);
      }
      function radiansToDegrees(t) {
        return t / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(t) {
        return t * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(t, e) {
        if (typeof t == "number" || t instanceof Number) return e = e || 0, Math.abs(t - e);
        e || (e = helperLengthArray);
        var r, i = Math.min(t.length, e.length), s = 0;
        for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
        return Math.sqrt(s);
      }
      function normalize(t) {
        return div(t, length(t));
      }
      function rgbToHsl(t) {
        var e = t[0], r = t[1], i = t[2], s = Math.max(e, r, i), n = Math.min(e, r, i), a, l, o = (s + n) / 2;
        if (s === n) a = 0, l = 0;
        else {
          var d = s - n;
          switch (l = o > 0.5 ? d / (2 - s - n) : d / (s + n), s) {
            case e:
              a = (r - i) / d + (r < i ? 6 : 0);
              break;
            case r:
              a = (i - e) / d + 2;
              break;
            case i:
              a = (e - r) / d + 4;
              break;
          }
          a /= 6;
        }
        return [a, l, o, t[3]];
      }
      function hue2rgb(t, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
      }
      function hslToRgb(t) {
        var e = t[0], r = t[1], i = t[2], s, n, a;
        if (r === 0) s = i, a = i, n = i;
        else {
          var l = i < 0.5 ? i * (1 + r) : i + r - i * r, o = 2 * i - l;
          s = hue2rgb(o, l, e + 1 / 3), n = hue2rgb(o, l, e), a = hue2rgb(o, l, e - 1 / 3);
        }
        return [s, n, a, t[3]];
      }
      function linear(t, e, r, i, s) {
        if ((i === void 0 || s === void 0) && (i = e, s = r, e = 0, r = 1), r < e) {
          var n = r;
          r = e, e = n;
        }
        if (t <= e) return i;
        if (t >= r) return s;
        var a = r === e ? 0 : (t - e) / (r - e);
        if (!i.length) return i + (s - i) * a;
        var l, o = i.length, d = createTypedArray("float32", o);
        for (l = 0; l < o; l += 1) d[l] = i[l] + (s[l] - i[l]) * a;
        return d;
      }
      function random(t, e) {
        if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
          var r, i = e.length;
          t || (t = createTypedArray("float32", i));
          var s = createTypedArray("float32", i), n = BMMath.random();
          for (r = 0; r < i; r += 1) s[r] = t[r] + n * (e[r] - t[r]);
          return s;
        }
        t === void 0 && (t = 0);
        var a = BMMath.random();
        return t + a * (e - t);
      }
      function createPath(t, e, r, i) {
        var s, n = t.length, a = shapePool.newElement();
        a.setPathData(!!i, n);
        var l = [0, 0], o, d;
        for (s = 0; s < n; s += 1) o = e && e[s] ? e[s] : l, d = r && r[s] ? r[s] : l, a.setTripleAt(t[s][0], t[s][1], d[0] + t[s][0], d[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, true);
        return a;
      }
      function initiateExpression(elem, data, property) {
        function noOp(t) {
          return t;
        }
        if (!elem.globalData.renderConfig.runExpressions) return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
          return thisProperty.v;
        } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== true, wiggle = (function t(e, r) {
          var i, s, n = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", n);
          e = 5;
          var l = Math.floor(time * e);
          for (i = 0, s = 0; i < l; ) {
            for (s = 0; s < n; s += 1) a[s] += -r + r * 2 * BMMath.random();
            i += 1;
          }
          var o = time * e, d = o - Math.floor(o), g = createTypedArray("float32", n);
          if (n > 1) {
            for (s = 0; s < n; s += 1) g[s] = this.pv[s] + a[s] + (-r + r * 2 * BMMath.random()) * d;
            return g;
          }
          return this.pv + a[0] + (-r + r * 2 * BMMath.random()) * d;
        }).bind(this);
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
        function loopInDuration(t, e) {
          return loopIn(t, e, true);
        }
        function loopOutDuration(t, e) {
          return loopOut(t, e, true);
        }
        this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
        function lookAt(t, e) {
          var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads, s = -Math.atan2(r[1], r[2]) / degToRads;
          return [s, i, 0];
        }
        function easeOut(t, e, r, i, s) {
          return applyEase(easeOutBez, t, e, r, i, s);
        }
        function easeIn(t, e, r, i, s) {
          return applyEase(easeInBez, t, e, r, i, s);
        }
        function ease(t, e, r, i, s) {
          return applyEase(easeInOutBez, t, e, r, i, s);
        }
        function applyEase(t, e, r, i, s, n) {
          s === void 0 ? (s = r, n = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
          var a = t(e);
          if ($bm_isInstanceOfArray(s)) {
            var l, o = s.length, d = createTypedArray("float32", o);
            for (l = 0; l < o; l += 1) d[l] = (n[l] - s[l]) * a + s[l];
            return d;
          }
          return (n - s) * a + s;
        }
        function nearestKey(t) {
          var e, r = data.k.length, i, s;
          if (!data.k.length || typeof data.k[0] == "number") i = 0, s = 0;
          else if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) i = 1, s = data.k[0].t;
          else {
            for (e = 0; e < r - 1; e += 1) if (t === data.k[e].t) {
              i = e + 1, s = data.k[e].t;
              break;
            } else if (t > data.k[e].t && t < data.k[e + 1].t) {
              t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
              break;
            }
            i === -1 && (i = e + 1, s = data.k[e].t);
          }
          var n = {};
          return n.index = i, n.time = s / elem.comp.globalData.frameRate, n;
        }
        function key(t) {
          var e, r, i;
          if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
          t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] };
          var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
          for (i = s.length, r = 0; r < i; r += 1) e[r] = s[r], e.value[r] = s[r];
          return e;
        }
        function framesToTime(t, e) {
          return e || (e = elem.comp.globalData.frameRate), t / e;
        }
        function timeToFrames(t, e) {
          return !t && t !== 0 && (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
        }
        function seedRandom(t) {
          BMMath.seedrandom(randSeed + t);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : "";
        }
        function substr(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : "";
        }
        function posterizeTime(t) {
          time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
        }
        var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
        function executeExpression(t) {
          return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob;
    }(), Expressions = function() {
      var t = {};
      t.initExpressions = e, t.resetFrame = ExpressionManager.resetFrame;
      function e(r) {
        var i = 0, s = [];
        function n() {
          i += 1;
        }
        function a() {
          i -= 1, i === 0 && o();
        }
        function l(d) {
          s.indexOf(d) === -1 && s.push(d);
        }
        function o() {
          var d, g = s.length;
          for (d = 0; d < g; d += 1) s[d].release();
          s.length = 0;
        }
        r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = n, r.renderer.globalData.popExpression = a, r.renderer.globalData.registerExpressionProperty = l;
      }
      return t;
    }(), MaskManagerInterface = function() {
      function t(r, i) {
        this._mask = r, this._data = i;
      }
      Object.defineProperty(t.prototype, "maskPath", { get: function() {
        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
      } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() {
        return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
      } });
      var e = function(i) {
        var s = createSizedArray(i.viewData.length), n, a = i.viewData.length;
        for (n = 0; n < a; n += 1) s[n] = new t(i.viewData[n], i.masksProperties[n]);
        var l = function(d) {
          for (n = 0; n < a; ) {
            if (i.masksProperties[n].nm === d) return s[n];
            n += 1;
          }
          return null;
        };
        return l;
      };
      return e;
    }(), ExpressionPropertyInterface = /* @__PURE__ */ function() {
      var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
      function r(a, l, o) {
        Object.defineProperty(a, "velocity", { get: function() {
          return l.getVelocityAtTime(l.comp.currentFrame);
        } }), a.numKeys = l.keyframes ? l.keyframes.length : 0, a.key = function(d) {
          if (!a.numKeys) return 0;
          var g = "";
          "s" in l.keyframes[d - 1] ? g = l.keyframes[d - 1].s : "e" in l.keyframes[d - 2] ? g = l.keyframes[d - 2].e : g = l.keyframes[d - 2].s;
          var _ = o === "unidimensional" ? new Number(g) : Object.assign({}, g);
          return _.time = l.keyframes[d - 1].t / l.elem.comp.globalData.frameRate, _.value = o === "unidimensional" ? g[0] : g, _;
        }, a.valueAtTime = l.getValueAtTime, a.speedAtTime = l.getSpeedAtTime, a.velocityAtTime = l.getVelocityAtTime, a.propertyGroup = l.propertyGroup;
      }
      function i(a) {
        (!a || !("pv" in a)) && (a = t);
        var l = 1 / a.mult, o = a.pv * l, d = new Number(o);
        return d.value = o, r(d, a, "unidimensional"), function() {
          return a.k && a.getValue(), o = a.v * l, d.value !== o && (d = new Number(o), d.value = o, r(d, a, "unidimensional")), d;
        };
      }
      function s(a) {
        (!a || !("pv" in a)) && (a = e);
        var l = 1 / a.mult, o = a.data && a.data.l || a.pv.length, d = createTypedArray("float32", o), g = createTypedArray("float32", o);
        return d.value = g, r(d, a, "multidimensional"), function() {
          a.k && a.getValue();
          for (var _ = 0; _ < o; _ += 1) g[_] = a.v[_] * l, d[_] = g[_];
          return d;
        };
      }
      function n() {
        return t;
      }
      return function(a) {
        return a ? a.propType === "unidimensional" ? i(a) : s(a) : n;
      };
    }(), TransformExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        function e(a) {
          switch (a) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return e.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return e.rotation;
            case "ADBE Rotate X":
              return e.xRotation;
            case "ADBE Rotate Y":
              return e.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return e.position;
            case "ADBE Position_0":
              return e.xPosition;
            case "ADBE Position_1":
              return e.yPosition;
            case "ADBE Position_2":
              return e.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return e.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return e.opacity;
            default:
              return null;
          }
        }
        Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) });
        var r, i, s, n;
        return t.p ? n = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() {
          return t.p ? n() : [r(), i(), s ? s() : 0];
        } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e;
      };
    }(), LayerExpressionInterface = /* @__PURE__ */ function() {
      function t(d) {
        var g = new Matrix();
        if (d !== void 0) {
          var _ = this._elem.finalTransform.mProp.getValueAtTime(d);
          _.clone(g);
        } else {
          var p = this._elem.finalTransform.mProp;
          p.applyToMatrix(g);
        }
        return g;
      }
      function e(d, g) {
        var _ = this.getMatrix(g);
        return _.props[12] = 0, _.props[13] = 0, _.props[14] = 0, this.applyPoint(_, d);
      }
      function r(d, g) {
        var _ = this.getMatrix(g);
        return this.applyPoint(_, d);
      }
      function i(d, g) {
        var _ = this.getMatrix(g);
        return _.props[12] = 0, _.props[13] = 0, _.props[14] = 0, this.invertPoint(_, d);
      }
      function s(d, g) {
        var _ = this.getMatrix(g);
        return this.invertPoint(_, d);
      }
      function n(d, g) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var _, p = this._elem.hierarchy.length;
          for (_ = 0; _ < p; _ += 1) this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(d);
        }
        return d.applyToPointArray(g[0], g[1], g[2] || 0);
      }
      function a(d, g) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var _, p = this._elem.hierarchy.length;
          for (_ = 0; _ < p; _ += 1) this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(d);
        }
        return d.inversePoint(g);
      }
      function l(d) {
        var g = new Matrix();
        if (g.reset(), this._elem.finalTransform.mProp.applyToMatrix(g), this._elem.hierarchy && this._elem.hierarchy.length) {
          var _, p = this._elem.hierarchy.length;
          for (_ = 0; _ < p; _ += 1) this._elem.hierarchy[_].finalTransform.mProp.applyToMatrix(g);
          return g.inversePoint(d);
        }
        return g.inversePoint(d);
      }
      function o() {
        return [1, 1, 1, 1];
      }
      return function(d) {
        var g;
        function _(v) {
          P.mask = new MaskManagerInterface(v, d);
        }
        function p(v) {
          P.effect = v;
        }
        function P(v) {
          switch (v) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return P.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return g;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return P.effect;
            case "ADBE Text Properties":
              return P.textInterface;
            default:
              return null;
          }
        }
        P.getMatrix = t, P.invertPoint = a, P.applyPoint = n, P.toWorld = r, P.toWorldVec = e, P.fromWorld = s, P.fromWorldVec = i, P.toComp = r, P.fromComp = l, P.sampleImage = o, P.sourceRectAtTime = d.sourceRectAtTime.bind(d), P._elem = d, g = TransformExpressionInterface(d.finalTransform.mProp);
        var y = getDescriptor(g, "anchorPoint");
        return Object.defineProperties(P, { hasParent: { get: function() {
          return d.hierarchy.length;
        } }, parent: { get: function() {
          return d.hierarchy[0].layerInterface;
        } }, rotation: getDescriptor(g, "rotation"), scale: getDescriptor(g, "scale"), position: getDescriptor(g, "position"), opacity: getDescriptor(g, "opacity"), anchorPoint: y, anchor_point: y, transform: { get: function() {
          return g;
        } }, active: { get: function() {
          return d.isInRange;
        } } }), P.startTime = d.data.st, P.index = d.data.ind, P.source = d.data.refId, P.height = d.data.ty === 0 ? d.data.h : 100, P.width = d.data.ty === 0 ? d.data.w : 100, P.inPoint = d.data.ip / d.comp.globalData.frameRate, P.outPoint = d.data.op / d.comp.globalData.frameRate, P._name = d.data.nm, P.registerMaskInterface = _, P.registerEffectsInterface = p, P;
      };
    }(), propertyGroupFactory = /* @__PURE__ */ function() {
      return function(t, e) {
        return function(r) {
          return r = r === void 0 ? 1 : r, r <= 0 ? t : e(r - 1);
        };
      };
    }(), PropertyInterface = /* @__PURE__ */ function() {
      return function(t, e) {
        var r = { _name: t };
        function i(s) {
          return s = s === void 0 ? 1 : s, s <= 0 ? r : e(s - 1);
        }
        return i;
      };
    }(), EffectsExpressionInterface = /* @__PURE__ */ function() {
      var t = { createEffectsInterface: e };
      function e(s, n) {
        if (s.effectsManager) {
          var a = [], l = s.data.ef, o, d = s.effectsManager.effectElements.length;
          for (o = 0; o < d; o += 1) a.push(r(l[o], s.effectsManager.effectElements[o], n, s));
          var g = s.data.ef || [], _ = function(P) {
            for (o = 0, d = g.length; o < d; ) {
              if (P === g[o].nm || P === g[o].mn || P === g[o].ix) return a[o];
              o += 1;
            }
            return null;
          };
          return Object.defineProperty(_, "numProperties", { get: function() {
            return g.length;
          } }), _;
        }
        return null;
      }
      function r(s, n, a, l) {
        function o(P) {
          for (var y = s.ef, v = 0, A = y.length; v < A; ) {
            if (P === y[v].nm || P === y[v].mn || P === y[v].ix) return y[v].ty === 5 ? g[v] : g[v]();
            v += 1;
          }
          throw new Error();
        }
        var d = propertyGroupFactory(o, a), g = [], _, p = s.ef.length;
        for (_ = 0; _ < p; _ += 1) s.ef[_].ty === 5 ? g.push(r(s.ef[_], n.effectElements[_], n.effectElements[_].propertyGroup, l)) : g.push(i(n.effectElements[_], s.ef[_].ty, l, d));
        return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", { get: function() {
          return g[0]();
        } }), Object.defineProperties(o, { numProperties: { get: function() {
          return s.np;
        } }, _name: { value: s.nm }, propertyGroup: { value: d } }), o.enabled = s.en !== 0, o.active = o.enabled, o;
      }
      function i(s, n, a, l) {
        var o = ExpressionPropertyInterface(s.p);
        function d() {
          return n === 10 ? a.comp.compInterface(s.p.v) : o();
        }
        return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)), d;
      }
      return t;
    }(), ShapePathInterface = /* @__PURE__ */ function() {
      return function(e, r, i) {
        var s = r.sh;
        function n(l) {
          return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? n.path : null;
        }
        var a = propertyGroupFactory(n, i);
        return s.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, { path: { get: function() {
          return s.k && s.getValue(), s;
        } }, shape: { get: function() {
          return s.k && s.getValue(), s;
        } }, _name: { value: e.nm }, ix: { value: e.ix }, propertyIndex: { value: e.ix }, mn: { value: e.mn }, propertyGroup: { value: i } }), n;
      };
    }(), ShapeExpressionInterface = /* @__PURE__ */ function() {
      function t(y, v, A) {
        var f = [], u, h = y ? y.length : 0;
        for (u = 0; u < h; u += 1) y[u].ty === "gr" ? f.push(r(y[u], v[u], A)) : y[u].ty === "fl" ? f.push(i(y[u], v[u], A)) : y[u].ty === "st" ? f.push(a(y[u], v[u], A)) : y[u].ty === "tm" ? f.push(l(y[u], v[u], A)) : y[u].ty === "tr" || (y[u].ty === "el" ? f.push(d(y[u], v[u], A)) : y[u].ty === "sr" ? f.push(g(y[u], v[u], A)) : y[u].ty === "sh" ? f.push(ShapePathInterface(y[u], v[u], A)) : y[u].ty === "rc" ? f.push(_(y[u], v[u], A)) : y[u].ty === "rd" ? f.push(p(y[u], v[u], A)) : y[u].ty === "rp" ? f.push(P(y[u], v[u], A)) : y[u].ty === "gf" ? f.push(s(y[u], v[u], A)) : f.push(n(y[u], v[u])));
        return f;
      }
      function e(y, v, A) {
        var f, u = function(E) {
          for (var x = 0, M = f.length; x < M; ) {
            if (f[x]._name === E || f[x].mn === E || f[x].propertyIndex === E || f[x].ix === E || f[x].ind === E) return f[x];
            x += 1;
          }
          return typeof E == "number" ? f[E - 1] : null;
        };
        u.propertyGroup = propertyGroupFactory(u, A), f = t(y.it, v.it, u.propertyGroup), u.numProperties = f.length;
        var h = o(y.it[y.it.length - 1], v.it[v.it.length - 1], u.propertyGroup);
        return u.transform = h, u.propertyIndex = y.cix, u._name = y.nm, u;
      }
      function r(y, v, A) {
        var f = function(E) {
          switch (E) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return f.content;
            default:
              return f.transform;
          }
        };
        f.propertyGroup = propertyGroupFactory(f, A);
        var u = e(y, v, f.propertyGroup), h = o(y.it[y.it.length - 1], v.it[v.it.length - 1], f.propertyGroup);
        return f.content = u, f.transform = h, Object.defineProperty(f, "_name", { get: function() {
          return y.nm;
        } }), f.numProperties = y.np, f.propertyIndex = y.ix, f.nm = y.nm, f.mn = y.mn, f;
      }
      function i(y, v, A) {
        function f(u) {
          return u === "Color" || u === "color" ? f.color : u === "Opacity" || u === "opacity" ? f.opacity : null;
        }
        return Object.defineProperties(f, { color: { get: ExpressionPropertyInterface(v.c) }, opacity: { get: ExpressionPropertyInterface(v.o) }, _name: { value: y.nm }, mn: { value: y.mn } }), v.c.setGroupProperty(PropertyInterface("Color", A)), v.o.setGroupProperty(PropertyInterface("Opacity", A)), f;
      }
      function s(y, v, A) {
        function f(u) {
          return u === "Start Point" || u === "start point" ? f.startPoint : u === "End Point" || u === "end point" ? f.endPoint : u === "Opacity" || u === "opacity" ? f.opacity : null;
        }
        return Object.defineProperties(f, { startPoint: { get: ExpressionPropertyInterface(v.s) }, endPoint: { get: ExpressionPropertyInterface(v.e) }, opacity: { get: ExpressionPropertyInterface(v.o) }, type: { get: function() {
          return "a";
        } }, _name: { value: y.nm }, mn: { value: y.mn } }), v.s.setGroupProperty(PropertyInterface("Start Point", A)), v.e.setGroupProperty(PropertyInterface("End Point", A)), v.o.setGroupProperty(PropertyInterface("Opacity", A)), f;
      }
      function n() {
        function y() {
          return null;
        }
        return y;
      }
      function a(y, v, A) {
        var f = propertyGroupFactory(M, A), u = propertyGroupFactory(x, f);
        function h(F) {
          Object.defineProperty(x, y.d[F].nm, { get: ExpressionPropertyInterface(v.d.dataProps[F].p) });
        }
        var c, E = y.d ? y.d.length : 0, x = {};
        for (c = 0; c < E; c += 1) h(c), v.d.dataProps[c].p.setGroupProperty(u);
        function M(F) {
          return F === "Color" || F === "color" ? M.color : F === "Opacity" || F === "opacity" ? M.opacity : F === "Stroke Width" || F === "stroke width" ? M.strokeWidth : null;
        }
        return Object.defineProperties(M, { color: { get: ExpressionPropertyInterface(v.c) }, opacity: { get: ExpressionPropertyInterface(v.o) }, strokeWidth: { get: ExpressionPropertyInterface(v.w) }, dash: { get: function() {
          return x;
        } }, _name: { value: y.nm }, mn: { value: y.mn } }), v.c.setGroupProperty(PropertyInterface("Color", f)), v.o.setGroupProperty(PropertyInterface("Opacity", f)), v.w.setGroupProperty(PropertyInterface("Stroke Width", f)), M;
      }
      function l(y, v, A) {
        function f(h) {
          return h === y.e.ix || h === "End" || h === "end" ? f.end : h === y.s.ix ? f.start : h === y.o.ix ? f.offset : null;
        }
        var u = propertyGroupFactory(f, A);
        return f.propertyIndex = y.ix, v.s.setGroupProperty(PropertyInterface("Start", u)), v.e.setGroupProperty(PropertyInterface("End", u)), v.o.setGroupProperty(PropertyInterface("Offset", u)), f.propertyIndex = y.ix, f.propertyGroup = A, Object.defineProperties(f, { start: { get: ExpressionPropertyInterface(v.s) }, end: { get: ExpressionPropertyInterface(v.e) }, offset: { get: ExpressionPropertyInterface(v.o) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function o(y, v, A) {
        function f(h) {
          return y.a.ix === h || h === "Anchor Point" ? f.anchorPoint : y.o.ix === h || h === "Opacity" ? f.opacity : y.p.ix === h || h === "Position" ? f.position : y.r.ix === h || h === "Rotation" || h === "ADBE Vector Rotation" ? f.rotation : y.s.ix === h || h === "Scale" ? f.scale : y.sk && y.sk.ix === h || h === "Skew" ? f.skew : y.sa && y.sa.ix === h || h === "Skew Axis" ? f.skewAxis : null;
        }
        var u = propertyGroupFactory(f, A);
        return v.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", u)), v.transform.mProps.p.setGroupProperty(PropertyInterface("Position", u)), v.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", u)), v.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", u)), v.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", u)), v.transform.mProps.sk && (v.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", u)), v.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", u))), v.transform.op.setGroupProperty(PropertyInterface("Opacity", u)), Object.defineProperties(f, { opacity: { get: ExpressionPropertyInterface(v.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(v.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(v.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(v.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(v.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(v.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(v.transform.mProps.sa) }, _name: { value: y.nm } }), f.ty = "tr", f.mn = y.mn, f.propertyGroup = A, f;
      }
      function d(y, v, A) {
        function f(c) {
          return y.p.ix === c ? f.position : y.s.ix === c ? f.size : null;
        }
        var u = propertyGroupFactory(f, A);
        f.propertyIndex = y.ix;
        var h = v.sh.ty === "tm" ? v.sh.prop : v.sh;
        return h.s.setGroupProperty(PropertyInterface("Size", u)), h.p.setGroupProperty(PropertyInterface("Position", u)), Object.defineProperties(f, { size: { get: ExpressionPropertyInterface(h.s) }, position: { get: ExpressionPropertyInterface(h.p) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function g(y, v, A) {
        function f(c) {
          return y.p.ix === c ? f.position : y.r.ix === c ? f.rotation : y.pt.ix === c ? f.points : y.or.ix === c || c === "ADBE Vector Star Outer Radius" ? f.outerRadius : y.os.ix === c ? f.outerRoundness : y.ir && (y.ir.ix === c || c === "ADBE Vector Star Inner Radius") ? f.innerRadius : y.is && y.is.ix === c ? f.innerRoundness : null;
        }
        var u = propertyGroupFactory(f, A), h = v.sh.ty === "tm" ? v.sh.prop : v.sh;
        return f.propertyIndex = y.ix, h.or.setGroupProperty(PropertyInterface("Outer Radius", u)), h.os.setGroupProperty(PropertyInterface("Outer Roundness", u)), h.pt.setGroupProperty(PropertyInterface("Points", u)), h.p.setGroupProperty(PropertyInterface("Position", u)), h.r.setGroupProperty(PropertyInterface("Rotation", u)), y.ir && (h.ir.setGroupProperty(PropertyInterface("Inner Radius", u)), h.is.setGroupProperty(PropertyInterface("Inner Roundness", u))), Object.defineProperties(f, { position: { get: ExpressionPropertyInterface(h.p) }, rotation: { get: ExpressionPropertyInterface(h.r) }, points: { get: ExpressionPropertyInterface(h.pt) }, outerRadius: { get: ExpressionPropertyInterface(h.or) }, outerRoundness: { get: ExpressionPropertyInterface(h.os) }, innerRadius: { get: ExpressionPropertyInterface(h.ir) }, innerRoundness: { get: ExpressionPropertyInterface(h.is) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function _(y, v, A) {
        function f(c) {
          return y.p.ix === c ? f.position : y.r.ix === c ? f.roundness : y.s.ix === c || c === "Size" || c === "ADBE Vector Rect Size" ? f.size : null;
        }
        var u = propertyGroupFactory(f, A), h = v.sh.ty === "tm" ? v.sh.prop : v.sh;
        return f.propertyIndex = y.ix, h.p.setGroupProperty(PropertyInterface("Position", u)), h.s.setGroupProperty(PropertyInterface("Size", u)), h.r.setGroupProperty(PropertyInterface("Rotation", u)), Object.defineProperties(f, { position: { get: ExpressionPropertyInterface(h.p) }, roundness: { get: ExpressionPropertyInterface(h.r) }, size: { get: ExpressionPropertyInterface(h.s) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function p(y, v, A) {
        function f(c) {
          return y.r.ix === c || c === "Round Corners 1" ? f.radius : null;
        }
        var u = propertyGroupFactory(f, A), h = v;
        return f.propertyIndex = y.ix, h.rd.setGroupProperty(PropertyInterface("Radius", u)), Object.defineProperties(f, { radius: { get: ExpressionPropertyInterface(h.rd) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      function P(y, v, A) {
        function f(c) {
          return y.c.ix === c || c === "Copies" ? f.copies : y.o.ix === c || c === "Offset" ? f.offset : null;
        }
        var u = propertyGroupFactory(f, A), h = v;
        return f.propertyIndex = y.ix, h.c.setGroupProperty(PropertyInterface("Copies", u)), h.o.setGroupProperty(PropertyInterface("Offset", u)), Object.defineProperties(f, { copies: { get: ExpressionPropertyInterface(h.c) }, offset: { get: ExpressionPropertyInterface(h.o) }, _name: { value: y.nm } }), f.mn = y.mn, f;
      }
      return function(y, v, A) {
        var f;
        function u(c) {
          if (typeof c == "number") return c = c === void 0 ? 1 : c, c === 0 ? A : f[c - 1];
          for (var E = 0, x = f.length; E < x; ) {
            if (f[E]._name === c) return f[E];
            E += 1;
          }
          return null;
        }
        function h() {
          return A;
        }
        return u.propertyGroup = propertyGroupFactory(u, h), f = t(y, v, u.propertyGroup), u.numProperties = f.length, u._name = "Contents", u;
      };
    }(), TextExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        var e;
        function r(i) {
          switch (i) {
            case "ADBE Text Document":
              return r.sourceText;
            default:
              return null;
          }
        }
        return Object.defineProperty(r, "sourceText", { get: function() {
          t.textProperty.getValue();
          var s = t.textProperty.currentData.t;
          return (!e || s !== e.value) && (e = new String(s), e.value = s || new String(s), Object.defineProperty(e, "style", { get: function() {
            return { fillColor: t.textProperty.currentData.fc };
          } })), e;
        } }), r;
      };
    }();
    function _typeof(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
        return typeof r;
      } : _typeof = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof(t);
    }
    var FootageInterface = /* @__PURE__ */ function() {
      var t = function(i) {
        var s = "", n = i.getFootageData();
        function a() {
          return s = "", n = i.getFootageData(), l;
        }
        function l(o) {
          if (n[o]) return s = o, n = n[o], _typeof(n) === "object" ? l : n;
          var d = o.indexOf(s);
          if (d !== -1) {
            var g = parseInt(o.substr(d + s.length), 10);
            return n = n[g], _typeof(n) === "object" ? l : n;
          }
          return "";
        }
        return a;
      }, e = function(i) {
        function s(n) {
          return n === "Outline" ? s.outlineInterface() : null;
        }
        return s._name = "Outline", s.outlineInterface = t(i), s;
      };
      return function(r) {
        function i(s) {
          return s === "Data" ? i.dataInterface : null;
        }
        return i._name = "Data", i.dataInterface = e(r), i;
      };
    }(), interfaces = { layer: LayerExpressionInterface, effects: EffectsExpressionInterface, comp: CompExpressionInterface, shape: ShapeExpressionInterface, text: TextExpressionInterface, footage: FootageInterface };
    function getInterface(t) {
      return interfaces[t] || null;
    }
    var expressionHelpers = /* @__PURE__ */ function() {
      function t(a, l, o) {
        l.x && (o.k = true, o.x = true, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(a, l, o).bind(o)));
      }
      function e(a) {
        return a *= this.elem.globalData.frameRate, a -= this.offsetTime, a !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < a ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(a, this._cachingAtTime), this._cachingAtTime.lastFrame = a), this._cachingAtTime.value;
      }
      function r(a) {
        var l = -0.01, o = this.getValueAtTime(a), d = this.getValueAtTime(a + l), g = 0;
        if (o.length) {
          var _;
          for (_ = 0; _ < o.length; _ += 1) g += Math.pow(d[_] - o[_], 2);
          g = Math.sqrt(g) * 100;
        } else g = 0;
        return g;
      }
      function i(a) {
        if (this.vel !== void 0) return this.vel;
        var l = -1e-3, o = this.getValueAtTime(a), d = this.getValueAtTime(a + l), g;
        if (o.length) {
          g = createTypedArray("float32", o.length);
          var _;
          for (_ = 0; _ < o.length; _ += 1) g[_] = (d[_] - o[_]) / l;
        } else g = (d - o) / l;
        return g;
      }
      function s() {
        return this.pv;
      }
      function n(a) {
        this.propertyGroup = a;
      }
      return { searchExpressions: t, getSpeedAtTime: r, getVelocityAtTime: i, getValueAtTime: e, getStaticValueAtTime: s, setGroupProperty: n };
    }();
    function addPropertyDecorator() {
      function t(p, P, y) {
        if (!this.k || !this.keyframes) return this.pv;
        p = p ? p.toLowerCase() : "";
        var v = this.comp.renderedFrame, A = this.keyframes, f = A[A.length - 1].t;
        if (v <= f) return this.pv;
        var u, h;
        y ? (P ? u = Math.abs(f - this.elem.comp.globalData.frameRate * P) : u = Math.max(0, f - this.elem.data.ip), h = f - u) : ((!P || P > A.length - 1) && (P = A.length - 1), h = A[A.length - 1 - P].t, u = f - h);
        var c, E, x;
        if (p === "pingpong") {
          var M = Math.floor((v - h) / u);
          if (M % 2 !== 0) return this.getValueAtTime((u - (v - h) % u + h) / this.comp.globalData.frameRate, 0);
        } else if (p === "offset") {
          var F = this.getValueAtTime(h / this.comp.globalData.frameRate, 0), I = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), G = this.getValueAtTime(((v - h) % u + h) / this.comp.globalData.frameRate, 0), R = Math.floor((v - h) / u);
          if (this.pv.length) {
            for (x = new Array(F.length), E = x.length, c = 0; c < E; c += 1) x[c] = (I[c] - F[c]) * R + G[c];
            return x;
          }
          return (I - F) * R + G;
        } else if (p === "continue") {
          var V = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), L = this.getValueAtTime((f - 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (x = new Array(V.length), E = x.length, c = 0; c < E; c += 1) x[c] = V[c] + (V[c] - L[c]) * ((v - f) / this.comp.globalData.frameRate) / 5e-4;
            return x;
          }
          return V + (V - L) * ((v - f) / 1e-3);
        }
        return this.getValueAtTime(((v - h) % u + h) / this.comp.globalData.frameRate, 0);
      }
      function e(p, P, y) {
        if (!this.k) return this.pv;
        p = p ? p.toLowerCase() : "";
        var v = this.comp.renderedFrame, A = this.keyframes, f = A[0].t;
        if (v >= f) return this.pv;
        var u, h;
        y ? (P ? u = Math.abs(this.elem.comp.globalData.frameRate * P) : u = Math.max(0, this.elem.data.op - f), h = f + u) : ((!P || P > A.length - 1) && (P = A.length - 1), h = A[P].t, u = h - f);
        var c, E, x;
        if (p === "pingpong") {
          var M = Math.floor((f - v) / u);
          if (M % 2 === 0) return this.getValueAtTime(((f - v) % u + f) / this.comp.globalData.frameRate, 0);
        } else if (p === "offset") {
          var F = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), I = this.getValueAtTime(h / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((u - (f - v) % u + f) / this.comp.globalData.frameRate, 0), R = Math.floor((f - v) / u) + 1;
          if (this.pv.length) {
            for (x = new Array(F.length), E = x.length, c = 0; c < E; c += 1) x[c] = G[c] - (I[c] - F[c]) * R;
            return x;
          }
          return G - (I - F) * R;
        } else if (p === "continue") {
          var V = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), L = this.getValueAtTime((f + 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (x = new Array(V.length), E = x.length, c = 0; c < E; c += 1) x[c] = V[c] + (V[c] - L[c]) * (f - v) / 1e-3;
            return x;
          }
          return V + (V - L) * (f - v) / 1e-3;
        }
        return this.getValueAtTime((u - ((f - v) % u + f)) / this.comp.globalData.frameRate, 0);
      }
      function r(p, P) {
        if (!this.k) return this.pv;
        if (p = (p || 0.4) * 0.5, P = Math.floor(P || 5), P <= 1) return this.pv;
        var y = this.comp.renderedFrame / this.comp.globalData.frameRate, v = y - p, A = y + p, f = P > 1 ? (A - v) / (P - 1) : 1, u = 0, h = 0, c;
        this.pv.length ? c = createTypedArray("float32", this.pv.length) : c = 0;
        for (var E; u < P; ) {
          if (E = this.getValueAtTime(v + u * f), this.pv.length) for (h = 0; h < this.pv.length; h += 1) c[h] += E[h];
          else c += E;
          u += 1;
        }
        if (this.pv.length) for (h = 0; h < this.pv.length; h += 1) c[h] /= P;
        else c /= P;
        return c;
      }
      function i(p) {
        this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
        var P = this._transformCachingAtTime.v;
        if (P.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var y = this.a.getValueAtTime(p);
          P.translate(-y[0] * this.a.mult, -y[1] * this.a.mult, y[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var v = this.s.getValueAtTime(p);
          P.scale(v[0] * this.s.mult, v[1] * this.s.mult, v[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var A = this.sk.getValueAtTime(p), f = this.sa.getValueAtTime(p);
          P.skewFromAxis(-A * this.sk.mult, f * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var u = this.r.getValueAtTime(p);
          P.rotate(-u * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var h = this.rz.getValueAtTime(p), c = this.ry.getValueAtTime(p), E = this.rx.getValueAtTime(p), x = this.or.getValueAtTime(p);
          P.rotateZ(-h * this.rz.mult).rotateY(c * this.ry.mult).rotateX(E * this.rx.mult).rotateZ(-x[2] * this.or.mult).rotateY(x[1] * this.or.mult).rotateX(x[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var M = this.px.getValueAtTime(p), F = this.py.getValueAtTime(p);
          if (this.data.p.z) {
            var I = this.pz.getValueAtTime(p);
            P.translate(M * this.px.mult, F * this.py.mult, -I * this.pz.mult);
          } else P.translate(M * this.px.mult, F * this.py.mult, 0);
        } else {
          var G = this.p.getValueAtTime(p);
          P.translate(G[0] * this.p.mult, G[1] * this.p.mult, -G[2] * this.p.mult);
        }
        return P;
      }
      function s() {
        return this.v.clone(new Matrix());
      }
      var n = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(p, P, y) {
        var v = n(p, P, y);
        return v.dynamicProperties.length ? v.getValueAtTime = i.bind(v) : v.getValueAtTime = s.bind(v), v.setGroupProperty = expressionHelpers.setGroupProperty, v;
      };
      var a = PropertyFactory.getProp;
      PropertyFactory.getProp = function(p, P, y, v, A) {
        var f = a(p, P, y, v, A);
        f.kf ? f.getValueAtTime = expressionHelpers.getValueAtTime.bind(f) : f.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(f), f.setGroupProperty = expressionHelpers.setGroupProperty, f.loopOut = t, f.loopIn = e, f.smooth = r, f.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(f), f.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(f), f.numKeys = P.a === 1 ? P.k.length : 0, f.propertyIndex = P.ix;
        var u = 0;
        return y !== 0 && (u = createTypedArray("float32", P.a === 1 ? P.k[0].s.length : P.k.length)), f._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: u }, expressionHelpers.searchExpressions(p, P, f), f.k && A.addDynamicProperty(f), f;
      };
      function l(p) {
        return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), p *= this.elem.globalData.frameRate, p -= this.offsetTime, p !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < p ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = p, this.interpolateShape(p, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }
      var o = ShapePropertyFactory.getConstructorFunction(), d = ShapePropertyFactory.getKeyframedConstructorFunction();
      function g() {
      }
      g.prototype = { vertices: function(P, y) {
        this.k && this.getValue();
        var v = this.v;
        y !== void 0 && (v = this.getValueAtTime(y, 0));
        var A, f = v._length, u = v[P], h = v.v, c = createSizedArray(f);
        for (A = 0; A < f; A += 1) P === "i" || P === "o" ? c[A] = [u[A][0] - h[A][0], u[A][1] - h[A][1]] : c[A] = [u[A][0], u[A][1]];
        return c;
      }, points: function(P) {
        return this.vertices("v", P);
      }, inTangents: function(P) {
        return this.vertices("i", P);
      }, outTangents: function(P) {
        return this.vertices("o", P);
      }, isClosed: function() {
        return this.v.c;
      }, pointOnPath: function(P, y) {
        var v = this.v;
        y !== void 0 && (v = this.getValueAtTime(y, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(v));
        for (var A = this._segmentsLength, f = A.lengths, u = A.totalLength * P, h = 0, c = f.length, E = 0, x; h < c; ) {
          if (E + f[h].addedLength > u) {
            var M = h, F = v.c && h === c - 1 ? 0 : h + 1, I = (u - E) / f[h].addedLength;
            x = bez.getPointInSegment(v.v[M], v.v[F], v.o[M], v.i[F], I, f[h]);
            break;
          } else E += f[h].addedLength;
          h += 1;
        }
        return x || (x = v.c ? [v.v[0][0], v.v[0][1]] : [v.v[v._length - 1][0], v.v[v._length - 1][1]]), x;
      }, vectorOnPath: function(P, y, v) {
        P == 1 ? P = this.v.c : P == 0 && (P = 0.999);
        var A = this.pointOnPath(P, y), f = this.pointOnPath(P + 1e-3, y), u = f[0] - A[0], h = f[1] - A[1], c = Math.sqrt(Math.pow(u, 2) + Math.pow(h, 2));
        if (c === 0) return [0, 0];
        var E = v === "tangent" ? [u / c, h / c] : [-h / c, u / c];
        return E;
      }, tangentOnPath: function(P, y) {
        return this.vectorOnPath(P, y, "tangent");
      }, normalOnPath: function(P, y) {
        return this.vectorOnPath(P, y, "normal");
      }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([g], o), extendPrototype([g], d), d.prototype.getValueAtTime = l, d.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var _ = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(p, P, y, v, A) {
        var f = _(p, P, y, v, A);
        return f.propertyIndex = P.ix, f.lock = false, y === 3 ? expressionHelpers.searchExpressions(p, P.pt, f) : y === 4 && expressionHelpers.searchExpressions(p, P.ks, f), f.k && p.addDynamicProperty(f), f;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      function t() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), true) : null;
      }
      TextProperty.prototype.getExpressionValue = function(e, r) {
        var i = this.calculateExpression(r);
        if (e.t !== i) {
          var s = {};
          return this.copyData(s, e), s.t = i.toString(), s.__complete = false, s;
        }
        return e;
      }, TextProperty.prototype.searchProperty = function() {
        var e = this.searchKeyframes(), r = this.searchExpressions();
        return this.kf = e || r, this.kf;
      }, TextProperty.prototype.searchExpressions = t;
    }
    function initialize() {
      addDecorator();
    }
    function SVGComposableEffect() {
    }
    SVGComposableEffect.prototype = { createMergeNode: function t(e, r) {
      var i = createNS("feMerge");
      i.setAttribute("result", e);
      var s, n;
      for (n = 0; n < r.length; n += 1) s = createNS("feMergeNode"), s.setAttribute("in", r[n]), i.appendChild(s), i.appendChild(s);
      return i;
    } };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(t, e, r, i, s) {
      this.filterManager = e;
      var n = createNS("feColorMatrix");
      n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = n, n.setAttribute("result", i + "_tint_1"), t.appendChild(n), n = createNS("feColorMatrix"), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", i + "_tint_2"), t.appendChild(n), this.matrixFilter = n;
      var a = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
      t.appendChild(a);
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
      }
    };
    function SVGFillFilter(t, e, r, i) {
      this.filterManager = e;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s;
    }
    SVGFillFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
      }
    };
    function SVGStrokeEffect(t, e, r) {
      this.initialized = false, this.filterManager = e, this.elem = r, this.paths = [];
    }
    SVGStrokeEffect.prototype.initialize = function() {
      var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, r, i, s;
      for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, s = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < s; i += 1) e = createNS("path"), r.appendChild(e), this.paths.push({ p: e, m: i });
      if (this.filterManager.effectElements[10].p.v === 3) {
        var n = createNS("mask"), a = createElementID();
        n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(r), this.elem.globalData.defs.appendChild(n);
        var l = createNS("g");
        for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); t[0]; ) l.appendChild(t[0]);
        this.elem.layerElement.appendChild(l), this.masker = n, r.setAttribute("stroke", "#fff");
      } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
        if (this.filterManager.effectElements[10].p.v === 2) for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length; ) this.elem.layerElement.removeChild(t[0]);
        this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff");
      }
      this.initialized = true, this.pathMasker = r;
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
      this.initialized || this.initialize();
      var e, r = this.paths.length, i, s;
      for (e = 0; e < r; e += 1) if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
        var n;
        if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
          var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, o = s.getTotalLength();
          n = "0 0 0 " + o * a + " ";
          var d = o * (l - a), g = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01, _ = Math.floor(d / g), p;
          for (p = 0; p < _; p += 1) n += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
          n += "0 " + o * 10 + " 0 0";
        } else n = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
        s.setAttribute("stroke-dasharray", n);
      }
      if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
        var P = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(P[0] * 255) + "," + bmFloor(P[1] * 255) + "," + bmFloor(P[2] * 255) + ")");
      }
    };
    function SVGTritoneFilter(t, e, r, i) {
      this.filterManager = e;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
      var n = createNS("feComponentTransfer");
      n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", i), this.matrixFilter = n;
      var a = createNS("feFuncR");
      a.setAttribute("type", "table"), n.appendChild(a), this.feFuncR = a;
      var l = createNS("feFuncG");
      l.setAttribute("type", "table"), n.appendChild(l), this.feFuncG = l;
      var o = createNS("feFuncB");
      o.setAttribute("type", "table"), n.appendChild(o), this.feFuncB = o, t.appendChild(n);
    }
    SVGTritoneFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + e[0], n = i[1] + " " + r[1] + " " + e[1], a = i[2] + " " + r[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a);
      }
    };
    function SVGProLevelsFilter(t, e, r, i) {
      this.filterManager = e;
      var s = this.filterManager.effectElements, n = createNS("feComponentTransfer");
      (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (n = createNS("feComponentTransfer"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", i), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n));
    }
    SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
      var r = createNS(t);
      return r.setAttribute("type", "table"), e.appendChild(r), r;
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
      for (var n = 0, a = 256, l, o = Math.min(t, e), d = Math.max(t, e), g = Array.call(null, { length: a }), _, p = 0, P = s - i, y = e - t; n <= 256; ) l = n / 256, l <= o ? _ = y < 0 ? s : i : l >= d ? _ = y < 0 ? i : s : _ = i + P * Math.pow((l - t) / y, 1 / r), g[p] = _, p += 1, n += 256 / (a - 1);
      return g.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e, r = this.filterManager.effectElements;
        this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
      }
    };
    function SVGDropShadowEffect(t, e, r, i, s) {
      var n = e.container.globalData.renderConfig.filterSize, a = e.data.fs || n;
      t.setAttribute("x", a.x || n.x), t.setAttribute("y", a.y || n.y), t.setAttribute("width", a.width || n.width), t.setAttribute("height", a.height || n.height), this.filterManager = e;
      var l = createNS("feGaussianBlur");
      l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", i + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, t.appendChild(l);
      var o = createNS("feOffset");
      o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
      var d = createNS("feFlood");
      d.setAttribute("flood-color", "#00ff00"), d.setAttribute("flood-opacity", "1"), d.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = d, t.appendChild(d);
      var g = createNS("feComposite");
      g.setAttribute("in", i + "_drop_shadow_3"), g.setAttribute("in2", i + "_drop_shadow_2"), g.setAttribute("operator", "in"), g.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(g);
      var _ = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
      t.appendChild(_);
    }
    extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)));
        }
        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i), n = r * Math.sin(i);
          this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", n);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(t, e, r) {
      this.initialized = false, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
    }
    SVGMatte3Effect.prototype.findSymbol = function(t) {
      for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
        e += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
      var r = t.layerElement.parentNode;
      if (r) {
        for (var i = r.children, s = 0, n = i.length; s < n && i[s] !== t.layerElement; ) s += 1;
        var a;
        s <= n - 2 && (a = i[s + 1]);
        var l = createNS("use");
        l.setAttribute("href", "#" + e), a ? r.insertBefore(l, a) : r.appendChild(l);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
      if (!this.findSymbol(e)) {
        var r = createElementID(), i = createNS("mask");
        i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
        var s = t.globalData.defs;
        s.appendChild(i);
        var n = createNS("symbol");
        n.setAttribute("id", r), this.replaceInParent(e, r), n.appendChild(e.layerElement), s.appendChild(n);
        var a = createNS("use");
        a.setAttribute("href", "#" + r), i.appendChild(a), e.data.hd = false, e.show();
      }
      t.setMatte(e.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; ) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
      this.initialized = true;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    };
    function SVGGaussianBlurEffect(t, e, r, i) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
      var s = createNS("feGaussianBlur");
      s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s;
    }
    SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = 0.3, r = this.filterManager.effectElements[0].p.v * e, i = this.filterManager.effectElements[1].p.v, s = i == 3 ? 0 : r, n = i == 2 ? 0 : r;
        this.feGaussianBlur.setAttribute("stdDeviation", s + " " + n);
        var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", a);
      }
    };
    function TransformEffect() {
    }
    TransformEffect.prototype.init = function(t) {
      this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = false, this._opMdf = false;
    }, TransformEffect.prototype.renderFrame = function(t) {
      if (this._opMdf = false, this._mdf = false, t || this.effectsManager._mdf) {
        var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, s = e[2].p.v === 1, n = e[3].p.v, a = s ? n : e[4].p.v, l = e[5].p.v, o = e[6].p.v, d = e[7].p.v;
        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(a * 0.01, n * 0.01, 1), this.matrix.rotate(-d * degToRads), this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = true, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = true);
      }
    };
    function SVGTransformEffect(t, e) {
      this.init(e);
    }
    return extendPrototype([TransformEffect], SVGTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, true), registerEffect$1(21, SVGFillFilter, true), registerEffect$1(22, SVGStrokeEffect, false), registerEffect$1(23, SVGTritoneFilter, true), registerEffect$1(24, SVGProLevelsFilter, true), registerEffect$1(25, SVGDropShadowEffect, true), registerEffect$1(28, SVGMatte3Effect, false), registerEffect$1(29, SVGGaussianBlurEffect, true), registerEffect$1(35, SVGTransformEffect, false), lottie;
  });
});
var lottie_htmlX3TYKVQI = mt();
export {
  lottie_htmlX3TYKVQI as default
};
/*! Bundled license information:

@dotlottie/common/dist/lottie_html-X3TYKVQI.js:
  (*! Bundled license information:
  
  lottie-web/build/player/lottie_html.js:
    (*!
     Transformation Matrix v2.0
     (c) Epistemex 2014-2015
     www.epistemex.com
     By Ken Fyrstenberg
     Contributions by leeoniya.
     License: MIT, header required.
     *)
  *)
*/
//# sourceMappingURL=lottie_html-X3TYKVQI-O5COVFN4.js.map
