! function() {
    "use strict";

    function e(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n && (o = o.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            }))), t.push.apply(t, o)
        }
        return t
    }

    function n(n) {
        for (var o = 1; o < arguments.length; o++) {
            var r = null != arguments[o] ? arguments[o] : {};
            o % 2 ? e(Object(r), !0).forEach((function(e) {
                t(n, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return n
    }

    function t(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }

    function o(e, n) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, n) {
            var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == t) return;
            var o, r, i = [],
                l = !0,
                a = !1;
            try {
                for (t = t.call(e); !(l = (o = t.next()).done) && (i.push(o.value), !n || i.length !== n); l = !0);
            } catch (e) {
                a = !0, r = e
            } finally {
                try {
                    l || null == t.return || t.return()
                } finally {
                    if (a) throw r
                }
            }
            return i
        }(e, n) || i(e, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e) {
        return function(e) {
            if (Array.isArray(e)) return l(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || i(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function i(e, n) {
        if (e) {
            if ("string" == typeof e) return l(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? l(e, n) : void 0
        }
    }

    function l(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
        return o
    }
    var a, c;
    ! function(e) {
        e.Popover = "popover", e.API = "api", e.Widget = "widget"
    }(a || (a = {})),
    function(e) {
        e.Open = "open", e.MultipleChoice = "multiple_choice", e.SingleChoice = "single_choice", e.Rating = "rating", e.Link = "link"
    }(c || (c = {}));
    var u = "undefined" != typeof window ? window : void 0,
        s = "undefined" != typeof globalThis ? globalThis : u,
        d = null == s ? void 0 : s.navigator,
        p = null == s ? void 0 : s.document;
    null == s || s.location, null == s || s.fetch, null != s && s.XMLHttpRequest && "withCredentials" in new s.XMLHttpRequest && s.XMLHttpRequest, null == s || s.AbortController, null == d || d.userAgent;
    var _, f, h, v, g, b, m, y, C = {},
        x = [],
        k = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        w = Array.isArray;

    function q(e, n) {
        for (var t in n) e[t] = n[t];
        return e
    }

    function S(e) {
        var n = e.parentNode;
        n && n.removeChild(e)
    }

    function T(e, n, t, o, r) {
        var i = {
            type: e,
            props: n,
            key: t,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == r ? ++h : r,
            __i: -1,
            __u: 0
        };
        return null == r && null != f.vnode && f.vnode(i), i
    }

    function H(e) {
        return e.children
    }

    function L(e, n) {
        this.props = e, this.context = n
    }

    function M(e, n) {
        if (null == n) return e.__ ? M(e.__, e.__i + 1) : null;
        for (var t; n < e.__k.length; n++)
            if (null != (t = e.__k[n]) && null != t.__e) return t.__e;
        return "function" == typeof e.type ? M(e) : null
    }

    function Z(e) {
        var n, t;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
                if (null != (t = e.__k[n]) && null != t.__e) {
                    e.__e = e.__c.base = t.__e;
                    break
                }
            return Z(e)
        }
    }

    function P(e) {
        (!e.__d && (e.__d = !0) && v.push(e) && !I.__r++ || g !== f.debounceRendering) && ((g = f.debounceRendering) || b)(I)
    }

    function I() {
        var e, n, t, o, r, i, l, a, c;
        for (v.sort(m); e = v.shift();) e.__d && (n = v.length, o = void 0, i = (r = (t = e).__v).__e, a = [], c = [], (l = t.__P) && ((o = q({}, r)).__v = r.__v + 1, f.vnode && f.vnode(o), U(l, o, r, t.__n, void 0 !== l.ownerSVGElement, 32 & r.__u ? [i] : null, a, null == i ? M(r) : i, !!(32 & r.__u), c), o.__.__k[o.__i] = o, B(a, o, c), o.__e != i && Z(o)), v.length > n && v.sort(m));
        I.__r = 0
    }

    function N(e, n, t, o, r, i, l, a, c, u, s) {
        var d, p, _, f, h, v = o && o.__k || x,
            g = n.length;
        for (t.__d = c, function(e, n, t) {
                var o, r, i, l, a, c = n.length,
                    u = t.length,
                    s = u,
                    d = 0;
                for (e.__k = [], o = 0; o < c; o++) null != (r = e.__k[o] = null == (r = n[o]) || "boolean" == typeof r || "function" == typeof r ? null : "string" == typeof r || "number" == typeof r || "bigint" == typeof r || r.constructor == String ? T(null, r, null, null, r) : w(r) ? T(H, {
                    children: r
                }, null, null, null) : void 0 === r.constructor && r.__b > 0 ? T(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) ? (r.__ = e, r.__b = e.__b + 1, a = j(r, t, l = o + d, s), r.__i = a, i = null, -1 !== a && (s--, (i = t[a]) && (i.__u |= 131072)), null == i || null === i.__v ? (-1 == a && d--, "function" != typeof r.type && (r.__u |= 65536)) : a !== l && (a === l + 1 ? d++ : a > l ? s > c - l ? d += a - l : d-- : d = a < l && a == l - 1 ? a - l : 0, a !== o + d && (r.__u |= 65536))) : (i = t[o]) && null == i.key && i.__e && (i.__e == e.__d && (e.__d = M(i)), F(i, i, !1), t[o] = null, s--);
                if (s)
                    for (o = 0; o < u; o++) null != (i = t[o]) && 0 == (131072 & i.__u) && (i.__e == e.__d && (e.__d = M(i)), F(i, i))
            }(t, n, v), c = t.__d, d = 0; d < g; d++) null != (_ = t.__k[d]) && "boolean" != typeof _ && "function" != typeof _ && (p = -1 === _.__i ? C : v[_.__i] || C, _.__i = d, U(e, _, p, r, i, l, a, c, u, s), f = _.__e, _.ref && p.ref != _.ref && (p.ref && W(p.ref, null, _), s.push(_.ref, _.__c || f, _)), null == h && null != f && (h = f), 65536 & _.__u || p.__k === _.__k ? c = E(_, c, e) : "function" == typeof _.type && void 0 !== _.__d ? c = _.__d : f && (c = f.nextSibling), _.__d = void 0, _.__u &= -196609);
        t.__d = c, t.__e = h
    }

    function E(e, n, t) {
        var o, r;
        if ("function" == typeof e.type) {
            for (o = e.__k, r = 0; o && r < o.length; r++) o[r] && (o[r].__ = e, n = E(o[r], n, t));
            return n
        }
        return e.__e != n && (t.insertBefore(e.__e, n || null), n = e.__e), n && n.nextSibling
    }

    function j(e, n, t, o) {
        var r = e.key,
            i = e.type,
            l = t - 1,
            a = t + 1,
            c = n[t];
        if (null === c || c && r == c.key && i === c.type) return t;
        if (o > (null != c && 0 == (131072 & c.__u) ? 1 : 0))
            for (; l >= 0 || a < n.length;) {
                if (l >= 0) {
                    if ((c = n[l]) && 0 == (131072 & c.__u) && r == c.key && i === c.type) return l;
                    l--
                }
                if (a < n.length) {
                    if ((c = n[a]) && 0 == (131072 & c.__u) && r == c.key && i === c.type) return a;
                    a++
                }
            }
        return -1
    }

    function V(e, n, t) {
        "-" === n[0] ? e.setProperty(n, null == t ? "" : t) : e[n] = null == t ? "" : "number" != typeof t || k.test(n) ? t : t + "px"
    }

    function A(e, n, t, o, r) {
        var i;
        e: if ("style" === n)
            if ("string" == typeof t) e.style.cssText = t;
            else {
                if ("string" == typeof o && (e.style.cssText = o = ""), o)
                    for (n in o) t && n in t || V(e.style, n, "");
                if (t)
                    for (n in t) o && t[n] === o[n] || V(e.style, n, t[n])
            }
        else if ("o" === n[0] && "n" === n[1]) i = n !== (n = n.replace(/(PointerCapture)$|Capture$/, "$1")), n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2), e.l || (e.l = {}), e.l[n + i] = t, t ? o ? t.u = o.u : (t.u = Date.now(), e.addEventListener(n, i ? D : O, i)) : e.removeEventListener(n, i ? D : O, i);
        else {
            if (r) n = n.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("width" !== n && "height" !== n && "href" !== n && "list" !== n && "form" !== n && "tabIndex" !== n && "download" !== n && "rowSpan" !== n && "colSpan" !== n && "role" !== n && n in e) try {
                e[n] = null == t ? "" : t;
                break e
            } catch (e) {}
            "function" == typeof t || (null == t || !1 === t && "-" !== n[4] ? e.removeAttribute(n) : e.setAttribute(n, t))
        }
    }

    function O(e) {
        var n = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= n.u) return
        } else e.t = Date.now();
        return n(f.event ? f.event(e) : e)
    }

    function D(e) {
        return this.l[e.type + !0](f.event ? f.event(e) : e)
    }

    function U(e, n, t, o, r, i, l, a, c, u) {
        var s, d, p, _, h, v, g, b, m, y, C, x, k, S, T, M = n.type;
        if (void 0 !== n.constructor) return null;
        128 & t.__u && (c = !!(32 & t.__u), i = [a = n.__e = t.__e]), (s = f.__b) && s(n);
        e: if ("function" == typeof M) try {
            if (b = n.props, m = (s = M.contextType) && o[s.__c], y = s ? m ? m.props.value : s.__ : o, t.__c ? g = (d = n.__c = t.__c).__ = d.__E : ("prototype" in M && M.prototype.render ? n.__c = d = new M(b, y) : (n.__c = d = new L(b, y), d.constructor = M, d.render = $), m && m.sub(d), d.props = b, d.state || (d.state = {}), d.context = y, d.__n = o, p = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != M.getDerivedStateFromProps && (d.__s == d.state && (d.__s = q({}, d.__s)), q(d.__s, M.getDerivedStateFromProps(b, d.__s))), _ = d.props, h = d.state, d.__v = n, p) null == M.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
            else {
                if (null == M.getDerivedStateFromProps && b !== _ && null != d.componentWillReceiveProps && d.componentWillReceiveProps(b, y), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(b, d.__s, y) || n.__v === t.__v)) {
                    for (n.__v !== t.__v && (d.props = b, d.state = d.__s, d.__d = !1), n.__e = t.__e, n.__k = t.__k, n.__k.forEach((function(e) {
                            e && (e.__ = n)
                        })), C = 0; C < d._sb.length; C++) d.__h.push(d._sb[C]);
                    d._sb = [], d.__h.length && l.push(d);
                    break e
                }
                null != d.componentWillUpdate && d.componentWillUpdate(b, d.__s, y), null != d.componentDidUpdate && d.__h.push((function() {
                    d.componentDidUpdate(_, h, v)
                }))
            }
            if (d.context = y, d.props = b, d.__P = e, d.__e = !1, x = f.__r, k = 0, "prototype" in M && M.prototype.render) {
                for (d.state = d.__s, d.__d = !1, x && x(n), s = d.render(d.props, d.state, d.context), S = 0; S < d._sb.length; S++) d.__h.push(d._sb[S]);
                d._sb = []
            } else
                do {
                    d.__d = !1, x && x(n), s = d.render(d.props, d.state, d.context), d.state = d.__s
                } while (d.__d && ++k < 25);
            d.state = d.__s, null != d.getChildContext && (o = q(q({}, o), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (v = d.getSnapshotBeforeUpdate(_, h)), N(e, w(T = null != s && s.type === H && null == s.key ? s.props.children : s) ? T : [T], n, t, o, r, i, l, a, c, u), d.base = n.__e, n.__u &= -161, d.__h.length && l.push(d), g && (d.__E = d.__ = null)
        } catch (e) {
            n.__v = null, c || null != i ? (n.__e = a, n.__u |= c ? 160 : 32, i[i.indexOf(a)] = null) : (n.__e = t.__e, n.__k = t.__k), f.__e(e, n, t)
        } else null == i && n.__v === t.__v ? (n.__k = t.__k, n.__e = t.__e) : n.__e = Q(t.__e, n, t, o, r, i, l, c, u);
        (s = f.diffed) && s(n)
    }

    function B(e, n, t) {
        n.__d = void 0;
        for (var o = 0; o < t.length; o++) W(t[o], t[++o], t[++o]);
        f.__c && f.__c(n, e), e.some((function(n) {
            try {
                e = n.__h, n.__h = [], e.some((function(e) {
                    e.call(n)
                }))
            } catch (e) {
                f.__e(e, n.__v)
            }
        }))
    }

    function Q(e, n, t, o, r, i, l, a, c) {
        var u, s, d, p, f, h, v, g = t.props,
            b = n.props,
            m = n.type;
        if ("svg" === m && (r = !0), null != i)
            for (u = 0; u < i.length; u++)
                if ((f = i[u]) && "setAttribute" in f == !!m && (m ? f.localName === m : 3 === f.nodeType)) {
                    e = f, i[u] = null;
                    break
                }
        if (null == e) {
            if (null === m) return document.createTextNode(b);
            e = r ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, b.is && b), i = null, a = !1
        }
        if (null === m) g === b || a && e.data === b || (e.data = b);
        else {
            if (i = i && _.call(e.childNodes), g = t.props || C, !a && null != i)
                for (g = {}, u = 0; u < e.attributes.length; u++) g[(f = e.attributes[u]).name] = f.value;
            for (u in g) f = g[u], "children" == u || ("dangerouslySetInnerHTML" == u ? d = f : "key" === u || u in b || A(e, u, null, f, r));
            for (u in b) f = b[u], "children" == u ? p = f : "dangerouslySetInnerHTML" == u ? s = f : "value" == u ? h = f : "checked" == u ? v = f : "key" === u || a && "function" != typeof f || g[u] === f || A(e, u, f, g[u], r);
            if (s) a || d && (s.__html === d.__html || s.__html === e.innerHTML) || (e.innerHTML = s.__html), n.__k = [];
            else if (d && (e.innerHTML = ""), N(e, w(p) ? p : [p], n, t, o, r && "foreignObject" !== m, i, l, i ? i[0] : t.__k && M(t, 0), a, c), null != i)
                for (u = i.length; u--;) null != i[u] && S(i[u]);
            a || (u = "value", void 0 !== h && (h !== e[u] || "progress" === m && !h || "option" === m && h !== g[u]) && A(e, u, h, g[u], !1), u = "checked", void 0 !== v && v !== e[u] && A(e, u, v, g[u], !1))
        }
        return e
    }

    function W(e, n, t) {
        try {
            "function" == typeof e ? e(n) : e.current = n
        } catch (e) {
            f.__e(e, t)
        }
    }

    function F(e, n, t) {
        var o, r;
        if (f.unmount && f.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || W(o, null, n)), null != (o = e.__c)) {
            if (o.componentWillUnmount) try {
                o.componentWillUnmount()
            } catch (e) {
                f.__e(e, n)
            }
            o.base = o.__P = null, e.__c = void 0
        }
        if (o = e.__k)
            for (r = 0; r < o.length; r++) o[r] && F(o[r], n, t || "function" != typeof e.type);
        t || null == e.__e || S(e.__e), e.__ = e.__e = e.__d = void 0
    }

    function $(e, n, t) {
        return this.constructor(e, t)
    }

    function z(e, n, t) {
        var o, r, i, l;
        f.__ && f.__(e, n), r = (o = "function" == typeof t) ? null : t && t.__k || n.__k, i = [], l = [], U(n, e = (!o && t || n).__k = function(e, n, t) {
            var o, r, i, l = {};
            for (i in n) "key" == i ? o = n[i] : "ref" == i ? r = n[i] : l[i] = n[i];
            if (arguments.length > 2 && (l.children = arguments.length > 3 ? _.call(arguments, 2) : t), "function" == typeof e && null != e.defaultProps)
                for (i in e.defaultProps) void 0 === l[i] && (l[i] = e.defaultProps[i]);
            return T(e, l, o, r, null)
        }(H, null, [e]), r || C, C, void 0 !== n.ownerSVGElement, !o && t ? [t] : r ? null : n.firstChild ? _.call(n.childNodes) : null, i, !o && t ? t : r ? r.__e : n.firstChild, o, l), B(i, e, l)
    }
    _ = x.slice, f = {
        __e: function(e, n, t, o) {
            for (var r, i, l; n = n.__;)
                if ((r = n.__c) && !r.__) try {
                    if ((i = r.constructor) && null != i.getDerivedStateFromError && (r.setState(i.getDerivedStateFromError(e)), l = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, o || {}), l = r.__d), l) return r.__E = r
                } catch (n) {
                    e = n
                }
            throw e
        }
    }, h = 0, L.prototype.setState = function(e, n) {
        var t;
        t = null != this.__s && this.__s !== this.state ? this.__s : this.__s = q({}, this.state), "function" == typeof e && (e = e(q({}, t), this.props)), e && q(t, e), null != e && this.__v && (n && this._sb.push(n), P(this))
    }, L.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), P(this))
    }, L.prototype.render = H, v = [], b = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, m = function(e, n) {
        return e.__v.__b - n.__v.__b
    }, I.__r = 0, y = 0;
    var R = u,
        Y = p,
        X = function(e) {
            var n = {
                left: "left: 30px;",
                right: "right: 30px;",
                center: "\n            left: 50%;\n            transform: translateX(-50%);\n          "
            };
            return '\n          .survey-form {\n              position: fixed;\n              margin: 0px;\n              bottom: 0px;\n              color: black;\n              font-weight: normal;\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              text-align: left;\n              max-width: '.concat(parseInt((null == e ? void 0 : e.maxWidth) || "300"), "px;\n              z-index: ").concat(parseInt((null == e ? void 0 : e.zIndex) || "99999"), ";\n              border: 1.5px solid ").concat((null == e ? void 0 : e.borderColor) || "#c9c6c6", ";\n              border-bottom: 0px;\n              width: 100%;\n              ").concat(n[(null == e ? void 0 : e.position) || "right"] || "right: 30px;", "\n          }\n          .form-submit[disabled] {\n              opacity: 0.6;\n              filter: grayscale(50%);\n              cursor: not-allowed;\n          }\n          .survey-form {\n              flex-direction: column;\n              background: ").concat((null == e ? void 0 : e.backgroundColor) || "#eeeded", ';\n              border-top-left-radius: 10px;\n              border-top-right-radius: 10px;\n              box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);\n          }\n          .survey-form textarea {\n              color: #2d2d2d;\n              font-size: 14px;\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              background: white;\n              color: black;\n              outline: none;\n              padding-left: 10px;\n              padding-right: 10px;\n              padding-top: 10px;\n              border-radius: 6px;\n              border-color: ').concat((null == e ? void 0 : e.borderColor) || "#c9c6c6", ";\n              margin-top: 14px;\n          }\n          .form-submit {\n              box-sizing: border-box;\n              margin: 0;\n              font-family: inherit;\n              overflow: visible;\n              text-transform: none;\n              position: relative;\n              display: inline-block;\n              font-weight: 700;\n              white-space: nowrap;\n              text-align: center;\n              border: 1.5px solid transparent;\n              cursor: pointer;\n              user-select: none;\n              touch-action: manipulation;\n              padding: 12px;\n              font-size: 14px;\n              border-radius: 6px;\n              outline: 0;\n              background: ").concat((null == e ? void 0 : e.submitButtonColor) || "black", " !important;\n              text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);\n              box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);\n              width: 100%;\n          }\n          .form-cancel {\n              float: right;\n              border: none;\n              background: none;\n              cursor: pointer;\n          }\n          .cancel-btn-wrapper {\n              position: absolute;\n              width: 35px;\n              height: 35px;\n              border-radius: 100%;\n              top: 0;\n              right: 0;\n              transform: translate(50%, -50%);\n              background: white;\n              border: 1.5px solid ").concat((null == e ? void 0 : e.borderColor) || "#c9c6c6", ";\n              display: flex;\n              justify-content: center;\n              align-items: center;\n          }\n          .bolded { font-weight: 600; }\n          .buttons {\n              display: flex;\n              justify-content: center;\n          }\n          .footer-branding {\n              font-size: 11px;\n              margin-top: 10px;\n              text-align: center;\n              display: flex;\n              justify-content: center;\n              gap: 4px;\n              align-items: center;\n              font-weight: 500;\n              background: ").concat((null == e ? void 0 : e.backgroundColor) || "#eeeded", ";\n              text-decoration: none;\n          }\n          .survey-box {\n              padding: 20px 25px 10px;\n              display: flex;\n              flex-direction: column;\n              border-radius: 10px;\n          }\n          .survey-question {\n              font-weight: 500;\n              font-size: 14px;\n              background: ").concat((null == e ? void 0 : e.backgroundColor) || "#eeeded", ";\n          }\n          .question-textarea-wrapper {\n              display: flex;\n              flex-direction: column;\n          }\n          .description {\n              font-size: 13px;\n              padding-top: 5px;\n              background: ").concat((null == e ? void 0 : e.backgroundColor) || "#eeeded", ";\n          }\n          .ratings-number {\n              background-color: ").concat((null == e ? void 0 : e.ratingButtonColor) || "white", ";\n              font-size: 16px;\n              font-weight: 600;\n              padding: 8px 0px;\n              border: none;\n          }\n          .ratings-number:hover {\n              cursor: pointer;\n          }\n          .rating-options {\n              margin-top: 14px;\n          }\n          .rating-options-number {\n              display: grid;\n              border-radius: 6px;\n              overflow: hidden;\n              border: 1.5px solid ").concat((null == e ? void 0 : e.borderColor) || "#c9c6c6", ";\n          }\n          .rating-options-number > .ratings-number {\n              border-right: 1px solid ").concat((null == e ? void 0 : e.borderColor) || "#c9c6c6", ";\n          }\n          .rating-options-number > .ratings-number:last-of-type {\n              border-right: 0px;\n          }\n          .rating-options-number .rating-active {\n              background: ").concat((null == e ? void 0 : e.ratingButtonActiveColor) || "black", ";\n          }\n          .rating-options-emoji {\n              display: flex;\n              justify-content: space-between;\n          }\n          .ratings-emoji {\n              font-size: 16px;\n              background-color: transparent;\n              border: none;\n              padding: 0px;\n          }\n          .ratings-emoji:hover {\n              cursor: pointer;\n          }\n          .ratings-emoji.rating-active svg {\n              fill: ").concat((null == e ? void 0 : e.ratingButtonActiveColor) || "black", ";\n          }\n          .emoji-svg {\n              fill: ").concat((null == e ? void 0 : e.ratingButtonColor) || "#c9c6c6", ";\n          }\n          .rating-text {\n              display: flex;\n              flex-direction: row;\n              font-size: 11px;\n              justify-content: space-between;\n              margin-top: 6px;\n              background: ").concat((null == e ? void 0 : e.backgroundColor) || "#eeeded", ";\n              opacity: .60;\n          }\n          .multiple-choice-options {\n              margin-top: 13px;\n              font-size: 14px;\n          }\n          .multiple-choice-options .choice-option {\n              display: flex;\n              align-items: center;\n              gap: 4px;\n              font-size: 13px;\n              cursor: pointer;\n              margin-bottom: 5px;\n              position: relative;\n          }\n          .multiple-choice-options > .choice-option:last-of-type {\n              margin-bottom: 0px;\n          }\n          .multiple-choice-options input {\n              cursor: pointer;\n              position: absolute;\n              opacity: 0;\n          }\n          .choice-check {\n              position: absolute;\n              right: 10px;\n              background: white;\n          }\n          .choice-check svg {\n              display: none;\n          }\n          .multiple-choice-options .choice-option:hover .choice-check svg {\n              display: inline-block;\n              opacity: .25;\n          }\n          .multiple-choice-options input:checked + label + .choice-check svg {\n              display: inline-block;\n              opacity: 100% !important;\n          }\n          .multiple-choice-options input:checked + label {\n              font-weight: bold;\n              border: 1.5px solid rgba(0,0,0);\n          }\n          .multiple-choice-options input:checked + label input {\n              font-weight: bold;\n          }\n          .multiple-choice-options label {\n              width: 100%;\n              cursor: pointer;\n              padding: 10px;\n              border: 1.5px solid rgba(0,0,0,.25);\n              border-radius: 4px;\n              background: white;\n          }\n          .multiple-choice-options .choice-option-open label {\n              padding-right: 30px;\n              display: flex;\n              flex-wrap: wrap;\n              gap: 8px;\n              max-width: 100%;\n          }\n          .multiple-choice-options .choice-option-open label span {\n              width: 100%;\n          }\n          .multiple-choice-options .choice-option-open input:disabled + label {\n              opacity: 0.6;\n          }\n          .multiple-choice-options .choice-option-open label input {\n              position: relative;\n              opacity: 1;\n              flex-grow: 1;\n              border: 0;\n              outline: 0;\n          }\n          .thank-you-message {\n              position: fixed;\n              bottom: 0px;\n              z-index: ").concat(parseInt((null == e ? void 0 : e.zIndex) || "99999"), ';\n              box-shadow: -6px 0 16px -8px rgb(0 0 0 / 8%), -9px 0 28px 0 rgb(0 0 0 / 5%), -12px 0 48px 16px rgb(0 0 0 / 3%);\n              font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n              border-top-left-radius: 10px;\n              border-top-right-radius: 10px;\n              padding: 20px 25px 10px;\n              background: ').concat((null == e ? void 0 : e.backgroundColor) || "#eeeded", ";\n              border: 1.5px solid ").concat((null == e ? void 0 : e.borderColor) || "#c9c6c6", ";\n              text-align: center;\n              max-width: ").concat(parseInt((null == e ? void 0 : e.maxWidth) || "300"), "px;\n              min-width: 150px;\n              width: 100%;\n              ").concat(n[(null == e ? void 0 : e.position) || "right"] || "right: 30px;", "\n          }\n          .thank-you-message-body {\n              margin-top: 6px;\n              font-size: 14px;\n              background: ").concat((null == e ? void 0 : e.backgroundColor) || "#eeeded", ";\n          }\n          .thank-you-message-header {\n              margin: 10px 0px 0px;\n              background: ").concat((null == e ? void 0 : e.backgroundColor) || "#eeeded", ";\n          }\n          .thank-you-message-container .form-submit {\n              margin-top: 20px;\n              margin-bottom: 10px;\n          }\n          .thank-you-message-countdown {\n              margin-left: 6px;\n          }\n          .bottom-section {\n              margin-top: 14px;\n          }\n          ")
        };

    function G(e) {
        if ("#" === e[0]) {
            var n = e.replace(/^#/, "");
            return "rgb(" + parseInt(n.slice(0, 2), 16) + "," + parseInt(n.slice(2, 4), 16) + "," + parseInt(n.slice(4, 6), 16) + ")"
        }
        return "rgb(255, 255, 255)"
    }

    function J() {
        var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ee;
        "#" === n[0] && (e = G(n)), n.startsWith("rgb") && (e = n);
        var t = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            "indianred ": "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        }[n.toLowerCase()];
        if (t && (e = G(t)), !e) return "black";
        var o = e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        if (o) {
            var r = parseInt(o[1]),
                i = parseInt(o[2]),
                l = parseInt(o[3]);
            return Math.sqrt(r * r * .299 + i * i * .587 + l * l * .114) > 127.5 ? "black" : "white"
        }
        return "black"
    }
    var K = {
            backgroundColor: "#eeeded",
            submitButtonColor: "black",
            ratingButtonColor: "white",
            ratingButtonActiveColor: "black",
            borderColor: "#c9c6c6",
            placeholder: "Start typing...",
            whiteLabel: !1,
            displayThankYouMessage: !0,
            thankYouMessageHeader: "Thank you for your feedback!",
            position: "right"
        },
        ee = "#eeeded",
        ne = function() {
            var e, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0;
            i && (localStorage.setItem("seenSurvey_".concat(r.id), "true"), i.capture("survey sent", n(n({
                $survey_name: r.name,
                $survey_id: r.id,
                $survey_questions: r.questions.map((function(e) {
                    return e.question
                })),
                sessionRecordingUrl: null === (e = i.get_session_replay_url) || void 0 === e ? void 0 : e.call(i)
            }, o), {}, {
                $set: t({}, "$survey_responded/".concat(r.id), !0)
            })), R.dispatchEvent(new Event("PHSurveySent")))
        },
        te = function(e, n) {
            var t = {
                __c: n = "__cC" + y++,
                __: e,
                Consumer: function(e, n) {
                    return e.children(n)
                },
                Provider: function(e) {
                    var t, o;
                    return this.getChildContext || (t = [], (o = {})[n] = this, this.getChildContext = function() {
                        return o
                    }, this.shouldComponentUpdate = function(e) {
                        this.props.value !== e.value && t.some((function(e) {
                            e.__e = !0, P(e)
                        }))
                    }, this.sub = function(e) {
                        t.push(e);
                        var n = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            t.splice(t.indexOf(e), 1), n && n.call(e)
                        }
                    }), e.children
                }
            };
            return t.Provider.__ = t.Consumer.contextType = t
        }({
            readOnly: !1,
            previewQuestionIndex: 0,
            textColor: "black"
        }),
        oe = p;
    var re, ie, le, ae, ce = 0,
        ue = [],
        se = [],
        de = f.__b,
        pe = f.__r,
        _e = f.diffed,
        fe = f.__c,
        he = f.unmount;

    function ve(e, n) {
        f.__h && f.__h(ie, e, ce || n), ce = 0;
        var t = ie.__H || (ie.__H = {
            __: [],
            __h: []
        });
        return e >= t.__.length && t.__.push({
            __V: se
        }), t.__[e]
    }

    function ge(e) {
        return ce = 1,
            function(e, n, t) {
                var o = ve(re++, 2);
                if (o.t = e, !o.__c && (o.__ = [t ? t(n) : Te(void 0, n), function(e) {
                        var n = o.__N ? o.__N[0] : o.__[0],
                            t = o.t(n, e);
                        n !== t && (o.__N = [t, o.__[1]], o.__c.setState({}))
                    }], o.__c = ie, !ie.u)) {
                    var r = function(e, n, t) {
                        if (!o.__c.__H) return !0;
                        var r = o.__c.__H.__.filter((function(e) {
                            return e.__c
                        }));
                        if (r.every((function(e) {
                                return !e.__N
                            }))) return !i || i.call(this, e, n, t);
                        var l = !1;
                        return r.forEach((function(e) {
                            if (e.__N) {
                                var n = e.__[0];
                                e.__ = e.__N, e.__N = void 0, n !== e.__[0] && (l = !0)
                            }
                        })), !(!l && o.__c.props === e) && (!i || i.call(this, e, n, t))
                    };
                    ie.u = !0;
                    var i = ie.shouldComponentUpdate,
                        l = ie.componentWillUpdate;
                    ie.componentWillUpdate = function(e, n, t) {
                        if (this.__e) {
                            var o = i;
                            i = void 0, r(e, n, t), i = o
                        }
                        l && l.call(this, e, n, t)
                    }, ie.shouldComponentUpdate = r
                }
                return o.__N || o.__
            }(Te, e)
    }

    function be(e, n) {
        var t = ve(re++, 3);
        !f.__s && Se(t.__H, n) && (t.__ = e, t.i = n, ie.__H.__h.push(t))
    }

    function me(e) {
        return ce = 5,
            function(e, n) {
                var t = ve(re++, 7);
                return Se(t.__H, n) ? (t.__V = e(), t.i = n, t.__h = e, t.__V) : t.__
            }((function() {
                return {
                    current: e
                }
            }), [])
    }

    function ye(e) {
        var n = ie.context[e.__c],
            t = ve(re++, 9);
        return t.c = e, n ? (null == t.__ && (t.__ = !0, n.sub(ie)), n.props.value) : e.__
    }

    function Ce() {
        for (var e; e = ue.shift();)
            if (e.__P && e.__H) try {
                e.__H.__h.forEach(we), e.__H.__h.forEach(qe), e.__H.__h = []
            } catch (n) {
                e.__H.__h = [], f.__e(n, e.__v)
            }
    }
    f.__b = function(e) {
        ie = null, de && de(e)
    }, f.__r = function(e) {
        pe && pe(e), re = 0;
        var n = (ie = e.__c).__H;
        n && (le === ie ? (n.__h = [], ie.__h = [], n.__.forEach((function(e) {
            e.__N && (e.__ = e.__N), e.__V = se, e.__N = e.i = void 0
        }))) : (n.__h.forEach(we), n.__h.forEach(qe), n.__h = [], re = 0)), le = ie
    }, f.diffed = function(e) {
        _e && _e(e);
        var n = e.__c;
        n && n.__H && (n.__H.__h.length && (1 !== ue.push(n) && ae === f.requestAnimationFrame || ((ae = f.requestAnimationFrame) || ke)(Ce)), n.__H.__.forEach((function(e) {
            e.i && (e.__H = e.i), e.__V !== se && (e.__ = e.__V), e.i = void 0, e.__V = se
        }))), le = ie = null
    }, f.__c = function(e, n) {
        n.some((function(e) {
            try {
                e.__h.forEach(we), e.__h = e.__h.filter((function(e) {
                    return !e.__ || qe(e)
                }))
            } catch (t) {
                n.some((function(e) {
                    e.__h && (e.__h = [])
                })), n = [], f.__e(t, e.__v)
            }
        })), fe && fe(e, n)
    }, f.unmount = function(e) {
        he && he(e);
        var n, t = e.__c;
        t && t.__H && (t.__H.__.forEach((function(e) {
            try {
                we(e)
            } catch (e) {
                n = e
            }
        })), t.__H = void 0, n && f.__e(n, t.__v))
    };
    var xe = "function" == typeof requestAnimationFrame;

    function ke(e) {
        var n, t = function() {
                clearTimeout(o), xe && cancelAnimationFrame(n), setTimeout(e)
            },
            o = setTimeout(t, 100);
        xe && (n = requestAnimationFrame(t))
    }

    function we(e) {
        var n = ie,
            t = e.__c;
        "function" == typeof t && (e.__c = void 0, t()), ie = n
    }

    function qe(e) {
        var n = ie;
        e.__c = e.__(), ie = n
    }

    function Se(e, n) {
        return !e || e.length !== n.length || n.some((function(n, t) {
            return n !== e[t]
        }))
    }

    function Te(e, n) {
        return "function" == typeof n ? n(e) : n
    }
    var He = Array.isArray,
        Le = Object.prototype.toString,
        Me = He || function(e) {
            return "[object Array]" === Le.call(e)
        },
        Ze = function(e) {
            return null === e
        },
        Pe = function(e) {
            return "[object Number]" == Le.call(e)
        },
        Ie = 0;

    function Ne(e, n, t, o, r, i) {
        var l, a, c = {};
        for (a in n) "ref" == a ? l = n[a] : c[a] = n[a];
        var u = {
            type: e,
            props: c,
            key: t,
            ref: l,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: --Ie,
            __i: -1,
            __u: 0,
            __source: r,
            __self: i
        };
        if ("function" == typeof e && (l = e.defaultProps))
            for (a in l) void 0 === c[a] && (c[a] = l[a]);
        return f.vnode && f.vnode(u), u
    }
    var Ee = Ne("svg", {
            className: "emoji-svg",
            xmlns: "http://www.w3.org/2000/svg",
            height: "48",
            viewBox: "0 -960 960 960",
            width: "48",
            children: Ne("path", {
                d: "M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146 272q66 0 121.5-35.5T682-393h-52q-23 40-63 61.5T480.5-310q-46.5 0-87-21T331-393h-53q26 61 81 96.5T480-261Zm0 181q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"
            })
        }),
        je = Ne("svg", {
            className: "emoji-svg",
            xmlns: "http://www.w3.org/2000/svg",
            height: "48",
            viewBox: "0 -960 960 960",
            width: "48",
            children: Ne("path", {
                d: "M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm20 194h253v-49H354v49ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"
            })
        }),
        Ve = Ne("svg", {
            className: "emoji-svg",
            xmlns: "http://www.w3.org/2000/svg",
            height: "48",
            viewBox: "0 -960 960 960",
            width: "48",
            children: Ne("path", {
                d: "M626-533q22.5 0 38.25-15.75T680-587q0-22.5-15.75-38.25T626-641q-22.5 0-38.25 15.75T572-587q0 22.5 15.75 38.25T626-533Zm-292 0q22.5 0 38.25-15.75T388-587q0-22.5-15.75-38.25T334-641q-22.5 0-38.25 15.75T280-587q0 22.5 15.75 38.25T334-533Zm146.174 116Q413-417 358.5-379.5T278-280h53q22-42 62.173-65t87.5-23Q528-368 567.5-344.5T630-280h52q-25-63-79.826-100-54.826-37-122-37ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"
            })
        }),
        Ae = Ne("svg", {
            className: "emoji-svg",
            xmlns: "http://www.w3.org/2000/svg",
            height: "48",
            viewBox: "0 -960 960 960",
            width: "48",
            children: Ne("path", {
                d: "M480-417q-67 0-121.5 37.5T278-280h404q-25-63-80-100t-122-37Zm-183-72 50-45 45 45 31-36-45-45 45-45-31-36-45 45-50-45-31 36 45 45-45 45 31 36Zm272 0 44-45 51 45 31-36-45-45 45-45-31-36-51 45-44-45-31 36 44 45-44 45 31 36ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142 0 241-99t99-241q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99Z"
            })
        }),
        Oe = Ne("svg", {
            className: "emoji-svg",
            xmlns: "http://www.w3.org/2000/svg",
            height: "48",
            viewBox: "0 -960 960 960",
            width: "48",
            children: Ne("path", {
                d: "M479.504-261Q537-261 585.5-287q48.5-26 78.5-72.4 6-11.6-.75-22.6-6.75-11-20.25-11H316.918Q303-393 296.5-382t-.5 22.6q30 46.4 78.5 72.4 48.5 26 105.004 26ZM347-578l27 27q7.636 8 17.818 8Q402-543 410-551q8-8 8-18t-8-18l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.636-8 17.818Q276-559 284-551q8 8 18 8t18-8l27-27Zm267 0 27 27q7.714 8 18 8t18-8q8-7.636 8-17.818Q685-579 677-587l-42-42q-8.8-9-20.9-9-12.1 0-21.1 9l-42 42q-8 7.714-8 18t8 18q7.636 8 17.818 8Q579-543 587-551l27-27ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 340q142.375 0 241.188-98.812Q820-337.625 820-480t-98.812-241.188Q622.375-820 480-820t-241.188 98.812Q140-622.375 140-480t98.812 241.188Q337.625-140 480-140Z"
            })
        }),
        De = Ne("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Ne("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0.164752 0.164752C0.384422 -0.0549175 0.740578 -0.0549175 0.960248 0.164752L6 5.20451L11.0398 0.164752C11.2594 -0.0549175 11.6156 -0.0549175 11.8352 0.164752C12.0549 0.384422 12.0549 0.740578 11.8352 0.960248L6.79549 6L11.8352 11.0398C12.0549 11.2594 12.0549 11.6156 11.8352 11.8352C11.6156 12.0549 11.2594 12.0549 11.0398 11.8352L6 6.79549L0.960248 11.8352C0.740578 12.0549 0.384422 12.0549 0.164752 11.8352C-0.0549175 11.6156 -0.0549175 11.2594 0.164752 11.0398L5.20451 6L0.164752 0.960248C-0.0549175 0.740578 -0.0549175 0.384422 0.164752 0.164752Z",
                fill: "black"
            })
        }),
        Ue = Ne("svg", {
            width: "77",
            height: "14",
            viewBox: "0 0 77 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [Ne("g", {
                "clip-path": "url(#clip0_2415_6911)",
                children: [Ne("mask", {
                    id: "mask0_2415_6911",
                    style: {
                        maskType: "luminance"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: "0",
                    y: "0",
                    width: "77",
                    height: "14",
                    children: Ne("path", {
                        d: "M0.5 0H76.5V14H0.5V0Z",
                        fill: "white"
                    })
                }), Ne("g", {
                    mask: "url(#mask0_2415_6911)",
                    children: [Ne("path", {
                        d: "M5.77226 8.02931C5.59388 8.37329 5.08474 8.37329 4.90634 8.02931L4.4797 7.20672C4.41155 7.07535 4.41155 6.9207 4.4797 6.78933L4.90634 5.96669C5.08474 5.62276 5.59388 5.62276 5.77226 5.96669L6.19893 6.78933C6.26709 6.9207 6.26709 7.07535 6.19893 7.20672L5.77226 8.02931ZM5.77226 12.6946C5.59388 13.0386 5.08474 13.0386 4.90634 12.6946L4.4797 11.872C4.41155 11.7406 4.41155 11.586 4.4797 11.4546L4.90634 10.632C5.08474 10.288 5.59388 10.288 5.77226 10.632L6.19893 11.4546C6.26709 11.586 6.26709 11.7406 6.19893 11.872L5.77226 12.6946Z",
                        fill: "#1D4AFF"
                    }), Ne("path", {
                        d: "M0.5 10.9238C0.5 10.508 1.02142 10.2998 1.32637 10.5938L3.54508 12.7327C3.85003 13.0267 3.63405 13.5294 3.20279 13.5294H0.984076C0.716728 13.5294 0.5 13.3205 0.5 13.0627V10.9238ZM0.5 8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.19753 13.3927C5.28831 13.4802 5.41144 13.5294 5.53982 13.5294H8.0421C8.47337 13.5294 8.68936 13.0267 8.3844 12.7327L1.32637 5.92856C1.02142 5.63456 0.5 5.84278 0.5 6.25854V8.67083ZM0.5 4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L10.0368 13.3927C10.1276 13.4802 10.2508 13.5294 10.3791 13.5294H12.8814C13.3127 13.5294 13.5287 13.0267 13.2237 12.7327L1.32637 1.26329C1.02142 0.969312 0.5 1.17752 0.5 1.59327V4.00556ZM5.33931 4.00556C5.33931 4.12932 5.39033 4.24802 5.4811 4.33554L14.1916 12.7327C14.4965 13.0267 15.0179 12.8185 15.0179 12.4028V9.99047C15.0179 9.86671 14.9669 9.74799 14.8762 9.66049L6.16568 1.26329C5.86071 0.969307 5.33931 1.17752 5.33931 1.59327V4.00556ZM11.005 1.26329C10.7 0.969307 10.1786 1.17752 10.1786 1.59327V4.00556C10.1786 4.12932 10.2296 4.24802 10.3204 4.33554L14.1916 8.06748C14.4965 8.36148 15.0179 8.15325 15.0179 7.7375V5.3252C15.0179 5.20144 14.9669 5.08272 14.8762 4.99522L11.005 1.26329Z",
                        fill: "#F9BD2B"
                    }), Ne("path", {
                        d: "M21.0852 10.981L16.5288 6.58843C16.2238 6.29443 15.7024 6.50266 15.7024 6.91841V13.0627C15.7024 13.3205 15.9191 13.5294 16.1865 13.5294H23.2446C23.5119 13.5294 23.7287 13.3205 23.7287 13.0627V12.5032C23.7287 12.2455 23.511 12.0396 23.2459 12.0063C22.4323 11.9042 21.6713 11.546 21.0852 10.981ZM18.0252 12.0365C17.5978 12.0365 17.251 11.7021 17.251 11.2901C17.251 10.878 17.5978 10.5436 18.0252 10.5436C18.4527 10.5436 18.7996 10.878 18.7996 11.2901C18.7996 11.7021 18.4527 12.0365 18.0252 12.0365Z",
                        fill: "currentColor"
                    }), Ne("path", {
                        d: "M0.5 13.0627C0.5 13.3205 0.716728 13.5294 0.984076 13.5294H3.20279C3.63405 13.5294 3.85003 13.0267 3.54508 12.7327L1.32637 10.5938C1.02142 10.2998 0.5 10.508 0.5 10.9238V13.0627ZM5.33931 5.13191L1.32637 1.26329C1.02142 0.969306 0.5 1.17752 0.5 1.59327V4.00556C0.5 4.12932 0.551001 4.24802 0.641783 4.33554L5.33931 8.86412V5.13191ZM1.32637 5.92855C1.02142 5.63455 0.5 5.84278 0.5 6.25853V8.67083C0.5 8.79459 0.551001 8.91331 0.641783 9.00081L5.33931 13.5294V9.79717L1.32637 5.92855Z",
                        fill: "#1D4AFF"
                    }), Ne("path", {
                        d: "M10.1787 5.3252C10.1787 5.20144 10.1277 5.08272 10.0369 4.99522L6.16572 1.26329C5.8608 0.969306 5.33936 1.17752 5.33936 1.59327V4.00556C5.33936 4.12932 5.39037 4.24802 5.48114 4.33554L10.1787 8.86412V5.3252ZM5.33936 13.5294H8.04214C8.47341 13.5294 8.6894 13.0267 8.38443 12.7327L5.33936 9.79717V13.5294ZM5.33936 5.13191V8.67083C5.33936 8.79459 5.39037 8.91331 5.48114 9.00081L10.1787 13.5294V9.99047C10.1787 9.86671 10.1277 9.74803 10.0369 9.66049L5.33936 5.13191Z",
                        fill: "#F54E00"
                    }), Ne("path", {
                        d: "M29.375 11.6667H31.3636V8.48772H33.0249C34.8499 8.48772 36.0204 7.4443 36.0204 5.83052C36.0204 4.21681 34.8499 3.17334 33.0249 3.17334H29.375V11.6667ZM31.3636 6.84972V4.81136H32.8236C33.5787 4.81136 34.0318 5.19958 34.0318 5.83052C34.0318 6.4615 33.5787 6.84972 32.8236 6.84972H31.3636ZM39.618 11.7637C41.5563 11.7637 42.9659 10.429 42.9659 8.60905C42.9659 6.78905 41.5563 5.45438 39.618 5.45438C37.6546 5.45438 36.2701 6.78905 36.2701 8.60905C36.2701 10.429 37.6546 11.7637 39.618 11.7637ZM38.1077 8.60905C38.1077 7.63838 38.7118 6.97105 39.618 6.97105C40.5116 6.97105 41.1157 7.63838 41.1157 8.60905C41.1157 9.57972 40.5116 10.2471 39.618 10.2471C38.7118 10.2471 38.1077 9.57972 38.1077 8.60905ZM46.1482 11.7637C47.6333 11.7637 48.6402 10.8658 48.6402 9.81025C48.6402 7.33505 45.2294 8.13585 45.2294 7.16518C45.2294 6.8983 45.5189 6.72843 45.9342 6.72843C46.3622 6.72843 46.8782 6.98318 47.0418 7.54132L48.527 6.94678C48.2375 6.06105 47.1677 5.45438 45.8713 5.45438C44.4743 5.45438 43.6058 6.25518 43.6058 7.21372C43.6058 9.53118 46.9663 8.88812 46.9663 9.84665C46.9663 10.1864 46.6391 10.417 46.1482 10.417C45.4434 10.417 44.9525 9.94376 44.8015 9.3735L43.3164 9.93158C43.6436 10.8537 44.6001 11.7637 46.1482 11.7637ZM53.4241 11.606L53.2982 10.0651C53.0843 10.1743 52.8074 10.2106 52.5808 10.2106C52.1278 10.2106 51.8257 9.89523 51.8257 9.34918V7.03172H53.3612V5.55145H51.8257V3.78001H49.9755V5.55145H48.9687V7.03172H49.9755V9.57972C49.9755 11.06 51.0202 11.7637 52.3921 11.7637C52.7696 11.7637 53.122 11.7031 53.4241 11.606ZM59.8749 3.17334V6.47358H56.376V3.17334H54.3874V11.6667H56.376V8.11158H59.8749V11.6667H61.8761V3.17334H59.8749ZM66.2899 11.7637C68.2281 11.7637 69.6378 10.429 69.6378 8.60905C69.6378 6.78905 68.2281 5.45438 66.2899 5.45438C64.3265 5.45438 62.942 6.78905 62.942 8.60905C62.942 10.429 64.3265 11.7637 66.2899 11.7637ZM64.7796 8.60905C64.7796 7.63838 65.3837 6.97105 66.2899 6.97105C67.1835 6.97105 67.7876 7.63838 67.7876 8.60905C67.7876 9.57972 67.1835 10.2471 66.2899 10.2471C65.3837 10.2471 64.7796 9.57972 64.7796 8.60905ZM73.2088 11.4725C73.901 11.4725 74.5177 11.242 74.845 10.8416V11.424C74.845 12.1034 74.2786 12.5767 73.4102 12.5767C72.7935 12.5767 72.2523 12.2854 72.1642 11.788L70.4776 12.0428C70.7042 13.1955 71.925 13.972 73.4102 13.972C75.361 13.972 76.6574 12.8679 76.6574 11.2298V5.55145H74.8324V6.07318C74.4926 5.69705 73.9136 5.45438 73.171 5.45438C71.409 5.45438 70.3014 6.61918 70.3014 8.46345C70.3014 10.3077 71.409 11.4725 73.2088 11.4725ZM72.1012 8.46345C72.1012 7.55345 72.655 6.97105 73.5109 6.97105C74.3793 6.97105 74.9331 7.55345 74.9331 8.46345C74.9331 9.37345 74.3793 9.95585 73.5109 9.95585C72.655 9.95585 72.1012 9.37345 72.1012 8.46345Z",
                        fill: "currentColor"
                    })]
                })]
            }), Ne("defs", {
                children: Ne("clipPath", {
                    id: "clip0_2415_6911",
                    children: Ne("rect", {
                        width: "76",
                        height: "14",
                        fill: "white",
                        transform: "translate(0.5)"
                    })
                })
            })]
        }),
        Be = Ne("svg", {
            width: "16",
            height: "12",
            viewBox: "0 0 16 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: Ne("path", {
                d: "M5.30769 10.6923L4.77736 11.2226C4.91801 11.3633 5.10878 11.4423 5.30769 11.4423C5.5066 11.4423 5.69737 11.3633 5.83802 11.2226L5.30769 10.6923ZM15.5303 1.53033C15.8232 1.23744 15.8232 0.762563 15.5303 0.46967C15.2374 0.176777 14.7626 0.176777 14.4697 0.46967L15.5303 1.53033ZM1.53033 5.85429C1.23744 5.56139 0.762563 5.56139 0.46967 5.85429C0.176777 6.14718 0.176777 6.62205 0.46967 6.91495L1.53033 5.85429ZM5.83802 11.2226L15.5303 1.53033L14.4697 0.46967L4.77736 10.162L5.83802 11.2226ZM0.46967 6.91495L4.77736 11.2226L5.83802 10.162L1.53033 5.85429L0.46967 6.91495Z",
                fill: "currentColor"
            })
        });

    function Qe(e) {
        var n = e.backgroundColor;
        return Ne("a", {
            href: "https://posthog.com",
            target: "_blank",
            rel: "noopener",
            style: {
                backgroundColor: n,
                color: J(n)
            },
            className: "footer-branding",
            children: ["Survey by ", Ue]
        })
    }

    function We(e) {
        var n = e.text,
            t = e.submitDisabled,
            o = e.appearance,
            r = e.onSubmit,
            i = e.link,
            l = ye(te).readOnly,
            a = J(o.submitButtonColor || K.submitButtonColor);
        return Ne("div", {
            className: "bottom-section",
            children: [Ne("div", {
                className: "buttons",
                children: Ne("button", {
                    className: "form-submit",
                    disabled: t && !l,
                    type: "button",
                    style: {
                        color: a
                    },
                    onClick: function() {
                        l || (i && (null == u || u.open(i)), r())
                    },
                    children: n
                })
            }), !o.whiteLabel && Ne(Qe, {
                backgroundColor: o.backgroundColor || ee
            })]
        })
    }

    function Fe(e) {
        var n = e.question,
            t = e.description;
        return Ne("div", {
            style: {
                backgroundColor: e.backgroundColor || K.backgroundColor
            },
            children: [Ne("div", {
                className: "survey-question",
                children: n
            }), t && Ne("div", {
                className: "description",
                dangerouslySetInnerHTML: {
                    __html: t
                }
            })]
        })
    }

    function $e(e) {
        return Ne("div", {
            className: "cancel-btn-wrapper",
            children: Ne("button", {
                className: "form-cancel",
                onClick: e.onClick,
                disabled: ye(te).readOnly,
                children: De
            })
        })
    }

    function ze(e) {
        var t = e.confirmationHeader,
            o = e.confirmationDescription,
            r = e.appearance,
            i = e.onClose,
            l = e.styleOverrides,
            a = J(r.backgroundColor || K.backgroundColor);
        return Ne(H, {
            children: Ne("div", {
                className: "thank-you-message",
                style: n({}, l),
                children: Ne("div", {
                    className: "thank-you-message-container",
                    children: [Ne($e, {
                        onClick: function() {
                            return i()
                        }
                    }), Ne("h3", {
                        className: "thank-you-message-header",
                        style: {
                            color: a
                        },
                        children: t
                    }), o && Ne("div", {
                        style: {
                            color: a
                        },
                        className: "thank-you-message-body",
                        dangerouslySetInnerHTML: {
                            __html: o
                        }
                    }), Ne(We, {
                        text: "Close",
                        submitDisabled: !1,
                        appearance: r,
                        onSubmit: function() {
                            return i()
                        }
                    })]
                })
            })
        })
    }

    function Re(e) {
        var n, t = me(null),
            r = o(ge(null !== (n = e.defaultTextColor) && void 0 !== n ? n : "black"), 2),
            i = r[0],
            l = r[1];
        return be((function() {
            if (t.current) {
                var e = function(e) {
                    var n = R.getComputedStyle(e).backgroundColor;
                    if ("rgba(0, 0, 0, 0)" === n) return "black";
                    var t = n.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
                    if (!t) return "black";
                    var o = parseInt(t[1]),
                        r = parseInt(t[2]),
                        i = parseInt(t[3]);
                    return Math.sqrt(o * o * .299 + r * r * .587 + i * i * .114) > 127.5 ? "black" : "white"
                }(t.current);
                l(e)
            }
        }), [e.appearance, e.forceUpdate]), {
            ref: t,
            textColor: i
        }
    }

    function Ye(e) {
        var n = e.question,
            t = e.appearance,
            r = e.onSubmit,
            i = e.closeSurveyPopup,
            l = me(null),
            a = o(ge(""), 2),
            c = a[0],
            u = a[1];
        return Ne("div", {
            className: "survey-box",
            style: {
                backgroundColor: t.backgroundColor || K.backgroundColor
            },
            ref: l,
            children: [Ne($e, {
                onClick: function() {
                    return i()
                }
            }), Ne(Fe, {
                question: n.question,
                description: n.description,
                backgroundColor: t.backgroundColor
            }), Ne("textarea", {
                rows: 4,
                placeholder: null == t ? void 0 : t.placeholder,
                onInput: function(e) {
                    return u(e.currentTarget.value)
                }
            }), Ne(We, {
                text: n.buttonText || "Submit",
                submitDisabled: !c && !n.optional,
                appearance: t,
                onSubmit: function() {
                    return r(c)
                }
            })]
        })
    }

    function Xe(e) {
        var n = e.question,
            t = e.appearance,
            o = e.onSubmit,
            r = e.closeSurveyPopup;
        return Ne("div", {
            className: "survey-box",
            children: [Ne($e, {
                onClick: function() {
                    return r()
                }
            }), Ne(Fe, {
                question: n.question,
                description: n.description
            }), Ne(We, {
                text: n.buttonText || "Submit",
                submitDisabled: !1,
                link: n.link,
                appearance: t,
                onSubmit: function() {
                    return o("link clicked")
                }
            })]
        })
    }

    function Ge(e) {
        var n = e.question,
            t = e.questionIndex,
            r = e.appearance,
            i = e.onSubmit,
            l = e.closeSurveyPopup,
            a = n.scale,
            c = 10 === n.scale ? 0 : 1,
            u = o(ge(null), 2),
            s = u[0],
            d = u[1];
        return Ne("div", {
            className: "survey-box",
            children: [Ne($e, {
                onClick: function() {
                    return l()
                }
            }), Ne(Fe, {
                question: n.question,
                description: n.description,
                backgroundColor: r.backgroundColor
            }), Ne("div", {
                className: "rating-section",
                children: [Ne("div", {
                    className: "rating-options",
                    children: ["emoji" === n.display && Ne("div", {
                        className: "rating-options-emoji",
                        children: (3 === n.scale ? en : nn).map((function(e, n) {
                            var o = n + 1 === s;
                            return Ne("button", {
                                className: "ratings-emoji question-".concat(t, "-rating-").concat(n, " ").concat(o ? "rating-active" : null),
                                value: n + 1,
                                type: "button",
                                onClick: function() {
                                    d(n + 1)
                                },
                                children: e
                            }, n)
                        }))
                    }), "number" === n.display && Ne("div", {
                        className: "rating-options-number",
                        style: {
                            gridTemplateColumns: "repeat(".concat(a - c + 1, ", minmax(0, 1fr))")
                        },
                        children: (5 === n.scale ? tn : on).map((function(e, n) {
                            return Ne(Je, {
                                questionIndex: t,
                                active: s === e,
                                appearance: r,
                                num: e,
                                setActiveNumber: function(e) {
                                    d(e)
                                }
                            }, n)
                        }))
                    })]
                }), Ne("div", {
                    className: "rating-text",
                    children: [Ne("div", {
                        children: n.lowerBoundLabel
                    }), Ne("div", {
                        children: n.upperBoundLabel
                    })]
                })]
            }), Ne(We, {
                text: n.buttonText || (null == r ? void 0 : r.submitButtonText) || "Submit",
                submitDisabled: Ze(s) && !n.optional,
                appearance: r,
                onSubmit: function() {
                    return i(s)
                }
            })]
        })
    }

    function Je(e) {
        var n = e.num,
            t = e.active,
            o = e.questionIndex,
            r = e.appearance,
            i = e.setActiveNumber,
            l = Re({
                appearance: r,
                defaultTextColor: "black",
                forceUpdate: t
            }),
            a = l.textColor;
        return Ne("button", {
            ref: l.ref,
            className: "ratings-number question-".concat(o, "-rating-").concat(n, " ").concat(t ? "rating-active" : null),
            type: "button",
            onClick: function() {
                i(n)
            },
            style: {
                color: a,
                backgroundColor: t ? r.ratingButtonActiveColor : r.ratingButtonColor,
                borderColor: r.borderColor
            },
            children: n
        })
    }

    function Ke(e) {
        var n = e.question,
            t = e.questionIndex,
            i = e.appearance,
            l = e.onSubmit,
            a = e.closeSurveyPopup,
            u = me(null),
            s = o(ge(n.type === c.MultipleChoice ? [] : null), 2),
            d = s[0],
            p = s[1],
            _ = o(ge(!1), 2),
            f = _[0],
            h = _[1],
            v = o(ge(""), 2),
            g = v[0],
            b = v[1],
            m = n.type === c.SingleChoice ? "radio" : "checkbox";
        return Ne("div", {
            className: "survey-box",
            style: {
                backgroundColor: i.backgroundColor || K.backgroundColor
            },
            ref: u,
            children: [Ne($e, {
                onClick: function() {
                    return a()
                }
            }), Ne(Fe, {
                question: n.question,
                description: n.description,
                backgroundColor: i.backgroundColor
            }), Ne("div", {
                className: "multiple-choice-options",
                children: n.choices.map((function(e, o) {
                    var i = "choice-option",
                        l = e,
                        a = e;
                    return n.hasOpenChoice && o === n.choices.length - 1 && (i += " choice-option-open"), Ne("div", {
                        className: i,
                        children: [Ne("input", {
                            type: m,
                            id: "surveyQuestion".concat(t, "Choice").concat(o),
                            name: "question".concat(t),
                            value: l,
                            disabled: !l,
                            onInput: function() {
                                return n.hasOpenChoice && o === n.choices.length - 1 ? h(!f) : n.type === c.SingleChoice ? p(l) : n.type === c.MultipleChoice && Me(d) ? d.includes(l) ? p(d.filter((function(e) {
                                    return e !== l
                                }))) : p([].concat(r(d), [l])) : void 0
                            }
                        }), Ne("label", {
                            htmlFor: "surveyQuestion".concat(t, "Choice").concat(o),
                            style: {
                                color: "black"
                            },
                            children: n.hasOpenChoice && o === n.choices.length - 1 ? Ne(H, {
                                children: [Ne("span", {
                                    children: [a, ":"]
                                }), Ne("input", {
                                    type: "text",
                                    id: "surveyQuestion".concat(t, "Choice").concat(o, "Open"),
                                    name: "question".concat(t),
                                    onInput: function(e) {
                                        var t = e.currentTarget.value;
                                        return n.type === c.SingleChoice ? p(t) : n.type === c.MultipleChoice && Me(d) ? b(t) : void 0
                                    }
                                })]
                            }) : a
                        }), Ne("span", {
                            className: "choice-check",
                            style: {
                                color: "black"
                            },
                            children: Be
                        })]
                    })
                }))
            }), Ne(We, {
                text: n.buttonText || "Submit",
                submitDisabled: (Ze(d) || Me(d) && !f && 0 === d.length || Me(d) && f && !g && 0 === d.length && !n.optional) && !n.optional,
                appearance: i,
                onSubmit: function() {
                    f && n.type === c.MultipleChoice ? Me(d) && l([].concat(r(d), [g])) : l(d)
                }
            })]
        })
    }
    var en = [Ve, je, Ee],
        nn = [Ae, Ve, je, Ee, Oe],
        tn = [1, 2, 3, 4, 5],
        on = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        rn = u,
        ln = p,
        an = function(e, n) {
            var t = function(e) {
                    var n, t = oe.createElement("div");
                    t.className = "PostHogWidget".concat(e.id);
                    var o, r = t.attachShadow({
                            mode: "open"
                        }),
                        i = (o = null === (n = e.appearance) || void 0 === n ? void 0 : n.widgetColor, "\n        .ph-survey-widget-tab {\n            position: fixed;\n            top: 50%;\n            right: 0;\n            background: ".concat(o || "#e0a045", ";\n            color: white;\n            transform: rotate(-90deg) translate(0, -100%);\n            transform-origin: right top;\n            min-width: 40px;\n            padding: 8px 12px;\n            font-weight: 500;\n            border-radius: 3px 3px 0 0;\n            text-align: center;\n            cursor: pointer;\n            z-index: 9999999;\n        }\n        .ph-survey-widget-tab:hover {\n            padding-bottom: 13px;\n        }\n        .ph-survey-widget-button {\n            position: fixed;\n        }\n    "));
                    return r.append(Object.assign(oe.createElement("style"), {
                        innerText: i
                    })), oe.body.appendChild(t), r
                }(n),
                o = X(n.appearance);
            t.appendChild(Object.assign(ln.createElement("style"), {
                innerText: o
            })), z(Ne(fn, {
                posthog: e,
                survey: n
            }, "feedback-survey"), t)
        },
        cn = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            null == e || e.getActiveMatchingSurveys((function(n) {
                n.filter((function(e) {
                    return "api" !== e.type
                })).forEach((function(n) {
                    var t, o, r;
                    if (n.type === a.Widget && ("tab" === (null === (t = n.appearance) || void 0 === t ? void 0 : t.widgetType) && 0 === ln.querySelectorAll(".PostHogWidget".concat(n.id)).length && an(e, n), "selector" === (null === (o = n.appearance) || void 0 === o ? void 0 : o.widgetType) && null !== (r = n.appearance) && void 0 !== r && r.widgetSelector)) {
                        var i = ln.querySelector(n.appearance.widgetSelector);
                        if (i)
                            if (0 === ln.querySelectorAll(".PostHogWidget".concat(n.id)).length) an(e, n);
                            else if (1 === ln.querySelectorAll(".PostHogWidget".concat(n.id)).length && !i.getAttribute("PHWidgetSurveyClickListener")) {
                            var l, c, u = null === (l = ln.querySelector(".PostHogWidget".concat(n.id))) || void 0 === l || null === (c = l.shadowRoot) || void 0 === c ? void 0 : c.querySelector(".survey-form");
                            i.addEventListener("click", (function() {
                                u && (u.style.display = "none" === u.style.display ? "block" : "none", u.addEventListener("PHSurveyClosed", (function() {
                                    return u.style.display = "none"
                                })))
                            })), i.setAttribute("PHWidgetSurveyClickListener", "true")
                        }
                    }
                    if (n.type === a.Popover && 0 === ln.querySelectorAll("div[class^='PostHogSurvey']").length) {
                        var s, d = null === (s = n.conditions) || void 0 === s ? void 0 : s.seenSurveyWaitPeriodInDays,
                            p = localStorage.getItem("lastSeenSurveyDate");
                        if (d && p) {
                            var _ = new Date,
                                f = Math.abs(_.getTime() - new Date(p).getTime());
                            if (Math.ceil(f / 864e5) < d) return
                        }
                        if (!localStorage.getItem("seenSurvey_".concat(n.id))) {
                            var h = function(e, n) {
                                var t = Y.createElement("div");
                                t.className = "PostHogSurvey".concat(n);
                                var o = t.attachShadow({
                                    mode: "open"
                                });
                                if (e) {
                                    var r = Object.assign(Y.createElement("style"), {
                                        innerText: e
                                    });
                                    o.appendChild(r)
                                }
                                return Y.body.appendChild(t), o
                            }(X(null == n ? void 0 : n.appearance), n.id);
                            z(Ne(sn, {
                                posthog: e,
                                survey: n
                            }, "popover-survey"), h)
                        }
                    }
                }))
            }), n)
        };

    function un(e) {
        ln && rn && (cn(e, !0), setInterval((function() {
            cn(e, !1)
        }), 3e3))
    }

    function sn(e) {
        var t, r, i, l = e.survey,
            a = e.posthog,
            c = e.readOnly,
            u = e.style,
            s = e.initialDisplayState,
            d = e.previewQuestionIndex,
            p = o(ge(s || "survey"), 2),
            _ = p[0],
            f = p[1];
        be((function() {
            var e;
            !c && a && (rn.dispatchEvent(new Event("PHSurveyShown")), a.capture("survey shown", {
                $survey_name: l.name,
                $survey_id: l.id,
                sessionRecordingUrl: null === (e = a.get_session_replay_url) || void 0 === e ? void 0 : e.call(a)
            }), localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString()), rn.addEventListener("PHSurveyClosed", (function() {
                f("closed")
            })), rn.addEventListener("PHSurveySent", (function() {
                var e, n;
                if (null === (e = l.appearance) || void 0 === e || !e.displayThankYouMessage) return f("closed");
                f("confirmation"), null !== (n = l.appearance) && void 0 !== n && n.autoDisappear && setTimeout((function() {
                    f("closed")
                }), 5e3)
            })))
        }), []);
        var h = null != u && u.left && Pe(null == u ? void 0 : u.left) ? {
            left: u.left - 40
        } : {};
        return Ne(H, {
            children: Ne(te.Provider, {
                value: {
                    readOnly: !!c,
                    previewQuestionIndex: null != d ? d : 0,
                    textColor: J((null === (t = l.appearance) || void 0 === t ? void 0 : t.backgroundColor) || K.backgroundColor)
                },
                children: ["survey" === _ && Ne(pn, {
                    survey: l,
                    posthog: a,
                    styleOverrides: u
                }), "confirmation" === _ && Ne(ze, {
                    confirmationHeader: (null === (r = l.appearance) || void 0 === r ? void 0 : r.thankYouMessageHeader) || "Thank you!",
                    confirmationDescription: (null === (i = l.appearance) || void 0 === i ? void 0 : i.thankYouMessageDescription) || "",
                    appearance: l.appearance || K,
                    styleOverrides: n(n({}, u), h),
                    onClose: function() {
                        return f("closed")
                    }
                })]
            })
        })
    }
    var dn = function(e, n, o, r, i) {
        var l;
        return (t(l = {}, c.Open, Ne(Ye, {
            question: e,
            appearance: o,
            onSubmit: r,
            closeSurveyPopup: i
        })), t(l, c.Link, Ne(Xe, {
            question: e,
            appearance: o,
            onSubmit: r,
            closeSurveyPopup: i
        })), t(l, c.Rating, Ne(Ge, {
            question: e,
            appearance: o,
            questionIndex: n,
            onSubmit: r,
            closeSurveyPopup: i
        })), t(l, c.SingleChoice, Ne(Ke, {
            question: e,
            appearance: o,
            questionIndex: n,
            onSubmit: r,
            closeSurveyPopup: i
        })), t(l, c.MultipleChoice, Ne(Ke, {
            question: e,
            appearance: o,
            questionIndex: n,
            onSubmit: r,
            closeSurveyPopup: i
        })), l)[e.type]
    };

    function pn(e) {
        var r, i, l = e.survey,
            a = e.posthog,
            c = e.styleOverrides,
            u = J((null === (r = l.appearance) || void 0 === r ? void 0 : r.backgroundColor) || K.backgroundColor),
            s = o(ge({}), 2),
            d = s[0],
            p = s[1],
            _ = ye(te),
            f = _.readOnly,
            h = _.previewQuestionIndex,
            v = o(ge(f ? h : 0), 2),
            g = v[0],
            b = v[1],
            m = function(e, o) {
                var r = 0 === o ? "$survey_response" : "$survey_response_".concat(o);
                if (o === l.questions.length - 1) return ne(n(n({}, d), {}, t({}, r, e)), l, a);
                p(n(n({}, d), {}, t({}, r, e))), b(o + 1)
            },
            y = l.questions.length > 1;
        return Ne("form", {
            className: "survey-form",
            style: n({
                color: u,
                borderColor: null === (i = l.appearance) || void 0 === i ? void 0 : i.borderColor
            }, c),
            children: l.questions.map((function(e, n) {
                return y ? Ne(H, {
                    children: g === n && Ne("div", {
                        className: "tab question-".concat(n, " ").concat(e.type),
                        children: dn(e, n, l.appearance || K, (function(e) {
                            return m(e, n)
                        }), (function() {
                            return _n(l, a, f)
                        }))
                    })
                }) : dn(l.questions[n], n, l.appearance || K, (function(e) {
                    return m(e, n)
                }), (function() {
                    return _n(l, a, f)
                }))
            }))
        })
    }
    var _n = function(e, n, o) {
        var r;
        !o && n && (n.capture("survey dismissed", {
            $survey_name: e.name,
            $survey_id: e.id,
            sessionRecordingUrl: null === (r = n.get_session_replay_url) || void 0 === r ? void 0 : r.call(n),
            $set: t({}, "$survey_dismissed/".concat(e.id), !0)
        }), localStorage.setItem("seenSurvey_".concat(e.id), "true"), rn.dispatchEvent(new Event("PHSurveyClosed")))
    };

    function fn(e) {
        var n, t, r = e.survey,
            i = e.posthog,
            l = e.readOnly,
            a = o(ge(!1), 2),
            c = a[0],
            u = a[1],
            s = o(ge({}), 2),
            d = s[0],
            p = s[1],
            _ = me(null);
        return be((function() {
            var e, n;
            if (!l && i) {
                if ("tab" === (null === (e = r.appearance) || void 0 === e ? void 0 : e.widgetType) && _.current) {
                    var t, o = _.current.getBoundingClientRect(),
                        a = {
                            top: "50%",
                            left: parseInt("".concat(o.right - 360)),
                            bottom: "auto",
                            borderRadius: 10,
                            borderBottom: "1.5px solid ".concat((null === (t = r.appearance) || void 0 === t ? void 0 : t.borderColor) || "#c9c6c6")
                        };
                    p(a)
                }
                if ("selector" === (null === (n = r.appearance) || void 0 === n ? void 0 : n.widgetType)) {
                    var s = ln.querySelector(r.appearance.widgetSelector || "");
                    null == s || s.addEventListener("click", (function() {
                        u(!c)
                    })), null == s || s.setAttribute("PHWidgetSurveyClickListener", "true")
                }
            }
        }), []), Ne(H, {
            children: ["tab" === (null === (n = r.appearance) || void 0 === n ? void 0 : n.widgetType) && Ne("div", {
                className: "ph-survey-widget-tab",
                ref: _,
                onClick: function() {
                    return !l && u(!c)
                },
                style: {
                    color: J(r.appearance.widgetColor)
                },
                children: [Ne("div", {
                    className: "ph-survey-widget-tab-icon"
                }), (null === (t = r.appearance) || void 0 === t ? void 0 : t.widgetLabel) || ""]
            }), c && Ne(sn, {
                posthog: i,
                survey: r,
                style: d
            }, "feedback-widget-survey")]
        })
    }
    u && (u.extendPostHogWithSurveys = un)
}();
//# sourceMappingURL=surveys.js.map