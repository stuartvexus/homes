! function() {
    "use strict";

    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(i), !0).forEach((function(e) {
                o(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
        }
        return t
    }

    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function s(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function a(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
            if (null == e) return {};
            var n, i, r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
    }

    function u(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var i, r, s = [],
                o = !0,
                a = !1;
            try {
                for (n = n.call(e); !(o = (i = n.next()).done) && (s.push(i.value), !t || s.length !== t); o = !0);
            } catch (e) {
                a = !0, r = e
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (a) throw r
                }
            }
            return s
        }(e, t) || c(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || c(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        if (e) {
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }

    function h(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = c(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var i = 0,
                    r = function() {};
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var s, o = !0,
            a = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return o = e.done, e
            },
            e: function(e) {
                a = !0, s = e
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (a) throw s
                }
            }
        }
    }
    var f = {
            DEBUG: !1,
            LIB_VERSION: "1.129.0"
        },
        p = Array.isArray,
        v = Object.prototype,
        g = v.hasOwnProperty,
        _ = v.toString,
        m = p || function(e) {
            return "[object Array]" === _.call(e)
        },
        y = function(e) {
            return "function" == typeof e
        },
        b = function(e) {
            return e === Object(e) && !m(e)
        },
        k = function(e) {
            if (b(e)) {
                for (var t in e)
                    if (g.call(e, t)) return !1;
                return !0
            }
            return !1
        },
        w = function(e) {
            return void 0 === e
        },
        S = function(e) {
            return "[object String]" == _.call(e)
        },
        F = function(e) {
            return null === e
        },
        E = function(e) {
            return w(e) || F(e)
        },
        R = function(e) {
            return "[object Number]" == _.call(e)
        },
        x = function(e) {
            return "[object Boolean]" === _.call(e)
        },
        P = function(e) {
            return e instanceof FormData
        },
        I = "undefined" != typeof window ? window : void 0,
        C = "undefined" != typeof globalThis ? globalThis : I,
        $ = Array.prototype,
        T = $.forEach,
        M = $.indexOf,
        O = null == C ? void 0 : C.navigator,
        q = null == C ? void 0 : C.document,
        A = null == C ? void 0 : C.location,
        L = null == C ? void 0 : C.fetch,
        B = null != C && C.XMLHttpRequest && "withCredentials" in new C.XMLHttpRequest ? C.XMLHttpRequest : void 0,
        D = null == C ? void 0 : C.AbortController,
        N = null == O ? void 0 : O.userAgent,
        H = null != I ? I : {},
        j = "[PostHog.js]",
        U = {
            _log: function(e) {
                if (I && (f.DEBUG || H.POSTHOG_DEBUG) && !w(I.console) && I.console) {
                    for (var t = ("__rrweb_original__" in I.console[e] ? I.console[e].__rrweb_original__ : I.console[e]), n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    t.apply(void 0, [j].concat(i))
                }
            },
            info: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                U._log.apply(U, ["log"].concat(t))
            },
            warn: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                U._log.apply(U, ["warn"].concat(t))
            },
            error: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                U._log.apply(U, ["error"].concat(t))
            },
            critical: function() {
                for (var e, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                (e = console).error.apply(e, [j].concat(n))
            },
            uninitializedWarning: function(e) {
                U.error("You must initialize PostHog before calling ".concat(e))
            }
        },
        W = {},
        z = function(e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        };

    function G(e, t, n) {
        if (m(e))
            if (T && e.forEach === T) e.forEach(t, n);
            else if ("length" in e && e.length === +e.length)
            for (var i = 0, r = e.length; i < r; i++)
                if (i in e && t.call(n, e[i], i) === W) return
    }

    function V(e, t, n) {
        if (!E(e)) {
            if (m(e)) return G(e, t, n);
            if (P(e)) {
                var i, r = h(e.entries());
                try {
                    for (r.s(); !(i = r.n()).done;) {
                        var s = i.value;
                        if (t.call(n, s[1], s[0]) === W) return
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            } else
                for (var o in e)
                    if (g.call(e, o) && t.call(n, e[o], o) === W) return
        }
    }
    var Q = function(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return G(n, (function(t) {
            for (var n in t) void 0 !== t[n] && (e[n] = t[n])
        })), e
    };

    function J(e, t) {
        return -1 !== e.indexOf(t)
    }

    function Y(e) {
        for (var t = Object.keys(e), n = t.length, i = new Array(n); n--;) i[n] = [t[n], e[t[n]]];
        return i
    }
    var X = function() {
            return Date.now = Date.now || function() {
                return +new Date
            }, Date.now()
        },
        K = function(e) {
            try {
                return e()
            } catch (e) {
                return
            }
        },
        Z = function(e) {
            return function() {
                try {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
                    return e.apply(this, n)
                } catch (e) {
                    U.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), U.critical(e)
                }
            }
        },
        ee = function(e) {
            var t = {};
            return V(e, (function(e, n) {
                S(e) && e.length > 0 && (t[n] = e)
            })), t
        };

    function te(e, t) {
        return n = e, i = function(e) {
                return S(e) && !F(t) ? e.slice(0, t) : e
            }, r = new Set,
            function e(t, n) {
                return t !== Object(t) ? i ? i(t, n) : t : r.has(t) ? void 0 : (r.add(t), m(t) ? (s = [], G(t, (function(t) {
                    s.push(e(t))
                }))) : (s = {}, V(t, (function(t, n) {
                    r.has(t) || (s[n] = e(t, n))
                }))), s);
                var s
            }(n);
        var n, i, r
    }
    var ne, ie = function(e) {
            var t, n, i, r, s = "";
            for (t = n = 0, i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r = 0; r < i; r++) {
                var o = e.charCodeAt(r),
                    a = null;
                o < 128 ? n++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), F(a) || (n > t && (s += e.substring(t, n)), s += a, t = n = r + 1)
            }
            return n > t && (s += e.substring(t, e.length)), s
        },
        re = function() {
            function e(t) {
                return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
            }
            return e.preventDefault = function() {
                    this.returnValue = !1
                }, e.stopPropagation = function() {
                    this.cancelBubble = !0
                },
                function(t, n, i, r, s) {
                    if (t)
                        if (t.addEventListener && !r) t.addEventListener(n, i, !!s);
                        else {
                            var o = "on" + n,
                                a = t[o];
                            t[o] = function(t, n, i) {
                                return function(r) {
                                    if (r = r || e(null == I ? void 0 : I.event)) {
                                        var s, o = !0;
                                        y(i) && (s = i(r));
                                        var a = n.call(t, r);
                                        return !1 !== s && !1 !== a || (o = !1), o
                                    }
                                }
                            }(t, i, a)
                        }
                    else U.error("No valid element provided to register_event")
                }
        }();

    function se(e, t) {
        var n = function() {
            if (!q) return t("document not found");
            var n = q.createElement("script");
            n.type = "text/javascript", n.src = e, n.onload = function(e) {
                return t(void 0, e)
            }, n.onerror = function(e) {
                return t(e)
            };
            var i, r = q.querySelectorAll("body > script");
            r.length > 0 ? null === (i = r[0].parentNode) || void 0 === i || i.insertBefore(n, r[0]) : q.body.appendChild(n)
        };
        null != q && q.body ? n() : null == q || q.addEventListener("DOMContentLoaded", n)
    }! function(e) {
        e.GZipJS = "gzip-js", e.Base64 = "base64"
    }(ne || (ne = {}));
    var oe = "$people_distinct_id",
        ae = "__alias",
        ue = "__timers",
        le = "$autocapture_disabled_server_side",
        ce = "$heatmaps_enabled_server_side",
        de = "$session_recording_enabled_server_side",
        he = "$console_log_recording_enabled_server_side",
        fe = "$session_recording_network_payload_capture",
        pe = "$session_recording_canvas_recording",
        ve = "$replay_sample_rate",
        ge = "$replay_minimum_duration",
        _e = "$sesid",
        me = "$session_is_sampled",
        ye = "$enabled_feature_flags",
        be = "$early_access_features",
        ke = "$stored_person_properties",
        we = "$stored_group_properties",
        Se = "$surveys",
        Fe = "$flag_call_reported",
        Ee = "$user_state",
        Re = "$client_session_props",
        xe = "$capture_rate_limit",
        Pe = "$initial_campaign_params",
        Ie = "$initial_referrer_info",
        Ce = "$epp",
        $e = [oe, ae, "__cmpns", ue, de, ce, _e, ye, Ee, be, we, ke, Se, Fe, Re, xe, Pe, Ie, Ce],
        Te = "$active_feature_flags",
        Me = "$override_feature_flags",
        Oe = "$feature_flag_payloads",
        qe = function(e) {
            var t, n = {},
                i = h(Y(e || {}));
            try {
                for (i.s(); !(t = i.n()).done;) {
                    var r = u(t.value, 2),
                        s = r[0],
                        o = r[1];
                    o && (n[s] = o)
                }
            } catch (e) {
                i.e(e)
            } finally {
                i.f()
            }
            return n
        },
        Ae = function() {
            function e(t) {
                i(this, e), this.instance = t, this._override_warning = !1, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1
            }
            return s(e, [{
                key: "getFlags",
                value: function() {
                    return Object.keys(this.getFlagVariants())
                }
            }, {
                key: "getFlagVariants",
                value: function() {
                    var e = this.instance.get_property(ye),
                        t = this.instance.get_property(Me);
                    if (!t) return e || {};
                    for (var n = Q({}, e), i = Object.keys(t), r = 0; r < i.length; r++) n[i[r]] = t[i[r]];
                    return this._override_warning || (U.warn(" Overriding feature flags!", {
                        enabledFlags: e,
                        overriddenFlags: t,
                        finalFlags: n
                    }), this._override_warning = !0), n
                }
            }, {
                key: "getFlagPayloads",
                value: function() {
                    return this.instance.get_property(Oe) || {}
                }
            }, {
                key: "reloadFeatureFlags",
                value: function() {
                    this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer())
                }
            }, {
                key: "setAnonymousDistinctId",
                value: function(e) {
                    this.$anon_distinct_id = e
                }
            }, {
                key: "setReloadingPaused",
                value: function(e) {
                    this.reloadFeatureFlagsInAction = e
                }
            }, {
                key: "resetRequestQueue",
                value: function() {
                    this.reloadFeatureFlagsQueued = !1
                }
            }, {
                key: "_startReloadTimer",
                value: function() {
                    var e = this;
                    this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout((function() {
                        !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, e._reloadFeatureFlagsRequest())
                    }), 5)
                }
            }, {
                key: "_reloadFeatureFlagsRequest",
                value: function() {
                    var e = this;
                    if (!this.instance.config.advanced_disable_feature_flags) {
                        this.setReloadingPaused(!0);
                        var t = this.instance.config.token,
                            n = this.instance.get_property(ke),
                            i = this.instance.get_property(we),
                            r = {
                                token: t,
                                distinct_id: this.instance.get_distinct_id(),
                                groups: this.instance.getGroups(),
                                $anon_distinct_id: this.$anon_distinct_id,
                                person_properties: n,
                                group_properties: i,
                                disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
                            };
                        this.instance._send_request({
                            method: "POST",
                            url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                            data: r,
                            compression: this.instance.config.disable_compression ? void 0 : ne.Base64,
                            timeout: this.instance.config.feature_flag_request_timeout_ms,
                            callback: function(t) {
                                var n;
                                e.setReloadingPaused(!1);
                                var i = !0;
                                200 === t.statusCode && (e.$anon_distinct_id = void 0, i = !1), e.receivedFeatureFlags(null !== (n = t.json) && void 0 !== n ? n : {}, i), e._startReloadTimer()
                            }
                        })
                    }
                }
            }, {
                key: "getFeatureFlag",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
                        var n, i = this.getFlagVariants()[e],
                            r = "".concat(i),
                            s = this.instance.get_property(Fe) || {};
                        if (t.send_event || !("send_event" in t))
                            if (!(e in s) || !s[e].includes(r)) m(s[e]) ? s[e].push(r) : s[e] = [r], null === (n = this.instance.persistence) || void 0 === n || n.register(o({}, Fe, s)), this.instance.capture("$feature_flag_called", {
                                $feature_flag: e,
                                $feature_flag_response: i
                            });
                        return i
                    }
                    U.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.")
                }
            }, {
                key: "getFeatureFlagPayload",
                value: function(e) {
                    return this.getFlagPayloads()[e]
                }
            }, {
                key: "isFeatureEnabled",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
                    U.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.")
                }
            }, {
                key: "addFeatureFlagsHandler",
                value: function(e) {
                    this.featureFlagEventHandlers.push(e)
                }
            }, {
                key: "removeFeatureFlagsHandler",
                value: function(e) {
                    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter((function(t) {
                        return t !== e
                    }))
                }
            }, {
                key: "receivedFeatureFlags",
                value: function(e, n) {
                    if (this.instance.persistence) {
                        this.instance.decideEndpointWasHit = !0;
                        var i = this.getFlagVariants(),
                            r = this.getFlagPayloads();
                        ! function(e, n) {
                            var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                a = e.featureFlags,
                                u = e.featureFlagPayloads;
                            if (a)
                                if (m(a)) {
                                    var l, c = {};
                                    if (a)
                                        for (var d = 0; d < a.length; d++) c[a[d]] = !0;
                                    n && n.register((o(l = {}, Te, a), o(l, ye, c), l))
                                } else {
                                    var h = a,
                                        f = u;
                                    e.errorsWhileComputingFlags && (h = t(t({}, r), h), f = t(t({}, s), f)), n && n.register((o(i = {}, Te, Object.keys(qe(h))), o(i, ye, h || {}), o(i, Oe, f || {}), i))
                                }
                        }(e, this.instance.persistence, i, r), this._fireFeatureFlagsCallbacks(n)
                    }
                }
            }, {
                key: "override",
                value: function(e) {
                    if (!this.instance.__loaded || !this.instance.persistence) return U.uninitializedWarning("posthog.feature_flags.override");
                    if (this._override_warning = !1, !1 === e) this.instance.persistence.unregister(Me);
                    else if (m(e)) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
                        this.instance.persistence.register(o({}, Me, t))
                    } else this.instance.persistence.register(o({}, Me, e))
                }
            }, {
                key: "onFeatureFlags",
                value: function(e) {
                    var t = this;
                    if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
                        var n = this._prepareFeatureFlagsForCallbacks(),
                            i = n.flags,
                            r = n.flagVariants;
                        e(i, r)
                    }
                    return function() {
                        return t.removeFeatureFlagsHandler(e)
                    }
                }
            }, {
                key: "updateEarlyAccessFeatureEnrollment",
                value: function(e, n) {
                    var i, r, s = o({}, "$feature_enrollment/".concat(e), n);
                    this.instance.capture("$feature_enrollment_update", {
                        $feature_flag: e,
                        $feature_enrollment: n,
                        $set: s
                    }), this.setPersonPropertiesForFlags(s, !1);
                    var a = t(t({}, this.getFlagVariants()), {}, o({}, e, n));
                    null === (i = this.instance.persistence) || void 0 === i || i.register((o(r = {}, Te, Object.keys(qe(a))), o(r, ye, a), r)), this._fireFeatureFlagsCallbacks()
                }
            }, {
                key: "getEarlyAccessFeatures",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this.instance.get_property(be);
                    if (i && !n) return e(i);
                    this.instance._send_request({
                        transport: "XHR",
                        url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
                        method: "GET",
                        callback: function(n) {
                            var i;
                            if (n.json) {
                                var r = n.json.earlyAccessFeatures;
                                return null === (i = t.instance.persistence) || void 0 === i || i.register(o({}, be, r)), e(r)
                            }
                        }
                    })
                }
            }, {
                key: "_prepareFeatureFlagsForCallbacks",
                value: function() {
                    var e = this.getFlags(),
                        t = this.getFlagVariants();
                    return {
                        flags: e.filter((function(e) {
                            return t[e]
                        })),
                        flagVariants: Object.keys(t).filter((function(e) {
                            return t[e]
                        })).reduce((function(e, n) {
                            return e[n] = t[n], e
                        }), {})
                    }
                }
            }, {
                key: "_fireFeatureFlagsCallbacks",
                value: function(e) {
                    var t = this._prepareFeatureFlagsForCallbacks(),
                        n = t.flags,
                        i = t.flagVariants;
                    this.featureFlagEventHandlers.forEach((function(t) {
                        return t(n, i, {
                            errorsLoading: e
                        })
                    }))
                }
            }, {
                key: "setPersonPropertiesForFlags",
                value: function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this.instance.get_property(ke) || {};
                    this.instance.register(o({}, ke, t(t({}, i), e))), n && this.instance.reloadFeatureFlags()
                }
            }, {
                key: "resetPersonPropertiesForFlags",
                value: function() {
                    this.instance.unregister(ke)
                }
            }, {
                key: "setGroupPropertiesForFlags",
                value: function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = this.instance.get_property(we) || {};
                    0 !== Object.keys(i).length && Object.keys(i).forEach((function(n) {
                        i[n] = t(t({}, i[n]), e[n]), delete e[n]
                    })), this.instance.register(o({}, we, t(t({}, i), e))), n && this.instance.reloadFeatureFlags()
                }
            }, {
                key: "resetGroupPropertiesForFlags",
                value: function(e) {
                    if (e) {
                        var n = this.instance.get_property(we) || {};
                        this.instance.register(o({}, we, t(t({}, n), {}, o({}, e, {}))))
                    } else this.instance.unregister(we)
                }
            }]), e
        }();
    Math.trunc || (Math.trunc = function(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }), Number.isInteger || (Number.isInteger = function(e) {
        return R(e) && isFinite(e) && Math.floor(e) === e
    });
    var Le = "0123456789abcdef",
        Be = function() {
            function e(t) {
                if (i(this, e), this.bytes = t, 16 !== t.length) throw new TypeError("not 128-bit length")
            }
            return s(e, [{
                key: "toString",
                value: function() {
                    for (var e = "", t = 0; t < this.bytes.length; t++) e = e + Le.charAt(this.bytes[t] >>> 4) + Le.charAt(15 & this.bytes[t]), 3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
                    if (36 !== e.length) throw new Error("Invalid UUIDv7 was generated");
                    return e
                }
            }, {
                key: "clone",
                value: function() {
                    return new e(this.bytes.slice(0))
                }
            }, {
                key: "equals",
                value: function(e) {
                    return 0 === this.compareTo(e)
                }
            }, {
                key: "compareTo",
                value: function(e) {
                    for (var t = 0; t < 16; t++) {
                        var n = this.bytes[t] - e.bytes[t];
                        if (0 !== n) return Math.sign(n)
                    }
                    return 0
                }
            }], [{
                key: "fromFieldsV7",
                value: function(t, n, i, r) {
                    if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(i) || !Number.isInteger(r) || t < 0 || n < 0 || i < 0 || r < 0 || t > 0xffffffffffff || n > 4095 || i > 1073741823 || r > 4294967295) throw new RangeError("invalid field value");
                    var s = new Uint8Array(16);
                    return s[0] = t / Math.pow(2, 40), s[1] = t / Math.pow(2, 32), s[2] = t / Math.pow(2, 24), s[3] = t / Math.pow(2, 16), s[4] = t / Math.pow(2, 8), s[5] = t, s[6] = 112 | n >>> 8, s[7] = n, s[8] = 128 | i >>> 24, s[9] = i >>> 16, s[10] = i >>> 8, s[11] = i, s[12] = r >>> 24, s[13] = r >>> 16, s[14] = r >>> 8, s[15] = r, new e(s)
                }
            }]), e
        }(),
        De = function() {
            function e() {
                i(this, e), o(this, "timestamp", 0), o(this, "counter", 0), o(this, "random", new je)
            }
            return s(e, [{
                key: "generate",
                value: function() {
                    var e = this.generateOrAbort();
                    if (w(e)) {
                        this.timestamp = 0;
                        var t = this.generateOrAbort();
                        if (w(t)) throw new Error("Could not generate UUID after timestamp reset");
                        return t
                    }
                    return e
                }
            }, {
                key: "generateOrAbort",
                value: function() {
                    var e = Date.now();
                    if (e > this.timestamp) this.timestamp = e, this.resetCounter();
                    else {
                        if (!(e + 1e4 > this.timestamp)) return;
                        this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
                    }
                    return Be.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32())
                }
            }, {
                key: "resetCounter",
                value: function() {
                    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                }
            }]), e
        }(),
        Ne = function(e) {
            if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw new Error("no cryptographically strong RNG available");
            for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
            return e
        };
    I && !w(I.crypto) && crypto.getRandomValues && (Ne = function(e) {
        return crypto.getRandomValues(e)
    });
    var He, je = function() {
            function e() {
                i(this, e), o(this, "buffer", new Uint32Array(8)), o(this, "cursor", 1 / 0)
            }
            return s(e, [{
                key: "nextUint32",
                value: function() {
                    return this.cursor >= this.buffer.length && (Ne(this.buffer), this.cursor = 0), this.buffer[this.cursor++]
                }
            }]), e
        }(),
        Ue = function() {
            return We().toString()
        },
        We = function() {
            return (He || (He = new De)).generate()
        },
        ze = "Thu, 01 Jan 1970 00:00:00 GMT",
        Ge = "";
    var Ve = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;

    function Qe(e, t) {
        if (t) {
            var n = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q;
                if (Ge) return Ge;
                if (!t) return "";
                if (["localhost", "127.0.0.1"].includes(e)) return "";
                for (var n = e.split("."), i = Math.min(n.length, 8), r = "dmn_chk_" + Ue(), s = new RegExp("(^|;)\\s*" + r + "=1"); !Ge && i--;) {
                    var o = n.slice(i).join("."),
                        a = r + "=1;domain=." + o;
                    t.cookie = a, s.test(t.cookie) && (t.cookie = a + ";expires=" + ze, Ge = o)
                }
                return Ge
            }(e);
            if (!n) {
                var i = function(e) {
                    var t = e.match(Ve);
                    return t ? t[0] : ""
                }(e);
                i !== n && U.info("Warning: cookie subdomain discovery mismatch", i, n), n = i
            }
            return n ? "; domain=." + n : ""
        }
        return ""
    }
    var Je, Ye = {
            is_supported: function() {
                return !!q
            },
            error: function(e) {
                U.error("cookieStore error: " + e)
            },
            get: function(e) {
                if (q) {
                    try {
                        for (var t = e + "=", n = q.cookie.split(";").filter((function(e) {
                                return e.length
                            })), i = 0; i < n.length; i++) {
                            for (var r = n[i];
                                " " == r.charAt(0);) r = r.substring(1, r.length);
                            if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length))
                        }
                    } catch (e) {}
                    return null
                }
            },
            parse: function(e) {
                var t;
                try {
                    t = JSON.parse(Ye.get(e)) || {}
                } catch (e) {}
                return t
            },
            set: function(e, t, n, i, r) {
                if (q) try {
                    var s = "",
                        o = "",
                        a = Qe(q.location.hostname, i);
                    if (n) {
                        var u = new Date;
                        u.setTime(u.getTime() + 24 * n * 60 * 60 * 1e3), s = "; expires=" + u.toUTCString()
                    }
                    r && (o = "; secure");
                    var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; SameSite=Lax; path=/" + a + o;
                    return l.length > 3686.4 && U.warn("cookieStore warning: large cookie, len=" + l.length), q.cookie = l, l
                } catch (e) {
                    return
                }
            },
            remove: function(e, t) {
                try {
                    Ye.set(e, "", -1, t)
                } catch (e) {
                    return
                }
            }
        },
        Xe = null,
        Ke = {
            is_supported: function() {
                if (!F(Xe)) return Xe;
                var e = !0;
                if (w(I)) e = !1;
                else try {
                    var t = "__mplssupport__";
                    Ke.set(t, "xyz"), '"xyz"' !== Ke.get(t) && (e = !1), Ke.remove(t)
                } catch (t) {
                    e = !1
                }
                return e || U.error("localStorage unsupported; falling back to cookie store"), Xe = e, e
            },
            error: function(e) {
                U.error("localStorage error: " + e)
            },
            get: function(e) {
                try {
                    return null == I ? void 0 : I.localStorage.getItem(e)
                } catch (e) {
                    Ke.error(e)
                }
                return null
            },
            parse: function(e) {
                try {
                    return JSON.parse(Ke.get(e)) || {}
                } catch (e) {}
                return null
            },
            set: function(e, t) {
                try {
                    null == I || I.localStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    Ke.error(e)
                }
            },
            remove: function(e) {
                try {
                    null == I || I.localStorage.removeItem(e)
                } catch (e) {
                    Ke.error(e)
                }
            }
        },
        Ze = ["distinct_id", _e, me, Ce],
        et = t(t({}, Ke), {}, {
            parse: function(e) {
                try {
                    var t = {};
                    try {
                        t = Ye.parse(e) || {}
                    } catch (e) {}
                    var n = Q(t, JSON.parse(Ke.get(e) || "{}"));
                    return Ke.set(e, n), n
                } catch (e) {}
                return null
            },
            set: function(e, t, n, i, r) {
                try {
                    Ke.set(e, t);
                    var s = {};
                    Ze.forEach((function(e) {
                        t[e] && (s[e] = t[e])
                    })), Object.keys(s).length && Ye.set(e, s, n, i, r)
                } catch (e) {
                    Ke.error(e)
                }
            },
            remove: function(e, t) {
                try {
                    null == I || I.localStorage.removeItem(e), Ye.remove(e, t)
                } catch (e) {
                    Ke.error(e)
                }
            }
        }),
        tt = {},
        nt = {
            is_supported: function() {
                return !0
            },
            error: function(e) {
                U.error("memoryStorage error: " + e)
            },
            get: function(e) {
                return tt[e] || null
            },
            parse: function(e) {
                return tt[e] || null
            },
            set: function(e, t) {
                tt[e] = t
            },
            remove: function(e) {
                delete tt[e]
            }
        },
        it = null,
        rt = {
            is_supported: function() {
                if (!F(it)) return it;
                if (it = !0, w(I)) it = !1;
                else try {
                    var e = "__support__";
                    rt.set(e, "xyz"), '"xyz"' !== rt.get(e) && (it = !1), rt.remove(e)
                } catch (e) {
                    it = !1
                }
                return it
            },
            error: function(e) {
                U.error("sessionStorage error: ", e)
            },
            get: function(e) {
                try {
                    return null == I ? void 0 : I.sessionStorage.getItem(e)
                } catch (e) {
                    rt.error(e)
                }
                return null
            },
            parse: function(e) {
                try {
                    return JSON.parse(rt.get(e)) || null
                } catch (e) {}
                return null
            },
            set: function(e, t) {
                try {
                    null == I || I.sessionStorage.setItem(e, JSON.stringify(t))
                } catch (e) {
                    rt.error(e)
                }
            },
            remove: function(e) {
                try {
                    null == I || I.sessionStorage.removeItem(e)
                } catch (e) {
                    rt.error(e)
                }
            }
        },
        st = ["localhost", "127.0.0.1"],
        ot = function(e) {
            var t = null == q ? void 0 : q.createElement("a");
            return w(t) ? null : (t.href = e, t)
        },
        at = function(e, t) {
            return !! function(e) {
                try {
                    new RegExp(e)
                } catch (e) {
                    return !1
                }
                return !0
            }(t) && new RegExp(t).test(e)
        },
        ut = function(e) {
            var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                r = [];
            return V(e, (function(e, i) {
                w(e) || w(i) || "undefined" === i || (t = encodeURIComponent(function(e) {
                    return e instanceof File
                }(e) ? e.name : e.toString()), n = encodeURIComponent(i), r[r.length] = n + "=" + t)
            })), r.join(i)
        },
        lt = function(e, t) {
            for (var n, i = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), r = 0; r < i.length; r++) {
                var s = i[r].split("=");
                if (s[0] === t) {
                    n = s;
                    break
                }
            }
            if (!m(n) || n.length < 2) return "";
            var o = n[1];
            try {
                o = decodeURIComponent(o)
            } catch (e) {
                U.error("Skipping decoding for malformed query param: " + o)
            }
            return o.replace(/\+/g, " ")
        },
        ct = function(e, t) {
            var n = e.match(new RegExp(t + "=([^&]*)"));
            return n ? n[1] : null
        },
        dt = "Mobile",
        ht = "iOS",
        ft = "Android",
        pt = "Tablet",
        vt = ft + " " + pt,
        gt = "iPad",
        _t = "Apple",
        mt = _t + " Watch",
        yt = "Safari",
        bt = "BlackBerry",
        kt = "Samsung",
        wt = kt + "Browser",
        St = kt + " Internet",
        Ft = "Chrome",
        Et = Ft + " OS",
        Rt = Ft + " " + ht,
        xt = "Internet Explorer",
        Pt = xt + " " + dt,
        It = "Opera",
        Ct = It + " Mini",
        $t = "Edge",
        Tt = "Microsoft " + $t,
        Mt = "Firefox",
        Ot = Mt + " " + ht,
        qt = "Nintendo",
        At = "PlayStation",
        Lt = "Xbox",
        Bt = ft + " " + dt,
        Dt = dt + " " + yt,
        Nt = "Windows",
        Ht = Nt + " Phone",
        jt = "Nokia",
        Ut = "Ouya",
        Wt = "Generic",
        zt = Wt + " " + dt.toLowerCase(),
        Gt = Wt + " " + pt.toLowerCase(),
        Vt = "Konqueror",
        Qt = "(\\d+(\\.\\d+)?)",
        Jt = new RegExp("Version/" + Qt),
        Yt = new RegExp(Lt, "i"),
        Xt = new RegExp(At + " \\w+", "i"),
        Kt = new RegExp(qt + " \\w+", "i"),
        Zt = new RegExp(bt + "|PlayBook|BB10", "i"),
        en = {
            "NT3.51": "NT 3.11",
            "NT4.0": "NT 4.0",
            "5.0": "2000",
            5.1: "XP",
            5.2: "XP",
            "6.0": "Vista",
            6.1: "7",
            6.2: "8",
            6.3: "8.1",
            6.4: "10",
            "10.0": "10"
        };
    var tn = function(e, t) {
            return t && J(t, _t) || function(e) {
                return J(e, yt) && !J(e, Ft) && !J(e, ft)
            }(e)
        },
        nn = function(e, t) {
            return t = t || "", J(e, " OPR/") && J(e, "Mini") ? Ct : J(e, " OPR/") ? It : Zt.test(e) ? bt : J(e, "IE" + dt) || J(e, "WPDesktop") ? Pt : J(e, wt) ? St : J(e, $t) || J(e, "Edg/") ? Tt : J(e, "FBIOS") ? "Facebook " + dt : J(e, Ft) ? Ft : J(e, "CriOS") ? Rt : J(e, "UCWEB") || J(e, "UCBrowser") ? "UC Browser" : J(e, "FxiOS") ? Ot : J(e, ft) ? Bt : J(e.toLowerCase(), Vt.toLowerCase()) ? Vt : tn(e, t) ? J(e, dt) ? Dt : yt : J(e, Mt) ? Mt : J(e, "MSIE") || J(e, "Trident/") ? xt : J(e, "Gecko") ? Mt : ""
        },
        rn = (o(Je = {}, Pt, [new RegExp("rv:" + Qt)]), o(Je, Tt, [new RegExp($t + "?\\/" + Qt)]), o(Je, Ft, [new RegExp(Ft + "/" + Qt)]), o(Je, Rt, [new RegExp("CriOS\\/" + Qt)]), o(Je, "UC Browser", [new RegExp("(UCBrowser|UCWEB)\\/" + Qt)]), o(Je, yt, [Jt]), o(Je, Dt, [Jt]), o(Je, It, [new RegExp("(Opera|OPR)\\/" + Qt)]), o(Je, Mt, [new RegExp(Mt + "\\/" + Qt)]), o(Je, Ot, [new RegExp("FxiOS\\/" + Qt)]), o(Je, Vt, [new RegExp("Konqueror[:/]?" + Qt, "i")]), o(Je, bt, [new RegExp(bt + " " + Qt), Jt]), o(Je, Bt, [new RegExp("android\\s" + Qt)]), o(Je, St, [new RegExp(wt + "\\/" + Qt)]), o(Je, xt, [new RegExp("(rv:|MSIE )" + Qt)]), o(Je, "Mozilla", [new RegExp("rv:" + Qt)]), Je),
        sn = [
            [new RegExp(Lt + "; " + Lt + " (.*?)[);]", "i"), function(e) {
                return [Lt, e && e[1] || ""]
            }],
            [new RegExp(qt, "i"), [qt, ""]],
            [new RegExp(At, "i"), [At, ""]],
            [Zt, [bt, ""]],
            [new RegExp(Nt, "i"), function(e, t) {
                if (/Phone/.test(t) || /WPDesktop/.test(t)) return [Ht, ""];
                if (new RegExp(dt).test(t) && !/IEMobile\b/.test(t)) return [Nt + " " + dt, ""];
                var n = /Windows NT ([0-9.]+)/i.exec(t);
                if (n && n[1]) {
                    var i = n[1],
                        r = en[i] || "";
                    return /arm/i.test(t) && (r = "RT"), [Nt, r]
                }
                return [Nt, ""]
            }],
            [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, function(e) {
                if (e && e[3]) {
                    var t = [e[3], e[4], e[5] || "0"];
                    return [ht, t.join(".")]
                }
                return [ht, ""]
            }],
            [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, function(e) {
                var t = "";
                return e && e.length >= 3 && (t = w(e[2]) ? e[3] : e[2]), ["watchOS", t]
            }],
            [new RegExp("(" + ft + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + ft + ")", "i"), function(e) {
                if (e && e[2]) {
                    var t = [e[2], e[3], e[4] || "0"];
                    return [ft, t.join(".")]
                }
                return [ft, ""]
            }],
            [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, function(e) {
                var t = ["Mac OS X", ""];
                if (e && e[1]) {
                    var n = [e[1], e[2], e[3] || "0"];
                    t[1] = n.join(".")
                }
                return t
            }],
            [/Mac/i, ["Mac OS X", ""]],
            [/CrOS/, [Et, ""]],
            [/Linux|debian/i, ["Linux", ""]]
        ],
        on = function(e) {
            return Kt.test(e) ? qt : Xt.test(e) ? At : Yt.test(e) ? Lt : new RegExp(Ut, "i").test(e) ? Ut : new RegExp("(" + Ht + "|WPDesktop)", "i").test(e) ? Ht : /iPad/.test(e) ? gt : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? mt : Zt.test(e) ? bt : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : new RegExp(jt, "i").test(e) ? jt : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(dt).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? ft : vt : ft : new RegExp("(pda|" + dt + ")", "i").test(e) ? zt : new RegExp(pt, "i").test(e) && !new RegExp(pt + " pc", "i").test(e) ? Gt : ""
        },
        an = "https?://(.*)",
        un = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid"],
        ln = {
            campaignParams: function(e) {
                var t = un.concat(e || []),
                    n = {};
                return V(t, (function(e) {
                    var t = q ? lt(q.URL, e) : "";
                    t.length && (n[e] = t)
                })), n
            },
            searchEngine: function() {
                var e = null == q ? void 0 : q.referrer;
                return e ? 0 === e.search(an + "google.([^/?]*)") ? "google" : 0 === e.search(an + "bing.com") ? "bing" : 0 === e.search(an + "yahoo.com") ? "yahoo" : 0 === e.search(an + "duckduckgo.com") ? "duckduckgo" : null : null
            },
            searchInfo: function() {
                var e = ln.searchEngine(),
                    t = "yahoo" != e ? "q" : "p",
                    n = {};
                if (!F(e)) {
                    n.$search_engine = e;
                    var i = q ? lt(q.referrer, t) : "";
                    i.length && (n.ph_keyword = i)
                }
                return n
            },
            browser: nn,
            browserVersion: function(e, t) {
                var n = nn(e, t),
                    i = rn[n];
                if (w(i)) return null;
                for (var r = 0; r < i.length; r++) {
                    var s = i[r],
                        o = e.match(s);
                    if (o) return parseFloat(o[o.length - 2])
                }
                return null
            },
            browserLanguage: function() {
                return navigator.language || navigator.userLanguage
            },
            os: function(e) {
                for (var t = 0; t < sn.length; t++) {
                    var n = u(sn[t], 2),
                        i = n[0],
                        r = n[1],
                        s = i.exec(e),
                        o = s && (y(r) ? r(s, e) : r);
                    if (o) return o
                }
                return ["", ""]
            },
            device: on,
            deviceType: function(e) {
                var t = on(e);
                return t === gt || t === vt || "Kobo" === t || "Kindle Fire" === t || t === Gt ? pt : t === qt || t === Lt || t === At || t === Ut ? "Console" : t === mt ? "Wearable" : t ? dt : "Desktop"
            },
            referrer: function() {
                return (null == q ? void 0 : q.referrer) || "$direct"
            },
            referringDomain: function() {
                var e;
                return null != q && q.referrer && (null === (e = ot(q.referrer)) || void 0 === e ? void 0 : e.host) || "$direct"
            },
            referrerInfo: function() {
                return {
                    $referrer: this.referrer(),
                    $referring_domain: this.referringDomain()
                }
            },
            properties: function() {
                if (!N) return {};
                var e = u(ln.os(N), 2),
                    t = e[0],
                    n = e[1];
                return Q(ee({
                    $os: t,
                    $os_version: n,
                    $browser: ln.browser(N, navigator.vendor),
                    $device: ln.device(N),
                    $device_type: ln.deviceType(N)
                }), {
                    $current_url: null == A ? void 0 : A.href,
                    $host: null == A ? void 0 : A.host,
                    $pathname: null == A ? void 0 : A.pathname,
                    $raw_user_agent: N.length > 1e3 ? N.substring(0, 997) + "..." : N,
                    $browser_version: ln.browserVersion(N, navigator.vendor),
                    $browser_language: ln.browserLanguage(),
                    $screen_height: null == I ? void 0 : I.screen.height,
                    $screen_width: null == I ? void 0 : I.screen.width,
                    $viewport_height: null == I ? void 0 : I.innerHeight,
                    $viewport_width: null == I ? void 0 : I.innerWidth,
                    $lib: "web",
                    $lib_version: f.LIB_VERSION,
                    $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                    $time: X() / 1e3
                })
            },
            people_properties: function() {
                if (!N) return {};
                var e = u(ln.os(N), 2),
                    t = e[0],
                    n = e[1];
                return Q(ee({
                    $os: t,
                    $os_version: n,
                    $browser: ln.browser(N, navigator.vendor)
                }), {
                    $browser_version: ln.browserVersion(N, navigator.vendor)
                })
            }
        },
        cn = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
        dn = function() {
            function e(t) {
                i(this, e), this.config = t, this.props = {}, this.campaign_params_saved = !1, this.name = function(e) {
                    var t = "";
                    return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog"
                }(t), this.storage = this.buildStorage(t), this.load(), this.update_config(t, t), this.save()
            }
            return s(e, [{
                key: "buildStorage",
                value: function(e) {
                    -1 === cn.indexOf(e.persistence.toLowerCase()) && (U.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
                    var t = e.persistence.toLowerCase();
                    return "localstorage" === t && Ke.is_supported() ? Ke : "localstorage+cookie" === t && et.is_supported() ? et : "sessionstorage" === t && rt.is_supported() ? rt : "memory" === t ? nt : "cookie" === t ? Ye : et.is_supported() ? et : Ye
                }
            }, {
                key: "properties",
                value: function() {
                    var e = {};
                    return V(this.props, (function(t, n) {
                        if (n === ye && b(t))
                            for (var i = Object.keys(t), r = 0; r < i.length; r++) e["$feature/".concat(i[r])] = t[i[r]];
                        else o = n, a = !1, (F(s = $e) ? a : M && s.indexOf === M ? -1 != s.indexOf(o) : (V(s, (function(e) {
                            if (a || (a = e === o)) return W
                        })), a)) || (e[n] = t);
                        var s, o, a
                    })), e
                }
            }, {
                key: "load",
                value: function() {
                    if (!this.disabled) {
                        var e = this.storage.parse(this.name);
                        e && (this.props = Q({}, e))
                    }
                }
            }, {
                key: "save",
                value: function() {
                    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure)
                }
            }, {
                key: "remove",
                value: function() {
                    this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                }
            }, {
                key: "clear",
                value: function() {
                    this.remove(), this.props = {}
                }
            }, {
                key: "register_once",
                value: function(e, t, n) {
                    var i = this;
                    if (b(e)) {
                        w(t) && (t = "None"), this.expire_days = w(n) ? this.default_expiry : n;
                        var r = !1;
                        if (V(e, (function(e, n) {
                                i.props.hasOwnProperty(n) && i.props[n] !== t || (i.props[n] = e, r = !0)
                            })), r) return this.save(), !0
                    }
                    return !1
                }
            }, {
                key: "register",
                value: function(e, t) {
                    var n = this;
                    if (b(e)) {
                        this.expire_days = w(t) ? this.default_expiry : t;
                        var i = !1;
                        if (V(e, (function(t, r) {
                                e.hasOwnProperty(r) && n.props[r] !== t && (n.props[r] = t, i = !0)
                            })), i) return this.save(), !0
                    }
                    return !1
                }
            }, {
                key: "unregister",
                value: function(e) {
                    e in this.props && (delete this.props[e], this.save())
                }
            }, {
                key: "update_campaign_params",
                value: function() {
                    this.campaign_params_saved || (this.register(ln.campaignParams(this.config.custom_campaign_params)), this.campaign_params_saved = !0)
                }
            }, {
                key: "set_initial_campaign_params",
                value: function() {
                    this.register_once(o({}, Pe, ln.campaignParams(this.config.custom_campaign_params)), void 0)
                }
            }, {
                key: "update_search_keyword",
                value: function() {
                    this.register(ln.searchInfo())
                }
            }, {
                key: "update_referrer_info",
                value: function() {
                    this.register(ln.referrerInfo())
                }
            }, {
                key: "set_initial_referrer_info",
                value: function() {
                    this.register_once(o({}, Ie, ln.referrerInfo()), void 0)
                }
            }, {
                key: "get_referrer_info",
                value: function() {
                    return ee({
                        $referrer: this.props.$referrer,
                        $referring_domain: this.props.$referring_domain
                    })
                }
            }, {
                key: "get_initial_props",
                value: function() {
                    var e = this,
                        t = {};
                    return V([Ie, Pe], (function(n) {
                        var i = e.props[n];
                        i && V(i, (function(e, n) {
                            var i;
                            t["$initial_" + (i = n, i.replace(/^\$/, ""))] = e
                        }))
                    })), t
                }
            }, {
                key: "safe_merge",
                value: function(e) {
                    return V(this.props, (function(t, n) {
                        n in e || (e[n] = t)
                    })), e
                }
            }, {
                key: "update_config",
                value: function(e, t) {
                    if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence) {
                        var n = this.buildStorage(e),
                            i = this.props;
                        this.clear(), this.storage = n, this.props = i, this.save()
                    }
                }
            }, {
                key: "set_disabled",
                value: function(e) {
                    this.disabled = e, this.disabled ? this.remove() : this.save()
                }
            }, {
                key: "set_cross_subdomain",
                value: function(e) {
                    e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
                }
            }, {
                key: "get_cross_subdomain",
                value: function() {
                    return !!this.cross_subdomain
                }
            }, {
                key: "set_secure",
                value: function(e) {
                    e !== this.secure && (this.secure = e, this.remove(), this.save())
                }
            }, {
                key: "set_event_timer",
                value: function(e, t) {
                    var n = this.props[ue] || {};
                    n[e] = t, this.props[ue] = n, this.save()
                }
            }, {
                key: "remove_event_timer",
                value: function(e) {
                    var t = (this.props[ue] || {})[e];
                    return w(t) || (delete this.props[ue][e], this.save()), t
                }
            }, {
                key: "get_property",
                value: function(e) {
                    return this.props[e]
                }
            }, {
                key: "set_property",
                value: function(e, t) {
                    this.props[e] = t, this.save()
                }
            }]), e
        }(),
        hn = 2,
        fn = 4;
    var pn = s((function e(t) {
            var n, r, s = this,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            i(this, e), o(this, "bucketSize", 100), o(this, "refillRate", 10), o(this, "mutationBuckets", {}), o(this, "loggedTracker", {}), o(this, "refillBuckets", (function() {
                Object.keys(s.mutationBuckets).forEach((function(e) {
                    s.mutationBuckets[e] = s.mutationBuckets[e] + s.refillRate, s.mutationBuckets[e] >= s.bucketSize && delete s.mutationBuckets[e]
                }))
            })), o(this, "getNodeOrRelevantParent", (function(e) {
                var t = s.rrweb.mirror.getNode(e);
                if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                    var n = t.closest("svg");
                    if (n) return [s.rrweb.mirror.getId(n), n]
                }
                return [e, t]
            })), o(this, "numberOfChanges", (function(e) {
                var t, n, i, r, s, o, a, u;
                return (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (i = null === (r = e.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) + (null !== (s = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) + (null !== (a = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0)
            })), o(this, "throttleMutations", (function(e) {
                if (3 !== e.type || 0 !== e.data.source) return e;
                var t = e.data,
                    n = s.numberOfChanges(t);
                t.attributes && (t.attributes = t.attributes.filter((function(e) {
                    var t, n, i, r = u(s.getNodeOrRelevantParent(e.id), 2),
                        o = r[0],
                        a = r[1];
                    if (0 === s.mutationBuckets[o]) return !1;
                    (s.mutationBuckets[o] = null !== (t = s.mutationBuckets[o]) && void 0 !== t ? t : s.bucketSize, s.mutationBuckets[o] = Math.max(s.mutationBuckets[o] - 1, 0), 0 === s.mutationBuckets[o]) && (s.loggedTracker[o] || (s.loggedTracker[o] = !0, null === (n = (i = s.options).onBlockedNode) || void 0 === n || n.call(i, o, a)));
                    return e
                })));
                var i = s.numberOfChanges(t);
                return 0 !== i || n === i ? e : void 0
            })), this.rrweb = t, this.options = a, this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate, this.bucketSize = null !== (r = this.options.bucketSize) && void 0 !== r ? r : this.bucketSize, setInterval((function() {
                s.refillBuckets()
            }), 1e3)
        })),
        vn = function(e) {
            return e[e.DomContentLoaded = 0] = "DomContentLoaded", e[e.Load = 1] = "Load", e[e.FullSnapshot = 2] = "FullSnapshot", e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot", e[e.Meta = 4] = "Meta", e[e.Custom = 5] = "Custom", e[e.Plugin = 6] = "Plugin", e
        }(vn || {});

    function gn(e) {
        return e ? z(e).split(/\s+/) : []
    }

    function _n(e) {
        var t = "";
        switch (n(e.className)) {
            case "string":
                t = e.className;
                break;
            case "object":
                t = ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
                break;
            default:
                t = ""
        }
        return gn(t)
    }

    function mn(e) {
        return E(e) ? null : z(e).split(/(\s+)/).filter((function(e) {
            return qn(e)
        })).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function yn(e) {
        var t = "";
        return xn(e) && !Pn(e) && e.childNodes && e.childNodes.length && V(e.childNodes, (function(e) {
            var n;
            wn(e) && e.textContent && (t += null !== (n = mn(e.textContent)) && void 0 !== n ? n : "")
        })), z(t)
    }

    function bn(e) {
        return !!e && 1 === e.nodeType
    }

    function kn(e, t) {
        return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
    }

    function wn(e) {
        return !!e && 3 === e.nodeType
    }

    function Sn(e) {
        return !!e && 11 === e.nodeType
    }
    var Fn = ["a", "button", "form", "input", "select", "textarea", "label"];

    function En(e) {
        var t = e.parentNode;
        return !(!t || !bn(t)) && t
    }

    function Rn(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0,
            s = arguments.length > 4 ? arguments[4] : void 0;
        if (!I || !e || kn(e, "html") || !bn(e)) return !1;
        if (null != i && i.url_allowlist) {
            var o = I.location.href,
                a = i.url_allowlist;
            if (a && !a.some((function(e) {
                    return o.match(e)
                }))) return !1
        }
        if (null != i && i.dom_event_allowlist) {
            var u = i.dom_event_allowlist;
            if (u && !u.some((function(e) {
                    return t.type === e
                }))) return !1
        }
        for (var l = !1, c = [e], d = !0, f = e; f.parentNode && !kn(f, "body");)
            if (Sn(f.parentNode)) c.push(f.parentNode.host), f = f.parentNode.host;
            else {
                if (!(d = En(f))) break;
                if (r || Fn.indexOf(d.tagName.toLowerCase()) > -1) l = !0;
                else {
                    var p = I.getComputedStyle(d);
                    p && "pointer" === p.getPropertyValue("cursor") && (l = !0)
                }
                c.push(d), f = d
            }
        if (! function(e, t) {
                var i = null == t ? void 0 : t.element_allowlist;
                if (w(i)) return !0;
                var r, s = h(e);
                try {
                    var o = function() {
                        var e = r.value;
                        if (i.some((function(t) {
                                return e.tagName.toLowerCase() === t
                            }))) return {
                            v: !0
                        }
                    };
                    for (s.s(); !(r = s.n()).done;) {
                        var a = o();
                        if ("object" === n(a)) return a.v
                    }
                } catch (e) {
                    s.e(e)
                } finally {
                    s.f()
                }
                return !1
            }(c, i)) return !1;
        if (! function(e, t) {
                var i = null == t ? void 0 : t.css_selector_allowlist;
                if (w(i)) return !0;
                var r, s = h(e);
                try {
                    var o = function() {
                        var e = r.value;
                        if (i.some((function(t) {
                                return e.matches(t)
                            }))) return {
                            v: !0
                        }
                    };
                    for (s.s(); !(r = s.n()).done;) {
                        var a = o();
                        if ("object" === n(a)) return a.v
                    }
                } catch (e) {
                    s.e(e)
                } finally {
                    s.f()
                }
                return !1
            }(c, i)) return !1;
        var v = I.getComputedStyle(e);
        if (v && "pointer" === v.getPropertyValue("cursor") && "click" === t.type) return !0;
        var g = e.tagName.toLowerCase();
        switch (g) {
            case "html":
                return !1;
            case "form":
                return (s || ["submit"]).indexOf(t.type) >= 0;
            case "input":
            case "select":
            case "textarea":
                return (s || ["change", "click"]).indexOf(t.type) >= 0;
            default:
                return l ? (s || ["click"]).indexOf(t.type) >= 0 : (s || ["click"]).indexOf(t.type) >= 0 && (Fn.indexOf(g) > -1 || "true" === e.getAttribute("contenteditable"))
        }
    }

    function xn(e) {
        for (var t = e; t.parentNode && !kn(t, "body"); t = t.parentNode) {
            var n = _n(t);
            if (J(n, "ph-sensitive") || J(n, "ph-no-capture")) return !1
        }
        if (J(_n(e), "ph-include")) return !0;
        var i = e.type || "";
        if (S(i)) switch (i.toLowerCase()) {
            case "hidden":
            case "password":
                return !1
        }
        var r = e.name || e.id || "";
        if (S(r)) {
            if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, ""))) return !1
        }
        return !0
    }

    function Pn(e) {
        return !!(kn(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || kn(e, "select") || kn(e, "textarea") || "true" === e.getAttribute("contenteditable"))
    }
    var In = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
        Cn = new RegExp("^(?:".concat(In, ")$")),
        $n = new RegExp(In),
        Tn = "\\d{3}-?\\d{2}-?\\d{4}",
        Mn = new RegExp("^(".concat(Tn, ")$")),
        On = new RegExp("(".concat(Tn, ")"));

    function qn(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (E(e)) return !1;
        if (S(e)) {
            if (e = z(e), (t ? Cn : $n).test((e || "").replace(/[- ]/g, ""))) return !1;
            if ((t ? Mn : On).test(e)) return !1
        }
        return !0
    }

    function An(e) {
        var t = yn(e);
        return qn(t = "".concat(t, " ").concat(Ln(e)).trim()) ? t : ""
    }

    function Ln(e) {
        var t = "";
        return e && e.childNodes && e.childNodes.length && V(e.childNodes, (function(e) {
            var n;
            if (e && "span" === (null === (n = e.tagName) || void 0 === n ? void 0 : n.toLowerCase())) try {
                var i = yn(e);
                t = "".concat(t, " ").concat(i).trim(), e.childNodes && e.childNodes.length && (t = "".concat(t, " ").concat(Ln(e)).trim())
            } catch (e) {
                U.error(e)
            }
        })), t
    }

    function Bn(e) {
        return function(e) {
            var n = e.map((function(e) {
                var n, i, r = "";
                if (e.tag_name && (r += e.tag_name), e.attr_class) {
                    e.attr_class.sort();
                    var s, o = h(e.attr_class);
                    try {
                        for (o.s(); !(s = o.n()).done;) {
                            var a = s.value;
                            r += ".".concat(a.replace(/"/g, ""))
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
                var l = t(t(t(t({}, e.text ? {
                        text: e.text
                    } : {}), {}, {
                        "nth-child": null !== (n = e.nth_child) && void 0 !== n ? n : 0,
                        "nth-of-type": null !== (i = e.nth_of_type) && void 0 !== i ? i : 0
                    }, e.href ? {
                        href: e.href
                    } : {}), e.attr_id ? {
                        attr_id: e.attr_id
                    } : {}), e.attributes),
                    c = {};
                return Y(l).sort((function(e, t) {
                    var n = u(e, 1)[0],
                        i = u(t, 1)[0];
                    return n.localeCompare(i)
                })).forEach((function(e) {
                    var t = u(e, 2),
                        n = t[0],
                        i = t[1];
                    return c[Dn(n.toString())] = Dn(i.toString())
                })), r += ":", r += Y(l).map((function(e) {
                    var t = u(e, 2),
                        n = t[0],
                        i = t[1];
                    return "".concat(n, '="').concat(i, '"')
                })).join("")
            }));
            return n.join(";")
        }(function(e) {
            return e.map((function(e) {
                var t, n, i = {
                    text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
                    tag_name: e.tag_name,
                    href: null === (n = e.attr__href) || void 0 === n ? void 0 : n.slice(0, 2048),
                    attr_class: Nn(e),
                    attr_id: e.attr__id,
                    nth_child: e.nth_child,
                    nth_of_type: e.nth_of_type,
                    attributes: {}
                };
                return Y(e).filter((function(e) {
                    return 0 === u(e, 1)[0].indexOf("attr__")
                })).forEach((function(e) {
                    var t = u(e, 2),
                        n = t[0],
                        r = t[1];
                    return i.attributes[n] = r
                })), i
            }))
        }(e))
    }

    function Dn(e) {
        return e.replace(/"|\\"/g, '\\"')
    }

    function Nn(e) {
        var t = e.attr__class;
        return t ? m(t) ? t : gn(t) : void 0
    }
    var Hn = "[SessionRecording]",
        jn = {
            initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
            maskRequestFn: function(e) {
                return e
            },
            recordHeaders: !1,
            recordBody: !1,
            recordInitialRequests: !1,
            recordPerformance: !1,
            performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
            payloadSizeLimitBytes: 1e6
        },
        Un = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        Wn = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        zn = ["/s/", "/e/", "/i/"];

    function Gn(e, t, n, i) {
        if (E(e)) return e;
        var r = (null == t ? void 0 : t["content-length"]) || function(e) {
            return new Blob([e]).size
        }(e);
        return S(r) && (r = parseInt(r)), r > n ? Hn + " ".concat(i, " body too large to record (").concat(r, " bytes)") : e
    }

    function Vn(e, t) {
        if (E(e)) return e;
        var n = e;
        return qn(n, !1) || (n = Hn + " " + t + " body redacted"), V(Wn, (function(e) {
            var i, r;
            null !== (i = n) && void 0 !== i && i.length && -1 !== (null === (r = n) || void 0 === r ? void 0 : r.indexOf(e)) && (n = Hn + " " + t + " body redacted as might contain: " + e)
        })), n
    }
    var Qn = function(e, n) {
            var i, r, s, o = {
                    payloadSizeLimitBytes: jn.payloadSizeLimitBytes,
                    performanceEntryTypeToObserve: l(jn.performanceEntryTypeToObserve)
                },
                a = !1 !== e.session_recording.recordHeaders && n.recordHeaders,
                u = !1 !== e.session_recording.recordBody && n.recordBody,
                c = !1 !== e.capture_performance && n.recordPerformance,
                d = (i = o, s = Math.min(1e6, null !== (r = i.payloadSizeLimitBytes) && void 0 !== r ? r : 1e6), function(e) {
                    return null != e && e.requestBody && (e.requestBody = Gn(e.requestBody, e.requestHeaders, s, "Request")), null != e && e.responseBody && (e.responseBody = Gn(e.responseBody, e.responseHeaders, s, "Response")), e
                }),
                h = function(e) {
                    return d(function(e) {
                        var t = ot(e.name);
                        if (!(t && t.pathname && zn.some((function(e) {
                                return 0 === t.pathname.indexOf(e)
                            })))) return e
                    }((t = e, V(Object.keys(null !== (n = t.requestHeaders) && void 0 !== n ? n : {}), (function(e) {
                        var n;
                        Un.includes(e.toLowerCase()) && (null === (n = t.requestHeaders) || void 0 === n || delete n[e])
                    })), t)));
                    var t, n
                },
                f = y(e.session_recording.maskNetworkRequestFn);
            return f && y(e.session_recording.maskCapturedNetworkRequestFn) && U.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), f && (e.session_recording.maskCapturedNetworkRequestFn = function(n) {
                var i = e.session_recording.maskNetworkRequestFn({
                    url: n.name
                });
                return t(t({}, n), {}, {
                    name: null == i ? void 0 : i.url
                })
            }), o.maskRequestFn = y(e.session_recording.maskCapturedNetworkRequestFn) ? function(t) {
                var n, i, r, s = h(t);
                return s && null !== (n = null === (i = (r = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === i ? void 0 : i.call(r, s)) && void 0 !== n ? n : void 0
            } : function(e) {
                return function(e) {
                    if (!w(e)) return e.requestBody = Vn(e.requestBody, "Request"), e.responseBody = Vn(e.responseBody, "Response"), e
                }(h(e))
            }, t(t(t({}, jn), o), {}, {
                recordHeaders: a,
                recordBody: u,
                recordPerformance: c,
                recordInitialRequests: c
            })
        },
        Jn = "__ph_opt_in_out_";

    function Yn(e, t) {
        ri(!0, e, t)
    }

    function Xn(e, t) {
        ri(!1, e, t)
    }

    function Kn(e, t) {
        return "1" === ii(e, t)
    }

    function Zn(e, t) {
        return !! function(e) {
            if (e && e.respectDnt) {
                var t = e && e.window || I,
                    n = null == t ? void 0 : t.navigator,
                    i = !1;
                return V([null == n ? void 0 : n.doNotTrack, n.msDoNotTrack, t.doNotTrack], (function(e) {
                    J([!0, 1, "1", "yes"], e) && (i = !0)
                })), i
            }
            return !1
        }(t) || "0" === ii(e, t)
    }

    function ei(e, t) {
        ti(t = t || {}).remove(ni(e, t), !!t.crossSubdomainCookie)
    }

    function ti(e) {
        return "localStorage" === (e = e || {}).persistenceType ? Ke : "localStorage+cookie" === e.persistenceType ? et : Ye
    }

    function ni(e, t) {
        return ((t = t || {}).persistencePrefix || Jn) + e
    }

    function ii(e, t) {
        return ti(t).get(ni(e, t))
    }

    function ri(e, t, n) {
        S(t) && t.length ? (ti(n = n || {}).set(ni(t, n), e ? 1 : 0, R(n.cookieExpiration) ? n.cookieExpiration : null, n.crossSubdomainCookie, n.secureCookie), n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, {
            send_instantly: !0
        })) : U.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token")
    }

    function si(e) {
        var t = !1;
        try {
            var n = e.config.token,
                i = e.config.respect_dnt,
                r = e.config.opt_out_capturing_persistence_type,
                s = e.config.opt_out_capturing_cookie_prefix || void 0,
                o = e.config.window;
            n && (t = Zn(n, {
                respectDnt: i,
                persistenceType: r,
                persistencePrefix: s,
                window: o
            }))
        } catch (e) {
            U.error("Unexpected error when checking capturing opt-out status: " + e)
        }
        return t
    }
    var oi, ai = 3e5,
        ui = ai;
    ! function(e) {
        e[e.Mutation = 0] = "Mutation", e[e.MouseMove = 1] = "MouseMove", e[e.MouseInteraction = 2] = "MouseInteraction", e[e.Scroll = 3] = "Scroll", e[e.ViewportResize = 4] = "ViewportResize", e[e.Input = 5] = "Input", e[e.TouchMove = 6] = "TouchMove", e[e.MediaInteraction = 7] = "MediaInteraction", e[e.StyleSheetRule = 8] = "StyleSheetRule", e[e.CanvasMutation = 9] = "CanvasMutation", e[e.Font = 10] = "Font", e[e.Log = 11] = "Log", e[e.Drag = 12] = "Drag", e[e.StyleDeclaration = 13] = "StyleDeclaration", e[e.Selection = 14] = "Selection", e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet"
    }(oi || (oi = {}));
    var li = [oi.MouseMove, oi.MouseInteraction, oi.Scroll, oi.ViewportResize, oi.Input, oi.TouchMove, oi.MediaInteraction, oi.Drag],
        ci = function(e) {
            return {
                rrwebMethod: e,
                enqueuedAt: Date.now(),
                attempt: 1
            }
        },
        di = "[SessionRecording]",
        hi = function() {
            function e(t) {
                var n = this;
                if (i(this, e), o(this, "queuedRRWebEvents", []), o(this, "isIdle", !1), o(this, "_linkedFlagSeen", !1), o(this, "_lastActivityTimestamp", Date.now()), o(this, "windowId", null), o(this, "sessionId", null), o(this, "_linkedFlag", null), o(this, "_forceAllowLocalhostNetworkCapture", !1), o(this, "_samplingSessionListener", null), this.instance = t, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, null == I || I.addEventListener("beforeunload", (function() {
                        n._flushBuffer()
                    })), null == I || I.addEventListener("offline", (function() {
                        n._tryAddCustomEvent("browser offline", {})
                    })), null == I || I.addEventListener("online", (function() {
                        n._tryAddCustomEvent("browser online", {})
                    })), null == I || I.addEventListener("visibilitychange", (function() {
                        if (null != q && q.visibilityState) {
                            var e = "window " + q.visibilityState;
                            n._tryAddCustomEvent(e, {})
                        }
                    })), !this.instance.sessionManager) throw U.error(di + " started without valid sessionManager"), new Error(di + " started without valid sessionManager. This is a bug.");
                this.buffer = this.clearBuffer(), this._setupSampling()
            }
            return s(e, [{
                key: "rrwebRecord",
                get: function() {
                    var e;
                    return null == H || null === (e = H.rrweb) || void 0 === e ? void 0 : e.record
                }
            }, {
                key: "started",
                get: function() {
                    return this._captureStarted
                }
            }, {
                key: "sessionManager",
                get: function() {
                    if (!this.instance.sessionManager) throw U.error(di + " started without valid sessionManager"), new Error(di + " started without valid sessionManager. This is a bug.");
                    return this.instance.sessionManager
                }
            }, {
                key: "isSampled",
                get: function() {
                    var e = this.instance.get_property(me);
                    return x(e) ? e : null
                }
            }, {
                key: "sessionDuration",
                get: function() {
                    var e, t, n = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1],
                        i = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
                    return n ? n.timestamp - i : null
                }
            }, {
                key: "isRecordingEnabled",
                get: function() {
                    var e = !!this.instance.get_property(de),
                        t = !this.instance.config.disable_session_recording;
                    return I && e && t
                }
            }, {
                key: "isConsoleLogCaptureEnabled",
                get: function() {
                    var e = !!this.instance.get_property(he),
                        t = this.instance.config.enable_recording_console_log;
                    return null != t ? t : e
                }
            }, {
                key: "canvasRecording",
                get: function() {
                    var e = this.instance.get_property(pe);
                    return e && e.fps && e.quality ? {
                        enabled: e.enabled,
                        fps: e.fps,
                        quality: e.quality
                    } : void 0
                }
            }, {
                key: "networkPayloadCapture",
                get: function() {
                    var e, t, n = this.instance.get_property(fe),
                        i = {
                            recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                            recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
                        },
                        r = (null == i ? void 0 : i.recordHeaders) || (null == n ? void 0 : n.recordHeaders),
                        s = (null == i ? void 0 : i.recordBody) || (null == n ? void 0 : n.recordBody),
                        o = this.instance.config.capture_performance || (null == n ? void 0 : n.capturePerformance);
                    return r || s || o ? {
                        recordHeaders: r,
                        recordBody: s,
                        recordPerformance: o
                    } : void 0
                }
            }, {
                key: "sampleRate",
                get: function() {
                    var e = this.instance.get_property(ve);
                    return R(e) ? e : null
                }
            }, {
                key: "minimumDuration",
                get: function() {
                    var e = this.instance.get_property(ge);
                    return R(e) ? e : null
                }
            }, {
                key: "status",
                get: function() {
                    return this.receivedDecide ? this.isRecordingEnabled ? E(this._linkedFlag) || this._linkedFlagSeen ? x(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering"
                }
            }, {
                key: "startIfEnabledOrStop",
                value: function() {
                    this.isRecordingEnabled ? (this._startCapture(), U.info(di + " started")) : (this.stopRecording(), this.clearBuffer())
                }
            }, {
                key: "stopRecording",
                value: function() {
                    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = !1, U.info(di + " stopped"))
                }
            }, {
                key: "makeSamplingDecision",
                value: function(e) {
                    var t, n = this.sessionId !== e,
                        i = this.sampleRate;
                    if (R(i)) {
                        var r, s = this.isSampled,
                            a = n || !x(s);
                        if (a) r = Math.random() < i;
                        else r = s;
                        !r && a && U.warn(di + " Sample rate (".concat(i, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", {
                            sampleRate: i
                        }), null === (t = this.instance.persistence) || void 0 === t || t.register(o({}, me, r))
                    } else {
                        var u;
                        null === (u = this.instance.persistence) || void 0 === u || u.register(o({}, me, null))
                    }
                }
            }, {
                key: "afterDecideResponse",
                value: function(e) {
                    var t, n, i, r = this;
                    (this._persistDecideResponse(e), this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, null !== (n = e.sessionRecording) && void 0 !== n && n.endpoint) && (this._endpoint = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.endpoint);
                    if (this._setupSampling(), !E(this._linkedFlag)) {
                        var s = S(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
                            o = S(this._linkedFlag) ? null : this._linkedFlag.variant;
                        this.instance.onFeatureFlags((function(e, t) {
                            var n = b(t) && s in t,
                                i = o ? t[s] === o : n;
                            if (i) {
                                var a = {
                                        linkedFlag: s,
                                        linkedVariant: o
                                    },
                                    u = "linked flag matched";
                                U.info(di + " " + u, a), r._tryAddCustomEvent(u, a)
                            }
                            r._linkedFlagSeen = i
                        }))
                    }
                    this.receivedDecide = !0, this.startIfEnabledOrStop()
                }
            }, {
                key: "_setupSampling",
                value: function() {
                    var e = this;
                    R(this.sampleRate) && F(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId((function(t) {
                        e.makeSamplingDecision(t)
                    })))
                }
            }, {
                key: "_persistDecideResponse",
                value: function(e) {
                    if (this.instance.persistence) {
                        var n = this.instance.persistence,
                            i = function() {
                                var i, r, s, a, u, l, c, d, h = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.sampleRate,
                                    f = E(h) ? null : parseFloat(h),
                                    p = null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.minimumDurationMilliseconds;
                                n.register((o(d = {}, de, !!e.sessionRecording), o(d, he, null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.consoleLogRecordingEnabled), o(d, fe, t({
                                    capturePerformance: e.capturePerformance
                                }, null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.networkPayloadCapture)), o(d, pe, {
                                    enabled: null === (u = e.sessionRecording) || void 0 === u ? void 0 : u.recordCanvas,
                                    fps: null === (l = e.sessionRecording) || void 0 === l ? void 0 : l.canvasFps,
                                    quality: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.canvasQuality
                                }), o(d, ve, f), o(d, ge, w(p) ? null : p), d))
                            };
                        i(), this.sessionManager.onSessionId(i)
                    }
                }
            }, {
                key: "log",
                value: function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
                    null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
                        type: 6,
                        data: {
                            plugin: "rrweb/console@1",
                            payload: {
                                level: n,
                                trace: [],
                                payload: [JSON.stringify(e)]
                            }
                        },
                        timestamp: X()
                    })
                }
            }, {
                key: "_startCapture",
                value: function() {
                    var e = this;
                    w(Object.assign) || this._captureStarted || this.instance.config.disable_session_recording || si(this.instance) || (this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord ? this._onScriptLoaded() : se(this.instance.requestRouter.endpointFor("assets", "/static/recorder.js?v=".concat(f.LIB_VERSION)), (function(t) {
                        if (t) return U.error(di + " could not load recorder.js", t);
                        e._onScriptLoaded()
                    })))
                }
            }, {
                key: "isInteractiveEvent",
                value: function(e) {
                    var t;
                    return 3 === e.type && -1 !== li.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
                }
            }, {
                key: "_updateWindowAndSessionIds",
                value: function(e) {
                    var t = this.isInteractiveEvent(e);
                    t || this.isIdle || e.timestamp - this._lastActivityTimestamp > ui && (this.isIdle = !0, this._tryAddCustomEvent("sessionIdle", {
                        reason: "user inactivity",
                        timeSinceLastActive: e.timestamp - this._lastActivityTimestamp,
                        threshold: ui
                    }));
                    var n = !1;
                    if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryAddCustomEvent("sessionNoLongerIdle", {
                            reason: "user activity",
                            type: e.type
                        }), n = !0)), !this.isIdle) {
                        var i = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp),
                            r = i.windowId,
                            s = i.sessionId,
                            o = this.sessionId !== s,
                            a = this.windowId !== r;
                        this.windowId = r, this.sessionId = s, (n || -1 === [hn, fn].indexOf(e.type) && (a || o)) && this._tryTakeFullSnapshot()
                    }
                }
            }, {
                key: "_tryRRWebMethod",
                value: function(e) {
                    try {
                        return e.rrwebMethod(), !0
                    } catch (t) {
                        return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
                            enqueuedAt: e.enqueuedAt || Date.now(),
                            attempt: e.attempt++,
                            rrwebMethod: e.rrwebMethod
                        }) : U.warn(di + " could not emit queued rrweb event.", t, e), !1
                    }
                }
            }, {
                key: "_tryAddCustomEvent",
                value: function(e, t) {
                    var n = this;
                    return this._tryRRWebMethod(ci((function() {
                        return n.rrwebRecord.addCustomEvent(e, t)
                    })))
                }
            }, {
                key: "_tryTakeFullSnapshot",
                value: function() {
                    var e = this;
                    return this._tryRRWebMethod(ci((function() {
                        return e.rrwebRecord.takeFullSnapshot()
                    })))
                }
            }, {
                key: "_onScriptLoaded",
                value: function() {
                    for (var e, n = this, i = {
                            blockClass: "ph-no-capture",
                            blockSelector: void 0,
                            ignoreClass: "ph-ignore-input",
                            maskTextClass: "ph-mask",
                            maskTextSelector: void 0,
                            maskTextFn: void 0,
                            maskAllInputs: !0,
                            maskInputOptions: {},
                            maskInputFn: void 0,
                            slimDOMOptions: {},
                            collectFonts: !1,
                            inlineStylesheet: !0,
                            recordCrossOriginIframes: !1
                        }, r = this.instance.config.session_recording, s = 0, o = Object.entries(r || {}); s < o.length; s++) {
                        var a = u(o[s], 2),
                            l = a[0],
                            c = a[1];
                        l in i && (i[l] = c)
                    }
                    if (this.canvasRecording && this.canvasRecording.enabled && (i.recordCanvas = !0, i.sampling = {
                            canvas: this.canvasRecording.fps
                        }, i.dataURLOptions = {
                            type: "image/webp",
                            quality: this.canvasRecording.quality
                        }), this.rrwebRecord) {
                        this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new pn(this.rrwebRecord, {
                            onBlockedNode: function(e, t) {
                                var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
                                U.info(i, {
                                    node: t
                                }), n.log(di + " " + i, "warn")
                            }
                        }), this._scheduleFullSnapshot();
                        var d = this._gatherRRWebPlugins();
                        this.stopRrweb = this.rrwebRecord(t({
                            emit: function(e) {
                                n.onRRwebEmit(e)
                            },
                            plugins: d
                        }, i)), this.instance._addCaptureHook((function(e) {
                            try {
                                if ("$pageview" === e) {
                                    var t = I ? n._maskUrl(I.location.href) : "";
                                    if (!t) return;
                                    n._tryAddCustomEvent("$pageview", {
                                        href: t
                                    }), n._tryTakeFullSnapshot()
                                }
                            } catch (e) {
                                U.error("Could not add $pageview to rrweb session", e)
                            }
                        })), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
                            sessionRecordingOptions: i,
                            activePlugins: d.map((function(e) {
                                return null == e ? void 0 : e.name
                            }))
                        }), this._tryAddCustomEvent("$posthog_config", {
                            config: this.instance.config
                        })
                    } else U.error(di + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
                }
            }, {
                key: "_scheduleFullSnapshot",
                value: function() {
                    var e = this;
                    this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), this._fullSnapshotTimer = setInterval((function() {
                        e._tryTakeFullSnapshot()
                    }), ai)
                }
            }, {
                key: "_gatherRRWebPlugins",
                value: function() {
                    var e = [];
                    (H.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e.push(H.rrwebConsoleRecord.getRecordConsolePlugin()), this.networkPayloadCapture && y(H.getRecordNetworkPlugin)) && (!st.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e.push(H.getRecordNetworkPlugin(Qn(this.instance.config, this.networkPayloadCapture))) : U.info(di + " NetworkCapture not started because we are on localhost."));
                    return e
                }
            }, {
                key: "onRRwebEmit",
                value: function(e) {
                    if (this._processQueuedEvents(), e && b(e)) {
                        if (e.type === vn.Meta) {
                            var t = this._maskUrl(e.data.href);
                            if (this._lastHref = t, !t) return;
                            e.data.href = t
                        } else this._pageViewFallBack();
                        e.type === vn.FullSnapshot && this._scheduleFullSnapshot();
                        var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                        if (n) {
                            var i = function(e) {
                                    var t = e;
                                    if (t && b(t) && 6 === t.type && b(t.data) && "rrweb/console@1" === t.data.plugin) {
                                        t.data.payload.payload.length > 10 && (t.data.payload.payload = t.data.payload.payload.slice(0, 10), t.data.payload.payload.push("...[truncated]"));
                                        for (var n = [], i = 0; i < t.data.payload.payload.length; i++) t.data.payload.payload[i] && t.data.payload.payload[i].length > 2e3 ? n.push(t.data.payload.payload[i].slice(0, 2e3) + "...[truncated]") : n.push(t.data.payload.payload[i]);
                                        return t.data.payload.payload = n, e
                                    }
                                    return e
                                }(n),
                                r = JSON.stringify(i).length;
                            if (this._updateWindowAndSessionIds(i), !this.isIdle || i.type === vn.Custom) {
                                var s = {
                                    $snapshot_bytes: r,
                                    $snapshot_data: i,
                                    $session_id: this.sessionId,
                                    $window_id: this.windowId
                                };
                                "disabled" !== this.status ? this._captureSnapshotBuffered(s) : this.clearBuffer()
                            }
                        }
                    }
                }
            }, {
                key: "_pageViewFallBack",
                value: function() {
                    if (!this.instance.config.capture_pageview && I) {
                        var e = this._maskUrl(I.location.href);
                        this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
                            href: e
                        }), this._lastHref = e)
                    }
                }
            }, {
                key: "_processQueuedEvents",
                value: function() {
                    var e = this;
                    if (this.queuedRRWebEvents.length) {
                        var t = l(this.queuedRRWebEvents);
                        this.queuedRRWebEvents = [], t.forEach((function(n) {
                            Date.now() - n.enqueuedAt > 2e3 ? e._tryAddCustomEvent("rrwebQueueTimeout", {
                                enqueuedAt: n.enqueuedAt,
                                attempt: n.attempt,
                                queueLength: t.length
                            }) : e._tryRRWebMethod(n) && e._tryAddCustomEvent("rrwebQueueSuccess", {
                                enqueuedAt: n.enqueuedAt,
                                attempt: n.attempt,
                                queueLength: t.length
                            })
                        }))
                    }
                }
            }, {
                key: "_maskUrl",
                value: function(e) {
                    var t = this.instance.config.session_recording;
                    if (t.maskNetworkRequestFn) {
                        var n, i = {
                            url: e
                        };
                        return null === (n = i = t.maskNetworkRequestFn(i)) || void 0 === n ? void 0 : n.url
                    }
                    return e
                }
            }, {
                key: "clearBuffer",
                value: function() {
                    return this.buffer = void 0, {
                        size: 0,
                        data: [],
                        sessionId: this.sessionId,
                        windowId: this.windowId
                    }
                }
            }, {
                key: "_flushBuffer",
                value: function() {
                    var e = this;
                    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
                    var t = this.minimumDuration,
                        n = this.sessionDuration,
                        i = R(n) && n >= 0,
                        r = R(t) && i && n < t;
                    return "buffering" === this.status || r ? (this.flushBufferTimer = setTimeout((function() {
                        e._flushBuffer()
                    }), 2e3), this.buffer || this.clearBuffer()) : this.buffer && 0 !== this.buffer.data.length ? (this._captureSnapshot({
                        $snapshot_bytes: this.buffer.size,
                        $snapshot_data: this.buffer.data,
                        $session_id: this.buffer.sessionId,
                        $window_id: this.buffer.windowId
                    }), this.clearBuffer()) : this.buffer || this.clearBuffer()
                }
            }, {
                key: "_captureSnapshotBuffered",
                value: function(e) {
                    var t, n = this,
                        i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
                    (!this.buffer || this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId && this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), F(this.buffer.sessionId) && !F(this.sessionId) && (this.buffer.sessionId = this.sessionId, this.buffer.windowId = this.windowId), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), this.flushBufferTimer || (this.flushBufferTimer = setTimeout((function() {
                        n._flushBuffer()
                    }), 2e3))
                }
            }, {
                key: "_captureSnapshot",
                value: function(e) {
                    this.instance.capture("$snapshot", e, {
                        _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
                        _noTruncate: !0,
                        _batchKey: "recordings",
                        _noHeatmaps: !0
                    })
                }
            }]), e
        }(),
        fi = function() {
            function e(t) {
                i(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags()
            }
            return s(e, [{
                key: "call",
                value: function() {
                    var e = this,
                        t = {
                            token: this.instance.config.token,
                            distinct_id: this.instance.get_distinct_id(),
                            groups: this.instance.getGroups(),
                            person_properties: this.instance.get_property(ke),
                            group_properties: this.instance.get_property(we),
                            disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
                        };
                    this.instance._send_request({
                        method: "POST",
                        url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
                        data: t,
                        compression: this.instance.config.disable_compression ? void 0 : ne.Base64,
                        timeout: this.instance.config.feature_flag_request_timeout_ms,
                        callback: function(t) {
                            return e.parseDecideResponse(t.json)
                        }
                    })
                }
            }, {
                key: "parseDecideResponse",
                value: function(e) {
                    var t = this;
                    this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer();
                    var n = !e;
                    if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e ? e : {}, n), n) U.error("Failed to fetch feature flags from PostHog.");
                    else {
                        if (!q || !q.body) return U.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout((function() {
                            t.parseDecideResponse(e)
                        }), 500);
                        this.instance._afterDecideResponse(e);
                        var i = null == I ? void 0 : I.extendPostHogWithExceptionAutoCapture;
                        if (e.autocaptureExceptions && e.autocaptureExceptions && w(i) && se(this.instance.requestRouter.endpointFor("assets", "/static/exception-autocapture.js"), (function(n) {
                                if (n) return U.error("Could not load exception autocapture script", n);
                                I.extendPostHogWithExceptionAutocapture(t.instance, e)
                            })), e.siteApps)
                            if (this.instance.config.opt_in_site_apps) {
                                var r, s = h(e.siteApps);
                                try {
                                    var o = function() {
                                        var e = r.value,
                                            n = e.id,
                                            i = e.url,
                                            s = t.instance.requestRouter.endpointFor("api", i);
                                        H["__$$ph_site_app_".concat(n)] = t.instance, se(s, (function(e) {
                                            e && U.error("Error while initializing PostHog app with config id ".concat(n), e)
                                        }))
                                    };
                                    for (s.s(); !(r = s.n()).done;) o()
                                } catch (e) {
                                    s.e(e)
                                } finally {
                                    s.f()
                                }
                            } else e.siteApps.length > 0 && U.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                    }
                }
            }]), e
        }(),
        pi = null != I && I.location ? ct(I.location.hash, "__posthog") || ct(location.hash, "state") : null,
        vi = "_postHogToolbarParams",
        gi = function() {
            function e(t) {
                i(this, e), o(this, "_toolbarScriptLoaded", !1), this.instance = t
            }
            return s(e, [{
                key: "maybeLoadToolbar",
                value: function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    if (!I || !q) return !1;
                    n = null !== (e = n) && void 0 !== e ? e : I.location, r = null !== (t = r) && void 0 !== t ? t : I.history;
                    try {
                        if (!i) {
                            try {
                                I.localStorage.setItem("test", "test"), I.localStorage.removeItem("test")
                            } catch (e) {
                                return !1
                            }
                            i = null == I ? void 0 : I.localStorage
                        }
                        var s, o = pi || ct(n.hash, "__posthog") || ct(n.hash, "state"),
                            a = o ? K((function() {
                                return JSON.parse(atob(decodeURIComponent(o)))
                            })) || K((function() {
                                return JSON.parse(decodeURIComponent(o))
                            })) : null;
                        return a && "ph_authorize" === a.action ? ((s = a).source = "url", s && Object.keys(s).length > 0 && (a.desiredHash ? n.hash = a.desiredHash : r ? r.replaceState("", q.title, n.pathname + n.search) : n.hash = "")) : ((s = JSON.parse(i.getItem(vi) || "{}")).source = "localstorage", delete s.userIntent), !(!s.token || this.instance.config.token !== s.token) && (this.loadToolbar(s), !0)
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "_callLoadToolbar",
                value: function(e) {
                    (H.ph_load_toolbar || H.ph_load_editor)(e, this.instance)
                }
            }, {
                key: "loadToolbar",
                value: function(e) {
                    var n = this;
                    if (!I || I.localStorage.getItem(vi) && this._toolbarScriptLoaded) return !1;
                    var i = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
                        r = t(t({
                            token: this.instance.config.token
                        }, e), {}, {
                            apiURL: this.instance.requestRouter.endpointFor("ui")
                        }, i ? {
                            instrument: !1
                        } : {});
                    if (I.localStorage.setItem(vi, JSON.stringify(t(t({}, r), {}, {
                            source: void 0
                        }))), this._toolbarScriptLoaded) this._callLoadToolbar(r);
                    else {
                        this._toolbarScriptLoaded = !0;
                        var s = 3e5,
                            o = Math.floor(Date.now() / s) * s;
                        se(this.instance.requestRouter.endpointFor("assets", "/static/toolbar.js?t=".concat(o)), (function(e) {
                            if (e) return U.error("Failed to load toolbar", e), void(n._toolbarScriptLoaded = !1);
                            n._callLoadToolbar(r)
                        })), re(I, "turbolinks:load", (function() {
                            n._toolbarScriptLoaded = !1, n.loadToolbar(r)
                        }))
                    }
                    return !0
                }
            }, {
                key: "_loadEditor",
                value: function(e) {
                    return this.loadToolbar(e)
                }
            }, {
                key: "maybeLoadEditor",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return this.maybeLoadToolbar(e, t, n)
                }
            }]), e
        }(),
        _i = function() {
            function e(t) {
                i(this, e), o(this, "isPaused", !0), o(this, "queue", []), o(this, "flushTimeoutMs", 3e3), this.sendRequest = t
            }
            return s(e, [{
                key: "enqueue",
                value: function(e) {
                    this.queue.push(e), this.flushTimeout || this.setFlushTimeout()
                }
            }, {
                key: "unload",
                value: function() {
                    var e = this;
                    this.clearFlushTimeout();
                    var n = this.queue.length > 0 ? this.formatQueue() : {},
                        i = Object.values(n);
                    [].concat(l(i.filter((function(e) {
                        return 0 === e.url.indexOf("/e")
                    }))), l(i.filter((function(e) {
                        return 0 !== e.url.indexOf("/e")
                    })))).map((function(n) {
                        e.sendRequest(t(t({}, n), {}, {
                            transport: "sendBeacon"
                        }))
                    }))
                }
            }, {
                key: "enable",
                value: function() {
                    this.isPaused = !1, this.setFlushTimeout()
                }
            }, {
                key: "setFlushTimeout",
                value: function() {
                    var e = this;
                    this.isPaused || (this.flushTimeout = setTimeout((function() {
                        if (e.clearFlushTimeout(), e.queue.length > 0) {
                            var t = e.formatQueue(),
                                n = function(n) {
                                    var i = t[n],
                                        r = (new Date).getTime();
                                    i.data && m(i.data) && V(i.data, (function(e) {
                                        e.offset = Math.abs(e.timestamp - r), delete e.timestamp
                                    })), e.sendRequest(i)
                                };
                            for (var i in t) n(i)
                        }
                    }), this.flushTimeoutMs))
                }
            }, {
                key: "clearFlushTimeout",
                value: function() {
                    clearTimeout(this.flushTimeout), this.flushTimeout = void 0
                }
            }, {
                key: "formatQueue",
                value: function() {
                    var e = {};
                    return V(this.queue, (function(n) {
                        var i, r = n,
                            s = (r ? r.batchKey : null) || r.url;
                        w(e[s]) && (e[s] = t(t({}, r), {}, {
                            data: []
                        })), null === (i = e[s].data) || void 0 === i || i.push(r.data)
                    })), this.queue = [], e
                }
            }]), e
        }(),
        mi = Uint8Array,
        yi = Uint16Array,
        bi = Uint32Array,
        ki = new mi([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        wi = new mi([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        Si = new mi([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        Fi = function(e, t) {
            for (var n = new yi(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
            var r = new bi(n[30]);
            for (i = 1; i < 30; ++i)
                for (var s = n[i]; s < n[i + 1]; ++s) r[s] = s - n[i] << 5 | i;
            return [n, r]
        },
        Ei = Fi(ki, 2),
        Ri = Ei[0],
        xi = Ei[1];
    Ri[28] = 258, xi[258] = 28;
    for (var Pi = Fi(wi, 0)[1], Ii = new yi(32768), Ci = 0; Ci < 32768; ++Ci) {
        var $i = (43690 & Ci) >>> 1 | (21845 & Ci) << 1;
        $i = (61680 & ($i = (52428 & $i) >>> 2 | (13107 & $i) << 2)) >>> 4 | (3855 & $i) << 4, Ii[Ci] = ((65280 & $i) >>> 8 | (255 & $i) << 8) >>> 1
    }
    var Ti = function(e, t, n) {
            for (var i = e.length, r = 0, s = new yi(t); r < i; ++r) ++s[e[r] - 1];
            var o, a = new yi(t);
            for (r = 0; r < t; ++r) a[r] = a[r - 1] + s[r - 1] << 1;
            if (n) {
                o = new yi(1 << t);
                var u = 15 - t;
                for (r = 0; r < i; ++r)
                    if (e[r])
                        for (var l = r << 4 | e[r], c = t - e[r], d = a[e[r] - 1]++ << c, h = d | (1 << c) - 1; d <= h; ++d) o[Ii[d] >>> u] = l
            } else
                for (o = new yi(i), r = 0; r < i; ++r) o[r] = Ii[a[e[r] - 1]++] >>> 15 - e[r];
            return o
        },
        Mi = new mi(288);
    for (Ci = 0; Ci < 144; ++Ci) Mi[Ci] = 8;
    for (Ci = 144; Ci < 256; ++Ci) Mi[Ci] = 9;
    for (Ci = 256; Ci < 280; ++Ci) Mi[Ci] = 7;
    for (Ci = 280; Ci < 288; ++Ci) Mi[Ci] = 8;
    var Oi = new mi(32);
    for (Ci = 0; Ci < 32; ++Ci) Oi[Ci] = 5;
    var qi = Ti(Mi, 9, 0),
        Ai = Ti(Oi, 5, 0),
        Li = function(e) {
            return (e / 8 >> 0) + (7 & e && 1)
        },
        Bi = function(e, t, n) {
            (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
            var i = new(e instanceof yi ? yi : e instanceof bi ? bi : mi)(n - t);
            return i.set(e.subarray(t, n)), i
        },
        Di = function(e, t, n) {
            n <<= 7 & t;
            var i = t / 8 >> 0;
            e[i] |= n, e[i + 1] |= n >>> 8
        },
        Ni = function(e, t, n) {
            n <<= 7 & t;
            var i = t / 8 >> 0;
            e[i] |= n, e[i + 1] |= n >>> 8, e[i + 2] |= n >>> 16
        },
        Hi = function(e, t) {
            for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
                s: i,
                f: e[i]
            });
            var r = n.length,
                s = n.slice();
            if (!r) return [new mi(0), 0];
            if (1 == r) {
                var o = new mi(n[0].s + 1);
                return o[n[0].s] = 1, [o, 1]
            }
            n.sort((function(e, t) {
                return e.f - t.f
            })), n.push({
                s: -1,
                f: 25001
            });
            var a = n[0],
                u = n[1],
                l = 0,
                c = 1,
                d = 2;
            for (n[0] = {
                    s: -1,
                    f: a.f + u.f,
                    l: a,
                    r: u
                }; c != r - 1;) a = n[n[l].f < n[d].f ? l++ : d++], u = n[l != c && n[l].f < n[d].f ? l++ : d++], n[c++] = {
                s: -1,
                f: a.f + u.f,
                l: a,
                r: u
            };
            var h = s[0].s;
            for (i = 1; i < r; ++i) s[i].s > h && (h = s[i].s);
            var f = new yi(h + 1),
                p = ji(n[c - 1], f, 0);
            if (p > t) {
                i = 0;
                var v = 0,
                    g = p - t,
                    _ = 1 << g;
                for (s.sort((function(e, t) {
                        return f[t.s] - f[e.s] || e.f - t.f
                    })); i < r; ++i) {
                    var m = s[i].s;
                    if (!(f[m] > t)) break;
                    v += _ - (1 << p - f[m]), f[m] = t
                }
                for (v >>>= g; v > 0;) {
                    var y = s[i].s;
                    f[y] < t ? v -= 1 << t - f[y]++ - 1 : ++i
                }
                for (; i >= 0 && v; --i) {
                    var b = s[i].s;
                    f[b] == t && (--f[b], ++v)
                }
                p = t
            }
            return [new mi(f), p]
        },
        ji = function e(t, n, i) {
            return -1 == t.s ? Math.max(e(t.l, n, i + 1), e(t.r, n, i + 1)) : n[t.s] = i
        },
        Ui = function(e) {
            for (var t = e.length; t && !e[--t];);
            for (var n = new yi(++t), i = 0, r = e[0], s = 1, o = function(e) {
                    n[i++] = e
                }, a = 1; a <= t; ++a)
                if (e[a] == r && a != t) ++s;
                else {
                    if (!r && s > 2) {
                        for (; s > 138; s -= 138) o(32754);
                        s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0)
                    } else if (s > 3) {
                        for (o(r), --s; s > 6; s -= 6) o(8304);
                        s > 2 && (o(s - 3 << 5 | 8208), s = 0)
                    }
                    for (; s--;) o(r);
                    s = 1, r = e[a]
                }
            return [n.subarray(0, i), t]
        },
        Wi = function(e, t) {
            for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
            return n
        },
        zi = function(e, t, n) {
            var i = n.length,
                r = Li(t + 2);
            e[r] = 255 & i, e[r + 1] = i >>> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
            for (var s = 0; s < i; ++s) e[r + s + 4] = n[s];
            return 8 * (r + 4 + i)
        },
        Gi = function(e, t, n, i, r, s, o, a, u, l, c) {
            Di(t, c++, n), ++r[256];
            for (var d = Hi(r, 15), h = d[0], f = d[1], p = Hi(s, 15), v = p[0], g = p[1], _ = Ui(h), m = _[0], y = _[1], b = Ui(v), k = b[0], w = b[1], S = new yi(19), F = 0; F < m.length; ++F) S[31 & m[F]]++;
            for (F = 0; F < k.length; ++F) S[31 & k[F]]++;
            for (var E = Hi(S, 7), R = E[0], x = E[1], P = 19; P > 4 && !R[Si[P - 1]]; --P);
            var I, C, $, T, M = l + 5 << 3,
                O = Wi(r, Mi) + Wi(s, Oi) + o,
                q = Wi(r, h) + Wi(s, v) + o + 14 + 3 * P + Wi(S, R) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
            if (M <= O && M <= q) return zi(t, c, e.subarray(u, u + l));
            if (Di(t, c, 1 + (q < O)), c += 2, q < O) {
                I = Ti(h, f, 0), C = h, $ = Ti(v, g, 0), T = v;
                var A = Ti(R, x, 0);
                Di(t, c, y - 257), Di(t, c + 5, w - 1), Di(t, c + 10, P - 4), c += 14;
                for (F = 0; F < P; ++F) Di(t, c + 3 * F, R[Si[F]]);
                c += 3 * P;
                for (var L = [m, k], B = 0; B < 2; ++B) {
                    var D = L[B];
                    for (F = 0; F < D.length; ++F) {
                        var N = 31 & D[F];
                        Di(t, c, A[N]), c += R[N], N > 15 && (Di(t, c, D[F] >>> 5 & 127), c += D[F] >>> 12)
                    }
                }
            } else I = qi, C = Mi, $ = Ai, T = Oi;
            for (F = 0; F < a; ++F)
                if (i[F] > 255) {
                    N = i[F] >>> 18 & 31;
                    Ni(t, c, I[N + 257]), c += C[N + 257], N > 7 && (Di(t, c, i[F] >>> 23 & 31), c += ki[N]);
                    var H = 31 & i[F];
                    Ni(t, c, $[H]), c += T[H], H > 3 && (Ni(t, c, i[F] >>> 5 & 8191), c += wi[H])
                } else Ni(t, c, I[i[F]]), c += C[i[F]];
            return Ni(t, c, I[256]), c + C[256]
        },
        Vi = new bi([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        Qi = new mi(0),
        Ji = function() {
            for (var e = new bi(256), t = 0; t < 256; ++t) {
                for (var n = t, i = 9; --i;) n = (1 & n && 3988292384) ^ n >>> 1;
                e[t] = n
            }
            return e
        }(),
        Yi = function(e, t, n, i, r) {
            return function(e, t, n, i, r, s) {
                var o = e.length,
                    a = new mi(i + o + 5 * (1 + Math.floor(o / 7e3)) + r),
                    u = a.subarray(i, a.length - r),
                    l = 0;
                if (!t || o < 8)
                    for (var c = 0; c <= o; c += 65535) {
                        var d = c + 65535;
                        d < o ? l = zi(u, l, e.subarray(c, d)) : (u[c] = s, l = zi(u, l, e.subarray(c, o)))
                    } else {
                        for (var h = Vi[t - 1], f = h >>> 13, p = 8191 & h, v = (1 << n) - 1, g = new yi(32768), _ = new yi(v + 1), m = Math.ceil(n / 3), y = 2 * m, b = function(t) {
                                return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & v
                            }, k = new bi(25e3), w = new yi(288), S = new yi(32), F = 0, E = 0, R = (c = 0, 0), x = 0, P = 0; c < o; ++c) {
                            var I = b(c),
                                C = 32767 & c,
                                $ = _[I];
                            if (g[C] = $, _[I] = C, x <= c) {
                                var T = o - c;
                                if ((F > 7e3 || R > 24576) && T > 423) {
                                    l = Gi(e, u, 0, k, w, S, E, R, P, c - P, l), R = F = E = 0, P = c;
                                    for (var M = 0; M < 286; ++M) w[M] = 0;
                                    for (M = 0; M < 30; ++M) S[M] = 0
                                }
                                var O = 2,
                                    q = 0,
                                    A = p,
                                    L = C - $ & 32767;
                                if (T > 2 && I == b(c - L))
                                    for (var B = Math.min(f, T) - 1, D = Math.min(32767, c), N = Math.min(258, T); L <= D && --A && C != $;) {
                                        if (e[c + O] == e[c + O - L]) {
                                            for (var H = 0; H < N && e[c + H] == e[c + H - L]; ++H);
                                            if (H > O) {
                                                if (O = H, q = L, H > B) break;
                                                var j = Math.min(L, H - 2),
                                                    U = 0;
                                                for (M = 0; M < j; ++M) {
                                                    var W = c - L + M + 32768 & 32767,
                                                        z = W - g[W] + 32768 & 32767;
                                                    z > U && (U = z, $ = W)
                                                }
                                            }
                                        }
                                        L += (C = $) - ($ = g[C]) + 32768 & 32767
                                    }
                                if (q) {
                                    k[R++] = 268435456 | xi[O] << 18 | Pi[q];
                                    var G = 31 & xi[O],
                                        V = 31 & Pi[q];
                                    E += ki[G] + wi[V], ++w[257 + G], ++S[V], x = c + O, ++F
                                } else k[R++] = e[c], ++w[e[c]]
                            }
                        }
                        l = Gi(e, u, s, k, w, S, E, R, P, c - P, l), s || (l = zi(u, l, Qi))
                    }
                return Bi(a, 0, i + Li(l) + r)
            }(e, null == t.level ? 6 : t.level, null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem, n, i, !r)
        },
        Xi = function(e, t, n) {
            for (; n; ++t) e[t] = n, n >>>= 8
        };

    function Ki(e, t) {
        void 0 === t && (t = {});
        var n = function() {
                var e = 4294967295;
                return {
                    p: function(t) {
                        for (var n = e, i = 0; i < t.length; ++i) n = Ji[255 & n ^ t[i]] ^ n >>> 8;
                        e = n
                    },
                    d: function() {
                        return 4294967295 ^ e
                    }
                }
            }(),
            i = e.length;
        n.p(e);
        var r, s = Yi(e, t, 10 + ((r = t).filename && r.filename.length + 1 || 0), 8),
            o = s.length;
        return function(e, t) {
            var n = t.filename;
            if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, e[9] = 3, 0 != t.mtime && Xi(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
                e[3] = 8;
                for (var i = 0; i <= n.length; ++i) e[i + 10] = n.charCodeAt(i)
            }
        }(s, t), Xi(s, o - 8, n.d()), Xi(s, o - 4, i), s
    }
    var Zi = !!B || !!L,
        er = "text/plain",
        tr = function(e, n) {
            var i = u(e.split("?"), 2),
                r = i[0],
                s = i[1],
                o = t({}, n);
            null == s || s.split("&").forEach((function(e) {
                var t = u(e.split("="), 1)[0];
                delete o[t]
            }));
            var a = ut(o);
            return a = a ? (s ? s + "&" : "") + a : s, "".concat(r, "?").concat(a)
        },
        nr = function(e) {
            return "data=" + encodeURIComponent("string" == typeof e ? e : JSON.stringify(e))
        },
        ir = function(e) {
            var t = e.data,
                n = e.compression;
            if (t) {
                if (n === ne.GZipJS) {
                    var i = Ki(function(e, t) {
                        var n = e.length;
                        if (!t && "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                        for (var i = new mi(e.length + (e.length >>> 1)), r = 0, s = function(e) {
                                i[r++] = e
                            }, o = 0; o < n; ++o) {
                            if (r + 5 > i.length) {
                                var a = new mi(r + 8 + (n - o << 1));
                                a.set(i), i = a
                            }
                            var u = e.charCodeAt(o);
                            u < 128 || t ? s(u) : u < 2048 ? (s(192 | u >>> 6), s(128 | 63 & u)) : u > 55295 && u < 57344 ? (s(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++o)) >>> 18), s(128 | u >>> 12 & 63), s(128 | u >>> 6 & 63), s(128 | 63 & u)) : (s(224 | u >>> 12), s(128 | u >>> 6 & 63), s(128 | 63 & u))
                        }
                        return Bi(i, 0, r)
                    }(JSON.stringify(t)), {
                        mtime: 0
                    });
                    return {
                        contentType: er,
                        body: new Blob([i], {
                            type: er
                        })
                    }
                }
                if (n === ne.Base64) {
                    var r = function(e) {
                        var t, n, i, r, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                            a = 0,
                            u = 0,
                            l = "",
                            c = [];
                        if (!e) return e;
                        e = ie(e);
                        do {
                            t = (s = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, n = s >> 12 & 63, i = s >> 6 & 63, r = 63 & s, c[u++] = o.charAt(t) + o.charAt(n) + o.charAt(i) + o.charAt(r)
                        } while (a < e.length);
                        switch (l = c.join(""), e.length % 3) {
                            case 1:
                                l = l.slice(0, -2) + "==";
                                break;
                            case 2:
                                l = l.slice(0, -1) + "="
                        }
                        return l
                    }(JSON.stringify(t));
                    return {
                        contentType: "application/x-www-form-urlencoded",
                        body: nr(r)
                    }
                }
                return {
                    contentType: "application/json",
                    body: JSON.stringify(t)
                }
            }
        },
        rr = function(e) {
            var t, n = new B;
            n.open(e.method || "GET", e.url, !0);
            var i = null !== (t = ir(e)) && void 0 !== t ? t : {},
                r = i.contentType,
                s = i.body;
            V(e.headers, (function(e, t) {
                n.setRequestHeader(t, e)
            })), r && n.setRequestHeader("Content-Type", r), e.timeout && (n.timeout = e.timeout), n.withCredentials = !0, n.onreadystatechange = function() {
                if (4 === n.readyState) {
                    var t, i = {
                        statusCode: n.status,
                        text: n.responseText
                    };
                    if (200 === n.status) try {
                        i.json = JSON.parse(n.responseText)
                    } catch (e) {}
                    null === (t = e.callback) || void 0 === t || t.call(e, i)
                }
            }, n.send(s)
        },
        sr = function(e) {
            var t, n, i = null !== (t = ir(e)) && void 0 !== t ? t : {},
                r = i.contentType,
                s = i.body,
                o = new Headers;
            V(o, (function(e, t) {
                o.append(t, e)
            })), r && o.append("Content-Type", r);
            var a = e.url,
                u = null;
            if (D) {
                var l = new D;
                u = {
                    signal: l.signal,
                    timeout: setTimeout((function() {
                        return l.abort()
                    }), e.timeout)
                }
            }
            L(a, {
                method: (null == e ? void 0 : e.method) || "GET",
                headers: o,
                keepalive: "POST" === e.method,
                body: s,
                signal: null === (n = u) || void 0 === n ? void 0 : n.signal
            }).then((function(t) {
                return t.text().then((function(n) {
                    var i, r = {
                        statusCode: t.status,
                        text: n
                    };
                    if (200 === t.status) try {
                        r.json = JSON.parse(n)
                    } catch (e) {
                        U.error(e)
                    }
                    null === (i = e.callback) || void 0 === i || i.call(e, r)
                }))
            })).catch((function(t) {
                var n;
                U.error(t), null === (n = e.callback) || void 0 === n || n.call(e, {
                    statusCode: 0,
                    text: t
                })
            })).finally((function() {
                return u ? clearTimeout(u.timeout) : null
            }))
        },
        or = function(e) {
            var t = tr(e.url, {
                beacon: "1"
            });
            try {
                var n, i = null !== (n = ir(e)) && void 0 !== n ? n : {},
                    r = i.contentType,
                    s = i.body,
                    o = "string" == typeof s ? new Blob([s], {
                        type: r
                    }) : s;
                O.sendBeacon(t, o)
            } catch (e) {}
        },
        ar = function(e) {
            var t;
            if (q) {
                var n = q.createElement("script");
                n.type = "text/javascript", n.async = !0, n.defer = !0, n.src = e.url;
                var i = q.getElementsByTagName("script")[0];
                null === (t = i.parentNode) || void 0 === t || t.insertBefore(n, i)
            }
        },
        ur = ["retriesPerformedSoFar"];
    var lr, cr = function() {
            function e(t) {
                var n = this;
                i(this, e), o(this, "isPolling", !1), o(this, "pollIntervalMs", 3e3), o(this, "queue", []), this.instance = t, this.queue = [], this.areWeOnline = !0, !w(I) && "onLine" in I.navigator && (this.areWeOnline = I.navigator.onLine, I.addEventListener("online", (function() {
                    n.areWeOnline = !0, n.flush()
                })), I.addEventListener("offline", (function() {
                    n.areWeOnline = !1
                })))
            }
            return s(e, [{
                key: "retriableRequest",
                value: function(e) {
                    var n = this,
                        i = e.retriesPerformedSoFar,
                        r = a(e, ur);
                    R(i) && i > 0 && (r.url = tr(r.url, {
                        retry_count: i
                    })), this.instance._send_request(t(t({}, r), {}, {
                        callback: function(e) {
                            var s;
                            200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != i ? i : 0) < 10 ? n.enqueue(t({}, r)) : null === (s = r.callback) || void 0 === s || s.call(r, e)
                        }
                    }))
                }
            }, {
                key: "enqueue",
                value: function(e) {
                    var t = e.retriesPerformedSoFar || 0;
                    e.retriesPerformedSoFar = t + 1;
                    var n = function(e) {
                            var t = 3e3 * Math.pow(2, e),
                                n = t / 2,
                                i = Math.min(18e5, t),
                                r = (Math.random() - .5) * (i - n);
                            return Math.ceil(i + r)
                        }(t),
                        i = Date.now() + n;
                    this.queue.push({
                        retryAt: i,
                        requestOptions: e
                    });
                    var r = "Enqueued failed request for retry in ".concat(n);
                    navigator.onLine || (r += " (Browser is offline)"), U.warn(r), this.isPolling || (this.isPolling = !0, this.poll())
                }
            }, {
                key: "poll",
                value: function() {
                    var e = this;
                    this.poller && clearTimeout(this.poller), this.poller = setTimeout((function() {
                        e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll()
                    }), this.pollIntervalMs)
                }
            }, {
                key: "flush",
                value: function() {
                    var e = Date.now(),
                        t = [],
                        n = this.queue.filter((function(n) {
                            return n.retryAt < e || (t.push(n), !1)
                        }));
                    if (this.queue = t, n.length > 0) {
                        var i, r = h(n);
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var s = i.value.requestOptions;
                                this.retriableRequest(s)
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }
                }
            }, {
                key: "unload",
                value: function() {
                    this.poller && (clearTimeout(this.poller), this.poller = void 0);
                    var e, n = h(this.queue);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var i = e.value.requestOptions;
                            try {
                                this.instance._send_request(t(t({}, i), {}, {
                                    transport: "sendBeacon"
                                }))
                            } catch (e) {
                                U.error(e)
                            }
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    this.queue = []
                }
            }]), e
        }(),
        dr = 1800,
        hr = function() {
            function e(t, n, r, s) {
                i(this, e), o(this, "_sessionIdChangedHandlers", []), this.config = t, this.persistence = n, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = r || Ue, this._windowIdGenerator = s || Ue;
                var a = t.persistence_name || t.token,
                    u = t.session_idle_timeout_seconds || dr;
                if (R(u) ? u > dr ? U.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : u < 60 && U.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (U.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), u = dr), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(u, 60), dr), this._window_id_storage_key = "ph_" + a + "_window_id", this._primary_window_exists_storage_key = "ph_" + a + "_primary_window_exists", this._canUseSessionStorage()) {
                    var l = rt.parse(this._window_id_storage_key),
                        c = rt.parse(this._primary_window_exists_storage_key);
                    l && !c ? this._windowId = l : rt.remove(this._window_id_storage_key), rt.set(this._primary_window_exists_storage_key, !0)
                }
                this._listenToReloadWindow()
            }
            return s(e, [{
                key: "onSessionId",
                value: function(e) {
                    var t = this;
                    return w(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId),
                        function() {
                            t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter((function(t) {
                                return t !== e
                            }))
                        }
                }
            }, {
                key: "_canUseSessionStorage",
                value: function() {
                    return "memory" !== this.config.persistence && !this.persistence.disabled && rt.is_supported()
                }
            }, {
                key: "_setWindowId",
                value: function(e) {
                    e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && rt.set(this._window_id_storage_key, e))
                }
            }, {
                key: "_getWindowId",
                value: function() {
                    return this._windowId ? this._windowId : this._canUseSessionStorage() ? rt.parse(this._window_id_storage_key) : null
                }
            }, {
                key: "_setSessionId",
                value: function(e, t, n) {
                    e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(o({}, _e, [t, e, n])))
                }
            }, {
                key: "_getSessionId",
                value: function() {
                    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                    var e = this.persistence.props[_e];
                    return m(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
                }
            }, {
                key: "resetSessionId",
                value: function() {
                    this._setSessionId(null, null, null)
                }
            }, {
                key: "_listenToReloadWindow",
                value: function() {
                    var e = this;
                    null == I || I.addEventListener("beforeunload", (function() {
                        e._canUseSessionStorage() && rt.remove(e._primary_window_exists_storage_key)
                    }))
                }
            }, {
                key: "checkAndGetSessionAndWindowId",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(),
                        n = u(this._getSessionId(), 3),
                        i = n[0],
                        r = n[1],
                        s = n[2],
                        o = this._getWindowId(),
                        a = s && s > 0 && Math.abs(t - s) > 864e5,
                        l = !1,
                        c = !r,
                        d = !e && Math.abs(t - i) > this._sessionTimeoutMs;
                    c || d || a ? (r = this._sessionIdGenerator(), o = this._windowIdGenerator(), U.info("[SessionId] new session ID generated", {
                        sessionId: r,
                        windowId: o,
                        changeReason: {
                            noSessionId: c,
                            activityTimeout: d,
                            sessionPastMaximumLength: a
                        }
                    }), s = t, l = !0) : o || (o = this._windowIdGenerator(), l = !0);
                    var h = 0 === i || !e || a ? t : i,
                        f = 0 === s ? (new Date).getTime() : s;
                    return this._setWindowId(o), this._setSessionId(r, h, f), l && this._sessionIdChangedHandlers.forEach((function(e) {
                        return e(r, o)
                    })), {
                        sessionId: r,
                        windowId: o,
                        sessionStartTimestamp: f
                    }
                }
            }]), e
        }();
    ! function(e) {
        e.US = "us", e.EU = "eu", e.CUSTOM = "custom"
    }(lr || (lr = {}));
    var fr = "i.posthog.com",
        pr = function() {
            function e(t) {
                i(this, e), o(this, "_regionCache", {}), this.instance = t
            }
            return s(e, [{
                key: "apiHost",
                get: function() {
                    return this.instance.config.api_host.trim().replace(/\/$/, "")
                }
            }, {
                key: "uiHost",
                get: function() {
                    var e;
                    return null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "")
                }
            }, {
                key: "region",
                get: function() {
                    return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = lr.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = lr.EU : this._regionCache[this.apiHost] = lr.CUSTOM), this._regionCache[this.apiHost]
                }
            }, {
                key: "endpointFor",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return (this.uiHost || this.apiHost.replace(".".concat(fr), ".posthog.com")) + t;
                    if (this.region === lr.CUSTOM) return this.apiHost + t;
                    var n = fr + t;
                    switch (e) {
                        case "assets":
                            return "https://".concat(this.region, "-assets.").concat(n);
                        case "api":
                            return "https://".concat(this.region, ".").concat(n)
                    }
                }
            }]), e
        }(),
        vr = s((function e(t, n, r, s) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ["error"];
            i(this, e), this.name = "posthog-js", this.setupOnce = function(e) {
                e((function(e) {
                    var i, a, u, l, c;
                    if (!("*" === o || o.includes(e.level)) || !t.__loaded) return e;
                    e.tags || (e.tags = {});
                    var d = t.requestRouter.endpointFor("ui", "/project/".concat(t.config.token, "/person/").concat(t.get_distinct_id()));
                    e.tags["PostHog Person URL"] = d, t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.get_session_replay_url({
                        withTimestamp: !0
                    }));
                    var h = (null === (i = e.exception) || void 0 === i ? void 0 : i.values) || [],
                        f = {
                            $exception_message: (null === (a = h[0]) || void 0 === a ? void 0 : a.value) || e.message,
                            $exception_type: null === (u = h[0]) || void 0 === u ? void 0 : u.type,
                            $exception_personURL: d,
                            $sentry_event_id: e.event_id,
                            $sentry_exception: e.exception,
                            $sentry_exception_message: (null === (l = h[0]) || void 0 === l ? void 0 : l.value) || e.message,
                            $sentry_exception_type: null === (c = h[0]) || void 0 === c ? void 0 : c.type,
                            $sentry_tags: e.tags,
                            $level: e.level
                        };
                    return n && r && (f.$sentry_url = (s || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + e.event_id), t.capture("$exception", f), e
                }))
            }
        }));

    function gr(e, t) {
        var n = e.config.segment;
        if (!n) return t();
        ! function(e, t) {
            var n = e.config.segment;
            if (!n) return t();
            var i = function(n) {
                    var i = function() {
                        return n.anonymousId() || Ue()
                    };
                    e.config.get_device_id = i, n.id() && (e.register({
                        distinct_id: n.id(),
                        $device_id: i()
                    }), e.persistence.set_property(Ee, "identified")), t()
                },
                r = n.user();
            "then" in r && y(r.then) ? r.then((function(e) {
                return i(e)
            })) : i(r)
        }(e, (function() {
            n.register(function(e) {
                Promise && Promise.resolve || U.warn("This browser does not have Promise support, and can not use the segment integration");
                var t = function(t, n) {
                    var i;
                    if (!n) return t;
                    t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(), t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
                        distinct_id: t.event.userId
                    }), e.reloadFeatureFlags());
                    var r = e._calculate_event_properties(n, null !== (i = t.event.properties) && void 0 !== i ? i : {});
                    return t.event.properties = Object.assign({}, r, t.event.properties), t
                };
                return {
                    name: "PostHog JS",
                    type: "enrichment",
                    version: "1.0.0",
                    isLoaded: function() {
                        return !0
                    },
                    load: function() {
                        return Promise.resolve()
                    },
                    track: function(e) {
                        return t(e, e.event.event)
                    },
                    page: function(e) {
                        return t(e, "$pageview")
                    },
                    identify: function(e) {
                        return t(e, "$identify")
                    },
                    screen: function(e) {
                        return t(e, "$screen")
                    }
                }
            }(e)).then((function() {
                t()
            }))
        }))
    }
    var _r = function() {
        function e(t) {
            i(this, e), this._instance = t
        }
        return s(e, [{
            key: "doPageView",
            value: function() {
                var e, t = this._previousScrollProperties();
                return this._currentPath = null !== (e = null == I ? void 0 : I.location.pathname) && void 0 !== e ? e : "", this._instance.scrollManager.resetContext(), t
            }
        }, {
            key: "doPageLeave",
            value: function() {
                return this._previousScrollProperties()
            }
        }, {
            key: "_previousScrollProperties",
            value: function() {
                var e = this._currentPath,
                    t = this._instance.scrollManager.getContext();
                if (!e || !t) return {};
                var n = t.maxScrollHeight,
                    i = t.lastScrollY,
                    r = t.maxScrollY,
                    s = t.maxContentHeight,
                    o = t.lastContentY,
                    a = t.maxContentY;
                return w(n) || w(i) || w(r) || w(s) || w(o) || w(a) ? {} : (n = Math.ceil(n), i = Math.ceil(i), r = Math.ceil(r), s = Math.ceil(s), o = Math.ceil(o), a = Math.ceil(a), {
                    $prev_pageview_pathname: e,
                    $prev_pageview_last_scroll: i,
                    $prev_pageview_last_scroll_percentage: n <= 1 ? 1 : mr(i / n, 0, 1),
                    $prev_pageview_max_scroll: r,
                    $prev_pageview_max_scroll_percentage: n <= 1 ? 1 : mr(r / n, 0, 1),
                    $prev_pageview_last_content: o,
                    $prev_pageview_last_content_percentage: s <= 1 ? 1 : mr(o / s, 0, 1),
                    $prev_pageview_max_content: a,
                    $prev_pageview_max_content_percentage: s <= 1 ? 1 : mr(a / s, 0, 1)
                })
            }
        }]), e
    }();

    function mr(e, t, n) {
        return Math.max(t, Math.min(e, n))
    }
    var yr = {
            icontains: function(e) {
                return !!I && I.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
            },
            regex: function(e) {
                return !!I && at(I.location.href, e)
            },
            exact: function(e) {
                return (null == I ? void 0 : I.location.href) === e
            }
        },
        br = function() {
            function e(t) {
                i(this, e), this.instance = t
            }
            return s(e, [{
                key: "afterDecideResponse",
                value: function(e) {
                    this._decideServerResponse = !!e.surveys, this.loadIfEnabled()
                }
            }, {
                key: "loadIfEnabled",
                value: function() {
                    var e = this,
                        t = null == H ? void 0 : H.extendPostHogWithSurveys;
                    this.instance.config.disable_surveys || !this._decideServerResponse || t || se(this.instance.requestRouter.endpointFor("assets", "/static/surveys.js"), (function(t) {
                        if (t) return U.error("Could not load surveys script", t);
                        H.extendPostHogWithSurveys(e.instance)
                    }))
                }
            }, {
                key: "getSurveys",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.instance.config.disable_surveys) return e([]);
                    var i = this.instance.get_property(Se);
                    if (i && !n) return e(i);
                    this.instance._send_request({
                        url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
                        method: "GET",
                        transport: "XHR",
                        callback: function(n) {
                            var i;
                            if (200 !== n.statusCode || !n.json) return e([]);
                            var r = n.json.surveys || [];
                            return null === (i = t.instance.persistence) || void 0 === i || i.register(o({}, Se, r)), e(r)
                        }
                    })
                }
            }, {
                key: "getActiveMatchingSurveys",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.getSurveys((function(n) {
                        var i = n.filter((function(e) {
                            return !(!e.start_date || e.end_date)
                        })).filter((function(e) {
                            var t, n, i, r;
                            if (!e.conditions) return !0;
                            var s = null === (t = e.conditions) || void 0 === t || !t.url || yr[null !== (n = null === (i = e.conditions) || void 0 === i ? void 0 : i.urlMatchType) && void 0 !== n ? n : "icontains"](e.conditions.url),
                                o = null === (r = e.conditions) || void 0 === r || !r.selector || (null == q ? void 0 : q.querySelector(e.conditions.selector));
                            return s && o
                        })).filter((function(e) {
                            if (!e.linked_flag_key && !e.targeting_flag_key) return !0;
                            var n = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),
                                i = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key);
                            return n && i
                        }));
                        return e(i)
                    }), n)
                }
            }]), e
        }(),
        kr = function() {
            function e(t) {
                var n, r, s = this;
                i(this, e), o(this, "serverLimits", {}), o(this, "lastEventRateLimited", !1), o(this, "checkForLimiting", (function(e) {
                    var t = e.text;
                    if (t && t.length) try {
                        (JSON.parse(t).quota_limited || []).forEach((function(e) {
                            U.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), s.serverLimits[e] = (new Date).getTime() + 6e4
                        }))
                    } catch (e) {
                        return void U.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
                            text: t
                        })
                    }
                })), this.instance = t, this.captureEventsPerSecond = (null === (n = t.config.rate_limiting) || void 0 === n ? void 0 : n.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (r = t.config.rate_limiting) || void 0 === r ? void 0 : r.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.isCaptureClientSideRateLimited(!0)
            }
            return s(e, [{
                key: "isCaptureClientSideRateLimited",
                value: function() {
                    var e, t, n, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        r = (new Date).getTime(),
                        s = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(xe)) && void 0 !== e ? e : {
                            tokens: this.captureEventsBurstLimit,
                            last: r
                        };
                    s.tokens += (r - s.last) / 1e3 * this.captureEventsPerSecond, s.last = r, s.tokens > this.captureEventsBurstLimit && (s.tokens = this.captureEventsBurstLimit);
                    var o = s.tokens < 1;
                    return o || i || (s.tokens = Math.max(0, s.tokens - 1)), !o || this.lastEventRateLimited || i || this.instance.capture("$$client_ingestion_warning", {
                        $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
                    }, {
                        skip_client_rate_limiting: !0
                    }), this.lastEventRateLimited = o, null === (n = this.instance.persistence) || void 0 === n || n.set_property(xe, s), o
                }
            }, {
                key: "isServerRateLimited",
                value: function(e) {
                    var t = this.serverLimits[e || "events"] || !1;
                    return !1 !== t && (new Date).getTime() < t
                }
            }]), e
        }(),
        wr = function() {
            return t({
                initialPathName: (null == A ? void 0 : A.pathname) || "",
                referringDomain: ln.referringDomain()
            }, ln.campaignParams())
        },
        Sr = function() {
            function e(t, n, r) {
                var s = this;
                i(this, e), o(this, "_onSessionIdCallback", (function(e) {
                    var t = s._getStoredProps();
                    if (!t || t.sessionId !== e) {
                        var n = {
                            sessionId: e,
                            props: s._sessionSourceParamGenerator()
                        };
                        s._persistence.register(o({}, Re, n))
                    }
                })), this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = r || wr, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
            }
            return s(e, [{
                key: "_getStoredProps",
                value: function() {
                    return this._persistence.props[Re]
                }
            }, {
                key: "getSessionProps",
                value: function() {
                    var e, t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
                    return t ? {
                        $client_session_initial_referring_host: t.referringDomain,
                        $client_session_initial_pathname: t.initialPathName,
                        $client_session_initial_utm_source: t.utm_source,
                        $client_session_initial_utm_campaign: t.utm_campaign,
                        $client_session_initial_utm_medium: t.utm_medium,
                        $client_session_initial_utm_content: t.utm_content,
                        $client_session_initial_utm_term: t.utm_term
                    } : {}
                }
            }]), e
        }(),
        Fr = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"],
        Er = function(e, t) {
            if (!e) return !1;
            var n = e.toLowerCase();
            return Fr.concat(t || []).some((function(e) {
                var t = e.toLowerCase();
                return -1 !== n.indexOf(t)
            }))
        },
        Rr = function() {
            function e() {
                i(this, e), this.clicks = []
            }
            return s(e, [{
                key: "isRageClick",
                value: function(e, t, n) {
                    var i = this.clicks[this.clicks.length - 1];
                    if (i && Math.abs(e - i.x) + Math.abs(t - i.y) < 30 && n - i.timestamp < 1e3) {
                        if (this.clicks.push({
                                x: e,
                                y: t,
                                timestamp: n
                            }), 3 === this.clicks.length) return !0
                    } else this.clicks = [{
                        x: e,
                        y: t,
                        timestamp: n
                    }];
                    return !1
                }
            }]), e
        }();
    var xr = "__POSTHOG_TOOLBAR__";

    function Pr(e) {
        var t;
        return e.id === xr || !(null === (t = e.closest) || void 0 === t || !t.call(e, "#" + xr))
    }
    var Ir = function() {
            function e(t) {
                var n;
                i(this, e), o(this, "rageclicks", new Rr), o(this, "_enabledServerSide", !1), o(this, "_initialized", !1), this.instance = t, this._enabledServerSide = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[ce])
            }
            return s(e, [{
                key: "startIfEnabled",
                value: function() {
                    this.isEnabled && !this._initialized && this._setupListeners()
                }
            }, {
                key: "isEnabled",
                get: function() {
                    return w(this.instance.config.__preview_heatmaps) ? this._enabledServerSide : this.instance.config.__preview_heatmaps
                }
            }, {
                key: "afterDecideResponse",
                value: function(e) {
                    var t = !!e.heatmaps;
                    this.instance.persistence && this.instance.persistence.register(o({}, ce, t)), this._enabledServerSide = t, this.startIfEnabled()
                }
            }, {
                key: "getAndClearBuffer",
                value: function() {
                    var e = this.buffer;
                    return this.buffer = void 0, e
                }
            }, {
                key: "_setupListeners",
                value: function() {
                    var e = this;
                    I && q && (re(q, "click", (function(t) {
                        return e._onClick(t || (null == I ? void 0 : I.event))
                    }), !1, !0), re(q, "mousemove", (function(t) {
                        return e._onMouseMove(t || (null == I ? void 0 : I.event))
                    }), !1, !0), this._initialized = !0)
                }
            }, {
                key: "_getProperties",
                value: function(e, t) {
                    var n = this.instance.scrollManager.scrollY(),
                        i = this.instance.scrollManager.scrollX(),
                        r = this.instance.scrollManager.scrollElement(),
                        s = function(e, t, n) {
                            for (var i = e; i && !kn(i, "body");) {
                                if (i === n) return !1;
                                if (J(t, null == I ? void 0 : I.getComputedStyle(i).position)) return !0;
                                i = En(i)
                            }
                            return !1
                        }(e.target, ["fixed", "sticky"], r);
                    return {
                        x: e.clientX + (s ? 0 : i),
                        y: e.clientY + (s ? 0 : n),
                        target_fixed: s,
                        type: t
                    }
                }
            }, {
                key: "_onClick",
                value: function(e) {
                    var n;
                    if (!Pr(e.target)) {
                        var i = this._getProperties(e, "click");
                        null !== (n = this.rageclicks) && void 0 !== n && n.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(t(t({}, i), {}, {
                            type: "rageclick"
                        })), this._capture(i)
                    }
                }
            }, {
                key: "_onMouseMove",
                value: function(e) {
                    var t = this;
                    Pr(e.target) || (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout((function() {
                        t._capture(t._getProperties(e, "mousemove"))
                    }), 500))
                }
            }, {
                key: "_capture",
                value: function(e) {
                    if (I) {
                        var t = I.location.href;
                        this.buffer = this.buffer || {}, this.buffer[t] || (this.buffer[t] = []), this.buffer[t].push(e)
                    }
                }
            }]), e
        }(),
        Cr = function() {
            function e(t) {
                var n = this;
                i(this, e), o(this, "_updateScrollData", (function() {
                    var e, t, i, r;
                    n.context || (n.context = {});
                    var s = n.scrollElement(),
                        o = n.scrollY(),
                        a = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0,
                        u = o + ((null == s ? void 0 : s.clientHeight) || 0),
                        l = (null == s ? void 0 : s.scrollHeight) || 0;
                    n.context.lastScrollY = Math.ceil(o), n.context.maxScrollY = Math.max(o, null !== (e = n.context.maxScrollY) && void 0 !== e ? e : 0), n.context.maxScrollHeight = Math.max(a, null !== (t = n.context.maxScrollHeight) && void 0 !== t ? t : 0), n.context.lastContentY = u, n.context.maxContentY = Math.max(u, null !== (i = n.context.maxContentY) && void 0 !== i ? i : 0), n.context.maxContentHeight = Math.max(l, null !== (r = n.context.maxContentHeight) && void 0 !== r ? r : 0)
                })), this.instance = t
            }
            return s(e, [{
                key: "getContext",
                value: function() {
                    return this.context
                }
            }, {
                key: "resetContext",
                value: function() {
                    var e = this.context;
                    return setTimeout(this._updateScrollData, 0), e
                }
            }, {
                key: "startMeasuringScrollPosition",
                value: function() {
                    null == I || I.addEventListener("scroll", this._updateScrollData, !0), null == I || I.addEventListener("scrollend", this._updateScrollData, !0), null == I || I.addEventListener("resize", this._updateScrollData)
                }
            }, {
                key: "scrollElement",
                value: function() {
                    if (!this.instance.config.scroll_root_selector) return null == I ? void 0 : I.document.documentElement;
                    var e, t = h(m(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector]);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value,
                                i = null == I ? void 0 : I.document.querySelector(n);
                            if (i) return i
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                }
            }, {
                key: "scrollY",
                value: function() {
                    if (this.instance.config.scroll_root_selector) {
                        var e = this.scrollElement();
                        return e && e.scrollTop || 0
                    }
                    return I && (I.scrollY || I.pageYOffset || I.document.documentElement.scrollTop) || 0
                }
            }, {
                key: "scrollX",
                value: function() {
                    if (this.instance.config.scroll_root_selector) {
                        var e = this.scrollElement();
                        return e && e.scrollLeft || 0
                    }
                    return I && (I.scrollX || I.pageXOffset || I.document.documentElement.scrollLeft) || 0
                }
            }]), e
        }(),
        $r = function() {
            function e() {
                i(this, e), o(this, "events", {}), this.events = {}
            }
            return s(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    return this.events[e] || (this.events[e] = []), this.events[e].push(t),
                        function() {
                            n.events[e] = n.events[e].filter((function(e) {
                                return e !== t
                            }))
                        }
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    var n, i = h(this.events[e] || []);
                    try {
                        for (i.s(); !(n = i.n()).done;) {
                            (0, n.value)(t)
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    var r, s = h(this.events["*"] || []);
                    try {
                        for (s.s(); !(r = s.n()).done;) {
                            (0, r.value)(e, t)
                        }
                    } catch (e) {
                        s.e(e)
                    } finally {
                        s.f()
                    }
                }
            }]), e
        }(),
        Tr = "$copy_autocapture";

    function Mr(e, t) {
        return t.length > e ? t.slice(0, e) + "..." : t
    }
    var Or = function() {
            function e(t) {
                i(this, e), o(this, "_initialized", !1), o(this, "_isDisabledServerSide", null), o(this, "rageclicks", new Rr), o(this, "_elementsChainAsString", !1), this.instance = t
            }
            return s(e, [{
                key: "config",
                get: function() {
                    var e, t = b(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                    return t.url_allowlist = null === (e = t.url_allowlist) || void 0 === e ? void 0 : e.map((function(e) {
                        return new RegExp(e)
                    })), t
                }
            }, {
                key: "_addDomEventHandlers",
                value: function() {
                    var e = this;
                    if (this.isBrowserSupported()) {
                        if (I && q) {
                            var t = function(t) {
                                    t = t || (null == I ? void 0 : I.event);
                                    try {
                                        e._captureEvent(t)
                                    } catch (e) {
                                        U.error("Failed to capture event", e)
                                    }
                                },
                                n = function(t) {
                                    t = t || (null == I ? void 0 : I.event), e._captureEvent(t, Tr)
                                };
                            re(q, "submit", t, !1, !0), re(q, "change", t, !1, !0), re(q, "click", t, !1, !0), this.config.capture_copied_text && (re(q, "copy", n, !1, !0), re(q, "cut", n, !1, !0))
                        }
                    } else U.info("Disabling Automatic Event Collection because this browser is not supported")
                }
            }, {
                key: "startIfEnabled",
                value: function() {
                    this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
                }
            }, {
                key: "afterDecideResponse",
                value: function(e) {
                    e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register(o({}, le, !!e.autocapture_opt_out)), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled()
                }
            }, {
                key: "isEnabled",
                get: function() {
                    var e, t, n = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[le],
                        i = this._isDisabledServerSide;
                    if (F(i) && !x(n) && !this.instance.config.advanced_disable_decide) return !1;
                    var r = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!n;
                    return !!this.instance.config.autocapture && !r
                }
            }, {
                key: "_previousElementSibling",
                value: function(e) {
                    if (e.previousElementSibling) return e.previousElementSibling;
                    var t = e;
                    do {
                        t = t.previousSibling
                    } while (t && !bn(t));
                    return t
                }
            }, {
                key: "_getAugmentPropertiesFromElement",
                value: function(e) {
                    if (!xn(e)) return {};
                    var t = {};
                    return V(e.attributes, (function(e) {
                        if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
                            var n = e.name.replace("data-ph-capture-attribute-", ""),
                                i = e.value;
                            n && i && qn(i) && (t[n] = i)
                        }
                    })), t
                }
            }, {
                key: "_getPropertiesFromElement",
                value: function(e, t, n) {
                    var i, r = e.tagName.toLowerCase(),
                        s = {
                            tag_name: r
                        };
                    Fn.indexOf(r) > -1 && !n && ("a" === r.toLowerCase() || "button" === r.toLowerCase() ? s.$el_text = Mr(1024, An(e)) : s.$el_text = Mr(1024, yn(e)));
                    var o = _n(e);
                    o.length > 0 && (s.classes = o.filter((function(e) {
                        return "" !== e
                    })));
                    var a = null === (i = this.config) || void 0 === i ? void 0 : i.element_attribute_ignorelist;
                    V(e.attributes, (function(n) {
                        var i;
                        if ((!Pn(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(n.name)) && ((null == a || !a.includes(n.name)) && !t && qn(n.value) && (i = n.name, !S(i) || "_ngcontent" !== i.substring(0, 10) && "_nghost" !== i.substring(0, 7)))) {
                            var r = n.value;
                            "class" === n.name && (r = gn(r).join(" ")), s["attr__" + n.name] = Mr(1024, r)
                        }
                    }));
                    for (var u = 1, l = 1, c = e; c = this._previousElementSibling(c);) u++, c.tagName === e.tagName && l++;
                    return s.nth_child = u, s.nth_of_type = l, s
                }
            }, {
                key: "_getDefaultProperties",
                value: function(e) {
                    return {
                        $event_type: e,
                        $ce_version: 1
                    }
                }
            }, {
                key: "_getEventTarget",
                value: function(e) {
                    return w(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null;
                    var t
                }
            }, {
                key: "_captureEvent",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
                    if (this.isEnabled) {
                        var i, r = this._getEventTarget(e);
                        if (wn(r) && (r = r.parentNode || null), "$autocapture" === n && "click" === e.type && e instanceof MouseEvent) this.instance.config.rageclick && null !== (i = this.rageclicks) && void 0 !== i && i.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, "$rageclick");
                        var s = n === Tr;
                        if (r && Rn(r, e, this.config, s, s ? ["copy", "cut"] : void 0)) {
                            for (var o, a, u = [r], l = r; l.parentNode && !kn(l, "body");) Sn(l.parentNode) ? (u.push(l.parentNode.host), l = l.parentNode.host) : (u.push(l.parentNode), l = l.parentNode);
                            var c, d = [],
                                h = {},
                                f = !1;
                            if (V(u, (function(e) {
                                    var n = xn(e);
                                    "a" === e.tagName.toLowerCase() && (c = e.getAttribute("href"), c = n && qn(c) && c), J(_n(e), "ph-no-capture") && (f = !0), d.push(t._getPropertiesFromElement(e, t.instance.config.mask_all_element_attributes, t.instance.config.mask_all_text));
                                    var i = t._getAugmentPropertiesFromElement(e);
                                    Q(h, i)
                                })), this.instance.config.mask_all_text || ("a" === r.tagName.toLowerCase() || "button" === r.tagName.toLowerCase() ? d[0].$el_text = An(r) : d[0].$el_text = yn(r)), c && (d[0].attr__href = c), f) return !1;
                            var p = Q(this._getDefaultProperties(e.type), this._elementsChainAsString ? {
                                $elements_chain: Bn(d)
                            } : {
                                $elements: d
                            }, null !== (o = d[0]) && void 0 !== o && o.$el_text ? {
                                $el_text: null === (a = d[0]) || void 0 === a ? void 0 : a.$el_text
                            } : {}, h);
                            if (n === Tr) {
                                var v, g = mn(null == I || null === (v = I.getSelection()) || void 0 === v ? void 0 : v.toString()),
                                    _ = e.type || "clipboard";
                                if (!g) return !1;
                                p.$selected_content = g, p.$copy_type = _
                            }
                            return this.instance.capture(n, p), !0
                        }
                    }
                }
            }, {
                key: "isBrowserSupported",
                value: function() {
                    return y(null == q ? void 0 : q.querySelectorAll)
                }
            }]), e
        }(),
        qr = {},
        Ar = function() {},
        Lr = "posthog",
        Br = !Zi && -1 === (null == N ? void 0 : N.indexOf("MSIE")) && -1 === (null == N ? void 0 : N.indexOf("Mozilla")),
        Dr = function() {
            var e, t, n;
            return {
                api_host: "https://us.i.posthog.com",
                api_transport: "XHR",
                ui_host: null,
                token: "",
                autocapture: !0,
                rageclick: !0,
                cross_subdomain_cookie: (t = null == q ? void 0 : q.location, n = null == t ? void 0 : t.hostname, !!S(n) && "herokuapp.com" !== n.split(".").slice(-2).join(".")),
                persistence: "localStorage+cookie",
                persistence_name: "",
                loaded: Ar,
                store_google: !0,
                custom_campaign_params: [],
                custom_blocked_useragents: [],
                save_referrer: !0,
                capture_pageview: !0,
                capture_pageleave: !0,
                debug: A && S(null == A ? void 0 : A.search) && -1 !== A.search.indexOf("__posthog_debug=true") || !1,
                verbose: !1,
                cookie_expiration: 365,
                upgrade: !1,
                disable_session_recording: !1,
                disable_persistence: !1,
                disable_surveys: !1,
                enable_recording_console_log: void 0,
                secure_cookie: "https:" === (null == I || null === (e = I.location) || void 0 === e ? void 0 : e.protocol),
                ip: !0,
                opt_out_capturing_by_default: !1,
                opt_out_persistence_by_default: !1,
                opt_out_useragent_filter: !1,
                opt_out_capturing_persistence_type: "localStorage",
                opt_out_capturing_cookie_prefix: null,
                opt_in_site_apps: !1,
                property_denylist: [],
                respect_dnt: !1,
                sanitize_properties: null,
                request_headers: {},
                inapp_protocol: "//",
                inapp_link_new_window: !1,
                request_batching: !0,
                properties_string_max_length: 65535,
                session_recording: {},
                mask_all_element_attributes: !1,
                mask_all_text: !1,
                advanced_disable_decide: !1,
                advanced_disable_feature_flags: !1,
                advanced_disable_feature_flags_on_first_load: !1,
                advanced_disable_toolbar_metrics: !1,
                feature_flag_request_timeout_ms: 3e3,
                on_request_error: function(e) {
                    var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
                    U.error(t)
                },
                get_device_id: function(e) {
                    return e
                },
                _onCapture: Ar,
                capture_performance: void 0,
                name: "posthog",
                bootstrap: {},
                disable_compression: !1,
                session_idle_timeout_seconds: 1800,
                person_profiles: "always"
            }
        },
        Nr = function(e) {
            var t = {};
            w(e.process_person) || (t.person_profiles = e.process_person), w(e.xhr_headers) || (t.request_headers = e.xhr_headers), w(e.cookie_name) || (t.persistence_name = e.cookie_name), w(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
            var n = Q({}, t, e);
            return m(e.property_blacklist) && (w(e.property_denylist) ? n.property_denylist = e.property_blacklist : m(e.property_denylist) ? n.property_denylist = [].concat(l(e.property_blacklist), l(e.property_denylist)) : U.error("Invalid value for property_denylist config: " + e.property_denylist)), n
        },
        Hr = function() {
            function e() {
                i(this, e), o(this, "__forceAllowLocalhost", !1)
            }
            return s(e, [{
                key: "_forceAllowLocalhost",
                get: function() {
                    return this.__forceAllowLocalhost
                },
                set: function(e) {
                    U.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
                }
            }]), e
        }(),
        jr = function() {
            function e() {
                var t = this;
                i(this, e), o(this, "webPerformance", new Hr), o(this, "_debugEventEmitter", new $r), this.config = Dr(), this.decideEndpointWasHit = !1, this.SentryIntegration = vr, this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.featureFlags = new Ae(this), this.toolbar = new gi(this), this.scrollManager = new Cr(this), this.pageViewManager = new _r(this), this.surveys = new br(this), this.rateLimiter = new kr(this), this.requestRouter = new pr(this), this.people = {
                    set: function(e, n, i) {
                        var r = S(e) ? o({}, e, n) : e;
                        t.setPersonProperties(r), null == i || i({})
                    },
                    set_once: function(e, n, i) {
                        var r = S(e) ? o({}, e, n) : e;
                        t.setPersonProperties(void 0, r), null == i || i({})
                    }
                }, this.on("eventCaptured", (function(e) {
                    return U.info("send", e)
                }))
            }
            return s(e, [{
                key: "init",
                value: function(t, n, i) {
                    if (i && i !== Lr) {
                        var r, s = null !== (r = qr[i]) && void 0 !== r ? r : new e;
                        return s._init(t, n, i), qr[i] = s, qr[Lr][i] = s, s
                    }
                    return this._init(t, n, i)
                }
            }, {
                key: "_init",
                value: function(e) {
                    var n, i, r = this,
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = arguments.length > 2 ? arguments[2] : void 0;
                    if (w(e) || function(e) {
                            return S(e) && 0 === e.trim().length
                        }(e)) return U.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
                    if (this.__loaded) return U.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
                    if (this.__loaded = !0, this.config = {}, this._triggered_notifs = [], this.set_config(Q({}, Dr(), Nr(s), {
                            name: o,
                            token: e
                        })), this.compression = s.disable_compression ? void 0 : ne.Base64, this.persistence = new dn(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new dn(t(t({}, this.config), {}, {
                            persistence: "sessionStorage"
                        })), this._requestQueue = new _i((function(e) {
                            return r._send_request(e)
                        })), this._retryQueue = new cr(this), this.__request_queue = [], this.sessionManager = new hr(this.config, this.persistence), this.sessionPropsManager = new Sr(this.sessionManager, this.persistence), this.sessionRecording = new hi(this), this.sessionRecording.startIfEnabledOrStop(), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new Or(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new Ir(this), this.heatmaps.startIfEnabled(), f.DEBUG = f.DEBUG || this.config.debug, this._gdpr_init(), void 0 !== (null === (n = s.bootstrap) || void 0 === n ? void 0 : n.distinctID)) {
                        var a, u, l = this.config.get_device_id(Ue()),
                            c = null !== (a = s.bootstrap) && void 0 !== a && a.isIdentifiedID ? l : s.bootstrap.distinctID;
                        this.persistence.set_property(Ee, null !== (u = s.bootstrap) && void 0 !== u && u.isIdentifiedID ? "identified" : "anonymous"), this.register({
                            distinct_id: s.bootstrap.distinctID,
                            $device_id: c
                        })
                    }
                    if (this._hasBootstrappedFeatureFlags()) {
                        var d, h, p = Object.keys((null === (d = s.bootstrap) || void 0 === d ? void 0 : d.featureFlags) || {}).filter((function(e) {
                                var t, n;
                                return !(null === (t = s.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e])
                            })).reduce((function(e, t) {
                                var n, i;
                                return e[t] = (null === (n = s.bootstrap) || void 0 === n || null === (i = n.featureFlags) || void 0 === i ? void 0 : i[t]) || !1, e
                            }), {}),
                            v = Object.keys((null === (h = s.bootstrap) || void 0 === h ? void 0 : h.featureFlagPayloads) || {}).filter((function(e) {
                                return p[e]
                            })).reduce((function(e, t) {
                                var n, i, r, o;
                                null !== (n = s.bootstrap) && void 0 !== n && null !== (i = n.featureFlagPayloads) && void 0 !== i && i[t] && (e[t] = null === (r = s.bootstrap) || void 0 === r || null === (o = r.featureFlagPayloads) || void 0 === o ? void 0 : o[t]);
                                return e
                            }), {});
                        this.featureFlags.receivedFeatureFlags({
                            featureFlags: p,
                            featureFlagPayloads: v
                        })
                    }
                    if (!this.get_distinct_id()) {
                        var g = this.config.get_device_id(Ue());
                        this.register_once({
                            distinct_id: g,
                            $device_id: g
                        }, ""), this.persistence.set_property(Ee, "anonymous")
                    }
                    return null == I || null === (i = I.addEventListener) || void 0 === i || i.call(I, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), this.toolbar.maybeLoadToolbar(), s.segment ? gr(this, (function() {
                        return r._loaded()
                    })) : this._loaded(), y(this.config._onCapture) && this.on("eventCaptured", (function(e) {
                        return r.config._onCapture(e.event, e)
                    })), this
                }
            }, {
                key: "_afterDecideResponse",
                value: function(e) {
                    var t, n, i, r, s;
                    this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = J(e.supportedCompression, ne.GZipJS) ? ne.GZipJS : J(e.supportedCompression, ne.Base64) ? ne.Base64 : void 0), null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), null === (n = this.sessionRecording) || void 0 === n || n.afterDecideResponse(e), null === (i = this.autocapture) || void 0 === i || i.afterDecideResponse(e), null === (r = this.heatmaps) || void 0 === r || r.afterDecideResponse(e), null === (s = this.surveys) || void 0 === s || s.afterDecideResponse(e)
                }
            }, {
                key: "_loaded",
                value: function() {
                    var e = this,
                        t = this.config.advanced_disable_decide;
                    t || this.featureFlags.setReloadingPaused(!0);
                    try {
                        this.config.loaded(this)
                    } catch (e) {
                        U.critical("`loaded` function failed", e)
                    }
                    this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout((function() {
                        q && e.capture("$pageview", {
                            title: q.title
                        }, {
                            send_instantly: !0
                        })
                    }), 1), t || (new fi(this).call(), this.featureFlags.resetRequestQueue())
                }
            }, {
                key: "_start_queue_if_opted_in",
                value: function() {
                    var e;
                    this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable())
                }
            }, {
                key: "_dom_loaded",
                value: function() {
                    var e = this;
                    this.has_opted_out_capturing() || G(this.__request_queue, (function(t) {
                        return e._send_retriable_request(t)
                    })), this.__request_queue = [], this._start_queue_if_opted_in()
                }
            }, {
                key: "_handle_unload",
                value: function() {
                    var e, t;
                    this.config.request_batching ? (this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave"), null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave", null, {
                        transport: "sendBeacon"
                    })
                }
            }, {
                key: "_send_request",
                value: function(e) {
                    var n = this;
                    this.__loaded && (Br ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = tr(e.url, {
                        ip: this.config.ip ? 1 : 0
                    }), e.headers = this.config.request_headers, e.compression = "best-available" === e.compression ? this.compression : e.compression, function(e) {
                        var n = t({}, e);
                        n.timeout = n.timeout || 6e4, n.url = tr(n.url, {
                            _: (new Date).getTime().toString(),
                            ver: f.LIB_VERSION,
                            compression: n.compression
                        }), "sendBeacon" === n.transport && null != O && O.sendBeacon ? or(n) : "fetch" === n.transport && L ? sr(n) : B || !q ? rr(n) : ar(n)
                    }(t(t({}, e), {}, {
                        callback: function(t) {
                            var i, r, s;
                            (n.rateLimiter.checkForLimiting(t), t.statusCode >= 400) && (null === (r = (s = n.config).on_request_error) || void 0 === r || r.call(s, t));
                            null === (i = e.callback) || void 0 === i || i.call(e, t)
                        }
                    }))))
                }
            }, {
                key: "_send_retriable_request",
                value: function(e) {
                    this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
                }
            }, {
                key: "_execute_array",
                value: function(e) {
                    var t, n = this,
                        i = [],
                        r = [],
                        s = [];
                    G(e, (function(e) {
                        e && (t = e[0], m(t) ? s.push(e) : y(e) ? e.call(n) : m(e) && "alias" === t ? i.push(e) : m(e) && -1 !== t.indexOf("capture") && y(n[t]) ? s.push(e) : r.push(e))
                    }));
                    var o = function(e, t) {
                        G(e, (function(e) {
                            if (m(e[0])) {
                                var n = t;
                                V(e, (function(e) {
                                    n = n[e[0]].apply(n, e.slice(1))
                                }))
                            } else this[e[0]].apply(this, e.slice(1))
                        }), t)
                    };
                    o(i, this), o(r, this), o(s, this)
                }
            }, {
                key: "_hasBootstrappedFeatureFlags",
                value: function() {
                    var e, t;
                    return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
                }
            }, {
                key: "push",
                value: function(e) {
                    this._execute_array([e])
                }
            }, {
                key: "capture",
                value: function(e, n, i) {
                    var r;
                    if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return U.uninitializedWarning("posthog.capture");
                    if (!si(this))
                        if (null != i && i.skip_client_rate_limiting || !this.rateLimiter.isCaptureClientSideRateLimited())
                            if (!w(e) && S(e)) {
                                if (!N || this.config.opt_out_useragent_filter || !Er(N, this.config.custom_blocked_useragents)) {
                                    this.sessionPersistence.update_search_keyword(), this.config.store_google && (this.sessionPersistence.update_campaign_params(), this.persistence.set_initial_campaign_params()), this.config.save_referrer && (this.sessionPersistence.update_referrer_info(), this.persistence.set_initial_referrer_info());
                                    var s = {
                                        uuid: Ue(),
                                        event: e,
                                        properties: this._calculate_event_properties(e, n || {})
                                    };
                                    if (null == i || !i._noHeatmaps) {
                                        var o, a = null === (o = this.heatmaps) || void 0 === o ? void 0 : o.getAndClearBuffer();
                                        a && (s.properties.$heatmap_data = a)
                                    }(null == i ? void 0 : i.$set) && (s.$set = null == i ? void 0 : i.$set);
                                    var u = this._calculate_set_once_properties(null == i ? void 0 : i.$set_once);
                                    u && (s.$set_once = u), (s = te(s, null != i && i._noTruncate ? null : this.config.properties_string_max_length)).timestamp = (null == i ? void 0 : i.timestamp) || new Date, w(null == i ? void 0 : i.timestamp) || (s.properties.$event_time_override_provided = !0, s.properties.$event_time_override_system_time = new Date);
                                    var l = t(t({}, s.properties.$set), s.$set);
                                    k(l) || this.setPersonPropertiesForFlags(l), this._debugEventEmitter.emit("eventCaptured", s);
                                    var c = {
                                        method: "POST",
                                        url: null !== (r = null == i ? void 0 : i._url) && void 0 !== r ? r : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                        data: s,
                                        compression: "best-available",
                                        batchKey: null == i ? void 0 : i._batchKey
                                    };
                                    return !this.config.request_batching || i && (null == i || !i._batchKey) || null != i && i.send_instantly ? this._send_retriable_request(c) : this._requestQueue.enqueue(c), s
                                }
                            } else U.error("No event name provided to posthog.capture");
                    else U.critical("This capture call is ignored due to client rate limiting.")
                }
            }, {
                key: "_addCaptureHook",
                value: function(e) {
                    this.on("eventCaptured", (function(t) {
                        return e(t.event)
                    }))
                }
            }, {
                key: "_calculate_event_properties",
                value: function(e, n) {
                    if (!this.persistence || !this.sessionPersistence) return n;
                    var i = this.persistence.remove_event_timer(e),
                        r = t({}, n);
                    if (r.token = this.config.token, "$snapshot" === e) {
                        var s = t(t({}, this.persistence.properties()), this.sessionPersistence.properties());
                        return r.distinct_id = s.distinct_id, r
                    }
                    var o = ln.properties();
                    if (this.sessionManager) {
                        var a = this.sessionManager.checkAndGetSessionAndWindowId(),
                            u = a.sessionId,
                            l = a.windowId;
                        r.$session_id = u, r.$window_id = l
                    }
                    if (this.requestRouter.region === lr.CUSTOM && (r.$lib_custom_api_host = this.config.api_host), this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
                        var c = this.sessionPropsManager.getSessionProps();
                        r = Q(r, c)
                    }
                    if (!this.config.disable_scroll_properties) {
                        var d = {};
                        "$pageview" === e ? d = this.pageViewManager.doPageView() : "$pageleave" === e && (d = this.pageViewManager.doPageLeave()), r = Q(r, d)
                    }
                    if ("$pageview" === e && q && (r.title = q.title), !w(i)) {
                        var h = (new Date).getTime() - i;
                        r.$duration = parseFloat((h / 1e3).toFixed(3))
                    }
                    N && this.config.opt_out_useragent_filter && (r.$browser_type = Er(N, this.config.custom_blocked_useragents) ? "bot" : "browser"), (r = Q({}, o, this.persistence.properties(), this.sessionPersistence.properties(), r)).$is_identified = this._isIdentified(), m(this.config.property_denylist) ? V(this.config.property_denylist, (function(e) {
                        delete r[e]
                    })) : U.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
                    var f = this.config.sanitize_properties;
                    return f && (r = f(r, e)), r.$process_person_profile = this._hasPersonProcessing(), r
                }
            }, {
                key: "_calculate_set_once_properties",
                value: function(e) {
                    if (!this.persistence || !this._hasPersonProcessing()) return e;
                    var t = Q({}, this.persistence.get_initial_props(), e || {});
                    return k(t) ? void 0 : t
                }
            }, {
                key: "register",
                value: function(e, t) {
                    var n;
                    null === (n = this.persistence) || void 0 === n || n.register(e, t)
                }
            }, {
                key: "register_once",
                value: function(e, t, n) {
                    var i;
                    null === (i = this.persistence) || void 0 === i || i.register_once(e, t, n)
                }
            }, {
                key: "register_for_session",
                value: function(e) {
                    var t;
                    null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
                }
            }, {
                key: "unregister",
                value: function(e) {
                    var t;
                    null === (t = this.persistence) || void 0 === t || t.unregister(e)
                }
            }, {
                key: "unregister_for_session",
                value: function(e) {
                    var t;
                    null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
                }
            }, {
                key: "_register_single",
                value: function(e, t) {
                    this.register(o({}, e, t))
                }
            }, {
                key: "getFeatureFlag",
                value: function(e, t) {
                    return this.featureFlags.getFeatureFlag(e, t)
                }
            }, {
                key: "getFeatureFlagPayload",
                value: function(e) {
                    var t = this.featureFlags.getFeatureFlagPayload(e);
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return t
                    }
                }
            }, {
                key: "isFeatureEnabled",
                value: function(e, t) {
                    return this.featureFlags.isFeatureEnabled(e, t)
                }
            }, {
                key: "reloadFeatureFlags",
                value: function() {
                    this.featureFlags.reloadFeatureFlags()
                }
            }, {
                key: "updateEarlyAccessFeatureEnrollment",
                value: function(e, t) {
                    this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                }
            }, {
                key: "getEarlyAccessFeatures",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.featureFlags.getEarlyAccessFeatures(e, t)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return this._debugEventEmitter.on(e, t)
                }
            }, {
                key: "onFeatureFlags",
                value: function(e) {
                    return this.featureFlags.onFeatureFlags(e)
                }
            }, {
                key: "onSessionId",
                value: function(e) {
                    var t, n;
                    return null !== (t = null === (n = this.sessionManager) || void 0 === n ? void 0 : n.onSessionId(e)) && void 0 !== t ? t : function() {}
                }
            }, {
                key: "getSurveys",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.surveys.getSurveys(e, t)
                }
            }, {
                key: "getActiveMatchingSurveys",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.surveys.getActiveMatchingSurveys(e, t)
                }
            }, {
                key: "identify",
                value: function(e, t, n) {
                    if (!this.__loaded || !this.persistence) return U.uninitializedWarning("posthog.identify");
                    if (R(e) && (e = e.toString(), U.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) {
                        if (["distinct_id", "distinctid"].includes(e.toLowerCase())) U.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
                        else if (this._requirePersonProcessing("posthog.identify")) {
                            var i = this.get_distinct_id();
                            if (this.register({
                                    $user_id: e
                                }), !this.get_property("$device_id")) {
                                var r = i;
                                this.register_once({
                                    $had_persisted_distinct_id: !0,
                                    $device_id: r
                                }, "")
                            }
                            e !== i && e !== this.get_property(ae) && (this.unregister(ae), this.register({
                                distinct_id: e
                            }));
                            var s = "anonymous" === (this.persistence.get_property(Ee) || "anonymous");
                            e !== i && s ? (this.persistence.set_property(Ee, "identified"), this.setPersonPropertiesForFlags(t || {}, !1), this.capture("$identify", {
                                distinct_id: e,
                                $anon_distinct_id: i
                            }, {
                                $set: t || {},
                                $set_once: n || {}
                            }), this.featureFlags.setAnonymousDistinctId(i)) : (t || n) && this.setPersonProperties(t, n), e !== i && (this.reloadFeatureFlags(), this.unregister(Fe))
                        }
                    } else U.error("Unique user id has not been set in posthog.identify")
                }
            }, {
                key: "setPersonProperties",
                value: function(e, t) {
                    (e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}), this.capture("$set", {
                        $set: e || {},
                        $set_once: t || {}
                    }))
                }
            }, {
                key: "group",
                value: function(e, n, i) {
                    if (e && n) {
                        if (this._requirePersonProcessing("posthog.group")) {
                            var r = this.getGroups();
                            r[e] !== n && this.resetGroupPropertiesForFlags(e), this.register({
                                $groups: t(t({}, r), {}, o({}, e, n))
                            }), i && (this.capture("$groupidentify", {
                                $group_type: e,
                                $group_key: n,
                                $group_set: i
                            }), this.setGroupPropertiesForFlags(o({}, e, i))), r[e] === n || i || this.reloadFeatureFlags()
                        }
                    } else U.error("posthog.group requires a group type and group key")
                }
            }, {
                key: "resetGroups",
                value: function() {
                    this.register({
                        $groups: {}
                    }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
                }
            }, {
                key: "setPersonPropertiesForFlags",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(e, t)
                }
            }, {
                key: "resetPersonPropertiesForFlags",
                value: function() {
                    this.featureFlags.resetPersonPropertiesForFlags()
                }
            }, {
                key: "setGroupPropertiesForFlags",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t)
                }
            }, {
                key: "resetGroupPropertiesForFlags",
                value: function(e) {
                    this.featureFlags.resetGroupPropertiesForFlags(e)
                }
            }, {
                key: "reset",
                value: function(e) {
                    var t, n, i, r;
                    if (!this.__loaded) return U.uninitializedWarning("posthog.reset");
                    var s = this.get_property("$device_id");
                    null === (t = this.persistence) || void 0 === t || t.clear(), null === (n = this.sessionPersistence) || void 0 === n || n.clear(), null === (i = this.persistence) || void 0 === i || i.set_property(Ee, "anonymous"), null === (r = this.sessionManager) || void 0 === r || r.resetSessionId();
                    var o = this.config.get_device_id(Ue());
                    this.register_once({
                        distinct_id: o,
                        $device_id: e ? o : s
                    }, "")
                }
            }, {
                key: "get_distinct_id",
                value: function() {
                    return this.get_property("distinct_id")
                }
            }, {
                key: "getGroups",
                value: function() {
                    return this.get_property("$groups") || {}
                }
            }, {
                key: "get_session_id",
                value: function() {
                    var e, t;
                    return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : ""
                }
            }, {
                key: "get_session_replay_url",
                value: function(e) {
                    if (!this.sessionManager) return "";
                    var t = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                        n = t.sessionId,
                        i = t.sessionStartTimestamp,
                        r = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(n));
                    if (null != e && e.withTimestamp && i) {
                        var s, o = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
                        if (!i) return r;
                        var a = Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - o, 0);
                        r += "?t=".concat(a)
                    }
                    return r
                }
            }, {
                key: "alias",
                value: function(e, t) {
                    return e === this.get_property(oe) ? (U.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (w(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(ae, e), this.capture("$create_alias", {
                        alias: e,
                        distinct_id: t
                    })) : (U.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
                }
            }, {
                key: "set_config",
                value: function(e) {
                    var n, i, r, s, o = t({}, this.config);
                    b(e) && (Q(this.config, Nr(e)), null === (n = this.persistence) || void 0 === n || n.update_config(this.config, o), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new dn(t(t({}, this.config), {}, {
                        persistence: "sessionStorage"
                    })), Ke.is_supported() && "true" === Ke.get("ph_debug") && (this.config.debug = !0), this.config.debug && (f.DEBUG = !0), null === (i = this.sessionRecording) || void 0 === i || i.startIfEnabledOrStop(), null === (r = this.autocapture) || void 0 === r || r.startIfEnabled(), null === (s = this.heatmaps) || void 0 === s || s.startIfEnabled(), this.surveys.loadIfEnabled())
                }
            }, {
                key: "startSessionRecording",
                value: function(e) {
                    if (null != e && e.sampling) {
                        var t, n, i = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId();
                        null === (n = this.persistence) || void 0 === n || n.register(o({}, me, !0)), U.info("Session recording started with sampling override for session: ", null == i ? void 0 : i.sessionId)
                    }
                    this.set_config({
                        disable_session_recording: !1
                    })
                }
            }, {
                key: "stopSessionRecording",
                value: function() {
                    this.set_config({
                        disable_session_recording: !0
                    })
                }
            }, {
                key: "sessionRecordingStarted",
                value: function() {
                    var e;
                    return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
                }
            }, {
                key: "loadToolbar",
                value: function(e) {
                    return this.toolbar.loadToolbar(e)
                }
            }, {
                key: "get_property",
                value: function(e) {
                    var t;
                    return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
                }
            }, {
                key: "getSessionProperty",
                value: function(e) {
                    var t;
                    return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
                }
            }, {
                key: "toString",
                value: function() {
                    var e, t = null !== (e = this.config.name) && void 0 !== e ? e : Lr;
                    return t !== Lr && (t = Lr + "." + t), t
                }
            }, {
                key: "_isIdentified",
                value: function() {
                    var e, t;
                    return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(Ee)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(Ee))
                }
            }, {
                key: "_hasPersonProcessing",
                value: function() {
                    var e, t, n, i;
                    return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && k(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[ae]) && (null === (n = this.persistence) || void 0 === n || null === (i = n.props) || void 0 === i || !i[Ce]))
                }
            }, {
                key: "_requirePersonProcessing",
                value: function(e) {
                    return "never" === this.config.person_profiles ? (U.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._register_single(Ce, !0), !0)
                }
            }, {
                key: "_gdpr_init",
                value: function() {
                    "localStorage" === this.config.opt_out_capturing_persistence_type && Ke.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({
                        persistence_type: "cookie"
                    }) && this.opt_in_capturing({
                        enable_persistence: !1
                    }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({
                        persistence_type: "cookie"
                    }) && this.opt_out_capturing({
                        clear_persistence: !1
                    }), this.clear_opt_in_out_capturing({
                        persistence_type: "cookie",
                        enable_persistence: !1
                    })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({
                        clear_persistence: !0
                    }) : this.has_opted_in_capturing() || !this.config.opt_out_capturing_by_default && !Ye.get("ph_optout") || (Ye.remove("ph_optout"), this.opt_out_capturing({
                        clear_persistence: this.config.opt_out_persistence_by_default
                    }))
                }
            }, {
                key: "_gdpr_update_persistence",
                value: function(e) {
                    var t, n, i, r, s;
                    if (e && e.clear_persistence) i = !0;
                    else {
                        if (!e || !e.enable_persistence) return;
                        i = !1
                    }
                    this.config.disable_persistence || (null === (t = this.persistence) || void 0 === t ? void 0 : t.disabled) === i || (null === (r = this.persistence) || void 0 === r || r.set_disabled(i));
                    this.config.disable_persistence || (null === (n = this.sessionPersistence) || void 0 === n ? void 0 : n.disabled) === i || (null === (s = this.sessionPersistence) || void 0 === s || s.set_disabled(i))
                }
            }, {
                key: "_gdpr_call_func",
                value: function(e, t) {
                    return t = Q({
                        capture: this.capture.bind(this),
                        persistence_type: this.config.opt_out_capturing_persistence_type,
                        cookie_prefix: this.config.opt_out_capturing_cookie_prefix,
                        cookie_expiration: this.config.cookie_expiration,
                        cross_subdomain_cookie: this.config.cross_subdomain_cookie,
                        secure_cookie: this.config.secure_cookie
                    }, t || {}), Ke.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"), e(this.config.token, {
                        capture: t.capture,
                        captureEventName: t.capture_event_name,
                        captureProperties: t.capture_properties,
                        persistenceType: t.persistence_type,
                        persistencePrefix: t.cookie_prefix,
                        cookieExpiration: t.cookie_expiration,
                        crossSubdomainCookie: t.cross_subdomain_cookie,
                        secureCookie: t.secure_cookie
                    })
                }
            }, {
                key: "opt_in_capturing",
                value: function(e) {
                    e = Q({
                        enable_persistence: !0
                    }, e || {}), this._gdpr_call_func(Yn, e), this._gdpr_update_persistence(e)
                }
            }, {
                key: "opt_out_capturing",
                value: function(e) {
                    var t = Q({
                        clear_persistence: !0
                    }, e || {});
                    this._gdpr_call_func(Xn, t), this._gdpr_update_persistence(t)
                }
            }, {
                key: "has_opted_in_capturing",
                value: function(e) {
                    return this._gdpr_call_func(Kn, e)
                }
            }, {
                key: "has_opted_out_capturing",
                value: function(e) {
                    return this._gdpr_call_func(Zn, e)
                }
            }, {
                key: "clear_opt_in_out_capturing",
                value: function(e) {
                    var t = Q({
                        enable_persistence: !0
                    }, null != e ? e : {});
                    this._gdpr_call_func(ei, t), this._gdpr_update_persistence(t)
                }
            }, {
                key: "debug",
                value: function(e) {
                    !1 === e ? (null == I || I.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
                        debug: !1
                    })) : (null == I || I.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
                        debug: !0
                    }))
                }
            }]), e
        }();
    ! function(e, t) {
        for (var n = 0; n < t.length; n++) e.prototype[t[n]] = Z(e.prototype[t[n]])
    }(jr, ["identify"]);
    var Ur, Wr;
    Ur = qr[Lr] = new jr, (Wr = H.posthog) && V(Wr._i, (function(e) {
            if (e && m(e)) {
                var t = Ur.init(e[0], e[1], e[2]),
                    n = Wr[e[2]] || Wr;
                t && (t._execute_array.call(t.people, n.people), t._execute_array(n))
            }
        })), H.posthog = Ur,
        function() {
            function e() {
                e.done || (e.done = !0, Br = !1, V(qr, (function(e) {
                    e._dom_loaded()
                })))
            }
            null != q && q.addEventListener && ("complete" === q.readyState ? e() : q.addEventListener("DOMContentLoaded", e, !1)), I && re(I, "load", e, !0)
        }()
}();
//# sourceMappingURL=array.js.map