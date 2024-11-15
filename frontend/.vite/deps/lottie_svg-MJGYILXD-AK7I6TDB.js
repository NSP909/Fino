import {
  m
} from "./chunk-USPGI4ZR.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/lottie_svg-MJGYILXD.js
var dt = m((exports, module) => {
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
    var subframeEnabled = true, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMin = Math.min, BMMath = {};
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
      var i, s, n, a, p, o, m2, b;
      switch (a = Math.floor(t * 6), p = t * 6 - a, o = r * (1 - e), m2 = r * (1 - p * e), b = r * (1 - (1 - p) * e), a % 6) {
        case 0:
          i = r, s = b, n = o;
          break;
        case 1:
          i = m2, s = r, n = o;
          break;
        case 2:
          i = o, s = r, n = b;
          break;
        case 3:
          i = o, s = m2, n = r;
          break;
        case 4:
          i = b, s = o, n = r;
          break;
        case 5:
          i = r, s = o, n = m2;
          break;
      }
      return [i, s, n];
    }
    function RGBtoHSV(t, e, r) {
      var i = Math.max(t, e, r), s = Math.min(t, e, r), n = i - s, a, p = i === 0 ? 0 : n / i, o = i / 255;
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
      return [a, p, o];
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
      function a(c) {
        if (window.Worker && window.Blob && getWebWorker()) {
          var P = new Blob(["var _workerSelf = self; self.onmessage = ", c.toString()], { type: "text/javascript" }), y = URL.createObjectURL(P);
          return new Worker(y);
        }
        return r = c, s;
      }
      function p() {
        i || (i = a(function(P) {
          function y() {
            function A(w, S) {
              var T, d, g = w.length, k, I, R, N;
              for (d = 0; d < g; d += 1) if (T = w[d], "ks" in T && !T.completed) {
                if (T.completed = true, T.hasMask) {
                  var z = T.masksProperties;
                  for (I = z.length, k = 0; k < I; k += 1) if (z[k].pt.k.i) _(z[k].pt.k);
                  else for (N = z[k].pt.k.length, R = 0; R < N; R += 1) z[k].pt.k[R].s && _(z[k].pt.k[R].s[0]), z[k].pt.k[R].e && _(z[k].pt.k[R].e[0]);
                }
                T.ty === 0 ? (T.layers = h(T.refId, S), A(T.layers, S)) : T.ty === 4 ? u(T.shapes) : T.ty === 5 && G(T);
              }
            }
            function l(w, S) {
              if (w) {
                var T = 0, d = w.length;
                for (T = 0; T < d; T += 1) w[T].t === 1 && (w[T].data.layers = h(w[T].data.refId, S), A(w[T].data.layers, S));
              }
            }
            function f(w, S) {
              for (var T = 0, d = S.length; T < d; ) {
                if (S[T].id === w) return S[T];
                T += 1;
              }
              return null;
            }
            function h(w, S) {
              var T = f(w, S);
              return T ? T.layers.__used ? JSON.parse(JSON.stringify(T.layers)) : (T.layers.__used = true, T.layers) : null;
            }
            function u(w) {
              var S, T = w.length, d, g;
              for (S = T - 1; S >= 0; S -= 1) if (w[S].ty === "sh") if (w[S].ks.k.i) _(w[S].ks.k);
              else for (g = w[S].ks.k.length, d = 0; d < g; d += 1) w[S].ks.k[d].s && _(w[S].ks.k[d].s[0]), w[S].ks.k[d].e && _(w[S].ks.k[d].e[0]);
              else w[S].ty === "gr" && u(w[S].it);
            }
            function _(w) {
              var S, T = w.i.length;
              for (S = 0; S < T; S += 1) w.i[S][0] += w.v[S][0], w.i[S][1] += w.v[S][1], w.o[S][0] += w.v[S][0], w.o[S][1] += w.v[S][1];
            }
            function E(w, S) {
              var T = S ? S.split(".") : [100, 100, 100];
              return w[0] > T[0] ? true : T[0] > w[0] ? false : w[1] > T[1] ? true : T[1] > w[1] ? false : w[2] > T[2] ? true : T[2] > w[2] ? false : null;
            }
            var M = /* @__PURE__ */ function() {
              var w = [4, 4, 14];
              function S(d) {
                var g = d.t.d;
                d.t.d = { k: [{ s: g, t: 0 }] };
              }
              function T(d) {
                var g, k = d.length;
                for (g = 0; g < k; g += 1) d[g].ty === 5 && S(d[g]);
              }
              return function(d) {
                if (E(w, d.v) && (T(d.layers), d.assets)) {
                  var g, k = d.assets.length;
                  for (g = 0; g < k; g += 1) d.assets[g].layers && T(d.assets[g].layers);
                }
              };
            }(), F = /* @__PURE__ */ function() {
              var w = [4, 7, 99];
              return function(S) {
                if (S.chars && !E(w, S.v)) {
                  var T, d = S.chars.length;
                  for (T = 0; T < d; T += 1) {
                    var g = S.chars[T];
                    g.data && g.data.shapes && (u(g.data.shapes), g.data.ip = 0, g.data.op = 99999, g.data.st = 0, g.data.sr = 1, g.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, S.chars[T].t || (g.data.shapes.push({ ty: "no" }), g.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                  }
                }
              };
            }(), C = /* @__PURE__ */ function() {
              var w = [5, 7, 15];
              function S(d) {
                var g = d.t.p;
                typeof g.a == "number" && (g.a = { a: 0, k: g.a }), typeof g.p == "number" && (g.p = { a: 0, k: g.p }), typeof g.r == "number" && (g.r = { a: 0, k: g.r });
              }
              function T(d) {
                var g, k = d.length;
                for (g = 0; g < k; g += 1) d[g].ty === 5 && S(d[g]);
              }
              return function(d) {
                if (E(w, d.v) && (T(d.layers), d.assets)) {
                  var g, k = d.assets.length;
                  for (g = 0; g < k; g += 1) d.assets[g].layers && T(d.assets[g].layers);
                }
              };
            }(), D = /* @__PURE__ */ function() {
              var w = [4, 1, 9];
              function S(d) {
                var g, k = d.length, I, R;
                for (g = 0; g < k; g += 1) if (d[g].ty === "gr") S(d[g].it);
                else if (d[g].ty === "fl" || d[g].ty === "st") if (d[g].c.k && d[g].c.k[0].i) for (R = d[g].c.k.length, I = 0; I < R; I += 1) d[g].c.k[I].s && (d[g].c.k[I].s[0] /= 255, d[g].c.k[I].s[1] /= 255, d[g].c.k[I].s[2] /= 255, d[g].c.k[I].s[3] /= 255), d[g].c.k[I].e && (d[g].c.k[I].e[0] /= 255, d[g].c.k[I].e[1] /= 255, d[g].c.k[I].e[2] /= 255, d[g].c.k[I].e[3] /= 255);
                else d[g].c.k[0] /= 255, d[g].c.k[1] /= 255, d[g].c.k[2] /= 255, d[g].c.k[3] /= 255;
              }
              function T(d) {
                var g, k = d.length;
                for (g = 0; g < k; g += 1) d[g].ty === 4 && S(d[g].shapes);
              }
              return function(d) {
                if (E(w, d.v) && (T(d.layers), d.assets)) {
                  var g, k = d.assets.length;
                  for (g = 0; g < k; g += 1) d.assets[g].layers && T(d.assets[g].layers);
                }
              };
            }(), L = /* @__PURE__ */ function() {
              var w = [4, 4, 18];
              function S(d) {
                var g, k = d.length, I, R;
                for (g = k - 1; g >= 0; g -= 1) if (d[g].ty === "sh") if (d[g].ks.k.i) d[g].ks.k.c = d[g].closed;
                else for (R = d[g].ks.k.length, I = 0; I < R; I += 1) d[g].ks.k[I].s && (d[g].ks.k[I].s[0].c = d[g].closed), d[g].ks.k[I].e && (d[g].ks.k[I].e[0].c = d[g].closed);
                else d[g].ty === "gr" && S(d[g].it);
              }
              function T(d) {
                var g, k, I = d.length, R, N, z, j;
                for (k = 0; k < I; k += 1) {
                  if (g = d[k], g.hasMask) {
                    var q = g.masksProperties;
                    for (N = q.length, R = 0; R < N; R += 1) if (q[R].pt.k.i) q[R].pt.k.c = q[R].cl;
                    else for (j = q[R].pt.k.length, z = 0; z < j; z += 1) q[R].pt.k[z].s && (q[R].pt.k[z].s[0].c = q[R].cl), q[R].pt.k[z].e && (q[R].pt.k[z].e[0].c = q[R].cl);
                  }
                  g.ty === 4 && S(g.shapes);
                }
              }
              return function(d) {
                if (E(w, d.v) && (T(d.layers), d.assets)) {
                  var g, k = d.assets.length;
                  for (g = 0; g < k; g += 1) d.assets[g].layers && T(d.assets[g].layers);
                }
              };
            }();
            function V(w) {
              w.__complete || (D(w), M(w), F(w), C(w), L(w), A(w.layers, w.assets), l(w.chars, w.assets), w.__complete = true);
            }
            function G(w) {
              w.t.a.length === 0 && "m" in w.t.p;
            }
            var B = {};
            return B.completeData = V, B.checkColors = D, B.checkChars = F, B.checkPathProperties = C, B.checkShapes = L, B.completeLayers = A, B;
          }
          if (n.dataManager || (n.dataManager = y()), n.assetLoader || (n.assetLoader = /* @__PURE__ */ function() {
            function A(f) {
              var h = f.getResponseHeader("content-type");
              return h && f.responseType === "json" && h.indexOf("json") !== -1 || f.response && _typeof$5(f.response) === "object" ? f.response : f.response && typeof f.response == "string" ? JSON.parse(f.response) : f.responseText ? JSON.parse(f.responseText) : null;
            }
            function l(f, h, u, _) {
              var E, M = new XMLHttpRequest();
              try {
                M.responseType = "json";
              } catch {
              }
              M.onreadystatechange = function() {
                if (M.readyState === 4) if (M.status === 200) E = A(M), u(E);
                else try {
                  E = A(M), u(E);
                } catch (F) {
                  _ && _(F);
                }
              };
              try {
                M.open(["G", "E", "T"].join(""), f, true);
              } catch {
                M.open(["G", "E", "T"].join(""), h + "/" + f, true);
              }
              M.send();
            }
            return { load: l };
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
        }), i.onmessage = function(c) {
          var P = c.data, y = P.id, v = e[y];
          e[y] = null, P.status === "success" ? v.onComplete(P.payload) : v.onError && v.onError();
        });
      }
      function o(c, P) {
        t += 1;
        var y = "processId_" + t;
        return e[y] = { onComplete: c, onError: P }, y;
      }
      function m2(c, P, y) {
        p();
        var v = o(P, y);
        i.postMessage({ type: "loadAnimation", path: c, fullPath: window.location.origin + window.location.pathname, id: v });
      }
      function b(c, P, y) {
        p();
        var v = o(P, y);
        i.postMessage({ type: "loadData", path: c, fullPath: window.location.origin + window.location.pathname, id: v });
      }
      function x(c, P, y) {
        p();
        var v = o(P, y);
        i.postMessage({ type: "complete", animation: c, id: v });
      }
      return { loadAnimation: m2, loadData: b, completeAnimation: x };
    }(), ImagePreloader = function() {
      var t = function() {
        var l = createTag("canvas");
        l.width = 1, l.height = 1;
        var f = l.getContext("2d");
        return f.fillStyle = "rgba(0,0,0,0)", f.fillRect(0, 0, 1, 1), l;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i(l, f, h) {
        var u = "";
        if (l.e) u = l.p;
        else if (f) {
          var _ = l.p;
          _.indexOf("images/") !== -1 && (_ = _.split("/")[1]), u = f + _;
        } else u = h, u += l.u ? l.u : "", u += l.p;
        return u;
      }
      function s(l) {
        var f = 0, h = setInterval((function() {
          var u = l.getBBox();
          (u.width || f > 500) && (this._imageLoaded(), clearInterval(h)), f += 1;
        }).bind(this), 50);
      }
      function n(l) {
        var f = i(l, this.assetsPath, this.path), h = createNS("image");
        isSafari ? this.testImageLoaded(h) : h.addEventListener("load", this._imageLoaded, false), h.addEventListener("error", (function() {
          u.img = t, this._imageLoaded();
        }).bind(this), false), h.setAttributeNS("http://www.w3.org/1999/xlink", "href", f), this._elementHelper.append ? this._elementHelper.append(h) : this._elementHelper.appendChild(h);
        var u = { img: h, assetData: l };
        return u;
      }
      function a(l) {
        var f = i(l, this.assetsPath, this.path), h = createTag("img");
        h.crossOrigin = "anonymous", h.addEventListener("load", this._imageLoaded, false), h.addEventListener("error", (function() {
          u.img = t, this._imageLoaded();
        }).bind(this), false), h.src = f;
        var u = { img: h, assetData: l };
        return u;
      }
      function p(l) {
        var f = { assetData: l }, h = i(l, this.assetsPath, this.path);
        return dataManager.loadData(h, (function(u) {
          f.img = u, this._footageLoaded();
        }).bind(this), (function() {
          f.img = {}, this._footageLoaded();
        }).bind(this)), f;
      }
      function o(l, f) {
        this.imagesLoadedCb = f;
        var h, u = l.length;
        for (h = 0; h < u; h += 1) l[h].layers || (!l[h].t || l[h].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(l[h]))) : l[h].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(l[h]))));
      }
      function m2(l) {
        this.path = l || "";
      }
      function b(l) {
        this.assetsPath = l || "";
      }
      function x(l) {
        for (var f = 0, h = this.images.length; f < h; ) {
          if (this.images[f].assetData === l) return this.images[f].img;
          f += 1;
        }
        return null;
      }
      function c() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function P() {
        return this.totalImages === this.loadedAssets;
      }
      function y() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function v(l, f) {
        l === "svg" ? (this._elementHelper = f, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function A() {
        this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = p.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return A.prototype = { loadAssets: o, setAssetsPath: b, setPath: m2, loadedImages: P, loadedFootages: y, destroy: c, getAsset: x, createImgData: a, createImageData: n, imageLoaded: e, footageLoaded: r, setCacheType: v }, A;
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
      function p(S) {
        for (var T = 0, d = S.target; T < i; ) e[T].animation === d && (e.splice(T, 1), T -= 1, i -= 1, d.isPaused || x()), T += 1;
      }
      function o(S, T) {
        if (!S) return null;
        for (var d = 0; d < i; ) {
          if (e[d].elem === S && e[d].elem !== null) return e[d].animation;
          d += 1;
        }
        var g = new AnimationItem();
        return c(g, S), g.setData(S, T), g;
      }
      function m2() {
        var S, T = e.length, d = [];
        for (S = 0; S < T; S += 1) d.push(e[S].animation);
        return d;
      }
      function b() {
        s += 1, D();
      }
      function x() {
        s -= 1;
      }
      function c(S, T) {
        S.addEventListener("destroy", p), S.addEventListener("_active", b), S.addEventListener("_idle", x), e.push({ elem: T, animation: S }), i += 1;
      }
      function P(S) {
        var T = new AnimationItem();
        return c(T, null), T.setParams(S), T;
      }
      function y(S, T) {
        var d;
        for (d = 0; d < i; d += 1) e[d].animation.setSpeed(S, T);
      }
      function v(S, T) {
        var d;
        for (d = 0; d < i; d += 1) e[d].animation.setDirection(S, T);
      }
      function A(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.play(S);
      }
      function l(S) {
        var T = S - r, d;
        for (d = 0; d < i; d += 1) e[d].animation.advanceTime(T);
        r = S, s && !a ? window.requestAnimationFrame(l) : n = true;
      }
      function f(S) {
        r = S, window.requestAnimationFrame(l);
      }
      function h(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.pause(S);
      }
      function u(S, T, d) {
        var g;
        for (g = 0; g < i; g += 1) e[g].animation.goToAndStop(S, T, d);
      }
      function _(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.stop(S);
      }
      function E(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.togglePause(S);
      }
      function M(S) {
        var T;
        for (T = i - 1; T >= 0; T -= 1) e[T].animation.destroy(S);
      }
      function F(S, T, d) {
        var g = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), k, I = g.length;
        for (k = 0; k < I; k += 1) d && g[k].setAttribute("data-bm-type", d), o(g[k], S);
        if (T && I === 0) {
          d || (d = "svg");
          var R = document.getElementsByTagName("body")[0];
          R.innerText = "";
          var N = createTag("div");
          N.style.width = "100%", N.style.height = "100%", N.setAttribute("data-bm-type", d), R.appendChild(N), o(N, S);
        }
      }
      function C() {
        var S;
        for (S = 0; S < i; S += 1) e[S].animation.resize();
      }
      function D() {
        !a && s && n && (window.requestAnimationFrame(f), n = false);
      }
      function L() {
        a = true;
      }
      function V() {
        a = false, D();
      }
      function G(S, T) {
        var d;
        for (d = 0; d < i; d += 1) e[d].animation.setVolume(S, T);
      }
      function B(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.mute(S);
      }
      function w(S) {
        var T;
        for (T = 0; T < i; T += 1) e[T].animation.unmute(S);
      }
      return t.registerAnimation = o, t.loadAnimation = P, t.setSpeed = y, t.setDirection = v, t.play = A, t.pause = h, t.stop = _, t.togglePause = E, t.searchAnimations = F, t.resize = C, t.goToAndStop = u, t.destroy = M, t.freeze = L, t.unfreeze = V, t.setVolume = G, t.mute = B, t.unmute = w, t.getRegisteredAnimations = m2, t;
    }(), BezierFactory = function() {
      var t = {};
      t.getBezierEasing = r;
      var e = {};
      function r(f, h, u, _, E) {
        var M = E || ("bez_" + f + "_" + h + "_" + u + "_" + _).replace(/\./g, "p");
        if (e[M]) return e[M];
        var F = new l([f, h, u, _]);
        return e[M] = F, F;
      }
      var i = 4, s = 1e-3, n = 1e-7, a = 10, p = 11, o = 1 / (p - 1), m2 = typeof Float32Array == "function";
      function b(f, h) {
        return 1 - 3 * h + 3 * f;
      }
      function x(f, h) {
        return 3 * h - 6 * f;
      }
      function c(f) {
        return 3 * f;
      }
      function P(f, h, u) {
        return ((b(h, u) * f + x(h, u)) * f + c(h)) * f;
      }
      function y(f, h, u) {
        return 3 * b(h, u) * f * f + 2 * x(h, u) * f + c(h);
      }
      function v(f, h, u, _, E) {
        var M, F, C = 0;
        do
          F = h + (u - h) / 2, M = P(F, _, E) - f, M > 0 ? u = F : h = F;
        while (Math.abs(M) > n && ++C < a);
        return F;
      }
      function A(f, h, u, _) {
        for (var E = 0; E < i; ++E) {
          var M = y(h, u, _);
          if (M === 0) return h;
          var F = P(h, u, _) - f;
          h -= F / M;
        }
        return h;
      }
      function l(f) {
        this._p = f, this._mSampleValues = m2 ? new Float32Array(p) : new Array(p), this._precomputed = false, this.get = this.get.bind(this);
      }
      return l.prototype = { get: function(h) {
        var u = this._p[0], _ = this._p[1], E = this._p[2], M = this._p[3];
        return this._precomputed || this._precompute(), u === _ && E === M ? h : h === 0 ? 0 : h === 1 ? 1 : P(this._getTForX(h), _, M);
      }, _precompute: function() {
        var h = this._p[0], u = this._p[1], _ = this._p[2], E = this._p[3];
        this._precomputed = true, (h !== u || _ !== E) && this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var h = this._p[0], u = this._p[2], _ = 0; _ < p; ++_) this._mSampleValues[_] = P(_ * o, h, u);
      }, _getTForX: function(h) {
        for (var u = this._p[0], _ = this._p[2], E = this._mSampleValues, M = 0, F = 1, C = p - 1; F !== C && E[F] <= h; ++F) M += o;
        --F;
        var D = (h - E[F]) / (E[F + 1] - E[F]), L = M + D * o, V = y(L, u, _);
        return V >= s ? A(h, L, u, _) : V === 0 ? L : v(h, M, M + o, u, _);
      } }, t;
    }(), pooling = /* @__PURE__ */ function() {
      function t(e) {
        return e.concat(createSizedArray(e.length));
      }
      return { double: t };
    }(), poolFactory = /* @__PURE__ */ function() {
      return function(t, e, r) {
        var i = 0, s = t, n = createSizedArray(s), a = { newElement: p, release: o };
        function p() {
          var m2;
          return i ? (i -= 1, m2 = n[i]) : m2 = e(), m2;
        }
        function o(m2) {
          i === s && (n = pooling.double(n), s *= 2), r && r(m2), n[i] = m2, i += 1;
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
      function e(c, P, y, v, A, l) {
        var f = c * v + P * A + y * l - A * v - l * c - y * P;
        return f > -1e-3 && f < 1e-3;
      }
      function r(c, P, y, v, A, l, f, h, u) {
        if (y === 0 && l === 0 && u === 0) return e(c, P, v, A, f, h);
        var _ = t.sqrt(t.pow(v - c, 2) + t.pow(A - P, 2) + t.pow(l - y, 2)), E = t.sqrt(t.pow(f - c, 2) + t.pow(h - P, 2) + t.pow(u - y, 2)), M = t.sqrt(t.pow(f - v, 2) + t.pow(h - A, 2) + t.pow(u - l, 2)), F;
        return _ > E ? _ > M ? F = _ - E - M : F = M - E - _ : M > E ? F = M - E - _ : F = E - _ - M, F > -1e-4 && F < 1e-4;
      }
      var i = /* @__PURE__ */ function() {
        return function(c, P, y, v) {
          var A = getDefaultCurveSegments(), l, f, h, u, _, E = 0, M, F = [], C = [], D = bezierLengthPool.newElement();
          for (h = y.length, l = 0; l < A; l += 1) {
            for (_ = l / (A - 1), M = 0, f = 0; f < h; f += 1) u = bmPow(1 - _, 3) * c[f] + 3 * bmPow(1 - _, 2) * _ * y[f] + 3 * (1 - _) * bmPow(_, 2) * v[f] + bmPow(_, 3) * P[f], F[f] = u, C[f] !== null && (M += bmPow(F[f] - C[f], 2)), C[f] = F[f];
            M && (M = bmSqrt(M), E += M), D.percents[l] = _, D.lengths[l] = E;
          }
          return D.addedLength = E, D;
        };
      }();
      function s(c) {
        var P = segmentsLengthPool.newElement(), y = c.c, v = c.v, A = c.o, l = c.i, f, h = c._length, u = P.lengths, _ = 0;
        for (f = 0; f < h - 1; f += 1) u[f] = i(v[f], v[f + 1], A[f], l[f + 1]), _ += u[f].addedLength;
        return y && h && (u[f] = i(v[f], v[0], A[f], l[0]), _ += u[f].addedLength), P.totalLength = _, P;
      }
      function n(c) {
        this.segmentLength = 0, this.points = new Array(c);
      }
      function a(c, P) {
        this.partialLength = c, this.point = P;
      }
      var p = /* @__PURE__ */ function() {
        var c = {};
        return function(P, y, v, A) {
          var l = (P[0] + "_" + P[1] + "_" + y[0] + "_" + y[1] + "_" + v[0] + "_" + v[1] + "_" + A[0] + "_" + A[1]).replace(/\./g, "p");
          if (!c[l]) {
            var f = getDefaultCurveSegments(), h, u, _, E, M, F = 0, C, D, L = null;
            P.length === 2 && (P[0] !== y[0] || P[1] !== y[1]) && e(P[0], P[1], y[0], y[1], P[0] + v[0], P[1] + v[1]) && e(P[0], P[1], y[0], y[1], y[0] + A[0], y[1] + A[1]) && (f = 2);
            var V = new n(f);
            for (_ = v.length, h = 0; h < f; h += 1) {
              for (D = createSizedArray(_), M = h / (f - 1), C = 0, u = 0; u < _; u += 1) E = bmPow(1 - M, 3) * P[u] + 3 * bmPow(1 - M, 2) * M * (P[u] + v[u]) + 3 * (1 - M) * bmPow(M, 2) * (y[u] + A[u]) + bmPow(M, 3) * y[u], D[u] = E, L !== null && (C += bmPow(D[u] - L[u], 2));
              C = bmSqrt(C), F += C, V.points[h] = new a(C, D), L = D;
            }
            V.segmentLength = F, c[l] = V;
          }
          return c[l];
        };
      }();
      function o(c, P) {
        var y = P.percents, v = P.lengths, A = y.length, l = bmFloor((A - 1) * c), f = c * P.addedLength, h = 0;
        if (l === A - 1 || l === 0 || f === v[l]) return y[l];
        for (var u = v[l] > f ? -1 : 1, _ = true; _; ) if (v[l] <= f && v[l + 1] > f ? (h = (f - v[l]) / (v[l + 1] - v[l]), _ = false) : l += u, l < 0 || l >= A - 1) {
          if (l === A - 1) return y[l];
          _ = false;
        }
        return y[l] + (y[l + 1] - y[l]) * h;
      }
      function m2(c, P, y, v, A, l) {
        var f = o(A, l), h = 1 - f, u = t.round((h * h * h * c[0] + (f * h * h + h * f * h + h * h * f) * y[0] + (f * f * h + h * f * f + f * h * f) * v[0] + f * f * f * P[0]) * 1e3) / 1e3, _ = t.round((h * h * h * c[1] + (f * h * h + h * f * h + h * h * f) * y[1] + (f * f * h + h * f * f + f * h * f) * v[1] + f * f * f * P[1]) * 1e3) / 1e3;
        return [u, _];
      }
      var b = createTypedArray("float32", 8);
      function x(c, P, y, v, A, l, f) {
        A < 0 ? A = 0 : A > 1 && (A = 1);
        var h = o(A, f);
        l = l > 1 ? 1 : l;
        var u = o(l, f), _, E = c.length, M = 1 - h, F = 1 - u, C = M * M * M, D = h * M * M * 3, L = h * h * M * 3, V = h * h * h, G = M * M * F, B = h * M * F + M * h * F + M * M * u, w = h * h * F + M * h * u + h * M * u, S = h * h * u, T = M * F * F, d = h * F * F + M * u * F + M * F * u, g = h * u * F + M * u * u + h * F * u, k = h * u * u, I = F * F * F, R = u * F * F + F * u * F + F * F * u, N = u * u * F + F * u * u + u * F * u, z = u * u * u;
        for (_ = 0; _ < E; _ += 1) b[_ * 4] = t.round((C * c[_] + D * y[_] + L * v[_] + V * P[_]) * 1e3) / 1e3, b[_ * 4 + 1] = t.round((G * c[_] + B * y[_] + w * v[_] + S * P[_]) * 1e3) / 1e3, b[_ * 4 + 2] = t.round((T * c[_] + d * y[_] + g * v[_] + k * P[_]) * 1e3) / 1e3, b[_ * 4 + 3] = t.round((I * c[_] + R * y[_] + N * v[_] + z * P[_]) * 1e3) / 1e3;
        return b;
      }
      return { getSegmentsLength: s, getNewSegment: x, getPointInSegment: m2, buildBezierData: p, pointOnLine2D: e, pointOnLine3D: r };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(t, e) {
      var r = this.offsetTime, i;
      this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
      for (var s = e.lastIndex, n = s, a = this.keyframes.length - 1, p = true, o, m2, b; p; ) {
        if (o = this.keyframes[n], m2 = this.keyframes[n + 1], n === a - 1 && t >= m2.t - r) {
          o.h && (o = m2), s = 0;
          break;
        }
        if (m2.t - r > t) {
          s = n;
          break;
        }
        n < a - 1 ? n += 1 : (s = 0, p = false);
      }
      b = this.keyframesMetadata[n] || {};
      var x, c, P, y, v, A, l = m2.t - r, f = o.t - r, h;
      if (o.to) {
        b.bezierData || (b.bezierData = bez.buildBezierData(o.s, m2.s || o.e, o.to, o.ti));
        var u = b.bezierData;
        if (t >= l || t < f) {
          var _ = t >= l ? u.points.length - 1 : 0;
          for (c = u.points[_].point.length, x = 0; x < c; x += 1) i[x] = u.points[_].point[x];
        } else {
          b.__fnct ? A = b.__fnct : (A = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, b.__fnct = A), P = A((t - f) / (l - f));
          var E = u.segmentLength * P, M, F = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastAddedLength : 0;
          for (v = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastPoint : 0, p = true, y = u.points.length; p; ) {
            if (F += u.points[v].partialLength, E === 0 || P === 0 || v === u.points.length - 1) {
              for (c = u.points[v].point.length, x = 0; x < c; x += 1) i[x] = u.points[v].point[x];
              break;
            } else if (E >= F && E < F + u.points[v + 1].partialLength) {
              for (M = (E - F) / u.points[v + 1].partialLength, c = u.points[v].point.length, x = 0; x < c; x += 1) i[x] = u.points[v].point[x] + (u.points[v + 1].point[x] - u.points[v].point[x]) * M;
              break;
            }
            v < y - 1 ? v += 1 : p = false;
          }
          e._lastPoint = v, e._lastAddedLength = F - u.points[v].partialLength, e._lastKeyframeIndex = n;
        }
      } else {
        var C, D, L, V, G;
        if (a = o.s.length, h = m2.s || o.e, this.sh && o.h !== 1) if (t >= l) i[0] = h[0], i[1] = h[1], i[2] = h[2];
        else if (t <= f) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
        else {
          var B = createQuaternion(o.s), w = createQuaternion(h), S = (t - f) / (l - f);
          quaternionToEuler(i, slerp(B, w, S));
        }
        else for (n = 0; n < a; n += 1) o.h !== 1 && (t >= l ? P = 1 : t < f ? P = 0 : (o.o.x.constructor === Array ? (b.__fnct || (b.__fnct = []), b.__fnct[n] ? A = b.__fnct[n] : (C = o.o.x[n] === void 0 ? o.o.x[0] : o.o.x[n], D = o.o.y[n] === void 0 ? o.o.y[0] : o.o.y[n], L = o.i.x[n] === void 0 ? o.i.x[0] : o.i.x[n], V = o.i.y[n] === void 0 ? o.i.y[0] : o.i.y[n], A = BezierFactory.getBezierEasing(C, D, L, V).get, b.__fnct[n] = A)) : b.__fnct ? A = b.__fnct : (C = o.o.x, D = o.o.y, L = o.i.x, V = o.i.y, A = BezierFactory.getBezierEasing(C, D, L, V).get, o.keyframeMetadata = A), P = A((t - f) / (l - f)))), h = m2.s || o.e, G = o.h === 1 ? o.s[n] : o.s[n] + (h[n] - o.s[n]) * P, this.propType === "multidimensional" ? i[n] = G : i = G;
      }
      return e.lastIndex = s, i;
    }
    function slerp(t, e, r) {
      var i = [], s = t[0], n = t[1], a = t[2], p = t[3], o = e[0], m2 = e[1], b = e[2], x = e[3], c, P, y, v, A;
      return P = s * o + n * m2 + a * b + p * x, P < 0 && (P = -P, o = -o, m2 = -m2, b = -b, x = -x), 1 - P > 1e-6 ? (c = Math.acos(P), y = Math.sin(c), v = Math.sin((1 - r) * c) / y, A = Math.sin(r * c) / y) : (v = 1 - r, A = r), i[0] = v * s + A * o, i[1] = v * n + A * m2, i[2] = v * a + A * b, i[3] = v * p + A * x, i;
    }
    function quaternionToEuler(t, e) {
      var r = e[0], i = e[1], s = e[2], n = e[3], a = Math.atan2(2 * i * n - 2 * r * s, 1 - 2 * i * i - 2 * s * s), p = Math.asin(2 * r * i + 2 * s * n), o = Math.atan2(2 * r * n - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
      t[0] = a / degToRads, t[1] = p / degToRads, t[2] = o / degToRads;
    }
    function createQuaternion(t) {
      var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2), n = Math.cos(r / 2), a = Math.cos(i / 2), p = Math.sin(e / 2), o = Math.sin(r / 2), m2 = Math.sin(i / 2), b = s * n * a - p * o * m2, x = p * o * a + s * n * m2, c = p * n * a + s * o * m2, P = s * o * a - p * n * m2;
      return [x, c, P, b];
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
      var s, n = e.k.length, a, p, o, m2;
      for (s = 0; s < n - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, p = e.k[s + 1].s, o = e.k[s].to, m2 = e.k[s].ti, (a.length === 2 && !(a[0] === p[0] && a[1] === p[1]) && bez.pointOnLine2D(a[0], a[1], p[0], p[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], p[0], p[1], p[0] + m2[0], p[1] + m2[1]) || a.length === 3 && !(a[0] === p[0] && a[1] === p[1] && a[2] === p[2]) && bez.pointOnLine3D(a[0], a[1], a[2], p[0], p[1], p[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], p[0], p[1], p[2], p[0] + m2[0], p[1] + m2[1], p[2] + m2[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === p[0] && a[1] === p[1] && o[0] === 0 && o[1] === 0 && m2[0] === 0 && m2[1] === 0 && (a.length === 2 || a[2] === p[2] && o[2] === 0 && m2[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var b = e.k[0].s.length;
      for (this.v = createTypedArray("float32", b), this.pv = createTypedArray("float32", b), s = 0; s < b; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
      this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", b) }, this.addEffect = addEffect;
    }
    var PropertyFactory = /* @__PURE__ */ function() {
      function t(r, i, s, n, a) {
        i.sid && (i = r.globalData.slotManager.getProp(i));
        var p;
        if (!i.k.length) p = new ValueProperty(r, i, n, a);
        else if (typeof i.k[0] == "number") p = new MultiDimensionalProperty(r, i, n, a);
        else switch (s) {
          case 0:
            p = new KeyframedValueProperty(r, i, n, a);
            break;
          case 1:
            p = new KeyframedMultidimensionalProperty(r, i, n, a);
            break;
        }
        return p.effectsSequence.length && a.addDynamicProperty(p), p;
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
    }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, n, a, p) {
      this.setXYAt(t, e, "v", a, p), this.setXYAt(r, i, "o", a, p), this.setXYAt(s, n, "i", a, p);
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath();
      t.setPathData(this.c, this._length);
      var e = this.v, r = this.o, i = this.i, s = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, false), s = 1);
      var n = this._length - 1, a = this._length, p;
      for (p = s; p < a; p += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], p, false), n -= 1;
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
        var n = i.newElement(), a, p = s._length === void 0 ? s.v.length : s._length;
        for (n.setLength(p), n.c = s.c, a = 0; a < p; a += 1) n.setTripleAt(s.v[a][0], s.v[a][1], s.o[a][0], s.o[a][1], s.i[a][0], s.i[a][1], a);
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
        var p, o = a._length;
        for (p = 0; p < o; p += 1) shapePool.release(a.shapes[p]);
        a._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = a, e += 1;
      }
      return t;
    }(), ShapePropertyFactory = function() {
      var t = -999999;
      function e(l, f, h) {
        var u = h.lastIndex, _, E, M, F, C, D, L, V, G, B = this.keyframes;
        if (l < B[0].t - this.offsetTime) _ = B[0].s[0], M = true, u = 0;
        else if (l >= B[B.length - 1].t - this.offsetTime) _ = B[B.length - 1].s ? B[B.length - 1].s[0] : B[B.length - 2].e[0], M = true;
        else {
          for (var w = u, S = B.length - 1, T = true, d, g, k; T && (d = B[w], g = B[w + 1], !(g.t - this.offsetTime > l)); ) w < S - 1 ? w += 1 : T = false;
          if (k = this.keyframesMetadata[w] || {}, M = d.h === 1, u = w, !M) {
            if (l >= g.t - this.offsetTime) V = 1;
            else if (l < d.t - this.offsetTime) V = 0;
            else {
              var I;
              k.__fnct ? I = k.__fnct : (I = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, k.__fnct = I), V = I((l - (d.t - this.offsetTime)) / (g.t - this.offsetTime - (d.t - this.offsetTime)));
            }
            E = g.s ? g.s[0] : d.e[0];
          }
          _ = d.s[0];
        }
        for (D = f._length, L = _.i[0].length, h.lastIndex = u, F = 0; F < D; F += 1) for (C = 0; C < L; C += 1) G = M ? _.i[F][C] : _.i[F][C] + (E.i[F][C] - _.i[F][C]) * V, f.i[F][C] = G, G = M ? _.o[F][C] : _.o[F][C] + (E.o[F][C] - _.o[F][C]) * V, f.o[F][C] = G, G = M ? _.v[F][C] : _.v[F][C] + (E.v[F][C] - _.v[F][C]) * V, f.v[F][C] = G;
      }
      function r() {
        var l = this.comp.renderedFrame - this.offsetTime, f = this.keyframes[0].t - this.offsetTime, h = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, u = this._caching.lastFrame;
        return u !== t && (u < f && l < f || u > h && l > h) || (this._caching.lastIndex = u < l ? this._caching.lastIndex : 0, this.interpolateShape(l, this.pv, this._caching)), this._caching.lastFrame = l, this.pv;
      }
      function i() {
        this.paths = this.localShapeCollection;
      }
      function s(l, f) {
        if (l._length !== f._length || l.c !== f.c) return false;
        var h, u = l._length;
        for (h = 0; h < u; h += 1) if (l.v[h][0] !== f.v[h][0] || l.v[h][1] !== f.v[h][1] || l.o[h][0] !== f.o[h][0] || l.o[h][1] !== f.o[h][1] || l.i[h][0] !== f.i[h][0] || l.i[h][1] !== f.i[h][1]) return false;
        return true;
      }
      function n(l) {
        s(this.v, l) || (this.v = shapePool.clone(l), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
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
          var l;
          this.kf ? l = this.pv : this.data.ks ? l = this.data.ks.k : l = this.data.pt.k;
          var f, h = this.effectsSequence.length;
          for (f = 0; f < h; f += 1) l = this.effectsSequence[f](l);
          this.setVValue(l), this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
      function p(l, f, h) {
        this.propType = "shape", this.comp = l.comp, this.container = l, this.elem = l, this.data = f, this.k = false, this.kf = false, this._mdf = false;
        var u = h === 3 ? f.pt.k : f.ks.k;
        this.v = shapePool.clone(u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
      }
      function o(l) {
        this.effectsSequence.push(l), this.container.addDynamicProperty(this);
      }
      p.prototype.interpolateShape = e, p.prototype.getValue = a, p.prototype.setVValue = n, p.prototype.addEffect = o;
      function m2(l, f, h) {
        this.propType = "shape", this.comp = l.comp, this.elem = l, this.container = l, this.offsetTime = l.data.st, this.keyframes = h === 3 ? f.pt.k : f.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
        var u = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, u), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [r.bind(this)];
      }
      m2.prototype.getValue = a, m2.prototype.interpolateShape = e, m2.prototype.setVValue = n, m2.prototype.addEffect = o;
      var b = function() {
        var l = roundCorner;
        function f(h, u) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = u.d, this.elem = h, this.comp = h.comp, this.frameId = -1, this.initDynamicPropertyContainer(h), this.p = PropertyFactory.getProp(h, u.p, 1, 0, this), this.s = PropertyFactory.getProp(h, u.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
        }
        return f.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var u = this.p.v[0], _ = this.p.v[1], E = this.s.v[0] / 2, M = this.s.v[1] / 2, F = this.d !== 3, C = this.v;
          C.v[0][0] = u, C.v[0][1] = _ - M, C.v[1][0] = F ? u + E : u - E, C.v[1][1] = _, C.v[2][0] = u, C.v[2][1] = _ + M, C.v[3][0] = F ? u - E : u + E, C.v[3][1] = _, C.i[0][0] = F ? u - E * l : u + E * l, C.i[0][1] = _ - M, C.i[1][0] = F ? u + E : u - E, C.i[1][1] = _ - M * l, C.i[2][0] = F ? u + E * l : u - E * l, C.i[2][1] = _ + M, C.i[3][0] = F ? u - E : u + E, C.i[3][1] = _ + M * l, C.o[0][0] = F ? u + E * l : u - E * l, C.o[0][1] = _ - M, C.o[1][0] = F ? u + E : u - E, C.o[1][1] = _ + M * l, C.o[2][0] = F ? u - E * l : u + E * l, C.o[2][1] = _ + M, C.o[3][0] = F ? u - E : u + E, C.o[3][1] = _ - M * l;
        } }, extendPrototype([DynamicPropertyContainer], f), f;
      }(), x = function() {
        function l(f, h) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = f, this.comp = f.comp, this.data = h, this.frameId = -1, this.d = h.d, this.initDynamicPropertyContainer(f), h.sy === 1 ? (this.ir = PropertyFactory.getProp(f, h.ir, 0, 0, this), this.is = PropertyFactory.getProp(f, h.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(f, h.pt, 0, 0, this), this.p = PropertyFactory.getProp(f, h.p, 1, 0, this), this.r = PropertyFactory.getProp(f, h.r, 0, degToRads, this), this.or = PropertyFactory.getProp(f, h.or, 0, 0, this), this.os = PropertyFactory.getProp(f, h.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
        }
        return l.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var h = Math.floor(this.pt.v) * 2, u = Math.PI * 2 / h, _ = true, E = this.or.v, M = this.ir.v, F = this.os.v, C = this.is.v, D = 2 * Math.PI * E / (h * 2), L = 2 * Math.PI * M / (h * 2), V, G, B, w, S = -Math.PI / 2;
          S += this.r.v;
          var T = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, V = 0; V < h; V += 1) {
            G = _ ? E : M, B = _ ? F : C, w = _ ? D : L;
            var d = G * Math.cos(S), g = G * Math.sin(S), k = d === 0 && g === 0 ? 0 : g / Math.sqrt(d * d + g * g), I = d === 0 && g === 0 ? 0 : -d / Math.sqrt(d * d + g * g);
            d += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(d, g, d - k * w * B * T, g - I * w * B * T, d + k * w * B * T, g + I * w * B * T, V, true), _ = !_, S += u * T;
          }
        }, convertPolygonToPath: function() {
          var h = Math.floor(this.pt.v), u = Math.PI * 2 / h, _ = this.or.v, E = this.os.v, M = 2 * Math.PI * _ / (h * 4), F, C = -Math.PI * 0.5, D = this.data.d === 3 ? -1 : 1;
          for (C += this.r.v, this.v._length = 0, F = 0; F < h; F += 1) {
            var L = _ * Math.cos(C), V = _ * Math.sin(C), G = L === 0 && V === 0 ? 0 : V / Math.sqrt(L * L + V * V), B = L === 0 && V === 0 ? 0 : -L / Math.sqrt(L * L + V * V);
            L += +this.p.v[0], V += +this.p.v[1], this.v.setTripleAt(L, V, L - G * M * E * D, V - B * M * E * D, L + G * M * E * D, V + B * M * E * D, F, true), C += u * D;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, extendPrototype([DynamicPropertyContainer], l), l;
      }(), c = function() {
        function l(f, h) {
          this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = f, this.comp = f.comp, this.frameId = -1, this.d = h.d, this.initDynamicPropertyContainer(f), this.p = PropertyFactory.getProp(f, h.p, 1, 0, this), this.s = PropertyFactory.getProp(f, h.s, 1, 0, this), this.r = PropertyFactory.getProp(f, h.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
        }
        return l.prototype = { convertRectToPath: function() {
          var h = this.p.v[0], u = this.p.v[1], _ = this.s.v[0] / 2, E = this.s.v[1] / 2, M = bmMin(_, E, this.r.v), F = M * (1 - roundCorner);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(h + _, u - E + M, h + _, u - E + M, h + _, u - E + F, 0, true), this.v.setTripleAt(h + _, u + E - M, h + _, u + E - F, h + _, u + E - M, 1, true), M !== 0 ? (this.v.setTripleAt(h + _ - M, u + E, h + _ - M, u + E, h + _ - F, u + E, 2, true), this.v.setTripleAt(h - _ + M, u + E, h - _ + F, u + E, h - _ + M, u + E, 3, true), this.v.setTripleAt(h - _, u + E - M, h - _, u + E - M, h - _, u + E - F, 4, true), this.v.setTripleAt(h - _, u - E + M, h - _, u - E + F, h - _, u - E + M, 5, true), this.v.setTripleAt(h - _ + M, u - E, h - _ + M, u - E, h - _ + F, u - E, 6, true), this.v.setTripleAt(h + _ - M, u - E, h + _ - F, u - E, h + _ - M, u - E, 7, true)) : (this.v.setTripleAt(h - _, u + E, h - _ + F, u + E, h - _, u + E, 2), this.v.setTripleAt(h - _, u - E, h - _, u - E + F, h - _, u - E, 3))) : (this.v.setTripleAt(h + _, u - E + M, h + _, u - E + F, h + _, u - E + M, 0, true), M !== 0 ? (this.v.setTripleAt(h + _ - M, u - E, h + _ - M, u - E, h + _ - F, u - E, 1, true), this.v.setTripleAt(h - _ + M, u - E, h - _ + F, u - E, h - _ + M, u - E, 2, true), this.v.setTripleAt(h - _, u - E + M, h - _, u - E + M, h - _, u - E + F, 3, true), this.v.setTripleAt(h - _, u + E - M, h - _, u + E - F, h - _, u + E - M, 4, true), this.v.setTripleAt(h - _ + M, u + E, h - _ + M, u + E, h - _ + F, u + E, 5, true), this.v.setTripleAt(h + _ - M, u + E, h + _ - F, u + E, h + _ - M, u + E, 6, true), this.v.setTripleAt(h + _, u + E - M, h + _, u + E - M, h + _, u + E - F, 7, true)) : (this.v.setTripleAt(h - _, u - E, h - _ + F, u - E, h - _, u - E, 1, true), this.v.setTripleAt(h - _, u + E, h - _, u + E - F, h - _, u + E, 2, true), this.v.setTripleAt(h + _, u + E, h + _ - F, u + E, h + _, u + E, 3, true)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: i }, extendPrototype([DynamicPropertyContainer], l), l;
      }();
      function P(l, f, h) {
        var u;
        if (h === 3 || h === 4) {
          var _ = h === 3 ? f.pt : f.ks, E = _.k;
          E.length ? u = new m2(l, f, h) : u = new p(l, f, h);
        } else h === 5 ? u = new c(l, f) : h === 6 ? u = new b(l, f) : h === 7 && (u = new x(l, f));
        return u.k && l.addDynamicProperty(u), u;
      }
      function y() {
        return p;
      }
      function v() {
        return m2;
      }
      var A = {};
      return A.getShapeProp = P, A.getConstructorFunction = y, A.getKeyframedConstructorFunction = v, A;
    }();
    var Matrix = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
      function s() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function n(d) {
        if (d === 0) return this;
        var g = t(d), k = e(d);
        return this._t(g, -k, 0, 0, k, g, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function a(d) {
        if (d === 0) return this;
        var g = t(d), k = e(d);
        return this._t(1, 0, 0, 0, 0, g, -k, 0, 0, k, g, 0, 0, 0, 0, 1);
      }
      function p(d) {
        if (d === 0) return this;
        var g = t(d), k = e(d);
        return this._t(g, 0, k, 0, 0, 1, 0, 0, -k, 0, g, 0, 0, 0, 0, 1);
      }
      function o(d) {
        if (d === 0) return this;
        var g = t(d), k = e(d);
        return this._t(g, -k, 0, 0, k, g, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function m2(d, g) {
        return this._t(1, g, d, 1, 0, 0);
      }
      function b(d, g) {
        return this.shear(r(d), r(g));
      }
      function x(d, g) {
        var k = t(g), I = e(g);
        return this._t(k, I, 0, 0, -I, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(d), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(k, -I, 0, 0, I, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function c(d, g, k) {
        return !k && k !== 0 && (k = 1), d === 1 && g === 1 && k === 1 ? this : this._t(d, 0, 0, 0, 0, g, 0, 0, 0, 0, k, 0, 0, 0, 0, 1);
      }
      function P(d, g, k, I, R, N, z, j, q, H, X, Q, Z, $, K, W) {
        return this.props[0] = d, this.props[1] = g, this.props[2] = k, this.props[3] = I, this.props[4] = R, this.props[5] = N, this.props[6] = z, this.props[7] = j, this.props[8] = q, this.props[9] = H, this.props[10] = X, this.props[11] = Q, this.props[12] = Z, this.props[13] = $, this.props[14] = K, this.props[15] = W, this;
      }
      function y(d, g, k) {
        return k = k || 0, d !== 0 || g !== 0 || k !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, d, g, k, 1) : this;
      }
      function v(d, g, k, I, R, N, z, j, q, H, X, Q, Z, $, K, W) {
        var O = this.props;
        if (d === 1 && g === 0 && k === 0 && I === 0 && R === 0 && N === 1 && z === 0 && j === 0 && q === 0 && H === 0 && X === 1 && Q === 0) return O[12] = O[12] * d + O[15] * Z, O[13] = O[13] * N + O[15] * $, O[14] = O[14] * X + O[15] * K, O[15] *= W, this._identityCalculated = false, this;
        var et = O[0], nt = O[1], rt = O[2], tt = O[3], it = O[4], st = O[5], Y = O[6], at = O[7], ot = O[8], U = O[9], ht = O[10], J = O[11], lt = O[12], ft = O[13], pt = O[14], ut = O[15];
        return O[0] = et * d + nt * R + rt * q + tt * Z, O[1] = et * g + nt * N + rt * H + tt * $, O[2] = et * k + nt * z + rt * X + tt * K, O[3] = et * I + nt * j + rt * Q + tt * W, O[4] = it * d + st * R + Y * q + at * Z, O[5] = it * g + st * N + Y * H + at * $, O[6] = it * k + st * z + Y * X + at * K, O[7] = it * I + st * j + Y * Q + at * W, O[8] = ot * d + U * R + ht * q + J * Z, O[9] = ot * g + U * N + ht * H + J * $, O[10] = ot * k + U * z + ht * X + J * K, O[11] = ot * I + U * j + ht * Q + J * W, O[12] = lt * d + ft * R + pt * q + ut * Z, O[13] = lt * g + ft * N + pt * H + ut * $, O[14] = lt * k + ft * z + pt * X + ut * K, O[15] = lt * I + ft * j + pt * Q + ut * W, this._identityCalculated = false, this;
      }
      function A(d) {
        var g = d.props;
        return this.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]);
      }
      function l() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = true), this._identity;
      }
      function f(d) {
        for (var g = 0; g < 16; ) {
          if (d.props[g] !== this.props[g]) return false;
          g += 1;
        }
        return true;
      }
      function h(d) {
        var g;
        for (g = 0; g < 16; g += 1) d.props[g] = this.props[g];
        return d;
      }
      function u(d) {
        var g;
        for (g = 0; g < 16; g += 1) this.props[g] = d[g];
      }
      function _(d, g, k) {
        return { x: d * this.props[0] + g * this.props[4] + k * this.props[8] + this.props[12], y: d * this.props[1] + g * this.props[5] + k * this.props[9] + this.props[13], z: d * this.props[2] + g * this.props[6] + k * this.props[10] + this.props[14] };
      }
      function E(d, g, k) {
        return d * this.props[0] + g * this.props[4] + k * this.props[8] + this.props[12];
      }
      function M(d, g, k) {
        return d * this.props[1] + g * this.props[5] + k * this.props[9] + this.props[13];
      }
      function F(d, g, k) {
        return d * this.props[2] + g * this.props[6] + k * this.props[10] + this.props[14];
      }
      function C() {
        var d = this.props[0] * this.props[5] - this.props[1] * this.props[4], g = this.props[5] / d, k = -this.props[1] / d, I = -this.props[4] / d, R = this.props[0] / d, N = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / d, z = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / d, j = new Matrix();
        return j.props[0] = g, j.props[1] = k, j.props[4] = I, j.props[5] = R, j.props[12] = N, j.props[13] = z, j;
      }
      function D(d) {
        var g = this.getInverseMatrix();
        return g.applyToPointArray(d[0], d[1], d[2] || 0);
      }
      function L(d) {
        var g, k = d.length, I = [];
        for (g = 0; g < k; g += 1) I[g] = D(d[g]);
        return I;
      }
      function V(d, g, k) {
        var I = createTypedArray("float32", 6);
        if (this.isIdentity()) I[0] = d[0], I[1] = d[1], I[2] = g[0], I[3] = g[1], I[4] = k[0], I[5] = k[1];
        else {
          var R = this.props[0], N = this.props[1], z = this.props[4], j = this.props[5], q = this.props[12], H = this.props[13];
          I[0] = d[0] * R + d[1] * z + q, I[1] = d[0] * N + d[1] * j + H, I[2] = g[0] * R + g[1] * z + q, I[3] = g[0] * N + g[1] * j + H, I[4] = k[0] * R + k[1] * z + q, I[5] = k[0] * N + k[1] * j + H;
        }
        return I;
      }
      function G(d, g, k) {
        var I;
        return this.isIdentity() ? I = [d, g, k] : I = [d * this.props[0] + g * this.props[4] + k * this.props[8] + this.props[12], d * this.props[1] + g * this.props[5] + k * this.props[9] + this.props[13], d * this.props[2] + g * this.props[6] + k * this.props[10] + this.props[14]], I;
      }
      function B(d, g) {
        if (this.isIdentity()) return d + "," + g;
        var k = this.props;
        return Math.round((d * k[0] + g * k[4] + k[12]) * 100) / 100 + "," + Math.round((d * k[1] + g * k[5] + k[13]) * 100) / 100;
      }
      function w() {
        for (var d = 0, g = this.props, k = "matrix3d(", I = 1e4; d < 16; ) k += i(g[d] * I) / I, k += d === 15 ? ")" : ",", d += 1;
        return k;
      }
      function S(d) {
        var g = 1e4;
        return d < 1e-6 && d > 0 || d > -1e-6 && d < 0 ? i(d * g) / g : d;
      }
      function T() {
        var d = this.props, g = S(d[0]), k = S(d[1]), I = S(d[4]), R = S(d[5]), N = S(d[12]), z = S(d[13]);
        return "matrix(" + g + "," + k + "," + I + "," + R + "," + N + "," + z + ")";
      }
      return function() {
        this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = p, this.rotateZ = o, this.skew = b, this.skewFromAxis = x, this.shear = m2, this.scale = c, this.setTransform = P, this.translate = y, this.transform = v, this.multiply = A, this.applyToPoint = _, this.applyToX = E, this.applyToY = M, this.applyToZ = F, this.applyToPointArray = G, this.applyToTriplePoints = V, this.applyToPointStringified = B, this.toCSS = w, this.to2dCSS = T, this.clone = h, this.cloneFromProps = u, this.equals = f, this.inversePoints = L, this.inversePoint = D, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = l, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
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
      var a = [], p, o = n.length, m2;
      for (p = 0; p < o; p += 1) if (m2 = n[p], !(m2.e * s < i || m2.s * s > i + r)) {
        var b, x;
        m2.s * s <= i ? b = 0 : b = (m2.s * s - i) / r, m2.e * s >= i + r ? x = 1 : x = (m2.e * s - i) / r, a.push([b, x]);
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
      var n, a, p = this.shapes.length, o, m2, b, x, c, P = 0;
      if (r === e) for (a = 0; a < p; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = true, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (r === 1 && e === 0 || r === 0 && e === 1) {
        if (this._mdf) for (a = 0; a < p; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = true;
      } else {
        var y = [], v, A;
        for (a = 0; a < p; a += 1) if (v = this.shapes[a], !v.shape._mdf && !this._mdf && !t && this.m !== 2) v.shape.paths = v.localShapeCollection;
        else {
          if (n = v.shape.paths, m2 = n._length, c = 0, !v.shape._mdf && v.pathsData.length) c = v.totalShapeLength;
          else {
            for (b = this.releasePathsData(v.pathsData), o = 0; o < m2; o += 1) x = bez.getSegmentsLength(n.shapes[o]), b.push(x), c += x.totalLength;
            v.totalShapeLength = c, v.pathsData = b;
          }
          P += c, v.shape._mdf = true;
        }
        var l = e, f = r, h = 0, u;
        for (a = p - 1; a >= 0; a -= 1) if (v = this.shapes[a], v.shape._mdf) {
          for (A = v.localShapeCollection, A.releaseShapes(), this.m === 2 && p > 1 ? (u = this.calculateShapeEdges(e, r, v.totalShapeLength, h, P), h += v.totalShapeLength) : u = [[l, f]], m2 = u.length, o = 0; o < m2; o += 1) {
            l = u[o][0], f = u[o][1], y.length = 0, f <= 1 ? y.push({ s: v.totalShapeLength * l, e: v.totalShapeLength * f }) : l >= 1 ? y.push({ s: v.totalShapeLength * (l - 1), e: v.totalShapeLength * (f - 1) }) : (y.push({ s: v.totalShapeLength * l, e: v.totalShapeLength }), y.push({ s: 0, e: v.totalShapeLength * (f - 1) }));
            var _ = this.addShapes(v, y[0]);
            if (y[0].s !== y[0].e) {
              if (y.length > 1) {
                var E = v.shape.paths.shapes[v.shape.paths._length - 1];
                if (E.c) {
                  var M = _.pop();
                  this.addPaths(_, A), _ = this.addShapes(v, y[1], M);
                } else this.addPaths(_, A), _ = this.addShapes(v, y[1]);
              }
              this.addPaths(_, A);
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
      var i = t.pathsData, s = t.shape.paths.shapes, n, a = t.shape.paths._length, p, o, m2 = 0, b, x, c, P, y = [], v, A = true;
      for (r ? (x = r._length, v = r._length) : (r = shapePool.newElement(), x = 0, v = 0), y.push(r), n = 0; n < a; n += 1) {
        for (c = i[n].lengths, r.c = s[n].c, o = s[n].c ? c.length : c.length + 1, p = 1; p < o; p += 1) if (b = c[p - 1], m2 + b.addedLength < e.s) m2 += b.addedLength, r.c = false;
        else if (m2 > e.e) {
          r.c = false;
          break;
        } else e.s <= m2 && e.e >= m2 + b.addedLength ? (this.addSegment(s[n].v[p - 1], s[n].o[p - 1], s[n].i[p], s[n].v[p], r, x, A), A = false) : (P = bez.getNewSegment(s[n].v[p - 1], s[n].v[p], s[n].o[p - 1], s[n].i[p], (e.s - m2) / b.addedLength, (e.e - m2) / b.addedLength, c[p - 1]), this.addSegmentFromArray(P, r, x, A), A = false, r.c = false), m2 += b.addedLength, x += 1;
        if (s[n].c && c.length) {
          if (b = c[p - 1], m2 <= e.e) {
            var l = c[p - 1].addedLength;
            e.s <= m2 && e.e >= m2 + l ? (this.addSegment(s[n].v[p - 1], s[n].o[p - 1], s[n].i[0], s[n].v[0], r, x, A), A = false) : (P = bez.getNewSegment(s[n].v[p - 1], s[n].v[0], s[n].o[p - 1], s[n].i[0], (e.s - m2) / l, (e.e - m2) / l, c[p - 1]), this.addSegmentFromArray(P, r, x, A), A = false, r.c = false);
          } else r.c = false;
          m2 += b.addedLength, x += 1;
        }
        if (r._length && (r.setXYAt(r.v[v][0], r.v[v][1], "i", v), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), m2 > e.e) break;
        n < a - 1 && (r = shapePool.newElement(), A = true, y.push(r), x = 0);
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
      var p, o, m2, b, x, c;
      for (n = 0; n < s; n += 1) p = t.v[n][0] + (i[0] - t.v[n][0]) * r, o = t.v[n][1] + (i[1] - t.v[n][1]) * r, m2 = t.o[n][0] + (i[0] - t.o[n][0]) * -r, b = t.o[n][1] + (i[1] - t.o[n][1]) * -r, x = t.i[n][0] + (i[0] - t.i[n][0]) * -r, c = t.i[n][1] + (i[1] - t.i[n][1]) * -r, a.setTripleAt(p, o, m2, b, x, c, n);
      return a;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amount.v;
      if (a !== 0) {
        var p, o;
        for (r = 0; r < i; r += 1) {
          if (p = this.shapes[r], o = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), p.shape._mdf = true, e = p.shape.paths.shapes, n = p.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(e[s], a));
          p.shape.paths = p.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    var TransformPropertyFactory = function() {
      var t = [0, 0];
      function e(o) {
        var m2 = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || m2, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function r(o) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || o) {
            var m2;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var b, x;
              if (m2 = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (b = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / m2, 0), x = this.p.getValueAtTime(this.p.keyframes[0].t / m2, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (b = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / m2, 0), x = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / m2, 0)) : (b = this.p.pv, x = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / m2, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                b = [], x = [];
                var c = this.px, P = this.py;
                c._caching.lastFrame + c.offsetTime <= c.keyframes[0].t ? (b[0] = c.getValueAtTime((c.keyframes[0].t + 0.01) / m2, 0), b[1] = P.getValueAtTime((P.keyframes[0].t + 0.01) / m2, 0), x[0] = c.getValueAtTime(c.keyframes[0].t / m2, 0), x[1] = P.getValueAtTime(P.keyframes[0].t / m2, 0)) : c._caching.lastFrame + c.offsetTime >= c.keyframes[c.keyframes.length - 1].t ? (b[0] = c.getValueAtTime(c.keyframes[c.keyframes.length - 1].t / m2, 0), b[1] = P.getValueAtTime(P.keyframes[P.keyframes.length - 1].t / m2, 0), x[0] = c.getValueAtTime((c.keyframes[c.keyframes.length - 1].t - 0.01) / m2, 0), x[1] = P.getValueAtTime((P.keyframes[P.keyframes.length - 1].t - 0.01) / m2, 0)) : (b = [c.pv, P.pv], x[0] = c.getValueAtTime((c._caching.lastFrame + c.offsetTime - 0.01) / m2, c.offsetTime), x[1] = P.getValueAtTime((P._caching.lastFrame + P.offsetTime - 0.01) / m2, P.offsetTime));
              } else x = t, b = x;
              this.v.rotate(-Math.atan2(b[1] - x[1], b[0] - x[0]));
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
      function a(o, m2, b) {
        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = m2, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(b || o), m2.p && m2.p.s ? (this.px = PropertyFactory.getProp(o, m2.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, m2.p.y, 0, 0, this), m2.p.z && (this.pz = PropertyFactory.getProp(o, m2.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, m2.p || { k: [0, 0, 0] }, 1, 0, this), m2.rx) {
          if (this.rx = PropertyFactory.getProp(o, m2.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, m2.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, m2.rz, 0, degToRads, this), m2.or.k[0].ti) {
            var x, c = m2.or.k.length;
            for (x = 0; x < c; x += 1) m2.or.k[x].to = null, m2.or.k[x].ti = null;
          }
          this.or = PropertyFactory.getProp(o, m2.or, 1, degToRads, this), this.or.sh = true;
        } else this.r = PropertyFactory.getProp(o, m2.r || { k: 0 }, 0, degToRads, this);
        m2.sk && (this.sk = PropertyFactory.getProp(o, m2.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, m2.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, m2.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(o, m2.s || { k: [100, 100, 100] }, 1, 0.01, this), m2.o ? this.o = PropertyFactory.getProp(o, m2.o, 0, 0.01, o) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
      }
      a.prototype = { applyToMatrix: e, getValue: r, precalculateMatrix: i, autoOrient: s }, extendPrototype([DynamicPropertyContainer], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
      function p(o, m2, b) {
        return new a(o, m2, b);
      }
      return { getTransformProperty: p };
    }();
    function RepeaterModifier() {
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, n) {
      var a = n ? -1 : 1, p = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
      t.translate(i.p.v[0] * a * s, i.p.v[1] * a * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * a * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(n ? 1 / p : p, n ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
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
        var p = Math.ceil(this.c.v);
        if (this._groups.length < p) {
          for (; this._groups.length < p; ) {
            var o = { it: this.cloneElements(this._elements), ty: "gr" };
            o.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), a = true;
        }
        n = 0;
        var m2;
        for (i = 0; i <= this._groups.length - 1; i += 1) {
          if (m2 = n < p, this._groups[i]._render = m2, this.changeGroupRender(this._groups[i].it, m2), !m2) {
            var b = this.elemsData[i].it, x = b[b.length - 1];
            x.transform.op.v !== 0 ? (x.transform.op._mdf = true, x.transform.op.v = 0) : x.transform.op._mdf = false;
          }
          n += 1;
        }
        this._currentCopies = p;
        var c = this.o.v, P = c % 1, y = c > 0 ? Math.floor(c) : Math.ceil(c), v = this.pMatrix.props, A = this.rMatrix.props, l = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var f = 0;
        if (c > 0) {
          for (; f < y; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), f += 1;
          P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, P, false), f += P);
        } else if (c < 0) {
          for (; f > y; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), f -= 1;
          P && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -P, true), f -= P);
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, n = this._currentCopies;
        for (var h, u; n; ) {
          if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, u = r.length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), f !== 0) {
            for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]), this.matrix.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), h = 0; h < u; h += 1) r[h] = this.matrix.props[h];
            this.matrix.reset();
          } else for (this.matrix.reset(), h = 0; h < u; h += 1) r[h] = this.matrix.props[h];
          f += 1, n -= 1, i += s;
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
      var i, s = t._length, n, a, p, o, m2, b, x = 0, c, P, y, v, A, l;
      for (i = 0; i < s; i += 1) n = t.v[i], p = t.o[i], a = t.i[i], n[0] === p[0] && n[1] === p[1] && n[0] === a[0] && n[1] === a[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(n[0], n[1], p[0], p[1], a[0], a[1], x), x += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1], m2 = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), b = m2 ? Math.min(m2 / 2, e) / m2 : 0, A = n[0] + (o[0] - n[0]) * b, c = A, l = n[1] - (n[1] - o[1]) * b, P = l, y = c - (c - n[0]) * roundCorner, v = P - (P - n[1]) * roundCorner, r.setTripleAt(c, P, y, v, A, l, x), x += 1, i === s - 1 ? o = t.v[0] : o = t.v[i + 1], m2 = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), b = m2 ? Math.min(m2 / 2, e) / m2 : 0, y = n[0] + (o[0] - n[0]) * b, c = y, v = n[1] + (o[1] - n[1]) * b, P = v, A = c - (c - n[0]) * roundCorner, l = P - (P - n[1]) * roundCorner, r.setTripleAt(c, P, y, v, A, l, x), x += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], x), x += 1);
      return r;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.rd.v;
      if (a !== 0) {
        var p, o;
        for (r = 0; r < i; r += 1) {
          if (p = this.shapes[r], o = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), p.shape._mdf = true, e = p.shape.paths.shapes, n = p.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(e[s], a));
          p.shape.paths = p.localShapeCollection;
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
        var p = t.point(n[a])[e];
        p < r ? r = p : p > i && (i = p);
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
        var a = splitData(t), p = splitData(e);
        intersectsImpl(a[0], p[0], r + 1, i, s, n), intersectsImpl(a[0], p[1], r + 1, i, s, n), intersectsImpl(a[1], p[0], r + 1, i, s, n), intersectsImpl(a[1], p[1], r + 1, i, s, n);
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
      var s = [t[0], t[1], 1], n = [e[0], e[1], 1], a = [r[0], r[1], 1], p = [i[0], i[1], 1], o = crossProduct(crossProduct(s, n), crossProduct(a, p));
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
      var p = r - Math.PI / 2, o = r + Math.PI / 2, m2 = e[0] + Math.cos(r) * i * s, b = e[1] - Math.sin(r) * i * s;
      t.setTripleAt(m2, b, m2 + Math.cos(p) * n, b - Math.sin(p) * n, m2 + Math.cos(o) * a, b - Math.sin(o) * a, t.length());
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
      var p = getProjectingAngle(e, r), o = e.v[r % e._length], m2 = e.v[r === 0 ? e._length - 1 : r - 1], b = e.v[(r + 1) % e._length], x = n === 2 ? Math.sqrt(Math.pow(o[0] - m2[0], 2) + Math.pow(o[1] - m2[1], 2)) : 0, c = n === 2 ? Math.sqrt(Math.pow(o[0] - b[0], 2) + Math.pow(o[1] - b[1], 2)) : 0;
      setPoint(t, e.v[r % e._length], p, a, i, c / ((s + 1) * 2), x / ((s + 1) * 2));
    }
    function zigZagSegment(t, e, r, i, s, n) {
      for (var a = 0; a < i; a += 1) {
        var p = (a + 1) / (i + 1), o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, m2 = e.normalAngle(p), b = e.point(p);
        setPoint(t, b, m2, n, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), n = -n;
      }
      return n;
    }
    ZigZagModifier.prototype.processPath = function(t, e, r, i) {
      var s = t._length, n = shapePool.newElement();
      if (n.c = t.c, t.c || (s -= 1), s === 0) return n;
      var a = -1, p = PolynomialBezier.shapeSegment(t, 0);
      zigZagCorner(n, t, 0, e, r, i, a);
      for (var o = 0; o < s; o += 1) a = zigZagSegment(n, p, e, r, i, -a), o === s - 1 && !t.c ? p = null : p = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(n, t, o + 1, e, r, i, a);
      return n;
    }, ZigZagModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amplitude.v, p = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
      if (a !== 0) {
        var m2, b;
        for (r = 0; r < i; r += 1) {
          if (m2 = this.shapes[r], b = m2.localShapeCollection, !(!m2.shape._mdf && !this._mdf && !t)) for (b.releaseShapes(), m2.shape._mdf = true, e = m2.shape.paths.shapes, n = m2.shape.paths._length, s = 0; s < n; s += 1) b.addShape(this.processPath(e[s], a, p, o));
          m2.shape.paths = m2.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = false);
    };
    function linearOffset(t, e, r) {
      var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [polarOffset(t, i, r), polarOffset(e, i, r)];
    }
    function offsetSegment(t, e) {
      var r, i, s, n, a, p, o;
      o = linearOffset(t.points[0], t.points[1], e), r = o[0], i = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], n = o[1], o = linearOffset(t.points[2], t.points[3], e), a = o[0], p = o[1];
      var m2 = lineIntersection(r, i, s, n);
      m2 === null && (m2 = i);
      var b = lineIntersection(a, p, s, n);
      return b === null && (b = a), new PolynomialBezier(r, m2, b, p);
    }
    function joinLines(t, e, r, i, s) {
      var n = e.points[3], a = r.points[0];
      if (i === 3 || pointEqual(n, a)) return n;
      if (i === 2) {
        var p = -e.tangentAngle(1), o = -r.tangentAngle(0) + Math.PI, m2 = lineIntersection(n, polarOffset(n, p + Math.PI / 2, 100), a, polarOffset(a, p + Math.PI / 2, 100)), b = m2 ? pointDistance(m2, n) : pointDistance(n, a) / 2, x = polarOffset(n, p, 2 * b * roundCorner);
        return t.setXYAt(x[0], x[1], "o", t.length() - 1), x = polarOffset(a, o, 2 * b * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], x[0], x[1], t.length()), a;
      }
      var c = pointEqual(n, e.points[2]) ? e.points[0] : e.points[2], P = pointEqual(a, r.points[1]) ? r.points[3] : r.points[1], y = lineIntersection(c, n, a, P);
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
      var p = (r[1] - r[0]) / (1 - r[0]);
      return n = n[1].split(p), a = n[0], s = n[1], [offsetSegment(i, e), offsetSegment(a, e), offsetSegment(s, e)];
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
      var a, p, o, m2 = [];
      for (a = 0; a < n; a += 1) o = PolynomialBezier.shapeSegment(t, a), m2.push(offsetSegmentSplit(o, e));
      if (!t.c) for (a = n - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), m2.push(offsetSegmentSplit(o, e));
      m2 = pruneIntersections(m2);
      var b = null, x = null;
      for (a = 0; a < m2.length; a += 1) {
        var c = m2[a];
        for (x && (b = joinLines(s, x, c[0], r, i)), x = c[c.length - 1], p = 0; p < c.length; p += 1) o = c[p], b && pointEqual(o.points[0], b) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), b = o.points[3];
      }
      return m2.length && joinLines(s, x, m2[0][0], r, i), s;
    }, OffsetPathModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, n, a = this.amount.v, p = this.miterLimit.v, o = this.lineJoin;
      if (a !== 0) {
        var m2, b;
        for (r = 0; r < i; r += 1) {
          if (m2 = this.shapes[r], b = m2.localShapeCollection, !(!m2.shape._mdf && !this._mdf && !t)) for (b.releaseShapes(), m2.shape._mdf = true, e = m2.shape.paths.shapes, n = m2.shape.paths._length, s = 0; s < n; s += 1) b.addShape(this.processPath(e[s], a, o, p));
          m2.shape.paths = m2.localShapeCollection;
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
      var i = 127988, s = 917631, n = 917601, a = 917626, p = 65039, o = 8205, m2 = 127462, b = 127487, x = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function c(S) {
        var T = S.split(","), d, g = T.length, k = [];
        for (d = 0; d < g; d += 1) T[d] !== "sans-serif" && T[d] !== "monospace" && k.push(T[d]);
        return k.join(",");
      }
      function P(S, T) {
        var d = createTag("span");
        d.setAttribute("aria-hidden", true), d.style.fontFamily = T;
        var g = createTag("span");
        g.innerText = "giItT1WQy@!-/#", d.style.position = "absolute", d.style.left = "-10000px", d.style.top = "-10000px", d.style.fontSize = "300px", d.style.fontVariant = "normal", d.style.fontStyle = "normal", d.style.fontWeight = "normal", d.style.letterSpacing = "0", d.appendChild(g), document.body.appendChild(d);
        var k = g.offsetWidth;
        return g.style.fontFamily = c(S) + ", " + T, { node: g, w: k, parent: d };
      }
      function y() {
        var S, T = this.fonts.length, d, g, k = T;
        for (S = 0; S < T; S += 1) this.fonts[S].loaded ? k -= 1 : this.fonts[S].fOrigin === "n" || this.fonts[S].origin === 0 ? this.fonts[S].loaded = true : (d = this.fonts[S].monoCase.node, g = this.fonts[S].monoCase.w, d.offsetWidth !== g ? (k -= 1, this.fonts[S].loaded = true) : (d = this.fonts[S].sansCase.node, g = this.fonts[S].sansCase.w, d.offsetWidth !== g && (k -= 1, this.fonts[S].loaded = true)), this.fonts[S].loaded && (this.fonts[S].sansCase.parent.parentNode.removeChild(this.fonts[S].sansCase.parent), this.fonts[S].monoCase.parent.parentNode.removeChild(this.fonts[S].monoCase.parent)));
        k !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function v(S, T) {
        var d = document.body && T ? "svg" : "canvas", g, k = getFontProperties(S);
        if (d === "svg") {
          var I = createNS("text");
          I.style.fontSize = "100px", I.setAttribute("font-family", S.fFamily), I.setAttribute("font-style", k.style), I.setAttribute("font-weight", k.weight), I.textContent = "1", S.fClass ? (I.style.fontFamily = "inherit", I.setAttribute("class", S.fClass)) : I.style.fontFamily = S.fFamily, T.appendChild(I), g = I;
        } else {
          var R = new OffscreenCanvas(500, 500).getContext("2d");
          R.font = k.style + " " + k.weight + " 100px " + S.fFamily, g = R;
        }
        function N(z) {
          return d === "svg" ? (g.textContent = z, g.getComputedTextLength()) : g.measureText(z).width;
        }
        return { measureText: N };
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
        var d = S.list, g, k = d.length, I = k;
        for (g = 0; g < k; g += 1) {
          var R = true, N, z;
          if (d[g].loaded = false, d[g].monoCase = P(d[g].fFamily, "monospace"), d[g].sansCase = P(d[g].fFamily, "sans-serif"), !d[g].fPath) d[g].loaded = true, I -= 1;
          else if (d[g].fOrigin === "p" || d[g].origin === 3) {
            if (N = document.querySelectorAll('style[f-forigin="p"][f-family="' + d[g].fFamily + '"], style[f-origin="3"][f-family="' + d[g].fFamily + '"]'), N.length > 0 && (R = false), R) {
              var j = createTag("style");
              j.setAttribute("f-forigin", d[g].fOrigin), j.setAttribute("f-origin", d[g].origin), j.setAttribute("f-family", d[g].fFamily), j.type = "text/css", j.innerText = "@font-face {font-family: " + d[g].fFamily + "; font-style: normal; src: url('" + d[g].fPath + "');}", T.appendChild(j);
            }
          } else if (d[g].fOrigin === "g" || d[g].origin === 1) {
            for (N = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), z = 0; z < N.length; z += 1) N[z].href.indexOf(d[g].fPath) !== -1 && (R = false);
            if (R) {
              var q = createTag("link");
              q.setAttribute("f-forigin", d[g].fOrigin), q.setAttribute("f-origin", d[g].origin), q.type = "text/css", q.rel = "stylesheet", q.href = d[g].fPath, document.body.appendChild(q);
            }
          } else if (d[g].fOrigin === "t" || d[g].origin === 2) {
            for (N = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), z = 0; z < N.length; z += 1) d[g].fPath === N[z].src && (R = false);
            if (R) {
              var H = createTag("link");
              H.setAttribute("f-forigin", d[g].fOrigin), H.setAttribute("f-origin", d[g].origin), H.setAttribute("rel", "stylesheet"), H.setAttribute("href", d[g].fPath), T.appendChild(H);
            }
          }
          d[g].helper = v(d[g], T), d[g].cache = {}, this.fonts.push(d[g]);
        }
        I === 0 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function l(S) {
        if (S) {
          this.chars || (this.chars = []);
          var T, d = S.length, g, k = this.chars.length, I;
          for (T = 0; T < d; T += 1) {
            for (g = 0, I = false; g < k; ) this.chars[g].style === S[T].style && this.chars[g].fFamily === S[T].fFamily && this.chars[g].ch === S[T].ch && (I = true), g += 1;
            I || (this.chars.push(S[T]), k += 1);
          }
        }
      }
      function f(S, T, d) {
        for (var g = 0, k = this.chars.length; g < k; ) {
          if (this.chars[g].ch === S && this.chars[g].style === T && this.chars[g].fFamily === d) return this.chars[g];
          g += 1;
        }
        return (typeof S == "string" && S.charCodeAt(0) !== 13 || !S) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", S, T, d)), e;
      }
      function h(S, T, d) {
        var g = this.getFontByName(T), k = S;
        if (!g.cache[k]) {
          var I = g.helper;
          if (S === " ") {
            var R = I.measureText("|" + S + "|"), N = I.measureText("||");
            g.cache[k] = (R - N) / 100;
          } else g.cache[k] = I.measureText(S) / 100;
        }
        return g.cache[k] * d;
      }
      function u(S) {
        for (var T = 0, d = this.fonts.length; T < d; ) {
          if (this.fonts[T].fName === S) return this.fonts[T];
          T += 1;
        }
        return this.fonts[0];
      }
      function _(S) {
        var T = 0, d = S.charCodeAt(0);
        if (d >= 55296 && d <= 56319) {
          var g = S.charCodeAt(1);
          g >= 56320 && g <= 57343 && (T = (d - 55296) * 1024 + g - 56320 + 65536);
        }
        return T;
      }
      function E(S, T) {
        var d = S.toString(16) + T.toString(16);
        return x.indexOf(d) !== -1;
      }
      function M(S) {
        return S === o;
      }
      function F(S) {
        return S === p;
      }
      function C(S) {
        var T = _(S);
        return T >= m2 && T <= b;
      }
      function D(S) {
        return C(S.substr(0, 2)) && C(S.substr(2, 2));
      }
      function L(S) {
        return r.indexOf(S) !== -1;
      }
      function V(S, T) {
        var d = _(S.substr(T, 2));
        if (d !== i) return false;
        var g = 0;
        for (T += 2; g < 5; ) {
          if (d = _(S.substr(T, 2)), d < n || d > a) return false;
          g += 1, T += 2;
        }
        return _(S.substr(T, 2)) === s;
      }
      function G() {
        this.isLoaded = true;
      }
      var B = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      B.isModifier = E, B.isZeroWidthJoiner = M, B.isFlagEmoji = D, B.isRegionalCode = C, B.isCombinedCharacter = L, B.isRegionalFlag = V, B.isVariationSelector = F, B.BLACK_FLAG_CODE_POINT = i;
      var w = { addChars: l, addFonts: A, getCharData: f, getFontByName: u, measureText: h, checkLoadedFonts: y, setIsLoaded: G };
      return B.prototype = w, B;
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
        var p = i.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(p), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface);
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
      var n, a = r.length, p;
      for (n = 0; n < a; n += 1) p = r[n].mat.applyToPointArray(0, 0, 0), e = [e[0] - p[0], e[1] - p[1], 0];
      return e;
    }, mHelper: new Matrix() };
    function MaskElement(t, e, r) {
      this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var i = this.globalData.defs, s, n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(n), this.solidPath = "";
      var a, p = this.masksProperties, o = 0, m2 = [], b, x, c = createElementID(), P, y, v, A, l = "clipPath", f = "clip-path";
      for (s = 0; s < n; s += 1) if ((p[s].mode !== "a" && p[s].mode !== "n" || p[s].inv || p[s].o.k !== 100 || p[s].o.x) && (l = "mask", f = "mask"), (p[s].mode === "s" || p[s].mode === "i") && o === 0 ? (P = createNS("rect"), P.setAttribute("fill", "#ffffff"), P.setAttribute("width", this.element.comp.data.w || 0), P.setAttribute("height", this.element.comp.data.h || 0), m2.push(P)) : P = null, a = createNS("path"), p[s].mode === "n") this.viewData[s] = { op: PropertyFactory.getProp(this.element, p[s].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, p[s], 3), elem: a, lastPath: "" }, i.appendChild(a);
      else {
        o += 1, a.setAttribute("fill", p[s].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
        var h;
        if (p[s].x.k !== 0 ? (l = "mask", f = "mask", A = PropertyFactory.getProp(this.element, p[s].x, 0, null, this.element), h = createElementID(), y = createNS("filter"), y.setAttribute("id", h), v = createNS("feMorphology"), v.setAttribute("operator", "erode"), v.setAttribute("in", "SourceGraphic"), v.setAttribute("radius", "0"), y.appendChild(v), i.appendChild(y), a.setAttribute("stroke", p[s].mode === "s" ? "#000000" : "#ffffff")) : (v = null, A = null), this.storedData[s] = { elem: a, x: A, expan: v, lastPath: "", lastOperator: "", filterId: h, lastRadius: 0 }, p[s].mode === "i") {
          x = m2.length;
          var u = createNS("g");
          for (b = 0; b < x; b += 1) u.appendChild(m2[b]);
          var _ = createNS("mask");
          _.setAttribute("mask-type", "alpha"), _.setAttribute("id", c + "_" + o), _.appendChild(a), i.appendChild(_), u.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + o + ")"), m2.length = 0, m2.push(u);
        } else m2.push(a);
        p[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = { elem: a, lastPath: "", op: PropertyFactory.getProp(this.element, p[s].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, p[s], 3), invRect: P }, this.viewData[s].prop.k || this.drawPath(p[s], this.viewData[s].prop.v, this.viewData[s]);
      }
      for (this.maskElement = createNS(l), n = m2.length, s = 0; s < n; s += 1) this.maskElement.appendChild(m2[s]);
      o > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(f, "url(" + getLocationHref() + "#" + c + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
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
    }(), registeredEffects = {}, idPrefix = "filter_result_";
    function SVGEffects(t) {
      var e, r = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), n = filtersFactory.createFilter(s, true), a = 0;
      this.filters = [];
      var p;
      for (e = 0; e < i; e += 1) {
        p = null;
        var o = t.data.ef[e].ty;
        if (registeredEffects[o]) {
          var m2 = registeredEffects[o].effect;
          p = new m2(n, t.effectsManager.effectElements[e], t, idPrefix + a, r), r = idPrefix + a, registeredEffects[o].countsAsEffect && (a += 1);
        }
        p && this.filters.push(p);
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
    function registerEffect(t, e, r) {
      registeredEffects[t] = { effect: e, countsAsEffect: r };
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
          var p = createNS("mask");
          p.setAttribute("id", r), p.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), p.appendChild(n), this.globalData.defs.appendChild(p), !featureSupport.maskType && e === 1 && (p.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(n), p.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
        } else if (e === 2) {
          var o = createNS("mask");
          o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
          var m2 = createNS("g");
          o.appendChild(m2), i = createElementID(), s = filtersFactory.createFilter(i);
          var b = createNS("feComponentTransfer");
          b.setAttribute("in", "SourceGraphic"), s.appendChild(b);
          var x = createNS("feFuncA");
          x.setAttribute("type", "table"), x.setAttribute("tableValues", "1.0 0.0"), b.appendChild(x), this.globalData.defs.appendChild(s);
          var c = createNS("rect");
          c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), m2.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), m2.appendChild(c), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), m2.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), m2.appendChild(c), a.appendChild(this.layerElement), m2.appendChild(a)), this.globalData.defs.appendChild(o);
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
      var s = [], n, a, p;
      for (p = e.g.p * 4, a = 0; a < p; a += 4) n = createNS("stop"), i.appendChild(n), s.push(n);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, i, s, n = createNS("mask"), a = createNS("path");
        n.appendChild(a);
        var p = createElementID(), o = createElementID();
        n.setAttribute("id", o);
        var m2 = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        m2.setAttribute("id", p), m2.setAttribute("spreadMethod", "pad"), m2.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var b = this.stops;
        for (i = t.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), m2.appendChild(r), b.push(r);
        a.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + p + ")"), t.ty === "gs" && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), this.of = m2, this.ms = n, this.ost = b, this.maskId = o, e.msElem = a;
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
      var n = e.o, a = e.i, p = e.v, o, m2 = " M" + s.applyToPointStringified(p[0][0], p[0][1]);
      for (o = 1; o < r; o += 1) m2 += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[o][0], a[o][1]) + " " + s.applyToPointStringified(p[o][0], p[o][1]);
      return i && r && (m2 += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(p[0][0], p[0][1]), m2 += "z"), m2;
    }, SVGElementsRenderer = function() {
      var t = new Matrix(), e = new Matrix(), r = { createRenderFunction: i };
      function i(x) {
        switch (x.ty) {
          case "fl":
            return p;
          case "gf":
            return m2;
          case "gs":
            return o;
          case "st":
            return b;
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
      function s(x, c, P) {
        (P || c.transform.op._mdf) && c.transform.container.setAttribute("opacity", c.transform.op.v), (P || c.transform.mProps._mdf) && c.transform.container.setAttribute("transform", c.transform.mProps.v.to2dCSS());
      }
      function n() {
      }
      function a(x, c, P) {
        var y, v, A, l, f, h, u = c.styles.length, _ = c.lvl, E, M, F, C;
        for (h = 0; h < u; h += 1) {
          if (l = c.sh._mdf || P, c.styles[h].lvl < _) {
            for (M = e.reset(), F = _ - c.styles[h].lvl, C = c.transformers.length - 1; !l && F > 0; ) l = c.transformers[C].mProps._mdf || l, F -= 1, C -= 1;
            if (l) for (F = _ - c.styles[h].lvl, C = c.transformers.length - 1; F > 0; ) M.multiply(c.transformers[C].mProps.v), F -= 1, C -= 1;
          } else M = t;
          if (E = c.sh.paths, v = E._length, l) {
            for (A = "", y = 0; y < v; y += 1) f = E.shapes[y], f && f._length && (A += buildShapeString(f, f._length, f.c, M));
            c.caches[h] = A;
          } else A = c.caches[h];
          c.styles[h].d += x.hd === true ? "" : A, c.styles[h]._mdf = l || c.styles[h]._mdf;
        }
      }
      function p(x, c, P) {
        var y = c.style;
        (c.c._mdf || P) && y.pElem.setAttribute("fill", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || P) && y.pElem.setAttribute("fill-opacity", c.o.v);
      }
      function o(x, c, P) {
        m2(x, c, P), b(x, c, P);
      }
      function m2(x, c, P) {
        var y = c.gf, v = c.g._hasOpacity, A = c.s.v, l = c.e.v;
        if (c.o._mdf || P) {
          var f = x.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          c.style.pElem.setAttribute(f, c.o.v);
        }
        if (c.s._mdf || P) {
          var h = x.t === 1 ? "x1" : "cx", u = h === "x1" ? "y1" : "cy";
          y.setAttribute(h, A[0]), y.setAttribute(u, A[1]), v && !c.g._collapsable && (c.of.setAttribute(h, A[0]), c.of.setAttribute(u, A[1]));
        }
        var _, E, M, F;
        if (c.g._cmdf || P) {
          _ = c.cst;
          var C = c.g.c;
          for (M = _.length, E = 0; E < M; E += 1) F = _[E], F.setAttribute("offset", C[E * 4] + "%"), F.setAttribute("stop-color", "rgb(" + C[E * 4 + 1] + "," + C[E * 4 + 2] + "," + C[E * 4 + 3] + ")");
        }
        if (v && (c.g._omdf || P)) {
          var D = c.g.o;
          for (c.g._collapsable ? _ = c.cst : _ = c.ost, M = _.length, E = 0; E < M; E += 1) F = _[E], c.g._collapsable || F.setAttribute("offset", D[E * 2] + "%"), F.setAttribute("stop-opacity", D[E * 2 + 1]);
        }
        if (x.t === 1) (c.e._mdf || P) && (y.setAttribute("x2", l[0]), y.setAttribute("y2", l[1]), v && !c.g._collapsable && (c.of.setAttribute("x2", l[0]), c.of.setAttribute("y2", l[1])));
        else {
          var L;
          if ((c.s._mdf || c.e._mdf || P) && (L = Math.sqrt(Math.pow(A[0] - l[0], 2) + Math.pow(A[1] - l[1], 2)), y.setAttribute("r", L), v && !c.g._collapsable && c.of.setAttribute("r", L)), c.e._mdf || c.h._mdf || c.a._mdf || P) {
            L || (L = Math.sqrt(Math.pow(A[0] - l[0], 2) + Math.pow(A[1] - l[1], 2)));
            var V = Math.atan2(l[1] - A[1], l[0] - A[0]), G = c.h.v;
            G >= 1 ? G = 0.99 : G <= -1 && (G = -0.99);
            var B = L * G, w = Math.cos(V + c.a.v) * B + A[0], S = Math.sin(V + c.a.v) * B + A[1];
            y.setAttribute("fx", w), y.setAttribute("fy", S), v && !c.g._collapsable && (c.of.setAttribute("fx", w), c.of.setAttribute("fy", S));
          }
        }
      }
      function b(x, c, P) {
        var y = c.style, v = c.d;
        v && (v._mdf || P) && v.dashStr && (y.pElem.setAttribute("stroke-dasharray", v.dashStr), y.pElem.setAttribute("stroke-dashoffset", v.dashoffset[0])), c.c && (c.c._mdf || P) && y.pElem.setAttribute("stroke", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || P) && y.pElem.setAttribute("stroke-opacity", c.o.v), (c.w._mdf || P) && (y.pElem.setAttribute("stroke-width", c.w.v), y.msElem && y.msElem.setAttribute("stroke-width", c.w.v));
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
      var t, e = this.shapes.length, r, i, s = this.stylesList.length, n, a = [], p = false;
      for (i = 0; i < s; i += 1) {
        for (n = this.stylesList[i], p = false, a.length = 0, t = 0; t < e; t += 1) r = this.shapes[t], r.styles.indexOf(n) !== -1 && (a.push(r), p = r._isAnimated || p);
        a.length > 1 && p && this.setShapesAsAnimated(a);
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
      var p = [].concat(n), o, m2 = t.length - 1, b, x, c = [], P = [], y, v, A;
      for (o = m2; o >= 0; o -= 1) {
        if (A = this.searchProcessedElement(t[o]), A ? e[o] = r[A - 1] : t[o]._render = a, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") A ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), c.push(e[o].style);
        else if (t[o].ty === "gr") {
          if (!A) e[o] = this.createGroupElement(t[o]);
          else for (x = e[o].it.length, b = 0; b < x; b += 1) e[o].prevViewData[b] = e[o].it[b];
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, p, a), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
        } else t[o].ty === "tr" ? (A || (e[o] = this.createTransformElement(t[o], i)), y = e[o].transform, p.push(y)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (A || (e[o] = this.createShapeElement(t[o], p, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (A ? (v = e[o], v.closed = false) : (v = ShapeModifiers.getModifier(t[o].ty), v.init(this, t[o]), e[o] = v, this.shapeModifiers.push(v)), P.push(v)) : t[o].ty === "rp" && (A ? (v = e[o], v.closed = true) : (v = ShapeModifiers.getModifier(t[o].ty), e[o] = v, v.init(this, t, o, e), this.shapeModifiers.push(v), a = false), P.push(v));
        this.addProcessedElement(t[o], o + 1);
      }
      for (m2 = c.length, o = 0; o < m2; o += 1) c[o].closed = true;
      for (m2 = P.length, o = 0; o < m2; o += 1) P[o].closed = true;
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
      for (var e = [], r = 0, i = t.length, s, n, a = false, p = false, o = ""; r < i; ) a = p, p = false, s = t.charCodeAt(r), o = t.charAt(r), FontManager.isCombinedCharacter(s) ? a = true : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (n = t.charCodeAt(r + 1), n >= 56320 && n <= 57343 && (FontManager.isModifier(s, n) ? (o = t.substr(r, 2), a = true) : FontManager.isFlagEmoji(t.substr(r, 4)) ? o = t.substr(r, 4) : o = t.substr(r, 2))) : s > 56319 ? (n = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (a = true)) : FontManager.isZeroWidthJoiner(s) && (a = true, p = true), a ? (e[e.length - 1] += o, a = false) : e.push(o), r += o.length;
      return e;
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = true;
      var e = this.elem.globalData.fontManager, r = this.data, i = [], s, n, a, p = 0, o, m2 = r.m.g, b = 0, x = 0, c = 0, P = [], y = 0, v = 0, A, l, f = e.getFontByName(t.f), h, u = 0, _ = getFontProperties(f);
      t.fWeight = _.weight, t.fStyle = _.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;
      var E = t.tr / 1e3 * t.finalSize, M;
      if (t.sz) for (var F = true, C = t.sz[0], D = t.sz[1], L, V; F; ) {
        V = this.buildFinalText(t.t), L = 0, y = 0, n = V.length, E = t.tr / 1e3 * t.finalSize;
        var G = -1;
        for (s = 0; s < n; s += 1) M = V[s].charCodeAt(0), a = false, V[s] === " " ? G = s : (M === 13 || M === 3) && (y = 0, a = true, L += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (h = e.getCharData(V[s], f.fStyle, f.fFamily), u = a ? 0 : h.w * t.finalSize / 100) : u = e.measureText(V[s], t.f, t.finalSize), y + u > C && V[s] !== " " ? (G === -1 ? n += 1 : s = G, L += t.finalLineHeight || t.finalSize * 1.2, V.splice(s, G === s ? 1 : 0, "\r"), G = -1, y = 0) : (y += u, y += E);
        L += f.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && D < L ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = V, n = t.finalText.length, F = false);
      }
      y = -E, u = 0;
      var B = 0, w;
      for (s = 0; s < n; s += 1) if (a = false, w = t.finalText[s], M = w.charCodeAt(0), M === 13 || M === 3 ? (B = 0, P.push(y), v = y > v ? y : v, y = -2 * E, o = "", a = true, c += 1) : o = w, e.chars ? (h = e.getCharData(w, f.fStyle, e.getFontByName(t.f).fFamily), u = a ? 0 : h.w * t.finalSize / 100) : u = e.measureText(o, t.f, t.finalSize), w === " " ? B += u + E : (y += u + E + B, B = 0), i.push({ l: u, an: u, add: b, n: a, anIndexes: [], val: o, line: c, animatorJustifyOffset: 0 }), m2 == 2) {
        if (b += u, o === "" || o === " " || s === n - 1) {
          for ((o === "" || o === " ") && (b -= u); x <= s; ) i[x].an = b, i[x].ind = p, i[x].extra = u, x += 1;
          p += 1, b = 0;
        }
      } else if (m2 == 3) {
        if (b += u, o === "" || s === n - 1) {
          for (o === "" && (b -= u); x <= s; ) i[x].an = b, i[x].ind = p, i[x].extra = u, x += 1;
          b = 0, p += 1;
        }
      } else i[p].ind = p, i[p].extra = 0, p += 1;
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
      var S = r.a, T, d;
      l = S.length;
      var g, k, I = [];
      for (A = 0; A < l; A += 1) {
        for (T = S[A], T.a.sc && (t.strokeColorAnim = true), T.a.sw && (t.strokeWidthAnim = true), (T.a.fc || T.a.fh || T.a.fs || T.a.fb) && (t.fillColorAnim = true), k = 0, g = T.s.b, s = 0; s < n; s += 1) d = i[s], d.anIndexes[A] = k, (g == 1 && d.val !== "" || g == 2 && d.val !== "" && d.val !== " " || g == 3 && (d.n || d.val == " " || s == n - 1) || g == 4 && (d.n || s == n - 1)) && (T.s.rn === 1 && I.push(k), k += 1);
        r.a[A].s.totalChars = k;
        var R = -1, N;
        if (T.s.rn === 1) for (s = 0; s < n; s += 1) d = i[s], R != d.anIndexes[A] && (R = d.anIndexes[A], N = I.splice(Math.floor(Math.random() * I.length), 1)[0]), d.anIndexes[A] = N;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = f.ascent * t.finalSize / 100;
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
        var p = 0, o = 0, m2 = 1, b = 1;
        this.ne.v > 0 ? p = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? m2 = 1 - this.xe.v / 100 : b = 1 + this.xe.v / 100;
        var x = BezierFactory.getBezierEasing(p, o, m2, b).get, c = 0, P = this.finalS, y = this.finalE, v = this.data.sh;
        if (v === 2) y === P ? c = a >= y ? 1 : 0 : c = t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), c = x(c);
        else if (v === 3) y === P ? c = a >= y ? 0 : 1 : c = 1 - t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), c = x(c);
        else if (v === 4) y === P ? c = 0 : (c = t(0, e(0.5 / (y - P) + (a - P) / (y - P), 1)), c < 0.5 ? c *= 2 : c = 1 - 2 * (c - 0.5)), c = x(c);
        else if (v === 5) {
          if (y === P) c = 0;
          else {
            var A = y - P;
            a = e(t(0, a + 0.5 - P), y - P);
            var l = -A / 2 + a, f = A / 2;
            c = Math.sqrt(1 - l * l / (f * f));
          }
          c = x(c);
        } else v === 6 ? (y === P ? c = 0 : (a = e(t(0, a + 0.5 - P), y - P), c = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (y - P))) / 2), c = x(c)) : (a >= r(P) && (a - P < 0 ? c = t(0, e(e(y, 1) - (P - a), 1)) : c = t(0, e(y - a, 1))), c = x(c));
        if (this.sm.v !== 100) {
          var h = this.sm.v * 0.01;
          h === 0 && (h = 1e-8);
          var u = 0.5 - h * 0.5;
          c < u ? c = 0 : (c = (c - u) / h, c > 1 && (c = 1));
        }
        return c * this.a.v;
      }, getValue: function(a) {
        this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var p = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / p, m2 = this.s.v / p + o, b = this.e.v / p + o;
        if (m2 > b) {
          var x = m2;
          m2 = b, b = x;
        }
        this.finalS = m2, this.finalE = b;
      } }, extendPrototype([DynamicPropertyContainer], i);
      function s(n, a, p) {
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
        var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, n = this.mHelper, a = this._renderType, p = this.renderedLetters.length, o, m2, b, x, c = t.l, P, y, v, A, l, f, h, u, _, E, M, F, C, D, L;
        if (this._hasMaskedPath) {
          if (L = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var V = L.v;
            this._pathData.r.v && (V = V.reverse()), P = { tLength: 0, segments: [] }, x = V._length - 1;
            var G;
            for (F = 0, b = 0; b < x; b += 1) G = bez.buildBezierData(V.v[b], V.v[b + 1], [V.o[b][0] - V.v[b][0], V.o[b][1] - V.v[b][1]], [V.i[b + 1][0] - V.v[b + 1][0], V.i[b + 1][1] - V.v[b + 1][1]]), P.tLength += G.segmentLength, P.segments.push(G), F += G.segmentLength;
            b = x, L.v.c && (G = bez.buildBezierData(V.v[b], V.v[0], [V.o[b][0] - V.v[b][0], V.o[b][1] - V.v[b][1]], [V.i[0][0] - V.v[0][0], V.i[0][1] - V.v[0][1]]), P.tLength += G.segmentLength, P.segments.push(G), F += G.segmentLength), this._pathData.pi = P;
          }
          if (P = this._pathData.pi, y = this._pathData.f.v, h = 0, f = 1, A = 0, l = true, E = P.segments, y < 0 && L.v.c) for (P.tLength < Math.abs(y) && (y = -Math.abs(y) % P.tLength), h = E.length - 1, _ = E[h].points, f = _.length - 1; y < 0; ) y += _[f].partialLength, f -= 1, f < 0 && (h -= 1, _ = E[h].points, f = _.length - 1);
          _ = E[h].points, u = _[f - 1], v = _[f], M = v.partialLength;
        }
        x = c.length, o = 0, m2 = 0;
        var B = t.finalSize * 1.2 * 0.714, w = true, S, T, d, g, k;
        g = i.length;
        var I, R = -1, N, z, j, q = y, H = h, X = f, Q = -1, Z, $, K, W, O, et, nt, rt, tt = "", it = this.defaultPropsArray, st;
        if (t.j === 2 || t.j === 1) {
          var Y = 0, at = 0, ot = t.j === 2 ? -0.5 : -1, U = 0, ht = true;
          for (b = 0; b < x; b += 1) if (c[b].n) {
            for (Y && (Y += at); U < b; ) c[U].animatorJustifyOffset = Y, U += 1;
            Y = 0, ht = true;
          } else {
            for (d = 0; d < g; d += 1) S = i[d].a, S.t.propType && (ht && t.j === 2 && (at += S.t.v * ot), T = i[d].s, I = T.getMult(c[b].anIndexes[d], s.a[d].s.totalChars), I.length ? Y += S.t.v * I[0] * ot : Y += S.t.v * I * ot);
            ht = false;
          }
          for (Y && (Y += at); U < b; ) c[U].animatorJustifyOffset = Y, U += 1;
        }
        for (b = 0; b < x; b += 1) {
          if (n.reset(), Z = 1, c[b].n) o = 0, m2 += t.yOffset, m2 += w ? 1 : 0, y = q, w = false, this._hasMaskedPath && (h = H, f = X, _ = E[h].points, u = _[f - 1], v = _[f], M = v.partialLength, A = 0), tt = "", rt = "", et = "", st = "", it = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (Q !== c[b].line) {
                switch (t.j) {
                  case 1:
                    y += F - t.lineWidths[c[b].line];
                    break;
                  case 2:
                    y += (F - t.lineWidths[c[b].line]) / 2;
                    break;
                }
                Q = c[b].line;
              }
              R !== c[b].ind && (c[R] && (y += c[R].extra), y += c[b].an / 2, R = c[b].ind), y += r[0] * c[b].an * 5e-3;
              var J = 0;
              for (d = 0; d < g; d += 1) S = i[d].a, S.p.propType && (T = i[d].s, I = T.getMult(c[b].anIndexes[d], s.a[d].s.totalChars), I.length ? J += S.p.v[0] * I[0] : J += S.p.v[0] * I), S.a.propType && (T = i[d].s, I = T.getMult(c[b].anIndexes[d], s.a[d].s.totalChars), I.length ? J += S.a.v[0] * I[0] : J += S.a.v[0] * I);
              for (l = true, this._pathData.a.v && (y = c[0].an * 0.5 + (F - this._pathData.f.v - c[0].an * 0.5 - c[c.length - 1].an * 0.5) * R / (x - 1), y += this._pathData.f.v); l; ) A + M >= y + J || !_ ? (C = (y + J - A) / v.partialLength, z = u.point[0] + (v.point[0] - u.point[0]) * C, j = u.point[1] + (v.point[1] - u.point[1]) * C, n.translate(-r[0] * c[b].an * 5e-3, -(r[1] * B) * 0.01), l = false) : _ && (A += v.partialLength, f += 1, f >= _.length && (f = 0, h += 1, E[h] ? _ = E[h].points : L.v.c ? (f = 0, h = 0, _ = E[h].points) : (A -= v.partialLength, _ = null)), _ && (u = v, v = _[f], M = v.partialLength));
              N = c[b].an / 2 - c[b].add, n.translate(-N, 0, 0);
            } else N = c[b].an / 2 - c[b].add, n.translate(-N, 0, 0), n.translate(-r[0] * c[b].an * 5e-3, -r[1] * B * 0.01, 0);
            for (d = 0; d < g; d += 1) S = i[d].a, S.t.propType && (T = i[d].s, I = T.getMult(c[b].anIndexes[d], s.a[d].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? I.length ? y += S.t.v * I[0] : y += S.t.v * I : I.length ? o += S.t.v * I[0] : o += S.t.v * I));
            for (t.strokeWidthAnim && (K = t.sw || 0), t.strokeColorAnim && (t.sc ? $ = [t.sc[0], t.sc[1], t.sc[2]] : $ = [0, 0, 0]), t.fillColorAnim && t.fc && (W = [t.fc[0], t.fc[1], t.fc[2]]), d = 0; d < g; d += 1) S = i[d].a, S.a.propType && (T = i[d].s, I = T.getMult(c[b].anIndexes[d], s.a[d].s.totalChars), I.length ? n.translate(-S.a.v[0] * I[0], -S.a.v[1] * I[1], S.a.v[2] * I[2]) : n.translate(-S.a.v[0] * I, -S.a.v[1] * I, S.a.v[2] * I));
            for (d = 0; d < g; d += 1) S = i[d].a, S.s.propType && (T = i[d].s, I = T.getMult(c[b].anIndexes[d], s.a[d].s.totalChars), I.length ? n.scale(1 + (S.s.v[0] - 1) * I[0], 1 + (S.s.v[1] - 1) * I[1], 1) : n.scale(1 + (S.s.v[0] - 1) * I, 1 + (S.s.v[1] - 1) * I, 1));
            for (d = 0; d < g; d += 1) {
              if (S = i[d].a, T = i[d].s, I = T.getMult(c[b].anIndexes[d], s.a[d].s.totalChars), S.sk.propType && (I.length ? n.skewFromAxis(-S.sk.v * I[0], S.sa.v * I[1]) : n.skewFromAxis(-S.sk.v * I, S.sa.v * I)), S.r.propType && (I.length ? n.rotateZ(-S.r.v * I[2]) : n.rotateZ(-S.r.v * I)), S.ry.propType && (I.length ? n.rotateY(S.ry.v * I[1]) : n.rotateY(S.ry.v * I)), S.rx.propType && (I.length ? n.rotateX(S.rx.v * I[0]) : n.rotateX(S.rx.v * I)), S.o.propType && (I.length ? Z += (S.o.v * I[0] - Z) * I[0] : Z += (S.o.v * I - Z) * I), t.strokeWidthAnim && S.sw.propType && (I.length ? K += S.sw.v * I[0] : K += S.sw.v * I), t.strokeColorAnim && S.sc.propType) for (O = 0; O < 3; O += 1) I.length ? $[O] += (S.sc.v[O] - $[O]) * I[0] : $[O] += (S.sc.v[O] - $[O]) * I;
              if (t.fillColorAnim && t.fc) {
                if (S.fc.propType) for (O = 0; O < 3; O += 1) I.length ? W[O] += (S.fc.v[O] - W[O]) * I[0] : W[O] += (S.fc.v[O] - W[O]) * I;
                S.fh.propType && (I.length ? W = addHueToRGB(W, S.fh.v * I[0]) : W = addHueToRGB(W, S.fh.v * I)), S.fs.propType && (I.length ? W = addSaturationToRGB(W, S.fs.v * I[0]) : W = addSaturationToRGB(W, S.fs.v * I)), S.fb.propType && (I.length ? W = addBrightnessToRGB(W, S.fb.v * I[0]) : W = addBrightnessToRGB(W, S.fb.v * I));
              }
            }
            for (d = 0; d < g; d += 1) S = i[d].a, S.p.propType && (T = i[d].s, I = T.getMult(c[b].anIndexes[d], s.a[d].s.totalChars), this._hasMaskedPath ? I.length ? n.translate(0, S.p.v[1] * I[0], -S.p.v[2] * I[1]) : n.translate(0, S.p.v[1] * I, -S.p.v[2] * I) : I.length ? n.translate(S.p.v[0] * I[0], S.p.v[1] * I[1], -S.p.v[2] * I[2]) : n.translate(S.p.v[0] * I, S.p.v[1] * I, -S.p.v[2] * I));
            if (t.strokeWidthAnim && (et = K < 0 ? 0 : K), t.strokeColorAnim && (nt = "rgb(" + Math.round($[0] * 255) + "," + Math.round($[1] * 255) + "," + Math.round($[2] * 255) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(W[0] * 255) + "," + Math.round(W[1] * 255) + "," + Math.round(W[2] * 255) + ")"), this._hasMaskedPath) {
              if (n.translate(0, -t.ls), n.translate(0, r[1] * B * 0.01 + m2, 0), this._pathData.p.v) {
                D = (v.point[1] - u.point[1]) / (v.point[0] - u.point[0]);
                var lt = Math.atan(D) * 180 / Math.PI;
                v.point[0] < u.point[0] && (lt += 180), n.rotate(-lt * Math.PI / 180);
              }
              n.translate(z, j, 0), y -= r[0] * c[b].an * 5e-3, c[b + 1] && R !== c[b + 1].ind && (y += c[b].an / 2, y += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (n.translate(o, m2, 0), t.ps && n.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  n.translate(c[b].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[b].line]), 0, 0);
                  break;
                case 2:
                  n.translate(c[b].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[b].line]) / 2, 0, 0);
                  break;
              }
              n.translate(0, -t.ls), n.translate(N, 0, 0), n.translate(r[0] * c[b].an * 5e-3, r[1] * B * 0.01, 0), o += c[b].l + t.tr * 1e-3 * t.finalSize;
            }
            a === "html" ? tt = n.toCSS() : a === "svg" ? tt = n.to2dCSS() : it = [n.props[0], n.props[1], n.props[2], n.props[3], n.props[4], n.props[5], n.props[6], n.props[7], n.props[8], n.props[9], n.props[10], n.props[11], n.props[12], n.props[13], n.props[14], n.props[15]], st = Z;
          }
          p <= b ? (k = new LetterProps(st, et, nt, rt, tt, it), this.renderedLetters.push(k), p += 1, this.lettersChangedFlag = true) : (k = this.renderedLetters[b], this.lettersChangedFlag = k.update(st, et, nt, rt, tt, it) || this.lettersChangedFlag);
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
      var a = r.l || [], p = !!this.globalData.fontManager.chars;
      e = a.length;
      var o, m2 = this.mHelper, b = "", x = this.data.singleShape, c = 0, P = 0, y = true, v = r.tr * 1e-3 * r.finalSize;
      if (x && !p && !r.sz) {
        var A = this.textContainer, l = "start";
        switch (r.j) {
          case 1:
            l = "end";
            break;
          case 2:
            l = "middle";
            break;
          default:
            l = "start";
            break;
        }
        A.setAttribute("text-anchor", l), A.setAttribute("letter-spacing", v);
        var f = this.buildTextContents(r.finalText);
        for (e = f.length, P = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) o = this.textSpans[t].span || createNS("tspan"), o.textContent = f[t], o.setAttribute("x", 0), o.setAttribute("y", P), o.style.display = "inherit", A.appendChild(o), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = o, P += r.finalLineHeight;
        this.layerElement.appendChild(A);
      } else {
        var h = this.textSpans.length, u;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !p || !x || t === 0) {
            if (o = h > t ? this.textSpans[t].span : createNS(p ? "g" : "text"), h <= t) {
              if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, p) {
                var _ = createNS("g");
                o.appendChild(_), this.textSpans[t].childSpan = _;
              }
              this.textSpans[t].span = o, this.layerElement.appendChild(o);
            }
            o.style.display = "inherit";
          }
          if (m2.reset(), x && (a[t].n && (c = -v, P += r.yOffset, P += y ? 1 : 0, y = false), this.applyTextPropertiesToMatrix(r, m2, a[t].line, c, P), c += a[t].l || 0, c += v), p) {
            u = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
            var E;
            if (u.t === 1) E = new SVGCompElement(u.data, this.globalData, this);
            else {
              var M = emptyShapeData;
              u.data && u.data.shapes && (M = this.buildShapeData(u.data, r.finalSize)), E = new SVGShapeElement(M, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var F = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(F.layerElement), F.destroy();
            }
            this.textSpans[t].glyph = E, E._debug = true, E.prepareFrame(0), E.renderFrame(), this.textSpans[t].childSpan.appendChild(E.layerElement), u.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
          } else x && o.setAttribute("transform", "translate(" + m2.props[12] + "," + m2.props[13] + ")"), o.textContent = a[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        x && o && o.setAttribute("d", b);
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
      var p = createNS("defs");
      this.svgElement.appendChild(p);
      var o = createNS("g");
      this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && e.hideOnTransparent === false), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: p, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
    }
    extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    }, registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier);
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
      var r = this, i = 256, s = 6, n = 52, a = "random", p = e.pow(i, s), o = e.pow(2, n), m2 = o * 2, b = i - 1, x;
      function c(h, u, _) {
        var E = [];
        u = u === true ? { entropy: true } : u || {};
        var M = A(v(u.entropy ? [h, f(t)] : h === null ? l() : h, 3), E), F = new P(E), C = function() {
          for (var L = F.g(s), V = p, G = 0; L < o; ) L = (L + G) * i, V *= i, G = F.g(1);
          for (; L >= m2; ) L /= 2, V /= 2, G >>>= 1;
          return (L + G) / V;
        };
        return C.int32 = function() {
          return F.g(4) | 0;
        }, C.quick = function() {
          return F.g(4) / 4294967296;
        }, C.double = C, A(f(F.S), t), (u.pass || _ || function(D, L, V, G) {
          return G && (G.S && y(G, F), D.state = function() {
            return y(F, {});
          }), V ? (e[a] = D, L) : D;
        })(C, M, "global" in u ? u.global : this == e, u.state);
      }
      e["seed" + a] = c;
      function P(h) {
        var u, _ = h.length, E = this, M = 0, F = E.i = E.j = 0, C = E.S = [];
        for (_ || (h = [_++]); M < i; ) C[M] = M++;
        for (M = 0; M < i; M++) C[M] = C[F = b & F + h[M % _] + (u = C[M])], C[F] = u;
        E.g = function(D) {
          for (var L, V = 0, G = E.i, B = E.j, w = E.S; D--; ) L = w[G = b & G + 1], V = V * i + w[b & (w[G] = w[B = b & B + L]) + (w[B] = L)];
          return E.i = G, E.j = B, V;
        };
      }
      function y(h, u) {
        return u.i = h.i, u.j = h.j, u.S = h.S.slice(), u;
      }
      function v(h, u) {
        var _ = [], E = _typeof$2(h), M;
        if (u && E == "object") for (M in h) try {
          _.push(v(h[M], u - 1));
        } catch {
        }
        return _.length ? _ : E == "string" ? h : h + "\0";
      }
      function A(h, u) {
        for (var _ = h + "", E, M = 0; M < _.length; ) u[b & M] = b & (E ^= u[b & M] * 19) + _.charCodeAt(M++);
        return f(u);
      }
      function l() {
        try {
          if (x) ;
          var h = new Uint8Array(i);
          return (r.crypto || r.msCrypto).getRandomValues(h), f(h);
        } catch {
          var u = r.navigator, _ = u && u.plugins;
          return [+/* @__PURE__ */ new Date(), r, _, r.screen, f(t)];
        }
      }
      function f(h) {
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
          for (var s = 0, n = t.length, a = e.length, p = []; s < n || s < a; ) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? p[s] = t[s] + e[s] : p[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return p;
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
          for (var s = 0, n = t.length, a = e.length, p = []; s < n || s < a; ) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? p[s] = t[s] - e[s] : p[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return p;
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
        var e = t[0], r = t[1], i = t[2], s = Math.max(e, r, i), n = Math.min(e, r, i), a, p, o = (s + n) / 2;
        if (s === n) a = 0, p = 0;
        else {
          var m2 = s - n;
          switch (p = o > 0.5 ? m2 / (2 - s - n) : m2 / (s + n), s) {
            case e:
              a = (r - i) / m2 + (r < i ? 6 : 0);
              break;
            case r:
              a = (i - e) / m2 + 2;
              break;
            case i:
              a = (e - r) / m2 + 4;
              break;
          }
          a /= 6;
        }
        return [a, p, o, t[3]];
      }
      function hue2rgb(t, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
      }
      function hslToRgb(t) {
        var e = t[0], r = t[1], i = t[2], s, n, a;
        if (r === 0) s = i, a = i, n = i;
        else {
          var p = i < 0.5 ? i * (1 + r) : i + r - i * r, o = 2 * i - p;
          s = hue2rgb(o, p, e + 1 / 3), n = hue2rgb(o, p, e), a = hue2rgb(o, p, e - 1 / 3);
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
        var p, o = i.length, m2 = createTypedArray("float32", o);
        for (p = 0; p < o; p += 1) m2[p] = i[p] + (s[p] - i[p]) * a;
        return m2;
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
        var p = [0, 0], o, m2;
        for (s = 0; s < n; s += 1) o = e && e[s] ? e[s] : p, m2 = r && r[s] ? r[s] : p, a.setTripleAt(t[s][0], t[s][1], m2[0] + t[s][0], m2[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, true);
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
          var p = Math.floor(time * e);
          for (i = 0, s = 0; i < p; ) {
            for (s = 0; s < n; s += 1) a[s] += -r + r * 2 * BMMath.random();
            i += 1;
          }
          var o = time * e, m2 = o - Math.floor(o), b = createTypedArray("float32", n);
          if (n > 1) {
            for (s = 0; s < n; s += 1) b[s] = this.pv[s] + a[s] + (-r + r * 2 * BMMath.random()) * m2;
            return b;
          }
          return this.pv + a[0] + (-r + r * 2 * BMMath.random()) * m2;
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
            var p, o = s.length, m2 = createTypedArray("float32", o);
            for (p = 0; p < o; p += 1) m2[p] = (n[p] - s[p]) * a + s[p];
            return m2;
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
        function p(m2) {
          s.indexOf(m2) === -1 && s.push(m2);
        }
        function o() {
          var m2, b = s.length;
          for (m2 = 0; m2 < b; m2 += 1) s[m2].release();
          s.length = 0;
        }
        r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = n, r.renderer.globalData.popExpression = a, r.renderer.globalData.registerExpressionProperty = p;
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
        var p = function(m2) {
          for (n = 0; n < a; ) {
            if (i.masksProperties[n].nm === m2) return s[n];
            n += 1;
          }
          return null;
        };
        return p;
      };
      return e;
    }(), ExpressionPropertyInterface = /* @__PURE__ */ function() {
      var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
      function r(a, p, o) {
        Object.defineProperty(a, "velocity", { get: function() {
          return p.getVelocityAtTime(p.comp.currentFrame);
        } }), a.numKeys = p.keyframes ? p.keyframes.length : 0, a.key = function(m2) {
          if (!a.numKeys) return 0;
          var b = "";
          "s" in p.keyframes[m2 - 1] ? b = p.keyframes[m2 - 1].s : "e" in p.keyframes[m2 - 2] ? b = p.keyframes[m2 - 2].e : b = p.keyframes[m2 - 2].s;
          var x = o === "unidimensional" ? new Number(b) : Object.assign({}, b);
          return x.time = p.keyframes[m2 - 1].t / p.elem.comp.globalData.frameRate, x.value = o === "unidimensional" ? b[0] : b, x;
        }, a.valueAtTime = p.getValueAtTime, a.speedAtTime = p.getSpeedAtTime, a.velocityAtTime = p.getVelocityAtTime, a.propertyGroup = p.propertyGroup;
      }
      function i(a) {
        (!a || !("pv" in a)) && (a = t);
        var p = 1 / a.mult, o = a.pv * p, m2 = new Number(o);
        return m2.value = o, r(m2, a, "unidimensional"), function() {
          return a.k && a.getValue(), o = a.v * p, m2.value !== o && (m2 = new Number(o), m2.value = o, r(m2, a, "unidimensional")), m2;
        };
      }
      function s(a) {
        (!a || !("pv" in a)) && (a = e);
        var p = 1 / a.mult, o = a.data && a.data.l || a.pv.length, m2 = createTypedArray("float32", o), b = createTypedArray("float32", o);
        return m2.value = b, r(m2, a, "multidimensional"), function() {
          a.k && a.getValue();
          for (var x = 0; x < o; x += 1) b[x] = a.v[x] * p, m2[x] = b[x];
          return m2;
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
      function t(m2) {
        var b = new Matrix();
        if (m2 !== void 0) {
          var x = this._elem.finalTransform.mProp.getValueAtTime(m2);
          x.clone(b);
        } else {
          var c = this._elem.finalTransform.mProp;
          c.applyToMatrix(b);
        }
        return b;
      }
      function e(m2, b) {
        var x = this.getMatrix(b);
        return x.props[12] = 0, x.props[13] = 0, x.props[14] = 0, this.applyPoint(x, m2);
      }
      function r(m2, b) {
        var x = this.getMatrix(b);
        return this.applyPoint(x, m2);
      }
      function i(m2, b) {
        var x = this.getMatrix(b);
        return x.props[12] = 0, x.props[13] = 0, x.props[14] = 0, this.invertPoint(x, m2);
      }
      function s(m2, b) {
        var x = this.getMatrix(b);
        return this.invertPoint(x, m2);
      }
      function n(m2, b) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var x, c = this._elem.hierarchy.length;
          for (x = 0; x < c; x += 1) this._elem.hierarchy[x].finalTransform.mProp.applyToMatrix(m2);
        }
        return m2.applyToPointArray(b[0], b[1], b[2] || 0);
      }
      function a(m2, b) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var x, c = this._elem.hierarchy.length;
          for (x = 0; x < c; x += 1) this._elem.hierarchy[x].finalTransform.mProp.applyToMatrix(m2);
        }
        return m2.inversePoint(b);
      }
      function p(m2) {
        var b = new Matrix();
        if (b.reset(), this._elem.finalTransform.mProp.applyToMatrix(b), this._elem.hierarchy && this._elem.hierarchy.length) {
          var x, c = this._elem.hierarchy.length;
          for (x = 0; x < c; x += 1) this._elem.hierarchy[x].finalTransform.mProp.applyToMatrix(b);
          return b.inversePoint(m2);
        }
        return b.inversePoint(m2);
      }
      function o() {
        return [1, 1, 1, 1];
      }
      return function(m2) {
        var b;
        function x(v) {
          P.mask = new MaskManagerInterface(v, m2);
        }
        function c(v) {
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
              return b;
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
        P.getMatrix = t, P.invertPoint = a, P.applyPoint = n, P.toWorld = r, P.toWorldVec = e, P.fromWorld = s, P.fromWorldVec = i, P.toComp = r, P.fromComp = p, P.sampleImage = o, P.sourceRectAtTime = m2.sourceRectAtTime.bind(m2), P._elem = m2, b = TransformExpressionInterface(m2.finalTransform.mProp);
        var y = getDescriptor(b, "anchorPoint");
        return Object.defineProperties(P, { hasParent: { get: function() {
          return m2.hierarchy.length;
        } }, parent: { get: function() {
          return m2.hierarchy[0].layerInterface;
        } }, rotation: getDescriptor(b, "rotation"), scale: getDescriptor(b, "scale"), position: getDescriptor(b, "position"), opacity: getDescriptor(b, "opacity"), anchorPoint: y, anchor_point: y, transform: { get: function() {
          return b;
        } }, active: { get: function() {
          return m2.isInRange;
        } } }), P.startTime = m2.data.st, P.index = m2.data.ind, P.source = m2.data.refId, P.height = m2.data.ty === 0 ? m2.data.h : 100, P.width = m2.data.ty === 0 ? m2.data.w : 100, P.inPoint = m2.data.ip / m2.comp.globalData.frameRate, P.outPoint = m2.data.op / m2.comp.globalData.frameRate, P._name = m2.data.nm, P.registerMaskInterface = x, P.registerEffectsInterface = c, P;
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
          var a = [], p = s.data.ef, o, m2 = s.effectsManager.effectElements.length;
          for (o = 0; o < m2; o += 1) a.push(r(p[o], s.effectsManager.effectElements[o], n, s));
          var b = s.data.ef || [], x = function(P) {
            for (o = 0, m2 = b.length; o < m2; ) {
              if (P === b[o].nm || P === b[o].mn || P === b[o].ix) return a[o];
              o += 1;
            }
            return null;
          };
          return Object.defineProperty(x, "numProperties", { get: function() {
            return b.length;
          } }), x;
        }
        return null;
      }
      function r(s, n, a, p) {
        function o(P) {
          for (var y = s.ef, v = 0, A = y.length; v < A; ) {
            if (P === y[v].nm || P === y[v].mn || P === y[v].ix) return y[v].ty === 5 ? b[v] : b[v]();
            v += 1;
          }
          throw new Error();
        }
        var m2 = propertyGroupFactory(o, a), b = [], x, c = s.ef.length;
        for (x = 0; x < c; x += 1) s.ef[x].ty === 5 ? b.push(r(s.ef[x], n.effectElements[x], n.effectElements[x].propertyGroup, p)) : b.push(i(n.effectElements[x], s.ef[x].ty, p, m2));
        return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", { get: function() {
          return b[0]();
        } }), Object.defineProperties(o, { numProperties: { get: function() {
          return s.np;
        } }, _name: { value: s.nm }, propertyGroup: { value: m2 } }), o.enabled = s.en !== 0, o.active = o.enabled, o;
      }
      function i(s, n, a, p) {
        var o = ExpressionPropertyInterface(s.p);
        function m2() {
          return n === 10 ? a.comp.compInterface(s.p.v) : o();
        }
        return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", p)), m2;
      }
      return t;
    }(), ShapePathInterface = /* @__PURE__ */ function() {
      return function(e, r, i) {
        var s = r.sh;
        function n(p) {
          return p === "Shape" || p === "shape" || p === "Path" || p === "path" || p === "ADBE Vector Shape" || p === 2 ? n.path : null;
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
        var l = [], f, h = y ? y.length : 0;
        for (f = 0; f < h; f += 1) y[f].ty === "gr" ? l.push(r(y[f], v[f], A)) : y[f].ty === "fl" ? l.push(i(y[f], v[f], A)) : y[f].ty === "st" ? l.push(a(y[f], v[f], A)) : y[f].ty === "tm" ? l.push(p(y[f], v[f], A)) : y[f].ty === "tr" || (y[f].ty === "el" ? l.push(m2(y[f], v[f], A)) : y[f].ty === "sr" ? l.push(b(y[f], v[f], A)) : y[f].ty === "sh" ? l.push(ShapePathInterface(y[f], v[f], A)) : y[f].ty === "rc" ? l.push(x(y[f], v[f], A)) : y[f].ty === "rd" ? l.push(c(y[f], v[f], A)) : y[f].ty === "rp" ? l.push(P(y[f], v[f], A)) : y[f].ty === "gf" ? l.push(s(y[f], v[f], A)) : l.push(n(y[f], v[f])));
        return l;
      }
      function e(y, v, A) {
        var l, f = function(_) {
          for (var E = 0, M = l.length; E < M; ) {
            if (l[E]._name === _ || l[E].mn === _ || l[E].propertyIndex === _ || l[E].ix === _ || l[E].ind === _) return l[E];
            E += 1;
          }
          return typeof _ == "number" ? l[_ - 1] : null;
        };
        f.propertyGroup = propertyGroupFactory(f, A), l = t(y.it, v.it, f.propertyGroup), f.numProperties = l.length;
        var h = o(y.it[y.it.length - 1], v.it[v.it.length - 1], f.propertyGroup);
        return f.transform = h, f.propertyIndex = y.cix, f._name = y.nm, f;
      }
      function r(y, v, A) {
        var l = function(_) {
          switch (_) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return l.content;
            default:
              return l.transform;
          }
        };
        l.propertyGroup = propertyGroupFactory(l, A);
        var f = e(y, v, l.propertyGroup), h = o(y.it[y.it.length - 1], v.it[v.it.length - 1], l.propertyGroup);
        return l.content = f, l.transform = h, Object.defineProperty(l, "_name", { get: function() {
          return y.nm;
        } }), l.numProperties = y.np, l.propertyIndex = y.ix, l.nm = y.nm, l.mn = y.mn, l;
      }
      function i(y, v, A) {
        function l(f) {
          return f === "Color" || f === "color" ? l.color : f === "Opacity" || f === "opacity" ? l.opacity : null;
        }
        return Object.defineProperties(l, { color: { get: ExpressionPropertyInterface(v.c) }, opacity: { get: ExpressionPropertyInterface(v.o) }, _name: { value: y.nm }, mn: { value: y.mn } }), v.c.setGroupProperty(PropertyInterface("Color", A)), v.o.setGroupProperty(PropertyInterface("Opacity", A)), l;
      }
      function s(y, v, A) {
        function l(f) {
          return f === "Start Point" || f === "start point" ? l.startPoint : f === "End Point" || f === "end point" ? l.endPoint : f === "Opacity" || f === "opacity" ? l.opacity : null;
        }
        return Object.defineProperties(l, { startPoint: { get: ExpressionPropertyInterface(v.s) }, endPoint: { get: ExpressionPropertyInterface(v.e) }, opacity: { get: ExpressionPropertyInterface(v.o) }, type: { get: function() {
          return "a";
        } }, _name: { value: y.nm }, mn: { value: y.mn } }), v.s.setGroupProperty(PropertyInterface("Start Point", A)), v.e.setGroupProperty(PropertyInterface("End Point", A)), v.o.setGroupProperty(PropertyInterface("Opacity", A)), l;
      }
      function n() {
        function y() {
          return null;
        }
        return y;
      }
      function a(y, v, A) {
        var l = propertyGroupFactory(M, A), f = propertyGroupFactory(E, l);
        function h(F) {
          Object.defineProperty(E, y.d[F].nm, { get: ExpressionPropertyInterface(v.d.dataProps[F].p) });
        }
        var u, _ = y.d ? y.d.length : 0, E = {};
        for (u = 0; u < _; u += 1) h(u), v.d.dataProps[u].p.setGroupProperty(f);
        function M(F) {
          return F === "Color" || F === "color" ? M.color : F === "Opacity" || F === "opacity" ? M.opacity : F === "Stroke Width" || F === "stroke width" ? M.strokeWidth : null;
        }
        return Object.defineProperties(M, { color: { get: ExpressionPropertyInterface(v.c) }, opacity: { get: ExpressionPropertyInterface(v.o) }, strokeWidth: { get: ExpressionPropertyInterface(v.w) }, dash: { get: function() {
          return E;
        } }, _name: { value: y.nm }, mn: { value: y.mn } }), v.c.setGroupProperty(PropertyInterface("Color", l)), v.o.setGroupProperty(PropertyInterface("Opacity", l)), v.w.setGroupProperty(PropertyInterface("Stroke Width", l)), M;
      }
      function p(y, v, A) {
        function l(h) {
          return h === y.e.ix || h === "End" || h === "end" ? l.end : h === y.s.ix ? l.start : h === y.o.ix ? l.offset : null;
        }
        var f = propertyGroupFactory(l, A);
        return l.propertyIndex = y.ix, v.s.setGroupProperty(PropertyInterface("Start", f)), v.e.setGroupProperty(PropertyInterface("End", f)), v.o.setGroupProperty(PropertyInterface("Offset", f)), l.propertyIndex = y.ix, l.propertyGroup = A, Object.defineProperties(l, { start: { get: ExpressionPropertyInterface(v.s) }, end: { get: ExpressionPropertyInterface(v.e) }, offset: { get: ExpressionPropertyInterface(v.o) }, _name: { value: y.nm } }), l.mn = y.mn, l;
      }
      function o(y, v, A) {
        function l(h) {
          return y.a.ix === h || h === "Anchor Point" ? l.anchorPoint : y.o.ix === h || h === "Opacity" ? l.opacity : y.p.ix === h || h === "Position" ? l.position : y.r.ix === h || h === "Rotation" || h === "ADBE Vector Rotation" ? l.rotation : y.s.ix === h || h === "Scale" ? l.scale : y.sk && y.sk.ix === h || h === "Skew" ? l.skew : y.sa && y.sa.ix === h || h === "Skew Axis" ? l.skewAxis : null;
        }
        var f = propertyGroupFactory(l, A);
        return v.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", f)), v.transform.mProps.p.setGroupProperty(PropertyInterface("Position", f)), v.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", f)), v.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", f)), v.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", f)), v.transform.mProps.sk && (v.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", f)), v.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", f))), v.transform.op.setGroupProperty(PropertyInterface("Opacity", f)), Object.defineProperties(l, { opacity: { get: ExpressionPropertyInterface(v.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(v.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(v.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(v.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(v.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(v.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(v.transform.mProps.sa) }, _name: { value: y.nm } }), l.ty = "tr", l.mn = y.mn, l.propertyGroup = A, l;
      }
      function m2(y, v, A) {
        function l(u) {
          return y.p.ix === u ? l.position : y.s.ix === u ? l.size : null;
        }
        var f = propertyGroupFactory(l, A);
        l.propertyIndex = y.ix;
        var h = v.sh.ty === "tm" ? v.sh.prop : v.sh;
        return h.s.setGroupProperty(PropertyInterface("Size", f)), h.p.setGroupProperty(PropertyInterface("Position", f)), Object.defineProperties(l, { size: { get: ExpressionPropertyInterface(h.s) }, position: { get: ExpressionPropertyInterface(h.p) }, _name: { value: y.nm } }), l.mn = y.mn, l;
      }
      function b(y, v, A) {
        function l(u) {
          return y.p.ix === u ? l.position : y.r.ix === u ? l.rotation : y.pt.ix === u ? l.points : y.or.ix === u || u === "ADBE Vector Star Outer Radius" ? l.outerRadius : y.os.ix === u ? l.outerRoundness : y.ir && (y.ir.ix === u || u === "ADBE Vector Star Inner Radius") ? l.innerRadius : y.is && y.is.ix === u ? l.innerRoundness : null;
        }
        var f = propertyGroupFactory(l, A), h = v.sh.ty === "tm" ? v.sh.prop : v.sh;
        return l.propertyIndex = y.ix, h.or.setGroupProperty(PropertyInterface("Outer Radius", f)), h.os.setGroupProperty(PropertyInterface("Outer Roundness", f)), h.pt.setGroupProperty(PropertyInterface("Points", f)), h.p.setGroupProperty(PropertyInterface("Position", f)), h.r.setGroupProperty(PropertyInterface("Rotation", f)), y.ir && (h.ir.setGroupProperty(PropertyInterface("Inner Radius", f)), h.is.setGroupProperty(PropertyInterface("Inner Roundness", f))), Object.defineProperties(l, { position: { get: ExpressionPropertyInterface(h.p) }, rotation: { get: ExpressionPropertyInterface(h.r) }, points: { get: ExpressionPropertyInterface(h.pt) }, outerRadius: { get: ExpressionPropertyInterface(h.or) }, outerRoundness: { get: ExpressionPropertyInterface(h.os) }, innerRadius: { get: ExpressionPropertyInterface(h.ir) }, innerRoundness: { get: ExpressionPropertyInterface(h.is) }, _name: { value: y.nm } }), l.mn = y.mn, l;
      }
      function x(y, v, A) {
        function l(u) {
          return y.p.ix === u ? l.position : y.r.ix === u ? l.roundness : y.s.ix === u || u === "Size" || u === "ADBE Vector Rect Size" ? l.size : null;
        }
        var f = propertyGroupFactory(l, A), h = v.sh.ty === "tm" ? v.sh.prop : v.sh;
        return l.propertyIndex = y.ix, h.p.setGroupProperty(PropertyInterface("Position", f)), h.s.setGroupProperty(PropertyInterface("Size", f)), h.r.setGroupProperty(PropertyInterface("Rotation", f)), Object.defineProperties(l, { position: { get: ExpressionPropertyInterface(h.p) }, roundness: { get: ExpressionPropertyInterface(h.r) }, size: { get: ExpressionPropertyInterface(h.s) }, _name: { value: y.nm } }), l.mn = y.mn, l;
      }
      function c(y, v, A) {
        function l(u) {
          return y.r.ix === u || u === "Round Corners 1" ? l.radius : null;
        }
        var f = propertyGroupFactory(l, A), h = v;
        return l.propertyIndex = y.ix, h.rd.setGroupProperty(PropertyInterface("Radius", f)), Object.defineProperties(l, { radius: { get: ExpressionPropertyInterface(h.rd) }, _name: { value: y.nm } }), l.mn = y.mn, l;
      }
      function P(y, v, A) {
        function l(u) {
          return y.c.ix === u || u === "Copies" ? l.copies : y.o.ix === u || u === "Offset" ? l.offset : null;
        }
        var f = propertyGroupFactory(l, A), h = v;
        return l.propertyIndex = y.ix, h.c.setGroupProperty(PropertyInterface("Copies", f)), h.o.setGroupProperty(PropertyInterface("Offset", f)), Object.defineProperties(l, { copies: { get: ExpressionPropertyInterface(h.c) }, offset: { get: ExpressionPropertyInterface(h.o) }, _name: { value: y.nm } }), l.mn = y.mn, l;
      }
      return function(y, v, A) {
        var l;
        function f(u) {
          if (typeof u == "number") return u = u === void 0 ? 1 : u, u === 0 ? A : l[u - 1];
          for (var _ = 0, E = l.length; _ < E; ) {
            if (l[_]._name === u) return l[_];
            _ += 1;
          }
          return null;
        }
        function h() {
          return A;
        }
        return f.propertyGroup = propertyGroupFactory(f, h), l = t(y, v, f.propertyGroup), f.numProperties = l.length, f._name = "Contents", f;
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
          return s = "", n = i.getFootageData(), p;
        }
        function p(o) {
          if (n[o]) return s = o, n = n[o], _typeof(n) === "object" ? p : n;
          var m2 = o.indexOf(s);
          if (m2 !== -1) {
            var b = parseInt(o.substr(m2 + s.length), 10);
            return n = n[b], _typeof(n) === "object" ? p : n;
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
      function t(a, p, o) {
        p.x && (o.k = true, o.x = true, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(a, p, o).bind(o)));
      }
      function e(a) {
        return a *= this.elem.globalData.frameRate, a -= this.offsetTime, a !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < a ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(a, this._cachingAtTime), this._cachingAtTime.lastFrame = a), this._cachingAtTime.value;
      }
      function r(a) {
        var p = -0.01, o = this.getValueAtTime(a), m2 = this.getValueAtTime(a + p), b = 0;
        if (o.length) {
          var x;
          for (x = 0; x < o.length; x += 1) b += Math.pow(m2[x] - o[x], 2);
          b = Math.sqrt(b) * 100;
        } else b = 0;
        return b;
      }
      function i(a) {
        if (this.vel !== void 0) return this.vel;
        var p = -1e-3, o = this.getValueAtTime(a), m2 = this.getValueAtTime(a + p), b;
        if (o.length) {
          b = createTypedArray("float32", o.length);
          var x;
          for (x = 0; x < o.length; x += 1) b[x] = (m2[x] - o[x]) / p;
        } else b = (m2 - o) / p;
        return b;
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
      function t(c, P, y) {
        if (!this.k || !this.keyframes) return this.pv;
        c = c ? c.toLowerCase() : "";
        var v = this.comp.renderedFrame, A = this.keyframes, l = A[A.length - 1].t;
        if (v <= l) return this.pv;
        var f, h;
        y ? (P ? f = Math.abs(l - this.elem.comp.globalData.frameRate * P) : f = Math.max(0, l - this.elem.data.ip), h = l - f) : ((!P || P > A.length - 1) && (P = A.length - 1), h = A[A.length - 1 - P].t, f = l - h);
        var u, _, E;
        if (c === "pingpong") {
          var M = Math.floor((v - h) / f);
          if (M % 2 !== 0) return this.getValueAtTime((f - (v - h) % f + h) / this.comp.globalData.frameRate, 0);
        } else if (c === "offset") {
          var F = this.getValueAtTime(h / this.comp.globalData.frameRate, 0), C = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), D = this.getValueAtTime(((v - h) % f + h) / this.comp.globalData.frameRate, 0), L = Math.floor((v - h) / f);
          if (this.pv.length) {
            for (E = new Array(F.length), _ = E.length, u = 0; u < _; u += 1) E[u] = (C[u] - F[u]) * L + D[u];
            return E;
          }
          return (C - F) * L + D;
        } else if (c === "continue") {
          var V = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((l - 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (E = new Array(V.length), _ = E.length, u = 0; u < _; u += 1) E[u] = V[u] + (V[u] - G[u]) * ((v - l) / this.comp.globalData.frameRate) / 5e-4;
            return E;
          }
          return V + (V - G) * ((v - l) / 1e-3);
        }
        return this.getValueAtTime(((v - h) % f + h) / this.comp.globalData.frameRate, 0);
      }
      function e(c, P, y) {
        if (!this.k) return this.pv;
        c = c ? c.toLowerCase() : "";
        var v = this.comp.renderedFrame, A = this.keyframes, l = A[0].t;
        if (v >= l) return this.pv;
        var f, h;
        y ? (P ? f = Math.abs(this.elem.comp.globalData.frameRate * P) : f = Math.max(0, this.elem.data.op - l), h = l + f) : ((!P || P > A.length - 1) && (P = A.length - 1), h = A[P].t, f = h - l);
        var u, _, E;
        if (c === "pingpong") {
          var M = Math.floor((l - v) / f);
          if (M % 2 === 0) return this.getValueAtTime(((l - v) % f + l) / this.comp.globalData.frameRate, 0);
        } else if (c === "offset") {
          var F = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), C = this.getValueAtTime(h / this.comp.globalData.frameRate, 0), D = this.getValueAtTime((f - (l - v) % f + l) / this.comp.globalData.frameRate, 0), L = Math.floor((l - v) / f) + 1;
          if (this.pv.length) {
            for (E = new Array(F.length), _ = E.length, u = 0; u < _; u += 1) E[u] = D[u] - (C[u] - F[u]) * L;
            return E;
          }
          return D - (C - F) * L;
        } else if (c === "continue") {
          var V = this.getValueAtTime(l / this.comp.globalData.frameRate, 0), G = this.getValueAtTime((l + 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (E = new Array(V.length), _ = E.length, u = 0; u < _; u += 1) E[u] = V[u] + (V[u] - G[u]) * (l - v) / 1e-3;
            return E;
          }
          return V + (V - G) * (l - v) / 1e-3;
        }
        return this.getValueAtTime((f - ((l - v) % f + l)) / this.comp.globalData.frameRate, 0);
      }
      function r(c, P) {
        if (!this.k) return this.pv;
        if (c = (c || 0.4) * 0.5, P = Math.floor(P || 5), P <= 1) return this.pv;
        var y = this.comp.renderedFrame / this.comp.globalData.frameRate, v = y - c, A = y + c, l = P > 1 ? (A - v) / (P - 1) : 1, f = 0, h = 0, u;
        this.pv.length ? u = createTypedArray("float32", this.pv.length) : u = 0;
        for (var _; f < P; ) {
          if (_ = this.getValueAtTime(v + f * l), this.pv.length) for (h = 0; h < this.pv.length; h += 1) u[h] += _[h];
          else u += _;
          f += 1;
        }
        if (this.pv.length) for (h = 0; h < this.pv.length; h += 1) u[h] /= P;
        else u /= P;
        return u;
      }
      function i(c) {
        this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
        var P = this._transformCachingAtTime.v;
        if (P.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var y = this.a.getValueAtTime(c);
          P.translate(-y[0] * this.a.mult, -y[1] * this.a.mult, y[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var v = this.s.getValueAtTime(c);
          P.scale(v[0] * this.s.mult, v[1] * this.s.mult, v[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var A = this.sk.getValueAtTime(c), l = this.sa.getValueAtTime(c);
          P.skewFromAxis(-A * this.sk.mult, l * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var f = this.r.getValueAtTime(c);
          P.rotate(-f * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var h = this.rz.getValueAtTime(c), u = this.ry.getValueAtTime(c), _ = this.rx.getValueAtTime(c), E = this.or.getValueAtTime(c);
          P.rotateZ(-h * this.rz.mult).rotateY(u * this.ry.mult).rotateX(_ * this.rx.mult).rotateZ(-E[2] * this.or.mult).rotateY(E[1] * this.or.mult).rotateX(E[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var M = this.px.getValueAtTime(c), F = this.py.getValueAtTime(c);
          if (this.data.p.z) {
            var C = this.pz.getValueAtTime(c);
            P.translate(M * this.px.mult, F * this.py.mult, -C * this.pz.mult);
          } else P.translate(M * this.px.mult, F * this.py.mult, 0);
        } else {
          var D = this.p.getValueAtTime(c);
          P.translate(D[0] * this.p.mult, D[1] * this.p.mult, -D[2] * this.p.mult);
        }
        return P;
      }
      function s() {
        return this.v.clone(new Matrix());
      }
      var n = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(c, P, y) {
        var v = n(c, P, y);
        return v.dynamicProperties.length ? v.getValueAtTime = i.bind(v) : v.getValueAtTime = s.bind(v), v.setGroupProperty = expressionHelpers.setGroupProperty, v;
      };
      var a = PropertyFactory.getProp;
      PropertyFactory.getProp = function(c, P, y, v, A) {
        var l = a(c, P, y, v, A);
        l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l), l.setGroupProperty = expressionHelpers.setGroupProperty, l.loopOut = t, l.loopIn = e, l.smooth = r, l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l), l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l), l.numKeys = P.a === 1 ? P.k.length : 0, l.propertyIndex = P.ix;
        var f = 0;
        return y !== 0 && (f = createTypedArray("float32", P.a === 1 ? P.k[0].s.length : P.k.length)), l._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: f }, expressionHelpers.searchExpressions(c, P, l), l.k && A.addDynamicProperty(l), l;
      };
      function p(c) {
        return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), c *= this.elem.globalData.frameRate, c -= this.offsetTime, c !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < c ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = c, this.interpolateShape(c, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }
      var o = ShapePropertyFactory.getConstructorFunction(), m2 = ShapePropertyFactory.getKeyframedConstructorFunction();
      function b() {
      }
      b.prototype = { vertices: function(P, y) {
        this.k && this.getValue();
        var v = this.v;
        y !== void 0 && (v = this.getValueAtTime(y, 0));
        var A, l = v._length, f = v[P], h = v.v, u = createSizedArray(l);
        for (A = 0; A < l; A += 1) P === "i" || P === "o" ? u[A] = [f[A][0] - h[A][0], f[A][1] - h[A][1]] : u[A] = [f[A][0], f[A][1]];
        return u;
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
        for (var A = this._segmentsLength, l = A.lengths, f = A.totalLength * P, h = 0, u = l.length, _ = 0, E; h < u; ) {
          if (_ + l[h].addedLength > f) {
            var M = h, F = v.c && h === u - 1 ? 0 : h + 1, C = (f - _) / l[h].addedLength;
            E = bez.getPointInSegment(v.v[M], v.v[F], v.o[M], v.i[F], C, l[h]);
            break;
          } else _ += l[h].addedLength;
          h += 1;
        }
        return E || (E = v.c ? [v.v[0][0], v.v[0][1]] : [v.v[v._length - 1][0], v.v[v._length - 1][1]]), E;
      }, vectorOnPath: function(P, y, v) {
        P == 1 ? P = this.v.c : P == 0 && (P = 0.999);
        var A = this.pointOnPath(P, y), l = this.pointOnPath(P + 1e-3, y), f = l[0] - A[0], h = l[1] - A[1], u = Math.sqrt(Math.pow(f, 2) + Math.pow(h, 2));
        if (u === 0) return [0, 0];
        var _ = v === "tangent" ? [f / u, h / u] : [-h / u, f / u];
        return _;
      }, tangentOnPath: function(P, y) {
        return this.vectorOnPath(P, y, "tangent");
      }, normalOnPath: function(P, y) {
        return this.vectorOnPath(P, y, "normal");
      }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([b], o), extendPrototype([b], m2), m2.prototype.getValueAtTime = p, m2.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var x = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(c, P, y, v, A) {
        var l = x(c, P, y, v, A);
        return l.propertyIndex = P.ix, l.lock = false, y === 3 ? expressionHelpers.searchExpressions(c, P.pt, l) : y === 4 && expressionHelpers.searchExpressions(c, P.ks, l), l.k && c.addDynamicProperty(l), l;
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
        var p = createNS("g");
        for (p.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); t[0]; ) p.appendChild(t[0]);
        this.elem.layerElement.appendChild(p), this.masker = n, r.setAttribute("stroke", "#fff");
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
          var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, p = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, o = s.getTotalLength();
          n = "0 0 0 " + o * a + " ";
          var m2 = o * (p - a), b = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01, x = Math.floor(m2 / b), c;
          for (c = 0; c < x; c += 1) n += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
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
      var p = createNS("feFuncG");
      p.setAttribute("type", "table"), n.appendChild(p), this.feFuncG = p;
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
      for (var n = 0, a = 256, p, o = Math.min(t, e), m2 = Math.max(t, e), b = Array.call(null, { length: a }), x, c = 0, P = s - i, y = e - t; n <= 256; ) p = n / 256, p <= o ? x = y < 0 ? s : i : p >= m2 ? x = y < 0 ? i : s : x = i + P * Math.pow((p - t) / y, 1 / r), b[c] = x, c += 1, n += 256 / (a - 1);
      return b.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e, r = this.filterManager.effectElements;
        this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
      }
    };
    function SVGDropShadowEffect(t, e, r, i, s) {
      var n = e.container.globalData.renderConfig.filterSize, a = e.data.fs || n;
      t.setAttribute("x", a.x || n.x), t.setAttribute("y", a.y || n.y), t.setAttribute("width", a.width || n.width), t.setAttribute("height", a.height || n.height), this.filterManager = e;
      var p = createNS("feGaussianBlur");
      p.setAttribute("in", "SourceAlpha"), p.setAttribute("result", i + "_drop_shadow_1"), p.setAttribute("stdDeviation", "0"), this.feGaussianBlur = p, t.appendChild(p);
      var o = createNS("feOffset");
      o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
      var m2 = createNS("feFlood");
      m2.setAttribute("flood-color", "#00ff00"), m2.setAttribute("flood-opacity", "1"), m2.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = m2, t.appendChild(m2);
      var b = createNS("feComposite");
      b.setAttribute("in", i + "_drop_shadow_3"), b.setAttribute("in2", i + "_drop_shadow_2"), b.setAttribute("operator", "in"), b.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(b);
      var x = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
      t.appendChild(x);
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
        var p = createNS("use");
        p.setAttribute("href", "#" + e), a ? r.insertBefore(p, a) : r.appendChild(p);
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
        var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, s = e[2].p.v === 1, n = e[3].p.v, a = s ? n : e[4].p.v, p = e[5].p.v, o = e[6].p.v, m2 = e[7].p.v;
        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(a * 0.01, n * 0.01, 1), this.matrix.rotate(-m2 * degToRads), this.matrix.skewFromAxis(-p * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = true, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = true);
      }
    };
    function SVGTransformEffect(t, e) {
      this.init(e);
    }
    return extendPrototype([TransformEffect], SVGTransformEffect), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, true), registerEffect(21, SVGFillFilter, true), registerEffect(22, SVGStrokeEffect, false), registerEffect(23, SVGTritoneFilter, true), registerEffect(24, SVGProLevelsFilter, true), registerEffect(25, SVGDropShadowEffect, true), registerEffect(28, SVGMatte3Effect, false), registerEffect(29, SVGGaussianBlurEffect, true), registerEffect(35, SVGTransformEffect, false), lottie;
  });
});
var lottie_svgMJGYILXD = dt();
export {
  lottie_svgMJGYILXD as default
};
/*! Bundled license information:

@dotlottie/common/dist/lottie_svg-MJGYILXD.js:
  (*! Bundled license information:
  
  lottie-web/build/player/lottie_svg.js:
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
//# sourceMappingURL=lottie_svg-MJGYILXD-AK7I6TDB.js.map
