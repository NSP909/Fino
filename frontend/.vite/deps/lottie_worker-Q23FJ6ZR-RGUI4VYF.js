import {
  m
} from "./chunk-USPGI4ZR.js";
import "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/lottie_worker-Q23FJ6ZR.js
var dt = m((exports, module) => {
  typeof navigator < "u" && function(t, e) {
    typeof define == "function" && define.amd ? define(function() {
      return e(t);
    }) : typeof module == "object" && module.exports ? module.exports = e(t) : (t.lottie = e(t), t.bodymovin = t.lottie);
  }(self || {}, function(window) {
    function workerContent() {
      function extendPrototype(t, e) {
        var r, i = t.length, s;
        for (r = 0; r < i; r += 1) {
          s = t[r].prototype;
          for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e.prototype[n] = s[n]);
        }
      }
      function ProxyElement(t, e) {
        this._state = "init", this._isDirty = false, this._isProxy = true, this._changedStyles = [], this._changedAttributes = [], this._changedElements = [], this._textContent = null, this.type = t, this.namespace = e, this.children = [], localIdCounter += 1, this.attributes = { id: "l_d_" + localIdCounter }, this.style = new Style(this);
      }
      ProxyElement.prototype = { appendChild: function(t) {
        t.parentNode = this, this.children.push(t), this._isDirty = true, this._changedElements.push([t, this.attributes.id]);
      }, insertBefore: function(t, e) {
        for (var r = this.children, i = 0; i < r.length; i += 1) if (r[i] === e) {
          r.splice(i, 0, t), this._isDirty = true, this._changedElements.push([t, this.attributes.id, e.attributes.id]);
          return;
        }
        r.push(e);
      }, setAttribute: function(t, e) {
        this.attributes[t] = e, this._isDirty || (this._isDirty = true), this._changedAttributes.push(t);
      }, serialize: function() {
        return { type: this.type, namespace: this.namespace, style: this.style.serialize(), attributes: this.attributes, children: this.children.map(function(t) {
          return t.serialize();
        }), textContent: this._textContent };
      }, addEventListener: function(t, e) {
        setTimeout(e, 1);
      }, setAttributeNS: function(t, e, r) {
        this.attributes[e] = r, this._isDirty || (this._isDirty = true), this._changedAttributes.push(e);
      } }, Object.defineProperty(ProxyElement.prototype, "textContent", { set: function(t) {
        this._isDirty = true, this._textContent = t;
      } });
      var localIdCounter = 0, animations = {}, styleProperties = ["width", "height", "display", "transform", "opacity", "contentVisibility", "mix-blend-mode"];
      function convertArguments(t) {
        var e = [], r, i = t.length;
        for (r = 0; r < i; r += 1) e.push(t[r]);
        return e;
      }
      function Style(t) {
        this.element = t;
      }
      Style.prototype = { serialize: function() {
        for (var t = {}, e = 0; e < styleProperties.length; e += 1) {
          var r = styleProperties[e], i = "_" + r;
          i in this && (t[r] = this[i]);
        }
        return t;
      } }, styleProperties.forEach(function(t) {
        Object.defineProperty(Style.prototype, t, { set: function(e) {
          this.element._isDirty || (this.element._isDirty = true), this.element._changedStyles.push(t);
          var r = "_" + t;
          this[r] = e;
        }, get: function() {
          var e = "_" + t;
          return this[e];
        } });
      });
      function CanvasContext(t) {
        this.element = t;
      }
      CanvasContext.prototype = { createRadialGradient: function() {
        function t() {
          e.stops.push(convertArguments(arguments));
        }
        var e = { t: "rGradient", a: convertArguments(arguments), stops: [] };
        return this.element.instructions.push(e), { addColorStop: t };
      }, createLinearGradient: function() {
        function t() {
          e.stops.push(convertArguments(arguments));
        }
        var e = { t: "lGradient", a: convertArguments(arguments), stops: [] };
        return this.element.instructions.push(e), { addColorStop: t };
      } }, Object.defineProperties(CanvasContext.prototype, { canvas: { enumerable: true, get: function() {
        return this.element;
      } } });
      var canvasContextMethods = ["fillRect", "setTransform", "drawImage", "beginPath", "moveTo", "save", "restore", "fillText", "setLineDash", "clearRect", "clip", "rect", "stroke", "fill", "closePath", "bezierCurveTo", "lineTo"];
      canvasContextMethods.forEach(function(t) {
        CanvasContext.prototype[t] = function() {
          this.element.instructions.push({ t, a: convertArguments(arguments) });
        };
      });
      var canvasContextProperties = ["globalAlpha", "strokeStyle", "fillStyle", "lineCap", "lineJoin", "lineWidth", "miterLimit", "lineDashOffset", "globalCompositeOperation"];
      canvasContextProperties.forEach(function(t) {
        Object.defineProperty(CanvasContext.prototype, t, { set: function(e) {
          this.element.instructions.push({ t, a: e });
        } });
      });
      function CanvasElement(t, e) {
        ProxyElement.call(this, t, e), this.instructions = [], this.width = 0, this.height = 0, this.context = new CanvasContext(this);
      }
      CanvasElement.prototype = { getContext: function() {
        return this.context;
      }, resetInstructions: function() {
        this.instructions.length = 0;
      } }, extendPrototype([ProxyElement], CanvasElement);
      function createElement(t, e) {
        return e === "canvas" ? new CanvasElement(e, t) : new ProxyElement(e, t);
      }
      var window = self, document = { createElementNS: function(t, e) {
        return createElement(t, e);
      }, createElement: function(t) {
        return createElement("", t);
      }, getElementsByTagName: function() {
        return [];
      }, body: createElement("", "body"), _isProxy: true }, lottieInternal = function() {
        typeof navigator < "u" && function(t, e) {
          typeof exports == "object" && typeof module < "u" ? module.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = typeof globalThis < "u" ? globalThis : t || self, t.lottie = e());
        }(this, function() {
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
            var i, s, n, a, h, o, l, v;
            switch (a = Math.floor(t * 6), h = t * 6 - a, o = r * (1 - e), l = r * (1 - h * e), v = r * (1 - (1 - h) * e), a % 6) {
              case 0:
                i = r, s = v, n = o;
                break;
              case 1:
                i = l, s = r, n = o;
                break;
              case 2:
                i = o, s = r, n = v;
                break;
              case 3:
                i = o, s = l, n = r;
                break;
              case 4:
                i = v, s = o, n = r;
                break;
              case 5:
                i = r, s = o, n = l;
                break;
            }
            return [i, s, n];
          }
          function RGBtoHSV(t, e, r) {
            var i = Math.max(t, e, r), s = Math.min(t, e, r), n = i - s, a, h = i === 0 ? 0 : n / i, o = i / 255;
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
            return [a, h, o];
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
            }, postMessage: function(b) {
              r({ data: b });
            } }, n = { postMessage: function(b) {
              s.onmessage({ data: b });
            } };
            function a(p) {
              if (window.Worker && window.Blob && getWebWorker()) {
                var b = new Blob(["var _workerSelf = self; self.onmessage = ", p.toString()], { type: "text/javascript" }), g = URL.createObjectURL(b);
                return new Worker(g);
              }
              return r = p, s;
            }
            function h() {
              i || (i = a(function(b) {
                function g() {
                  function A(R, _) {
                    var M, y, P = R.length, w, k, O, z;
                    for (y = 0; y < P; y += 1) if (M = R[y], "ks" in M && !M.completed) {
                      if (M.completed = true, M.hasMask) {
                        var N = M.masksProperties;
                        for (k = N.length, w = 0; w < k; w += 1) if (N[w].pt.k.i) x(N[w].pt.k);
                        else for (z = N[w].pt.k.length, O = 0; O < z; O += 1) N[w].pt.k[O].s && x(N[w].pt.k[O].s[0]), N[w].pt.k[O].e && x(N[w].pt.k[O].e[0]);
                      }
                      M.ty === 0 ? (M.layers = f(M.refId, _), A(M.layers, _)) : M.ty === 4 ? m2(M.shapes) : M.ty === 5 && D(M);
                    }
                  }
                  function c(R, _) {
                    if (R) {
                      var M = 0, y = R.length;
                      for (M = 0; M < y; M += 1) R[M].t === 1 && (R[M].data.layers = f(R[M].data.refId, _), A(R[M].data.layers, _));
                    }
                  }
                  function u(R, _) {
                    for (var M = 0, y = _.length; M < y; ) {
                      if (_[M].id === R) return _[M];
                      M += 1;
                    }
                    return null;
                  }
                  function f(R, _) {
                    var M = u(R, _);
                    return M ? M.layers.__used ? JSON.parse(JSON.stringify(M.layers)) : (M.layers.__used = true, M.layers) : null;
                  }
                  function m2(R) {
                    var _, M = R.length, y, P;
                    for (_ = M - 1; _ >= 0; _ -= 1) if (R[_].ty === "sh") if (R[_].ks.k.i) x(R[_].ks.k);
                    else for (P = R[_].ks.k.length, y = 0; y < P; y += 1) R[_].ks.k[y].s && x(R[_].ks.k[y].s[0]), R[_].ks.k[y].e && x(R[_].ks.k[y].e[0]);
                    else R[_].ty === "gr" && m2(R[_].it);
                  }
                  function x(R) {
                    var _, M = R.i.length;
                    for (_ = 0; _ < M; _ += 1) R.i[_][0] += R.v[_][0], R.i[_][1] += R.v[_][1], R.o[_][0] += R.v[_][0], R.o[_][1] += R.v[_][1];
                  }
                  function S(R, _) {
                    var M = _ ? _.split(".") : [100, 100, 100];
                    return R[0] > M[0] ? true : M[0] > R[0] ? false : R[1] > M[1] ? true : M[1] > R[1] ? false : R[2] > M[2] ? true : M[2] > R[2] ? false : null;
                  }
                  var C = /* @__PURE__ */ function() {
                    var R = [4, 4, 14];
                    function _(y) {
                      var P = y.t.d;
                      y.t.d = { k: [{ s: P, t: 0 }] };
                    }
                    function M(y) {
                      var P, w = y.length;
                      for (P = 0; P < w; P += 1) y[P].ty === 5 && _(y[P]);
                    }
                    return function(y) {
                      if (S(R, y.v) && (M(y.layers), y.assets)) {
                        var P, w = y.assets.length;
                        for (P = 0; P < w; P += 1) y.assets[P].layers && M(y.assets[P].layers);
                      }
                    };
                  }(), T = /* @__PURE__ */ function() {
                    var R = [4, 7, 99];
                    return function(_) {
                      if (_.chars && !S(R, _.v)) {
                        var M, y = _.chars.length;
                        for (M = 0; M < y; M += 1) {
                          var P = _.chars[M];
                          P.data && P.data.shapes && (m2(P.data.shapes), P.data.ip = 0, P.data.op = 99999, P.data.st = 0, P.data.sr = 1, P.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, _.chars[M].t || (P.data.shapes.push({ ty: "no" }), P.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                        }
                      }
                    };
                  }(), F = /* @__PURE__ */ function() {
                    var R = [5, 7, 15];
                    function _(y) {
                      var P = y.t.p;
                      typeof P.a == "number" && (P.a = { a: 0, k: P.a }), typeof P.p == "number" && (P.p = { a: 0, k: P.p }), typeof P.r == "number" && (P.r = { a: 0, k: P.r });
                    }
                    function M(y) {
                      var P, w = y.length;
                      for (P = 0; P < w; P += 1) y[P].ty === 5 && _(y[P]);
                    }
                    return function(y) {
                      if (S(R, y.v) && (M(y.layers), y.assets)) {
                        var P, w = y.assets.length;
                        for (P = 0; P < w; P += 1) y.assets[P].layers && M(y.assets[P].layers);
                      }
                    };
                  }(), V = /* @__PURE__ */ function() {
                    var R = [4, 1, 9];
                    function _(y) {
                      var P, w = y.length, k, O;
                      for (P = 0; P < w; P += 1) if (y[P].ty === "gr") _(y[P].it);
                      else if (y[P].ty === "fl" || y[P].ty === "st") if (y[P].c.k && y[P].c.k[0].i) for (O = y[P].c.k.length, k = 0; k < O; k += 1) y[P].c.k[k].s && (y[P].c.k[k].s[0] /= 255, y[P].c.k[k].s[1] /= 255, y[P].c.k[k].s[2] /= 255, y[P].c.k[k].s[3] /= 255), y[P].c.k[k].e && (y[P].c.k[k].e[0] /= 255, y[P].c.k[k].e[1] /= 255, y[P].c.k[k].e[2] /= 255, y[P].c.k[k].e[3] /= 255);
                      else y[P].c.k[0] /= 255, y[P].c.k[1] /= 255, y[P].c.k[2] /= 255, y[P].c.k[3] /= 255;
                    }
                    function M(y) {
                      var P, w = y.length;
                      for (P = 0; P < w; P += 1) y[P].ty === 4 && _(y[P].shapes);
                    }
                    return function(y) {
                      if (S(R, y.v) && (M(y.layers), y.assets)) {
                        var P, w = y.assets.length;
                        for (P = 0; P < w; P += 1) y.assets[P].layers && M(y.assets[P].layers);
                      }
                    };
                  }(), L = /* @__PURE__ */ function() {
                    var R = [4, 4, 18];
                    function _(y) {
                      var P, w = y.length, k, O;
                      for (P = w - 1; P >= 0; P -= 1) if (y[P].ty === "sh") if (y[P].ks.k.i) y[P].ks.k.c = y[P].closed;
                      else for (O = y[P].ks.k.length, k = 0; k < O; k += 1) y[P].ks.k[k].s && (y[P].ks.k[k].s[0].c = y[P].closed), y[P].ks.k[k].e && (y[P].ks.k[k].e[0].c = y[P].closed);
                      else y[P].ty === "gr" && _(y[P].it);
                    }
                    function M(y) {
                      var P, w, k = y.length, O, z, N, H;
                      for (w = 0; w < k; w += 1) {
                        if (P = y[w], P.hasMask) {
                          var j = P.masksProperties;
                          for (z = j.length, O = 0; O < z; O += 1) if (j[O].pt.k.i) j[O].pt.k.c = j[O].cl;
                          else for (H = j[O].pt.k.length, N = 0; N < H; N += 1) j[O].pt.k[N].s && (j[O].pt.k[N].s[0].c = j[O].cl), j[O].pt.k[N].e && (j[O].pt.k[N].e[0].c = j[O].cl);
                        }
                        P.ty === 4 && _(P.shapes);
                      }
                    }
                    return function(y) {
                      if (S(R, y.v) && (M(y.layers), y.assets)) {
                        var P, w = y.assets.length;
                        for (P = 0; P < w; P += 1) y.assets[P].layers && M(y.assets[P].layers);
                      }
                    };
                  }();
                  function I(R) {
                    R.__complete || (V(R), C(R), T(R), F(R), L(R), A(R.layers, R.assets), c(R.chars, R.assets), R.__complete = true);
                  }
                  function D(R) {
                    R.t.a.length === 0 && "m" in R.t.p;
                  }
                  var B = {};
                  return B.completeData = I, B.checkColors = V, B.checkChars = T, B.checkPathProperties = F, B.checkShapes = L, B.completeLayers = A, B;
                }
                if (n.dataManager || (n.dataManager = g()), n.assetLoader || (n.assetLoader = /* @__PURE__ */ function() {
                  function A(u) {
                    var f = u.getResponseHeader("content-type");
                    return f && u.responseType === "json" && f.indexOf("json") !== -1 || u.response && _typeof$5(u.response) === "object" ? u.response : u.response && typeof u.response == "string" ? JSON.parse(u.response) : u.responseText ? JSON.parse(u.responseText) : null;
                  }
                  function c(u, f, m2, x) {
                    var S, C = new XMLHttpRequest();
                    try {
                      C.responseType = "json";
                    } catch {
                    }
                    C.onreadystatechange = function() {
                      if (C.readyState === 4) if (C.status === 200) S = A(C), m2(S);
                      else try {
                        S = A(C), m2(S);
                      } catch (T) {
                        x && x(T);
                      }
                    };
                    try {
                      C.open(["G", "E", "T"].join(""), u, true);
                    } catch {
                      C.open(["G", "E", "T"].join(""), f + "/" + u, true);
                    }
                    C.send();
                  }
                  return { load: c };
                }()), b.data.type === "loadAnimation") n.assetLoader.load(b.data.path, b.data.fullPath, function(A) {
                  n.dataManager.completeData(A), n.postMessage({ id: b.data.id, payload: A, status: "success" });
                }, function() {
                  n.postMessage({ id: b.data.id, status: "error" });
                });
                else if (b.data.type === "complete") {
                  var d = b.data.animation;
                  n.dataManager.completeData(d), n.postMessage({ id: b.data.id, payload: d, status: "success" });
                } else b.data.type === "loadData" && n.assetLoader.load(b.data.path, b.data.fullPath, function(A) {
                  n.postMessage({ id: b.data.id, payload: A, status: "success" });
                }, function() {
                  n.postMessage({ id: b.data.id, status: "error" });
                });
              }), i.onmessage = function(p) {
                var b = p.data, g = b.id, d = e[g];
                e[g] = null, b.status === "success" ? d.onComplete(b.payload) : d.onError && d.onError();
              });
            }
            function o(p, b) {
              t += 1;
              var g = "processId_" + t;
              return e[g] = { onComplete: p, onError: b }, g;
            }
            function l(p, b, g) {
              h();
              var d = o(b, g);
              i.postMessage({ type: "loadAnimation", path: p, fullPath: window.location.origin + window.location.pathname, id: d });
            }
            function v(p, b, g) {
              h();
              var d = o(b, g);
              i.postMessage({ type: "loadData", path: p, fullPath: window.location.origin + window.location.pathname, id: d });
            }
            function E(p, b, g) {
              h();
              var d = o(b, g);
              i.postMessage({ type: "complete", animation: p, id: d });
            }
            return { loadAnimation: l, loadData: v, completeAnimation: E };
          }(), ImagePreloader = function() {
            var t = function() {
              var c = createTag("canvas");
              c.width = 1, c.height = 1;
              var u = c.getContext("2d");
              return u.fillStyle = "rgba(0,0,0,0)", u.fillRect(0, 0, 1, 1), c;
            }();
            function e() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function r() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
            }
            function i(c, u, f) {
              var m2 = "";
              if (c.e) m2 = c.p;
              else if (u) {
                var x = c.p;
                x.indexOf("images/") !== -1 && (x = x.split("/")[1]), m2 = u + x;
              } else m2 = f, m2 += c.u ? c.u : "", m2 += c.p;
              return m2;
            }
            function s(c) {
              var u = 0, f = setInterval((function() {
                var m2 = c.getBBox();
                (m2.width || u > 500) && (this._imageLoaded(), clearInterval(f)), u += 1;
              }).bind(this), 50);
            }
            function n(c) {
              var u = i(c, this.assetsPath, this.path), f = createNS("image");
              isSafari ? this.testImageLoaded(f) : f.addEventListener("load", this._imageLoaded, false), f.addEventListener("error", (function() {
                m2.img = t, this._imageLoaded();
              }).bind(this), false), f.setAttributeNS("http://www.w3.org/1999/xlink", "href", u), this._elementHelper.append ? this._elementHelper.append(f) : this._elementHelper.appendChild(f);
              var m2 = { img: f, assetData: c };
              return m2;
            }
            function a(c) {
              var u = i(c, this.assetsPath, this.path), f = createTag("img");
              f.crossOrigin = "anonymous", f.addEventListener("load", this._imageLoaded, false), f.addEventListener("error", (function() {
                m2.img = t, this._imageLoaded();
              }).bind(this), false), f.src = u;
              var m2 = { img: f, assetData: c };
              return m2;
            }
            function h(c) {
              var u = { assetData: c }, f = i(c, this.assetsPath, this.path);
              return dataManager.loadData(f, (function(m2) {
                u.img = m2, this._footageLoaded();
              }).bind(this), (function() {
                u.img = {}, this._footageLoaded();
              }).bind(this)), u;
            }
            function o(c, u) {
              this.imagesLoadedCb = u;
              var f, m2 = c.length;
              for (f = 0; f < m2; f += 1) c[f].layers || (!c[f].t || c[f].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(c[f]))) : c[f].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(c[f]))));
            }
            function l(c) {
              this.path = c || "";
            }
            function v(c) {
              this.assetsPath = c || "";
            }
            function E(c) {
              for (var u = 0, f = this.images.length; u < f; ) {
                if (this.images[u].assetData === c) return this.images[u].img;
                u += 1;
              }
              return null;
            }
            function p() {
              this.imagesLoadedCb = null, this.images.length = 0;
            }
            function b() {
              return this.totalImages === this.loadedAssets;
            }
            function g() {
              return this.totalFootages === this.loadedFootagesCount;
            }
            function d(c, u) {
              c === "svg" ? (this._elementHelper = u, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
            }
            function A() {
              this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = h.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
            }
            return A.prototype = { loadAssets: o, setAssetsPath: v, setPath: l, loadedImages: b, loadedFootages: g, destroy: p, getAsset: E, createImgData: a, createImageData: n, imageLoaded: e, footageLoaded: r, setCacheType: d }, A;
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
            function h(_) {
              for (var M = 0, y = _.target; M < i; ) e[M].animation === y && (e.splice(M, 1), M -= 1, i -= 1, y.isPaused || E()), M += 1;
            }
            function o(_, M) {
              if (!_) return null;
              for (var y = 0; y < i; ) {
                if (e[y].elem === _ && e[y].elem !== null) return e[y].animation;
                y += 1;
              }
              var P = new AnimationItem();
              return p(P, _), P.setData(_, M), P;
            }
            function l() {
              var _, M = e.length, y = [];
              for (_ = 0; _ < M; _ += 1) y.push(e[_].animation);
              return y;
            }
            function v() {
              s += 1, V();
            }
            function E() {
              s -= 1;
            }
            function p(_, M) {
              _.addEventListener("destroy", h), _.addEventListener("_active", v), _.addEventListener("_idle", E), e.push({ elem: M, animation: _ }), i += 1;
            }
            function b(_) {
              var M = new AnimationItem();
              return p(M, null), M.setParams(_), M;
            }
            function g(_, M) {
              var y;
              for (y = 0; y < i; y += 1) e[y].animation.setSpeed(_, M);
            }
            function d(_, M) {
              var y;
              for (y = 0; y < i; y += 1) e[y].animation.setDirection(_, M);
            }
            function A(_) {
              var M;
              for (M = 0; M < i; M += 1) e[M].animation.play(_);
            }
            function c(_) {
              var M = _ - r, y;
              for (y = 0; y < i; y += 1) e[y].animation.advanceTime(M);
              r = _, s && !a ? window.requestAnimationFrame(c) : n = true;
            }
            function u(_) {
              r = _, window.requestAnimationFrame(c);
            }
            function f(_) {
              var M;
              for (M = 0; M < i; M += 1) e[M].animation.pause(_);
            }
            function m2(_, M, y) {
              var P;
              for (P = 0; P < i; P += 1) e[P].animation.goToAndStop(_, M, y);
            }
            function x(_) {
              var M;
              for (M = 0; M < i; M += 1) e[M].animation.stop(_);
            }
            function S(_) {
              var M;
              for (M = 0; M < i; M += 1) e[M].animation.togglePause(_);
            }
            function C(_) {
              var M;
              for (M = i - 1; M >= 0; M -= 1) e[M].animation.destroy(_);
            }
            function T(_, M, y) {
              var P = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), w, k = P.length;
              for (w = 0; w < k; w += 1) y && P[w].setAttribute("data-bm-type", y), o(P[w], _);
              if (M && k === 0) {
                y || (y = "svg");
                var O = document.getElementsByTagName("body")[0];
                O.innerText = "";
                var z = createTag("div");
                z.style.width = "100%", z.style.height = "100%", z.setAttribute("data-bm-type", y), O.appendChild(z), o(z, _);
              }
            }
            function F() {
              var _;
              for (_ = 0; _ < i; _ += 1) e[_].animation.resize();
            }
            function V() {
              !a && s && n && (window.requestAnimationFrame(u), n = false);
            }
            function L() {
              a = true;
            }
            function I() {
              a = false, V();
            }
            function D(_, M) {
              var y;
              for (y = 0; y < i; y += 1) e[y].animation.setVolume(_, M);
            }
            function B(_) {
              var M;
              for (M = 0; M < i; M += 1) e[M].animation.mute(_);
            }
            function R(_) {
              var M;
              for (M = 0; M < i; M += 1) e[M].animation.unmute(_);
            }
            return t.registerAnimation = o, t.loadAnimation = b, t.setSpeed = g, t.setDirection = d, t.play = A, t.pause = f, t.stop = x, t.togglePause = S, t.searchAnimations = T, t.resize = F, t.goToAndStop = m2, t.destroy = C, t.freeze = L, t.unfreeze = I, t.setVolume = D, t.mute = B, t.unmute = R, t.getRegisteredAnimations = l, t;
          }(), BezierFactory = function() {
            var t = {};
            t.getBezierEasing = r;
            var e = {};
            function r(u, f, m2, x, S) {
              var C = S || ("bez_" + u + "_" + f + "_" + m2 + "_" + x).replace(/\./g, "p");
              if (e[C]) return e[C];
              var T = new c([u, f, m2, x]);
              return e[C] = T, T;
            }
            var i = 4, s = 1e-3, n = 1e-7, a = 10, h = 11, o = 1 / (h - 1), l = typeof Float32Array == "function";
            function v(u, f) {
              return 1 - 3 * f + 3 * u;
            }
            function E(u, f) {
              return 3 * f - 6 * u;
            }
            function p(u) {
              return 3 * u;
            }
            function b(u, f, m2) {
              return ((v(f, m2) * u + E(f, m2)) * u + p(f)) * u;
            }
            function g(u, f, m2) {
              return 3 * v(f, m2) * u * u + 2 * E(f, m2) * u + p(f);
            }
            function d(u, f, m2, x, S) {
              var C, T, F = 0;
              do
                T = f + (m2 - f) / 2, C = b(T, x, S) - u, C > 0 ? m2 = T : f = T;
              while (Math.abs(C) > n && ++F < a);
              return T;
            }
            function A(u, f, m2, x) {
              for (var S = 0; S < i; ++S) {
                var C = g(f, m2, x);
                if (C === 0) return f;
                var T = b(f, m2, x) - u;
                f -= T / C;
              }
              return f;
            }
            function c(u) {
              this._p = u, this._mSampleValues = l ? new Float32Array(h) : new Array(h), this._precomputed = false, this.get = this.get.bind(this);
            }
            return c.prototype = { get: function(f) {
              var m2 = this._p[0], x = this._p[1], S = this._p[2], C = this._p[3];
              return this._precomputed || this._precompute(), m2 === x && S === C ? f : f === 0 ? 0 : f === 1 ? 1 : b(this._getTForX(f), x, C);
            }, _precompute: function() {
              var f = this._p[0], m2 = this._p[1], x = this._p[2], S = this._p[3];
              this._precomputed = true, (f !== m2 || x !== S) && this._calcSampleValues();
            }, _calcSampleValues: function() {
              for (var f = this._p[0], m2 = this._p[2], x = 0; x < h; ++x) this._mSampleValues[x] = b(x * o, f, m2);
            }, _getTForX: function(f) {
              for (var m2 = this._p[0], x = this._p[2], S = this._mSampleValues, C = 0, T = 1, F = h - 1; T !== F && S[T] <= f; ++T) C += o;
              --T;
              var V = (f - S[T]) / (S[T + 1] - S[T]), L = C + V * o, I = g(L, m2, x);
              return I >= s ? A(f, L, m2, x) : I === 0 ? L : d(f, C, C + o, m2, x);
            } }, t;
          }(), pooling = /* @__PURE__ */ function() {
            function t(e) {
              return e.concat(createSizedArray(e.length));
            }
            return { double: t };
          }(), poolFactory = /* @__PURE__ */ function() {
            return function(t, e, r) {
              var i = 0, s = t, n = createSizedArray(s), a = { newElement: h, release: o };
              function h() {
                var l;
                return i ? (i -= 1, l = n[i]) : l = e(), l;
              }
              function o(l) {
                i === s && (n = pooling.double(n), s *= 2), r && r(l), n[i] = l, i += 1;
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
            function e(p, b, g, d, A, c) {
              var u = p * d + b * A + g * c - A * d - c * p - g * b;
              return u > -1e-3 && u < 1e-3;
            }
            function r(p, b, g, d, A, c, u, f, m2) {
              if (g === 0 && c === 0 && m2 === 0) return e(p, b, d, A, u, f);
              var x = t.sqrt(t.pow(d - p, 2) + t.pow(A - b, 2) + t.pow(c - g, 2)), S = t.sqrt(t.pow(u - p, 2) + t.pow(f - b, 2) + t.pow(m2 - g, 2)), C = t.sqrt(t.pow(u - d, 2) + t.pow(f - A, 2) + t.pow(m2 - c, 2)), T;
              return x > S ? x > C ? T = x - S - C : T = C - S - x : C > S ? T = C - S - x : T = S - x - C, T > -1e-4 && T < 1e-4;
            }
            var i = /* @__PURE__ */ function() {
              return function(p, b, g, d) {
                var A = getDefaultCurveSegments(), c, u, f, m2, x, S = 0, C, T = [], F = [], V = bezierLengthPool.newElement();
                for (f = g.length, c = 0; c < A; c += 1) {
                  for (x = c / (A - 1), C = 0, u = 0; u < f; u += 1) m2 = bmPow(1 - x, 3) * p[u] + 3 * bmPow(1 - x, 2) * x * g[u] + 3 * (1 - x) * bmPow(x, 2) * d[u] + bmPow(x, 3) * b[u], T[u] = m2, F[u] !== null && (C += bmPow(T[u] - F[u], 2)), F[u] = T[u];
                  C && (C = bmSqrt(C), S += C), V.percents[c] = x, V.lengths[c] = S;
                }
                return V.addedLength = S, V;
              };
            }();
            function s(p) {
              var b = segmentsLengthPool.newElement(), g = p.c, d = p.v, A = p.o, c = p.i, u, f = p._length, m2 = b.lengths, x = 0;
              for (u = 0; u < f - 1; u += 1) m2[u] = i(d[u], d[u + 1], A[u], c[u + 1]), x += m2[u].addedLength;
              return g && f && (m2[u] = i(d[u], d[0], A[u], c[0]), x += m2[u].addedLength), b.totalLength = x, b;
            }
            function n(p) {
              this.segmentLength = 0, this.points = new Array(p);
            }
            function a(p, b) {
              this.partialLength = p, this.point = b;
            }
            var h = /* @__PURE__ */ function() {
              var p = {};
              return function(b, g, d, A) {
                var c = (b[0] + "_" + b[1] + "_" + g[0] + "_" + g[1] + "_" + d[0] + "_" + d[1] + "_" + A[0] + "_" + A[1]).replace(/\./g, "p");
                if (!p[c]) {
                  var u = getDefaultCurveSegments(), f, m2, x, S, C, T = 0, F, V, L = null;
                  b.length === 2 && (b[0] !== g[0] || b[1] !== g[1]) && e(b[0], b[1], g[0], g[1], b[0] + d[0], b[1] + d[1]) && e(b[0], b[1], g[0], g[1], g[0] + A[0], g[1] + A[1]) && (u = 2);
                  var I = new n(u);
                  for (x = d.length, f = 0; f < u; f += 1) {
                    for (V = createSizedArray(x), C = f / (u - 1), F = 0, m2 = 0; m2 < x; m2 += 1) S = bmPow(1 - C, 3) * b[m2] + 3 * bmPow(1 - C, 2) * C * (b[m2] + d[m2]) + 3 * (1 - C) * bmPow(C, 2) * (g[m2] + A[m2]) + bmPow(C, 3) * g[m2], V[m2] = S, L !== null && (F += bmPow(V[m2] - L[m2], 2));
                    F = bmSqrt(F), T += F, I.points[f] = new a(F, V), L = V;
                  }
                  I.segmentLength = T, p[c] = I;
                }
                return p[c];
              };
            }();
            function o(p, b) {
              var g = b.percents, d = b.lengths, A = g.length, c = bmFloor((A - 1) * p), u = p * b.addedLength, f = 0;
              if (c === A - 1 || c === 0 || u === d[c]) return g[c];
              for (var m2 = d[c] > u ? -1 : 1, x = true; x; ) if (d[c] <= u && d[c + 1] > u ? (f = (u - d[c]) / (d[c + 1] - d[c]), x = false) : c += m2, c < 0 || c >= A - 1) {
                if (c === A - 1) return g[c];
                x = false;
              }
              return g[c] + (g[c + 1] - g[c]) * f;
            }
            function l(p, b, g, d, A, c) {
              var u = o(A, c), f = 1 - u, m2 = t.round((f * f * f * p[0] + (u * f * f + f * u * f + f * f * u) * g[0] + (u * u * f + f * u * u + u * f * u) * d[0] + u * u * u * b[0]) * 1e3) / 1e3, x = t.round((f * f * f * p[1] + (u * f * f + f * u * f + f * f * u) * g[1] + (u * u * f + f * u * u + u * f * u) * d[1] + u * u * u * b[1]) * 1e3) / 1e3;
              return [m2, x];
            }
            var v = createTypedArray("float32", 8);
            function E(p, b, g, d, A, c, u) {
              A < 0 ? A = 0 : A > 1 && (A = 1);
              var f = o(A, u);
              c = c > 1 ? 1 : c;
              var m2 = o(c, u), x, S = p.length, C = 1 - f, T = 1 - m2, F = C * C * C, V = f * C * C * 3, L = f * f * C * 3, I = f * f * f, D = C * C * T, B = f * C * T + C * f * T + C * C * m2, R = f * f * T + C * f * m2 + f * C * m2, _ = f * f * m2, M = C * T * T, y = f * T * T + C * m2 * T + C * T * m2, P = f * m2 * T + C * m2 * m2 + f * T * m2, w = f * m2 * m2, k = T * T * T, O = m2 * T * T + T * m2 * T + T * T * m2, z = m2 * m2 * T + T * m2 * m2 + m2 * T * m2, N = m2 * m2 * m2;
              for (x = 0; x < S; x += 1) v[x * 4] = t.round((F * p[x] + V * g[x] + L * d[x] + I * b[x]) * 1e3) / 1e3, v[x * 4 + 1] = t.round((D * p[x] + B * g[x] + R * d[x] + _ * b[x]) * 1e3) / 1e3, v[x * 4 + 2] = t.round((M * p[x] + y * g[x] + P * d[x] + w * b[x]) * 1e3) / 1e3, v[x * 4 + 3] = t.round((k * p[x] + O * g[x] + z * d[x] + N * b[x]) * 1e3) / 1e3;
              return v;
            }
            return { getSegmentsLength: s, getNewSegment: E, getPointInSegment: l, buildBezierData: h, pointOnLine2D: e, pointOnLine3D: r };
          }
          var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
          function interpolateValue(t, e) {
            var r = this.offsetTime, i;
            this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
            for (var s = e.lastIndex, n = s, a = this.keyframes.length - 1, h = true, o, l, v; h; ) {
              if (o = this.keyframes[n], l = this.keyframes[n + 1], n === a - 1 && t >= l.t - r) {
                o.h && (o = l), s = 0;
                break;
              }
              if (l.t - r > t) {
                s = n;
                break;
              }
              n < a - 1 ? n += 1 : (s = 0, h = false);
            }
            v = this.keyframesMetadata[n] || {};
            var E, p, b, g, d, A, c = l.t - r, u = o.t - r, f;
            if (o.to) {
              v.bezierData || (v.bezierData = bez.buildBezierData(o.s, l.s || o.e, o.to, o.ti));
              var m2 = v.bezierData;
              if (t >= c || t < u) {
                var x = t >= c ? m2.points.length - 1 : 0;
                for (p = m2.points[x].point.length, E = 0; E < p; E += 1) i[E] = m2.points[x].point[E];
              } else {
                v.__fnct ? A = v.__fnct : (A = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, v.__fnct = A), b = A((t - u) / (c - u));
                var S = m2.segmentLength * b, C, T = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastAddedLength : 0;
                for (d = e.lastFrame < t && e._lastKeyframeIndex === n ? e._lastPoint : 0, h = true, g = m2.points.length; h; ) {
                  if (T += m2.points[d].partialLength, S === 0 || b === 0 || d === m2.points.length - 1) {
                    for (p = m2.points[d].point.length, E = 0; E < p; E += 1) i[E] = m2.points[d].point[E];
                    break;
                  } else if (S >= T && S < T + m2.points[d + 1].partialLength) {
                    for (C = (S - T) / m2.points[d + 1].partialLength, p = m2.points[d].point.length, E = 0; E < p; E += 1) i[E] = m2.points[d].point[E] + (m2.points[d + 1].point[E] - m2.points[d].point[E]) * C;
                    break;
                  }
                  d < g - 1 ? d += 1 : h = false;
                }
                e._lastPoint = d, e._lastAddedLength = T - m2.points[d].partialLength, e._lastKeyframeIndex = n;
              }
            } else {
              var F, V, L, I, D;
              if (a = o.s.length, f = l.s || o.e, this.sh && o.h !== 1) if (t >= c) i[0] = f[0], i[1] = f[1], i[2] = f[2];
              else if (t <= u) i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
              else {
                var B = createQuaternion(o.s), R = createQuaternion(f), _ = (t - u) / (c - u);
                quaternionToEuler(i, slerp(B, R, _));
              }
              else for (n = 0; n < a; n += 1) o.h !== 1 && (t >= c ? b = 1 : t < u ? b = 0 : (o.o.x.constructor === Array ? (v.__fnct || (v.__fnct = []), v.__fnct[n] ? A = v.__fnct[n] : (F = o.o.x[n] === void 0 ? o.o.x[0] : o.o.x[n], V = o.o.y[n] === void 0 ? o.o.y[0] : o.o.y[n], L = o.i.x[n] === void 0 ? o.i.x[0] : o.i.x[n], I = o.i.y[n] === void 0 ? o.i.y[0] : o.i.y[n], A = BezierFactory.getBezierEasing(F, V, L, I).get, v.__fnct[n] = A)) : v.__fnct ? A = v.__fnct : (F = o.o.x, V = o.o.y, L = o.i.x, I = o.i.y, A = BezierFactory.getBezierEasing(F, V, L, I).get, o.keyframeMetadata = A), b = A((t - u) / (c - u)))), f = l.s || o.e, D = o.h === 1 ? o.s[n] : o.s[n] + (f[n] - o.s[n]) * b, this.propType === "multidimensional" ? i[n] = D : i = D;
            }
            return e.lastIndex = s, i;
          }
          function slerp(t, e, r) {
            var i = [], s = t[0], n = t[1], a = t[2], h = t[3], o = e[0], l = e[1], v = e[2], E = e[3], p, b, g, d, A;
            return b = s * o + n * l + a * v + h * E, b < 0 && (b = -b, o = -o, l = -l, v = -v, E = -E), 1 - b > 1e-6 ? (p = Math.acos(b), g = Math.sin(p), d = Math.sin((1 - r) * p) / g, A = Math.sin(r * p) / g) : (d = 1 - r, A = r), i[0] = d * s + A * o, i[1] = d * n + A * l, i[2] = d * a + A * v, i[3] = d * h + A * E, i;
          }
          function quaternionToEuler(t, e) {
            var r = e[0], i = e[1], s = e[2], n = e[3], a = Math.atan2(2 * i * n - 2 * r * s, 1 - 2 * i * i - 2 * s * s), h = Math.asin(2 * r * i + 2 * s * n), o = Math.atan2(2 * r * n - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
            t[0] = a / degToRads, t[1] = h / degToRads, t[2] = o / degToRads;
          }
          function createQuaternion(t) {
            var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2), n = Math.cos(r / 2), a = Math.cos(i / 2), h = Math.sin(e / 2), o = Math.sin(r / 2), l = Math.sin(i / 2), v = s * n * a - h * o * l, E = h * o * a + s * n * l, p = h * n * a + s * o * l, b = s * o * a - h * n * l;
            return [E, p, b, v];
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
            var s, n = e.k.length, a, h, o, l;
            for (s = 0; s < n - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, h = e.k[s + 1].s, o = e.k[s].to, l = e.k[s].ti, (a.length === 2 && !(a[0] === h[0] && a[1] === h[1]) && bez.pointOnLine2D(a[0], a[1], h[0], h[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], h[0], h[1], h[0] + l[0], h[1] + l[1]) || a.length === 3 && !(a[0] === h[0] && a[1] === h[1] && a[2] === h[2]) && bez.pointOnLine3D(a[0], a[1], a[2], h[0], h[1], h[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], h[0], h[1], h[2], h[0] + l[0], h[1] + l[1], h[2] + l[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === h[0] && a[1] === h[1] && o[0] === 0 && o[1] === 0 && l[0] === 0 && l[1] === 0 && (a.length === 2 || a[2] === h[2] && o[2] === 0 && l[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
            this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
            var v = e.k[0].s.length;
            for (this.v = createTypedArray("float32", v), this.pv = createTypedArray("float32", v), s = 0; s < v; s += 1) this.v[s] = initFrame, this.pv[s] = initFrame;
            this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", v) }, this.addEffect = addEffect;
          }
          var PropertyFactory = /* @__PURE__ */ function() {
            function t(r, i, s, n, a) {
              i.sid && (i = r.globalData.slotManager.getProp(i));
              var h;
              if (!i.k.length) h = new ValueProperty(r, i, n, a);
              else if (typeof i.k[0] == "number") h = new MultiDimensionalProperty(r, i, n, a);
              else switch (s) {
                case 0:
                  h = new KeyframedValueProperty(r, i, n, a);
                  break;
                case 1:
                  h = new KeyframedMultidimensionalProperty(r, i, n, a);
                  break;
              }
              return h.effectsSequence.length && a.addDynamicProperty(h), h;
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
          }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, n, a, h) {
            this.setXYAt(t, e, "v", a, h), this.setXYAt(r, i, "o", a, h), this.setXYAt(s, n, "i", a, h);
          }, ShapePath.prototype.reverse = function() {
            var t = new ShapePath();
            t.setPathData(this.c, this._length);
            var e = this.v, r = this.o, i = this.i, s = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, false), s = 1);
            var n = this._length - 1, a = this._length, h;
            for (h = s; h < a; h += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], h, false), n -= 1;
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
              var n = i.newElement(), a, h = s._length === void 0 ? s.v.length : s._length;
              for (n.setLength(h), n.c = s.c, a = 0; a < h; a += 1) n.setTripleAt(s.v[a][0], s.v[a][1], s.o[a][0], s.o[a][1], s.i[a][0], s.i[a][1], a);
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
              var h, o = a._length;
              for (h = 0; h < o; h += 1) shapePool.release(a.shapes[h]);
              a._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = a, e += 1;
            }
            return t;
          }(), ShapePropertyFactory = function() {
            var t = -999999;
            function e(c, u, f) {
              var m2 = f.lastIndex, x, S, C, T, F, V, L, I, D, B = this.keyframes;
              if (c < B[0].t - this.offsetTime) x = B[0].s[0], C = true, m2 = 0;
              else if (c >= B[B.length - 1].t - this.offsetTime) x = B[B.length - 1].s ? B[B.length - 1].s[0] : B[B.length - 2].e[0], C = true;
              else {
                for (var R = m2, _ = B.length - 1, M = true, y, P, w; M && (y = B[R], P = B[R + 1], !(P.t - this.offsetTime > c)); ) R < _ - 1 ? R += 1 : M = false;
                if (w = this.keyframesMetadata[R] || {}, C = y.h === 1, m2 = R, !C) {
                  if (c >= P.t - this.offsetTime) I = 1;
                  else if (c < y.t - this.offsetTime) I = 0;
                  else {
                    var k;
                    w.__fnct ? k = w.__fnct : (k = BezierFactory.getBezierEasing(y.o.x, y.o.y, y.i.x, y.i.y).get, w.__fnct = k), I = k((c - (y.t - this.offsetTime)) / (P.t - this.offsetTime - (y.t - this.offsetTime)));
                  }
                  S = P.s ? P.s[0] : y.e[0];
                }
                x = y.s[0];
              }
              for (V = u._length, L = x.i[0].length, f.lastIndex = m2, T = 0; T < V; T += 1) for (F = 0; F < L; F += 1) D = C ? x.i[T][F] : x.i[T][F] + (S.i[T][F] - x.i[T][F]) * I, u.i[T][F] = D, D = C ? x.o[T][F] : x.o[T][F] + (S.o[T][F] - x.o[T][F]) * I, u.o[T][F] = D, D = C ? x.v[T][F] : x.v[T][F] + (S.v[T][F] - x.v[T][F]) * I, u.v[T][F] = D;
            }
            function r() {
              var c = this.comp.renderedFrame - this.offsetTime, u = this.keyframes[0].t - this.offsetTime, f = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, m2 = this._caching.lastFrame;
              return m2 !== t && (m2 < u && c < u || m2 > f && c > f) || (this._caching.lastIndex = m2 < c ? this._caching.lastIndex : 0, this.interpolateShape(c, this.pv, this._caching)), this._caching.lastFrame = c, this.pv;
            }
            function i() {
              this.paths = this.localShapeCollection;
            }
            function s(c, u) {
              if (c._length !== u._length || c.c !== u.c) return false;
              var f, m2 = c._length;
              for (f = 0; f < m2; f += 1) if (c.v[f][0] !== u.v[f][0] || c.v[f][1] !== u.v[f][1] || c.o[f][0] !== u.o[f][0] || c.o[f][1] !== u.o[f][1] || c.i[f][0] !== u.i[f][0] || c.i[f][1] !== u.i[f][1]) return false;
              return true;
            }
            function n(c) {
              s(this.v, c) || (this.v = shapePool.clone(c), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
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
                var c;
                this.kf ? c = this.pv : this.data.ks ? c = this.data.ks.k : c = this.data.pt.k;
                var u, f = this.effectsSequence.length;
                for (u = 0; u < f; u += 1) c = this.effectsSequence[u](c);
                this.setVValue(c), this.lock = false, this.frameId = this.elem.globalData.frameId;
              }
            }
            function h(c, u, f) {
              this.propType = "shape", this.comp = c.comp, this.container = c, this.elem = c, this.data = u, this.k = false, this.kf = false, this._mdf = false;
              var m2 = f === 3 ? u.pt.k : u.ks.k;
              this.v = shapePool.clone(m2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
            }
            function o(c) {
              this.effectsSequence.push(c), this.container.addDynamicProperty(this);
            }
            h.prototype.interpolateShape = e, h.prototype.getValue = a, h.prototype.setVValue = n, h.prototype.addEffect = o;
            function l(c, u, f) {
              this.propType = "shape", this.comp = c.comp, this.elem = c, this.container = c, this.offsetTime = c.data.st, this.keyframes = f === 3 ? u.pt.k : u.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
              var m2 = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, m2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [r.bind(this)];
            }
            l.prototype.getValue = a, l.prototype.interpolateShape = e, l.prototype.setVValue = n, l.prototype.addEffect = o;
            var v = function() {
              var c = roundCorner;
              function u(f, m2) {
                this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = m2.d, this.elem = f, this.comp = f.comp, this.frameId = -1, this.initDynamicPropertyContainer(f), this.p = PropertyFactory.getProp(f, m2.p, 1, 0, this), this.s = PropertyFactory.getProp(f, m2.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
              }
              return u.prototype = { reset: i, getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
              }, convertEllToPath: function() {
                var m2 = this.p.v[0], x = this.p.v[1], S = this.s.v[0] / 2, C = this.s.v[1] / 2, T = this.d !== 3, F = this.v;
                F.v[0][0] = m2, F.v[0][1] = x - C, F.v[1][0] = T ? m2 + S : m2 - S, F.v[1][1] = x, F.v[2][0] = m2, F.v[2][1] = x + C, F.v[3][0] = T ? m2 - S : m2 + S, F.v[3][1] = x, F.i[0][0] = T ? m2 - S * c : m2 + S * c, F.i[0][1] = x - C, F.i[1][0] = T ? m2 + S : m2 - S, F.i[1][1] = x - C * c, F.i[2][0] = T ? m2 + S * c : m2 - S * c, F.i[2][1] = x + C, F.i[3][0] = T ? m2 - S : m2 + S, F.i[3][1] = x + C * c, F.o[0][0] = T ? m2 + S * c : m2 - S * c, F.o[0][1] = x - C, F.o[1][0] = T ? m2 + S : m2 - S, F.o[1][1] = x + C * c, F.o[2][0] = T ? m2 - S * c : m2 + S * c, F.o[2][1] = x + C, F.o[3][0] = T ? m2 - S : m2 + S, F.o[3][1] = x - C * c;
              } }, extendPrototype([DynamicPropertyContainer], u), u;
            }(), E = function() {
              function c(u, f) {
                this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = u, this.comp = u.comp, this.data = f, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(u), f.sy === 1 ? (this.ir = PropertyFactory.getProp(u, f.ir, 0, 0, this), this.is = PropertyFactory.getProp(u, f.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(u, f.pt, 0, 0, this), this.p = PropertyFactory.getProp(u, f.p, 1, 0, this), this.r = PropertyFactory.getProp(u, f.r, 0, degToRads, this), this.or = PropertyFactory.getProp(u, f.or, 0, 0, this), this.os = PropertyFactory.getProp(u, f.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
              }
              return c.prototype = { reset: i, getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
              }, convertStarToPath: function() {
                var f = Math.floor(this.pt.v) * 2, m2 = Math.PI * 2 / f, x = true, S = this.or.v, C = this.ir.v, T = this.os.v, F = this.is.v, V = 2 * Math.PI * S / (f * 2), L = 2 * Math.PI * C / (f * 2), I, D, B, R, _ = -Math.PI / 2;
                _ += this.r.v;
                var M = this.data.d === 3 ? -1 : 1;
                for (this.v._length = 0, I = 0; I < f; I += 1) {
                  D = x ? S : C, B = x ? T : F, R = x ? V : L;
                  var y = D * Math.cos(_), P = D * Math.sin(_), w = y === 0 && P === 0 ? 0 : P / Math.sqrt(y * y + P * P), k = y === 0 && P === 0 ? 0 : -y / Math.sqrt(y * y + P * P);
                  y += +this.p.v[0], P += +this.p.v[1], this.v.setTripleAt(y, P, y - w * R * B * M, P - k * R * B * M, y + w * R * B * M, P + k * R * B * M, I, true), x = !x, _ += m2 * M;
                }
              }, convertPolygonToPath: function() {
                var f = Math.floor(this.pt.v), m2 = Math.PI * 2 / f, x = this.or.v, S = this.os.v, C = 2 * Math.PI * x / (f * 4), T, F = -Math.PI * 0.5, V = this.data.d === 3 ? -1 : 1;
                for (F += this.r.v, this.v._length = 0, T = 0; T < f; T += 1) {
                  var L = x * Math.cos(F), I = x * Math.sin(F), D = L === 0 && I === 0 ? 0 : I / Math.sqrt(L * L + I * I), B = L === 0 && I === 0 ? 0 : -L / Math.sqrt(L * L + I * I);
                  L += +this.p.v[0], I += +this.p.v[1], this.v.setTripleAt(L, I, L - D * C * S * V, I - B * C * S * V, L + D * C * S * V, I + B * C * S * V, T, true), F += m2 * V;
                }
                this.paths.length = 0, this.paths[0] = this.v;
              } }, extendPrototype([DynamicPropertyContainer], c), c;
            }(), p = function() {
              function c(u, f) {
                this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = u, this.comp = u.comp, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(u), this.p = PropertyFactory.getProp(u, f.p, 1, 0, this), this.s = PropertyFactory.getProp(u, f.s, 1, 0, this), this.r = PropertyFactory.getProp(u, f.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
              }
              return c.prototype = { convertRectToPath: function() {
                var f = this.p.v[0], m2 = this.p.v[1], x = this.s.v[0] / 2, S = this.s.v[1] / 2, C = bmMin(x, S, this.r.v), T = C * (1 - roundCorner);
                this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(f + x, m2 - S + C, f + x, m2 - S + C, f + x, m2 - S + T, 0, true), this.v.setTripleAt(f + x, m2 + S - C, f + x, m2 + S - T, f + x, m2 + S - C, 1, true), C !== 0 ? (this.v.setTripleAt(f + x - C, m2 + S, f + x - C, m2 + S, f + x - T, m2 + S, 2, true), this.v.setTripleAt(f - x + C, m2 + S, f - x + T, m2 + S, f - x + C, m2 + S, 3, true), this.v.setTripleAt(f - x, m2 + S - C, f - x, m2 + S - C, f - x, m2 + S - T, 4, true), this.v.setTripleAt(f - x, m2 - S + C, f - x, m2 - S + T, f - x, m2 - S + C, 5, true), this.v.setTripleAt(f - x + C, m2 - S, f - x + C, m2 - S, f - x + T, m2 - S, 6, true), this.v.setTripleAt(f + x - C, m2 - S, f + x - T, m2 - S, f + x - C, m2 - S, 7, true)) : (this.v.setTripleAt(f - x, m2 + S, f - x + T, m2 + S, f - x, m2 + S, 2), this.v.setTripleAt(f - x, m2 - S, f - x, m2 - S + T, f - x, m2 - S, 3))) : (this.v.setTripleAt(f + x, m2 - S + C, f + x, m2 - S + T, f + x, m2 - S + C, 0, true), C !== 0 ? (this.v.setTripleAt(f + x - C, m2 - S, f + x - C, m2 - S, f + x - T, m2 - S, 1, true), this.v.setTripleAt(f - x + C, m2 - S, f - x + T, m2 - S, f - x + C, m2 - S, 2, true), this.v.setTripleAt(f - x, m2 - S + C, f - x, m2 - S + C, f - x, m2 - S + T, 3, true), this.v.setTripleAt(f - x, m2 + S - C, f - x, m2 + S - T, f - x, m2 + S - C, 4, true), this.v.setTripleAt(f - x + C, m2 + S, f - x + C, m2 + S, f - x + T, m2 + S, 5, true), this.v.setTripleAt(f + x - C, m2 + S, f + x - T, m2 + S, f + x - C, m2 + S, 6, true), this.v.setTripleAt(f + x, m2 + S - C, f + x, m2 + S - C, f + x, m2 + S - T, 7, true)) : (this.v.setTripleAt(f - x, m2 - S, f - x + T, m2 - S, f - x, m2 - S, 1, true), this.v.setTripleAt(f - x, m2 + S, f - x, m2 + S - T, f - x, m2 + S, 2, true), this.v.setTripleAt(f + x, m2 + S, f + x - T, m2 + S, f + x, m2 + S, 3, true)));
              }, getValue: function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
              }, reset: i }, extendPrototype([DynamicPropertyContainer], c), c;
            }();
            function b(c, u, f) {
              var m2;
              if (f === 3 || f === 4) {
                var x = f === 3 ? u.pt : u.ks, S = x.k;
                S.length ? m2 = new l(c, u, f) : m2 = new h(c, u, f);
              } else f === 5 ? m2 = new p(c, u) : f === 6 ? m2 = new v(c, u) : f === 7 && (m2 = new E(c, u));
              return m2.k && c.addDynamicProperty(m2), m2;
            }
            function g() {
              return h;
            }
            function d() {
              return l;
            }
            var A = {};
            return A.getShapeProp = b, A.getConstructorFunction = g, A.getKeyframedConstructorFunction = d, A;
          }();
          var Matrix = /* @__PURE__ */ function() {
            var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
            function s() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
            }
            function n(y) {
              if (y === 0) return this;
              var P = t(y), w = e(y);
              return this._t(P, -w, 0, 0, w, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function a(y) {
              if (y === 0) return this;
              var P = t(y), w = e(y);
              return this._t(1, 0, 0, 0, 0, P, -w, 0, 0, w, P, 0, 0, 0, 0, 1);
            }
            function h(y) {
              if (y === 0) return this;
              var P = t(y), w = e(y);
              return this._t(P, 0, w, 0, 0, 1, 0, 0, -w, 0, P, 0, 0, 0, 0, 1);
            }
            function o(y) {
              if (y === 0) return this;
              var P = t(y), w = e(y);
              return this._t(P, -w, 0, 0, w, P, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function l(y, P) {
              return this._t(1, P, y, 1, 0, 0);
            }
            function v(y, P) {
              return this.shear(r(y), r(P));
            }
            function E(y, P) {
              var w = t(P), k = e(P);
              return this._t(w, k, 0, 0, -k, w, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(y), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(w, -k, 0, 0, k, w, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
            }
            function p(y, P, w) {
              return !w && w !== 0 && (w = 1), y === 1 && P === 1 && w === 1 ? this : this._t(y, 0, 0, 0, 0, P, 0, 0, 0, 0, w, 0, 0, 0, 0, 1);
            }
            function b(y, P, w, k, O, z, N, H, j, q, Y, Q, X, $, J, W) {
              return this.props[0] = y, this.props[1] = P, this.props[2] = w, this.props[3] = k, this.props[4] = O, this.props[5] = z, this.props[6] = N, this.props[7] = H, this.props[8] = j, this.props[9] = q, this.props[10] = Y, this.props[11] = Q, this.props[12] = X, this.props[13] = $, this.props[14] = J, this.props[15] = W, this;
            }
            function g(y, P, w) {
              return w = w || 0, y !== 0 || P !== 0 || w !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, y, P, w, 1) : this;
            }
            function d(y, P, w, k, O, z, N, H, j, q, Y, Q, X, $, J, W) {
              var G = this.props;
              if (y === 1 && P === 0 && w === 0 && k === 0 && O === 0 && z === 1 && N === 0 && H === 0 && j === 0 && q === 0 && Y === 1 && Q === 0) return G[12] = G[12] * y + G[15] * X, G[13] = G[13] * z + G[15] * $, G[14] = G[14] * Y + G[15] * J, G[15] *= W, this._identityCalculated = false, this;
              var et = G[0], nt = G[1], rt = G[2], tt = G[3], it = G[4], st = G[5], Z = G[6], at = G[7], ot = G[8], K = G[9], ht = G[10], U = G[11], lt = G[12], ft = G[13], pt = G[14], ct = G[15];
              return G[0] = et * y + nt * O + rt * j + tt * X, G[1] = et * P + nt * z + rt * q + tt * $, G[2] = et * w + nt * N + rt * Y + tt * J, G[3] = et * k + nt * H + rt * Q + tt * W, G[4] = it * y + st * O + Z * j + at * X, G[5] = it * P + st * z + Z * q + at * $, G[6] = it * w + st * N + Z * Y + at * J, G[7] = it * k + st * H + Z * Q + at * W, G[8] = ot * y + K * O + ht * j + U * X, G[9] = ot * P + K * z + ht * q + U * $, G[10] = ot * w + K * N + ht * Y + U * J, G[11] = ot * k + K * H + ht * Q + U * W, G[12] = lt * y + ft * O + pt * j + ct * X, G[13] = lt * P + ft * z + pt * q + ct * $, G[14] = lt * w + ft * N + pt * Y + ct * J, G[15] = lt * k + ft * H + pt * Q + ct * W, this._identityCalculated = false, this;
            }
            function A(y) {
              var P = y.props;
              return this.transform(P[0], P[1], P[2], P[3], P[4], P[5], P[6], P[7], P[8], P[9], P[10], P[11], P[12], P[13], P[14], P[15]);
            }
            function c() {
              return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = true), this._identity;
            }
            function u(y) {
              for (var P = 0; P < 16; ) {
                if (y.props[P] !== this.props[P]) return false;
                P += 1;
              }
              return true;
            }
            function f(y) {
              var P;
              for (P = 0; P < 16; P += 1) y.props[P] = this.props[P];
              return y;
            }
            function m2(y) {
              var P;
              for (P = 0; P < 16; P += 1) this.props[P] = y[P];
            }
            function x(y, P, w) {
              return { x: y * this.props[0] + P * this.props[4] + w * this.props[8] + this.props[12], y: y * this.props[1] + P * this.props[5] + w * this.props[9] + this.props[13], z: y * this.props[2] + P * this.props[6] + w * this.props[10] + this.props[14] };
            }
            function S(y, P, w) {
              return y * this.props[0] + P * this.props[4] + w * this.props[8] + this.props[12];
            }
            function C(y, P, w) {
              return y * this.props[1] + P * this.props[5] + w * this.props[9] + this.props[13];
            }
            function T(y, P, w) {
              return y * this.props[2] + P * this.props[6] + w * this.props[10] + this.props[14];
            }
            function F() {
              var y = this.props[0] * this.props[5] - this.props[1] * this.props[4], P = this.props[5] / y, w = -this.props[1] / y, k = -this.props[4] / y, O = this.props[0] / y, z = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / y, N = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / y, H = new Matrix();
              return H.props[0] = P, H.props[1] = w, H.props[4] = k, H.props[5] = O, H.props[12] = z, H.props[13] = N, H;
            }
            function V(y) {
              var P = this.getInverseMatrix();
              return P.applyToPointArray(y[0], y[1], y[2] || 0);
            }
            function L(y) {
              var P, w = y.length, k = [];
              for (P = 0; P < w; P += 1) k[P] = V(y[P]);
              return k;
            }
            function I(y, P, w) {
              var k = createTypedArray("float32", 6);
              if (this.isIdentity()) k[0] = y[0], k[1] = y[1], k[2] = P[0], k[3] = P[1], k[4] = w[0], k[5] = w[1];
              else {
                var O = this.props[0], z = this.props[1], N = this.props[4], H = this.props[5], j = this.props[12], q = this.props[13];
                k[0] = y[0] * O + y[1] * N + j, k[1] = y[0] * z + y[1] * H + q, k[2] = P[0] * O + P[1] * N + j, k[3] = P[0] * z + P[1] * H + q, k[4] = w[0] * O + w[1] * N + j, k[5] = w[0] * z + w[1] * H + q;
              }
              return k;
            }
            function D(y, P, w) {
              var k;
              return this.isIdentity() ? k = [y, P, w] : k = [y * this.props[0] + P * this.props[4] + w * this.props[8] + this.props[12], y * this.props[1] + P * this.props[5] + w * this.props[9] + this.props[13], y * this.props[2] + P * this.props[6] + w * this.props[10] + this.props[14]], k;
            }
            function B(y, P) {
              if (this.isIdentity()) return y + "," + P;
              var w = this.props;
              return Math.round((y * w[0] + P * w[4] + w[12]) * 100) / 100 + "," + Math.round((y * w[1] + P * w[5] + w[13]) * 100) / 100;
            }
            function R() {
              for (var y = 0, P = this.props, w = "matrix3d(", k = 1e4; y < 16; ) w += i(P[y] * k) / k, w += y === 15 ? ")" : ",", y += 1;
              return w;
            }
            function _(y) {
              var P = 1e4;
              return y < 1e-6 && y > 0 || y > -1e-6 && y < 0 ? i(y * P) / P : y;
            }
            function M() {
              var y = this.props, P = _(y[0]), w = _(y[1]), k = _(y[4]), O = _(y[5]), z = _(y[12]), N = _(y[13]);
              return "matrix(" + P + "," + w + "," + k + "," + O + "," + z + "," + N + ")";
            }
            return function() {
              this.reset = s, this.rotate = n, this.rotateX = a, this.rotateY = h, this.rotateZ = o, this.skew = v, this.skewFromAxis = E, this.shear = l, this.scale = p, this.setTransform = b, this.translate = g, this.transform = d, this.multiply = A, this.applyToPoint = x, this.applyToX = S, this.applyToY = C, this.applyToZ = T, this.applyToPointArray = D, this.applyToTriplePoints = I, this.applyToPointStringified = B, this.toCSS = R, this.to2dCSS = M, this.clone = f, this.cloneFromProps = m2, this.equals = u, this.inversePoints = L, this.inversePoint = V, this.getInverseMatrix = F, this._t = this.transform, this.isIdentity = c, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
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
            var a = [], h, o = n.length, l;
            for (h = 0; h < o; h += 1) if (l = n[h], !(l.e * s < i || l.s * s > i + r)) {
              var v, E;
              l.s * s <= i ? v = 0 : v = (l.s * s - i) / r, l.e * s >= i + r ? E = 1 : E = (l.e * s - i) / r, a.push([v, E]);
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
            var n, a, h = this.shapes.length, o, l, v, E, p, b = 0;
            if (r === e) for (a = 0; a < h; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = true, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
            else if (r === 1 && e === 0 || r === 0 && e === 1) {
              if (this._mdf) for (a = 0; a < h; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = true;
            } else {
              var g = [], d, A;
              for (a = 0; a < h; a += 1) if (d = this.shapes[a], !d.shape._mdf && !this._mdf && !t && this.m !== 2) d.shape.paths = d.localShapeCollection;
              else {
                if (n = d.shape.paths, l = n._length, p = 0, !d.shape._mdf && d.pathsData.length) p = d.totalShapeLength;
                else {
                  for (v = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) E = bez.getSegmentsLength(n.shapes[o]), v.push(E), p += E.totalLength;
                  d.totalShapeLength = p, d.pathsData = v;
                }
                b += p, d.shape._mdf = true;
              }
              var c = e, u = r, f = 0, m2;
              for (a = h - 1; a >= 0; a -= 1) if (d = this.shapes[a], d.shape._mdf) {
                for (A = d.localShapeCollection, A.releaseShapes(), this.m === 2 && h > 1 ? (m2 = this.calculateShapeEdges(e, r, d.totalShapeLength, f, b), f += d.totalShapeLength) : m2 = [[c, u]], l = m2.length, o = 0; o < l; o += 1) {
                  c = m2[o][0], u = m2[o][1], g.length = 0, u <= 1 ? g.push({ s: d.totalShapeLength * c, e: d.totalShapeLength * u }) : c >= 1 ? g.push({ s: d.totalShapeLength * (c - 1), e: d.totalShapeLength * (u - 1) }) : (g.push({ s: d.totalShapeLength * c, e: d.totalShapeLength }), g.push({ s: 0, e: d.totalShapeLength * (u - 1) }));
                  var x = this.addShapes(d, g[0]);
                  if (g[0].s !== g[0].e) {
                    if (g.length > 1) {
                      var S = d.shape.paths.shapes[d.shape.paths._length - 1];
                      if (S.c) {
                        var C = x.pop();
                        this.addPaths(x, A), x = this.addShapes(d, g[1], C);
                      } else this.addPaths(x, A), x = this.addShapes(d, g[1]);
                    }
                    this.addPaths(x, A);
                  }
                }
                d.shape.paths = A;
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
            var i = t.pathsData, s = t.shape.paths.shapes, n, a = t.shape.paths._length, h, o, l = 0, v, E, p, b, g = [], d, A = true;
            for (r ? (E = r._length, d = r._length) : (r = shapePool.newElement(), E = 0, d = 0), g.push(r), n = 0; n < a; n += 1) {
              for (p = i[n].lengths, r.c = s[n].c, o = s[n].c ? p.length : p.length + 1, h = 1; h < o; h += 1) if (v = p[h - 1], l + v.addedLength < e.s) l += v.addedLength, r.c = false;
              else if (l > e.e) {
                r.c = false;
                break;
              } else e.s <= l && e.e >= l + v.addedLength ? (this.addSegment(s[n].v[h - 1], s[n].o[h - 1], s[n].i[h], s[n].v[h], r, E, A), A = false) : (b = bez.getNewSegment(s[n].v[h - 1], s[n].v[h], s[n].o[h - 1], s[n].i[h], (e.s - l) / v.addedLength, (e.e - l) / v.addedLength, p[h - 1]), this.addSegmentFromArray(b, r, E, A), A = false, r.c = false), l += v.addedLength, E += 1;
              if (s[n].c && p.length) {
                if (v = p[h - 1], l <= e.e) {
                  var c = p[h - 1].addedLength;
                  e.s <= l && e.e >= l + c ? (this.addSegment(s[n].v[h - 1], s[n].o[h - 1], s[n].i[0], s[n].v[0], r, E, A), A = false) : (b = bez.getNewSegment(s[n].v[h - 1], s[n].v[0], s[n].o[h - 1], s[n].i[0], (e.s - l) / c, (e.e - l) / c, p[h - 1]), this.addSegmentFromArray(b, r, E, A), A = false, r.c = false);
                } else r.c = false;
                l += v.addedLength, E += 1;
              }
              if (r._length && (r.setXYAt(r.v[d][0], r.v[d][1], "i", d), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), l > e.e) break;
              n < a - 1 && (r = shapePool.newElement(), A = true, g.push(r), E = 0);
            }
            return g;
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
            var h, o, l, v, E, p;
            for (n = 0; n < s; n += 1) h = t.v[n][0] + (i[0] - t.v[n][0]) * r, o = t.v[n][1] + (i[1] - t.v[n][1]) * r, l = t.o[n][0] + (i[0] - t.o[n][0]) * -r, v = t.o[n][1] + (i[1] - t.o[n][1]) * -r, E = t.i[n][0] + (i[0] - t.i[n][0]) * -r, p = t.i[n][1] + (i[1] - t.i[n][1]) * -r, a.setTripleAt(h, o, l, v, E, p, n);
            return a;
          }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, s, n, a = this.amount.v;
            if (a !== 0) {
              var h, o;
              for (r = 0; r < i; r += 1) {
                if (h = this.shapes[r], o = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), h.shape._mdf = true, e = h.shape.paths.shapes, n = h.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(e[s], a));
                h.shape.paths = h.localShapeCollection;
              }
            }
            this.dynamicProperties.length || (this._mdf = false);
          };
          var TransformPropertyFactory = function() {
            var t = [0, 0];
            function e(o) {
              var l = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || l, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
            }
            function r(o) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || o) {
                  var l;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var v, E;
                    if (l = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (v = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / l, 0), E = this.p.getValueAtTime(this.p.keyframes[0].t / l, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (v = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / l, 0), E = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / l, 0)) : (v = this.p.pv, E = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / l, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      v = [], E = [];
                      var p = this.px, b = this.py;
                      p._caching.lastFrame + p.offsetTime <= p.keyframes[0].t ? (v[0] = p.getValueAtTime((p.keyframes[0].t + 0.01) / l, 0), v[1] = b.getValueAtTime((b.keyframes[0].t + 0.01) / l, 0), E[0] = p.getValueAtTime(p.keyframes[0].t / l, 0), E[1] = b.getValueAtTime(b.keyframes[0].t / l, 0)) : p._caching.lastFrame + p.offsetTime >= p.keyframes[p.keyframes.length - 1].t ? (v[0] = p.getValueAtTime(p.keyframes[p.keyframes.length - 1].t / l, 0), v[1] = b.getValueAtTime(b.keyframes[b.keyframes.length - 1].t / l, 0), E[0] = p.getValueAtTime((p.keyframes[p.keyframes.length - 1].t - 0.01) / l, 0), E[1] = b.getValueAtTime((b.keyframes[b.keyframes.length - 1].t - 0.01) / l, 0)) : (v = [p.pv, b.pv], E[0] = p.getValueAtTime((p._caching.lastFrame + p.offsetTime - 0.01) / l, p.offsetTime), E[1] = b.getValueAtTime((b._caching.lastFrame + b.offsetTime - 0.01) / l, b.offsetTime));
                    } else E = t, v = E;
                    this.v.rotate(-Math.atan2(v[1] - E[1], v[0] - E[0]));
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
            function a(o, l, v) {
              if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = l, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(v || o), l.p && l.p.s ? (this.px = PropertyFactory.getProp(o, l.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, l.p.y, 0, 0, this), l.p.z && (this.pz = PropertyFactory.getProp(o, l.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, l.p || { k: [0, 0, 0] }, 1, 0, this), l.rx) {
                if (this.rx = PropertyFactory.getProp(o, l.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, l.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, l.rz, 0, degToRads, this), l.or.k[0].ti) {
                  var E, p = l.or.k.length;
                  for (E = 0; E < p; E += 1) l.or.k[E].to = null, l.or.k[E].ti = null;
                }
                this.or = PropertyFactory.getProp(o, l.or, 1, degToRads, this), this.or.sh = true;
              } else this.r = PropertyFactory.getProp(o, l.r || { k: 0 }, 0, degToRads, this);
              l.sk && (this.sk = PropertyFactory.getProp(o, l.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, l.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, l.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(o, l.s || { k: [100, 100, 100] }, 1, 0.01, this), l.o ? this.o = PropertyFactory.getProp(o, l.o, 0, 0.01, o) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
            }
            a.prototype = { applyToMatrix: e, getValue: r, precalculateMatrix: i, autoOrient: s }, extendPrototype([DynamicPropertyContainer], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
            function h(o, l, v) {
              return new a(o, l, v);
            }
            return { getTransformProperty: h };
          }();
          function RepeaterModifier() {
          }
          extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
            this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
          }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, n) {
            var a = n ? -1 : 1, h = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
            t.translate(i.p.v[0] * a * s, i.p.v[1] * a * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * a * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(n ? 1 / h : h, n ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
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
              var h = Math.ceil(this.c.v);
              if (this._groups.length < h) {
                for (; this._groups.length < h; ) {
                  var o = { it: this.cloneElements(this._elements), ty: "gr" };
                  o.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
                }
                this.elem.reloadShapes(), a = true;
              }
              n = 0;
              var l;
              for (i = 0; i <= this._groups.length - 1; i += 1) {
                if (l = n < h, this._groups[i]._render = l, this.changeGroupRender(this._groups[i].it, l), !l) {
                  var v = this.elemsData[i].it, E = v[v.length - 1];
                  E.transform.op.v !== 0 ? (E.transform.op._mdf = true, E.transform.op.v = 0) : E.transform.op._mdf = false;
                }
                n += 1;
              }
              this._currentCopies = h;
              var p = this.o.v, b = p % 1, g = p > 0 ? Math.floor(p) : Math.ceil(p), d = this.pMatrix.props, A = this.rMatrix.props, c = this.sMatrix.props;
              this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
              var u = 0;
              if (p > 0) {
                for (; u < g; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), u += 1;
                b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, b, false), u += b);
              } else if (p < 0) {
                for (; u > g; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), u -= 1;
                b && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -b, true), u -= b);
              }
              i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, n = this._currentCopies;
              for (var f, m2; n; ) {
                if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, m2 = r.length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), u !== 0) {
                  for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), f = 0; f < m2; f += 1) r[f] = this.matrix.props[f];
                  this.matrix.reset();
                } else for (this.matrix.reset(), f = 0; f < m2; f += 1) r[f] = this.matrix.props[f];
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
            var i, s = t._length, n, a, h, o, l, v, E = 0, p, b, g, d, A, c;
            for (i = 0; i < s; i += 1) n = t.v[i], h = t.o[i], a = t.i[i], n[0] === h[0] && n[1] === h[1] && n[0] === a[0] && n[1] === a[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(n[0], n[1], h[0], h[1], a[0], a[1], E), E += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1], l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), v = l ? Math.min(l / 2, e) / l : 0, A = n[0] + (o[0] - n[0]) * v, p = A, c = n[1] - (n[1] - o[1]) * v, b = c, g = p - (p - n[0]) * roundCorner, d = b - (b - n[1]) * roundCorner, r.setTripleAt(p, b, g, d, A, c, E), E += 1, i === s - 1 ? o = t.v[0] : o = t.v[i + 1], l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), v = l ? Math.min(l / 2, e) / l : 0, g = n[0] + (o[0] - n[0]) * v, p = g, d = n[1] + (o[1] - n[1]) * v, b = d, A = p - (p - n[0]) * roundCorner, c = b - (b - n[1]) * roundCorner, r.setTripleAt(p, b, g, d, A, c, E), E += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], E), E += 1);
            return r;
          }, RoundCornersModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, s, n, a = this.rd.v;
            if (a !== 0) {
              var h, o;
              for (r = 0; r < i; r += 1) {
                if (h = this.shapes[r], o = h.localShapeCollection, !(!h.shape._mdf && !this._mdf && !t)) for (o.releaseShapes(), h.shape._mdf = true, e = h.shape.paths.shapes, n = h.shape.paths._length, s = 0; s < n; s += 1) o.addShape(this.processPath(e[s], a));
                h.shape.paths = h.localShapeCollection;
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
              var h = t.point(n[a])[e];
              h < r ? r = h : h > i && (i = h);
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
              var a = splitData(t), h = splitData(e);
              intersectsImpl(a[0], h[0], r + 1, i, s, n), intersectsImpl(a[0], h[1], r + 1, i, s, n), intersectsImpl(a[1], h[0], r + 1, i, s, n), intersectsImpl(a[1], h[1], r + 1, i, s, n);
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
            var s = [t[0], t[1], 1], n = [e[0], e[1], 1], a = [r[0], r[1], 1], h = [i[0], i[1], 1], o = crossProduct(crossProduct(s, n), crossProduct(a, h));
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
            var h = r - Math.PI / 2, o = r + Math.PI / 2, l = e[0] + Math.cos(r) * i * s, v = e[1] - Math.sin(r) * i * s;
            t.setTripleAt(l, v, l + Math.cos(h) * n, v - Math.sin(h) * n, l + Math.cos(o) * a, v - Math.sin(o) * a, t.length());
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
            var h = getProjectingAngle(e, r), o = e.v[r % e._length], l = e.v[r === 0 ? e._length - 1 : r - 1], v = e.v[(r + 1) % e._length], E = n === 2 ? Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)) : 0, p = n === 2 ? Math.sqrt(Math.pow(o[0] - v[0], 2) + Math.pow(o[1] - v[1], 2)) : 0;
            setPoint(t, e.v[r % e._length], h, a, i, p / ((s + 1) * 2), E / ((s + 1) * 2));
          }
          function zigZagSegment(t, e, r, i, s, n) {
            for (var a = 0; a < i; a += 1) {
              var h = (a + 1) / (i + 1), o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, l = e.normalAngle(h), v = e.point(h);
              setPoint(t, v, l, n, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), n = -n;
            }
            return n;
          }
          ZigZagModifier.prototype.processPath = function(t, e, r, i) {
            var s = t._length, n = shapePool.newElement();
            if (n.c = t.c, t.c || (s -= 1), s === 0) return n;
            var a = -1, h = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(n, t, 0, e, r, i, a);
            for (var o = 0; o < s; o += 1) a = zigZagSegment(n, h, e, r, i, -a), o === s - 1 && !t.c ? h = null : h = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(n, t, o + 1, e, r, i, a);
            return n;
          }, ZigZagModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, s, n, a = this.amplitude.v, h = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
            if (a !== 0) {
              var l, v;
              for (r = 0; r < i; r += 1) {
                if (l = this.shapes[r], v = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (v.releaseShapes(), l.shape._mdf = true, e = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1) v.addShape(this.processPath(e[s], a, h, o));
                l.shape.paths = l.localShapeCollection;
              }
            }
            this.dynamicProperties.length || (this._mdf = false);
          };
          function linearOffset(t, e, r) {
            var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
            return [polarOffset(t, i, r), polarOffset(e, i, r)];
          }
          function offsetSegment(t, e) {
            var r, i, s, n, a, h, o;
            o = linearOffset(t.points[0], t.points[1], e), r = o[0], i = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], n = o[1], o = linearOffset(t.points[2], t.points[3], e), a = o[0], h = o[1];
            var l = lineIntersection(r, i, s, n);
            l === null && (l = i);
            var v = lineIntersection(a, h, s, n);
            return v === null && (v = a), new PolynomialBezier(r, l, v, h);
          }
          function joinLines(t, e, r, i, s) {
            var n = e.points[3], a = r.points[0];
            if (i === 3 || pointEqual(n, a)) return n;
            if (i === 2) {
              var h = -e.tangentAngle(1), o = -r.tangentAngle(0) + Math.PI, l = lineIntersection(n, polarOffset(n, h + Math.PI / 2, 100), a, polarOffset(a, h + Math.PI / 2, 100)), v = l ? pointDistance(l, n) : pointDistance(n, a) / 2, E = polarOffset(n, h, 2 * v * roundCorner);
              return t.setXYAt(E[0], E[1], "o", t.length() - 1), E = polarOffset(a, o, 2 * v * roundCorner), t.setTripleAt(a[0], a[1], a[0], a[1], E[0], E[1], t.length()), a;
            }
            var p = pointEqual(n, e.points[2]) ? e.points[0] : e.points[2], b = pointEqual(a, r.points[1]) ? r.points[3] : r.points[1], g = lineIntersection(p, n, a, b);
            return g && pointDistance(g, n) < s ? (t.setTripleAt(g[0], g[1], g[0], g[1], g[0], g[1], t.length()), g) : n;
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
            var h = (r[1] - r[0]) / (1 - r[0]);
            return n = n[1].split(h), a = n[0], s = n[1], [offsetSegment(i, e), offsetSegment(a, e), offsetSegment(s, e)];
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
            var a, h, o, l = [];
            for (a = 0; a < n; a += 1) o = PolynomialBezier.shapeSegment(t, a), l.push(offsetSegmentSplit(o, e));
            if (!t.c) for (a = n - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), l.push(offsetSegmentSplit(o, e));
            l = pruneIntersections(l);
            var v = null, E = null;
            for (a = 0; a < l.length; a += 1) {
              var p = l[a];
              for (E && (v = joinLines(s, E, p[0], r, i)), E = p[p.length - 1], h = 0; h < p.length; h += 1) o = p[h], v && pointEqual(o.points[0], v) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), v = o.points[3];
            }
            return l.length && joinLines(s, E, l[0][0], r, i), s;
          }, OffsetPathModifier.prototype.processShapes = function(t) {
            var e, r, i = this.shapes.length, s, n, a = this.amount.v, h = this.miterLimit.v, o = this.lineJoin;
            if (a !== 0) {
              var l, v;
              for (r = 0; r < i; r += 1) {
                if (l = this.shapes[r], v = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t)) for (v.releaseShapes(), l.shape._mdf = true, e = l.shape.paths.shapes, n = l.shape.paths._length, s = 0; s < n; s += 1) v.addShape(this.processPath(e[s], a, o, h));
                l.shape.paths = l.localShapeCollection;
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
            var i = 127988, s = 917631, n = 917601, a = 917626, h = 65039, o = 8205, l = 127462, v = 127487, E = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
            function p(_) {
              var M = _.split(","), y, P = M.length, w = [];
              for (y = 0; y < P; y += 1) M[y] !== "sans-serif" && M[y] !== "monospace" && w.push(M[y]);
              return w.join(",");
            }
            function b(_, M) {
              var y = createTag("span");
              y.setAttribute("aria-hidden", true), y.style.fontFamily = M;
              var P = createTag("span");
              P.innerText = "giItT1WQy@!-/#", y.style.position = "absolute", y.style.left = "-10000px", y.style.top = "-10000px", y.style.fontSize = "300px", y.style.fontVariant = "normal", y.style.fontStyle = "normal", y.style.fontWeight = "normal", y.style.letterSpacing = "0", y.appendChild(P), document.body.appendChild(y);
              var w = P.offsetWidth;
              return P.style.fontFamily = p(_) + ", " + M, { node: P, w, parent: y };
            }
            function g() {
              var _, M = this.fonts.length, y, P, w = M;
              for (_ = 0; _ < M; _ += 1) this.fonts[_].loaded ? w -= 1 : this.fonts[_].fOrigin === "n" || this.fonts[_].origin === 0 ? this.fonts[_].loaded = true : (y = this.fonts[_].monoCase.node, P = this.fonts[_].monoCase.w, y.offsetWidth !== P ? (w -= 1, this.fonts[_].loaded = true) : (y = this.fonts[_].sansCase.node, P = this.fonts[_].sansCase.w, y.offsetWidth !== P && (w -= 1, this.fonts[_].loaded = true)), this.fonts[_].loaded && (this.fonts[_].sansCase.parent.parentNode.removeChild(this.fonts[_].sansCase.parent), this.fonts[_].monoCase.parent.parentNode.removeChild(this.fonts[_].monoCase.parent)));
              w !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
            }
            function d(_, M) {
              var y = document.body && M ? "svg" : "canvas", P, w = getFontProperties(_);
              if (y === "svg") {
                var k = createNS("text");
                k.style.fontSize = "100px", k.setAttribute("font-family", _.fFamily), k.setAttribute("font-style", w.style), k.setAttribute("font-weight", w.weight), k.textContent = "1", _.fClass ? (k.style.fontFamily = "inherit", k.setAttribute("class", _.fClass)) : k.style.fontFamily = _.fFamily, M.appendChild(k), P = k;
              } else {
                var O = new OffscreenCanvas(500, 500).getContext("2d");
                O.font = w.style + " " + w.weight + " 100px " + _.fFamily, P = O;
              }
              function z(N) {
                return y === "svg" ? (P.textContent = N, P.getComputedTextLength()) : P.measureText(N).width;
              }
              return { measureText: z };
            }
            function A(_, M) {
              if (!_) {
                this.isLoaded = true;
                return;
              }
              if (this.chars) {
                this.isLoaded = true, this.fonts = _.list;
                return;
              }
              if (!document.body) {
                this.isLoaded = true, _.list.forEach(function(Y) {
                  Y.helper = d(Y), Y.cache = {};
                }), this.fonts = _.list;
                return;
              }
              var y = _.list, P, w = y.length, k = w;
              for (P = 0; P < w; P += 1) {
                var O = true, z, N;
                if (y[P].loaded = false, y[P].monoCase = b(y[P].fFamily, "monospace"), y[P].sansCase = b(y[P].fFamily, "sans-serif"), !y[P].fPath) y[P].loaded = true, k -= 1;
                else if (y[P].fOrigin === "p" || y[P].origin === 3) {
                  if (z = document.querySelectorAll('style[f-forigin="p"][f-family="' + y[P].fFamily + '"], style[f-origin="3"][f-family="' + y[P].fFamily + '"]'), z.length > 0 && (O = false), O) {
                    var H = createTag("style");
                    H.setAttribute("f-forigin", y[P].fOrigin), H.setAttribute("f-origin", y[P].origin), H.setAttribute("f-family", y[P].fFamily), H.type = "text/css", H.innerText = "@font-face {font-family: " + y[P].fFamily + "; font-style: normal; src: url('" + y[P].fPath + "');}", M.appendChild(H);
                  }
                } else if (y[P].fOrigin === "g" || y[P].origin === 1) {
                  for (z = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), N = 0; N < z.length; N += 1) z[N].href.indexOf(y[P].fPath) !== -1 && (O = false);
                  if (O) {
                    var j = createTag("link");
                    j.setAttribute("f-forigin", y[P].fOrigin), j.setAttribute("f-origin", y[P].origin), j.type = "text/css", j.rel = "stylesheet", j.href = y[P].fPath, document.body.appendChild(j);
                  }
                } else if (y[P].fOrigin === "t" || y[P].origin === 2) {
                  for (z = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), N = 0; N < z.length; N += 1) y[P].fPath === z[N].src && (O = false);
                  if (O) {
                    var q = createTag("link");
                    q.setAttribute("f-forigin", y[P].fOrigin), q.setAttribute("f-origin", y[P].origin), q.setAttribute("rel", "stylesheet"), q.setAttribute("href", y[P].fPath), M.appendChild(q);
                  }
                }
                y[P].helper = d(y[P], M), y[P].cache = {}, this.fonts.push(y[P]);
              }
              k === 0 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
            }
            function c(_) {
              if (_) {
                this.chars || (this.chars = []);
                var M, y = _.length, P, w = this.chars.length, k;
                for (M = 0; M < y; M += 1) {
                  for (P = 0, k = false; P < w; ) this.chars[P].style === _[M].style && this.chars[P].fFamily === _[M].fFamily && this.chars[P].ch === _[M].ch && (k = true), P += 1;
                  k || (this.chars.push(_[M]), w += 1);
                }
              }
            }
            function u(_, M, y) {
              for (var P = 0, w = this.chars.length; P < w; ) {
                if (this.chars[P].ch === _ && this.chars[P].style === M && this.chars[P].fFamily === y) return this.chars[P];
                P += 1;
              }
              return (typeof _ == "string" && _.charCodeAt(0) !== 13 || !_) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", _, M, y)), e;
            }
            function f(_, M, y) {
              var P = this.getFontByName(M), w = _;
              if (!P.cache[w]) {
                var k = P.helper;
                if (_ === " ") {
                  var O = k.measureText("|" + _ + "|"), z = k.measureText("||");
                  P.cache[w] = (O - z) / 100;
                } else P.cache[w] = k.measureText(_) / 100;
              }
              return P.cache[w] * y;
            }
            function m2(_) {
              for (var M = 0, y = this.fonts.length; M < y; ) {
                if (this.fonts[M].fName === _) return this.fonts[M];
                M += 1;
              }
              return this.fonts[0];
            }
            function x(_) {
              var M = 0, y = _.charCodeAt(0);
              if (y >= 55296 && y <= 56319) {
                var P = _.charCodeAt(1);
                P >= 56320 && P <= 57343 && (M = (y - 55296) * 1024 + P - 56320 + 65536);
              }
              return M;
            }
            function S(_, M) {
              var y = _.toString(16) + M.toString(16);
              return E.indexOf(y) !== -1;
            }
            function C(_) {
              return _ === o;
            }
            function T(_) {
              return _ === h;
            }
            function F(_) {
              var M = x(_);
              return M >= l && M <= v;
            }
            function V(_) {
              return F(_.substr(0, 2)) && F(_.substr(2, 2));
            }
            function L(_) {
              return r.indexOf(_) !== -1;
            }
            function I(_, M) {
              var y = x(_.substr(M, 2));
              if (y !== i) return false;
              var P = 0;
              for (M += 2; P < 5; ) {
                if (y = x(_.substr(M, 2)), y < n || y > a) return false;
                P += 1, M += 2;
              }
              return x(_.substr(M, 2)) === s;
            }
            function D() {
              this.isLoaded = true;
            }
            var B = function() {
              this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
            };
            B.isModifier = S, B.isZeroWidthJoiner = C, B.isFlagEmoji = V, B.isRegionalCode = F, B.isCombinedCharacter = L, B.isRegionalFlag = I, B.isVariationSelector = T, B.BLACK_FLAG_CODE_POINT = i;
            var R = { addChars: c, addFonts: A, getCharData: u, getFontByName: m2, measureText: f, checkLoadedFonts: g, setIsLoaded: D };
            return B.prototype = R, B;
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
              var h = i.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(h), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface);
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
            var n, a = r.length, h;
            for (n = 0; n < a; n += 1) h = r[n].mat.applyToPointArray(0, 0, 0), e = [e[0] - h[0], e[1] - h[1], 0];
            return e;
          }, mHelper: new Matrix() };
          function MaskElement(t, e, r) {
            this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
            var i = this.globalData.defs, s, n = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(n), this.solidPath = "";
            var a, h = this.masksProperties, o = 0, l = [], v, E, p = createElementID(), b, g, d, A, c = "clipPath", u = "clip-path";
            for (s = 0; s < n; s += 1) if ((h[s].mode !== "a" && h[s].mode !== "n" || h[s].inv || h[s].o.k !== 100 || h[s].o.x) && (c = "mask", u = "mask"), (h[s].mode === "s" || h[s].mode === "i") && o === 0 ? (b = createNS("rect"), b.setAttribute("fill", "#ffffff"), b.setAttribute("width", this.element.comp.data.w || 0), b.setAttribute("height", this.element.comp.data.h || 0), l.push(b)) : b = null, a = createNS("path"), h[s].mode === "n") this.viewData[s] = { op: PropertyFactory.getProp(this.element, h[s].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, h[s], 3), elem: a, lastPath: "" }, i.appendChild(a);
            else {
              o += 1, a.setAttribute("fill", h[s].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
              var f;
              if (h[s].x.k !== 0 ? (c = "mask", u = "mask", A = PropertyFactory.getProp(this.element, h[s].x, 0, null, this.element), f = createElementID(), g = createNS("filter"), g.setAttribute("id", f), d = createNS("feMorphology"), d.setAttribute("operator", "erode"), d.setAttribute("in", "SourceGraphic"), d.setAttribute("radius", "0"), g.appendChild(d), i.appendChild(g), a.setAttribute("stroke", h[s].mode === "s" ? "#000000" : "#ffffff")) : (d = null, A = null), this.storedData[s] = { elem: a, x: A, expan: d, lastPath: "", lastOperator: "", filterId: f, lastRadius: 0 }, h[s].mode === "i") {
                E = l.length;
                var m2 = createNS("g");
                for (v = 0; v < E; v += 1) m2.appendChild(l[v]);
                var x = createNS("mask");
                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", p + "_" + o), x.appendChild(a), i.appendChild(x), m2.setAttribute("mask", "url(" + getLocationHref() + "#" + p + "_" + o + ")"), l.length = 0, l.push(m2);
              } else l.push(a);
              h[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = { elem: a, lastPath: "", op: PropertyFactory.getProp(this.element, h[s].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, h[s], 3), invRect: b }, this.viewData[s].prop.k || this.drawPath(h[s], this.viewData[s].prop.v, this.viewData[s]);
            }
            for (this.maskElement = createNS(c), n = l.length, s = 0; s < n; s += 1) this.maskElement.appendChild(l[s]);
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
            var h;
            for (e = 0; e < i; e += 1) {
              h = null;
              var o = t.data.ef[e].ty;
              if (registeredEffects$1[o]) {
                var l = registeredEffects$1[o].effect;
                h = new l(n, t.effectsManager.effectElements[e], t, idPrefix + a, r), r = idPrefix + a, registeredEffects$1[o].countsAsEffect && (a += 1);
              }
              h && this.filters.push(h);
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
                var h = createNS("mask");
                h.setAttribute("id", r), h.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), h.appendChild(n), this.globalData.defs.appendChild(h), !featureSupport.maskType && e === 1 && (h.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(n), h.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
              } else if (e === 2) {
                var o = createNS("mask");
                o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), i = createElementID(), s = filtersFactory.createFilter(i);
                var v = createNS("feComponentTransfer");
                v.setAttribute("in", "SourceGraphic"), s.appendChild(v);
                var E = createNS("feFuncA");
                E.setAttribute("type", "table"), E.setAttribute("tableValues", "1.0 0.0"), v.appendChild(E), this.globalData.defs.appendChild(s);
                var p = createNS("rect");
                p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), l.appendChild(p), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), l.appendChild(p), a.appendChild(this.layerElement), l.appendChild(a)), this.globalData.defs.appendChild(o);
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
            var s = [], n, a, h;
            for (h = e.g.p * 4, a = 0; a < h; a += 4) n = createNS("stop"), i.appendChild(n), s.push(n);
            t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s;
          }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
              var r, i, s, n = createNS("mask"), a = createNS("path");
              n.appendChild(a);
              var h = createElementID(), o = createElementID();
              n.setAttribute("id", o);
              var l = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
              l.setAttribute("id", h), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
              var v = this.stops;
              for (i = t.g.p * 4; i < s; i += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), v.push(r);
              a.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + h + ")"), t.ty === "gs" && (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = n, this.ost = v, this.maskId = o, e.msElem = a;
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
            var n = e.o, a = e.i, h = e.v, o, l = " M" + s.applyToPointStringified(h[0][0], h[0][1]);
            for (o = 1; o < r; o += 1) l += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[o][0], a[o][1]) + " " + s.applyToPointStringified(h[o][0], h[o][1]);
            return i && r && (l += " C" + s.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + s.applyToPointStringified(a[0][0], a[0][1]) + " " + s.applyToPointStringified(h[0][0], h[0][1]), l += "z"), l;
          }, SVGElementsRenderer = function() {
            var t = new Matrix(), e = new Matrix(), r = { createRenderFunction: i };
            function i(E) {
              switch (E.ty) {
                case "fl":
                  return h;
                case "gf":
                  return l;
                case "gs":
                  return o;
                case "st":
                  return v;
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
            function s(E, p, b) {
              (b || p.transform.op._mdf) && p.transform.container.setAttribute("opacity", p.transform.op.v), (b || p.transform.mProps._mdf) && p.transform.container.setAttribute("transform", p.transform.mProps.v.to2dCSS());
            }
            function n() {
            }
            function a(E, p, b) {
              var g, d, A, c, u, f, m2 = p.styles.length, x = p.lvl, S, C, T, F;
              for (f = 0; f < m2; f += 1) {
                if (c = p.sh._mdf || b, p.styles[f].lvl < x) {
                  for (C = e.reset(), T = x - p.styles[f].lvl, F = p.transformers.length - 1; !c && T > 0; ) c = p.transformers[F].mProps._mdf || c, T -= 1, F -= 1;
                  if (c) for (T = x - p.styles[f].lvl, F = p.transformers.length - 1; T > 0; ) C.multiply(p.transformers[F].mProps.v), T -= 1, F -= 1;
                } else C = t;
                if (S = p.sh.paths, d = S._length, c) {
                  for (A = "", g = 0; g < d; g += 1) u = S.shapes[g], u && u._length && (A += buildShapeString(u, u._length, u.c, C));
                  p.caches[f] = A;
                } else A = p.caches[f];
                p.styles[f].d += E.hd === true ? "" : A, p.styles[f]._mdf = c || p.styles[f]._mdf;
              }
            }
            function h(E, p, b) {
              var g = p.style;
              (p.c._mdf || b) && g.pElem.setAttribute("fill", "rgb(" + bmFloor(p.c.v[0]) + "," + bmFloor(p.c.v[1]) + "," + bmFloor(p.c.v[2]) + ")"), (p.o._mdf || b) && g.pElem.setAttribute("fill-opacity", p.o.v);
            }
            function o(E, p, b) {
              l(E, p, b), v(E, p, b);
            }
            function l(E, p, b) {
              var g = p.gf, d = p.g._hasOpacity, A = p.s.v, c = p.e.v;
              if (p.o._mdf || b) {
                var u = E.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                p.style.pElem.setAttribute(u, p.o.v);
              }
              if (p.s._mdf || b) {
                var f = E.t === 1 ? "x1" : "cx", m2 = f === "x1" ? "y1" : "cy";
                g.setAttribute(f, A[0]), g.setAttribute(m2, A[1]), d && !p.g._collapsable && (p.of.setAttribute(f, A[0]), p.of.setAttribute(m2, A[1]));
              }
              var x, S, C, T;
              if (p.g._cmdf || b) {
                x = p.cst;
                var F = p.g.c;
                for (C = x.length, S = 0; S < C; S += 1) T = x[S], T.setAttribute("offset", F[S * 4] + "%"), T.setAttribute("stop-color", "rgb(" + F[S * 4 + 1] + "," + F[S * 4 + 2] + "," + F[S * 4 + 3] + ")");
              }
              if (d && (p.g._omdf || b)) {
                var V = p.g.o;
                for (p.g._collapsable ? x = p.cst : x = p.ost, C = x.length, S = 0; S < C; S += 1) T = x[S], p.g._collapsable || T.setAttribute("offset", V[S * 2] + "%"), T.setAttribute("stop-opacity", V[S * 2 + 1]);
              }
              if (E.t === 1) (p.e._mdf || b) && (g.setAttribute("x2", c[0]), g.setAttribute("y2", c[1]), d && !p.g._collapsable && (p.of.setAttribute("x2", c[0]), p.of.setAttribute("y2", c[1])));
              else {
                var L;
                if ((p.s._mdf || p.e._mdf || b) && (L = Math.sqrt(Math.pow(A[0] - c[0], 2) + Math.pow(A[1] - c[1], 2)), g.setAttribute("r", L), d && !p.g._collapsable && p.of.setAttribute("r", L)), p.e._mdf || p.h._mdf || p.a._mdf || b) {
                  L || (L = Math.sqrt(Math.pow(A[0] - c[0], 2) + Math.pow(A[1] - c[1], 2)));
                  var I = Math.atan2(c[1] - A[1], c[0] - A[0]), D = p.h.v;
                  D >= 1 ? D = 0.99 : D <= -1 && (D = -0.99);
                  var B = L * D, R = Math.cos(I + p.a.v) * B + A[0], _ = Math.sin(I + p.a.v) * B + A[1];
                  g.setAttribute("fx", R), g.setAttribute("fy", _), d && !p.g._collapsable && (p.of.setAttribute("fx", R), p.of.setAttribute("fy", _));
                }
              }
            }
            function v(E, p, b) {
              var g = p.style, d = p.d;
              d && (d._mdf || b) && d.dashStr && (g.pElem.setAttribute("stroke-dasharray", d.dashStr), g.pElem.setAttribute("stroke-dashoffset", d.dashoffset[0])), p.c && (p.c._mdf || b) && g.pElem.setAttribute("stroke", "rgb(" + bmFloor(p.c.v[0]) + "," + bmFloor(p.c.v[1]) + "," + bmFloor(p.c.v[2]) + ")"), (p.o._mdf || b) && g.pElem.setAttribute("stroke-opacity", p.o.v), (p.w._mdf || b) && (g.pElem.setAttribute("stroke-width", p.w.v), g.msElem && g.msElem.setAttribute("stroke-width", p.w.v));
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
            var t, e = this.shapes.length, r, i, s = this.stylesList.length, n, a = [], h = false;
            for (i = 0; i < s; i += 1) {
              for (n = this.stylesList[i], h = false, a.length = 0, t = 0; t < e; t += 1) r = this.shapes[t], r.styles.indexOf(n) !== -1 && (a.push(r), h = r._isAnimated || h);
              a.length > 1 && h && this.setShapesAsAnimated(a);
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
            var h = [].concat(n), o, l = t.length - 1, v, E, p = [], b = [], g, d, A;
            for (o = l; o >= 0; o -= 1) {
              if (A = this.searchProcessedElement(t[o]), A ? e[o] = r[A - 1] : t[o]._render = a, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no") A ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), p.push(e[o].style);
              else if (t[o].ty === "gr") {
                if (!A) e[o] = this.createGroupElement(t[o]);
                else for (E = e[o].it.length, v = 0; v < E; v += 1) e[o].prevViewData[v] = e[o].it[v];
                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, h, a), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
              } else t[o].ty === "tr" ? (A || (e[o] = this.createTransformElement(t[o], i)), g = e[o].transform, h.push(g)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (A || (e[o] = this.createShapeElement(t[o], h, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (A ? (d = e[o], d.closed = false) : (d = ShapeModifiers.getModifier(t[o].ty), d.init(this, t[o]), e[o] = d, this.shapeModifiers.push(d)), b.push(d)) : t[o].ty === "rp" && (A ? (d = e[o], d.closed = true) : (d = ShapeModifiers.getModifier(t[o].ty), e[o] = d, d.init(this, t, o, e), this.shapeModifiers.push(d), a = false), b.push(d));
              this.addProcessedElement(t[o], o + 1);
            }
            for (l = p.length, o = 0; o < l; o += 1) p[o].closed = true;
            for (l = b.length, o = 0; o < l; o += 1) b[o].closed = true;
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
            for (var e = [], r = 0, i = t.length, s, n, a = false, h = false, o = ""; r < i; ) a = h, h = false, s = t.charCodeAt(r), o = t.charAt(r), FontManager.isCombinedCharacter(s) ? a = true : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (n = t.charCodeAt(r + 1), n >= 56320 && n <= 57343 && (FontManager.isModifier(s, n) ? (o = t.substr(r, 2), a = true) : FontManager.isFlagEmoji(t.substr(r, 4)) ? o = t.substr(r, 4) : o = t.substr(r, 2))) : s > 56319 ? (n = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (a = true)) : FontManager.isZeroWidthJoiner(s) && (a = true, h = true), a ? (e[e.length - 1] += o, a = false) : e.push(o), r += o.length;
            return e;
          }, TextProperty.prototype.completeTextData = function(t) {
            t.__complete = true;
            var e = this.elem.globalData.fontManager, r = this.data, i = [], s, n, a, h = 0, o, l = r.m.g, v = 0, E = 0, p = 0, b = [], g = 0, d = 0, A, c, u = e.getFontByName(t.f), f, m2 = 0, x = getFontProperties(u);
            t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;
            var S = t.tr / 1e3 * t.finalSize, C;
            if (t.sz) for (var T = true, F = t.sz[0], V = t.sz[1], L, I; T; ) {
              I = this.buildFinalText(t.t), L = 0, g = 0, n = I.length, S = t.tr / 1e3 * t.finalSize;
              var D = -1;
              for (s = 0; s < n; s += 1) C = I[s].charCodeAt(0), a = false, I[s] === " " ? D = s : (C === 13 || C === 3) && (g = 0, a = true, L += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (f = e.getCharData(I[s], u.fStyle, u.fFamily), m2 = a ? 0 : f.w * t.finalSize / 100) : m2 = e.measureText(I[s], t.f, t.finalSize), g + m2 > F && I[s] !== " " ? (D === -1 ? n += 1 : s = D, L += t.finalLineHeight || t.finalSize * 1.2, I.splice(s, D === s ? 1 : 0, "\r"), D = -1, g = 0) : (g += m2, g += S);
              L += u.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && V < L ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = I, n = t.finalText.length, T = false);
            }
            g = -S, m2 = 0;
            var B = 0, R;
            for (s = 0; s < n; s += 1) if (a = false, R = t.finalText[s], C = R.charCodeAt(0), C === 13 || C === 3 ? (B = 0, b.push(g), d = g > d ? g : d, g = -2 * S, o = "", a = true, p += 1) : o = R, e.chars ? (f = e.getCharData(R, u.fStyle, e.getFontByName(t.f).fFamily), m2 = a ? 0 : f.w * t.finalSize / 100) : m2 = e.measureText(o, t.f, t.finalSize), R === " " ? B += m2 + S : (g += m2 + S + B, B = 0), i.push({ l: m2, an: m2, add: v, n: a, anIndexes: [], val: o, line: p, animatorJustifyOffset: 0 }), l == 2) {
              if (v += m2, o === "" || o === " " || s === n - 1) {
                for ((o === "" || o === " ") && (v -= m2); E <= s; ) i[E].an = v, i[E].ind = h, i[E].extra = m2, E += 1;
                h += 1, v = 0;
              }
            } else if (l == 3) {
              if (v += m2, o === "" || s === n - 1) {
                for (o === "" && (v -= m2); E <= s; ) i[E].an = v, i[E].ind = h, i[E].extra = m2, E += 1;
                v = 0, h += 1;
              }
            } else i[h].ind = h, i[h].extra = 0, h += 1;
            if (t.l = i, d = g > d ? g : d, b.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
            else switch (t.boxWidth = d, t.j) {
              case 1:
                t.justifyOffset = -t.boxWidth;
                break;
              case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
              default:
                t.justifyOffset = 0;
            }
            t.lineWidths = b;
            var _ = r.a, M, y;
            c = _.length;
            var P, w, k = [];
            for (A = 0; A < c; A += 1) {
              for (M = _[A], M.a.sc && (t.strokeColorAnim = true), M.a.sw && (t.strokeWidthAnim = true), (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (t.fillColorAnim = true), w = 0, P = M.s.b, s = 0; s < n; s += 1) y = i[s], y.anIndexes[A] = w, (P == 1 && y.val !== "" || P == 2 && y.val !== "" && y.val !== " " || P == 3 && (y.n || y.val == " " || s == n - 1) || P == 4 && (y.n || s == n - 1)) && (M.s.rn === 1 && k.push(w), w += 1);
              r.a[A].s.totalChars = w;
              var O = -1, z;
              if (M.s.rn === 1) for (s = 0; s < n; s += 1) y = i[s], O != y.anIndexes[A] && (O = y.anIndexes[A], z = k.splice(Math.floor(Math.random() * k.length), 1)[0]), y.anIndexes[A] = z;
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
              var h = 0, o = 0, l = 1, v = 1;
              this.ne.v > 0 ? h = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? l = 1 - this.xe.v / 100 : v = 1 + this.xe.v / 100;
              var E = BezierFactory.getBezierEasing(h, o, l, v).get, p = 0, b = this.finalS, g = this.finalE, d = this.data.sh;
              if (d === 2) g === b ? p = a >= g ? 1 : 0 : p = t(0, e(0.5 / (g - b) + (a - b) / (g - b), 1)), p = E(p);
              else if (d === 3) g === b ? p = a >= g ? 0 : 1 : p = 1 - t(0, e(0.5 / (g - b) + (a - b) / (g - b), 1)), p = E(p);
              else if (d === 4) g === b ? p = 0 : (p = t(0, e(0.5 / (g - b) + (a - b) / (g - b), 1)), p < 0.5 ? p *= 2 : p = 1 - 2 * (p - 0.5)), p = E(p);
              else if (d === 5) {
                if (g === b) p = 0;
                else {
                  var A = g - b;
                  a = e(t(0, a + 0.5 - b), g - b);
                  var c = -A / 2 + a, u = A / 2;
                  p = Math.sqrt(1 - c * c / (u * u));
                }
                p = E(p);
              } else d === 6 ? (g === b ? p = 0 : (a = e(t(0, a + 0.5 - b), g - b), p = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (g - b))) / 2), p = E(p)) : (a >= r(b) && (a - b < 0 ? p = t(0, e(e(g, 1) - (b - a), 1)) : p = t(0, e(g - a, 1))), p = E(p));
              if (this.sm.v !== 100) {
                var f = this.sm.v * 0.01;
                f === 0 && (f = 1e-8);
                var m2 = 0.5 - f * 0.5;
                p < m2 ? p = 0 : (p = (p - m2) / f, p > 1 && (p = 1));
              }
              return p * this.a.v;
            }, getValue: function(a) {
              this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
              var h = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / h, l = this.s.v / h + o, v = this.e.v / h + o;
              if (l > v) {
                var E = l;
                l = v, v = E;
              }
              this.finalS = l, this.finalE = v;
            } }, extendPrototype([DynamicPropertyContainer], i);
            function s(n, a, h) {
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
              var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, n = this.mHelper, a = this._renderType, h = this.renderedLetters.length, o, l, v, E, p = t.l, b, g, d, A, c, u, f, m2, x, S, C, T, F, V, L;
              if (this._hasMaskedPath) {
                if (L = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                  var I = L.v;
                  this._pathData.r.v && (I = I.reverse()), b = { tLength: 0, segments: [] }, E = I._length - 1;
                  var D;
                  for (T = 0, v = 0; v < E; v += 1) D = bez.buildBezierData(I.v[v], I.v[v + 1], [I.o[v][0] - I.v[v][0], I.o[v][1] - I.v[v][1]], [I.i[v + 1][0] - I.v[v + 1][0], I.i[v + 1][1] - I.v[v + 1][1]]), b.tLength += D.segmentLength, b.segments.push(D), T += D.segmentLength;
                  v = E, L.v.c && (D = bez.buildBezierData(I.v[v], I.v[0], [I.o[v][0] - I.v[v][0], I.o[v][1] - I.v[v][1]], [I.i[0][0] - I.v[0][0], I.i[0][1] - I.v[0][1]]), b.tLength += D.segmentLength, b.segments.push(D), T += D.segmentLength), this._pathData.pi = b;
                }
                if (b = this._pathData.pi, g = this._pathData.f.v, f = 0, u = 1, A = 0, c = true, S = b.segments, g < 0 && L.v.c) for (b.tLength < Math.abs(g) && (g = -Math.abs(g) % b.tLength), f = S.length - 1, x = S[f].points, u = x.length - 1; g < 0; ) g += x[u].partialLength, u -= 1, u < 0 && (f -= 1, x = S[f].points, u = x.length - 1);
                x = S[f].points, m2 = x[u - 1], d = x[u], C = d.partialLength;
              }
              E = p.length, o = 0, l = 0;
              var B = t.finalSize * 1.2 * 0.714, R = true, _, M, y, P, w;
              P = i.length;
              var k, O = -1, z, N, H, j = g, q = f, Y = u, Q = -1, X, $, J, W, G, et, nt, rt, tt = "", it = this.defaultPropsArray, st;
              if (t.j === 2 || t.j === 1) {
                var Z = 0, at = 0, ot = t.j === 2 ? -0.5 : -1, K = 0, ht = true;
                for (v = 0; v < E; v += 1) if (p[v].n) {
                  for (Z && (Z += at); K < v; ) p[K].animatorJustifyOffset = Z, K += 1;
                  Z = 0, ht = true;
                } else {
                  for (y = 0; y < P; y += 1) _ = i[y].a, _.t.propType && (ht && t.j === 2 && (at += _.t.v * ot), M = i[y].s, k = M.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), k.length ? Z += _.t.v * k[0] * ot : Z += _.t.v * k * ot);
                  ht = false;
                }
                for (Z && (Z += at); K < v; ) p[K].animatorJustifyOffset = Z, K += 1;
              }
              for (v = 0; v < E; v += 1) {
                if (n.reset(), X = 1, p[v].n) o = 0, l += t.yOffset, l += R ? 1 : 0, g = j, R = false, this._hasMaskedPath && (f = q, u = Y, x = S[f].points, m2 = x[u - 1], d = x[u], C = d.partialLength, A = 0), tt = "", rt = "", et = "", st = "", it = this.defaultPropsArray;
                else {
                  if (this._hasMaskedPath) {
                    if (Q !== p[v].line) {
                      switch (t.j) {
                        case 1:
                          g += T - t.lineWidths[p[v].line];
                          break;
                        case 2:
                          g += (T - t.lineWidths[p[v].line]) / 2;
                          break;
                      }
                      Q = p[v].line;
                    }
                    O !== p[v].ind && (p[O] && (g += p[O].extra), g += p[v].an / 2, O = p[v].ind), g += r[0] * p[v].an * 5e-3;
                    var U = 0;
                    for (y = 0; y < P; y += 1) _ = i[y].a, _.p.propType && (M = i[y].s, k = M.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), k.length ? U += _.p.v[0] * k[0] : U += _.p.v[0] * k), _.a.propType && (M = i[y].s, k = M.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), k.length ? U += _.a.v[0] * k[0] : U += _.a.v[0] * k);
                    for (c = true, this._pathData.a.v && (g = p[0].an * 0.5 + (T - this._pathData.f.v - p[0].an * 0.5 - p[p.length - 1].an * 0.5) * O / (E - 1), g += this._pathData.f.v); c; ) A + C >= g + U || !x ? (F = (g + U - A) / d.partialLength, N = m2.point[0] + (d.point[0] - m2.point[0]) * F, H = m2.point[1] + (d.point[1] - m2.point[1]) * F, n.translate(-r[0] * p[v].an * 5e-3, -(r[1] * B) * 0.01), c = false) : x && (A += d.partialLength, u += 1, u >= x.length && (u = 0, f += 1, S[f] ? x = S[f].points : L.v.c ? (u = 0, f = 0, x = S[f].points) : (A -= d.partialLength, x = null)), x && (m2 = d, d = x[u], C = d.partialLength));
                    z = p[v].an / 2 - p[v].add, n.translate(-z, 0, 0);
                  } else z = p[v].an / 2 - p[v].add, n.translate(-z, 0, 0), n.translate(-r[0] * p[v].an * 5e-3, -r[1] * B * 0.01, 0);
                  for (y = 0; y < P; y += 1) _ = i[y].a, _.t.propType && (M = i[y].s, k = M.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? k.length ? g += _.t.v * k[0] : g += _.t.v * k : k.length ? o += _.t.v * k[0] : o += _.t.v * k));
                  for (t.strokeWidthAnim && (J = t.sw || 0), t.strokeColorAnim && (t.sc ? $ = [t.sc[0], t.sc[1], t.sc[2]] : $ = [0, 0, 0]), t.fillColorAnim && t.fc && (W = [t.fc[0], t.fc[1], t.fc[2]]), y = 0; y < P; y += 1) _ = i[y].a, _.a.propType && (M = i[y].s, k = M.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), k.length ? n.translate(-_.a.v[0] * k[0], -_.a.v[1] * k[1], _.a.v[2] * k[2]) : n.translate(-_.a.v[0] * k, -_.a.v[1] * k, _.a.v[2] * k));
                  for (y = 0; y < P; y += 1) _ = i[y].a, _.s.propType && (M = i[y].s, k = M.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), k.length ? n.scale(1 + (_.s.v[0] - 1) * k[0], 1 + (_.s.v[1] - 1) * k[1], 1) : n.scale(1 + (_.s.v[0] - 1) * k, 1 + (_.s.v[1] - 1) * k, 1));
                  for (y = 0; y < P; y += 1) {
                    if (_ = i[y].a, M = i[y].s, k = M.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), _.sk.propType && (k.length ? n.skewFromAxis(-_.sk.v * k[0], _.sa.v * k[1]) : n.skewFromAxis(-_.sk.v * k, _.sa.v * k)), _.r.propType && (k.length ? n.rotateZ(-_.r.v * k[2]) : n.rotateZ(-_.r.v * k)), _.ry.propType && (k.length ? n.rotateY(_.ry.v * k[1]) : n.rotateY(_.ry.v * k)), _.rx.propType && (k.length ? n.rotateX(_.rx.v * k[0]) : n.rotateX(_.rx.v * k)), _.o.propType && (k.length ? X += (_.o.v * k[0] - X) * k[0] : X += (_.o.v * k - X) * k), t.strokeWidthAnim && _.sw.propType && (k.length ? J += _.sw.v * k[0] : J += _.sw.v * k), t.strokeColorAnim && _.sc.propType) for (G = 0; G < 3; G += 1) k.length ? $[G] += (_.sc.v[G] - $[G]) * k[0] : $[G] += (_.sc.v[G] - $[G]) * k;
                    if (t.fillColorAnim && t.fc) {
                      if (_.fc.propType) for (G = 0; G < 3; G += 1) k.length ? W[G] += (_.fc.v[G] - W[G]) * k[0] : W[G] += (_.fc.v[G] - W[G]) * k;
                      _.fh.propType && (k.length ? W = addHueToRGB(W, _.fh.v * k[0]) : W = addHueToRGB(W, _.fh.v * k)), _.fs.propType && (k.length ? W = addSaturationToRGB(W, _.fs.v * k[0]) : W = addSaturationToRGB(W, _.fs.v * k)), _.fb.propType && (k.length ? W = addBrightnessToRGB(W, _.fb.v * k[0]) : W = addBrightnessToRGB(W, _.fb.v * k));
                    }
                  }
                  for (y = 0; y < P; y += 1) _ = i[y].a, _.p.propType && (M = i[y].s, k = M.getMult(p[v].anIndexes[y], s.a[y].s.totalChars), this._hasMaskedPath ? k.length ? n.translate(0, _.p.v[1] * k[0], -_.p.v[2] * k[1]) : n.translate(0, _.p.v[1] * k, -_.p.v[2] * k) : k.length ? n.translate(_.p.v[0] * k[0], _.p.v[1] * k[1], -_.p.v[2] * k[2]) : n.translate(_.p.v[0] * k, _.p.v[1] * k, -_.p.v[2] * k));
                  if (t.strokeWidthAnim && (et = J < 0 ? 0 : J), t.strokeColorAnim && (nt = "rgb(" + Math.round($[0] * 255) + "," + Math.round($[1] * 255) + "," + Math.round($[2] * 255) + ")"), t.fillColorAnim && t.fc && (rt = "rgb(" + Math.round(W[0] * 255) + "," + Math.round(W[1] * 255) + "," + Math.round(W[2] * 255) + ")"), this._hasMaskedPath) {
                    if (n.translate(0, -t.ls), n.translate(0, r[1] * B * 0.01 + l, 0), this._pathData.p.v) {
                      V = (d.point[1] - m2.point[1]) / (d.point[0] - m2.point[0]);
                      var lt = Math.atan(V) * 180 / Math.PI;
                      d.point[0] < m2.point[0] && (lt += 180), n.rotate(-lt * Math.PI / 180);
                    }
                    n.translate(N, H, 0), g -= r[0] * p[v].an * 5e-3, p[v + 1] && O !== p[v + 1].ind && (g += p[v].an / 2, g += t.tr * 1e-3 * t.finalSize);
                  } else {
                    switch (n.translate(o, l, 0), t.ps && n.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                      case 1:
                        n.translate(p[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[v].line]), 0, 0);
                        break;
                      case 2:
                        n.translate(p[v].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[p[v].line]) / 2, 0, 0);
                        break;
                    }
                    n.translate(0, -t.ls), n.translate(z, 0, 0), n.translate(r[0] * p[v].an * 5e-3, r[1] * B * 0.01, 0), o += p[v].l + t.tr * 1e-3 * t.finalSize;
                  }
                  a === "html" ? tt = n.toCSS() : a === "svg" ? tt = n.to2dCSS() : it = [n.props[0], n.props[1], n.props[2], n.props[3], n.props[4], n.props[5], n.props[6], n.props[7], n.props[8], n.props[9], n.props[10], n.props[11], n.props[12], n.props[13], n.props[14], n.props[15]], st = X;
                }
                h <= v ? (w = new LetterProps(st, et, nt, rt, tt, it), this.renderedLetters.push(w), h += 1, this.lettersChangedFlag = true) : (w = this.renderedLetters[v], this.lettersChangedFlag = w.update(st, et, nt, rt, tt, it) || this.lettersChangedFlag);
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
            var a = r.l || [], h = !!this.globalData.fontManager.chars;
            e = a.length;
            var o, l = this.mHelper, v = "", E = this.data.singleShape, p = 0, b = 0, g = true, d = r.tr * 1e-3 * r.finalSize;
            if (E && !h && !r.sz) {
              var A = this.textContainer, c = "start";
              switch (r.j) {
                case 1:
                  c = "end";
                  break;
                case 2:
                  c = "middle";
                  break;
                default:
                  c = "start";
                  break;
              }
              A.setAttribute("text-anchor", c), A.setAttribute("letter-spacing", d);
              var u = this.buildTextContents(r.finalText);
              for (e = u.length, b = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1) o = this.textSpans[t].span || createNS("tspan"), o.textContent = u[t], o.setAttribute("x", 0), o.setAttribute("y", b), o.style.display = "inherit", A.appendChild(o), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = o, b += r.finalLineHeight;
              this.layerElement.appendChild(A);
            } else {
              var f = this.textSpans.length, m2;
              for (t = 0; t < e; t += 1) {
                if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !h || !E || t === 0) {
                  if (o = f > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), f <= t) {
                    if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, h) {
                      var x = createNS("g");
                      o.appendChild(x), this.textSpans[t].childSpan = x;
                    }
                    this.textSpans[t].span = o, this.layerElement.appendChild(o);
                  }
                  o.style.display = "inherit";
                }
                if (l.reset(), E && (a[t].n && (p = -d, b += r.yOffset, b += g ? 1 : 0, g = false), this.applyTextPropertiesToMatrix(r, l, a[t].line, p, b), p += a[t].l || 0, p += d), h) {
                  m2 = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
                  var S;
                  if (m2.t === 1) S = new SVGCompElement(m2.data, this.globalData, this);
                  else {
                    var C = emptyShapeData;
                    m2.data && m2.data.shapes && (C = this.buildShapeData(m2.data, r.finalSize)), S = new SVGShapeElement(C, this.globalData, this);
                  }
                  if (this.textSpans[t].glyph) {
                    var T = this.textSpans[t].glyph;
                    this.textSpans[t].childSpan.removeChild(T.layerElement), T.destroy();
                  }
                  this.textSpans[t].glyph = S, S._debug = true, S.prepareFrame(0), S.renderFrame(), this.textSpans[t].childSpan.appendChild(S.layerElement), m2.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
                } else E && o.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), o.textContent = a[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
              }
              E && o && o.setAttribute("d", v);
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
            var h = createNS("defs");
            this.svgElement.appendChild(h);
            var o = createNS("g");
            this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && e.hideOnTransparent === false), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: false, frameNum: -1, defs: h, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
          }
          extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
            return new SVGCompElement(t, this.globalData, this);
          };
          function ShapeTransformManager() {
            this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
          }
          ShapeTransformManager.prototype = { addTransformSequence: function(e) {
            var r, i = e.length, s = "_";
            for (r = 0; r < i; r += 1) s += e[r].transform.key + "_";
            var n = this.sequences[s];
            return n || (n = { transforms: [].concat(e), finalTransform: new Matrix(), _mdf: false }, this.sequences[s] = n, this.sequenceList.push(n)), n;
          }, processSequence: function(e, r) {
            for (var i = 0, s = e.transforms.length, n = r; i < s && !r; ) {
              if (e.transforms[i].transform.mProps._mdf) {
                n = true;
                break;
              }
              i += 1;
            }
            if (n) for (e.finalTransform.reset(), i = s - 1; i >= 0; i -= 1) e.finalTransform.multiply(e.transforms[i].transform.mProps.v);
            e._mdf = n;
          }, processSequences: function(e) {
            var r, i = this.sequenceList.length;
            for (r = 0; r < i; r += 1) this.processSequence(this.sequenceList[r], e);
          }, getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count;
          } };
          var lumaLoader = function() {
            var e = "__lottie_element_luma_buffer", r = null, i = null, s = null;
            function n() {
              var o = createNS("svg"), l = createNS("filter"), v = createNS("feColorMatrix");
              return l.setAttribute("id", e), v.setAttribute("type", "matrix"), v.setAttribute("color-interpolation-filters", "sRGB"), v.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), l.appendChild(v), o.appendChild(l), o.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o;
            }
            function a() {
              r || (s = n(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + e + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
            }
            function h(o) {
              return r || a(), r.width = o.width, r.height = o.height, i.filter = "url(#" + e + ")", r;
            }
            return { load: a, get: h };
          };
          function createCanvas(t, e) {
            if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
            var r = createTag("canvas");
            return r.width = t, r.height = e, r;
          }
          var assetLoader = function() {
            return { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas };
          }(), registeredEffects = {};
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
          function registerEffect(t, e) {
            registeredEffects[t] = { effect: e };
          }
          function CVMaskElement(t, e) {
            this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
            var r, i = this.masksProperties.length, s = false;
            for (r = 0; r < i; r += 1) this.masksProperties[r].mode !== "n" && (s = true), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
            this.hasMasks = s, s && this.element.addRenderableComponent(this);
          }
          CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
              var t = this.element.finalTransform.mat, e = this.element.canvasContext, r, i = this.masksProperties.length, s, n, a;
              for (e.beginPath(), r = 0; r < i; r += 1) if (this.masksProperties[r].mode !== "n") {
                this.masksProperties[r].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), a = this.viewData[r].v, s = t.applyToPointArray(a.v[0][0], a.v[0][1], 0), e.moveTo(s[0], s[1]);
                var h, o = a._length;
                for (h = 1; h < o; h += 1) n = t.applyToTriplePoints(a.o[h - 1], a.i[h], a.v[h]), e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                n = t.applyToTriplePoints(a.o[h - 1], a.i[0], a.v[0]), e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
              }
              this.element.globalData.renderer.save(true), e.clip();
            }
          }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
            this.element = null;
          };
          function CVBaseElement() {
          }
          var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
          CVBaseElement.prototype = { createElements: function() {
          }, initRendererElement: function() {
          }, createContainerElements: function() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var e = this.globalData.canvasContext, r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(r);
              var i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
          }, createContent: function() {
          }, setBlendMode: function() {
            var e = this.globalData;
            if (e.blendMode !== this.data.bm) {
              e.blendMode = this.data.bm;
              var r = getBlendMode(this.data.bm);
              e.canvasContext.globalCompositeOperation = r;
            }
          }, createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
          }, hideElement: function() {
            !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = true);
          }, showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = false, this._isFirstFrame = true, this.maskManager._isFirstFrame = true);
          }, clearCanvas: function(e) {
            e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
          }, prepareLayer: function() {
            if (this.data.tt >= 1) {
              var e = this.buffers[0], r = e.getContext("2d");
              this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
            }
          }, exitLayer: function() {
            if (this.data.tt >= 1) {
              var e = this.buffers[1], r = e.getContext("2d");
              this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
              var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
              if (i.renderFrame(true), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var s = assetLoader.getLumaCanvas(this.canvasContext.canvas), n = s.getContext("2d");
                n.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0);
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
            }
          }, renderFrame: function(e) {
            if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var r = this.data.ty === 0;
              this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(true), this._isFirstFrame && (this._isFirstFrame = false);
            }
          }, destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
          }, mHelper: new Matrix() }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
          function CVShapeData(t, e, r, i) {
            this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
            var s = 4;
            e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
            var n, a = r.length, h;
            for (n = 0; n < a; n += 1) r[n].closed || (h = { transforms: i.addTransformSequence(r[n].transforms), trNodes: [] }, this.styledShapes.push(h), r[n].elements.push(h));
          }
          CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
          function CVShapeElement(t, e, r) {
            this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, r);
          }
          extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
          }, CVShapeElement.prototype.createStyleElement = function(t, e) {
            var r = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: t.hd === true }, i = {};
            if (t.ty === "fl" || t.ty === "st" ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), t.ty === "st" || t.ty === "gs") {
              if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                var s = new DashProperty(this, t.d, "canvas", this);
                i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
              }
            } else r.r = t.r === 2 ? "evenodd" : "nonzero";
            return this.stylesList.push(r), i.style = r, i;
          }, CVShapeElement.prototype.createGroupElement = function() {
            var t = { it: [], prevViewData: [] };
            return t;
          }, CVShapeElement.prototype.createTransformElement = function(t) {
            var e = { transform: { opacity: 1, _opMdf: false, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, 0.01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } };
            return e;
          }, CVShapeElement.prototype.createShapeElement = function(t) {
            var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(e), this.addShapeToModifiers(e), e;
          }, CVShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = true;
            var t, e = this.itemsData.length;
            for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
          }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
            var e, r = this.stylesList.length;
            for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
          }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var t, e = this.stylesList.length;
            for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop();
          }, CVShapeElement.prototype.closeStyles = function(t) {
            var e, r = t.length;
            for (e = 0; e < r; e += 1) t[e].closed = true;
          }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
            var n, a = t.length - 1, h, o, l = [], v = [], E, p, b, g = [].concat(s);
            for (n = a; n >= 0; n -= 1) {
              if (E = this.searchProcessedElement(t[n]), E ? e[n] = r[E - 1] : t[n]._shouldRender = i, t[n].ty === "fl" || t[n].ty === "st" || t[n].ty === "gf" || t[n].ty === "gs") E ? e[n].style.closed = false : e[n] = this.createStyleElement(t[n], g), l.push(e[n].style);
              else if (t[n].ty === "gr") {
                if (!E) e[n] = this.createGroupElement(t[n]);
                else for (o = e[n].it.length, h = 0; h < o; h += 1) e[n].prevViewData[h] = e[n].it[h];
                this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, i, g);
              } else t[n].ty === "tr" ? (E || (b = this.createTransformElement(t[n]), e[n] = b), g.push(e[n]), this.addTransformToStyleList(e[n])) : t[n].ty === "sh" || t[n].ty === "rc" || t[n].ty === "el" || t[n].ty === "sr" ? E || (e[n] = this.createShapeElement(t[n])) : t[n].ty === "tm" || t[n].ty === "rd" || t[n].ty === "pb" || t[n].ty === "zz" || t[n].ty === "op" ? (E ? (p = e[n], p.closed = false) : (p = ShapeModifiers.getModifier(t[n].ty), p.init(this, t[n]), e[n] = p, this.shapeModifiers.push(p)), v.push(p)) : t[n].ty === "rp" && (E ? (p = e[n], p.closed = true) : (p = ShapeModifiers.getModifier(t[n].ty), e[n] = p, p.init(this, t, n, e), this.shapeModifiers.push(p), i = false), v.push(p));
              this.addProcessedElement(t[n], n + 1);
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(l), a = v.length, n = 0; n < a; n += 1) v[n].closed = true;
          }, CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1, this.transformHelper._opMdf = false, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
          }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = true);
          }, CVShapeElement.prototype.drawLayer = function() {
            var t, e = this.stylesList.length, r, i, s, n, a, h, o = this.globalData.renderer, l = this.globalData.canvasContext, v, E;
            for (t = 0; t < e; t += 1) if (E = this.stylesList[t], v = E.type, !((v === "st" || v === "gs") && E.wi === 0 || !E.data._shouldRender || E.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
              for (o.save(), a = E.elements, v === "st" || v === "gs" ? (o.ctxStrokeStyle(v === "st" ? E.co : E.grd), o.ctxLineWidth(E.wi), o.ctxLineCap(E.lc), o.ctxLineJoin(E.lj), o.ctxMiterLimit(E.ml || 0)) : o.ctxFillStyle(v === "fl" ? E.co : E.grd), o.ctxOpacity(E.coOp), v !== "st" && v !== "gs" && l.beginPath(), o.ctxTransform(E.preTransforms.finalTransform.props), i = a.length, r = 0; r < i; r += 1) {
                for ((v === "st" || v === "gs") && (l.beginPath(), E.da && (l.setLineDash(E.da), l.lineDashOffset = E.do)), h = a[r].trNodes, n = h.length, s = 0; s < n; s += 1) h[s].t === "m" ? l.moveTo(h[s].p[0], h[s].p[1]) : h[s].t === "c" ? l.bezierCurveTo(h[s].pts[0], h[s].pts[1], h[s].pts[2], h[s].pts[3], h[s].pts[4], h[s].pts[5]) : l.closePath();
                (v === "st" || v === "gs") && (o.ctxStroke(), E.da && l.setLineDash(this.dashResetter));
              }
              v !== "st" && v !== "gs" && this.globalData.renderer.ctxFill(E.r), o.restore();
            }
          }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
            var s, n = e.length - 1, a;
            for (a = t, s = n; s >= 0; s -= 1) e[s].ty === "tr" ? (a = r[s].transform, this.renderShapeTransform(t, a)) : e[s].ty === "sh" || e[s].ty === "el" || e[s].ty === "rc" || e[s].ty === "sr" ? this.renderPath(e[s], r[s]) : e[s].ty === "fl" ? this.renderFill(e[s], r[s], a) : e[s].ty === "st" ? this.renderStroke(e[s], r[s], a) : e[s].ty === "gf" || e[s].ty === "gs" ? this.renderGradientFill(e[s], r[s], a) : e[s].ty === "gr" ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
            i && this.drawLayer();
          }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
              var r = t.trNodes, i = e.paths, s, n, a, h = i._length;
              r.length = 0;
              var o = t.transforms.finalTransform;
              for (a = 0; a < h; a += 1) {
                var l = i.shapes[a];
                if (l && l.v) {
                  for (n = l._length, s = 1; s < n; s += 1) s === 1 && r.push({ t: "m", p: o.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), r.push({ t: "c", pts: o.applyToTriplePoints(l.o[s - 1], l.i[s], l.v[s]) });
                  n === 1 && r.push({ t: "m", p: o.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), l.c && n && (r.push({ t: "c", pts: o.applyToTriplePoints(l.o[s - 1], l.i[0], l.v[0]) }), r.push({ t: "z" }));
                }
              }
              t.trNodes = r;
            }
          }, CVShapeElement.prototype.renderPath = function(t, e) {
            if (t.hd !== true && t._shouldRender) {
              var r, i = e.styledShapes.length;
              for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh);
            }
          }, CVShapeElement.prototype.renderFill = function(t, e, r) {
            var i = e.style;
            (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
          }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
            var i = e.style, s;
            if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
              var n = this.globalData.canvasContext, a = e.s.v, h = e.e.v;
              if (t.t === 1) s = n.createLinearGradient(a[0], a[1], h[0], h[1]);
              else {
                var o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2)), l = Math.atan2(h[1] - a[1], h[0] - a[0]), v = e.h.v;
                v >= 1 ? v = 0.99 : v <= -1 && (v = -0.99);
                var E = o * v, p = Math.cos(l + e.a.v) * E + a[0], b = Math.sin(l + e.a.v) * E + a[1];
                s = n.createRadialGradient(p, b, 0, a[0], a[1], o);
              }
              var g, d = t.g.p, A = e.g.c, c = 1;
              for (g = 0; g < d; g += 1) e.g._hasOpacity && e.g._collapsable && (c = e.g.o[g * 2 + 1]), s.addColorStop(A[g * 4] / 100, "rgba(" + A[g * 4 + 1] + "," + A[g * 4 + 2] + "," + A[g * 4 + 3] + "," + c + ")");
              i.grd = s;
            }
            i.coOp = e.o.v * r.opacity;
          }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
            var i = e.style, s = e.d;
            s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
          }, CVShapeElement.prototype.destroy = function() {
            this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
          };
          function CVTextElement(t, e, r) {
            this.textSpans = [], this.yOffset = 0, this.fillColorAnim = false, this.strokeColorAnim = false, this.strokeWidthAnim = false, this.stroke = false, this.fill = false, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, r);
          }
          extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = false;
            t.fc ? (e = true, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
            var r = false;
            t.sc && (r = true, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
            var i = this.globalData.fontManager.getFontByName(t.f), s, n, a = t.l, h = this.mHelper;
            this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
            var o, l, v, E, p, b, g, d, A, c, u = this.data.singleShape, f = t.tr * 1e-3 * t.finalSize, m2 = 0, x = 0, S = true, C = 0;
            for (s = 0; s < n; s += 1) {
              o = this.globalData.fontManager.getCharData(t.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), l = o && o.data || {}, h.reset(), u && a[s].n && (m2 = -f, x += t.yOffset, x += S ? 1 : 0, S = false), p = l.shapes ? l.shapes[0].it : [], g = p.length, h.scale(t.finalSize / 100, t.finalSize / 100), u && this.applyTextPropertiesToMatrix(t, h, a[s].line, m2, x), A = createSizedArray(g - 1);
              var T = 0;
              for (b = 0; b < g; b += 1) if (p[b].ty === "sh") {
                for (E = p[b].ks.k.i.length, d = p[b].ks.k, c = [], v = 1; v < E; v += 1) v === 1 && c.push(h.applyToX(d.v[0][0], d.v[0][1], 0), h.applyToY(d.v[0][0], d.v[0][1], 0)), c.push(h.applyToX(d.o[v - 1][0], d.o[v - 1][1], 0), h.applyToY(d.o[v - 1][0], d.o[v - 1][1], 0), h.applyToX(d.i[v][0], d.i[v][1], 0), h.applyToY(d.i[v][0], d.i[v][1], 0), h.applyToX(d.v[v][0], d.v[v][1], 0), h.applyToY(d.v[v][0], d.v[v][1], 0));
                c.push(h.applyToX(d.o[v - 1][0], d.o[v - 1][1], 0), h.applyToY(d.o[v - 1][0], d.o[v - 1][1], 0), h.applyToX(d.i[0][0], d.i[0][1], 0), h.applyToY(d.i[0][0], d.i[0][1], 0), h.applyToX(d.v[0][0], d.v[0][1], 0), h.applyToY(d.v[0][0], d.v[0][1], 0)), A[T] = c, T += 1;
              }
              u && (m2 += a[s].l, m2 += f), this.textSpans[C] ? this.textSpans[C].elem = A : this.textSpans[C] = { elem: A }, C += 1;
            }
          }, CVTextElement.prototype.renderInnerContent = function() {
            this.validateText();
            var t = this.canvasContext;
            t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var e, r, i, s, n, a, h = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
            r = o.length;
            var l, v = null, E = null, p = null, b, g, d = this.globalData.renderer;
            for (e = 0; e < r; e += 1) if (!o[e].n) {
              if (l = h[e], l && (d.save(), d.ctxTransform(l.p), d.ctxOpacity(l.o)), this.fill) {
                for (l && l.fc ? v !== l.fc && (d.ctxFillStyle(l.fc), v = l.fc) : v !== this.values.fill && (v = this.values.fill, d.ctxFillStyle(this.values.fill)), b = this.textSpans[e].elem, s = b.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (g = b[i], a = g.length, this.globalData.canvasContext.moveTo(g[0], g[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(g[n], g[n + 1], g[n + 2], g[n + 3], g[n + 4], g[n + 5]);
                this.globalData.canvasContext.closePath(), d.ctxFill();
              }
              if (this.stroke) {
                for (l && l.sw ? p !== l.sw && (p = l.sw, d.ctxLineWidth(l.sw)) : p !== this.values.sWidth && (p = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), l && l.sc ? E !== l.sc && (E = l.sc, d.ctxStrokeStyle(l.sc)) : E !== this.values.stroke && (E = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), b = this.textSpans[e].elem, s = b.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1) for (g = b[i], a = g.length, this.globalData.canvasContext.moveTo(g[0], g[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(g[n], g[n + 1], g[n + 2], g[n + 3], g[n + 4], g[n + 5]);
                this.globalData.canvasContext.closePath(), d.ctxStroke();
              }
              l && this.globalData.renderer.restore();
            }
          };
          function CVImageElement(t, e, r) {
            this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r);
          }
          extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
              var t = createTag("canvas");
              t.width = this.assetData.w, t.height = this.assetData.h;
              var e = t.getContext("2d"), r = this.img.width, i = this.img.height, s = r / i, n = this.assetData.w / this.assetData.h, a, h, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
              s > n && o === "xMidYMid slice" || s < n && o !== "xMidYMid slice" ? (h = i, a = h * n) : (a = r, h = a / n), e.drawImage(this.img, (r - a) / 2, (i - h) / 2, a, h, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
            }
          }, CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0);
          }, CVImageElement.prototype.destroy = function() {
            this.img = null;
          };
          function CVSolidElement(t, e, r) {
            this.initElement(t, e, r);
          }
          extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
            this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
          };
          function CanvasRendererBase() {
          }
          extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
            return new CVShapeElement(t, this.globalData, this);
          }, CanvasRendererBase.prototype.createText = function(t) {
            return new CVTextElement(t, this.globalData, this);
          }, CanvasRendererBase.prototype.createImage = function(t) {
            return new CVImageElement(t, this.globalData, this);
          }, CanvasRendererBase.prototype.createSolid = function(t) {
            return new CVSolidElement(t, this.globalData, this);
          }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
            t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
          }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
            this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
          }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
            this.canvasContext.fillStyle = t;
          }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
            this.canvasContext.strokeStyle = t;
          }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
            this.canvasContext.lineWidth = t;
          }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
            this.canvasContext.lineCap = t;
          }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
            this.canvasContext.lineJoin = t;
          }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
            this.canvasContext.miterLimit = t;
          }, CanvasRendererBase.prototype.ctxFill = function(t) {
            this.canvasContext.fill(t);
          }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
            this.canvasContext.fillRect(t, e, r, i);
          }, CanvasRendererBase.prototype.ctxStroke = function() {
            this.canvasContext.stroke();
          }, CanvasRendererBase.prototype.reset = function() {
            if (!this.renderConfig.clearCanvas) {
              this.canvasContext.restore();
              return;
            }
            this.contextData.reset();
          }, CanvasRendererBase.prototype.save = function() {
            this.canvasContext.save();
          }, CanvasRendererBase.prototype.restore = function(t) {
            if (!this.renderConfig.clearCanvas) {
              this.canvasContext.restore();
              return;
            }
            t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t);
          }, CanvasRendererBase.prototype.configAnimation = function(t) {
            if (this.animationItem.wrapper) {
              this.animationItem.container = createTag("canvas");
              var e = this.animationItem.container.style;
              e.width = "100%", e.height = "100%";
              var r = "0px 0px 0px";
              e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
            } else this.canvasContext = this.renderConfig.context;
            this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = false, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
          }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
            this.reset();
            var r, i;
            t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
            var s, n;
            if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
              var a = this.renderConfig.preserveAspectRatio.split(" "), h = a[1] || "meet", o = a[0] || "xMidYMid", l = o.substr(0, 4), v = o.substr(4);
              s = r / i, n = this.transformCanvas.w / this.transformCanvas.h, n > s && h === "meet" || n < s && h === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), l === "xMid" && (n < s && h === "meet" || n > s && h === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : l === "xMax" && (n < s && h === "meet" || n > s && h === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, v === "YMid" && (n > s && h === "meet" || n < s && h === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : v === "YMax" && (n > s && h === "meet" || n < s && h === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
            } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, true);
          }, CanvasRendererBase.prototype.destroy = function() {
            this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
            var t, e = this.layers ? this.layers.length : 0;
            for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = true;
          }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
            if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === true && !e || this.destroyed || t === -1)) {
              this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
              var r, i = this.layers.length;
              for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
              if (this.globalData._mdf) {
                for (this.renderConfig.clearCanvas === true ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1) (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                this.renderConfig.clearCanvas !== true && this.restore();
              }
            }
          }, CanvasRendererBase.prototype.buildItem = function(t) {
            var e = this.elements;
            if (!(e[t] || this.layers[t].ty === 99)) {
              var r = this.createItem(this.layers[t], this, this.globalData);
              e[t] = r, r.initExpressions();
            }
          }, CanvasRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
              var t = this.pendingElements.pop();
              t.checkParenting();
            }
          }, CanvasRendererBase.prototype.hide = function() {
            this.animationItem.container.style.display = "none";
          }, CanvasRendererBase.prototype.show = function() {
            this.animationItem.container.style.display = "block";
          };
          function CanvasContext() {
            this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
          }
          function CVContextData() {
            this.stack = [], this.cArrPos = 0, this.cTr = new Matrix();
            var t, e = 15;
            for (t = 0; t < e; t += 1) {
              var r = new CanvasContext();
              this.stack[t] = r;
            }
            this._length = e, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
          }
          CVContextData.prototype.duplicate = function() {
            var t = this._length * 2, e = 0;
            for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext();
            this._length = t;
          }, CVContextData.prototype.reset = function() {
            this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
          }, CVContextData.prototype.restore = function(t) {
            this.cArrPos -= 1;
            var e = this.stack[this.cArrPos], r = e.transform, i, s = this.cTr.props;
            for (i = 0; i < 16; i += 1) s[i] = r[i];
            if (t) {
              this.nativeContext.restore();
              var n = this.stack[this.cArrPos + 1];
              this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit;
            }
            this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit;
          }, CVContextData.prototype.save = function(t) {
            t && this.nativeContext.save();
            var e = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var r = this.stack[this.cArrPos], i;
            for (i = 0; i < 16; i += 1) r.transform[i] = e[i];
            this.cArrPos += 1;
            var s = this.stack[this.cArrPos];
            s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit;
          }, CVContextData.prototype.setOpacity = function(t) {
            this.stack[this.cArrPos].opacity = t;
          }, CVContextData.prototype.setContext = function(t) {
            this.nativeContext = t;
          }, CVContextData.prototype.fillStyle = function(t) {
            this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
          }, CVContextData.prototype.strokeStyle = function(t) {
            this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
          }, CVContextData.prototype.lineWidth = function(t) {
            this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
          }, CVContextData.prototype.lineCap = function(t) {
            this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
          }, CVContextData.prototype.lineJoin = function(t) {
            this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
          }, CVContextData.prototype.miterLimit = function(t) {
            this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
          }, CVContextData.prototype.transform = function(t) {
            this.transformMat.cloneFromProps(t);
            var e = this.cTr;
            this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
            var r = e.props;
            this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
          }, CVContextData.prototype.opacity = function(t) {
            var e = this.stack[this.cArrPos].opacity;
            e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
          }, CVContextData.prototype.fill = function(t) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
          }, CVContextData.prototype.fillRect = function(t, e, r, i) {
            this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i);
          }, CVContextData.prototype.stroke = function() {
            this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
          };
          function CVCompElement(t, e, r) {
            this.completeLayers = false, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
          }
          extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
            var t = this.canvasContext;
            t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
            var e, r = this.layers.length;
            for (e = r - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
          }, CVCompElement.prototype.destroy = function() {
            var t, e = this.layers.length;
            for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
            this.layers = null, this.elements = null;
          }, CVCompElement.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this);
          };
          function CanvasRenderer(t, e) {
            this.animationItem = t, this.renderConfig = { clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : true, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || false, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", className: e && e.className || "", id: e && e.id || "", runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: false, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = false, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
          }
          extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
            return new CVCompElement(t, this.globalData, this);
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
            var r = t.sh.v, i = t.transformers, s, n = r._length, a, h, o, l;
            if (!(n <= 1)) {
              for (s = 0; s < n - 1; s += 1) a = this.getTransformedPoint(i, r.v[s]), h = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), l = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(a, h, o, l, e);
              r.c && (a = this.getTransformedPoint(i, r.v[s]), h = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), l = this.getTransformedPoint(i, r.v[0]), this.checkBounds(a, h, o, l, e));
            }
          }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
            this.getBoundsOfCurve(t, e, r, i);
            var n = this.shapeBoundingBox;
            s.x = bmMin(n.left, s.x), s.xMax = bmMax(n.right, s.xMax), s.y = bmMin(n.top, s.y), s.yMax = bmMax(n.bottom, s.yMax);
          }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
            for (var s = [[t[0], i[0]], [t[1], i[1]]], n, a, h, o, l, v, E, p = 0; p < 2; ++p) a = 6 * t[p] - 12 * e[p] + 6 * r[p], n = -3 * t[p] + 9 * e[p] - 9 * r[p] + 3 * i[p], h = 3 * e[p] - 3 * t[p], a |= 0, n |= 0, h |= 0, n === 0 && a === 0 || (n === 0 ? (o = -h / a, o > 0 && o < 1 && s[p].push(this.calculateF(o, t, e, r, i, p))) : (l = a * a - 4 * h * n, l >= 0 && (v = (-a + bmSqrt(l)) / (2 * n), v > 0 && v < 1 && s[p].push(this.calculateF(v, t, e, r, i, p)), E = (-a - bmSqrt(l)) / (2 * n), E > 0 && E < 1 && s[p].push(this.calculateF(E, t, e, r, i, p)))));
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
            var a, h, o = t.l;
            h = o.length;
            var l, v, E, p = this.mHelper, b, g = "", d = 0;
            for (a = 0; a < h; a += 1) {
              if (this.globalData.fontManager.chars ? (this.textPaths[d] ? l = this.textPaths[d] : (l = createNS("path"), l.setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? (v = this.textSpans[d], E = v.children[0]) : (v = createTag("div"), v.style.lineHeight = 0, E = createNS("svg"), E.appendChild(l), styleDiv(v)))) : this.isMasked ? l = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (v = this.textSpans[d], l = this.textPaths[d]) : (v = createTag("span"), styleDiv(v), l = createTag("span"), styleDiv(l), v.appendChild(l)), this.globalData.fontManager.chars) {
                var A = this.globalData.fontManager.getCharData(t.finalText[a], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), c;
                if (A ? c = A.data : c = null, p.reset(), c && c.shapes && c.shapes.length && (b = c.shapes[0].it, p.scale(t.finalSize / 100, t.finalSize / 100), g = this.createPathShape(p, b), l.setAttribute("d", g)), this.isMasked) this.innerElem.appendChild(l);
                else {
                  if (this.innerElem.appendChild(v), c && c.shapes) {
                    document.body.appendChild(E);
                    var u = E.getBBox();
                    E.setAttribute("width", u.width + 2), E.setAttribute("height", u.height + 2), E.setAttribute("viewBox", u.x - 1 + " " + (u.y - 1) + " " + (u.width + 2) + " " + (u.height + 2));
                    var f = E.style, m2 = "translate(" + (u.x - 1) + "px," + (u.y - 1) + "px)";
                    f.transform = m2, f.webkitTransform = m2, o[a].yOffset = u.y - 1;
                  } else E.setAttribute("width", 1), E.setAttribute("height", 1);
                  v.appendChild(E);
                }
              } else if (l.textContent = o[a].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
              else {
                this.innerElem.appendChild(v);
                var x = l.style, S = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                x.transform = S, x.webkitTransform = S;
              }
              this.isMasked ? this.textSpans[d] = l : this.textSpans[d] = v, this.textSpans[d].style.display = "block", this.textPaths[d] = l, d += 1;
            }
            for (; d < this.textSpans.length; ) this.textSpans[d].style.display = "none", d += 1;
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
              var h, o, l;
              for (r = 0; r < i; r += 1) a[r].n ? s += 1 : (o = this.textSpans[r], l = this.textPaths[r], h = n[s], s += 1, h._mdf.m && (this.isMasked ? o.setAttribute("transform", h.m) : (o.style.webkitTransform = h.m, o.style.transform = h.m)), o.style.opacity = h.o, h.sw && h._mdf.sw && l.setAttribute("stroke-width", h.sw), h.sc && h._mdf.sc && l.setAttribute("stroke", h.sc), h.fc && h._mdf.fc && (l.setAttribute("fill", h.fc), l.style.color = h.fc));
              if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                var v = this.innerElem.getBBox();
                this.currentBBox.w !== v.width && (this.currentBBox.w = v.width, this.svgElement.setAttribute("width", v.width)), this.currentBBox.h !== v.height && (this.currentBBox.h = v.height, this.svgElement.setAttribute("height", v.height));
                var E = 1;
                if (this.currentBBox.w !== v.width + E * 2 || this.currentBBox.h !== v.height + E * 2 || this.currentBBox.x !== v.x - E || this.currentBBox.y !== v.y - E) {
                  this.currentBBox.w = v.width + E * 2, this.currentBBox.h = v.height + E * 2, this.currentBBox.x = v.x - E, this.currentBBox.y = v.y - E, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
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
              var n = this.pe.v + "px", a = "0px 0px 0px", h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              i.perspective = n, i.webkitPerspective = n, s.transformOrigin = a, s.mozTransformOrigin = a, s.webkitTransformOrigin = a, i.transform = h, i.webkitTransform = h;
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
                var n = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), a = [s[0] / n, s[1] / n, s[2] / n], h = Math.sqrt(a[2] * a[2] + a[0] * a[0]), o = Math.atan2(a[1], h), l = Math.atan2(a[0], -a[2]);
                this.mat.rotateY(l).rotateX(-o);
              }
              this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
              var v = !this._prevMat.equals(this.mat);
              if ((v || this.pe._mdf) && this.comp.threeDElements) {
                r = this.comp.threeDElements.length;
                var E, p, b;
                for (e = 0; e < r; e += 1) if (E = this.comp.threeDElements[e], E.type === "3d") {
                  if (v) {
                    var g = this.mat.toCSS();
                    b = E.container.style, b.transform = g, b.webkitTransform = g;
                  }
                  this.pe._mdf && (p = E.perspectiveElem.style, p.perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px");
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
                for (var s = 0, n, a, h; s < e; ) this.elements[s] && this.elements[s] !== true && this.elements[s].getBaseElement && (a = this.elements[s], h = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement(), n = h || n), s += 1;
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
              var h = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              s.transform = h, s.webkitTransform = h;
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
            var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, r = t / e, i = this.globalData.compSize.w / this.globalData.compSize.h, s, n, a, h;
            i > r ? (s = t / this.globalData.compSize.w, n = t / this.globalData.compSize.w, a = 0, h = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h, n = e / this.globalData.compSize.h, a = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, h = 0);
            var o = this.resizerElem.style;
            o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + n + ",0,0,0,0,1,0," + a + "," + h + ",0,1)", o.transform = o.webkitTransform;
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
          };
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
            var r = this, i = 256, s = 6, n = 52, a = "random", h = e.pow(i, s), o = e.pow(2, n), l = o * 2, v = i - 1, E;
            function p(f, m2, x) {
              var S = [];
              m2 = m2 === true ? { entropy: true } : m2 || {};
              var C = A(d(m2.entropy ? [f, u(t)] : f === null ? c() : f, 3), S), T = new b(S), F = function() {
                for (var L = T.g(s), I = h, D = 0; L < o; ) L = (L + D) * i, I *= i, D = T.g(1);
                for (; L >= l; ) L /= 2, I /= 2, D >>>= 1;
                return (L + D) / I;
              };
              return F.int32 = function() {
                return T.g(4) | 0;
              }, F.quick = function() {
                return T.g(4) / 4294967296;
              }, F.double = F, A(u(T.S), t), (m2.pass || x || function(V, L, I, D) {
                return D && (D.S && g(D, T), V.state = function() {
                  return g(T, {});
                }), I ? (e[a] = V, L) : V;
              })(F, C, "global" in m2 ? m2.global : this == e, m2.state);
            }
            e["seed" + a] = p;
            function b(f) {
              var m2, x = f.length, S = this, C = 0, T = S.i = S.j = 0, F = S.S = [];
              for (x || (f = [x++]); C < i; ) F[C] = C++;
              for (C = 0; C < i; C++) F[C] = F[T = v & T + f[C % x] + (m2 = F[C])], F[T] = m2;
              S.g = function(V) {
                for (var L, I = 0, D = S.i, B = S.j, R = S.S; V--; ) L = R[D = v & D + 1], I = I * i + R[v & (R[D] = R[B = v & B + L]) + (R[B] = L)];
                return S.i = D, S.j = B, I;
              };
            }
            function g(f, m2) {
              return m2.i = f.i, m2.j = f.j, m2.S = f.S.slice(), m2;
            }
            function d(f, m2) {
              var x = [], S = _typeof$2(f), C;
              if (m2 && S == "object") for (C in f) try {
                x.push(d(f[C], m2 - 1));
              } catch {
              }
              return x.length ? x : S == "string" ? f : f + "\0";
            }
            function A(f, m2) {
              for (var x = f + "", S, C = 0; C < x.length; ) m2[v & C] = v & (S ^= m2[v & C] * 19) + x.charCodeAt(C++);
              return u(m2);
            }
            function c() {
              try {
                if (E) ;
                var f = new Uint8Array(i);
                return (r.crypto || r.msCrypto).getRandomValues(f), u(f);
              } catch {
                var m2 = r.navigator, x = m2 && m2.plugins;
                return [+/* @__PURE__ */ new Date(), r, x, r.screen, u(t)];
              }
            }
            function u(f) {
              return String.fromCharCode.apply(0, f);
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
                for (var s = 0, n = t.length, a = e.length, h = []; s < n || s < a; ) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? h[s] = t[s] + e[s] : h[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                return h;
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
                for (var s = 0, n = t.length, a = e.length, h = []; s < n || s < a; ) (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? h[s] = t[s] - e[s] : h[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
                return h;
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
              var e = t[0], r = t[1], i = t[2], s = Math.max(e, r, i), n = Math.min(e, r, i), a, h, o = (s + n) / 2;
              if (s === n) a = 0, h = 0;
              else {
                var l = s - n;
                switch (h = o > 0.5 ? l / (2 - s - n) : l / (s + n), s) {
                  case e:
                    a = (r - i) / l + (r < i ? 6 : 0);
                    break;
                  case r:
                    a = (i - e) / l + 2;
                    break;
                  case i:
                    a = (e - r) / l + 4;
                    break;
                }
                a /= 6;
              }
              return [a, h, o, t[3]];
            }
            function hue2rgb(t, e, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
            }
            function hslToRgb(t) {
              var e = t[0], r = t[1], i = t[2], s, n, a;
              if (r === 0) s = i, a = i, n = i;
              else {
                var h = i < 0.5 ? i * (1 + r) : i + r - i * r, o = 2 * i - h;
                s = hue2rgb(o, h, e + 1 / 3), n = hue2rgb(o, h, e), a = hue2rgb(o, h, e - 1 / 3);
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
              var h, o = i.length, l = createTypedArray("float32", o);
              for (h = 0; h < o; h += 1) l[h] = i[h] + (s[h] - i[h]) * a;
              return l;
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
              var h = [0, 0], o, l;
              for (s = 0; s < n; s += 1) o = e && e[s] ? e[s] : h, l = r && r[s] ? r[s] : h, a.setTripleAt(t[s][0], t[s][1], l[0] + t[s][0], l[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, true);
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
                var h = Math.floor(time * e);
                for (i = 0, s = 0; i < h; ) {
                  for (s = 0; s < n; s += 1) a[s] += -r + r * 2 * BMMath.random();
                  i += 1;
                }
                var o = time * e, l = o - Math.floor(o), v = createTypedArray("float32", n);
                if (n > 1) {
                  for (s = 0; s < n; s += 1) v[s] = this.pv[s] + a[s] + (-r + r * 2 * BMMath.random()) * l;
                  return v;
                }
                return this.pv + a[0] + (-r + r * 2 * BMMath.random()) * l;
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
                  var h, o = s.length, l = createTypedArray("float32", o);
                  for (h = 0; h < o; h += 1) l[h] = (n[h] - s[h]) * a + s[h];
                  return l;
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
              function h(l) {
                s.indexOf(l) === -1 && s.push(l);
              }
              function o() {
                var l, v = s.length;
                for (l = 0; l < v; l += 1) s[l].release();
                s.length = 0;
              }
              r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = n, r.renderer.globalData.popExpression = a, r.renderer.globalData.registerExpressionProperty = h;
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
              var h = function(l) {
                for (n = 0; n < a; ) {
                  if (i.masksProperties[n].nm === l) return s[n];
                  n += 1;
                }
                return null;
              };
              return h;
            };
            return e;
          }(), ExpressionPropertyInterface = /* @__PURE__ */ function() {
            var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
            function r(a, h, o) {
              Object.defineProperty(a, "velocity", { get: function() {
                return h.getVelocityAtTime(h.comp.currentFrame);
              } }), a.numKeys = h.keyframes ? h.keyframes.length : 0, a.key = function(l) {
                if (!a.numKeys) return 0;
                var v = "";
                "s" in h.keyframes[l - 1] ? v = h.keyframes[l - 1].s : "e" in h.keyframes[l - 2] ? v = h.keyframes[l - 2].e : v = h.keyframes[l - 2].s;
                var E = o === "unidimensional" ? new Number(v) : Object.assign({}, v);
                return E.time = h.keyframes[l - 1].t / h.elem.comp.globalData.frameRate, E.value = o === "unidimensional" ? v[0] : v, E;
              }, a.valueAtTime = h.getValueAtTime, a.speedAtTime = h.getSpeedAtTime, a.velocityAtTime = h.getVelocityAtTime, a.propertyGroup = h.propertyGroup;
            }
            function i(a) {
              (!a || !("pv" in a)) && (a = t);
              var h = 1 / a.mult, o = a.pv * h, l = new Number(o);
              return l.value = o, r(l, a, "unidimensional"), function() {
                return a.k && a.getValue(), o = a.v * h, l.value !== o && (l = new Number(o), l.value = o, r(l, a, "unidimensional")), l;
              };
            }
            function s(a) {
              (!a || !("pv" in a)) && (a = e);
              var h = 1 / a.mult, o = a.data && a.data.l || a.pv.length, l = createTypedArray("float32", o), v = createTypedArray("float32", o);
              return l.value = v, r(l, a, "multidimensional"), function() {
                a.k && a.getValue();
                for (var E = 0; E < o; E += 1) v[E] = a.v[E] * h, l[E] = v[E];
                return l;
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
            function t(l) {
              var v = new Matrix();
              if (l !== void 0) {
                var E = this._elem.finalTransform.mProp.getValueAtTime(l);
                E.clone(v);
              } else {
                var p = this._elem.finalTransform.mProp;
                p.applyToMatrix(v);
              }
              return v;
            }
            function e(l, v) {
              var E = this.getMatrix(v);
              return E.props[12] = 0, E.props[13] = 0, E.props[14] = 0, this.applyPoint(E, l);
            }
            function r(l, v) {
              var E = this.getMatrix(v);
              return this.applyPoint(E, l);
            }
            function i(l, v) {
              var E = this.getMatrix(v);
              return E.props[12] = 0, E.props[13] = 0, E.props[14] = 0, this.invertPoint(E, l);
            }
            function s(l, v) {
              var E = this.getMatrix(v);
              return this.invertPoint(E, l);
            }
            function n(l, v) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var E, p = this._elem.hierarchy.length;
                for (E = 0; E < p; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(l);
              }
              return l.applyToPointArray(v[0], v[1], v[2] || 0);
            }
            function a(l, v) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var E, p = this._elem.hierarchy.length;
                for (E = 0; E < p; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(l);
              }
              return l.inversePoint(v);
            }
            function h(l) {
              var v = new Matrix();
              if (v.reset(), this._elem.finalTransform.mProp.applyToMatrix(v), this._elem.hierarchy && this._elem.hierarchy.length) {
                var E, p = this._elem.hierarchy.length;
                for (E = 0; E < p; E += 1) this._elem.hierarchy[E].finalTransform.mProp.applyToMatrix(v);
                return v.inversePoint(l);
              }
              return v.inversePoint(l);
            }
            function o() {
              return [1, 1, 1, 1];
            }
            return function(l) {
              var v;
              function E(d) {
                b.mask = new MaskManagerInterface(d, l);
              }
              function p(d) {
                b.effect = d;
              }
              function b(d) {
                switch (d) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return b.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return v;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return b.effect;
                  case "ADBE Text Properties":
                    return b.textInterface;
                  default:
                    return null;
                }
              }
              b.getMatrix = t, b.invertPoint = a, b.applyPoint = n, b.toWorld = r, b.toWorldVec = e, b.fromWorld = s, b.fromWorldVec = i, b.toComp = r, b.fromComp = h, b.sampleImage = o, b.sourceRectAtTime = l.sourceRectAtTime.bind(l), b._elem = l, v = TransformExpressionInterface(l.finalTransform.mProp);
              var g = getDescriptor(v, "anchorPoint");
              return Object.defineProperties(b, { hasParent: { get: function() {
                return l.hierarchy.length;
              } }, parent: { get: function() {
                return l.hierarchy[0].layerInterface;
              } }, rotation: getDescriptor(v, "rotation"), scale: getDescriptor(v, "scale"), position: getDescriptor(v, "position"), opacity: getDescriptor(v, "opacity"), anchorPoint: g, anchor_point: g, transform: { get: function() {
                return v;
              } }, active: { get: function() {
                return l.isInRange;
              } } }), b.startTime = l.data.st, b.index = l.data.ind, b.source = l.data.refId, b.height = l.data.ty === 0 ? l.data.h : 100, b.width = l.data.ty === 0 ? l.data.w : 100, b.inPoint = l.data.ip / l.comp.globalData.frameRate, b.outPoint = l.data.op / l.comp.globalData.frameRate, b._name = l.data.nm, b.registerMaskInterface = E, b.registerEffectsInterface = p, b;
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
                var a = [], h = s.data.ef, o, l = s.effectsManager.effectElements.length;
                for (o = 0; o < l; o += 1) a.push(r(h[o], s.effectsManager.effectElements[o], n, s));
                var v = s.data.ef || [], E = function(b) {
                  for (o = 0, l = v.length; o < l; ) {
                    if (b === v[o].nm || b === v[o].mn || b === v[o].ix) return a[o];
                    o += 1;
                  }
                  return null;
                };
                return Object.defineProperty(E, "numProperties", { get: function() {
                  return v.length;
                } }), E;
              }
              return null;
            }
            function r(s, n, a, h) {
              function o(b) {
                for (var g = s.ef, d = 0, A = g.length; d < A; ) {
                  if (b === g[d].nm || b === g[d].mn || b === g[d].ix) return g[d].ty === 5 ? v[d] : v[d]();
                  d += 1;
                }
                throw new Error();
              }
              var l = propertyGroupFactory(o, a), v = [], E, p = s.ef.length;
              for (E = 0; E < p; E += 1) s.ef[E].ty === 5 ? v.push(r(s.ef[E], n.effectElements[E], n.effectElements[E].propertyGroup, h)) : v.push(i(n.effectElements[E], s.ef[E].ty, h, l));
              return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", { get: function() {
                return v[0]();
              } }), Object.defineProperties(o, { numProperties: { get: function() {
                return s.np;
              } }, _name: { value: s.nm }, propertyGroup: { value: l } }), o.enabled = s.en !== 0, o.active = o.enabled, o;
            }
            function i(s, n, a, h) {
              var o = ExpressionPropertyInterface(s.p);
              function l() {
                return n === 10 ? a.comp.compInterface(s.p.v) : o();
              }
              return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", h)), l;
            }
            return t;
          }(), ShapePathInterface = /* @__PURE__ */ function() {
            return function(e, r, i) {
              var s = r.sh;
              function n(h) {
                return h === "Shape" || h === "shape" || h === "Path" || h === "path" || h === "ADBE Vector Shape" || h === 2 ? n.path : null;
              }
              var a = propertyGroupFactory(n, i);
              return s.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, { path: { get: function() {
                return s.k && s.getValue(), s;
              } }, shape: { get: function() {
                return s.k && s.getValue(), s;
              } }, _name: { value: e.nm }, ix: { value: e.ix }, propertyIndex: { value: e.ix }, mn: { value: e.mn }, propertyGroup: { value: i } }), n;
            };
          }(), ShapeExpressionInterface = /* @__PURE__ */ function() {
            function t(g, d, A) {
              var c = [], u, f = g ? g.length : 0;
              for (u = 0; u < f; u += 1) g[u].ty === "gr" ? c.push(r(g[u], d[u], A)) : g[u].ty === "fl" ? c.push(i(g[u], d[u], A)) : g[u].ty === "st" ? c.push(a(g[u], d[u], A)) : g[u].ty === "tm" ? c.push(h(g[u], d[u], A)) : g[u].ty === "tr" || (g[u].ty === "el" ? c.push(l(g[u], d[u], A)) : g[u].ty === "sr" ? c.push(v(g[u], d[u], A)) : g[u].ty === "sh" ? c.push(ShapePathInterface(g[u], d[u], A)) : g[u].ty === "rc" ? c.push(E(g[u], d[u], A)) : g[u].ty === "rd" ? c.push(p(g[u], d[u], A)) : g[u].ty === "rp" ? c.push(b(g[u], d[u], A)) : g[u].ty === "gf" ? c.push(s(g[u], d[u], A)) : c.push(n(g[u], d[u])));
              return c;
            }
            function e(g, d, A) {
              var c, u = function(x) {
                for (var S = 0, C = c.length; S < C; ) {
                  if (c[S]._name === x || c[S].mn === x || c[S].propertyIndex === x || c[S].ix === x || c[S].ind === x) return c[S];
                  S += 1;
                }
                return typeof x == "number" ? c[x - 1] : null;
              };
              u.propertyGroup = propertyGroupFactory(u, A), c = t(g.it, d.it, u.propertyGroup), u.numProperties = c.length;
              var f = o(g.it[g.it.length - 1], d.it[d.it.length - 1], u.propertyGroup);
              return u.transform = f, u.propertyIndex = g.cix, u._name = g.nm, u;
            }
            function r(g, d, A) {
              var c = function(x) {
                switch (x) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return c.content;
                  default:
                    return c.transform;
                }
              };
              c.propertyGroup = propertyGroupFactory(c, A);
              var u = e(g, d, c.propertyGroup), f = o(g.it[g.it.length - 1], d.it[d.it.length - 1], c.propertyGroup);
              return c.content = u, c.transform = f, Object.defineProperty(c, "_name", { get: function() {
                return g.nm;
              } }), c.numProperties = g.np, c.propertyIndex = g.ix, c.nm = g.nm, c.mn = g.mn, c;
            }
            function i(g, d, A) {
              function c(u) {
                return u === "Color" || u === "color" ? c.color : u === "Opacity" || u === "opacity" ? c.opacity : null;
              }
              return Object.defineProperties(c, { color: { get: ExpressionPropertyInterface(d.c) }, opacity: { get: ExpressionPropertyInterface(d.o) }, _name: { value: g.nm }, mn: { value: g.mn } }), d.c.setGroupProperty(PropertyInterface("Color", A)), d.o.setGroupProperty(PropertyInterface("Opacity", A)), c;
            }
            function s(g, d, A) {
              function c(u) {
                return u === "Start Point" || u === "start point" ? c.startPoint : u === "End Point" || u === "end point" ? c.endPoint : u === "Opacity" || u === "opacity" ? c.opacity : null;
              }
              return Object.defineProperties(c, { startPoint: { get: ExpressionPropertyInterface(d.s) }, endPoint: { get: ExpressionPropertyInterface(d.e) }, opacity: { get: ExpressionPropertyInterface(d.o) }, type: { get: function() {
                return "a";
              } }, _name: { value: g.nm }, mn: { value: g.mn } }), d.s.setGroupProperty(PropertyInterface("Start Point", A)), d.e.setGroupProperty(PropertyInterface("End Point", A)), d.o.setGroupProperty(PropertyInterface("Opacity", A)), c;
            }
            function n() {
              function g() {
                return null;
              }
              return g;
            }
            function a(g, d, A) {
              var c = propertyGroupFactory(C, A), u = propertyGroupFactory(S, c);
              function f(T) {
                Object.defineProperty(S, g.d[T].nm, { get: ExpressionPropertyInterface(d.d.dataProps[T].p) });
              }
              var m2, x = g.d ? g.d.length : 0, S = {};
              for (m2 = 0; m2 < x; m2 += 1) f(m2), d.d.dataProps[m2].p.setGroupProperty(u);
              function C(T) {
                return T === "Color" || T === "color" ? C.color : T === "Opacity" || T === "opacity" ? C.opacity : T === "Stroke Width" || T === "stroke width" ? C.strokeWidth : null;
              }
              return Object.defineProperties(C, { color: { get: ExpressionPropertyInterface(d.c) }, opacity: { get: ExpressionPropertyInterface(d.o) }, strokeWidth: { get: ExpressionPropertyInterface(d.w) }, dash: { get: function() {
                return S;
              } }, _name: { value: g.nm }, mn: { value: g.mn } }), d.c.setGroupProperty(PropertyInterface("Color", c)), d.o.setGroupProperty(PropertyInterface("Opacity", c)), d.w.setGroupProperty(PropertyInterface("Stroke Width", c)), C;
            }
            function h(g, d, A) {
              function c(f) {
                return f === g.e.ix || f === "End" || f === "end" ? c.end : f === g.s.ix ? c.start : f === g.o.ix ? c.offset : null;
              }
              var u = propertyGroupFactory(c, A);
              return c.propertyIndex = g.ix, d.s.setGroupProperty(PropertyInterface("Start", u)), d.e.setGroupProperty(PropertyInterface("End", u)), d.o.setGroupProperty(PropertyInterface("Offset", u)), c.propertyIndex = g.ix, c.propertyGroup = A, Object.defineProperties(c, { start: { get: ExpressionPropertyInterface(d.s) }, end: { get: ExpressionPropertyInterface(d.e) }, offset: { get: ExpressionPropertyInterface(d.o) }, _name: { value: g.nm } }), c.mn = g.mn, c;
            }
            function o(g, d, A) {
              function c(f) {
                return g.a.ix === f || f === "Anchor Point" ? c.anchorPoint : g.o.ix === f || f === "Opacity" ? c.opacity : g.p.ix === f || f === "Position" ? c.position : g.r.ix === f || f === "Rotation" || f === "ADBE Vector Rotation" ? c.rotation : g.s.ix === f || f === "Scale" ? c.scale : g.sk && g.sk.ix === f || f === "Skew" ? c.skew : g.sa && g.sa.ix === f || f === "Skew Axis" ? c.skewAxis : null;
              }
              var u = propertyGroupFactory(c, A);
              return d.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", u)), d.transform.mProps.p.setGroupProperty(PropertyInterface("Position", u)), d.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", u)), d.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", u)), d.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", u)), d.transform.mProps.sk && (d.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", u)), d.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", u))), d.transform.op.setGroupProperty(PropertyInterface("Opacity", u)), Object.defineProperties(c, { opacity: { get: ExpressionPropertyInterface(d.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(d.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(d.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(d.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(d.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(d.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(d.transform.mProps.sa) }, _name: { value: g.nm } }), c.ty = "tr", c.mn = g.mn, c.propertyGroup = A, c;
            }
            function l(g, d, A) {
              function c(m2) {
                return g.p.ix === m2 ? c.position : g.s.ix === m2 ? c.size : null;
              }
              var u = propertyGroupFactory(c, A);
              c.propertyIndex = g.ix;
              var f = d.sh.ty === "tm" ? d.sh.prop : d.sh;
              return f.s.setGroupProperty(PropertyInterface("Size", u)), f.p.setGroupProperty(PropertyInterface("Position", u)), Object.defineProperties(c, { size: { get: ExpressionPropertyInterface(f.s) }, position: { get: ExpressionPropertyInterface(f.p) }, _name: { value: g.nm } }), c.mn = g.mn, c;
            }
            function v(g, d, A) {
              function c(m2) {
                return g.p.ix === m2 ? c.position : g.r.ix === m2 ? c.rotation : g.pt.ix === m2 ? c.points : g.or.ix === m2 || m2 === "ADBE Vector Star Outer Radius" ? c.outerRadius : g.os.ix === m2 ? c.outerRoundness : g.ir && (g.ir.ix === m2 || m2 === "ADBE Vector Star Inner Radius") ? c.innerRadius : g.is && g.is.ix === m2 ? c.innerRoundness : null;
              }
              var u = propertyGroupFactory(c, A), f = d.sh.ty === "tm" ? d.sh.prop : d.sh;
              return c.propertyIndex = g.ix, f.or.setGroupProperty(PropertyInterface("Outer Radius", u)), f.os.setGroupProperty(PropertyInterface("Outer Roundness", u)), f.pt.setGroupProperty(PropertyInterface("Points", u)), f.p.setGroupProperty(PropertyInterface("Position", u)), f.r.setGroupProperty(PropertyInterface("Rotation", u)), g.ir && (f.ir.setGroupProperty(PropertyInterface("Inner Radius", u)), f.is.setGroupProperty(PropertyInterface("Inner Roundness", u))), Object.defineProperties(c, { position: { get: ExpressionPropertyInterface(f.p) }, rotation: { get: ExpressionPropertyInterface(f.r) }, points: { get: ExpressionPropertyInterface(f.pt) }, outerRadius: { get: ExpressionPropertyInterface(f.or) }, outerRoundness: { get: ExpressionPropertyInterface(f.os) }, innerRadius: { get: ExpressionPropertyInterface(f.ir) }, innerRoundness: { get: ExpressionPropertyInterface(f.is) }, _name: { value: g.nm } }), c.mn = g.mn, c;
            }
            function E(g, d, A) {
              function c(m2) {
                return g.p.ix === m2 ? c.position : g.r.ix === m2 ? c.roundness : g.s.ix === m2 || m2 === "Size" || m2 === "ADBE Vector Rect Size" ? c.size : null;
              }
              var u = propertyGroupFactory(c, A), f = d.sh.ty === "tm" ? d.sh.prop : d.sh;
              return c.propertyIndex = g.ix, f.p.setGroupProperty(PropertyInterface("Position", u)), f.s.setGroupProperty(PropertyInterface("Size", u)), f.r.setGroupProperty(PropertyInterface("Rotation", u)), Object.defineProperties(c, { position: { get: ExpressionPropertyInterface(f.p) }, roundness: { get: ExpressionPropertyInterface(f.r) }, size: { get: ExpressionPropertyInterface(f.s) }, _name: { value: g.nm } }), c.mn = g.mn, c;
            }
            function p(g, d, A) {
              function c(m2) {
                return g.r.ix === m2 || m2 === "Round Corners 1" ? c.radius : null;
              }
              var u = propertyGroupFactory(c, A), f = d;
              return c.propertyIndex = g.ix, f.rd.setGroupProperty(PropertyInterface("Radius", u)), Object.defineProperties(c, { radius: { get: ExpressionPropertyInterface(f.rd) }, _name: { value: g.nm } }), c.mn = g.mn, c;
            }
            function b(g, d, A) {
              function c(m2) {
                return g.c.ix === m2 || m2 === "Copies" ? c.copies : g.o.ix === m2 || m2 === "Offset" ? c.offset : null;
              }
              var u = propertyGroupFactory(c, A), f = d;
              return c.propertyIndex = g.ix, f.c.setGroupProperty(PropertyInterface("Copies", u)), f.o.setGroupProperty(PropertyInterface("Offset", u)), Object.defineProperties(c, { copies: { get: ExpressionPropertyInterface(f.c) }, offset: { get: ExpressionPropertyInterface(f.o) }, _name: { value: g.nm } }), c.mn = g.mn, c;
            }
            return function(g, d, A) {
              var c;
              function u(m2) {
                if (typeof m2 == "number") return m2 = m2 === void 0 ? 1 : m2, m2 === 0 ? A : c[m2 - 1];
                for (var x = 0, S = c.length; x < S; ) {
                  if (c[x]._name === m2) return c[x];
                  x += 1;
                }
                return null;
              }
              function f() {
                return A;
              }
              return u.propertyGroup = propertyGroupFactory(u, f), c = t(g, d, u.propertyGroup), u.numProperties = c.length, u._name = "Contents", u;
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
                return s = "", n = i.getFootageData(), h;
              }
              function h(o) {
                if (n[o]) return s = o, n = n[o], _typeof(n) === "object" ? h : n;
                var l = o.indexOf(s);
                if (l !== -1) {
                  var v = parseInt(o.substr(l + s.length), 10);
                  return n = n[v], _typeof(n) === "object" ? h : n;
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
            function t(a, h, o) {
              h.x && (o.k = true, o.x = true, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(a, h, o).bind(o)));
            }
            function e(a) {
              return a *= this.elem.globalData.frameRate, a -= this.offsetTime, a !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < a ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(a, this._cachingAtTime), this._cachingAtTime.lastFrame = a), this._cachingAtTime.value;
            }
            function r(a) {
              var h = -0.01, o = this.getValueAtTime(a), l = this.getValueAtTime(a + h), v = 0;
              if (o.length) {
                var E;
                for (E = 0; E < o.length; E += 1) v += Math.pow(l[E] - o[E], 2);
                v = Math.sqrt(v) * 100;
              } else v = 0;
              return v;
            }
            function i(a) {
              if (this.vel !== void 0) return this.vel;
              var h = -1e-3, o = this.getValueAtTime(a), l = this.getValueAtTime(a + h), v;
              if (o.length) {
                v = createTypedArray("float32", o.length);
                var E;
                for (E = 0; E < o.length; E += 1) v[E] = (l[E] - o[E]) / h;
              } else v = (l - o) / h;
              return v;
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
            function t(p, b, g) {
              if (!this.k || !this.keyframes) return this.pv;
              p = p ? p.toLowerCase() : "";
              var d = this.comp.renderedFrame, A = this.keyframes, c = A[A.length - 1].t;
              if (d <= c) return this.pv;
              var u, f;
              g ? (b ? u = Math.abs(c - this.elem.comp.globalData.frameRate * b) : u = Math.max(0, c - this.elem.data.ip), f = c - u) : ((!b || b > A.length - 1) && (b = A.length - 1), f = A[A.length - 1 - b].t, u = c - f);
              var m2, x, S;
              if (p === "pingpong") {
                var C = Math.floor((d - f) / u);
                if (C % 2 !== 0) return this.getValueAtTime((u - (d - f) % u + f) / this.comp.globalData.frameRate, 0);
              } else if (p === "offset") {
                var T = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), F = this.getValueAtTime(c / this.comp.globalData.frameRate, 0), V = this.getValueAtTime(((d - f) % u + f) / this.comp.globalData.frameRate, 0), L = Math.floor((d - f) / u);
                if (this.pv.length) {
                  for (S = new Array(T.length), x = S.length, m2 = 0; m2 < x; m2 += 1) S[m2] = (F[m2] - T[m2]) * L + V[m2];
                  return S;
                }
                return (F - T) * L + V;
              } else if (p === "continue") {
                var I = this.getValueAtTime(c / this.comp.globalData.frameRate, 0), D = this.getValueAtTime((c - 1e-3) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (S = new Array(I.length), x = S.length, m2 = 0; m2 < x; m2 += 1) S[m2] = I[m2] + (I[m2] - D[m2]) * ((d - c) / this.comp.globalData.frameRate) / 5e-4;
                  return S;
                }
                return I + (I - D) * ((d - c) / 1e-3);
              }
              return this.getValueAtTime(((d - f) % u + f) / this.comp.globalData.frameRate, 0);
            }
            function e(p, b, g) {
              if (!this.k) return this.pv;
              p = p ? p.toLowerCase() : "";
              var d = this.comp.renderedFrame, A = this.keyframes, c = A[0].t;
              if (d >= c) return this.pv;
              var u, f;
              g ? (b ? u = Math.abs(this.elem.comp.globalData.frameRate * b) : u = Math.max(0, this.elem.data.op - c), f = c + u) : ((!b || b > A.length - 1) && (b = A.length - 1), f = A[b].t, u = f - c);
              var m2, x, S;
              if (p === "pingpong") {
                var C = Math.floor((c - d) / u);
                if (C % 2 === 0) return this.getValueAtTime(((c - d) % u + c) / this.comp.globalData.frameRate, 0);
              } else if (p === "offset") {
                var T = this.getValueAtTime(c / this.comp.globalData.frameRate, 0), F = this.getValueAtTime(f / this.comp.globalData.frameRate, 0), V = this.getValueAtTime((u - (c - d) % u + c) / this.comp.globalData.frameRate, 0), L = Math.floor((c - d) / u) + 1;
                if (this.pv.length) {
                  for (S = new Array(T.length), x = S.length, m2 = 0; m2 < x; m2 += 1) S[m2] = V[m2] - (F[m2] - T[m2]) * L;
                  return S;
                }
                return V - (F - T) * L;
              } else if (p === "continue") {
                var I = this.getValueAtTime(c / this.comp.globalData.frameRate, 0), D = this.getValueAtTime((c + 1e-3) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (S = new Array(I.length), x = S.length, m2 = 0; m2 < x; m2 += 1) S[m2] = I[m2] + (I[m2] - D[m2]) * (c - d) / 1e-3;
                  return S;
                }
                return I + (I - D) * (c - d) / 1e-3;
              }
              return this.getValueAtTime((u - ((c - d) % u + c)) / this.comp.globalData.frameRate, 0);
            }
            function r(p, b) {
              if (!this.k) return this.pv;
              if (p = (p || 0.4) * 0.5, b = Math.floor(b || 5), b <= 1) return this.pv;
              var g = this.comp.renderedFrame / this.comp.globalData.frameRate, d = g - p, A = g + p, c = b > 1 ? (A - d) / (b - 1) : 1, u = 0, f = 0, m2;
              this.pv.length ? m2 = createTypedArray("float32", this.pv.length) : m2 = 0;
              for (var x; u < b; ) {
                if (x = this.getValueAtTime(d + u * c), this.pv.length) for (f = 0; f < this.pv.length; f += 1) m2[f] += x[f];
                else m2 += x;
                u += 1;
              }
              if (this.pv.length) for (f = 0; f < this.pv.length; f += 1) m2[f] /= b;
              else m2 /= b;
              return m2;
            }
            function i(p) {
              this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
              var b = this._transformCachingAtTime.v;
              if (b.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                var g = this.a.getValueAtTime(p);
                b.translate(-g[0] * this.a.mult, -g[1] * this.a.mult, g[2] * this.a.mult);
              }
              if (this.appliedTransformations < 2) {
                var d = this.s.getValueAtTime(p);
                b.scale(d[0] * this.s.mult, d[1] * this.s.mult, d[2] * this.s.mult);
              }
              if (this.sk && this.appliedTransformations < 3) {
                var A = this.sk.getValueAtTime(p), c = this.sa.getValueAtTime(p);
                b.skewFromAxis(-A * this.sk.mult, c * this.sa.mult);
              }
              if (this.r && this.appliedTransformations < 4) {
                var u = this.r.getValueAtTime(p);
                b.rotate(-u * this.r.mult);
              } else if (!this.r && this.appliedTransformations < 4) {
                var f = this.rz.getValueAtTime(p), m2 = this.ry.getValueAtTime(p), x = this.rx.getValueAtTime(p), S = this.or.getValueAtTime(p);
                b.rotateZ(-f * this.rz.mult).rotateY(m2 * this.ry.mult).rotateX(x * this.rx.mult).rotateZ(-S[2] * this.or.mult).rotateY(S[1] * this.or.mult).rotateX(S[0] * this.or.mult);
              }
              if (this.data.p && this.data.p.s) {
                var C = this.px.getValueAtTime(p), T = this.py.getValueAtTime(p);
                if (this.data.p.z) {
                  var F = this.pz.getValueAtTime(p);
                  b.translate(C * this.px.mult, T * this.py.mult, -F * this.pz.mult);
                } else b.translate(C * this.px.mult, T * this.py.mult, 0);
              } else {
                var V = this.p.getValueAtTime(p);
                b.translate(V[0] * this.p.mult, V[1] * this.p.mult, -V[2] * this.p.mult);
              }
              return b;
            }
            function s() {
              return this.v.clone(new Matrix());
            }
            var n = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(p, b, g) {
              var d = n(p, b, g);
              return d.dynamicProperties.length ? d.getValueAtTime = i.bind(d) : d.getValueAtTime = s.bind(d), d.setGroupProperty = expressionHelpers.setGroupProperty, d;
            };
            var a = PropertyFactory.getProp;
            PropertyFactory.getProp = function(p, b, g, d, A) {
              var c = a(p, b, g, d, A);
              c.kf ? c.getValueAtTime = expressionHelpers.getValueAtTime.bind(c) : c.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c.loopOut = t, c.loopIn = e, c.smooth = r, c.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(c), c.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(c), c.numKeys = b.a === 1 ? b.k.length : 0, c.propertyIndex = b.ix;
              var u = 0;
              return g !== 0 && (u = createTypedArray("float32", b.a === 1 ? b.k[0].s.length : b.k.length)), c._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: u }, expressionHelpers.searchExpressions(p, b, c), c.k && A.addDynamicProperty(c), c;
            };
            function h(p) {
              return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), p *= this.elem.globalData.frameRate, p -= this.offsetTime, p !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < p ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = p, this.interpolateShape(p, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
            }
            var o = ShapePropertyFactory.getConstructorFunction(), l = ShapePropertyFactory.getKeyframedConstructorFunction();
            function v() {
            }
            v.prototype = { vertices: function(b, g) {
              this.k && this.getValue();
              var d = this.v;
              g !== void 0 && (d = this.getValueAtTime(g, 0));
              var A, c = d._length, u = d[b], f = d.v, m2 = createSizedArray(c);
              for (A = 0; A < c; A += 1) b === "i" || b === "o" ? m2[A] = [u[A][0] - f[A][0], u[A][1] - f[A][1]] : m2[A] = [u[A][0], u[A][1]];
              return m2;
            }, points: function(b) {
              return this.vertices("v", b);
            }, inTangents: function(b) {
              return this.vertices("i", b);
            }, outTangents: function(b) {
              return this.vertices("o", b);
            }, isClosed: function() {
              return this.v.c;
            }, pointOnPath: function(b, g) {
              var d = this.v;
              g !== void 0 && (d = this.getValueAtTime(g, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(d));
              for (var A = this._segmentsLength, c = A.lengths, u = A.totalLength * b, f = 0, m2 = c.length, x = 0, S; f < m2; ) {
                if (x + c[f].addedLength > u) {
                  var C = f, T = d.c && f === m2 - 1 ? 0 : f + 1, F = (u - x) / c[f].addedLength;
                  S = bez.getPointInSegment(d.v[C], d.v[T], d.o[C], d.i[T], F, c[f]);
                  break;
                } else x += c[f].addedLength;
                f += 1;
              }
              return S || (S = d.c ? [d.v[0][0], d.v[0][1]] : [d.v[d._length - 1][0], d.v[d._length - 1][1]]), S;
            }, vectorOnPath: function(b, g, d) {
              b == 1 ? b = this.v.c : b == 0 && (b = 0.999);
              var A = this.pointOnPath(b, g), c = this.pointOnPath(b + 1e-3, g), u = c[0] - A[0], f = c[1] - A[1], m2 = Math.sqrt(Math.pow(u, 2) + Math.pow(f, 2));
              if (m2 === 0) return [0, 0];
              var x = d === "tangent" ? [u / m2, f / m2] : [-f / m2, u / m2];
              return x;
            }, tangentOnPath: function(b, g) {
              return this.vectorOnPath(b, g, "tangent");
            }, normalOnPath: function(b, g) {
              return this.vectorOnPath(b, g, "normal");
            }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([v], o), extendPrototype([v], l), l.prototype.getValueAtTime = h, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var E = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(p, b, g, d, A) {
              var c = E(p, b, g, d, A);
              return c.propertyIndex = b.ix, c.lock = false, g === 3 ? expressionHelpers.searchExpressions(p, b.pt, c) : g === 4 && expressionHelpers.searchExpressions(p, b.ks, c), c.k && p.addDynamicProperty(c), c;
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
              var h = createNS("g");
              for (h.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); t[0]; ) h.appendChild(t[0]);
              this.elem.layerElement.appendChild(h), this.masker = n, r.setAttribute("stroke", "#fff");
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
                var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, h = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, o = s.getTotalLength();
                n = "0 0 0 " + o * a + " ";
                var l = o * (h - a), v = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01, E = Math.floor(l / v), p;
                for (p = 0; p < E; p += 1) n += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
                n += "0 " + o * 10 + " 0 0";
              } else n = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
              s.setAttribute("stroke-dasharray", n);
            }
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
              var b = this.filterManager.effectElements[3].p.v;
              this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(b[0] * 255) + "," + bmFloor(b[1] * 255) + "," + bmFloor(b[2] * 255) + ")");
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
            var h = createNS("feFuncG");
            h.setAttribute("type", "table"), n.appendChild(h), this.feFuncG = h;
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
            for (var n = 0, a = 256, h, o = Math.min(t, e), l = Math.max(t, e), v = Array.call(null, { length: a }), E, p = 0, b = s - i, g = e - t; n <= 256; ) h = n / 256, h <= o ? E = g < 0 ? s : i : h >= l ? E = g < 0 ? i : s : E = i + b * Math.pow((h - t) / g, 1 / r), v[p] = E, p += 1, n += 256 / (a - 1);
            return v.join(" ");
          }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
            if (t || this.filterManager._mdf) {
              var e, r = this.filterManager.effectElements;
              this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
            }
          };
          function SVGDropShadowEffect(t, e, r, i, s) {
            var n = e.container.globalData.renderConfig.filterSize, a = e.data.fs || n;
            t.setAttribute("x", a.x || n.x), t.setAttribute("y", a.y || n.y), t.setAttribute("width", a.width || n.width), t.setAttribute("height", a.height || n.height), this.filterManager = e;
            var h = createNS("feGaussianBlur");
            h.setAttribute("in", "SourceAlpha"), h.setAttribute("result", i + "_drop_shadow_1"), h.setAttribute("stdDeviation", "0"), this.feGaussianBlur = h, t.appendChild(h);
            var o = createNS("feOffset");
            o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
            var l = createNS("feFlood");
            l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
            var v = createNS("feComposite");
            v.setAttribute("in", i + "_drop_shadow_3"), v.setAttribute("in2", i + "_drop_shadow_2"), v.setAttribute("operator", "in"), v.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(v);
            var E = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
            t.appendChild(E);
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
              var h = createNS("use");
              h.setAttribute("href", "#" + e), a ? r.insertBefore(h, a) : r.appendChild(h);
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
              var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, s = e[2].p.v === 1, n = e[3].p.v, a = s ? n : e[4].p.v, h = e[5].p.v, o = e[6].p.v, l = e[7].p.v;
              this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(a * 0.01, n * 0.01, 1), this.matrix.rotate(-l * degToRads), this.matrix.skewFromAxis(-h * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = true, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = true);
            }
          };
          function SVGTransformEffect(t, e) {
            this.init(e);
          }
          extendPrototype([TransformEffect], SVGTransformEffect);
          function CVTransformEffect(t) {
            this.init(t);
          }
          return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, true), registerEffect$1(21, SVGFillFilter, true), registerEffect$1(22, SVGStrokeEffect, false), registerEffect$1(23, SVGTritoneFilter, true), registerEffect$1(24, SVGProLevelsFilter, true), registerEffect$1(25, SVGDropShadowEffect, true), registerEffect$1(28, SVGMatte3Effect, false), registerEffect$1(29, SVGGaussianBlurEffect, true), registerEffect$1(35, SVGTransformEffect, false), registerEffect(35, CVTransformEffect), lottie;
        });
        function addElementToList(t, e) {
          e.push(t), t._isDirty = false, t._changedStyles.length = 0, t._changedAttributes.length = 0, t._changedElements.length = 0, t._textContent = null, t.children.forEach(function(r) {
            addElementToList(r, e);
          });
        }
        function addChangedAttributes(t) {
          for (var e = t._changedAttributes, r = [], i, s = 0; s < e.length; s += 1) i = e[s], r.push([i, t.attributes[i]]);
          return r;
        }
        function addChangedStyles(t) {
          for (var e = t._changedStyles, r = [], i, s = 0; s < e.length; s += 1) i = e[s], r.push([i, t.style[i]]);
          return r;
        }
        function addChangedElements(t, e) {
          for (var r = t._changedElements, i = [], s, n = 0; n < r.length; n += 1) s = r[n], i.push([s[0].serialize(), s[1], s[2]]), addElementToList(s[0], e);
          return i;
        }
        function loadAnimation(t) {
          var e = t.params, r, i, s = [], n;
          if (e.renderer === "svg") r = document.createElement("div"), e.container = r;
          else {
            n = e.rendererSettings.canvas, n || (n = document.createElement("canvas"), n.width = e.animationData.w, n.height = e.animationData.h);
            var a = n.getContext("2d");
            e.rendererSettings.context = a;
          }
          i = lottie.loadAnimation(e), i.addEventListener("error", function(h) {
            console.log(h);
          }), i.onError = function(h) {
            console.log("ERRORO", h);
          }, i.addEventListener("_play", function() {
            self.postMessage({ type: "playing", payload: { id: t.id } });
          }), i.addEventListener("_pause", function() {
            self.postMessage({ type: "paused", payload: { id: t.id } });
          }), e.renderer === "svg" ? (i.addEventListener("DOMLoaded", function() {
            var h = r.serialize();
            addElementToList(r, s), self.postMessage({ type: "SVGloaded", payload: { id: t.id, tree: h.children[0] } });
          }), i.addEventListener("drawnFrame", function(h) {
            for (var o = [], l, v = 0; v < s.length; v += 1) if (l = s[v], l._isDirty) {
              var E = { id: l.attributes.id, styles: addChangedStyles(l), attributes: addChangedAttributes(l), elements: addChangedElements(l, s), textContent: l._textContent || void 0 };
              o.push(E), l._isDirty = false, l._changedAttributes.length = 0, l._changedStyles.length = 0, l._changedElements.length = 0, l._textContent = null;
            }
            self.postMessage({ type: "SVGupdated", payload: { elements: o, id: t.id, currentTime: h.currentTime } });
          })) : n._isProxy && i.addEventListener("drawnFrame", function(h) {
            self.postMessage({ type: "CanvasUpdated", payload: { instructions: n.instructions, id: t.id, currentTime: h.currentTime } }), n.resetInstructions();
          }), i.addEventListener("DOMLoaded", function() {
            self.postMessage({ type: "DOMLoaded", payload: { id: t.id, totalFrames: i.totalFrames, frameRate: i.frameRate, firstFrame: i.firstFrame, currentFrame: i.currentFrame, playDirection: i.playDirection, isSubframeEnabled: i.isSubframeEnabled, currentRawFrame: i.currentRawFrame, timeCompleted: i.timeCompleted } });
          }), animations[t.id] = { animation: i, events: {} };
        }
        return { loadAnimation };
      }();
      onmessage = function(t) {
        var e = t.data, r = e.type, i = e.payload;
        if (r === "load") lottieInternal.loadAnimation(i);
        else if (r === "pause") animations[i.id] && animations[i.id].animation.pause();
        else if (r === "play") animations[i.id] && animations[i.id].animation.play();
        else if (r === "stop") animations[i.id] && animations[i.id].animation.stop();
        else if (r === "setSpeed") animations[i.id] && animations[i.id].animation.setSpeed(i.value);
        else if (r === "setDirection") animations[i.id] && animations[i.id].animation.setDirection(i.value);
        else if (r === "setLoop") animations[i.id] && animations[i.id].animation.setLoop(i.value);
        else if (r === "goToAndPlay") animations[i.id] && animations[i.id].animation.goToAndPlay(i.value, i.isFrame);
        else if (r === "goToAndStop") animations[i.id] && animations[i.id].animation.goToAndStop(i.value, i.isFrame);
        else if (r === "setSubframe") animations[i.id] && animations[i.id].animation.setSubframe(i.value);
        else if (r === "addEventListener") {
          if (animations[i.id]) {
            var s = function() {
              self.postMessage({ type: "event", payload: { id: i.id, callbackId: i.callbackId, argument: arguments[0] } });
            };
            animations[i.id].events[i.callbackId] = { callback: s }, animations[i.id].animation.addEventListener(i.eventName, s);
          }
        } else if (r === "removeEventListener") {
          if (animations[i.id]) {
            var n = animations[i.id].events[i.callbackId];
            animations[i.id].animation.removeEventListener(i.eventName, n);
          }
        } else r === "destroy" ? animations[i.id] && (animations[i.id].animation.destroy(), animations[i.id] = null) : r === "resize" ? animations[i.id] && animations[i.id].animation.resize(i.width, i.height) : r === "playSegments" ? animations[i.id] && animations[i.id].animation.playSegments(i.arr, i.forceFlag) : r === "updateDocumentData" && animations[i.id].animation.updateDocumentData(i.path, i.documentData, i.index);
      };
    }
    function createWorker(t) {
      var e = new Blob(["(" + t.toString() + "())"], { type: "text/javascript" }), r = URL.createObjectURL(e);
      return new Worker(r);
    }
    var lottie = function() {
      var t = createWorker(workerContent), e = 0, r = 0, i = {}, s = { rendererSettings: {} };
      function n(S, C, T, F) {
        var V;
        S.type === "div" ? V = document.createElement("div") : V = document.createElementNS(S.namespace, S.type), S.textContent && (V.textContent = S.textContent);
        for (var L in S.attributes) Object.prototype.hasOwnProperty.call(S.attributes, L) && (L === "href" ? V.setAttributeNS("http://www.w3.org/1999/xlink", L, S.attributes[L]) : V.setAttribute(L, S.attributes[L]), L === "id" && (T[S.attributes[L]] = V));
        for (var I in S.style) Object.prototype.hasOwnProperty.call(S.style, I) && (V.style[I] = S.style[I]);
        S.children.forEach(function(D) {
          n(D, V, T);
        }), F ? C.insertBefore(V, F) : C.appendChild(V);
      }
      var a = /* @__PURE__ */ function() {
        return function(S) {
          var C = i[S.id];
          C._loaded = true, C.pendingCallbacks.forEach(function(T) {
            C.animInstance.addEventListener(T.eventName, T.callback), T.eventName === "DOMLoaded" && T.callback();
          }), C.animInstance.totalFrames = S.totalFrames, C.animInstance.frameRate = S.frameRate, C.animInstance.firstFrame = S.firstFrame, C.animInstance.playDirection = S.playDirection, C.animInstance.currentFrame = S.isSubframeEnabled ? S.currentRawFrame : ~~S.currentRawFrame, S.timeCompleted !== S.totalFrames && S.currentFrame > S.timeCompleted && (C.animInstance.currentFrame = S.timeCompleted);
        };
      }(), h = /* @__PURE__ */ function() {
        return function(S) {
          var C = i[S.id], T = C.container, F = C.elements;
          n(S.tree, T, F);
        };
      }();
      function o(S, C) {
        for (var T, F = 0; F < S.length; F += 1) {
          T = S[F];
          var V = C[T[1]];
          if (V) {
            var L;
            T[2] && (L = C[T[2]]), n(T[0], V, C, L), S.splice(F, 1), F -= 1;
          }
        }
      }
      function l(S, C) {
        for (var T, F = 0; F < C.length; F += 1) T = C[F], S.style[T[0]] = T[1];
      }
      function v(S, C) {
        for (var T, F = 0; F < C.length; F += 1) T = C[F], S.setAttribute(T[0], T[1]);
      }
      function E(S, C) {
        C && (S.textContent = C);
      }
      function p(S) {
        var C = S.elements, T = i[S.id];
        if (T) {
          for (var F = T.elements, V, L = 0; L < C.length; L += 1) {
            V = C[L];
            var I = F[V.id];
            o(V.elements, F), l(I, V.styles), v(I, V.attributes), E(I, V.textContent);
          }
          T.animInstance.currentFrame = S.currentTime;
        }
      }
      function b(S) {
        var C = S.getContext("2d"), T = { beginPath: C.beginPath, closePath: C.closePath, rect: C.rect, clip: C.clip, clearRect: C.clearRect, setTransform: C.setTransform, moveTo: C.moveTo, bezierCurveTo: C.bezierCurveTo, lineTo: C.lineTo, fill: C.fill, save: C.save, restore: C.restore };
        return function(F) {
          for (var V = 0; V < F.length; V += 1) {
            var L = F[V], I = T[L.t];
            I ? I.apply(C, L.a) : C[L.t] = L.a;
          }
        };
      }
      function g(S) {
        var C = i[S.id];
        C.instructionsHandler(S.instructions);
      }
      function d(S) {
        var C = i[S.id];
        if (C) {
          var T = C.callbacks;
          T[S.callbackId] && T[S.callbackId].callback(S.argument);
        }
      }
      function A(S) {
        var C = i[S.id];
        C && (C.animInstance.isPaused = false);
      }
      function c(S) {
        var C = i[S.id];
        C && (C.animInstance.isPaused = true);
      }
      var u = { DOMLoaded: a, SVGloaded: h, SVGupdated: p, CanvasUpdated: g, event: d, playing: A, paused: c };
      t.onmessage = function(S) {
        u[S.data.type] && u[S.data.type](S.data.payload);
      };
      function f(S) {
        return new Promise(function(C, T) {
          var F = Object.assign({}, s, S);
          F.animType && !F.renderer && (F.renderer = F.animType), F.wrapper && (F.container || (F.container = F.wrapper), delete F.wrapper), F.animationData ? C(F) : F.path ? fetch(F.path).then(function(V) {
            return V.json();
          }).then(function(V) {
            F.animationData = V, delete F.path, C(F);
          }) : T();
        });
      }
      function m2(S) {
        e += 1;
        var C = "lottie_animationId_" + e, T = { elements: {}, callbacks: {}, pendingCallbacks: [], status: "init" }, F = { id: C, isPaused: true, pause: function() {
          t.postMessage({ type: "pause", payload: { id: C } });
        }, play: function() {
          t.postMessage({ type: "play", payload: { id: C } });
        }, stop: function() {
          t.postMessage({ type: "stop", payload: { id: C } });
        }, setSpeed: function(V) {
          t.postMessage({ type: "setSpeed", payload: { id: C, value: V } });
        }, setDirection: function(V) {
          t.postMessage({ type: "setDirection", payload: { id: C, value: V } });
        }, setLoop: function(V) {
          t.postMessage({ type: "setLoop", payload: { id: C, value: V } });
        }, goToAndStop: function(V, L) {
          t.postMessage({ type: "goToAndStop", payload: { id: C, value: V, isFrame: L } });
        }, goToAndPlay: function(V, L) {
          t.postMessage({ type: "goToAndPlay", payload: { id: C, value: V, isFrame: L } });
        }, playSegments: function(V, L) {
          t.postMessage({ type: "playSegments", payload: { id: C, arr: V, forceFlag: L } });
        }, setSubframe: function(V) {
          t.postMessage({ type: "setSubframe", payload: { id: C, value: V } });
        }, addEventListener: function(V, L) {
          if (!T._loaded) T.pendingCallbacks.push({ eventName: V, callback: L });
          else {
            r += 1;
            var I = "callback_" + r;
            T.callbacks[I] = { eventName: V, callback: L }, t.postMessage({ type: "addEventListener", payload: { id: C, callbackId: I, eventName: V } });
          }
        }, removeEventListener: function(V, L) {
          Object.keys(T.callbacks).forEach(function(I) {
            T.callbacks[I].eventName === V && (T.callbacks[I].callback === L || !L) && (delete T.callbacks[I], t.postMessage({ type: "removeEventListener", payload: { id: C, callbackId: I, eventName: V } }));
          });
        }, destroy: function() {
          T.status === "init" ? T.status = "destroyable" : (T.status = "destroyed", i[C] = null, T.container && (T.container.innerHTML = ""), t.postMessage({ type: "destroy", payload: { id: C } }));
        }, resize: function(V, L) {
          var I = window.devicePixelRatio || 1;
          t.postMessage({ type: "resize", payload: { id: C, width: V || (T.container ? T.container.offsetWidth * I : 0), height: L || (T.container ? T.container.offsetHeight * I : 0) } });
        }, updateDocumentData: function(V, L, I) {
          t.postMessage({ type: "updateDocumentData", payload: { id: C, path: V, documentData: L, index: I } });
        } };
        return T.animInstance = F, f(S).then(function(V) {
          if (T.status === "destroyable") {
            T.animInstance.destroy();
            return;
          }
          T.status = "loaded";
          var L = [];
          if (V.container && (T.container = V.container, delete V.container), V.renderer === "canvas") {
            var I = V.rendererSettings.canvas;
            if (!I) {
              var D = window.devicePixelRatio || 1;
              I = document.createElement("canvas"), T.container.appendChild(I), I.width = (T.container ? T.container.offsetWidth : V.animationData.w) * D, I.height = (T.container ? T.container.offsetHeight : V.animationData.h) * D, I.style.width = "100%", I.style.height = "100%";
            }
            var B = I;
            typeof OffscreenCanvas > "u" ? (T.canvas = I, T.instructionsHandler = b(I)) : (I instanceof OffscreenCanvas || (B = I.transferControlToOffscreen(), V.rendererSettings.canvas = B), L.push(B));
          }
          i[C] = T, t.postMessage({ type: "load", payload: { params: V, id: C } }, L);
        }), F;
      }
      var x = { loadAnimation: m2 };
      return x;
    }();
    return lottie;
  });
});
var lottie_workerQ23FJ6ZR = dt();
export {
  lottie_workerQ23FJ6ZR as default
};
/*! Bundled license information:

@dotlottie/common/dist/lottie_worker-Q23FJ6ZR.js:
  (*! Bundled license information:
  
  lottie-web/build/player/lottie_worker.js:
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
//# sourceMappingURL=lottie_worker-Q23FJ6ZR-RGUI4VYF.js.map
