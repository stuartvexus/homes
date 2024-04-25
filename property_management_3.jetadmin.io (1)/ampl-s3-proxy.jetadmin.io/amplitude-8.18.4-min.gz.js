var amplitude = function() {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function p(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function i(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function s(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function y(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable
            }))), n.forEach(function(e) {
                s(t, e, i[e])
            })
        }
        return t
    }

    function o(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, i = new Array(e.length); t < e.length; t++) i[t] = e[t];
                return i
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function d() {
        return "object" == typeof window && void 0 !== (null === window || void 0 === window ? void 0 : window.document)
    }
    var w = {
            DEFAULT_INSTANCE: "$default_instance",
            API_VERSION: 2,
            MAX_STRING_LENGTH: 4096,
            MAX_PROPERTY_KEYS: 1e3,
            IDENTIFY_EVENT: "$identify",
            GROUP_IDENTIFY_EVENT: "$groupidentify",
            EVENT_LOG_URL: "api.amplitude.com",
            EVENT_LOG_EU_URL: "api.eu.amplitude.com",
            DYNAMIC_CONFIG_URL: "regionconfig.amplitude.com",
            DYNAMIC_CONFIG_EU_URL: "regionconfig.eu.amplitude.com",
            LAST_EVENT_ID: "amplitude_lastEventId",
            LAST_EVENT_TIME: "amplitude_lastEventTime",
            LAST_IDENTIFY_ID: "amplitude_lastIdentifyId",
            LAST_SEQUENCE_NUMBER: "amplitude_lastSequenceNumber",
            SESSION_ID: "amplitude_sessionId",
            DEVICE_ID: "amplitude_deviceId",
            OPT_OUT: "amplitude_optOut",
            USER_ID: "amplitude_userId",
            DEVICE_ID_INDEX: 0,
            USER_ID_INDEX: 1,
            OPT_OUT_INDEX: 2,
            SESSION_ID_INDEX: 3,
            LAST_EVENT_TIME_INDEX: 4,
            EVENT_ID_INDEX: 5,
            IDENTIFY_ID_INDEX: 6,
            SEQUENCE_NUMBER_INDEX: 7,
            COOKIE_TEST_PREFIX: "amp_cookie_test",
            COOKIE_PREFIX: "amp",
            STORAGE_DEFAULT: "",
            STORAGE_COOKIES: "cookies",
            STORAGE_NONE: "none",
            STORAGE_LOCAL: "localStorage",
            STORAGE_SESSION: "sessionStorage",
            REVENUE_EVENT: "revenue_amount",
            REVENUE_PRODUCT_ID: "$productId",
            REVENUE_QUANTITY: "$quantity",
            REVENUE_PRICE: "$price",
            REVENUE_REVENUE_TYPE: "$revenueType",
            AMP_DEVICE_ID_PARAM: "amp_device_id",
            REFERRER: "referrer",
            UTM_SOURCE: "utm_source",
            UTM_MEDIUM: "utm_medium",
            UTM_CAMPAIGN: "utm_campaign",
            UTM_TERM: "utm_term",
            UTM_CONTENT: "utm_content",
            ATTRIBUTION_EVENT: "[Amplitude] Attribution Captured",
            TRANSPORT_HTTP: "http",
            TRANSPORT_BEACON: "beacon"
        },
        l = function(e) {
            for (var t = "", i = 0; i < e.length; i++) {
                var n = e.charCodeAt(i);
                n < 128 ? t += String.fromCharCode(n) : (127 < n && n < 2048 ? t += String.fromCharCode(n >> 6 | 192) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128)), t += String.fromCharCode(63 & n | 128))
            }
            return t
        },
        c = function(e) {
            for (var t, i, n = "", o = 0, r = 0; o < e.length;)(t = e.charCodeAt(o)) < 128 ? (n += String.fromCharCode(t), o++) : 191 < t && t < 224 ? (r = e.charCodeAt(o + 1), n += String.fromCharCode((31 & t) << 6 | 63 & r), o += 2) : (r = e.charCodeAt(o + 1), i = e.charCodeAt(o + 2), n += String.fromCharCode((15 & t) << 12 | (63 & r) << 6 | 63 & i), o += 3);
            return n
        },
        h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof global ? global : void 0,
        f = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                try {
                    if (h.btoa && h.atob) return h.btoa(unescape(encodeURIComponent(e)))
                } catch (e) {}
                return f._encode(e)
            },
            _encode: function(e) {
                var t, i, n, o, r, s, a, u = "",
                    c = 0;
                for (e = l(e); c < e.length;) o = (t = e.charCodeAt(c++)) >> 2, r = (3 & t) << 4 | (i = e.charCodeAt(c++)) >> 4, s = (15 & i) << 2 | (n = e.charCodeAt(c++)) >> 6, a = 63 & n, isNaN(i) ? s = a = 64 : isNaN(n) && (a = 64), u = u + f._keyStr.charAt(o) + f._keyStr.charAt(r) + f._keyStr.charAt(s) + f._keyStr.charAt(a);
                return u
            },
            decode: function(e) {
                try {
                    if (h.btoa && h.atob) return decodeURIComponent(escape(h.atob(e)))
                } catch (e) {}
                return f._decode(e)
            },
            _decode: function(e) {
                var t, i, n, o, r, s, a = "",
                    u = 0;
                for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); u < e.length;) t = f._keyStr.indexOf(e.charAt(u++)) << 2 | (o = f._keyStr.indexOf(e.charAt(u++))) >> 4, i = (15 & o) << 4 | (r = f._keyStr.indexOf(e.charAt(u++))) >> 2, n = (3 & r) << 6 | (s = f._keyStr.indexOf(e.charAt(u++))), a += String.fromCharCode(t), 64 !== r && (a += String.fromCharCode(i)), 64 !== s && (a += String.fromCharCode(n));
                return a = c(a)
            }
        },
        r = Object.prototype.toString;

    function _(e) {
        switch (r.call(e)) {
            case "[object Date]":
                return "date";
            case "[object RegExp]":
                return "regexp";
            case "[object Arguments]":
                return "arguments";
            case "[object Array]":
                return "array";
            case "[object Error]":
                return "error"
        }
        return null === e ? "null" : void 0 === e ? "undefined" : e != e ? "nan" : e && 1 === e.nodeType ? "element" : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e) ? "buffer" : t(e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e))
    }

    function a(e, t, i) {
        return _(e) === i || (T.error("Invalid " + t + " input type. Expected " + i + " but received " + _(e)), !1)
    }

    function u(e) {
        var t = _(e);
        if ("object" !== t) return T.error("Error: invalid properties format. Expecting Javascript object, received " + t + ", ignoring"), {};
        if (Object.keys(e).length > w.MAX_PROPERTY_KEYS) return T.error("Error: too many properties (more than 1000), ignoring"), {};
        var i, n, o, r = {};
        for (var s in e) {
            Object.prototype.hasOwnProperty.call(e, s) && ("string" !== (n = _(i = s)) && (i = String(i), T.warn("WARNING: Non-string property key, received type " + n + ', coercing to string "' + i + '"')), null !== (o = R(i, e[s])) && (r[i] = o))
        }
        return r
    }

    function v() {
        for (var e = "", t = 0; t < 22; ++t) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Math.floor(64 * Math.random()));
        return e
    }

    function b(e) {
        try {
            for (var t = document.cookie.split(";"), i = null, n = 0; n < t.length; n++) {
                for (var o = t[n];
                    " " === o.charAt(0);) o = o.substring(1, o.length);
                if (0 === o.indexOf(e)) {
                    i = o.substring(e.length, o.length);
                    break
                }
            }
            return i
        } catch (e) {
            return null
        }
    }

    function g(e, t, i) {
        var n, o = null !== t ? i.expirationDays : -1;
        o && ((n = new Date).setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), o = n);
        var r = e + "=" + t;
        o && (r += "; expires=" + o.toUTCString()), r += "; path=/", i.domain && (r += "; domain=" + i.domain), i.secure && (r += "; Secure"), i.sameSite && (r += "; SameSite=" + i.sameSite), document.cookie = r
    }

    function m(e) {
        var t, i = 0 < arguments.length && void 0 !== e ? e : "",
            n = i.split(".")[w.LAST_EVENT_TIME_INDEX];
        return n && (t = parseInt(n, 32)), t || (P.warn("unable to parse malformed cookie: ".concat(i)), 0)
    }

    function E(e) {
        if (e) {
            if ("undefined" != typeof document) {
                var t = document.createElement("a");
                return t.href = e, t.hostname || h.location.hostname
            }
            if ("function" == typeof URL) return new URL(e).hostname || h.location.hostname
        }
        return h.location.hostname
    }

    function I(e) {
        var t = "";
        return Y.domain && (t = "." === Y.domain.charAt(0) ? Y.domain.substring(1) : Y.domain), e + t
    }
    var e, S, N, k = {
            DISABLE: 0,
            ERROR: 1,
            WARN: 2,
            INFO: 3
        },
        O = k.WARN,
        T = {
            error: function(e) {
                k.ERROR <= O && x(e)
            },
            warn: function(e) {
                k.WARN <= O && x(e)
            },
            info: function(e) {
                k.INFO <= O && x(e)
            }
        },
        x = function(e) {
            try {
                console.log("[Amplitude] " + e)
            } catch (e) {}
        },
        A = function(e) {
            return "string" === _(e) && e.length > w.MAX_STRING_LENGTH ? e.substring(0, w.MAX_STRING_LENGTH) : e
        },
        C = ["nan", "function", "arguments", "regexp", "element"],
        R = function e(t, i) {
            var n = _(i);
            if (-1 !== C.indexOf(n)) T.warn('WARNING: Property key "' + t + '" with invalid value type ' + n + ", ignoring"), i = null;
            else if ("undefined" === n) i = null;
            else if ("error" === n) i = String(i), T.warn('WARNING: Property key "' + t + '" with value type error, coercing to ' + i);
            else if ("array" === n) {
                for (var o = [], r = 0; r < i.length; r++) {
                    var s = i[r],
                        a = _(s);
                    "array" !== a ? "object" === a ? o.push(u(s)) : o.push(e(t, s)) : T.warn("WARNING: Cannot have " + a + " nested in an array property value, skipping")
                }
                i = o
            } else "object" === n && (i = u(i));
            return i
        },
        U = function(e, t) {
            var i = _(t);
            if ("string" === i) return t;
            if ("date" === i || "number" === i || "boolean" === i) return t = String(t), T.warn("WARNING: Non-string groupName, received type " + i + ', coercing to string "' + t + '"'), t;
            if ("array" === i) {
                for (var n = [], o = 0; o < t.length; o++) {
                    var r = t[o],
                        s = _(r);
                    "array" !== s && "object" !== s ? "string" === s ? n.push(r) : "date" !== s && "number" !== s && "boolean" !== s || (r = String(r), T.warn("WARNING: Non-string groupName, received type " + s + ', coercing to string "' + r + '"'), n.push(r)) : T.warn("WARNING: Skipping nested " + s + " in array groupName")
                }
                return n
            }
            T.warn("WARNING: Non-string groupName, received type " + i + ". Please use strings or array of strings for groupName")
        },
        D = function(e) {
            Object.prototype.hasOwnProperty.call(k, e) && (O = k[e])
        },
        P = T,
        q = function(e) {
            return !e || 0 === e.length
        },
        j = function() {
            return "undefined" != typeof WorkerGlobalScope
        },
        M = function(e, t) {
            e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
            var i = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
            return null === i ? void 0 : decodeURIComponent(i[1].replace(/\+/g, " "))
        },
        V = function e(t) {
            if ("array" === _(t))
                for (var i = 0; i < t.length; i++) t[i] = e(t[i]);
            else if ("object" === _(t))
                for (var n in t) n in t && (t[n] = e(t[n]));
            else t = A(t);
            return t
        },
        G = function(e) {
            var t = _(e);
            if ("object" !== t) return T.error("Error: invalid groups format. Expecting Javascript object, received " + t + ", ignoring"), {};
            var i, n, o, r = {};
            for (var s in e) {
                Object.prototype.hasOwnProperty.call(e, s) && ("string" !== (n = _(i = s)) && (i = String(i), T.warn("WARNING: Non-string groupType, received type " + n + ', coercing to string "' + i + '"')), null !== (o = U(i, e[s])) && (r[i] = o))
            }
            return r
        },
        L = a,
        F = u,
        z = function(e) {
            return !!a(e, "deviceId", "string") && (!(0 <= e.indexOf(".")) || (T.error("Device IDs may not contain '.' characters. Value will be ignored: \"".concat(e, '"')), !1))
        },
        K = function(e) {
            return !!a(e, "transport", "string") && (e !== w.TRANSPORT_HTTP && e !== w.TRANSPORT_BEACON ? (T.error("transport value must be one of '".concat(w.TRANSPORT_BEACON, "' or '").concat(w.TRANSPORT_HTTP, "'")), !1) : !(e !== w.TRANSPORT_HTTP && !navigator.sendBeacon) || (T.error("browser does not support sendBeacon, so transport must be HTTP"), !1))
        },
        B = function(e) {
            return !!(a(e, "sessionId", "number") && 0 < new Date(e).getTime()) || (T.error("sessionId value must in milliseconds since epoch (Unix Timestamp)"), !1)
        },
        X = function() {
            return h.location
        },
        W = {
            set: g,
            get: b,
            getAll: function(e) {
                try {
                    var t = document.cookie.split(";").map(function(e) {
                            return e.trimStart()
                        }),
                        i = [],
                        n = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                            for (var u = s.value;
                                " " === u.charAt(0);) u = u.substring(1);
                            0 === u.indexOf(e) && i.push(u.substring(e.length))
                        }
                    } catch (e) {
                        o = !0, r = e
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return i
                } catch (e) {
                    return []
                }
            },
            getLastEventTime: m,
            sortByEventTime: function(e) {
                return o(e).sort(function(e, t) {
                    var i = m(e);
                    return m(t) - i
                })
            },
            areCookiesEnabled: function(e) {
                var t = 0 < arguments.length && void 0 !== e ? e : {},
                    i = w.COOKIE_TEST_PREFIX + v();
                if ("undefined" == typeof document) return !1;
                var n = !1;
                try {
                    var o = String(Date.now());
                    g(i, o, t), P.info("Testing if cookies available"), n = b(i + "=") === o
                } catch (e) {
                    P.warn('Error thrown when checking for cookies. Reason: "'.concat(e, '"'))
                } finally {
                    P.info("Cleaning up cookies availability test"), g(i, null, t)
                }
                return n
            }
        },
        $ = function(e) {
            var t = E(e).split("."),
                i = [],
                n = "_tldtest_" + v();
            if (j()) return "";
            for (var o = t.length - 2; 0 <= o; --o) i.push(t.slice(o).join("."));
            for (var r = 0; r < i.length; ++r) {
                var s = i[r],
                    a = {
                        domain: "." + s
                    };
                if (W.set(n, 1, a), W.get(n)) return W.set(n, null, a), s
            }
            return ""
        },
        Y = {
            expirationDays: void 0,
            domain: void 0
        },
        H = function(e) {
            var t = I(e) + "=",
                i = W.get(t);
            try {
                if (i) return JSON.parse(f.decode(i))
            } catch (e) {
                return null
            }
            return null
        },
        Z = function(e, t) {
            try {
                return W.set(I(e), f.encode(JSON.stringify(t)), Y), !0
            } catch (e) {
                return !1
            }
        },
        J = function(e) {
            try {
                return W.set(I(e), null, Y), !0
            } catch (e) {
                return !1
            }
        },
        Q = {
            reset: function() {
                Y = {
                    expirationDays: void 0,
                    domain: void 0
                }
            },
            options: function(e) {
                if (0 === arguments.length) return Y;
                e = e || {}, Y.expirationDays = e.expirationDays, Y.secure = e.secure, Y.sameSite = e.sameSite;
                var t = q(e.domain) ? "." + $(X().href) : e.domain,
                    i = Math.random();
                Y.domain = t, Z("amplitude_test", i);
                var n = H("amplitude_test");
                return n && n === i || (t = null), J("amplitude_test"), Y.domain = t, Y
            },
            get: H,
            set: Z,
            remove: J,
            setRaw: function(e, t) {
                try {
                    return W.set(I(e), t, Y), !0
                } catch (e) {
                    return !1
                }
            },
            getRaw: function(e) {
                var t = I(e) + "=";
                return W.get(t)
            }
        },
        ee = function() {
            function e() {
                p(this, e), this.map = new Map, this.length = 0
            }
            return i(e, [{
                key: "key",
                value: function(e) {
                    var t = Array.from(this.map.keys())[e];
                    return this.map.get(t)
                }
            }, {
                key: "getItem",
                value: function(e) {
                    return this.map.get(e)
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    this.map.has(e) || (this.length += 1), this.map.set(e, t)
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    this.map.has(e) && (--this.length, this.map.delete(e))
                }
            }, {
                key: "clear",
                value: function() {
                    this.map.clear(), this.length = 0
                }
            }]), e
        }();
    if (function() {
            var e, t = new Date;
            try {
                return h.localStorage.setItem(t, t), e = h.localStorage.getItem(t) === String(t), h.localStorage.removeItem(t), e
            } catch (e) {}
            return !1
        }()) e = h.localStorage;
    else if (void 0 !== h && h.globalStorage) try {
        e = h.globalStorage[h.location.hostname]
    } catch (e) {} else {
        "undefined" != typeof document ? (S = document.createElement("div"), N = "localStorage", S.style.display = "none", document.getElementsByTagName("head")[0].appendChild(S), S.addBehavior && (S.addBehavior("#default#userdata"), e = {
            length: 0,
            setItem: function(e, t) {
                S.load(N), S.getAttribute(e) || this.length++, S.setAttribute(e, t), S.save(N)
            },
            getItem: function(e) {
                return S.load(N), S.getAttribute(e)
            },
            removeItem: function(e) {
                S.load(N), S.getAttribute(e) && this.length--, S.removeAttribute(e), S.save(N)
            },
            clear: function() {
                S.load(N);
                for (var e, t = 0; e = S.XMLDocument.documentElement.attributes[t++];) S.removeAttribute(e.name);
                S.save(N), this.length = 0
            },
            key: function(e) {
                return S.load(N), S.XMLDocument.documentElement.attributes[e]
            }
        }, S.load(N), e.length = S.XMLDocument.documentElement.attributes.length)) : j() && (e = new ee)
    }

    function te() {
        this.storage = null
    }
    var ie, ne = e = e || {
        length: 0,
        setItem: function() {},
        getItem: function() {},
        removeItem: function() {},
        clear: function() {},
        key: function() {}
    };
    te.prototype.getStorage = function() {
        return null !== this.storage || (W.areCookiesEnabled() ? this.storage = Q : (i = "amp_cookiestore_", this.storage = {
            _options: {
                expirationDays: void 0,
                domain: void 0,
                secure: !1
            },
            reset: function() {
                this._options = {
                    expirationDays: void 0,
                    domain: void 0,
                    secure: !1
                }
            },
            options: function(e) {
                return 0 === arguments.length ? this._options : (e = e || {}, this._options.expirationDays = e.expirationDays || this._options.expirationDays, this._options.domain = e.domain || this._options.domain || h && h.location && h.location.hostname, this._options.secure = e.secure || !1)
            },
            get: function(e) {
                try {
                    return JSON.parse(ne.getItem(i + e))
                } catch (e) {}
                return null
            },
            set: function(e, t) {
                try {
                    return ne.setItem(i + e, JSON.stringify(t)), !0
                } catch (e) {}
                return !1
            },
            remove: function(e) {
                try {
                    ne.removeItem(i + e)
                } catch (e) {
                    return !1
                }
            }
        })), this.storage;
        var i
    };

    function oe(e, t) {
        function i(e, t, i, n) {
            return M(e, t) || M(i, n)
        }

        function n(e, t) {
            q(t) || (l[e] = t)
        }
        var o = e ? "?" + e.split(".").slice(-1)[0].replace(/\|/g, "&") : "",
            r = i(w.UTM_SOURCE, t, "utmcsr", o),
            s = i(w.UTM_MEDIUM, t, "utmcmd", o),
            a = i(w.UTM_CAMPAIGN, t, "utmccn", o),
            u = i(w.UTM_TERM, t, "utmctr", o),
            c = i(w.UTM_CONTENT, t, "utmcct", o),
            l = {};
        return n(w.UTM_SOURCE, r), n(w.UTM_MEDIUM, s), n(w.UTM_CAMPAIGN, a), n(w.UTM_TERM, u), n(w.UTM_CONTENT, c), l
    }

    function re() {
        this.userPropertiesOperations = {}, this.properties = []
    }
    var se = (s(ie = {}, w.STORAGE_COOKIES, !0), s(ie, w.STORAGE_NONE, !0), s(ie, w.STORAGE_LOCAL, !0), s(ie, w.STORAGE_SESSION, !0), ie),
        ae = function() {
            function l(e) {
                var t = e.storageKey,
                    i = e.disableCookies,
                    n = e.domain,
                    o = e.secure,
                    r = e.sameSite,
                    s = e.expirationDays,
                    a = e.storage;
                p(this, l), this.storageKey = t, this.domain = n, this.secure = o, this.sameSite = r, this.expirationDays = s, this.cookieDomain = "";
                var u, c = $(X().href);
                this.cookieDomain = n || (c ? "." + c : null), se[a] ? this.storage = a : (u = i || !W.areCookiesEnabled({
                    domain: this.cookieDomain,
                    secure: this.secure,
                    sameSite: this.sameSite,
                    expirationDays: this.expirationDays
                }), this.storage = u ? w.STORAGE_LOCAL : w.STORAGE_COOKIES)
            }
            return i(l, [{
                key: "getCookieStorageKey",
                value: function() {
                    if (!this.domain) return this.storageKey;
                    var e = "." === this.domain.charAt(0) ? this.domain.substring(1) : this.domain;
                    return "".concat(this.storageKey).concat(e ? "_".concat(e) : "")
                }
            }, {
                key: "save",
                value: function(e) {
                    var t = e.deviceId,
                        i = e.userId,
                        n = e.optOut,
                        o = e.sessionId,
                        r = e.lastEventTime,
                        s = e.eventId,
                        a = e.identifyId,
                        u = e.sequenceNumber;
                    if (this.storage !== w.STORAGE_NONE) {
                        var c = [t, f.encode(i || ""), n ? "1" : "", o ? o.toString(32) : "0", r ? r.toString(32) : "0", s ? s.toString(32) : "0", a ? a.toString(32) : "0", u ? u.toString(32) : "0"].join(".");
                        switch (this.storage) {
                            case w.STORAGE_SESSION:
                                h.sessionStorage && h.sessionStorage.setItem(this.storageKey, c);
                                break;
                            case w.STORAGE_LOCAL:
                                ne.setItem(this.storageKey, c);
                                break;
                            case w.STORAGE_COOKIES:
                                this.saveCookie(c)
                        }
                    }
                }
            }, {
                key: "saveCookie",
                value: function(e) {
                    W.set(this.getCookieStorageKey(), e, {
                        domain: this.cookieDomain,
                        secure: this.secure,
                        sameSite: this.sameSite,
                        expirationDays: this.expirationDays
                    })
                }
            }, {
                key: "load",
                value: function() {
                    var e, t, i, n, o = this;
                    if (this.storage === w.STORAGE_COOKIES && (e = this.getCookieStorageKey() + "=", n = 0 === (t = W.getAll(e)).length || 1 === t.length ? t[0] : (i = W.sortByEventTime(t)[0], t.forEach(function() {
                            return W.set(o.getCookieStorageKey(), null, {})
                        }), this.saveCookie(i), W.get(e))), !(n = n || ne.getItem(this.storageKey))) try {
                        n = h.sessionStorage && h.sessionStorage.getItem(this.storageKey)
                    } catch (e) {
                        P.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                    }
                    if (!n) return null;
                    var r = n.split("."),
                        s = null;
                    if (r[w.USER_ID_INDEX]) try {
                        s = f.decode(r[w.USER_ID_INDEX])
                    } catch (e) {
                        s = null
                    }
                    return {
                        deviceId: r[w.DEVICE_ID_INDEX],
                        userId: s,
                        optOut: "1" === r[w.OPT_OUT_INDEX],
                        sessionId: parseInt(r[w.SESSION_ID_INDEX], 32),
                        lastEventTime: parseInt(r[w.LAST_EVENT_TIME_INDEX], 32),
                        eventId: parseInt(r[w.EVENT_ID_INDEX], 32),
                        identifyId: parseInt(r[w.IDENTIFY_ID_INDEX], 32),
                        sequenceNumber: parseInt(r[w.SEQUENCE_NUMBER_INDEX], 32)
                    }
                }
            }, {
                key: "clear",
                value: function() {
                    var e;
                    if (this.storage === w.STORAGE_COOKIES && (e = W.get(this.getCookieStorageKey() + "="), W.set(this.getCookieStorageKey(), null, {
                            domain: this.cookieDomain,
                            secure: this.secure,
                            sameSite: this.sameSite,
                            expirationDays: 0
                        })), e || (e = ne.getItem(this.storageKey), ne.clear()), !e) try {
                        e = h.sessionStorage && h.sessionStorage.getItem(this.storageKey), h.sessionStorage.clear()
                    } catch (e) {
                        P.info('window.sessionStorage unavailable. Reason: "'.concat(e, '"'))
                    }
                    return !!e
                }
            }]), l
        }(),
        ue = "$clearAll";
    re.prototype.add = function(e, t) {
        return "number" === _(t) || "string" === _(t) ? this._addOperation("$add", e, t) : P.error("Unsupported type for value: " + _(t) + ", expecting number or string"), this
    }, re.prototype.append = function(e, t) {
        return this._addOperation("$append", e, t), this
    }, re.prototype.clearAll = function() {
        return 0 < Object.keys(this.userPropertiesOperations).length ? Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, ue) || P.error("Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll") : this.userPropertiesOperations[ue] = "-", this
    }, re.prototype.prepend = function(e, t) {
        return this._addOperation("$prepend", e, t), this
    }, re.prototype.set = function(e, t) {
        return this._addOperation("$set", e, t), this
    }, re.prototype.setOnce = function(e, t) {
        return this._addOperation("$setOnce", e, t), this
    }, re.prototype.unset = function(e) {
        return this._addOperation("$unset", e, "-"), this
    }, re.prototype.preInsert = function(e, t) {
        return this._addOperation("$preInsert", e, t), this
    }, re.prototype.postInsert = function(e, t) {
        return this._addOperation("$postInsert", e, t), this
    }, re.prototype.remove = function(e, t) {
        return this._addOperation("$remove", e, t), this
    }, re.prototype._addOperation = function(e, t, i) {
        Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, ue) ? P.error("This identify already contains a $clearAll operation, skipping operation " + e) : -1 === this.properties.indexOf(t) ? (Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, e) || (this.userPropertiesOperations[e] = {}), this.userPropertiesOperations[e][t] = i, this.properties.push(t)) : P.error('User property "' + t + '" already used in this identify, skipping operation ' + e)
    };
    var ce = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function le(e, t, i) {
        return e(i = {
            path: t,
            exports: {},
            require: function(e, t) {
                return function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == t && i.path)
            }
        }, i.exports), i.exports
    }
    var pe = le(function(e) {
            function p(e, t) {
                var i = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
            }

            function a(e, t, i, n, o, r) {
                return p((s = p(p(t, e), p(n, r))) << (a = o) | s >>> 32 - a, i);
                var s, a
            }

            function d(e, t, i, n, o, r, s) {
                return a(t & i | ~t & n, e, t, o, r, s)
            }

            function h(e, t, i, n, o, r, s) {
                return a(t & n | i & ~n, e, t, o, r, s)
            }

            function f(e, t, i, n, o, r, s) {
                return a(t ^ i ^ n, e, t, o, r, s)
            }

            function v(e, t, i, n, o, r, s) {
                return a(i ^ (t | ~n), e, t, o, r, s)
            }

            function u(e, t) {
                var i, n, o, r;
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var s = 1732584193, a = -271733879, u = -1732584194, c = 271733878, l = 0; l < e.length; l += 16) s = d(i = s, n = a, o = u, r = c, e[l], 7, -680876936), c = d(c, s, a, u, e[l + 1], 12, -389564586), u = d(u, c, s, a, e[l + 2], 17, 606105819), a = d(a, u, c, s, e[l + 3], 22, -1044525330), s = d(s, a, u, c, e[l + 4], 7, -176418897), c = d(c, s, a, u, e[l + 5], 12, 1200080426), u = d(u, c, s, a, e[l + 6], 17, -1473231341), a = d(a, u, c, s, e[l + 7], 22, -45705983), s = d(s, a, u, c, e[l + 8], 7, 1770035416), c = d(c, s, a, u, e[l + 9], 12, -1958414417), u = d(u, c, s, a, e[l + 10], 17, -42063), a = d(a, u, c, s, e[l + 11], 22, -1990404162), s = d(s, a, u, c, e[l + 12], 7, 1804603682), c = d(c, s, a, u, e[l + 13], 12, -40341101), u = d(u, c, s, a, e[l + 14], 17, -1502002290), s = h(s, a = d(a, u, c, s, e[l + 15], 22, 1236535329), u, c, e[l + 1], 5, -165796510), c = h(c, s, a, u, e[l + 6], 9, -1069501632), u = h(u, c, s, a, e[l + 11], 14, 643717713), a = h(a, u, c, s, e[l], 20, -373897302), s = h(s, a, u, c, e[l + 5], 5, -701558691), c = h(c, s, a, u, e[l + 10], 9, 38016083), u = h(u, c, s, a, e[l + 15], 14, -660478335), a = h(a, u, c, s, e[l + 4], 20, -405537848), s = h(s, a, u, c, e[l + 9], 5, 568446438), c = h(c, s, a, u, e[l + 14], 9, -1019803690), u = h(u, c, s, a, e[l + 3], 14, -187363961), a = h(a, u, c, s, e[l + 8], 20, 1163531501), s = h(s, a, u, c, e[l + 13], 5, -1444681467), c = h(c, s, a, u, e[l + 2], 9, -51403784), u = h(u, c, s, a, e[l + 7], 14, 1735328473), s = f(s, a = h(a, u, c, s, e[l + 12], 20, -1926607734), u, c, e[l + 5], 4, -378558), c = f(c, s, a, u, e[l + 8], 11, -2022574463), u = f(u, c, s, a, e[l + 11], 16, 1839030562), a = f(a, u, c, s, e[l + 14], 23, -35309556), s = f(s, a, u, c, e[l + 1], 4, -1530992060), c = f(c, s, a, u, e[l + 4], 11, 1272893353), u = f(u, c, s, a, e[l + 7], 16, -155497632), a = f(a, u, c, s, e[l + 10], 23, -1094730640), s = f(s, a, u, c, e[l + 13], 4, 681279174), c = f(c, s, a, u, e[l], 11, -358537222), u = f(u, c, s, a, e[l + 3], 16, -722521979), a = f(a, u, c, s, e[l + 6], 23, 76029189), s = f(s, a, u, c, e[l + 9], 4, -640364487), c = f(c, s, a, u, e[l + 12], 11, -421815835), u = f(u, c, s, a, e[l + 15], 16, 530742520), s = v(s, a = f(a, u, c, s, e[l + 2], 23, -995338651), u, c, e[l], 6, -198630844), c = v(c, s, a, u, e[l + 7], 10, 1126891415), u = v(u, c, s, a, e[l + 14], 15, -1416354905), a = v(a, u, c, s, e[l + 5], 21, -57434055), s = v(s, a, u, c, e[l + 12], 6, 1700485571), c = v(c, s, a, u, e[l + 3], 10, -1894986606), u = v(u, c, s, a, e[l + 10], 15, -1051523), a = v(a, u, c, s, e[l + 1], 21, -2054922799), s = v(s, a, u, c, e[l + 8], 6, 1873313359), c = v(c, s, a, u, e[l + 15], 10, -30611744), u = v(u, c, s, a, e[l + 6], 15, -1560198380), a = v(a, u, c, s, e[l + 13], 21, 1309151649), s = v(s, a, u, c, e[l + 4], 6, -145523070), c = v(c, s, a, u, e[l + 11], 10, -1120210379), u = v(u, c, s, a, e[l + 2], 15, 718787259), a = v(a, u, c, s, e[l + 9], 21, -343485551), s = p(s, i), a = p(a, n), u = p(u, o), c = p(c, r);
                return [s, a, u, c]
            }

            function c(e) {
                for (var t = "", i = 32 * e.length, n = 0; n < i; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
                return t
            }

            function l(e) {
                var t = [];
                for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1) t[n] = 0;
                for (var i = 8 * e.length, n = 0; n < i; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
                return t
            }

            function n(e) {
                for (var t, i = "0123456789abcdef", n = "", o = 0; o < e.length; o += 1) t = e.charCodeAt(o), n += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
                return n
            }

            function i(e) {
                return unescape(encodeURIComponent(e))
            }

            function o(e) {
                return c(u(l(t = i(e)), 8 * t.length));
                var t
            }

            function r(e, t) {
                return function(e, t) {
                    var i, n, o = l(e),
                        r = [],
                        s = [];
                    for (r[15] = s[15] = void 0, 16 < o.length && (o = u(o, 8 * e.length)), i = 0; i < 16; i += 1) r[i] = 909522486 ^ o[i], s[i] = 1549556828 ^ o[i];
                    return n = u(r.concat(l(t)), 512 + 8 * t.length), c(u(s.concat(n), 640))
                }(i(e), i(t))
            }

            function t(e, t, i) {
                return t ? i ? r(t, e) : n(r(t, e)) : i ? o(e) : n(o(e))
            }
            var s;
            s = ce, e.exports ? e.exports = t : s.md5 = t
        }),
        de = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        },
        he = Object.getOwnPropertySymbols,
        fe = Object.prototype.hasOwnProperty,
        ve = Object.prototype.propertyIsEnumerable;
    var be = function() {
            try {
                if (!Object.assign) return;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return;
                for (var t = {}, i = 0; i < 10; i++) t["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                        return t[e]
                    }).join("")) return;
                var n = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    n[e] = e
                }), "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, n)).join("") ? void 0 : 1
            } catch (e) {
                return
            }
        }() ? Object.assign : function(e, t) {
            for (var i, n, o = function(e) {
                    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }(e), r = 1; r < arguments.length; r++) {
                for (var s in i = Object(arguments[r])) fe.call(i, s) && (o[s] = i[s]);
                if (he) {
                    n = he(i);
                    for (var a = 0; a < n.length; a++) ve.call(i, n[a]) && (o[n[a]] = i[n[a]])
                }
            }
            return o
        },
        ge = "%[a-f0-9]{2}";
    new RegExp(ge, "gi"), new RegExp("(" + ge + ")+", "gi");

    function me(e, t) {
        return t.encode ? (t.strict ? de : encodeURIComponent)(e) : e
    }

    function ye(e, t, i) {
        this.url = e, this.data = t || {}, this.headers = i
    }
    var we = function(n, o) {
        !1 === (o = be({
            encode: !0,
            strict: !0,
            arrayFormat: "none"
        }, o)).sort && (o.sort = function() {});
        var r = function(n) {
            switch (n.arrayFormat) {
                case "index":
                    return function(e, t, i) {
                        return null === t ? [me(e, n), "[", i, "]"].join("") : [me(e, n), "[", me(i, n), "]=", me(t, n)].join("")
                    };
                case "bracket":
                    return function(e, t) {
                        return null === t ? me(e, n) : [me(e, n), "[]=", me(t, n)].join("")
                    };
                default:
                    return function(e, t) {
                        return null === t ? me(e, n) : [me(e, n), "=", me(t, n)].join("")
                    }
            }
        }(o);
        return n ? Object.keys(n).sort(o.sort).map(function(t) {
            var e = n[t];
            if (void 0 === e) return "";
            if (null === e) return me(t, o);
            if (Array.isArray(e)) {
                var i = [];
                return e.slice().forEach(function(e) {
                    void 0 !== e && i.push(r(t, e, i.length))
                }), i.join("&")
            }
            return me(t, o) + "=" + me(e, o)
        }).filter(function(e) {
            return 0 < e.length
        }).join("&") : ""
    };
    ye.prototype.send = function(t) {
        var e, i, n;
        !!h.XDomainRequest ? ((e = new h.XDomainRequest).open("POST", this.url, !0), e.onload = function() {
            t(200, e.responseText)
        }, e.onerror = function() {
            "Request Entity Too Large" === e.responseText ? t(413, e.responseText) : t(500, e.responseText)
        }, e.ontimeout = function() {}, e.onprogress = function() {}, e.send(we(this.data))) : "undefined" != typeof XMLHttpRequest ? ((i = new XMLHttpRequest).open("POST", this.url, !0), i.onreadystatechange = function() {
            4 === i.readyState && t(i.status, i.responseText)
        }, function(e, t) {
            for (var i in t) "Cross-Origin-Resource-Policy" === i && !t[i] || e.setRequestHeader(i, t[i])
        }(i, this.headers), i.send(we(this.data))) : (n = void 0, fetch(this.url, {
            method: "POST",
            headers: this.headers,
            body: we(this.data)
        }).then(function(e) {
            return n = e.status, e.text()
        }).then(function(e) {
            t(n, e)
        }))
    };

    function _e() {
        this._price = null, this._productId = null, this._quantity = 1, this._revenueType = null, this._properties = null
    }
    _e.prototype.setProductId = function(e) {
        return "string" !== _(e) ? P.error("Unsupported type for productId: " + _(e) + ", expecting string") : q(e) ? P.error("Invalid empty productId") : this._productId = e, this
    }, _e.prototype.setQuantity = function(e) {
        return "number" !== _(e) ? P.error("Unsupported type for quantity: " + _(e) + ", expecting number") : this._quantity = parseInt(e), this
    }, _e.prototype.setPrice = function(e) {
        return "number" !== _(e) ? P.error("Unsupported type for price: " + _(e) + ", expecting number") : this._price = e, this
    }, _e.prototype.setRevenueType = function(e) {
        return "string" !== _(e) ? P.error("Unsupported type for revenueType: " + _(e) + ", expecting string") : this._revenueType = e, this
    }, _e.prototype.setEventProperties = function(e) {
        return "object" !== _(e) ? P.error("Unsupported type for eventProperties: " + _(e) + ", expecting object") : this._properties = F(e), this
    }, _e.prototype._isValidRevenue = function() {
        return "number" === _(this._price) || (P.error("Invalid revenue, need to set price field"), !1)
    }, _e.prototype._toJSONObject = function() {
        var e = "object" === _(this._properties) ? this._properties : {};
        return null !== this._productId && (e[w.REVENUE_PRODUCT_ID] = this._productId), null !== this._quantity && (e[w.REVENUE_QUANTITY] = this._quantity), null !== this._price && (e[w.REVENUE_PRICE] = this._price), null !== this._revenueType && (e[w.REVENUE_REVENUE_TYPE] = this._revenueType), e
    };

    function Ee(e) {
        var t = w.EVENT_LOG_URL;
        switch (e) {
            case Oe:
                t = w.EVENT_LOG_EU_URL;
                break;
            case ke:
                t = w.EVENT_LOG_URL
        }
        return t
    }

    function Ie(e) {
        d() || j() || P.warn("amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node"), this._instanceName = q(e) ? w.DEFAULT_INSTANCE : e.toLowerCase(), this._unsentEvents = [], this._unsentIdentifys = [], this._ua = new Se(navigator.userAgent).getResult(), this.options = y({}, Te, {
            trackingOptions: y({}, Te.trackingOptions)
        }), this.cookieStorage = (new te).getStorage(), this._q = [], this._sending = !1, this._updateScheduled = !1, this._onInitCallbacks = [], this._onNewSessionStartCallbacks = [], this._eventId = 0, this._identifyId = 0, this._lastEventTime = null, this._newSession = !1, this._sequenceNumber = 0, this._sessionId = null, this._isInitialized = !1, this._connector = null, this._userAgent = navigator && navigator.userAgent || null
    }
    var Se = le(function(z, K) {
            ! function(o, p) {
                function e(e) {
                    for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
                    return t
                }

                function r(e, t) {
                    return typeof e == c && -1 !== j(t).indexOf(j(e))
                }

                function s(e, t) {
                    if (typeof e == c) return e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), typeof t == u ? e : e.substring(0, 275)
                }

                function a(e, t) {
                    for (var i, n, o, r, s, a = 0; a < t.length && !r;) {
                        for (var u = t[a], c = t[a + 1], l = i = 0; l < u.length && !r;)
                            if (r = u[l++].exec(e))
                                for (n = 0; n < c.length; n++) s = r[++i], typeof(o = c[n]) == h && 0 < o.length ? 2 === o.length ? typeof o[1] == d ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 === o.length ? typeof o[1] != d || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : p : this[o[0]] = s ? o[1].call(this, s, o[2]) : p : 4 === o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : p) : this[o] = s || p;
                        a += 2
                    }
                }

                function t(e, t) {
                    for (var i in t)
                        if (typeof t[i] == h && 0 < t[i].length) {
                            for (var n = 0; n < t[i].length; n++)
                                if (r(t[i][n], e)) return "?" === i ? p : i
                        } else if (r(t[i], e)) return "?" === i ? p : i;
                    return e
                }
                var d = "function",
                    u = "undefined",
                    h = "object",
                    c = "string",
                    l = "model",
                    f = "name",
                    v = "type",
                    b = "vendor",
                    g = "version",
                    m = "architecture",
                    i = "console",
                    n = "mobile",
                    y = "tablet",
                    w = "smarttv",
                    _ = "wearable",
                    E = "embedded",
                    I = "Amazon",
                    S = "Apple",
                    N = "BlackBerry",
                    k = "Browser",
                    O = "Chrome",
                    T = "Firefox",
                    x = "Google",
                    A = "Microsoft",
                    C = "Motorola",
                    R = "Opera",
                    U = "Samsung",
                    D = "Sony",
                    P = "Zebra",
                    q = "Facebook",
                    j = function(e) {
                        return e.toLowerCase()
                    },
                    M = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    V = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [g, [f, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [g, [f, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [f, g],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [g, [f, R + " Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [g, [f, R]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [f, g],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [g, [f, "UC" + k]],
                            [/\bqbcore\/([\w\.]+)/i],
                            [g, [f, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [g, [f, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [g, [f, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [g, [f, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [g, [f, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1 Secure " + k], g
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [g, [f, T + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [g, [f, R + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [g, [f, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [g, [f, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [g, [f, R + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [g, [f, "MIUI " + k]],
                            [/fxios\/([-\w\.]+)/i],
                            [g, [f, T]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [f, "360 " + k]
                            ],
                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                            [
                                [f, /(.+)/, "$1 " + k], g
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [f, /_/g, " "], g
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [f, g],
                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                            [f],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [f, q], g
                            ],
                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                            [f, g],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [g, [f, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [g, [f, O + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [f, O + " WebView"], g
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [g, [f, "Android " + k]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [f, g],
                            [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                            [g, [f, "Mobile Safari"]],
                            [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                            [g, f],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [f, [g, t, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [f, g],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [f, "Netscape"], g
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [g, [f, T + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [f, g]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [m, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [m, j]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [m, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [m, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [m, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [m, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [m, /ower/, "", j]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [m, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [m, j]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [l, [b, U],
                                [v, y]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [l, [b, U],
                                [v, n]
                            ],
                            [/((ipod|iphone)\d+,\d+)/i],
                            [l, [b, S],
                                [v, n]
                            ],
                            [/(ipad\d+,\d+)/i],
                            [l, [b, S],
                                [v, y]
                            ],
                            [/\((ip(?:hone|od)[\w ]*);/i],
                            [l, [b, S],
                                [v, n]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [l, [b, S],
                                [v, y]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [l, [b, "Huawei"],
                                [v, y]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [l, [b, "Huawei"],
                                [v, n]
                            ],
                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [b, "Xiaomi"],
                                [v, n]
                            ],
                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [b, "Xiaomi"],
                                [v, y]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [l, [b, "OPPO"],
                                [v, n]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [l, [b, "Vivo"],
                                [v, n]
                            ],
                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                            [l, [b, "Realme"],
                                [v, n]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [l, [b, C],
                                [v, n]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [l, [b, C],
                                [v, y]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [l, [b, "LG"],
                                [v, y]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [l, [b, "LG"],
                                [v, n]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [l, [b, "Lenovo"],
                                [v, y]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [l, /_/g, " "],
                                [b, "Nokia"],
                                [v, n]
                            ],
                            [/(pixel c)\b/i],
                            [l, [b, x],
                                [v, y]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [l, [b, x],
                                [v, n]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [l, [b, D],
                                [v, n]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [l, "Xperia Tablet"],
                                [b, D],
                                [v, y]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [l, [b, "OnePlus"],
                                [v, n]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [l, [b, I],
                                [v, y]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [l, /(.+)/g, "Fire Phone $1"],
                                [b, I],
                                [v, n]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [l, b, [v, y]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [l, [b, N],
                                [v, n]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [l, [b, "ASUS"],
                                [v, y]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [l, [b, "ASUS"],
                                [v, n]
                            ],
                            [/(nexus 9)/i],
                            [l, [b, "HTC"],
                                [v, y]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [b, [l, /_/g, " "],
                                [v, n]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [l, [b, "Acer"],
                                [v, y]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [l, [b, "Meizu"],
                                [v, n]
                            ],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [l, [b, "Sharp"],
                                [v, n]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [b, l, [v, n]],
                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [b, l, [v, y]],
                            [/(surface duo)/i],
                            [l, [b, A],
                                [v, y]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [l, [b, "Fairphone"],
                                [v, n]
                            ],
                            [/(u304aa)/i],
                            [l, [b, "AT&T"],
                                [v, n]
                            ],
                            [/\bsie-(\w*)/i],
                            [l, [b, "Siemens"],
                                [v, n]
                            ],
                            [/\b(rct\w+) b/i],
                            [l, [b, "RCA"],
                                [v, y]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [l, [b, "Dell"],
                                [v, y]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [l, [b, "Verizon"],
                                [v, y]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [l, [b, "Barnes & Noble"],
                                [v, y]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [l, [b, "NuVision"],
                                [v, y]
                            ],
                            [/\b(k88) b/i],
                            [l, [b, "ZTE"],
                                [v, y]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [l, [b, "ZTE"],
                                [v, n]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [l, [b, "Swiss"],
                                [v, n]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [l, [b, "Swiss"],
                                [v, y]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [l, [b, "Zeki"],
                                [v, y]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [b, "Dragon Touch"], l, [v, y]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [l, [b, "Insignia"],
                                [v, y]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [l, [b, "NextBook"],
                                [v, y]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [b, "Voice"], l, [v, n]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [b, "LvTel"], l, [v, n]
                            ],
                            [/\b(ph-1) /i],
                            [l, [b, "Essential"],
                                [v, n]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [l, [b, "Envizen"],
                                [v, y]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [l, [b, "MachSpeed"],
                                [v, y]
                            ],
                            [/\btu_(1491) b/i],
                            [l, [b, "Rotor"],
                                [v, y]
                            ],
                            [/(shield[\w ]+) b/i],
                            [l, [b, "Nvidia"],
                                [v, y]
                            ],
                            [/(sprint) (\w+)/i],
                            [b, l, [v, n]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [l, /\./g, " "],
                                [b, A],
                                [v, n]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [l, [b, P],
                                [v, y]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [l, [b, P],
                                [v, n]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [b, l, [v, i]],
                            [/droid.+; (shield) bui/i],
                            [l, [b, "Nvidia"],
                                [v, i]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [l, [b, D],
                                [v, i]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [l, [b, A],
                                [v, i]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [b, [v, w]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [l, /^/, "SmartTV"],
                                [b, U],
                                [v, w]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [b, "LG"],
                                [v, w]
                            ],
                            [/(apple) ?tv/i],
                            [b, [l, S + " TV"],
                                [v, w]
                            ],
                            [/crkey/i],
                            [
                                [l, O + "cast"],
                                [b, x],
                                [v, w]
                            ],
                            [/droid.+aft(\w)( bui|\))/i],
                            [l, [b, I],
                                [v, w]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [l, [b, "Sharp"],
                                [v, w]
                            ],
                            [/(bravia[\w- ]+) bui/i],
                            [l, [b, D],
                                [v, w]
                            ],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                            [
                                [b, s],
                                [l, s],
                                [v, w]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [v, w]
                            ],
                            [/((pebble))app/i],
                            [b, l, [v, _]],
                            [/droid.+; (glass) \d/i],
                            [l, [b, x],
                                [v, _]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [l, [b, P],
                                [v, _]
                            ],
                            [/(quest( 2)?)/i],
                            [l, [b, q],
                                [v, _]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [b, [v, E]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                            [l, [v, n]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [l, [v, y]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [v, y]
                            ],
                            [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                            [
                                [v, n]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [l, [b, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [g, [f, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [g, [f, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                            [f, g],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [g, f]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [f, g],
                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                            [f, [g, t, M]],
                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [f, "Windows"],
                                [g, t, M]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [g, /_/g, "."],
                                [f, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [f, "Mac OS"],
                                [g, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                            [g, f],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [f, g],
                            [/\(bb(10);/i],
                            [g, [f, N]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [g, [f, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [g, [f, T + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [g, [f, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [g, [f, O + "cast"]],
                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                            [
                                [f, "Chromium OS"], g
                            ],
                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [f, g],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [f, "Solaris"], g
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                            [f, g]
                        ]
                    },
                    G = function(e, t) {
                        if (typeof e == h && (t = e, e = p), !(this instanceof G)) return new G(e, t).getResult();
                        var i = e || (typeof o != u && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                            n = t ? function(e, t) {
                                var i = {};
                                for (var n in e) t[n] && t[n].length % 2 == 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                                return i
                            }(V, t) : V;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t[f] = p, t[g] = p, a.call(t, i, n.browser), t.major = typeof(e = t.version) == c ? e.replace(/[^\d\.]/g, "").split(".")[0] : p, t
                        }, this.getCPU = function() {
                            var e = {};
                            return e[m] = p, a.call(e, i, n.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[b] = p, e[l] = p, e[v] = p, a.call(e, i, n.device), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[f] = p, e[g] = p, a.call(e, i, n.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[f] = p, e[g] = p, a.call(e, i, n.os), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return i
                        }, this.setUA = function(e) {
                            return i = typeof e == c && 275 < e.length ? s(e, 275) : e, this
                        }, this.setUA(i), this
                    };
                G.VERSION = "0.7.31", G.BROWSER = e([f, g, "major"]), G.CPU = e([m]), G.DEVICE = e([l, b, v, i, n, w, y, _, E]), G.ENGINE = G.OS = e([f, g]), z.exports && (K = z.exports = G), K.UAParser = G;
                var L, F = typeof o != u && (o.jQuery || o.Zepto);
                F && !F.ua && (L = new G, F.ua = L.getResult(), F.ua.get = function() {
                    return L.getUA()
                }, F.ua.set = function(e) {
                    L.setUA(e);
                    var t = L.getResult();
                    for (var i in t) F.ua[i] = t[i]
                })
            }("object" == typeof window ? window : ce)
        }),
        Ne = function() {
            return "undefined" != typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage) || ""
        },
        ke = "US",
        Oe = "EU",
        Te = {
            apiEndpoint: w.EVENT_LOG_URL,
            batchEvents: !1,
            cookieExpiration: 365,
            cookieName: "amplitude_id",
            sameSiteCookie: "Lax",
            cookieForceUpgrade: !1,
            deferInitialization: !1,
            disableCookies: !1,
            deviceIdFromUrlParam: !1,
            domain: "",
            eventUploadPeriodMillis: 3e4,
            eventUploadThreshold: 30,
            forceHttps: !0,
            includeFbclid: !1,
            includeGclid: !1,
            includeReferrer: !1,
            includeUtm: !1,
            language: Ne(),
            library: {
                name: "amplitude-js",
                version: "8.18.4"
            },
            logLevel: "WARN",
            logAttributionCapturedEvent: !1,
            optOut: !1,
            onError: function() {},
            onExitPage: function() {},
            onNewSessionStart: function() {},
            plan: {
                branch: "",
                source: "",
                version: "",
                versionId: ""
            },
            platform: "Web",
            savedMaxCount: 1e3,
            saveEvents: !0,
            saveParamsReferrerOncePerSession: !0,
            secureCookie: !1,
            sessionTimeout: 18e5,
            storage: w.STORAGE_DEFAULT,
            trackingOptions: {
                city: !0,
                country: !0,
                carrier: !0,
                device_manufacturer: !0,
                device_model: !0,
                dma: !0,
                ip_address: !0,
                language: !0,
                os_name: !0,
                os_version: !0,
                platform: !0,
                region: !0,
                version_name: !0
            },
            transport: w.TRANSPORT_HTTP,
            unsetParamsReferrerOnNewSession: !1,
            unsentKey: "amplitude_unsent",
            unsentIdentifyKey: "amplitude_unsent_identify",
            uploadBatchSize: 100,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "Cross-Origin-Resource-Policy": "cross-origin"
            },
            serverZone: ke,
            useDynamicConfig: !1,
            serverZoneBasedApi: !1,
            sessionId: null
        },
        xe = new(function() {
            function e() {
                return p(this, e), e.instance || (this.ingestionEndpoint = w.EVENT_LOG_URL, e.instance = this), e.instance
            }
            return i(e, [{
                key: "refresh",
                value: function(e, t, i) {
                    var n = "https";
                    t || "https:" === h.location.protocol || (n = "http");
                    var o, r, s = n + "://" + function(e) {
                            var t = w.DYNAMIC_CONFIG_URL;
                            switch (e) {
                                case Oe:
                                    t = w.DYNAMIC_CONFIG_EU_URL;
                                    break;
                                case ke:
                                    t = w.DYNAMIC_CONFIG_URL
                            }
                            return t
                        }(e),
                        a = this;
                    !!h.XDomainRequest ? ((o = new h.XDomainRequest).open("GET", s, !0), o.onload = function() {
                        var e = JSON.parse(o.responseText);
                        a.ingestionEndpoint = e.ingestionEndpoint, i && i()
                    }, o.onerror = function() {}, o.ontimeout = function() {}, o.onprogress = function() {}, o.send()) : ((r = new XMLHttpRequest).open("GET", s, !0), r.onreadystatechange = function() {
                        var e;
                        4 === r.readyState && 200 === r.status && (e = JSON.parse(r.responseText), a.ingestionEndpoint = e.ingestionEndpoint, i && i())
                    }, r.send())
                }
            }]), e
        }()),
        Ae = le(function(e, t) {
            ! function(e) {
                var t = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof ce !== "undefined" ? ce : typeof self !== "undefined" ? self : {};

                function i(e, t, i) {
                    return i = {
                        path: t,
                        exports: {},
                        require: function(e, t) {
                            return n(e, t === undefined || t === null ? i.path : t)
                        }
                    }, e(i, i.exports), i.exports
                }

                function n() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }
                var o = i(function(ie, ne) {
                        (function(o, p) {
                            var e = "0.7.31",
                                r = "",
                                s = "?",
                                d = "function",
                                a = "undefined",
                                h = "object",
                                u = "string",
                                t = "major",
                                c = "model",
                                l = "name",
                                f = "type",
                                v = "vendor",
                                b = "version",
                                g = "architecture",
                                i = "console",
                                n = "mobile",
                                m = "tablet",
                                y = "smarttv",
                                w = "wearable",
                                _ = "embedded",
                                E = 275;
                            var I = "Amazon",
                                S = "Apple",
                                N = "ASUS",
                                k = "BlackBerry",
                                O = "Browser",
                                T = "Chrome",
                                x = "Edge",
                                A = "Firefox",
                                C = "Google",
                                R = "Huawei",
                                U = "LG",
                                D = "Microsoft",
                                P = "Motorola",
                                q = "Opera",
                                j = "Samsung",
                                M = "Sony",
                                V = "Xiaomi",
                                G = "Zebra",
                                L = "Facebook";
                            var F = function(e, t) {
                                    var i = {};
                                    for (var n in e) {
                                        if (t[n] && t[n].length % 2 === 0) {
                                            i[n] = t[n].concat(e[n])
                                        } else {
                                            i[n] = e[n]
                                        }
                                    }
                                    return i
                                },
                                z = function(e) {
                                    var t = {};
                                    for (var i = 0; i < e.length; i++) {
                                        t[e[i].toUpperCase()] = e[i]
                                    }
                                    return t
                                },
                                K = function(e, t) {
                                    return typeof e === u ? B(t).indexOf(B(e)) !== -1 : false
                                },
                                B = function(e) {
                                    return e.toLowerCase()
                                },
                                X = function(e) {
                                    return typeof e === u ? e.replace(/[^\d\.]/g, r).split(".")[0] : p
                                },
                                W = function(e, t) {
                                    if (typeof e === u) {
                                        e = e.replace(/^\s\s*/, r).replace(/\s\s*$/, r);
                                        return typeof t === a ? e : e.substring(0, E)
                                    }
                                };
                            var $ = function(e, t) {
                                    var i = 0,
                                        n, o, r, s, a, u;
                                    while (i < t.length && !a) {
                                        var c = t[i],
                                            l = t[i + 1];
                                        n = o = 0;
                                        while (n < c.length && !a) {
                                            a = c[n++].exec(e);
                                            if (!!a) {
                                                for (r = 0; r < l.length; r++) {
                                                    u = a[++o];
                                                    s = l[r];
                                                    if (typeof s === h && s.length > 0) {
                                                        if (s.length === 2) {
                                                            if (typeof s[1] == d) {
                                                                this[s[0]] = s[1].call(this, u)
                                                            } else {
                                                                this[s[0]] = s[1]
                                                            }
                                                        } else if (s.length === 3) {
                                                            if (typeof s[1] === d && !(s[1].exec && s[1].test)) {
                                                                this[s[0]] = u ? s[1].call(this, u, s[2]) : p
                                                            } else {
                                                                this[s[0]] = u ? u.replace(s[1], s[2]) : p
                                                            }
                                                        } else if (s.length === 4) {
                                                            this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : p
                                                        }
                                                    } else {
                                                        this[s] = u ? u : p
                                                    }
                                                }
                                            }
                                        }
                                        i += 2
                                    }
                                },
                                Y = function(e, t) {
                                    for (var i in t) {
                                        if (typeof t[i] === h && t[i].length > 0) {
                                            for (var n = 0; n < t[i].length; n++) {
                                                if (K(t[i][n], e)) {
                                                    return i === s ? p : i
                                                }
                                            }
                                        } else if (K(t[i], e)) {
                                            return i === s ? p : i
                                        }
                                    }
                                    return e
                                };
                            var H = {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                },
                                Z = {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                };
                            var J = {
                                browser: [
                                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                    [b, [l, "Chrome"]],
                                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                    [b, [l, "Edge"]],
                                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                    [l, b],
                                    [/opios[\/ ]+([\w\.]+)/i],
                                    [b, [l, q + " Mini"]],
                                    [/\bopr\/([\w\.]+)/i],
                                    [b, [l, q]],
                                    [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                                    [l, b],
                                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                    [b, [l, "UC" + O]],
                                    [/\bqbcore\/([\w\.]+)/i],
                                    [b, [l, "WeChat(Win) Desktop"]],
                                    [/micromessenger\/([\w\.]+)/i],
                                    [b, [l, "WeChat"]],
                                    [/konqueror\/([\w\.]+)/i],
                                    [b, [l, "Konqueror"]],
                                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                    [b, [l, "IE"]],
                                    [/yabrowser\/([\w\.]+)/i],
                                    [b, [l, "Yandex"]],
                                    [/(avast|avg)\/([\w\.]+)/i],
                                    [
                                        [l, /(.+)/, "$1 Secure " + O], b
                                    ],
                                    [/\bfocus\/([\w\.]+)/i],
                                    [b, [l, A + " Focus"]],
                                    [/\bopt\/([\w\.]+)/i],
                                    [b, [l, q + " Touch"]],
                                    [/coc_coc\w+\/([\w\.]+)/i],
                                    [b, [l, "Coc Coc"]],
                                    [/dolfin\/([\w\.]+)/i],
                                    [b, [l, "Dolphin"]],
                                    [/coast\/([\w\.]+)/i],
                                    [b, [l, q + " Coast"]],
                                    [/miuibrowser\/([\w\.]+)/i],
                                    [b, [l, "MIUI " + O]],
                                    [/fxios\/([-\w\.]+)/i],
                                    [b, [l, A]],
                                    [/\bqihu|(qi?ho?o?|360)browser/i],
                                    [
                                        [l, "360 " + O]
                                    ],
                                    [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                                    [
                                        [l, /(.+)/, "$1 " + O], b
                                    ],
                                    [/(comodo_dragon)\/([\w\.]+)/i],
                                    [
                                        [l, /_/g, " "], b
                                    ],
                                    [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                                    [l, b],
                                    [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                                    [l],
                                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                    [
                                        [l, L], b
                                    ],
                                    [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                    [l, b],
                                    [/\bgsa\/([\w\.]+) .*safari\//i],
                                    [b, [l, "GSA"]],
                                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                                    [b, [l, T + " Headless"]],
                                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                                    [
                                        [l, T + " WebView"], b
                                    ],
                                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                    [b, [l, "Android " + O]],
                                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                    [l, b],
                                    [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                                    [b, [l, "Mobile Safari"]],
                                    [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                                    [b, l],
                                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                    [l, [b, Y, H]],
                                    [/(webkit|khtml)\/([\w\.]+)/i],
                                    [l, b],
                                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                    [
                                        [l, "Netscape"], b
                                    ],
                                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                    [b, [l, A + " Reality"]],
                                    [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                                    [l, b]
                                ],
                                cpu: [
                                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                    [
                                        [g, "amd64"]
                                    ],
                                    [/(ia32(?=;))/i],
                                    [
                                        [g, B]
                                    ],
                                    [/((?:i[346]|x)86)[;\)]/i],
                                    [
                                        [g, "ia32"]
                                    ],
                                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                    [
                                        [g, "arm64"]
                                    ],
                                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                    [
                                        [g, "armhf"]
                                    ],
                                    [/windows (ce|mobile); ppc;/i],
                                    [
                                        [g, "arm"]
                                    ],
                                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                    [
                                        [g, /ower/, r, B]
                                    ],
                                    [/(sun4\w)[;\)]/i],
                                    [
                                        [g, "sparc"]
                                    ],
                                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                    [
                                        [g, B]
                                    ]
                                ],
                                device: [
                                    [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                    [c, [v, j],
                                        [f, m]
                                    ],
                                    [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                    [c, [v, j],
                                        [f, n]
                                    ],
                                    [/((ipod|iphone)\d+,\d+)/i],
                                    [c, [v, S],
                                        [f, n]
                                    ],
                                    [/(ipad\d+,\d+)/i],
                                    [c, [v, S],
                                        [f, m]
                                    ],
                                    [/\((ip(?:hone|od)[\w ]*);/i],
                                    [c, [v, S],
                                        [f, n]
                                    ],
                                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                    [c, [v, S],
                                        [f, m]
                                    ],
                                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                    [c, [v, R],
                                        [f, m]
                                    ],
                                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                    [c, [v, R],
                                        [f, n]
                                    ],
                                    [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                    [
                                        [c, /_/g, " "],
                                        [v, V],
                                        [f, n]
                                    ],
                                    [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                    [
                                        [c, /_/g, " "],
                                        [v, V],
                                        [f, m]
                                    ],
                                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                    [c, [v, "OPPO"],
                                        [f, n]
                                    ],
                                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                    [c, [v, "Vivo"],
                                        [f, n]
                                    ],
                                    [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                    [c, [v, "Realme"],
                                        [f, n]
                                    ],
                                    [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                    [c, [v, P],
                                        [f, n]
                                    ],
                                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                    [c, [v, P],
                                        [f, m]
                                    ],
                                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                    [c, [v, U],
                                        [f, m]
                                    ],
                                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                    [c, [v, U],
                                        [f, n]
                                    ],
                                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                    [c, [v, "Lenovo"],
                                        [f, m]
                                    ],
                                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                    [
                                        [c, /_/g, " "],
                                        [v, "Nokia"],
                                        [f, n]
                                    ],
                                    [/(pixel c)\b/i],
                                    [c, [v, C],
                                        [f, m]
                                    ],
                                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                    [c, [v, C],
                                        [f, n]
                                    ],
                                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                    [c, [v, M],
                                        [f, n]
                                    ],
                                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                    [
                                        [c, "Xperia Tablet"],
                                        [v, M],
                                        [f, m]
                                    ],
                                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                    [c, [v, "OnePlus"],
                                        [f, n]
                                    ],
                                    [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                    [c, [v, I],
                                        [f, m]
                                    ],
                                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                    [
                                        [c, /(.+)/g, "Fire Phone $1"],
                                        [v, I],
                                        [f, n]
                                    ],
                                    [/(playbook);[-\w\),; ]+(rim)/i],
                                    [c, v, [f, m]],
                                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                    [c, [v, k],
                                        [f, n]
                                    ],
                                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                    [c, [v, N],
                                        [f, m]
                                    ],
                                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                    [c, [v, N],
                                        [f, n]
                                    ],
                                    [/(nexus 9)/i],
                                    [c, [v, "HTC"],
                                        [f, m]
                                    ],
                                    [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                    [v, [c, /_/g, " "],
                                        [f, n]
                                    ],
                                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                    [c, [v, "Acer"],
                                        [f, m]
                                    ],
                                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                    [c, [v, "Meizu"],
                                        [f, n]
                                    ],
                                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                    [c, [v, "Sharp"],
                                        [f, n]
                                    ],
                                    [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                    [v, c, [f, n]],
                                    [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                    [v, c, [f, m]],
                                    [/(surface duo)/i],
                                    [c, [v, D],
                                        [f, m]
                                    ],
                                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                    [c, [v, "Fairphone"],
                                        [f, n]
                                    ],
                                    [/(u304aa)/i],
                                    [c, [v, "AT&T"],
                                        [f, n]
                                    ],
                                    [/\bsie-(\w*)/i],
                                    [c, [v, "Siemens"],
                                        [f, n]
                                    ],
                                    [/\b(rct\w+) b/i],
                                    [c, [v, "RCA"],
                                        [f, m]
                                    ],
                                    [/\b(venue[\d ]{2,7}) b/i],
                                    [c, [v, "Dell"],
                                        [f, m]
                                    ],
                                    [/\b(q(?:mv|ta)\w+) b/i],
                                    [c, [v, "Verizon"],
                                        [f, m]
                                    ],
                                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                    [c, [v, "Barnes & Noble"],
                                        [f, m]
                                    ],
                                    [/\b(tm\d{3}\w+) b/i],
                                    [c, [v, "NuVision"],
                                        [f, m]
                                    ],
                                    [/\b(k88) b/i],
                                    [c, [v, "ZTE"],
                                        [f, m]
                                    ],
                                    [/\b(nx\d{3}j) b/i],
                                    [c, [v, "ZTE"],
                                        [f, n]
                                    ],
                                    [/\b(gen\d{3}) b.+49h/i],
                                    [c, [v, "Swiss"],
                                        [f, n]
                                    ],
                                    [/\b(zur\d{3}) b/i],
                                    [c, [v, "Swiss"],
                                        [f, m]
                                    ],
                                    [/\b((zeki)?tb.*\b) b/i],
                                    [c, [v, "Zeki"],
                                        [f, m]
                                    ],
                                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                    [
                                        [v, "Dragon Touch"], c, [f, m]
                                    ],
                                    [/\b(ns-?\w{0,9}) b/i],
                                    [c, [v, "Insignia"],
                                        [f, m]
                                    ],
                                    [/\b((nxa|next)-?\w{0,9}) b/i],
                                    [c, [v, "NextBook"],
                                        [f, m]
                                    ],
                                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                    [
                                        [v, "Voice"], c, [f, n]
                                    ],
                                    [/\b(lvtel\-)?(v1[12]) b/i],
                                    [
                                        [v, "LvTel"], c, [f, n]
                                    ],
                                    [/\b(ph-1) /i],
                                    [c, [v, "Essential"],
                                        [f, n]
                                    ],
                                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                    [c, [v, "Envizen"],
                                        [f, m]
                                    ],
                                    [/\b(trio[-\w\. ]+) b/i],
                                    [c, [v, "MachSpeed"],
                                        [f, m]
                                    ],
                                    [/\btu_(1491) b/i],
                                    [c, [v, "Rotor"],
                                        [f, m]
                                    ],
                                    [/(shield[\w ]+) b/i],
                                    [c, [v, "Nvidia"],
                                        [f, m]
                                    ],
                                    [/(sprint) (\w+)/i],
                                    [v, c, [f, n]],
                                    [/(kin\.[onetw]{3})/i],
                                    [
                                        [c, /\./g, " "],
                                        [v, D],
                                        [f, n]
                                    ],
                                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                    [c, [v, G],
                                        [f, m]
                                    ],
                                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                    [c, [v, G],
                                        [f, n]
                                    ],
                                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                    [v, c, [f, i]],
                                    [/droid.+; (shield) bui/i],
                                    [c, [v, "Nvidia"],
                                        [f, i]
                                    ],
                                    [/(playstation [345portablevi]+)/i],
                                    [c, [v, M],
                                        [f, i]
                                    ],
                                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                    [c, [v, D],
                                        [f, i]
                                    ],
                                    [/smart-tv.+(samsung)/i],
                                    [v, [f, y]],
                                    [/hbbtv.+maple;(\d+)/i],
                                    [
                                        [c, /^/, "SmartTV"],
                                        [v, j],
                                        [f, y]
                                    ],
                                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                    [
                                        [v, U],
                                        [f, y]
                                    ],
                                    [/(apple) ?tv/i],
                                    [v, [c, S + " TV"],
                                        [f, y]
                                    ],
                                    [/crkey/i],
                                    [
                                        [c, T + "cast"],
                                        [v, C],
                                        [f, y]
                                    ],
                                    [/droid.+aft(\w)( bui|\))/i],
                                    [c, [v, I],
                                        [f, y]
                                    ],
                                    [/\(dtv[\);].+(aquos)/i],
                                    [c, [v, "Sharp"],
                                        [f, y]
                                    ],
                                    [/(bravia[\w- ]+) bui/i],
                                    [c, [v, M],
                                        [f, y]
                                    ],
                                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                    [
                                        [v, W],
                                        [c, W],
                                        [f, y]
                                    ],
                                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                    [
                                        [f, y]
                                    ],
                                    [/((pebble))app/i],
                                    [v, c, [f, w]],
                                    [/droid.+; (glass) \d/i],
                                    [c, [v, C],
                                        [f, w]
                                    ],
                                    [/droid.+; (wt63?0{2,3})\)/i],
                                    [c, [v, G],
                                        [f, w]
                                    ],
                                    [/(quest( 2)?)/i],
                                    [c, [v, L],
                                        [f, w]
                                    ],
                                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                    [v, [f, _]],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                    [c, [f, n]],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                    [c, [f, m]],
                                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                    [
                                        [f, m]
                                    ],
                                    [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                                    [
                                        [f, n]
                                    ],
                                    [/(android[-\w\. ]{0,9});.+buil/i],
                                    [c, [v, "Generic"]]
                                ],
                                engine: [
                                    [/windows.+ edge\/([\w\.]+)/i],
                                    [b, [l, x + "HTML"]],
                                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                    [b, [l, "Blink"]],
                                    [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                                    [l, b],
                                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                    [b, l]
                                ],
                                os: [
                                    [/microsoft (windows) (vista|xp)/i],
                                    [l, b],
                                    [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                    [l, [b, Y, Z]],
                                    [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                    [
                                        [l, "Windows"],
                                        [b, Y, Z]
                                    ],
                                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                    [
                                        [b, /_/g, "."],
                                        [l, "iOS"]
                                    ],
                                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                    [
                                        [l, "Mac OS"],
                                        [b, /_/g, "."]
                                    ],
                                    [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                                    [b, l],
                                    [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                    [l, b],
                                    [/\(bb(10);/i],
                                    [b, [l, k]],
                                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                    [b, [l, "Symbian"]],
                                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                    [b, [l, A + " OS"]],
                                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                    [b, [l, "webOS"]],
                                    [/crkey\/([\d\.]+)/i],
                                    [b, [l, T + "cast"]],
                                    [/(cros) [\w]+ ([\w\.]+\w)/i],
                                    [
                                        [l, "Chromium OS"], b
                                    ],
                                    [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                    [l, b],
                                    [/(sunos) ?([\w\.\d]*)/i],
                                    [
                                        [l, "Solaris"], b
                                    ],
                                    [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                                    [l, b]
                                ]
                            };
                            var Q = function(e, t) {
                                if (typeof e === h) {
                                    t = e;
                                    e = p
                                }
                                if (!(this instanceof Q)) {
                                    return new Q(e, t).getResult()
                                }
                                var i = e || (typeof o !== a && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : r);
                                var n = t ? F(J, t) : J;
                                this.getBrowser = function() {
                                    var e = {};
                                    e[l] = p;
                                    e[b] = p;
                                    $.call(e, i, n.browser);
                                    e.major = X(e.version);
                                    return e
                                };
                                this.getCPU = function() {
                                    var e = {};
                                    e[g] = p;
                                    $.call(e, i, n.cpu);
                                    return e
                                };
                                this.getDevice = function() {
                                    var e = {};
                                    e[v] = p;
                                    e[c] = p;
                                    e[f] = p;
                                    $.call(e, i, n.device);
                                    return e
                                };
                                this.getEngine = function() {
                                    var e = {};
                                    e[l] = p;
                                    e[b] = p;
                                    $.call(e, i, n.engine);
                                    return e
                                };
                                this.getOS = function() {
                                    var e = {};
                                    e[l] = p;
                                    e[b] = p;
                                    $.call(e, i, n.os);
                                    return e
                                };
                                this.getResult = function() {
                                    return {
                                        ua: this.getUA(),
                                        browser: this.getBrowser(),
                                        engine: this.getEngine(),
                                        os: this.getOS(),
                                        device: this.getDevice(),
                                        cpu: this.getCPU()
                                    }
                                };
                                this.getUA = function() {
                                    return i
                                };
                                this.setUA = function(e) {
                                    i = typeof e === u && e.length > E ? W(e, E) : e;
                                    return this
                                };
                                this.setUA(i);
                                return this
                            };
                            Q.VERSION = e;
                            Q.BROWSER = z([l, b, t]);
                            Q.CPU = z([g]);
                            Q.DEVICE = z([c, v, f, i, n, y, m, w, _]);
                            Q.ENGINE = Q.OS = z([l, b]); {
                                if (ie.exports) {
                                    ne = ie.exports = Q
                                }
                                ne.UAParser = Q
                            }
                            var ee = typeof o !== a && (o.jQuery || o.Zepto);
                            if (ee && !ee.ua) {
                                var te = new Q;
                                ee.ua = te.getResult();
                                ee.ua.get = function() {
                                    return te.getUA()
                                };
                                ee.ua.set = function(e) {
                                    te.setUA(e);
                                    var t = te.getResult();
                                    for (var i in t) {
                                        ee.ua[i] = t[i]
                                    }
                                }
                            }
                        })(typeof window === "object" ? window : t)
                    }),
                    r = function() {
                        function e() {
                            this.ua = new o.UAParser(navigator.userAgent).getResult()
                        }
                        e.prototype.getApplicationContext = function() {
                            return {
                                versionName: this.versionName,
                                language: u(),
                                platform: "Web",
                                os: s(this.ua),
                                deviceModel: a(this.ua)
                            }
                        };
                        return e
                    }(),
                    s = function(e) {
                        var t, i;
                        return [(t = e.browser) === null || t === void 0 ? void 0 : t.name, (i = e.browser) === null || i === void 0 ? void 0 : i.major].filter(function(e) {
                            return e !== null && e !== undefined
                        }).join(" ")
                    },
                    a = function(e) {
                        var t;
                        return (t = e.os) === null || t === void 0 ? void 0 : t.name
                    },
                    u = function() {
                        return typeof navigator !== "undefined" && (navigator.languages && navigator.languages[0] || navigator.language) || ""
                    },
                    c = function() {
                        function e() {
                            this.queue = []
                        }
                        e.prototype.logEvent = function(e) {
                            if (!this.receiver) {
                                if (this.queue.length < 512) {
                                    this.queue.push(e)
                                }
                            } else {
                                this.receiver(e)
                            }
                        };
                        e.prototype.setEventReceiver = function(t) {
                            this.receiver = t;
                            if (this.queue.length > 0) {
                                this.queue.forEach(function(e) {
                                    t(e)
                                });
                                this.queue = []
                            }
                        };
                        return e
                    }(),
                    l = function() {
                        l = Object.assign || function e(t) {
                            for (var i, n = 1, o = arguments.length; n < o; n++) {
                                i = arguments[n];
                                for (var r in i)
                                    if (Object.prototype.hasOwnProperty.call(i, r)) t[r] = i[r]
                            }
                            return t
                        };
                        return l.apply(this, arguments)
                    },
                    v = "$set",
                    b = "$unset",
                    g = "$clearAll";
                if (!Object.entries) {
                    Object.entries = function(e) {
                        var t = Object.keys(e);
                        var i = t.length;
                        var n = new Array(i);
                        while (i--) {
                            n[i] = [t[i], e[t[i]]]
                        }
                        return n
                    }
                }
                var p = function() {
                        function e() {
                            this.identity = {
                                userProperties: {}
                            };
                            this.listeners = new Set
                        }
                        e.prototype.editIdentity = function() {
                            var e = this;
                            var t = l({}, this.identity.userProperties);
                            var f = l(l({}, this.identity), {
                                userProperties: t
                            });
                            return {
                                setUserId: function(e) {
                                    f.userId = e;
                                    return this
                                },
                                setDeviceId: function(e) {
                                    f.deviceId = e;
                                    return this
                                },
                                setUserProperties: function(e) {
                                    f.userProperties = e;
                                    return this
                                },
                                updateUserProperties: function(e) {
                                    var t = f.userProperties || {};
                                    for (var i = 0, n = Object.entries(e); i < n.length; i++) {
                                        var o = n[i],
                                            r = o[0],
                                            s = o[1];
                                        switch (r) {
                                            case v:
                                                for (var a = 0, u = Object.entries(s); a < u.length; a++) {
                                                    var c = u[a],
                                                        l = c[0],
                                                        p = c[1];
                                                    t[l] = p
                                                }
                                                break;
                                            case b:
                                                for (var d = 0, h = Object.keys(s); d < h.length; d++) {
                                                    var l = h[d];
                                                    delete t[l]
                                                }
                                                break;
                                            case g:
                                                t = {};
                                                break
                                        }
                                    }
                                    f.userProperties = t;
                                    return this
                                },
                                commit: function() {
                                    e.setIdentity(f);
                                    return this
                                }
                            }
                        };
                        e.prototype.getIdentity = function() {
                            return l({}, this.identity)
                        };
                        e.prototype.setIdentity = function(t) {
                            var e = l({}, this.identity);
                            this.identity = l({}, t);
                            if (!f(e, this.identity)) {
                                this.listeners.forEach(function(e) {
                                    e(t)
                                })
                            }
                        };
                        e.prototype.addIdentityListener = function(e) {
                            this.listeners.add(e)
                        };
                        e.prototype.removeIdentityListener = function(e) {
                            this.listeners.delete(e)
                        };
                        return e
                    }(),
                    f = function(t, i) {
                        var e = ["string", "number", "boolean", "undefined"];
                        var n = typeof t;
                        var o = typeof i;
                        if (n !== o) {
                            return false
                        }
                        for (var r = 0, s = e; r < s.length; r++) {
                            var a = s[r];
                            if (a === n) {
                                return t === i
                            }
                        }
                        if (t.length !== i.length) {
                            return false
                        }
                        var u = Array.isArray(t);
                        var c = Array.isArray(i);
                        if (u !== c) {
                            return false
                        }
                        if (u && c) {
                            for (var l = 0; l < t.length; l++) {
                                if (!f(t[l], i[l])) {
                                    return false
                                }
                            }
                        } else {
                            var p = Object.keys(t).sort();
                            var d = Object.keys(i).sort();
                            if (!f(p, d)) {
                                return false
                            }
                            var h = true;
                            Object.keys(t).forEach(function(e) {
                                if (!f(t[e], i[e])) {
                                    h = false
                                }
                            });
                            return h
                        }
                        return true
                    },
                    d = typeof globalThis !== "undefined" ? globalThis : ce || self,
                    h = function() {
                        function t() {
                            this.identityStore = new p;
                            this.eventBridge = new c;
                            this.applicationContextProvider = new r
                        }
                        t.getInstance = function(e) {
                            if (!d["analyticsConnectorInstances"]) {
                                d["analyticsConnectorInstances"] = {}
                            }
                            if (!d["analyticsConnectorInstances"][e]) {
                                d["analyticsConnectorInstances"][e] = new t
                            }
                            return d["analyticsConnectorInstances"][e]
                        };
                        return t
                    }();
                e.AnalyticsConnector = h, Object.defineProperty(e, "__esModule", {
                    value: true
                })
            }(t)
        });
    Ie.prototype.Identify = re, Ie.prototype.Revenue = _e, Ie.prototype.init = function(e, o, r, t) {
        var s = this;
        if ("string" !== _(e) || q(e)) P.error("Invalid apiKey. Please re-initialize with a valid apiKey");
        else try {
            this._connector = Ae.AnalyticsConnector.getInstance(this._instanceName), Re(this.options, r), (d() || j()) && void 0 !== h.Prototype && Array.prototype.toJSON && (function() {
                var e;
                if (d()) {
                    var t = window,
                        i = Array;
                    if (void 0 !== t.Prototype && void 0 !== (null === (e = i.prototype) || void 0 === e ? void 0 : e.toJSON)) return delete i.prototype.toJSON
                }
            }(), P.warn("Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify")), this.options.cookieName !== Te.cookieName && P.warn("The cookieName option is deprecated. We will be ignoring it for newer cookies"), this.options.serverZoneBasedApi && (this.options.apiEndpoint = Ee(this.options.serverZone)), this._refreshDynamicConfig(), this.options.apiKey = e, this._storageSuffix = "_" + e + (this._instanceName === w.DEFAULT_INSTANCE ? "" : "_" + this._instanceName), this._storageSuffixV5 = e.slice(0, 6), this._oldCookiename = this.options.cookieName + this._storageSuffix, this._unsentKey = this.options.unsentKey + this._storageSuffix, this._unsentIdentifyKey = this.options.unsentIdentifyKey + this._storageSuffix, this._cookieName = w.COOKIE_PREFIX + "_" + this._storageSuffixV5, this.cookieStorage.options({
                expirationDays: this.options.cookieExpiration,
                domain: this.options.domain,
                secure: this.options.secureCookie,
                sameSite: this.options.sameSiteCookie
            }), this._metadataStorage = new ae({
                storageKey: this._cookieName,
                disableCookies: this.options.disableCookies,
                expirationDays: this.options.cookieExpiration,
                domain: this.options.domain,
                secure: this.options.secureCookie,
                sameSite: this.options.sameSiteCookie,
                storage: this.options.storage
            });
            var i = !!this.cookieStorage.get(this._oldCookiename),
                n = !!this._metadataStorage.load();
            this._useOldCookie = !n && i && !this.options.cookieForceUpgrade;
            var a = n || i;
            if (this.options.deferInitialization && !a) return void this._deferInitialization(e, o, r, t);
            this.options.domain = this.cookieStorage.options().domain, "string" === _(this.options.logLevel) && D(this.options.logLevel);
            var u = Le(this);
            this._apiPropertiesTrackingOptions = 0 < Object.keys(u).length ? {
                tracking_options: u
            } : {}, this.options.cookieForceUpgrade && i && (n || De(this), this.cookieStorage.remove(this._oldCookiename)), Ue(this), this._pendingReadStorage = !0;
            this.options.saveEvents && (this._unsentEvents = this._loadSavedUnsentEvents(this.options.unsentKey).map(function(e) {
                    return {
                        event: e
                    }
                }).concat(this._unsentEvents), this._unsentIdentifys = this._loadSavedUnsentEvents(this.options.unsentIdentifyKey).map(function(e) {
                    return {
                        event: e
                    }
                }).concat(this._unsentIdentifys)), r && r.onNewSessionStart && this.onNewSessionStart(this.options.onNewSessionStart),
                function(e) {
                    r && r.deviceId && !z(r.deviceId) && (P.error('Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(r.deviceId, '"')), delete r.deviceId), s.options.deviceId = s._getInitialDeviceId(r && r.deviceId, e), s.options.userId = "string" === _(o) && !q(o) && o || "number" === _(o) && o.toString() || s.options.userId || null;
                    var t = (new Date).getTime(),
                        i = !s._sessionId || !s._lastEventTime || t - s._lastEventTime > s.options.sessionTimeout || s.options.sessionId;
                    i && (s.options.unsetParamsReferrerOnNewSession && s._unsetUTMParams(), s._newSession = !0, s._sessionId = s.options.sessionId || t, s.options.sessionId = void 0, s.options.saveParamsReferrerOncePerSession && s._trackParamsAndReferrer()), s.options.saveParamsReferrerOncePerSession || s._trackParamsAndReferrer(), s.options.saveEvents && (Ce(s._unsentEvents), Ce(s._unsentIdentifys)), s._lastEventTime = t, qe(s), s._pendingReadStorage = !1, s._sendEventsIfReady();
                    for (var n = 0; n < s._onInitCallbacks.length; n++) s._onInitCallbacks[n](s);
                    s._onInitCallbacks = [], s._isInitialized = !0, i && s._runNewSessionStartCallbacks()
                }(), this.runQueuedFunctions(), "function" === _(t) && t(this);
            var c = this.options.onExitPage;
            "function" === _(c) && (this.pageHandlersAdded || (this.pageHandlersAdded = !0, h.addEventListener("pagehide", function() {
                var e;
                e = s.options.transport, s.setTransport(w.TRANSPORT_BEACON), c(), s.setTransport(e)
            }, !1))), this._connector.eventBridge.setEventReceiver(function(e) {
                s._logEvent(e.eventType, e.eventProperties, e.userProperties)
            });
            var l = this._connector.identityStore.editIdentity();
            this.options.deviceId && l.setDeviceId(this.options.deviceId), this.options.userId && l.setUserId(this.options.userId), l.commit()
        } catch (e) {
            P.error(e), r && "function" === _(r.onError) && r.onError(e)
        }
    }, Ie.prototype._runNewSessionStartCallbacks = function() {
        for (var e = 0; e < this._onNewSessionStartCallbacks.length; e++) this._onNewSessionStartCallbacks[e](this)
    }, Ie.prototype.deleteLowerLevelDomainCookies = function() {
        var e = E(),
            t = this.options.domain && "." === this.options.domain[0] ? this.options.domain.slice(1) : this.options.domain;
        if (t && j() && e !== t && new RegExp(t + "$").test(e)) {
            for (var i = e.split("."), n = t.split("."), o = i.length; o > n.length; --o) {
                var r = i.slice(i.length - o).join(".");
                W.set(this._cookieName, null, {
                    domain: "." + r
                })
            }
            W.set(this._cookieName, null, {})
        }
    }, Ie.prototype._getInitialDeviceId = function(e, t) {
        if (e) return e;
        if (this.options.deviceIdFromUrlParam) {
            var i = this._getDeviceIdFromUrlParam(this._getUrlParams());
            if (i) return i
        }
        return this.options.deviceId ? this.options.deviceId : t || v()
    };
    var Ce = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t].event.user_properties,
                n = e[t].event.event_properties,
                o = e[t].event.groups;
            e[t].event.user_properties = F(i), e[t].event.event_properties = F(n), e[t].event.groups = G(o)
        }
    };
    Ie.prototype._trackParamsAndReferrer = function() {
        var e, t, i, n, o;
        this.options.includeUtm && (e = this._initUtmData()), this.options.includeReferrer && (t = this._saveReferrer(this._getReferrer())), this.options.includeGclid && (i = this._saveGclid(this._getUrlParams())), this.options.includeFbclid && (n = this._saveFbclid(this._getUrlParams())), this.options.logAttributionCapturedEvent && (o = y({}, e, t, i, n), 0 < Object.keys(o).length && this.logEvent(w.ATTRIBUTION_EVENT, o))
    };
    var Re = function e(t, i) {
        if ("object" === _(i)) {
            var n, o, r, s = new Set(["headers"]);
            for (var a in i) s.has(a) ? t[a] = y({}, t[a], i[a]) : Object.prototype.hasOwnProperty.call(i, a) && (n = a, r = o = void 0, Object.prototype.hasOwnProperty.call(t, n) && (o = i[n], r = _(t[n]), "transport" === n && !K(o) || ("sessionId" !== n || null === o ? L(o, n + " option", r) && ("boolean" === r ? t[n] = !!o : "string" === r && !q(o) || "number" === r && 0 < o || "function" === r ? t[n] = o : "object" === r && e(t[n], o)) : t[n] = B(o) ? o : null)))
        }
    };
    Ie.prototype.runQueuedFunctions = function() {
        var e = this._q;
        this._q = [];
        for (var t = 0; t < e.length; t++) {
            var i = this[e[t][0]];
            "function" === _(i) && i.apply(this, e[t].slice(1))
        }
    }, Ie.prototype._apiKeySet = function(e) {
        return !q(this.options.apiKey) || (P.error("Invalid apiKey. Please set a valid apiKey with init() before calling " + e), !1)
    }, Ie.prototype._loadSavedUnsentEvents = function(e) {
        var t = this._getFromStorage(ne, e),
            i = this._parseSavedUnsentEventsString(t, e);
        return this._setInStorage(ne, e, JSON.stringify(i)), i
    }, Ie.prototype._parseSavedUnsentEventsString = function(e, t) {
        if (q(e)) return [];
        if ("string" === _(e)) try {
            var i = JSON.parse(e);
            if ("array" === _(i)) return i
        } catch (e) {}
        return P.error("Unable to load " + t + " events. Restart with a new empty queue."), []
    }, Ie.prototype.isNewSession = function() {
        return this._newSession
    }, Ie.prototype.onInit = function(e) {
        this._isInitialized ? e(this) : this._onInitCallbacks.push(e)
    }, Ie.prototype.onNewSessionStart = function(e) {
        this._onNewSessionStartCallbacks.push(e)
    }, Ie.prototype.getSessionId = function() {
        return this._sessionId
    }, Ie.prototype.nextEventId = function() {
        return this._eventId++, this._eventId
    }, Ie.prototype.nextIdentifyId = function() {
        return this._identifyId++, this._identifyId
    }, Ie.prototype.nextSequenceNumber = function() {
        return this._sequenceNumber++, this._sequenceNumber
    }, Ie.prototype._unsentCount = function() {
        return this._unsentEvents.length + this._unsentIdentifys.length
    }, Ie.prototype._sendEventsIfReady = function() {
        return 0 !== this._unsentCount() && (!this.options.batchEvents || this._unsentCount() >= this.options.eventUploadThreshold || this.options.transport === w.TRANSPORT_BEACON ? (this.sendEvents(), !0) : (this._updateScheduled || (this._updateScheduled = !0, setTimeout(function() {
            this._updateScheduled = !1, this.sendEvents()
        }.bind(this), this.options.eventUploadPeriodMillis)), !1))
    }, Ie.prototype.clearStorage = function() {
        return this._metadataStorage.clear()
    }, Ie.prototype._getFromStorage = function(e, t) {
        return e.getItem(t + this._storageSuffix)
    }, Ie.prototype._setInStorage = function(e, t, i) {
        e.setItem(t + this._storageSuffix, i)
    };
    var Ue = function(e) {
            var t, i;
            e._useOldCookie ? "object" !== _(t = e.cookieStorage.get(e._oldCookiename)) || Pe(e, t) : "object" === _(i = e._metadataStorage.load()) && Pe(e, i)
        },
        De = function(e) {
            var t = e.cookieStorage.get(e._oldCookiename);
            "object" === _(t) && (Pe(e, t), qe(e))
        },
        Pe = function(e, t) {
            t.deviceId && (e.options.deviceId = t.deviceId), t.userId && (e.options.userId = t.userId), null !== t.optOut && void 0 !== t.optOut && !1 !== t.optOut && (e.options.optOut = t.optOut), t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)), t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)), t.eventId && (e._eventId = parseInt(t.eventId, 10)), t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)), t.sequenceNumber && (e._sequenceNumber = parseInt(t.sequenceNumber, 10))
        },
        qe = function(e) {
            var t = {
                deviceId: e.options.deviceId,
                userId: e.options.userId,
                optOut: e.options.optOut,
                sessionId: e._sessionId,
                lastEventTime: e._lastEventTime,
                eventId: e._eventId,
                identifyId: e._identifyId,
                sequenceNumber: e._sequenceNumber
            };
            e._useOldCookie ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t) : e._metadataStorage.save(t)
        };
    Ie.prototype._initUtmData = function(e, t) {
        e = e || this._getUrlParams(), t = t || this.cookieStorage.get("__utmz");
        var i = oe(t, e);
        return je(this, i), i
    }, Ie.prototype._unsetUTMParams = function() {
        var e = new re;
        e.unset(w.REFERRER), e.unset(w.UTM_SOURCE), e.unset(w.UTM_MEDIUM), e.unset(w.UTM_CAMPAIGN), e.unset(w.UTM_TERM), e.unset(w.UTM_CONTENT), this.identify(e)
    };
    var je = function(e, t) {
        if ("object" === _(t) && 0 !== Object.keys(t).length) {
            var i = new re;
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i.setOnce("initial_" + n, t[n]), i.set(n, t[n]));
            e.identify(i)
        }
    };
    Ie.prototype._getReferrer = function() {
        return "undefined" != typeof document ? document.referrer : ""
    }, Ie.prototype._getUrlParams = function() {
        return h.location.search
    }, Ie.prototype._saveGclid = function(e) {
        var t = M("gclid", e);
        if (!q(t)) {
            var i = {
                gclid: t
            };
            return je(this, i), i
        }
    }, Ie.prototype._saveFbclid = function(e) {
        var t = M("fbclid", e);
        if (!q(t)) {
            var i = {
                fbclid: t
            };
            return je(this, i), i
        }
    }, Ie.prototype._getDeviceIdFromUrlParam = function(e) {
        return M(w.AMP_DEVICE_ID_PARAM, e)
    }, Ie.prototype._getReferringDomain = function(e) {
        if (q(e)) return null;
        var t = e.split("/");
        return 3 <= t.length ? t[2] : null
    }, Ie.prototype._saveReferrer = function(e) {
        if (!q(e)) {
            var t = {
                referrer: e,
                referring_domain: this._getReferringDomain(e)
            };
            return je(this, t), t
        }
    }, Ie.prototype.saveEvents = function() {
        try {
            var e = JSON.stringify(this._unsentEvents.map(function(e) {
                return e.event
            }));
            this._setInStorage(ne, this.options.unsentKey, e)
        } catch (e) {}
        try {
            var t = JSON.stringify(this._unsentIdentifys.map(function(e) {
                return e.event
            }));
            this._setInStorage(ne, this.options.unsentIdentifyKey, t)
        } catch (e) {}
    }, Ie.prototype.setDomain = function(e) {
        if (this._shouldDeferCall()) return this._q.push(["setDomain"].concat(Array.prototype.slice.call(arguments, 0)));
        if (L(e, "domain", "string")) try {
            this.cookieStorage.options({
                expirationDays: this.options.cookieExpiration,
                secure: this.options.secureCookie,
                domain: e,
                sameSite: this.options.sameSiteCookie
            }), this.options.domain = this.cookieStorage.options().domain, Ue(this), qe(this)
        } catch (e) {
            P.error(e)
        }
    }, Ie.prototype.setUserId = function(e, t) {
        var i = 1 < arguments.length && void 0 !== t && t;
        if (L(i, "startNewSession", "boolean")) {
            if (this._shouldDeferCall()) return this._q.push(["setUserId"].concat(Array.prototype.slice.call(arguments, 0)));
            try {
                this.options.userId = null != e && "" + e || null, i && (this.options.unsetParamsReferrerOnNewSession && this._unsetUTMParams(), this._newSession = !0, this._sessionId = (new Date).getTime(), this._runNewSessionStartCallbacks(), this.options.saveParamsReferrerOncePerSession && this._trackParamsAndReferrer()), qe(this), this._connector && this._connector.identityStore.editIdentity().setUserId(this.options.userId).commit()
            } catch (e) {
                P.error(e)
            }
        }
    }, Ie.prototype.setGroup = function(e, t) {
        if (this._shouldDeferCall()) return this._q.push(["setGroup"].concat(Array.prototype.slice.call(arguments, 0)));
        var i, n;
        this._apiKeySet("setGroup()") && L(e, "groupType", "string") && !q(e) && ((i = {})[e] = t, n = (new re).set(e, t), this._logEvent(w.IDENTIFY_EVENT, null, null, n.userPropertiesOperations, i, null, null, null))
    }, Ie.prototype.setOptOut = function(e) {
        if (this._shouldDeferCall()) return this._q.push(["setOptOut"].concat(Array.prototype.slice.call(arguments, 0)));
        if (L(e, "enable", "boolean")) try {
            this.options.optOut = e, qe(this)
        } catch (e) {
            P.error(e)
        }
    }, Ie.prototype.setSessionId = function(e) {
        if (L(e, "sessionId", "number")) try {
            this._sessionId = e, qe(this)
        } catch (e) {
            P.error(e)
        }
    }, Ie.prototype.resetSessionId = function() {
        this.setSessionId((new Date).getTime())
    }, Ie.prototype.regenerateDeviceId = function() {
        if (this._shouldDeferCall()) return this._q.push(["regenerateDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
        this.setDeviceId(v())
    }, Ie.prototype.setDeviceId = function(e) {
        if (this._shouldDeferCall()) return this._q.push(["setDeviceId"].concat(Array.prototype.slice.call(arguments, 0)));
        if (z(e)) try {
            q(e) || (this.options.deviceId = "" + e, qe(this), this._connector && this._connector.identityStore.editIdentity().setDeviceId(this.options.deviceId).commit())
        } catch (e) {
            P.error(e)
        }
    }, Ie.prototype.setTransport = function(e) {
        if (this._shouldDeferCall()) return this._q.push(["setTransport"].concat(Array.prototype.slice.call(arguments, 0)));
        K(e) && (this.options.transport = e)
    }, Ie.prototype.setUserProperties = function(e) {
        if (this._shouldDeferCall()) return this._q.push(["setUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
        if (this._apiKeySet("setUserProperties()") && L(e, "userProperties", "object")) {
            var t = V(F(e));
            if (0 !== Object.keys(t).length) {
                var i = new re;
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && i.set(n, t[n]);
                this.identify(i)
            }
        }
    }, Ie.prototype.clearUserProperties = function() {
        if (this._shouldDeferCall()) return this._q.push(["clearUserProperties"].concat(Array.prototype.slice.call(arguments, 0)));
        var e;
        this._apiKeySet("clearUserProperties()") && ((e = new re).clearAll(), this.identify(e))
    };

    function Me(e, t) {
        for (var i = 0; i < t._q.length; i++) {
            var n = e[t._q[i][0]];
            "function" === _(n) && n.apply(e, t._q[i].slice(1))
        }
        return e
    }
    Ie.prototype.identify = function(e, t, i, n) {
        if (this._shouldDeferCall()) return this._q.push(["identify"].concat(Array.prototype.slice.call(arguments, 0)));
        if (this._apiKeySet("identify()"))
            if ("object" === _(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = Me(new re, e)), e instanceof re) {
                if (0 < Object.keys(e.userPropertiesOperations).length) return this._logEvent(w.IDENTIFY_EVENT, null, null, e.userPropertiesOperations, null, null, null, t, i, n);
                ze(t, i, 0, "No request sent", {
                    reason: "No user property operations"
                })
            } else P.error("Invalid identify input type. Expected Identify object but saw " + _(e)), ze(t, i, 0, "No request sent", {
                reason: "Invalid identify input type"
            });
        else ze(t, i, 0, "No request sent", {
            reason: "API key is not set"
        })
    }, Ie.prototype.groupIdentify = function(e, t, i, n, o, r) {
        if (this._shouldDeferCall()) return this._q.push(["groupIdentify"].concat(Array.prototype.slice.call(arguments, 0)));
        if (this._apiKeySet("groupIdentify()"))
            if (L(e, "group_type", "string") && !q(e))
                if (null != t)
                    if ("object" === _(i) && Object.prototype.hasOwnProperty.call(i, "_q") && (i = Me(new re, i)), i instanceof re) {
                        if (0 < Object.keys(i.userPropertiesOperations).length) return this._logEvent(w.GROUP_IDENTIFY_EVENT, null, null, null, s({}, e, t), i.userPropertiesOperations, null, n, o, r);
                        ze(n, o, 0, "No request sent", {
                            reason: "No group property operations"
                        })
                    } else P.error("Invalid identify input type. Expected Identify object but saw " + _(i)), ze(n, o, 0, "No request sent", {
                        reason: "Invalid identify input type"
                    });
        else ze(n, o, 0, "No request sent", {
            reason: "Invalid group name"
        });
        else ze(n, o, 0, "No request sent", {
            reason: "Invalid group type"
        });
        else ze(n, o, 0, "No request sent", {
            reason: "API key is not set"
        })
    }, Ie.prototype.setVersionName = function(e) {
        if (this._shouldDeferCall()) return this._q.push(["setVersionName"].concat(Array.prototype.slice.call(arguments, 0)));
        L(e, "versionName", "string") && (this.options.versionName = e)
    }, Ie.prototype._logEvent = function(e, t, i, n, o, r, s, a, u, c) {
        if (Ue(this), e)
            if (this.options.optOut) ze(a, u, 0, "No request sent", {
                reason: "optOut is set to true"
            });
            else try {
                var l = e === w.IDENTIFY_EVENT || e === w.GROUP_IDENTIFY_EVENT ? this.nextIdentifyId() : this.nextEventId(),
                    p = this.nextSequenceNumber(),
                    d = "number" === _(s) ? s : (new Date).getTime();
                c ? this._sessionId = -1 : this._sessionId && this._lastEventTime && !(d - this._lastEventTime > this.options.sessionTimeout) || (this._sessionId = d, this._runNewSessionStartCallbacks()), this._lastEventTime = d, qe(this);
                var h = this._ua.browser.name,
                    f = this._ua.browser.major,
                    v = this._ua.device.model || this._ua.os.name,
                    b = this._ua.device.vendor;
                n = n || {};
                var g = y({}, this._apiPropertiesTrackingOptions);
                i = y({}, i || {}, g), t = t || {}, o = o || {}, r = r || {};
                var m = {
                    device_id: this.options.deviceId,
                    user_id: this.options.userId,
                    timestamp: d,
                    event_id: l,
                    session_id: this._sessionId || -1,
                    event_type: e,
                    version_name: this.options.versionName || null,
                    platform: Ge(this, "platform") ? this.options.platform : null,
                    os_name: Ge(this, "os_name") && h || null,
                    os_version: Ge(this, "os_version") && f || null,
                    device_model: Ge(this, "device_model") && v || null,
                    device_manufacturer: Ge(this, "device_manufacturer") && b || null,
                    language: Ge(this, "language") ? this.options.language : null,
                    api_properties: i,
                    event_properties: V(F(t)),
                    user_properties: V(F(n)),
                    uuid: function e(t) {
                        return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                    }(),
                    library: this.options.library,
                    sequence_number: p,
                    groups: V(G(o)),
                    group_properties: V(F(r)),
                    user_agent: this._userAgent
                };
                return Ve(this) && (m.plan = {
                    branch: this.options.plan.branch || void 0,
                    source: this.options.plan.source || void 0,
                    version: this.options.plan.version || void 0,
                    versionId: this.options.plan.versionId || void 0
                }), e === w.IDENTIFY_EVENT || e === w.GROUP_IDENTIFY_EVENT ? (this._unsentIdentifys.push({
                    event: m,
                    callback: a,
                    errorCallback: u
                }), this._limitEventsQueued(this._unsentIdentifys)) : (this._unsentEvents.push({
                    event: m,
                    callback: a,
                    errorCallback: u
                }), this._limitEventsQueued(this._unsentEvents)), this.options.saveEvents && this.saveEvents(), this._sendEventsIfReady(), e === w.IDENTIFY_EVENT && this._connector && this._connector.identityStore.editIdentity().updateUserProperties(V(F(n))).commit(), l
            } catch (e) {
                P.error(e)
            } else ze(a, u, 0, "No request sent", {
                reason: "Missing eventType"
            })
    };
    var Ve = function(e) {
            return e.options.plan && (e.options.plan.source || e.options.plan.branch || e.options.plan.version || e.options.plan.versionId)
        },
        Ge = function(e, t) {
            return !!e.options.trackingOptions[t]
        },
        Le = function(e) {
            for (var t = ["city", "country", "dma", "ip_address", "region"], i = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                Ge(e, o) || (i[o] = !1)
            }
            return i
        };
    Ie.prototype._limitEventsQueued = function(e) {
        e.length > this.options.savedMaxCount && e.splice(0, e.length - this.options.savedMaxCount).forEach(function(e) {
            ze(e.callback, e.errorCallback, 0, "No request sent", {
                reason: "Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker"
            })
        })
    }, Ie.prototype.logEvent = function(e, t, i, n, o) {
        var r = 4 < arguments.length && void 0 !== o && o;
        return this._shouldDeferCall() ? this._q.push(["logEvent"].concat(Array.prototype.slice.call(arguments, 0))) : this.logEventWithTimestamp(e, t, null, i, n, r)
    }, Ie.prototype.logEventWithTimestamp = function(e, t, i, n, o, r) {
        var s = 5 < arguments.length && void 0 !== r && r;
        return this._shouldDeferCall() ? this._q.push(["logEventWithTimestamp"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEvent()") ? L(e, "eventType", "string") ? q(e) ? (ze(n, o, 0, "No request sent", {
            reason: "Missing eventType"
        }), -1) : (L(s, "outOfSession", "boolean") || ze(n, o, 0, "No request sent", {
            reason: "Invalid outOfSession value"
        }), this._logEvent(e, t, null, null, null, null, i, n, o, s)) : (ze(n, o, 0, "No request sent", {
            reason: "Invalid type for eventType"
        }), -1) : (ze(n, o, 0, "No request sent", {
            reason: "API key not set"
        }), -1)
    }, Ie.prototype.logEventWithGroups = function(e, t, i, n, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
        return this._shouldDeferCall() ? this._q.push(["logEventWithGroups"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logEventWithGroups()") ? L(e, "eventType", "string") ? (L(r, "outOfSession", "boolean") || ze(event.callback, event.errorCallback, 0, "No request sent", {
            reason: "Invalid outOfSession value"
        }), this._logEvent(e, t, null, null, i, null, null, n, o, r)) : (ze(event.callback, event.errorCallback, 0, "No request sent", {
            reason: "Invalid type for eventType"
        }), -1) : (ze(event.callback, event.errorCallback, 0, "No request sent", {
            reason: "API key not set"
        }), -1)
    };

    function Fe(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    var ze = function(e, t, i, n, o) {
        "function" === _(e) && e(i, n, o), "function" === _(t) && t(i, n, o)
    };
    Ie.prototype.logRevenueV2 = function(e) {
        if (this._shouldDeferCall()) return this._q.push(["logRevenueV2"].concat(Array.prototype.slice.call(arguments, 0)));
        if (this._apiKeySet("logRevenueV2()"))
            if ("object" === _(e) && Object.prototype.hasOwnProperty.call(e, "_q") && (e = Me(new _e, e)), e instanceof _e) {
                if (e && e._isValidRevenue()) return this.logEvent(w.REVENUE_EVENT, e._toJSONObject())
            } else P.error("Invalid revenue input type. Expected Revenue object but saw " + _(e))
    }, Ie.prototype.logRevenue = function(e, t, i) {
        return this._shouldDeferCall() ? this._q.push(["logRevenue"].concat(Array.prototype.slice.call(arguments, 0))) : this._apiKeySet("logRevenue()") && Fe(e) && (void 0 === t || Fe(t)) ? this._logEvent(w.REVENUE_EVENT, {}, {
            productId: i,
            special: "revenue_amount",
            quantity: t || 1,
            price: e
        }, null, null, null, null, null) : -1
    }, Ie.prototype._logErrorsOnEvents = function(e, t, i, n) {
        for (var o = ["_unsentEvents", "_unsentIdentifys"], r = 0; r < o.length; r++)
            for (var s = o[r], a = "_unsentEvents" === s ? e : t, u = 0; u < this[s].length; u++) {
                var c = this[s][u];
                c.event.event_id <= a && c.errorCallback && c.errorCallback(i, n)
            }
    }, Ie.prototype.removeEvents = function(e, t, i, n) {
        Ke(this, "_unsentEvents", e, i, n), Ke(this, "_unsentIdentifys", t, i, n)
    };
    var Ke = function(e, t, i, n, o) {
        if (!(i < 0)) {
            for (var r = [], s = 0; s < e[t].length; s++) {
                var a = e[t][s];
                a.event.event_id > i ? r.push(a) : a.callback && a.callback(n, o)
            }
            e[t] = r
        }
    };
    Ie.prototype.sendEvents = function() {
        if (this._apiKeySet("sendEvents()")) {
            if (this.options.optOut) this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
                reason: "Opt out is set to true"
            });
            else if (0 !== this._unsentCount()) {
                if (this.options.transport !== w.TRANSPORT_BEACON) {
                    if (this._sending) return;
                    this._sending = !0
                }
                var e = (this.options.forceHttps || "https:" === h.location.protocol ? "https" : "http") + "://" + this.options.apiEndpoint,
                    i = Math.min(this._unsentCount(), this.options.uploadBatchSize),
                    t = this._mergeEventsAndIdentifys(i),
                    n = t.maxEventId,
                    o = t.maxIdentifyId,
                    r = JSON.stringify(t.eventsToSend.map(function(e) {
                        return e.event
                    })),
                    s = (new Date).getTime(),
                    a = {
                        client: this.options.apiKey,
                        e: r,
                        v: w.API_VERSION,
                        upload_time: s,
                        checksum: pe(w.API_VERSION + this.options.apiKey + r + s)
                    };
                if (this.options.transport !== w.TRANSPORT_BEACON) {
                    var u = this;
                    try {
                        new ye(e, a, this.options.headers).send(function(e, t) {
                            u._sending = !1;
                            try {
                                200 === e && "success" === t ? (u.removeEvents(n, o, e, t), u.options.saveEvents && u.saveEvents(), u._sendEventsIfReady()) : (u._logErrorsOnEvents(n, o, e, t), 413 === e && (1 === u.options.uploadBatchSize && u.removeEvents(n, o, e, t), u.options.uploadBatchSize = Math.ceil(i / 2), u.sendEvents()))
                            } catch (e) {}
                        })
                    } catch (e) {
                        var c = "Request failed to send";
                        P.error(c), u._logErrorsOnEvents(n, o, 0, c), u.removeEvents(n, o, 0, c, {
                            reason: e.message
                        })
                    }
                } else {
                    navigator.sendBeacon(e, new URLSearchParams(a)) ? (this.removeEvents(n, o, 200, "success"), this.options.saveEvents && this.saveEvents()) : this._logErrorsOnEvents(n, o, 0, "")
                }
            }
        } else this.removeEvents(1 / 0, 1 / 0, 0, "No request sent", {
            reason: "API key not set"
        })
    }, Ie.prototype._mergeEventsAndIdentifys = function(e) {
        for (var t = [], i = 0, n = -1, o = 0, r = -1; t.length < e;) {
            var s = void 0,
                a = o >= this._unsentIdentifys.length,
                u = i >= this._unsentEvents.length;
            if (u && a) {
                P.error("Merging Events and Identifys, less events and identifys than expected");
                break
            }
            a || !u && (!("sequence_number" in this._unsentEvents[i].event) || this._unsentEvents[i].event.sequence_number < this._unsentIdentifys[o].event.sequence_number) ? n = (s = this._unsentEvents[i++]).event.event_id : r = (s = this._unsentIdentifys[o++]).event.event_id, t.push(s)
        }
        return {
            eventsToSend: t,
            maxEventId: n,
            maxIdentifyId: r
        }
    }, Ie.prototype.setGlobalUserProperties = function(e) {
        this.setUserProperties(e)
    }, Ie.prototype.__VERSION__ = function() {
        return this.options.library.version
    }, Ie.prototype.setLibrary = function(e, t) {
        null != e && (this.options.library.name = e), null != t && (this.options.library.version = t)
    }, Ie.prototype._shouldDeferCall = function() {
        return this._pendingReadStorage || this._initializationDeferred
    }, Ie.prototype._deferInitialization = function() {
        this._initializationDeferred = !0, this._q.push(["init"].concat(Array.prototype.slice.call(arguments, 0)))
    }, Ie.prototype.enableTracking = function() {
        this._initializationDeferred = !1, qe(this), this.runQueuedFunctions()
    }, Ie.prototype._refreshDynamicConfig = function() {
        this.options.useDynamicConfig && xe.refresh(this.options.serverZone, this.options.forceHttps, function() {
            this.options.apiEndpoint = xe.ingestionEndpoint
        }.bind(this))
    }, Ie.prototype.getDeviceId = function() {
        return this.options.deviceId
    }, Ie.prototype.getUserId = function() {
        return this.options.userId
    }, Ie.prototype.setMinTimeBetweenSessionsMillis = function(e) {
        if (L(e, "timeInMillis", "number")) {
            if (this._shouldDeferCall()) return this._q.push(["setMinTimeBetweenSessionsMillis"].concat(Array.prototype.slice.call(arguments, 0)));
            try {
                this.options.sessionTimeout = e
            } catch (e) {
                P.error(e)
            }
        }
    }, Ie.prototype.setEventUploadThreshold = function(e) {
        if (L(e, "eventUploadThreshold", "number")) {
            if (this._shouldDeferCall()) return this._q.push(["setEventUploadThreshold"].concat(Array.prototype.slice.call(arguments, 0)));
            try {
                this.options.eventUploadThreshold = e
            } catch (e) {
                P.error(e)
            }
        }
    }, Ie.prototype.setUseDynamicConfig = function(e) {
        if (L(e, "useDynamicConfig", "boolean")) {
            if (this._shouldDeferCall()) return this._q.push(["setUseDynamicConfig"].concat(Array.prototype.slice.call(arguments, 0)));
            try {
                this.options.useDynamicConfig = e, this._refreshDynamicConfig()
            } catch (e) {
                P.error(e)
            }
        }
    }, Ie.prototype.setServerZone = function(e, t) {
        var i = !(1 < arguments.length && void 0 !== t) || t;
        if ((e === Oe || e === ke) && L(i, "serverZoneBasedApi", "boolean")) {
            if (this._shouldDeferCall()) return this._q.push(["setServerZone"].concat(Array.prototype.slice.call(arguments, 0)));
            try {
                this.options.serverZone = e, (this.options.serverZoneBasedApi = i) && (this.options.apiEndpoint = Ee(this.options.serverZone))
            } catch (e) {
                P.error(e)
            }
        }
    }, Ie.prototype.setServerUrl = function(e) {
        if (L(e, "serverUrl", "string")) {
            if (this._shouldDeferCall()) return this._q.push(["setServerUrl"].concat(Array.prototype.slice.call(arguments, 0)));
            try {
                this.options.apiEndpoint = e
            } catch (e) {
                P.error(e)
            }
        }
    };

    function Be() {
        this.options = y({}, Te), this._q = [], this._instances = {}
    }
    Be.prototype.Identify = re, Be.prototype.Revenue = _e, Be.prototype.getInstance = function(e) {
        e = q(e) ? w.DEFAULT_INSTANCE : e.toLowerCase();
        var t = this._instances[e];
        return void 0 === t && (t = new Ie(e), this._instances[e] = t), t
    }, Be.prototype.runQueuedFunctions = function() {
        for (var e = 0; e < this._q.length; e++) {
            var t = this[this._q[e][0]];
            "function" === _(t) && t.apply(this, this._q[e].slice(1))
        }
        for (var i in this._q = [], this._instances) Object.prototype.hasOwnProperty.call(this._instances, i) && this._instances[i].runQueuedFunctions()
    }, Be.prototype.init = function(e, t, i, n) {
        this.getInstance().init(e, t, i, function(e) {
            this.options = e.options, "function" === _(n) && n(e)
        }.bind(this))
    }, Be.prototype.isNewSession = function() {
        return this.getInstance().isNewSession()
    }, Be.prototype.getSessionId = function() {
        return this.getInstance().getSessionId()
    }, Be.prototype.nextEventId = function() {
        return this.getInstance().nextEventId()
    }, Be.prototype.nextIdentifyId = function() {
        return this.getInstance().nextIdentifyId()
    }, Be.prototype.nextSequenceNumber = function() {
        return this.getInstance().nextSequenceNumber()
    }, Be.prototype.saveEvents = function() {
        this.getInstance().saveEvents()
    }, Be.prototype.setDomain = function(e) {
        this.getInstance().setDomain(e)
    }, Be.prototype.setUserId = function(e) {
        this.getInstance().setUserId(e)
    }, Be.prototype.setGroup = function(e, t) {
        this.getInstance().setGroup(e, t)
    }, Be.prototype.setOptOut = function(e) {
        this.getInstance().setOptOut(e)
    }, Be.prototype.regenerateDeviceId = function() {
        this.getInstance().regenerateDeviceId()
    }, Be.prototype.setDeviceId = function(e) {
        this.getInstance().setDeviceId(e)
    }, Be.prototype.setUserProperties = function(e) {
        this.getInstance().setUserProperties(e)
    }, Be.prototype.clearUserProperties = function() {
        this.getInstance().clearUserProperties()
    }, Be.prototype.identify = function(e, t) {
        this.getInstance().identify(e, t)
    }, Be.prototype.setVersionName = function(e) {
        this.getInstance().setVersionName(e)
    }, Be.prototype.logEvent = function(e, t, i) {
        return this.getInstance().logEvent(e, t, i)
    }, Be.prototype.logEventWithGroups = function(e, t, i, n) {
        return this.getInstance().logEventWithGroups(e, t, i, n)
    }, Be.prototype.logRevenueV2 = function(e) {
        return this.getInstance().logRevenueV2(e)
    }, Be.prototype.logRevenue = function(e, t, i) {
        return this.getInstance().logRevenue(e, t, i)
    }, Be.prototype.removeEvents = function(e, t) {
        this.getInstance().removeEvents(e, t)
    }, Be.prototype.sendEvents = function(e) {
        this.getInstance().sendEvents(e)
    }, Be.prototype.setGlobalUserProperties = function(e) {
        this.getInstance().setUserProperties(e)
    }, Be.prototype.__VERSION__ = "8.18.4";
    var Xe = void 0 !== h && h.amplitude || {},
        We = new Be;
    for (var $e in We._q = Xe._q || [], Xe._iq) Object.prototype.hasOwnProperty.call(Xe._iq, $e) && (We.getInstance($e)._q = Xe._iq[$e]._q || []);
    return We.runQueuedFunctions(), We
}();