var _gsScope;
((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t, e, i, n, s, r, o, a, l, h, c, u, d, f;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    s = function(t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r) t[n] = "function" == typeof(s = r[n]) ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    r = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = r.prototype.render
                    },
                    o = i._internals,
                    a = o.isSelector,
                    l = o.isArray,
                    h = r.prototype = i.to({}, .1, {}),
                    c = [];
                r.version = "2.0.1", h.constructor = r, h.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, h.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var n, s = this.ratio,
                        r = this.vars.immediateRender || t.immediateRender;
                    for (n in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[n] = t[n];
                    if (this._initted || r)
                        if (e) this._initted = !1, r && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || r)
                        for (var a, l = 1 / (1 - s), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                    return this
                }, h.render = function(t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, a, l, h, c, u, d, f, g = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        p = this._totalTime,
                        v = this._cycle,
                        _ = this._duration,
                        w = this._rawPrevTime;
                    if (t >= g - 1e-7 && t >= 0 ? (this._totalTime = g, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === _ && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (w < 0 || t <= 0 && t >= -1e-7 || 1e-10 === w && "isPause" !== this.data) && w !== t && (n = !0, w > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || w === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === _ && w > 0) && (r = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || n) && (w >= 0 && (n = !0), this._rawPrevTime = d = !e || t || w === t ? t : 1e-10)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (this._cycle = this._totalTime / (l = _ + this._repeatDelay) >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time, (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (this._yoyoEase = f = !0 !== f || this._initted ? !0 === f ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease) ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f, this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase), this.ratio = f ? 1 - f.getRatio((_ - this._time) / _) : 0)), this._time > _ ? this._time = _ : this._time < 0 && (this._time = 0)), this._easeType && !f ? (h = this._time / _, u = this._easePower, (1 === (c = this._easeType) || 3 === c && h >= .5) && (h = 1 - h), 3 === c && (h *= 2), 1 === u ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h), this.ratio = 1 === c ? 1 - h : 2 === c ? h : this._time / _ < .5 ? h / 2 : 1 - h / 2) : f || (this.ratio = this._ease.getRatio(this._time / _))), m !== this._time || n || v !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = p, this._rawPrevTime = w, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                            !this._time || s || f ? s && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / _)
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === p && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== _ || e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                        this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== p || r) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === _ && 1e-10 === this._rawPrevTime && 1e-10 !== d && (this._rawPrevTime = 0)))
                    } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, o, h, u, d, f) {
                    h = h || 0;
                    var g, m, p, v, _ = 0,
                        w = [],
                        y = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(f || o.callbackScope || this, d || c)
                        },
                        b = o.cycle,
                        x = o.startAt && o.startAt.cycle;
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], h < 0 && ((t = n(t)).reverse(), h *= -1), g = t.length - 1, p = 0; p <= g; p++) {
                        for (v in m = {}, o) m[v] = o[v];
                        if (b && (s(m, t, p), null != m.duration && (e = m.duration, delete m.duration)), x) {
                            for (v in x = m.startAt = {}, o.startAt) x[v] = o.startAt[v];
                            s(m.startAt, t, p)
                        }
                        m.delay = _ + (m.delay || 0), p === g && u && (m.onComplete = y), w[p] = new r(t[p], e, m), _ += h
                    }
                    return w
                }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
                }, r.delayedCall = function(t, e, i, n, s) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var n = [], s = 0, r = t._first; r;) r instanceof i ? n[s++] = r : (e && (n[s++] = r), s = (n = n.concat(u(r, e))).length), r = r._next;
                        return n
                    },
                    d = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, s) {
                    null == i && (i = !0), null == n && (n = !0);
                    var r, o, a, l = d(0 != s),
                        h = l.length,
                        c = i && n && s;
                    for (a = 0; a < h; a++) o = l[a], (c || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var s, h, c, u, d, f = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            for (c in s = [], f)
                                for (h = f[c].target.parentNode; h;) h === t && (s = s.concat(f[c].tweens)), h = h.parentNode;
                            for (d = s.length, u = 0; u < d; u++) e && s[u].totalTime(s[u].totalDuration()), s[u]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, s) {
                    i = !1 !== i, n = !1 !== n;
                    for (var r, o, a = d(s = !1 !== s), l = i && n && s, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && o.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        s = i.ticker.time;
                    return arguments.length ? (n._startTime = s - (s - n._startTime) * n._timeScale / (e = e || 1e-10), (n = t._rootFramesTimeline)._startTime = (s = i.ticker.frame) - (s - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s) a(i = s[n]) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                        a(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    },
                    s = i._internals,
                    r = n._internals = {},
                    o = s.isSelector,
                    a = s.isArray,
                    l = s.lazyTweens,
                    h = s.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    u = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    d = function(t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r) t[n] = "function" == typeof(s = r[n]) ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    },
                    f = r.pauseCallback = function() {},
                    g = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "2.0.1", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, n, s) {
                    return e ? this.add(new(n.repeat && c.TweenMax || i)(t, e, n), s) : this.set(t, n, s)
                }, m.from = function(t, e, n, s) {
                    return this.add((n.repeat && c.TweenMax || i).from(t, e, n), s)
                }, m.fromTo = function(t, e, n, s, r) {
                    return e ? this.add((s.repeat && c.TweenMax || i).fromTo(t, e, n, s), r) : this.set(t, s, r)
                }, m.staggerTo = function(t, e, s, r, a, l, h, c) {
                    var f, m, p = new n({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = s.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = g(t)), (r = r || 0) < 0 && ((t = g(t)).reverse(), r *= -1), m = 0; m < t.length; m++)(f = u(s)).startAt && (f.startAt = u(f.startAt), f.startAt.cycle && d(f.startAt, t, m)), v && (d(f, t, m), null != f.duration && (e = f.duration, delete f.duration)), p.to(t[m], e, f, m * r);
                    return this.add(p, a)
                }, m.staggerFrom = function(t, e, i, n, s, r, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, o, a)
                }, m.staggerFromTo = function(t, e, i, n, s, r, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, o, a, l)
                }, m.call = function(t, e, n, s) {
                    return this.add(i.delayedCall(0, t, e, n), s)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var s, r, o, a, l = new n(t),
                        h = l._timeline;
                    for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, o = h._first; o;) a = o._next, e && o instanceof i && o.target === o.vars.onComplete || ((r = o._startTime - o._delay) < 0 && (s = 1), l.add(o, r)), o = a;
                    return h.add(l, 0), s && l.totalDuration(), l
                }, m.add = function(s, r, o, l) {
                    var h, c, u, d, f, g;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && a(s)) {
                            for (o = o || "normal", l = l || 0, h = r, c = s.length, u = 0; u < c; u++) a(d = s[u]) && (d = new n({
                                tweens: d
                            })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === o ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === o && (d._startTime -= d.delay())), h += l;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof s) return this.addLabel(s, r);
                        if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                    }
                    if (e.prototype.add.call(this, s, r), s._time && s.render((this.rawTime() - s._startTime) * s._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (g = (f = this).rawTime() > s._startTime; f._timeline;) g && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && a(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, n, s) {
                    var r = i.delayedCall(0, f, n, s || this);
                    return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, s) {
                    var r, o;
                    if (s instanceof t && s.timeline === this) this.remove(s);
                    else if (s && (s instanceof Array || s.push && a(s)))
                        for (o = s.length; --o > -1;) s[o] instanceof t && s[o].timeline === this && this.remove(s[o]);
                    if (r = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - r : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
                    else {
                        if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = r + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : r
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, r, o, a, c, u, d = this._time,
                        f = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._startTime,
                        m = this._timeScale,
                        p = this._paused;
                    if (d !== this._time && (t += this._time - d), t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
                    else if (t < 1e-7)
                        if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (a = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= d)
                                for (n = this._first; n && n._startTime <= t && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev;
                            c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== d && this._first || i || a || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= d)
                            for (n = this._first; n && (r = n._next, u === this._time && (!this._paused || p));)(n._active || n._startTime <= u && !n._paused && !n._gc) && (c === n && this.pause(), n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i)), n = r;
                        else
                            for (n = this._last; n && (r = n._prev, u === this._time && (!this._paused || p));) {
                                if (n._active || n._startTime <= d && !n._paused && !n._gc) {
                                    if (c === n) {
                                        for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                        c = null, this.pause()
                                    }
                                    n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i)
                                }
                                n = r
                            }
                        this._onUpdate && (e || (l.length && h(), this._callback("onUpdate"))), o && (this._gc || g !== this._startTime && m === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (s && (l.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, s) {
                    s = s || -9999999999;
                    for (var r = [], o = this._first, a = 0; o;) o._startTime < s || (o instanceof i ? !1 !== e && (r[a++] = o) : (!1 !== n && (r[a++] = o), !1 !== t && (a = (r = r.concat(o.getChildren(!0, e, n))).length))), o = o._next;
                    return r
                }, m.getTweensOf = function(t, e) {
                    var n, s, r = this._gc,
                        o = [],
                        a = 0;
                    for (r && this._enabled(!0, !0), s = (n = i.getTweensOf(t)).length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (o[a++] = n[s]);
                    return r && this._enabled(!1, !0), o
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                    if (e)
                        for (n in r) r[n] >= i && (r[n] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                    return s
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var s = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, s
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : r = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), (i = s._startTime + s._totalDuration / s._timeScale) > n && (n = i), s = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    s = e._internals,
                    r = s.lazyTweens,
                    o = s.lazyRender,
                    a = _gsScope._gsDefine.globals,
                    l = new i(null, null, 1, 0),
                    h = n.prototype = new t;
                return h.constructor = n, h.kill()._gc = !1, n.version = "2.0.1", h.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function(t, i, n, s) {
                    return this.add(e.delayedCall(0, t, n, s), i)
                }, h.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                    return this
                }, h.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, h.tweenTo = function(t, i) {
                    i = i || {};
                    var n, s, r, o = {
                            ease: l,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        h = i.repeat && a.TweenMax || e;
                    for (s in i) o[s] = i[s];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new h(this, n, o), o.onStart = function() {
                        r.target.paused(!0), r.vars.time === r.target.time() || n !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
                    }, r
                }, h.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var n = this.tweenTo(e, i);
                    return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, a, l, h, c, u, d, f = this._time,
                        g = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        p = this._totalTime,
                        v = this._startTime,
                        _ = this._timeScale,
                        w = this._rawPrevTime,
                        y = this._paused,
                        b = this._cycle;
                    if (f !== this._time && (t += this._time - f), t >= g - 1e-7 && t >= 0) this._locked || (this._totalTime = g, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || w < 0 || 1e-10 === w) && w !== t && this._first && (h = !0, w > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (t < 1e-7)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === m && 1e-10 !== w && (w > 0 || t < 0 && w >= 0) && !this._locked) && (l = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, l = "onReverseComplete") : w >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else if (0 === m && w < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (this._cycle = this._totalTime / (c = m + this._repeatDelay) >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= f || this._repeat && b !== this._cycle)
                            for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                        u && u._startTime < m && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var x = this._yoyo && 0 != (1 & b),
                            $ = x === (this._yoyo && 0 != (1 & this._cycle)),
                            S = this._totalTime,
                            C = this._cycle,
                            T = this._rawPrevTime,
                            k = this._time;
                        if (this._totalTime = b * m, this._cycle < b ? x = !x : this._totalTime += m, this._time = f, this._rawPrevTime = 0 === m ? w - 1e-4 : w, this._cycle = b, this._locked = !0, this.render(f = x ? 0 : m, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = C, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                        if ($ && (this._cycle = b, this._locked = !0, this.render(f = x ? m + 1e-4 : -1e-4, !0, !1)), this._locked = !1, this._paused && !y) return;
                        this._time = k, this._totalTime = S, this._cycle = C, this._rawPrevTime = T
                    }
                    if (this._time !== f && this._first || i || h || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (d = this._time) >= f)
                            for (n = this._first; n && (a = n._next, d === this._time && (!this._paused || y));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, d === this._time && (!this._paused || y));) {
                                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                    if (u === n) {
                                        for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i)
                                }
                                n = a
                            }
                        this._onUpdate && (e || (r.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && _ === this._timeScale || (0 === this._time || g >= this.totalDuration()) && (s && (r.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                    } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, h.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, s, r = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; n < l; n++)(s = o[n]).isActive() && (r[a++] = s);
                    return r
                }, h.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; e < n; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, h.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, h.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0), t = 180 / Math.PI, e = [], i = [], n = [], s = {}, r = _gsScope._gsDefine.globals, o = function(t, e, i, n) {
                i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
            }, a = function(t, e, i, n) {
                var s = {
                        a: t
                    },
                    r = {},
                    o = {},
                    a = {
                        c: n
                    },
                    l = (t + e) / 2,
                    h = (e + i) / 2,
                    c = (i + n) / 2,
                    u = (l + h) / 2,
                    d = (h + c) / 2,
                    f = (d - u) / 8;
                return s.b = l + (t - l) / 4, r.b = u + f, s.c = r.a = (s.b + r.b) / 2, r.c = o.a = (u + d) / 2, o.b = d - f, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [s, r, o, a]
            }, l = function(t, s, r, o, l) {
                var h, c, u, d, f, g, m, p, v, _, w, y, b, x = t.length - 1,
                    $ = 0,
                    S = t[0].a;
                for (h = 0; h < x; h++) c = (f = t[$]).a, u = f.d, d = t[$ + 1].d, l ? (b = ((y = i[h]) + (w = e[h])) * s * .25 / (o ? .5 : n[h] || .5), p = u - ((g = u - (u - c) * (o ? .5 * s : 0 !== w ? b / w : 0)) + (((m = u + (d - u) * (o ? .5 * s : 0 !== y ? b / y : 0)) - g) * (3 * w / (w + y) + .5) / 4 || 0))) : p = u - ((g = u - (u - c) * s * .5) + (m = u + (d - u) * s * .5)) / 2, m += p, f.c = v = g += p, f.b = 0 !== h ? S : S = f.a + .6 * (f.c - f.a), f.da = u - c, f.ca = v - c, f.ba = S - c, r ? (_ = a(c, S, v, u), t.splice($, 1, _[0], _[1], _[2], _[3]), $ += 4) : $++, S = m;
                (f = t[$]).b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, r && (_ = a(f.a, S, f.c, f.d), t.splice($, 1, _[0], _[1], _[2], _[3]))
            }, h = function(t, n, s, r) {
                var a, l, h, c, u, d, f = [];
                if (r)
                    for (l = (t = [r].concat(t)).length; --l > -1;) "string" == typeof(d = t[l][n]) && "=" === d.charAt(1) && (t[l][n] = r[n] + Number(d.charAt(0) + d.substr(2)));
                if ((a = t.length - 2) < 0) return f[0] = new o(t[0][n], 0, 0, t[0][n]), f;
                for (l = 0; l < a; l++) f[l] = new o(h = t[l][n], 0, 0, c = t[l + 1][n]), s && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
            }, c = function(t, r, o, a, c, u) {
                var d, f, g, m, p, v, _, w, y = {},
                    b = [],
                    x = u || t[0];
                for (f in c = "string" == typeof c ? "," + c + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == r && (r = 1), t[0]) b.push(f);
                if (t.length > 1) {
                    for (w = t[t.length - 1], _ = !0, d = b.length; --d > -1;)
                        if (f = b[d], Math.abs(x[f] - w[f]) > .05) {
                            _ = !1;
                            break
                        }
                    _ && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                }
                for (e.length = i.length = n.length = 0, d = b.length; --d > -1;) s[f = b[d]] = -1 !== c.indexOf("," + f + ","), y[f] = h(t, f, s[f], u);
                for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
                if (!a) {
                    for (d = b.length; --d > -1;)
                        if (s[f])
                            for (v = (g = y[b[d]]).length - 1, m = 0; m < v; m++) p = g[m + 1].da / i[m] + g[m].da / e[m] || 0, n[m] = (n[m] || 0) + p * p;
                    for (d = n.length; --d > -1;) n[d] = Math.sqrt(n[d])
                }
                for (d = b.length, m = o ? 4 : 1; --d > -1;) l(g = y[f = b[d]], r, o, a, s[f]), _ && (g.splice(0, m), g.splice(g.length - m, m));
                return y
            }, u = function(t, e, i) {
                for (var n, s, r, o, a, l, h, c, u, d, f, g = 1 / i, m = t.length; --m > -1;)
                    for (o = (d = t[m]).d - (r = d.a), a = d.c - r, l = d.b - r, n = s = 0, c = 1; c <= i; c++) n = s - (s = ((h = g * c) * h * o + 3 * (u = 1 - h) * (h * a + u * l)) * h), e[f = m * i + c - 1] = (e[f] || 0) + n * n
            }, d = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                    this._target = t, e instanceof Array && (e = {
                        values: e
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                    var n, s, r, a, l, h = e.values || [],
                        d = {},
                        f = h[0],
                        g = e.autoRotate || i.vars.orientToBezier;
                    for (n in this._autoRotate = g ? g instanceof Array ? g : [
                            ["x", "y", "rotation", !0 === g ? 0 : Number(g) || 0]
                        ] : null, f) this._props.push(n);
                    for (r = this._props.length; --r > -1;) this._overwriteProps.push(n = this._props[r]), s = this._func[n] = "function" == typeof t[n], d[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), l || d[n] !== h[0][n] && (l = d);
                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i) {
                            var n, s, r, a, l, h, c, u, d, f, g = {},
                                m = "cubic" === (e = e || "soft") ? 3 : 2,
                                p = "soft" === e,
                                v = [];
                            if (p && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data";
                            for (u in t[0]) v.push(u);
                            for (l = v.length; --l > -1;) {
                                for (g[u = v[l]] = a = [], d = 0, c = t.length, h = 0; h < c; h++) n = null == i ? t[h][u] : "string" == typeof(f = t[h][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f), p && h > 1 && h < c - 1 && (a[d++] = (n + a[d - 2]) / 2), a[d++] = n;
                                for (c = d - m + 1, d = 0, h = 0; h < c; h += m) n = a[h], s = a[h + 1], r = a[h + 2], a[d++] = f = 3 === m ? new o(n, s, r, 2 === m ? 0 : a[h + 3]) : new o(n, (2 * s + n) / 3, (2 * s + r) / 3, r);
                                a.length = d
                            }
                            return g
                        }(h, e.type, d), this._segCount = this._beziers[n].length, this._timeRes) {
                        var m = function(t, e) {
                            var i, n, s, r, o = [],
                                a = [],
                                l = 0,
                                h = 0,
                                c = (e = e >> 0 || 6) - 1,
                                d = [],
                                f = [];
                            for (i in t) u(t[i], o, e);
                            for (s = o.length, n = 0; n < s; n++) l += Math.sqrt(o[n]), f[r = n % e] = l, r === c && (h += l, d[r = n / e >> 0] = f, a[r] = h, l = 0, f = []);
                            return {
                                length: h,
                                lengths: a,
                                segments: d
                            }
                        }(this._beziers, this._timeRes);
                        this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (g = this._autoRotate)
                        for (this._initialRotations = [], g[0] instanceof Array || (this._autoRotate = g = [g]), r = g.length; --r > -1;) {
                            for (a = 0; a < 3; a++) this._func[n = g[r][a]] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                            this._initialRotations[r] = (this._func[n = g[r][2]] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                        }
                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function(e) {
                    var i, n, s, r, o, a, l, h, c, u, d = this._segCount,
                        f = this._func,
                        g = this._target,
                        m = e !== this._startRatio;
                    if (this._timeRes) {
                        if (c = this._lengths, u = this._curSeg, s = this._li, (e *= this._length) > this._l2 && s < d - 1) {
                            for (h = d - 1; s < h && (this._l2 = c[++s]) <= e;);
                            this._l1 = c[s - 1], this._li = s, this._curSeg = u = this._segments[s], this._s2 = u[this._s1 = this._si = 0]
                        } else if (e < this._l1 && s > 0) {
                            for (; s > 0 && (this._l1 = c[--s]) >= e;);
                            0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = c[s], this._li = s, this._curSeg = u = this._segments[s], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                        }
                        if (i = s, s = this._si, (e -= this._l1) > this._s2 && s < u.length - 1) {
                            for (h = u.length - 1; s < h && (this._s2 = u[++s]) <= e;);
                            this._s1 = u[s - 1], this._si = s
                        } else if (e < this._s1 && s > 0) {
                            for (; s > 0 && (this._s1 = u[--s]) >= e;);
                            0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = u[s], this._si = s
                        }
                        a = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else a = (e - (i = e < 0 ? 0 : e >= 1 ? d - 1 : d * e >> 0) * (1 / d)) * d;
                    for (n = 1 - a, s = this._props.length; --s > -1;) l = (a * a * (o = this._beziers[r = this._props[s]][i]).da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[r] && (l = this._mod[r](l, g)), f[r] ? g[r](l) : g[r] = l;
                    if (this._autoRotate) {
                        var p, v, _, w, y, b, x, $ = this._autoRotate;
                        for (s = $.length; --s > -1;) r = $[s][2], b = $[s][3] || 0, x = !0 === $[s][4] ? 1 : t, p = this._beziers[$[s][1]], (o = this._beziers[$[s][0]]) && p && (v = (o = o[i]).a + (o.b - o.a) * a, v += ((w = o.b + (o.c - o.b) * a) - v) * a, w += (o.c + (o.d - o.c) * a - w) * a, _ = (p = p[i]).a + (p.b - p.a) * a, _ += ((y = p.b + (p.c - p.b) * a) - _) * a, y += (p.c + (p.d - p.c) * a - y) * a, l = m ? Math.atan2(y - _, w - v) * x + b : this._initialRotations[s], this._mod[r] && (l = this._mod[r](l, g)), f[r] ? g[r](l) : g[r] = l)
                    }
                }
            }), f = d.prototype, d.bezierThrough = c, d.cubicToQuadratic = a, d._autoCSS = !0, d.quadraticToCubic = function(t, e, i) {
                return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, d._cssRegister = function() {
                var t = r.CSSPlugin;
                if (t) {
                    var e = t._internals,
                        i = e._parseToProxy,
                        n = e._setPluginRatio,
                        s = e.CSSPropTween;
                    e._registerComplexSpecialProp("bezier", {
                        parser: function(t, e, r, o, a, l) {
                            e instanceof Array && (e = {
                                values: e
                            }), l = new d;
                            var h, c, u, f = e.values,
                                g = f.length - 1,
                                m = [],
                                p = {};
                            if (g < 0) return a;
                            for (h = 0; h <= g; h++) u = i(t, f[h], o, a, l, g !== h), m[h] = u.end;
                            for (c in e) p[c] = e[c];
                            return p.values = m, (a = new s(t, "bezier", 0, 0, u.pt, 2)).data = u, a.plugin = l, a.setRatio = n, 0 === p.autoRotate && (p.autoRotate = !0), !p.autoRotate || p.autoRotate instanceof Array || (h = !0 === p.autoRotate ? 0 : Number(p.autoRotate), p.autoRotate = null != u.end.left ? [
                                ["left", "top", "rotation", h, !1]
                            ] : null != u.end.x && [
                                ["x", "y", "rotation", h, !1]
                            ]), p.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(u.proxy, p, o._tween), a
                        }
                    })
                }
            }, f._mod = function(t) {
                for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
            }, f._kill = function(t) {
                var e, i, n = this._props;
                for (e in this._beziers)
                    if (e in t)
                        for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                if (n = this._autoRotate)
                    for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                return this._super._kill.call(this, t)
            }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, s, r, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    h = o.prototype = new t("css");
                h.constructor = o, o.version = "1.20.5", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, o.suffixMap = {
                    top: h = "px",
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var c, u, d, f, g, m, p, v, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    $ = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    C = /alpha\(opacity *=.+?\)/i,
                    T = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    A = /-([a-z])/gi,
                    R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    L = function(t, e) {
                        return e.toUpperCase()
                    },
                    M = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    P = /,(?=[^\)]*(?:\(|$))/gi,
                    F = /[\s,\(]/i,
                    D = Math.PI / 180,
                    I = 180 / Math.PI,
                    W = {},
                    B = {
                        style: {}
                    },
                    N = _gsScope.document || {
                        createElement: function() {
                            return B
                        }
                    },
                    H = function(t, e) {
                        return N.createElementNS ? N.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : N.createElement(t)
                    },
                    z = H("div"),
                    V = H("img"),
                    U = o._internals = {
                        _specialProps: l
                    },
                    K = (_gsScope.navigator || {}).userAgent || "",
                    G = function() {
                        var t = K.indexOf("Android"),
                            e = H("a");
                        return d = -1 !== K.indexOf("Safari") && -1 === K.indexOf("Chrome") && (-1 === t || parseFloat(K.substr(t + 8, 2)) > 3), g = d && parseFloat(K.substr(K.indexOf("Version/") + 8, 2)) < 6, f = -1 !== K.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(K) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(K)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    j = function(t) {
                        return $.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    X = function(t) {
                        _gsScope.console && console.log(t)
                    },
                    Y = "",
                    q = "",
                    Q = function(t, e) {
                        var i, n, s = (e = e || z).style;
                        if (void 0 !== s[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === s[i[n] + t];);
                        return n >= 0 ? (Y = "-" + (q = 3 === n ? "ms" : i[n]).toLowerCase() + "-", q + t) : null
                    },
                    Z = ("undefined" != typeof window ? window : N.defaultView || {
                        getComputedStyle: function() {}
                    }).getComputedStyle,
                    J = o.getStyle = function(t, e, i, n, s) {
                        var r;
                        return G || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || Z(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : j(t)
                    },
                    tt = U.convertToPixels = function(t, i, n, s, r) {
                        if ("px" === s || !s && "lineHeight" !== i) return n;
                        if ("auto" === s || !n) return 0;
                        var a, l, h, c = M.test(i),
                            u = t,
                            d = z.style,
                            f = n < 0,
                            g = 1 === n;
                        if (f && (n = -n), g && (n *= 100), "lineHeight" !== i || s)
                            if ("%" === s && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                            else {
                                if (d.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[c ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                                else {
                                    if (-1 !== J(u = t.parentNode || N.body, "display").indexOf("flex") && (d.position = "absolute"), h = e.ticker.frame, (l = u._gsCache) && c && l.time === h) return l.width * n / 100;
                                    d[c ? "width" : "height"] = n + s
                                }
                                u.appendChild(z), a = parseFloat(z[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(z), c && "%" === s && !1 !== o.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = h, l.width = a / n * 100), 0 !== a || r || (a = tt(t, i, n, s, !0))
                            }
                        else l = Z(t).lineHeight, t.style.lineHeight = n, a = parseFloat(Z(t).lineHeight), t.style.lineHeight = l;
                        return g && (a /= 100), f ? -a : a
                    },
                    et = U.calculateOffset = function(t, e, i) {
                        if ("absolute" !== J(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            s = J(t, "margin" + n, i);
                        return t["offset" + n] - (tt(t, e, parseFloat(s), s.replace(x, "")) || 0)
                    },
                    it = function(t, e) {
                        var i, n, s, r = {};
                        if (e = e || Z(t, null))
                            if (i = e.length)
                                for (; --i > -1;) - 1 !== (s = e[i]).indexOf("-transform") && Ot !== s || (r[s.replace(A, L)] = e.getPropertyValue(s));
                            else
                                for (i in e) - 1 !== i.indexOf("Transform") && Et !== i || (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(A, L)] = e[i]);
                        return G || (r.opacity = j(t)), n = Gt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, Ft && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    nt = function(t, e, i, n, s) {
                        var r, o, a, l = {},
                            h = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || s && s[o]) && -1 === o.indexOf("Origin") && ("number" != typeof r && "string" != typeof r || (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(b, "") ? r : 0 : et(t, o), void 0 !== h[o] && (a = new _t(h, o, h[o], a))));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    st = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ot = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || Z(t))[e] || 0;
                        if (t.getCTM && Vt(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            s = st[e],
                            r = s.length;
                        for (i = i || Z(t, null); --r > -1;) n -= parseFloat(J(t, "padding" + s[r], i, !0)) || 0, n -= parseFloat(J(t, "border" + s[r] + "Width", i, !0)) || 0;
                        return n
                    },
                    at = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        null != t && "" !== t || (t = "0 0");
                        var i, n = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(at(n[i]));
                            return t.join(",")
                        }
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + r + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(b, "")), e.oy = parseFloat(r.replace(b, "")), e.v = t), e || t
                    },
                    lt = function(t, e) {
                        return "function" == typeof t && (t = t(v, p)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ht = function(t, e) {
                        return "function" == typeof t && (t = t(v, p)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ct = function(t, e, i, n) {
                        var s, r, o, a, l;
                        return "function" == typeof t && (t = t(v, p)), null == t ? a = e : "number" == typeof t ? a = t : (s = 360, r = t.split("_"), o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), r.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= s) != o % (s / 2) && (o = o < 0 ? o + s : o - s), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * s) % s - (o / s | 0) * s : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * s) % s - (o / s | 0) * s)), a = e + o), a < 1e-6 && a > -1e-6 && (a = 0), a
                    },
                    ut = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    dt = function(t, e, i) {
                        return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ft = o.parseColor = function(t, e) {
                        var i, n, s, r, o, a, l, h, c, u, d;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (n = t.charAt(1)) + n + (s = t.charAt(2)) + s + (r = t.charAt(3)) + r), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = d = t.match(_), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(w)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (s = l <= .5 ? l * (a + 1) : l + a - l * a), i.length > 3 && (i[3] = Number(i[3])), i[0] = dt(o + 1 / 3, n, s), i[1] = dt(o, n, s), i[2] = dt(o - 1 / 3, n, s);
                                else i = t.match(_) || ut.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ut.black;
                        return e && !d && (n = i[0] / 255, s = i[1] / 255, r = i[2] / 255, l = ((h = Math.max(n, s, r)) + (c = Math.min(n, s, r))) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === n ? (s - r) / u + (s < r ? 6 : 0) : h === s ? (r - n) / u + 2 : (n - s) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    gt = function(t, e) {
                        var i, n, s, r = t.match(mt) || [],
                            o = 0,
                            a = "";
                        if (!r.length) return t;
                        for (i = 0; i < r.length; i++) o += (s = t.substr(o, t.indexOf(n = r[i], o) - o)).length + n.length, 3 === (n = ft(n, e)).length && n.push(1), a += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + t.substr(o)
                    },
                    mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ut) mt += "|" + h + "\\b";
                mt = new RegExp(mt + ")", "gi"), o.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = gt(t[0], e), t[1] = gt(t[1], e)), mt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var pt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var s, r = e ? (t.match(mt) || [""])[0] : "",
                            o = t.split(r).join("").match(y) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            u = c > 0 ? o[0].replace(_, "") : "";
                        return c ? s = e ? function(t) {
                            var e, d, f, g;
                            if ("number" == typeof t) t += u;
                            else if (n && P.test(t)) {
                                for (g = t.replace(P, "|").split("|"), f = 0; f < g.length; f++) g[f] = s(g[f]);
                                return g.join(",")
                            }
                            if (e = (t.match(mt) || [r])[0], f = (d = t.split(e).join("").match(y) || []).length, c > f--)
                                for (; ++f < c;) d[f] = i ? d[(f - 1) / 2 | 0] : o[f];
                            return a + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, d;
                            if ("number" == typeof t) t += u;
                            else if (n && P.test(t)) {
                                for (r = t.replace(P, "|").split("|"), d = 0; d < r.length; d++) r[d] = s(r[d]);
                                return r.join(",")
                            }
                            if (d = (e = t.match(y) || []).length, c > d--)
                                for (; ++d < c;) e[d] = i ? e[(d - 1) / 2 | 0] : o[d];
                            return a + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    vt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, s, r, o, a) {
                                var l, h = (i + "").split(" ");
                                for (a = {}, l = 0; l < 4; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return s.parse(e, a, r, o)
                            }
                    },
                    _t = (U._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, r, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t)
                            for (l = o.firstMPT, r = 1 === t ? "e" : "b"; l;) {
                                if ((i = l.t).type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) s += i["xn" + n] + i["xs" + (n + 1)];
                                        i[r] = s
                                    }
                                } else i[r] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, s) {
                        this.t = t, this.p = e, this.v = i, this.r = s, n && (n._prev = this, this._next = n)
                    }),
                    wt = (U._parseToProxy = function(t, e, i, n, s, r) {
                        var o, a, l, h, c, u = n,
                            d = {},
                            f = {},
                            g = i._transform,
                            m = W;
                        for (i._transform = null, W = e, n = c = i.parse(t, e, n, s), W = m, r && (i._transform = g, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (n.type <= 1 && (f[a = n.p] = n.s + n.c, d[a] = n.s, r || (h = new _t(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) f[a = n.p + "_" + (l = "xn" + o)] = n.data[l], d[a] = n[l], r || (h = new _t(n, l, a, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: d,
                            end: f,
                            firstMPT: h,
                            pt: c
                        }
                    }, U.CSSPropTween = function(t, e, n, s, o, a, l, h, c, u, d) {
                        this.t = t, this.p = e, this.s = n, this.c = s, this.n = l || e, t instanceof wt || r.push(this.n), this.r = h ? "function" == typeof h ? h : Math.round : h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === d ? n + s : d, o && (this._next = o, o._prev = this)
                    }),
                    yt = function(t, e, i, n, s, r) {
                        var o = new wt(t, e, i, n - i, s, -1, r);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    bt = o.parseComplex = function(t, e, i, n, s, r, a, l, h, u) {
                        i = i || r || "", "function" == typeof n && (n = n(v, p)), a = new wt(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, n), n += "", s && mt.test(n + i) && (o.colorStringFilter(n = [i, n]), i = n[0], n = n[1]);
                        var d, f, g, m, y, b, x, $, S, C, T, k, A, R = i.split(", ").join(",").split(" "),
                            L = n.split(", ").join(",").split(" "),
                            M = R.length,
                            E = !1 !== c;
                        for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (R = R.join(" ").replace(P, ", ").split(" "), L = L.join(" ").replace(P, ", ").split(" ")) : (R = R.join(" ").split(",").join(", ").split(" "), L = L.join(" ").split(",").join(", ").split(" ")), M = R.length), M !== L.length && (M = (R = (r || "").split(" ")).length), a.plugin = h, a.setRatio = u, mt.lastIndex = 0, d = 0; d < M; d++)
                            if (m = R[d], y = L[d] + "", ($ = parseFloat(m)) || 0 === $) a.appendXtra("", $, lt(y, $), y.replace(w, ""), !(!E || -1 === y.indexOf("px")) && Math.round, !0);
                            else if (s && mt.test(m)) k = ")" + ((k = y.indexOf(")") + 1) ? y.substr(k) : ""), A = -1 !== y.indexOf("hsl") && G, C = y, m = ft(m, A), y = ft(y, A), (S = m.length + y.length > 6) && !G && 0 === y[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(L[d]).join("transparent")) : (G || (S = !1), A ? a.appendXtra(C.substr(0, C.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], lt(y[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(y[1], m[1]), "%,", !1).appendXtra("", m[2], lt(y[2], m[2]), S ? "%," : "%" + k, !1) : a.appendXtra(C.substr(0, C.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], y[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], y[1] - m[1], ",", Math.round).appendXtra("", m[2], y[2] - m[2], S ? "," : k, Math.round), S && a.appendXtra("", m = m.length < 4 ? 1 : m[3], (y.length < 4 ? 1 : y[3]) - m, k, !1)), mt.lastIndex = 0;
                        else if (b = m.match(_)) {
                            if (!(x = y.match(w)) || x.length !== b.length) return a;
                            for (g = 0, f = 0; f < b.length; f++) C = m.indexOf(T = b[f], g), a.appendXtra(m.substr(g, C - g), Number(T), lt(x[f], T), "", !(!E || "px" !== m.substr(C + T.length, 2)) && Math.round, 0 === f), g = C + T.length;
                            a["xs" + a.l] += m.substr(g)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + y : y;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (k = a.xs0 + a.data.s, d = 1; d < a.l; d++) k += a["xs" + d] + a.data["xn" + d];
                            a.e = k + a["xs" + d]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    xt = 9;
                for ((h = wt.prototype).l = h.pr = 0; --xt > 0;) h["xn" + xt] = 0, h["xs" + xt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, s, r) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += r && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = s, o["xn" + a] = e, o.plugin || (o.xfirst = new wt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, s, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = s, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var $t = function(t, e) {
                        this.p = (e = e || {}).prefix && Q(t) || t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    St = U._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, s = t.split(","),
                            r = e.defaultValue;
                        for (i = i || [r], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || r, new $t(s[n], e)
                    },
                    Ct = U._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            St(t, {
                                parser: function(t, i, n, s, r, o, h) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, s, r, o, h)) : (X("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                (h = $t.prototype).parseComplex = function(t, e, i, n, s, r) {
                    var o, a, l, h, c, u, d = this.keyword;
                    if (this.multi && (P.test(i) || P.test(e) ? (a = e.replace(P, "|").split("|"), l = i.replace(P, "|").split("|")) : d && (a = [e], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, o = 0; o < h; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, d && (c = e.indexOf(d)) !== (u = i.indexOf(d)) && (-1 === u ? a[o] = a[o].split(d).join("") : -1 === c && (a[o] += " " + d));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
                }, h.parse = function(t, e, i, n, r, o, a) {
                    return this.parseComplex(t.style, this.format(J(t, this.p, s, !1, this.dflt)), this.format(e), r, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    St(t, {
                        parser: function(t, n, s, r, o, a, l) {
                            var h = new wt(t, s, 0, 0, o, 2, s, !1, i);
                            return h.plugin = a, h.setRatio = e(t, n, r._tween, s), h
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = !0;
                var Tt, kt, At, Rt, Lt, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Et = Q("transform"),
                    Ot = Y + "transform",
                    Pt = Q("transformOrigin"),
                    Ft = null !== Q("perspective"),
                    Dt = U.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Ft) && (o.defaultForce3D || "auto")
                    },
                    It = _gsScope.SVGElement,
                    Wt = function(t, e, i) {
                        var n, s = N.createElementNS("http://www.w3.org/2000/svg", t),
                            r = /([a-z])([A-Z])/g;
                        for (n in i) s.setAttributeNS(null, n.replace(r, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(s), s
                    },
                    Bt = N.documentElement || {},
                    Nt = (Lt = m || /Android/i.test(K) && !_gsScope.chrome, N.createElementNS && !Lt && (Rt = (At = Wt("rect", kt = Wt("svg", Bt), {
                        width: 100,
                        height: 50,
                        x: 100
                    })).getBoundingClientRect().width, At.style[Pt] = "50% 50%", At.style[Et] = "scaleX(0.5)", Lt = Rt === At.getBoundingClientRect().width && !(f && Ft), Bt.removeChild(kt)), Lt),
                    Ht = function(t, e, i, n, s, r) {
                        var a, l, h, c, u, d, f, g, m, p, v, _, w, y, b = t._gsTransform,
                            x = Kt(t, !0);
                        b && (w = b.xOrigin, y = b.yOrigin), (!n || (a = n.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), a = [(-1 !== (e = at(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), n && x !== Ut && (p = x[4], v = x[5], (_ = (d = x[0]) * (m = x[3]) - (f = x[1]) * (g = x[2])) && (h = c * (-f / _) + u * (d / _) - (d * v - f * p) / _, c = i.xOrigin = a[0] = l = c * (m / _) + u * (-g / _) + (g * v - m * p) / _, u = i.yOrigin = a[1] = h)), b && (r && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), s || !1 !== s && !1 !== o.defaultSmoothOrigin ? (b.xOffset += (l = c - w) * x[0] + (h = u - y) * x[2] - l, b.yOffset += l * x[1] + h * x[3] - h) : b.xOffset = b.yOffset = 0), r || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    zt = function(t) {
                        var e, i = H("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            s = this.nextSibling,
                            r = this.style.cssText;
                        if (Bt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = zt
                        } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return s ? n.insertBefore(this, s) : n.appendChild(this), Bt.removeChild(i), this.style.cssText = r, e
                    },
                    Vt = function(t) {
                        return !(!It || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(t) {
                            try {
                                return t.getBBox()
                            } catch (e) {
                                return zt.call(t, !0)
                            }
                        }(t))
                    },
                    Ut = [1, 0, 0, 1, 0, 0],
                    Kt = function(t, e) {
                        var i, n, s, r, o, a, l = t._gsTransform || new Dt,
                            h = t.style;
                        if (Et ? n = J(t, Ot, null, !0) : t.currentStyle && (n = (n = t.currentStyle.filter.match(E)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Et || !(a = !Z(t) || "none" === Z(t).display) && t.parentNode || (a && (r = h.display, h.display = "block"), t.parentNode || (o = 1, Bt.appendChild(t)), i = !(n = J(t, Ot, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, r ? h.display = r : a && qt(h, "display"), o && Bt.removeChild(t)), (l.svg || t.getCTM && Vt(t)) && (i && -1 !== (h[Et] + "").indexOf("matrix") && (n = h[Et], i = 0), s = t.getAttribute("transform"), i && s && (n = "matrix(" + (s = t.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return Ut;
                        for (s = (n || "").match(_) || [], xt = s.length; --xt > -1;) r = Number(s[xt]), s[xt] = (o = r - (r |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + r : r;
                        return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    },
                    Gt = U.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var r, a, l, h, c, u, d = n && t._gsTransform || new Dt,
                            f = d.scaleX < 0,
                            g = Ft && (parseFloat(J(t, Pt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin) || 0,
                            m = parseFloat(o.defaultTransformPerspective) || 0;
                        if (d.svg = !(!t.getCTM || !Vt(t)), d.svg && (Ht(t, J(t, Pt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Tt = o.useSVGTransformAttr || Nt), (r = Kt(t)) !== Ut) {
                            if (16 === r.length) {
                                var p, v, _, w, y, b = r[0],
                                    x = r[1],
                                    $ = r[2],
                                    S = r[3],
                                    C = r[4],
                                    T = r[5],
                                    k = r[6],
                                    A = r[7],
                                    R = r[8],
                                    L = r[9],
                                    M = r[10],
                                    E = r[12],
                                    O = r[13],
                                    P = r[14],
                                    F = r[11],
                                    D = Math.atan2(k, M);
                                d.zOrigin && (E = R * (P = -d.zOrigin) - r[12], O = L * P - r[13], P = M * P + d.zOrigin - r[14]), d.rotationX = D * I, D && (p = C * (w = Math.cos(-D)) + R * (y = Math.sin(-D)), v = T * w + L * y, _ = k * w + M * y, R = C * -y + R * w, L = T * -y + L * w, M = k * -y + M * w, F = A * -y + F * w, C = p, T = v, k = _), D = Math.atan2(-$, M), d.rotationY = D * I, D && (v = x * (w = Math.cos(-D)) - L * (y = Math.sin(-D)), _ = $ * w - M * y, L = x * y + L * w, M = $ * y + M * w, F = S * y + F * w, b = p = b * w - R * y, x = v, $ = _), D = Math.atan2(x, b), d.rotation = D * I, D && (p = b * (w = Math.cos(D)) + x * (y = Math.sin(D)), v = C * w + T * y, _ = R * w + L * y, x = x * w - b * y, T = T * w - C * y, L = L * w - R * y, b = p, C = v, R = _), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), D = Math.atan2(C, T), d.scaleX = (1e5 * Math.sqrt(b * b + x * x + $ * $) + .5 | 0) / 1e5, d.scaleY = (1e5 * Math.sqrt(T * T + k * k) + .5 | 0) / 1e5, d.scaleZ = (1e5 * Math.sqrt(R * R + L * L + M * M) + .5 | 0) / 1e5, b /= d.scaleX, C /= d.scaleY, x /= d.scaleX, T /= d.scaleY, Math.abs(D) > 2e-5 ? (d.skewX = D * I, C = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(D))) : d.skewX = 0, d.perspective = F ? 1 / (F < 0 ? -F : F) : 0, d.x = E, d.y = O, d.z = P, d.svg && (d.x -= d.xOrigin - (d.xOrigin * b - d.yOrigin * C), d.y -= d.yOrigin - (d.yOrigin * x - d.xOrigin * T))
                            } else if (!Ft || s || !r.length || d.x !== r[4] || d.y !== r[5] || !d.rotationX && !d.rotationY) {
                                var W = r.length >= 6,
                                    B = W ? r[0] : 1,
                                    N = r[1] || 0,
                                    H = r[2] || 0,
                                    z = W ? r[3] : 1;
                                d.x = r[4] || 0, d.y = r[5] || 0, l = Math.sqrt(B * B + N * N), h = Math.sqrt(z * z + H * H), c = B || N ? Math.atan2(N, B) * I : d.rotation || 0, u = H || z ? Math.atan2(H, z) * I + c : d.skewX || 0, d.scaleX = l, d.scaleY = h, d.rotation = c, d.skewX = u, Ft && (d.rotationX = d.rotationY = d.z = 0, d.perspective = m, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * B + d.yOrigin * H), d.y -= d.yOrigin - (d.xOrigin * N + d.yOrigin * z))
                            }
                            for (a in Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (f ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = g, d) d[a] < 2e-5 && d[a] > -2e-5 && (d[a] = 0)
                        }
                        return n && (t._gsTransform = d, d.svg && (Tt && t.style[Et] ? e.delayedCall(.001, function() {
                            qt(t.style, Et)
                        }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), d
                    },
                    jt = function(t) {
                        var e, i, n = this.data,
                            s = -n.rotation * D,
                            r = s + n.skewX * D,
                            o = (Math.cos(s) * n.scaleX * 1e5 | 0) / 1e5,
                            a = (Math.sin(s) * n.scaleX * 1e5 | 0) / 1e5,
                            l = (Math.sin(r) * -n.scaleY * 1e5 | 0) / 1e5,
                            h = (Math.cos(r) * n.scaleY * 1e5 | 0) / 1e5,
                            c = this.t.style,
                            u = this.t.currentStyle;
                        if (u) {
                            i = a, a = -l, l = -i, e = u.filter, c.filter = "";
                            var d, f, g = this.t.offsetWidth,
                                p = this.t.offsetHeight,
                                v = "absolute" !== u.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + h,
                                w = n.x + g * n.xPercent / 100,
                                y = n.y + p * n.yPercent / 100;
                            if (null != n.ox && (w += (d = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2) - (d * o + (f = (n.oyp ? p * n.oy * .01 : n.oy) - p / 2) * a), y += f - (d * l + f * h)), _ += v ? ", Dx=" + ((d = g / 2) - (d * o + (f = p / 2) * a) + w) + ", Dy=" + (f - (d * l + f * h) + y) + ")" : ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, _) : _ + " " + e, 0 !== t && 1 !== t || 1 === o && 0 === a && 0 === l && 1 === h && (v && -1 === _.indexOf("Dx=0, Dy=0") || $.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) {
                                var b, S, C, T = m < 8 ? 1 : -1;
                                for (d = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((o < 0 ? -o : o) * g + (a < 0 ? -a : a) * p)) / 2 + w), n.ieOffsetY = Math.round((p - ((h < 0 ? -h : h) * p + (l < 0 ? -l : l) * g)) / 2 + y), xt = 0; xt < 4; xt++) C = (i = -1 !== (b = u[S = rt[xt]]).indexOf("px") ? parseFloat(b) : tt(this.t, S, parseFloat(b), b.replace(x, "")) || 0) !== n[S] ? xt < 2 ? -n.ieOffsetX : -n.ieOffsetY : xt < 2 ? d - n.ieOffsetX : f - n.ieOffsetY, c[S] = (n[S] = Math.round(i - C * (0 === xt || 2 === xt ? 1 : T))) + "px"
                            }
                        }
                    },
                    Xt = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                        var e, i, n, s, r, o, a, l, h, c, u, d, g, m, p, v, _, w, y, b, x, $ = this.data,
                            S = this.t.style,
                            C = $.rotation,
                            T = $.rotationX,
                            k = $.rotationY,
                            A = $.scaleX,
                            R = $.scaleY,
                            L = $.scaleZ,
                            M = $.x,
                            E = $.y,
                            O = $.z,
                            P = $.svg,
                            F = $.perspective,
                            I = $.force3D,
                            W = $.skewY,
                            B = $.skewX;
                        if (W && (B += W, C += W), !((1 !== t && 0 !== t || "auto" !== I || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && I || O || F || k || T || 1 !== L) || Tt && P || !Ft) C || B || P ? (C *= D, b = B * D, x = 1e5, i = Math.cos(C) * A, r = Math.sin(C) * A, n = Math.sin(C - b) * -R, o = Math.cos(C - b) * R, b && "simple" === $.skewType && (e = Math.tan(b - W * D), n *= e = Math.sqrt(1 + e * e), o *= e, W && (e = Math.tan(W * D), i *= e = Math.sqrt(1 + e * e), r *= e)), P && (M += $.xOrigin - ($.xOrigin * i + $.yOrigin * n) + $.xOffset, E += $.yOrigin - ($.xOrigin * r + $.yOrigin * o) + $.yOffset, Tt && ($.xPercent || $.yPercent) && (p = this.t.getBBox(), M += .01 * $.xPercent * p.width, E += .01 * $.yPercent * p.height), M < (p = 1e-6) && M > -p && (M = 0), E < p && E > -p && (E = 0)), y = (i * x | 0) / x + "," + (r * x | 0) / x + "," + (n * x | 0) / x + "," + (o * x | 0) / x + "," + M + "," + E + ")", P && Tt ? this.t.setAttribute("transform", "matrix(" + y) : S[Et] = ($.xPercent || $.yPercent ? "translate(" + $.xPercent + "%," + $.yPercent + "%) matrix(" : "matrix(") + y) : S[Et] = ($.xPercent || $.yPercent ? "translate(" + $.xPercent + "%," + $.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + R + "," + M + "," + E + ")";
                        else {
                            if (f && (A < (p = 1e-4) && A > -p && (A = L = 2e-5), R < p && R > -p && (R = L = 2e-5), !F || $.z || $.rotationX || $.rotationY || (F = 0)), C || B) C *= D, v = i = Math.cos(C), _ = r = Math.sin(C), B && (C -= B * D, v = Math.cos(C), _ = Math.sin(C), "simple" === $.skewType && (e = Math.tan((B - W) * D), v *= e = Math.sqrt(1 + e * e), _ *= e, $.skewY && (e = Math.tan(W * D), i *= e = Math.sqrt(1 + e * e), r *= e))), n = -_, o = v;
                            else {
                                if (!(k || T || 1 !== L || F || P)) return void(S[Et] = ($.xPercent || $.yPercent ? "translate(" + $.xPercent + "%," + $.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + E + "px," + O + "px)" + (1 !== A || 1 !== R ? " scale(" + A + "," + R + ")" : ""));
                                i = o = 1, n = r = 0
                            }
                            c = 1, s = a = l = h = u = d = 0, g = F ? -1 / F : 0, m = $.zOrigin, p = 1e-6, (C = k * D) && (v = Math.cos(C), l = -(_ = Math.sin(C)), u = g * -_, s = i * _, a = r * _, c = v, g *= v, i *= v, r *= v), (C = T * D) && (e = n * (v = Math.cos(C)) + s * (_ = Math.sin(C)), w = o * v + a * _, h = c * _, d = g * _, s = n * -_ + s * v, a = o * -_ + a * v, c *= v, g *= v, n = e, o = w), 1 !== L && (s *= L, a *= L, c *= L, g *= L), 1 !== R && (n *= R, o *= R, h *= R, d *= R), 1 !== A && (i *= A, r *= A, l *= A, u *= A), (m || P) && (m && (M += s * -m, E += a * -m, O += c * -m + m), P && (M += $.xOrigin - ($.xOrigin * i + $.yOrigin * n) + $.xOffset, E += $.yOrigin - ($.xOrigin * r + $.yOrigin * o) + $.yOffset), M < p && M > -p && (M = "0"), E < p && E > -p && (E = "0"), O < p && O > -p && (O = 0)), y = $.xPercent || $.yPercent ? "translate(" + $.xPercent + "%," + $.yPercent + "%) matrix3d(" : "matrix3d(", y += (i < p && i > -p ? "0" : i) + "," + (r < p && r > -p ? "0" : r) + "," + (l < p && l > -p ? "0" : l), y += "," + (u < p && u > -p ? "0" : u) + "," + (n < p && n > -p ? "0" : n) + "," + (o < p && o > -p ? "0" : o), T || k || 1 !== L ? (y += "," + (h < p && h > -p ? "0" : h) + "," + (d < p && d > -p ? "0" : d) + "," + (s < p && s > -p ? "0" : s), y += "," + (a < p && a > -p ? "0" : a) + "," + (c < p && c > -p ? "0" : c) + "," + (g < p && g > -p ? "0" : g) + ",") : y += ",0,0,0,0,1,0,", S[Et] = y += M + "," + E + "," + O + "," + (F ? 1 + -O / F : 1) + ")"
                        }
                    };
                (h = Dt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, r, a, l) {
                        if (n._lastParsedTransform === l) return r;
                        n._lastParsedTransform = l;
                        var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(v, t));
                        var u, d, f, g, m, _, w, y, b, x = t._gsTransform,
                            $ = t.style,
                            S = Mt.length,
                            C = l,
                            T = {},
                            k = Gt(t, s, !0, C.parseTransform),
                            A = C.transform && ("function" == typeof C.transform ? C.transform(v, p) : C.transform);
                        if (k.skewType = C.skewType || k.skewType || o.defaultSkewType, n._transform = k, A && "string" == typeof A && Et)(d = z.style)[Et] = A, d.display = "block", d.position = "absolute", -1 !== A.indexOf("%") && (d.width = J(t, "width"), d.height = J(t, "height")), N.body.appendChild(z), u = Gt(z, null, !1), "simple" === k.skewType && (u.scaleY *= Math.cos(u.skewX * D)), k.svg && (_ = k.xOrigin, w = k.yOrigin, u.x -= k.xOffset, u.y -= k.yOffset, (C.transformOrigin || C.svgOrigin) && (A = {}, Ht(t, at(C.transformOrigin), A, C.svgOrigin, C.smoothOrigin, !0), _ = A.xOrigin, w = A.yOrigin, u.x -= A.xOffset - k.xOffset, u.y -= A.yOffset - k.yOffset), (_ || w) && (y = Kt(z, !0), u.x -= _ - (_ * y[0] + w * y[2]), u.y -= w - (_ * y[1] + w * y[3]))), N.body.removeChild(z), u.perspective || (u.perspective = k.perspective), null != C.xPercent && (u.xPercent = ht(C.xPercent, k.xPercent)), null != C.yPercent && (u.yPercent = ht(C.yPercent, k.yPercent));
                        else if ("object" == typeof C) {
                            if (u = {
                                    scaleX: ht(null != C.scaleX ? C.scaleX : C.scale, k.scaleX),
                                    scaleY: ht(null != C.scaleY ? C.scaleY : C.scale, k.scaleY),
                                    scaleZ: ht(C.scaleZ, k.scaleZ),
                                    x: ht(C.x, k.x),
                                    y: ht(C.y, k.y),
                                    z: ht(C.z, k.z),
                                    xPercent: ht(C.xPercent, k.xPercent),
                                    yPercent: ht(C.yPercent, k.yPercent),
                                    perspective: ht(C.transformPerspective, k.perspective)
                                }, null != (m = C.directionalRotation))
                                if ("object" == typeof m)
                                    for (d in m) C[d] = m[d];
                                else C.rotation = m;
                            "string" == typeof C.x && -1 !== C.x.indexOf("%") && (u.x = 0, u.xPercent = ht(C.x, k.xPercent)), "string" == typeof C.y && -1 !== C.y.indexOf("%") && (u.y = 0, u.yPercent = ht(C.y, k.yPercent)), u.rotation = ct("rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : k.rotation, k.rotation, "rotation", T), Ft && (u.rotationX = ct("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", T), u.rotationY = ct("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", T)), u.skewX = ct(C.skewX, k.skewX), u.skewY = ct(C.skewY, k.skewY)
                        }
                        for (Ft && null != C.force3D && (k.force3D = C.force3D, g = !0), (f = k.force3D || k.z || k.rotationX || k.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == C.scale || (u.scaleZ = 1); --S > -1;)((A = u[b = Mt[S]] - k[b]) > 1e-6 || A < -1e-6 || null != C[b] || null != W[b]) && (g = !0, r = new wt(k, b, k[b], A, r), b in T && (r.e = T[b]), r.xs0 = 0, r.plugin = a, n._overwriteProps.push(r.n));
                        return A = C.transformOrigin, k.svg && (A || C.svgOrigin) && (_ = k.xOffset, w = k.yOffset, Ht(t, at(A), u, C.svgOrigin, C.smoothOrigin), r = yt(k, "xOrigin", (x ? k : u).xOrigin, u.xOrigin, r, "transformOrigin"), r = yt(k, "yOrigin", (x ? k : u).yOrigin, u.yOrigin, r, "transformOrigin"), _ === k.xOffset && w === k.yOffset || (r = yt(k, "xOffset", x ? _ : k.xOffset, k.xOffset, r, "transformOrigin"), r = yt(k, "yOffset", x ? w : k.yOffset, k.yOffset, r, "transformOrigin")), A = "0px 0px"), (A || Ft && f && k.zOrigin) && (Et ? (g = !0, b = Pt, A = (A || J(t, b, s, !1, "50% 50%")) + "", (r = new wt($, b, 0, 0, r, -1, "transformOrigin")).b = $[b], r.plugin = a, Ft ? (d = k.zOrigin, A = A.split(" "), k.zOrigin = (A.length > 2 && (0 === d || "0px" !== A[2]) ? parseFloat(A[2]) : d) || 0, r.xs0 = r.e = A[0] + " " + (A[1] || "50%") + " 0px", (r = new wt(k, "zOrigin", 0, 0, r, -1, r.n)).b = d, r.xs0 = r.e = k.zOrigin) : r.xs0 = r.e = A) : at(A + "", k)), g && (n._transformType = k.svg && Tt || !f && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), r
                    },
                    prefix: !0
                }), St("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), St("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, o, a) {
                        e = this.format(e);
                        var l, h, c, u, d, f, g, m, p, v, _, w, y, b, x, $, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (p = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = Q(S[h])), -1 !== (d = u = J(t, S[h], s, !1, "0px")).indexOf(" ") && (d = (u = d.split(" "))[0], u = u[1]), f = c = l[h], g = parseFloat(d), w = d.substr((g + "").length), (y = "=" === f.charAt(1)) ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), _ = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f), _ = f.substr((m + "").length)), "" === _ && (_ = n[i] || w), _ !== w && (b = tt(t, "borderLeft", g, w), x = tt(t, "borderTop", g, w), "%" === _ ? (d = b / p * 100 + "%", u = x / v * 100 + "%") : "em" === _ ? (d = b / ($ = tt(t, "borderLeft", 1, "em")) + "em", u = x / $ + "em") : (d = b + "px", u = x + "px"), y && (f = parseFloat(d) + m + _, c = parseFloat(u) + m + _)), o = bt(C, S[h], d + " " + u, f + " " + c, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: pt("0px 0px 0px 0px", !1, !0)
                }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, r, o) {
                        return bt(t.style, i, this.format(J(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", r)
                    },
                    prefix: !0,
                    formatter: pt("0px 0px", !1, !0)
                }), St("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, r, o) {
                        var a, l, h, c, u, d, f = "background-position",
                            g = s || Z(t, null),
                            p = this.format((g ? m ? g.getPropertyValue(f + "-x") + " " + g.getPropertyValue(f + "-y") : g.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== p.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (d = J(t, "backgroundImage").replace(R, "")) && "none" !== d) {
                            for (a = p.split(" "), l = v.split(" "), V.setAttribute("src", d), h = 2; --h > -1;)(c = -1 !== (p = a[h]).indexOf("%")) != (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - V.width : t.offsetHeight - V.height, a[h] = c ? parseFloat(p) / 100 * u + "px" : parseFloat(p) / u * 100 + "%");
                            p = a.join(" ")
                        }
                        return this.parseComplex(t.style, p, v, r, o)
                    },
                    formatter: at
                }), St("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return "co" === (t += "").substr(0, 2) ? t : at(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), St("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), St("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), St("transformStyle", {
                    prefix: !0
                }), St("backfaceVisibility", {
                    prefix: !0
                }), St("userSelect", {
                    prefix: !0
                }), St("margin", {
                    parser: vt("marginTop,marginRight,marginBottom,marginLeft")
                }), St("padding", {
                    parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), St("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, r, o) {
                        var a, l, h;
                        return m < 9 ? (a = "rect(" + (l = t.currentStyle).clipTop + (h = m < 8 ? " " : ",") + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(J(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, r, o)
                    }
                }), St("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), St("autoRound,strictUnits", {
                    parser: function(t, e, i, n, s) {
                        return s
                    }
                }), St("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, r, o) {
                        var a = J(t, "borderTopWidth", s, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(x, "");
                        return "px" !== h && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + J(t, "borderTopStyle", s, !1, "solid") + " " + J(t, "borderTopColor", s, !1, "#000")), l.join(" "), r, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                    }
                }), St("borderWidth", {
                    parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), St("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, s, r) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new wt(o, a, 0, 0, s, -1, i, !1, 0, o[a], e)
                    }
                });
                var Yt = function(t) {
                    var e, i = this.t,
                        n = i.filter || J(this.data, "filter") || "",
                        s = this.s + this.c * t | 0;
                    100 === s && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = n.replace(C, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"), -1 === n.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace($, "opacity=" + s))
                };
                St("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, r, o) {
                        var a = parseFloat(J(t, "opacity", s, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === J(t, "visibility", s) && 0 !== e && (a = 0), G ? r = new wt(l, "opacity", a, e - a, r) : ((r = new wt(l, "opacity", 100 * a, 100 * (e - a), r)).xn1 = h ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Yt), h && ((r = new wt(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                    }
                });
                var qt = function(t, e) {
                        e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Qt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                St("className", {
                    parser: function(t, e, n, r, o, a, l) {
                        var h, c, u, d, f, g = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if ((o = r._classNamePT = new wt(t, n, 0, 0, o, 2)).setRatio = Qt, o.pr = -11, i = !0, o.b = g, c = it(t, s), u = t._gsClassPT) {
                            for (d = {}, f = u.data; f;) d[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : g.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = nt(t, c, it(t), l, d), t.setAttribute("class", g), o.data = h.firstMPT, t.style.cssText = m, o.xfirst = r.parse(t, h.difs, o, a)
                    }
                });
                var Zt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, s, r, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", s = !0;
                        else
                            for (n = (e = this.e.split(" ").join("").split(",")).length; --n > -1;) l[i = e[n]] && (l[i].parse === a ? s = !0 : i = "transformOrigin" === i ? Pt : l[i].p), qt(o, i);
                        s && (qt(o, Et), (r = this.t._gsTransform) && (r.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (St("clearProps", {
                        parser: function(t, e, n, s, r) {
                            return (r = new wt(t, n, 0, 0, r, 2)).setRatio = Zt, r.e = e, r.pr = -10, r.data = s._tween, i = !0, r
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), xt = h.length; xt--;) Ct(h[xt]);
                (h = o.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a, h) {
                    if (!t.nodeType) return !1;
                    this._target = p = t, this._tween = a, this._vars = e, v = h, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, s = Z(t, ""), r = this._overwriteProps;
                    var f, m, _, w, y, b, x, $, C, T = t.style;
                    if (u && "" === T.zIndex && ("auto" !== (f = J(t, "zIndex", s)) && "" !== f || this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (w = T.cssText, f = it(t, s), T.cssText = w + ";" + e, f = nt(t, f, it(t)).difs, !G && S.test(e) && (f.opacity = parseFloat(RegExp.$1)), e = f, T.cssText = w), this._firstPT = m = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (C = 3 === this._transformType, Et ? d && (u = !0, "" === T.zIndex && ("auto" !== (x = J(t, "zIndex", s)) && "" !== x || this._addLazySet(T, "zIndex", 0)), g && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (C ? "visible" : "hidden"))) : T.zoom = 1, _ = m; _ && _._next;) _ = _._next;
                        $ = new wt(t, "transform", 0, 0, null, 2), this._linkCSSP($, null, _), $.setRatio = Et ? Xt : jt, $.data = this._transform || Gt(t, s, !0), $.tween = a, $.pr = -1, r.pop()
                    }
                    if (i) {
                        for (; m;) {
                            for (b = m._next, _ = w; _ && _.pr > m.pr;) _ = _._next;
                            (m._prev = _ ? _._prev : y) ? m._prev._next = m: w = m, (m._next = _) ? _._prev = m : y = m, m = b
                        }
                        this._firstPT = w
                    }
                    return !0
                }, h.parse = function(t, e, i, r) {
                    var o, a, h, u, d, f, g, m, _, w, y = t.style;
                    for (o in e) {
                        if ("function" == typeof(f = e[o]) && (f = f(v, p)), a = l[o]) i = a.parse(t, f, o, this, i, r, e);
                        else {
                            if ("--" === o.substr(0, 2)) {
                                this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", Z(t).getPropertyValue(o) + "", f + "", o, !1, o);
                                continue
                            }
                            d = J(t, o, s) + "", _ = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || _ && T.test(f) ? (_ || (f = ((f = ft(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = bt(y, o, d, f, !0, "transparent", i, 0, r)) : _ && F.test(f) ? i = bt(y, o, d, f, !0, null, i, 0, r) : (g = (h = parseFloat(d)) || 0 === h ? d.substr((h + "").length) : "", "" !== d && "auto" !== d || ("width" === o || "height" === o ? (h = ot(t, o, s), g = "px") : "left" === o || "top" === o ? (h = et(t, o, s), g = "px") : (h = "opacity" !== o ? 0 : 1, g = "")), (w = _ && "=" === f.charAt(1)) ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(x, "")) : (u = parseFloat(f), m = _ ? f.replace(x, "") : ""), "" === m && (m = o in n ? n[o] : g), f = u || 0 === u ? (w ? u + h : u) + m : e[o], g !== m && ("" === m && "lineHeight" !== o || (u || 0 === u) && h && (h = tt(t, o, h, g), "%" === m ? (h /= tt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (d = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= tt(t, o, 1, m) : "px" !== m && (u = tt(t, o, u, m), m = "px"), w && (u || 0 === u) && (f = u + h + m))), w && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== y[o] && (f || f + "" != "NaN" && null != f) ? (i = new wt(y, o, u || h || 0, 0, i, -1, o, !1, 0, d, f)).xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : d : X("invalid " + o + " tween value: " + e[o]) : (i = new wt(y, o, h, u - h, i, 0, o, !1 !== c && ("px" === m || "zIndex" === o), 0, d, f)).xs0 = m)
                        }
                        r && i && !i.plugin && (i.plugin = r)
                    }
                    return i
                }, h.setRatio = function(t) {
                    var e, i, n, s = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; s;) {
                                if (e = s.c * t + s.s, s.r ? e = s.r(e) : e < 1e-6 && e > -1e-6 && (e = 0), s.type)
                                    if (1 === s.type)
                                        if (2 === (n = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                        else if (3 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === n) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                    s.t[s.p] = i
                                } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                else s.t[s.p] = e + s.xs0;
                                s = s._next
                            } else
                                for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                        else
                            for (; s;) {
                                if (2 !== s.type)
                                    if (s.r && -1 !== s.type)
                                        if (e = s.r(s.s + s.c), s.type) {
                                            if (1 === s.type) {
                                                for (n = s.l, i = s.xs0 + e + s.xs1, n = 1; n < s.l; n++) i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else s.t[s.p] = e + s.xs0;
                                else s.t[s.p] = s.e;
                                else s.setRatio(t);
                                s = s._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Gt(this._target, s, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Jt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new wt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Jt, n.data = this
                }, h._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
                }, h._kill = function(e) {
                    var i, n, s, r = e;
                    if (e.autoAlpha || e.alpha) {
                        for (n in r = {}, e) r[n] = e[n];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, r)
                };
                var te = function(t, e, i) {
                    var n, s, r, o;
                    if (t.slice)
                        for (s = t.length; --s > -1;) te(t[s], e, i);
                    else
                        for (s = (n = t.childNodes).length; --s > -1;) o = (r = n[s]).type, r.style && (e.push(it(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || te(r, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var s, r, o, a, l = e.to(t, i, n),
                        h = [l],
                        c = [],
                        u = [],
                        d = [],
                        f = e._internals.reservedProps;
                    for (te(t = l._targets || l.target, c, d), l.render(i, !0, !0), te(t, u), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;)
                        if ((r = nt(d[s], c[s], u[s])).firstMPT) {
                            for (o in r = r.difs, n) f[o] && (r[o] = n[o]);
                            for (o in a = {}, r) a[o] = c[s][o];
                            h.push(e.fromTo(d[s], i, a, r))
                        }
                    return h
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = function(t) {
                        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                        return function(i) {
                            return (Math.round(i / t) * t * e | 0) / e
                        }
                    },
                    e = function(t, e) {
                        for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
                    },
                    i = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.7.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }).prototype;
                i._onInitAllProps = function() {
                    var i, n, s, r, o = this._tween,
                        a = o.vars.roundProps,
                        l = {},
                        h = o._propLookup.roundProps;
                    if ("object" != typeof a || a.push)
                        for ("string" == typeof a && (a = a.split(",")), s = a.length; --s > -1;) l[a[s]] = Math.round;
                    else
                        for (r in a) l[r] = t(a[r]);
                    for (r in l)
                        for (i = o._firstPT; i;) n = i._next, i.pg ? i.t._mod(l) : i.n === r && (2 === i.f && i.t ? e(i.t._firstPT, l[r]) : (this._add(i.t, r, i.s, i.c, l[r]), n && (n._prev = i._prev), i._prev ? i._prev._next = n : o._firstPT === i && (o._firstPT = n), i._next = i._prev = null, o._propLookup[r] = h)), i = n;
                    return !1
                }, i._add = function(t, e, i, n, s) {
                    this._addTween(t, e, i, i + n, e, s || Math.round), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(t, e, i, n) {
                    var s, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    for (s in e) "function" == typeof(r = e[s]) && (r = r(n, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", r + "", s, !1, s), this._overwriteProps.push(s);
                    return !0
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, n) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var s, r, o, a, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (s in e) "useRadians" !== s && ("function" == typeof(a = e[s]) && (a = a(n, t)), r = (h = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), l = (a = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - o, h.length && (-1 !== (r = h.join("_")).indexOf("short") && (l %= c) != l % (c / 2) && (l = l < 0 ? l + c : l - c), -1 !== r.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== r.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, s, o, o + l, s), this._overwriteProps.push(s)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = r.com.greensock._class,
                    h = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, n
                    },
                    c = t.register || function() {},
                    u = function(t, e, i, n, s) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(r, t), r
                    },
                    d = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            s = n.prototype = new t;
                        return s.constructor = n, s.getRatio = i, s.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    g = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    p = m.prototype = new t;
                return p.constructor = m, p.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), p.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, (p = (e = l("easing.SteppedEase", function(t, e) {
                    this._p1 = 1 / (t = t || 1), this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0)).prototype = new t).constructor = e, p.getRatio = function(t) {
                    return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, p.config = e.config = function(t, i) {
                    return new e(t, i)
                }, (p = (i = l("easing.ExpoScaleEase", function(t, e, i) {
                    this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
                }, !0)).prototype = new t).constructor = i, p.getRatio = function(t) {
                    return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                }, p.config = i.config = function(t, e, n) {
                    return new i(t, e, n)
                }, (p = (n = l("easing.RoughEase", function(e) {
                    for (var i, n, s, r, o, a, l = (e = e || {}).taper || "none", h = [], c = 0, u = 0 | (e.points || 20), f = u, g = !1 !== e.randomize, m = !0 === e.clamp, p = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = g ? Math.random() : 1 / u * f, n = p ? p.getRatio(i) : i, s = "none" === l ? v : "out" === l ? (r = 1 - i) * r * v : "in" === l ? i * i * v : i < .5 ? (r = 2 * i) * r * .5 * v : (r = 2 * (1 - i)) * r * .5 * v, g ? n += Math.random() * s - .5 * s : f % 2 ? n += .5 * s : n -= .5 * s, m && (n > 1 ? n = 1 : n < 0 && (n = 0)), h[c++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new d(1, 1, null), f = u; --f > -1;) a = new d((o = h[f]).x, o.y, a);
                    this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
                }, !0)).prototype = new t).constructor = n, p.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, p.config = function(t) {
                    return new n(t)
                }, n.ease = new n, u("Bounce", h("BounceOut", function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = t < .5;
                    return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), u("Elastic", (s = function(e, i, n) {
                    var s = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        r = s.prototype = new t;
                    return r.constructor = s, r.getRatio = i, r.config = function(t, e) {
                        return new s(t, e)
                    }, s
                })("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), s("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * a)
                }), h("SineIn", function(t) {
                    return 1 - Math.cos(t * a)
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), g
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            n = t.document,
            s = t.GreenSockGlobals = t.GreenSockGlobals || t,
            r = s.TweenMax;
        if (r) return "undefined" != typeof module && module.exports && (module.exports = r), r;
        var o, a, l, h, c, u, d, f = function(t) {
                var e, i = t.split("."),
                    n = s;
                for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                return n
            },
            g = f("com.greensock"),
            m = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            p = function() {},
            v = (u = Object.prototype.toString, d = u.call([]), function(t) {
                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && u.call(t) === d)
            }),
            _ = {},
            w = function(e, n, r, o) {
                this.sc = _[e] ? _[e].sc : [], _[e] = this, this.gsClass = null, this.func = r;
                var a = [];
                this.check = function(l) {
                    for (var h, c, u, d, g = n.length, m = g; --g > -1;)(h = _[n[g]] || new w(n[g], [])).gsClass ? (a[g] = h.gsClass, m--) : l && h.sc.push(this);
                    if (0 === m && r) {
                        if (u = (c = ("com.greensock." + e).split(".")).pop(), d = f(c.join("."))[u] = this.gsClass = r.apply(r, a), o)
                            if (s[u] = i[u] = d, "undefined" != typeof module && module.exports)
                                if ("TweenMax" === e)
                                    for (g in module.exports = i.TweenMax = d, i) d[g] = i[g];
                                else i.TweenMax && (i.TweenMax[u] = d);
                        else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function() {
                            return d
                        });
                        for (g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }
                }, this.check(!0)
            },
            y = t._gsDefine = function(t, e, i, n) {
                return new w(t, e, i, n)
            },
            b = g._class = function(t, e, i) {
                return e = e || function() {}, y(t, [], function() {
                    return e
                }, i), e
            };
        y.globals = s;
        var x = [0, 0, 1, 1],
            $ = b("easing.Ease", function(t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? x.concat(e) : x
            }, !0),
            S = $.map = {},
            C = $.register = function(t, e, i, n) {
                for (var s, r, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                    for (r = l[h], s = n ? b("easing." + r, null, !0) : g.easing[r] || {}, o = c.length; --o > -1;) S[r + "." + (a = c[o])] = S[a + r] = s[a] = t.getRatio ? t : t[a] || new t
            };
        for ((l = $.prototype)._calcEnd = !1, l.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
            }, a = (o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) l = o[a] + ",Power" + a, C(new $(null, null, 1, a), l, "easeOut", !0), C(new $(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), C(new $(null, null, 3, a), l, "easeInOut");
        S.linear = g.easing.Linear.easeIn, S.swing = g.easing.Quad.easeInOut;
        var T = b("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (l = T.prototype).addEventListener = function(t, e, i, n, s) {
            s = s || 0;
            var r, o, a = this._listeners[t],
                l = 0;
            for (this !== h || c || h.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(r = a[o]).c === e && r.s === i ? a.splice(o, 1) : 0 === l && r.pr < s && (l = o + 1);
            a.splice(l, 0, {
                c: e,
                s: i,
                up: n,
                pr: s
            })
        }, l.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, l.dispatchEvent = function(t) {
            var e, i, n, s = this._listeners[t];
            if (s)
                for ((e = s.length) > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(n = s[e]) && (n.up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i))
        };
        var k = t.requestAnimationFrame,
            A = t.cancelAnimationFrame,
            R = Date.now || function() {
                return (new Date).getTime()
            },
            L = R();
        for (a = (o = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !k;) k = t[o[a] + "RequestAnimationFrame"], A = t[o[a] + "CancelAnimationFrame"] || t[o[a] + "CancelRequestAnimationFrame"];
        b("Ticker", function(t, e) {
            var i, s, r, o, a, l = this,
                u = R(),
                d = !(!1 === e || !k) && "auto",
                f = 500,
                g = 33,
                m = function(t) {
                    var e, n, h = R() - L;
                    h > f && (u += h - g), l.time = ((L += h) - u) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= o ? .004 : o - e), n = !0), !0 !== t && (r = s(m)), n && l.dispatchEvent("tick")
                };
            T.call(l), l.time = l.frame = 0, l.tick = function() {
                m(!0)
            }, l.lagSmoothing = function(t, e) {
                if (!arguments.length) return f < 1e10;
                f = t || 1e10, g = Math.min(e, f, 0)
            }, l.sleep = function() {
                null != r && (d && A ? A(r) : clearTimeout(r), s = p, r = null, l === h && (c = !1))
            }, l.wake = function(t) {
                null !== r ? l.sleep() : t ? u += -L + (L = R()) : l.frame > 10 && (L = R() - f + 5), s = 0 === i ? p : d && k ? k : function(t) {
                    return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
                }, l === h && (c = !0), m(2)
            }, l.fps = function(t) {
                if (!arguments.length) return i;
                a = this.time + (o = 1 / ((i = t) || 60)), l.wake()
            }, l.useRAF = function(t) {
                if (!arguments.length) return d;
                l.sleep(), d = t, l.fps(i)
            }, l.fps(t), setTimeout(function() {
                "auto" === d && l.frame < 5 && "hidden" !== (n || {}).visibilityState && l.useRAF(!1)
            }, 1500)
        }), (l = g.Ticker.prototype = new g.events.EventDispatcher).constructor = g.Ticker;
        var M = b("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, q) {
                c || h.wake();
                var i = this.vars.useFrames ? Y : q;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        h = M.ticker = new g.Ticker, (l = M.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
        var E = function() {
            c && R() - L > 2e3 && ("hidden" !== (n || {}).visibilityState || !h.lagSmoothing()) && h.wake();
            var t = setTimeout(E, 2e3);
            t.unref && t.unref()
        };
        E(), l.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, l.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, l.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, l.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, l.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, l.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, l.render = function(t, e, i) {}, l.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
        }, l.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }, l._enabled = function(t, e) {
            return c || h.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, l._kill = function(t, e) {
            return this._enabled(!1, !1)
        }, l.kill = function(t, e) {
            return this._kill(t, e), this
        }, l._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, l._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, l._callback = function(t) {
            var e = this.vars,
                i = e[t],
                n = e[t + "Params"],
                s = e[t + "Scope"] || e.callbackScope || this;
            switch (n ? n.length : 0) {
                case 0:
                    i.call(s);
                    break;
                case 1:
                    i.call(s, n[0]);
                    break;
                case 2:
                    i.call(s, n[0], n[1]);
                    break;
                default:
                    i.apply(s, n)
            }
        }, l.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length) return s[t];
                null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, l.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, l.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, l.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, l.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, l.totalTime = function(t, e, i) {
            if (c || h.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        s = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                        for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                }
                this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (D.length && Z(), this.render(t, e, !1), D.length && Z())
            }
            return this
        }, l.progress = l.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, l.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, l.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, l.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
            return this
        }, l.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, l.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (c || t || h.wake(), i = (e = n.rawTime()) - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, e === this._totalTime, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var O = b("core.SimpleTimeline", function(t) {
            M.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (l = O.prototype = new M).constructor = O, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function(t, e, i, n) {
            var s, r;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
                for (r = t._startTime; s && s._startTime > r;) s = s._prev;
            return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
        }, l._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, l.render = function(t, e, i) {
            var n, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && s.render(s._reversed ? (s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale : (t - s._startTime) * s._timeScale, e, i), s = n
        }, l.rawTime = function() {
            return c || h.wake(), this._totalTime
        };
        var P = b("TweenLite", function(e, i, n) {
                if (M.call(this, i, n), this.render = P.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : P.selector(e) || e;
                var s, r, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? X[P.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (a || e instanceof Array || e.push && v(e)) && "number" != typeof e[0])
                    for (this._targets = o = m(e), this._propLookup = [], this._siblings = [], s = 0; s < o.length; s++)(r = o[s]) ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(s--, 1), this._targets = o = o.concat(m(r))) : (this._siblings[s] = J(r, this, !1), 1 === l && this._siblings[s].length > 1 && et(r, this, null, 1, this._siblings[s])) : "string" == typeof(r = o[s--] = P.selector(r)) && o.splice(s + 1, 1) : o.splice(s--, 1);
                else this._propLookup = {}, this._siblings = J(e, this, !1), 1 === l && this._siblings.length > 1 && et(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
            }, !0),
            F = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            };
        (l = P.prototype = new M).constructor = P, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, P.version = "2.0.1", P.defaultEase = l._ease = new $(null, null, 1, 1), P.defaultOverwrite = "auto", P.ticker = h, P.autoSleep = 120, P.lagSmoothing = function(t, e) {
            h.lagSmoothing(t, e)
        }, P.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (P.selector = i, i(e)) : (n || (n = t.document), n ? n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
        };
        var D = [],
            I = {},
            W = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            B = /[\+-]=-?[\.\d]/,
            N = function(t) {
                for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            H = function(t, e, i, n) {
                var s, r, o, a, l, h, c, u = [],
                    d = 0,
                    f = "",
                    g = 0;
                for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, s = t.match(W) || [], r = e.match(W) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = r.length, a = 0; a < l; a++) f += (h = e.substr(d, e.indexOf(c = r[a], d) - d)) || !a ? h : ",", d += h.length, g ? g = (g + 1) % 5 : "rgba(" === h.substr(-5) && (g = 1), c === s[a] || s.length <= a ? f += c : (f && (u.push(f), f = ""), o = parseFloat(s[a]), u.push(o), u._firstPT = {
                    _next: u._firstPT,
                    t: u,
                    p: u.length - 1,
                    s: o,
                    c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                    f: 0,
                    m: g && g < 4 ? Math.round : 0
                }), d += c.length;
                return (f += e.substr(d)) && u.push(f), u.setRatio = N, B.test(e) && (u.end = null), u
            },
            z = function(t, e, i, n, s, r, o, a, l) {
                "function" == typeof n && (n = n(l || 0, t));
                var h = typeof t[e],
                    c = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    u = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e],
                    d = "string" == typeof n && "=" === n.charAt(1),
                    f = {
                        t: t,
                        p: e,
                        s: u,
                        f: "function" === h,
                        pg: 0,
                        n: s || e,
                        m: r ? "function" == typeof r ? r : Math.round : 0,
                        pr: 0,
                        c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - u || 0
                    };
                if (("number" != typeof u || "number" != typeof n && !d) && (o || isNaN(u) || !d && isNaN(n) || "boolean" == typeof u || "boolean" == typeof n ? (f.fp = o, f = {
                        t: H(u, d ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : n, a || P.defaultStringFilter, f),
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: s || e,
                        pr: 0,
                        m: 0
                    }) : (f.s = parseFloat(u), d || (f.c = parseFloat(n) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
            },
            V = P._internals = {
                isArray: v,
                isSelector: F,
                lazyTweens: D,
                blobDif: H
            },
            U = P._plugins = {},
            K = V.tweenLookup = {},
            G = 0,
            j = V.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1
            },
            X = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            Y = M._rootFramesTimeline = new O,
            q = M._rootTimeline = new O,
            Q = 30,
            Z = V.lazyRender = function() {
                var t, e = D.length;
                for (I = {}; --e > -1;)(t = D[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                D.length = 0
            };
        q._startTime = h.time, Y._startTime = h.frame, q._active = Y._active = !0, setTimeout(Z, 1), M._updateRoot = P.render = function() {
            var t, e, i;
            if (D.length && Z(), q.render((h.time - q._startTime) * q._timeScale, !1, !1), Y.render((h.frame - Y._startTime) * Y._timeScale, !1, !1), D.length && Z(), h.frame >= Q) {
                for (i in Q = h.frame + (parseInt(P.autoSleep, 10) || 120), K) {
                    for (t = (e = K[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete K[i]
                }
                if ((!(i = q._first) || i._paused) && P.autoSleep && !Y._first && 1 === h._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || h.sleep()
                }
            }
        }, h.addEventListener("tick", M._updateRoot);
        var J = function(t, e, i) {
                var n, s, r = t._gsTweenID;
                if (K[r || (t._gsTweenID = r = "t" + G++)] || (K[r] = {
                        target: t,
                        tweens: []
                    }), e && ((n = K[r].tweens)[s = n.length] = e, i))
                    for (; --s > -1;) n[s] === e && n.splice(s, 1);
                return K[r].tweens
            },
            tt = function(t, e, i, n) {
                var s, r, o = t.vars.onOverwrite;
                return o && (s = o(t, e, i, n)), (o = P.onOverwrite) && (r = o(t, e, i, n)), !1 !== s && !1 !== r
            },
            et = function(t, e, i, n, s) {
                var r, o, a, l;
                if (1 === n || n >= 4) {
                    for (l = s.length, r = 0; r < l; r++)
                        if ((a = s[r]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                        else if (5 === n) break;
                    return o
                }
                var h, c = e._startTime + 1e-10,
                    u = [],
                    d = 0,
                    f = 0 === e._duration;
                for (r = s.length; --r > -1;)(a = s[r]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || it(e, 0, f), 0 === it(a, h, f) && (u[d++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (u[d++] = a)));
                for (r = d; --r > -1;)
                    if (a = u[r], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                        if (2 !== n && !tt(a, e)) continue;
                        a._enabled(!1, !1) && (o = !0)
                    }
                return o
            },
            it = function(t, e, i) {
                for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline;) {
                    if (r += n._startTime, s *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return (r /= s) > e ? r - e : i && r === e || !t._initted && r - e < 2e-10 ? 1e-10 : (r += t.totalDuration() / t._timeScale / s) > e + 1e-10 ? 0 : r - e - 1e-10
            };
        l._init = function() {
            var t, e, i, n, s, r, o = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                h = !!o.immediateRender,
                c = o.ease;
            if (o.startAt) {
                for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {}, o.startAt) s[n] = o.startAt[n];
                if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== o.lazy, s.startAt = s.delay = null, s.onUpdate = o.onUpdate, s.onUpdateParams = o.onUpdateParams, s.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = P.to(this.target || {}, 0, s), h)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return
            } else if (o.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    for (n in 0 !== this._time && (h = !1), i = {}, o) j[n] && "autoCSS" !== n || (i[n] = o[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = P.to(this.target, 0, i), h) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = c = c ? c instanceof $ ? c : "function" == typeof c ? new $(c, o.easeParams) : S[c] || P.defaultEase : P.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (r = this._targets.length, t = 0; t < r; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && P._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = o.onUpdate, this._initted = !0
        }, l._initProps = function(e, i, n, s, r) {
            var o, a, l, h, c, u;
            if (null == e) return !1;
            for (o in I[e._gsTweenID] && Z(), this.vars.css || e.style && e !== t && e.nodeType && U.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, n = {};
                    for (i in t) j[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                }(this.vars, e), this.vars)
                if (u = this.vars[o], j[o]) u && (u instanceof Array || u.push && v(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                else if (U[o] && (h = new U[o])._onInitTween(e, this.vars[o], this, r)) {
                for (this._firstPT = c = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: o,
                        pg: 1,
                        pr: h._priority,
                        m: 0
                    }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
            } else i[o] = z.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter, r);
            return s && this._kill(s, e) ? this._initProps(e, i, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && et(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), l)
        }, l.render = function(t, e, i) {
            var n, s, r, o, a = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : 1e-10);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (s = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-10 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var c = t / l,
                    u = this._easeType,
                    d = this._easePower;
                (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : t / l < .5 ? c / 2 : 1 - c / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, D.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== o && (this._rawPrevTime = 0)))
            }
        }, l._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : P.selector(e) || e;
            var n, s, r, o, a, l, h, c, u, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((v(e) || F(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (h = t || a, c = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill), i && (P.onOverwrite || this.vars.onOverwrite)) {
                        for (r in h) a[r] && (u || (u = []), u.push(r));
                        if ((u || !t) && !tt(this, i, e, u)) return !1
                    }
                    for (r in h)(o = a[r]) && (d && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[r]), c && (s[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, l.invalidate = function() {
            return this._notifyPluginsOfEnabled && P._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
        }, l._enabled = function(t, e) {
            if (c || h.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = J(n[i], this, !0);
                else this._siblings = J(this.target, this, !0)
            }
            return M.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && P._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, P.to = function(t, e, i) {
            return new P(t, e, i)
        }, P.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new P(t, e, i)
        }, P.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new P(t, e, n)
        }, P.delayedCall = function(t, e, i, n, s) {
            return new P(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
            })
        }, P.set = function(t, e) {
            return new P(t, 0, e)
        }, P.getTweensOf = function(t, e) {
            if (null == t) return [];
            var i, n, s, r;
            if (t = "string" != typeof t ? t : P.selector(t) || t, (v(t) || F(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(P.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)
                    for (r = n[i], s = i; --s > -1;) r === n[s] && n.splice(i, 1)
            } else if (t._gsTweenID)
                for (i = (n = J(t).concat()).length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n || []
        }, P.killTweensOf = P.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = P.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
        };
        var nt = b("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
        }, !0);
        if (l = nt.prototype, nt.version = "1.19.0", nt.API = 2, l._firstPT = null, l._addTween = z, l.setRatio = N, l._kill = function(t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, l._mod = l._roundProps = function(t) {
                for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, P._onPluginEvent = function(t, e) {
                var i, n, s, r, o, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (o = a._next, n = s; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : r) ? a._prev._next = a: s = a, (a._next = n) ? n._prev = a : r = a, a = o
                    }
                    a = e._firstPT = s
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, nt.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === nt.API && (U[(new t[e])._propName] = t[e]);
                return !0
            }, y.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    s = t.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    o = b("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        nt.call(this, i, n), this._overwriteProps = s || []
                    }, !0 === t.global),
                    a = o.prototype = new nt(i);
                for (e in a.constructor = o, o.API = t.API, r) "function" == typeof t[e] && (a[r[e]] = t[e]);
                return o.version = t.version, nt.activate([o]), o
            }, o = t._gsQueue) {
            for (a = 0; a < o.length; a++) o[a]();
            for (l in _) _[l].func || t.console.log("GSAP encountered missing dependency: " + l)
        }
        c = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
            var n = function(e) {
                    t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                },
                s = e._internals,
                r = s.lazyTweens,
                o = s.lazyRender,
                a = _gsScope._gsDefine.globals,
                l = new i(null, null, 1, 0),
                h = n.prototype = new t;
            return h.constructor = n, h.kill()._gc = !1, n.version = "2.0.1", h.invalidate = function() {
                return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, h.addCallback = function(t, i, n, s) {
                return this.add(e.delayedCall(0, t, n, s), i)
            }, h.removeCallback = function(t, e) {
                if (t)
                    if (null == e) this._kill(null, t);
                    else
                        for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === s && i[n]._enabled(!1, !1);
                return this
            }, h.removePause = function(e) {
                return this.removeCallback(t._internals.pauseCallback, e)
            }, h.tweenTo = function(t, i) {
                i = i || {};
                var n, s, r, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                    },
                    h = i.repeat && a.TweenMax || e;
                for (s in i) o[s] = i[s];
                return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, r = new h(this, n, o), o.onStart = function() {
                    r.target.paused(!0), r.vars.time === r.target.time() || n !== r.duration() || r.isFromTo || r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale).render(r.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || r, i.onStartParams || [])
                }, r
            }, h.tweenFromTo = function(t, e, i) {
                i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                    onComplete: this.seek,
                    onCompleteParams: [t],
                    callbackScope: this
                }, i.immediateRender = !1 !== i.immediateRender;
                var n = this.tweenTo(e, i);
                return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
            }, h.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, a, l, h, c, u, d, f = this._time,
                    g = this._dirty ? this.totalDuration() : this._totalDuration,
                    m = this._duration,
                    p = this._totalTime,
                    v = this._startTime,
                    _ = this._timeScale,
                    w = this._rawPrevTime,
                    y = this._paused,
                    b = this._cycle;
                if (f !== this._time && (t += this._time - f), t >= g - 1e-7 && t >= 0) this._locked || (this._totalTime = g, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || w < 0 || 1e-10 === w) && w !== t && this._first && (h = !0, w > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                else if (t < 1e-7)
                    if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== f || 0 === m && 1e-10 !== w && (w > 0 || t < 0 && w >= 0) && !this._locked) && (l = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, l = "onReverseComplete") : w >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        t = 0, this._initted || (h = !0)
                    }
                else if (0 === m && w < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (this._cycle = this._totalTime / (c = m + this._repeatDelay) >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                    if ((t = this._time) >= f || this._repeat && b !== this._cycle)
                        for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                    else
                        for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                    u && u._startTime < m && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                if (this._cycle !== b && !this._locked) {
                    var x = this._yoyo && 0 != (1 & b),
                        $ = x === (this._yoyo && 0 != (1 & this._cycle)),
                        S = this._totalTime,
                        C = this._cycle,
                        T = this._rawPrevTime,
                        k = this._time;
                    if (this._totalTime = b * m, this._cycle < b ? x = !x : this._totalTime += m, this._time = f, this._rawPrevTime = 0 === m ? w - 1e-4 : w, this._cycle = b, this._locked = !0, this.render(f = x ? 0 : m, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = C, this._locked = !1, this._callback("onRepeat")), f !== this._time) return;
                    if ($ && (this._cycle = b, this._locked = !0, this.render(f = x ? m + 1e-4 : -1e-4, !0, !1)), this._locked = !1, this._paused && !y) return;
                    this._time = k, this._totalTime = S, this._cycle = C, this._rawPrevTime = T
                }
                if (this._time !== f && this._first || i || h || u) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (d = this._time) >= f)
                        for (n = this._first; n && (a = n._next, d === this._time && (!this._paused || y));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i)), n = a;
                    else
                        for (n = this._last; n && (a = n._prev, d === this._time && (!this._paused || y));) {
                            if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                if (u === n) {
                                    for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i)
                            }
                            n = a
                        }
                    this._onUpdate && (e || (r.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && _ === this._timeScale || (0 === this._time || g >= this.totalDuration()) && (s && (r.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                } else p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
            }, h.getActive = function(t, e, i) {
                null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                var n, s, r = [],
                    o = this.getChildren(t, e, i),
                    a = 0,
                    l = o.length;
                for (n = 0; n < l; n++)(s = o[n]).isActive() && (r[a++] = s);
                return r
            }, h.getLabelAfter = function(t) {
                t || 0 !== t && (t = this._time);
                var e, i = this.getLabelsArray(),
                    n = i.length;
                for (e = 0; e < n; e++)
                    if (i[e].time > t) return i[e].name;
                return null
            }, h.getLabelBefore = function(t) {
                null == t && (t = this._time);
                for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                    if (e[i].time < t) return e[i].name;
                return null
            }, h.getLabelsArray = function() {
                var t, e = [],
                    i = 0;
                for (t in this._labels) e[i++] = {
                    time: this._labels[t],
                    name: t
                };
                return e.sort(function(t, e) {
                    return t.time - e.time
                }), e
            }, h.invalidate = function() {
                return this._locked = !1, t.prototype.invalidate.call(this)
            }, h.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, h.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, h.totalDuration = function(e) {
                return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, h.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, h.repeat = function(t) {
                return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, h.repeatDelay = function(t) {
                return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, h.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, h.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, n
        }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var n = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, n, s = this.vars;
                    for (n in s) a(i = s[n]) && -1 !== i.join("").indexOf("{self}") && (s[n] = this._swapSelfInParams(i));
                    a(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                },
                s = i._internals,
                r = n._internals = {},
                o = s.isSelector,
                a = s.isArray,
                l = s.lazyTweens,
                h = s.lazyRender,
                c = _gsScope._gsDefine.globals,
                u = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                d = function(t, e, i) {
                    var n, s, r = t.cycle;
                    for (n in r) t[n] = "function" == typeof(s = r[n]) ? s(i, e[i]) : s[i % s.length];
                    delete t.cycle
                },
                f = r.pauseCallback = function() {},
                g = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                m = n.prototype = new e;
            return n.version = "2.0.1", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, n, s) {
                return e ? this.add(new(n.repeat && c.TweenMax || i)(t, e, n), s) : this.set(t, n, s)
            }, m.from = function(t, e, n, s) {
                return this.add((n.repeat && c.TweenMax || i).from(t, e, n), s)
            }, m.fromTo = function(t, e, n, s, r) {
                return e ? this.add((s.repeat && c.TweenMax || i).fromTo(t, e, n, s), r) : this.set(t, s, r)
            }, m.staggerTo = function(t, e, s, r, a, l, h, c) {
                var f, m, p = new n({
                        onComplete: l,
                        onCompleteParams: h,
                        callbackScope: c,
                        smoothChildTiming: this.smoothChildTiming
                    }),
                    v = s.cycle;
                for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = g(t)), (r = r || 0) < 0 && ((t = g(t)).reverse(), r *= -1), m = 0; m < t.length; m++)(f = u(s)).startAt && (f.startAt = u(f.startAt), f.startAt.cycle && d(f.startAt, t, m)), v && (d(f, t, m), null != f.duration && (e = f.duration, delete f.duration)), p.to(t[m], e, f, m * r);
                return this.add(p, a)
            }, m.staggerFrom = function(t, e, i, n, s, r, o, a) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, s, r, o, a)
            }, m.staggerFromTo = function(t, e, i, n, s, r, o, a, l) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, s, r, o, a, l)
            }, m.call = function(t, e, n, s) {
                return this.add(i.delayedCall(0, t, e, n), s)
            }, m.set = function(t, e, n) {
                return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
            }, n.exportRoot = function(t, e) {
                null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                var s, r, o, a, l = new n(t),
                    h = l._timeline;
                for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, o = h._first; o;) a = o._next, e && o instanceof i && o.target === o.vars.onComplete || ((r = o._startTime - o._delay) < 0 && (s = 1), l.add(o, r)), o = a;
                return h.add(l, 0), s && l.totalDuration(), l
            }, m.add = function(s, r, o, l) {
                var h, c, u, d, f, g;
                if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, s)), !(s instanceof t)) {
                    if (s instanceof Array || s && s.push && a(s)) {
                        for (o = o || "normal", l = l || 0, h = r, c = s.length, u = 0; u < c; u++) a(d = s[u]) && (d = new n({
                            tweens: d
                        })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === o ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === o && (d._startTime -= d.delay())), h += l;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof s) return this.addLabel(s, r);
                    if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                    s = i.delayedCall(0, s)
                }
                if (e.prototype.add.call(this, s, r), s._time && s.render((this.rawTime() - s._startTime) * s._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (g = (f = this).rawTime() > s._startTime; f._timeline;) g && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                return this
            }, m.remove = function(e) {
                if (e instanceof t) {
                    this._remove(e, !1);
                    var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                }
                if (e instanceof Array || e && e.push && a(e)) {
                    for (var n = e.length; --n > -1;) this.remove(e[n]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, m._remove = function(t, i) {
                return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, m.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, m.insert = m.insertMultiple = function(t, e, i, n) {
                return this.add(t, e || 0, i, n)
            }, m.appendMultiple = function(t, e, i, n) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
            }, m.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, m.addPause = function(t, e, n, s) {
                var r = i.delayedCall(0, f, n, s || this);
                return r.vars.onComplete = r.vars.onReverseComplete = e, r.data = "isPause", this._hasPause = !0, this.add(r, t)
            }, m.removeLabel = function(t) {
                return delete this._labels[t], this
            }, m.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, m._parseTimeOrLabel = function(e, i, n, s) {
                var r, o;
                if (s instanceof t && s.timeline === this) this.remove(s);
                else if (s && (s instanceof Array || s.push && a(s)))
                    for (o = s.length; --o > -1;) s[o] instanceof t && s[o].timeline === this && this.remove(s[o]);
                if (r = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - r : 0, n);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = r);
                else {
                    if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = r + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : r
                }
                return Number(e) + i
            }, m.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, m.stop = function() {
                return this.paused(!0)
            }, m.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, m.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, m.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var n, s, r, o, a, c, u, d = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    g = this._startTime,
                    m = this._timeScale,
                    p = this._paused;
                if (t >= d - 1e-7 && t >= 0) this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = d + 1e-4;
                else if (t < 1e-7)
                    if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                            for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                        t = 0, this._initted || (a = !0)
                    }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (t >= f)
                            for (n = this._first; n && n._startTime <= t && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev;
                        c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    this._totalTime = this._time = this._rawPrevTime = t
                }
                if (this._time !== f && this._first || i || a || c) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= f)
                        for (n = this._first; n && (r = n._next, u === this._time && (!this._paused || p));)(n._active || n._startTime <= u && !n._paused && !n._gc) && (c === n && this.pause(), n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i)), n = r;
                    else
                        for (n = this._last; n && (r = n._prev, u === this._time && (!this._paused || p));) {
                            if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                if (c === n) {
                                    for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                    c = null, this.pause()
                                }
                                n.render(n._reversed ? (n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale : (t - n._startTime) * n._timeScale, e, i)
                            }
                            n = r
                        }
                    this._onUpdate && (e || (l.length && h(), this._callback("onUpdate"))), o && (this._gc || g !== this._startTime && m === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (s && (l.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                }
            }, m._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, m.getChildren = function(t, e, n, s) {
                s = s || -9999999999;
                for (var r = [], o = this._first, a = 0; o;) o._startTime < s || (o instanceof i ? !1 !== e && (r[a++] = o) : (!1 !== n && (r[a++] = o), !1 !== t && (a = (r = r.concat(o.getChildren(!0, e, n))).length))), o = o._next;
                return r
            }, m.getTweensOf = function(t, e) {
                var n, s, r = this._gc,
                    o = [],
                    a = 0;
                for (r && this._enabled(!0, !0), s = (n = i.getTweensOf(t)).length; --s > -1;)(n[s].timeline === this || e && this._contains(n[s])) && (o[a++] = n[s]);
                return r && this._enabled(!1, !0), o
            }, m.recent = function() {
                return this._recent
            }, m._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, m.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var n, s = this._first, r = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
                if (e)
                    for (n in r) r[n] >= i && (r[n] += t);
                return this._uncache(!0)
            }, m._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1;) i[n]._kill(t, e) && (s = !0);
                return s
            }, m.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, m.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, m._enabled = function(t, i) {
                if (t === this._gc)
                    for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                return e.prototype._enabled.call(this, t, i)
            }, m.totalTime = function(e, i, n) {
                this._forcingPlayhead = !0;
                var s = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, s
            }, m.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, m.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, n = 0, s = this._last, r = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > r && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : r = s._startTime, s._startTime < 0 && !s._paused && (n -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), r = 0), (i = s._startTime + s._totalDuration / s._timeScale) > n && (n = i), s = e;
                        this._duration = this._totalDuration = n, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, m.paused = function(e) {
                if (!e)
                    for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, m.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, m.rawTime = function(t) {
                return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, n
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).TimelineMax
        };
        "undefined" != typeof module && module.exports ? (require("gsap/umd/TweenLite"), module.exports = e()) : "function" == typeof define && define.amd && define(["gsap/umd/TweenLite"], e)
    }(), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var t = (_gsScope.document || {}).documentElement,
            e = _gsScope,
            i = function(i, n) {
                var s = "x" === n ? "Width" : "Height",
                    r = "scroll" + s,
                    o = "client" + s,
                    a = document.body;
                return i === e || i === t || i === a ? Math.max(t[r], a[r]) - (e["inner" + s] || t[o] || a[o]) : i[r] - i["offset" + s]
            },
            n = function(i, n) {
                var s = "scroll" + ("x" === n ? "Left" : "Top");
                return i === e && (null != i.pageXOffset ? s = "page" + n.toUpperCase() + "Offset" : i = null != t[s] ? t : document.body),
                    function() {
                        return i[s]
                    }
            },
            s = function(i, s) {
                var r, o = (r = i, "string" == typeof r && (r = TweenLite.selector(r)), r.length && r !== e && r[0] && r[0].style && !r.nodeType && (r = r[0]), r === e || r.nodeType && r.style ? r : null).getBoundingClientRect(),
                    a = document.body,
                    l = !s || s === e || s === a,
                    h = l ? {
                        top: t.clientTop - (window.pageYOffset || t.scrollTop || a.scrollTop || 0),
                        left: t.clientLeft - (window.pageXOffset || t.scrollLeft || a.scrollLeft || 0)
                    } : s.getBoundingClientRect(),
                    c = {
                        x: o.left - h.left,
                        y: o.top - h.top
                    };
                return !l && s && (c.x += n(s, "x")(), c.y += n(s, "y")()), c
            },
            r = function(t, e, n) {
                var r = typeof t;
                return isNaN(t) ? "number" === r || "string" === r && "=" === t.charAt(1) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), s(t, e)[n]) : parseFloat(t)
            },
            o = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                global: !0,
                version: "1.9.1",
                init: function(t, i, s) {
                    return this._wdw = t === e, this._target = t, this._tween = s, "object" != typeof i ? "string" == typeof(i = {
                        y: i
                    }).y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y) : i.nodeType && (i = {
                        y: i,
                        x: i
                    }), this.vars = i, this._autoKill = !1 !== i.autoKill, this.getX = n(t, "x"), this.getY = n(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, r(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, r(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        s = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        r = s - this.yPrev,
                        a = n - this.xPrev,
                        l = o.autoKillThreshold;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (a > l || a < -l) && n < i(this._target, "x") && (this.skipX = !0), !this.skipY && (r > l || r < -l) && s < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            a = o.prototype;
        o.max = i, o.getOffset = s, o.buildGetter = n, o.autoKillThreshold = 7, a._kill = function(t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).ScrollToPlugin
        };
        "undefined" != typeof module && module.exports ? (require("gsap/umd/TweenLite"), module.exports = e()) : "function" == typeof define && define.amd && define(["gsap/umd/TweenLite"], e)
    }(),
    function() {
        var t = function() {
            return this
        }();
        if (!t && "undefined" != typeof window && (t = window), "undefined" == typeof requirejs) {
            var e = function(t, i, n) {
                "string" == typeof t ? (2 == arguments.length && (n = i), e.modules[t] || (e.payloads[t] = n, e.modules[t] = null)) : e.original ? e.original.apply(this, arguments) : (console.error("dropping module because define wasn't a string."), console.trace())
            };
            e.modules = {}, e.payloads = {};
            var i = function(t, e, i) {
                    if ("string" == typeof e) {
                        var s = r(t, e);
                        if (void 0 != s) return i && i(), s
                    } else if ("[object Array]" === Object.prototype.toString.call(e)) {
                        for (var o = [], a = 0, l = e.length; a < l; ++a) {
                            var h = r(t, e[a]);
                            if (void 0 == h && n.original) return;
                            o.push(h)
                        }
                        return i && i.apply(null, o) || !0
                    }
                },
                n = function(t, e) {
                    var s = i("", t, e);
                    return void 0 == s && n.original ? n.original.apply(this, arguments) : s
                },
                s = function(t, e) {
                    if (-1 !== e.indexOf("!")) {
                        var i = e.split("!");
                        return s(t, i[0]) + "!" + s(t, i[1])
                    }
                    if ("." == e.charAt(0))
                        for (e = t.split("/").slice(0, -1).join("/") + "/" + e; - 1 !== e.indexOf(".") && n != e;) {
                            var n = e;
                            e = e.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "")
                        }
                    return e
                },
                r = function(t, n) {
                    n = s(t, n);
                    var r = e.modules[n];
                    if (!r) {
                        if ("function" == typeof(r = e.payloads[n])) {
                            var o = {},
                                a = {
                                    id: n,
                                    uri: "",
                                    exports: o,
                                    packaged: !0
                                },
                                l = r(function(t, e) {
                                    return i(n, t, e)
                                }, o, a);
                            e.modules[n] = o = l || a.exports, delete e.payloads[n]
                        }
                        r = e.modules[n] = o || r
                    }
                    return r
                };
            ! function(i) {
                var s = t;
                s.define && s.define.packaged || (e.original = s.define, s.define = e, s.define.packaged = !0), s.require && s.require.packaged || (n.original = s.require, s.require = n, s.require.packaged = !0)
            }()
        }
    }(), define("ace/lib/regexp", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        var n = {
                exec: RegExp.prototype.exec,
                test: RegExp.prototype.test,
                match: String.prototype.match,
                replace: String.prototype.replace,
                split: String.prototype.split
            },
            s = void 0 === n.exec.call(/()??/, "")[1],
            r = function() {
                var t = /^/g;
                return n.test.call(t, ""), !t.lastIndex
            }();
        r && s || (RegExp.prototype.exec = function(t) {
            var e, i, o = n.exec.apply(this, arguments);
            if ("string" == typeof t && o) {
                if (!s && o.length > 1 && function(t, e, i) {
                        if (Array.prototype.indexOf) return t.indexOf("", void 0);
                        for (var n = 0; n < t.length; n++)
                            if ("" === t[n]) return n;
                        return -1
                    }(o) > -1 && (i = RegExp(this.source, n.replace.call(function(t) {
                        return (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.extended ? "x" : "") + (t.sticky ? "y" : "")
                    }(this), "g", "")), n.replace.call(t.slice(o.index), i, function() {
                        for (var t = 1; t < arguments.length - 2; t++) void 0 === arguments[t] && (o[t] = void 0)
                    })), this._xregexp && this._xregexp.captureNames)
                    for (var a = 1; a < o.length; a++)(e = this._xregexp.captureNames[a - 1]) && (o[e] = o[a]);
                !r && this.global && !o[0].length && this.lastIndex > o.index && this.lastIndex--
            }
            return o
        }, r || (RegExp.prototype.test = function(t) {
            var e = n.exec.call(this, t);
            return e && this.global && !e[0].length && this.lastIndex > e.index && this.lastIndex--, !!e
        }))
    }), define("ace/lib/es5-shim", ["require", "exports", "module"], function(t, e, i) {
        function n() {}

        function s(t) {
            try {
                return Object.defineProperty(t, "sentinel", {}), "sentinel" in t
            } catch (t) {}
        }

        function r(t) {
            return (t = +t) != t ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
        }
        Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError("Function.prototype.bind called on incompatible " + e);
            var i = g.call(arguments, 1),
                s = function() {
                    if (this instanceof s) {
                        var n = e.apply(this, i.concat(g.call(arguments)));
                        return Object(n) === n ? n : this
                    }
                    return e.apply(t, i.concat(g.call(arguments)))
                };
            return e.prototype && (n.prototype = e.prototype, s.prototype = new n, n.prototype = null), s
        });
        var o, a, l, h, c, u = Function.prototype.call,
            d = Array.prototype,
            f = Object.prototype,
            g = d.slice,
            m = u.bind(f.toString),
            p = u.bind(f.hasOwnProperty);
        if ((c = p(f, "__defineGetter__")) && (o = u.bind(f.__defineGetter__), a = u.bind(f.__defineSetter__), l = u.bind(f.__lookupGetter__), h = u.bind(f.__lookupSetter__)), 2 != [1, 2].splice(0).length)
            if (function() {
                    function t(t) {
                        var e = new Array(t + 2);
                        return e[0] = e[1] = 0, e
                    }
                    var e, i = [];
                    if (i.splice.apply(i, t(20)), i.splice.apply(i, t(26)), e = i.length, i.splice(5, 0, "XXX"), e + 1 == i.length) return !0
                }()) {
                var v = Array.prototype.splice;
                Array.prototype.splice = function(t, e) {
                    return arguments.length ? v.apply(this, [void 0 === t ? 0 : t, void 0 === e ? this.length - t : e].concat(g.call(arguments, 2))) : []
                }
            } else Array.prototype.splice = function(t, e) {
                var i = this.length;
                t > 0 ? t > i && (t = i) : void 0 == t ? t = 0 : t < 0 && (t = Math.max(i + t, 0)), t + e < i || (e = i - t);
                var n = this.slice(t, t + e),
                    s = g.call(arguments, 2),
                    r = s.length;
                if (t === i) r && this.push.apply(this, s);
                else {
                    var o = Math.min(e, i - t),
                        a = t + o,
                        l = a + r - o,
                        h = i - a,
                        c = i - o;
                    if (l < a)
                        for (var u = 0; u < h; ++u) this[l + u] = this[a + u];
                    else if (l > a)
                        for (u = h; u--;) this[l + u] = this[a + u];
                    if (r && t === c) this.length = c, this.push.apply(this, s);
                    else
                        for (this.length = c + r, u = 0; u < r; ++u) this[t + u] = s[u]
                }
                return n
            };
        Array.isArray || (Array.isArray = function(t) {
            return "[object Array]" == m(t)
        });
        var _, w = Object("a"),
            y = "a" != w[0] || !(0 in w);
        if (Array.prototype.forEach || (Array.prototype.forEach = function(t) {
                var e = M(this),
                    i = y && "[object String]" == m(this) ? this.split("") : e,
                    n = arguments[1],
                    s = -1,
                    r = i.length >>> 0;
                if ("[object Function]" != m(t)) throw new TypeError;
                for (; ++s < r;) s in i && t.call(n, i[s], s, e)
            }), Array.prototype.map || (Array.prototype.map = function(t) {
                var e = M(this),
                    i = y && "[object String]" == m(this) ? this.split("") : e,
                    n = i.length >>> 0,
                    s = Array(n),
                    r = arguments[1];
                if ("[object Function]" != m(t)) throw new TypeError(t + " is not a function");
                for (var o = 0; o < n; o++) o in i && (s[o] = t.call(r, i[o], o, e));
                return s
            }), Array.prototype.filter || (Array.prototype.filter = function(t) {
                var e, i = M(this),
                    n = y && "[object String]" == m(this) ? this.split("") : i,
                    s = n.length >>> 0,
                    r = [],
                    o = arguments[1];
                if ("[object Function]" != m(t)) throw new TypeError(t + " is not a function");
                for (var a = 0; a < s; a++) a in n && t.call(o, e = n[a], a, i) && r.push(e);
                return r
            }), Array.prototype.every || (Array.prototype.every = function(t) {
                var e = M(this),
                    i = y && "[object String]" == m(this) ? this.split("") : e,
                    n = i.length >>> 0,
                    s = arguments[1];
                if ("[object Function]" != m(t)) throw new TypeError(t + " is not a function");
                for (var r = 0; r < n; r++)
                    if (r in i && !t.call(s, i[r], r, e)) return !1;
                return !0
            }), Array.prototype.some || (Array.prototype.some = function(t) {
                var e = M(this),
                    i = y && "[object String]" == m(this) ? this.split("") : e,
                    n = i.length >>> 0,
                    s = arguments[1];
                if ("[object Function]" != m(t)) throw new TypeError(t + " is not a function");
                for (var r = 0; r < n; r++)
                    if (r in i && t.call(s, i[r], r, e)) return !0;
                return !1
            }), Array.prototype.reduce || (Array.prototype.reduce = function(t) {
                var e = M(this),
                    i = y && "[object String]" == m(this) ? this.split("") : e,
                    n = i.length >>> 0;
                if ("[object Function]" != m(t)) throw new TypeError(t + " is not a function");
                if (!n && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
                var s, r = 0;
                if (arguments.length >= 2) s = arguments[1];
                else
                    for (;;) {
                        if (r in i) {
                            s = i[r++];
                            break
                        }
                        if (++r >= n) throw new TypeError("reduce of empty array with no initial value")
                    }
                for (; r < n; r++) r in i && (s = t.call(void 0, s, i[r], r, e));
                return s
            }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(t) {
                var e = M(this),
                    i = y && "[object String]" == m(this) ? this.split("") : e,
                    n = i.length >>> 0;
                if ("[object Function]" != m(t)) throw new TypeError(t + " is not a function");
                if (!n && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                var s, r = n - 1;
                if (arguments.length >= 2) s = arguments[1];
                else
                    for (;;) {
                        if (r in i) {
                            s = i[r--];
                            break
                        }
                        if (--r < 0) throw new TypeError("reduceRight of empty array with no initial value")
                    }
                do {
                    r in this && (s = t.call(void 0, s, i[r], r, e))
                } while (r--);
                return s
            }), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function(t) {
                var e = y && "[object String]" == m(this) ? this.split("") : M(this),
                    i = e.length >>> 0;
                if (!i) return -1;
                var n = 0;
                for (arguments.length > 1 && (n = r(arguments[1])), n = n >= 0 ? n : Math.max(0, i + n); n < i; n++)
                    if (n in e && e[n] === t) return n;
                return -1
            }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function(t) {
                var e = y && "[object String]" == m(this) ? this.split("") : M(this),
                    i = e.length >>> 0;
                if (!i) return -1;
                var n = i - 1;
                for (arguments.length > 1 && (n = Math.min(n, r(arguments[1]))), n = n >= 0 ? n : i - Math.abs(n); n >= 0; n--)
                    if (n in e && t === e[n]) return n;
                return -1
            }), Object.getPrototypeOf || (Object.getPrototypeOf = function(t) {
                return t.__proto__ || (t.constructor ? t.constructor.prototype : f)
            }), Object.getOwnPropertyDescriptor || (Object.getOwnPropertyDescriptor = function(t, e) {
                if ("object" != typeof t && "function" != typeof t || null === t) throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: " + t);
                if (p(t, e)) {
                    var i;
                    if (i = {
                            enumerable: !0,
                            configurable: !0
                        }, c) {
                        var n = t.__proto__;
                        t.__proto__ = f;
                        var s = l(t, e),
                            r = h(t, e);
                        if (t.__proto__ = n, s || r) return s && (i.get = s), r && (i.set = r), i
                    }
                    return i.value = t[e], i
                }
            }), Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(t) {
                return Object.keys(t)
            }), Object.create || (_ = null === Object.prototype.__proto__ ? function() {
                return {
                    __proto__: null
                }
            } : function() {
                var t = {};
                for (var e in t) t[e] = null;
                return t.constructor = t.hasOwnProperty = t.propertyIsEnumerable = t.isPrototypeOf = t.toLocaleString = t.toString = t.valueOf = t.__proto__ = null, t
            }, Object.create = function(t, e) {
                var i;
                if (null === t) i = _();
                else {
                    if ("object" != typeof t) throw new TypeError("typeof prototype[" + typeof t + "] != 'object'");
                    var n = function() {};
                    n.prototype = t, (i = new n).__proto__ = t
                }
                return void 0 !== e && Object.defineProperties(i, e), i
            }), Object.defineProperty) {
            var b = s({}),
                x = "undefined" == typeof document || s(document.createElement("div"));
            if (!b || !x) var $ = Object.defineProperty
        }
        Object.defineProperty && !$ || (Object.defineProperty = function(t, e, i) {
            if ("object" != typeof t && "function" != typeof t || null === t) throw new TypeError("Object.defineProperty called on non-object: " + t);
            if ("object" != typeof i && "function" != typeof i || null === i) throw new TypeError("Property description must be an object: " + i);
            if ($) try {
                return $.call(Object, t, e, i)
            } catch (t) {}
            if (p(i, "value"))
                if (c && (l(t, e) || h(t, e))) {
                    var n = t.__proto__;
                    t.__proto__ = f, delete t[e], t[e] = i.value, t.__proto__ = n
                } else t[e] = i.value;
            else {
                if (!c) throw new TypeError("getters & setters can not be defined on this javascript engine");
                p(i, "get") && o(t, e, i.get), p(i, "set") && a(t, e, i.set)
            }
            return t
        }), Object.defineProperties || (Object.defineProperties = function(t, e) {
            for (var i in e) p(e, i) && Object.defineProperty(t, i, e[i]);
            return t
        }), Object.seal || (Object.seal = function(t) {
            return t
        }), Object.freeze || (Object.freeze = function(t) {
            return t
        });
        try {
            Object.freeze(function() {})
        } catch (t) {
            Object.freeze = function(t) {
                return function(e) {
                    return "function" == typeof e ? e : t(e)
                }
            }(Object.freeze)
        }
        if (Object.preventExtensions || (Object.preventExtensions = function(t) {
                return t
            }), Object.isSealed || (Object.isSealed = function(t) {
                return !1
            }), Object.isFrozen || (Object.isFrozen = function(t) {
                return !1
            }), Object.isExtensible || (Object.isExtensible = function(t) {
                if (Object(t) === t) throw new TypeError;
                for (var e = ""; p(t, e);) e += "?";
                t[e] = !0;
                var i = p(t, e);
                return delete t[e], i
            }), !Object.keys) {
            var S = !0,
                C = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                T = C.length;
            for (var k in {
                    toString: null
                }) S = !1;
            Object.keys = function(t) {
                if ("object" != typeof t && "function" != typeof t || null === t) throw new TypeError("Object.keys called on a non-object");
                var e = [];
                for (var i in t) p(t, i) && e.push(i);
                if (S)
                    for (var n = 0, s = T; n < s; n++) {
                        var r = C[n];
                        p(t, r) && e.push(r)
                    }
                return e
            }
        }
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        });
        var A = "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
        if (!String.prototype.trim || A.trim()) {
            A = "[" + A + "]";
            var R = new RegExp("^" + A + A + "*"),
                L = new RegExp(A + A + "*$");
            String.prototype.trim = function() {
                return String(this).replace(R, "").replace(L, "")
            }
        }
        var M = function(t) {
            if (null == t) throw new TypeError("can't convert " + t + " to object");
            return Object(t)
        }
    }), define("ace/lib/fixoldbrowsers", ["require", "exports", "module", "ace/lib/regexp", "ace/lib/es5-shim"], function(t, e, i) {
        "use strict";
        t("./regexp"), t("./es5-shim"), "undefined" != typeof Element && !Element.prototype.remove && Object.defineProperty(Element.prototype, "remove", {
            enumerable: !1,
            writable: !0,
            configurable: !0,
            value: function() {
                this.parentNode && this.parentNode.removeChild(this)
            }
        })
    }), define("ace/lib/useragent", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        if (e.OS = {
                LINUX: "LINUX",
                MAC: "MAC",
                WINDOWS: "WINDOWS"
            }, e.getOS = function() {
                return e.isMac ? e.OS.MAC : e.isLinux ? e.OS.LINUX : e.OS.WINDOWS
            }, "object" == typeof navigator) {
            var n = (navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(),
                s = navigator.userAgent;
            e.isWin = "win" == n, e.isMac = "mac" == n, e.isLinux = "linux" == n, e.isIE = "Microsoft Internet Explorer" == navigator.appName || navigator.appName.indexOf("MSAppHost") >= 0 ? parseFloat((s.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]), e.isOldIE = e.isIE && e.isIE < 9, e.isGecko = e.isMozilla = s.match(/ Gecko\/\d+/), e.isOpera = window.opera && "[object Opera]" == Object.prototype.toString.call(window.opera), e.isWebKit = parseFloat(s.split("WebKit/")[1]) || void 0, e.isChrome = parseFloat(s.split(" Chrome/")[1]) || void 0, e.isEdge = parseFloat(s.split(" Edge/")[1]) || void 0, e.isAIR = s.indexOf("AdobeAIR") >= 0, e.isIPad = s.indexOf("iPad") >= 0, e.isAndroid = s.indexOf("Android") >= 0, e.isChromeOS = s.indexOf(" CrOS ") >= 0, e.isIOS = /iPad|iPhone|iPod/.test(s) && !window.MSStream, e.isIOS && (e.isMac = !0), e.isMobile = e.isIPad || e.isAndroid
        }
    }), define("ace/lib/dom", ["require", "exports", "module", "ace/lib/useragent"], function(t, e, i) {
        "use strict";
        var n = t("./useragent");
        if (e.buildDom = function t(e, i, n) {
                if ("string" == typeof e && e) {
                    var s = document.createTextNode(e);
                    return i && i.appendChild(s), s
                }
                if (!Array.isArray(e)) return e;
                if ("string" != typeof e[0] || !e[0]) {
                    for (var r = [], o = 0; o < e.length; o++) {
                        var a = t(e[o], i, n);
                        a && r.push(a)
                    }
                    return r
                }
                var l = document.createElement(e[0]),
                    h = e[1],
                    c = 1;
                for (h && "object" == typeof h && !Array.isArray(h) && (c = 2), o = c; o < e.length; o++) t(e[o], l, n);
                return 2 == c && Object.keys(h).forEach(function(t) {
                    var e = h[t];
                    "class" === t ? l.className = Array.isArray(e) ? e.join(" ") : e : "function" == typeof e || "value" == t ? l[t] = e : "ref" === t ? n && (n[e] = l) : null != e && l.setAttribute(t, e)
                }), i && i.appendChild(l), l
            }, e.getDocumentHead = function(t) {
                return t || (t = document), t.head || t.getElementsByTagName("head")[0] || t.documentElement
            }, e.createElement = function(t, e) {
                return document.createElementNS ? document.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : document.createElement(t)
            }, e.removeChildren = function(t) {
                t.innerHTML = ""
            }, e.createTextNode = function(t, e) {
                return (e ? e.ownerDocument : document).createTextNode(t)
            }, e.createFragment = function(t) {
                return (t ? t.ownerDocument : document).createDocumentFragment()
            }, e.hasCssClass = function(t, e) {
                return -1 !== (t.className + "").split(/\s+/g).indexOf(e)
            }, e.addCssClass = function(t, i) {
                e.hasCssClass(t, i) || (t.className += " " + i)
            }, e.removeCssClass = function(t, e) {
                for (var i = t.className.split(/\s+/g);;) {
                    var n = i.indexOf(e);
                    if (-1 == n) break;
                    i.splice(n, 1)
                }
                t.className = i.join(" ")
            }, e.toggleCssClass = function(t, e) {
                for (var i = t.className.split(/\s+/g), n = !0;;) {
                    var s = i.indexOf(e);
                    if (-1 == s) break;
                    n = !1, i.splice(s, 1)
                }
                return n && i.push(e), t.className = i.join(" "), n
            }, e.setCssClass = function(t, i, n) {
                n ? e.addCssClass(t, i) : e.removeCssClass(t, i)
            }, e.hasCssString = function(t, e) {
                var i, n = 0;
                if (i = (e = e || document).querySelectorAll("style"))
                    for (; n < i.length;)
                        if (i[n++].id === t) return !0
            }, e.importCssString = function(t, i, n) {
                var s = n && n.getRootNode ? n.getRootNode() : document,
                    r = s.ownerDocument || s;
                if (i && e.hasCssString(i, s)) return null;
                i && (t += "\n/*# sourceURL=ace/css/" + i + " */");
                var o = e.createElement("style");
                o.appendChild(r.createTextNode(t)), i && (o.id = i), s == r && (s = e.getDocumentHead(r)), s.insertBefore(o, s.firstChild)
            }, e.importCssStylsheet = function(t, i) {
                e.buildDom(["link", {
                    rel: "stylesheet",
                    href: t
                }], e.getDocumentHead(i))
            }, e.scrollbarWidth = function(t) {
                var i = e.createElement("ace_inner");
                i.style.width = "100%", i.style.minWidth = "0px", i.style.height = "200px", i.style.display = "block";
                var n = e.createElement("ace_outer"),
                    s = n.style;
                s.position = "absolute", s.left = "-10000px", s.overflow = "hidden", s.width = "200px", s.minWidth = "0px", s.height = "150px", s.display = "block", n.appendChild(i);
                var r = t.documentElement;
                r.appendChild(n);
                var o = i.offsetWidth;
                s.overflow = "scroll";
                var a = i.offsetWidth;
                return o == a && (a = n.clientWidth), r.removeChild(n), o - a
            }, "undefined" == typeof document && (e.importCssString = function() {}), e.computedStyle = function(t, e) {
                return window.getComputedStyle(t, "") || {}
            }, e.setStyle = function(t, e, i) {
                t[e] !== i && (t[e] = i)
            }, e.HAS_CSS_ANIMATION = !1, e.HAS_CSS_TRANSFORMS = !1, e.HI_DPI = !n.isWin || "undefined" != typeof window && window.devicePixelRatio >= 1.5, "undefined" != typeof document) {
            var s = document.createElement("div");
            e.HI_DPI && void 0 !== s.style.transform && (e.HAS_CSS_TRANSFORMS = !0), !n.isEdge && void 0 !== s.style.animationName && (e.HAS_CSS_ANIMATION = !0), s = null
        }
        e.translate = e.HAS_CSS_TRANSFORMS ? function(t, e, i) {
            t.style.transform = "translate(" + Math.round(e) + "px, " + Math.round(i) + "px)"
        } : function(t, e, i) {
            t.style.top = Math.round(i) + "px", t.style.left = Math.round(e) + "px"
        }
    }), define("ace/lib/oop", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        e.inherits = function(t, e) {
            t.super_ = e, t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }, e.mixin = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, e.implement = function(t, i) {
            e.mixin(t, i)
        }
    }), define("ace/lib/keys", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop"], function(t, e, i) {
        "use strict";
        t("./fixoldbrowsers");
        var n = t("./oop"),
            s = function() {
                var t, e, i = {
                    MODIFIER_KEYS: {
                        16: "Shift",
                        17: "Ctrl",
                        18: "Alt",
                        224: "Meta"
                    },
                    KEY_MODS: {
                        ctrl: 1,
                        alt: 2,
                        option: 2,
                        shift: 4,
                        super: 8,
                        meta: 8,
                        command: 8,
                        cmd: 8
                    },
                    FUNCTION_KEYS: {
                        8: "Backspace",
                        9: "Tab",
                        13: "Return",
                        19: "Pause",
                        27: "Esc",
                        32: "Space",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "Left",
                        38: "Up",
                        39: "Right",
                        40: "Down",
                        44: "Print",
                        45: "Insert",
                        46: "Delete",
                        96: "Numpad0",
                        97: "Numpad1",
                        98: "Numpad2",
                        99: "Numpad3",
                        100: "Numpad4",
                        101: "Numpad5",
                        102: "Numpad6",
                        103: "Numpad7",
                        104: "Numpad8",
                        105: "Numpad9",
                        "-13": "NumpadEnter",
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
                        144: "Numlock",
                        145: "Scrolllock"
                    },
                    PRINTABLE_KEYS: {
                        32: " ",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        59: ";",
                        61: "=",
                        65: "a",
                        66: "b",
                        67: "c",
                        68: "d",
                        69: "e",
                        70: "f",
                        71: "g",
                        72: "h",
                        73: "i",
                        74: "j",
                        75: "k",
                        76: "l",
                        77: "m",
                        78: "n",
                        79: "o",
                        80: "p",
                        81: "q",
                        82: "r",
                        83: "s",
                        84: "t",
                        85: "u",
                        86: "v",
                        87: "w",
                        88: "x",
                        89: "y",
                        90: "z",
                        107: "+",
                        109: "-",
                        110: ".",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'",
                        111: "/",
                        106: "*"
                    }
                };
                for (e in i.FUNCTION_KEYS) t = i.FUNCTION_KEYS[e].toLowerCase(), i[t] = parseInt(e, 10);
                for (e in i.PRINTABLE_KEYS) t = i.PRINTABLE_KEYS[e].toLowerCase(), i[t] = parseInt(e, 10);
                return n.mixin(i, i.MODIFIER_KEYS), n.mixin(i, i.PRINTABLE_KEYS), n.mixin(i, i.FUNCTION_KEYS), i.enter = i.return, i.escape = i.esc, i.del = i.delete, i[173] = "-",
                    function() {
                        for (var t = ["cmd", "ctrl", "alt", "shift"], e = Math.pow(2, t.length); e--;) i.KEY_MODS[e] = t.filter(function(t) {
                            return e & i.KEY_MODS[t]
                        }).join("-") + "-"
                    }(), i.KEY_MODS[0] = "", i.KEY_MODS[-1] = "input-", i
            }();
        n.mixin(e, s), e.keyCodeToString = function(t) {
            var e = s[t];
            return "string" != typeof e && (e = String.fromCharCode(t)), e.toLowerCase()
        }
    }), define("ace/lib/event", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            var n = h(e);
            if (!o.isMac && a) {
                if (e.getModifierState && (e.getModifierState("OS") || e.getModifierState("Win")) && (n |= 8), a.altGr) {
                    if (3 == (3 & n)) return;
                    a.altGr = 0
                }
                if (18 === i || 17 === i) {
                    var s = "location" in e ? e.location : e.keyLocation;
                    17 === i && 1 === s ? 1 == a[i] && (l = e.timeStamp) : 18 === i && 3 === n && 2 === s && e.timeStamp - l < 50 && (a.altGr = !0)
                }
            }
            if (i in r.MODIFIER_KEYS && (i = -1), 8 & n && i >= 91 && i <= 93 && (i = -1), n || 13 !== i || 3 !== (s = "location" in e ? e.location : e.keyLocation) || (t(e, n, -i), !e.defaultPrevented)) {
                if (o.isChromeOS && 8 & n) {
                    if (t(e, n, i), e.defaultPrevented) return;
                    n &= -9
                }
                return !!(n || i in r.FUNCTION_KEYS || i in r.PRINTABLE_KEYS) && t(e, n, i)
            }
        }

        function s() {
            a = Object.create(null)
        }
        var r = t("./keys"),
            o = t("./useragent"),
            a = null,
            l = 0;
        e.addListener = function(t, e, i) {
            if (t.addEventListener) return t.addEventListener(e, i, !1);
            if (t.attachEvent) {
                var n = function() {
                    i.call(t, window.event)
                };
                i._wrapper = n, t.attachEvent("on" + e, n)
            }
        }, e.removeListener = function(t, e, i) {
            if (t.removeEventListener) return t.removeEventListener(e, i, !1);
            t.detachEvent && t.detachEvent("on" + e, i._wrapper || i)
        }, e.stopEvent = function(t) {
            return e.stopPropagation(t), e.preventDefault(t), !1
        }, e.stopPropagation = function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }, e.preventDefault = function(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }, e.getButton = function(t) {
            return "dblclick" == t.type ? 0 : "contextmenu" == t.type || o.isMac && t.ctrlKey && !t.altKey && !t.shiftKey ? 2 : t.preventDefault ? t.button : {
                1: 0,
                2: 2,
                4: 1
            }[t.button]
        }, e.capture = function(t, i, n) {
            function s(t) {
                i && i(t), n && n(t), e.removeListener(document, "mousemove", i, !0), e.removeListener(document, "mouseup", s, !0), e.removeListener(document, "dragstart", s, !0)
            }
            return e.addListener(document, "mousemove", i, !0), e.addListener(document, "mouseup", s, !0), e.addListener(document, "dragstart", s, !0), s
        }, e.addTouchMoveListener = function(t, i) {
            var n, s;
            e.addListener(t, "touchstart", function(t) {
                var e = t.touches[0];
                n = e.clientX, s = e.clientY
            }), e.addListener(t, "touchmove", function(t) {
                var e = t.touches;
                if (!(e.length > 1)) {
                    var r = e[0];
                    t.wheelX = n - r.clientX, t.wheelY = s - r.clientY, n = r.clientX, s = r.clientY, i(t)
                }
            })
        }, e.addMouseWheelListener = function(t, i) {
            "onmousewheel" in t ? e.addListener(t, "mousewheel", function(t) {
                void 0 !== t.wheelDeltaX ? (t.wheelX = -t.wheelDeltaX / 8, t.wheelY = -t.wheelDeltaY / 8) : (t.wheelX = 0, t.wheelY = -t.wheelDelta / 8), i(t)
            }) : "onwheel" in t ? e.addListener(t, "wheel", function(t) {
                switch (t.deltaMode) {
                    case t.DOM_DELTA_PIXEL:
                        t.wheelX = .35 * t.deltaX || 0, t.wheelY = .35 * t.deltaY || 0;
                        break;
                    case t.DOM_DELTA_LINE:
                    case t.DOM_DELTA_PAGE:
                        t.wheelX = 5 * (t.deltaX || 0), t.wheelY = 5 * (t.deltaY || 0)
                }
                i(t)
            }) : e.addListener(t, "DOMMouseScroll", function(t) {
                t.axis && t.axis == t.HORIZONTAL_AXIS ? (t.wheelX = 5 * (t.detail || 0), t.wheelY = 0) : (t.wheelX = 0, t.wheelY = 5 * (t.detail || 0)), i(t)
            })
        }, e.addMultiMouseDownListener = function(t, i, n, s) {
            function r(t) {
                if (0 !== e.getButton(t) ? u = 0 : t.detail > 1 ? ++u > 4 && (u = 1) : u = 1, o.isIE) {
                    var r = Math.abs(t.clientX - l) > 5 || Math.abs(t.clientY - h) > 5;
                    c && !r || (u = 1), c && clearTimeout(c), c = setTimeout(function() {
                        c = null
                    }, i[u - 1] || 600), 1 == u && (l = t.clientX, h = t.clientY)
                }
                if (t._clicks = u, n[s]("mousedown", t), u > 4) u = 0;
                else if (u > 1) return n[s](d[u], t)
            }

            function a(t) {
                u = 2, c && clearTimeout(c), c = setTimeout(function() {
                    c = null
                }, i[u - 1] || 600), n[s]("mousedown", t), n[s](d[u], t)
            }
            var l, h, c, u = 0,
                d = {
                    2: "dblclick",
                    3: "tripleclick",
                    4: "quadclick"
                };
            Array.isArray(t) || (t = [t]), t.forEach(function(t) {
                e.addListener(t, "mousedown", r), o.isOldIE && e.addListener(t, "dblclick", a)
            })
        };
        var h = !o.isMac || !o.isOpera || "KeyboardEvent" in window ? function(t) {
            return 0 | (t.ctrlKey ? 1 : 0) | (t.altKey ? 2 : 0) | (t.shiftKey ? 4 : 0) | (t.metaKey ? 8 : 0)
        } : function(t) {
            return 0 | (t.metaKey ? 1 : 0) | (t.altKey ? 2 : 0) | (t.shiftKey ? 4 : 0) | (t.ctrlKey ? 8 : 0)
        };
        if (e.getModifierString = function(t) {
                return r.KEY_MODS[h(t)]
            }, e.addCommandKeyListener = function(t, i) {
                var r = e.addListener;
                if (o.isOldGecko || o.isOpera && !("KeyboardEvent" in window)) {
                    var l = null;
                    r(t, "keydown", function(t) {
                        l = t.keyCode
                    }), r(t, "keypress", function(t) {
                        return n(i, t, l)
                    })
                } else {
                    var h = null;
                    r(t, "keydown", function(t) {
                        a[t.keyCode] = (a[t.keyCode] || 0) + 1;
                        var e = n(i, t, t.keyCode);
                        return h = t.defaultPrevented, e
                    }), r(t, "keypress", function(t) {
                        h && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey) && (e.stopEvent(t), h = null)
                    }), r(t, "keyup", function(t) {
                        a[t.keyCode] = null
                    }), a || (s(), r(window, "focus", s))
                }
            }, "object" == typeof window && window.postMessage && !o.isOldIE) {
            var c = 1;
            e.nextTick = function(t, i) {
                i = i || window;
                var n = "zero-timeout-message-" + c++,
                    s = function(r) {
                        r.data == n && (e.stopPropagation(r), e.removeListener(i, "message", s), t())
                    };
                e.addListener(i, "message", s), i.postMessage(n, "*")
            }
        }
        e.$idleBlocked = !1, e.onIdle = function(t, i) {
            return setTimeout(function i() {
                e.$idleBlocked ? setTimeout(i, 100) : t()
            }, i)
        }, e.$idleBlockId = null, e.blockIdle = function(t) {
            e.$idleBlockId && clearTimeout(e.$idleBlockId), e.$idleBlocked = !0, e.$idleBlockId = setTimeout(function() {
                e.$idleBlocked = !1
            }, t || 100)
        }, e.nextFrame = "object" == typeof window && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame), e.nextFrame = e.nextFrame ? e.nextFrame.bind(window) : function(t) {
            setTimeout(t, 17)
        }
    }), define("ace/range", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        var n = function(t, e, i, n) {
            this.start = {
                row: t,
                column: e
            }, this.end = {
                row: i,
                column: n
            }
        };
        (function() {
            this.isEqual = function(t) {
                return this.start.row === t.start.row && this.end.row === t.end.row && this.start.column === t.start.column && this.end.column === t.end.column
            }, this.toString = function() {
                return "Range: [" + this.start.row + "/" + this.start.column + "] -> [" + this.end.row + "/" + this.end.column + "]"
            }, this.contains = function(t, e) {
                return 0 == this.compare(t, e)
            }, this.compareRange = function(t) {
                var e, i = t.end,
                    n = t.start;
                return 1 == (e = this.compare(i.row, i.column)) ? 1 == (e = this.compare(n.row, n.column)) ? 2 : 0 == e ? 1 : 0 : -1 == e ? -2 : -1 == (e = this.compare(n.row, n.column)) ? -1 : 1 == e ? 42 : 0
            }, this.comparePoint = function(t) {
                return this.compare(t.row, t.column)
            }, this.containsRange = function(t) {
                return 0 == this.comparePoint(t.start) && 0 == this.comparePoint(t.end)
            }, this.intersects = function(t) {
                var e = this.compareRange(t);
                return -1 == e || 0 == e || 1 == e
            }, this.isEnd = function(t, e) {
                return this.end.row == t && this.end.column == e
            }, this.isStart = function(t, e) {
                return this.start.row == t && this.start.column == e
            }, this.setStart = function(t, e) {
                "object" == typeof t ? (this.start.column = t.column, this.start.row = t.row) : (this.start.row = t, this.start.column = e)
            }, this.setEnd = function(t, e) {
                "object" == typeof t ? (this.end.column = t.column, this.end.row = t.row) : (this.end.row = t, this.end.column = e)
            }, this.inside = function(t, e) {
                return 0 == this.compare(t, e) && !this.isEnd(t, e) && !this.isStart(t, e)
            }, this.insideStart = function(t, e) {
                return 0 == this.compare(t, e) && !this.isEnd(t, e)
            }, this.insideEnd = function(t, e) {
                return 0 == this.compare(t, e) && !this.isStart(t, e)
            }, this.compare = function(t, e) {
                return this.isMultiLine() || t !== this.start.row ? t < this.start.row ? -1 : t > this.end.row ? 1 : this.start.row === t ? e >= this.start.column ? 0 : -1 : this.end.row === t ? e <= this.end.column ? 0 : 1 : 0 : e < this.start.column ? -1 : e > this.end.column ? 1 : 0
            }, this.compareStart = function(t, e) {
                return this.start.row == t && this.start.column == e ? -1 : this.compare(t, e)
            }, this.compareEnd = function(t, e) {
                return this.end.row == t && this.end.column == e ? 1 : this.compare(t, e)
            }, this.compareInside = function(t, e) {
                return this.end.row == t && this.end.column == e ? 1 : this.start.row == t && this.start.column == e ? -1 : this.compare(t, e)
            }, this.clipRows = function(t, e) {
                if (this.end.row > e) var i = {
                    row: e + 1,
                    column: 0
                };
                else this.end.row < t && (i = {
                    row: t,
                    column: 0
                });
                if (this.start.row > e) var s = {
                    row: e + 1,
                    column: 0
                };
                else this.start.row < t && (s = {
                    row: t,
                    column: 0
                });
                return n.fromPoints(s || this.start, i || this.end)
            }, this.extend = function(t, e) {
                var i = this.compare(t, e);
                if (0 == i) return this;
                if (-1 == i) var s = {
                    row: t,
                    column: e
                };
                else var r = {
                    row: t,
                    column: e
                };
                return n.fromPoints(s || this.start, r || this.end)
            }, this.isEmpty = function() {
                return this.start.row === this.end.row && this.start.column === this.end.column
            }, this.isMultiLine = function() {
                return this.start.row !== this.end.row
            }, this.clone = function() {
                return n.fromPoints(this.start, this.end)
            }, this.collapseRows = function() {
                return new n(this.start.row, 0, 0 == this.end.column ? Math.max(this.start.row, this.end.row - 1) : this.end.row, 0)
            }, this.toScreenRange = function(t) {
                var e = t.documentToScreenPosition(this.start),
                    i = t.documentToScreenPosition(this.end);
                return new n(e.row, e.column, i.row, i.column)
            }, this.moveBy = function(t, e) {
                this.start.row += t, this.start.column += e, this.end.row += t, this.end.column += e
            }
        }).call(n.prototype), n.fromPoints = function(t, e) {
            return new n(t.row, t.column, e.row, e.column)
        }, n.comparePoints = function(t, e) {
            return t.row - e.row || t.column - e.column
        }, n.comparePoints = function(t, e) {
            return t.row - e.row || t.column - e.column
        }, e.Range = n
    }), define("ace/lib/lang", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        e.last = function(t) {
            return t[t.length - 1]
        }, e.stringReverse = function(t) {
            return t.split("").reverse().join("")
        }, e.stringRepeat = function(t, e) {
            for (var i = ""; e > 0;) 1 & e && (i += t), (e >>= 1) && (t += t);
            return i
        };
        var n = /^\s\s*/,
            s = /\s\s*$/;
        e.stringTrimLeft = function(t) {
            return t.replace(n, "")
        }, e.stringTrimRight = function(t) {
            return t.replace(s, "")
        }, e.copyObject = function(t) {
            var e = {};
            for (var i in t) e[i] = t[i];
            return e
        }, e.copyArray = function(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++) e[i] = t[i] && "object" == typeof t[i] ? this.copyObject(t[i]) : t[i];
            return e
        }, e.deepCopy = function t(e) {
            if ("object" != typeof e || !e) return e;
            var i;
            if (Array.isArray(e)) {
                i = [];
                for (var n = 0; n < e.length; n++) i[n] = t(e[n]);
                return i
            }
            if ("[object Object]" !== Object.prototype.toString.call(e)) return e;
            for (var n in i = {}, e) i[n] = t(e[n]);
            return i
        }, e.arrayToMap = function(t) {
            for (var e = {}, i = 0; i < t.length; i++) e[t[i]] = 1;
            return e
        }, e.createMap = function(t) {
            var e = Object.create(null);
            for (var i in t) e[i] = t[i];
            return e
        }, e.arrayRemove = function(t, e) {
            for (var i = 0; i <= t.length; i++) e === t[i] && t.splice(i, 1)
        }, e.escapeRegExp = function(t) {
            return t.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
        }, e.escapeHTML = function(t) {
            return ("" + t).replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;")
        }, e.getMatchOffsets = function(t, e) {
            var i = [];
            return t.replace(e, function(t) {
                i.push({
                    offset: arguments[arguments.length - 2],
                    length: t.length
                })
            }), i
        }, e.deferredCall = function(t) {
            var e = null,
                i = function() {
                    e = null, t()
                },
                n = function(t) {
                    return n.cancel(), e = setTimeout(i, t || 0), n
                };
            return n.schedule = n, n.call = function() {
                return this.cancel(), t(), n
            }, n.cancel = function() {
                return clearTimeout(e), e = null, n
            }, n.isPending = function() {
                return e
            }, n
        }, e.delayedCall = function(t, e) {
            var i = null,
                n = function() {
                    i = null, t()
                },
                s = function(t) {
                    null == i && (i = setTimeout(n, t || e))
                };
            return s.delay = function(t) {
                i && clearTimeout(i), i = setTimeout(n, t || e)
            }, s.schedule = s, s.call = function() {
                this.cancel(), t()
            }, s.cancel = function() {
                i && clearTimeout(i), i = null
            }, s.isPending = function() {
                return i
            }, s
        }
    }), define("ace/keyboard/textinput_ios", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/lib/keys"], function(t, e, i) {
        "use strict";
        var n = t("../lib/event"),
            s = t("../lib/useragent"),
            r = t("../lib/dom"),
            o = t("../lib/lang"),
            a = t("../lib/keys"),
            l = a.KEY_MODS,
            h = s.isChrome < 18,
            c = s.isIE;
        e.TextInput = function(t, e) {
            function i(t) {
                if (!_) {
                    if (_ = !0, S) e = 0, i = t ? 0 : f.value.length - 1;
                    else var e = 4,
                        i = 5;
                    try {
                        f.setSelectionRange(e, i)
                    } catch (t) {}
                    _ = !1
                }
            }

            function u() {
                _ || (f.value = g, s.isWebKit && $.schedule())
            }

            function d() {
                clearTimeout(O), O = setTimeout(function() {
                    w && (f.style.cssText = w, w = ""), null == e.renderer.$keepTextAreaAtCursor && (e.renderer.$keepTextAreaAtCursor = !0, e.renderer.$moveTextAreaToCursor())
                }, 0)
            }
            var f = r.createElement("textarea");
            f.className = s.isIOS ? "ace_text-input ace_text-input-ios" : "ace_text-input", s.isTouchPad && f.setAttribute("x-palm-disable-auto-cap", !0), f.setAttribute("wrap", "off"), f.setAttribute("autocorrect", "off"), f.setAttribute("autocapitalize", "off"), f.setAttribute("spellcheck", !1), f.style.opacity = "0", t.insertBefore(f, t.firstChild);
            var g = "\n aaaa a\n",
                m = !1,
                p = !1,
                v = !1,
                _ = !1,
                w = "",
                y = !0;
            try {
                var b = document.activeElement === f
            } catch (t) {}
            n.addListener(f, "blur", function(t) {
                e.onBlur(t), b = !1
            }), n.addListener(f, "focus", function(t) {
                b = !0, e.onFocus(t), i()
            }), this.focus = function() {
                if (w) return f.focus();
                f.style.position = "fixed", f.focus()
            }, this.blur = function() {
                f.blur()
            }, this.isFocused = function() {
                return b
            };
            var x = o.delayedCall(function() {
                    b && i(y)
                }),
                $ = o.delayedCall(function() {
                    _ || (f.value = g, b && i())
                });
            s.isWebKit || e.addEventListener("changeSelection", function() {
                e.selection.isEmpty() != y && (y = !y, x.schedule())
            }), u(), b && e.onFocus();
            var S = null;
            this.setInputHandler = function(t) {
                S = t
            }, this.getInputHandler = function() {
                return S
            };
            var C = !1,
                T = function(t) {
                    4 === f.selectionStart && 5 === f.selectionEnd || (S && (t = S(t), S = null), v ? (i(), t && e.onPaste(t), v = !1) : t == g.substr(0) && 4 === f.selectionStart ? e.execCommand(C ? "del" : "backspace", {
                        source: "ace"
                    }) : m || (t.substring(0, 9) == g && t.length > g.length ? t = t.substr(9) : t.substr(0, 4) == g.substr(0, 4) ? t = t.substr(4, t.length - g.length + 1) : t.charAt(t.length - 1) == g.charAt(0) && (t = t.slice(0, -1)), t != g.charAt(0) && t.charAt(t.length - 1) == g.charAt(0) && (t = t.slice(0, -1)), t && e.onTextInput(t)), m && (m = !1), C && (C = !1))
                },
                k = function(t) {
                    _ || (T(f.value), u())
                },
                A = function(t, e, i) {
                    var n = t.clipboardData || window.clipboardData;
                    if (n && !h) {
                        var s = c || i ? "Text" : "text/plain";
                        try {
                            return e ? !1 !== n.setData(s, e) : n.getData(s)
                        } catch (t) {
                            if (!i) return A(t, e, !0)
                        }
                    }
                },
                R = function(t, r) {
                    var o = e.getCopyText();
                    if (!o) return n.preventDefault(t);
                    A(t, o) ? (s.isIOS && (p = r, f.value = "\n aa" + o + "a a\n", f.setSelectionRange(4, 4 + o.length), m = {
                        value: o
                    }), r ? e.onCut() : e.onCopy(), s.isIOS || n.preventDefault(t)) : (m = !0, f.value = o, f.select(), setTimeout(function() {
                        m = !1, u(), i(), r ? e.onCut() : e.onCopy()
                    }))
                };
            n.addCommandKeyListener(f, e.onCommandKey.bind(e)), n.addListener(f, "select", function(t) {
                0 !== f.selectionStart || f.selectionEnd !== f.value.length ? S && i(e.selection.isEmpty()) : (e.selectAll(), i())
            }), n.addListener(f, "input", k), n.addListener(f, "cut", function(t) {
                R(t, !0)
            }), n.addListener(f, "copy", function(t) {
                R(t, !1)
            }), n.addListener(f, "paste", function(t) {
                var r = A(t);
                "string" == typeof r ? (r && e.onPaste(r, t), s.isIE && setTimeout(i), n.preventDefault(t)) : (f.value = "", v = !0)
            });
            var L = function() {
                    if (_ && e.onCompositionUpdate && !e.$readOnly) {
                        var t = f.value.replace(/\x01/g, "");
                        if (_.lastValue !== t && (e.onCompositionUpdate(t), _.lastValue && e.undo(), _.canUndo && (_.lastValue = t), _.lastValue)) {
                            var i = e.selection.getRange();
                            e.insert(_.lastValue), e.session.markUndoGroup(), _.range = e.selection.getRange(), e.selection.setRange(i), e.selection.clearSelection()
                        }
                    }
                },
                M = function(t) {
                    if (e.onCompositionEnd && !e.$readOnly) {
                        var i = _;
                        _ = !1;
                        var n = setTimeout(function() {
                            n = null;
                            var t = f.value.replace(/\x01/g, "");
                            _ || (t == i.lastValue ? u() : !i.lastValue && t && (u(), T(t)))
                        });
                        S = function(t) {
                            return n && clearTimeout(n), (t = t.replace(/\x01/g, "")) == i.lastValue ? "" : (i.lastValue && n && e.undo(), t)
                        }, e.onCompositionEnd(), e.removeListener("mousedown", M), "compositionend" == t.type && i.range && e.selection.setRange(i.range), (s.isChrome && s.isChrome >= 53 || s.isWebKit && s.isWebKit >= 603) && k()
                    }
                },
                E = o.delayedCall(L, 50);
            n.addListener(f, "compositionstart", function(t) {
                _ || !e.onCompositionStart || e.$readOnly || ((_ = {}).canUndo = e.session.$undoManager, e.onCompositionStart(), setTimeout(L, 0), e.on("mousedown", M), _.canUndo && !e.selection.isEmpty() && (e.insert(""), e.session.markUndoGroup(), e.selection.clearSelection()), e.session.markUndoGroup())
            }), n.addListener(f, "compositionupdate", function() {
                E.schedule()
            }), n.addListener(f, "keyup", function() {
                E.schedule()
            }), n.addListener(f, "keydown", function() {
                E.schedule()
            }), n.addListener(f, "compositionend", M), this.getElement = function() {
                return f
            }, this.setReadOnly = function(t) {
                f.readOnly = t
            }, this.onContextMenu = function(t) {
                C = !0, i(e.selection.isEmpty()), e._emit("nativecontextmenu", {
                    target: e,
                    domEvent: t
                }), this.moveToMouse(t, !0)
            }, this.moveToMouse = function(t, i) {
                w || (w = f.style.cssText), f.style.cssText = (i ? "z-index:100000;" : "") + "height:" + f.style.height + ";" + (s.isIE ? "opacity:0.1;" : "");
                var o = e.container.getBoundingClientRect(),
                    a = r.computedStyle(e.container),
                    l = o.top + (parseInt(a.borderTopWidth) || 0),
                    h = o.left + (parseInt(o.borderLeftWidth) || 0),
                    c = o.bottom - l - f.clientHeight - 2,
                    u = function(t) {
                        f.style.left = t.clientX - h - 2 + "px", f.style.top = Math.min(t.clientY - l - 2, c) + "px"
                    };
                u(t), "mousedown" == t.type && (e.renderer.$keepTextAreaAtCursor && (e.renderer.$keepTextAreaAtCursor = null), clearTimeout(O), s.isWin && n.capture(e.container, u, d))
            }, this.onContextMenuClose = d;
            var O, P = function(t) {
                e.textInput.onContextMenu(t), d()
            };
            if (n.addListener(f, "mouseup", P), n.addListener(f, "mousedown", function(t) {
                    t.preventDefault(), d()
                }), n.addListener(e.renderer.scroller, "contextmenu", P), n.addListener(f, "contextmenu", P), s.isIOS) {
                var F = null,
                    D = !1;
                t.addEventListener("keydown", function(t) {
                    F && clearTimeout(F), D = !0
                }), t.addEventListener("keyup", function(t) {
                    F = setTimeout(function() {
                        D = !1
                    }, 100)
                });
                var I = function(t) {
                    if (document.activeElement === f && !D) {
                        if (p) return setTimeout(function() {
                            p = !1
                        }, 100);
                        var i = f.selectionStart,
                            n = f.selectionEnd;
                        if (f.setSelectionRange(4, 5), i == n) switch (i) {
                            case 0:
                                e.onCommandKey(null, 0, a.up);
                                break;
                            case 1:
                                e.onCommandKey(null, 0, a.home);
                                break;
                            case 2:
                                e.onCommandKey(null, l.option, a.left);
                                break;
                            case 4:
                                e.onCommandKey(null, 0, a.left);
                                break;
                            case 5:
                                e.onCommandKey(null, 0, a.right);
                                break;
                            case 7:
                                e.onCommandKey(null, l.option, a.right);
                                break;
                            case 8:
                                e.onCommandKey(null, 0, a.end);
                                break;
                            case 9:
                                e.onCommandKey(null, 0, a.down)
                        } else {
                            switch (n) {
                                case 6:
                                    e.onCommandKey(null, l.shift, a.right);
                                    break;
                                case 7:
                                    e.onCommandKey(null, l.shift | l.option, a.right);
                                    break;
                                case 8:
                                    e.onCommandKey(null, l.shift, a.end);
                                    break;
                                case 9:
                                    e.onCommandKey(null, l.shift, a.down)
                            }
                            switch (i) {
                                case 0:
                                    e.onCommandKey(null, l.shift, a.up);
                                    break;
                                case 1:
                                    e.onCommandKey(null, l.shift, a.home);
                                    break;
                                case 2:
                                    e.onCommandKey(null, l.shift | l.option, a.left);
                                    break;
                                case 3:
                                    e.onCommandKey(null, l.shift, a.left)
                            }
                        }
                    }
                };
                document.addEventListener("selectionchange", I), e.on("destroy", function() {
                    document.removeEventListener("selectionchange", I)
                })
            }
        }
    }), define("ace/keyboard/textinput", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/lib/dom", "ace/lib/lang", "ace/keyboard/textinput_ios"], function(t, e, i) {
        "use strict";
        var n = t("../lib/event"),
            s = t("../lib/useragent"),
            r = t("../lib/dom"),
            o = t("../lib/lang"),
            a = s.isChrome < 18,
            l = s.isIE,
            h = s.isChrome > 63,
            c = 400,
            u = t("./textinput_ios").TextInput;
        e.TextInput = function(t, e) {
            function i() {
                if (!v && !_ && (C || k)) {
                    v = !0;
                    var t = e.selection,
                        i = t.getRange(),
                        n = t.cursor.row,
                        s = i.start.column,
                        r = i.end.column,
                        o = e.session.getLine(n);
                    if (i.start.row != n) {
                        var a = e.session.getLine(n - 1);
                        s = i.start.row < n - 1 ? 0 : s, r += a.length + 1, o = a + "\n" + o
                    } else if (i.end.row != n) {
                        var l = e.session.getLine(n + 1);
                        r = i.end.row > n + 1 ? l.length : r, r += o.length + 1, o = o + "\n" + l
                    }
                    o.length > c && (s < c && r < c ? o = o.slice(0, c) : (o = "\n", s = 0, r = 1));
                    var h = o + "\n\n";
                    if (h != x && (g.value = x = h, $ = S = h.length), k && ($ = g.selectionStart, S = g.selectionEnd), S != r || $ != s) try {
                        g.setSelectionRange(s, r), $ = s, S = r
                    } catch (t) {}
                    v = !1
                }
            }

            function d() {
                b = !0, g.blur(), g.focus(), b = !1
            }

            function f() {
                clearTimeout(W), W = setTimeout(function() {
                    w && (g.style.cssText = w, w = ""), null == e.renderer.$keepTextAreaAtCursor && (e.renderer.$keepTextAreaAtCursor = !0, e.renderer.$moveTextAreaToCursor())
                }, 0)
            }
            if (s.isIOS) return u.call(this, t, e);
            var g = r.createElement("textarea");
            g.className = "ace_text-input", g.setAttribute("wrap", "off"), g.setAttribute("autocorrect", "off"), g.setAttribute("autocapitalize", "off"), g.setAttribute("spellcheck", !1), g.style.opacity = "0", t.insertBefore(g, t.firstChild);
            var m = !1,
                p = !1,
                v = !1,
                _ = !1,
                w = "";
            s.isMobile || (g.style.fontSize = "1px");
            var y = !1,
                b = !1,
                x = "",
                $ = 0,
                S = 0;
            try {
                var C = document.activeElement === g
            } catch (t) {}
            n.addListener(g, "blur", function(t) {
                b || (e.onBlur(t), C = !1)
            }), n.addListener(g, "focus", function(t) {
                b || (C = !0, e.onFocus(t), i())
            }), this.$focusScroll = !1, this.focus = function() {
                if (w || h || "browser" == this.$focusScroll) return g.focus({
                    preventScroll: !0
                });
                if (document.documentElement.contains(g)) {
                    var t = g.style.top;
                    g.style.position = "fixed", g.style.top = "0px";
                    var e = 0 != g.getBoundingClientRect().top,
                        i = [];
                    if (e)
                        for (var n = g.parentElement; n && 1 == n.nodeType;) i.push(n), n.setAttribute("ace_nocontext", !0), n = !n.parentElement && n.getRootNode ? n.getRootNode().host : n.parentElement;
                    g.focus({
                        preventScroll: !0
                    }), e && i.forEach(function(t) {
                        t.removeAttribute("ace_nocontext")
                    }), setTimeout(function() {
                        g.style.position = "", "0px" == g.style.top && (g.style.top = t)
                    }, 0)
                }
            }, this.blur = function() {
                g.blur()
            }, this.isFocused = function() {
                return C
            }, e.on("beforeEndOperation", function() {
                e.curOp && "insertstring" == e.curOp.command.name || (v && (x = g.value = "", D()), i())
            }), C && e.onFocus();
            var T = null;
            this.setInputHandler = function(t) {
                T = t
            }, this.getInputHandler = function() {
                return T
            };
            var k = !1,
                A = function(t, n) {
                    if (k && (k = !1), p) return i(), t && e.onPaste(t), p = !1, "";
                    for (var s = g.selectionStart, r = g.selectionEnd, o = $, a = x.length - S, l = t, h = t.length - s, c = t.length - r, u = 0; o > 0 && x[u] == t[u];) u++, o--;
                    for (l = l.slice(u), u = 1; a > 0 && x.length - u > $ - 1 && x[x.length - u] == t[t.length - u];) u++, a--;
                    return h -= u - 1, c -= u - 1, l = l.slice(0, l.length - u + 1), n || h != l.length || o || a || c ? (_ = !0, l && !o && !a && !h && !c || y ? e.onTextInput(l) : e.onTextInput(l, {
                        extendLeft: o,
                        extendRight: a,
                        restoreStart: h,
                        restoreEnd: c
                    }), _ = !1, x = t, $ = s, S = r, l) : ""
                },
                R = function(t) {
                    if (v) return F();
                    var e = g.value,
                        n = A(e, !0);
                    (e.length > c + 100 || /\n/.test(n)) && i()
                },
                L = function(t, e, i) {
                    var n = t.clipboardData || window.clipboardData;
                    if (n && !a) {
                        var s = l || i ? "Text" : "text/plain";
                        try {
                            return e ? !1 !== n.setData(s, e) : n.getData(s)
                        } catch (t) {
                            if (!i) return L(t, e, !0)
                        }
                    }
                },
                M = function(t, s) {
                    var r = e.getCopyText();
                    if (!r) return n.preventDefault(t);
                    L(t, r) ? (s ? e.onCut() : e.onCopy(), n.preventDefault(t)) : (m = !0, g.value = r, g.select(), setTimeout(function() {
                        m = !1, i(), s ? e.onCut() : e.onCopy()
                    }))
                },
                E = function(t) {
                    M(t, !0)
                },
                O = function(t) {
                    M(t, !1)
                },
                P = function(t) {
                    var r = L(t);
                    "string" == typeof r ? (r && e.onPaste(r, t), s.isIE && setTimeout(i), n.preventDefault(t)) : (g.value = "", p = !0)
                };
            n.addCommandKeyListener(g, e.onCommandKey.bind(e)), n.addListener(g, "select", function(t) {
                v || (m ? m = !1 : 0 === g.selectionStart && g.selectionEnd >= x.length && g.value === x && x && g.selectionEnd !== S && (e.selectAll(), i()))
            }), n.addListener(g, "input", R), n.addListener(g, "cut", E), n.addListener(g, "copy", O), n.addListener(g, "paste", P), (!("oncut" in g) || !("oncopy" in g) || !("onpaste" in g)) && n.addListener(t, "keydown", function(t) {
                if ((!s.isMac || t.metaKey) && t.ctrlKey) switch (t.keyCode) {
                    case 67:
                        O(t);
                        break;
                    case 86:
                        P(t);
                        break;
                    case 88:
                        E(t)
                }
            });
            var F = function() {
                    if (v && e.onCompositionUpdate && !e.$readOnly) {
                        if (y) return d();
                        v.useTextareaForIME ? e.onCompositionUpdate(g.value) : (A(g.value), v.markerRange && (v.context && (v.markerRange.start.column = v.selectionStart = v.context.compositionStartOffset), v.markerRange.end.column = v.markerRange.start.column + S - v.selectionStart))
                    }
                },
                D = function(t) {
                    e.onCompositionEnd && !e.$readOnly && (v = !1, e.onCompositionEnd(), e.off("mousedown", d), t && R())
                },
                I = o.delayedCall(F, 50).schedule.bind(null, null);
            n.addListener(g, "compositionstart", function(t) {
                if (!v && e.onCompositionStart && !e.$readOnly && (v = {}, !y)) {
                    setTimeout(F, 0), e.on("mousedown", d);
                    var i = e.getSelectionRange();
                    i.end.row = i.start.row, i.end.column = i.start.column, v.markerRange = i, v.selectionStart = $, e.onCompositionStart(v), v.useTextareaForIME ? (g.value = "", x = "", $ = 0, S = 0) : (g.msGetInputContext && (v.context = g.msGetInputContext()), g.getInputContext && (v.context = g.getInputContext()))
                }
            }), n.addListener(g, "compositionupdate", F), n.addListener(g, "keyup", function(t) {
                27 == t.keyCode && g.value.length < g.selectionStart && (v || (x = g.value), $ = S = -1, i()), I()
            }), n.addListener(g, "keydown", I), n.addListener(g, "compositionend", D), this.getElement = function() {
                return g
            }, this.setCommandMode = function(t) {
                y = t, g.readOnly = !1
            }, this.setReadOnly = function(t) {
                y || (g.readOnly = t)
            }, this.setCopyWithEmptySelection = function(t) {}, this.onContextMenu = function(t) {
                k = !0, i(), e._emit("nativecontextmenu", {
                    target: e,
                    domEvent: t
                }), this.moveToMouse(t, !0)
            }, this.moveToMouse = function(t, i) {
                w || (w = g.style.cssText), g.style.cssText = (i ? "z-index:100000;" : "") + (s.isIE ? "opacity:0.1;" : "") + "text-indent: -" + ($ + S) * e.renderer.characterWidth * .5 + "px;";
                var o = e.container.getBoundingClientRect(),
                    a = r.computedStyle(e.container),
                    l = o.top + (parseInt(a.borderTopWidth) || 0),
                    h = o.left + (parseInt(o.borderLeftWidth) || 0),
                    c = o.bottom - l - g.clientHeight - 2,
                    u = function(t) {
                        g.style.left = t.clientX - h - 2 + "px", g.style.top = Math.min(t.clientY - l - 2, c) + "px"
                    };
                u(t), "mousedown" == t.type && (e.renderer.$keepTextAreaAtCursor && (e.renderer.$keepTextAreaAtCursor = null), clearTimeout(W), s.isWin && n.capture(e.container, u, f))
            }, this.onContextMenuClose = f;
            var W, B = function(t) {
                e.textInput.onContextMenu(t), f()
            };
            n.addListener(g, "mouseup", B), n.addListener(g, "mousedown", function(t) {
                t.preventDefault(), f()
            }), n.addListener(e.renderer.scroller, "contextmenu", B), n.addListener(g, "contextmenu", B)
        }
    }), define("ace/mouse/default_handlers", ["require", "exports", "module", "ace/lib/useragent"], function(t, e, i) {
        "use strict";

        function n(t) {
            t.$clickSelection = null;
            var e = t.editor;
            e.setDefaultHandler("mousedown", this.onMouseDown.bind(t)), e.setDefaultHandler("dblclick", this.onDoubleClick.bind(t)), e.setDefaultHandler("tripleclick", this.onTripleClick.bind(t)), e.setDefaultHandler("quadclick", this.onQuadClick.bind(t)), e.setDefaultHandler("mousewheel", this.onMouseWheel.bind(t)), e.setDefaultHandler("touchmove", this.onTouchMove.bind(t)), ["select", "startSelect", "selectEnd", "selectAllEnd", "selectByWordsEnd", "selectByLinesEnd", "dragWait", "dragWaitEnd", "focusWait"].forEach(function(e) {
                t[e] = this[e]
            }, this), t.selectByLines = this.extendSelectionBy.bind(t, "getLineRange"), t.selectByWords = this.extendSelectionBy.bind(t, "getWordRange")
        }

        function s(t, e) {
            if (t.start.row == t.end.row) var i = 2 * e.column - t.start.column - t.end.column;
            else i = t.start.row != t.end.row - 1 || t.start.column || t.end.column ? 2 * e.row - t.start.row - t.end.row : e.column - 4;
            return i < 0 ? {
                cursor: t.start,
                anchor: t.end
            } : {
                cursor: t.end,
                anchor: t.start
            }
        }
        var r = t("../lib/useragent");
        (function() {
            this.onMouseDown = function(t) {
                var e = t.inSelection(),
                    i = t.getDocumentPosition();
                this.mousedownEvent = t;
                var n = this.editor,
                    s = t.getButton();
                return 0 !== s ? ((n.getSelectionRange().isEmpty() || 1 == s) && n.selection.moveToPosition(i), void(2 == s && (n.textInput.onContextMenu(t.domEvent), r.isMozilla || t.preventDefault()))) : (this.mousedownEvent.time = Date.now(), !e || n.isFocused() || (n.focus(), !this.$focusTimeout || this.$clickSelection || n.inMultiSelectMode) ? (this.captureMouse(t), this.startSelect(i, t.domEvent._clicks > 1), t.preventDefault()) : (this.setState("focusWait"), void this.captureMouse(t)))
            }, this.startSelect = function(t, e) {
                t = t || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
                var i = this.editor;
                this.mousedownEvent && (this.mousedownEvent.getShiftKey() ? i.selection.selectToPosition(t) : e || i.selection.moveToPosition(t), e || this.select(), i.renderer.scroller.setCapture && i.renderer.scroller.setCapture(), i.setStyle("ace_selecting"), this.setState("select"))
            }, this.select = function() {
                var t, e = this.editor,
                    i = e.renderer.screenToTextCoordinates(this.x, this.y);
                if (this.$clickSelection) {
                    var n = this.$clickSelection.comparePoint(i);
                    if (-1 == n) t = this.$clickSelection.end;
                    else if (1 == n) t = this.$clickSelection.start;
                    else {
                        var r = s(this.$clickSelection, i);
                        i = r.cursor, t = r.anchor
                    }
                    e.selection.setSelectionAnchor(t.row, t.column)
                }
                e.selection.selectToPosition(i), e.renderer.scrollCursorIntoView()
            }, this.extendSelectionBy = function(t) {
                var e, i = this.editor,
                    n = i.renderer.screenToTextCoordinates(this.x, this.y),
                    r = i.selection[t](n.row, n.column);
                if (this.$clickSelection) {
                    var o = this.$clickSelection.comparePoint(r.start),
                        a = this.$clickSelection.comparePoint(r.end);
                    if (-1 == o && a <= 0) e = this.$clickSelection.end, r.end.row == n.row && r.end.column == n.column || (n = r.start);
                    else if (1 == a && o >= 0) e = this.$clickSelection.start, r.start.row == n.row && r.start.column == n.column || (n = r.end);
                    else if (-1 == o && 1 == a) n = r.end, e = r.start;
                    else {
                        var l = s(this.$clickSelection, n);
                        n = l.cursor, e = l.anchor
                    }
                    i.selection.setSelectionAnchor(e.row, e.column)
                }
                i.selection.selectToPosition(n), i.renderer.scrollCursorIntoView()
            }, this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function() {
                this.$clickSelection = null, this.editor.unsetStyle("ace_selecting"), this.editor.renderer.scroller.releaseCapture && this.editor.renderer.scroller.releaseCapture()
            }, this.focusWait = function() {
                var t = function(t, e, i, n) {
                        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - e, 2))
                    }(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y),
                    e = Date.now();
                (t > 0 || e - this.mousedownEvent.time > this.$focusTimeout) && this.startSelect(this.mousedownEvent.getDocumentPosition())
            }, this.onDoubleClick = function(t) {
                var e = t.getDocumentPosition(),
                    i = this.editor,
                    n = i.session.getBracketRange(e);
                n ? (n.isEmpty() && (n.start.column--, n.end.column++), this.setState("select")) : (n = i.selection.getWordRange(e.row, e.column), this.setState("selectByWords")), this.$clickSelection = n, this.select()
            }, this.onTripleClick = function(t) {
                var e = t.getDocumentPosition(),
                    i = this.editor;
                this.setState("selectByLines");
                var n = i.getSelectionRange();
                n.isMultiLine() && n.contains(e.row, e.column) ? (this.$clickSelection = i.selection.getLineRange(n.start.row), this.$clickSelection.end = i.selection.getLineRange(n.end.row).end) : this.$clickSelection = i.selection.getLineRange(e.row), this.select()
            }, this.onQuadClick = function(t) {
                var e = this.editor;
                e.selectAll(), this.$clickSelection = e.getSelectionRange(), this.setState("selectAll")
            }, this.onMouseWheel = function(t) {
                if (!t.getAccelKey()) {
                    t.getShiftKey() && t.wheelY && !t.wheelX && (t.wheelX = t.wheelY, t.wheelY = 0);
                    var e = this.editor;
                    this.$lastScroll || (this.$lastScroll = {
                        t: 0,
                        vx: 0,
                        vy: 0,
                        allowed: 0
                    });
                    var i = this.$lastScroll,
                        n = t.domEvent.timeStamp,
                        s = n - i.t,
                        r = s ? t.wheelX / s : i.vx,
                        o = s ? t.wheelY / s : i.vy;
                    s < 250 && (r = (r + i.vx) / 2, o = (o + i.vy) / 2);
                    var a = Math.abs(r / o),
                        l = !1;
                    return a >= 1 && e.renderer.isScrollableBy(t.wheelX * t.speed, 0) && (l = !0), a <= 1 && e.renderer.isScrollableBy(0, t.wheelY * t.speed) && (l = !0), l ? i.allowed = n : n - i.allowed < 250 && (Math.abs(r) <= 1.1 * Math.abs(i.vx) && Math.abs(o) <= 1.1 * Math.abs(i.vy) ? (l = !0, i.allowed = n) : i.allowed = 0), i.t = n, i.vx = r, i.vy = o, l ? (e.renderer.scrollBy(t.wheelX * t.speed, t.wheelY * t.speed), t.stop()) : void 0
                }
            }, this.onTouchMove = function(t) {
                this.editor._emit("mousewheel", t)
            }
        }).call(n.prototype), e.DefaultHandlers = n
    }), define("ace/tooltip", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom"], function(t, e, i) {
        "use strict";

        function n(t) {
            this.isOpen = !1, this.$element = null, this.$parentNode = t
        }
        t("./lib/oop");
        var s = t("./lib/dom");
        (function() {
            this.$init = function() {
                return this.$element = s.createElement("div"), this.$element.className = "ace_tooltip", this.$element.style.display = "none", this.$parentNode.appendChild(this.$element), this.$element
            }, this.getElement = function() {
                return this.$element || this.$init()
            }, this.setText = function(t) {
                this.getElement().textContent = t
            }, this.setHtml = function(t) {
                this.getElement().innerHTML = t
            }, this.setPosition = function(t, e) {
                this.getElement().style.left = t + "px", this.getElement().style.top = e + "px"
            }, this.setClassName = function(t) {
                s.addCssClass(this.getElement(), t)
            }, this.show = function(t, e, i) {
                null != t && this.setText(t), null != e && null != i && this.setPosition(e, i), this.isOpen || (this.getElement().style.display = "block", this.isOpen = !0)
            }, this.hide = function() {
                this.isOpen && (this.getElement().style.display = "none", this.isOpen = !1)
            }, this.getHeight = function() {
                return this.getElement().offsetHeight
            }, this.getWidth = function() {
                return this.getElement().offsetWidth
            }, this.destroy = function() {
                this.isOpen = !1, this.$element && this.$element.parentNode && this.$element.parentNode.removeChild(this.$element)
            }
        }).call(n.prototype), e.Tooltip = n
    }), define("ace/mouse/default_gutter_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/event", "ace/tooltip"], function(t, e, i) {
        "use strict";

        function n(t) {
            a.call(this, t)
        }
        var s = t("../lib/dom"),
            r = t("../lib/oop"),
            o = t("../lib/event"),
            a = t("../tooltip").Tooltip;
        r.inherits(n, a), (function() {
            this.setPosition = function(t, e) {
                var i = window.innerWidth || document.documentElement.clientWidth,
                    n = window.innerHeight || document.documentElement.clientHeight,
                    s = this.getWidth(),
                    r = this.getHeight();
                e += 15, (t += 15) + s > i && (t -= t + s - i), e + r > n && (e -= 20 + r), a.prototype.setPosition.call(this, t, e)
            }
        }).call(n.prototype), e.GutterHandler = function(t) {
            function e() {
                var e = l.getDocumentPosition().row,
                    n = u.$annotations[e];
                if (!n) return i();
                if (e == c.session.getLength()) {
                    var s = c.renderer.pixelToScreenCoordinates(0, l.y).row,
                        o = l.$pos;
                    if (s > c.session.documentToScreenRow(o.row, o.column)) return i()
                }
                if (h != n)
                    if (h = n.text.join("<br/>"), d.setHtml(h), d.show(), c._signal("showGutterTooltip", d), c.on("mousewheel", i), t.$tooltipFollowsMouse) r(l);
                    else {
                        var a = l.domEvent.target.getBoundingClientRect(),
                            f = d.getElement().style;
                        f.left = a.right + "px", f.top = a.bottom + "px"
                    }
            }

            function i() {
                a && (a = clearTimeout(a)), h && (d.hide(), h = null, c._signal("hideGutterTooltip", d), c.removeEventListener("mousewheel", i))
            }

            function r(t) {
                d.setPosition(t.x, t.y)
            }
            var a, l, h, c = t.editor,
                u = c.renderer.$gutterLayer,
                d = new n(c.container);
            t.editor.setDefaultHandler("guttermousedown", function(e) {
                if (c.isFocused() && 0 == e.getButton() && "foldWidgets" != u.getRegion(e)) {
                    var i = e.getDocumentPosition().row,
                        n = c.session.selection;
                    if (e.getShiftKey()) n.selectTo(i, 0);
                    else {
                        if (2 == e.domEvent.detail) return c.selectAll(), e.preventDefault();
                        t.$clickSelection = c.selection.getLineRange(i)
                    }
                    return t.setState("selectByLines"), t.captureMouse(e), e.preventDefault()
                }
            }), t.editor.setDefaultHandler("guttermousemove", function(n) {
                if (s.hasCssClass(n.domEvent.target || n.domEvent.srcElement, "ace_fold-widget")) return i();
                h && t.$tooltipFollowsMouse && r(n), l = n, a || (a = setTimeout(function() {
                    a = null, l && !t.isMousePressed ? e() : i()
                }, 50))
            }), o.addListener(c.renderer.$gutter, "mouseout", function(t) {
                l = null, h && !a && (a = setTimeout(function() {
                    a = null, i()
                }, 50))
            }), c.on("changeSession", i)
        }
    }), define("ace/mouse/mouse_event", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(t, e, i) {
        "use strict";
        var n = t("../lib/event"),
            s = t("../lib/useragent"),
            r = e.MouseEvent = function(t, e) {
                this.domEvent = t, this.editor = e, this.x = this.clientX = t.clientX, this.y = this.clientY = t.clientY, this.$pos = null, this.$inSelection = null, this.propagationStopped = !1, this.defaultPrevented = !1
            };
        (function() {
            this.stopPropagation = function() {
                n.stopPropagation(this.domEvent), this.propagationStopped = !0
            }, this.preventDefault = function() {
                n.preventDefault(this.domEvent), this.defaultPrevented = !0
            }, this.stop = function() {
                this.stopPropagation(), this.preventDefault()
            }, this.getDocumentPosition = function() {
                return this.$pos ? this.$pos : (this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY), this.$pos)
            }, this.inSelection = function() {
                if (null !== this.$inSelection) return this.$inSelection;
                var t = this.editor.getSelectionRange();
                if (t.isEmpty()) this.$inSelection = !1;
                else {
                    var e = this.getDocumentPosition();
                    this.$inSelection = t.contains(e.row, e.column)
                }
                return this.$inSelection
            }, this.getButton = function() {
                return n.getButton(this.domEvent)
            }, this.getShiftKey = function() {
                return this.domEvent.shiftKey
            }, this.getAccelKey = s.isMac ? function() {
                return this.domEvent.metaKey
            } : function() {
                return this.domEvent.ctrlKey
            }
        }).call(r.prototype)
    }), define("ace/mouse/dragdrop_handler", ["require", "exports", "module", "ace/lib/dom", "ace/lib/event", "ace/lib/useragent"], function(t, e, i) {
        "use strict";

        function n(t) {
            function e() {
                var t = b;
                (function(t, e) {
                    var i = Date.now();
                    C && e && t.row == e.row && e && t.column == e.column ? s(T.x, T.y, v, _) > c ? C = null : i - C >= h && (g.renderer.scrollCursorIntoView(), C = null) : (g.moveCursorToPosition(t), C = i, T = {
                        x: v,
                        y: _
                    })
                })(b = g.renderer.screenToTextCoordinates(v, _), t),
                function(t, e) {
                    var i = Date.now(),
                        n = g.renderer.layerConfig.lineHeight,
                        s = g.renderer.layerConfig.characterWidth,
                        r = g.renderer.scroller.getBoundingClientRect(),
                        o = {
                            x: {
                                left: v - r.left,
                                right: r.right - v
                            },
                            y: {
                                top: _ - r.top,
                                bottom: r.bottom - _
                            }
                        },
                        a = Math.min(o.x.left, o.x.right),
                        h = Math.min(o.y.top, o.y.bottom),
                        c = {
                            row: t.row,
                            column: t.column
                        };
                    a / s <= 2 && (c.column += o.x.left < o.x.right ? -3 : 2), h / n <= 1 && (c.row += o.y.top < o.y.bottom ? -1 : 1), t.row != c.row || t.column != c.column && e && t.row == e.row ? S ? i - S >= l && g.renderer.scrollCursorIntoView(c) : S = i : S = null
                }(b, t)
            }

            function i() {
                y = g.selection.toOrientedRange(), p = g.session.addMarker(y, "ace_selection", g.getSelectionStyle()), g.clearSelection(), g.isFocused() && g.renderer.$cursorLayer.setBlinking(!1), clearInterval(w), e(), w = setInterval(e, 20), A = 0, o.addListener(document, "mousemove", u)
            }

            function n() {
                clearInterval(w), g.session.removeMarker(p), p = null, g.selection.fromOrientedRange(y), g.isFocused() && !$ && g.renderer.$cursorLayer.setBlinking(!g.getReadOnly()), y = null, b = null, A = 0, S = null, C = null, o.removeListener(document, "mousemove", u)
            }

            function u() {
                null == R && (R = setTimeout(function() {
                    null != R && p && n()
                }, 20))
            }

            function d(t) {
                var e = t.types;
                return !e || Array.prototype.some.call(e, function(t) {
                    return "text/plain" == t || "Text" == t
                })
            }

            function f(t) {
                var e = ["copy", "copymove", "all", "uninitialized"],
                    i = a.isMac ? t.altKey : t.ctrlKey,
                    n = "uninitialized";
                try {
                    n = t.dataTransfer.effectAllowed.toLowerCase()
                } catch (t) {}
                var s = "none";
                return i && e.indexOf(n) >= 0 ? s = "copy" : ["move", "copymove", "linkmove", "all", "uninitialized"].indexOf(n) >= 0 ? s = "move" : e.indexOf(n) >= 0 && (s = "copy"), s
            }
            var g = t.editor,
                m = r.createElement("img");
            m.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", a.isOpera && (m.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;"), ["dragWait", "dragWaitEnd", "startDrag", "dragReadyEnd", "onMouseDrag"].forEach(function(e) {
                t[e] = this[e]
            }, this), g.addEventListener("mousedown", this.onMouseDown.bind(t));
            var p, v, _, w, y, b, x, $, S, C, T, k = g.container,
                A = 0;
            this.onDragStart = function(t) {
                if (this.cancelDrag || !k.draggable) {
                    var e = this;
                    return setTimeout(function() {
                        e.startSelect(), e.captureMouse(t)
                    }, 0), t.preventDefault()
                }
                y = g.getSelectionRange();
                var i = t.dataTransfer;
                i.effectAllowed = g.getReadOnly() ? "copy" : "copyMove", a.isOpera && (g.container.appendChild(m), m.scrollTop = 0), i.setDragImage && i.setDragImage(m, 0, 0), a.isOpera && g.container.removeChild(m), i.clearData(), i.setData("Text", g.session.getTextRange()), $ = !0, this.setState("drag")
            }, this.onDragEnd = function(t) {
                k.draggable = !1, $ = !1, this.setState(null), g.getReadOnly() || (!x && "move" == t.dataTransfer.dropEffect && g.session.remove(g.getSelectionRange()), g.renderer.$cursorLayer.setBlinking(!0)), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle("")
            }, this.onDragEnter = function(t) {
                if (!g.getReadOnly() && d(t.dataTransfer)) return v = t.clientX, _ = t.clientY, p || i(), A++, t.dataTransfer.dropEffect = x = f(t), o.preventDefault(t)
            }, this.onDragOver = function(t) {
                if (!g.getReadOnly() && d(t.dataTransfer)) return v = t.clientX, _ = t.clientY, p || (i(), A++), null !== R && (R = null), t.dataTransfer.dropEffect = x = f(t), o.preventDefault(t)
            }, this.onDragLeave = function(t) {
                if (--A <= 0 && p) return n(), x = null, o.preventDefault(t)
            }, this.onDrop = function(t) {
                if (b) {
                    var e = t.dataTransfer;
                    if ($) switch (x) {
                        case "move":
                            y = y.contains(b.row, b.column) ? {
                                start: b,
                                end: b
                            } : g.moveText(y, b);
                            break;
                        case "copy":
                            y = g.moveText(y, b, !0)
                    } else {
                        var i = e.getData("Text");
                        y = {
                            start: b,
                            end: g.session.insert(b, i)
                        }, g.focus(), x = null
                    }
                    return n(), o.preventDefault(t)
                }
            }, o.addListener(k, "dragstart", this.onDragStart.bind(t)), o.addListener(k, "dragend", this.onDragEnd.bind(t)), o.addListener(k, "dragenter", this.onDragEnter.bind(t)), o.addListener(k, "dragover", this.onDragOver.bind(t)), o.addListener(k, "dragleave", this.onDragLeave.bind(t)), o.addListener(k, "drop", this.onDrop.bind(t));
            var R = null
        }

        function s(t, e, i, n) {
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(n - e, 2))
        }
        var r = t("../lib/dom"),
            o = t("../lib/event"),
            a = t("../lib/useragent"),
            l = 200,
            h = 200,
            c = 5;
        (function() {
            this.dragWait = function() {
                Date.now() - this.mousedownEvent.time > this.editor.getDragDelay() && this.startDrag()
            }, this.dragWaitEnd = function() {
                this.editor.container.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()), this.selectEnd()
            }, this.dragReadyEnd = function(t) {
                this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly()), this.editor.unsetStyle("ace_dragging"), this.editor.renderer.setCursorStyle(""), this.dragWaitEnd()
            }, this.startDrag = function() {
                this.cancelDrag = !1;
                var t = this.editor;
                t.container.draggable = !0, t.renderer.$cursorLayer.setBlinking(!1), t.setStyle("ace_dragging"), t.renderer.setCursorStyle(a.isWin ? "default" : "move"), this.setState("dragReady")
            }, this.onMouseDrag = function(t) {
                var e = this.editor.container;
                a.isIE && "dragReady" == this.state && s(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 3 && e.dragDrop(), "dragWait" === this.state && s(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 0 && (e.draggable = !1, this.startSelect(this.mousedownEvent.getDocumentPosition()))
            }, this.onMouseDown = function(t) {
                if (this.$dragEnabled) {
                    this.mousedownEvent = t;
                    var e = this.editor,
                        i = t.inSelection(),
                        n = t.getButton();
                    if (1 === (t.domEvent.detail || 1) && 0 === n && i) {
                        if (t.editor.inMultiSelectMode && (t.getAccelKey() || t.getShiftKey())) return;
                        this.mousedownEvent.time = Date.now();
                        var s = t.domEvent.target || t.domEvent.srcElement;
                        "unselectable" in s && (s.unselectable = "on"), e.getDragDelay() ? (a.isWebKit && (this.cancelDrag = !0, e.container.draggable = !0), this.setState("dragWait")) : this.startDrag(), this.captureMouse(t, this.onMouseDrag.bind(this)), t.defaultPrevented = !0
                    }
                }
            }
        }).call(n.prototype), e.DragdropHandler = n
    }), define("ace/lib/net", ["require", "exports", "module", "ace/lib/dom"], function(t, e, i) {
        "use strict";
        var n = t("./dom");
        e.get = function(t, e) {
            var i = new XMLHttpRequest;
            i.open("GET", t, !0), i.onreadystatechange = function() {
                4 === i.readyState && e(i.responseText)
            }, i.send(null)
        }, e.loadScript = function(t, e) {
            var i = n.getDocumentHead(),
                s = document.createElement("script");
            s.src = t, i.appendChild(s), s.onload = s.onreadystatechange = function(t, i) {
                !i && s.readyState && "loaded" != s.readyState && "complete" != s.readyState || (s = s.onload = s.onreadystatechange = null, i || e())
            }
        }, e.qualifyURL = function(t) {
            var e = document.createElement("a");
            return e.href = t, e.href
        }
    }), define("ace/lib/event_emitter", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        var n = {},
            s = function() {
                this.propagationStopped = !0
            },
            r = function() {
                this.defaultPrevented = !0
            };
        n._emit = n._dispatchEvent = function(t, e) {
            this._eventRegistry || (this._eventRegistry = {}), this._defaultHandlers || (this._defaultHandlers = {});
            var i = this._eventRegistry[t] || [],
                n = this._defaultHandlers[t];
            if (i.length || n) {
                "object" == typeof e && e || (e = {}), e.type || (e.type = t), e.stopPropagation || (e.stopPropagation = s), e.preventDefault || (e.preventDefault = r), i = i.slice();
                for (var o = 0; o < i.length && (i[o](e, this), !e.propagationStopped); o++);
                return n && !e.defaultPrevented ? n(e, this) : void 0
            }
        }, n._signal = function(t, e) {
            var i = (this._eventRegistry || {})[t];
            if (i) {
                i = i.slice();
                for (var n = 0; n < i.length; n++) i[n](e, this)
            }
        }, n.once = function(t, e) {
            var i = this;
            e && this.addEventListener(t, function n() {
                i.removeEventListener(t, n), e.apply(null, arguments)
            })
        }, n.setDefaultHandler = function(t, e) {
            var i = this._defaultHandlers;
            if (i || (i = this._defaultHandlers = {
                    _disabled_: {}
                }), i[t]) {
                var n = i[t],
                    s = i._disabled_[t];
                s || (i._disabled_[t] = s = []), s.push(n);
                var r = s.indexOf(e); - 1 != r && s.splice(r, 1)
            }
            i[t] = e
        }, n.removeDefaultHandler = function(t, e) {
            var i = this._defaultHandlers;
            if (i) {
                var n = i._disabled_[t];
                if (i[t] == e) n && this.setDefaultHandler(t, n.pop());
                else if (n) {
                    var s = n.indexOf(e); - 1 != s && n.splice(s, 1)
                }
            }
        }, n.on = n.addEventListener = function(t, e, i) {
            this._eventRegistry = this._eventRegistry || {};
            var n = this._eventRegistry[t];
            return n || (n = this._eventRegistry[t] = []), -1 == n.indexOf(e) && n[i ? "unshift" : "push"](e), e
        }, n.off = n.removeListener = n.removeEventListener = function(t, e) {
            this._eventRegistry = this._eventRegistry || {};
            var i = this._eventRegistry[t];
            if (i) {
                var n = i.indexOf(e); - 1 !== n && i.splice(n, 1)
            }
        }, n.removeAllListeners = function(t) {
            this._eventRegistry && (this._eventRegistry[t] = [])
        }, e.EventEmitter = n
    }), define("ace/lib/app_config", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(t, e, i) {
        "no use strict";

        function n(t) {
            "undefined" != typeof console && console.warn && console.warn.apply(console, arguments)
        }

        function s(t, e) {
            var i = new Error(t);
            i.data = e, "object" == typeof console && console.error && console.error(i), setTimeout(function() {
                throw i
            })
        }
        var r = t("./oop"),
            o = t("./event_emitter").EventEmitter,
            a = {
                setOptions: function(t) {
                    Object.keys(t).forEach(function(e) {
                        this.setOption(e, t[e])
                    }, this)
                },
                getOptions: function(t) {
                    var e = {};
                    if (t) Array.isArray(t) || (e = t, t = Object.keys(e));
                    else {
                        var i = this.$options;
                        t = Object.keys(i).filter(function(t) {
                            return !i[t].hidden
                        })
                    }
                    return t.forEach(function(t) {
                        e[t] = this.getOption(t)
                    }, this), e
                },
                setOption: function(t, e) {
                    if (this["$" + t] !== e) {
                        var i = this.$options[t];
                        return i ? i.forwardTo ? this[i.forwardTo] && this[i.forwardTo].setOption(t, e) : (i.handlesSet || (this["$" + t] = e), void(i && i.set && i.set.call(this, e))) : n('misspelled option "' + t + '"')
                    }
                },
                getOption: function(t) {
                    var e = this.$options[t];
                    return e ? e.forwardTo ? this[e.forwardTo] && this[e.forwardTo].getOption(t) : e && e.get ? e.get.call(this) : this["$" + t] : n('misspelled option "' + t + '"')
                }
            },
            l = function() {
                this.$defaultOptions = {}
            };
        (function() {
            r.implement(this, o), this.defineOptions = function(t, e, i) {
                return t.$options || (this.$defaultOptions[e] = t.$options = {}), Object.keys(i).forEach(function(e) {
                    var n = i[e];
                    "string" == typeof n && (n = {
                        forwardTo: n
                    }), n.name || (n.name = e), t.$options[n.name] = n, "initialValue" in n && (t["$" + n.name] = n.initialValue)
                }), r.implement(t, a), this
            }, this.resetOptions = function(t) {
                Object.keys(t.$options).forEach(function(e) {
                    var i = t.$options[e];
                    "value" in i && t.setOption(e, i.value)
                })
            }, this.setDefaultValue = function(t, e, i) {
                var n = this.$defaultOptions[t] || (this.$defaultOptions[t] = {});
                n[e] && (n.forwardTo ? this.setDefaultValue(n.forwardTo, e, i) : n[e].value = i)
            }, this.setDefaultValues = function(t, e) {
                Object.keys(e).forEach(function(i) {
                    this.setDefaultValue(t, i, e[i])
                }, this)
            }, this.warn = n, this.reportError = s
        }).call(l.prototype), e.AppConfig = l
    }), define("ace/config", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/lib/net", "ace/lib/app_config"], function(t, e, i) {
        "no use strict";

        function n(t) {
            return t.replace(/-(.)/g, function(t, e) {
                return e.toUpperCase()
            })
        }
        var s = t("./lib/lang"),
            r = (t("./lib/oop"), t("./lib/net")),
            o = t("./lib/app_config").AppConfig;
        i.exports = e = new o;
        var a = function() {
                return this || "undefined" != typeof window && window
            }(),
            l = {
                packaged: !1,
                workerPath: null,
                modePath: null,
                themePath: null,
                basePath: "",
                suffix: ".js",
                $moduleUrls: {}
            };
        e.get = function(t) {
            if (!l.hasOwnProperty(t)) throw new Error("Unknown config key: " + t);
            return l[t]
        }, e.set = function(t, e) {
            if (!l.hasOwnProperty(t)) throw new Error("Unknown config key: " + t);
            l[t] = e
        }, e.all = function() {
            return s.copyObject(l)
        }, e.$modes = {}, e.moduleUrl = function(t, e) {
            if (l.$moduleUrls[t]) return l.$moduleUrls[t];
            var i = t.split("/"),
                n = "snippets" == (e = e || i[i.length - 2] || "") ? "/" : "-",
                s = i[i.length - 1];
            if ("worker" == e && "-" == n) {
                var r = new RegExp("^" + e + "[\\-_]|[\\-_]" + e + "$", "g");
                s = s.replace(r, "")
            }(!s || s == e) && i.length > 1 && (s = i[i.length - 2]);
            var o = l[e + "Path"];
            return null == o ? o = l.basePath : "/" == n && (e = n = ""), o && "/" != o.slice(-1) && (o += "/"), o + e + n + s + this.get("suffix")
        }, e.setModuleUrl = function(t, e) {
            return l.$moduleUrls[t] = e
        }, e.$loading = {}, e.loadModule = function(i, n) {
            var s, o;
            Array.isArray(i) && (o = i[0], i = i[1]);
            try {
                s = t(i)
            } catch (t) {}
            if (s && !e.$loading[i]) return n && n(s);
            if (e.$loading[i] || (e.$loading[i] = []), e.$loading[i].push(n), !(e.$loading[i].length > 1)) {
                var a = function() {
                    t([i], function(t) {
                        e._emit("load.module", {
                            name: i,
                            module: t
                        });
                        var n = e.$loading[i];
                        e.$loading[i] = null, n.forEach(function(e) {
                            e && e(t)
                        })
                    })
                };
                if (!e.get("packaged")) return a();
                r.loadScript(e.moduleUrl(i, o), a), h()
            }
        };
        var h = function() {
            !l.basePath && !l.workerPath && !l.modePath && !l.themePath && !Object.keys(l.$moduleUrls).length && (console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver"), h = function() {})
        };
        e.init = function(s) {
            if (a && a.document) {
                l.packaged = s || t.packaged || i.packaged || a.define && define.packaged;
                for (var r = {}, o = "", h = document.currentScript || document._currentScript, c = (h && h.ownerDocument || document).getElementsByTagName("script"), u = 0; u < c.length; u++) {
                    var d = c[u],
                        f = d.src || d.getAttribute("src");
                    if (f) {
                        for (var g = d.attributes, m = 0, p = g.length; m < p; m++) {
                            var v = g[m];
                            0 === v.name.indexOf("data-ace-") && (r[n(v.name.replace(/^data-ace-/, ""))] = v.value)
                        }
                        var _ = f.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                        _ && (o = _[1])
                    }
                }
                for (var w in o && (r.base = r.base || o, r.packaged = !0), r.basePath = r.base, r.workerPath = r.workerPath || r.base, r.modePath = r.modePath || r.base, r.themePath = r.themePath || r.base, delete r.base, r) void 0 !== r[w] && e.set(w, r[w])
            }
        }
    }), define("ace/mouse/mouse_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent", "ace/mouse/default_handlers", "ace/mouse/default_gutter_handler", "ace/mouse/mouse_event", "ace/mouse/dragdrop_handler", "ace/config"], function(t, e, i) {
        "use strict";
        var n = t("../lib/event"),
            s = t("../lib/useragent"),
            r = t("./default_handlers").DefaultHandlers,
            o = t("./default_gutter_handler").GutterHandler,
            a = t("./mouse_event").MouseEvent,
            l = t("./dragdrop_handler").DragdropHandler,
            h = t("../config"),
            c = function(t) {
                var e = this;
                this.editor = t, new r(this), new o(this), new l(this);
                var i = function(e) {
                        (!document.hasFocus || !document.hasFocus() || !t.isFocused() && document.activeElement == (t.textInput && t.textInput.getElement())) && window.focus(), t.focus()
                    },
                    a = t.renderer.getMouseEventTarget();
                n.addListener(a, "click", this.onMouseEvent.bind(this, "click")), n.addListener(a, "mousemove", this.onMouseMove.bind(this, "mousemove")), n.addMultiMouseDownListener([a, t.renderer.scrollBarV && t.renderer.scrollBarV.inner, t.renderer.scrollBarH && t.renderer.scrollBarH.inner, t.textInput && t.textInput.getElement()].filter(Boolean), [400, 300, 250], this, "onMouseEvent"), n.addMouseWheelListener(t.container, this.onMouseWheel.bind(this, "mousewheel")), n.addTouchMoveListener(t.container, this.onTouchMove.bind(this, "touchmove"));
                var h = t.renderer.$gutter;
                n.addListener(h, "mousedown", this.onMouseEvent.bind(this, "guttermousedown")), n.addListener(h, "click", this.onMouseEvent.bind(this, "gutterclick")), n.addListener(h, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick")), n.addListener(h, "mousemove", this.onMouseEvent.bind(this, "guttermousemove")), n.addListener(a, "mousedown", i), n.addListener(h, "mousedown", i), s.isIE && t.renderer.scrollBarV && (n.addListener(t.renderer.scrollBarV.element, "mousedown", i), n.addListener(t.renderer.scrollBarH.element, "mousedown", i)), t.on("mousemove", function(i) {
                    if (!e.state && !e.$dragDelay && e.$dragEnabled) {
                        var n = t.renderer.screenToTextCoordinates(i.x, i.y),
                            s = t.session.selection.getRange(),
                            r = t.renderer;
                        !s.isEmpty() && s.insideStart(n.row, n.column) ? r.setCursorStyle("default") : r.setCursorStyle("")
                    }
                })
            };
        (function() {
            this.onMouseEvent = function(t, e) {
                this.editor._emit(t, new a(e, this.editor))
            }, this.onMouseMove = function(t, e) {
                var i = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
                i && i.length && this.editor._emit(t, new a(e, this.editor))
            }, this.onMouseWheel = function(t, e) {
                var i = new a(e, this.editor);
                i.speed = 2 * this.$scrollSpeed, i.wheelX = e.wheelX, i.wheelY = e.wheelY, this.editor._emit(t, i)
            }, this.onTouchMove = function(t, e) {
                var i = new a(e, this.editor);
                i.speed = 1, i.wheelX = e.wheelX, i.wheelY = e.wheelY, this.editor._emit(t, i)
            }, this.setState = function(t) {
                this.state = t
            }, this.captureMouse = function(t, e) {
                this.x = t.x, this.y = t.y, this.isMousePressed = !0;
                var i = this.editor,
                    r = this.editor.renderer;
                r.$keepTextAreaAtCursor && (r.$keepTextAreaAtCursor = null);
                var o = this,
                    l = function(t) {
                        if (t) return s.isWebKit && !t.which && o.releaseMouse ? o.releaseMouse() : (o.x = t.clientX, o.y = t.clientY, e && e(t), o.mouseEvent = new a(t, o.editor), void(o.$mouseMoved = !0))
                    },
                    h = function(t) {
                        i.off("beforeEndOperation", u), clearInterval(d), c(), o[o.state + "End"] && o[o.state + "End"](t), o.state = "", null == r.$keepTextAreaAtCursor && (r.$keepTextAreaAtCursor = !0, r.$moveTextAreaToCursor()), o.isMousePressed = !1, o.$onCaptureMouseMove = o.releaseMouse = null, t && o.onMouseEvent("mouseup", t), i.endOperation()
                    },
                    c = function() {
                        o[o.state] && o[o.state](), o.$mouseMoved = !1
                    };
                if (s.isOldIE && "dblclick" == t.domEvent.type) return setTimeout(function() {
                    h(t)
                });
                var u = function(t) {
                    o.releaseMouse && i.curOp.command.name && i.curOp.selectionChanged && (o[o.state + "End"] && o[o.state + "End"](), o.state = "", o.releaseMouse())
                };
                i.on("beforeEndOperation", u), i.startOperation({
                    command: {
                        name: "mouse"
                    }
                }), o.$onCaptureMouseMove = l, o.releaseMouse = n.capture(this.editor.container, l, h);
                var d = setInterval(c, 20)
            }, this.releaseMouse = null, this.cancelContextMenu = function() {
                var t = (function(e) {
                    e && e.domEvent && "contextmenu" != e.domEvent.type || (this.editor.off("nativecontextmenu", t), e && e.domEvent && n.stopEvent(e.domEvent))
                }).bind(this);
                setTimeout(t, 10), this.editor.on("nativecontextmenu", t)
            }
        }).call(c.prototype), h.defineOptions(c.prototype, "mouseHandler", {
            scrollSpeed: {
                initialValue: 2
            },
            dragDelay: {
                initialValue: s.isMac ? 150 : 0
            },
            dragEnabled: {
                initialValue: !0
            },
            focusTimeout: {
                initialValue: 0
            },
            tooltipFollowsMouse: {
                initialValue: !0
            }
        }), e.MouseHandler = c
    }), define("ace/mouse/fold_handler", ["require", "exports", "module", "ace/lib/dom"], function(t, e, i) {
        "use strict";
        var n = t("../lib/dom");
        e.FoldHandler = function(t) {
            t.on("click", function(e) {
                var i = e.getDocumentPosition(),
                    s = t.session,
                    r = s.getFoldAt(i.row, i.column, 1);
                r && (e.getAccelKey() ? s.removeFold(r) : s.expandFold(r), e.stop());
                var o = e.domEvent && e.domEvent.target;
                o && n.hasCssClass(o, "ace_inline_button") && n.hasCssClass(o, "ace_toggle_wrap") && (s.setOption("wrap", !0), t.renderer.scrollCursorIntoView())
            }), t.on("gutterclick", function(e) {
                if ("foldWidgets" == t.renderer.$gutterLayer.getRegion(e)) {
                    var i = e.getDocumentPosition().row,
                        n = t.session;
                    n.foldWidgets && n.foldWidgets[i] && t.session.onFoldWidgetClick(i, e), t.isFocused() || t.focus(), e.stop()
                }
            }), t.on("gutterdblclick", function(e) {
                if ("foldWidgets" == t.renderer.$gutterLayer.getRegion(e)) {
                    var i = e.getDocumentPosition().row,
                        n = t.session,
                        s = n.getParentFoldRangeData(i, !0),
                        r = s.range || s.firstRange;
                    if (r) {
                        var o = n.getFoldAt(i = r.start.row, n.getLine(i).length, 1);
                        o ? n.removeFold(o) : (n.addFold("...", r), t.renderer.scrollCursorIntoView({
                            row: r.start.row,
                            column: 0
                        }))
                    }
                    e.stop()
                }
            })
        }
    }), define("ace/keyboard/keybinding", ["require", "exports", "module", "ace/lib/keys", "ace/lib/event"], function(t, e, i) {
        "use strict";
        var n = t("../lib/keys"),
            s = t("../lib/event"),
            r = function(t) {
                this.$editor = t, this.$data = {
                    editor: t
                }, this.$handlers = [], this.setDefaultHandler(t.commands)
            };
        (function() {
            this.setDefaultHandler = function(t) {
                this.removeKeyboardHandler(this.$defaultHandler), this.$defaultHandler = t, this.addKeyboardHandler(t, 0)
            }, this.setKeyboardHandler = function(t) {
                var e = this.$handlers;
                if (e[e.length - 1] != t) {
                    for (; e[e.length - 1] && e[e.length - 1] != this.$defaultHandler;) this.removeKeyboardHandler(e[e.length - 1]);
                    this.addKeyboardHandler(t, 1)
                }
            }, this.addKeyboardHandler = function(t, e) {
                if (t) {
                    "function" == typeof t && !t.handleKeyboard && (t.handleKeyboard = t);
                    var i = this.$handlers.indexOf(t); - 1 != i && this.$handlers.splice(i, 1), void 0 == e ? this.$handlers.push(t) : this.$handlers.splice(e, 0, t), -1 == i && t.attach && t.attach(this.$editor)
                }
            }, this.removeKeyboardHandler = function(t) {
                var e = this.$handlers.indexOf(t);
                return -1 != e && (this.$handlers.splice(e, 1), t.detach && t.detach(this.$editor), !0)
            }, this.getKeyboardHandler = function() {
                return this.$handlers[this.$handlers.length - 1]
            }, this.getStatusText = function() {
                var t = this.$data,
                    e = t.editor;
                return this.$handlers.map(function(i) {
                    return i.getStatusText && i.getStatusText(e, t) || ""
                }).filter(Boolean).join(" ")
            }, this.$callKeyboardHandlers = function(t, e, i, n) {
                for (var r, o = !1, a = this.$editor.commands, l = this.$handlers.length; l-- && !((r = this.$handlers[l].handleKeyboard(this.$data, t, e, i, n)) && r.command && ((o = "null" == r.command || a.exec(r.command, this.$editor, r.args, n)) && n && -1 != t && 1 != r.passEvent && 1 != r.command.passEvent && s.stopEvent(n), o)););
                return !o && -1 == t && (r = {
                    command: "insertstring"
                }, o = a.exec("insertstring", this.$editor, e)), o && this.$editor._signal && this.$editor._signal("keyboardActivity", r), o
            }, this.onCommandKey = function(t, e, i) {
                var s = n.keyCodeToString(i);
                this.$callKeyboardHandlers(e, s, i, t)
            }, this.onTextInput = function(t) {
                this.$callKeyboardHandlers(-1, t)
            }
        }).call(r.prototype), e.KeyBinding = r
    }), define("ace/lib/bidiutil", ["require", "exports", "module"], function(t, e, i) {
        "use strict";

        function n(t, e, i, n) {
            var s = a ? f : d,
                g = null,
                m = null,
                p = null,
                v = 0,
                _ = null,
                w = -1,
                x = null,
                S = null,
                C = [];
            if (!n)
                for (x = 0, n = []; x < i; x++) n[x] = o(t[x]);
            for (l = a, h = !1, c = !1, u = !1, S = 0; S < i; S++) {
                if (g = v, C[S] = m = r(t, n, C, S), _ = 240 & (v = s[g][m]), e[S] = p = s[v &= 15][5], _ > 0)
                    if (16 == _) {
                        for (x = w; x < S; x++) e[x] = 1;
                        w = -1
                    } else w = -1;
                if (s[v][6]) - 1 == w && (w = S);
                else if (w > -1) {
                    for (x = w; x < S; x++) e[x] = p;
                    w = -1
                }
                n[S] == y && (e[S] = 0), l |= p
            }
            if (u)
                for (x = 0; x < i; x++)
                    if (n[x] == b) {
                        e[x] = a;
                        for (var T = x - 1; T >= 0 && n[T] == $; T--) e[T] = a
                    }
        }

        function s(t, e, i) {
            if (!(l < t))
                if (1 != t || a != g || c)
                    for (var n, s, r, o, h = i.length, u = 0; u < h;) {
                        if (e[u] >= t) {
                            for (n = u + 1; n < h && e[n] >= t;) n++;
                            for (s = u, r = n - 1; s < r; s++, r--) o = i[s], i[s] = i[r], i[r] = o;
                            u = n
                        }
                        u++
                    } else i.reverse()
        }

        function r(t, e, i, n) {
            var s, r, o, l, d = e[n];
            switch (d) {
                case m:
                case p:
                    h = !1;
                case w:
                case _:
                    return d;
                case v:
                    return h ? _ : v;
                case x:
                    return h = !0, p;
                case $:
                    return w;
                case S:
                    return n < 1 || n + 1 >= e.length || (s = i[n - 1]) != v && s != _ || (r = e[n + 1]) != v && r != _ ? w : (h && (r = _), r == s ? r : w);
                case C:
                    return (s = n > 0 ? i[n - 1] : y) == v && n + 1 < e.length && e[n + 1] == v ? v : w;
                case T:
                    if (n > 0 && i[n - 1] == v) return v;
                    if (h) return w;
                    for (l = n + 1, o = e.length; l < o && e[l] == T;) l++;
                    return l < o && e[l] == v ? v : w;
                case k:
                    for (o = e.length, l = n + 1; l < o && e[l] == k;) l++;
                    if (l < o) {
                        var f = t[n];
                        if (s = e[l], (f >= 1425 && f <= 2303 || 64286 == f) && (s == p || s == x)) return p
                    }
                    return n < 1 || (s = e[n - 1]) == y ? w : i[n - 1];
                case y:
                    return h = !1, c = !0, a;
                case b:
                    return u = !0, w;
                case A:
                case R:
                case M:
                case E:
                case L:
                    h = !1;
                case O:
                    return w
            }
        }

        function o(t) {
            var e = t.charCodeAt(0),
                i = e >> 8;
            return 0 == i ? e > 191 ? m : P[e] : 5 == i ? /[\u0591-\u05f4]/.test(t) ? p : m : 6 == i ? /[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(t) ? k : /[\u0660-\u0669\u066b-\u066c]/.test(t) ? _ : 1642 == e ? T : /[\u06f0-\u06f9]/.test(t) ? v : x : 32 == i && e <= 8287 ? F[255 & e] : 254 == i && e >= 65136 ? x : w
        }
        var a = 0,
            l = 0,
            h = !1,
            c = !1,
            u = !1,
            d = [
                [0, 3, 0, 1, 0, 0, 0],
                [0, 3, 0, 1, 2, 2, 0],
                [0, 3, 0, 17, 2, 0, 1],
                [0, 3, 5, 5, 4, 1, 0],
                [0, 3, 21, 21, 4, 0, 1],
                [0, 3, 5, 5, 4, 2, 0]
            ],
            f = [
                [2, 0, 1, 1, 0, 1, 0],
                [2, 0, 1, 1, 0, 2, 0],
                [2, 0, 2, 1, 3, 2, 0],
                [2, 0, 2, 33, 3, 1, 1]
            ],
            g = 1,
            m = 0,
            p = 1,
            v = 2,
            _ = 3,
            w = 4,
            y = 5,
            b = 6,
            x = 7,
            $ = 8,
            S = 9,
            C = 10,
            T = 11,
            k = 12,
            A = 13,
            R = 14,
            L = 15,
            M = 16,
            E = 17,
            O = 18,
            P = [O, O, O, O, O, O, O, O, O, b, y, b, $, y, O, O, O, O, O, O, O, O, O, O, O, O, O, O, y, y, y, b, $, w, w, T, T, T, w, w, w, w, w, C, S, C, S, S, v, v, v, v, v, v, v, v, v, v, S, w, w, w, w, w, w, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, w, w, w, w, w, w, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, m, w, w, w, w, O, O, O, O, O, O, y, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, O, S, w, T, T, T, T, w, w, w, w, m, w, w, O, w, w, T, T, v, v, w, m, w, w, w, v, m, w, w, w, w, w],
            F = [$, $, $, $, $, $, $, $, $, $, $, O, O, O, m, p, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, $, y, A, R, L, M, E, S, T, T, T, T, T, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, S, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, $];
        e.L = m, e.R = p, e.EN = v, e.ON_R = 3, e.AN = 4, e.R_H = 5, e.B = 6, e.RLE = 7, e.DOT = "\xb7", e.doBidiReorder = function(t, i, r) {
            if (t.length < 2) return {};
            var o = t.split(""),
                l = new Array(o.length),
                h = new Array(o.length),
                c = [];
            a = r ? g : 0, n(o, c, o.length, i);
            for (var u = 0; u < l.length; l[u] = u, u++);
            for (s(2, c, l), s(1, c, l), u = 0; u < l.length - 1; u++) i[u] === _ ? c[u] = e.AN : c[u] === p && (i[u] > x && i[u] < A || i[u] === w || i[u] === O) ? c[u] = e.ON_R : u > 0 && "\u0644" === o[u - 1] && /\u0622|\u0623|\u0625|\u0627/.test(o[u]) && (c[u - 1] = c[u] = e.R_H, u++);
            for (o[o.length - 1] === e.DOT && (c[o.length - 1] = e.B), "\u202b" === o[0] && (c[0] = e.RLE), u = 0; u < l.length; u++) h[u] = c[l[u]];
            return {
                logicalFromVisual: l,
                bidiLevels: h
            }
        }, e.hasBidiCharacters = function(t, e) {
            for (var i = !1, n = 0; n < t.length; n++) e[n] = o(t.charAt(n)), !i && (e[n] == p || e[n] == x || e[n] == _) && (i = !0);
            return i
        }, e.getVisualFromLogicalIdx = function(t, e) {
            for (var i = 0; i < e.logicalFromVisual.length; i++)
                if (e.logicalFromVisual[i] == t) return i;
            return 0
        }
    }), define("ace/bidihandler", ["require", "exports", "module", "ace/lib/bidiutil", "ace/lib/lang"], function(t, e, i) {
        "use strict";
        var n = t("./lib/bidiutil"),
            s = t("./lib/lang"),
            r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/,
            o = function(t) {
                this.session = t, this.bidiMap = {}, this.currentRow = null, this.bidiUtil = n, this.charWidths = [], this.EOL = "\xac", this.showInvisibles = !0, this.isRtlDir = !1, this.line = "", this.wrapIndent = 0, this.EOF = "\xb6", this.RLE = "\u202b", this.contentWidth = 0, this.fontMetrics = null, this.rtlLineOffset = 0, this.wrapOffset = 0, this.isMoveLeftOperation = !1, this.seenBidi = r.test(t.getValue())
            };
        (function() {
            this.isBidiRow = function(t, e, i) {
                return !!this.seenBidi && (t !== this.currentRow && (this.currentRow = t, this.updateRowLine(e, i), this.updateBidiMap()), this.bidiMap.bidiLevels)
            }, this.onChange = function(t) {
                this.seenBidi ? this.currentRow = null : "insert" == t.action && r.test(t.lines.join("\n")) && (this.seenBidi = !0, this.currentRow = null)
            }, this.getDocumentRow = function() {
                var t = 0,
                    e = this.session.$screenRowCache;
                if (e.length) {
                    var i = this.session.$getRowCacheIndex(e, this.currentRow);
                    i >= 0 && (t = this.session.$docRowCache[i])
                }
                return t
            }, this.getSplitIndex = function() {
                var t = 0,
                    e = this.session.$screenRowCache;
                if (e.length)
                    for (var i, n = this.session.$getRowCacheIndex(e, this.currentRow); this.currentRow - t > 0 && (i = this.session.$getRowCacheIndex(e, this.currentRow - t - 1)) === n;) n = i, t++;
                else t = this.currentRow;
                return t
            }, this.updateRowLine = function(t, e) {
                void 0 === t && (t = this.getDocumentRow());
                var i = t === this.session.getLength() - 1 ? this.EOF : this.EOL;
                if (this.wrapIndent = 0, this.line = this.session.getLine(t), this.isRtlDir = this.line.charAt(0) === this.RLE, this.session.$useWrapMode) {
                    var r = this.session.$wrapData[t];
                    r && (void 0 === e && (e = this.getSplitIndex()), e > 0 && r.length ? (this.wrapIndent = r.indent, this.wrapOffset = this.wrapIndent * this.charWidths[n.L], this.line = e < r.length ? this.line.substring(r[e - 1], r[e]) : this.line.substring(r[r.length - 1])) : this.line = this.line.substring(0, r[e])), e == r.length && (this.line += this.showInvisibles ? i : n.DOT)
                } else this.line += this.showInvisibles ? i : n.DOT;
                var o, a = this.session,
                    l = 0;
                this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, function(t, e) {
                    return "\t" === t || a.isFullWidth(t.charCodeAt(0)) ? (o = "\t" === t ? a.getScreenTabSize(e + l) : 2, l += o - 1, s.stringRepeat(n.DOT, o)) : t
                }), this.isRtlDir && (this.fontMetrics.$main.innerHTML = this.line.charAt(this.line.length - 1) == n.DOT ? this.line.substr(0, this.line.length - 1) : this.line, this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width)
            }, this.updateBidiMap = function() {
                var t = [];
                this.bidiMap = n.hasBidiCharacters(this.line, t) || this.isRtlDir ? n.doBidiReorder(this.line, t, this.isRtlDir) : {}
            }, this.markAsDirty = function() {
                this.currentRow = null
            }, this.updateCharacterWidths = function(t) {
                if (this.characterWidth !== t.$characterSize.width) {
                    this.fontMetrics = t;
                    var e = this.characterWidth = t.$characterSize.width,
                        i = t.$measureCharWidth("\u05d4");
                    this.charWidths[n.L] = this.charWidths[n.EN] = this.charWidths[n.ON_R] = e, this.charWidths[n.R] = this.charWidths[n.AN] = i, this.charWidths[n.R_H] = .45 * i, this.charWidths[n.B] = this.charWidths[n.RLE] = 0, this.currentRow = null
                }
            }, this.setShowInvisibles = function(t) {
                this.showInvisibles = t, this.currentRow = null
            }, this.setEolChar = function(t) {
                this.EOL = t
            }, this.setContentWidth = function(t) {
                this.contentWidth = t
            }, this.isRtlLine = function(t) {
                return void 0 != t ? this.session.getLine(t).charAt(0) == this.RLE : this.isRtlDir
            }, this.setRtlDirection = function(t, e) {
                for (var i = t.getCursorPosition(), n = t.selection.getSelectionAnchor().row; n <= i.row; n++) e || t.session.getLine(n).charAt(0) !== t.session.$bidiHandler.RLE ? e && t.session.getLine(n).charAt(0) !== t.session.$bidiHandler.RLE && t.session.doc.insert({
                    column: 0,
                    row: n
                }, t.session.$bidiHandler.RLE) : t.session.doc.removeInLine(n, 0, 1)
            }, this.getPosLeft = function(t) {
                t -= this.wrapIndent;
                var e = this.line.charAt(0) === this.RLE ? 1 : 0,
                    i = t > e ? this.session.getOverwrite() ? t : t - 1 : e,
                    s = n.getVisualFromLogicalIdx(i, this.bidiMap),
                    r = this.bidiMap.bidiLevels,
                    o = 0;
                !this.session.getOverwrite() && t <= e && r[s] % 2 != 0 && s++;
                for (var a = 0; a < s; a++) o += this.charWidths[r[a]];
                return !this.session.getOverwrite() && t > e && r[s] % 2 == 0 && (o += this.charWidths[r[s]]), this.wrapIndent && (o += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset), this.isRtlDir && (o += this.rtlLineOffset), o
            }, this.getSelections = function(t, e) {
                var i, n = this.bidiMap,
                    s = n.bidiLevels,
                    r = [],
                    o = 0,
                    a = Math.min(t, e) - this.wrapIndent,
                    l = Math.max(t, e) - this.wrapIndent,
                    h = !1,
                    c = !1,
                    u = 0;
                this.wrapIndent && (o += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset);
                for (var d, f = 0; f < s.length; f++) i = s[f], (h = (d = n.logicalFromVisual[f]) >= a && d < l) && !c ? u = o : !h && c && r.push({
                    left: u,
                    width: o - u
                }), o += this.charWidths[i], c = h;
                if (h && f === s.length && r.push({
                        left: u,
                        width: o - u
                    }), this.isRtlDir)
                    for (var g = 0; g < r.length; g++) r[g].left += this.rtlLineOffset;
                return r
            }, this.offsetToCol = function(t) {
                this.isRtlDir && (t -= this.rtlLineOffset);
                var e = 0,
                    i = (t = Math.max(t, 0), 0),
                    n = 0,
                    s = this.bidiMap.bidiLevels,
                    r = this.charWidths[s[n]];
                for (this.wrapIndent && (t -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); t > i + r / 2;) {
                    if (i += r, n === s.length - 1) {
                        r = 0;
                        break
                    }
                    r = this.charWidths[s[++n]]
                }
                return n > 0 && s[n - 1] % 2 != 0 && s[n] % 2 == 0 ? (t < i && n--, e = this.bidiMap.logicalFromVisual[n]) : n > 0 && s[n - 1] % 2 == 0 && s[n] % 2 != 0 ? e = 1 + (t > i ? this.bidiMap.logicalFromVisual[n] : this.bidiMap.logicalFromVisual[n - 1]) : this.isRtlDir && n === s.length - 1 && 0 === r && s[n - 1] % 2 == 0 || !this.isRtlDir && 0 === n && s[n] % 2 != 0 ? e = 1 + this.bidiMap.logicalFromVisual[n] : (n > 0 && s[n - 1] % 2 != 0 && 0 !== r && n--, e = this.bidiMap.logicalFromVisual[n]), 0 === e && this.isRtlDir && e++, e + this.wrapIndent
            }
        }).call(o.prototype), e.BidiHandler = o
    }), define("ace/selection", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/range"], function(t, e, i) {
        "use strict";
        var n = t("./lib/oop"),
            s = t("./lib/lang"),
            r = t("./lib/event_emitter").EventEmitter,
            o = t("./range").Range,
            a = function(t) {
                this.session = t, this.doc = t.getDocument(), this.clearSelection(), this.cursor = this.lead = this.doc.createAnchor(0, 0), this.anchor = this.doc.createAnchor(0, 0), this.$silent = !1;
                var e = this;
                this.cursor.on("change", function(t) {
                    e.$cursorChanged = !0, e.$silent || e._emit("changeCursor"), !e.$isEmpty && !e.$silent && e._emit("changeSelection"), !e.$keepDesiredColumnOnChange && t.old.column != t.value.column && (e.$desiredColumn = null)
                }), this.anchor.on("change", function() {
                    e.$anchorChanged = !0, !e.$isEmpty && !e.$silent && e._emit("changeSelection")
                })
            };
        (function() {
            n.implement(this, r), this.isEmpty = function() {
                return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column
            }, this.isMultiLine = function() {
                return !this.$isEmpty && this.anchor.row != this.cursor.row
            }, this.getCursor = function() {
                return this.lead.getPosition()
            }, this.setSelectionAnchor = function(t, e) {
                this.$isEmpty = !1, this.anchor.setPosition(t, e)
            }, this.getAnchor = this.getSelectionAnchor = function() {
                return this.$isEmpty ? this.getSelectionLead() : this.anchor.getPosition()
            }, this.getSelectionLead = function() {
                return this.lead.getPosition()
            }, this.isBackwards = function() {
                var t = this.anchor,
                    e = this.lead;
                return t.row > e.row || t.row == e.row && t.column > e.column
            }, this.getRange = function() {
                var t = this.anchor,
                    e = this.lead;
                return this.$isEmpty ? o.fromPoints(e, e) : this.isBackwards() ? o.fromPoints(e, t) : o.fromPoints(t, e)
            }, this.clearSelection = function() {
                this.$isEmpty || (this.$isEmpty = !0, this._emit("changeSelection"))
            }, this.selectAll = function() {
                this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE)
            }, this.setRange = this.setSelectionRange = function(t, e) {
                var i = e ? t.end : t.start,
                    n = e ? t.start : t.end;
                this.$setSelection(i.row, i.column, n.row, n.column)
            }, this.$setSelection = function(t, e, i, n) {
                var s = this.$isEmpty,
                    r = this.inMultiSelectMode;
                this.$silent = !0, this.$cursorChanged = this.$anchorChanged = !1, this.anchor.setPosition(t, e), this.cursor.setPosition(i, n), this.$isEmpty = !o.comparePoints(this.anchor, this.cursor), this.$silent = !1, this.$cursorChanged && this._emit("changeCursor"), (this.$cursorChanged || this.$anchorChanged || s != this.$isEmpty || r) && this._emit("changeSelection")
            }, this.$moveSelection = function(t) {
                var e = this.lead;
                this.$isEmpty && this.setSelectionAnchor(e.row, e.column), t.call(this)
            }, this.selectTo = function(t, e) {
                this.$moveSelection(function() {
                    this.moveCursorTo(t, e)
                })
            }, this.selectToPosition = function(t) {
                this.$moveSelection(function() {
                    this.moveCursorToPosition(t)
                })
            }, this.moveTo = function(t, e) {
                this.clearSelection(), this.moveCursorTo(t, e)
            }, this.moveToPosition = function(t) {
                this.clearSelection(), this.moveCursorToPosition(t)
            }, this.selectUp = function() {
                this.$moveSelection(this.moveCursorUp)
            }, this.selectDown = function() {
                this.$moveSelection(this.moveCursorDown)
            }, this.selectRight = function() {
                this.$moveSelection(this.moveCursorRight)
            }, this.selectLeft = function() {
                this.$moveSelection(this.moveCursorLeft)
            }, this.selectLineStart = function() {
                this.$moveSelection(this.moveCursorLineStart)
            }, this.selectLineEnd = function() {
                this.$moveSelection(this.moveCursorLineEnd)
            }, this.selectFileEnd = function() {
                this.$moveSelection(this.moveCursorFileEnd)
            }, this.selectFileStart = function() {
                this.$moveSelection(this.moveCursorFileStart)
            }, this.selectWordRight = function() {
                this.$moveSelection(this.moveCursorWordRight)
            }, this.selectWordLeft = function() {
                this.$moveSelection(this.moveCursorWordLeft)
            }, this.getWordRange = function(t, e) {
                if (void 0 === e) {
                    var i = t || this.lead;
                    t = i.row, e = i.column
                }
                return this.session.getWordRange(t, e)
            }, this.selectWord = function() {
                this.setSelectionRange(this.getWordRange())
            }, this.selectAWord = function() {
                var t = this.getCursor(),
                    e = this.session.getAWordRange(t.row, t.column);
                this.setSelectionRange(e)
            }, this.getLineRange = function(t, e) {
                var i, n = "number" == typeof t ? t : this.lead.row,
                    s = this.session.getFoldLine(n);
                return s ? (n = s.start.row, i = s.end.row) : i = n, !0 === e ? new o(n, 0, i, this.session.getLine(i).length) : new o(n, 0, i + 1, 0)
            }, this.selectLine = function() {
                this.setSelectionRange(this.getLineRange())
            }, this.moveCursorUp = function() {
                this.moveCursorBy(-1, 0)
            }, this.moveCursorDown = function() {
                this.moveCursorBy(1, 0)
            }, this.wouldMoveIntoSoftTab = function(t, e, i) {
                var n = t.column,
                    s = t.column + e;
                return i < 0 && (n = t.column - e, s = t.column), this.session.isTabStop(t) && this.doc.getLine(t.row).slice(n, s).split(" ").length - 1 == e
            }, this.moveCursorLeft = function() {
                var t, e = this.lead.getPosition();
                if (t = this.session.getFoldAt(e.row, e.column, -1)) this.moveCursorTo(t.start.row, t.start.column);
                else if (0 === e.column) e.row > 0 && this.moveCursorTo(e.row - 1, this.doc.getLine(e.row - 1).length);
                else {
                    var i = this.session.getTabSize();
                    this.wouldMoveIntoSoftTab(e, i, -1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, -i) : this.moveCursorBy(0, -1)
                }
            }, this.moveCursorRight = function() {
                var t, e = this.lead.getPosition();
                if (t = this.session.getFoldAt(e.row, e.column, 1)) this.moveCursorTo(t.end.row, t.end.column);
                else if (this.lead.column == this.doc.getLine(this.lead.row).length) this.lead.row < this.doc.getLength() - 1 && this.moveCursorTo(this.lead.row + 1, 0);
                else {
                    var i = this.session.getTabSize();
                    this.wouldMoveIntoSoftTab(e = this.lead, i, 1) && !this.session.getNavigateWithinSoftTabs() ? this.moveCursorBy(0, i) : this.moveCursorBy(0, 1)
                }
            }, this.moveCursorLineStart = function() {
                var t = this.lead.row,
                    e = this.lead.column,
                    i = this.session.documentToScreenRow(t, e),
                    n = this.session.screenToDocumentPosition(i, 0),
                    s = this.session.getDisplayLine(t, null, n.row, n.column).match(/^\s*/);
                s[0].length != e && !this.session.$useEmacsStyleLineStart && (n.column += s[0].length), this.moveCursorToPosition(n)
            }, this.moveCursorLineEnd = function() {
                var t = this.lead,
                    e = this.session.getDocumentLastRowColumnPosition(t.row, t.column);
                if (this.lead.column == e.column) {
                    var i = this.session.getLine(e.row);
                    if (e.column == i.length) {
                        var n = i.search(/\s+$/);
                        n > 0 && (e.column = n)
                    }
                }
                this.moveCursorTo(e.row, e.column)
            }, this.moveCursorFileEnd = function() {
                var t = this.doc.getLength() - 1,
                    e = this.doc.getLine(t).length;
                this.moveCursorTo(t, e)
            }, this.moveCursorFileStart = function() {
                this.moveCursorTo(0, 0)
            }, this.moveCursorLongWordRight = function() {
                var t = this.lead.row,
                    e = this.lead.column,
                    i = this.doc.getLine(t),
                    n = i.substring(e);
                this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0;
                var s = this.session.getFoldAt(t, e, 1);
                if (s) this.moveCursorTo(s.end.row, s.end.column);
                else {
                    if (this.session.nonTokenRe.exec(n) && (e += this.session.nonTokenRe.lastIndex, this.session.nonTokenRe.lastIndex = 0, n = i.substring(e)), e >= i.length) return this.moveCursorTo(t, i.length), this.moveCursorRight(), void(t < this.doc.getLength() - 1 && this.moveCursorWordRight());
                    this.session.tokenRe.exec(n) && (e += this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(t, e)
                }
            }, this.moveCursorLongWordLeft = function() {
                var t, e = this.lead.row,
                    i = this.lead.column;
                if (t = this.session.getFoldAt(e, i, -1)) this.moveCursorTo(t.start.row, t.start.column);
                else {
                    var n = this.session.getFoldStringAt(e, i, -1);
                    null == n && (n = this.doc.getLine(e).substring(0, i));
                    var r = s.stringReverse(n);
                    if (this.session.nonTokenRe.lastIndex = 0, this.session.tokenRe.lastIndex = 0, this.session.nonTokenRe.exec(r) && (i -= this.session.nonTokenRe.lastIndex, r = r.slice(this.session.nonTokenRe.lastIndex), this.session.nonTokenRe.lastIndex = 0), i <= 0) return this.moveCursorTo(e, 0), this.moveCursorLeft(), void(e > 0 && this.moveCursorWordLeft());
                    this.session.tokenRe.exec(r) && (i -= this.session.tokenRe.lastIndex, this.session.tokenRe.lastIndex = 0), this.moveCursorTo(e, i)
                }
            }, this.$shortWordEndIndex = function(t) {
                var e, i = 0,
                    n = /\s/,
                    s = this.session.tokenRe;
                if (s.lastIndex = 0, this.session.tokenRe.exec(t)) i = this.session.tokenRe.lastIndex;
                else {
                    for (;
                        (e = t[i]) && n.test(e);) i++;
                    if (i < 1)
                        for (s.lastIndex = 0;
                            (e = t[i]) && !s.test(e);)
                            if (s.lastIndex = 0, i++, n.test(e)) {
                                if (i > 2) {
                                    i--;
                                    break
                                }
                                for (;
                                    (e = t[i]) && n.test(e);) i++;
                                if (i > 2) break
                            }
                }
                return s.lastIndex = 0, i
            }, this.moveCursorShortWordRight = function() {
                var t = this.lead.row,
                    e = this.lead.column,
                    i = this.doc.getLine(t),
                    n = i.substring(e),
                    s = this.session.getFoldAt(t, e, 1);
                if (s) return this.moveCursorTo(s.end.row, s.end.column);
                if (e == i.length) {
                    var r = this.doc.getLength();
                    do {
                        n = this.doc.getLine(++t)
                    } while (t < r && /^\s*$/.test(n));
                    /^\s+/.test(n) || (n = ""), e = 0
                }
                var o = this.$shortWordEndIndex(n);
                this.moveCursorTo(t, e + o)
            }, this.moveCursorShortWordLeft = function() {
                var t, e = this.lead.row,
                    i = this.lead.column;
                if (t = this.session.getFoldAt(e, i, -1)) return this.moveCursorTo(t.start.row, t.start.column);
                var n = this.session.getLine(e).substring(0, i);
                if (0 === i) {
                    do {
                        n = this.doc.getLine(--e)
                    } while (e > 0 && /^\s*$/.test(n));
                    i = n.length, /\s+$/.test(n) || (n = "")
                }
                var r = s.stringReverse(n),
                    o = this.$shortWordEndIndex(r);
                return this.moveCursorTo(e, i - o)
            }, this.moveCursorWordRight = function() {
                this.session.$selectLongWords ? this.moveCursorLongWordRight() : this.moveCursorShortWordRight()
            }, this.moveCursorWordLeft = function() {
                this.session.$selectLongWords ? this.moveCursorLongWordLeft() : this.moveCursorShortWordLeft()
            }, this.moveCursorBy = function(t, e) {
                var i, n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
                0 === e && (0 !== t && (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row) ? (i = this.session.$bidiHandler.getPosLeft(n.column), n.column = Math.round(i / this.session.$bidiHandler.charWidths[0])) : i = n.column * this.session.$bidiHandler.charWidths[0]), this.$desiredColumn ? n.column = this.$desiredColumn : this.$desiredColumn = n.column);
                var s = this.session.screenToDocumentPosition(n.row + t, n.column, i);
                0 !== t && 0 === e && s.row === this.lead.row && s.column === this.lead.column && this.session.lineWidgets && this.session.lineWidgets[s.row] && (s.row > 0 || t > 0) && s.row++, this.moveCursorTo(s.row, s.column + e, 0 === e)
            }, this.moveCursorToPosition = function(t) {
                this.moveCursorTo(t.row, t.column)
            }, this.moveCursorTo = function(t, e, i) {
                var n = this.session.getFoldAt(t, e, 1);
                n && (t = n.start.row, e = n.start.column), this.$keepDesiredColumnOnChange = !0;
                var s = this.session.getLine(t);
                /[\uDC00-\uDFFF]/.test(s.charAt(e)) && s.charAt(e - 1) && (this.lead.row == t && this.lead.column == e + 1 ? e -= 1 : e += 1), this.lead.setPosition(t, e), this.$keepDesiredColumnOnChange = !1, i || (this.$desiredColumn = null)
            }, this.moveCursorToScreen = function(t, e, i) {
                var n = this.session.screenToDocumentPosition(t, e);
                this.moveCursorTo(n.row, n.column, i)
            }, this.detach = function() {
                this.lead.detach(), this.anchor.detach(), this.session = this.doc = null
            }, this.fromOrientedRange = function(t) {
                this.setSelectionRange(t, t.cursor == t.start), this.$desiredColumn = t.desiredColumn || this.$desiredColumn
            }, this.toOrientedRange = function(t) {
                var e = this.getRange();
                return t ? (t.start.column = e.start.column, t.start.row = e.start.row, t.end.column = e.end.column, t.end.row = e.end.row) : t = e, t.cursor = this.isBackwards() ? t.start : t.end, t.desiredColumn = this.$desiredColumn, t
            }, this.getRangeOfMovements = function(t) {
                var e = this.getCursor();
                try {
                    t(this);
                    var i = this.getCursor();
                    return o.fromPoints(e, i)
                } catch (t) {
                    return o.fromPoints(e, e)
                } finally {
                    this.moveCursorToPosition(e)
                }
            }, this.toJSON = function() {
                if (this.rangeCount) var t = this.ranges.map(function(t) {
                    var e = t.clone();
                    return e.isBackwards = t.cursor == t.start, e
                });
                else(t = this.getRange()).isBackwards = this.isBackwards();
                return t
            }, this.fromJSON = function(t) {
                if (void 0 == t.start) {
                    if (this.rangeList) {
                        this.toSingleRange(t[0]);
                        for (var e = t.length; e--;) {
                            var i = o.fromPoints(t[e].start, t[e].end);
                            t[e].isBackwards && (i.cursor = i.start), this.addRange(i, !0)
                        }
                        return
                    }
                    t = t[0]
                }
                this.rangeList && this.toSingleRange(t), this.setSelectionRange(t, t.isBackwards)
            }, this.isEqual = function(t) {
                if ((t.length || this.rangeCount) && t.length != this.rangeCount) return !1;
                if (!t.length || !this.ranges) return this.getRange().isEqual(t);
                for (var e = this.ranges.length; e--;)
                    if (!this.ranges[e].isEqual(t[e])) return !1;
                return !0
            }
        }).call(a.prototype), e.Selection = a
    }), define("ace/tokenizer", ["require", "exports", "module", "ace/config"], function(t, e, i) {
        "use strict";
        var n = t("./config"),
            s = 2e3,
            r = function(t) {
                for (var e in this.states = t, this.regExps = {}, this.matchMappings = {}, this.states) {
                    for (var i = this.states[e], n = [], s = 0, r = this.matchMappings[e] = {
                            defaultToken: "text"
                        }, o = "g", a = [], l = 0; l < i.length; l++) {
                        var h = i[l];
                        if (h.defaultToken && (r.defaultToken = h.defaultToken), h.caseInsensitive && (o = "gi"), null != h.regex) {
                            h.regex instanceof RegExp && (h.regex = h.regex.toString().slice(1, -1));
                            var c = h.regex,
                                u = new RegExp("(?:(" + c + ")|(.))").exec("a").length - 2;
                            Array.isArray(h.token) ? 1 == h.token.length || 1 == u ? h.token = h.token[0] : u - 1 != h.token.length ? (this.reportError("number of classes and regexp groups doesn't match", {
                                rule: h,
                                groupCount: u - 1
                            }), h.token = h.token[0]) : (h.tokenArray = h.token, h.token = null, h.onMatch = this.$arrayTokens) : "function" == typeof h.token && !h.onMatch && (h.onMatch = u > 1 ? this.$applyToken : h.token), u > 1 && (/\\\d/.test(h.regex) ? c = h.regex.replace(/\\([0-9]+)/g, function(t, e) {
                                return "\\" + (parseInt(e, 10) + s + 1)
                            }) : (u = 1, c = this.removeCapturingGroups(h.regex)), !h.splitRegex && "string" != typeof h.token && a.push(h)), r[s] = l, s += u, n.push(c), h.onMatch || (h.onMatch = null)
                        }
                    }
                    n.length || (r[0] = 0, n.push("$")), a.forEach(function(t) {
                        t.splitRegex = this.createSplitterRegexp(t.regex, o)
                    }, this), this.regExps[e] = new RegExp("(" + n.join(")|(") + ")|($)", o)
                }
            };
        (function() {
            this.$setMaxTokenCount = function(t) {
                s = 0 | t
            }, this.$applyToken = function(t) {
                var e = this.splitRegex.exec(t).slice(1),
                    i = this.token.apply(this, e);
                if ("string" == typeof i) return [{
                    type: i,
                    value: t
                }];
                for (var n = [], s = 0, r = i.length; s < r; s++) e[s] && (n[n.length] = {
                    type: i[s],
                    value: e[s]
                });
                return n
            }, this.$arrayTokens = function(t) {
                if (!t) return [];
                var e = this.splitRegex.exec(t);
                if (!e) return "text";
                for (var i = [], n = this.tokenArray, s = 0, r = n.length; s < r; s++) e[s + 1] && (i[i.length] = {
                    type: n[s],
                    value: e[s + 1]
                });
                return i
            }, this.removeCapturingGroups = function(t) {
                return t.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g, function(t, e) {
                    return e ? "(?:" : t
                })
            }, this.createSplitterRegexp = function(t, e) {
                if (-1 != t.indexOf("(?=")) {
                    var i = 0,
                        n = !1,
                        s = {};
                    t.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, function(t, e, r, o, a, l) {
                        return n ? n = "]" != a : a ? n = !0 : o ? (i == s.stack && (s.end = l + 1, s.stack = -1), i--) : r && (i++, 1 != r.length && (s.stack = i, s.start = l)), t
                    }), null != s.end && /^\)*$/.test(t.substr(s.end)) && (t = t.substring(0, s.start) + t.substr(s.end))
                }
                return "^" != t.charAt(0) && (t = "^" + t), "$" != t.charAt(t.length - 1) && (t += "$"), new RegExp(t, (e || "").replace("g", ""))
            }, this.getLineTokens = function(t, e) {
                if (e && "string" != typeof e) "#tmp" === (e = (i = e.slice(0))[0]) && (i.shift(), e = i.shift());
                else var i = [];
                var n = e || "start",
                    r = this.states[n];
                r || (r = this.states[n = "start"]);
                var o = this.matchMappings[n],
                    a = this.regExps[n];
                a.lastIndex = 0;
                for (var l, h = [], c = 0, u = 0, d = {
                        type: null,
                        value: ""
                    }; l = a.exec(t);) {
                    var f = o.defaultToken,
                        g = null,
                        m = l[0],
                        p = a.lastIndex;
                    if (p - m.length > c) {
                        var v = t.substring(c, p - m.length);
                        d.type == f ? d.value += v : (d.type && h.push(d), d = {
                            type: f,
                            value: v
                        })
                    }
                    for (var _ = 0; _ < l.length - 2; _++)
                        if (void 0 !== l[_ + 1]) {
                            f = (g = r[o[_]]).onMatch ? g.onMatch(m, n, i, t) : g.token, g.next && (n = "string" == typeof g.next ? g.next : g.next(n, i), (r = this.states[n]) || (this.reportError("state doesn't exist", n), r = this.states[n = "start"]), o = this.matchMappings[n], c = p, (a = this.regExps[n]).lastIndex = p), g.consumeLineEnd && (c = p);
                            break
                        }
                    if (m)
                        if ("string" == typeof f) g && !1 === g.merge || d.type !== f ? (d.type && h.push(d), d = {
                            type: f,
                            value: m
                        }) : d.value += m;
                        else if (f)
                        for (d.type && h.push(d), d = {
                                type: null,
                                value: ""
                            }, _ = 0; _ < f.length; _++) h.push(f[_]);
                    if (c == t.length) break;
                    if (c = p, u++ > s) {
                        for (u > 2 * t.length && this.reportError("infinite loop with in ace tokenizer", {
                                startState: e,
                                line: t
                            }); c < t.length;) d.type && h.push(d), d = {
                            value: t.substring(c, c += 2e3),
                            type: "overflow"
                        };
                        n = "start", i = [];
                        break
                    }
                }
                return d.type && h.push(d), i.length > 1 && i[0] !== n && i.unshift("#tmp", n), {
                    tokens: h,
                    state: i.length ? i : n
                }
            }, this.reportError = n.reportError
        }).call(r.prototype), e.Tokenizer = r
    }), define("ace/mode/text_highlight_rules", ["require", "exports", "module", "ace/lib/lang"], function(t, e, i) {
        "use strict";
        var n = t("../lib/lang"),
            s = function() {
                this.$rules = {
                    start: [{
                        token: "empty_line",
                        regex: "^$"
                    }, {
                        defaultToken: "text"
                    }]
                }
            };
        (function() {
            this.addRules = function(t, e) {
                if (e)
                    for (var i in t) {
                        for (var n = t[i], s = 0; s < n.length; s++) {
                            var r = n[s];
                            (r.next || r.onMatch) && ("string" == typeof r.next && 0 !== r.next.indexOf(e) && (r.next = e + r.next), r.nextState && 0 !== r.nextState.indexOf(e) && (r.nextState = e + r.nextState))
                        }
                        this.$rules[e + i] = n
                    } else
                        for (var i in t) this.$rules[i] = t[i]
            }, this.getRules = function() {
                return this.$rules
            }, this.embedRules = function(t, e, i, s, r) {
                var o = "function" == typeof t ? (new t).getRules() : t;
                if (s)
                    for (var a = 0; a < s.length; a++) s[a] = e + s[a];
                else
                    for (var l in s = [], o) s.push(e + l);
                if (this.addRules(o, e), i) {
                    var h = Array.prototype[r ? "push" : "unshift"];
                    for (a = 0; a < s.length; a++) h.apply(this.$rules[s[a]], n.deepCopy(i))
                }
                this.$embeds || (this.$embeds = []), this.$embeds.push(e)
            }, this.getEmbeds = function() {
                return this.$embeds
            };
            var t = function(t, e) {
                    return ("start" != t || e.length) && e.unshift(this.nextState, t), this.nextState
                },
                e = function(t, e) {
                    return e.shift(), e.shift() || "start"
                };
            this.normalizeRules = function() {
                var i = 0,
                    n = this.$rules;
                Object.keys(n).forEach(function s(r) {
                    var o = n[r];
                    o.processed = !0;
                    for (var a = 0; a < o.length; a++) {
                        var l = o[a],
                            h = null;
                        Array.isArray(l) && (h = l, l = {}), !l.regex && l.start && (l.regex = l.start, l.next || (l.next = []), l.next.push({
                            defaultToken: l.token
                        }, {
                            token: l.token + ".end",
                            regex: l.end || l.start,
                            next: "pop"
                        }), l.token = l.token + ".start", l.push = !0);
                        var c = l.next || l.push;
                        if (c && Array.isArray(c)) {
                            var u = l.stateName;
                            u || ("string" != typeof(u = l.token) && (u = u[0] || ""), n[u] && (u += i++)), n[u] = c, l.next = u, s(u)
                        } else "pop" == c && (l.next = e);
                        if (l.push && (l.nextState = l.next || l.push, l.next = t, delete l.push), l.rules)
                            for (var d in l.rules) n[d] ? n[d].push && n[d].push.apply(n[d], l.rules[d]) : n[d] = l.rules[d];
                        var f = "string" == typeof l ? l : l.include;
                        if (f && (h = Array.isArray(f) ? f.map(function(t) {
                                return n[t]
                            }) : n[f]), h) {
                            var g = [a, 1].concat(h);
                            l.noEscape && (g = g.filter(function(t) {
                                return !t.next
                            })), o.splice.apply(o, g), a--
                        }
                        l.keywordMap && (l.token = this.createKeywordMapper(l.keywordMap, l.defaultToken || "text", l.caseInsensitive), delete l.defaultToken)
                    }
                }, this)
            }, this.createKeywordMapper = function(t, e, i, n) {
                var s = Object.create(null);
                return Object.keys(t).forEach(function(e) {
                    var r = t[e];
                    i && (r = r.toLowerCase());
                    for (var o = r.split(n || "|"), a = o.length; a--;) s[o[a]] = e
                }), Object.getPrototypeOf(s) && (s.__proto__ = null), this.$keywordList = Object.keys(s), t = null, i ? function(t) {
                    return s[t.toLowerCase()] || e
                } : function(t) {
                    return s[t] || e
                }
            }, this.getKeywords = function() {
                return this.$keywords
            }
        }).call(s.prototype), e.TextHighlightRules = s
    }), define("ace/mode/behaviour", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        var n = function() {
            this.$behaviours = {}
        };
        (function() {
            this.add = function(t, e, i) {
                switch (void 0) {
                    case this.$behaviours:
                        this.$behaviours = {};
                    case this.$behaviours[t]:
                        this.$behaviours[t] = {}
                }
                this.$behaviours[t][e] = i
            }, this.addBehaviours = function(t) {
                for (var e in t)
                    for (var i in t[e]) this.add(e, i, t[e][i])
            }, this.remove = function(t) {
                this.$behaviours && this.$behaviours[t] && delete this.$behaviours[t]
            }, this.inherit = function(t, e) {
                if ("function" == typeof t) var i = (new t).getBehaviours(e);
                else i = t.getBehaviours(e);
                this.addBehaviours(i)
            }, this.getBehaviours = function(t) {
                if (!t) return this.$behaviours;
                for (var e = {}, i = 0; i < t.length; i++) this.$behaviours[t[i]] && (e[t[i]] = this.$behaviours[t[i]]);
                return e
            }
        }).call(n.prototype), e.Behaviour = n
    }), define("ace/token_iterator", ["require", "exports", "module", "ace/range"], function(t, e, i) {
        "use strict";
        var n = t("./range").Range,
            s = function(t, e, i) {
                this.$session = t, this.$row = e, this.$rowTokens = t.getTokens(e);
                var n = t.getTokenAt(e, i);
                this.$tokenIndex = n ? n.index : -1
            };
        (function() {
            this.stepBackward = function() {
                for (this.$tokenIndex -= 1; this.$tokenIndex < 0;) {
                    if (this.$row -= 1, this.$row < 0) return this.$row = 0, null;
                    this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = this.$rowTokens.length - 1
                }
                return this.$rowTokens[this.$tokenIndex]
            }, this.stepForward = function() {
                var t;
                for (this.$tokenIndex += 1; this.$tokenIndex >= this.$rowTokens.length;) {
                    if (this.$row += 1, t || (t = this.$session.getLength()), this.$row >= t) return this.$row = t - 1, null;
                    this.$rowTokens = this.$session.getTokens(this.$row), this.$tokenIndex = 0
                }
                return this.$rowTokens[this.$tokenIndex]
            }, this.getCurrentToken = function() {
                return this.$rowTokens[this.$tokenIndex]
            }, this.getCurrentTokenRow = function() {
                return this.$row
            }, this.getCurrentTokenColumn = function() {
                var t = this.$rowTokens,
                    e = this.$tokenIndex,
                    i = t[e].start;
                if (void 0 !== i) return i;
                for (i = 0; e > 0;) i += t[e -= 1].value.length;
                return i
            }, this.getCurrentTokenPosition = function() {
                return {
                    row: this.$row,
                    column: this.getCurrentTokenColumn()
                }
            }, this.getCurrentTokenRange = function() {
                var t = this.$rowTokens[this.$tokenIndex],
                    e = this.getCurrentTokenColumn();
                return new n(this.$row, e, this.$row, e + t.value.length)
            }
        }).call(s.prototype), e.TokenIterator = s
    }), define("ace/mode/behaviour/cstyle", ["require", "exports", "module", "ace/lib/oop", "ace/mode/behaviour", "ace/token_iterator", "ace/lib/lang"], function(t, e, i) {
        "use strict";
        var n, s = t("../../lib/oop"),
            r = t("../behaviour").Behaviour,
            o = t("../../token_iterator").TokenIterator,
            a = t("../../lib/lang"),
            l = ["text", "paren.rparen", "punctuation.operator"],
            h = ["text", "paren.rparen", "punctuation.operator", "comment"],
            c = {},
            u = {
                '"': '"',
                "'": "'"
            },
            d = function(t) {
                var e = -1;
                if (t.multiSelect && (e = t.selection.index, c.rangeCount != t.multiSelect.rangeCount && (c = {
                        rangeCount: t.multiSelect.rangeCount
                    })), c[e]) return n = c[e];
                n = c[e] = {
                    autoInsertedBrackets: 0,
                    autoInsertedRow: -1,
                    autoInsertedLineEnd: "",
                    maybeInsertedBrackets: 0,
                    maybeInsertedRow: -1,
                    maybeInsertedLineStart: "",
                    maybeInsertedLineEnd: ""
                }
            },
            f = function(t, e, i, n) {
                var s = t.end.row - t.start.row;
                return {
                    text: i + e + n,
                    selection: [0, t.start.column + 1, s, t.end.column + (s ? 0 : 1)]
                }
            },
            g = function(t) {
                this.add("braces", "insertion", function(e, i, s, r, o) {
                    var l = s.getCursorPosition(),
                        h = r.doc.getLine(l.row);
                    if ("{" == o) {
                        d(s);
                        var c = s.getSelectionRange(),
                            u = r.doc.getTextRange(c);
                        if ("" !== u && "{" !== u && s.getWrapBehavioursEnabled()) return f(c, u, "{", "}");
                        if (g.isSaneInsertion(s, r)) return /[\]\}\)]/.test(h[l.column]) || s.inMultiSelectMode || t && t.braces ? (g.recordAutoInsert(s, r, "}"), {
                            text: "{}",
                            selection: [1, 1]
                        }) : (g.recordMaybeInsert(s, r, "{"), {
                            text: "{",
                            selection: [1, 1]
                        })
                    } else if ("}" == o) {
                        if (d(s), "}" == h.substring(l.column, l.column + 1) && null !== r.$findOpeningBracket("}", {
                                column: l.column + 1,
                                row: l.row
                            }) && g.isAutoInsertedClosing(l, h, o)) return g.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    } else {
                        if ("\n" == o || "\r\n" == o) {
                            d(s);
                            var m = "";
                            if (g.isMaybeInsertedClosing(l, h) && (m = a.stringRepeat("}", n.maybeInsertedBrackets), g.clearMaybeInsertedClosing()), "}" === h.substring(l.column, l.column + 1)) {
                                var p = r.findMatchingBracket({
                                    row: l.row,
                                    column: l.column + 1
                                }, "}");
                                if (!p) return null;
                                var v = this.$getIndent(r.getLine(p.row))
                            } else {
                                if (!m) return void g.clearMaybeInsertedClosing();
                                v = this.$getIndent(h)
                            }
                            var _ = v + r.getTabString();
                            return {
                                text: "\n" + _ + "\n" + v + m,
                                selection: [1, _.length, 1, _.length]
                            }
                        }
                        g.clearMaybeInsertedClosing()
                    }
                }), this.add("braces", "deletion", function(t, e, i, s, r) {
                    var o = s.doc.getTextRange(r);
                    if (!r.isMultiLine() && "{" == o) {
                        if (d(i), "}" == s.doc.getLine(r.start.row).substring(r.end.column, r.end.column + 1)) return r.end.column++, r;
                        n.maybeInsertedBrackets--
                    }
                }), this.add("parens", "insertion", function(t, e, i, n, s) {
                    if ("(" == s) {
                        d(i);
                        var r = i.getSelectionRange(),
                            o = n.doc.getTextRange(r);
                        if ("" !== o && i.getWrapBehavioursEnabled()) return f(r, o, "(", ")");
                        if (g.isSaneInsertion(i, n)) return g.recordAutoInsert(i, n, ")"), {
                            text: "()",
                            selection: [1, 1]
                        }
                    } else if (")" == s) {
                        d(i);
                        var a = i.getCursorPosition(),
                            l = n.doc.getLine(a.row);
                        if (")" == l.substring(a.column, a.column + 1) && null !== n.$findOpeningBracket(")", {
                                column: a.column + 1,
                                row: a.row
                            }) && g.isAutoInsertedClosing(a, l, s)) return g.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    }
                }), this.add("parens", "deletion", function(t, e, i, n, s) {
                    var r = n.doc.getTextRange(s);
                    if (!s.isMultiLine() && "(" == r && (d(i), ")" == n.doc.getLine(s.start.row).substring(s.start.column + 1, s.start.column + 2))) return s.end.column++, s
                }), this.add("brackets", "insertion", function(t, e, i, n, s) {
                    if ("[" == s) {
                        d(i);
                        var r = i.getSelectionRange(),
                            o = n.doc.getTextRange(r);
                        if ("" !== o && i.getWrapBehavioursEnabled()) return f(r, o, "[", "]");
                        if (g.isSaneInsertion(i, n)) return g.recordAutoInsert(i, n, "]"), {
                            text: "[]",
                            selection: [1, 1]
                        }
                    } else if ("]" == s) {
                        d(i);
                        var a = i.getCursorPosition(),
                            l = n.doc.getLine(a.row);
                        if ("]" == l.substring(a.column, a.column + 1) && null !== n.$findOpeningBracket("]", {
                                column: a.column + 1,
                                row: a.row
                            }) && g.isAutoInsertedClosing(a, l, s)) return g.popAutoInsertedClosing(), {
                            text: "",
                            selection: [1, 1]
                        }
                    }
                }), this.add("brackets", "deletion", function(t, e, i, n, s) {
                    var r = n.doc.getTextRange(s);
                    if (!s.isMultiLine() && "[" == r && (d(i), "]" == n.doc.getLine(s.start.row).substring(s.start.column + 1, s.start.column + 2))) return s.end.column++, s
                }), this.add("string_dquotes", "insertion", function(t, e, i, n, s) {
                    var r = n.$mode.$quotes || u;
                    if (1 == s.length && r[s]) {
                        if (this.lineCommentStart && -1 != this.lineCommentStart.indexOf(s)) return;
                        d(i);
                        var o = s,
                            a = i.getSelectionRange(),
                            l = n.doc.getTextRange(a);
                        if ("" !== l && (1 != l.length || !r[l]) && i.getWrapBehavioursEnabled()) return f(a, l, o, o);
                        if (!l) {
                            var h = i.getCursorPosition(),
                                c = n.doc.getLine(h.row),
                                g = c.substring(h.column - 1, h.column),
                                m = c.substring(h.column, h.column + 1),
                                p = n.getTokenAt(h.row, h.column),
                                v = n.getTokenAt(h.row, h.column + 1);
                            if ("\\" == g && p && /escape/.test(p.type)) return null;
                            var _, w = p && /string|escape/.test(p.type),
                                y = !v || /string|escape/.test(v.type);
                            if (m == o)(_ = w !== y) && /string\.end/.test(v.type) && (_ = !1);
                            else {
                                if (w && !y) return null;
                                if (w && y) return null;
                                var b = n.$mode.tokenRe;
                                b.lastIndex = 0;
                                var x = b.test(g);
                                b.lastIndex = 0;
                                var $ = b.test(g);
                                if (x || $) return null;
                                if (m && !/[\s;,.})\]\\]/.test(m)) return null;
                                _ = !0
                            }
                            return {
                                text: _ ? o + o : "",
                                selection: [1, 1]
                            }
                        }
                    }
                }), this.add("string_dquotes", "deletion", function(t, e, i, n, s) {
                    var r = n.$mode.$quotes || u,
                        o = n.doc.getTextRange(s);
                    if (!s.isMultiLine() && r.hasOwnProperty(o) && (d(i), n.doc.getLine(s.start.row).substring(s.start.column + 1, s.start.column + 2) == o)) return s.end.column++, s
                })
            };
        g.isSaneInsertion = function(t, e) {
            var i = t.getCursorPosition(),
                n = new o(e, i.row, i.column);
            if (!this.$matchTokenType(n.getCurrentToken() || "text", l)) {
                var s = new o(e, i.row, i.column + 1);
                if (!this.$matchTokenType(s.getCurrentToken() || "text", l)) return !1
            }
            return n.stepForward(), n.getCurrentTokenRow() !== i.row || this.$matchTokenType(n.getCurrentToken() || "text", h)
        }, g.$matchTokenType = function(t, e) {
            return e.indexOf(t.type || t) > -1
        }, g.recordAutoInsert = function(t, e, i) {
            var s = t.getCursorPosition(),
                r = e.doc.getLine(s.row);
            this.isAutoInsertedClosing(s, r, n.autoInsertedLineEnd[0]) || (n.autoInsertedBrackets = 0), n.autoInsertedRow = s.row, n.autoInsertedLineEnd = i + r.substr(s.column), n.autoInsertedBrackets++
        }, g.recordMaybeInsert = function(t, e, i) {
            var s = t.getCursorPosition(),
                r = e.doc.getLine(s.row);
            this.isMaybeInsertedClosing(s, r) || (n.maybeInsertedBrackets = 0), n.maybeInsertedRow = s.row, n.maybeInsertedLineStart = r.substr(0, s.column) + i, n.maybeInsertedLineEnd = r.substr(s.column), n.maybeInsertedBrackets++
        }, g.isAutoInsertedClosing = function(t, e, i) {
            return n.autoInsertedBrackets > 0 && t.row === n.autoInsertedRow && i === n.autoInsertedLineEnd[0] && e.substr(t.column) === n.autoInsertedLineEnd
        }, g.isMaybeInsertedClosing = function(t, e) {
            return n.maybeInsertedBrackets > 0 && t.row === n.maybeInsertedRow && e.substr(t.column) === n.maybeInsertedLineEnd && e.substr(0, t.column) == n.maybeInsertedLineStart
        }, g.popAutoInsertedClosing = function() {
            n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1), n.autoInsertedBrackets--
        }, g.clearMaybeInsertedClosing = function() {
            n && (n.maybeInsertedBrackets = 0, n.maybeInsertedRow = -1)
        }, s.inherits(g, r), e.CstyleBehaviour = g
    }), define("ace/unicode", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        for (var n = [48, 9, 8, 25, 5, 0, 2, 25, 48, 0, 11, 0, 5, 0, 6, 22, 2, 30, 2, 457, 5, 11, 15, 4, 8, 0, 2, 0, 18, 116, 2, 1, 3, 3, 9, 0, 2, 2, 2, 0, 2, 19, 2, 82, 2, 138, 2, 4, 3, 155, 12, 37, 3, 0, 8, 38, 10, 44, 2, 0, 2, 1, 2, 1, 2, 0, 9, 26, 6, 2, 30, 10, 7, 61, 2, 9, 5, 101, 2, 7, 3, 9, 2, 18, 3, 0, 17, 58, 3, 100, 15, 53, 5, 0, 6, 45, 211, 57, 3, 18, 2, 5, 3, 11, 3, 9, 2, 1, 7, 6, 2, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 0, 4, 3, 3, 8, 3, 1, 3, 3, 9, 0, 5, 1, 2, 4, 3, 11, 16, 2, 2, 5, 5, 1, 3, 21, 2, 6, 2, 1, 2, 1, 2, 1, 3, 0, 2, 4, 5, 1, 3, 2, 4, 0, 8, 3, 2, 0, 8, 15, 12, 2, 2, 8, 2, 2, 2, 21, 2, 6, 2, 1, 2, 4, 3, 9, 2, 2, 2, 2, 3, 0, 16, 3, 3, 9, 18, 2, 2, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 3, 8, 3, 1, 3, 2, 9, 1, 5, 1, 2, 4, 3, 9, 2, 0, 17, 1, 2, 5, 4, 2, 2, 3, 4, 1, 2, 0, 2, 1, 4, 1, 4, 2, 4, 11, 5, 4, 4, 2, 2, 3, 3, 0, 7, 0, 15, 9, 18, 2, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 4, 7, 2, 2, 2, 3, 8, 1, 2, 1, 7, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 9, 2, 4, 3, 8, 2, 2, 2, 3, 8, 1, 8, 0, 2, 3, 3, 9, 19, 1, 2, 7, 2, 2, 2, 22, 2, 15, 4, 7, 2, 2, 2, 3, 10, 0, 9, 3, 3, 9, 11, 5, 3, 1, 2, 17, 4, 23, 2, 8, 2, 0, 3, 6, 4, 0, 5, 5, 2, 0, 2, 7, 19, 1, 14, 57, 6, 14, 2, 9, 40, 1, 2, 0, 3, 1, 2, 0, 3, 0, 7, 3, 2, 6, 2, 2, 2, 0, 2, 0, 3, 1, 2, 12, 2, 2, 3, 4, 2, 0, 2, 5, 3, 9, 3, 1, 35, 0, 24, 1, 7, 9, 12, 0, 2, 0, 2, 0, 5, 9, 2, 35, 5, 19, 2, 5, 5, 7, 2, 35, 10, 0, 58, 73, 7, 77, 3, 37, 11, 42, 2, 0, 4, 328, 2, 3, 3, 6, 2, 0, 2, 3, 3, 40, 2, 3, 3, 32, 2, 3, 3, 6, 2, 0, 2, 3, 3, 14, 2, 56, 2, 3, 3, 66, 5, 0, 33, 15, 17, 84, 13, 619, 3, 16, 2, 25, 6, 74, 22, 12, 2, 6, 12, 20, 12, 19, 13, 12, 2, 2, 2, 1, 13, 51, 3, 29, 4, 0, 5, 1, 3, 9, 34, 2, 3, 9, 7, 87, 9, 42, 6, 69, 11, 28, 4, 11, 5, 11, 11, 39, 3, 4, 12, 43, 5, 25, 7, 10, 38, 27, 5, 62, 2, 28, 3, 10, 7, 9, 14, 0, 89, 75, 5, 9, 18, 8, 13, 42, 4, 11, 71, 55, 9, 9, 4, 48, 83, 2, 2, 30, 14, 230, 23, 280, 3, 5, 3, 37, 3, 5, 3, 7, 2, 0, 2, 0, 2, 0, 2, 30, 3, 52, 2, 6, 2, 0, 4, 2, 2, 6, 4, 3, 3, 5, 5, 12, 6, 2, 2, 6, 67, 1, 20, 0, 29, 0, 14, 0, 17, 4, 60, 12, 5, 0, 4, 11, 18, 0, 5, 0, 3, 9, 2, 0, 4, 4, 7, 0, 2, 0, 2, 0, 2, 3, 2, 10, 3, 3, 6, 4, 5, 0, 53, 1, 2684, 46, 2, 46, 2, 132, 7, 6, 15, 37, 11, 53, 10, 0, 17, 22, 10, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 6, 2, 31, 48, 0, 470, 1, 36, 5, 2, 4, 6, 1, 5, 85, 3, 1, 3, 2, 2, 89, 2, 3, 6, 40, 4, 93, 18, 23, 57, 15, 513, 6581, 75, 20939, 53, 1164, 68, 45, 3, 268, 4, 27, 21, 31, 3, 13, 13, 1, 2, 24, 9, 69, 11, 1, 38, 8, 3, 102, 3, 1, 111, 44, 25, 51, 13, 68, 12, 9, 7, 23, 4, 0, 5, 45, 3, 35, 13, 28, 4, 64, 15, 10, 39, 54, 10, 13, 3, 9, 7, 22, 4, 1, 5, 66, 25, 2, 227, 42, 2, 1, 3, 9, 7, 11171, 13, 22, 5, 48, 8453, 301, 3, 61, 3, 105, 39, 6, 13, 4, 6, 11, 2, 12, 2, 4, 2, 0, 2, 1, 2, 1, 2, 107, 34, 362, 19, 63, 3, 53, 41, 11, 5, 15, 17, 6, 13, 1, 25, 2, 33, 4, 2, 134, 20, 9, 8, 25, 5, 0, 2, 25, 12, 88, 4, 5, 3, 5, 3, 5, 3, 2], s = 0, r = [], o = 0; o < n.length; o += 2) r.push(s += n[o]), n[o + 1] && r.push(45, s += n[o + 1]);
        e.wordChars = String.fromCharCode.apply(null, r)
    }), define("ace/mode/text", ["require", "exports", "module", "ace/config", "ace/tokenizer", "ace/mode/text_highlight_rules", "ace/mode/behaviour/cstyle", "ace/unicode", "ace/lib/lang", "ace/token_iterator", "ace/range"], function(t, e, i) {
        "use strict";
        var n = t("../config"),
            s = t("../tokenizer").Tokenizer,
            r = t("./text_highlight_rules").TextHighlightRules,
            o = t("./behaviour/cstyle").CstyleBehaviour,
            a = t("../unicode"),
            l = t("../lib/lang"),
            h = t("../token_iterator").TokenIterator,
            c = t("../range").Range,
            u = function() {
                this.HighlightRules = r
            };
        (function() {
            this.$defaultBehaviour = new o, this.tokenRe = new RegExp("^[" + a.wordChars + "\\$_]+", "g"), this.nonTokenRe = new RegExp("^(?:[^" + a.wordChars + "\\$_]|\\s])+", "g"), this.getTokenizer = function() {
                return this.$tokenizer || (this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig), this.$tokenizer = new s(this.$highlightRules.getRules())), this.$tokenizer
            }, this.lineCommentStart = "", this.blockComment = "", this.toggleCommentLines = function(t, e, i, n) {
                function s(t) {
                    for (var e = i; e <= n; e++) t(r.getLine(e), e)
                }
                var r = e.doc,
                    o = !0,
                    a = !0,
                    h = 1 / 0,
                    c = e.getTabSize(),
                    u = !1;
                if (this.lineCommentStart) {
                    Array.isArray(this.lineCommentStart) ? (p = this.lineCommentStart.map(l.escapeRegExp).join("|"), g = this.lineCommentStart[0]) : (p = l.escapeRegExp(this.lineCommentStart), g = this.lineCommentStart), p = new RegExp("^(\\s*)(?:" + p + ") ?"), u = e.getUseSoftTabs(), w = function(t, e) {
                        var i = t.match(p);
                        if (i) {
                            var n = i[1].length,
                                s = i[0].length;
                            !f(t, n, s) && " " == i[0][s - 1] && s--, r.removeInLine(e, n, s)
                        }
                    };
                    var d = g + " ",
                        f = (_ = function(t, e) {
                            o && !/\S/.test(t) || (f(t, h, h) ? r.insertInLine({
                                row: e,
                                column: h
                            }, d) : r.insertInLine({
                                row: e,
                                column: h
                            }, g))
                        }, y = function(t, e) {
                            return p.test(t)
                        }, function(t, e, i) {
                            for (var n = 0; e-- && " " == t.charAt(e);) n++;
                            if (n % c != 0) return !1;
                            for (n = 0;
                                " " == t.charAt(i++);) n++;
                            return c > 2 ? n % c != c - 1 : n % c == 0
                        })
                } else {
                    if (!this.blockComment) return !1;
                    var g = this.blockComment.start,
                        m = this.blockComment.end,
                        p = new RegExp("^(\\s*)(?:" + l.escapeRegExp(g) + ")"),
                        v = new RegExp("(?:" + l.escapeRegExp(m) + ")\\s*$"),
                        _ = function(t, e) {
                            y(t, e) || o && !/\S/.test(t) || (r.insertInLine({
                                row: e,
                                column: t.length
                            }, m), r.insertInLine({
                                row: e,
                                column: h
                            }, g))
                        },
                        w = function(t, e) {
                            var i;
                            (i = t.match(v)) && r.removeInLine(e, t.length - i[0].length, t.length), (i = t.match(p)) && r.removeInLine(e, i[1].length, i[0].length)
                        },
                        y = function(t, i) {
                            if (p.test(t)) return !0;
                            for (var n = e.getTokens(i), s = 0; s < n.length; s++)
                                if ("comment" === n[s].type) return !0
                        }
                }
                var b = 1 / 0;
                s(function(t, e) {
                    var i = t.search(/\S/); - 1 !== i ? (i < h && (h = i), a && !y(t, e) && (a = !1)) : b > t.length && (b = t.length)
                }), h == 1 / 0 && (h = b, o = !1, a = !1), u && h % c != 0 && (h = Math.floor(h / c) * c), s(a ? w : _)
            }, this.toggleBlockComment = function(t, e, i, n) {
                var s = this.blockComment;
                if (s) {
                    !s.start && s[0] && (s = s[0]);
                    var r, o, a = (m = new h(e, n.row, n.column)).getCurrentToken(),
                        l = e.selection.toOrientedRange();
                    if (a && /comment/.test(a.type)) {
                        for (var u, d; a && /comment/.test(a.type);) {
                            if (-1 != (p = a.value.indexOf(s.start))) {
                                var f = m.getCurrentTokenRow(),
                                    g = m.getCurrentTokenColumn() + p;
                                u = new c(f, g, f, g + s.start.length);
                                break
                            }
                            a = m.stepBackward()
                        }
                        var m;
                        for (a = (m = new h(e, n.row, n.column)).getCurrentToken(); a && /comment/.test(a.type);) {
                            var p;
                            if (-1 != (p = a.value.indexOf(s.end))) {
                                f = m.getCurrentTokenRow(), g = m.getCurrentTokenColumn() + p, d = new c(f, g, f, g + s.end.length);
                                break
                            }
                            a = m.stepForward()
                        }
                        d && e.remove(d), u && (e.remove(u), r = u.start.row, o = -s.start.length)
                    } else o = s.start.length, r = i.start.row, e.insert(i.end, s.end), e.insert(i.start, s.start);
                    l.start.row == r && (l.start.column += o), l.end.row == r && (l.end.column += o), e.selection.fromOrientedRange(l)
                }
            }, this.getNextLineIndent = function(t, e, i) {
                return this.$getIndent(e)
            }, this.checkOutdent = function(t, e, i) {
                return !1
            }, this.autoOutdent = function(t, e, i) {}, this.$getIndent = function(t) {
                return t.match(/^\s*/)[0]
            }, this.createWorker = function(t) {
                return null
            }, this.createModeDelegates = function(t) {
                for (var e in this.$embeds = [], this.$modes = {}, t)
                    if (t[e]) {
                        var i = t[e],
                            s = i.prototype.$id,
                            r = n.$modes[s];
                        r || (n.$modes[s] = r = new i), n.$modes[e] || (n.$modes[e] = r), this.$embeds.push(e), this.$modes[e] = r
                    }
                var o = ["toggleBlockComment", "toggleCommentLines", "getNextLineIndent", "checkOutdent", "autoOutdent", "transformAction", "getCompletions"];
                for (e = 0; e < o.length; e++) ! function(t) {
                    var i = o[e],
                        n = t[i];
                    t[o[e]] = function() {
                        return this.$delegator(i, arguments, n)
                    }
                }(this)
            }, this.$delegator = function(t, e, i) {
                var n = e[0];
                if ("string" != typeof n) {
                    if (Array.isArray(n[2]) && (r = this.$modes[n[2][n[2].length - 1]])) return r[t].apply(r, [n[1]].concat([].slice.call(e, 1)));
                    n = n[0]
                }
                for (var s = 0; s < this.$embeds.length; s++)
                    if (this.$modes[this.$embeds[s]]) {
                        var r, o = n.split(this.$embeds[s]);
                        if (!o[0] && o[1]) return e[0] = o[1], (r = this.$modes[this.$embeds[s]])[t].apply(r, e)
                    }
                var a = i.apply(this, e);
                return i ? a : void 0
            }, this.transformAction = function(t, e, i, n, s) {
                if (this.$behaviour) {
                    var r = this.$behaviour.getBehaviours();
                    for (var o in r)
                        if (r[o][e]) {
                            var a = r[o][e].apply(this, arguments);
                            if (a) return a
                        }
                }
            }, this.getKeywords = function(t) {
                if (!this.completionKeywords) {
                    var e = this.$tokenizer.rules,
                        i = [];
                    for (var n in e)
                        for (var s = e[n], r = 0, o = s.length; r < o; r++)
                            if ("string" == typeof s[r].token) /keyword|support|storage/.test(s[r].token) && i.push(s[r].regex);
                            else if ("object" == typeof s[r].token)
                        for (var a = 0, l = s[r].token.length; a < l; a++) /keyword|support|storage/.test(s[r].token[a]) && (n = s[r].regex.match(/\(.+?\)/g)[a], i.push(n.substr(1, n.length - 2)));
                    this.completionKeywords = i
                }
                return t ? i.concat(this.$keywordList || []) : this.$keywordList
            }, this.$createKeywordList = function() {
                return this.$highlightRules || this.getTokenizer(), this.$keywordList = this.$highlightRules.$keywordList || []
            }, this.getCompletions = function(t, e, i, n) {
                return (this.$keywordList || this.$createKeywordList()).map(function(t) {
                    return {
                        name: t,
                        value: t,
                        score: 0,
                        meta: "keyword"
                    }
                })
            }, this.$id = "ace/mode/text"
        }).call(u.prototype), e.Mode = u
    }), define("ace/apply_delta", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        e.applyDelta = function(t, e, i) {
            var n = e.start.row,
                s = e.start.column,
                r = t[n] || "";
            switch (e.action) {
                case "insert":
                    if (1 === e.lines.length) t[n] = r.substring(0, s) + e.lines[0] + r.substring(s);
                    else {
                        var o = [n, 1].concat(e.lines);
                        t.splice.apply(t, o), t[n] = r.substring(0, s) + t[n], t[n + e.lines.length - 1] += r.substring(s)
                    }
                    break;
                case "remove":
                    var a = e.end.column,
                        l = e.end.row;
                    n === l ? t[n] = r.substring(0, s) + r.substring(a) : t.splice(n, l - n + 1, r.substring(0, s) + t[l].substring(a))
            }
        }
    }), define("ace/anchor", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(t, e, i) {
        "use strict";
        var n = t("./lib/oop"),
            s = t("./lib/event_emitter").EventEmitter,
            r = e.Anchor = function(t, e, i) {
                this.$onChange = this.onChange.bind(this), this.attach(t), void 0 === i ? this.setPosition(e.row, e.column) : this.setPosition(e, i)
            };
        (function() {
            function t(t, e, i) {
                return t.row < e.row || t.row == e.row && (i ? t.column <= e.column : t.column < e.column)
            }

            function e(e, i, n) {
                var s = "insert" == e.action,
                    r = (s ? 1 : -1) * (e.end.row - e.start.row),
                    o = (s ? 1 : -1) * (e.end.column - e.start.column),
                    a = e.start,
                    l = s ? a : e.end;
                return t(i, a, n) ? {
                    row: i.row,
                    column: i.column
                } : t(l, i, !n) ? {
                    row: i.row + r,
                    column: i.column + (i.row == l.row ? o : 0)
                } : {
                    row: a.row,
                    column: a.column
                }
            }
            n.implement(this, s), this.getPosition = function() {
                return this.$clipPositionToDocument(this.row, this.column)
            }, this.getDocument = function() {
                return this.document
            }, this.$insertRight = !1, this.onChange = function(t) {
                if (!(t.start.row == t.end.row && t.start.row != this.row || t.start.row > this.row)) {
                    var i = e(t, {
                        row: this.row,
                        column: this.column
                    }, this.$insertRight);
                    this.setPosition(i.row, i.column, !0)
                }
            }, this.setPosition = function(t, e, i) {
                var n;
                if (n = i ? {
                        row: t,
                        column: e
                    } : this.$clipPositionToDocument(t, e), this.row != n.row || this.column != n.column) {
                    var s = {
                        row: this.row,
                        column: this.column
                    };
                    this.row = n.row, this.column = n.column, this._signal("change", {
                        old: s,
                        value: n
                    })
                }
            }, this.detach = function() {
                this.document.removeEventListener("change", this.$onChange)
            }, this.attach = function(t) {
                this.document = t || this.document, this.document.on("change", this.$onChange)
            }, this.$clipPositionToDocument = function(t, e) {
                var i = {};
                return t >= this.document.getLength() ? (i.row = Math.max(0, this.document.getLength() - 1), i.column = this.document.getLine(i.row).length) : t < 0 ? (i.row = 0, i.column = 0) : (i.row = t, i.column = Math.min(this.document.getLine(i.row).length, Math.max(0, e))), e < 0 && (i.column = 0), i
            }
        }).call(r.prototype)
    }), define("ace/document", ["require", "exports", "module", "ace/lib/oop", "ace/apply_delta", "ace/lib/event_emitter", "ace/range", "ace/anchor"], function(t, e, i) {
        "use strict";
        var n = t("./lib/oop"),
            s = t("./apply_delta").applyDelta,
            r = t("./lib/event_emitter").EventEmitter,
            o = t("./range").Range,
            a = t("./anchor").Anchor,
            l = function(t) {
                this.$lines = [""], 0 === t.length ? this.$lines = [""] : Array.isArray(t) ? this.insertMergedLines({
                    row: 0,
                    column: 0
                }, t) : this.insert({
                    row: 0,
                    column: 0
                }, t)
            };
        (function() {
            n.implement(this, r), this.setValue = function(t) {
                var e = this.getLength() - 1;
                this.remove(new o(0, 0, e, this.getLine(e).length)), this.insert({
                    row: 0,
                    column: 0
                }, t)
            }, this.getValue = function() {
                return this.getAllLines().join(this.getNewLineCharacter())
            }, this.createAnchor = function(t, e) {
                return new a(this, t, e)
            }, this.$split = 0 === "aaa".split(/a/).length ? function(t) {
                return t.replace(/\r\n|\r/g, "\n").split("\n")
            } : function(t) {
                return t.split(/\r\n|\r|\n/)
            }, this.$detectNewLine = function(t) {
                var e = t.match(/^.*?(\r\n|\r|\n)/m);
                this.$autoNewLine = e ? e[1] : "\n", this._signal("changeNewLineMode")
            }, this.getNewLineCharacter = function() {
                switch (this.$newLineMode) {
                    case "windows":
                        return "\r\n";
                    case "unix":
                        return "\n";
                    default:
                        return this.$autoNewLine || "\n"
                }
            }, this.$autoNewLine = "", this.$newLineMode = "auto", this.setNewLineMode = function(t) {
                this.$newLineMode !== t && (this.$newLineMode = t, this._signal("changeNewLineMode"))
            }, this.getNewLineMode = function() {
                return this.$newLineMode
            }, this.isNewLine = function(t) {
                return "\r\n" == t || "\r" == t || "\n" == t
            }, this.getLine = function(t) {
                return this.$lines[t] || ""
            }, this.getLines = function(t, e) {
                return this.$lines.slice(t, e + 1)
            }, this.getAllLines = function() {
                return this.getLines(0, this.getLength())
            }, this.getLength = function() {
                return this.$lines.length
            }, this.getTextRange = function(t) {
                return this.getLinesForRange(t).join(this.getNewLineCharacter())
            }, this.getLinesForRange = function(t) {
                var e;
                if (t.start.row === t.end.row) e = [this.getLine(t.start.row).substring(t.start.column, t.end.column)];
                else {
                    (e = this.getLines(t.start.row, t.end.row))[0] = (e[0] || "").substring(t.start.column);
                    var i = e.length - 1;
                    t.end.row - t.start.row == i && (e[i] = e[i].substring(0, t.end.column))
                }
                return e
            }, this.insertLines = function(t, e) {
                return console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead."), this.insertFullLines(t, e)
            }, this.removeLines = function(t, e) {
                return console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead."), this.removeFullLines(t, e)
            }, this.insertNewLine = function(t) {
                return console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead."), this.insertMergedLines(t, ["", ""])
            }, this.insert = function(t, e) {
                return this.getLength() <= 1 && this.$detectNewLine(e), this.insertMergedLines(t, this.$split(e))
            }, this.insertInLine = function(t, e) {
                var i = this.clippedPos(t.row, t.column),
                    n = this.pos(t.row, t.column + e.length);
                return this.applyDelta({
                    start: i,
                    end: n,
                    action: "insert",
                    lines: [e]
                }, !0), this.clonePos(n)
            }, this.clippedPos = function(t, e) {
                var i = this.getLength();
                void 0 === t ? t = i : t < 0 ? t = 0 : t >= i && (t = i - 1, e = void 0);
                var n = this.getLine(t);
                return void 0 == e && (e = n.length), {
                    row: t,
                    column: e = Math.min(Math.max(e, 0), n.length)
                }
            }, this.clonePos = function(t) {
                return {
                    row: t.row,
                    column: t.column
                }
            }, this.pos = function(t, e) {
                return {
                    row: t,
                    column: e
                }
            }, this.$clipPosition = function(t) {
                var e = this.getLength();
                return t.row >= e ? (t.row = Math.max(0, e - 1), t.column = this.getLine(e - 1).length) : (t.row = Math.max(0, t.row), t.column = Math.min(Math.max(t.column, 0), this.getLine(t.row).length)), t
            }, this.insertFullLines = function(t, e) {
                var i = 0;
                (t = Math.min(Math.max(t, 0), this.getLength())) < this.getLength() ? (e = e.concat([""]), i = 0) : (e = [""].concat(e), i = this.$lines[--t].length), this.insertMergedLines({
                    row: t,
                    column: i
                }, e)
            }, this.insertMergedLines = function(t, e) {
                var i = this.clippedPos(t.row, t.column),
                    n = {
                        row: i.row + e.length - 1,
                        column: (1 == e.length ? i.column : 0) + e[e.length - 1].length
                    };
                return this.applyDelta({
                    start: i,
                    end: n,
                    action: "insert",
                    lines: e
                }), this.clonePos(n)
            }, this.remove = function(t) {
                var e = this.clippedPos(t.start.row, t.start.column),
                    i = this.clippedPos(t.end.row, t.end.column);
                return this.applyDelta({
                    start: e,
                    end: i,
                    action: "remove",
                    lines: this.getLinesForRange({
                        start: e,
                        end: i
                    })
                }), this.clonePos(e)
            }, this.removeInLine = function(t, e, i) {
                var n = this.clippedPos(t, e),
                    s = this.clippedPos(t, i);
                return this.applyDelta({
                    start: n,
                    end: s,
                    action: "remove",
                    lines: this.getLinesForRange({
                        start: n,
                        end: s
                    })
                }, !0), this.clonePos(n)
            }, this.removeFullLines = function(t, e) {
                t = Math.min(Math.max(0, t), this.getLength() - 1);
                var i = (e = Math.min(Math.max(0, e), this.getLength() - 1)) == this.getLength() - 1 && t > 0,
                    n = e < this.getLength() - 1,
                    s = i ? t - 1 : t,
                    r = i ? this.getLine(s).length : 0,
                    a = n ? e + 1 : e,
                    l = n ? 0 : this.getLine(a).length,
                    h = new o(s, r, a, l),
                    c = this.$lines.slice(t, e + 1);
                return this.applyDelta({
                    start: h.start,
                    end: h.end,
                    action: "remove",
                    lines: this.getLinesForRange(h)
                }), c
            }, this.removeNewLine = function(t) {
                t < this.getLength() - 1 && t >= 0 && this.applyDelta({
                    start: this.pos(t, this.getLine(t).length),
                    end: this.pos(t + 1, 0),
                    action: "remove",
                    lines: ["", ""]
                })
            }, this.replace = function(t, e) {
                return t instanceof o || (t = o.fromPoints(t.start, t.end)), 0 === e.length && t.isEmpty() ? t.start : e == this.getTextRange(t) ? t.end : (this.remove(t), e ? this.insert(t.start, e) : t.start)
            }, this.applyDeltas = function(t) {
                for (var e = 0; e < t.length; e++) this.applyDelta(t[e])
            }, this.revertDeltas = function(t) {
                for (var e = t.length - 1; e >= 0; e--) this.revertDelta(t[e])
            }, this.applyDelta = function(t, e) {
                var i = "insert" == t.action;
                (i ? t.lines.length <= 1 && !t.lines[0] : !o.comparePoints(t.start, t.end)) || (i && t.lines.length > 2e4 ? this.$splitAndapplyLargeDelta(t, 2e4) : (s(this.$lines, t, e), this._signal("change", t)))
            }, this.$splitAndapplyLargeDelta = function(t, e) {
                for (var i = t.lines, n = i.length - e + 1, s = t.start.row, r = t.start.column, o = 0, a = 0; o < n; o = a) {
                    var l = i.slice(o, a += e - 1);
                    l.push(""), this.applyDelta({
                        start: this.pos(s + o, r),
                        end: this.pos(s + a, r = 0),
                        action: t.action,
                        lines: l
                    }, !0)
                }
                t.lines = i.slice(o), t.start.row = s + o, t.start.column = r, this.applyDelta(t, !0)
            }, this.revertDelta = function(t) {
                this.applyDelta({
                    start: this.clonePos(t.start),
                    end: this.clonePos(t.end),
                    action: "insert" == t.action ? "remove" : "insert",
                    lines: t.lines.slice()
                })
            }, this.indexToPosition = function(t, e) {
                for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, s = e || 0, r = i.length; s < r; s++)
                    if ((t -= i[s].length + n) < 0) return {
                        row: s,
                        column: t + i[s].length + n
                    };
                return {
                    row: r - 1,
                    column: t + i[r - 1].length + n
                }
            }, this.positionToIndex = function(t, e) {
                for (var i = this.$lines || this.getAllLines(), n = this.getNewLineCharacter().length, s = 0, r = Math.min(t.row, i.length), o = e || 0; o < r; ++o) s += i[o].length + n;
                return s + t.column
            }
        }).call(l.prototype), e.Document = l
    }), define("ace/background_tokenizer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/event_emitter"], function(t, e, i) {
        "use strict";
        var n = t("./lib/oop"),
            s = t("./lib/event_emitter").EventEmitter,
            r = function(t, e) {
                this.running = !1, this.lines = [], this.states = [], this.currentLine = 0, this.tokenizer = t;
                var i = this;
                this.$worker = function() {
                    if (i.running) {
                        for (var t = new Date, e = i.currentLine, n = -1, s = i.doc, r = e; i.lines[e];) e++;
                        var o = s.getLength(),
                            a = 0;
                        for (i.running = !1; e < o;) {
                            i.$tokenizeRow(e), n = e;
                            do {
                                e++
                            } while (i.lines[e]);
                            if (++a % 5 == 0 && new Date - t > 20) {
                                i.running = setTimeout(i.$worker, 20);
                                break
                            }
                        }
                        i.currentLine = e, -1 == n && (n = e), r <= n && i.fireUpdateEvent(r, n)
                    }
                }
            };
        (function() {
            n.implement(this, s), this.setTokenizer = function(t) {
                this.tokenizer = t, this.lines = [], this.states = [], this.start(0)
            }, this.setDocument = function(t) {
                this.doc = t, this.lines = [], this.states = [], this.stop()
            }, this.fireUpdateEvent = function(t, e) {
                this._signal("update", {
                    data: {
                        first: t,
                        last: e
                    }
                })
            }, this.start = function(t) {
                this.currentLine = Math.min(t || 0, this.currentLine, this.doc.getLength()), this.lines.splice(this.currentLine, this.lines.length), this.states.splice(this.currentLine, this.states.length), this.stop(), this.running = setTimeout(this.$worker, 700)
            }, this.scheduleStart = function() {
                this.running || (this.running = setTimeout(this.$worker, 700))
            }, this.$updateOnChange = function(t) {
                var e = t.start.row,
                    i = t.end.row - e;
                if (0 === i) this.lines[e] = null;
                else if ("remove" == t.action) this.lines.splice(e, i + 1, null), this.states.splice(e, i + 1, null);
                else {
                    var n = Array(i + 1);
                    n.unshift(e, 1), this.lines.splice.apply(this.lines, n), this.states.splice.apply(this.states, n)
                }
                this.currentLine = Math.min(e, this.currentLine, this.doc.getLength()), this.stop()
            }, this.stop = function() {
                this.running && clearTimeout(this.running), this.running = !1
            }, this.getTokens = function(t) {
                return this.lines[t] || this.$tokenizeRow(t)
            }, this.getState = function(t) {
                return this.currentLine == t && this.$tokenizeRow(t), this.states[t] || "start"
            }, this.$tokenizeRow = function(t) {
                var e = this.doc.getLine(t),
                    i = this.tokenizer.getLineTokens(e, this.states[t - 1], t);
                return this.states[t] + "" != i.state + "" ? (this.states[t] = i.state, this.lines[t + 1] = null, this.currentLine > t + 1 && (this.currentLine = t + 1)) : this.currentLine == t && (this.currentLine = t + 1), this.lines[t] = i.tokens
            }
        }).call(r.prototype), e.BackgroundTokenizer = r
    }), define("ace/search_highlight", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(t, e, i) {
        "use strict";
        var n = t("./lib/lang"),
            s = (t("./lib/oop"), t("./range").Range),
            r = function(t, e, i) {
                this.setRegexp(t), this.clazz = e, this.type = i || "text"
            };
        (function() {
            this.MAX_RANGES = 500, this.setRegexp = function(t) {
                this.regExp + "" != t + "" && (this.regExp = t, this.cache = [])
            }, this.update = function(t, e, i, r) {
                if (this.regExp)
                    for (var o = r.lastRow, a = r.firstRow; a <= o; a++) {
                        var l = this.cache[a];
                        null == l && ((l = n.getMatchOffsets(i.getLine(a), this.regExp)).length > this.MAX_RANGES && (l = l.slice(0, this.MAX_RANGES)), l = l.map(function(t) {
                            return new s(a, t.offset, a, t.offset + t.length)
                        }), this.cache[a] = l.length ? l : "");
                        for (var h = l.length; h--;) e.drawSingleLineMarker(t, l[h].toScreenRange(i), this.clazz, r)
                    }
            }
        }).call(r.prototype), e.SearchHighlight = r
    }), define("ace/edit_session/fold_line", ["require", "exports", "module", "ace/range"], function(t, e, i) {
        "use strict";

        function n(t, e) {
            this.foldData = t, Array.isArray(e) ? this.folds = e : e = this.folds = [e];
            var i = e[e.length - 1];
            this.range = new s(e[0].start.row, e[0].start.column, i.end.row, i.end.column), this.start = this.range.start, this.end = this.range.end, this.folds.forEach(function(t) {
                t.setFoldLine(this)
            }, this)
        }
        var s = t("../range").Range;
        (function() {
            this.shiftRow = function(t) {
                this.start.row += t, this.end.row += t, this.folds.forEach(function(e) {
                    e.start.row += t, e.end.row += t
                })
            }, this.addFold = function(t) {
                if (t.sameRow) {
                    if (t.start.row < this.startRow || t.endRow > this.endRow) throw new Error("Can't add a fold to this FoldLine as it has no connection");
                    this.folds.push(t), this.folds.sort(function(t, e) {
                        return -t.range.compareEnd(e.start.row, e.start.column)
                    }), this.range.compareEnd(t.start.row, t.start.column) > 0 ? (this.end.row = t.end.row, this.end.column = t.end.column) : this.range.compareStart(t.end.row, t.end.column) < 0 && (this.start.row = t.start.row, this.start.column = t.start.column)
                } else if (t.start.row == this.end.row) this.folds.push(t), this.end.row = t.end.row, this.end.column = t.end.column;
                else {
                    if (t.end.row != this.start.row) throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                    this.folds.unshift(t), this.start.row = t.start.row, this.start.column = t.start.column
                }
                t.foldLine = this
            }, this.containsRow = function(t) {
                return t >= this.start.row && t <= this.end.row
            }, this.walk = function(t, e, i) {
                var n, s, r = 0,
                    o = this.folds,
                    a = !0;
                null == e && (e = this.end.row, i = this.end.column);
                for (var l = 0; l < o.length; l++) {
                    if (-1 == (s = (n = o[l]).range.compareStart(e, i))) return void t(null, e, i, r, a);
                    if (!t(null, n.start.row, n.start.column, r, a) && t(n.placeholder, n.start.row, n.start.column, r) || 0 === s) return;
                    a = !n.sameRow, r = n.end.column
                }
                t(null, e, i, r, a)
            }, this.getNextFoldTo = function(t, e) {
                for (var i, n, s = 0; s < this.folds.length; s++) {
                    if (-1 == (n = (i = this.folds[s]).range.compareEnd(t, e))) return {
                        fold: i,
                        kind: "after"
                    };
                    if (0 === n) return {
                        fold: i,
                        kind: "inside"
                    }
                }
                return null
            }, this.addRemoveChars = function(t, e, i) {
                var n, s, r = this.getNextFoldTo(t, e);
                if (r)
                    if (n = r.fold, "inside" == r.kind && n.start.column != e && n.start.row != t) window.console && window.console.log(t, e, n);
                    else if (n.start.row == t) {
                    var o = (s = this.folds).indexOf(n);
                    for (0 === o && (this.start.column += i); o < s.length; o++) {
                        if ((n = s[o]).start.column += i, !n.sameRow) return;
                        n.end.column += i
                    }
                    this.end.column += i
                }
            }, this.split = function(t, e) {
                var i = this.getNextFoldTo(t, e);
                if (!i || "inside" == i.kind) return null;
                var s = this.folds,
                    r = this.foldData,
                    o = s.indexOf(i.fold),
                    a = s[o - 1];
                this.end.row = a.end.row, this.end.column = a.end.column;
                var l = new n(r, s = s.splice(o, s.length - o));
                return r.splice(r.indexOf(this) + 1, 0, l), l
            }, this.merge = function(t) {
                for (var e = t.folds, i = 0; i < e.length; i++) this.addFold(e[i]);
                var n = this.foldData;
                n.splice(n.indexOf(t), 1)
            }, this.toString = function() {
                var t = [this.range.toString() + ": ["];
                return this.folds.forEach(function(e) {
                    t.push("  " + e.toString())
                }), t.push("]"), t.join("\n")
            }, this.idxToPosition = function(t) {
                for (var e = 0, i = 0; i < this.folds.length; i++) {
                    var n = this.folds[i];
                    if ((t -= n.start.column - e) < 0) return {
                        row: n.start.row,
                        column: n.start.column + t
                    };
                    if ((t -= n.placeholder.length) < 0) return n.start;
                    e = n.end.column
                }
                return {
                    row: this.end.row,
                    column: this.end.column + t
                }
            }
        }).call(n.prototype), e.FoldLine = n
    }), define("ace/range_list", ["require", "exports", "module", "ace/range"], function(t, e, i) {
        "use strict";
        var n = t("./range").Range.comparePoints,
            s = function() {
                this.ranges = []
            };
        (function() {
            this.comparePoints = n, this.pointIndex = function(t, e, i) {
                for (var s = this.ranges, r = i || 0; r < s.length; r++) {
                    var o = s[r],
                        a = n(t, o.end);
                    if (!(a > 0)) {
                        var l = n(t, o.start);
                        return 0 === a ? e && 0 !== l ? -r - 2 : r : l > 0 || 0 === l && !e ? r : -r - 1
                    }
                }
                return -r - 1
            }, this.add = function(t) {
                var e = !t.isEmpty(),
                    i = this.pointIndex(t.start, e);
                i < 0 && (i = -i - 1);
                var n = this.pointIndex(t.end, e, i);
                return n < 0 ? n = -n - 1 : n++, this.ranges.splice(i, n - i, t)
            }, this.addList = function(t) {
                for (var e = [], i = t.length; i--;) e.push.apply(e, this.add(t[i]));
                return e
            }, this.substractPoint = function(t) {
                var e = this.pointIndex(t);
                if (e >= 0) return this.ranges.splice(e, 1)
            }, this.merge = function() {
                for (var t, e = [], i = this.ranges, s = (i = i.sort(function(t, e) {
                        return n(t.start, e.start)
                    }))[0], r = 1; r < i.length; r++) {
                    var o = n((t = s).end, (s = i[r]).start);
                    o < 0 || (0 != o || t.isEmpty() || s.isEmpty()) && (n(t.end, s.end) < 0 && (t.end.row = s.end.row, t.end.column = s.end.column), i.splice(r, 1), e.push(s), s = t, r--)
                }
                return this.ranges = i, e
            }, this.contains = function(t, e) {
                return this.pointIndex({
                    row: t,
                    column: e
                }) >= 0
            }, this.containsPoint = function(t) {
                return this.pointIndex(t) >= 0
            }, this.rangeAtPoint = function(t) {
                var e = this.pointIndex(t);
                if (e >= 0) return this.ranges[e]
            }, this.clipRows = function(t, e) {
                var i = this.ranges;
                if (i[0].start.row > e || i[i.length - 1].start.row < t) return [];
                var n = this.pointIndex({
                    row: t,
                    column: 0
                });
                n < 0 && (n = -n - 1);
                var s = this.pointIndex({
                    row: e,
                    column: 0
                }, n);
                s < 0 && (s = -s - 1);
                for (var r = [], o = n; o < s; o++) r.push(i[o]);
                return r
            }, this.removeAll = function() {
                return this.ranges.splice(0, this.ranges.length)
            }, this.attach = function(t) {
                this.session && this.detach(), this.session = t, this.onChange = this.$onChange.bind(this), this.session.on("change", this.onChange)
            }, this.detach = function() {
                this.session && (this.session.removeListener("change", this.onChange), this.session = null)
            }, this.$onChange = function(t) {
                for (var e = t.start, i = t.end, n = e.row, s = i.row, r = this.ranges, o = 0, a = r.length; o < a && !((c = r[o]).end.row >= n); o++);
                if ("insert" == t.action) {
                    for (var l = s - n, h = -e.column + i.column; o < a && !((c = r[o]).start.row > n); o++)
                        if (c.start.row == n && c.start.column >= e.column && (c.start.column != e.column || !this.$insertRight) && (c.start.column += h, c.start.row += l), c.end.row == n && c.end.column >= e.column) {
                            if (c.end.column == e.column && this.$insertRight) continue;
                            c.end.column == e.column && h > 0 && o < a - 1 && c.end.column > c.start.column && c.end.column == r[o + 1].start.column && (c.end.column -= h), c.end.column += h, c.end.row += l
                        }
                } else
                    for (l = n - s, h = e.column - i.column; o < a && !((c = r[o]).start.row > s); o++) c.end.row < s && (c.end.row = n, c.end.column = e.column), (c.start.row < s || c.start.row == s && c.start.column <= i.colum) && (c.start.row = n, c.start.column = e.column), c.end.row == s && (c.end.column <= i.column ? (l || c.end.column > e.column) && (c.end.column = e.column, c.end.row = e.row) : (c.end.column += h, c.end.row += l)), c.start.row == s && (c.start.column <= i.column ? (l || c.start.column > e.column) && (c.start.column = e.column, c.start.row = e.row) : (c.start.column += h, c.start.row += l));
                if (0 != l && o < a)
                    for (; o < a; o++) {
                        var c;
                        (c = r[o]).start.row += l, c.end.row += l
                    }
            }
        }).call(s.prototype), e.RangeList = s
    }), define("ace/edit_session/fold", ["require", "exports", "module", "ace/range", "ace/range_list", "ace/lib/oop"], function(t, e, i) {
        "use strict";

        function n(t, e) {
            t.row -= e.row, 0 == t.row && (t.column -= e.column)
        }

        function s(t, e) {
            0 == t.row && (t.column += e.column), t.row += e.row
        }
        t("../range");
        var r = t("../range_list").RangeList,
            o = t("../lib/oop"),
            a = e.Fold = function(t, e) {
                this.foldLine = null, this.placeholder = e, this.range = t, this.start = t.start, this.end = t.end, this.sameRow = t.start.row == t.end.row, this.subFolds = this.ranges = []
            };
        o.inherits(a, r), (function() {
            this.toString = function() {
                return '"' + this.placeholder + '" ' + this.range.toString()
            }, this.setFoldLine = function(t) {
                this.foldLine = t, this.subFolds.forEach(function(e) {
                    e.setFoldLine(t)
                })
            }, this.clone = function() {
                var t = this.range.clone(),
                    e = new a(t, this.placeholder);
                return this.subFolds.forEach(function(t) {
                    e.subFolds.push(t.clone())
                }), e.collapseChildren = this.collapseChildren, e
            }, this.addSubFold = function(t) {
                if (!this.range.isEqual(t)) {
                    if (!this.range.containsRange(t)) throw new Error("A fold can't intersect already existing fold" + t.range + this.range);
                    ! function(t, e) {
                        n(t.start, e), n(t.end, e)
                    }(t, this.start);
                    for (var e = t.start.row, i = t.start.column, s = 0, r = -1; s < this.subFolds.length && 1 == (r = this.subFolds[s].range.compare(e, i)); s++);
                    if (0 == r) return this.subFolds[s].addSubFold(t);
                    e = t.range.end.row, i = t.range.end.column;
                    var o = s;
                    for (r = -1; o < this.subFolds.length && 1 == (r = this.subFolds[o].range.compare(e, i)); o++);
                    if (0 == r) throw new Error("A fold can't intersect already existing fold" + t.range + this.range);
                    return this.subFolds.splice(s, o - s, t), t.setFoldLine(this.foldLine), t
                }
            }, this.restoreRange = function(t) {
                return function(t, e) {
                    s(t.start, e), s(t.end, e)
                }(t, this.start)
            }
        }).call(a.prototype)
    }), define("ace/edit_session/folding", ["require", "exports", "module", "ace/range", "ace/edit_session/fold_line", "ace/edit_session/fold", "ace/token_iterator"], function(t, e, i) {
        "use strict";
        var n = t("../range").Range,
            s = t("./fold_line").FoldLine,
            r = t("./fold").Fold,
            o = t("../token_iterator").TokenIterator;
        e.Folding = function() {
            this.getFoldAt = function(t, e, i) {
                var n = this.getFoldLine(t);
                if (!n) return null;
                for (var s = n.folds, r = 0; r < s.length; r++) {
                    var o = s[r];
                    if (o.range.contains(t, e)) {
                        if (1 == i && o.range.isEnd(t, e)) continue;
                        if (-1 == i && o.range.isStart(t, e)) continue;
                        return o
                    }
                }
            }, this.getFoldsInRange = function(t) {
                var e = t.start,
                    i = t.end,
                    n = this.$foldData,
                    s = [];
                e.column += 1, i.column -= 1;
                for (var r = 0; r < n.length; r++) {
                    var o = n[r].range.compareRange(t);
                    if (2 != o) {
                        if (-2 == o) break;
                        for (var a = n[r].folds, l = 0; l < a.length; l++) {
                            var h = a[l];
                            if (-2 == (o = h.range.compareRange(t))) break;
                            if (2 != o) {
                                if (42 == o) break;
                                s.push(h)
                            }
                        }
                    }
                }
                return e.column -= 1, i.column += 1, s
            }, this.getFoldsInRangeList = function(t) {
                if (Array.isArray(t)) {
                    var e = [];
                    t.forEach(function(t) {
                        e = e.concat(this.getFoldsInRange(t))
                    }, this)
                } else e = this.getFoldsInRange(t);
                return e
            }, this.getAllFolds = function() {
                for (var t = [], e = this.$foldData, i = 0; i < e.length; i++)
                    for (var n = 0; n < e[i].folds.length; n++) t.push(e[i].folds[n]);
                return t
            }, this.getFoldStringAt = function(t, e, i, n) {
                if (!(n = n || this.getFoldLine(t))) return null;
                for (var s, r, o = {
                        end: {
                            column: 0
                        }
                    }, a = 0; a < n.folds.length; a++) {
                    var l = (r = n.folds[a]).range.compareEnd(t, e);
                    if (-1 == l) {
                        s = this.getLine(r.start.row).substring(o.end.column, r.start.column);
                        break
                    }
                    if (0 === l) return null;
                    o = r
                }
                return s || (s = this.getLine(r.start.row).substring(o.end.column)), -1 == i ? s.substring(0, e - o.end.column) : 1 == i ? s.substring(e - o.end.column) : s
            }, this.getFoldLine = function(t, e) {
                var i = this.$foldData,
                    n = 0;
                for (e && (n = i.indexOf(e)), -1 == n && (n = 0); n < i.length; n++) {
                    var s = i[n];
                    if (s.start.row <= t && s.end.row >= t) return s;
                    if (s.end.row > t) return null
                }
                return null
            }, this.getNextFoldLine = function(t, e) {
                var i = this.$foldData,
                    n = 0;
                for (e && (n = i.indexOf(e)), -1 == n && (n = 0); n < i.length; n++) {
                    var s = i[n];
                    if (s.end.row >= t) return s
                }
                return null
            }, this.getFoldedRowCount = function(t, e) {
                for (var i = this.$foldData, n = e - t + 1, s = 0; s < i.length; s++) {
                    var r = i[s],
                        o = r.end.row,
                        a = r.start.row;
                    if (o >= e) {
                        a < e && (a >= t ? n -= e - a : n = 0);
                        break
                    }
                    o >= t && (n -= a >= t ? o - a : o - t + 1)
                }
                return n
            }, this.$addFoldLine = function(t) {
                return this.$foldData.push(t), this.$foldData.sort(function(t, e) {
                    return t.start.row - e.start.row
                }), t
            }, this.addFold = function(t, e) {
                var i, n = this.$foldData,
                    o = !1;
                t instanceof r ? i = t : (i = new r(e, t)).collapseChildren = e.collapseChildren, this.$clipRangeToDocument(i.range);
                var a = i.start.row,
                    l = i.start.column,
                    h = i.end.row,
                    c = i.end.column;
                if (a < h || a == h && l <= c - 2) {
                    var u = this.getFoldAt(a, l, 1),
                        d = this.getFoldAt(h, c, -1);
                    if (u && d == u) return u.addSubFold(i);
                    u && !u.range.isStart(a, l) && this.removeFold(u), d && !d.range.isEnd(h, c) && this.removeFold(d);
                    var f = this.getFoldsInRange(i.range);
                    f.length > 0 && (this.removeFolds(f), f.forEach(function(t) {
                        i.addSubFold(t)
                    }));
                    for (var g = 0; g < n.length; g++) {
                        var m = n[g];
                        if (h == m.start.row) {
                            m.addFold(i), o = !0;
                            break
                        }
                        if (a == m.end.row) {
                            if (m.addFold(i), o = !0, !i.sameRow) {
                                var p = n[g + 1];
                                if (p && p.start.row == h) {
                                    m.merge(p);
                                    break
                                }
                            }
                            break
                        }
                        if (h <= m.start.row) break
                    }
                    return o || (m = this.$addFoldLine(new s(this.$foldData, i))), this.$useWrapMode ? this.$updateWrapData(m.start.row, m.start.row) : this.$updateRowLengthCache(m.start.row, m.start.row), this.$modified = !0, this._signal("changeFold", {
                        data: i,
                        action: "add"
                    }), i
                }
                throw new Error("The range has to be at least 2 characters width")
            }, this.addFolds = function(t) {
                t.forEach(function(t) {
                    this.addFold(t)
                }, this)
            }, this.removeFold = function(t) {
                var e = t.foldLine,
                    i = e.start.row,
                    n = e.end.row,
                    s = this.$foldData,
                    r = e.folds;
                if (1 == r.length) s.splice(s.indexOf(e), 1);
                else if (e.range.isEnd(t.end.row, t.end.column)) r.pop(), e.end.row = r[r.length - 1].end.row, e.end.column = r[r.length - 1].end.column;
                else if (e.range.isStart(t.start.row, t.start.column)) r.shift(), e.start.row = r[0].start.row, e.start.column = r[0].start.column;
                else if (t.sameRow) r.splice(r.indexOf(t), 1);
                else {
                    var o = e.split(t.start.row, t.start.column);
                    (r = o.folds).shift(), o.start.row = r[0].start.row, o.start.column = r[0].start.column
                }
                this.$updating || (this.$useWrapMode ? this.$updateWrapData(i, n) : this.$updateRowLengthCache(i, n)), this.$modified = !0, this._signal("changeFold", {
                    data: t,
                    action: "remove"
                })
            }, this.removeFolds = function(t) {
                for (var e = [], i = 0; i < t.length; i++) e.push(t[i]);
                e.forEach(function(t) {
                    this.removeFold(t)
                }, this), this.$modified = !0
            }, this.expandFold = function(t) {
                this.removeFold(t), t.subFolds.forEach(function(e) {
                    t.restoreRange(e), this.addFold(e)
                }, this), t.collapseChildren > 0 && this.foldAll(t.start.row + 1, t.end.row, t.collapseChildren - 1), t.subFolds = []
            }, this.expandFolds = function(t) {
                t.forEach(function(t) {
                    this.expandFold(t)
                }, this)
            }, this.unfold = function(t, e) {
                var i, s;
                if (null == t ? (i = new n(0, 0, this.getLength(), 0), e = !0) : i = "number" == typeof t ? new n(t, 0, t, this.getLine(t).length) : "row" in t ? n.fromPoints(t, t) : t, s = this.getFoldsInRangeList(i), e) this.removeFolds(s);
                else
                    for (var r = s; r.length;) this.expandFolds(r), r = this.getFoldsInRangeList(i);
                if (s.length) return s
            }, this.isRowFolded = function(t, e) {
                return !!this.getFoldLine(t, e)
            }, this.getRowFoldEnd = function(t, e) {
                var i = this.getFoldLine(t, e);
                return i ? i.end.row : t
            }, this.getRowFoldStart = function(t, e) {
                var i = this.getFoldLine(t, e);
                return i ? i.start.row : t
            }, this.getFoldDisplayLine = function(t, e, i, n, s) {
                null == n && (n = t.start.row), null == s && (s = 0), null == e && (e = t.end.row), null == i && (i = this.getLine(e).length);
                var r = this.doc,
                    o = "";
                return t.walk(function(t, e, i, a) {
                    if (!(e < n)) {
                        if (e == n) {
                            if (i < s) return;
                            a = Math.max(s, a)
                        }
                        o += null != t ? t : r.getLine(e).substring(a, i)
                    }
                }, e, i), o
            }, this.getDisplayLine = function(t, e, i, n) {
                var s, r = this.getFoldLine(t);
                return r ? this.getFoldDisplayLine(r, t, e, i, n) : (s = this.doc.getLine(t)).substring(n || 0, e || s.length)
            }, this.$cloneFoldData = function() {
                var t = [];
                return t = this.$foldData.map(function(e) {
                    var i = e.folds.map(function(t) {
                        return t.clone()
                    });
                    return new s(t, i)
                })
            }, this.toggleFold = function(t) {
                var e, i, n = this.selection.getRange();
                if (n.isEmpty()) {
                    var s = n.start;
                    if (e = this.getFoldAt(s.row, s.column)) return void this.expandFold(e);
                    (i = this.findMatchingBracket(s)) ? 1 == n.comparePoint(i) ? n.end = i : (n.start = i, n.start.column++, n.end.column--): (i = this.findMatchingBracket({
                        row: s.row,
                        column: s.column + 1
                    })) ? (1 == n.comparePoint(i) ? n.end = i : n.start = i, n.start.column++) : n = this.getCommentFoldRange(s.row, s.column) || n
                } else {
                    var r = this.getFoldsInRange(n);
                    if (t && r.length) return void this.expandFolds(r);
                    1 == r.length && (e = r[0])
                }
                if (e || (e = this.getFoldAt(n.start.row, n.start.column)), e && e.range.toString() == n.toString()) this.expandFold(e);
                else {
                    var o = "...";
                    if (!n.isMultiLine()) {
                        if ((o = this.getTextRange(n)).length < 4) return;
                        o = o.trim().substring(0, 2) + ".."
                    }
                    this.addFold(o, n)
                }
            }, this.getCommentFoldRange = function(t, e, i) {
                var s = new o(this, t, e),
                    r = s.getCurrentToken(),
                    a = r.type;
                if (r && /^comment|string/.test(a)) {
                    "comment" == (a = a.match(/comment|string/)[0]) && (a += "|doc-start");
                    var l = new RegExp(a),
                        h = new n;
                    if (1 != i) {
                        do {
                            r = s.stepBackward()
                        } while (r && l.test(r.type));
                        s.stepForward()
                    }
                    if (h.start.row = s.getCurrentTokenRow(), h.start.column = s.getCurrentTokenColumn() + 2, s = new o(this, t, e), -1 != i) {
                        var c = -1;
                        do {
                            if (r = s.stepForward(), -1 == c) {
                                var u = this.getState(s.$row);
                                l.test(u) || (c = s.$row)
                            } else if (s.$row > c) break
                        } while (r && l.test(r.type));
                        r = s.stepBackward()
                    } else r = s.getCurrentToken();
                    return h.end.row = s.getCurrentTokenRow(), h.end.column = s.getCurrentTokenColumn() + r.value.length - 2, h
                }
            }, this.foldAll = function(t, e, i) {
                void 0 == i && (i = 1e5);
                var n = this.foldWidgets;
                if (n) {
                    e = e || this.getLength();
                    for (var s = t = t || 0; s < e; s++)
                        if (null == n[s] && (n[s] = this.getFoldWidget(s)), "start" == n[s]) {
                            var r = this.getFoldWidgetRange(s);
                            if (r && r.isMultiLine() && r.end.row <= e && r.start.row >= t) {
                                s = r.end.row;
                                try {
                                    var o = this.addFold("...", r);
                                    o && (o.collapseChildren = i)
                                } catch (t) {}
                            }
                        }
                }
            }, this.$foldStyles = {
                manual: 1,
                markbegin: 1,
                markbeginend: 1
            }, this.$foldStyle = "markbegin", this.setFoldStyle = function(t) {
                if (!this.$foldStyles[t]) throw new Error("invalid fold style: " + t + "[" + Object.keys(this.$foldStyles).join(", ") + "]");
                if (this.$foldStyle != t) {
                    this.$foldStyle = t, "manual" == t && this.unfold();
                    var e = this.$foldMode;
                    this.$setFolding(null), this.$setFolding(e)
                }
            }, this.$setFolding = function(t) {
                this.$foldMode != t && (this.$foldMode = t, this.off("change", this.$updateFoldWidgets), this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets), this._signal("changeAnnotation"), t && "manual" != this.$foldStyle ? (this.foldWidgets = [], this.getFoldWidget = t.getFoldWidget.bind(t, this, this.$foldStyle), this.getFoldWidgetRange = t.getFoldWidgetRange.bind(t, this, this.$foldStyle), this.$updateFoldWidgets = this.updateFoldWidgets.bind(this), this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this), this.on("change", this.$updateFoldWidgets), this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets)) : this.foldWidgets = null)
            }, this.getParentFoldRangeData = function(t, e) {
                var i = this.foldWidgets;
                if (!i || e && i[t]) return {};
                for (var n, s = t - 1; s >= 0;) {
                    var r = i[s];
                    if (null == r && (r = i[s] = this.getFoldWidget(s)), "start" == r) {
                        var o = this.getFoldWidgetRange(s);
                        if (n || (n = o), o && o.end.row >= t) break
                    }
                    s--
                }
                return {
                    range: -1 !== s && o,
                    firstRange: n
                }
            }, this.onFoldWidgetClick = function(t, e) {
                if (!this.$toggleFoldWidget(t, {
                        children: (e = e.domEvent).shiftKey,
                        all: e.ctrlKey || e.metaKey,
                        siblings: e.altKey
                    })) {
                    var i = e.target || e.srcElement;
                    i && /ace_fold-widget/.test(i.className) && (i.className += " ace_invalid")
                }
            }, this.$toggleFoldWidget = function(t, e) {
                if (this.getFoldWidget) {
                    var i = this.getFoldWidget(t),
                        n = this.getLine(t),
                        s = "end" === i ? -1 : 1,
                        r = this.getFoldAt(t, -1 === s ? 0 : n.length, s);
                    if (r) return e.children || e.all ? this.removeFold(r) : this.expandFold(r), r;
                    var o = this.getFoldWidgetRange(t, !0);
                    if (o && !o.isMultiLine() && (r = this.getFoldAt(o.start.row, o.start.column, 1)) && o.isEqual(r.range)) return this.removeFold(r), r;
                    if (e.siblings) {
                        var a = this.getParentFoldRangeData(t);
                        if (a.range) var l = a.range.start.row + 1,
                            h = a.range.end.row;
                        this.foldAll(l, h, e.all ? 1e4 : 0)
                    } else e.children ? (h = o ? o.end.row : this.getLength(), this.foldAll(t + 1, h, e.all ? 1e4 : 0)) : o && (e.all && (o.collapseChildren = 1e4), this.addFold("...", o));
                    return o
                }
            }, this.toggleFoldWidget = function(t) {
                var e = this.selection.getCursor().row;
                e = this.getRowFoldStart(e);
                var i = this.$toggleFoldWidget(e, {});
                if (!i) {
                    var n = this.getParentFoldRangeData(e, !0);
                    if (i = n.range || n.firstRange) {
                        var s = this.getFoldAt(e = i.start.row, this.getLine(e).length, 1);
                        s ? this.removeFold(s) : this.addFold("...", i)
                    }
                }
            }, this.updateFoldWidgets = function(t) {
                var e = t.start.row,
                    i = t.end.row - e;
                if (0 === i) this.foldWidgets[e] = null;
                else if ("remove" == t.action) this.foldWidgets.splice(e, i + 1, null);
                else {
                    var n = Array(i + 1);
                    n.unshift(e, 1), this.foldWidgets.splice.apply(this.foldWidgets, n)
                }
            }, this.tokenizerUpdateFoldWidgets = function(t) {
                var e = t.data;
                e.first != e.last && this.foldWidgets.length > e.first && this.foldWidgets.splice(e.first, this.foldWidgets.length)
            }
        }
    }), define("ace/edit_session/bracket_match", ["require", "exports", "module", "ace/token_iterator", "ace/range"], function(t, e, i) {
        "use strict";
        var n = t("../token_iterator").TokenIterator,
            s = t("../range").Range;
        e.BracketMatch = function() {
            this.findMatchingBracket = function(t, e) {
                if (0 == t.column) return null;
                var i = e || this.getLine(t.row).charAt(t.column - 1);
                if ("" == i) return null;
                var n = i.match(/([\(\[\{])|([\)\]\}])/);
                return n ? n[1] ? this.$findClosingBracket(n[1], t) : this.$findOpeningBracket(n[2], t) : null
            }, this.getBracketRange = function(t) {
                var e, i = this.getLine(t.row),
                    n = !0,
                    r = i.charAt(t.column - 1),
                    o = r && r.match(/([\(\[\{])|([\)\]\}])/);
                if (o || (r = i.charAt(t.column), t = {
                        row: t.row,
                        column: t.column + 1
                    }, o = r && r.match(/([\(\[\{])|([\)\]\}])/), n = !1), !o) return null;
                if (o[1]) {
                    if (!(a = this.$findClosingBracket(o[1], t))) return null;
                    e = s.fromPoints(t, a), n || (e.end.column++, e.start.column--), e.cursor = e.end
                } else {
                    var a;
                    if (!(a = this.$findOpeningBracket(o[2], t))) return null;
                    e = s.fromPoints(a, t), n || (e.start.column++, e.end.column--), e.cursor = e.start
                }
                return e
            }, this.$brackets = {
                ")": "(",
                "(": ")",
                "]": "[",
                "[": "]",
                "{": "}",
                "}": "{"
            }, this.$findOpeningBracket = function(t, e, i) {
                var s = this.$brackets[t],
                    r = 1,
                    o = new n(this, e.row, e.column),
                    a = o.getCurrentToken();
                if (a || (a = o.stepForward()), a) {
                    i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)") + ")+"));
                    for (var l = e.column - o.getCurrentTokenColumn() - 2, h = a.value;;) {
                        for (; l >= 0;) {
                            var c = h.charAt(l);
                            if (c == s) {
                                if (0 == (r -= 1)) return {
                                    row: o.getCurrentTokenRow(),
                                    column: l + o.getCurrentTokenColumn()
                                }
                            } else c == t && (r += 1);
                            l -= 1
                        }
                        do {
                            a = o.stepBackward()
                        } while (a && !i.test(a.type));
                        if (null == a) break;
                        l = (h = a.value).length - 1
                    }
                    return null
                }
            }, this.$findClosingBracket = function(t, e, i) {
                var s = this.$brackets[t],
                    r = 1,
                    o = new n(this, e.row, e.column),
                    a = o.getCurrentToken();
                if (a || (a = o.stepForward()), a) {
                    i || (i = new RegExp("(\\.?" + a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)") + ")+"));
                    for (var l = e.column - o.getCurrentTokenColumn();;) {
                        for (var h = a.value, c = h.length; l < c;) {
                            var u = h.charAt(l);
                            if (u == s) {
                                if (0 == (r -= 1)) return {
                                    row: o.getCurrentTokenRow(),
                                    column: l + o.getCurrentTokenColumn()
                                }
                            } else u == t && (r += 1);
                            l += 1
                        }
                        do {
                            a = o.stepForward()
                        } while (a && !i.test(a.type));
                        if (null == a) break;
                        l = 0
                    }
                    return null
                }
            }
        }
    }), define("ace/edit_session", ["require", "exports", "module", "ace/lib/oop", "ace/lib/lang", "ace/bidihandler", "ace/config", "ace/lib/event_emitter", "ace/selection", "ace/mode/text", "ace/range", "ace/document", "ace/background_tokenizer", "ace/search_highlight", "ace/edit_session/folding", "ace/edit_session/bracket_match"], function(t, e, i) {
        "use strict";
        var n = t("./lib/oop"),
            s = t("./lib/lang"),
            r = t("./bidihandler").BidiHandler,
            o = t("./config"),
            a = t("./lib/event_emitter").EventEmitter,
            l = t("./selection").Selection,
            h = t("./mode/text").Mode,
            c = t("./range").Range,
            u = t("./document").Document,
            d = t("./background_tokenizer").BackgroundTokenizer,
            f = t("./search_highlight").SearchHighlight,
            g = function(t, e) {
                this.$breakpoints = [], this.$decorations = [], this.$frontMarkers = {}, this.$backMarkers = {}, this.$markerId = 1, this.$undoSelect = !0, this.$foldData = [], this.id = "session" + ++g.$uid, this.$foldData.toString = function() {
                    return this.join("\n")
                }, this.on("changeFold", this.onChangeFold.bind(this)), this.$onChange = this.onChange.bind(this), "object" == typeof t && t.getLine || (t = new u(t)), this.setDocument(t), this.selection = new l(this), this.$bidiHandler = new r(this), o.resetOptions(this), this.setMode(e), o._signal("session", this)
            };
        g.$uid = 0, (function() {
            function t(t) {
                return !(t < 4352) && (t >= 4352 && t <= 4447 || t >= 4515 && t <= 4519 || t >= 4602 && t <= 4607 || t >= 9001 && t <= 9002 || t >= 11904 && t <= 11929 || t >= 11931 && t <= 12019 || t >= 12032 && t <= 12245 || t >= 12272 && t <= 12283 || t >= 12288 && t <= 12350 || t >= 12353 && t <= 12438 || t >= 12441 && t <= 12543 || t >= 12549 && t <= 12589 || t >= 12593 && t <= 12686 || t >= 12688 && t <= 12730 || t >= 12736 && t <= 12771 || t >= 12784 && t <= 12830 || t >= 12832 && t <= 12871 || t >= 12880 && t <= 13054 || t >= 13056 && t <= 19903 || t >= 19968 && t <= 42124 || t >= 42128 && t <= 42182 || t >= 43360 && t <= 43388 || t >= 44032 && t <= 55203 || t >= 55216 && t <= 55238 || t >= 55243 && t <= 55291 || t >= 63744 && t <= 64255 || t >= 65040 && t <= 65049 || t >= 65072 && t <= 65106 || t >= 65108 && t <= 65126 || t >= 65128 && t <= 65131 || t >= 65281 && t <= 65376 || t >= 65504 && t <= 65510)
            }
            n.implement(this, a), this.setDocument = function(t) {
                this.doc && this.doc.removeListener("change", this.$onChange), this.doc = t, t.on("change", this.$onChange), this.bgTokenizer && this.bgTokenizer.setDocument(this.getDocument()), this.resetCaches()
            }, this.getDocument = function() {
                return this.doc
            }, this.$resetRowCache = function(t) {
                if (!t) return this.$docRowCache = [], void(this.$screenRowCache = []);
                var e = this.$docRowCache.length,
                    i = this.$getRowCacheIndex(this.$docRowCache, t) + 1;
                e > i && (this.$docRowCache.splice(i, e), this.$screenRowCache.splice(i, e))
            }, this.$getRowCacheIndex = function(t, e) {
                for (var i = 0, n = t.length - 1; i <= n;) {
                    var s = i + n >> 1,
                        r = t[s];
                    if (e > r) i = s + 1;
                    else {
                        if (!(e < r)) return s;
                        n = s - 1
                    }
                }
                return i - 1
            }, this.resetCaches = function() {
                this.$modified = !0, this.$wrapData = [], this.$rowLengthCache = [], this.$resetRowCache(0), this.bgTokenizer && this.bgTokenizer.start(0)
            }, this.onChangeFold = function(t) {
                this.$resetRowCache(t.data.start.row)
            }, this.onChange = function(t) {
                this.$modified = !0, this.$bidiHandler.onChange(t), this.$resetRowCache(t.start.row);
                var e = this.$updateInternalDataOnChange(t);
                !this.$fromUndo && this.$undoManager && (e && e.length && (this.$undoManager.add({
                    action: "removeFolds",
                    folds: e
                }, this.mergeUndoDeltas), this.mergeUndoDeltas = !0), this.$undoManager.add(t, this.mergeUndoDeltas), this.mergeUndoDeltas = !0, this.$informUndoManager.schedule()), this.bgTokenizer && this.bgTokenizer.$updateOnChange(t), this._signal("change", t)
            }, this.setValue = function(t) {
                this.doc.setValue(t), this.selection.moveTo(0, 0), this.$resetRowCache(0), this.setUndoManager(this.$undoManager), this.getUndoManager().reset()
            }, this.getValue = this.toString = function() {
                return this.doc.getValue()
            }, this.getSelection = function() {
                return this.selection
            }, this.getState = function(t) {
                return this.bgTokenizer.getState(t)
            }, this.getTokens = function(t) {
                return this.bgTokenizer.getTokens(t)
            }, this.getTokenAt = function(t, e) {
                var i, n = this.bgTokenizer.getTokens(t),
                    s = 0;
                if (null == e) {
                    var r = n.length - 1;
                    s = this.getLine(t).length
                } else
                    for (r = 0; r < n.length && !((s += n[r].value.length) >= e); r++);
                return (i = n[r]) ? (i.index = r, i.start = s - i.value.length, i) : null
            }, this.setUndoManager = function(t) {
                if (this.$undoManager = t, this.$informUndoManager && this.$informUndoManager.cancel(), t) {
                    var e = this;
                    t.addSession(this), this.$syncInformUndoManager = function() {
                        e.$informUndoManager.cancel(), e.mergeUndoDeltas = !1
                    }, this.$informUndoManager = s.delayedCall(this.$syncInformUndoManager)
                } else this.$syncInformUndoManager = function() {}
            }, this.markUndoGroup = function() {
                this.$syncInformUndoManager && this.$syncInformUndoManager()
            }, this.$defaultUndoManager = {
                undo: function() {},
                redo: function() {},
                reset: function() {},
                add: function() {},
                addSelection: function() {},
                startNewGroup: function() {},
                addSession: function() {}
            }, this.getUndoManager = function() {
                return this.$undoManager || this.$defaultUndoManager
            }, this.getTabString = function() {
                return this.getUseSoftTabs() ? s.stringRepeat(" ", this.getTabSize()) : "\t"
            }, this.setUseSoftTabs = function(t) {
                this.setOption("useSoftTabs", t)
            }, this.getUseSoftTabs = function() {
                return this.$useSoftTabs && !this.$mode.$indentWithTabs
            }, this.setTabSize = function(t) {
                this.setOption("tabSize", t)
            }, this.getTabSize = function() {
                return this.$tabSize
            }, this.isTabStop = function(t) {
                return this.$useSoftTabs && t.column % this.$tabSize == 0
            }, this.setNavigateWithinSoftTabs = function(t) {
                this.setOption("navigateWithinSoftTabs", t)
            }, this.getNavigateWithinSoftTabs = function() {
                return this.$navigateWithinSoftTabs
            }, this.$overwrite = !1, this.setOverwrite = function(t) {
                this.setOption("overwrite", t)
            }, this.getOverwrite = function() {
                return this.$overwrite
            }, this.toggleOverwrite = function() {
                this.setOverwrite(!this.$overwrite)
            }, this.addGutterDecoration = function(t, e) {
                this.$decorations[t] || (this.$decorations[t] = ""), this.$decorations[t] += " " + e, this._signal("changeBreakpoint", {})
            }, this.removeGutterDecoration = function(t, e) {
                this.$decorations[t] = (this.$decorations[t] || "").replace(" " + e, ""), this._signal("changeBreakpoint", {})
            }, this.getBreakpoints = function() {
                return this.$breakpoints
            }, this.setBreakpoints = function(t) {
                this.$breakpoints = [];
                for (var e = 0; e < t.length; e++) this.$breakpoints[t[e]] = "ace_breakpoint";
                this._signal("changeBreakpoint", {})
            }, this.clearBreakpoints = function() {
                this.$breakpoints = [], this._signal("changeBreakpoint", {})
            }, this.setBreakpoint = function(t, e) {
                void 0 === e && (e = "ace_breakpoint"), e ? this.$breakpoints[t] = e : delete this.$breakpoints[t], this._signal("changeBreakpoint", {})
            }, this.clearBreakpoint = function(t) {
                delete this.$breakpoints[t], this._signal("changeBreakpoint", {})
            }, this.addMarker = function(t, e, i, n) {
                var s = this.$markerId++,
                    r = {
                        range: t,
                        type: i || "line",
                        renderer: "function" == typeof i ? i : null,
                        clazz: e,
                        inFront: !!n,
                        id: s
                    };
                return n ? (this.$frontMarkers[s] = r, this._signal("changeFrontMarker")) : (this.$backMarkers[s] = r, this._signal("changeBackMarker")), s
            }, this.addDynamicMarker = function(t, e) {
                if (t.update) {
                    var i = this.$markerId++;
                    return t.id = i, t.inFront = !!e, e ? (this.$frontMarkers[i] = t, this._signal("changeFrontMarker")) : (this.$backMarkers[i] = t, this._signal("changeBackMarker")), t
                }
            }, this.removeMarker = function(t) {
                var e = this.$frontMarkers[t] || this.$backMarkers[t];
                e && (delete(e.inFront ? this.$frontMarkers : this.$backMarkers)[t], this._signal(e.inFront ? "changeFrontMarker" : "changeBackMarker"))
            }, this.getMarkers = function(t) {
                return t ? this.$frontMarkers : this.$backMarkers
            }, this.highlight = function(t) {
                if (!this.$searchHighlight) {
                    var e = new f(null, "ace_selected-word", "text");
                    this.$searchHighlight = this.addDynamicMarker(e)
                }
                this.$searchHighlight.setRegexp(t)
            }, this.highlightLines = function(t, e, i, n) {
                "number" != typeof e && (i = e, e = t), i || (i = "ace_step");
                var s = new c(t, 0, e, 1 / 0);
                return s.id = this.addMarker(s, i, "fullLine", n), s
            }, this.setAnnotations = function(t) {
                this.$annotations = t, this._signal("changeAnnotation", {})
            }, this.getAnnotations = function() {
                return this.$annotations || []
            }, this.clearAnnotations = function() {
                this.setAnnotations([])
            }, this.$detectNewLine = function(t) {
                var e = t.match(/^.*?(\r?\n)/m);
                this.$autoNewLine = e ? e[1] : "\n"
            }, this.getWordRange = function(t, e) {
                var i = this.getLine(t),
                    n = !1;
                if (e > 0 && (n = !!i.charAt(e - 1).match(this.tokenRe)), n || (n = !!i.charAt(e).match(this.tokenRe)), n) var s = this.tokenRe;
                else s = /^\s+$/.test(i.slice(e - 1, e + 1)) ? /\s/ : this.nonTokenRe;
                var r = e;
                if (r > 0) {
                    do {
                        r--
                    } while (r >= 0 && i.charAt(r).match(s));
                    r++
                }
                for (var o = e; o < i.length && i.charAt(o).match(s);) o++;
                return new c(t, r, t, o)
            }, this.getAWordRange = function(t, e) {
                for (var i = this.getWordRange(t, e), n = this.getLine(i.end.row); n.charAt(i.end.column).match(/[ \t]/);) i.end.column += 1;
                return i
            }, this.setNewLineMode = function(t) {
                this.doc.setNewLineMode(t)
            }, this.getNewLineMode = function() {
                return this.doc.getNewLineMode()
            }, this.setUseWorker = function(t) {
                this.setOption("useWorker", t)
            }, this.getUseWorker = function() {
                return this.$useWorker
            }, this.onReloadTokenizer = function(t) {
                this.bgTokenizer.start(t.data.first), this._signal("tokenizerUpdate", t)
            }, this.$modes = o.$modes, this.$mode = null, this.$modeId = null, this.setMode = function(t, e) {
                if (t && "object" == typeof t) {
                    if (t.getTokenizer) return this.$onChangeMode(t);
                    var i = t,
                        n = t.path
                } else n = t || "ace/mode/text";
                if (this.$modes["ace/mode/text"] || (this.$modes["ace/mode/text"] = new h), this.$modes[n] && !i) return this.$onChangeMode(this.$modes[n]), void(e && e());
                this.$modeId = n, o.loadModule(["mode", n], (function(t) {
                    if (this.$modeId !== n) return e && e();
                    this.$modes[n] && !i ? this.$onChangeMode(this.$modes[n]) : t && t.Mode && (t = new t.Mode(i), i || (this.$modes[n] = t, t.$id = n), this.$onChangeMode(t)), e && e()
                }).bind(this)), this.$mode || this.$onChangeMode(this.$modes["ace/mode/text"], !0)
            }, this.$onChangeMode = function(t, e) {
                if (e || (this.$modeId = t.$id), this.$mode !== t) {
                    this.$mode = t, this.$stopWorker(), this.$useWorker && this.$startWorker();
                    var i = t.getTokenizer();
                    if (void 0 !== i.addEventListener) {
                        var n = this.onReloadTokenizer.bind(this);
                        i.addEventListener("update", n)
                    }
                    if (this.bgTokenizer) this.bgTokenizer.setTokenizer(i);
                    else {
                        this.bgTokenizer = new d(i);
                        var s = this;
                        this.bgTokenizer.addEventListener("update", function(t) {
                            s._signal("tokenizerUpdate", t)
                        })
                    }
                    this.bgTokenizer.setDocument(this.getDocument()), this.tokenRe = t.tokenRe, this.nonTokenRe = t.nonTokenRe, e || (t.attachToSession && t.attachToSession(this), this.$options.wrapMethod.set.call(this, this.$wrapMethod), this.$setFolding(t.foldingRules), this.bgTokenizer.start(0), this._emit("changeMode"))
                }
            }, this.$stopWorker = function() {
                this.$worker && (this.$worker.terminate(), this.$worker = null)
            }, this.$startWorker = function() {
                try {
                    this.$worker = this.$mode.createWorker(this)
                } catch (t) {
                    o.warn("Could not load worker", t), this.$worker = null
                }
            }, this.getMode = function() {
                return this.$mode
            }, this.$scrollTop = 0, this.setScrollTop = function(t) {
                this.$scrollTop === t || isNaN(t) || (this.$scrollTop = t, this._signal("changeScrollTop", t))
            }, this.getScrollTop = function() {
                return this.$scrollTop
            }, this.$scrollLeft = 0, this.setScrollLeft = function(t) {
                this.$scrollLeft === t || isNaN(t) || (this.$scrollLeft = t, this._signal("changeScrollLeft", t))
            }, this.getScrollLeft = function() {
                return this.$scrollLeft
            }, this.getScreenWidth = function() {
                return this.$computeWidth(), this.lineWidgets ? Math.max(this.getLineWidgetMaxWidth(), this.screenWidth) : this.screenWidth
            }, this.getLineWidgetMaxWidth = function() {
                if (null != this.lineWidgetsWidth) return this.lineWidgetsWidth;
                var t = 0;
                return this.lineWidgets.forEach(function(e) {
                    e && e.screenWidth > t && (t = e.screenWidth)
                }), this.lineWidgetWidth = t
            }, this.$computeWidth = function(t) {
                if (this.$modified || t) {
                    if (this.$modified = !1, this.$useWrapMode) return this.screenWidth = this.$wrapLimit;
                    for (var e = this.doc.getAllLines(), i = this.$rowLengthCache, n = 0, s = 0, r = this.$foldData[s], o = r ? r.start.row : 1 / 0, a = e.length, l = 0; l < a; l++) {
                        if (l > o) {
                            if ((l = r.end.row + 1) >= a) break;
                            o = (r = this.$foldData[s++]) ? r.start.row : 1 / 0
                        }
                        null == i[l] && (i[l] = this.$getStringScreenWidth(e[l])[0]), i[l] > n && (n = i[l])
                    }
                    this.screenWidth = n
                }
            }, this.getLine = function(t) {
                return this.doc.getLine(t)
            }, this.getLines = function(t, e) {
                return this.doc.getLines(t, e)
            }, this.getLength = function() {
                return this.doc.getLength()
            }, this.getTextRange = function(t) {
                return this.doc.getTextRange(t || this.selection.getRange())
            }, this.insert = function(t, e) {
                return this.doc.insert(t, e)
            }, this.remove = function(t) {
                return this.doc.remove(t)
            }, this.removeFullLines = function(t, e) {
                return this.doc.removeFullLines(t, e)
            }, this.undoChanges = function(t, e) {
                if (t.length) {
                    this.$fromUndo = !0;
                    for (var i = t.length - 1; - 1 != i; i--) {
                        var n = t[i];
                        "insert" == n.action || "remove" == n.action ? this.doc.revertDelta(n) : n.folds && this.addFolds(n.folds)
                    }!e && this.$undoSelect && (t.selectionBefore ? this.selection.fromJSON(t.selectionBefore) : this.selection.setRange(this.$getUndoSelection(t, !0))), this.$fromUndo = !1
                }
            }, this.redoChanges = function(t, e) {
                if (t.length) {
                    this.$fromUndo = !0;
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        ("insert" == n.action || "remove" == n.action) && this.doc.applyDelta(n)
                    }!e && this.$undoSelect && (t.selectionAfter ? this.selection.fromJSON(t.selectionAfter) : this.selection.setRange(this.$getUndoSelection(t, !1))), this.$fromUndo = !1
                }
            }, this.setUndoSelect = function(t) {
                this.$undoSelect = t
            }, this.$getUndoSelection = function(t, e) {
                function i(t) {
                    return e ? "insert" !== t.action : "insert" === t.action
                }
                for (var n, s, r = 0; r < t.length; r++) {
                    var o = t[r];
                    o.start && (n ? i(o) ? (-1 == n.compare((s = o.start).row, s.column) && n.setStart(s), 1 == n.compare((s = o.end).row, s.column) && n.setEnd(s)) : -1 == n.compare((s = o.start).row, s.column) && (n = c.fromPoints(o.start, o.start)) : n = i(o) ? c.fromPoints(o.start, o.end) : c.fromPoints(o.start, o.start))
                }
                return n
            }, this.replace = function(t, e) {
                return this.doc.replace(t, e)
            }, this.moveText = function(t, e, i) {
                var n = this.getTextRange(t),
                    s = this.getFoldsInRange(t),
                    r = c.fromPoints(e, e);
                if (i || (this.remove(t), (h = (l = t.start.row - t.end.row) ? -t.end.column : t.start.column - t.end.column) && (r.start.row == t.end.row && r.start.column > t.end.column && (r.start.column += h), r.end.row == t.end.row && r.end.column > t.end.column && (r.end.column += h)), l && r.start.row >= t.end.row && (r.start.row += l, r.end.row += l)), r.end = this.insert(r.start, n), s.length) {
                    var o = t.start,
                        a = r.start,
                        l = a.row - o.row,
                        h = a.column - o.column;
                    this.addFolds(s.map(function(t) {
                        return (t = t.clone()).start.row == o.row && (t.start.column += h), t.end.row == o.row && (t.end.column += h), t.start.row += l, t.end.row += l, t
                    }))
                }
                return r
            }, this.indentRows = function(t, e, i) {
                i = i.replace(/\t/g, this.getTabString());
                for (var n = t; n <= e; n++) this.doc.insertInLine({
                    row: n,
                    column: 0
                }, i)
            }, this.outdentRows = function(t) {
                for (var e = t.collapseRows(), i = new c(0, 0, 0, 0), n = this.getTabSize(), s = e.start.row; s <= e.end.row; ++s) {
                    var r = this.getLine(s);
                    i.start.row = s, i.end.row = s;
                    for (var o = 0; o < n && " " == r.charAt(o); ++o);
                    o < n && "\t" == r.charAt(o) ? (i.start.column = o, i.end.column = o + 1) : (i.start.column = 0, i.end.column = o), this.remove(i)
                }
            }, this.$moveLines = function(t, e, i) {
                if (t = this.getRowFoldStart(t), e = this.getRowFoldEnd(e), i < 0) {
                    if ((s = this.getRowFoldStart(t + i)) < 0) return 0;
                    var n = s - t
                } else if (i > 0) {
                    var s;
                    if ((s = this.getRowFoldEnd(e + i)) > this.doc.getLength() - 1) return 0;
                    n = s - e
                } else t = this.$clipRowToDocument(t), n = (e = this.$clipRowToDocument(e)) - t + 1;
                var r = new c(t, 0, e, Number.MAX_VALUE),
                    o = this.getFoldsInRange(r).map(function(t) {
                        return (t = t.clone()).start.row += n, t.end.row += n, t
                    }),
                    a = 0 == i ? this.doc.getLines(t, e) : this.doc.removeFullLines(t, e);
                return this.doc.insertFullLines(t + n, a), o.length && this.addFolds(o), n
            }, this.moveLinesUp = function(t, e) {
                return this.$moveLines(t, e, -1)
            }, this.moveLinesDown = function(t, e) {
                return this.$moveLines(t, e, 1)
            }, this.duplicateLines = function(t, e) {
                return this.$moveLines(t, e, 0)
            }, this.$clipRowToDocument = function(t) {
                return Math.max(0, Math.min(t, this.doc.getLength() - 1))
            }, this.$clipColumnToRow = function(t, e) {
                return e < 0 ? 0 : Math.min(this.doc.getLine(t).length, e)
            }, this.$clipPositionToDocument = function(t, e) {
                if (e = Math.max(0, e), t < 0) t = 0, e = 0;
                else {
                    var i = this.doc.getLength();
                    t >= i ? (t = i - 1, e = this.doc.getLine(i - 1).length) : e = Math.min(this.doc.getLine(t).length, e)
                }
                return {
                    row: t,
                    column: e
                }
            }, this.$clipRangeToDocument = function(t) {
                t.start.row < 0 ? (t.start.row = 0, t.start.column = 0) : t.start.column = this.$clipColumnToRow(t.start.row, t.start.column);
                var e = this.doc.getLength() - 1;
                return t.end.row > e ? (t.end.row = e, t.end.column = this.doc.getLine(e).length) : t.end.column = this.$clipColumnToRow(t.end.row, t.end.column), t
            }, this.$wrapLimit = 80, this.$useWrapMode = !1, this.$wrapLimitRange = {
                min: null,
                max: null
            }, this.setUseWrapMode = function(t) {
                if (t != this.$useWrapMode) {
                    if (this.$useWrapMode = t, this.$modified = !0, this.$resetRowCache(0), t) {
                        var e = this.getLength();
                        this.$wrapData = Array(e), this.$updateWrapData(0, e - 1)
                    }
                    this._signal("changeWrapMode")
                }
            }, this.getUseWrapMode = function() {
                return this.$useWrapMode
            }, this.setWrapLimitRange = function(t, e) {
                this.$wrapLimitRange.min === t && this.$wrapLimitRange.max === e || (this.$wrapLimitRange = {
                    min: t,
                    max: e
                }, this.$modified = !0, this.$bidiHandler.markAsDirty(), this.$useWrapMode && this._signal("changeWrapMode"))
            }, this.adjustWrapLimit = function(t, e) {
                var i = this.$wrapLimitRange;
                i.max < 0 && (i = {
                    min: e,
                    max: e
                });
                var n = this.$constrainWrapLimit(t, i.min, i.max);
                return n != this.$wrapLimit && n > 1 && (this.$wrapLimit = n, this.$modified = !0, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), !0)
            }, this.$constrainWrapLimit = function(t, e, i) {
                return e && (t = Math.max(e, t)), i && (t = Math.min(i, t)), t
            }, this.getWrapLimit = function() {
                return this.$wrapLimit
            }, this.setWrapLimit = function(t) {
                this.setWrapLimitRange(t, t)
            }, this.getWrapLimitRange = function() {
                return {
                    min: this.$wrapLimitRange.min,
                    max: this.$wrapLimitRange.max
                }
            }, this.$updateInternalDataOnChange = function(t) {
                var e = this.$useWrapMode,
                    i = t.action,
                    n = t.start,
                    s = t.end,
                    r = n.row,
                    o = s.row,
                    a = o - r,
                    l = null;
                if (this.$updating = !0, 0 != a)
                    if ("remove" === i) {
                        this[e ? "$wrapData" : "$rowLengthCache"].splice(r, a);
                        var h = this.$foldData;
                        l = this.getFoldsInRange(t), this.removeFolds(l);
                        var c = 0;
                        if (m = this.getFoldLine(s.row)) {
                            m.addRemoveChars(s.row, s.column, n.column - s.column), m.shiftRow(-a);
                            var u = this.getFoldLine(r);
                            u && u !== m && (u.merge(m), m = u), c = h.indexOf(m) + 1
                        }
                        for (; c < h.length; c++)(m = h[c]).start.row >= s.row && m.shiftRow(-a);
                        o = r
                    } else {
                        var d = Array(a);
                        d.unshift(r, 0);
                        var f = e ? this.$wrapData : this.$rowLengthCache;
                        if (f.splice.apply(f, d), h = this.$foldData, c = 0, m = this.getFoldLine(r)) {
                            var g = m.range.compareInside(n.row, n.column);
                            0 == g ? (m = m.split(n.row, n.column)) && (m.shiftRow(a), m.addRemoveChars(o, 0, s.column - n.column)) : -1 == g && (m.addRemoveChars(r, 0, s.column - n.column), m.shiftRow(a)), c = h.indexOf(m) + 1
                        }
                        for (; c < h.length; c++) {
                            var m;
                            (m = h[c]).start.row >= r && m.shiftRow(a)
                        }
                    }
                else a = Math.abs(t.start.column - t.end.column), "remove" === i && (l = this.getFoldsInRange(t), this.removeFolds(l), a = -a), (m = this.getFoldLine(r)) && m.addRemoveChars(r, n.column, a);
                return e && this.$wrapData.length != this.doc.getLength() && console.error("doc.getLength() and $wrapData.length have to be the same!"), this.$updating = !1, e ? this.$updateWrapData(r, o) : this.$updateRowLengthCache(r, o), l
            }, this.$updateRowLengthCache = function(t, e, i) {
                this.$rowLengthCache[t] = null, this.$rowLengthCache[e] = null
            }, this.$updateWrapData = function(t, n) {
                var s, r, o = this.doc.getAllLines(),
                    a = this.getTabSize(),
                    l = this.$wrapData,
                    h = this.$wrapLimit,
                    c = t;
                for (n = Math.min(n, o.length - 1); c <= n;)(r = this.getFoldLine(c, r)) ? (s = [], r.walk((function(t, n, r, a) {
                    var l;
                    if (null != t) {
                        (l = this.$getDisplayTokens(t, s.length))[0] = e;
                        for (var h = 1; h < l.length; h++) l[h] = i
                    } else l = this.$getDisplayTokens(o[n].substring(a, r), s.length);
                    s = s.concat(l)
                }).bind(this), r.end.row, o[r.end.row].length + 1), l[r.start.row] = this.$computeWrapSplits(s, h, a), c = r.end.row + 1) : (s = this.$getDisplayTokens(o[c]), l[c] = this.$computeWrapSplits(s, h, a), c++)
            };
            var e = 3,
                i = 4,
                r = 10,
                l = 11,
                u = 12;
            this.$computeWrapSplits = function(t, n, s) {
                function o() {
                    var e = 0;
                    if (0 === p) return e;
                    if (m)
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            if (n == r) e += 1;
                            else {
                                if (n != l) {
                                    if (n == u) continue;
                                    break
                                }
                                e += s
                            }
                        }
                    return g && !1 !== m && (e += s), Math.min(e, p)
                }

                function a(e) {
                    for (var i = e - d, n = d; n < e; n++) {
                        var s = t[n];
                        12 !== s && 2 !== s || (i -= 1)
                    }
                    h.length || (v = o(), h.indent = v), h.push(f += i), d = e
                }
                if (0 == t.length) return [];
                for (var h = [], c = t.length, d = 0, f = 0, g = this.$wrapAsCode, m = this.$indentedSoftWrap, p = n <= Math.max(2 * s, 8) || !1 === m ? 0 : Math.floor(n / 2), v = 0; c - d > n - v;) {
                    var _ = d + n - v;
                    if (t[_ - 1] >= r && t[_] >= r) a(_);
                    else if (t[_] != e && t[_] != i) {
                        for (var w = Math.max(_ - (n - (n >> 2)), d - 1); _ > w && t[_] < e;) _--;
                        if (g) {
                            for (; _ > w && t[_] < e;) _--;
                            for (; _ > w && 9 == t[_];) _--
                        } else
                            for (; _ > w && t[_] < r;) _--;
                        _ > w ? a(++_) : (2 == t[_ = d + n] && _--, a(_ - v))
                    } else {
                        for (; _ != d - 1 && t[_] != e; _--);
                        if (_ > d) {
                            a(_);
                            continue
                        }
                        for (_ = d + n; _ < t.length && t[_] == i; _++);
                        if (_ == t.length) break;
                        a(_)
                    }
                }
                return h
            }, this.$getDisplayTokens = function(e, i) {
                var n, s = [];
                i = i || 0;
                for (var o = 0; o < e.length; o++) {
                    var a = e.charCodeAt(o);
                    if (9 == a) {
                        n = this.getScreenTabSize(s.length + i), s.push(l);
                        for (var h = 1; h < n; h++) s.push(u)
                    } else 32 == a ? s.push(r) : a > 39 && a < 48 || a > 57 && a < 64 ? s.push(9) : a >= 4352 && t(a) ? s.push(1, 2) : s.push(1)
                }
                return s
            }, this.$getStringScreenWidth = function(e, i, n) {
                if (0 == i) return [0, 0];
                var s, r;
                for (null == i && (i = 1 / 0), n = n || 0, r = 0; r < e.length && (9 == (s = e.charCodeAt(r)) ? n += this.getScreenTabSize(n) : s >= 4352 && t(s) ? n += 2 : n += 1, !(n > i)); r++);
                return [n, r]
            }, this.lineWidgets = null, this.getRowLength = function(t) {
                if (this.lineWidgets) var e = this.lineWidgets[t] && this.lineWidgets[t].rowCount || 0;
                else e = 0;
                return this.$useWrapMode && this.$wrapData[t] ? this.$wrapData[t].length + 1 + e : 1 + e
            }, this.getRowLineCount = function(t) {
                return this.$useWrapMode && this.$wrapData[t] ? this.$wrapData[t].length + 1 : 1
            }, this.getRowWrapIndent = function(t) {
                if (this.$useWrapMode) {
                    var e = this.screenToDocumentPosition(t, Number.MAX_VALUE),
                        i = this.$wrapData[e.row];
                    return i.length && i[0] < e.column ? i.indent : 0
                }
                return 0
            }, this.getScreenLastRowColumn = function(t) {
                var e = this.screenToDocumentPosition(t, Number.MAX_VALUE);
                return this.documentToScreenColumn(e.row, e.column)
            }, this.getDocumentLastRowColumn = function(t, e) {
                var i = this.documentToScreenRow(t, e);
                return this.getScreenLastRowColumn(i)
            }, this.getDocumentLastRowColumnPosition = function(t, e) {
                var i = this.documentToScreenRow(t, e);
                return this.screenToDocumentPosition(i, Number.MAX_VALUE / 10)
            }, this.getRowSplitData = function(t) {
                return this.$useWrapMode ? this.$wrapData[t] : void 0
            }, this.getScreenTabSize = function(t) {
                return this.$tabSize - t % this.$tabSize
            }, this.screenToDocumentRow = function(t, e) {
                return this.screenToDocumentPosition(t, e).row
            }, this.screenToDocumentColumn = function(t, e) {
                return this.screenToDocumentPosition(t, e).column
            }, this.screenToDocumentPosition = function(t, e, i) {
                if (t < 0) return {
                    row: 0,
                    column: 0
                };
                var n, s, r = 0,
                    o = 0,
                    a = 0,
                    l = 0,
                    h = this.$screenRowCache,
                    c = this.$getRowCacheIndex(h, t),
                    u = h.length;
                if (u && c >= 0) {
                    a = h[c], r = this.$docRowCache[c];
                    var d = t > h[u - 1]
                } else d = !u;
                for (var f = this.getLength() - 1, g = this.getNextFoldLine(r), m = g ? g.start.row : 1 / 0; a <= t && !(a + (l = this.getRowLength(r)) > t || r >= f);) a += l, ++r > m && (m = (g = this.getNextFoldLine(r = g.end.row + 1, g)) ? g.start.row : 1 / 0), d && (this.$docRowCache.push(r), this.$screenRowCache.push(a));
                if (g && g.start.row <= r) n = this.getFoldDisplayLine(g), r = g.start.row;
                else {
                    if (a + l <= t || r > f) return {
                        row: f,
                        column: this.getLine(f).length
                    };
                    n = this.getLine(r), g = null
                }
                var p = 0,
                    v = Math.floor(t - a);
                if (this.$useWrapMode) {
                    var _ = this.$wrapData[r];
                    _ && (s = _[v], v > 0 && _.length && (p = _.indent, n = n.substring(o = _[v - 1] || _[_.length - 1])))
                }
                return void 0 !== i && this.$bidiHandler.isBidiRow(a + v, r, v) && (e = this.$bidiHandler.offsetToCol(i)), o += this.$getStringScreenWidth(n, e - p)[1], this.$useWrapMode && o >= s && (o = s - 1), g ? g.idxToPosition(o) : {
                    row: r,
                    column: o
                }
            }, this.documentToScreenPosition = function(t, e) {
                if (void 0 === e) var i = this.$clipPositionToDocument(t.row, t.column);
                else i = this.$clipPositionToDocument(t, e);
                var n, s = 0,
                    r = null;
                (n = this.getFoldAt(t = i.row, e = i.column, 1)) && (t = n.start.row, e = n.start.column);
                var o, a = 0,
                    l = this.$docRowCache,
                    h = this.$getRowCacheIndex(l, t),
                    c = l.length;
                if (c && h >= 0) {
                    a = l[h], s = this.$screenRowCache[h];
                    var u = t > l[c - 1]
                } else u = !c;
                for (var d = this.getNextFoldLine(a), f = d ? d.start.row : 1 / 0; a < t;) {
                    if (a >= f) {
                        if ((o = d.end.row + 1) > t) break;
                        f = (d = this.getNextFoldLine(o, d)) ? d.start.row : 1 / 0
                    } else o = a + 1;
                    s += this.getRowLength(a), a = o, u && (this.$docRowCache.push(a), this.$screenRowCache.push(s))
                }
                var g = "";
                d && a >= f ? (g = this.getFoldDisplayLine(d, t, e), r = d.start.row) : (g = this.getLine(t).substring(0, e), r = t);
                var m = 0;
                if (this.$useWrapMode) {
                    var p = this.$wrapData[r];
                    if (p) {
                        for (var v = 0; g.length >= p[v];) s++, v++;
                        g = g.substring(p[v - 1] || 0, g.length), m = v > 0 ? p.indent : 0
                    }
                }
                return {
                    row: s,
                    column: m + this.$getStringScreenWidth(g)[0]
                }
            }, this.documentToScreenColumn = function(t, e) {
                return this.documentToScreenPosition(t, e).column
            }, this.documentToScreenRow = function(t, e) {
                return this.documentToScreenPosition(t, e).row
            }, this.getScreenLength = function() {
                var t = 0,
                    e = null;
                if (this.$useWrapMode)
                    for (var i = this.$wrapData.length, n = 0, s = (a = 0, (e = this.$foldData[a++]) ? e.start.row : 1 / 0); n < i;) {
                        var r = this.$wrapData[n];
                        t += r ? r.length + 1 : 1, ++n > s && (n = e.end.row + 1, s = (e = this.$foldData[a++]) ? e.start.row : 1 / 0)
                    } else {
                        t = this.getLength();
                        for (var o = this.$foldData, a = 0; a < o.length; a++) t -= (e = o[a]).end.row - e.start.row
                    }
                return this.lineWidgets && (t += this.$getWidgetScreenLength()), t
            }, this.$setFontMetrics = function(t) {
                this.$enableVarChar && (this.$getStringScreenWidth = function(e, i, n) {
                    if (0 === i) return [0, 0];
                    var s, r;
                    for (i || (i = 1 / 0), n = n || 0, r = 0; r < e.length && !((n += "\t" === (s = e.charAt(r)) ? this.getScreenTabSize(n) : t.getCharacterWidth(s)) > i); r++);
                    return [n, r]
                })
            }, this.destroy = function() {
                this.bgTokenizer && (this.bgTokenizer.setDocument(null), this.bgTokenizer = null), this.$stopWorker()
            }, this.isFullWidth = t
        }).call(g.prototype), t("./edit_session/folding").Folding.call(g.prototype), t("./edit_session/bracket_match").BracketMatch.call(g.prototype), o.defineOptions(g.prototype, "session", {
            wrap: {
                set: function(t) {
                    if (t && "off" != t ? "free" == t ? t = !0 : "printMargin" == t ? t = -1 : "string" == typeof t && (t = parseInt(t, 10) || !1) : t = !1, this.$wrap != t)
                        if (this.$wrap = t, t) {
                            var e = "number" == typeof t ? t : null;
                            this.setWrapLimitRange(e, e), this.setUseWrapMode(!0)
                        } else this.setUseWrapMode(!1)
                },
                get: function() {
                    return this.getUseWrapMode() ? -1 == this.$wrap ? "printMargin" : this.getWrapLimitRange().min ? this.$wrap : "free" : "off"
                },
                handlesSet: !0
            },
            wrapMethod: {
                set: function(t) {
                    (t = "auto" == t ? "text" != this.$mode.type : "text" != t) != this.$wrapAsCode && (this.$wrapAsCode = t, this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0)))
                },
                initialValue: "auto"
            },
            indentedSoftWrap: {
                set: function() {
                    this.$useWrapMode && (this.$useWrapMode = !1, this.setUseWrapMode(!0))
                },
                initialValue: !0
            },
            firstLineNumber: {
                set: function() {
                    this._signal("changeBreakpoint")
                },
                initialValue: 1
            },
            useWorker: {
                set: function(t) {
                    this.$useWorker = t, this.$stopWorker(), t && this.$startWorker()
                },
                initialValue: !0
            },
            useSoftTabs: {
                initialValue: !0
            },
            tabSize: {
                set: function(t) {
                    isNaN(t) || this.$tabSize === t || (this.$modified = !0, this.$rowLengthCache = [], this.$tabSize = t, this._signal("changeTabSize"))
                },
                initialValue: 4,
                handlesSet: !0
            },
            navigateWithinSoftTabs: {
                initialValue: !1
            },
            foldStyle: {
                set: function(t) {
                    this.setFoldStyle(t)
                },
                handlesSet: !0
            },
            overwrite: {
                set: function(t) {
                    this._signal("changeOverwrite")
                },
                initialValue: !1
            },
            newLineMode: {
                set: function(t) {
                    this.doc.setNewLineMode(t)
                },
                get: function() {
                    return this.doc.getNewLineMode()
                },
                handlesSet: !0
            },
            mode: {
                set: function(t) {
                    this.setMode(t)
                },
                get: function() {
                    return this.$modeId
                },
                handlesSet: !0
            }
        }), e.EditSession = g
    }), define("ace/search", ["require", "exports", "module", "ace/lib/lang", "ace/lib/oop", "ace/range"], function(t, e, i) {
        "use strict";
        var n = t("./lib/lang"),
            s = t("./lib/oop"),
            r = t("./range").Range,
            o = function() {
                this.$options = {}
            };
        (function() {
            this.set = function(t) {
                return s.mixin(this.$options, t), this
            }, this.getOptions = function() {
                return n.copyObject(this.$options)
            }, this.setOptions = function(t) {
                this.$options = t
            }, this.find = function(t) {
                var e = this.$options,
                    i = this.$matchIterator(t, e);
                if (!i) return !1;
                var n = null;
                return i.forEach(function(t, i, s, o) {
                    return n = new r(t, i, s, o), !(i == o && e.start && e.start.start && 0 != e.skipCurrent && n.isEqual(e.start) && (n = null, 1))
                }), n
            }, this.findAll = function(t) {
                var e = this.$options;
                if (!e.needle) return [];
                this.$assembleRegExp(e);
                var i = e.range,
                    s = i ? t.getLines(i.start.row, i.end.row) : t.doc.getAllLines(),
                    o = [],
                    a = e.re;
                if (e.$isMultiLine) {
                    var l, h = a.length,
                        c = s.length - h;
                    t: for (var u = a.offset || 0; u <= c; u++) {
                        for (var d = 0; d < h; d++)
                            if (-1 == s[u + d].search(a[d])) continue t;
                        var f = s[u],
                            g = s[u + h - 1],
                            m = f.length - f.match(a[0])[0].length,
                            p = g.match(a[h - 1])[0].length;
                        l && l.end.row === u && l.end.column > m || (o.push(l = new r(u, m, u + h - 1, p)), h > 2 && (u = u + h - 2))
                    }
                } else
                    for (var v = 0; v < s.length; v++) {
                        var _ = n.getMatchOffsets(s[v], a);
                        for (d = 0; d < _.length; d++) {
                            var w = _[d];
                            o.push(new r(v, w.offset, v, w.offset + w.length))
                        }
                    }
                if (i) {
                    var y = i.start.column,
                        b = i.start.column;
                    for (v = 0, d = o.length - 1; v < d && o[v].start.column < y && o[v].start.row == i.start.row;) v++;
                    for (; v < d && o[d].end.column > b && o[d].end.row == i.end.row;) d--;
                    for (o = o.slice(v, d + 1), v = 0, d = o.length; v < d; v++) o[v].start.row += i.start.row, o[v].end.row += i.start.row
                }
                return o
            }, this.replace = function(t, e) {
                var i = this.$options,
                    n = this.$assembleRegExp(i);
                if (i.$isMultiLine) return e;
                if (n) {
                    var s = n.exec(t);
                    if (!s || s[0].length != t.length) return null;
                    if (e = t.replace(n, e), i.preserveCase) {
                        e = e.split("");
                        for (var r = Math.min(t.length, t.length); r--;) {
                            var o = t[r];
                            e[r] = o && o.toLowerCase() != o ? e[r].toUpperCase() : e[r].toLowerCase()
                        }
                        e = e.join("")
                    }
                    return e
                }
            }, this.$assembleRegExp = function(t, e) {
                if (t.needle instanceof RegExp) return t.re = t.needle;
                var i = t.needle;
                if (!t.needle) return t.re = !1;
                t.regExp || (i = n.escapeRegExp(i)), t.wholeWord && (i = function(t, e) {
                    function i(t) {
                        return /\w/.test(t) || e.regExp ? "\\b" : ""
                    }
                    return i(t[0]) + t + i(t[t.length - 1])
                }(i, t));
                var s = t.caseSensitive ? "gm" : "gmi";
                if (t.$isMultiLine = !e && /[\n\r]/.test(i), t.$isMultiLine) return t.re = this.$assembleMultilineRegExp(i, s);
                try {
                    var r = new RegExp(i, s)
                } catch (t) {
                    r = !1
                }
                return t.re = r
            }, this.$assembleMultilineRegExp = function(t, e) {
                for (var i = t.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), n = [], s = 0; s < i.length; s++) try {
                    n.push(new RegExp(i[s], e))
                } catch (t) {
                    return !1
                }
                return n
            }, this.$matchIterator = function(t, e) {
                var i = this.$assembleRegExp(e);
                if (!i) return !1;
                var n = 1 == e.backwards,
                    s = 0 != e.skipCurrent,
                    r = e.range,
                    o = e.start;
                o || (o = r ? r[n ? "end" : "start"] : t.selection.getRange()), o.start && (o = o[s != n ? "end" : "start"]);
                var a = r ? r.start.row : 0,
                    l = r ? r.end.row : t.getLength() - 1;
                if (n) var h = function(t) {
                    var i = o.row;
                    if (!u(i, o.column, t)) {
                        for (i--; i >= a; i--)
                            if (u(i, Number.MAX_VALUE, t)) return;
                        if (0 != e.wrap)
                            for (i = l, a = o.row; i >= a; i--)
                                if (u(i, Number.MAX_VALUE, t)) return
                    }
                };
                else h = function(t) {
                    var i = o.row;
                    if (!u(i, o.column, t)) {
                        for (i += 1; i <= l; i++)
                            if (u(i, 0, t)) return;
                        if (0 != e.wrap)
                            for (i = a, l = o.row; i <= l; i++)
                                if (u(i, 0, t)) return
                    }
                };
                if (e.$isMultiLine) var c = i.length,
                    u = function(e, s, r) {
                        var o = n ? e - c + 1 : e;
                        if (!(o < 0)) {
                            var a = t.getLine(o),
                                l = a.search(i[0]);
                            if (!(!n && l < s || -1 === l)) {
                                for (var h = 1; h < c; h++)
                                    if (-1 == (a = t.getLine(o + h)).search(i[h])) return;
                                var u = a.match(i[c - 1])[0].length;
                                if (!(n && u > s)) return !!r(o, l, o + c - 1, u) || void 0
                            }
                        }
                    };
                else u = n ? function(e, n, s) {
                    var r, o = t.getLine(e),
                        a = [],
                        l = 0;
                    for (i.lastIndex = 0; r = i.exec(o);) {
                        if (l = r.index, !(c = r[0].length)) {
                            if (l >= o.length) break;
                            i.lastIndex = l += 1
                        }
                        if (r.index + c > n) break;
                        a.push(r.index, c)
                    }
                    for (var h = a.length - 1; h >= 0; h -= 2) {
                        var c, u = a[h - 1];
                        if (s(e, u, e, u + (c = a[h]))) return !0
                    }
                } : function(e, n, s) {
                    var r, o, a = t.getLine(e);
                    for (i.lastIndex = n; o = i.exec(a);) {
                        var l = o[0].length;
                        if (s(e, r = o.index, e, r + l)) return !0;
                        if (!l && (i.lastIndex = r += 1, r >= a.length)) return !1
                    }
                };
                return {
                    forEach: h
                }
            }
        }).call(o.prototype), e.Search = o
    }), define("ace/keyboard/hash_handler", ["require", "exports", "module", "ace/lib/keys", "ace/lib/useragent"], function(t, e, i) {
        "use strict";

        function n(t, e) {
            this.platform = e || (o.isMac ? "mac" : "win"), this.commands = {}, this.commandKeyBinding = {}, this.addCommands(t), this.$singleCommand = !0
        }

        function s(t, e) {
            n.call(this, t, e), this.$singleCommand = !1
        }
        var r = t("../lib/keys"),
            o = t("../lib/useragent"),
            a = r.KEY_MODS;
        s.prototype = n.prototype, (function() {
            function t(t) {
                return "object" == typeof t && t.bindKey && t.bindKey.position || (t.isDefault ? -100 : 0)
            }
            this.addCommand = function(t) {
                this.commands[t.name] && this.removeCommand(t), this.commands[t.name] = t, t.bindKey && this._buildKeyHash(t)
            }, this.removeCommand = function(t, e) {
                var i = t && ("string" == typeof t ? t : t.name);
                t = this.commands[i], e || delete this.commands[i];
                var n = this.commandKeyBinding;
                for (var s in n) {
                    var r = n[s];
                    if (r == t) delete n[s];
                    else if (Array.isArray(r)) {
                        var o = r.indexOf(t); - 1 != o && (r.splice(o, 1), 1 == r.length && (n[s] = r[0]))
                    }
                }
            }, this.bindKey = function(t, e, i) {
                if ("object" == typeof t && t && (void 0 == i && (i = t.position), t = t[this.platform]), t) return "function" == typeof e ? this.addCommand({
                    exec: e,
                    bindKey: t,
                    name: e.name || t
                }) : void t.split("|").forEach(function(t) {
                    var n = "";
                    if (-1 != t.indexOf(" ")) {
                        var s = t.split(/\s+/);
                        t = s.pop(), s.forEach(function(t) {
                            var e = this.parseKeys(t);
                            this._addCommandToBinding(n += (n ? " " : "") + (a[e.hashId] + e.key), "chainKeys")
                        }, this), n += " "
                    }
                    var r = this.parseKeys(t);
                    this._addCommandToBinding(n + (a[r.hashId] + r.key), e, i)
                }, this)
            }, this._addCommandToBinding = function(e, i, n) {
                var s, r = this.commandKeyBinding;
                if (i)
                    if (!r[e] || this.$singleCommand) r[e] = i;
                    else {
                        Array.isArray(r[e]) ? -1 != (s = r[e].indexOf(i)) && r[e].splice(s, 1) : r[e] = [r[e]], "number" != typeof n && (n = t(i));
                        var o = r[e];
                        for (s = 0; s < o.length && !(t(o[s]) > n); s++);
                        o.splice(s, 0, i)
                    }
                else delete r[e]
            }, this.addCommands = function(t) {
                t && Object.keys(t).forEach(function(e) {
                    var i = t[e];
                    if (i) {
                        if ("string" == typeof i) return this.bindKey(i, e);
                        "function" == typeof i && (i = {
                            exec: i
                        }), "object" == typeof i && (i.name || (i.name = e), this.addCommand(i))
                    }
                }, this)
            }, this.removeCommands = function(t) {
                Object.keys(t).forEach(function(e) {
                    this.removeCommand(t[e])
                }, this)
            }, this.bindKeys = function(t) {
                Object.keys(t).forEach(function(e) {
                    this.bindKey(e, t[e])
                }, this)
            }, this._buildKeyHash = function(t) {
                this.bindKey(t.bindKey, t)
            }, this.parseKeys = function(t) {
                var e = t.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(t) {
                        return t
                    }),
                    i = e.pop(),
                    n = r[i];
                if (r.FUNCTION_KEYS[n]) i = r.FUNCTION_KEYS[n].toLowerCase();
                else {
                    if (!e.length) return {
                        key: i,
                        hashId: -1
                    };
                    if (1 == e.length && "shift" == e[0]) return {
                        key: i.toUpperCase(),
                        hashId: -1
                    }
                }
                for (var s = 0, o = e.length; o--;) {
                    var a = r.KEY_MODS[e[o]];
                    if (null == a) return "undefined" != typeof console && console.error("invalid modifier " + e[o] + " in " + t), !1;
                    s |= a
                }
                return {
                    key: i,
                    hashId: s
                }
            }, this.findKeyCommand = function(t, e) {
                return this.commandKeyBinding[a[t] + e]
            }, this.handleKeyboard = function(t, e, i, n) {
                if (!(n < 0)) {
                    var s = a[e] + i,
                        r = this.commandKeyBinding[s];
                    return t.$keyChain && (t.$keyChain += " " + s, r = this.commandKeyBinding[t.$keyChain] || r), !r || "chainKeys" != r && "chainKeys" != r[r.length - 1] ? (t.$keyChain && (e && 4 != e || 1 != i.length ? (-1 == e || n > 0) && (t.$keyChain = "") : t.$keyChain = t.$keyChain.slice(0, -s.length - 1)), {
                        command: r
                    }) : (t.$keyChain = t.$keyChain || s, {
                        command: "null"
                    })
                }
            }, this.getStatusText = function(t, e) {
                return e.$keyChain || ""
            }
        }).call(n.prototype), e.HashHandler = n, e.MultiHashHandler = s
    }), define("ace/commands/command_manager", ["require", "exports", "module", "ace/lib/oop", "ace/keyboard/hash_handler", "ace/lib/event_emitter"], function(t, e, i) {
        "use strict";
        var n = t("../lib/oop"),
            s = t("../keyboard/hash_handler").MultiHashHandler,
            r = t("../lib/event_emitter").EventEmitter,
            o = function(t, e) {
                s.call(this, e, t), this.byName = this.commands, this.setDefaultHandler("exec", function(t) {
                    return t.command.exec(t.editor, t.args || {})
                })
            };
        n.inherits(o, s), (function() {
            n.implement(this, r), this.exec = function(t, e, i) {
                if (Array.isArray(t)) {
                    for (var n = t.length; n--;)
                        if (this.exec(t[n], e, i)) return !0;
                    return !1
                }
                if ("string" == typeof t && (t = this.commands[t]), !t) return !1;
                if (e && e.$readOnly && !t.readOnly) return !1;
                if (0 != this.$checkCommandState && t.isAvailable && !t.isAvailable(e)) return !1;
                var s = {
                    editor: e,
                    command: t,
                    args: i
                };
                return s.returnValue = this._emit("exec", s), this._signal("afterExec", s), !1 !== s.returnValue
            }, this.toggleRecording = function(t) {
                if (!this.$inReplay) return t && t._emit("changeStatus"), this.recording ? (this.macro.pop(), this.removeEventListener("exec", this.$addCommandToMacro), this.macro.length || (this.macro = this.oldMacro), this.recording = !1) : (this.$addCommandToMacro || (this.$addCommandToMacro = (function(t) {
                    this.macro.push([t.command, t.args])
                }).bind(this)), this.oldMacro = this.macro, this.macro = [], this.on("exec", this.$addCommandToMacro), this.recording = !0)
            }, this.replay = function(t) {
                if (!this.$inReplay && this.macro) {
                    if (this.recording) return this.toggleRecording(t);
                    try {
                        this.$inReplay = !0, this.macro.forEach(function(e) {
                            "string" == typeof e ? this.exec(e, t) : this.exec(e[0], t, e[1])
                        }, this)
                    } finally {
                        this.$inReplay = !1
                    }
                }
            }, this.trimMacro = function(t) {
                return t.map(function(t) {
                    return "string" != typeof t[0] && (t[0] = t[0].name), t[1] || (t = t[0]), t
                })
            }
        }).call(o.prototype), e.CommandManager = o
    }), define("ace/commands/default_commands", ["require", "exports", "module", "ace/lib/lang", "ace/config", "ace/range"], function(t, e, i) {
        "use strict";

        function n(t, e) {
            return {
                win: t,
                mac: e
            }
        }
        var s = t("../lib/lang"),
            r = t("../config"),
            o = t("../range").Range;
        e.commands = [{
            name: "showSettingsMenu",
            bindKey: n("Ctrl-,", "Command-,"),
            exec: function(t) {
                r.loadModule("ace/ext/settings_menu", function(e) {
                    e.init(t), t.showSettingsMenu()
                })
            },
            readOnly: !0
        }, {
            name: "goToNextError",
            bindKey: n("Alt-E", "F4"),
            exec: function(t) {
                r.loadModule("./ext/error_marker", function(e) {
                    e.showErrorMarker(t, 1)
                })
            },
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "goToPreviousError",
            bindKey: n("Alt-Shift-E", "Shift-F4"),
            exec: function(t) {
                r.loadModule("./ext/error_marker", function(e) {
                    e.showErrorMarker(t, -1)
                })
            },
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "selectall",
            bindKey: n("Ctrl-A", "Command-A"),
            exec: function(t) {
                t.selectAll()
            },
            readOnly: !0
        }, {
            name: "centerselection",
            bindKey: n(null, "Ctrl-L"),
            exec: function(t) {
                t.centerSelection()
            },
            readOnly: !0
        }, {
            name: "gotoline",
            bindKey: n("Ctrl-L", "Command-L"),
            exec: function(t, e) {
                "number" != typeof e && (e = parseInt(prompt("Enter line number:"), 10)), isNaN(e) || t.gotoLine(e)
            },
            readOnly: !0
        }, {
            name: "fold",
            bindKey: n("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
            exec: function(t) {
                t.session.toggleFold(!1)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "unfold",
            bindKey: n("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
            exec: function(t) {
                t.session.toggleFold(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "toggleFoldWidget",
            bindKey: n("F2", "F2"),
            exec: function(t) {
                t.session.toggleFoldWidget()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "toggleParentFoldWidget",
            bindKey: n("Alt-F2", "Alt-F2"),
            exec: function(t) {
                t.session.toggleFoldWidget(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "foldall",
            bindKey: n(null, "Ctrl-Command-Option-0"),
            exec: function(t) {
                t.session.foldAll()
            },
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "foldOther",
            bindKey: n("Alt-0", "Command-Option-0"),
            exec: function(t) {
                t.session.foldAll(), t.session.unfold(t.selection.getAllRanges())
            },
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "unfoldall",
            bindKey: n("Alt-Shift-0", "Command-Option-Shift-0"),
            exec: function(t) {
                t.session.unfold()
            },
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "findnext",
            bindKey: n("Ctrl-K", "Command-G"),
            exec: function(t) {
                t.findNext()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "findprevious",
            bindKey: n("Ctrl-Shift-K", "Command-Shift-G"),
            exec: function(t) {
                t.findPrevious()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "center",
            readOnly: !0
        }, {
            name: "selectOrFindNext",
            bindKey: n("Alt-K", "Ctrl-G"),
            exec: function(t) {
                t.selection.isEmpty() ? t.selection.selectWord() : t.findNext()
            },
            readOnly: !0
        }, {
            name: "selectOrFindPrevious",
            bindKey: n("Alt-Shift-K", "Ctrl-Shift-G"),
            exec: function(t) {
                t.selection.isEmpty() ? t.selection.selectWord() : t.findPrevious()
            },
            readOnly: !0
        }, {
            name: "find",
            bindKey: n("Ctrl-F", "Command-F"),
            exec: function(t) {
                r.loadModule("ace/ext/searchbox", function(e) {
                    e.Search(t)
                })
            },
            readOnly: !0
        }, {
            name: "overwrite",
            bindKey: "Insert",
            exec: function(t) {
                t.toggleOverwrite()
            },
            readOnly: !0
        }, {
            name: "selecttostart",
            bindKey: n("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
            exec: function(t) {
                t.getSelection().selectFileStart()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "gotostart",
            bindKey: n("Ctrl-Home", "Command-Home|Command-Up"),
            exec: function(t) {
                t.navigateFileStart()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "selectup",
            bindKey: n("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
            exec: function(t) {
                t.getSelection().selectUp()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "golineup",
            bindKey: n("Up", "Up|Ctrl-P"),
            exec: function(t, e) {
                t.navigateUp(e.times)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selecttoend",
            bindKey: n("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
            exec: function(t) {
                t.getSelection().selectFileEnd()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "gotoend",
            bindKey: n("Ctrl-End", "Command-End|Command-Down"),
            exec: function(t) {
                t.navigateFileEnd()
            },
            multiSelectAction: "forEach",
            readOnly: !0,
            scrollIntoView: "animate",
            aceCommandGroup: "fileJump"
        }, {
            name: "selectdown",
            bindKey: n("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
            exec: function(t) {
                t.getSelection().selectDown()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "golinedown",
            bindKey: n("Down", "Down|Ctrl-N"),
            exec: function(t, e) {
                t.navigateDown(e.times)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectwordleft",
            bindKey: n("Ctrl-Shift-Left", "Option-Shift-Left"),
            exec: function(t) {
                t.getSelection().selectWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotowordleft",
            bindKey: n("Ctrl-Left", "Option-Left"),
            exec: function(t) {
                t.navigateWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selecttolinestart",
            bindKey: n("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
            exec: function(t) {
                t.getSelection().selectLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotolinestart",
            bindKey: n("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
            exec: function(t) {
                t.navigateLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectleft",
            bindKey: n("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
            exec: function(t) {
                t.getSelection().selectLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotoleft",
            bindKey: n("Left", "Left|Ctrl-B"),
            exec: function(t, e) {
                t.navigateLeft(e.times)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectwordright",
            bindKey: n("Ctrl-Shift-Right", "Option-Shift-Right"),
            exec: function(t) {
                t.getSelection().selectWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotowordright",
            bindKey: n("Ctrl-Right", "Option-Right"),
            exec: function(t) {
                t.navigateWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selecttolineend",
            bindKey: n("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
            exec: function(t) {
                t.getSelection().selectLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotolineend",
            bindKey: n("Alt-Right|End", "Command-Right|End|Ctrl-E"),
            exec: function(t) {
                t.navigateLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectright",
            bindKey: n("Shift-Right", "Shift-Right"),
            exec: function(t) {
                t.getSelection().selectRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "gotoright",
            bindKey: n("Right", "Right|Ctrl-F"),
            exec: function(t, e) {
                t.navigateRight(e.times)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectpagedown",
            bindKey: "Shift-PageDown",
            exec: function(t) {
                t.selectPageDown()
            },
            readOnly: !0
        }, {
            name: "pagedown",
            bindKey: n(null, "Option-PageDown"),
            exec: function(t) {
                t.scrollPageDown()
            },
            readOnly: !0
        }, {
            name: "gotopagedown",
            bindKey: n("PageDown", "PageDown|Ctrl-V"),
            exec: function(t) {
                t.gotoPageDown()
            },
            readOnly: !0
        }, {
            name: "selectpageup",
            bindKey: "Shift-PageUp",
            exec: function(t) {
                t.selectPageUp()
            },
            readOnly: !0
        }, {
            name: "pageup",
            bindKey: n(null, "Option-PageUp"),
            exec: function(t) {
                t.scrollPageUp()
            },
            readOnly: !0
        }, {
            name: "gotopageup",
            bindKey: "PageUp",
            exec: function(t) {
                t.gotoPageUp()
            },
            readOnly: !0
        }, {
            name: "scrollup",
            bindKey: n("Ctrl-Up", null),
            exec: function(t) {
                t.renderer.scrollBy(0, -2 * t.renderer.layerConfig.lineHeight)
            },
            readOnly: !0
        }, {
            name: "scrolldown",
            bindKey: n("Ctrl-Down", null),
            exec: function(t) {
                t.renderer.scrollBy(0, 2 * t.renderer.layerConfig.lineHeight)
            },
            readOnly: !0
        }, {
            name: "selectlinestart",
            bindKey: "Shift-Home",
            exec: function(t) {
                t.getSelection().selectLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectlineend",
            bindKey: "Shift-End",
            exec: function(t) {
                t.getSelection().selectLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "togglerecording",
            bindKey: n("Ctrl-Alt-E", "Command-Option-E"),
            exec: function(t) {
                t.commands.toggleRecording(t)
            },
            readOnly: !0
        }, {
            name: "replaymacro",
            bindKey: n("Ctrl-Shift-E", "Command-Shift-E"),
            exec: function(t) {
                t.commands.replay(t)
            },
            readOnly: !0
        }, {
            name: "jumptomatching",
            bindKey: n("Ctrl-P", "Ctrl-P"),
            exec: function(t) {
                t.jumpToMatching()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "selecttomatching",
            bindKey: n("Ctrl-Shift-P", "Ctrl-Shift-P"),
            exec: function(t) {
                t.jumpToMatching(!0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "expandToMatching",
            bindKey: n("Ctrl-Shift-M", "Ctrl-Shift-M"),
            exec: function(t) {
                t.jumpToMatching(!0, !0)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "animate",
            readOnly: !0
        }, {
            name: "passKeysToBrowser",
            bindKey: n(null, null),
            exec: function() {},
            passEvent: !0,
            readOnly: !0
        }, {
            name: "copy",
            exec: function(t) {},
            readOnly: !0
        }, {
            name: "cut",
            exec: function(t) {
                var e = t.$copyWithEmptySelection && t.selection.isEmpty() ? t.selection.getLineRange() : t.selection.getRange();
                t._emit("cut", e), e.isEmpty() || t.session.remove(e), t.clearSelection()
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "paste",
            exec: function(t, e) {
                t.$handlePaste(e)
            },
            scrollIntoView: "cursor"
        }, {
            name: "removeline",
            bindKey: n("Ctrl-D", "Command-D"),
            exec: function(t) {
                t.removeLines()
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEachLine"
        }, {
            name: "duplicateSelection",
            bindKey: n("Ctrl-Shift-D", "Command-Shift-D"),
            exec: function(t) {
                t.duplicateSelection()
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "sortlines",
            bindKey: n("Ctrl-Alt-S", "Command-Alt-S"),
            exec: function(t) {
                t.sortLines()
            },
            scrollIntoView: "selection",
            multiSelectAction: "forEachLine"
        }, {
            name: "togglecomment",
            bindKey: n("Ctrl-/", "Command-/"),
            exec: function(t) {
                t.toggleCommentLines()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "toggleBlockComment",
            bindKey: n("Ctrl-Shift-/", "Command-Shift-/"),
            exec: function(t) {
                t.toggleBlockComment()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "modifyNumberUp",
            bindKey: n("Ctrl-Shift-Up", "Alt-Shift-Up"),
            exec: function(t) {
                t.modifyNumber(1)
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "modifyNumberDown",
            bindKey: n("Ctrl-Shift-Down", "Alt-Shift-Down"),
            exec: function(t) {
                t.modifyNumber(-1)
            },
            scrollIntoView: "cursor",
            multiSelectAction: "forEach"
        }, {
            name: "replace",
            bindKey: n("Ctrl-H", "Command-Option-F"),
            exec: function(t) {
                r.loadModule("ace/ext/searchbox", function(e) {
                    e.Search(t, !0)
                })
            }
        }, {
            name: "undo",
            bindKey: n("Ctrl-Z", "Command-Z"),
            exec: function(t) {
                t.undo()
            }
        }, {
            name: "redo",
            bindKey: n("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
            exec: function(t) {
                t.redo()
            }
        }, {
            name: "copylinesup",
            bindKey: n("Alt-Shift-Up", "Command-Option-Up"),
            exec: function(t) {
                t.copyLinesUp()
            },
            scrollIntoView: "cursor"
        }, {
            name: "movelinesup",
            bindKey: n("Alt-Up", "Option-Up"),
            exec: function(t) {
                t.moveLinesUp()
            },
            scrollIntoView: "cursor"
        }, {
            name: "copylinesdown",
            bindKey: n("Alt-Shift-Down", "Command-Option-Down"),
            exec: function(t) {
                t.copyLinesDown()
            },
            scrollIntoView: "cursor"
        }, {
            name: "movelinesdown",
            bindKey: n("Alt-Down", "Option-Down"),
            exec: function(t) {
                t.moveLinesDown()
            },
            scrollIntoView: "cursor"
        }, {
            name: "del",
            bindKey: n("Delete", "Delete|Ctrl-D|Shift-Delete"),
            exec: function(t) {
                t.remove("right")
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "backspace",
            bindKey: n("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
            exec: function(t) {
                t.remove("left")
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "cut_or_delete",
            bindKey: n("Shift-Delete", null),
            exec: function(t) {
                if (!t.selection.isEmpty()) return !1;
                t.remove("left")
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolinestart",
            bindKey: n("Alt-Backspace", "Command-Backspace"),
            exec: function(t) {
                t.removeToLineStart()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolineend",
            bindKey: n("Alt-Delete", "Ctrl-K|Command-Delete"),
            exec: function(t) {
                t.removeToLineEnd()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolinestarthard",
            bindKey: n("Ctrl-Shift-Backspace", null),
            exec: function(t) {
                var e = t.selection.getRange();
                e.start.column = 0, t.session.remove(e)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removetolineendhard",
            bindKey: n("Ctrl-Shift-Delete", null),
            exec: function(t) {
                var e = t.selection.getRange();
                e.end.column = Number.MAX_VALUE, t.session.remove(e)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removewordleft",
            bindKey: n("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
            exec: function(t) {
                t.removeWordLeft()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "removewordright",
            bindKey: n("Ctrl-Delete", "Alt-Delete"),
            exec: function(t) {
                t.removeWordRight()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "outdent",
            bindKey: n("Shift-Tab", "Shift-Tab"),
            exec: function(t) {
                t.blockOutdent()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "indent",
            bindKey: n("Tab", "Tab"),
            exec: function(t) {
                t.indent()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "selectionPart"
        }, {
            name: "blockoutdent",
            bindKey: n("Ctrl-[", "Ctrl-["),
            exec: function(t) {
                t.blockOutdent()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "blockindent",
            bindKey: n("Ctrl-]", "Ctrl-]"),
            exec: function(t) {
                t.blockIndent()
            },
            multiSelectAction: "forEachLine",
            scrollIntoView: "selectionPart"
        }, {
            name: "insertstring",
            exec: function(t, e) {
                t.insert(e)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "inserttext",
            exec: function(t, e) {
                t.insert(s.stringRepeat(e.text || "", e.times || 1))
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "splitline",
            bindKey: n(null, "Ctrl-O"),
            exec: function(t) {
                t.splitLine()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "transposeletters",
            bindKey: n("Alt-Shift-X", "Ctrl-T"),
            exec: function(t) {
                t.transposeLetters()
            },
            multiSelectAction: function(t) {
                t.transposeSelections(1)
            },
            scrollIntoView: "cursor"
        }, {
            name: "touppercase",
            bindKey: n("Ctrl-U", "Ctrl-U"),
            exec: function(t) {
                t.toUpperCase()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "tolowercase",
            bindKey: n("Ctrl-Shift-U", "Ctrl-Shift-U"),
            exec: function(t) {
                t.toLowerCase()
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor"
        }, {
            name: "expandtoline",
            bindKey: n("Ctrl-Shift-L", "Command-Shift-L"),
            exec: function(t) {
                var e = t.selection.getRange();
                e.start.column = e.end.column = 0, e.end.row++, t.selection.setRange(e, !1)
            },
            multiSelectAction: "forEach",
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "joinlines",
            bindKey: n(null, null),
            exec: function(t) {
                for (var e = t.selection.isBackwards(), i = e ? t.selection.getSelectionLead() : t.selection.getSelectionAnchor(), n = e ? t.selection.getSelectionAnchor() : t.selection.getSelectionLead(), r = t.session.doc.getLine(i.row).length, a = t.session.doc.getTextRange(t.selection.getRange()).replace(/\n\s*/, " ").length, l = t.session.doc.getLine(i.row), h = i.row + 1; h <= n.row + 1; h++) {
                    var c = s.stringTrimLeft(s.stringTrimRight(t.session.doc.getLine(h)));
                    0 !== c.length && (c = " " + c), l += c
                }
                n.row + 1 < t.session.doc.getLength() - 1 && (l += t.session.doc.getNewLineCharacter()), t.clearSelection(), t.session.doc.replace(new o(i.row, 0, n.row + 2, 0), l), a > 0 ? (t.selection.moveCursorTo(i.row, i.column), t.selection.selectTo(i.row, i.column + a)) : (r = t.session.doc.getLine(i.row).length > r ? r + 1 : r, t.selection.moveCursorTo(i.row, r))
            },
            multiSelectAction: "forEach",
            readOnly: !0
        }, {
            name: "invertSelection",
            bindKey: n(null, null),
            exec: function(t) {
                var e = t.session.doc.getLength() - 1,
                    i = t.session.doc.getLine(e).length,
                    n = t.selection.rangeList.ranges,
                    s = [];
                n.length < 1 && (n = [t.selection.getRange()]);
                for (var r = 0; r < n.length; r++) r == n.length - 1 && (n[r].end.row !== e || n[r].end.column !== i) && s.push(new o(n[r].end.row, n[r].end.column, e, i)), 0 === r ? (0 !== n[r].start.row || 0 !== n[r].start.column) && s.push(new o(0, 0, n[r].start.row, n[r].start.column)) : s.push(new o(n[r - 1].end.row, n[r - 1].end.column, n[r].start.row, n[r].start.column));
                for (t.exitMultiSelectMode(), t.clearSelection(), r = 0; r < s.length; r++) t.selection.addRange(s[r], !1)
            },
            readOnly: !0,
            scrollIntoView: "none"
        }]
    }), define("ace/clipboard", ["require", "exports", "module"], function(t, e, i) {
        "use strict";
        i.exports = {
            lineMode: !1
        }
    }), define("ace/editor", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/useragent", "ace/keyboard/textinput", "ace/mouse/mouse_handler", "ace/mouse/fold_handler", "ace/keyboard/keybinding", "ace/edit_session", "ace/search", "ace/range", "ace/lib/event_emitter", "ace/commands/command_manager", "ace/commands/default_commands", "ace/config", "ace/token_iterator", "ace/clipboard"], function(t, e, i) {
        "use strict";
        t("./lib/fixoldbrowsers");
        var n = t("./lib/oop"),
            s = t("./lib/dom"),
            r = t("./lib/lang"),
            o = t("./lib/useragent"),
            a = t("./keyboard/textinput").TextInput,
            l = t("./mouse/mouse_handler").MouseHandler,
            h = t("./mouse/fold_handler").FoldHandler,
            c = t("./keyboard/keybinding").KeyBinding,
            u = t("./edit_session").EditSession,
            d = t("./search").Search,
            f = t("./range").Range,
            g = t("./lib/event_emitter").EventEmitter,
            m = t("./commands/command_manager").CommandManager,
            p = t("./commands/default_commands").commands,
            v = t("./config"),
            _ = t("./token_iterator").TokenIterator,
            w = t("./clipboard"),
            y = function(t, e, i) {
                var n = t.getContainerElement();
                this.container = n, this.renderer = t, this.id = "editor" + ++y.$uid, this.commands = new m(o.isMac ? "mac" : "win", p), "object" == typeof document && (this.textInput = new a(t.getTextAreaContainer(), this), this.renderer.textarea = this.textInput.getElement(), this.$mouseHandler = new l(this), new h(this)), this.keyBinding = new c(this), this.$search = (new d).set({
                    wrap: !0
                }), this.$historyTracker = this.$historyTracker.bind(this), this.commands.on("exec", this.$historyTracker), this.$initOperationListeners(), this._$emitInputEvent = r.delayedCall((function() {
                    this._signal("input", {}), this.session && this.session.bgTokenizer && this.session.bgTokenizer.scheduleStart()
                }).bind(this)), this.on("change", function(t, e) {
                    e._$emitInputEvent.schedule(31)
                }), this.setSession(e || i && i.session || new u("")), v.resetOptions(this), i && this.setOptions(i), v._signal("editor", this)
            };
        y.$uid = 0, (function() {
            n.implement(this, g), this.$initOperationListeners = function() {
                this.commands.on("exec", this.startOperation.bind(this), !0), this.commands.on("afterExec", this.endOperation.bind(this), !0), this.$opResetTimer = r.delayedCall(this.endOperation.bind(this, !0)), this.on("change", (function() {
                    this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.docChanged = !0
                }).bind(this), !0), this.on("changeSelection", (function() {
                    this.curOp || (this.startOperation(), this.curOp.selectionBefore = this.$lastSel), this.curOp.selectionChanged = !0
                }).bind(this), !0)
            }, this.curOp = null, this.prevOp = {}, this.startOperation = function(t) {
                if (this.curOp) {
                    if (!t || this.curOp.command) return;
                    this.prevOp = this.curOp
                }
                t || (this.previousCommand = null, t = {}), this.$opResetTimer.schedule(), this.curOp = this.session.curOp = {
                    command: t.command || {},
                    args: t.args,
                    scrollTop: this.renderer.scrollTop
                }, this.curOp.selectionBefore = this.selection.toJSON()
            }, this.endOperation = function(t) {
                if (this.curOp) {
                    if (t && !1 === t.returnValue) return this.curOp = null;
                    if (1 == t && this.curOp.command && "mouse" == this.curOp.command.name) return;
                    if (this._signal("beforeEndOperation"), !this.curOp) return;
                    var e = this.curOp.command,
                        i = e && e.scrollIntoView;
                    if (i) {
                        switch (i) {
                            case "center-animate":
                                i = "animate";
                            case "center":
                                this.renderer.scrollCursorIntoView(null, .5);
                                break;
                            case "animate":
                            case "cursor":
                                this.renderer.scrollCursorIntoView();
                                break;
                            case "selectionPart":
                                var n = this.selection.getRange(),
                                    s = this.renderer.layerConfig;
                                (n.start.row >= s.lastRow || n.end.row <= s.firstRow) && this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead)
                        }
                        "animate" == i && this.renderer.animateScrolling(this.curOp.scrollTop)
                    }
                    var r = this.selection.toJSON();
                    this.curOp.selectionAfter = r, this.$lastSel = this.selection.toJSON(), this.session.getUndoManager().addSelection(r), this.prevOp = this.curOp, this.curOp = null
                }
            }, this.$mergeableCommands = ["backspace", "del", "insertstring"], this.$historyTracker = function(t) {
                if (this.$mergeUndoDeltas) {
                    var e = this.prevOp,
                        i = this.$mergeableCommands,
                        n = e.command && t.command.name == e.command.name;
                    if ("insertstring" == t.command.name) {
                        var s = t.args;
                        void 0 === this.mergeNextCommand && (this.mergeNextCommand = !0), n = n && this.mergeNextCommand && (!/\s/.test(s) || /\s/.test(e.args)), this.mergeNextCommand = !0
                    } else n = n && -1 !== i.indexOf(t.command.name);
                    "always" != this.$mergeUndoDeltas && Date.now() - this.sequenceStartTime > 2e3 && (n = !1), n ? this.session.mergeUndoDeltas = !0 : -1 !== i.indexOf(t.command.name) && (this.sequenceStartTime = Date.now())
                }
            }, this.setKeyboardHandler = function(t, e) {
                if (t && "string" == typeof t && "ace" != t) {
                    this.$keybindingId = t;
                    var i = this;
                    v.loadModule(["keybinding", t], function(n) {
                        i.$keybindingId == t && i.keyBinding.setKeyboardHandler(n && n.handler), e && e()
                    })
                } else this.$keybindingId = null, this.keyBinding.setKeyboardHandler(t), e && e()
            }, this.getKeyboardHandler = function() {
                return this.keyBinding.getKeyboardHandler()
            }, this.setSession = function(t) {
                if (this.session != t) {
                    this.curOp && this.endOperation(), this.curOp = {};
                    var e = this.session;
                    if (e) {
                        this.session.off("change", this.$onDocumentChange), this.session.off("changeMode", this.$onChangeMode), this.session.off("tokenizerUpdate", this.$onTokenizerUpdate), this.session.off("changeTabSize", this.$onChangeTabSize), this.session.off("changeWrapLimit", this.$onChangeWrapLimit), this.session.off("changeWrapMode", this.$onChangeWrapMode), this.session.off("changeFold", this.$onChangeFold), this.session.off("changeFrontMarker", this.$onChangeFrontMarker), this.session.off("changeBackMarker", this.$onChangeBackMarker), this.session.off("changeBreakpoint", this.$onChangeBreakpoint), this.session.off("changeAnnotation", this.$onChangeAnnotation), this.session.off("changeOverwrite", this.$onCursorChange), this.session.off("changeScrollTop", this.$onScrollTopChange), this.session.off("changeScrollLeft", this.$onScrollLeftChange);
                        var i = this.session.getSelection();
                        i.off("changeCursor", this.$onCursorChange), i.off("changeSelection", this.$onSelectionChange)
                    }
                    this.session = t, t ? (this.$onDocumentChange = this.onDocumentChange.bind(this), t.on("change", this.$onDocumentChange), this.renderer.setSession(t), this.$onChangeMode = this.onChangeMode.bind(this), t.on("changeMode", this.$onChangeMode), this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this), t.on("tokenizerUpdate", this.$onTokenizerUpdate), this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer), t.on("changeTabSize", this.$onChangeTabSize), this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this), t.on("changeWrapLimit", this.$onChangeWrapLimit), this.$onChangeWrapMode = this.onChangeWrapMode.bind(this), t.on("changeWrapMode", this.$onChangeWrapMode), this.$onChangeFold = this.onChangeFold.bind(this), t.on("changeFold", this.$onChangeFold), this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this), this.session.on("changeFrontMarker", this.$onChangeFrontMarker), this.$onChangeBackMarker = this.onChangeBackMarker.bind(this), this.session.on("changeBackMarker", this.$onChangeBackMarker), this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this), this.session.on("changeBreakpoint", this.$onChangeBreakpoint), this.$onChangeAnnotation = this.onChangeAnnotation.bind(this), this.session.on("changeAnnotation", this.$onChangeAnnotation), this.$onCursorChange = this.onCursorChange.bind(this), this.session.on("changeOverwrite", this.$onCursorChange), this.$onScrollTopChange = this.onScrollTopChange.bind(this), this.session.on("changeScrollTop", this.$onScrollTopChange), this.$onScrollLeftChange = this.onScrollLeftChange.bind(this), this.session.on("changeScrollLeft", this.$onScrollLeftChange), this.selection = t.getSelection(), this.selection.on("changeCursor", this.$onCursorChange), this.$onSelectionChange = this.onSelectionChange.bind(this), this.selection.on("changeSelection", this.$onSelectionChange), this.onChangeMode(), this.onCursorChange(), this.onScrollTopChange(), this.onScrollLeftChange(), this.onSelectionChange(), this.onChangeFrontMarker(), this.onChangeBackMarker(), this.onChangeBreakpoint(), this.onChangeAnnotation(), this.session.getUseWrapMode() && this.renderer.adjustWrapLimit(), this.renderer.updateFull()) : (this.selection = null, this.renderer.setSession(t)), this._signal("changeSession", {
                        session: t,
                        oldSession: e
                    }), this.curOp = null, e && e._signal("changeEditor", {
                        oldEditor: this
                    }), t && t._signal("changeEditor", {
                        editor: this
                    }), t && t.bgTokenizer && t.bgTokenizer.scheduleStart()
                }
            }, this.getSession = function() {
                return this.session
            }, this.setValue = function(t, e) {
                return this.session.doc.setValue(t), e ? 1 == e ? this.navigateFileEnd() : -1 == e && this.navigateFileStart() : this.selectAll(), t
            }, this.getValue = function() {
                return this.session.getValue()
            }, this.getSelection = function() {
                return this.selection
            }, this.resize = function(t) {
                this.renderer.onResize(t)
            }, this.setTheme = function(t, e) {
                this.renderer.setTheme(t, e)
            }, this.getTheme = function() {
                return this.renderer.getTheme()
            }, this.setStyle = function(t) {
                this.renderer.setStyle(t)
            }, this.unsetStyle = function(t) {
                this.renderer.unsetStyle(t)
            }, this.getFontSize = function() {
                return this.getOption("fontSize") || s.computedStyle(this.container).fontSize
            }, this.setFontSize = function(t) {
                this.setOption("fontSize", t)
            }, this.$highlightBrackets = function() {
                if (this.session.$bracketHighlight && (this.session.removeMarker(this.session.$bracketHighlight), this.session.$bracketHighlight = null), !this.$highlightPending) {
                    var t = this;
                    this.$highlightPending = !0, setTimeout(function() {
                        t.$highlightPending = !1;
                        var e = t.session;
                        if (e && e.bgTokenizer) {
                            var i = e.findMatchingBracket(t.getCursorPosition());
                            if (i) var n = new f(i.row, i.column, i.row, i.column + 1);
                            else e.$mode.getMatching && (n = e.$mode.getMatching(t.session));
                            n && (e.$bracketHighlight = e.addMarker(n, "ace_bracket", "text"))
                        }
                    }, 50)
                }
            }, this.$highlightTags = function() {
                if (!this.$highlightTagPending) {
                    var t = this;
                    this.$highlightTagPending = !0, setTimeout(function() {
                        t.$highlightTagPending = !1;
                        var e = t.session;
                        if (e && e.bgTokenizer) {
                            var i = t.getCursorPosition(),
                                n = new _(t.session, i.row, i.column),
                                s = n.getCurrentToken();
                            if (!s || !/\b(?:tag-open|tag-name)/.test(s.type)) return e.removeMarker(e.$tagHighlight), void(e.$tagHighlight = null);
                            if (-1 == s.type.indexOf("tag-open") || (s = n.stepForward())) {
                                var r = s.value,
                                    o = 0,
                                    a = n.stepBackward();
                                if ("<" == a.value)
                                    do {
                                        a = s, (s = n.stepForward()) && s.value === r && -1 !== s.type.indexOf("tag-name") && ("<" === a.value ? o++ : "</" === a.value && o--)
                                    } while (s && o >= 0);
                                else {
                                    do {
                                        s = a, a = n.stepBackward(), s && s.value === r && -1 !== s.type.indexOf("tag-name") && ("<" === a.value ? o++ : "</" === a.value && o--)
                                    } while (a && o <= 0);
                                    n.stepForward()
                                }
                                if (!s) return e.removeMarker(e.$tagHighlight), void(e.$tagHighlight = null);
                                var l = n.getCurrentTokenRow(),
                                    h = n.getCurrentTokenColumn(),
                                    c = new f(l, h, l, h + s.value.length),
                                    u = e.$backMarkers[e.$tagHighlight];
                                e.$tagHighlight && void 0 != u && 0 !== c.compareRange(u.range) && (e.removeMarker(e.$tagHighlight), e.$tagHighlight = null), e.$tagHighlight || (e.$tagHighlight = e.addMarker(c, "ace_bracket", "text"))
                            }
                        }
                    }, 50)
                }
            }, this.focus = function() {
                var t = this;
                setTimeout(function() {
                    t.isFocused() || t.textInput.focus()
                }), this.textInput.focus()
            }, this.isFocused = function() {
                return this.textInput.isFocused()
            }, this.blur = function() {
                this.textInput.blur()
            }, this.onFocus = function(t) {
                this.$isFocused || (this.$isFocused = !0, this.renderer.showCursor(), this.renderer.visualizeFocus(), this._emit("focus", t))
            }, this.onBlur = function(t) {
                this.$isFocused && (this.$isFocused = !1, this.renderer.hideCursor(), this.renderer.visualizeBlur(), this._emit("blur", t))
            }, this.$cursorChange = function() {
                this.renderer.updateCursor()
            }, this.onDocumentChange = function(t) {
                this.renderer.updateLines(t.start.row, t.start.row == t.end.row ? t.end.row : 1 / 0, this.session.$useWrapMode), this._signal("change", t), this.$cursorChange(), this.$updateHighlightActiveLine()
            }, this.onTokenizerUpdate = function(t) {
                var e = t.data;
                this.renderer.updateLines(e.first, e.last)
            }, this.onScrollTopChange = function() {
                this.renderer.scrollToY(this.session.getScrollTop())
            }, this.onScrollLeftChange = function() {
                this.renderer.scrollToX(this.session.getScrollLeft())
            }, this.onCursorChange = function() {
                this.$cursorChange(), this.$highlightBrackets(), this.$highlightTags(), this.$updateHighlightActiveLine(), this._signal("changeSelection")
            }, this.$updateHighlightActiveLine = function() {
                var t, e = this.getSession();
                if (this.$highlightActiveLine && ("line" == this.$selectionStyle && this.selection.isMultiLine() || (t = this.getCursorPosition()), this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty() && (t = !1), this.renderer.$maxLines && 1 === this.session.getLength() && !(this.renderer.$minLines > 1) && (t = !1)), e.$highlightLineMarker && !t) e.removeMarker(e.$highlightLineMarker.id), e.$highlightLineMarker = null;
                else if (!e.$highlightLineMarker && t) {
                    var i = new f(t.row, t.column, t.row, 1 / 0);
                    i.id = e.addMarker(i, "ace_active-line", "screenLine"), e.$highlightLineMarker = i
                } else t && (e.$highlightLineMarker.start.row = t.row, e.$highlightLineMarker.end.row = t.row, e.$highlightLineMarker.start.column = t.column, e._signal("changeBackMarker"))
            }, this.onSelectionChange = function(t) {
                var e = this.session;
                if (e.$selectionMarker && e.removeMarker(e.$selectionMarker), e.$selectionMarker = null, this.selection.isEmpty()) this.$updateHighlightActiveLine();
                else {
                    var i = this.selection.getRange(),
                        n = this.getSelectionStyle();
                    e.$selectionMarker = e.addMarker(i, "ace_selection", n)
                }
                var s = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
                this.session.highlight(s), this._signal("changeSelection")
            }, this.$getSelectionHighLightRegexp = function() {
                var t = this.session,
                    e = this.getSelectionRange();
                if (!e.isEmpty() && !e.isMultiLine()) {
                    var i = e.start.column,
                        n = e.end.column,
                        s = t.getLine(e.start.row),
                        r = s.substring(i, n);
                    if (!(r.length > 5e3) && /[\w\d]/.test(r)) {
                        var o = this.$search.$assembleRegExp({
                                wholeWord: !0,
                                caseSensitive: !0,
                                needle: r
                            }),
                            a = s.substring(i - 1, n + 1);
                        if (o.test(a)) return o
                    }
                }
            }, this.onChangeFrontMarker = function() {
                this.renderer.updateFrontMarkers()
            }, this.onChangeBackMarker = function() {
                this.renderer.updateBackMarkers()
            }, this.onChangeBreakpoint = function() {
                this.renderer.updateBreakpoints()
            }, this.onChangeAnnotation = function() {
                this.renderer.setAnnotations(this.session.getAnnotations())
            }, this.onChangeMode = function(t) {
                this.renderer.updateText(), this._emit("changeMode", t)
            }, this.onChangeWrapLimit = function() {
                this.renderer.updateFull()
            }, this.onChangeWrapMode = function() {
                this.renderer.onResize(!0)
            }, this.onChangeFold = function() {
                this.$updateHighlightActiveLine(), this.renderer.updateFull()
            }, this.getSelectedText = function() {
                return this.session.getTextRange(this.getSelectionRange())
            }, this.getCopyText = function() {
                var t = this.getSelectedText(),
                    e = this.session.doc.getNewLineCharacter(),
                    i = !1;
                if (!t && this.$copyWithEmptySelection) {
                    i = !0;
                    for (var n = this.selection.getAllRanges(), s = 0; s < n.length; s++) {
                        var r = n[s];
                        s && n[s - 1].start.row == r.start.row || (t += this.session.getLine(r.start.row) + e)
                    }
                }
                var o = {
                    text: t
                };
                return this._signal("copy", o), w.lineMode = i ? o.text : "", o.text
            }, this.onCopy = function() {
                this.commands.exec("copy", this)
            }, this.onCut = function() {
                this.commands.exec("cut", this)
            }, this.onPaste = function(t, e) {
                this.commands.exec("paste", this, {
                    text: t,
                    event: e
                })
            }, this.$handlePaste = function(t) {
                "string" == typeof t && (t = {
                    text: t
                }), this._signal("paste", t);
                var e = t.text,
                    i = e == w.lineMode,
                    n = this.session;
                if (!this.inMultiSelectMode || this.inVirtualSelectionMode) i ? n.insert({
                    row: this.selection.lead.row,
                    column: 0
                }, e) : this.insert(e);
                else if (i) this.selection.rangeList.ranges.forEach(function(t) {
                    n.insert({
                        row: t.start.row,
                        column: 0
                    }, e)
                });
                else {
                    var s = e.split(/\r\n|\r|\n/),
                        r = this.selection.rangeList.ranges;
                    if (s.length > r.length || s.length < 2 || !s[1]) return this.commands.exec("insertstring", this, e);
                    for (var o = r.length; o--;) {
                        var a = r[o];
                        a.isEmpty() || n.remove(a), n.insert(a.start, s[o])
                    }
                }
            }, this.execCommand = function(t, e) {
                return this.commands.exec(t, this, e)
            }, this.insert = function(t, e) {
                var i = this.session,
                    n = i.getMode(),
                    s = this.getCursorPosition();
                if (this.getBehavioursEnabled() && !e) {
                    var r = n.transformAction(i.getState(s.row), "insertion", this, i, t);
                    r && (t !== r.text && (this.inVirtualSelectionMode || (this.session.mergeUndoDeltas = !1, this.mergeNextCommand = !1)), t = r.text)
                }
                if ("\t" == t && (t = this.session.getTabString()), this.selection.isEmpty()) this.session.getOverwrite() && -1 == t.indexOf("\n") && ((o = new f.fromPoints(s, s)).end.column += t.length, this.session.remove(o));
                else {
                    var o = this.getSelectionRange();
                    s = this.session.remove(o), this.clearSelection()
                }
                if ("\n" == t || "\r\n" == t) {
                    var a = i.getLine(s.row);
                    if (s.column > a.search(/\S|$/)) {
                        var l = a.substr(s.column).search(/\S|$/);
                        i.doc.removeInLine(s.row, s.column, s.column + l)
                    }
                }
                this.clearSelection();
                var h = s.column,
                    c = i.getState(s.row),
                    u = (a = i.getLine(s.row), n.checkOutdent(c, a, t));
                if (i.insert(s, t), r && r.selection && this.selection.setSelectionRange(2 == r.selection.length ? new f(s.row, h + r.selection[0], s.row, h + r.selection[1]) : new f(s.row + r.selection[0], r.selection[1], s.row + r.selection[2], r.selection[3])), i.getDocument().isNewLine(t)) {
                    var d = n.getNextLineIndent(c, a.slice(0, s.column), i.getTabString());
                    i.insert({
                        row: s.row + 1,
                        column: 0
                    }, d)
                }
                u && n.autoOutdent(c, i, s.row)
            }, this.onTextInput = function(t, e) {
                if (!e) return this.keyBinding.onTextInput(t);
                this.startOperation({
                    command: {
                        name: "insertstring"
                    }
                });
                var i = this.applyComposition.bind(this, t, e);
                this.selection.rangeCount ? this.forEachSelection(i) : i(), this.endOperation()
            }, this.applyComposition = function(t, e) {
                var i;
                (e.extendLeft || e.extendRight) && ((i = this.selection.getRange()).start.column -= e.extendLeft, i.end.column += e.extendRight, this.selection.setRange(i), !t && !i.isEmpty() && this.remove()), (t || !this.selection.isEmpty()) && this.insert(t, !0), (e.restoreStart || e.restoreEnd) && ((i = this.selection.getRange()).start.column -= e.restoreStart, i.end.column -= e.restoreEnd, this.selection.setRange(i))
            }, this.onCommandKey = function(t, e, i) {
                this.keyBinding.onCommandKey(t, e, i)
            }, this.setOverwrite = function(t) {
                this.session.setOverwrite(t)
            }, this.getOverwrite = function() {
                return this.session.getOverwrite()
            }, this.toggleOverwrite = function() {
                this.session.toggleOverwrite()
            }, this.setScrollSpeed = function(t) {
                this.setOption("scrollSpeed", t)
            }, this.getScrollSpeed = function() {
                return this.getOption("scrollSpeed")
            }, this.setDragDelay = function(t) {
                this.setOption("dragDelay", t)
            }, this.getDragDelay = function() {
                return this.getOption("dragDelay")
            }, this.setSelectionStyle = function(t) {
                this.setOption("selectionStyle", t)
            }, this.getSelectionStyle = function() {
                return this.getOption("selectionStyle")
            }, this.setHighlightActiveLine = function(t) {
                this.setOption("highlightActiveLine", t)
            }, this.getHighlightActiveLine = function() {
                return this.getOption("highlightActiveLine")
            }, this.setHighlightGutterLine = function(t) {
                this.setOption("highlightGutterLine", t)
            }, this.getHighlightGutterLine = function() {
                return this.getOption("highlightGutterLine")
            }, this.setHighlightSelectedWord = function(t) {
                this.setOption("highlightSelectedWord", t)
            }, this.getHighlightSelectedWord = function() {
                return this.$highlightSelectedWord
            }, this.setAnimatedScroll = function(t) {
                this.renderer.setAnimatedScroll(t)
            }, this.getAnimatedScroll = function() {
                return this.renderer.getAnimatedScroll()
            }, this.setShowInvisibles = function(t) {
                this.renderer.setShowInvisibles(t)
            }, this.getShowInvisibles = function() {
                return this.renderer.getShowInvisibles()
            }, this.setDisplayIndentGuides = function(t) {
                this.renderer.setDisplayIndentGuides(t)
            }, this.getDisplayIndentGuides = function() {
                return this.renderer.getDisplayIndentGuides()
            }, this.setShowPrintMargin = function(t) {
                this.renderer.setShowPrintMargin(t)
            }, this.getShowPrintMargin = function() {
                return this.renderer.getShowPrintMargin()
            }, this.setPrintMarginColumn = function(t) {
                this.renderer.setPrintMarginColumn(t)
            }, this.getPrintMarginColumn = function() {
                return this.renderer.getPrintMarginColumn()
            }, this.setReadOnly = function(t) {
                this.setOption("readOnly", t)
            }, this.getReadOnly = function() {
                return this.getOption("readOnly")
            }, this.setBehavioursEnabled = function(t) {
                this.setOption("behavioursEnabled", t)
            }, this.getBehavioursEnabled = function() {
                return this.getOption("behavioursEnabled")
            }, this.setWrapBehavioursEnabled = function(t) {
                this.setOption("wrapBehavioursEnabled", t)
            }, this.getWrapBehavioursEnabled = function() {
                return this.getOption("wrapBehavioursEnabled")
            }, this.setShowFoldWidgets = function(t) {
                this.setOption("showFoldWidgets", t)
            }, this.getShowFoldWidgets = function() {
                return this.getOption("showFoldWidgets")
            }, this.setFadeFoldWidgets = function(t) {
                this.setOption("fadeFoldWidgets", t)
            }, this.getFadeFoldWidgets = function() {
                return this.getOption("fadeFoldWidgets")
            }, this.remove = function(t) {
                this.selection.isEmpty() && ("left" == t ? this.selection.selectLeft() : this.selection.selectRight());
                var e = this.getSelectionRange();
                if (this.getBehavioursEnabled()) {
                    var i = this.session,
                        n = i.getState(e.start.row),
                        s = i.getMode().transformAction(n, "deletion", this, i, e);
                    if (0 === e.end.column) {
                        var r = i.getTextRange(e);
                        if ("\n" == r[r.length - 1]) {
                            var o = i.getLine(e.end.row);
                            /^\s+$/.test(o) && (e.end.column = o.length)
                        }
                    }
                    s && (e = s)
                }
                this.session.remove(e), this.clearSelection()
            }, this.removeWordRight = function() {
                this.selection.isEmpty() && this.selection.selectWordRight(), this.session.remove(this.getSelectionRange()), this.clearSelection()
            }, this.removeWordLeft = function() {
                this.selection.isEmpty() && this.selection.selectWordLeft(), this.session.remove(this.getSelectionRange()), this.clearSelection()
            }, this.removeToLineStart = function() {
                this.selection.isEmpty() && this.selection.selectLineStart(), this.session.remove(this.getSelectionRange()), this.clearSelection()
            }, this.removeToLineEnd = function() {
                this.selection.isEmpty() && this.selection.selectLineEnd();
                var t = this.getSelectionRange();
                t.start.column == t.end.column && t.start.row == t.end.row && (t.end.column = 0, t.end.row++), this.session.remove(t), this.clearSelection()
            }, this.splitLine = function() {
                this.selection.isEmpty() || (this.session.remove(this.getSelectionRange()), this.clearSelection());
                var t = this.getCursorPosition();
                this.insert("\n"), this.moveCursorToPosition(t)
            }, this.transposeLetters = function() {
                if (this.selection.isEmpty()) {
                    var t = this.getCursorPosition(),
                        e = t.column;
                    if (0 !== e) {
                        var i, n, s = this.session.getLine(t.row);
                        e < s.length ? (i = s.charAt(e) + s.charAt(e - 1), n = new f(t.row, e - 1, t.row, e + 1)) : (i = s.charAt(e - 1) + s.charAt(e - 2), n = new f(t.row, e - 2, t.row, e)), this.session.replace(n, i), this.session.selection.moveToPosition(n.end)
                    }
                }
            }, this.toLowerCase = function() {
                var t = this.getSelectionRange();
                this.selection.isEmpty() && this.selection.selectWord();
                var e = this.getSelectionRange(),
                    i = this.session.getTextRange(e);
                this.session.replace(e, i.toLowerCase()), this.selection.setSelectionRange(t)
            }, this.toUpperCase = function() {
                var t = this.getSelectionRange();
                this.selection.isEmpty() && this.selection.selectWord();
                var e = this.getSelectionRange(),
                    i = this.session.getTextRange(e);
                this.session.replace(e, i.toUpperCase()), this.selection.setSelectionRange(t)
            }, this.indent = function() {
                var t = this.session,
                    e = this.getSelectionRange();
                if (!(e.start.row < e.end.row)) {
                    if (e.start.column < e.end.column) {
                        var i = t.getTextRange(e);
                        if (!/^\s+$/.test(i)) return c = this.$getSelectedRows(), void t.indentRows(c.first, c.last, "\t")
                    }
                    var n = t.getLine(e.start.row),
                        s = e.start,
                        o = t.getTabSize(),
                        a = t.documentToScreenColumn(s.row, s.column);
                    if (this.session.getUseSoftTabs()) var l = r.stringRepeat(" ", h = o - a % o);
                    else {
                        for (var h = a % o;
                            " " == n[e.start.column - 1] && h;) e.start.column--, h--;
                        this.selection.setSelectionRange(e), l = "\t"
                    }
                    return this.insert(l)
                }
                var c = this.$getSelectedRows();
                t.indentRows(c.first, c.last, "\t")
            }, this.blockIndent = function() {
                var t = this.$getSelectedRows();
                this.session.indentRows(t.first, t.last, "\t")
            }, this.blockOutdent = function() {
                var t = this.session.getSelection();
                this.session.outdentRows(t.getRange())
            }, this.sortLines = function() {
                for (var t = this.$getSelectedRows(), e = this.session, i = [], n = t.first; n <= t.last; n++) i.push(e.getLine(n));
                i.sort(function(t, e) {
                    return t.toLowerCase() < e.toLowerCase() ? -1 : t.toLowerCase() > e.toLowerCase() ? 1 : 0
                });
                var s = new f(0, 0, 0, 0);
                for (n = t.first; n <= t.last; n++) {
                    var r = e.getLine(n);
                    s.start.row = n, s.end.row = n, s.end.column = r.length, e.replace(s, i[n - t.first])
                }
            }, this.toggleCommentLines = function() {
                var t = this.session.getState(this.getCursorPosition().row),
                    e = this.$getSelectedRows();
                this.session.getMode().toggleCommentLines(t, this.session, e.first, e.last)
            }, this.toggleBlockComment = function() {
                var t = this.getCursorPosition(),
                    e = this.session.getState(t.row),
                    i = this.getSelectionRange();
                this.session.getMode().toggleBlockComment(e, this.session, i, t)
            }, this.getNumberAt = function(t, e) {
                var i = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                i.lastIndex = 0;
                for (var n = this.session.getLine(t); i.lastIndex < e;) {
                    var s = i.exec(n);
                    if (s.index <= e && s.index + s[0].length >= e) return {
                        value: s[0],
                        start: s.index,
                        end: s.index + s[0].length
                    }
                }
                return null
            }, this.modifyNumber = function(t) {
                var e = this.selection.getCursor().row,
                    i = this.selection.getCursor().column,
                    n = new f(e, i - 1, e, i),
                    s = this.session.getTextRange(n);
                if (!isNaN(parseFloat(s)) && isFinite(s)) {
                    var r = this.getNumberAt(e, i);
                    if (r) {
                        var o = r.value.indexOf(".") >= 0 ? r.start + r.value.indexOf(".") + 1 : r.end,
                            a = r.start + r.value.length - o,
                            l = parseFloat(r.value);
                        l *= Math.pow(10, a), l += t *= o !== r.end && i < o ? Math.pow(10, r.end - i - 1) : Math.pow(10, r.end - i);
                        var h = (l /= Math.pow(10, a)).toFixed(a),
                            c = new f(e, r.start, e, r.end);
                        this.session.replace(c, h), this.moveCursorTo(e, Math.max(r.start + 1, i + h.length - r.value.length))
                    }
                } else this.toggleWord()
            }, this.$toggleWordPairs = [
                ["first", "last"],
                ["true", "false"],
                ["yes", "no"],
                ["width", "height"],
                ["top", "bottom"],
                ["right", "left"],
                ["on", "off"],
                ["x", "y"],
                ["get", "set"],
                ["max", "min"],
                ["horizontal", "vertical"],
                ["show", "hide"],
                ["add", "remove"],
                ["up", "down"],
                ["before", "after"],
                ["even", "odd"],
                ["inside", "outside"],
                ["next", "previous"],
                ["increase", "decrease"],
                ["attach", "detach"],
                ["&&", "||"],
                ["==", "!="]
            ], this.toggleWord = function() {
                var t = this.selection.getCursor().row,
                    e = this.selection.getCursor().column;
                this.selection.selectWord();
                var i = this.getSelectedText(),
                    n = this.selection.getWordRange().start.column,
                    s = i.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/),
                    o = e - n - 1;
                o < 0 && (o = 0);
                var a = 0,
                    l = 0,
                    h = this;
                i.match(/[A-Za-z0-9_]+/) && s.forEach(function(e, s) {
                    l = a + e.length, o >= a && o <= l && (i = e, h.selection.clearSelection(), h.moveCursorTo(t, a + n), h.selection.selectTo(t, l + n)), a = l
                });
                for (var c, u = this.$toggleWordPairs, d = 0; d < u.length; d++)
                    for (var f = u[d], g = 0; g <= 1; g++) {
                        var m = +!g,
                            p = i.match(new RegExp("^\\s?_?(" + r.escapeRegExp(f[g]) + ")\\s?$", "i"));
                        p && i.match(new RegExp("([_]|^|\\s)(" + r.escapeRegExp(p[1]) + ")($|\\s)", "g")) && (c = i.replace(new RegExp(r.escapeRegExp(f[g]), "i"), function(t) {
                            var e = f[m];
                            return t.toUpperCase() == t ? e = e.toUpperCase() : t.charAt(0).toUpperCase() == t.charAt(0) && (e = e.substr(0, 0) + f[m].charAt(0).toUpperCase() + e.substr(1)), e
                        }), this.insert(c), c = "")
                    }
            }, this.removeLines = function() {
                var t = this.$getSelectedRows();
                this.session.removeFullLines(t.first, t.last), this.clearSelection()
            }, this.duplicateSelection = function() {
                var t = this.selection,
                    e = this.session,
                    i = t.getRange(),
                    n = t.isBackwards();
                if (i.isEmpty()) {
                    var s = i.start.row;
                    e.duplicateLines(s, s)
                } else {
                    var r = n ? i.start : i.end,
                        o = e.insert(r, e.getTextRange(i), !1);
                    i.start = r, i.end = o, t.setSelectionRange(i, n)
                }
            }, this.moveLinesDown = function() {
                this.$moveLines(1, !1)
            }, this.moveLinesUp = function() {
                this.$moveLines(-1, !1)
            }, this.moveText = function(t, e, i) {
                return this.session.moveText(t, e, i)
            }, this.copyLinesUp = function() {
                this.$moveLines(-1, !0)
            }, this.copyLinesDown = function() {
                this.$moveLines(1, !0)
            }, this.$moveLines = function(t, e) {
                var i, n, s = this.selection;
                if (!s.inMultiSelectMode || this.inVirtualSelectionMode) {
                    var r = s.toOrientedRange();
                    i = this.$getSelectedRows(r), n = this.session.$moveLines(i.first, i.last, e ? 0 : t), e && -1 == t && (n = 0), r.moveBy(n, 0), s.fromOrientedRange(r)
                } else {
                    var o = s.rangeList.ranges;
                    s.rangeList.detach(this.session), this.inVirtualSelectionMode = !0;
                    for (var a = 0, l = 0, h = o.length, c = 0; c < h; c++) {
                        var u = c;
                        o[c].moveBy(a, 0);
                        for (var d = (i = this.$getSelectedRows(o[c])).first, f = i.last; ++c < h;) {
                            l && o[c].moveBy(l, 0);
                            var g = this.$getSelectedRows(o[c]);
                            if (e && g.first != f) break;
                            if (!e && g.first > f + 1) break;
                            f = g.last
                        }
                        for (c--, a = this.session.$moveLines(d, f, e ? 0 : t), e && -1 == t && (u = c + 1); u <= c;) o[u].moveBy(a, 0), u++;
                        e || (a = 0), l += a
                    }
                    s.fromOrientedRange(s.ranges[0]), s.rangeList.attach(this.session), this.inVirtualSelectionMode = !1
                }
            }, this.$getSelectedRows = function(t) {
                return t = (t || this.getSelectionRange()).collapseRows(), {
                    first: this.session.getRowFoldStart(t.start.row),
                    last: this.session.getRowFoldEnd(t.end.row)
                }
            }, this.onCompositionStart = function(t) {
                this.renderer.showComposition(t)
            }, this.onCompositionUpdate = function(t) {
                this.renderer.setCompositionText(t)
            }, this.onCompositionEnd = function() {
                this.renderer.hideComposition()
            }, this.getFirstVisibleRow = function() {
                return this.renderer.getFirstVisibleRow()
            }, this.getLastVisibleRow = function() {
                return this.renderer.getLastVisibleRow()
            }, this.isRowVisible = function(t) {
                return t >= this.getFirstVisibleRow() && t <= this.getLastVisibleRow()
            }, this.isRowFullyVisible = function(t) {
                return t >= this.renderer.getFirstFullyVisibleRow() && t <= this.renderer.getLastFullyVisibleRow()
            }, this.$getVisibleRowCount = function() {
                return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1
            }, this.$moveByPage = function(t, e) {
                var i = this.renderer,
                    n = this.renderer.layerConfig,
                    s = t * Math.floor(n.height / n.lineHeight);
                !0 === e ? this.selection.$moveSelection(function() {
                    this.moveCursorBy(s, 0)
                }) : !1 === e && (this.selection.moveCursorBy(s, 0), this.selection.clearSelection());
                var r = i.scrollTop;
                i.scrollBy(0, s * n.lineHeight), null != e && i.scrollCursorIntoView(null, .5), i.animateScrolling(r)
            }, this.selectPageDown = function() {
                this.$moveByPage(1, !0)
            }, this.selectPageUp = function() {
                this.$moveByPage(-1, !0)
            }, this.gotoPageDown = function() {
                this.$moveByPage(1, !1)
            }, this.gotoPageUp = function() {
                this.$moveByPage(-1, !1)
            }, this.scrollPageDown = function() {
                this.$moveByPage(1)
            }, this.scrollPageUp = function() {
                this.$moveByPage(-1)
            }, this.scrollToRow = function(t) {
                this.renderer.scrollToRow(t)
            }, this.scrollToLine = function(t, e, i, n) {
                this.renderer.scrollToLine(t, e, i, n)
            }, this.centerSelection = function() {
                var t = this.getSelectionRange(),
                    e = {
                        row: Math.floor(t.start.row + (t.end.row - t.start.row) / 2),
                        column: Math.floor(t.start.column + (t.end.column - t.start.column) / 2)
                    };
                this.renderer.alignCursor(e, .5)
            }, this.getCursorPosition = function() {
                return this.selection.getCursor()
            }, this.getCursorPositionScreen = function() {
                return this.session.documentToScreenPosition(this.getCursorPosition())
            }, this.getSelectionRange = function() {
                return this.selection.getRange()
            }, this.selectAll = function() {
                this.selection.selectAll()
            }, this.clearSelection = function() {
                this.selection.clearSelection()
            }, this.moveCursorTo = function(t, e) {
                this.selection.moveCursorTo(t, e)
            }, this.moveCursorToPosition = function(t) {
                this.selection.moveCursorToPosition(t)
            }, this.jumpToMatching = function(t, e) {
                var i = this.getCursorPosition(),
                    n = new _(this.session, i.row, i.column),
                    s = n.getCurrentToken(),
                    r = s || n.stepForward();
                if (r) {
                    var o, a, l = !1,
                        h = {},
                        c = i.column - r.start,
                        u = {
                            ")": "(",
                            "(": "(",
                            "]": "[",
                            "[": "[",
                            "{": "{",
                            "}": "{"
                        };
                    do {
                        if (r.value.match(/[{}()\[\]]/g)) {
                            for (; c < r.value.length && !l; c++)
                                if (u[r.value[c]]) switch (a = u[r.value[c]] + "." + r.type.replace("rparen", "lparen"), isNaN(h[a]) && (h[a] = 0), r.value[c]) {
                                    case "(":
                                    case "[":
                                    case "{":
                                        h[a]++;
                                        break;
                                    case ")":
                                    case "]":
                                    case "}":
                                        h[a]--, -1 === h[a] && (o = "bracket", l = !0)
                                }
                        } else -1 !== r.type.indexOf("tag-name") && (isNaN(h[r.value]) && (h[r.value] = 0), "<" === s.value ? h[r.value]++ : "</" === s.value && h[r.value]--, -1 === h[r.value] && (o = "tag", l = !0));
                        l || (s = r, r = n.stepForward(), c = 0)
                    } while (r && !l);
                    if (o) {
                        var d, g;
                        if ("bracket" === o)(d = this.session.getBracketRange(i)) || (g = (d = new f(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + c - 1, n.getCurrentTokenRow(), n.getCurrentTokenColumn() + c - 1)).start, (e || g.row === i.row && Math.abs(g.column - i.column) < 2) && (d = this.session.getBracketRange(g)));
                        else if ("tag" === o) {
                            if (!r || -1 === r.type.indexOf("tag-name")) return;
                            var m = r.value;
                            if (0 === (d = new f(n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2, n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2)).compare(i.row, i.column)) {
                                l = !1;
                                do {
                                    r = s, (s = n.stepBackward()) && (-1 !== s.type.indexOf("tag-close") && d.setEnd(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + 1), r.value === m && -1 !== r.type.indexOf("tag-name") && ("<" === s.value ? h[m]++ : "</" === s.value && h[m]--, 0 === h[m] && (l = !0)))
                                } while (s && !l)
                            }
                            r && r.type.indexOf("tag-name") && (g = d.start).row == i.row && Math.abs(g.column - i.column) < 2 && (g = d.end)
                        }(g = d && d.cursor || g) && (t ? d && e ? this.selection.setRange(d) : d && d.isEqual(this.getSelectionRange()) ? this.clearSelection() : this.selection.selectTo(g.row, g.column) : this.selection.moveTo(g.row, g.column))
                    }
                }
            }, this.gotoLine = function(t, e, i) {
                this.selection.clearSelection(), this.session.unfold({
                    row: t - 1,
                    column: e || 0
                }), this.exitMultiSelectMode && this.exitMultiSelectMode(), this.moveCursorTo(t - 1, e || 0), this.isRowFullyVisible(t - 1) || this.scrollToLine(t - 1, !0, i)
            }, this.navigateTo = function(t, e) {
                this.selection.moveTo(t, e)
            }, this.navigateUp = function(t) {
                if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                    var e = this.selection.anchor.getPosition();
                    return this.moveCursorToPosition(e)
                }
                this.selection.clearSelection(), this.selection.moveCursorBy(-t || -1, 0)
            }, this.navigateDown = function(t) {
                if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                    var e = this.selection.anchor.getPosition();
                    return this.moveCursorToPosition(e)
                }
                this.selection.clearSelection(), this.selection.moveCursorBy(t || 1, 0)
            }, this.navigateLeft = function(t) {
                if (this.selection.isEmpty())
                    for (t = t || 1; t--;) this.selection.moveCursorLeft();
                else {
                    var e = this.getSelectionRange().start;
                    this.moveCursorToPosition(e)
                }
                this.clearSelection()
            }, this.navigateRight = function(t) {
                if (this.selection.isEmpty())
                    for (t = t || 1; t--;) this.selection.moveCursorRight();
                else {
                    var e = this.getSelectionRange().end;
                    this.moveCursorToPosition(e)
                }
                this.clearSelection()
            }, this.navigateLineStart = function() {
                this.selection.moveCursorLineStart(), this.clearSelection()
            }, this.navigateLineEnd = function() {
                this.selection.moveCursorLineEnd(), this.clearSelection()
            }, this.navigateFileEnd = function() {
                this.selection.moveCursorFileEnd(), this.clearSelection()
            }, this.navigateFileStart = function() {
                this.selection.moveCursorFileStart(), this.clearSelection()
            }, this.navigateWordRight = function() {
                this.selection.moveCursorWordRight(), this.clearSelection()
            }, this.navigateWordLeft = function() {
                this.selection.moveCursorWordLeft(), this.clearSelection()
            }, this.replace = function(t, e) {
                e && this.$search.set(e);
                var i = this.$search.find(this.session),
                    n = 0;
                return i ? (this.$tryReplace(i, t) && (n = 1), this.selection.setSelectionRange(i), this.renderer.scrollSelectionIntoView(i.start, i.end), n) : n
            }, this.replaceAll = function(t, e) {
                e && this.$search.set(e);
                var i = this.$search.findAll(this.session),
                    n = 0;
                if (!i.length) return n;
                var s = this.getSelectionRange();
                this.selection.moveTo(0, 0);
                for (var r = i.length - 1; r >= 0; --r) this.$tryReplace(i[r], t) && n++;
                return this.selection.setSelectionRange(s), n
            }, this.$tryReplace = function(t, e) {
                var i = this.session.getTextRange(t);
                return null !== (e = this.$search.replace(i, e)) ? (t.end = this.session.replace(t, e), t) : null
            }, this.getLastSearchOptions = function() {
                return this.$search.getOptions()
            }, this.find = function(t, e, i) {
                e || (e = {}), "string" == typeof t || t instanceof RegExp ? e.needle = t : "object" == typeof t && n.mixin(e, t);
                var s = this.selection.getRange();
                null == e.needle && ((t = this.session.getTextRange(s) || this.$search.$options.needle) || (s = this.session.getWordRange(s.start.row, s.start.column), t = this.session.getTextRange(s)), this.$search.set({
                    needle: t
                })), this.$search.set(e), e.start || this.$search.set({
                    start: s
                });
                var r = this.$search.find(this.session);
                return e.preventScroll ? r : r ? (this.revealRange(r, i), r) : (e.backwards ? s.start = s.end : s.end = s.start, void this.selection.setRange(s))
            }, this.findNext = function(t, e) {
                this.find({
                    skipCurrent: !0,
                    backwards: !1
                }, t, e)
            }, this.findPrevious = function(t, e) {
                this.find(t, {
                    skipCurrent: !0,
                    backwards: !0
                }, e)
            }, this.revealRange = function(t, e) {
                this.session.unfold(t), this.selection.setSelectionRange(t);
                var i = this.renderer.scrollTop;
                this.renderer.scrollSelectionIntoView(t.start, t.end, .5), !1 !== e && this.renderer.animateScrolling(i)
            }, this.undo = function() {
                this.session.getUndoManager().undo(this.session), this.renderer.scrollCursorIntoView(null, .5)
            }, this.redo = function() {
                this.session.getUndoManager().redo(this.session), this.renderer.scrollCursorIntoView(null, .5)
            }, this.destroy = function() {
                this.renderer.destroy(), this._signal("destroy", this), this.session && this.session.destroy()
            }, this.setAutoScrollEditorIntoView = function(t) {
                if (t) {
                    var e, i = this,
                        n = !1;
                    this.$scrollAnchor || (this.$scrollAnchor = document.createElement("div"));
                    var s = this.$scrollAnchor;
                    s.style.cssText = "position:absolute", this.container.insertBefore(s, this.container.firstChild);
                    var r = this.on("changeSelection", function() {
                            n = !0
                        }),
                        o = this.renderer.on("beforeRender", function() {
                            n && (e = i.renderer.container.getBoundingClientRect())
                        }),
                        a = this.renderer.on("afterRender", function() {
                            if (n && e && (i.isFocused() || i.searchBox && i.searchBox.isFocused())) {
                                var t = i.renderer,
                                    r = t.$cursorLayer.$pixelPos,
                                    o = t.layerConfig,
                                    a = r.top - o.offset;
                                null != (n = r.top >= 0 && a + e.top < 0 || !(r.top < o.height && r.top + e.top + o.lineHeight > window.innerHeight) && null) && (s.style.top = a + "px", s.style.left = r.left + "px", s.style.height = o.lineHeight + "px", s.scrollIntoView(n)), n = e = null
                            }
                        });
                    this.setAutoScrollEditorIntoView = function(t) {
                        t || (delete this.setAutoScrollEditorIntoView, this.off("changeSelection", r), this.renderer.off("afterRender", a), this.renderer.off("beforeRender", o))
                    }
                }
            }, this.$resetCursorStyle = function() {
                var t = this.$cursorStyle || "ace",
                    e = this.renderer.$cursorLayer;
                e && (e.setSmoothBlinking(/smooth/.test(t)), e.isBlinking = !this.$readOnly && "wide" != t, s.setCssClass(e.element, "ace_slim-cursors", /slim/.test(t)))
            }
        }).call(y.prototype), v.defineOptions(y.prototype, "editor", {
            selectionStyle: {
                set: function(t) {
                    this.onSelectionChange(), this._signal("changeSelectionStyle", {
                        data: t
                    })
                },
                initialValue: "line"
            },
            highlightActiveLine: {
                set: function() {
                    this.$updateHighlightActiveLine()
                },
                initialValue: !0
            },
            highlightSelectedWord: {
                set: function(t) {
                    this.$onSelectionChange()
                },
                initialValue: !0
            },
            readOnly: {
                set: function(t) {
                    this.textInput.setReadOnly(t), this.$resetCursorStyle()
                },
                initialValue: !1
            },
            copyWithEmptySelection: {
                set: function(t) {
                    this.textInput.setCopyWithEmptySelection(t)
                },
                initialValue: !1
            },
            cursorStyle: {
                set: function(t) {
                    this.$resetCursorStyle()
                },
                values: ["ace", "slim", "smooth", "wide"],
                initialValue: "ace"
            },
            mergeUndoDeltas: {
                values: [!1, !0, "always"],
                initialValue: !0
            },
            behavioursEnabled: {
                initialValue: !0
            },
            wrapBehavioursEnabled: {
                initialValue: !0
            },
            autoScrollEditorIntoView: {
                set: function(t) {
                    this.setAutoScrollEditorIntoView(t)
                }
            },
            keyboardHandler: {
                set: function(t) {
                    this.setKeyboardHandler(t)
                },
                get: function() {
                    return this.$keybindingId
                },
                handlesSet: !0
            },
            value: {
                set: function(t) {
                    this.session.setValue(t)
                },
                get: function() {
                    return this.getValue()
                },
                handlesSet: !0,
                hidden: !0
            },
            session: {
                set: function(t) {
                    this.setSession(t)
                },
                get: function() {
                    return this.session
                },
                handlesSet: !0,
                hidden: !0
            },
            showLineNumbers: {
                set: function(t) {
                    this.renderer.$gutterLayer.setShowLineNumbers(t), this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER), t && this.$relativeLineNumbers ? b.attach(this) : b.detach(this)
                },
                initialValue: !0
            },
            relativeLineNumbers: {
                set: function(t) {
                    this.$showLineNumbers && t ? b.attach(this) : b.detach(this)
                }
            },
            hScrollBarAlwaysVisible: "renderer",
            vScrollBarAlwaysVisible: "renderer",
            highlightGutterLine: "renderer",
            animatedScroll: "renderer",
            showInvisibles: "renderer",
            showPrintMargin: "renderer",
            printMarginColumn: "renderer",
            printMargin: "renderer",
            fadeFoldWidgets: "renderer",
            showFoldWidgets: "renderer",
            displayIndentGuides: "renderer",
            showGutter: "renderer",
            fontSize: "renderer",
            fontFamily: "renderer",
            maxLines: "renderer",
            minLines: "renderer",
            scrollPastEnd: "renderer",
            fixedWidthGutter: "renderer",
            theme: "renderer",
            hasCssTransforms: "renderer",
            maxPixelHeight: "renderer",
            useTextareaForIME: "renderer",
            scrollSpeed: "$mouseHandler",
            dragDelay: "$mouseHandler",
            dragEnabled: "$mouseHandler",
            focusTimeout: "$mouseHandler",
            tooltipFollowsMouse: "$mouseHandler",
            firstLineNumber: "session",
            overwrite: "session",
            newLineMode: "session",
            useWorker: "session",
            useSoftTabs: "session",
            navigateWithinSoftTabs: "session",
            tabSize: "session",
            wrap: "session",
            indentedSoftWrap: "session",
            foldStyle: "session",
            mode: "session"
        });
        var b = {
            getText: function(t, e) {
                return (Math.abs(t.selection.lead.row - e) || e + 1 + (e < 9 ? "\xb7" : "")) + ""
            },
            getWidth: function(t, e, i) {
                return Math.max(e.toString().length, (i.lastRow + 1).toString().length, 2) * i.characterWidth
            },
            update: function(t, e) {
                e.renderer.$loop.schedule(e.renderer.CHANGE_GUTTER)
            },
            attach: function(t) {
                t.renderer.$gutterLayer.$renderer = this, t.on("changeSelection", this.update), this.update(null, t)
            },
            detach: function(t) {
                t.renderer.$gutterLayer.$renderer == this && (t.renderer.$gutterLayer.$renderer = null), t.off("changeSelection", this.update), this.update(null, t)
            }
        };
        e.Editor = y
    }), define("ace/undomanager", ["require", "exports", "module", "ace/range"], function(t, e, i) {
        "use strict";

        function n(t) {
            return {
                row: t.row,
                column: t.column
            }
        }

        function s(t) {
            if (t = t || this, Array.isArray(t)) return t.map(s).join("\n");
            var e = "";
            return t.action ? (e = "insert" == t.action ? "+" : "-", e += "[" + t.lines + "]") : t.value && (e = Array.isArray(t.value) ? t.value.map(r).join("\n") : r(t.value)), t.start && (e += r(t)), (t.id || t.rev) && (e += "\t(" + (t.id || t.rev) + ")"), e
        }

        function r(t) {
            return t.start.row + ":" + t.start.column + "=>" + t.end.row + ":" + t.end.column
        }

        function o(t, e) {
            var i = "insert" == t.action,
                n = "insert" == e.action;
            if (i && n)
                if (m(e.start, t.end) >= 0) h(e, t, -1);
                else {
                    if (!(m(e.start, t.start) <= 0)) return null;
                    h(t, e, 1)
                }
            else if (i && !n)
                if (m(e.start, t.end) >= 0) h(e, t, -1);
                else {
                    if (!(m(e.end, t.start) <= 0)) return null;
                    h(t, e, -1)
                }
            else if (!i && n)
                if (m(e.start, t.start) >= 0) h(e, t, 1);
                else {
                    if (!(m(e.start, t.start) <= 0)) return null;
                    h(t, e, 1)
                }
            else if (!i && !n)
                if (m(e.start, t.start) >= 0) h(e, t, 1);
                else {
                    if (!(m(e.end, t.start) <= 0)) return null;
                    h(t, e, -1)
                }
            return [e, t]
        }

        function a(t, e) {
            for (var i = t.length; i--;)
                for (var n = 0; n < e.length; n++)
                    if (!o(t[i], e[n])) {
                        for (; i < t.length;) {
                            for (; n--;) o(e[n], t[i]);
                            n = e.length, i++
                        }
                        return [t, e]
                    }
            return t.selectionBefore = e.selectionBefore = t.selectionAfter = e.selectionAfter = null, [e, t]
        }

        function l(t, e) {
            var i = "insert" == t.action,
                n = "insert" == e.action;
            if (i && n) m(t.start, e.start) < 0 ? h(e, t, 1) : h(t, e, 1);
            else if (i && !n) m(t.start, e.end) >= 0 ? h(t, e, -1) : m(t.start, e.start) <= 0 ? h(e, t, 1) : (h(t, g.fromPoints(e.start, t.start), -1), h(e, t, 1));
            else if (!i && n) m(e.start, t.end) >= 0 ? h(e, t, -1) : m(e.start, t.start) <= 0 ? h(t, e, 1) : (h(e, g.fromPoints(t.start, e.start), -1), h(t, e, 1));
            else if (!i && !n)
                if (m(e.start, t.end) >= 0) h(e, t, -1);
                else {
                    var s, r;
                    if (!(m(e.end, t.start) <= 0)) return m(t.start, e.start) < 0 && (s = t, t = u(t, e.start)), m(t.end, e.end) > 0 && (r = u(t, e.end)), c(e.end, t.start, t.end, -1), r && !s && (t.lines = r.lines, t.start = r.start, t.end = r.end, r = t), [e, s, r].filter(Boolean);
                    h(t, e, -1)
                }
            return [e, t]
        }

        function h(t, e, i) {
            c(t.start, e.start, e.end, i), c(t.end, e.start, e.end, i)
        }

        function c(t, e, i, n) {
            t.row == (1 == n ? e : i).row && (t.column += n * (i.column - e.column)), t.row += n * (i.row - e.row)
        }

        function u(t, e) {
            var i = t.lines,
                s = t.end;
            t.end = n(e);
            var r = t.end.row - t.start.row,
                o = i.splice(r, i.length),
                a = r ? e.column : e.column - t.start.column;
            return i.push(o[0].substring(0, a)), o[0] = o[0].substr(a), {
                start: n(e),
                end: s,
                lines: o,
                action: t.action
            }
        }

        function d(t, e) {
            e = function(t) {
                return {
                    start: n(t.start),
                    end: n(t.end),
                    action: t.action,
                    lines: t.lines.slice()
                }
            }(e);
            for (var i = t.length; i--;) {
                for (var s = t[i], r = 0; r < s.length; r++) {
                    var o = l(s[r], e);
                    e = o[0], 2 != o.length && (o[2] ? (s.splice(r + 1, 1, o[1], o[2]), r++) : o[1] || (s.splice(r, 1), r--))
                }
                s.length || t.splice(i, 1)
            }
            return t
        }
        var f = function() {
            this.$maxRev = 0, this.$fromUndo = !1, this.reset()
        };
        (function() {
            this.addSession = function(t) {
                this.$session = t
            }, this.add = function(t, e, i) {
                this.$fromUndo || t != this.$lastDelta && (!1 !== e && this.lastDeltas || (this.lastDeltas = [], this.$undoStack.push(this.lastDeltas), t.id = this.$rev = ++this.$maxRev), "remove" != t.action && "insert" != t.action || (this.$lastDelta = t), this.lastDeltas.push(t))
            }, this.addSelection = function(t, e) {
                this.selections.push({
                    value: t,
                    rev: e || this.$rev
                })
            }, this.startNewGroup = function() {
                return this.lastDeltas = null, this.$rev
            }, this.markIgnored = function(t, e) {
                null == e && (e = this.$rev + 1);
                for (var i = this.$undoStack, n = i.length; n--;) {
                    var s = i[n][0];
                    if (s.id <= t) break;
                    s.id < e && (s.ignore = !0)
                }
                this.lastDeltas = null
            }, this.getSelection = function(t, e) {
                for (var i = this.selections, n = i.length; n--;) {
                    var s = i[n];
                    if (s.rev < t) return e && (s = i[n + 1]), s
                }
            }, this.getRevision = function() {
                return this.$rev
            }, this.getDeltas = function(t, e) {
                null == e && (e = this.$rev + 1);
                for (var i = this.$undoStack, n = null, s = 0, r = i.length; r--;) {
                    var o = i[r][0];
                    if (o.id < e && !n && (n = r + 1), o.id <= t) {
                        s = r + 1;
                        break
                    }
                }
                return i.slice(s, n)
            }, this.getChangedRanges = function(t, e) {
                null == e && (e = this.$rev + 1)
            }, this.getChangedLines = function(t, e) {
                null == e && (e = this.$rev + 1)
            }, this.undo = function(t, e) {
                this.lastDeltas = null;
                var i = this.$undoStack;
                if (function(t, e) {
                        for (var i = e; i--;) {
                            var n = t[i];
                            if (n && !n[0].ignore) {
                                for (; i < e - 1;) {
                                    var s = a(t[i], t[i + 1]);
                                    t[i] = s[0], t[i + 1] = s[1], i++
                                }
                                return !0
                            }
                        }
                    }(i, i.length)) {
                    t || (t = this.$session), this.$redoStackBaseRev !== this.$rev && this.$redoStack.length && (this.$redoStack = []), this.$fromUndo = !0;
                    var n = i.pop(),
                        s = null;
                    return n && n.length && (s = t.undoChanges(n, e), this.$redoStack.push(n), this.$syncRev()), this.$fromUndo = !1, s
                }
            }, this.redo = function(t, e) {
                if (this.lastDeltas = null, t || (t = this.$session), this.$fromUndo = !0, this.$redoStackBaseRev != this.$rev) {
                    var i = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
                    (function(t, e) {
                        for (var i = 0; i < e.length; i++)
                            for (var n = e[i], s = 0; s < n.length; s++) d(t, n[s])
                    })(this.$redoStack, i), this.$redoStackBaseRev = this.$rev, this.$redoStack.forEach(function(t) {
                        t[0].id = ++this.$maxRev
                    }, this)
                }
                var n = this.$redoStack.pop(),
                    s = null;
                return n && (s = t.redoChanges(n, e), this.$undoStack.push(n), this.$syncRev()), this.$fromUndo = !1, s
            }, this.$syncRev = function() {
                var t = this.$undoStack,
                    e = t[t.length - 1],
                    i = e && e[0].id || 0;
                this.$redoStackBaseRev = i, this.$rev = i
            }, this.reset = function() {
                this.lastDeltas = null, this.$lastDelta = null, this.$undoStack = [], this.$redoStack = [], this.$rev = 0, this.mark = 0, this.$redoStackBaseRev = this.$rev, this.selections = []
            }, this.canUndo = function() {
                return this.$undoStack.length > 0
            }, this.canRedo = function() {
                return this.$redoStack.length > 0
            }, this.bookmark = function(t) {
                void 0 == t && (t = this.$rev), this.mark = t
            }, this.isAtBookmark = function() {
                return this.$rev === this.mark
            }, this.toJSON = function() {}, this.fromJSON = function() {}, this.hasUndo = this.canUndo, this.hasRedo = this.canRedo, this.isClean = this.isAtBookmark, this.markClean = this.bookmark, this.$prettyPrint = function(t) {
                return t ? s(t) : s(this.$undoStack) + "\n---\n" + s(this.$redoStack)
            }
        }).call(f.prototype);
        var g = t("./range").Range,
            m = g.comparePoints;
        e.UndoManager = f
    }), define("ace/layer/lines", ["require", "exports", "module", "ace/lib/dom"], function(t, e, i) {
        "use strict";
        var n = t("../lib/dom"),
            s = function(t, e) {
                this.element = t, this.canvasHeight = e || 5e5, this.element.style.height = 2 * this.canvasHeight + "px", this.cells = [], this.cellCache = [], this.$offsetCoefficient = 0
            };
        (function() {
            this.moveContainer = function(t) {
                n.translate(this.element, 0, -t.firstRowScreen * t.lineHeight % this.canvasHeight - t.offset * this.$offsetCoefficient)
            }, this.pageChanged = function(t, e) {
                return Math.floor(t.firstRowScreen * t.lineHeight / this.canvasHeight) !== Math.floor(e.firstRowScreen * e.lineHeight / this.canvasHeight)
            }, this.computeLineTop = function(t, e, i) {
                var n = Math.floor(e.firstRowScreen * e.lineHeight / this.canvasHeight);
                return i.documentToScreenRow(t, 0) * e.lineHeight - n * this.canvasHeight
            }, this.computeLineHeight = function(t, e, i) {
                return e.lineHeight * i.getRowLength(t)
            }, this.getLength = function() {
                return this.cells.length
            }, this.get = function(t) {
                return this.cells[t]
            }, this.shift = function() {
                this.$cacheCell(this.cells.shift())
            }, this.pop = function() {
                this.$cacheCell(this.cells.pop())
            }, this.push = function(t) {
                if (Array.isArray(t)) {
                    this.cells.push.apply(this.cells, t);
                    for (var e = n.createFragment(this.element), i = 0; i < t.length; i++) e.appendChild(t[i].element);
                    this.element.appendChild(e)
                } else this.cells.push(t), this.element.appendChild(t.element)
            }, this.unshift = function(t) {
                if (Array.isArray(t)) {
                    this.cells.unshift.apply(this.cells, t);
                    for (var e = n.createFragment(this.element), i = 0; i < t.length; i++) e.appendChild(t[i].element);
                    this.element.firstChild ? this.element.insertBefore(e, this.element.firstChild) : this.element.appendChild(e)
                } else this.cells.unshift(t), this.element.insertAdjacentElement("afterbegin", t.element)
            }, this.last = function() {
                return this.cells.length ? this.cells[this.cells.length - 1] : null
            }, this.$cacheCell = function(t) {
                t && (t.element.remove(), this.cellCache.push(t))
            }, this.createCell = function(t, e, i, s) {
                var r = this.cellCache.pop();
                if (!r) {
                    var o = n.createElement("div");
                    s && s(o), this.element.appendChild(o), r = {
                        element: o,
                        text: "",
                        row: t
                    }
                }
                return r.row = t, r
            }
        }).call(s.prototype), e.Lines = s
    }), define("ace/layer/gutter", ["require", "exports", "module", "ace/lib/dom", "ace/lib/oop", "ace/lib/lang", "ace/lib/event_emitter", "ace/layer/lines"], function(t, e, i) {
        "use strict";

        function n(t) {
            var e = document.createTextNode("");
            t.appendChild(e);
            var i = s.createElement("span");
            return t.appendChild(i), t
        }
        var s = t("../lib/dom"),
            r = t("../lib/oop"),
            o = t("../lib/lang"),
            a = t("../lib/event_emitter").EventEmitter,
            l = t("./lines").Lines,
            h = function(t) {
                this.element = s.createElement("div"), this.element.className = "ace_layer ace_gutter-layer", t.appendChild(this.element), this.setShowFoldWidgets(this.$showFoldWidgets), this.gutterWidth = 0, this.$annotations = [], this.$updateAnnotations = this.$updateAnnotations.bind(this), this.$lines = new l(this.element), this.$lines.$offsetCoefficient = 1
            };
        (function() {
            r.implement(this, a), this.setSession = function(t) {
                this.session && this.session.removeEventListener("change", this.$updateAnnotations), this.session = t, t && t.on("change", this.$updateAnnotations)
            }, this.addGutterDecoration = function(t, e) {
                window.console && console.warn && console.warn("deprecated use session.addGutterDecoration"), this.session.addGutterDecoration(t, e)
            }, this.removeGutterDecoration = function(t, e) {
                window.console && console.warn && console.warn("deprecated use session.removeGutterDecoration"), this.session.removeGutterDecoration(t, e)
            }, this.setAnnotations = function(t) {
                this.$annotations = [];
                for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                        n = i.row,
                        s = this.$annotations[n];
                    s || (s = this.$annotations[n] = {
                        text: []
                    });
                    var r = i.text;
                    r = r ? o.escapeHTML(r) : i.html || "", -1 === s.text.indexOf(r) && s.text.push(r);
                    var a = i.type;
                    "error" == a ? s.className = " ace_error" : "warning" == a && " ace_error" != s.className ? s.className = " ace_warning" : "info" == a && !s.className && (s.className = " ace_info")
                }
            }, this.$updateAnnotations = function(t) {
                if (this.$annotations.length) {
                    var e = t.start.row,
                        i = t.end.row - e;
                    if (0 !== i)
                        if ("remove" == t.action) this.$annotations.splice(e, i + 1, null);
                        else {
                            var n = new Array(i + 1);
                            n.unshift(e, 1), this.$annotations.splice.apply(this.$annotations, n)
                        }
                }
            }, this.update = function(t) {
                this.config = t;
                var e = this.session,
                    i = t.firstRow,
                    s = Math.min(t.lastRow + t.gutterOffset, e.getLength() - 1);
                this.oldLastRow = s, this.config = t, this.$lines.moveContainer(t), this.$updateCursorRow();
                for (var r = e.getNextFoldLine(i), o = r ? r.start.row : 1 / 0, a = null, l = -1, h = i;;) {
                    if (h > o && (o = (r = e.getNextFoldLine(h = r.end.row + 1, r)) ? r.start.row : 1 / 0), h > s) {
                        for (; this.$lines.getLength() > l + 1;) this.$lines.pop();
                        break
                    }(a = this.$lines.get(++l)) ? a.row = h: (a = this.$lines.createCell(h, t, this.session, n), this.$lines.push(a)), this.$renderCell(a, t, r, h), h++
                }
                this._signal("afterRender"), this.$updateGutterWidth(t)
            }, this.$updateGutterWidth = function(t) {
                var e = this.session,
                    i = e.gutterRenderer || this.$renderer,
                    n = e.$firstLineNumber,
                    s = this.$lines.last() ? this.$lines.last().text : "";
                (this.$fixedWidth || e.$useWrapMode) && (s = e.getLength() + n);
                var r = i ? i.getWidth(e, s, t) : s.toString().length * t.characterWidth,
                    o = this.$padding || this.$computePadding();
                (r += o.left + o.right) !== this.gutterWidth && !isNaN(r) && (this.gutterWidth = r, this.element.parentNode.style.width = this.element.style.width = Math.ceil(this.gutterWidth) + "px", this._signal("changeGutterWidth", r))
            }, this.$updateCursorRow = function() {
                if (this.$highlightGutterLine) {
                    var t = this.session.selection.getCursor();
                    this.$cursorRow !== t.row && (this.$cursorRow = t.row)
                }
            }, this.updateLineHighlight = function() {
                if (this.$highlightGutterLine) {
                    var t = this.session.selection.cursor.row;
                    if (this.$cursorRow = t, !this.$cursorCell || this.$cursorCell.row != t) {
                        this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", ""));
                        var e = this.$lines.cells;
                        this.$cursorCell = null;
                        for (var i = 0; i < e.length; i++) {
                            var n = e[i];
                            if (n.row >= this.$cursorRow) {
                                if (n.row > this.$cursorRow) {
                                    var s = this.session.getFoldLine(this.$cursorRow);
                                    if (!(i > 0 && s && s.start.row == e[i - 1].row)) break;
                                    n = e[i - 1]
                                }
                                n.element.className = "ace_gutter-active-line " + n.element.className, this.$cursorCell = n;
                                break
                            }
                        }
                    }
                }
            }, this.scrollLines = function(t) {
                var e = this.config;
                if (this.config = t, this.$updateCursorRow(), this.$lines.pageChanged(e, t)) return this.update(t);
                this.$lines.moveContainer(t);
                var i = Math.min(t.lastRow + t.gutterOffset, this.session.getLength() - 1),
                    n = this.oldLastRow;
                if (this.oldLastRow = i, !e || n < t.firstRow) return this.update(t);
                if (i < e.firstRow) return this.update(t);
                if (e.firstRow < t.firstRow)
                    for (var s = this.session.getFoldedRowCount(e.firstRow, t.firstRow - 1); s > 0; s--) this.$lines.shift();
                if (n > i)
                    for (s = this.session.getFoldedRowCount(i + 1, n); s > 0; s--) this.$lines.pop();
                t.firstRow < e.firstRow && this.$lines.unshift(this.$renderLines(t, t.firstRow, e.firstRow - 1)), i > n && this.$lines.push(this.$renderLines(t, n + 1, i)), this.updateLineHighlight(), this._signal("afterRender"), this.$updateGutterWidth(t)
            }, this.$renderLines = function(t, e, i) {
                for (var s = [], r = e, o = this.session.getNextFoldLine(r), a = o ? o.start.row : 1 / 0; r > a && (a = (o = this.session.getNextFoldLine(r = o.end.row + 1, o)) ? o.start.row : 1 / 0), !(r > i);) {
                    var l = this.$lines.createCell(r, t, this.session, n);
                    this.$renderCell(l, t, o, r), s.push(l), r++
                }
                return s
            }, this.$renderCell = function(t, e, i, n) {
                var r = t.element,
                    o = this.session,
                    a = r.childNodes[0],
                    l = r.childNodes[1],
                    h = o.$firstLineNumber,
                    c = o.$breakpoints,
                    u = o.$decorations,
                    d = o.gutterRenderer || this.$renderer,
                    f = this.$showFoldWidgets && o.foldWidgets,
                    g = i ? i.start.row : Number.MAX_VALUE,
                    m = "ace_gutter-cell ";
                if (this.$highlightGutterLine && (n == this.$cursorRow || i && n < this.$cursorRow && n >= g && this.$cursorRow <= i.end.row) && (m += "ace_gutter-active-line ", this.$cursorCell != t && (this.$cursorCell && (this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "")), this.$cursorCell = t)), c[n] && (m += c[n]), u[n] && (m += u[n]), this.$annotations[n] && (m += this.$annotations[n].className), r.className != m && (r.className = m), f) {
                    var p = f[n];
                    null == p && (p = f[n] = o.getFoldWidget(n))
                }
                p ? (m = "ace_fold-widget ace_" + p, l.className != (m += "start" == p && n == g && n < i.end.row ? " ace_closed" : " ace_open") && (l.className = m), s.setStyle(l.style, "height", e.lineHeight + "px"), s.setStyle(l.style, "display", "inline-block")) : l && s.setStyle(l.style, "display", "none");
                var v = (d ? d.getText(o, n) : n + h).toString();
                return v !== a.data && (a.data = v), s.setStyle(t.element.style, "height", this.$lines.computeLineHeight(n, e, o) + "px"), s.setStyle(t.element.style, "top", this.$lines.computeLineTop(n, e, o) + "px"), t.text = v, t
            }, this.$fixedWidth = !1, this.$highlightGutterLine = !0, this.$renderer = "", this.setHighlightGutterLine = function(t) {
                this.$highlightGutterLine = t
            }, this.$showLineNumbers = !0, this.$renderer = "", this.setShowLineNumbers = function(t) {
                this.$renderer = !t && {
                    getWidth: function() {
                        return ""
                    },
                    getText: function() {
                        return ""
                    }
                }
            }, this.getShowLineNumbers = function() {
                return this.$showLineNumbers
            }, this.$showFoldWidgets = !0, this.setShowFoldWidgets = function(t) {
                t ? s.addCssClass(this.element, "ace_folding-enabled") : s.removeCssClass(this.element, "ace_folding-enabled"), this.$showFoldWidgets = t, this.$padding = null
            }, this.getShowFoldWidgets = function() {
                return this.$showFoldWidgets
            }, this.$computePadding = function() {
                if (!this.element.firstChild) return {
                    left: 0,
                    right: 0
                };
                var t = s.computedStyle(this.element.firstChild);
                return this.$padding = {}, this.$padding.left = (parseInt(t.borderLeftWidth) || 0) + (parseInt(t.paddingLeft) || 0) + 1, this.$padding.right = (parseInt(t.borderRightWidth) || 0) + (parseInt(t.paddingRight) || 0), this.$padding
            }, this.getRegion = function(t) {
                var e = this.$padding || this.$computePadding(),
                    i = this.element.getBoundingClientRect();
                return t.x < e.left + i.left ? "markers" : this.$showFoldWidgets && t.x > i.right - e.right ? "foldWidgets" : void 0
            }
        }).call(h.prototype), e.Gutter = h
    }), define("ace/layer/marker", ["require", "exports", "module", "ace/range", "ace/lib/dom"], function(t, e, i) {
        "use strict";
        var n = t("../range").Range,
            s = t("../lib/dom"),
            r = function(t) {
                this.element = s.createElement("div"), this.element.className = "ace_layer ace_marker-layer", t.appendChild(this.element)
            };
        (function() {
            function t(t, e, i, n) {
                return (t ? 1 : 0) | (e ? 2 : 0) | (i ? 4 : 0) | (n ? 8 : 0)
            }
            this.$padding = 0, this.setPadding = function(t) {
                this.$padding = t
            }, this.setSession = function(t) {
                this.session = t
            }, this.setMarkers = function(t) {
                this.markers = t
            }, this.elt = function(t, e) {
                var i = -1 != this.i && this.element.childNodes[this.i];
                i ? this.i++ : (i = document.createElement("div"), this.element.appendChild(i), this.i = -1), i.style.cssText = e, i.className = t
            }, this.update = function(t) {
                if (t) {
                    var e;
                    for (var i in this.config = t, this.i = 0, this.markers) {
                        var n = this.markers[i];
                        if (n.range) {
                            var s = n.range.clipRows(t.firstRow, t.lastRow);
                            if (!s.isEmpty())
                                if (s = s.toScreenRange(this.session), n.renderer) {
                                    var r = this.$getTop(s.start.row, t);
                                    n.renderer(e, s, this.$padding + s.start.column * t.characterWidth, r, t)
                                } else "fullLine" == n.type ? this.drawFullLineMarker(e, s, n.clazz, t) : "screenLine" == n.type ? this.drawScreenLineMarker(e, s, n.clazz, t) : s.isMultiLine() ? "text" == n.type ? this.drawTextMarker(e, s, n.clazz, t) : this.drawMultiLineMarker(e, s, n.clazz, t) : this.drawSingleLineMarker(e, s, n.clazz + " ace_start ace_br15", t)
                        } else n.update(e, this, this.session, t)
                    }
                    if (-1 != this.i)
                        for (; this.i < this.element.childElementCount;) this.element.removeChild(this.element.lastChild)
                }
            }, this.$getTop = function(t, e) {
                return (t - e.firstRowScreen) * e.lineHeight
            }, this.drawTextMarker = function(e, i, s, r, o) {
                for (var a = this.session, l = i.start.row, h = i.end.row, c = l, u = 0, d = 0, f = a.getScreenLastRowColumn(c), g = new n(c, i.start.column, c, d); c <= h; c++) g.start.row = g.end.row = c, g.start.column = c == l ? i.start.column : a.getRowWrapIndent(c), g.end.column = f, u = d, d = f, f = c + 1 < h ? a.getScreenLastRowColumn(c + 1) : c == h ? 0 : i.end.column, this.drawSingleLineMarker(e, g, s + (c == l ? " ace_start" : "") + " ace_br" + t(c == l || c == l + 1 && i.start.column, u < d, d > f, c == h), r, c == h ? 0 : 1, o)
            }, this.drawMultiLineMarker = function(t, e, i, n, s) {
                var r, o = this.$padding,
                    a = n.lineHeight,
                    l = this.$getTop(e.start.row, n),
                    h = o + e.start.column * n.characterWidth;
                if (s = s || "", this.session.$bidiHandler.isBidiRow(e.start.row) ? ((r = e.clone()).end.row = r.start.row, r.end.column = this.session.getLine(r.start.row).length, this.drawBidiSingleLineMarker(t, r, i + " ace_br1 ace_start", n, null, s)) : this.elt(i + " ace_br1 ace_start", "height:" + a + "px;right:0;top:" + l + "px;left:" + h + "px;" + (s || "")), this.session.$bidiHandler.isBidiRow(e.end.row) ? ((r = e.clone()).start.row = r.end.row, r.start.column = 0, this.drawBidiSingleLineMarker(t, r, i + " ace_br12", n, null, s)) : (l = this.$getTop(e.end.row, n), this.elt(i + " ace_br12", "height:" + a + "px;width:" + e.end.column * n.characterWidth + "px;top:" + l + "px;left:" + o + "px;" + (s || ""))), !((a = (e.end.row - e.start.row - 1) * n.lineHeight) <= 0)) {
                    l = this.$getTop(e.start.row + 1, n);
                    var c = (e.start.column ? 1 : 0) | (e.end.column ? 0 : 8);
                    this.elt(i + (c ? " ace_br" + c : ""), "height:" + a + "px;right:0;top:" + l + "px;left:" + o + "px;" + (s || ""))
                }
            }, this.drawSingleLineMarker = function(t, e, i, n, s, r) {
                if (this.session.$bidiHandler.isBidiRow(e.start.row)) return this.drawBidiSingleLineMarker(t, e, i, n, s, r);
                var o = n.lineHeight,
                    a = (e.end.column + (s || 0) - e.start.column) * n.characterWidth,
                    l = this.$getTop(e.start.row, n);
                this.elt(i, "height:" + o + "px;width:" + a + "px;top:" + l + "px;left:" + (this.$padding + e.start.column * n.characterWidth) + "px;" + (r || ""))
            }, this.drawBidiSingleLineMarker = function(t, e, i, n, s, r) {
                var o = n.lineHeight,
                    a = this.$getTop(e.start.row, n),
                    l = this.$padding;
                this.session.$bidiHandler.getSelections(e.start.column, e.end.column).forEach(function(t) {
                    this.elt(i, "height:" + o + "px;width:" + t.width + (s || 0) + "px;top:" + a + "px;left:" + (l + t.left) + "px;" + (r || ""))
                }, this)
            }, this.drawFullLineMarker = function(t, e, i, n, s) {
                var r = this.$getTop(e.start.row, n),
                    o = n.lineHeight;
                e.start.row != e.end.row && (o += this.$getTop(e.end.row, n) - r), this.elt(i, "height:" + o + "px;top:" + r + "px;left:0;right:0;" + (s || ""))
            }, this.drawScreenLineMarker = function(t, e, i, n, s) {
                var r = this.$getTop(e.start.row, n);
                this.elt(i, "height:" + n.lineHeight + "px;top:" + r + "px;left:0;right:0;" + (s || ""))
            }
        }).call(r.prototype), e.Marker = r
    }), define("ace/layer/text", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/layer/lines", "ace/lib/event_emitter"], function(t, e, i) {
        "use strict";
        var n = t("../lib/oop"),
            s = t("../lib/dom"),
            r = t("../lib/lang"),
            o = t("./lines").Lines,
            a = t("../lib/event_emitter").EventEmitter,
            l = function(t) {
                this.dom = s, this.element = this.dom.createElement("div"), this.element.className = "ace_layer ace_text-layer", t.appendChild(this.element), this.$updateEolChar = this.$updateEolChar.bind(this), this.$lines = new o(this.element)
            };
        (function() {
            n.implement(this, a), this.EOF_CHAR = "\xb6", this.EOL_CHAR_LF = "\xac", this.EOL_CHAR_CRLF = "\xa4", this.EOL_CHAR = this.EOL_CHAR_LF, this.TAB_CHAR = "\u2014", this.SPACE_CHAR = "\xb7", this.$padding = 0, this.MAX_LINE_LENGTH = 1e4, this.$updateEolChar = function() {
                var t = this.session.doc,
                    e = "\n" == t.getNewLineCharacter() && "windows" != t.getNewLineMode() ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
                if (this.EOL_CHAR != e) return this.EOL_CHAR = e, !0
            }, this.setPadding = function(t) {
                this.$padding = t, this.element.style.margin = "0 " + t + "px"
            }, this.getLineHeight = function() {
                return this.$fontMetrics.$characterSize.height || 0
            }, this.getCharacterWidth = function() {
                return this.$fontMetrics.$characterSize.width || 0
            }, this.$setFontMetrics = function(t) {
                this.$fontMetrics = t, this.$fontMetrics.on("changeCharacterSize", (function(t) {
                    this._signal("changeCharacterSize", t)
                }).bind(this)), this.$pollSizeChanges()
            }, this.checkForSizeChanges = function() {
                this.$fontMetrics.checkForSizeChanges()
            }, this.$pollSizeChanges = function() {
                return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges()
            }, this.setSession = function(t) {
                this.session = t, t && this.$computeTabString()
            }, this.showInvisibles = !1, this.setShowInvisibles = function(t) {
                return this.showInvisibles != t && (this.showInvisibles = t, this.$computeTabString(), !0)
            }, this.displayIndentGuides = !0, this.setDisplayIndentGuides = function(t) {
                return this.displayIndentGuides != t && (this.displayIndentGuides = t, this.$computeTabString(), !0)
            }, this.$tabStrings = [], this.onChangeTabSize = this.$computeTabString = function() {
                var t = this.session.getTabSize();
                this.tabSize = t;
                for (var e = this.$tabStrings = [0], i = 1; i < t + 1; i++) this.showInvisibles ? ((n = this.dom.createElement("span")).className = "ace_invisible ace_invisible_tab", n.textContent = r.stringRepeat(this.TAB_CHAR, i), e.push(n)) : e.push(this.dom.createTextNode(r.stringRepeat(" ", i), this.element));
                if (this.displayIndentGuides) {
                    this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                    var n, s = "ace_indent-guide",
                        o = "",
                        a = "";
                    if (this.showInvisibles) {
                        s += " ace_invisible", o = " ace_invisible_space", a = " ace_invisible_tab";
                        var l = r.stringRepeat(this.SPACE_CHAR, this.tabSize),
                            h = r.stringRepeat(this.TAB_CHAR, this.tabSize)
                    } else h = l = r.stringRepeat(" ", this.tabSize);
                    (n = this.dom.createElement("span")).className = s + o, n.textContent = l, this.$tabStrings[" "] = n, (n = this.dom.createElement("span")).className = s + a, n.textContent = h, this.$tabStrings["\t"] = n
                }
            }, this.updateLines = function(t, e, i) {
                if (this.config.lastRow != t.lastRow || this.config.firstRow != t.firstRow) return this.update(t);
                this.config = t;
                for (var n = Math.max(e, t.firstRow), s = Math.min(i, t.lastRow), r = this.element.childNodes, o = 0, a = t.firstRow; a < n; a++) {
                    if (l = this.session.getFoldLine(a)) {
                        if (l.containsRow(n)) {
                            n = l.start.row;
                            break
                        }
                        a = l.end.row
                    }
                    o++
                }
                for (var l, h = !1, c = (l = this.session.getNextFoldLine(a = n)) ? l.start.row : 1 / 0; a > c && (c = (l = this.session.getNextFoldLine(a = l.end.row + 1, l)) ? l.start.row : 1 / 0), !(a > s);) {
                    var u = r[o++];
                    if (u) {
                        this.dom.removeChildren(u), this.$renderLine(u, a, a == c && l);
                        var d = t.lineHeight * this.session.getRowLength(a) + "px";
                        u.style.height != d && (h = !0, u.style.height = d)
                    }
                    a++
                }
                if (h)
                    for (; o < this.$lines.cells.length;) {
                        var f = this.$lines.cells[o++];
                        f.element.style.top = this.$lines.computeLineTop(f.row, t, this.session) + "px"
                    }
            }, this.scrollLines = function(t) {
                var e = this.config;
                if (this.config = t, this.$lines.pageChanged(e, t)) return this.update(t);
                this.$lines.moveContainer(t);
                var i = t.lastRow;
                if (!e || (e ? e.lastRow : -1) < t.firstRow) return this.update(t);
                if (i < e.firstRow) return this.update(t);
                if (!e || e.lastRow < t.firstRow) return this.update(t);
                if (t.lastRow < e.firstRow) return this.update(t);
                if (e.firstRow < t.firstRow)
                    for (var n = this.session.getFoldedRowCount(e.firstRow, t.firstRow - 1); n > 0; n--) this.$lines.shift();
                if (e.lastRow > t.lastRow)
                    for (n = this.session.getFoldedRowCount(t.lastRow + 1, e.lastRow); n > 0; n--) this.$lines.pop();
                t.firstRow < e.firstRow && this.$lines.unshift(this.$renderLinesFragment(t, t.firstRow, e.firstRow - 1)), t.lastRow > e.lastRow && this.$lines.push(this.$renderLinesFragment(t, e.lastRow + 1, t.lastRow))
            }, this.$renderLinesFragment = function(t, e, i) {
                for (var n = [], r = e, o = this.session.getNextFoldLine(r), a = o ? o.start.row : 1 / 0; r > a && (a = (o = this.session.getNextFoldLine(r = o.end.row + 1, o)) ? o.start.row : 1 / 0), !(r > i);) {
                    var l = this.$lines.createCell(r, t, this.session),
                        h = l.element;
                    this.dom.removeChildren(h), s.setStyle(h.style, "height", this.$lines.computeLineHeight(r, t, this.session) + "px"), s.setStyle(h.style, "top", this.$lines.computeLineTop(r, t, this.session) + "px"), this.$renderLine(h, r, r == a && o), h.className = this.$useLineGroups() ? "ace_line_group" : "ace_line", n.push(l), r++
                }
                return n
            }, this.update = function(t) {
                this.$lines.moveContainer(t), this.config = t;
                for (var e = t.firstRow, i = t.lastRow, n = this.$lines; n.getLength();) n.pop();
                n.push(this.$renderLinesFragment(t, e, i))
            }, this.$textToken = {
                text: !0,
                rparen: !0,
                lparen: !0
            }, this.$renderToken = function(t, e, i, n) {
                for (var o, a = this, l = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, h = this.dom.createFragment(this.element), c = 0; o = l.exec(n);) {
                    var u = o[1],
                        d = o[2],
                        f = o[3],
                        g = o[4],
                        m = o[5];
                    if (a.showInvisibles || !d) {
                        var p = c != o.index ? n.slice(c, o.index) : "";
                        if (c = o.index + o[0].length, p && h.appendChild(this.dom.createTextNode(p, this.element)), u) {
                            var v = a.session.getScreenTabSize(e + o.index);
                            h.appendChild(a.$tabStrings[v].cloneNode(!0)), e += v - 1
                        } else d ? a.showInvisibles ? ((w = this.dom.createElement("span")).className = "ace_invisible ace_invisible_space", w.textContent = r.stringRepeat(a.SPACE_CHAR, d.length), h.appendChild(w)) : h.appendChild(this.com.createTextNode(d, this.element)) : f ? ((w = this.dom.createElement("span")).className = "ace_invisible ace_invisible_space ace_invalid", w.textContent = r.stringRepeat(a.SPACE_CHAR, f.length), h.appendChild(w)) : g ? (e += 1, (w = this.dom.createElement("span")).style.width = 2 * a.config.characterWidth + "px", w.className = a.showInvisibles ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk", w.textContent = a.showInvisibles ? a.SPACE_CHAR : "", h.appendChild(w)) : m && (e += 1, (w = s.createElement("span")).style.width = 2 * a.config.characterWidth + "px", w.className = "ace_cjk", w.textContent = m, h.appendChild(w))
                    }
                }
                if (h.appendChild(this.dom.createTextNode(c ? n.slice(c) : n, this.element)), this.$textToken[i.type]) t.appendChild(h);
                else {
                    var _ = "ace_" + i.type.replace(/\./g, " ace_"),
                        w = this.dom.createElement("span");
                    "fold" == i.type && (w.style.width = i.value.length * this.config.characterWidth + "px"), w.className = _, w.appendChild(h), t.appendChild(w)
                }
                return e + n.length
            }, this.renderIndentGuide = function(t, e, i) {
                var n = e.search(this.$indentGuideRe);
                if (n <= 0 || n >= i) return e;
                if (" " == e[0]) {
                    for (var s = (n -= n % this.tabSize) / this.tabSize, r = 0; r < s; r++) t.appendChild(this.$tabStrings[" "].cloneNode(!0));
                    return e.substr(n)
                }
                if ("\t" == e[0]) {
                    for (r = 0; r < n; r++) t.appendChild(this.$tabStrings["\t"].cloneNode(!0));
                    return e.substr(n)
                }
                return e
            }, this.$createLineElement = function(t) {
                var e = this.dom.createElement("div");
                return e.className = "ace_line", e.style.height = this.config.lineHeight + "px", e
            }, this.$renderWrappedLine = function(t, e, i) {
                var n = 0,
                    s = 0,
                    o = i[0],
                    a = 0,
                    l = this.$createLineElement();
                t.appendChild(l);
                for (var h = 0; h < e.length; h++) {
                    var c = e[h],
                        u = c.value;
                    if (0 == h && this.displayIndentGuides) {
                        if (n = u.length, !(u = this.renderIndentGuide(l, u, o))) continue;
                        n -= u.length
                    }
                    if (n + u.length < o) a = this.$renderToken(l, a, c, u), n += u.length;
                    else {
                        for (; n + u.length >= o;) a = this.$renderToken(l, a, c, u.substring(0, o - n)), u = u.substring(o - n), n = o, l = this.$createLineElement(), t.appendChild(l), l.appendChild(this.dom.createTextNode(r.stringRepeat("\xa0", i.indent), this.element)), a = 0, o = i[++s] || Number.MAX_VALUE;
                        0 != u.length && (n += u.length, a = this.$renderToken(l, a, c, u))
                    }
                }
            }, this.$renderSimpleLine = function(t, e) {
                var i = 0,
                    n = e[0],
                    s = n.value;
                this.displayIndentGuides && (s = this.renderIndentGuide(t, s)), s && (i = this.$renderToken(t, i, n, s));
                for (var r = 1; r < e.length; r++) {
                    if (i + (s = (n = e[r]).value).length > this.MAX_LINE_LENGTH) return this.$renderOverflowMessage(t, i, n, s);
                    i = this.$renderToken(t, i, n, s)
                }
            }, this.$renderOverflowMessage = function(t, e, i, n) {
                this.$renderToken(t, e, i, n.slice(0, this.MAX_LINE_LENGTH - e));
                var s = this.dom.createElement("span");
                s.className = "ace_inline_button ace_keyword ace_toggle_wrap", s.style.position = "absolute", s.style.right = "0", s.textContent = "<click to see more...>", t.appendChild(s)
            }, this.$renderLine = function(t, e, i) {
                if (!i && 0 != i && (i = this.session.getFoldLine(e)), i) var n = this.$getFoldLineTokens(e, i);
                else n = this.session.getTokens(e);
                var s = t;
                if (n.length) {
                    var r = this.session.getRowSplitData(e);
                    r && r.length ? (this.$renderWrappedLine(t, n, r), s = t.lastChild) : (s = t, this.$useLineGroups() && (s = this.$createLineElement(), t.appendChild(s)), this.$renderSimpleLine(s, n))
                } else this.$useLineGroups() && (s = this.$createLineElement(), t.appendChild(s));
                if (this.showInvisibles && s) {
                    i && (e = i.end.row);
                    var o = this.dom.createElement("span");
                    o.className = "ace_invisible ace_invisible_eol", o.textContent = e == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR, s.appendChild(o)
                }
            }, this.$getFoldLineTokens = function(t, e) {
                var i = this.session,
                    n = [],
                    s = i.getTokens(t);
                return e.walk(function(t, e, r, o, a) {
                    null != t ? n.push({
                        type: "fold",
                        value: t
                    }) : (a && (s = i.getTokens(e)), s.length && function(t, e, i) {
                        for (var s = 0, r = 0; r + t[s].value.length < e;)
                            if (r += t[s].value.length, ++s == t.length) return;
                        for (r != e && ((o = t[s].value.substring(e - r)).length > i - e && (o = o.substring(0, i - e)), n.push({
                                type: t[s].type,
                                value: o
                            }), r = e + o.length, s += 1); r < i && s < t.length;) {
                            var o;
                            n.push((o = t[s].value).length + r > i ? {
                                type: t[s].type,
                                value: o.substring(0, i - r)
                            } : t[s]), r += o.length, s += 1
                        }
                    }(s, o, r))
                }, e.end.row, this.session.getLine(e.end.row).length), n
            }, this.$useLineGroups = function() {
                return this.session.getUseWrapMode()
            }, this.destroy = function() {}
        }).call(l.prototype), e.Text = l
    }), define("ace/layer/cursor", ["require", "exports", "module", "ace/lib/dom"], function(t, e, i) {
        "use strict";
        var n = t("../lib/dom"),
            s = function(t) {
                this.element = n.createElement("div"), this.element.className = "ace_layer ace_cursor-layer", t.appendChild(this.element), this.isVisible = !1, this.isBlinking = !0, this.blinkInterval = 1e3, this.smoothBlinking = !1, this.cursors = [], this.cursor = this.addCursor(), n.addCssClass(this.element, "ace_hidden-cursors"), this.$updateCursors = this.$updateOpacity.bind(this)
            };
        (function() {
            this.$updateOpacity = function(t) {
                for (var e = this.cursors, i = e.length; i--;) n.setStyle(e[i].style, "opacity", t ? "" : "0")
            }, this.$startCssAnimation = function() {
                for (var t = this.cursors, e = t.length; e--;) t[e].style.animationDuration = this.blinkInterval + "ms";
                setTimeout((function() {
                    n.addCssClass(this.element, "ace_animate-blinking")
                }).bind(this))
            }, this.$stopCssAnimation = function() {
                n.removeCssClass(this.element, "ace_animate-blinking")
            }, this.$padding = 0, this.setPadding = function(t) {
                this.$padding = t
            }, this.setSession = function(t) {
                this.session = t
            }, this.setBlinking = function(t) {
                t != this.isBlinking && (this.isBlinking = t, this.restartTimer())
            }, this.setBlinkInterval = function(t) {
                t != this.blinkInterval && (this.blinkInterval = t, this.restartTimer())
            }, this.setSmoothBlinking = function(t) {
                t != this.smoothBlinking && (this.smoothBlinking = t, n.setCssClass(this.element, "ace_smooth-blinking", t), this.$updateCursors(!0), this.restartTimer())
            }, this.addCursor = function() {
                var t = n.createElement("div");
                return t.className = "ace_cursor", this.element.appendChild(t), this.cursors.push(t), t
            }, this.removeCursor = function() {
                if (this.cursors.length > 1) {
                    var t = this.cursors.pop();
                    return t.parentNode.removeChild(t), t
                }
            }, this.hideCursor = function() {
                this.isVisible = !1, n.addCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
            }, this.showCursor = function() {
                this.isVisible = !0, n.removeCssClass(this.element, "ace_hidden-cursors"), this.restartTimer()
            }, this.restartTimer = function() {
                var t = this.$updateCursors;
                if (clearInterval(this.intervalId), clearTimeout(this.timeoutId), this.$stopCssAnimation(), this.smoothBlinking && n.removeCssClass(this.element, "ace_smooth-blinking"), t(!0), this.isBlinking && this.blinkInterval && this.isVisible)
                    if (this.smoothBlinking && setTimeout((function() {
                            n.addCssClass(this.element, "ace_smooth-blinking")
                        }).bind(this)), n.HAS_CSS_ANIMATION) this.$startCssAnimation();
                    else {
                        var e = (function() {
                            this.timeoutId = setTimeout(function() {
                                t(!1)
                            }, .6 * this.blinkInterval)
                        }).bind(this);
                        this.intervalId = setInterval(function() {
                            t(!0), e()
                        }, this.blinkInterval), e()
                    }
                else this.$stopCssAnimation()
            }, this.getPixelPosition = function(t, e) {
                if (!this.config || !this.session) return {
                    left: 0,
                    top: 0
                };
                t || (t = this.session.selection.getCursor());
                var i = this.session.documentToScreenPosition(t);
                return {
                    left: this.$padding + (this.session.$bidiHandler.isBidiRow(i.row, t.row) ? this.session.$bidiHandler.getPosLeft(i.column) : i.column * this.config.characterWidth),
                    top: (i.row - (e ? this.config.firstRowScreen : 0)) * this.config.lineHeight
                }
            }, this.isCursorInView = function(t, e) {
                return t.top >= 0 && t.top < e.maxHeight
            }, this.update = function(t) {
                this.config = t;
                var e = this.session.$selectionMarkers,
                    i = 0,
                    s = 0;
                void 0 !== e && 0 !== e.length || (e = [{
                    cursor: null
                }]), i = 0;
                for (var r = e.length; i < r; i++) {
                    var o = this.getPixelPosition(e[i].cursor, !0);
                    if (!((o.top > t.height + t.offset || o.top < 0) && i > 1)) {
                        var a = this.cursors[s++] || this.addCursor(),
                            l = a.style;
                        this.drawCursor ? this.drawCursor(a, o, t, e[i], this.session) : this.isCursorInView(o, t) ? (n.setStyle(l, "display", "block"), n.translate(a, o.left, o.top), n.setStyle(l, "width", Math.round(t.characterWidth) + "px"), n.setStyle(l, "height", t.lineHeight + "px")) : n.setStyle(l, "display", "none")
                    }
                }
                for (; this.cursors.length > s;) this.removeCursor();
                var h = this.session.getOverwrite();
                this.$setOverwrite(h), this.$pixelPos = o, this.restartTimer()
            }, this.drawCursor = null, this.$setOverwrite = function(t) {
                t != this.overwrite && (this.overwrite = t, t ? n.addCssClass(this.element, "ace_overwrite-cursors") : n.removeCssClass(this.element, "ace_overwrite-cursors"))
            }, this.destroy = function() {
                clearInterval(this.intervalId), clearTimeout(this.timeoutId)
            }
        }).call(s.prototype), e.Cursor = s
    }), define("ace/scrollbar", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/event", "ace/lib/event_emitter"], function(t, e, i) {
        "use strict";
        var n = t("./lib/oop"),
            s = t("./lib/dom"),
            r = t("./lib/event"),
            o = t("./lib/event_emitter").EventEmitter,
            a = 32768,
            l = function(t) {
                this.element = s.createElement("div"), this.element.className = "ace_scrollbar ace_scrollbar" + this.classSuffix, this.inner = s.createElement("div"), this.inner.className = "ace_scrollbar-inner", this.element.appendChild(this.inner), t.appendChild(this.element), this.setVisible(!1), this.skipEvent = !1, r.addListener(this.element, "scroll", this.onScroll.bind(this)), r.addListener(this.element, "mousedown", r.preventDefault)
            };
        (function() {
            n.implement(this, o), this.setVisible = function(t) {
                this.element.style.display = t ? "" : "none", this.isVisible = t, this.coeff = 1
            }
        }).call(l.prototype);
        var h = function(t, e) {
            l.call(this, t), this.scrollTop = 0, this.scrollHeight = 0, e.$scrollbarWidth = this.width = s.scrollbarWidth(t.ownerDocument), this.inner.style.width = this.element.style.width = (this.width || 15) + 5 + "px", this.$minWidth = 0
        };
        n.inherits(h, l), (function() {
            this.classSuffix = "-v", this.onScroll = function() {
                if (!this.skipEvent) {
                    if (this.scrollTop = this.element.scrollTop, 1 != this.coeff) {
                        var t = this.element.clientHeight / this.scrollHeight;
                        this.scrollTop = this.scrollTop * (1 - t) / (this.coeff - t)
                    }
                    this._emit("scroll", {
                        data: this.scrollTop
                    })
                }
                this.skipEvent = !1
            }, this.getWidth = function() {
                return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0)
            }, this.setHeight = function(t) {
                this.element.style.height = t + "px"
            }, this.setInnerHeight = this.setScrollHeight = function(t) {
                this.scrollHeight = t, t > a ? (this.coeff = a / t, t = a) : 1 != this.coeff && (this.coeff = 1), this.inner.style.height = t + "px"
            }, this.setScrollTop = function(t) {
                this.scrollTop != t && (this.skipEvent = !0, this.scrollTop = t, this.element.scrollTop = t * this.coeff)
            }
        }).call(h.prototype);
        var c = function(t, e) {
            l.call(this, t), this.scrollLeft = 0, this.height = e.$scrollbarWidth, this.inner.style.height = this.element.style.height = (this.height || 15) + 5 + "px"
        };
        n.inherits(c, l), (function() {
            this.classSuffix = "-h", this.onScroll = function() {
                this.skipEvent || (this.scrollLeft = this.element.scrollLeft, this._emit("scroll", {
                    data: this.scrollLeft
                })), this.skipEvent = !1
            }, this.getHeight = function() {
                return this.isVisible ? this.height : 0
            }, this.setWidth = function(t) {
                this.element.style.width = t + "px"
            }, this.setInnerWidth = function(t) {
                this.inner.style.width = t + "px"
            }, this.setScrollWidth = function(t) {
                this.inner.style.width = t + "px"
            }, this.setScrollLeft = function(t) {
                this.scrollLeft != t && (this.skipEvent = !0, this.scrollLeft = this.element.scrollLeft = t)
            }
        }).call(c.prototype), e.ScrollBar = h, e.ScrollBarV = h, e.ScrollBarH = c, e.VScrollBar = h, e.HScrollBar = c
    }), define("ace/renderloop", ["require", "exports", "module", "ace/lib/event"], function(t, e, i) {
        "use strict";
        var n = t("./lib/event"),
            s = function(t, e) {
                this.onRender = t, this.pending = !1, this.changes = 0, this.window = e || window;
                var i = this;
                this._flush = function(t) {
                    var e = i.changes;
                    e && (n.blockIdle(100), i.changes = 0, i.onRender(e)), i.changes && i.schedule()
                }
            };
        (function() {
            this.schedule = function(t) {
                this.changes = this.changes | t, this.changes && n.nextFrame(this._flush)
            }
        }).call(s.prototype), e.RenderLoop = s
    }), define("ace/layer/font_metrics", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/lib/lang", "ace/lib/event", "ace/lib/useragent", "ace/lib/event_emitter"], function(t, e, i) {
        var n = t("../lib/oop"),
            s = t("../lib/dom"),
            r = t("../lib/lang"),
            o = t("../lib/event"),
            a = t("../lib/useragent"),
            l = t("../lib/event_emitter").EventEmitter,
            h = 256,
            c = "function" == typeof ResizeObserver,
            u = 200,
            d = e.FontMetrics = function(t) {
                this.el = s.createElement("div"), this.$setMeasureNodeStyles(this.el.style, !0), this.$main = s.createElement("div"), this.$setMeasureNodeStyles(this.$main.style), this.$measureNode = s.createElement("div"), this.$setMeasureNodeStyles(this.$measureNode.style), this.el.appendChild(this.$main), this.el.appendChild(this.$measureNode), t.appendChild(this.el), this.$measureNode.innerHTML = r.stringRepeat("X", h), this.$characterSize = {
                    width: 0,
                    height: 0
                }, c ? this.$addObserver() : this.checkForSizeChanges()
            };
        (function() {
            n.implement(this, l), this.$characterSize = {
                width: 0,
                height: 0
            }, this.$setMeasureNodeStyles = function(t, e) {
                t.width = t.height = "auto", t.left = t.top = "0px", t.visibility = "hidden", t.position = "absolute", t.whiteSpace = "pre", a.isIE < 8 ? t["font-family"] = "inherit" : t.font = "inherit", t.overflow = e ? "hidden" : "visible"
            }, this.checkForSizeChanges = function(t) {
                if (void 0 === t && (t = this.$measureSizes()), t && (this.$characterSize.width !== t.width || this.$characterSize.height !== t.height)) {
                    this.$measureNode.style.fontWeight = "bold";
                    var e = this.$measureSizes();
                    this.$measureNode.style.fontWeight = "", this.$characterSize = t, this.charSizes = Object.create(null), this.allowBoldFonts = e && e.width === t.width && e.height === t.height, this._emit("changeCharacterSize", {
                        data: t
                    })
                }
            }, this.$addObserver = function() {
                var t = this;
                this.$observer = new window.ResizeObserver(function(e) {
                    var i = e[0].contentRect;
                    t.checkForSizeChanges({
                        height: i.height,
                        width: i.width / h
                    })
                }), this.$observer.observe(this.$measureNode)
            }, this.$pollSizeChanges = function() {
                if (this.$pollSizeChangesTimer || this.$observer) return this.$pollSizeChangesTimer;
                var t = this;
                return this.$pollSizeChangesTimer = o.onIdle(function e() {
                    t.checkForSizeChanges(), o.onIdle(e, 500)
                }, 500)
            }, this.setPolling = function(t) {
                t ? this.$pollSizeChanges() : this.$pollSizeChangesTimer && (clearInterval(this.$pollSizeChangesTimer), this.$pollSizeChangesTimer = 0)
            }, this.$measureSizes = function(t) {
                var e = {
                    height: (t || this.$measureNode).clientHeight,
                    width: (t || this.$measureNode).clientWidth / h
                };
                return 0 === e.width || 0 === e.height ? null : e
            }, this.$measureCharWidth = function(t) {
                return this.$main.innerHTML = r.stringRepeat(t, h), this.$main.getBoundingClientRect().width / h
            }, this.getCharacterWidth = function(t) {
                var e = this.charSizes[t];
                return void 0 === e && (e = this.charSizes[t] = this.$measureCharWidth(t) / this.$characterSize.width), e
            }, this.destroy = function() {
                clearInterval(this.$pollSizeChangesTimer), this.$observer && this.$observer.disconnect(), this.el && this.el.parentNode && this.el.parentNode.removeChild(this.el)
            }, this.$getZoom = function t(e) {
                return e ? (window.getComputedStyle(e).zoom || 1) * t(e.parentElement) : 1
            }, this.$initTransformMeasureNodes = function() {
                var t = function(t, e) {
                    return ["div", {
                        style: "position: absolute;top:" + t + "px;left:" + e + "px;"
                    }]
                };
                this.els = s.buildDom([t(0, 0), t(u, 0), t(0, u), t(u, u)], this.el)
            }, this.transformCoordinates = function(t, e) {
                function i(t, e, i) {
                    var n = t[1] * e[0] - t[0] * e[1];
                    return [(-e[1] * i[0] + e[0] * i[1]) / n, (+t[1] * i[0] - t[0] * i[1]) / n]
                }

                function n(t, e) {
                    return [t[0] - e[0], t[1] - e[1]]
                }

                function s(t, e) {
                    return [t[0] + e[0], t[1] + e[1]]
                }

                function r(t, e) {
                    return [t * e[0], t * e[1]]
                }

                function o(t) {
                    var e = t.getBoundingClientRect();
                    return [e.left, e.top]
                }
                t && (t = r(1 / this.$getZoom(this.el), t)), this.els || this.$initTransformMeasureNodes();
                var a = o(this.els[0]),
                    l = o(this.els[1]),
                    h = o(this.els[2]),
                    c = o(this.els[3]),
                    d = i(n(c, l), n(c, h), n(s(l, h), s(c, a))),
                    f = r(1 + d[0], n(l, a)),
                    g = r(1 + d[1], n(h, a));
                if (e) {
                    var m = e,
                        p = d[0] * m[0] / u + d[1] * m[1] / u + 1,
                        v = s(r(m[0], f), r(m[1], g));
                    return s(r(1 / p / u, v), a)
                }
                var _ = n(t, a),
                    w = i(n(f, r(d[0], _)), n(g, r(d[1], _)), _);
                return r(u, w)
            }
        }).call(d.prototype)
    }), define("ace/virtual_renderer", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/config", "ace/layer/gutter", "ace/layer/marker", "ace/layer/text", "ace/layer/cursor", "ace/scrollbar", "ace/scrollbar", "ace/renderloop", "ace/layer/font_metrics", "ace/lib/event_emitter", "ace/lib/useragent"], function(t, e, i) {
        "use strict";
        var n = t("./lib/oop"),
            s = t("./lib/dom"),
            r = t("./config"),
            o = t("./layer/gutter").Gutter,
            a = t("./layer/marker").Marker,
            l = t("./layer/text").Text,
            h = t("./layer/cursor").Cursor,
            c = t("./scrollbar").HScrollBar,
            u = t("./scrollbar").VScrollBar,
            d = t("./renderloop").RenderLoop,
            f = t("./layer/font_metrics").FontMetrics,
            g = t("./lib/event_emitter").EventEmitter,
            m = '.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;perspective: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_text-input-ios {position: absolute !important;top: -100000px !important;left: -100000px !important;}',
            p = t("./lib/useragent"),
            v = p.isIE;
        s.importCssString(m, "ace_editor.css");
        var _ = function(t, e) {
            var i = this;
            this.container = t || s.createElement("div"), s.addCssClass(this.container, "ace_editor"), s.HI_DPI && s.addCssClass(this.container, "ace_hidpi"), this.setTheme(e), this.$gutter = s.createElement("div"), this.$gutter.className = "ace_gutter", this.container.appendChild(this.$gutter), this.$gutter.setAttribute("aria-hidden", !0), this.scroller = s.createElement("div"), this.scroller.className = "ace_scroller", this.container.appendChild(this.scroller), this.content = s.createElement("div"), this.content.className = "ace_content", this.scroller.appendChild(this.content), this.$gutterLayer = new o(this.$gutter), this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this)), this.$markerBack = new a(this.content);
            var n = this.$textLayer = new l(this.content);
            this.canvas = n.element, this.$markerFront = new a(this.content), this.$cursorLayer = new h(this.content), this.$horizScroll = !1, this.$vScroll = !1, this.scrollBar = this.scrollBarV = new u(this.container, this), this.scrollBarH = new c(this.container, this), this.scrollBarV.addEventListener("scroll", function(t) {
                i.$scrollAnimation || i.session.setScrollTop(t.data - i.scrollMargin.top)
            }), this.scrollBarH.addEventListener("scroll", function(t) {
                i.$scrollAnimation || i.session.setScrollLeft(t.data - i.scrollMargin.left)
            }), this.scrollTop = 0, this.scrollLeft = 0, this.cursorPos = {
                row: 0,
                column: 0
            }, this.$fontMetrics = new f(this.container), this.$textLayer.$setFontMetrics(this.$fontMetrics), this.$textLayer.addEventListener("changeCharacterSize", function(t) {
                i.updateCharacterSize(), i.onResize(!0, i.gutterWidth, i.$size.width, i.$size.height), i._signal("changeCharacterSize", t)
            }), this.$size = {
                width: 0,
                height: 0,
                scrollerHeight: 0,
                scrollerWidth: 0,
                $dirty: !0
            }, this.layerConfig = {
                width: 1,
                padding: 0,
                firstRow: 0,
                firstRowScreen: 0,
                lastRow: 0,
                lineHeight: 0,
                characterWidth: 0,
                minHeight: 1,
                maxHeight: 1,
                offset: 0,
                height: 1,
                gutterOffset: 1
            }, this.scrollMargin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0
            }, this.margin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0
            }, this.$keepTextAreaAtCursor = !0, this.$loop = new d(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView), this.$loop.schedule(this.CHANGE_FULL), this.updateCharacterSize(), this.setPadding(4), r.resetOptions(this), r._emit("renderer", this)
        };
        (function() {
            this.CHANGE_CURSOR = 1, this.CHANGE_MARKER = 2, this.CHANGE_GUTTER = 4, this.CHANGE_SCROLL = 8, this.CHANGE_LINES = 16, this.CHANGE_TEXT = 32, this.CHANGE_SIZE = 64, this.CHANGE_MARKER_BACK = 128, this.CHANGE_MARKER_FRONT = 256, this.CHANGE_FULL = 512, this.CHANGE_H_SCROLL = 1024, n.implement(this, g), this.updateCharacterSize = function() {
                this.$textLayer.allowBoldFonts != this.$allowBoldFonts && (this.$allowBoldFonts = this.$textLayer.allowBoldFonts, this.setStyle("ace_nobold", !this.$allowBoldFonts)), this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth(), this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight(), this.$updatePrintMargin()
            }, this.setSession = function(t) {
                this.session && this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode), this.session = t, t && this.scrollMargin.top && t.getScrollTop() <= 0 && t.setScrollTop(-this.scrollMargin.top), this.$cursorLayer.setSession(t), this.$markerBack.setSession(t), this.$markerFront.setSession(t), this.$gutterLayer.setSession(t), this.$textLayer.setSession(t), t && (this.$loop.schedule(this.CHANGE_FULL), this.session.$setFontMetrics(this.$fontMetrics), this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null, this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this), this.onChangeNewLineMode(), this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode))
            }, this.updateLines = function(t, e, i) {
                if (void 0 === e && (e = 1 / 0), this.$changedLines ? (this.$changedLines.firstRow > t && (this.$changedLines.firstRow = t), this.$changedLines.lastRow < e && (this.$changedLines.lastRow = e)) : this.$changedLines = {
                        firstRow: t,
                        lastRow: e
                    }, this.$changedLines.lastRow < this.layerConfig.firstRow) {
                    if (!i) return;
                    this.$changedLines.lastRow = this.layerConfig.lastRow
                }
                this.$changedLines.firstRow > this.layerConfig.lastRow || this.$loop.schedule(this.CHANGE_LINES)
            }, this.onChangeNewLineMode = function() {
                this.$loop.schedule(this.CHANGE_TEXT), this.$textLayer.$updateEolChar(), this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR)
            }, this.onChangeTabSize = function() {
                this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER), this.$textLayer.onChangeTabSize()
            }, this.updateText = function() {
                this.$loop.schedule(this.CHANGE_TEXT)
            }, this.updateFull = function(t) {
                t ? this.$renderChanges(this.CHANGE_FULL, !0) : this.$loop.schedule(this.CHANGE_FULL)
            }, this.updateFontSize = function() {
                this.$textLayer.checkForSizeChanges()
            }, this.$changes = 0, this.$updateSizeAsync = function() {
                this.$loop.pending ? this.$size.$dirty = !0 : this.onResize()
            }, this.onResize = function(t, e, i, n) {
                if (!(this.resizing > 2)) {
                    this.resizing > 0 ? this.resizing++ : this.resizing = t ? 1 : 0;
                    var s = this.container;
                    n || (n = s.clientHeight || s.scrollHeight), i || (i = s.clientWidth || s.scrollWidth);
                    var r = this.$updateCachedSize(t, e, i, n);
                    if (!this.$size.scrollerHeight || !i && !n) return this.resizing = 0;
                    t && (this.$gutterLayer.$padding = null), t ? this.$renderChanges(r | this.$changes, !0) : this.$loop.schedule(r | this.$changes), this.resizing && (this.resizing = 0), this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null
                }
            }, this.$updateCachedSize = function(t, e, i, n) {
                var r = 0,
                    o = this.$size,
                    a = {
                        width: o.width,
                        height: o.height,
                        scrollerHeight: o.scrollerHeight,
                        scrollerWidth: o.scrollerWidth
                    };
                if ((n -= this.$extraHeight || 0) && (t || o.height != n) && (o.height = n, r |= this.CHANGE_SIZE, o.scrollerHeight = o.height, this.$horizScroll && (o.scrollerHeight -= this.scrollBarH.getHeight()), this.scrollBarV.element.style.bottom = this.scrollBarH.getHeight() + "px", r |= this.CHANGE_SCROLL), i && (t || o.width != i)) {
                    r |= this.CHANGE_SIZE, o.width = i, null == e && (e = this.$showGutter ? this.$gutter.offsetWidth : 0), this.gutterWidth = e, s.setStyle(this.scrollBarH.element.style, "left", e + "px"), s.setStyle(this.scroller.style, "left", e + this.margin.left + "px"), o.scrollerWidth = Math.max(0, i - e - this.scrollBarV.getWidth() - this.margin.h), s.setStyle(this.$gutter.style, "left", this.margin.left + "px");
                    var l = this.scrollBarV.getWidth() + "px";
                    s.setStyle(this.scrollBarH.element.style, "right", l), s.setStyle(this.scroller.style, "right", l), s.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight()), (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || t) && (r |= this.CHANGE_FULL)
                }
                return o.$dirty = !i || !n, r && this._signal("resize", a), r
            }, this.onGutterResize = function(t) {
                var e = this.$showGutter ? t : 0;
                e != this.gutterWidth && (this.$changes |= this.$updateCachedSize(!0, e, this.$size.width, this.$size.height)), this.session.getUseWrapMode() && this.adjustWrapLimit() ? this.$loop.schedule(this.CHANGE_FULL) : this.$size.$dirty ? this.$loop.schedule(this.CHANGE_FULL) : this.$computeLayerConfig()
            }, this.adjustWrapLimit = function() {
                var t = Math.floor((this.$size.scrollerWidth - 2 * this.$padding) / this.characterWidth);
                return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn)
            }, this.setAnimatedScroll = function(t) {
                this.setOption("animatedScroll", t)
            }, this.getAnimatedScroll = function() {
                return this.$animatedScroll
            }, this.setShowInvisibles = function(t) {
                this.setOption("showInvisibles", t), this.session.$bidiHandler.setShowInvisibles(t)
            }, this.getShowInvisibles = function() {
                return this.getOption("showInvisibles")
            }, this.getDisplayIndentGuides = function() {
                return this.getOption("displayIndentGuides")
            }, this.setDisplayIndentGuides = function(t) {
                this.setOption("displayIndentGuides", t)
            }, this.setShowPrintMargin = function(t) {
                this.setOption("showPrintMargin", t)
            }, this.getShowPrintMargin = function() {
                return this.getOption("showPrintMargin")
            }, this.setPrintMarginColumn = function(t) {
                this.setOption("printMarginColumn", t)
            }, this.getPrintMarginColumn = function() {
                return this.getOption("printMarginColumn")
            }, this.getShowGutter = function() {
                return this.getOption("showGutter")
            }, this.setShowGutter = function(t) {
                return this.setOption("showGutter", t)
            }, this.getFadeFoldWidgets = function() {
                return this.getOption("fadeFoldWidgets")
            }, this.setFadeFoldWidgets = function(t) {
                this.setOption("fadeFoldWidgets", t)
            }, this.setHighlightGutterLine = function(t) {
                this.setOption("highlightGutterLine", t)
            }, this.getHighlightGutterLine = function() {
                return this.getOption("highlightGutterLine")
            }, this.$updatePrintMargin = function() {
                if (this.$showPrintMargin || this.$printMarginEl) {
                    if (!this.$printMarginEl) {
                        var t = s.createElement("div");
                        t.className = "ace_layer ace_print-margin-layer", this.$printMarginEl = s.createElement("div"), this.$printMarginEl.className = "ace_print-margin", t.appendChild(this.$printMarginEl), this.content.insertBefore(t, this.content.firstChild)
                    }
                    var e = this.$printMarginEl.style;
                    e.left = Math.round(this.characterWidth * this.$printMarginColumn + this.$padding) + "px", e.visibility = this.$showPrintMargin ? "visible" : "hidden", this.session && -1 == this.session.$wrap && this.adjustWrapLimit()
                }
            }, this.getContainerElement = function() {
                return this.container
            }, this.getMouseEventTarget = function() {
                return this.scroller
            }, this.getTextAreaContainer = function() {
                return this.container
            }, this.$moveTextAreaToCursor = function() {
                var t = this.textarea.style;
                if (this.$keepTextAreaAtCursor) {
                    var e = this.$cursorLayer.$pixelPos;
                    if (e) {
                        var i = this.$composition;
                        i && i.markerRange && (e = this.$cursorLayer.getPixelPosition(i.markerRange.start, !0));
                        var n = this.layerConfig,
                            r = e.top,
                            o = e.left;
                        r -= n.offset;
                        var a = i && i.useTextareaForIME ? this.lineHeight : v ? 0 : 1;
                        if (r < 0 || r > n.height - a) s.translate(this.textarea, 0, 0);
                        else {
                            var l = 1;
                            i ? i.useTextareaForIME ? (l = this.characterWidth * this.session.$getStringScreenWidth(this.textarea.value)[0], a += 2) : r += this.lineHeight + 2 : r += this.lineHeight, (o -= this.scrollLeft) > this.$size.scrollerWidth - l && (o = this.$size.scrollerWidth - l), o += this.gutterWidth + this.margin.left, s.setStyle(t, "height", a + "px"), s.setStyle(t, "width", l + "px"), s.translate(this.textarea, Math.min(o, this.$size.scrollerWidth - l), Math.min(r, this.$size.height - a))
                        }
                    }
                } else s.translate(this.textarea, -100, 0)
            }, this.getFirstVisibleRow = function() {
                return this.layerConfig.firstRow
            }, this.getFirstFullyVisibleRow = function() {
                return this.layerConfig.firstRow + (0 === this.layerConfig.offset ? 0 : 1)
            }, this.getLastFullyVisibleRow = function() {
                var t = this.layerConfig,
                    e = t.lastRow;
                return this.session.documentToScreenRow(e, 0) * t.lineHeight - this.session.getScrollTop() > t.height - t.lineHeight ? e - 1 : e
            }, this.getLastVisibleRow = function() {
                return this.layerConfig.lastRow
            }, this.$padding = null, this.setPadding = function(t) {
                this.$padding = t, this.$textLayer.setPadding(t), this.$cursorLayer.setPadding(t), this.$markerFront.setPadding(t), this.$markerBack.setPadding(t), this.$loop.schedule(this.CHANGE_FULL), this.$updatePrintMargin()
            }, this.setScrollMargin = function(t, e, i, n) {
                var s = this.scrollMargin;
                s.top = 0 | t, s.bottom = 0 | e, s.right = 0 | n, s.left = 0 | i, s.v = s.top + s.bottom, s.h = s.left + s.right, s.top && this.scrollTop <= 0 && this.session && this.session.setScrollTop(-s.top), this.updateFull()
            }, this.setMargin = function(t, e, i, n) {
                var s = this.margin;
                s.top = 0 | t, s.bottom = 0 | e, s.right = 0 | n, s.left = 0 | i, s.v = s.top + s.bottom, s.h = s.left + s.right, this.$updateCachedSize(!0, this.gutterWidth, this.$size.width, this.$size.height), this.updateFull()
            }, this.getHScrollBarAlwaysVisible = function() {
                return this.$hScrollBarAlwaysVisible
            }, this.setHScrollBarAlwaysVisible = function(t) {
                this.setOption("hScrollBarAlwaysVisible", t)
            }, this.getVScrollBarAlwaysVisible = function() {
                return this.$vScrollBarAlwaysVisible
            }, this.setVScrollBarAlwaysVisible = function(t) {
                this.setOption("vScrollBarAlwaysVisible", t)
            }, this.$updateScrollBarV = function() {
                var t = this.layerConfig.maxHeight,
                    e = this.$size.scrollerHeight;
                !this.$maxLines && this.$scrollPastEnd && this.scrollTop > (t -= (e - this.lineHeight) * this.$scrollPastEnd) - e && (t = this.scrollTop + e, this.scrollBarV.scrollTop = null), this.scrollBarV.setScrollHeight(t + this.scrollMargin.v), this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top)
            }, this.$updateScrollBarH = function() {
                this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h), this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left)
            }, this.$frozen = !1, this.freeze = function() {
                this.$frozen = !0
            }, this.unfreeze = function() {
                this.$frozen = !1
            }, this.$renderChanges = function(t, e) {
                if (this.$changes && (t |= this.$changes, this.$changes = 0), this.session && this.container.offsetWidth && !this.$frozen && (t || e)) {
                    if (this.$size.$dirty) return this.$changes |= t, this.onResize(!0);
                    this.lineHeight || this.$textLayer.checkForSizeChanges(), this._signal("beforeRender"), this.session && this.session.$bidiHandler && this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
                    var i = this.layerConfig;
                    if (t & this.CHANGE_FULL || t & this.CHANGE_SIZE || t & this.CHANGE_TEXT || t & this.CHANGE_LINES || t & this.CHANGE_SCROLL || t & this.CHANGE_H_SCROLL) {
                        if (t |= this.$computeLayerConfig(), i.firstRow != this.layerConfig.firstRow && i.firstRowScreen == this.layerConfig.firstRowScreen) {
                            var n = this.scrollTop + (i.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                            n > 0 && (this.scrollTop = n, t |= this.CHANGE_SCROLL, t |= this.$computeLayerConfig())
                        }
                        i = this.layerConfig, this.$updateScrollBarV(), t & this.CHANGE_H_SCROLL && this.$updateScrollBarH(), s.translate(this.content, -this.scrollLeft, -i.offset);
                        var r = i.minHeight + "px";
                        s.setStyle(this.content.style, "width", i.width + 2 * this.$padding + "px"), s.setStyle(this.content.style, "height", r)
                    }
                    return t & this.CHANGE_H_SCROLL && (s.translate(this.content, -this.scrollLeft, -i.offset), this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left"), t & this.CHANGE_FULL ? (this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), void this._signal("afterRender")) : t & this.CHANGE_SCROLL ? (t & this.CHANGE_TEXT || t & this.CHANGE_LINES ? this.$textLayer.update(i) : this.$textLayer.scrollLines(i), this.$showGutter && (t & this.CHANGE_GUTTER || t & this.CHANGE_LINES ? this.$gutterLayer.update(i) : this.$gutterLayer.scrollLines(i)), this.$markerBack.update(i), this.$markerFront.update(i), this.$cursorLayer.update(i), this.$moveTextAreaToCursor(), void this._signal("afterRender")) : (t & this.CHANGE_TEXT ? (this.$textLayer.update(i), this.$showGutter && this.$gutterLayer.update(i)) : t & this.CHANGE_LINES ? (this.$updateLines() || t & this.CHANGE_GUTTER && this.$showGutter) && this.$gutterLayer.update(i) : t & this.CHANGE_TEXT || t & this.CHANGE_GUTTER ? this.$showGutter && this.$gutterLayer.update(i) : t & this.CHANGE_CURSOR && this.$highlightGutterLine && this.$gutterLayer.updateLineHighlight(i), t & this.CHANGE_CURSOR && (this.$cursorLayer.update(i), this.$moveTextAreaToCursor()), t & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT) && this.$markerFront.update(i), t & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK) && this.$markerBack.update(i), void this._signal("afterRender"))
                }
                this.$changes |= t
            }, this.$autosize = function() {
                var t = this.session.getScreenLength() * this.lineHeight,
                    e = this.$maxLines * this.lineHeight,
                    i = Math.min(e, Math.max((this.$minLines || 1) * this.lineHeight, t)) + this.scrollMargin.v + (this.$extraHeight || 0);
                this.$horizScroll && (i += this.scrollBarH.getHeight()), this.$maxPixelHeight && i > this.$maxPixelHeight && (i = this.$maxPixelHeight);
                var n = !(i <= 2 * this.lineHeight) && t > e;
                if (i != this.desiredHeight || this.$size.height != this.desiredHeight || n != this.$vScroll) {
                    n != this.$vScroll && (this.$vScroll = n, this.scrollBarV.setVisible(n));
                    var s = this.container.clientWidth;
                    this.container.style.height = i + "px", this.$updateCachedSize(!0, this.$gutterWidth, s, i), this.desiredHeight = i, this._signal("autosize")
                }
            }, this.$computeLayerConfig = function() {
                var t = this.session,
                    e = this.$size,
                    i = e.height <= 2 * this.lineHeight,
                    n = this.session.getScreenLength() * this.lineHeight,
                    s = this.$getLongestLine(),
                    r = !i && (this.$hScrollBarAlwaysVisible || e.scrollerWidth - s - 2 * this.$padding < 0),
                    o = this.$horizScroll !== r;
                o && (this.$horizScroll = r, this.scrollBarH.setVisible(r));
                var a = this.$vScroll;
                this.$maxLines && this.lineHeight > 1 && this.$autosize();
                var l = this.scrollTop % this.lineHeight,
                    h = e.scrollerHeight + this.lineHeight,
                    c = !this.$maxLines && this.$scrollPastEnd ? (e.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
                n += c;
                var u = this.scrollMargin;
                this.session.setScrollTop(Math.max(-u.top, Math.min(this.scrollTop, n - e.scrollerHeight + u.bottom))), this.session.setScrollLeft(Math.max(-u.left, Math.min(this.scrollLeft, s + 2 * this.$padding - e.scrollerWidth + u.right)));
                var d = !i && (this.$vScrollBarAlwaysVisible || e.scrollerHeight - n + c < 0 || this.scrollTop > u.top),
                    f = a !== d;
                f && (this.$vScroll = d, this.scrollBarV.setVisible(d));
                var g, m, p = Math.ceil(h / this.lineHeight) - 1,
                    v = Math.max(0, Math.round((this.scrollTop - l) / this.lineHeight)),
                    _ = v + p,
                    w = this.lineHeight;
                v = t.screenToDocumentRow(v, 0);
                var y = t.getFoldLine(v);
                y && (v = y.start.row), g = t.documentToScreenRow(v, 0), m = t.getRowLength(v) * w, _ = Math.min(t.screenToDocumentRow(_, 0), t.getLength() - 1), h = e.scrollerHeight + t.getRowLength(_) * w + m, l = this.scrollTop - g * w;
                var b = 0;
                return (this.layerConfig.width != s || o) && (b = this.CHANGE_H_SCROLL), (o || f) && (b = this.$updateCachedSize(!0, this.gutterWidth, e.width, e.height), this._signal("scrollbarVisibilityChanged"), f && (s = this.$getLongestLine())), this.layerConfig = {
                    width: s,
                    padding: this.$padding,
                    firstRow: v,
                    firstRowScreen: g,
                    lastRow: _,
                    lineHeight: w,
                    characterWidth: this.characterWidth,
                    minHeight: h,
                    maxHeight: n,
                    offset: l,
                    gutterOffset: w ? Math.max(0, Math.ceil((l + e.height - e.scrollerHeight) / w)) : 0,
                    height: this.$size.scrollerHeight
                }, this.session.$bidiHandler && this.session.$bidiHandler.setContentWidth(s - this.$padding), b
            }, this.$updateLines = function() {
                if (this.$changedLines) {
                    var t = this.$changedLines.firstRow,
                        e = this.$changedLines.lastRow;
                    this.$changedLines = null;
                    var i = this.layerConfig;
                    if (!(t > i.lastRow + 1 || e < i.firstRow)) return e === 1 / 0 ? (this.$showGutter && this.$gutterLayer.update(i), void this.$textLayer.update(i)) : (this.$textLayer.updateLines(i, t, e), !0)
                }
            }, this.$getLongestLine = function() {
                var t = this.session.getScreenWidth();
                return this.showInvisibles && !this.session.$useWrapMode && (t += 1), this.$textLayer && t > this.$textLayer.MAX_LINE_LENGTH && (t = this.$textLayer.MAX_LINE_LENGTH + 30), Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(t * this.characterWidth))
            }, this.updateFrontMarkers = function() {
                this.$markerFront.setMarkers(this.session.getMarkers(!0)), this.$loop.schedule(this.CHANGE_MARKER_FRONT)
            }, this.updateBackMarkers = function() {
                this.$markerBack.setMarkers(this.session.getMarkers()), this.$loop.schedule(this.CHANGE_MARKER_BACK)
            }, this.addGutterDecoration = function(t, e) {
                this.$gutterLayer.addGutterDecoration(t, e)
            }, this.removeGutterDecoration = function(t, e) {
                this.$gutterLayer.removeGutterDecoration(t, e)
            }, this.updateBreakpoints = function(t) {
                this.$loop.schedule(this.CHANGE_GUTTER)
            }, this.setAnnotations = function(t) {
                this.$gutterLayer.setAnnotations(t), this.$loop.schedule(this.CHANGE_GUTTER)
            }, this.updateCursor = function() {
                this.$loop.schedule(this.CHANGE_CURSOR)
            }, this.hideCursor = function() {
                this.$cursorLayer.hideCursor()
            }, this.showCursor = function() {
                this.$cursorLayer.showCursor()
            }, this.scrollSelectionIntoView = function(t, e, i) {
                this.scrollCursorIntoView(t, i), this.scrollCursorIntoView(e, i)
            }, this.scrollCursorIntoView = function(t, e, i) {
                if (0 !== this.$size.scrollerHeight) {
                    var n = this.$cursorLayer.getPixelPosition(t),
                        s = n.left,
                        r = n.top,
                        o = i && i.top || 0,
                        a = i && i.bottom || 0,
                        l = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                    l + o > r ? (e && l + o > r + this.lineHeight && (r -= e * this.$size.scrollerHeight), 0 === r && (r = -this.scrollMargin.top), this.session.setScrollTop(r)) : l + this.$size.scrollerHeight - a < r + this.lineHeight && (e && l + this.$size.scrollerHeight - a < r - this.lineHeight && (r += e * this.$size.scrollerHeight), this.session.setScrollTop(r + this.lineHeight - this.$size.scrollerHeight));
                    var h = this.scrollLeft;
                    h > s ? (s < this.$padding + 2 * this.layerConfig.characterWidth && (s = -this.scrollMargin.left), this.session.setScrollLeft(s)) : h + this.$size.scrollerWidth < s + this.characterWidth ? this.session.setScrollLeft(Math.round(s + this.characterWidth - this.$size.scrollerWidth)) : h <= this.$padding && s - h < this.characterWidth && this.session.setScrollLeft(0)
                }
            }, this.getScrollTop = function() {
                return this.session.getScrollTop()
            }, this.getScrollLeft = function() {
                return this.session.getScrollLeft()
            }, this.getScrollTopRow = function() {
                return this.scrollTop / this.lineHeight
            }, this.getScrollBottomRow = function() {
                return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1)
            }, this.scrollToRow = function(t) {
                this.session.setScrollTop(t * this.lineHeight)
            }, this.alignCursor = function(t, e) {
                "number" == typeof t && (t = {
                    row: t,
                    column: 0
                });
                var i = this.$cursorLayer.getPixelPosition(t).top - (this.$size.scrollerHeight - this.lineHeight) * (e || 0);
                return this.session.setScrollTop(i), i
            }, this.STEPS = 8, this.$calcSteps = function(t, e) {
                var i = 0,
                    n = this.STEPS,
                    s = [],
                    r = function(t, e, i) {
                        return i * (Math.pow(t - 1, 3) + 1) + e
                    };
                for (i = 0; i < n; ++i) s.push(r(i / this.STEPS, t, e - t));
                return s
            }, this.scrollToLine = function(t, e, i, n) {
                var s = this.$cursorLayer.getPixelPosition({
                    row: t,
                    column: 0
                }).top;
                e && (s -= this.$size.scrollerHeight / 2);
                var r = this.scrollTop;
                this.session.setScrollTop(s), !1 !== i && this.animateScrolling(r, n)
            }, this.animateScrolling = function(t, e) {
                var i = this.scrollTop;
                if (this.$animatedScroll) {
                    var n = this;
                    if (t != i) {
                        if (this.$scrollAnimation) {
                            var s = this.$scrollAnimation.steps;
                            if (s.length && (t = s[0]) == i) return
                        }
                        var r = n.$calcSteps(t, i);
                        this.$scrollAnimation = {
                            from: t,
                            to: i,
                            steps: r
                        }, clearInterval(this.$timer), n.session.setScrollTop(r.shift()), n.session.$scrollTop = i, this.$timer = setInterval(function() {
                            r.length ? (n.session.setScrollTop(r.shift()), n.session.$scrollTop = i) : null != i ? (n.session.$scrollTop = -1, n.session.setScrollTop(i), i = null) : (n.$timer = clearInterval(n.$timer), n.$scrollAnimation = null, e && e())
                        }, 10)
                    }
                }
            }, this.scrollToY = function(t) {
                this.scrollTop !== t && (this.$loop.schedule(this.CHANGE_SCROLL), this.scrollTop = t)
            }, this.scrollToX = function(t) {
                this.scrollLeft !== t && (this.scrollLeft = t), this.$loop.schedule(this.CHANGE_H_SCROLL)
            }, this.scrollTo = function(t, e) {
                this.session.setScrollTop(e), this.session.setScrollLeft(e)
            }, this.scrollBy = function(t, e) {
                e && this.session.setScrollTop(this.session.getScrollTop() + e), t && this.session.setScrollLeft(this.session.getScrollLeft() + t)
            }, this.isScrollableBy = function(t, e) {
                return e < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || e > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || t < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || t > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right || void 0
            }, this.pixelToScreenCoordinates = function(t, e) {
                var i;
                if (this.$hasCssTransforms) {
                    i = {
                        top: 0,
                        left: 0
                    };
                    var n = this.$fontMetrics.transformCoordinates([t, e]);
                    t = n[1] - this.gutterWidth - this.margin.left, e = n[0]
                } else i = this.scroller.getBoundingClientRect();
                var s = t + this.scrollLeft - i.left - this.$padding,
                    r = s / this.characterWidth,
                    o = Math.floor((e + this.scrollTop - i.top) / this.lineHeight),
                    a = this.$blockCursor ? Math.floor(r) : Math.round(r);
                return {
                    row: o,
                    column: a,
                    side: r - a > 0 ? 1 : -1,
                    offsetX: s
                }
            }, this.screenToTextCoordinates = function(t, e) {
                var i;
                if (this.$hasCssTransforms) {
                    i = {
                        top: 0,
                        left: 0
                    };
                    var n = this.$fontMetrics.transformCoordinates([t, e]);
                    t = n[1] - this.gutterWidth - this.margin.left, e = n[0]
                } else i = this.scroller.getBoundingClientRect();
                var s = t + this.scrollLeft - i.left - this.$padding,
                    r = s / this.characterWidth,
                    o = this.$blockCursor ? Math.floor(r) : Math.round(r),
                    a = Math.floor((e + this.scrollTop - i.top) / this.lineHeight);
                return this.session.screenToDocumentPosition(a, Math.max(o, 0), s)
            }, this.textToScreenCoordinates = function(t, e) {
                var i = this.scroller.getBoundingClientRect(),
                    n = this.session.documentToScreenPosition(t, e),
                    s = this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, t) ? this.session.$bidiHandler.getPosLeft(n.column) : Math.round(n.column * this.characterWidth));
                return {
                    pageX: i.left + s - this.scrollLeft,
                    pageY: i.top + n.row * this.lineHeight - this.scrollTop
                }
            }, this.visualizeFocus = function() {
                s.addCssClass(this.container, "ace_focus")
            }, this.visualizeBlur = function() {
                s.removeCssClass(this.container, "ace_focus")
            }, this.showComposition = function(t) {
                this.$composition = t, t.cssText || (t.cssText = this.textarea.style.cssText, t.keepTextAreaAtCursor = this.$keepTextAreaAtCursor), t.useTextareaForIME = this.$useTextareaForIME, this.$useTextareaForIME ? (this.$keepTextAreaAtCursor = !0, s.addCssClass(this.textarea, "ace_composition"), this.textarea.style.cssText = "", this.$moveTextAreaToCursor(), this.$cursorLayer.element.style.display = "none") : t.markerId = this.session.addMarker(t.markerRange, "ace_composition_marker", "text")
            }, this.setCompositionText = function(t) {
                var e = this.session.selection.cursor;
                this.addToken(t, "composition_placeholder", e.row, e.column), this.$moveTextAreaToCursor()
            }, this.hideComposition = function() {
                this.$composition && (this.$composition.markerId && this.session.removeMarker(this.$composition.markerId), s.removeCssClass(this.textarea, "ace_composition"), this.$keepTextAreaAtCursor = this.$composition.keepTextAreaAtCursor, this.textarea.style.cssText = this.$composition.cssText, this.$composition = null, this.$cursorLayer.element.style.display = "")
            }, this.addToken = function(t, e, i, n) {
                var s = this.session;
                s.bgTokenizer.lines[i] = null;
                var r = {
                        type: e,
                        value: t
                    },
                    o = s.getTokens(i);
                if (null == n) o.push(r);
                else
                    for (var a = 0, l = 0; l < o.length; l++) {
                        var h = o[l];
                        if (n <= (a += h.value.length)) {
                            var c = h.value.length - (a - n),
                                u = h.value.slice(0, c),
                                d = h.value.slice(c);
                            o.splice(l, 1, {
                                type: h.type,
                                value: u
                            }, r, {
                                type: h.type,
                                value: d
                            });
                            break
                        }
                    }
                this.updateLines(i, i)
            }, this.setTheme = function(t, e) {
                function i(i) {
                    if (n.$themeId != t) return e && e();
                    if (!i || !i.cssClass) throw new Error("couldn't load module " + t + " or it didn't call define");
                    i.$id && (n.$themeId = i.$id), s.importCssString(i.cssText, i.cssClass, n.container), n.theme && s.removeCssClass(n.container, n.theme.cssClass);
                    var r = "padding" in i ? i.padding : "padding" in (n.theme || {}) ? 4 : n.$padding;
                    n.$padding && r != n.$padding && n.setPadding(r), n.$theme = i.cssClass, n.theme = i, s.addCssClass(n.container, i.cssClass), s.setCssClass(n.container, "ace_dark", i.isDark), n.$size && (n.$size.width = 0, n.$updateSizeAsync()), n._dispatchEvent("themeLoaded", {
                        theme: i
                    }), e && e()
                }
                var n = this;
                this.$themeId = t, n._dispatchEvent("themeChange", {
                    theme: t
                }), t && "string" != typeof t ? i(t) : r.loadModule(["theme", t || this.$options.theme.initialValue], i)
            }, this.getTheme = function() {
                return this.$themeId
            }, this.setStyle = function(t, e) {
                s.setCssClass(this.container, t, !1 !== e)
            }, this.unsetStyle = function(t) {
                s.removeCssClass(this.container, t)
            }, this.setCursorStyle = function(t) {
                s.setStyle(this.scroller.style, "cursor", t)
            }, this.setMouseCursor = function(t) {
                s.setStyle(this.scroller.style, "cursor", t)
            }, this.attachToShadowRoot = function() {
                s.importCssString(m, "ace_editor.css", this.container)
            }, this.destroy = function() {
                this.$fontMetrics.destroy(), this.$cursorLayer.destroy()
            }
        }).call(_.prototype), r.defineOptions(_.prototype, "renderer", {
            animatedScroll: {
                initialValue: !1
            },
            showInvisibles: {
                set: function(t) {
                    this.$textLayer.setShowInvisibles(t) && this.$loop.schedule(this.CHANGE_TEXT)
                },
                initialValue: !1
            },
            showPrintMargin: {
                set: function() {
                    this.$updatePrintMargin()
                },
                initialValue: !0
            },
            printMarginColumn: {
                set: function() {
                    this.$updatePrintMargin()
                },
                initialValue: 80
            },
            printMargin: {
                set: function(t) {
                    "number" == typeof t && (this.$printMarginColumn = t), this.$showPrintMargin = !!t, this.$updatePrintMargin()
                },
                get: function() {
                    return this.$showPrintMargin && this.$printMarginColumn
                }
            },
            showGutter: {
                set: function(t) {
                    this.$gutter.style.display = t ? "block" : "none", this.$loop.schedule(this.CHANGE_FULL), this.onGutterResize()
                },
                initialValue: !0
            },
            fadeFoldWidgets: {
                set: function(t) {
                    s.setCssClass(this.$gutter, "ace_fade-fold-widgets", t)
                },
                initialValue: !1
            },
            showFoldWidgets: {
                set: function(t) {
                    this.$gutterLayer.setShowFoldWidgets(t), this.$loop.schedule(this.CHANGE_GUTTER)
                },
                initialValue: !0
            },
            displayIndentGuides: {
                set: function(t) {
                    this.$textLayer.setDisplayIndentGuides(t) && this.$loop.schedule(this.CHANGE_TEXT)
                },
                initialValue: !0
            },
            highlightGutterLine: {
                set: function(t) {
                    this.$gutterLayer.setHighlightGutterLine(t), this.$loop.schedule(this.CHANGE_GUTTER)
                },
                initialValue: !0
            },
            hScrollBarAlwaysVisible: {
                set: function(t) {
                    (!this.$hScrollBarAlwaysVisible || !this.$horizScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
                },
                initialValue: !1
            },
            vScrollBarAlwaysVisible: {
                set: function(t) {
                    (!this.$vScrollBarAlwaysVisible || !this.$vScroll) && this.$loop.schedule(this.CHANGE_SCROLL)
                },
                initialValue: !1
            },
            fontSize: {
                set: function(t) {
                    "number" == typeof t && (t += "px"), this.container.style.fontSize = t, this.updateFontSize()
                },
                initialValue: 12
            },
            fontFamily: {
                set: function(t) {
                    this.container.style.fontFamily = t, this.updateFontSize()
                }
            },
            maxLines: {
                set: function(t) {
                    this.updateFull()
                }
            },
            minLines: {
                set: function(t) {
                    this.$minLines < 562949953421311 || (this.$minLines = 0), this.updateFull()
                }
            },
            maxPixelHeight: {
                set: function(t) {
                    this.updateFull()
                },
                initialValue: 0
            },
            scrollPastEnd: {
                set: function(t) {
                    this.$scrollPastEnd != (t = +t || 0) && (this.$scrollPastEnd = t, this.$loop.schedule(this.CHANGE_SCROLL))
                },
                initialValue: 0,
                handlesSet: !0
            },
            fixedWidthGutter: {
                set: function(t) {
                    this.$gutterLayer.$fixedWidth = !!t, this.$loop.schedule(this.CHANGE_GUTTER)
                }
            },
            theme: {
                set: function(t) {
                    this.setTheme(t)
                },
                get: function() {
                    return this.$themeId || this.theme
                },
                initialValue: "./theme/textmate",
                handlesSet: !0
            },
            hasCssTransforms: {},
            useTextareaForIME: {
                initialValue: !p.isMobile && !p.isIE
            }
        }), e.VirtualRenderer = _
    }), define("ace/worker/worker_client", ["require", "exports", "module", "ace/lib/oop", "ace/lib/net", "ace/lib/event_emitter", "ace/config"], function(t, e, i) {
        "use strict";

        function n(t) {
            if ("undefined" == typeof Worker) return {
                postMessage: function() {},
                terminate: function() {}
            };
            var e = function(t) {
                    var e = "importScripts('" + r.qualifyURL(t) + "');";
                    try {
                        return new Blob([e], {
                            type: "application/javascript"
                        })
                    } catch (t) {
                        var i = new(window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
                        return i.append(e), i.getBlob("application/javascript")
                    }
                }(t),
                i = (window.URL || window.webkitURL).createObjectURL(e);
            return new Worker(i)
        }
        var s = t("../lib/oop"),
            r = t("../lib/net"),
            o = t("../lib/event_emitter").EventEmitter,
            a = t("../config"),
            l = function(e, i, s, r, o) {
                if (this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.onMessage = this.onMessage.bind(this), t.nameToUrl && !t.toUrl && (t.toUrl = t.nameToUrl), a.get("packaged") || !t.toUrl) r = r || a.moduleUrl(i, "worker");
                else {
                    var l = this.$normalizePath;
                    r = r || l(t.toUrl("ace/worker/worker.js", null, "_"));
                    var h = {};
                    e.forEach(function(e) {
                        h[e] = l(t.toUrl(e, null, "_").replace(/(\.js)?(\?.*)?$/, ""))
                    })
                }
                this.$worker = n(r), o && this.send("importScripts", o), this.$worker.postMessage({
                    init: !0,
                    tlns: h,
                    module: i,
                    classname: s
                }), this.callbackId = 1, this.callbacks = {}, this.$worker.onmessage = this.onMessage
            };
        (function() {
            s.implement(this, o), this.onMessage = function(t) {
                var e = t.data;
                switch (e.type) {
                    case "event":
                        this._signal(e.name, {
                            data: e.data
                        });
                        break;
                    case "call":
                        var i = this.callbacks[e.id];
                        i && (i(e.data), delete this.callbacks[e.id]);
                        break;
                    case "error":
                        this.reportError(e.data);
                        break;
                    case "log":
                        window.console && console.log && console.log.apply(console, e.data)
                }
            }, this.reportError = function(t) {
                window.console && console.error && console.error(t)
            }, this.$normalizePath = function(t) {
                return r.qualifyURL(t)
            }, this.terminate = function() {
                this._signal("terminate", {}), this.deltaQueue = null, this.$worker.terminate(), this.$worker = null, this.$doc && this.$doc.off("change", this.changeListener), this.$doc = null
            }, this.send = function(t, e) {
                this.$worker.postMessage({
                    command: t,
                    args: e
                })
            }, this.call = function(t, e, i) {
                if (i) {
                    var n = this.callbackId++;
                    this.callbacks[n] = i, e.push(n)
                }
                this.send(t, e)
            }, this.emit = function(t, e) {
                try {
                    e.data && e.data.err && (e.data.err = {
                        message: e.data.err.message,
                        stack: e.data.err.stack,
                        code: e.data.err.code
                    }), this.$worker.postMessage({
                        event: t,
                        data: {
                            data: e.data
                        }
                    })
                } catch (t) {
                    console.error(t.stack)
                }
            }, this.attachToDocument = function(t) {
                this.$doc && this.terminate(), this.$doc = t, this.call("setValue", [t.getValue()]), t.on("change", this.changeListener)
            }, this.changeListener = function(t) {
                this.deltaQueue || (this.deltaQueue = [], setTimeout(this.$sendDeltaQueue, 0)), this.deltaQueue.push(t.start, "insert" == t.action ? t.lines : t.end)
            }, this.$sendDeltaQueue = function() {
                var t = this.deltaQueue;
                t && (this.deltaQueue = null, t.length > 50 && t.length > this.$doc.getLength() >> 1 ? this.call("setValue", [this.$doc.getValue()]) : this.emit("change", {
                    data: t
                }))
            }
        }).call(l.prototype);
        var h = function(t, e, i) {
            this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this), this.changeListener = this.changeListener.bind(this), this.callbackId = 1, this.callbacks = {}, this.messageBuffer = [];
            var n = null,
                s = !1,
                r = Object.create(o),
                l = this;
            this.$worker = {}, this.$worker.terminate = function() {}, this.$worker.postMessage = function(t) {
                l.messageBuffer.push(t), n && (s ? setTimeout(h) : h())
            }, this.setEmitSync = function(t) {
                s = t
            };
            var h = function() {
                var t = l.messageBuffer.shift();
                t.command ? n[t.command].apply(n, t.args) : t.event && r._signal(t.event, t.data)
            };
            r.postMessage = function(t) {
                l.onMessage({
                    data: t
                })
            }, r.callback = function(t, e) {
                this.postMessage({
                    type: "call",
                    id: e,
                    data: t
                })
            }, r.emit = function(t, e) {
                this.postMessage({
                    type: "event",
                    name: t,
                    data: e
                })
            }, a.loadModule(["worker", e], function(t) {
                for (n = new t[i](r); l.messageBuffer.length;) h()
            })
        };
        h.prototype = l.prototype, e.UIWorkerClient = h, e.WorkerClient = l, e.createWorker = n
    }), define("ace/placeholder", ["require", "exports", "module", "ace/range", "ace/lib/event_emitter", "ace/lib/oop"], function(t, e, i) {
        "use strict";
        var n = t("./range").Range,
            s = t("./lib/event_emitter").EventEmitter,
            r = t("./lib/oop"),
            o = function(t, e, i, n, s, r) {
                var o = this;
                this.length = e, this.session = t, this.doc = t.getDocument(), this.mainClass = s, this.othersClass = r, this.$onUpdate = this.onUpdate.bind(this), this.doc.on("change", this.$onUpdate), this.$others = n, this.$onCursorChange = function() {
                    setTimeout(function() {
                        o.onCursorChange()
                    })
                }, this.$pos = i;
                var a = t.getUndoManager().$undoStack || t.getUndoManager().$undostack || {
                    length: -1
                };
                this.$undoStackDepth = a.length, this.setup(), t.selection.on("changeCursor", this.$onCursorChange)
            };
        (function() {
            r.implement(this, s), this.setup = function() {
                var t = this,
                    e = this.doc,
                    i = this.session;
                this.selectionBefore = i.selection.toJSON(), i.selection.inMultiSelectMode && i.selection.toSingleRange(), this.pos = e.createAnchor(this.$pos.row, this.$pos.column);
                var s = this.pos;
                s.$insertRight = !0, s.detach(), s.markerId = i.addMarker(new n(s.row, s.column, s.row, s.column + this.length), this.mainClass, null, !1), this.others = [], this.$others.forEach(function(i) {
                    var n = e.createAnchor(i.row, i.column);
                    n.$insertRight = !0, n.detach(), t.others.push(n)
                }), i.setUndoSelect(!1)
            }, this.showOtherMarkers = function() {
                if (!this.othersActive) {
                    var t = this.session,
                        e = this;
                    this.othersActive = !0, this.others.forEach(function(i) {
                        i.markerId = t.addMarker(new n(i.row, i.column, i.row, i.column + e.length), e.othersClass, null, !1)
                    })
                }
            }, this.hideOtherMarkers = function() {
                if (this.othersActive) {
                    this.othersActive = !1;
                    for (var t = 0; t < this.others.length; t++) this.session.removeMarker(this.others[t].markerId)
                }
            }, this.onUpdate = function(t) {
                if (this.$updating) return this.updateAnchors(t);
                var e = t;
                if (e.start.row === e.end.row && e.start.row === this.pos.row) {
                    this.$updating = !0;
                    var i = "insert" === t.action ? e.end.column - e.start.column : e.start.column - e.end.column,
                        s = e.start.column >= this.pos.column && e.start.column <= this.pos.column + this.length + 1,
                        r = e.start.column - this.pos.column;
                    if (this.updateAnchors(t), s && (this.length += i), s && !this.session.$fromUndo)
                        if ("insert" === t.action)
                            for (var o = this.others.length - 1; o >= 0; o--) this.doc.insertMergedLines(l = {
                                row: (a = this.others[o]).row,
                                column: a.column + r
                            }, t.lines);
                        else if ("remove" === t.action)
                        for (o = this.others.length - 1; o >= 0; o--) {
                            var a, l;
                            this.doc.remove(new n((l = {
                                row: (a = this.others[o]).row,
                                column: a.column + r
                            }).row, l.column, l.row, l.column - i))
                        }
                    this.$updating = !1, this.updateMarkers()
                }
            }, this.updateAnchors = function(t) {
                this.pos.onChange(t);
                for (var e = this.others.length; e--;) this.others[e].onChange(t);
                this.updateMarkers()
            }, this.updateMarkers = function() {
                if (!this.$updating) {
                    var t = this,
                        e = this.session,
                        i = function(i, s) {
                            e.removeMarker(i.markerId), i.markerId = e.addMarker(new n(i.row, i.column, i.row, i.column + t.length), s, null, !1)
                        };
                    i(this.pos, this.mainClass);
                    for (var s = this.others.length; s--;) i(this.others[s], this.othersClass)
                }
            }, this.onCursorChange = function(t) {
                if (!this.$updating && this.session) {
                    var e = this.session.selection.getCursor();
                    e.row === this.pos.row && e.column >= this.pos.column && e.column <= this.pos.column + this.length ? (this.showOtherMarkers(), this._emit("cursorEnter", t)) : (this.hideOtherMarkers(), this._emit("cursorLeave", t))
                }
            }, this.detach = function() {
                this.session.removeMarker(this.pos && this.pos.markerId), this.hideOtherMarkers(), this.doc.removeEventListener("change", this.$onUpdate), this.session.selection.removeEventListener("changeCursor", this.$onCursorChange), this.session.setUndoSelect(!0), this.session = null
            }, this.cancel = function() {
                if (-1 !== this.$undoStackDepth) {
                    for (var t = this.session.getUndoManager(), e = (t.$undoStack || t.$undostack).length - this.$undoStackDepth, i = 0; i < e; i++) t.undo(this.session, !0);
                    this.selectionBefore && this.session.selection.fromJSON(this.selectionBefore)
                }
            }
        }).call(o.prototype), e.PlaceHolder = o
    }), define("ace/mouse/multi_select_handler", ["require", "exports", "module", "ace/lib/event", "ace/lib/useragent"], function(t, e, i) {
        function n(t, e) {
            return t.row == e.row && t.column == e.column
        }
        var s = t("../lib/event"),
            r = t("../lib/useragent");
        e.onMouseDown = function(t) {
            var e = t.domEvent,
                i = e.altKey,
                o = e.shiftKey,
                a = e.ctrlKey,
                l = t.getAccelKey(),
                h = t.getButton();
            if (a && r.isMac && (h = e.button), t.editor.inMultiSelectMode && 2 == h) t.editor.textInput.onContextMenu(t.domEvent);
            else if (a || i || l) {
                if (0 === h) {
                    var c, u = t.editor,
                        d = u.selection,
                        f = u.inMultiSelectMode,
                        g = t.getDocumentPosition(),
                        m = d.getCursor(),
                        p = t.inSelection() || d.isEmpty() && n(g, m),
                        v = t.x,
                        _ = t.y,
                        w = u.session,
                        y = u.renderer.pixelToScreenCoordinates(v, _),
                        b = y;
                    if (u.$mouseHandler.$enableJumpToDef) a && i || l && i ? c = o ? "block" : "add" : i && u.$blockSelectEnabled && (c = "block");
                    else if (l && !i) {
                        if (c = "add", !f && o) return
                    } else i && u.$blockSelectEnabled && (c = "block");
                    if (c && r.isMac && e.ctrlKey && u.$mouseHandler.cancelContextMenu(), "add" == c) {
                        if (!f && p) return;
                        if (!f) {
                            var x = d.toOrientedRange();
                            u.addSelectionMarker(x)
                        }
                        var $ = d.rangeList.rangeAtPoint(g);
                        u.inVirtualSelectionMode = !0, o && ($ = null, u.removeSelectionMarker(x = d.ranges[0] || x)), u.once("mouseup", function() {
                            var t = d.toOrientedRange();
                            $ && t.isEmpty() && n($.cursor, t.cursor) ? d.substractPoint(t.cursor) : (o ? d.substractPoint(x.cursor) : x && (u.removeSelectionMarker(x), d.addRange(x)), d.addRange(t)), u.inVirtualSelectionMode = !1
                        })
                    } else if ("block" == c) {
                        t.stop(), u.inVirtualSelectionMode = !0;
                        var S, C = [],
                            T = function() {
                                var t = u.renderer.pixelToScreenCoordinates(v, _),
                                    e = w.screenToDocumentPosition(t.row, t.column, t.offsetX);
                                n(b, t) && n(e, d.lead) || (b = t, u.selection.moveToPosition(e), u.renderer.scrollCursorIntoView(), u.removeSelectionMarkers(C), C = d.rectangularRangeBlock(b, y), u.$mouseHandler.$clickSelection && 1 == C.length && C[0].isEmpty() && (C[0] = u.$mouseHandler.$clickSelection.clone()), C.forEach(u.addSelectionMarker, u), u.updateSelectionMarkers())
                            };
                        f && !l ? d.toSingleRange() : !f && l && (S = d.toOrientedRange(), u.addSelectionMarker(S)), o ? y = w.documentToScreenPosition(d.lead) : d.moveToPosition(g), b = {
                            row: -1,
                            column: -1
                        };
                        var k = T;
                        s.capture(u.container, function(t) {
                            v = t.clientX, _ = t.clientY
                        }, function(t) {
                            T(), clearInterval(A), u.removeSelectionMarkers(C), C.length || (C = [d.toOrientedRange()]), S && (u.removeSelectionMarker(S), d.toSingleRange(S));
                            for (var e = 0; e < C.length; e++) d.addRange(C[e]);
                            u.inVirtualSelectionMode = !1, u.$mouseHandler.$clickSelection = null
                        });
                        var A = setInterval(function() {
                            k()
                        }, 20);
                        return t.preventDefault()
                    }
                }
            } else 0 === h && t.editor.inMultiSelectMode && t.editor.exitMultiSelectMode()
        }
    }), define("ace/commands/multi_select_commands", ["require", "exports", "module", "ace/keyboard/hash_handler"], function(t, e, i) {
        e.defaultCommands = [{
            name: "addCursorAbove",
            exec: function(t) {
                t.selectMoreLines(-1)
            },
            bindKey: {
                win: "Ctrl-Alt-Up",
                mac: "Ctrl-Alt-Up"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "addCursorBelow",
            exec: function(t) {
                t.selectMoreLines(1)
            },
            bindKey: {
                win: "Ctrl-Alt-Down",
                mac: "Ctrl-Alt-Down"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "addCursorAboveSkipCurrent",
            exec: function(t) {
                t.selectMoreLines(-1, !0)
            },
            bindKey: {
                win: "Ctrl-Alt-Shift-Up",
                mac: "Ctrl-Alt-Shift-Up"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "addCursorBelowSkipCurrent",
            exec: function(t) {
                t.selectMoreLines(1, !0)
            },
            bindKey: {
                win: "Ctrl-Alt-Shift-Down",
                mac: "Ctrl-Alt-Shift-Down"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectMoreBefore",
            exec: function(t) {
                t.selectMore(-1)
            },
            bindKey: {
                win: "Ctrl-Alt-Left",
                mac: "Ctrl-Alt-Left"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectMoreAfter",
            exec: function(t) {
                t.selectMore(1)
            },
            bindKey: {
                win: "Ctrl-Alt-Right",
                mac: "Ctrl-Alt-Right"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectNextBefore",
            exec: function(t) {
                t.selectMore(-1, !0)
            },
            bindKey: {
                win: "Ctrl-Alt-Shift-Left",
                mac: "Ctrl-Alt-Shift-Left"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "selectNextAfter",
            exec: function(t) {
                t.selectMore(1, !0)
            },
            bindKey: {
                win: "Ctrl-Alt-Shift-Right",
                mac: "Ctrl-Alt-Shift-Right"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }, {
            name: "splitIntoLines",
            exec: function(t) {
                t.multiSelect.splitIntoLines()
            },
            bindKey: {
                win: "Ctrl-Alt-L",
                mac: "Ctrl-Alt-L"
            },
            readOnly: !0
        }, {
            name: "alignCursors",
            exec: function(t) {
                t.alignCursors()
            },
            bindKey: {
                win: "Ctrl-Alt-A",
                mac: "Ctrl-Alt-A"
            },
            scrollIntoView: "cursor"
        }, {
            name: "findAll",
            exec: function(t) {
                t.findAll()
            },
            bindKey: {
                win: "Ctrl-Alt-K",
                mac: "Ctrl-Alt-G"
            },
            scrollIntoView: "cursor",
            readOnly: !0
        }], e.multiSelectCommands = [{
            name: "singleSelection",
            bindKey: "esc",
            exec: function(t) {
                t.exitMultiSelectMode()
            },
            scrollIntoView: "cursor",
            readOnly: !0,
            isAvailable: function(t) {
                return t && t.inMultiSelectMode
            }
        }];
        var n = t("../keyboard/hash_handler").HashHandler;
        e.keyboardHandler = new n(e.multiSelectCommands)
    }), define("ace/multi_select", ["require", "exports", "module", "ace/range_list", "ace/range", "ace/selection", "ace/mouse/multi_select_handler", "ace/lib/event", "ace/lib/lang", "ace/commands/multi_select_commands", "ace/search", "ace/edit_session", "ace/editor", "ace/config"], function(t, e, i) {
        function n(t, e) {
            return t.row == e.row && t.column == e.column
        }

        function s(t) {
            t.$multiselectOnSessionChange || (t.$onAddRange = t.$onAddRange.bind(t), t.$onRemoveRange = t.$onRemoveRange.bind(t), t.$onMultiSelect = t.$onMultiSelect.bind(t), t.$onSingleSelect = t.$onSingleSelect.bind(t), t.$multiselectOnSessionChange = e.onSessionChange.bind(t), t.$checkMultiselectChange = t.$checkMultiselectChange.bind(t), t.$multiselectOnSessionChange(t), t.on("changeSession", t.$multiselectOnSessionChange), t.on("mousedown", l), t.commands.addCommands(u.defaultCommands), function(t) {
                function e(e) {
                    n && (t.renderer.setMouseCursor(""), n = !1)
                }
                var i = t.textInput.getElement(),
                    n = !1;
                h.addListener(i, "keydown", function(i) {
                    t.$blockSelectEnabled && 18 == i.keyCode && !(i.ctrlKey || i.shiftKey || i.metaKey) ? n || (t.renderer.setMouseCursor("crosshair"), n = !0) : n && e()
                }), h.addListener(i, "keyup", e), h.addListener(i, "blur", e)
            }(t))
        }
        var r = t("./range_list").RangeList,
            o = t("./range").Range,
            a = t("./selection").Selection,
            l = t("./mouse/multi_select_handler").onMouseDown,
            h = t("./lib/event"),
            c = t("./lib/lang"),
            u = t("./commands/multi_select_commands");
        e.commands = u.defaultCommands.concat(u.multiSelectCommands);
        var d = new(0, t("./search").Search),
            f = t("./edit_session").EditSession;
        (function() {
            this.getSelectionMarkers = function() {
                return this.$selectionMarkers
            }
        }).call(f.prototype), (function() {
            this.ranges = null, this.rangeList = null, this.addRange = function(t, e) {
                if (t) {
                    if (!this.inMultiSelectMode && 0 === this.rangeCount) {
                        var i = this.toOrientedRange();
                        if (this.rangeList.add(i), this.rangeList.add(t), 2 != this.rangeList.ranges.length) return this.rangeList.removeAll(), e || this.fromOrientedRange(t);
                        this.rangeList.removeAll(), this.rangeList.add(i), this.$onAddRange(i)
                    }
                    t.cursor || (t.cursor = t.end);
                    var n = this.rangeList.add(t);
                    return this.$onAddRange(t), n.length && this.$onRemoveRange(n), this.rangeCount > 1 && !this.inMultiSelectMode && (this._signal("multiSelect"), this.inMultiSelectMode = !0, this.session.$undoSelect = !1, this.rangeList.attach(this.session)), e || this.fromOrientedRange(t)
                }
            }, this.toSingleRange = function(t) {
                t = t || this.ranges[0];
                var e = this.rangeList.removeAll();
                e.length && this.$onRemoveRange(e), t && this.fromOrientedRange(t)
            }, this.substractPoint = function(t) {
                var e = this.rangeList.substractPoint(t);
                if (e) return this.$onRemoveRange(e), e[0]
            }, this.mergeOverlappingRanges = function() {
                var t = this.rangeList.merge();
                t.length && this.$onRemoveRange(t)
            }, this.$onAddRange = function(t) {
                this.rangeCount = this.rangeList.ranges.length, this.ranges.unshift(t), this._signal("addRange", {
                    range: t
                })
            }, this.$onRemoveRange = function(t) {
                if (this.rangeCount = this.rangeList.ranges.length, 1 == this.rangeCount && this.inMultiSelectMode) {
                    var e = this.rangeList.ranges.pop();
                    t.push(e), this.rangeCount = 0
                }
                for (var i = t.length; i--;) {
                    var n = this.ranges.indexOf(t[i]);
                    this.ranges.splice(n, 1)
                }
                this._signal("removeRange", {
                    ranges: t
                }), 0 === this.rangeCount && this.inMultiSelectMode && (this.inMultiSelectMode = !1, this._signal("singleSelect"), this.session.$undoSelect = !0, this.rangeList.detach(this.session)), (e = e || this.ranges[0]) && !e.isEqual(this.getRange()) && this.fromOrientedRange(e)
            }, this.$initRangeList = function() {
                this.rangeList || (this.rangeList = new r, this.ranges = [], this.rangeCount = 0)
            }, this.getAllRanges = function() {
                return this.rangeCount ? this.rangeList.ranges.concat() : [this.getRange()]
            }, this.splitIntoLines = function() {
                if (this.rangeCount > 1) {
                    var t = this.rangeList.ranges,
                        e = t[t.length - 1],
                        i = o.fromPoints(t[0].start, e.end);
                    this.toSingleRange(), this.setSelectionRange(i, e.cursor == e.start)
                } else {
                    i = this.getRange();
                    var n = this.isBackwards(),
                        s = i.start.row,
                        r = i.end.row;
                    if (s == r) {
                        if (n) var a = i.end,
                            l = i.start;
                        else a = i.start, l = i.end;
                        return this.addRange(o.fromPoints(l, l)), void this.addRange(o.fromPoints(a, a))
                    }
                    var h = [],
                        c = this.getLineRange(s, !0);
                    c.start.column = i.start.column, h.push(c);
                    for (var u = s + 1; u < r; u++) h.push(this.getLineRange(u, !0));
                    (c = this.getLineRange(r, !0)).end.column = i.end.column, h.push(c), h.forEach(this.addRange, this)
                }
            }, this.toggleBlockSelection = function() {
                if (this.rangeCount > 1) {
                    var t = this.rangeList.ranges,
                        e = t[t.length - 1],
                        i = o.fromPoints(t[0].start, e.end);
                    this.toSingleRange(), this.setSelectionRange(i, e.cursor == e.start)
                } else {
                    var n = this.session.documentToScreenPosition(this.cursor),
                        s = this.session.documentToScreenPosition(this.anchor);
                    this.rectangularRangeBlock(n, s).forEach(this.addRange, this)
                }
            }, this.rectangularRangeBlock = function(t, e, i) {
                var s = [],
                    r = t.column < e.column;
                if (r) var a = t.column,
                    l = e.column,
                    h = t.offsetX,
                    c = e.offsetX;
                else a = e.column, l = t.column, h = e.offsetX, c = t.offsetX;
                var u, d = t.row < e.row;
                if (d) var f = t.row,
                    g = e.row;
                else f = e.row, g = t.row;
                a < 0 && (a = 0), f < 0 && (f = 0), f == g && (i = !0);
                for (var m = f; m <= g; m++) {
                    var p = o.fromPoints(this.session.screenToDocumentPosition(m, a, h), this.session.screenToDocumentPosition(m, l, c));
                    if (p.isEmpty()) {
                        if (u && n(p.end, u)) break;
                        u = p.end
                    }
                    p.cursor = r ? p.start : p.end, s.push(p)
                }
                if (d && s.reverse(), !i) {
                    for (var v = s.length - 1; s[v].isEmpty() && v > 0;) v--;
                    if (v > 0)
                        for (var _ = 0; s[_].isEmpty();) _++;
                    for (var w = v; w >= _; w--) s[w].isEmpty() && s.splice(w, 1)
                }
                return s
            }
        }).call(a.prototype);
        var g = t("./editor").Editor;
        (function() {
            this.updateSelectionMarkers = function() {
                this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.addSelectionMarker = function(t) {
                t.cursor || (t.cursor = t.end);
                var e = this.getSelectionStyle();
                return t.marker = this.session.addMarker(t, "ace_selection", e), this.session.$selectionMarkers.push(t), this.session.selectionMarkerCount = this.session.$selectionMarkers.length, t
            }, this.removeSelectionMarker = function(t) {
                if (t.marker) {
                    this.session.removeMarker(t.marker);
                    var e = this.session.$selectionMarkers.indexOf(t); - 1 != e && this.session.$selectionMarkers.splice(e, 1), this.session.selectionMarkerCount = this.session.$selectionMarkers.length
                }
            }, this.removeSelectionMarkers = function(t) {
                for (var e = this.session.$selectionMarkers, i = t.length; i--;) {
                    var n = t[i];
                    if (n.marker) {
                        this.session.removeMarker(n.marker);
                        var s = e.indexOf(n); - 1 != s && e.splice(s, 1)
                    }
                }
                this.session.selectionMarkerCount = e.length
            }, this.$onAddRange = function(t) {
                this.addSelectionMarker(t.range), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.$onRemoveRange = function(t) {
                this.removeSelectionMarkers(t.ranges), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
            }, this.$onMultiSelect = function(t) {
                this.inMultiSelectMode || (this.inMultiSelectMode = !0, this.setStyle("ace_multiselect"), this.keyBinding.addKeyboardHandler(u.keyboardHandler), this.commands.setDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers())
            }, this.$onSingleSelect = function(t) {
                this.session.multiSelect.inVirtualMode || (this.inMultiSelectMode = !1, this.unsetStyle("ace_multiselect"), this.keyBinding.removeKeyboardHandler(u.keyboardHandler), this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec), this.renderer.updateCursor(), this.renderer.updateBackMarkers(), this._emit("changeSelection"))
            }, this.$onMultiSelectExec = function(t) {
                var e = t.command,
                    i = t.editor;
                if (i.multiSelect) {
                    if (e.multiSelectAction) "forEach" == e.multiSelectAction ? n = i.forEachSelection(e, t.args) : "forEachLine" == e.multiSelectAction ? n = i.forEachSelection(e, t.args, !0) : "single" == e.multiSelectAction ? (i.exitMultiSelectMode(), n = e.exec(i, t.args || {})) : n = e.multiSelectAction(i, t.args || {});
                    else {
                        var n = e.exec(i, t.args || {});
                        i.multiSelect.addRange(i.multiSelect.toOrientedRange()), i.multiSelect.mergeOverlappingRanges()
                    }
                    return n
                }
            }, this.forEachSelection = function(t, e, i) {
                if (!this.inVirtualSelectionMode) {
                    var n, s = 1 == i || i && i.$byLines,
                        r = this.session,
                        o = this.selection,
                        l = (i && i.keepOrder ? o : o.rangeList).ranges;
                    if (!l.length) return t.exec ? t.exec(this, e || {}) : t(this, e || {});
                    var h = o._eventRegistry;
                    o._eventRegistry = {};
                    var c = new a(r);
                    this.inVirtualSelectionMode = !0;
                    for (var u = l.length; u--;) {
                        if (s)
                            for (; u > 0 && l[u].start.row == l[u - 1].end.row;) u--;
                        c.fromOrientedRange(l[u]), c.index = u, this.selection = r.selection = c;
                        var d = t.exec ? t.exec(this, e || {}) : t(this, e || {});
                        !n && void 0 !== d && (n = d), c.toOrientedRange(l[u])
                    }
                    c.detach(), this.selection = r.selection = o, this.inVirtualSelectionMode = !1, o._eventRegistry = h, o.mergeOverlappingRanges(), o.ranges[0] && o.fromOrientedRange(o.ranges[0]);
                    var f = this.renderer.$scrollAnimation;
                    return this.onCursorChange(), this.onSelectionChange(), f && f.from == f.to && this.renderer.animateScrolling(f.from), n
                }
            }, this.exitMultiSelectMode = function() {
                this.inMultiSelectMode && !this.inVirtualSelectionMode && this.multiSelect.toSingleRange()
            }, this.getSelectedText = function() {
                var t = "";
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    for (var e = this.multiSelect.rangeList.ranges, i = [], n = 0; n < e.length; n++) i.push(this.session.getTextRange(e[n]));
                    var s = this.session.getDocument().getNewLineCharacter();
                    (t = i.join(s)).length == (i.length - 1) * s.length && (t = "")
                } else this.selection.isEmpty() || (t = this.session.getTextRange(this.getSelectionRange()));
                return t
            }, this.$checkMultiselectChange = function(t, e) {
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    var i = this.multiSelect.ranges[0];
                    if (this.multiSelect.isEmpty() && e == this.multiSelect.anchor) return;
                    var n = e == this.multiSelect.anchor ? i.cursor == i.start ? i.end : i.start : i.cursor;
                    n.row != e.row || this.session.$clipPositionToDocument(n.row, n.column).column != e.column ? this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange()) : this.multiSelect.mergeOverlappingRanges()
                }
            }, this.findAll = function(t, e, i) {
                if ((e = e || {}).needle = t || e.needle, void 0 == e.needle) {
                    var n = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                    e.needle = this.session.getTextRange(n)
                }
                this.$search.set(e);
                var s = this.$search.findAll(this.session);
                if (!s.length) return 0;
                var r = this.multiSelect;
                i || r.toSingleRange(s[0]);
                for (var o = s.length; o--;) r.addRange(s[o], !0);
                return n && r.rangeList.rangeAtPoint(n.start) && r.addRange(n, !0), s.length
            }, this.selectMoreLines = function(t, e) {
                var i = this.selection.toOrientedRange(),
                    n = i.cursor == i.end,
                    s = this.session.documentToScreenPosition(i.cursor);
                this.selection.$desiredColumn && (s.column = this.selection.$desiredColumn);
                var r, a = this.session.screenToDocumentPosition(s.row + t, s.column);
                if (i.isEmpty()) h = a;
                else var l = this.session.documentToScreenPosition(n ? i.end : i.start),
                    h = this.session.screenToDocumentPosition(l.row + t, l.column);
                if (n ? (r = o.fromPoints(a, h)).cursor = r.start : (r = o.fromPoints(h, a)).cursor = r.end, r.desiredColumn = s.column, this.selection.inMultiSelectMode) {
                    if (e) var c = i.cursor
                } else this.selection.addRange(i);
                this.selection.addRange(r), c && this.selection.substractPoint(c)
            }, this.transposeSelections = function(t) {
                for (var e = this.session, i = e.multiSelect, n = i.ranges, s = n.length; s--;)
                    if ((a = n[s]).isEmpty()) {
                        var r = e.getWordRange(a.start.row, a.start.column);
                        a.start.row = r.start.row, a.start.column = r.start.column, a.end.row = r.end.row, a.end.column = r.end.column
                    }
                i.mergeOverlappingRanges();
                var o = [];
                for (s = n.length; s--;) o.unshift(e.getTextRange(a = n[s]));
                for (t < 0 ? o.unshift(o.pop()) : o.push(o.shift()), s = n.length; s--;) {
                    var a;
                    r = (a = n[s]).clone(), e.replace(a, o[s]), a.start.row = r.start.row, a.start.column = r.start.column
                }
                i.fromOrientedRange(i.ranges[0])
            }, this.selectMore = function(t, e, i) {
                var n = this.session,
                    s = n.multiSelect.toOrientedRange();
                if (!s.isEmpty() || ((s = n.getWordRange(s.start.row, s.start.column)).cursor = -1 == t ? s.start : s.end, this.multiSelect.addRange(s), !i)) {
                    var r = function(t, e, i) {
                        return d.$options.wrap = !0, d.$options.needle = e, d.$options.backwards = -1 == i, d.find(t)
                    }(n, n.getTextRange(s), t);
                    r && (r.cursor = -1 == t ? r.start : r.end, this.session.unfold(r), this.multiSelect.addRange(r), this.renderer.scrollCursorIntoView(null, .5)), e && this.multiSelect.substractPoint(s.cursor)
                }
            }, this.alignCursors = function() {
                var t = this.session,
                    e = t.multiSelect,
                    i = e.ranges,
                    n = -1,
                    s = i.filter(function(t) {
                        if (t.cursor.row == n) return !0;
                        n = t.cursor.row
                    });
                if (i.length && s.length != i.length - 1) {
                    s.forEach(function(t) {
                        e.substractPoint(t.cursor)
                    });
                    var r = 0,
                        a = 1 / 0,
                        l = i.map(function(e) {
                            var i = e.cursor,
                                n = t.getLine(i.row).substr(i.column).search(/\S/g);
                            return -1 == n && (n = 0), i.column > r && (r = i.column), n < a && (a = n), n
                        });
                    i.forEach(function(e, i) {
                        var n = e.cursor,
                            s = r - n.column,
                            h = l[i] - a;
                        s > h ? t.insert(n, c.stringRepeat(" ", s - h)) : t.remove(new o(n.row, n.column, n.row, n.column - s + h)), e.start.column = e.end.column = r, e.start.row = e.end.row = n.row, e.cursor = e.end
                    }), e.fromOrientedRange(i[0]), this.renderer.updateCursor(), this.renderer.updateBackMarkers()
                } else {
                    var h = this.selection.getRange(),
                        u = h.start.row,
                        d = h.end.row,
                        f = u == d;
                    if (f) {
                        var g, m = this.session.getLength();
                        do {
                            g = this.session.getLine(d)
                        } while (/[=:]/.test(g) && ++d < m);
                        do {
                            g = this.session.getLine(u)
                        } while (/[=:]/.test(g) && --u > 0);
                        u < 0 && (u = 0), d >= m && (d = m - 1)
                    }
                    var p = this.session.removeFullLines(u, d);
                    p = this.$reAlignText(p, f), this.session.insert({
                        row: u,
                        column: 0
                    }, p.join("\n") + "\n"), f || (h.start.column = 0, h.end.column = p[p.length - 1].length), this.selection.setRange(h)
                }
            }, this.$reAlignText = function(t, e) {
                function i(t) {
                    return c.stringRepeat(" ", t)
                }

                function n(t) {
                    return t[2] ? i(s) + t[2] + i(r - t[2].length + o) + t[4].replace(/^([=:])\s+/, "$1 ") : t[0]
                }
                var s, r, o, a = !0,
                    l = !0;
                return t.map(function(t) {
                    var e = t.match(/(\s*)(.*?)(\s*)([=:].*)/);
                    return e ? null == s ? (s = e[1].length, r = e[2].length, o = e[3].length, e) : (s + r + o != e[1].length + e[2].length + e[3].length && (l = !1), s != e[1].length && (a = !1), s > e[1].length && (s = e[1].length), r < e[2].length && (r = e[2].length), o > e[3].length && (o = e[3].length), e) : [t]
                }).map(e ? n : a ? l ? function(t) {
                    return t[2] ? i(s + r - t[2].length) + t[2] + i(o) + t[4].replace(/^([=:])\s+/, "$1 ") : t[0]
                } : n : function(t) {
                    return t[2] ? i(s) + t[2] + i(o) + t[4].replace(/^([=:])\s+/, "$1 ") : t[0]
                })
            }
        }).call(g.prototype), e.onSessionChange = function(t) {
            var e = t.session;
            e && !e.multiSelect && (e.$selectionMarkers = [], e.selection.$initRangeList(), e.multiSelect = e.selection), this.multiSelect = e && e.multiSelect;
            var i = t.oldSession;
            i && (i.multiSelect.off("addRange", this.$onAddRange), i.multiSelect.off("removeRange", this.$onRemoveRange), i.multiSelect.off("multiSelect", this.$onMultiSelect), i.multiSelect.off("singleSelect", this.$onSingleSelect), i.multiSelect.lead.off("change", this.$checkMultiselectChange), i.multiSelect.anchor.off("change", this.$checkMultiselectChange)), e && (e.multiSelect.on("addRange", this.$onAddRange), e.multiSelect.on("removeRange", this.$onRemoveRange), e.multiSelect.on("multiSelect", this.$onMultiSelect), e.multiSelect.on("singleSelect", this.$onSingleSelect), e.multiSelect.lead.on("change", this.$checkMultiselectChange), e.multiSelect.anchor.on("change", this.$checkMultiselectChange)), e && this.inMultiSelectMode != e.selection.inMultiSelectMode && (e.selection.inMultiSelectMode ? this.$onMultiSelect() : this.$onSingleSelect())
        }, e.MultiSelect = s, t("./config").defineOptions(g.prototype, "editor", {
            enableMultiselect: {
                set: function(t) {
                    s(this), t ? (this.on("changeSession", this.$multiselectOnSessionChange), this.on("mousedown", l)) : (this.off("changeSession", this.$multiselectOnSessionChange), this.off("mousedown", l))
                },
                value: !0
            },
            enableBlockSelect: {
                set: function(t) {
                    this.$blockSelectEnabled = t
                },
                value: !0
            }
        })
    }), define("ace/mode/folding/fold_mode", ["require", "exports", "module", "ace/range"], function(t, e, i) {
        "use strict";
        var n = t("../../range").Range,
            s = e.FoldMode = function() {};
        (function() {
            this.foldingStartMarker = null, this.foldingStopMarker = null, this.getFoldWidget = function(t, e, i) {
                var n = t.getLine(i);
                return this.foldingStartMarker.test(n) ? "start" : "markbeginend" == e && this.foldingStopMarker && this.foldingStopMarker.test(n) ? "end" : ""
            }, this.getFoldWidgetRange = function(t, e, i) {
                return null
            }, this.indentationBlock = function(t, e, i) {
                var s = /\S/,
                    r = t.getLine(e),
                    o = r.search(s);
                if (-1 != o) {
                    for (var a = i || r.length, l = t.getLength(), h = e, c = e; ++e < l;) {
                        var u = t.getLine(e).search(s);
                        if (-1 != u) {
                            if (u <= o) break;
                            c = e
                        }
                    }
                    if (c > h) {
                        var d = t.getLine(c).length;
                        return new n(h, a, c, d)
                    }
                }
            }, this.openingBracketBlock = function(t, e, i, s, r) {
                var o = {
                        row: i,
                        column: s + 1
                    },
                    a = t.$findClosingBracket(e, o, r);
                if (a) {
                    var l = t.foldWidgets[a.row];
                    return null == l && (l = t.getFoldWidget(a.row)), "start" == l && a.row > o.row && (a.row--, a.column = t.getLine(a.row).length), n.fromPoints(o, a)
                }
            }, this.closingBracketBlock = function(t, e, i, s, r) {
                var o = {
                        row: i,
                        column: s
                    },
                    a = t.$findOpeningBracket(e, o);
                if (a) return a.column++, o.column--, n.fromPoints(a, o)
            }
        }).call(s.prototype)
    }), define("ace/theme/textmate", ["require", "exports", "module", "ace/lib/dom"], function(t, e, i) {
        "use strict";
        e.isDark = !1, e.cssClass = "ace-tm", e.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}', e.$id = "ace/theme/textmate", t("../lib/dom").importCssString(e.cssText, e.cssClass)
    }), define("ace/line_widgets", ["require", "exports", "module", "ace/lib/oop", "ace/lib/dom", "ace/range"], function(t, e, i) {
        "use strict";

        function n(t) {
            this.session = t, this.session.widgetManager = this, this.session.getRowLength = this.getRowLength, this.session.$getWidgetScreenLength = this.$getWidgetScreenLength, this.updateOnChange = this.updateOnChange.bind(this), this.renderWidgets = this.renderWidgets.bind(this), this.measureWidgets = this.measureWidgets.bind(this), this.session._changedWidgets = [], this.$onChangeEditor = this.$onChangeEditor.bind(this), this.session.on("change", this.updateOnChange), this.session.on("changeFold", this.updateOnFold), this.session.on("changeEditor", this.$onChangeEditor)
        }
        t("./lib/oop");
        var s = t("./lib/dom");
        t("./range"), (function() {
            this.getRowLength = function(t) {
                var e;
                return e = this.lineWidgets && this.lineWidgets[t] && this.lineWidgets[t].rowCount || 0, this.$useWrapMode && this.$wrapData[t] ? this.$wrapData[t].length + 1 + e : 1 + e
            }, this.$getWidgetScreenLength = function() {
                var t = 0;
                return this.lineWidgets.forEach(function(e) {
                    e && e.rowCount && !e.hidden && (t += e.rowCount)
                }), t
            }, this.$onChangeEditor = function(t) {
                this.attach(t.editor)
            }, this.attach = function(t) {
                t && t.widgetManager && t.widgetManager != this && t.widgetManager.detach(), this.editor != t && (this.detach(), this.editor = t, t && (t.widgetManager = this, t.renderer.on("beforeRender", this.measureWidgets), t.renderer.on("afterRender", this.renderWidgets)))
            }, this.detach = function(t) {
                var e = this.editor;
                if (e) {
                    this.editor = null, e.widgetManager = null, e.renderer.off("beforeRender", this.measureWidgets), e.renderer.off("afterRender", this.renderWidgets);
                    var i = this.session.lineWidgets;
                    i && i.forEach(function(t) {
                        t && t.el && t.el.parentNode && (t._inDocument = !1, t.el.parentNode.removeChild(t.el))
                    })
                }
            }, this.updateOnFold = function(t, e) {
                var i = e.lineWidgets;
                if (i && t.action) {
                    for (var n = t.data, s = n.start.row, r = n.end.row, o = "add" == t.action, a = s + 1; a < r; a++) i[a] && (i[a].hidden = o);
                    i[r] && (o ? i[s] ? i[r].hidden = o : i[s] = i[r] : (i[s] == i[r] && (i[s] = void 0), i[r].hidden = o))
                }
            }, this.updateOnChange = function(t) {
                var e = this.session.lineWidgets;
                if (e) {
                    var i = t.start.row,
                        n = t.end.row - i;
                    if (0 !== n)
                        if ("remove" == t.action) e.splice(i + 1, n).forEach(function(t) {
                            t && this.removeLineWidget(t)
                        }, this), this.$updateRows();
                        else {
                            var s = new Array(n);
                            s.unshift(i, 0), e.splice.apply(e, s), this.$updateRows()
                        }
                }
            }, this.$updateRows = function() {
                var t = this.session.lineWidgets;
                if (t) {
                    var e = !0;
                    t.forEach(function(t, i) {
                        if (t)
                            for (e = !1, t.row = i; t.$oldWidget;) t.$oldWidget.row = i, t = t.$oldWidget
                    }), e && (this.session.lineWidgets = null)
                }
            }, this.addLineWidget = function(t) {
                this.session.lineWidgets || (this.session.lineWidgets = new Array(this.session.getLength()));
                var e = this.session.lineWidgets[t.row];
                e && (t.$oldWidget = e, e.el && e.el.parentNode && (e.el.parentNode.removeChild(e.el), e._inDocument = !1)), this.session.lineWidgets[t.row] = t, t.session = this.session;
                var i = this.editor.renderer;
                t.html && !t.el && (t.el = s.createElement("div"), t.el.innerHTML = t.html), t.el && (s.addCssClass(t.el, "ace_lineWidgetContainer"), t.el.style.position = "absolute", t.el.style.zIndex = 5, i.container.appendChild(t.el), t._inDocument = !0), t.coverGutter || (t.el.style.zIndex = 3), null == t.pixelHeight && (t.pixelHeight = t.el.offsetHeight), null == t.rowCount && (t.rowCount = t.pixelHeight / i.layerConfig.lineHeight);
                var n = this.session.getFoldAt(t.row, 0);
                if (t.$fold = n, n) {
                    var r = this.session.lineWidgets;
                    t.row != n.end.row || r[n.start.row] ? t.hidden = !0 : r[n.start.row] = t
                }
                return this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: t.row
                        }
                    }
                }), this.$updateRows(), this.renderWidgets(null, i), this.onWidgetChanged(t), t
            }, this.removeLineWidget = function(t) {
                if (t._inDocument = !1, t.session = null, t.el && t.el.parentNode && t.el.parentNode.removeChild(t.el), t.editor && t.editor.destroy) try {
                    t.editor.destroy()
                } catch (t) {}
                if (this.session.lineWidgets) {
                    var e = this.session.lineWidgets[t.row];
                    if (e == t) this.session.lineWidgets[t.row] = t.$oldWidget, t.$oldWidget && this.onWidgetChanged(t.$oldWidget);
                    else
                        for (; e;) {
                            if (e.$oldWidget == t) {
                                e.$oldWidget = t.$oldWidget;
                                break
                            }
                            e = e.$oldWidget
                        }
                }
                this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: t.row
                        }
                    }
                }), this.$updateRows()
            }, this.getWidgetsAtRow = function(t) {
                for (var e = this.session.lineWidgets, i = e && e[t], n = []; i;) n.push(i), i = i.$oldWidget;
                return n
            }, this.onWidgetChanged = function(t) {
                this.session._changedWidgets.push(t), this.editor && this.editor.renderer.updateFull()
            }, this.measureWidgets = function(t, e) {
                var i = this.session._changedWidgets,
                    n = e.layerConfig;
                if (i && i.length) {
                    for (var s = 1 / 0, r = 0; r < i.length; r++) {
                        var o = i[r];
                        if (o && o.el && o.session == this.session) {
                            if (!o._inDocument) {
                                if (this.session.lineWidgets[o.row] != o) continue;
                                o._inDocument = !0, e.container.appendChild(o.el)
                            }
                            o.h = o.el.offsetHeight, o.fixedWidth || (o.w = o.el.offsetWidth, o.screenWidth = Math.ceil(o.w / n.characterWidth));
                            var a = o.h / n.lineHeight;
                            o.coverLine && (a -= this.session.getRowLineCount(o.row)) < 0 && (a = 0), o.rowCount != a && (o.rowCount = a, o.row < s && (s = o.row))
                        }
                    }
                    s != 1 / 0 && (this.session._emit("changeFold", {
                        data: {
                            start: {
                                row: s
                            }
                        }
                    }), this.session.lineWidgetWidth = null), this.session._changedWidgets = []
                }
            }, this.renderWidgets = function(t, e) {
                var i = e.layerConfig,
                    n = this.session.lineWidgets;
                if (n) {
                    for (var s = Math.min(this.firstRow, i.firstRow), r = Math.max(this.lastRow, i.lastRow, n.length); s > 0 && !n[s];) s--;
                    this.firstRow = i.firstRow, this.lastRow = i.lastRow, e.$cursorLayer.config = i;
                    for (var o = s; o <= r; o++) {
                        var a = n[o];
                        if (a && a.el)
                            if (a.hidden) a.el.style.top = -100 - (a.pixelHeight || 0) + "px";
                            else {
                                a._inDocument || (a._inDocument = !0, e.container.appendChild(a.el));
                                var l = e.$cursorLayer.getPixelPosition({
                                    row: o,
                                    column: 0
                                }, !0).top;
                                a.coverLine || (l += i.lineHeight * this.session.getRowLineCount(a.row)), a.el.style.top = l - i.offset + "px";
                                var h = a.coverGutter ? 0 : e.gutterWidth;
                                a.fixedWidth || (h -= e.scrollLeft), a.el.style.left = h + "px", a.fullWidth && a.screenWidth && (a.el.style.minWidth = i.width + 2 * i.padding + "px"), a.el.style.right = a.fixedWidth ? e.scrollBar.getWidth() + "px" : ""
                            }
                    }
                }
            }
        }).call(n.prototype), e.LineWidgets = n
    }), define("ace/ext/error_marker", ["require", "exports", "module", "ace/line_widgets", "ace/lib/dom", "ace/range"], function(t, e, i) {
        "use strict";

        function n(t, e, i) {
            var n = t.getAnnotations().sort(o.comparePoints);
            if (n.length) {
                var s = function(t, e, i) {
                    for (var n = 0, s = t.length - 1; n <= s;) {
                        var r = n + s >> 1,
                            o = i(e, t[r]);
                        if (o > 0) n = r + 1;
                        else {
                            if (!(o < 0)) return r;
                            s = r - 1
                        }
                    }
                    return -(n + 1)
                }(n, {
                    row: e,
                    column: -1
                }, o.comparePoints);
                s < 0 && (s = -s - 1), s >= n.length ? s = i > 0 ? 0 : n.length - 1 : 0 === s && i < 0 && (s = n.length - 1);
                var r = n[s];
                if (r && i) {
                    if (r.row === e) {
                        do {
                            r = n[s += i]
                        } while (r && r.row === e);
                        if (!r) return n.slice()
                    }
                    var a = [];
                    e = r.row;
                    do {
                        a[i < 0 ? "unshift" : "push"](r), r = n[s += i]
                    } while (r && r.row == e);
                    return a.length && a
                }
            }
        }
        var s = t("../line_widgets").LineWidgets,
            r = t("../lib/dom"),
            o = t("../range").Range;
        e.showErrorMarker = function(t, e) {
            var i = t.session;
            i.widgetManager || (i.widgetManager = new s(i), i.widgetManager.attach(t));
            var o = t.getCursorPosition(),
                a = o.row,
                l = i.widgetManager.getWidgetsAtRow(a).filter(function(t) {
                    return "errorMarker" == t.type
                })[0];
            l ? l.destroy() : a -= e;
            var h, c = n(i, a, e);
            if (c) {
                var u = c[0];
                o.column = (u.pos && "number" != typeof u.column ? u.pos.sc : u.column) || 0, o.row = u.row, h = t.renderer.$gutterLayer.$annotations[o.row]
            } else {
                if (l) return;
                h = {
                    text: ["Looks good!"],
                    className: "ace_ok"
                }
            }
            t.session.unfold(o.row), t.selection.moveToPosition(o);
            var d = {
                    row: o.row,
                    fixedWidth: !0,
                    coverGutter: !0,
                    el: r.createElement("div"),
                    type: "errorMarker"
                },
                f = d.el.appendChild(r.createElement("div")),
                g = d.el.appendChild(r.createElement("div"));
            g.className = "error_widget_arrow " + h.className;
            var m = t.renderer.$cursorLayer.getPixelPosition(o).left;
            g.style.left = m + t.renderer.gutterWidth - 5 + "px", d.el.className = "error_widget_wrapper", f.className = "error_widget " + h.className, f.innerHTML = h.text.join("<br>"), f.appendChild(r.createElement("div"));
            var p = function(t, e, i) {
                if (0 === e && ("esc" === i || "return" === i)) return d.destroy(), {
                    command: "null"
                }
            };
            d.destroy = function() {
                t.$mouseHandler.isMousePressed || (t.keyBinding.removeKeyboardHandler(p), i.widgetManager.removeLineWidget(d), t.off("changeSelection", d.destroy), t.off("changeSession", d.destroy), t.off("mouseup", d.destroy), t.off("change", d.destroy))
            }, t.keyBinding.addKeyboardHandler(p), t.on("changeSelection", d.destroy), t.on("changeSession", d.destroy), t.on("mouseup", d.destroy), t.on("change", d.destroy), t.session.widgetManager.addLineWidget(d), d.el.onmousedown = t.focus.bind(t), t.renderer.scrollCursorIntoView(null, .5, {
                bottom: d.el.offsetHeight
            })
        }, r.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "")
    }), define("ace/ace", ["require", "exports", "module", "ace/lib/fixoldbrowsers", "ace/lib/dom", "ace/lib/event", "ace/range", "ace/editor", "ace/edit_session", "ace/undomanager", "ace/virtual_renderer", "ace/worker/worker_client", "ace/keyboard/hash_handler", "ace/placeholder", "ace/multi_select", "ace/mode/folding/fold_mode", "ace/theme/textmate", "ace/ext/error_marker", "ace/config"], function(t, e, i) {
        "use strict";
        t("./lib/fixoldbrowsers");
        var n = t("./lib/dom"),
            s = t("./lib/event"),
            r = t("./range").Range,
            o = t("./editor").Editor,
            a = t("./edit_session").EditSession,
            l = t("./undomanager").UndoManager,
            h = t("./virtual_renderer").VirtualRenderer;
        t("./worker/worker_client"), t("./keyboard/hash_handler"), t("./placeholder"), t("./multi_select"), t("./mode/folding/fold_mode"), t("./theme/textmate"), t("./ext/error_marker"), e.config = t("./config"), e.require = t, "function" == typeof define && (e.define = define), e.edit = function(t, i) {
            if ("string" == typeof t) {
                var r = t;
                if (!(t = document.getElementById(r))) throw new Error("ace.edit can't find div #" + r)
            }
            if (t && t.env && t.env.editor instanceof o) return t.env.editor;
            var a = "";
            if (t && /input|textarea/i.test(t.tagName)) {
                var l = t;
                a = l.value, t = n.createElement("pre"), l.parentNode.replaceChild(t, l)
            } else t && (a = t.textContent, t.innerHTML = "");
            var c = e.createEditSession(a),
                u = new o(new h(t), c, i),
                d = {
                    document: c,
                    editor: u,
                    onResize: u.resize.bind(u, null)
                };
            return l && (d.textarea = l), s.addListener(window, "resize", d.onResize), u.on("destroy", function() {
                s.removeListener(window, "resize", d.onResize), d.editor.container.env = null
            }), u.container.env = u.env = d, u
        }, e.createEditSession = function(t, e) {
            var i = new a(t, e);
            return i.setUndoManager(new l), i
        }, e.Range = r, e.EditSession = a, e.UndoManager = l, e.VirtualRenderer = h, e.version = "1.4.1"
    }), window.require(["ace/ace"], function(t) {
        for (var e in t && (t.config.init(!0), t.define = window.define), window.ace || (window.ace = t), t) t.hasOwnProperty(e) && (window.ace[e] = t[e]);
        window.ace.default = window.ace, "object" == typeof module && "object" == typeof exports && module && (module.exports = window.ace)
    });