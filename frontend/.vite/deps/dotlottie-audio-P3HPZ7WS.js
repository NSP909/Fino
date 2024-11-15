import {
  m,
  n
} from "./chunk-USPGI4ZR.js";
import {
  __publicField
} from "./chunk-DC5AMYBS.js";

// node_modules/@dotlottie/common/dist/dotlottie-audio.js
var P = m((S) => {
  (function() {
    var g = function() {
      this.init();
    };
    g.prototype = { init: function() {
      var e = this || r;
      return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = false, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = typeof window < "u" && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = false, e.usingWebAudio = true, e.autoSuspend = true, e.ctx = null, e.autoUnlock = true, e._setup(), e;
    }, volume: function(e) {
      var t = this || r;
      if (e = parseFloat(e), t.ctx || A(), typeof e < "u" && e >= 0 && e <= 1) {
        if (t._volume = e, t._muted) return t;
        t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, r.ctx.currentTime);
        for (var n2 = 0; n2 < t._howls.length; n2++) if (!t._howls[n2]._webAudio) for (var o = t._howls[n2]._getSoundIds(), l = 0; l < o.length; l++) {
          var _ = t._howls[n2]._soundById(o[l]);
          _ && _._node && (_._node.volume = _._volume * e);
        }
        return t;
      }
      return t._volume;
    }, mute: function(e) {
      var t = this || r;
      t.ctx || A(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, r.ctx.currentTime);
      for (var n2 = 0; n2 < t._howls.length; n2++) if (!t._howls[n2]._webAudio) for (var o = t._howls[n2]._getSoundIds(), l = 0; l < o.length; l++) {
        var _ = t._howls[n2]._soundById(o[l]);
        _ && _._node && (_._node.muted = e ? true : _._muted);
      }
      return t;
    }, stop: function() {
      for (var e = this || r, t = 0; t < e._howls.length; t++) e._howls[t].stop();
      return e;
    }, unload: function() {
      for (var e = this || r, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
      return e.usingWebAudio && e.ctx && typeof e.ctx.close < "u" && (e.ctx.close(), e.ctx = null, A()), e;
    }, codecs: function(e) {
      return (this || r)._codecs[e.replace(/^x-/, "")];
    }, _setup: function() {
      var e = this || r;
      if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio) if (typeof Audio < "u") try {
        var t = new Audio();
        typeof t.oncanplaythrough > "u" && (e._canPlayEvent = "canplay");
      } catch {
        e.noAudio = true;
      }
      else e.noAudio = true;
      try {
        var t = new Audio();
        t.muted && (e.noAudio = true);
      } catch {
      }
      return e.noAudio || e._setupCodecs(), e;
    }, _setupCodecs: function() {
      var e = this || r, t = null;
      try {
        t = typeof Audio < "u" ? new Audio() : null;
      } catch {
        return e;
      }
      if (!t || typeof t.canPlayType != "function") return e;
      var n2 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), o = e._navigator ? e._navigator.userAgent : "", l = o.match(/OPR\/([0-6].)/g), _ = l && parseInt(l[0].split("/")[1], 10) < 33, a = o.indexOf("Safari") !== -1 && o.indexOf("Chrome") === -1, f = o.match(/Version\/(.*?) /), m2 = a && f && parseInt(f[1], 10) < 15;
      return e._codecs = { mp3: !!(!_ && (n2 || t.canPlayType("audio/mp3;").replace(/^no$/, ""))), mpeg: !!n2, opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(/^no$/, ""), aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""), caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""), m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""), m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!(!m2 && t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")), webm: !!(!m2 && t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")), dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""), flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "") }, e;
    }, _unlockAudio: function() {
      var e = this || r;
      if (!(e._audioUnlocked || !e.ctx)) {
        e._audioUnlocked = false, e.autoUnlock = false, !e._mobileUnloaded && e.ctx.sampleRate !== 44100 && (e._mobileUnloaded = true, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
        var t = function(n2) {
          for (; e._html5AudioPool.length < e.html5PoolSize; ) try {
            var o = new Audio();
            o._unlocked = true, e._releaseHtml5Audio(o);
          } catch {
            e.noAudio = true;
            break;
          }
          for (var l = 0; l < e._howls.length; l++) if (!e._howls[l]._webAudio) for (var _ = e._howls[l]._getSoundIds(), a = 0; a < _.length; a++) {
            var f = e._howls[l]._soundById(_[a]);
            f && f._node && !f._node._unlocked && (f._node._unlocked = true, f._node.load());
          }
          e._autoResume();
          var m2 = e.ctx.createBufferSource();
          m2.buffer = e._scratchBuffer, m2.connect(e.ctx.destination), typeof m2.start > "u" ? m2.noteOn(0) : m2.start(0), typeof e.ctx.resume == "function" && e.ctx.resume(), m2.onended = function() {
            m2.disconnect(0), e._audioUnlocked = true, document.removeEventListener("touchstart", t, true), document.removeEventListener("touchend", t, true), document.removeEventListener("click", t, true), document.removeEventListener("keydown", t, true);
            for (var y = 0; y < e._howls.length; y++) e._howls[y]._emit("unlock");
          };
        };
        return document.addEventListener("touchstart", t, true), document.addEventListener("touchend", t, true), document.addEventListener("click", t, true), document.addEventListener("keydown", t, true), e;
      }
    }, _obtainHtml5Audio: function() {
      var e = this || r;
      if (e._html5AudioPool.length) return e._html5AudioPool.pop();
      var t = new Audio().play();
      return t && typeof Promise < "u" && (t instanceof Promise || typeof t.then == "function") && t.catch(function() {
        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
      }), new Audio();
    }, _releaseHtml5Audio: function(e) {
      var t = this || r;
      return e._unlocked && t._html5AudioPool.push(e), t;
    }, _autoSuspend: function() {
      var e = this;
      if (!(!e.autoSuspend || !e.ctx || typeof e.ctx.suspend > "u" || !r.usingWebAudio)) {
        for (var t = 0; t < e._howls.length; t++) if (e._howls[t]._webAudio) {
          for (var n2 = 0; n2 < e._howls[t]._sounds.length; n2++) if (!e._howls[t]._sounds[n2]._paused) return e;
        }
        return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function() {
          if (e.autoSuspend) {
            e._suspendTimer = null, e.state = "suspending";
            var o = function() {
              e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
            };
            e.ctx.suspend().then(o, o);
          }
        }, 3e4), e;
      }
    }, _autoResume: function() {
      var e = this;
      if (!(!e.ctx || typeof e.ctx.resume > "u" || !r.usingWebAudio)) return e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : e.state === "suspended" || e.state === "running" && e.ctx.state === "interrupted" ? (e.ctx.resume().then(function() {
        e.state = "running";
        for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume");
      }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : e.state === "suspending" && (e._resumeAfterSuspend = true), e;
    } };
    var r = new g(), u = function(e) {
      var t = this;
      if (!e.src || e.src.length === 0) {
        console.error("An array of source files must be passed with any new Howl.");
        return;
      }
      t.init(e);
    };
    u.prototype = { init: function(e) {
      var t = this;
      return r.ctx || A(), t._autoplay = e.autoplay || false, t._format = typeof e.format != "string" ? e.format : [e.format], t._html5 = e.html5 || false, t._muted = e.mute || false, t._loop = e.loop || false, t._pool = e.pool || 5, t._preload = typeof e.preload == "boolean" || e.preload === "metadata" ? e.preload : true, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = typeof e.src != "string" ? e.src : [e.src], t._volume = e.volume !== void 0 ? e.volume : 1, t._xhr = { method: e.xhr && e.xhr.method ? e.xhr.method : "GET", headers: e.xhr && e.xhr.headers ? e.xhr.headers : null, withCredentials: e.xhr && e.xhr.withCredentials ? e.xhr.withCredentials : false }, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = false, t._onend = e.onend ? [{ fn: e.onend }] : [], t._onfade = e.onfade ? [{ fn: e.onfade }] : [], t._onload = e.onload ? [{ fn: e.onload }] : [], t._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : [], t._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : [], t._onpause = e.onpause ? [{ fn: e.onpause }] : [], t._onplay = e.onplay ? [{ fn: e.onplay }] : [], t._onstop = e.onstop ? [{ fn: e.onstop }] : [], t._onmute = e.onmute ? [{ fn: e.onmute }] : [], t._onvolume = e.onvolume ? [{ fn: e.onvolume }] : [], t._onrate = e.onrate ? [{ fn: e.onrate }] : [], t._onseek = e.onseek ? [{ fn: e.onseek }] : [], t._onunlock = e.onunlock ? [{ fn: e.onunlock }] : [], t._onresume = [], t._webAudio = r.usingWebAudio && !t._html5, typeof r.ctx < "u" && r.ctx && r.autoUnlock && r._unlockAudio(), r._howls.push(t), t._autoplay && t._queue.push({ event: "play", action: function() {
        t.play();
      } }), t._preload && t._preload !== "none" && t.load(), t;
    }, load: function() {
      var e = this, t = null;
      if (r.noAudio) {
        e._emit("loaderror", null, "No audio support.");
        return;
      }
      typeof e._src == "string" && (e._src = [e._src]);
      for (var n2 = 0; n2 < e._src.length; n2++) {
        var o, l;
        if (e._format && e._format[n2]) o = e._format[n2];
        else {
          if (l = e._src[n2], typeof l != "string") {
            e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
            continue;
          }
          o = /^data:audio\/([^;,]+);/i.exec(l), o || (o = /\.([^.]+)$/.exec(l.split("?", 1)[0])), o && (o = o[1].toLowerCase());
        }
        if (o || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), o && r.codecs(o)) {
          t = e._src[n2];
          break;
        }
      }
      if (!t) {
        e._emit("loaderror", null, "No codec support for selected audio sources.");
        return;
      }
      return e._src = t, e._state = "loading", window.location.protocol === "https:" && t.slice(0, 5) === "http:" && (e._html5 = true, e._webAudio = false), new i(e), e._webAudio && d(e), e;
    }, play: function(e, t) {
      var n2 = this, o = null;
      if (typeof e == "number") o = e, e = null;
      else {
        if (typeof e == "string" && n2._state === "loaded" && !n2._sprite[e]) return null;
        if (typeof e > "u" && (e = "__default", !n2._playLock)) {
          for (var l = 0, _ = 0; _ < n2._sounds.length; _++) n2._sounds[_]._paused && !n2._sounds[_]._ended && (l++, o = n2._sounds[_]._id);
          l === 1 ? e = null : o = null;
        }
      }
      var a = o ? n2._soundById(o) : n2._inactiveSound();
      if (!a) return null;
      if (o && !e && (e = a._sprite || "__default"), n2._state !== "loaded") {
        a._sprite = e, a._ended = false;
        var f = a._id;
        return n2._queue.push({ event: "play", action: function() {
          n2.play(f);
        } }), f;
      }
      if (o && !a._paused) return t || n2._loadQueue("play"), a._id;
      n2._webAudio && r._autoResume();
      var m2 = Math.max(0, a._seek > 0 ? a._seek : n2._sprite[e][0] / 1e3), y = Math.max(0, (n2._sprite[e][0] + n2._sprite[e][1]) / 1e3 - m2), w = y * 1e3 / Math.abs(a._rate), b = n2._sprite[e][0] / 1e3, x = (n2._sprite[e][0] + n2._sprite[e][1]) / 1e3;
      a._sprite = e, a._ended = false;
      var k = function() {
        a._paused = false, a._seek = m2, a._start = b, a._stop = x, a._loop = !!(a._loop || n2._sprite[e][2]);
      };
      if (m2 >= x) {
        n2._ended(a);
        return;
      }
      var v = a._node;
      if (n2._webAudio) {
        var I = function() {
          n2._playLock = false, k(), n2._refreshBuffer(a);
          var T = a._muted || n2._muted ? 0 : a._volume;
          v.gain.setValueAtTime(T, r.ctx.currentTime), a._playStart = r.ctx.currentTime, typeof v.bufferSource.start > "u" ? a._loop ? v.bufferSource.noteGrainOn(0, m2, 86400) : v.bufferSource.noteGrainOn(0, m2, y) : a._loop ? v.bufferSource.start(0, m2, 86400) : v.bufferSource.start(0, m2, y), w !== 1 / 0 && (n2._endTimers[a._id] = setTimeout(n2._ended.bind(n2, a), w)), t || setTimeout(function() {
            n2._emit("play", a._id), n2._loadQueue();
          }, 0);
        };
        r.state === "running" && r.ctx.state !== "interrupted" ? I() : (n2._playLock = true, n2.once("resume", I), n2._clearTimer(a._id));
      } else {
        var H = function() {
          v.currentTime = m2, v.muted = a._muted || n2._muted || r._muted || v.muted, v.volume = a._volume * r.volume(), v.playbackRate = a._rate;
          try {
            var T = v.play();
            if (T && typeof Promise < "u" && (T instanceof Promise || typeof T.then == "function") ? (n2._playLock = true, k(), T.then(function() {
              n2._playLock = false, v._unlocked = true, t ? n2._loadQueue() : n2._emit("play", a._id);
            }).catch(function() {
              n2._playLock = false, n2._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), a._ended = true, a._paused = true;
            })) : t || (n2._playLock = false, k(), n2._emit("play", a._id)), v.playbackRate = a._rate, v.paused) {
              n2._emit("playerror", a._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
              return;
            }
            e !== "__default" || a._loop ? n2._endTimers[a._id] = setTimeout(n2._ended.bind(n2, a), w) : (n2._endTimers[a._id] = function() {
              n2._ended(a), v.removeEventListener("ended", n2._endTimers[a._id], false);
            }, v.addEventListener("ended", n2._endTimers[a._id], false));
          } catch (B) {
            n2._emit("playerror", a._id, B);
          }
        };
        v.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (v.src = n2._src, v.load());
        var L = window && window.ejecta || !v.readyState && r._navigator.isCocoonJS;
        if (v.readyState >= 3 || L) H();
        else {
          n2._playLock = true, n2._state = "loading";
          var O = function() {
            n2._state = "loaded", H(), v.removeEventListener(r._canPlayEvent, O, false);
          };
          v.addEventListener(r._canPlayEvent, O, false), n2._clearTimer(a._id);
        }
      }
      return a._id;
    }, pause: function(e) {
      var t = this;
      if (t._state !== "loaded" || t._playLock) return t._queue.push({ event: "pause", action: function() {
        t.pause(e);
      } }), t;
      for (var n2 = t._getSoundIds(e), o = 0; o < n2.length; o++) {
        t._clearTimer(n2[o]);
        var l = t._soundById(n2[o]);
        if (l && !l._paused && (l._seek = t.seek(n2[o]), l._rateSeek = 0, l._paused = true, t._stopFade(n2[o]), l._node)) if (t._webAudio) {
          if (!l._node.bufferSource) continue;
          typeof l._node.bufferSource.stop > "u" ? l._node.bufferSource.noteOff(0) : l._node.bufferSource.stop(0), t._cleanBuffer(l._node);
        } else (!isNaN(l._node.duration) || l._node.duration === 1 / 0) && l._node.pause();
        arguments[1] || t._emit("pause", l ? l._id : null);
      }
      return t;
    }, stop: function(e, t) {
      var n2 = this;
      if (n2._state !== "loaded" || n2._playLock) return n2._queue.push({ event: "stop", action: function() {
        n2.stop(e);
      } }), n2;
      for (var o = n2._getSoundIds(e), l = 0; l < o.length; l++) {
        n2._clearTimer(o[l]);
        var _ = n2._soundById(o[l]);
        _ && (_._seek = _._start || 0, _._rateSeek = 0, _._paused = true, _._ended = true, n2._stopFade(o[l]), _._node && (n2._webAudio ? _._node.bufferSource && (typeof _._node.bufferSource.stop > "u" ? _._node.bufferSource.noteOff(0) : _._node.bufferSource.stop(0), n2._cleanBuffer(_._node)) : (!isNaN(_._node.duration) || _._node.duration === 1 / 0) && (_._node.currentTime = _._start || 0, _._node.pause(), _._node.duration === 1 / 0 && n2._clearSound(_._node))), t || n2._emit("stop", _._id));
      }
      return n2;
    }, mute: function(e, t) {
      var n2 = this;
      if (n2._state !== "loaded" || n2._playLock) return n2._queue.push({ event: "mute", action: function() {
        n2.mute(e, t);
      } }), n2;
      if (typeof t > "u") if (typeof e == "boolean") n2._muted = e;
      else return n2._muted;
      for (var o = n2._getSoundIds(t), l = 0; l < o.length; l++) {
        var _ = n2._soundById(o[l]);
        _ && (_._muted = e, _._interval && n2._stopFade(_._id), n2._webAudio && _._node ? _._node.gain.setValueAtTime(e ? 0 : _._volume, r.ctx.currentTime) : _._node && (_._node.muted = r._muted ? true : e), n2._emit("mute", _._id));
      }
      return n2;
    }, volume: function() {
      var e = this, t = arguments, n2, o;
      if (t.length === 0) return e._volume;
      if (t.length === 1 || t.length === 2 && typeof t[1] > "u") {
        var l = e._getSoundIds(), _ = l.indexOf(t[0]);
        _ >= 0 ? o = parseInt(t[0], 10) : n2 = parseFloat(t[0]);
      } else t.length >= 2 && (n2 = parseFloat(t[0]), o = parseInt(t[1], 10));
      var a;
      if (typeof n2 < "u" && n2 >= 0 && n2 <= 1) {
        if (e._state !== "loaded" || e._playLock) return e._queue.push({ event: "volume", action: function() {
          e.volume.apply(e, t);
        } }), e;
        typeof o > "u" && (e._volume = n2), o = e._getSoundIds(o);
        for (var f = 0; f < o.length; f++) a = e._soundById(o[f]), a && (a._volume = n2, t[2] || e._stopFade(o[f]), e._webAudio && a._node && !a._muted ? a._node.gain.setValueAtTime(n2, r.ctx.currentTime) : a._node && !a._muted && (a._node.volume = n2 * r.volume()), e._emit("volume", a._id));
      } else return a = o ? e._soundById(o) : e._sounds[0], a ? a._volume : 0;
      return e;
    }, fade: function(e, t, n2, o) {
      var l = this;
      if (l._state !== "loaded" || l._playLock) return l._queue.push({ event: "fade", action: function() {
        l.fade(e, t, n2, o);
      } }), l;
      e = Math.min(Math.max(0, parseFloat(e)), 1), t = Math.min(Math.max(0, parseFloat(t)), 1), n2 = parseFloat(n2), l.volume(e, o);
      for (var _ = l._getSoundIds(o), a = 0; a < _.length; a++) {
        var f = l._soundById(_[a]);
        if (f) {
          if (o || l._stopFade(_[a]), l._webAudio && !f._muted) {
            var m2 = r.ctx.currentTime, y = m2 + n2 / 1e3;
            f._volume = e, f._node.gain.setValueAtTime(e, m2), f._node.gain.linearRampToValueAtTime(t, y);
          }
          l._startFadeInterval(f, e, t, n2, _[a], typeof o > "u");
        }
      }
      return l;
    }, _startFadeInterval: function(e, t, n2, o, l, _) {
      var a = this, f = t, m2 = n2 - t, y = Math.abs(m2 / 0.01), w = Math.max(4, y > 0 ? o / y : o), b = Date.now();
      e._fadeTo = n2, e._interval = setInterval(function() {
        var x = (Date.now() - b) / o;
        b = Date.now(), f += m2 * x, f = Math.round(f * 100) / 100, m2 < 0 ? f = Math.max(n2, f) : f = Math.min(n2, f), a._webAudio ? e._volume = f : a.volume(f, e._id, true), _ && (a._volume = f), (n2 < t && f <= n2 || n2 > t && f >= n2) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, a.volume(n2, e._id), a._emit("fade", e._id));
      }, w);
    }, _stopFade: function(e) {
      var t = this, n2 = t._soundById(e);
      return n2 && n2._interval && (t._webAudio && n2._node.gain.cancelScheduledValues(r.ctx.currentTime), clearInterval(n2._interval), n2._interval = null, t.volume(n2._fadeTo, e), n2._fadeTo = null, t._emit("fade", e)), t;
    }, loop: function() {
      var e = this, t = arguments, n2, o, l;
      if (t.length === 0) return e._loop;
      if (t.length === 1) if (typeof t[0] == "boolean") n2 = t[0], e._loop = n2;
      else return l = e._soundById(parseInt(t[0], 10)), l ? l._loop : false;
      else t.length === 2 && (n2 = t[0], o = parseInt(t[1], 10));
      for (var _ = e._getSoundIds(o), a = 0; a < _.length; a++) l = e._soundById(_[a]), l && (l._loop = n2, e._webAudio && l._node && l._node.bufferSource && (l._node.bufferSource.loop = n2, n2 && (l._node.bufferSource.loopStart = l._start || 0, l._node.bufferSource.loopEnd = l._stop, e.playing(_[a]) && (e.pause(_[a], true), e.play(_[a], true)))));
      return e;
    }, rate: function() {
      var e = this, t = arguments, n2, o;
      if (t.length === 0) o = e._sounds[0]._id;
      else if (t.length === 1) {
        var l = e._getSoundIds(), _ = l.indexOf(t[0]);
        _ >= 0 ? o = parseInt(t[0], 10) : n2 = parseFloat(t[0]);
      } else t.length === 2 && (n2 = parseFloat(t[0]), o = parseInt(t[1], 10));
      var a;
      if (typeof n2 == "number") {
        if (e._state !== "loaded" || e._playLock) return e._queue.push({ event: "rate", action: function() {
          e.rate.apply(e, t);
        } }), e;
        typeof o > "u" && (e._rate = n2), o = e._getSoundIds(o);
        for (var f = 0; f < o.length; f++) if (a = e._soundById(o[f]), a) {
          e.playing(o[f]) && (a._rateSeek = e.seek(o[f]), a._playStart = e._webAudio ? r.ctx.currentTime : a._playStart), a._rate = n2, e._webAudio && a._node && a._node.bufferSource ? a._node.bufferSource.playbackRate.setValueAtTime(n2, r.ctx.currentTime) : a._node && (a._node.playbackRate = n2);
          var m2 = e.seek(o[f]), y = (e._sprite[a._sprite][0] + e._sprite[a._sprite][1]) / 1e3 - m2, w = y * 1e3 / Math.abs(a._rate);
          (e._endTimers[o[f]] || !a._paused) && (e._clearTimer(o[f]), e._endTimers[o[f]] = setTimeout(e._ended.bind(e, a), w)), e._emit("rate", a._id);
        }
      } else return a = e._soundById(o), a ? a._rate : e._rate;
      return e;
    }, seek: function() {
      var e = this, t = arguments, n2, o;
      if (t.length === 0) e._sounds.length && (o = e._sounds[0]._id);
      else if (t.length === 1) {
        var l = e._getSoundIds(), _ = l.indexOf(t[0]);
        _ >= 0 ? o = parseInt(t[0], 10) : e._sounds.length && (o = e._sounds[0]._id, n2 = parseFloat(t[0]));
      } else t.length === 2 && (n2 = parseFloat(t[0]), o = parseInt(t[1], 10));
      if (typeof o > "u") return 0;
      if (typeof n2 == "number" && (e._state !== "loaded" || e._playLock)) return e._queue.push({ event: "seek", action: function() {
        e.seek.apply(e, t);
      } }), e;
      var a = e._soundById(o);
      if (a) if (typeof n2 == "number" && n2 >= 0) {
        var f = e.playing(o);
        f && e.pause(o, true), a._seek = n2, a._ended = false, e._clearTimer(o), !e._webAudio && a._node && !isNaN(a._node.duration) && (a._node.currentTime = n2);
        var m2 = function() {
          f && e.play(o, true), e._emit("seek", o);
        };
        if (f && !e._webAudio) {
          var y = function() {
            e._playLock ? setTimeout(y, 0) : m2();
          };
          setTimeout(y, 0);
        } else m2();
      } else if (e._webAudio) {
        var w = e.playing(o) ? r.ctx.currentTime - a._playStart : 0, b = a._rateSeek ? a._rateSeek - a._seek : 0;
        return a._seek + (b + w * Math.abs(a._rate));
      } else return a._node.currentTime;
      return e;
    }, playing: function(e) {
      var t = this;
      if (typeof e == "number") {
        var n2 = t._soundById(e);
        return n2 ? !n2._paused : false;
      }
      for (var o = 0; o < t._sounds.length; o++) if (!t._sounds[o]._paused) return true;
      return false;
    }, duration: function(e) {
      var t = this, n2 = t._duration, o = t._soundById(e);
      return o && (n2 = t._sprite[o._sprite][1] / 1e3), n2;
    }, state: function() {
      return this._state;
    }, unload: function() {
      for (var e = this, t = e._sounds, n2 = 0; n2 < t.length; n2++) t[n2]._paused || e.stop(t[n2]._id), e._webAudio || (e._clearSound(t[n2]._node), t[n2]._node.removeEventListener("error", t[n2]._errorFn, false), t[n2]._node.removeEventListener(r._canPlayEvent, t[n2]._loadFn, false), t[n2]._node.removeEventListener("ended", t[n2]._endFn, false), r._releaseHtml5Audio(t[n2]._node)), delete t[n2]._node, e._clearTimer(t[n2]._id);
      var o = r._howls.indexOf(e);
      o >= 0 && r._howls.splice(o, 1);
      var l = true;
      for (n2 = 0; n2 < r._howls.length; n2++) if (r._howls[n2]._src === e._src || e._src.indexOf(r._howls[n2]._src) >= 0) {
        l = false;
        break;
      }
      return c && l && delete c[e._src], r.noAudio = false, e._state = "unloaded", e._sounds = [], e = null, null;
    }, on: function(e, t, n2, o) {
      var l = this, _ = l["_on" + e];
      return typeof t == "function" && _.push(o ? { id: n2, fn: t, once: o } : { id: n2, fn: t }), l;
    }, off: function(e, t, n2) {
      var o = this, l = o["_on" + e], _ = 0;
      if (typeof t == "number" && (n2 = t, t = null), t || n2) for (_ = 0; _ < l.length; _++) {
        var a = n2 === l[_].id;
        if (t === l[_].fn && a || !t && a) {
          l.splice(_, 1);
          break;
        }
      }
      else if (e) o["_on" + e] = [];
      else {
        var f = Object.keys(o);
        for (_ = 0; _ < f.length; _++) f[_].indexOf("_on") === 0 && Array.isArray(o[f[_]]) && (o[f[_]] = []);
      }
      return o;
    }, once: function(e, t, n2) {
      var o = this;
      return o.on(e, t, n2, 1), o;
    }, _emit: function(e, t, n2) {
      for (var o = this, l = o["_on" + e], _ = l.length - 1; _ >= 0; _--) (!l[_].id || l[_].id === t || e === "load") && (setTimeout((function(a) {
        a.call(this, t, n2);
      }).bind(o, l[_].fn), 0), l[_].once && o.off(e, l[_].fn, l[_].id));
      return o._loadQueue(e), o;
    }, _loadQueue: function(e) {
      var t = this;
      if (t._queue.length > 0) {
        var n2 = t._queue[0];
        n2.event === e && (t._queue.shift(), t._loadQueue()), e || n2.action();
      }
      return t;
    }, _ended: function(e) {
      var t = this, n2 = e._sprite;
      if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t;
      var o = !!(e._loop || t._sprite[n2][2]);
      if (t._emit("end", e._id), !t._webAudio && o && t.stop(e._id, true).play(e._id), t._webAudio && o) {
        t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = r.ctx.currentTime;
        var l = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
        t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), l);
      }
      return t._webAudio && !o && (e._paused = true, e._ended = true, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), r._autoSuspend()), !t._webAudio && !o && t.stop(e._id, true), t;
    }, _clearTimer: function(e) {
      var t = this;
      if (t._endTimers[e]) {
        if (typeof t._endTimers[e] != "function") clearTimeout(t._endTimers[e]);
        else {
          var n2 = t._soundById(e);
          n2 && n2._node && n2._node.removeEventListener("ended", t._endTimers[e], false);
        }
        delete t._endTimers[e];
      }
      return t;
    }, _soundById: function(e) {
      for (var t = this, n2 = 0; n2 < t._sounds.length; n2++) if (e === t._sounds[n2]._id) return t._sounds[n2];
      return null;
    }, _inactiveSound: function() {
      var e = this;
      e._drain();
      for (var t = 0; t < e._sounds.length; t++) if (e._sounds[t]._ended) return e._sounds[t].reset();
      return new i(e);
    }, _drain: function() {
      var e = this, t = e._pool, n2 = 0, o = 0;
      if (!(e._sounds.length < t)) {
        for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && n2++;
        for (o = e._sounds.length - 1; o >= 0; o--) {
          if (n2 <= t) return;
          e._sounds[o]._ended && (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0), e._sounds.splice(o, 1), n2--);
        }
      }
    }, _getSoundIds: function(e) {
      var t = this;
      if (typeof e > "u") {
        for (var n2 = [], o = 0; o < t._sounds.length; o++) n2.push(t._sounds[o]._id);
        return n2;
      } else return [e];
    }, _refreshBuffer: function(e) {
      var t = this;
      return e._node.bufferSource = r.ctx.createBufferSource(), e._node.bufferSource.buffer = c[t._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, r.ctx.currentTime), t;
    }, _cleanBuffer: function(e) {
      var t = this, n2 = r._navigator && r._navigator.vendor.indexOf("Apple") >= 0;
      if (r._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), n2)) try {
        e.bufferSource.buffer = r._scratchBuffer;
      } catch {
      }
      return e.bufferSource = null, t;
    }, _clearSound: function(e) {
      var t = /MSIE |Trident\//.test(r._navigator && r._navigator.userAgent);
      t || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
    } };
    var i = function(e) {
      this._parent = e, this.init();
    };
    i.prototype = { init: function() {
      var e = this, t = e._parent;
      return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = true, e._ended = true, e._sprite = "__default", e._id = ++r._counter, t._sounds.push(e), e.create(), e;
    }, create: function() {
      var e = this, t = e._parent, n2 = r._muted || e._muted || e._parent._muted ? 0 : e._volume;
      return t._webAudio ? (e._node = typeof r.ctx.createGain > "u" ? r.ctx.createGainNode() : r.ctx.createGain(), e._node.gain.setValueAtTime(n2, r.ctx.currentTime), e._node.paused = true, e._node.connect(r.masterGain)) : r.noAudio || (e._node = r._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, false), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(r._canPlayEvent, e._loadFn, false), e._endFn = e._endListener.bind(e), e._node.addEventListener("ended", e._endFn, false), e._node.src = t._src, e._node.preload = t._preload === true ? "auto" : t._preload, e._node.volume = n2 * r.volume(), e._node.load()), e;
    }, reset: function() {
      var e = this, t = e._parent;
      return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = true, e._ended = true, e._sprite = "__default", e._id = ++r._counter, e;
    }, _errorListener: function() {
      var e = this;
      e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, false);
    }, _loadListener: function() {
      var e = this, t = e._parent;
      t._duration = Math.ceil(e._node.duration * 10) / 10, Object.keys(t._sprite).length === 0 && (t._sprite = { __default: [0, t._duration * 1e3] }), t._state !== "loaded" && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(r._canPlayEvent, e._loadFn, false);
    }, _endListener: function() {
      var e = this, t = e._parent;
      t._duration === 1 / 0 && (t._duration = Math.ceil(e._node.duration * 10) / 10, t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = t._duration * 1e3), t._ended(e)), e._node.removeEventListener("ended", e._endFn, false);
    } };
    var c = {}, d = function(e) {
      var t = e._src;
      if (c[t]) {
        e._duration = c[t].duration, s(e);
        return;
      }
      if (/^data:[^;]+;base64,/.test(t)) {
        for (var n2 = atob(t.split(",")[1]), o = new Uint8Array(n2.length), l = 0; l < n2.length; ++l) o[l] = n2.charCodeAt(l);
        p(o.buffer, e);
      } else {
        var _ = new XMLHttpRequest();
        _.open(e._xhr.method, t, true), _.withCredentials = e._xhr.withCredentials, _.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach(function(a) {
          _.setRequestHeader(a, e._xhr.headers[a]);
        }), _.onload = function() {
          var a = (_.status + "")[0];
          if (a !== "0" && a !== "2" && a !== "3") {
            e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
            return;
          }
          p(_.response, e);
        }, _.onerror = function() {
          e._webAudio && (e._html5 = true, e._webAudio = false, e._sounds = [], delete c[t], e.load());
        }, h(_);
      }
    }, h = function(e) {
      try {
        e.send();
      } catch {
        e.onerror();
      }
    }, p = function(e, t) {
      var n2 = function() {
        t._emit("loaderror", null, "Decoding audio data failed.");
      }, o = function(l) {
        l && t._sounds.length > 0 ? (c[t._src] = l, s(t, l)) : n2();
      };
      typeof Promise < "u" && r.ctx.decodeAudioData.length === 1 ? r.ctx.decodeAudioData(e).then(o).catch(n2) : r.ctx.decodeAudioData(e, o, n2);
    }, s = function(e, t) {
      t && !e._duration && (e._duration = t.duration), Object.keys(e._sprite).length === 0 && (e._sprite = { __default: [0, e._duration * 1e3] }), e._state !== "loaded" && (e._state = "loaded", e._emit("load"), e._loadQueue());
    }, A = function() {
      if (r.usingWebAudio) {
        try {
          typeof AudioContext < "u" ? r.ctx = new AudioContext() : typeof webkitAudioContext < "u" ? r.ctx = new webkitAudioContext() : r.usingWebAudio = false;
        } catch {
          r.usingWebAudio = false;
        }
        r.ctx || (r.usingWebAudio = false);
        var e = /iP(hone|od|ad)/.test(r._navigator && r._navigator.platform), t = r._navigator && r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), n2 = t ? parseInt(t[1], 10) : null;
        if (e && n2 && n2 < 9) {
          var o = /safari/.test(r._navigator && r._navigator.userAgent.toLowerCase());
          r._navigator && !o && (r.usingWebAudio = false);
        }
        r.usingWebAudio && (r.masterGain = typeof r.ctx.createGain > "u" ? r.ctx.createGainNode() : r.ctx.createGain(), r.masterGain.gain.setValueAtTime(r._muted ? 0 : r._volume, r.ctx.currentTime), r.masterGain.connect(r.ctx.destination)), r._setup();
      }
    };
    typeof define == "function" && define.amd && define([], function() {
      return { Howler: r, Howl: u };
    }), typeof S < "u" && (S.Howler = r, S.Howl = u), typeof global < "u" ? (global.HowlerGlobal = g, global.Howler = r, global.Howl = u, global.Sound = i) : typeof window < "u" && (window.HowlerGlobal = g, window.Howler = r, window.Howl = u, window.Sound = i);
  })();
  (function() {
    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(r) {
      var u = this;
      if (!u.ctx || !u.ctx.listener) return u;
      for (var i = u._howls.length - 1; i >= 0; i--) u._howls[i].stereo(r);
      return u;
    }, HowlerGlobal.prototype.pos = function(r, u, i) {
      var c = this;
      if (!c.ctx || !c.ctx.listener) return c;
      if (u = typeof u != "number" ? c._pos[1] : u, i = typeof i != "number" ? c._pos[2] : i, typeof r == "number") c._pos = [r, u, i], typeof c.ctx.listener.positionX < "u" ? (c.ctx.listener.positionX.setTargetAtTime(c._pos[0], Howler.ctx.currentTime, 0.1), c.ctx.listener.positionY.setTargetAtTime(c._pos[1], Howler.ctx.currentTime, 0.1), c.ctx.listener.positionZ.setTargetAtTime(c._pos[2], Howler.ctx.currentTime, 0.1)) : c.ctx.listener.setPosition(c._pos[0], c._pos[1], c._pos[2]);
      else return c._pos;
      return c;
    }, HowlerGlobal.prototype.orientation = function(r, u, i, c, d, h) {
      var p = this;
      if (!p.ctx || !p.ctx.listener) return p;
      var s = p._orientation;
      if (u = typeof u != "number" ? s[1] : u, i = typeof i != "number" ? s[2] : i, c = typeof c != "number" ? s[3] : c, d = typeof d != "number" ? s[4] : d, h = typeof h != "number" ? s[5] : h, typeof r == "number") p._orientation = [r, u, i, c, d, h], typeof p.ctx.listener.forwardX < "u" ? (p.ctx.listener.forwardX.setTargetAtTime(r, Howler.ctx.currentTime, 0.1), p.ctx.listener.forwardY.setTargetAtTime(u, Howler.ctx.currentTime, 0.1), p.ctx.listener.forwardZ.setTargetAtTime(i, Howler.ctx.currentTime, 0.1), p.ctx.listener.upX.setTargetAtTime(c, Howler.ctx.currentTime, 0.1), p.ctx.listener.upY.setTargetAtTime(d, Howler.ctx.currentTime, 0.1), p.ctx.listener.upZ.setTargetAtTime(h, Howler.ctx.currentTime, 0.1)) : p.ctx.listener.setOrientation(r, u, i, c, d, h);
      else return s;
      return p;
    }, Howl.prototype.init = /* @__PURE__ */ function(r) {
      return function(u) {
        var i = this;
        return i._orientation = u.orientation || [1, 0, 0], i._stereo = u.stereo || null, i._pos = u.pos || null, i._pannerAttr = { coneInnerAngle: typeof u.coneInnerAngle < "u" ? u.coneInnerAngle : 360, coneOuterAngle: typeof u.coneOuterAngle < "u" ? u.coneOuterAngle : 360, coneOuterGain: typeof u.coneOuterGain < "u" ? u.coneOuterGain : 0, distanceModel: typeof u.distanceModel < "u" ? u.distanceModel : "inverse", maxDistance: typeof u.maxDistance < "u" ? u.maxDistance : 1e4, panningModel: typeof u.panningModel < "u" ? u.panningModel : "HRTF", refDistance: typeof u.refDistance < "u" ? u.refDistance : 1, rolloffFactor: typeof u.rolloffFactor < "u" ? u.rolloffFactor : 1 }, i._onstereo = u.onstereo ? [{ fn: u.onstereo }] : [], i._onpos = u.onpos ? [{ fn: u.onpos }] : [], i._onorientation = u.onorientation ? [{ fn: u.onorientation }] : [], r.call(this, u);
      };
    }(Howl.prototype.init), Howl.prototype.stereo = function(r, u) {
      var i = this;
      if (!i._webAudio) return i;
      if (i._state !== "loaded") return i._queue.push({ event: "stereo", action: function() {
        i.stereo(r, u);
      } }), i;
      var c = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
      if (typeof u > "u") if (typeof r == "number") i._stereo = r, i._pos = [r, 0, 0];
      else return i._stereo;
      for (var d = i._getSoundIds(u), h = 0; h < d.length; h++) {
        var p = i._soundById(d[h]);
        if (p) if (typeof r == "number") p._stereo = r, p._pos = [r, 0, 0], p._node && (p._pannerAttr.panningModel = "equalpower", (!p._panner || !p._panner.pan) && g(p, c), c === "spatial" ? typeof p._panner.positionX < "u" ? (p._panner.positionX.setValueAtTime(r, Howler.ctx.currentTime), p._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), p._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : p._panner.setPosition(r, 0, 0) : p._panner.pan.setValueAtTime(r, Howler.ctx.currentTime)), i._emit("stereo", p._id);
        else return p._stereo;
      }
      return i;
    }, Howl.prototype.pos = function(r, u, i, c) {
      var d = this;
      if (!d._webAudio) return d;
      if (d._state !== "loaded") return d._queue.push({ event: "pos", action: function() {
        d.pos(r, u, i, c);
      } }), d;
      if (u = typeof u != "number" ? 0 : u, i = typeof i != "number" ? -0.5 : i, typeof c > "u") if (typeof r == "number") d._pos = [r, u, i];
      else return d._pos;
      for (var h = d._getSoundIds(c), p = 0; p < h.length; p++) {
        var s = d._soundById(h[p]);
        if (s) if (typeof r == "number") s._pos = [r, u, i], s._node && ((!s._panner || s._panner.pan) && g(s, "spatial"), typeof s._panner.positionX < "u" ? (s._panner.positionX.setValueAtTime(r, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(u, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : s._panner.setPosition(r, u, i)), d._emit("pos", s._id);
        else return s._pos;
      }
      return d;
    }, Howl.prototype.orientation = function(r, u, i, c) {
      var d = this;
      if (!d._webAudio) return d;
      if (d._state !== "loaded") return d._queue.push({ event: "orientation", action: function() {
        d.orientation(r, u, i, c);
      } }), d;
      if (u = typeof u != "number" ? d._orientation[1] : u, i = typeof i != "number" ? d._orientation[2] : i, typeof c > "u") if (typeof r == "number") d._orientation = [r, u, i];
      else return d._orientation;
      for (var h = d._getSoundIds(c), p = 0; p < h.length; p++) {
        var s = d._soundById(h[p]);
        if (s) if (typeof r == "number") s._orientation = [r, u, i], s._node && (s._panner || (s._pos || (s._pos = d._pos || [0, 0, -0.5]), g(s, "spatial")), typeof s._panner.orientationX < "u" ? (s._panner.orientationX.setValueAtTime(r, Howler.ctx.currentTime), s._panner.orientationY.setValueAtTime(u, Howler.ctx.currentTime), s._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : s._panner.setOrientation(r, u, i)), d._emit("orientation", s._id);
        else return s._orientation;
      }
      return d;
    }, Howl.prototype.pannerAttr = function() {
      var r = this, u = arguments, i, c, d;
      if (!r._webAudio) return r;
      if (u.length === 0) return r._pannerAttr;
      if (u.length === 1) if (typeof u[0] == "object") i = u[0], typeof c > "u" && (i.pannerAttr || (i.pannerAttr = { coneInnerAngle: i.coneInnerAngle, coneOuterAngle: i.coneOuterAngle, coneOuterGain: i.coneOuterGain, distanceModel: i.distanceModel, maxDistance: i.maxDistance, refDistance: i.refDistance, rolloffFactor: i.rolloffFactor, panningModel: i.panningModel }), r._pannerAttr = { coneInnerAngle: typeof i.pannerAttr.coneInnerAngle < "u" ? i.pannerAttr.coneInnerAngle : r._coneInnerAngle, coneOuterAngle: typeof i.pannerAttr.coneOuterAngle < "u" ? i.pannerAttr.coneOuterAngle : r._coneOuterAngle, coneOuterGain: typeof i.pannerAttr.coneOuterGain < "u" ? i.pannerAttr.coneOuterGain : r._coneOuterGain, distanceModel: typeof i.pannerAttr.distanceModel < "u" ? i.pannerAttr.distanceModel : r._distanceModel, maxDistance: typeof i.pannerAttr.maxDistance < "u" ? i.pannerAttr.maxDistance : r._maxDistance, refDistance: typeof i.pannerAttr.refDistance < "u" ? i.pannerAttr.refDistance : r._refDistance, rolloffFactor: typeof i.pannerAttr.rolloffFactor < "u" ? i.pannerAttr.rolloffFactor : r._rolloffFactor, panningModel: typeof i.pannerAttr.panningModel < "u" ? i.pannerAttr.panningModel : r._panningModel });
      else return d = r._soundById(parseInt(u[0], 10)), d ? d._pannerAttr : r._pannerAttr;
      else u.length === 2 && (i = u[0], c = parseInt(u[1], 10));
      for (var h = r._getSoundIds(c), p = 0; p < h.length; p++) if (d = r._soundById(h[p]), d) {
        var s = d._pannerAttr;
        s = { coneInnerAngle: typeof i.coneInnerAngle < "u" ? i.coneInnerAngle : s.coneInnerAngle, coneOuterAngle: typeof i.coneOuterAngle < "u" ? i.coneOuterAngle : s.coneOuterAngle, coneOuterGain: typeof i.coneOuterGain < "u" ? i.coneOuterGain : s.coneOuterGain, distanceModel: typeof i.distanceModel < "u" ? i.distanceModel : s.distanceModel, maxDistance: typeof i.maxDistance < "u" ? i.maxDistance : s.maxDistance, refDistance: typeof i.refDistance < "u" ? i.refDistance : s.refDistance, rolloffFactor: typeof i.rolloffFactor < "u" ? i.rolloffFactor : s.rolloffFactor, panningModel: typeof i.panningModel < "u" ? i.panningModel : s.panningModel };
        var A = d._panner;
        A ? (A.coneInnerAngle = s.coneInnerAngle, A.coneOuterAngle = s.coneOuterAngle, A.coneOuterGain = s.coneOuterGain, A.distanceModel = s.distanceModel, A.maxDistance = s.maxDistance, A.refDistance = s.refDistance, A.rolloffFactor = s.rolloffFactor, A.panningModel = s.panningModel) : (d._pos || (d._pos = r._pos || [0, 0, -0.5]), g(d, "spatial"));
      }
      return r;
    }, Sound.prototype.init = /* @__PURE__ */ function(r) {
      return function() {
        var u = this, i = u._parent;
        u._orientation = i._orientation, u._stereo = i._stereo, u._pos = i._pos, u._pannerAttr = i._pannerAttr, r.call(this), u._stereo ? i.stereo(u._stereo) : u._pos && i.pos(u._pos[0], u._pos[1], u._pos[2], u._id);
      };
    }(Sound.prototype.init), Sound.prototype.reset = /* @__PURE__ */ function(r) {
      return function() {
        var u = this, i = u._parent;
        return u._orientation = i._orientation, u._stereo = i._stereo, u._pos = i._pos, u._pannerAttr = i._pannerAttr, u._stereo ? i.stereo(u._stereo) : u._pos ? i.pos(u._pos[0], u._pos[1], u._pos[2], u._id) : u._panner && (u._panner.disconnect(0), u._panner = void 0, i._refreshBuffer(u)), r.call(this);
      };
    }(Sound.prototype.reset);
    var g = function(r, u) {
      u = u || "spatial", u === "spatial" ? (r._panner = Howler.ctx.createPanner(), r._panner.coneInnerAngle = r._pannerAttr.coneInnerAngle, r._panner.coneOuterAngle = r._pannerAttr.coneOuterAngle, r._panner.coneOuterGain = r._pannerAttr.coneOuterGain, r._panner.distanceModel = r._pannerAttr.distanceModel, r._panner.maxDistance = r._pannerAttr.maxDistance, r._panner.refDistance = r._pannerAttr.refDistance, r._panner.rolloffFactor = r._pannerAttr.rolloffFactor, r._panner.panningModel = r._pannerAttr.panningModel, typeof r._panner.positionX < "u" ? (r._panner.positionX.setValueAtTime(r._pos[0], Howler.ctx.currentTime), r._panner.positionY.setValueAtTime(r._pos[1], Howler.ctx.currentTime), r._panner.positionZ.setValueAtTime(r._pos[2], Howler.ctx.currentTime)) : r._panner.setPosition(r._pos[0], r._pos[1], r._pos[2]), typeof r._panner.orientationX < "u" ? (r._panner.orientationX.setValueAtTime(r._orientation[0], Howler.ctx.currentTime), r._panner.orientationY.setValueAtTime(r._orientation[1], Howler.ctx.currentTime), r._panner.orientationZ.setValueAtTime(r._orientation[2], Howler.ctx.currentTime)) : r._panner.setOrientation(r._orientation[0], r._orientation[1], r._orientation[2])) : (r._panner = Howler.ctx.createStereoPanner(), r._panner.pan.setValueAtTime(r._stereo, Howler.ctx.currentTime)), r._panner.connect(r._node), r._paused || r._parent.pause(r._id, true).play(r._id, true);
    };
  })();
});
var F = n(P(), 1);
var M = class {
  constructor({ src: r }) {
    __publicField(this, "_howl");
    this._howl = new F.Howl({ src: r });
  }
  play() {
    return this._howl.play();
  }
  pause() {
    return this._howl.pause();
  }
  playing() {
    return this._howl.playing();
  }
  rate() {
    return this._howl.rate();
  }
  seek() {
    return this._howl.seek();
  }
  setVolume() {
    return this._howl.volume();
  }
  unload() {
    this._howl.unload();
  }
};
export {
  M as DotLottieAudio
};
/*! Bundled license information:

@dotlottie/common/dist/dotlottie-audio.js:
  (*! Bundled license information:
  
  howler/dist/howler.js:
    (*!
     *  howler.js v2.2.3
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     *)
    (*!
     *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
     *  
     *  howler.js v2.2.3
     *  howlerjs.com
     *
     *  (c) 2013-2020, James Simpson of GoldFire Studios
     *  goldfirestudios.com
     *
     *  MIT License
     *)
  *)
*/
//# sourceMappingURL=dotlottie-audio-P3HPZ7WS.js.map
